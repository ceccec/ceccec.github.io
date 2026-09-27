<script setup lang="ts">
// role="tab" WITH THE THREE THINGS THAT MAKE IT ONE: aria-selected (which tab is current), aria-controls
// pointing at its panel, and the roving tabindex — 0 for the selected tab, -1 for the rest — so the whole
// tablist is a single stop and the arrows do the moving. data-state is the CSS contract:
// .ui-tabs__trigger[data-state='active'] in src/render/ui/style.css is what draws the active tab, so it is
// set here rather than left to a class. data-value is how TabsList reads a tab's value back off the DOM.
import { computed, inject } from 'vue'
import { cn } from '../../../lib/cn.ts'
import { TABS_KEY, type TabsContext } from './Tabs.vue'

const props = defineProps<{ class?: string; value: string }>()
const ctx = inject<TabsContext | null>(TABS_KEY, null)
const active = computed(() => ctx?.current.value === props.value)
</script>

<template>
  <button
    :id="ctx?.tabId(value)"
    :class="cn('ui-tabs__trigger', props.class)"
    type="button"
    role="tab"
    :aria-controls="ctx?.panelId(value)"
    :aria-selected="active"
    :data-state="active ? 'active' : 'inactive'"
    :data-value="value"
    :tabindex="active ? 0 : -1"
    @click="ctx?.select(value)"
  >
    <slot />
  </button>
</template>
