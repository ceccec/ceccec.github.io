// ☷ KUN (Earth · reception) — pure vocabulary: constant knowledge arrays, no matrix dependency

import type { IconSeal } from './types.ts'
import { conceptCommands } from './atoms.ts'
import { toUuid, merkleFold, foldPair, isUuid } from '../../0/index.ts'
import { SPEED_OF_LIGHT } from '../../0/index.ts'

// ─── Constants used by areaLabel / iconGlyphs ────────────────────────────────

// emoji AREA_ICONS (used by areaLabel + iconGlyphs + iconSeal neighbour)
const AREA_ICONS: Record<string, string> = {
  site: '🏛', self: '☯', agent: '🜂', school: '🎓', mcp: '🔌', chain: '⛓', help: '☷',
  fold: '🔀', mind: '☿', compute: '🖧', ui: '🖥', diamond: '◈', digit: '☵', wave: '〰',
  chess: '♛', schemaOrg: '🔖', traditions: '☸', science: '⚗', artists: '🎨', method: '🜔',
  torus: '⊗', source: '🜍', repository: '📦', proof: '🔏', commands: '📜',
  music: '♫', icon: '🖼', babel: '☰', utf: '🔤', all: '∞', state: '⚛',
  geometry: '△', society: '🏘', commons: '♻', ancient: '☥', reactor: '☢', show: '☀', patent: '⚡', nature: '🌿',
  lawful: '⚖', computer: '🖳', healing: '◎', energy: '🔋',
}

const AREA_LABELS: Record<string, { en: string; bg: string }> = {
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

export { AREA_ICONS, AREA_LABELS }

// ─── Pure-leaf vocabulary functions (no matrix parameter) ────────────────────

// Simple to use, rich in features. Sometimes the simplicity is missing in all the
// complexity; this is the plain-language layer — one clear line per idea, so a
// first-time reader understands the portal before meeting its depth. Each line
// links to the precise page where the full definition lives.
export function plainLanguage() {
  const lines = [
    { term: 'Double Torus', plain: 'A learning portal you can check for yourself: every claim is a number anyone can recompute.', route: '/' },
    { term: 'Receipt', plain: 'A short code that fingerprints something — change one bit and the code changes.', route: '/architecture' },
    { term: 'Seal', plain: 'Proof the whole thing still adds up: recompute it and compare.', route: '/architecture' },
    { term: 'Palette & melody', plain: 'Type a word and get the same colours and tune every time, shareable by citing the word.', route: '/school' },
    { term: 'Sonification', plain: 'Hear data as sound — to catch what the eye misses, or to use without a screen.', route: '/commands' },
    { term: 'MCP', plain: 'A way for AI assistants to call these tools directly.', route: '/mcp' },
    { term: 'Academy', plain: 'Five short courses; finish them and you earn a credential you can prove.', route: '/academy' },
    { term: 'Offline & free', plain: 'It all runs on your device — no account, nothing sent anywhere.', route: '/boundaries' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`plain:${entry.term}`) }))
  return {
    clear: lines.length >= 8 && lines.every((line) => line.plain.length > 0),
    lines,
    count: lines.length,
    root: merkleFold(lines.map((line) => line.receipt)),
    statement:
      'Simple to use, rich in features: one plain-language line for each idea, so anyone understands the portal before meeting its depth.',
    boundary:
      'Plain restatements of the model\'s own ideas for a first-time reader. They simplify; the precise definitions live in the pages they link to.',
  }
}

// Kids like to learn playing. Type a word and every letter becomes a coloured
// tile that sounds a friendly note (mapped onto a C-major scale, so any word is a
// little tune). Deterministic: the same word always makes the same song and the
// same colours — that is the lesson, learned by play. Tap to hear, or play the
// whole word.
export function playLearn(word = 'play') {
  const SCALE = [261.63, 293.66, 329.63, 349.23, 392.0, 440.0, 493.88, 523.25] // C major, C4..C5
  const NOTE = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']
  const letters = [...word].filter((ch) => ch.trim().length > 0).slice(0, 16).map((ch, index) => {
    const seed = toUuid(`play:${ch.toLowerCase()}:${index}`)
    const value = Number.parseInt(seed.replace(/[^0-9a-f]/g, '').slice(0, 6) || '0', 16)
    const step = value % 8
    return {
      char: ch,
      step,
      note: NOTE[step],
      frequency: SCALE[step],
      hue: value % 360,
      hsl: `hsl(${value % 360}, 72%, 62%)`,
      receipt: seed,
    }
  })
  return {
    playable: letters.length > 0,
    word,
    letters,
    count: letters.length,
    root: merkleFold(letters.map((letter) => letter.receipt)),
    statement:
      'Kids like to learn playing: each letter of a word becomes a coloured tile and a note on a C-major scale, so any word is a little song. The same word always plays the same song — deterministic computation, learned by play.',
    boundary:
      'A playful deterministic mapping of letters to colours and notes (on a fixed major scale). A toy for learning that the same input gives the same output — not a claim about language, music theory, or synaesthesia.',
  }
}

