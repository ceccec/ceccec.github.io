<script setup lang="ts">
// ☴ Xùn · Wind · gentle · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 49, glyph: '☴', lo: '☳', up: '☴', color: '#FF000F', name: 'Rhythm' }
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { buildMatrix, rhythm, humanEase, createAnimationEngine, a432, A432_HUE, GOLDEN_ANGLE } from '../lib/quantumMind'
import { dims } from '../lib/hero'
import { useLocale } from '../lib/useLocale'
import { useTones } from '../lib/useTones'
import { useDeviceEnergy } from '../lib/useDeviceEnergy'

// Keep the rhythm: the merkaba scales as a self-similar polyrhythm. Four concentric
// rings, one per voice, counter-rotating by the merkaba sign; a hand sweeps each
// ring and strikes its onsets — a steady downbeat anchoring 2-, 3- and 5-per-beat
// voices, the counter-scales off the beat. They realign every downbeat.
const data = rhythm(buildMatrix())
const { pick } = useLocale()
const { blip } = useTones()
const { saveEnergy } = useDeviceEnergy()

// COLOUR from A432: anchor on the colour of 432 Hz (≈ red-orange, the octave bridge to visible light),
// then step each voice by the golden angle so the four hues stay distinct yet rooted in one frequency.
// A432_HUE (the anchor) and GOLDEN_ANGLE are imported from the one colour source — no local recompute.
const HUES = data.voices.map((_, i) => (A432_HUE + i * GOLDEN_ANGLE) % 360) // a colour per voice, from A432
// AUDIO on the 432 ladder: map each voice to an octave of 432 (27·54·108·216·432·864·1728), keeping the
// ascending pitch character (the steady downbeat lowest) while tying every struck tone to 432-harmonics.
const A432_OCTAVES = a432().octaves
const VOICE_HZ = data.voices.map((_, i) => A432_OCTAVES[Math.min(2 + i, A432_OCTAVES.length - 1)])
const PEAKS = [0.13, 0.07, 0.07, 0.05]
const wrap = ref<HTMLDivElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)
const playing = ref(false)
let ro: ResizeObserver | null = null
let width = 0
let height = 0
let dpr = 1
let start = 0
let prevPhase = 0
let flash = 0 // downbeat flash decay clock
// last strike time per (voice, onset), for the glow
const lastHit = data.voices.map((voice) => voice.onsets.map(() => -1e9))

function resize() {
  if (!canvas.value || !wrap.value) return
  dpr = Math.min(window.devicePixelRatio || 1, 2)
  width = wrap.value.clientWidth
  height = Math.max(240, Math.round(width * 0.62))
  canvas.value.width = Math.round(width * dpr)
  canvas.value.height = Math.round(height * dpr)
  canvas.value.style.height = `${height}px`
}

function crossed(prev: number, cur: number, onset: number, wrapped: boolean) {
  return wrapped ? onset > prev || onset <= cur : onset > prev && onset <= cur
}

function draw(now: number) {
  const ctx = canvas.value?.getContext('2d')
  if (!ctx) return
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx.clearRect(0, 0, width, height)
  const cx = width / 2
  const cy = height / 2
  const baseR = Math.min(width / 2, height / 1.7) * 0.9
  const phase = playing.value ? ((now - start) % data.beatMs) / data.beatMs : 0

  if (playing.value) {
    const wrapped = phase < prevPhase
    if (wrapped) flash = now
    data.voices.forEach((voice, i) => {
      voice.onsets.forEach((onset, k) => {
        if (crossed(prevPhase, phase, onset, wrapped)) {
          blip(VOICE_HZ[i], { peak: PEAKS[i], duration: 0.13, type: i === 0 ? 'sine' : 'triangle' })
          lastHit[i][k] = now
        }
      })
    })
    prevPhase = phase
  }

  // downbeat flash at the centre
  const flashGlow = Math.max(0, 1 - (now - flash) / 220)
  if (flashGlow > 0) {
    ctx.fillStyle = `hsla(0, 0%, 100%, ${0.16 * flashGlow})`
    ctx.beginPath()
    ctx.arc(cx, cy, baseR * 1.04, 0, Math.PI * 2)
    ctx.fill()
  }

  data.voices.forEach((voice, i) => {
    // MOTION from the 10 dimensions: sample dims at the beat phase, with the voice index as the
    // recursion scale (a golden-angle phase shift per ring) so the four rings are self-similar.
    // breath gently swells each ring's radius; twist adds a slow, coherent visual rotation to the
    // ring's marks and hand — a deterministic shimmer on top of the beat, never touching the
    // audio-driving onset crossing. When stopped, phase = 0, so the pose is fixed (still).
    const d = dims(phase, i)
    const r = baseR * (0.34 + 0.22 * i) * (0.97 + 0.06 * (d.breath - 0.85) / 0.15)
    const rot = d.twist * 0.18 // a slow drift, applied coherently to marks + hand
    const hue = HUES[i]
    // the ring
    ctx.strokeStyle = `hsla(${hue}, 60%, 60%, 0.28)`
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.arc(cx, cy, r, 0, Math.PI * 2)
    ctx.stroke()
    // the onset marks
    voice.onsets.forEach((onset, k) => {
      const a = onset * Math.PI * 2 - Math.PI / 2 + rot
      const dx = cx + Math.cos(a) * r
      const dy = cy + Math.sin(a) * r
      // Humanise the strike: a quick eased pop with a touch of overshoot, so a hit
      // lands like it was struck, not switched on.
      const age = Math.max(0, 1 - (now - lastHit[i][k]) / 360)
      const glow = humanEase(age)
      const overshoot = glow * (1 + 0.5 * Math.sin(age * Math.PI)) // brief swell at the strike
      ctx.fillStyle = `hsla(${hue}, 85%, ${55 + 25 * glow}%, ${0.5 + 0.5 * glow})`
      ctx.shadowBlur = 14 * glow
      ctx.shadowColor = `hsl(${hue}, 90%, 65%)`
      ctx.beginPath()
      ctx.arc(dx, dy, 3.2 + 4 * overshoot, 0, Math.PI * 2)
      ctx.fill()
      ctx.shadowBlur = 0
    })
    // the sweeping hand, counter-rotating by the merkaba sign (with the same dims drift as the marks)
    const ha = (voice.sign > 0 ? phase : 1 - phase) * Math.PI * 2 - Math.PI / 2 + rot
    ctx.strokeStyle = `hsla(${hue}, 80%, 64%, 0.7)`
    ctx.lineWidth = 1.6
    ctx.beginPath()
    ctx.moveTo(cx, cy)
    ctx.lineTo(cx + Math.cos(ha) * r, cy + Math.sin(ha) * r)
    ctx.stroke()
  })
}

