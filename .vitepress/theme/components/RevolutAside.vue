<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()
const label = computed(() => (lang.value.startsWith('bg') ? 'монетизация' : 'monetisation'))
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
