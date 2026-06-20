<script setup lang="ts">
import { AspectRatio } from 'radix-vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const aspectRatioVariants = cva('ui-aspectratio', {
  variants: {
    variant: {
      // Bare ratio box: clips its content, no chrome of its own.
      plain: 'ui-aspectratio--plain',
      // Media-frame: the shared divider border + card radius, so an image or
      // canvas sits in the same frame the rest of the theme uses.
      framed: 'ui-aspectratio--framed',
    },
  },
  defaultVariants: {
    variant: 'plain',
  },
})

type AspectRatioVariants = VariantProps<typeof aspectRatioVariants>

const props = withDefaults(
  defineProps<{
    as?: string
    class?: string
    /** The desired ratio, e.g. 16 / 9. Defaults to a square (1 / 1). */
    ratio?: number
    variant?: AspectRatioVariants['variant']
  }>(),
  {
    as: 'div',
    ratio: 1,
    variant: 'plain',
  },
)
</script>

<template>
  <AspectRatio
    :as="props.as"
    :ratio="props.ratio"
    :class="cn(aspectRatioVariants({ variant: props.variant }), props.class)"
  >
    <slot />
  </AspectRatio>
</template>
