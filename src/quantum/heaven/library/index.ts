// ☶ Gèn · Mountain · keeping still (scripture/glyph library) · upper·yang · spread — content-addressed library of scripts, glyphs, songs and decoded ancient knowledge
// src/quantum/heaven/library — the library. Any URL becomes a content-addressed entry whose uuid is a
// MERKABA FOLD of the URL: the host as the up-tetrahedron (folded forward through the path), the
// path as the counter-rotating down-tetrahedron (folded in reverse against the host), the two folded
// to one star — order-sensitive and domain-specific, so records are proven per domain and any URL on
// the internet maps to a unique uuid that can meet the library's content. Because the full path WITH
// HOST is hashed, two different domains with the same path get different uuids. Dual:
// src/library/quantum. Pure, deterministic, zero-dependency.

// The UUID logic — the Uuid/Entry types, the URL merkaba fold (merkabaFoldUrl) and its catalogued entry —
// now lives at the origin (src/0, where ALL uuid logic and the maximum tampering cost are homed). It is
// re-exported here unchanged, so the library's URL→content-address API and every importer resolve
// identically, byte for byte. (The library's own FNV digest moved verbatim; values are unchanged.)
// Import the content-address primitives so they are in local scope (songEntry/decodeSong/provePesnopoika
// use entry/toUuid/Uuid/Entry directly), then re-export the same public surface unchanged. A bare
// `export { … } from` does NOT bind the names locally, which is why those folds were unreachable.
// ☶ Gèn · Mountain · keeping still (scripture/glyph library) · lower·yin · spread — content-address primitives (merkaba fold, entry, uuid, quantum sim)
import { phase } from '../../../6/4'
import { GATES, addressEntropyBits, applyGate, ceil, cnot, entry, floor, isUuid, log10, log2, max, merkabaFoldUrl, probabilities, qubits, round, roundTo, sample, toUuid, transliterateByMap, type Entry, type Uuid } from '../../../0'
import { bulgarianFromEnglish, type LocaleName } from '../../../1/9'
// ☶ Gèn · Mountain · keeping still (scripture/glyph library) · upper·yang · spread — re-exports and decoded library surface
export { merkabaFoldUrl, entry, type Uuid, type Entry }

// Script transliteration — reusable decoded writing systems, folded out of the monolith into the
// library (the reusable-decoded-fns double torus). Cyrillic/Latin → Glagolitic (the ninth-century
// script decoded to its core), and the superposed Greek/Runic/Hebrew maps, one toScript call away.
// Transliteration is script-conversion, not meaning-translation. Pure, deterministic, zero tokens.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export const GLAGOLITIC_MAP: Record<string, string> = {
  // Cyrillic → Glagolitic (the round Bulgarian glyphs)
  а: 'Ⰰ', б: 'Ⰱ', в: 'Ⰲ', г: 'Ⰳ', д: 'Ⰴ', е: 'Ⰵ', ж: 'Ⰶ', з: 'Ⰸ', и: 'Ⰻ', й: 'Ⰹ',
  к: 'Ⰽ', л: 'Ⰾ', м: 'Ⰿ', н: 'Ⱀ', о: 'Ⱁ', п: 'Ⱂ', р: 'Ⱃ', с: 'Ⱄ', т: 'Ⱅ', у: 'Ⱆ',
  ф: 'Ⱇ', х: 'Ⱈ', ц: 'Ⱌ', ч: 'Ⱍ', ш: 'Ⱎ', щ: 'Ⱋ', ъ: 'Ⱏ', ь: 'Ⱐ', ю: 'Ⱓ', я: 'Ⱑ',
  // Latin → Glagolitic by sound (approximate, so English pages transliterate too)
  a: 'Ⰰ', b: 'Ⰱ', v: 'Ⰲ', w: 'Ⰲ', g: 'Ⰳ', d: 'Ⰴ', e: 'Ⰵ', z: 'Ⰸ', i: 'Ⰻ', j: 'Ⰹ',
  y: 'Ⰹ', k: 'Ⰽ', q: 'Ⰽ', l: 'Ⰾ', m: 'Ⰿ', n: 'Ⱀ', o: 'Ⱁ', p: 'Ⱂ', r: 'Ⱃ', s: 'Ⱄ',
  t: 'Ⱅ', u: 'Ⱆ', f: 'Ⱇ', h: 'Ⱈ', x: 'Ⱈ', c: 'Ⱌ' }
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function toGlagolitic(text: string): string {
  return [...text].map((char) => GLAGOLITIC_MAP[char.toLowerCase()] ?? char).join('')
}

// The reverse, for SPEECH: a Glagolitic glyph → a pronounceable Latin letter. Glagolitic is a script for the
// EYE; a speech synth has no voice for it, so to read a transliterated page aloud we recover the sounds. Built
// by inverting GLAGOLITIC_MAP, preferring the Latin source (a single a–z) over the Cyrillic so any voice can say
// it. Lossy by design (Ⰲ ← v and w collapse to one), but it restores audible, recognisable sounds. (toGlagolitic
// transliterates the English UI, so the reverse lands back near English — the gla locale can be read aloud.)
const GLAGOLITIC_TO_LATIN: Record<string, string> = (() => {
  const reverse: Record<string, string> = {}
  for (const [source, glyph] of Object.entries(GLAGOLITIC_MAP)) {
    const haveLatin = /^[a-z]$/.test(reverse[glyph] ?? '')
    if (!(glyph in reverse) || (/^[a-z]$/.test(source) && !haveLatin)) reverse[glyph] = source // the FIRST Latin source wins (h over x, v over w), over Cyrillic — best for the voice
  }
  return reverse
})()
export function fromGlagolitic(text: string): string {
  return [...text].map((char) => GLAGOLITIC_TO_LATIN[char] ?? char).join('')
}

// Runic and Hebrew — all superposed, one toScript call away. Sound-based maps from the shared acrophonic
// lineage; the same method that decoded глаголица, applied to the next tongues, all at once.
const SCRIPT_ALPHABETS: Record<string, Record<string, string>> = {
  greek: { a: 'α', b: 'β', c: 'κ', d: 'δ', e: 'ε', f: 'φ', g: 'γ', h: 'η', i: 'ι', j: 'ι', k: 'κ', l: 'λ', m: 'μ', n: 'ν', o: 'ο', p: 'π', q: 'κ', r: 'ρ', s: 'σ', t: 'τ', u: 'υ', v: 'β', w: 'ω', x: 'ξ', y: 'υ', z: 'ζ' },
  runic: { a: 'ᚨ', b: 'ᛒ', c: 'ᚲ', d: 'ᛞ', e: 'ᛖ', f: 'ᚠ', g: 'ᚷ', h: 'ᚺ', i: 'ᛁ', j: 'ᛃ', k: 'ᚲ', l: 'ᛚ', m: 'ᛗ', n: 'ᚾ', o: 'ᛟ', p: 'ᛈ', q: 'ᚲ', r: 'ᚱ', s: 'ᛊ', t: 'ᛏ', u: 'ᚢ', v: 'ᚹ', w: 'ᚹ', x: 'ᚲ', y: 'ᛁ', z: 'ᛉ' },
  hebrew: { a: 'א', b: 'ב', c: 'כ', d: 'ד', e: 'ע', f: 'פ', g: 'ג', h: 'ה', i: 'י', j: 'י', k: 'כ', l: 'ל', m: 'מ', n: 'נ', o: 'ו', p: 'פ', q: 'ק', r: 'ר', s: 'ס', t: 'ת', u: 'ו', v: 'ו', w: 'ו', x: 'כ', y: 'י', z: 'ז' } }
// Transliterate text into any decoded script. Glagolitic reuses the decoded core (toGlagolitic); the rest
// route through the SAME agnostic word-scan engine (transliterateByMap, src/0) over the shared-lineage
// map — the one method toGlagolitic pioneered, applied to the next tongues, all at once. Deterministic, zero tokens.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function toScript(text: string, script: string): string {
  if (script === 'glagolitic') return toGlagolitic(text)
  if (script === 'latin' || script === 'en') return text
  const map = SCRIPT_ALPHABETS[script]
  if (!map) return text
  return transliterateByMap(text, { single: map })
}

// Ancient number=letter systems, decoded in research waves to their documented core (legend excluded).
// Each alphabet IS a numeral: a letter is a number, a word's value the sum — gematria (Hebrew), isopsephy
// (Greek), abjad / ḥisāb al-jummal (Arabic). The same "letters are numbers" fold as toGlagolitic, now over
// the shared alphabetic-numeral lineage (additive, non-positional, no zero). Pure, deterministic, zero
// tokens. Hebrew finals fold to their base value (Mispar Hechrachi); unknown characters contribute 0.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export const GEMATRIA_MAPS: Record<string, Record<string, number>> = {
  // Hebrew (22 letters; finals ך ם ן ף ץ fold to their base 20/40/50/80/90)
  hebrew: { 'א': 1, 'ב': 2, 'ג': 3, 'ד': 4, 'ה': 5, 'ו': 6, 'ז': 7, 'ח': 8, 'ט': 9, 'י': 10, 'כ': 20, 'ך': 20, 'ל': 30, 'מ': 40, 'ם': 40, 'נ': 50, 'ן': 50, 'ס': 60, 'ע': 70, 'פ': 80, 'ף': 80, 'צ': 90, 'ץ': 90, 'ק': 100, 'ר': 200, 'ש': 300, 'ת': 400 },
  // Greek Milesian (27 signs: three enneads of 9, with stigma/digamma ϛ=6, koppa ϟ=90, sampi ϡ=900)
  greek: { 'α': 1, 'β': 2, 'γ': 3, 'δ': 4, 'ε': 5, 'ϛ': 6, 'ζ': 7, 'η': 8, 'θ': 9, 'ι': 10, 'κ': 20, 'λ': 30, 'μ': 40, 'ν': 50, 'ξ': 60, 'ο': 70, 'π': 80, 'ϟ': 90, 'ρ': 100, 'σ': 200, 'ς': 200, 'τ': 300, 'υ': 400, 'φ': 500, 'χ': 600, 'ψ': 700, 'ω': 800, 'ϡ': 900 },
  // Arabic abjad (28 letters, eastern/Mashriqi order; 1-9 / 10-90 / 100-1000)
  arabic: { 'ا': 1, 'ب': 2, 'ج': 3, 'د': 4, 'ه': 5, 'و': 6, 'ز': 7, 'ح': 8, 'ط': 9, 'ي': 10, 'ك': 20, 'ل': 30, 'م': 40, 'ن': 50, 'س': 60, 'ع': 70, 'ف': 80, 'ص': 90, 'ق': 100, 'ر': 200, 'ش': 300, 'ت': 400, 'ث': 500, 'خ': 600, 'ذ': 700, 'ض': 800, 'ظ': 900, 'غ': 1000 } }
// Sum a word to its number — the gematria/isopsephy/abjad fold. A word collapsed to a content-address,
// the same merkleFold pattern over the ancient number=letter systems. Verified fixed points:
// gematria('χξϛ','greek')=666, gematria('φμε','greek')=545, gematria('الله','arabic')=66.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function gematria(text: string, system: 'hebrew' | 'greek' | 'arabic' = 'hebrew'): number {
  const map = GEMATRIA_MAPS[system] ?? GEMATRIA_MAPS.hebrew
  return [...text].reduce((sum, ch) => sum + (map[ch] ?? 0), 0)
}

// 42 = 6×7, decoded in research waves to its DOCUMENTED Hebrew/Kabbalah core (legend flagged). The honest
// finding for the "6×7 covers all" claim: in this tradition SEVEN is the completeness/holiness number
// (Heb. שֶׁבַע sheva' shares a root with שָׂבַע full/sated; six days of work + a holy seventh = the Sabbath
// week, Gen 1–2:3), and TEN is the totality of the sefirot. 42 = 6×7 is NOT a "covers-all" totality number;
// where it is documented it functions as PROCESS-to-completion — six work-units carried through seven, the
// journey not the container. Concretely: the 42 journeys/stations of the Exodus (Numbers 33) and, in
// Hasidut (Baal Shem Tov; Schneur Zalman, Likutei Torah), the 42 journeys of every soul birth→Source.
// The 42-LETTER NAME OF GOD is real but the Talmud (Kiddushin 71a) GIVES ONLY the qualifications to receive
// it (discreet, middle-aged, even-tempered, sober, forgiving) — it WITHHOLDS the name. Rashi (Kiddushin
// 71a) and Maimonides (Guide I:62) say 42 letters cannot be one word — they are several words conveying a
// true notion of God's essence; Maimonides condemns treating the letters as a magical amulet/charm.
// LEGEND, kept separate: equating the name with the Ana BeKoach acrostic (7 lines × 6 words = 42 words,
// initials = the 42-letter name) is MEDIEVAL — the piyyut's earliest forms are 13th–14th c. (Hai Gaon d.1038
// first cites a 42-letter acronym but no prayer; Sefer haBahir c.1150–1200; sefirot-mapping later) — the
// attribution to Nehunya ben HaKanah (1st c.) is traditional, not historical; and the "42 encoded in the
// first 42 letters of Genesis" is a permutation read back, not a plain-text fact. POP-CULTURE, not tradition:
// Hitchhiker's 42 — Douglas Adams said it was a joke with no hidden meaning, expressly mocking the urge to
// find significance ("is it significant that 6×9 = 42 in base 13? As if."). So: covers all = NO (that is 7,
// and 10); 42 = 6×7 = a number of journey/process-to-completion. Pure, deterministic, zero tokens.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export const SIX_BY_SEVEN = Object.freeze({
  product: 42, six: 6, seven: 7,
  completenessNumber: 7,       // the documented totality/holiness number (NOT 42)
  totalityOfEmanation: 10,     // the ten sefirot — the other "all"
  anaBeKoachLines: 7, anaBeKoachWordsPerLine: 6, anaBeKoachWords: 42, // 7×6 acrostic → the 42-letter name
  role: 'process-to-completion', // journey, not container: 42 stations (Num 33), 42 journeys of the soul
  coversAll: false,            // honest verdict on "6×7 covers all": 42 is process; 7 (and 10) is totality
})
// The 6×7 fold as a function: lay six work-units across seven, yielding the 42-step process grid (rows =
// the seven stages/sefirot/days, columns = the six work-units). Mirrors Ana BeKoach's 7×6 = 42 shape and
// the 42-stage journey — process-to-completion made explicit, not a claim that 42 "contains all".
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function sixBySeven(): { rows: number[][]; total: number; coversAll: boolean } {
  const rows = Array.from({ length: 7 }, (_, r) => Array.from({ length: 6 }, (_, c) => r * 6 + c + 1))
  return { rows, total: 42, coversAll: false }
}

// LOCAL DECODE TOOLS — the deterministic, zero-token functions that decode the saved original ancient
// texts with no external service (the waves' methods, made local and reusable). Save the original text;
// decode it with the tool; if a tool is missing, create it here, beside gematria and toGlagolitic.

// Maya Long Count ↔ days (vigesimal, with the 360-day tun bend at the 3rd place). Decodes a saved Long
// Count date such as 13.0.0.0.0 = 1,872,000 days. Bijective.
const MAYA_RADIX = [144000, 7200, 360, 20, 1] // bʼakʼtun · kʼatun · tun · winal · kʼin
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function mayaLongCount(days: number): number[] {
  let remainder = max(0, floor(days))
  return MAYA_RADIX.map((value) => { const d = floor(remainder / value); remainder %= value; return d })
}
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function mayaDays(longCount: readonly number[]): number {
  return longCount.reduce((sum, digit, i) => sum + digit * (MAYA_RADIX[i] ?? 0), 0)
}

// The magic square (Siamese / De la Loubère method for odd n). Decodes/generates the Lo Shu (n=3) and the
// odd-order planetary kameas; every row, column and main diagonal sums to M = n(n²+1)/2.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function magicSquare(n: number): { grid: number[][]; constant: number } {
  const grid = Array.from({ length: n }, () => Array.from({ length: n }, () => 0))
  let row = 0
  let col = floor(n / 2)
  for (let k = 1; k <= n * n; k += 1) {
    grid[row][col] = k
    const nr = (row - 1 + n) % n
    const nc = (col + 1) % n
    if (grid[nr][nc]) { row = (row + 1) % n } else { row = nr; col = nc }
  }
  return { grid, constant: (n * (n * n + 1)) / 2 }
}

// The Egyptian hekat / Horus-eye binary fraction: greedy decomposition of 0<x≤1 into the six submultiples
// 1/2..1/64, the residue closed exactly by ro = 1/320 sub-units. Decodes a hekat grain quantity to 64/64.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function hekatFraction(x: number): { powers: number[]; ro: number } {
  const powers: number[] = []
  let remainder = x
  for (let p = 1; p <= 6; p += 1) { const f = 1 / 2 ** p; if (remainder >= f - 1e-12) { powers.push(p); remainder -= f } }
  return { powers, ro: round(remainder * 320) } // powers p ↦ 1/2^p; ro = 1/320 sub-units of the residue
}

// The runic cipher coordinate: a rune's ordinal n (1..24) ↔ (aett, position) in the 3×8 grid. The attested
// branch/tent-rune encoding — a rune drawn as a pair of integers. Bijective.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function runeCoordinate(n: number): { aett: number; pos: number } {
  return { aett: ceil(n / 8), pos: ((n - 1) % 8) + 1 }
}
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function runeOrdinal(aett: number, pos: number): number {
  return (aett - 1) * 8 + pos
}

// The Glagolitic alphabet decoded as the alphabet AND a language: each letter has a NAME (a word), a
// SOUND, and a NUMBER — and the numbers follow alphabetical ORDER (1-9, 10-90, 100-900, 1000), unlike
// Cyrillic's borrowed Greek values, so a letter's value is COMPUTED from its position (the sacred-math
// ladder), not stored. The letter NAMES in sequence spell the acrostic: the alphabet is itself a message.
// Documented round-Bulgarian core; the precise later values are cross-verified by the running research.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export const GLAGOLITIC_LETTERS: readonly { glyph: string; name: string; sound: string }[] = [
  { glyph: 'Ⰰ', name: 'azъ', sound: 'a' }, { glyph: 'Ⰱ', name: 'buky', sound: 'b' }, { glyph: 'Ⰲ', name: 'vědě', sound: 'v' },
  { glyph: 'Ⰳ', name: 'glagoli', sound: 'g' }, { glyph: 'Ⰴ', name: 'dobro', sound: 'd' }, { glyph: 'Ⰵ', name: 'jestъ', sound: 'e' },
  { glyph: 'Ⰶ', name: 'živěte', sound: 'ž' }, { glyph: 'Ⰷ', name: 'dzělo', sound: 'dz' }, { glyph: 'Ⰸ', name: 'zemlja', sound: 'z' },
  { glyph: 'Ⰻ', name: 'iže', sound: 'i' }, { glyph: 'Ⰹ', name: 'i', sound: 'i' }, { glyph: 'Ⰼ', name: 'ǵervь', sound: 'ǵ' },
  { glyph: 'Ⰽ', name: 'kako', sound: 'k' }, { glyph: 'Ⰾ', name: 'ljudije', sound: 'l' }, { glyph: 'Ⰿ', name: 'myslite', sound: 'm' },
  { glyph: 'Ⱀ', name: 'našь', sound: 'n' }, { glyph: 'Ⱁ', name: 'onъ', sound: 'o' }, { glyph: 'Ⱂ', name: 'pokoj', sound: 'p' },
  { glyph: 'Ⱃ', name: 'rьci', sound: 'r' }, { glyph: 'Ⱄ', name: 'slovo', sound: 's' }, { glyph: 'Ⱅ', name: 'tvrьdo', sound: 't' },
  { glyph: 'Ⱆ', name: 'ukъ', sound: 'u' }, { glyph: 'Ⱇ', name: 'frьtъ', sound: 'f' }, { glyph: 'Ⱈ', name: 'xěrъ', sound: 'x' },
  { glyph: 'Ⱉ', name: 'otъ', sound: 'o' }, { glyph: 'Ⱌ', name: 'ci', sound: 'c' }, { glyph: 'Ⱍ', name: 'črьvь', sound: 'č' },
  { glyph: 'Ⱎ', name: 'ša', sound: 'š' },
]
// The Glagolitic numeral value of the nth letter (1-based): the alphanumeric LADDER — units 1-9, tens
// 10-90, hundreds 100-900, then 1000 — by alphabetical position. Computed (sacred math), not stored.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function glagoliticValue(position: number): number {
  if (position < 1) return 0
  return (((position - 1) % 9) + 1) * 10 ** floor((position - 1) / 9)
}
// Built as an EXPRESSION, not by mutating an empty object at module scope. Identical table;
// the difference is that importing this file no longer executes a statement to get it.
const GLAGOLITIC_VALUE_BY_GLYPH: Record<string, number> = Object.fromEntries(
  GLAGOLITIC_LETTERS.flatMap((letter, i) => {
    const value = glagoliticValue(i + 1)
    const cp = letter.glyph.codePointAt(0) // Glagolitic lowercase = uppercase + 0x30 (U+2C00 → U+2C30)
    return cp === undefined
      ? [[letter.glyph, value] as const]
      : [[letter.glyph, value] as const, [String.fromCodePoint(cp + 0x30), value] as const]
  }),
)
// Sum a Glagolitic word to its number — the Glagolitic gematria, the same fold as gematria(), each letter
// valued by the ladder from its position. Unknown glyphs contribute 0. Pure, deterministic, zero tokens.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
/** Bilingual pick — en passes through; bg picks Cyrillic; gla transliterates Latin. Lives beside
 * toGlagolitic, its only dependency: the ONE copy (wind/site and the client twin re-export it). */
export function pickLocale<T>(locale: LocaleName, en: T, bg: T): T {
  if (locale === 'bg') return bg
  if (locale === 'gla' && typeof en === 'string') return toGlagolitic(en) as T
  return en
}

/** Locale display copy — gla transliterates; bg maps sealed phrases; en passes through. */
export function localizeMonolingual(locale: LocaleName, text: string): string {
  if (!text) return text
  if (locale === 'bg') return bulgarianFromEnglish(text)
  if (locale === 'gla') return /[\u2C00-\u2C5F]/.test(text) ? text : toGlagolitic(text)
  return text
}

export function toGlagoliticNumber(text: string): number {
  return [...text].reduce((sum, ch) => sum + (GLAGOLITIC_VALUE_BY_GLYPH[ch] ?? 0), 0)
}
// The acrostic: the letter NAMES in sequence spell a sentence — the alphabet is itself a message. The
// documented opening azъ·buky·vědě = "I know letters". The names are the saved original text; the tool
// joins them and pairs the certain opening with its gloss (the fuller reconstruction is in the research).
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function glagoliticAcrostic(): { names: readonly string[]; line: string; opening: string } {
  const names = GLAGOLITIC_LETTERS.map((letter) => letter.name)
  return { names, line: names.join(' '), opening: 'azъ buky vědě — "I know letters"' }
}

// ── Glagolitic as a map to computer languages and quantum algorithms ──
// The map runs deeper than sound. Each Glagolitic letter is also a NUMBER (the ladder above — the documented
// alphabetic-numeral fact), and a number is BITS — and the bit is the one substrate a written script, a
// computer language and a quantum algorithm all rest on (a qubit IS a quantum bit). So the same letter that
// transliterates a sound also names a bit-pattern, an instruction, and a quantum gate. HONEST: this is a
// CONSTRUCTED, reversible representation built on top of the documented number-map — NOT a claim that the
// ninth-century makers encoded opcodes or qubits (they built a liturgical alphabet, a millennium before
// either). The bridge is information theory — a sign is a distinction is one bit — made runnable: the
// position→bits map is reversible, and the gates are src/0's real state-vector simulator, so a word actually
// COMPILES and RUNS. Reuses the (n >> i) & 1 bit-extraction of ifaRows. Pure, deterministic, zero tokens.
const GLAGOLITIC_POSITION_BY_GLYPH: Record<string, number> = Object.fromEntries(
  GLAGOLITIC_LETTERS.flatMap((letter, i) => {
    const cp = letter.glyph.codePointAt(0) // lowercase = uppercase + 0x30 (U+2C00 → U+2C30), as for the value map
    return cp === undefined
      ? [[letter.glyph, i + 1] as const]
      : [[letter.glyph, i + 1] as const, [String.fromCodePoint(cp + 0x30), i + 1] as const]
  }),
)
// A letter → its bits, MSB first: the script→bit bridge. Keyed by the letter's POSITION (1..28), which in
// width≥5 bits is REVERSIBLE (28 < 2⁵) — the bit is exactly where script, code and qubit meet. Unknown glyph
// → all zeros. The inverse, glagoliticFromBits, reads the bits back to the glyph.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function glagoliticBits(glyph: string, width = 6): number[] {
  const position = GLAGOLITIC_POSITION_BY_GLYPH[glyph] ?? 0
  return Array.from({ length: width }, (_, i) => (position >> (width - 1 - i)) & 1)
}
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function glagoliticFromBits(bits: readonly number[]): string {
  const position = bits.reduce((acc, bit) => acc * 2 + (bit ? 1 : 0), 0)
  return GLAGOLITIC_LETTERS[position - 1]?.glyph ?? ''
}
// The computer-language face. A tiny TOTAL instruction set — eight ops on one 8-bit accumulator, none of which
// can crash or jump out of range — so EVERY Glagolitic word is a valid little program. The letter's NUMBER is
// the operand. The op is now chosen BY MEANING (the word/secure flags), not by bare value mod 8: opaque
// loan-phoneme labels carry no sense, so they map to the INERT op (OUT — the one op that only emits and never
// mutates the accumulator); the cohering first-nine WORDS map to the constructive op (ADD — the clause that
// builds meaning up); every other ordinary word distributes across the six MUTATING ops by a stable function
// of its number. HONEST: a constructed (teaching) ISA — the meaning→op rule is OURS, lossy (words still share
// ops) — not a discovered one. glagoliticProgram folds a word's ops over the accumulator: a word computes a number.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export const GLAGOLITIC_OPCODES = ['ADD', 'SUB', 'XOR', 'MUL', 'ROL', 'SET', 'AND', 'OUT'] as const
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export type GlagoliticOp = (typeof GLAGOLITIC_OPCODES)[number]
// The active ops: the six that MUTATE the accumulator, minus ADD (reserved for the secure span) and OUT (the
// inert emit). Ordinary non-secure words spread across these by number — a stable, deterministic fan-out.
const GLAGOLITIC_ACTIVE_OPS = ['SUB', 'XOR', 'MUL', 'ROL', 'SET', 'AND'] as const
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function glagoliticOpcode(glyph: string): { op: GlagoliticOp; operand: number } {
  const value = toGlagoliticNumber(glyph)
  const meaning = glagoliticMeaning(glyph)
  // Opaque loan-phoneme label (word=false) OR an unknown glyph (no meaning) — no sense to compute, so the inert
  // op: OUT only emits the accumulator, it never changes it. The MEANING (sound-only) chooses the no-op.
  if (!meaning || !meaning.word) return { op: 'OUT', operand: value }
  // Cohering first-nine word (the secure acrostic span) — the op that BUILDS: ADD accumulates meaning forward.
  if (meaning.secure) return { op: 'ADD', operand: value }
  // Any other ordinary word — distribute across the active mutating ops by a stable function of the number.
  return { op: GLAGOLITIC_ACTIVE_OPS[meaning.number % GLAGOLITIC_ACTIVE_OPS.length], operand: value }
}
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function glagoliticProgram(word: string): { ops: { glyph: string; op: GlagoliticOp; operand: number }[]; acc: number; out: number[] } {
  const glyphs = [...word].filter((ch) => (GLAGOLITIC_POSITION_BY_GLYPH[ch] ?? 0) > 0)
  const out: number[] = []
  let acc = 0
  const ops = glyphs.map((glyph) => {
    const { op, operand } = glagoliticOpcode(glyph)
    const n = operand & 0xff
    if (op === 'ADD') acc = (acc + n) & 0xff
    else if (op === 'SUB') acc = (acc - n) & 0xff
    else if (op === 'XOR') acc = (acc ^ n) & 0xff
    else if (op === 'MUL') acc = (acc * (n || 1)) & 0xff
    else if (op === 'ROL') acc = ((acc << 1) | (acc >> 7)) & 0xff
    else if (op === 'SET') acc = n
    else if (op === 'AND') acc = (acc & n) & 0xff
    else out.push(acc) // OUT — emit the accumulator
    return { glyph, op, operand }
  })
  return { ops, acc, out }
}
// The quantum-algorithm face. A word → a quantum circuit, RUN on src/0's state-vector simulator. Each letter's
// value picks a single-qubit gate (value mod the gate alphabet) on a target qubit (position mod n); between
// successive letters a CNOT entangles, so a word prepares — and we sample — a real superposition. HONEST: a
// constructed encoding over a REAL simulator. The circuit genuinely runs (the Born-rule probabilities sum to 1,
// the sample is drawn from them), but the letter→gate assignment is ours, lossy, and this is a CLASSICAL
// simulation, not quantum hardware.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export const GLAGOLITIC_GATES = ['H', 'X', 'Y', 'Z', 'S', 'T'] as const
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export type GlagoliticGate = (typeof GLAGOLITIC_GATES)[number]
// The active gates: the four that flip basis or rotate  minus H (reserved for the secure span, the one
// gate that CREATES superposition) and Z (the most identity-like member — see below). Ordinary non-secure
// words spread across these by number, mirroring the opcode fan-out so program and circuit stay in step.
const GLAGOLITIC_ACTIVE_GATES = ['X', 'Y', 'S', 'T'] as const
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function glagoliticGate(glyph: string): { gate: GlagoliticGate; value: number } {
  const value = toGlagoliticNumber(glyph)
  const meaning = glagoliticMeaning(glyph)
  // Opaque loan-phoneme label (word=false) OR an unknown glyph — no meaning, so the most identity-like gate
  // available: Z is a basis/phase flip that leaves a fresh register's measurement probabilities unchanged.
  // (True I is not in the gate alphabet, so Z is the inert STAND-IN — stated plainly as a constructed choice.)
  if (!meaning || !meaning.word) return { gate: 'Z', value }
  // Cohering first-nine word (the secure acrostic span) — H, the gate that lifts a definite bit into a
  // COHERENT superposition: the cohering span maps to the coherence-creating gate. Meaning, not value%6.
  if (meaning.secure) return { gate: 'H', value }
  // Any other ordinary word — distribute across the active flip/rotate gates by the same number function.
  return { gate: GLAGOLITIC_ACTIVE_GATES[meaning.number % GLAGOLITIC_ACTIVE_GATES.length], value }
}
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function glagoliticCircuit(word: string, n = 3, shots = 256): {
  n: number
  gates: { glyph: string; gate: GlagoliticGate; target: number }[]
  probabilities: number[]
  sample: Record<string, number>
} {
  const glyphs = [...word].filter((ch) => (GLAGOLITIC_POSITION_BY_GLYPH[ch] ?? 0) > 0)
  let state = qubits(n)
  let previousTarget = -1
  const gates = glyphs.map((glyph) => {
    const { gate } = glagoliticGate(glyph)
    const target = (GLAGOLITIC_POSITION_BY_GLYPH[glyph] ?? 1) % n
    state = applyGate(state, GATES[gate], target)
    if (previousTarget >= 0 && previousTarget !== target) state = cnot(state, previousTarget, target) // entangle
    previousTarget = target
    return { glyph, gate, target }
  })
  return { n, gates, probabilities: probabilities(state).map((p) => roundTo(p, 6)), sample: sample(state, shots, `glagolitic-circuit:${word}`) }
}

