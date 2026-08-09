# Deposit and withdrawal troubleshooting

If a deposit or withdrawal takes longer than expected, do not resend funds or submit the request again. Confirmations, congestion, and state synchronization can take time, and duplicates make reconciliation harder.

## Deposit not credited

Check in order:

1. the network is **BNB Smart Chain (BSC, Chain ID 56)**;
2. the asset is the **USDT (BEP-20)** specified on the deposit page;
3. the recipient exactly matches the dedicated address for the current account;
4. the amount meets the displayed minimum;
5. the block explorer shows success;
6. the page is not still waiting for confirmations.

Transfers below the minimum, on the wrong network, using the wrong token, or sent to the wrong address are not guaranteed to be recoverable.

## Withdrawal remains processing

Processing means the amount is reserved but the final on-chain result is unknown.

- Do not submit the same withdrawal again.
- Do not rely only on a wallet notification.
- If a hash is shown, check it on a BSC block explorer.
- A timeout or unclear broadcast does not immediately release the balance, preventing duplicate payment.

Reserved funds return only after the system confirms that nothing was sent or the chain definitively reports failure.

## What to prepare for support

When requesting a review through an official channel listed on the Signa website, provide:

- the signed-in wallet address;
- BSC transaction hash;
- amount;
- approximate time and time zone;
- current page status;
- if needed, screenshots without sensitive information.

::: danger Never provide these
Signa will never ask for a private key, seed phrase, wallet password, or remote control of your device. Do not trust anyone who asks.
:::

## Related pages

- [Deposits and withdrawals](/guide/funding)
- [How funds are held and protected](/guide/security)
- [Fees](/guide/fees)
