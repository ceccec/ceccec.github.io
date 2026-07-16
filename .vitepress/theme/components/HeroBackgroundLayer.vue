<script setup lang="ts">
// Immersive toggle (press i) + idle screensaver: hero plasma = most efficient screensaver
// via movieAsMostEfficientScreensaver + realtimeComputationsMoviePaint.
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vitepress'
import { immersiveMovieToggleLabel } from '@vp-lib/hero-movie'
import { SCREENSAVER_IDLE_MS } from '@vp-lib/hero-movie-paint'
import { useSiteLocale } from '../../lib/mounts'

const route = useRoute()
const { locale } = useSiteLocale()
const immersive = ref(false)
const screensaverAuto = ref(false)

const toggleTitle = computed(() =>
  immersiveMovieToggleLabel(route.path, immersive.value, locale.value),
)

function screensaverTier(): 'NATIVE' | 'FALLBACK' {
  return typeof document !== 'undefined' && document.hidden ? 'FALLBACK' : 'NATIVE'
}

function syncScreensaverTier(): void {
  if (typeof document === 'undefined') return
  document.documentElement.dataset.screensaverTier = screensaverTier()
}

function setImmersive(on: boolean, auto = false): void {
  immersive.value = on
  screensaverAuto.value = auto && on
  document.documentElement.classList.toggle('vp-hero-immersive', on)
  document.documentElement.classList.toggle('vp-hero-screensaver', auto && on)
  syncScreensaverTier()
}

function toggleImmersive(): void {
  setImmersive(!immersive.value, false)
}

function onKey(event: KeyboardEvent): void {
  if (event.key !== 'i' || event.metaKey || event.ctrlKey || event.altKey) return
  const target = event.target as HTMLElement | null
  if (target && /input|textarea|select/i.test(target.tagName)) return
  toggleImmersive()
}

let idleTimer: ReturnType<typeof setTimeout> | null = null

function clearIdleTimer(): void {
  if (idleTimer !== null) {
    clearTimeout(idleTimer)
    idleTimer = null
  }
}

function resetIdleTimer(): void {
  clearIdleTimer()
  if (typeof document === 'undefined' || document.hidden) return
  idleTimer = setTimeout(() => {
    if (!immersive.value) setImmersive(true, true)
  }, SCREENSAVER_IDLE_MS)
}

function onActivity(): void {
  if (screensaverAuto.value) setImmersive(false, false)
  resetIdleTimer()
}

function onVisibilityChange(): void {
  syncScreensaverTier()
  if (document.hidden) clearIdleTimer()
  else resetIdleTimer()
}

onMounted(() => {
  window.addEventListener('keydown', onKey)
  window.addEventListener('pointermove', onActivity, { passive: true })
  window.addEventListener('pointerdown', onActivity, { passive: true })
  window.addEventListener('keydown', onActivity)
  window.addEventListener('touchstart', onActivity, { passive: true })
  window.addEventListener('scroll', onActivity, { passive: true })
  document.addEventListener('visibilitychange', onVisibilityChange)
  syncScreensaverTier()
  resetIdleTimer()
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  window.removeEventListener('pointermove', onActivity)
  window.removeEventListener('pointerdown', onActivity)
  window.removeEventListener('keydown', onActivity)
  window.removeEventListener('touchstart', onActivity)
  window.removeEventListener('scroll', onActivity)
  document.removeEventListener('visibilitychange', onVisibilityChange)
  clearIdleTimer()
  document.documentElement.classList.remove('vp-hero-immersive', 'vp-hero-screensaver')
  delete document.documentElement.dataset.screensaverTier
})
</script>

<template>
  <button
    type="button"
    class="vp-hero-immersive-toggle"
    :title="toggleTitle"
    :aria-label="toggleTitle"
    :aria-pressed="immersive"
    @click="toggleImmersive"
  >
    {{ immersive ? '◉' : '○' }}
  </button>
</template>

<style scoped>
.vp-hero-immersive-toggle {
  position: fixed;
  left: max(var(--ich-sp6), env(safe-area-inset-left, 0px));
  top: max(var(--ich-sp6), env(safe-area-inset-top, 0px));
  z-index: 50;
  width: var(--ich-size-toggle);
  height: var(--ich-size-toggle);
  border-radius: var(--ich-radius-pill);
  border: 1px solid var(--vp-hero-border);
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-size: var(--ich-text-sm);
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
  transition: opacity var(--ich-dur-slow) ease;
}

html.vp-hero-immersive .ui-card__content,
html.vp-hero-immersive .ui-card__content :where(h1, h2, h3, h4, p, li, a, span) {
  text-shadow: none !important;
}

html.vp-hero-screensaver .vp-hero-immersive-toggle {
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--ich-dur-slow) ease;
}
</style>
