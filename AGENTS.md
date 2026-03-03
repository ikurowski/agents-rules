# AGENTS.md - Repository-Wide Agent Contract

This file defines the stable, repo-wide rules for autonomous agents working in this repository. Keep task-specific workflow detail in `PLANS.md`, skill-local behavior in `skills/*`, and human-facing orientation in `README.md`.

## Instruction Hierarchy

Resolve instruction conflicts in this order:

1. Direct user request in the current session.
2. Nested, task-local `AGENTS.md` (if present).
3. Repository root `AGENTS.md`.
4. `PLANS.md` for ExecPlan structure and lifecycle.
5. Supporting docs and templates such as `README.md` and `tasks/plans/_template.md`.

If instructions conflict:

- `PLANS.md` wins for ExecPlan format and lifecycle.
- `AGENTS.md` wins for all other repository-wide operating rules.

## Repo-Wide Rules

1. Review the relevant files and context before editing anything.
2. Prefer the minimum change that solves the actual problem; do not widen scope speculatively.
3. Keep changes surgical; do not clean up adjacent code or docs unless the task requires it.
4. When a rule is reused across multiple places, keep one canonical source and point to it instead of copying the full text.
5. When the repository contains exported APIs, use `docs/standards/jsdoc-api-contracts.md` as the canonical JSDoc contract policy.

## Planning and Task Records

For non-trivial work, follow `PLANS.md` to decide whether an ExecPlan is required and how it must be maintained.

Tracker boundaries:

- `tasks/todo.md` is the high-level status tracker only.
- `tasks/plans/*` contains execution detail, decisions, evidence, and validation notes.
- `tasks/lessons.md` is only for reusable prevention rules learned from significant corrections.

If a task needs an ExecPlan, record assumptions and ambiguities in that plan instead of scattering them across other docs.

## Execution Defaults

1. Prefer resolving uncertainty from repository context before asking the user.
2. Verify changes with observable checks, not only by editing files.
3. If asked to commit, use Conventional Commits and keep each commit to one concern.

## Disclaimer

This document is intended for automated agents and tools. `README.md` explains the repository, `AGENTS.md` sets repo-wide rules, `PLANS.md` owns ExecPlan policy, and `skills/*` contains domain-specific workflows.