// The shared animation engine (src/0) drives the loop; we pass it our draw. The loop runs ONLY while playing
// and only when motion is allowed — reduced-motion and energy-saving stop it (matching every sibling component);
// when off, one tick settles the canvas to its static pose. createAnimationEngine is a bare rAF driver, so the
// gate lives here, in the caller.
const engine = createAnimationEngine(draw)
let reduce = false
function sync() {
  const on = playing.value && !reduce && !saveEnergy.value
  engine.sync(on)
  if (!on) engine.tick() // settle to the current (static, phase 0) pose
}
function toggle() {
  playing.value = !playing.value
  if (playing.value) {
    start = performance.now()
    prevPhase = 0
  }
  sync()
}
watch(saveEnergy, sync) // re-gate if the device drops to energy-saving mid-play

onMounted(() => {
  reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
  resize()
  ro = new ResizeObserver(() => resize())
  if (wrap.value) ro.observe(wrap.value)
  engine.tick() // draw the static pose once; the loop starts only on play (and only when motion is allowed)
})
onBeforeUnmount(() => {
  engine.dispose()
  ro?.disconnect()
})
</script>

<template>
  <section class="rh dt-card" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ pick('keep the rhythm · a self-similar polyrhythm', 'дръж ритъма · самоподобен полиритъм') }}</p>
    <div ref="wrap" class="rh__wrap">
      <canvas
        ref="canvas"
        class="rh__canvas"
        role="img"
        :aria-label="pick('Four concentric rings sounding a polyrhythm', 'Четири концентрични пръстена, свирещи полиритъм')"
      />
      <button
        type="button"
        class="rh__play dt-btn"
        :aria-pressed="playing"
        @click="toggle"
      >{{ playing ? pick('■ stop', '■ спри') : pick('▶ play the rhythm', '▶ свири ритъма') }}</button>
    </div>
    <p class="rh__sub">
      {{ pick(
        `${data.bpm} BPM · ${data.count} voices at 1, 2, 3 and 5 per beat (${data.onsetsPerBeat} onsets a beat). The steady downbeat keeps the rhythm; the counter-scales fall off the beat and the rings counter-rotate — the temporal face of the double torus.`,
        `${data.bpm} удара/мин · ${data.count} гласа при 1, 2, 3 и 5 на такт (${data.onsetsPerBeat} удара на такт). Стабилният силен удар държи ритъма; контра-мащабите падат извън такта, а пръстените се въртят насрещно — времевото лице на двойния тор.`) }}
    </p>
  </section>
</template>

<style scoped>
.rh {
  margin: 1.5rem 0;
  border-radius: 14px;
  padding: 1.2rem 1.4rem;
}
.rh__wrap {
  position: relative;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.12), transparent 60%),
    var(--vp-c-bg);
  margin-top: 0.4rem;
}
.rh__canvas {
  display: block;
  width: 100%;
}
.rh__play {
  position: absolute;
  left: 50%;
  bottom: 0.8rem;
  transform: translateX(-50%);
  font-size: 0.82rem;
}
.rh__sub {
  margin: 0.6rem 0 0;
  font-size: 0.82rem;
  color: var(--vp-c-text-3);
}
</style>
