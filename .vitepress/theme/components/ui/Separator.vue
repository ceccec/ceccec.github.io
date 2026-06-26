<script setup lang="ts">
import { Separator } from 'radix-vue'
import { cn } from '../../../lib/cn.ts'

const props = withDefaults(defineProps<{ class?: string; orientation?: 'horizontal' | 'vertical' }>(), {
  orientation: 'horizontal',
})
</script>

<template>
  <Separator
    :class="cn('ui-separator', props.orientation === 'vertical' && 'ui-separator--vertical', props.class)"
    data-shadcn="separator"
    :orientation="orientation"
  />
</template>
