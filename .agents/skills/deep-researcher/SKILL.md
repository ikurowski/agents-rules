---
name: deep-researcher
description: Conduct deep, evidence-backed research before answering user doubts or decision questions. Use when users need source-backed findings, trade-off analysis, confidence levels, and explicit uncertainty handling for technical, product, process, or governance topics. Use for audits, option comparisons, and decisions that need explicit uncertainty handling. Do not use for quick factual lookups, straightforward implementation tasks, or loose brainstorming with no need for evidence.
---

# Deep Researcher

Use this skill for decision-ready research that needs explicit evidence, trade-offs, confidence, and uncertainty handling.

## Required Flow

When the user invokes `$deep-researcher` or clearly asks for deep research:

1. Confirm the `Primary Question`, scope boundaries, key constraints, and output format.
2. If required context is missing, ask only the highest-impact missing questions.
3. Work in the parent agent by default. Use subagents only when the user explicitly asks for delegated or parallel agent work.
4. Run the compact pipeline for substantial research, including integrity and review gates before finalizing.
5. Run phase 2 doubt resolution when the user raised doubts or challenges.
6. Return a final brief with recommendation, assessment profile, open risks, and next checks.

## Research Readiness Gate

Do not start evidence collection until these are clear:

- decision or research question,
- in-scope and out-of-scope boundary,
- key constraints or priorities,
- output format.

If optional context is missing, proceed with explicit assumptions and lower confidence.

## Subagent Use

Work in the parent agent by default.

Use subagents only when all of these are true:

- the user explicitly asked for subagents, delegation, or parallel agent work,
- the work has at least two independent `Sub-Question`s or review angles,
- each delegated task can return a short evidence-backed result,
- extra token cost is justified by speed, independent review, or source verification.

Good delegated roles are:

- `source_mapper`: find and summarize sources for one bounded sub-question,
- `evidence_reviewer`: assess source quality and conflicts,
- `devils_advocate`: test the provisional conclusion against counterevidence,
- `docs_verifier`: verify current product, API, policy, or repository behavior.

The parent agent always owns synthesis, recommendation, confidence, and final wording.
Do not create or invoke subagents automatically from this skill.

## Canonical Terms

Use these terms when decomposition helps:

- `Primary Question`
- `Sub-Question`
- `Question-to-Evidence Matrix`
- `Impediment`

Keep one `Primary Question`. Add a `Sub-Question` only when it materially changes the recommendation.

## Phase 1: Deep Research

1. Frame the decision.
2. Define evaluation criteria.
3. Collect and rank evidence.
4. Run the integrity mini-gate from `references/evidence-quality-rubric.md`.
5. Compare viable options when they exist; otherwise compare evidence-supported interpretations or state why option comparison does not apply.
6. Run a reviewer pass: strongest counterargument, missing evidence, and risk if wrong.
7. Follow the retry rules in `references/pipeline.md` when a gate fails or disclose unresolved issues.
8. Draft a provisional conclusion with confidence and open uncertainty.
9. Define follow-up validation or monitoring when the recommendation implies action.

## Phase 2: Resolve Doubts

1. Restate each doubt precisely.
2. Answer using evidence gathered in phase 1.
3. Cite the evidence behind the answer.
4. Report `Confidence` using the assessment profile and add other dimensions only when they materially help.
5. State what would change your mind.

## Guardrails

- Prefer primary sources when they exist.
- Record links and dates for material claims.
- Keep pipeline gates proportional to the task; disclose unresolved risk instead of adding extra process.
- For repository architecture or agent-profile decisions, record material evidence in the answer or a retained ExecPlan.
- Flag unverifiable or conflicting evidence explicitly.
- Do not present weak evidence as certainty.
- Prefer actionable recommendations over generic summary.

## Output Contract

Final output should include:

1. question and scope,
2. criteria,
3. key evidence summary with links and dates,
4. option comparison or evidence-interpretation comparison,
5. recommendation,
6. assessment profile (`Confidence` required; add other dimensions when relevant) and open risks,
7. next validation step when uncertainty remains.

## Load References When Needed

- `references/research-method.md` for intake, decomposition, source collection, evidence tables, and decision-brief structure.
- `references/pipeline.md` for the compact pipeline, gates, retry rules, and optional subagent handoff pattern.
- `references/assessment-profile.md` for assessment dimensions and reporting labels.
- `references/evidence-quality-rubric.md` for evidence scoring, confidence mapping, and conflict handling.
- `references/doubt-resolution.md` for doubt intake and answer structure.
