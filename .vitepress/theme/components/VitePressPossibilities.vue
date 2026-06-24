<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { onlyVitePressApi } from '../../../src/fire/li/index.ts'
import { vitepressConfigComputesAll } from '../../../src/heaven/compute/index.ts'
import { localeFromRoute, pickLocale } from '../../../src/site/index'
import { cardMovieColorVars, cardMovieSeed } from '@vp-lib/hero-movie'

const route = useRoute()
const locale = computed(() => localeFromRoute(route.path))
const pick = (en: string, bg: string) => pickLocale(locale.value, en, bg)

const vpApi = computed(() => onlyVitePressApi())
const config = computed(() => vitepressConfigComputesAll())

const cardStyle = computed(() =>
  cardMovieColorVars(route.path, cardMovieSeed(['vitepress-possibilities', vpApi.value.root.slice(0, 8)])),
)

const labels = computed(() => ({
  summary: pick('VitePress possibilities', 'VitePress възможности'),
  hint: pick('Strict render API · computed config', 'Строг render API · изчислена конфигурация'),
  allowed: pick('Allowed API', 'Позволен API'),
  forbidden: pick('Refused at gate', 'Отказано на gate'),
  config: pick('Config computes', 'Конфигурация изчислява'),
  ok: pick('on', 'да'),
  off: pick('off', 'не'),
}))
</script>

<template>
  <details class="vitepress-possibilities" :style="cardStyle">
    <summary class="vitepress-possibilities__summary">
      <span class="vitepress-possibilities__title">{{ labels.summary }}</span>
      <span class="vitepress-possibilities__hint">{{ labels.hint }}</span>
    </summary>

    <div class="vitepress-possibilities__body">
      <section class="vitepress-possibilities__section">
        <p class="vitepress-possibilities__heading">{{ labels.allowed }}</p>
        <ul class="vitepress-possibilities__list">
          <li v-for="item in vpApi.api" :key="item">
            <code>{{ item }}</code>
          </li>
        </ul>
      </section>

      <section class="vitepress-possibilities__section">
        <p class="vitepress-possibilities__heading">{{ labels.config }}</p>
        <ul class="vitepress-possibilities__facets">
          <li
            v-for="facet in config.facets"
            :key="facet.facet"
            :class="{ 'is-on': facet.on }"
          >
            <span class="vitepress-possibilities__mark">{{ facet.on ? labels.ok : labels.off }}</span>
            {{ facet.facet }}
          </li>
        </ul>
      </section>

      <p class="vitepress-possibilities__statement">{{ config.statement }}</p>
      <p class="vitepress-possibilities__boundary">{{ vpApi.boundary }}</p>
    </div>
  </details>
</template>

<style scoped>
.vitepress-possibilities {
  margin: calc(var(--vp-movie-gap, 0.75rem) * 0.85) 0;
  padding: calc(var(--vp-movie-gap, 0.5rem) * 0.65) 0;
  border-top: 1px dashed var(--vp-hero-border);
}

.vitepress-possibilities__summary {
  cursor: pointer;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  text-shadow: var(--vp-hero-text-shadow);
}

.vitepress-possibilities__summary::-webkit-details-marker {
  display: none;
}

.vitepress-possibilities__title {
  font-size: calc(0.78rem + var(--vp-movie-gap, 0.5rem) * 0.05);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  opacity: var(--vp-movie-fade, 0.82);
}

.vitepress-possibilities__hint {
  font-size: calc(0.82rem + var(--vp-movie-gap, 0.5rem) * 0.03);
  opacity: var(--vp-movie-fade, 0.68);
}

.vitepress-possibilities__body {
  margin-top: calc(var(--vp-movie-gap, 0.5rem) * 0.85);
  display: flex;
  flex-direction: column;
  gap: calc(var(--vp-movie-gap, 0.5rem) * 0.75);
  font-size: calc(0.86rem + var(--vp-movie-gap, 0.5rem) * 0.03);
  text-shadow: var(--vp-hero-text-shadow);
}

.vitepress-possibilities__heading {
  margin: 0 0 calc(var(--vp-movie-gap, 0.5rem) * 0.45);
  font-size: 0.82em;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  opacity: var(--vp-movie-fade, 0.72);
}

.vitepress-possibilities__list,
.vitepress-possibilities__facets {
  margin: 0;
  padding-left: 1.1rem;
}

.vitepress-possibilities__facets .is-on {
  opacity: 1;
}

.vitepress-possibilities__facets li:not(.is-on) {
  opacity: var(--vp-movie-fade, 0.62);
}

.vitepress-possibilities__mark {
  display: inline-block;
  min-width: 1.6rem;
  font-size: 0.82em;
  opacity: var(--vp-movie-fade, 0.75);
}

.vitepress-possibilities__statement,
.vitepress-possibilities__boundary {
  margin: 0;
  font-size: 0.92em;
  line-height: var(--vp-movie-line-height, 1.45);
  opacity: var(--vp-movie-fade, 0.78);
}
</style>
