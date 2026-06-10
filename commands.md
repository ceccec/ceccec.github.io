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

## Law

```text
cmd : repo://x -> result
result := { command, ok, uuid, summary, data }
uuid := UUID(command || ok || JSON(data))
```

## Domain C

```text
C = {
  concept.site.shell,
  concept.self.build,
  concept.self.complete,
  concept.agent.streamWire,
  concept.ui.doubleTorus,
  concept.ui.useCases,
  concept.diamond.lattice,
  concept.diamond.piTrain,
  concept.diamond.complete,
  concept.wave.coordination,
  concept.wave.closeGaps,
  concept.chess.quantum,
  concept.schemaOrg.diamonds,
  concept.traditions.quantumWhole,
  concept.torus.math,
  concept.humanity.implications,
  concept.source.contribute,
  concept.torus.matrix,
  concept.torus.vector,
  concept.torus.flow,
  concept.repository.api,
  concept.repository.resolve,
  concept.proof.verify,
  concept.site.manifest
}
```

## Gate

```text
pass(cmd) := result.ok && len(result.uuid) > 0
manual_surface := any(view) where receipt(view) = empty
allow(view) := !manual_surface
```