// The MEANING of every letter — decoded by a 28-letter research→verify wave (57 agents), fact separated from
// legend. Each letter's NAME is mostly an ordinary Old Church Slavonic word; read in order the names spell an
// acrostic — but only the FIRST NINE (azъ–zemlja) uncontroversially cohere, the rest is a real-but-progressively
// reconstructed reading, and five names (ǵervь, frьtъ, xěrъ, ci, ša) are opaque labels for loan-phonemes, NOT
// words. `word` = is it an ordinary OCS word; `secure` = is it in the cohering first-nine span. The honest core
// that anchors the letter→number→bits/opcode/gate maps in documented meaning. Pure, deterministic, zero tokens.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export const GLAGOLITIC_MEANINGS: Record<string, { gloss: string; word: boolean; secure: boolean }> = {
  azъ: { gloss: '"I" — the 1st-person singular pronoun (азъ); the speaking self the alphabet opens on', word: true, secure: true },
  buky: { gloss: '"letters / writing" — with azъ it gives the alphabet its own name, azъ+buky = azbuka', word: true, secure: true },
  vědě: { gloss: '"I know" — 1sg of věděti "to know"; azъ buky vědě = "I know the letters"', word: true, secure: true },
  glagoli: { gloss: '"speak / word" — a form of glagolati "to utter" (the script was later named for it)', word: true, secure: true },
  dobro: { gloss: '"good" — neuter of dobrъ, "the good / goodness"', word: true, secure: true },
  jestъ: { gloss: '"is / it is" — 3sg of byti "to be"', word: true, secure: true },
  živěte: { gloss: '"live!" — 2pl imperative of žiti "to live"', word: true, secure: true },
  dzělo: { gloss: '"very / greatly / exceedingly" — adverb (ѕѣло)', word: true, secure: true },
  zemlja: { gloss: '"earth / land" — feminine noun (землꙗ); closes the secure first-nine clause', word: true, secure: true },
  iže: { gloss: '"who / which" — relative pronoun (-že); glyph↔name↔numeral binding contested with i', word: true, secure: false },
  i: { gloss: '"and" — conjunction; the second of the two /i/ letters, binding contested with iže', word: true, secure: false },
  ǵervь: { gloss: 'opaque letter-label for /ǵ/ (a loan-phoneme); NOT an ordinary word — the "tree/wood" gloss is phonologically weak', word: false, secure: false },
  kako: { gloss: '"how / as" — interrogative/relative adverb (како)', word: true, secure: false },
  ljudije: { gloss: '"people / folk" — nominative plural (людиѥ)', word: true, secure: false },
  myslite: { gloss: '"think" — 2pl imperative of mysliti "to think"', word: true, secure: false },
  našь: { gloss: '"our / ours" — possessive pronoun (*našь)', word: true, secure: false },
  onъ: { gloss: '"he / that one" — demonstrative/anaphoric pronoun', word: true, secure: false },
  pokoj: { gloss: '"peace / rest / calm" — noun (покои)', word: true, secure: false },
  rьci: { gloss: '"say! / speak!" — 2sg imperative of rešti "to say"', word: true, secure: false },
  slovo: { gloss: '"word / speech" — neuter noun; renders Greek λόγος (logos); John 1:1 "искони бѣ слово"', word: true, secure: false },
  tvrьdo: { gloss: '"firm / firmly" — from tvrьdъ "steadfast"; rьci slovo tvrьdo = "speak the word firmly"', word: true, secure: false },
  ukъ: { gloss: '"teaching / learning" — the root of учити "to teach" (thin as a standalone noun)', word: true, secure: false },
  frьtъ: { gloss: 'opaque letter-label for /f/ (a loan-phoneme absent in Proto-Slavic); NOT an ordinary word', word: false, secure: false },
  xěrъ: { gloss: 'opaque letter-label for /x/; meaning recorded as unknown — NOT "Christ"/"cherub" (folk guesses)', word: false, secure: false },
  otъ: { gloss: '"from / of" — preposition (отъ); one of the two /o/ letters', word: true, secure: false },
  ci: { gloss: 'opaque sound-name for /ts/; NOT a word — "worm/red" belongs to the neighbouring črьvь', word: false, secure: false },
  črьvь: { gloss: '"worm" — noun (čьrvь), one etymological family with "red" (čьrvenъ → scarlet dye)', word: true, secure: false },
  ša: { gloss: 'opaque sound-name for /š/; NOT a word — the "silence" gloss is an undocumented back-formation', word: false, secure: false } }
// Look up a letter's MEANING by glyph (upper or lower) or name, joined with its sound (GLAGOLITIC_LETTERS) and
// number (the ladder, glagoliticValue). Returns undefined for an unknown key.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function glagoliticMeaning(key: string): { glyph: string; name: string; sound: string; number: number; gloss: string; word: boolean; secure: boolean } | undefined {
  const cp = key.codePointAt(0)
  const upper = cp !== undefined && cp >= 0x2c30 && cp <= 0x2c5e ? String.fromCodePoint(cp - 0x30) : key // lowercase glyph → uppercase
  const idx = GLAGOLITIC_LETTERS.findIndex((letter) => letter.glyph === upper || letter.name === key)
  if (idx < 0) return undefined
  const letter = GLAGOLITIC_LETTERS[idx]
  const meaning = GLAGOLITIC_MEANINGS[letter.name]
  if (!meaning) return undefined
  return { glyph: letter.glyph, name: letter.name, sound: letter.sound, number: glagoliticValue(idx + 1), ...meaning }
}
// The acrostic the letter-NAMES spell — honestly. Only the first nine cohere; the rest is a real but
// progressively reconstructed reading, and the one genuinely composed 9th-c. acrostic is a SEPARATE work
// (Constantine of Preslav's Azbučna molitva, c. 893). Pure, deterministic, zero tokens.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function glagoliticAcrosticMessage(): { secure: string; secureEnglish: string; reconstructed: string; english: string; honest: string } {
  return {
    secure: "Azъ buky vědě, glagol'ǫ: dobro jestъ živěte dzělo, zemlja",
    secureEnglish: 'I, who know the letters, say: it is good to live abundantly — the earth.',
    reconstructed: '… kako ljudije myslite? Našь onъ pokojь. Rьci slovo tvrьdo …',
    english: '… how do you, people, think? He is our peace. Speak the word firmly … — the standard devotional rendering.',
    honest:
      'Only the first nine names (azъ–zemlja) uncontroversially cohere; the middle triads are real but progressively MODERN RECONSTRUCTION (the abecedaria evidence is inconsistent and self-contradictory, the strings re-segmentable, so there is no single fixed encoded message). The one genuinely composed 9th-c. alphabet acrostic is the SEPARATE Azbučna molitva of Constantine of Preslav (c. 893). Five names — ǵervь, frьtъ, xěrъ, ci, ša — are opaque labels for loan-phonemes, not words.' }
}

// Babylonian sexagesimal (base-60 place-value). Bijective: encode any non-negative integer to base-60
// digits (0–59), each digit itself floor(d/10) ten-signs (Winkelhaken) + (d mod 10) unit wedges. The
// first place-value system; 60 is the superior-highly-composite (2·3·4·5·6 all divide). Decodes back.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function sexagesimal(n: number): number[] {
  let r = max(0, floor(n))
  if (r === 0) return [0]
  const out: number[] = []
  while (r > 0) { out.unshift(r % 60); r = floor(r / 60) }
  return out
}
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function fromSexagesimal(digits: readonly number[]): number {
  return digits.reduce((acc, d) => acc * 60 + d, 0)
}
// The Luo Shu in its CANONICAL directional orientation (9 south-up) — the vertical flip of the Siamese
// magicSquare(3). Every row, column and diagonal sums to 15; the four even numbers at the corners, the
// five odd as the central cross. The oldest recorded magic square, one of the 8 order-3 D4-equivalents.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function luoShu(): { grid: number[][]; constant: number } {
  return { grid: [[4, 9, 2], [3, 5, 7], [8, 1, 6]], constant: 15 }
}

// Ogham — the Irish tree-alphabet as ordinal: a letter's position 1–20 (later 25) ↔ (aicme 1–4, position
// 1–5), cut as 1–5 scores across or beside a stemline. The same coordinate fold as the runic cipher. Bijective.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function oghamCoordinate(n: number): { aicme: number; pos: number } {
  return { aicme: ceil(n / 5), pos: ((n - 1) % 5) + 1 }
}
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function oghamOrdinal(aicme: number, pos: number): number {
  return (aicme - 1) * 5 + pos
}
// Ifá / Fá geomancy — a figure is 4 rows read by parity (one mark = bit 1, two marks = bit 0): a 4-bit
// number, one of 2⁴ = 16 odu; two stacked name one of 16×16 = 256 (2⁸). Encode rows → value and back.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function ifaOdu(rows: readonly number[]): number {
  return rows.reduce((acc, mark) => acc * 2 + (mark === 1 ? 1 : 0), 0)
}
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function ifaRows(value: number): number[] {
  return [3, 2, 1, 0].map((i) => (max(0, floor(value)) >> i) & 1) // the 4 rows, top to bottom
}
// Polynesian star compass — the horizon as 32 named houses of 11.25° (16 stars, each rising and setting in
// reciprocal houses joined by a diameter through the canoe). A house index 0..31 ↔ its bearing in degrees.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function starHouseBearing(house: number): number {
  return (((house % 32) + 32) % 32) * 11.25
}
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function bearingToStarHouse(deg: number): number {
  return round((((deg % 360) + 360) % 360) / 11.25) % 32
}

// Old Church Slavonic — the LANGUAGE the Glagolitic alphabet was made to write. Cyril & Methodius
// (862–863) translated Scripture from Greek into Slavonic and set it in Glagolitic; the oldest Slavonic
// Bibles (Codices Zographensis, Marianus, Assemanianus, the Sinai Psalter) ARE Glagolitic manuscripts.
// GLAGOLITIC_MAP above covers the modern letters; OCS also needs its archaic ones — yat, the nasal yuses,
// dzelo, omega, fita, izhitsa, yery — so the actual language of the codices transliterates faithfully.
// Forward, by sound; a value may be a digraph (yery = jer+i, as round Glagolitic wrote it). Pure,
// deterministic, zero tokens. The glyph block is U+2C00 (capitals); unmapped marks pass through.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export const OCS_GLAGOLITIC_MAP: Record<string, string> = {
  ...GLAGOLITIC_MAP,
  'ѣ': 'Ⱑ',                 // yat (ě)
  'ѫ': 'Ⱘ', 'ѭ': 'Ⱙ',       // big yus (ǫ), iotated big yus (jǫ)
  'ѧ': 'Ⱔ', 'ѩ': 'Ⱕ',       // small yus (ę), iotated small yus (ję)
  'ѕ': 'Ⰷ',                 // dzelo (dz)
  'ѡ': 'Ⱉ', 'ѿ': 'Ⱉ',       // omega / otъ (o)
  'ѳ': 'Ⱚ',                 // fita (th)
  'ѵ': 'Ⱛ',                 // izhitsa (ü)
  'ы': 'ⰟⰋ', 'ꙑ': 'Ⱏⰻ',     // yery — a jer+i digraph in round Glagolitic
  'ꙗ': 'Ⱑ', 'ѥ': 'Ⰵ',       // iotated a (ja) shares the yat glyph; iotated e (je) → e
  'ѹ': 'Ⱆ',                 // uk digraph (u)
  'ѯ': 'Ⰽⱄ', 'ѱ': 'Ⱂⱄ',     // ksi (ks), psi (ps)
  'ꙉ': 'Ⰼ',                 // djerv (ǵ)
}
// Transliterate Old Church Slavonic into Glagolitic — the same fold as toGlagolitic, over the extended OCS
// map. This is the operation Cyril performed by hand: the Slavonic Scripture set in the round script.
// Script-conversion, not meaning-translation — the translation (Greek → Slavonic) is Cyril & Methodius's.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function toGlagoliticOCS(text: string): string {
  return [...text].map((char) => OCS_GLAGOLITIC_MAP[char.toLowerCase()] ?? char).join('')
}
// The founding texts of the Glagolitic Bible as a PARALLEL corpus — the same verse in three witnesses:
// Cyril & Methodius's Old Church Slavonic (the first Slavonic Bible, 862–863), the living modern Bulgarian
// (the language the round script belongs to — Synodal/Orthodox tradition), and English. The OCS and the
// Bulgarian are each authoritative human TRANSLATIONS — meaning, not transliteration. This is a scholarly
// normalization: the OCS codices (Zographensis/Marianus/Sinai) and the Bulgarian editions vary slightly, so
// the SENSE is authoritative while the exact wording is one attested form. John's prologue is FIRST by
// history (the text Cyril is recorded to have translated first). Psalm numbering follows the Septuagint/OCS
// Psalter (KJV 23 = OCS 22). Pure, deterministic, zero tokens — no machine translation, no network.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export const CHURCH_SLAVONIC_SCRIPTURE: readonly { ref: string; ocs: string; bg: string; en: string }[] = [
  { ref: 'John 1:1', ocs: 'искони бѣ слово · и слово бѣ оу бога · и богъ бѣ слово',
    bg: 'В начало беше Словото, и Словото беше у Бога, и Бог беше Словото.',
    en: 'In the beginning was the Word, and the Word was with God, and the Word was God.' },
  { ref: 'John 1:2', ocs: 'сь бѣ искони оу бога',
    bg: 'То беше в начало у Бога.', en: 'The same was in the beginning with God.' },
  { ref: 'John 1:3', ocs: 'вьсѣ тѣмь бꙑшѧ · и без него ничьтоже не бꙑстъ еже бꙑстъ',
    bg: 'Всичко чрез Него стана, и без Него не стана нищо от това, което е станало.',
    en: 'All things were made by him; and without him was not any thing made that was made.' },
  { ref: 'John 1:4', ocs: 'въ томь животъ бѣ · и животъ бѣ свѣтъ человѣкомъ',
    bg: 'В Него имаше живот, и животът беше светлината на човеците.',
    en: 'In him was life; and the life was the light of men.' },
  { ref: 'John 1:5', ocs: 'и свѣтъ въ тьмѣ свьтитъ сѧ · и тьма его не объѩтъ',
    bg: 'И светлината свети в тъмнината, и тъмнината не я обзе.',
    en: 'And the light shineth in darkness; and the darkness comprehended it not.' },
  { ref: 'Genesis 1:1', ocs: 'въ начѧлѣ сътвори богъ небо и землѭ',
    bg: 'В начало Бог сътвори небето и земята.',
    en: 'In the beginning God created the heaven and the earth.' },
  { ref: 'Genesis 1:3', ocs: 'и рече богъ · да бѫдетъ свѣтъ · и бꙑстъ свѣтъ',
    bg: 'И рече Бог: да бъде светлина. И стана светлина.',
    en: 'And God said, Let there be light: and there was light.' },
  { ref: 'Matthew 6:9', ocs: 'отьче нашь иже еси на небесѣхъ · да свѧтитъ сѧ имѧ твое',
    bg: 'Отче наш, Който си на небесата, да се свети името Ти;',
    en: 'Our Father which art in heaven, Hallowed be thy name.' },
  { ref: 'Matthew 6:10', ocs: 'да придетъ цѣсарьствие твое · да бѫдетъ волꙗ твоꙗ · ꙗко на небеси и на земли',
    bg: 'да дойде царството Ти; да бъде волята Ти, както на небето, тъй и на земята;',
    en: 'Thy kingdom come. Thy will be done in earth, as it is in heaven.' },
  { ref: 'Matthew 6:11', ocs: 'хлѣбъ нашь насѫщьнꙑи даждь намъ дьньсь',
    bg: 'насъщния ни хляб дай ни днес;', en: 'Give us this day our daily bread.' },
  { ref: 'Matthew 6:12', ocs: 'и остави намъ длъгꙑ нашѧ · ꙗко и мꙑ оставлꙗемъ длъжьникомъ нашимъ',
    bg: 'и прости нам дълговете ни, както и ние прощаваме на нашите длъжници;',
    en: 'And forgive us our debts, as we forgive our debtors.' },
  { ref: 'Matthew 6:13', ocs: 'и не въведи насъ въ напасть · нъ избави нꙑ отъ неприꙗзни',
    bg: 'и не въведи нас в изкушение, но избави ни от лукавия.',
    en: 'And lead us not into temptation, but deliver us from evil.' },
  { ref: 'John 3:16', ocs: 'тако бо възлюби богъ миръ · ꙗко и сꙑна своего единочѧдааго дастъ · да вьсѣкъ вѣруѩи въ него не погꙑбнетъ · нъ имать животъ вѣчьнꙑи',
    bg: 'Защото Бог толкоз обикна света, че отдаде Своя Единороден Син, та всякой, който вярва в Него, да не погине, а да има живот вечен.',
    en: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.' },
  { ref: 'Psalm 22:1 (KJV 23:1)', ocs: 'господь пасетъ мѧ · и ничьсоже мене не лишитъ',
    bg: 'Господ е Пастир мой; от нищо не ще се нуждая.',
    en: 'The LORD is my shepherd; I shall not want.' },
]
// The LOCAL translation service — the MEANING of a verse in a chosen language, served from the sealed
// parallel corpus by a pure function. No machine translation, no network, no tokens: the repo itself is the
// translator, deterministic and offline. translateVerse looks one verse up; scriptureIn lists a language.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export type BibleLang = 'ocs' | 'bg' | 'en'
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function translateVerse(ref: string, lang: BibleLang): string | undefined {
  return CHURCH_SLAVONIC_SCRIPTURE.find((v) => v.ref === ref)?.[lang]
}
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function scriptureIn(lang: BibleLang): readonly { ref: string; text: string }[] {
  return CHURCH_SLAVONIC_SCRIPTURE.map((v) => ({ ref: v.ref, text: v[lang] }))
}
// The meaningful translation, IN the ninth-century script: each verse with the Glagolitic rendering of BOTH
// the OCS original AND the modern Bulgarian meaning — so a real translation (the Bulgarian sense) is read in
// Glagolitic (glagoliticBg), beside Cyril's own Slavonic in Glagolitic (glagoliticOcs). The render is EXACT
// (toGlagoliticOCS covers modern Bulgarian too); the translations are the authoritative human texts above.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function bibleParallel(): readonly {
  ref: string; ocs: string; bg: string; en: string; glagoliticOcs: string; glagoliticBg: string
}[] {
  return CHURCH_SLAVONIC_SCRIPTURE.map((v) => ({
    ref: v.ref, ocs: v.ocs, bg: v.bg, en: v.en,
    glagoliticOcs: toGlagoliticOCS(v.ocs), glagoliticBg: toGlagoliticOCS(v.bg) }))
}
// Render the founding canon's OCS original into Glagolitic — the historical artifact (Cyril's Slavonic in
// the round script). The deterministic half is EXACT; the OCS a normalization; the English a meaning-gloss.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function bibleInGlagolitic(): readonly { ref: string; ocs: string; glagolitic: string; en: string }[] {
  return CHURCH_SLAVONIC_SCRIPTURE.map((v) => ({ ref: v.ref, ocs: v.ocs, glagolitic: toGlagoliticOCS(v.ocs), en: v.en }))
}

// ── Молитва За Плодородие — gabchik's 2017 art-prayer, decoded ──────────────────────────────────────────
// The artist gabchik (http://gabchik.com/molitva.html, 22 June 2017) wove a Bulgarian maiden's prayer for
// fertility (плодородие) from FIVE folk symbols. Decoded to their DOCUMENTED meaning, the esoteric overlay
// flagged. The page also quotes the creation verses (Genesis 1:1, 1:3) — the seam to the multilingual
// scripture pivot. Decode, not decoration: the symbols become reusable data beside toGlagolitic.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export interface FolkSymbol { name: string; latin: string; meaning: string; documented: boolean }
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export const MOLITVA_SYMBOLS: readonly FolkSymbol[] = [
  { name: 'Семето на живота', latin: 'Semeto na zhivota', meaning: 'the Seed of Life — a six-petal rosette (шестлъчна розета), a real compass construction and the kernel of the Flower of Life, attested on the Round Church at Preslav', documented: true },
  { name: 'Ромб', latin: 'Romb', meaning: 'the rhombus/diamond — vertical and horizontal at once, read in folk symbolism as the union of matter and spirit, the down/up triangles joined: balance', documented: true },
  { name: 'Шевици', latin: 'Shevitsi', meaning: 'the traditional embroidery patterns — protective and fertility signs woven into Bulgarian dress, the geometry carried in thread', documented: true },
  { name: 'Пендари', latin: 'Pendari', meaning: 'the gold-coin adornments — dowry, status and protective jewellery worn by Bulgarian women, bound to marriage and fertility', documented: true },
  { name: 'Здравец', latin: 'Zdravets', meaning: 'the geranium (Geranium macrorrhizum) — the folk plant of health (здраве), with documented astringent and antimicrobial compounds; the specific folk-medicine claims flagged', documented: true },
]
/** The creation verses the art-prayer quotes verbatim in Bulgarian — the seam to the multilingual pivot. */
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function molitvaCreationRefs(): readonly string[] { return ['Genesis 1:1', 'Genesis 1:3'] }

