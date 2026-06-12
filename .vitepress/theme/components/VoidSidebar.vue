<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

// Sidebars appear from the void when the content is visualising. The sidebar is not a
// fixed frame: each time the content changes (a new route renders), the sidebar fades
// and rises from the background — the void at the centre of the double torus — then
// settles. A render-only effect: it adds a brief animation class to VitePress's own
// sidebar; it never replaces or bypasses it. Energy- and reduced-motion-aware.
const route = useRoute()
const { frontmatter } = useData()

let reduce = false
function visualise() {
  if (typeof document === 'undefined') return
  if (reduce) return
  const el = document.querySelector('.VPSidebar')
  if (!el) return
  el.classList.remove('void-rise')
  // force reflow so the animation replays on every navigation
  void (el as HTMLElement).offsetWidth
  el.classList.add('void-rise')
}

onMounted(() => {
  reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
  visualise()
})
onUnmounted(() => {
  document.querySelector('.VPSidebar')?.classList.remove('void-rise')
})
// Re-rise from the void whenever the content (route or frontmatter) visualises anew.
watch([() => route.path, () => frontmatter.value], () => requestAnimationFrame(visualise))
</script>

<template>
  <!-- render-only: a marker the effect hangs on; the animation lives on .VPSidebar -->
  <span class="void-sidebar" aria-hidden="true" />
</template>

<style>
/* The sidebar rises from the void: fades up and forward, then settles. */
@keyframes void-rise {
  from {
    opacity: 0;
    transform: translateY(14px) scale(0.985);
    filter: blur(2px);
  }
  to {
    opacity: 1;
    transform: none;
    filter: none;
  }
}
.VPSidebar.void-rise {
  animation: void-rise 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
@media (prefers-reduced-motion: reduce) {
  .VPSidebar.void-rise {
    animation: none;
  }
}
</style>

<style scoped>
.void-sidebar {
  display: none;
}
</style>
