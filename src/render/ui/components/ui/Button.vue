<script setup lang="ts">
import { Primitive } from 'radix-vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib'

const buttonVariants = cva('ui-button', {
  variants: {
    variant: {
      default: 'ui-button--default',
      outline: 'ui-button--outline',
      ghost: 'ui-button--ghost',
    },
    size: {
      sm: 'ui-button--sm',
      md: 'ui-button--md',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

type ButtonVariants = VariantProps<typeof buttonVariants>

const props = withDefaults(
  defineProps<{
    as?: string
    class?: string
    variant?: ButtonVariants['variant']
    size?: ButtonVariants['size']
  }>(),
  {
    as: 'button',
    variant: 'default',
    size: 'md',
  },
)
</script>

<template>
  <Primitive :as="props.as" :class="cn(buttonVariants({ variant: props.variant, size: props.size }), props.class)">
    <slot />
  </Primitive>
</template>
