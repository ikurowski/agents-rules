# Deep Research Industry Terms for Canonical Questions

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `PLANS.md`. Keep the document self-contained so a novice can execute it from this file alone.
If a required section is not applicable, keep the section and write `N/A` with a one-sentence rationale.

## Purpose / Big Picture

User asked for deep research on industry-standard terminology equivalents for legacy internal wording around question decomposition and scope control. Outcome should provide a source-backed mapping to terms used in recognized domains (systems engineering, agile delivery, and research/evidence workflows), with recommendation on which vocabulary to adopt.

## Progress

- [x] (2026-02-10T20:22:23Z) Started task and refreshed required session context files.
- [x] (2026-02-10T20:24:10Z) Collected primary sources across Scrum, Kanban, NASA, NIST, SEBoK, and evidence-synthesis methods.
- [x] (2026-02-10T20:25:40Z) Built term-by-term mapping to industry vocabulary with confidence.
- [x] (2026-02-10T20:26:20Z) Prepared final recommendation and documented outcome in `tasks/todo.md`.

## Surprises & Discoveries

- Early finding: there is no single cross-industry formal standard that uses one universal terminology set for all question-decomposition workflows.
- Distinction emerged between formal standards vocabulary (e.g., `derived requirement`, `requirements traceability`) and delivery-process vocabulary (e.g., `work item`, `impediment`, `WIP limit`), which should not be mixed without context labels.

## Decision Log

Decision: Treat this as non-trivial deep-research work and create a dedicated ExecPlan.
Rationale: Task requires multi-source evidence synthesis and recommendation rather than a quick lexical substitution.
Timestamp/Author: 2026-02-10T20:22:23Z / Codex

Decision: Use domain-triad framing for terminology mapping: systems engineering, agile delivery, and research methods.
Rationale: User workflow combines requirements traceability, execution control, and question decomposition.
Timestamp/Author: 2026-02-10T20:23:40Z / Codex

Decision: Recommend a primary canonical set rooted in systems-engineering + research terms, with delivery aliases only when required by context.
Rationale: This provides stronger formal grounding while still matching day-to-day delivery language.
Timestamp/Author: 2026-02-10T20:25:55Z / Codex

## Outcomes & Retrospective

Completed. Produced source-backed mapping of legacy internal wording to industry vocabulary and identified which labels are standard vs common practice. Recommended canonical terms for external-facing docs:

- `Primary Question`
- `Sub-question`
- `Question-to-Evidence Matrix`
- `Entry Criteria`
- `Impediment`

## Context and Orientation

Legacy wording was discussed in conversation and needed canonical replacement for future maintainability.

Repository context:

- Prior research and naming decisions are tracked in `tasks/todo.md` and recent plans.
- This task was research-only and did not require immediate skill file edits.

## Plan of Work

1. Gather authoritative sources defining nearest industry terms.
2. Evaluate each legacy label against at least two domains.
3. Propose recommended canonical wording for repository usage.
4. Report confidence and unresolved ambiguity.

## Concrete Steps

1. Web-search and open primary sources:
   - Scrum Guide 2020,
   - Kanban Guide / Kanban University materials,
   - NASA SWE Handbook entries (traceability/requirements),
   - NIST glossary entry for derived requirement,
   - SEBoK (issue and requirement viewpoints),
   - Cochrane/AHRQ for question decomposition terminology.
2. Extract term definitions and map to canonical wording.
3. Produce final recommendation table and confidence notes.
4. Update `tasks/todo.md` with completed outcome.

## Validation and Acceptance

Acceptance criteria:

1. Final response lists concrete industry terms for each workflow concept (question decomposition, matrix, entry criteria, blocker handling).
2. Each mapping is backed by source references with links.
3. Response clearly states what is standard vs common-but-informal usage.
4. Recommendation includes one preferred vocabulary set for consistency.

Validation evidence:

- Presence of mapping table in final response.
- Linked sources from standards/official guides.

## Idempotence and Recovery

Research steps are repeatable with same queries. If a source page is inaccessible, replace it with another primary source from the same domain and document the substitution.

## Artifacts and Notes

Collected source set includes:

- Scrum Guide 2020 PDF (`scrumguides.org`)
- Kanban University glossary pages for WIP and work item
- NASA SWE traceability and requirement pages
- NIST glossary for derived requirement
- SEBoK issue definition page
- Cochrane and AHRQ pages for key question/research question structure

Evidence links used in synthesis:

- Scrum Guide PDF: `https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-US.pdf`
- Kanban guide (workflow commitment point / work items / WIP concept): `https://resources.kanban.university/guide/the-official-kanban-guide`
- Kanban glossary (`work item`): `https://resources.kanban.university/glossary/work-item`
- Kanban glossary (`work in progress`): `https://resources.kanban.university/glossary/work-in-progress`
- NASA SWE-052 bidirectional requirements traceability (RTM context): `https://swehb.nasa.gov/display/SWEHBVD/SWE-052+-+Bidirectional+Requirements+Traceability`
- NIST glossary (`derived requirement`): `https://csrc.nist.gov/glossary/term/derived_requirement`
- SEBoK issue definition: `https://sebokwiki.org/wiki/Issue`
- AHRQ methods guidance (`key questions`, PICOTS): `https://effectivehealthcare.ahrq.gov/products/methods-guidance-reviews/methods`
- Cochrane handbook chapter on defining review questions and criteria: `https://training.cochrane.org/handbook/current/chapter-03`

## Interfaces and Dependencies

N/A - Research output only; no runtime interfaces or dependencies are changed.

Change note: 2026-02-10T20:22:23Z - Created plan for deep research on industry terminology mapping.
