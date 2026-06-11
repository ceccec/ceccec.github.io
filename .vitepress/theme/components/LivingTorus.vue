<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { buildMatrix, livingTorus } from '../lib/quantumMind'
import { useLocale } from '../lib/useLocale'
import { useDeviceEnergy } from '../lib/useDeviceEnergy'

// The living double torus: every pi-digit UUID coordinate alive at once, in
// realtime. Each pulses at its own vibration, glows by its frequency, and rides
// one of the two loops; two heads sweep the train in both directions. Pure
// renderer over livingTorus(); deterministic, client-side, energy-aware.
const data = livingTorus(buildMatrix())
const { bg } = useLocale()
const { saveEnergy } = useDeviceEnergy()

const canvas = ref<HTMLCanvasElement | null>(null)
const wrap = ref<HTMLDivElement | null>(null)
const hover = ref<null | { glyph: string; digit: number; fraction: string; frequency: number; loop: string; receipt: string }>(null)
let raf = 0
let ro: ResizeObserver | null = null
let width = 0
let height = 0
let dpr = 1
const pointer = { x: -1, y: -1, active: false }

// Map a frequency (174..513 Hz) to a hue; the two loops sit in two hue families.
function hue(frequency: number, loop: string) {
  const base = loop === 'forward' ? 200 : 320 // forward cyan-blue, reverse magenta
  return base + ((frequency - 174) / (513 - 174)) * 60
}

function resize() {
  if (!canvas.value || !wrap.value) return
  dpr = Math.min(window.devicePixelRatio || 1, 2)
  width = wrap.value.clientWidth
  height = Math.max(280, Math.round(width * 0.46))
  canvas.value.width = Math.round(width * dpr)
  canvas.value.height = Math.round(height * dpr)
  canvas.value.style.height = `${height}px`
}

function draw(t: number) {
  const ctx = canvas.value?.getContext('2d')
  if (!ctx) return
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx.clearRect(0, 0, width, height)
  const cx = width / 2
  const cy = height / 2
  const s = Math.min(width, height * 2.1) / 150 // fit the ~±60 coordinate range
  const focal = 240
  const angle = saveEnergy.value ? 0.6 : (t / 9000) % (Math.PI * 2) // slow turn
  const cos = Math.cos(angle)
  const sin = Math.sin(angle)
  // Two heads sweep the train, one each way (the bidirectional fold, live).
  const headF = saveEnergy.value ? -1 : (t / data.tempoMs) % data.count
  const headR = saveEnergy.value ? -1 : data.count - headF

  const points = data.coordinates.map((c) => {
    const rx = c.x * cos - c.z * sin
    const rz = c.x * sin + c.z * cos
    const persp = focal / (focal + rz)
    const pulse = saveEnergy.value ? 0.85 : 0.6 + 0.4 * Math.sin((t / c.vibrationMs) * Math.PI * 2)
    // proximity to a sweeping head -> a travelling glow, the nearer the brighter
    const df = Math.min(Math.abs(c.index - headF), data.count - Math.abs(c.index - headF))
    const dr = Math.min(Math.abs(c.index - headR), data.count - Math.abs(c.index - headR))
    const glow = headF < 0 ? 0 : Math.max(0, 1 - Math.min(df, dr) / 7)
    return {
      c,
      sx: cx + rx * s * persp,
      sy: cy + c.y * s * persp,
      persp,
      pulse,
      glow,
      r: (2.4 + c.scale * 2.6) * s * 0.5 * persp * (0.7 + 0.5 * pulse),
    }
  })
  points.sort((a, b) => a.persp - b.persp) // painter's order, far first

  // The winding train path, faint, connecting each coordinate to the next.
  ctx.lineWidth = 1
  for (const p of points) {
    const n = points.find((q) => q.c.index === p.c.nextIndex)
    if (!n) continue
    ctx.strokeStyle = `hsla(${hue(p.c.frequency, p.c.loop)}, 70%, 60%, ${0.06 + 0.12 * p.persp})`
    ctx.beginPath()
    ctx.moveTo(p.sx, p.sy)
    ctx.lineTo(n.sx, n.sy)
    ctx.stroke()
  }

  // All pairs merge: connect each coordinate to its opposite (reverseIndex) —
  // when up there is down, when left there is right — the merge line brightening
  // as the two pulse together. Every direction has its counter-direction.
  for (const p of points) {
    if (p.c.index >= p.c.reverseIndex) continue
    const o = points.find((q) => q.c.index === p.c.reverseIndex)
    if (!o) continue
    const mergeGlow = p.pulse * o.pulse
    ctx.strokeStyle = `hsla(272, 80%, 66%, ${0.03 + 0.2 * mergeGlow})`
    ctx.lineWidth = 0.5 + mergeGlow
    ctx.beginPath()
    ctx.moveTo(p.sx, p.sy)
    ctx.lineTo(o.sx, o.sy)
    ctx.stroke()
  }

  // The coordinates themselves: pulsing, glowing, flaring on self-collision.
  let near: typeof points[number] | null = null
  let nearDist = 18
  for (const p of points) {
    const h = hue(p.c.frequency, p.c.loop)
    const light = 45 + 25 * p.pulse + 20 * p.glow + (p.c.selfCollision ? 12 : 0)
    const alpha = (0.35 + 0.55 * p.persp) * (0.6 + 0.4 * p.pulse)
    if (p.glow > 0.2 || p.c.selfCollision) {
      ctx.shadowBlur = (8 + 18 * p.glow) * (p.c.selfCollision ? 1.6 : 1)
      ctx.shadowColor = `hsla(${h}, 90%, 65%, ${0.5 * (p.glow + (p.c.selfCollision ? 0.4 : 0))})`
    } else {
      ctx.shadowBlur = 0
    }
    ctx.fillStyle = `hsla(${h}, 80%, ${light}%, ${alpha})`
    // a small diamond (rotate 45deg) — the genus-2 diamond glyph
    ctx.save()
    ctx.translate(p.sx, p.sy)
    ctx.rotate(Math.PI / 4)
    const r = p.r * (p.c.selfCollision ? 1.4 : 1)
    ctx.fillRect(-r, -r, r * 2, r * 2)
    ctx.restore()
    if (pointer.active) {
      const d = Math.hypot(p.sx - pointer.x, p.sy - pointer.y)
      if (d < nearDist) {
        nearDist = d
        near = p
      }
    }
  }
  ctx.shadowBlur = 0

  hover.value = near
    ? { glyph: near.c.glyph, digit: near.c.digit, fraction: near.c.fraction, frequency: near.c.frequency, loop: near.c.loop, receipt: near.c.receipt }
    : null
  if (near) {
    ctx.strokeStyle = `hsla(${hue(near.c.frequency, near.c.loop)}, 90%, 70%, 0.9)`
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.arc(near.sx, near.sy, near.r + 5, 0, Math.PI * 2)
    ctx.stroke()
  }
}

