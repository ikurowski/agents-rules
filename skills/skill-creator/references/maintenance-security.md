# Maintenance and Security

When to load: Use when planning maintenance cadence, risk controls, or re-validation triggers.

## Table of Contents

1. Strict maintenance cadence
2. Re-validation triggers
3. Shared confirm-required risk gate
4. Skill-specific high-impact examples

## Strict Maintenance Cadence

Run a maintenance review every week.
Review:

- source freshness,
- trigger quality,
- evaluation outcomes,
- known failure patterns.

## Re-Validation Triggers

Run mandatory re-validation when any of the following occurs:

- model update,
- tool or dependency update,
- relevant product changelog update,
- failed eval or failed scenario test.

## Shared Confirm-Required Risk Gate

Apply `../../shared/references/confirm-required-gate.md` for:

- `Risk Scoring Scale`,
- `Confirmation Threshold`,
- `Required Response Behavior`,
- `Safe Fallback`.

## Skill-Specific High-Impact Examples

High-impact examples:

- destructive file operations,
- broad repository rewrites,
- privileged integrations or external writes.

Local Extension (skill-specific):

- high-impact examples above define when to invoke the shared gate in this skill context.
