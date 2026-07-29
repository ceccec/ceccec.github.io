<script setup lang="ts">
import { computed, shallowRef, watch } from 'vue'
import { quantumWidgetsPanelComputes } from './index.ts'
import { useSiteLocale } from '../../.vitepress/lib/mounts'
import UiCard from '../../.vitepress/theme/components/ui/Card.vue'
import UiCardContent from '../../.vitepress/theme/components/ui/CardContent.vue'
import UiBadge from '../../.vitepress/theme/components/ui/Badge.vue'
import UiProgress from '../../.vitepress/theme/components/ui/Progress.vue'
import UiSeparator from '../../.vitepress/theme/components/ui/Separator.vue'
import { min, round } from '../../0'

const props = defineProps<{ at?: number }>()
const panel = shallowRef(quantumWidgetsPanelComputes())
const { pick } = useSiteLocale()
const t = (pair: { en: string; bg: string }) => pick(pair.en, pair.bg)
const title = { en: 'Quantum widget gallery', bg: 'Квантов галерия widgets' }
const lede = { en: 'Dashboard tile registry — sealed Vue mounts + compute paint receipts. Composable with quantum/os launcher.', bg: 'Dashboard tile registry — sealed Vue mounts + compute paint receipts.' }

const tierVariant = (tier: string) => (tier === 'core' ? 'default' : tier === 'modality' ? 'secondary' : 'outline')

const progressValue = (paint: { phase?: number; score?: number } | undefined) => {
  if (paint?.phase !== undefined) return round(paint.phase * 100)
  if (paint?.score !== undefined) return min(100, round(paint.score))
  return 0
}

watch(() => props.at, (at) => { panel.value = quantumWidgetsPanelComputes(undefined, at ?? 0) }, { immediate: true })
</script>

<template>
  <UiCard id="quantum-widgets-gallery" class="quantum-widgets" data-logic="src/lake/widgets/index.ts" data-target="src/lake/widgets/index.ts#quantumWidgetsComputes" data-topic="quantum-widgets">
    <UiCardContent class="vp-doc quantum-widgets__content">
      <header class="quantum-widgets__header">
        <h2>{{ t(title) }}</h2>
        <p class="quantum-widgets__lede">{{ t(lede) }}</p>
        <UiBadge :variant="panel.computes ? 'default' : 'outline'">quantum.widgets.computes · {{ panel.computes ? '✓' : '—' }} · {{ panel.registry.length }} tiles</UiBadge>
      </header>
      <UiSeparator />
      <section class="quantum-widgets__grid">
        <UiCard v-for="row in panel.rows" :key="row.id" class="quantum-widgets__tile">
          <UiCardContent>
            <div class="quantum-widgets__tile-head">
              <strong>{{ row.title }}</strong>
              <UiBadge :variant="tierVariant(row.tier)">{{ row.tier }}</UiBadge>
            </div>
            <p class="quantum-widgets__meta"><code>{{ row.gate }}</code> · {{ row.barrel }}</p>
            <p class="quantum-widgets__summary">{{ row.paint?.summary ?? '—' }}</p>
            <UiProgress :model-value="progressValue(row.paint)" class="quantum-widgets__bar" />
            <UiBadge :variant="row.paint?.computes ? 'default' : 'outline'" class="quantum-widgets__status">
              {{ row.paint?.computes ? 'paint ✓' : 'paint —' }}
            </UiBadge>
          </UiCardContent>
        </UiCard>
      </section>
      <UiSeparator />
      <p class="quantum-widgets__boundary">{{ panel.boundary }}</p>
    </UiCardContent>
  </UiCard>
</template>

<style scoped>
.quantum-widgets__lede { opacity: var(--ich-op-card-soft); max-width: calc(1rem * (54 - 2)); }
.quantum-widgets__grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr)); gap: var(--ich-sp6); margin: 1rem 0; }
.quantum-widgets__tile-head { display: flex; align-items: center; justify-content: space-between; gap: var(--ich-sp4); margin-bottom: var(--ich-sp3); }
.quantum-widgets__meta { font-size: var(--ich-text-xs); opacity: var(--ich-op-card-meta); margin: 0 0 var(--ich-sp4); word-break: break-all; }
.quantum-widgets__summary { font-size: var(--ich-text-ms); margin: 0 0 var(--ich-sp4); }
.quantum-widgets__bar { margin-bottom: var(--ich-sp4); }
.quantum-widgets__status { font-size: var(--ich-text-xs); }
.quantum-widgets__boundary { font-size: var(--ich-text-sm); opacity: var(--ich-op-card-meta); margin-top: var(--ich-sp4); }
</style>
