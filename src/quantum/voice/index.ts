// ☵ Kǎn · Water · abysmal · upper·yang · hueShift — the UX/communication layer: plain language, play-and-learn, speech,
// typography, Open Graph, char/word content-addressing, humanization, and the multidimensional map.
// Dual: src/spirit/voice/quantum (browse/display primitives). Pure, only src/0 imports.

// ☷ Kūn · Earth · receptive · lower·yin · spread — content-addressing and merkle primitives
import { servedRouteFromSlugs, theoremScienceVisible } from '../../3/7'
import { STATIC_PAGE_SEED } from '../../8/2'
import { toUuid, merkleFold } from '../../0'
import { movieCanvasHex } from '../science'
import { a432NoteHz } from '../../fire/li'

// ☵ Kǎn · Water · abysmal · upper·yang · hueShift — voice domain exports
/** @rosetta ✦₁ · Water · depth */
export const dual = 'src/water/double'

/** @rosetta ✦₁ · Water · depth */
export function plainLanguage() {
  const lines = [
    { term: 'Double Torus', plain: 'A learning portal you can check for yourself: every claim is a number anyone can recompute.', route: '/' },
    { term: 'Receipt', plain: 'A short code that fingerprints something — change one bit and the code changes.', route: '/architecture' },
    { term: 'Seal', plain: 'Proof the whole thing still adds up: recompute it and compare.', route: '/architecture' },
    { term: 'Palette & melody', plain: 'Type a word and get the same colours and tune every time, shareable by citing the word.', route: '/learn' },
    { term: 'Sonification', plain: 'Hear data as sound — to catch what the eye misses, or to use without a screen.', route: '/commands' },
    { term: 'MCP', plain: 'A way for AI assistants to call these tools directly.', route: '/mcp' },
    { term: 'Academy', plain: 'Five short courses; finish them and you earn a credential you can prove.', route: '/learn' },
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
      'Plain restatements of the model\'s own ideas for a first-time reader. They simplify; the precise definitions live in the pages they link to.' }
}

/** @rosetta ✦₁ · Water · depth */
export function playLearn(word = 'play') {
  // C-major C4..C5 derived from the single A432 source (a432NoteHz) — semitones of each degree relative to A4=432.
  const SCALE = [-9, -7, -5, -4, -2, 0, 2, 3].map((semitones) => a432NoteHz(semitones)) // C D E F G A B C, A=432 anchor
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
      hsl: movieCanvasHex(value % 360, { L: 13 / 16 }),
      receipt: seed }
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
      'A playful deterministic mapping of letters to colours and notes (on a fixed major scale). A toy for learning that the same input gives the same output — not a claim about language, music theory, or synaesthesia.' }
}

// Quantum speech is analog by nature. Text is discrete symbols; speech is a continuous wave.
/** @rosetta ✦₁ · Water · depth */
export function analogSpeech() {
  const params = [
    { param: 'pitch', range: [0, 2] as const, note: 'continuous tone — the voice is a wave, not a symbol' },
    { param: 'rate', range: [(1 / 2), 2] as const, note: 'continuous tempo' },
    { param: 'volume', range: [0, 1] as const, note: 'continuous loudness' },
  ].map((entry) => ({ ...entry, analog: entry.range[1] > entry.range[0], receipt: toUuid(`analog-speech:${entry.param}`) }))
  return {
    analog: params.every((entry) => entry.analog),
    params,
    root: merkleFold(params.map((entry) => entry.receipt)),
    statement: 'Quantum speech is analog by nature: text is discrete symbols, but speech is a continuous wave — pitch, rate, and volume vary smoothly. Turning text into speech bridges the discrete to the analog.',
    boundary: 'A description of speech as a continuous signal shaped by analog parameters, rendered by the device Web Speech API. Not a claim about quantum acoustics.' }
}

/** @rosetta ✦₁ · Water · depth */
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
    boundary: 'Typographic and structural principles applied in the theme CSS. They aid readability and crawlability; they are not a ranking guarantee.' }
}

