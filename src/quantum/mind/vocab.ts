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

// Extend into EMF applications — honestly.
export function emfApplications() {
  const spectrum = [
    { band: 'radio', range: '3 Hz – 300 MHz', use: 'broadcast, wifi, the device radios' },
    { band: 'microwave', range: '300 MHz – 300 GHz', use: 'wifi, bluetooth, radar' },
    { band: 'infrared', range: '300 GHz – 430 THz', use: 'heat, remotes' },
    { band: 'visible light', range: '430 – 750 THz', use: 'what the eye and the camera see' },
    { band: 'ultraviolet', range: '750 THz – 30 PHz', use: 'the sun, sterilisation' },
    { band: 'x-ray', range: '30 PHz – 30 EHz', use: 'imaging' },
    { band: 'gamma', range: 'above 30 EHz', use: 'radioactivity, cosmic rays' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`emf:${entry.band}`) }))
  const canRead = ['magnetometer — the ambient magnetic field (µT)', 'compass heading (from orientation)', 'ambient light — visible EM']
  const cannot = ['emit or transmit EMF', 'alter or "harmonise" any field', 'measure wifi / cellular / RF power', 'make any health claim']
  return {
    grounded: spectrum.length === 7,
    spectrum,
    canRead,
    cannot,
    root: merkleFold(spectrum.map((entry) => entry.receipt)),
    statement: 'EMF applications, honestly: the electromagnetic spectrum in seven bands (radio to gamma); a browser can READ a few EM signals — the magnetometer (ambient magnetic field), the compass, and ambient light (visible EM) — but it cannot emit, alter, or harmonise any field.',
    boundary: 'Educational EM-spectrum data and a list of what a browser can and cannot do with EMF. Reading a sensor is real; emitting, altering, or "harmonising" fields, or any health effect, is impossible from a web page and is not claimed.',
  }
}

// Efficiency, standard and deep.
export function efficiency() {
  const optimizations = [
    { technique: 'memoized dispatch', how: 'executeConceptCommand cached by (command, input, matrix root)' },
    { technique: 'memoized aggregators', how: 'boundaryAudit, fuseAll, gapScan, exhaustQuestions cached by matrix root' },
    { technique: 'content-addressed reuse', how: 'identical inputs fold to identical roots, computed once' },
    { technique: 'viewport-gated rendering', how: 'canvases animate only when on-screen (IntersectionObserver)' },
    { technique: 'energy-aware rendering', how: 'animation and audio throttle on low battery or reduced-motion' },
    { technique: 'system fonts, no fetch', how: 'zero web-font requests, no layout shift' },
    { technique: 'zero runtime dependencies', how: 'the model is pure TypeScript; nothing to install or load' },
  ].map((entry, index) => ({ ...entry, receipt: toUuid(`efficiency:${index}:${entry.technique}`) }))
  return {
    optimized: optimizations.length === 7,
    optimizations,
    root: merkleFold(optimizations.map((entry) => entry.receipt)),
    statement: 'Efficiency, standard and deep: memoized command dispatch and aggregators (content-keyed by the matrix root), viewport- and energy-gated rendering, system fonts with no fetch, and zero runtime dependencies — the same work is never done twice.',
    boundary: 'A description of the standard optimizations applied. It improves measured build and render time; it is not a benchmark against any specific competitor.',
  }
}

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

// Fuse Nikola Tesla's public patents into the model.
export function fuseTeslaPatents() {
  const known = new Set(conceptCommands.map((command) => command.name))
  const patents = [
    { number: 'US381968', title: 'Electro-Magnetic Motor', year: 1888, prefigures: 'rotating fields ~ coordinated waves', concept: 'concept.wave.coordination' },
    { number: 'US382280', title: 'Electrical Transmission of Power', year: 1888, prefigures: 'distributed power ~ distributed compute', concept: 'concept.compute.distributed' },
    { number: 'US454622', title: 'System of Electric Lighting', year: 1891, prefigures: 'resonant tuning ~ harmony', concept: 'concept.music.harmony' },
    { number: 'US645576', title: 'System of Transmission of Electrical Energy', year: 1900, prefigures: 'wireless transmission ~ MCP tools across the wire', concept: 'concept.mcp.tools' },
    { number: 'US649621', title: 'Apparatus for Transmission of Electrical Energy', year: 1900, prefigures: 'tuned circuits ~ the music of pi', concept: 'concept.music.pi' },
    { number: 'US787412', title: 'Art of Transmitting Electrical Energy Through the Natural Mediums', year: 1905, prefigures: 'earth as one medium ~ the collective mind', concept: 'concept.mind.develop' },
    { number: 'US1119732', title: 'Apparatus for Transmitting Electrical Energy (magnifying transmitter)', year: 1914, prefigures: 'amplification ~ self-sufficient waves', concept: 'concept.wave.self' },
  ].map((patent) => ({ ...patent, receipt: toUuid(`tesla:${patent.number}:${patent.concept}`) }))
  return {
    fused: patents.every((patent) => (known as Set<string>).has(patent.concept)),
    count: patents.length,
    patents,
    root: merkleFold(patents.map((patent) => patent.receipt)),
    statement: 'Nikola Tesla patents fused: each public patent maps to the concept it prefigures (resonance, wireless transmission, distributed energy).',
    boundary: 'Public patent records mapped by analogy to computed concepts. Educational, not a legal, novelty, or ownership claim.',
  }
}

