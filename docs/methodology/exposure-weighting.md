# State exposure and weighting

Component weights represent **effective exposure** to the target state. They are not news-value scores or event probabilities.

![Causal strength, information independence, and price quality form raw exposure, which is normalized into component weight.](/images/en/05-state-exposure-weighting-en.png)

## Three dimensions

### Causal strength

How direct, clear, and material is the pathway from the outcome to the state? Shorter and clearer mechanisms generally create stronger exposure.

### Information independence

Does the event add new state information? A highly redundant event should not receive a full independent weight.

### Price quality

Can its market price support index input, considering observability, continuity, liquidity, and abnormal-price risk?

## Normalization

For raw exposure score $a_i$:

$$
w_i = \frac{a_i}{\sum_{j=1}^{n} a_j}
$$

and:

$$
\sum_{i=1}^{n} w_i = 1
$$

Normalization makes the components a complete state exposure for the calculation period.

## Constraints

Published index rules may cap a single component, cap related event families, or set a minimum effective weight. Thresholds should be disclosed in advance rather than adjusted after observing price changes.
