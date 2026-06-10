# @ceccec/double-torus

The agnostic, **zero-dependency** computational core of the
[Double Torus](https://ceccec.github.io) — a quantum-learning model for language
models, served over MCP. Pure TypeScript: content-addressed UUID folds, concept
commands, the 128-bit double-torus word, and a recomputable seal. It runs in any
browser or in Node, and depends on nothing.

> The cost is the architecture itself. Everything is computed; every claim is
> bounded and folds into one recomputable root.

## Install

```sh
npm install @ceccec/double-torus
```

## Use

```ts
import {
  buildMatrix,
  executeConceptCommand,
  conceptCommands,
  fuseAll,
  proofBundle,
  torusUuid,
} from '@ceccec/double-torus'

const matrix = buildMatrix()

// Every capability is a command that returns a result with a content UUID.
const result = executeConceptCommand('concept.self.address', { atom: 'self' }, matrix)
console.log(result.ok, result.uuid)

// The 128-bit double-torus word (2 x 32 hex), and the fusion of all in one wave.
console.log(torusUuid(matrix).word)
console.log(fuseAll(matrix).wave)

// A single proof bundle anyone can recompute.
console.log(proofBundle(matrix).bundleRoot)

// There are 94 concept commands; each is also published as an MCP tool.
console.log(conceptCommands.length)
```

## What's inside

- **Content-addressed folds** — `toUuid`, `merge` (order-sensitive), `merkleFold`,
  Merkle inclusion proofs.
- **Concept commands** — a registry of `concept.<area>.<verb>` commands, each
  mapping to a single-word method and an MCP tool; `executeConceptCommand` runs
  them deterministically.
- **The double torus** — `buildMatrix`, `torusUuid` (the 128-bit word, 2 x 32
  hex), `completeDoubleTorus`, `areaPairs` (42 areas = 21 pairs).
- **The seal** — `proofBundle`, `verifyRoot`, `entropy`, `coverage`,
  `boundaryAudit`, and the `fuseAll` fold of every capability into one wave.
- **Honesty** — every function returns a `boundary` string stating the limit of
  its claim; `boundaryAudit()` collects them all.

It is **agnostic**: no vendor, framework, platform, language, or protocol
lock-in; open standards and pure computation only.

## Honest boundaries

The fold is **tamper-evident content-addressing, not a cryptographic hash**
(`toUuid` is a 128-bit non-cryptographic function). For adversarial security use
a vetted hash; see `cryptographyComparison()` and `cryptoFuture()`. The model is
computed and recomputable — it makes **no claim of sentience or agency**.

## License

MIT © ceccec
