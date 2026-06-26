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
import { proveAllDeterministicCore, proveAllDeterministicCoreBeatAt } from '../../../src/heaven/compute/index.ts'

const canvas = ref<HTMLCanvasElement | null>(null)
const { route, copy } = useHeroCopy()
const reduce = prefersReducedMotion()
const at = ref(0)

// The movie is the agent-facing window into the working modeled quantum computer: a machine- and human-readable
// caption of the live, content-addressed state (4-UUID/3+1 qubit register · hex→digit→double-torus · plasma · root),
// recomputable deterministically with quantumModelSnapshot(route, at). Recomputed on route change (phase 0 anchor).
const quantumCaption = computed(() => quantumModelSnapshot(route.path, 0).caption)

// KEYSTONE mount: proveAllDeterministicCore is the OG parent every proving animation folds into. Its root is
// surfaced as machine-readable microdata on the hero surface, and its three-beat (recompute→green / tamper→red /
// reuse→instant) is driven by the SAME shared phase clock the movie already runs on — no new clock.
const keystone = computed(() => proveAllDeterministicCore(undefined, route.path, 0))
const keystoneBeat = computed(() => proveAllDeterministicCoreBeatAt(at.value / 120_000).beat)
const keystoneTag = computed(() => `prove-all · ${keystone.value.proven ? 'proven' : 'unproven'} · beat:${keystoneBeat.value} · root:${keystone.value.root.slice(0, 8)}`)

const { repaint } = useVisibleMovieCanvas({
  canvas,
  visibility: 'document',
  measure: () => viewportSize(),
  paint: (ctx, w, h, atMs) => {
    at.value = atMs
    const shared = sharedHeroAt(route.path, copy.value, atMs, w, reduce)
    drawHeroMovieFrame(ctx, w, h, shared)
  },
})

watch(() => route.path, () => nextTick(repaint))
watch(copy, () => repaint(), { deep: true })
</script>

<template>
  <canvas ref="canvas" class="vp-hero-bg" role="img" :aria-label="quantumCaption" :data-quantum-model="quantumCaption" :data-prove-all="keystoneTag" :data-prove-all-beat="keystoneBeat" />
</template>

<style scoped>
.vp-hero-bg {
  display: block;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