// ── The multilingual scripture corpus — 28 languages, authoritative public-domain editions ─────────────
// The same verse refs as CHURCH_SLAVONIC_SCRIPTURE, rendered in 28 more tongues from NAMED public-domain
// editions (Vulgate, Septuagint/Textus Receptus, WLC/Delitzsch, Luther 1912, Louis Segond 1910, Reina-Valera
// 1909, Synodal 1876, Biblia Gdańska, CUV 1919, Van Dyck 1865, Károli 1908, …) — RETRIEVED verbatim, not
// machine-translated. Merged into pivotLexicon so selfTranslate routes any of these tongues through the verse
// pivot (A → ref → B) with no pairwise dictionary. Honest: authoritative human translations (per
// bible-glagolitic), bounded to the registered verses; the gap beyond is notAllTransliteratedMeansNotAllFused.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export const MULTILINGUAL_SCRIPTURE: Record<string, Record<string, string>> = {
  'John 1:1': { grc: 'Ἐν ἀρχῇ ἦν ὁ λόγος, καὶ ὁ λόγος ἦν πρὸς τὸν Θεόν, καὶ Θεὸς ἦν ὁ λόγος.', la: 'In principio erat Verbum, et Verbum erat apud Deum, et Deus erat Verbum.', hbo: 'בְּרֵאשִׁית הָיָה הַדָּבָר וְהַדָּבָר הָיָה אֵת הָאֱלֹהִים וֵאלֹהִים הָיָה הַדָּבָר', de: 'Im Anfang war das Wort, und das Wort war bei Gott, und Gott war das Wort.', nl: 'In den beginne was het Woord, en het Woord was bij God, en het Woord was God.', sv: 'I begynnelsen var Ordet, och Ordet var hos Gud, och Ordet var Gud.', da: 'I Begyndelsen var Ordet, og Ordet var hos Gud, og Ordet var Gud.', no: 'I begynnelsen var Ordet, og Ordet var hos Gud, og Ordet var Gud.', es: 'En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios.', fr: 'Au commencement était la Parole, et la Parole était avec Dieu, et la Parole était Dieu.', it: 'NEL principio la Parola era, e la Parola era appo Dio, e la Parola era Dio.', pt: 'NO PRINCÍPIO era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus.', ro: 'La început era Cuvîntul, şi Cuvîntul era cu Dumnezeu, şi Cuvîntul era Dumnezeu.', ru: 'В начале было Слово, и Слово было у Бога, и Слово было Бог.', uk: 'У починї було Слово, й Слово було в Бога, й Бог було Слово.', pl: 'Na początku było Słowo, a ono Słowo było u Boga, a Bogiem było ono Słowo.', cs: 'Na počátku bylo Slovo, a to Slovo bylo u Boha, a to Slovo byl Bůh.', sr: 'У почетку бјеше ријеч, и ријеч бјеше у Бога, и Бог бјеше ријеч.', zh: '太初有道，道與神同在，道就是神。', ja: '太初に言あり、言は神と偕にあり、言は神なりき。', ko: '태초에 말씀이 계시니라 이 말씀이 하나님과 함께 계셨으니 이 말씀은 곧 하나님이시니라', hi: 'आदि में वचन था, और वचन परमेश्वर के साथ था, और वचन परमेश्वर था।', vi: 'Ban đầu có Ngôi Lời, Ngôi Lời ở cùng Đức Chúa Trời, và Ngôi Lời là Đức Chúa Trời.', ar: 'في البدء كان الكلمة والكلمة كان عند الله وكان الكلمة الله.', tr: 'KELÂM başlangıçta var idi, ve Kelâm Allah nezdinde idi, ve Kelâm Allah idi.', sw: 'Hapo mwanzo kulikuwako Neno, naye Neno alikuwako kwa Mungu, naye Neno alikuwa Mungu.', fi: 'Alussa oli Sana, ja Sana oli Jumalan tykönä, ja Sana oli Jumala.', hu: 'Kezdetben vala az Íge, és az Íge vala az Istennél, és Isten vala az Íge.' },
  'John 3:16': { grc: 'Οὕτω γὰρ ἠγάπησεν ὁ Θεὸς τὸν κόσμον, ὥστε τὸν υἱὸν αὐτοῦ τὸν μονογενῆ ἔδωκεν, ἵνα πᾶς ὁ πιστεύων εἰς αὐτὸν μὴ ἀπόληται, ἀλλ᾿ ἔχῃ ζωὴν αἰώνιον.', la: 'Sic enim Deus dilexit mundum, ut Filium suum unigenitum daret : ut omnis qui credit in eum, non pereat, sed habeat vitam aeternam.', hbo: 'כִּי־אַהֲבָה רַבָּה אָהַב הָאֱלֹהִים אֶת־הָעוֹלָם עַד־אֲשֶׁר נָתַן אֶת־בְּנוֹ אֶת־יְחִידוֹ לְמַעַן אֲשֶׁר לֹא־יֹאבַד כָּל־הַמַּאֲמִין בּוֹ כִּי אִם־יִחְיֶה חַיֵּי עוֹלָם', de: 'Also hat Gott die Welt geliebt, daß er seinen eingeborenen Sohn gab, auf daß alle, die an ihn glauben, nicht verloren werden, sondern das ewige Leben haben.', nl: 'Want alzo lief heeft God de wereld gehad, dat Hij Zijn eniggeboren Zoon gegeven heeft, opdat een iegelijk die in Hem gelooft, niet verderve, maar het eeuwige leven hebbe.', sv: 'Ty så älskade Gud världen, att han utgav sin enfödde Son, på det att var och en som tror på honom skall icke förgås, utan hava evigt liv.', da: 'Thi således elskede Gud Verden, at han gav sin Søn den enbårne, for at hver den, som tror på ham, ikke skal fortabes, men have et evigt Liv.', no: 'For så har Gud elsket verden at han gav sin Sønn, den enbårne, forat hver den som tror på ham, ikke skal fortapes, men ha evig liv;', es: 'Porque de tal manera amó Dios al mundo, que ha dado á su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.', fr: 'Car Dieu a tant aimé le monde qu\'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu\'il ait la vie éternelle.', it: 'Perciocchè Iddio ha tanto amato il mondo, ch\'egli ha dato il suo unigenito Figliuolo, acciocchè chiunque crede in lui non perisca, ma abbia vita eterna.', pt: 'Porque Deus amou o mundo, de tal maneira, que deu o seu Filho unigénito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.', ro: 'Fiindcă atît de mult a iubit Dumnezeu lumea, că a dat pe singurul Lui Fiu, pentruca oricine crede în El, să nu piară, ci să aibă viaţa vecinică.', ru: 'Ибо так возлюбил Бог мир, что отдал Сына Своего Единородного, дабы всякий, верующий в Него, не погиб, но имел жизнь вечную.', uk: 'Так бо полюбив Бог сьвіт, що Сина свого єдинородного дав, щоб кожен, віруючий в Него, не погиб, а мав життє вічнє.', pl: 'Albowiem tak Bóg umiłował świat, że Syna swego jednorodzonego dał, aby każdy, kto weń wierzy, nie zginął, ale miał żywot wieczny.', cs: 'Nebo tak Bůh miloval svět, že Syna svého jednorozeného dal, aby každý, kdož věří v něho, nezahynul, ale měl život věčný.', sr: 'Јер Богу тако омиље свијет да је и сина својега јединороднога дао, да ни један који га вјерује не погине, него да има живот вјечни.', zh: '「神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，反得永生。', ja: 'それ神はその獨子を賜ふほどに世を愛し給へり、すべて彼を信ずる者の亡びずして、永遠の生命を得んためなり。', ko: '하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 저를 믿는 자마다 멸망치 않고 영생을 얻게 하려 하심이니라', hi: 'क्योंकि परमेश्वर ने जगत से ऐसा प्रेम रखा कि उस ने अपना एकलौता पुत्र दे दिया, ताकि जो कोई उस पर विश्वास करे, वह नाश न हो, परन्तु अनन्त जीवन पाए।', vi: 'Vì Đức Chúa Trời yêu thương thế gian, đến nỗi đã ban Con một của Ngài, hầu cho hễ ai tin Con ấy không bị hư mất mà được sự sống đời đời.', ar: 'لانه هكذا احب الله العالم حتى بذل ابنه الوحيد لكي لا يهلك كل من يؤمن به بل تكون له الحياة الابدية.', tr: 'Zira Allah dünyayı öyle sevdi ki, biricik Oğlunu verdi; ta ki, ona iman eden her adam helâk olmasın, ancak ebedî hayatı olsun.', sw: 'Kwa maana jinsi hii Mungu aliupenda ulimwengu, hata akamtoa Mwanawe pekee, ili kila mtu amwaminiye asipotee, bali awe na uzima wa milele.', fi: 'Sillä niin on Jumala maailmaa rakastanut, että hän antoi ainokaisen Poikansa, ettei yksikään, joka häneen uskoo, hukkuisi, vaan hänellä olisi iankaikkinen elämä.', hu: 'Mert úgy szerette Isten e világot, hogy az ő egyszülött Fiát adta, hogy valaki hiszen ő benne, el ne vesszen, hanem örök élete legyen.' },
  'Psalm 22:1 (KJV 23:1)': { grc: 'Ψαλμὸς τῷ Δαυίδ. Κύριος ποιμαίνει με, καὶ οὐδέν με ὑστερήσει.', la: 'Psalmus David. Dominus regit me, et nihil mihi deerit.', hbo: 'מִזְמ֥וֹר לְדָוִ֑ד יְהוָ֥ה רֹ֝עִ֗י לֹ֣א אֶחְסָֽר׃', de: 'Ein Psalm Davids. Der HERR ist mein Hirte; mir wird nichts mangeln.', nl: 'Een psalm van David. De HEERE is mijn Herder, mij zal niets ontbreken.', sv: 'En psalm av David. HERREN är min herde, mig skall intet fattas,', da: 'HERREN er min Hyrde, mig skal intet fattes,', no: 'En salme av David. Herren er min hyrde, mig fattes intet.', es: 'Jehová es mi pastor; nada me faltará.', fr: 'L\'Éternel est mon berger: je ne manquerai de rien.', it: 'IL Signore è il mio pastore: nulla mi mancherà.', pt: 'O Senhor é o meu pastor: nada me faltará.', ro: 'Domnul este Păstorul meu: nu voi duce lipsă de nimic.', ru: 'Господь - Пастырь мой; я ни в чем не буду нуждаться:', uk: 'Псальма Давидова. Господь пастирь мій, не мати му недостатку.', pl: 'Psalm Dawidowy. Pan jest pasterzem moim, na niczem mi nie zejdzie.', cs: 'Žalm Davidův. Hospodin jest můj pastýř, nebudu míti nedostatku.', sr: 'Господ је пастир мој, ништа ми неће недостајати.', zh: '（大衛的詩。）耶和華是我的牧者，我必不致缺乏。', ja: 'ヱホバは我が牧者なり われ乏しきことあらじ', ko: '여호와는 나의 목자시니 내가 부족함이 없으리로다', hi: 'यहोवा मेरा चरवाहा है, मुझे कुछ घटी न होगी।', vi: 'Đức Giê-hô-va là Đấng chăn giữ tôi: tôi sẽ chẳng thiếu thốn gì.', ar: 'مزمور لداود. الرب راعيّ فلا يعوزني شيء.', tr: 'RAB çobanımdır; benim eksiğim olmaz.', sw: 'Bwana ndiye mchungaji wangu, Sitapungukiwa na kitu.', fi: 'Herra on minun paimeneni, ei minulta mitään puutu.', hu: 'Az Úr az én pásztorom; nem szűkölködöm.' },
  'Genesis 1:1': { grc: 'ἘΝ ἀρχῇ ἐποίησεν ὁ Θεὸς τὸν οὐρανὸν καὶ τὴν γῆν.', la: 'In principio creavit Deus caelum et terram.', hbo: 'בְּרֵאשִׁ֖ית בָּרָ֣א אֱלֹהִ֑ים אֵ֥ת הַשָּׁמַ֖יִם וְאֵ֥ת הָאָֽרֶץ׃', de: 'Am Anfang schuf Gott Himmel und Erde.', nl: 'In den beginne schiep God den hemel en de aarde.', sv: 'I begynnelsen skapade Gud himmel och jord.', da: 'I Begyndelsen skabte Gud Himmelen og Jorden.', no: 'I begynnelsen skapte Gud himmelen og jorden.', es: 'En el principio creó Dios los cielos y la tierra.', fr: 'Au commencement, Dieu créa les cieux et la terre.', it: 'NEL principio Iddio creò il cielo e la terra.', pt: 'NO princípio, criou Deus os céus e a terra.', ro: 'La început, Dumnezeu a făcut cerurile şi pămîntul.', ru: 'В начале сотворил Бог небо и землю.', uk: 'У початку сотворив Бог небо та землю.', pl: 'Na początku stworzył Bóg niebo i ziemię.', cs: 'Na počátku stvořil Bůh nebe a zemi.', sr: 'У почетку створи Бог небо и земљу.', zh: '起初，　神創造天地。', ja: '元始に神天地を創造たまへり', ko: '태초에 하나님이 천지를 창조하시니라', hi: 'आदि में परमेश्वर ने आकाश और पृथ्वी की सृष्टि की।', vi: 'Ban đầu Đức Chúa Trời dựng nên trời đất.', ar: 'في البدء خلق الله السموات والارض.', tr: 'BAŞLANGIÇTA Allah gökleri ve yeri yarattı.', sw: 'Hapo mwanzo Mungu aliziumba mbingu na nchi.', fi: 'Alussa loi Jumala taivaan ja maan.', hu: 'Kezdetben teremté Isten az eget és a földet.' },
  'Genesis 1:3': { grc: 'Καὶ εἶπεν ὁ Θεὸς, γενηθήτω φῶς· καὶ ἐγένετο φῶς.', la: 'Dixitque Deus : Fiat lux. Et facta est lux.', hbo: 'וַיֹּ֥אמֶר אֱלֹהִ֖ים יְהִ֣י א֑וֹר וַֽיְהִי־אֽוֹר׃', de: 'Und Gott sprach: Es werde Licht! und es ward Licht.', nl: 'En God zeide: Daar zij licht! en daar werd licht.', sv: 'Och Gud sade: »Varde ljus»; och det vart ljus.', da: 'Og Gud sagde: "Der blive Lys!" Og der blev Lys.', no: 'Da sa Gud: Det bli lys! Og det blev lys.', es: 'Y dijo Dios: Sea la luz: y fué la luz.', fr: 'Dieu dit: Que la lumière soit! Et la lumière fut.', it: 'E Iddio disse: Sia la luce. E la luce fu.', pt: 'E disse Deus: Haja luz. E houve luz.', ro: 'Dumnezeu a zis: „Să fie lumină!" Şi a fost lumină.', ru: 'И сказал Бог: да будет свет. И стал свет.', uk: 'І рече Бог: Настань, сьвіте! І настав сьвіт.', pl: 'I rzekł Bóg: Niech będzie światłość; i stała się światłość.', cs: 'I řekl Bůh: Buď světlo! I bylo světlo.', sr: 'И рече Бог: нека буде свјетлост. И би свјетлост.', zh: '　神說：要有光，就有了光。', ja: '神光あれと言たまひければ光ありき', ko: '하나님이 가라사대 빛이 있으라 하시매 빛이 있었고', hi: 'तब परमेश्वर ने कहा, उजियाला हो: तो उजियाला हो गया।', vi: 'Đức Chúa Trời phán rằng: Phải có sự sáng; thì có sự sáng.', ar: 'وقال الله ليكن نور فكان نور.', tr: 'Ve Allah dedi: Işık olsun; ve ışık oldu.', sw: 'Mungu akasema, Iwe nuru; ikawa nuru.', fi: 'Ja Jumala sanoi: \'Tulkoon valkeus\'. Ja valkeus tuli.', hu: 'És monda Isten: Legyen világosság: és lőn világosság.' } }




// ПЕСНОПОЙКА — a songbook of 103 Balkan folk songs collected by the artist gabchik
// (http://gabchik.com/pesnopoika.html), decoded to its reusable core beside toGlagolitic and the
// Glagolitic Bible. The collector's own words: the songs "свърза ни с Корена и битието на хората в
// миналото" — connected us with the Root and the being of people past. The Root is this portal's word
// too. So the songbook folds in here: SAVE the original songs (PESNOPOIKA), then DECODE them with pure,
// zero-token tools — the dialect dictionary the book itself supplies (its footnotes), the verse/refrain
// structure, the documented uneven meter, the honest provenance, the genre. Decode, not decoration.
//
// COUNT — the book is colloquially "108"; it actually holds 103 numbered songs. 108 is ALSO this
// portal's folded census (123 files unfold; through the genus-2 double torus χ=−2, 121 fold; foldedCensus).
// The songbook's traditional number and the structure's topological number meet at 108 — noted as a
// resonance, not a claim that this file holds 108 songs. It holds 103, verbatim.
//
// HONEST, documented-vs-legend kept strictly apart (the per-song flags live in PROVENANCE):
//  • The collection is PAN-BULGARIAN with a heavy Macedonian/Pirin layer (Македонско девойче, Пушка
//    пукна, Шар планина, Кога зашумят шумите) + Western/Shop + Thrace/Rhodope — NOT a Strandzha book,
//    though song 1 (Тудоро, Тудоро) is Strandzha (нестинарку/странджанку).
//  • NOT all of it is anonymous folk: #44 Хубава си, моя горо is AUTHORED (text Любен Каравелов 1875,
//    music Георги Горанов); #55 Македонско девойче is Йонче Христовски (1960s); #62 Кацнал бръмбър на
//    трънка was completed/composed by Павел Сираков. Sung as folk, but they have known authors.

/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export type Song = { n: number; title: string; scores: string[]; gloss: [string, string][]; lyrics: string }

