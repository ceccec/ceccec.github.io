<script setup lang="ts">
import { CheckboxIndicator, CheckboxRoot } from 'radix-vue'
import { cn } from '../../../lib/cn.ts'

const props = defineProps<{ class?: string; checked?: boolean | 'indeterminate' }>()
const emit = defineEmits<{ 'update:checked': [value: boolean | 'indeterminate'] }>()
</script>

<template>
  <CheckboxRoot
    :class="cn('ui-checkbox', props.class)"
    data-shadcn="checkbox"
    :checked="checked"
    @update:checked="emit('update:checked', $event)"
  >
    <CheckboxIndicator class="ui-checkbox__indicator">✓</CheckboxIndicator>
  </CheckboxRoot>
</template>
