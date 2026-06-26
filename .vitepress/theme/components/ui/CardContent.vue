<script setup lang="ts">
import { cn } from '../../../lib/cn.ts'

const props = defineProps<{ class?: string }>()
</script>

<template>
  <div :class="cn('ui-card__content', props.class)">
    <slot />
  </div>
</template>
