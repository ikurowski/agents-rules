# Audit repository agent operating model

This ExecPlan is a living document. Keep it only as detailed as the task requires.

## Purpose

Assess whether this markdown-first agent rules repository is still an effective operating model in May 2026, considering current Codex/OpenAI and Claude/Anthropic agent practices. Done means there is a source-backed recommendation on what to keep, what to change, and whether moving to Claude should be treated as a repo migration, a tool preference, or unnecessary.

## Progress

- [x] (2026-05-14T15:04:37Z) Started.
- [x] (2026-05-14T15:04:37Z) Local repo and historical audit context reviewed.
- [x] (2026-05-14T15:04:37Z) Current external evidence collected.
- [x] (2026-05-14T15:04:37Z) Validation and close-out completed.

## Decision Log

Decision: Treat this as a research/audit task rather than an immediate refactor.  
Rationale: The user asked to evaluate repo quality and possible need for a model change or move to Claude; editing first would risk encoding the wrong target model.  
Timestamp/Author: 2026-05-14T15:04:37Z / Codex

Decision: Use explicit assumptions instead of pausing for intake.  
Rationale: The user provided the primary question and enough scope. Missing details such as exact budget, team size, or target agent client can be handled as uncertainty in the recommendation.  
Timestamp/Author: 2026-05-14T15:04:37Z / Codex

Decision: Recommend adaptation, not a wholesale Claude migration.  
Rationale: Current Codex and Claude guidance both support short project instructions, on-demand skills, subagents, and hooks/verification. The repository's canonical `skills/*` format is already close to the open Agent Skills model; the main missing piece is an optional Claude adapter layer and light mechanical validation.  
Timestamp/Author: 2026-05-14T15:04:37Z / Codex

## Research Frame

Primary Question: Is this repository still a high-quality and efficient operating model for agent work in May 2026, or should it be changed, including possible adaptation for Claude?

In scope:

- Root governance: `AGENTS.md`, `PLANS.md`, `README.md`.
- Skill architecture: `skills/*`, especially `deep-researcher`.
- Task memory: `tasks/todo.md`, `tasks/plans/*`, `tasks/lessons.md`.
- Dormant tooling and placeholder source files.
- Current external guidance from OpenAI/Codex and Anthropic/Claude where relevant.

Out of scope:

- Implementing a full refactor unless explicitly requested after the audit.
- Choosing a paid vendor plan or account-level migration.
- Rebuilding the repo as an application runtime.

Criteria:

- Instruction portability across current agents.
- Low context overhead.
- Clear ownership boundaries.
- Evidence and validation discipline.
- Ease of adding new skills without policy sprawl.
- Vendor-switching cost.

## Validation

- Read current root instructions, skill workflow, task tracker, and recent audit/simplification plans.
- Inspect tracked file inventory and dirty working-tree state before judging repo quality.
- Use current primary sources for claims about Codex/OpenAI and Claude/Anthropic behavior.
- Separate local evidence from inference.

Result:

- Local files reviewed: `AGENTS.md`, `PLANS.md`, `README.md`, `skills/REFERENCE-GUIDE.md`, `skills/deep-researcher/*`, `skills/shared/references/assessment-profile.md`, `tasks/todo.md`, `tasks/lessons.md`, recent March 2026 audit/simplification plans, and the May 2026 market-research plan.
- Current tracked repo size: 25 tracked files. Current visible repo including untracked plans: small; largest files are historical plans, `eslint.config.mjs`, and `deep-researcher` references.
- Dirty worktree at audit time: `tasks/todo.md` already modified; `tasks/plans/2026-05-14T14-56-55Z-market-advice-agent-research.md` and this plan are untracked.
- Stale-reference spot checks: active skill docs point to `assessment-profile.md`; no active `CLAUDE.md`, `.claude/`, hook, or subagent adapter exists.

## Evidence

Question-to-Evidence Matrix:

