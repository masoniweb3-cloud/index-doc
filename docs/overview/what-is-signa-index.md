# What is Signa Index?

**Signa Index combines multiple prediction markets around the same real-world theme into one continuously updated index.**

Suppose you want to understand whether a regional peace process is improving or deteriorating. One market on whether a ceasefire will be signed is not enough. The resumption of negotiations, escalation of military action, removal of sanctions, and progress in third-party mediation can all affect the peace process.

Each event answers a specific question. Signa Index aligns them to a common direction and produces an index that continuously reflects changes in the peace process.

Just as an equity index uses the prices of multiple companies to describe their collective performance, Signa Index uses event-contract prices to describe the overall change in a real-world state.

![Event-contract prices pass through world-state mapping to form a continuous index that can be referenced by long or short index shares.](/images/en/01-what-is-signa-index-en.png)

## What is a world state?

A world state is a persistent real-world direction that cannot be fully described by one event but is advanced by a series of events. For example:

- whether a country's development momentum is strengthening or weakening;
- whether a region's geopolitical environment is easing or deteriorating;
- whether a technology is accelerating in adoption or losing momentum;
- whether a political force is expanding or contracting.

Individual events occur, end, and settle, while these states continue to change.

## How does Signa turn events into an index?

Signa does four things:

1. identifies events that genuinely affect the target state;
2. determines whether each outcome strengthens or weakens that state;
3. assigns weights based on event importance and market quality;
4. brings in new events as old ones expire, keeping the index continuous.

Signa Index is therefore not a simple average of event probabilities. It is the market's continuous repricing of a persistent real-world direction.

## What is the difference between the index and the shares you buy?

There are three distinct layers:

1. **Event contracts:** specific prediction-market questions that form a market price for an outcome.
2. **Signa indexes:** aggregations of multiple event contracts that continuously calculate long or short levels for a real-world theme.
3. **Index shares:** trading positions quoted by Signa from index levels and recorded in the user's account.

Users trade index shares, not the underlying prediction-market contracts. Index shares are not BEP-20 tokens sent to a wallet. They currently cannot be transferred to another user or withdrawn directly on-chain. To exit, users first sell shares back into USDT and then withdraw available USDT to the connected wallet.

The index level is not a probability or a token price inherently denominated in USDT. The number of shares bought and the USDT received on sale are determined by the confirmed product quote while it remains valid.

## Formal definition

> A world-state index is a rules-based synthetic index that uses event-contract prices as its pricing foundation and combines discrete events into long-term real-world-state exposure through world-state mapping, direction alignment, state-exposure weighting, and continuous rolling.
