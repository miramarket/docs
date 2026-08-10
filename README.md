# Miramarket Docs

This repository contains the public documentation site for Miramarket.

The docs focus on:

- Using the Miramarket website and app
- Building strategies with the visual strategy builder
- Understanding markets, conditions, actions, and simulation/live runs
- Helping non-technical users get started safely
- Setting up and using the CLI and MCP server for developers and AI agents

## Local preview

```bash
mint dev
```

## Link check

```bash
mint broken-links
```

## Content scope

Do not document internal backend implementation details, Convex internals, or service operations. Public product docs must identify Polymarket as the currently supported venue and treat the live builder and **Run Live** as available.

Signing in and adding funds (by card, exchange transfer, or wallet transfer) does not start a live run. Never imply that execution or fills are guaranteed.

For the CLI and MCP server, document setup and everyday usage; do not copy the source repository's full internal reference documentation wholesale.
