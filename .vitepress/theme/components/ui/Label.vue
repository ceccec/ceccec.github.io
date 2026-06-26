<script setup lang="ts">
import { Label } from 'radix-vue'
import { cn } from '../../../lib/cn.ts'

const props = defineProps<{ class?: string; for?: string }>()
</script>

<template>
  <Label :class="cn('ui-label', props.class)" data-shadcn="label" :for="props.for">
    <slot />
  </Label>
</template>
