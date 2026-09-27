<script setup lang="ts">
// THE PART RADIX ACTUALLY EARNED: the ARIA tabs keyboard pattern. A tablist is ONE tab stop — the selected
// tab holds tabindex 0 and the rest -1 (roving tabindex, set in TabsTrigger) — and the arrow keys move
// between tabs instead of Tab, which would otherwise walk through every trigger before reaching the panel.
// Home/End jump to the ends, and the traversal wraps, which is what the pattern specifies for an
// automatic-activation tablist. Both axes are accepted because a vertical tablist is the same pattern.
//
// The triggers are read from the DOM rather than registered through the context: it keeps the order the
// same as the rendered order by construction (a registration list has to be kept sorted and cleaned up on
// unmount, and gets it wrong when a trigger is v-if'd), and [role=tab] is exactly what TabsTrigger renders.
import { inject, ref } from 'vue'
import { cn } from '../../../lib/cn.ts'
import { TABS_KEY, type TabsContext } from './Tabs.vue'

const props = defineProps<{ class?: string; orientation?: 'horizontal' | 'vertical' }>()
const ctx = inject<TabsContext | null>(TABS_KEY, null)
const root = ref<HTMLElement | null>(null)

function focusTab(step: number, end?: 'first' | 'last') {
  const tabs = Array.from(root.value?.querySelectorAll<HTMLElement>('[role="tab"]:not([aria-disabled="true"])') ?? [])
  if (tabs.length === 0) return
  const at = tabs.findIndex((tab) => tab.getAttribute('aria-selected') === 'true')
  const from = at < 0 ? 0 : at
  const to = end === 'first' ? 0 : end === 'last' ? tabs.length - 1 : (from + step + tabs.length) % tabs.length
  const tab = tabs[to]
  if (!tab) return
  tab.focus()
  const value = tab.dataset.value
  if (value) ctx?.select(value)
}

function onKeydown(event: KeyboardEvent) {
  const moves: Record<string, () => void> = {
    ArrowRight: () => focusTab(1),
    ArrowDown: () => focusTab(1),
    ArrowLeft: () => focusTab(-1),
    ArrowUp: () => focusTab(-1),
    Home: () => focusTab(0, 'first'),
    End: () => focusTab(0, 'last'),
  }
  const move = moves[event.key]
  if (!move) return
  // Only for keys this pattern owns: swallowing anything else would break typing in a panel.
  event.preventDefault()
  move()
}
</script>

<template>
  <div
    ref="root"
    :class="cn('ui-tabs__list', props.class)"
    role="tablist"
    :aria-orientation="props.orientation === 'vertical' ? 'vertical' : undefined"
    @keydown="onKeydown"
  >
    <slot />
  </div>
</template>
