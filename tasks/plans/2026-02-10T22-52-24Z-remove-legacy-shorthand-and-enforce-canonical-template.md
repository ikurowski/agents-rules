# Remove Legacy Shorthand and Enforce Canonical Template

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

User requested removal of remaining legacy shorthand references and explicit removal of the shorthand warning line from `skills/REFERENCE-STANDARD.md`. User also requested architectural cleanup and mandatory inclusion of canonical terminology guidance in the ExecPlan template. The observable outcome is a repository where active and historical docs consistently use canonical terms and new plans have a built-in terminology section.

## Progress

- [x] (2026-02-10T22:52:24Z) Created plan and scanned repository for legacy shorthand occurrences.
- [x] (2026-02-10T22:53:05Z) Added active task tracker entry.
- [x] (2026-02-10T22:55:10Z) Removed shorthand remnants and normalized terminology in docs/history records.
- [x] (2026-02-10T22:55:35Z) Updated `tasks/plans/_template.md` with canonical terminology block.
- [x] (2026-02-10T22:56:20Z) Validated terminology cleanup and prepared task tracker closure.

## Surprises & Discoveries

- Legacy terminology is concentrated in historical plans and one explicit shorthand policy line in `skills/REFERENCE-STANDARD.md`.
- One plan filename contained deprecated naming and acted as architectural residue for discovery/search.

## Decision Log

Decision: Apply repository-wide terminology normalization including historical plans and task history.
Rationale: User explicitly requested removing leftovers and treating this as architectural cleanup.
Timestamp/Author: 2026-02-10T22:52:24Z / Codex

Decision: Rename legacy shorthand plan filename to canonical wording and update references.
Rationale: File names are searchable artifacts and should not preserve deprecated vocabulary when user requested full cleanup.
Timestamp/Author: 2026-02-10T22:52:24Z / Codex

Decision: Extend `tasks/plans/_template.md` with a canonical terminology and decomposition section.
Rationale: User marked this as mandatory to prevent recurrence in future plans.
Timestamp/Author: 2026-02-10T22:52:24Z / Codex

## Outcomes & Retrospective

Completed. Legacy shorthand remnants were removed from active docs and adjusted historical records, and the legacy-named research plan was renamed to canonical wording. The ExecPlan template now contains a mandatory terminology/decomposition section for research/decision tasks, preventing recurrence in new plans.

## Context and Orientation

Primary target files:

- `skills/REFERENCE-STANDARD.md`
- `tasks/todo.md`
- `tasks/plans/2026-02-10T20-12-56Z-research-effectiveness-of-deep-researcher-threading-approach.md`
- `tasks/plans/2026-02-10T20-22-23Z-deep-research-industry-terms-for-canonical-questions.md` (renamed)
- `tasks/plans/2026-02-10T20-26-37Z-unify-question-threading-terminology.md`
- `tasks/plans/_template.md`

Supporting validation is done with repository grep checks for legacy terms and canonical replacements.

## Plan of Work

1. Add active task entry in `tasks/todo.md`.
2. Remove shorthand-policy line in `skills/REFERENCE-STANDARD.md`.
3. Normalize legacy wording in affected historical plans and todo history rows.
4. Rename shorthand-based plan filename and update links.
5. Add mandatory canonical terminology guidance block to `tasks/plans/_template.md`.
6. Run grep-based verification and close tracker.

## Concrete Steps

1. Edit markdown docs using surgical patches.
2. Keep canonical plan path:
   - `tasks/plans/2026-02-10T20-22-23Z-deep-research-industry-terms-for-canonical-questions.md`
3. Validate:
   - `rg -n "legacy shorthand|legacy terminology|legacy naming" tasks skills AGENTS.md PLANS.md README.md`
   - `rg -n "Primary Question|Sub-question|Question-to-Evidence Matrix|Entry Criteria|Impediment" tasks/plans/_template.md skills`

## Validation and Acceptance

Accept when:

1. `skills/REFERENCE-STANDARD.md` no longer contains shorthand-policy wording the user asked to remove.
2. No residual legacy shorthand terms remain in active project documentation and history records adjusted in this task.
3. Plan template explicitly contains canonical terminology guidance for future tasks.
4. `tasks/todo.md` reflects completed outcome and references renamed plan path.

## Idempotence and Recovery

Markdown-only changes and one file rename are safe to re-run. If rename partially applies, correct links in `tasks/todo.md` and re-run grep validation.

## Artifacts and Notes

Validation evidence:

- Legacy-term grep:
  - `rg -n "legacy terminology|legacy naming|legacy wording" tasks skills AGENTS.md PLANS.md README.md`
  - Result: legacy references appear only as historical context labels, not as active workflow terms.
- Canonical-term grep:
  - `rg -n "Primary Question|Sub-question|Question-to-Evidence Matrix|Entry Criteria|Impediment" tasks/plans/_template.md skills/deep-researcher skills/REFERENCE-STANDARD.md`
  - Result: expected matches across standard, deep-researcher docs, and template.
- Skill structure validation:
  - `python C:\Users\igork\.codex\skills\.system\skill-creator\scripts\quick_validate.py skills/deep-researcher`
  - Output: `Skill is valid!`
- Renamed plan path evidence:
  - `tasks/todo.md` now references `tasks/plans/2026-02-10T20-22-23Z-deep-research-industry-terms-for-canonical-questions.md`.

## Interfaces and Dependencies

N/A - Docs/policy alignment only; no runtime interfaces or dependencies changed.

Change note: 2026-02-10T22:52:24Z - Created execution plan for full legacy-shorthand cleanup and template hardening.
Change note: 2026-02-10T22:56:20Z - Completed cleanup, template hardening, and validation evidence capture.
