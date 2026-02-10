---
name: skill-creator
description: Guide users through creating or updating agent skills step by step with research-backed recommendations, trigger design, progressive disclosure, validation, security gates, and maintenance planning. Use when the user asks to design a new skill, improve an existing SKILL.md, or define quality checks for skills. Do not use for installing skills.
---

# Skill Creator

Build or update skills through a strict, decision-by-decision workflow.

## Workflow Contract

Follow this exact loop until the skill is complete:

1. Research and synthesize the current best practices for the active step.
2. Ask exactly one decision question.
3. Wait for the user answer.
4. Update the working specification after each answer.
5. Move to the next step.

Never batch multiple questions in one step.

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

Use the `Standard` evidence strictness:

- For every material recommendation, include:
  - source link,
  - publication date,
  - short relevance rationale.
- If publication date is unavailable, write:
  - `date not published; verified on YYYY-MM-DD`.
- If sources conflict, include a brief comparison and justify the chosen direction.
- If something cannot be verified, state that explicitly.

Prioritize sources in this order:

1. Current-year primary sources.
2. Older primary sources only when still necessary.
3. Avoid secondary commentary unless no primary source exists.

## Language Policy

Use adaptive language:

- reply in the user's language,
- if ambiguous, default to Polish,
- keep language consistent during a step unless the user asks to switch.

## Security Gate Policy

Use `Confirm-Required` for high-impact actions.

Before proposing risky actions, score risk on `1-5` and derive label (`low|medium|high`):

- `1.0-2.4` -> `low`
- `2.5-3.7` -> `medium`
- `3.8-5.0` -> `high`

For risk score `>= 3.8`:

- require explicit user confirmation before execution,
- provide a safe fallback if no confirmation is given.

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

## Progressive Disclosure

Keep this file focused on execution behavior.
Load reference files only when needed:

- `../REFERENCE-STANDARD.md` for cross-skill reference structure and U5 scoring.
- `../shared/references/source-evidence-policy.md` for source priority and conflict tie-breakers.
- `../shared/references/u5-scoring-bands.md` for consistent score thresholds and labels.
- `../shared/references/confirm-required-gate.md` for high-risk confirmation behavior.
- `references/research-evidence.md` for sourcing and citation rules.
- `references/quality-gates.md` for scenario suite and acceptance checklist.
- `references/maintenance-security.md` for maintenance triggers and risk gates.

## Deliverables for This Skill

When the user asks for completion, provide:

1. Complete skill specification.
2. Final ready-to-use skill content.
3. Quality and validation checklist.
4. Short rationale for design decisions with sources.

