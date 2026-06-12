---
layout: doc
aside: false
---

<script setup>
import { paperReferences, completeCorpus } from '../.vitepress/theme/lib/quantumMind'
const references = paperReferences()
const corpus = completeCorpus()
const groups = ['a1', 'b1', 'a2', 'b2'].map((id) => ({
  id,
  items: references.filter((r) => r.generator === id),
}))
</script>

<p class="paper-eyebrow">Double Torus · references only · completing the binary octave {{ corpus.target }} (2¹⁰)</p>

# {{ references.length }} references, completing 1024

The {{ corpus.papers }} proof papers each fold both ways under the genus-2 law. Their
**reverse folds** are these {{ references.length }} references — reference-only pointers,
no new proof. Papers + references = **{{ corpus.real }} real leaves**; padded with
{{ corpus.padding }} named null leaves to the binary octave **{{ corpus.target }} = 2¹⁰**,
they fold into a perfect binary Merkle tree of depth {{ corpus.depth }}:

<p class="paper-mono">{{ corpus.root }}</p>

<section v-for="group in groups" :key="group.id" class="paper-group">
  <h2>Cycle <code>{{ group.id }}</code> <span class="paper-count">{{ group.items.length }} references</span></h2>
  <div class="paper-grid">
    <a v-for="r in group.items" :key="r.id" class="paper-chip" :href="`/references/${r.id}`" :style="{ '--hue': r.hue }">
      <span class="paper-chip__n">{{ r.number }}</span>
      <span class="paper-chip__glyph">{{ r.glyph }}</span>
      <span class="paper-chip__meta">→ {{ r.paperId }}</span>
    </a>
  </div>
</section>
