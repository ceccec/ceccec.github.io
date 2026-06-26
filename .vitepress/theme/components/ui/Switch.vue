<script setup lang="ts">
import { SwitchRoot, SwitchThumb } from 'radix-vue'
import { cn } from '../../../lib/cn.ts'

const props = defineProps<{ class?: string; checked?: boolean }>()
const emit = defineEmits<{ 'update:checked': [value: boolean] }>()
</script>

<template>
  <SwitchRoot
    :class="cn('ui-switch', props.class)"
    data-shadcn="switch"
    :checked="checked"
    @update:checked="emit('update:checked', $event)"
  >
    <SwitchThumb class="ui-switch__thumb" />
  </SwitchRoot>
</template>