| Primary Question | Sub-Question | Claim | Source | Date | Why | Evidence Quality | Notes |
|---|---|---|---|---|---|---|---|
| Is this repo still effective? | Root instructions | Codex reads layered `AGENTS.md` files before work, with root-to-leaf precedence and a default 32 KiB project-doc cap. | https://developers.openai.com/codex/guides/agents-md | verified 2026-05-14 | Supports keeping a short root `AGENTS.md` and avoiding large monolithic rules. | strong | Directly applicable to Codex. |
| Is this repo still effective? | Harness shape | OpenAI's harness engineering guidance treats `AGENTS.md` as a table of contents, recommends first-class ExecPlans for complex work, and favors progressive disclosure with mechanical checks. | https://openai.com/index/harness-engineering/ | 2026-02-11, verified 2026-05-14 | Validates the repo's root-doc and plan architecture. | strong | Describes OpenAI internal practice; apply proportionally for this small repo. |
| Is this repo still effective? | Skills | Codex skills package instructions, resources, optional scripts, and are loaded through progressive disclosure. | https://developers.openai.com/codex/skills | verified 2026-05-14 | Matches the current `skills/<skill>/SKILL.md` shape. | strong | Repo skills are canonical locally but may still need installation/adapter paths for auto-discovery. |
| Is this repo still effective? | Portability | Agent Skills define a lightweight open folder format with `SKILL.md`, optional scripts, references, and assets; skills load on demand. | https://agentskills.io/ | verified 2026-05-14 | Supports preserving a vendor-neutral canonical `skills/*` directory. | strong | Open standard; details vary by client. |
| Is this repo still effective? | Claude memory | Claude recommends `CLAUDE.md` for project facts and moving multi-step procedures into skills or path-scoped rules. | https://code.claude.com/docs/en/memory | verified 2026-05-14 | Shows how to adapt this repo for Claude without duplicating all rules. | strong | Directly applicable to Claude Code. |
| Is this repo still effective? | Claude skills | Claude skills load only when used, support project `.claude/skills`, supporting files, invocation controls, and concise bodies. | https://code.claude.com/docs/en/skills | verified 2026-05-14 | Current `deep-researcher` is structurally compatible but not located where Claude auto-discovers project skills. | strong | Claude-specific extensions may require adapter metadata. |
| Is this repo still effective? | Subagents | Claude subagents and Codex subagents both support specialized side work in separate contexts. | https://code.claude.com/docs/en/sub-agents and https://developers.openai.com/codex/subagents | verified 2026-05-14 | Suggests new capability should be optional execution configuration, not baked into root docs. | strong | Use only when repeated parallel/exploration work warrants it. |
| Is this repo still effective? | Hooks and controls | Claude and Codex both support hooks for blocking, adding context, or verifying tool behavior; Claude also has project permissions deny rules for sensitive files. | https://code.claude.com/docs/en/hooks, https://developers.openai.com/codex/hooks, https://code.claude.com/docs/en/settings | verified 2026-05-14 | The repo currently lacks mechanical validation; hooks/settings are the modern place for deterministic enforcement. | strong | Do not add hooks until there is a real repeated failure to enforce. |

## Outcome

The repository is directionally good and still aligned with current agent-operating practice. It should not be replaced by a Claude-only structure. The better target is a small, vendor-neutral canonical repo with thin adapters for whichever client is used:

- keep `AGENTS.md`, `README.md`, `PLANS.md`, `skills/*`, and `tasks/*` as the core;
- add a Claude adapter only if Claude Code becomes a regular tool: `CLAUDE.md` or `.claude/CLAUDE.md` pointing to the canonical docs, plus `.claude/skills/*` copies/symlinks or a sync script from `skills/*`;
- add light mechanical validation for markdown links, stale skill references, and tracker/plan consistency before adding more policy text;
- keep dormant Node/TypeScript tooling parked or remove it only if the user decides it will not become active.

Assessment profile:

- `Confidence`: high - local repo evidence and current primary docs point in the same direction.
- `Evidence Quality`: strong - current OpenAI, Anthropic, and Agent Skills sources directly cover the relevant mechanisms.
- `Recommendation Strength`: strong - adapt rather than migrate.
- `Risk If Wrong`: moderate - a full migration could create duplicate rules and drift; doing nothing could leave Claude auto-discovery unsupported if Claude becomes the daily driver.

Change note: 2026-05-14T15:04:37Z - Created and completed the audit plan with local findings, current external evidence, and final recommendation.
