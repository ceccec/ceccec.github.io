<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '../lib/useLocale'
import { analyticsLedger } from '../lib/quantumMind'
import Chart from './Chart.vue'
import DataTable from './DataTable.vue'

// Analytics rebuilt as reusable ledger views: one deduplicated source (analyticsLedger) rendered on
// the shadcn Chart and DataTable primitives. DRY — every metric computed once, in the model.
const data = analyticsLedger()
const { bg } = useLocale()
const t = computed(() =>
  bg.value
    ? { eyebrow: 'аналитика · един регистър', lead: `${data.count} метрики, всяка изчислена веднъж в модела и показана на shadcn графиката и таблицата.`, chart: 'метрики', table: 'регистър' }
    : { eyebrow: 'analytics · one ledger', lead: `${data.count} metrics, each computed once in the model and rendered on the shadcn Chart and DataTable.`, chart: 'metrics', table: 'ledger' },
)
</script>

<template>
  <section class="analytics">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <p class="analytics__lead">{{ t.lead }}</p>
    <Chart :series="data.chart.series" :title="t.chart" />
    <DataTable :columns="data.table.columns" :rows="data.table.rows" :title="t.table" />
  </section>
</template>

<style scoped>
.analytics {
  margin: 1.25rem 0;
}
.analytics__lead {
  margin: 0.2rem 0 0.4rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}
</style>
