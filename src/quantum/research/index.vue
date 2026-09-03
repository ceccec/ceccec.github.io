<script setup lang="ts">
import { shallowRef } from 'vue'
import { quantumResearchPanelComputes } from '../index.ts'
import UiCard from '../../../.vitepress/theme/components/ui/Card.vue'
import UiCardContent from '../../../.vitepress/theme/components/ui/CardContent.vue'
import UiBadge from '../../../.vitepress/theme/components/ui/Badge.vue'
import UiSeparator from '../../../.vitepress/theme/components/ui/Separator.vue'

const panel = shallowRef(quantumResearchPanelComputes())
</script>

<template>
  <UiCard id="quantum-research-index" class="quantum-research-index" data-logic="src/quantum/index.ts" data-target="src/quantum/index.ts#quantumResearchComputes" data-topic="quantum-research">
    <UiCardContent class="vp-doc quantum-research-index__content">
      <header class="quantum-research-index__header">
        <h2>Quantum research program index</h2>
        <p class="quantum-research-index__lede">Quantum-domain slice — dynamics · application · science · CHSH · experiments — composed from sealed barrels at call time.</p>
        <UiBadge :variant="panel.computes ? 'default' : 'outline'">quantum.research.computes · {{ panel.computes ? '✓' : '—' }} · {{ panel.rows.length }} rows</UiBadge>
      </header>
      <UiSeparator />
      <section><h3>Quantum verify pairs</h3><ul class="quantum-research-index__list"><li v-for="gate in panel.repro" :key="gate.id"><code>{{ gate.command }}</code> <span class="quantum-research-index__pair">({{ gate.pair }})</span></li></ul></section>
      <UiSeparator />
      <section><h3>Programs</h3>
        <table class="quantum-research-index__table"><thead><tr><th>Domain</th><th>Method</th><th>Limit</th><th>Verify</th></tr></thead>
          <tbody><tr v-for="row in panel.rows" :key="row.domain + row.home"><td><strong>{{ row.domain }}</strong><div class="quantum-research-index__meta">{{ row.tier }} · {{ row.home }}</div></td><td><code>{{ row.method }}</code></td><td>{{ row.limit }}</td><td><code>{{ row.verify }}</code></td></tr></tbody>
        </table>
      </section>
    </UiCardContent>
  </UiCard>
</template>

<style scoped>
.quantum-research-index__lede { opacity: var(--ich-op-card-soft); max-width: calc(1rem * (54 - 2)); }
.quantum-research-index__table { width: 100%; border-collapse: collapse; font-size: var(--ich-text-ms); }
.quantum-research-index__table th, .quantum-research-index__table td { border: 1px solid color-mix(in srgb, currentColor calc(9% + 6%), transparent); padding: var(--ich-sp4) var(--ich-sp5); vertical-align: top; text-align: left; }
.quantum-research-index__meta { font-size: var(--ich-text-xs); opacity: var(--ich-op-card-meta); margin-top: var(--ich-sp2); }
.quantum-research-index__list { list-style: none; padding: 0; margin: 0; }
.quantum-research-index__list li { margin-bottom: var(--ich-sp3); }
.quantum-research-index__pair { opacity: var(--ich-op-soft); margin-left: var(--ich-sp3); }
</style>
