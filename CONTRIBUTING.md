# Contributing

Write Miramarket documentation for external users, developers, and AI agents.

## Style

- Use active voice and second person.
- Keep sentences concise.
- Use sentence case for headings.
- Bold UI labels.
- Use code formatting for exact JSON field names and literal values.
- Prefer complete JSON examples when documenting strategies.

## Scope

- Document the strategy builder, strategy JSON format, and public validation behavior.
- Do not document internal backend implementation details.
- Do not document Convex internals.
- Do not document CLI behavior yet. Use "Coming soon." for CLI pages.

## Verification

Run the link checker before publishing changes:

```bash
mint broken-links
```
