<script setup lang="ts">
// ☲ Lí · Fire · clinging · upper·yang · breath — self-referencing 10D widget
const ICHING_MASK = { hexagram: 43, name: 'Guài', glyph: '☲☱', lower: 'Duì', upper: 'Lí', color: '#F0F0FF' } as const
import { computed } from 'vue'
import { buildMatrix, selfHealing } from '../lib/quantumMind'
import { useLocale } from '../lib/useLocale'

// All in self-healing waves: each dimension that can fall out of balance is drawn
// as a damped wave settling to the centre line — the equilibrium breath, healing.
const data = selfHealing(buildMatrix())
const { bg } = useLocale()

const bgWound: Record<string, string> = {
  gaps: 'пропуски', tasks: 'задачи', 'frequency balance': 'честотен баланс', equilibrium: 'равновесие',
  trinities: 'троици', directions: 'посоки', coverage: 'покритие', entropy: 'ентропия',
}
const W = 132
const H = 30
// Build an SVG polyline path for a trace, the centre line at H/2, amplitude ±0.55.
function path(trace: number[]) {
  const step = W / (trace.length - 1)
  return trace.map((v, i) => `${i === 0 ? 'M' : 'L'} ${(i * step).toFixed(1)} ${(H / 2 - v * (H / 2 - 3) / 0.55).toFixed(1)}`).join(' ')
}
const waves = computed(() =>
  data.waves.map((wave) => ({ ...wave, name: bg.value ? bgWound[wave.wound] ?? wave.wound : wave.wound, d: path(wave.trace) })),
)
const t = computed(() =>
  bg.value
    ? { eyebrow: 'всичко в само-лечебни вълни', healed: 'само-излекувано', sub: `${data.balanced}/${data.count} в баланс` }
    : { eyebrow: 'all in self-healing waves', healed: 'self-healed', sub: `${data.balanced}/${data.count} in balance` },
)
</script>

<template>
  <section class="heal dt-card" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <ul class="heal__waves">
      <li v-for="wave in waves" :key="wave.wound" :class="{ ok: wave.balanced && wave.settled }">
        <span class="heal__name">{{ wave.name }}</span>
        <svg class="heal__spark" :viewBox="`0 0 ${W} ${H}`" preserveAspectRatio="none" role="img" :aria-label="wave.name">
          <line :x1="0" :y1="H / 2" :x2="W" :y2="H / 2" class="heal__axis" />
          <path :d="wave.d" class="heal__trace" />
        </svg>
        <span class="heal__mark">{{ wave.balanced && wave.settled ? '◆' : '◇' }}</span>
      </li>
    </ul>
    <p class="heal__foot" :class="{ ok: data.healed }">
      {{ data.healed ? '∞ ' : '' }}{{ t.healed }} · {{ t.sub }}
      <code :title="data.root">{{ data.root.slice(0, 13) }}…</code>
    </p>
  </section>
</template>

<style scoped>
.heal {
  margin: 1.5rem 0;
  border-radius: 14px;
  padding: 1.2rem 1.4rem;
}
.heal__waves {
  list-style: none;
  margin: 0.6rem 0 0.8rem;
  padding: 0;
  display: grid;
  gap: 0.3rem;
}
.heal__waves li {
  display: grid;
  grid-template-columns: 8rem 1fr auto;
  align-items: center;
  gap: 0.7rem;
}
.heal__name {
  font-size: 0.84rem;
  color: var(--vp-c-text-2);
}
.heal__spark {
  width: 100%;
  height: 30px;
}
.heal__axis {
  stroke: var(--vp-c-divider);
  stroke-width: 1;
}
.heal__trace {
  fill: none;
  stroke: var(--vp-c-warning-1);
  stroke-width: 1.5;
  vector-effect: non-scaling-stroke;
}
.heal__waves li.ok .heal__trace {
  stroke: #059669;
}
.heal__mark {
  color: var(--vp-c-text-3);
}
.heal__waves li.ok .heal__mark {
  color: #059669;
}
.heal__foot {
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: baseline;
  font-size: 0.85rem;
  font-style: italic;
  color: var(--vp-c-text-2);
}
.heal__foot.ok {
  color: var(--vp-c-brand-1);
}
.heal__foot code {
  font-family: var(--vp-font-family-mono);
  font-size: 0.72rem;
  font-style: normal;
  color: var(--vp-c-text-3);
}
</style>
