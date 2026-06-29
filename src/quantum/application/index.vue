<script setup lang="ts">
import { shallowRef } from 'vue'
import { quantumApplicationPanelComputes } from './index.ts'
import UiCard from '../../../.vitepress/theme/components/ui/Card.vue'
import UiCardContent from '../../../.vitepress/theme/components/ui/CardContent.vue'
import UiBadge from '../../../.vitepress/theme/components/ui/Badge.vue'
import UiSeparator from '../../../.vitepress/theme/components/ui/Separator.vue'

const panel = shallowRef(quantumApplicationPanelComputes())
</script>

<template>
  <UiCard id="quantum-application-compose" class="quantum-application-compose" data-logic="src/quantum/application/index.ts" data-target="src/quantum/application/index.ts#quantumApplicationComputes" data-topic="quantum-application">
    <UiCardContent class="vp-doc quantum-application-compose__content">
      <header>
        <h2>Quantum application layer</h2>
        <p class="quantum-application-compose__lede">QC apps, agent mind, trading facets, enforcement — quantum-facing compose capstone.</p>
        <UiBadge :variant="panel.computes ? 'default' : 'outline'">quantum.application.computes · {{ panel.computes ? '✓' : '—' }}</UiBadge>
      </header>
      <UiSeparator />
      <section>
        <h3>Composed facets</h3>
        <ul class="quantum-application-compose__list">
          <li v-for="row in panel.rows" :key="row.home">
            <strong>{{ row.domain }}</strong>
            <code>{{ row.dim }}</code>
            <span class="quantum-application-compose__meta">{{ row.home }}</span>
          </li>
        </ul>
      </section>
    </UiCardContent>
  </UiCard>
</template>

<style scoped>
.quantum-application-compose__lede { opacity: var(--ich-op-card-soft); max-width: calc(1rem * (54 - 2)); }
.quantum-application-compose__list { list-style: none; padding: 0; margin: 0; display: grid; gap: var(--ich-sp4); }
.quantum-application-compose__list code { margin-left: var(--ich-sp4); font-size: var(--ich-text-sm); }
.quantum-application-compose__meta { display: block; font-size: var(--ich-text-xs); opacity: var(--ich-op-card-meta); margin-top: var(--ich-sp1); }
</style>
