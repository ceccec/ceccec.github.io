<script setup lang="ts">
// Morph: raw UiCard → UiCardShell (universal card family · dryCleanAllVueComponentsToTheUniversalSet).
import { computed, ref, shallowRef, watch } from 'vue'
import { astronomySimulationPanelComputes, drawAstronomyProjection } from './index.ts'
import { useData } from 'vitepress'
import { prefersReducedMotion, useVisibleMovieCanvas } from '../../../../.vitepress/lib/movie-canvas.ts'
import { useSiteLocale } from '../../../../.vitepress/lib/mounts.ts'
import UiCardShell from '../../../../.vitepress/theme/components/UiCardShell.vue'
import UiBadge from '../../../../.vitepress/theme/components/ui/Badge.vue'
import UiAlert from '../../../../.vitepress/theme/components/ui/Alert.vue'

const panel = shallowRef(astronomySimulationPanelComputes())
const { pick } = useSiteLocale()
const t = (pair: { en: string; bg: string }) => pick(pair.en, pair.bg)
const reduce = prefersReducedMotion()
// Polarity bit: dark paints the sealed positive, light recomputes through the negative law.
const { isDark } = useData()
const canvasHost = ref<HTMLElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)

const bodies = computed(() => panel.value.sim.bodies)
const seedParts = computed(() => ['Astronomy', String(panel.value.sim.phaseDigit)] as const)
const title = computed(() => t(panel.value.copy.title))

function paintAstronomy(ctx: CanvasRenderingContext2D, w: number, h: number, at: number) {
  panel.value = astronomySimulationPanelComputes(undefined, at)
  drawAstronomyProjection(ctx, w, h, panel.value.sim, { dark: isDark.value, reduce })
}

const { at, repaint } = useVisibleMovieCanvas({
  canvas,
  root: canvasHost,
  visibility: 'intersection',
  measure: () => ({
    w: canvasHost.value?.clientWidth ?? 0,
    h: canvasHost.value?.clientHeight ?? 0,
  }),
  paint: paintAstronomy,
})

// Repaint on theme toggle so the reduced-motion still frame also recomputes its colours.
watch(isDark, () => repaint())

watch(at, (time) => {
  panel.value = astronomySimulationPanelComputes(undefined, time)
})
</script>

<template>
  <UiCardShell
    id="astronomy-simulation-panel"
    class="astronomy-simulation-panel"
    component="Astronomy"
    movie-intensity="soft"
    :seed-parts="seedParts"
    :title="title"
    data-logic="src/heaven/sky/astronomy/index.ts"
    data-target="src/heaven/sky/astronomy/index.ts#astronomySimulationAt"
    data-topic="astronomy"
  >
    <div class="astronomy-simulation-panel__content">
      <header class="astronomy-simulation-panel__header">
        <h2>{{ title }}</h2>
        <p class="astronomy-simulation-panel__lede">
          {{ t(panel.copy.lede) }}
        </p>
        <div class="astronomy-simulation-panel__badges">
          <UiBadge :variant="panel.sim.computes ? 'default' : 'outline'">
            simulation · {{ panel.sim.computes ? '✓' : '—' }}
          </UiBadge>
          <UiBadge :variant="panel.computesAll.computes ? 'default' : 'outline'">
            computes · {{ panel.computesAll.computes ? '✓' : '—' }}
          </UiBadge>
          <UiBadge variant="secondary">
            vortex {{ panel.sim.phaseDigit }}
          </UiBadge>
        </div>
      </header>

      <div ref="canvasHost" class="astronomy-simulation-panel__movie-host">
        <canvas
          ref="canvas"
          class="astronomy-simulation-panel__movie"
          :aria-label="t({ en: 'Sixteen-body Keplerian orbit simulation', bg: 'Шестнадесет телесна Keplerian орбита' })"
        />
      </div>

      <p class="astronomy-simulation-panel__count">
        {{ bodies.length }} bodies · sequence decode drives hue from vortex digit
      </p>

      <UiAlert :title="t({ en: 'Honest boundary', bg: 'Честна граница' })">
        <p>{{ panel.boundary }}</p>
      </UiAlert>
    </div>
  </UiCardShell>
</template>

<style scoped>
.astronomy-simulation-panel__content {
  display: grid;
  gap: 1rem;
}

.astronomy-simulation-panel__lede {
  margin: var(--ich-sp4) 0 0;
  opacity: var(--ich-op-strong);
}

.astronomy-simulation-panel__badges {
  display: flex;
  flex-wrap: wrap;
  gap: var(--ich-sp4);
  margin-top: var(--ich-sp6);
}

.astronomy-simulation-panel__movie-host {
  min-height: calc(var(--ich-unit) * 64 + var(--ich-unit));
  border-radius: calc(1rem * 3 / 4);
  overflow: hidden;
  background: var(--ich-scrim);
}

.astronomy-simulation-panel__movie {
  display: block;
  width: 100%;
  height: calc(var(--ich-unit) * 64 + var(--ich-unit));
}

.astronomy-simulation-panel__count {
  margin: 0;
  font-size: calc(1em * 8 / 9);
  opacity: var(--ich-op-card-soft);
}
</style>
