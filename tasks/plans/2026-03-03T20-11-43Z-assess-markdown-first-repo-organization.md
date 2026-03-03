# Assess markdown-first repo organization against current agent-repo practices

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

Produce a decision-ready assessment of whether this markdown-first agent rules repository is currently organized in a sensible way relative to current external practices. The user wants a critical comparison of the present structure against a lean target model, especially for `skills/`, `docs/standards/`, `tasks/`, `AGENTS.md`, `PLANS.md`, and the relationship between repo-wide policy and skill-specific guidance. Observable outcome: a source-backed brief that identifies what is strong, what is overbuilt, what should be simplified, and what target operating model best fits the repository after its recent cleanup.

## Progress

- [x] (2026-03-03T20:11:43Z) Initial task entry and local policy/context review completed.
- [x] (2026-03-03T20:16:47Z) External evidence collected from current official OpenAI, Anthropic, and GitHub sources and compared against the repository layout.
- [x] (2026-03-03T20:16:47Z) Final repo assessment completed, doubt resolution synthesized, and tracker closure prepared.

## Surprises & Discoveries

Initial local review showed a small repository with a relatively dense governance layer. That concern held up under comparison. Current active content includes only one executable skill (`skills/deep-researcher/`) and one standards document (`docs/standards/jsdoc-api-contracts.md`), but the repo already carries multiple meta-layers: `AGENTS.md` (151 lines), `PLANS.md` (73 lines), `skills/REFERENCE-GUIDE.md` (116 lines), `skills/deep-researcher/SKILL.md` (274 lines), several shared reference modules, task tracker/history, and an ExecPlan template.

One concrete dead-policy signal emerged: `skills/shared/references/confirm-required-gate.md` is listed in `skills/REFERENCE-GUIDE.md` but is not imported anywhere else in the repository. This is a clear example of modular governance growing ahead of live usage.

External sources converged on the same broad pattern: keep the root instruction file relatively short, use scoped instructions only where they reduce noise, make skills modular and loaded on demand, and validate mechanically with focused checks/evals rather than by expanding process ceremony.

## Decision Log

Decision: treat this as a non-trivial research task and create a new ExecPlan plus `tasks/todo.md` entry before external research.  
Rationale: `AGENTS.md` requires planning by default for non-trivial tasks, and the user asked for a multi-part assessment with self-validation.  
Timestamp/Author: 2026-03-03T20:11:43Z / Codex

Decision: use the `skills/deep-researcher/SKILL.md` workflow as the source-of-truth for campaign execution.  
Rationale: the user explicitly invoked `$deep-researcher`, and the skill requires campaign initialization, starter intake validation, research phase, and doubt-resolution before recommendations.  
Timestamp/Author: 2026-03-03T20:11:43Z / Codex

Decision: proceed without extra intake questions.  
Rationale: the user already provided the research question, in-scope files, constraints, target output structure, and the doubts to resolve. Optional fields such as decision owner and deadline are not needed to start, so assumptions can be made explicitly instead of pausing.  
Timestamp/Author: 2026-03-03T20:11:43Z / Codex

## Outcomes & Retrospective

Completed. The repository is directionally good after cleanup: it has a clearer source-of-truth model, sensible top-level separation, and a real skill modularity pattern. The main remaining problem is not chaos but over-formalization relative to the current repository size. The target state should keep the current top-level split while reducing meta-governance density: a shorter `AGENTS.md`, a narrower `PLANS.md` scope, fewer shared reference modules until more than one live skill needs them, and a small self-validation loop focused on broken links, duplication, unused shared modules, and periodic real-task review.

## Context and Orientation

This repository is a markdown-first workspace for agent operating rules, skills, and work history. The main policy files are `AGENTS.md` (operational behavior), `PLANS.md` (ExecPlan format/lifecycle), and `README.md` (human-facing summary). Skill conventions live under `skills/`, including `skills/REFERENCE-GUIDE.md`, shared reference modules under `skills/shared/references/`, and the executable research skill at `skills/deep-researcher/`. Task state is tracked at `tasks/todo.md`, with detailed execution records in `tasks/plans/`. A narrow standards area exists at `docs/standards/jsdoc-api-contracts.md`, currently positioned as a canonical policy document rather than a workflow file.

