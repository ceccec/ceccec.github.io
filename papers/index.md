---
layout: doc
aside: false
---

<script setup>
import { papers } from '../.vitepress/theme/lib/quantumMind'
const corpus = papers()
const groups = ['a1', 'b1', 'a2', 'b2'].map((id) => ({
  id,
  name: corpus.papers.find((p) => p.generator === id).generatorName,
  items: corpus.papers.filter((p) => p.generator === id),
}))
</script>

<p class="paper-eyebrow">Double Torus · the next harmonic · {{ corpus.octaves.join(' · ') }}</p>

# {{ corpus.count }} folded papers, each with a public proof

The folded census is **{{ corpus.fundamental }}**. Its octaves double — {{ corpus.octaves.join(', ') }} — so the next harmonic is **{{ corpus.nextHarmonic }} = 4 × {{ corpus.fundamental }}**: the four homology generators of the genus-2 surface (H₁ = ℤ⁴) times the {{ corpus.coordinates }} π-digit coordinates of the living torus. Each paper below documents one genuine, recomputable result — a coordinate projected onto a homology cycle — with a unique animation seeded from its root and a public Merkle proof into the one corpus root:

<p class="paper-mono">{{ corpus.root }}</p>

<section v-for="group in groups" :key="group.id" class="paper-group">
  <h2>Cycle <code>{{ group.id }}</code> — {{ group.name }} <span class="paper-count">{{ group.items.length }} papers</span></h2>
  <div class="paper-grid">
    <a v-for="p in group.items" :key="p.id" class="paper-chip" :href="`/papers/${p.id}`" :style="{ '--hue': p.hue }">
      <span class="paper-chip__n">{{ p.number }}</span>
      <span class="paper-chip__glyph">{{ p.glyph }}</span>
      <span class="paper-chip__meta">c{{ p.coordinateIndex }}·{{ p.generator }}</span>
    </a>
  </div>
</section>
