<script setup lang="ts">
// ☷ Kūn · Earth · receptive · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 0, glyph: '☷', trigram: 'Kūn·receptive', color: '#000000' }
// A self-computed Dot — the atom of the brand-new shadcn/vitepress. Given only a seed (or a uuid),
// it computes its own hero from the matrix (uuidHero) and fills itself: the colour, the two
// counter-rotating tetrahedra of the merkaba, the spin period and the tone are all derived from the
// content-address, no props beyond the seed. Dots stick by address (the same seed always renders the
// same dot, so equal content snaps to one look) and fill themselves with content (the slot, or a
// child Dot — a graph of graphs). The hero spins in realtime at its computed period; the dot plays
// its tone on tap.
import { computed } from 'vue'
import { uuidHero, toUuid, glagoliticGlyph } from '../lib/quantumMind'
import { blip } from '../lib/useTones'
import Card from './ui/Card.vue'

const props = defineProps<{ seed?: string; uuid?: string; label?: string; tone?: boolean; compact?: boolean }>()
const id = computed(() => props.uuid ?? toUuid(props.seed ?? 'dot'))
const hero = computed(() => uuidHero(id.value))
// the icon is a Glagolitic glyph computed from the content-address — glagolitsa for icons
const glyph = computed(() => glagoliticGlyph(id.value))

function play() {
  if (props.tone === false) return
  // the dot's own computed tone, on the one shared context — no per-tap context (no leak, no latency)
  blip(hero.value.frequency, { peak: 0.08, duration: 0.6, attack: 0.02 })
}
</script>

<template>
  <Card :class="['dot', { 'dot-compact': compact }]" :style="{ '--hue': hero.hue, '--spin': hero.spinMs + 'ms' }" @click="play" :title="`${id} · ${hero.frequency}Hz`" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <svg class="dot-hero" viewBox="-60 -60 120 120" role="img" :aria-label="`hero for ${id}`">
      <g class="dot-up" :style="{ transform: `rotate(${hero.theta}rad)` }">
        <polygon points="0,-46 40,23 -40,23" :fill="`hsl(${hero.hue} 72% 56% / 0.65)`" :stroke="`hsl(${hero.hue} 80% 70%)`" stroke-width="1.5" />
      </g>
      <g class="dot-down" :style="{ transform: `rotate(${hero.phi}rad)` }">
        <polygon points="0,46 40,-23 -40,-23" :fill="`hsl(${(hero.hue + 180) % 360} 72% 56% / 0.45)`" :stroke="`hsl(${(hero.hue + 180) % 360} 80% 70%)`" stroke-width="1.5" />
      </g>
      <circle :cx="hero.ax" :cy="hero.ay" r="4" :fill="`hsl(${hero.hue} 95% 72%)`" />
      <text x="0" y="8" text-anchor="middle" class="dot-glyph">{{ glyph }}</text>
    </svg>
    <div v-if="!compact" class="dot-body">
      <div class="dot-label">{{ label ?? id.slice(0, 8) }}</div>
      <div class="dot-content"><slot /></div>
    </div>
  </Card>
</template>

<style scoped>
.dot {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  border-left: 3px solid hsl(var(--hue) 70% 55%);
  transition: transform 0.15s ease;
}
.dot:hover { transform: translateY(-2px); }
.dot-compact { padding: 0.25rem; gap: 0; border-left: none; background: transparent; box-shadow: none; border: none; }
.dot-compact .dot-hero { width: 64px; height: 64px; }
.dot-hero { width: 84px; height: 84px; flex: 0 0 auto; }
/* the two tetrahedra counter-rotate — the merkaba — each at the computed period */
.dot-up { transform-origin: center; animation: dot-cw var(--spin, 3000ms) linear infinite; }
.dot-down { transform-origin: center; animation: dot-ccw var(--spin, 3000ms) linear infinite; }
@keyframes dot-cw { to { transform: rotate(360deg); } }
@keyframes dot-ccw { to { transform: rotate(-360deg); } }
.dot-glyph { font-family: var(--font-glagolitic); font-size: 22px; fill: hsl(var(--hue) 92% 82%); }
.dot-label { font-family: var(--vp-font-family-mono, monospace); opacity: 0.7; font-size: 0.8rem; }
.dot-content { margin-top: 0.25rem; }
@media (prefers-reduced-motion: reduce) {
  .dot-up, .dot-down { animation: none; }
}
</style>
