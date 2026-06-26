<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import {
  backgroundSceneFromShared,
  cardMoviePath,
  drawBackgroundMovie,
  drawQuantumAppFrame,
  sharedHeroAt,
  type MovieIntensity,
  type QuantumProjection,
} from '@vp-lib/hero-movie'
import { prefersReducedMotion, useVisibleMovieCanvas } from '@vp-lib/movie-canvas'
import { useRoute } from 'vitepress'

const props = withDefaults(
  defineProps<{
    seed: string
    title?: string
    intensity?: MovieIntensity
    /** When set, paint this quantum-app PROJECTION of the shared field instead of the plasma field. */
    app?: QuantumProjection
  }>(),
  { intensity: 'full' },
)

const route = useRoute()
const root = ref<HTMLElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)
const reduce = prefersReducedMotion()

const moviePath = computed(() => cardMoviePath(route.path, props.seed))

const { repaint } = useVisibleMovieCanvas({
  canvas,
  root,
  visibility: 'intersection',
  measure: () => ({
    w: root.value?.clientWidth || 320,
    h: root.value?.clientHeight || 120,
  }),
  paint: (ctx, w, h, at) => {
    const shared = sharedHeroAt(
      moviePath.value,
      { title: props.title ?? props.seed },
      at,
      w,
      reduce,
    )
    if (props.app) {
      drawQuantumAppFrame(ctx, w, h, props.app, {
        hue: shared.hue,
        p: shared.p,
        t: shared.t,
        reduce: shared.reduce,
        cssWidth: shared.cssWidth,
        palette: shared.palette,
      })
      return
    }
    drawBackgroundMovie(ctx, w, h, backgroundSceneFromShared(shared))
  },
})

watch([moviePath, () => props.app], repaint)
</script>

<template>
  <div
    ref="root"
    class="ui-card__movie"
    :class="intensity !== 'full' ? `ui-card__movie--${intensity}` : undefined"
    aria-hidden="true"
  >
    <canvas ref="canvas" />
  </div>
</template>

<style scoped>
.ui-card__movie {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

.ui-card__movie canvas {
  display: block;
  width: 100%;
  height: 100%;
}

.ui-card__movie--soft {
  opacity: var(--ich-op-card-back);
}

.ui-card__movie--whisper {
  opacity: var(--ich-op-card-front);
}
</style>
