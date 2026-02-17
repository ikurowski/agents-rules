# JSDoc Review Method

When to load: Use when auditing or patching JSDoc for exported APIs.

## Table of Contents

1. Discovery Inputs
2. Export Inventory Method
3. Contract Audit Matrix
4. Patch Protocol
5. Reporting Template

## Discovery Inputs

Collect:

1. in-scope files/modules,
2. changed exports in current diff,
3. repository JSDoc standard.

## Export Inventory Method

For each in-scope file, list exported APIs with:

1. symbol name,
2. API kind (`function|method|class|interface|type`),
3. line reference.

Prefer deterministic text search over manual browsing.

## Contract Audit Matrix

Evaluate each export against these checks:

1. caller-facing purpose,
2. constraints and preconditions,
3. postconditions,
4. side effects,
5. error semantics,
6. forbidden-content absence.

## Patch Protocol

When patching:

1. update comments at API declaration site,
2. keep vocabulary concrete and testable,
3. do not include implementation details.

## Reporting Template

For each finding report:

1. severity,
2. file reference,
3. missing/incorrect contract element,
4. fix status (`not_fixed|fixed`).
