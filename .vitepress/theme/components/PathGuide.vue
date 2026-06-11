<script setup lang="ts">
import { computed, ref } from 'vue'
import { buildMatrix, path } from '../lib/quantumMind'
import { useLocale } from '../lib/useLocale'

// Follow the path. A guided, looping journey through the portal: step along it,
// or jump to any station. Each step says why you are there.
const data = path(buildMatrix())
const here = ref(0)
const { bg, localize } = useLocale()

const bgStation: Record<string, { station: string; why: string }> = {
  Home: { station: 'Начало', why: 'Живият двоен тор и пулсът на портала.' },
  School: { station: 'Училище', why: 'Научи го от основата, на всяка възраст — чрез игра.' },
  Console: { station: 'Конзола', why: 'Питай — и виж как се консултира със себе си, преди да отговори.' },
  Commands: { station: 'Команди', why: 'Всяка способност, именувана и изпълнима.' },
  MCP: { station: 'MCP', why: 'Същата повърхност, за AI агенти.' },
  Mind: { station: 'Ум', why: 'Формата: двойният тор, меркабата, ритъмът.' },
  Architecture: { station: 'Архитектура', why: 'Печатът, доказателствата и цената да го подправиш.' },
  Explore: { station: 'Изследвай', why: 'Мистериите и златната хармонична спирала.' },
  Governance: { station: 'Управление', why: 'Обществото, сдвоено и сгънато.' },
  Academy: { station: 'Академия', why: 'Структурирани пътеки и проверим акредитив.' },
  Show: { station: 'Покажи', why: 'Всичко в действие, слято в една вълна.' },
}
const items = computed(() =>
  data.stations.map((s) => ({
    ...s,
    label: bg.value ? bgStation[s.station]?.station ?? s.station : s.station,
    why: bg.value ? bgStation[s.station]?.why ?? s.why : s.why,
    link: localize(s.route),
  })),
)
const current = computed(() => items.value[here.value])
function step(delta: number) {
  here.value = (here.value + delta + items.value.length) % items.value.length
}
const t = computed(() =>
  bg.value
    ? { eyebrow: 'следвай пътя', prev: 'Назад', next: 'Напред', go: 'Иди', of: 'от' }
    : { eyebrow: 'follow the path', prev: 'Back', next: 'Next', go: 'Go', of: 'of' },
)
</script>

<template>
  <section class="path dt-card">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <ol class="path__list">
      <li v-for="(item, i) in items" :key="item.route" :class="{ here: i === here }" @click="here = i">
        <span class="path__num">{{ item.step }}</span>
        <a :href="item.link" class="path__station">{{ item.label }}</a>
        <span class="path__why">{{ item.why }}</span>
      </li>
    </ol>
    <div class="path__nav">
      <button type="button" class="dt-btn dt-btn--outline" @click="step(-1)">← {{ t.prev }}</button>
      <span class="path__pos">{{ here + 1 }} {{ t.of }} {{ items.length }}</span>
      <a class="path__go dt-btn" :href="current.link">{{ t.go }} → {{ current.label }}</a>
      <button type="button" class="dt-btn dt-btn--outline" @click="step(1)">{{ t.next }} →</button>
    </div>
  </section>
</template>

<style scoped>
.path {
  margin: 1.5rem 0;
  border-radius: 14px;
  padding: 1.2rem 1.4rem;
}
.path__list {
  list-style: none;
  padding: 0;
  margin: 0.3rem 0 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.path__list li {
  display: grid;
  grid-template-columns: 1.6rem auto 1fr;
  align-items: baseline;
  gap: 0.5rem;
  padding: 0.3rem 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  border-left: 3px solid transparent;
}
.path__list li.here {
  background: var(--vp-c-brand-soft);
  border-left-color: var(--vp-c-brand-1);
}
.path__num {
  color: var(--vp-c-text-3);
  font-size: 0.8rem;
  text-align: right;
}
.path__station {
  font-weight: 600;
  text-decoration: none;
}
.path__why {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}
.path__nav {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  flex-wrap: wrap;
}
.path__nav button {
  padding: 0.35rem 0.9rem;
  font-size: 0.8rem;
}
.path__pos {
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
}
.path__go {
  padding: 0.35rem 1rem;
  text-decoration: none;
  font-size: 0.82rem;
}
</style>
