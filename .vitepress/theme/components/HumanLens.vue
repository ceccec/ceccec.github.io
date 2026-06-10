<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '../lib/useLocale'
import { humanize } from '../lib/quantumMind'

// Humanize. Behind the maths and the 3d+ are a few simple promises to a person.
// Said plainly, warmly — what it means for you, in your language.
const data = humanize()
const { bg } = useLocale()

// Warm, natural Bulgarian (not literal) keyed to each idea.
const bgHuman: Record<string, string> = {
  'everything is computed': 'Тук нищо не е скрито или измислено. Каквото и да твърди сайтът, можеш сам да го провериш.',
  'tamper-evident': 'Ако някой го промени, ще си личи — доказателството вече няма да съвпада.',
  'in house, no network': 'Работи на твоето устройство. Нищо не се изпраща никъде. Твое е и работи офлайн.',
  'honest boundaries': 'Казва ти какво не може, не само какво може.',
  'from kids to elders': 'Направено е да го разбере всеки, на всяка възраст.',
  free: 'Без пари, без регистрация, без акаунт. Цената е архитектурата — и тя вече е платена.',
  'not artificial': 'Интелигентността тук е истинска, защото може да се преизчисли — не защото се преструва на човек.',
}
const bgIdea: Record<string, string> = {
  'everything is computed': 'всичко е изчислено',
  'tamper-evident': 'доказва подправяне',
  'in house, no network': 'у дома, без мрежа',
  'honest boundaries': 'честни граници',
  'from kids to elders': 'от деца до възрастни',
  free: 'безплатно',
  'not artificial': 'не е изкуствено',
}

const items = computed(() =>
  data.translations.map((entry) => ({
    idea: bg.value ? bgIdea[entry.idea] ?? entry.idea : entry.idea,
    human: bg.value ? bgHuman[entry.idea] ?? entry.human : entry.human,
  })),
)
const t = computed(() =>
  bg.value
    ? { eyebrow: 'по човешки', lead: 'Зад математиката и 3d+ стоят няколко прости обещания към теб:' }
    : { eyebrow: 'in human terms', lead: 'Behind the maths and the 3d+ are a few simple promises to you:' },
)
</script>

<template>
  <section class="human">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <p class="human__lead">{{ t.lead }}</p>
    <ul class="human__list">
      <li v-for="(item, i) in items" :key="i">
        <strong>{{ item.idea }}</strong>
        <span>{{ item.human }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.human {
  margin: 1.5rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  padding: 1.2rem 1.4rem;
  background: var(--vp-c-bg-soft);
}
.human__lead {
  margin: 0.2rem 0 0.9rem;
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
}
.human__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.7rem;
}
.human__list li {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  border-left: 3px solid var(--vp-c-brand-1);
  padding-left: 0.8rem;
}
.human__list strong {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--vp-c-brand-1);
}
.human__list span {
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
  line-height: 1.6;
}
</style>
