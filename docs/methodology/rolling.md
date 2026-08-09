# Expiry and rolling continuity

**Rolling continuity** resolves the maturity mismatch between finite event contracts and persistent world states.

![Current-period events exit and next-period events enter at a review point while the index level continues.](/images/en/07-rolling-continuity-en.png)

## Process

At a scheduled review point:

1. old components complete the final valid-period calculation;
2. settled, expiring, or unrepresentative components leave;
3. new eligible events enter under the same target-state definition;
4. new weights are normalized;
5. the new basket continues from the existing index level.

## Price baselines

Each incoming component receives a defined starting price. Only price changes after entry count; earlier market movement is not added retroactively.

## Avoiding mechanical jumps

Rolling does not compare absolute prices between old and new baskets. Their propositions and probability levels may be entirely different, so direct splicing would create economically meaningless jumps.

Continuity comes from carrying forward the index level, not requiring old and new contracts to have equal prices.

## Early settlement and invalidation

Early-settled, voided, or stale components follow exceptional-event rules. A published methodology should define last valid price, temporary weight redistribution, and replacement rules.

> Events settle while states persist; components change while the index remains continuous.
