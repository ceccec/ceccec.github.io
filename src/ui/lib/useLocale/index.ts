import { computed } from 'vue'
import { useData } from 'vitepress'
import { toGlagolitic } from '../../../quantum/library'

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
  return { bg, gla, prefix, localize, pick }
}
