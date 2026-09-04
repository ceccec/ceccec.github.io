<script setup lang="ts">
import { computed, shallowRef, watch } from 'vue'
import { terminalPanelComputes } from '../../heaven/compute/computer'
import { useSiteLocale } from '../../../.vitepress/lib/mounts.ts'
import UiCard from '../../../.vitepress/theme/components/ui/Card.vue'
import UiCardContent from '../../../.vitepress/theme/components/ui/CardContent.vue'
import UiBadge from '../../../.vitepress/theme/components/ui/Badge.vue'
import UiAlert from '../../../.vitepress/theme/components/ui/Alert.vue'

const props = defineProps<{ at?: number }>()
const panel = shallowRef(terminalPanelComputes())
const { pick } = useSiteLocale()
const t = (pair: { en: string; bg: string }) => pick(pair.en, pair.bg)

const tier = computed(() => panel.value.capstone.probe.tty.tier)
const rows = computed(() => [
  { label: 'TTY', tier: panel.value.capstone.probe.tty.tier, detail: `${panel.value.capstone.probe.tty.probe.columns}×${panel.value.capstone.probe.tty.probe.rows}` },
  { label: 'Console', tier: panel.value.capstone.probe.console.tier, detail: panel.value.capstone.probe.console.probe.available ? 'available' : '—' },
  { label: 'CLI', tier: panel.value.capstone.probe.cli.tier, detail: 'bootstrap mount' },
  { label: 'Agent I/O', tier: panel.value.capstone.probe.agentIo.tier, detail: String(panel.value.capstone.probe.agentIo.surface) },
])

watch(() => props.at, (at) => {
  if (at !== undefined) panel.value = terminalPanelComputes(undefined, at)
}, { immediate: true })
</script>

<template>
  <UiCard
    id="terminal-driver-panel"
    class="terminal-driver-panel"
    data-logic="src/thunder/terminal/index.ts"
    data-target="src/thunder/terminal/index.ts#terminalComputes"
    data-topic="terminal"
  >
    <UiCardContent class="vp-doc terminal-driver-panel__content">
      <header class="terminal-driver-panel__header">
        <h2>{{ t(panel.copy.title) }}</h2>
        <UiBadge :variant="tier === 'BROWSER' ? 'default' : tier === 'NODE' ? 'secondary' : 'outline'">
          {{ tier }}
        </UiBadge>
      </header>
      <p class="terminal-driver-panel__lede">{{ t(panel.copy.lede) }}</p>
      <UiAlert variant="default">
        {{ panel.capstone.boundary }}
      </UiAlert>
      <table class="terminal-driver-panel__table">
        <thead>
          <tr><th>Probe</th><th>Tier</th><th>Detail</th></tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.label">
            <td>{{ row.label }}</td>
            <td><UiBadge variant="outline">{{ row.tier }}</UiBadge></td>
            <td>{{ row.detail }}</td>
          </tr>
        </tbody>
      </table>
    </UiCardContent>
  </UiCard>
</template>

<style scoped>
.terminal-driver-panel__header { display: flex; align-items: center; gap: var(--ich-sp6); flex-wrap: wrap; }
.terminal-driver-panel__lede { opacity: var(--ich-op-card-soft); margin: var(--ich-sp4) 0 1rem; }
.terminal-driver-panel__table { width: 100%; border-collapse: collapse; font-size: var(--ich-text-ms); }
.terminal-driver-panel__table th, .terminal-driver-panel__table td { text-align: left; padding: var(--ich-sp3) var(--ich-sp4); border-bottom: 1px solid var(--vp-c-divider); }
</style>
