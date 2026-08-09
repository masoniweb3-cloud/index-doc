# Continuous index

A single event contract ends after settlement, while a world state keeps evolving. A **continuous index** connects a changing event set into one continuous price series by preserving a consistent target state and calculation rules.

## Sources of continuity

Continuity does not require permanent components. It comes from three stable elements:

1. the target-state definition remains consistent;
2. direction, weighting, and calculation rules remain consistent;
3. component changes continue from the existing index level.

## Component changes are not state returns

Adding or removing an event at a review point updates the tools used to observe the state. It should not be treated as a change in the target state itself.

New components contribute price changes only from their new effective period. Replacement alone does not create an index jump.

## Comparability

A continuous series lets users observe:

- state-direction changes over time;
- the speed and magnitude of market repricing;
- relative performance across world-state indexes;
- relationships between the index and real-world timelines.

## Continuous does not mean immutable

The methodology can be updated, but any change affecting historical comparability requires a record, effective date, and version note. A major methodology change may require a new index version rather than rewriting history.
