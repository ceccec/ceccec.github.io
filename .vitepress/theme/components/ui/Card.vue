<script setup lang="ts">
import { cn } from '../../../lib/cn.ts'

const props = defineProps<{ ghost?: boolean; class?: string; style?: Record<string, string> | string }>()
</script>

<template>
  <article
    :class="cn('ui-card', props.ghost && 'ui-card--ghost', props.class)"
    :style="props.style"
    data-shadcn="card"
  >
    <slot />
  </article>
</template>
