# Validation Gates

When to load: Use when defining mandatory checks and acceptance criteria for workflow evaluation runs.

## Table of Contents

1. Required Commands
2. Scenario Acceptance
3. Quality Gate Acceptance
4. Report Artifact Acceptance
5. Escalation Conditions

## Required Commands

Default command set:

- `npm run agent:workflow:run -- --prompt "<scenario prompt>"`,
- `npm run typecheck`,
- `npm run lint`,
- `npm run test`.

If workflow command aliases exist, prefer canonical script names from `package.json`.

## Scenario Acceptance

A valid evaluation run MUST include:

1. one successful happy-path scenario,
2. one retry scenario with observed retry evidence,
3. one governance or failure scenario that demonstrates escalation/fail path behavior.

For each scenario, capture:

- exit code,
- workflow status,
- retry summary,
- escalation presence,
- scorecard summary.

## Quality Gate Acceptance

Default acceptance:

- `typecheck`: exit code `0`,
- `lint`: exit code `0`,
- `test`: exit code `0`.

If a gate fails, report it explicitly and mark overall run as non-clean even when scenario runs succeeded.

## Report Artifact Acceptance

Final artifact is accepted only if it includes:

1. used command list,
2. scenario outcomes table,
3. quality-gate outcomes table,
4. five metric ease score table (`1-5`),
5. `overall_ease_score` and `overall_ease_label`,
6. recommendations (max 5).

## Escalation Conditions

Escalate to user decision when at least one condition is true:

1. required workflow scenario cannot be executed with available repository commands,
2. scenario output cannot be parsed into status/retry/escalation evidence,
3. governance threshold behavior cannot be validated due to missing trigger path,
4. quality gates fail and would require code changes outside user-approved scope.

Apply `../../shared/references/confirm-required-gate.md` for:

- `Confirmation Threshold`,
- `Required Response Behavior`,
- `Safe Fallback`.
