<script setup lang="ts">
// ☷ Kūn · Earth · receptive · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 7, glyph: '☷', trigram: 'Kūn·receptive', color: '#000FFF' }
import { computed } from 'vue'
import { useLocale } from '../lib'
import { buildMatrix, componentGraph, fuseDevices, showInAction } from '../lib'

// Show all in action: every command run live, all components interacting, all
// devices fused — computed client-side, zero network.
const matrix = buildMatrix()
const action = showInAction(matrix)
const graph = componentGraph()
const devices = fuseDevices(matrix)
const { bg } = useLocale()
const t = computed(() =>
  bg.value
    ? { eyebrow: 'всичко в действие', ran: 'команди ок', comps: 'компоненти', dev: 'сливане на устройства', channel: 'канал', ok: 'ок', open: 'отворен' }
    : { eyebrow: 'all in action', ran: 'commands ok', comps: 'components', dev: 'device fusion', channel: 'channel', ok: 'ok', open: 'open' },
)
</script>

<template>
  <section class="show-all" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <dl class="show-all__stats">
      <div><dt>{{ t.ran }}</dt><dd>{{ action.ok }}/{{ action.ran }}</dd></div>
      <div><dt>{{ t.comps }}</dt><dd>{{ graph.components.length }}</dd></div>
      <div><dt>{{ t.dev }}</dt><dd>{{ devices.fused ? '✓' : '—' }}</dd></div>
    </dl>

    <div class="show-all__grid">
      <span v-for="run in action.runs" :key="run.command" :class="['show-all__cell', run.ok ? 'ok' : 'open']" :title="`${run.command}\n${run.uuid}`">
        {{ run.command.replace('concept.', '') }}
      </span>
    </div>

    <p class="show-all__channel">{{ t.channel }}: <code>{{ devices.channel }}</code></p>
  </section>
</template>

<style scoped>
.show-all {
  margin: 1.25rem 0;
}
.show-all__stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  gap: 0.5rem;
  margin: 0.4rem 0 0.8rem;
}
.show-all__stats div {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 0.4rem 0.6rem;
}
.show-all__stats dt {
  font-size: 0.7rem;
  color: var(--vp-c-text-3);
}
.show-all__stats dd {
  margin: 0.1rem 0 0;
  font-weight: 700;
}
.show-all__grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}
.show-all__cell {
  font-size: 0.66rem;
  padding: 0.15rem 0.4rem;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}
.show-all__cell.ok {
  border-color: var(--vp-c-brand-1);
}
.show-all__cell.open {
  border-color: var(--vp-c-warning-1, var(--vp-c-warning-1));
  border-style: dashed;
}
.show-all__channel {
  font-size: 0.72rem;
  color: var(--vp-c-text-3);
  margin-top: 0.6rem;
}
</style>
