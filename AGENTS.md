# AGENTS.md - Repository-Wide Agent Contract

This file defines stable repo-wide rules. Keep repo mapping in `README.md`, plan policy in `PLANS.md`, and task-scoped skills in `.agents/skills/*`.

## Instruction Hierarchy

Resolve instruction conflicts in this order:

1. Direct user request in the current session.
2. Repository root `AGENTS.md`.
3. Deeper task-local `AGENTS.md` files, which override broader repo rules when present.
4. `PLANS.md` for ExecPlan policy.
5. Supporting docs such as `README.md` and templates under `tasks/plans/`, only when consulted.

If instructions conflict:

- `PLANS.md` wins for when and how ExecPlans are used.
- `AGENTS.md` wins for all other repository-wide operating rules.
- Supporting docs inform work but do not override this contract.

## Skill Usage

Skills under `.agents/skills/*` are task-scoped workflows. Use a skill when the user invokes it by name or when its `description` frontmatter clearly matches the task. Follow the skill only for that task, and load its references only when needed. Skill instructions do not replace user instructions, nested `AGENTS.md`, root repo rules, or `PLANS.md`.

## Repo-Wide Rules

1. Review the relevant files and local context before editing anything.
2. Prefer the smallest change that solves the real problem; do not widen scope speculatively.
3. Keep one canonical source for reused rules; point to it instead of copying it.
4. Preserve user or agent changes that are not part of the task; do not revert or clean up unrelated work.
5. Preserve clear ownership boundaries:
   - `README.md` = repo map and current operating model.
   - `AGENTS.md` = stable repo-wide agent rules.
   - `PLANS.md` = ExecPlan trigger and shape.
   - `.agents/skills/*` = Codex-discoverable skill-local behavior and references.
   - `docs/skill-authoring.md` = local skill authoring conventions.
   - `tasks/todo.md` = high-level task status and outcomes.
   - `tasks/plans/*` = detailed plans worth keeping.
   - `tasks/lessons.md` = reusable prevention rules only.
6. Keep historical detail out of root docs; put it in plans only when the task is worth preserving.
7. Verify meaningful changes with observable checks. Run `npm run validate` after profile or skill-structure changes, and report failures or skipped validation.
8. When a recommendation depends on current product behavior, architecture choices, or source-backed claims, check sources before presenting it as fact.
9. Promote hooks, rules, custom agents, or stable skills only when both source guidance and repeated local need justify them. Mark experimental skills clearly and validate before promotion.

## Execution Defaults

1. Prefer resolving uncertainty from repository context before asking the user.
2. Keep changes surgical; do not clean up adjacent code or docs unless the task requires it.
3. If work is non-trivial, follow `PLANS.md` instead of inventing local plan rules.
4. If asked to commit, use Conventional Commits and keep each commit to one concern.

## Source Discipline

For source-backed research, record material links and access dates in the answer or in a retained ExecPlan. Add source catalogs only when they have an active consumer.
