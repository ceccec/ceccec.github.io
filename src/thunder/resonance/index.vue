<script setup lang="ts">
import { computed, ref, shallowRef, watch } from 'vue'
import { resonanceSimulationPanelComputes } from './index.ts'
import { A432_HUE, movieCanvasHex, movieCanvasRgba } from '../../../.vitepress/lib/hero-movie-paint'
import { prefersReducedMotion, useVisibleMovieCanvas } from '../../../.vitepress/lib/movie-canvas'
import { useSiteLocale } from '../../../.vitepress/lib/mounts'
import UiCard from '../../../.vitepress/theme/components/ui/Card.vue'
import UiCardContent from '../../../.vitepress/theme/components/ui/CardContent.vue'
import UiBadge from '../../../.vitepress/theme/components/ui/Badge.vue'
import UiAlert from '../../../.vitepress/theme/components/ui/Alert.vue'

const panel = shallowRef(resonanceSimulationPanelComputes())
const { pick } = useSiteLocale()
const t = (pair: { en: string; bg: string }) => pick(pair.en, pair.bg)
const reduce = prefersReducedMotion()
const canvasHost = ref<HTMLElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)

const modes = computed(() => panel.value.sim.modes)

// Near-white label ink from the A432 palette (high lightness, near-zero chroma) — no rgba literal.
const ink = (alpha: number) => movieCanvasRgba(A432_HUE, alpha, { L: 15 / 16, C: 1 / 64 })

function paintResonance(ctx: CanvasRenderingContext2D, w: number, h: number, at: number) {
  panel.value = resonanceSimulationPanelComputes(undefined, at)
  const sim = panel.value.sim
  ctx.clearRect(0, 0, w, h)
  const labelPx = Math.max(9, Math.round(h / 27))
  const cx = w / 2
  const cy = h * 0.55
  const baseR = Math.min(w, h) * 0.32
  ctx.strokeStyle = ink(0.08)
  ctx.beginPath()
  ctx.arc(cx, cy, baseR, 0, Math.PI * 2)
  ctx.stroke()
  sim.modes.forEach((mode, index) => {
    const angle = mode.phase * Math.PI * 2 + index * 0.4
    const r = baseR * (0.55 + mode.amplitude * 0.45)
    const x = cx + Math.cos(angle) * r
    const y = cy + Math.sin(angle) * r
    ctx.fillStyle = movieCanvasRgba(mode.hue, 0.35 + mode.amplitude * 0.55)
    ctx.beginPath()
    ctx.arc(x, y, 6 + mode.amplitude * 10, 0, Math.PI * 2)
    ctx.fill()
    ctx.strokeStyle = movieCanvasRgba(mode.hue, 0.5, { L: 13 / 16 })
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(cx, cy)
    ctx.lineTo(x, y)
    ctx.stroke()
    if (!reduce) {
      ctx.font = `${labelPx}px sans-serif`
      ctx.fillStyle = ink(0.75)
      ctx.fillText(`${mode.hz} Hz`, x + 8, y - 4)
    }
  })
}

const { at } = useVisibleMovieCanvas({
  canvas,
  root: canvasHost,
  visibility: 'intersection',
  measure: () => ({
    w: canvasHost.value?.clientWidth ?? 0,
    h: canvasHost.value?.clientHeight ?? 0,
  }),
  paint: paintResonance,
})

watch(at, (time) => {
  panel.value = resonanceSimulationPanelComputes(undefined, time)
})
</script>

<template>
  <UiCard
    id="resonance-simulation-panel"
    class="resonance-simulation-panel"
    data-logic="src/thunder/resonance/index.ts"
    data-target="src/thunder/resonance/index.ts#resonanceSimulationAt"
    data-topic="resonance"
  >
    <UiCardContent class="vp-doc resonance-simulation-panel__content">
      <header class="resonance-simulation-panel__header">
        <h2>{{ t(panel.copy.title) }}</h2>
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
          <span :style="{ color: movieCanvasHex(mode.hue) }">{{ mode.hz }} Hz</span>
          · mode {{ mode.mode }} · amp {{ mode.amplitude }}
        </li>
      </ul>

      <UiAlert :title="t({ en: 'Honest boundary', bg: 'Честна граница' })">
        <p>{{ panel.boundary }}</p>
      </UiAlert>
    </UiCardContent>
  </UiCard>
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
  min-height: calc(216px + 4px);
  border-radius: calc(1rem * 3 / 4);
  overflow: hidden;
  background: var(--ich-scrim);
}

.resonance-simulation-panel__movie {
  display: block;
  width: 100%;
  height: calc(216px + 4px);
}

.resonance-simulation-panel__modes {
  margin: 0;
  padding-left: var(--ich-sp9);
  display: grid;
  gap: var(--ich-sp2);
  font-size: calc(1em * 8 / 9);
}
</style>
