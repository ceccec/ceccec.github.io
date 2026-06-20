<script setup lang="ts">
import { Primitive } from 'radix-vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const textareaVariants = cva('ui-textarea', {
  variants: {
    variant: {
      default: 'ui-textarea--default',
      ghost: 'ui-textarea--ghost',
    },
    size: {
      sm: 'ui-textarea--sm',
      md: 'ui-textarea--md',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

type TextareaVariants = VariantProps<typeof textareaVariants>

const props = withDefaults(
  defineProps<{
    as?: string
    class?: string
    variant?: TextareaVariants['variant']
    size?: TextareaVariants['size']
  }>(),
  {
    as: 'textarea',
    variant: 'default',
    size: 'md',
  },
)
</script>

<template>
  <Primitive :as="props.as" :class="cn(textareaVariants({ variant: props.variant, size: props.size }), props.class)">
    <slot />
  </Primitive>
</template>
