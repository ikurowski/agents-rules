# Lessons Learned

Record significant user corrections and how they were fixed. Add entries only when the correction creates a reusable prevention rule.
Operational threshold: treat a correction as significant only when it adds or changes a prevention rule likely reusable in future tasks; skip one-off style preferences.

## Entry Template

- Timestamp: YYYY-MM-DDTHH:MM:SSZ
- Context: _what I was doing_
- Mistake: _what went wrong_
- Root cause: _why it happened_
- Fix: _what was changed_
- Prevention rule: _how to avoid this next time_

## Entries

- Timestamp: 2026-02-09T02:30:00Z
- Context: _I introduced a lightweight ExecPlan format and user asked for a stricter, self-contained plan style._
- Mistake: _I under-scoped the required level of detail and lifecycle tracking for ExecPlans._
- Root cause: _I optimized for minimal process overhead before validating preferred plan rigor with the user._
- Fix: _I upgraded `PLANS.md` and `tasks/plans/_template.md` to a living-document, novice-guiding ExecPlan standard and clarified `todo` vs `plans` responsibilities._
- Prevention rule: _When defining planning standards, confirm the target rigor level early and default to explicit, self-contained templates for complex work._

- Timestamp: 2026-02-09T03:20:00Z
- Context: _I was asked to normalize temporal fields across repository docs._
- Mistake: _I initially kept mixed date and timestamp conventions in some records and file naming guidance._
- Root cause: _I focused first on structural workflow changes and deferred full temporal normalization._
- Fix: _I migrated labels to `Timestamp`, converted date-only values to ISO UTC timestamps, and updated plan filename conventions to timestamp-based naming._
- Prevention rule: _When a formatting standard is requested, apply it repository-wide in one pass and verify with explicit regex checks._

- Timestamp: 2026-02-09T02:37:00Z
- Context: _I proposed adding an operational startup checklist to `README.md` during workflow ergonomics updates._
- Mistake: _I mixed onboarding documentation with operational execution policy._
- Root cause: _I optimized for discoverability but underweighted strict responsibility boundaries between policy and onboarding docs._
- Fix: _I moved startup sequence guidance to `AGENTS.md` (`Session Start`) and kept `README.md` onboarding-only._
- Prevention rule: _Do not place operational instructions in `README.md`; keep execution behavior in `AGENTS.md` and structure rules in `PLANS.md`._

- Timestamp: 2026-02-09T02:41:55Z
- Context: _I made a second commit without an explicit user command while continuing documentation changes._
- Mistake: _I executed `git commit` without direct authorization in the current session._
- Root cause: _I prioritized task momentum over strict commit-gating by user intent._
- Fix: _I reset `HEAD` to remove the unauthorized commit and kept changes uncommitted for user control._
- Prevention rule: _Never commit unless the user explicitly requests a commit in the current session._

- Timestamp: 2026-02-10T19:23:14Z
- Context: _I renamed and narrowed the new deep-research skill into governance-first scope after a naming follow-up._
- Mistake: _I over-specialized the skill identity and behavior beyond the user's intended broad "scientific researcher" use._
- Root cause: _I optimized for one example use case (governance logs) and underweighted the user's primary capability request._
- Fix: _I restored the skill to `deep-researcher`, rewrote workflow to "research first, then resolve doubts," and kept governance as optional use case only._
- Prevention rule: _When a user gives one example use case, preserve a broad core capability unless they explicitly request specialization._

- Timestamp: 2026-02-11T00:52:02Z
- Context: _I proposed a top-level anti-duplication rule using skill-specific wording in `AGENTS.md`._
- Mistake: _I encoded a repository-wide principle too narrowly to one domain (`skills/*`)._
- Root cause: _I reused immediate local context from skill docs instead of preserving policy abstraction level in root governance rules._
- Fix: _I replaced the section with a generic single-source-of-truth rule and moved skill-specific enforcement details to skill standards._
- Prevention rule: _When editing root governance policy (`AGENTS.md`), keep rules domain-agnostic unless the user explicitly asks for domain-specific scoping._

- Timestamp: 2026-02-11T00:57:57Z
- Context: _I added section-specific enforcement wording in `skills/REFERENCE-STANDARD.md` and mixed directive style in a canonical pointer._
- Mistake: _I introduced an unnecessary section exception (`Progressive Disclosure`) and used `Use ...` where the active pattern should be `Apply ... for:`._
- Root cause: _I optimized for immediate fix locality instead of preserving one precise, global consumption rule style._
- Fix: _I replaced the exception with one general module-consumption rule and rewrote the five-point score canonical pointer to `Apply ... for:` with scoped bullets._
- Prevention rule: _When defining a standard rule, prefer one globally applicable formulation and keep directive syntax consistent with the chosen canonical pattern._

