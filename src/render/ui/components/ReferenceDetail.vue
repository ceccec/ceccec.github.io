<script setup>
// ☲ Lí · Fire · clinging · upper·yang · breath — self-referencing 10D widget
const ICHING_MASK = { hexagram: 43, name: 'Guài', glyph: '☲☱', lower: 'Duì', upper: 'Lí', color: '#F0F0FF' }
import { useData } from 'vitepress'
import { useLocale } from '../lib'

const props = defineProps({ params: { type: Object, required: true } })
const { localize } = useLocale()
</script>

<template>
  <div v-if="params" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="paper-eyebrow">Double Torus · reference {{ params.number }} of {{ params.total }}</p>
    <h1>Reference {{ params.number }} — to paper {{ params.number }}</h1>
    <p>This is a <strong>reference only</strong> — the reverse fold of <a :href="localize(`/papers/${params.paperId}`)">paper {{ params.number }}</a>.</p>
    <ul>
      <li>Paper root — <span class="paper-mono">{{ params.refersTo }}</span></li>
      <li>Reference root — <span class="paper-mono">{{ params.root }}</span></li>
    </ul>
    <p class="paper-nav">
      <a v-if="params.number > 1" :href="localize(`/references/r${String(params.number - 1).padStart(3, '0')}`)">← Reference {{ params.number - 1 }}</a>
      <a :href="localize('/references/')">All {{ params.total }} references</a>
      <a :href="localize(`/papers/${params.paperId}`)">Paper {{ params.number }} →</a>
    </p>
  </div>
</template>
