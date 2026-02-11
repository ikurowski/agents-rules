# Apply light DRY refactor for end-of-run principle review sections

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

Reduce unnecessary duplication in end-of-run principle review guidance by keeping canonical output fields only in the shared reference and using concise wrappers in skill docs. User-visible outcome: less repeated text, same behavior.

## Progress

- [x] (2026-02-11T01:16:16Z) Task initialized and target sections identified.
- [x] (2026-02-11T01:16:16Z) Refactored duplicated output-field instructions in active skill docs to shared-template references.
- [x] (2026-02-11T01:16:16Z) Validated no behavior/instruction loss and updated tracker artifacts.

## Surprises & Discoveries

No structural surprises. `skill-creator` already used a concise wrapper and required no changes; only `deep-researcher` and `project-auditor-improver` had duplicated field-level output lists.

## Decision Log

Decision: Keep `skill-creator` section unchanged because it already delegates to shared module without duplicating field template.
Rationale: Preserve minimal changes and avoid unnecessary churn.
Timestamp/Author: 2026-02-11T01:16:16Z / Codex

## Outcomes & Retrospective

Completed. End-of-run principle-effectiveness sections now delegate output-field details to the shared reference template rather than repeating them in each skill. This reduces duplication while preserving explicit invocation behavior.

## Context and Orientation

Current uncommitted task introduces `skills/shared/references/principle-effectiveness-review.md` and references it from three active skills. `deep-researcher` and `project-auditor-improver` currently repeat explicit output field bullets that already exist in shared module output template.

## Terminology and Decomposition

N/A - this is a focused documentation refactor.

## Plan of Work

Edit only duplicated end-of-run sections in `skills/deep-researcher/SKILL.md` and `skills/project-auditor-improver/SKILL.md`, replacing repeated field lists with a concise instruction to use shared output template exactly. Run scan checks for section presence and `principle-effectiveness-review` references, then update `tasks/todo.md` and this plan.

## Concrete Steps

1. Replace explicit output-field bullet lists in two skills with one line referencing shared output template.
2. Verify references still present and formatting remains aligned.
3. Update tracker docs with short outcome.

## Validation and Acceptance

Acceptance criteria:
- No duplicated output-field list remains in skill-local end-of-run sections.
- Shared reference remains the canonical output template source.
- Skills still explicitly require end-of-run principle effectiveness review.

Verification commands:
- `rg -n "End-of-Run Principle Effectiveness Review|output template" skills/deep-researcher/SKILL.md skills/project-auditor-improver/SKILL.md skills/shared/references/principle-effectiveness-review.md`
- `rg -n "principle_effectiveness_score|principle_effectiveness_label|corrective_actions" skills/deep-researcher/SKILL.md skills/project-auditor-improver/SKILL.md`

## Idempotence and Recovery

Documentation-only edits are safe to reapply. If clarity drops, reintroduce a brief reminder line without copying full field template.

## Artifacts and Notes

Evidence:
- `skills/deep-researcher/SKILL.md` now uses shared-module delegation line: `output template and escalation handling from the shared module`.
- `skills/project-auditor-improver/SKILL.md` now uses the same delegation line.
- `rg -n "End-of-Run Principle Effectiveness Review|output template" ...` confirmed sections and delegation wording.
- `rg -n "principle_effectiveness_score|principle_effectiveness_label|corrective_actions" ...` confirmed canonical field template remains in `skills/shared/references/principle-effectiveness-review.md`.

## Interfaces and Dependencies

N/A - docs-only change.

Change note: 2026-02-11T01:16:16Z - Created ExecPlan for light DRY refactor of end-of-run principle review sections.
Change note: 2026-02-11T01:16:16Z - Completed light DRY refactor by removing duplicated output-field lists in two skills and validating shared-template delegation.
