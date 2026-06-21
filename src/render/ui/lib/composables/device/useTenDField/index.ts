import { type Ref } from 'vue'
import { textToMovie } from '../quantumMind'
import { dims as dimsAt } from '../../../quantum/dimensions' // dims lives in quantum/dimensions, not re-exported by quantumMind
import { useAnimationEngine } from '../useAnimationEngine'

// Every text statement is its OWN movie — and the movie IS the text, not abstract circles. The statement folds
// to textToMovie, whose elements are the REAL characters, each transliterated to Glagolitic (the movie's
// script). Here they are DISPLAYED — laid out as readable lines, revealed along a playhead, and pulsed through
// the ten dimensions (dims): breath scales the type, hueShift slides the colour, twist/loopA1 give a tiny
// legible drift, and the playhead glow sweeps the line. Whatever the statement says, the movie displays exactly
// — the transliterated text itself, legibly — so what is not wired into the statement is simply not in its
// movie. The animation is the statement's reproducible signature (movie.root) — its proof of IDENTITY, not of
// truth (HARMONY ≠ TRUTH). One source for "text → its real-text movie", reused by every card (no copy-pasted draw).
export function useTenDField(target: Ref<HTMLCanvasElement | null>, text: string, hover?: Ref<boolean>) {
  const movie = textToMovie(text || ' ') // the statement → its real-text movie (transliterated glyphs, deterministic)
  function draw(time: number) {
    const el = target.value
    if (!el) return
    const ctx = el.getContext('2d')
    if (!ctx) return
    const w = el.width
    const h = el.height
    ctx.clearRect(0, 0, w, h)
    const p = (((time * 0.00002) % 1) + 1) % 1 // the playhead, 0→1, looping — the movie plays the line
    const dim = dimsAt(p)
    const amp = hover?.value ? 1 : 0.62
    const breath = Math.max(0, Math.min(1, (dim.breath - 0.85) / 0.15))
    const fs = Math.max(11, Math.min(w, h) * 0.082) * (0.92 + 0.12 * breath) // breath scales the type
    ctx.font = `600 ${fs}px ui-monospace, "Cascadia Code", monospace`
    ctx.textBaseline = 'middle'
    const pad = fs * 0.5
    const lineH = fs * 1.28
    let x = pad
    let y = pad + fs * 0.6
    for (const e of movie.elements) {
      const gw = e.space ? fs * 0.42 : ctx.measureText(e.glyph).width + fs * 0.1
      if (!e.space && x + gw > w - pad) {
        x = pad
        y += lineH
      } // wrap in reading order
      if (y > h - pad) break // the movie fills the frame, then stops (what overflows is off-screen, not lost)
      if (!e.space) {
        const entered = e.reveal <= p // the playhead has reached this glyph
        const near = 1 - Math.min(1, Math.abs(e.reveal - p) * 5) // glyphs at the playhead glow
        const hue = (e.hue + dim.hueShift) % 360 // its own hue, slid by the computed hueShift
        const drift = Math.sin(time * 0.0008 + e.jitter * 6.283 + dim.loopA1) * fs * 0.05 // tiny — text stays legible
        const a = ((entered ? 0.26 : 0.07) + 0.55 * near) * amp
        ctx.fillStyle = `hsla(${hue}, 72%, 63%, ${a})`
        ctx.fillText(e.glyph, x + Math.cos(dim.twist + e.jitter * 6.283) * fs * 0.04, y + drift)
      }
      x += gw
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
  return { movieRoot: movie.root } // the statement's real-text movie fingerprint — its reproducible proof
}