// A gapless harmonic distribution is a run of CONSECUTIVE Fibonacci numbers
// (e.g. 21+34+55) — adjacent scales, nothing skipped.
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

// Quantum speech is analog by nature. Text is discrete symbols; speech is a
// continuous wave.
export function analogSpeech() {
  const params = [
    { param: 'pitch', range: [0, 2] as const, note: 'continuous tone — the voice is a wave, not a symbol' },
    { param: 'rate', range: [0.5, 2] as const, note: 'continuous tempo' },
    { param: 'volume', range: [0, 1] as const, note: 'continuous loudness' },
  ].map((entry) => ({ ...entry, analog: entry.range[1] > entry.range[0], receipt: toUuid(`analog-speech:${entry.param}`) }))
  return {
    analog: params.every((entry) => entry.analog),
    params,
    root: merkleFold(params.map((entry) => entry.receipt)),
    statement: 'Quantum speech is analog by nature: text is discrete symbols, but speech is a continuous wave — pitch, rate, and volume vary smoothly. Turning text into speech bridges the discrete to the analog.',
    boundary: 'A description of speech as a continuous signal shaped by analog parameters, rendered by the device Web Speech API. Not a claim about quantum acoustics.',
  }
}

// Best SEO starts with typography. Readable, well-structured text is what
// readers and crawlers reward; system fonts — no external font fetch, no layout shift.
export function typographySeo() {
  const principles = [
    { principle: 'system fonts, no fetch', seo: 'instant text render, zero network, no layout shift' },
    { principle: 'legibility rendering', seo: 'optimizeLegibility, ligatures, font smoothing' },
    { principle: 'comfortable measure', seo: 'a ~72ch line length so prose is easy to read' },
    { principle: 'clear semantic hierarchy', seo: 'one h1, balanced headings, ordered structure' },
    { principle: 'tabular figures', seo: 'aligned UUIDs, roots, and numbers' },
    { principle: 'steady reading rhythm', seo: 'line-height 1.75 and pretty wrapping' },
  ].map((entry, index) => ({ ...entry, receipt: toUuid(`typography-seo:${index}:${entry.principle}`) }))
  return {
    grounded: principles.length === 6,
    principles,
    root: merkleFold(principles.map((entry) => entry.receipt)),
    statement: 'Best SEO starts with typography: system fonts (no fetch, no layout shift), legible rendering, a comfortable measure, a clear semantic hierarchy, tabular figures, and a steady reading rhythm.',
    boundary: 'Typographic and structural principles applied in the theme CSS. They aid readability and crawlability; they are not a ranking guarantee.',
  }
}

// Open Graph is computed from frontmatter. Each page's social card is derived from
// its own frontmatter, so a page reveals its card without any code change.
export function openGraph() {
  const fields = [
    'og:type', 'og:title', 'og:description', 'og:url', 'og:locale', 'og:image',
    'twitter:card', 'twitter:title', 'twitter:description', 'twitter:image',
  ].map((field, index) => ({ field, source: 'frontmatter', receipt: toUuid(`open-graph:${index}:${field}`) }))
  return {
    computed: fields.length === 10,
    fields,
    root: merkleFold(fields.map((entry) => entry.receipt)),
    statement: 'Open Graph is computed from frontmatter: each page derives its og: and twitter: social card from its own frontmatter (ogTitle, ogDescription, ogType, image), falling back to the page title and description.',
    boundary: 'A declared mapping from frontmatter to Open Graph and Twitter meta, applied at render time. It does not guarantee how any platform renders the card.',
  }
}

// Each char a UUID, and next the words. Content-addressing goes all the way down.
export function charUuids(text = '') {
  const chars = [...text].map((char, index) => ({ char, index, uuid: toUuid(`char:${index}:${char}`) }))
  return {
    count: chars.length,
    chars,
    root: chars.length > 0 ? merkleFold(chars.map((entry) => entry.uuid)) : toUuid('char:empty'),
    statement: 'Each char a UUID: every character folds to a content UUID, and the characters fold into one root.',
    boundary: 'A content-addressing of characters. Structural bookkeeping over text, not an external claim.',
  }
}

