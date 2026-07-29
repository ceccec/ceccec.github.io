<script setup lang="ts">
// Morph: raw UiCard → UiCardShell (universal card family · specializedShellsStrangler).
import { computed, shallowRef } from 'vue'
import { storagePanelComputes } from './index'
import UiCardShell from '../../../../.vitepress/theme/components/UiCardShell.vue'
import UiBadge from '../../../../.vitepress/theme/components/ui/Badge.vue'
import UiAlert from '../../../../.vitepress/theme/components/ui/Alert.vue'

const panel = shallowRef(storagePanelComputes())
const driver = computed(() => panel.value.capstone.driver)
const seedParts = computed(() => ['Storage', driver.value.tier] as const)
const title = computed(() => panel.value.copy.title.en)
</script>

<template>
  <UiCardShell
    id="storage-driver-panel"
    class="driver-panel"
    component="Storage"
    movie-intensity="soft"
    :seed-parts="seedParts"
    :title="title"
    data-logic="src/render/compute/storage/index.ts"
    data-target="src/render/compute/storage/index.ts#storagePanelComputes"
    data-topic="storage"
  >
    <header>
      <h2>{{ title }}</h2>
      <p>{{ panel.copy.lede.en }}</p>
      <div class="driver-panel__badges">
        <UiBadge>{{ driver.tier }}</UiBadge>
        <UiBadge variant="outline">{{ driver.runtime }}</UiBadge>
        <UiBadge :variant="driver.fallbackActive ? 'secondary' : 'default'">
          fallback · {{ driver.fallbackActive ? driver.fallback : 'off' }}
        </UiBadge>
      </div>
    </header>
    <p><strong>Surface:</strong> {{ driver.surface }}</p>
    <pre class="driver-panel__probe">{{ JSON.stringify(driver.probe, null, 2) }}</pre>
    <UiAlert title="Honest boundary"><p>{{ panel.capstone.boundary }}</p></UiAlert>
  </UiCardShell>
</template>

<style scoped>
.driver-panel__badges { display: flex; flex-wrap: wrap; gap: var(--ich-sp4); margin: var(--ich-sp4) 0; }
.driver-panel__probe { font-size: var(--ich-text-sm); overflow: auto; margin: 0; }
</style>
