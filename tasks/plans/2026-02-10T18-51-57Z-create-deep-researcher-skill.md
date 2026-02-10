# Create Deep-Research Skill for Skill Governance Decisions

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` will be updated as work proceeds.

This plan follows `PLANS.md` and is self-contained for a new contributor.

## Purpose / Big Picture

Create a new skill that performs deep, evidence-backed research for user topics and produces actionable recommendations. The initial use case is researching whether a skill should include artifacts like `lessons` logs, decision logs, or similar governance notes. The observable outcome is a ready-to-use skill folder under `skills/` with validated structure and reusable references.

## Progress

- [x] (2026-02-10T18:51:57Z) Reviewed session-start policy files (`AGENTS.md`, `PLANS.md`, `tasks/todo.md`, `tasks/lessons.md`) for this new non-trivial task.
- [x] (2026-02-10T18:56:20Z) Gathered source-backed best practices for deep research workflow and governance logging.
- [x] (2026-02-10T18:58:10Z) Implemented `skills/deep-researcher` files (`SKILL.md`, `agents/openai.yaml`, `references/`).
- [x] (2026-02-10T18:58:45Z) Validated skill structure and behavior constraints.
- [x] (2026-02-10T18:59:20Z) Synced task tracker and closed task.

## Surprises & Discoveries

No blockers found. Existing `quick_validate.py` from system `skill-creator` was reusable for validating the new skill folder.

## Decision Log

Decision: Create a distinct new skill rather than extending `skills/skill-creator`.  
Rationale: The user asked for a separate capability focused on deep research execution, not meta skill-authoring.  
Timestamp/Author: 2026-02-10T18:51:57Z / agent

Decision: Assume the user wants immediate implementation without additional discovery questions.  
Rationale: Request phrasing asks to build a skill directly; no blocking ambiguity prevents creating a strong default.  
Timestamp/Author: 2026-02-10T18:51:57Z / agent

Ambiguity: Skill name was not explicitly requested.  
Resolution: Use `deep-researcher` as concise default; user can request rename afterward.  
Timestamp/Author: 2026-02-10T18:51:57Z / agent

Decision: Keep resources to `references/` only (no scripts/assets).  
Rationale: The requested value is methodological rigor and decision support, not deterministic file-processing automation.  
Timestamp/Author: 2026-02-10T18:56:20Z / agent

## Outcomes & Retrospective

Completed. Implemented `skills/deep-researcher` with:

- structured deep-research workflow in `SKILL.md`,
- trigger-focused metadata in frontmatter and `agents/openai.yaml`,
- split references for method, evidence scoring, and skill-governance logging decisions.

Validation passed (`Skill is valid!`). The result is directly usable for research tasks such as deciding whether a given skill should introduce lessons/decision/change logs.

## Context and Orientation

Relevant files:

- `skills/skill-creator/`: recently created baseline for skill structure and quality policy.
- `tasks/todo.md`: high-level task tracking.
- `tasks/plans/2026-02-10T18-06-52Z-create-skill-creator-meta-skill.md`: prior evidence and conventions for research-quality skill behavior.

Target output folder:

- `skills/deep-researcher/`
  - `SKILL.md`
  - `agents/openai.yaml`
  - `references/*.md`

## Plan of Work

1. Collect current source-backed guidance for deep research, evidence quality, and AI-agent safety/governance.
2. Write a concise `SKILL.md` with:
   - trigger description,
   - stepwise deep-research workflow,
   - evidence standards,
   - decision framework for whether to add lessons/log artifacts.
3. Add `agents/openai.yaml` metadata and split references by topic for progressive disclosure.
4. Validate with `quick_validate.py` and simple grep checks.
5. Update tracker and close.

## Concrete Steps

From repo root (`c:\Users\igork\Desktop\agent`):

1. Research sources (web + local docs) and capture links/dates.
2. Create folder and files under `skills/deep-researcher/`.
3. Run validator:
   - `python C:\Users\igork\.codex\skills\.system\skill-creator\scripts\quick_validate.py skills/deep-researcher`
4. Run structural checks:
   - `rg -n "^name:|^description:|^#|^##" skills/deep-researcher/SKILL.md skills/deep-researcher/agents/openai.yaml skills/deep-researcher/references/*.md`
5. Update `tasks/todo.md` and this plan with outcome.

## Validation and Acceptance

Accept when:

1. `skills/deep-researcher/` exists with required files.
2. `SKILL.md` clearly supports deep research and the specific lessons/log decision use case.
3. References include practical templates/rubrics for evidence and governance decision logging.
4. `quick_validate.py` returns success.
5. Task tracker reflects completion.

## Idempotence and Recovery

Edits are file-based and idempotent; reruns should converge on identical file contents.

If validation fails:

1. capture failure output,
2. patch only failing file(s),
3. rerun the same validation command.

## Artifacts and Notes

Implemented files:

- `skills/deep-researcher/SKILL.md`
- `skills/deep-researcher/agents/openai.yaml`
- `skills/deep-researcher/references/research-method.md`
- `skills/deep-researcher/references/evidence-quality-rubric.md`
- `skills/deep-researcher/references/skill-governance-logging.md`

Validation commands and evidence:

- `python C:\Users\igork\.codex\skills\.system\skill-creator\scripts\quick_validate.py skills/deep-researcher`
  - Output: `Skill is valid!`
- `Get-ChildItem -Path skills/deep-researcher -Recurse -File`
  - Output confirms expected file set exists.
- `rg -n "^name:|^description:|^# |^## |When to load|Option A|Option B|Option C|Option D|Confidence" ...`
  - Output confirms required sections and governance option matrix exist.

External sources used to shape guidance:

- OpenAI Developers, `eval-skills` (2026-01-22): `https://developers.openai.com/blog/eval-skills`
- OpenAI Developers Docs, Agent Skills (date not published; verified 2026-02-10): `https://developers.openai.com/codex/skills`
- OpenAI API Docs, evaluation best practices (date not published; verified 2026-02-10): `https://developers.openai.com/api/docs/guides/evaluation-best-practices`
- OpenAI API Docs, agent-builder safety (date not published; verified 2026-02-10): `https://developers.openai.com/api/docs/guides/agent-builder-safety`
- OpenAI Developers Docs, Codex changelog (dated entries, e.g., 2026-02-09 and 2026-02-05): `https://developers.openai.com/codex/changelog`
- OWASP GenAI, LLM01 prompt injection (date not published; verified 2026-02-10): `https://genai.owasp.org/llmrisk/llm01-prompt-injection/`
- NIST AI RMF GenAI profile (2024-07-26): `https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence`
- Google SRE book, Postmortem culture chapter (date not published; verified 2026-02-10): `https://sre.google/sre-book/postmortem-culture/`
- ADR templates (updated 2025-03-17): `https://adr.github.io/madr/`

## Interfaces and Dependencies

N/A - This task adds documentation/instruction assets only and does not change runtime interfaces or dependency graph.

Change note: 2026-02-10T18:51:57Z - Created ExecPlan for new deep-research skill request.
Change note: 2026-02-10T18:58:45Z - Added implemented file list, validation evidence, and source set.
Change note: 2026-02-10T18:59:20Z - Updated `tasks/todo.md` with completed outcome and closed progress checklist.
