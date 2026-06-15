import { merkabaFoldUrl, entry, type Uuid, type Entry } from '../../0/index.ts';
export { merkabaFoldUrl, entry, type Uuid, type Entry };
export declare const GLAGOLITIC_MAP: Record<string, string>;
export declare function toGlagolitic(text: string): string;
export declare function toScript(text: string, script: string): string;
export declare const GEMATRIA_MAPS: Record<string, Record<string, number>>;
export declare function gematria(text: string, system?: 'hebrew' | 'greek' | 'arabic'): number;
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
export declare function sixBySeven(): {
    rows: number[][];
    total: number;
    coversAll: boolean;
};
export declare function mayaLongCount(days: number): number[];
export declare function mayaDays(longCount: readonly number[]): number;
export declare function magicSquare(n: number): {
    grid: number[][];
    constant: number;
};
export declare function hekatFraction(x: number): {
    powers: number[];
    ro: number;
};
export declare function runeCoordinate(n: number): {
    aett: number;
    pos: number;
};
export declare function runeOrdinal(aett: number, pos: number): number;
export declare const GLAGOLITIC_LETTERS: readonly {
    glyph: string;
    name: string;
    sound: string;
}[];
export declare function glagoliticValue(position: number): number;
export declare function toGlagoliticNumber(text: string): number;
export declare function glagoliticAcrostic(): {
    names: readonly string[];
    line: string;
    opening: string;
};
export declare function sexagesimal(n: number): number[];
export declare function fromSexagesimal(digits: readonly number[]): number;
export declare function luoShu(): {
    grid: number[][];
    constant: number;
};
export declare function oghamCoordinate(n: number): {
    aicme: number;
    pos: number;
};
export declare function oghamOrdinal(aicme: number, pos: number): number;
export declare function ifaOdu(rows: readonly number[]): number;
export declare function ifaRows(value: number): number[];
export declare function starHouseBearing(house: number): number;
export declare function bearingToStarHouse(deg: number): number;
export declare const OCS_GLAGOLITIC_MAP: Record<string, string>;
export declare function toGlagoliticOCS(text: string): string;
export declare const CHURCH_SLAVONIC_SCRIPTURE: readonly {
    ref: string;
    ocs: string;
    bg: string;
    en: string;
}[];
export type BibleLang = 'ocs' | 'bg' | 'en';
export declare function translateVerse(ref: string, lang: BibleLang): string | undefined;
export declare function scriptureIn(lang: BibleLang): readonly {
    ref: string;
    text: string;
}[];
export declare function bibleParallel(): readonly {
    ref: string;
    ocs: string;
    bg: string;
    en: string;
    glagoliticOcs: string;
    glagoliticBg: string;
}[];
export declare function bibleInGlagolitic(): readonly {
    ref: string;
    ocs: string;
    glagolitic: string;
    en: string;
}[];
export type Song = {
    n: number;
    title: string;
    scores: string[];
    gloss: [string, string][];
    lyrics: string;
};
export declare const PESNOPOIKA: readonly Song[];
export declare const PESNOPOIKA_SOURCE = "http://gabchik.com/pesnopoika.html";
export declare const DIALECT_GLOSSARY: Record<string, string>;
export declare function decodeDialect(text: string): string;
export declare function glossDialect(text: string): {
    term: string;
    standard: string;
}[];
export declare function dialectStratum(term: string): 'turkism' | 'palatal' | 'dialect';
export declare function verses(lyrics: string): string[];
export declare function refrains(lyrics: string): {
    repeated: string[];
    markers: number;
};
export declare const AKSAK: Record<string, number[]>;
export declare function aksak(name: string): number[];
export declare function aksakBeats(name: string): number;
export type Provenance = {
    kind: 'authored' | 'traditional' | 'uncertain';
    region?: string;
    genre?: string;
    note: string;
};
export declare const PROVENANCE: Record<number, Provenance>;
export declare function provenance(n: number): Provenance;
export declare const GENRES: readonly ["обредна-дъжд", "хайдушка", "сватбарска", "седянкарска", "жътварска", "трапезна", "хороводна", "любовна", "лирическа"];
export type Genre = (typeof GENRES)[number];
export declare function classifyGenre(title: string, lyrics: string): Genre;
export declare function songEntry(n: number): Entry;
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
export declare function pesnopoika(): {
    source: Entry;
    count: number;
    dictionarySize: number;
    songs: ReturnType<typeof decodeSong>[];
    byGenre: Record<string, number>;
    byProvenance: Record<string, number>;
};
export declare function provePesnopoika(): {
    proven: boolean;
    gates: Record<string, boolean>;
    count: number;
    root: Uuid;
    statement: string;
    boundary: string;
};
export declare const dual = "src/library/quantum";