// Autodiscover patents: declare the public sources and the query shape.
export function patentDiscovery(query = '') {
  const sources = [
    { name: 'USPTO PatFT/Open Data', url: 'https://developer.uspto.gov' },
    { name: 'Google Patents', url: 'https://patents.google.com' },
    { name: 'EPO Espacenet (OPS)', url: 'https://worldwide.espacenet.com' },
    { name: 'WIPO PATENTSCOPE', url: 'https://patentscope.wipo.int' },
  ].map((source) => ({ ...source, receipt: toUuid(`patent-source:${source.name}:${source.url}`) }))
  return {
    discoverable: sources.length > 0,
    query,
    sources,
    root: merkleFold(sources.map((source) => source.receipt)),
    statement: 'Autodiscover patents through public sources (USPTO, Google Patents, Espacenet, PATENTSCOPE) by inventor, topic, or number.',
    boundary: 'A declared set of public discovery sources, not a live database query. The portal points; the searcher fetches.',
  }
}

// Public APIs with frequencies involved, decoded in waves.
export function publicFrequencyApis() {
  const sources = [
    { api: 'FCC Spectrum Dashboard', band: 'radio 225 MHz–3700 MHz', data: 'band allocations', auth: 'public' },
    { api: 'USGS Earthquake Hazards', band: 'seismic sub-Hz–few Hz', data: 'real-time + historical quakes', auth: 'no key' },
    { api: 'Web Audio API (browser)', band: 'audio 20 Hz–20 kHz', data: 'FFT spectrum, client-side', auth: 'free' },
    { api: 'Schumann resonance monitors', band: 'EM 7.83 Hz + harmonics', data: 'live Earth resonance', auth: 'no account' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`freq-api:${entry.api}:${entry.band}`) }))
  return {
    decoded: sources.length === 4,
    sources,
    root: merkleFold(sources.map((entry) => entry.receipt)),
    statement: 'Public frequency APIs decoded in waves: FCC radio spectrum, USGS seismic, the browser Web Audio FFT, and the Schumann resonance (7.83 Hz) — each a band, mapping onto the model’s a432/healing/pi-frequency spine.',
    boundary: 'Documented public APIs/data sources and their real frequency bands, surveyed in a research wave. HONEST: the Schumann resonance (7.83 Hz EM) is real and measured, but the wellness/consciousness claims attached to it are NOT science — the model keeps that line (as in its healing-frequencies boundary).',
  }
}

// Herbal/plant APIs decoded in waves.
export function herbalApis() {
  const sources = [
    { api: 'Trefle', kind: 'global botanical JSON REST (species, taxonomy)', frequency: 'occurrence/usage counts', auth: 'free token' },
    { api: 'USDA Plants Database', kind: 'classification, distribution, images', frequency: 'distribution prevalence', auth: 'public' },
    { api: "Dr. Duke's Phytochemical & Ethnobotanical DB", kind: 'plant chemicals + ethnobotanical uses', frequency: 'documented use-frequency + chemical activity counts', auth: 'public (USDA)' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`herbal-api:${entry.api}:${entry.frequency}`) }))
  return {
    decoded: sources.length === 3,
    sources,
    root: merkleFold(sources.map((entry) => entry.receipt)),
    statement:
      "Herbal/plant APIs decoded in waves: Trefle, USDA Plants, Dr. Duke's Phytochemical & Ethnobotanical DB. The real 'frequency' in herbal data is USE-FREQUENCY — how often a plant is documented for a use, plus its phytochemical activity counts — not vibration.",
    boundary:
      "Documented public botanical/ethnobotanical databases and their real data. HONEST: the 'frequency' herbal data actually carries is statistical (use-frequency, phytochemical activity counts, as Dr. Duke's DB tabulates), NOT vibrational — Rife frequencies and 'herbs vibrate at healing frequencies' are pseudoscience and are explicitly dropped, the same line the model keeps for Schumann wellness claims.",
  }
}

