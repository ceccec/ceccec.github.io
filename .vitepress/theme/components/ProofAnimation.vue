<script setup lang="ts">
// ONE renderer for every proof animation — interprets ProofAnimationSpec (kind · points · lines ·
// ratePhi · hueDigit) from src/thunder/waves. Rates are φ^−k (quasi-periodic, never repeats), hues
// are vortex digits on the one circle (d·360/9): the same two sealed generators as the movie. The
// ONE shared hero clock (subscribeHeroClock) drives every visible canvas; off-screen pause via IO.
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { useData } from 'vitepress'
import { drawProofAnimation } from '../../render'
import { subscribeHeroClock } from '../../lib/hero-movie-paint'
import type { ProofAnimationSpec } from '../../render'

// A MOUNT, NOT A PAINTER. The renderer (kinds, witnesses, the direction frame) is drawProofAnimation in the animation SDK,
// src/quantum/wind/geometry — pure, gated by verify:movie, every number it draws with an ANIMATION_DESIGN value movie.lean
// decides. This component owns the canvas, the one hero clock and the off-screen pause.

const props = defineProps<{ spec: ProofAnimationSpec; size?: number }>()
const { isDark } = useData()
const el = ref<HTMLCanvasElement | null>(null)
let offClock: (() => void) | null = null
let visible = true // fail toward motion: a late or absent IntersectionObserver must not freeze the proof
let io: IntersectionObserver | null = null

function draw(t: number) {
  const canvas = el.value
  const ctx = canvas?.getContext('2d')
  if (!canvas || !ctx) return
  drawProofAnimation(ctx, canvas.width, props.spec, t, isDark.value)
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
  <canvas ref="el" class="proof-anim" role="img" :aria-label="spec.witness ? `${spec.theorem}: ${spec.witness.caption}` : `${spec.kind} animation of: ${spec.theorem}`" :style="{ width: `${size ?? 4 * 7}px`, height: `${size ?? 4 * 7}px` }" :title="spec.kind" />
</template>

<style scoped>
.proof-anim { flex: none; border-radius: var(--ich-sp2); }
</style>
