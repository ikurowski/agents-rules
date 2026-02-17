# Add a shared end-of-run principle-effectiveness reference to all active skills

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

Add a reusable reference module that each active skill can invoke at the end of execution to assess how effectively a principle was implemented and to propose corrective actions when effectiveness is insufficient. User-visible outcome: each skill includes an explicit final principle-effectiveness check and loads the same shared method.

## Progress

- [x] (2026-02-11T01:11:16Z) Initialized task and reviewed policy + active skill files.
- [x] (2026-02-11T01:13:07Z) Created shared reference module for principle-effectiveness assessment.
- [x] (2026-02-11T01:13:07Z) Integrated module into all active skill workflows and Progressive Disclosure lists.
- [x] (2026-02-11T01:13:07Z) Validated `Apply <path> for:` consistency and updated tracker artifacts.

## Surprises & Discoveries

To satisfy strict `Apply <path> for:` consistency checks, two pre-existing inline `Apply ... for ...` statements outside Progressive Disclosure also needed normalization (`deep-researcher` Step 3 and `skill-creator` Security Gate).

## Decision Log

Decision: Implement one shared reference (`skills/shared/references/*`) and import it in each active skill rather than creating separate per-skill copies.
Rationale: Matches single-source-of-truth policy and avoids drift.
Timestamp/Author: 2026-02-11T01:11:16Z / Codex

Decision: Place the new check at end-of-work sections in each skill and in Progressive Disclosure.
Rationale: User explicitly asked for an end-stage evaluation of principle implementation effectiveness.
Timestamp/Author: 2026-02-11T01:11:16Z / Codex

## Outcomes & Retrospective

Completed. Added one shared end-of-run review module (`principle-effectiveness-review`) and linked it in all active skills. Each skill now contains explicit end-stage principle-effectiveness evaluation guidance plus Progressive Disclosure import of the shared module. Formatting checks for `Apply <path> for:` passed for active skill docs.

## Context and Orientation

Active skills are `skills/deep-researcher/SKILL.md`, `skills/skill-creator/SKILL.md`, and `skills/project-auditor-improver/SKILL.md`. Shared references are under `skills/shared/references/`. Cross-skill reference conventions live in `skills/REFERENCE-STANDARD.md`.

## Terminology and Decomposition

N/A - this is a documentation/policy integration task, not a research decomposition task.

## Plan of Work

Create a new shared reference file with a compact procedure: define evaluated principle, score implementation effectiveness on a five-point score scale, identify gaps/root causes, and output corrective actions with priority/owner/checkpoint. Then add explicit end-stage usage instructions in each active skill and include the new reference in their Progressive Disclosure lists. Finally, run regex validation for `Apply <path> for:` formatting and record outcomes in `tasks/todo.md` and this plan.

## Concrete Steps

1. Create `skills/shared/references/principle-effectiveness-review.md` with `When to load`, `## Table of Contents`, scoring rules, output template, and escalation guidance.
2. Update `skills/REFERENCE-STANDARD.md` shared module list to include the new reference.
3. Update active skill docs to require end-of-run principle-effectiveness review and import the shared reference in Progressive Disclosure.
4. Validate with scans:
- `rg -n "principle-effectiveness-review|Apply `" skills/*/SKILL.md skills/shared/references/*.md skills/REFERENCE-STANDARD.md`

## Validation and Acceptance

Acceptance criteria:
- New shared reference exists and is reusable.
- All three active skills explicitly invoke it at the end and include it in Progressive Disclosure.
- Formatting aligns with `Apply <relative-path> for:` pattern.
- Tracker docs include completed task record and plan link.

Verification commands:
- `rg -n "principle-effectiveness-review" skills`
- `rg -n -P "Apply `[^`]+` for(?!:)" skills/deep-researcher/SKILL.md skills/skill-creator/SKILL.md skills/project-auditor-improver/SKILL.md`

## Idempotence and Recovery

Edits are documentation-only and idempotent. If any integration wording is wrong, update only affected sections and rerun the regex checks. No runtime code paths are affected.

## Artifacts and Notes

Evidence:
- Added file: `skills/shared/references/principle-effectiveness-review.md`.
- Updated shared module index: `skills/REFERENCE-STANDARD.md`.
- Skill integrations:
  - `skills/deep-researcher/SKILL.md`
  - `skills/skill-creator/SKILL.md`
  - `skills/project-auditor-improver/SKILL.md`
- Validation:
  - `rg -n "principle-effectiveness-review" skills` returned matches in shared reference, standard, and all active skills.
  - `rg -n -P 'Apply `[^`]+` for(?!:)' skills/deep-researcher/SKILL.md skills/skill-creator/SKILL.md skills/project-auditor-improver/SKILL.md` returned no matches (exit code `1`), confirming no non-colon `Apply ... for` forms.

## Interfaces and Dependencies

N/A - documentation/policy-only changes; no runtime interfaces or dependencies are added.

Change note: 2026-02-11T01:11:16Z - Created ExecPlan for adding shared end-of-run principle-effectiveness reference to all active skills.
Change note: 2026-02-11T01:13:07Z - Completed shared reference creation, integrated all active skills, and recorded validation evidence.
