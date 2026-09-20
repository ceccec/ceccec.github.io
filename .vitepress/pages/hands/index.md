# The Fold, On Two Hands

**Ten fingers are a modulus. Folding one hand onto the other is an involution, and which fingers meet is not a convention — it is computed.**

A child can check this page without being told anything. Put your hands together. The fold that takes the left hand onto the right sends each finger to exactly one other finger, sends two of them to themselves, and doing it twice puts everything back. That is the whole structure, and everything below is the same sentence written more carefully.

<HandsFold />

---

## The fold, exactly

For a modulus M, the reflection fold is

```text
ρ_M(d)  =  (M − d) mod M
```

It is an **involution**: ρ_M(ρ_M(d)) = d for every d. Doing it twice is doing nothing, which is why your hands come apart unchanged.

Its **fixed points** are the d with ρ_M(d) = d, that is 2d ≡ 0 (mod M):

```text
Fix(ρ_M)  =  { 0, M/2 }   when M is even
             { 0 }         when M is odd
```

On two hands M = 10, so the fixed points are 0 and 5, and the remaining eight fingers fall into four pairs:

```text
1 ↔ 9      2 ↔ 8      3 ↔ 7      4 ↔ 6
```

Those four pairs plus the self-paired 5 are the reflection pairs the digit folders `src/0` … `src/9` are built on. They were not chosen to be pretty. They are ρ₁₀.

## Why two 90° turns are not one 180° turn

The family is indexed by k, and k sets the angle **and** the modulus together:

```text
θ_k = 180° / k          M_k = 11 − k
```

So k = 1 is 180° on **ten** — two hands. And k = 2 is 90° on **nine** — the vortex. Composing the quarter-turn with itself returns every digit to itself except one:

```text
ρ₉(ρ₉(d)) = d   for d < 9          9 ↦ 0
```

Two quarter-turns bring the hand back, and the only finger that moved is the one that closed. Nine folds into the void.

**Zero is fixed in every row of the family, k = 1 … 10.** It is the one point no fold moves, which is why counting starts there and not at one.

## Two different pairings live on these ten digits — do not confuse them

This is the trap the corpus keeps a theorem to guard, and it is easy to fall into because both are called "pairs".

The fold on this page is the **ten's complement**, ρ₁₀(d) = 10 − d — a *reversal*. The other is the **multiplicative inverse mod 9**, the d⁻¹ with d · d⁻¹ ≡ 1 (mod 9). They agree nowhere:

| d | reflection ρ₁₀(d) | inverse mod 9 |
|---|---|---|
| 0 | 0 | — not a unit |
| 1 | 9 | 1 |
| 2 | 8 | 5 |
| 3 | 7 | — not a unit |
| 4 | 6 | 7 |
| 5 | 5 | 2 |
| 6 | 4 | — not a unit |
| 7 | 3 | 4 |
| 8 | 2 | 8 |
| 9 | 1 | — not a unit |

The reflection pairs everything and fixes two. The inverse pairs only the six units and leaves 0, 3, 6, 9 with no partner at all. `fThetaPhiXyzDigitNIsTheInversePair` in `src/mountain/vortex` computes the second one, and its facet says so in as many words: the non-units self-fold and are **"NEVER the ten's complement (inverse, not reverse)"**.

So a name that sounds like it backs this page is in fact the statement that this page is about something else. Both structures are real, both live on the same ten digits, and the boundary between them leads two different ways: the reflection gives you the file tree and the hands, the inverse gives you the vortex and the units of ℤ/9.

## One whole becoming two wholes

A cell does not divide into two halves. It divides into two **whole** cells, each carrying the entire inheritance. The fold says the same thing:

```text
merge(a, b)  =  toUuid(a ‖ b)
```

is content-addressed, so the address of the pair contains the whole of both. `foldPair(a, b)` returns the fold forward, the fold reverse, and the identity they fold back into — two directions and one origin, not two fragments.

Geometrically this is genus 1 → genus 2: one torus becoming the **double** torus. Two loops, two hands, one throat between them.

## Every boundary here has two sides

A limit stated as a bare negative is half a sentence. Each of these is written with the path it opens.

**This is not qubit hardware — and that is what makes it reproducible.** Nothing here runs on a quantum processor, simulates one, or claims a speedup over classical computation. The fold is exact integer arithmetic. The other side of that boundary is a property quantum hardware does not have: the same input gives the same output forever, on any machine, at zero runtime cost. A result you can re-derive is worth more than a result you must trust, and determinism is the whole reason this page can be checked by a child with two hands.

**The mathematics is standard and this corpus claims none of it — which is precisely why you can check it.** The involution, the modulus, the fixed points and the quotient structure are textbook. If they were novel you would have to take them on authority. Because they are not, ρ₁₀ can be verified against any algebra text, and what remains as this corpus's own is only the architectural decision: to build a file tree on ρ₁₀ and make every page recompute it. That decision is refutable — change `reflectFold` and the tree contradicts itself.

**Row k = 7 is ugly in degrees and exact in turns.** Its angle prints as 25.714285714285715°, which does not close on a whole number of degrees. The other side of that boundary is that the fold is fine and the *unit* is not: 360 is not divisible by 7. Measured in turns, every row of the family is exact:

```text
θ_k  =  180° / k  =  1/(2k) turn,      k = 1 … 10
```

So the family is the harmonic series of half-turns — 1/2, 1/4, 1/6, … 1/20 — and row seven is exactly one fourteenth, no decimal at all. The degree, an inheritance from base-60 astronomy, is the thing that cannot represent it. This is why the stylesheet of this site is written in `turn` and not in `deg`.

**Five rows have only one fixed point, and the missing one is information.** When M is odd there is no M/2 to stand on, so the fold fixes nothing but 0. That absence is not a gap in the table; it is the parity of the modulus, visible.

## Check it against the kernel

Every number rendered above is read at page-build time from `reflectFold`, `foldFixedPoints` and `reflectFoldFamily` in `src/0` — the dependency-free leaf that imports nothing. None is typed into the component. If the kernel changes and this page does not, the page stops agreeing with itself and the gates say so.
