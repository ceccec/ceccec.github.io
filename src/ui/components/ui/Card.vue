<script setup lang="ts">
import { cn } from '../../lib'

defineProps<{
  class?: string
}>()
</script>

<template>
  <article :class="cn('ui-card', $props.class)">
    <slot />
  </article>
</template>
