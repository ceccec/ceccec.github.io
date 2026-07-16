// Pi-train station 1/9 — dissolution sequence order 0 (digit/reverse 1/9). The circuit opens here.
// Export-import fusion: only fused local exports live here — no passthrough re-exports from src/0.
// Vault imports (REDUCED_PLANCK · SPEED_OF_LIGHT) are dependency edges, not exports.
// PROTON_GYROMAGNETIC → pi-train wave 10 physical cut at src/6/4.
// Digit-1 gate (formerly src/0/1): period-6 orbit 1→2→4→8→7→5 under ×2 mod 9.

import { REDUCED_PLANCK, SPEED_OF_LIGHT } from '../../3/7'
import {   toUuid, merkleFold, digitalRoot } from '../../0'
import { PROTON_GYROMAGNETIC } from '../../6/4'
import { TAU } from '../../3/7'

export const digit = 1
export const role = 'circuit' as const
export const forward = 2
export const reverse = 0
export const tensComplement = 9
export const doubling = 2

/** Digit-1 vortex gate — period-6 doubling orbit under ×2 mod 9. */
export function digitFold() {
  const orbit = [1, 2, 4, 8, 7, 5]
  const powers = [1, 2, 4, 8, 16, 32].map((n, i) => ({ n, root: digitalRoot(n), step: i }))
  const orbitHolds = powers.map((p) => p.root).join(',') === orbit.join(',')
  const receipt = toUuid(`digit-fold:${digit}:fwd=${forward}:rev=${reverse}`)
  return {
    valid: orbitHolds && digit === 1,
    digit, role, forward, reverse, tensComplement, doubling, orbit, powers,
    root: merkleFold([receipt, ...powers.map((p) => toUuid(`d${digit}:${p.n}:${p.root}`))]),
    receipt,
    statement: 'One opens the doubling circuit: 1×2=2, 2×2=4, 4×2=8, 8×2=16→7, 7×2=14→5, 5×2=10→1 — the period-6 orbit under ×2 mod 9.',
  }
}

/** Reversible classical NOT — bit flip (bit 0 = LSB). */
export function rnot(bits: number, target: number): number {
  return bits ^ (1 << target)
}

/** Reversible Toffoli — universal for classical reversible computation. */
export function rtoffoli(bits: number, control1: number, control2: number, target: number): number {
  return (bits & (1 << control1)) !== 0 && (bits & (1 << control2)) !== 0 ? bits ^ (1 << target) : bits
}

/** CODATA experimental electron anomalous moment a_e = (g−2)/2. */
export const ELECTRON_G_FACTOR_ANOMALY = 1.15965218073e-3

/** Survival hazard composition — multiplicative levers clamped to (0.001, 0.999). */
export function composeHazard(base: number, levers: readonly number[]): number {
  let h = base
  for (const m of levers) h *= m
  return Math.min(0.999, Math.max(0.001, h))
}

/** Tesla rotating field — two currents 90° apart. */
export function rotatingField(t: number, freq: number, phaseShift = Math.PI / 2): { bx: number; by: number; theta: number; omega: number } {
  const omega = TAU * freq
  return { bx: Math.cos(omega * t), by: Math.cos(omega * t - phaseShift), theta: omega * t, omega }
}

/** Real-DFT magnitude spectrum in dB, clamped 0..255. */
export function powerSpectrum(samples: readonly number[], bins = 64): number[] {
  const N = samples.length
  return Array.from({ length: bins }, (_, k) => {
    let re = 0
    let im = 0
    for (let n = 0; n < N; n++) {
      const ang = (-TAU * k * n) / N
      re += samples[n] * Math.cos(ang)
      im += samples[n] * Math.sin(ang)
    }
    const db = 20 * Math.log10(Math.hypot(re, im) / N + 1e-9)
    return Math.max(0, Math.min(255, Math.round(((db + 100) / 70) * 255)))
  })
}

/** CCR diluent pressure = ambient − PPO₂ setpoint. */
export function rebreatherInertBar(ambientBar: number, ppo2SetpointBar = 1.3): number {
  return Math.max(0, ambientBar - ppo2SetpointBar)
}

/** Zero-point energy ½ħω for one mode. */
export function zeroPointEnergy(angularFreqRadS: number): number {
  return 0.5 * REDUCED_PLANCK * angularFreqRadS
}

/** Casimir pressure between ideal parallel plates. */
export function casimirPressure(plateGapM: number): number {
  return -(Math.PI ** 2 * REDUCED_PLANCK * SPEED_OF_LIGHT) / (240 * plateGapM ** 4)
}

/** Wavelength λ = c/f. */
export function wavelengthOf(frequencyHz: number): number {
  return SPEED_OF_LIGHT / frequencyHz
}

/** Larmor frequency γB₀. */
export function larmorFrequency(b0Tesla: number, gyromagnetic = PROTON_GYROMAGNETIC): number {
  return gyromagnetic * b0Tesla
}