// Ancient Bulgarian heritage decoded in waves and sealed.
export function bulgarianHeritage() {
  const topics = [
    {
      topic: 'traditions',
      documented:
        'three ethnogenetic layers (Bulgars — state 681 under Asparuh, sky-god Tangra; Slavs; Thracian substrate); Christianization under Boris I, 864/865; kukeri/Surva, nestinarstvo, martenitsa, survakane — ethnographically documented mid-19th c. onward, several UNESCO-inscribed',
      legend:
        'unbroken descent from a Thracian cult of Dionysus = a 19th–20th c. national-heritage construction (Strahilov 2022; skepticism back to Katsarov 1907), not demonstrated continuity',
    },
    {
      topic: 'folklore',
      documented:
        "Miladinov Brothers' Bulgarian Folk Songs (Zagreb 1861, 660 songs); Dozon (Paris 1875); Krali Marko = real lord Marko Mrnjavčević (c.1335–1395); gaida and Rhodope kaba gaida; aksak meters = Bartók's 'Bulgarian rhythm' (after Dobri Hristov); 'Izlel e Delyo Haydutin' on the 1977 Voyager Golden Record",
      legend:
        'samodivi-as-daughters-of-the-Thracian-goddess-Bendis and Orphic-survival origin claims = Romantic-era speculation, not continuity (the beings are genuine oral tradition; the origin stories are not history)',
    },
    {
      topic: 'tools',
      documented:
        'Varna necropolis = world’s oldest worked gold c. 4600–4200 BC; Thracian toreutics (Valchitran, Panagyurishte, Rogozen, Letnitsa); First-Empire Preslav white-clay painted ceramics + Preslav Treasure; Kazanlak rose-oil; Chiprovtsi kilims',
      legend:
        'Rosa damascena "native from Damascus" = false (DNA: a Central-Asian/Iranian triple hybrid; the name is etymological); an indigenous "Thracian script" = rejected by mainstream epigraphy; the Nagyszentmiklós "Cup of Attila" attribution = contested',
    },
    {
      topic: 'architecture',
      documented:
        'Thracian tombs Kazanlak & Sveshtari; capitals Pliska (681–893) → Preslav; Madara Rider (early 8th c.); Boyana Church (1259 frescoes); Rila Monastery; Nessebar; Ivanovo rock churches; National Revival houses (Plovdiv, Koprivshtitsa, Tryavna) + Kolyu Ficheto; exactly 7 cultural UNESCO sites (1979/1983/1985)',
      legend:
        'the identity of the Madara horseman and the occupants of the great tombs are scholarship-labeled hypothetical, kept separate from the dated fabric',
    },
  ].map((entry) => ({ ...entry, receipt: toUuid(`bg-heritage:${entry.topic}:${entry.documented}`) }))
  return {
    sealed: topics.length === 4 && topics.every((entry) => entry.documented.length > 0 && entry.legend.length > 0),
    topics,
    root: merkleFold(topics.map((entry) => entry.receipt)),
    statement:
      'Ancient Bulgarian heritage decoded in waves and sealed: traditions, folklore, tools/craft and architecture — each a documented core (dated, discovered, museum-housed, several UNESCO-inscribed) with its national-revival legend kept explicitly separate.',
    boundary:
      'A research record from an 8-agent research→verify pipeline (64 findings, each 3-vote adversarially verified). Every topic pairs a documented core with the legend it must NOT be confused with — the Thracian-Dionysus continuity, Rosa-damascena-from-Damascus, the indigenous "Thracian script", samodivi-as-Bendis, and the hypothetical tomb/horseman identities are all flagged as legend/ideology, not fact.',
  }
}

