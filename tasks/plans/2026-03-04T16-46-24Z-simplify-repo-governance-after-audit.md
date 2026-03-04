# Simplify repo governance after the architecture audit while keeping dormant tooling parked

This ExecPlan is a living document. The sections `Progress`, `Decision Log`, and `Outcome` must stay aligned with the actual repository state.

## Purpose / Big Picture

Apply the audit recommendation to the repository without removing the dormant Node/TypeScript tooling that the user wants to keep for future work. After this change, the repository should keep its top-level shape (`README.md`, `AGENTS.md`, `PLANS.md`, `skills/`, `tasks/`) while dropping the dead standards layer, the premature shared-reference layer, the unused workflow YAML, the principle-effectiveness review, and the low-value micro-plan cluster. Observable outcome: a smaller repo where root docs are short, `deep-researcher` owns its own operational detail locally, and the tracker/history is lighter and internally consistent.

## Progress

- [x] (2026-03-04T16:46:24Z) Created the plan and confirmed that dormant tooling must stay.
- [x] (2026-03-04T16:56:00Z) Removed dead governance files, the shared-reference layer, the workflow YAML, and low-value micro-plans.
- [x] (2026-03-04T17:08:00Z) Rewrote root docs, the plan template, and the `deep-researcher` skill/reference stack to the lighter model.
- [x] (2026-03-04T17:14:00Z) Compressed tracker history, verified remaining references, and recorded final outcomes.

## Surprises & Discoveries

The currently staged audit plan at `tasks/plans/2026-03-03T21-05-00Z-audit-agent-repo-architecture.md` is worth keeping because it documents the reasoning behind this simplification. By contrast, the same-day micro-plans around strict markdown mode, rollback, `tsconfig`, and rename-only work are low-value archive noise once the larger audit and refactor plans remain.

The repo's dormant tooling remains deliberately inconsistent with the active markdown-first model, but the user explicitly wants that scaffolding preserved for future code. The simplification therefore targets governance and process layers rather than the parked tooling files.

## Decision Log

Decision: keep `package.json`, `eslint.config.mjs`, `tsconfig.json`, `.prettierrc.json`, and `src/` even though the audit recommended deleting them.  
Rationale: the user explicitly overrode that recommendation and wants the dormant tooling preserved for future code.  
Timestamp/Author: 2026-03-04T16:46:24Z / Codex

Decision: delete `docs/standards/`, `skills/shared/`, `skills/deep-researcher/workflow/flow.yaml`, and `skills/deep-researcher/references/principle-effectiveness-review.md`.  
Rationale: these layers were dead, premature, or ornamental relative to the current repository scale.  
Timestamp/Author: 2026-03-04T16:50:00Z / Codex

Decision: rewrite `deep-researcher` so the main `SKILL.md` stays focused on flow and output contract while local references own detailed method and rubric material.  
Rationale: this keeps the skill modular without paying the coordination cost of a global shared-reference layer.  
Timestamp/Author: 2026-03-04T16:56:00Z / Codex

Decision: compress `tasks/todo.md` into a real high-level tracker and prune low-value micro-plans from `tasks/plans/`.  
Rationale: the previous tracker and archive carried too much same-day governance churn for a small repo.  
Timestamp/Author: 2026-03-04T17:04:00Z / Codex

## Outcomes & Retrospective

Completed. The repository now keeps the same top-level shape but with less dead governance inside it. Root docs are shorter and more honest about their roles, `deep-researcher` no longer depends on a shared-reference layer, the unused YAML and principle-review files are gone, the standards layer is gone, and low-value micro-plans were removed from the archive. Dormant Node/TypeScript tooling remains parked for future use as requested, but it is no longer presented as part of the active operating model.

## Context and Orientation

Files rewritten in this task:

- `AGENTS.md`
- `README.md`
- `PLANS.md`
- `skills/REFERENCE-GUIDE.md`
- `skills/deep-researcher/SKILL.md`
- `skills/deep-researcher/references/doubt-resolution.md`
- `skills/deep-researcher/references/evidence-quality-rubric.md`
- `skills/deep-researcher/references/research-method.md`
- `tasks/plans/_template.md`
- `tasks/todo.md`

Files deleted in this task:

- `docs/standards/jsdoc-api-contracts.md`
- `skills/shared/references/*`
- `skills/deep-researcher/references/principle-effectiveness-review.md`
- `skills/deep-researcher/workflow/flow.yaml`
- low-value micro-plans from `tasks/plans/`

## Terminology and Decomposition

N/A - this is a repository cleanup and refactor task, not a research campaign.

## Plan of Work

First, remove the dead or premature layers identified by the audit while leaving the dormant tooling untouched. Next, rewrite the root governance docs and plan template so they match a lighter operating model. Then collapse the `deep-researcher` shared-reference dependencies into local references and simplify its main skill contract. Finally, compress the tracker and keep only the historical plans that still carry real value.

## Concrete Steps

From repo root `c:\Users\igork\Desktop\agent`:

1. Delete the dead standards file, the shared-reference files, the unused workflow YAML, the principle-effectiveness review, and the low-value micro-plans.
2. Rewrite `AGENTS.md`, `README.md`, `PLANS.md`, and `tasks/plans/_template.md` to the lighter model.
3. Rewrite `skills/REFERENCE-GUIDE.md` and the `deep-researcher` files so the skill owns its method locally.
4. Compress `tasks/todo.md` and remove broken or low-value history references.
5. Validate that no active files still point at the removed layers.

## Validation and Acceptance

Acceptance is satisfied when:

1. active docs no longer reference `docs/standards/`, `skills/shared/`, `principle-effectiveness-review.md`, or `workflow/flow.yaml`,
2. the retained tracker plan links all point at files that still exist,
3. `deep-researcher` no longer imports a shared-reference layer,
4. dormant tooling files still exist unchanged in purpose,
5. `tasks/todo.md` reads as a high-level tracker instead of a narrative archive.

## Idempotence and Recovery

This refactor is safe to repeat because it is mostly documentation and archive cleanup. If a deleted governance file turns out to be needed later, restore only the minimal content that has a real new consumer instead of recreating the old layer. If future code work makes the dormant tooling live again, add runtime-facing rules back only when that code actually exists.

## Artifacts and Notes

Key retained archive records after cleanup:

- `2026-03-03T18-00-00Z-simplify-repository-by-removing-heavy-runtime-layers.md`
- `2026-03-03T20-11-43Z-assess-markdown-first-repo-organization.md`
- `2026-03-03T20-22-24Z-refactor-repo-governance-to-lean-target-model.md`
- `2026-03-03T20-43-09Z-test-clean-context-child-codex-exec.md`
- `2026-03-03T21-05-00Z-audit-agent-repo-architecture.md`

## Interfaces and Dependencies

N/A - this task changes repository guidance and archive shape, not runtime interfaces.

Change note: 2026-03-04T16:46:24Z - Created the plan for the post-audit simplification task.
Change note: 2026-03-04T17:14:00Z - Recorded completed cleanup, retained tooling override, and final validation targets.
