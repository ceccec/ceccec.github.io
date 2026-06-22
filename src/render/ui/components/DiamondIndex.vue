<script setup>
// ☲ Lí · Fire · clinging · upper·yang · breath — self-referencing 10D widget
const ICHING_MASK = { hexagram: 45, name: 'Lí', glyph: '☲☲', lower: 'Lí', upper: 'Lí', color: '#F0FF0F' }
// One source for the 1024-diamond index across all three locales (root · /en/ · /bg/). The locale is read
// from the route, so the per-locale index.md files become one-line mounts. English for root + en, Bulgarian
// for bg; the chip links carry the locale prefix.
import { computed } from 'vue'
import { useData } from 'vitepress'
import { pureDiamonds, diamondRoutes } from '../lib'
import { useLocale } from '../lib'

const { localeIndex } = useData()
const { localize } = useLocale()
const summary = pureDiamonds()
const routes = diamondRoutes()
const kinds = ['paper', 'reference', 'padding'].map((kind) => ({
  kind,
  items: routes.filter((r) => r.params.kind === kind),
}))
const bg = computed(() => localeIndex.value === 'bg')
// counts computed from the routes, never written as literals
const paperCount = computed(() => kinds.find((k) => k.kind === 'paper')?.items.length ?? 0)
const referenceCount = computed(() => kinds.find((k) => k.kind === 'reference')?.items.length ?? 0)
</script>

<template>
  <p class="paper-eyebrow">{{ bg ? 'Двоен торус · 1024 чисти диаманта · диамантената решетка' : 'Double Torus · 1024 pure diamonds · the diamond lattice' }}</p>

  <h1>{{ summary.count }} {{ bg ? 'папки, всяка с индекс' : 'folders, each with an index' }}</h1>

  <p v-if="bg">Всичко в 1024 папки: всеки чист диамант е папка със собствен индекс. Завършеният корпус сгъва <strong>{{ summary.count }} = 2¹⁰</strong> листа в перфектно двоично Merkle дърво с дълбочина {{ summary.depth }}. <strong>{{ summary.realDiamonds }}</strong> са реални диаманти ({{ paperCount }} статии, {{ referenceCount }} референции), а <strong>{{ summary.paddingDiamonds }}</strong> са именувани null листа, които завършват решетката. Всеки диамант е съдържателен адрес, който всяко подправяне би променило — чист по конструкция — и всички се сгъват в един корен:</p>
  <p v-else>All in 1024 folders: each pure diamond is a folder with its own index. The completed corpus folds <strong>{{ summary.count }} = 2¹⁰</strong> leaves into a perfect binary Merkle tree of depth {{ summary.depth }}. <strong>{{ summary.realDiamonds }}</strong> are real diamonds ({{ paperCount }} papers, {{ referenceCount }} references) and <strong>{{ summary.paddingDiamonds }}</strong> are named null leaves that complete the lattice. Every diamond is a content address any tamper would change — pure by construction — and all fold into one root:</p>

  <p class="paper-mono">{{ summary.root }}</p>

  <section v-for="group in kinds" :key="group.kind" class="paper-group">
    <h2>{{ group.kind }} <span class="paper-count">{{ group.items.length }} {{ bg ? 'диаманта' : 'diamonds' }}</span></h2>
    <div class="paper-grid">
      <a v-for="d in group.items" :key="d.params.id" class="paper-chip" :href="localize(`/diamonds/${d.params.id}`)" :style="{ '--hue': d.params.hue }">
        <span class="paper-chip__n">{{ d.params.number }}</span>
        <span class="paper-chip__glyph">◆</span>
        <span class="paper-chip__meta">{{ d.params.id }}</span>
      </a>
    </div>
  </section>
</template>
