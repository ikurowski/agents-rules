# Audit usage of `Primary Question` across active project docs and skills

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

The user asked for an audit (using `project-auditor-improver` workflow) of how `Primary Question` is used in the repository. The observable outcome is a ranked findings report with evidence paths, U5 scoring, and a minimal improvement plan focused on traceable, low-risk documentation changes.

## Progress

- [x] (2026-02-11T01:26:56Z) Created task plan and captured audit objective/scope assumptions.
- [x] (2026-02-11T01:29:20Z) Collected baseline evidence with repository-wide and skill-local `rg` scans.
- [x] (2026-02-11T01:31:10Z) Triaged findings with severity/impact/risk scoring.
- [x] (2026-02-11T01:32:15Z) Built prioritized improvement plan and captured validation checks.
- [x] (2026-02-11T01:33:00Z) Completed tracker update and finalized retrospective.

## Surprises & Discoveries

`Primary Question` usage is strong in standards and `deep-researcher`, but the target skill used for auditing (`skills/project-auditor-improver/SKILL.md`) references only `Primary Question` and does not include the rest of canonical decomposition terms.  
Evidence: `rg` results showed only one canonical-term match inside `skills/project-auditor-improver`.

## Decision Log

Decision: Scope this audit to active policy/skill docs (`skills/*`, `AGENTS.md`, `PLANS.md`, `README.md`, `tasks/plans/_template.md`) and treat detailed historical plan wording as archival context.  
Rationale: `PLANS.md` explicitly allows legacy wording in historical plans; active guidance consistency is the critical quality target.  
Timestamp/Author: 2026-02-11T01:28:10Z / Codex

Decision: Perform audit/report only (no direct skill rewrite in this task) and provide a minimal execution-ready improvement plan.  
Rationale: User asked for an audit of usage, not immediate implementation.  
Timestamp/Author: 2026-02-11T01:31:35Z / Codex

## Outcomes & Retrospective

Completed. The audit found one medium-high priority consistency gap localized to `project-auditor-improver` and two lower-priority alignment issues. A low-risk improvement sequence was produced with explicit validation commands. No runtime/code dependencies were affected.

## Context and Orientation

Audit target is terminology and operational usage quality for `Primary Question`. Canonical baseline lives in:

- `skills/REFERENCE-STANDARD.md`
- `tasks/plans/_template.md`

Active skill implementations checked:

- `skills/deep-researcher/SKILL.md`
- `skills/project-auditor-improver/SKILL.md`
- `skills/project-auditor-improver/references/*.md`

## Terminology and Decomposition

- `Primary Question`: top-level question the workflow must answer.
- `Sub-question`: decomposition unit required to resolve the primary question.
- `Question-to-Evidence Matrix`: question-to-evidence traceability artifact.
- `Entry Criteria`: deterministic rule for admitting a new sub-question.
- `Impediment`: blocker requiring explicit mitigation/next action.

## Plan of Work

1. Run pass 1 (policy/process consistency): verify canonical terminology source and expected terms.
2. Run pass 2 (documentation accuracy): compare active skill docs against canonical requirements.
3. Build findings register with U5 scores and root causes.
4. Build minimal improvement plan ordered by impact/risk.
5. Record validation commands for future execution.

## Concrete Steps

1. `rg -n "Primary Question|Sub-question|Question-to-Evidence Matrix|Entry Criteria|Impediment" skills AGENTS.md PLANS.md README.md tasks/plans/_template.md tasks/todo.md -S`  
Expected: canonical term presence in standards and active skill docs.

2. `rg -n "Primary Question|Sub-question|Question-to-Evidence Matrix|Entry Criteria|Impediment" skills/project-auditor-improver -S`  
Expected: enough hits to prove full decomposition model usage in auditor skill package.

3. `rg -n "threading|derived thread|legacy shorthand|question threading|derived question" skills AGENTS.md PLANS.md README.md tasks/plans/_template.md -S`  
Expected: no active legacy wording in active policy/skill docs.

## Validation and Acceptance

Acceptance for this audit task:

1. Findings include severity/impact/risk + evidence path + root cause + recommended action.
2. Improvement plan is prioritized by value/risk with concrete validation checks.
3. Report explicitly answers whether current `Primary Question` usage is consistent and sufficient.

Validation artifacts:

- Repository `rg` outputs for canonical term coverage and legacy wording checks.
- File-level inspection of `skills/project-auditor-improver/SKILL.md` and its references.

## Idempotence and Recovery

Audit steps are read-only and idempotent. Re-running the same `rg` scans reproduces the same evidence until repository content changes. If evidence becomes stale after edits, rerun all listed commands and regenerate finding scores.

## Artifacts and Notes

Key evidence excerpts:

- Canonical baseline present in `skills/REFERENCE-STANDARD.md:49` through `skills/REFERENCE-STANDARD.md:53`.
- Canonical terms present in `skills/deep-researcher/SKILL.md:18` through `skills/deep-researcher/SKILL.md:22`.
- `skills/project-auditor-improver/SKILL.md` contains only one direct match: `skills/project-auditor-improver/SKILL.md:32`.
- No canonical-term matches found under `skills/project-auditor-improver/references`.
- No active legacy terminology matches found in active policy/skill docs from legacy-term `rg` scan.

## Interfaces and Dependencies

N/A - audit/report-only documentation task with no interface or dependency change.

Change note: 2026-02-11T01:26:56Z - Created and completed audit ExecPlan for `Primary Question` usage using project-auditor workflow.
