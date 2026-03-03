# TODO

`tasks/todo.md` is a high-level tracker. Keep detailed assumptions, execution steps, and validation evidence in the linked ExecPlan.
Keep `## Active Task` only when exactly one task is `in_progress`; move completed or blocked items to `## Task History`.

## Task History

### 2026-03-03T18:09:00Z

- Status: completed
- Goal: Simplify the repository into a markdown-first workspace by removing all of `src/`, `docs/`, and `evals/` plus dependent tooling and stale skill/docs references.
- Owner: agent
- ExecPlan: `tasks/plans/2026-03-03T18-00-00Z-simplify-repository-by-removing-heavy-runtime-layers.md`
- Outcome: Completed. Removed all tracked files under `src/`, `docs/`, and `evals/`, removed the root Node/TypeScript toolchain files, removed `skills/jsdoc-reviewer`, and updated root guidance docs to describe the reduced markdown-first workspace.

### 2026-02-17T23:49:51Z

- Status: completed
- Goal: Execute approved cleanup stages 1+2+3 with anti-drift enforcement and typed campaign summary contract.
- Owner: agent
- ExecPlan: `tasks/plans/2026-02-17T23-49-51Z-cleanup-stage-1-2-3-and-typed-campaign-contract.md`
- Outcome: Completed. Removed low-value artifacts (`agents/openai.yaml`, stale scorecard, optional deep-research use-case reference, redundant skill workflow YAML files), consolidated campaign terminology into one shared model, added typed campaign summary contract schema, introduced new gates (`jsdoc:check`, `skills:declarative:check`), added remote CI workflow (`.github/workflows/ci.yml`), and verified full pipeline with `npm run ci`.
