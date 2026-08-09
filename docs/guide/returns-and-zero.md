# Returns, losses, and whether an index can reach zero

## How can a user earn a return?

Trading returns come from changes in the index level after purchase. They are not fixed interest, staking rewards, or a return promised by the platform.

In simplified form:

$$
\begin{aligned}
\text{Position value}
&=\text{Shares held}\\
&\quad\times\text{Index level}
\end{aligned}
$$

$$
\begin{aligned}
\text{Realized P\&L}
&\approx\text{Sale proceeds}\\
&\quad-\text{Buy principal}\\
&\quad-\text{Fees paid}
\end{aligned}
$$

- A long position generally gains value when the state strengthens and the long index rises.
- A short position generally gains value when the state weakens and the short index rises.
- If the actual direction is opposite your view, the position loses value.
- Unrealized P&L becomes available USDT only after a sale.

## Simplified example

Assume a valid long-index quote uses level 100 as its share-calculation reference. You buy one share with 100 USDT principal and pay a 1 USDT opening fee:

| Index level on sale | Sale proceeds (current 0% closing fee) | Result versus 101 USDT total paid |
| ---: | ---: | ---: |
| 110 | 110 USDT | +9 USDT |
| 100 | 100 USDT | -1 USDT |
| 90 | 90 USDT | -11 USDT |

This only illustrates the relationship between fees and shares under current quote rules. It does not mean that 100 index points inherently equal 100 USDT or imply a future return. Actual shares and sale proceeds come from the valid confirmation quote.

## Are long and short always one-up, one-down?

Within the same component period, the current formulas apply opposite signs:

$$
I^{\mathrm{Long}}_t=I^{\mathrm{Long}}_{t_0}e^{r_t},
\qquad
I^{\mathrm{Short}}_t=I^{\mathrm{Short}}_{t_0}e^{-r_t}
$$

They have strictly opposite log changes for the same market movement. They are not YES and NO prices: the levels do not need to add to 100, and ordinary percentage returns do not need to add to zero.

![When a theme strengthens, the long index rises and the short index falls; when it weakens, the directions reverse. The two levels do not add up to 100.](/images/en/11-positive-inverse-choice-en.png)

## Can an index reach zero?

**Under the current formula and finite, valid market inputs, an index level remains greater than zero and does not fall directly to zero because one event fails.**

Exponential compounding keeps a finite new level positive. When components expire, replacements continue from the existing level rather than resetting it to zero.

“Not exactly zero” is not principal protection:

- an index can decline for a long time and approach a very low level;
- the opening fee increases the rise required to break even;
- extreme market, liquidity, data, system, or custody events can cause major loss;
- if the latest price cannot be verified, new trading should pause rather than treating the missing price as zero.

::: danger No guaranteed return
Index levels and shares are not deposits and do not guarantee principal or returns. Do not trade funds you cannot afford to lose.
:::