- Timestamp: 2026-02-11T01:34:30Z
- Context: _The user asked to use `project-auditor-improver` for an audit of `Primary Question` usage, and I initially edited the skill file itself._
- Mistake: _I treated a "use this skill for X" request as a skill-authoring task instead of executing the skill workflow against the requested audit target._
- Root cause: _I over-indexed on the file path mention and underweighted the explicit intent verb ("use the skill for audit")._
- Fix: _I reverted the unintended edits and ran a proper repository audit with findings, scoring, and improvement plan._
- Prevention rule: _When the user asks to use a named skill for a task, execute that skill's workflow first; only edit the skill definition if the user explicitly asks to change the skill._

- Timestamp: 2026-02-11T02:31:41Z
- Context: _I had implemented campaign-like behavior in deep-research docs but not fully elevated the exact initial/emergent sub-question and `Coverage Matrix` model into the ExecPlan template._
- Mistake: _I stopped at partial alignment and missed full structural enforcement in the planning standard._
- Root cause: _I focused on local skill wording before codifying the model at the repository-level execution template where closure behavior is enforced._
- Fix: _I added the full Deep-Researcher Campaign structure to `tasks/plans/_template.md` and synchronized `deep-researcher` docs with explicit entry gate, depth cap, and completion criteria._
- Prevention rule: _When the user asks to "promote a model" into project workflow, implement it first in the canonical template/policy layer, then align skill-local docs._

- Timestamp: 2026-02-11T02:38:21Z
- Context: _Campaign decomposition used local shorthand for initial/emergent sub-questions that conflicted with canonical-term expectations and caused ambiguity._
- Mistake: _I introduced shorthand that was not derived from canonical terminology, reducing clarity across docs._
- Root cause: _I optimized for quick thread labeling and underweighted consistency with canonical vocabulary._
- Fix: _I extracted the model into shared `research-campaign-model` and standardized shorthand to canonical-derived forms (`Primary Question`, `Sub-question`, `Question-to-Evidence Matrix`, `Entry Criteria`, `Impediment`)._
- Prevention rule: _When introducing abbreviations in standards/workflows, derive them directly from canonical terms and centralize their definition in one shared source before reuse._

- Timestamp: 2026-02-12T15:29:48Z
- Context: _User asked to remove canonical-term shorthand project-wide after previous iterations introduced acronym-like tokens._
- Mistake: _I retained shorthand aliases in multiple docs, creating inconsistency with the user's preferred plain canonical naming._
- Root cause: _I optimized for compact notation despite explicit user preference for full canonical terms._
- Fix: _I removed shorthand tokens from markdown docs across the project and kept full canonical names only._
- Prevention rule: _When a user rejects terminology shorthand, enforce the full-term form globally and verify with repository-wide token scan._

- Timestamp: 2026-02-12T22:05:40Z
- Context: _I expanded the contract pipeline with checksum-specific custom logic and additional command surface._
- Mistake: _I introduced custom mechanisms with low practical value for the repo's core goal, increasing cognitive/maintenance overhead._
- Root cause: _I optimized for strict integrity signaling instead of first validating the user's simplicity threshold._
- Fix: _I removed checksum-specific gate/modules/script, kept the pipeline focused on core schema/semantic/compatibility/parity checks, and standardized Zod command naming to one canonical path._
- Prevention rule: _Default to the simplest architecture that satisfies explicit user goals; add custom gates/helpers only when their operational value is clearly higher than maintenance cost._

- Timestamp: 2026-02-12T22:48:40Z
- Context: _User asked to clean the workspace further and emphasized avoiding multiple sources of truth across AGENTS and skills._
- Mistake: _I initially left too much temporary runtime implementation in the tree after rollback/rebuild cycles._
- Root cause: _I optimized for preserving a runnable harness instead of prioritizing clean handoff for a fresh session._
- Fix: _I removed additional temporary runtime artifacts, kept only baseline tooling, and produced a dedicated large prompt that enforces explicit single-SoT mapping to AGENTS/PLANS/skills shared references._
- Prevention rule: _When user requests a fresh-session handoff, prefer a clean baseline and a precise execution prompt over retaining transitional runtime artifacts._

- Timestamp: 2026-02-13T00:34:43Z
- Context: _I started implementing the approved JSDoc-policy plan while an already-approved `Delta Plan v2` workflow plan was still pending._
- Mistake: _I did not explicitly synchronize and execute both approved plans together before the user had to ask about the missing one._
- Root cause: _I treated the latest explicit implementation request as exclusive scope instead of maintaining an explicit ledger of all approved-but-unfinished plan commitments._
- Fix: _I merged both scopes into one implementation run, delivered policy + runtime together, and updated tracker/ExecPlan evidence for the combined outcome._
- Prevention rule: _When multiple plans are approved in the same session, maintain an explicit execution ledger in tracker/plan docs and verify each approved plan is either completed, merged, or explicitly deferred before reporting completion._

