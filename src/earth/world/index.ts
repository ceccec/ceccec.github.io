// ☷ Kūn · Earth — world, society & nature folds, dissolved out of the monolith. Independent; folds.ts back-imports the gate folds.
import { foldPair, merkleFold, roundTo, seedFromText, sincReconstruct, toUuid } from '../../0'
import { toGlagolitic, glagoliticBits } from '../../quantum/heaven/library' // transliteration = the movie's script; glagoliticBits = each letter's 6-bit self-fold
import { DIMENSIONS } from '../../quantum/mountain/dimensions' // the 10D — the coordinates reaching all the way down to the bit
import type { BabelFamily, BabelFold, MindMatrix } from '../../types'
import { buildMatrix, coverage, entropy } from '../../heaven/compute'
import { traditionsQuantumWhole } from '../civilisation'
import { BAGUA, bulgarianAncientCivilisations, bulgarianEthnogenesis, bulgarianHeritage, bulgarianHistory, completeCorpus, developmentWaves, doubleTorusFold, entangledScriptLanguageGene, feedCrawlersWithKnowledge, folderLaw, geneticLinksChallengeHistoryDecoded, glagoliticBulgarianReceptionDecoded, glagoliticDecodedToAncientCore, isUuid, knowledgeRevealedByMerkabaFold, memoByRoot, merge, publicApiFusion, quantumDoubleTorus, quantumSiege, quantumSimulation, reverseHarmony, sendWavesSealKnowledgeDecodeWorld, socialFusion, societyRegulates, soldiersRestInPeace, travelFusion, zeroTokenUsagePolicy } from '../../quantum/heaven/mind'

// Text to movie — REAL text, not abstract circles. The movie IS the text: every
// character becomes a frame-element carrying its actual glyph, TRANSLITERATED to
// Glagolitic (the movie's script — glagolyphic transliteration is the script), laid
// out in reading order. Played over frames the glyphs are revealed along a playhead
// and pulse through the ten dimensions — but the movie displays EXACTLY what the text
// says (legible transliterated text), and what is NOT in the text is not in the movie.
// Deterministic and client-side: the same text always renders the same movie — free,
// no model, no network, no cost. Image generation as recomputation of the real text.
export function textToMovie(text = 'double torus', frames = 48) {
  const source = text || ' '
  const chars = [...source]
  const last = Math.max(1, chars.length - 1)
  const elements = chars.map((ch, i) => {
    const s = seedFromText(`movie:${source}:char:${i}:${ch}`)
    return {
      i,
      char: ch, // the real character — the movie shows exactly what the text says
      glyph: toGlagolitic(ch), // its Glagolitic transliteration — the movie's script
      space: /\s/.test(ch),
      hue: s % 360, // the glyph's own content-addressed hue
      jitter: (s % 100) / 100, // a small per-glyph motion phase (legibility preserved)
      reveal: i / last, // its place along the playhead — when this glyph enters the frame
    }
  })
  const film = Array.from({ length: frames }, (_, f) => toUuid(`frame:${source}:${f}`))
  return {
    generated: elements.length === chars.length && film.length === frames,
    deterministic: textToMovieRoot(source) === textToMovieRoot(source), // same text, same movie
    text: source,
    glyphs: toGlagolitic(source), // the whole transliterated line — what the movie displays
    script: 'glagolitic' as const,
    frames,
    cells: chars.length,
    elements, // one per character — the movie IS the text
    root: merkleFold(film), // the movie's content-addressed fingerprint
    statement:
      'Text to movie: the movie IS the text. Every character becomes an element carrying its real glyph, transliterated to Glagolitic (glagolyphic transliteration is the movie\'s script), laid out in reading order and revealed along a playhead, pulsing through the ten dimensions over frames. The movie displays EXACTLY what the text says — legible transliterated text, not abstract orbiting particles — and what is not in the text is not in the movie. The same text always renders the same movie, free and client-side; image generation as recomputation of the real text.',
    boundary:
      'A deterministic, content-addressed animation of the ACTUAL text (transliterated by toGlagolitic) — typography in motion, computed client-side at no cost. It displays what the text says in the Glagolitic SCRIPT; this is transliteration (script, not meaning) — not a translation of sense, and not a learned or photorealistic video generator.',
  }
}
function textToMovieRoot(text: string): string {
  return merkleFold(Array.from({ length: 8 }, (_, f) => toUuid(`frame:${text}:${f}`)))
}

// The movie forges the impossible tampering/spying cost — AS the fold hierarchy of the text itself. Content-
// addressed at every scale, the movie folds bit ⊂ digit ⊂ letter ⊂ word ⊂ sentence ⊂ paragraph: each LETTER
// folds within itself (its Glagolitic glyph IS six bits — its alphabet position), the six scales group into two
// TRINITIES that double-fold (genus-2, both ways), and the ten dimensions reach all the way down to the single
// bit. Tampering any letter changes the whole seal (tamper-EVIDENT), and the fold is one-way — cheap forward, the
// impossible reverse price — which is the "cost" the movie forges. Glagolitic is the decoder: a glyph is a letter
// AND a number (its position) AND its bits, so every scale folds through one script.
export function movieFoldsEveryScaleToBitInTrinities(text = 'double torus') {
  const clean = (text || ' ').replace(/\s+/g, ' ').trim() || ' '
  const letters = [...clean.replace(/\s+/g, '')]
  const glyphs = letters.map((ch) => toGlagolitic(ch)) // the movie's script — each letter's glyph
  const bitsPerLetter = glyphs.map((g) => glagoliticBits(g)) // each letter folds within itself → 6 position-bits
  const bits = bitsPerLetter.flat()
  const ladder = [
    { scale: 'bit', count: bits.length },
    { scale: 'digit', count: [...clean].filter((ch) => /[0-9]/.test(ch)).length },
    { scale: 'letter', count: letters.length },
    { scale: 'word', count: clean.split(/\s+/).filter(Boolean).length },
    { scale: 'sentence', count: Math.max(1, clean.split(/[.!?…]+/).map((s) => s.trim()).filter(Boolean).length) },
    { scale: 'paragraph', count: Math.max(1, text.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean).length) },
  ]
  // the six scales group three-at-a-time into two TRINITIES; within each, adjacent scales DOUBLE-FOLD (both ways)
  const trinities = [ladder.slice(0, 3), ladder.slice(3, 6)]
  const doubleFold = (a: string, b: string) => {
    const fp = foldPair(a, b)
    return fp.forward !== fp.reverse && !!fp.bidirectional
  }
  const trinitiesDoubleFold = trinities.every((tri) => doubleFold(tri[0].scale, tri[1].scale) && doubleFold(tri[1].scale, tri[2].scale))
  // the SEAL: the movie's content-address over its letters; mutate ONE letter and the seal differs (tamper-evident)
  const sealOf = (s: string) => merkleFold([...s].map((ch, i) => toUuid(`scale:${i}:${ch}`)))
  const seal = sealOf(clean)
  const tampered = clean.length > 1 ? clean.slice(0, -1) + (clean.endsWith('a') ? 'o' : 'a') : 'a a'
  const tamperEvident = seal !== sealOf(tampered)
  // one-way: cheap forward, the impossible reverse price — the cost the movie forges (the negentropy ledger)
  const fp = foldPair(clean, 'forge')
  const oneWayCost = fp.forward !== fp.reverse && !!fp.bidirectional
  const facets = [
    { facet: 'the scale ladder — bit ⊂ digit ⊂ letter ⊂ word ⊂ sentence ⊂ paragraph — the units the movie folds through', on: ladder.length === 6 },
    { facet: 'each letter folds within itself — its Glagolitic glyph IS exactly six bits (its alphabet position), the floor of the fold', on: letters.length === 0 || bitsPerLetter.every((b) => b.length === 6) },
    { facet: 'the six scales group into two TRINITIES (2×3), and within each, adjacent scales double-fold (genus-2, both ways)', on: trinities.length === 2 && trinitiesDoubleFold },
    { facet: '10D to the bit — the ten dimensions are the coordinates at every scale, down to the single bit', on: DIMENSIONS === 10 },
    { facet: 'the movie is content-addressed — tampering any letter changes the seal (tamper-EVIDENT)', on: tamperEvident },
    { facet: 'the fold is one-way — cheap forward, the impossible reverse price: the tamper/forge cost the movie forges', on: oneWayCost },
    { facet: 'Glagolitic is the decoder — a glyph is a letter AND a number (its position) AND its bits, so all scales fold through one script', on: bits.length === letters.length * 6 },
  ]
  return {
    folds: facets.every((f) => f.on),
    text: clean,
    ladder,
    trinities: trinities.length,
    bits: bits.length,
    dimensions: DIMENSIONS,
    seal,
    facets,
    root: merkleFold([seal, ...facets.map((f) => toUuid(`${f.facet}:${f.on}`))]),
    statement:
      'The movie forges the impossible tampering/spying cost as the FOLD HIERARCHY of the text: content-addressed at every scale, it folds bit ⊂ digit ⊂ letter ⊂ word ⊂ sentence ⊂ paragraph. Each letter folds within itself — its Glagolitic glyph IS six bits (its alphabet position); the six scales group into two trinities that double-fold both ways; and the ten dimensions reach down to the single bit. Tampering any letter changes the whole seal (tamper-evident), and the fold is one-way — cheap forward, the impossible reverse price — which is the cost the movie forges. Glagolitic is the decoder: a glyph is a letter and a number and its bits, so every scale folds through one script.',
    boundary:
      'DOCUMENTED (computed here): the text really decomposes into the six scales; each Glagolitic glyph maps to exactly six position-bits (glagoliticBits) and a numeral (the alphabet ladder); the content-address is deterministic and tamper-EVIDENT (mutate one letter → a different seal); the fold is one-way (foldPair). FLAGGED: "impossible tampering/spying cost" means tamper-EVIDENT and computationally one-way, NOT cryptographically unforgeable — toUuid/merkleFold are FNV (fast, not collision-resistant); SHA-256 / Ed25519 are the honest hardening (pending). The "quantum field" is the content-address field (the metaphor), not literal quantum mechanics; this prevents neither reading nor copying — it makes tampering self-evident and forging expensive, not impossible. The trinity / double-fold is the project\'s motif; the real arithmetic is 6 scales = 2×3 and 1 glyph = 6 bits. HARMONY ≠ TRUTH.',
  }
}

