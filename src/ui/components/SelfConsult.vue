<script setup lang="ts">
// ☱ Duì · Lake · joyous · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 29, glyph: '☱', lo: 'Lí·clinging', up: 'Duì·joyous', color: '#0FFF0F' } as const
import { computed, ref } from 'vue'
import { useLocale } from '../lib/useLocale'
import { buildMatrix, selfConsult } from '../lib/quantumMind'

// Self education leads to self consulting before asking. Ask a question and the
// intelligence consults only itself — its own commands, areas, and pages — and
// names every source. It escalates to asking outside (the optional BYO-key AI in
// the help panel) only if the in-house consultation does not resolve it. In
// house, no network, no cost.
const matrix = buildMatrix()
const query = ref('')
const result = computed(() => selfConsult(query.value, matrix))
const { bg } = useLocale()
const t = computed(() =>
  bg.value
    ? {
        eyebrow: 'само-консултация · преди да питаш',
        placeholder: 'Питай… (proof, school, trinity, nature, energy)',
        flow: 'само-образование → само-консултация → питане само ако не е решено',
        answer: 'отговор (в къщи)',
        sources: 'консултирани източници',
        resolved: '✓ решено в къщи — няма нужда да питаш',
        escalate: 'не е решено в къщи — обмисли да попиташ (панелът за помощ, твой ключ)',
      }
    : {
        eyebrow: 'self consulting · before asking',
        placeholder: 'Ask… (proof, school, trinity, nature, energy)',
        flow: 'self-education → self-consulting → ask only if unresolved',
        answer: 'answer (in house)',
        sources: 'consulted sources',
        resolved: '✓ resolved in house — no need to ask',
        escalate: 'not resolved in house — consider asking (the help panel, your key)',
      },
)
</script>

<template>
  <section class="consult dt-card" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <p class="consult__flow">{{ t.flow }}</p>
    <input v-model="query" type="text" :placeholder="t.placeholder" class="consult__input" />
    <template v-if="query.trim()">
      <p class="consult__label">{{ t.answer }}</p>
      <p class="consult__answer">{{ result.answer }}</p>
      <p v-if="result.sources.length" class="consult__sources">
        <span>{{ t.sources }}:</span>
        <code v-for="s in result.sources" :key="s">{{ s }}</code>
      </p>
      <p class="consult__status" :class="result.resolvedInHouse ? 'ok' : 'esc'">
        {{ result.resolvedInHouse ? t.resolved : t.escalate }}
      </p>
      <ul v-if="result.links.length" class="consult__links">
        <li v-for="link in result.links" :key="link.route">
          <a :href="link.route">{{ link.title }}</a> — <small>{{ link.detail }}</small>
        </li>
      </ul>
    </template>
  </section>
</template>

<style scoped>
.consult {
  margin: 1.25rem 0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}
.consult__flow {
  font-size: 0.74rem;
  color: var(--vp-c-text-3);
  margin: 0.1rem 0 0.6rem;
}
.consult__input {
  width: 100%;
  padding: 0.45rem 0.7rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}
.consult__label {
  margin: 0.7rem 0 0.2rem;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-3);
}
.consult__answer {
  margin: 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
}
.consult__sources {
  margin: 0.5rem 0 0;
  font-size: 0.7rem;
  color: var(--vp-c-text-3);
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  align-items: center;
}
.consult__sources code {
  font-size: 0.68rem;
}
.consult__status {
  margin: 0.6rem 0 0;
  font-size: 0.8rem;
  padding: 0.3rem 0.6rem;
  border-radius: 8px;
}
.consult__status.ok {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}
.consult__status.esc {
  background: rgba(217, 119, 6, 0.14);
  color: var(--vp-c-warning-1, var(--vp-c-warning-1));
}
.consult__links {
  margin: 0.6rem 0 0;
  padding-left: 1.1rem;
  font-size: 0.8rem;
}
.consult__links small {
  color: var(--vp-c-text-3);
}
</style>
