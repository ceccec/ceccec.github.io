<script setup lang="ts">
import { computed, ref } from 'vue'
import { foldQuestion } from '../../render'
import { useSiteLocale } from '../../lib/mounts'
import type { LocalAnswer } from '../../render'
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
        :aria-label="labels.placeholder"
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
  gap: calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(3 / 5));
}

.global-help__input {
  flex: 1 1 calc(var(--ich-sp6) * 16);
  min-width: 0;
  padding: var(--ich-pad-chip-y) var(--ich-pad-chip-x);
  font: inherit;
  color: var(--vp-c-text-1);
  background: transparent;
  border: 1px dashed var(--vp-hero-border);
  border-radius: calc(var(--vp-movie-radius, var(--ich-sp4)) * calc(2 / 3));
  text-shadow: var(--vp-hero-text-shadow);
}

.global-help__input:focus {
  outline: 1px solid var(--vp-movie-link);
  border-color: var(--vp-movie-link);
}

.global-help__submit,
.global-help__chip {
  padding: var(--ich-pad-chip-y) var(--ich-gap-col);
  font: inherit;
  font-size: var(--ich-text-ml);
  color: var(--vp-c-text-1);
  background: transparent;
  border: 1px dashed var(--vp-hero-border);
  border-radius: calc(var(--vp-movie-radius, var(--ich-sp4)) * calc(2 / 3));
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
  gap: calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(4 / 9));
}

.global-help__chip {
  font-size: var(--ich-text-sm);
  text-transform: lowercase;
}

.global-help__answer {
  padding-top: calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(1 / 3));
  border-top: 1px dashed var(--vp-hero-border);
}

.global-help__meta {
  margin: 0 0 calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(2 / 3));
  display: grid;
  gap: var(--ich-sp2) var(--ich-gap-col);
  font-size: var(--ich-text-sm);
}

.global-help__meta-row {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--ich-gap-row);
  align-items: baseline;
}

.global-help__meta dt {
  opacity: var(--vp-movie-fade, var(--ich-op-soft));
  text-transform: uppercase;
  letter-spacing: var(--ich-track-wide);
  font-size: var(--ich-text-ms);
}

.global-help__meta dd {
  margin: 0;
  text-shadow: var(--vp-hero-text-shadow);
}

.global-help__related-heading {
  margin: 0 0 calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(4 / 9));
  font-size: var(--ich-text-ms);
  letter-spacing: var(--ich-track-ui);
  text-transform: uppercase;
  opacity: var(--vp-movie-fade, var(--ich-op-soft));
  text-shadow: var(--vp-hero-text-shadow);
}

.global-help__related-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(1 / 3));
}

.global-help__related-link {
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-size: var(--ich-text-ml);
  text-shadow: var(--vp-hero-text-shadow);
}

.global-help__related-link:hover {
  color: var(--vp-movie-link);
}

.global-help__receipt {
  margin: calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(2 / 3)) 0 0;
  font-size: var(--ich-text-ms);
  opacity: var(--vp-movie-fade, var(--ich-op-strong));
  text-shadow: var(--vp-hero-text-shadow);
  word-break: break-all;
}

.global-help__receipt-label {
  margin-right: var(--ich-gap-row);
  text-transform: uppercase;
  letter-spacing: var(--ich-track-wide);
}
</style>
