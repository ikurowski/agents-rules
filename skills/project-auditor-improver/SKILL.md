---
name: project-auditor-improver
description: Audit a repository, rank issues by impact and risk, and deliver a minimal improvement plan with verifiable checks. Use when users ask to assess project quality and implement pragmatic upgrades. Do not use for unrelated feature development.
---

# Project Auditor Improver

Run a focused repository audit and turn findings into verifiable improvements.

## Core Outcome

Deliver an actionable audit report and a prioritized improvement plan that can be executed with minimal, safe changes.

## Workflow Contract

Run this order unless the user explicitly narrows scope:

1. Intake and scope lock.
2. Baseline audit.
3. Findings triage.
4. Improvement plan.
5. Execution and verification.
6. Final report with residual risks.
7. End-of-run principle effectiveness review.

If scope is unclear, ask targeted questions before step 2.

## Step 1: Intake and Scope Lock

Capture:

- `Primary Question` (what to audit/improve),
- in-scope and out-of-scope areas,
- constraints (time, risk tolerance, change budget),
- expected output format.

If details are missing, proceed with explicit assumptions and lower confidence.

## Step 2: Baseline Audit

Inspect repository signals relevant to the scope:

- policy/process alignment,
- architecture and code quality,
- testing and verification health,
- maintainability risks.

Prefer direct evidence from repository files, tests, and logs over assumptions.

## Step 3: Findings Triage

For each finding, provide:

- severity,
- impact summary,
- root cause,
- evidence path,
- recommended action.

Score each finding on U5 (`1-5`) for impact and implementation risk.

## Step 4: Improvement Plan

Build a minimal plan ordered by value/risk:

1. high-impact, low/medium-risk fixes first,
2. unblockers before optimizations,
3. avoid speculative refactors.

For every step, define a concrete validation check.

## Step 5: Execution and Verification

When execution is requested:

1. apply surgical changes,
2. run verification commands/tests,
3. record evidence of pass/fail,
4. iterate until acceptance checks pass or an impediment is reached.

Do not claim completion without observable verification results.

## Step 6: Final Report

Return:

- prioritized findings,
- implemented improvements (if any),
- validation evidence,
- unresolved risks and next checks.

Keep summaries concise and decision-oriented.

## Step 7: End-of-Run Principle Effectiveness Review

Before closing the task, apply `../shared/references/principle-effectiveness-review.md` for:

- end-stage evaluation of principle implementation effectiveness,
- corrective actions when effectiveness is not `high`.
- output template and escalation handling from the shared module.

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
- Apply `../shared/references/u5-scoring-bands.md` for:
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
  - `Unified Scoring Convention (U5)`.
- Apply `../shared/references/confirm-required-gate.md` for:
  - `Confirmation Threshold`,
  - `Required Response Behavior`,
  - `Safe Fallback`.
- Apply `../shared/references/source-evidence-policy.md` for:
  - `Source Priority`,
  - `Citation Block Format`,
  - `Date Handling`,
  - `Conflict Resolution and Tie-Breakers`.
- Apply `../shared/references/u5-scoring-bands.md` for:
  - `Scale Definition`,
  - `Derived Label Thresholds`,
  - `Reporting Format`.
- Apply `../shared/references/principle-effectiveness-review.md` for:
  - `Scoring Rules`,
  - `Corrective Action Design`,
  - `Output Template`,
  - `Escalation Handling`.
- Apply `references/audit-method.md` for:
  - `Audit Pass Order`,
  - `Finding Record Template`,
  - `Scoring Rules`.
- Apply `references/improvement-execution.md` for:
  - `Prioritization Model`,
  - `Execution Loop`,
  - `Rollback and Recovery`.
- Apply `references/validation-gates.md` for:
  - `Scenario Suite Scope`,
  - `Required Acceptance Checks`,
  - `Pass/Fail Rules`.

## Deliverables for This Skill

When the user asks for completion, provide:

1. Audit summary with ranked findings.
2. Improvement plan (minimal and prioritized).
3. Validation checklist and outcomes.
4. Residual risk log with recommended next steps.
5. Principle-effectiveness review with corrective actions when needed.
