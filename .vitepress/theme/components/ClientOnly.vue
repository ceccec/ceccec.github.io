<script setup lang="ts">
import { onMounted, ref } from 'vue'

const ready = ref(false)

onMounted(() => {
  ready.value = true
})
</script>

<template>
  <slot v-if="ready" />
</template>
