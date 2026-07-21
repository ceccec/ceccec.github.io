<script setup lang="ts">
import { computed, ref, shallowRef, watch } from 'vue'
import { drawDynamicsProjection, quantumDynamicsSimulationPanelComputes } from './index.ts'
import { useData } from 'vitepress'
import { prefersReducedMotion, useVisibleMovieCanvas } from '../../.vitepress/lib/movie-canvas'
import { useSiteLocale } from '../../.vitepress/lib/mounts'
import UiCard from '../../.vitepress/theme/components/ui/Card.vue'
import UiCardContent from '../../.vitepress/theme/components/ui/CardContent.vue'
import UiBadge from '../../.vitepress/theme/components/ui/Badge.vue'
import UiAlert from '../../.vitepress/theme/components/ui/Alert.vue'

const panel = shallowRef(quantumDynamicsSimulationPanelComputes())
const { pick } = useSiteLocale()
const t = (pair: { en: string; bg: string }) => pick(pair.en, pair.bg)
const reduce = prefersReducedMotion()
// Polarity bit: dark paints the sealed positive, light recomputes through the negative law.
const { isDark } = useData()
const canvasHost = ref<HTMLElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)

const amplitudes = computed(() => panel.value.sim.amplitudes)

function paintQuantum(ctx: CanvasRenderingContext2D, w: number, h: number, at: number) {
  panel.value = quantumDynamicsSimulationPanelComputes(undefined, at)
  drawDynamicsProjection(ctx, w, h, panel.value.sim, { dark: isDark.value, reduce })
}

const { at, repaint } = useVisibleMovieCanvas({
  canvas,
  root: canvasHost,
  visibility: 'intersection',
  measure: () => ({
    w: canvasHost.value?.clientWidth ?? 0,
    h: canvasHost.value?.clientHeight ?? 0,
  }),
  paint: paintQuantum,
})

// Repaint on theme toggle so the reduced-motion still frame also recomputes its colours.
watch(isDark, () => repaint())

watch(at, (time) => {
  panel.value = quantumDynamicsSimulationPanelComputes(undefined, time)
})
</script>

<template>
  <UiCard
    id="quantum-dynamics-simulation-panel"
    class="quantum-dynamics-simulation-panel"
    data-logic="src/quantum/dynamics/index.ts"
    data-target="src/quantum/dynamics/index.ts#quantumDynamicsSimulationAt"
    data-topic="quantum-dynamics"
  >
    <UiCardContent class="vp-doc quantum-dynamics-simulation-panel__content">
      <header class="quantum-dynamics-simulation-panel__header">
        <h2>{{ t(panel.copy.title) }}</h2>
        <p class="quantum-dynamics-simulation-panel__lede">
          {{ t(panel.copy.lede) }}
        </p>
        <div class="quantum-dynamics-simulation-panel__badges">
          <UiBadge :variant="panel.sim.computes ? 'default' : 'outline'">
            simulation · {{ panel.sim.computes ? '✓' : '—' }}
          </UiBadge>
          <UiBadge :variant="panel.sim.superposition ? 'default' : 'outline'">
            superposition · {{ panel.sim.superposition ? '✓' : '—' }}
          </UiBadge>
          <UiBadge :variant="panel.sim.entangled ? 'default' : 'outline'">
            entangled · {{ panel.sim.entangled ? '✓' : '—' }}
          </UiBadge>
          <UiBadge :variant="panel.computesAll.computes ? 'default' : 'outline'">
            computes · {{ panel.computesAll.computes ? '✓' : '—' }}
          </UiBadge>
        </div>
      </header>

      <div ref="canvasHost" class="quantum-dynamics-simulation-panel__movie-host">
        <canvas
          ref="canvas"
          class="quantum-dynamics-simulation-panel__movie"
          :aria-label="t({ en: 'Bell pair amplitude bars at hero clock', bg: 'Bell pair амплитуди на hero часовника' })"
        />
      </div>

      <ul class="quantum-dynamics-simulation-panel__amps">
        <li v-for="amp in amplitudes" :key="amp.receipt">
          |{{ amp.basis }}⟩ · P={{ amp.probability }} · φ={{ amp.phase }}
        </li>
      </ul>

      <UiAlert :title="t({ en: 'Honest boundary', bg: 'Честна граница' })">
        <p>{{ panel.boundary }}</p>
      </UiAlert>
    </UiCardContent>
  </UiCard>
</template>

<style scoped>
.quantum-dynamics-simulation-panel__content {
  display: grid;
  gap: 1rem;
}

.quantum-dynamics-simulation-panel__lede {
  margin: var(--ich-sp4) 0 0;
  opacity: var(--ich-op-strong);
}

.quantum-dynamics-simulation-panel__badges {
  display: flex;
  flex-wrap: wrap;
  gap: var(--ich-sp4);
  margin-top: var(--ich-sp6);
}

.quantum-dynamics-simulation-panel__movie-host {
  min-height: calc(var(--ich-fig) - var(--ich-sp8));
  border-radius: calc(1rem * 3 / 4);
  overflow: hidden;
  background: var(--ich-scrim);
}

.quantum-dynamics-simulation-panel__movie {
  display: block;
  width: 100%;
  height: calc(var(--ich-fig) - var(--ich-sp8));
}

.quantum-dynamics-simulation-panel__amps {
  margin: 0;
  padding-left: var(--ich-sp9);
  display: grid;
  gap: var(--ich-sp2);
  font-family: ui-monospace, monospace;
  font-size: calc(1em * 8 / 9);
}
</style>
