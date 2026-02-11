# Research Method

When to load: Use when structuring the research protocol, evidence table, and final brief.

## Table of Contents

1. Protocol setup
2. Intake readiness checklist and loop
3. Question decomposition and scope control
4. Campaign thread register and closure gate
5. Source collection checklist
6. Evidence table template
7. Decision brief template
8. Seed primary sources

## Protocol Setup

Before collecting sources, define:

- decision question,
- decision deadline,
- decision owner,
- constraints (time, budget, risk appetite),
- evaluation criteria.

Write exclusions explicitly to prevent scope creep.

## Intake Readiness Checklist and Loop

Before starting evidence collection, confirm required readiness fields:

- research/decision question is explicit,
- in-scope and out-of-scope boundaries are explicit,
- constraints/priorities are explicit,
- output format and target audience are explicit.

Optional but useful fields:

- decision owner and deadline,
- options already considered,
- specific doubts to resolve after research.

Loop protocol:

1. List missing required fields.
2. Ask up to 3 targeted questions for highest-impact gaps.
3. Wait for user response.
4. Re-check readiness fields.
5. Repeat until all required fields are present.

If user cannot provide more detail, proceed with explicit assumptions and lower confidence.

## Question Decomposition and Scope Control

Use canonical terms:

- `Primary Question`: top-level question that the brief must resolve.
- `Sub-question`: follow-up question created during decomposition.
- `Entry Criteria`: rule for whether a new sub-question enters current scope.
- `Impediment`: blocker that prevents progress on a question.

Minimum operating rules:

1. Keep one explicit `Primary Question`.
2. Add a `Sub-question` only when it materially affects recommendation quality.
3. Record each admitted sub-question in the `Question-to-Evidence Matrix`.
4. Mark unresolved blockers as `Impediment` with owner and next action.

## Campaign Thread Register and Closure Gate

Create two registers:

1. `Initial Topic Register`: start topics from the user request and intake answers.
2. `Emergent Thread Queue`: newly discovered threads admitted during research.

For each row, track:

- `thread_id`,
- `thread_type` (`initial|emergent`),
- `status` (`open|in_progress|resolved|deferred`),
- `admission_reason` (required for emergent threads),
- `evidence_anchor` (source/table row ID).

Closure gate:

1. Final recommendation is blocked while any initial topic remains `open` or `in_progress`.
2. Deferred threads must include reason, impact on confidence, and next validation step.
3. Final brief must include a compact closure summary table.

## Source Collection Checklist

Apply `../../shared/references/source-evidence-policy.md` for:

- `Source Priority`,
- `Citation Block Format`,
- `Date Handling`,
- `Conflict Resolution and Tie-Breakers`.

For each key claim:

1. Find at least one primary source.
2. Record publication date.
3. Record relevance rationale.
4. Record limitations.
5. Add confidence note.

## Evidence Table Template

Use this `Question-to-Evidence Matrix` table:

| Primary Question | Sub-question | Claim | Source | Date | Relevance | Evidence Score (1-5) | Notes |
|---|---|---|---|---|---|---|---|
| ... | ... | ... | ... | ... | ... | ... | ... |

Evidence Score guidance:

- `5`: primary source + direct applicability + low contradiction
- `4`: primary source + mostly direct applicability
- `3`: primary source but indirect applicability or moderate contradiction
- `2`: secondary/mixed source with material gaps
- `1`: weak or unverifiable evidence

Apply `../../shared/references/u5-scoring-bands.md` for:

- `Derived Label Thresholds`.

## Decision Brief Template

1. Question and scope
2. Criteria
3. Key evidence summary
4. Option comparison
5. Recommendation
6. Confidence and open risks
7. Validation plan and review date

## Seed Primary Sources

Use these as starting points when relevant:

- OpenAI Agent Skills docs (date not published; verified 2026-02-10): `https://developers.openai.com/codex/skills`
- OpenAI evaluation best practices (date not published; verified 2026-02-10): `https://developers.openai.com/api/docs/guides/evaluation-best-practices`
- OpenAI agent safety guide (date not published; verified 2026-02-10): `https://developers.openai.com/api/docs/guides/agent-builder-safety`
- OpenAI eval-skills article (2026-01-22): `https://developers.openai.com/blog/eval-skills`
- OpenAI codex changelog (contains dated entries): `https://developers.openai.com/codex/changelog`
- OWASP LLM prompt injection reference (date not published; verified 2026-02-10): `https://genai.owasp.org/llmrisk/llm01-prompt-injection/`
- NIST AI RMF GenAI profile (2024-07-26): `https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence`
