<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import type { UniversalPage } from '../../../src/routes/corpus/index.ts'
import { useCardMovie, useSiteLocale } from '../../lib/mounts'
import DecodedCard from './DecodedCard.vue'

function headingId(text: string, suffix: string): string {
  const base = text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 48)
  return base ? `${base}-${suffix}` : suffix
}

const { params } = useData()
const route = useRoute()
const { pick } = useSiteLocale()

const page = computed(
  () => (params.value as { universal?: UniversalPage })?.universal as UniversalPage,
)

const { cardStyle } = useCardMovie(() => {
  const p = page.value
  return p ? [p.title, p.cardSeed, route.path] : []
})
</script>

<template>
  <article v-if="page" class="universal-page vp-doc" :style="cardStyle" data-shadcn="card">
    <header v-if="page.kind === 'monograph'" class="universal-page__hero">
      <h1 :id="headingId(page.title, 'title')">{{ page.title }}</h1>
    </header>

    <DecodedCard
      v-if="page.decoded"
      v-bind="page.decoded"
      :title-level="page.kind === 'monograph' ? 3 : 2"
    />

    <div v-if="page.kind === 'monograph'" class="page-body">
      <template v-for="group in page.groups.groups" :key="group.glyph">
        <h2
          v-if="group.grouped"
          class="rosetta-ray"
          :id="headingId(pick(group.labelEn, group.labelBg), group.glyph)"
          :data-ray="group.ray"
          :style="{ '--ray-hue': group.hue }"
        >
          <span class="rosetta-ray__glyph">{{ group.glyph }}</span>
          <span class="rosetta-ray__name">{{ pick(group.labelEn, group.labelBg) }}</span>
        </h2>
        <ClientOnly>
          <div v-for="name in group.components" :key="name" class="living">
            <component :is="name" />
          </div>
        </ClientOnly>
      </template>
    </div>

    <p v-if="page.proof" class="page-proof">
      <span class="proof__ok">{{ page.proofOk }}</span>
      <code>{{ page.proof }}</code>
    </p>
  </article>
</template>

<script lang="ts">
export default { name: 'UniversalPageTemplate' }
</script>

<style scoped>
.universal-page__hero {
  margin-bottom: var(--vp-movie-gap, 0.75rem);
}

.universal-page__hero h1 {
  margin: 0 0 calc(var(--vp-movie-gap, 0.5rem) * 0.75);
  text-shadow: var(--vp-hero-text-shadow);
}

.page-body {
  display: flex;
  flex-direction: column;
  gap: calc(var(--vp-movie-gap, 0.5rem) * 1.5);
}

.rosetta-ray {
  margin: 0;
  font-weight: 600;
}

.living + .living {
  margin-top: calc(var(--vp-movie-gap, 0.5rem) * 0.5);
}

.page-proof {
  margin: calc(var(--vp-movie-gap, 0.75rem) * 1.5) 0 0;
  text-shadow: var(--vp-hero-text-shadow);
}
</style>
