<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import type { UniversalPage } from '../../../src/routes/corpus/index.ts'
import { useCardMovie, useSiteLocale } from '../../lib/mounts'
import DecodedCard from './DecodedCard.vue'

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
  <article v-if="page" class="universal-page" :style="cardStyle" data-shadcn="card">
    <header v-if="page.kind === 'monograph'" class="universal-page__hero">
      <h1>{{ page.title }}</h1>
    </header>

    <DecodedCard
      v-if="page.decoded"
      v-bind="page.decoded"
    />

    <div v-if="page.kind === 'monograph'" class="page-body">
      <template v-for="group in page.groups.groups" :key="group.glyph">
        <p
          v-if="group.grouped"
          class="rosetta-ray"
          :data-ray="group.ray"
          :style="{ '--ray-hue': group.hue }"
        >
          <span class="rosetta-ray__glyph">{{ group.glyph }}</span>
          <span class="rosetta-ray__name">{{ pick(group.labelEn, group.labelBg) }}</span>
        </p>
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

.living + .living {
  margin-top: calc(var(--vp-movie-gap, 0.5rem) * 0.5);
}

.page-proof {
  margin: calc(var(--vp-movie-gap, 0.75rem) * 1.5) 0 0;
  font-size: calc(0.82rem + var(--vp-movie-gap, 0.5rem) * 0.06);
  opacity: var(--vp-movie-fade, 0.7);
  line-height: var(--vp-movie-line-height, 1.45);
  text-shadow: var(--vp-hero-text-shadow);
}

.page-proof code {
  font-size: 0.92em;
}
</style>