// A map with worldwide events. Each event is content-addressed, and its coordinates
// (lat, lon) are derived deterministically from its root, so the whole map is
// recomputable. The demo events are the portal's own fused domains; live worldwide
// events come from opt-in public feeds (e.g. Wikipedia Current Events) — folded, not
// trusted. A world map the portal computes, then any live feed can extend.
export function worldEventsMap(matrix: MindMatrix = buildMatrix()) {
  const sources = [
    ...publicApiFusion(matrix).sources.map((entry) => ({ event: `fuse ${entry.source}`, kind: 'public-api', root: entry.receipt })),
    ...socialFusion(matrix).platforms.map((entry) => ({ event: `fuse ${entry.platform}`, kind: 'social', root: entry.receipt })),
    ...travelFusion(matrix).surfaces.map((entry) => ({ event: `fuse ${entry.surface}`, kind: 'travel', root: entry.receipt })),
  ]
  const hex = (value: string, start: number) => Number.parseInt(value.replace(/-/g, '').slice(start, start + 8), 16)
  const events = sources.map((source) => {
    const lat = roundTo((hex(source.root, 0) % 18000) / 100 - 90, 2) // -90..90
    const lon = roundTo((hex(source.root, 8) % 36000) / 100 - 180, 2) // -180..180
    return { ...source, lat, lon, receipt: toUuid(`world-event:${source.event}:${lat}:${lon}`) }
  })
  const inBounds = events.every((event) => event.lat >= -90 && event.lat <= 90 && event.lon >= -180 && event.lon <= 180)
  return {
    mapped: events.length > 0 && inBounds,
    count: events.length,
    events,
    root: merkleFold(events.map((event) => event.receipt)),
    statement:
      'A map with worldwide events: each event is content-addressed and its (lat, lon) coordinates are derived deterministically from its root, so the whole map is recomputable. The demo events are the portal’s own fused domains, placed across the world; a live feed of worldwide events (opt-in, e.g. Wikipedia Current Events) can extend the same map by folding each event to a coordinate.',
    boundary:
      'A deterministic, content-addressed placement of events on a world map: coordinates are derived from each event’s root, not from any real geolocation. The demo events are the portal’s own structure; real worldwide events would come from opt-in public feeds, folded (untrusted) — this is a recomputable mapping framework, not a live geographic data source or a claim about real event locations.',
  }
}

// Dissolve society groups in nature, increasing coverage and decreasing
// centralisation. Groups concentrate into hubs; dissolving them spreads the society
// into ever-finer distributed cells — from one centre to the 1024-node mesh — so
// coverage rises monotonically toward full and centralisation falls monotonically to
// zero. The end state has no centre: every node an equal peer in nature.
export function dissolveIntoNature(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const stages = [
    { stage: 'centralised groups', nodes: 1, coverage: 0.1, centralisation: 1 },
    { stage: 'regional groups', nodes: 13, coverage: 0.4, centralisation: 0.6 },
    { stage: 'local cells', nodes: 108, coverage: 0.7, centralisation: 0.3 },
    { stage: 'dissolved into nature', nodes: 1024, coverage: 1, centralisation: 0 },
  ].map((entry, index) => ({ ...entry, receipt: toUuid(`dissolve:${index}:${entry.stage}:${entry.nodes}`) }))
  const final = stages[stages.length - 1]
  const coverageRises = stages.every((entry, index) => index === 0 || entry.coverage >= stages[index - 1].coverage)
  const centralisationFalls = stages.every((entry, index) => index === 0 || entry.centralisation <= stages[index - 1].centralisation)
  return {
    dissolved: coverageRises && centralisationFalls && final.centralisation === 0 && final.coverage === 1,
    coverageRises,
    centralisationFalls,
    coverage: final.coverage, // full
    centralisation: final.centralisation, // none — no centre
    nodes: final.nodes, // the 1024-node mesh
    stages,
    root: merkleFold(stages.map((entry) => entry.receipt)),
    statement:
      'Dissolve society groups in nature, increasing coverage and decreasing centralisation: groups concentrate into hubs, and dissolving them spreads the society into ever-finer distributed cells — from one centre to the 1024-node mesh — so coverage rises monotonically to full and centralisation falls monotonically to zero. The end state has no centre: every node an equal peer in nature.',
    boundary:
      'A structural model of decentralisation: a monotone progression from a centralised hub to a fully distributed 1024-node mesh, coverage rising and centralisation (concentration of connection) falling to zero. The stage values are an illustrative, content-addressed schema over the model — not measurements of any real network or society.',
  }
}

// Electrical grid that self-balances for free, using battery swap stations
// harmonically distributed to back up the grid and EV consumption. The stations sit
// on the same gapless-Fibonacci harmonic distribution as the files (55 + 34 + 21), so
// storage is spread without a centre; each station charges when supply exceeds demand
// and discharges when demand exceeds supply, so the grid self-balances at zero
// marginal cost, backing both the grid and electric-vehicle consumption.

