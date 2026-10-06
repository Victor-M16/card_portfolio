---
title: "The core you don't share is the core that works"
description: "What a slow OCR service taught me about where inference time really goes, and why I want to spend a PhD on running transformers on CPUs."
pubDate: 2026-10-06
tags: ["cpu-inference", "performance", "malawi", "lemonade-systems"]
featured: true
---

When people talk about running AI models, the conversation usually starts and ends with GPUs. I understand why. But I work in a country where almost every cloud and API bill is paid in dollars, sometimes at parallel market rates, and that changes the question I care about. It is less "which GPU do I rent?" and more "how much can I do with hardware that is already here?"

This post is about the thing that pushed me to take that question seriously.

## A service that was slower than it should have been

At my day job I built an image-processing service that runs OCR and barcode scanning on every request. Locally it was fast. In production it was noticeably slower, and my first instinct was the usual one: blame the code, then the network.

Neither was the problem. When I finally measured properly, two things stood out.

First, the production machine was a virtual machine with a lower clock speed than my development laptop. A chunk of what I had called "slow code" was simply a slower processor. On top of that, a VM shares a physical host with other tenants, so there is a real chance of the hypervisor taking CPU time away from you. Your code is fine, and your cores are still not entirely yours.

Second, and more surprising, was how I should split the work across cores. The obvious plan is to give each worker several cores. In my load tests, the opposite won: one worker pinned to one core beat workers that each got several. My best explanation is that the math libraries underneath spent more time coordinating threads than doing useful work. More cores per worker meant more waiting, not more speed.

I carried the relative result into production planning, and treated the absolute numbers as unproven until tested on the real hardware, because a laptop's higher clock speed flatters everything.

## Why this is really an inference story

That experience was a small version of a much bigger problem. Generating text from a transformer one token at a time is usually limited by how fast the processor can move model weights out of memory, not by how fast it can multiply. A GPU has memory bandwidth measured in terabytes per second. A typical CPU has tens to a few hundred gigabytes per second. That gap is the honest reason CPUs struggle with large models, and it is why shrinking the weights (quantization), reading fewer of them (sparsity), and reusing what is already in cache all matter so much.

It is also why I find CPUs interesting rather than inferior. They are everywhere, they are what most organisations already own, and decades of architecture work went into making them good at exactly the thing my OCR service taught me about: getting data to the right place at the right time.

## Why Malawi makes this personal

I have been building [Lucy](/blog/lucy-picked-up-the-phone/), a Chichewa and English voice assistant you reach with an ordinary phone call. For tools like that to be useful to the people who need them, they cannot depend on paying a foreign provider per request, or on a data centre we do not have. A model that runs acceptably on a CPU is a model that a clinic, a bank branch or a district office could run itself. For me, digital transformation that quietly drains foreign reserves has not really transformed anything.

## The question I want to spend years on

I do not claim to have solved this. What I have is a conviction and a habit: measure first, and treat the hardware as part of the problem.

The open question is not how small a GPU-shaped model can be shrunk before it fits on a CPU. It is what a transformer would look like if it were designed for the CPU from the start, built around its caches, its branch prediction and its strong single-thread speed, while staying compatible with the machines people already have. And what that would mean for who gets to own AI built for Malawi.

That is the work I want to do next.
