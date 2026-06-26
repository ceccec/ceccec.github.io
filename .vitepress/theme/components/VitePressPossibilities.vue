<script setup lang="ts">
import { computed } from 'vue'
import { onlyVitePressApi } from '../../../src/fire/li/index.ts'
import { vitepressConfigComputesAll } from '../../../src/heaven/compute/index.ts'
import { useSiteLocale } from '../../lib/mounts'
import UiAsideShell from './UiAsideShell.vue'

const { pick, t } = useSiteLocale()

const vpApi = computed(() => onlyVitePressApi())
const config = computed(() => vitepressConfigComputesAll())

const seedParts = computed(() => ['vitepress-possibilities', vpApi.value.root.slice(0, 8)] as const)

const labels = computed(() => ({
  summary: pick('VitePress possibilities', 'VitePress възможности'),
  allowed: pick('Allowed API', 'Позволен API'),
  config: pick('Config computes', 'Конфигурация изчислява'),
  ok: pick('on', 'да'),
  off: pick('off', 'не'),
}))
</script>

<template>
  <UiAsideShell class="vitepress-possibilities" variant="divider" :seed-parts="seedParts">
    <template #summary>
      <span class="ui-aside__title">{{ labels.summary }}</span>
    </template>

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
          {{ t(facet.facet) }}
        </li>
      </ul>
    </section>
  </UiAsideShell>
</template>

<style scoped>
.vitepress-possibilities__heading {
  margin: 0 0 calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(4 / 9));
  font-size: var(--ich-em-sm);
  letter-spacing: var(--ich-track-wide);
  text-transform: uppercase;
  opacity: var(--vp-movie-fade, var(--ich-op-soft));
}

.vitepress-possibilities__list,
.vitepress-possibilities__facets {
  margin: 0;
  padding-left: var(--ich-list-indent);
}

.vitepress-possibilities__facets .is-on {
  opacity: 1;
}

.vitepress-possibilities__facets li:not(.is-on) {
  opacity: var(--vp-movie-fade, var(--ich-op-dim));
}

.vitepress-possibilities__mark {
  display: inline-block;
  min-width: calc(var(--ich-sp6) + var(--ich-sp2));
  font-size: var(--ich-em-sm);
  opacity: var(--vp-movie-fade, var(--ich-op-half));
}
</style>
