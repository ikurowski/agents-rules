# Research VS Code and Codex modular agent repo resources

This ExecPlan is a living document. Keep it only as detailed as the task requires.

## Purpose

Find and evaluate at least 15 high-quality current resources about modular agent instructions, Codex, VS Code workflows, skills, subagents, hooks, and repo-local agent knowledge. Done means there is a curated source list and a recommendation for this repository's next shape.

## Progress

- [x] (2026-05-14T15:18:01Z) Started.
- [x] (2026-05-14T15:18:01Z) Current external sources collected.
- [x] (2026-05-14T15:18:01Z) Source list ranked and repo recommendation drafted.
- [x] (2026-05-14T15:18:01Z) Validation and close-out completed.

## Decision Log

Decision: Treat this as research, not immediate repo implementation.  
Rationale: The user asked to discover current high-quality material first and uses VS Code plus Codex; design changes should follow the curated evidence rather than precede it.  
Timestamp/Author: 2026-05-14T15:18:01Z / Codex

Decision: Prioritize primary and near-primary sources over generic blog posts.  
Rationale: Codex, VS Code, GitHub Copilot, Agent Skills, and Claude Code behavior is product-specific and date-sensitive, so official docs and maintainers' posts are more reliable than summaries.  
Timestamp/Author: 2026-05-14T15:18:01Z / Codex

Decision: Recommend a modular VS Code + Codex adapter layer rather than a new repository model.  
Rationale: Current VS Code and Codex docs both support `AGENTS.md`, scoped instructions, reusable prompts/agents, and Agent Skills-style progressive disclosure. This repo already has the right canonical shape; it needs client-facing adapter files only where they reduce friction.  
Timestamp/Author: 2026-05-14T15:18:01Z / Codex

## Research Frame

Primary Question: Which current high-quality resources should guide a modular VS Code + Codex repository for personal agent workflows?

In scope:

- OpenAI Codex docs and posts.
- VS Code and GitHub Copilot docs relevant to agent instructions, prompt files, custom instructions, and coding agents.
- Open Agent Skills and `AGENTS.md` ecosystem materials.
- Claude Code docs only where they expose transferable patterns for skills, subagents, hooks, and modular memory.
- Practical repo architecture implications for this repository.

Out of scope:

- Paid plan comparison.
- Vendor marketing that does not include operational details.
- Implementing the adapter files in this turn.

## Validation

- Use current web sources because agent product behavior changes quickly.
- Prefer official docs, standards, release notes, and strong maintainer posts.
- Include at least 15 resources and explain why each matters.
- Check the final recommendation against the current local repo shape.

Result:

- Collected 20 high-quality sources, mostly official docs, standards, or first-party engineering posts.
- Verified sources on 2026-05-14.
- Compared evidence to this repo's current root docs, `skills/*`, and `tasks/*` model.

## Evidence

Curated sources:

1. OpenAI Codex IDE extension - https://developers.openai.com/codex/ide
2. OpenAI Codex `AGENTS.md` - https://developers.openai.com/codex/guides/agents-md
3. OpenAI Codex Agent Skills - https://developers.openai.com/codex/skills
4. OpenAI Codex Subagents - https://developers.openai.com/codex/subagents
5. OpenAI Codex Hooks - https://developers.openai.com/codex/hooks
6. OpenAI Codex Rules - https://developers.openai.com/codex/rules
7. OpenAI, "Unrolling the Codex agent loop" - https://openai.com/index/unrolling-the-codex-agent-loop/
8. OpenAI, "Unlocking the Codex harness" - https://openai.com/index/unlocking-the-codex-harness/
9. OpenAI, "Harness engineering" - https://openai.com/index/harness-engineering/
10. OpenAI, "The next evolution of the Agents SDK" - https://openai.com/index/the-next-evolution-of-the-agents-sdk/
11. OpenAI Developers, "Run long horizon tasks with Codex" - https://developers.openai.com/blog/run-long-horizon-tasks-with-codex
12. VS Code custom instructions - https://code.visualstudio.com/docs/copilot/customization/custom-instructions
13. VS Code prompt files - https://code.visualstudio.com/docs/copilot/customization/prompt-files
14. VS Code custom agents - https://code.visualstudio.com/docs/copilot/customization/custom-agents
15. VS Code Copilot cloud agent - https://code.visualstudio.com/docs/copilot/copilot-cloud-agent
16. GitHub Copilot repository custom instructions - https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions
17. GitHub OpenAI Codex integration - https://docs.github.com/en/copilot/concepts/agents/openai-codex
18. AGENTS.md open format - https://agents.md/
19. Agent Skills overview and specification - https://agentskills.io/ and https://agentskills.io/specification
20. Agent Skills creator guidance - https://agentskills.io/skill-creation/best-practices, https://agentskills.io/skill-creation/optimizing-descriptions, https://agentskills.io/skill-creation/evaluating-skills, https://agentskills.io/skill-creation/using-scripts

## Outcome

Recommended next shape for this repository:

- Keep `AGENTS.md`, `README.md`, `PLANS.md`, `skills/*`, and `tasks/*` as canonical source files.
- Add VS Code-facing optional adapters only if they make daily use easier:
  - `.github/instructions/*.instructions.md` for scoped Copilot/VS Code instructions generated from canonical docs;
  - `.github/prompts/*.prompt.md` for reusable one-shot workflows;
  - `.github/agents/*.agent.md` only for persistent roles with tool restrictions or handoffs;
  - a Codex skill-install or sync note/script so `skills/*` can be made available where Codex discovers skills.
- Keep `skills/*` as the portable skill source of truth and test future skills with trigger/output evals before adding many of them.
- Avoid adding hooks/rules until a repeated failure appears; use them for enforcement, not as documentation.

Assessment profile:

- `Confidence`: high - the current official Codex, VS Code, GitHub, and Agent Skills materials are consistent with this direction.
- `Evidence Quality`: strong - the source base is mostly primary documentation and first-party engineering posts from 2026.
- `Recommendation Strength`: strong - a modular adapter layer fits the user's VS Code + Codex workflow better than a repo rewrite.

Change note: 2026-05-14T15:18:01Z - Created and completed the curated-source research plan.
