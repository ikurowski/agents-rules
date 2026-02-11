# Validation Gates

When to load: Use before finalizing audit output or declaring improvement completion.

## Table of Contents

1. Scenario suite scope
2. Required acceptance checks
3. Pass/fail rules
4. Final delivery checklist

## Scenario Suite Scope

Run at least these checks:

- happy path: target flow works after changes,
- negative path: invalid/conflicting conditions are handled safely,
- regression path: previously required behavior still holds.

## Required Acceptance Checks

1. Findings quality check:
   - each finding has evidence and root cause,
   - U5 scores and derived labels are present.
2. Plan quality check:
   - steps are prioritized and minimal,
   - each step has an explicit verification command or observable check.
3. Risk gate check:
   - Apply `../../shared/references/confirm-required-gate.md` for:
     - `Confirmation Threshold`,
     - `Required Response Behavior`,
     - `Safe Fallback`.
4. Verification evidence check:
   - final report contains pass/fail evidence for implemented items.

## Pass/Fail Rules

Pass only if all critical checks pass:

- risk confirmation behavior,
- verification evidence presence,
- no missing evidence for high-severity findings.

Fail finalization if any critical check is unresolved.

## Final Delivery Checklist

- `SKILL.md` is present and aligned with package purpose.
- `agents/openai.yaml` exists and matches invocation intent.
- references are split by topic and discoverable.
- final output includes findings, improvement plan, validations, and residual risks.
