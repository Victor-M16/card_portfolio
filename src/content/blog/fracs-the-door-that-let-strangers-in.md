---
title: "The door that would have let strangers in"
description: "In 2024 I built FRACS, a door that unlocks for faces it knows, and it won first place at the Starck Innovation Awards. Two years later I measured it properly. At its default setting it would have let strangers in as someone else 82 times out of 94."
pubDate: 2026-10-06
tags: ["fracs", "computer-vision", "raspberry-pi", "esp32", "security"]
cover: "../../assets/facial_recognition.png"
coverAlt: "The FRACS web portal showing the live camera feed and the list of enrolled people."
---

In April 2024 I built a door that unlocks when it sees a face it knows. A Raspberry Pi watches through a camera, recognises the person, and tells an ESP32 to turn a servo that moves the lock. It won first place at the 2024 Starck Innovation Awards.

In September 2026 I went back to it and measured it properly. At the setting it shipped with, if you took one person out of the system and showed the camera their photos, it would have let them in as somebody else 82 times out of 94.

This is the story of that door, and what it taught me about building systems that make decisions about real people.

## How it worked in 2024

FRACS (Facial Recognition Access Control and Surveillance System) had three parts:

- **A Raspberry Pi** with a camera, running a Flask web portal and the face recognition.
- **An ESP32** on the local Wi-Fi, running a small web server with two commands: lock and unlock.
- **A servo** on the door, driven by the ESP32.

The recognition used the `face_recognition` library, built on dlib. It turns each face into a list of 128 numbers. Two photos of the same person produce lists that are close together; two different people produce lists that are further apart. Enrolling someone meant taking photos of them, turning each photo into its 128 numbers, and saving the lot.

The Pi had one camera and two jobs: stream live video to the portal, and run recognition on the same frames. Two parts of the program can't both own one camera, so I wrapped the camera in a singleton, a class that guarantees only one instance ever exists, with a lock around reading frames. That was my first real lesson in running a model and a web server together on hardware that was never meant for it.

The access rules were written straight into the code:

```python
if currentname in ["Pemphero", "Unknown"]:
    lock()
if currentname in known_faces.values():
    if currentname != "Pemphero":
        unlock()
```

Pemphero was our test of someone who is enrolled but not allowed in. Changing who could enter meant editing the program.

It worked. The demo was convincing: walk up, the door opens; a stranger walks up, it stays shut. It won.

## What I knew, and what I didn't

Some of the gaps I knew about in 2024. The portal had no login. There was no database: face encodings lived in a pickle file, and who was allowed in lived in the code. I did try to add a database during the original build. It stopped the camera or the server from starting, I no longer remember which, and after several hours of debugging I ran out of time and shipped without it. I also knew the system sometimes confused me with Cliff, one of the four people enrolled.

In September 2026 I came back to the code, pair-programming with an AI coding assistant, the same way I later built Lucy. That reading turned up two problems I hadn't thought through:

**Anyone on the network could open the door.** The ESP32 obeyed any `POST /unlock` from anyone. No password, no signature. Anyone on the same Wi-Fi who found the address could open it from their phone.

**An unlock lasted until something said lock.** If the Pi crashed or the Wi-Fi dropped straight after an unlock, the door stayed open.

And the Cliff problem turned out to be much bigger than a quirk.

## Measuring the match limit

`face_recognition` decides two faces are the same person when their 128 numbers are within a distance of 0.6. That default comes from the library, not from my door. I knew the system struggled to tell Cliff and me apart, but I had never measured how badly. The agent did, without me pointing it at the problem: it ran the dataset through the system and put a number on it.

The test: take one person out of the index, show the system each of their photos, and count how often it lets them in as someone else. Then repeat at stricter limits. On the 94 usable photos of 4 people in the dataset:

| Match limit                       | Strangers let in | Enrolled people accepted |
| --------------------------------- | ---------------- | ------------------------ |
| 0.60 (the library default I used) | 82 of 94         | 94 of 94                 |
| 0.50                              | 28 of 94         | 94 of 94                 |
| 0.45                              | 0 of 94          | 94 of 94                 |
| **0.40**                          | **0 of 94**      | **94 of 94**             |

The two most similar different people in the set, Cliff and me, are about 0.45 apart. At 0.6 the system could not tell us apart, and the original matching (count which enrolled person has the most matching photos) actually misidentified Cliff as me. The new default is 0.4. It still accepted every enrolled photo in the test, and it leaves a margin below the 0.45 gap between Cliff and me.

Knowing about a problem and measuring it are different things. I knew it mixed up Cliff and me. I didn't know that, at its default setting, it would let almost anyone in as somebody else. Seeing that as a number, then watching the limit tuned until the problem was gone on our data, was new. A demo shows that a system works for the cases you thought of. Measuring is how you find the ones you didn't.

## The rebuild

The 2026 version keeps the idea and replaces most of the code:

- **FastAPI and SQLite** instead of Flask and a pickle file. People, photos, face encodings, accounts and an access log live in a database. Who is allowed in is a setting in the portal, not a line of code.
- **A login** on every page, API route, video stream and live-update socket. Passwords are stored as salted scrypt hashes, sessions expire, and repeated wrong passwords lock the account out for a minute.
- **Signed lock commands.** The Pi first asks the ESP32 for a single-use number, then signs the command with a secret only the two of them share (HMAC-SHA256). Someone on the network can see a command go past, but can't forge one or replay it.
- **Fail-secure by design.** Every unlock relocks by itself after 5 seconds, on the ESP32, so a lost connection can't leave the door open. The ESP32 locks when it powers on, and the Pi sends a lock when it starts. If the secrets don't match, the ESP32 refuses everything and the door stays locked.
- **One unknown face keeps the door shut**, even when someone who is allowed in is standing next to them.
- **Tests that run on every change**, including a check that compiles the ESP32's signing code and confirms it produces exactly the same signatures as the Pi.

## What it still can't do

FRACS is a prototype, and its README says so.

**A photo can probably fool it.** There is no liveness detection, nothing that checks the face is a real person in front of the camera rather than a picture on a phone. That is the biggest gap.

**One frame is enough to unlock.** A single good match opens the door.

**I haven't measured it at the door.** The 0.4 limit was tuned on photos, not on live footage from the Pi camera, and I haven't measured speed or accuracy on the Pi itself.

Fail-secure also has a cost. When the system is down, the door is locked, so anyone fitting something like this needs a mechanical way out from the inside and a key for when the power is off.

## Why this project keeps coming back

FRACS was the first time I hit a wall I keep hitting: a system making a real decision about a real person, using perception that used to need a GPU, on hardware that will never have one. A door on a Raspberry Pi. A vending machine handing out medication. A bank checking an ID on CPU-only servers. Now Lucy, listening to Chichewa on a desktop CPU.

The lesson from FRACS carries into all of them. Every one of these systems needs a number for how often it gets the wrong person, measured on data that looks like the real world, before it gets anywhere near a real door.

The code is on [GitHub](https://github.com/Victor-M16/Facial-Recognition-Access-Control-System).