Files to assess directly:

- `AGENTS.md`
- `PLANS.md`
- `README.md`
- `skills/REFERENCE-GUIDE.md`
- `skills/deep-researcher/SKILL.md`
- `docs/standards/jsdoc-api-contracts.md`
- `tasks/todo.md`

External comparison will focus on current agent-repo, prompt-governance, and documentation-architecture practices that are directly relevant to markdown-first repositories rather than general software repos.

## Terminology and Decomposition

Primary Question: Is this repository's current markdown-first organization and governance model well-aligned with current practical patterns for agent-oriented repos, or is it still heavier and stranger than it needs to be?

Sub-question Register

| ID | Type | Parent | Status | Priority (five-point score) | Blocking | Decision |
|---|---|---|---|---|---|---|
| Sub-question-1 | initial | Primary Question | in_progress | 5.0 | yes | include-now |
| Sub-question-2 | initial | Primary Question | in_progress | 4.8 | yes | include-now |
| Sub-question-3 | initial | Primary Question | in_progress | 4.6 | yes | include-now |
| Sub-question-4 | initial | Primary Question | in_progress | 4.4 | yes | include-now |
| Sub-question-5 | initial | Primary Question | in_progress | 4.2 | yes | include-now |

Sub-question definitions:

- `Sub-question-1`: How are current agent-oriented markdown/prompt/skills repos typically organizing root instructions, reusable skills, and task/process memory?
- `Sub-question-2`: What belongs repo-wide versus skill-specific in a low-noise design?
- `Sub-question-3`: Does this repo's current split across `AGENTS.md`, `PLANS.md`, `README.md`, `skills/*`, `docs/standards/*`, and `tasks/*` match that practice or over-fragment it?
- `Sub-question-4`: Is `AGENTS.md` itself well-scoped and practical, or too dense and over-prescriptive for its job?
- `Sub-question-5`: What self-validation model is sensible after cleanup, without creating another heavy meta-layer?

Question-to-Evidence Matrix

| Sub-question ID | Covered by | Outcome | Evidence/Note |
|---|---|---|---|
| Sub-question-1 | external research + repo analysis | answered | OpenAI, Anthropic, and GitHub all support a short root instruction layer plus modular/scoped additions only where needed. |
| Sub-question-2 | external research + repo analysis | answered | Repo-wide policy should stay stable and cross-cutting; task/domain workflow belongs in skills or plans; current repo partly matches this but still leaks process detail into `AGENTS.md`. |
| Sub-question-3 | local file review + external research | answered | Current top-level split is mostly sensible, but `skills/shared/references/` is more abstract than the present repository scale requires. |
| Sub-question-4 | local file review + external research | answered | `AGENTS.md` is coherent but too dense for a root instruction file in a small repo; several sections could be shortened or delegated. |
| Sub-question-5 | external research + repo analysis | answered | A lean self-validation model should center on cross-link integrity, duplicate-rule detection, unused shared modules, and periodic task/eval review. |

Entry Criteria: admit emergent `Sub-question-*` only if it materially changes the recommendation and is blocking or scores at least 3.8/5 priority; otherwise defer it.

Impediment: none currently. The repository is readable and external research can proceed.

## Plan of Work

First, review the required local files and the `deep-researcher` reference stack to ensure the campaign uses the repo's own research method. Next, collect current primary sources on agent instructions, skills, memory, and evaluation practices, with emphasis on sources that directly bear on markdown-first organization and low-noise governance. Then compare those findings against the current repository layout and rules, focusing on whether each layer has a distinct reason to exist. Finally, produce a structured brief with direct judgments, a target model, explicit confidence, and self-validation notes.

## Concrete Steps

From `c:\Users\igork\Desktop\agent`:

