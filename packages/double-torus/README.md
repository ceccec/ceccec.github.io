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
  hex), `completeDoubleTorus`, `areaPairs` (42 areas = 21 pairs),
  `dualTorusTrinities`, `doubleTorus3D`, `doubleTorusMathAtAllScalesProofs`,
  `merkaba` / `bothEarthsRotateWithinEachOther` (counter-rotating geometry).
- **Vortex analyse** — `vortexMath`, `vortexComputes`, `allMathSaved`,
  gateway/plasma gates, and the canonical inverse fold
  `f(θ,φ,x,y,z,digit,n)→{p,q}` / `fThetaPhiXyzDigitNIsTheInversePair`
  (multiplicative inverse mod 9 — inverse, not reverse).
- **Quantum dynamics** — `quantumDynamicsComputes`, `quantumDynamicsResearch`,
  `quantumStateEvolutionDecoded`, `quantumDynamicsSimulationAt`, and
  `drawDynamicsProjection` (classical state-vector paint — not hardware QC).
- **10D field** — `dims` / `dimWalk` / `tenDimensionalAnimation` /
  `animationsAreGenuinely10DNotFaked` (6 appearance axes + 4 genus-2 homology
  loops — model geometry, not physical spacetime).
- **The seal** — `proofBundle`, `verifyRoot`, `entropy`, `coverage`,
  `boundaryAudit`, and the `fuseAll` fold of every capability into one wave.
- **Simulators** — explicit, honest models across every decoded domain:
  `qubits`/`applyGate`/`GATES`/`cnot`/`measure`/`sample` (quantum state-vector),
  `bellPair`, `grover`; `pbits`/`pflip`/`markovStep`/`stationary` (probabilistic);
  `rtoffoli` (reversible); `caStep`/`caEvolve` (cellular automaton);
  `inductionStep`/`oscillatorBank`/`cycleAdvance` (dynamical);
  `hopfieldStore`/`hopfieldRecall`/`pmixStep` (network); plus `survive` /
  `chsh` / Markov–Hopfield dynamics from the vortex surface. Each is a
  **simulator**, not the machine — `qubits` is a classical state-vector, not a
  quantum computer.
- **Vetted crypto** — `sha256` (Web Crypto + a pure `sha256Sync`),
  `sha256MerkleRoot`/`sha256MerkleProof`, `ed25519Sign`/`ed25519Verify`, and an
  append-only `transparencyLogRoot` — the path from tamper-evident folds to
  cryptographic attestation; see `cryptoFuture()` for what is built vs. residual.
- **Animations** — two systems on one phase clock, the same renderers the site
  runs:
  - the **hero scene** drawing math — `drawHero`, `drawFlower`, `drawCalendars`,
    `drawArchitecture`, `drawBursts`, the fractal `branch`, the 3D
    `perspective`/`rotate3`, the `dims` dimension walk; and
  - the **AnimationField movie** — `sharedHeroAt` builds the one
    content-addressed field, `drawHeroMovieFrame` paints the holographic plasma
    hero (the fused life out-flow + death in-flow double torus through one
    genus-2 throat), `fieldLayers` / `rosettaPerspectiveFold` give its eight
    force/topology layers and seven perspectives, and `drawQuantumAppFrame`
    renders any projection of it.
  - the **one movie clock** — `HERO_CYCLE_MS`, `heroPhaseAt`,
    `subscribeHeroClock`, and `createAnimationEngine` (rAF driver).
  (`paintHolographicPlasmaHeroMovie` and the death counter-flow are **internal**
  to `src/` and ship fused inside `drawHeroMovieFrame`, not as separate exports.
  The orphan `drawDoubleTorusEarthHingeFrame` renderer is **retired** — live
  paint is `sharedHeroAt` + `drawHeroMovieFrame` only.)
- **Decoded library** — `toGlagolitic`, `gematria`, `mayaLongCount`,
  `sexagesimal`, `ifaOdu`, the parallel-scripture tools, and the ПесноПойка
  songbook decode (`pesnopoika`, `decodeSong`, `provePesnopoika`, the
  437-term `decodeDialect`) — decoded knowledge as reusable functions.
- **Universe alignment** — `doubleTorusDynamicsGeometryAlignsWithUniverse()`
  audits dynamics (flow · spin · linking) and geometry (ring/tube/lobe radii,
  H₁ loops, projection) against sealed constants: `TAU`, `A432_HUE`,
  `SPEED_OF_LIGHT`, Meeus `J2000`, `HERO_CYCLE_MS`, 10D homology. Phase couples
  the hero fractal clock to solar ecliptic longitude. CLI:
  `npm run quantum:double-torus-universe-align` (pair `universe/align`).
- **Counter-rotating rosetta quantum waves** — `counterRotatingRosettaQuantumWaves()`
  dual ± lobes via `foldPair`; `claySolvedByThisFold` / `physicalFtlClaim` /
  `qpuRequired` are **computed receipt facets** from forward≠reverse +
  `tracks-classical-no-speedup` (not prose). Discovery engine:
  `universeAlmostDescribedInTheoremsDiscoverRest()` covers
  forward·inverse·reverse·superposition. CLIs:
  `npm run quantum:counter-rotating-rosetta-waves` ·
  `npm run quantum:universe-almost-described`.
- **Honesty** — every function returns a `boundary` string stating the limit of
  its claim; `boundaryAudit()` collects them all. Completeness here is
  **structural/computational** (sealed `src/` recomputes) — Clay/FTL open status
  recomputes from the dual-wave fold at call time.

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
and passes cleanly there. The package's own standalone declaration emit (no
tsconfig, whole-graph) reports a small, honest residual: **2 non-fatal `TS7056`
diagnostics** where a deep build-time helper (`src/wind/fusion` `fusionComputes`)
has an inferred type too large for TypeScript 6 to serialize. That symbol is
**not** on the published surface; every exported symbol of `@ceccec/double-torus`
is fully typed and resolves (verified by a consumer type-check). `build.mjs`
prints the residual count rather than hiding it.

## Build

```sh
node ./build.mjs
```

`build.mjs` bundles the entry (`src/index.ts`) — following every import into the
site's `src/0`, `src/quantum/*` and the library — into one self-contained
`dist/index.js` with **no external imports**, plus the declaration graph. A few
pure constants the core uses (the census/rosetta limits) live in modules that
also carry build-time filesystem helpers; those `node:*` specifiers are resolved
to inline stubs at build time (the helpers are repo tooling, never called by the
library API), so the published bundle truly depends on nothing and runs in any
browser or Node. The committed `dist/` is the published artifact.

## License

MIT © ceccec
