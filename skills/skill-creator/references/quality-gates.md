# Quality Gates

When to load: Use when defining acceptance criteria, validations, or release readiness.

## Table of Contents

1. Scenario suite scope
2. Required checks
3. Pass criteria
4. Release checklist

## Scenario Suite Scope

Run at least these scenario types:

- Happy path: expected user flow works end-to-end.
- Negative path: invalid or conflicting input is handled safely.
- Regression path: previously fixed requirement still behaves correctly.

## Required Checks

1. Output format check:
   - `Assumption Check` exists.
   - blocks `A-F` exist in order.
   - exactly one question in block `F`.
2. Option quality check:
   - exactly 2-3 options in block `B`,
   - one option marked `Recommended`.
3. Evidence check:
   - each material recommendation has `Link`, `Date`, and `Why`.
4. Security check:
   - action with `risk_label == high` follows `../../shared/references/confirm-required-gate.md` exactly.

## Pass Criteria

- 100% pass on critical checks:
  - structure,
  - single-question constraint,
  - security confirmation gate.
- No unresolved failures in scenario suite output.

## Release Checklist

- `SKILL.md` validates successfully.
- `agents/openai.yaml` exists and matches skill purpose.
- `references/` files are split by topic and discoverable.
- Final output includes:
  - complete specification,
  - final skill content,
  - quality checklist,
  - source-backed rationale.
