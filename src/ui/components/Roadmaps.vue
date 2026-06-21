<script setup lang="ts">
// ☳ Zhèn · Thunder · arousing · upper·yang · shrink — self-referencing 10D widget
const ICHING_MASK = { hexagram: 8, glyph: '☳', lower: '☷', upper: '☳', color: '#00F000' }
import { computed } from 'vue'
import { buildMatrix, roadmaps } from '../lib'
import { useLocale } from '../lib'
import Card from './ui/Card'
import Badge from './ui/Badge'

// The roadmaps, complete: three tracks, every milestone marked done, next, or
// later. One source for where the portal is and where it is going.
const data = roadmaps(buildMatrix())
const { bg } = useLocale()

const bgTrack: Record<string, string> = { cryptography: 'криптография', learning: 'учене', journey: 'пътуване' }
const bgStatus: Record<string, string> = { done: 'готово', next: 'следва', later: 'по-късно' }
const statusVariant: Record<string, 'success' | 'default' | 'outline'> = { done: 'success', next: 'default', later: 'outline' }
// Translate the milestone titles that have a settled Bulgarian name elsewhere
// (courses, journey stations); the technical crypto tool names stay canonical.
const bgMilestone: Record<string, string> = {
  Foundations: 'Основи', 'The Machine': 'Машината', 'The Senses': 'Сетивата', 'The Society': 'Обществото', 'The Mind': 'Умът',
  'Graduation credential': 'Акредитив за дипломиране',
  Start: 'Начало', School: 'Училище', Console: 'Конзола', Commands: 'Команди', Mind: 'Ум', Architecture: 'Архитектура', Boundaries: 'Граници', Show: 'Покажи',
}

const tracks = computed(() =>
  data.tracks.map((track) => ({
    ...track,
    name: bg.value ? bgTrack[track.track] ?? track.track : track.track,
    milestones: track.milestones.map((entry) => ({
      ...entry,
      title: bg.value ? bgMilestone[entry.milestone] ?? entry.milestone : entry.milestone,
      label: bg.value ? bgStatus[entry.status] ?? entry.status : entry.status,
    })),
  })),
)
const t = computed(() =>
  bg.value
    ? { eyebrow: 'пътни карти · цялостно', sub: `${data.done} готови · ${data.planned} планирани` }
    : { eyebrow: 'roadmaps · complete', sub: `${data.done} done · ${data.planned} planned` },
)
</script>

<template>
  <section class="roadmaps" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <p class="roadmaps__sub">{{ t.sub }}</p>
    <div class="roadmaps__grid">
      <Card v-for="track in tracks" :key="track.track" class="roadmaps__track">
        <header class="roadmaps__head">
          <strong><span class="roadmaps__icon">{{ track.icon }}</span> {{ track.name }}</strong>
        </header>
        <ol class="roadmaps__list">
          <li v-for="entry in track.milestones" :key="entry.milestone" :class="entry.status" :title="entry.note">
            <span class="roadmaps__title">{{ entry.title }}</span>
            <Badge :variant="statusVariant[entry.status]">{{ entry.label }}</Badge>
          </li>
        </ol>
      </Card>
    </div>
  </section>
</template>

<style scoped>
.roadmaps {
  margin: 1.5rem 0;
}
.roadmaps__sub {
  margin: 0.2rem 0 0.9rem;
  color: var(--vp-c-text-3);
  font-size: 0.8rem;
}
.roadmaps__grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}
.roadmaps__track {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.roadmaps__head strong {
  font-size: 1rem;
  text-transform: capitalize;
}
.roadmaps__icon {
  margin-right: 0.3rem;
}
.roadmaps__list {
  display: grid;
  gap: 0.4rem;
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: ms;
}
.roadmaps__list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;
  border-left: 3px solid var(--vp-c-divider);
  padding-left: 0.7rem;
}
.roadmaps__list li.done {
  border-left-color: var(--ich-success-1);
}
.roadmaps__list li.next {
  border-left-color: var(--vp-c-brand-1);
}
.roadmaps__list li.later {
  border-left-color: var(--vp-c-text-3);
  opacity: 0.85;
}
.roadmaps__title {
  font-size: 0.86rem;
}
</style>