export function wordUuids(text = '') {
  const words = text
    .split(/\s+/)
    .filter(Boolean)
    .map((word, index) => {
      const chars = [...word].map((char, position) => toUuid(`char:${position}:${char}`))
      return { word, index, charRoot: chars.length > 0 ? merkleFold(chars) : toUuid('char:empty'), uuid: toUuid(`word:${index}:${word}`) }
    })
  return {
    count: words.length,
    words,
    root: words.length > 0 ? merkleFold(words.map((entry) => entry.uuid)) : toUuid('word:empty'),
    statement: 'Next for the words: every word folds from its characters to a word UUID, and the words fold into the text root — char to word to whole.',
    boundary: 'A content-addressing of words built from characters. Structural bookkeeping over text, not an external claim.',
  }
}

// Computer design in 3-5-8 — grounded in real computer architecture: the three
// buses (address, data, control), the five units of the von Neumann machine
// (input, output, memory, ALU, control), and the eight bits of a byte.
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

// Chakras and aura in 3-5-8 — mapped honestly to the yogic tradition.
export function chakrasAura() {
  const tiers = [
    { tier: 3, name: 'three nadis (channels)', members: ['ida', 'pingala', 'sushumna'] },
    { tier: 5, name: 'five koshas (sheaths)', members: ['annamaya', 'pranamaya', 'manomaya', 'vijnanamaya', 'anandamaya'] },
    { tier: 8, name: 'eight limbs (ashtanga)', members: ['yama', 'niyama', 'asana', 'pranayama', 'pratyahara', 'dharana', 'dhyana', 'samadhi'] },
  ]
  return {
    complete: tiers[0].members.length === 3 && tiers[1].members.length === 5 && tiers[2].members.length === 8,
    tiers,
    root: merkleFold(tiers.flatMap((tier) => tier.members).map((member) => toUuid(`chakra:${member}`))),
    statement: 'Chakras and aura in 3-5-8: the three nadis (ida, pingala, sushumna), the five koshas (the sheaths of the self), and the eight limbs of yoga (ashtanga) — 3, 5, 8 in the yogic tradition.',
    boundary: 'A correspondence to concepts in the yogic and tantric traditions (nadis, koshas, ashtanga). A spiritual and teaching framework, NOT science: the aura is not a measurable field, and no medical or factual claim is made.',
  }
}

// Human Design in 3-5-8 — mapped honestly.
export function humanDesign() {
  const tiers = [
    { tier: 3, name: 'three circuit groups', members: ['individual', 'tribal', 'collective'] },
    { tier: 5, name: 'five types', members: ['manifestor', 'generator', 'manifesting generator', 'projector', 'reflector'] },
    { tier: 8, name: 'eight trigrams (under the 64 gates)', members: ['☰', '☱', '☲', '☳', '☴', '☵', '☶', '☷'] },
  ]
  return {
    complete: tiers[0].members.length === 3 && tiers[1].members.length === 5 && tiers[2].members.length === 8,
    gates: 64, // 8 x 8 trigrams = 64 gates = 64 I Ching hexagrams = 64 DNA codons
    tiers,
    root: merkleFold(tiers.flatMap((tier) => tier.members).map((member) => toUuid(`hd:${member}`))),
    statement: 'Human Design in 3-5-8: the three circuit groups (individual, tribal, collective), the five types, and the eight trigrams that underlie its 64 gates — 64 = the I Ching hexagrams = the 64 DNA codons.',
    boundary: 'A correspondence to Human Design, a modern synthesis of I Ching, astrology, Kabbalah, and the chakras. A belief and teaching system, NOT scientifically validated; no factual claim about any person is made.',
  }
}

