<script setup lang="ts">
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'radix-vue'
import { cn } from '../../../lib/cn.ts'

const props = defineProps<{ class?: string; open?: boolean; defaultOpen?: boolean }>()
const emit = defineEmits<{ 'update:open': [value: boolean] }>()
</script>

<template>
  <CollapsibleRoot
    :class="cn('ui-collapsible', props.class)"
    data-shadcn="collapsible"
    :open="open"
    :default-open="defaultOpen"
    @update:open="emit('update:open', $event)"
  >
    <CollapsibleTrigger class="ui-collapsible__trigger">
      <slot name="trigger" />
    </CollapsibleTrigger>
    <CollapsibleContent class="ui-collapsible__content">
      <slot />
    </CollapsibleContent>
  </CollapsibleRoot>
</template>
