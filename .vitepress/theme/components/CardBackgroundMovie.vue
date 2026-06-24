<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, shallowRef, watch } from 'vue'
import { useRoute } from 'vitepress'
import {
  backgroundSceneFromShared,
  cardMoviePath,
  drawBackgroundMovie,
  sharedHeroAt,
  subscribeHeroClock,
} from '@vp-lib/hero-movie'

const props = defineProps<{
  seed: string
  title?: string
}>()

const route = useRoute()
const root = ref<HTMLElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)
const cssWidth = ref(320)
const at = shallowRef(typeof performance !== 'undefined' ? performance.now() : 0)
const reduce = ref(
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
)

const moviePath = computed(() => cardMoviePath(route.path, props.seed))
const shared = computed(() =>
  sharedHeroAt(
    moviePath.value,
    { title: props.title ?? props.seed },
    at.value,
    cssWidth.value,
    reduce.value,
  ),
)

let offClock: (() => void) | null = null
let observer: IntersectionObserver | null = null
let visible = false

function resize(): void {
  const el = canvas.value
  const host = root.value
  if (!el || !host) return
  const w = host.clientWidth || 320
  const h = host.clientHeight || 120
  const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1
  cssWidth.value = w
  el.style.width = `${w}px`
  el.style.height = `${h}px`
  el.width = Math.floor(w * dpr)
  el.height = Math.floor(h * dpr)
  const ctx = el.getContext('2d')
  if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
}

function paint(time = at.value): void {
  const el = canvas.value
  const host = root.value
  if (!el || !host) return
  const ctx = el.getContext('2d')
  if (!ctx) return
  at.value = time
  const w = host.clientWidth || el.clientWidth
  const h = host.clientHeight || el.clientHeight
  if (w < 1 || h < 1) return
  drawBackgroundMovie(ctx, w, h, backgroundSceneFromShared(shared.value))
}

function syncClock(active: boolean): void {
  offClock?.()
  offClock = null
  if (!active) return
  offClock = subscribeHeroClock((time) => {
    if (visible) paint(time)
  })
  paint()
}

onMounted(async () => {
  await nextTick()
  resize()
  paint()
  if (typeof window === 'undefined' || !root.value) return
  observer = new IntersectionObserver(
    (entries) => {
      visible = entries.some((entry) => entry.isIntersecting)
      syncClock(visible)
    },
    { rootMargin: '64px' },
  )
  observer.observe(root.value)
  window.addEventListener('resize', onResize)
})

function onResize(): void {
  resize()
  paint()
}

onUnmounted(() => {
  observer?.disconnect()
  observer = null
  offClock?.()
  offClock = null
  window.removeEventListener('resize', onResize)
})

watch(moviePath, () => nextTick(() => {
  resize()
  paint()
}))
</script>

<template>
  <div ref="root" class="ui-card__movie" aria-hidden="true">
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
</style>
