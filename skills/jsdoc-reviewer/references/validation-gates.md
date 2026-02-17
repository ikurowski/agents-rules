# JSDoc Validation Gates

When to load: Use when finalizing JSDoc audit or patch work.

## Table of Contents

1. Required Commands
2. Acceptance Conditions
3. Escalation Conditions

## Required Commands

Default validation commands:

1. `npm run lint`
2. `npm run typecheck`
3. targeted test command when behavior changed

## Acceptance Conditions

A run is accepted when:

1. findings include file references and severity,
2. patches (if requested) address high/medium findings in scope,
3. validation commands pass or failures are explicitly reported.

## Escalation Conditions

Escalate when at least one condition is true:

1. required API behavior is unclear from code and docs,
2. fixing docs safely requires behavior change outside approved scope,
3. validation failures indicate broader repository issues unrelated to this task.