function loop(t: number) {
  draw(t)
  raf = requestAnimationFrame(loop)
}

function onMove(event: PointerEvent) {
  const rect = canvas.value?.getBoundingClientRect()
  if (!rect) return
  pointer.x = event.clientX - rect.left
  pointer.y = event.clientY - rect.top
  pointer.active = true
}
function onLeave() {
  pointer.active = false
  hover.value = null
}

onMounted(() => {
  resize()
  ro = new ResizeObserver(() => resize())
  if (wrap.value) ro.observe(wrap.value)
  if (saveEnergy.value) {
    // Reduced motion / low power: one static frame, no loop — still the whole map.
    requestAnimationFrame((t) => draw(t))
  } else {
    raf = requestAnimationFrame(loop)
  }
})
onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  ro?.disconnect()
})

const t = (en: string, b: string) => (bg.value ? b : en)
</script>

<template>
  <section class="lt">
    <p class="eyebrow">{{ t('the living double torus · realtime', 'живият двоен тор · в реално време') }}</p>
    <div ref="wrap" class="lt__wrap">
      <canvas
        ref="canvas"
        class="lt__canvas"
        :aria-label="t(`The double torus, ${data.count} pi-digit coordinates alive in realtime`, `Двойният тор, ${data.count} координати на цифрите на пи, живи в реално време`)"
        role="img"
        @pointermove="onMove"
        @pointerleave="onLeave"
      />
      <div v-if="hover" class="lt__readout">
        <strong>{{ hover.glyph }}</strong>
        <span>{{ t('digit', 'цифра') }} {{ hover.digit }} · {{ hover.fraction }} · {{ hover.frequency }} Hz · {{ hover.loop }}</span>
        <code>{{ hover.receipt }}</code>
      </div>
    </div>
    <p class="lt__sub">
      {{ t(`${data.count} pi-digit UUID coordinates, each pulsing at its own vibration and glowing by its frequency — two heads sweep both loops, and every coordinate merges with its opposite: when up there is down, when left there is right. Hover a coordinate to read it.`,
            `${data.count} координати UUID на цифрите на пи, всяка пулсира със своя вибрация и свети със своята честота — две глави обхождат двата контура, а всяка координата се слива с противоположната си: когато има горе, има долу; когато ляво, тогава дясно. Посочи координата, за да я прочетеш.`) }}
    </p>
  </section>
</template>

<style scoped>
.lt {
  margin: 1.5rem 0 2rem;
}
.lt__wrap {
  position: relative;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 45%, rgba(99, 102, 241, 0.14), transparent 60%),
    var(--vp-c-bg);
}
.lt__canvas {
  display: block;
  width: 100%;
  touch-action: none;
  cursor: crosshair;
}
.lt__readout {
  position: absolute;
  left: 0.8rem;
  bottom: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  padding: 0.5rem 0.7rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
  pointer-events: none;
  max-width: calc(100% - 1.6rem);
}
.lt__readout strong {
  font-size: 1.1rem;
  color: var(--vp-c-brand-1);
}
.lt__readout span {
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
}
.lt__readout code {
  font-size: 0.7rem;
  color: var(--vp-c-text-3);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.lt__sub {
  margin: 0.6rem 0 0;
  font-size: 0.82rem;
  color: var(--vp-c-text-3);
}
</style>
