# Test clean-context child Codex execution for small delegated tasks

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

Verify whether this repository can practically use a separate `codex exec` process as a clean-context child agent for small delegated tasks. After this test, we should know whether a child run can be started in read-only mode, scoped with a narrow prompt, and consumed as a report by the main agent without sharing the full parent-session context.

## Progress

- [x] (2026-03-03T20:43:09Z) Confirmed local `codex exec` CLI surface and selected a read-only child-agent test.
- [x] (2026-03-03T20:44:40Z) Ran a clean-context child `codex exec` task in read-only mode and captured its final output.
- [x] (2026-03-03T20:44:40Z) Evaluated the result as a practical pseudo-subagent pattern and closed the task.

## Surprises & Discoveries

The child run behaved like a separate session, but not like a magical isolated subagent. It had a clean prompt context, yet it still inherited the local execution environment and model policy. Evidence:

- it launched as a separate `codex exec` session with its own session id,
- it could only see what was in the repository and what the prompt told it to read,
- it still hit a command-policy rejection on one combined PowerShell read command and had to fall back to simpler single-file reads,
- it observed the current `tasks/todo.md`, so its report reflected the active delegation test already recorded there,
- the output artifact showed one encoding blemish (`â€”`), which is a reminder to keep prompts/output expectations ASCII-friendly when storing child results in plain text files.

## Decision Log

Decision: run the child agent in `read-only` sandbox mode.  
Rationale: this keeps the experiment safe and tests the reporting/delegation pattern without risking concurrent edits from a second agent process.  
Timestamp/Author: 2026-03-03T20:43:09Z / Codex

Decision: use a small report-only prompt against a couple of local files rather than a write task.  
Rationale: the point of this experiment is to validate clean-context delegation, not concurrent file mutation.  
Timestamp/Author: 2026-03-03T20:43:09Z / Codex

Decision: treat child-agent delegation as suitable for narrow read/review/research tasks, not shared-write tasks.  
Rationale: the experiment showed the pattern is viable for producing a small independent report, but concurrent editing would add unnecessary coordination risk and little benefit.  
Timestamp/Author: 2026-03-03T20:44:40Z / Codex

## Outcomes & Retrospective

Completed. A separate `codex exec` process works as a practical clean-context child agent for small delegated tasks if the task is narrow, read-only or report-first, and given an explicit prompt with exact file scope. The child process does not share the parent conversation context, but it does inherit the local execution environment, repo state, and command-policy constraints. That makes it useful for independent review/research passes, not for unconstrained parallel execution.

## Context and Orientation

The parent session already established that the local `codex` CLI supports non-interactive execution via `codex exec`, but does not advertise a first-class `subagent` command. This experiment tests the workaround pattern: run a second Codex process with its own prompt, working directory, and sandbox, then consume the resulting report from the parent session.

Files relevant to the test:

- `AGENTS.md`
- `README.md`
- `tasks/todo.md`

Artifact to capture:

- child agent final output file under `tasks/`

## Terminology and Decomposition

N/A. This is a small execution experiment, not a research/decomposition task.

## Plan of Work

First, add this plan to `tasks/todo.md` as the active task. Then run one `codex exec` child task in `read-only` mode with a very narrow prompt that inspects a few repository files and returns a short report. Capture the child agent's final message to a local file. Finally, read that result, assess whether it behaved like a clean-context child run, and summarize the practical limitations and recommended usage pattern.

## Concrete Steps

From `c:\Users\igork\Desktop\agent`:

1. Update `tasks/todo.md` so this experiment is the active task.
2. Run a command similar to:
   `codex exec --sandbox read-only -C c:\Users\igork\Desktop\agent -o tasks\child-agent-test-output.txt "<narrow prompt>"`
3. Read `tasks\child-agent-test-output.txt` and note whether the output is focused, usable, and free from parent-session assumptions.
4. Update this plan and `tasks/todo.md` with the outcome.

## Validation and Acceptance

This test succeeds if:

1. the child `codex exec` process runs successfully,
2. it produces a final message captured to a file,
3. the task stays read-only and does not modify repository files,
4. the output is coherent enough to be used as a delegated subtask result,
5. the parent session can summarize clear constraints for using this pattern.

## Idempotence and Recovery

The experiment is repeatable. Re-running it should overwrite or replace the child-output artifact. If the child command fails, capture the failure mode and reduce scope rather than widening the child prompt.

## Artifacts and Notes

Initial evidence:

- `codex exec --help` shows a non-interactive entrypoint with `--sandbox`, `--output-last-message`, and `--json`.
- The CLI still does not expose a first-class `subagent` command.

Execution evidence:

- command run:
  - `codex exec --sandbox read-only -C c:\Users\igork\Desktop\agent -o tasks\child-agent-test-output.txt -`
- child prompt scope:
  - read only `AGENTS.md`, `README.md`, and `tasks/todo.md`
  - return exactly three bullets
- observed child behavior:
  - first combined read command was blocked by policy
  - fallback single-file reads succeeded
  - final output was concise and on-scope
- child output summary:
  - correctly identified repository purpose
  - correctly summarized `AGENTS.md`
  - produced a practical observation grounded in the active task recorded in `tasks/todo.md`

Recommended usage pattern from the test:

1. use `codex exec` as a child run only for narrow tasks with explicit file scope,
2. prefer `--sandbox read-only` for review/research passes,
3. capture the child result to a file or stdout and let the parent agent interpret it,
4. avoid delegating concurrent write tasks unless a stronger isolation protocol is added.

## Interfaces and Dependencies

N/A. This is a CLI workflow experiment, not an interface or dependency change.

Change note: 2026-03-03T20:43:09Z - Created the plan for testing clean-context child Codex execution via `codex exec`.
Change note: 2026-03-03T20:44:40Z - Recorded successful child-run execution and documented the practical delegation pattern and limits.
