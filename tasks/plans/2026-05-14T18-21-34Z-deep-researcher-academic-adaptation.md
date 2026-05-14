# Assess academic research workflow patterns for deep-researcher

This ExecPlan is a living document. Keep it only as detailed as the task requires.

## Purpose

Identify the five highest value, lowest complexity workflow patterns from `Imbad0202/academic-research-skills` and its Codex adaptation, then compare them with the local `.agents/skills/deep-researcher` skill. The task is done when the answer separates source observations from adaptation ideas and gives implement / park / reject recommendations.

## Progress

- [x] (2026-05-14T18:21:34Z) Started.
- [x] (2026-05-14T18:42:00Z) Source review completed.
- [x] (2026-05-14T18:50:00Z) Recommendation and close-out completed.
- [x] (2026-05-14T19:10:00Z) Implemented lightweight pipeline and subagent-aware workflow rules in `deep-researcher`.
- [x] (2026-05-14T19:35:00Z) Ran three read-only subagent review passes and tightened source records, retry SSOT, reviewer gate, and subagent result contract.

## Decision Log

Decision: Treat the upstream repositories as workflow inspiration only, not implementation sources to copy.
Rationale: The user explicitly wants a lightweight single-skill adaptation and does not want a heavy academic writing suite, multi-agent framework, hooks, or permanent source catalog.
Timestamp/Author: 2026-05-14T18:21:34Z / Codex

Decision: Recommend lightweight gates/checklists over porting ARS workflows.
Rationale: The upstream Claude repo is a multi-skill suite with commands, hooks, agents, integrity gates, review/revision loops, dashboards, material passports, and optional cross-model behavior. The Codex adaptation already shows the right direction for Codex: one root skill, route by intent, load only the relevant workflow, and do not execute Claude hooks or spawn agents automatically.
Timestamp/Author: 2026-05-14T18:50:00Z / Codex

Decision: Top candidates are a compact stage pipeline, Socratic scoping override, integrity mini-gate, bounded reviewer/DA loop, and explicit handoff/finalization notes.
Rationale: These preserve the useful ARS flow while fitting the existing local `deep-researcher` structure: readiness gate, phase 1 research, phase 2 doubt resolution, evidence rubric, and output contract.
Timestamp/Author: 2026-05-14T18:50:00Z / Codex

Decision: Add subagent-aware instructions but do not add `.codex/agents` in this pass.
Rationale: Official Codex docs say subagents should be used only when explicitly requested, and the local repo should stay lightweight. Skill-level rules are enough to make delegation safe without creating runtime agent configuration prematurely.
Timestamp/Author: 2026-05-14T19:10:00Z / Codex

## Validation

- Review local `deep-researcher` files and compare against upstream patterns.
- Use primary repository files from the two upstream GitHub repositories where available.
- Report confidence, evidence quality, and open risks in the final answer.
- `npm run validate` passed after the skill-structure changes.
- `git diff --cached --check` passed after the skill-structure changes.

## Material Sources

Access date for all links: 2026-05-14.

| Source | Why used |
|---|---|
| https://github.com/Imbad0202/academic-research-skills | Upstream suite overview, feature list, pipeline scope, and license context. |
| https://raw.githubusercontent.com/Imbad0202/academic-research-skills/main/docs/ARCHITECTURE.md | Primary source for ARS stages, gates, observer pattern, and quality-gate structure. |
| https://raw.githubusercontent.com/Imbad0202/academic-research-skills/main/academic-pipeline/SKILL.md | Primary source for the academic pipeline orchestrator, checkpoints, retry loops, and integrity gates. |
| https://raw.githubusercontent.com/Imbad0202/academic-research-skills/main/deep-research/SKILL.md | Primary source for ARS deep-research phases, modes, and role structure. |
| https://github.com/Imbad0202/academic-research-skills-codex | Primary source for the Codex packaging approach and single-suite skill design. |
| https://raw.githubusercontent.com/Imbad0202/academic-research-skills-codex/main/skills/academic-research-suite/SKILL.md | Primary source for Codex router behavior, no automatic subagent spawning, and Claude-to-Codex runtime mapping. |
| https://developers.openai.com/codex/subagents | Official OpenAI source for Codex subagent availability, explicit invocation, custom agents, and sandbox behavior. |
| https://developers.openai.com/codex/concepts/subagents | Official OpenAI source for subagent tradeoffs, context pollution, and recommended read-heavy parallel use. |

## Outcome

Final answer recommends implementing the compact pipeline and small gates now, parking observer-style scoring and full artifact handoff, and rejecting hooks, multi-agent orchestration, separate skills, full academic paper pipeline, material passport, source catalog, and cross-model automation for this repo. Follow-up implementation added a compact pipeline reference, an integrity mini-gate, a subagent result contract, and integration rules while preserving one `deep-researcher` skill. A later subagent review tightened the implementation around source discipline, validation recording, reviewer gate outcomes, retry SSOT, and subagent evidence handoff.

Change note: 2026-05-14T18:21:34Z - Created the retained plan required for source-backed research work.
Change note: 2026-05-14T18:50:00Z - Recorded source-backed decisions and close-out.
Change note: 2026-05-14T19:10:00Z - Captured the implementation follow-up requested by the user.
Change note: 2026-05-14T19:35:00Z - Integrated findings from three read-only subagent review passes.
