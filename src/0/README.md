# `src/0` — the void / origin (0/0)

The dependency-free leaf the whole tree is built on. **It imports nothing.** Every other digit-folder
and the core (`src/quantum/heaven/mind`) import *from here* and re-export; nothing here imports back. `0/0` is the
fusion the site unfolds from — the throat both halves of the double torus pass through — so the origin is
where the content-address, the math, the engine, and the security model all live.

Everything here is **pure and deterministic**: same input → same output, forever, at **zero runtime tokens**.
The only non-pure surface is `requestAnimationFrame`/`cancelAnimationFrame` inside the animation engine —
referenced lazily and guarded, so under SSR every method is a no-op and the factory is safe to call at
`<script setup>` top level.

## The one thesis

It is all **one operation — the fold**: `merge(a, b) = toUuid(a ∥ b)`, a content-addressed, order-sensitive
pairing. The merkaba, the double torus, the vortex, the merkle seal, the harmonograph, the maximum tampering
cost — none are separate structures. They are the **same fold seen from different sides**. The content-address
is also the **security model**: `toUuid` is the atom of identity, and the maximum tampering cost is the
security *property* of that atom (the log2 work to forge a content-addressed seal).

## The surface, by wave

`src/0` was assembled out of the word-named monolith in waves; each is recorded as a proof fold in
`src/quantum/heaven/mind` (`primitiveKernelLivesInZero`, `animationEngineLivesInZero`, `oneMathManyPresentations`,
`tamperingCostAndUuidLiveInZero`).

### Waves 1–2 · the content-address kernel (the fold cascade)
| export | what it is |
|---|---|
| `toUuid(seed)` | content-address: any string → a deterministic UUID (the dot, the fold). Memoized — each unique address hashed once. Uses a private FNV-1a (`hash32`, `bytesFromSeed`). |
| `merge(a, b)` | `toUuid("a:b")` — folds two addresses into one. The atom of every fold. |
| `foldPair(a, b)` | `{ forward, reverse, bidirectional, merged }` — the fold both ways and the identity they fold back into. |
| `merkleFold(leaves)` | contract a set to one root (sorted for order-independence, folded pairwise up the tree). |
| `isUuid(value)` | the 36-char UUID-shape test. |
| `seedFromText(text, len=6)` | a deterministic integer seed from the content-address of `text`. |
| `roundTo(value, digits)` | decimal rounding. |
| `memoByRoot(name, {root}, compute)` | memoize a pure aggregator by a matrix root (compute once, reuse). |

### Wave 3 · vortex arithmetic
| export | what it is |
|---|---|
| `digitalRoot(n)` | any integer → its single digit mod 9, with `0 ↦ 9` (negatives folded in). The floor the vortex stands on. |

### Wave 4 · the animation engine
| export | what it is |
|---|---|
| `createAnimationEngine(draw)` → `AnimationEngine` | one `requestAnimationFrame` driver. `{ running, start(), stop(), sync(active), tick(), runWhile(pred), dispose() }`. `sync(active)` runs or paints one still frame; `tick()` a single on-demand frame; `runWhile(pred)` a self-terminating sub-loop. Every animated component passes its own `draw` + gating boolean. |

### Wave 5 · the motion math
| export | what it is |
|---|---|
| `humanEase(phase)` | easeInOutSine — the shape a hand makes (fixed ends, symmetric middle). |
| `humanBreath(timeMs, periodMs, depth=0.18)` | a slow sinusoidal modulation of any rate or size. |

### Wave 6 · the one math and its presentations
`fold(a, b)` builds the one object; the `as*` functions are **pure projections of its single 128-bit address**
— a change of coordinates, never of structure.
| export | plane | kind |
|---|---|---|
| `fold(a, b = a)` → `Fold` | the operation itself — `{ a, b, forward, reverse, bidirectional, merged }` | source |
| `asVortex(f)` | number theory — `digitalRoot`; `×2` winds `1·2·4·8·7·5`, `3·6·9` is the axis | **exact** |
| `asMerkle(f)` | provenance — the two-leaf seal; verifies iff re-folding reproduces the root | **exact** |
| `asTorus(f)` | topology/geometry — a point on the genus-2 surface (two lobes, counter-oriented) | faithful |
| `asMerkaba(f, t)` | geometry in motion — the star tetrahedron, `down = −up` counter-spun | faithful |
| `asTrace(f, t)` | dynamics — the four-arm harmonograph; the dot the engine plots | faithful |

