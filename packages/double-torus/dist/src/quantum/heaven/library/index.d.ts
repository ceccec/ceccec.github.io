import { merkabaFoldUrl, entry, type Uuid, type Entry } from '../../../0';
export { merkabaFoldUrl, entry, type Uuid, type Entry };
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare const GLAGOLITIC_MAP: Record<string, string>;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function toGlagolitic(text: string): string;
export declare function fromGlagolitic(text: string): string;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function toScript(text: string, script: string): string;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare const GEMATRIA_MAPS: Record<string, Record<string, number>>;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function gematria(text: string, system?: 'hebrew' | 'greek' | 'arabic'): number;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare const SIX_BY_SEVEN: Readonly<{
    product: 42;
    six: 6;
    seven: 7;
    completenessNumber: 7;
    totalityOfEmanation: 10;
    anaBeKoachLines: 7;
    anaBeKoachWordsPerLine: 6;
    anaBeKoachWords: 42;
    role: "process-to-completion";
    coversAll: false;
}>;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function sixBySeven(): {
    rows: number[][];
    total: number;
    coversAll: boolean;
};
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function mayaLongCount(days: number): number[];
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function mayaDays(longCount: readonly number[]): number;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function magicSquare(n: number): {
    grid: number[][];
    constant: number;
};
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function hekatFraction(x: number): {
    powers: number[];
    ro: number;
};
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function runeCoordinate(n: number): {
    aett: number;
    pos: number;
};
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function runeOrdinal(aett: number, pos: number): number;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare const GLAGOLITIC_LETTERS: readonly {
    glyph: string;
    name: string;
    sound: string;
}[];
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function glagoliticValue(position: number): number;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function toGlagoliticNumber(text: string): number;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function glagoliticAcrostic(): {
    names: readonly string[];
    line: string;
    opening: string;
};
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function glagoliticBits(glyph: string, width?: number): number[];
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function glagoliticFromBits(bits: readonly number[]): string;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare const GLAGOLITIC_OPCODES: readonly ["ADD", "SUB", "XOR", "MUL", "ROL", "SET", "AND", "OUT"];
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export type GlagoliticOp = (typeof GLAGOLITIC_OPCODES)[number];
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function glagoliticOpcode(glyph: string): {
    op: GlagoliticOp;
    operand: number;
};
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function glagoliticProgram(word: string): {
    ops: {
        glyph: string;
        op: GlagoliticOp;
        operand: number;
    }[];
    acc: number;
    out: number[];
};
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare const GLAGOLITIC_GATES: readonly ["H", "X", "Y", "Z", "S", "T"];
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export type GlagoliticGate = (typeof GLAGOLITIC_GATES)[number];
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function glagoliticGate(glyph: string): {
    gate: GlagoliticGate;
    value: number;
};
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function glagoliticCircuit(word: string, n?: number, shots?: number): {
    n: number;
    gates: {
        glyph: string;
        gate: GlagoliticGate;
        target: number;
    }[];
    probabilities: number[];
    sample: Record<string, number>;
};
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare const GLAGOLITIC_MEANINGS: Record<string, {
    gloss: string;
    word: boolean;
    secure: boolean;
}>;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function glagoliticMeaning(key: string): {
    glyph: string;
    name: string;
    sound: string;
    number: number;
    gloss: string;
    word: boolean;
    secure: boolean;
} | undefined;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function glagoliticAcrosticMessage(): {
    secure: string;
    secureEnglish: string;
    reconstructed: string;
    english: string;
    honest: string;
};
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function sexagesimal(n: number): number[];
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function fromSexagesimal(digits: readonly number[]): number;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function luoShu(): {
    grid: number[][];
    constant: number;
};
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function oghamCoordinate(n: number): {
    aicme: number;
    pos: number;
};
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function oghamOrdinal(aicme: number, pos: number): number;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function ifaOdu(rows: readonly number[]): number;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function ifaRows(value: number): number[];
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function starHouseBearing(house: number): number;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function bearingToStarHouse(deg: number): number;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare const OCS_GLAGOLITIC_MAP: Record<string, string>;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function toGlagoliticOCS(text: string): string;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare const CHURCH_SLAVONIC_SCRIPTURE: readonly {
    ref: string;
    ocs: string;
    bg: string;
    en: string;
}[];
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export type BibleLang = 'ocs' | 'bg' | 'en';
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function translateVerse(ref: string, lang: BibleLang): string | undefined;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function scriptureIn(lang: BibleLang): readonly {
    ref: string;
    text: string;
}[];
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function bibleParallel(): readonly {
    ref: string;
    ocs: string;
    bg: string;
    en: string;
    glagoliticOcs: string;
    glagoliticBg: string;
}[];
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function bibleInGlagolitic(): readonly {
    ref: string;
    ocs: string;
    glagolitic: string;
    en: string;
}[];
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export interface FolkSymbol {
    name: string;
    latin: string;
    meaning: string;
    documented: boolean;
}
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare const MOLITVA_SYMBOLS: readonly FolkSymbol[];
/** The creation verses the art-prayer quotes verbatim in Bulgarian — the seam to the multilingual pivot. */
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function molitvaCreationRefs(): readonly string[];
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare const MULTILINGUAL_SCRIPTURE: Record<string, Record<string, string>>;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export type Song = {
    n: number;
    title: string;
    scores: string[];
    gloss: [string, string][];
    lyrics: string;
};
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare const PESNOPOIKA: readonly Song[];
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare const PESNOPOIKA_SOURCE = "http://gabchik.com/pesnopoika.html";
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare const DIALECT_GLOSSARY: Record<string, string>;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function decodeDialect(text: string): string;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function glossDialect(text: string): {
    term: string;
    standard: string;
}[];
/** A pivot lexicon: pivot-id → { tongue → surface form }. The pivot is the meaning; the surfaces are tongues. */
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export type PivotLexicon = Record<string, Record<string, string>>;
/** Build the seed pivot lexicon from the repo's existing parallel data — verse-level and word-level pivots. */
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function pivotLexicon(): PivotLexicon;
/** The tongues the pivot lexicon currently spans (it generalises to any tongue registered against the pivot). */
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function pivotTongues(lex?: PivotLexicon): string[];
/** Translate text from one tongue to another by routing each known unit through the pivot — A → pivot → B,
 *  no pairwise dictionary. Whole-text (verse) match first, else unit-by-unit (word). Returns the translated
 *  text with the coverage as exact integers (mapped / total); unmapped units pass through (the honest gap). */
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function selfTranslate(text: string, from: string, to: string, lex?: PivotLexicon): {
    text: string;
    mapped: number;
    total: number;
    derived: boolean;
};
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function dialectStratum(term: string): 'turkism' | 'palatal' | 'dialect';
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function verses(lyrics: string): string[];
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function refrains(lyrics: string): {
    repeated: string[];
    markers: number;
};
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare const AKSAK: Record<string, number[]>;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function aksak(name: string): number[];
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function aksakBeats(name: string): number;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export type Provenance = {
    kind: 'authored' | 'traditional' | 'uncertain';
    region?: string;
    genre?: string;
    note: string;
};
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare const PROVENANCE: Record<number, Provenance>;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function provenance(n: number): Provenance;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare const GENRES: readonly ["обредна-дъжд", "хайдушка", "сватбарска", "седянкарска", "жътварска", "трапезна", "хороводна", "любовна", "лирическа"];
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export type Genre = (typeof GENRES)[number];
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function classifyGenre(title: string, lyrics: string): Genre;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function songEntry(n: number): Entry;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function decodeSong(song: Song): {
    n: number;
    title: string;
    uuid: Uuid;
    verses: string[];
    refrain: {
        repeated: string[];
        markers: number;
    };
    glossed: {
        term: string;
        standard: string;
    }[];
    standardTitle: string;
    standardLyrics: string;
    provenance: Provenance;
    genre: Genre;
    scores: string[];
};
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function pesnopoika(): {
    source: Entry;
    count: number;
    dictionarySize: number;
    songs: ReturnType<typeof decodeSong>[];
    byGenre: Record<string, number>;
    byProvenance: Record<string, number>;
};
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function provePesnopoika(): {
    proven: boolean;
    gates: Record<string, boolean>;
    count: number;
    root: Uuid;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare const UUID_GLYPH_WIDTH = 32;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare const UUID_GLYPH_ALPHABET: string;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function uuidToGlyphs(uuid: string): string;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function glyphsToUuid(glyphs: string): string;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function parseUuidOrGlyphs(input: string): string;
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare function glyphUuidEncryptionMagnitude(): {
    hexExposureLog2: number;
    alphabetPermutationLog2: number;
    glyphKnownAlphabetLog2: number;
    glyphWithoutFoldLog2: number;
    obfuscationBonusLog2: number;
    magnitudeOrdersVsHex: number;
    label: string;
};
/** @rosetta ✦₀ · Mountain · stillness (scripture/glyph library) */
export declare const dual = "src/quantum/earth/heritage";
