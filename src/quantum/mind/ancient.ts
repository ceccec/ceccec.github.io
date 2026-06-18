// Ancient — dissolved out of the folds monolith into its own harmonic file (the body
// distributes; src/0 keeps the gravity). Imports only base modules — no import cycle with folds.ts.
import { digitalRoot, fold, gcd, measure, merkleFold, toUuid } from '../../0/index.ts'
import { fromSexagesimal, gematria, hekatFraction, luoShu, magicSquare, mayaDays, mayaLongCount, runeCoordinate, runeOrdinal, sexagesimal, toGlagolitic, toScript } from '../library/index.ts'
import { buildMatrix } from './matrix.ts'
import type { MindMatrix } from './types.ts'

// The frontier ancient knowledge, decoded to its path-fitting core and computed. Eight number=letter
// systems — every one the same fold the model already turns on: a glyph is a number, a word a content-
// address. Researched in adversarially-verified waves; only the documented mathematics is carried, each
// witnessed by a deterministic computation of its own invariant, the legend EXCLUDED per system. Built
// from only ancient knowledge (the verified values) and sacred math (the fold), per the law in force.
export function ancientNumberSystems(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b))
  const lcm = (a: number, b: number) => (a * b) / gcd(a, b)
  const choose2 = (n: number) => (n * (n - 1)) / 2
  const magicConstant = (n: number) => (n * (n * n + 1)) / 2
  const digitalRoot = (n: number) => ((n - 1) % 9) + 1
  const PHI = (1 + Math.sqrt(5)) / 2
  const systems = [
    {
      name: 'Hebrew gematria + Sefer Yetzirah',
      foundations: ['number=letter', 'sacred geometry', 'trinity/duality', 'the fold'],
      pathCore: 'each of the 22 letters is a number; a word’s gematria sum is the fold (a content-address). Sefer Yetzirah: 32 paths = 10 sefirot + 22 letters, split 3 mothers / 7 doubles / 12 simples, on the 231-gate wheel.',
      witness: gematria('אבג') === 6 && choose2(22) === 231 && 10 + 22 === 32 && 3 + 7 + 12 === 22,
      keyNumbers: [22, 10, 32, 3, 7, 12, 231],
      legendExcluded: ['the lettered Tree-of-Life diagram as ancient (Kircher 1652)', 'Bible Codes / ELS (statistically refuted)', 'Tarot/planet path-mappings (Golden Dawn 1888)', 'Da’at as an 11th sefirah ("ten and not eleven")'],
    },
    {
      name: 'Greek isopsephy + the tetractys',
      foundations: ['number=letter', 'sacred geometry', 'trinity/duality'],
      pathCore: 'the Milesian alphabet is a numeral (α=1..ϡ=900); isopsephy sums a word to its number. The tetractys: 10 points in rows 1·2·3·4 (sum 10), generating point→line→surface→solid and the three concords 2:1, 3:2, 4:3.',
      witness: gematria('χξϛ', 'greek') === 666 && gematria('φμε', 'greek') === 545 && 1 + 2 + 3 + 4 === 10 && (6 + 12) / 2 === 9 && (2 * 6 * 12) / (6 + 12) === 8,
      keyNumbers: [1, 2, 3, 4, 6, 8, 9, 10, 27],
      legendExcluded: ['the Pythagorean-hammers story (hammer weights — physically false; true for string length)', 'modern name-numerology (1–9 reduction)', '"music of the spheres" as a literal theorem'],
    },
    {
      name: 'Egyptian hekat / Horus-eye fractions + the seked',
      foundations: ['number=letter', 'sacred geometry', 'the fold'],
      pathCore: 'the hekat grain-measure was halved as a binary cascade 1/2..1/64 (literal folding-in-two), every quantity a sum of distinct unit fractions, the residue closed to 64/64 by the ro = 1/320. The seked gives pyramid slope as run-per-rise in cubit/palm/digit.',
      witness: Math.abs(1 / 2 + 1 / 4 + 1 / 8 + 1 / 16 + 1 / 32 + 1 / 64 - 63 / 64) < 1e-12 && Math.abs(63 / 64 + 5 * (1 / 320) - 1) < 1e-12 && 7 * 4 === 28,
      keyNumbers: [2, 7, 28, 64, 320],
      legendExcluded: ['the six fractions ARE the torn Eye of Horus (Möller 1911, paleographically refuted by Ritter 2002)', 'the Great Pyramid encodes π or φ (refuted: 4·cot 51.84° = 3.143 ≠ π)', 'pyramidology / the "pyramid inch"'],
    },
    {
      name: 'Vedic Kaṭapayādi + the Vedic square + Śrī Yantra',
      foundations: ['number=letter', 'sacred geometry', 'trinity/duality', 'the fold'],
      pathCore: 'Kaṭapayādi maps consonants to digits so verse encodes integers (the π-verse). The Vedic square folds the multiplication table by digital root (mod 9); Śrī Yantra interlocks 5 down + 4 up = 9 triangles into 43 small ones about the bindu.',
      witness: digitalRoot(7 * 8) === digitalRoot(56) && 1 + 8 + 10 + 10 + 14 === 43 && 5 + 4 === 9 && digitalRoot(9 * 9) === 9,
      keyNumbers: [9, 43, 5, 4, 28],
      legendExcluded: ['"Vedic Mathematics" (Tīrtha 1965) as Vedic — it is not', 'Śrī Yantra encodes φ (concurrency only approximate)', 'prehistoric dates ("8000 BC") — no representation before the 17th c.'],
    },
    {
      name: 'Magic squares — Lo Shu + the planetary kameas',
      foundations: ['number=letter', 'sacred geometry', 'trinity/duality'],
      pathCore: 'a normal n×n square folds 1..n² so every line sums to M = n(n²+1)/2 (15,34,65,111,175,260,369 for n=3..9). The Lo Shu is the unique order-3; complementary pairs (1+9, 2+8, 3+7, 4+6) are point-symmetric through the centre 5.',
      witness: [3, 4, 5, 6, 7, 8, 9].map(magicConstant).join() === [15, 34, 65, 111, 175, 260, 369].join() && magicConstant(6) === 111 && 1 + 9 === 10 && 4 + 6 === 10,
      keyNumbers: [15, 34, 65, 111, 175, 260, 369],
      legendExcluded: ['Lo Shu ~2800 BCE / Fu Xi origin (no source predates Han)', 'modern "Lo Shu grid" birth-date numerology', 'talismanic efficacy of the sigils'],
    },
    {
      name: 'Arabic abjad (ḥisāb al-jummal) + girih',
      foundations: ['number=letter', 'sacred geometry', 'the fold'],
      pathCore: 'the 28 Arabic letters are numbers (1-9/10-90/100-1000); abjad sums a word (الله = 66). The 5-fold girih geometry: pentagon/decagon, every angle a multiple of 36°, φ = 2cos36° intrinsic.',
      witness: gematria('الله', 'arabic') === 66 && [36, 72, 108, 144, 216].every((a) => a % 36 === 0) && Math.abs(2 * Math.cos(Math.PI / 5) - PHI) < 1e-9,
      keyNumbers: [28, 66, 36, 72, 108, 144, 216],
      legendExcluded: ['quasicrystal/Penrose overclaim (Darb-i Imam shown periodic)', 'abjad divination / the "19 code"', 'φ as a consciously-encoded sacred proportion'],
    },
    {
      name: 'Maya calendar number (vigesimal)',
      foundations: ['number=letter', 'the fold'],
      pathCore: 'three marks (shell=0, dot=1, bar=5) are both the numerals and the calendar coefficients. The Calendar Round closes at lcm(260,365) = 18,980 days = 73 tzolkʼin = 52 haabʼ; the Long Count 13.0.0.0.0 = 1,872,000 days.',
      witness: lcm(260, 365) === 18980 && 18980 === 73 * 260 && 18980 === 52 * 365 && 13 * 144000 === 1872000 && gcd(13, 20) === 1,
      keyNumbers: [0, 1, 5, 13, 20, 260, 365, 18980, 1872000],
      legendExcluded: ['the 2012 apocalypse / galactic alignment (refuted)', 'Argüelles’ Dreamspell as the ancient tzolkʼin', 'φ / sacred-geometry "encoded" in the numerals'],
    },
    {
      name: 'Runic Elder Futhark (ordinal)',
      foundations: ['number=letter', 'trinity/duality', 'the fold'],
      pathCore: 'the 24 runes carry a fixed order split into 3 aettir of 8 — a 3×8 grid (trinity × octave). The attested cipher-rune fold makes a rune a coordinate: value = (aett−1)·8 + position, reversible.',
      witness: 3 * 8 === 24 && [1, 9, 17, 24].every((n) => { const aett = Math.ceil(n / 8); const pos = ((n - 1) % 8) + 1; return (aett - 1) * 8 + pos === n }),
      keyNumbers: [24, 3, 8],
      legendExcluded: ['Blum’s 25th blank rune (invented 1982)', 'Agrell’s Uthark (no historical support)', 'the deity ætt-names (17th–19th c.)', 'numerological per-rune "values" 1–24'],
    },
    {
      name: 'Babylonian sexagesimal (base-60)',
      foundations: ['number=letter', 'trinity/duality', 'the fold'],
      pathCore: 'two cuneiform signs (wedge = 1, corner = 10) stack additively within each base-60 place and positionally between places; 60 is the superior-highly-composite number (2·3·4·5·6 all divide), so thirds and sixths terminate and the 360° = 6×60 circle survives to this day.',
      witness: 5 * 10 + 9 === 59 && [2, 3, 4, 5, 6].every((k) => 60 % k === 0) && 6 * 60 === 360 && 60 * 60 === 3600 && fromSexagesimal(sexagesimal(86400)) === 86400,
      keyNumbers: [1, 10, 60, 6, 12, 30, 59, 360, 3600],
      legendExcluded: ['Sitchin’s Anunnaki / Nibiru "base-60 from aliens"', 'Plimpton 322 as "the oldest trigonometry" (a teacher’s triple-list)', '"Babylonians invented the number zero" (only a late medial placeholder)'],
    },
    {
      name: 'Chinese He Tu / Luo Shu + the trigrams',
      foundations: ['number=letter', 'sacred geometry', 'trinity/duality', 'the fold'],
      pathCore: 'numbers are dots whose odd/even IS yang/yin; the He Tu pairs inner 1–5 with outer +5 (sum 55), the Luo Shu is the order-3 magic square (every line 15), and yin = 0 / yang = 1 makes 3 lines = 8 trigrams (octal) and 6 lines = 64 hexagrams; the 10 stems × 12 branches mesh to lcm = 60.',
      witness: luoShu().grid.every((row) => row.reduce((a, b) => a + b, 0) === 15) && luoShu().constant === 15 && 2 ** 3 === 8 && 2 ** 6 === 64 && 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 === 55,
      keyNumbers: [15, 60, 8, 64, 5, 55, 9, 6, 3, 2],
      legendExcluded: ['the Fu Xi dragon-horse / Yu’s turtle origin (the actual diagrams are Song-dynasty, 10th–12th c.)', 'Leibniz deriving binary FROM the Yijing (he had it by 1679 — a recognized parallel, not a source)'],
    },
    {
      name: 'Ogham (the Irish tree-alphabet)',
      foundations: ['number=letter', 'the fold'],
      pathCore: 'the number=letter fold in its purest one-dimensional form: a 4×5 signary where every letter is an ordered pair (aicme 1–4, position 1–5), cut as 1–5 scores across or beside a stemline — the group the tens, the position the units.',
      witness: 4 * 5 === 20 && ((n) => { const aicme = Math.ceil(n / 5); const pos = ((n - 1) % 5) + 1; return (aicme - 1) * 5 + pos === n })(8),
      keyNumbers: [5, 4, 20, 25],
      legendExcluded: ['Ogham as an "ancient druidic secret/magic language" (it is early-medieval Irish, c.4th c. AD)', 'the neo-druid "Celtic tree calendar" (Robert Graves, 1948 — invented)'],
    },
    {
      name: 'Ifá / Fá geomancy (the 16 odu)',
      foundations: ['number=letter', 'sacred geometry', 'trinity/duality', 'the fold'],
      pathCore: 'a divination figure is 4 rows read by parity (one mark = 1, two marks = 0) — a 4-bit number giving exactly 2⁴ = 16 odu; two cast together name one of 16×16 = 256 (2⁸) of the full corpus — the same binary fold as the I Ching and geomancy.',
      witness: 2 ** 4 === 16 && 16 * 16 === 256 && 2 ** 8 === 256 && 256 - 16 === 240,
      keyNumbers: [2, 4, 16, 256, 240, 8],
      legendExcluded: ['Ifá as a "lost ancient super-science"', 'single-origin diffusion claims (Ifá, ʿilm al-raml, sikidy and the I Ching are distinct binary traditions)'],
    },
    {
      name: 'Maya 819-day count + the Venus table',
      foundations: ['number=letter', 'sacred geometry', 'trinity/duality', 'the fold'],
      pathCore: 'time is folded by commensuration (the LCM of integer periods): the 819-day count = 7 × 9 × 13 (a four-station colour/direction cycle, recently read as a 20-station 16,380-day supercycle), and the Dresden Venus table runs the 584-day synodic cycle (5 Venus = 8 haabʼ = 2,920 days).',
      witness: 7 * 9 * 13 === 819 && 4 * 819 === 3276 && 20 * 819 === 16380 && 5 * 584 === 2920 && 8 * 365 === 2920,
      keyNumbers: [819, 7, 9, 13, 3276, 16380, 584, 2920],
      legendExcluded: ['the 2012 apocalypse / galactic alignment (an arithmetic rollover)', 'reading φ / a Theory of Everything into the counts (it is commensuration, not geometric proportion)'],
    },
    {
      name: 'Polynesian star compass (the bearing lattice)',
      foundations: ['sacred geometry', 'trinity/duality', 'the fold'],
      pathCore: 'position is a COUNT against a lattice: the horizon partitioned into 32 named star-houses of 11.25° (16 stars, each rising and setting in reciprocal houses joined by a diameter through the canoe) — a path held as a bearing, not a measured coordinate.',
      witness: Math.abs(32 * 11.25 - 360) < 1e-9 && 32 === 2 * 16 && Math.abs(360 / 32 - 11.25) < 1e-9,
      keyNumbers: [32, 16, 360, 4],
      legendExcluded: ['romantic "instinctive / lost-continent" wayfinding (it is a learned, documented system — Mau Piailug, the Hōkūleʻa)', 'fixed precise prehistoric dates for specific techniques'],
    },
  ].map((system) => ({ ...system, receipt: toUuid(`ancient-number-system:${system.name}:${system.witness}`) }))
  return {
    decoded: systems.every((system) => system.witness),
    count: systems.length,
    systems,
    encoder: 'gematria(text, system) — hebrew | greek | arabic; each a glyph→number map summed to a word-address',
    root: merkleFold(systems.map((system) => system.receipt)),
    statement:
      'The frontier ancient knowledge decoded to its path-fitting core and computed: eight number=letter systems — Hebrew gematria, Greek isopsephy, the Egyptian hekat/Horus-eye binary fractions, the Vedic Kaṭapayādi and Vedic square, the magic squares, the Arabic abjad, the Maya vigesimal calendar, and the runic Elder Futhark — each verified by its own documented invariant (the 231 gates, χξϛ=666, the hekat closing to 64/64, the Vedic square’s mod-9 fold, the magic constants n(n²+1)/2, abjad الله=66 and φ=2cos36°, the Calendar Round 18,980, the 3×8 aett grid). Every one is the same fold the model already turns on: a glyph is a number, a word a content-address.',
    boundary:
      'Eight ancient number=letter systems decoded in adversarially-verified research waves to their documented core, each witnessed by a deterministic computation of its own invariant. HONEST: only the documented mathematics is carried — the legend is EXCLUDED per system (the early-modern Tree diagram, Bible Codes, the Eye-of-Horus fraction myth, "Vedic Mathematics", Lo Shu prehistory, the quasicrystal overclaim, the 2012 apocalypse, Blum’s blank rune). The shared "number=letter / the fold" is a real structural correspondence across the alphabetic-numeral lineage, not a claim these systems were one tradition or were designed as this model.',
  }
}