1. Read `AGENTS.md`, `PLANS.md`, `tasks/todo.md`, `tasks/lessons.md`, and `skills/deep-researcher/SKILL.md`; expect clear local operating constraints and skill workflow requirements.
2. Read the user-specified assessment files plus shared and skill-local research references; expect enough context to initialize `Primary Question`, `Sub-question` register, and evidence criteria.
3. Create this plan file and add an `## Active Task` entry to `tasks/todo.md`; expect the tracker to show exactly one in-progress task.
4. Browse current primary sources on agent skills, instruction layering, memory/context files, and evaluation/verification practice; expect a set of source-backed claims with dates and applicability notes.
5. Synthesize external findings against current repo structure and write the final assessment.
6. Update this plan and `tasks/todo.md` with final outcomes and validation evidence.

## Validation and Acceptance

The task is accepted when:

1. the final brief follows the user-requested section structure,
2. claims about current practices are backed by current external sources with links and dates,
3. the assessment clearly compares present repository state versus a lean target model,
4. the final recommendation explicitly distinguishes what to keep from what to simplify,
5. uncertainty is called out where evidence is indirect or current practice is not strongly standardized,
6. `tasks/todo.md` and this ExecPlan record the work and completion state accurately.

## Idempotence and Recovery

Reading and external research are naturally repeatable. If additional sources change the picture, update the `Decision Log`, `Question-to-Evidence Matrix`, and final brief rather than opening a separate plan. If tracker edits become stale during the task, repair them in place so `tasks/todo.md` again shows at most one active task and the correct linked ExecPlan.

## Artifacts and Notes

Initial local files reviewed:

- `AGENTS.md`
- `PLANS.md`
- `README.md`
- `skills/REFERENCE-GUIDE.md`
- `skills/deep-researcher/SKILL.md`
- `docs/standards/jsdoc-api-contracts.md`
- `tasks/todo.md`
- `tasks/lessons.md`
- `tasks/plans/_template.md`

Initial repository shape observed:

- top-level directories: `docs/`, `skills/`, `src/`, `tasks/`
- `skills/` contains `deep-researcher`, `shared/references`, and `REFERENCE-GUIDE.md`
- `docs/standards/` currently contains only `jsdoc-api-contracts.md`

Current local density signals:

- key file line counts: `AGENTS.md` 151, `PLANS.md` 73, `README.md` 14, `skills/REFERENCE-GUIDE.md` 116, `skills/deep-researcher/SKILL.md` 274, `docs/standards/jsdoc-api-contracts.md` 75, `tasks/todo.md` 72
- total tracked Markdown files: 24
- skill files under `skills/`: 11
- plan files under `tasks/plans/`: 8
- unused shared module found by `rg -n "confirm-required-gate" -S .`: only `skills/REFERENCE-GUIDE.md` matched

External evidence gathered:

- OpenAI cookbook article `Harness engineering for agents` (2026-02-11): recommends a short `AGENTS.md`, living docs as system-of-record, first-class plans, and mechanical verification loops.
- OpenAI docs `Evaluation best practices` (date not published; verified 2026-03-03): recommends explicit criteria and continuous evaluation rather than vibe-based review.
- Anthropic docs `Manage Claude's memory` (date not published; verified 2026-03-03): recommends keeping root memory concise, importing additional files for larger contexts, and using project/path-scoped rules.
- Anthropic docs `Skills` (date not published; verified 2026-03-03): positions skills as modular, on-demand task packages with metadata always loaded and resources loaded as needed.
- GitHub Docs `Customize chat responses` and GitHub changelog for `AGENTS.md` (docs date not published; verified 2026-03-03; changelog 2025-08-26): supports repo-wide, path-specific, and nearest-scope instruction files while warning against conflicting instructions.

## Interfaces and Dependencies

N/A. This is a docs-and-research task; no runtime interfaces or code dependencies are being changed.

Change note: 2026-03-03T20:11:43Z - Created the ExecPlan for a deep research assessment of repository organization and governance.
