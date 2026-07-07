<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useData, useRoute } from 'vitepress'
import { drawLivingTorusFrame, livingTorus } from '@vp-lib/hero-movie'
import { prefersReducedMotion, useVisibleMovieCanvas } from '@vp-lib/movie-canvas'
import { useSiteLocale } from '../../lib/mounts'
import UiCardShell from './UiCardShell.vue'

const route = useRoute()
const { t } = useSiteLocale()
const canvasHost = ref<HTMLElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)
const torus = livingTorus()
const displayTitle = computed(() => t('Living Torus'))
const seedParts = computed(() => ['LivingTorus', torus.statement, route.path] as const)
const reduce = prefersReducedMotion()
// Polarity bit: dark paints the sealed positive, light recomputes through the negative law.
const { isDark } = useData()

const { repaint } = useVisibleMovieCanvas({
  canvas,
  root: canvasHost,
  visibility: 'intersection',
  measure: () => ({
    w: canvasHost.value?.clientWidth ?? 0,
    h: canvasHost.value?.clientHeight ?? 0,
  }),
  paint: (ctx, w, h, at) => {
    drawLivingTorusFrame(ctx, w, h, at, torus.coordinates, reduce, isDark.value)
  },
})

// Repaint on theme toggle so the reduced-motion still frame also recomputes its colours.
watch(isDark, () => repaint())
</script>

<template>
  <UiCardShell
    class="living-torus living-torus-card"
    component="LivingTorus"
    :seed-parts="seedParts"
    :title="displayTitle"
  >
    <div ref="canvasHost" class="living-torus__canvas-host">
      <canvas ref="canvas" class="living-torus__canvas" :aria-label="displayTitle" />
    </div>
  </UiCardShell>
</template>

<style scoped>
.living-torus {
  margin: var(--ich-sp4) 0;
}

.living-torus__canvas-host {
  position: relative;
  z-index: 2;
  width: 100%;
  min-height: min(var(--ich-vw-movie), var(--vp-movie-min-h));
}

.living-torus__canvas {
  display: block;
  width: 100%;
  height: min(var(--ich-vw-movie), var(--vp-movie-min-h));
  border-radius: calc(var(--vp-movie-radius) * calc(3 / 4));
  background: transparent;
}
</style>
