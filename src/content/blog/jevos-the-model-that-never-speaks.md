---
title: "The model that never speaks"
description: "I tried Jevos, an open-source decision model that runs locally on a CPU. It answers yes-or-no questions without generating a single token, and that is exactly why it's fast."
pubDate: 2026-10-08
tags: ["cpu-inference", "jevos", "openvino", "decision-models"]
---

Some decisions in software are too fuzzy for an `if` statement and too small to justify an LLM. Is this a billing complaint? Does this OCR output look like it came from a damaged ID? Should this case go to a human?

An `if` statement can't read. An LLM can, but it reads the question, thinks, then writes an answer one word piece at a time, and on a CPU that writing is the slow part. For a decision that only needs a yes or a no, most of that work is wasted.

This week I tried Jevos. Jev is a decision model from TypeSafe AI, and Jevos and Laya are open-source versions of it that run locally. It blew my mind, because it makes exactly that trade.

## What it does

You give Jevos some text (the "state") and a set of questions. For each question it returns a probability that the answer is yes. That's all. It doesn't write a reply.

A request looks like this:

```json
{
  "model": "jev-latest",
  "state": "I was charged twice for the same order.",
  "questions": {
    "billing": { "type": "noul", "instructions": "Is this a billing problem?" }
  }
}
```

And every response carries the detail that matters most:

```json
"usage": { "input_tokens": 129, "output_tokens": 0 }
```

Zero output tokens.

## Why skipping decode makes it fast

Running a language model has two phases. **Prefill** reads the whole prompt at once. It's a lot of arithmetic, done in parallel, and CPUs handle it reasonably well. **Decode** then generates the answer one token at a time, and for every single token the processor has to read all of the model's weights out of memory again. Decode is limited by memory bandwidth, not arithmetic, and memory bandwidth is exactly where a CPU falls furthest behind a GPU.

Jevos never decodes. It reads the prompt and turns what it understood into probabilities. Then it runs INT8 weights through Intel's OpenVINO runtime, which uses the VNNI instructions modern CPUs already have for exactly this kind of integer arithmetic. The project reports answers in 26 ms on short requests and 112 ms on long ones on a laptop CPU. On my own machine, a 1B model answered in about 1.15 seconds. That's slower than the published figures, and I haven't yet dug into why (my CPU, the request size, or a cold start), but it's a model reading and judging a paragraph of text on an ordinary computer in about a second.

This is the argument I keep making about CPU inference, shown in a product: stop shrinking a GPU-shaped workload until it fits, and shape the task around what the CPU is good at. Jevos doesn't make decode faster. It removes the need for it.

## Trying it on a real kind of problem

I wanted a decision from my own world. Reading identity documents is a problem I know well: worn cards, faded print, OCR that confuses letters with digits. So I wrote a made-up OCR result for a damaged ID, using my own name, and asked three questions:

```json
{
  "model": "jev-latest",
  "state": "OCR output from national ID scan. Surname: MJIMAP3MBA. First name: V1CTOR. Date of birth: 14/O6/2OO1. ID number: 7XK2-??9L. Barcode decode: failed.",
  "questions": {
    "ocr_corrupted": {
      "type": "noul",
      "instructions": "Does this OCR output contain character substitutions or unreadable fields that suggest a faded or damaged ID?"
    },
    "retry_preprocessing": {
      "type": "noul",
      "instructions": "Should this extraction be retried with additional image preprocessing before it is rejected?"
    },
    "manual_review": {
      "type": "noul",
      "instructions": "Is this ID too damaged to verify automatically, so a human should review it?"
    }
  }
}
```

| Question                 | Probability of yes |
| ------------------------ | ------------------ |
| OCR output is corrupted  | 0.77               |
| Retry with preprocessing | 0.65               |
| Send to a human          | 0.88               |

It noticed the substitutions: 3 for E, 1 for I, O for 0. It also leaned towards a human over another attempt, which is the opposite of my instinct. I would rather push harder with preprocessing before giving up on a customer. With a failed barcode and a half-unreadable ID number it may have a point. But this is one example, not evidence.

## What it would take to trust it

Probabilities are not decisions. Before something like this goes near a real pipeline:

- **Thresholds have to come from data.** These probabilities aren't calibrated to any particular kind of document. You would run a few hundred past cases with known outcomes through it, and pick the cut-offs that would have made the right call most often.
- **The questions should be asked in order.** Ask about retrying first, retry, and only ask about a human if the retry fails too. That puts the "push harder first" policy into the pipeline instead of leaving it to the model.
- **Speed has to be measured on the real hardware.** The published numbers come from a modern laptop chip with VNNI. An older server CPU may behave very differently, and finding out how differently is my research question in miniature.

## Where it doesn't help

Lucy, my Chichewa voice assistant, can't copy this trick. She has to speak, so she can't skip decode. Making generation itself fast on a CPU is still the open problem.

But a lot of what we build isn't generation. It's routing, flagging and checking: is this ID valid, does this document match, should this be escalated. For those, a model that only reads might be all you need, and it will run on the computers people already own. I think Jevos, or something built the same way, is going to show up in my work.
