<script setup lang="ts">
// ☵ Kǎn · Water · abysmal · upper·yang · breath — self-referencing 10D widget
const ICHING_MASK = { hexagram: 23, glyph: '☵', lower: '☰', upper: '☵', color: '#0F0FFF' } as const
// GpuField — the GPU half, in harmony with the model. The CPU computes the address (the truth); the
// GPU expands it to a living plasma field (the appearance) in realtime. The seed → uuidHero gives the
// hue, frequency and the two rotation phases of the merkaba, fed as uniforms to a WebGL fragment
// shader that renders thousands of pixels in parallel every frame. Deterministic (same seed, same
// field), client-side, zero-cost. Honest: this is rendering, not the model's compute — and it
// gracefully falls back to a CSS field where WebGL is unavailable or motion is reduced.
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { uuidHero, toUuid, createAnimationEngine, a432, A432_HUE } from '../lib/quantumMind'
import { dims } from '../lib/hero'

const props = defineProps<{ seed?: string; size?: number }>()
const id = computed(() => toUuid(props.seed ?? 'plasma'))
const hero = computed(() => uuidHero(id.value))
const px = computed(() => props.size ?? 460)

// COLOUR anchored to A432: the 432 Hz octave-bridge hue (≈ 631 nm red-orange) is the field's base, the seed
// only nudges it — so every plasma shares the A432 anchor while staying distinct. MOTION driven by dims():
// the ten self-similar dimensions modulate the shader's phase, amplitude and hue each frame. The seed picks
// a `scale` (golden-angle phase shift), so two fields run the same ten-dimensional walk, irrationally offset.
const a432Hue = A432_HUE / 360 // ~0.014, the red-orange anchor, from the one colour source
const baseHue = computed(() => (a432Hue + (hero.value.hue / 360) * 0.18) % 1) // A432 anchor, seed-nudged
const scaleOf = computed(() => Math.floor(hero.value.hue / 36)) // 0..9: the seed's nested dimension scale
// The field's spatial frequency rides the A432 octave ladder (27·54·…·1728) the seed lands on.
const octave = computed(() => a432().octaves[hero.value.frequency % 7]!)
const freqOf = computed(() => 2.0 + octave.value / 360)

const canvas = ref<HTMLCanvasElement | null>(null)
const ok = ref(true)
let gl: WebGLRenderingContext | null = null
let cleanup: (() => void) | null = null

const VERT = 'attribute vec2 p; void main(){ gl_Position = vec4(p, 0.0, 1.0); }'
const FRAG = `precision highp float;
uniform float u_time; uniform vec2 u_res;
uniform float u_hue; uniform float u_freq; uniform float u_a; uniform float u_b;
// dims()-driven uniforms: breath amplitude + the two genus-2 homology loops, refreshed each frame.
uniform float u_amp; uniform float u_loopA; uniform float u_loopB;
void main(){
  vec2 uv = (gl_FragCoord.xy / u_res - 0.5) * 2.0;
  float t = u_time;
  // layered flow + a radial torus/merkaba pulse — the address's own field; the homology loops phase-shift
  // the two handles, breath scales the whole field's amplitude (the ten dimensions, made motion).
  float v = sin(uv.x * u_freq + t + u_a + u_loopA)
          + sin((uv.y * u_freq + t) * 1.3 + u_b + u_loopB)
          + sin((uv.x + uv.y) * u_freq * 0.7 + t * 0.8);
  float r = length(uv);
  v += sin(r * u_freq * 2.0 - t * 1.5);
  v *= 0.25 * u_amp;
  float h = u_hue + v * 0.13;
  vec3 col = 0.5 + 0.5 * cos(6.28318 * (h + vec3(0.0, 0.33, 0.66)));
  col *= 0.45 + 0.55 * smoothstep(1.25, 0.0, r);
  gl_FragColor = vec4(col, 1.0);
}`

function compile(g: WebGLRenderingContext, type: number, src: string) {
  const s = g.createShader(type)!
  g.shaderSource(s, src); g.compileShader(s)
  if (!g.getShaderParameter(s, g.COMPILE_STATUS)) { g.deleteShader(s); return null }
  return s
}

