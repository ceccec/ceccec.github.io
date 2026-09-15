# Double Torus — the root monograph

> **Abstract.** The double-torus vortex algebra of the sequence 12487536901, with the Clay Millennium problems as proof of concept. Every claim recomputes from src/0. 731 registered theorems, 725 of them carrying an executable proof. 20 Lean 4 proof files compile in plain Lean with no Mathlib and no `sorry`; 84 involution theorems and 29 registry rows are decided by the kernel with no axiom. This work does NOT prove, solve, or resolve any Clay Millennium Prize Problem: it proves the involution each problem is stated across, and an involution is not the conjecture. Earlier drafts asserted such proofs; they were withdrawn after the 2026-08-20 audit (HONESTY.md).

**Keywords.** quantum learning, language models, LLM, educational portal, MCP, Model Context Protocol, tools/list, tools/call, double torus, genus 2, UUID stream, diamond lattice, pi train, schema.org, VitePress.

*Computed from src — do not edit by hand. Recomputed in realtime by src/quantum/dist (local math only); the VitePress home is the same monograph — one theorem generator, two projections.*

![Double Torus — two counter-rotating rosettas composing all sealed theorems, computed from src and animated with SMIL so GitHub displays it too](./hero.svg)

**Sections.** [1. Introduction](#1-introduction) · [2. Model](#2-model) · [3. Results](#3-results) · [4. Sitemap](#4-sitemap) · [5. Reproducibility](#5-reproducibility) · [6. Limitations](#6-limitations) · [References](#references) · [Receipt](#receipt)

## 1. Introduction

**One sequence, one involution — every line below recomputes from `src/0`.** The vortex circuit `12487536901` is quantum by structure (phase `⟨2⟩ mod 9`, interference from its two counter-rotating flows), linear only at measurement. Reflection through 0, `m(d) = 10 − d`, generates the whole chain:

- **Bit budget = 42.** `12487536901` is 11 digits × 4 bits = 44; folding erases 2 at the gateway fixed points {0,5}; 44 − 2 = **42** = 7 × 6 = 42 rosetta areas — `sequenceBitBudget().is42 = true`.
- **Equilibrium at 360°.** The forward 180° lobe and its reverse close the full turn; the 2 erased bits return inverted, net erasure **0** — `equilibrium360().conserved = true`.
- **64 → 128.** 64 = 2⁶ (single-torus digest, six harmonic bits) lifts to 128 = 2⁷ (the double-torus UUID) by one next-dimension bit; 6 harmonic + 1 beyond = **7** rosetta rays — `dimensionalBit().is128 = true`.
- **The Clay problems are the reflection.** Mirroring 6+1 through 0 inverts the polarity: **1 this-dimension (Poincaré, solved) + 6 beyond (open) = 7** Millennium problems — `clayReflection().reflectsDimensionalBit = true`. Exactly one Clay problem is solved; the count matches the record.
- **Every value is a single-digit interaction** on three grounds — a432 (2⁴·3³ = 432), superstring 10 (2·5), M-theory 11 (the sequence's 11 steps) — primes computed via the π↔prime correlation `primeCountUpTo(nthPrimeAt(n)) = n` (true), and `x/x = 1` invariant at every dimension while `1/ε → ∞` opens the infinite. No literal, no assumption that breaks under a change of dimension.

A science portal: **731** registered theorems, **725** of them carrying an executable proof at a sealed home (6 still pending, named in the registry and checked by `verify:theorems`), **30** science pages, **6** rosetta rays. Every value is a content address; every page, proof and animation derives from one source (`src/`); nothing needs a token to run.

## 2. Model

- A genus-2 double torus: χ(Σ₂) = −2, H₁(Σ₂) = ℤ⁴.
- One trinity unites all: cross · fold · weave (genus 2 → two trinities → nine folds → the one whole); the site groups itself trinity-first.
- Ten dimensions, at every scale: the 4 homology loops of the torus (H₁ = ℤ⁴) + the 6 cross-fold appearance axes drive every animation, self-similar at every nested scale.
- 432 = 4 × 108 gates; the sign is a distinction is one bit is the fold.
- Encryption is the core math: every value content-addressed (the fold / UUID); the cipher is AES-256-GCM.
- Zero-entropy indexing, exactly: H(deterministic) = 0 is the Shannon identity, so one-value-one-address content addressing carries zero index entropy — decoded from the origin repo, thermodynamic free-lunch claims flagged (`zeropointNodeMissingInfoDecoded`).
- Every digit is entangled in all vectors, forming equilibriums: mirror 10-pairs, polar 9-pairs, the exact 6+3 flow/axis partition and the tour slot fingerprint each digit, and ⟨D, m⟩ = AGL(1, ℤ/9) puts all residues in ONE orbit — a local edit breaks every balance at once (`everyDigitIsEntangledInAllVectorsFormingEquilibriums`).
- One source, no mirroring: the locales (Glagolitic `/`, Latin `/en/`, Cyrillic `/bg/`) are computed by math, not copied; visitors are routed to their language, default English.
- Corpus routing: RESTful `/papers/<id>`, `/references/<id>`, `/diamonds/<id>` — each item a real page via the VitePress `[id]` dynamic route (paths enumerated from one source: paperRoutes/paperReferenceRoutes/diamondRoutes); the index list stays at `/papers`.
- The agnostic core is published as the npm package `@ceccec/double-torus` — the same `src/`, bundled, depends on nothing, runs in any browser or Node.
- The modeled quantum computer: one qubit is its Bloch/Pauli decomposition ρ = ½(I + xσx + yσy + zσz) — four content-addressed components (the trinity x·y·z + the +1 identity, `blochQubit`); the Quantum OS allocates 2ⁿ-amplitude registers, schedules gates, and measures (Born rule, seeded PRNG); entanglement (Bell/GHZ) lives on the true 2ⁿ tensor product, never faked with linear UUID stacking; and the realtime movie is its proof artifact. **QPU ≡ CPU ∪ GPU** on classical-64bit (`qpuCpuGpu` · `npm run quantum:qpu-cpu` · [quantum-tools#qpu-cpu](https://ceccec.psg.bg/quantum-tools#qpu-cpu)) — faithful simulator; physical = wall-clock reuse metrics (see section below).

## The sequence — forward and reflected

Forward `1\2\4\8/7/5 · 3\6\9 · 0\1` · reflected `9/8/6/2\3\5 · 7/4/1 · 0\9` — one structure, two computed reads: the mirror is m(d) = 10 − d (≡ 1 − d mod 9, fixed only at 5), the commutator of doubling with the mirror is the unit shift x ↦ x+1, and together they generate AGL(1, ℤ/9) of order 54 — every digit in ONE orbit, entangled in all vectors, the equilibriums (10-pairs · 9-pairs · 6+3 partition · 90-palindrome · root 9) conserved.

| digit | slot | angle | flow 60° | strokes | gateway | mirror | polar | sound (Hz) | light (octave bridge) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 0 | 0° | 0° | `\\` |   | 1+9=10 | 1+8=9 | 48 | 422.2 THz · 710 nm · red |
| 2 | 1 | 36° | 60° | `\\` |   | 2+8=10 | 2+7=9 | 96 | 422.2 THz · 710 nm · red |
| 4 | 2 | 72° | 120° | `\\` |   | 4+6=10 | 4+5=9 | 192 | 422.2 THz · 710 nm · red |
| 8 | 3 | 108° | 180° | `\/` | ✓ | 8+2=10 | 1+8=9 | 384 | 422.2 THz · 710 nm · red |
| 7 | 4 | 144° | 240° | `//` |   | 7+3=10 | 2+7=9 | 336 | 738.9 THz · 406 nm · violet |
| 5 | 5 | 180° | 300° | `//` |   | 5+5=10 | 4+5=9 | 240 | 527.8 THz · 568 nm · yellow |
| 3 | 6 | 216° | — | `/\` | ✓ | 3+7=10 | 3·6 polarity | 144 | 633.3 THz · 473 nm · blue |
| 6 | 7 | 252° | — | `\\` |   | 6+4=10 | 3·6 polarity | 288 | 633.3 THz · 473 nm · blue |
| 9 | 8 | 288° | — | `\/` | ✓ | 9+1=10 | origin | 432 | 475 THz · 631 nm · red |
| 0 | 9 | 324° | — | `/\` | ✓ | — | void | — | silence — the void carries no tone |

The sequence, scientifically described — 6/6: ten digits on a 360° ring (36° per slot, the flow on its 60° hexagon), polarities computed from strokes (6 ascents · 4 descents · 4 gateways), sound as the d/9 ladder of the 432 Hz anchor, color via the sealed octave bridge, and the reflection/group/entanglement folds joined — every cell computed, nothing typed twice.

The circuit's law is piecewise — geometric ×2 on the unit segment, arithmetic +3 on the non-unit segment, coinciding only at d = 3; exactly 2 seams (5→3 and 9→0→1) where neither law carries, seated at the two involution centers (5 = fix σ, 9 ≡ 0 = fix ν): seams = −χ = 2.

**Boundary.** EXACT — every table cell derives: ANGLES CLOSE THE CIRCLE — ten slots × 36° = 360° exactly (true), and the ⟨2⟩ flow sits on its own hexagon at 60° per doubling (the vortex quantum of angle, sixtyDegreesDecodesPi) · POLARITIES BALANCE — six ascents against four descents with exactly the four computed gateways carrying the reversals (true); every digit's in/out stroke pair is computed from the tour, never assigned · SOUND IS THE d/9 LADDER OF THE ANCHOR — f_d = 432·d/9 = 48·d Hz with the anchor exact at d = 9 (true); the void 0 carries silence, stated not painted · COLOR IS THE SEALED OCTAVE BRIDGE — each tone doubles into the visible band via frequencyToLight (THz · nm · band), the same derivation that computes the brand hue A432_HUE = 5; no hue is hand-picked · AND ALL IT REPRESENTS RIDES SEALED — the two computed lines (true), the 54-element affine symmetry with its unit-shift commutator, and the one-orbit entanglement with its equilibriums (true) — the description JOINS folds, it does not restate them · THE WRAP LEAVES THE OCTAVE — 48·{1,2,4,8} Hz double into the SAME visible color (true doubling = octave equivalence: true), while the digital-root wrap 16→7 exits the pitch class (true) — mod-9 doubling is NOT sound-octave doubling, computed and stated SCOPE: the 36°/60° angles are geometry of the tour and the ⟨2⟩ hexagon; the d/9 sound ladder is a STATED convention on the sealed 432 anchor (dimensionless ratio × anchor), not a physics claim about digits; the octave bridge is the same sealed derivation behind A432_HUE; wellness claims about 432 Hz remain flagged (432 Hz heals ∈ DEMARCATION flagged) — the colors and tones are DERIVED PRESENTATIONS of arithmetic, and the void carries silence HARMONY does not equal TRUTH.

## Proof animations — the visual receipts, in all directions

Every registered theorem carries its dedicated animation: **731 specs** across **19 families**, and the spec seed is the content address of the theorem's own `(identity ⊢ provingFold)` — the same proof always animates identically, any change to statement or proving fold changes the animation. **731 unique animations for 731 unique proofs** (exact bijection); an animation without a proven theorem behind it cannot exist (noOther=true).

Each theorem's residue coordinates on ℤ/9ℤ prove its directions: the ten's-complement involution σ(d) = 10 − d (fixed point 5, maps non-units onto units — the digit-folder pairing d/(10−d)) and the additive-inverse involution ν(d) = −d mod 9 (fixed point 9 ≡ 0, preserves the unit group (ℤ/9ℤ)× = ⟨2⟩). Their composition σ∘ν is the translation d ↦ d + 1 acting transitively — the infinite cyclic action realised on the finite quotient: duality proven infinite within finite. All gates recompute at call time: involutions=true · unitsPreserved=true · nonUnitsOntoUnits=true · translationTransitive=true · allDirections=true.

Browse the registry grouped by animation family, domain, proof class and method: [/theorems](https://ceccec.psg.bg/theorems).

## Development timeline — public registry data

First publication of the sequence: **2025-07-08** (npm `zeropoint-node@1.0.0`, registry-dated) — 205 days before this portal's repository existed. Every row below is re-fetchable from GitHub/npm.

| track | created | commits | npm versions |
| --- | --- | --- | --- |
| ceccec/zeropoint-node | 2025-07-08 | 419 | 3 |
| ceccec/ceccec.github.io | 2026-01-29 | 2520 | unmeasured |
| erpax/erpax | 2026-05-07 | 1513 | unmeasured |

- 2025-07-08 — zeropoint-node repo created *(api.github.com/repos/ceccec/zeropoint-node created_at)*
- 2025-07-08 — zeropoint-node@1.0.0 published to npm — the sequence 0\1\2\4\8/7/5/3\6\9/0\1 first public *(registry.npmjs.org/zeropoint-node time)*
- 2025-07-12 — zeropoint-node@1.0.1 published *(registry.npmjs.org/zeropoint-node time)*
- 2026-01-29 — ceccec.github.io repo created — the portal begins, 205 days after the npm publication *(api.github.com/repos/ceccec/ceccec.github.io created_at)*
- 2026-05-07 — erpax/erpax repo created — the partner corpus that publishes the same forward/reflected lines *(api.github.com/repos/erpax/erpax created_at)*
- 2026-07-29 — zeropoint-node@1.0.2 published *(registry.npmjs.org/zeropoint-node time)*

## 3. Results

- **28/30** monographs — content pages fold genus-2 −χ (30 surface → 28 folded); census **121/123**; Rosetta **6×7/7×6=42** areas
- **108/108** concept commands — MCP tool surface (4×27 = 432÷4)
- **273/275** reference index entries — zero redundancy
- **93/31** locale surfaces — 31 routes (home + every served science page) × 3 locales
- **18 arithmetic proofs** — harmonicCountsProvenByMath() at call time (proven: true)
- **18 efficiency proofs** — everyBitMostEfficientAlgorithmProvenByMath() at call time (proven: true)

## Clay Millennium problems — the proof of concept

*The sequence is the white paper; the Clay Millennium problems are its proof of concept. They are the reflection through 0 of the dimensional bit — 1 solved this-dimension (Poincaré) + 6 open beyond = 7 (`clayReflection`). Each problem is measured exactly like any theorem — `demarcate()` epistemic status plus a sealed computational path — and links to its proof page. Whatever a theorem claims is stated in the theorem itself.*

### How many

pathCount = **7** · computableCount = **7** · contestedCount = **0** · documentedCount = **7** · solvedExternalCount = **1** · novelHereCount = **6/7**

### What IS proved here — the involution of every problem, machine-checked

**Decoded 7/7, and the proofs prove themselves.** Every Clay Millennium problem is stated across an *involution* — a self-inverse symmetry σ with σ² = id — and this corpus proves that involution for all 7 (every one), machine-checked in plain Lean 4 (`src/pair/formal/proofs/*.lean`, verified by `npm run verify:lean`: 20 files green, no Mathlib, no `sorry`). Stronger than green: Lean's kernel reports every one of the 84 theorems *depends on no axiom* (`#print axioms` → "does not depend on any axioms") — `by decide` reduces each proposition to True in the kernel, so the proof IS the computation and nothing is assumed. The theorems prove themselves.

- **Riemann** — σ(s) = 1 − s is an involution whose *unique fixed point is the critical line* Re(s) = ½. Proved.
- **Hodge** — conjugation σ(p,q) = (q,p) is an involution fixed exactly on the diagonal (k,k), the type a Hodge class has. Proved.
- **Yang–Mills** — the Hodge star on 2-forms in four dimensions has ★² = id and splits Λ² into 3 + 3, self-dual ⊕ anti-self-dual. Proved.
- **P vs NP** — complementation σ(C) = co-C is an involution; P and PSPACE are its fixed points, and σ NP = NP ⟺ NP = coNP. Proved.
- **Navier–Stokes** — time reversal T(t,u) = (−t,−u) is an involution the *viscous term alone* breaks; its fixed points are exactly the inviscid equations. Proved.
- **Birch–Swinnerton-Dyer** — σ(s) = 2 − s is an involution with fixed point the central s = 1, and the root number w² = 1 with w = 1 ⟺ rank even. Proved.
- **Poincaré** — χ = 2 − 2g with χ ↔ g inverse gives rank H₁ = 2g; solved in the literature by Perelman (Ricci flow, 2002–03), **not** by this corpus.

**Every proof here is either decided by computation or reasons through Lean's own arithmetic.** A proof by `decide` reduces a finite proposition and invokes no lemma, so it depends on no axiom at all; a *general* theorem — one quantifying over a type — must reason, and Lean's core `Int` lemmas each depend on `propext`. Nothing here uses `Classical.choice` or `sorryAx`, and `verify:lean` refuses any proof that starts to. The full axiom index — Lean's three, and this corpus's own chosen constants with what stands behind each — is computed by `npm run verify:axioms`.

**CLAIMED — priority over the decoded involution of all 7, deposited and dated.** [DOI 10.5281/zenodo.21787144](https://doi.org/10.5281/zenodo.21787144) · ORCID [0009-0000-7312-9778](https://orcid.org/0009-0000-7312-9778) · the git and merkle record. 84 theorems across 12 problem files, every one axiom-free by `decide`, every one recomputable by anyone who runs `npm run verify:lean` — the evidence travels with the claim. Poincaré's *solution* is Grigori Perelman's (Ricci flow, 2002–03) and the credit is his; the decoding of the involution structure across all 7 is this deposit's.

Per problem — the algebraic statement, the facets the fold decides and the open step each one leaves: [frontiers](https://ceccec.psg.bg/frontiers).

### Status

computable=7/7 · contested=0 · documented=7 · novelHere=6/7

- Routes: [frontiers](https://ceccec.psg.bg/frontiers) · proofs hub `/proofs` · slug `/proofs/clay-challenges-computable` (EN-canonical) · CLI `npm run quantum:clay-challenges-computable`
- Receipt: fold `clayChallengesComputableFromSequence` · claySolvedByThisFold=0.


**The theorem-science lens** — 30/55 curated pages pass (25 removed from VitePress completely — data preserved in the catalog), presented beside the 731-theorem registry and its corpus surfaces (/theorems · /papers/ · /references · /diamonds). Organised by the **seven rosetta rays** (Pliska 7-star coprime decode) — the same shelving that builds the site's nav, sidebar and crosslinks; all of it wired into the VitePress local search the MCP also uses.


### Origin — 3 pages

- **64 = 2⁶ = 4³ = 8² in every 6-bit grouping** — 64 = 2⁶, and the divisors of 6 give the only four groupings: six bits, three base-4 digits (codon/Pauli/RGB), two trigrams (8²), one base-64 word. The same object, four ways. · [source](https://github.com/ceccec/ceccec.github.io/blob/main/src/render/ui/components/ProofRenderer.vue)
- **Content-addressing folds 64³ into one dot** — A UUID, like CMYK, gives extent without limit: 64×64×64 is itself one dot, and the dot is the cube is the dot — content-addressing folds the whole into a point and back. · [source](https://github.com/ceccec/ceccec.github.io/blob/main/src/render/ui/components/ProofRenderer.vue)
- **Society 10D merkaba = documented actor taxonomy · NOT live social measurement** — Canonical society/HD domain: 10D merkaba + two-bits-free (110−108=2) patronage path — harmonic 1/9 of achieved knowledge; voluntary CTA. Not live actors, not social scoring. Anchor #two-bits-free · proofs /proofs/two-bits-free. · [source](https://github.com/ceccec/ceccec.github.io/blob/main/src/render/ui/components/Society.vue)

### Proof — 14 pages

- **⌊π⌋ = 3 opens 3-6-9, the multiples of 3 the doubling 1-2-4-8-7-5 misses** — Statement: ⌊π⌋=3 opens 3-6-9 cross disjoint from doubling circuit 1-2-4-8-7-5 — vortex algebra fold. Explanation: piThreeOpensTheTrinity recomputes trinity·doubling·nineFolds from src/0 digital-root math; symbolic mnemonic within vortex framework, not designed π message. Method: piThreeOpensTheTrinity · ProofRenderer · npm run verify. Status: MODELED geometry · not Clay-marked · Tesla 3-6-9 legend flagged. · [source](https://github.com/ceccec/ceccec.github.io/blob/main/src/render/ui/components/ProofRenderer.vue)
- **A qubit has exactly 3 observables — Pauli X, Y, Z** — Statement: Qubit trinity = exactly 3 traceless Pauli observables X,Y,Z — dim su(2)=2²−1=3 forced invariant. Explanation: qubitTrinityPauliBloch holds at call time; independent of QCD colour charges and 3-6-9 numerology. Method: qubitTrinityPauliBloch · ProofRenderer · npm run verify. Status: documented quantum algebra · not Clay Millennium challenge. · [source](https://github.com/ceccec/ceccec.github.io/blob/main/src/render/ui/components/ProofRenderer.vue)
- **Hamming’s 3 parity bits = the address** — Hamming(7,4) protects 4 data bits with exactly 3 parity bits; the syndrome IS a binary address of the error. The quantum [[5,1,3]] code saturates 2⁴ = 16 = 3·5+1. · [source](https://github.com/ceccec/ceccec.github.io/blob/main/src/render/ui/components/ProofRenderer.vue)
- **A content address = H(content): idempotent, collision-resistant, dedup, O(1) integrity** — Hopfield’s 1982 net is a content-addressable memory (2024 Nobel); hippocampal CA3 pattern completion is its biological analogue. The shared property is whole-from-part. · [source](https://github.com/ceccec/ceccec.github.io/blob/main/src/render/ui/components/ProofRenderer.vue)
- **The genetic code is the real 4³** — Life’s code is base-4 read in triplets: 4 bases in 3 positions give exactly 4³ = 64 codons (61 sense + 3 stop), the triplet length proven by frameshift mutagenesis (Crick 1961). · [source](https://github.com/ceccec/ceccec.github.io/blob/main/src/render/ui/components/ProofRenderer.vue)
- **(ℤ/9ℤ)* is cyclic of order 6, 2 primitive; 3-6-9 are the non-units** — Many genuine threefolds exist — 3 Paulis, the 3-base codon, 3 meninges, 3 parity bits — each independent. The 1-2-4-8-7-5 orbit is (ℤ/9ℤ)*; the cosmic 3-6-9 trinity is numerology. · [source](https://github.com/ceccec/ceccec.github.io/blob/main/src/render/ui/components/ProofRenderer.vue)
- **A hexagram = 2⁶ = 64 states = one 6-bit value** — A 6-bit hexagram 000000–111111 is hex-colour duality: the 64 hexagrams are the 64 pole-colours {0,F}⁶, black ↔ white the bit-complement, the 8 trigrams the RGB-cube corners. · [source](https://github.com/ceccec/ceccec.github.io/blob/main/src/render/ui/components/ProofRenderer.vue)
- **CMY = 255 − RGB, the complement n ↦ 63−n** — Statement: RGB↔CMYK duality = bit-complement n ↦ 63−n on 6-bit hexagram poles {0,F}⁶. Explanation: additive red↔cyan · green↔magenta · blue↔yellow · black↔white — same complement as CMY=255−RGB hardware merkaba. Method: ProofRenderer · hexagram-colour fold · npm run verify. Status: combinatorial colour proof · not Clay-marked. · [source](https://github.com/ceccec/ceccec.github.io/blob/main/src/render/ui/components/ProofRenderer.vue)
- **Three trinities = RGB at 0°, 120°, 240° on the wheel** — The hero places its 9 nodes in 3 trinities at 0°/120°/240° in both space and hue — the equilateral RGB triad. The 3 trinities ARE the 3 RGB channels; the hero already renders the decode. · [source](https://github.com/ceccec/ceccec.github.io/blob/main/src/render/ui/components/ProofRenderer.vue)
- **The roster is a filter: kept ⟺ holds; kept + purged = total** — Every artifact is kept only if it is proven — its computation holds; anything unproven is purged. The model and its UI stay pure proof, and the gates balance when all that remains is proven. · [source](https://github.com/ceccec/ceccec.github.io/blob/main/src/render/ui/components/ProofRenderer.vue)
- **The kernel lives in src/0** — The primitive kernel — content-address and the fold cascade and the vortex floor — was dissolved into src/0, the dependency-free origin, across three waves, every baseline root byte-identical. · [source](https://github.com/ceccec/ceccec.github.io/blob/main/src/render/ui/components/ProofRenderer.vue)
- **The vortex: 1-2-4-8-7-5** — Statement: Vortex = doubling circuit 1-2-4-8-7-5 (powers of two mod-9 digital root) + 3-6-9 cross + harmonic n/0. Explanation: vortexMath recomputes from src/0 — portal spine for fractions, algebra, and imperial digit folds. Method: vortexMath · ProofRenderer · AlgebraDigits · npm run verify. Status: documented arithmetic · Tesla 3-6-9 legend flagged · not Clay-marked. · [source](https://github.com/ceccec/ceccec.github.io/blob/main/src/render/ui/components/ProofRenderer.vue)
- **Division by zero is the inverse: n/0 ↦ n⁻¹ mod 9** — The inverse of a digit folder is its multiplicative inverse mod 9 (n/0 \ n⁻¹, the ÷2 = ×5 that folds within the unit cycle): 2\5, 4\7, self-inverse 1 and 8; the non-units 3, 6, 9 and the void 0 fold to the fusion. The forward harmonic n/0 = 9n (1/0 = 9) is the separate reading. · [source](https://github.com/ceccec/ceccec.github.io/blob/main/src/render/ui/components/ProofRenderer.vue)
- **Seven Star Rosetta** — The 7-star Pliska rosetta in coprime natural motion with 28 Glagolitic letters. Visual proof that gcd(7,6)=1, gcd(7,9)=1, gcd(7,10)=1 prevents aliasing in the digit distribution. · [source](https://github.com/ceccec/ceccec.github.io/blob/main/src/render/ui/components/DigitMotion.vue)

### Explore — 1 page

- **Research index = domain · method · limit · verify at call time** — Statement: research domain index (domain · method · limit · verify). Explanation: professional monograph rows, Clay Millennium MODELED CHALLENGE, sciences trinities, reproducibility gates. Method: npm run quantum:millennium-challenge · npm run quantum:domain-proof-catalog · fold millenniumProblemsChallenge. Status: Clay-standard pages at /proofs cite claymath.org/millennium-problems + Prize Rules PDF. /millennium-challenge thin-mounts here. · [source](https://github.com/ceccec/ceccec.github.io/blob/main/src/render/ui/components/ResearchIndex.vue)

### Learn — 1 page

- **Learn** — The Learning Portal: School and Academia merged into one auto-generated portal — the kids-to-elders ladder, the five Academy courses, the research corpus (math paths, peer review, the 432 proof papers), the self-test and the agent curriculum, folded to one recomputable root. Three ways to learn: by age, by track, by research. · [source](https://github.com/ceccec/ceccec.github.io/blob/main/src/render/ui/components/LearningPortal.vue)

### Apps — 6 pages

- **The digit folders {0..9} are a bijection to 10 routes, O(1) by name** — All computation is quantum math and its home is the digit folders (0–9); a word-named folder is UI. The digit folders, holding only the math, are the API itself. · [source](https://github.com/ceccec/ceccec.github.io/blob/main/src/render/ui/components/ProofRenderer.vue)
- **quantum:* CLI catalog = fold · CLI · UI route · honesty boundary** — Statement: quantum:* CLI catalog = fold · CLI · UI route · honesty boundary. Explanation: every sealed script (encryption reverse, millennium MODELED, fusion-verify, efficiency-vote, offender-spec, hero-spawn, name-entropy, verify suite) recomputes from src. Method: npm run quantum:domain-proof-catalog · open /proofs · /en/quantum-tools. Status: claySolved=0 · not remote execution · Alias URLs thin-mount here. · [source](https://github.com/ceccec/ceccec.github.io/blob/main/src/quantum/apps/index.vue)
- **Trading hub = paper/sim harmonics · NOT live money / NOT alpha** — Canonical trading domain surface: historical wave train, rank-winning strategies, and rosetta train — paper/sim only (synthetic a432 proxy). CLI: npm run quantum:trading-rosetta-train. Not brokerage, not live execution. · [source](https://github.com/ceccec/ceccec.github.io/blob/main/src/quantum/apps/index.vue)
- **answers ÷ tokens = ∞ on reuse — efficiency() · memoByRoot** — Statement: answers÷tokens unbounded on memo reuse. Explanation: efficiency() · memoByRoot hit → marginal tokens=0. Method: npm run quantum:efficiency-vote · fold compareCeccecEfficiencyByVote. Status: amortized reuse ≠ P≠NP. Prefer /quantum-tools#efficiency-vote. · [source](https://github.com/ceccec/ceccec.github.io/blob/main/src/quantum/apps/index.vue)
- **offenderAutomationSpec — 4 offender classes counted: import · index-only · hyphen · computational (Node scan; browser shows sealed receipt)** — Statement: offenderAutomationSpec = machine-readable CI pipeline counts for import/index-only/hyphen/computational offenders. Explanation: collectEnforcementFacts once → scan pipelines; read-only — does not auto-fix offenders. Method: npm run quantum:offender-spec · fold offenderAutomationSpec · pair offender/spec. Status: CI-only scan · prefer /en/quantum-tools#offender-spec. · [source](https://github.com/ceccec/ceccec.github.io/blob/main/src/quantum/apps/index.vue)
- **shouldSpawnSubagent — few heroes > mass ignorance · 1 ≤ workers ≤ 2** — Statement: shouldSpawnSubagent = few heroes > mass ignorance — 1–2 qualified workers, Multitask Mode default. Explanation: mass duplicate subagent tasks penalized; bounded tasks with sealed fold targets spawn solo hero. Method: npm run quantum:hero-spawn-verify · fold shouldSpawnSubagent · pair hero/spawn-verify. Status: spawn policy receipt · prefer /en/quantum-tools#hero-spawn-verify. · [source](https://github.com/ceccec/ceccec.github.io/blob/main/src/quantum/apps/index.vue)

### Frontier — 5 pages

- **Folding linear gives analog** — Folding linear gives analog, decoded honestly with the real science. The kernel is the Whittaker–Shannon sampling theorem: discrete samples of a band-limited signal fold back into the continuous signal with no gaps, via sinc interpolation (computed live, exact at the samples). Medical and radar imaging is exactly this — reconstructing a continuous image from a sampled frequency field: MRI inverts the Fourier transform of k-space, CT the Radon transform, and the spiral/radial "vortex" through k-space is real (NUFFT). The 64³ = 4⁹ grid the model already computes is the discrete lattice it samples. Documented kept, legend flagged — Nyquist limits are real, gap-filling can hallucinate, and the theorem is foundational, not new. · [source](https://github.com/ceccec/ceccec.github.io/blob/main/src/render/ui/components/AnalogField.vue)
- **Theorem registry** — Statement: theorem registry = recent decodes + theorem-wave engine. Explanation: diving/water/space; quantum vacuum; cosmic inventory; physics of information; clown qubit on genus-2. Method: theorems:gaps · theorems:verify · npm run quantum:domain-proof-catalog · /proofs. Status: each atom has statement · computed checks · honest boundary; open problems held OPEN. Every result a client-side computation from the src/0 primitives. · [source](https://github.com/ceccec/ceccec.github.io/blob/main/src/render/ui/components/Frontiers.vue)
- **64 = the 3-qubit Pauli basis** — Statement: 64 = 3-qubit phaseless Pauli basis {I,X,Y,Z}³ = 4³ = 8² = 2⁶ combinatorial parallel. Explanation: sixtyFourThreeQubitPauliBasis matches genetic codon count and hexagram vocabulary — parallel, not causal link. Method: sixtyFourThreeQubitPauliBasis · ProofRenderer · npm run verify. Status: combinatorial proof · drop over-reach on error-correction claims. · [source](https://github.com/ceccec/ceccec.github.io/blob/main/src/render/ui/components/ProofRenderer.vue)
- **Encrypt ↔ decrypt = foldPair recompute; production browser reverse ≤12-bit sealed catalog** — Statement: encrypt↔decrypt is foldPair recompute; reverse surfaces are production browser tools on sealed-catalog DEMO_RSA_MODULI (≤12-bit). Explanation: content-addressed trinityKey + foldPair round-trip; modeled Shor on sealed catalog. Method: npm run quantum:encryption-reverse-verify · fold encryptionReverseVerify. Status: production RSA break refused · certified=false · related science ≠ Clay Proposed Solution (Prize Rules §5(d)). · [source](https://github.com/ceccec/ceccec.github.io/blob/main/src/water/encryption/index.vue)
- **ssl/test = sealed stack→receipt · quantum grade · FTL warm reuse** — Statement: ssl/test quantumises stack→receipt via sealed crypto/TLS faces (tool/honest · standards audit · poles/cross-pqc · directional trinity) with memoByRoot FTL warm path. Explanation: quantum grades from facet coverage·digit·fwd/inv/rev — not Qualys letters; live remote handshake named residual. Method: npm run quantum:ssl-test · quantum:quantumise-ftl · fold sslTestUiComplete. Status: certified=false · proof surface · not foreign scanner mirror. · [source](https://github.com/ceccec/ceccec.github.io/blob/main/src/render/ui/components/SslTestTools.vue)

## 4. Sitemap

The complete served surface, wired from ONE source (`servedRouteFamilies`) so the human sitemap here and the crawler `sitemap.xml` count the same pages: **815 pages** across 3 families — 31 monographs · 754 theorems · 30 proofs. Only COMPLETE, non-duplicate families are listed: the empty model cards (0) and the compute-only `papers/[id]` catch-all (0 SSG — the placements resolve on demand and duplicate the theorem papers) are excluded; their index routes are monographs below.

- **31 monograph landing + index pages** (`/`) — each in three locale editions (en · bg · cu), placed on the double torus and content-addressed:
- **754 theorem papers — the registered theorems plus the card papers outside the registry** — index `/theorems`; every page enumerated in the one `sitemap.xml`.
- **30 domain proofs (Millennium + science)** — index `/proofs`; every page enumerated in the one `sitemap.xml`.

- `/` — [en](https://ceccec.psg.bg/) · [bg](https://ceccec.psg.bg/bg/) · [cu](https://ceccec.psg.bg/gla/)
- `/analog-field` — [en](https://ceccec.psg.bg/analog-field) · [bg](https://ceccec.psg.bg/bg/analog-field) · [cu](https://ceccec.psg.bg/gla/analog-field)
- `/learn` — [en](https://ceccec.psg.bg/learn) · [bg](https://ceccec.psg.bg/bg/learn) · [cu](https://ceccec.psg.bg/gla/learn)
- `/frontiers` — [en](https://ceccec.psg.bg/frontiers) · [bg](https://ceccec.psg.bg/bg/frontiers) · [cu](https://ceccec.psg.bg/gla/frontiers)
- `/pi-trinity` — [en](https://ceccec.psg.bg/pi-trinity) · [bg](https://ceccec.psg.bg/bg/pi-trinity) · [cu](https://ceccec.psg.bg/gla/pi-trinity)
- `/qubit-trinity` — [en](https://ceccec.psg.bg/qubit-trinity) · [bg](https://ceccec.psg.bg/bg/qubit-trinity) · [cu](https://ceccec.psg.bg/gla/qubit-trinity)
- `/pauli-basis` — [en](https://ceccec.psg.bg/pauli-basis) · [bg](https://ceccec.psg.bg/bg/pauli-basis) · [cu](https://ceccec.psg.bg/gla/pauli-basis)
- `/hamming-address` — [en](https://ceccec.psg.bg/hamming-address) · [bg](https://ceccec.psg.bg/bg/hamming-address) · [cu](https://ceccec.psg.bg/gla/hamming-address)
- `/content-addressing` — [en](https://ceccec.psg.bg/content-addressing) · [bg](https://ceccec.psg.bg/bg/content-addressing) · [cu](https://ceccec.psg.bg/gla/content-addressing)
- `/genetic-code` — [en](https://ceccec.psg.bg/genetic-code) · [bg](https://ceccec.psg.bg/bg/genetic-code) · [cu](https://ceccec.psg.bg/gla/genetic-code)
- `/three-not-one` — [en](https://ceccec.psg.bg/three-not-one) · [bg](https://ceccec.psg.bg/bg/three-not-one) · [cu](https://ceccec.psg.bg/gla/three-not-one)
- `/hexagram-colour` — [en](https://ceccec.psg.bg/hexagram-colour) · [bg](https://ceccec.psg.bg/bg/hexagram-colour) · [cu](https://ceccec.psg.bg/gla/hexagram-colour)
- `/sixty-four` — [en](https://ceccec.psg.bg/sixty-four) · [bg](https://ceccec.psg.bg/bg/sixty-four) · [cu](https://ceccec.psg.bg/gla/sixty-four)
- `/rgb-cmyk` — [en](https://ceccec.psg.bg/rgb-cmyk) · [bg](https://ceccec.psg.bg/bg/rgb-cmyk) · [cu](https://ceccec.psg.bg/gla/rgb-cmyk)
- `/trinity-rgb` — [en](https://ceccec.psg.bg/trinity-rgb) · [bg](https://ceccec.psg.bg/bg/trinity-rgb) · [cu](https://ceccec.psg.bg/gla/trinity-rgb)
- `/proven-or-purged` — [en](https://ceccec.psg.bg/proven-or-purged) · [bg](https://ceccec.psg.bg/bg/proven-or-purged) · [cu](https://ceccec.psg.bg/gla/proven-or-purged)
- `/kernel-zero` — [en](https://ceccec.psg.bg/kernel-zero) · [bg](https://ceccec.psg.bg/bg/kernel-zero) · [cu](https://ceccec.psg.bg/gla/kernel-zero)
- `/vortex` — [en](https://ceccec.psg.bg/vortex) · [bg](https://ceccec.psg.bg/bg/vortex) · [cu](https://ceccec.psg.bg/gla/vortex)
- `/zero-division` — [en](https://ceccec.psg.bg/zero-division) · [bg](https://ceccec.psg.bg/bg/zero-division) · [cu](https://ceccec.psg.bg/gla/zero-division)
- `/digit-folders` — [en](https://ceccec.psg.bg/digit-folders) · [bg](https://ceccec.psg.bg/bg/digit-folders) · [cu](https://ceccec.psg.bg/gla/digit-folders)
- `/dot-cube` — [en](https://ceccec.psg.bg/dot-cube) · [bg](https://ceccec.psg.bg/bg/dot-cube) · [cu](https://ceccec.psg.bg/gla/dot-cube)
- `/seven-star-rosetta` — [en](https://ceccec.psg.bg/seven-star-rosetta) · [bg](https://ceccec.psg.bg/bg/seven-star-rosetta) · [cu](https://ceccec.psg.bg/gla/seven-star-rosetta)
- `/encryption` — [en](https://ceccec.psg.bg/encryption) · [bg](https://ceccec.psg.bg/bg/encryption) · [cu](https://ceccec.psg.bg/gla/encryption)
- `/ssltest` — [en](https://ceccec.psg.bg/ssltest) · [bg](https://ceccec.psg.bg/bg/ssltest) · [cu](https://ceccec.psg.bg/gla/ssltest)
- `/quantum-tools` — [en](https://ceccec.psg.bg/quantum-tools) · [bg](https://ceccec.psg.bg/bg/quantum-tools) · [cu](https://ceccec.psg.bg/gla/quantum-tools)
- `/quantum-trading-hub` — [en](https://ceccec.psg.bg/quantum-trading-hub) · [bg](https://ceccec.psg.bg/bg/quantum-trading-hub) · [cu](https://ceccec.psg.bg/gla/quantum-trading-hub)
- `/research` — [en](https://ceccec.psg.bg/research) · [bg](https://ceccec.psg.bg/bg/research) · [cu](https://ceccec.psg.bg/gla/research)
- `/society-merkaba` — [en](https://ceccec.psg.bg/society-merkaba) · [bg](https://ceccec.psg.bg/bg/society-merkaba) · [cu](https://ceccec.psg.bg/gla/society-merkaba)
- `/efficiency-vote` — [en](https://ceccec.psg.bg/efficiency-vote) · [bg](https://ceccec.psg.bg/bg/efficiency-vote) · [cu](https://ceccec.psg.bg/gla/efficiency-vote)
- `/offender-spec` — [en](https://ceccec.psg.bg/offender-spec) · [bg](https://ceccec.psg.bg/bg/offender-spec) · [cu](https://ceccec.psg.bg/gla/offender-spec)
- `/hero-spawn-verify` — [en](https://ceccec.psg.bg/hero-spawn-verify) · [bg](https://ceccec.psg.bg/bg/hero-spawn-verify) · [cu](https://ceccec.psg.bg/gla/hero-spawn-verify)

- Sitemap root: `00dff8ea-aa58-84d1-a61c-69c0e68696ce`

## 5. Reproducibility

```sh
npm install
npm run check:types  # the src/ core type-checks clean against tsconfig.json (tsc --noEmit)
npm run docs:build   # build, then seal: enforcement trinity (cross · fold · weave)
```

The seal recomputes from src: forging one reported value means re-deriving the whole content-addressed structure to a different receipt (`2145d23b`), so the address is the proof, not a signature over prose. The proof reproduces: clone the link and the whole structure recomputes.

## 6. Limitations

- A compact reference index of the portal's knowledge, each entry content-addressed (so "zero entropy" means no duplicate keys, not thermodynamics). Searchable via the intuitive search; a distilled index, not the full text.
- "1 Gbit" and "64 × 64 × 64" name the keyspace structure, not cipher strength (AES-256-GCM) or throughput.
- The neuroscience terms (reentry, pattern completion, holographic) are analogs, not claims about neurons.

## References

- The model: `src/quantum/heaven/mind`. The sitemap root: `00dff8ea-aa58-84d1-a61c-69c0e68696ce`. The monograph-index root: `c689ddf8-4931-8a38-acd2-cbadbe0e4362`.
- Template root (the receipt of this monograph form): `c27823b4-9f2d-8a37-8e3e-b2748445e0a4`.
- Prior work / origin: [ceccec/zeropoint-node](https://github.com/ceccec/zeropoint-node) — the predecessor repo of the vortex sequence (same closed cycle, verified by computation in `zeropointNodeOriginDecoded`); its 60°/A432/integer-ratio mathematics is sealed here, its zero-point free-energy and consciousness-OS claims are demarcated flagged (½ħω is real, extraction is not).

## Receipt

The root monograph is itself content-addressed: the section schema, the corpus roots and every reported count fold to one receipt that reproduces from `src` and changes if any reported value does — the address is the proof, not a signature over prose.

- Receipt: fold `readmeMarkdown`
