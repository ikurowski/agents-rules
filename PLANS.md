# PLANS.md - ExecPlan Standard

This repository uses execution plans ("ExecPlans") for non-trivial tasks. An ExecPlan must be self-contained: a new contributor should be able to complete the work with only the current working tree and that single plan file.

## Scope and Ownership

- Store plans in `tasks/plans/`.
- Use filename format `YYYY-MM-DDTHH-mm-ssZ-short-topic.md` (timestamp, UTC, Windows-safe separators).
- Keep `tasks/todo.md` as a high-level tracker only (status, goal, optional owner, plan link, short outcome).
- Keep all implementation detail in the ExecPlan file.

## Non-Negotiable Requirements

Every ExecPlan must:

1. Be a living document that is updated as work progresses.
2. Be self-contained and define non-obvious terms in plain language.
3. Describe user-visible purpose and observable outcomes.
4. Provide exact file paths, commands, and expected results.
5. Include validation steps that prove behavior, not only code edits.
6. Include idempotence/recovery notes for repeatability and safety.
7. Mark non-applicable sections explicitly as `N/A` with a one-sentence rationale.

## Required Sections

Each ExecPlan must include these sections:

1. `Purpose / Big Picture`
2. `Progress` (checkboxes with timestamps; mandatory checklist section)
3. `Surprises & Discoveries`
4. `Decision Log`
5. `Outcomes & Retrospective`
6. `Context and Orientation`
7. `Plan of Work`
8. `Concrete Steps`
9. `Validation and Acceptance`
10. `Idempotence and Recovery`
11. `Artifacts and Notes`
12. `Interfaces and Dependencies`

## Writing and Formatting Rules

- Write narrative, plain-language prose first.
- Use checklists only in `Progress`; other sections should be prose-first.
- If a required section is not applicable, keep the section and write `N/A` plus a short reason.
- If an ExecPlan is the only content of a Markdown file, do not wrap it in triple backticks.
- Keep command examples concise and include expected outputs when relevant.
- Resolve ambiguity in the plan itself and record the reasoning in `Decision Log`.
- When an interface example is needed, prefer TypeScript-style signatures unless repo context requires a different language.

## Milestones and Prototyping

- Milestones are optional but recommended for complex work.
- Each milestone must be independently verifiable and incrementally useful.
- Prototyping milestones are allowed when they de-risk implementation.
- If you change direction, document the change and rationale in `Decision Log` and reflect progress updates.

## Execution Discipline

- Continue to the next milestone autonomously unless blocked by missing information.
- Update `Progress` at every stop point, including partial completion notes.
- Capture important evidence snippets in `Artifacts and Notes`.
- On completion, add an `Outcomes & Retrospective` summary of results, gaps, and lessons.

## Template

Start from `tasks/plans/_template.md`.
