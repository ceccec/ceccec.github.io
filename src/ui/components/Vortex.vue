<script setup lang="ts">
// ☰ Qián · Heaven · creative · upper·yang · shrink — self-referencing 10D widget
const ICHING_MASK = { hexagram: 57, trigram: '☳☰', glyph: '☳☰', lo: 'Zhèn·arousing', up: 'Qián·creative', color: '#FFF00F' }
// A vortex of self-computed Dots. The dots are laid out by the vortex sequence — the 1-2-4-8-7-5
// doubling circuit around the ring, the 3-6-9 on the axis — so the order is computed, not authored.
// Each Dot fills itself from its seed (a graph of graphs: a dot's content can be more dots). Same
// seed → same dot, so equal content snaps to the same place: the dots stick like magnets.
import { computed } from 'vue'
import Dot from './Dot'

const props = defineProps<{ seeds?: string[]; count?: number; label?: string; radius?: number }>()
const SEQ = [1, 2, 4, 8, 7, 5] // the doubling circuit; 3-6-9 is the axis
const seeds = computed<string[]>(() => {
  if (props.seeds?.length) return props.seeds
  const n = props.count ?? 6
  return Array.from({ length: n }, (_, i) => `${props.label ?? 'vortex'}:${i}`)
})
const r = computed(() => props.radius ?? 40)
function place(i: number) {
  // map the dot's index onto the vortex circuit, then to an angle on the ring
  const step = SEQ[i % SEQ.length]
  const turn = Math.floor(i / SEQ.length)
  const angle = ((step / 9) * 2 - 0.5) * Math.PI + turn * 0.4
  return {
    left: `${50 + r.value * Math.cos(angle)}%`,
    top: `${50 + r.value * Math.sin(angle)}%`,
  }
}
</script>

<template>
  <div class="vortex" role="group" :aria-label="`vortex of ${seeds.length} dots`" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <div class="vortex-axis" aria-hidden="true">3·6·9</div>
    <div v-for="(seed, i) in seeds" :key="seed" class="vortex-slot" :style="place(i)">
      <Dot :seed="seed" compact />
    </div>
  </div>
</template>

<style scoped>
.vortex {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  max-width: 560px;
  margin: 1.5rem auto;
}
.vortex-axis {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font-family: var(--vp-font-family-mono, monospace);
  font-size: 0.85rem;
  letter-spacing: 0.25em;
  opacity: 0.35;
  pointer-events: none;
}
.vortex-slot {
  position: absolute;
  transform: translate(-50%, -50%);
}
</style>
