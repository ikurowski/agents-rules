# Audit Method

When to load: Use when running repository assessment and building the findings register.

## Table of Contents

1. Inputs and scope capture
2. Audit pass order
3. Finding record template
4. Scoring rules
5. Escalation handling

## Inputs and Scope Capture

Collect:

- audit objective,
- in-scope paths/modules,
- excluded areas,
- constraints (time, risk tolerance, delivery window).

If scope is partially missing, record assumptions before scanning.

## Audit Pass Order

Run passes in this order:

1. Process/policy consistency (`AGENTS.md`, `PLANS.md`, `tasks/*`).
2. Project structure and dependency clarity.
3. Test and validation reliability.
4. Documentation accuracy vs actual behavior.

Stop early only when a blocking impediment prevents meaningful progress.

## Finding Record Template

Use this template per finding:

- `id`: short stable identifier
- `title`: concise problem statement
- `severity_score`: `<1.0-5.0>/5`
- `severity_label`: `<low|medium|high>`
- `impact_score`: `<1.0-5.0>/5`
- `impact_label`: `<low|medium|high>`
- `risk_score`: `<1.0-5.0>/5`
- `risk_label`: `<low|medium|high>`
- `evidence`: file paths, outputs, or source links
- `root_cause`: one-sentence cause statement
- `recommended_action`: minimal concrete fix

## Scoring Rules

Use U5 scoring and derived labels from `../../shared/references/u5-scoring-bands.md`.
Report numeric scores before labels.

## Escalation Handling

If a recommended action has `risk_label == high`, use `../../shared/references/confirm-required-gate.md` before execution.
