<script setup lang="ts">
import { cva } from 'class-variance-authority'
import { cn } from '../../../lib/cn.ts'

const badgeVariants = cva('ui-badge', {
  variants: {
    variant: {
      default: 'ui-badge--default',
      outline: 'ui-badge--outline',
      secondary: 'ui-badge--secondary',
    },
  },
  defaultVariants: { variant: 'default' },
})

type BadgeVariant = 'default' | 'outline' | 'secondary'

const props = withDefaults(defineProps<{ variant?: BadgeVariant; class?: string }>(), { variant: 'default' })
</script>

<template>
  <span :class="cn(badgeVariants({ variant }), props.class)" data-shadcn="badge">
    <slot />
  </span>
</template>
