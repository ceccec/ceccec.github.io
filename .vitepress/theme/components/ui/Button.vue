<script setup lang="ts">
import { cva } from 'class-variance-authority'
import { cn } from '../../../lib/cn.ts'

const buttonVariants = cva('ui-button', {
  variants: {
    variant: {
      default: 'ui-button--default',
      outline: 'ui-button--outline',
      ghost: 'ui-button--ghost',
      link: 'ui-button--link',
    },
    size: {
      default: 'ui-button--md',
      sm: 'ui-button--sm',
      lg: 'ui-button--lg',
    },
  },
  defaultVariants: { variant: 'default', size: 'default' },
})

type ButtonVariant = 'default' | 'outline' | 'ghost' | 'link'
type ButtonSize = 'default' | 'sm' | 'lg'

const props = withDefaults(defineProps<{ variant?: ButtonVariant; size?: ButtonSize; class?: string }>(), {
  variant: 'default',
  size: 'default',
})
</script>

<template>
  <button type="button" :class="cn(buttonVariants({ variant, size }), props.class)" data-shadcn="button">
    <slot />
  </button>
</template>
