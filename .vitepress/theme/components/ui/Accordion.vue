<script setup lang="ts">
import { AccordionRoot } from 'radix-vue'
import { cn } from '../../../lib/cn.ts'

const props = withDefaults(
  defineProps<{ class?: string; type?: 'single' | 'multiple'; collapsible?: boolean }>(),
  { type: 'single', collapsible: true },
)
</script>

<template>
  <AccordionRoot
    :class="cn('ui-accordion', props.class)"
    data-shadcn="accordion"
    :type="type"
    :collapsible="collapsible"
  >
    <slot />
  </AccordionRoot>
</template>
