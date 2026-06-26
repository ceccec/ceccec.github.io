<script setup lang="ts">
import { AccordionContent, AccordionHeader, AccordionItem, AccordionTrigger } from 'radix-vue'
import { cn } from '../../../lib/cn.ts'

const props = defineProps<{ class?: string; value: string }>()
</script>

<template>
  <AccordionItem :class="cn('ui-accordion__item', props.class)" :value="value">
    <AccordionHeader class="ui-accordion__header">
      <AccordionTrigger class="ui-accordion__trigger">
        <slot name="trigger" />
      </AccordionTrigger>
    </AccordionHeader>
    <AccordionContent class="ui-accordion__content">
      <slot />
    </AccordionContent>
  </AccordionItem>
</template>