// The saved original text — the 103 songs as collected. Lyrics keep their verse structure (numbered
// verses, a blank line between verses); `gloss` is each song's own dialect footnotes (the decode source).
// Generated verbatim from the source page; the decode tools below read this, nothing external.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export const PESNOPOIKA: readonly Song[] = [
  { n: 1, title: 'Тудоро, Тудоро', scores: ['notirani_pesni/score-001-1.png'],
    gloss: [['Геч', 'късно'], ['Лавнаха', 'заляха'], ['Госкье', 'гости'], ['Меже', 'жени, които ходят на седенки'], ['Къделя', 'валмо, развлачена вълна, която се слага на хурката и се преде с вретено'], ['Ракие', 'ракия'], ['Байно', 'по-стар брат; бате; батко; бай'], ['Слюбнице', 'годежари'], ['Йолдаши', 'спътници'], ['Оглавям, главя се', 'женя се; сгодявам'], ['Менихме', 'разменихме'], ['Пруодих', 'пратих, изпратих'], ['Алтънена', 'златна']],
    lyrics: '1. Тудоро, Тудоро, елънджи Тудоро,\nбeла ургърчинку, лична нестинарку.\nЛична нестинарку, най-лична странджанку.\nЩо снощи светехте и до геч седехте,\nщо кучета лавнаха, портите ви хлопнаха.\nГоскье ли имахте, госкье мусафирийе.\n\n2. Меже ли събрахте, моми и момчета,\nкaделкье ли предехте, пукайе ли пукахте.\nВино ли пиехте, вино и ракие.\n\n3. Байно ле Тодоре, ние снощи светехме,\nсватове чакахме, сватове слюбници.\nВсе граматичени, татови йолдаши.\n\n4. Кака оглавихме за граматиченин,\nпръстени менихме, китка пруодихме.\nКитка пруодихме, китка алтънена.' },
  { n: 2, title: 'Тая вечер, стара ле мале', scores: ['notirani_pesni/score-002-1.png'],
    gloss: [['Нема', 'няма'], ['Надалеко', 'далеч'], ['Булче', 'булка']],
    lyrics: '1. Тая вечер, стара ле мале, хич не съм весела /x2\nАх, мале, стара ле мале, хич не съм весела\nАх, мале, стара ле мале, че го либе нема\n\n2. Хич не съм весела, бе мале, че го либе нема /x2\nАх, мале, стара ле мале, че го либе нема\nАх, мале, стара ле мале, нема го да дойде\n\n3. То си е отишло, бе мале, много надалеко /x2\nАх, мале, стара ле мале, много надалеко\nАх, мале, стара ле мале, пари да спечели\n\n4. Пари да спечели, бе мале, къща да направи /x2\nАх, мале, стара ле мале, къща да направи\nАх, мале, стара ле мале, мене да си вземе\n\n5. Мене да си вземе, бе мале, за млада невеста /x2\nАх, мале, стара ле мале, за млада невеста\nАх, мале, стара ле мале, булче да му стана' },
  { n: 3, title: 'Конче си изведох', scores: ['notirani_pesni/score-003-1.png'],
    gloss: [['Сайвант', 'подслон, навес, сушина'], ['Ябанджия', 'другоселец, преселник']],
    lyrics: '1. Конче си изведох, бе мале, конче от сайванче /х2\nСедло му турих, седло позлатено\nюзда му сложих, лична ясна звезда\n\n2. Па се метнах, стара ле мале, по горните села /x2\nлика да си търся, на мене прилика /x2\n\n3. Там си видох, стара ле мале, мома убавица /x2\nКато ме погледна, с тия църни очи\nогън ми запали, снагата юнашка\n\n4. Като ми продума, бе мале, с тая медна уста /x2\nОй ти, лудо младо, я не те позвавам\nя не те познавам, ти си си ябанджийче' },
  { n: 4, title: 'Домачине', scores: ['notirani_pesni/score-004-1.png'],
    gloss: [['Арни', 'хубави']],
    lyrics: '1. Домачине, сипи вино да пиеме /х2\nДа пиеме, домачине, да се напием /х2\n\n2. Че са дошли, домачине, арни гости /х2\nАрни гости, домачине, от София /х2\n\n3. Че се роди, домачине, мажко дете /х2\nМажко дете, домачине, македонче\nМажко дете, домачине, баш българче' },
  { n: 5, title: 'Горанине, чафанине', scores: ['notirani_pesni/score-005-1.png'],
    gloss: [],
    lyrics: '1. Горанине, чафанине /х2\nГоранине, Горанине, чафанине /х2\n\n2. Горанка ти, димийе нема /х2\nГоранка ти, горанка ти, димийе нема /х2\n\n3. Ако нема, че го купим /х2\nАко нема, ако нема, че го купим /х2\n\n4. Че го купим, йом димийе /х2\nЧе го купим, че го купим, йом димийе /х2\n\n5. Йом димийе, джам фазмийе /х2\nЙом димийе, йом димийе, джам фазмийе /х2\n\n6. Джам фазмийе, кот комшийе /х2\nДжам фазмийе, джам фазмийе, кот комшийе /х2' },
  { n: 6, title: 'Едийе', scores: ['notirani_pesni/score-006-1.png'],
    gloss: [['Кузум', 'драга, мила'], ['Найдох', 'намерих'], ['Збореше', 'говореше'], ['Кудя (Кудеше)', 'коря, укорявам; клеветя']],
    lyrics: '1. Не ли си се наспала, кузум бело Едийе,\nтри вечери без мене\nЕе Едийе, три вечери без мене? Ой!\n\n2. Три вечери без мене, кузум бело Едийе,\nна четвърта яз си дойдох\nЕе Едийе, на четвърта яз си дойдох. Ой!\n\n3. На четвърта си дойдох, кузум бело Едийе,\nтебе дома не найдох\nЕе Едийе, тебе дома не найдох. Ой!\n\n4. Тебе дома не найдох, кузум бело Едийе,\nнай те найдох зад врата,\nЕе Едийе, най те найдох зад врата. Ой!\n\n5. Най те найдох зад врата, кузум бело Едийе,\nсо другиго збореше\nЕе Едийе, со другиго збореше. Ой!\n\n6. Со другиго збореше, кузум бело Едийе,\nи ме мене кудеше\nЕе Едийе и ме мене кудеше. Ой!\n\n7. Не ми фърляй ифтире, чазим главо пияна,\nя съм била со майка\nЕе чазиме, я съм била со майка. Ой!\n\n8. Я съм била со майка, чазим главо пияна,\nбели руки шарила\nЕе чазиме, бели руки шарила. Ой!\n\n9. Бели руки шарила, чазим главо пияна,\nи съм ти дете родила\nЕе чазиме и съм ти дете родила. Ой!' },
  { n: 7, title: 'Моме стойе', scores: ['notirani_pesni/score-007-1.png'],
    gloss: [['Стойе', 'стои'], ['Йов', 'във'], ['Ливаде', 'ливади, поляни'], ['Де що', 'където'], ['Джанъм', 'моя душа'], ['Йогледало', 'огледало'], ['Согледуйе', 'гледа; оглежда се'], ['Зборуйе', 'говори'], ['Дал ме личе за...', 'дали ставам за...']],
    lyrics: '1. Моме стойе, джанъм, моме стойе\nМоме стойе, джанъм, йоф ливаде /х2\n\n2. Де що стойе, моме, де що стойе\nДе що стойе, моме, слънце грее /х2\n\n3. В ръце държи, джанъм, в ръце държи\nВ ръце държи, джанъм, йогледало /х2\n\n4. Согледуйе, моме, согледуйе\nСогледуйе, моме, и зборуйе /х2\n\n5. Дал ме личе, Боже, дал ме личе\nДал ме личе, Боже, за невеста\nЗа невеста, Боже, йов недела\n\n6. Дай ми сила, Боже, дай ми сила\nДай ми сила, Боже, да пребъда /х2' },
  { n: 8, title: 'Моме, моме (бело переш)', scores: ['notirani_pesni/score-008-1.png'],
    gloss: [['Бело', 'бяло'], ['Църно', 'черно'], ['Жалиш', 'оплакваш'], ['Бубайко', 'татко'], ['Севда', 'любов'], ['Глави се; оглавям се', 'сгодявам се']],
    lyrics: '1. Моме, моме, малай моме,\nбело переш, църно носиш /х2\nмайка ли жалиш, или бубайко?\n\n2. Ни майка жаля, ни бубайко\nжалям си, жалям, първо си либе/2\nпърво си либе, първа си севда\n\n3. Снощи ми вечер, конче пристигна\nи на седлото му пишеше /х2\nжени се либе, жени се глави\n\n4. Я се ожених, я се оглавих\nза тая пуста, църна земя /х2\nза туй пусто църно расо' },
  { n: 9, title: 'Айде моме да бегаме', scores: ['notirani_pesni/score-009-1.png'],
    gloss: [['Гергеф', 'рамка за везане']],
    lyrics: '1. Моме, моме, малкай моме, айде, моме да бегаме /х2\nДорде гора листя има и по поле бел божурец /х2\n\n2. Бегай, лудо, бегай, младо, бегай, лудо, яз не бегам /х2\nИмам платно за белене, имам гергеф за везане /х2\n\n3. Остави си бело платно, бело платно на майка ти,\nостави си шарен гергеф, шарен гергеф на сестра ти\nДвамца с тебе да бегаме, ти невеста да ми станеш /х2' },
  { n: 10, title: 'Мори Рисо Рисо', scores: ['notirani_pesni/score-010-1.png'],
    gloss: [['Каде', 'къде'], ['Одила', 'ходила'], ['Дома', 'вкъщи'], ['У чичове бееме', 'бяхме на гости на чичо'], ['Имая', 'имахме'], ['Дрънкая', 'свиреха'], ['Тельове', 'струни'], ['Късая', 'късаха'], ['Фаная', 'хванаха']],
    lyrics: '1. Мори, Рисо, Рисо, мори бела Рисо\nКаде си одила, Рисо, дома не си била /x2\n\n2. У чичове беемe /x2\nу чичове бееме, лудо, гости си имая /x2\n\n3. Гости си имая /x2\nгости си имая, лудо, с тамбури дрънкая /х2\n\n4. С тамбури дрънкая /x2\nс тамбури дрънкая, лудо, тельове късая /x2\n\n5. Мене ме фаная /x2\nмене ме фаная, лудо, тельове да връзвам /х2' },
  { n: 11, title: 'Расти Боре', scores: ['notirani_pesni/score-011-1.png', 'notirani_pesni/score-011-2.png'],
    gloss: [['Малай', 'малка'], ['Голем', 'голям'], ['Върше', 'клон'], ['Мойно', 'моето'], ['Спийе', 'спи']],
    lyrics: '1. Малай мома голем бор садила, ле\nМалай мома голем бор садила\n\n2. Хем садила, хем го наричала, ле\nХем садила, хем го наричала\n\n3. Расти Боре, голем бор да станеш, ле\nРасти Боре, голем бор да станеш\n\n4. Да се кача на високо върше, ле\nДа се кача на високо върше\n\n5. Та да видя мойно първо либе, ле\nТа да видя мойно първо либе\n\n6. Дали пие, или кротко спийе, ле\nДали пие, или кротко спийе\n\n7. Ако пие, наздраве да му е, ле\nАко пие, наздраве да му е\n\n8. Ако спийе, лека нощ да му е, ле\nАко спийе, лека нощ да му е' },
  { n: 12, title: 'Яворе', scores: ['notirani_pesni/score-012-1.png'],
    gloss: [['Гранки', 'клони'], ['Седнам', 'седна'], ['Ручек', 'храна; ястие'], ['Ручам', 'да ям'], ['Руйно/руен', 'за течност — буен, пенлив, изобилен'], ['Малай', 'малка'], ['Любам', 'любя'], ['Како', 'както'], ['Сакам', 'искам; обичам']],
    lyrics: '1. O, яворе, ти яворе /х2\nО, яворе, ти, яворе, най-високо дърво ти си /х2.\n\n2. Разшири си свойте гранки /х2\nРазшири си свойте гранки, от небето до земята /х2\n\n3. Да си седнам под явора /х2\nДа си седнам под явора, сладок ручек да си ручам /х2\n\n4. Сладок ручек да си ручам /х2\nСладок ручек да си ручам, руйно вино да си пиям /х2\n\n5. Руйно вино да си пиям /х2\nРуйно вино да си пиям, малай мома да си любам /х2\n\n6. Малай мома да си любам /х2\nкако душа що ми сака /х2' },
  { n: 13, title: 'Oй Ливадо', scores: ['notirani_pesni/score-013-1.png'],
    gloss: [['Траво', 'трева'], ['Теби', 'тебе'], ['Чувам', 'пазя, грижа се'], ['Мойе', 'мое'], ['Га', 'ги'], ['Годинчица', 'години'], ['Песму', 'песен'], ['Пева', 'пее'], ['Що те нема', 'защо те няма'], ['Ових дена', 'тези дни'], ['Кад я', 'когато аз']],
    lyrics: '1. Ой ливадо, росна траво, Яворе, Яворе\nКой по теби чува стадо, злато мойе /х2\n\n2. Чувала га девойчица, Яворе, Яворе,\nОд седемнадесет годинчица, злато мойе /х2\n\n3. Овце чува, песму пева, Яворе, Яворе\nМой Драгане, що те нема, злато мойе? /х2\n\n4. Що те нема ових дена, Яворе, Яворе\nКад я овце чувам сама, злато мойе? /x2' },
  { n: 14, title: 'Стига си одил', scores: ['notirani_pesni/score-014-1.png'],
    gloss: [['Одил', 'ходил'], ['Шетал', 'обикалял, скитал'], ['Найде', 'намери'], ['Не ща', 'не искам'], ['Яз', 'аз'], ['Че', 'ще']],
    lyrics: '1. Стига си одил, бе сине,\nстига си шетал\nМайка ти найде хубава мома,\nмайка ти найде гиздава жена\n\n2. Хем e със пари, бре синко, хем е със имот\nСамо дет не е първата любов /х2\n\n3. Не ща ни пари, бре мале, не ща ни имот\nСамо си искам първата любов /х2\n\n4. Парите са, мила мале, парите са\nпарите са - яз да изкарам\nимота йе - яз да го продам\n\n5. Не ща ни пари, бре мале, не ща ни имот\nСамо си искам първата любов /х2\n\n6. Тя за мен е, стара мале, пари и имот\nС нея че карам целия живот /х2' },
  { n: 15, title: 'Жени ме, мамо', scores: [],
    gloss: [['Роба', 'дълга свободна домашна дреха с широки ръкави'], ['Прилега', 'прилича; подхожда; отива']],
    lyrics: '1. Жени ме, мамо, жени ме\nжени ме, стара ле мамо, женен да ода /х2\n\n2. Дорде съм, мамо, дорде съм\nдорде съм, стара ле мамо, младо зелено /х2\n\n3. Дорде ми, мамо, дорде ми\nдорде ми, стара ле мамо, роба прилега /х2\n\n4. Дорде ме, мамо, дорде ме,\nдорде ме, стара ле мамо, моми иская /x2\n\n5. Искат ме мамо, искат ме\nискат ме, стара ле мамо, моми юбави\nискат ме, стара ле мамо, до три гиздави\n\n6. Първата, мамо, първата\nпървата, стара ле мамо, продай конче, земи я /х2\n\n7. Втората, мамо, втората\nВтората, стара ле мамо, заложих се за нея /х2\n\n8. Третата, мамо , третата\nТретата, стара ле мамо, на мен прилега /х2' },
  { n: 16, title: 'Мома оди за вода', scores: [],
    gloss: [['Оди', 'ходи, отива'], ['Бекяр', 'ерген; неженен'], ['Почекай', 'почакай'], ['Кажем', 'кажа'], ['Збор', 'дума'], ['Стомнето', 'стомната'], ['Оладя', 'охладя'], ['Фати', 'хвана'], ['Префърли', 'прехвърля'], ['Кърши', 'счупва'], ['Пръстенот', 'пръстенът'], ['Коньо', 'конят']],
    lyrics: '1. Мома оди за вода и бекярот по нея\nПостой, моме, почекай, да ти кажем два збора\n\nПрипев: Дей гиди, моме убаво, дей гиди севдо голема /х2\n\n2. Да ми дадеш стомнето, да оладя сърцето\nСе измами момето, му подаде стомнето\n\nПрипев: Дей гиди, моме убаво, дей гиди севдо голема /х2\n\n3. Той не фати стомнето, най ѝ фати раката,\nя префърли на коня, ѝ го скърши пръстенот\n\nПрипев: Дей гиди, моме убаво, дей гиди севдо голема /х2\n\n4. Като ветар вееше, така коньо бегаше,\nкато роса росеше, така мома плачеше\n\nПрипев: Дей гиди, моме убаво, дей гиди севдо голема /х2' },
  { n: 17, title: 'Глава ли та боли', scores: ['notirani_pesni/score-017-1.png'],
    gloss: [['Половина', 'в човешкото тяло - кръстът'], ['Заглавило', 'сгодило']],
    lyrics: '1.Глава ли та боли, сино мой,\nглава ли та боли,\nили половина, сино мой, или половина\n\n2. Ни ма глава боли, мамо ма,\nни ма глава боли\nСърцесо ма боли, мамо ма, за снощната вечер /х2\n\n3. Заглавило са е, мамо ма,\nзаглавило са е\nМойно порво любе, мамо ма, и ще да са жени /х2\n\n4. Сърцесо си давам, мамо ма,\nсърцесо си давам\nНа тая планина, мамо ма, и ще да са зьомнем' },
  { n: 18, title: 'Зарад тебе', scores: ['notirani_pesni/score-018-1.png'],
    gloss: [['Калдъръм', 'настилка на двор или улица, направена от обли камъни'], ['Рипна/Рипам', 'скачам; прескачам']],
    lyrics: '1. Зарад тебе, моме ле мори, калдръмето троша /х2\n\nПрипев: Ела, ела, моме, ти до мене\nайде ле, че не мога, моме ле мори, яз без тебе! /х2\n\n2. Зарад тебе, моме ле мори, каловете газя /х2\n\nПрипев: Ела, ела, моме, ти до мене\nайде ле, че не мога, моме ле мори, яз без тебе! /х2\n\n3. Зарад тебе, моме ле мори, плетовете рипна /х2\n\nПрипев: Ела, ела, моме, ти до мене\nайде ле, че не мога, моме ле мори, яз без тебе! /х2\n\nЗарад тебе, моме ле мори, кучета ме лаят /х2\n\nПрипев: Ела, ела, моме, ти до мене айде ле, че не мога, моме ле мори, яз без тебе! /х2' },
  { n: 19, title: 'Руси коси имам', scores: ['notirani_pesni/score-019-1.png'],
    gloss: [['Немам', 'нямам'], ['Цървено', 'червено'], ['Белилце', 'помада за придаване бял цвят на лицето, за избелване на кожата или за гримиране'], ['Че ме', 'ще ме']],
    lyrics: '1. Руси коси имам, гребенче си немам\nгребенче си немам, немам кой да купи\n\nПрипев: Елено, вино цървено,\nЕлено, две цървени ябулки /х2\n\n2. Бело лице имам, белилце си немам\nбелилце си немам, немам кой да купи\n\nПрипев: Елено, вино цървено,\nЕлено, две цървени ябулки /х2\n\n3. Тънко кръстче имам, коланче си немам\nколанче си немам, немам кой да купи\n\nПрипев: Елено, вино цървено,\nЕлено, две цървени ябуки /x2\n\n4. Мама че ме жени за младо момченце\nда ми купи, лудо, гребенче, белилце\n\nПрипев: Елено, вино цървено,\nЕлено, две цървени ябуки /x2' },
  { n: 20, title: 'Мятало ленче ябълка', scores: ['notirani_pesni/score-020-1.png'],
    gloss: [['Наричам', 'предопределям бъдещето'], ['На кого', 'на когото'], ['Надоле', 'надолу'], ['Идат', 'отидат']],
    lyrics: '1. Мятало Ленче ябълка /х2\nМятало и наричало, на кого падне ябълка,\nна кого падне ябълка, за него ще се оженя\n\n2. Ябълка падна на старец /х2\nСтарец се много зарадва, засука мустак нагоре,\nзасука мустак нагоре, заглади брада надоле\n\n3. Викнало Ленче да плаче /х2\nОле лe, майко, майчице, какво ще правя тоз старец? /х2\n\n4. Майка на Ленче думаше /х2\nНе плачи, Ленче, не тъжи, дървари в гора ще идат,\nдървари в гора ще идат и ние стaрeц ще пратим\n\n5. Дървари в гора ще идат /х2\nи ние старец ще пратим, дано го дърво убие,\nдано го дърво убие, дано го мечка изяде\n\n6. Дървари от гора се връщат /2х\nнашият старец най-отпред, на рамо дърво носеше,\nна рамо дърво носеше, за ухо мечка водеше' },
  { n: 21, title: 'Запевала сойка птица', scores: ['notirani_pesni/score-021-1.png'],
    gloss: [['Устай', 'ставай'], ['Спремай', 'подготвяй; приготвяй'], ['Удайеш/ удая', 'сгодяваш; сгодява']],
    lyrics: '1. Запевала сойка птица,\nмисли зора ли е, аман, аман,\nмисли зора ли е\n\n2. Устай, Като, устай злато,\nспремай дарове, аман, аман\nспремай дарове\n\n3. Я съм млада и сирота,\nнемам дарове, аман, аман,\nнемам дарове\n\n4. Кат си млада и сирота,\nщо са удайеш, аман, аман,\nщо са удайеш?\n\n5. Удая ме стара майка,\nни съм знаяла, аман, аман,\nНи съм знаяла' },
  { n: 22, title: 'Дойди, дойди, либе ле', scores: ['notirani_pesni/score-022-1.png'],
    gloss: [['Чардак', 'висока покрита тераса на къща'], ['Вели', 'говори']],
    lyrics: '1. Дойди, дойди, либе ле,\nдома на вечеря /x2\nОх, либе, либе ле,\nдома на вечеря.\nЛибе, либе, либе ле,\nдома на вечеря\n\n2. Вържи конче, либе ле,\nна вита калина /x2\nОх, либе, либе ле,\nна вита калина.\nЛибе, либе, либе ле,\nна вита калина\n\n3. Та се качи, либе ле,\nгоре на чардаци /x2\nОх, либе, либе ле,\nгоре на чардаци.\nЛибе, либе, либе ле,\nгоре на чардаци\n\n4. Та да видиш, либе ле,\nмама как ме гали /x2\nОх, либе, либе ле,\nмама как ме гали.\nЛибе, либе, либе ле,\nмама как ме гали\n\n5. Мене гали, либе ле,\nтебе споменува /x2\nОх, либе, либе ле,\nтебе споменува.\nЛибе, либе, либе ле,\nтебе споменува\n\n6. Мама вели, либе ле,\nзалюби го, щерко /x2\nОх, либе, либе ле,\nзалюби го, щерко.\nЛибе, либе, либе ле,\nзалюби го, щеркo' },
  { n: 23, title: 'Ясна ми, ясна месечинка', scores: [],
    gloss: [['Оро', 'хоро'], ['Чие', 'кое/ на кого'], ['Убаво', 'хубаво'], ['Момино', 'на момите'], ['Хурка', 'специално пригодена дълга пръчка, върху която се закрепва къделя вълна и др. при ръчно предене'], ['Копринарка', 'коприна'], ['Натъкмено', 'подредено, нагласено'], ['Момково', 'на момците'], ['Палешник', 'желязната част на плуга, която разорава почвата'], ['Рала', 'от рало, инструмент'], ['Затърнено', 'преградено; заградено с преграда']],
    lyrics: '1. Ясна ми, ясна месечинка,\nизпод облак оро гледа /x2\nЧие е оро най-убаво,\nнай-убаво, най-подредено /x2\n\n2. Момино оро най-убаво,\nнай-убаво, най-подредено /x2\nЧе със хурки заградено\nи с копринарки натъкменo /x2\n\n3. Момково оро най-убаво,\nнай-убаво, най-гиздаво\nМомково оро е най-убаво,\nнай-убаво, най-подредено\nЧе със рала заградено\nи с палешници затърнено.' },
  { n: 24, title: 'Забурила Йена', scores: [],
    gloss: [['Забурила', 'забравила'], ['Ключен', 'ключ'], ['Приключи', 'заключи'], ['Калофер', 'вид подправка']],
    lyrics: '1. Забурила Йена,\nЙено льо, Йенице, Йенке ле,\nзабурила Йена\nпорти да затвори.\n\n2. Порти да затвори,\nЙено льо, Йенице, Йенке ле,\nпорти да затвори,\nс ключен да приключи\n\n3. Та ми са навлезли,\nЙено льо, Йенице, Йенке ле,\nта ми са навлезли\nвойводови конйе\n\n4. Та са ютъпкали,\nЙено льо, Йенице, Йенке ле,\nта са ютъпкали\nдва рьода босилек\n\n5. Два рьода босилек,\nЙено льо, Йенице, Йенке ле,\nдва рьода босилек,\nтрети йем калофер.\n\n6. Викнала е Йена,\nЙено льо, Йенице, Йенке ле,\nвикнала е Йена, викнала, кълнала\n\n7. Пусти да останат,\nЙено льо, Йенице, Йенке ле,\nпусти да останат\nвойводови конйе\n\n8. Че са ютъпкали,\nЙено льо, Йенице, Йенке ле,\nче са ютъпкали два рьода босилек\n\n9. Два рьода босилек,\nЙено льо, Йенице, Йенке ле,\nдва рьода босилек, трети йем калофер' },
  { n: 25, title: 'Гергана пиле шарено', scores: [],
    gloss: [],
    lyrics: '1. Видиш ли долу в полето, там било село Бисерча,\nтам се родила, живела момина мила Гергана\n\nПрипев: Гергана, пиле шарено мари,\nГергана кротко агънце /х2\n\n2. Гергана още Никола, двамата лика прилика\nдвамата млади зелени, един за други родени\n\nПрипев: Гергана, пиле шарено мари,\nГергана кротко агънце /х2\n\n3. Рано ранила Гергана, та си на извор отиде,\nвезир пред чадър седеше и на Гергана думаше\n\nПрипев: Гергана, пиле шарено мари,\nГергана кротко агънце /х2\n\n4. Я хаз теб бела българко, на Стамбол да те заведа\nСтамбол е, аго, за мене тука, дето съм родена\n\nПрипев: Гергана, пиле шарено мари,\nГергана кротко агънце /х2\n\n5. Смая се везир с Гергана, пусна момата свободна\nпосле за помен поръча извора чешма да стане\n\nПрипев: Гергана, пиле шарено мари,\nГергана кротко агънце /х2' },
  { n: 26, title: 'Извор вода', scores: [],
    gloss: [['Главени', 'сгодени'], ['Разглавям', 'развалям годеж']],
    lyrics: '1. Извор вода извираше, йоф мари йоф,\nна водона, малкай мома, йоф мари йоф\n\n2. На водона малкай мома, йоф мари йоф,\nда огледа бело лице, йоф мари йоф\n\n3. Та огледа бело лице, йоф мари йоф,\nбело лице, тьонка снажка, йоф мари йоф\n\n4. Да бех малко по-черноочка, йоф мари йоф,\nпо-черноочка, по-височка, йоф мари йоф\n\n5. Главени щех да разглавям, йоф мари йоф,\nпопове щех да разпопвам, йоф мари йоф\n\n6. Женени щех да разженвам, йоф мари йоф /х2' },
  { n: 27, title: 'Калино малино', scores: [],
    gloss: [['Байнева', 'на батко'], ['Изгоро', 'възлюбена; любима']],
    lyrics: '1. Калино, малино, байнева хубава /х2\n\n2. Влязла е Калина в байнева градина\nЦвете си набрала, легнала заспала\n\n3. Отдолу идеха момци добруджанци\nКалина видеха, коне си поспреха /х2\n\n4. Седеха и гледаха, чудом си чудеха\nБре коя е тъз мома, чи каква е тъз хубуст\n\n5. Сепна се Калина, сепна, събуди са\nКато ги погледна, две звездици грейнаха\n\n6. Като ги погледна, две звездици грейпнаха\nКато им продума, трендафил разцъфна\n\n7. Калино, малино, байнева изгоро\nОчите ти, Калино, като две звездици\n\n8. Гледай, гледай, Калино, звездици да греят\nДумай, думай, момне ле, трендафил да цъфне' },
  { n: 28, title: 'Мари Марийко', scores: ['notirani_pesni/score-028-1.png'],
    gloss: [['Карагюзлийка', 'черноока'], ['Гайтан', 'плетен шнур за украса на народна носия'], ['Бостан', 'място, засадено с дини и пъпеши'], ['Карпуз', 'диня'], ['Гемия', 'лодка']],
    lyrics: '1. Мари Марийко, карагюзлийко,\nходила ли си лете на мандра? /х2\nВидяла ли си, мари, прясно сирене,\nтакова ти е белото лице /х2\n\n2. Мари Марийко, карагюзлийко,\nходила ли си лете на пазар? /x2\nВидяла ли си, мари, църни гайтани,\nтакива ти са тънките вежди /х2\n\n3. Мари Марийко, карагюзлийко,\nходила ли си лете на бостан? /х2\nВидяла ли си, мари, цървени карпузки\nтакива ти са цървените бузки /х2\n\n4. Мари Марийко, карагюзлийко,\nходила ли си лете на море? /х2\nВидяла ли си, мари, кротка гемийка\nсредя морето, пълна с лимони\nПълна с лимони, мари, и портокали,\nтакава ти е тънката снажка' },
  { n: 29, title: 'Сокол ми литна', scores: ['notirani_pesni/score-029-1.png'],
    gloss: [],
    lyrics: '1. Сокол ми литна, Яно /х2\n\nПрипев: Дили па, дили оле /х2\nгъркиньо\nСем, сем сули вара,\nдойди ми бил вара,\nсол сварам, такоз варам\nгел, Яно, гел!\n\n2. Високо и на далеко /х2\n\nПрипев: Дили па, дили оле /х2\nгъркиньо\nСем, сем сули вара,\nдойди ми бил вара,\nсол сварам, такоз варам\nгел, Яно, гел!\n\n3. И по поле широко /х2\n\nПрипев: Дили па, дили оле /х2\nгъркиньо\nСем, сем сули вара,\nдойди ми бил вара,\nсол сварам, такоз варам\nгел, Яно, гел!\n\n4. У поле малка мома /х2\n\nПрипев: Дили па, дили оле /х2\nгъркиньо\nСем, сем сули вара,\nдойди ми бил вара,\nсол сварам, такоз варам\nгел, Яно, гел!\n\n5. Сама си жътва жъне /х2\n\nПрипев: Дили па, дили оле /х2\nгъркиньо\nСем, сем сули вара,\nдойди ми бил вара,\nсол сварам, такоз варам\nгел, Яно, гел!' },
  { n: 30, title: 'Врбице врбо зелена', scores: [],
    gloss: [['Гайле', 'грижа'], ['Поноч', 'полунощ']],
    lyrics: '1. Врбице врбо зелена, врбо зелена, джорджевденова\nЩо си се рано развила?\n\n2. Що си се рано развила, врбо зелена джорджевденова\nНе ли си гайле имала?\n\n3. Не ли си гайле имала, врбо зелена, джорджевденова?\nНе ли те майка карала?\n\n4. Врбице врбо зелена, врбо зелена, джорджевденова\nОвчаро съм го имала\n\n5. Овчаро съм го имала, врбо зелена, джорджевденова\nдо поноч съм го чекала\n\n6. До поноч съм го чекала, врбо зелена, джорджевденова\nод поноч съм преспивала' },
  { n: 31, title: 'Еленко, моме маленко', scores: ['notirani_pesni/score-031-1.png'],
    gloss: [['Бунар', 'кладенец']],
    lyrics: '1. Еленко, моме маленко /х2\nне оди късно за вода /х2\n\n2. Водата ни е далеко /х2\nбунаро преку Вардаро /х2\n\n3. Ке легнеш, моме, ке заспиш /х2\nНема кой да те разбуди /х2\n\n4. Лудо ле, лудо будало /х2\nти ке ме мене разбудиш,\nЕленка не е маленка' },
  { n: 32, title: 'Калино Калинче', scores: ['notirani_pesni/score-032-1.png'],
    gloss: [['Найдов', 'намерих'], ['Одая', 'стая']],
    lyrics: '1. Сношти ти дойдов на госте, Калино моме, убава /x2\nПрипев: Калино, Калинче, Калино моме, убава\nКалино, Калинче, Калино моме, гиздава\n\n2. Тебе те дома не найдов, Калино моме, убава /x2\nПрипев: Калино, Калинче, Калино моме, убава\nКалино, Калинче, Калино моме, гиздава\n\n3. Туку го найдов, Калино, нашето мало одайче /x2\nПрипев: Калино, Калинче, Калино моме, убава\nКалино, Калинче, Калино моме, гиздава\n\n4. Отидов дома да спиам, без тебе Кальо не могам /x2\nПрипев: Калино, Калинче, Калино моме, убава\nКалино, Калинче, Калино моме, гиздава\n\n5. Зедов си люта ракиа, да пиам, да се напиам /x2\nКалино, Калинче, белким ке Кальо заспиам /x2' },
  { n: 33, title: 'Разсърдила се мома', scores: ['notirani_pesni/score-033-1.png'],
    gloss: [['Бегало', 'бягало']],
    lyrics: '1. Разсърдила се мома\nРазсърдила се момата\n\n2. На нейната стара ма\nНа нейната стара майка\n\n3. Че я не даде на ли\nЧе я не даде на либе\n\n4. А най я даде на дру\nА най я даде на друго\n\n5. Бегало моме, бега\nБегало и се молило\n\n6. Да я не стигне майка\nДа я не стигне майка й' },
  { n: 34, title: 'Що имала късмет Стамена', scores: [],
    gloss: [['Посакала', 'поискала'], ['Зеде', 'взе'], ['Стомна', 'глинен съд с една дръжка, разширен в долната си част и стеснен при отвора, който е предназначен предимно за вода'], ['Кога', 'когато'], ['Вракяше', 'връщаше'], ['Оро', 'хоро'], ['Играя', 'играеха'], ['Фати', 'хвана']],
    lyrics: '1. Що имала късмет Стамена, Стамена\nмайка й болна легнала, легнала /х2\n\n2. Майка й болна легнала, легнала\nпосакала вода студена, студена /х2\n\n3. Посакала вода студена, студена\nот тая чешма шарена, шарена /х2\n\n4. Стамена ги зеде стомните, стомните\nотиде на чешма шарена, шарена /х2\n\n5. Отиде на чешма шарена, шарена\nда налее вода студена, студена /х2\n\n6. Кога се от вода вракяше, вракяше,\nсред село оро играя, играя /х2\n\n7. Сред село оро, играя, играя\nСтамена се фати на оро да игра' },
  { n: 35, title: 'Зън зън Ганке ле', scores: [],
    gloss: [['Сербез', 'дързък, смел; горделив, надут; проклет човек']],
    lyrics: '1. Либе, ако дойдеш, сега да ми дойдеш /х2\nЧе нема мама, че нема тати,\nче нема кака, че нема бати /х2\n\nПрипев: Зън, зън, Ганке ле, зън байовата,\nхоп-троп, момите, рип-байовите /х2\n\n2. Че майка отиде на воденица /х2\nНа воденица с крива магарица,\nдано даде Господ магаре да падне,\nмагаре да падне, майка да забави,\nза да се полюбя със млади ергени,\nсъс млади ергени, със млади сербези\n\nПрипев: Зън, зън, Ганке ле, зън байовата,\nхоп-троп, момите, рип-байовите /х2\n\n3. Че тати да иде кози да си паси /х2\nДано даде Господ кози да загуби,\nкози да загуби, за да се забави\nЗа да се полюбя със млади ергени,\nсъс млади ергени, със млади сербези\n\nПрипев: Зън, зън, Ганке ле, зън байовата,\nхоп-троп, момите, рип-байовите /х2' },
  { n: 36, title: 'Росни ми росни, Росице', scores: [],
    gloss: [['Умиеш', 'измиеш'], ['Лицесо', 'лицето'], ['Изгоре', 'изгоря'], ['Сърцесо', 'сърцето'], ['Дено', 'където'], ['Сбират', 'събират'], ['Момине', 'момите'], ['Попрелкине', 'седенки'], ['Щиш да', 'ще'], ['Корши', 'срещу; насреща'], ['Посьоднеш', 'поседнеш'], ['Очинки', 'очи'], ['Погльоднеш', 'погледнеш'], ['Устинки', 'устни'], ['Продумаш', 'проговориш'], ['Изпиша', 'нарисувам'], ['Проводя', 'изпратя'], ['Загалил', 'залюбил, обикнал']],
    lyrics: '1. Росни ми росни, Росице, да ми умиеш лицесо,\nда ми умиеш лицето, че ми изгоре сърцесо /х2\n\n2. Че ще да ида, Росице, дено се сбират момине,\nдено се сбират момине, момине по попрелкине /х2\n\n3. Ти щиш да дойдеш, Росице, корши щиш да си посьоднеш,\nс очинки да ма погльоднеш, с устинки да ми продумаш /х2\n\n4. На книжка да те изпиша, на майка да те проводя,\nда види майка да знае, каква съм мома загалил /х2' },
  { n: 37, title: 'Лудо младо сън засънило', scores: ['notirani_pesni/score-037-1.png'],
    gloss: [],
    lyrics: '1. Лудо младо сън засънило, на ръчица белай момина,\nА мома се чудом чуди, мило й е да го буди,\nдраго й е да го гледа /х2\n\n2. Та му рекла: "Съм те любила/(жалила),\nставай лудо, че е ранина.\nМило ми е да те будя, ала слънце веке иде,\nала слънце ще ни види.\nМило ми е да те будя, ала слънце веке иде,\nслънце ке завиди".\n\n3. Лудо младо проговорило: "Как да стана, малкай моме ле?\nКак да стана, малкай моме, като немам вече сила,\nкато ти си я изпила?\nДа, ке стана, малкай моме, защо веке имам сила,\nдето ти си я дарила".' },
  { n: 38, title: 'Море пиле, славей пиле', scores: ['notirani_pesni/score-038-1.png'],
    gloss: [['Море/Мори', 'употребява се най-често заедно с обръщение или в позицията на обръщение, като го подчертава (Море войводо; Море пиле; Мори Рада и тн.)'], ['Песничица', 'песен'], ['Преко', 'отвъд']],
    lyrics: '1. Море пиле, славей пиле,\nя запей ми песничица /х2\n\nПрипев: Да се чуе надалеко, надалеко,\nнадалеко преко Вардар /х2\n\n2. Преко Вардар, до Велешко,\nот Велешко до Прилепско /х2\n\nПрипев: Да се чуе надалеко, надалеко,\nнадалеко преко Вардар /х2\n\n3. Там се бие славен юнак,\nславен юнак, Питу Гули /х2\n\nПрипев: Да се чуе надалеко, надалеко,\nнадалеко преко Вардар /х2' },
  { n: 39, title: 'Изгреяла е месечинка', scores: ['notirani_pesni/score-039-1.png', 'notirani_pesni/score-039-2.png'],
    gloss: [['Аляна', 'червена'], ['Шекеряна', 'сладка; захарна']],
    lyrics: '1. Изгрела е месечинка /х2\nПрипев: Аляна, галяна портокаляна,\nблага душка, медена, шекеряна /х2\n\n2. Чи огряла в градинчица /х2\nПрипев: Аляна, галяна портокаляна,\nблага душка, медена, шекеряна /х2\n\n3. В градинчица - Иринчица /х2\nПрипев: Аляна, галяна портокаляна,\nблага душка, медена, шекеряна /х2\n\n4. Да си бере пъстри китки /х2\nПрипев: Аляна, галяна портокаляна,\nблага душка, медена, шекеряна /х2\n\n5. Хем си бере, хем нарича /х2\nПрипев: Аляна, галяна портокаляна,\nблага душка, медена, шекеряна /х2\n\n6. Вземе ли те първо либе,\nдваж да цъфнеш, триж да грейнеш /х2\nПрипев: Аляна, галяна портокаляна,\nблага душка, медена, шекеряна /х2\n\n7. Вземе ли те чуждо либе,\nда повехнеш, да посърнеш /х2\nПрипев: Аляна, галяна портокаляна,\nблага душка, медена, шекеряна /х2' },
  { n: 40, title: 'Иска ми дума гората', scores: [],
    gloss: [],
    lyrics: '1. Иска ми дума гората, че да ме пусне да мина,\nче да ме пусне да мина и да си дома отида /х2\n\n2. Клоне да не й прекърша, вода да не й в реки размътя\nгнезда да не й съборя, трева да не й откъсна /х2\n\n3. Ако таз дума изпълня, дебела сянка в ней ще намеря,\nбистра студена водица, тъй ми рече гората /х2' },
  { n: 41, title: 'Стига ми се, момне ле, навдигай', scores: ['notirani_pesni/score-041-1.png'],
    gloss: [['Навдигам', 'самозабравям; повишавам самочувствието си'], ['Барем', 'поне'], ['Та', 'те'], ['Дощеря', 'дъщеря'], ['Гиздило', 'накит, премяна'], ['Чи', 'че'], ['Корпана', 'кърпа'], ['Чичина', 'на чичо ти'], ['Кундрине', 'обувки'], ['Лескати', 'дървени'], ['Разпрати', 'скъсани']],
    lyrics: '1. Стига ми се, момне ле, навдигай, навдигай,\nбарем да не та познавам, познавам,\nбарем да не та познавам, познавам,\nчия си, мари, дощеря, дощеря\n\n2. Барем да не те познавам, познавам,\nчия си, мари, дощеря, дощеря,\nчия си, мари, дощеря, дощеря,\nчи носиш чуждо гиздило, гиздило\n\n3. Корпана ти е чичина, чичина,\nкундрине са ти лескати, лескати,\nкундрине са ти лескати, лескати,\nа пък от долу разпрати, разпрати' },
  { n: 42, title: 'Хайде, Яно', scores: [],
    gloss: [['Коло', 'хоро'], ['Да играмо', 'да играем'], ['Коньо', 'конят'], ['Да продамо', 'да продадем'], ['Кучо', 'къща'], ['Да певамо', 'да пеем']],
    lyrics: '1. Хайде, Яно, коло да играмо (хайде, Яно)\nХайде, Яно, хайде, душо, коло да играмо /х2\n\n2. Хайде, Яно, коньо да продамо (хайде, Яно)\nХайде, Яно, хайде, душо, коньо да продамо /х2\n\n3. Хайде, Яно, кучо да продамо (хайде, Яно)\nХайде, Яно, хайде, душо, кучо да продамо /х2\n\n4. Да продамо, само да играмо (хайде, Яно)\nДа продамо, Яно душо, само да играмо /х2\n\n5. Да играмо, само да певамо (хайде, Яно)\nХайде, Яно, хайде, душо, само да певамо /х2' },
  { n: 43, title: 'Тьовна е могла паднала', scores: [],
    gloss: [['Тьовна', 'тъмна'], ['Могла', 'мъгла'], ['Мьотна', 'мътна'], ['Текнала', 'течала'], ['Потен', 'път'], ['Сборкала', 'сбъркала'], ['Фанала', 'хванала'], ['Йотишла', 'отишла'], ['Кажите', 'кажете'], ['Немаме', 'нямаме']],
    lyrics: '1. Тьовна е могла паднала, /х2\nситна е роса роснала /х2\n\n2. Ситна е роса роснала, /х2\nмьотна е река текнала /х2\n\n3. Еница потен сборкала, /х2\nхайдушки потен фанала /х2\n\n4. Хайдушки потен фанала /х2\nи при хайдути йотишла /х2\n\n5. Хайдути, братя, там ли сте, /х2\nела ми потен кажите /х2\n\n6. Ние си сестра имаме, /х2\nпърво си любе немаме /х2' },
  { n: 44, title: 'Хубава си моя горо', scores: [],
    gloss: [['Жалее', 'страда'], ['Комуто', 'на/за когото'], ['Веч', 'вече'], ['Дорде', 'докато'], ['Заборави', 'забрави'], ['Буки', 'дървото бук'], ['Шуми', 'гори'], ['Понякогаш', 'понякога'], ['Всякогаш', 'всякога'], ['Кога', 'когато']],
    lyrics: '1. Хубава си, моя горо,\nмиришеш на младост,\nно вселяваш в сърцата ни\nсамо скръб и жалост\n\n2. Kойто веднъж те погледне\nтой вечно жалее,\nче не може под твоите\nсенки да изтлее\n\n3. A комуто стане нужда\nвеч да те остави,\nтой не може, дорде е жив,\nда те заборави\n\n4. Твойте буки и дъбове,\nтвойте шуми гъсти\nи цветята, и водите,\nагнетата тлъсти\n\n5. И божурът, и тревите,\nи твойта прохлада,\nвсичко, казвам, понякогаш\nкато куршум пада\n\n6. На сърцето, което е\nвсякогаш готово\nда поплаче, кога види\nв природата ново\n\n7. Кога види как пролетта\nстаростта изпраща\nи под студът, и под снегьт\nживот се захваща' },
  { n: 45, title: 'Ранила мома', scores: [],
    gloss: [['Ранила', 'рано тръгнала'], ['Причека', 'причака'], ['Со', 'с/със'], ['Бладжи', 'благи'], ['Думаше', 'говореше'], ['Лажовна', 'лъжлива'], ['Яз', 'аз']],
    lyrics: '1. Ранила мома за вода, джанъм, на чешма шарена\nна тая чешма шарена, джанъм, за бистра вода студена /х2\n\n2. Ранило лудо по нея, джанъм, на чешма шарена,\nтук да я стигне, настигне, джанъм, там да я лудо причека /х2\n\n3. Най си я лудо завари, джанъм, на чешма шарена,\nсо друго либе стоеше, джанъм, бладжи му думи думаше\nбладжи му думи думаше, джанъм,\nкитка от глава даваше\n\n4. Де гиди моме хубава, джанъм, хубава лажовна,\nзащо не си ми казала, джанъм, яз друго либе да любя /х2' },
  { n: 46, title: 'Девойко мари хубава', scores: ['notirani_pesni/score-046-1.png'],
    gloss: [['Бално', 'болка; тегоба; тежкотия']],
    lyrics: '1. Девойко мари хубава, девойко,\nсипи ми винце да пийна, девойко /х2\n\n2. Балното да си кажиме, девойко,\nчие бално по-множко, девойко /х2\n\n3. Моесо бално по-множко, девойко,\nче имам служба да служа, девойко /х2\n\n4. Моесо бално по-множко, юначе,\nче имам руба да правя, юначе /х2\n\n5. Моесо бално по-множко, девойко,\nче нема да се зомиме, девойко /х2' },
  { n: 47, title: 'Бре, Петрунко', scores: ['notirani_pesni/score-047-1.png'],
    gloss: [['Йодиме', 'ходиме'], ['Йоро', 'хоро'], ['Найдоме', 'намерихме'], ['Йос дол', 'отдолу']],
    lyrics: '1. Бре, Петрунко, мори малай-мо\nбре, Петрунко, малай моме\n\n2. Все йодиме, мори, по-бидо\nвсе йодиме по бидоме\n\n3. Нигде йоро, мори, не-найдо\nнигде йоро не найдоме\n\n4. Ваше село, мори, дор-трио\nваше село дор три йоро\n\n5. Първо йоро, мори, Петрунки\nпърво йоро, Петрункино\n\n6. Петрунчица, мори, йоро-во\nПетрунчица йоро води\n\n7. Йос дол иде, мори, лудо-мла\nйос дол иде лудо младо\n\n8. Не се хвана, мори, на-среда\nне се хвана на средата\n\n9. Най-се хвана, мори, на-тане\nнай-се хвана на танецо\n\n10. На танецо, мори, до-Петру\nна танецо до Петрунка\n\n11. С перчем коси, мори, китка-ро\nс перчем коси китка рони\n\n12. С нозе сили, мори, чехли-ка\nс нозе сили чехли каля' },
  { n: 48, title: 'Севдо, севдо, Севдалино', scores: [],
    gloss: [['Севда', 'любов'], ['На вечера', 'вечер'], ['Кога сакаш', 'когато искаш'], ['Дойди', 'ела'], ['Довадай', 'идвай'], ['Одайчето', 'стаята'], ['Малечко', 'малко'], ['Собира', 'събира'], ['Саб', 'само'], ['Двамина', 'двама']],
    lyrics: '1. Севдо, севдо, Севдалино, севдо росна детелино /x2\n\n2. Коя вечер да ти дойда, да ти дойда на вечера /x2\n\n3. Дойди, дойди кога сакаш, с дружина не довадай /x2\n\n4. Одайчето е малечко, то собира саб двамина /x2' },
  { n: 49, title: 'Шари мома', scores: ['notirani_pesni/score-049-1.png'],
    gloss: [['Шари/ла', 'оцветявам с различни шарки или рисувам различни шарки; изпъстрям'], ['Дума', 'говори'], ['Чорапьо', 'чорапе'], ['Халал', 'дадено от сърце'], ['Харам', 'нещо забранено, непозволено; срам']],
    lyrics: '1. Шари мома /x2\nшарила мома, де гиди джанам, шарен чорап /x2\n\n2. Хем го шари /x2\nхем го шари, де гиди джанам, хем му моме дума /x2\n\n3. Ой чорапьо, шарен чорап\nкато те шарам, де гиди джанам, кой ше те носи /х2\n\n4. Ако е ерген /x2\nако е ерген, де гиди джанам, халал да му е /x2\n\n5. Ако е женен /x2\nако е женен, де гиди джанам, харам да му е /x2' },
  { n: 50, title: 'Остана Радка', scores: [],
    gloss: [['Седемнасет', 'седемнайсет'], ['Бело', 'бяло'], ['Църно', 'черно'], ['Зажалила', 'заплакала, страдала'], ['Вели', 'казва, говори'], ['Любе', 'любим мъж или любима жена'], ['Мале', 'майко'], ['Думай', 'говори'], ['Мойно', 'моето'], ['Цела', 'цяла']],
    lyrics: '1. Остана Радка млада вдовица,\nна седемнасет години /x2\nБело си лице с църно забулила\nи за първо либе зажалила /x2\n\n2. Майка на Радка вели, говори,\nмълчи, бе Радко, не тъжи /x2\nТи си още млада хубавица,\nдруго любе ще си залюбиш /x2\n\n3. Радка на майка вели, говори,\nмълчи, бе мале, не думай /x2\nКато мойно либе друго нема\nнито в турско, ни в гяурско, /x2\nнито в цела Македония' },
  { n: 51, title: 'Гайдине свирят', scores: [],
    gloss: [['Хорищено', 'хоро'], ['каркель', 'навит на геврек, на спирала, около нещо'], ['Корши', 'води хорото, извивайки го']],
    lyrics: '1. Гайдине свирят на хорищено /x2\nХоро се вие на три каркеля /x2\n\n2. Порвоно хоро мома го води /x2\nМома го води, с китка го корши /x2\n\n3. Второно хоро юнак го води /x2\nЮнак го води, со сабя го корши /x2\n\n4. Третоно хоро старец го води /x2\nСтарец го води, с бастун го корши /x2' },
  { n: 52, title: 'Що ми е мило', scores: [],
    gloss: [['Ем', 'хем'], ['Во', 'в/във'], ['Варам', 'оставям на мира, не безпокоя'], ['Кепенците', 'дървени или ламаринени капаци на врата на магазин, витрина, прозорец'], ['Стоа', 'стоя'], ['Кога', 'когато'], ['Одат', 'ходят'], ['Сос', 'със/с'], ['Стомна', 'глинен съд с една дръжка, разширен в долната си част и стеснен при отвора, който е предназначен предимно за вода'], ['овой', 'този, тоя']],
    lyrics: '1. Що ми е мило, мило ем драго\nво Струга града, мамо, дюкян да имам /х2\nлеле, варай варай, моме Калино,\nво Струга града, мамо, дюкян да имам /х2\n\n2. На кепенците, мамо, да стоа,\nстружките моми, мамо, моми да гледам /х2\nлеле, варай, варай, моме Калино,\nстружките моми, мамо, моми да гледам /x2\n\n3. Кога на вода, вода ми одат,\nсос тия стомни, мамо, стомни шарени /x2\nлеле, варай, варай, моме Калино,\nсос тия стомни, мамо, стомни шарени /х2\n\n4. На овой извор, извор студени,\nтам да се с дружки, мамо, дружки соберот /x2\nлеле, варай, варай, моме Калино,\nтам да се с дружки, мамо, дружки соберот /х2' },
  { n: 53, title: 'Качи се, качи горе на Балкана', scores: ['notirani_pesni/score-053-1.png'],
    gloss: [],
    lyrics: '1. Како си мислиш да ме оставиш\nна кого, либе, на кого /x2\n\n2. Аз те оставам на мойна майка,\nна мойна, Гуне, на мойна /x2\n\n3. Качи се, качи горе на Балкана\nразгледай, Гуне, Якорудско /x2\n\n4. Там ке си видиш каква е магла\nпаднала, Гуне, легнала /x2\n\n5. Да не помислиш, че е от Бога\nпаднала, Гуне, легнала /x2\n\n6. Това са мойте тежки въздишки\nот мерак, Гуне, за тебе /x2\n\n7. Качи се, качи горе на балкана\nразгледай, Гуне, Якорудско /x2\n\n8. Там ке си видиш, каква е роса\nпаднала, Гуне, роснала /x2\n\n9. Да не помислиш, че е от Бога\nпаднала, Гуне, росналa /x2\n\n10. Това са мойте, дребни си сълзи\nот мерак, Гуне, за тебе /x2' },
  { n: 54, title: 'Кога зашумят шумите', scores: [],
    gloss: [],
    lyrics: '1. Кога зашумят шумите, буките /x2\nКога зашумят шумите,\nплачат за войводата, капетано /x2\n\n2. Кога по село пойдете, пойдете /x2\nКога по село пойдете,\nсо конйе да не тропате, ама тропате /x2\n\n3. Да не ви чуе майка ми, старата /х2\nДа не ви чуе майка ми,\nке ви пита за мене, ама за мене /х2\n\n4. Къде е син ми Костадин, /х2\nКостадин войводата, капетано /х2\n\n5. Син ти се майко ожени, ожени /х2\nСин ти се майко ожени,\nза една македонка, поробена /х2' },
  { n: 55, title: 'Македонско девойче', scores: [],
    gloss: [],
    lyrics: '1. Македонско девойче, китка шарена,\nво градинка раснала, (набрана) дар подарена\n\nПрипев: Дали има на овой бели свет,\nпо-убаво девойче от македонче\nНема, нема, не ке се се роди,\nпо-убаво девойче от македонче\n\n2. Кога песен запее, славей надпее,\nкога хоро заигра, сърце разигра\n\nПрипев: Дали има на овой бели свет,\nпо-убаво девойче от македонче\nНема, нема, не ке се се роди,\nпо-убаво девойче от македонче\n\n3. Кога коси разплете, коси коприна,\nлична си ми по-лична от самодива(самовила)\n\nПрипев: Дали има на овой бели свет,\nпо-убаво девойче от македонче\nНема, нема, не ке се се роди,\nпо-убаво девойче от македонче' },
  { n: 56, title: 'Кола слиза от планина', scores: [],
    gloss: [],
    lyrics: '1. Кола слиза от планина /х2\n\nПрипев: Чиби либи чок чок,\nсмута смута чебиле,\nСтанкеле роке дос,\nтеле копи, теле дос /х2\n\n2. Че кой беше у колата? /х2\n\nПрипев: Чиби либи чок чок,\nсмута смута чебиле,\nСтанкеле роке дос,\nтеле копи, теле дос /х2\n\n3. Рада беше у колата /х2\n\nПрипев: Чиби либи чок чок,\nсмута смута чебиле,\nСтанкеле роке дос,\nтеле копи, теле дос /х2\n\n4. Двама млади у колата /х2\n\nПрипев: Чиби либи чок чок,\nсмута смута чебиле,\nСтанкеле роке дос,\nтеле копи, теле дос /х2\n\n5. Та какво се додумая? /х2\n\nПрипев: Чиби либи чок чок,\nсмута смута чебиле,\nСтанкеле роке дос,\nтеле копи, теле дос /х2\n\n6. Та кога ли да се женат? /х2\n\nПрипев: Чиби либи чок чок,\nсмута смута чебиле,\nСтанкеле роке дос,\nтеле копи, теле дос /х2' },
  { n: 57, title: 'Отишла е бяла Яна', scores: [],
    gloss: [['Геран', 'дълбок кладенец, от който водата се вади с кофа, прикрепена на кобилица'], ['Менци', 'медни котли'], ['Де я', 'като я'], ['Харизвам', 'подарявам'], ['Ямурлук', 'мъжка горна дреха от дебел плат с форма на наметало с процепи за ръцете и с качулка'], ['Севда', 'любов']],
    lyrics: '1. Отишла е бяла Яна, отишла е на герана /х2\nС бели менци за водица, бистра вода да налее,\nросно цвете да полее, да полее /х2\n\n2. Де я видя малко момче, малко момче ширитаче /х2\nТо на Яна проговаря: Мари Яно, бела Яно,\nкитка имаш на челото, на челото /х2\n\n3. Дай я Яно харижи я, в ямурлука да я скрия /х2\nВ ямурлука да я скрия, севдата си да убия,\nсевдата си да убия, да убия /х2' },
  { n: 58, title: 'Пушка пукна', scores: ['notirani_pesni/score-058-1.png'],
    gloss: [],
    lyrics: '1. Пушка пукна, Гюле мой, пушка пукна, Гюле\nОй, Гюле мой, пушка пукна, Гюле /х2\n\n2. Та удари, Гюле мой, та удари, Гюле\nОй, Гюле мой, та удари, Гюле /х2\n\n3. Клето сърце, Гюле мой, клето сърце, Гюле\nОй, Гюле мой, клето сърце, Гюле /х2' },
  { n: 59, title: 'Шарена гайда', scores: ['notirani_pesni/score-059-1.png'],
    gloss: [['Чаршия', 'Търговска улица или център; пазар, тържище'], ['Изписана', 'нарисувана'], ['Нанизана', 'украсена'], ['Свирам', 'свиря'], ['Пеам', 'пея'], ['Играм', 'играя'], ['Цаня се', 'предлагам се да бъда нает (за определена работа)'], ['Долови', 'в доловете'], ['От дол', 'отдолу'], ['Попище', 'попът'], ['Кат', 'като'], ['Удри', 'удари'], ['Взема', 'взе']],
    lyrics: '1. От долната чаршия тръгнах с гайда шарена /х2\nПрипев: Шарена гайда изписана,\nсъс мъниста нанизана,\nсвирам, пеам, оро играм,\nдум-па, дум-па-па /х2\n\n2. На работа да ида и на гайда да свира /х2\nПрипев: Шарена гайда изписана,\nсъс мъниста нанизана,\nсвирам, пеам, оро играм,\nдум-па, дум-па-па /х2\n\n3. Цаних се у попа, да му паса гъските /х2\nПрипев: Шарена гайда изписана,\nсъс мъниста нанизана,\nсвирам, пеам, оро играм,\nдум-па, дум-па-па /х2\n\n4. Откара ги долови, дето трева не расте,\nдето вода не тече, дето слънце не пече\nПрипев: Шарена гайда изписана,\nсъс мъниста нанизана,\nсвирам, пеам, оро играм,\nдум-па, дум-па-па /х2\n\n5. От дол иде попище, върти очи кат плочи /х2\nПрипев: Шарена гайда изписана,\nсъс мъниста нанизана,\nсвирам, пеам, оро играм,\nдум-па, дум-па-па /х2\n\n6. Два шамара ми удри, гайдата ми я взема /х2\nПрипев: Шарена гайда изписана,\nсъс мъниста нанизана,\nсвирам, пеам, оро играм,\nдум-па, дум-па-па /х2' },
  { n: 60, title: 'Слънце се слега', scores: [],
    gloss: [['Зайде', 'залязва'], ['Дека', 'където'], ['Че', 'ще'], ['Ситен', 'дребен'], ['Терзии', 'шивачи'], ['Думая', 'говореха'], ['Погача', 'кръгъл домашно приготвен без квас хляб; пита']],
    lyrics: '1. Слънце се слега да зайде\nПрипев: Маро, Марие, ма-рие,\nпиле Марие, Мариеле-де\n\n2. Там дека слънце че зайде\nМаро, Марие, ма-рие,\nпиле Марие, Мариеле-де\n\n3. Тамо е равна, равничка\nМаро, Марие, ма-рие,\nпиле Марие, Мариеле-де\n\n4. На равничката - зелен бор\nМаро, Марие, ма-рие,\nпиле Марие, Мариеле-де\n\n5. Под бора - бистър кладенец\nМаро, Марие, ма-рие,\nпиле Марие, Мариеле-де\n\n6. До кладенеца - девойче\nМаро, Марие, ма-рие,\nпиле Марие, Мариеле-де\n\n7. Ситен си здравец виеше\nМаро, Марие, ма-рие,\nпиле Марие, Мариеле-де\n\n8. Едри си сълзи ронеше\nМаро, Марие, ма-рие,\nпиле Марие, Мариеле-де\n\nВерсия две:\n\n4. На равничката - два бора\nМаро, Марие, ма-рие,\nпиле Марие, Мариеле-де\n\n5. Под боровете - кладенец\nМаро, Марие, ма-рие,\nпиле Марие, Мариеле-де\n\n6. До кладенеца - терзии\nМаро, Марие, ма-рие,\nпиле Марие, Мариеле-де\n\n7. Те на Мария думая\nМаро, Марие, ма-рие,\nпиле Марие, Мариеле-де\n\n8. Да ни омеси, замеси\nМаро, Марие, ма-рие,\nпиле Марие, Мариеле-де\n\n9. Пухкава бяла погача\nМаро, Марие, ма-рие,\nпиле Марие, Мариеле-де' },
  { n: 61, title: 'Да се множи радостта', scores: ['notirani_pesni/score-061-1.png'],
    gloss: [['Зайде', 'залязва'], ['Найде', 'намира']],
    lyrics: '1. Слънце да пекне, да зайде,\nтрева росица да найде\nПрипев: Да се множи радостта в нашите сърца /х2\n\n2. Колкото класа в нивята,\nтолкова трепет в сърцата\nПрипев: Да се множи радостта в нашите сърца /х2\n\n3. Луна да пекне, да зайде,\nмомче момата да найде\nПрипев: Да се множи радостта в нашите сърца /х2\n\n4. Огън в огнище да пламне,\nгайда момчето да грабне\nПрипев: Да се множи радостта в нашите сърца /х2' },
  { n: 62, title: 'Кацнал бръмбър на трънка', scores: [],
    gloss: [],
    lyrics: '1. Кацнал бръмбар на трънка,\nпа захванал да дрънка,\nдочула го мушица,\nс примрела душица\n\n2. Слуша, слуша, прелете,\nбуйно хоро завърте,\nвидели ги комари,\nвсе ергени, все стари\n\n3. Погледали мухата,\nхареса им играта,\nПусти ергени, стари,\nвсеки му се прижени\n\n4. Кога слънце залезе,\nкавга страшна излезе,\nзатрещеха колове\nзазвънтеха ножове\n\n5. Уплаши се мухата,\nпа избега в гората,\nа комарите вилнеят,\nв бой се бият, кръв леят\n\n6. И никой не се сети,\nкак паякът се вести,\nтънка мрежа долови\nдо един ги излови' },
  { n: 63, title: 'Катерино моме, севда голема', scores: ['notirani_pesni/score-063-1.png'],
    gloss: [['Севда', 'любов'], ['Гидия', 'буен момък'], ['Пенджер', 'прозорец']],
    lyrics: '1. Катерино моме, севда голема /х2\nСевда голема, беля голема /х2\n\n2. Море що те майка все вечер кара /х2\nВсе вечер кара, все по вечеря /х2\n\n3. Дали вечеря не си сготвила /х2\nИли постеля не си постлала /х2\n\n4. Ой лудо, лудо, лудо гидийо /х2\nМене ме майка все вечер кара,\nвсе вечер кара, все зарад тебе\n\n5. На порти дойдеш, мирно не стоиш /х2\nПортите трошиш, мене да видиш /х2\n\n6. На пенджер дойдеш, мирно не стоиш /х2\nПенджере трошиш, мен да разрошиш /х2' },
  { n: 64, title: 'Севделино, детелино', scores: ['notirani_pesni/score-064-1.png'],
    gloss: [['Сукман', 'дълга женска дреха, подобна на рокля без ръкави, която се облича върху блуза'], ['Фустан', 'рокля'], ['Кондурки', 'обувки']],
    lyrics: '1. Севделино детелино /х2\nморе, море, море, мой, мой, Детелино /х2\n\n2. Кой ти купи герданчето /х2\nморе, море, море, мой, мой, герданчето /х2\n\n3. Кой ти купи сукманчето /х2\nморе, море, море, мой, мой, сукманчето /х2\n\n4. Кой ти купи коланчето /х2\nморе, море, море, мой, мой, коланчето /х2\n\n5. Кой ти купи фустанчето /х2\nморе, море, море, мой, мой, фустанчето /х2\n\n6. Кой ти купи кондурките /х2\nморе, море, море, мой, мой, кондурките /х2\n\n7. Купи ми ги лудо младо /х2\nморе, море, море, мой, мой, лудо младо /х2\n\n8. Кой целува той царува /х2\nморе, море, море, мой, мой, той царува /х2\n(Оригинал: Кой купува, той целува)\nморе, море, море, мой, мой, той целува' },
  { n: 65, title: 'Тудорче ле, либе ле', scores: [],
    gloss: [['Либило', 'обичало'], ['Кажало', 'казало'], ['Яз', 'аз'], ['Либя', 'обичам'], ['Присоних', 'присъних, сънувах'], ['Кога си се', 'когато си се'], ['Камен', 'камък'], ['Суйо', 'сухо'], ['Небо', 'небе']],
    lyrics: '1. Тудорче ле, либе ле, либе ле, ти си мене либило,\nти си мене либило, либило, та не си ми кажало\n\n2. Та не си ми кажало, кажало и яз тебе да либя,\nна сон си те присоних, присоних, ти до мене легнало\n\n3. Ти до мене легнало, легнало, яз до тебе заспало,\nкога си се разбудих, разбудих, студен камен до мене\n\n4. Студен камен до мене, до мене, суйо дърво зад мене,\nсуйо дърво зад мене, синьо небо над мене' },
  { n: 66, title: 'Лет летела пеперуда', scores: [],
    gloss: [],
    lyrics: '1. Лет летела пеперуда\nой да не вой, дай Боже слънце/дъжд\n\n2. На орачи и копачи\nой да не вой, дай Боже слънце/дъжд\n\n3. Като лети Бога моли\nой да не вой, дай Боже слънце/дъжд\n\n4. Да се роди жито, просо\nой да не вой, дай Боже слънце/дъжд\n\n5. Жито, просо и пшеница\nой да не вой, дай Боже слънце/дъжд' },
  { n: 67, title: 'Пеперуда лета', scores: [],
    gloss: [['Лета', 'лети'], ['Се мета', 'се мята'], ['Берекетен', 'плодороден']],
    lyrics: 'Пеперуда лета, по небе се мета\nда завали дъждец, ситен берекетен /х2\nДа се роди жито, жито едрозърно\nжито едрозърно, жито като злато' },
  { n: 68, title: 'Карамфилче, девойче', scores: [],
    gloss: [['Еле', 'най-вече, особено'], ['Кладило', 'слагало']],
    lyrics: '1. Карамфилче, девойче /х2\nГиди ягне галено, гиди моме малено\n\n2. Та еле се фалеше /х2\nГиди ягне галено, гиди моме малено\n\n3. Ти карамфил не носиш, на карамфил мерисаш\nГиди ягне галено, гиди моме малено\n\n4. В градината сам било, карамфил сам газило\nГиди ягне галено, гиди моме малено\n\n5. Карамфил сам газило, та за това мерисам\nГиди ягне галено, гиди моме малено\n\n6. Карамфилче, девойче /х2\nГиди ягне галено, гиди моме малено\n\n7. Та еле се фалеше /х2\nГиди ягне галено, гиди моме малено\n\n8. Ти ракия не пийеш, на ракия мерисаш\nГиди ягне галено, гиди моме малено\n\n9. Зелници съм кладило, ракия сам пущало\nГиди ягне галено, гиди моме малено\n\n10. Ракия сам пущало, та за това мерисам\nГиди ягне галено, гиди моме малено' },
  { n: 69, title: 'Митра делия', scores: [],
    gloss: [['Делия', 'буен човек; турски войник, който се занимава с грабежи и насилия'], ['Яхая', 'яхвам, яздя'], ['Играле', 'играли'], ['Грабиле', 'отвлекли'], ['Како що може', 'както може'], ['Реснато', 'който е с ресни'], ['Отнеле', 'отвели; отнесли'], ['Тепайте', 'убивайте']],
    lyrics: '1. Митра делия коня яхая\nХай Дири Дитмо, Бир Бири Джано\nконя яхая /х2\n\n2. В Милево село оро играле\nХай Дири Дитмо, Бир Бири Джано\nоро играле /х2\n\n3. На глава носи перо реснато\nХай Дири Дитмо, Бир Бири Джано\nперо реснато /х2\n\n4. Смиляна мома три танца води\nХай Дири Дитмо, Бир Бири Джано\nтри танца води\n\n5. Па я грабиле, Смиляна мома\nХай Дири Дитмо, Бир Бири Джано\nСмиляна мома /х2\n\n6. Па я отнеле в гора зелена\nХай Дири Дитмо, Бир Бири Джано\nв гора зелена /х2\n\n7. Викна Смиляна како що може\nХай Дири Дитмо, Бир Бири Джано\nкако що може /х2\n\n8. Олеле братя, до девет братя\nХай Дири Дитмо, Бир Бири Джано\nдо девет бракя /х2\n\n9. Ако видите Митра делия\nХай Дири Дитмо, Бир Бири Джано\nМитра Делия /х2\n\n10. Не го карайте, не го тепайте\nХай Дири Дитмо, Бир Бири Джано\nне го тепайте' },
  { n: 70, title: 'Добър вечер, малкай моме', scores: [],
    gloss: [['Одая', 'стая'], ['Враня', 'черен'], ['Яхъри', 'обори']],
    lyrics: '1. Добър вечер, малкай моме, гиздава девойко\nДал Бог добро, лудо младо, ма не те познавам\n\n2. Имате ли, малкай моме, одая за мене,\nи за мене, малкай моме, и за враня коня?\n\n3. Има, има, лудо младо, за теб ли да нема?\nЗа теб има, лудо младо, шарена одая\n\n4. За теб има, лудо младо, шарена одая,\nА за враня коня, лудо, белите яхъри\n\n5. Вечеря ще ти е, лудо, мойта медна уста,\nа постеля, лудо младо, мойта тънка снага\n\n6. Завивка ще ти е, лудо, мойта тъмна коса,\nвъзглавница, лудо младо, мойта десна ръка' },
  { n: 71, title: 'Бел ветер дуе', scores: [],
    gloss: [['Форли', 'хвърли']],
    lyrics: '1. Бел ветер дуе /х2\nГора люлее, планина вие\n\n2. Ситен дъжд лети /х2\nСнегове топи /х2\n\n3. Три реки текат /х2\nТри билки носят, три билки влекат\n\n4. Първана билка мома я форли,\nмома я форли, либе да дойде\n\n5. Вторана билка лудо я форли,\nлудо я форли, мома да дойде\n\n6. Третана билка старец я форли,\nстарец я форли, здраве да дойде' },
  { n: 72, title: 'Любили се', scores: [],
    gloss: [['Ним се чини', 'струва им се'], ['Сторила ги', 'превърнала ги']],
    lyrics: '1. Любили се, любили се двама луди млади,\nлюбили се двама луди млади\n\n2. Любили се, любили се у мала градина\nлюбили се у мала градина\n\n3. Ним се чини, ним се чини никой ги не види,\nним се чини, никой ги не види\n\n4. Видела ги, видела ги Гюра магесница\nвидела ги Гюра магесница\n\n5. Сторила ги, сторила, змия усойница,\nсторила ги змия усойница\n\n6. Омагьоса, омагьоса момче и девойче,\nомагьоса, момче и девойче\n\n7. Мома бега, мома бега у гора зелена,\nмомче бега у поле широко\n\n8. Момче бега, момче бега у поле широко,\nмома бега у гора зелена' },
  { n: 73, title: 'Шар планина', scores: ['notirani_pesni/score-073-1.png'],
    gloss: [['Пропаднала/разпукала/притури се', 'сринала се е, свлякла се е'], ['Потфати', 'да притисне (с тежест)'], ['Пущи', 'пусни'], ['Ке ме', 'ще ме'], ['Жали', 'оплаква, тъжи'], ['Пладне', 'обед/ Ден до пладне - много кратко време']],
    lyrics: '1. Пропаднала(разпукала/ притури се), пропаднала Шар планина,\nайде, пропаднала, пропаднала Шар планина\n\n2. Ми потфати, ми потфати три овчаря,\nайде, ми потфати, ми потфати три овчаря\n\n3. Първи овчар, първи очар й се моли,\nайде, пущи мене, пущи мене, Шар планино.\nИмам жена, имам жена ке ме жали,\nайде, имам жена, имам жене ке ме жали\n\n4. Втори овчар, втори овчар й се моли,\nайде, пущи мене, пущи мене, Шар планино.\nИмам сестра, имам сестра ке ме жали, айде,\nимам сестра, имам сестра ке ме жали\n\n5. Трети овчар, трети овчар й се моли,\nайде, пущи мене, пущи мене, Шар планино.\nИмам майка, имам майка ке ме жали, айде,\nимам майка, имам майка ке ме жали\n\n6. Проговаря, проговаря Шар планина\nАйде, жена жали, жена жали ден до пладне.\nСестра жали, сестра жали до венчило,\nайде, майка жали, майка жали чак до гроба.' },
  { n: 74, title: 'Моме оди по ливаде', scores: [],
    gloss: [['Оди', 'ходи'], ['Бекяр', 'ерген'], ['Вели', 'говори'], ['Застой/зачекай', 'спри, застани на едно място'], ['Реча', 'кажа'], ['Чевли', 'чехли'], ['Кье', 'ще'], ['Носам', 'нося'], ['Немам', 'нямам'], ['Сакано', 'любено, обичано'], ['Яз', 'аз'], ['Можко', 'мъжко']],
    lyrics: '1. Моме оди по ливаде /х2\nЛивада е росна, леле, ливада зелена\n\n2. А по нея лудо младо, а по нея бекярчето,\nи на моме вели, леле, и на моме дума\n\n3. Постой моме, почекай ме, застой моме, зачекай ме,\nнещо да ти кажа, моме, нещо да ти реча\n\n4. Да ти купам жълти чевли, /х2\nдали кье ги носиш, леле, дали кье ги носиш?\n\n5. Купи лудо, купи младо, купи, мойе мило бекярче,\nзащо да не носам, леле, немам що да носам\n\n6. Дали имаш, лудо младо, дали имаш бекяр сакано?\nИли да те зема, леле, или да те зема?\n\n7. Имам лудо, имам младо, имам си яз бекяр сакано,\nи можко детенце, леле, и можко детенце' },
  { n: 75, title: 'От кога се е, мила моя майно льо', scores: ['notirani_pesni/score-075-1.png'],
    gloss: [['Майно льо', 'майко, майчице'], ['Зазорила', 'изгряла'], ['От де', 'откъдето']],
    lyrics: '1. От кога се е, мила моя майно льо, зора зазорила,\nмила моя майно льо, зора зазорила\n\n2. От кога се, мила моя майно льо, хоро заиграло,\nмила моя майно льо, хоро заиграло\n\n3. Брат до братя, мила моя майно льо, момък до момата,\nмила моя майно льо, момък до момата\n\n4. Мислите им, мила моя майно льо, като ясно слънце,\nмила моя майно льо, като ясно слънце\n\n5. Косите им, мила моя майно льо, като гъста гора,\nмила моя майно льо, като гъста гора\n\n6. Дрехите им, мила моя майно льо, като пъстра черга,\nмила моя майно льо, като пъстра черга\n\n7. От де минат, мила моя майно льо, цветенца посяват,\nмила моя майно льо, цветенца посяват' },
  { n: 76, title: 'Рой, рой', scores: [],
    gloss: [['Пауне', 'пауни'], ['Форкат', 'летят; хвърчат'], ['Думат', 'говорят'], ['Земам', 'взема']],
    lyrics: '1. Пауне форкат /х2\nрой, рой, рой, росни ми, руйна девойко,\nросни ми, руйна девойко\n\n2. В сини градини /х2\nрой, рой, рой, росни ми, руйна девойко,\nросни ми, руйна девойко\n\n3. На смокиня паун /х2\nрой, рой, рой, росни ми руйна девойко,\nросни ми, руйна девойко\n\n4. Пауне думат /х2\nрой, рой, рой, росни ми руйна девойко,\nросни ми, руйна девойко\n\n5. За тебе съм дошъл /х2\nрой, рой, рой, росни ми руйна девойко,\nросни ми, руйна девойко\n\n6. Тебе да те земам /х2\nрой, рой, рой, росни ми руйна девойко,\nросни ми, руйна девойко\n\n7. Дечица да (си) имаме, /х2\nрой, рой, рой, росни ми руйна девойко,\nросни ми, руйна девойко' },
  { n: 77, title: 'Мори Рада носи кован колан', scores: [],
    gloss: [['Травке', 'треви'], ['Билке', 'билки'], ['Църен/черен оман', 'вид билка'], ['Све йе', 'всичко е'], ['Муже', 'мъже'], ['Жене', 'жени'], ['Зарезаше', 'зарязваха'], ['Аризвам', 'подарявам'], ['Разпопия', 'отказват се от расото, от длъжността на поп'], ['Полагало', 'подлъгало'], ['Мужье', 'мъже'], ['Я', 'Аз'], ['Нечу', 'не искам'], ['Свите', 'всички'], ['Узмем', 'да взема'], ['Ял', 'или'], ['Дор до', 'чак до']],
    lyrics: '1. Мори Рада носи кован колан,\nРада носи, леле, кован колан /х2\n\n2. У колана травке, билке,\nтравке, билке, леле, църни оман /х2\n\n3. Мори, све йе живо подмамила,\nсве йе живо, леле, подмамила /х2\n\n4. И женено, неженено,\nи женено, леле, неженено /х2\n\n5. Мори, муже жене зарезаше\nи деца си, леле, аризаше /х2\n\n6. Мори, попове се разпопия,\nпопария, леле, изкудите /х2\n\n7. Пуста Рада омайница,\nсве йе живо, леле, подмамила\n\nВариант 2:\n\n1. Море, Рада носи кован колан,\nРада носи, море, кован колан,\nу колана травке, билке,\nтравке, билке, църни омань\n\n2. Се е живо полагало,\nи женено, неженено\nПа говори бела Рада:\nЛуди ли сте вие, мужье\n\n3. Я ви нечу свите узмем,\nя че узмем ял Стояна,\nял Стояна, ял Ивана\n\n4. Стоян има ситна стока,\nИван има църни очи\nСитна стока - ситна роса,\nцърни очи дор до гроба' },
  { n: 78, title: 'Позаспа ли, ягодо', scores: [],
    gloss: [['Кумичка', 'кума'], ['Морава', 'червена'], ['Думаше', 'говореше'], ['Върлина', 'дълъг, окастрен прът']],
    lyrics: '1. Позаспа ли, ягодо /х2\nне съм още, черешко, чакам либе трендафил /х2\n\n2. Той на гости отиде /х2\nу кума босилека, у кумичка тинтява /х2\n\n3. Сладко яли, пили са /х2\nкомар с гайда свиреше, теменужка пееше /х2\n\n4. Слънчоглед се смееше /х2\nте-ме-нуж-ке мо-ра-ва, що-си-тол-коз-мъ-нич-ка\n\n5. А пък тя му думаше /х2\nпогледни са, жълтурко, тънка, дълга върлино /х2' },
  { n: 79, title: 'Вият две Калинки', scores: [],
    gloss: [['Ружа', 'роза']],
    lyrics: '1. Вият две Калинки,\nхем под пътя, хем над пътя,\nвият дор две моми\n\n2. Вият две Калинки,\nнаучи се, малко момче,\nвият дор две моми\n\n3. Вият две Калинки,\nмалко момче, бело ларче\nвият дор две моми\n\n4. Вият две Калинки,\nда си бере жълта ружа\nвият дор две моми\n\n5. Вият две Калинки,\nжълта ружа, ран босилек\nвият дор две моми\n\n6. Вият две Калинки,\nзавържи го, малка мома\nвият дор две моми\n\n7. Вият две Калинки,\nзавържи го, улови го\nвият дор две моми\n\n8. Вият две Калинки,\nче го върза с руси коси\nвият дор две моми\n\n9. Вият две Калинки,\nче го бие в бело лице\nвият дор две моми\n\n10. Вият две Калинки,\nтебе пее малка мома\nвият дор две моми' },
  { n: 80, title: 'Заведи ме, Ялино', scores: ['notirani_pesni/score-080-1.png'],
    gloss: [['Кинето; Джуменя', 'вид билки']],
    lyrics: '1. Заведо ме, Ялино, заведи ме,\nзаведи ме, Ялино, горе долу /х2\n\n2. Горе долу, Ялино, горе долу,\nгоре долу, Ялино, из полето /х2\n\n3. Да йовидем, Ялино, да йовидем\nда йовидем, Ялино, и кинето /х2\n\n4. И кинето, Ялино, и кинето,\nи кинето, Ялино, и джуменя /х2\n\n5. И джуменя, Ялино, и джуменя,\nи джуменя, Ялино, пшеницата /х2' },
  { n: 81, title: 'Слънчице мило мамино', scores: ['notirani_pesni/score-081-1.png'],
    gloss: [['Ниделя', 'неделя'], ['Двори', 'дворове'], ['Гидия', 'буен момък'], ['Думаше', 'говореше'], ['Орото', 'хорото'], ['Убава', 'хубава']],
    lyrics: '1. Слънчице мило мамино,\nя изгрей, слънце /х2 - изгрей\nРано ми рано в ниделя,\nта да огрееш, слънчице,\nв бащини двори широки\nи трите бара високи\n\n2. Болен ми Пейо лежеше,\nПейо ми, млада гидия,\nмайка му вода носеше,\nи си на Пейо думаше:\nЯ, стани, Пейо, да видиш\nтвоите верни другари\n\n3. Твоите верни другари,\nорото водят и питат,\nкъде е Пейо да дойде,\nорото да си поведе,\nдо лична мома убава\nубава мома, гиздава' },
  { n: 82, title: 'Грей ми, ясно слънце', scores: ['notirani_pesni/score-082-1.png'],
    gloss: [['Рипни', 'скокни; скачай']],
    lyrics: '1. Стани, стани, малай моме /х2\nЧе изгрея ясно слънце /х2\nОтвори си ти очи си /х2\nПосрещни го ти с усмивка,\nпа запей му таз песничка\n\nПрипев: Грей ми, грей ми, ясно слънце,\nизпечи ми ти житата, /х2\nДа ми игра в радост сърце,\nс хляб да влизам у хората /х2\n\n2. Стани, стани, малай моме, /х2\nче по пладне ще е късно,\nще изпуснеш му милувка,\nотвори си ти очи си /х2\nПа рипни и изиграй му\nръченица, па запей му\n\nПрипев: Грей ми, грей ми, ясно слънце,\nизпечи ми ти житата, /х2\nДа ми игра в радост сърце,\nс хляб да влизам у хората /х2' },
  { n: 83, title: 'Твойте очи, Лено мори', scores: ['notirani_pesni/score-083-1.png'],
    gloss: [['Воденски', 'от град Воден'], ['Се', 'са'], ['Язка', 'аз искам'], ['Изедам', 'изям'], ['Помини', 'мине'], ['Севда', 'любов'], ['Излези', 'излезе'], ['Леринско', 'от град Лерин'], ['Симид', 'питка от бяло брашно'], ['Костурско', 'от град Костур'], ['Кутивче', 'кутийка'], ['Отвора', 'отворя'], ['Снага', 'човешко тяло'], ['Тенка', 'тънка'], ['Ем', 'хем']],
    lyrics: '1. Твойте очи, Лено мори,\nводенски череши се,\nдай ми ги на мене, язка да ги изедам,\nмерак, Лено мори, мерак да ми помини,\nсевда, севда моя, севда да ми излези\n\n2. Твойто лице, Лено мори,\nлеринско симидче е,\nдай ми го на мене, язка да го изедам,\nмерак, Лено мори, мерак да ми помини,\nсевда, севда моя,севда да ми излези\n\n3. Твойто усте, Лено мори,\nкостурско кутивче е,\nдай ми го на мене, язка да го отвора,\nмерак, Лено мори, мерак да ми помини,\nсевда, севда моя, севда да ми излези\n\n4. Твойта снага, Лено мори,\nтенка ем висока е,\nдай ми я на мене, язка да я прегърнам,\nмерак, Лено мори, мерак да ми помини,\nсевда, севда моя, севда да ми излези' },
  { n: 84, title: 'Прошета се Йовка', scores: [],
    gloss: [['Прошета', 'разходи'], ['Доле', 'долу'], ['Низ', 'из'], ['По ней', 'по нея'], ['Иде', 'идва, ходи'], ['Ага', 'почетно звание, което българите по време на турското робство дават на високопоставен турчин'], ['Че те земам', 'ще те взема'], ['Че те правам', 'ще те направя'], ['Бела', 'бяла'], ['Була', 'туркиня; женена жена'], ['Турчам', 'потурчвам'], ['Гърчам', 'погърчвам'], ['Яз', 'аз']],
    lyrics: '1. Прошета се Йовка кумановка,\nай мори, горе доле, Йовка низ туй поле,\nай мори, низ туй поле,(Кумановско) Лятифово\n\n2. Загубила Йовка кован гердан,\nай мори, загубила Йовка кован гердан,\nай мори, по ней иде Лятиф ага\n\n3. Не шетай се, Йовке Кумановке,\nай мори, горе доле, Йовке, низ туй поле\nай мори, низ туй поле Идризово (Кумановско)\n\n4. Че те земам, Йовке, яз за жена,\nай мори, че те правам, Йовке, бела була\nай мори, бела була Лятифова\n\n5. Не се турчам, Лятиф, не се гърчам,\nай мори, И яз си имам, Лятиф, мерак по друг,\nай мори, мерак по друг, Костадина' },
  { n: 85, title: 'Снощи съм, мале, сън сънувало', scores: ['notirani_pesni/score-085-1.png', 'notirani_pesni/score-085-2.png'],
    gloss: [['Двори', 'дворове'], ['Кабаделия', 'наперен, известен, конте'], ['Че', 'ще'], ['Нишан', 'дар, подарък'], ['Зулум', 'пакост, безчинство, насилие'], ['Да чини', 'да прави, да върши'], ['Да граби', 'да вземе']],
    lyrics: '1. Снощи съм, мале, сън сънувало, е мале ле,\nсън сънувало, сън бълнувало, е мале ле /х2\n\n2. Че сме имали къщи високи, е мале ле,\nкъщи високи, двори широки, е мале ле /х2\n\n3. А на дворове дърво високо, е мале ле,\nа на дървото славей ми пее, е мале ле,\nславей ми пее, пее говори, е мале ле,\n\n4. Че да ни дойдат три луди млади, е мале ле\nтри луди млади кабаделии, е мале ле /х2\n\n5. Първи че дойде нишан да даде, е мале ле,\nВтори че дойде зулум да чини, е мале ле /х2\n\n6. Трети че дойде мой първо либе, е мале ле\nмой първо либе мене да граби, е мале ле /х2' },
  { n: 86, title: 'Слушай, малка моме', scores: [],
    gloss: [['Бунар', 'кладенец'], ['Тамо', 'там'], ['Върли', 'жестоки, безжалостни'], ['Биле омайниче', 'вид билка,растение']],
    lyrics: '1. Слушай, малка моме, какво ще ти кажа,\nутре сутрин рано, преди да се съмне /х2\n\nПрипев: Ръм търъ дъръ /х3\nдъй ръ\nРъм търъ дъръ/ х2\nръм тири ди дай ра\n\n2. Ела на бунаро, тамо ще те чакам,\nнещо ще ти кажа преди изгрев слънце /x2\n\nПрипев: Припев: Ръм търъ дъръ /х3\nдъй ръ\nРъм търъ дъръ/ х2\nръм тири ди дай ра\n\n3. Слушай, млади момко, страх ме е да дойда,\nпреди да се съмне, преди изгрев слънце /x2\n\nПрипев: Припев: Ръм търъ дъръ /х3\nдъй ръ\nРъм търъ дъръ/ х2\nръм тири ди дай ра\n\n4. На бунаро рано самодиви идват,\nхоро да играят, магии да правят /x2\n\nПрипев:Припев: Ръм търъ дъръ /х3\nдъй ръ\nРъм търъ дъръ/ х2\nръм тири ди дай ра\n\n5. Върли самодиви зло ще ни направят,\nмагия ще сторят, двама ще разделят /x2\n\nПрипев: Припев: Ръм търъ дъръ /х3\nдъй ръ\nРъм търъ дъръ/ х2\nръм тири ди дай ра\n\n6. Ела утре вечер в нашата градинка,\nкитки да береме, двама да се кичим /x2\n\nПрипев: Припев: Ръм търъ дъръ /х3\nдъй ръ\nРъм търъ дъръ/ х2\nръм тири ди дай ра\n\n7. Тамо има, момко, биле омайниче,\nнего ще береме и ще се плениме /х2\n\nПрипев: Ръм търъ дъръ /х3\nдъй ръ\nРъм търъ дъръ/ х2\nръм тири ди дай ра' },
  { n: 87, title: 'Хай да идем, Яно', scores: ['notirani_pesni/score-087-1.png'],
    gloss: [['Шам шамия', 'забрадка'], ['Фустан', 'рокля'], ['Папуци', 'обувки'], ['Да са пукат', 'да се ядосват, пръскат от яд'], ['Душманите', 'враговете, неприятелите']],
    lyrics: '1. Хай да идем, Яно, хай да идем\nхай да идем, Яно, долу в Неврокопа /2х\n\n2. Там ще ти купя, Яно, там ще ти купя,\nтам ще ти купя, Яно, шам шамия,\nшам шамия Яно, копринен фустан\n\n3. Kопринен фустан, Яно, копринен фустан,\nкопринен фустан, Яно, жълти папуци,\nти да ги носиш, Яно, аз да те гледам\n\n4. Ти да ги носиш, Яно, ти да ги носиш,\nти да ги носиш, Яно аз да те гледам,\nда са пукат, Яно, душманите' },
  { n: 88, title: 'Яно ле, Янчице', scores: ['notirani_pesni/score-088-1.png'],
    gloss: [['Главила', 'сгодила'], ['Собута', 'събота'], ['Ниделя', 'неделя'], ['Пладне', 'обед'], ['Главена', 'сгодена'], ['Форлила', 'хвърлила'], ['Порстен', 'пръстен'], ['Ворнала', 'върнала'], ['Оти', 'защо'], ['Кога', 'когато'], ['Ма', 'ме'], ['Галям', 'обичам, харесвам']],
    lyrics: '1. Яно ле, Янчице, майка си Янка главила\nЯно ле, Янчице, собута срещу ниделя\n\n2. Яно ле, Янчице, по пладне ходи главена\nЯно ле, Янчице, след пладне китка форлила\n\n3. Яно ле, Янчице, след пладне китка форлила\nЯно ле, Янчице, след пладне порстен ворнала\n\n4. Яно ле, Янчице, майка си Янка питаше\nЯно ле, Янчице, оти си порстен ворнала\n\n5. Мале ле, майчице, кога си мене главила\nмале ле, майчице, оти не си ма питала\n\n6. Мале ле, майчице, оти не си ма питала\nмале ле, майчице, дали го галям или не' },
  { n: 89, title: 'Пий, момче, вино', scores: [],
    gloss: [['Латино', 'вид цвете'], ['Цървено', 'червено'], ['Селче', 'село']],
    lyrics: '1. Пий момче, пий момче, пий момче вино,\nтънка латино, вино цървено\n\n2. Пинео писеле, пинео писеле,\nтънка латино, вино цървено\n\n3. Мойто е лице ле, мойто е лице,\nтънка латино, вино цървено\n\n4. Препродадено ле, препродадено,\nтънка латино, вино цървено\n\n5. За друго момче ле, за друго момче,\nтънка латино, вино цървено\n\n6. За друго селче ле, за друго селче,\nтънка латино, вино цървено' },
  { n: 90, title: 'Елено, моме, Елено', scores: [],
    gloss: [['Пластя', 'събирам сено, като го правя на купи']],
    lyrics: '1. Елено, моме, Елено /x2\nне гази сено зелено /x2\n\n2. Че са го момци косили /х2\nи млади булки пластили /х2\n\nАх, Елено моме, Елено,\nне гази сено зелено\n\n3. Еленините очички /x2\nте светят като звездички /х2\n\n4. Еленините клепачи /х2\nкойто ги види, все плаче /х2\n\nАх, Елено моме, Елено,\nне гази сено зелено' },
  { n: 91, title: 'Ела се вие, превива', scores: [],
    gloss: [],
    lyrics: '1. Ела се вие, превива, мома се с рода, леле, прощава.\nПрощавай, мамо и татко и ти ле рода, леле, голема.\n\n2. Досега съм ви слушала, от сега свекър, леле, свекърва.\nДосега съм ви слушала, от сега свекър, леле, свекърва.\n\n3. До сега братец и сестри, от сега зълви, леле, девери.\nЕла се вие, превива, мома се с рода, леле, прощава.' },
  { n: 92, title: 'Кате, Кате', scores: [],
    gloss: [],
    lyrics: '1. Кате Кате, Кате, Катерино, леле /х2\nКате, Кате, Кате Катерино, леле\nКате, Катерино\n\n2. Кат се жениш, Кате, мен да вземеш, леле, Кат се жениш,\nКате, мен да вземеш, леле,\nКате мен да вземеш\n\n3. Да не вземеш, Кате, даскалчето, леле , да не вземешm,\nКате, даскалчето, леле,\nКате даскалчето\n\n4. Даскалчето, Кате, къща нема,\nлеле, Даскалчето, Кате, къща нема,\nлеле, Кате къща нема\n\n5. Ке те вози, от село на село, леле\nКе те лаят, Кате кучинята,\nлеле Кате, кучинята\n\n6. Ке си викат, Кате, селаните,\nлеле, вампир оди, Кате, из селото,\nлеле, Кате из селото' },
  { n: 93, title: 'Сьоднал ми е млад терзие', scores: [],
    gloss: [['Сьоднал', 'седнал'], ['Терзия', 'шивач'], ['Абаджия', 'шивач, производител на аба (дебел вълнен плат)'], ['Фустан', 'рокля'], ['От дол', 'отдолу'], ['Гльода', 'гледа'], ['Кому', 'на кого'], ['Малкай', 'малка'], ['Да са пукат', 'да се ядосват, пръскат от яд'], ['Душманине', 'враговете, неприятелите'], ['Мойне', 'моите'], ['Твойне', 'твоите']],
    lyrics: '1. Сьоднал ми е млад терзие, млад терзие абаджие,\nта льо крои, та льо шие момин фустан геверзиен\n\n2. От дол иде малка мома,та льо върви, та льо гльода\nТа льо върви, та льо гльода,та льо пита млад терзие\n\n3. Кому шиеш момин фустан, момин фустан геверзиен?\nМлад терзие отговаря - теб го шия, малкай моме\n\n4. Теб го шия,малкай моме, да се кичиш, да се гиздиш,\nда се кичиш, да се гиздиш, да са пукат душманине\n\n5. Да се кичиш, да се гиздиш, да са пукат душманине,\nда са пукат душманите,хем и мойне, хем и твойне' },
  { n: 94, title: 'Густа ми магла паднала', scores: [],
    gloss: [['Терзийе', 'шивач'], ['Ньег', 'него']],
    lyrics: '1. Густа ми магла паднала, море,\nгуста ми магла паднала\n\n2. На туй ми рамно Косово, море,\nна туй ми рамно Косово\n\n3.Нища се живо не види, море,\nнища се живо не види\n\n4. До йедно дърво високо, море,\nдо йедно дърво високо\n\n5. Под ньег ми седи терзийе, мори,\nпод ньег ми седи терзийе\n\n6. Оно ми шийе йелече, море,\nоно ми шийе йелече\n\n7. Колко су дзвездо на небо, море,\nтолко су шарке на нйега' },
  { n: 95, title: 'Рай Кольо', scores: [],
    gloss: [['Обагрям', 'нашарвам; оцветявам в червено'], ['Раснали', 'растяли'], ['Кърви', 'кръв'], ['Дет', 'където'], ['Цървена', 'червена']],
    lyrics: '1. Станал ми рано Рай Кольо,\nв пуста градина Рай Кольо,\nпетел пропял на Рай Кольо,\nславей бе, славей Рай Кольо.\nПесен да пееш, живот да викнеш,\nче теб градина пуста те чака /х2\n\n2. Запял си Райко, Рай Кольо,\nв пуста градина Рай Кольо,\nпесен запял и Рай Кольо,\nза тихия вятър Рай Кольо.\nЗа чиста водица, цветна росица\nза първо му либе, румено й лице /х2\n\n3. Пуста градина Рай Кольо,\nсе събудила Рай Кольо /х2\nсе обагрила Рай Кольо. И по средата две рози извили,\nстройни раснали, черна и бела\n\n4. Искал ми Райко, Рай Кольо,\nчерна да махне Рай Кольо,\nстъбло избързал Рай Кольо,\nбързо да дърпа Рай Кольо.\nЧерна му роза ръка пробола,\nкърви потекли, роза не мърда /х2\n\n5. Петел му рекъл, Рай Кольо,\nурок да помни Рай Кольо,\nпомазал Райко, Рай Кольо,\nдвете си рози, Рай Кольо.\nРози пропели, на Райко простили,\nтой усмихнал се и разплакал се /х2\n\n6. А кърви текли, Рай Кольо,\nи дет падали, Рай Кольо,\nнова ми роза, Рай Кольо,\nцървена роза, Рай Кольо.\nПетел пропял му, с любов да помни,\nрозите, Райко, един корен са /х2' },
  { n: 96, title: 'Изгреяла ясна звезда', scores: [],
    gloss: [],
    lyrics: '1. Изгреяла ясна звезда\n\nПрипев: Бир налам, бир салам\nсалам, салам, къзларъм /х2\nГел видо, гел недо, гел ми, гел ми, гел!\n\n2. То не било ясна звезда\n\nПрипев: Бир налам, бир салам\nсалам, салам, къзларъм /х2\nГел видо, гел недо, гел ми, гел ми, гел!\n\n3. Най ми било малка мома\n\nПрипев: Бир налам, бир салам\nсалам, салам, къзларъм /х2\nГел видо, гел недо, гел ми, гел ми, гел!\n\n4. Малка мома Ангелина\n\nПрипев: Бир налам, бир салам\nсалам, салам, къзларъм /х2\nГел видо, гел недо, гел ми, гел ми, гел!' },
  { n: 97, title: 'Заиграле, мамо, девойчиня', scores: [],
    gloss: [['Сербез', 'дързък, смел; горделив, надут; проклет човек'], ['Гайтан', 'веге - дебели, черни вежди'], ['Верверица', 'катерица'], ['Натрчаше', 'надигра; изпревари; надбяга'], ['Сви', 'всички'], ['Бекяр', 'ерген'], ['Засакуйе', 'поиска; залюби'], ['Чини', 'прави;действай']],
    lyrics: '1. Заиграле мамо девойчиня,\nдевойчиня мори селянчиня /х2\nОро води мамо сербез Митра,\nчорбаджийска, мори, домакинска /х2\n\nПрипев: Син-син-сингалин зайче тропа,\nопа трака трак налане щрака,\nопа и-хуху, оро игра\nрай-та-рай, трай-та-рай, танац води\n\n2. Бело лице, мамо, набелила,\nмедни уста, мори, нацървила /х2\nГайтан-веге, мамо, навегила,\nрамну снагу, мори, променила /х2\n\nПрипев: Син-син-сингалин зайче тропа,\nопа трака трак налане щрака,\nопа и-хуху, оро игра\nрай-та-рай, трай-та-рай, танац води\n\n3. Оро игра како верверица,\nснагу кърши како йеребица /х2\nС църни очи мене погледнуйе,\nс медни уста ми се насменуйе /х2\n\nПрипев: Син-син-сингалин зайче тропа,\nопа трака трак налане щрака,\nопа и-хуху, оро игра\nрай-та-рай, трай-та-рай, танац води\n\n4. Натрчаше, мамо, сви бекяри,\nсербез Митру, мори, погледаше /х2\nКой како го, мори, погледнуйе,\nод мерак, мори, засакуйе /х2\n\nПрипев: Син-син-сингалин зайче тропа,\nопа трака трак налане щрака,\nопа и-хуху, оро игра\nрай-та-рай, трай-та-рай, танац води\n\n5.Чини, се пак, мамо, ожени ме,\nожени ме, мори, одоми ме /х2\nДа гу зему, мамо, сербез Митру,\nчорбаджийску, мори, домакинску /х2\n\nПрипев: Син-син-сингалин зайче тропа,\nопа трака трак налане щрака,\nопа и-хуху, оро игра\nрай-та-рай, трай-та-рай, танац води' },
  { n: 98, title: 'Писмо ти е дошло', scores: [],
    gloss: [['аджи', 'от хаджия (човек, който е бил на Божи гроб)'], ['Будима града', 'старо име на Будапеща'], ['Долетея', 'долетяха'], ['Голуба', 'гълъба'], ['Носея', 'носеха'], ['Левото', 'лявото']],
    lyrics: '1. Писмо ти е дошло, мила аджи Ленко, бре джанъм,\nот Будима града, мила аджи Ленко, бре джанъм,\nот първо ти либе\n\n2.От там долетея, мила аджи Ленко, бре джанъм,\nдва сиви голуба, мила аджи Ленко, бре джанъм,\nдва сиви голуба\n\n3. Писмо ти носея, мила аджи Ленко, бре джанъм,\nпод левото крилце, мила аджи Ленко, бре джанъм,\nпод левото крилце' },
  { n: 99, title: 'Де има вода студена, Радо ле', scores: [],
    gloss: [],
    lyrics: '1. Де има вода студена, Радо ле /x2\nда идем да се удавим, Радо ле,\nда идем да се - удавим\n\n2. Де има дърво високо, Радо ле /х2\nда идем да се обесим, Радо ле,\nда идем да се - обесим\n\n3. Де има моми юбави, Радо ле /х2\nда идем да се оженим, Радо ле,\nда идем да се - оженим\n\n4. Де има вино румено, Радо ле /х2\nда идем да се опием, Радо ле,\nда идем да се - опием\n\nВариант 2:\n\n1. Де има вода студена, Радо ле /x2\nда идем да се удавим, Радо ле,\nда идем да се - омием\n\n2. Де има дърво високо, Радо ле /х2\nда идем да го прегърнем, Радо ле,\nда идем да го - прегърнем\n\n3. Де има моми юбави, Радо ле /х2\nда идем да се оженим, Радо ле,\nда идем да се - оженим\n\n4. Де има вино румено, Радо ле /х2\nда идем да се опием, Радо ле,\nда идем да се - опием' },
  { n: 100, title: 'Горо ле, горо', scores: [],
    gloss: [],
    lyrics: '1. Горо ле, горо /х2\nгоро ле, горо, горо зелена /х2\nИмаш ли горо /х2\nИмаш ли горо, вода студена /х2\n\n2. Горо ле, горо /х2\nгоро ле, горо, горо зелена /х2\nИмаш ли горо /х2\nИмаш ли горо, вода студена /х2\n\n3. Горо ле, горо /х2\nгоро ле, горо, горо зелена /х2\nимаш ли горо /х2\nИмаш ли горо славей да пее\nславей да пее мен да засмее' },
  { n: 101, title: 'Горо ле, горо зелена', scores: ['notirani_pesni/score-101-1.png'],
    gloss: [['Ногите', 'краката']],
    lyrics: '1. Горо ле, горо зелена, горо ле,\nимаш ли вода студена, горо ле?\n\nИмаш ли вода студена, горо ле\nда си умия лицесо , горо ле? /х2\n\n2. Горо ле, горо зелена, горо ле,\nимаш ли сенка дебела, горо ле?\n\nИмаш ли сенка дебела, горо ле\nда ми почине сърцето, горо ле /х2\n\n3. Горо ле, горо зелена, горо ле,\nимаш ли трева зелена, горо ле?\n\nИмаш ли трева зелена, горо ле\nда ми починат ногите, горо ле /х2\n\n4. Горо ле, горо зелена, горо ле\nимаш ли диви самодиви, горо ле?\n\nИмаш ли диви самодиви, горо ле\nми откраднат душата, горо ле /х2\n\nВариант 2:\n\n4. Горо ле, горо зелена, горо ле\nимаш ли диви самодиви, горо ле?\n\nИмаш ли диви самодиви, горо ле\nда ми зарадват душата, горо ле /х2' },
  { n: 102, title: 'Две невести тикври брали', scores: ['notirani_pesni/score-102-1.png'],
    gloss: [['туй', 'там'], ['котрляво', 'дебело'], ['диви вепре', 'див глиган']],
    lyrics: '1. Две невести тикви брали, бре /х2\nДве невести тикви брали, де бре де, тикви брали, де /х2\n\n2. Дека брали, там заспали, бре /х2\nДека брали, там заспали, де бре де, там заспали, де /х2\n\n3. Погледа ги стари свекър, бре /х2\nПогледа ги стари свекър, де бре де, стари свекър, де /х2\n\n4. Две невести мързеливи, бре /x2\nДве невести мързеливи, де бре де, станувайте, де /2\n\nМакендонски вариант\n\n1. Две невесте тикве брале, бре /х2\nдве невесте тикве брале, бре, бре, бре, тикве брале бре /х2\n\n2. Kуде брале туй заспале, бре /х2\nкуде брале туй заспале, бре бре бре, там заспале бре /х2\n\n3. Свекрва ги разбудила бре /х2\nОй, невесте мрзеливке, бре бре бре, ай стануйте бре/х2\n\n4. Невесте се разбуделе, бре /х2\nпа почнале да се карат, бре бре бре, па збориле бре /х2\n\n5.Прва вика, ой свекрво, бре\nой свекрво котрляво, бре бре бре, котрляво бре /х2\n\n6. Друга вика, ой ти свекре, бре /х2\nОй ти свекре, диви вепре, бре бре бре, диви вепре бре /х2' },
  { n: 103, title: 'Петруно пиле шарено', scores: ['notirani_pesni/score-103-1.png'],
    gloss: [],
    lyrics: '1. Петруно, пиле шарено /х2\nде гиди ягне галено /х2\n\n2. Петрунините очици /х2\nте чинат шапа жълтици /х2\n\n3. Петруно, пиле шарено /x2\nзащо си толкоз убаво /x2\nОт Бога ли си паднало или си в градинка никнало?\n\n3. Лудо ле лудо та младо /х2\nНе съм от Бога паднало, нито съм в градинка никнало\n\n5. И мене майка родила /х2\nи мене като и тебе /х2\n\n6. Кога ме мама родила /х2\nв градина се е сдобила /х2\n\n7. За топола се йе държала /х2\nкъм яболка йе гледала /x2\n\n8. Затуй съм тънка висока, /х2\nзатуй съм бeла, цървена /х2' },
]
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export const PESNOPOIKA_SOURCE = 'http://gabchik.com/pesnopoika.html'

