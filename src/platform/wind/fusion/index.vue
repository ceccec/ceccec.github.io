<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import { fusionVerifyPanelComputes } from './index.ts'
import UiCard from '../../../.vitepress/theme/components/ui/Card.vue'
import UiCardContent from '../../../.vitepress/theme/components/ui/CardContent.vue'
import UiBadge from '../../../.vitepress/theme/components/ui/Badge.vue'
import UiButton from '../../../.vitepress/theme/components/ui/Button.vue'
import UiSeparator from '../../../.vitepress/theme/components/ui/Separator.vue'

const panel = shallowRef(fusionVerifyPanelComputes())
const running = ref(false)
const error = ref('')

function runTool() {
  running.value = true
  error.value = ''
  try {
    panel.value = fusionVerifyPanelComputes()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'run failed'
  } finally {
    running.value = false
  }
}

runTool()
</script>

<template>
  <UiCard
    id="fusion-verify"
    class="fusion-verify"
    data-logic="src/wind/fusion/index.ts"
    data-target="src/wind/fusion/index.ts#fusionVerifyPanelComputes"
    data-topic="fusion-verify"
  >
    <UiCardContent class="vp-doc fusion-verify__content">
      <header>
        <h2>Quantum fusion verify</h2>
        <p class="fusion-verify__lede">Offline recompute of fuseAll wave in the browser — tamper-evident stack receipts on replay.</p>
        <UiBadge :variant="panel.computes ? 'default' : 'outline'">fusion.verify · {{ panel.computes ? '✓' : '—' }}</UiBadge>
        <UiButton size="sm" :disabled="running" @click="runTool">{{ running ? 'Running…' : 'Recompute in browser' }}</UiButton>
      </header>
      <UiSeparator />
      <p v-if="error" class="fusion-verify__error" role="alert">{{ error }}</p>
      <ul class="fusion-verify__list">
        <li v-for="facet in panel.facets" :key="facet.facet">
          <UiBadge :variant="facet.on ? 'default' : 'outline'">{{ facet.on ? '✓' : '—' }}</UiBadge>
          {{ facet.facet }}
        </li>
      </ul>
      <p class="fusion-verify__meta">parts={{ panel.partCount }} · verified={{ panel.verified ? '✓' : '—' }} · root <code>{{ panel.waveRoot.slice(0, 16) }}…</code></p>
      <p class="fusion-verify__boundary">{{ panel.boundary }}</p>
      <p class="fusion-verify__meta">pair {{ panel.pair }} · <code>{{ panel.cli }}</code> · route <code>{{ panel.route }}</code></p>
    </UiCardContent>
  </UiCard>
</template>

<style scoped>
.fusion-verify__lede { opacity: var(--ich-op-card-soft); max-width: calc(1rem * (54 - 2)); }
.fusion-verify__list { list-style: none; padding: 0; margin: 0; }
.fusion-verify__list li { margin-bottom: var(--ich-sp3); display: flex; gap: var(--ich-sp3); align-items: flex-start; }
.fusion-verify__meta { font-size: var(--ich-text-xs); opacity: var(--ich-op-card-meta); }
.fusion-verify__boundary { font-size: var(--ich-text-sm); opacity: var(--ich-op-card-meta); margin-top: var(--ich-sp4); }
.fusion-verify__error { color: var(--vp-c-danger-1, crimson); font-size: var(--ich-text-sm); }
</style>
