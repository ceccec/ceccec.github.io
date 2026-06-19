<script setup lang="ts">
// ☱ Duì · Lake · joyous · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 24, glyph: '☱', lo: 'Kūn·receptive', up: 'Duì·joyous', color: '#0FF000' } as const
import { ref, onMounted } from 'vue'
import { GLAGOLITIC_MAP } from '../lib/quantumMind'

// GlagoliticOCR — the reverse of the encoder, closed-set and deterministic. The system renders from a known
// glyph set (GLAGOLITIC_MAP), so recognition is classification over that set: render each glyph to a 24×24
// template, downsample the drawn/uploaded input to the same grid, pick the nearest (template matching).
// Zero-ML, zero-token, the same answer every time. Honest: reliable for clean, centred glyphs in a serif
// font — NOT robust manuscript/handwriting OCR (that needs a trained model). Closes the round-trip.

const N = 24
const GLYPHS = (() => {
  const seen = new Map<string, string>() // glyph → first source char (the decode)
  for (const [ch, gl] of Object.entries(GLAGOLITIC_MAP)) if (!seen.has(gl)) seen.set(gl, ch)
  return [...seen.entries()].map(([glyph, ch]) => ({ glyph, ch }))
})()

const canvas = ref<HTMLCanvasElement | null>(null)
const result = ref<{ glyph: string; ch: string; conf: number; alts: { glyph: string; ch: string }[] } | null>(null)
let drawing = false
let templates: { glyph: string; ch: string; sig: Float32Array }[] = []

// Normalize any drawing into an N×N ink signature (bounding-box cropped + scaled), so position/size don't matter.
function signatureOf(paint: (ctx: CanvasRenderingContext2D, s: number) => void): Float32Array {
  const s = 64
  const off = document.createElement('canvas'); off.width = s; off.height = s
  const ctx = off.getContext('2d')
  const sig = new Float32Array(N * N)
  if (!ctx) return sig
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, s, s)
  ctx.fillStyle = '#000'
  paint(ctx, s)
  const img = ctx.getImageData(0, 0, s, s).data
  let x0 = s, y0 = s, x1 = -1, y1 = -1
  for (let y = 0; y < s; y += 1) for (let x = 0; x < s; x += 1) {
    if (img[(y * s + x) * 4] < 128) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y }
  }
  if (x1 < x0 || y1 < y0) return sig
  const bw = x1 - x0 + 1, bh = y1 - y0 + 1
  for (let gy = 0; gy < N; gy += 1) for (let gx = 0; gx < N; gx += 1) {
    const sx = x0 + Math.min(bw - 1, Math.floor((gx / N) * bw))
    const sy = y0 + Math.min(bh - 1, Math.floor((gy / N) * bh))
    sig[gy * N + gx] = 1 - img[(sy * s + sx) * 4] / 255
  }
  return sig
}

function recognize() {
  const el = canvas.value
  if (!el || !templates.length) return
  const sig = signatureOf((ctx, s) => ctx.drawImage(el, 0, 0, s, s))
  if (!sig.some((v) => v > 0.05)) { result.value = null; return }
  const scored = templates.map((t) => {
    let d = 0
    for (let i = 0; i < sig.length; i += 1) { const e = sig[i] - t.sig[i]; d += e * e }
    return { glyph: t.glyph, ch: t.ch, d }
  }).sort((a, b) => a.d - b.d)
  const best = scored[0], second = scored[1]
  const conf = second ? Math.max(0, Math.min(1, (second.d - best.d) / (second.d + 1e-6))) : 1
  result.value = { glyph: best.glyph, ch: best.ch, conf, alts: scored.slice(1, 4).map((x) => ({ glyph: x.glyph, ch: x.ch })) }
}