/** @rosetta ✦₁ · Water · depth */
export function openGraph() {
  const fields = [
    'og:type', 'og:title', 'og:description', 'og:url', 'og:locale', 'og:image',
    'og:video', 'twitter:card', 'twitter:title', 'twitter:description', 'twitter:image',
    'link:canonical', 'link:ray-hub', 'link:related',
  ].map((field, index) => ({ field, source: 'openGraphCardFromRoute+platformOgLimitsMeasured', receipt: toUuid(`open-graph:${index}:${field}`) }))
  return {
    computed: fields.length === (2 * 7),
    fields,
    root: merkleFold(fields.map((entry) => entry.receipt)),
    statement: 'Open Graph is computed from the route via openGraphCardFromRoute: title/description/image/links, with animation branched on platformOgLimitsMeasured — not wet frontmatter stubs alone.',
    boundary: 'Mapping applied at render time from openGraphCardFromRoute; platform animation limits are MEASURED (platformOgLimitsMeasured), not prose. External CDN render is not guaranteed.' }
}

// Each char a UUID, and next the words. Content-addressing goes all the way down.
/** @rosetta ✦₁ · Water · depth */
export function charUuids(text = '') {
  const chars = [...text].map((char, index) => ({ char, index, uuid: toUuid(`char:${index}:${char}`) }))
  return {
    count: chars.length,
    chars,
    root: chars.length > 0 ? merkleFold(chars.map((entry) => entry.uuid)) : toUuid('char:empty'),
    statement: 'Each char a UUID: every character folds to a content UUID, and the characters fold into one root.',
    boundary: 'A content-addressing of characters. Structural bookkeeping over text, not an external claim.' }
}

/** @rosetta ✦₁ · Water · depth */
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
    boundary: 'A content-addressing of words built from characters. Structural bookkeeping over text, not an external claim.' }
}

// Humanize. Behind the maths and the 3d+ is a simple set of promises to a person.
/** @rosetta ✦₁ · Water · depth */
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
    boundary: 'Plain-language restatements of the model\'s properties. Warmth and clarity, not new claims.' }
}

// Present all multidimensionally, for the best UX.
/** @rosetta ✦₁ · Water · depth */
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
      { label: 'Speech & subtitles', route: '/learn', tip: 'Read aloud in any device language.' },
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
      { label: 'School', route: '/learn', tip: 'From the ground up, any age.' },
      { label: 'Academy', route: '/learn', tip: 'Five courses, a credential.' },
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
      { label: 'Creative palette', route: '/learn', tip: 'Colour and melody from a seed.' },
    ] },
  ]
  const items = dims.flatMap((d) => d.items)
  // ONLY SERVED ROUTES survive (user law: purge old links) — the guide keeps a dimension only while
  // it still has served destinations; the theorem-science lens decides, at call time, from the seed.
  const servedSlugs = new Set(STATIC_PAGE_SEED.filter((page) => theoremScienceVisible(page.slug, page.keywords)).map((page) => page.slug))
  const isServed = (route: string) => servedRouteFromSlugs(route, servedSlugs) // ONE route grammar (src/3/7)
  const dimsServed = dims.map((d) => ({ ...d, items: d.items.filter((item) => isServed(item.route)) })).filter((d) => d.items.length > 0)
  return {
    mapped: dimsServed.length > 0 && dimsServed.length <= 8 && dimsServed.every((d) => d.items.length > 0),
    dimensions: dimsServed,
    count: dimsServed.reduce((sum, d) => sum + d.items.length, 0),
    root: merkleFold(dimsServed.flatMap((d) => d.items.map((item) => toUuid(`multidim:${item.label}`)))),
    statement: `Present all multidimensionally: the served portal in ${dimsServed.length} dimensions of experience, each browsable — every destination a served science surface (the purge law filters at call time), so the breadth is a map, not a scroll.`,
    boundary: 'A presentation map over the SERVED routes only — items whose pages left the theorem-science lens drop at call time, and a dimension with no served destination has no entry. A guide for the user experience, not new capability.' }
}
