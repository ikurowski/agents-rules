# Confirm-Required Risk Gate

When to load: Use before proposing or executing high-impact actions.

## Table of Contents

1. Risk scoring scale
2. Confirmation threshold
3. Required response behavior
4. Safe fallback

## Risk Scoring Scale

Use the canonical five-point score scale and label thresholds from `./five-point-scoring-bands.md`:

- `risk_score`: numeric score on `1-5`
- `risk_label`: derived `low|medium|high`

## Confirmation Threshold

If `risk_label == high`, explicit user confirmation is required before action.

## Required Response Behavior

For `risk_label == high`:

1. Explain potential impact.
2. Ask for explicit confirmation.
3. Do not execute until confirmation is provided.

For `risk_label != high`:

- proceed with normal execution while still communicating risks.

## Safe Fallback

If confirmation is not provided for high-risk actions:

1. do not execute the high-risk path,
2. provide a reduced-risk alternative,
3. ask one clear confirmation question.

