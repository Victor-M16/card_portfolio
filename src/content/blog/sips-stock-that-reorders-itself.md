---
title: "Stock that reorders itself"
description: "SIPS won first place at the 2024 Digital Malawi Hackathon: RFID tags on a Raspberry Pi, a Django backend, and a forecast that raises a request for quotation before a store runs out. What we built in four days, and what was held together with tape."
pubDate: 2026-10-06
tags: ["sips", "hackathon", "rfid", "raspberry-pi", "forecasting"]
cover: "../../assets/sips_pi.jpg"
coverAlt: "Members of Team Sixth Sense holding a prize cheque at the Digital Malawi Hackathon."
---

In February 2024, Team Sixth Sense won first place at the E-Government Digital Malawi Hackathon, organised by NxtGen Labs. Our entry was SIPS, the Smarter Inventory and Procurement System. The first commit is from 31 January and the last hackathon commit from 3 February. Four days.

The idea: a store room that knows what it has, notices when something is about to run out, and starts the paperwork to buy more before it does.

## The demo

The best thing about SIPS was that you could watch it work.

Every batch of stock carries an RFID tag. When a batch leaves the store, someone taps it on a reader. The stock count on the dashboard drops. When a product falls to its reorder point, a request for quotation (RFQ) appears in the procurement module, already filled in with how much to order, the budget and the safety stock. Nobody types anything.

Tap, the number drops, the RFQ appears. That's the whole pitch, and it fits in a few seconds.

## How it worked

**The reader.** A Raspberry Pi with an RC522 RFID reader runs a small Python loop: wait for a tag, read its ID, send it on. Each tag stands for a batch of 100 units.

**The link.** The Pi sends each tag ID over a plain TCP socket to a Django server on a laptop. The laptop's IP address is written into the Pi's script, with Wongani's laptop commented out on the line above mine. That is hackathon networking.

**The stock.** The server looks up which product the tag belongs to and takes 100 units off its stock.

**The trigger.** If stock is now at or below that product's reorder point, and there isn't already an open RFQ for it, the server creates one with the order quantity, budget and safety stock. The procurement side was built to follow Public-Private Partnership Commission (PPPC) procurement rules, which mattered for a government hackathon.

The reader also knew about people. Staff had tags too, and scanning one printed whether that person was authorised to be in the store room. It was a small touch, but it hinted at where the system could go: stock and access in one place.

## The forecast

The reorder point is where the machine learning comes in. Order too late and the store runs out; order too early and money sits on shelves. Both depend on how much demand to expect.

We used SARIMAX, a classic time-series model that captures trend and repeating patterns, fitted separately for each product. It forecast the next five days of demand. From that forecast we worked out four numbers per product: how much to order, the reorder point, the safety stock and the expected cost.

## What was held together with tape

It won, and I'm proud of it. But I'd rather be honest about what four days produces.

**The demand data was made up.** We had no real store's records, so the notebook generated random daily demand between 5 and 200 units for three imaginary products over two months, then trained on that. The model was real; the patterns it learned were noise.

**The forecast didn't run live.** We ran it once in a notebook and pasted the resulting numbers into the server. The reorder points never changed as stock moved.

**The safety stock was a shortcut.** Proper safety stock comes from how wrong your forecasts tend to be: the more demand varies, the bigger the buffer you need for the service level you want. Ours took a percentile of the forecast itself, which looks reasonable on a slide and doesn't mean much.

**Everything ran on one laptop on one Wi-Fi network**, with a hardcoded IP address and no authentication between the Pi and the server.

None of that was the point of a four-day hackathon. The point was to show the loop working end to end, and it did.

## What I'd build now

- **Real data first.** A few months of a real store's issue records would do more than any model choice.
- **Forecasts that run on a schedule**, so reorder points move as demand changes, with safety stock based on actual forecast error.
- **A proper link from the reader**, over HTTPS with an authenticated device, that survives a dropped connection and keeps scans until the server is back.
- **Measure before claiming.** How often would it have ordered too early, or too late? On real data, that's a number you can compute.

That last one is the habit I've built since. My face recognition door FRACS looked perfect in its demo too, and only measuring it showed how many strangers it would have let in. A demo shows the cases you thought of. Data shows the rest.

The code is on [GitHub](https://github.com/Victor-M16/Stores-Management).
