<script setup lang="ts">
import { AvatarRoot, AvatarImage, AvatarFallback } from 'radix-vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const avatarVariants = cva('ui-avatar', {
  variants: {
    size: {
      sm: 'ui-avatar--sm',
      md: 'ui-avatar--md',
      lg: 'ui-avatar--lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

type AvatarVariants = VariantProps<typeof avatarVariants>

const props = withDefaults(
  defineProps<{
    as?: string
    class?: string
    size?: AvatarVariants['size']
    /** Image source. When omitted (or it fails to load) the fallback renders. */
    src?: string
    /** Accessible description of the image. */
    alt?: string
    /** Delay (ms) before the fallback appears — avoids a flash on fast connections. */
    delayMs?: number
  }>(),
  {
    as: 'span',
    size: 'md',
  },
)
</script>

<template>
  <AvatarRoot :as="props.as" :class="cn(avatarVariants({ size: props.size }), props.class)">
    <AvatarImage v-if="props.src" class="ui-avatar__image" :src="props.src" :alt="props.alt" />
    <AvatarFallback class="ui-avatar__fallback" :delay-ms="props.delayMs">
      <slot />
    </AvatarFallback>
  </AvatarRoot>
</template>
