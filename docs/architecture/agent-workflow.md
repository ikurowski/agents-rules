# Agent Workflow Architecture

This document describes the deterministic agent workflow runtime:

- input: prompt + source-of-truth paths,
- stages: `intake -> plan -> execute -> verify -> report`,
- outputs: structured report with artifacts, scorecard, and optional escalation.

Observability data is emitted as:

- `observations` (per stage attempt),
- `traceEvents` (started/succeeded/failed/retried/escalated),
- `evaluationScorecard` (stage + overall five-point scores),
- `verificationChecks` (gate outcomes).

## Happy Path

```mermaid
flowchart LR
  input["Input: Prompt + SoT Paths"] --> intake["Intake Stage"]
  intake --> intakeGate{"Prompt Safe<br/>SoT Readable"}
  intakeGate --"yes"--> plan["Plan Stage"]
  intakeGate --"no"--> reportFail["Report Stage"]
  plan --> planGate{"Plan Successful"}
  planGate --"yes"--> execute["Execute Stage"]
  planGate --"no"--> reportFail
  execute --> executeGate{"Execute Successful"}
  executeGate --"yes"--> verify["Verify Stage"]
  executeGate --"no"--> reportFail
  verify --> verifyGate{"Verify Successful"}
  verifyGate --"yes"--> reportOk["Report Stage"]
  verifyGate --"no"--> reportFail
  reportOk --> outputOk["Output: completed report"]
  reportFail --> outputFail["Output: failed report + escalation"]
```

Observability points:

1. Intake: `isPromptSafe`, `isSourceOfTruthReachable`.
2. Execute/Verify: attempt-level observations and retry counters.
3. Report: serialization check and final status.

## Failure and Retry Path

```mermaid
flowchart LR
  executeStart["Execute/Verify Attempt 1"] --> firstGate{"isSuccessful"}
  firstGate --"yes"--> continue["Continue to Next Stage"]
  firstGate --"no"--> retryGate{"Retry Allowed?"}
  retryGate --"yes"--> retryEvent["Trace: retried"] --> secondAttempt["Attempt 2"]
  secondAttempt --> secondGate{"isSuccessful"}
  secondGate --"yes"--> continue
  secondGate --"no"--> escalate["Escalate + requiredUserDecision"]
  retryGate --"no"--> escalate
  escalate --> report["Report Stage"]
```

Conditions:

1. Retry is allowed only for `execute` and `verify`.
2. Maximum retries per stage: `1`.
3. After second failure, escalation is mandatory.

## Governance and Escalation Path

```mermaid
flowchart LR
  scorecard["Evaluation Scorecard"] --> threshold{"overallScore >= 3.8"}
  threshold --"yes"--> done["completed status"]
  threshold --"no"--> govEscalation["Set escalation.requiredUserDecision"]
  govEscalation --> report["Report Stage"]
  report --> failed["failed status"]
```

Governance gate:

1. If `overallScore < 3.8`, workflow MUST escalate even if stage execution succeeded.
2. Escalation MUST include a concrete `requiredUserDecision`.
3. Report output MUST remain machine-readable and include scorecard evidence.


