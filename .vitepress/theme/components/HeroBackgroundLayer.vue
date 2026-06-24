<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vitepress'
import { immersiveMovieToggleLabel } from '@vp-lib/hero-movie'
import { useSiteLocale } from '../../lib/mounts'

const route = useRoute()
const { locale } = useSiteLocale()
const immersive = ref(false)

const toggleTitle = computed(() =>
  immersiveMovieToggleLabel(route.path, immersive.value, locale.value),
)

function toggleImmersive(): void {
  immersive.value = !immersive.value
  document.documentElement.classList.toggle('vp-hero-immersive', immersive.value)
}

function onKey(event: KeyboardEvent): void {
  if (event.key !== 'i' || event.metaKey || event.ctrlKey || event.altKey) return
  const target = event.target as HTMLElement | null
  if (target && /input|textarea|select/i.test(target.tagName)) return
  toggleImmersive()
}

onMounted(() => {
  window.addEventListener('keydown', onKey)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  document.documentElement.classList.remove('vp-hero-immersive')
})
</script>

<template>
  <button
    type="button"
    class="vp-hero-immersive-toggle"
    :title="toggleTitle"
    :aria-pressed="immersive"
    @click="toggleImmersive"
  >
    {{ immersive ? '◉' : '○' }}
  </button>
</template>

<style scoped>
.vp-hero-immersive-toggle {
  position: fixed;
  left: max(0.75rem, env(safe-area-inset-left, 0px));
  top: max(0.75rem, env(safe-area-inset-top, 0px));
  z-index: 50;
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  border: 1px solid var(--vp-hero-border);
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-size: 0.85rem;
  line-height: 1;
  text-shadow: var(--vp-hero-text-shadow);
}
</style>

<style>
html.vp-hero-immersive .VPHome .name,
html.vp-hero-immersive .VPHome .text,
html.vp-hero-immersive .VPHome .tagline,
html.vp-hero-immersive .VPHome .actions,
html.vp-hero-immersive .VPHome .VPImage,
html.vp-hero-immersive .VPContent,
html.vp-hero-immersive .VPDoc,
html.vp-hero-immersive .VPHome .container {
  opacity: 0 !important;
  pointer-events: none !important;
  transition: opacity 0.35s ease;
}

html.vp-hero-immersive .ui-card__content,
html.vp-hero-immersive .ui-card__content :where(h1, h2, h3, h4, p, li, a, span) {
  text-shadow: none !important;
}
</style>
