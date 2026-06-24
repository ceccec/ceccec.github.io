<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vitepress'
import { createAnimationEngine } from '@src/quantum/index'
import { livingTorus } from '@src/fire/diamonds/index'
import { useSiteLocale } from '../../lib/mounts'
import UiCardShell from './UiCardShell.vue'

const route = useRoute()
const { t } = useSiteLocale()
const canvas = ref<HTMLCanvasElement | null>(null)
const torus = livingTorus()
const displayTitle = computed(() => t('Living Torus'))
const seedParts = computed(() => ['LivingTorus', torus.statement, route.path] as const)

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
  <UiCardShell
    class="living-torus living-torus-card"
    component="LivingTorus"
    :seed-parts="seedParts"
    :title="displayTitle"
  >
    <canvas ref="canvas" class="living-torus__canvas" :aria-label="displayTitle" />
  </UiCardShell>
</template>

<style scoped>
.living-torus {
  margin: 1rem 0;
}

.living-torus__canvas {
  display: block;
  width: 100%;
  height: min(52vw, var(--vp-movie-min-h));
  border-radius: calc(var(--vp-movie-radius) * 0.75);
  background: transparent;
}
</style>
