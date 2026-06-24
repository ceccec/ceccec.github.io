<script setup lang="ts">
import { computed, ref } from 'vue'
import { foldQuestion } from '../../../src/heaven/atoms/index.ts'
import { useSiteLocale } from '../../lib/mounts'
import type { LocalAnswer } from '../../../src/types'
import UiAsideShell from './UiAsideShell.vue'

const STARTER_TOPICS = ['proof', 'trinity', 'mcp', 'chain', 'school'] as const

const { pick, t, localize } = useSiteLocale()

const query = ref('')
const answer = ref<LocalAnswer | null>(null)
const open = ref(false)

const seedParts = computed(() => ['global-help', query.value || 'idle'] as const)

const labels = computed(() => ({
  summary: pick('Local help', 'Локална помощ'),
  placeholder: pick('Ask about proof, trinity, mcp…', 'Питай за proof, trinity, mcp…'),
  submit: pick('Ask', 'Питай'),
  concept: pick('Concept', 'Концепция'),
  confidence: pick('Confidence', 'Увереност'),
  related: pick('Related', 'Свързани'),
  receipt: pick('Receipt', 'Разписка'),
}))

function link(routePath: string) {
  return localize(routePath)
}

function ask(topic?: string) {
  const q = (topic ?? query.value).trim()
  if (!q) return
  query.value = q
  answer.value = foldQuestion(q)
  open.value = true
}

function onSubmit(event: Event) {
  event.preventDefault()
  ask()
}

function onToggle(event: Event) {
  open.value = (event.target as HTMLDetailsElement).open
}

function confidenceLabel(value: number) {
  return `${Math.round(value * 100)}%`
}
</script>

<template>
  <UiAsideShell
    class="global-help"
    :seed-parts="seedParts"
    :open="open"
    summary-layout="inline"
    @toggle="onToggle"
  >
    <template #summary>
      <span class="ui-aside__title">{{ labels.summary }}</span>
    </template>

    <form class="global-help__form" role="search" @submit="onSubmit">
      <input
        v-model="query"
        class="global-help__input"
        type="search"
        name="q"
        :placeholder="labels.placeholder"
        autocomplete="off"
        spellcheck="false"
      />
      <button class="global-help__submit" type="submit">{{ labels.submit }}</button>
    </form>

    <div class="global-help__chips" role="group" :aria-label="labels.summary">
      <button
        v-for="topic in STARTER_TOPICS"
        :key="topic"
        class="global-help__chip"
        type="button"
        @click="ask(topic)"
      >
        {{ t(topic) }}
      </button>
    </div>

    <article v-if="answer" class="global-help__answer">
      <dl v-if="answer.matched" class="global-help__meta">
        <div v-if="answer.concept" class="global-help__meta-row">
          <dt>{{ labels.concept }}</dt>
          <dd><code>{{ answer.concept }}</code></dd>
        </div>
        <div class="global-help__meta-row">
          <dt>{{ labels.confidence }}</dt>
          <dd>{{ confidenceLabel(answer.confidence) }}</dd>
        </div>
      </dl>

      <section v-if="answer.links.length" class="global-help__related">
        <p class="global-help__related-heading">{{ labels.related }}</p>
        <ul class="global-help__related-list">
          <li v-for="item in answer.links" :key="item.route">
            <a class="global-help__related-link" :href="link(item.route)" :title="item.detail">
              {{ t(item.title) }}
            </a>
          </li>
        </ul>
      </section>

      <p v-if="answer.receipt" class="global-help__receipt">
        <span class="global-help__receipt-label">{{ labels.receipt }}</span>
        <code>{{ answer.receipt }}</code>
      </p>
    </article>
  </UiAsideShell>
</template>

<style scoped>
.global-help__form {
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--vp-movie-gap, 0.5rem) * 0.55);
}

.global-help__input {
  flex: 1 1 12rem;
  min-width: 0;
  padding: 0.35rem 0.55rem;
  font: inherit;
  color: var(--vp-c-text-1);
  background: transparent;
  border: 1px dashed var(--vp-hero-border);
  border-radius: calc(var(--vp-movie-radius, 0.5rem) * 0.65);
  text-shadow: var(--vp-hero-text-shadow);
}

.global-help__input:focus {
  outline: 1px solid var(--vp-movie-link);
  border-color: var(--vp-movie-link);
}

.global-help__submit,
.global-help__chip {
  padding: 0.35rem 0.65rem;
  font: inherit;
  font-size: 0.86rem;
  color: var(--vp-c-text-1);
  background: transparent;
  border: 1px dashed var(--vp-hero-border);
  border-radius: calc(var(--vp-movie-radius, 0.5rem) * 0.65);
  cursor: pointer;
  text-shadow: var(--vp-hero-text-shadow);
}

.global-help__submit:hover,
.global-help__chip:hover {
  color: var(--vp-movie-link);
  border-color: var(--vp-movie-link);
}

.global-help__chips {
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--vp-movie-gap, 0.5rem) * 0.45);
}

.global-help__chip {
  font-size: 0.82rem;
  text-transform: lowercase;
}

.global-help__answer {
  padding-top: calc(var(--vp-movie-gap, 0.5rem) * 0.35);
  border-top: 1px dashed var(--vp-hero-border);
}

.global-help__meta {
  margin: 0 0 calc(var(--vp-movie-gap, 0.5rem) * 0.65);
  display: grid;
  gap: 0.25rem 0.65rem;
  font-size: 0.84rem;
}

.global-help__meta-row {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.45rem;
  align-items: baseline;
}

.global-help__meta dt {
  opacity: var(--vp-movie-fade, 0.72);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-size: 0.78rem;
}

.global-help__meta dd {
  margin: 0;
  text-shadow: var(--vp-hero-text-shadow);
}

.global-help__related-heading {
  margin: 0 0 calc(var(--vp-movie-gap, 0.5rem) * 0.45);
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  opacity: var(--vp-movie-fade, 0.72);
  text-shadow: var(--vp-hero-text-shadow);
}

.global-help__related-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: calc(var(--vp-movie-gap, 0.5rem) * 0.35);
}

.global-help__related-link {
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-size: 0.86rem;
  text-shadow: var(--vp-hero-text-shadow);
}

.global-help__related-link:hover {
  color: var(--vp-movie-link);
}

.global-help__receipt {
  margin: calc(var(--vp-movie-gap, 0.5rem) * 0.65) 0 0;
  font-size: 0.78rem;
  opacity: var(--vp-movie-fade, 0.78);
  text-shadow: var(--vp-hero-text-shadow);
  word-break: break-all;
}

.global-help__receipt-label {
  margin-right: 0.35rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
</style>
