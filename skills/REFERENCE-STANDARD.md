# Skill Reference Standard

This file defines a shared structure and scoring convention for all skill reference documents under `skills/*/references/`.

## Purpose

Keep references consistent across skills so they are easier to load, compare, and maintain.

## Shared Atomic Modules

Use shared reference modules for policies that repeat across multiple skills:

- `skills/shared/references/u5-scoring-bands.md`
- `skills/shared/references/source-evidence-policy.md`
- `skills/shared/references/confirm-required-gate.md`

Rule: if a policy applies to 2+ skills without domain-specific changes, keep it in `skills/shared/references/` and reference it from skill-local docs instead of duplicating the full text.

## Canonical Terminology

Use these terms in active skill documentation:

- `Primary Question`: main decision or research question.
- `Sub-question`: decomposed follow-up question needed to answer the primary question.
- `Question-to-Evidence Matrix`: mapping from each question/sub-question to supporting evidence.
- `Entry Criteria`: explicit rule that determines whether a new sub-question enters current scope.
- `Impediment`: blocker that prevents progress and requires explicit handling.

## Required Reference Structure

Each `references/*.md` file should include:

1. `When to load:` one-line trigger for progressive disclosure.
2. `## Table of Contents` with section order.
3. Procedure sections in this order when applicable:
   - setup/inputs,
   - evaluation/scoring rules,
   - output template,
   - escalation or failure handling.
4. Explicit decision thresholds (not vague language).
5. At least one reusable template or checklist when the file drives user-facing output.

If a section is not relevant, write `N/A` and one sentence why.

## Unified Scoring Convention (U5)

Use one primary scale everywhere:

- `1` = very low
- `2` = low
- `3` = medium
- `4` = high
- `5` = very high

Secondary labels are derived from score bands:

- `low`: `1.0-2.4`
- `medium`: `2.5-3.7`
- `high`: `3.8-5.0`

Rules:

1. Store/report the numeric score first (`X/5`).
2. Add the derived label second (for readability).
3. For multi-criterion evaluation, use weighted or unweighted average on the same `1-5` scale.
4. Keep thresholds deterministic and documented in the same file.

## Recommended Output Fields

When a reference asks for an assessment, use:

- `<domain>_score: <1.0-5.0>`
- `<domain>_label: <low|medium|high>`
- `reasoning: <short evidence-based note>`

Examples:

- `confidence_score: 4.2/5`
- `confidence_label: high`
- `risk_score: 2.8/5`
- `risk_label: medium`
