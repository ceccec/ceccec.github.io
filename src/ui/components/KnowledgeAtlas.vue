<script setup lang="ts">
// ☵ Kǎn · Water · abysmal · upper·yang · breath — self-referencing 10D widget
const ICHING_MASK = { hexagram: 18, glyph: '☵', lower: '☵', upper: '☵', color: '#0F00F0' } as const
import { computed, ref, watch } from 'vue'
import { fold, asTorus, asMerkaba, asVortex, asMerkle, asTrace, type Fold } from '../lib/quantumMind'
import { useAnimationEngine } from '../lib/useAnimationEngine'

// The atlas is one math shown many ways. Each seed folds once — fold(seed) — into the SAME object; the
// presentation buttons only change which projection of that one address is drawn (asTrace · asTorus ·
// asMerkaba · asVortex · asMerkle). Switching the view is a change of coordinates, never of the data.
// (The default seeds are inlined — a withDefaults factory cannot reference a hoisted local const.)
const props = withDefaults(defineProps<{ seeds?: string[] }>(), {
  seeds: () => ['the fold', 'merkaba', 'double torus', 'vortex', 'Glagolitic', 'Tesla', 'content address', 'digital root', 'peace', 'genus-2', 'humanBreath', 'merkleFold'],
})

// One fold per seed — computed once, shared by every presentation. This is the "one math".
const folds = computed<Fold[]>(() => props.seeds.map((s) => fold(s)))

type Mode = 'trace' | 'torus' | 'merkaba' | 'vortex' | 'merkle'
const MODES: { id: Mode; label: string; note: string }[] = [
  { id: 'trace', label: 'harmonograph', note: 'asTrace(t) — four nested counter-rotating arms; the dot the engine plots and the figure it leaves.' },
  { id: 'torus', label: 'double torus', note: 'asTorus — each fold embedded on the genus-2 surface; the two lobes counter-orient around the throat.' },
  { id: 'merkaba', label: 'merkaba', note: 'asMerkaba(t) — the star tetrahedron: the down tetrahedron is the negated up, counter-rotating.' },
  { id: 'vortex', label: 'vortex', note: 'asVortex — the fold on (ℤ/9ℤ): ×2 winds 1·2·4·8·7·5; the non-units 3·6·9 are the axis.' },
  { id: 'merkle', label: 'merkle seal', note: 'asMerkle — every fold contracts to one verifiable root; a green spoke means the seal holds.' },
]
const mode = ref<Mode>('trace')
const active = computed(() => MODES.find((m) => m.id === mode.value) ?? MODES[0])

const TAU = Math.PI * 2
const canvas = ref<HTMLCanvasElement | null>(null)
let W = 0
let H = 0

// Colour every dot by its vortex digit — the same digit across all presentations, so a fold keeps its hue.
function hueOf(f: Fold): number {
  return (asVortex(f).digit / 9) * 360
}
// A deterministic small jitter from the fold's own address (so dots that share a digit don't stack).
function jitterOf(f: Fold): [number, number] {
  const hex = f.merged.replace(/[^0-9a-f]/g, '')
  const a = (Number.parseInt(hex.slice(0, 4) || '0', 16) % 100) / 100 - 0.5
  const b = (Number.parseInt(hex.slice(4, 8) || '0', 16) % 100) / 100 - 0.5
  return [a, b]
}

function sizeCanvas() {
  const el = canvas.value
  if (!el) return
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  W = el.clientWidth
  H = 380
  el.width = W * dpr
  el.height = H * dpr
  el.style.height = `${H}px`
  el.getContext('2d')?.setTransform(dpr, 0, 0, dpr, 0, 0)
}

