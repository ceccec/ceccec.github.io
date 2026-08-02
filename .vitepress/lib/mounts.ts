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

// Client-locale fallback (user-chosen direction): CANONICAL routes (/theorems/* · /proofs/* · /papers/* · /model/* —
// no locale prefix) render EN by route for SSR/crawlers, then adopt the viewer's SAVED locale (localStorage
// 'dt-locale' · en/bg/cu, the same key the config redirect uses) after hydration. Module-level so the first mounted
// component initializes it once and every consumer recomputes reactively; SSR (no window) stays route-derived.
const savedLocaleRef = ref<LocaleName | null>(null)
// `hydrated` gates the saved-locale adoption. The FIRST client render must be byte-identical to the SSR HTML
// (route-derived, en on canonical routes) or Vue reports a hydration mismatch. Per-component onMounted fires child-first
// DURING the hydration walk, so flipping the locale there desynced later siblings (the site-wide "Hydration mismatch").
// Instead we read the saved locale and flip `hydrated` together in ONE deferred frame (requestAnimationFrame) AFTER the
// whole app has hydrated — the en→bg swap then lands as a clean post-hydration reactive patch, not a mismatch.
const hydrated = ref(false)
let localeAdoptScheduled = false
function scheduleLocaleAdopt(): void {
  if (localeAdoptScheduled || typeof window === 'undefined') return
  localeAdoptScheduled = true
  const adopt = () => {
    try {
      const s = localStorage.getItem('dt-locale')
      savedLocaleRef.value = s === 'bg' ? 'bg' : s === 'cu' ? 'gla' : null
    } catch { /* private mode / storage blocked — stay route-derived */ }
    hydrated.value = true // adopt only now, one frame past the hydration walk
  }
  if (typeof requestAnimationFrame === 'function') requestAnimationFrame(adopt)
  else setTimeout(adopt, 0)
}

export function useSiteLocale() {
  const route = useRoute()
  onMounted(scheduleLocaleAdopt)
  // explicit locale prefix (/bg · /gla) is authoritative; a canonical (route-derived 'en') page adopts the viewer's
  // saved locale ONLY after hydration completes (hydrated flag), so /theorems/<slug> etc. autotranslate for a bg/gla
  // visitor without per-locale SSG AND without a hydration mismatch (first render = en = SSR).
  const locale = computed<LocaleName>(() => {
    const routeLocale = localeFromRoute(route.path)
    if (routeLocale !== 'en') return routeLocale
    return hydrated.value ? (savedLocaleRef.value ?? 'en') : 'en'
  })
  const pick = (en: string, bg: string) => pickLocale(locale.value, en, bg)
  const t = (text?: string) => (text ? displayText(locale.value, text) : text)
  const localize = (path: string) => localePath(path, locale.value)
  const componentName = (name: string) => componentDisplayName(locale.value, name)
  // Purge-arc slice 5 (science-not-ideology): Glagolitic glyphs are the gla edition's script
  // identity — EN/BG surfaces stay plain words. Geometric/CJK icons pass through in every locale.
  const scriptGlyph = (glyph?: string) =>
    glyph && locale.value !== 'gla' && /[Ⰰ-ⱟ]/.test(glyph) ? '' : (glyph ?? '')
  return { route, locale, pick, t, localize, componentName, scriptGlyph }
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
    utterance.rate = (1 - 1 / (5 * 4))
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

/**
 * Card CSS vars + seed on the one shared hero field.
 * Optional `movieRoute` = destination path (LinkedHeroCard) so CSS matches CardBackgroundMovie /
 * heroPreviewForRoute — not the ambient page route.
 */
export function useCardMovie(
  parts: MaybeRefOrGetter<readonly (string | undefined)[]>,
  movieRoute?: MaybeRefOrGetter<string | undefined>,
) {
  const route = useRoute()
  const seed = computed(() => cardMovieSeed(toValue(parts)))
  const fieldRoute = computed(() => toValue(movieRoute) || route.path)
  // LEGIBILITY FIX (2026-07-24): the page ink (--vp-hero-ink) must follow the theme. useData().isDark
  // LAGS the html.dark class on the initial auto-resolution, so the first computed baked light-mode
  // (dark) ink onto dark pages. Read the AUTHORITATIVE html.dark class directly, seeded on mount and
  // kept live by a MutationObserver — correct on first client paint and reactive to every toggle.
  const dark = ref(false)
  onMounted(() => {
    const el = document.documentElement
    const sync = () => { dark.value = el.classList.contains('dark') }
    sync()
    const obs = new MutationObserver(sync)
    obs.observe(el, { attributes: true, attributeFilter: ['class'] })
    onUnmounted(() => obs.disconnect())
  })
  const cardStyle = computed(() => cardMovieColorVars(fieldRoute.value, seed.value, undefined, undefined, dark.value ? 'dark' : 'light'))
  return { seed, cardStyle, movieRoute: fieldRoute }
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

export { prefersReducedMotion, useHeroClock, useSharedHero, useVisibleMovieCanvas, viewportSize, type MovieIntensity } from './movie-canvas'

export type CorpusGridItem = {
  route: string
  id: string
  title: string
  glyph: string
  hue: number
}

/** Defer sealed corpus graph until after first paint — work is math-bounded in src/routes/corpus. */
export async function hubCardItemsAsync(locale: LocaleName): Promise<CorpusGridItem[]> {
  const { hubCardItems } = await import('../../src/wind/routes/corpus/index')
  return hubCardItems(locale)
}

export async function tagBrowserTagsAsync(): Promise<readonly string[]> {
  const { tagBrowserTags } = await import('../../src/wind/routes/corpus/index')
  return tagBrowserTags()
}

export async function tagBrowserItemsAsync(tag: string, locale: LocaleName): Promise<CorpusGridItem[]> {
  const { tagBrowserItems } = await import('../../src/wind/routes/corpus/index')
  return tagBrowserItems(tag, locale)
}
