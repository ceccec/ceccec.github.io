<script setup lang="ts">
import { Primitive } from 'radix-vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib'

const inputVariants = cva('ui-input', {
  variants: {
    variant: {
      default: 'ui-input--default',
      ghost: 'ui-input--ghost',
    },
    size: {
      sm: 'ui-input--sm',
      md: 'ui-input--md',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

type InputVariants = VariantProps<typeof inputVariants>

const props = withDefaults(
  defineProps<{
    as?: string
    class?: string
    variant?: InputVariants['variant']
    size?: InputVariants['size']
    modelValue?: string | number
  }>(),
  {
    as: 'input',
    variant: 'default',
    size: 'md',
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

function onInput(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <Primitive
    :as="props.as"
    :value="props.modelValue"
    :class="cn(inputVariants({ variant: props.variant, size: props.size }), props.class)"
    @input="onInput"
  />
</template>