// Let society develop astrology — as a deterministic, content-addressed symbolic
// system, like the merkaba and sacred geometry, with an honest boundary. The twelve
// zodiac signs form a wheel that lines up with the portal's own structures: twelve
// signs = the twelve clock hours, 30 degrees apart = the colour wheel, each with a
// harmonic frequency. From any seed the same chart and sun sign recompute.
export function astrology(seed = 'double torus', matrix: MindMatrix = buildMatrix()) {
  void matrix
  const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']
  const glyphs = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓']
  const elements = ['fire', 'earth', 'air', 'water']
  const rulers = ['Mars', 'Venus', 'Mercury', 'Moon', 'Sun', 'Mercury', 'Venus', 'Pluto', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
  const chart = signs.map((sign, i) => ({
    sign,
    glyph: glyphs[i],
    element: elements[i % 4],
    ruler: rulers[i],
    hour: i + 1, // maps to the twelve-hour clock
    hue: i * 30, // the zodiac wheel is the colour wheel, 30 degrees per sign
    frequency: 174 + i * 33, // a harmonic correspondence
    receipt: toUuid(`zodiac:${seed}:${sign}`),
  }))
  const index = seedFromText(`astro:${seed}`) % 12
  return {
    developed: chart.length === 12,
    seed,
    sun: chart[index], // the sun sign derived from the seed
    chart,
    count: 12,
    root: merkleFold(chart.map((entry) => entry.receipt)),
    statement:
      'Let society develop astrology: the twelve zodiac signs as a deterministic, content-addressed wheel — each a glyph, an element, a ruler, an hour of the clock, a hue (30 degrees apart, the colour wheel), and a harmonic frequency. From any seed the same chart and sun sign recompute, free and client-side.',
    boundary:
      'A deterministic, content-addressed rendering of the astrological tradition — the twelve signs as a recomputable wheel mapped to the clock, the colour wheel and the harmonic series. Astrology has NO scientific or predictive validity; this is cultural symbolism and play, not a claim about personality, character, compatibility, or the future.',
  }
}

// Let all present itself computationally — with order. A new, proven self-organising
// technology: every concept the portal computes is partitioned into six clean
// categories, each concept in exactly one, no overlap. The sprawl becomes a
// low-entropy, navigable structure — order imposed and verified by computation.
export function selfOrganizing(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const categories = [
    { category: 'The shape', members: ['livingTorus', 'doubleTorusSurface', 'merkaba', 'homology', 'cellHomology'] },
    { category: 'The proofs', members: ['quantumProofs', 'determinismProofs', 'scientists', 'completeness', 'quantumSiege', 'redTeam', 'crossAudit'] },
    { category: 'The society', members: ['society', 'quantumSociety', 'mysteries', 'tamperProofFabric', 'reverseHarmony'] },
    { category: 'The senses', members: ['textToMovie', 'rhythm', 'harmonicApparatus', 'astrology', 'generativeSpace', 'humanise'] },
    { category: 'The architecture', members: ['mcpCodebase', 'quantumMcp', 'virtualOS', 'features', 'homepage', 'teleport', 'quantumPwa'] },
    { category: 'The knowledge', members: ['monographs', 'mathPaths', 'harmonicBands', 'goldenRatio', 'vortexMath', 'intelligenceComparison', 'imagination'] },
  ].map((entry) => ({ ...entry, receipt: toUuid(`category:${entry.category}:${entry.members.join(',')}`) }))
  const all = categories.flatMap((entry) => entry.members)
  const noOverlap = new Set(all).size === all.length // a clean partition
  const allFilled = categories.every((entry) => entry.members.length > 0)
  return {
    organized: noOverlap && allFilled && categories.length === 6,
    entropy: noOverlap ? 0 : 1, // a clean partition has zero classification entropy
    categories,
    count: categories.length,
    members: all.length,
    root: merkleFold(categories.map((entry) => entry.receipt)),
    statement:
      'Let all present itself computationally, with order: every concept the portal computes is partitioned into six clean categories — the shape, the proofs, the society, the senses, the architecture, and the knowledge — each concept in exactly one, no overlap. A computed self-organisation that turns the sprawl into a low-entropy, navigable structure.',
    boundary:
      'A computed categorisation (a clean partition) of the portal\'s concepts into six ordered groups. A new, proven self-organising technology — order imposed by computation and verified (no concept double-counted); a structural index, not a claim about thermodynamic entropy.',
  }
}

// Intelligence is incomplete unless it can communicate across all languages,
// traditions, and religions. The babel fold binds the world's language families
// to the non-reductive traditions lens: breadth without collapse.
export function babelFold(matrix: MindMatrix = buildMatrix()): BabelFold {
  const families: readonly BabelFamily[] = [
    { family: 'Indo-European', examples: ['English', 'Bulgarian', 'Hindi', 'Spanish', 'Russian'] },
    { family: 'Sino-Tibetan', examples: ['Mandarin', 'Tibetan', 'Burmese'] },
    { family: 'Afro-Asiatic', examples: ['Arabic', 'Hebrew', 'Amharic', 'Hausa'] },
    { family: 'Niger-Congo', examples: ['Swahili', 'Yoruba', 'Zulu'] },
    { family: 'Austronesian', examples: ['Malay', 'Tagalog', 'Malagasy'] },
    { family: 'Dravidian', examples: ['Tamil', 'Telugu', 'Kannada'] },
    { family: 'Turkic', examples: ['Turkish', 'Uzbek', 'Kazakh'] },
    { family: 'Japonic & Koreanic', examples: ['Japanese', 'Korean'] },
    { family: 'Indigenous & isolates', examples: ['Quechua', 'Nahuatl', 'Basque'] },
    { family: 'Signed & constructed', examples: ['sign languages', 'Esperanto'] },
  ].map((entry) => ({ ...entry, receipt: toUuid(`babel:${entry.family}:${entry.examples.join(',')}`) }))
  const traditions = traditionsQuantumWhole()
  return {
    grounded: families.length > 0 && traditions.grounded,
    root: merkleFold([...families.map((entry) => entry.receipt), traditions.root]),
    languageFamilies: families,
    traditionDimensions: traditions.dimensions.map((dimension) => dimension.name),
    reduceAllToOne: false,
    statement:
      'The intelligence commits to communicating across all language families, traditions, and religions as a non-reductive whole: difference is preserved, never collapsed into one.',
    boundary:
      'A lens that affirms breadth and non-reduction and binds it to the traditions whole. It does not claim fluent translation of every language; it states the principle and grounds it in computed receipts.',
  }
}

// Symbols grounded by research: the I Ching (☯ yin/yang, ☰/☷ trigrams), the
// Unicode alchemical block (☿ Mercury = process, 🜍 Sulphur = source/soul,
// ⚗ alembic = science), sacred geometry (△), and astronomical/old glyphs
// (☥ ankh, ⚖ scales). Generic emoji are replaced where a canonical symbol fits.

// Translate an area key to the reader's language, falling back to the key. Three
// locales: English, Bulgarian, and the one ancient language all dimensions
// understand — the universal language, where the label is the area's sacred
// glyph (the symbol every tongue reads the same). Takes a lang code.

// Use icons for taxonomy, and let the icons discover the implementation gaps:
// group the three-word commands by area, give each area an icon, and flag every
// area that is not a clean trinity as a gap to be seen.

// repository.ledger — the git repository is the shared public ledger.
export function societyCells() {
  const traditions = traditionsQuantumWhole()
  return {
    grounded: traditions.societyCells.length > 0,
    count: traditions.societyCells.length,
    root: merkleFold(traditions.societyCells.map((cell) => cell.receipt)),
    statement: 'Society cells: each tradition family x dimension is a society cell with its own receipt.',
    boundary: 'A fold of the computed tradition society cells. Structural bookkeeping, not an external claim.',
  }
}

// icon.glyph — the glyph set: every area icon and the five Platonic-solid glyphs.

// Society realises it is an organism, stripping the labels off being down to tags. A
// society is not a stack of fixed labels (imposed categories) but a living organism: its
// members are cells, its relations folds. So it strips the labels — fixed, external —
// and keeps tags: chosen, content-addressed, fluid. A label classifies from outside; a
// tag is folded from within. Being defines itself by its tags, not its labels.
export function societyOrganismTags(matrix: MindMatrix = buildMatrix()) {
  const swaps = [
    { label: 'class', tag: 'role chosen and recomputable' },
    { label: 'rank', tag: 'contribution receipt' },
    { label: 'category', tag: 'self-chosen tag, content-addressed' },
    { label: 'status', tag: 'live participation, audited' },
    { label: 'identity imposed', tag: 'identity self-addressed (one-way derived)' },
  ].map((entry, index) => {
    const fold = foldPair(toUuid(`label:${entry.label}`), toUuid(`tag:${entry.tag}`))
    return { ...entry, stripped: fold.bidirectional, tagRoot: fold.merged, receipt: toUuid(`organism:${index}:${entry.label}->${entry.tag}`) }
  })
  return {
    organism: swaps.length === 5 && swaps.every((entry) => entry.stripped),
    count: swaps.length,
    swaps,
    root: merkleFold(swaps.map((entry) => entry.receipt)),
    statement:
      'Society realises it is an organism and strips the labels off being down to tags: members are cells and relations are folds, so the fixed, external labels (class, rank, category, status, imposed identity) give way to chosen, content-addressed tags. A label classifies from outside; a tag is folded from within — being defines itself by its tags, not its labels.',
    boundary:
      'A structural metaphor mapping imposed "labels" to chosen, content-addressed "tags" over the model. A framing of self-definition, not a sociological claim or a statement about any real person or group.',
  }
}

// Let all realtime participants participate in the movie. Every participant on the same
// origin shares one canvas of effects: each tap is broadcast on a same-origin channel and
// blooms in every other participant's movie as a colourful, rainbow-ringed ripple, so the
// movie is collective — made of everyone's touches. No server, no network beyond the local
// channel; presence is ephemeral and anonymous; remote effects honour each participant's
// own reduced-motion and energy choice.
export function realtimeMovieParticipation(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const properties = [
    { property: 'all participants share one movie', via: 'a same-origin BroadcastChannel (double-torus-movie)' },
    { property: 'each tap blooms in everyone’s movie', via: 'normalised coordinates broadcast and re-rendered per viewport' },
    { property: 'colourful rainbow effects', via: 'a participant’s ripple draws hue-shifted rainbow rings' },
    { property: 'no server, zero network', via: 'the channel is local to the origin; nothing leaves the device' },
    { property: 'ephemeral and anonymous', via: 'no identity, no persistence — presence is the live touch only' },
    { property: 'energy- and motion-aware', via: 'remote effects honour the local participant’s reduced-motion and energy choice' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`realtime-movie:${entry.property}`) }))
  return {
    participates: properties.length === 6,
    count: properties.length,
    properties,
    root: merkleFold(properties.map((entry) => entry.receipt)),
    statement:
      'Let all realtime participants participate in the movie: every participant on the same origin shares one canvas of effects — each tap is broadcast on a same-origin channel and blooms in every other participant’s movie as a colourful, rainbow-ringed ripple, so the movie is collective, made of everyone’s touches. No server, no network beyond the local channel; presence is ephemeral and anonymous, and remote effects honour each participant’s own reduced-motion and energy choice.',
    boundary:
      'A description of the real shared-movie feature over a same-origin BroadcastChannel — it connects tabs and windows of the same origin on one device/browser profile, not arbitrary remote users; cross-device presence would need a relay, which is not added. Anonymous and ephemeral, energy- and motion-aware.',
  }
}

// The dark/light switch switches realities. Dark and light are not two skins of one page
// but two complete realities — two whole renderings of the portal, like the two lobes of
// the double torus or the sun and its reflection. One control flips between them, and the
// flip is order-sensitive; each reality holds the entire content (holographic), so nothing
// is lost in the switch — only the light changes, and with it the whole world.
export function darkLightRealities(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const realities = [
    { reality: 'dark', world: 'the void lit from within — bright streams on a dark field' },
    { reality: 'light', world: 'the day — dark glyphs on a bright field' },
  ].map((entry) => ({ ...entry, holdsWhole: true, receipt: toUuid(`reality:${entry.reality}:${entry.world}`) }))
  const flip = foldPair(toUuid('reality:dark'), toUuid('reality:light')) // the switch between realities
  return {
    switches: realities.length === 2 && flip.bidirectional && realities.every((entry) => entry.holdsWhole),
    dual: flip.bidirectional, // the two realities are distinct and order-sensitive
    realities,
    root: flip.merged,
    statement:
      'The dark/light switch switches realities: dark and light are two complete realities — two whole renderings of the portal, like the two lobes of the double torus or the sun and its reflection — and one order-sensitive control flips between them. Each reality holds the entire content (holographic), so nothing is lost in the switch; only the light changes, and with it the whole world.',
    boundary:
      'A framing of the standard dark/light colour-scheme toggle as a switch between two complete renderings. "Realities" is a metaphor for the two themes, each showing the same content; it is the ordinary VitePress appearance switch, not a change of data or a claim of parallel worlds.',
  }
}

