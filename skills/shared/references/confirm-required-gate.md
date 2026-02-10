# Confirm-Required Risk Gate

When to load: Use before proposing or executing high-impact actions.

## Table of Contents

1. Risk scoring scale
2. Confirmation threshold
3. Required response behavior
4. Safe fallback

## Risk Scoring Scale

Score risk on `1-5` and derive label:

- `1.0-2.4` -> `low`
- `2.5-3.7` -> `medium`
- `3.8-5.0` -> `high`

## Confirmation Threshold

If `risk_score >= 3.8`, explicit user confirmation is required before action.

## Required Response Behavior

For `risk_score >= 3.8`:

1. Explain potential impact.
2. Ask for explicit confirmation.
3. Do not execute until confirmation is provided.

For `risk_score < 3.8`:

- proceed with normal execution while still communicating risks.

## Safe Fallback

If confirmation is not provided for high-risk actions:

1. do not execute the high-risk path,
2. provide a reduced-risk alternative,
3. ask one clear confirmation question.
