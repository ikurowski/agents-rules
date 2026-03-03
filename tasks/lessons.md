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