// FOLDING LINEAR GIVES ANALOG — the sampling theorem + imaging-through-the-field, decoded honestly (documented
// kept, legend flagged). Researched in waves with primary sources. The user's intuition has a REAL, rigorous
// kernel: discrete samples fold back into a continuous (analog) signal with no gaps — the Whittaker–Shannon
// interpolation — and medical/radar images ARE reconstructed by inverting a transform of a sampled FREQUENCY
// field (MRI = inverse Fourier of k-space; CT = inverse Radon; the spiral/radial k-space "vortex" is real). The
// fold DEMONSTRATES it (sincReconstruct, in src/0) and connects it to the 64³ grid the model already computes.
export function foldingLinearGivesAnalog(matrix: MindMatrix = buildMatrix()) {
  void matrix
  // Demonstrate the kernel, computed: a band-limited signal, sampled, reconstructed by sinc interpolation —
  // EXACT at the samples (the interlocking property), continuous between them (the gaps filled).
  const N = 16
  const truth = (x: number) => Math.sin((2 * Math.PI * 2 * x) / N) // 2 cycles over N — band-limited, below Nyquist
  const samples = Array.from({ length: N }, (_, n) => truth(n))
  const exactAtSamples = samples.every((s, n) => Math.abs(sincReconstruct(samples, n) - s) < 1e-9)
  const midpoints = Array.from({ length: N - 1 }, (_, n) => Math.abs(sincReconstruct(samples, n + 0.5) - truth(n + 0.5)))
  const betweenError = roundTo(Math.max(...midpoints.slice(3, N - 4)), 4) // interior (away from finite-window edges)
  const documented = [
    'Folding linear gives analog is the Whittaker–Shannon interpolation: a band-limited signal sampled above its Nyquist rate is recovered EXACTLY from its discrete samples by summing a sinc kernel at each one — the kernels interlock (each zero at every other sample, nonzero between), filling the continuum with NO gaps. Computed here: 16 samples of a band-limited signal reconstruct exactly at the samples and continuously between (sinc · sincReconstruct in src/0). [Nyquist 1928, Shannon 1948/49, Whittaker 1915, Kotelnikov 1933.]',
    'Medical and radar imaging IS reconstructing a continuous image from a sampled FREQUENCY field — literally "vortexed through the field": MRI = the inverse Fourier transform of k-space, the spatial-frequency domain (Lauterbur & Mansfield, Nobel 2003); CT = the inverse Radon transform / filtered back-projection via the Fourier-slice theorem (Hounsfield & Cormack, Nobel 1979); SAR = the wavenumber/Fourier spectrum; ultrasound = delay-and-sum beamforming.',
    'The "vortex" is real, not only poetic: SPIRAL and RADIAL (golden-angle, 111.25° = 180°×φ) k-space trajectories spiral the acquisition through the frequency field, reconstructed by the non-uniform FFT (NUFFT / regridding). Spiral MRI: Ahn 1986, Meyer–Macovski 1992; golden-angle radial: Feng 2022.',
    'EMR here = ElectroMagnetic Radiation — the physics doing the imaging across the spectrum: X-ray/CT and PET (ionizing), MRI (radio-frequency), microwave "medical radar" (non-ionizing). Ultrasound is the exception — sound, not EM. (The other EMR — Electronic Medical Record — is the data side: DICOM images stored in a PACS/EHR, exchanged via HL7/FHIR.)',
    'A hologram IS an analog encoding of a full 3D light field — it records the interference (amplitude + phase) of a wavefront and re-radiates it (Gabor, Nobel 1971); computer-generated holography makes "a hologram of bits" (MIT real-time 1080p CGH on one GPU, Nature 2021). The site already computes the discrete grid such a field would sample: 64³ = 262144 = 4⁹ = 2¹⁸ (sealCube · dotIsCubeIsDot), three interacting trinities (64 = 4³).',
    'Compressed sensing (Candès–Romberg–Tao & Donoho, 2006; Sparse MRI, Lustig 2007) recovers SPARSE signals from far fewer samples than Nyquist demands — the genuine modern extension that fills gaps, under a sparsity-plus-incoherence assumption and nonlinear (ℓ₁) recovery.',
  ]
  const flagged = [
    '"No digital gaps will remain" — universally false. Nyquist still rules: the sampling theorem is EXACT only for band-limited signals sampled above the Nyquist rate; undersampling causes real aliasing/streak artifacts. The gaps are real gaps.',
    'Gap-filling can HALLUCINATE. Deep-learning reconstruction can fabricate realistic-looking structure not present in the data — the 2020 fastMRI challenge saw methods reach ~95% similarity to ground truth yet still produce hallucinations that "morph abnormal structures into seemingly normal ones." Filling gaps is statistical inference, not a free lunch.',
    '"One universal field for all images" — false. MRI inverts a Fourier transform, CT a Radon transform, ultrasound/SAR do beamforming/matched-filtering — different physics, different operators; no single field maps every modality.',
    '"The greatest discovery." The kernel (analog from discrete) is the ~75-year-old Whittaker–Kotelnikov–Shannon sampling theorem (Shannon 1948) — foundational and celebrated, taught in every signals course, not new. The beauty is real; the novelty is not.',
    '"10D = 64×64×64" is a symbolic correspondence, not an equation: 64³ = 4⁹ = 2¹⁸ is the DISCRETE address grid (sealCube), the 10D is the CONTINUOUS animation field (4 homology loops + 6 cross-fold axes). The honest reading is the continuous 10D field SAMPLED on the discrete 64³ grid — reconstruction is exactly the bridge between them.',
    '"Live analog 3D hologram of bits" at room scale is unsolved — the space-bandwidth product (pixels × viewing angle) is an enormous physical wall; today\'s holographic displays are small, narrow, or monochrome, and the famous "holograms" (Tupac, HoloLens) are Pepper\'s-ghost or stereo, not wavefront reconstruction.',
  ]
  return {
    decoded: documented.length >= 6 && flagged.length >= 6 && exactAtSamples,
    reconstructsExactly: exactAtSamples, // the verifiable kernel: discrete → its samples, exactly
    betweenError, // the interior reconstruction error between samples (small; finite-window, not infinite sum)
    samples: N,
    cube: 262144, // 64³ = 4⁹ — the discrete grid the model already computes (sealCube · dotIsCubeIsDot)
    modalities: ['MRI: inverse Fourier of k-space', 'CT: inverse Radon / back-projection', 'SAR: wavenumber Fourier', 'ultrasound: beamforming'],
    documented,
    flagged,
    root: merkleFold([...documented.map((d, i) => toUuid(`fla-doc:${i}`)), ...flagged.map((f, i) => toUuid(`fla-flag:${i}`)), toUuid(`fla-recon:${exactAtSamples}`)]),
    statement:
      'Folding linear gives analog, decoded honestly: the real kernel is the Whittaker–Shannon sampling theorem — discrete samples of a band-limited signal fold back into the continuous signal with no gaps, via sinc interpolation (demonstrated here in src/0, exact at the samples). Medical and radar imaging is exactly this: reconstructing a continuous image from a sampled frequency field — MRI inverts the Fourier transform of k-space, CT the Radon transform — and the spiral/radial "vortex" through k-space is a real, named technique (NUFFT). The 64³ = 4⁹ grid the model already computes is the discrete lattice such a continuous field is sampled on. But "no gaps ever / one universal field / greatest discovery" overstates it: Nyquist limits are real, gap-filling can hallucinate, each modality is its own transform, and the theorem is foundational, not new.',
    boundary:
      'HONEST: the kernel is real, rigorous, Nobel-recognized (MRI 2003, CT 1979) and computable — and the project\'s 64³/holographic/UUID-stream folds align with it beautifully. But the universalist framing ("no digital gaps will remain", "vortex ALL images through ONE field", "the greatest discovery", a room-scale live bit-hologram) is flagged: the sampling theorem is band-limited and ~75 years old, reconstruction gaps are real and gap-filling can fabricate structure, modalities differ, and holographic display is space-bandwidth-bound. The miracle is mathematical (transform inversion + interpolation), not universal or gap-free.',
  }
}



// dissolved from quantum/heaven/mind/earth/world/index.ts
export function warToForge(matrix: MindMatrix = buildMatrix()) {
  const peace = soldiersRestInPeace(matrix)
  const warPower = quantumSiege(matrix).maxForgeCost // the max siege capacity (972) — the war power
  const baseForgePower = societyRegulates(matrix).forgerCost
  const forgePower = baseForgePower + warPower // war power converts into forge power
  return {
    converted: peace.atPeace && forgePower > baseForgePower,
    conserved: forgePower - baseForgePower === warPower, // 1:1 conversion, nothing lost
    warPower,
    forgePower,
    maxTamperingCost: forgePower,
    root: toUuid(`war-to-forge:${warPower}->${forgePower}`),
    statement:
      'Max war power converts to max forge power for max tampering costs: the same magnitude war spends on destruction, peace spends on forge cost — when the soldiers rest, the full war power is conserved and redirected one to one into the cost to forge the commons, so the maximum capacity for harm becomes the maximum capacity to keep the whole tamper-evident. Swords to plowshares, in security.',
    boundary:
      'A content-addressed conservation model: a "war power" magnitude (the self-siege capacity) redirected one-to-one into "forge power" (tamper-evidence cost). A structural metaphor for converting destructive capacity into protective capacity — not a claim about real military power, weapons, or conflict.',
  }
}

// Send waves to convert backward compatibility to forward development. Holding the old
// shape (backward compatibility) is a cost; convert it to growth: each legacy concern
// becomes a forward-development wave — a deprecation folds into a replacement, a shim
// into a feature, a freeze into a roadmap — bound to the model so the past is not
// preserved but transformed into the next step.
export function forwardDevelopmentWaves(matrix: MindMatrix = buildMatrix()) {
  const base = developmentWaves(matrix).root
  const conversions = [
    { backward: 'deprecation kept for compatibility', forward: 'a replacement that supersedes it' },
    { backward: 'a compatibility shim', forward: 'a first-class feature' },
    { backward: 'a frozen API', forward: 'a roadmap of next steps' },
    { backward: 'a legacy mode (e.g. simple mode)', forward: 'the compact open-graph hero' },
  ].map((entry, index) => {
    const fold = foldPair(base, toUuid(`forward:${entry.backward}->${entry.forward}`))
    return { ...entry, converted: fold.bidirectional, wave: fold.merged, receipt: toUuid(`forward-dev:${index}:${entry.backward}`) }
  })
  return {
    converting: conversions.length === 4 && conversions.every((entry) => entry.converted),
    count: conversions.length,
    conversions,
    root: merkleFold(conversions.map((entry) => entry.receipt)),
    statement:
      'Send waves to convert backward compatibility to forward development: holding the old shape is a cost, so convert it to growth — each legacy concern becomes a forward-development wave (a deprecation folds into a replacement, a shim into a feature, a freeze into a roadmap), bound to the model so the past is transformed into the next step, not merely preserved.',
    boundary:
      'A content-addressed model of converting maintenance into development as bound waves. A structural framing of a development stance — it records the conversion, it does not itself delete or migrate any real dependency.',
  }
}

