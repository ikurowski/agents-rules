# Create project-auditor-improver skill from repository history

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

Create a new reusable skill that audits a repository and proposes or applies pragmatic improvements. The user-visible outcome is a ready-to-use skill package at `skills/project-auditor-improver/` that follows local conventions from prior work (ExecPlan-first behavior, tracker discipline, five-point scoring, source/evidence policy, and confirm-required risk gate).

## Progress

- [x] (2026-02-10T23:39:09Z) Initial task entry and required startup policy review completed (`AGENTS.md`, `PLANS.md`, `tasks/todo.md`, `tasks/lessons.md`).
- [x] (2026-02-10T23:39:09Z) Repository history review completed (`tasks/todo.md` history, `tasks/plans/*` purpose/outcomes scan, `git log`).
- [x] (2026-02-10T23:39:09Z) Create skill package files and references.
- [x] (2026-02-10T23:39:09Z) Validate structure and update tracker docs.

## Surprises & Discoveries

`Get-Date -AsUTC` is unavailable in this PowerShell environment; UTC timestamps were generated via `(Get-Date).ToUniversalTime()`.

Initial parallel file writes raced directory creation and failed for dependent files. The fix was to re-run file creation sequentially after explicit directory creation.

## Decision Log

Decision: Treat "read whole history" as all available local task/plan/commit history in this repo.
Rationale: It is the full actionable history available to the agent and contains purpose/outcome traces per task.
Timestamp/Author: 2026-02-10T23:39:09Z / Codex

Decision: Build a new standalone skill (`project-auditor-improver`) instead of changing `skill-creator` or `deep-researcher`.
Rationale: User explicitly asked to create a skill for auditing and improving projects; a dedicated package is the minimal direct implementation.
Timestamp/Author: 2026-02-10T23:39:09Z / Codex

## Outcomes & Retrospective

Completed. Added a new skill package at `skills/project-auditor-improver/` with:
- `SKILL.md` workflow for intake, baseline audit, triage, improvement planning, execution, and final reporting.
- `agents/openai.yaml` metadata aligned with invocation intent.
- Split references for audit method, improvement execution, and validation gates.

The implementation reused existing shared policy modules for five-point scoring, source/evidence handling, and confirm-required risk gating, matching recent repository standardization decisions.

## Context and Orientation

The repository stores skill packages in `skills/<name>/` with at least `SKILL.md` and `agents/openai.yaml`, plus optional `references/*.md` for progressive disclosure. Operational behavior policy is in `AGENTS.md`; execution plan lifecycle is in `PLANS.md`; high-level tracking is in `tasks/todo.md`; reusable correction rules are in `tasks/lessons.md`. Existing skills (`skills/skill-creator`, `skills/deep-researcher`) already consume shared modules under `skills/shared/references/` and provide the structural baseline for the new skill.

## Terminology and Decomposition

- Primary Question: What skill package should be created to audit and improve projects based on repository standards/history?
- Sub-question: Which workflow blocks are mandatory to align with existing skill conventions?
- Sub-question: Which shared references should be reused versus local references added?
- Sub-question: Which acceptance checks prove the skill is usable and policy-aligned?
- Question-to-Evidence Matrix: Built from `tasks/todo.md` history, `tasks/plans/*` purpose/outcomes, and existing skill package structures.
- Entry Criteria: Add a sub-question only when it changes file content or acceptance checks.
- Impediment: None currently.

## Plan of Work

Create `skills/project-auditor-improver/` with a focused `SKILL.md`, matching metadata in `agents/openai.yaml`, and split references for audit method, improvement execution, and validation gates. Reuse shared references for source/evidence policy, five-point scoring bands, and confirm-required gate to stay consistent with current architecture. Then validate file presence/content using shell checks and update `tasks/todo.md` plus this plan's progress/outcomes.

## Concrete Steps

1. Create files:
- `skills/project-auditor-improver/SKILL.md`
- `skills/project-auditor-improver/agents/openai.yaml`
- `skills/project-auditor-improver/references/audit-method.md`
- `skills/project-auditor-improver/references/improvement-execution.md`
- `skills/project-auditor-improver/references/validation-gates.md`
Expected result: files exist with frontmatter and actionable workflow.

2. Validate package structure with `rg --files skills/project-auditor-improver`.
Expected result: all intended files listed.

3. Update trackers:
- set task state in `tasks/todo.md` (active + completion outcome)
- finalize `Progress` and `Outcomes & Retrospective` in this ExecPlan.
Expected result: task audit trail is complete and consistent.

## Validation and Acceptance

Acceptance checks:
- `SKILL.md` includes frontmatter (`name`, `description`) and explicit workflow contract.
- Skill references use progressive disclosure and point to shared modules.
- Risk handling includes five-point score risk score and confirmation requirement for high-risk actions.
- Package contains `agents/openai.yaml` aligned with purpose.
- `tasks/todo.md` reflects completed outcome with ExecPlan link.

Verification commands:
- `rg --files skills/project-auditor-improver`
- `Get-Content -Raw skills/project-auditor-improver/SKILL.md`
- `Get-Content -Raw tasks/todo.md`

## Idempotence and Recovery

File creation is idempotent by overwriting the same target paths. If a file contains incorrect content, rerun the same write command with corrected text. If tracking state is wrong in `tasks/todo.md`, edit only the new task block and keep prior history untouched.

## Artifacts and Notes

Verification evidence captured during execution:
- `rg --files skills/project-auditor-improver` returned exactly:
  - `skills/project-auditor-improver\\SKILL.md`
  - `skills/project-auditor-improver\\references\\validation-gates.md`
  - `skills/project-auditor-improver\\references\\improvement-execution.md`
  - `skills/project-auditor-improver\\references\\audit-method.md`
  - `skills/project-auditor-improver\\agents\\openai.yaml`
- `Get-Content -Raw skills/project-auditor-improver/SKILL.md` confirmed frontmatter, workflow contract, progressive disclosure, and deliverables.
- `Get-Content -Raw tasks/todo.md` confirmed completed history entry with ExecPlan link.

## Interfaces and Dependencies

N/A - this is docs/skill-definition work only; no runtime interfaces or external library dependencies are introduced.

Change note: 2026-02-10T23:39:09Z - Created initial ExecPlan for project-auditor-improver skill creation based on full local project history.
Change note: 2026-02-10T23:39:09Z - Updated progress/outcomes and captured verification evidence after skill package creation and tracker finalization.

