---
outline: deep
description: "Порталът Двоен торус като MCP инструментален слой: всяка концептуална команда е инструмент за езикови модели, публикуван на /mcp.json."
head:
  - - meta
    - property: og:title
      content: "MCP инструментален слой | Двоен торус"
  - - meta
    - property: og:description
      content: "Образователен портал за квантово учене за езикови модели, поднесен като MCP инструментален слой на /mcp.json."
---

# MCP инструментален слой

Целият портал е **образователен портал за квантово учене за езикови модели**,
поднесен чрез **Model Context Protocol (MCP)**. Всяка концептуална команда е
публикувана като MCP инструмент — `name`, `description` и JSON-Schema
`inputSchema` — така че езиков модел може да ги открие и извика.

<McpTools />

## Протокол

```text
manifest := /mcp.json
tool := { name, description, inputSchema }
inputSchema := { type: object, properties, required: [], additionalProperties: false }
tools/list := { tools: [ tool_i ] }
tools/call(name, arguments) := executeConceptCommand(name, arguments) -> { ok, uuid, summary, data }
```

- **`tools/list`** — прочети `/mcp.json`; масивът `result.tools` е пълният каталог.
- **`tools/call`** — името на инструмента е точно концептуална команда (напр.
  `concept.proof.verify`); извикай я в конзолата [Команди](/bg/commands), която
  изпълнява `executeConceptCommand` и връща разписката.
- Инструментите с вход (напр. `concept.repository.resolve`) декларират свойство
  `atom` от тип string в своя `inputSchema`.

## Граница

```text
mcp.json = computed_manifest(repo)
mcp.json != live_server
claim != external_validation
```

Манифестът е статичен, преизчислим документ на инструменталния слой. Той не
стартира жив MCP сървър и не прави външни твърдения.