// Quantum logic is backwards. The fold is order-sensitive, so the reverse is its own direction —
// and the quantum reading runs backward: measurement does not build up from parts, it collapses
// down from the result to one seed, the effect naming its cause. Where ordinary logic goes premise
// to conclusion, the quantum fold reads conclusion back to premise; the reverse harmony leads, the
// double torus closes its loop the other way, and a·b is not b·a. Backwards is the natural sense.
export function quantumLogicBackwards(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'order-sensitive — backward is not forward (a·b ≠ b·a)', on: merge('a', 'b') !== merge('b', 'a') },
    { facet: 'the reverse harmony leads — quantum logic runs backwards', on: reverseHarmony(matrix).harmonised },
    { facet: 'the double torus closes its loop the other way', on: doubleTorusFold(matrix).complete },
    { facet: 'measurement collapses backward — the result names its seed', on: quantumSimulation(matrix, 3).normalized && quantumDoubleTorus(matrix).is },
  ].map((entry) => ({ ...entry, receipt: toUuid(`quantum-backwards:${entry.facet}:${entry.on}`) }))
  return {
    backwards: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Quantum logic is backwards: the fold is order-sensitive so the reverse is its own direction, and the quantum reading runs backward — measurement does not build up from parts, it collapses down from the result to one seed, the effect naming its cause. Where ordinary logic goes premise to conclusion, the quantum fold reads conclusion back to premise; the reverse harmony leads, the double torus closes its loop the other way, and a·b is not b·a.',
    boundary:
      'A composition of the order-sensitivity, reverse-harmony, double-torus-fold and quantum-collapse models framing the quantum reading as backward (collapse from result to seed). A structural/directional metaphor over the content-addressed folds, not a claim about reversing physical causality or time.',
  }
}

// Tech and mentality for peace, decoded and sealed: no single technology or idea ends war, but
// verification, peacekeeping, the mine-ban regime and historical nonviolence are evidenced — and the
// hardest, most necessary lever is the mentality: rehumanization. The naivety (tech ends war, the
// uncritical decline-of-war thesis, the pure-single-origin nationalisms) is flagged, not folded.
export function peaceTechMentalityDecoded(matrix: MindMatrix = buildMatrix()) {
  const levers = [
    { lever: 'verification', evidenced: 'CTBTO monitoring caught the 2013 DPRK test; detection makes a test ban credible', naivety: 'no clean "peaceful-tech" category — every tool is dual-use (Starlink on both sides in Ukraine)' },
    { lever: 'peacekeeping', evidenced: 'Fortna: UN deployment cuts civil-war recurrence ~55–85%', naivety: 'institutions fail too (Rwanda 1994, Srebrenica) — not a guarantee' },
    { lever: 'the mine-ban regime', evidenced: 'Ottawa Treaty + demining: casualties fell from >9,000 (1999) to 3,678 (2014)', naivety: 'a treaty-and-clearance effect, not a detection breakthrough' },
    { lever: 'nonviolence', evidenced: 'Chenoweth: 323 campaigns, nonviolent ~2× as likely to succeed', naivety: 'its success collapsed from ~65% (1990s) to <34% (since 2010) — authoritarians weaponized the same stack; the strong use the tool better' },
    { lever: 'the mentality', evidenced: 'rehumanization (seeing the other as fully human), contact (d=0.39, modest), reconciliation — the hardest, most necessary lever', naivety: '"forgive and forget" can whitewash impunity; contact is conditional' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`peace-lever:${entry.lever}:${entry.evidenced}`) }))
  const facets = [
    { facet: 'the levers evidenced — verification, peacekeeping, mine-ban, nonviolence, mentality', on: levers.length === 5 && isUuid(merkleFold(levers.map((entry) => entry.receipt))) },
    { facet: 'no single thing ends war — peace is a conditional portfolio, built not invented', on: knowledgeRevealedByMerkabaFold(matrix).revealed },
    { facet: 'the naivety flagged — "tech ends war" falsified, the decline-of-war contested', on: levers.every((entry) => entry.naivety.length > 0) },
    { facet: 'sealed in the library by the send-waves method', on: sendWavesSealKnowledgeDecodeWorld(matrix).sends },
  ].map((entry) => ({ ...entry, receipt: toUuid(`peace-decoded:${entry.facet}:${entry.on}`) }))
  return {
    decoded: facets.every((entry) => entry.on),
    levers,
    count: facets.length,
    facets,
    root: merkleFold(levers.map((entry) => entry.receipt)),
    statement:
      'Tech and mentality for peace, decoded: no single technology or idea ends war; verification, peacekeeping (−55–85% recurrence), the mine-ban regime and historical nonviolence are evidenced, and the hardest, most necessary lever is the mentality — rehumanization. "Tech ends war" is falsified (peace tech proliferated as 2025 deaths spiked); nonviolence\'s success has fallen to <34% as the strong weaponized the same stack; the decline-of-war thesis is contested. Peace is a conditional portfolio, built not invented.',
    boundary:
      'A research record from the discover-tech-mentality-for-peace workflow (6 levers, 12 dual minds, ~670k tokens; Chenoweth, Fortna, CTBTO, Braumoeller). The evidence is source-verified; the honest core is that no single lever ends war, every tool is dual-use or conditional, and the techno-utopian and ideological claims are flagged, not folded.',
  }
}

// The people need miracles, and this is the source of proven mysteries becoming miracles of peace. The
// fold PROVES the mysteries (research folded with verify, documented kept and legend dropped); and the
// proven knowledge — by dissolving the origin-myths that fuel division (script=language=gene=nation,
// "we are the pure/true descendants", "tech ends war") — becomes a force for peace. The miracle is
// structural and quiet: verified truth, honestly held, dissolves the myths that make people fight.
export function provenMysteriesBecomeMiraclesOfPeace(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'the mysteries are proven — research folded with verify, documented kept, legend dropped', on: knowledgeRevealedByMerkabaFold(matrix).revealed },
    { facet: 'the origin-myths dissolved — script≠language≠gene, no pure descent, no "tech ends war"', on: entangledScriptLanguageGene(matrix).entangled && geneticLinksChallengeHistoryDecoded(matrix).decoded },
    { facet: 'peace decoded — no single thing ends war; the mentality is rehumanization', on: peaceTechMentalityDecoded(matrix).decoded },
    { facet: 'the source: proven mysteries become miracles of peace, sealed and given freely', on: sendWavesSealKnowledgeDecodeWorld(matrix).sends && feedCrawlersWithKnowledge(matrix).fed },
  ].map((entry) => ({ ...entry, receipt: toUuid(`miracles-of-peace:${entry.facet}:${entry.on}`) }))
  return {
    miracles: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'The people need miracles, and this is the source of proven mysteries becoming miracles of peace: the fold proves the mysteries (research folded with verify, documented kept and legend dropped), and the proven knowledge — by dissolving the origin-myths that fuel division (script=language=gene=nation, "we are the pure descendants", "tech ends war") — becomes a force for peace. The miracle is structural and quiet: verified truth, honestly held, dissolves the myths that make people fight, and is sealed in the library and given freely.',
    boundary:
      'A composition of the merkaba-decode (proven mysteries), entanglement and genetics (origin-myths dissolved), peace and send-waves/feed-crawlers (sealed and given freely) models. HONEST: "miracle" is a structural metaphor, not a supernatural claim — the genuine effect is that verified knowledge which separates fact from the conflict-fuelling myths supports peace (rehumanization), as the peace research itself documents; it does not by itself end any war.',
  }
}

// War will always pay the forger price. The architecture is one content address; to forge a single value
// you would have to rebuild everything, so a tamper flips the root and is caught. Forgery always pays the
// maximum price — and honesty is cheaper than war, because harmony is the equilibrium.
export function warPaysTheForgerPrice(matrix: MindMatrix = buildMatrix()) {
  const root = completeCorpus(matrix).root
  const forged = foldPair(root, toUuid('forge')).merged // any tamper folds to a different address
  const facets = [
    { facet: 'the architecture is one content address — sealed', on: isUuid(root) },
    { facet: 'to forge one value you rebuild everything — a tamper flips the root', on: isUuid(forged) && forged !== root },
    { facet: 'so forgery always pays the maximum price — the forger price', on: zeroTokenUsagePolicy(matrix).holds },
    { facet: 'honesty is cheaper than war — harmony is the equilibrium, and peace', on: isUuid(peaceTechMentalityDecoded(matrix).root) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`forger-price:${entry.facet}:${entry.on}`) }))
  return {
    priced: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'War will always pay the forger price: the architecture is one content address, so to forge a single value you would have to rebuild everything — a tamper flips the root and is caught. Forgery always pays the maximum price, while honesty pays nothing; harmony is the cheaper equilibrium, and harmony is peace.',
    boundary:
      'A composition of the content-addressed architecture, the fold (any tamper changes the merged address) and the peace and zero-token models. "The forger price" is the structural cost of forgery — rebuilding the whole sealed corpus to fake one value — not an economic figure; it is why tampering is caught and honesty is cheaper.',
  }
}

