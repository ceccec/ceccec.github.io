<script setup lang="ts">
// ☴ Xùn · Wind · gentle · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 48, glyph: '☴', lo: '☷', up: '☴', color: '#FF0000', name: 'RevolutAside' }
import { computed } from 'vue'
import { useLocale } from '../lib'

const { bg } = useLocale()
const label = computed(() => (bg.value ? 'монетизация' : 'monetisation'))
</script>

<template>
  <aside class="revolut-aside" aria-label="Monetisation link" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="revolut-aside__label">{{ label }}</p>
    <a class="revolut-aside__link" href="https://revolut.me/ceccec" target="_blank" rel="noopener noreferrer">
      Revolut
    </a>
    <p class="revolut-aside__formula">return -> source</p>
  </aside>
</template>
