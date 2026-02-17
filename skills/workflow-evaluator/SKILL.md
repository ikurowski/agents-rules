---
name: workflow-evaluator
description: Evaluate repository workflow changes through deterministic CLI scenarios, quality gates, and an ease-of-use scorecard. Use when users ask for structured workflow assessment with reproducible evidence and a final 1-5 rating. Do not use for feature delivery tasks.
---

# Workflow Evaluator

Run a repeatable workflow evaluation and produce a decision-ready scorecard artifact.

## Core Outcome

Deliver an evidence-backed workflow evaluation report with scenario outcomes, validation gate status, and overall ease score (`1-5` + `low|medium|high`).

## Workflow Contract

Run this order unless the user narrows scope:

1. Campaign initialization.
2. Intake and scope lock.
3. Research pass (discovery and evidence mapping).
4. Scenario execution pass.
5. Validation pass.
6. Ease scorecard and recommendations.
7. Final report and artifact write.
8. End-of-run principle effectiveness review.

Do not draft a final scorecard before the research pass has identified runnable commands, trigger tokens, and output artifacts.

## Campaign Initialization (Invoke-Time)

At invocation, initialize:

1. one `Primary Question` for the evaluation objective,
2. `Sub-question` register for workflow threads,
3. `Question-to-Evidence Matrix` scaffold for closure.

For narrow one-run evaluations, keep only `Sub-question-1`.

## Step 1: Intake and Scope Lock

Capture:

- workflow target (what is being evaluated),
- required scenarios and constraints,
- expected output artifact path and format,
- required verification commands.

If scope is missing, ask only the highest-impact gaps (max 3 questions), then proceed with explicit assumptions.

## Step 2: Research Pass (Discovery and Evidence Mapping)

Read source-of-truth and workflow context files first (for example `AGENTS.md`, `PLANS.md`, workflow architecture docs, and `package.json` scripts).

Output:

- available workflow commands,
- test/validation commands,
- known simulation/retry/escalation triggers.

## Step 3: Scenario Execution Pass

Run at least three workflow scenarios:

1. happy path,
2. retry path,
3. governance/failure path.

For each scenario record:

- execution status,
- retry occurrence,
- escalation occurrence,
- returned artifacts and scorecard summary.

If a requested command is missing, map to the closest valid script from `package.json` and record the mapping.

## Step 4: Validation Pass

Run required repository quality gates requested by the user. Default:

- `npm run typecheck`,
- `npm run lint`,
- `npm run test`.

Capture pass/fail and key evidence lines.

## Step 5: Ease Scorecard

Score these metrics (`1-5`) and compute average:

1. Discoverability,
2. Operability,
3. Error recoverability,
4. Observability,
5. Governance clarity.

Map average score to label:

- `1.0-2.4` -> `low`,
- `2.5-3.7` -> `medium`,
- `3.8-5.0` -> `high`.

## Step 6: Final Report and Artifact

Write one report artifact containing:

1. used commands,
2. scenario outcomes,
3. typecheck/lint/test outcomes,
4. ease metrics table,
5. `overall_ease_score` and `overall_ease_label`,
6. short recommendations (max 5).

Use user-provided output path when given; otherwise default to `governance/eval/agent-workflow-ease-scorecard.md`.

## Step 7: End-of-Run Principle Effectiveness Review

Before final response, apply `../shared/references/principle-effectiveness-review.md` for:

- end-stage evaluation of principle implementation effectiveness,
- corrective actions when effectiveness is not `high`,
- output template and escalation handling.

## Shared Policy Modules

Default: reuse shared policy modules instead of redefining them locally.
Exception: add a skill-local override only when shared guidance is insufficient for this skill's scope, and document why.

- Apply `../shared/references/confirm-required-gate.md` for:
  - `Confirmation Threshold`,
  - `Required Response Behavior`,
  - `Safe Fallback`.
- Apply `../shared/references/source-evidence-policy.md` for:
  - `Source Priority`,
  - `Citation Block Format`,
  - `Date Handling`,
  - `Conflict Resolution and Tie-Breakers`.
- Apply `../shared/references/research-campaign-model.md` for:
  - `Canonical Terms`,
  - `Primary Question Frame`,
  - `Sub-question Register`,
  - `Question-to-Evidence Matrix`,
  - `Entry Criteria for Emergent Sub-questions`,
  - `Depth Cap`,
  - `Completion Definition`.
- Apply `../shared/references/five-point-scoring-bands.md` for:
  - `Scale Definition`,
  - `Derived Label Thresholds`,
  - `Reporting Format`.
- Apply `../shared/references/principle-effectiveness-review.md` for:
  - `Scoring Rules`,
  - `Corrective Action Design`,
  - `Output Template`,
  - `Escalation Handling`.

## Progressive Disclosure

Load only what is needed:

- Apply `../REFERENCE-STANDARD.md` for:
  - `Shared Rule Consumption Pattern`,
  - `Unified Five-Point Scoring Convention`.
- Apply `../shared/references/confirm-required-gate.md` for:
  - `Confirmation Threshold`,
  - `Required Response Behavior`,
  - `Safe Fallback`.
- Apply `../shared/references/source-evidence-policy.md` for:
  - `Source Priority`,
  - `Citation Block Format`,
  - `Date Handling`,
  - `Conflict Resolution and Tie-Breakers`.
- Apply `../shared/references/research-campaign-model.md` for:
  - `Canonical Terms`,
  - `Primary Question Frame`,
  - `Sub-question Register`,
  - `Question-to-Evidence Matrix`,
  - `Entry Criteria for Emergent Sub-questions`,
  - `Depth Cap`,
  - `Completion Definition`.
- Apply `../shared/references/five-point-scoring-bands.md` for:
  - `Scale Definition`,
  - `Derived Label Thresholds`,
  - `Reporting Format`.
- Apply `../shared/references/principle-effectiveness-review.md` for:
  - `Scoring Rules`,
  - `Corrective Action Design`,
  - `Output Template`,
  - `Escalation Handling`.
- Apply `references/eval-method.md` for:
  - `Discovery Inputs`,
  - `Scenario Suite`,
  - `Scenario Record Template`,
  - `Scorecard Assembly`.
- Apply `references/validation-gates.md` for:
  - `Required Commands`,
  - `Pass/Fail Rules`,
  - `Escalation Conditions`.

## Deliverables for This Skill

When the user asks for completion, provide:

1. workflow command inventory,
2. scenario run summary (`happy/retry/governance`),
3. validation gate outcomes,
4. ease score table + overall score/label,
5. saved report path,
6. short recommendations list.
