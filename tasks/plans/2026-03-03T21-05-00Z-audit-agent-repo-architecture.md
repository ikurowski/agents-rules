# Audit agent-repo architecture and markdown-first governance

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

Produce a full, critical audit of this repository as an agent-oriented, markdown-first workspace. The goal is to decide whether the current layering, file inventory, and governance density are justified for the actual repository scale, and to identify what clearly earns its place versus what is dead, duplicated, pseudo-canonical, over-formalized, misplaced, or ready for deletion. Observable outcome: a decision-ready audit that covers the whole tracked repository, gives file-by-file judgments, and proposes a leaner target operating model without adding more process for its own sake.

## Progress

- [x] (2026-03-03T21:05:00Z) Initial task entry.
- [x] (2026-03-03T21:12:00Z) Reviewed repo-wide instructions, `deep-researcher` workflow, and all priority governance/reference files.
- [x] (2026-03-03T21:20:00Z) Scanned all tracked files and historical plan records; noted current dirty-worktree signals that affect the audit.
- [x] (2026-03-03T21:32:00Z) Synthesized repo findings, external benchmarks, and final cleanup recommendations into the final audit.

## Surprises & Discoveries

The repository is small in tracked scope but dense in self-governance. Current tracked content is only 31 tracked files, one active skill, three shared reference modules, one standards document, one placeholder TypeScript source file, one tracker, and a cluster of recent ExecPlans. Despite that size, the repo already carries multiple policy/meta layers that evaluate and reshape each other.

The working tree is not clean at audit start. `tasks/todo.md`, `tasks/lessons.md`, and `skills/deep-researcher/SKILL.md` already contain local edits, and `tasks/plans/2026-03-03T20-54-16Z-revert-audit-loops-and-prepare-clean-session-prompt.md` exists as an untracked plan file while `tasks/todo.md` references it as if it were already part of settled history. That mismatch is itself evidence about tracker realism and governance drift.

Recent plan history shows rapid swings in repository posture on the same day: strict markdown-only cleanup, partial rollback toward dormant tooling, restoration of `tsconfig`, research on whether the repo is too heavy, a refactor toward a leaner model, then a correction that reverted an overfit workflow change. This makes the archive useful as evidence, but it also shows the repo is spending a high fraction of its total mass governing itself.

## Decision Log

Decision: treat this as a non-trivial research task that requires a new ExecPlan and tracker entry.  
Rationale: the user requested a full-repo, evidence-backed audit with structural judgments, file-by-file analysis, and self-validation. `PLANS.md` explicitly requires ExecPlans for this class of work.  
Timestamp/Author: 2026-03-03T21:05:00Z / Codex

Decision: apply the `skills/deep-researcher/SKILL.md` workflow, but use explicit assumptions instead of additional intake questions.  
Rationale: the user already provided the primary question, required scope, constraints, preferred output structure, and the explicit doubts to resolve.  
Timestamp/Author: 2026-03-03T21:05:00Z / Codex

Decision: scan the full tracked repository and use line-by-line review for priority control files plus section-level review for the rest when that yields better signal-to-noise.  
Rationale: the user asked for whole-repo coverage but also prioritized a subset for deep audit. This mixed approach preserves completeness without pretending every archival plan deserves equal scrutiny.  
Timestamp/Author: 2026-03-03T21:12:00Z / Codex

Decision: include the dirty working-tree state and untracked plan mismatch in the audit itself rather than treating them as noise.  
Rationale: for an agent-governance repository, broken or half-landed bookkeeping is first-order evidence about whether the governance model is realistic in practice.  
Timestamp/Author: 2026-03-03T21:20:00Z / Codex

## Outcomes & Retrospective

Completed. The audit found that the repository's top-level model is directionally good, but the current implementation is too heavy for its real scale. The cleanest keep set is the root map/contract split (`README.md`, `AGENTS.md`, a lighter `PLANS.md`), the active research skill, and the reusable evidence/campaign/scoring rules that are actually consumed. The main excess weight comes from three places: dormant tooling with no live runtime, duplicated detail inside the deep-researcher stack, and an archive/process model that preserves too many small tasks as full ExecPlans. The final recommendation is simplification, not expansion: remove the dormant runtime loop unless code is imminent, delete pseudo-source-of-truth files such as the unused workflow YAML, reduce the planning burden, and tighten tracker realism so it distinguishes stable repo state from merely local files.

## Context and Orientation

Current top-level tracked shape:

