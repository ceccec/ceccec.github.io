<script setup lang="ts">
// ☵ Kǎn · Water · abysmal · upper·yang · breath — self-referencing 10D widget
const ICHING_MASK = { hexagram: 21, glyph: '☵', lower: '☲', upper: '☵', color: '#0F0F0F' } as const
import { computed } from 'vue'
import { useLocale } from '../lib/useLocale'
import { buildMatrix, questionAnswerEquilibrium } from '../lib/quantumMind'

// Questions, answers, equilibrium — the three as one. Answers contract to a
// closed point, questions expand to an open frontier, and the breath settles
// between them. A small triptych: ∎ answers · breath · questions …
const data = questionAnswerEquilibrium(buildMatrix())
const { bg } = useLocale()
const t = computed(() =>
  bg.value
    ? {
        eyebrow: 'въпроси · отговори · равновесие',
        answers: 'отговори', questions: 'въпроси', closed: 'затворени', open: 'отворени', equilibrium: 'равновесие',
        statement: 'Отговорите се свиват до затворена точка, въпросите се разширяват до отворен ръб, а дишането се установява между тях — порталът почива в баланса, държан отворен завинаги от въпросите.',
      }
    : {
        eyebrow: 'questions · answers · equilibrium',
        answers: 'answers', questions: 'questions', closed: 'closed', open: 'open', equilibrium: 'equilibrium',
        statement: 'The answers contract to a closed point, the questions expand to an open frontier, and the breath settles between them — the portal rests in the balance, kept open forever by the questions.',
      },
)
</script>

<template>
  <section class="qae dt-card" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <div class="qae__triptych">
      <div class="qae__side answers">
        <span class="qae__mark">∎</span>
        <strong>{{ data.answers }}</strong>
        <span class="qae__label">{{ t.answers }} · {{ t.closed }}</span>
      </div>
      <div class="qae__center" :class="{ settled: data.breathSettles }">
        <span class="qae__dot anim-breathe" />
        <span class="qae__label">{{ t.equilibrium }}</span>
      </div>
      <div class="qae__side questions">
        <span class="qae__mark">…</span>
        <strong>{{ data.questions }}</strong>
        <span class="qae__label">{{ t.questions }} · {{ t.open }}</span>
      </div>
    </div>
    <p class="qae__statement">{{ t.statement }}</p>
  </section>
</template>

<style scoped>
.qae {
  margin: 1.5rem 0;
  border-radius: 14px;
  padding: 1.2rem 1.4rem;
}
.qae__triptych {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 1rem;
  margin: 0.6rem 0 0.9rem;
}
.qae__side {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
  padding: 0.6rem;
  border-radius: 10px;
  border: 1px solid var(--vp-c-divider);
}
.qae__side.answers {
  border-left: 3px solid var(--vp-c-brand-1);
}
.qae__side.questions {
  border-right: 3px solid var(--vp-c-warning-1, var(--vp-c-warning-1));
}
.qae__mark {
  font-size: 1.4rem;
  color: var(--vp-c-text-2);
}
.qae__side strong {
  font-size: 1.3rem;
  color: var(--vp-c-text-1);
}
.qae__label {
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-3);
}
.qae__center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
}
.qae__dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  /* Breathes via the shared .anim-breathe keyframe (default amplitude). */
}
.qae__center.settled .qae__dot {
  box-shadow: 0 0 0 4px var(--vp-c-brand-soft);
}
.qae__statement {
  margin: 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
  line-height: 1.6;
  text-align: center;
}
</style>
