# Deep Researcher Pipeline

Purpose: Define the compact pipeline stages, gates, retry behavior, and optional subagent handoff rules for `deep-researcher`.

Reference loading is owned by `SKILL.md`; do not use this file as trigger guidance.

Keep this pipeline lightweight. It is a prompt workflow, not a multi-agent framework.

## Compact Pipeline

Run the workflow in this order:

1. `Intake and route`
2. `Scope and criteria`
3. `Evidence collection`
4. `Integrity mini-gate`
5. `Review and synthesize`
6. `Final brief`

Gate behavior:

```text
User input
  -> Intake and route
  -> Scope and criteria
  -> Evidence collection
  -> Integrity mini-gate

Integrity mini-gate:
  PASS     -> Review and synthesize
  REVISE   -> Evidence collection, then re-run the gate
  DISCLOSE -> Review and synthesize with lower confidence

Reviewer pass:
  PASS     -> Final brief
  REVISE   -> revise or mark Impediment, then re-check synthesis
  DISCLOSE -> Final brief with explicit risk and lower confidence
```

Retry limit:

- normal research: one targeted retry,
- high-stakes or source-critical research: at most two targeted retries,
- after the retry limit: disclose the open risk or mark `Impediment`.

## Stage Contract

| Stage | Output | Gate |
|---|---|---|
| 1. Intake and route | `Primary Question`, constraints, output format, execution mode | readiness gate |
| 2. Scope and criteria | boundaries, options, evaluation criteria | question is answerable |
| 3. Evidence collection | evidence notes, links, dates, quality notes | source quality checks |
| 4. Integrity mini-gate | PASS / REVISE / DISCLOSE | unsupported key claims resolved or disclosed |
| 5. Review and synthesize | option or interpretation comparison, counterargument, risk if wrong | reviewer pass |
| 6. Final brief | recommendation, assessment profile, open risks, next check | output contract |

## Retry Rules

- Use one targeted retry for normal research when the integrity gate returns `REVISE`.
- Use up to two retries only when the task is high-stakes or source-critical.
- Do not keep looping to manufacture certainty.
- If the retry cannot resolve the issue, mark it as `Impediment` or open risk and lower confidence.

## Optional Subagent Handoff

Routing is owned by `SKILL.md`. Use this handoff only after `SKILL.md` selects `parallel-subagent`.

Parent agent responsibilities:

1. Define each delegated `Sub-Question`.
2. Set read-only expectations unless implementation was explicitly requested.
3. Request the `Subagent Result Contract` from `references/research-method.md`.
4. Integrate results through the `Integration Gate`.
5. Own the final recommendation and confidence.

Avoid subagent splits when the task is small, tightly coupled, or the next step depends immediately on one result.

## Finalization Gate

Before final answer, check:

1. Does every material claim have a source or an explicit caveat?
2. Are conflicts and weak evidence visible?
3. Is confidence separated from evidence quality?
4. Is the recommendation actionable under the user's constraints?
5. Is the next validation step clear when uncertainty remains?
