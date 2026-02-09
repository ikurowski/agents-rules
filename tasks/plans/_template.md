# <Short, action-oriented description>

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

Explain what user-visible behavior will exist after this change, why it matters, and how someone can observe it working.

## Progress

- [ ] (YYYY-MM-DDTHH:MM:SSZ) Initial task entry.
- [ ] (YYYY-MM-DDTHH:MM:SSZ) Incomplete step.
- [ ] (YYYY-MM-DDTHH:MM:SSZ) Partial step (completed: X; remaining: Y).

## Surprises & Discoveries

Document unexpected behaviors, bugs, constraints, or tradeoffs discovered during implementation. Include short evidence snippets in plain text.

## Decision Log

Record each implementation decision with rationale and timestamp.

Decision: <what was decided>  
Rationale: <why this path was chosen>  
Timestamp/Author: YYYY-MM-DDTHH:MM:SSZ / <name>

## Outcomes & Retrospective

Summarize what was achieved, what remains, and what should be done differently next time.

## Context and Orientation

Describe repository context for a novice reader. Name exact repo-relative paths and explain how the touched files/modules fit together.

## Plan of Work

Describe, in prose, the sequence of edits and additions. Name exact files and locations (function/module/section) and what will change.

## Concrete Steps

List exact commands with working directory and expected outputs in short prose. Keep examples concise and directly verifiable.

## Validation and Acceptance

Describe the acceptance checks as observable behavior. Include exact test/run commands and what success or failure looks like.

## Idempotence and Recovery

Explain how to safely re-run steps and how to recover from partial failure or mistaken edits.

## Artifacts and Notes

Include concise transcripts, logs, or diff excerpts that prove the change works.

## Interfaces and Dependencies

List required interfaces, modules, libraries, and integration points that must exist after implementation.

Example TypeScript interface:

    export interface ExampleService {
      run(input: string): Promise<{ ok: boolean; message: string }>;
    }

Change note: <YYYY-MM-DDTHH:MM:SSZ> - <what changed in this plan and why>.
