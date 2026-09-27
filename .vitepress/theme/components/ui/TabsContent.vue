<script setup lang="ts">
// role="tabpanel", LABELLED BY ITS OWN TAB, and mounted only while selected — which is what radix-vue did
// (its Presence unmounts an unselected panel unless forceMount is passed), so nothing changes for the two
// call sites. tabindex="0" makes the panel itself reachable by Tab from the tablist, which is the other
// half of the tablist being a single tab stop: arrows choose the tab, Tab moves into its content.
import { computed, inject } from 'vue'
import { cn } from '../../../lib/cn.ts'
import { TABS_KEY, type TabsContext } from './Tabs.vue'

const props = defineProps<{ class?: string; value: string }>()
const ctx = inject<TabsContext | null>(TABS_KEY, null)
const active = computed(() => ctx?.current.value === props.value)
</script>

<template>
  <div
    v-if="active"
    :id="ctx?.panelId(value)"
    :class="cn('ui-tabs__content', props.class)"
    role="tabpanel"
    :aria-labelledby="ctx?.tabId(value)"
    data-state="active"
    tabindex="0"
  >
    <slot />
  </div>
</template>
