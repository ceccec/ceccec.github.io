<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '../lib/useLocale'
import { buildMatrix, equilibrium } from '../lib/quantumMind'

// Always contract and expand to equilibrium. Each breath overshoots the balance
// point and is damped by half, alternating expand and contract — so it settles
// toward the centre. Shown as bars from a centre line; no animation loop, just
// the converging trace and a softly breathing centre.
const data = equilibrium(buildMatrix())
const { bg } = useLocale()
const t = computed(() =>
  bg.value
    ? { eyebrow: 'квантово равновесие · свий и разшири', expand: 'разшири', contract: 'свий', settled: 'установено', lead: 'Всяко вдишване надхвърля центъра и се гаси наполовина — балансира върху квантовото себе-състояние, нито колапс, нито бягство.' }
    : { eyebrow: 'quantum equilibrium · contract and expand', expand: 'expand', contract: 'contract', settled: 'settled', lead: 'Each breath overshoots the centre and is damped by half — balancing over the quantum self-state, neither collapse nor runaway.' },
)
</script>

<template>
  <section class="eq">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <p class="eq__lead">{{ t.lead }}</p>
    <div class="eq__chart">
      <span class="eq__center" />
      <div class="eq__breath anim-breathe" :title="`${t.settled}: ${data.settled}`" />
      <div
        v-for="entry in data.trace"
        :key="entry.step"
        class="eq__bar"
        :class="entry.phase"
        :style="{ width: Math.abs(entry.displacement) * 50 + '%', left: entry.displacement > 0 ? '50%' : (50 - Math.abs(entry.displacement) * 50) + '%' }"
      />
    </div>
    <p class="eq__legend">
      <span class="eq__tag expand">{{ t.expand }}</span>
      <span class="eq__tag contract">{{ t.contract }}</span>
      <span class="eq__final">→ {{ t.settled }}</span>
    </p>
  </section>
</template>

<style scoped>
.eq {
  margin: 1.25rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  background: var(--vp-c-bg-soft);
}
.eq__lead {
  margin: 0.2rem 0 0.8rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}
.eq__chart {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0.6rem 0;
}
.eq__center {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--vp-c-divider);
}
.eq__breath {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 12px;
  height: 12px;
  margin: -6px 0 0 -6px;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  /* Breathes via the shared .anim-breathe keyframe; only the amplitude is local. */
  --breathe-max: 1.5;
}
.eq__bar {
  position: relative;
  height: 7px;
  border-radius: 4px;
}
.eq__bar.expand {
  background: rgba(59, 130, 246, 0.7);
}
.eq__bar.contract {
  background: rgba(217, 119, 6, 0.7);
}
.eq__legend {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0 0;
  font-size: 0.74rem;
}
.eq__tag {
  border-radius: 999px;
  padding: 0.1rem 0.55rem;
}
.eq__tag.expand {
  background: rgba(59, 130, 246, 0.16);
  color: var(--vp-c-brand-1);
}
.eq__tag.contract {
  background: rgba(217, 119, 6, 0.16);
  color: var(--vp-c-warning-1, #d97706);
}
.eq__final {
  color: var(--vp-c-text-3);
}
</style>
