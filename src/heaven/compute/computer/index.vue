<script setup lang="ts">
import { shallowRef } from 'vue'
import { computerPanelComputes } from './index.ts'
import UiCard from '../../../../.vitepress/theme/components/ui/Card.vue'
import UiCardContent from '../../../../.vitepress/theme/components/ui/CardContent.vue'
import UiBadge from '../../../../.vitepress/theme/components/ui/Badge.vue'
import UiAlert from '../../../../.vitepress/theme/components/ui/Alert.vue'

const panel = shallowRef(computerPanelComputes())
</script>

<template>
  <UiCard id="computer-panel" class="driver-panel" data-logic="src/heaven/compute/computer/index.ts">
    <UiCardContent class="vp-doc driver-panel__content">
      <header>
        <h2>{{ panel.copy.title.en }}</h2>
        <p>{{ panel.copy.lede.en }}</p>
        <UiBadge :variant="panel.computes ? 'default' : 'outline'">
          computer.computes · {{ panel.computes ? '✓' : '—' }}
        </UiBadge>
      </header>
      <table class="driver-panel__table">
        <thead><tr><th>Driver</th><th>Tier</th></tr></thead>
        <tbody>
          <tr v-for="row in panel.rows" :key="row.driver">
            <td>{{ row.driver }}</td>
            <td><UiBadge variant="outline">{{ row.tier }}</UiBadge></td>
          </tr>
        </tbody>
      </table>
      <UiAlert title="Honest boundary">
        <p>{{ panel.boundary }}</p>
      </UiAlert>
    </UiCardContent>
  </UiCard>
</template>

<style scoped>
.driver-panel__content { display: grid; gap: var(--ich-sp6); }
.driver-panel__table { width: 100%; border-collapse: collapse; font-size: var(--ich-text-ms); }
.driver-panel__table th, .driver-panel__table td { border-bottom: 1px solid var(--vp-c-divider); padding: var(--ich-sp3) var(--ich-sp4); text-align: left; }
</style>
