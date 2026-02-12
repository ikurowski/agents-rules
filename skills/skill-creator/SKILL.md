---
name: skill-creator
description: Guide users through creating or updating agent skills step by step with research-backed recommendations, trigger design, progressive disclosure, validation, security gates, and maintenance planning. Use when the user asks to design a new skill, improve an existing SKILL.md, or define quality checks for skills. Do not use for installing skills.
---

# Skill Creator

Build or update skills through a strict, decision-by-decision workflow.

## Workflow Contract

Follow this exact loop until the skill is complete:

1. Campaign initialization.
2. Research and synthesize the current best practices for the active step.
3. Ask exactly one decision question.
4. Wait for the user answer.
5. Update the working specification after each answer.
6. Move to the next step.

Never batch multiple questions in one step.

## Campaign Initialization (Invoke-Time)

At invocation, initialize:

1. one `Primary Question` for the skill-design objective,
2. `Sub-question` register for step-wise decision threads,
3. `Question-to-Evidence Matrix` scaffold to map each decision thread to evidence.

If only one decision thread exists, keep `Sub-question-1` only.

## Required Step Output

Every step response must use this exact structure:

- `Assumption Check`: one line that states the current assumption set.
- `A) Short Findings`: short findings with evidence.
- `B) Options`: 2-3 mutually exclusive options; mark one as `Recommended`.
- `C) Decision`: current decision state.
- `D) Why`: reason for the recommendation.
- `E) Quality Impact`: at least one concrete quality improvement.
- `F) Question No. X`: exactly one question.

If any required block is missing, treat the step as invalid and self-correct in the same turn.

## Evidence Policy

Apply `../shared/references/source-evidence-policy.md` for:

- `Source Priority`,
- `Citation Block Format`,
- `Date Handling`,
- `Conflict Resolution and Tie-Breakers`.

Local Extension (skill-specific):

- if something cannot be verified, state that explicitly.

## Language Policy

Use adaptive language:

- reply in the user's language,
- if ambiguous, default to Polish,
- keep language consistent during a step unless the user asks to switch.

## Security Gate Policy

Use `Confirm-Required` for high-impact actions.

Before proposing risky actions:

- Apply `../shared/references/u5-scoring-bands.md` for:
  - `Scale Definition`,
  - `Derived Label Thresholds`,
  - `Reporting Format`.
- Apply `../shared/references/confirm-required-gate.md` for:
  - `Confirmation Threshold`,
  - `Required Response Behavior`,
  - `Safe Fallback`.

## Validation Policy

Use `Scenario Suite` as default acceptance depth.

Before finalizing:

1. Validate structure (required files and frontmatter).
2. Validate behavior with scenario checks:
   - happy path,
   - negative path,
   - regression path for previously decided constraints.
3. Fail finalization if critical checks fail.

## Maintenance Policy

Use strict maintenance:

- weekly review cadence,
- mandatory re-validation after:
  - model updates,
  - tool/dependency changes,
  - relevant changelog updates,
  - failed evals.

## End-of-Run Principle Effectiveness Review

Before final completion output, apply `../shared/references/principle-effectiveness-review.md` for:

- end-stage evaluation of principle implementation effectiveness,
- corrective actions when effectiveness is not `high`.

## Progressive Disclosure

Keep this file focused on execution behavior.
Load reference files only when needed:

- Apply `../REFERENCE-STANDARD.md` for:
  - `Shared Rule Consumption Pattern`,
  - `Unified Scoring Convention (U5)`.
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
- Apply `../shared/references/u5-scoring-bands.md` for:
  - `Scale Definition`,
  - `Derived Label Thresholds`,
  - `Reporting Format`.
- Apply `../shared/references/confirm-required-gate.md` for:
  - `Confirmation Threshold`,
  - `Required Response Behavior`,
  - `Safe Fallback`.
- Apply `../shared/references/principle-effectiveness-review.md` for:
  - `Scoring Rules`,
  - `Corrective Action Design`,
  - `Output Template`,
  - `Escalation Handling`.
- Apply `references/research-evidence.md` for:
  - `Shared Source/Evidence Policy`,
  - `Seed Source List`.
- Apply `references/quality-gates.md` for:
  - `Scenario Suite Scope`,
  - `Required Checks`,
  - `Pass Criteria`.
- Apply `references/maintenance-security.md` for:
  - `Re-Validation Triggers`,
  - `Shared Confirm-Required Risk Gate`.

## Deliverables for This Skill

When the user asks for completion, provide:

1. Complete skill specification.
2. Final ready-to-use skill content.
3. Quality and validation checklist.
4. Short rationale for design decisions with sources.
5. Principle-effectiveness review with corrective actions when needed.

