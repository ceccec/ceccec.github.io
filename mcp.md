---
outline: deep
description: "The Double Torus portal as an MCP tool surface: every concept command is a tool for language models, published at /mcp.json."
head:
  - - meta
    - property: og:title
      content: "MCP tool surface | Double Torus"
  - - meta
    - property: og:description
      content: "A quantum-learning educational portal for language models, exposed as an MCP tool surface at /mcp.json."
---

# MCP tool surface

The whole portal is a **quantum-learning educational portal for language models**,
exposed through the **Model Context Protocol (MCP)**. Every concept command is
published as an MCP tool — a `name`, a `description`, and a JSON-Schema
`inputSchema` — so a language model can discover and call them.

<McpTools />

## Protocol

```text
manifest := /mcp.json
tool := { name, description, inputSchema }
inputSchema := { type: object, properties, required: [], additionalProperties: false }
tools/list := { tools: [ tool_i ] }
tools/call(name, arguments) := executeConceptCommand(name, arguments) -> { ok, uuid, summary, data }
```

- **`tools/list`** — read `/mcp.json`; its `result.tools` array is the full tool catalog.
- **`tools/call`** — the tool `name` is exactly a concept command (e.g.
  `concept.proof.verify`); call it on the [Commands](/commands) console, which
  runs `executeConceptCommand` and returns the receipt.
- Tools that take input (e.g. `concept.repository.resolve`) declare an `atom`
  string property in their `inputSchema`.

## Boundary

```text
mcp.json = computed_manifest(repo)
mcp.json != live_server
claim != external_validation
```

The manifest is a static, recomputable document of the tool surface. It does not
run a live MCP server and makes no external claims.
