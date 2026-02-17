# Create Evaluation Workflow Skill

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

Add a reusable skill that standardizes how an agent evaluates repository workflow changes (discovery, scenario runs, validation checks, and ease scorecard output). After this change, a user can invoke a dedicated evaluation skill instead of rewriting instructions each time, and the expected artifact path/output format is explicit.

## Progress

- [x] (2026-02-13T01:03:51Z) Initial task entry and scope capture.
- [x] (2026-02-13T01:12:44Z) Ran repository-grounded research pass (deep-researcher style) before finalizing skill workflow sections.
- [x] (2026-02-13T01:12:44Z) Created skill files (`SKILL.md`, `agents/openai.yaml`, `references/*`) with deep-researcher-derived workflow adapted for evaluation.
- [x] (2026-02-13T01:13:10Z) Validated with `npm run lint` and `npm run test`; finalized tracker updates.

## Surprises & Discoveries

`AGENTS.md` requires `tasks/lessons.md` review at non-trivial task start; this was added to discovery even though the user list did not include it. Existing skill patterns use front matter + `Progressive Disclosure` and shared `Apply ... for:` imports, so the new skill should match that exact structure.

`skills/project-auditor-improver/references/validation-gates.md` is currently missing in the workspace state, so this task should not rely on that file as a template source. Research evidence for scenario/governance semantics was taken directly from `docs/architecture/agent-workflow.md`, `package.json`, and `src/agent-workflow/*`.

## Decision Log

Decision: Create a separate skill `skills/workflow-evaluator` instead of modifying `deep-researcher` directly.  
Rationale: User asked to "use `skills/deep-researcher/SKILL.md` to make a skill for evaluation"; this implies using it as baseline, not replacing its current research purpose.  
Timestamp/Author: 2026-02-13T01:03:51Z / agent

Decision: Keep implementation docs-only (skill assets) and avoid runtime/code changes.  
Rationale: User requested a skill artifact; `AGENTS.md` also emphasizes minimal, surgical scope.  
Timestamp/Author: 2026-02-13T01:03:51Z / agent

Decision: Enforce a "research pass before scoring output" rule inside the new skill workflow contract.  
Rationale: User correction required applying deep-researcher behavior first; this codifies that requirement into the skill itself.  
Timestamp/Author: 2026-02-13T01:12:44Z / agent

## Outcomes & Retrospective

Completed. The new `workflow-evaluator` skill now exists with an explicit research-first contract, deterministic scenario requirements, and report acceptance gates. The earlier flow gap (designing before deep-researcher-style research) was corrected by inserting and documenting a repository-grounded research pass before finalizing skill content.

## Context and Orientation

Relevant paths:

- `skills/deep-researcher/SKILL.md`: baseline structure and campaign/research sequencing pattern.
- `skills/project-auditor-improver/*`: closest operational pattern for repository assessment tasks.
- `skills/REFERENCE-STANDARD.md`: required shared reference consumption style (`Apply <path> for:`).
- `tasks/todo.md`: high-level status tracker for active task metadata.

The new skill will live in `skills/workflow-evaluator/` and include:

- `SKILL.md` (invocation contract + workflow),
- `agents/openai.yaml` (display metadata/default prompt),
- `references/eval-method.md` and `references/validation-gates.md` (skill-local procedures).

## Terminology and Decomposition

Primary Question: How should a reusable skill run and report deterministic workflow-ease evaluations in this repository?

Sub-question Register:

| Sub-question ID | Question | Status |
| --- | --- | --- |
| Sub-question-1 | Which workflow steps and deliverables must the new skill enforce? | completed |
| Sub-question-2 | Which shared references can be reused without duplicating policy text? | completed |
| Sub-question-3 | What minimal file set is required for compatibility with existing skills? | completed |

Question-to-Evidence Matrix:

| Sub-question ID | Evidence | Decision |
| --- | --- | --- |
| Sub-question-1 | `skills/deep-researcher/SKILL.md`, `skills/project-auditor-improver/SKILL.md` | Reuse multi-step workflow contract and enforce scorecard artifact output. |
| Sub-question-2 | `skills/REFERENCE-STANDARD.md`, `skills/shared/references/*` | Import shared scoring/campaign/evidence/governance modules via `Apply ... for:`; add only evaluation-specific local deltas. |
| Sub-question-3 | Existing skill directories include `SKILL.md`, `agents/openai.yaml`, and `references/*` | Create the same minimal directory shape for consistency and discoverability. |

## Plan of Work

Create a new folder `skills/workflow-evaluator` with four files:

1. `SKILL.md`: evaluation-oriented workflow modeled on deep-researcher structure, but focused on discovery -> scenario runs -> validate -> scorecard/report.
2. `agents/openai.yaml`: metadata and default invocation prompt.
3. `references/eval-method.md`: evaluation scenario design and per-scenario record template.
4. `references/validation-gates.md`: required acceptance checks and fail/escalation handling.

Then run lightweight repository validation (`npm run lint`, `npm run test`) to ensure documentation changes do not break checks, and update `tasks/todo.md` and this plan with completion evidence.

## Concrete Steps

1. In `c:\Users\igork\Desktop\agent`, create new skill files under `skills/workflow-evaluator/`.
Expected: files exist and follow repository skill formatting.
2. Populate `SKILL.md` using deep-researcher section style and shared references with exact `Apply ... for:` syntax.
Expected: no duplicated shared thresholds/procedures.
3. Run `npm run lint` and `npm run test`.
Expected: both commands exit with code `0`.
4. Update `tasks/todo.md` to move active entry into history with short outcome.
Expected: no `Active Task` section remains unless another task is in progress.

## Validation and Acceptance

Acceptance checks:

1. New skill exists at `skills/workflow-evaluator/SKILL.md` with clear invocation workflow and evaluation output contract.
2. Skill includes agent metadata file `skills/workflow-evaluator/agents/openai.yaml`.
3. Skill has local references for evaluation method and validation gates.
4. `npm run lint` passes.
5. `npm run test` passes.
6. `tasks/todo.md` records completed outcome and links this plan.

## Idempotence and Recovery

Re-running file creation should overwrite docs deterministically. If a section conflicts with existing standards, revert only the affected skill-local file and regenerate content using `skills/REFERENCE-STANDARD.md` as the syntax source of truth. If validation fails, inspect command output, fix only relevant markdown/yaml issues, and rerun failed checks.

## Artifacts and Notes

Research evidence snippets:

- `docs/architecture/agent-workflow.md`: stage model `intake -> plan -> execute -> verify -> report`, retry for `execute/verify`, governance threshold `3.8`.
- `package.json`: canonical commands `agent:workflow:run`, `typecheck`, `lint`, `test`.
- `src/agent-workflow/run-agent-workflow-stages.ts`: simulation tokens include `[simulate-execute-transient-failure]`, `[simulate-verify-transient-failure]`, hard-failure tokens.
- `src/agent-workflow/run-agent-workflow.ts`: governance low trigger `[simulate-governance-threshold-low]`, escalation when overall score `< 3.8`.

Created files:

- `skills/workflow-evaluator/SKILL.md`
- `skills/workflow-evaluator/agents/openai.yaml`
- `skills/workflow-evaluator/references/eval-method.md`
- `skills/workflow-evaluator/references/validation-gates.md`

## Interfaces and Dependencies

N/A - docs-only addition of a skill specification and reference files; no runtime interface or dependency changes.

Change note: 2026-02-13T01:03:51Z - Initialized plan for creating a new evaluation skill using deep-researcher structure as baseline.
Change note: 2026-02-13T01:12:44Z - Added deep-researcher-style research evidence and completed core skill file set including validation-gates reference.
Change note: 2026-02-13T01:13:10Z - Added validation evidence (`lint`, `test`) and marked task completion.
