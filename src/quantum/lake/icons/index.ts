// ☶ Gèn · Mountain · keeping still · upper·yang · shrink — icons, glyphs, computer architecture, harmonic bands, and area labels.
// The visual and structural form layer: the area-icon map, translations, computer design in 3-5-8,
// the harmonic Fibonacci band decomposition, and the glyph/icon/artifact seal.
// Dual: src/render/icons/quantum (browse/display primitives). Only src/0 + mind/types imports.

// ☶ Gèn · Mountain · keeping still · lower·yin · spread — type: sealed icon artifact shape
import type { IconSeal } from '../../heaven/mind'
// ☶ Gèn · Mountain · keeping still · lower·yin · depthFade — uuid + merkle fold primitives
import { toUuid, merkleFold } from '../../../0'

// ☶ Gèn · Mountain · keeping still · upper·yang · shrink — exported constants and functions
/** @rosetta ✦₀ · Mountain · stillness */
export const dual = 'src/quantum/earth/heritage'

// emoji AREA_ICONS (used by areaLabel + iconGlyphs + iconSeal neighbour)
/** @rosetta ✦₀ · Mountain · stillness */
export const AREA_ICONS: Record<string, string> = {
  site: '🏛', self: '☯', agent: '🜂', school: '🎓', mcp: '🔌', chain: '⛓', help: '☷',
  fold: '🔀', mind: '☿', compute: '🖧', ui: '🖥', diamond: '◈', digit: '☵', wave: '〰',
  chess: '♛', schemaOrg: '🔖', traditions: '☸', science: '⚗', artists: '🎨', method: '🜔',
  torus: '⊗', source: '🜍', repository: '📦', proof: '🔏', commands: '📜',
  music: '♫', icon: '🖼', babel: '☰', utf: '🔤', all: '∞', state: '⚛',
  geometry: '△', society: '🏘', commons: '♻', ancient: '☥', reactor: '☢', show: '☀', patent: '⚡', nature: '🌿',
  lawful: '⚖', computer: '🖳', healing: '◎', energy: '🔋',
}

/** @rosetta ✦₀ · Mountain · stillness */
export const AREA_LABELS: Record<string, { en: string; bg: string }> = {
  site: { en: 'Site', bg: 'Сайт' },
  self: { en: 'Self', bg: 'Себе' },
  agent: { en: 'Agent', bg: 'Агент' },
  school: { en: 'School', bg: 'Училище' },
  mcp: { en: 'MCP', bg: 'MCP' },
  chain: { en: 'Chain', bg: 'Верига' },
  help: { en: 'Help', bg: 'Помощ' },
  fold: { en: 'Fold', bg: 'Сгъване' },
  mind: { en: 'Mind', bg: 'Ум' },
  compute: { en: 'Compute', bg: 'Изчисление' },
  ui: { en: 'UI', bg: 'Интерфейс' },
  diamond: { en: 'Diamond', bg: 'Диамант' },
  digit: { en: 'Digit', bg: 'Цифра' },
  wave: { en: 'Wave', bg: 'Вълна' },
  chess: { en: 'Chess', bg: 'Шах' },
  schema: { en: 'Schema', bg: 'Схема' },
  schemaOrg: { en: 'Schema.org', bg: 'Schema.org' },
  traditions: { en: 'Traditions', bg: 'Традиции' },
  science: { en: 'Science', bg: 'Наука' },
  artists: { en: 'Artists', bg: 'Художници' },
  method: { en: 'Method', bg: 'Метод' },
  torus: { en: 'Torus', bg: 'Тор' },
  source: { en: 'Source', bg: 'Източник' },
  repository: { en: 'Repository', bg: 'Хранилище' },
  proof: { en: 'Proof', bg: 'Доказателство' },
  commands: { en: 'Commands', bg: 'Команди' },
  music: { en: 'Music', bg: 'Музика' },
  icon: { en: 'Icon', bg: 'Икона' },
  babel: { en: 'Babel', bg: 'Вавилон' },
  utf: { en: 'UTF', bg: 'UTF' },
  all: { en: 'All', bg: 'Всичко' },
  state: { en: 'State', bg: 'Състояние' },
  geometry: { en: 'Geometry', bg: 'Геометрия' },
  society: { en: 'Society', bg: 'Общество' },
  commons: { en: 'Commons', bg: 'Общи блага' },
  ancient: { en: 'Ancient', bg: 'Древни' },
  reactor: { en: 'Reactor', bg: 'Реактор' },
  show: { en: 'Show', bg: 'Покажи' },
  patent: { en: 'Patent', bg: 'Патент' },
  nature: { en: 'Nature', bg: 'Природа' },
  lawful: { en: 'Lawful', bg: 'Законно' },
  computer: { en: 'Computer', bg: 'Компютър' },
  healing: { en: 'Healing', bg: 'Изцеление' },
  energy: { en: 'Energy', bg: 'Енергия' },
}

