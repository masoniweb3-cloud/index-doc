# Fees

| Operation | Current fee | Collected by |
| --- | ---: | --- |
| Deposit | No Signa deposit fee | BSC charges BNB gas for the wallet transfer |
| Buy | 1% of principal | Signa opening fee |
| Sell | 0% | No current closing fee |
| Withdraw | As shown on the withdrawal page | Deducted from the requested total |

## What exactly is the 1%?

The current **1% is an opening fee charged on buys**. It is collected when a user buys and creates index shares, and is shown separately from the principal used to calculate shares.

It is not:

- a “profit tax” based on gains;
- BSC gas for a deposit;
- a withdrawal fee;
- a direct adjustment to the index level.

### Buy example

For a principal of **100 USDT** and a 1% opening fee:

| Item | Amount |
| --- | ---: |
| Principal used to calculate shares | 100 USDT |
| 1% opening fee | 1 USDT |
| Total payment | 101 USDT |

The available balance must cover the total payment, not only the principal.

## Is there a sell fee?

Under the current rules:

- the opening fee is charged only on buys;
- the sell closing fee is **0%**;
- the gross sale amount shown is the amount expected to be credited under current rules.

Completed orders retain the actual fees charged at execution and are not rewritten if rules later change.

## Other costs

### BSC gas

Sending USDT from a wallet to the dedicated deposit address requires BNB gas paid to the BSC network. It varies with network conditions.

### Withdrawal fee

A fixed withdrawal fee may apply. Before signing, the page shows the total account deduction, the fee, and the estimated wallet receipt. The amount must exceed the fee.

::: warning The confirmation page is authoritative
Fees and rules may change. Before buying, selling, or withdrawing, review the current rate, actual amounts, and quote validity on the confirmation page.
:::
