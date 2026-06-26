<script setup lang="ts">
import { ProgressIndicator, ProgressRoot } from 'radix-vue'
import { cn } from '../../../lib/cn.ts'

const props = withDefaults(defineProps<{ class?: string; value?: number; max?: number }>(), {
  value: 0,
  max: 100,
})
</script>

<template>
  <ProgressRoot
    :class="cn('ui-progress', props.class)"
    data-shadcn="progress"
    :model-value="value"
    :max="max"
  >
    <ProgressIndicator class="ui-progress__indicator" />
  </ProgressRoot>
</template>
