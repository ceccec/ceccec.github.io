<script setup lang="ts">
import { shallowRef } from 'vue'
import { quantumSciencePanelComputes } from './index.ts'
import UiCard from '../../../.vitepress/theme/components/ui/Card.vue'
import UiCardContent from '../../../.vitepress/theme/components/ui/CardContent.vue'
import UiBadge from '../../../.vitepress/theme/components/ui/Badge.vue'
import UiAlert from '../../../.vitepress/theme/components/ui/Alert.vue'

const panel = shallowRef(quantumSciencePanelComputes())
</script>

<template>
  <UiCard id="quantum-science-panel" data-logic="src/quantum/science/index.ts">
    <UiCardContent class="vp-doc qs-panel">
      <header>
        <h2>{{ panel.copy.title.en }}</h2>
        <p>{{ panel.copy.lede.en }}</p>
        <UiBadge :variant="panel.computes ? 'default' : 'outline'">
          quantum.science.computes · {{ panel.computes ? '✓' : '—' }}
        </UiBadge>
      </header>
      <table>
        <thead><tr><th>Principle</th><th>Fold</th><th>Limit</th></tr></thead>
        <tbody>
          <tr v-for="row in panel.rows" :key="row.principle">
            <td>{{ row.principle }}</td>
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
.qs-panel { display: grid; gap: 0.75rem; }
table { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
th, td { border-bottom: 1px solid var(--vp-c-divider); padding: 0.35rem 0.5rem; text-align: left; vertical-align: top; }
</style>
