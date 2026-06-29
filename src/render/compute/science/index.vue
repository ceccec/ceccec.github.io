<script setup lang="ts">
import { shallowRef } from 'vue'
import { computerSciencePanelComputes } from '../../../heaven/compute/computer/index.ts'
import UiCard from '../../../../.vitepress/theme/components/ui/Card.vue'
import UiCardContent from '../../../../.vitepress/theme/components/ui/CardContent.vue'
import UiBadge from '../../../../.vitepress/theme/components/ui/Badge.vue'
import UiAlert from '../../../../.vitepress/theme/components/ui/Alert.vue'

const panel = shallowRef(computerSciencePanelComputes())
</script>

<template>
  <UiCard id="computer-science-panel" data-logic="src/render/compute/science/index.ts">
    <UiCardContent class="vp-doc cs-panel">
      <header>
        <h2>{{ panel.copy.title.en }}</h2>
        <p>{{ panel.copy.lede.en }}</p>
        <UiBadge :variant="panel.computes ? 'default' : 'outline'">
          computer.science.computes · {{ panel.computes ? '✓' : '—' }}
        </UiBadge>
      </header>
      <table>
        <thead><tr><th>Topic</th><th>Fold</th><th>Limit</th></tr></thead>
        <tbody>
          <tr v-for="row in panel.rows" :key="row.topic">
            <td>{{ row.topic }}</td>
            <td><code>{{ row.fold }}</code></td>
            <td>{{ row.limit }}</td>
          </tr>
        </tbody>
      </table>
      <UiAlert title="Honest boundary"><p>{{ panel.boundary }}</p></UiAlert>
    </UiCardContent>
  </UiCard>
</template>

<style scoped>
.cs-panel { display: grid; gap: var(--ich-sp6); }
table { width: 100%; border-collapse: collapse; font-size: var(--ich-text-sm); }
th, td { border-bottom: 1px solid var(--vp-c-divider); padding: var(--ich-sp3) var(--ich-sp4); text-align: left; vertical-align: top; }
</style>
