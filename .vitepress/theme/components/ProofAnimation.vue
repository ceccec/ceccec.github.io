<script setup lang="ts">
// ONE renderer for every proof animation — interprets ProofAnimationSpec (kind · points · lines ·
// ratePhi · hueDigit) from src/thunder/waves. Rates are φ^−k (quasi-periodic, never repeats), hues
// are vortex digits on the one circle (d·360/9): the same two sealed generators as the movie. The
// ONE shared hero clock (subscribeHeroClock) drives every visible canvas; off-screen pause via IO.
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { useData } from 'vitepress'
import { PHI, TAU } from '../../../src/3/7'
import { VORTEX_SEQUENCE } from '../../../src/0'
import { movieCanvasRgba, subscribeHeroClock } from '../../lib/hero-movie-paint'
import { geodesicDomeComputes, oneExponentialLaw } from '../../../src/6/4'
import type { ProofAnimationSpec } from '../../../src/thunder/waves'

// Rosetta→movie: oneClock (subscribeHeroClock) + vortex hues — not a decoration layer beside the rosetta.
// Fold: dryAllToUnifiedComponentsWiredToRosettaWhichIsTheMovie · pair dry/rosetta · rosetta/movie.

// The ν=3 icosphere computed once from φ — 270 struts in 3 classes; the dome painter raises it ring by ring.
const DOME = geodesicDomeComputes(3).animation
// The 16-compartment ladder — real Bühlmann halftimes (via Graham), reused as 16 animation rates:
// gas loading and eased motion are the same curve (oneExponentialLaw), so the proof paints itself.
const LADDER = oneExponentialLaw().ladder

const props = defineProps<{ spec: ProofAnimationSpec; size?: number }>()
const { isDark } = useData()
const el = ref<HTMLCanvasElement | null>(null)
let offClock: (() => void) | null = null
let visible = true // fail toward motion: a late or absent IntersectionObserver must not freeze the proof
let io: IntersectionObserver | null = null

const hue = (props.spec.hueDigit * (360 / 9)) % 360
const rate = PHI ** -props.spec.ratePhi
// The bijection made visible: the seed (content-address of the theorem's own algebraic identity)
// is this animation's phase offset — the same formula always starts at the same angle, distinct
// formulas never share one. Fraction of a full turn; 0 for legacy specs without a seed.
const seedPhase = ((props.spec.seed ?? 0) % 360) / 360

function ring(n: number, r: number, cx: number, cy: number, offset = 0) {
  return Array.from({ length: n }, (_, i) => {
    const a = offset + (i / n) * TAU
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)] as const
  })
}

