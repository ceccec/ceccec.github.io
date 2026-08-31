<script setup lang="ts">
// Morph: raw UiCard → UiCardShell (universal card family · specializedShellsStrangler).
import { computed, shallowRef, watch } from 'vue'
import { displayPanelComputes, SEALED_VIEWPORT } from '../../../quantum/computer'
import { useSiteLocale } from '../../../../.vitepress/lib/mounts'
import UiCardShell from '../../../../.vitepress/theme/components/UiCardShell.vue'
import UiBadge from '../../../../.vitepress/theme/components/ui/Badge.vue'
import UiAlert from '../../../../.vitepress/theme/components/ui/Alert.vue'

const props = defineProps<{ at?: number }>()
const panel = shallowRef(displayPanelComputes())
const { pick } = useSiteLocale()
const t = (pair: { en: string; bg: string }) => pick(pair.en, pair.bg)
const tier = computed(() => panel.value.capstone.probe.screen.tier)
const seedParts = computed(() => ['Display', tier.value] as const)
const title = computed(() => t(panel.value.copy.title))
const rows = computed(() => [
  { label: 'Screen', tier: panel.value.capstone.probe.screen.tier, detail: `${panel.value.capstone.probe.screen.probe.width ?? SEALED_VIEWPORT.width}×${panel.value.capstone.probe.screen.probe.height ?? SEALED_VIEWPORT.height}` },
  { label: 'Media', tier: panel.value.capstone.probe.media.tier, detail: String(panel.value.capstone.probe.media.probe.colorScheme ?? '—') },
  { label: 'GPU', tier: panel.value.capstone.probe.gpu.tier, detail: String(panel.value.capstone.probe.gpu.probe.renderer ?? panel.value.capstone.probe.gpu.surface) },
  { label: 'Phase', tier: panel.value.capstone.probe.screen.tier, detail: panel.value.capstone.probe.viewportPhase.toFixed(4) },
])
watch(() => props.at, (at) => { if (at !== undefined) panel.value = displayPanelComputes(undefined, at) }, { immediate: true })
</script>

<template>
  <UiCardShell
    id="display-driver-panel"
    component="Display"
    movie-intensity="soft"
    :seed-parts="seedParts"
    :title="title"
    data-logic="src/render/compute/display/index.ts"
    data-target="src/render/compute/display/index.ts#displayComputes"
    data-topic="display"
  >
    <header class="display-driver-panel__header">
      <h2>{{ title }}</h2>
      <UiBadge :variant="tier === 'BROWSER' ? 'default' : tier === 'NODE' ? 'secondary' : 'outline'">{{ tier }}</UiBadge>
    </header>
    <p class="display-driver-panel__lede">{{ t(panel.copy.lede) }}</p>
    <UiAlert variant="default">{{ panel.capstone.boundary }}</UiAlert>
    <table class="display-driver-panel__table">
      <thead><tr><th>Probe</th><th>Tier</th><th>Value</th></tr></thead>
      <tbody>
        <tr v-for="row in rows" :key="row.label">
          <td>{{ row.label }}</td><td><UiBadge variant="outline">{{ row.tier }}</UiBadge></td><td>{{ row.detail }}</td>
        </tr>
      </tbody>
    </table>
  </UiCardShell>
</template>

<style scoped>
.display-driver-panel__header { display: flex; align-items: center; gap: var(--ich-sp6); flex-wrap: wrap; }
.display-driver-panel__lede { opacity: var(--ich-op-card-meta); margin: var(--ich-sp4) 0 var(--ich-sp6); }
.display-driver-panel__table { width: 100%; border-collapse: collapse; font-size: var(--ich-text-sm); }
</style>
