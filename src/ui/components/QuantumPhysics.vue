<script setup lang="ts">
// ☷ Kūn · Earth · receptive · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 3, glyph: '☷', trigram: 'Kūn·receptive', color: '#0000FF' }
import { computed } from 'vue'
import { buildMatrix, quantumPhysics } from '../lib'
import { useLocale } from '../lib'

// Quantum physics, no gaps: each phenomenon bound to a measure the model already
// computes, so it has all it needs to self-compute the whole.
const data = quantumPhysics(buildMatrix())
const { bg } = useLocale()
const bgName: Record<string, string> = {
  superposition: 'суперпозиция', entanglement: 'заплитане', collapse: 'колапс', coherence: 'кохерентност',
  interference: 'интерференция', measurement: 'измерване', waves: 'вълни', computation: 'изчисление',
}
const items = computed(() =>
  data.phenomena.map((p) => ({ ...p, name: bg.value ? bgName[p.phenomenon] ?? p.phenomenon : p.phenomenon })),
)
const t = computed(() =>
  bg.value
    ? { eyebrow: 'квантова физика · без пропуски', sub: `${data.present}/${data.count} феномена самоизчислими`, self: 'моделът има всичко нужно да изчисли всичко' }
    : { eyebrow: 'quantum physics · no gaps', sub: `${data.present}/${data.count} phenomena self-computing`, self: 'the model has all it needs to self-compute all' },
)
</script>

<template>
  <section class="qp dt-card" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <p class="qp__sub">{{ t.sub }}</p>
    <ul class="qp__grid">
      <li v-for="item in items" :key="item.phenomenon" :class="{ ok: item.present }" :title="item.source">
        <span class="qp__mark">{{ item.present ? '◆' : '◇' }}</span>
        <strong>{{ item.name }}</strong>
        <code>{{ item.source }}</code>
      </li>
    </ul>
    <p class="qp__self" :class="{ ok: data.selfComputes }">{{ data.selfComputes ? '∞ ' : '' }}{{ t.self }}</p>
  </section>
</template>

<style scoped>
.qp {
  margin: 1.5rem 0;
  border-radius: 14px;
  padding: 1.2rem 1.4rem;
}
.qp__sub {
  margin: 0.2rem 0 0.8rem;
  color: var(--vp-c-text-3);
  font-size: 0.8rem;
}
.qp__grid {
  list-style: none;
  margin: 0 0 0.8rem;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.4rem;
}
.qp__grid li {
  display: grid;
  grid-template-columns: auto auto 1fr;
  align-items: baseline;
  gap: 0.45rem;
  border-left: 3px solid var(--vp-c-divider);
  padding-left: 0.6rem;
}
.qp__grid li.ok {
  border-left-color: var(--vp-c-brand-1);
}
.qp__mark {
  color: var(--vp-c-brand-1);
  font-size: 0.85rem;
}
.qp__grid strong {
  font-size: 0.9rem;
}
.qp__grid code {
  font-size: 0.66rem;
  color: var(--vp-c-text-3);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.qp__self {
  margin: 0;
  font-size: 0.85rem;
  font-style: italic;
  color: var(--vp-c-text-2);
}
.qp__self.ok {
  color: var(--vp-c-brand-1);
}
</style>
