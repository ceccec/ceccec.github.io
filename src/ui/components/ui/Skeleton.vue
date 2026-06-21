<script setup lang="ts">
import { Primitive } from 'radix-vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib'

const skeletonVariants = cva('ui-skeleton', {
  variants: {
    variant: {
      default: 'ui-skeleton--default',
      text: 'ui-skeleton--text',
      circle: 'ui-skeleton--circle',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type SkeletonVariants = VariantProps<typeof skeletonVariants>

const props = withDefaults(
  defineProps<{
    as?: string
    class?: string
    variant?: SkeletonVariants['variant']
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
    aria-hidden="true"
    :class="cn(skeletonVariants({ variant: props.variant }), props.class)"
  >
    <slot />
  </Primitive>
</template>
