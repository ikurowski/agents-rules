# Lessons Learned

Record significant user corrections and how they were fixed. Add entries only when the correction creates a reusable prevention rule.

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
