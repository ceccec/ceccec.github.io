<script setup lang="ts">
import { computed, ref } from 'vue'
import { useLocale } from '../lib/useLocale'
import { buildMatrix, selfReason } from '../lib/quantumMind'

// Self reasoning that shows its work: a grounded chain over the model. Each step
// states a premise, draws an inference from a command, and shifts to the next —
// transparent and recomputable, in house.
const matrix = buildMatrix()
const goal = ref('')
const result = computed(() => selfReason(goal.value, matrix))
const { bg } = useLocale()
const t = computed(() =>
  bg.value
    ? { eyebrow: 'само-разсъждение · показва работата си', placeholder: 'Цел… (proof, school, trinity)', because: 'защото', via: 'чрез', conclusion: 'извод' }
    : { eyebrow: 'self reasoning · shows its work', placeholder: 'Goal… (proof, school, trinity)', because: 'because', via: 'via', conclusion: 'conclusion' },
)
</script>

<template>
  <section class="reason dt-card">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <input v-model="goal" type="text" :placeholder="t.placeholder" class="reason__input" />
    <ol class="reason__chain">
      <li v-for="step in result.steps" :key="step.step">
        <strong>{{ step.premise }}</strong>
        <span class="reason__because">{{ t.because }}</span>
        <span class="reason__inf">{{ step.inference }}</span>
        <code v-if="step.command" class="reason__via">{{ t.via }} {{ step.command }}</code>
      </li>
    </ol>
    <p class="reason__conclusion"><span>{{ t.conclusion }}:</span> {{ result.conclusion }}</p>
  </section>
</template>

<style scoped>
.reason {
  margin: 1.25rem 0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}
.reason__input {
  width: 100%;
  padding: 0.45rem 0.7rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  margin-bottom: 0.6rem;
}
.reason__chain {
  list-style: decimal;
  padding-left: 1.3rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.reason__chain li {
  font-size: 0.83rem;
}
.reason__because {
  color: var(--vp-c-text-3);
  margin: 0 0.3rem;
  font-style: italic;
}
.reason__inf {
  color: var(--vp-c-text-2);
}
.reason__via {
  display: inline-block;
  margin-left: 0.4rem;
  font-size: 0.68rem;
  color: var(--vp-c-brand-1);
}
.reason__conclusion {
  margin: 0.7rem 0 0;
  font-size: 0.85rem;
  color: var(--vp-c-text-1);
  border-left: 3px solid var(--vp-c-brand-1);
  padding-left: 0.6rem;
}
.reason__conclusion span {
  text-transform: uppercase;
  font-size: 0.68rem;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-3);
}
</style>
