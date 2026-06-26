<script setup lang="ts">
import { cn } from '../../../lib/cn.ts'

const props = defineProps<{ class?: string; modelValue?: string; rows?: number }>()
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
</script>

<template>
  <textarea
    :class="cn('ui-textarea', props.class)"
    data-shadcn="textarea"
    :rows="rows"
    :value="modelValue"
    @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
  />
</template>
