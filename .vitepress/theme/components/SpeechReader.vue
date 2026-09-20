<script setup lang="ts">
// Global "read this page aloud" — the floating page-reader regressed when 951edff3 dissolved src/render/ui without
// migrating SpeechReader into the canonical theme. Restored here beside GlobalHelp, reusing the working
// ModelCardPages speechSynthesis pattern. The button renders UNCONDITIONALLY (identical SSR + client) so it introduces
// no hydration mismatch; the browser-only speech APIs are touched only inside the click handler.
import { computed, onBeforeUnmount, ref } from 'vue'

const speaking = ref(false)

function ttsAvailable(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}
// locale → BCP-47 read at click time from the route (bg + gla both read in Bulgarian voice), no reactive SSR dependency
function pageLang(): string {
  const p = typeof location !== 'undefined' ? location.pathname : '/'
  return p.startsWith('/bg') || p.startsWith('/gla') ? 'bg-BG' : 'en-US'
}
// what the reader sees: the rendered main content text
function pageText(): string {
  const el = document.querySelector('.vp-doc') ?? document.querySelector('main') ?? document.body
  return (el instanceof HTMLElement ? el.innerText : '').slice(0, 30000)
}
function toggle(): void {
  if (!ttsAvailable()) return
  if (speaking.value) {
    window.speechSynthesis.cancel()
    speaking.value = false
    return
  }
  window.speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(pageText())
  u.lang = pageLang()
  u.rate = (7 * 7) / (5 * 5 * 2) // 49/50 = 0.98 — a natural reading pace, harmonic-derived not hardcoded
  u.onend = () => { speaking.value = false }
  u.onerror = () => { speaking.value = false }
  speaking.value = true
  window.speechSynthesis.speak(u)
}
onBeforeUnmount(() => { if (ttsAvailable() && speaking.value) window.speechSynthesis.cancel() })

const label = computed(() => (speaking.value ? 'Stop reading this page' : 'Read this page aloud'))
</script>

<template>
  <button
    class="speech-reader"
    type="button"
    :aria-label="label"
    :title="label"
    :aria-pressed="speaking"
    @click="toggle"
  >
    <span aria-hidden="true">{{ speaking ? '⏹' : '🔊' }}</span>
  </button>
</template>

<style scoped>
.speech-reader {
  position: fixed;
  left: var(--ich-sp8);
  bottom: var(--ich-sp8);
  z-index: calc(5 * 8);
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(var(--ich-unit) * (5 + 6));
  height: calc(var(--ich-unit) * (5 + 6));
  border-radius: calc(100% / 2);
  border: var(--ich-line) solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: var(--ich-sp9);
  line-height: 1;
  cursor: pointer;
  box-shadow: var(--vp-shadow-2);
  transition: background-color var(--ich-dur-fast), color var(--ich-dur-fast), border-color var(--ich-dur-fast);
}
.speech-reader:hover {
  background: var(--vp-c-bg-mute);
}
.speech-reader[aria-pressed='true'] {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}
</style>
