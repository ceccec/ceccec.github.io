import { computed } from 'vue'
import { useData } from 'vitepress'
import { toGlagolitic } from '../../../quantum/library'

// Keys whose VALUES are identity/route/style, never display text — they must NOT be transcoded in the Glagolitic
// root (a route or a class name becoming Glagolitic would break it). pickDeep skips them while descending a
// locale data object; every other string field is transcoded, so the whole object reads in the movie's script.
const GLA_SKIP_KEY = /^(route|link|url|href|to|path|slug|id|key|class|className|color|colour|hue|glyph|icon|src|anchor|code|lang|locale|tag|kind)$/i
function transcodeDeep(value: unknown): unknown {
  if (typeof value === 'string') return toGlagolitic(value)
  if (Array.isArray(value)) return value.map(transcodeDeep)
  if (value && typeof value === 'object' && Object.getPrototypeOf(value) === Object.prototype) {
    const out: Record<string, unknown> = {}
    for (const [key, v] of Object.entries(value)) out[key] = GLA_SKIP_KEY.test(key) ? v : transcodeDeep(v)
    return out
  }
  return value // numbers, booleans, refs, class instances — pass through untouched
}

// One locale lens for the whole theme. Every component used to repeat the same
// three lines — read the lang, derive a `bg` flag, and localize a route by
// prefixing `/bg` (keeping the root as `/` and leaving asset URLs untouched).
// That redundancy now lives here once: `bg` for bilingual text, `gla` for the
// Glagolitic root, `prefix` for the locale path segment, and `localize(route)`
// for turning an English route into the current locale's route. No network, pure
// derivation from VitePress data.
export function useLocale() {
  const { lang } = useData()
  const bg = computed(() => lang.value.startsWith('bg'))
  // The Glagolitic ROOT locale (lang 'cu'). Its UI is the English UI rendered in
  // the Glagolitic SCRIPT — computed by transcoding, never a separate hand-typed set.
  const gla = computed(() => lang.value.startsWith('cu'))
  const prefix = computed(() => (bg.value ? '/bg' : ''))
  // Localize an internal route into the current locale. The root stays `/`, and
  // anything that looks like a static asset (json/txt/webmanifest) is left as-is.
  function localize(route: string) {
    if (/\.(json|txt|webmanifest)$/.test(route)) return route
    return prefix.value + (route === '/' ? '/' : route)
  }
  // Pick the locale's value: en in English, bg in Bulgarian, and in the Glagolitic
  // root a STRING is transcoded from English via toGlagolitic — NOTHING bypasses
  // transcoding, so the whole UI reads in Glagolitic without a second hand-kept set
  // of strings. Non-string values (routes, numbers, nodes) are never transcoded —
  // they fall through to en (a route is localized by `localize`, not picked).
  function pick<T>(en: T, bgValue: T): T {
    if (gla.value && typeof en === 'string') return toGlagolitic(en) as unknown as T
    return bg.value ? bgValue : en
  }
  // Transcode one string in the Glagolitic root (else identity) — wrap a template interpolation that is not a
  // bg/en pair: {{ tg(item.title) }}. Non-strings pass through.
  function tg<T>(value: T): T {
    return gla.value && typeof value === 'string' ? (toGlagolitic(value) as unknown as T) : value
  }
  // The DEEP pick for locale DATA objects/arrays (bg.value ? enObj : bgObj): in the Glagolitic root it transcodes
  // every string FIELD of the English value, except route/identity/style keys (GLA_SKIP_KEY) — so a whole locale
  // object reads in Glagolitic without a hand-kept third set, and routes/classes stay intact. Else: en or bg.
  function pickDeep<T>(en: T, bgValue: T): T {
    return gla.value ? (transcodeDeep(en) as T) : bg.value ? bgValue : en
  }
  return { bg, gla, prefix, localize, pick, tg, pickDeep }
}
