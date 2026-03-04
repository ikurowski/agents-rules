# PLANS.md - ExecPlan Policy

Use an execution plan ("ExecPlan") when the task needs durable execution memory. Do not create one just because a task has more than one edit.

## When a Plan Is Required

Create and maintain an ExecPlan for:

1. research, audit, or decision work that needs explicit evidence and closure,
2. repo architecture or boundary changes,
3. risky multi-file changes where rollback or explicit validation matters,
4. work the user explicitly asks to plan.

## When a Plan Is Not Required

- rename-only changes,
- wording-only doc edits,
- simple single-file cleanup,
- dormant tooling or placeholder tweaks that do not change live behavior,
- other short tasks where the final diff is already the best record.

## Plan Ownership

- Store plans in `tasks/plans/`.
- Use filename format `YYYY-MM-DDTHH-mm-ssZ-short-topic.md` (timestamp, UTC, Windows-safe separators).
- Keep `tasks/todo.md` high-level only.
- Keep detailed reasoning, evidence, and recovery notes in the plan, not the tracker.

## Minimum Plan Shape

Every ExecPlan must include:

1. `Purpose`
2. `Progress`
3. `Decision Log`
4. `Validation`
5. `Outcome`

Add extra sections only when they materially help the task. Common optional sections are `Context`, `Concrete Steps`, `Idempotence and Recovery`, `Artifacts`, and `Interfaces and Dependencies`.

## Plan Rules

1. Keep the plan self-contained enough for the task at hand.
2. Update `Progress` when state changes materially.
3. Record real decisions and real validation; do not add filler to satisfy ceremony.
4. If a section is not used, omit it unless the template for that task keeps it intentionally.
5. Keep plan detail out of `tasks/todo.md`.

## Historical Plans

- Keep plans that capture research findings, architectural turns, or reusable experiments.
- Avoid micro-plans for tiny cleanup tasks.
- When several small plans document the same short-lived oscillation, keep the one or two that matter and delete the rest.

## Template

Start from `tasks/plans/_template.md` and expand only if the task genuinely needs more structure.
