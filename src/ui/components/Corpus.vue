<script setup>
// One mount for papers, references and diamonds — same routing simplicity as [page].md +
// monographPaths: ?id= selects an item, corpusParams(kind, id) computes it (local math, no SSG).
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { corpusParams } from '../lib/quantumMind'
import PaperIndex from './PaperIndex.vue'
import ReferenceIndex from './ReferenceIndex.vue'
import DiamondIndex from './DiamondIndex.vue'
import PaperDetail from './PaperDetail.vue'
import ReferenceDetail from './ReferenceDetail.vue'
import DiamondDetail from './DiamondDetail.vue'

const props = defineProps({ kind: { type: String, required: true } })
const route = useRoute()
const id = computed(() => String(route.query.id || ''))
const params = computed(() => (id.value ? corpusParams(props.kind, id.value) : null))
</script>

<template>
  <PaperDetail v-if="kind === 'papers' && params" :params="params" />
  <PaperIndex v-else-if="kind === 'papers'" />
  <ReferenceDetail v-else-if="kind === 'references' && params" :params="params" />
  <ReferenceIndex v-else-if="kind === 'references'" />
  <DiamondDetail v-else-if="kind === 'diamonds' && params" :params="params" />
  <DiamondIndex v-else-if="kind === 'diamonds'" />
</template>