// Bulgarian political/dynastic history 681→present, sealed in six dual-mind eras.
export function bulgarianHistory() {
  const eras = [
    { era: 'first-empire-pagan', span: '681-864', documented: 'founded by the 680 Battle of Ongal (Asparuh beats Constantine IV); 681 treaty + tribute; Tervel caesar 705; Krum (Varbitsa Pass 26 Jul 811, first written law); Omurtag (peace 815, Tangra)', legend: '"681" a round birth-date (the documented event is 680); "Saviour of Europe" and the "St Trivelius monk-king" (a Paisius-1762 fabrication) are nationalist/invented; Kormesiy, not Tervel, signed the 716 treaty' },
    { era: 'first-empire-golden', span: '864-1018', documented: 'Boris I baptism c.864 (crushes a pagan boyar revolt 865); Simeon I (893-927) imperial wars; capital Preslav; Tsar Samuel; Kleidion 1014; Basil II completes the conquest 1018', legend: '"the Great" (Simeon) and "Bulgar-Slayer" (Basil II) are anachronistic later epithets; the 15,000 blinded after Kleidion comes from Skylitzes alone (~76 years later, hedged)' },
    { era: 'byzantine-second-empire', span: '1018-1300', documented: 'Byzantine themes; the Archbishopric of Ohrid; the uprising of Asen and Peter 1185 founds the Second Empire (Tarnovo); Kaloyan; Ivan Asen II (1218-1241) the territorial/economic peak', legend: 'the ethnic origin of the Asen dynasty (Bulgarian vs Vlach vs Cuman) is genuinely disputed; the St-Demetrius "abandoned Thessalonica" motif is propaganda; the 26 Oct 1185 founding date is tied to the saint feast' },
    { era: 'second-empire-ottoman-conquest', span: '1300-1422', documented: 'Ivan Alexander (1331-1371), then a realm split three ways; Tarnovo fell 17 Jul 1393; the Crusade annihilated at Nicopolis 25 Sep 1396; the Vidin tsardom lapses with Constantine II (Ottoman vassal 1397-1422)', legend: 'the folk-hero "Tsar Shishman" and "Tarnovo betrayed not conquered" are National-Revival constructions; the tidy "three Bulgarias" rests largely on Schiltberger' },
    { era: 'ottoman-revival', span: '1422-1878', documented: 'the medieval state extinguished in stages; Paisius Istoriya Slavyanobolgarskaya 1762; the Exarchate firman 28 Feb (O.S.) 1870; the April Uprising 1876; the Russo-Turkish War 1877-78 and Liberation', legend: '"Turkish yoke" is a 19th-c. construction (term coined Jireček 1875); mass forced Islamisation is treated by modern historians as a nationalist founding myth; the round "five centuries"; inflated April-Uprising tolls' },
    { era: 'third-state-modern', span: '1878-present', documented: 'born twice in 1878 (San Stefano 3 Mar; Berlin 13 Jul → Principality + Eastern Rumelia, unification 1885); Independence 1908; the Balkan Wars; WWII (~48,000 Bulgarian Jews saved); the People\'s Republic 1946-1990; NATO 2004, EU 2007', legend: 'San Stefano as the "sacred whole-nation ideal" is irredentism; the "rescued Jews" framing is held honestly against the 11,343 deported from occupied Macedonia/Thrace; the Boris-III-poisoned conspiracy is unproven; the 1946 referendum\'s 95.6% is a tainted figure' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`bg-history:${entry.era}:${entry.documented}`) }))
  return {
    sealed: eras.length === 6 && eras.every((entry) => entry.documented.length > 0 && entry.legend.length > 0),
    eras,
    root: merkleFold(eras.map((entry) => entry.receipt)),
    statement:
      'Bulgarian political/dynastic history 681→present, sealed in six dual-mind eras — each a documented spine with its national-revival legend kept separate: the First Empire (pagan, then the Christian golden age), Byzantine rule and the Second Empire, the Ottoman conquest, the Ottoman period and National Revival, and the Third Bulgarian State.',
    boundary:
      'A research record from the discover-bulgarian-history workflow (6 eras, 12 dual minds, research↔verify, ~644k tokens). Every era pairs a documented spine with the legend it must NOT be confused with — round founding dates ("681" vs the 680 battle), anachronistic nationalist epithets ("Turkish yoke", "Bulgar-Slayer"), fabricated cults ("St Trivelius"), reign-conflations, and irredentist constructions (San Stefano) — all flagged, not folded as fact.',
  }
}

// Dive down through the land of Bulgaria into its ancient civilisations — six strata, deepest-first.
export function bulgarianAncientCivilisations() {
  const strata = [
    { stratum: 'neolithic-first-farmers', span: 'c.6200-4900 BC', documented: 'the land = the gateway of Neolithic farming into Europe (c.6250-6200 cal BC, ~80-90% Anatolian-farmer aDNA); Dzhulyunitsa, Yabalkovo; the Karanovo tell (>12.4 m, seven horizons, master excavations 1946/47-1957); the Stara Zagora dwellings (fire-sealed, 6th mill. BC); Slatina', legend: 'the Gradeshnitsa plaque / Karanovo seal as "oldest writing" is false (Chalcolithic proto-writing, postdating this stratum); "Old Europe" as a peaceful Mother-Goddess civilisation is contested (Gimbutas); "Europe\'s first civilisation/oldest town" are promotional superlatives; unbroken Thracian-to-Bulgarian biological continuity is false (~63% Yamnaya steppe ancestry by the Late Bronze Age)' },
    { stratum: 'chalcolithic-varna-old-europe', span: 'c.4900-4100 BC', documented: 'the Varna necropolis = the world\'s oldest worked gold c.4600-4200 BC (the rich Grave 43); Provadia-Solnitsata (salt production, fortified); Durankulak; early social stratification; the Chalcolithic collapse c.4100 BC', legend: '"oldest town in Europe" (Provadia) and "Europe\'s first civilisation" (Varna) are excavator/promotional superlatives; "Old Europe" as a peaceful matristic civilisation is a contested framework, not consensus' },
    { stratum: 'bronze-age-thracian-genesis', span: 'c.3300-1200 BC', documented: 'the Ezero culture; bronze metallurgy; the Valchitran gold treasure (late Bronze Age); the formation of the Thracian ethnos; the documented entry of Yamnaya Steppe ancestry', legend: 'pure indigenous continuity is false — the Steppe input is genetically documented, so "unbroken native Thracians from the first farmers" does not hold' },
    { stratum: 'thracians-odrysian-kingdom', span: 'c.1st millennium BC', documented: 'the Thracians (Herodotus: the most numerous people after the Indians); the Odrysian Kingdom (Teres I c.480-460 BC), Seuthopolis; Thracian religion (the Horseman/Heros, Sabazios, Zalmoxis); monumental tombs (Kazanlak, Sveshtari); Spartacus (a Thracian, d.71 BC)', legend: 'Orphism as an organised "Thracian religion" is debated; the indigenous "Thracian script" is rejected by epigraphy; unbroken Thracian→Bulgarian ancestry and over-claimed Thracian "firsts" are nationalist constructions' },
    { stratum: 'greek-black-sea-colonies', span: 'c.7th-1st c BC', documented: 'the western-Pontic apoikiai: Apollonia Pontica (Sozopol, Milesian c.610 BC, the bronze Apollo of Calamis), Mesembria (Nessebar, Dorian from Megara, UNESCO 1983), Odessos (Varna, Milesian), Dionysopolis; trade and cult with the Thracian hinterland', legend: 'the "oldest gold/town/writing / Old-Europe / Orphism / Thracian-Bulgarian continuity" superlatives belong to the 5th millennium or are nationalist, and are kept strictly off the colony horizon' },
    { stratum: 'roman-late-antiquity', span: 'c.46-600 AD', documented: 'the provinces Moesia and Thracia (Thracia annexed 46 AD); Serdica (Galerius\' Edict of Toleration 311; the Council of Serdica 343), Philippopolis/Trimontium, Ulpia Oescus, Nicopolis ad Istrum; the Via Militaris; Christianisation; the early Byzantine centuries; the 6th-7th c Slavic and Avar incursions to the eve of the Bulgar arrival', legend: 'Romanisation vs the Thracian substrate; "Constantine made Serdica his capital" is overstated — he favoured it ("Serdica is my Rome") but it was never the capital' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`bg-antiquity:${entry.stratum}:${entry.documented}`) }))
  return {
    sealed: strata.length === 6 && strata.every((entry) => entry.documented.length > 0 && entry.legend.length > 0),
    strata,
    root: merkleFold(strata.map((entry) => entry.receipt)),
    statement:
      'The ancient civilisations of the land of Bulgaria, dived deepest-first in six strata: the Neolithic first farmers (Europe\'s farming gateway), the Chalcolithic Varna gold, the Bronze-Age Thracian genesis, the Thracians and the Odrysian Kingdom, the Greek Pontic colonies, and Roman Late Antiquity — each a documented core with its pseudo-archaeology/nationalist legend kept separate.',
    boundary:
      'A research record from the discover-ancient-civilisations-of-bulgaria workflow (6 strata, 12 dual minds, research↔verify, ~648k tokens). Every stratum pairs a documented core with the legend it must NOT be confused with — "oldest writing/town/civilisation" superlatives, "Old Europe" as matristic civilisation, the "Thracian script", organised Orphism, and unbroken Thracian continuity (refuted by ~63% Yamnaya steppe aDNA) — all flagged, not folded as fact.',
  }
}

