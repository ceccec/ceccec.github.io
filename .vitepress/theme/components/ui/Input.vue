<script setup lang="ts">
import { cn } from '../../../lib/cn.ts'

const props = defineProps<{ class?: string; modelValue?: string }>()
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
</script>

<template>
  <input
    :class="cn('ui-input', props.class)"
    data-shadcn="input"
    :value="modelValue"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>
