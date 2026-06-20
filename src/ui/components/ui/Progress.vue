<script setup lang="ts">
import { computed } from 'vue'
import { ProgressRoot, ProgressIndicator } from 'radix-vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const progressVariants = cva('ui-progress', {
  variants: {
    variant: {
      default: 'ui-progress--default',
      success: 'ui-progress--success',
      warning: 'ui-progress--warning',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type ProgressVariants = VariantProps<typeof progressVariants>

const props = withDefaults(
  defineProps<{
    as?: string
    class?: string
    /** The progress value (forwarded to ProgressRoot as `model-value`). */
    value?: number | null
    /** The maximum progress value. */
    max?: number
    variant?: ProgressVariants['variant']
  }>(),
  {
    as: 'div',
    value: 0,
    max: 100,
    variant: 'default',
  },
)

// Indeterminate when value is null/undefined; otherwise clamp to 0..max for the fill width.
const percent = computed(() => {
  if (props.value == null) return null
  const max = props.max > 0 ? props.max : 100
  const clamped = Math.min(Math.max(props.value, 0), max)
  return (clamped / max) * 100
})
</script>

<template>
  <ProgressRoot
    :as="props.as"
    :model-value="props.value"
    :max="props.max"
    :class="cn(progressVariants({ variant: props.variant }), props.class)"
  >
    <ProgressIndicator
      class="ui-progress__indicator"
      :style="{ transform: percent == null ? undefined : `translateX(-${100 - percent}%)` }"
    >
      <slot />
    </ProgressIndicator>
  </ProgressRoot>
</template>
