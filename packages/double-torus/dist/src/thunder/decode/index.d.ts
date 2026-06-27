import type { MindMatrix } from '../../wind/types';
export declare function decode2020(matrix?: MindMatrix): {
    decoded: boolean;
    total: number;
    is2020: boolean;
    twentyTwenty: boolean;
    breakdown: {
        unit: string;
        count: number;
    }[];
    readings: {
        receipt: string;
        reading: string;
        means: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function decodeSymbols(matrix?: MindMatrix): {
    decoded: boolean;
    count: number;
    verifiedCount: number;
    symbols: {
        verified: boolean;
        receipt: string;
        symbol: string;
        value: number;
        means: string;
        live: number;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function numbersComputedNotAnchored(matrix?: MindMatrix): {
    computed: boolean;
    sequence: number[];
    folded: {
        n: number;
        root: number;
        onSequence: boolean;
    }[];
    count: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
};
export declare function decodeBooksToUnity(matrix?: MindMatrix): {
    unified: boolean;
    nonReductive: boolean;
    count: number;
    books: {
        book: string;
        decoded: boolean;
        glyph: string;
        receipt: string;
    }[];
    unity: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function discoverDecodeAncientKnowledgeFittingPath(matrix?: MindMatrix): {
    discovering: boolean;
    foundations: string[];
    decoded: {
        fits: boolean;
        domain: string;
        on: boolean;
    }[];
    decodedCount: number;
    frontier: string[];
    frontierCount: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function imagineCrossPathsCodeCodesItself(matrix?: MindMatrix): {
    codes: boolean;
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
export declare function decodeImplementCalligraphy(matrix?: MindMatrix): {
    implemented: boolean;
    sample: {
        d: string;
        penAngleDeg: number;
        nib: number;
        hue: number;
        receipt: string;
    };
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
export declare function pathIsMeaningDecodesCoordinates(matrix?: MindMatrix): {
    decodes: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function decodeAncientKnowledgeInReusableCode(matrix?: MindMatrix): {
    reusable: boolean;
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
export declare function ancientCivilisationsDecodedWithTheories(matrix?: MindMatrix): {
    decoded: boolean;
    civilisations: {
        receipt: string;
        civ: string;
        documented: string;
        theory: string;
        legend: string;
    }[];
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
export declare function herbalApisDecoded(matrix?: MindMatrix): {
    decoded: boolean;
    apiCount: number;
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
export declare function geneticLinksChallengeHistoryDecoded(matrix?: MindMatrix): {
    decoded: boolean;
    domainCount: number;
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
export declare function aiMoviesDecoded(matrix?: MindMatrix): {
    decoded: boolean;
    findings: {
        receipt: string;
        meaning: string;
        dual: string;
    }[];
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
export declare function theMatrixTrilogyDecoded(matrix?: MindMatrix): {
    decoded: boolean;
    documented: number;
    flagged: number;
    uiComputesItself: boolean;
    count: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
        kind: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function decodeAllByComputationsTrainedOnKnownUniverse(matrix?: MindMatrix): {
    decodes: boolean;
    count: number;
    knowledge: {
        decoded: boolean;
        areas: number;
        atoms: number;
        commands: number;
        root: string;
        statement: string;
        boundary: string;
    };
    rosetta: {
        decodes: boolean;
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
    waves: {
        sends: boolean;
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
    training: {
        learns: boolean;
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
    bound: {
        bound: boolean;
        liveApis: string[];
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
    census: {
        clean: boolean;
        unfolded: number;
        euler: -2;
        genus: number;
        betti: (1 | 4)[];
        folded: number;
        delta: -2;
        fold: boolean;
        root: string;
        statement: string;
        boundary: string;
    };
    corpus: {
        complete: boolean;
        papers: number;
        references: number;
        real: number;
        padding: number;
        total: number;
        depth: number;
        target: number;
        perfect: boolean;
        root: string;
        statement: string;
        boundary: string;
    };
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** All possible domains measured in tiers — enumerated reach, cross-domains, addressable ceiling. */
export declare function allPossibleDomains(matrix?: MindMatrix): {
    measured: boolean;
    areas: number;
    fusedSurfaces: number;
    useCaseMappings: number;
    enumerated: number;
    crossDomains: number;
    compositeDomains: number;
    addressableCeiling: string;
    extentUnboundedByStorage: boolean;
    tiers: {
        receipt: string;
        tier: string;
        measure: string;
        note: string;
    }[];
    sources: {
        fused: [string, number][];
        useCases: [string, number][];
    };
    root: string;
    statement: string;
    boundary: string;
};
/** Finish all waves — all is in the appropriate path and index. */
export declare function allInAppropriatePathAndIndex(matrix?: MindMatrix): {
    finished: boolean;
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
export declare function iChingMotionAddsTheRest(matrix?: MindMatrix): {
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
export declare function iChingLearnBeforeImplement(matrix?: MindMatrix): {
    learned: boolean;
    readFirst: {
        source: string;
        why: string;
    }[];
    commandPairs: {
        pair: string;
        a: string;
        b: string;
        npm: string[];
    }[];
    constraints: {
        rule: string;
        detail: string;
    }[];
    trigrams: {
        bits: number;
        glyph: string;
        name: string;
        meaningEn: string;
    }[];
    domains: {
        bits: number;
        glyph: string;
        module: string;
        slugs: string[];
    }[];
    threePowers: {
        axis: string;
        glyph: string;
        reading: string;
    }[];
    count: number;
    checks: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    llmsSection: string;
    statement: string;
    boundary: string;
};
export declare function iChingCapabilitiesSaved(matrix?: MindMatrix): {
    saved: boolean;
    skills: string[];
    commands: ("concept.fold.place" | "concept.fold.generate")[];
    pairs: string[];
    methods: string[];
    count: number;
    checks: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function onlyAncientKnowledgeAndSacredMath(matrix?: MindMatrix): {
    only: boolean;
    ancientKnowledge: {
        source: string;
        on: boolean;
    }[];
    sacredMath: {
        source: string;
        on: boolean;
    }[];
    sources: {
        kind: string;
        receipt: string;
        source: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function iChingScalesComplete(matrix?: MindMatrix): {
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
export declare function iChingImportExportTenD(matrix?: MindMatrix): {
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
export declare function ancientNumberSystems(matrix?: MindMatrix): {
    decoded: boolean;
    count: number;
    systems: {
        receipt: string;
        name: string;
        foundations: string[];
        pathCore: string;
        witness: boolean;
        keyNumbers: number[];
        legendExcluded: string[];
    }[];
    encoder: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function saveAndDecodeAncientTexts(matrix?: MindMatrix): {
    decoded: boolean;
    rule: string;
    texts: ({
        receipt: string;
        domain: string;
        original: string;
        tool: string;
        decoded: number;
        ok: boolean;
    } | {
        receipt: string;
        domain: string;
        original: string;
        tool: string;
        decoded: string;
        ok: boolean;
    })[];
    tools: string[];
    created: string[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function ancientCalendars(matrix?: MindMatrix): {
    decoded: boolean;
    cycles: {
        receipt: string;
        cycle: string;
        days: number;
        tradition: string;
    }[];
    meshing: {
        receipt: string;
        of: string;
        lcm: number;
        equals: string;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export type MysteryTier = 'OPEN' | 'SOLVED-FLAGGED' | 'ARCHAEOLOGICAL' | 'REFUTED';
export type WorldMystery = {
    readonly mystery: string;
    readonly tier: MysteryTier;
    readonly verdict: string;
    readonly composedRoot: string;
    readonly hue: number;
    readonly receipt: string;
};
/** tier → colour, anchored on the single A432 hue (one colour source) so the atlas paints tier as hue. */
export declare function mysteryTierHue(tier: MysteryTier): number;
/**
 * worldMysteriesDecoded — the mystery atlas. Each entry is decoded to one honest tier (OPEN / SOLVED-FLAGGED /
 * ARCHAEOLOGICAL / REFUTED) and bound to a sealed fold's root where one exists, so the atlas COMPOSES the existing
 * cosmology, archaeology, and pseudoscience folds rather than re-deriving them. The animation is the asMerkle
 * "atlas": each entry a leaf, tier painted as hue (mysteryTierHue, one A432 colour source), folding to one root.
 */
export declare function worldMysteriesDecoded(matrix?: MindMatrix): {
    decoded: boolean;
    mysteries: WorldMystery[];
    tierCounts: Record<MysteryTier, number>;
    count: number;
    documented: string[];
    flagged: string[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