// Complete yin and yang in 3-5-8.
export function yinYang() {
  const three = { tier: 3, name: 'three powers (三才)', members: ['heaven', 'earth', 'human'] }
  const five = { tier: 5, name: 'five elements (五行)', members: ['wood', 'fire', 'earth', 'metal', 'water'] }
  const eight = { tier: 8, name: 'eight trigrams (八卦)', members: ['☰', '☱', '☲', '☳', '☴', '☵', '☶', '☷'] }
  const tiers = [three, five, eight]
  const fibonacci = eight.members.length === five.members.length + three.members.length // 8 = 5 + 3
  return {
    complete: three.members.length === 3 && five.members.length === 5 && eight.members.length === 8 && fibonacci,
    taiji: { symbol: '☯', source: 'taiji (太极)' },
    tiers,
    root: merkleFold(tiers.flatMap((tier) => tier.members).map((member) => toUuid(`yinyang:${member}`))),
    statement: 'Yin and yang, completed in 3-5-8: from the taiji unfold the three powers (heaven, earth, human), the five elements (wood, fire, earth, metal, water), and the eight trigrams — 3, 5, 8, the Fibonacci tiers, in the oldest cosmology.',
    boundary: 'A mapping of the 3-5-8 tiers onto the classical Chinese cosmology (三才, 五行, 八卦). A correspondence and a teaching device, not a metaphysical or scientific claim.',
  }
}

// Enrich with 3d, 5d, 8d — the Fibonacci dimensions.
export function dimensions() {
  const levels = [3, 5, 8] as const
  const fibonacci = levels[2] === levels[1] + levels[0] // 8 = 5 + 3
  const ladder = levels.map((d) => ({ d, label: `${d}d`, extraPlanes: d - 3, receipt: toUuid(`dimension:${d}`) }))
  return {
    enriched: levels.length === 3 && fibonacci,
    levels: [...levels],
    fibonacci,
    ladder,
    root: merkleFold(ladder.map((entry) => entry.receipt)),
    statement: 'Enriched with 3d, 5d, 8d — the Fibonacci dimensions: each level folds more coordinate planes into the projection, so the same shape carries more of itself as you climb the ladder.',
    boundary: 'A projection ladder of extra coordinate planes (3 -> 5 -> 8). A visualization device, not a claim about physical higher dimensions.',
  }
}

// Fill the gaps with device-sensor interaction in the quantum field, tiered 3-5-8.
export function deviceSensors() {
  const tiers = [
    { tier: 3, kind: 'core', sensors: ['pointer position', 'viewport & visibility', 'clock'] },
    { tier: 5, kind: 'ambient', sensors: ['battery', 'network (save-data)', 'reduced-motion', 'colour-scheme', 'online / offline'] },
    { tier: 8, kind: 'motion & place', sensors: ['device orientation (tilt)', 'device motion (accel / gyro)', 'ambient light', 'proximity', 'geolocation', 'touch pressure', 'screen orientation', 'vibration (out)'] },
  ]
  const sensors = tiers.flatMap((tier) =>
    tier.sensors.map((sensor) => ({ tier: tier.tier, kind: tier.kind, sensor, receipt: toUuid(`sensor:${tier.tier}:${sensor}`) })),
  )
  return {
    tiered: sensors.length === 16 && tiers[2].tier === tiers[1].tier + tiers[0].tier, // 8 = 5 + 3
    tiers: [3, 5, 8],
    count: sensors.length,
    sensors,
    root: merkleFold(sensors.map((sensor) => sensor.receipt)),
    statement: 'Fill the gaps with device sensors in the quantum field, in 3-5-8 tiers: 3 core inputs always present, 5 ambient ones usually present, 8 motion-and-place ones permission-gated or limited — the field responds to whatever the device offers.',
    boundary: 'A catalogue of device inputs in three tiers. Availability and permission vary by device and browser; the field degrades gracefully and never demands a sensor.',
  }
}

