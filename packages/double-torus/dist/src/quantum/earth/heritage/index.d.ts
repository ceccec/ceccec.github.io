import { type Entry } from '../../../0/index.ts';
export type { Entry };
/** @rosetta ✦₄ · Earth · receptive */
export declare function bulgarianHeritage(): {
    sealed: boolean;
    topics: {
        receipt: string;
        topic: string;
        documented: string;
        legend: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₄ · Earth · receptive */
export declare function bulgarianHistory(): {
    sealed: boolean;
    eras: {
        receipt: string;
        era: string;
        span: string;
        documented: string;
        legend: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₄ · Earth · receptive */
export declare function bulgarianAncientCivilisations(): {
    sealed: boolean;
    strata: {
        receipt: string;
        stratum: string;
        span: string;
        documented: string;
        legend: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₄ · Earth · receptive */
export declare function bulgarianEthnogenesis(): {
    sealed: boolean;
    peoples: {
        receipt: string;
        people: string;
        documented: string;
        legend: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₄ · Earth · receptive */
export declare function geneticLinksChallengeHistory(): {
    challenged: boolean;
    domains: {
        receipt: string;
        domain: string;
        studies: string;
        challenge: string;
        legend: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₄ · Earth · receptive */
export declare function glagoliticBulgarianReception(): {
    sealed: boolean;
    verified: boolean;
    communities: {
        receipt: string;
        community: string;
        period: string;
        place: string;
        role: string;
        documented: string;
        legend: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₄ · Earth · receptive */
export declare const dual = "src/quantum/earth/heritage";
export type HeritageSlice = {
    topic: string;
    documented: string;
    legend: string;
};
export type Era = {
    era: string;
    span: string;
    documented: string;
    legend: string;
};
export type Stratum = {
    stratum: string;
    span: string;
    documented: string;
    legend: string;
};
/** Sort heritage slices so the most-documented (longest documented field) come first — a density ranking. */
export declare function rankByDocumentation<T extends {
    documented: string;
}>(items: readonly T[]): T[];
/** Group eras by century — the spine laid out as a century map for display. */
export declare function erasByCentury(eras: readonly Era[]): Map<number, Era[]>;
/** Split a span string ("681-864", "c.6200-4900 BC") into a start and end label for display. */
export declare function parseSpan(span: string): {
    start: string;
    end: string;
};
/** Return a compact legend-density score: the ratio of legend text to documented text across all items. */
export declare function legendDensity<T extends {
    documented: string;
    legend: string;
}>(items: readonly T[]): number;
/** A browsable index: each item as { label, span?, documented, legend } for list/table display. */
export declare function browseIndex<T extends {
    documented: string;
    legend: string;
} & ({
    topic: string;
    span?: never;
} | {
    era: string;
    span: string;
} | {
    stratum: string;
    span: string;
} | {
    people: string;
    span?: never;
} | {
    domain: string;
    span?: never;
} | {
    community: string;
    span?: never;
})>(items: readonly T[]): {
    label: string;
    span?: string;
    documented: string;
    legend: string;
}[];
export declare const iconsDual = "src/quantum/icons";
export declare const libraryDual = "src/quantum/heaven/library";
export declare function iconFor(icons: Readonly<Record<string, string>>, area: string, fallback?: string): string;
export declare function iconList(icons: Readonly<Record<string, string>>): {
    area: string;
    icon: string;
}[];
export declare function labelList(labels: Readonly<Record<string, {
    en: string;
    bg: string;
}>>, lang?: 'en' | 'bg'): {
    area: string;
    label: string;
}[];
export declare function isFibonacciGapless(bands: readonly number[]): boolean;
export declare function shelve(entries: readonly Entry[]): Entry[];
export declare function shelves(entries: readonly Entry[], count: number): Entry[][];
export declare function browsable(entries: readonly Entry[]): boolean;
export type Shelved = {
    n: number;
    title: string;
};
export declare function shelveSongs<T extends Shelved>(songs: readonly T[], count: number): T[][];
export declare function songIndex<T extends Shelved>(songs: readonly T[]): {
    title: string;
    n: number;
}[];