onMounted(() => {
  const c = canvas.value
  if (!c) return
  const reduce = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches
  gl = (c.getContext('webgl') || c.getContext('experimental-webgl')) as WebGLRenderingContext | null
  if (!gl) { ok.value = false; return }
  const g = gl
  const vs = compile(g, g.VERTEX_SHADER, VERT)
  const fs = compile(g, g.FRAGMENT_SHADER, FRAG)
  if (!vs || !fs) { ok.value = false; return }
  const prog = g.createProgram()!
  g.attachShader(prog, vs); g.attachShader(prog, fs); g.linkProgram(prog)
  if (!g.getProgramParameter(prog, g.LINK_STATUS)) { ok.value = false; return }
  g.useProgram(prog)
  const buf = g.createBuffer()
  g.bindBuffer(g.ARRAY_BUFFER, buf)
  g.bufferData(g.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), g.STATIC_DRAW)
  const loc = g.getAttribLocation(prog, 'p')
  g.enableVertexAttribArray(loc); g.vertexAttribPointer(loc, 2, g.FLOAT, false, 0, 0)
  const uTime = g.getUniformLocation(prog, 'u_time')
  const uRes = g.getUniformLocation(prog, 'u_res')
  const uHue = g.getUniformLocation(prog, 'u_hue')
  const uAmp = g.getUniformLocation(prog, 'u_amp')
  const uLoopA = g.getUniformLocation(prog, 'u_loopA')
  const uLoopB = g.getUniformLocation(prog, 'u_loopB')
  g.uniform2f(g.getUniformLocation(prog, 'u_res'), c.width, c.height)
  // COLOUR from A432 (octave-bridge anchor, seed-nudged); FREQ rides the A432 octave the seed lands on.
  g.uniform1f(uHue, baseHue.value)
  g.uniform1f(g.getUniformLocation(prog, 'u_freq'), freqOf.value)
  g.uniform1f(g.getUniformLocation(prog, 'u_a'), hero.value.theta)
  g.uniform1f(g.getUniformLocation(prog, 'u_b'), hero.value.phi)
  void uRes
  const scale = scaleOf.value // the seed's nested dimension scale (self-similar across fields)
  // Drive the shader's motion from the ten dimensions at phase p (a slow loop). twist sets the time rate,
  // breath the amplitude, the two homology loops phase-shift the handles, hueShift slides the colour.
  const paint = (ms: number) => {
    const p = ((ms / 24000) % 1 + 1) % 1 // one full 10-dimensional walk every 24s
    const d = dims(p, scale)
    g.uniform1f(uTime, (ms / 1000) * (0.6 + d.twist)) // twist modulates the flow rate
    g.uniform1f(uHue, (baseHue.value + d.hueShift / 360 * 0.13) % 1) // A432 anchor, slid by hueShift
    g.uniform1f(uAmp, d.breath) // breath scales the field amplitude
    g.uniform1f(uLoopA, d.loopA1 * Math.PI) // genus-2 handle 1, meridian
    g.uniform1f(uLoopB, d.loopB1 * Math.PI) // genus-2 handle 1, longitude
    g.drawArrays(g.TRIANGLES, 0, 3)
  }
  const t0 = performance.now()
  const draw = () => paint(performance.now() - t0)
  // The shared animation engine (src/0) drives the WebGL render loop; reduced-motion paints one frozen frame
  // at the walk's open middle (p = 0.5) — the ten dimensions still shape the still field, A432 still colours it.
  const engine = createAnimationEngine(draw)
  if (reduce) { paint(12000) }
  else engine.start()
  cleanup = () => { engine.dispose(); g.deleteProgram(prog); g.deleteShader(vs); g.deleteShader(fs); g.deleteBuffer(buf) }
})

onBeforeUnmount(() => { cleanup?.() })
</script>

<template>
  <figure class="gpufield" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <canvas v-show="ok" ref="canvas" :width="px" :height="px" :style="{ width: px + 'px', maxWidth: '100%' }" :aria-label="`GPU plasma field for ${id}`" />
    <div
      v-if="!ok"
      class="gpufield-fallback"
      :style="{ width: px + 'px', height: px + 'px', '--hue': Math.round(baseHue * 360) }"
      role="img"
      aria-label="plasma field (CSS fallback)"
    />
    <figcaption>GPU field · {{ id.slice(0, 8) }} · the CPU computes the address, the GPU renders it realtime</figcaption>
  </figure>
</template>

<style scoped>
.gpufield { max-width: 100%; margin: 1.5rem auto; text-align: center; }
.gpufield canvas { border-radius: 12px; display: inline-block; }
.gpufield-fallback {
  border-radius: 12px;
  max-width: 100%;
  margin: 0 auto;
  background:
    radial-gradient(circle at 30% 30%, hsl(var(--hue) 70% 55% / 0.7), transparent 60%),
    radial-gradient(circle at 70% 70%, hsl(calc(var(--hue) + 180) 70% 50% / 0.6), transparent 60%),
    hsl(var(--hue) 40% 12%);
}
.gpufield figcaption { font-size: 0.8rem; opacity: 0.7; margin-top: 0.5rem; }
</style>