// THE DIALECT DICTIONARY — the songbook's 437 footnotes (dialect word → standard Bulgarian), folded
// from all 103 songs into one deduplicated map. This IS the book decoding itself; folded here it becomes
// the reusable Strandzha/Balkan dialect decoder, the meaning-side dual of toGlagolitic's script-side.
// Keys are lowercased; values are the standard-Bulgarian sense as the collector glossed it. HONEST: this
// is dialect→standard normalization WITHIN Bulgarian (and a few Turkisms/Macedonisms), not translation
// between languages, and the senses are the collector's, kept verbatim. Pure, deterministic, zero tokens.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export const DIALECT_GLOSSARY: Record<string, string> = {
  'абаджия': 'шивач, производител на аба (дебел вълнен плат)', 'ага': 'почетно звание, което българите по време на турското робство дават на високопоставен турчин', 'аджи': 'от хаджия (човек, който е бил на Божи гроб)',
  'алтънена': 'златна', 'аляна': 'червена', 'аризвам': 'подарявам',
  'арни': 'хубави', 'байнева': 'на батко', 'байно': 'по-стар брат; бате; батко; бай',
  'бално': 'болка; тегоба; тежкотия', 'барем': 'поне', 'бегало': 'бягало',
  'бекяр': 'ерген; неженен', 'бела': 'бяла', 'белилце': 'помада за придаване бял цвят на лицето, за избелване на кожата или за гримиране',
  'бело': 'бяло', 'берекетен': 'плодороден', 'биле омайниче': 'вид билка,растение',
  'билке': 'билки', 'бладжи': 'благи', 'бостан': 'място, засадено с дини и пъпеши',
  'бубайко': 'татко', 'будима града': 'старо име на Будапеща', 'буки': 'дървото бук',
  'була': 'туркиня; женена жена', 'булче': 'булка', 'бунар': 'кладенец',
  'варам': 'оставям на мира, не безпокоя', 'вели': 'говори', 'верверица': 'катерица',
  'веч': 'вече', 'взема': 'взе', 'во': 'в/във',
  'воденски': 'от град Воден', 'ворнала': 'върнала', 'вракяше': 'връщаше',
  'враня': 'черен', 'всякогаш': 'всякога', 'върли': 'жестоки, безжалостни',
  'върлина': 'дълъг, окастрен прът', 'върше': 'клон', 'га': 'ги',
  'гайле': 'грижа', 'гайтан': 'плетен шнур за украса на народна носия', 'галям': 'обичам, харесвам',
  'гемия': 'лодка', 'геран': 'дълбок кладенец, от който водата се вади с кофа, прикрепена на кобилица', 'гергеф': 'рамка за везане',
  'геч': 'късно', 'гидия': 'буен момък', 'гиздило': 'накит, премяна',
  'главена': 'сгодена', 'главени': 'сгодени', 'глави се; оглавям се': 'сгодявам се',
  'главила': 'сгодила', 'главя се': 'женя се; сгодявам', 'гльода': 'гледа',
  'годинчица': 'години', 'голем': 'голям', 'голуба': 'гълъба',
  'госкье': 'гости', 'грабиле': 'отвлекли', 'гранки': 'клони',
  'гърчам': 'погърчвам', 'да граби': 'да вземе', 'да играмо': 'да играем',
  'да певамо': 'да пеем', 'да продамо': 'да продадем', 'да са пукат': 'да се ядосват, пръскат от яд',
  'да чини': 'да прави, да върши', 'дал ме личе за...': 'дали ставам за...', 'двамина': 'двама',
  'двори': 'дворове', 'де що': 'където', 'де я': 'като я',
  'дека': 'където', 'делия': 'буен човек; турски войник, който се занимава с грабежи и насилия', 'дено': 'където',
  'дет': 'където', 'джанъм': 'моя душа', 'диви вепре': 'див глиган',
  'довадай': 'идвай', 'дойди': 'ела', 'доле': 'долу',
  'долетея': 'долетяха', 'долови': 'в доловете', 'дома': 'вкъщи',
  'дор до': 'чак до', 'дорде': 'докато', 'дощеря': 'дъщеря',
  'дрънкая': 'свиреха', 'дума': 'говори', 'думай': 'говори',
  'думат': 'говорят', 'думаше': 'говореше', 'думая': 'говореха',
  'душманине': 'враговете, неприятелите', 'душманите': 'враговете, неприятелите', 'еле': 'най-вече, особено',
  'ем': 'хем', 'жалее': 'страда', 'жали': 'оплаква, тъжи',
  'жалиш': 'оплакваш', 'жене': 'жени', 'заборави': 'забрави',
  'забурила': 'забравила', 'загалил': 'залюбил, обикнал', 'заглавило': 'сгодило',
  'зажалила': 'заплакала, страдала', 'зазорила': 'изгряла', 'зайде': 'залязва',
  'зарезаше': 'зарязваха', 'засакуйе': 'поиска; залюби', 'застой': 'спри, застани на едно място',
  'затърнено': 'преградено; заградено с преграда', 'зачекай': 'спри, застани на едно място', 'збор': 'дума',
  'збореше': 'говореше', 'зборуйе': 'говори', 'зеде': 'взе',
  'земам': 'взема', 'зулум': 'пакост, безчинство, насилие', 'играле': 'играли',
  'играм': 'играя', 'играя': 'играеха', 'идат': 'отидат',
  'иде': 'идва, ходи', 'изгоре': 'изгоря', 'изгоро': 'възлюбена; любима',
  'изедам': 'изям', 'излези': 'излезе', 'изписана': 'нарисувана',
  'изпиша': 'нарисувам', 'имая': 'имахме', 'йов': 'във',
  'йогледало': 'огледало', 'йодиме': 'ходиме', 'йолдаши': 'спътници',
  'йоро': 'хоро', 'йос дол': 'отдолу', 'йотишла': 'отишла',
  'кабаделия': 'наперен, известен, конте', 'кад я': 'когато аз', 'каде': 'къде',
  'кажало': 'казало', 'кажем': 'кажа', 'кажите': 'кажете',
  'како': 'както', 'како що може': 'както може', 'калдъръм': 'настилка на двор или улица, направена от обли камъни',
  'калофер': 'вид подправка', 'камен': 'камък', 'карагюзлийка': 'черноока',
  'каркель': 'навит на геврек, на спирала, около нещо', 'карпуз': 'диня', 'кат': 'като',
  'ке ме': 'ще ме', 'кепенците': 'дървени или ламаринени капаци на врата на магазин, витрина, прозорец', 'кинето; джуменя': 'вид билки',
  'кладило': 'слагало', 'ключен': 'ключ', 'кога': 'когато',
  'кога сакаш': 'когато искаш', 'кога си се': 'когато си се', 'коло': 'хоро',
  'кому': 'на кого', 'комуто': 'на/за когото', 'кондурки': 'обувки',
  'коньо': 'конят', 'копринарка': 'коприна', 'корпана': 'кърпа',
  'корши': 'срещу; насреща', 'костурско': 'от град Костур', 'котрляво': 'дебело',
  'кудя (кудеше)': 'коря, укорявам; клеветя', 'кузум': 'драга, мила', 'кумичка': 'кума',
  'кундрине': 'обувки', 'кутивче': 'кутийка', 'кучо': 'къща',
  'къделя': 'валмо, развлачена вълна, която се слага на хурката и се преде с вретено', 'кърви': 'кръв', 'кърши': 'счупва',
  'късая': 'късаха', 'кье': 'ще', 'ла': 'оцветявам с различни шарки или рисувам различни шарки; изпъстрям',
  'лавнаха': 'заляха', 'лажовна': 'лъжлива', 'латино': 'вид цвете',
  'левото': 'лявото', 'леринско': 'от град Лерин', 'лескати': 'дървени',
  'лета': 'лети', 'либило': 'обичало', 'либя': 'обичам',
  'ливаде': 'ливади, поляни', 'лицесо': 'лицето', 'любам': 'любя',
  'любе': 'любим мъж или любима жена', 'ма': 'ме', 'майно льо': 'майко, майчице',
  'малай': 'малка', 'мале': 'майко', 'малечко': 'малко',
  'малкай': 'малка', 'меже': 'жени, които ходят на седенки', 'менихме': 'разменихме',
  'менци': 'медни котли', 'могла': 'мъгла', 'можко': 'мъжко',
  'мойе': 'мое', 'мойне': 'моите', 'мойно': 'моето',
  'момине': 'момите', 'момино': 'на момите', 'момково': 'на момците',
  'морава': 'червена', 'море': 'употребява се най-често заедно с обръщение или в позицията на обръщение, като го подчертава (Море войводо; Море пиле; Мори Рада и тн.)', 'мори': 'употребява се най-често заедно с обръщение или в позицията на обръщение, като го подчертава (Море войводо; Море пиле; Мори Рада и тн.)',
  'муже': 'мъже', 'мужье': 'мъже', 'мьотна': 'мътна',
  'на вечера': 'вечер', 'на кого': 'на когото', 'навдигам': 'самозабравям; повишавам самочувствието си',
  'надалеко': 'далеч', 'надоле': 'надолу', 'найде': 'намери',
  'найдов': 'намерих', 'найдоме': 'намерихме', 'найдох': 'намерих',
  'нанизана': 'украсена', 'наричам': 'предопределям бъдещето', 'натрчаше': 'надигра; изпревари; надбяга',
  'натъкмено': 'подредено, нагласено', 'не ща': 'не искам', 'небо': 'небе',
  'нема': 'няма', 'немам': 'нямам', 'немаме': 'нямаме',
  'нечу': 'не искам', 'ниделя': 'неделя', 'низ': 'из',
  'ним се чини': 'струва им се', 'нишан': 'дар, подарък', 'ногите': 'краката',
  'носам': 'нося', 'носея': 'носеха', 'ньег': 'него',
  'обагрям': 'нашарвам; оцветявам в червено', 'ових дена': 'тези дни', 'овой': 'този, тоя',
  'оглавям': 'женя се; сгодявам', 'одайчето': 'стаята', 'одат': 'ходят',
  'одая': 'стая', 'оди': 'ходи, отива', 'одил': 'ходил',
  'одила': 'ходила', 'оладя': 'охладя', 'оро': 'хоро',
  'орото': 'хорото', 'от де': 'откъдето', 'от дол': 'отдолу',
  'отвора': 'отворя', 'оти': 'защо', 'отнеле': 'отвели; отнесли',
  'очинки': 'очи', 'палешник': 'желязната част на плуга, която разорава почвата', 'папуци': 'обувки',
  'пауне': 'пауни', 'пеам': 'пея', 'пева': 'пее',
  'пенджер': 'прозорец', 'песму': 'песен', 'песничица': 'песен',
  'пладне': 'обед/ Ден до пладне - много кратко време', 'пластя': 'събирам сено, като го правя на купи', 'по ней': 'по нея',
  'погача': 'кръгъл домашно приготвен без квас хляб; пита', 'погльоднеш': 'погледнеш', 'полагало': 'подлъгало',
  'половина': 'в човешкото тяло - кръстът', 'помини': 'мине', 'поноч': 'полунощ',
  'понякогаш': 'понякога', 'попище': 'попът', 'попрелкине': 'седенки',
  'порстен': 'пръстен', 'посакала': 'поискала', 'посьоднеш': 'поседнеш',
  'потен': 'път', 'потфати': 'да притисне (с тежест)', 'почекай': 'почакай',
  'преко': 'отвъд', 'префърли': 'прехвърля', 'приключи': 'заключи',
  'прилега': 'прилича; подхожда; отива', 'присоних': 'присъних, сънувах', 'притури се': 'сринала се е, свлякла се е',
  'причека': 'причака', 'проводя': 'изпратя', 'продумаш': 'проговориш',
  'пропаднала': 'сринала се е, свлякла се е', 'прошета': 'разходи', 'пруодих': 'пратих, изпратих',
  'пръстенот': 'пръстенът', 'пущи': 'пусни', 'разглавям': 'развалям годеж',
  'разпопия': 'отказват се от расото, от длъжността на поп', 'разпрати': 'скъсани', 'разпукала': 'сринала се е, свлякла се е',
  'ракие': 'ракия', 'рала': 'от рало, инструмент', 'ранила': 'рано тръгнала',
  'раснали': 'растяли', 'реснато': 'който е с ресни', 'реча': 'кажа',
  'рипам': 'скачам; прескачам', 'рипна': 'скачам; прескачам', 'рипни': 'скокни; скачай',
  'роба': 'дълга свободна домашна дреха с широки ръкави', 'руен': 'за течност — буен, пенлив, изобилен', 'ружа': 'роза',
  'руйно': 'за течност — буен, пенлив, изобилен', 'ручам': 'да ям', 'ручек': 'храна; ястие',
  'саб': 'само', 'сайвант': 'подслон, навес, сушина', 'сакам': 'искам; обичам',
  'сакано': 'любено, обичано', 'сбират': 'събират', 'сборкала': 'сбъркала',
  'све йе': 'всичко е', 'сви': 'всички', 'свирам': 'свиря',
  'свите': 'всички', 'се': 'са', 'се мета': 'се мята',
  'севда': 'любов', 'седемнасет': 'седемнайсет', 'седнам': 'седна',
  'селче': 'село', 'сербез': 'дързък, смел; горделив, надут; проклет човек', 'симид': 'питка от бяло брашно',
  'ситен': 'дребен', 'слюбнице': 'годежари', 'снага': 'човешко тяло',
  'со': 'с/със', 'собира': 'събира', 'собута': 'събота',
  'согледуйе': 'гледа; оглежда се', 'сос': 'със/с', 'спийе': 'спи',
  'спремай': 'подготвяй; приготвяй', 'стоа': 'стоя', 'стойе': 'стои',
  'стомна': 'глинен съд с една дръжка, разширен в долната си част и стеснен при отвора, който е предназначен предимно за вода', 'стомнето': 'стомната', 'сторила ги': 'превърнала ги',
  'суйо': 'сухо', 'сукман': 'дълга женска дреха, подобна на рокля без ръкави, която се облича върху блуза', 'сърцесо': 'сърцето',
  'сьоднал': 'седнал', 'та': 'те', 'тамо': 'там',
  'твойне': 'твоите', 'теби': 'тебе', 'текнала': 'течала',
  'тельове': 'струни', 'тенка': 'тънка', 'тепайте': 'убивайте',
  'терзии': 'шивачи', 'терзийе': 'шивач', 'терзия': 'шивач',
  'травке': 'треви', 'траво': 'трева', 'туй': 'там',
  'турчам': 'потурчвам', 'тьовна': 'тъмна', 'у чичове бееме': 'бяхме на гости на чичо',
  'убава': 'хубава', 'убаво': 'хубаво', 'удайеш': 'сгодяваш; сгодява',
  'удая': 'сгодяваш; сгодява', 'удри': 'удари', 'узмем': 'да взема',
  'умиеш': 'измиеш', 'устай': 'ставай', 'устинки': 'устни',
  'фанала': 'хванала', 'фаная': 'хванаха', 'фати': 'хвана',
  'форкат': 'летят; хвърчат', 'форли': 'хвърли', 'форлила': 'хвърлила',
  'фустан': 'рокля', 'халал': 'дадено от сърце', 'харам': 'нещо забранено, непозволено; срам',
  'харизвам': 'подарявам', 'хорищено': 'хоро', 'хурка': 'специално пригодена дълга пръчка, върху която се закрепва къделя вълна и др. при ръчно предене',
  'цаня се': 'предлагам се да бъда нает (за определена работа)', 'цела': 'цяла', 'цървена': 'червена',
  'цървено': 'червено', 'църен': 'вид билка', 'църно': 'черно',
  'чардак': 'висока покрита тераса на къща', 'чаршия': 'Търговска улица или център; пазар, тържище', 'че': 'ще',
  'че ме': 'ще ме', 'че те земам': 'ще те взема', 'че те правам': 'ще те направя',
  'чевли': 'чехли', 'черен оман': 'вид билка', 'чи': 'че',
  'чие': 'кое/ на кого', 'чини': 'прави;действай', 'чичина': 'на чичо ти',
  'чорапьо': 'чорапе', 'чувам': 'пазя, грижа се', 'шам шамия': 'забрадка',
  'шари': 'оцветявам с различни шарки или рисувам различни шарки; изпъстрям', 'шекеряна': 'сладка; захарна', 'шетал': 'обикалял, скитал',
  'шуми': 'гори', 'щиш да': 'ще', 'що те нема': 'защо те няма',
  'я': 'Аз', 'ябанджия': 'другоселец, преселник', 'яз': 'аз',
  'язка': 'аз искам', 'ял': 'или', 'ямурлук': 'мъжка горна дреха от дебел плат с форма на наметало с процепи за ръцете и с качулка',
  'яхая': 'яхвам, яздя', 'яхъри': 'обори' }

