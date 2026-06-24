<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { localeFromRoute, pickLocale, revolutChannel } from '../../../src/site/index'
import { cardMovieColorVars, cardMovieSeed } from '@vp-lib/hero-movie'

const route = useRoute()
const locale = computed(() => localeFromRoute(route.path))
const pick = (en: string, bg: string) => pickLocale(locale.value, en, bg)
const channel = computed(() => revolutChannel())

const cardStyle = computed(() =>
  cardMovieColorVars(route.path, cardMovieSeed(['revolut-aside', channel.value.handle])),
)

const labels = computed(() => ({
  summary: pick('Support · contact', 'Подкрепа · контакт'),
  hint: pick(`Invitation · ${channel.value.share} harmonic share`, `Покана · ${channel.value.share} хармоничен дял`),
  support: pick(channel.value.purposes[0].en, channel.value.purposes[0].bg),
  contact: pick(channel.value.purposes[1].en, channel.value.purposes[1].bg),
  link: pick('Open Revolut', 'Отвори Revolut'),
  free: pick('Access is free — zero is a valid amount', 'Достъпът е безплатен — нула е валидна сума'),
  boundary: pick('Voluntary patronage, not a price', 'Доброволна подкрепа, не цена'),
}))
</script>

<template>
  <aside class="revolut-aside" :style="cardStyle" aria-label="Revolut support and contact">
    <details class="revolut-aside__panel">
      <summary class="revolut-aside__summary">
        <span class="revolut-aside__title">{{ labels.summary }}</span>
        <span class="revolut-aside__hint">{{ labels.hint }}</span>
      </summary>

      <div class="revolut-aside__body">
        <p class="revolut-aside__statement">{{ channel.statement }}</p>
        <ul class="revolut-aside__purposes">
          <li>{{ labels.support }}</li>
          <li>{{ labels.contact }}</li>
        </ul>
        <p class="revolut-aside__free">{{ labels.free }}</p>
        <a
          class="revolut-aside__link"
          :href="channel.url"
          rel="noopener noreferrer"
          target="_blank"
        >
          {{ labels.link }} · @{{ channel.handle }}
        </a>
        <p class="revolut-aside__boundary">{{ labels.boundary }}</p>
        <code class="revolut-aside__receipt">{{ channel.root }}</code>
      </div>
    </details>
  </aside>
</template>

<style scoped>
.revolut-aside {
  margin: calc(var(--vp-movie-gap, 0.75rem) * 1.1) 0 calc(var(--vp-movie-gap, 0.5rem) * 0.75);
  padding-top: calc(var(--vp-movie-gap, 0.75rem) * 0.75);
  border-top: 1px dashed var(--vp-hero-border);
}

.revolut-aside__summary {
  cursor: pointer;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  text-shadow: var(--vp-hero-text-shadow);
}

.revolut-aside__summary::-webkit-details-marker {
  display: none;
}

.revolut-aside__title {
  font-size: calc(0.78rem + var(--vp-movie-gap, 0.5rem) * 0.05);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  opacity: var(--vp-movie-fade, 0.82);
}

.revolut-aside__hint {
  font-size: calc(0.82rem + var(--vp-movie-gap, 0.5rem) * 0.03);
  opacity: var(--vp-movie-fade, 0.68);
}

.revolut-aside__body {
  margin-top: calc(var(--vp-movie-gap, 0.5rem) * 0.85);
  display: flex;
  flex-direction: column;
  gap: calc(var(--vp-movie-gap, 0.5rem) * 0.65);
  font-size: calc(0.86rem + var(--vp-movie-gap, 0.5rem) * 0.03);
  text-shadow: var(--vp-hero-text-shadow);
}

.revolut-aside__statement {
  margin: 0;
  line-height: var(--vp-movie-line-height, 1.45);
  opacity: var(--vp-movie-fade, 0.88);
}

.revolut-aside__purposes {
  margin: 0;
  padding-left: 1.1rem;
  opacity: var(--vp-movie-fade, 0.85);
}

.revolut-aside__free,
.revolut-aside__boundary {
  margin: 0;
  font-size: 0.92em;
  opacity: var(--vp-movie-fade, 0.72);
}

.revolut-aside__link {
  color: var(--vp-movie-link);
  text-decoration: none;
  font-weight: 500;
}

.revolut-aside__link:hover {
  text-decoration: underline;
}

.revolut-aside__receipt {
  font-size: 0.78em;
  opacity: var(--vp-movie-fade, 0.65);
  word-break: break-all;
}
</style>