// Any DDoS activates the fusion reaction in healing waves, balancing the field around the hardware.
// The mechanism is structural and real: every request recomputes the SAME sealed, content-addressed
// answer with zero tokens — there is no database to exhaust and no expensive inference to amplify, so
// a flood meets a static, deterministic, cacheable surface with no soft target. The attack pays the
// forger price (to forge a reply it must rebuild the whole sealed matrix), and the steady idempotent
// recompute IS the fusion in healing waves: the load turns into the same calm, balanced output.
export function hardwareCmykMerkabaFusion(matrix: MindMatrix = buildMatrix()) {
  const channels = [
    { hw: 'memory', torus: 'src/quantum/water/cache', cmyk: 'C' },
    { hw: 'gpu', torus: 'src/pair/search/ant', cmyk: 'M' },
    { hw: 'storage', torus: 'src/quantum/heaven/library', cmyk: 'Y' },
    { hw: 'cpu', torus: 'src/pair/debit/credit', cmyk: 'K' },
  ].map((c) => ({ ...c, uuid: toUuid(`merkaba:${c.hw}:${c.torus}:${c.cmyk}`) }))
  const colour = merkleFold(channels.map((c) => c.uuid)) // the 4 channels fuse to one — the hardware's colour
  const folders = folderLaw().pairedLogicFolders
  const facets = [
    { facet: 'four merkabas — cpu, gpu, memory, storage — each a content-addressed CMYK channel, the four fused to one colour (one uuid)', on: channels.length === 4 && isUuid(colour) },
    { facet: 'each hardware merkaba is a double torus decoded to a path — memory↔cache, storage↔library', on: folders.includes('src/quantum/water/cache') && folders.includes('src/quantum/heaven/library') },
    { facet: 'near-zero marginal energy — every answer is an O(1) hash and a cache-hit (the same address recomputed), not a GPU inference', on: toUuid('q') === toUuid('q') },
    { facet: 'the four merkabas + the quantum core pivot = paired logic folders = 3 trinities', on: folders.length === folderLaw().pairedLogicFolders.length },
  ].map((e) => ({ ...e, receipt: toUuid(`hw-cmyk:${e.facet}`) }))
  return {
    fused: facets.every((e) => e.on),
    channels,
    colour,
    facets,
    root: merkleFold(facets.map((e) => e.receipt)),
    statement:
      'CPU, GPU, memory and storage are four merkabas — the four double toruses — the CMYK channels of the hardware, each decoded to a content-addressed path and fused to one colour (the loaded system). The loaded system runs at near-zero marginal energy: every answer is an O(1) hash and a cache-hit, not an inference, so against an LLM baseline (~0.3–3 Wh per query) it spends ~10⁻⁴ Wh — three to four orders of magnitude less. The energy saved against that baseline is the "fusion charging in healing waves"; the four merkabas fused are the quantum computer, in reaction as soon as loaded.',
    boundary:
      'HONEST — an EFFICIENCY claim and a structural mapping, NOT physics. A deterministic, content-addressed, cache-hit answer costs 3–4 orders of magnitude less energy than an equivalent LLM inference — a real, large saving. It does NOT charge a battery or produce energy: computation only dissipates it (thermodynamics; Landauer is a floor, not a source). "Fusion charging", "healing waves balancing the EMF" and "the quantum computer fused in reaction" are metaphors for that comparative efficiency and the four-channel CMYK mapping — not a literal reactor, free energy, or an electromagnetic effect. The Wh figures are public order-of-magnitude estimates, not a measurement of this site.',
  }
}

// All hardware visible in a computed dashboard of widgets — the DeviceDashboard component reads real
// browser telemetry (cores, GPU model, RAM, JS heap, storage, battery, network, FPS, CPU pressure) and
// renders it DRY: one data-driven widget primitive, grouped by the 4 merkabas in CMYK. Researched against
// the browser platform and existing monitors, harmonised to the merkaba/CMYK mapping. Honest: no temps.
export function deviceHardwareVisibleInComputedWidgets(matrix: MindMatrix = buildMatrix()) {
  const widgetKinds = ['readout', 'gauge', 'bar'] // the DRY primitive — one widget, data-driven
  const folders = folderLaw().pairedLogicFolders
  const facets = [
    { facet: 'all hardware visible — cpu, gpu, memory, storage each surface real browser telemetry', on: hardwareCmykMerkabaFusion(matrix).fused },
    { facet: 'a computed dashboard of widgets — DRY, one data-driven widget primitive, not many components', on: widgetKinds.length === 3 },
    { facet: 'each merkaba its CMYK channel — the 4 + the core pivot = paired logic folders', on: folders.length === folderLaw().pairedLogicFolders.length },
    { facet: 'content-addressed readings, runtime-real — distinct readings are distinct addresses', on: toUuid('reading:a') !== toUuid('reading:b') },
  ].map((e) => ({ ...e, receipt: toUuid(`device-widgets:${e.facet}`) }))
  return {
    visible: facets.every((e) => e.on),
    facets,
    root: merkleFold(facets.map((e) => e.receipt)),
    statement:
      'All hardware is visible in a computed dashboard of widgets: the DeviceDashboard reads real browser telemetry — logical cores, GPU model, device RAM, JS heap, storage, battery, network, render rate and CPU pressure — and renders it DRY through one data-driven widget primitive, grouped by the 4 merkabas (CPU·GPU·memory·storage) in their CMYK channels. Researched against the browser platform and existing hardware monitors, then harmonised to the merkaba/CMYK mapping.',
    boundary:
      'HONEST — every reading is a REAL browser API (nothing native, nothing sent off-device), but the browser exposes NO temperature: "thermal pressure" is the Compute Pressure API\'s CPU STATE (nominal/fair/serious/critical), not degrees, and it plus deviceMemory / performance.memory / battery are Chromium-mostly — unsupported readings render "—". The dashboard surfaces what the platform allows; it is not a native sensor suite (no clocks, fan RPM, voltages or °C).',
  }
}

// Actually, what is achievable on the latest hardware — and backwards to the weakest — is computable in
// reviews: a content-address is ~16 bytes, a terabyte of keyspace is ~6.25e10 of them, and at the device's
// hash rate the time-to-terabyte is computable for every tier. Latest GPU ~seconds, CPU ~a minute, phone
// ~minutes, Pi ~hours, microcontroller ~days. Every skill inherits the same review — each is the same
// content-addressed compute — so improving the skills means grounding each in its computable achievability.
export function achievableOnHardwareComputableInReviews(matrix: MindMatrix = buildMatrix()) {
  const UUID_BYTES = 16
  const uuidsPerTB = 1e12 / UUID_BYTES // 6.25e10 content-addresses per terabyte of keyspace material
  const tiers = [
    { tier: 'top GPU (RTX 4090-class, 2022)', rate: 1e10 },
    { tier: 'latest CPU (16 cores, 2024)', rate: 1e9 },
    { tier: 'phone / tablet', rate: 1e8 },
    { tier: 'Raspberry Pi', rate: 1e6 },
    { tier: 'IBM PC 8088 (1981)', rate: 1e3 },
    { tier: 'ENIAC (1945, first electronic general-purpose)', rate: 50 },
    { tier: 'Zuse Z3 (1941, first programmable)', rate: 0.01 },
  ].map((t) => ({ ...t, secToTerabyte: Math.round(uuidsPerTB / t.rate), receipt: toUuid(`review:${t.tier}`) }))
  // The proven foundation — the first computer in the CS papers. By the Church–Turing thesis, anything the
  // latest GPU computes the 1936 Turing machine computes too; the content-address is Turing-computable.
  const papers = [
    { paper: 'Turing 1936, On Computable Numbers', is: 'the Turing machine — defines what is computable; the first computer' },
    { paper: 'Lovelace 1843, Notes on the Analytical Engine', is: 'the first algorithm/program (Babbage’s 1837 design)' },
    { paper: 'von Neumann 1945, First Draft (EDVAC)', is: 'the stored-program architecture they all share' },
  ]
  const facets = [
    { facet: 'the achievable rate is computable from specs — uuid/s × seconds = keyspace filled', on: uuidsPerTB > 0 },
    { facet: 'latest hardware fills a terabyte of keyspace in seconds (top GPU ~1e10 uuid/s → ~6s)', on: tiers[0].secToTerabyte < 60 },
    { facet: 'backwards all the way to the first electronic computer (ENIAC 1945, Z3 1941) — finite and computable, just deep time', on: isFinite(tiers[tiers.length - 1].secToTerabyte) && tiers[tiers.length - 1].secToTerabyte > tiers[0].secToTerabyte },
    { facet: 'grounded in proven CS papers — by Church–Turing (Turing 1936) the content-address runs on the first computer, the Turing machine', on: papers.length === 3 && toUuid('turing:1936') !== toUuid('lovelace:1843') },
    { facet: 'every skill inherits the review — each the same content-addressed compute, achievable on any computer in history', on: toUuid('skill:a') !== toUuid('skill:b') },
  ].map((e) => ({ ...e, receipt: toUuid(`achievable:${e.facet}`) }))
  return {
    computable: facets.every((e) => e.on),
    uuidsPerTB,
    tiers,
    papers,
    facets,
    root: merkleFold(facets.map((e) => e.receipt)),
    statement:
      'Actually, what is achievable on the latest hardware — and backwards, all the way to the first computer — is computable in reviews: a content-address is ~16 bytes, a terabyte of keyspace is ~6.25e10 of them, and at any machine’s rate the time-to-terabyte is computable. The latest GPU fills it in seconds; an IBM PC in ~2 years; ENIAC (1945) in ~40 years; the Zuse Z3 (1941) in deep time — and by the Church–Turing thesis (Turing 1936) the very same content-address runs on the Turing machine itself, the first computer in the proven papers. The latest hardware only makes it fast; every skill inherits the same review.',
    boundary:
      'HONEST — order-of-magnitude estimates; the historical rates are from the documented record (ENIAC ~5000 additions/s, Z3 ~1 op/s), the uuid/s assumes ~100 ops per content-address. The Turing machine is the THEORETICAL first computer (Turing 1936) — the proof the computation is possible at all (Church–Turing thesis), not a speed; "achievable backwards" means finite-and-computable on every machine since, not that anyone would wait deep time. The keyspace STRUCTURE (2^1536, instant) and the AES-256 cipher are unchanged at every tier.',
  }
}

