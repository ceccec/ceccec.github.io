<script setup lang="ts">
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const badgeVariants = cva('ui-badge', {
  variants: {
    variant: {
      default: 'ui-badge--default',
      success: 'ui-badge--success',
      warning: 'ui-badge--warning',
      outline: 'ui-badge--outline',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type BadgeVariants = VariantProps<typeof badgeVariants>

const props = withDefaults(
  defineProps<{
    class?: string
    variant?: BadgeVariants['variant']
  }>(),
  {
    variant: 'default',
  },
)
</script>

<template>
  <span :class="cn(badgeVariants({ variant: props.variant }), props.class)">
    <slot />
  </span>
</template>
