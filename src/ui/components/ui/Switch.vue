<script setup lang="ts">
import { computed } from 'vue'
import {
  SwitchRoot,
  SwitchThumb,
  useForwardPropsEmits,
  type SwitchRootEmits,
  type SwitchRootProps,
} from 'radix-vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const switchVariants = cva('ui-switch', {
  variants: {
    size: {
      sm: 'ui-switch--sm',
      md: 'ui-switch--md',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

type SwitchVariants = VariantProps<typeof switchVariants>

const props = withDefaults(
  defineProps<SwitchRootProps & { class?: string; size?: SwitchVariants['size'] }>(),
  {
    as: 'button',
    size: 'md',
  },
)

const emits = defineEmits<SwitchRootEmits>()

// Strip the presentational props before forwarding so they are not passed as
// DOM attributes on SwitchRoot — only the radix props/emits flow through.
const forwarded = computed(() => {
  const { class: _class, size: _size, ...rootProps } = props
  return rootProps
})

const forward = useForwardPropsEmits(forwarded, emits)
</script>

<template>
  <SwitchRoot v-bind="forward" :class="cn(switchVariants({ size: props.size }), props.class)">
    <SwitchThumb class="ui-switch__thumb" />
  </SwitchRoot>
</template>
