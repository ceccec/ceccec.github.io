<script setup lang="ts">
// Morph: raw UiCard → UiCardShell (universal card family · dryCleanAllVueComponentsToTheUniversalSet).
import { computed, ref, shallowRef, watch } from 'vue'
import { drawResonanceProjection, resonanceSimulationPanelComputes } from './index.ts'
import { movieCanvasHex } from '../../../.vitepress/lib/hero-movie-paint'
import { useData } from 'vitepress'
import { prefersReducedMotion, useVisibleMovieCanvas } from '../../../.vitepress/lib/movie-canvas'
import { useSiteLocale } from '../../../.vitepress/lib/mounts'
import UiCardShell from '../../../.vitepress/theme/components/UiCardShell.vue'
import UiBadge from '../../../.vitepress/theme/components/ui/Badge.vue'
import UiAlert from '../../../.vitepress/theme/components/ui/Alert.vue'

const panel = shallowRef(resonanceSimulationPanelComputes())
const { pick } = useSiteLocale()
const t = (pair: { en: string; bg: string }) => pick(pair.en, pair.bg)
const reduce = prefersReducedMotion()
// Polarity bit: dark paints the sealed positive, light recomputes through the negative law.
const { isDark } = useData()
const canvasHost = ref<HTMLElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)

const modes = computed(() => panel.value.sim.modes)
const seedParts = computed(() => ['Resonance', panel.value.sim.schumannPhase.toFixed(3)] as const)
const title = computed(() => t(panel.value.copy.title))

function paintResonance(ctx: CanvasRenderingContext2D, w: number, h: number, at: number) {
  panel.value = resonanceSimulationPanelComputes(undefined, at)
  drawResonanceProjection(ctx, w, h, panel.value.sim, { dark: isDark.value, reduce })
}

const { at, repaint } = useVisibleMovieCanvas({
  canvas,
  root: canvasHost,
  visibility: 'intersection',
  measure: () => ({
    w: canvasHost.value?.clientWidth ?? 0,
    h: canvasHost.value?.clientHeight ?? 0,
  }),
  paint: paintResonance,
})

// Repaint on theme toggle so the reduced-motion still frame also recomputes its colours.
watch(isDark, () => repaint())

watch(at, (time) => {
  panel.value = resonanceSimulationPanelComputes(undefined, time)
})
</script>

<template>
  <UiCardShell
    id="resonance-simulation-panel"
    class="resonance-simulation-panel"
    component="Resonance"
    movie-intensity="soft"
    :seed-parts="seedParts"
    :title="title"
    data-logic="src/thunder/resonance/index.ts"
    data-target="src/thunder/resonance/index.ts#resonanceSimulationAt"
    data-topic="resonance"
  >
    <div class="resonance-simulation-panel__content">
      <header class="resonance-simulation-panel__header">
        <h2>{{ title }}</h2>
        <p class="resonance-simulation-panel__lede">
          {{ t(panel.copy.lede) }}
        </p>
        <div class="resonance-simulation-panel__badges">
          <UiBadge :variant="panel.sim.computes ? 'default' : 'outline'">
            simulation · {{ panel.sim.computes ? '✓' : '—' }}
          </UiBadge>
          <UiBadge :variant="panel.computesAll.computes ? 'default' : 'outline'">
            computes · {{ panel.computesAll.computes ? '✓' : '—' }}
          </UiBadge>
          <UiBadge variant="secondary">
            φ {{ panel.sim.schumannPhase.toFixed(3) }}
          </UiBadge>
        </div>
      </header>

      <div ref="canvasHost" class="resonance-simulation-panel__movie-host">
        <canvas
          ref="canvas"
          class="resonance-simulation-panel__movie"
          :aria-label="t({ en: 'Schumann harmonic modes animated at hero clock', bg: 'Schumann хармоници на hero часовника' })"
        />
      </div>

      <ul class="resonance-simulation-panel__modes">
        <li v-for="mode in modes" :key="mode.receipt">
          <span :style="{ color: movieCanvasHex(mode.hue, { dark: isDark }) }">{{ mode.hz }} Hz</span>
          · mode {{ mode.mode }} · amp {{ mode.amplitude }}
        </li>
      </ul>

      <UiAlert :title="t({ en: 'Honest boundary', bg: 'Честна граница' })">
        <p>{{ panel.boundary }}</p>
      </UiAlert>
    </div>
  </UiCardShell>
</template>

<style scoped>
.resonance-simulation-panel__content {
  display: grid;
  gap: 1rem;
}

.resonance-simulation-panel__lede {
  margin: var(--ich-sp4) 0 0;
  opacity: var(--ich-op-strong);
}

.resonance-simulation-panel__badges {
  display: flex;
  flex-wrap: wrap;
  gap: var(--ich-sp4);
  margin-top: var(--ich-sp6);
}

.resonance-simulation-panel__movie-host {
  min-height: calc(var(--ich-fig) + var(--ich-unit));
  border-radius: calc(1rem * 3 / 4);
  overflow: hidden;
  background: var(--ich-scrim);
}

.resonance-simulation-panel__movie {
  display: block;
  width: 100%;
  height: calc(var(--ich-fig) + var(--ich-unit));
}

.resonance-simulation-panel__modes {
  margin: 0;
  padding-left: var(--ich-sp9);
  display: grid;
  gap: var(--ich-sp2);
  font-size: calc(1em * 8 / 9);
}
</style>