function point(e: PointerEvent) { const el = canvas.value as HTMLCanvasElement; const r = el.getBoundingClientRect(); return { x: (e.clientX - r.left) * (el.width / r.width), y: (e.clientY - r.top) * (el.height / r.height) } }
function down(e: PointerEvent) { const ctx = canvas.value?.getContext('2d'); if (!ctx) return; drawing = true; const p = point(e); ctx.beginPath(); ctx.moveTo(p.x, p.y) }
function move(e: PointerEvent) { if (!drawing) return; const ctx = canvas.value?.getContext('2d'); if (!ctx) return; const p = point(e); ctx.lineTo(p.x, p.y); ctx.strokeStyle = '#111'; ctx.lineWidth = 14; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.stroke() }
function up() { if (!drawing) return; drawing = false; recognize() }
function clear() { const el = canvas.value; const ctx = el?.getContext('2d'); if (!el || !ctx) return; ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, el.width, el.height); result.value = null }
function onUpload(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file) return
  const img = new Image()
  img.onload = () => {
    const el = canvas.value; const ctx = el?.getContext('2d')
    if (el && ctx) { ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, el.width, el.height); const sc = Math.min(el.width / img.width, el.height / img.height) * 0.9; const dw = img.width * sc, dh = img.height * sc; ctx.drawImage(img, (el.width - dw) / 2, (el.height - dh) / 2, dw, dh); recognize() }
    URL.revokeObjectURL(img.src)
  }
  img.src = URL.createObjectURL(file)
}

onMounted(() => {
  templates = GLYPHS.map(({ glyph, ch }) => ({ glyph, ch, sig: signatureOf((ctx, s) => { ctx.font = `${Math.round(s * 0.82)}px serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(glyph, s / 2, s / 2) }) }))
  clear()
})
</script>

<template>
  <ClientOnly>
    <section class="ocr" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
      <header class="ocr__head">
        <span class="ocr__title">GlagoliticOCR · draw or upload a glyph</span>
        <span class="ocr__set">{{ GLYPHS.length }}-glyph closed set · deterministic</span>
      </header>
      <div class="ocr__body">
        <canvas role="img" aria-label="glagolitic ocr visualisation"
          ref="canvas" class="ocr__canvas" width="240" height="240"
          @pointerdown="down" @pointermove="move" @pointerup="up" @pointerleave="up"
        />
        <div class="ocr__out">
          <template v-if="result">
            <div class="ocr__glyph">{{ result.glyph }}</div>
            <div class="ocr__ch">→ “{{ result.ch }}” · {{ Math.round(result.conf * 100) }}%</div>
            <div class="ocr__alts">others: <span v-for="a in result.alts" :key="a.glyph">{{ a.glyph }}</span></div>
          </template>
          <div v-else class="ocr__hint">draw a glyph in the box →</div>
          <div class="ocr__controls">
            <button type="button" class="ocr__btn" @click="clear">clear</button>
            <label class="ocr__btn ocr__upload">upload<input type="file" accept="image/*" hidden @change="onUpload" aria-label="file to upload" /></label>
          </div>
        </div>
      </div>
      <p class="ocr__note">Deterministic closed-set recognition — template-matching the input against the {{ GLYPHS.length }} known glyphs (zero ML, zero tokens, the same answer every time). Reliable for clean, centred glyphs in a serif font; it is NOT manuscript or handwriting OCR — that needs a trained model. The reverse of the encoder: glyph → char closes the round-trip.</p>
    </section>
  </ClientOnly>
</template>

<style scoped>
.ocr { margin: 1.5rem 0; border: 1px solid var(--vp-c-divider); border-radius: 14px; padding: 1rem 1.1rem 0.9rem; background: var(--vp-c-bg-soft); }
.ocr__head { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; margin-bottom: 0.7rem; }
.ocr__title { font-weight: 600; font-size: 0.92rem; }
.ocr__set { font-size: 0.7rem; color: var(--vp-c-text-3); }
.ocr__body { display: flex; gap: 1rem; flex-wrap: wrap; align-items: flex-start; }
.ocr__canvas { width: 200px; height: 200px; background: #fff; border: 1px solid var(--vp-c-divider); border-radius: 10px; cursor: crosshair; touch-action: none; }
.ocr__out { flex: 1; min-width: 9rem; }
.ocr__glyph { font-size: 4rem; line-height: 1; color: var(--vp-c-brand-1); }
.ocr__ch { font-size: 0.95rem; color: var(--vp-c-text-1); margin-top: 0.2rem; }
.ocr__alts { font-size: 0.8rem; color: var(--vp-c-text-3); margin-top: 0.3rem; }
.ocr__alts span { margin-right: 0.3rem; }
.ocr__hint { color: var(--vp-c-text-3); font-size: 0.85rem; }
.ocr__controls { display: flex; gap: 0.5rem; margin-top: 0.8rem; }
.ocr__btn { font-size: 0.74rem; padding: 0.28rem 0.7rem; border-radius: 999px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg); color: var(--vp-c-text-1); cursor: pointer; }
.ocr__note { margin: 0.8rem 0 0.2rem; font-size: 0.68rem; line-height: 1.5; color: var(--vp-c-text-3); }
</style>