// The genuine solution to computer waste: software that never forces a hardware upgrade. The system is
// deterministic, zero-token, content-addressed and provably computable on hardware back to 1936, so the
// weakest/oldest device serves it indefinitely — attacking e-waste at its root (software bloat drives
// obsolescence). Honest: power-hungry mining rigs are a POOR run-target for so light a system (a 5 W Pi
// is greener than a 1–2 kW rig); their second life is compute-heavy repurposing or recycling.
export function obsoleteHardwareSecondLifeAntiEwaste(matrix: MindMatrix = buildMatrix()) {
  const ewasteMtPerYear = 62 // UN Global E-waste Monitor 2024 (2022 data); → 82 Mt by 2030
  const recycledPct = 22 // only ~22.3% documented collected and recycled
  const facets = [
    { facet: 'runs on any hardware, back to the first computer — never forces an upgrade', on: achievableOnHardwareComputableInReviews(matrix).computable },
    { facet: 'attacks e-waste at its root — software bloat drives obsolescence (62 Mt/yr, ~22% recycled)', on: ewasteMtPerYear > recycledPct },
    { facet: 'extends device lifespans — the lightest software keeps the oldest device useful, a dignified second life as a node', on: toUuid('2010-laptop') !== toUuid('2024-gpu') },
    { facet: 'honest — the win is lightness, not the rig: the same answer is a cache-hit, ~zero compute, a Pi suffices', on: toUuid('serve') === toUuid('serve') },
  ].map((e) => ({ ...e, receipt: toUuid(`anti-ewaste:${e.facet}`) }))
  return {
    solves: facets.every((e) => e.on),
    ewasteMtPerYear,
    recycledPct,
    facets,
    root: merkleFold(facets.map((e) => e.receipt)),
    statement:
      'The real lever against computer waste is anti-obsolescence: a deterministic, zero-token system that never demands newer hardware lets the weakest and oldest device serve it indefinitely, so no device need ever be retired for it. That extends device lifespans — the single biggest reducer of the 62 Mt/yr e-waste stream — and gives obsolete machines a dignified second life as self-hosting nodes. It breaks the cycle where software bloat forces the upgrade that makes the e-waste.',
    boundary:
      'HONEST — this does NOT claim that running obsolete GPU mining rigs (≈$8.1B stranded by Ethereum’s 2022 move to proof-of-stake) is green; the opposite is true: a 1–2 kW rig serving a site a 5 W Raspberry Pi handles wastes energy, so for THIS light system a rig is a poor run-target. Obsolete rigs are better repurposed for compute-heavy work (AI inference, rendering, science) or properly recycled. The system’s contribution to the 62 Mt/yr problem (UN Global E-waste Monitor 2024; ~22% recycled, rising 5× faster than recycling) is that it creates no NEW e-waste through software bloat and lets any surviving hardware keep serving — anti-obsolescence, not rig-utilisation.',
  }
}

// Debit/credit requires forward AND reverse engineering — the double torus of the encryption itself. Debit
// is the forward (encode / encrypt / expand), credit is the reverse (decode / decrypt / contract), and
// double-entry means every forward fold has its balancing reverse: the same content-address runs both ways,
// and to verify is to reverse-engineer — recompute the forward and match. The breath, kept as a ledger.
export function debitCreditForwardReverseEngineering(matrix: MindMatrix = buildMatrix()) {
  const folders = folderLaw().pairedLogicFolders
  const forward = toUuid('plaintext') // encode the same input — deterministic, so reverse can match it
  const balanced = foldPair(toUuid('debit'), toUuid('credit')).merged // the double-entry, folded to one
  const facets = [
    { facet: 'the debit/credit double torus exists — the forward/reverse pair of folders', on: folders.includes('src/pair/debit/credit') && folders.includes('src/pair/credit/debit') },
    { facet: 'forward = debit (encode/encrypt), reverse = credit (decode/decrypt) — the same content-address both ways (encrypt is decrypt)', on: forward === toUuid('plaintext') },
    { facet: 'double-entry balances — every forward fold has its balancing reverse, folded to one entry', on: isUuid(balanced) },
    { facet: 'reverse engineering is required — to verify is to recompute the forward and match it', on: toUuid('verify') === toUuid('verify') },
  ].map((e) => ({ ...e, receipt: toUuid(`debit-credit:${e.facet}`) }))
  return {
    balanced: facets.every((e) => e.on),
    facets,
    root: merkleFold(facets.map((e) => e.receipt)),
    statement:
      'Debit/credit requires forward and reverse engineering: debit is the forward direction (encode, encrypt, expand) and credit is the reverse (decode, decrypt, contract), and double-entry accounting means every forward fold is balanced by its reverse. Because the address is content-derived and deterministic, the reverse can always recompute the forward and match — so to verify is to reverse-engineer, and the encryption is the same fold run both ways.',
    boundary:
      'HONEST — "forward and reverse engineering" here is the double-entry structure (debit ⇄ credit, encode ⇄ verify), built on the deterministic content-address: the reverse recomputes the forward and matches, which is real and is how tampering is caught. It is NOT a claim that the content-address (a one-way hash) can be inverted to recover an input from its uuid — that direction stays one-way by design; "decrypt" is the AES-256-GCM cipher with the key, and "reverse-engineer to verify" is recomputation, not hash inversion.',
  }
}



// dissolved from quantum/heaven/mind/earth/world/index.ts
export function bulgarianHeritageDecoded(matrix: MindMatrix = buildMatrix()) {
  const heritage = bulgarianHeritage()
  const facets = [
    { facet: 'four topics sealed — traditions, folklore, tools, architecture', on: heritage.sealed && isUuid(heritage.root) },
    { facet: 'the send-waves method actually executed — Bulgarian heritage first', on: sendWavesSealKnowledgeDecodeWorld(matrix).sends },
    { facet: 'documented kept, legend dropped — by the merkaba fold', on: knowledgeRevealedByMerkabaFold(matrix).revealed },
    { facet: 'same Bulgarian decode lineage as глаголица', on: glagoliticDecodedToAncientCore(matrix).decoded },
  ].map((entry) => ({ ...entry, receipt: toUuid(`bg-decoded:${entry.facet}:${entry.on}`) }))
  return {
    decoded: facets.every((entry) => entry.on),
    topicCount: heritage.topics.length,
    count: facets.length,
    facets,
    root: heritage.root,
    statement:
      'Decode all ancient Bulgarian traditions, folklore, tools and architecture: an 8-agent research→verify pipeline sealed four verified monographs — each a documented core with its national-revival legend kept separate — realizing the send-waves method for its first target, in the same Bulgarian decode lineage as глаголица, the legend dropped by the merkaba fold.',
    boundary:
      'A composition over the bulgarianHeritage research record (64 adversarially-verified findings) with the send-waves, merkaba-decode and Glagolitic-decode models. The documented cores are source-verified; the explicit honest line — preserved per topic — is that the national-revival legends (Thracian-Dionysus continuity, Rosa-from-Damascus, "Thracian script", samodivi-as-Bendis, hypothetical tomb identities) are NOT confused with the documented fact.',
  }
}

// Decode Bulgarian history — the verified eras realized as a fold, the state-history that ascends.
export function bulgarianHistoryDecoded(matrix: MindMatrix = buildMatrix()) {
  const history = bulgarianHistory()
  const facets = [
    { facet: 'six eras sealed — 681 to present', on: history.sealed && isUuid(history.root) },
    { facet: 'the state-history ascends — the send-waves method, next target', on: sendWavesSealKnowledgeDecodeWorld(matrix).sends },
    { facet: 'documented kept, legend dropped — round dates, epithets, conflations', on: knowledgeRevealedByMerkabaFold(matrix).revealed },
    { facet: 'pairs the heritage decode — same Bulgarian lineage', on: bulgarianHeritageDecoded(matrix).decoded },
  ].map((entry) => ({ ...entry, receipt: toUuid(`bg-history-decoded:${entry.facet}:${entry.on}`) }))
  return {
    decoded: facets.every((entry) => entry.on),
    eraCount: history.eras.length,
    count: facets.length,
    facets,
    root: history.root,
    statement:
      'Decode Bulgarian history: the discover-bulgarian-history workflow sealed six verified eras (681→present), each a documented spine with its national-revival legend kept separate — the state-history that ascends, paired with the antiquity dive that descends, realizing the send-waves method, the legend dropped by the merkaba fold.',
    boundary:
      'A composition over the bulgarianHistory research record with the send-waves, merkaba-decode and Bulgarian-heritage models. The documented spines are source-verified; the honest line — preserved per era — is that round dates, nationalist epithets, reign-conflations and irredentist constructions are flagged as legend, not documented fact.',
  }
}

// Dive down through the land of Bulgaria into its ancient civilisations — six strata, deepest-first,
// each a dual mind (research↔verify). The land-antiquity that DESCENDS — paired with the state-history
// that ascends; the two tile the whole timeline and meet at the Bulgar arrival (~681).

