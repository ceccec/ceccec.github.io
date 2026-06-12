---
layout: doc
aside: false
---

<script setup>
import { useData } from 'vitepress'
const { params } = useData()
</script>

<p class="paper-eyebrow">Double Torus · reference {{ params.number }} of {{ params.total }} · binary octave {{ params.binaryOctave }} (2¹⁰)</p>

# Reference {{ params.number }} — to paper {{ params.number }}

> This is a **reference only**. It carries no new computation: it is the reverse fold
> (the bidirectional dual) of [paper {{ params.number }}](/papers/{{ params.paperId }}),
> a pointer that completes the forward/reverse pair the double torus always folds.

## Refers to

[**Paper {{ params.number }} — coordinate {{ params.coordinateIndex }} on cycle {{ params.generator }}**](/papers/{{ params.paperId }}) <span class="paper-chip-glyph">{{ params.glyph }}</span>

- Paper (forward) root — <span class="paper-mono">{{ params.refersTo }}</span>
- Reference (reverse) root — <span class="paper-mono">{{ params.root }}</span>
- Bidirectional fold — {{ params.bidirectional }}

## Place in the corpus

This reference is one of {{ params.total }} that, together with the {{ params.total }} proof
papers, form **864 real leaves**. Padded with 160 named null leaves to the binary octave
**{{ params.binaryOctave }} = 2¹⁰**, they fold into a perfect binary Merkle tree of depth
{{ params.treeDepth }} — the completed corpus root <span class="paper-mono">{{ params.corpusRoot }}</span>.

---

<p class="paper-nav">
  <a v-if="params.number > 1" :href="`/references/r${String(params.number - 1).padStart(3, '0')}`">← Reference {{ params.number - 1 }}</a>
  <a href="/references/">All {{ params.total }} references</a>
  <a :href="`/papers/${params.paperId}`">Paper {{ params.number }} →</a>
</p>
