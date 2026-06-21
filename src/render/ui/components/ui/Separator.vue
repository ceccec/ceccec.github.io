<script setup lang="ts">
import { Separator } from 'radix-vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib'

const separatorVariants = cva('ui-separator', {
  variants: {
    orientation: {
      horizontal: 'ui-separator--horizontal',
      vertical: 'ui-separator--vertical',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

type SeparatorVariants = VariantProps<typeof separatorVariants>

const props = withDefaults(
  defineProps<{
    as?: string
    class?: string
    // NonNullable: cva's VariantProps admits null, but radix-vue's Separator
    // orientation accepts only 'horizontal' | 'vertical' | undefined.
    orientation?: NonNullable<SeparatorVariants['orientation']>
    decorative?: boolean
  }>(),
  {
    orientation: 'horizontal',
    decorative: true,
  },
)
</script>

<template>
  <Separator
    :as="props.as"
    :orientation="props.orientation"
    :decorative="props.decorative"
    :class="cn(separatorVariants({ orientation: props.orientation }), props.class)"
  />
</template>
