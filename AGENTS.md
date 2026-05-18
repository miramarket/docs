# Documentation project instructions

## About this project

- This is the public documentation site for Miramarket.
- This is a documentation site built on [Mintlify](https://mintlify.com).
- Pages are MDX files with YAML frontmatter.
- Configuration lives in `docs.json`.
- Run `mint dev` to preview locally.
- Run `mint broken-links` to check links.
- The docs focus on the strategy builder, strategy JSON format, and public strategy validation behavior.
- The audience includes external users, developers, and AI agents.

## Terminology

- Use "Miramarket" as the public product name.
- Use "strategy" for a complete automation plan.
- Use "condition" for decision logic.
- Use "action" for capital movement or trade execution.
- Use "decision group" for one condition and the actions it can select.
- Use "recurring market" for an auto-rolling family of markets.
- Use "strategy JSON" for the portable external representation.

## Style preferences

- Use active voice and second person.
- Keep sentences concise.
- Write for humans first, but keep examples structured enough for AI agents.
- Prefer complete JSON examples when documenting strategy objects.
- Use exact JSON field names in code formatting.
- Use sentence case for headings.
- Bold UI labels.
- Use code formatting for JSON fields, literal values, commands, paths, and code references.
- Do not mention internal package names in public docs.

## Content boundaries

- Document the strategy builder, strategy JSON format, validation behavior, and external strategy concepts.
- Do not document Convex internals.
- Do not document backend implementation details.
- Do not document CLI behavior yet. CLI documentation should say "Coming soon."
- Do not document unrelated app, service, monitoring, deployment, or internal testing details.
- If a screenshot would help, add an image placeholder with a clear description for a future screenshot.
