// Browser-safe locale + display copy — no src/site/index (avoids mind/movie graph on client bootstrap).
// Server mirror: src/site/index.ts locale helpers (keep BULGARIAN_PHRASES in sync).
import { toGlagolitic } from '../../src/quantum/heaven/library'

export type LocaleName = 'gla' | 'en' | 'bg'

const LOCALE_LINK: Record<LocaleName, string> = { gla: '/', en: '/en/', bg: '/bg/' }

function stripLocalePrefix(route: string): string {
  if (route === '/bg' || route === '/bg/') return '/'
  if (route.startsWith('/bg/')) return route.slice(3) || '/'
  if (route === '/en' || route === '/en/') return '/'
  if (route.startsWith('/en/')) return route.slice(3) || '/'
  return route
}

export function localePath(route: string, locale: LocaleName = 'gla'): string {
  if (/^(https?:|#|mailto:)/.test(route)) return route
  if (/\.(json|txt|webmanifest)$/.test(route)) return route
  const path = stripLocalePrefix(route)
  const localeLink = locale === 'gla' ? LOCALE_LINK.gla : LOCALE_LINK[locale]
  if (path === '/') return localeLink
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${localeLink.replace(/\/$/, '')}${normalized}`
}

export function localeFromRoute(path: string): LocaleName {
  if (path.startsWith('/bg/') || path === '/bg') return 'bg'
  if (path.startsWith('/en/') || path === '/en') return 'en'
  return 'gla'
}

export function pickLocale<T>(locale: LocaleName, en: T, bg: T): T {
  if (locale === 'bg') return bg
  if (locale === 'gla' && typeof en === 'string') return toGlagolitic(en) as T
  return en
}

const CYRILLIC_RX = /[\u0400-\u04FF]/

const BULGARIAN_PHRASES: readonly (readonly [string, string])[] = [
  [
    'Pure computation: crypto, proofs, primitives — the clinging fire of truth. [Seven Star Rosetta — natural motion](/en/seven-star-rosetta) shows the 7-ray coprime proof in motion.',
    'Чисто изчисление: криптография, доказателства, примитиви — прилепващият огън на истината. [Седемзвездна Rosetta — естествено движение](/bg/seven-star-rosetta) показва 7-лъчното coprime доказателство в движение.',
  ],
  [
    'Four plain steps — the live proofs below follow the **eight trigrams (bāguà)**. Enter the three powers: [天 Heaven](/en/heaven) · [人 Human](/en/human) · [地 Earth](/en/earth).',
    'Четири прости стъпки — живите доказателства по-долу са под **осемте триграма (bāguà)**. Влез в трите сили: [天 Небе](/bg/heaven) · [人 Човек](/bg/human) · [地 Земя](/bg/earth).',
  ],
  ['Bulgarian history, Glagolitic, ethnogenesis, genetics — the land\'s memory.', 'Българска история, глаголица, етногенеза, генетика — паметта на земята.'],
  ['EM spectrum, Tesla patents, frequencies, dynamic simulations — arousing discovery.', 'EM спектър, патенти на Tesla, честоти, динамични симулации — възбуждащо откритие.'],
  ['Plain language, speech, UX, command flow — the communicative layer.', 'Ясен език, реч, UX, поток от команди — общуващият слой.'],
  ['Chakras, dualities, dimensions, joyous learning and fair life.', 'Чакри, двойности, измерения, радостно учене и справедлив живот.'],
  ['Area icons, glyphs, computer architecture 3-5-8, harmonic bands — visual form.', 'Икони на области, глифове, компютърна архитектура 3-5-8, хармонични ленти — визуална форма.'],
  ['Pure computation: crypto, proofs, primitives — the clinging fire of truth.', 'Чисто изчисление: криптография, доказателства, примитиви — прилепващият огън на истината.'],
  ['Natural law, the commons, society forms, gentle limits.', 'Природен закон, общото, обществени форми, нежни граници.'],
  ['The mind hub: the creative origin, the matrix, the architecture.', 'Центърът на ума: творческият източник, матрицата, архитектурата.'],
  ['## Start here · 三才 Three Powers', '## Започни тук · 三才 Трите сили'],
  ['## ☷ The Receptive', '## ☷ Възприемчивото'],
  ['## ☳ The Arousing', '## ☳ Възбуждащото'],
  ['## ☵ The Abysmal', '## ☵ Бездънното'],
  ['## ☱ The Joyous', '## ☱ Радостното'],
  ['## ☶ Keeping Still', '## ☶ Покоят'],
  ['## ☲ The Clinging', '## ☲ Прилепващото'],
  ['## ☴ The Gentle', '## ☴ Нежното'],
  ['## ☰ The Creative', '## ☰ Творческото'],
  ['Bulgarian heritage', 'Българско наследство'],
  ['Bulgarian history', 'Българска история'],
  ['Bulgarian ethnogenesis', 'Българска етногенеза'],
  ['Sacred geometry', 'Свещена геометрия'],
  ['Society', 'Общество'],
  ['Play & learn', 'Играй и учи'],
  ['Start here', 'Започни тук'],
  ['Related', 'Свързани'],
  ['Trinity gateways', 'Троични портали'],
  ['Support · contact', 'Подкрепа · контакт'],
  ['Open Revolut', 'Отвори Revolut'],
  ['Hide text (i)', 'Скрий текста (i)'],
  ['Show text (i)', 'Покажи текста (i)'],
]

function bulgarianFromEnglish(text: string): string {
  if (!text || CYRILLIC_RX.test(text)) return text
  let out = text.replace(/\/en\//g, '/bg/')
  const sorted = [...BULGARIAN_PHRASES].sort((a, b) => b[0].length - a[0].length)
  for (const [en, bg] of sorted) {
    if (out.includes(en)) out = out.split(en).join(bg)
  }
  return out
}

export function displayText(locale: LocaleName, text: string): string {
  if (!text) return text
  if (locale === 'bg') return bulgarianFromEnglish(text)
  if (locale === 'gla') return /[Ⰰ-ⱟ]/.test(text) ? text : toGlagolitic(text)
  return text
}
