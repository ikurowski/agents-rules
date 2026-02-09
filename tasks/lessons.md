# Lessons Learned

Record significant user corrections and how they were fixed. Add entries only when the correction creates a reusable prevention rule.
Operational threshold: treat a correction as significant only when it adds or changes a prevention rule likely reusable in future tasks; skip one-off style preferences.

## Entry Template

- Timestamp: YYYY-MM-DDTHH:MM:SSZ
- Context: _what I was doing_
- Mistake: _what went wrong_
- Root cause: _why it happened_
- Fix: _what was changed_
- Prevention rule: _how to avoid this next time_

## Entries

- Timestamp: 2026-02-09T02:30:00Z
- Context: _I introduced a lightweight ExecPlan format and user asked for a stricter, self-contained plan style._
- Mistake: _I under-scoped the required level of detail and lifecycle tracking for ExecPlans._
- Root cause: _I optimized for minimal process overhead before validating preferred plan rigor with the user._
- Fix: _I upgraded `PLANS.md` and `tasks/plans/_template.md` to a living-document, novice-guiding ExecPlan standard and clarified `todo` vs `plans` responsibilities._
- Prevention rule: _When defining planning standards, confirm the target rigor level early and default to explicit, self-contained templates for complex work._

- Timestamp: 2026-02-09T03:20:00Z
- Context: _I was asked to normalize temporal fields across repository docs._
- Mistake: _I initially kept mixed date and timestamp conventions in some records and file naming guidance._
- Root cause: _I focused first on structural workflow changes and deferred full temporal normalization._
- Fix: _I migrated labels to `Timestamp`, converted date-only values to ISO UTC timestamps, and updated plan filename conventions to timestamp-based naming._
- Prevention rule: _When a formatting standard is requested, apply it repository-wide in one pass and verify with explicit regex checks._

- Timestamp: 2026-02-09T02:37:00Z
- Context: _I proposed adding an operational startup checklist to `README.md` during workflow ergonomics updates._
- Mistake: _I mixed onboarding documentation with operational execution policy._
- Root cause: _I optimized for discoverability but underweighted strict responsibility boundaries between policy and onboarding docs._
- Fix: _I moved startup sequence guidance to `AGENTS.md` (`Session Start`) and kept `README.md` onboarding-only._
- Prevention rule: _Do not place operational instructions in `README.md`; keep execution behavior in `AGENTS.md` and structure rules in `PLANS.md`._

- Timestamp: 2026-02-09T02:41:55Z
- Context: _I made a second commit without an explicit user command while continuing documentation changes._
- Mistake: _I executed `git commit` without direct authorization in the current session._
- Root cause: _I prioritized task momentum over strict commit-gating by user intent._
- Fix: _I reset `HEAD` to remove the unauthorized commit and kept changes uncommitted for user control._
- Prevention rule: _Never commit unless the user explicitly requests a commit in the current session._
