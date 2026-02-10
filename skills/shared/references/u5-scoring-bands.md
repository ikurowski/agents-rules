# U5 Scoring Bands

When to load: Use when converting numeric scores to consistent `low|medium|high` labels across skills.

## Table of Contents

1. Scale definition
2. Derived label thresholds
3. Reporting format
4. Aggregation rule
5. Example outputs

## Scale Definition

Use a single numeric scale:

- `1` = very low
- `2` = low
- `3` = medium
- `4` = high
- `5` = very high

## Derived Label Thresholds

Map numeric scores to labels with fixed bands:

- `low`: `1.0-2.4`
- `medium`: `2.5-3.7`
- `high`: `3.8-5.0`

## Reporting Format

Always report numeric score first, then label:

- `<metric>_score: X/5`
- `<metric>_label: low|medium|high`

## Aggregation Rule

For multi-criterion scoring:

1. Score each criterion on `1-5`.
2. Compute average (weighted or unweighted).
3. Clamp final score to `1.0-5.0`.
4. Derive label from threshold bands above.

## Example Outputs

- `confidence_score: 4.2/5`
- `confidence_label: high`
- `risk_score: 2.9/5`
- `risk_label: medium`