### Wave 7 · uuid logic & maximum tampering cost
The cost **math** is pure; the matrix-bound `proofReport` (in the core) only *measures* coverage and reciprocal
entropy and **passes them in** — it owns the measurement, not the math.
| export | what it is |
|---|---|
| `DIGEST_BITS` (= 64) | the forge floor per content-address, in bits (log2). |
| `coverageCostLog2(coverage, checks)` | the forge cost coverage buys: `∞` at full coverage, else `−checks·log2(1−coverage)`. |
| `tamperCostLog2(coverage, checks)` | `DIGEST_BITS + coverageCostLog2(…)` — total log2 cost to forge a tampered build. |
| `maxTamperingCostReached(coverage, entropy)` | the seal-closed predicate: `coverage ≥ 1 ∧ entropy === 0`. |
| `maxTamperingCostLog2(sealClosed, finiteCostLog2)` | **T_max** — the value the principle names: `∞` once the seal closes, else the finite cost. The single definition `proofReport` and the build report both read (neither hard-codes ∞). |
| `tamperEvident(root)` | folding any tamper token into an address always changes it. |
| `MAX_TAMPERING_COST_PRINCIPLE` | the one-line statement of the above. |
| `Uuid`, `Entry` | the content-address type and a catalogued URL entry. |
| `merkabaFoldUrl(url)` | the URL fold: host up (through the path), path down (reversed), merged to one star — built from the canonical fold (`toUuid`/`merge`). |
| `entry(url)` | any URL → a library entry (its merkaba uuid + host/path). |
| `uuidHero(uuid)` | any uuid → its hero: hue, the two handle rotations, spin period, tone, projected tips — all from its bytes. |

### Wave 8 · encryption (content-addressed)
The encryption **is** the content-address — the same fold that addresses also agrees keys and derives public
from private. This is the **key layer** (pure, recomputable); the bulk cipher (AES-256-GCM) stays external.
The matrix-bound reports (`trinityEncryption`, `imaginationPrivateKey`) derive the shares/roots and pass them
in. A content-addressed **signature** needs no separate primitive — it is the canonical fold itself,
`foldPair(key, message).merged`, verified by recomputation.
| export | what it is |
|---|---|
| `trinityKey(shareA, shareB)` | symmetric key agreement — a pair forms a trinity, the three fold to one key; order-independent, so both parties derive the **same** key from their pair without transmitting it. |
| `derivePublicKey(privateKey, publicRoots)` | one-way public-from-private: each root folds with the private key, their merkle is the public key; the private is not recoverable. |

