<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import {
  backgroundSceneFromShared,
  cardFieldScroll,
  cardMoviePath,
  drawBackgroundMovie,
  drawQuantumAppFrame,
  heroInkColor,
  sharedHeroAt,
  type MovieIntensity,
  type QuantumProjection,
} from '@vp-lib/hero-movie'
import { prefersReducedMotion, useVisibleMovieCanvas } from '@vp-lib/movie-canvas'
import { useData, useRoute } from 'vitepress'

const props = withDefaults(
  defineProps<{
    seed: string
    title?: string
    intensity?: MovieIntensity
    /** When set, paint this quantum-app PROJECTION of the shared field instead of the plasma field. */
    app?: QuantumProjection
    /** Make the card movie touch-interactive (A432 sound + haptic). Defaults on for app-projection cards. */
    interactive?: boolean
  }>(),
  { intensity: 'full' },
)

const route = useRoute()
// The same polarity bit the page movie threads: dark paints the sealed positive, light recomputes
// every colour through the negative law — the card and the page field stay one system.
const { isDark } = useData()
const root = ref<HTMLElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)
const reduce = prefersReducedMotion()

const moviePath = computed(() => cardMoviePath(route.path, props.seed))
// App-projection cards are the proving animations meant to be played; they opt into touch/sound/haptic.
const isInteractive = computed(() => props.interactive ?? Boolean(props.app))

// The card's own LIVE ink — each card field has its own hue, so the ink var is scoped to the card
// element and written on the same paint tick, only when the integer hue or polarity changes.
let lastInkKey = ''
let lastInkHue: number | null = null
function syncCardInk(hue: number): void {
  const key = `${Math.round(hue)}:${isDark.value ? 1 : 0}`
  if (key === lastInkKey) return
  lastInkKey = key
  lastInkHue = hue
  const card = root.value?.closest('.ui-card') as HTMLElement | null
  card?.style.setProperty('--vp-hero-ink', heroInkColor(hue, isDark.value))
}

const { repaint } = useVisibleMovieCanvas({
  canvas,
  root,
  visibility: 'intersection',
  ...(isInteractive.value ? { interactive: { seed: () => moviePath.value } } : {}),
  measure: () => ({
    w: root.value?.clientWidth || (64 * 5),
    h: root.value?.clientHeight || (8 * 5 * 3),
  }),
  paint: (ctx, w, h, at) => {
    // The meeting law (read INSIDE the tick — no listener): the card's mini-field centre is the ONE
    // fixed page centre in card coordinates, so as the card scrolls it MEETS the background movie
    // exactly at the viewport-centre crossing — the meet is the fusion of the two digit fields.
    const rectTop = root.value?.getBoundingClientRect().top ?? 0
    const winH = typeof window === 'undefined' ? h : window.innerHeight
    const shared = sharedHeroAt(
      moviePath.value,
      { title: props.title ?? props.seed },
      at,
      w,
      reduce,
      isDark.value,
      cardFieldScroll(rectTop, h, winH),
    )
    syncCardInk(shared.hue)
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
// Resync the ink DIRECTLY on the polarity flip — a hidden tab pauses the paint tick, but the pole
// flip must not wait for the next frame.
watch(isDark, () => {
  if (lastInkHue !== null) syncCardInk(lastInkHue)
  repaint()
})
</script>

<template>
  <div
    ref="root"
    class="ui-card__movie"
    :class="[
      intensity !== 'full' ? `ui-card__movie--${intensity}` : undefined,
      isInteractive ? 'ui-card__movie--interactive' : undefined,
    ]"
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

/* Interactive (app-projection) cards: the movie canvas receives touch to sound A432 + vibrate. It sits behind
   the card content (z-index 0), so taps on the content still navigate; taps on the exposed movie play sound. */
.ui-card__movie--interactive canvas {
  pointer-events: auto;
  touch-action: none;
}

.ui-card__movie--soft {
  opacity: var(--ich-op-card-back);
}

.ui-card__movie--whisper {
  opacity: var(--ich-op-card-front);
}
</style>
