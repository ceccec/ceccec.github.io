<script setup lang="ts">
// ☲ Lí · Fire · clinging · upper·yang · breath — self-referencing 10D widget
const ICHING_MASK = { hexagram: 42, name: 'Wèi Jì', glyph: '☲☵', lower: 'Kǎn', upper: 'Lí', color: '#F0F0F0' } as const
import { computed } from 'vue'
import { useLocale } from '../lib/useLocale'
import { buildMatrix, securityScan } from '../lib/quantumMind'

// All connected users interact securely, scanned in 3-5-8. The peers meet over a
// same-origin channel with content-addressed messages and no server to attack;
// this lists the 16 security-by-architecture properties across three tiers.
const data = securityScan(buildMatrix())
const { bg } = useLocale()
const tiers = computed(() => [3, 5, 8].map((tier) => ({ tier, items: data.properties.filter((p) => p.tier === tier) })))
const t = computed(() =>
  bg.value
    ? { eyebrow: 'сигурно взаимодействие · сканиране 3-5-8', lead: `${data.count} свойства на сигурност по архитектура, в три нива.`, kinds: { 3: 'ядро', 5: 'структура', 8: 'повърхност' } as Record<number, string>, note: 'Не е формален одит или пентест — описва как дизайнът избягва цели класове рискове.' }
    : { eyebrow: 'secure interaction · scanning 3-5-8', lead: `${data.count} security-by-architecture properties, across three tiers.`, kinds: { 3: 'core', 5: 'structural', 8: 'surface' } as Record<number, string>, note: 'Not a formal audit or pentest — it describes how the design avoids whole classes of risk.' },
)
</script>

<template>
  <section class="sec dt-card" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <p class="sec__lead">{{ t.lead }}</p>
    <div v-for="tier in tiers" :key="tier.tier" class="sec__tier">
      <p class="sec__h"><span class="sec__n">{{ tier.tier }}</span> {{ t.kinds[tier.tier] }}</p>
      <ul class="sec__list">
        <li v-for="(p, i) in tier.items" :key="i">✓ {{ p.property }}</li>
      </ul>
    </div>
    <p class="sec__note">⚠ {{ t.note }}</p>
  </section>
</template>

<style scoped>
.sec {
  margin: 1.25rem 0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}
.sec__lead {
  margin: 0.2rem 0 0.7rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}
.sec__tier {
  margin-bottom: 0.5rem;
}
.sec__h {
  margin: 0 0 0.2rem;
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-3);
}
.sec__n {
  display: inline-block;
  min-width: 1.3rem;
  text-align: center;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  border-radius: 5px;
}
.sec__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 0.2rem;
  font-size: 0.82rem;
  color: var(--vp-c-text-1);
}
.sec__note {
  margin: 0.7rem 0 0;
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  border-left: 3px solid var(--vp-c-warning-1, #d97706);
  padding-left: 0.6rem;
}
</style>
