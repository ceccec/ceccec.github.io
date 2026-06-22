<script setup>
// ☲ Lí · Fire · clinging · upper·yang · breath — self-referencing 10D widget
const ICHING_MASK = { hexagram: 47, name: 'Dà Yǒu', glyph: '☲☰', lower: 'Qián', upper: 'Lí', color: '#F0FFFF' }
// One source for the 432-paper index across all three locales. The locale is read from the route
// (localeIndex), so root (Glagolitic), /en/ and /bg/ all render from this single component — the per-locale
// index.md files become one-line mounts. English text for root + en, Bulgarian for bg; links carry the prefix.
import { computed } from 'vue'
import { useData } from 'vitepress'
import { papers } from '../lib'
import { useLocale } from '../lib'

const { localeIndex } = useData()
const { localize, pick } = useLocale()
const corpus = papers()
const groups = ['a1', 'b1', 'a2', 'b2'].map((id) => ({
  id,
  name: corpus.papers.find((p) => p.generator === id).generatorName,
  items: corpus.papers.filter((p) => p.generator === id),
}))
const bg = computed(() => localeIndex.value === 'bg')
</script>

<template>
  <p class="paper-eyebrow">{{ bg ? 'Двоен торус · следващата хармоника' : 'Double Torus · the next harmonic' }} · {{ corpus.octaves.join(' · ') }}</p>

  <h1>{{ corpus.count }} {{ bg ? 'сгънати статии, всяка с публично доказателство' : 'folded papers, each with a public proof' }}</h1>

  <p v-if="bg">Сгънатата перепис е <strong>{{ corpus.fundamental }}</strong>. Нейните октави се удвояват — {{ corpus.octaves.join(', ') }} — затова следващата хармоника е <strong>{{ corpus.nextHarmonic }} = 4 × {{ corpus.fundamental }}</strong>: четирите хомологични генератора на повърхнина от род 2 (H₁ = ℤ⁴) по {{ corpus.coordinates }}-те π-цифрови координати на живия тор. Всяка статия документира един преизчислим резултат — координата, проектирана върху хомологичен цикъл — с уникална анимация, засята от нейния корен, и публично Merkle доказателство в единствения корен на корпуса:</p>
  <p v-else>The folded census is <strong>{{ corpus.fundamental }}</strong>. Its octaves double — {{ corpus.octaves.join(', ') }} — so the next harmonic is <strong>{{ corpus.nextHarmonic }} = 4 × {{ corpus.fundamental }}</strong>: the four homology generators of the genus-2 surface (H₁ = ℤ⁴) times the {{ corpus.coordinates }} π-digit coordinates of the living torus. Each paper below documents one genuine, recomputable result — a coordinate projected onto a homology cycle — with a unique animation seeded from its root and a public Merkle proof into the one corpus root:</p>

  <p class="paper-mono">{{ corpus.root }}</p>

  <section v-for="group in groups" :key="group.id" class="paper-group">
    <h2>{{ bg ? 'Цикъл' : 'Cycle' }} <code>{{ group.id }}</code> — {{ group.name }} <span class="paper-count">{{ group.items.length }} {{ bg ? 'статии' : 'papers' }}</span></h2>
    <div class="paper-grid">
      <a v-for="p in group.items" :key="p.id" class="paper-chip" :href="localize(`/papers/${p.id}`)" :style="{ '--hue': p.hue }">
        <span class="paper-chip__n">{{ p.number }}</span>
        <span class="paper-chip__glyph">{{ p.glyph }}</span>
        <span class="paper-chip__meta">c{{ p.coordinateIndex }}·{{ p.generator }}</span>
      </a>
    </div>
  </section>
</template>