- root policy/docs: `AGENTS.md`, `PLANS.md`, `README.md`
- root tooling/scaffold: `.gitignore`, `.prettierrc.json`, `package.json`, `eslint.config.mjs`, `tsconfig.json`
- standards: `docs/standards/jsdoc-api-contracts.md`
- skills: `skills/REFERENCE-GUIDE.md`, `skills/shared/references/*`, `skills/deep-researcher/*`
- tasks/history: `tasks/todo.md`, `tasks/lessons.md`, `tasks/plans/*`
- code placeholder: `src/tsconfig-placeholder.ts`

The user requested special scrutiny for:

- `AGENTS.md`
- `PLANS.md`
- `README.md`
- `tasks/todo.md`
- `tasks/lessons.md`
- `skills/REFERENCE-GUIDE.md`
- `skills/deep-researcher/SKILL.md`
- all files in `skills/deep-researcher/references/`
- all files in `skills/shared/references/`
- `docs/standards/jsdoc-api-contracts.md`

Historical context that matters to the audit:

- most tracked plan files were created on 2026-03-03,
- several plans explicitly reverse or soften the previous plan's direction,
- the repo recently oscillated between strict markdown-only and dormant-tooling-enabled postures,
- one recent correction reverted an overfit skill change related to audit loops.

## Terminology and Decomposition

Primary Question: Is this repository currently well-organized as a small agent-oriented, markdown-first workspace, or is its governance/documentation structure heavier, noisier, and less realistic than its present scale justifies?

Sub-question Register

| ID | Type | Parent | Status | Priority (five-point score) | Blocking | Decision |
|---|---|---|---|---|---|---|
| Sub-question-1 | initial | Primary Question | resolved | 5.0 | yes | answered |
| Sub-question-2 | initial | Primary Question | resolved | 4.9 | yes | answered |
| Sub-question-3 | initial | Primary Question | resolved | 4.8 | yes | answered |
| Sub-question-4 | initial | Primary Question | resolved | 4.6 | yes | answered |
| Sub-question-5 | initial | Primary Question | resolved | 4.5 | yes | answered |
| Sub-question-6 | emergent | Primary Question | resolved | 4.2 | yes | answered |

Sub-question definitions:

- `Sub-question-1`: Do the current top-level layers (`AGENTS.md`, `PLANS.md`, `README.md`, `skills/`, `tasks/`, `docs/standards/`) have clear real-world boundaries?
- `Sub-question-2`: Is the repository's governance/process weight proportional to the current repository scale?
- `Sub-question-3`: Which files and sections genuinely earn their place versus acting as duplication, pseudo-source-of-truth, or future-theater?
- `Sub-question-4`: Is the shared-vs-local skill reference split justified by actual reuse?
- `Sub-question-5`: Is the repo's validation/checking model realistic and durable or mostly performative?
- `Sub-question-6`: Does recent task/plan history show a stable operating model or governance churn that should influence current recommendations?

Question-to-Evidence Matrix

| Sub-question ID | Covered by | Outcome | Evidence/Note |
|---|---|---|---|
| Sub-question-1 | local file audit + external guidance | answered | Boundaries are directionally sensible at the top level but blurred by process leakage and tracker/history behavior. |
| Sub-question-2 | local file audit + plan history + external guidance | answered | Governance density is high relative to one real skill and near-zero runtime surface. |
| Sub-question-3 | file-by-file review | answered | Several files earn their place narrowly; several others are mostly archival or speculative scaffolding. |
| Sub-question-4 | shared-reference consumer audit | answered | Shared references mostly pass now, but the reference-layer shape remains one step more modular than present scale strictly needs. |
| Sub-question-5 | README/task/plan review + external guidance | answered | Some validation is sensible, but tracker correctness and historical mismatches show the current self-governance loop is not fully robust. |
| Sub-question-6 | task-plan sequence review | answered | Same-day posture reversals and corrective plans show the repo governs itself heavily and sometimes reactively. |

Entry Criteria: admit an emergent `Sub-question-*` only if it materially changes the recommendation and is blocking or scores at least 3.8/5 priority.

Impediment: none. All tracked files were readable and external benchmark sources were accessible.

## Plan of Work

First, inspect the repo's own operating rules and the `deep-researcher` workflow so the audit follows local process. Next, inventory every tracked file and read the priority control/reference files in detail. Then read the remaining tracked files, especially `tasks/plans/*`, to understand not only current structure but how the repo actually governs itself over time. After that, compare the local picture against current primary-source guidance on concise root instructions, scoped memory/rules, modular skills, and evidence-driven validation. Finally, synthesize the requested audit sections with explicit keep/simplify/move/delete judgments.

