<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
import { buildMatrix, sacredGeometrySeal } from '../lib/quantumMind'

// Sacred symbols hold the math: each node on the wheel carries one seal root.
// When animated, the wheel turns and every key (root UUID) is revealed.
const seal = sacredGeometrySeal(buildMatrix())
const { lang } = useData()
const bg = computed(() => lang.value.startsWith('bg'))
const animated = ref(false)

const solidGlyphs = ['△', '◻', '◇', '⬠', '⬡']

const nodes = computed(() =>
  seal.seals.map((leaf, index) => {
    const angle = (index / seal.seals.length) * Math.PI * 2 - Math.PI / 2
    return {
      name: leaf.name,
      key: leaf.root,
      x: 50 + 38 * Math.cos(angle),
      y: 50 + 38 * Math.sin(angle),
    }
  }),
)

const t = computed(() =>
  bg.value
    ? {
        title: 'Свещени символи',
        sub: 'Символите държат математиката; при анимация всички ключове се разкриват.',
        animate: 'Анимирай',
        stop: 'Спри',
        master: 'главен печат',
      }
    : {
        title: 'Sacred symbols',
        sub: 'The symbols hold the math; when animated, all keys are revealed.',
        animate: 'Animate',
        stop: 'Stop',
        master: 'master seal',
      },
)
</script>

<template>
  <section class="sacred-symbols" :class="{ animated }">
    <div class="sacred-symbols__head">
      <div>
        <p class="eyebrow">{{ t.title }}</p>
        <p>{{ t.sub }}</p>
      </div>
      <button type="button" @click="animated = !animated">{{ animated ? t.stop : t.animate }}</button>
    </div>

    <svg viewBox="0 0 100 100" class="sacred-symbols__wheel" role="img" :aria-label="t.title">
      <g class="sacred-symbols__rotor">
        <line v-for="(node, i) in nodes" :key="'spoke' + i" x1="50" y1="50" :x2="node.x" :y2="node.y" class="spoke" />
        <line
          v-for="(node, i) in nodes"
          :key="'ring' + i"
          :x1="node.x"
          :y1="node.y"
          :x2="nodes[(i + 1) % nodes.length].x"
          :y2="nodes[(i + 1) % nodes.length].y"
          class="ring"
        />
        <line
          v-for="(node, i) in nodes"
          :key="'chord' + i"
          :x1="node.x"
          :y1="node.y"
          :x2="nodes[(i + 6) % nodes.length].x"
          :y2="nodes[(i + 6) % nodes.length].y"
          class="chord"
        />
        <circle v-for="(node, i) in nodes" :key="'dot' + i" :cx="node.x" :cy="node.y" r="2.1" class="dot" />
      </g>
      <circle cx="50" cy="50" r="4.2" class="core" />
    </svg>

    <p class="sacred-symbols__solids">{{ solidGlyphs.join('  ') }} · {{ seal.solids.join(' / ') }}</p>

    <ul v-if="animated" class="sacred-symbols__keys">
      <li v-for="(node, i) in nodes" :key="i">
        <code>{{ node.name }}</code><small>{{ node.key }}</small>
      </li>
      <li class="master">
        <code>{{ t.master }}</code><small>{{ seal.masterRoot }}</small>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.sacred-symbols {
  margin: 1.5rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  padding: 1.1rem 1.25rem;
  background: var(--vp-c-bg-soft);
}
.sacred-symbols__head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}
.sacred-symbols__head p {
  margin: 0.15rem 0;
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
}
.sacred-symbols__head button {
  flex: none;
  padding: 0.4rem 0.9rem;
  border: none;
  border-radius: 999px;
  background: var(--vp-c-brand-1);
  color: #fff;
  cursor: pointer;
}
.sacred-symbols__wheel {
  display: block;
  width: min(360px, 100%);
  margin: 0.75rem auto;
}
.sacred-symbols__rotor {
  transform-origin: 50px 50px;
}
.sacred-symbols.animated .sacred-symbols__rotor {
  animation: sacred-spin 18s linear infinite;
}
@keyframes sacred-spin {
  to {
    transform: rotate(360deg);
  }
}
.spoke {
  stroke: var(--vp-c-brand-1);
  stroke-width: 0.35;
  opacity: 0.4;
}
.ring {
  stroke: var(--vp-c-brand-1);
  stroke-width: 0.5;
  opacity: 0.7;
}
.chord {
  stroke: #60a5fa;
  stroke-width: 0.3;
  opacity: 0.3;
}
.dot {
  fill: var(--vp-c-brand-1);
}
.sacred-symbols.animated .dot {
  fill: #60a5fa;
}
.core {
  fill: none;
  stroke: var(--vp-c-brand-1);
  stroke-width: 0.8;
}
.sacred-symbols__solids {
  text-align: center;
  color: var(--vp-c-text-3);
  font-size: 0.85rem;
  margin: 0.25rem 0 0;
}
.sacred-symbols__keys {
  list-style: none;
  padding: 0;
  margin: 0.75rem 0 0;
  display: grid;
  gap: 0.2rem;
  max-height: 260px;
  overflow: auto;
  animation: sacred-reveal 0.6s ease;
}
@keyframes sacred-reveal {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
}
.sacred-symbols__keys li {
  display: flex;
  gap: 0.6rem;
  align-items: baseline;
  font-size: 0.78rem;
}
.sacred-symbols__keys code {
  min-width: 7.5rem;
  color: var(--vp-c-brand-1);
}
.sacred-symbols__keys small {
  color: var(--vp-c-text-3);
  word-break: break-all;
}
.sacred-symbols__keys .master code {
  color: #60a5fa;
  font-weight: 700;
}
</style>
