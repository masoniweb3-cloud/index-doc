# How funds are held and protected

Signa connects wallet identity, on-chain transfers, account balances, trading positions, and withdrawal verification into a checkable, recorded funds path. These controls reduce risks such as address errors, duplicate payments, credit before confirmation, and unauthorized withdrawal.

## Six protection mechanisms

1. **Dedicated deposit addresses:** separate BSC addresses help identify account ownership.
2. **Network and asset checks:** only BSC Chain ID 56 and the specified Binance-Peg USDT contract are recognized.
3. **Credit after confirmation:** available balance increases only after transfer verification and required confirmations.
4. **Separated deposit and withdrawal controls:** distinct control paths reduce single-point impact.
5. **Reconcilable ledger:** deposits, trades, fees, positions, and withdrawals create account records.
6. **Fresh withdrawal signature:** withdrawals return only to the associated wallet after reconfirming amount, fee, address, and one-time authorization.

These mechanisms make funds states clearer and traceable and provide multiple layers of protection. No technical or custody system can promise absolute safety or be treated as deposit insurance or a risk-free guarantee.

## What does a wallet signature do?

- A sign-in signature proves control of the BSC wallet.
- A withdrawal signature confirms the destination, amount, fee, expiry, and nonce.
- Normal signing does not give Signa your private key or seed phrase.

Signa will never ask for a private key or seed phrase in documentation, support chat, or a form.

## Where are funds actually held?

After USDT is sent to a dedicated address and confirmed, it is custodied by Signa rather than held in the user's personal wallet. Available balances and index shares shown in the product are ledger records in the Signa account, not on-chain token balances in the wallet.

For withdrawal, the user signs a request. After account, balance, fee, and destination checks, withdrawable USDT is sent back to the signed-in wallet. This is a custodial product, not an end-to-end self-custody model where every trade settles directly in the user's wallet.

![A user deposits BSC USDT, buys index shares from the Signa account balance, sells them back to USDT, and withdraws to the connected wallet.](/images/en/12-funds-and-shares-flow-en.png)

## How are trades and accounts controlled?

- The server locks price, fees, index version, and validity before a buy.
- Available balance, shares, and limits are rechecked at order time.
- Funds, fees, positions, and withdrawals use reconcilable ledger entries.
- If an index price is stale, missing, or unverifiable, new trading fails closed.
- Deposit, withdrawal, and trade histories remain available for reconciliation.

## What risks remain?

### Market and liquidity

Thin markets, wide spreads, breaking news, or small trades may move event prices quickly and affect the index.

### Model and data

Direction, impact, and information overlap may be misjudged; data may be delayed, interrupted, or corrected.

### Blockchain and custody

BSC congestion, reorganizations, RPC outages, token-contract issues, signing-key risk, or custody-service failure can delay or affect funds operations.

### Product availability

Trading, withdrawal, or new deposit-address assignment may pause or be delayed. A withdrawal with an uncertain on-chain result remains pending rather than immediately returning the reserved amount after a page timeout.

### Legal, tax, and regional

Eligibility, tax treatment, and legality depend on location and circumstances. The 1% opening fee is a product charge, not a judgment about personal tax obligations.

::: danger Risk boundary
Signatures, multiple checks, separated controls, confirmations, and ledger reconciliation reduce certain failures but do not guarantee funds, availability, principal, or returns.
:::
