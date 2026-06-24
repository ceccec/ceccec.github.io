<script setup lang="ts">
import { nextTick, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

const VOID_CLASS = 'vp-sidebar-from-void'
const VOID_MS = 520

function pulseSidebarFromVoid(): void {
  if (typeof document === 'undefined') return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const sidebar = document.querySelector('.VPSidebar')
  if (!sidebar) return
  sidebar.classList.remove(VOID_CLASS)
  void sidebar.getBoundingClientRect()
  sidebar.classList.add(VOID_CLASS)
  window.setTimeout(() => sidebar.classList.remove(VOID_CLASS), VOID_MS)
}

const route = useRoute()

watch(
  () => route.path,
  () => nextTick(() => pulseSidebarFromVoid()),
)

onMounted(() => nextTick(() => pulseSidebarFromVoid()))
</script>

<template>
  <span class="vp-void-sidebar-hook" aria-hidden="true" />
</template>
