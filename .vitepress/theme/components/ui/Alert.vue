<script setup lang="ts">
import { cva } from 'class-variance-authority'
import { cn } from '../../../lib/cn.ts'

const alertVariants = cva('ui-alert', {
  variants: {
    variant: {
      default: 'ui-alert--default',
      destructive: 'ui-alert--destructive',
    },
  },
  defaultVariants: { variant: 'default' },
})

type AlertVariant = 'default' | 'destructive'

const props = withDefaults(defineProps<{ variant?: AlertVariant; class?: string; title?: string }>(), { variant: 'default' })
</script>

<template>
  <div :class="cn(alertVariants({ variant }), props.class)" data-shadcn="alert" role="alert">
    <p v-if="title" class="ui-alert__title">{{ title }}</p>
    <div class="ui-alert__body">
      <slot />
    </div>
  </div>
</template>
