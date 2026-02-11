# Use Case: Skill Lessons and Logs

When to load: Use when researching whether a specific skill should include lessons, decision logs, or change logs.

## Table of Contents

1. Option set
2. Decision criteria
3. Recommendation rules (U5)
4. Templates

## Option Set

Option A: No dedicated governance logs

- Use when change frequency is low and risk is low.

Option B: `lessons` log only

- Use when recurring mistakes are likely and learning reuse matters.

Option C: Lessons + decision log

- Use when there are repeated design trade-offs that need traceability.

Option D: Full governance pack (lessons + decision log + change log)

- Use when compliance/auditability and high-impact changes are frequent.

## Decision Criteria

Apply `../../shared/references/u5-scoring-bands.md` for:

- `Scale Definition`,
- `Derived Label Thresholds`.

1. Operational risk of mistakes
2. Frequency of policy/process changes
3. Number of contributors
4. Need for auditability/compliance
5. Cost of onboarding new maintainers

## Recommendation Rules (U5)

Compute:

- `governance_need_score = average(criteria 1-5)` (range `1.0-5.0`)
- `governance_need_label` from applied U5 bands above

Then map to option:

- `1.0-1.9`: Option A
- `2.0-2.9`: Option B
- `3.0-3.9`: Option C
- `4.0-5.0`: Option D

Override upward by one level if either condition is true:

- compliance/audit requirement >= 4
- operational risk >= 4 and incident impact is high

Interpretation note:

- This framework informs recommendation strength; it does not force per-skill file creation.
- Centralized logs can satisfy Option C or D if traceability is strong.

## Templates

Lessons entry template:

- Context:
- Mistake or gap:
- Root cause:
- Fix:
- Prevention rule:

Decision log template:

- Decision:
- Alternatives considered:
- Rationale:
- Expected trade-offs:
- Review trigger/date:

Change log entry template:

- Change:
- Why:
- Impact:
- Validation:
- Rollback plan:
