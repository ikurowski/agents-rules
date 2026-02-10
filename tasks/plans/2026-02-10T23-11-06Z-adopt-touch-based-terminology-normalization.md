# Adopt Touch-Based Terminology Normalization Policy

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

User accepted option 2: normalize terminology only in touched active documentation, and explicitly rejected option 3 (adding central sync/check mechanics). After this change, repository policy clearly states the touch-based rule so future agents use canonical terms consistently without introducing heavier architecture.

## Progress

- [x] (2026-02-10T23:11:06Z) Initial task entry.
- [x] (2026-02-10T23:11:40Z) Added touch-based legacy terminology migration policy to reference standard.
- [x] (2026-02-10T23:12:10Z) Verified policy presence and confirmed no point-3 implementation was added.

## Surprises & Discoveries

No blocking surprises. Existing repository already had canonical terminology and template enforcement; the missing piece was an explicit migration rule for how to handle legacy wording during ongoing edits.

## Decision Log

Decision: Implement only option 2 as policy text in `skills/REFERENCE-STANDARD.md`.  
Rationale: User explicitly approved option 2 and rejected option 3.  
Timestamp/Author: 2026-02-10T23:11:20Z / agent

Decision: Do not add sync scripts, source-of-truth automation, or global rewrite mechanics.  
Rationale: User requested to leave point 3 entirely.  
Timestamp/Author: 2026-02-10T23:11:25Z / agent

## Outcomes & Retrospective

Completed. Touch-based normalization policy is now explicit and aligned with user decision. Scope remained minimal and avoided architectural expansion.

## Context and Orientation

Relevant files:

- `skills/REFERENCE-STANDARD.md`: skill-reference policy and canonical terminology.
- `tasks/todo.md`: high-level tracker with short outcome and plan link.

This is policy-only documentation work.

## Terminology and Decomposition

- `Primary Question`: whether to formalize option 2 and avoid option 3.
- `Sub-question`: where policy should be stored for future agents.
- `Question-to-Evidence Matrix`: N/A because this task is a direct policy edit, not a source-evidence research task.
- `Entry Criteria`: user confirmed "2 ok" and "3 no".
- `Impediment`: none.

## Plan of Work

Add a small policy block in `skills/REFERENCE-STANDARD.md` defining touch-based normalization and explicit non-goals (no repository-wide terminology rewrite). Then validate with grep and update `tasks/todo.md` with completed status and one-line outcome.

## Concrete Steps

1. Edit `skills/REFERENCE-STANDARD.md` and add migration policy section under canonical terminology.
Expected result: option-2 behavior is written as explicit rules.

2. Run grep checks against `skills/REFERENCE-STANDARD.md` for `Legacy Terminology Migration Policy` and `touch-based normalization`.
Expected result: both strings are present.

3. Append a completed task item in `tasks/todo.md`.
Expected result: tracker includes this plan link and short outcome.

## Validation and Acceptance

Acceptance checks:

- `skills/REFERENCE-STANDARD.md` contains a section that defines touch-based normalization.
- Policy explicitly states no repository-wide terminology-only rewrites.
- No files/scripts were added for sync/check automation.
- `tasks/todo.md` contains a completed entry linked to this plan.

Validation commands:

- `Select-String -Path skills/REFERENCE-STANDARD.md -Pattern "Legacy Terminology Migration Policy|touch-based normalization|Do not run repository-wide rewrites"`
- `Select-String -Path tasks/todo.md -Pattern "adopt-touch-based-terminology-normalization"`

## Idempotence and Recovery

Re-running this change is safe: section text can be re-applied without functional side effects. If wording is accidentally broadened beyond option 2, restore the minimal four-rule block and re-run validation grep.

## Artifacts and Notes

Planned validation artifact:

- grep hit in `skills/REFERENCE-STANDARD.md` showing the new policy section and rules.

## Interfaces and Dependencies

N/A - docs-only policy update; no runtime interfaces or dependencies changed.

Change note: 2026-02-10T23:12:10Z - Added explicit touch-based terminology migration policy and kept point 3 out of scope.
