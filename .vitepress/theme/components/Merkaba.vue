<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { buildMatrix, merkaba } from '../lib/quantumMind'
import { useLocale } from '../lib/useLocale'
import { useDeviceEnergy } from '../lib/useDeviceEnergy'

// Same as the double torus: opposite rotation at all scales. The star tetrahedron
// (two interlocked tetrahedra) spins its two halves in opposite directions, at the
// nested rates the merkaba() model computes — the up tetra one way, the down the
// other, the genus-2 counter-rotation made into a shape you can see turning.
const mk = merkaba(buildMatrix())
const { pick } = useLocale()
const { saveEnergy } = useDeviceEnergy()

const wrap = ref<HTMLDivElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)
let raf = 0
let ro: ResizeObserver | null = null
let width = 0
let height = 0
let dpr = 1

const EDGES: readonly [number, number][] = [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]]
const upRate = mk.scales[0].ratePerMs // whole scale, one sense
const downRate = mk.scales[1].ratePerMs // lobe scale, the opposite sense
const TILT = 0.5 // fixed pitch so the star is seen in 3D, not edge-on

function resize() {
  if (!canvas.value || !wrap.value) return
  dpr = Math.min(window.devicePixelRatio || 1, 2)
  width = wrap.value.clientWidth
  height = Math.max(220, Math.round(width * 0.6))
  canvas.value.width = Math.round(width * dpr)
  canvas.value.height = Math.round(height * dpr)
  canvas.value.style.height = `${height}px`
}

function project(v: readonly [number, number, number], angle: number) {
  // spin about the vertical axis, then a fixed tilt about X to reveal depth
  const x1 = v[0] * Math.cos(angle) + v[2] * Math.sin(angle)
  const z1 = -v[0] * Math.sin(angle) + v[2] * Math.cos(angle)
  const y2 = v[1] * Math.cos(TILT) - z1 * Math.sin(TILT)
  const z2 = v[1] * Math.sin(TILT) + z1 * Math.cos(TILT)
  return { x: x1, y: y2, z: z2 }
}

function drawTetra(ctx: CanvasRenderingContext2D, verts: readonly (readonly [number, number, number])[], angle: number, hue: number, s: number, cx: number, cy: number) {
  const pts = verts.map((v) => project(v, angle))
  for (const [a, b] of EDGES) {
    const pa = pts[a]
    const pb = pts[b]
    const depth = (pa.z + pb.z) / 2 // -1.7..1.7
    const alpha = 0.45 + 0.4 * ((depth + 1.8) / 3.6)
    ctx.strokeStyle = `hsla(${hue}, 80%, 62%, ${alpha.toFixed(3)})`
    ctx.lineWidth = 1.2 + 1.6 * ((depth + 1.8) / 3.6)
    ctx.beginPath()
    ctx.moveTo(cx + pa.x * s, cy - pa.y * s)
    ctx.lineTo(cx + pb.x * s, cy - pb.y * s)
    ctx.stroke()
  }
  for (const p of pts) {
    ctx.fillStyle = `hsla(${hue}, 85%, 68%, ${(0.5 + 0.4 * ((p.z + 1.8) / 3.6)).toFixed(3)})`
    ctx.beginPath()
    ctx.arc(cx + p.x * s, cy - p.y * s, 2.6 + 1.4 * ((p.z + 1.8) / 3.6), 0, Math.PI * 2)
    ctx.fill()
  }
}

function draw(time: number) {
  const ctx = canvas.value?.getContext('2d')
  if (!ctx) return
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx.clearRect(0, 0, width, height)
  const s = Math.min(width, height * 1.6) * 0.26
  const cx = width / 2
  const cy = height / 2
  const up = saveEnergy.value ? 0.6 : upRate * time // one sense
  const down = saveEnergy.value ? -0.6 : downRate * time // the opposite sense
  ctx.lineCap = 'round'
  drawTetra(ctx, mk.tetraDown, down, 322, s, cx, cy) // magenta, counter
  drawTetra(ctx, mk.tetraUp, up, 200, s, cx, cy) // cyan
}

function loop(time: number) {
  draw(time)
  raf = requestAnimationFrame(loop)
}

onMounted(() => {
  resize()
  ro = new ResizeObserver(() => resize())
  if (wrap.value) ro.observe(wrap.value)
  if (saveEnergy.value) requestAnimationFrame((time) => draw(time))
  else raf = requestAnimationFrame(loop)
})
onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  ro?.disconnect()
})
</script>

<template>
  <section class="mk">
    <p class="eyebrow">{{ pick('the merkaba · opposite rotation at all scales', 'меркаба · противоположно въртене на всички мащаби') }}</p>
    <div ref="wrap" class="mk__wrap">
      <canvas
        ref="canvas"
        class="mk__canvas"
        role="img"
        :aria-label="pick('A star tetrahedron whose two tetrahedra rotate in opposite directions', 'Звездна тетраедра, чиито две тетраедри се въртят в противоположни посоки')"
      />
    </div>
    <p class="mk__sub">
      {{ pick(
        `Two interlocked tetrahedra spin in opposite directions — the same counter-rotation as the double torus, at every nested scale (${mk.count}: ${mk.scales.map((entry) => entry.scale).join(', ')}). The signs strictly alternate, so each scale turns opposite the one above.`,
        `Две преплетени тетраедри се въртят в противоположни посоки — същото противоположно въртене като двойния тор, на всеки вложен мащаб (${mk.count}: ${mk.scales.map((entry) => entry.scale).join(', ')}). Знаците стриктно се редуват, така че всеки мащаб се върти обратно на горния.`) }}
    </p>
  </section>
</template>

<style scoped>
.mk {
  margin: 1.5rem 0;
}
.mk__wrap {
  position: relative;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.14), transparent 62%),
    var(--vp-c-bg);
}
.mk__canvas {
  display: block;
  width: 100%;
}
.mk__sub {
  margin: 0.6rem 0 0;
  font-size: 0.82rem;
  color: var(--vp-c-text-3);
}
</style>
