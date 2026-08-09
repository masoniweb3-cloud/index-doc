# Data quality

Event prices can serve as index input only when sufficiently reliable. Quality review identifies missing prices, insufficient liquidity, anomalous moves, and contract-status changes.

## Dimensions

### Observability

Price, timestamp, and contract status can be stably obtained, reproduced, and verified.

### Continuity

Data updates often enough for the calculation period without unexplained long gaps.

### Market quality

Prices have basic trading support and are not persistently dominated by minimal volume or unusually wide spreads.

### Proposition integrity

Contract wording, settlement terms, and status have not materially changed without a record.

## Abnormal data

Published methods may predefine maximum carry-forward for missing prices, jump detection, trading-pause handling, invalidation or dispute rules, and conditions for readmission after recovery.

## No retrospective beautification

Corrections preserve the original record, reason, and effective version. Data or rules must not be rewritten merely because historical results were undesirable.

## Quality and weight

Price quality is both an admission condition and part of exposure weighting. Persistently declining quality can reduce weight or remove an event at review.
