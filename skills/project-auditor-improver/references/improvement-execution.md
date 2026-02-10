# Improvement Execution

When to load: Use when turning findings into implementation steps and applying changes.

## Table of Contents

1. Prioritization model
2. Execution loop
3. Change-size constraints
4. Rollback and recovery
5. Completion criteria

## Prioritization Model

Order improvement steps by:

1. highest impact,
2. lowest acceptable implementation risk,
3. strongest evidence quality,
4. smallest change footprint.

Prefer fixes that reduce recurring failure modes over one-off cosmetic improvements.

## Execution Loop

For each selected improvement:

1. state expected observable outcome,
2. apply minimal, surgical edits,
3. run targeted verification,
4. capture result evidence,
5. proceed only when check passes.

If a check fails, investigate root cause before retry.

## Change-Size Constraints

- Do not widen scope beyond approved findings.
- Do not batch unrelated refactors.
- Keep non-functional cleanup out of critical fixes unless required for correctness.

## Rollback and Recovery

If a change regresses behavior:

1. stop further edits,
2. isolate failing change,
3. revert only the problematic delta,
4. re-run the previous passing check,
5. resume with a narrower fix.

## Completion Criteria

Execution is complete only when:

- each implemented item has passing validation evidence,
- no unresolved high-severity blocker remains in-scope,
- residual risks are explicitly documented.
