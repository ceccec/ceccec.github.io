<script setup lang="ts">
import { CheckboxRoot, CheckboxIndicator, type CheckboxRootEmits } from 'radix-vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const checkboxVariants = cva('ui-checkbox', {
  variants: {
    variant: {
      default: 'ui-checkbox--default',
      outline: 'ui-checkbox--outline',
    },
    size: {
      sm: 'ui-checkbox--sm',
      md: 'ui-checkbox--md',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

type CheckboxVariants = VariantProps<typeof checkboxVariants>

const props = withDefaults(
  defineProps<{
    as?: string
    class?: string
    variant?: CheckboxVariants['variant']
    size?: CheckboxVariants['size']
    checked?: boolean | 'indeterminate'
    defaultChecked?: boolean
    disabled?: boolean
    required?: boolean
    name?: string
    value?: string
    id?: string
  }>(),
  {
    as: 'button',
    variant: 'default',
    size: 'md',
  },
)

const emits = defineEmits<CheckboxRootEmits>()
</script>

<template>
  <CheckboxRoot
    :as="props.as"
    :checked="props.checked"
    :default-checked="props.defaultChecked"
    :disabled="props.disabled"
    :required="props.required"
    :name="props.name"
    :value="props.value"
    :id="props.id"
    :class="cn(checkboxVariants({ variant: props.variant, size: props.size }), props.class)"
    @update:checked="emits('update:checked', $event)"
  >
    <CheckboxIndicator class="ui-checkbox__indicator">
      <slot>
        <svg class="ui-checkbox__check" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M5 13l4 4L19 7"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
