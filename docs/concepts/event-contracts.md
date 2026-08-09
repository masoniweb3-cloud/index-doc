# Event contracts

**What people normally call a “prediction market” is treated as an event contract in the Signa Index methodology.**

When people say that a prediction market has opened on an event, they usually mean that participants trade different outcomes to a specific question and the market settles after the answer is known.

For example:

> Will a country cut interest rates before the end of this year?

The market may have YES and NO outcomes. Trading forms a market price, and the result is determined after year-end according to rules written in advance.

In these documents, a **specific market unit with a clear question, an observable price, and an expiry and settlement process** is called an event contract.

## Why use this term?

“Prediction market” can mean an entire product or platform, or one specific question. For calculation precision, Signa uses “event contract” for a particular market that can be included in an index.

One event contract represents one bounded question. One Signa Index may use many event contracts to describe a persistent real-world state.

## What information does it provide?

Its price reflects how participants currently price an outcome. A rising YES price usually means the market assigns more weight to that outcome; a falling price means less.

Signa Index uses observable changes formed by a real market rather than having a model independently generate a probability.

An event contract is a price input, not the persistent state the index ultimately expresses.

## Basic eligibility requirements

A candidate contract should generally have:

- a clear, verifiable proposition;
- defined YES, NO, or other outcomes;
- public settlement criteria and a deadline;
- continuously accessible market prices;
- enough price quality for index calculation;
- an explainable causal link to the target state.

## YES does not mean positive

YES only means the proposition in the question is true. It does not necessarily mean that the observed state improves.

For example, a rising YES price for “Will the conflict escalate?” can weaken a peace-process state. Event contracts must therefore pass through state-direction mapping before being calculated together.

## Expiry and settlement

Event contracts have finite lives. Once settled, they provide no new price changes, but the world state they informed may continue.

Signa updates the event set through scheduled reviews and rolling continuity, converting short-lived contracts into a persistent state series.
