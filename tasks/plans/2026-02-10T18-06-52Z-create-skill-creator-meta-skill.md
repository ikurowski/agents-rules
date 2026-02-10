# Create Research-Backed Skill-Creator Meta-Skill

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` will be updated as work proceeds.

This plan follows `PLANS.md` and is self-contained for a novice contributor.

## Purpose / Big Picture

Create a complete `skill-creator` skill in this repository that helps users design new skills step by step, asks one question per step with 2-3 options (one recommended), and proactively suggests quality improvements. The output must be grounded in current best practices with source-backed rationale and include a practical quality/validation checklist.

Observable outcomes:
- A ready-to-use skill exists at `skills/skill-creator/`.
- The skill content encodes the requested guided workflow and response format.
- Validation checks pass for the produced skill files.
- `tasks/todo.md` and this ExecPlan contain execution evidence.

## Progress

- [x] (2026-02-10T18:06:52Z) Session-start policy review completed (`AGENTS.md`, `PLANS.md`, `tasks/todo.md`, `tasks/lessons.md`).
- [x] (2026-02-10T18:08:10Z) Repository context and existing skill structure reviewed.
- [x] (2026-02-10T18:11:30Z) Initial external and local best-practice research started (OpenAI/OWASP/NIST + local system skill-creator).
- [x] (2026-02-10T18:15:40Z) Published first guided step to user (research synthesis, quality checklist, build plan, question 1).
- [x] (2026-02-10T18:45:46Z) Iterate on specification after each user decision (completed: Step 1-9 decisions captured; specification finalized as `v1.0`).
- [x] (2026-02-10T18:45:46Z) Authored final `skills/skill-creator` files and ran validation checks.
- [x] (2026-02-10T18:45:46Z) Finalized tracker/docs and closed task in `tasks/todo.md`.

## Surprises & Discoveries

The repository already contains an empty `skills/self-audit/agents/` scaffold but no finalized skill files in `skills/`.

Local system skill assets exist under `C:\Users\igork\.codex\skills\.system\skill-creator\`, including:
- `SKILL.md`
- `scripts/init_skill.py`
- `scripts/quick_validate.py`
- `scripts/generate_openai_yaml.py`

This provides implementation references and validator behavior that can be reused or mirrored.

Potential policy tension discovered:
- Local validator (`quick_validate.py`) allows optional frontmatter keys: `license`, `allowed-tools`, `metadata`.
- Existing system `SKILL.md` guidance emphasizes relying on `name` + `description` as trigger-critical minimum.

Planned resolution: prefer minimal frontmatter by default and allow optional keys only when explicitly justified.

## Decision Log

Decision: Treat this as a non-trivial task and maintain a full ExecPlan from the start.  
Rationale: Work includes multi-source research, iterative interaction protocol design, file authoring, and validation.  
Timestamp/Author: 2026-02-10T18:09:00Z / agent

Decision: Implement the target skill in-repo at `skills/skill-creator/`.  
Rationale: User asked to create a complete skill in this workspace; this path follows repository conventions.  
Timestamp/Author: 2026-02-10T18:10:00Z / agent

Decision: Prioritize 2026 sources; use older canonical sources only when no 2026 equivalent is available and mark date certainty explicitly.  
Rationale: Direct user requirement and anti-hallucination constraint ("do not guess").  
Timestamp/Author: 2026-02-10T18:11:45Z / agent

Decision: For sources without explicit publication date on-page, report "date not published" and include verification date instead of inferring.  
Rationale: Satisfies evidence transparency without fabrication.  
Timestamp/Author: 2026-02-10T18:11:47Z / agent

Decision: Adopt `Balanced` implementation profile per user confirmation ("balanded będzie ok").  
Rationale: Preserves strong quality/security/evaluation coverage without governance-heavy process overhead.  
Timestamp/Author: 2026-02-10T18:20:57Z / agent

Decision: Adopt `Standard` evidence strictness in step outputs (link + date/date-status + one-line why).  
Rationale: Matches balanced rigor while keeping iteration speed practical.  
Timestamp/Author: 2026-02-10T18:25:28Z / agent

Decision: Adopt `Balanced` file structure for the skill package: `SKILL.md` + `agents/openai.yaml` + `references/`.  
Rationale: Ensures progressive disclosure and maintainability without unnecessary script overhead.  
Timestamp/Author: 2026-02-10T18:27:11Z / agent

Decision: Adopt adaptive language policy for skill outputs (respond in user language; fallback default PL).  
Rationale: Preserves usability for mixed-language sessions while keeping Polish-first default aligned with current user context.  
Timestamp/Author: 2026-02-10T18:29:17Z / agent

Decision: Adopt `Strict` maintenance policy with weekly review and mandatory re-validation after each prompt/dependency/changelog-impacting change.  
Rationale: User selected strict cadence; aligns with rapid 2026 platform evolution and minimizes stale-skill risk.  
Timestamp/Author: 2026-02-10T18:32:57Z / agent

Decision: Adopt `Confirm-Required` security gate for high-impact actions proposed by the skill.  
Rationale: Balances strong safety with practical usability by requiring explicit user confirmation before risky actions.  
Timestamp/Author: 2026-02-10T18:35:22Z / agent

Decision: Adopt `Scenario Suite` validation depth for final acceptance (positive/negative scenarios plus regression checks, without full adversarial expansion by default).  
Rationale: Provides strong practical quality coverage with manageable maintenance load under the chosen `Balanced` profile.  
Timestamp/Author: 2026-02-10T18:37:10Z / agent

Decision: Organize `references/` as split-by-topic modules instead of a single monolithic file.  
Rationale: Improves progressive disclosure and maintenance ergonomics under strict weekly review cadence.  
Timestamp/Author: 2026-02-10T18:41:07Z / agent

Decision: Require explicit `Assumption Check` in every step output before recommendations.  
Rationale: Improves reliability by forcing explicit interpretation state before proposing actions.  
Timestamp/Author: 2026-02-10T18:45:46Z / agent

## Outcomes & Retrospective

Implemented complete `skill-creator` package at `skills/skill-creator/` with:
- step-by-step A-F response contract,
- one-question-per-step constraint,
- standard evidence policy,
- adaptive language behavior,
- confirm-required high-risk gate,
- strict maintenance cadence,
- scenario-suite quality gates,
- split-by-topic references.

Validation passed through local skill validator and structure checks. Task tracker was updated to completed state.

## Context and Orientation

Relevant repository files:
- `AGENTS.md`: Operational execution rules and hierarchy.
- `PLANS.md`: Required ExecPlan sections and lifecycle.
- `tasks/todo.md`: High-level task status tracker.
- `tasks/lessons.md`: Reusable prevention rules.
- `skills/`: Destination folder for repository-managed skills.

External/local references used to design the new skill:
- OpenAI Codex/skills documentation and changelog pages.
- OpenAI evaluation/safety guidance pages.
- OWASP LLM Top 10 (2025) and NIST AI RMF (for security/quality framing).
- Local system `skill-creator` scripts and documentation for format/validation behaviors.

## Plan of Work

1. Complete targeted research across the required dimensions: architecture, instruction writing, trigger design, progressive disclosure, validation/testing, security, quality gates, and maintenance.
2. Produce the first guided response to the user in the required A-F step format with one decision question.
3. Capture user choices step-by-step and update an explicit `skill-creator` specification in-repo.
4. Implement final skill files in `skills/skill-creator/` (at minimum `SKILL.md`; include `agents/openai.yaml` and support files if needed).
5. Run validation commands and record evidence in this plan.
6. Close tracking entries in `tasks/todo.md`.

## Specification Snapshot

Version `v0` (pre-decision baseline):

- Skill name target: `skill-creator`.
- Primary objective: Guide users step by step in building new skills with one-question increments.
- Mandatory interaction contract:
  - one question per step,
  - 2-3 options with one clearly marked recommended,
  - at least one proactive quality improvement suggestion per step,
  - explicit update of the skill specification after each user answer.
- Research contract:
  - recommendations source-backed (link + date + short rationale),
  - explicit handling of conflicting sources,
  - explicit "cannot confirm" statements when publication details are unavailable.
- Planned deliverables:
  - complete specification,
  - final ready-to-use skill content,
  - quality and validation checklist,
  - concise rationale for design decisions.

Version `v0.1` (research-synthesized baseline, pending user Step-1 choice):

- Architecture baseline: single-skill, progressive-disclosure structure; avoid unnecessary orchestration complexity.
- Trigger baseline: emphasize precise trigger contexts in frontmatter `description`.
- Quality baseline: enforce measurable validation gates (structure checks + scenario-based evals + regression check).
- Security baseline: explicitly include prompt-injection handling, tool-scope minimization, and confirmation for high-impact actions.
- Maintenance baseline: define review cadence and re-validation triggers after product/model/changelog shifts.
- Open decision pending user input: implementation profile strictness (lean vs balanced vs governance-heavy).

Version `v0.2` (after user Step-1 decision):

- Implementation profile fixed to `Balanced`.
- Mandatory quality posture:
  - include practical quality gates (structure + behavior checks),
  - include explicit security constraints for tool-use and high-impact actions,
  - include maintenance guidance with periodic re-validation triggers.
- Next open decision: evidence strictness policy inside the skill's step responses (minimal vs standard vs strict citation discipline).

Version `v0.3` (after user Step-2 decision):

- Evidence policy fixed to `Standard`:
  - each material recommendation includes source link,
  - includes publication date when available, otherwise explicit "date not published; verified on 2026-02-10",
  - includes a one-sentence rationale for relevance.
- Open decision pending user input: internal file structure of `skills/skill-creator/` (SKILL-only vs SKILL+references vs SKILL+references+scripts).

Version `v0.4` (after user Step-3 decision):

- File structure fixed to:
  - `skills/skill-creator/SKILL.md`
  - `skills/skill-creator/agents/openai.yaml`
  - `skills/skill-creator/references/` (targeted support docs only)
- No `scripts/` by default in this phase; can be added later only if validation friction proves recurring.
- Next open decision: default language policy in user-facing skill outputs (PL-only vs EN-only vs bilingual adaptive).

Version `v0.5` (after user Step-4 decision):

- Language policy fixed to `Adaptive`:
  - reply in the user's current language,
  - if ambiguous, default to Polish,
  - keep language stable inside a given step unless user requests a switch.
- Open decision pending user input: maintenance and re-validation cadence policy for the finished skill.

Version `v0.6` (after user Step-5 decision):

- Maintenance policy fixed to `Strict`:
  - weekly review cadence,
  - mandatory re-validation after model/tool/changelog-relevant updates,
  - explicit trigger on any failed eval run.
- Open decision pending user input: security gate strictness for high-impact operations proposed by the skill (advisory vs confirm-required vs deny-by-default-until-confirmed).

Version `v0.7` (after user Step-6 decision):

- Security gate policy fixed to `Confirm-Required`:
  - classify high-impact operations before proposing execution,
  - require explicit user confirmation before any high-impact action,
  - provide safe fallback action when confirmation is not given.
- Open decision pending user input: validation depth for final acceptance (core smoke checks vs scenario eval suite vs scenario eval suite plus adversarial prompts).

Version `v0.8` (after user Step-7 decision):

- Validation depth fixed to `Scenario Suite`:
  - run scenario-based checks across happy-path and negative-path cases,
  - include regression checks for previously fixed behaviors,
  - keep adversarial suite optional escalation rather than default gate.
- Open decision pending user input: `references/` organization strategy (single consolidated reference vs split by topic).

Version `v0.9` (after user Step-8 decision):

- `references/` organization fixed to `Split by Topic`:
  - one focused file per concern area,
  - each file includes a short "when to load" cue and mini table of contents.
- Open decision pending user input: whether to require explicit "assumption check" line in every step output before recommendations.

Version `v1.0` (after user Step-9 decision, final):

- Assumption policy fixed to `Required`:
  - each step starts with one-line `Assumption Check`,
  - no recommendation block is valid without it.
- Final design profile:
  - Implementation profile: `Balanced`
  - Evidence strictness: `Standard`
  - Package structure: `SKILL.md + agents/openai.yaml + references/`
  - Language policy: `Adaptive` (fallback PL)
  - Maintenance policy: `Strict`
  - Security gate: `Confirm-Required`
  - Validation depth: `Scenario Suite`
  - Reference organization: `Split by Topic`
- Open decisions: none.

## Concrete Steps

From repo root (`c:\Users\igork\Desktop\agent`):

1. Research and source capture
   - Use web tool for primary sources and dates.
   - Record unresolved date ambiguity explicitly where publication date is unavailable.
2. Plan/status updates
   - Maintain this ExecPlan with progress and decisions.
   - Keep `tasks/todo.md` status synchronized.
3. Skill implementation
   - Create/update `skills/skill-creator/SKILL.md`.
   - Optionally create/update `skills/skill-creator/agents/openai.yaml`.
   - Add only files required by final agreed scope.
4. Validation
   - Run local checks such as:
     - `python C:\Users\igork\.codex\skills\.system\skill-creator\scripts\quick_validate.py skills/skill-creator`
     - `rg -n "^---|^name:|^description:" skills/skill-creator/SKILL.md`
   - Summarize pass/fail and remediation.

## Validation and Acceptance

Accept when all conditions are true:

1. `skills/skill-creator/` contains a complete, usable skill aligned with user-mandated behavior.
2. Final skill content includes:
   - step-by-step hand-holding flow,
   - exactly one question per step,
   - 2-3 options with one marked recommended,
   - explicit per-step quality improvement prompt,
   - explicit update-of-specification behavior after each user decision.
3. Best-practice recommendations are backed by links + dates (or explicit "date not published" note) + brief rationale.
4. A quality and validation checklist is provided.
5. `quick_validate.py` succeeds for the final skill folder.

## Idempotence and Recovery

Skill authoring is file-based and idempotent: re-running edits should converge to the same `skills/skill-creator/` content.

If a step fails:
- Re-run validation to capture exact error.
- Patch only affected files.
- Re-run the same validation command.

If research sources conflict or date metadata is missing:
- Record conflict/ambiguity in the decision log and user-facing rationale.
- Prefer explicit, product-specific source guidance over generic guidance.

## Artifacts and Notes

Evidence captured so far:
- Session-start documents read:
  - `AGENTS.md`
  - `PLANS.md`
  - `tasks/todo.md`
  - `tasks/lessons.md`
- Local system skill references inspected:
  - `C:\Users\igork\.codex\skills\.system\skill-creator\SKILL.md`
  - `C:\Users\igork\.codex\skills\.system\skill-creator\scripts\quick_validate.py`
  - `C:\Users\igork\.codex\skills\.system\skill-creator\scripts\init_skill.py`
  - `C:\Users\igork\.codex\skills\.system\skill-creator\scripts\generate_openai_yaml.py`
- External primary sources verified during research:
  - OpenAI, "Introducing Codex", published 2025-05-16: `https://openai.com/index/introducing-codex/`
  - OpenAI, "Introducing GPT-5.3-Codex", published 2026-02-05: `https://openai.com/index/introducing-gpt-5-3-codex/`
  - OpenAI Developers Blog, "Testing Agent Skills Systematically with Evals", published 2026-01-22: `https://developers.openai.com/blog/eval-skills`
  - OpenAI Developers Docs, "Codex changelog" (contains dated entries including 2026-02-09 and 2026-02-05): `https://developers.openai.com/codex/changelog`
  - OpenAI Developers Docs, "Agent Skills" (publication date not shown on page; verified 2026-02-10): `https://developers.openai.com/codex/skills`
  - OpenAI API Docs, "Evaluation best practices" (publication date not shown on page; verified 2026-02-10): `https://developers.openai.com/api/docs/guides/evaluation-best-practices`
  - OpenAI API Docs, "Safety in building agents" (publication date not shown on page; verified 2026-02-10): `https://developers.openai.com/api/docs/guides/agent-builder-safety`
  - OWASP GenAI Security Project, "LLM01:2025 Prompt Injection" (publication date not shown on page; verified 2026-02-10): `https://genai.owasp.org/llmrisk/llm01-prompt-injection/`
  - OpenAI Skills Repository (publication date not shown on page; verified 2026-02-10): `https://github.com/openai/skills`
  - Agent Skills Open Standard docs (publication date not shown on page; verified 2026-02-10): `https://agentskills.io`
