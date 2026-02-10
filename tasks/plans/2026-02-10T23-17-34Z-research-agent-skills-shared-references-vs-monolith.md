# Deep research: skills + shared references vs monolithic agent architecture

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

Produce a decision-ready recommendation memo for a tech lead/architect on whether splitting LLM-agent capabilities into explicit skills and shared references measurably outperforms a monolithic "everything in one prompt" approach. The output must explicitly cover accuracy, latency, inference cost, maintenance, and scalability, plus when modularization is justified versus overengineering.

Observable outcome: a source-backed memo with comparison tables, confidence scoring, unresolved risks, and practical decision criteria suitable for architecture selection.

## Progress

- [x] (2026-02-10T23:17:34Z) Initial task entry created and scope captured from user intake.
- [x] (2026-02-10T23:20:00Z) Gathered and scored evidence from primary sources and relevant benchmarks.
- [x] (2026-02-10T23:21:15Z) Built option comparison across monolith vs skills vs skills+shared references.
- [x] (2026-02-10T23:21:15Z) Produced recommendation memo content, ran doubt-resolution structure, and prepared tracker completion.

## Surprises & Discoveries

- The strongest quantitative benchmark evidence (`tau-bench`) confirms large quality/cost variance from agent scaffold choices, but does not run a direct controlled A/B strictly labeled as "skills vs monolith vs shared references."
- Vendor case studies and docs provide operational guidance and measurable eval strategy, but often lack public raw benchmark protocols for all architecture dimensions.

## Decision Log

Decision: Run the task under full deep-research protocol with explicit evidence scoring and confidence labels.  
Rationale: The user requested architecture-level guidance with measurable criteria and citations; this is a non-trivial decision with multiple trade-offs.  
Timestamp/Author: 2026-02-10T23:17:34Z / Codex

Decision: Treat optional intake fields (decision owner/deadline and explicit phase-2 doubt list) as assumed rather than blocking, because required readiness fields are complete.  
Rationale: Research-readiness gate is satisfied by question, scope, constraints, and output contract; delaying for optional fields would not materially improve findings.  
Timestamp/Author: 2026-02-10T23:17:34Z / Codex

Decision: Use a triangulation approach (benchmark papers + vendor guidance + case study), then explicitly mark uncertainty where no direct head-to-head dataset exists.  
Rationale: This satisfies the user's "existing data first" constraint while avoiding false certainty.  
Timestamp/Author: 2026-02-10T23:20:00Z / Codex

## Outcomes & Retrospective

Completed a source-backed recommendation memo with comparison tables, confidence labels, and explicit unresolved risks.

Main recommendation: adopt skills decomposition first for heterogeneous workflows; add shared references selectively for knowledge-heavy tasks where monolithic-context quality degrades.

Open gap: no single public benchmark directly isolates all three target architectures under one identical workload and protocol.

## Context and Orientation

This repository contains process definitions for agent workflows and skill design under `skills/` and task tracking under `tasks/`. Relevant local process documents:

- `AGENTS.md`: operational behavior policy.
- `PLANS.md`: ExecPlan structure/lifecycle.
- `skills/deep-researcher/SKILL.md`: required research workflow and intake gate.
- `skills/shared/references/source-evidence-policy.md`: source ranking and citation rules.
- `skills/shared/references/u5-scoring-bands.md`: confidence label mapping.
- `skills/deep-researcher/references/evidence-quality-rubric.md`: evidence scoring dimensions.
- `skills/deep-researcher/references/doubt-resolution.md`: post-research doubt answering protocol.

The user-facing deliverable is produced in chat, while this plan stores assumptions, evidence method, and validation notes.

## Terminology and Decomposition

`Primary Question`: Does using explicit skills and shared references in LLM agent architectures increase measurable system effectiveness compared to monolithic prompt-only agents?

`Sub-question`: What is measured impact on accuracy/task success/hallucination, latency, inference cost, maintenance effort, and scalability?

`Sub-question`: In which product scenarios does modularization produce net benefit versus complexity overhead?

