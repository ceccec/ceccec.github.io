<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import {
  drawHeroMovieFrame,
  quantumModelSnapshot,
  sharedHeroAt,
} from '@vp-lib/hero-movie-paint'
import {
  prefersReducedMotion,
  useVisibleMovieCanvas,
  viewportSize,
} from '@vp-lib/movie-canvas'
import { useHeroCopy } from '../../lib/hero-copy'

const canvas = ref<HTMLCanvasElement | null>(null)
const { route, copy } = useHeroCopy()
const reduce = prefersReducedMotion()

// The movie is the agent-facing window into the working modeled quantum computer: a machine- and human-readable
// caption of the live, content-addressed state (4-UUID/3+1 qubit register · hex→digit→double-torus · plasma · root),
// recomputable deterministically with quantumModelSnapshot(route, at). Recomputed on route change (phase 0 anchor).
const quantumCaption = computed(() => quantumModelSnapshot(route.path, 0).caption)

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
  <canvas ref="canvas" class="vp-hero-bg" role="img" :aria-label="quantumCaption" :data-quantum-model="quantumCaption" />
</template>

<style scoped>
.vp-hero-bg {
  display: block;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
