---
title: "Lucy picked up the phone"
description: "Lucy, a Chichewa and English voice assistant you reach with an ordinary phone call, answered her first call on a phone line I run myself, then talked back. How it works, what broke, and where the seconds go."
pubDate: 2026-10-05
tags: ["lucy", "lemonade-systems", "chichewa", "speech-recognition", "text-to-speech", "cpu-inference"]
---

In 2024 I built the first version of Lucy on Twilio. Every test meant calling a foreign number from my phone in Malawi, on airtime. If I had kept building that way, I would have spent around 10,000 kwacha on airtime by now, just to hear my own prototype answer.

Today Lucy answered a call on a phone line I run myself, on my desktop, and it cost me nothing.

Lucy is a voice assistant you reach with an ordinary phone call, in Chichewa or English. Most Malawians have a phone. Far fewer have a smartphone with data. A caller speaks, Lucy works out what they asked, and answers out loud. No app, no internet, no reading required on their side.

## My own phone line

This time Lucy runs on Asterisk, an open-source phone system, in Docker on my desktop. A small Python program sits behind it. Asterisk streams the caller's audio to Python in 20 millisecond chunks, and Python can send audio back down the line. I test it with Zoiper, a free softphone app, on my phone over Wi-Fi.

The first real call kept failing with "wrong username or password". The password was right. It turned out my desktop already had two other phone servers installed, a system copy of Asterisk and something called Kamailio, left over from older experiments. Both started at boot and grabbed the standard SIP port before Lucy's Asterisk could. My softphone was talking to the wrong server the whole time.

I would not have found that myself. I was pair-programming with an AI coding assistant, and it read the startup logs, found "Address already in use", and traced the port to the two services. Once I disabled them, the call connected. Linphone, the first softphone I tried, still refused to log in until I cleared its saved data. Zoiper worked first time.

The first working call did one thing: it played my own voice back to me. That was the point. It proved audio flows both ways.

## Twenty sentences over a real call

The biggest risk in Lucy is not the AI. It is whether a speech recognition model can understand Chichewa through a phone line. Phone audio is narrow (only 300 to 3400 Hz survives) and compressed, and most models are trained on clean recordings.

So before building anything else, I measured. I taught the bridge to notice when a caller stops talking (about 0.7 seconds of silence), save that sentence as an audio file, and beep. Then I called in and read 20 sentences, pausing for the beep after each one.

The sentences sound like real callers: asking about tomorrow's weather in Lilongwe, the price of fertiliser, a child with malaria, sending money to Blantyre on Airtel Money, a bus to Mzuzu, MSCE results, tobacco prices in Kasungu, a loan for university. Some mix English into Chichewa, because that is how we talk. _Network ya Airtel ili down kuno ku Mangochi._

## The results

The model that did best is w2v-bert-2.0-chichewa from CLEAR Global, the nonprofit behind Translators without Borders. It is built on a speech model from Meta that was pre-trained on millions of hours of audio in over 140 languages, then trained further on 307 hours of Chichewa. It is MIT licensed.

On my 20 sentences, recorded over a real call:

| Measure                                              | Result         |
| ---------------------------------------------------- | -------------- |
| Sentences transcribed perfectly                      | 9 of 20        |
| Word error rate                                      | 27%            |
| Character error rate                                 | 6.4%           |
| Time to transcribe a 3 second sentence (desktop CPU) | about 1 second |

A 27% word error rate sounds bad. Most of it is spelling, not hearing. The model wrote _yamawa_ for _ya mawa_ and _kumsika_ for _ku msika_. Joining two words counts as two errors, so _zikomokwambiri_ scored 100% wrong even though every sound was right. English words came out spelled the Chichewa way: _yunivesite_, _loni_, and _erto man_ for Airtel Money.

The character error rate tells the real story: about 6 letters in 100 wrong. An LLM reading _ndikufuna kutumiza ndalama ku blantir pa erto man_ knows exactly what the caller wants. When I tested it, it did.

The caveat: one speaker (me), one phone, reading clearly from a script. Real callers will be harder.

## The bottleneck I expected

Next I connected the transcript to an LLM. For now that is Gemini on the free tier, behind the standard OpenAI-style API, so swapping in another model later is a configuration change.

