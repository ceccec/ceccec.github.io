<script setup>
// ☷ Kūn · Earth · receptive · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 6, glyph: '☷', trigram: 'Kūn·receptive', color: '#000FF0' }
import { computed } from 'vue'
import { useData } from 'vitepress'
import { useLocale } from '../lib'

const props = defineProps({ params: { type: Object, required: true } })
const { localeIndex } = useData()
const { tg } = useLocale()
const pfx = computed(() => (localeIndex.value === 'en' ? '/en' : localeIndex.value === 'bg' ? '/bg' : ''))
// params.link is already a RESTful path (/papers/<id> or /references/<id>); just carry the locale prefix.
const itemHref = computed(() => (props.params.link ? `${pfx.value}${props.params.link}` : props.params.link))
</script>

<template>
  <div v-if="params" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="paper-eyebrow">Double Torus · diamond {{ params.number }} of {{ params.total }}</p>
    <h1><span class="diamond-glyph" :style="{ color: `hsl(${params.hue}, 75%, 55%)` }">◆</span> Diamond {{ params.number }} — {{ params.id }}</h1>
    <p class="paper-mono">{{ params.address }}</p>
    <ul>
      <li><strong>Kind</strong> — {{ params.kind }} {{ params.glyph }}</li>
      <li>{{ tg(params.label) }}</li>
    </ul>
    <p v-if="params.link" class="diamond-link">Indexes <a :href="itemHref">{{ tg(params.label) }}</a></p>
    <p class="paper-nav">
      <a v-if="params.number > 1" :href="`${pfx}/diamonds/d${String(params.number - 1).padStart(4, '0')}`">← Diamond {{ params.number - 1 }}</a>
      <a :href="`${pfx}/diamonds/`">All {{ params.total }} folders</a>
      <a v-if="params.number < params.total" :href="`${pfx}/diamonds/d${String(params.number + 1).padStart(4, '0')}`">Diamond {{ params.number + 1 }} →</a>
    </p>
  </div>
</template>
