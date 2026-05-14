# Research market-advice agent skill

This ExecPlan is a living document. Keep it only as detailed as the task requires.

## Purpose

Research how to design a dedicated agent/skill for market and portfolio analysis, where to place it in this markdown-first skill repository, and how to use it without overstepping into unreliable or regulated personalized financial advice.

Done means there is a source-backed recommendation with placement, proposed skill structure, use workflow, limits, and validation steps.

## Progress

- [x] (2026-05-14T14:56:55Z) Started.
- [x] (2026-05-14T14:59:21Z) Evidence collected and decision brief drafted.
- [x] (2026-05-14T14:59:21Z) Validation and close-out completed.

## Decision Log

Decision: Treat this as research and architecture guidance, not immediate skill implementation.  
Rationale: The user asked to use `deep-researcher` to decide what kind of agent to create and where to place its skills. Creating the skill before confirming boundaries would risk encoding the wrong advisory behavior.  
Timestamp/Author: 2026-05-14T14:56:55Z / Codex

Decision: Name and scope the future skill as market/portfolio research, not as a financial adviser.  
Rationale: Current regulatory and investor-protection sources consistently distinguish analysis and tools from personalized securities recommendations, which can trigger best-interest, fiduciary, registration, disclosure, and suitability concerns.  
Timestamp/Author: 2026-05-14T14:59:21Z / Codex

## Evidence

Question-to-Evidence Matrix:

| Primary Question | Sub-Question | Claim | Source | Date | Why | Evidence Quality | Notes |
|---|---|---|---|---|---|---|---|
| How should a dedicated market-advice agent be designed? | Regulatory boundary | Investment advisers are persons/firms that provide securities advice for compensation, and advisers generally must act in the client's best interest and register with the SEC or state authorities. | https://www.investor.gov/introduction-investing/getting-started/working-investment-professional/investment-advisers | verified 2026-05-14 | Sets the boundary between personal research aid and regulated advisory service. | strong | Applies directly to US context; other jurisdictions still need checks. |
| How should a dedicated market-advice agent be designed? | Automated advice | Robo-advisers that recommend investments are typically registered investment advisers and are subject to fiduciary obligations under the Advisers Act. | https://www.sec.gov/newsroom/press-releases/2017-52 | 2017-02-23, verified 2026-05-14 | Automated delivery does not remove advisory obligations. | strong | Older but still authoritative; reinforced by 2024 internet adviser reforms. |
| How should a dedicated market-advice agent be designed? | Current digital adviser rules | Internet adviser exemption reforms require operational interactive websites for ongoing digital advisory services and compliance by 2025 dates. | https://www.sec.gov/newsroom/internet-investment-adviser-registration-reforms | 2024-03-27, updated 2024-04-04 | Shows regulators are actively tightening digital adviser rules. | strong | Relevant if the agent becomes a service for others. |
| How should a dedicated market-advice agent be designed? | AI risks | FINRA/SEC/NASAA warn investors not to rely solely on AI-generated investment information because it can be inaccurate, incomplete, misleading, or fabricated. | https://www.finra.org/investors/insights/artificial-intelligence-and-investment-fraud | 2024-01-25, verified 2026-05-14 | Supports mandatory source checks and anti-impulsivity workflow. | strong | Investor alert, not a binding rule. |
| How should a dedicated market-advice agent be designed? | EU/Poland relevance | ESMA expects AI use in investment services to comply with MiFID II, including organization, conduct, and client-best-interest obligations. | https://www.esma.europa.eu/press-news/esma-news/esma-provides-guidance-firms-using-artificial-intelligence-investment-services | 2024-05-30 | Relevant if the user or deployment is EU-facing. | strong | Initial guidance, not a full implementation checklist. |
| How should a dedicated market-advice agent be designed? | AI system controls | NIST AI RMF is intended to help manage AI risks across design, development, use, and evaluation; NIST GenAI profile highlights confabulation, privacy, over-reliance, and information-integrity risks. | https://www.nist.gov/itl/ai-risk-management-framework and https://doi.org/10.6028/NIST.AI.600-1 | 2023-01-26 and 2024-07 | Provides non-finance-specific guardrails for agent design. | strong | Voluntary framework, useful as engineering standard. |
| How should a dedicated market-advice agent be designed? | Portfolio context | Automated investment tools may miss age, financial situation, other holdings, taxes, risk tolerance, time horizon, cash needs, and goals. | https://www.finra.org/investors/insights/automated-investment-tools | verified 2026-05-14 | Defines intake fields the agent must request before portfolio analysis. | adequate | Older investor alert but still consistent with current best-interest sources. |

## Validation

- Confirm repo structure and skill conventions from local files.
- Use current authoritative external sources for financial-advice guardrails and AI-tool risk.
- Check that the final recommendation separates research/analysis from regulated personalized advice.

## Outcome

Recommend creating a repo skill under `skills/market-research-analyst` or `skills/portfolio-researcher`, with a lean `SKILL.md`, `references/guardrails.md`, `references/intake.md`, `references/source-quality.md`, and optionally deterministic scripts only after real repeated needs appear.

For auto-discovery outside this repository, copy or create the finalized skill under `$CODEX_HOME/skills` or `~/.codex/skills`. For versioned project governance and iteration, keep the canonical copy in this repository under `skills/*`.

The skill should enforce a workflow that collects objective, time horizon, risk tolerance, jurisdiction, tax wrapper/account type, holdings, liquidity needs, constraints, and desired output before generating portfolio conclusions. It should cite current sources, avoid guaranteed returns and one-line buy/sell calls, separate facts from judgment, and end with decision options plus risks and what evidence would change the view.