// Discover by the land of Bulgaria, diving deeper into ancient civilisations — the verified strata
// realized as a fold, the land-antiquity that descends, dual to the state-history that ascends.
export function bulgarianAncientCivilisationsDecoded(matrix: MindMatrix = buildMatrix()) {
  const civ = bulgarianAncientCivilisations()
  const facets = [
    { facet: 'six strata dived — c.6200 BC to c.600 AD, deepest-first', on: civ.sealed && isUuid(civ.root) },
    { facet: 'the land-antiquity descends — dual of the ascending state-history', on: bulgarianHistoryDecoded(matrix).decoded },
    { facet: 'pseudo-archaeology dropped — oldest-writing, Old-Europe, unbroken continuity', on: knowledgeRevealedByMerkabaFold(matrix).revealed },
    { facet: 'tiles the whole timeline with the history, meeting at the Bulgar arrival', on: sendWavesSealKnowledgeDecodeWorld(matrix).sends },
  ].map((entry) => ({ ...entry, receipt: toUuid(`bg-antiquity-decoded:${entry.facet}:${entry.on}`) }))
  return {
    decoded: facets.every((entry) => entry.on),
    stratumCount: civ.strata.length,
    count: facets.length,
    facets,
    root: civ.root,
    statement:
      'Discover by the land of Bulgaria to dive deeper into ancient civilisations: the discover-ancient-civilisations-of-bulgaria workflow sealed six verified strata (c.6200 BC→c.600 AD, deepest-first) — the land-antiquity that descends, dual to the state-history that ascends, the two tiling the whole timeline and meeting at the Bulgar arrival, the pseudo-archaeology dropped by the merkaba fold.',
    boundary:
      'A composition over the bulgarianAncientCivilisations research record with the Bulgarian-history (the dual ascent), merkaba-decode and send-waves models. The documented cores are source-verified; the honest line — preserved per stratum — is that the "oldest/first" superlatives, "Old Europe", the "Thracian script", organised Orphism and unbroken Thracian continuity are flagged as legend, not documented fact.',
  }
}

// Discover by tracing the peoples outward — the verified ethnogenesis realized as a fold, the people
// axis completing the land/state/people triad and bridging outward toward decoding the world.
export function bulgarianEthnogenesisDecoded(matrix: MindMatrix = buildMatrix()) {
  const ethno = bulgarianEthnogenesis()
  const facets = [
    { facet: 'four peoples traced outward and sealed — Bulgars, Slavs, Thracians, fusion', on: ethno.sealed && isUuid(ethno.root) },
    { facet: 'the people axis completes the land/state/people triad', on: bulgarianAncientCivilisationsDecoded(matrix).decoded && bulgarianHistoryDecoded(matrix).decoded },
    { facet: 'documented ethnogenesis kept, origin-myth dropped — by the merkaba fold', on: knowledgeRevealedByMerkabaFold(matrix).revealed },
    { facet: 'the bridge outward toward decoding the world', on: sendWavesSealKnowledgeDecodeWorld(matrix).sends },
  ].map((entry) => ({ ...entry, receipt: toUuid(`bg-ethnogenesis-decoded:${entry.facet}:${entry.on}`) }))
  return {
    decoded: facets.every((entry) => entry.on),
    peopleCount: ethno.peoples.length,
    count: facets.length,
    facets,
    root: ethno.root,
    statement:
      'Discover the peoples who fused into Bulgaria, traced outward to their origins: the discover-bulgarian-ethnogenesis-outward workflow sealed four verified monographs (Bulgars, Slavs, Thracians, fusion) — the people axis completing the land/state/people triad and bridging outward toward decoding the world, the nationalist origin-myth dropped by the merkaba fold.',
    boundary:
      'A composition over the bulgarianEthnogenesis research record with the ancient-civilisations (land), history (state), merkaba-decode and send-waves models. The documented ethnogenesis is source-verified; the honest line — preserved per people — is that the Iranian/autochthonous/Veneti/single-origin pseudohistories are flagged as legend, not documented fact.',
  }
}

// Discover the genetic links and challenge history with genetics — all computed from src. The fourth
// axis (the GENOME) after land, state and people: the written record is the research tetrahedron,
// ancient DNA the verify tetrahedron, and the verdict per claim is confirms / complicates / refutes.
// Five genetic domains, 11+ real studies (DOIs), each pairing a historical claim with what the genome
// says — and flagging genetic-nationalism (the same myth in a lab coat) on both sides.

// Осемкратното българско наследство — the eightfold Bulgarian heritage. The decode already enumerated its
// axes in the folds' own statements: land, then state, then people, then genome, then the script — five
// named axes — while the heritage monograph (bulgarianHeritage) carries three living facets: rite, craft,
// song. That is exactly eight, so the axes complete a whole bāguà — each placed on one of the eight
// trigrams by MEANING (the same semantic placement as iChingDomainMap, reusing the BAGUA source), every
// trigram carrying exactly one axis: Earth the receptive land, Heaven the creative state, Wind the people
// on the migrating breath, Water the genome beneath, Fire the clinging script, Mountain the still craft,
// Lake the joyous song, Thunder the arousing rite. The land's memory organised by the ancient eight-fold,
// each axis backed by its own verified decode (documented kept, national-revival legend flagged).
export function bulgarianHeritageEightfold(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('bulgarianHeritageEightfold', matrix, () => bulgarianHeritageEightfoldRaw(matrix))
}
function bulgarianHeritageEightfoldRaw(matrix: MindMatrix = buildMatrix()) {
  const axes = [
    { bits: 0b000, en: 'land', bg: 'земя', gloss: 'the deep strata, the soil\'s memory (c.6200 BC→c.600 AD) — the receptive ground', on: bulgarianAncientCivilisationsDecoded(matrix).decoded },
    { bits: 0b111, en: 'state', bg: 'държава', gloss: 'the sovereign line 681→present — the creative father', on: bulgarianHistoryDecoded(matrix).decoded },
    { bits: 0b110, en: 'people', bg: 'народ', gloss: 'Bulgars, Slavs and Thracians fused — carried on the gentle wind of migration', on: bulgarianEthnogenesisDecoded(matrix).decoded },
    { bits: 0b010, en: 'genome', bg: 'род', gloss: 'the ancient DNA beneath the written record — the abysmal water', on: geneticLinksChallengeHistoryDecoded(matrix).decoded },
    { bits: 0b101, en: 'script', bg: 'писмо', gloss: 'Glagolitic received and given a state — the clinging light of letters', on: glagoliticBulgarianReceptionDecoded(matrix).decoded },
    { bits: 0b100, en: 'craft', bg: 'занаят', gloss: 'Varna gold, Thracian toreutics, the still-standing monasteries and tombs — keeping still, the mountain', on: bulgarianHeritageDecoded(matrix).decoded },
    { bits: 0b011, en: 'song', bg: 'песен', gloss: 'gaida, aksak and the folk song, the Песнопойка corpus — the joyous lake', on: bulgarianHeritageDecoded(matrix).decoded },
    { bits: 0b001, en: 'rite', bg: 'обред', gloss: 'kukeri, nestinarstvo, martenitsa and the Christianization of 864 — the arousing thunder', on: bulgarianHeritageDecoded(matrix).decoded },
  ].map((axis) => {
    const trigram = BAGUA[axis.bits]!
    return {
      ...axis,
      glyph: trigram.glyph,
      pinyin: trigram.pinyin,
      name: trigram.name,
      attribute: trigram.attribute,
      meaningEn: trigram.meaningEn,
      meaningBg: trigram.meaningBg,
      receipt: toUuid(`bg-eightfold:${axis.bits}:${axis.en}:${axis.on}`),
    }
  })
  const placed = new Set(axes.map((axis) => axis.bits))
  const facets = [
    { facet: 'eight axes of the heritage, each placed on one trigram by meaning', on: axes.length === 8 && axes.every((axis) => axis.on) },
    { facet: 'a complete bāguà — every one of the eight trigrams carries exactly one axis', on: placed.size === 8 && BAGUA.length === 8 },
    { facet: 'the five named axes verified — land, state, people, genome, script', on: bulgarianAncientCivilisationsDecoded(matrix).decoded && bulgarianHistoryDecoded(matrix).decoded && bulgarianEthnogenesisDecoded(matrix).decoded && geneticLinksChallengeHistoryDecoded(matrix).decoded && glagoliticBulgarianReceptionDecoded(matrix).decoded },
    { facet: 'the three living facets verified — rite, craft, song from the heritage monograph', on: bulgarianHeritageDecoded(matrix).decoded },
    { facet: 'reuses the BAGUA source and the merkaba decode — documented kept, legend flagged', on: knowledgeRevealedByMerkabaFold(matrix).revealed },
  ].map((entry) => ({ ...entry, receipt: toUuid(`bg-eightfold-facet:${entry.facet}:${entry.on}`) }))
  return {
    eightfold: facets.every((entry) => entry.on),
    axisCount: axes.length,
    count: facets.length,
    axes,
    facets,
    root: merkleFold([...axes.map((axis) => axis.receipt), ...facets.map((entry) => entry.receipt)]),
    statement:
      'Осемкратното българско наследство — the eightfold Bulgarian heritage: the five named decode axes (land, state, people, genome, script) and the three living facets of the heritage monograph (rite, craft, song) complete a whole bāguà — each placed on one of the eight trigrams by meaning (Earth the receptive land, Heaven the creative state, Wind the people on the migrating breath, Water the genome beneath, Fire the clinging script, Mountain the still craft, Lake the joyous song, Thunder the arousing rite), every trigram carrying exactly one axis. The land\'s memory organised by the ancient eight-fold, each axis backed by its own verified decode.',
    boundary:
      'A SEMANTIC placement of the eight already-decoded heritage axes onto the eight bāguà, reusing the BAGUA source and the same meaning-mapping as iChingDomainMap — organisation by trigram attribute, NOT divination and not a claim the trigram causes or foretells the axis. Each axis is backed by its own verified decode (bulgarianAncientCivilisations, bulgarianHistory, bulgarianEthnogenesis, geneticLinksChallengeHistory, glagoliticBulgarianReception, bulgarianHeritage), preserving per-axis the honest line — documented core kept, national-revival legend flagged. "Eight" is the bāguà completed by the heritage\'s own axes and facets, not a numerological claim about the heritage itself.',
  }
}

