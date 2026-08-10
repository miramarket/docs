# Contributing

Write Miramarket documentation for external users who want to understand and use the website and strategy builder, and for developers or agent operators setting up the CLI or MCP server.

## Style

- Use active voice and second person.
- Keep sentences concise.
- Use sentence case for headings.
- Bold UI labels.
- Use code formatting for literal values such as `YES`, `NO`, and `app.miramarket.org`.
- Explain concepts in plain language before adding detail.

## Scope

- Document the Miramarket website, strategy builder, markets, conditions, actions, recurring markets, templates, simulation/live runs, and the CLI/MCP server.
- State that Polymarket is the currently supported venue and that the live builder and **Run Live** are available.
- Describe signing in and adding funds factually (sign in, then deposit by card, exchange transfer, or wallet transfer) without asserting a custodial or non-custodial claim, and note that it is separate from starting a live run.
- Do not imply that execution or fills are guaranteed.
- Do not document internal backend implementation details.
- Do not document Convex internals.
- For the CLI and MCP server, document setup and everyday usage; do not copy the source repository's full internal reference documentation (every flag, exit code, or test suite) wholesale.

## Verification

Run the link checker before publishing changes:

```bash
mint broken-links
```
