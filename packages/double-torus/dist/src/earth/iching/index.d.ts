import type { MindMatrix } from '../../wind/types';
export { BAGUA, iChing } from '../../heaven/core';
export { iChingDomainMap } from '../../heaven/balance';
export { iChingImportExportTenD, iChingMotionAddsTheRest, iChingScalesComplete } from '../../thunder/decode';
export { ICHING_NUMBERS, cssIsIChingComputed, ichingTokens, ichingTokensCss, iChingFusionCompletesFolders, rosettaIChingTrinityPlacesAllTools, } from '../architecture';
export { iChingFusionCompletesAll } from '../../wind/fusion';
export { startIChingDoubleTorus } from '../../mountain/topology';
export { pagesRenderInBaguaSets } from '../../wind/ui';
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
        items: import("../architecture").RosettaIChingTrinityPlacement[];
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
