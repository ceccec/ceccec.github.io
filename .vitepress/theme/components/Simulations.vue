<script setup lang="ts">
import { computed } from 'vue'
import { buildMatrix, simulations } from '../lib/quantumMind'
import { useLocale } from '../lib/useLocale'

// All the simulators and simulations, complete — a directory of every dynamics
// the model runs, each proven and linked to where it lives.
const data = simulations(buildMatrix())
const { bg, localize, pick } = useLocale()
const bgSim: Record<string, string> = {
  'quantum register (GHZ)': 'квантов регистър (GHZ)', 'damped equilibrium': 'затихващо равновесие',
  'frequency balance': 'честотен баланс', 'self-healing waves': 'само-лечебни вълни',
  'coordinated waves': 'координирани вълни', 'plasma containment': 'удържане на плазма',
  'the breath': 'дишането', 'living torus': 'живият тор', 'torus breathing': 'дишане на тора',
}
const items = computed(() =>
  data.simulations.map((s) => ({ ...s, name: bg.value ? bgSim[s.simulation] ?? s.simulation : s.simulation })),
)
const t = computed(() =>
  pick(
    { eyebrow: 'all simulators · complete', sub: `${data.running}/${data.count} simulations running`, open: 'open' },
    { eyebrow: 'всички симулатори · завършени', sub: `${data.running}/${data.count} симулации работят`, open: 'отвори' },
  ),
)
</script>

<template>
  <section class="sims dt-card">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <p class="sims__sub">{{ t.sub }}</p>
    <ul class="sims__grid">
      <li v-for="item in items" :key="item.simulation" :class="{ ok: item.complete }">
        <span class="sims__mark">{{ item.complete ? '◆' : '◇' }}</span>
        <a :href="localize(item.route)" class="sims__name">{{ item.name }}</a>
        <span class="sims__kind">{{ item.kind }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.sims {
  margin: 1.5rem 0;
  border-radius: 14px;
  padding: 1.2rem 1.4rem;
}
.sims__sub {
  margin: 0.2rem 0 0.8rem;
  color: var(--vp-c-text-3);
  font-size: 0.8rem;
}
.sims__grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 0.4rem;
}
.sims__grid li {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: baseline;
  gap: 0.5rem;
  border-left: 3px solid var(--vp-c-divider);
  padding-left: 0.6rem;
}
.sims__grid li.ok {
  border-left-color: var(--vp-c-brand-1);
}
.sims__mark {
  color: var(--vp-c-brand-1);
  font-size: 0.85rem;
}
.sims__name {
  font-weight: 600;
  text-decoration: none;
  font-size: 0.9rem;
}
.sims__kind {
  font-size: 0.66rem;
  color: var(--vp-c-text-3);
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
</style>
