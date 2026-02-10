# Restore Deep-Researcher to General Research-First Scope

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` will be updated as work proceeds.

This plan follows `PLANS.md` and is self-contained for a new contributor.

## Purpose / Big Picture

Correct the skill direction based on user feedback: the skill must be `deep-researcher` (general scientific research) and not governance-only. The skill should first run deep research and then answer user doubts using gathered evidence.

Observable outcomes:

- Folder name is `skills/deep-researcher`.
- Skill metadata and content describe general deep research workflow.
- Governance logging remains only as an optional use case, not the core identity.
- Validation passes.

## Progress

- [x] (2026-02-10T19:21:53Z) Read session policy context for this non-trivial correction.
- [x] (2026-02-10T19:22:10Z) Renamed skill folder back to `deep-researcher`.
- [x] (2026-02-10T19:22:45Z) Updated skill content to research-first then doubt-resolution behavior.
- [x] (2026-02-10T19:23:10Z) Validated structure and metadata.
- [x] (2026-02-10T19:23:14Z) Synced task tracker and lessons log.

## Surprises & Discoveries

The previous governance-focused naming was narrower than requested user intent; correction required both folder rename and behavioral rewrite.

## Decision Log

Decision: Treat user feedback as a significant correction and adjust both naming and core scope.  
Rationale: User explicitly rejected governance-only framing and requested broad scientific researcher behavior.  
Timestamp/Author: 2026-02-10T19:21:53Z / agent

Decision: Keep governance decision support as an optional scenario within a broader research skill.  
Rationale: Matches the stated use case without narrowing the skill identity.  
Timestamp/Author: 2026-02-10T19:21:53Z / agent

## Outcomes & Retrospective

Completed correction successfully. The skill is again `deep-researcher`, now explicitly designed for two-phase operation:

1. deep research first,
2. doubt resolution second.

Governance logging remains available as optional use case material instead of defining the skill identity.

## Context and Orientation

Affected files:

- `skills/skill-governance-researcher/*` (source to be renamed/rewritten)
- `skills/deep-researcher/*` (target)
- `tasks/todo.md`
- `tasks/lessons.md` (significant correction entry)

Reference context:

- `skills/skill-creator/*` informs quality and evidence standards.
- Prior plans remain historical but this plan defines current correction scope.

## Plan of Work

1. Rename folder back to `skills/deep-researcher`.
2. Rewrite `SKILL.md` trigger and workflow to:
   - phase 1: deep research,
   - phase 2: resolve user doubts with citations/confidence.
3. Update `agents/openai.yaml` display/default prompt accordingly.
4. Replace governance-specific reference naming with general-purpose doubt-resolution reference while keeping governance scenario as optional module.
5. Validate with `quick_validate.py` and grep checks.
6. Update `tasks/todo.md` and append reusable lesson to `tasks/lessons.md`.

## Concrete Steps

From repo root (`c:\Users\igork\Desktop\agent`):

1. `Move-Item skills/skill-governance-researcher skills/deep-researcher`
2. Patch:
   - `skills/deep-researcher/SKILL.md`
   - `skills/deep-researcher/agents/openai.yaml`
   - `skills/deep-researcher/references/*`
3. Validate:
   - `python C:\Users\igork\.codex\skills\.system\skill-creator\scripts\quick_validate.py skills/deep-researcher`
   - `rg -n "skill-governance-researcher|governance-only|\\$skill-governance-researcher" skills/deep-researcher`
4. Sync docs:
   - `tasks/todo.md`
   - `tasks/lessons.md`

## Validation and Acceptance

Accept when:

1. `skills/deep-researcher` exists and passes validation.
2. `SKILL.md` clearly states research-first then doubt-resolution flow.
3. No active references remain to `skill-governance-researcher` in the deep researcher skill files.
4. Task tracker is synced and correction lesson is recorded.

## Idempotence and Recovery

Safe to rerun.

If rename collides:

- remove empty destination remnants,
- rerun rename.

If validation fails:

- patch minimal offending fields,
- rerun same command.

## Artifacts and Notes

To be populated with command outputs and final checks.

Command evidence:

- `python C:\Users\igork\.codex\skills\.system\skill-creator\scripts\quick_validate.py skills/deep-researcher`
  - Output: `Skill is valid!`
- `rg -n "skill-governance-researcher|\\$skill-governance-researcher|governance-only" skills/deep-researcher`
  - Output: no matches.
- `Get-ChildItem -Path skills/deep-researcher -Recurse -File`
  - Output confirms expected file set including `references/doubt-resolution.md`.

Implemented files:

- `skills/deep-researcher/SKILL.md`
- `skills/deep-researcher/agents/openai.yaml`
- `skills/deep-researcher/references/research-method.md`
- `skills/deep-researcher/references/evidence-quality-rubric.md`
- `skills/deep-researcher/references/doubt-resolution.md`
- `skills/deep-researcher/references/usecase-skill-lessons-logs.md`

## Interfaces and Dependencies

N/A - Documentation/instruction assets only.

Change note: 2026-02-10T19:21:53Z - Created correction plan to restore deep-researcher general scope.
Change note: 2026-02-10T19:23:14Z - Applied rename back to `deep-researcher`, rewrote behavior to research-first + doubt-resolution, and added validation evidence.
Change note: 2026-02-10T19:23:14Z - Synced `tasks/todo.md` and appended reusable correction lesson in `tasks/lessons.md`.