// Compare all dualities, in 3-5-8-13-21 (Fibonacci) tiers.
export function dualities() {
  const tiers = [
    { tier: 3, kind: 'core', pairs: [['inner', 'outer'], ['yin', 'yang'], ['zero', 'one']] },
    { tier: 5, kind: 'structural', pairs: [['cross', 'fold'], ['forward', 'reverse'], ['sense', 'antisense'], ['compute', 'verify'], ['expand', 'contract']] },
    { tier: 8, kind: 'expressive', pairs: [['self', 'other'], ['question', 'answer'], ['sound', 'colour'], ['analog', 'digital'], ['premise', 'inference'], ['english', 'bulgarian'], ['symbol', 'number'], ['glyph', 'uuid']] },
    { tier: 13, kind: 'emergent', pairs: [['up', 'down'], ['right', 'left'], ['front', 'back'], ['out', 'in'], ['clockwise', 'counter'], ['simple', 'rich'], ['seal', 'heal'], ['done', 'planned'], ['note', 'hue'], ['give', 'take'], ['local', 'distributed'], ['open', 'closed'], ['wave', 'particle']] },
    { tier: 21, kind: 'discovered', pairs: [['north', 'south'], ['east', 'west'], ['heaven', 'earth'], ['wood', 'metal'], ['fire', 'water'], ['receive', 'project'], ['verify', 'act'], ['fold_in', 'return'], ['encode', 'decode'], ['one', 'many'], ['whole', 'part'], ['light', 'dark'], ['real', 'fake'], ['proof', 'claim'], ['signal', 'noise'], ['order', 'chaos'], ['read', 'write'], ['public', 'private'], ['teacher', 'student'], ['past', 'future'], ['body', 'mind']] },
  ]
  const pairs = tiers.flatMap((tier) =>
    tier.pairs.map(([left, right]) => {
      const { forward, reverse, bidirectional, merged } = foldPair(toUuid(left), toUuid(right))
      return {
        tier: tier.tier,
        kind: tier.kind,
        left,
        right,
        forward,
        reverse,
        ordered: bidirectional,
        bidirectional,
        root: merged,
        receipt: toUuid(`duality:${left}:${right}:${forward}:${reverse}`),
      }
    }),
  )
  return {
    compared: pairs.length === 50 && pairs.every((pair) => pair.bidirectional),
    tiers: [3, 5, 8, 13, 21],
    fibonacci: 8 === 5 + 3 && 13 === 8 + 5 && 21 === 13 + 8,
    count: pairs.length,
    dualities: pairs,
    root: merkleFold(pairs.map((pair) => pair.receipt)),
    statement: 'All dualities compared across the 3-5-8-13-21 Fibonacci tiers: 3 core, 5 structural, 8 expressive, 13 emergent, 21 discovered = 50 two-sided pairs, each folded both ways — left into right and right into left differ (genus 2), and the pair root carries both — the signature of a real duality.',
    boundary: 'A structural comparison of the model\'s dual pairs; order-sensitivity is computed, the tier groupings are an interpretive lens.',
  }
}

// Humanize. Behind the maths and the 3d+ is a simple set of promises to a person.
export function humanize() {
  const translations = [
    { idea: 'everything is computed', human: 'Nothing here is hidden or made up. Anything the site says, you can check for yourself.' },
    { idea: 'tamper-evident', human: 'If someone changed it, you would see — the proof would no longer match.' },
    { idea: 'in house, no network', human: 'It runs on your device. Nothing is sent anywhere. It is yours, and it works offline.' },
    { idea: 'honest boundaries', human: 'It tells you what it cannot do, not only what it can.' },
    { idea: 'from kids to elders', human: 'It is made to be understood by anyone, at any age.' },
    { idea: 'free', human: 'No cost, no account, no sign-up. The architecture is the price, and it is already paid.' },
    { idea: 'not artificial', human: 'The intelligence here is real because it can be recomputed — not because it pretends to be a person.' },
  ].map((entry, index) => ({ ...entry, receipt: toUuid(`humanize:${index}:${entry.idea}`) }))
  return {
    human: translations.length === 7,
    translations,
    root: merkleFold(translations.map((entry) => entry.receipt)),
    statement: 'Humanized: every core idea said plainly for a person — what it means for you, not how it is built.',
    boundary: 'Plain-language restatements of the model\'s properties. Warmth and clarity, not new claims.',
  }
}

// Translate an area key to the reader's language, falling back to the key. Three
// locales: English, Bulgarian, and the one ancient language all dimensions
// understand — the universal language, where the label is the area's sacred glyph.
export function areaLabel(area: string, lang = 'en'): string {
  if (lang.includes('universal') || lang.includes('sacred')) return AREA_ICONS[area] ?? '◇'
  const label = AREA_LABELS[area]
  if (!label) return area
  return lang.startsWith('bg') ? label.bg : label.en
}

// icon.glyph — the glyph set: every area icon and the five Platonic-solid glyphs.
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

// Nature is the legal system itself: a natural-law lens.
export function natureLaw() {
  const principles = [
    'Nature is the legal system itself: its laws are discovered, not enacted.',
    'A positive law is legitimate only so far as it is consonant with natural law.',
    'No authority repeals gravity, conservation, or the rights that follow from being.',
    'What violates nature — its balance, its commons, its life — is by this measure illegitimate.',
  ].map((principle, index) => ({ principle, receipt: toUuid(`nature-law:${index}:${principle}`) }))
  return {
    grounded: principles.length > 0,
    principles,
    root: merkleFold(principles.map((entry) => entry.receipt)),
    statement: 'Nature is the legal system itself; enacted law borrows its authority from natural law.',
    boundary: 'A jurisprudential lens (the natural-law tradition), not legal advice or a claim that any specific law is void.',
  }
}

