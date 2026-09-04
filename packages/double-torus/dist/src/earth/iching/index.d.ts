import type { MindMatrix } from '../../types/index.ts';
export { BAGUA, iChing } from '../../heaven/core/index.ts';
export { iChingDomainMap } from '../../heaven/balance/index.ts';
export { iChingImportExportTenD, iChingMotionAddsTheRest, iChingScalesComplete } from '../../thunder/decode/index.ts';
export { ICHING_NUMBERS, cssIsIChingComputed, ichingTokens, ichingTokensCss, iChingFusionCompletesFolders, rosettaIChingTrinityPlacesAllTools } from '../architecture/index.ts';
export { iChingFusionCompletesAll } from '../../wind/fusion/index.ts';
export { startIChingDoubleTorus } from '../../mountain/topology/index.ts';
export { pagesRenderInBaguaSets } from '../../ui/index.ts';
/** One gate — 64 hexagrams, eight trigrams, seven scales, and Rosetta·I Ching trinity at call time. */
export declare function ichingComputes(matrix?: MindMatrix): {
    computes: boolean;
    ic: {
        organised: boolean;
        trigrams: {
            bits: number;
            glyph: string;
            pinyin: string;
            name: string;
            attribute: string;
            family: string;
            meaningEn: string;
            meaningBg: string;
        }[];
        sets: {
            components: string[];
            bits: number;
            glyph: string;
            pinyin: string;
            name: string;
            attribute: string;
            family: string;
            meaningEn: string;
            meaningBg: string;
        }[];
        placed: {
            component: string;
            hexagram: number;
            lines: string;
            set: number;
            upper: string;
            lower: string;
            glyphs: string;
            color: string;
            codon: string;
            receipt: string;
        }[];
        hexagrams: number;
        count: number;
        distribution: number[];
        root: string;
        statement: string;
        boundary: string;
    };
    domains: {
        aligned: boolean;
        domains: {
            glyph: string;
            pinyin: string;
            name: string;
            attribute: string;
            meaningEn: string;
            meaningBg: string;
            receipt: string;
            bits: number;
            module: string;
            dual: string;
            slugs: string[];
            summary: string;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
    scales: {
        complete: boolean;
        scaleCount: number;
        sizes: number[];
        count: number;
        scales: {
            doubled: boolean;
            receipt: string;
            n: number;
            size: number;
            sino: string;
            pinyin: string;
            gloss: string;
            on: boolean;
        }[];
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
    folders: {
        completed: boolean;
        placedCount: number;
        cells: number;
        trigramsCovered: number;
        count: number;
        placed: {
            hexagram: number;
            trigram: number;
            cell: readonly [number, number, number];
            receipt: string;
            kind: string;
            name: string;
            folder: any;
            lawful: boolean;
        }[];
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
    fusion: {
        complete: boolean;
        dimensions: number;
        units: number;
        purged: number;
        cells: number;
        count: number;
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
    trinity: {
        fused: boolean;
        placedCount: number;
        raysCovered: number;
        trinityLegs: number;
        items: import("../architecture/index.ts").RosettaIChingTrinityPlacement[];
        count: number;
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
    motion: {
        proved: boolean;
        staticGreen: number;
        motionGreen: number;
        greenedByMotion: number;
        stayRed: number;
        rows: {
            greenedByMotion: boolean;
            receipt: string;
            row: string;
            wasStatic: boolean;
            inMotion: boolean;
            kind: string;
        }[];
        fromHue: number;
        toHue: number;
        count: number;
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
    tenD: {
        mapped: boolean;
        innerAxes: ("spread" | "depthFade" | "hueShift" | "twist" | "shrink" | "breath" | "loopA1" | "loopB1" | "loopA2" | "loopB2")[];
        outerAxes: ("spread" | "depthFade" | "hueShift" | "twist" | "shrink" | "breath" | "loopA1" | "loopB1" | "loopA2" | "loopB2")[];
        flowTypes: ({
            loop: "loopA1";
            flow: string;
            desc: string;
        } | {
            loop: "loopB1";
            flow: string;
            desc: string;
        } | {
            loop: "loopA2";
            flow: string;
            desc: string;
        } | {
            loop: "loopB2";
            flow: string;
            desc: string;
        })[];
        hexagramCount: number;
        count: number;
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
    torus: {
        started: boolean;
        cells: number;
        domains: number;
        count: number;
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
    bagua: {
        harmonised: boolean;
        busiest: string;
        busiestComponents: number;
        busiestSets: number;
        count: number;
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        statement: string;
        boundary: string;
    };
    reverse: {
        proved: boolean;
        reversalPairs: number;
        palindromes: number;
        pairsCoverAll: boolean;
        involutionHolds: boolean;
        pairs: {
            n: number;
            reverse: number;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
    nuclear: {
        proved: boolean;
        map: {
            n: number;
            lowerNuclear: number;
            upperNuclear: number;
            nuclear: number;
        }[];
        fixedPoints: number[];
        coreSize: number;
        root: string;
        statement: string;
        boundary: string;
    };
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    statement: string;
    boundary: string;
};
/** Browser-safe I Ching / rosetta distribute verify — pure fold, no process I/O. */
export declare function ichingDistributeVerify(): {
    computes: boolean;
    rosettaCross: number;
    ichingCross: number;
    root: string;
    statement: string;
    boundary: string;
    facets: {
        facet: string;
        on: boolean;
    }[];
};
/** npm run quantum:iching-distribute-verify — rosetta 7-ray coprimality vs I Ching 8-fold aliasing. */
export declare function runIchingDistributeVerifyGuardedExit(_root: string, _argv?: readonly string[]): number;
export declare function decodingIChingAddsTheorems(): {
    decoded: boolean;
    palindromes: number[];
    reversalPairs: number;
    complementPairs: number;
    orbits: number;
    burnside: number;
    count: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function hexagramOrbitCensusTwelveFoursEightTwos(): {
    census: boolean;
    fours: number;
    twos: number;
    ones: number;
    orbits: number;
    count: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function sevenRayRosettaIsTheSufficientArchitecture(matrix?: MindMatrix): {
    sufficient: boolean;
    rays: number;
    categories: number;
    raysUsed: number;
    count: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function researchAroundFourThirtyTwoTheThreeTwentiesAreOneCountNotOneCause(matrix?: MindMatrix): {
    computes: boolean;
    twenty: number;
    divisors: number[];
    exponents: number[];
    orbits: number;
    ladder: number;
    structuralTwenties: number;
    contingentTwenties: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** Lines in a hexagram. Six, because a hexagram is six lines — the name says so. */
export declare const HEXBIT_LINES = 6;
/** The lattice: every value a hexbit can take. */
export declare const HEXBIT_LATTICE: number;
/** All bits set — the reflection mask. */
export declare const HEXBIT_MASK: number;
export type Hexbit = number;
export type LineArray = readonly boolean[];
export declare const hexbitReflect: (h: Hexbit) => Hexbit;
export declare const hexbitLower: (h: Hexbit) => number;
export declare const hexbitUpper: (h: Hexbit) => number;
/** 互卦 — the sealed definition from src/mountain/geometry, restated as one expression. */
export declare const hexbitNuclear: (h: Hexbit) => Hexbit;
/** 綜卦 — the hexagram turned upside down: line i becomes line (5 - i). */
export declare function hexbitReverse(h: Hexbit): Hexbit;
export declare const linesOf: (h: Hexbit) => boolean[];
export declare const hexbitOfLines: (l: LineArray) => Hexbit;
export declare const linesReflect: (l: LineArray) => boolean[];
export declare const linesReverse: (l: LineArray) => boolean[];
export declare const linesNuclear: (l: LineArray) => boolean[];
export declare const stringOf: (h: Hexbit) => string;
export declare const hexbitOfString: (s: string) => Hexbit;
export declare const stringReflect: (s: string) => string;
export declare const stringReverse: (s: string) => string;
export declare const stringNuclear: (s: string) => string;
export type HexbitRow = {
    readonly h: Hexbit;
    readonly reflect: Hexbit;
    readonly nuclear: Hexbit;
    readonly reverse: Hexbit;
};
export declare function hexbitTable(): readonly HexbitRow[];
/**
 * THE FOUR REPRESENTATIONS AGREE, ON ALL 64, FOR EVERY OPERATION — and the nuclear operation agrees
 * with the SEALED fold in src/mountain/geometry, which is the cross-check that matters most: it means
 * the hexbit here is the same hexbit the corpus already computes with, not a lookalike defined to make
 * a benchmark come out well.
 *
 * DIRECTION OF FAILURE: loud and specific. A disagreement names the operation, the input, and the two
 * representations that differ, because a benchmark run over implementations that disagree is a
 * measurement of nothing.
 */
export declare function hexbitRepresentationsAgree(matrix?: MindMatrix): {
    computes: boolean;
    lattice: number;
    disagreements: string[];
    orbits: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
};