`Sub-question`: What decision criteria should a tech lead use to choose architecture under medium risk tolerance and limited redesign appetite?

`Question-to-Evidence Matrix`: A table mapping each sub-question to source-backed claims, evidence scores, and limitations.

`Entry Criteria`: Admit a new sub-question only if it changes architecture recommendation, confidence, or rollout risk materially.

`Impediment`: Lack of directly comparable benchmark data separating "skills-only" from "skills + shared references"; if encountered, mitigate by triangulating from nearest primary evidence and marking uncertainty.

## Plan of Work

Execute in four stages:

1. Collect primary sources and benchmark reports relevant to LLM agent architecture modularization, tool/function-calling outcomes, context management, RAG/shared-memory patterns, and operational maintenance/scaling.
2. Build a `Question-to-Evidence Matrix` scoring source quality (authority, recency, applicability, verifiability, risk sensitivity) using U5 bands.
3. Compare three architecture options: monolithic prompt, skills decomposition, and skills + shared references. Evaluate benefits, failure modes, cost/latency implications, dependency risks, and rollback paths.
4. Deliver a recommendation memo with TL;DR verdict, scenario guidance (when useful vs overengineering), confidence score/label, unresolved uncertainties, and validation/monitoring metrics.

## Concrete Steps

1. Run web searches for primary sources (vendor docs, benchmark papers, standards) covering agentic workflows, tool use, decomposition, and RAG/memory impacts.
2. Open and inspect candidate sources; filter to those with measurable findings and explicit methodology.
3. Draft evidence matrix in notes (chat output), including source date and relevance lines.
4. Produce final memo and tables directly in response.
5. Update this ExecPlan and `tasks/todo.md` with completion evidence.

Expected result: source-backed recommendation with explicit confidence and practical decision criteria.

## Validation and Acceptance

Acceptance checks:

1. Memo contains all required user outputs: TL;DR verdict, when modularization helps, when it is overengineering, hard data with citations, decision criteria.
2. Comparison table includes the three requested architecture patterns and covers accuracy, latency, cost, maintenance, scalability.
3. At least two viable options are compared with failure modes, costs, dependency risks, and rollback path.
4. Confidence is reported as numeric (`1-5`) plus derived label (`low|medium|high`).
5. Doubt-resolution section is present and source-backed.

Success condition: all checks pass and sources are link-cited with dates.

## Idempotence and Recovery

Research steps are read-only and repeatable. If a source becomes inaccessible, replace it with the closest authoritative equivalent and record the substitution in `Decision Log`. If evidence conflicts, apply source-evidence tie-breakers and keep uncertainty explicit instead of forcing certainty.

## Artifacts and Notes

Evidence artifacts used in memo:

- OpenAI `eval-skills` (2026-01-22) for modular eval loop and efficiency targets.
- OpenAI Skills docs (date not published; verified 2026-02-10) for progressive disclosure and shared skill packaging model.
- Anthropic "Building effective agents" (2024-12-19) for simplicity-first and latency/cost trade-offs in workflow composition.
- `ReAct` paper (2023) for quantitative gains in action+reasoning setups.
- `Toolformer` paper (2023) for API/tool-use effect versus plain LM behavior.
- `Lost in the Middle` (TACL 2024) for long-context retrieval-position sensitivity (monolithic context risk).
- `RAG` (2020) for retrieval-grounded factuality and open-domain QA gains.
- `tau-bench` paper (2024) + HAL leaderboard snapshots (updated 2025-12-08) for real-world function-calling success and cost variance by scaffold.
- OpenAI Skyscanner case study (date not published; verified 2026-02-10) for shared-context/tooling operational impact.

## Interfaces and Dependencies

N/A - this task is research/memo generation and does not change runtime code interfaces or dependencies.

Change note: 2026-02-10T23:17:34Z - Created plan for deep research memo on modular skills/shared references versus monolithic LLM agent architecture.
Change note: 2026-02-10T23:21:15Z - Marked execution complete, documented discoveries, triangulation rationale, and evidence artifacts.
