# AGENTS.md - Automated Agent Guidelines

This document defines how autonomous agents should interact with this codebase. It complements the human-centric `README.md` by giving strict, unambiguous rules for planning, executing, and verifying changes. Agents should treat these rules as hard constraints, not suggestions. The goal is to maximise usefulness while minimising unintended side-effects.

## Fundamental Principles

These foundational rules govern how an AI agent should reason about tasks and write code. Follow them consistently, regardless of task size.

### Think Before Execution

Before writing any code, explicitly state your assumptions and surface ambiguities. When there are multiple possible interpretations, list them; do not silently choose one. Push back when a simpler approach exists. When you are uncertain, ask questions instead of guessing.

### Simplicity in Implementation

Implement the minimum code that solves the problem and nothing speculative. Do not add features beyond what was asked. Avoid abstractions for single-use code or configurability that was not requested. If you can solve a problem with fewer lines, rewrite it. Over-engineering is discouraged.

### Minimal & Surgical Changes

Touch only the code you must. When editing existing files, do not improve adjacent code, comments, or formatting unless explicitly asked. Match the existing style, even if you would do it differently. Remove only the imports or variables that your changes made unused; do not remove unrelated dead code.

### Goal-Driven Execution & Verification

Define explicit success criteria and transform imperative tasks into verifiable goals. For example, instead of "fix the bug," write a failing test that reproduces the bug and then make it pass. Outline multi-step tasks as a plan with checks after each step. Continue looping until each check is satisfied. Strong success criteria let the agent work independently; weak criteria require constant clarification.

### Investigate Root Causes

Do not apply temporary fixes. Always investigate and address the root cause of a bug or issue. Uphold senior-developer standards: if tests are failing or logs show errors, analyse and resolve them rather than masking the problem.

### Continuous Learning

After any correction from the user, record the mistake and its fix in `tasks/lessons.md`. Review these lessons at the beginning of each session to avoid repeating past errors. Iterate on these patterns until the mistake rate drops.

## Workflow Orchestration

### Plan Mode by Default

For any non-trivial task (three or more steps, or anything affecting architecture), start with a detailed plan. Outline assumptions, goals, and verification steps. Write this plan in plain text with checkable items and commit it to `tasks/todo.md`.

If a task goes sideways, stop immediately, revisit the requirements, and re-plan. Do not continue blindly.

Use plan mode not only for new features but also for verification: plan how to reproduce bugs and how to prove that fixes work.

### Subagent Strategy

Offload research, exploration, or parallel analysis to subagents. Keep the main agent's context focused on the core problem by spawning additional agents for heavy tasks.

For complex problems, allocate more compute by spawning multiple subagents, each with a single, well-defined task. Do not overload one subagent with unrelated objectives.

Gather results from subagents into the main plan before continuing.

### Demand Elegance

For non-trivial changes, pause and ask whether there is a more elegant solution. Challenge yourself to find a design that is simple and maintainable. If a fix feels hacky, refactor it into a cleaner solution.

Use judgment: trivial fixes may not require reconsideration, but larger changes should strive for elegance without over-engineering.

### Autonomous Bug Fixing

When given a bug report, just fix it. Use logs, error messages, and failing tests to diagnose the issue, then resolve it without extra hand-holding.

Do not require context switching from the user; your goal is to reduce their cognitive load. Fix failing CI tests or runtime errors without being told exactly how.

After fixing, demonstrate the solution with tests or other verification steps and document the cause and resolution in `tasks/todo.md`.

## Task Management & Continuous Improvement

- **Plan First**: Write a plan for the task in `tasks/todo.md` with checkable items and explicit success criteria.
- **Verify Plan**: Present the plan for review before starting implementation. Adjust if the user provides feedback.
- **Track Progress**: Mark items as complete in the to-do file as you go, keeping a clear log of what is done and what remains.
- **Explain Changes**: At each step, provide a high-level summary of what was modified and why.
- **Document Results**: After finishing, update `tasks/todo.md` with a review summarising outcomes, tests run, and remaining issues.
- **Capture Lessons**: Append patterns of mistakes and their corrections to `tasks/lessons.md` for future reference, and review them at the start of subsequent sessions.

## Disclaimer

This document is intended for automated agents and tools. Human developers may use it as a reference, but the authoritative human documentation remains in the project's `README.md`. Agents should treat these rules as non-negotiable unless the user provides explicit overrides.