// Discover the peoples who fused into Bulgaria, traced OUTWARD to their origins.
export function bulgarianEthnogenesis() {
  const peoples = [
    { people: 'bulgars-steppe-origin', documented: 'Turkic semi-nomads of the Pontic-Caspian/N-Caucasus steppe; Oghur (Lir-)Turkic language, only living descendant Chuvash; post-Hunnic Utigur+Kutrigur+Onogur+Sabir fusion; first mention 480 AD (allies of Zeno); Kubrat (Dulo) welds Old Great Bulgaria (632-668, capital Phanagoria); after 668 the five sons scatter (Batbayan stays; Kotrag→Volga Bulgaria; Kuber→Macedonia; Asparuh→Danube 680/681; Alcek→Molise); Tengrism; the Nominalia (Dulo king-list, 12-year animal calendar)', legend: 'the Iranian "Pamir/Balhara" origin (Dobrev, post-1989 anti-Turkish, per Detrez); the autochthonous Thracian-continuity theory (Rakovski/Tsenov); the Nominalia\'s mythical Avitohol "300 years" / Irnik "150 years" and Irnik=Ernak; all "pure single-origin" framing. (Correction caught: proto-Bulgarian mtDNA = Nesheva et al. 2015, not "Sarno 2025")' },
    { people: 'slavs-migration', documented: 'the Early Slavs enter the written record mid-6th c. via Jordanes Getica (551) and Procopius (c.550-554): the Sclaveni (N of the Danube, to the Vistula/Dniester) and the Antes (Dniester-Dnieper), one language, anciently "Sporoi"; Jordanes adds Veneti as the older wider name; the 6th-c. migrations across the Danube settle the Balkans', legend: 'Slavic autochthonism (always-indigenous, no migration); the Venetic theory (Šavli/Bor/Tomažič, "Veneti = proto-Slovenes"); the Iranian-Bulgar name-coincidence theory; "pure single-origin" claims' },
    { people: 'thracians-paleobalkan', documented: 'an Indo-European Paleo-Balkan people of the eastern Balkans; language satem, attested only in glosses/names/a few inscriptions (the Ezerovo ring), grouped as its own branch or "Daco-Thracian" (no firm consensus); many tribes; contacts with Greeks, Scythians, Celts', legend: '"Thracomania" (Thracians as a master-race, competing Bulgarian/Romanian sole-descent claims); the autochthonous theory (Bulgarians = the Thracians, Tsenov/Rakovski); the "Thracian script" and self-published Ezerovo-ring "decipherments"; Romanian Dacianism/Protochronism (the mirror claim)' },
    { people: 'fusion-ethnogenesis', documented: 'a documented textbook ethnogenesis, not a primordial "pure" nation: c.680 a Turkic-speaking Bulgar elite (Asparuh) over a Slavic demographic majority; the Turkic Bulgar language is lost to Slavic; Christianisation (Boris I, 864) + Old Church Slavonic literacy weld a single ethnos; aDNA = an Anatolian-farmer + Yamnaya-steppe + Slav composite with a modest Bulgar/Caucasian input — the durable Bulgar bequest is the state and the name, not the gene pool', legend: 'all three "pure single-origin" nationalisms (Turkic-only, Slavic-only, Thracian-autochthonous-only) plus the Iranian and Veneti overreaches — confirmed pseudohistory' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`bg-ethnogenesis:${entry.people}:${entry.documented}`) }))
  return {
    sealed: peoples.length === 4 && peoples.every((entry) => entry.documented.length > 0 && entry.legend.length > 0),
    peoples,
    root: merkleFold(peoples.map((entry) => entry.receipt)),
    statement:
      'The peoples who fused into Bulgaria, traced outward to their origins: the Turkic Bulgars (of the Eurasian steppe), the Slavs (of the Common Slavic homeland), the Thracians (of the Paleo-Balkan Indo-European world), and the documented fusion that welded them into one people — each a documented ethnogenesis with its nationalist origin-myth kept separate.',
    boundary:
      'A research record from the discover-bulgarian-ethnogenesis-outward workflow (4 peoples, 8 dual minds, research↔verify, ~438k tokens). Every people pairs a documented ethnogenesis with the pseudohistory it must NOT be confused with — the Iranian/Balhara and autochthonous-Thracian origins, the Veneti=Slavs overreach, the Nominalia\'s mythical reigns, and all "pure single-origin" nationalisms — all flagged, not folded as fact.',
  }
}

