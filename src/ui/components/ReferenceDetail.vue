<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const props = defineProps({ params: { type: Object, required: true } })
const { localeIndex } = useData()
const pfx = computed(() => (localeIndex.value === 'en' ? '/en' : localeIndex.value === 'bg' ? '/bg' : ''))
</script>

<template>
  <div v-if="params">
    <p class="paper-eyebrow">Double Torus · reference {{ params.number }} of {{ params.total }}</p>
    <h1>Reference {{ params.number }} — to paper {{ params.number }}</h1>
    <p>This is a <strong>reference only</strong> — the reverse fold of <a :href="`${pfx}/papers?id=${params.paperId}`">paper {{ params.number }}</a>.</p>
    <ul>
      <li>Paper root — <span class="paper-mono">{{ params.refersTo }}</span></li>
      <li>Reference root — <span class="paper-mono">{{ params.root }}</span></li>
    </ul>
    <p class="paper-nav">
      <a v-if="params.number > 1" :href="`${pfx}/references?id=r${String(params.number - 1).padStart(3, '0')}`">← Reference {{ params.number - 1 }}</a>
      <a :href="`${pfx}/references/`">All {{ params.total }} references</a>
      <a :href="`${pfx}/papers?id=${params.paperId}`">Paper {{ params.number }} →</a>
    </p>
  </div>
</template>
