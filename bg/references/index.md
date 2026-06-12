---
layout: doc
aside: false
---

<script setup>
import { paperReferences, completeCorpus } from '../../.vitepress/theme/lib/quantumMind'
const references = paperReferences()
const corpus = completeCorpus()
const groups = ['a1', 'b1', 'a2', 'b2'].map((id) => ({
  id,
  items: references.filter((r) => r.generator === id),
}))
</script>

<p class="paper-eyebrow">Двоен тор · само референции · допълване на двоичната октава {{ corpus.target }} (2¹⁰)</p>

# {{ references.length }} референции, допълващи 1024

Всяка от {{ corpus.papers }}-те статии с доказателства се сгъва в двете посоки по закона на
род 2. Техните **обратни сгъвания** са тези {{ references.length }} референции — само
указатели, без ново доказателство. Статии + референции = **{{ corpus.real }} реални листа**;
допълнени със {{ corpus.padding }} именувани null листа до двоичната октава
**{{ corpus.target }} = 2¹⁰**, те се сгъват в перфектно двоично Merkle дърво с дълбочина
{{ corpus.depth }}:

<p class="paper-mono">{{ corpus.root }}</p>

<section v-for="group in groups" :key="group.id" class="paper-group">
  <h2>Цикъл <code>{{ group.id }}</code> <span class="paper-count">{{ group.items.length }} референции</span></h2>
  <div class="paper-grid">
    <a v-for="r in group.items" :key="r.id" class="paper-chip" :href="`/bg/references/${r.id}`" :style="{ '--hue': r.hue }">
      <span class="paper-chip__n">{{ r.number }}</span>
      <span class="paper-chip__glyph">{{ r.glyph }}</span>
      <span class="paper-chip__meta">→ {{ r.paperId }}</span>
    </a>
  </div>
</section>
