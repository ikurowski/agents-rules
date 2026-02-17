# Agent Rules Repository

Repository for managing agent operating rules and work history.

## What is in this repository

- `AGENTS.md` - hard rules for agents.
- `PLANS.md` - strict self-contained ExecPlan standard for non-trivial tasks.
- `docs/` - architecture and standards source-of-reference map.
- `src/contracts/` - Zod contracts for runtime and skills boundaries.
- `src/harness/` - harness loop/protocol/context/observability layer.
- `src/runtime/` - deterministic workflow runtime orchestration.
- `src/skills-engine/` - declarative skill parser/validators.
- `skills/*` - declarative skill definitions and references (no runtime scripts).
- `evals/` - evaluation scenarios and reports.
- `tasks/todo.md` - high-level task tracker (status/goal/plan link/outcome).
- `tasks/plans/*` - executable plans for complex tasks.
- `tasks/lessons.md` - lessons captured for significant corrections with reusable prevention rules.

## Workflow Source of Truth

- `README.md` is an onboarding summary, not the authoritative execution policy.
- Execution policy and responsibilities: `AGENTS.md`
- ExecPlan structure and required sections: `PLANS.md`
- Active/high-level task tracking: `tasks/todo.md`

## Quality Gates

- Full gate pipeline: `npm run ci`
- Skills + workflow validation only: `npm run skills:validate`
- Contract boundary check only: `npm run contracts:check`
