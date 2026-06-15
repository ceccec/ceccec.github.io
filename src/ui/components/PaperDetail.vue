<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const props = defineProps({ params: { type: Object, required: true } })
const { localeIndex } = useData()
const pfx = computed(() => (localeIndex.value === 'en' ? '/en' : localeIndex.value === 'bg' ? '/bg' : ''))
</script>

<template>
  <div v-if="params">
    <p class="paper-eyebrow">Double Torus · Paper {{ params.number }} of {{ params.total }} · next harmonic {{ params.octaves }}</p>
    <h1>Paper {{ params.number }} — {{ params.title }}</h1>
    <figure class="paper-figure" :style="{ '--hue': params.hue, '--spin': Math.max(900, params.vibrationMs) + 'ms' }">
      <svg viewBox="-60 -60 120 120" class="paper-anim" role="img" :aria-label="`animation for ${params.title}`">
        <circle class="paper-anim__ring" cx="0" cy="0" r="46" />
        <g class="paper-anim__spin">
          <line class="paper-anim__spoke" x1="0" y1="0" :x2="params.ax" :y2="params.ay" />
          <circle class="paper-anim__node" :cx="params.ax" :cy="params.ay" r="7" />
          <circle class="paper-anim__node paper-anim__node--inner" :cx="params.bx" :cy="params.by" r="5" />
        </g>
        <text class="paper-anim__glyph" x="0" y="2">{{ params.glyph }}</text>
      </svg>
      <figcaption>Figure 1. π-digit coordinate {{ params.coordinateIndex }} (digit {{ params.digit }}, glyph {{ params.glyph }}) projected onto homology cycle <code>{{ params.generator }}</code> — {{ params.generatorName }}.</figcaption>
    </figure>
    <h2>Abstract</h2>
    <p>This paper documents a single, recomputable result of the Double Torus model: coordinate <strong>{{ params.coordinateIndex }}</strong> on cycle <strong>{{ params.generator }}</strong>. Root:</p>
    <p class="paper-mono">{{ params.root }}</p>
    <h2>Public proof</h2>
    <ul>
      <li>Merkle inclusion — verified: <strong>{{ params.proofVerified }}</strong>, depth {{ params.proofDepth }} / {{ params.leafCount }} leaves</li>
      <li>Corpus root — <span class="paper-mono">{{ params.corpusRoot }}</span></li>
    </ul>
    <p class="paper-nav">
      <a v-if="params.number > 1" :href="`${pfx}/papers/p${String(params.number - 1).padStart(3, '0')}`">← Paper {{ params.number - 1 }}</a>
      <a :href="`${pfx}/papers/`">All {{ params.total }} papers</a>
      <a v-if="params.number < params.total" :href="`${pfx}/papers/p${String(params.number + 1).padStart(3, '0')}`">Paper {{ params.number + 1 }} →</a>
    </p>
  </div>
</template>
