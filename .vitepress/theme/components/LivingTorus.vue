<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vitepress'
import { createAnimationEngine } from '@src/quantum/index'
import { livingTorus } from '@src/fire/diamonds/index'
import { cardMovieColorVars, cardMovieSeed } from '@vp-lib/hero-movie'
import CardBackgroundMovie from './CardBackgroundMovie.vue'

const route = useRoute()
const canvas = ref<HTMLCanvasElement | null>(null)
const torus = livingTorus()
const movieSeed = computed(() => cardMovieSeed(['LivingTorus', torus.statement, route.path]))
const cardStyle = computed(() => cardMovieColorVars(route.path, movieSeed.value))

let engine: ReturnType<typeof createAnimationEngine> | null = null

function resize(): void {
  const el = canvas.value
  if (!el || typeof window === 'undefined') return
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  el.width = Math.floor(el.clientWidth * dpr)
  el.height = Math.floor(el.clientHeight * dpr)
  const ctx = el.getContext('2d')
  if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
}

function paint(t = 0): void {
  const el = canvas.value
  if (!el) return
  const ctx = el.getContext('2d')
  if (!ctx) return
  const w = el.clientWidth
  const h = el.clientHeight
  ctx.clearRect(0, 0, w, h)
  const cx = w / 2
  const cy = h / 2
  const phase = t / 1000
  const step = Math.max(1, Math.floor(torus.coordinates.length / 220))
  for (let i = 0; i < torus.coordinates.length; i += step) {
    const c = torus.coordinates[i]!
    const spin = phase * (c.lobe > 0 ? 0.55 : -0.55) + c.theta
    const px = c.x * Math.cos(spin) - c.z * Math.sin(spin)
    const py = c.y + Math.sin(spin) * 0.08
    const x = cx + px * w * 0.34 + c.cx * w * 0.08
    const y = cy + py * h * 0.34
    ctx.fillStyle = `hsla(${Math.round(c.frequency) % 360}, 72%, 58%, 0.72)`
    ctx.beginPath()
    ctx.arc(x, y, 1.5 + c.scale * 2.5, 0, Math.PI * 2)
    ctx.fill()
  }
}

onMounted(() => {
  resize()
  window.addEventListener('resize', resize)
  engine = createAnimationEngine(paint)
  engine.start()
})

onUnmounted(() => {
  window.removeEventListener('resize', resize)
  engine?.dispose()
  engine = null
})
</script>

<template>
  <article
    class="living-torus living-torus-card ui-card"
    data-shadcn="card"
    data-component="LivingTorus"
    :style="cardStyle"
  >
    <CardBackgroundMovie :seed="movieSeed" title="LivingTorus" />
    <div class="ui-card__content">
      <p class="living-torus__lede">{{ torus.statement }}</p>
      <canvas ref="canvas" class="living-torus__canvas" aria-label="Living double torus animation" />
      <p class="living-torus__boundary">{{ torus.boundary }}</p>
    </div>
  </article>
</template>

<style scoped>
.living-torus {
  margin: 1rem 0;
}

.ui-card__content {
  padding: var(--vp-movie-pad-y) var(--vp-movie-pad-x);
}

.living-torus__lede {
  margin: 0 0 var(--vp-movie-gap);
}

.living-torus__canvas {
  display: block;
  width: 100%;
  height: min(52vw, var(--vp-movie-min-h));
  border-radius: calc(var(--vp-movie-radius) * 0.75);
  background: transparent;
}

.living-torus__boundary {
  margin: var(--vp-movie-gap) 0 0;
  font-size: calc(0.82rem + var(--vp-movie-gap) * 0.06);
  line-height: var(--vp-movie-line-height);
}
</style>
