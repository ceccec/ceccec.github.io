<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const props = defineProps({ params: { type: Object, required: true } })
const { localeIndex } = useData()
const pfx = computed(() => (localeIndex.value === 'en' ? '/en' : localeIndex.value === 'bg' ? '/bg' : ''))
const itemHref = computed(() => {
  if (props.params.kind === 'paper') return `${pfx}/papers?id=${props.params.link.split('/').pop()}`
  if (props.params.kind === 'reference') return `${pfx}/references?id=${props.params.link.split('/').pop()}`
  return props.params.link
})
</script>

<template>
  <div v-if="params">
    <p class="paper-eyebrow">Double Torus · diamond {{ params.number }} of {{ params.total }}</p>
    <h1><span class="diamond-glyph" :style="{ color: `hsl(${params.hue}, 75%, 55%)` }">◆</span> Diamond {{ params.number }} — {{ params.id }}</h1>
    <p class="paper-mono">{{ params.address }}</p>
    <ul>
      <li><strong>Kind</strong> — {{ params.kind }} {{ params.glyph }}</li>
      <li>{{ params.label }}</li>
    </ul>
    <p v-if="params.link" class="diamond-link">Indexes <a :href="itemHref">{{ params.label }}</a></p>
    <p class="paper-nav">
      <a v-if="params.number > 1" :href="`${pfx}/diamonds?id=d${String(params.number - 1).padStart(4, '0')}`">← Diamond {{ params.number - 1 }}</a>
      <a :href="`${pfx}/diamonds/`">All {{ params.total }} folders</a>
      <a v-if="params.number < params.total" :href="`${pfx}/diamonds?id=d${String(params.number + 1).padStart(4, '0')}`">Diamond {{ params.number + 1 }} →</a>
    </p>
  </div>
</template>
