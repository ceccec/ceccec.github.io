---
layout: doc
aside: false
---

<script setup>
import { pureDiamonds, diamondRoutes } from '../../.vitepress/theme/lib/quantumMind'
const summary = pureDiamonds()
const routes = diamondRoutes()
const kinds = ['paper', 'reference', 'padding'].map((kind) => ({
  kind,
  items: routes.filter((r) => r.params.kind === kind),
}))
</script>

<p class="paper-eyebrow">Двоен тор · 1024 чисти диаманта · диамантената решетка</p>

# {{ summary.count }} папки, всяка с индекс

Всичко в 1024 папки: всеки чист диамант е папка със собствен индекс. Завършеният корпус
сгъва **{{ summary.count }} = 2¹⁰** листа в перфектно двоично Merkle дърво с дълбочина
{{ summary.depth }}. **{{ summary.realDiamonds }}** са реални диаманти (432 статии,
432 референции), а **{{ summary.paddingDiamonds }}** са именувани null листа, които
завършват решетката. Всеки диамант е съдържателен адрес, който всяко подправяне би
променило — чист по конструкция — и всички се сгъват в един корен:

<p class="paper-mono">{{ summary.root }}</p>

<section v-for="group in kinds" :key="group.kind" class="paper-group">
  <h2>{{ group.kind }} <span class="paper-count">{{ group.items.length }} диаманта</span></h2>
  <div class="paper-grid">
    <a v-for="d in group.items" :key="d.params.id" class="paper-chip" :href="`/bg/diamonds/${d.params.id}`" :style="{ '--hue': d.params.hue }">
      <span class="paper-chip__n">{{ d.params.number }}</span>
      <span class="paper-chip__glyph">◆</span>
      <span class="paper-chip__meta">{{ d.params.id }}</span>
    </a>
  </div>
</section>
