<script setup lang="ts">
// GpuField — the GPU half, in harmony with the model. The CPU computes the address (the truth); the
// GPU expands it to a living plasma field (the appearance) in realtime. The seed → uuidHero gives the
// hue, frequency and the two rotation phases of the merkaba, fed as uniforms to a WebGL fragment
// shader that renders thousands of pixels in parallel every frame. Deterministic (same seed, same
// field), client-side, zero-cost. Honest: this is rendering, not the model's compute — and it
// gracefully falls back to a CSS field where WebGL is unavailable or motion is reduced.
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { uuidHero, toUuid } from '../lib/quantumMind'

const props = defineProps<{ seed?: string; size?: number }>()
const id = computed(() => toUuid(props.seed ?? 'plasma'))
const hero = computed(() => uuidHero(id.value))
const px = computed(() => props.size ?? 460)

const canvas = ref<HTMLCanvasElement | null>(null)
const ok = ref(true)
let raf = 0
let gl: WebGLRenderingContext | null = null
let cleanup: (() => void) | null = null

const VERT = 'attribute vec2 p; void main(){ gl_Position = vec4(p, 0.0, 1.0); }'
const FRAG = `precision highp float;
uniform float u_time; uniform vec2 u_res;
uniform float u_hue; uniform float u_freq; uniform float u_a; uniform float u_b;
void main(){
  vec2 uv = (gl_FragCoord.xy / u_res - 0.5) * 2.0;
  float t = u_time;
  // layered flow + a radial torus/merkaba pulse — the address's own field
  float v = sin(uv.x * u_freq + t + u_a)
          + sin((uv.y * u_freq + t) * 1.3 + u_b)
          + sin((uv.x + uv.y) * u_freq * 0.7 + t * 0.8);
  float r = length(uv);
  v += sin(r * u_freq * 2.0 - t * 1.5);
  v *= 0.25;
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
  g.uniform2f(g.getUniformLocation(prog, 'u_res'), c.width, c.height)
  g.uniform1f(g.getUniformLocation(prog, 'u_hue'), hero.value.hue / 360)
  g.uniform1f(g.getUniformLocation(prog, 'u_freq'), 2.0 + (hero.value.frequency % 600) / 90)
  g.uniform1f(g.getUniformLocation(prog, 'u_a'), hero.value.theta)
  g.uniform1f(g.getUniformLocation(prog, 'u_b'), hero.value.phi)
  void uRes
  const t0 = performance.now()
  const draw = () => {
    g.uniform1f(uTime, (performance.now() - t0) / 1000)
    g.drawArrays(g.TRIANGLES, 0, 3)
    raf = requestAnimationFrame(draw)
  }
  if (reduce) { g.uniform1f(uTime, 0); g.drawArrays(g.TRIANGLES, 0, 3) }
  else draw()
  cleanup = () => { cancelAnimationFrame(raf); g.deleteProgram(prog); g.deleteShader(vs); g.deleteShader(fs); g.deleteBuffer(buf) }
})

onBeforeUnmount(() => { cleanup?.() })
</script>

<template>
  <figure class="gpufield">
    <canvas v-show="ok" ref="canvas" :width="px" :height="px" :style="{ width: px + 'px', maxWidth: '100%' }" :aria-label="`GPU plasma field for ${id}`" />
    <div
      v-if="!ok"
      class="gpufield-fallback"
      :style="{ width: px + 'px', height: px + 'px', '--hue': hero.hue }"
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
