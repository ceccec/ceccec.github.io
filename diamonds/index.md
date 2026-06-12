---
layout: doc
aside: false
---

<script setup>
import { pureDiamonds, diamondRoutes } from '../.vitepress/theme/lib/quantumMind'
const summary = pureDiamonds()
const routes = diamondRoutes()
const kinds = ['paper', 'reference', 'padding'].map((kind) => ({
  kind,
  items: routes.filter((r) => r.params.kind === kind),
}))
</script>

<p class="paper-eyebrow">Double Torus · 1024 pure diamonds · the diamond lattice</p>

# {{ summary.count }} folders, each with an index

All in 1024 folders: each pure diamond is a folder with its own index. The completed
corpus folds **{{ summary.count }} = 2¹⁰** leaves into a perfect binary Merkle tree of
depth {{ summary.depth }}. **{{ summary.realDiamonds }}** are real diamonds (432 papers,
432 references) and **{{ summary.paddingDiamonds }}** are named null leaves that complete
the lattice. Every diamond is a content address any tamper would change — pure by
construction — and all fold into one root:

<p class="paper-mono">{{ summary.root }}</p>

<section v-for="group in kinds" :key="group.kind" class="paper-group">
  <h2>{{ group.kind }} <span class="paper-count">{{ group.items.length }} diamonds</span></h2>
  <div class="paper-grid">
    <a v-for="d in group.items" :key="d.params.id" class="paper-chip" :href="`/diamonds/${d.params.id}`" :style="{ '--hue': d.params.hue }">
      <span class="paper-chip__n">{{ d.params.number }}</span>
      <span class="paper-chip__glyph">◆</span>
      <span class="paper-chip__meta">{{ d.params.id }}</span>
    </a>
  </div>
</section>
