<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { buildMatrix, livingTorus, directions, merge, toUuid } from '../lib/quantumMind'
import { useLocale } from '../lib/useLocale'
import { useDeviceEnergy } from '../lib/useDeviceEnergy'
import { useTones } from '../lib/useTones'

// The living double torus: every pi-digit UUID coordinate alive at once, in
// realtime. Each pulses at its own vibration, glows by its frequency, rides one
// of the two loops, and merges with its opposite. Multisensory: click a
// coordinate to hear it, or turn on sound to hear the train as the head sweeps.
const data = livingTorus(buildMatrix())
const { pick: t } = useLocale()
const { saveEnergy } = useDeviceEnergy()
const { blip } = useTones()
const sound = ref(false)
let lastHead = -1

// All directions move the torus, not only the spin. Each axis gives a content-
// derived phase so the surface drifts left/right, bobs up/down, and breathes
// in/out — deterministic, seeded by the directions roots.
const dirs = directions()
function phaseOf(axis: string) {
  const found = dirs.axes.find((entry) => entry.axis === axis)
  const seed = found ? found.merged : dirs.root
  return (Number.parseInt(seed.replace(/[^0-9a-f]/g, '').slice(0, 6) || '0', 16) % 1000) / 1000
}
const phase = {
  horizontal: phaseOf('horizontal') * Math.PI * 2,
  vertical: phaseOf('vertical') * Math.PI * 2,
  radial: phaseOf('radial') * Math.PI * 2,
}