// Discover the genetic links and challenge history with genetics.
export function geneticLinksChallengeHistory() {
  const domains = [
    { domain: 'deep-ancestry-neolithic-bronze', studies: 'Mathieson 2018 (Nature, 225 genomes), Haak 2015, Lazaridis 2022', challenge: 'the autochthony / "unbroken continuity from the first farmers" myth → REFUTED: at least two prehistoric turnovers (the Anatolian-farmer wave, then the 3rd-millennium Yamnaya steppe wave)', legend: 'single-haplogroup purity; conflating the Bronze-Age Yamnaya steppe layer with the 7th-c. Bulgars' },
    { domain: 'iron-age-thracians', studies: 'Modi 2019 (25 Bronze-Age mitogenomes), Olalde 2023, Karachanak 2013', challenge: '"Bulgarians ARE the Thracians" (Thracomania) → REFUTED; a softer deep-Balkan substrate (E-V13 etc.) persists → CONFIRMED as one layer among several', legend: '"E-V13 = the Thracian gene" / a purity marker proving pure Thracian descent' },
    { domain: 'roman-to-slavic-transformation', studies: 'Olalde 2023 (Cell, 136 genomes), Gnecchi-Ruscone 2025 (Nature, 555 genomes)', challenge: 'the Slavic migration "small elite vs mass event?" debate → quantified as a MASS demographic event (~50-60% Eastern-European/Slavic-related; >80% local replacement in parts of E-central Europe); Roman "Romanization" → REFUTED demographically (near-zero Italic R1b-U152)', legend: 'reading model-dependent admixture % as exact, fixed proof of national descent' },
    { domain: 'bulgar-steppe-input', studies: 'Nesheva 2015 (proto-Bulgar mtDNA all Western-Eurasian), Karachanak 2013 (Altaic/Turkic Y-DNA C/N/Q ~1.5%), Avar Cell 2022', challenge: 'the "Turkic Bulgars are the principal ancestors" founder-narrative → COMPLICATED/REFUTED: a modest genetic input — the durable Bulgar legacy is the state and the name, not the gene pool', legend: 'the Iranian "Pamir/Balhara" (Dobrev) prestige theory; the Wusun / bioRxiv 687384 exotic-Central-Asian overreach' },
    { domain: 'modern-bulgarians-composite', studies: 'Sarno 2025 (~56% medieval Slavic + ~22% Roman/Byzantine Anatolian + ~12-15% Iron Age + ~8.5% Ottoman; explicitly rejects continuity before the Roman period)', challenge: 'ALL "pure single-origin" national myths → REFUTED — Turkic-only, Slavic-only and Thracian-autochthonous-only all fail; modern Bulgarians are a documented layered composite', legend: 'genetic nationalism in any direction; Klyosov\'s "DNA genealogy" R1a-as-Aryan pseudoscience' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`genetics:${entry.domain}:${entry.challenge}`) }))
  return {
    challenged: domains.length === 5 && domains.every((entry) => entry.studies.length > 0 && entry.challenge.length > 0 && entry.legend.length > 0),
    domains,
    root: merkleFold(domains.map((entry) => entry.receipt)),
    statement:
      'Discover the genetic links and challenge history with genetics: five ancient-DNA domains (deep Neolithic/Bronze ancestry, the Iron-Age Thracians, the Roman→Slavic transformation, the Bulgar steppe input, the modern composite), 11+ cited studies — each pairing a historical claim with the genome\'s verdict (confirms / complicates / refutes). Autochthony and "pure single-origin" myths refuted; the Slavic migration quantified as a mass event; the Turkic-Bulgar input shown modest.',
    boundary:
      'A research record from the discover-genetic-links-challenge-history workflow (5 domains, 10 dual minds, research↔verify, ~595k tokens; studies verified verbatim against PMC). The studies and their findings are real and cited; the honest line is that aDNA carries irreducible uncertainty (small samples, mtDNA/Y-only sets, sampling gaps, model-dependent %), and that genetic-nationalism (haplogroup-purity, Klyosov, the Wusun/Balhara overreaches) is flagged as pseudoscience on every side — the genome refutes purity, it does not award it.',
  }
}

