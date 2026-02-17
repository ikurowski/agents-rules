# AGENTS.md - Operational Router

This file is the operational map for automated agents. Detailed standards live in dedicated documents.

## Source-of-Truth Map

- Architecture index: `docs/index.md`
- Harness architecture: `docs/architecture/harness.md`
- Runtime architecture: `docs/architecture/runtime.md`
- Skills-engine architecture: `docs/architecture/skills-engine.md`
- Instruction layering standard: `docs/standards/instructions-layering.md`
- Contracts boundary standard: `docs/standards/contracts-boundaries.md`
- JSDoc API contract standard: `docs/standards/jsdoc-api-contracts.md`
- Evaluation gate standard: `docs/standards/eval-gates.md`
- Plan lifecycle standard: `PLANS.md`
- Skill reference standard: `skills/REFERENCE-STANDARD.md`
- Task tracker: `tasks/todo.md`
- Lessons log: `tasks/lessons.md`

## Instruction Hierarchy

1. Direct user request in current session.
2. Task-local `AGENTS.md` when present.
3. Repository root `AGENTS.md`.
4. `PLANS.md` for ExecPlan lifecycle and structure.
5. Supporting docs (`README.md`, templates).

## Session Start (Non-trivial Tasks)

1. Read `AGENTS.md`.
2. Read `PLANS.md`.
3. Check `tasks/todo.md` for active task and linked plan.
4. Review `tasks/lessons.md` for reusable prevention rules.

## Operational Rules

1. Use execution plans for non-trivial work.
2. Keep `tasks/todo.md` high-level; keep detailed evidence in `tasks/plans/*`.
3. Keep `skills/*` declarative-only (`SKILL.md`, references, workflow specs).
4. Keep runtime data contracts in `src/contracts` and validate boundaries at runtime.
5. Enforce anti-drift using mandatory CI gates from `docs/standards/eval-gates.md`.
6. For new/changed exported APIs, follow `docs/standards/jsdoc-api-contracts.md`.
7. Do not run `git commit` without explicit user authorization in the current session.
