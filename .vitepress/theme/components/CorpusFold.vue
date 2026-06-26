<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import type { UniversalPage } from '../../../src/wind/routes/corpus/index.ts'
import DecodedCard from './DecodedCard.vue'

const { params } = useData()

const view = computed(() => {
  const page = (params.value as { universal?: UniversalPage })?.universal
  if (!page) return null
  return (
    page.decoded ?? {
      title: page.title,
      statement: page.description,
      ok: Boolean(page.proof),
    }
  )
})
</script>

<template>
  <DecodedCard v-if="view" v-bind="view" skip-title />
</template>
