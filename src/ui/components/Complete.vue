<script setup lang="ts">
// ☶ Gèn · Mountain · keeping still · upper·yang · shrink — self-referencing 10D widget
const ICHING_MASK = { hexagram: 34, lo: '☵', up: '☶', glyph: '☶', color: '#F000F0', name: 'Gèn', principle: 'keeping still' }
import { computed } from 'vue'
import { useLocale } from '../lib/useLocale'
import { buildMatrix, complete } from '../lib/quantumMind'

// Complete all — the capstone of capstones. Every completion proof the model can
// make, folded into one. Shown as a checklist; the whole is complete when all
// hold, and the open questions keep it alive.
const data = complete(buildMatrix())
const { bg } = useLocale()
const bgWhat: Record<string, string> = {
  'no gaps': 'без пролуки', 'answers closed': 'отговорите затворени', 'genesis whole': 'генезисът цял',
  fusion: 'сливане', synthesis: 'синтез', equilibrium: 'равновесие', trinity: 'троица',
  school: 'училище', academy: 'академия', 'all computed': 'всичко изчислено', 'self build': 'само-изграждане',
  proof: 'доказателство', 'components shown': 'компонентите показани',
}
const checks = computed(() => data.checks.map((c) => ({ ...c, label: bg.value ? bgWhat[c.what] ?? c.what : c.what })))
const t = computed(() =>
  bg.value
    ? { eyebrow: 'завърши всичко', lead: `${data.passed}/${data.total} доказателства за завършеност — всички наведнъж.`, alive: 'И отворените въпроси го държат живо.' }
    : { eyebrow: 'complete all', lead: `${data.passed}/${data.total} completion proofs — all at once.`, alive: 'And the open questions keep it alive.' },
)
</script>

<template>
  <section class="cmp dt-card" :class="{ done: data.complete }" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <p class="cmp__lead">{{ t.lead }}</p>
    <ul class="cmp__checks">
      <li v-for="c in checks" :key="c.what" :class="{ ok: c.ok }">
        <span class="cmp__mark">{{ c.ok ? '✓' : '·' }}</span>{{ c.label }}
      </li>
    </ul>
    <p class="cmp__alive">{{ t.alive }}</p>
  </section>
</template>

<style scoped>
.cmp {
  margin: 1.5rem 0;
  border-radius: 14px;
  padding: 1.2rem 1.4rem;
}
.cmp.done {
  border-color: var(--vp-c-brand-1);
}
.cmp__lead {
  margin: 0.2rem 0 0.8rem;
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
  font-weight: 600;
}
.cmp__checks {
  list-style: none;
  padding: 0;
  margin: 0 0 0.7rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 0.3rem;
}
.cmp__checks li {
  font-size: 0.83rem;
  color: var(--vp-c-text-3);
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
}
.cmp__checks li.ok {
  color: var(--vp-c-text-1);
}
.cmp__mark {
  color: var(--vp-c-brand-1);
  font-weight: 700;
}
.cmp__alive {
  margin: 0;
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
  font-style: italic;
}
</style>
