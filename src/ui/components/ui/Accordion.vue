<script setup lang="ts">
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from 'radix-vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib'

const accordionVariants = cva('ui-accordion', {
  variants: {
    variant: {
      default: 'ui-accordion--default',
      separated: 'ui-accordion--separated',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type AccordionVariants = VariantProps<typeof accordionVariants>

interface AccordionItemData {
  value: string
  title: string
  content?: string
  disabled?: boolean
}

const props = withDefaults(
  defineProps<{
    class?: string
    variant?: AccordionVariants['variant']
    /** Whether one ("single") or many ("multiple") panels may be open at once. */
    type?: 'single' | 'multiple'
    /** When type is "single", allow closing the open panel by clicking it again. */
    collapsible?: boolean
    /** Disable interaction with every panel. */
    disabled?: boolean
    /** Controlled open value(s) — bind with v-model. */
    modelValue?: string | string[]
    /** Initial open value(s) for the uncontrolled case. */
    defaultValue?: string | string[]
    /** Optional shorthand: render the items from data instead of slots. */
    items?: AccordionItemData[]
  }>(),
  {
    variant: 'default',
    type: 'single',
    collapsible: true,
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: string | string[] | undefined]
}>()

function onUpdate(value: string | string[] | undefined) {
  emit('update:modelValue', value)
}
</script>

<template>
  <AccordionRoot
    :class="cn(accordionVariants({ variant: props.variant }), props.class)"
    :type="(props.type as any)"
    :collapsible="props.collapsible"
    :disabled="props.disabled"
    :model-value="(props.modelValue as any)"
    :default-value="(props.defaultValue as any)"
    @update:model-value="onUpdate"
  >
    <slot>
      <AccordionItem
        v-for="item in props.items"
        :key="item.value"
        :value="item.value"
        :disabled="item.disabled"
        class="ui-accordion__item"
      >
        <AccordionHeader class="ui-accordion__header">
          <AccordionTrigger class="ui-accordion__trigger">
            <span class="ui-accordion__title">{{ item.title }}</span>
            <span class="ui-accordion__icon" aria-hidden="true">+</span>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent class="ui-accordion__content">
          <div class="ui-accordion__body">{{ item.content }}</div>
        </AccordionContent>
      </AccordionItem>
    </slot>
  </AccordionRoot>
</template>
