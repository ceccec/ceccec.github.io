<script setup>
// One mount for papers, references and diamonds — RESTful, via the VitePress router only. The resource
// id lives in the PATH: /papers/<id> is the [id] dynamic route, and its params (precomputed by the
// matching [id].paths.ts → paperRoutes/paperReferenceRoutes/diamondRoutes) arrive through useData().
// No params → the index list (/papers); params with an id → the detail. No ?id= query, no second router.
import { computed } from 'vue'
import { useData } from 'vitepress'
import PaperIndex from './PaperIndex.vue'
import ReferenceIndex from './ReferenceIndex.vue'
import DiamondIndex from './DiamondIndex.vue'
import PaperDetail from './PaperDetail.vue'
import ReferenceDetail from './ReferenceDetail.vue'
import DiamondDetail from './DiamondDetail.vue'

defineProps({ kind: { type: String, required: true } })
const { params } = useData()
const detail = computed(() => (params.value && params.value.id ? params.value : null))
</script>

<template>
  <PaperDetail v-if="kind === 'papers' && detail" :params="detail" />
  <PaperIndex v-else-if="kind === 'papers'" />
  <ReferenceDetail v-else-if="kind === 'references' && detail" :params="detail" />
  <ReferenceIndex v-else-if="kind === 'references'" />
  <DiamondDetail v-else-if="kind === 'diamonds' && detail" :params="detail" />
  <DiamondIndex v-else-if="kind === 'diamonds'" />
</template>
