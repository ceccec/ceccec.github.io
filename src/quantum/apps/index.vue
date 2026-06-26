<script setup lang="ts">
import { computed, ref, shallowRef } from 'vue'
import { quantumAppsPanelComputes, quantumAppLaunch } from './index.ts'
import LinkedHeroCard from '../../../.vitepress/theme/components/LinkedHeroCard.vue'
import UiCard from '../../../.vitepress/theme/components/ui/Card.vue'
import UiCardContent from '../../../.vitepress/theme/components/ui/CardContent.vue'
import UiBadge from '../../../.vitepress/theme/components/ui/Badge.vue'
import UiButton from '../../../.vitepress/theme/components/ui/Button.vue'

const panel = shallowRef(quantumAppsPanelComputes())
const activeId = ref<string | null>(null)

const launchPreview = computed(() => (activeId.value ? quantumAppLaunch(activeId.value) : null))

function openApp(appId: string) {
  activeId.value = appId
  const launch = quantumAppLaunch(appId)
  if (launch.launched && typeof window !== 'undefined') window.location.assign(launch.route)
}
</script>

<template>
  <UiCard id="quantum-apps-launcher" class="quantum-apps" data-logic="src/quantum/apps/index.ts" data-topic="quantum-apps">
    <UiCardContent class="vp-doc quantum-apps__content">
      <header>
        <h2>Quantum apps</h2>
        <p class="quantum-apps__lede">Route-mounted compute barrels — launch sealed monograph apps, not installable binaries.</p>
        <UiBadge :variant="panel.computes ? 'default' : 'outline'">quantum.apps.registry · {{ panel.computes ? '✓' : '—' }} · {{ panel.apps.length }} apps</UiBadge>
      </header>
      <div class="quantum-apps__grid">
        <button
          v-for="app in panel.apps"
          :key="app.id"
          type="button"
          class="quantum-apps__tile"
          @click="openApp(app.id)"
        >
          <LinkedHeroCard :route="app.route" :title="app.title" :glyph="app.icon" />
          <span class="quantum-apps__meta"><code>{{ app.computesGate }}</code></span>
        </button>
      </div>
      <footer v-if="launchPreview" class="quantum-apps__footer">
        <UiButton variant="outline" size="sm" @click="openApp(launchPreview.appId)">Open {{ launchPreview.appId }}</UiButton>
      </footer>
    </UiCardContent>
  </UiCard>
</template>

<style scoped>
.quantum-apps__lede { opacity: 0.85; max-width: 52rem; }
.quantum-apps__grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr)); gap: 0.75rem; margin-top: 1rem; }
.quantum-apps__tile { all: unset; cursor: pointer; display: block; }
.quantum-apps__meta { display: block; font-size: 0.7rem; opacity: 0.65; margin-top: 0.25rem; padding: 0 0.25rem; }
.quantum-apps__footer { margin-top: 1rem; }
</style>
