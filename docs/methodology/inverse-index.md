# Short index

The short index expresses weakening of the same target state. It shares the target definition, event set, and state-exposure framework with long, but reverses direction.

## Direction reversal

If the long direction is $d_i$, then:

$$
d_i^{\text{short}}=-d_i
$$

The same event-price movement therefore contributes in opposite directions.

## Current long–short relationship

Signa is not a fixed-multiple, daily-reset leveraged inverse product. Both directions use the same components, weights, and observations and reverse only aggregate state change:

$$
I_t^{\mathrm{Long}}=I_{t_k}^{\mathrm{Long}}e^{r_t},
\qquad
I_t^{\mathrm{Short}}=I_{t_k}^{\mathrm{Short}}e^{-r_t}
$$

Their log changes are strictly opposite, but they are not YES and NO: levels do not add to 100, and ordinary percentage returns do not add to zero.

On component updates, each side continues from its own existing level and then uses the same new components in opposite directions.

## Index and product

The short index is an independent calculation benchmark. A user buys account shares quoted against it; selling long shares does not create a short. Results also depend on fees, execution timing, quote validity, and product availability.

## Naming

Long and short names should clearly state the target state and direction, avoiding value-laden descriptions that cannot be tied to methodology rules.
