<script setup lang="ts">
// Display gate — co-located src/thunder/decode/index.ts · the mystery atlas (worldMysteriesDecoded)
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { worldMysteriesDecoded } from './index.ts'
import { createAnimationEngine } from '../../0/index.ts'

const atlas = worldMysteriesDecoded()
const at = ref(0)
// asMerkle reveal: the highlighted leaf walks the atlas, driven by the ONE shared rAF engine (createAnimationEngine).
const activeIndex = computed(() => Math.floor((at.value / 1400) % atlas.mysteries.length))
let engine: ReturnType<typeof createAnimationEngine> | null = null
onMounted(() => {
  const start = performance.now()
  engine = createAnimationEngine(() => { at.value = performance.now() - start })
  engine.start()
})
onBeforeUnmount(() => engine?.dispose())
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
  padding: var(--ich-sp3) var(--ich-sp5); border-radius: 8px;
  border-left: 4px solid hsl(var(--tier-hue, 0) calc(64% + 6%) calc(100% / 2));
  background: hsl(var(--tier-hue, 0) calc(64% + 6%) calc(100% / 2) / calc(7 / 100));
  transition: background var(--ich-dur), transform var(--ich-dur);
}
.mystery-atlas__leaf.is-active { background: hsl(var(--tier-hue, 0) calc(64% + 6%) calc(100% / 2) / calc((9 + 9) / 100)); transform: translateX(3px); }
.mystery-atlas__tier { font-family: var(--vp-font-family-mono); font-size: var(--ich-text-xs); color: hsl(var(--tier-hue, 0) calc(64% + 6%) calc(6% * 7)); }
.mystery-atlas__verdict { grid-column: 2; font-size: var(--ich-text-sm); opacity: var(--ich-op-card-faint); }
.mystery-atlas__leaf strong { grid-column: 2; }
@media (max-width: 640px) { .mystery-atlas__leaf { grid-template-columns: 1fr; } .mystery-atlas__verdict, .mystery-atlas__leaf strong { grid-column: 1; } }
</style>
