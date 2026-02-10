# Define intake scope and question loop for deep-researcher

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

Refine `deep-researcher` so starter questions are not only listed, but governed by a repeatable loop with explicit stop criteria. The user-visible outcome is predictable intake behavior: ask only missing high-impact fields, iterate in short rounds, and begin research exactly when readiness conditions are met.

## Progress

- [x] (2026-02-10T19:41:18Z) Initial task entry and context review.
- [x] (2026-02-10T19:43:40Z) Gathered latest source evidence for clarification-first deep-research flow.
- [x] (2026-02-10T19:46:21Z) Updated skill instructions with intake scope and readiness loop.
- [x] (2026-02-10T19:46:53Z) Validated structure and string-level checks.
- [x] (2026-02-10T19:47:40Z) Closed plan and synced `tasks/todo.md`.

## Surprises & Discoveries

No blockers. Current `SKILL.md` already has a starter-question pack, so this task should remain surgical by adding loop mechanics and completion criteria rather than replacing the existing structure.

## Decision Log

Decision: Use OpenAI primary documentation as the basis for loop design and stopping criteria.  
Rationale: This skill targets deep research behavior in Codex/OpenAI context; official docs are highest-authority for clarification and prompt readiness requirements.  
Timestamp/Author: 2026-02-10T19:41:18Z / codex

Decision: Implement a bounded loop (short rounds, max round cap, readiness gate) rather than unlimited questioning.  
Rationale: Sources recommend concise clarification and avoiding unnecessary questions; bounded loops enforce that operationally.  
Timestamp/Author: 2026-02-10T19:41:18Z / codex

Decision: Add intake scope/readiness details in both `SKILL.md` and `references/research-method.md`.  
Rationale: Keep runtime behavior visible in core skill while preserving checklist detail in reference material.  
Timestamp/Author: 2026-02-10T19:41:18Z / codex

## Outcomes & Retrospective

Completed implementation for scope and loop definition. `deep-researcher` now has explicit intake scope groups, a bounded clarification loop with per-round question cap, and a readiness gate that controls when phase-1 research starts.

Remaining gap: behavioral eval scenarios are still manual (documented rules exist; no automated conversation test harness yet).

## Context and Orientation

`skills/deep-researcher/SKILL.md` defines behavior and sequence for skill execution. `skills/deep-researcher/references/research-method.md` contains reusable protocol/checklist details used during execution. `tasks/todo.md` must track a single active task entry while work is in progress.

## Plan of Work

Add an explicit intake scope model and loop semantics:

1. Define mandatory information groups required for research readiness.
2. Add an iterative clarification loop with:
   - per-round question cap,
   - readiness check after each round,
   - max-round fallback with explicit assumptions.
3. Extend `research-method.md` with a readiness checklist and loop exit rules.
4. Validate skill structure and confirm new keywords/sections are present.

## Concrete Steps

1. Edit `skills/deep-researcher/SKILL.md`:
   - add `Intake Scope` section,
   - add `Clarification Loop Until Research-Ready` section,
   - add `Research Readiness Gate`.
2. Edit `skills/deep-researcher/references/research-method.md`:
   - add checklist for readiness fields and loop stop criteria.
3. Validate:
   - `python C:\Users\igork\.codex\skills\.system\skill-creator\scripts\quick_validate.py skills/deep-researcher`
   - `rg -n "Intake Scope|Clarification Loop|Readiness|round|missing" skills/deep-researcher/SKILL.md skills/deep-researcher/references/research-method.md`

## Validation and Acceptance

Acceptance criteria:

1. `SKILL.md` includes explicit intake scope fields beyond the previous generic starter list.
2. `SKILL.md` defines a loop with clear iteration and stop conditions.
3. `SKILL.md` defines fallback behavior when uncertainty remains after loop cap.
4. `research-method.md` contains a corresponding readiness checklist.
5. `quick_validate.py` reports success.

## Idempotence and Recovery

Docs-only edits are idempotent. If wording needs rollback, revert only the newly added sections and re-run validator. No generated code or external state changes are involved.

## Artifacts and Notes

Source evidence captured:

- Codex skills invocation behavior: `https://developers.openai.com/codex/skills`
- Deep research clarification guidance: `https://developers.openai.com/api/docs/guides/deep-research`
- Clarification for ambiguous tasks: `https://developers.openai.com/api/docs/guides/reasoning-best-practices`
- Clarify when necessary (interactive): `https://openai.com/index/introducing-the-model-spec/`

Implementation evidence:

- `python C:\Users\igork\.codex\skills\.system\skill-creator\scripts\quick_validate.py skills/deep-researcher` -> `Skill is valid!`
- `rg -n "Intake Scope|Clarification Loop|Readiness Gate|max 3|missing|required fields|iterative" skills/deep-researcher/SKILL.md skills/deep-researcher/references/research-method.md skills/deep-researcher/agents/openai.yaml` -> confirmed loop/readiness sections and prompt alignment.

## Interfaces and Dependencies

N/A - Instructional documentation update only; no code interfaces or external dependencies changed.

Change note: 2026-02-10T19:41:18Z - Initial plan for intake scope and question-loop refinement.
Change note: 2026-02-10T19:46:53Z - Updated progress, outcomes, and validation artifacts after implementation.
