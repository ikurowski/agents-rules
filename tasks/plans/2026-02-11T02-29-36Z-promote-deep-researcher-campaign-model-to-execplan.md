# Promote Deep-Researcher Campaign model into ExecPlan standard

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

User wants the Deep-Researcher Campaign model enforced at the execution-plan level so campaign closure is deterministic: initial question set must be closed, emergent threads must be governed, and coverage must be visible via matrix tracking. Observable outcome: `tasks/plans/_template.md` explicitly includes campaign sections (`Seed Questions`, `Derived Threads`, `Coverage Matrix`), plus skill guidance aligns with the same operational rules (`Primary Question`, entry rule, depth cap, completion definition).

## Progress

- [x] (2026-02-11T02:29:36Z) Created plan and captured objective from user request.
- [x] (2026-02-11T02:31:15Z) Added campaign model sections and templates to `tasks/plans/_template.md`.
- [x] (2026-02-11T02:32:00Z) Aligned `deep-researcher` docs with exact campaign rules (sub-question IDs, admission threshold, depth cap, closure definition).
- [x] (2026-02-11T02:33:20Z) Validated consistency and updated tracker entries.

## Surprises & Discoveries

Current repository already has campaign-like wording in deep-research docs, but it does not fully encode the requested formal model (sub-question IDs, explicit matrix schema, `Priority(U5) >= 3.8` gate, and no nested sub-question expansion).

## Decision Log

Decision: Keep `tasks/todo.md` high-level and move all campaign mechanics into ExecPlan template and deep-research docs.
Rationale: matches user's stated model and existing repository separation (`todo` high-level, plan details in ExecPlan).
Timestamp/Author: 2026-02-11T02:29:36Z / agent

Decision: Use `Primary Question` as canonical label and use `Sub-question-*` IDs plus a `Type` column (`initial`/`emergent`) for tracking.
Rationale: preserves project terminology while avoiding ambiguous shorthand.
Timestamp/Author: 2026-02-11T02:29:36Z / agent

## Outcomes & Retrospective

Completed. The campaign model is now explicit in ExecPlan template and mirrored in deep-research operational docs. The repository now has concrete references to `Primary Question`, `Coverage Matrix`, and controlled `Primary Question -> Sub-question` expansion rules, matching the requested model.

## Context and Orientation

Relevant files:

- `tasks/plans/_template.md`: source-of-truth for new ExecPlans.
- `skills/deep-researcher/SKILL.md`: workflow contract for campaign execution.
- `skills/deep-researcher/references/research-method.md`: operational table/method details.
- `tasks/todo.md`: high-level task status tracking.

## Terminology and Decomposition

- `Primary Question`: top-level campaign objective.
- `Sub-question` (`Sub-question-*`, with `Type = initial`): user-originating starting question in campaign scope.
- `Sub-question` (`Sub-question-*`, with `Type = emergent`): emergent thread discovered during research and linked to `Primary Question`.
- `Coverage Matrix`: closure map for all tracked `Sub-question-*`.
- `Entry Criteria`: gate for adding new emergent `Sub-question-*` (`Blocking = yes` or `Priority(U5) >= 3.8`).
- `Impediment`: blocker that prevents closure and requires explicit disposition.

## Plan of Work

1. Update `tasks/plans/_template.md` so research/decision plans must include:
   - `Primary Question`,
   - `Seed Questions`,
   - `Derived Threads`,
   - `Coverage Matrix`,
   - campaign register table with required columns.
2. Add explicit campaign rules in template:
   - entry gate for new threads,
   - depth cap (`Primary Question -> Sub-question` only),
   - completion definition.
3. Update `skills/deep-researcher/SKILL.md` and `skills/deep-researcher/references/research-method.md` to mirror the same exact campaign rules and terminology.
4. Run grep checks and skill validator, then close tracker entry.

## Concrete Steps

1. Edit `tasks/plans/_template.md` with campaign sections and table template.
Expected result: every new deep-research plan can follow deterministic closure workflow.

2. Edit deep-research docs to align with template rules.
Expected result: runtime skill behavior and plan standard are consistent.

3. Validate:
- `rg -n "Seed Questions|Derived Threads|Coverage Matrix|Priority \\(U5\\)|Sub-question-\\*|Primary Question" tasks/plans/_template.md skills/deep-researcher/SKILL.md skills/deep-researcher/references/research-method.md`
- `python C:\\Users\\igork\\.codex\\skills\\.system\\skill-creator\\scripts\\quick_validate.py skills/deep-researcher`

## Validation and Acceptance

Acceptance criteria:

1. `tasks/plans/_template.md` includes explicit Deep-Researcher Campaign sections and the required register table.
2. Template includes formal gates: `Blocking=yes OR Priority(U5)>=3.8`, `Primary Question -> Sub-question` max depth, and closure definition.
3. `deep-researcher` docs use `Primary Question` and matrix-based closure language aligned with the template.
4. `tasks/todo.md` reflects this task as completed with short outcome.

## Idempotence and Recovery

Docs-only change. Reapplying patches is safe. If wording drifts, restore from last commit and reapply exact sections from this plan.

## Artifacts and Notes

Validation artifacts:

- `rg -n "Primary Question|Seed Questions|Derived Threads|Coverage Matrix|Priority \\(U5\\) >= 3.8|Primary Question -> Sub-question|Sub-question -> Sub-question|include-now|next-task|drop" tasks/plans/_template.md skills/deep-researcher/SKILL.md skills/deep-researcher/references/research-method.md`
  - confirmed presence of all requested campaign mechanics.
- `python C:\\Users\\igork\\.codex\\skills\\.system\\skill-creator\\scripts\\quick_validate.py skills/deep-researcher`
  - result: `Skill is valid!`

## Interfaces and Dependencies

N/A - documentation/process standard updates only.

Change note: 2026-02-11T02:29:36Z - Created plan to promote Deep-Researcher Campaign model into ExecPlan standard.
Change note: 2026-02-11T02:33:20Z - Completed template + deep-research campaign alignment and validation.
