<script setup lang="ts">
import { shallowRef } from 'vue'
import { researchPanelComputes } from './index.ts'
import UiCard from '../../.vitepress/theme/components/ui/Card.vue'
import UiCardContent from '../../.vitepress/theme/components/ui/CardContent.vue'
import UiBadge from '../../.vitepress/theme/components/ui/Badge.vue'
import UiSeparator from '../../.vitepress/theme/components/ui/Separator.vue'

const panel = shallowRef(researchPanelComputes())
</script>

<template>
  <UiCard id="research-index" class="research-index" data-logic="src/research/index.ts" data-target="src/research/index.ts#researchComputes" data-topic="research">
    <UiCardContent class="vp-doc research-index__content">
      <header class="research-index__header">
        <h2>Research program index</h2>
        <p class="research-index__lede">Canonical home for sealed research folds — domain · method · limit · verify at call time.</p>
        <UiBadge :variant="panel.computes ? 'default' : 'outline'">research.computes · {{ panel.computes ? '✓' : '—' }} · {{ panel.rows.length }} rows</UiBadge>
      </header>
      <UiSeparator />
      <section><h3>Reproducibility gates</h3><ul class="research-index__list"><li v-for="gate in panel.repro" :key="gate.id"><code>{{ gate.command }}</code> <span class="research-index__pair">({{ gate.pair }})</span></li></ul></section>
      <UiSeparator />
      <section><h3>Programs</h3>
        <table class="research-index__table"><thead><tr><th>Domain</th><th>Method</th><th>Limit</th><th>Verify</th></tr></thead>
          <tbody><tr v-for="row in panel.rows" :key="row.domain + row.home"><td><strong>{{ row.domain }}</strong><div class="research-index__meta">{{ row.tier }} · {{ row.home }}</div></td><td><code>{{ row.method }}</code></td><td>{{ row.limit }}</td><td><code>{{ row.verify }}</code></td></tr></tbody>
        </table>
      </section>
    </UiCardContent>
  </UiCard>
</template>

<style scoped>
.research-index__lede { opacity: 0.85; max-width: 52rem; }
.research-index__table { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
.research-index__table th, .research-index__table td { border: 1px solid color-mix(in srgb, currentColor 15%, transparent); padding: 0.5rem 0.65rem; vertical-align: top; text-align: left; }
.research-index__meta { font-size: 0.75rem; opacity: 0.7; margin-top: 0.25rem; }
.research-index__list { list-style: none; padding: 0; margin: 0; }
.research-index__list li { margin-bottom: 0.35rem; }
.research-index__pair { opacity: 0.65; margin-left: 0.35rem; }
</style>
