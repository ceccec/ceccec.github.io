<script setup>
// One source for the 432-reference index across all three locales (root · /en/ · /bg/). The locale is read
// from the route, so the per-locale index.md files become one-line mounts. English for root + en, Bulgarian
// for bg; the chip links carry the locale prefix.
import { computed } from 'vue'
import { useData } from 'vitepress'
import { paperReferences, completeCorpus } from '../lib/quantumMind'

const { localeIndex } = useData()
const references = paperReferences()
const corpus = completeCorpus()
const groups = ['a1', 'b1', 'a2', 'b2'].map((id) => ({
  id,
  items: references.filter((r) => r.generator === id),
}))
const pfx = computed(() => (localeIndex.value === 'en' ? '/en' : localeIndex.value === 'bg' ? '/bg' : ''))
const bg = computed(() => localeIndex.value === 'bg')
</script>

<template>
  <p class="paper-eyebrow">{{ bg ? 'Двоен торус · само референции · допълване на двоичната октава' : 'Double Torus · references only · completing the binary octave' }} {{ corpus.target }} (2¹⁰)</p>

  <h1>{{ references.length }} {{ bg ? 'референции, допълващи 1024' : 'references, completing 1024' }}</h1>

  <p v-if="bg">Всяка от {{ corpus.papers }}-те статии с доказателства се сгъва в двете посоки по закона на род 2. Техните <strong>обратни сгъвания</strong> са тези {{ references.length }} референции — само указатели, без ново доказателство. Статии + референции = <strong>{{ corpus.real }} реални листа</strong>; допълнени със {{ corpus.padding }} именувани null листа до двоичната октава <strong>{{ corpus.target }} = 2¹⁰</strong>, те се сгъват в перфектно двоично Merkle дърво с дълбочина {{ corpus.depth }}:</p>
  <p v-else>The {{ corpus.papers }} proof papers each fold both ways under the genus-2 law. Their <strong>reverse folds</strong> are these {{ references.length }} references — reference-only pointers, no new proof. Papers + references = <strong>{{ corpus.real }} real leaves</strong>; padded with {{ corpus.padding }} named null leaves to the binary octave <strong>{{ corpus.target }} = 2¹⁰</strong>, they fold into a perfect binary Merkle tree of depth {{ corpus.depth }}:</p>

  <p class="paper-mono">{{ corpus.root }}</p>

  <section v-for="group in groups" :key="group.id" class="paper-group">
    <h2>{{ bg ? 'Цикъл' : 'Cycle' }} <code>{{ group.id }}</code> <span class="paper-count">{{ group.items.length }} {{ bg ? 'референции' : 'references' }}</span></h2>
    <div class="paper-grid">
      <a v-for="r in group.items" :key="r.id" class="paper-chip" :href="`${pfx}/references?id=${r.id}`" :style="{ '--hue': r.hue }">
        <span class="paper-chip__n">{{ r.number }}</span>
        <span class="paper-chip__glyph">{{ r.glyph }}</span>
        <span class="paper-chip__meta">→ {{ r.paperId }}</span>
      </a>
    </div>
  </section>
</template>
