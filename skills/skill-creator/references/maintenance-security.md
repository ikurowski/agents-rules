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

Use `../../shared/references/confirm-required-gate.md` for risk scoring bands, confirmation threshold, and fallback behavior.

## Skill-Specific High-Impact Examples

High-impact examples:

- destructive file operations,
- broad repository rewrites,
- privileged integrations or external writes.

Fallback handling is inherited from `../../shared/references/confirm-required-gate.md`.
