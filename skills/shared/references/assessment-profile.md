# Assessment Profile

When to load: Use when a repo output needs a shared assessment format.

## Core Rule

- report separate assessment dimensions rather than a composite total,
- do not average unlike dimensions or derive decimal scores,
- use only the dimensions that are relevant to the task,
- include a one-sentence rationale for every reported dimension,
- keep task-specific decision logic local to the consuming skill.

## Canonical Output Labels

Use these exact labels in outputs:

- `Confidence`
- `Evidence Quality`
- `Recommendation Strength`
- `Risk If Wrong`
- `Likelihood`

## Reporting Template

- `Confidence`: `<low|moderate|high>` - `<why>`
- `Evidence Quality`: `<limited|adequate|strong>` - `<why>` when source quality matters
- `Recommendation Strength`: `<hold|conditional|strong>` - `<why>` when advising action
- `Risk If Wrong`: `<low|moderate|high>` - `<why>` when downside matters
- `Likelihood`: `<unlikely|roughly even|likely>` - `<why>` only for explicitly probabilistic claims

## Required Dimension

### `Confidence`

How stable is the conclusion given the current evidence?

- `low`: the conclusion is fragile; targeted new evidence could easily change it
- `moderate`: this is the current best judgment, but meaningful new evidence could change it
- `high`: the conclusion is well-supported and unlikely to change without major new evidence

## Optional Dimensions

### `Evidence Quality`

How good is the supporting evidence base?

- `limited`: sparse, indirect, weakly verifiable, outdated, or materially conflicting
- `adequate`: useful but partial evidence; some indirectness, gaps, or unresolved tension remain
- `strong`: multiple authoritative, current, directly applicable, and verifiable sources with no major unresolved conflict

### `Recommendation Strength`

How strongly should the output drive action?

- `hold`: do not make a decisive recommendation yet
- `conditional`: lean this way, but the recommendation depends on assumptions or constraints
- `strong`: this should be the default recommendation

### `Risk If Wrong`

What is the downside of a wrong call?

- `low`: limited and easily reversible impact
- `moderate`: meaningful cost, delay, or rework
- `high`: material harm, security, trust, or hard-to-reverse impact

### `Likelihood`

Use only for explicitly probabilistic claims.

- `unlikely`: the claim is not the expected outcome
- `roughly even`: the claim is plausible, but the outcome remains close to balanced
- `likely`: the claim is the expected outcome