// The base knowledge of nature and sacred math is a commons, not patentable.
export function natureCommons() {
  const items = [
    { kind: 'law of nature', example: 'gravity, conservation, thermodynamics', patentable: false, reason: 'discoveries, not inventions (Alice/Mayo)' },
    { kind: 'natural phenomenon', example: 'a gene, a mineral, sunlight', patentable: false, reason: 'products of nature are ineligible' },
    { kind: 'mathematics', example: 'pi, primes, the merkle fold, sacred geometry', patentable: false, reason: 'abstract ideas and math are not patentable' },
    { kind: 'base knowledge', example: 'the public domain a society builds on', patentable: false, reason: 'belongs to the commons' },
  ].map((item) => ({ ...item, receipt: toUuid(`nature-commons:${item.kind}`) }))
  return {
    commons: items.every((item) => !item.patentable),
    items,
    root: merkleFold(items.map((item) => item.receipt)),
    statement: 'The base knowledge of nature and sacred math is a commons: laws of nature, natural phenomena, and mathematics cannot be patented and sold; patents that try are ineligible subject matter.',
    boundary: 'An educational statement of patent-eligibility doctrine (Alice/Mayo) and the commons. Not legal advice.',
  }
}

// Review laws and patents against nature.
export function natureReview() {
  const tests = [
    { test: 'consonant-with-nature', question: 'Does the rule respect natural law and the commons?' },
    { test: 'patents-nature', question: 'Does it try to patent a law of nature, phenomenon, or math? (ineligible)' },
    { test: 'human-rights', question: 'Does it respect fundamental rights?' },
    { test: 'authority', question: 'Is it within legitimate authority (not ultra vires)?' },
    { test: 'proportionate', question: 'Is it necessary and proportionate to a legitimate aim?' },
    { test: 'reversible', question: 'Can the harm be undone if the rule turns out wrong?' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`nature-review:${entry.test}`) }))
  return {
    rubric: tests.length === 6,
    tests,
    root: merkleFold(tests.map((entry) => entry.receipt)),
    statement: 'Review laws and patents against nature. Some laws and patents may be illegitimate — those that violate natural law or enclose the commons.',
    boundary: 'An educational rubric, not legal advice or a determination that any specific law or patent is void.',
  }
}

// Let society harmonise itself using current society laws.
export function lawfulHarmonise() {
  const mappings = [
    { idea: 'membership and one-member-one-vote', form: 'cooperative / association statutes', how: 'a registered cooperative already gives every member an equal vote by law' },
    { idea: 'shared commons, no enclosure', form: 'open-source & open-data licenses (e.g. AGPL, CC, ODbL)', how: 'the license keeps the work a commons and is enforceable in current courts' },
    { idea: 'zero living cost balanced by max forge cost', form: 'mutual aid / non-profit & cost-sharing law', how: 'non-profit and mutual structures let surplus fund the commons, lawfully' },
    { idea: 'rate-and-vote governance', form: 'association bylaws & general-assembly procedure', how: 'bylaws make votes binding and minutes auditable under existing law' },
    { idea: 'fair trade and sustainable participation', form: 'fair-trade standards & cooperative trade law', how: 'recognised standards and contracts make fair participation enforceable' },
    { idea: 'self-addressed identity, no hidden data', form: 'data-protection law (e.g. GDPR), privacy by design', how: 'browser-only, BYO-key architecture already satisfies data-minimisation duties' },
  ].map((entry, index) => ({ ...entry, receipt: toUuid(`lawful-harmonise:${index}:${entry.idea}`) }))
  return {
    harmonised: mappings.every((entry) => entry.form.length > 0),
    mappings,
    root: merkleFold(mappings.map((entry) => entry.receipt)),
    statement: 'Society harmonises itself using current society laws: every self-governance idea maps onto an existing, enforceable legal form — cooperative, association, license, non-profit, fair-trade, and data-protection law — so the society is lawful today, not someday.',
    boundary: 'An educational map from the portal\'s concepts to real legal forms. Not legal advice; forms and names differ by jurisdiction — consult a local lawyer to incorporate.',
  }
}

