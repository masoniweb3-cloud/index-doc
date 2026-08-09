# Formula reference

This page collects the core formulas of the world-state index framework. A specific index may add constraints and parameters in its own methodology.

## Weight normalization

For raw exposure $a_i$:

$$
w_i=\frac{a_i}{\sum_{j=1}^{n}a_j}
$$

with:

$$
\sum_{i=1}^{n}w_i=1
$$

## Direction-adjusted component change

For a component period beginning at $t_k$, event price $p_i(t)$, and direction $d_i\in\{-1,+1\}$:

$$
x_i(t)=d_i\left[p_i(t)-p_i(t_k)\right]
$$

## Aggregate state change

$$
r_t=\sum_{i=1}^{n}w_ix_i(t)
=\sum_{i=1}^{n}w_id_i\left[p_i(t)-p_i(t_k)\right]
$$

## Index levels

$$
I_t^{\mathrm{Long}}=I_{t_k}^{\mathrm{Long}}\exp(r_t)
$$

$$
I_t^{\mathrm{Short}}=I_{t_k}^{\mathrm{Short}}\exp(-r_t)
$$

$I_{t_k}$ is the level at the component period start. At first publication, the index begins from a preset display anchor.

## Short direction

$$
d_i^{\text{short}}=-d_i
$$

Long and short log changes are strictly opposite. Because of continuous compounding, ordinary percentage returns do not add to zero, and levels do not need to add to 100.

## Rules not captured here

A published index also specifies price sampling, calculation frequency, weight limits, missing data, abnormal prices, rebalancing, and rolling-effectiveness rules.
