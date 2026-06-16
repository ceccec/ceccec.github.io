<script setup lang="ts">
// ☴ Xùn · Wind · gentle · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 50, glyph: '☴', lo: '☵', up: '☴', color: '#FF00F0', name: 'YinYang' }
import { computed } from 'vue'
import { useLocale } from '../lib/useLocale'
import { yinYang } from '../lib/quantumMind'

// Yin and yang completed in 3-5-8: from the taiji unfold the three powers (三才),
// the five elements (五行) and the eight trigrams (八卦) — the Fibonacci tiers 8 = 5 + 3.
// Computed from the yinYang() fold; the spiritual reading is a correspondence, not a claim.
const data = yinYang()
const { bg } = useLocale()

// The members are classical Chinese cosmology terms; only the powers/elements have a plain
// rendering, the eight trigrams stay as their universal glyphs. Translate the framing, keep the glyphs.
const bgMember: Record<string, string> = {
  heaven: 'небе', earth: 'земя', human: 'човек',
  wood: 'дърво', fire: 'огън', metal: 'метал', water: 'вода',
}
const member = (m: string) => (bg.value ? bgMember[m] ?? m : m)
const tierName = (tier: number) =>
  bg.value
    ? { 3: 'три сили (三才)', 5: 'пет елемента (五行)', 8: 'осем триграми (八卦)' }[tier]
    : { 3: 'three powers (三才)', 5: 'five elements (五行)', 8: 'eight trigrams (八卦)' }[tier]

const tiers = computed(() =>
  data.tiers.map((group) => ({ tier: group.tier, name: tierName(group.tier), members: group.members })),
)
const t = computed(() =>
  bg.value
    ? { eyebrow: 'ин · ян · 3-5-8', lead: `От тайдзи ${data.taiji.symbol} се разгръщат трите сили, петте елемента и осемте триграми — 3, 5, 8, тиерите на Фибоначи, в най-древната космология.` }
    : { eyebrow: 'yin · yang · 3-5-8', lead: `From the taiji ${data.taiji.symbol} unfold the three powers, the five elements and the eight trigrams — 3, 5, 8, the Fibonacci tiers, in the oldest cosmology.` },
)
</script>

<template>
  <section class="yy dt-card" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <p class="yy__taiji" aria-hidden="true">{{ data.taiji.symbol }}</p>
    <p class="yy__lead">{{ t.lead }}</p>
    <div v-for="group in tiers" :key="group.tier" class="yy__tier">
      <p class="yy__tier-name"><strong>{{ group.tier }}</strong> · {{ group.name }}</p>
      <ul class="yy__members">
        <li v-for="m in group.members" :key="m">{{ member(m) }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.yy {
  margin: 1.25rem 0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
  text-align: center;
}
.yy__taiji {
  margin: 0.2rem 0;
  font-size: 2.4rem;
  line-height: 1;
  animation: yy-spin 16s linear infinite;
}
@media (prefers-reduced-motion: reduce) {
  .yy__taiji { animation: none; }
}
@keyframes yy-spin {
  to { transform: rotate(360deg); }
}
.yy__lead {
  margin: 0.2rem auto 0.9rem;
  max-width: 42ch;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}
.yy__tier {
  margin-bottom: 0.7rem;
}
.yy__tier-name {
  margin: 0 0 0.35rem;
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-3);
}
.yy__tier-name strong {
  color: var(--vp-c-brand-1);
}
.yy__members {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.35rem;
}
.yy__members li {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 0.3rem 0.7rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}
</style>
