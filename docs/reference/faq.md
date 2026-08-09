# Frequently asked questions

## Is Signa Index a prediction market?

No. Prediction markets price specific outcomes; Signa Index uses those prices to construct a continuous index representing a persistent world state.

## Is the index level an event probability?

No. It aggregates direction-adjusted, weighted changes across events. The level is a continuous state benchmark, not one event's probability.

## Why not average all related probabilities?

Events differ in wording direction, impact, information independence, and price quality. Averaging mixes inconsistent meanings and may double-count information.

## Does AI decide event prices?

No. Markets form prices. AI helps identify events, establish causal paths, map direction, and detect information overlap.

## Why do components change?

Contracts expire and new events appear. Reviews and rolling updates keep the event set representative of the same target state.

## Does replacement cause a jump?

Normally no. The new basket continues from the existing index level and contributes from new price baselines.

## Are long and short perfectly symmetric over time?

Under the current formula, they use the same components and weights and have strictly opposite log changes. Their levels do not add to 100, and ordinary percentage returns do not add to zero after compounding.

## Can I invest directly in Signa Index?

The index itself is a benchmark. The current Signa product lets users buy USDT-denominated account shares tracking long or short. Availability, eligibility, fees, and risks are governed by the product page and applicable terms. See [Getting started](/guide/).

## Am I buying an on-chain token?

No. Shares are recorded in your Signa account, are not sent to the wallet as BEP-20 tokens, and cannot currently be transferred to other users. Sell them back into USDT to exit.

## Can I withdraw index shares?

No. The withdrawable asset is USDT on BSC. Sell shares first, then withdraw available USDT to the signed-in wallet.

## Which chain and asset are supported?

Deposits and withdrawals currently use USDT (BEP-20) on BNB Smart Chain (Chain ID 56). Do not send another asset or use another network.

## How do I sign in and which wallets are supported?

Connect and sign with a BSC-compatible wallet; Google login is not offered. Available wallets are listed in the product. The signature proves wallet control and does not reveal a private key or seed phrase.

## Where is USDT held after deposit?

Confirmed USDT is custodied by Signa rather than held in your personal wallet. Available balances and shares are recorded in the Signa account ledger. This is a custodial model, not end-to-end self-custody.

## Is the 1% a tax?

No. It is the current opening fee charged separately on buys and is not based on profit. The current sell closing fee is 0%. See [Fees](/guide/fees).

## How can I earn, and how much can I lose?

Position value changes with the selected index direction. A sale above principal and fees produces a gain; a wrong direction produces a loss. Although finite valid inputs do not make the level exactly zero, it can approach a very low value, so users can lose nearly all principal plus fees.

## Can I always sell at the charted level?

No. Historical levels and charts are not executable. A sale requires a valid product quote while trading is available. Data, liquidity, network, or safety conditions may pause new quotes.

## Is selling short the same as going long?

No. Sell reduces an existing position. To express the opposite view, buy shares in the other direction.

## Can the index reach zero?

Under the current compounding formula, the level remains above zero for finite valid inputs and does not reset to zero when one event settles. It can still approach a very low level and is not principal-protected. See [Returns, losses, and zero](/guide/returns-and-zero).

## Does the index expire?

Component contracts expire, but the index rolls into new events and continues. Product availability remains subject to the live page and applicable rules.

## What if a deposit or withdrawal takes too long?

Do not resend funds or resubmit the withdrawal. Keep the wallet address, BSC transaction hash, amount, time, and page status, then follow [Troubleshooting](/guide/troubleshooting).

## Does the index represent objective reality?

No. It reflects market pricing formed under a specific event set, state definition, and methodology. It is one structured perspective on reality.
