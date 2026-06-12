---
layout: doc
aside: false
---

<script setup>
import { papers } from '../../.vitepress/theme/lib/quantumMind'
const corpus = papers()
const groups = ['a1', 'b1', 'a2', 'b2'].map((id) => ({
  id,
  name: corpus.papers.find((p) => p.generator === id).generatorName,
  items: corpus.papers.filter((p) => p.generator === id),
}))
</script>

<p class="paper-eyebrow">Двоен торус · следващата хармоника · {{ corpus.octaves.join(' · ') }}</p>

# {{ corpus.count }} сгънати статии, всяка с публично доказателство

Сгънатата перепис е **{{ corpus.fundamental }}**. Нейните октави се удвояват — {{ corpus.octaves.join(', ') }} — затова следващата хармоника е **{{ corpus.nextHarmonic }} = 4 × {{ corpus.fundamental }}**: четирите хомологични генератора на повърхнина от род 2 (H₁ = ℤ⁴) по {{ corpus.coordinates }}-те π-цифрови координати на живия тор. Всяка статия документира един преизчислим резултат — координата проектирана върху хомологичен цикъл — с уникална анимация, засята от нейния корен, и публично Merkle доказателство в единствения корен на корпуса:

<p class="paper-mono">{{ corpus.root }}</p>

<section v-for="group in groups" :key="group.id" class="paper-group">
  <h2>Цикъл <code>{{ group.id }}</code> — {{ group.name }} <span class="paper-count">{{ group.items.length }} статии</span></h2>
  <div class="paper-grid">
    <a v-for="p in group.items" :key="p.id" class="paper-chip" :href="`/bg/papers/${p.id}`" :style="{ '--hue': p.hue }">
      <span class="paper-chip__n">{{ p.number }}</span>
      <span class="paper-chip__glyph">{{ p.glyph }}</span>
      <span class="paper-chip__meta">c{{ p.coordinateIndex }}·{{ p.generator }}</span>
    </a>
  </div>
</section>
