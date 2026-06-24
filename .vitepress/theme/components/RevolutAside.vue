<script setup lang="ts">
import { computed } from 'vue'
import { revolutChannel } from '../../../src/site/index'
import { useSiteLocale } from '../../lib/mounts'
import UiAsideShell from './UiAsideShell.vue'

const { pick } = useSiteLocale()
const channel = computed(() => revolutChannel())

const seedParts = computed(() => ['revolut-aside', channel.value.handle] as const)

const labels = computed(() => ({
  summary: pick('Support · contact', 'Подкрепа · контакт'),
  link: pick('Open Revolut', 'Отвори Revolut'),
}))
</script>

<template>
  <aside class="revolut-aside" aria-label="Revolut support and contact">
    <UiAsideShell variant="divider" :seed-parts="seedParts">
      <template #summary>
        <span class="ui-aside__title">{{ labels.summary }}</span>
      </template>

      <a
        class="revolut-aside__link"
        :href="channel.url"
        rel="noopener noreferrer"
        target="_blank"
      >
        {{ labels.link }} · @{{ channel.handle }}
      </a>
      <code class="revolut-aside__receipt">{{ channel.root }}</code>
    </UiAsideShell>
  </aside>
</template>

<style scoped>
.revolut-aside {
  margin: calc(var(--vp-movie-gap, 0.75rem) * 0.25) 0;
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