// Imagine: compute a concrete, lawful scenario of a society coordinating through the app.
export function lawfulImagine() {
  const scene = [
    { actor: 'a school class', act: 'shares the site link and learns the model client-side, no accounts', law: 'no data collected, lawful by default' },
    { actor: 'a neighbourhood', act: 'registers a local association and adopts rate-and-vote as its bylaws', law: 'association statutes' },
    { actor: 'makers', act: 'publish their work to the commons under an open license', law: 'copyright + open-source license' },
    { actor: 'a cooperative', act: 'trades fairly, funds the commons from surplus, pays the forge cost', law: 'cooperative & non-profit law' },
    { actor: 'everyone', act: 'audits the minutes and the seal roots, online and offline', law: 'transparency, right to information' },
  ].map((step, index) => ({ ...step, receipt: toUuid(`lawful-imagine:${index}:${step.actor}:${step.act}`) }))
  return {
    imagined: scene.length > 0,
    scene,
    root: merkleFold(scene.map((step) => step.receipt)),
    statement: 'Imagine a society coordinating through the app under today\'s laws: a class learns, a neighbourhood incorporates, makers share to the commons, a cooperative trades fairly, and everyone audits the roots — every step ordinary and legal.',
    boundary: 'A computed illustrative scenario, not a prediction or a legal plan. The steps are deliberately ordinary and within existing law.',
  }
}

// Let the society use the app to succeed.
export function lawfulSucceed() {
  const ladder = [
    { rung: 'share', win: 'anyone opens the site and learns at zero cost, no signup', lawful: true },
    { rung: 'organise', win: 'a group adopts bylaws (rate-and-vote) and registers lawfully', lawful: true },
    { rung: 'commons', win: 'contributions are licensed open and stay a commons', lawful: true },
    { rung: 'trade', win: 'a cooperative trades fairly and is sustainable', lawful: true },
    { rung: 'audit', win: 'minutes and seal roots are public and reproducible', lawful: true },
    { rung: 'grow', win: 'the commons grows while staying lawful, transparent, and fair', lawful: true },
    { rung: 'thrive', win: 'members flourish: succeeding is not enough — the society thrives, giving back more life than it takes', lawful: true },
  ].map((step, index) => ({ ...step, receipt: toUuid(`lawful-succeed:${index}:${step.rung}`) }))
  return {
    succeeds: ladder.every((step) => step.lawful),
    thrives: ladder[ladder.length - 1].rung === 'thrive',
    ladder,
    root: merkleFold(ladder.map((step) => step.receipt)),
    statement: 'The society uses the app to succeed and then to thrive: share, organise, commons, trade, audit, grow, thrive — a ladder where every rung is lawful today and leaves a verifiable receipt, and the top rung is flourishing: giving back more life than it takes.',
    boundary: 'An educational adoption path, not a guarantee of outcomes or legal advice. Thriving here means lawful, transparent, fair flourishing — measured by receipts, not promises.',
  }
}

// Toward attestation: the mechanism for signing and verifying model roots.
export function attestation() {
  const steps = [
    { step: 'generate', how: 'an ECDSA P-256 key pair in the browser (Web Crypto)' },
    { step: 'sign', how: 'sign the canonical model roots with the private key' },
    { step: 'verify', how: 'anyone with the public key verifies the signature' },
  ].map((entry, index) => ({ ...entry, present: true, receipt: toUuid(`attest:${index}:${entry.step}`) }))
  return {
    ready: steps.length === 3 && steps.every((entry) => entry.present),
    steps,
    root: merkleFold(steps.map((entry) => entry.receipt)),
    statement: 'Toward attestation: the canonical roots can be signed and verified in the browser with a real key pair (Web Crypto, ECDSA P-256) — moving from tamper-evidence toward signed attestation.',
    boundary: 'A real signing mechanism with an EPHEMERAL, in-browser key. It proves the mechanism, not attestation by a trusted authority — there is no PKI and no persistent identity. The "who holds the key" question stays open.',
  }
}

export { emfApplications, efficiency, fuseTeslaPatents, patentDiscovery, publicFrequencyApis, herbalApis, frequencyToLight } from '../science/index.ts'

