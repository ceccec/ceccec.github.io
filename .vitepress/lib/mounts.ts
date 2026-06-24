// VitePress mount composables — locale · card movie · immersive · hero copy · speech (one DRY surface).
import { computed, onMounted, onUnmounted, ref, toValue, watch, type MaybeRefOrGetter, type Ref } from 'vue'
import { useRoute, useData } from 'vitepress'
import {
  displayText,
  localeFromRoute,
  localePath,
  pickLocale,
  type LocaleName,
} from '../../src/site/index'
import {
  cardMovieColorVars,
  cardMovieSeed,
  decodedCardTextShadow,
  movieTextFromCopy,
  speechIntonation,
  type SharedHeroCopy,
} from './hero-movie'

const SPEECH_STORAGE_KEY = 'ceccec:subtitle-speech'

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

/** Localized VitePress page copy — same seed for background movie and realtime subtitles. */
export function useHeroCopy() {
  const route = useRoute()
  const { frontmatter, title, description } = useData()
  const { t } = useSiteLocale()

  const copy = computed((): SharedHeroCopy => {
    const hero = frontmatter.value.hero as { tagline?: string } | undefined
    return {
      title: t((frontmatter.value.title as string | undefined) || title.value),
      description: t(description.value),
      tagline: t(hero?.tagline),
      keywords: (frontmatter.value.keywords as string[] | undefined)?.map(
        (keyword) => t(keyword) ?? keyword,
      ),
    }
  })

  const movieText = computed(() => movieTextFromCopy(copy.value) || route.path)
  return { route, copy, movieText }
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

export { prefersReducedMotion, useHeroClock, useVisibleMovieCanvas, viewportSize } from './movie-canvas'