The replies were good. Correct Chichewa, short, and it understood _erto man_. The timing was not. The same question took anywhere from 1 second to 47 seconds. One model returned an error saying it did not exist, another said it was overloaded. Gemma 4 is also available through the same API, which is useful for testing, but it was slow too (8 to 44 seconds) and printed its own reasoning into the reply.

This did not surprise me. A free tier makes no promises about response time, and you are queueing behind everyone else. But it puts a number on the problem. My target is under 2 seconds from the moment a caller stops talking to the moment Lucy starts answering. Nobody holds a silent phone for 47 seconds.

For now Lucy gives up after 10 seconds instead of leaving the caller in silence. The real fix is a model I control.

## She speaks

A few hours later, Lucy talked back. I gave her a voice: an openly licensed Chichewa text-to-speech model trained on Open Bible recordings, running on the same CPU. When a call connects she says _Moni, ndine Lucy. Ndingakuthandizeni bwanji lero?_ and every reply is spoken, one sentence at a time.

My first real conversation with her ran 14 turns. I asked about the capital, about political parties, about what UDF stands for. She answered in Chichewa. When she said UDF ruled from 1994, she said the year in words, _chikwi chimodzi makumi asanu ndi anayi mphambu zinayi_, because I had told her the voice cannot read digits. On that call Gemini behaved: 2.2 seconds per reply on average.

Three things were not right.

**Her voice.** Lucy is a woman, at least in version one. On a phone line, the only openly licensed Chichewa voice I found sounds like a village preacher and father of three, enthusiastically explaining Malawian politics. I know who I want to ask to be Lucy's real voice.

**She made something up.** I said _kapita fiti ya Lilongwe_, meaning capital city. Speech recognition wrote down what it heard, and the LLM confidently explained that "CapitaFifi" is a lending company in Lilongwe. It took five turns to get back on track. That is funny once. For a bank or a clinic it is the whole problem. Her instructions now say never to invent names, and to ask the caller to repeat a word she does not recognise.

**She is slow.** Every turn is timed, so I know exactly where the seconds go:

| Step                                | Median time |
| ----------------------------------- | ----------- |
| Speech recognition                  | about 1 s   |
| Gemini reply                        | 2.2 s       |
| Preparing her first spoken sentence | 1.7 s       |
| **Until Lucy starts speaking**      | **5.3 s**   |

Add about 0.7 seconds while she makes sure I have stopped talking. My target is 2 seconds.

## Why CPU

Everything except the LLM runs on a desktop CPU. No GPU. That is deliberate.

A GPU server costs money every month whether anyone calls or not. Lucy has to cost very little per call to make sense in Malawi, so it has to run on the cheapest hardware that can do the job. Usually that means CPUs.

This is also my research interest. Most efficient-inference work takes a model shaped for GPUs and shrinks it until it fits on a CPU. I think the better question is what inference looks like if you design for the CPU from the start: its caches, its branch prediction, its strong single-thread speed. Computer architects asked that kind of question decades ago, and answered it with out-of-order execution and memory hierarchies built around locality. Nobody has seriously asked it for transformers on CPU.

Lucy turns that into a concrete problem with two different shapes:

- **Speech recognition is compute-bound.** It processes a whole sentence at once, about 150 audio frames through 606 million parameters. The CPU's arithmetic is the limit. Today a 3 second sentence takes about 1 second.
- **LLM replies are memory-bandwidth-bound.** A model generates one word piece at a time and reads all its weights for each one. Moving data, not arithmetic, is the limit. Quantization helps here because there is less data to move.

I have a Raspberry Pi 4 on my desk. Getting both of those fast enough on it would say more than any paragraph I could write.

## What's next

Lucy can hold a conversation. Now she has to hold a good one. In order:

1. **Trust.** No invented facts across a set of tricky test questions.
2. **A woman's voice.** First from a short sample, recorded with consent, of the woman I want to be Lucy's voice. Then a full voice trained on her recordings, owned by Lemonade Systems.
3. **Under 3 seconds per turn, then under 2.** This is where the CPU work starts paying off, down to the milliseconds.
4. **A real phone number,** so anyone can call from any phone, and 20 real callers from outside my circle.

In 2024 every test call cost me airtime. Today the phone line and the code are mine, the speech models are open, and Lucy talks back in Chichewa. It cost me nothing. Next, she has to be worth calling.
