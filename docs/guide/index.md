# Getting started with Signa Index

Signa Index combines multiple prediction markets under one real-world theme into a continuous index. In the current product, users can use USDT to buy long or short index shares and later sell shares they hold.

## Six things to know first

1. **The product currently uses BNB Smart Chain (BSC).** Deposits and withdrawals use USDT (BEP-20) on BSC.
2. **Each theme has two directions.** The long index follows the theme; the short index moves in the opposite direction.
3. **Buy opens a position; sell reduces it.** Selling does not open the opposite position. To express the opposite view, buy the short index.
4. **The current 1% fee is an opening fee charged on buys.** It is not a profit tax or sell fee. The current closing fee is 0%.
5. **Index shares are not wallet tokens.** They are recorded in your Signa account, cannot be transferred to another user, and must be sold back into USDT before withdrawal.
6. **Funds are custodied after deposit.** Dedicated addresses identify deposits; confirmed USDT is managed through multiple checks and a reconcilable ledger. This is not an end-to-end self-custody model.

## A complete user flow

### 1. Sign in and prepare funds

Connect a BSC-compatible wallet and sign in. Depositing from the connected wallet also requires a small amount of BNB for network gas.

### 2. Deposit BSC USDT

Open Deposit. Send directly from the connected wallet or copy the dedicated BSC deposit address assigned to you. After the required confirmations, USDT is credited to your available trading balance.

### 3. Choose a theme and direction

Select a theme from the [six launch indexes](/indexes/), decide whether its state will strengthen or weaken, and choose the long or short index. These are independent continuous levels, not YES/NO prices that must add to 100.

### 4. Get a quote and confirm the buy

Enter a USDT principal amount. The system shows the reference index level, estimated shares, opening fee, and total payment. The server quote is valid only for the countdown period.

### 5. View or sell the position

After execution, Holdings shows shares, average entry price, current value, and unrealized P&L. Selling can only reduce shares already held in the account.

### 6. Withdraw

Available USDT after a sale can be withdrawn to the currently connected wallet. A new wallet signature confirms the amount, fee, and destination address.

::: tip Check the live product
Current levels, live components, fees, limits, and trading availability are shown on the [Signa website](https://signaindex.com/) and the order confirmation page.
:::

## Continue reading

- [Deposits and withdrawals](/guide/funding)
- [How to trade](/guide/trading)
- [The 1% opening fee and other fees](/guide/fees)
- [Returns, losses, and whether an index can reach zero](/guide/returns-and-zero)
- [How funds are held and protected](/guide/security)
- [Deposit and withdrawal troubleshooting](/guide/troubleshooting)
