<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import type { UniversalPage } from '../../../src/routes/corpus/index.ts'
import { componentPages } from '../../../src/heaven/balance/index.ts'
import { staticPages } from '../../../src/site/index'
import { useSiteLocale } from '../../lib/mounts'
import DecodedCard from './DecodedCard.vue'

const props = defineProps<{
  slug?: string
  variant?: string
}>()

const route = useRoute()
const { params } = useData()
const { pick, componentName } = useSiteLocale()

const view = computed(() => {
  if (props.slug) {
    const page = [...staticPages(), ...componentPages()].find((entry) => entry.slug === props.slug)
    if (!page) return null
    return {
      title: pick(page.title.en, page.title.bg),
      statement: pick(page.description.en, page.description.bg),
      facets: page.components.slice(0, 4).map((name) => ({
        facet: componentName(name),
        on: true,
      })),
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
  <DecodedCard v-if="view" v-bind="view" skip-title :data-variant="props.variant" />
</template>
