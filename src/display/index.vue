<script setup lang="ts">
import { computed, shallowRef, watch } from 'vue'
import { displayPanelComputes, SEALED_VIEWPORT } from '../computer'
import { useSiteLocale } from '../../.vitepress/lib/mounts'
import UiCard from '../../.vitepress/theme/components/ui/Card.vue'
import UiCardContent from '../../.vitepress/theme/components/ui/CardContent.vue'
import UiBadge from '../../.vitepress/theme/components/ui/Badge.vue'
import UiAlert from '../../.vitepress/theme/components/ui/Alert.vue'

const props = defineProps<{ at?: number }>()
const panel = shallowRef(displayPanelComputes())
const { pick } = useSiteLocale()
const t = (pair: { en: string; bg: string }) => pick(pair.en, pair.bg)
const tier = computed(() => panel.value.capstone.probe.screen.tier)
const rows = computed(() => [
  { label: 'Screen', tier: panel.value.capstone.probe.screen.tier, detail: `${panel.value.capstone.probe.screen.probe.width ?? SEALED_VIEWPORT.width}×${panel.value.capstone.probe.screen.probe.height ?? SEALED_VIEWPORT.height}` },
  { label: 'Media', tier: panel.value.capstone.probe.media.tier, detail: String(panel.value.capstone.probe.media.probe.colorScheme ?? '—') },
  { label: 'GPU', tier: panel.value.capstone.probe.gpu.tier, detail: String(panel.value.capstone.probe.gpu.probe.renderer ?? panel.value.capstone.probe.gpu.surface) },
  { label: 'Phase', tier: panel.value.capstone.probe.screen.tier, detail: panel.value.capstone.probe.viewportPhase.toFixed(4) },
])
watch(() => props.at, (at) => { if (at !== undefined) panel.value = displayPanelComputes(undefined, at) }, { immediate: true })
</script>

<template>
  <UiCard id="display-driver-panel" data-logic="src/display/index.ts" data-target="src/display/index.ts#displayComputes" data-topic="display">
    <UiCardContent class="vp-doc">
      <header style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap">
        <h2>{{ t(panel.copy.title) }}</h2>
        <UiBadge :variant="tier === 'BROWSER' ? 'default' : tier === 'NODE' ? 'secondary' : 'outline'">{{ tier }}</UiBadge>
      </header>
      <p style="opacity:0.85;margin:0.5rem 0 1rem">{{ t(panel.copy.lede) }}</p>
      <UiAlert variant="default">{{ panel.capstone.boundary }}</UiAlert>
      <table style="width:100%;border-collapse:collapse;font-size:0.9rem">
        <thead><tr><th>Probe</th><th>Tier</th><th>Value</th></tr></thead>
        <tbody>
          <tr v-for="row in rows" :key="row.label">
            <td>{{ row.label }}</td><td><UiBadge variant="outline">{{ row.tier }}</UiBadge></td><td>{{ row.detail }}</td>
          </tr>
        </tbody>
      </table>
    </UiCardContent>
  </UiCard>
</template>
