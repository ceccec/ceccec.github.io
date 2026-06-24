<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vitepress'
import { drawLivingTorusFrame, livingTorus, prefersReducedMotion, useVisibleMovieCanvas } from '@vp-lib/hero-movie'
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

useVisibleMovieCanvas({
  canvas,
  root: canvasHost,
  visibility: 'intersection',
  measure: () => ({
    w: canvasHost.value?.clientWidth ?? 0,
    h: canvasHost.value?.clientHeight ?? 0,
  }),
  paint: (ctx, w, h, at) => {
    drawLivingTorusFrame(ctx, w, h, at, torus.coordinates, reduce)
  },
})
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
  margin: 1rem 0;
}

.living-torus__canvas-host {
  position: relative;
  z-index: 2;
  width: 100%;
  min-height: min(52vw, var(--vp-movie-min-h));
}

.living-torus__canvas {
  display: block;
  width: 100%;
  height: min(52vw, var(--vp-movie-min-h));
  border-radius: calc(var(--vp-movie-radius) * 0.75);
  background: transparent;
}
</style>