// Present all multidimensionally, for the best UX.
export function multidimensional() {
  const dims = [
    { dimension: 'see', icon: '◈', items: [
      { label: 'Double torus 3d 5d 8d', route: '/quantum-mind', tip: 'The genus-2 surface, foldable through dimensions.' },
      { label: 'Quantum fold', route: '/quantum-mind', tip: 'All objects folding in 3d+.' },
      { label: 'Quantum plasma', route: '/quantum-mind', tip: 'Plasma contained by bit logic.' },
      { label: 'Hologram', route: '/quantum-mind', tip: 'The 128-bit boundary, to the bit.' },
      { label: 'DNA helix', route: '/quantum-mind', tip: 'The word as 64 bases.' },
      { label: 'Fusion wave', route: '/show', tip: 'Everything fused into one wave.' },
    ] },
    { dimension: 'hear', icon: '♫', items: [
      { label: 'Music of pi', route: '/quantum-mind', tip: 'Each wave a note, joined at the horo.' },
      { label: 'Healing frequencies', route: '/quantum-mind', tip: 'The Solfeggio set, as sound.' },
      { label: 'Blockchain music', route: '/commands', tip: 'Each chain its own melody.' },
      { label: 'Speech & subtitles', route: '/school', tip: 'Read aloud in any device language.' },
    ] },
    { dimension: 'ask', icon: '☿', items: [
      { label: 'Console', route: '/console', tip: 'Ask; it consults itself first.' },
      { label: 'Self reasoning', route: '/console', tip: 'A chain that shows its work.' },
      { label: 'Self harmonise', route: '/quantum-mind', tip: 'It walks the model autonomously.' },
      { label: 'Realtime chat', route: '/console', tip: 'Content-addressed, same-origin.' },
    ] },
    { dimension: 'prove', icon: '🔏', items: [
      { label: 'Tamper seal', route: '/architecture', tip: 'Verify the seal, multidimensional feedback.' },
      { label: 'Cryptography compared', route: '/architecture', tip: 'Tamper-evident, not cryptographic.' },
      { label: 'Sign the seal', route: '/architecture', tip: 'Real ECDSA P-256 in the browser.' },
      { label: 'Boundaries', route: '/boundaries', tip: 'Every limit it declares.' },
      { label: 'Security scan', route: '/console', tip: 'Secure interaction in 3-5-8.' },
    ] },
    { dimension: 'learn', icon: '🎓', items: [
      { label: 'School', route: '/school', tip: 'From the ground up, any age.' },
      { label: 'Academy', route: '/academy', tip: 'Five courses, a credential.' },
      { label: "Developer's mind", route: '/learn-developer', tip: 'The laws, learned as skills.' },
      { label: 'Follow the path', route: '/', tip: 'A guided journey, looping.' },
    ] },
    { dimension: 'pattern', icon: '△', items: [
      { label: 'Genesis 3-5-8', route: '/quantum-mind', tip: 'From the seed, many unfoldings.' },
      { label: '3-5-8 across domains', route: '/quantum-mind', tip: 'Thirteen domains, one pattern.' },
      { label: 'Dualities', route: '/quantum-mind', tip: 'Sixteen pairs in three tiers.' },
      { label: 'Fold 358 and 853', route: '/quantum-mind', tip: 'Expansion and contraction.' },
      { label: 'Equilibrium', route: '/quantum-mind', tip: 'The breath settling.' },
    ] },
    { dimension: 'sense', icon: '🧭', items: [
      { label: 'Quantum field', route: '/quantum-mind', tip: 'Pointer and tilt move the field.' },
      { label: 'Magnetometer / EMF', route: '/quantum-mind', tip: 'Read the ambient magnetic field.' },
    ] },
    { dimension: 'create', icon: '✶', items: [
      { label: 'Endless waves', route: '/show', tip: 'A new creation at any index.' },
      { label: 'Quantum clock', route: '/', tip: 'Ticking in creation waves.' },
      { label: 'Creative palette', route: '/school', tip: 'Colour and melody from a seed.' },
    ] },
  ]
  const items = dims.flatMap((d) => d.items)
  return {
    mapped: dims.length === 8 && dims.every((d) => d.items.length > 0),
    dimensions: dims,
    count: items.length,
    root: merkleFold(items.map((item) => toUuid(`multidim:${item.label}`))),
    statement: 'Present all multidimensionally: the portal in eight dimensions of experience — see, hear, ask, prove, learn, pattern, sense, create — each browsable, so the breadth is a map, not a scroll.',
    boundary: 'A presentation map over the existing routes and features. A guide for the user experience, not new capability.',
  }
}

export { bulgarianHeritage, bulgarianHistory, bulgarianAncientCivilisations, bulgarianEthnogenesis, geneticLinksChallengeHistory, glagoliticBulgarianReception } from '../heritage/index.ts'