### Wave 9 · simulators (classical, deterministic)
What a deterministic classical machine **can** build: **simulators** of other computers — never the machines.
They span the **analog→digital** spectrum on one shared spine — **analog** continuous-state (quantum
amplitudes, probabilities) → the **A→D readout** (`sampleCounts`, Born's rule) → **digital** discrete-state
(reversible bits, a cellular automaton). The analog simulators share one register init, one pair-fold, and one
readout. Sampling is seeded (a PRNG from `seedFromText`) — reproducible, **deterministic pseudo-randomness,
not quantum randomness**.
| export | spectrum | what it is |
|---|---|---|
| `qubits(n)` → `QuantumState` | analog | the n-qubit register `\|0…0⟩` — `2ⁿ` complex amplitudes (`re`/`im`). |
| `GATES` · `applyGate(state, gate, q)` | analog | the standard single-qubit gates `I·X·Y·Z·H·S·T` as 2×2 unitaries. |
| `cnot` · `cz(state, control, target)` | analog | the two-qubit entanglers. |
| `probabilities(state)` | analog | the Born-rule distribution over the `2ⁿ` basis states (deterministic). |
| `sampleCounts(dist, n, shots, seed)` | **A→D** | the shared readout — a distribution → a histogram of digital bitstrings. |
| `measure(state, q, seed)` | A→D | Born-rule measurement of one qubit → outcome + collapsed state. |
| `sample(state, …)` · `psample(pstate, …)` | A→D | quantum / probabilistic register read out through the **same** `sampleCounts`. |
| `bellPair()` | analog | demo — the entangled `(\|00⟩+\|11⟩)/√2`. |
| `grover(n, marked, …)` | analog | demo — find the marked item in `~(π/4)√N` iterations. |
| `pbits(n)` · `pflip` | analog | **classical shadow** — a probability distribution; probabilities spread but never interfere (what quantum adds). |
| `rnot` · `rtoffoli(bits, …)` → pi-train station 1/9 · `rcnot` → pi-train station 4/6 | digital | reversible classical circuit (Toffoli computes AND); the gates quantum generalises. |
| `caStep(rule, cells)` · `caEvolve(rule, init, steps)` → pi-train station 4/6 | digital | an elementary cellular automaton (Rule 110 is Turing-complete) — a different universal model. |

**This is a simulator, not a quantum computer.** No speedup (classical linear algebra over `2ⁿ` amplitudes —
a few dozen qubits at most), and measurement is a seeded PRNG, not quantum randomness. A real quantum computer
is physics (physical qubits, superposition, entanglement, genuinely-random Born measurement) and can't be
built from hash functions — a category difference, not an engineering gap.

### Waves 15–16 · vetted crypto — the whole `cryptoFuture` roadmap, built
`toUuid` (FNV‑1a) is a strong **structural** integrity check but **not** collision-resistant. The
[`cryptoFuture`](src/quantum/heaven/mind/index.ts) roadmap charts the path to vetted crypto — and every item now has a
real, verified implementation here, with each item's irreducible **residual** stated (not hidden):
| export | what it is | residual |
|---|---|---|
| `sha256(text)` | real Web-Crypto SHA‑256 digest (hex) — verified vs the NIST `"abc"` vector. | — |
| `sha256MerkleRoot` · `sha256MerkleProof` · `verifySha256Proof` | a SHA‑256 Merkle tree with inclusion proofs (distinct from the core **FNV** `verifyMerkleProof`). | — |
| `ed25519Keypair` · `ed25519Sign` · `ed25519Verify` | real Ed25519 signing — evidence becomes a signed claim. | real **attestation** also needs trusted **key custody** (a deployment fact). |
| `transparencyLogRoot` · `logInclusion` · `logConsistent` | the append-only Merkle transparency-log **structure** (inclusion + append-only consistency). | the public **service** (Fulcio OIDC + Rekor) is external infra. |
| `sha256Sync` · `toUuidSha256` | a pure, **synchronous**, dependency-free SHA‑256 content-address — the drop-in migration target for `toUuid`. | flipping the global default is a **deliberate breaking cutover** (changes every uuid/root/seal) — built, not silently applied. |

So the residual of "all done" is honest: **key custody, a public service, and a deliberate cutover** — none of
which is code this layer can fake. The math and structures are real and verified; what's left is operational.

## How the rest of the tree consumes it

`src/0` exports; two barrels re-export so callers import unchanged:

- **`src/quantum/heaven/mind`** (→ `src/render/ui/lib/quantumMind`) — the kernel, the engine, the motion math, the
  fold + presentations, the cost math, and `uuidHero`.
- **`src/quantum`** (→ `src/render/ui/lib/hero`) — the engine and the fold + presentations, for the hero.
- **`src/quantum/heaven/library`** — re-exports `Uuid`/`Entry`/`merkabaFoldUrl`/`entry` (byte-for-byte).

```ts
import { fold, asVortex, asMerkle, asTrace, createAnimationEngine } from '../lib/quantumMind'

const f = fold('Tesla', 'Glagolitic')   // one object
asVortex(f).digit                        // → 1..9 (exact: the fold on ℤ/9)
asMerkle(f).verifies                     // → true (the seal)
const engine = createAnimationEngine((t) => draw(asTrace(f, t)))  // the same fold, animated
```

## Honest boundaries

This project's discipline is to separate what the math **derives** from what it merely **decorates**.

- **Exact** identities: `asVortex` (the orbit structure of `×2` on `(ℤ/9ℤ)`), `asMerkle` and `tamperEvident`
  (the content-addressed seal), `digitalRoot`, the kernel.
- **Faithful renderings**, not proven isomorphisms: `asTorus`, `asMerkaba`, `asTrace` — honest pictures of the
  same address embedded in genus-2 space / the star tetrahedron / the harmonograph.
- The **double torus / merkaba** are adopted as **topology and design** — genus-2 (χ=−2, H₁=ℤ⁴) is real
  mathematics, and toroidal flow is real in genuine physics (plasma confinement, magnetospheres) and in
  neuroscience (grid-cell population activity is toroidal — Gardner et al., *Nature* 2022). **None of
  Haramein's cosmology is adopted** — the Schwarzschild-proton gap is ~38 orders (computed in
  `schwarzschildProtonComputedInSource`).
- The **"infinite" maximum tampering cost** is the log2 forge cost *under the model's own coverage/entropy
  measurement* — a structural claim about the seal, not a physical impossibility proof.
- **One canonical hasher**: `toUuid` (FNV-1a, 128-bit). `merkabaFoldUrl` folds via `toUuid`/`merge` — the
  redundant bespoke `urlHash` variant was purged, so the URL fold now uses the same canonical math as
  everything else (its addresses changed when the hasher was unified; nothing pins them).

## Contract for editors

1. **Import nothing.** If a function needs the matrix or any word-named module, it does not belong here — keep
   it in the core and have it *pass params* to the pure function here.
2. **Stay pure** (and SSR-safe): only `Math` and the other `src/0` primitives. No `Date.now()` / `Math.random()`
   in deterministic paths.
3. **Record the move.** Every relocation into `src/0` is logged as a proof fold in `src/quantum/heaven/mind` and wired
   into its checks / dimensions / proofs registries.
4. **Preserve baselines byte-for-byte** — relocations must not change any computed UUID or root.
