<script setup lang="ts">
import { TabsRoot } from 'radix-vue'
import { cn } from '../../../lib/cn.ts'

const props = defineProps<{ class?: string; defaultValue?: string; modelValue?: string }>()
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
</script>

<template>
  <TabsRoot
    :class="cn('ui-tabs', props.class)"
    data-shadcn="tabs"
    :default-value="defaultValue"
    :model-value="modelValue"
    @update:model-value="emit('update:modelValue', String($event))"
  >
    <slot />
  </TabsRoot>
</template>
