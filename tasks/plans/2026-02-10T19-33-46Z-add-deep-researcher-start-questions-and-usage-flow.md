# Add starter questions and invocation flow to deep-researcher

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

Add a deterministic kickoff interaction to `skills/deep-researcher` so that invoking `$deep-researcher` first yields a compact set of starter questions, then runs research, then resolves doubts. The user-visible outcome is a clearer, repeatable usage flow that avoids premature recommendations when the initial prompt is underspecified.

## Progress

- [x] (2026-02-10T19:33:46Z) Initial task entry.
- [x] (2026-02-10T19:34:00Z) Reviewed policy files, current skills content, and active deep-researcher structure.
- [x] (2026-02-10T19:34:48Z) Edited deep-researcher docs to add starter-question contract and explicit invocation flow.
- [x] (2026-02-10T19:35:03Z) Validated updated skill structure and verified new flow strings with grep.
- [x] (2026-02-10T19:35:25Z) Finalized plan outcomes and moved task record to history.

## Surprises & Discoveries

System skill listing in `AGENTS.md` points to `C:/Users/igork/.codex/skills/.system/skill-creator` where only `references/openai_yaml.md` exists; repository-local `skills/skill-creator/references/*` contains additional custom guidance. For this task, custom repo guidance is still applicable because the target file is local `skills/deep-researcher/*`.

## Decision Log

Decision: Keep changes surgical and limited to `skills/deep-researcher/SKILL.md` and `skills/deep-researcher/agents/openai.yaml`.  
Rationale: User asked specifically for starter questions and usage flow for `$deep-researcher`; no evidence suggests broader reference-file redesign is required.  
Timestamp/Author: 2026-02-10T19:33:46Z / codex

Decision: Use official OpenAI docs as primary external justification sources, plus existing local deep-research references.  
Rationale: This task concerns skill behavior and research workflow; official docs are authoritative for invocation behavior, clarification, and stepwise research process.  
Timestamp/Author: 2026-02-10T19:33:46Z / codex

Decision: Introduce a required kickoff step before research, with a conditional skip when input already contains all required context fields.  
Rationale: Satisfies user requirement ("$deep-researcher" returns starter questions) while preserving efficiency and avoiding redundant questioning.  
Timestamp/Author: 2026-02-10T19:33:46Z / codex

Decision: Use a fixed 7-question starter pack mapped to existing research framing fields (question, scope, owner/deadline, constraints, options, output format, doubts).  
Rationale: Keeps intake deterministic and auditable while remaining compact enough for first-turn interaction.  
Timestamp/Author: 2026-02-10T19:34:48Z / codex

## Outcomes & Retrospective

Completed. `deep-researcher` now specifies an invocation-first intake flow where `$deep-researcher` triggers starter questions before deep research, then performs doubt-resolution after phase 1. UI metadata was aligned via `agents/openai.yaml`.

Remaining gap: no automated behavioral eval exists yet for runtime conversation sequence; structure validation passed.

## Context and Orientation

The relevant skill is under `skills/deep-researcher/`. `SKILL.md` defines runtime behavior and workflow; `agents/openai.yaml` defines UI-facing `default_prompt` and short metadata. The repository uses `tasks/todo.md` as high-level status and `tasks/plans/*.md` for execution details/evidence.

## Plan of Work

Update `skills/deep-researcher/SKILL.md` to add:

1. a startup interaction contract that asks a fixed set of starter questions right after invocation;
2. a clear usage flow showing command trigger and transition between intake, research, and doubt-resolution;
3. a concise starter-question template aligned with existing criteria in the skill.

Then adjust `skills/deep-researcher/agents/openai.yaml` so the default prompt reflects this behavior. Finally validate with the existing quick validator and targeted grep checks.

## Concrete Steps

1. Edit `skills/deep-researcher/SKILL.md`:
   - add section for invocation flow (`$deep-researcher` -> starter questions -> research -> doubts -> recommendation),
   - add starter-question checklist and conditional skip rule.
2. Edit `skills/deep-researcher/agents/openai.yaml`:
   - update `default_prompt` to mention starter questions before deep research.
3. Validate:
   - `python C:\Users\igork\.codex\skills\.system\skill-creator\scripts\quick_validate.py skills/deep-researcher`
   - `rg -n "starter|start|flow|\\$deep-researcher" skills/deep-researcher/SKILL.md skills/deep-researcher/agents/openai.yaml`
Expected result: validator returns success and grep confirms new flow language exists.

## Validation and Acceptance

Acceptance criteria:

1. `SKILL.md` explicitly states that invoking `$deep-researcher` starts with starter questions.
2. `SKILL.md` contains an explicit end-to-end flow from invocation through final output.
3. `agents/openai.yaml` default prompt mirrors the new flow.
4. Skill folder passes `quick_validate.py`.

## Idempotence and Recovery

Edits are docs-only and idempotent; rerunning the same updates should not change behavior after first application. If validation fails, revert only the last touched lines in `skills/deep-researcher/SKILL.md` or `skills/deep-researcher/agents/openai.yaml` and rerun validator. No generated artifacts are introduced.

## Artifacts and Notes

Validation artifacts:

- `python C:\Users\igork\.codex\skills\.system\skill-creator\scripts\quick_validate.py skills/deep-researcher` -> `Skill is valid!`
- `rg -n "starter|intake|flow|\$deep-researcher" skills/deep-researcher/SKILL.md skills/deep-researcher/agents/openai.yaml` -> confirmed new flow and starter-question sections.

Research sources captured for rationale:

- OpenAI Codex Skills docs: `https://developers.openai.com/codex/skills`
- OpenAI Deep research API guide: `https://platform.openai.com/docs/guides/deep-research`

## Interfaces and Dependencies

N/A - This is a documentation/behavior-instruction update to an existing skill definition; no runtime interfaces or external package dependencies are added.

Change note: 2026-02-10T19:33:46Z - Initial plan created for adding starter questions and explicit invocation flow to deep-researcher.
Change note: 2026-02-10T19:35:03Z - Updated progress, decisions, outcomes, and validation artifacts after implementation.
