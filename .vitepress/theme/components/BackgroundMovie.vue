<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, shallowRef, watch } from 'vue'
import { useRoute, useData } from 'vitepress'
import {
  createAnimationEngine,
  drawHeroMovieFrame,
  sharedHeroAt,
  type SharedHeroCopy,
} from '@vp-lib/hero-movie'

const canvas = ref<HTMLCanvasElement | null>(null)
const cssWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1024)
const route = useRoute()
const { frontmatter, title, description } = useData()
const at = shallowRef(typeof performance !== 'undefined' ? performance.now() : 0)
const reduce = ref(
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
)

const copy = computed((): SharedHeroCopy => {
  const hero = frontmatter.value.hero as { tagline?: string } | undefined
  return {
    title: (frontmatter.value.title as string | undefined) || title.value,
    description: description.value,
    tagline: hero?.tagline,
    keywords: frontmatter.value.keywords as string[] | undefined,
  }
})

const shared = computed(() =>
  sharedHeroAt(route.path, copy.value, at.value, cssWidth.value, reduce.value),
)

let engine: ReturnType<typeof createAnimationEngine> | null = null
let visible = true

function onResize(): void {
  resize()
  engine?.tick()
}

function onVisibility(): void {
  visible = typeof document !== 'undefined' ? !document.hidden : true
  engine?.sync(visible)
}

function viewportSize(): { w: number; h: number } {
  if (typeof window === 'undefined') return { w: 1024, h: 768 }
  return { w: window.innerWidth, h: window.innerHeight }
}

function resize(): void {
  const el = canvas.value
  if (!el || typeof window === 'undefined') return
  const { w, h } = viewportSize()
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
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
  if (!el) return
  const ctx = el.getContext('2d')
  if (!ctx) return
  at.value = time
  const { w, h } = viewportSize()
  const width = el.clientWidth || w
  const height = el.clientHeight || h
  drawHeroMovieFrame(ctx, width, height, shared.value)
}

onMounted(async () => {
  await nextTick()
  resize()
  paint()
  window.addEventListener('resize', onResize)
  document.addEventListener('visibilitychange', onVisibility)
  onVisibility()
  engine = createAnimationEngine((time) => {
    if (visible) paint(time)
  })
  engine.sync(visible)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  document.removeEventListener('visibilitychange', onVisibility)
  engine?.dispose()
  engine = null
})

watch(() => route.path, () => nextTick(() => paint()))
watch(copy, () => paint(), { deep: true })
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
