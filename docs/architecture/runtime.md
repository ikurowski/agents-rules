# Runtime Architecture

Runtime modules are under `src/runtime`.

## Components

1. `src/runtime/orchestrator/run-agent-workflow.ts`
   - deterministic stage order,
   - retry policy for `execute`/`verify`,
   - governance threshold gate,
   - report assembly.
2. `src/runtime/orchestrator/run-agent-workflow-stages.ts`
   - stage-level logic and simulation triggers.
3. `src/runtime/io/source-of-truth-paths.ts`
   - canonical source-of-truth paths.
4. `src/runtime/io/source-of-truth-reader.ts`
   - readability checks for source-of-truth paths.
5. `src/runtime/reporting/generate-agent-workflow-report.ts`
   - output serialization with schema validation.

## Contract Rules

- Runtime input/output boundaries parse using `src/contracts` schemas.
- Errors exposed externally follow `ProblemDetails` schema.