// Decode a dialect line to standard Bulgarian: each word whose lowercase form is glossed is replaced by
// the FIRST sense of its gloss (a concise normalization; the full gloss is available via glossDialect).
// Word-aware over Cyrillic; punctuation and unglossed words pass through unchanged. Reversible only by the
// book — decoding loses the dialect colour, which is why the original PESNOPOIKA is saved beside this.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function decodeDialect(text: string): string {
  return text.split(/([^\p{L}\p{M}'’-]+)/u).map((tok) => {
    const gloss = DIALECT_GLOSSARY[tok.toLowerCase()]
    if (!gloss) return tok
    return gloss.split(/[;,/]| или /)[0].trim() // the first sense
  }).join('')
}

// List the dialect words a text uses, each with the collector's full standard-Bulgarian gloss, in order
// of first appearance, deduplicated — the song's footnotes recovered for any text. Reuses DIALECT_GLOSSARY.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function glossDialect(text: string): { term: string; standard: string }[] {
  const seen = new Set<string>()
  const out: { term: string; standard: string }[] = []
  for (const tok of text.split(/[^\p{L}\p{M}'’-]+/u)) {
    const key = tok.toLowerCase()
    if (!key || seen.has(key)) continue
    const gloss = DIALECT_GLOSSARY[key]
    if (gloss) { seen.add(key); out.push({ term: tok, standard: gloss }) }
  }
  return out
}

// ── A self-translating system between any tongues, in realtime ──────────────────────────────────────────
// Every tongue is a lexicon keyed to a shared PIVOT — the content-address of the meaning. Translating from
// tongue A to tongue B routes each unit through the pivot (A → pivot → B), so an unseen pair auto-derives from
// the pivot ALONE, with no pairwise A→B dictionary — the self-translating property. The repo already proves
// it: translateVerse(ref, lang) is a pivot translator (the ref is the meaning, ocs/bg/en the surfaces), and
// decodeDialect routes a dialect through standard Bulgarian. Deterministic, zero tokens, client-side, realtime.
// HONEST: this is LEXICAL/transfer translation (unit substitution through an interlingua), NOT semantic MT —
// a unit with no pivot entry passes through unchanged, and that remainder is the measured gap (not all is
// transliterated ⟹ not all is fused). Seeded from the repo's own data — the tri-lingual scripture (verse
// pivot) and the Balkan dialect glossary (word pivot) — and open to ANY tongue registered against the pivot.
/** A pivot lexicon: pivot-id → { tongue → surface form }. The pivot is the meaning; the surfaces are tongues. */
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export type PivotLexicon = Record<string, Record<string, string>>
/** Build the seed pivot lexicon from the repo's existing parallel data — verse-level and word-level pivots. */
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function pivotLexicon(): PivotLexicon {
  const lex: PivotLexicon = {}
  for (const v of CHURCH_SLAVONIC_SCRIPTURE) lex[`verse:${v.ref}`] = { ocs: v.ocs, bg: v.bg, en: v.en, ...(MULTILINGUAL_SCRIPTURE[v.ref] ?? {}) }
  for (const [term, gloss] of Object.entries(DIALECT_GLOSSARY)) {
    const standard = gloss.split(/[;,/]| или /)[0].trim() // the first sense — the pivot meaning
    const key = `word:${standard}`
    lex[key] = { ...(lex[key] ?? { bg: standard }), dialect: term } // standard BG ↔ the Balkan dialect surface
  }
  return lex
}
/** The tongues the pivot lexicon currently spans (it generalises to any tongue registered against the pivot). */
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function pivotTongues(lex: PivotLexicon = pivotLexicon()): string[] {
  const tongues = new Set<string>()
  for (const surfaces of Object.values(lex)) for (const tongue of Object.keys(surfaces)) tongues.add(tongue)
  return [...tongues].sort()
}
/** Translate text from one tongue to another by routing each known unit through the pivot — A → pivot → B,
 *  no pairwise dictionary. Whole-text (verse) match first, else unit-by-unit (word). Returns the translated
 *  text with the coverage as exact integers (mapped / total); unmapped units pass through (the honest gap). */
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function selfTranslate(text: string, from: string, to: string, lex: PivotLexicon = pivotLexicon()): { text: string; mapped: number; total: number; derived: boolean } {
  const bySurface: Record<string, Record<string, string>> = {} // tongue → (surface → pivot-id)
  for (const [pivot, surfaces] of Object.entries(lex)) {
    for (const [tongue, surface] of Object.entries(surfaces)) (bySurface[tongue] ??= {})[surface.trim().toLowerCase()] = pivot
  }
  const whole = bySurface[from]?.[text.trim().toLowerCase()] // a whole-text (verse) pivot match
  if (whole && lex[whole]?.[to] !== undefined) return { text: lex[whole][to], mapped: 1, total: 1, derived: true }
  let mapped = 0, total = 0
  const out = text.split(/([^\p{L}\p{M}'’-]+)/u).map((tok) => {
    if (!/\p{L}/u.test(tok)) return tok // punctuation/space — not a translatable unit
    total++
    const pivot = bySurface[from]?.[tok.toLowerCase()]
    const target = pivot !== undefined ? lex[pivot]?.[to] : undefined
    if (target !== undefined) { mapped++; return target }
    return tok // the honest gap — unregistered, passes through unchanged
  }).join('')
  return { text: out, mapped, total, derived: mapped > 0 }
}

// The two documented strata of the dialect, applied as a modest classifier (Stoykov, Българска
// диалектология). DOCUMENTED: (a) PALATAL — the Rup/Strandzha soft т/д→к/г and retained soft ж/ч/ш that
// produce госкье (=гости), кaделкье, пукайе; (b) TURKISM — Ottoman loanwords (Turkish geç → геч "late").
// The Turkism list is curated from the book's own glosses; the palatal test detects the кь/гь shift. Else
// 'dialect' (archaic/regional Slavic). HONEST: a heuristic naming the two strata, not a per-word etymology.
const DIALECT_TURKISMS = new Set<string>([
  'геч', 'ага', 'бекяр', 'бунар', 'бостан', 'барем', 'гайтан', 'аба', 'абаджия', 'мусафир', 'мусафирийе',
  'йолдаш', 'йолдаши', 'севда', 'севдо', 'севдалино', 'кьошк', 'чешма', 'дюкян', 'хаир', 'хаирлия',
  'демек', 'таман', 'кат', 'бакър', 'сахан', 'тепсия', 'кован', 'делия', 'юзда', 'алтън', 'алтънена',
])
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function dialectStratum(term: string): 'turkism' | 'palatal' | 'dialect' {
  const t = term.toLowerCase()
  if (DIALECT_TURKISMS.has(t)) return 'turkism'
  if (/кь|гь|кje|гje|кье|гье|жг|шк[ьяюе]/u.test(t)) return 'palatal'
  return 'dialect'
}

// Verse structure: split a song's lyrics into its numbered verses ("1. … 2. …"). If a song has no verse
// numbers (a through-composed refrain song), the whole lyric is one verse. The verse markers are the
// collector's; this just reads them. Returns trimmed verse texts.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function verses(lyrics: string): string[] {
  const parts = lyrics.split(/\n(?=\s*\d+\.\s)/).map((v) => v.trim()).filter(Boolean)
  return parts.length ? parts : [lyrics.trim()]
}

// Refrain detection: the lines a song repeats. Two documented signals — (a) an explicit repeat marker the
// book writes (/x2, /х2, (2), х2), and (b) a line that recurs verbatim. Returns the repeated lines and the
// count of explicit markers. Pure text analysis; no audio, no notation.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function refrains(lyrics: string): { repeated: string[]; markers: number } {
  const markers = (lyrics.match(/\/\s*[хx]\s*\d|\(\s*2\s*\)|\b[хx]2\b/giu) || []).length
  const counts = new Map<string, number>()
  for (let line of lyrics.split('\n')) {
    line = line.replace(/^\s*\d+\.\s*/, '').replace(/\/\s*[хx]\s*\d.*$/i, '').trim()
    if (line.length > 3) counts.set(line, (counts.get(line) || 0) + 1)
  }
  const repeated = [...counts.entries()].filter(([, c]) => c > 1).map(([line]) => line)
  return { repeated, markers }
}

