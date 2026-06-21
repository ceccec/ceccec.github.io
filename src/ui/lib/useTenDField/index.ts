import { type Ref } from 'vue'
import { textToMovie } from '../quantumMind'
import { dims as dimsAt } from '../../../quantum/dimensions' // dims lives in quantum/dimensions, not re-exported by quantumMind
import { useAnimationEngine } from '../useAnimationEngine'

// Every text statement is a prompt for its OWN animation — computed, deterministic, reproducible. The statement
// folds to textToMovie (16 content-addressed particles, each with a position, hue, orbit speed/radius/wobble
// seeded from the text's UUID), and they move through the ten dimensions (dims): twist spins the orbits, loopA1
// folds them, hueShift slides the colour, breath scales. The animation IS the statement's reproducible signature
// — recompute the text and the identical movie returns (movie.root is its fingerprint). That is its proof of
// IDENTITY/provenance (HARMONY ≠ TRUTH — not proof the statement is true). A statement that cannot compute a
// reproducible animation is unproven and purged; textToMovie makes every statement provable, so the field always
// carries a proof. One source for "text → its proving animation", reused by every card (no copy-pasted draw).
export function useTenDField(target: Ref<HTMLCanvasElement | null>, text: string, hover?: Ref<boolean>) {
  const movie = textToMovie(text || ' ') // the statement → its computed particles (deterministic, reproducible)
  function draw(time: number) {
    const el = target.value
    if (!el) return
    const ctx = el.getContext('2d')
    if (!ctx) return
    const w = el.width
    const h = el.height
    ctx.clearRect(0, 0, w, h)
    const cx = w / 2
    const cy = h / 2
    const R = Math.min(w, h)
    const p = (((time * 0.000013) % 1) + 1) % 1
    const dim = dimsAt(p)
    const amp = hover?.value ? 1 : 0.5
    const breath = 0.9 + 0.1 * Math.max(0, Math.min(1, (dim.breath - 0.85) / 0.15))
    for (const e of movie.elements) {
      const ang = e.dir + time * 0.0004 * e.speed * (1 + 0.5 * dim.twist) // the orbit, spun by d.twist
      const rad = e.radius * R * (1 + 0.15 * Math.sin(time * 0.0006 * e.wobble + dim.loopA1)) // folded by loopA1
      const x = cx + (e.x - 0.5) * R * 0.7 * breath + Math.cos(ang) * rad
      const y = cy + (e.y - 0.5) * R * 0.7 * breath + Math.sin(ang) * rad
      const hue = (e.hue + dim.hueShift) % 360 // the statement's own hue, slid by the computed hueShift
      ctx.fillStyle = `hsla(${hue}, 70%, 62%, ${(0.1 + 0.45 * e.size) * amp})`
      ctx.beginPath()
      ctx.arc(x, y, Math.max(1.5, e.size * R * (hover?.value ? 1.5 : 1)), 0, Math.PI * 2)
      ctx.fill()
    }
  }
  function size() {
    const el = target.value
    if (!el) return
    const ratio = Math.min(window.devicePixelRatio || 1, 2)
    el.width = Math.max(1, el.clientWidth) * ratio
    el.height = Math.max(1, el.clientHeight) * ratio
  }
  useAnimationEngine(target, draw, size)
  return { movieRoot: movie.root } // the statement's animation fingerprint — its reproducible proof
}
