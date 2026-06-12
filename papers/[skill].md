---
layout: doc
aside: false
---

<script setup>
import { useData } from 'vitepress'
const { params } = useData()
</script>

<p class="paper-eyebrow">Double Torus · Paper {{ params.number }} of {{ params.total }} · next harmonic {{ params.octaves }}</p>

# Paper {{ params.number }} — {{ params.title }}

<figure class="paper-figure" :style="{ '--hue': params.hue, '--spin': Math.max(900, params.vibrationMs) + 'ms' }">
  <svg viewBox="-60 -60 120 120" class="paper-anim" role="img" :aria-label="`animation for ${params.title}`">
    <circle class="paper-anim__ring" cx="0" cy="0" r="46" />
    <g class="paper-anim__spin">
      <line class="paper-anim__spoke" x1="0" y1="0" :x2="params.ax" :y2="params.ay" />
      <circle class="paper-anim__node" :cx="params.ax" :cy="params.ay" r="7" />
      <circle class="paper-anim__node paper-anim__node--inner" :cx="params.bx" :cy="params.by" r="5" />
    </g>
    <text class="paper-anim__glyph" x="0" y="2">{{ params.glyph }}</text>
  </svg>
  <figcaption>Figure 1. π-digit coordinate {{ params.coordinateIndex }} (digit {{ params.digit }}, glyph {{ params.glyph }}) projected onto homology cycle <code>{{ params.generator }}</code> — {{ params.generatorName }}. The animation is seeded from the paper's content-addressed root, so it is unique to this result.</figcaption>
</figure>

## Abstract

This paper documents a single, recomputable result of the Double Torus model: the projection of π-digit coordinate **{{ params.coordinateIndex }}** onto homology cycle **{{ params.generator }}** of the genus-2 surface, whose first homology is H₁(Σ₂) = ℤ⁴. The result is content-addressed and folded both ways under the genus-2 law; its root is

<p class="paper-mono">{{ params.root }}</p>

This is paper {{ params.number }} of {{ params.total }} in the next-harmonic corpus — 432 = 4 × {{ params.fundamental }}, the four homology generators times the {{ params.total / 4 }} π-digit coordinates of the living torus.

## 1. Method

The coordinate's content-addressed receipt is folded with the homology generator's identifier, both ways (forward and reverse), and the two folds are merged — the genus-2 fold law `foldPair`:

<p class="paper-mono">forward = merge(coordinateReceipt, generator)<br />reverse = merge(generator, coordinateReceipt)<br />root = merge(forward, reverse)</p>

where the fold `merge(a, b)` is the content address `toUuid` of the joined string `a:b`. Determinism makes the result exact and reproducible.

## 2. Result

| quantity | value |
| --- | --- |
| coordinate index | {{ params.coordinateIndex }} |
| π-digit · glyph | {{ params.digit }} · {{ params.glyph }} |
| homology cycle | {{ params.generator }} ({{ params.generatorName }}) |
| surface point (x, y, z) | ({{ params.x }}, {{ params.y }}, {{ params.z }}) |
| θ, φ | {{ params.theta }}, {{ params.phi }} |
| frequency | {{ params.frequency }} Hz |
| bidirectional fold | {{ params.bidirectional }} |

## 3. Public proof

The proof is public because it is a recomputation: anyone can recompute the receipts and folds and check the root, then verify the paper's Merkle inclusion into the corpus root.

- **Paper root** — <span class="paper-mono">{{ params.root }}</span>
- **Coordinate receipt** — <span class="paper-mono">{{ params.coordinateReceipt }}</span>
- **Homology generator** — <span class="paper-mono">{{ params.generatorUuid }}</span>
- **Forward / reverse folds** — <span class="paper-mono">{{ params.forward }}</span> / <span class="paper-mono">{{ params.reverse }}</span>
- **Merkle inclusion** into corpus root <span class="paper-mono">{{ params.corpusRoot }}</span> — verified: **{{ params.proofVerified }}**, path depth {{ params.proofDepth }} over {{ params.leafCount }} leaves.

Recompute `root = merge(merge(coordinateReceipt, generator), merge(generator, coordinateReceipt))`; it must equal the paper root above, and the leaf must fold to the corpus root along the inclusion path.

## 4. Limitations

This is a structural, deterministic result — mathematics and content-addressed bookkeeping over the double torus — **not** an experiment, a measurement, or a claim about the physical world. The "proof" is a recomputation, not peer-reviewed empirical science; the harmonic reading (108 · 216 · 432) is structural and musical, not a physical-frequency claim. What is proved is exactly this: the named coordinate, folded with the named cycle, yields the named root, and that root is included in the corpus.

---

<p class="paper-nav">
  <a v-if="params.number > 1" :href="`/papers/p${String(params.number - 1).padStart(3, '0')}`">← Paper {{ params.number - 1 }}</a>
  <a href="/papers/">All {{ params.total }} papers</a>
  <a v-if="params.number < params.total" :href="`/papers/p${String(params.number + 1).padStart(3, '0')}`">Paper {{ params.number + 1 }} →</a>
</p>