// Computer design in 3-5-8 — grounded in real computer architecture: the three
// buses (address, data, control), the five units of the von Neumann machine
// (input, output, memory, ALU, control), and the eight bits of a byte.
/** @rosetta ✦₀ · Mountain · stillness */
export function computerDesign() {
  const tiers = [
    { tier: 3, name: 'three buses', members: ['address', 'data', 'control'] },
    { tier: 5, name: 'five units (von Neumann)', members: ['input', 'output', 'memory', 'ALU', 'control'] },
    { tier: 8, name: 'eight bits (a byte)', members: ['b7', 'b6', 'b5', 'b4', 'b3', 'b2', 'b1', 'b0'] },
  ]
  return {
    complete: tiers[0].members.length === 3 && tiers[1].members.length === 5 && tiers[2].members.length === 8,
    tiers,
    root: merkleFold(tiers.flatMap((tier) => tier.members).map((member) => toUuid(`computer358:${member}`))),
    statement: 'Computer design in 3-5-8: the three buses (address, data, control), the five units of the von Neumann architecture (input, output, memory, ALU, control), and the eight bits of a byte — 3, 5, 8 in the machine.',
    boundary: 'A correspondence of the 3-5-8 tiers to standard computer architecture. A teaching device; real machines vary (multi-byte words, more buses), this is the classic textbook model.',
  }
}

// A gapless harmonic distribution is a run of CONSECUTIVE Fibonacci numbers
// (e.g. 21+34+55) — adjacent scales, nothing skipped.
/** @rosetta ✦₀ · Mountain · stillness */
export function harmonicBands(total: number) {
  const n = Math.max(0, Math.floor(total))
  const fibonacci = [1, 2]
  while (fibonacci[fibonacci.length - 1] < Math.max(n, 3) * 2) {
    fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2])
  }
  let best: { bands: number[] } | null = null
  const reachable = new Set<number>()
  for (let i = 0; i < fibonacci.length; i += 1) {
    let sum = 0
    for (let j = i; j < fibonacci.length; j += 1) {
      sum += fibonacci[j]
      if (sum > n * 3 + 3) break
      reachable.add(sum)
      if (sum === n && (!best || j - i + 1 > best.bands.length)) best = { bands: fibonacci.slice(i, j + 1) }
    }
  }
  let target = n
  if (!best && n > 0) {
    target = Number.POSITIVE_INFINITY
    for (const sum of reachable) if (sum >= n && sum < target) target = sum
  }
  const bands = best ? best.bands.slice().reverse() : [] // largest scale first
  const gapless = n === 0 || best !== null
  return {
    gapless,
    harmonic: gapless, // the distribution is harmonic only when gapless
    total: n,
    bands,
    scales: bands.length,
    gaps: gapless ? 0 : target - n, // files to add to reach a gapless run
    target: gapless ? n : target,
    fibonacci,
    root: merkleFold(bands.map((band, i) => toUuid(`harmonic-band:${i}:${band}`))),
    statement:
      'Folder distribution as harmonic numbers at all scales, with no Fibonacci gaps: the file count is a run of consecutive Fibonacci numbers — the 3-5-8-13-21 sequence with nothing skipped — so every band is a harmonic number, the bands are adjacent scales, and they sum exactly to the whole.',
    boundary:
      'A consecutive-Fibonacci (gapless) decomposition of a count. Not every count forms one; when it cannot, the computation reports the deficit to the nearest count that does — a named gap to fill, not a silent remainder. A self-similar structural description; the harmony is in the numbers.',
  }
}