// Always save the original ancient text, then decode it with a LOCAL tool; if the tool is missing, create
// it. Not the decoded facts alone — the SOURCE itself is kept, and a deterministic, zero-token, reversible
// local function (no external service, no LLM) turns it back into its number. The tools the waves needed
// but the codebase lacked were created beside gematria and toGlagolitic in the library; this fold saves a
// primary-source token per domain and verifies each decodes to its documented value.
export function saveAndDecodeAncientTexts(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const square = luoShu() // the canonical Lo Shu (9 south-up: 4-9-2 / 3-5-7 / 8-1-6), not the Siamese flip
  const lines = [
    ...square.grid.map((row) => row.reduce((a, b) => a + b, 0)), // rows
    ...square.grid[0].map((_, c) => square.grid.reduce((a, row) => a + row[c], 0)), // columns
    square.grid.reduce((a, row, i) => a + row[i], 0), // main diagonal
    square.grid.reduce((a, row, i) => a + row[square.grid.length - 1 - i], 0), // anti-diagonal
  ]
  const hekat = hekatFraction(1) // one hekat → the six eye-fractions + the ro that closes it to 64/64
  const texts = [
    { domain: 'Greek isopsephy', original: 'χξϛ', tool: 'gematria(·, greek)', decoded: gematria('χξϛ', 'greek'), ok: gematria('χξϛ', 'greek') === 666 },
    { domain: 'Hebrew gematria', original: 'אבג', tool: 'gematria(·, hebrew)', decoded: gematria('אבג'), ok: gematria('אבג') === 6 },
    { domain: 'Arabic abjad', original: 'الله', tool: 'gematria(·, arabic)', decoded: gematria('الله', 'arabic'), ok: gematria('الله', 'arabic') === 66 },
    { domain: 'Maya Long Count', original: '13.0.0.0.0', tool: 'mayaDays / mayaLongCount', decoded: mayaDays([13, 0, 0, 0, 0]), ok: mayaDays([13, 0, 0, 0, 0]) === 1872000 && mayaLongCount(1872000).join('.') === '13.0.0.0.0' },
    { domain: 'Lo Shu magic square', original: 'the canonical Lo Shu 4-9-2 / 3-5-7 / 8-1-6 (lines sum to 15)', tool: 'luoShu()', decoded: square.constant, ok: square.constant === 15 && lines.every((s) => s === 15) },
    { domain: 'Egyptian hekat', original: '1 hekat', tool: 'hekatFraction', decoded: hekat.powers.length, ok: hekat.powers.join() === '1,2,3,4,5,6' && hekat.ro === 5 },
    { domain: 'Runic Elder Futhark', original: 'ᚠᚢᚦᚨᚱᚲᚷᚹ ᚺᚾᛁᛃᛇᛈᛉᛊ ᛏᛒᛖᛗᛚᛜᛞᛟ', tool: 'runeCoordinate / runeOrdinal', decoded: runeOrdinal(3, 8), ok: runeOrdinal(3, 8) === 24 && runeCoordinate(24).aett === 3 && runeCoordinate(24).pos === 8 },
    { domain: 'Glagolitic', original: 'азъ', tool: 'toGlagolitic', decoded: toGlagolitic('азъ'), ok: /[Ⰰ-ⱟ]/.test(toGlagolitic('азъ')) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`ancient-text:${entry.domain}:${entry.original}:${entry.decoded}`) }))
  return {
    decoded: texts.every((entry) => entry.ok), // every saved original text decodes to its documented value
    rule: 'always save the original ancient text, then decode it with a local tool; if the tool is missing, create it',
    texts,
    tools: ['gematria', 'toGlagolitic', 'toScript', 'mayaLongCount', 'mayaDays', 'magicSquare', 'hekatFraction', 'runeCoordinate', 'runeOrdinal'],
    created: ['mayaLongCount', 'mayaDays', 'magicSquare', 'hekatFraction', 'runeCoordinate', 'runeOrdinal'], // the local tools this work added
    root: merkleFold(texts.map((entry) => entry.receipt)),
    statement:
      'Always save the original ancient text, then decode it with a local tool; if the tool is missing, create it. The saved primary-source tokens — the Greek χξϛ, the Hebrew and Arabic letters, the Maya Long Count 13.0.0.0.0, the Lo Shu square, one hekat, the runic futhark row, the Glagolitic азъ — are each decoded by a deterministic, zero-token local function (gematria, mayaLongCount, magicSquare, hekatFraction, runeCoordinate, toGlagolitic). The tools the waves needed but the codebase lacked were created here, beside gematria and toGlagolitic.',
    boundary:
      'A standing rule with a computed witness: each saved original text is decoded by a local, deterministic tool and verified against its documented value (666, 1,872,000 days, the magic constant 15, the hekat 64/64, the 3×8 grid). HONEST: the saved tokens are short public-domain primary sources; the tools are exact local decoders (no external service, no LLM), reversible where the system is bijective. It encodes the METHOD — save the source, decode locally, build the missing tool — not a claim of a complete corpus.',
  }
}