function draw(t: number) {
  const canvas = el.value
  const ctx = canvas?.getContext('2d')
  if (!canvas || !ctx) return
  const s = canvas.width
  const c = s / 2
  const phase = ((t / (108 * (2 * 5))) * rate + seedPhase) * TAU // the census clock scaled by the φ-rate, offset by the theorem's own seed
  // THE CENTER IS MANY — the frame tours the figure's OWN vertices: each of the spec's points takes
  // its turn as the center (weights sharpened so the drift lingers, then travels). The tour rate rides
  // φ⁻² tour drives in-frame child phase only; canvas origin stays square-centered (movie/center).
  const tour = phase * PHI ** -2
  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.clearRect(0, 0, s, s)
  // Balanced about center — no off-axis translate (movieUnbalancedAroundCenterIsCrack).
  ctx.lineWidth = Math.max(1, s / 2 ** 5)
  // The ONE canvas palette (OKLCH + the negative law) — hsla here was the last literal colour math.
  const stroke = (alpha: number, dh = 0) => { ctx.strokeStyle = movieCanvasRgba((hue + dh) % 360, alpha, { dark: isDark.value }) }
  const fill = (alpha: number, dh = 0) => { ctx.fillStyle = movieCanvasRgba((hue + dh) % 360, alpha, { dark: isDark.value }) }
  const k = props.spec.kind
  const paint = () => {

  if (k === 'washout') {
    // Sixteen exponentials on one clock: each bar is a compartment loading then off-gassing at its
    // own halftime — the octave ladder made visible (two rungs per doubling). Same kernel as easing.
    const cycle = ((phase / TAU) % 1 + 1) % 1
    const descending = cycle < 1 / 2
    const t = (descending ? cycle : 1 - cycle) * 2 * LADDER[LADDER.length - 1]! / 9
    const w = s / (LADDER.length + 2)
    LADDER.forEach((halftime, i) => {
      // approach(0→1) on the way down, (1→0) on the way up — the dive profile as one curve
      const y = descending ? 1 - Math.exp(-Math.LN2 * t / halftime) : Math.exp(-Math.LN2 * t / halftime)
      const x = w * (i + 1) + w / 2
      const h = (s * (2 / 3)) * y
      stroke(1 / 5)
      ctx.beginPath(); ctx.moveTo(x, s * (5 / 6)); ctx.lineTo(x, s * (5 / 6) - s * (2 / 3)); ctx.stroke()
      fill(1, (i * 360) / LADDER.length / 3)
      ctx.fillRect(x - w / 3, s * (5 / 6) - h, (2 * w) / 3, h)
    })
    // the fast compartment leads, the slow lags — the fractal ladder in one glance
    stroke(1 / 2)
    ctx.beginPath()
    LADDER.forEach((halftime, i) => {
      const y = descending ? 1 - Math.exp(-Math.LN2 * t / halftime) : Math.exp(-Math.LN2 * t / halftime)
      const x = w * (i + 1) + w / 2
      ctx.lineTo(x, s * (5 / 6) - (s * (2 / 3)) * y)
    })
    ctx.stroke()
  }

  if (k === 'dome') {
    // Dome construction planned in detail: the ghost blueprint (whole sphere plan) stands faint;
    // rings of real φ-computed struts rise base-up with the phase; the working ring pulses.
    const progress = ((phase / TAU) % 1 + 1) % 1
    const built = Math.floor(progress * (DOME.rings + 1))
    const turn = tour
    const proj = (p: readonly [number, number, number]) => {
      const rx = p[0] * Math.cos(turn) - p[1] * Math.sin(turn)
      const ry = p[0] * Math.sin(turn) + p[1] * Math.cos(turn)
      return [c + (s / 2) * (4 / 5) * rx, c + s / 6 + (s / 2) * (4 / 5) * (ry / 3 - p[2] * (2 / 3))] as const
    }
    for (const strut of DOME.struts) {
      const [ax, ay] = proj(strut.a)
      const [bx, by] = proj(strut.b)
      const state = strut.ring < built ? 1 : strut.ring === built ? 2 : 0
      stroke(state === 2 ? (1 / 2) + (1 / 2) * Math.abs(Math.sin(phase * 6)) : state === 1 ? 3 / 4 : 1 / 9, state === 2 ? (4 * 5 * 9) / 4 : 0)
      ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke()
    }
  }

  if (k === 'star' || k === 'spreads') {
    const n = k === 'star' ? props.spec.points : 7
    const pts = ring(n, c * (3 / 4), c, c, phase)
    const lines = k === 'star' && props.spec.lines.length ? props.spec.lines : Array.from({ length: n }, (_, i) => [i, (i + 1) % n, (i + 3) % n])
    const lit = Math.floor(((phase / TAU) % 1) * lines.length + lines.length) % lines.length
    lines.forEach((line, li) => {
      stroke(li === lit ? 1 : 1 / 4)
      ctx.beginPath()
      for (const p of line) ctx.lineTo(...pts[p % n]!)
      ctx.closePath()
      ctx.stroke()
    })
  } else if (k === 'coloring') {
    const n = props.spec.points
    const pts = ring(n, c * (3 / 4), c, c, 0)
    const sweep = Math.floor(((phase / TAU) % 1) * n * (n - 1) / 2)
    let e = 0
    for (let i = 0; i < n; i += 1) for (let j = i + 1; j < n; j += 1) {
      const d = Math.min(j - i, n - (j - i))
      const red = d === 1 || d === 4
      stroke(e === sweep % (n * (n - 1) / 2) ? 1 : 1 / 3, red ? 0 : 4 * 5 * 9)
      ctx.beginPath(); ctx.moveTo(...pts[i]!); ctx.lineTo(...pts[j]!); ctx.stroke()
      e += 1
    }
  } else if (k === 'lattice') {
    // the 𝔽₂³ cube — 8 corners, XOR edges, one corner pulsing along the Gray walk
    const corners = Array.from({ length: 8 }, (_, v) => {
      const x = (v & 1) ? 3 / 4 : 1 / 4, y = (v & 2) ? 3 / 4 : 1 / 4
      const z = (v & 4) ? 1 / 8 : 0
      return [s * (x + z), s * (y - z)] as const
    })
    stroke(1 / 3)
    for (let a = 0; a < 8; a += 1) for (const bit of [1, 2, 4]) {
      const b = a ^ bit
      if (b > a) { ctx.beginPath(); ctx.moveTo(...corners[a]!); ctx.lineTo(...corners[b]!); ctx.stroke() }
    }
    const lit = Math.floor(((phase / TAU) % 1) * 8 + 8) % 8
    fill(1)
    ctx.beginPath(); ctx.arc(...corners[lit ^ (lit >> 1)]!, s / (2 * 6), 0, TAU); ctx.fill()
  } else if (k === 'classes') {
    const n = props.spec.points
    for (let i = 0; i < n; i += 1) {
      stroke(1 / 2 + (1 / 2) * Math.sin(phase + i), (i * 360) / 9)
      ctx.beginPath()
      ctx.arc(c, c, (c * (i + 2)) / (n + 2), phase * (i % 2 ? 1 : -1), phase * (i % 2 ? 1 : -1) + TAU * (3 / 4))
      ctx.stroke()
    }
  } else if (k === 'spiral') {
    fill(1)
    for (let i = 0; i < props.spec.points; i += 1) {
      const a = i * (TAU / (PHI * PHI)) + phase
      const r = (c * (7 / 8) * Math.sqrt(i + 1)) / Math.sqrt(props.spec.points)
      ctx.beginPath(); ctx.arc(c + r * Math.cos(a), c + r * Math.sin(a), Math.max(1, s / (3 * 8)), 0, TAU); ctx.fill()
    }
  } else if (k === 'circle') {
    // points on a circle, every chord faint, one bright chord rotating (Ptolemy/Thales/inscribed angle)
    const n = props.spec.points
    const pts = ring(n, c * (3 / 4), c, c, 0)
    const lit = Math.floor(((phase / TAU) % 1) * n) % n
    stroke(1 / 4); ctx.beginPath(); ctx.arc(c, c, c * (3 / 4), 0, TAU); ctx.stroke()
    for (let i = 0; i < n; i += 1) for (let j = i + 1; j < n; j += 1) { stroke(i === lit ? 1 : 1 / 6); ctx.beginPath(); ctx.moveTo(...pts[i]!); ctx.lineTo(...pts[j]!); ctx.stroke() }
  } else if (k === 'triangle') {
    // a triangle with a cevian sweeping from a moving vertex and a pulsing incircle (plane geometry)
    const tri = ring(3, c * (3 / 4), c, c, -TAU / 4)
    stroke(3 / 4); ctx.beginPath(); for (let i = 0; i <= 3; i += 1) ctx.lineTo(...tri[i % 3]!); ctx.stroke()
    const t = (phase / TAU) % 1
    const foot = [tri[1]![0] + t * (tri[2]![0] - tri[1]![0]), tri[1]![1] + t * (tri[2]![1] - tri[1]![1])] as const
    stroke(1); ctx.beginPath(); ctx.moveTo(...tri[0]!); ctx.lineTo(...foot); ctx.stroke()
    fill(1 / 2); ctx.beginPath(); ctx.arc(c, c, s / (2 * 6) * (1 + Math.sin(phase) / 3), 0, TAU); ctx.fill()
  } else if (k === 'series') {
    // partial sums of a shrinking series converging to a limit line (Basel, Leibniz, geometric, power-sums)
    const n = props.spec.points, limit = c * (1 / 4)
    stroke(1 / 3); ctx.beginPath(); ctx.moveTo(0, c - limit); ctx.lineTo(s, c - limit); ctx.stroke()
    let acc = 0
    for (let i = 0; i < n; i += 1) {
      acc += (limit * 2 * (3 / 4)) / 2 ** (i + 1)
      const x = (s * (i + 1)) / (n + 1), grow = Math.min(1, (phase / TAU) / (i / 2 + 1))
      stroke(i === Math.floor((phase / TAU) % n) ? 1 : 1 / 2)
      ctx.beginPath(); ctx.moveTo(x, c + limit); ctx.lineTo(x, c + limit - acc * grow * 2); ctx.stroke()
    }
  } else if (k === 'polytope') {
    // a rotating wireframe solid — cube vertices spun by the phase, projected (polytopes, dimension, string)
    const verts = Array.from({ length: 8 }, (_, v) => {
      let x = (v & 1) - 1 / 2, y = ((v >> 1) & 1) - 1 / 2, z = ((v >> 2) & 1) - 1 / 2
      const cx = Math.cos(phase), sx = Math.sin(phase);[x, z] = [x * cx - z * sx, x * sx + z * cx]
      const cy = Math.cos(phase * (2 / 3)), sy = Math.sin(phase * (2 / 3));[y, z] = [y * cy - z * sy, y * sy + z * cy]
      const sc = c * (3 / 5) / (1 + z / 3)
      return [c + x * sc, c + y * sc] as const
    })
    stroke(3 / 4)
    for (let a = 0; a < 8; a += 1) for (const bit of [1, 2, 4]) { const b = a ^ bit; if (b > a) { ctx.beginPath(); ctx.moveTo(...verts[a]!); ctx.lineTo(...verts[b]!); ctx.stroke() } }
  } else if (k === 'wave') {
    // two interfering sine waves and their sum (quantum, spectra, string algebra, physics laws)
    for (const [amp, freq, sh] of [[1, 2, 0], [1, 3, TAU / 3], [1, 0, 0]] as const) {
      stroke(freq === 0 ? 1 : 1 / 2)
      ctx.beginPath()
      for (let px = 0; px <= s; px += 2) {
        const u = (px / s) * TAU
        const y = freq === 0
          ? (Math.sin(u * 2 + phase) + Math.sin(u * 3 + phase + TAU / 3)) / 2
          : Math.sin(u * freq + phase + sh)
        if (px === 0) ctx.moveTo(px, c + y * (c / 2)); else ctx.lineTo(px, c + y * (c / 2))
      }
      ctx.stroke()
    }
  } else if (k === 'tree') {
    // a branching binary tree, levels pulsing outward (Bell, Stirling, Catalan, counting bijections)
    const draw = (x: number, y: number, dx: number, depth: number) => {
      if (depth === 0) return
      const ny = y + s / 5
      for (const s2 of [-1, 1]) { const nx = x + s2 * dx; stroke((depth + phase / TAU) % 2 < 1 ? 1 : 1 / 3); ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(nx, ny); ctx.stroke(); fill(1); ctx.beginPath(); ctx.arc(nx, ny, s / (3 * 8), 0, TAU); ctx.fill(); draw(nx, ny, dx / 2, depth - 1) }
    }
    fill(1); ctx.beginPath(); ctx.arc(c, s / 8, s / (3 * 8), 0, TAU); ctx.fill()
    draw(c, s / 8, s / 4, 3)
  } else if (k === 'balance') {
    // a balance beam tilting toward level — the equality case of an inequality (AM-GM, Cauchy-Schwarz)
    const tilt = Math.sin(phase) / 5
    const pivot = [c, c] as const, arm = c * (3 / 5)
    const l = [c - arm * Math.cos(tilt), c + arm * Math.sin(tilt)] as const
    const r = [c + arm * Math.cos(tilt), c - arm * Math.sin(tilt)] as const
    stroke(1); ctx.beginPath(); ctx.moveTo(...pivot); ctx.lineTo(c, c + arm / 2); ctx.stroke()
    stroke(3 / 4); ctx.beginPath(); ctx.moveTo(...l); ctx.lineTo(...r); ctx.stroke()
    fill(1); for (const p of [l, r]) { ctx.beginPath(); ctx.arc(p[0], p[1] + s / 8, s / (2 * 5), 0, TAU); ctx.fill() }
  } else if (k === 'dice') {
    // a probability wheel split into segments, one sweeping (Monty Hall, gambler, entropy, shuffles)
    const n = Math.max(3, props.spec.points)
    const lit = Math.floor(((phase / TAU) % 1) * n) % n
    for (let i = 0; i < n; i += 1) {
      fill(i === lit ? 3 / 4 : 1 / 5, (i * 360) / n)
      ctx.beginPath(); ctx.moveTo(c, c); ctx.arc(c, c, c * (3 / 4), (i / n) * TAU, ((i + 1) / n) * TAU); ctx.closePath(); ctx.fill()
    }
  } else if (k === 'cycle') {
    // a ring of nodes with a token hopping around and one edge lighting (Josephus, graph cycles, cages)
    const n = props.spec.points
    const pts = ring(n, c * (3 / 4), c, c, -TAU / 4)
    stroke(1 / 3); ctx.beginPath(); for (let i = 0; i <= n; i += 1) ctx.lineTo(...pts[i % n]!); ctx.stroke()
    const at = Math.floor(((phase / TAU) % 1) * n) % n
    for (let i = 0; i < n; i += 1) { fill(i === at ? 1 : 1 / 4); ctx.beginPath(); ctx.arc(...pts[i]!, i === at ? s / (2 * 6) : s / (3 * 8), 0, TAU); ctx.fill() }
  } else if (k === 'sieve') {
    // a number grid, primes/marked cells lighting in a diagonal sweep (number theory, congruences, divisors)
    const g = 6, cell = s / g, sweep = ((phase / TAU) % 1) * 2 * g
    const isP = (x: number) => { if (x < 2) return false; for (let d = 2; d * d <= x; d += 1) if (x % d === 0) return false; return true }
    for (let iy = 0; iy < g; iy += 1) for (let ix = 0; ix < g; ix += 1) {
      const num = iy * g + ix + 1, on = isP(num)
      const near = Math.abs((ix + iy) - sweep) < 1
      if (on) fill(near ? 1 : 1 / 2); else fill(near ? 1 / 4 : 1 / (2 * 6))
      ctx.beginPath(); ctx.arc(ix * cell + cell / 2, iy * cell + cell / 2, cell / (on ? 3 : 5), 0, TAU); ctx.fill()
    }
  } else {
    // vortex — the 1-2-4-8-7-5 walk on the digit circle
    const seq = [1, 2, 4, 8, 7, 5]
    const pts = ring(9, c * (3 / 4), c, c, -TAU / 4)
    stroke(1 / 2)
    ctx.beginPath()
    for (const d of [...seq, seq[0]!]) ctx.lineTo(...pts[d - 1]!)
    ctx.stroke()
    const lit = Math.floor(((phase / TAU) % 1) * seq.length + seq.length) % seq.length
    fill(1)
    ctx.beginPath(); ctx.arc(...pts[seq[lit]! - 1]!, s / (2 * 6), 0, TAU); ctx.fill()
  }
  }

  // QUANTUM FOLDING HOLOGRAM FRACTAL — every vertex holds the whole: the figure re-renders at each of
  // its own ring points at 1/φ² scale, half-light, the children counter-touring at φ⁻¹ of the tour.
  // Part contains whole (hologram), φ-recursive (fractal), superposed on the touring many-center (the
  // quantum folding). Children capped at the vortex six so the sieve's 100 points stay one frame's work.
  paint()
  const children = Math.min(many, 6)
  const ringR = c * (3 / 4)
  for (let v = 0; v < children; v += 1) {
    const a = (v / children) * TAU + tour * (PHI ** -1)
    ctx.save()
    ctx.translate(c + ringR * Math.cos(a), c + ringR * Math.sin(a))
    ctx.scale(1 / PHI ** 2, 1 / PHI ** 2)
    ctx.translate(-c, -c)
    ctx.globalAlpha = 1 / 2
    paint()
    ctx.restore()
  }

  // THE DIRECTION FRAME (user law: animations prove the theorem in all its directions) — the
  // theorem's residue coordinates on ℤ/9ℤ, drawn as three markers on the outer nine-wheel:
  // FORWARD rotates from the theorem's own residue position; the ADDITIVE INVERSE ν(d) = −d mod 9
  // counter-rotates (an involution preserving the unit group — multiplication by the unit −1);
  // the TEN'S COMPLEMENT σ(d) = 10 − d sits at the negated angle (inversion negates the angle),
  // in the complement residue's hue — the affine involution mapping non-units onto units. Their
  // composition σ∘ν is the translation d ↦ d + 1: the infinite cyclic action on the finite wheel.
  const co = props.spec.coords
  if (co && co.sequencePosition >= 0) {
    const rOut = c * (9 / 10)
    const dot = s / (4 * 9)
    const posOf = (d: number) => (VORTEX_SEQUENCE as readonly number[]).indexOf(d)
    const angleOf = (d: number) => (posOf(d) / 9) * TAU - TAU / 4
    const fwd = angleOf(co.digit) + phase
    const rev = angleOf(co.additiveInverse) - phase // the additive inverse counter-rotates
    const inv = -angleOf(co.tensComplement) - phase // inversion negates the angle at the complement residue
    fill(2 / 3)
    ctx.beginPath(); ctx.arc(c + rOut * Math.cos(fwd), c + rOut * Math.sin(fwd), dot, 0, TAU); ctx.fill()
    fill(1 / 3, (co.additiveInverse - co.digit) * (360 / 9))
    ctx.beginPath(); ctx.arc(c + rOut * Math.cos(rev), c + rOut * Math.sin(rev), dot, 0, TAU); ctx.fill()
    fill(1 / 2, (co.tensComplement - co.digit) * (360 / 9))
    ctx.beginPath(); ctx.arc(c + rOut * Math.cos(inv), c + rOut * Math.sin(inv), dot * (2 / 3), 0, TAU); ctx.fill()
  }
}

onMounted(() => {
  const canvas = el.value
  if (!canvas) return
  const size = props.size ?? 4 * 7
  canvas.width = size * 2
  canvas.height = size * 2
  draw(0) // one guaranteed frame — the proof glyph shows even where rAF/IO are throttled
  io = new IntersectionObserver((entries) => { visible = entries.some((entry) => entry.isIntersecting) })
  io.observe(canvas)
  // ONE hero clock — no private rAF (anim-quantum convert; multiplies cost outside the sequence).
  offClock = subscribeHeroClock((t) => { if (visible) draw(t) })
})
onBeforeUnmount(() => { offClock?.(); offClock = null; io?.disconnect() })
</script>

<template>
  <canvas ref="el" class="proof-anim" role="img" :aria-label="`${spec.kind} animation of: ${spec.theorem}`" :style="{ width: `${size ?? 4 * 7}px`, height: `${size ?? 4 * 7}px` }" :title="spec.kind" />
</template>

<style scoped>
.proof-anim { flex: none; border-radius: 4px; }
</style>
