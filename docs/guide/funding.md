# Deposits and withdrawals

Signa currently processes deposits and withdrawals in **USDT (BEP-20)** on **BNB Smart Chain (BSC, Chain ID 56)**.

::: info How funds are held
Each account uses a dedicated BSC address to identify deposits. Funds are credited only after the system verifies the network, USDT contract, recipient, amount, and block confirmations. Credited USDT is custodied by Signa and managed through separated deposit and withdrawal controls, multiple checks, and a reconcilable ledger. Withdrawals are sent only to the BSC wallet associated with the account and require a fresh wallet signature.
:::

::: danger Do not skip this
Send only the BSC USDT specified on the deposit page. Sending another token, or using Ethereum, Polygon, Tron, or another network, may cause permanent loss.
:::

## How to deposit

1. Sign in and open Deposit.
2. Confirm **BNB Smart Chain (BEP-20)** and the USDT contract shown on the page.
3. Either enter an amount and invoke the connected wallet, or copy/scan your dedicated BSC deposit address and transfer from another wallet.
4. Make sure the amount meets the displayed minimum deposit.
5. After sending, wait for the status to move from Submitted to Detected and then Credited.

The wallet will also show a BNB gas fee. It is paid to the BSC network and is not Signa's 1% opening fee.

### What if the amount is below the minimum?

The system may record the on-chain transfer but will not credit it to the trading balance and does not promise automatic recovery. The current minimum is shown on the deposit page.

## When is a deposit credited?

A wallet status of “sent” does not mean Signa has credited the funds. The system must:

1. detect the correct USDT transfer on BSC;
2. verify the recipient, token contract, and amount;
3. wait for the displayed number of confirmations;
4. credit the available trading balance.

Deposit history shows the transaction hash, confirmation progress, and final status.

## How to withdraw

1. Open Withdraw and check your withdrawable balance.
2. Enter an amount. The page shows the minimum, per-transaction maximum, UTC daily limit, fee, and estimated wallet receipt.
3. Confirm the destination. Withdrawals currently return only to the BSC wallet associated with the signed-in account.
4. Sign the authorization in your wallet. It confirms the amount, fee, destination, and one-time nonce; it does not reveal your private key.
5. Track Processing, Submitted to BSC, and Completed in Recent Withdrawals.

## Withdrawals in progress

The requested amount is first reserved from the available balance. It returns only after the system confirms that no transfer was sent or that the on-chain transaction has definitively failed.

If a network timeout occurs, broadcast status is unclear, or a transaction hash already exists, the withdrawal remains in progress until the final result is known. Do not submit it again; returning reserved funds too early could pay the same funds twice.

## Understanding statuses

### Deposit

- **Submitted:** the wallet sent the transaction; Signa is waiting for it on-chain.
- **Detected:** the correct transfer was identified; required confirmations are pending.
- **Credited:** funds are in the available Signa balance and can be traded.

### Withdrawal

- **Processing:** the amount is reserved while checks or on-chain preparation run.
- **Submitted to BSC:** the transaction was broadcast and awaits final confirmation.
- **Completed:** the on-chain transfer is confirmed.

If a status does not change for an extended period, see [deposit and withdrawal troubleshooting](/guide/troubleshooting) and retain the wallet address and transaction hash.

::: tip The product page is authoritative for values
Minimums, limits, withdrawal fees, and required confirmations may change. Review the live values before submitting a funds operation.
:::