// WHO used Glagolitic — the Bulgarian reception, the fifth axis.
export function glagoliticBulgarianReception() {
  const communities = [
    { community: 'disciples-received-by-boris', period: '885-886 (arrival); Boris I r. 852-889', place: 'from Great Moravia via Belgrade (a Bulgarian frontier post) to the capital Pliska', role: 'origin / reception — the founding act that gave Glagolitic a state after Moravia rejected it', documented: 'after Methodius died (6 Apr 885) Pope Stephen V banned the Slavonic liturgy and Wiching had the disciples expelled; Clement, Naum and Angelar reached Belgrade "then in the borders of Bulgaria" in 885/886 and were commissioned by Boris I (baptised c.864 as Michael) to instruct the future clergy — the decisive act that re-homed the Cyrillo-Methodian (Glagolitic) tradition in a Slavic state', legend: 'neat 886-for-everything compresses a multi-year process; the precise fates of Gorazd (Methodius\' designated successor) and Sava in Bulgaria are poorly documented; "Saviour of the Slavic letters" framing is a National-Revival construction' },
    { community: 'ohrid-literary-school', period: '886 - 12th c. (Glagolitic in use until the 12th c.; Clement bishop 893-916)', place: 'Ohrid and the southwestern province of Kutmichevitsa (Devol, Glavinica, Velika) — present-day North Macedonia/Albania, then First Bulgarian Empire', role: 'literary school / liturgical survival — where Glagolitic Old Church Slavonic was taught and PRESERVED LONGEST in the east (it also used Cyrillic from the end of the 9th c. — not Glagolitic-only)', documented: 'founded 886 by Clement of Ohrid on the order of Boris I; Clement taught ~3,500 disciples in Slavonic and the GLAGOLITIC alphabet 886-893, was ordained archbishop of Drembica/Velika in 893 (the first hierarch to preach and write in Slavonic), died 916, buried at his St Panteleimon monastery; Naum succeeded him as head teacher c.893, founded a monastery on Lake Ohrid in 905, died 23 Dec 910; the school used Glagolitic from its establishment until the 12th c. (~3 centuries)', legend: 'the "Glagolitic-only stronghold" overstates it — the source has Ohrid using Glagolitic until the 12th c. AND Cyrillic from the late 9th c.; the round 3,500 (sometimes inflated to 7,000) is approximate; "Wonderworker" miracle-healings in the Lives are hagiography; the modern Bulgarian-vs-Macedonian claim on Clement/Naum is a live political dispute, anachronistic on both sides' },
    { community: 'preslav-literary-school', period: 'founded 886 at Pliska; moved to Veliki Preslav 893; sacked 972', place: 'Pliska then Veliki Preslav (northeastern Bulgaria) and nearby scriptoria (Patleina, Ravna)', role: 'literary school / origin of Cyrillic — Greek-leaning scholars who adapted the Greek uncial to Slavic and abandoned Glagolitic in the east', documented: 'established by Boris I in 886 at Pliska, moved by Simeon I to Veliki Preslav in 893, burnt by John I Tzimiskes in 972; the Preslav scholars "quickly abandoned the Glagolitic scripts in favor of an adaptation of the Greek uncial" now called Cyrillic — most scholars agree Cyrillic was created by Cyril\'s students at the Preslav school in the 890s; figures: Simeon I, Naum (until 893), Constantine of Preslav, John the Exarch (Joan Ekzarh), Chernorizets Hrabar; Hrabar\'s "On the Letters" (O pismeneh, late 9th/early 10th c.) expounds the Glagolitic alphabet and, on one scholarly reading, defends GLAGOLITIC against Cyrillic', legend: 'attributing the Cyrillic alphabet to Clement of Ohrid PERSONALLY is traditional but doubted (it was developed collectively at Preslav); "Cyril and Methodius created Cyrillic" is a popular ERROR (Cyril created Glagolitic 862-863; Cyrillic is named after him but post-dates him); Hrabar\'s often-cited year "855/6363" does not appear in the cited article (approximate, not audited); Tudor Doksov as a Preslav figure is not corroborated by the school article' },
    { community: 'council-of-preslav-893', period: '893', place: 'Veliki Preslav', role: 'state act — made Old Church Slavonic the language of church and state and banished the Byzantine clergy (the political pivot of the Bulgarian reception)', documented: 'the People\'s Council of Preslav (893) dethroned the pagan-leaning Vladimir-Rasate and proclaimed Simeon I; Old Bulgarian (Old Church Slavonic) was to replace Greek in the liturgy and the Byzantine clergy to be banished and replaced with Bulgarian clerics', legend: 'the Council\'s direct role in ADOPTING Cyrillic is an inference, NOT a stated act — the Council article makes no Cyrillic connection (the Early-Cyrillic article only hedges that systematization "may have occurred" at the 893 Council); the tidy single-turning-point date compresses a gradual process reconstructed largely from later, Byzantine-tinged sources' },
    { community: 'long-glagolitic-survival', period: '11th-14th c.', place: 'western Bulgarian / Macedonian lands and Bulgarian Cyrillic scriptoria generally', role: 'liturgical survival — Glagolitic words and passages persisted inside Bulgarian Cyrillic manuscripts long after Cyrillic became dominant', documented: 'Glagolitic faded GRADUALLY, not abruptly: individual Glagolitic words and passages continued to appear inside Bulgarian Cyrillic manuscripts toward the end of the 14th c.; the principal surviving Glagolitic OCS gospels (Codex Zographensis, Codex Marianus, Codex Assemanius, late-10th/early-11th c.) are of Macedonian/Ohrid-type provenance', legend: 'Glagolitic survived LONGEST not in the east but in Croatia (into the 20th c. for Church Slavonic) — the Bulgarian east is the slow fade, not the longest survival; direct school-attribution of Zographensis/Marianus to Ohrid is hedged (provenance-type, not a documented commission — only Assemanius "may have been created" there)' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`glagolitic-reception:${entry.community}:${entry.documented}`) }))
  return {
    sealed: communities.length === 5 && communities.every((entry) => entry.documented.length > 0 && entry.legend.length > 0 && entry.period.length > 0 && entry.place.length > 0 && entry.role.length > 0),
    verified: true,
    communities,
    root: merkleFold(communities.map((entry) => entry.receipt)),
    statement:
      'WHO used Glagolitic — the Bulgarian reception (late 9th-10th c.), in five communities: the exiled disciples received by Boris I (885-886, the founding act), the Ohrid Literary School (Glagolitic preserved longest, ~3 centuries), the Preslav Literary School (where Cyrillic was made and Glagolitic abandoned in the east), the Council of Preslav 893 (Old Church Slavonic made church-and-state language), and the long Glagolitic survival in mixed Cyrillic manuscripts (11th-14th c.) — a two-script, two-centre map, each a documented core with its nationalist/hagiographic legend kept separate.',
    boundary:
      'A research record from the verify-who-used-glagolitic-bulgarian-reception workflow, adversarially checked against the cited Wikipedia sources (Clement of Ohrid, Saint Naum, Ohrid/Preslav Literary Schools, Council of Preslav, Early Cyrillic alphabet, Chernorizets Hrabar, Seven Apostles). The documented spines are source-verified; the honest frame, preserved per community: Glagolitic was created EARLIER for Moravia (Bulgaria is its reception, not its birthplace); Cyril made Glagolitic and the disciples made Cyrillic at Preslav (the "Cyril made Cyrillic" popular error flagged); the Ohrid "Glagolitic-only stronghold" is softened to Glagolitic-preserved-longest (it used both); the 893-Council→Cyrillic link is a hedged scholarly possibility, not a council act; and the Bulgarian-vs-Macedonian national claims on Clement/Naum/Ohrid are anachronistic on both sides — all flagged, not folded as fact.',
  }
}

// The octave bridge: double a frequency until it lands in the visible-light band (~400–790 THz).
export function frequencyToLight(hz: number): { octaves: number; thz: number; nm: number; hue: number; band: string } {
  let f = Math.max(1, hz)
  let octaves = 0
  while (f < 4.0e14 && octaves < 60) { f *= 2; octaves += 1 } // double up to the visible floor (~400 THz)
  const nm = (SPEED_OF_LIGHT / f) * 1e9
  const band = nm >= 620 ? 'red' : nm >= 590 ? 'orange' : nm >= 565 ? 'yellow' : nm >= 495 ? 'green' : nm >= 450 ? 'blue' : nm >= 425 ? 'indigo' : 'violet'
  const hue = nm >= 620 ? 5 : nm >= 590 ? 28 : nm >= 565 ? 55 : nm >= 495 ? 120 : nm >= 450 ? 220 : nm >= 425 ? 260 : 285
  return { octaves, thz: Math.round((f / 1e12) * 10) / 10, nm: Math.round(nm), hue, band }
}
