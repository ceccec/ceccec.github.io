<script setup lang="ts">
import { AspectRatio } from 'radix-vue'
import { cn } from '../../../lib/cn.ts'

const props = withDefaults(defineProps<{ class?: string; ratio?: number }>(), { ratio: 1 })
</script>

<template>
  <AspectRatio :class="cn('ui-aspect-ratio', props.class)" data-shadcn="aspect-ratio" :ratio="ratio">
    <slot />
  </AspectRatio>
</template>
