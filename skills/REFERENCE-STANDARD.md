# Skill Reference Standard

This file defines a shared structure and scoring convention for all skill reference documents under `skills/*/references/`.

## Purpose

Keep references consistent across skills so they are easier to load, compare, and maintain.

## Shared Atomic Modules

Use shared reference modules for policies that repeat across multiple skills:

- `skills/shared/references/u5-scoring-bands.md`
- `skills/shared/references/source-evidence-policy.md`
- `skills/shared/references/confirm-required-gate.md`
- `skills/shared/references/principle-effectiveness-review.md`

Rule: if a policy applies to 2+ skills without domain-specific changes, keep it in `skills/shared/references/` and reference it from skill-local docs instead of duplicating the full text.

## Shared Rule Consumption Pattern

When a skill uses shared policy, use this exact wording pattern:

1. `Apply <relative-path-to-shared-reference> for:`
2. list imported rule capabilities as bullets.
3. add `Local Extension (skill-specific):` only for delta behavior not covered by shared policy.

Example:

- `Apply ../shared/references/source-evidence-policy.md for:`
  - source priority,
  - citation block format,
  - date fallback wording,
  - conflict tie-breakers.
- `Local Extension (skill-specific):`
  - if a claim remains unverifiable, state it explicitly and lower confidence.

Rules:

1. Do not restate thresholds, tie-breakers, or base procedures already defined in shared references.
2. Keep local extension delta-only; never copy full shared sections.
3. If the same local extension appears in 2+ skills, promote it to `skills/shared/references/` and replace local copies with `Apply ...`.
4. In any skill documentation section that imports a module, each entry must use `Apply <relative-path> for:` and list scope in bullets.

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

Apply `shared/references/u5-scoring-bands.md` for:

- canonical scale definition,
- canonical label thresholds.

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
