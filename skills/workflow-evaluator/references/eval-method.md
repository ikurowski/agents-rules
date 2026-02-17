# Evaluation Method

When to load: Use when defining and executing workflow evaluation scenarios and building the report body.

## Table of Contents

1. Discovery Inputs
2. Scenario Suite
3. Scenario Record Template
4. Scorecard Assembly
5. Evidence Notes

## Discovery Inputs

Collect and read:

- operational/process source-of-truth files,
- workflow architecture docs,
- workflow CLI entrypoint docs/code,
- command inventory from `package.json`.

Record the exact commands that can execute workflow scenarios and validations.

## Scenario Suite

Run at least these scenarios:

1. Happy path: no simulation failure token.
2. Retry path: one transient simulation failure that should recover on retry.
3. Governance/failure path: simulation that forces threshold/escalation failure.

If repository runtime exposes canonical simulation tokens, prefer those exact tokens.

## Scenario Record Template

Use this template per scenario:

- `scenario_id`: short stable id
- `prompt`: command input prompt
- `command`: executed command
- `exit_code`: numeric process result
- `status`: `<completed|failed>`
- `had_retry`: `<true|false>`
- `escalated`: `<true|false>`
- `artifacts`: key output artifacts
- `scorecard_summary`: short score summary
- `notes`: one-line interpretation

## Scorecard Assembly

For ease scoring, include:

- `discoverability_score: <1.0-5.0>/5`
- `operability_score: <1.0-5.0>/5`
- `error_recoverability_score: <1.0-5.0>/5`
- `observability_score: <1.0-5.0>/5`
- `governance_clarity_score: <1.0-5.0>/5`
- `overall_ease_score: <average>/5`
- `overall_ease_label: <low|medium|high>`

Apply `../../shared/references/five-point-scoring-bands.md` for:

- `Scale Definition`,
- `Derived Label Thresholds`,
- `Reporting Format`.

## Evidence Notes

For every reported score or scenario claim, include at least one evidence item:

- command output fact,
- file path citation,
- runtime artifact field.
