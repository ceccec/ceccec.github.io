<script setup lang="ts">
import { computed, ref, shallowRef, watch } from 'vue'
import { astronomySimulationPanelComputes } from './index.ts'
import { prefersReducedMotion, useVisibleMovieCanvas } from '../../../../.vitepress/lib/movie-canvas'
import { useSiteLocale } from '../../../../.vitepress/lib/mounts'
import UiCard from '../../../../.vitepress/theme/components/ui/Card.vue'
import UiCardContent from '../../../../.vitepress/theme/components/ui/CardContent.vue'
import UiBadge from '../../../../.vitepress/theme/components/ui/Badge.vue'
import UiAlert from '../../../../.vitepress/theme/components/ui/Alert.vue'

const panel = shallowRef(astronomySimulationPanelComputes())
const { pick } = useSiteLocale()
const t = (pair: { en: string; bg: string }) => pick(pair.en, pair.bg)
const reduce = prefersReducedMotion()
const canvasHost = ref<HTMLElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)

const bodies = computed(() => panel.value.sim.bodies)

function paintAstronomy(ctx: CanvasRenderingContext2D, w: number, h: number, at: number) {
  panel.value = astronomySimulationPanelComputes(undefined, at)
  const sim = panel.value.sim
  ctx.clearRect(0, 0, w, h)
  const cx = w / 2
  const cy = h / 2
  const scale = Math.min(w, h) * 0.38
  ctx.strokeStyle = 'rgba(255,255,255,0.06)'
  for (let ring = 1; ring <= 4; ring += 1) {
    ctx.beginPath()
    ctx.arc(cx, cy, (scale * ring) / 4, 0, Math.PI * 2)
    ctx.stroke()
  }
  sim.bodies.forEach((body) => {
    const radius = body.kind === 'star' ? 0 : Math.hypot(body.x, body.y) * scale
    const angle = Math.atan2(body.y, body.x)
    const x = cx + Math.cos(angle) * radius
    const y = cy + Math.sin(angle) * radius
    const size = body.kind === 'star' ? 10 : body.kind === 'satellite' ? 5 : 4
    ctx.fillStyle = `hsla(${body.hue}, 70%, 58%, 0.85)`
    ctx.beginPath()
    ctx.arc(body.kind === 'star' ? cx : x, body.kind === 'star' ? cy : y, size, 0, Math.PI * 2)
    ctx.fill()
    if (!reduce && (body.kind === 'planet' || body.kind === 'star' || body.kind === 'satellite')) {
      ctx.font = '9px sans-serif'
      ctx.fillStyle = 'rgba(255,255,255,0.7)'
      ctx.fillText(body.name, (body.kind === 'star' ? cx : x) + 8, (body.kind === 'star' ? cy : y) - 4)
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
  paint: paintAstronomy,
})

watch(at, (time) => {
  panel.value = astronomySimulationPanelComputes(undefined, time)
})
</script>

<template>
  <UiCard
    id="astronomy-simulation-panel"
    class="astronomy-simulation-panel"
    data-logic="src/astronomy/index.ts"
    data-target="src/astronomy/index.ts#astronomySimulationAt"
    data-topic="astronomy"
  >
    <UiCardContent class="vp-doc astronomy-simulation-panel__content">
      <header class="astronomy-simulation-panel__header">
        <h2>{{ t(panel.copy.title) }}</h2>
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
    </UiCardContent>
  </UiCard>
</template>

<style scoped>
.astronomy-simulation-panel__content {
  display: grid;
  gap: 1rem;
}

.astronomy-simulation-panel__lede {
  margin: 0.5rem 0 0;
  opacity: 0.9;
}

.astronomy-simulation-panel__badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.astronomy-simulation-panel__movie-host {
  min-height: 260px;
  border-radius: 0.75rem;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.25);
}

.astronomy-simulation-panel__movie {
  display: block;
  width: 100%;
  height: 260px;
}

.astronomy-simulation-panel__count {
  margin: 0;
  font-size: 0.92em;
  opacity: 0.85;
}
</style>
