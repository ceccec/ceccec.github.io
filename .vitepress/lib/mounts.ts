// VitePress mount composables — locale · card movie · immersive · hero copy · speech (one DRY surface).
import { computed, onMounted, onUnmounted, ref, toValue, watch, type MaybeRefOrGetter, type Ref } from 'vue'
import { useRoute } from 'vitepress'
import {
  displayText,
  localeFromRoute,
  localePath,
  pickLocale,
  type LocaleName,
} from './site-locale'
import {
  cardMovieColorVars,
  cardMovieSeed,
} from '../../src/thunder/movie/movievars'
import { decodedCardTextShadow } from '../../src/thunder/movie/glass'
import { speechIntonation } from '../../src/lake/media/index'
import {
  AUDIO_ENABLED_STORAGE_KEY,
} from '../../src/fire/plasma/ball'

export { useHeroCopy } from './hero-copy'

const SPEECH_STORAGE_KEY = 'ceccec:subtitle-speech'

/** Opt-in Web Audio — off by default (storage absent ⇒ silent). */
export function useAudioEnabled() {
  const enabled = ref(false)

  function loadEnabled(): void {
    if (typeof localStorage === 'undefined') return
    enabled.value = localStorage.getItem(AUDIO_ENABLED_STORAGE_KEY) === '1'
  }

  function toggleAudio(): void {
    enabled.value = !enabled.value
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(AUDIO_ENABLED_STORAGE_KEY, enabled.value ? '1' : '0')
    }
  }

  onMounted(() => loadEnabled())

  return { enabled, toggleAudio }
}

export function componentDisplayName(locale: LocaleName, name: string): string {
  return displayText(locale, name.replace(/([a-z0-9])([A-Z])/g, '$1 $2'))
}

export function useSiteLocale() {
  const route = useRoute()
  const locale = computed(() => localeFromRoute(route.path))
  const pick = (en: string, bg: string) => pickLocale(locale.value, en, bg)
  const t = (text?: string) => (text ? displayText(locale.value, text) : text)
  const localize = (path: string) => localePath(path, locale.value)
  const componentName = (name: string) => componentDisplayName(locale.value, name)
  return { route, locale, pick, t, localize, componentName }
}

function speechLang(locale: LocaleName): string {
  if (locale === 'bg' || locale === 'gla') return 'bg-BG'
  return 'en-US'
}

/** Opt-in Web Speech for realtime subtitle cues — harmonic pitch from sealed intonation contour. */
export function useRealtimeSpeech(
  locale: Ref<LocaleName>,
  onCue: MaybeRefOrGetter<{ index: number; text: string; cueCount: number; ready: boolean }>,
) {
  const enabled = ref(false)
  const lastIndex = ref(-1)

  function loadEnabled(): void {
    if (typeof localStorage === 'undefined') return
    enabled.value = localStorage.getItem(SPEECH_STORAGE_KEY) === '1'
  }

  function toggleSpeech(): void {
    enabled.value = !enabled.value
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(SPEECH_STORAGE_KEY, enabled.value ? '1' : '0')
    }
    if (!enabled.value && typeof window !== 'undefined') window.speechSynthesis?.cancel()
  }

  function speakCue(index: number, text: string): void {
    if (!enabled.value || !text || typeof window === 'undefined' || !window.speechSynthesis) return
    if (index === lastIndex.value) return
    lastIndex.value = index
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    const contour = speechIntonation().contour
    utterance.pitch = contour[index % Math.max(contour.length, 1)] ?? 1
    utterance.rate = 0.95
    utterance.lang = speechLang(locale.value)
    window.speechSynthesis.speak(utterance)
  }

  watch(
    () => toValue(onCue),
    (cue) => {
      if (!cue.ready || !cue.text) return
      speakCue(cue.index, cue.text)
    },
    { deep: true },
  )

  onMounted(() => loadEnabled())

  onUnmounted(() => {
    if (typeof window !== 'undefined') window.speechSynthesis?.cancel()
  })

  watch(
    () => locale.value,
    () => {
      lastIndex.value = -1
      if (typeof window !== 'undefined') window.speechSynthesis?.cancel()
    },
  )

  return { enabled, toggleSpeech }
}

export function cardMovieFromParts(
  routePath: string,
  parts: readonly (string | undefined)[],
): { seed: string; cardStyle: Record<string, string> } {
  const seed = cardMovieSeed(parts)
  return { seed, cardStyle: cardMovieColorVars(routePath, seed) }
}

export function useCardMovie(parts: MaybeRefOrGetter<readonly (string | undefined)[]>) {
  const route = useRoute()
  const seed = computed(() => cardMovieSeed(toValue(parts)))
  const cardStyle = computed(() => cardMovieColorVars(route.path, seed.value))
  return { seed, cardStyle }
}

export function useImmersiveMovie() {
  const immersive = ref(false)
  let observer: MutationObserver | null = null

  onMounted(() => {
    const sync = () => {
      immersive.value = document.documentElement.classList.contains('vp-hero-immersive')
    }
    sync()
    observer = new MutationObserver(sync)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  })

  onUnmounted(() => {
    observer?.disconnect()
    observer = null
  })

  const textShadow = computed(() => decodedCardTextShadow(!immersive.value))
  return { immersive, textShadow }
}

export { prefersReducedMotion, useHeroClock, useVisibleMovieCanvas, viewportSize, type MovieIntensity } from './movie-canvas'

export type CorpusGridItem = {
  route: string
  id: string
  title: string
  glyph: string
  hue: number
}

/** Defer sealed corpus graph until after first paint — work is math-bounded in src/routes/corpus. */
export async function hubCardItemsAsync(locale: LocaleName): Promise<CorpusGridItem[]> {
  const { hubCardItems } = await import('../../src/routes/corpus/index')
  return hubCardItems(locale)
}

export async function tagBrowserTagsAsync(): Promise<readonly string[]> {
  const { tagBrowserTags } = await import('../../src/routes/corpus/index')
  return tagBrowserTags()
}

export async function tagBrowserItemsAsync(tag: string, locale: LocaleName): Promise<CorpusGridItem[]> {
  const { tagBrowserItems } = await import('../../src/routes/corpus/index')
  return tagBrowserItems(tag, locale)
}
