# How to trade

Signa trades index shares recorded in the user's account. Buying uses USDT to establish a theme-and-direction position; selling converts shares already held back into USDT at the current quote.

::: info Index shares are not on-chain tokens
Shares are not sent to your wallet, cannot currently be transferred to another user, and cannot be withdrawn directly. Sell them into USDT first, then withdraw available USDT.
:::

## Choose the theme, then the direction

| Your view | Choose | Typical behavior |
| --- | --- | --- |
| The target state will strengthen | Long index | Rises when component markets increasingly support the theme |
| The target state will weaken | Short index | Rises when component markets increasingly oppose the theme |

For a peace-process theme, choose long if you expect the collective pricing of ceasefires, negotiations, and related events to become more favorable to peace. Choose short if you expect that state to weaken.

::: info Short is not “sell”
Sell only reduces shares you already hold. You cannot open a short by selling without a position. To obtain opposite exposure, buy the corresponding short index.
:::

## Buying

1. Open a theme and choose long or short.
2. Select Buy and enter the USDT principal.
3. Review estimated shares, reference level, opening fee, and total payment.
4. Request a server quote, which locks the index price, fee, index version, and expiry.
5. Confirm before the countdown ends; otherwise request a new quote.
6. Review shares and the receipt in Holdings and History.

## Selling

1. Select Sell in the trading panel or open Quick Sell from Holdings.
2. Select a position and enter shares, or choose 25%, 50%, or all.
3. Review gross proceeds, closing fee, and estimated USDT receipt. It is a current quote, not a guarantee of a future exit price.
4. Request and confirm the server quote before it expires.
5. Executed shares are removed and USDT is credited to the available balance.

Only shares actually held by the signed-in account can be sold.

## Why might trading be unavailable?

New quotes or orders may be paused when:

- the latest index price is missing or stale;
- trading, order routing, or post-trade processing is not ready;
- safety conditions require new orders to be disabled;
- an order is outside the minimum/maximum or a buy exceeds available USDT;
- a sell exceeds the current position.

Existing holdings and history remain visible. An unavailable index price is never treated as zero.

## Quote versus index level

The index level records state change; it is not an on-chain token denominated in USDT. The product uses the reference level to calculate shares and sale amounts, then issues a time-limited server quote.

Only a valid confirmation-page quote can execute. Historical levels, charts, and expired quotes are not executable prices.
