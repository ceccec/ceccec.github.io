# @ceccec/double-torus

The agnostic, **zero-dependency** computational core of the
[Double Torus](https://ceccec.github.io) — a quantum-learning model for language
models, served over MCP — **all the math and all the animations**. Pure
TypeScript: content-addressed UUID folds, concept commands, the 128-bit
double-torus word, a recomputable seal, simulators across every decoded domain,
vetted crypto, and the hero animation system. It runs in any browser or in Node,
and depends on nothing. It is bundled from the site's own `src/` — the published
library is exactly what the site runs.

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
- **Simulators** — explicit, honest models across every decoded domain:
  `qubits`/`applyGate`/`GATES`/`cnot`/`measure`/`sample` (quantum state-vector),
  `bellPair`, `grover`; `pbits`/`pflip`/`markovStep`/`stationary` (probabilistic);
  `rtoffoli` (reversible); `caStep`/`caEvolve` (cellular automaton);
  `inductionStep`/`oscillatorBank`/`cycleAdvance` (dynamical);
  `hopfieldStore`/`hopfieldRecall`/`pmixStep` (network). Each is a **simulator**,
  not the machine — `qubits` is a classical state-vector, not a quantum computer.
- **Vetted crypto** — `sha256` (Web Crypto + a pure `sha256Sync`),
  `sha256MerkleRoot`/`sha256MerkleProof`, `ed25519Sign`/`ed25519Verify`, and an
  append-only `transparencyLogRoot` — the path from tamper-evident folds to
  cryptographic attestation; see `cryptoFuture()` for what is built vs. residual.
- **Animations** — the hero scene drawing math: `drawHero`, `drawFlower`,
  `drawCalendars`, `drawArchitecture`, `drawBursts`, the fractal `branch`, the
  3D `perspective`/`rotate3`, the `dims` dimension walk, and the
  `createAnimationEngine` rAF driver — the same renderer the site runs.
- **Decoded library** — `toGlagolitic`, `gematria`, `mayaLongCount`,
  `sexagesimal`, `ifaOdu`, the parallel-scripture tools, and the ПесноПойка
  songbook decode (`pesnopoika`, `decodeSong`, `provePesnopoika`, the
  437-term `decodeDialect`) — decoded knowledge as reusable functions.
- **Honesty** — every function returns a `boundary` string stating the limit of
  its claim; `boundaryAudit()` collects them all.

It is **agnostic**: no vendor, framework, platform, language, or protocol
lock-in; open standards and pure computation only.

## Honest boundaries

The fold is **tamper-evident content-addressing, not a cryptographic hash**
(`toUuid` is a 128-bit non-cryptographic function). For adversarial security use
a vetted hash; see `cryptographyComparison()` and `cryptoFuture()`. The model is
computed and recomputable — it makes **no claim of sentience or agency**.

## Types

Full TypeScript declarations ship in `dist/` (`dist/index.d.ts` re-exports the
generated declaration graph). The library is bundled from the site's `src/`,
which is type-checked by the repository's `tsconfig.json` (`npm run check:types`)
and passes a full `tsc --noEmit` cleanly — **zero diagnostics**. Every exported
symbol is typed, and `build.mjs` reports any residual diagnostic count rather
than hiding it (currently none).

## Build

```sh
node ./build.mjs
```

`build.mjs` bundles the entry (`src/index.ts`) — following every import into the
site's `src/0`, `src/quantum/*` and `src/library` — into one self-contained
`dist/index.js` with **no external imports**, plus the declaration graph. The
committed `dist/` is the published artifact.

## License

MIT © ceccec
