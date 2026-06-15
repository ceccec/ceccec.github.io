<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '../lib/useLocale'

const { bg } = useLocale()
const label = computed(() => (bg.value ? 'монетизация' : 'monetisation'))
</script>

<template>
  <aside class="revolut-aside" aria-label="Monetisation link">
    <p class="revolut-aside__label">{{ label }}</p>
    <a class="revolut-aside__link" href="https://revolut.me/ceccec" target="_blank" rel="noopener noreferrer">
      Revolut
    </a>
    <p class="revolut-aside__formula">return -> source</p>
  </aside>
</template>
