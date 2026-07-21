<script setup lang="ts">
import { cva } from 'class-variance-authority'
import { cn } from '../../../lib/cn.ts'
import { STATUS_BADGE_KINDS, type StatusBadgeKind } from '../../../lib/status-badge'

const badgeVariants = cva('ui-badge', {
  variants: {
    variant: {
      default: 'ui-badge--default',
      outline: 'ui-badge--outline',
      secondary: 'ui-badge--secondary',
      ready: 'ui-badge--status-ready',
      ok: 'ui-badge--status-ok',
      gap: 'ui-badge--status-gap',
      warn: 'ui-badge--status-warn',
      partial: 'ui-badge--status-partial',
      error: 'ui-badge--status-error',
      refused: 'ui-badge--status-refused',
      ci: 'ui-badge--status-ci',
    },
  },
  defaultVariants: { variant: 'default' },
})

type BadgeVariant =
  | 'default'
  | 'outline'
  | 'secondary'
  | StatusBadgeKind

const props = withDefaults(
  defineProps<{
    variant?: BadgeVariant
    /** Sealed status→colour (A432 / hexagram). Wins over variant when set. */
    status?: StatusBadgeKind | ''
    class?: string
  }>(),
  { variant: 'default', status: '' },
)

function resolveVariant(): BadgeVariant {
  if (props.status && (STATUS_BADGE_KINDS as readonly string[]).includes(props.status)) return props.status
  return props.variant
}
</script>

<template>
  <span :class="cn(badgeVariants({ variant: resolveVariant() }), props.class)" data-shadcn="badge" :data-status="status || undefined">
    <slot />
  </span>
</template>
