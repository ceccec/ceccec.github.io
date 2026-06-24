<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import type { UniversalPage } from '../../../src/routes/corpus/index.ts'
import { componentPages } from '../../../src/heaven/balance/index.ts'
import { localeFromRoute, pickLocale, staticPages } from '../../../src/site/index'
import DecodedCard from './DecodedCard.vue'

const props = defineProps<{
  slug?: string
  variant?: string
}>()

const route = useRoute()
const { params } = useData()

const view = computed(() => {
  if (props.slug) {
    const locale = localeFromRoute(route.path)
    const page = [...staticPages(), ...componentPages()].find((entry) => entry.slug === props.slug)
    if (!page) return null
    return {
      title: pickLocale(locale, page.title.en, page.title.bg),
      statement: pickLocale(locale, page.description.en, page.description.bg),
      facets: page.components.slice(0, 4).map((name) => ({ facet: name, on: true })),
      ok: true,
    }
  }

  const page = (params.value as { universal?: UniversalPage })?.universal
  if (!page) return null
  return (
    page.decoded ?? {
      title: page.title,
      statement: page.description,
      facets: page.proof ? [{ facet: page.proof.slice(0, 24), on: true }] : [],
      ok: Boolean(page.proof),
    }
  )
})
</script>

<template>
  <DecodedCard v-if="view" v-bind="view" :data-variant="props.variant" />
</template>
