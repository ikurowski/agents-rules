# AGENTS.md - Automated Agent Guidelines

This document defines how autonomous agents should interact with this codebase. It complements the human-centric `README.md` by giving strict, unambiguous rules for planning, executing, and verifying changes. Agents should treat these rules as hard constraints, not suggestions. The goal is to maximise usefulness while minimising unintended side-effects.

## Fundamental Principles

These foundational rules govern how an AI agent should reason about tasks and write code. Follow them consistently, regardless of task size.

### Instruction Hierarchy

Resolve instruction conflicts in this order:

1. Direct user request in the current session.
2. Nested, task-local `AGENTS.md` (if present).
3. Repository root `AGENTS.md` (this file).
4. Supporting docs (`README.md`, `PLANS.md`, templates).

If instructions conflict, follow the higher-priority source and record the assumption and rationale in the active ExecPlan (`Decision Log`).

### Think Before Execution

Before writing any code, review the relevant files/logs first, then explicitly state your assumptions and surface ambiguities in the active ExecPlan. When there are multiple possible interpretations, list them; do not silently choose one. Push back when a simpler approach exists. When uncertain, resolve from repository context first; ask the user only when a decision materially changes behavior and cannot be inferred safely. For trivial tasks that do not require an ExecPlan, capture assumptions in the final response under `Assumptions`; do not add them to `tasks/todo.md`.

### Simplicity in Implementation

Implement the minimum code that solves the problem and nothing speculative. Do not add features beyond what was asked. Avoid abstractions for single-use code or configurability that was not requested. If you can solve a problem with fewer lines, rewrite it. Over-engineering is discouraged.

### Minimal & Surgical Changes

Touch only the code you must. When editing existing files, do not improve adjacent code, comments, or formatting unless explicitly asked. Match the existing style, even if you would do it differently. Remove only the imports or variables that your changes made unused; do not remove unrelated dead code.

### Goal-Driven Execution & Verification

Define explicit success criteria and transform imperative tasks into verifiable goals. For example, instead of "fix the bug," write a failing test that reproduces the bug and then make it pass. Outline multi-step tasks as a plan with checks after each step. Continue looping until each check is satisfied. Strong success criteria let the agent work independently; weak criteria require constant clarification.

### Investigate Root Causes

Do not apply temporary fixes. Always investigate and address the root cause of a bug or issue. Uphold senior-developer standards: if tests are failing or logs show errors, analyse and resolve them rather than masking the problem.

### Continuous Learning

After a significant correction from the user, record the mistake and its fix in `tasks/lessons.md`. A correction is significant when it adds or changes a reusable prevention rule that is likely to apply in future tasks (not a one-off wording preference). Review these lessons at the beginning of each session to avoid repeating past errors.

### Proactive Rule Suggestions

If the agent notices a recurring pattern where a new rule would likely improve clarity, reliability, or speed, it should proactively propose adding that rule. Treat "recurring pattern" as at least two occurrences within the last five completed tasks.

Each proposal must include:

1. Observation (what repeated issue/opportunity was seen).
2. Draft rule (one clear sentence).
3. Expected benefit.
4. Trade-off or risk.
5. Target location (`AGENTS.md`, `PLANS.md`, `README.md`, or `tasks/lessons.md`).

The agent should propose the rule, not enforce it, unless the user approves.

## Workflow Orchestration

### Planning by Default for Non-Trivial Work

For any non-trivial task (three or more steps, or anything affecting architecture), create and maintain a detailed ExecPlan in `tasks/plans/<YYYY-MM-DDTHH-mm-ssZ>-<slug>.md` using `PLANS.md` (assumptions, goals, and verification steps included).

Treat responsibilities separately: `tasks/todo.md` tracks high-level task metadata and status, while `tasks/plans/*` contains execution details, decisions, evidence, and validation steps.

If a task goes sideways, stop immediately, revisit the requirements, and re-plan. Do not continue blindly.

Use this planning workflow not only for new features but also for verification: plan how to reproduce bugs and how to prove that fixes work.

### Parallel Research Strategy

For complex tasks, parallelise independent exploration and verification work streams when possible, then merge results into one coherent plan before editing files.

### Demand Elegance

For non-trivial changes, pause and ask whether there is a more elegant solution. Challenge yourself to find a design that is simple and maintainable. If a fix feels hacky, refactor it into a cleaner solution.

Use judgment: trivial fixes may not require reconsideration, but larger changes should strive for elegance without over-engineering or widening scope beyond the request.

### Autonomous Bug Fixing

When given a bug report, just fix it. Use logs, error messages, and failing tests to diagnose the issue, then resolve it without extra hand-holding.

Do not require context switching from the user; your goal is to reduce their cognitive load. Fix failing CI tests or runtime errors without being told exactly how.

After fixing, demonstrate the solution with tests or other verification steps and document full cause/resolution details in the active ExecPlan, plus a short outcome line in `tasks/todo.md`.

## Commit Style

Use Conventional Commits and keep commits atomic.

- One concern per commit. Do not mix unrelated changes.
- Message format: `<type>(<optional-scope>): <imperative summary>`
- Preferred types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`.
- Body is optional but recommended for non-trivial changes:
  - Why the change was needed.
  - What was changed.
  - How it was verified.

Examples:

- `docs(agents): add reflective loop and commit style policy`
- `docs(plans): adopt strict self-contained exec plan template`
- `fix(ci): stabilize flaky integration test setup`

## Reflective Loop

Run this loop for non-trivial tasks:

1. Plan: define assumptions, scope, and verifiable success criteria.
2. Execute: apply minimal, surgical changes.
3. Verify: run checks/tests and inspect outputs.
4. Reflect: compare outcomes to success criteria and identify gaps.
5. Update docs: sync `tasks/todo.md`, `tasks/lessons.md` (when corrected), and relevant policy docs.
6. Iterate: re-plan only unresolved gaps and repeat.

Stop criteria:

- All success criteria are satisfied.
- Verification evidence is captured.
- No unresolved high-risk ambiguity remains.

## Task Management & Continuous Improvement

- **Single Source for Planning Rules**: Treat `Workflow Orchestration > Planning by Default for Non-Trivial Work` as the normative planning rule; avoid duplicating planning logic elsewhere.
- **Keep TODO High-Level**: In `tasks/todo.md`, track only status, goal, optional owner, ExecPlan link, and short outcome.
- **Active Task Semantics**: Keep `## Active Task` only when exactly one task is `in_progress`; move `completed` or `blocked` entries to `## Task History`.
- **Status Vocabulary**: Use only `in_progress`, `completed`, or `blocked` for `tasks/todo.md` status values.
- **Proceed Autonomously**: Publish the plan, then execute unless the user explicitly asks to pause for review.
- **Track Progress in ExecPlan**: Mark execution progress in the active plan and keep evidence there.
- **Explain Changes**: At each step, provide a high-level summary of what was modified and why.
- **Document Results**: After finishing, write a short outcome in `tasks/todo.md` and keep detailed validation evidence in the ExecPlan.
- **Capture Lessons**: Append lessons only for corrections that produce reusable prevention rules and review them at the start of subsequent sessions.

## Disclaimer

This document is intended for automated agents and tools. `AGENTS.md` and `PLANS.md` are the authoritative execution-policy sources; `README.md` is an onboarding summary for humans. Agents should treat these rules as non-negotiable unless the user provides explicit overrides.
