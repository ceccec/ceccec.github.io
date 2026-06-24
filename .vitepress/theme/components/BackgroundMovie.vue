<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import {
  drawHeroMovieFrame,
  prefersReducedMotion,
  sharedHeroAt,
  useVisibleMovieCanvas,
  viewportSize,
} from '@vp-lib/hero-movie'
import { useHeroCopy } from '../../lib/mounts'

const canvas = ref<HTMLCanvasElement | null>(null)
const { route, copy } = useHeroCopy()
const reduce = prefersReducedMotion()

const { repaint } = useVisibleMovieCanvas({
  canvas,
  visibility: 'document',
  measure: () => viewportSize(),
  paint: (ctx, w, h, at) => {
    const shared = sharedHeroAt(route.path, copy.value, at, w, reduce)
    drawHeroMovieFrame(ctx, w, h, shared)
  },
})

watch(() => route.path, () => nextTick(repaint))
watch(copy, () => repaint(), { deep: true })
</script>

<template>
  <canvas ref="canvas" class="vp-hero-bg" aria-hidden="true" />
</template>

<style scoped>
.vp-hero-bg {
  display: block;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
