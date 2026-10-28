# Documentation project instructions

## About this project

- This is the public documentation site for Miramarket.
- This is a documentation site built on [Mintlify](https://mintlify.com).
- Pages are MDX files with YAML frontmatter.
- Configuration lives in `docs.json`.
- Run `mint dev` to preview locally.
- Run `mint broken-links` to check links.
- The docs focus on non-technical guidance for using the Miramarket website, home page, strategy assistant, and strategy builder, plus setup guidance for the CLI and MCP server.
- The audience includes external users who want to build and test strategies without writing code, and developers or agent operators setting up the CLI or MCP server.

## Terminology

- Use "Miramarket" as the public product name.
- Use "strategy" for a complete plan built in the strategy builder.
- Use "market" for a prediction market question.
- Use "outcome" for a market side, usually `YES` or `NO`.
- Use "perp" for a perpetual future on Hyperliquid, and `LONG` or `SHORT` for its side.
- Use "condition" for a rule that decides when the strategy should act.
- Use "action" for what the strategy does after a rule is met. The action that moves funds back to the wallet is **Exit**; it and **Hold** sit under **Utils** in the **Condition** tab.
- Use "recurring market" for a market family that repeats over time.
- Use "strategy assistant" for the chatbox that builds strategies from plain English, and "featured strategy" for a ready-made strategy on the home page. Templates were removed from the app; do not document them.
- Use "Run Simulation" for simulated runs.
- Use "Run Live" for runs that can use real funds.
- State that Polymarket is the currently supported prediction market venue, and that tokenized stocks on Base and perps on Hyperliquid are also supported as separate, non-prediction-market assets priced in dollars.
- The app root (`app.miramarket.org`) is the home page; the canvas is at `app.miramarket.org/builder`.
- Treat the live builder and **Run Live** as available features, not future features.

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

- Document the Miramarket website, home page, featured strategies, strategy assistant, strategy builder, markets, stocks, perps, conditions, actions, recurring markets, glossary terms, simulation/live behavior, and CLI/MCP setup and usage.
- Do not document Convex internals.
- Do not document backend implementation details.
- For the CLI and MCP server: document installation, authentication, account setup, and the everyday command/tool surface a user or agent needs. `cli.mdx` is that summary. `cli-reference.mdx` is the one page that carries the full command reference (flags, JSON shapes, exit codes) so agents have a single fetchable source; keep it factual and do not copy test/CI documentation or internal implementation notes from the source repository's own READMEs.
- Describe signing in and adding funds factually (sign in, then deposit by card, exchange transfer, or wallet transfer) without asserting a custodial or non-custodial claim, and note that it is separate from starting a live run.
- Do not imply that execution or fills are guaranteed. When you document perps, state that leverage magnifies losses and that a position can be liquidated.
- Do not document unrelated app, service, monitoring, deployment, or internal testing details.
- If a screenshot would help, use a real app screenshot with a clear highlight or caption.