// Presentation 5 — the harmonograph: a short fading trail per fold, plotted from asTrace.
function drawTrace(ctx: CanvasRenderingContext2D, t: number) {
  const norm = (v: number) => (v + 0.1) / 1.2 // asTrace lands in ~[-0.1,1.1] → [0,1]
  for (const f of folds.value) {
    const hue = hueOf(f)
    ctx.strokeStyle = `hsla(${hue}, 70%, 60%, 0.45)`
    ctx.lineWidth = 1.2
    ctx.beginPath()
    for (let k = 0; k < 20; k++) {
      const p = asTrace(f, t - k * 55)
      const x = norm(p.x) * W
      const y = norm(p.y) * H
      if (k === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.stroke()
    const head = asTrace(f, t)
    ctx.fillStyle = `hsl(${hue}, 75%, 62%)`
    ctx.beginPath()
    ctx.arc(norm(head.x) * W, norm(head.y) * H, 3, 0, TAU)
    ctx.fill()
  }
}

// Presentation 2 — the double torus: each fold a point on the genus-2 surface, slowly rotating.
function drawTorus(ctx: CanvasRenderingContext2D, t: number) {
  const cx = W / 2
  const cy = H / 2
  const s = Math.min(W, H) * 0.15
  const a = t * 0.0002
  for (const f of folds.value) {
    const q = asTorus(f)
    const x = cx + (q.x * Math.cos(a) + q.z * Math.sin(a)) * s
    const y = cy + (q.y * 0.7 + q.z * 0.25) * s
    ctx.fillStyle = q.lobe === 0 ? 'hsl(210, 65%, 60%)' : 'hsl(35, 72%, 58%)'
    ctx.beginPath()
    ctx.arc(x, y, 4.5, 0, TAU)
    ctx.fill()
  }
}

// Presentation 3 — the merkaba: the first fold's star tetrahedron, two counter-rotating tetrahedra.
function drawMerkaba(ctx: CanvasRenderingContext2D, t: number) {
  const f = folds.value[0]
  if (!f) return
  const cx = W / 2
  const cy = H / 2
  const s = Math.min(W, H) * 0.26
  const mk = asMerkaba(f, t)
  const proj = (v: [number, number, number]): [number, number] => [cx + v[0] * s * 0.7 + v[2] * s * 0.22, cy - v[1] * s * 0.7 + v[2] * s * 0.12]
  const tetra = (verts: [number, number, number][], color: string) => {
    ctx.strokeStyle = color
    ctx.lineWidth = 1.8
    for (let i = 0; i < verts.length; i++) {
      for (let j = i + 1; j < verts.length; j++) {
        const a = proj(verts[i])
        const b = proj(verts[j])
        ctx.beginPath()
        ctx.moveTo(a[0], a[1])
        ctx.lineTo(b[0], b[1])
        ctx.stroke()
      }
    }
  }
  tetra(mk.up, 'hsl(210, 70%, 62%)')
  tetra(mk.down, 'hsl(35, 75%, 58%)')
}

// Presentation 1 — the vortex: the doubling circuit 1·2·4·8·7·5 around the wheel, 3·6·9 on the axis.
function drawVortex(ctx: CanvasRenderingContext2D, _t: number) {
  const cx = W / 2
  const cy = H / 2
  const R = Math.min(W, H) * 0.32
  const orbit = [1, 2, 4, 8, 7, 5]
  const pos: Record<number, [number, number]> = {}
  orbit.forEach((d, i) => {
    const ang = -Math.PI / 2 + (i * Math.PI) / 3
    pos[d] = [cx + Math.cos(ang) * R, cy + Math.sin(ang) * R]
  })
  pos[9] = [cx, cy]
  pos[3] = [cx, cy - R * 0.45]
  pos[6] = [cx, cy + R * 0.45]
  ctx.strokeStyle = 'rgba(140,140,150,0.45)'
  ctx.lineWidth = 1.4
  ctx.beginPath()
  orbit.forEach((d, i) => (i === 0 ? ctx.moveTo(pos[d][0], pos[d][1]) : ctx.lineTo(pos[d][0], pos[d][1])))
  ctx.closePath()
  ctx.stroke()
  ctx.setLineDash([4, 4])
  ctx.beginPath()
  ctx.moveTo(pos[3][0], pos[3][1])
  ctx.lineTo(pos[6][0], pos[6][1])
  ctx.stroke()
  ctx.setLineDash([])
  ctx.fillStyle = 'rgba(140,140,150,0.9)'
  ctx.font = '11px system-ui, sans-serif'
  ctx.textAlign = 'center'
  for (let d = 1; d <= 9; d++) ctx.fillText(String(d), pos[d][0], pos[d][1] - 12)
  for (const f of folds.value) {
    const d = asVortex(f).digit
    const [jx, jy] = jitterOf(f)
    ctx.fillStyle = `hsl(${hueOf(f)}, 72%, 60%)`
    ctx.beginPath()
    ctx.arc(pos[d][0] + jx * 34, pos[d][1] + jy * 34, 4, 0, TAU)
    ctx.fill()
  }
}

// Presentation 4 — the merkle seal: every fold a spoke to the one root; green = the seal verifies.
function drawMerkle(ctx: CanvasRenderingContext2D, _t: number) {
  const cx = W / 2
  const cy = H / 2
  const R = Math.min(W, H) * 0.34
  const fs = folds.value
  fs.forEach((f, i) => {
    const ang = -Math.PI / 2 + (i / fs.length) * TAU
    const x = cx + Math.cos(ang) * R
    const y = cy + Math.sin(ang) * R
    ctx.strokeStyle = asMerkle(f).verifies ? 'hsla(150,60%,52%,0.55)' : 'hsla(0,72%,55%,0.8)'
    ctx.lineWidth = 1.2
    ctx.beginPath()
    ctx.moveTo(cx, cy)
    ctx.lineTo(x, y)
    ctx.stroke()
    ctx.fillStyle = `hsl(${hueOf(f)}, 72%, 60%)`
    ctx.beginPath()
    ctx.arc(x, y, 4, 0, TAU)
    ctx.fill()
  })
  ctx.fillStyle = 'hsl(150, 55%, 48%)'
  ctx.beginPath()
  ctx.arc(cx, cy, 11, 0, TAU)
  ctx.fill()
}

function draw(time: number) {
  const el = canvas.value
  if (!el) return
  const ctx = el.getContext('2d')
  if (!ctx) return
  ctx.clearRect(0, 0, W, H)
  if (mode.value === 'trace') drawTrace(ctx, time)
  else if (mode.value === 'torus') drawTorus(ctx, time)
  else if (mode.value === 'merkaba') drawMerkaba(ctx, time)
  else if (mode.value === 'vortex') drawVortex(ctx, time)
  else drawMerkle(ctx, time)
}

// The src/0 animation engine drives it; in view and not saving energy → it runs.
const { engine } = useAnimationEngine(canvas, draw, sizeCanvas)
// Switching presentation repaints immediately even when the movie is paused.
watch(mode, () => engine.tick())
</script>

<template>
  <figure class="atlas" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <figcaption class="atlas-bar">
      <span class="atlas-title">one math · {{ folds.length }} folds</span>
      <span class="atlas-modes">
        <button v-for="mo in MODES" :key="mo.id" type="button" :class="{ on: mode === mo.id }" @click="mode = mo.id">{{ mo.label }}</button>
      </span>
    </figcaption>
    <canvas ref="canvas" class="atlas-canvas" aria-label="The knowledge atlas — one fold, presented as a harmonograph, double torus, merkaba, vortex, or merkle seal." />
    <figcaption class="atlas-note">{{ active.note }}</figcaption>
  </figure>
</template>

<style scoped>
.atlas {
  margin: 1.5rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
}
.atlas-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.6rem 0.85rem;
  border-bottom: 1px solid var(--vp-c-divider);
}
.atlas-title {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
  font-family: var(--vp-font-family-mono, monospace);
}
.atlas-modes {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}
.atlas-modes button {
  font-size: 0.78rem;
  padding: 0.2rem 0.6rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s, background 0.15s;
}
.atlas-modes button:hover {
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-brand-1);
}
.atlas-modes button.on {
  color: var(--vp-c-bg);
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}
.atlas-canvas {
  display: block;
  width: 100%;
}
.atlas-note {
  padding: 0.55rem 0.85rem;
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
  border-top: 1px solid var(--vp-c-divider);
}
</style>
