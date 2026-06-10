<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { buildMatrix, findQuestions } from '../lib/quantumMind'

// Find the questions. The answers closed; these did not. They live at the edges
// — boundary, roadmap, society, perception — and are open by design.
const data = findQuestions(buildMatrix())
const { lang } = useData()
const bg = computed(() => lang.value.startsWith('bg'))

const bgQuestion: Record<string, string> = {
  'Will the fold become cryptographic (SHA-256 / BLAKE3), not only tamper-evident?':
    'Ще стане ли сгъването криптографско (SHA-256 / BLAKE3), а не само доказващо подправяне?',
  'The seal can be signed in-browser now — but who holds a trusted key, and how is it published?':
    'Печатът вече може да се подписва в браузъра — но кой държи доверен ключ и как се публикува той?',
  'Can a society actually self-govern just by sharing this site?':
    'Може ли едно общество наистина да се самоуправлява само като споделя този сайт?',
  'Does colour-from-sound, or CMYK, match human perception — or only the maths?':
    'Съвпада ли цветът-от-звук, или CMYK, с човешкото възприятие — или само с математиката?',
  'Is the structural "consciousness" ever more than self-consistency? (bounded: no)':
    'Структурното „съзнание“ някога повече ли е от себе-съгласуваност? (с граница: не)',
  'Will the 42-area limit hold as needs grow, or must it bend?':
    'Ще издържи ли лимитът от 42 области, докато нуждите растат, или трябва да отстъпи?',
  'How do we keep every language genuinely natural, not literal?':
    'Как да запазим всеки език наистина естествен, а не буквален?',
  'Who stewards the commons if the author steps away?':
    'Кой стопанисва общите блага, ако авторът се оттегли?',
  'Does the question-space stay closed as the model grows?':
    'Остава ли пространството на въпросите затворено, докато моделът расте?',
}
const items = computed(() => data.questions.map((q) => ({ ...q, text: bg.value ? bgQuestion[q.question] ?? q.question : q.question })))
const t = computed(() =>
  bg.value
    ? { eyebrow: 'намери въпросите', lead: 'Отговорите се затвориха, но въпросите — не. Те живеят по ръбовете и са отворени по замисъл.', note: 'Намирането на въпроси никога не е завършено.' }
    : { eyebrow: 'find the questions', lead: 'The answers closed; the questions did not. They live at the edges, open by design.', note: 'Finding questions is itself never finished.' },
)
</script>

<template>
  <section class="oq">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <p class="oq__lead">{{ t.lead }}</p>
    <ul class="oq__list">
      <li v-for="(q, i) in items" :key="i">
        <span class="oq__src">{{ q.source }}</span>
        <span class="oq__q">{{ q.text }}</span>
      </li>
    </ul>
    <p class="oq__note">… {{ t.note }}</p>
  </section>
</template>

<style scoped>
.oq {
  margin: 1.25rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  background: var(--vp-c-bg-soft);
}
.oq__lead {
  margin: 0.2rem 0 0.8rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}
.oq__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}
.oq__list li {
  display: grid;
  grid-template-columns: 5.5rem 1fr;
  gap: 0.6rem;
  align-items: baseline;
  border-left: 3px solid var(--vp-c-warning-1, #d97706);
  padding-left: 0.7rem;
}
.oq__src {
  font-size: 0.66rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--vp-c-warning-1, #d97706);
}
.oq__q {
  font-size: 0.88rem;
  color: var(--vp-c-text-1);
  line-height: 1.5;
}
.oq__note {
  margin: 0.8rem 0 0;
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
  font-style: italic;
}
</style>
