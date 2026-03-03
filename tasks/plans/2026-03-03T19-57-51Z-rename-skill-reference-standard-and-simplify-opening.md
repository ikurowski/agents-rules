# Rename the skill reference standard and simplify its opening

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

The current file name `skills/REFERENCE-STANDARD.md` is awkward and the opening sentence over-emphasizes scoring even though the document is primarily about shared reference conventions. After this change, the file should have a clearer name, active references should point to the new path, and the opening should describe the document as a shared guide for skill references rather than centering scoring.

## Progress

- [x] (2026-03-03T19:57:51Z) Initial task entry.
- [x] (2026-03-03T19:58:00Z) Reopened the tracker with an active task linked to this plan.
- [x] (2026-03-03T19:59:00Z) Renamed the shared skill reference policy file and updated active references.
- [x] (2026-03-03T19:59:00Z) Simplified the opening title and description so scoring is secondary, not the headline.
- [x] (2026-03-03T20:00:00Z) Validated the new path and active references, then recorded the outcome.

## Surprises & Discoveries

`skills/deep-researcher/SKILL.md` is the only active content file that currently imports `../REFERENCE-STANDARD.md`. Historical plan files also mention the old path, but those references are archival and do not need to be rewritten for this rename.

## Decision Log

Decision: rename the file to `skills/REFERENCE-GUIDE.md`.  
Rationale: `guide` is more natural here than `standard` because the file combines conventions, import patterns, and a few reusable rules rather than being only a strict normative standard.  
Timestamp/Author: 2026-03-03T19:57:51Z / agent

Decision: update only active references, not archival ExecPlans.  
Rationale: changing historical plan text would create noise without improving current operability.  
Timestamp/Author: 2026-03-03T19:57:51Z / agent

## Outcomes & Retrospective

Completed. The awkward `skills/REFERENCE-STANDARD.md` name was replaced with `skills/REFERENCE-GUIDE.md`, which better fits the file's role. The opening now describes shared structure and usage conventions for skill references instead of foregrounding scoring. The active import in `skills/deep-researcher/SKILL.md` was updated to the new path. Historical plan files still mention the old name, intentionally, as archival context.

## Context and Orientation

The file being renamed lives at `skills/REFERENCE-STANDARD.md` and acts as the shared guide for skill-local references under `skills/*/references/`. The active import site is `skills/deep-researcher/SKILL.md`. The task is limited to the shared guide itself, its active reference, and the task tracker/plan record.

## Terminology and Decomposition

N/A - this is a repository documentation rename task, not a research campaign.

## Plan of Work

First, add this plan as the active task in `tasks/todo.md`. Next, rename `skills/REFERENCE-STANDARD.md` to `skills/REFERENCE-GUIDE.md`. Then update `skills/deep-researcher/SKILL.md` to point to the new path and rewrite the opening heading/description in the renamed file so it describes shared structure and usage conventions for skill references, with scoring treated as one subordinate concern rather than the main premise. Finally, validate the new path and reference resolution, then close the task in the tracker.

## Concrete Steps

From repo root `c:\Users\igork\Desktop\agent`:

1. Update `tasks/todo.md` with an `## Active Task` entry for this plan.
2. Rename the file with `apply_patch` move semantics.
3. Patch the renamed file's title/opening and patch `skills/deep-researcher/SKILL.md`.
4. Validate with `Test-Path` and `rg`.

Expected results:

- `skills/REFERENCE-GUIDE.md` exists,
- `skills/REFERENCE-STANDARD.md` no longer exists,
- active docs point at `../REFERENCE-GUIDE.md`,
- the opening no longer frames the document around scoring.

## Validation and Acceptance

Acceptance is satisfied when:

1. `Test-Path` returns `True` for `skills/REFERENCE-GUIDE.md` and `False` for `skills/REFERENCE-STANDARD.md`.
2. `rg -n "REFERENCE-STANDARD\\.md" skills AGENTS.md README.md` returns no active-content matches.
3. The opening of `skills/REFERENCE-GUIDE.md` describes the file as a shared guide for skill reference documents, not as a scoring convention document.

## Idempotence and Recovery

The rename is idempotent once complete. If a future rename is needed again, update active import sites together with the file move to avoid dangling references.

## Artifacts and Notes

Validation evidence to capture:

- `Test-Path` for old and new file paths
- `rg` for active references

Captured evidence:

- `Test-Path` returned `True` for `skills/REFERENCE-GUIDE.md` and `False` for `skills/REFERENCE-STANDARD.md`.
- `rg -n "REFERENCE-STANDARD\\.md|REFERENCE-GUIDE\\.md" skills AGENTS.md README.md` returned only the expected active import in `skills/deep-researcher/SKILL.md`.
- The opening of `skills/REFERENCE-GUIDE.md` now reads as a shared guide for skill reference documents.

## Interfaces and Dependencies

N/A - this task renames and rewrites documentation only.

Change note: 2026-03-03T19:57:51Z - Created plan to rename the shared skill reference file and simplify its opening.
Change note: 2026-03-03T20:00:00Z - Recorded validation evidence and final outcome after renaming the file and updating active references.
