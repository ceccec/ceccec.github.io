---
outline: deep
description: "Command algebra for the double-torus UUID stream: cmd -> result -> receipt."
head:
  - - meta
    - property: og:title
      content: "Command algebra | Double Torus"
  - - meta
    - property: og:description
      content: "Command algebra for the double-torus UUID stream: cmd -> result -> receipt."
---

# Command algebra

<ConceptCommands />

<TaxonomyIcons />

<TrinitySearch />

<BlockchainMusic />

## Law

```text
cmd : repo://x -> result
result := { command, ok, uuid, summary, data }
uuid := UUID(command || ok || JSON(data))
```

## Domain C

`C` is the **live command registry** rendered by the console above and published
as MCP tools at [`/mcp.json`](/mcp.json). It is the single source of truth — the
`concept.commands.live` command proves that every command carries a single-word
method token and an MCP tool, so the set can never silently drift from the docs.

```text
C := { command_i | command_i in conceptCommands }
live(C) := |C| = |methodTokens| = |mcpTools|
```

## Gate

```text
pass(cmd) := result.ok && len(result.uuid) > 0
manual_surface := any(view) where receipt(view) = empty
allow(view) := !manual_surface
gravity(command) := singleWordMethod(command)
fusion := forall cmd in C: gravity(cmd) in /^[a-z]+$/
```