- Validation command evidence (local):
  - `python C:\Users\igork\.codex\skills\.system\skill-creator\scripts\quick_validate.py skills/skill-creator`
    - Output: `Skill is valid!`
  - `rg -n "^name:|^description:|Assumption Check|A\) Krótkie wnioski|B\) Propozycje|C\) Decyzja|D\) Dlaczego|E\) Wpływ na jakość|F\) Pytanie" skills/skill-creator/SKILL.md`
    - Output confirms required format markers are present.
  - `Get-ChildItem -Path skills/skill-creator -Recurse -File`
    - Output confirms expected file set exists.
  - `Get-ChildItem -Path skills/skill-creator/references -File`
    - Output confirms three split topic files exist.
  - `rg -n "^#|^When to load|^## Table of Contents" skills/skill-creator/references/research-evidence.md skills/skill-creator/references/quality-gates.md skills/skill-creator/references/maintenance-security.md`
    - Output confirms each reference file contains load cues and mini table of contents.

## Interfaces and Dependencies

N/A - This task creates a documentation/instruction skill package and does not change runtime code interfaces or dependency graphs.

Change note: 2026-02-10T18:06:52Z - Created initial ExecPlan for skill-creator delivery and iterative user-guided design.
Change note: 2026-02-10T18:20:57Z - Recorded user decision selecting the `Balanced` profile and updated specification snapshot to `v0.2`.
Change note: 2026-02-10T18:22:04Z - Added concrete primary-source links and publication/verification date notes to artifacts.
Change note: 2026-02-10T18:25:28Z - Recorded user decision selecting `Standard` evidence strictness and updated specification snapshot to `v0.3`.
Change note: 2026-02-10T18:27:11Z - Recorded user decision selecting `Balanced` package structure and updated specification snapshot to `v0.4`.
Change note: 2026-02-10T18:29:17Z - Recorded user decision selecting adaptive language policy and updated specification snapshot to `v0.5`.
Change note: 2026-02-10T18:29:17Z - Refined external source list to verified URLs and corrected GPT-5.3-Codex reference.
Change note: 2026-02-10T18:32:57Z - Recorded user decision selecting `Strict` maintenance cadence and updated specification snapshot to `v0.6`.
Change note: 2026-02-10T18:32:57Z - Corrected source dates/URLs after explicit online verification (including 2025-05-16 publish date for Introducing Codex).
Change note: 2026-02-10T18:35:22Z - Recorded user decision selecting `Confirm-Required` security gate and updated specification snapshot to `v0.7`.
Change note: 2026-02-10T18:37:10Z - Recorded user decision selecting `Scenario Suite` validation depth and updated specification snapshot to `v0.8`.
Change note: 2026-02-10T18:41:07Z - Recorded user decision selecting split-by-topic references and updated specification snapshot to `v0.9`.
Change note: 2026-02-10T18:45:46Z - Recorded user decision selecting required assumption checks and finalized specification as `v1.0`.
Change note: 2026-02-10T18:45:46Z - Added implementation and validation evidence for finalized `skills/skill-creator` package.
Change note: 2026-02-10T18:45:46Z - Marked progress complete and synced `tasks/todo.md` with completed outcome.
