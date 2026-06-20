<script setup lang="ts">
import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from 'radix-vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const tooltipVariants = cva('ui-tooltip', {
  variants: {
    variant: {
      default: 'ui-tooltip--default',
      brand: 'ui-tooltip--brand',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type TooltipVariants = VariantProps<typeof tooltipVariants>

const props = withDefaults(
  defineProps<{
    /** Merged onto the content surface via cn(). */
    class?: string
    variant?: TooltipVariants['variant']
    /** Convenience: plain-text label, used when no #content slot is given. */
    label?: string
    /** Side the content prefers relative to the trigger. */
    side?: 'top' | 'right' | 'bottom' | 'left'
    /** Gap (px) between trigger and content. */
    sideOffset?: number
    /** Hover dwell before opening (ms). 0 keeps radix's default. */
    delayDuration?: number
    /** Render the trigger as the child element (no extra wrapper button). */
    asChild?: boolean
    /** Show the little pointer toward the trigger. */
    arrow?: boolean
  }>(),
  {
    variant: 'default',
    side: 'top',
    sideOffset: 6,
    delayDuration: 200,
    asChild: false,
    arrow: true,
  },
)
</script>

<template>
  <TooltipProvider :delay-duration="props.delayDuration">
    <TooltipRoot>
      <TooltipTrigger :as-child="props.asChild" class="ui-tooltip__trigger">
        <slot />
      </TooltipTrigger>
      <TooltipPortal>
        <TooltipContent
          :side="props.side"
          :side-offset="props.sideOffset"
          :class="cn(tooltipVariants({ variant: props.variant }), props.class)"
        >
          <slot name="content">{{ props.label }}</slot>
          <TooltipArrow v-if="props.arrow" class="ui-tooltip__arrow" :width="11" :height="6" />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>
