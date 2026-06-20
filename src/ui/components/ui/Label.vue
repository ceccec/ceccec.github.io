<script setup lang="ts">
import { Label } from 'radix-vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const labelVariants = cva('ui-label', {
  variants: {
    variant: {
      default: 'ui-label--default',
      muted: 'ui-label--muted',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type LabelVariants = VariantProps<typeof labelVariants>

const props = withDefaults(
  defineProps<{
    for?: string
    class?: string
    variant?: LabelVariants['variant']
  }>(),
  {
    variant: 'default',
  },
)
</script>

<template>
  <Label :for="props.for" :class="cn(labelVariants({ variant: props.variant }), props.class)">
    <slot />
  </Label>
</template>
