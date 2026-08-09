# Data sources

Base price inputs come from observable, real event-contract markets. Sources must support stable collection, historical reproduction, and clear timestamps.

## Required records

For each candidate contract, record at least:

- market and contract identifiers;
- original proposition and outcome options;
- settlement terms, deadline, and status;
- prices and timestamps;
- available trade, liquidity, or spread information;
- source and collection version;
- later corrections, voids, or settlement records.

## Price selection

A published methodology defines the price type, such as executable mid-price, last trade, time-weighted price, or another validated reference.

The choice should reduce the effect of isolated trades, temporary spread expansion, or single-point anomalies while remaining reproducible.

## Time consistency

Markets differ in update time, time zone, and pauses. Calculation uses one time standard and explicit rules for cutoffs, missing data, and delays.

## Multiple sources

The same event can trade on several markets. Rules should predefine whether prices are combined, a primary market is selected, or source priority is used. Source changes are recorded and do not silently rewrite history.
