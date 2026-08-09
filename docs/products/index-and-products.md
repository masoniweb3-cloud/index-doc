# Indexes and index shares

Signa Index is a rules-based index system. The current product lets users buy long or short shares with USDT and sell shares they hold when a valid quote is available.

![The index layer defines state, components, direction, weight, and level; the product layer separately defines fees, liquidity, settlement, and risks.](/images/en/09-index-vs-linked-product-en.png)

## Layer one: the Signa index

The index layer defines the target state, maintains components, aligns direction, calculates weights and levels, and publishes methodology, data, and versions.

The level describes persistent theme change. It is not one event's probability or an on-chain transferable token.

## Layer two: index shares

Index shares are positions recorded in a Signa account. A buy uses the current level and valid quote to calculate shares; a sell converts shares held back to USDT.

Current boundaries:

- not BEP-20 tokens sent to a wallet;
- not freely transferable between users;
- not directly withdrawable as shares;
- shares must be sold before available USDT can be withdrawn;
- prices, fees, limits, and availability come from the valid confirmation quote.

## How are shares calculated?

Simplified:

$$
\text{Shares purchased}=\frac{\text{Buy principal}}{\text{Reference index level in the quote}}
$$

An index display anchor of 100 does not mean 100 points inherently equal 100 USDT. The current product uses the reference level to calculate shares and position value; that is a quoting rule, not the monetary definition of an index point.

## Why the distinction matters

- An index rise does not automatically give every user a return; the user must hold shares in that direction.
- A displayed level is not the fixed USDT price of an on-chain asset.
- Share results also depend on opening fees, timing, quote validity, and product availability.

Index performance is not a return guarantee. Actual results come from order receipts, the account ledger, and applicable product rules.
