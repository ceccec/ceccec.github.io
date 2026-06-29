<script setup lang="ts">
import { computed, ref, shallowRef } from 'vue'
import { quantumOsPanelComputes, quantumOsShell } from './index.ts'
import { quantumAppLaunch } from '../apps/index.ts'
import HeroBackgroundLayer from '../../../.vitepress/theme/components/HeroBackgroundLayer.vue'
import UiBadge from '../../../.vitepress/theme/components/ui/Badge.vue'
import UiButton from '../../../.vitepress/theme/components/ui/Button.vue'
import UiCard from '../../../.vitepress/theme/components/ui/Card.vue'
import UiCardContent from '../../../.vitepress/theme/components/ui/CardContent.vue'
import UiTabs from '../../../.vitepress/theme/components/ui/Tabs.vue'
import UiTabsList from '../../../.vitepress/theme/components/ui/TabsList.vue'
import UiTabsTrigger from '../../../.vitepress/theme/components/ui/TabsTrigger.vue'
import UiTabsContent from '../../../.vitepress/theme/components/ui/TabsContent.vue'
import QuantumComputerLab from '../computer/index.vue'

const panel = shallowRef(quantumOsPanelComputes())
const shell = computed(() => quantumOsShell(0, undefined, null))
// Every UI value is computed by quantumMathDesignsTheUi — bound here as CSS custom properties.
const designVars = computed(() => panel.value.cssVars as Record<string, string>)
const design = computed(() => panel.value.design)

function tierVariant(tier: string): 'default' | 'secondary' | 'outline' | 'destructive' {
  if (tier === 'NATIVE' || tier === 'BROWSER' || tier === 'NODE') return 'default'
  if (tier === 'FALLBACK' || tier === 'UNAVAILABLE') return 'secondary'
  return 'outline'
}

const activeTab = ref('launcher')

function launchDock(appId: string) {
  if (appId === 'quantum-computer') { activeTab.value = 'computer'; return }
  const launch = quantumAppLaunch(appId)
  if (launch.launched && typeof window !== 'undefined') window.location.assign(launch.route)
}
</script>

<template>
  <div class="quantum-os" data-logic="src/quantum/os/index.ts" data-topic="quantum-os" :style="designVars">
    <HeroBackgroundLayer class="quantum-os__wallpaper" />
    <header class="quantum-os__status">
      <span class="quantum-os__brand">Quantum OS</span>
      <UiBadge :variant="panel.computes ? 'default' : 'outline'">quantum.os.computes · {{ panel.computes ? '✓' : '—' }}</UiBadge>
      <UiBadge :variant="design.designed ? 'default' : 'outline'" class="quantum-os__design-badge">quantum.math.designs.ui · hue {{ design.hue }}° · {{ design.designed ? '✓' : '—' }}</UiBadge>
      <div class="quantum-os__drivers">
        <UiBadge v-for="driver in panel.drivers" :key="driver.id" :variant="tierVariant(driver.tier)" class="quantum-os__driver-badge">
          {{ driver.label }} · {{ driver.tier }}
        </UiBadge>
      </div>
    </header>
    <main class="quantum-os__workspace">
      <UiCard class="quantum-os__workspace-card">
        <UiCardContent class="vp-doc">
          <UiTabs v-model="activeTab">
            <UiTabsList>
              <UiTabsTrigger value="launcher">Launcher</UiTabsTrigger>
              <UiTabsTrigger value="computer">Quantum computer</UiTabsTrigger>
              <UiTabsTrigger value="drivers">Device layer</UiTabsTrigger>
            </UiTabsList>
            <UiTabsContent value="computer">
              <QuantumComputerLab />
            </UiTabsContent>
            <UiTabsContent value="launcher">
              <p class="quantum-os__lede">{{ panel.statement }}</p>
              <p class="quantum-os__boundary">{{ panel.boundary }}</p>
              <p><UiButton variant="default" size="sm" @click="launchDock('quantum-computer')">⌨ Open Quantum computer lab</UiButton></p>
              <ul class="quantum-os__app-list">
                <li v-for="app in panel.apps.slice(0, 8)" :key="app.id">
                  <UiButton variant="ghost" size="sm" @click="launchDock(app.id)">{{ app.icon }} {{ app.title }}</UiButton>
                </li>
              </ul>
            </UiTabsContent>
            <UiTabsContent value="drivers">
              <table class="quantum-os__table">
                <thead><tr><th>Driver</th><th>Tier</th></tr></thead>
                <tbody>
                  <tr v-for="driver in shell.drivers" :key="driver.id">
                    <td>{{ driver.label }}</td>
                    <td><UiBadge :variant="tierVariant(driver.tier)">{{ driver.tier }}</UiBadge></td>
                  </tr>
                </tbody>
              </table>
            </UiTabsContent>
          </UiTabs>
        </UiCardContent>
      </UiCard>
      <slot />
    </main>
    <nav class="quantum-os__dock" aria-label="Pinned apps">
      <UiButton v-for="appId in panel.dockAppIds" :key="appId" variant="secondary" size="sm" class="quantum-os__dock-btn" @click="launchDock(appId)">
        {{ panel.apps.find((a) => a.id === appId)?.icon ?? '◆' }}
      </UiButton>
    </nav>
  </div>
