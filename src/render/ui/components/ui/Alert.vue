<script setup lang="ts">
import { Primitive } from 'radix-vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib'

const alertVariants = cva('ui-alert', {
  variants: {
    variant: {
      default: 'ui-alert--default',
      destructive: 'ui-alert--destructive',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type AlertVariants = VariantProps<typeof alertVariants>

const props = withDefaults(
  defineProps<{
    as?: string
    class?: string
    variant?: AlertVariants['variant']
  }>(),
  {
    as: 'div',
    variant: 'default',
  },
)
</script>

<template>
  <Primitive
    :as="props.as"
    role="alert"
    :class="cn(alertVariants({ variant: props.variant }), props.class)"
  >
    <slot />
  </Primitive>
</template>
