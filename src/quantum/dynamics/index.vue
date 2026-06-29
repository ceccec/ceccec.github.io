<script setup lang="ts">
import { computed, ref, shallowRef, watch } from 'vue'
import { quantumDynamicsSimulationPanelComputes } from './index.ts'
import { A432_HUE, movieCanvasRgba } from '../../.vitepress/lib/hero-movie-paint'
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
const canvasHost = ref<HTMLElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)

const amplitudes = computed(() => panel.value.sim.amplitudes)

// Near-white label ink from the A432 palette (high lightness, near-zero chroma) — no rgba literal.
const ink = (alpha: number) => movieCanvasRgba(A432_HUE, alpha, { L: 15 / 16, C: 1 / 64 })

function paintQuantum(ctx: CanvasRenderingContext2D, w: number, h: number, at: number) {
  panel.value = quantumDynamicsSimulationPanelComputes(undefined, at)
  const sim = panel.value.sim
  ctx.clearRect(0, 0, w, h)
  const labelPx = Math.max(9, Math.round(h / 27))
  const barW = Math.min(48, (w - 40) / Math.max(sim.amplitudes.length, 1))
  const baseY = h * 0.78
  const maxH = h * 0.55
  sim.amplitudes.forEach((amp, index) => {
    const x = 20 + index * (barW + 8)
    const barH = amp.probability * maxH
    ctx.fillStyle = movieCanvasRgba(amp.hue, 0.85)
    ctx.fillRect(x, baseY - barH, barW, barH)
    ctx.strokeStyle = ink(0.35)
    ctx.strokeRect(x, baseY - barH, barW, barH)
    ctx.fillStyle = ink(0.8)
    ctx.font = `${labelPx}px monospace`
    ctx.fillText(`|${amp.basis}⟩`, x, baseY + 14)
    if (!reduce) {
      ctx.fillText(amp.probability.toFixed(3), x, baseY - barH - 6)
    }
  })
  if (sim.entangled && sim.amplitudes.length >= 2) {
    const x0 = 20 + barW / 2
    const x1 = 20 + (sim.amplitudes.length - 1) * (barW + 8) + barW / 2
    const linkY = h * 0.22
    ctx.strokeStyle = movieCanvasRgba(A432_HUE, 0.55, { L: 13 / 16 })
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(x0, linkY)
    ctx.lineTo(x1, linkY)
    ctx.stroke()
    ctx.fillStyle = ink(0.75)
    ctx.font = `${labelPx}px sans-serif`
    ctx.fillText('entangled phase lock', x0, linkY - 8)
  }
}

const { at } = useVisibleMovieCanvas({
  canvas,
  root: canvasHost,
  visibility: 'intersection',
  measure: () => ({
    w: canvasHost.value?.clientWidth ?? 0,
    h: canvasHost.value?.clientHeight ?? 0,
  }),
  paint: paintQuantum,
})

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
  min-height: calc(216px - 16px);
  border-radius: calc(1rem * 3 / 4);
  overflow: hidden;
  background: var(--ich-scrim);
}

.quantum-dynamics-simulation-panel__movie {
  display: block;
  width: 100%;
  height: calc(216px - 16px);
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
