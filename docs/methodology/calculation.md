# Index calculation

Calculation aggregates direction-adjusted component price changes and continuously compounds state change from the previous index level.

## Variables

For a component period beginning at review point $t_k$ and event contract $i$:

- $p_i(t)$: market price at time $t$;
- $p_i(t_k)$: price baseline at the start of the period;
- $d_i \in \{-1,+1\}$: direction relative to the target state;
- $w_i$: normalized state-exposure weight;
- $\sum_i w_i = 1$.

## State change

$$
r_t = \sum_i w_i d_i \left[p_i(t)-p_i(t_k)\right]
$$

$r_t$ is positive when collective pricing moves toward a stronger state and negative when it moves toward a weaker state.

## Index levels

Long and short indexes continue from their own levels at the period start and compound in opposite directions:

$$
I_t^{\mathrm{Long}}=I_{t_k}^{\mathrm{Long}}\exp(r_t)
$$

$$
I_t^{\mathrm{Short}}=I_{t_k}^{\mathrm{Short}}\exp(-r_t)
$$

Thus their log changes are strictly opposite under the same active components and weights:

$$
\ln\frac{I_t^{\mathrm{Long}}}{I_{t_k}^{\mathrm{Long}}}
=-
\ln\frac{I_t^{\mathrm{Short}}}{I_{t_k}^{\mathrm{Short}}}
$$

![Three example events contribute through weight, direction, and price change before compounding into a new index level.](/images/en/06-index-calculation-example-en.png)

The index uses price changes rather than averaging event probabilities because it measures the **repricing process** of the target state.

## Understanding opposite directions

Log changes are opposite, but levels do not add to 100 and ordinary percentage returns do not add to zero. If long rises 10% from 100 to 110, the same opposite log change takes short to about 90.91, not 90.

This is not a daily-reset leveraged inverse ETF mechanism and does not guarantee that one side captures all losses of the other.

## Rolling continuity

On component updates, old components complete their period. Long and short each continue from their existing level; new components take the update-time price as $p_i(t_k)$. Replacement itself does not create a mechanical jump.

> A published index should additionally disclose calculation frequency, price sampling, outlier handling, weight limits, and the review calendar.
