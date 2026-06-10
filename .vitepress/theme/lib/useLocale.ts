import { computed } from 'vue'
import { useData } from 'vitepress'

// One locale lens for the whole theme. Every component used to repeat the same
// three lines — read the lang, derive a `bg` flag, and localize a route by
// prefixing `/bg` (keeping the root as `/` and leaving asset URLs untouched).
// That redundancy now lives here once: `bg` for bilingual text, `prefix` for the
// locale path segment, and `localize(route)` for turning an English route into
// the current locale's route. No network, pure derivation from VitePress data.
export function useLocale() {
  const { lang } = useData()
  const bg = computed(() => lang.value.startsWith('bg'))
  const prefix = computed(() => (bg.value ? '/bg' : ''))
  // Localize an internal route into the current locale. The root stays `/`, and
  // anything that looks like a static asset (json/txt/webmanifest) is left as-is.
  function localize(route: string) {
    if (/\.(json|txt|webmanifest)$/.test(route)) return route
    return prefix.value + (route === '/' ? '/' : route)
  }
  return { bg, prefix, localize }
}
