---
name: deep-researcher
description: Conduct deep, evidence-backed research before answering user doubts or decision questions. Use when users need source-backed findings, trade-off analysis, confidence levels, and explicit uncertainty handling. Supports technical, product, process, and governance topics. Do not use for quick factual lookups or straightforward implementation tasks that do not require structured research.
---

# Deep Researcher

Use this skill for decision-ready research that needs explicit evidence, trade-offs, confidence, and uncertainty handling.

## When to Use

Use it for:

- technical, product, process, or governance questions where the answer should be evidence-backed,
- option comparisons that need trade-off analysis,
- audits or reviews that need explicit uncertainty handling.

Do not use it for:

- quick factual lookups,
- straightforward implementation tasks,
- loose brainstorming with no need for evidence.

## Required Flow

When the user invokes `$deep-researcher` (or clearly asks for deep research):

1. Confirm the `Primary Question`, scope boundaries, key constraints, and output format.
2. If required context is missing, ask only the highest-impact missing questions.
3. Run phase 1 research.
4. Run phase 2 doubt resolution when the user raised doubts or challenges.
5. Return a final brief with recommendation, assessment profile, open risks, and next checks.

## Research Readiness Gate

Do not start evidence collection until these are clear:

- decision or research question,
- in-scope and out-of-scope boundary,
- key constraints or priorities,
- output format.

If optional context is missing, proceed with explicit assumptions and lower confidence.

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
4. Compare at least two viable options.
5. Draft a provisional conclusion with confidence and open uncertainty.
6. Define follow-up validation or monitoring when the recommendation implies action.

## Phase 2: Resolve Doubts

1. Restate each doubt precisely.
2. Answer using evidence gathered in phase 1.
3. Cite the evidence behind the answer.
4. Report `Confidence` using the shared assessment profile and add other dimensions only when they materially help.
5. State what would change your mind.

## Guardrails

- Prefer primary sources when they exist.
- Record links and dates for material claims.
- Flag unverifiable or conflicting evidence explicitly.
- Do not present weak evidence as certainty.
- Prefer actionable recommendations over generic summary.

## Output Contract

Final output should include:

1. question and scope,
2. criteria,
3. key evidence summary with links and dates,
4. option comparison,
5. recommendation,
6. assessment profile (`Confidence` required; add other dimensions when relevant) and open risks,
7. next validation step when uncertainty remains.

## Load References When Needed

- `references/research-method.md` for intake, decomposition, source collection, evidence tables, and decision-brief structure.
- `../shared/references/assessment-profile.md` for the shared assessment dimensions and reporting labels.
- `references/evidence-quality-rubric.md` for evidence scoring, confidence mapping, and conflict handling.
- `references/doubt-resolution.md` for doubt intake and answer structure.
