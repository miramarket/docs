# Documentation project instructions

## About this project

- This is the public documentation site for Miramarket.
- This is a documentation site built on [Mintlify](https://mintlify.com).
- Pages are MDX files with YAML frontmatter.
- Configuration lives in `docs.json`.
- Run `mint dev` to preview locally.
- Run `mint broken-links` to check links.
- The docs focus on non-technical guidance for using the Miramarket website and strategy builder.
- The audience includes external users who want to build and test strategies without writing code.

## Terminology

- Use "Miramarket" as the public product name.
- Use "strategy" for a complete plan built in the strategy builder.
- Use "market" for a prediction market question.
- Use "outcome" for a market side, usually `YES` or `NO`.
- Use "condition" for a rule that decides when the strategy should act.
- Use "action" for what the strategy does after a rule is met.
- Use "recurring market" for a market family that repeats over time.
- Use "Run Demo" for simulated runs.
- Use "Run Live" for runs that can use real funds.

## Style preferences

- Use active voice and second person.
- Keep sentences concise.
- Write for humans first.
- Use sentence case for headings.
- Bold UI labels.
- Use code formatting for literal values such as `YES`, `NO`, URLs, and commands.
- Do not mention internal package names in public docs.
- Prefer screenshots and short captions over technical explanations.

## Content boundaries

- Document the Miramarket website, strategy builder, markets, conditions, actions, recurring markets, glossary terms, and demo/live behavior.
- Do not document Convex internals.
- Do not document backend implementation details.
- Do not document command line behavior yet. CLI documentation should say "Coming soon."
- Do not document unrelated app, service, monitoring, deployment, or internal testing details.
- If a screenshot would help, use a real app screenshot with a clear highlight or caption.
