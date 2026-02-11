# Add shared canonical terminology module and integrate it across skill standards

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

Create one shared terminology reference for question decomposition terms and make active skills/standards consume it instead of repeating definitions. The result should reduce duplication and keep one canonical source for `Primary Question`, `Sub-question`, `Question-to-Evidence Matrix`, `Entry Criteria`, and `Impediment`.

## Progress

- [x] (2026-02-11T01:40:39Z) Task initialized with scope and assumptions.
- [x] (2026-02-11T01:43:10Z) Added new shared reference module under `skills/shared/references/`.
- [x] (2026-02-11T01:44:15Z) Integrated module into `skills/REFERENCE-STANDARD.md` and active skill docs.
- [x] (2026-02-11T01:45:20Z) Validated references and updated tracker/outcomes.

## Surprises & Discoveries

Repository currently contains multiple unrelated local modifications and untracked plan files outside this task scope. Execution is limited to targeted files only.

## Decision Log

Decision: Keep `skills/REFERENCE-STANDARD.md` as the policy index but move canonical term definitions to a dedicated shared module.  
Rationale: preserves discoverability while enforcing single source of truth for reusable terminology definitions.  
Timestamp/Author: 2026-02-11T01:40:39Z / Codex

Decision: Integrate shared module in both `deep-researcher` and `project-auditor-improver` `SKILL.md` files without editing already-dirty `references/*.md` files.  
Rationale: minimizes collision risk with existing in-progress user changes while still applying shared rule consumption where it matters most.  
Timestamp/Author: 2026-02-11T01:40:39Z / Codex

## Outcomes & Retrospective

Completed. Canonical terminology definitions now live in one shared module and are consumed via `Apply ... for:` in the reference standard and two active skill definitions. This removes duplicated term lists and keeps discoverability in `skills/REFERENCE-STANDARD.md` through an index-style pointer instead of copy-pasted definitions.

## Context and Orientation

Current canonical term definitions are written inline in `skills/REFERENCE-STANDARD.md`. `skills/deep-researcher/SKILL.md` duplicates these definitions. `skills/project-auditor-improver/SKILL.md` references only `Primary Question` directly and lacks explicit canonical-term import. Shared policy modules already exist in `skills/shared/references/`, so terminology should follow the same modular pattern.

## Terminology and Decomposition

- `Primary Question`
- `Sub-question`
- `Question-to-Evidence Matrix`
- `Entry Criteria`
- `Impediment`

All five terms are in-scope and will be centralized into one shared module.

## Plan of Work

1. Add `skills/shared/references/canonical-terminology.md` with definitions, usage notes, and minimal operating rules.
2. Update `skills/REFERENCE-STANDARD.md`:
   - include the new module in shared atomic module list,
   - convert the `Canonical Terminology` section from inline definitions to `Apply ... for:` pointer.
3. Update `skills/deep-researcher/SKILL.md` and `skills/project-auditor-improver/SKILL.md` to consume the new shared module using `Apply ... for:`.
4. Run `rg` checks for canonical terms and module references.

## Concrete Steps

1. Create shared module file with required reference structure.
Expected: file includes `When to load`, table of contents, and deterministic terminology definitions.

2. Patch target docs with `Apply <relative-path> for:` entries.
Expected: no duplicate term lists remain in updated files.

3. Validate with grep:
- `rg -n "canonical-terminology.md|Primary Question|Sub-question|Question-to-Evidence Matrix|Entry Criteria|Impediment" skills/REFERENCE-STANDARD.md skills/deep-researcher/SKILL.md skills/project-auditor-improver/SKILL.md skills/shared/references/canonical-terminology.md -S`

## Validation and Acceptance

Acceptance criteria:

1. New shared module exists at `skills/shared/references/canonical-terminology.md`.
2. `skills/REFERENCE-STANDARD.md` points to shared module instead of restating full canonical term list.
3. Both active skills (`deep-researcher`, `project-auditor-improver`) import this shared module via `Apply ... for:`.
4. No out-of-scope files are modified by this task.

## Idempotence and Recovery

Changes are docs-only and idempotent. Re-running patches should converge to same text. If a patch collides with external edits, reopen file and reapply minimal targeted block changes only.

## Artifacts and Notes

Validation evidence:

- `rg -n "canonical-terminology.md|Primary Question|Sub-question|Question-to-Evidence Matrix|Entry Criteria|Impediment" skills/REFERENCE-STANDARD.md skills/deep-researcher/SKILL.md skills/project-auditor-improver/SKILL.md skills/shared/references/canonical-terminology.md -S`
  - confirms new module exists and is imported in both skill docs and the standard.
- Focused diff confirms only targeted files were edited for this task:
  - `skills/shared/references/canonical-terminology.md`
  - `skills/REFERENCE-STANDARD.md`
  - `skills/deep-researcher/SKILL.md`
  - `skills/project-auditor-improver/SKILL.md`
  - `tasks/todo.md`
  - `tasks/plans/2026-02-11T01-40-39Z-add-shared-canonical-terminology-module.md`

## Interfaces and Dependencies

N/A - docs-only refactoring; no runtime interfaces or dependencies are changed.

Change note: 2026-02-11T01:40:39Z - Created plan for shared canonical terminology module and integrations.
Change note: 2026-02-11T01:45:20Z - Completed implementation, validation, and tracker updates.