## Concrete Steps

From repo root `c:\Users\igork\Desktop\agent`:

1. Read `AGENTS.md`, `PLANS.md`, `README.md`, `tasks/todo.md`, `tasks/lessons.md`, `tasks/plans/_template.md`, `skills/REFERENCE-GUIDE.md`, `skills/deep-researcher/SKILL.md`, the deep-researcher reference stack, the shared references, and `docs/standards/jsdoc-api-contracts.md`.
   Expected result: clear local operating boundaries and skill workflow requirements.
2. Run `git ls-files`, line counts, and targeted reads of non-priority files (`package.json`, tooling configs, `src/tsconfig-placeholder.ts`, historical plans).
   Expected result: full tracked-file inventory and a sense of proportionality.
3. Review current official guidance on agent instructions, modular skills, scoped memory, and evaluation/verification.
   Expected result: current external baselines that can anchor the audit.
4. Synthesize findings into the required report structure and update this plan plus `tasks/todo.md`.
   Expected result: final audit with explicit confidence and self-validation notes.

## Validation and Acceptance

This task is accepted when:

1. the final answer follows the exact section structure requested by the user,
2. the audit covers the whole tracked repository,
3. priority files receive line-level or section-level usefulness analysis,
4. every major directory and the requested reference files pass through a justify-existence test,
5. external claims are backed by current primary sources with links,
6. the final output clearly separates strong local evidence from inference,
7. `tasks/todo.md` and this plan reflect the task accurately.

## Idempotence and Recovery

The research itself is repeatable. If additional file changes occur while the audit is in progress, re-read only the affected files and update findings rather than restarting the whole campaign. If tracker edits drift, repair `tasks/todo.md` so it again matches the plan state. If new external sources materially contradict the current benchmark picture, add them to the evidence basis and lower confidence where appropriate.

## Artifacts and Notes

Local evidence already gathered:

- full tracked-file list from `git ls-files`
- line counts for every tracked file
- line-numbered reads for the priority governance/reference files
- raw reads of all tracked plan files and root tooling files
- `git status --short` showing a dirty worktree and an untracked plan file referenced from `tasks/todo.md`

External benchmark areas selected:

- OpenAI guidance on `AGENTS.md`, skills, harness engineering, and evaluation
- Anthropic guidance on concise memory plus scoped imports and skills/resources
- GitHub guidance on repo-wide versus path-specific custom instructions and `AGENTS.md`

Key quantitative signals captured during the audit:

- tracked repository line distribution: `tasks/plans/*` = 780 / 1820 lines (`42.9%`), `skills/*` = 612 / 1820 (`33.6%`), root files = 285 / 1820 (`15.7%`)
- tracked file counts: total tracked files = 31 before this audit record; tracked plan files = 9; tracked skill files = 10
- shared-reference reuse counts: `five-point-scoring-bands.md` = 5 consumers, `research-campaign-model.md` = 2 consumers, `source-evidence-policy.md` = 2 consumers
- tracker realism check: `tasks/todo.md` currently references two local plan files that are not yet tracked in git (`2026-03-03T20-54-16Z` and this audit plan), which means existence checks alone are weaker than true archive validation

External sources verified on 2026-03-03:

- OpenAI `AGENTS.md`: `https://developers.openai.com/codex/agents-md`
- OpenAI Skills: `https://developers.openai.com/codex/skills`
- OpenAI Evaluation Best Practices: `https://platform.openai.com/docs/guides/evaluation-best-practices`
- Anthropic Claude Code Memory: `https://docs.anthropic.com/en/docs/claude-code/memory`
- Anthropic Claude Code Skills: `https://docs.anthropic.com/en/docs/claude-code/skills`
- GitHub repository custom instructions / `AGENTS.md`: `https://docs.github.com/en/copilot/how-tos/custom-instructions/adding-repository-custom-instructions-for-github-copilot`

## Interfaces and Dependencies

N/A - this is a repository research/audit task, not an interface or dependency change.

Change note: 2026-03-03T21:05:00Z - Created the ExecPlan for a full architecture and usefulness audit of the repository.
Change note: 2026-03-03T21:32:00Z - Recorded final findings, quantitative signals, external benchmarks, and the simplification-focused recommendation.
