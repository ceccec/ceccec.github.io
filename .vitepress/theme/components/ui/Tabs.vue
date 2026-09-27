<script lang="ts">
// THE CONTEXT LIVES HERE, NOT IN A NEW MODULE. A .vitepress/lib/tabs.ts was refused by
// gate/config/vitepress-index — that folder admits index files and thin config mounts, nothing else — and
// putting it under src/ui would drag that index's graph into the chunk every visitor loads, which is the
// number this whole wave is reducing. The four components already depend on Tabs by construction, so the
// key and the shape it guards belong to Tabs. The id helpers are closures over one instance's prefix, so
// the children never build an id themselves and there is no identical body to duplicate.
import type { ComputedRef } from 'vue'

export type TabsContext = {
  readonly current: ComputedRef<string | undefined>
  readonly select: (value: string) => void
  readonly tabId: (value: string) => string
  readonly panelId: (value: string) => string
}

/** One Tabs instance provides this; TabsList, TabsTrigger and TabsContent inject it. */
export const TABS_KEY = 'ui-tabs'
</script>

<script setup lang="ts">
// FOUR COMPONENTS SHARING A STRING DID NOT NEED A VENDOR. radix-vue's TabsRoot held the selected value and
// the id wiring; that is a computed, a setter and a prefix, provided here. What radix genuinely earns its
// keep for is the keyboard behaviour, and that is implemented in TabsList rather than dropped — see the
// ARIA tabs pattern notes there.
// Controlled and uncontrolled both work, as before: modelValue wins when the parent passes one, otherwise
// defaultValue seeds local state. Both call sites in this repo are uncontrolled (`default-value`).
import { computed, provide, ref, useId } from 'vue'
import { cn } from '../../../lib/cn.ts'

const props = defineProps<{ class?: string; defaultValue?: string; modelValue?: string }>()
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()

const local = ref<string | undefined>(props.defaultValue)
const current = computed(() => props.modelValue ?? local.value)

const baseId = useId() ?? TABS_KEY

provide(TABS_KEY, {
  current,
  select: (value: string) => {
    local.value = value
    emit('update:modelValue', value)
  },
  tabId: (value: string) => `${baseId}-tab-${value}`,
  panelId: (value: string) => `${baseId}-panel-${value}`,
} satisfies TabsContext)
</script>

<template>
  <div :class="cn('ui-tabs', props.class)" data-shadcn="tabs">
    <slot />
  </div>
</template>
