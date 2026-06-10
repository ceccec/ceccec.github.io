<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '../lib/useLocale'
import { buildMatrix, exhaustQuestions } from '../lib/quantumMind'

// Continue until no answers. Ask, follow each answer's new questions, repeat —
// until the frontier empties. This shows the loop reaching its terminal: the
// question-space closed on itself.
const data = exhaustQuestions(buildMatrix())
const { bg } = useLocale()
const t = computed(() =>
  bg.value
    ? {
        eyebrow: 'продължи, докато няма отговори',
        lead: `Питай, следвай новите въпроси от всеки отговор, повтаряй — докато не остане нов въпрос.`,
        asked: 'зададени въпроса', rounds: 'кръга',
        closed: 'Пространството на въпросите се затвори. Няма повече отговори за даване.',
        open: 'Все още отворено.',
      }
    : {
        eyebrow: 'continue until no answers',
        lead: `Ask, follow the new questions each answer surfaces, repeat — until no new question remains.`,
        asked: 'questions asked', rounds: 'rounds',
        closed: 'The question-space closed on itself. There are no more answers to give.',
        open: 'Still open.',
      },
)
</script>

<template>
  <section class="qc">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <p class="qc__lead">{{ t.lead }}</p>
    <div class="qc__stats">
      <span><strong>{{ data.asked }}</strong> {{ t.asked }}</span>
      <span><strong>{{ data.rounds }}</strong> {{ t.rounds }}</span>
    </div>
    <p class="qc__verdict" :class="{ closed: data.closed }">
      {{ data.closed ? '∎ ' + t.closed : t.open }}
    </p>
  </section>
</template>

<style scoped>
.qc {
  margin: 1.25rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  background: var(--vp-c-bg-soft);
}
.qc__lead {
  margin: 0.2rem 0 0.7rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}
.qc__stats {
  display: flex;
  gap: 1.2rem;
  margin-bottom: 0.6rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}
.qc__stats strong {
  color: var(--vp-c-brand-1);
  font-size: 1.05rem;
}
.qc__verdict {
  margin: 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}
.qc__verdict.closed {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}
</style>
