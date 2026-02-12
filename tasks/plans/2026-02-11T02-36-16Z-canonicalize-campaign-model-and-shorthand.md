# Canonicalize campaign model and shorthand across template and deep-research docs

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

User reported that current campaign decomposition is chaotic and inconsistent, and that shorthand for initial/emergent sub-questions is unclear. The objective is to extract one reusable campaign model block and align template + deep-research docs to canonical terminology and canonical naming derived from those terms.

Observable outcomes:

1. campaign model is defined once in a shared module and reused,
2. `_template.md` references that module instead of embedding a large duplicated block,
3. deep-research docs align to canonical identifiers and closure rules,
4. non-canonical shorthand is removed from active docs in favor of canonical naming.

## Progress

- [x] (2026-02-11T02:36:16Z) Created plan and captured target outcomes.
- [x] (2026-02-11T02:38:10Z) Added shared campaign model reference with canonical shorthand.
- [x] (2026-02-11T02:39:00Z) Refactored `_template.md` to consume shared model.
- [x] (2026-02-11T02:40:00Z) Refactored `deep-researcher` docs to canonical shorthand and shared-model alignment.
- [x] (2026-02-11T02:41:20Z) Validated and updated tracker.

## Surprises & Discoveries

Current template includes a long inline campaign block that duplicates logic now also present in deep-research references. The duplication is the main source of drift and inconsistency.

## Decision Log

Decision: define canonical shorthand as `Primary Question`, `Sub-question`, `Question-to-Evidence Matrix`, `Entry Criteria`, `Impediment`.
Rationale: each naming convention is directly derived from canonical terms and avoids ambiguous overload.
Timestamp/Author: 2026-02-11T02:36:16Z / agent

Decision: keep `tasks/todo.md` high-level and move detailed model content to shared + plan template.
Rationale: aligns with repository policy and user intent.
Timestamp/Author: 2026-02-11T02:36:16Z / agent

## Outcomes & Retrospective

Completed. Campaign decomposition now has one canonical reusable source and active deep-research/template docs now consume it. Ambiguous shorthand for initial/emergent sub-questions is removed from active model docs and replaced by canonical terms (`Primary Question`, `Sub-question`, `Question-to-Evidence Matrix`, `Entry Criteria`, `Impediment`).

## Context and Orientation

Files to edit:

- `skills/shared/references/`: shared policy/reference modules.
- `tasks/plans/_template.md`: canonical plan scaffold.
- `skills/deep-researcher/SKILL.md`: execution contract.
- `skills/deep-researcher/references/research-method.md`: detailed research procedure.
- `skills/REFERENCE-STANDARD.md`: shared reference structure and consumption rules.

## Terminology and Decomposition

- `Primary Question` (`Primary Question`)
- `Sub-question` (`Sub-question`)
- `Question-to-Evidence Matrix` (`Question-to-Evidence Matrix`)
- `Entry Criteria` (`Entry Criteria`)
- `Impediment` (`Impediment`)

## Plan of Work

1. Create shared `research-campaign-model` reference with exact sections for:
   - canonical shorthand,
   - `Primary Question` framing,
   - `Sub-question` register template,
   - `Question-to-Evidence Matrix` template,
   - `Entry Criteria` for emergent `Sub-question`,
   - depth cap and completion definition.
2. Replace large inline campaign block in `_template.md` with concise `Apply ... for:` import and minimal required usage notes.
3. Update deep-research docs to use `Sub-question-*` IDs and canonical references; remove local shorthand tokens from active docs.
4. Validate with grep + skill validator and update `tasks/todo.md`.

## Concrete Steps

1. Add `skills/shared/references/research-campaign-model.md`.
Expected: one reusable source for campaign mechanics.

2. Patch `_template.md`, `skills/deep-researcher/SKILL.md`, `skills/deep-researcher/references/research-method.md`, and `skills/REFERENCE-STANDARD.md`.
Expected: consistent canonical shorthand and no duplicated inline model block.

3. Validate:
- `rg -n "Seed Questions|Derived Threads|Sub-question-\\*|Primary Question -> Sub-question" tasks/plans/_template.md skills/deep-researcher/SKILL.md skills/deep-researcher/references/research-method.md skills/REFERENCE-STANDARD.md`
- `rg -n "Primary Question|Sub-question|Question-to-Evidence Matrix|Entry Criteria|Impediment|research-campaign-model" tasks/plans/_template.md skills/deep-researcher/SKILL.md skills/deep-researcher/references/research-method.md skills/REFERENCE-STANDARD.md skills/shared/references/research-campaign-model.md`
- `python C:\\Users\\igork\\.codex\\skills\\.system\\skill-creator\\scripts\\quick_validate.py skills/deep-researcher`

## Validation and Acceptance

Acceptance criteria:

1. Shared campaign model exists and is referenced by template + deep-research docs.
2. Active docs no longer use ambiguous local shorthand for initial/emergent sub-questions.
3. Canonical shorthand (`Primary Question`, `Sub-question`, `Question-to-Evidence Matrix`, `Entry Criteria`, `Impediment`) is explicit and consistent.
4. Entry gate, depth cap, and completion definition remain enforced.

## Idempotence and Recovery

Docs-only. Reapply patches safely; if any section drifts, restore from shared model and re-sync imports.

## Artifacts and Notes

Validation artifacts:

- `rg -n "Seed Questions|Derived Threads|Coverage Matrix|Sub-question-\\*" tasks/plans/_template.md skills/deep-researcher/SKILL.md skills/deep-researcher/references/research-method.md skills/REFERENCE-STANDARD.md skills/shared/references/research-campaign-model.md`
  - result: no matches in active model docs (legacy shorthand removed).
- `rg -n "Primary Question|Sub-question|Question-to-Evidence Matrix|Entry Criteria|Impediment|research-campaign-model" tasks/plans/_template.md skills/deep-researcher/SKILL.md skills/deep-researcher/references/research-method.md skills/REFERENCE-STANDARD.md skills/shared/references/research-campaign-model.md`
  - result: canonical shorthand and shared model references present across template and deep-research docs.
- `python C:\\Users\\igork\\.codex\\skills\\.system\\skill-creator\\scripts\\quick_validate.py skills/deep-researcher`
  - result: `Skill is valid!`

## Interfaces and Dependencies

N/A - documentation/process only.

Change note: 2026-02-11T02:36:16Z - Created plan for campaign model extraction and canonical shorthand alignment.
Change note: 2026-02-11T02:41:20Z - Completed shared model extraction, canonical shorthand migration, and validation.
