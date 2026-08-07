# Contributing

Write Miramarket documentation for external users who want to understand and use the website and strategy builder.

## Style

- Use active voice and second person.
- Keep sentences concise.
- Use sentence case for headings.
- Bold UI labels.
- Use code formatting for literal values such as `YES`, `NO`, and `app.miramarket.org`.
- Explain concepts in plain language before adding detail.

## Scope

- Document the Miramarket website, strategy builder, markets, conditions, actions, recurring markets, templates, and simulation/live runs.
- State that Polymarket is the currently supported venue and that the live builder and **Run Live** are available.
- Describe signing in and adding funds factually (sign in, then deposit by card, exchange transfer, or wallet transfer) without asserting a custodial or non-custodial claim, and note that it is separate from starting a live run.
- Do not imply that execution or fills are guaranteed.
- Do not document internal backend implementation details.
- Do not document Convex internals.
- Do not document command line behavior yet. Use "Coming soon." for CLI pages.

## Verification

Run the link checker before publishing changes:

```bash
mint broken-links
```