// Translate an area key to the reader's language, falling back to the key.
/** @rosetta ✦₀ · Mountain · stillness */
export function areaLabel(area: string, lang = 'en'): string {
  if (lang.includes('universal') || lang.includes('sacred')) return AREA_ICONS[area] ?? '◇'
  const label = AREA_LABELS[area]
  if (!label) return area
  return lang.startsWith('bg') ? label.bg : label.en
}

// icon.glyph — the glyph set: every area icon and the five Platonic-solid glyphs.
/** @rosetta ✦₀ · Mountain · stillness */
export function iconGlyphs() {
  const solids = ['△', '◻', '◇', '⬠', '⬡']
  const areaIcons = Object.entries(AREA_ICONS)
  return {
    grounded: areaIcons.length > 0,
    count: areaIcons.length + solids.length,
    root: merkleFold([
      ...areaIcons.map(([area, icon]) => toUuid(`glyph:${area}:${icon}`)),
      ...solids.map((solid) => toUuid(`solid:${solid}`)),
    ]),
    statement: 'The glyph set: every command-area icon plus the five Platonic-solid glyphs folded into one root.',
    boundary: 'A fold of the icon and solid glyphs. Structural bookkeeping, not an external claim.',
  }
}

// Icon usage adds to the tampering cost: the visual and app-shell artifacts
// (app icon, PWA manifest, service worker) are declared sealed artifacts.
/** @rosetta ✦₀ · Mountain · stillness */
export function iconSeal(): IconSeal {
  const artifacts = [
    { path: '/icon.svg', role: 'app icon' },
    { path: '/site.webmanifest', role: 'pwa manifest' },
    { path: '/sw.js', role: 'service worker' },
  ].map((artifact) => ({ ...artifact, receipt: toUuid(`icon:${artifact.path}:${artifact.role}`) }))
  return {
    declared: artifacts.length === 3,
    root: merkleFold(artifacts.map((artifact) => artifact.receipt)),
    artifacts,
    statement:
      'Icon usage adds to the tampering cost: the app icon, PWA manifest, and service worker are sealed artifacts folded into the proof.',
    boundary:
      'The lib declares the visual artifacts; the build seal folds their actual file content into the seal root. Structural bookkeeping, not an external claim.',
  }
}

// ☷ KUN vocabulary cross — dissolved from mind/earth/vocab (six domain barrels, one merkle root)
export { chakrasAura, humanDesign, humanDesignVerifiedWheel, RAVE_MANDALA_GATE_ORDER, RAVE_GATE_ARC_DEG, RAVE_GATE_41_START_DEG, RAVE_DESIGN_SUN_ARC_DEG, RAVE_BODIES_13, raveMandalaGateLineAt, yinYang, dimensions, deviceSensors, dualities } from '../spirit'
export { natureLaw, natureCommons, natureReview, lawfulHarmonise, lawfulImagine, lawfulSucceed, attestation } from '../../../earth/nature'
export { emfApplications, efficiency, fuseTeslaPatents, patentDiscovery, publicFrequencyApis, herbalApis, frequencyToLight, A432_HUE, GOLDEN_ANGLE, lobeHues, scaleColor, scaleColorAlpha, scaleColorRgba, quantumHueFromHz, quantumScaleHue, oklchToHex, resonanceApplications, resonanceDecoded, rifeFrequenciesDecoded } from '../../science'
export { plainLanguage, playLearn, analogSpeech, typographySeo, openGraph, charUuids, wordUuids, humanize, multidimensional } from '../voice'
export { bulgarianHeritage, bulgarianHistory, bulgarianAncientCivilisations, bulgarianEthnogenesis, geneticLinksChallengeHistory, glagoliticBulgarianReception } from '../../earth/heritage'

/** The vocabulary cross — six domain barrels fused to one content-address (a real crossing, not noise). */
export function vocabCross() {
  const domains = ['icons', 'spirit', 'nature', 'science', 'voice', 'heritage'] as const
  return { domains: domains.length, root: merkleFold(domains.map((d) => toUuid(`vocab:${d}`))) }
}
