# Unify Question-Threading Terminology Across Project

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

Apply the user-approved terminology set from prior deep research and standardize project-facing documentation to use canonical industry terms. The main outcome is consistent wording in active operational docs used for future work, while preserving archival records.

## Progress

- [x] (2026-02-10T20:26:37Z) Created plan and refreshed policy/tracker context.
- [x] (2026-02-10T20:27:12Z) Added active task tracking entry.
- [x] (2026-02-10T20:28:05Z) Updated core reference docs with canonical terminology.
- [x] (2026-02-10T20:28:33Z) Validated terminology consistency and prepared tracker closure.

## Surprises & Discoveries

- Initial grep scan showed most non-canonical terms appear in historical `tasks/plans/*` logs and `tasks/todo.md` history entries, not in active skill execution docs.
- `skills/deep-researcher/references/research-method.md` needed a structural update (matrix schema and TOC) to make terminology change operational, not only cosmetic.

## Decision Log

Decision: Standardize active docs and leave historical plan records intact unless user explicitly requests retroactive archival rewrite.
Rationale: Historical plans are execution evidence snapshots; rewriting them can blur chronology and prior language context.
Timestamp/Author: 2026-02-10T20:26:37Z / Codex

Decision: Canonical vocabulary baseline:
- `Primary Question`,
- `Sub-question`,
- `Question-to-Evidence Matrix`,
- `Entry Criteria`,
- `Impediment`,
- with systems-engineering aliases when relevant (`Parent Requirement`, `Derived Requirement`, `RTM`).
Rationale: Matches approved recommendation from prior research and balances formality with usability.
Timestamp/Author: 2026-02-10T20:26:37Z / Codex

## Outcomes & Retrospective

Completed. Canonical terminology is now explicit and reusable in active docs:

- standard glossary in `skills/REFERENCE-STANDARD.md`,
- execution-level terminology section in `skills/deep-researcher/SKILL.md`,
- operational matrix and decomposition rules in `skills/deep-researcher/references/research-method.md`.

Tracker wording for the two latest history entries was normalized to canonical terms. Historical plan files were intentionally preserved as archival evidence.

## Context and Orientation

Files expected to carry operational terminology:

- `skills/REFERENCE-STANDARD.md`
- `skills/deep-researcher/SKILL.md`
- `skills/deep-researcher/references/research-method.md`

Potentially affected tracking file:

- `tasks/todo.md` (only current visible outcome phrasing, not full archival rewrite).

Historical plans may still mention legacy naming because they record past discussion snapshots.

## Plan of Work

1. Add a dedicated terminology section to `skills/REFERENCE-STANDARD.md` defining canonical names and accepted aliases.
2. Update `deep-researcher` skill/references to use the canonical terms in guidance and templates.
3. Adjust recent `tasks/todo.md` history wording for readability with canonical terms where safe.
4. Run repository grep checks to confirm operational docs use canonical vocabulary.

## Concrete Steps

1. Edit:
   - `skills/REFERENCE-STANDARD.md`
   - `skills/deep-researcher/SKILL.md`
   - `skills/deep-researcher/references/research-method.md`
   - `tasks/todo.md` (minimal wording updates only)
2. Validate:
   - `rg -n "legacy terminology|legacy naming|legacy wording" tasks skills`
   - `rg -n "Primary Question|Sub-question|Question-to-Evidence Matrix|Entry Criteria|Impediment" skills`

## Validation and Acceptance

Accept when:

1. Canonical terminology is explicitly defined in the project standard doc.
2. Active deep-research workflow docs use canonical terminology.
3. No non-canonical terms remain in active operational docs (`skills/*`, current tracker wording), except archival references kept intentionally.
4. `tasks/todo.md` and this plan are updated to completed state.

## Idempotence and Recovery

All edits are markdown-only and idempotent. If a replacement introduces awkward phrasing, re-edit sentence-level wording without changing intended meaning. Validate after each patch with grep.

## Artifacts and Notes

Validation evidence:

- Legacy terminology grep:
  - `rg -n "legacy terminology|legacy naming|legacy wording" tasks skills`
  - Result: legacy references are confined to historical context, while active skill docs use canonical terms.
- Canonical terminology grep:
  - `rg -n "Primary Question|Sub-question|Question-to-Evidence Matrix|Entry Criteria|Impediment" skills`
  - Result: expected matches in:
    - `skills/REFERENCE-STANDARD.md`,
    - `skills/deep-researcher/SKILL.md`,
    - `skills/deep-researcher/references/research-method.md`.
- Skill structure validation:
  - `python C:\Users\igork\.codex\skills\.system\skill-creator\scripts\quick_validate.py skills/deep-researcher`
  - Output: `Skill is valid!`

## Interfaces and Dependencies

N/A - Documentation terminology harmonization only; no runtime interface or dependency changes.

Change note: 2026-02-10T20:26:37Z - Created plan for terminology standardization after user approval.
Change note: 2026-02-10T20:28:33Z - Completed terminology updates and recorded validation evidence.
