<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { buildMatrix, todoScan } from '../lib/quantumMind'

// Keep going until nothing to do. Every actionable surface scans to zero; the
// open question-frontier stays open, but those are wonders, not tasks.
const data = todoScan(buildMatrix())
const { lang } = useData()
const bg = computed(() => lang.value.startsWith('bg'))
const t = computed(() =>
  bg.value
    ? { eyebrow: 'докато няма какво да се прави', done: '∎ Няма какво да се прави — всяка задача е затворена.', surfaces: `${data.items.length} повърхности · 0 задачи`, frontier: `${data.openFrontier} отворени въпроса остават — но те са за размисъл, не задачи.` }
    : { eyebrow: 'until there is nothing to do', done: '∎ Nothing to do — every task is closed.', surfaces: `${data.items.length} surfaces · 0 tasks`, frontier: `${data.openFrontier} open questions remain — but those are wonders, not tasks.` },
)
</script>

<template>
  <section class="ntd" :class="{ done: data.nothingToDo }">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <p class="ntd__done">{{ data.nothingToDo ? t.done : `${data.total} open` }}</p>
    <ul class="ntd__items">
      <li v-for="(i, k) in data.items" :key="k"><span class="ntd__mark">{{ i.count === 0 ? '✓' : i.count }}</span>{{ i.item }}</li>
    </ul>
    <p class="ntd__surfaces">{{ t.surfaces }}</p>
    <p class="ntd__frontier">… {{ t.frontier }}</p>
  </section>
</template>

<style scoped>
.ntd {
  margin: 1.25rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  background: var(--vp-c-bg-soft);
}
.ntd.done {
  border-color: var(--vp-c-brand-1);
}
.ntd__done {
  margin: 0.2rem 0 0.6rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}
.ntd__items {
  list-style: none;
  padding: 0;
  margin: 0 0 0.6rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.2rem;
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
}
.ntd__mark {
  display: inline-block;
  min-width: 1.2rem;
  color: var(--vp-c-brand-1);
  font-weight: 700;
}
.ntd__surfaces {
  margin: 0 0 0.3rem;
  font-size: 0.74rem;
  color: var(--vp-c-text-3);
}
.ntd__frontier {
  margin: 0;
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
  font-style: italic;
}
</style>
