<script setup lang="ts">
// NO VENDOR FOR A DIV WITH A ROLE. radix-vue's Separator rendered exactly this, and importing it kept
// the whole radix barrel — and the @floating-ui and @internationalized it pulls — in the eager shell.
// The CSS contract is data-orientation (src/render/ui/style.css keys both axes off it), so that stays.
// aria-orientation is set only for vertical: horizontal is the ARIA default for role="separator", and
// repeating a default is noise a screen reader reads out.
import { cn } from '../../../lib/cn.ts'

const props = withDefaults(defineProps<{ class?: string; orientation?: 'horizontal' | 'vertical' }>(), {
  orientation: 'horizontal',
})
</script>

<template>
  <div
    :class="cn('ui-separator', props.orientation === 'vertical' && 'ui-separator--vertical', props.class)"
    data-shadcn="separator"
    role="separator"
    :data-orientation="orientation"
    :aria-orientation="orientation === 'vertical' ? 'vertical' : undefined"
  />
</template>
