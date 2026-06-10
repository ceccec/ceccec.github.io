---
outline: deep
description: "Алгебра на командите за двойния тор UUID поток: cmd -> result -> receipt."
head:
  - - meta
    - property: og:title
      content: "Алгебра на командите | Двоен тор"
  - - meta
    - property: og:description
      content: "Алгебра на командите за двойния тор UUID поток: cmd -> result -> receipt."
---

# Алгебра на командите

<ConceptCommands />

<TaxonomyIcons />

## Закон

```text
cmd : repo://x -> result
result := { command, ok, uuid, summary, data }
uuid := UUID(command || ok || JSON(data))
```

## Област C

`C` е **живият регистър от команди**, изобразен от конзолата по-горе и публикуван
като MCP инструменти на [`/mcp.json`](/mcp.json). Той е единственият източник на
истина — командата `concept.commands.live` доказва, че всяка команда носи
еднословен метод-токен и MCP инструмент, така че множеството никога не може
безшумно да се разминава с документацията.

```text
C := { command_i | command_i in conceptCommands }
live(C) := |C| = |methodTokens| = |mcpTools|
```

## Порта

```text
pass(cmd) := result.ok && len(result.uuid) > 0
manual_surface := any(view) where receipt(view) = empty
allow(view) := !manual_surface
gravity(command) := singleWordMethod(command)
fusion := forall cmd in C: gravity(cmd) in /^[a-z]+$/
```