</template>

<style scoped>
.quantum-os { position: relative; min-height: calc(64vh + 6vh); display: grid; grid-template-rows: auto 1fr auto; gap: var(--q-space-2, var(--ich-sp6)); isolation: isolate; accent-color: var(--q-accent); }
.quantum-os__wallpaper { position: fixed; inset: 0; z-index: -1; pointer-events: none; }
.quantum-os__status { display: flex; flex-wrap: wrap; align-items: center; gap: var(--q-space, var(--ich-sp4)); padding: var(--q-space, var(--ich-sp4)) var(--q-space-2, var(--ich-sp6)); backdrop-filter: blur(var(--ich-sp6)); background: color-mix(in srgb, var(--vp-c-bg) calc(64% + 8%), transparent); border-radius: var(--q-radius, 8px); border-top: 3px solid var(--q-primary, var(--vp-c-brand-1)); }
.quantum-os__brand { font-weight: 700; margin-right: var(--ich-sp4); color: var(--q-primary, inherit); }
.quantum-os__design-badge { font-size: var(--ich-text-2xs); }
.quantum-os__drivers { display: flex; flex-wrap: wrap; gap: var(--ich-sp3); margin-left: auto; }
.quantum-os__driver-badge { font-size: var(--ich-text-2xs); }
.quantum-os__workspace { padding: 0 var(--ich-sp2); }
.quantum-os__workspace-card { backdrop-filter: blur(var(--ich-sp4)); background: color-mix(in srgb, var(--vp-c-bg) calc(64% + 16% + 8%), transparent); border-radius: var(--q-radius, 8px); box-shadow: 0 calc(var(--q-elevation, 1) * 4px) calc(var(--q-elevation, 1) * 16px) color-mix(in srgb, var(--q-primary, var(--vp-c-brand-1)) calc(9% + 9%), transparent); }
.quantum-os__lede { opacity: var(--ich-op-strong); max-width: calc(1rem * 16 * 3); }
.quantum-os__boundary { font-size: var(--ich-text-sm); opacity: var(--ich-op-card-meta); max-width: calc(1rem * 16 * 3); }
.quantum-os__app-list { list-style: none; padding: 0; display: flex; flex-wrap: wrap; gap: var(--ich-sp3); }
.quantum-os__table { width: 100%; border-collapse: collapse; font-size: var(--ich-text-sm); }
.quantum-os__table th, .quantum-os__table td { border-bottom: 1px solid var(--vp-c-divider); padding: var(--ich-sp3) var(--ich-sp4); text-align: left; }
.quantum-os__dock { display: flex; flex-wrap: wrap; justify-content: center; gap: var(--q-space, var(--ich-sp4)); padding: var(--q-space-2, var(--ich-sp5)); backdrop-filter: blur(var(--ich-sp7)); background: color-mix(in srgb, var(--vp-c-bg) calc(64% + 16%), transparent); border-radius: var(--q-radius, 8px); border-bottom: 3px solid var(--q-accent, var(--vp-c-brand-1)); }
@media (max-width: 640px) { .quantum-os__drivers { width: 100%; margin-left: 0; } .quantum-os__dock { position: sticky; bottom: 0; } }
</style>