// AKSAK — Bulgarian uneven meter, decoded to its documented core: every meter is an additive sequence of
// SHORT (2) and LONG (3) beats. Priority: Добри Христов first analysed it (1913); Bartók named it
// "Bulgarian rhythm" (1938) in honour of Hristov and Stoin; Brăiloiu renamed it "aksak" (1951, Turkish
// aksak = "limping"). HONEST: aksak is PAN-BALKAN/Anatolian, NOT a sealed national possession nor "in the
// blood of the nation" (Hristov's nationalist framing, flagged). These are the meter templates, reusable;
// the songbook's per-song meter lives in the score images, which are not parsed here — no meter is assigned
// to a song from text alone. Pure, deterministic, zero tokens.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export const AKSAK: Record<string, number[]> = {
  pravo: [2, 2],                          // 4 — the plain (even) horo, for contrast
  paydushko: [2, 3],                      // 5
  ruchenitsa: [2, 2, 3],                  // 7
  elenomome: [2, 2, 1, 2],               // 7 (variant)
  daichovo: [2, 2, 2, 3],                // 9
  kopanitsa: [2, 2, 3, 2, 2],            // 11 (gankino)
  bucimis: [2, 2, 2, 2, 3, 2, 2],        // 15
}
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function aksak(name: string): number[] { return AKSAK[name] ?? [] }
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function aksakBeats(name: string): number { return aksak(name).reduce((s, b) => s + b, 0) }

