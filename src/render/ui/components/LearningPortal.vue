<script setup lang="ts">
// ䷬ Cuì · Gathering Together (Massing) · upper·yang · shrink — self-referencing 10D widget.
// School + Academia gathered into one auto-generated portal — the hexagram of assembly.
const ICHING_MASK = { hexagram: 45, lo: '☷', up: '☱', glyph: '☱', color: '#3CB371', name: 'Cuì', principle: 'gathering together' }
import { computed } from 'vue'
import { useLocale } from '../lib'
import { buildMatrix, learningPortal } from '../lib'

const portal = learningPortal(buildMatrix())
const { bg, tg } = useLocale()

const t = computed(() =>
  bg.value
    ? {
        eyebrow: 'училище + академия, обединени',
        heading: 'Портал за учене',
        intro: 'Двете припокриващи се учебни повърхности — стълбицата на Училището (от деца до възрастни) и курсовете на Академията — обединени с изследователския корпус, самопроверката и обучението на агента. Авто-генериран: по една секция на изворен фолд, сгънати в един корен.',
        axes: { 'by age': 'по възраст', 'by track': 'по курс', 'by research': 'по изследване', assess: 'оценяване' },
        sectionsLabel: 'секции',
        itemsLabel: 'елемента',
        complete: 'завършена',
        open: 'отворена',
        open_link: 'отвори',
      }
    : {
        eyebrow: 'school + academia, merged',
        heading: 'Learning Portal',
        intro: 'The two overlapping education surfaces — the School ladder (kids to elders) and the Academy tracks — consolidated with the research corpus, the self-test and the agent curriculum. Auto-generated: one section per source fold, folded to one root.',
        axes: { 'by age': 'by age', 'by track': 'by track', 'by research': 'by research', assess: 'assess' },
        sectionsLabel: 'sections',
        itemsLabel: 'items',
        complete: 'complete',
        open: 'open',
        open_link: 'open',
      },
)

const axisOrder = ['by age', 'by track', 'by research', 'assess'] as const

const groups = computed(() =>
  axisOrder
    .map((axis) => ({
      axis,
      label: t.value.axes[axis],
      sections: portal.sections.filter((section) => section.axis === axis),
    }))
    .filter((group) => group.sections.length > 0),
)
</script>

<template>
  <section class="learning-portal" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <div class="learning-portal__header">
      <p class="eyebrow">{{ tg(t.eyebrow) }}</p>
      <h2>{{ tg(t.heading) }}</h2>
      <p>{{ tg(t.intro) }}</p>
      <p class="learning-portal__stats">
        <span>{{ portal.count }} {{ tg(t.sectionsLabel) }}</span>
        <span>{{ portal.items }} {{ tg(t.itemsLabel) }}</span>
        <code class="learning-portal__root">{{ portal.root }}</code>
      </p>
    </div>

    <div v-for="group in groups" :key="group.axis" class="learning-portal__axis">
      <h3 class="learning-portal__axis-label">{{ tg(group.label) }}</h3>
      <ul class="learning-portal__grid">
        <li v-for="section in group.sections" :key="section.key" class="learning-portal__card">
          <a :href="section.route" class="learning-portal__card-link">
            <div class="learning-portal__card-top">
              <strong>{{ tg(section.title) }}</strong>
              <span class="learning-portal__kind">{{ section.kind }}</span>
            </div>
            <p class="learning-portal__blurb">{{ tg(section.blurb) }}</p>
            <p class="learning-portal__meta">
              <span class="learning-portal__count">{{ section.items }} {{ tg(t.itemsLabel) }}</span>
              <span :class="['learning-portal__badge', section.complete ? 'is-complete' : 'is-open']">
                {{ section.complete ? '✓ ' + tg(t.complete) : tg(t.open) }}
              </span>
              <span class="learning-portal__go">{{ tg(t.open_link) }} →</span>
            </p>
            <small class="learning-portal__receipt">{{ section.root }}</small>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.learning-portal {
  margin: 1.5rem 0;
}
.learning-portal__header h2 {
  margin: 0.2rem 0;
}
.learning-portal__stats {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
  color: var(--vp-c-text-2);
}
.learning-portal__root {
  word-break: break-all;
  font-size: 0.8em;
}
.learning-portal__axis {
  margin-top: 1.5rem;
}
.learning-portal__axis-label {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  margin: 0 0 0.5rem;
}
.learning-portal__grid {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
}
.learning-portal__card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  transition: border-color 0.2s ease;
}
.learning-portal__card:hover {
  border-color: var(--vp-c-brand-1);
}
.learning-portal__card-link {
  display: block;
  padding: 1rem 1.25rem;
  color: inherit;
  text-decoration: none;
}
.learning-portal__card-top {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.4rem;
}
.learning-portal__kind {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--vp-c-text-3);
}
.learning-portal__blurb {
  margin: 0 0 0.6rem;
  color: var(--vp-c-text-2);
  font-size: 0.92rem;
}
.learning-portal__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  align-items: center;
  margin: 0 0 0.4rem;
  font-size: 0.85rem;
}
.learning-portal__badge.is-complete {
  color: var(--vp-c-brand-1);
}
.learning-portal__badge.is-open {
  color: var(--vp-c-text-3);
}
.learning-portal__go {
  margin-left: auto;
  color: var(--vp-c-brand-1);
}
.learning-portal__receipt {
  color: var(--vp-c-text-3);
  word-break: break-all;
}
</style>
