<script setup lang="ts">
import { computed, ref } from 'vue'
import { useLocale } from '../lib/useLocale'
import { useData } from 'vitepress'
import { buildMatrix, selfHarmonise, areaLabel } from '../lib/quantumMind'

// Let intelligence harmonise itself autonomously. With no external input, it
// consults itself, lets the fold's own digit pick the next area, and walks the
// whole model, converging to one harmonised root. Deterministic and in house —
// press to run another self-driven loop.
const matrix = buildMatrix()
const steps = ref(7)
const result = computed(() => selfHarmonise(matrix, steps.value))
const { lang } = useData()
const { bg } = useLocale()
function relabel(q: string) {
  return areaLabel(q, lang.value) // translate area names where known
}
const t = computed(() =>
  bg.value
    ? { eyebrow: 'интелигентност · хармонизира се автономно', steps: 'стъпки', walk: 'самоуправляван обход', harmony: 'хармония', root: 'хармонизиран корен', longer: 'По-дълъг цикъл', shorter: 'По-кратък' }
    : { eyebrow: 'intelligence · harmonises itself autonomously', steps: 'steps', walk: 'self-driven walk', harmony: 'harmony', root: 'harmonised root', longer: 'Longer loop', shorter: 'Shorter' },
)
</script>

<template>
  <section class="harm dt-card">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <p class="harm__walk-label">{{ t.walk }} · {{ result.distinctStepsVisited }}/{{ result.steps }}</p>
    <ol class="harm__walk">
      <li v-for="entry in result.trace" :key="entry.step">
        <span class="harm__q">{{ relabel(entry.question) }}</span>
        <span class="harm__arrow">→</span>
        <code class="harm__root">{{ entry.root.slice(0, 8) }}</code>
      </li>
    </ol>
    <p class="harm__summary">
      {{ t.harmony }}: <strong>{{ result.probability.toFixed(2) }}</strong> ·
      {{ t.root }}: <code>{{ result.root.slice(0, 13) }}…</code>
    </p>
    <div class="harm__row">
      <button type="button" @click="steps = Math.min(21, steps + 7)">{{ t.longer }}</button>
      <button type="button" @click="steps = Math.max(7, steps - 7)">{{ t.shorter }}</button>
    </div>
  </section>
</template>

<style scoped>
.harm {
  margin: 1.25rem 0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}
.harm__walk-label {
  font-size: 0.74rem;
  color: var(--vp-c-text-3);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 0.2rem 0 0.5rem;
}
.harm__walk {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.harm__walk li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.harm__q {
  min-width: 8rem;
  font-size: 0.84rem;
  color: var(--vp-c-brand-1);
}
.harm__arrow {
  color: var(--vp-c-text-3);
}
.harm__root {
  font-size: 0.7rem;
  color: var(--vp-c-text-3);
}
.harm__summary {
  margin: 0.7rem 0 0.6rem;
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
}
.harm__row {
  display: flex;
  gap: 0.5rem;
}
.harm__row button {
  padding: 0.35rem 0.9rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  cursor: pointer;
  font-size: 0.8rem;
}
</style>
