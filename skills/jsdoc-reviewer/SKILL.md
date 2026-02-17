---
name: jsdoc-reviewer
description: Audit and fix JSDoc contracts for exported APIs against repository standards. Use when users ask to review, add, or normalize JSDoc on public interfaces. Do not use for non-API documentation tasks.
---

# JSDoc Reviewer

Enforce consistent, caller-facing JSDoc contracts on exported APIs.

## Core Outcome

Deliver a precise audit and, when requested, patch exported API docs so they satisfy the repository JSDoc contract standard.

## Workflow Contract

Run this sequence unless user scope is narrower:

1. Scope lock.
2. Export inventory.
3. Contract audit.
4. Patch pass.
5. Validation pass.
6. Final report.

## Step 1: Scope Lock

Capture:

1. target files/modules,
2. whether this is review-only or review+fix,
3. expected output format (findings-only or findings+patch summary).

## Step 2: Export Inventory

Build a deterministic list of changed or in-scope exported APIs before judging docs.

Record:

1. export symbol,
2. file path,
3. API kind (`function|method|class|interface|type`).

## Step 3: Contract Audit

For each exported API, check required fields from the JSDoc standard.

Severity rules:

1. `high`: missing error semantics on callable API or unsafe/leaky content.
2. `medium`: missing preconditions/postconditions/constraints.
3. `low`: wording quality issues with no contract ambiguity.

## Step 4: Patch Pass

When user asks for implementation, patch JSDoc comments directly near exports.

Rules:

1. keep comments caller-facing,
2. avoid implementation detail,
3. keep wording concise and testable.

## Step 5: Validation Pass

Run repository checks needed for safe merge:

1. `npm run lint`,
2. `npm run typecheck`,
3. targeted tests when API behavior was touched.

## Step 6: Final Report

Return:

1. findings ordered by severity with file references,
2. what changed,
3. residual risks or gaps.

## Shared Policy Modules

- Apply `../../docs/standards/jsdoc-api-contracts.md` for:
  - `Scope`,
  - `Required Fields`,
  - `Error Semantics`,
  - `Forbidden Content`,
  - `Review Checklist`,
  - `Change Policy`.
- Apply `../shared/references/confirm-required-gate.md` for:
  - `Confirmation Threshold`,
  - `Required Response Behavior`,
  - `Safe Fallback`.
- Apply `../shared/references/principle-effectiveness-review.md` for:
  - `Scoring Rules`,
  - `Corrective Action Design`,
  - `Output Template`,
  - `Escalation Handling`.

## Progressive Disclosure

Load only what is needed:

- Apply `../REFERENCE-STANDARD.md` for:
  - `Shared Rule Consumption Pattern`.
- Apply `references/review-method.md` for:
  - `Discovery Inputs`,
  - `Export Inventory Method`,
  - `Contract Audit Matrix`,
  - `Patch Protocol`.
- Apply `references/validation-gates.md` for:
  - `Required Commands`,
  - `Acceptance Conditions`,
  - `Escalation Conditions`.