/** Seed station: the en→bg phrase table (pure data; bulgarianHomeFromEnglish computes over it in wind/site). */
export const BULGARIAN_PHRASES: readonly (readonly [string, string])[] = [
  [
    'Pure computation: crypto, proofs, primitives — the clinging fire of truth. [Seven Star Rosetta — natural motion](/en/seven-star-rosetta) shows the 7-ray coprime proof in motion.',
    'Чисто изчисление: криптография, доказателства, примитиви — прилепващият огън на истината. [Седемзвездна Rosetta — естествено движение](/bg/seven-star-rosetta) показва 7-лъчното coprime доказателство в движение.',
  ],
  [
    'Four plain steps — the live proofs below follow the **eight trigrams (bāguà)**. Enter the three powers: [天 Heaven](/en/heaven) · [人 Human](/en/human) · [地 Earth](/en/earth).',
    'Четири прости стъпки — живите доказателства по-долу са под **осемте триграма (bāguà)**. Влез в трите сили: [天 Небе](/bg/heaven) · [人 Човек](/bg/human) · [地 Земя](/bg/earth).',
  ],
  ['Bulgarian history, Glagolitic, ethnogenesis, genetics — the land\'s memory.', 'Българска история, глаголица, етногенеза, генетика — паметта на земята.'],
  ['Bulgarian history, Glagolitic, ethnogenesis, genetics — documented cores, legends kept separate.', 'Българска история, глаголица, етногенеза, генетика — документирани ядра, легендите пазени отделно.'],
  ['EM spectrum, Tesla patents, frequencies, dynamic simulations — arousing discovery.', 'EM спектър, патенти на Tesla, честоти, динамични симулации — възбуждащо откритие.'],
  ['EM spectrum, Tesla patents, frequencies, dynamic simulations.', 'EM спектър, патенти на Tesla, честоти, динамични симулации.'],
  ['Plain language, speech, UX, command flow — the communicative layer.', 'Ясен език, реч, UX, поток от команди — общуващият слой.'],
  ['Plain language, speech, UX, command flow.', 'Ясен език, реч, UX, поток от команди.'],
  ['Chakras, dualities, dimensions, joyous learning and fair life.', 'Чакри, двойности, измерения, радостно учене и справедлив живот.'],
  ['Dualities, dimensions, learning by play — documented cores with the flagged parts labelled.', 'Двойности, измерения, учене чрез игра — документирани ядра с обозначени спорни части.'],
  ['Area icons, glyphs, computer architecture 3-5-8, harmonic bands — visual form.', 'Икони на области, глифове, компютърна архитектура 3-5-8, хармонични ленти — визуална форма.'],
  ['Area icons, glyphs, computer architecture 3-5-8, harmonic bands.', 'Икони на области, глифове, компютърна архитектура 3-5-8, хармонични ленти.'],
  ['Pure computation: crypto, proofs, primitives — the clinging fire of truth.', 'Чисто изчисление: криптография, доказателства, примитиви — прилепващият огън на истината.'],
  ['Pure computation: crypto, proofs, primitives. The theorem registry — every theorem proven by computation, each a printable scientific paper.', 'Чисто изчисление: криптография, доказателства, примитиви. Регистърът от теореми — всяка теорема доказана чрез изчисление, всяка печатна научна статия.'],
  ['Natural law, the commons, society forms, gentle limits.', 'Природен закон, общото, обществени форми, нежни граници.'],
  ['The mind hub: the creative origin, the matrix, the architecture.', 'Центърът на ума: творческият източник, матрицата, архитектурата.'],
  ['The creative origin, the matrix, the architecture.', 'Творческият източник, матрицата, архитектурата.'],
  ['Four plain steps — see, learn, use, prove. Every page below is computed from one open source you can check yourself.', 'Четири прости стъпки — виж, научи, използвай, докажи. Всяка страница по-долу е изчислена от един отворен източник, който можеш да провериш сам.'],
  ['## Start here · 三才 Three Powers', '## Започни тук · 三才 Трите сили'],
  ['## Proofs & computation', '## Доказателства и изчисление'],
  ['## Physics & simulations', '## Физика и симулации'],
  ['## Language & interfaces', '## Език и интерфейси'],
  ['## Learning & dualities', '## Учене и двойности'],
  ['## Form & architecture', '## Форма и архитектура'],
  ['## Nature & society', '## Природа и общество'],
  ['## Heritage & history', '## Наследство и история'],
  ['## Origin & mind', '## Източник и ум'],
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

/** Tri-locale path primitives + the en→bg translator — the ONE copy; wind/site (server) and
 * .vitepress/lib/site-locale.ts (client) both import from here. A mirror is drift waiting to ship:
 * the dissolved twin had diverged three ways (gla placeholders, localePath default, bare-link prefixing). */
export type LocaleName = 'gla' | 'en' | 'bg'

export const LOCALE_LINK: Record<LocaleName, string> = { gla: '/gla/', en: '/', bg: '/bg/' }

export function stripLocalePrefix(route: string): string {
  if (route === '/bg' || route === '/bg/') return '/'
  if (route.startsWith('/bg/')) return route.slice(3) || '/'
  if (route === '/en' || route === '/en/') return '/'
  if (route.startsWith('/en/')) return route.slice(3) || '/'
  if (route === '/gla' || route === '/gla/') return '/'
  if (route.startsWith('/gla/')) return route.slice(2 * 2) || '/'
  return route
}

export function localePath(route: string, locale: LocaleName = 'en'): string {
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
  if (path.startsWith('/gla/') || path === '/gla') return 'gla'
  return 'en'
}

const CYRILLIC_RX = /[Ѐ-ӿ]/

/** English → Bulgarian when locale is bg and text has no Cyrillic yet (longest keys first). */
export function bulgarianFromEnglish(text: string): string {
  if (!text || CYRILLIC_RX.test(text)) return text
  let out = text.replace(/\/en\//g, '/bg/').replace(/\]\(\/(?!bg\/|gla\/|http)/g, '](/bg/')
  const sorted = [...BULGARIAN_PHRASES].sort((a, b) => b[0].length - a[0].length)
  for (const [en, bg] of sorted) {
    if (out.includes(en)) out = out.split(en).join(bg)
  }
  return out
}
