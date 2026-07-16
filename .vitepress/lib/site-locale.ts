// Browser-safe locale + display copy — no src/site barrel (avoids mind/movie graph on client bootstrap).
// The path primitives + en→bg translator live at station src/1/9: the ONE copy, imported here AND by
// wind/site. The former mirror drifted three ways (gla placeholders on the EN root, localePath default,
// bare-link prefixing) — a twin is drift waiting to ship; an import cannot drift.
import { toGlagolitic } from '../../src/quantum/heaven/library'
import { bulgarianFromEnglish, type LocaleName } from '../../src/1/9'

export { localePath, localeFromRoute } from '../../src/1/9'
export type { LocaleName } from '../../src/1/9'

export function pickLocale<T>(locale: LocaleName, en: T, bg: T): T {
  if (locale === 'bg') return bg
  if (locale === 'gla' && typeof en === 'string') return toGlagolitic(en) as T
  return en
}

export function displayText(locale: LocaleName, text: string): string {
  if (!text) return text
  if (locale === 'bg') return bulgarianFromEnglish(text)
  if (locale === 'gla') return /[Ⰰ-ⱟ]/.test(text) ? text : toGlagolitic(text)
  return text
}
