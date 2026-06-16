// Layer-control composable — 10 I Ching dimensions as interactive toggleable layers.
// ☷ Kūn · Earth · receptive · inner·yin — the ground from which all layers emerge.

import { ref, computed } from 'vue'

export const LAYER_NAMES = [
  'spread', 'depthFade', 'hueShift',       // 0-2: inner · yin · import direction
  'twist', 'shrink', 'breath',              // 3-5: outer · yang · export direction
  'loopA1', 'loopB1', 'loopA2', 'loopB2', // 6-9: homology loops · dependency flows
] as const

export type LayerName = (typeof LAYER_NAMES)[number]

export const LAYER_GROUP = [
  'inner', 'inner', 'inner',
  'outer', 'outer', 'outer',
  'loop', 'loop', 'loop', 'loop',
] as const

export const LAYER_BADGE = [
  'yin·in', 'yin·in', 'yin·in',
  'yang·out', 'yang·out', 'yang·out',
  'loop·Δ', 'loop·Δ', 'loop·Δ', 'loop·Δ',
] as const

export function useLayers(initDepth = 10) {
  const depth = ref(Math.max(0, Math.min(10, initDepth)))
  const visible = ref<boolean[]>(Array.from({ length: 10 }, () => true))

  function dimFor(i: number, total: number): number {
    return total === 0 ? 0 : Math.min(Math.floor((i * 10) / total), 9)
  }

  function apply<T>(items: readonly T[]): T[] {
    return (items as T[]).filter((_, i) => {
      const d = dimFor(i, items.length)
      return d < depth.value && visible.value[d] === true
    })
  }

  function toggle(i: number): void {
    const next = [...visible.value]
    next[i] = !next[i]!
    visible.value = next
  }

  const activeCount = computed(
    () => visible.value.filter((v, i) => v && i < depth.value).length,
  )

  return { depth, visible, apply, toggle, activeCount }
}
