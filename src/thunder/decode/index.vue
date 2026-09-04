<script setup lang="ts">
// Display gate — co-located src/thunder/decode/index.ts · the mystery atlas (worldMysteriesDecoded)
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { worldMysteriesDecoded } from './index.ts'
import { heroPhaseAt, subscribeHeroClock } from '../../../.vitepress/lib/hero-movie-paint.ts'
import { floor } from '../../0/index.ts'

const atlas = worldMysteriesDecoded()
const at = ref(0)
// asMerkle reveal: the highlighted leaf walks the atlas on the ONE shared hero clock (subscribeHeroClock + heroPhaseAt).
const activeIndex = computed(() => {
  const n = atlas.mysteries.length
  if (n <= 0) return 0
  return floor(heroPhaseAt(at.value) * n) % n
})
let off: (() => void) | null = null
onMounted(() => {
  off = subscribeHeroClock((time) => { at.value = time })
})
onBeforeUnmount(() => { off?.(); off = null })
</script>

<template>
  <section class="mystery-atlas" data-logic="src/thunder/decode/index.ts" data-target="src/thunder/decode/index.ts" data-topic="world-mysteries">
    <h3>Mystery atlas · {{ atlas.count }} decoded · root {{ atlas.root.slice(0, 8) }}</h3>
    <ul class="mystery-atlas__list">
      <li
        v-for="(m, i) in atlas.mysteries"
        :key="m.mystery"
        class="mystery-atlas__leaf"
        :class="{ 'is-active': i === activeIndex }"
        :style="{ '--tier-hue': m.hue }"
      >
        <span class="mystery-atlas__tier">{{ m.tier }}</span>
        <strong>{{ m.mystery }}</strong>
        <span class="mystery-atlas__verdict">{{ m.verdict }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.mystery-atlas { display: grid; gap: var(--ich-sp4); }
.mystery-atlas__list { list-style: none; padding: 0; margin: 0; display: grid; gap: var(--ich-sp3); }
.mystery-atlas__leaf {
  display: grid; grid-template-columns: calc(1rem * (9 - 1 / 2)) 1fr; gap: var(--ich-sp2) var(--ich-sp5); align-items: baseline;
  padding: var(--ich-sp3) var(--ich-sp5); border-radius: var(--ich-sp4);
  border-left: var(--ich-unit) solid hsl(var(--tier-hue, 0) calc(100% * 7 / 8) calc(100% / 2));
  background: hsl(var(--tier-hue, 0) calc(100% * 7 / 8) calc(100% / 2) / calc(7 / 100));
  transition: background var(--ich-dur), transform var(--ich-dur);
}
.mystery-atlas__leaf.is-active { background: hsl(var(--tier-hue, 0) calc(100% * 7 / 8) calc(100% / 2) / calc((9 + 9) / 100)); transform: translateX(var(--ich-border-3)); }
.mystery-atlas__tier { font-family: var(--vp-font-family-mono); font-size: var(--ich-text-xs); color: hsl(var(--tier-hue, 0) calc(100% * 7 / 8) calc(100% * 6 / 16)); }
.mystery-atlas__verdict { grid-column: 2; font-size: var(--ich-text-sm); opacity: var(--ich-op-card-faint); }
.mystery-atlas__leaf strong { grid-column: 2; }
@media (max-width: 640px) { .mystery-atlas__leaf { grid-template-columns: 1fr; } .mystery-atlas__verdict, .mystery-atlas__leaf strong { grid-column: 1; } }
</style>
