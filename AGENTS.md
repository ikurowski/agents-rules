# AGENTS.md - Repository-Wide Agent Contract

This file defines the stable, repo-wide rules for autonomous agents working in this repository. Keep repo mapping in `README.md`, plan policy in `PLANS.md`, and skill-local workflow in `skills/*`.

## Instruction Hierarchy

Resolve instruction conflicts in this order:

1. Direct user request in the current session.
2. Nested, task-local `AGENTS.md` (if present).
3. Repository root `AGENTS.md`.
4. `PLANS.md` for ExecPlan policy.
5. Supporting docs such as `README.md` and templates under `tasks/plans/`.

If instructions conflict:

- `PLANS.md` wins for when and how ExecPlans are used.
- `AGENTS.md` wins for all other repository-wide operating rules.

## Repo-Wide Rules

1. Review the relevant files and local context before editing anything.
2. Prefer the smallest change that solves the real problem; do not widen scope speculatively.
3. Keep one canonical source for reused rules; point to it instead of copying it.
4. Preserve clear ownership boundaries:
   - `README.md` = repo map and current operating model.
   - `AGENTS.md` = stable repo-wide agent rules.
   - `PLANS.md` = ExecPlan trigger and shape.
   - `skills/*` = skill-local behavior and references.
   - `tasks/todo.md` = high-level task status and outcomes.
   - `tasks/plans/*` = detailed plans worth keeping.
   - `tasks/lessons.md` = reusable prevention rules only.
5. Keep historical detail out of root docs; put it in plans only when the task is worth preserving.
6. Verify meaningful changes with observable checks, not only by editing files.

## Execution Defaults

1. Prefer resolving uncertainty from repository context before asking the user.
2. Keep changes surgical; do not clean up adjacent code or docs unless the task requires it.
3. If work is non-trivial, follow `PLANS.md` instead of inventing local plan rules.
4. If asked to commit, use Conventional Commits and keep each commit to one concern.
