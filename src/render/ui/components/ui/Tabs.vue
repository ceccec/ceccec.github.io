<script setup lang="ts">
import { TabsList, TabsRoot, TabsTrigger } from 'radix-vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib'

const tabsVariants = cva('ui-tabs', {
  variants: {
    variant: {
      default: 'ui-tabs--default',
      pill: 'ui-tabs--pill',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type TabsVariants = VariantProps<typeof tabsVariants>

interface TabItem {
  value: string
  label: string
}

const props = withDefaults(
  defineProps<{
    as?: string
    class?: string
    variant?: TabsVariants['variant']
    /** Layout direction of the list / content. */
    orientation?: 'horizontal' | 'vertical'
    /** Controlled selected value (use with v-model). */
    modelValue?: string
    /** Uncontrolled initial selected value. */
    defaultValue?: string
    /** Shorthand: render the triggers from a list instead of the `list` slot. */
    tabs?: TabItem[]
  }>(),
  {
    as: 'div',
    variant: 'default',
    orientation: 'horizontal',
  },
)

defineEmits<{ 'update:modelValue': [value: string] }>()
</script>

<template>
  <TabsRoot
    :as="props.as"
    :orientation="props.orientation"
    :model-value="props.modelValue"
    :default-value="props.defaultValue"
    :class="cn(tabsVariants({ variant: props.variant }), props.class)"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <TabsList class="ui-tabs__list">
      <slot name="list">
        <TabsTrigger
          v-for="tab in props.tabs"
          :key="tab.value"
          :value="tab.value"
          class="ui-tabs__trigger"
        >
          {{ tab.label }}
        </TabsTrigger>
      </slot>
    </TabsList>
    <slot />
  </TabsRoot>
</template>
