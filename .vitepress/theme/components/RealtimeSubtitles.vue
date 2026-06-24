<script setup lang="ts">
import { computed, nextTick, watch } from 'vue'
import { realtimeSubtitleAt, useHeroClock } from '@vp-lib/hero-movie'
import { useHeroCopy, useRealtimeSpeech, useSiteLocale } from '../../lib/mounts'

const { route, movieText } = useHeroCopy()
const { locale, pick } = useSiteLocale()
const { at } = useHeroClock()

const subtitle = computed(() => realtimeSubtitleAt(movieText.value, at.value))
const { enabled: speechEnabled, toggleSpeech } = useRealtimeSpeech(locale, subtitle)

const speechLabel = computed(() =>
  pick(
    speechEnabled.value ? 'Mute subtitles speech' : 'Speak subtitles',
    speechEnabled.value ? 'Заглуши говор на субтитрите' : 'Говори субтитрите',
  ),
)

watch(() => route.path, () => nextTick(() => {
  at.value = typeof performance !== 'undefined' ? performance.now() : 0
}))
</script>

<template>
  <div
    v-if="subtitle.ready && subtitle.text"
    class="vp-realtime-subtitles"
    :data-cue="subtitle.index"
    :data-cues="subtitle.cueCount"
  >
    <button
      type="button"
      class="vp-realtime-subtitles__speech"
      :aria-pressed="speechEnabled"
      :aria-label="speechLabel"
      :title="speechLabel"
      @click="toggleSpeech"
    >
      {{ speechEnabled ? '◉' : '○' }}
    </button>
    <p class="vp-realtime-subtitles__text" aria-live="polite">
      {{ subtitle.text }}
    </p>
  </div>
</template>

<style scoped>
.vp-realtime-subtitles {
  position: fixed;
  left: 50%;
  bottom: max(1.25rem, env(safe-area-inset-bottom, 0px));
  z-index: calc(var(--vp-hero-content-z) + 2);
  transform: translateX(-50%);
  display: flex;
  align-items: flex-start;
  gap: 0.45rem;
  max-width: min(42rem, calc(100vw - 2rem - env(safe-area-inset-left, 0px) - env(safe-area-inset-right, 0px)));
  padding: 0.45rem 0.75rem;
  border: 1px solid var(--vp-hero-border);
  border-radius: var(--vp-movie-radius, 0.5rem);
  background: var(--vp-hero-bg-ghost);
  backdrop-filter: blur(var(--vp-hero-glass-blur-sm, 6px));
  pointer-events: auto;
}

.vp-realtime-subtitles__speech {
  flex: 0 0 auto;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
  line-height: 1;
  cursor: pointer;
  text-shadow: var(--vp-hero-text-shadow);
}

.vp-realtime-subtitles__speech:hover,
.vp-realtime-subtitles__speech[aria-pressed='true'] {
  color: var(--vp-movie-link);
}

.vp-realtime-subtitles__text {
  flex: 1 1 auto;
  margin: 0;
  font-size: calc(0.86rem + var(--vp-movie-gap, 0.5rem) * 0.04);
  line-height: var(--vp-movie-line-height, 1.45);
  text-align: center;
  text-shadow: var(--vp-hero-text-shadow);
  color: var(--vp-c-text-1);
}
</style>

<style>
html.vp-hero-immersive .vp-realtime-subtitles {
  z-index: calc(var(--vp-hero-content-z) + 3);
}

html.vp-hero-immersive .vp-realtime-subtitles__text {
  font-size: calc(0.92rem + var(--vp-movie-gap, 0.5rem) * 0.06);
}
</style>
