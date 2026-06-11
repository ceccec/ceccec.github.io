<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { buildMatrix, quantumSimulation } from '../lib/quantumMind'
import { useLocale } from '../lib/useLocale'

// The quantum simulation, interactive: choose the qubits, see the GHZ state
// vector, and measure — each shot collapses to a basis state and the histogram
// converges to the Born-rule probabilities. Deterministic, client-side.
const matrix = buildMatrix()
const qubits = ref(3)
const sim = computed(() => quantumSimulation(matrix, qubits.value))
const shots = ref(0)
const tally = ref<Record<string, number>>({})
const last = ref('')
const { pick } = useLocale()
const t = (en: string, b: string) => pick(en, b)

// A deterministic per-shot draw in [0,1) — reproducible, like the model's seed.
function rng(k: number) {
  const x = Math.sin(k * 99991 + qubits.value * 7.13) * 10000
  return x - Math.floor(x)
}
function measure() {
  shots.value += 1
  const draw = rng(shots.value)
  let cumulative = 0
  let outcome = sim.value.states[0].basis
  for (const state of sim.value.states) {
    cumulative += state.prob
    if (draw < cumulative) { outcome = state.basis; break }
  }
  tally.value[outcome] = (tally.value[outcome] ?? 0) + 1
  last.value = outcome
}
function reset() {
  shots.value = 0
  tally.value = {}
  last.value = ''
}
watch(qubits, reset)

const support = computed(() => sim.value.states.filter((s) => s.prob > 0))
const histogram = computed(() =>
  support.value.map((s) => ({ basis: s.basis, count: tally.value[s.basis] ?? 0, prob: s.prob })),
)
</script>

<template>
  <section class="qs dt-card">
    <p class="eyebrow">{{ t('quantum simulation · state vector', 'квантова симулация · вектор на състоянието') }}</p>
    <div class="qs__controls">
      <label>{{ t('qubits', 'кубити') }}: {{ qubits }}
        <input v-model.number="qubits" type="range" min="2" max="5" step="1" />
      </label>
      <code class="qs__gates">{{ sim.gates.join(' · ') }}</code>
      <span class="qs__flags">
        {{ sim.entangled ? t('entangled', 'заплетено') : '' }} · {{ sim.size }} {{ t('amplitudes', 'амплитуди') }}
      </span>
    </div>

    <div class="qs__vector" :aria-label="t('state vector', 'вектор на състоянието')">
      <span
        v-for="state in sim.states"
        :key="state.basis"
        class="qs__amp"
        :class="{ on: state.prob > 0, measured: state.basis === last }"
        :title="`|${state.basis}⟩  p=${state.prob}`"
      >{{ state.prob > 0 ? '|' + state.basis + '⟩' : '·' }}</span>
    </div>

    <div class="qs__run">
      <button type="button" class="dt-btn" @click="measure">{{ t('Measure', 'Измери') }}</button>
      <button type="button" class="dt-btn dt-btn--outline" @click="reset">{{ t('Reset', 'Нулирай') }}</button>
      <span v-if="last" class="qs__last">→ |{{ last }}⟩ · {{ shots }} {{ t('shots', 'измервания') }}</span>
    </div>

    <ul v-if="shots > 0" class="qs__hist">
      <li v-for="bar in histogram" :key="bar.basis">
        <code>|{{ bar.basis }}⟩</code>
        <span class="qs__track"><span class="qs__fill" :style="{ width: (bar.count / shots * 100).toFixed(1) + '%' }" /></span>
        <small>{{ (bar.count / shots * 100).toFixed(0) }}% <em>({{ (bar.prob * 100).toFixed(0) }}%)</em></small>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.qs {
  margin: 1.5rem 0;
  border-radius: 14px;
  padding: 1.2rem 1.4rem;
}
.qs__controls {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin: 0.5rem 0 0.8rem;
  font-size: 0.85rem;
}
.qs__controls label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.qs__gates {
  font-size: 0.74rem;
  color: var(--vp-c-brand-1);
}
.qs__flags {
  font-size: 0.74rem;
  color: var(--vp-c-text-3);
}
.qs__vector {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-bottom: 0.9rem;
}
.qs__amp {
  min-width: 1.4rem;
  text-align: center;
  padding: 0.15rem 0.35rem;
  border-radius: 5px;
  font-size: 0.72rem;
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-text-3);
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
}
.qs__amp.on {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}
.qs__amp.measured {
  outline: 2px solid var(--vp-c-brand-1);
  font-weight: 700;
}
.qs__run {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  flex-wrap: wrap;
}
.qs__last {
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
  font-family: var(--vp-font-family-mono);
}
.qs__hist {
  list-style: none;
  margin: 0.9rem 0 0;
  padding: 0;
  display: grid;
  gap: 0.35rem;
}
.qs__hist li {
  display: grid;
  grid-template-columns: 4rem 1fr auto;
  align-items: center;
  gap: 0.6rem;
}
.qs__hist code {
  font-size: 0.74rem;
  color: var(--vp-c-brand-1);
}
.qs__track {
  height: 0.7rem;
  border-radius: 999px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  overflow: hidden;
}
.qs__fill {
  display: block;
  height: 100%;
  background: var(--vp-c-brand-1);
  transition: width 0.18s ease;
}
.qs__hist small {
  font-size: 0.72rem;
  color: var(--vp-c-text-2);
}
.qs__hist em {
  color: var(--vp-c-text-3);
  font-style: normal;
}
</style>