// PROVENANCE — the honest documented-vs-legend layer, per song, from verified research. `kind`:
// 'authored' (a known poet/composer — sung as folk but NOT anonymous), 'traditional' (documented
// anonymous folk), or 'uncertain' (not resolved). Only researched songs are listed; the rest default to
// traditional-unattributed (which is "not individually verified here", NOT a positive claim of anonymity).
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export type Provenance = { kind: 'authored' | 'traditional' | 'uncertain'; region?: string; genre?: string; note: string }
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export const PROVENANCE: Record<number, Provenance> = {
  1: { kind: 'traditional', region: 'Странджа', note: 'нестинарка/странджанка; нестинарството е UNESCO (2009) ОРТОДОКСАЛЕН обред (св. Константин и Елена, с. Българи) — „непрекъсната тракийско-дионисиева приемственост“ е ЛЕГЕНДА (хипотеза на Хурмузиадис, 1873; Danforth я скобира)' },
  44: { kind: 'authored', genre: 'възрожденска', note: 'НЕ е фолклор: текст Любен Каравелов (1875, сп. „Знание“), музика Георги Горанов — често се пее като анонимна народна' },
  53: { kind: 'traditional', region: 'Пирин/Разлог (несигурно)', genre: 'хайдушка?', note: 'НЕ е Ботев — честа грешка с „Хаджи Димитър“ заради „Балкана“' },
  54: { kind: 'traditional', region: 'Македония', genre: 'освободителна', note: 'македоно-освободителен цикъл (Костадин); възможно авторска-пофолклоризирана' },
  55: { kind: 'authored', region: 'Македония (Битоля/Вардар)', note: 'композирана от Йонче Христовски (1960-те) — НЕ е стара народна; авторството е безспорно, спорна е само идентичностната рамка БГ–С.Македония' },
  58: { kind: 'traditional', region: 'Пирин', genre: 'хайдушка', note: 'Илинденски цикъл (Белица, Кара Злати); БНТ т. II „Хайдушки песни“ №196' },
  60: { kind: 'traditional', genre: 'жътварска', note: '„Слънце се слега да зайде“ — жътварски репертоар' },
  61: { kind: 'uncertain', genre: 'наздравица/сватбена?', note: 'не е открита в фолклорните корпуси — вероятно модерна авторска/локална благословия, непотвърдено' },
  62: { kind: 'authored', region: 'Шоплук/Граово', note: 'Павел Сираков довършил/композирал семеен фрагмент; пее се като анонимна народна' },
  66: { kind: 'traditional', genre: 'обредна (дъжд)', note: 'Пеперуда — обред за дъжд; рефрен „Дай, Боже, дъжд“' },
  67: { kind: 'traditional', genre: 'обредна (дъжд)', note: 'Пеперуда/Додола — обред за дъжд' },
  69: { kind: 'uncertain', region: 'Македония (вероятно)', genre: 'юнашка', note: 'делия = юнак; вероятно македонски юнашки репертоар, конкретната песен непотвърдена' },
  73: { kind: 'traditional', region: 'Македония (Шар)', note: 'ядрото е „Распукала/Навали се Шар планина“; модерно „Шар планина“ може да е авторска адаптация — провери първия стих' },
  77: { kind: 'traditional', region: 'Шоплук', note: 'БНТ т. XIII с.448; прославена от Гюрга Пинджурова (Трън/Шоп)' },
  86: { kind: 'uncertain', genre: 'любовна', note: 'вероятно традиционна любовна; точният текст непотвърден' },
  91: { kind: 'traditional', region: 'Родопи/Тракия', genre: 'сватбарска', note: 'обредна сватбена — сбогуването на невестата' } }
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function provenance(n: number): Provenance {
  return PROVENANCE[n] ?? { kind: 'traditional', note: 'анонимна народна, неатрибутирана тук (непроверена индивидуално, не твърдение за анонимност)' }
}

// GENRE — the documented Bulgarian folk-song typology (Стоин, Кацарова, Кауфман school), applied by a
// keyword heuristic over title+lyrics. The categories are real ethnomusicological functions; the
// assignment is a HEURISTIC guess, not an authoritative classification (the honest hedge). First match wins.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export const GENRES = ['обредна-дъжд', 'хайдушка', 'сватбарска', 'седянкарска', 'жътварска', 'трапезна', 'хороводна', 'любовна', 'лирическа'] as const
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export type Genre = (typeof GENRES)[number]
// Build a Unicode word-boundary matcher: a marker must match a WHOLE word, not a substring — JS \b is
// ASCII-only and useless for Cyrillic, so use lookarounds on \p{L}. (Without this, чета matches inside
// момчета and misfiles a wedding song as хайдушка.) Terms may carry a [\p{L}]* tail for inflection.
const W = (...terms: string[]) => new RegExp(`(?<!\\p{L})(?:${terms.join('|')})(?!\\p{L})`, 'iu')
const GENRE_MARKERS: [Genre, RegExp][] = [
  ['обредна-дъжд', W('пеперуда', 'перперуна', 'додол[\\p{L}]*', 'дъжд')],
  ['хайдушка', W('хайдут[\\p{L}]*', 'войвод[\\p{L}]*', 'байрак', 'комит[\\p{L}]*', 'робств[\\p{L}]*', 'въстан[\\p{L}]*', 'чета', 'чети', 'пушка')], // 'юнак' dropped: too common (any brave youth), it misfiled horo songs
  ['сватбарска', W('сватб[\\p{L}]*', 'сватове', 'невест[\\p{L}]*', 'годе[жн][\\p{L}]*', 'булк[\\p{L}]*', 'булче', 'пръстен[\\p{L}]*', 'зет', 'сват')],
  ['седянкарска', W('седянк[\\p{L}]*', 'седенк[\\p{L}]*', 'преде', 'предат', 'хурка', 'къдел[\\p{L}]*', 'вретено', 'меже')],
  ['жътварска', W('жътв[\\p{L}]*', 'сноп[\\p{L}]*', 'нива', 'нивата', 'жъне', 'жетвар[\\p{L}]*')],
  ['трапезна', W('наздрав[\\p{L}]*', 'пием', 'множи', 'пий', 'пийт[\\p{L}]*', 'вино', 'ракия', 'ракие')],
  ['хороводна', W('хоро', 'хорото', 'играй', 'заигра[\\p{L}]*', 'гайда')],
  ['любовна', W('либе', 'либето', 'севд[\\p{L}]*', 'обич[\\p{L}]*', 'целув[\\p{L}]*', 'драг[аио]', 'залюб[\\p{L}]*', 'сърце')],
]
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function classifyGenre(title: string, lyrics: string): Genre {
  const hay = `${title}\n${lyrics}`
  for (const [genre, re] of GENRE_MARKERS) if (re.test(hay)) return genre
  return 'лирическа'
}

// Content-address a song the library's own way: merkaba-fold its source URL to a uuid — every song a book
// with a content address, on the same fold as every other entry. The library's normalize() strips #frag-
// ments (it addresses documents), so the song number is folded as a PATH segment (page/N), giving each song
// a distinct sub-address of the page. Reuses entry(); deterministic and unique per song.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function songEntry(n: number): Entry {
  return entry(`${PESNOPOIKA_SOURCE}/${n}`)
}

// DECODE ONE SONG — fold every tool over a saved song into its full decoded record: its content address,
// verses, refrain, the dialect footnotes recovered (glossDialect) and the standard-Bulgarian normalization
// (decodeDialect), the honest provenance, the heuristic genre, the score images. The whole decode in one
// pure call. Takes a Song as an argument (so the display dual stays decoupled). Zero tokens.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function decodeSong(song: Song): {
  n: number; title: string; uuid: Uuid; verses: string[]; refrain: { repeated: string[]; markers: number }
  glossed: { term: string; standard: string }[]; standardTitle: string; standardLyrics: string
  provenance: Provenance; genre: Genre; scores: string[]
} {
  const text = `${song.title}\n${song.lyrics}`
  return {
    n: song.n, title: song.title, uuid: songEntry(song.n).uuid,
    verses: verses(song.lyrics), refrain: refrains(song.lyrics),
    glossed: glossDialect(text),
    standardTitle: decodeDialect(song.title), standardLyrics: decodeDialect(song.lyrics),
    provenance: provenance(song.n), genre: classifyGenre(song.title, song.lyrics), scores: song.scores }
}

// DECODE ALL — the whole songbook decoded, plus a deterministic summary: the genre and provenance
// histograms, the dictionary size, the catalog entry of the source page. This is the "decode all 108"
// answer as a pure, recomputable value. Zero runtime tokens — the repo itself is the decoder.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function pesnopoika(): {
  source: Entry; count: number; dictionarySize: number
  songs: ReturnType<typeof decodeSong>[]
  byGenre: Record<string, number>; byProvenance: Record<string, number>
} {
  const songs = PESNOPOIKA.map(decodeSong)
  const byGenre: Record<string, number> = {}
  const byProvenance: Record<string, number> = {}
  for (const s of songs) {
    byGenre[s.genre] = (byGenre[s.genre] ?? 0) + 1
    byProvenance[s.provenance.kind] = (byProvenance[s.provenance.kind] ?? 0) + 1
  }
  return {
    source: entry(PESNOPOIKA_SOURCE), count: PESNOPOIKA.length,
    dictionarySize: Object.keys(DIALECT_GLOSSARY).length, songs, byGenre, byProvenance }
}

// IN THIS CODEBASE, MATH PROVES. The decode does not rest on "I ran it and it looked right" — it carries
// its own proof, the self-verifying fold the census uses (foldedCensus/allComputed): each gate is an
// identity that recomputes to the same content-address or fails. `proven` is their conjunction; `root` is
// the whole DECODED corpus folded to one address — recompute it from src and it must match (the public
// proof recipe). Pure, deterministic, zero tokens.
//
// WHAT MATH PROVES HERE (structure): the corpus is complete and gaplessly numbered (1..N); every song folds
// to a UNIQUE, well-formed content-address (the merkaba fold never collides on this corpus); the dialect
// dictionary is a FOLD OF THE CORPUS'S OWN FOOTNOTES — every key derived from a saved song, nothing
// invented; every song decodes TOTALLY (a defined genre, a provenance kind, ≥1 verse, a non-empty
// normalization); and the whole decode is DETERMINISTIC (recompute → identical root, zero tokens).
// WHAT MATH CANNOT PROVE, so it is flagged not gated: that a gloss is the TRUE meaning (the collector's
// attestation, documented-not-computed) or that an authored-song claim is historically correct (sourced
// research). That boundary IS the documented-vs-legend law — math proves the fold; the world's facts stay
// sourced. The proof is honest by construction: it asserts only what a computation can settle.
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function provePesnopoika(): {
  proven: boolean; gates: Record<string, boolean>; count: number; root: Uuid; statement: string; boundary: string
} {
  const nums = PESNOPOIKA.map((s) => s.n).sort((a, b) => a - b)
  const decoded = PESNOPOIKA.map(decodeSong)
  const uuids = decoded.map((d) => d.uuid)
  const uuidShape = /^[0-9a-f]{8}-[0-9a-f]{4}-8[0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/
  // The corpus's own footnote terms, split exactly as the dictionary was folded — the source the keys derive from.
  const corpusTerms = new Set(
    PESNOPOIKA.flatMap((s) => s.gloss.flatMap(([term]) => term.toLowerCase().split(/[,/]| или /).map((t) => t.trim()))),
  )
  // Fold the decoded corpus to one content-address; the determinism gate recomputes it from scratch and must match.
  const root = decoded.reduce((acc, d) => toUuid(`${acc}::${d.uuid}:${d.genre}:${d.standardTitle}`), toUuid('pesnopoika:root'))
  const gates: Record<string, boolean> = {
    gapless: nums.length > 0 && nums.every((n, i) => n === i + 1),                         // numbers are exactly 1..N, no gaps
    addressed: uuids.every((u) => uuidShape.test(u)),                                       // every song well-formed-addressed
    distinct: new Set(uuids).size === uuids.length,                                         // the fold never collides on the corpus
    glossaryFolded: Object.entries(DIALECT_GLOSSARY).every(([k, v]) => k === k.toLowerCase() && v.length > 0 && corpusTerms.has(k)), // dictionary ⊆ the corpus's own footnotes
    total: decoded.every((d) => (GENRES as readonly string[]).includes(d.genre) && !!d.provenance.kind && d.verses.length > 0 && d.standardLyrics.length > 0), // each song decodes fully
    deterministic: PESNOPOIKA.map(decodeSong).reduce((acc, d) => toUuid(`${acc}::${d.uuid}:${d.genre}:${d.standardTitle}`), toUuid('pesnopoika:root')) === root, // recompute → identical (pure, zero-token)
  }
  return {
    proven: Object.values(gates).every(Boolean), gates, count: PESNOPOIKA.length, root,
    statement: 'Self-verifying decode: songs gaplessly numbered, each folded to a unique content-address; the dialect dictionary is a fold of the corpus’s own footnotes; every song decodes totally; the whole recomputes to one stable root. Math proves the fold.',
    boundary: 'Proven by math: structure (count, addressing, derivation from source, totality, determinism). NOT computed, kept sourced: the truth of a gloss (the collector’s attestation) and authored-song provenance (research) — documented-vs-legend, the one boundary the fold does not cross.' }
}

// UUID → sealed Glagolitic glyph string — bijective per position; alphabet order is content-addressed (64! permutations).
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export const UUID_GLYPH_WIDTH = 32

/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export const UUID_GLYPH_ALPHABET = (() => {
  const seen = new Set<string>()
  const out: string[] = []
  for (const letter of GLAGOLITIC_LETTERS) {
    if (!seen.has(letter.glyph)) {
      seen.add(letter.glyph)
      out.push(letter.glyph)
    }
  }
  for (const glyph of Object.values(GLAGOLITIC_MAP)) {
    if (!seen.has(glyph) && out.length < 64) {
      seen.add(glyph)
      out.push(glyph)
    }
  }
  for (let cp = 0x2c00; out.length < 64 && cp < 0x2c80; cp += 1) {
    const glyph = String.fromCodePoint(cp)
    if (!seen.has(glyph)) {
      seen.add(glyph)
      out.push(glyph)
    }
  }
  return out.join('')
})()

const GLYPH_SHIFT = Array.from({ length: UUID_GLYPH_WIDTH }, (_, i) => (i * 11 + 3) % 49)

function normalizeUuidHex(uuid: string): string {
  return uuid.toLowerCase().replace(/-/g, '')
}

function formatUuidHex(hex: string): string {
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20, 32)}`
}

/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function uuidToGlyphs(uuid: string): string {
  const hex = normalizeUuidHex(uuid)
  if (hex.length !== 32) return ''
  let out = ''
  for (let i = 0; i < UUID_GLYPH_WIDTH; i += 1) {
    const n = Number.parseInt(hex[i]!, 16)
    out += UUID_GLYPH_ALPHABET[(n + GLYPH_SHIFT[i]!) % UUID_GLYPH_ALPHABET.length]!
  }
  return out
}

/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function glyphsToUuid(glyphs: string): string {
  if (glyphs.length !== UUID_GLYPH_WIDTH) return ''
  let hex = ''
  for (let i = 0; i < UUID_GLYPH_WIDTH; i += 1) {
    const idx = UUID_GLYPH_ALPHABET.indexOf(glyphs[i]!)
    if (idx < 0) return ''
    const n = ((idx - GLYPH_SHIFT[i]!) % UUID_GLYPH_ALPHABET.length + UUID_GLYPH_ALPHABET.length) % UUID_GLYPH_ALPHABET.length
    if (n > 15) return ''
    hex += n.toString(16)
  }
  return formatUuidHex(hex)
}

/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function parseUuidOrGlyphs(input: string): string {
  const trimmed = input.trim()
  if (isUuid(trimmed)) return trimmed.toLowerCase()
  const fromGlyphs = glyphsToUuid(trimmed)
  return fromGlyphs || trimmed.toLowerCase()
}

function log2Factorial(n: number): number {
  let sum = 0
  for (let i = 2; i <= n; i += 1) sum += log2(i)
  return sum
}

/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export function glyphUuidEncryptionMagnitude() {
  const hexExposureLog2 = addressEntropyBits().effectiveBits
  const alphabetPermutationLog2 = log2Factorial(UUID_GLYPH_ALPHABET.length)
  const glyphKnownAlphabetLog2 = UUID_GLYPH_WIDTH * log2(UUID_GLYPH_ALPHABET.length)
  const glyphWithoutFoldLog2 = hexExposureLog2 + alphabetPermutationLog2
  const obfuscationBonusLog2 = glyphWithoutFoldLog2 - hexExposureLog2
  const magnitudeOrdersVsHex = obfuscationBonusLog2 / log10(2)
  return {
    hexExposureLog2,
    alphabetPermutationLog2,
    glyphKnownAlphabetLog2,
    glyphWithoutFoldLog2,
    obfuscationBonusLog2,
    magnitudeOrdersVsHex,
    label: `~10^${round(magnitudeOrdersVsHex)}× vs hex` }
}

/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export const dual = 'src/quantum/earth/heritage'