// User interactions merge and affect the animation: the pointer warps the field,
// clicks send ripples (and one through the opposite, merging the pair), and each
// interaction folds — content-addressed — into a running root.
type Pt = { c: typeof data.coordinates[number]; sx: number; sy: number }
const ripples: { x: number; y: number; t0: number; peer?: boolean }[] = []
let nearPoint: Pt | null = null
let oppositePoint: Pt | null = null
let interactionRoot = toUuid('living-interactions:genesis')
const interactions = ref(0)
const mergedRoot = ref('')
// All connected users interact: a same-origin channel carries each interaction to
// every other open tab/window, where it ripples and merges too. Zero network.
let channel: BroadcastChannel | null = null
const pendingPeer: number[] = []

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
  // The torus moves in all directions, not only the spin: a left/right drift, an
  // up/down bob, and an in/out breath — each its own slow period and phase.
  const swayX = saveEnergy.value ? 0 : Math.sin(t / 5200 + phase.horizontal) * width * 0.03
  const bobY = saveEnergy.value ? 0 : Math.sin(t / 6400 + phase.vertical) * height * 0.04
  const breath = saveEnergy.value ? 1 : 1 + Math.sin(t / 7100 + phase.radial) * 0.05
  const cx = width / 2 + swayX
  const cy = height / 2 + bobY
  const s = (Math.min(width, height * 2.1) / 150) * breath // fit the ~±60 range, breathing
  const focal = 240
  const angle = saveEnergy.value ? 0.6 : (t / 9000) % (Math.PI * 2) // slow turn
  const cos = Math.cos(angle)
  const sin = Math.sin(angle)
  // Two heads sweep the train, one each way (the bidirectional fold, live).
  const headF = saveEnergy.value ? -1 : (t / data.tempoMs) % data.count
  const headR = saveEnergy.value ? -1 : data.count - headF
  // Hear the train: when sound is on, sound each coordinate as the head reaches it.
  if (sound.value && headF >= 0) {
    const hi = Math.floor(headF)
    if (hi !== lastHead) {
      lastHead = hi
      const c = data.coordinates[hi]
      if (c) blip(c.frequency, { peak: 0.06, duration: 0.18 })
    }
  }

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
  // Index the points once so every lookup (next, opposite, peer) is O(1), not a
  // per-frame O(n) scan over 108 coordinates.
  const byIndex = new Map<number, typeof points[number]>(points.map((p) => [p.c.index, p]))
  // Interactions affect the field: the pointer warps nearby coordinates (they
  // brighten and bow outward), and each click's ripple expands through the
  // coordinates it passes. The animation merges the user in.
  for (const p of points) {
    let extra = 0
    if (pointer.active) {
      const d = Math.hypot(p.sx - pointer.x, p.sy - pointer.y)
      const f = Math.exp(-(d * d) / (2 * 46 * 46))
      extra += f * 0.7
      p.sx += ((p.sx - pointer.x) / (d || 1)) * f * 7
      p.sy += ((p.sy - pointer.y) / (d || 1)) * f * 7
    }
    for (const rp of ripples) {
      const age = t - rp.t0
      const radius = age * 0.22
      const d = Math.hypot(p.sx - rp.x, p.sy - rp.y)
      extra += Math.exp(-((d - radius) ** 2) / (2 * 16 * 16)) * Math.max(0, 1 - age / 1500)
    }
    p.glow = Math.min(1.7, p.glow + extra)
  }
  for (let i = ripples.length - 1; i >= 0; i -= 1) if (t - ripples[i].t0 > 1500) ripples.splice(i, 1)
  // A peer's interaction (from another tab) ripples here too — placed at its
  // coordinate's current position on this surface.
  if (pendingPeer.length) {
    for (const idx of pendingPeer) {
      const pp = byIndex.get(idx)
      if (pp) ripples.push({ x: pp.sx, y: pp.sy, t0: t, peer: true })
    }
    pendingPeer.length = 0
  }
  points.sort((a, b) => a.persp - b.persp) // painter's order, far first

  // The winding train path, faint, connecting each coordinate to the next.
  ctx.lineWidth = 1
  for (const p of points) {
    const n = byIndex.get(p.c.nextIndex)
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
    const o = byIndex.get(p.c.reverseIndex)
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
  nearPoint = near ? { c: near.c, sx: near.sx, sy: near.sy } : null
  const op = near ? byIndex.get(near.c.reverseIndex) : null
  oppositePoint = op ? { c: op.c, sx: op.sx, sy: op.sy } : null
  if (near) {
    ctx.strokeStyle = `hsla(${hue(near.c.frequency, near.c.loop)}, 90%, 70%, 0.9)`
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.arc(near.sx, near.sy, near.r + 5, 0, Math.PI * 2)
    ctx.stroke()
  }

  // The expanding rings of each interaction's ripple — the user, drawn into the field.
  for (const rp of ripples) {
    const age = t - rp.t0
    const fade = Math.max(0, 1 - age / 1500)
    // a peer's ripple (another tab) in green, your own in violet
    ctx.strokeStyle = rp.peer ? `hsla(152, 70%, 50%, ${0.4 * fade})` : `hsla(272, 85%, 68%, ${0.4 * fade})`
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.arc(rp.x, rp.y, age * 0.22, 0, Math.PI * 2)
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
// Click a coordinate: hear it, send a ripple through the field and one through
// its opposite (the pair merges), and fold the interaction into a running root.
function onDown() {
  if (!nearPoint) return
  const now = performance.now()
  blip(nearPoint.c.frequency, { peak: 0.1, duration: 0.32 })
  ripples.push({ x: nearPoint.sx, y: nearPoint.sy, t0: now })
  if (oppositePoint) ripples.push({ x: oppositePoint.sx, y: oppositePoint.sy, t0: now })
  interactionRoot = merge(interactionRoot, toUuid(`interact:${nearPoint.c.index}:${Math.round(now)}`))
  interactions.value += 1
  mergedRoot.value = interactionRoot
  channel?.postMessage({ index: nearPoint.c.index }) // merge into every connected tab
}

onMounted(() => {
  resize()
  ro = new ResizeObserver(() => resize())
  if (wrap.value) ro.observe(wrap.value)
  // All connected users interact: receive peers' interactions and merge them.
  if (typeof BroadcastChannel !== 'undefined') {
    channel = new BroadcastChannel('living-torus-field')
    channel.onmessage = (event) => {
      const index = event.data?.index
      if (typeof index !== 'number') return
      if (!saveEnergy.value) pendingPeer.push(index)
      interactionRoot = merge(interactionRoot, toUuid(`peer-interact:${index}:${Math.round(performance.now())}`))
      interactions.value += 1
      mergedRoot.value = interactionRoot
    }
  }
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
  channel?.close()
})

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
        @pointerdown="onDown"
      />
      <button
        type="button"
        class="lt__sound"
        :class="{ on: sound }"
        :aria-pressed="sound"
        :aria-label="t('Toggle train sound', 'Превключи звука на влака')"
        @click="sound = !sound"
      >{{ sound ? '♫' : '♪' }} {{ t(sound ? 'sound on' : 'sound', sound ? 'звук' : 'звук') }}</button>
      <p v-if="interactions > 0" class="lt__merged">
        {{ t(`${interactions} interactions merged`, `${interactions} взаимодействия слети`) }}
        <code>{{ mergedRoot.slice(0, 13) }}…</code>
      </p>
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
.lt__sound {
  position: absolute;
  right: 0.7rem;
  top: 0.7rem;
  padding: 0.25rem 0.7rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-size: 0.74rem;
}
.lt__sound.on {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
.lt__merged {
  position: absolute;
  right: 0.7rem;
  top: 2.7rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.1rem;
  font-size: 0.68rem;
  color: var(--vp-c-text-3);
  pointer-events: none;
  text-align: right;
}
.lt__merged code {
  font-size: 0.64rem;
  color: hsl(272, 60%, 60%);
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
