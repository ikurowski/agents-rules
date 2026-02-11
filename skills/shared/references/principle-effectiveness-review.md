# Principle Effectiveness Review

When to load: Use at the end of a skill run to evaluate how effectively the selected principle was implemented and to define corrective actions.

## Table of Contents

1. Inputs
2. Scoring rules
3. Corrective action design
4. Output template
5. Escalation handling

## Inputs

Capture:

- `principle_under_review`: the exact principle being evaluated,
- `implementation_scope`: where the principle was applied,
- `observed_outcomes`: concrete positive/negative outcomes,
- `evidence`: files, checks, or observations supporting the evaluation.

## Scoring Rules

Apply `./u5-scoring-bands.md` for:

- `Scale Definition`,
- `Derived Label Thresholds`,
- `Reporting Format`.

Score each dimension on `1-5`:

1. Consistency: how uniformly the principle was applied.
2. Effectiveness: how strongly outcomes improved.
3. Risk control: how well side effects were prevented.
4. Sustainability: how likely the implementation remains stable over time.

Compute:

- `principle_effectiveness_score = average(dimensions)` (clamp to `1.0-5.0`),
- `principle_effectiveness_label` from U5 bands.

## Corrective Action Design

If label is not `high`, propose `1-3` corrective actions.
Each action should include:

- action summary,
- expected impact,
- owner,
- validation checkpoint.

Prioritize actions that are low-effort and high-impact first.

## Output Template

- `principle_under_review: <text>`
- `principle_effectiveness_score: <X/5>`
- `principle_effectiveness_label: <low|medium|high>`
- `strongest_signal: <what most influenced score>`
- `top_gap: <largest implementation weakness>`
- `corrective_actions: <list or N/A when label is high>`

## Escalation Handling

If `principle_effectiveness_label == low`:

1. recommend immediate corrective actions,
2. set a near-term review checkpoint,
3. flag implementation risk explicitly.

If label is `medium` for two consecutive reviews, recommend a broader process adjustment instead of local patching.
