<script setup lang="ts">
import { CollapsibleRoot, CollapsibleTrigger, CollapsibleContent } from 'radix-vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const collapsibleVariants = cva('ui-collapsible', {
  variants: {
    variant: {
      default: 'ui-collapsible--default',
      ghost: 'ui-collapsible--ghost',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type CollapsibleVariants = VariantProps<typeof collapsibleVariants>

const props = withDefaults(
  defineProps<{
    as?: string
    class?: string
    variant?: CollapsibleVariants['variant']
    /** Controlled open state (use with v-model:open). */
    open?: boolean
    /** Uncontrolled initial open state. */
    defaultOpen?: boolean
    disabled?: boolean
  }>(),
  {
    as: 'div',
    variant: 'default',
    defaultOpen: false,
    disabled: false,
  },
)

defineEmits<{ 'update:open': [value: boolean] }>()
</script>

<template>
  <CollapsibleRoot
    :as="props.as"
    :open="props.open"
    :default-open="props.defaultOpen"
    :disabled="props.disabled"
    :class="cn(collapsibleVariants({ variant: props.variant }), props.class)"
    @update:open="$emit('update:open', $event)"
  >
    <CollapsibleTrigger class="ui-collapsible__trigger">
      <slot name="trigger" />
    </CollapsibleTrigger>
    <CollapsibleContent class="ui-collapsible__content">
      <slot />
    </CollapsibleContent>
  </CollapsibleRoot>
</template>
