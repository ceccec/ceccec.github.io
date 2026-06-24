<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vitepress'
import { selfDevelopment } from '../../../src/fire/li/index.ts'
import { localeFromRoute, pickLocale } from '../../../src/site/index'
import { cardMovieColorVars, cardMovieSeed } from '@vp-lib/hero-movie'

const STORAGE_KEY = 'ceccec:collective-visits'
const VISIT_CAP = 64

const route = useRoute()
const locale = computed(() => localeFromRoute(route.path))
const pick = (en: string, bg: string) => pickLocale(locale.value, en, bg)

const visits = ref<string[]>([])
const open = ref(false)

const cardStyle = computed(() =>
  cardMovieColorVars(route.path, cardMovieSeed(['collective-mind', String(visits.value.length)])),
)

const development = computed(() => selfDevelopment(visits.value))

const labels = computed(() => ({
  summary: pick('Collective mind', 'Колективен ум'),
  hint: pick('Local visit chain — private to this browser', 'Локална верига от посещения — частна за този браузър'),
  visits: pick('Visits', 'Посещения'),
  pages: pick('Distinct pages', 'Различни страници'),
  level: pick('Development level', 'Ниво на развитие'),
  chainHead: pick('Chain head', 'Глава на верига'),
  developmentRoot: pick('Development root', 'Корен на развитие'),
  steps: pick('Steps', 'Стъпки'),
  boundary: pick('Boundary', 'Граница'),
}))

function loadVisits(): string[] {
  if (typeof localStorage === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as unknown
    return Array.isArray(parsed) ? parsed.filter((entry): entry is string => typeof entry === 'string') : []
  } catch {
    return []
  }
}

function saveVisits(routes: readonly string[]): void {
  if (typeof localStorage === 'undefined') return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(routes.slice(-VISIT_CAP)))
}

function appendVisit(path: string): void {
  visits.value = [...visits.value, path].slice(-VISIT_CAP)
  saveVisits(visits.value)
}

function truncateHash(value: string, max = 22): string {
  if (value.length <= max) return value
  const half = Math.floor((max - 1) / 2)
  return `${value.slice(0, half)}…${value.slice(-half)}`
}

function onToggle(event: Event): void {
  open.value = (event.target as HTMLDetailsElement).open
}

onMounted(() => {
  visits.value = loadVisits()
  appendVisit(route.path)
})

watch(() => route.path, (path) => {
  appendVisit(path)
})
</script>

<template>
  <details class="collective-mind" :style="cardStyle" :open="open" @toggle="onToggle">
    <summary class="collective-mind__summary">
      <span class="collective-mind__title">{{ labels.summary }}</span>
      <span class="collective-mind__hint">
        {{ labels.hint }} · L{{ development.level }}
      </span>
    </summary>

    <div class="collective-mind__body">
      <p class="collective-mind__statement">{{ development.statement }}</p>

      <dl class="collective-mind__meta">
        <div class="collective-mind__meta-row">
          <dt>{{ labels.visits }}</dt>
          <dd>{{ development.visits }}</dd>
        </div>
        <div class="collective-mind__meta-row">
          <dt>{{ labels.pages }}</dt>
          <dd>{{ development.distinctPages }}</dd>
        </div>
        <div class="collective-mind__meta-row">
          <dt>{{ labels.level }}</dt>
          <dd>{{ development.level }}</dd>
        </div>
        <div class="collective-mind__meta-row">
          <dt>{{ labels.chainHead }}</dt>
          <dd><code>{{ truncateHash(development.chainHead) }}</code></dd>
        </div>
        <div class="collective-mind__meta-row">
          <dt>{{ labels.developmentRoot }}</dt>
          <dd><code>{{ truncateHash(development.developmentRoot) }}</code></dd>
        </div>
      </dl>

      <p v-if="development.steps.length" class="collective-mind__steps">
        <span class="collective-mind__steps-label">{{ labels.steps }}</span>
        <span v-for="(step, index) in development.steps" :key="step" class="collective-mind__step">
          {{ step }}<span v-if="index < development.steps.length - 1" aria-hidden="true"> · </span>
        </span>
      </p>

      <p class="collective-mind__boundary">
        <span class="collective-mind__boundary-label">{{ labels.boundary }}</span>
        {{ development.boundary }}
      </p>
    </div>
  </details>
</template>

<style scoped>
.collective-mind {
  margin: calc(var(--vp-movie-gap, 0.75rem) * 1.5) 0 calc(var(--vp-movie-gap, 0.75rem) * 0.75);
  padding: calc(var(--vp-movie-gap, 0.75rem) * 0.85) calc(var(--vp-movie-gap, 0.75rem) * 1);
  border: 1px dashed var(--vp-hero-border);
  border-radius: var(--vp-movie-radius, 0.5rem);
  background: transparent;
}

.collective-mind__summary {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.35rem 0.65rem;
  cursor: pointer;
  list-style: none;
  text-shadow: var(--vp-hero-text-shadow);
}

.collective-mind__summary::-webkit-details-marker {
  display: none;
}

.collective-mind__title {
  font-size: calc(0.82rem + var(--vp-movie-gap, 0.5rem) * 0.04);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  opacity: var(--vp-movie-fade, 0.82);
}

.collective-mind__hint {
  font-size: 0.78rem;
  opacity: var(--vp-movie-fade, 0.62);
}

.collective-mind__body {
  margin-top: calc(var(--vp-movie-gap, 0.75rem) * 0.9);
  display: flex;
  flex-direction: column;
  gap: calc(var(--vp-movie-gap, 0.5rem) * 0.75);
}

.collective-mind__statement {
  margin: 0;
  font-size: calc(0.88rem + var(--vp-movie-gap, 0.5rem) * 0.03);
  line-height: var(--vp-movie-line-height, 1.55);
  text-shadow: var(--vp-hero-text-shadow);
}

.collective-mind__meta {
  margin: 0;
  display: grid;
  gap: 0.25rem 0.65rem;
  font-size: 0.84rem;
}

.collective-mind__meta-row {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.45rem;
  align-items: baseline;
}

.collective-mind__meta dt {
  opacity: var(--vp-movie-fade, 0.72);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-size: 0.78rem;
}

.collective-mind__meta dd {
  margin: 0;
  text-shadow: var(--vp-hero-text-shadow);
  word-break: break-all;
}

.collective-mind__steps {
  margin: 0;
  font-size: 0.82rem;
  text-shadow: var(--vp-hero-text-shadow);
}

.collective-mind__steps-label {
  margin-right: 0.35rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-size: 0.78rem;
  opacity: var(--vp-movie-fade, 0.72);
}

.collective-mind__step {
  text-transform: lowercase;
}

.collective-mind__boundary {
  margin: 0;
  padding-top: calc(var(--vp-movie-gap, 0.5rem) * 0.35);
  border-top: 1px dashed var(--vp-hero-border);
  font-size: 0.78rem;
  line-height: var(--vp-movie-line-height, 1.5);
  opacity: var(--vp-movie-fade, 0.78);
  text-shadow: var(--vp-hero-text-shadow);
}

.collective-mind__boundary-label {
  margin-right: 0.35rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
</style>
