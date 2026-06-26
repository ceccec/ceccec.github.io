<script setup lang="ts">
import { computed, shallowRef } from 'vue'
import { gpuPanelComputes } from './index'
import UiCard from '../../../../.vitepress/theme/components/ui/Card.vue'
import UiCardContent from '../../../../.vitepress/theme/components/ui/CardContent.vue'
import UiBadge from '../../../../.vitepress/theme/components/ui/Badge.vue'
import UiAlert from '../../../../.vitepress/theme/components/ui/Alert.vue'

const panel = shallowRef(gpuPanelComputes())
const driver = computed(() => panel.value.capstone.driver)
</script>

<template>
  <UiCard id="gpu-driver-panel" class="driver-panel" data-logic="src/render/compute/gpu/index.ts">
    <UiCardContent class="vp-doc driver-panel__content">
      <header>
        <h2>{{ panel.copy.title.en }}</h2>
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
    </UiCardContent>
  </UiCard>
</template>

<style scoped>
.driver-panel__content { display: grid; gap: 0.75rem; }
.driver-panel__badges { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.driver-panel__probe { font-size: 0.85rem; overflow: auto; margin: 0; }
</style>
