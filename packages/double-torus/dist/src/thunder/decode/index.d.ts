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
export declare function coupledCalendarTori(matrix?: MindMatrix): {
    computes: boolean;
    decoded: boolean;
    cycles: ({
        receipt: string;
        name: string;
        gears: readonly [260, 365];
        mesh: number;
        identity: boolean;
        reading: string;
    } | {
        receipt: string;
        name: string;
        gears: readonly [10, 12];
        mesh: number;
        identity: boolean;
        reading: string;
    } | {
        receipt: string;
        name: string;
        gears: readonly [19, 235];
        mesh: number;
        identity: boolean;
        reading: string;
    } | {
        receipt: string;
        name: string;
        gears: readonly [365, 1461];
        mesh: number;
        identity: boolean;
        reading: string;
    } | {
        receipt: string;
        name: string;
        gears: readonly [25, 309];
        mesh: number;
        identity: boolean;
        reading: string;
    } | {
        receipt: string;
        name: string;
        gears: readonly [12, 10];
        mesh: number;
        identity: boolean;
        reading: string;
    })[];
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
export type QuipuKnotCluster = {
    readonly place: number;
    readonly digit: number;
    readonly knot: 'figure-eight' | 'long' | 'simple' | 'empty';
    readonly count: number;
};
/** Encode a non-negative integer as Locke's knot clusters (units first — farthest from the main cord). */
export declare function quipuKnots(n: number): readonly QuipuKnotCluster[];
/** Decode knot clusters back to the number — the round-trip that proves the reading. */
export declare function quipuValue(clusters: readonly QuipuKnotCluster[]): number;
/** Balance gate — the quipu decodes as exact positional arithmetic; the narrative remainder stays honest. */
export declare function quipuDecoded(matrix?: MindMatrix): {
    computes: boolean;
    decoded: boolean;
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
export declare function kalachakraDecoded(matrix?: MindMatrix): {
    computes: boolean;
    decoded: boolean;
    meshGap: number;
    leapsPer19: number;
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
export declare function songlinesDecoded(matrix?: MindMatrix): {
    computes: boolean;
    decoded: boolean;
    generations: number;
    inundationBoundYears: number;
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
export declare function adinkraDecoded(matrix?: MindMatrix): {
    computes: boolean;
    decoded: boolean;
    documented: string[];
    flagged: string[];
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
/** The split tally, runnable: one record folds to a stock and a foil that match only each other.
 * The wood grain's physical uniqueness is modelled by the content-address — same law, computed. */
export declare function splitTally(record: string): {
    stock: string;
    foil: string;
    match(stock: string, foil: string): boolean;
    matches: boolean;
    forgeryRejected: boolean;
    root: string;
};
/** The bulla, runnable: contents sealed behind a surface that commits to them — verify without opening,
 * tamper evident by recomputation. The clay envelope's token impressions, as the merkle they were. */
export declare function bulla(tokens: readonly string[]): {
    surface: string;
    count: number;
    verify(claimed: readonly string[]): boolean;
    verified: boolean;
    swapDetected: boolean;
};
/** The fold: ancient digit knowledge decoded — the keys (innate number sense) and the lock (matching,
 * commitment, tamper-evidence) are documented BEFORE mathematics; the dates prove the ordering. */
export declare function ancientDigitKnowledgeDecoded(matrix?: MindMatrix): {
    decoded: boolean;
    timeline: readonly [{
        readonly event: "innate number keys — subitizing (exact ≤ 4) + approximate number system; pre-verbal, shared with animals";
        readonly yearsBP: number;
        readonly tier: "DOCUMENTED";
        readonly source: "Dehaene 1997 The Number Sense · infant habituation (2 vs 3) · honeybees count to ~3";
    }, {
        readonly event: "Lebombo bone — 29 notches, broken end so the count is a minimum; a tally, whatever it tallied";
        readonly yearsBP: 44000;
        readonly tier: "DOCUMENTED";
        readonly source: "Border Cave, ~44,000–43,000 BP; lunar-counter reading unprovable (broken end)";
    }, {
        readonly event: "Ishango bone — grouped notches; a counting/tally device";
        readonly yearsBP: 22000;
        readonly tier: "DOCUMENTED";
        readonly source: "Ishango, ~20,000–25,000 BP (Brooks re-dating); interpretations beyond tallying contested";
    }, {
        readonly event: "clay tokens — shape = commodity, one-to-one correspondence accounting BEFORE numerals and writing";
        readonly yearsBP: 10000;
        readonly tier: "DOCUMENTED";
        readonly source: "Schmandt-Besserat — tokens from ~8000 BCE across the Near East";
    }, {
        readonly event: "the bulla — tokens sealed in clay; cylinder-seal + token impressions on the SURFACE identify parties, prevent tampering, and let contents be verified without opening: a physical commitment scheme";
        readonly yearsBP: 5500;
        readonly tier: "DOCUMENTED";
        readonly source: "Schmandt-Besserat; envelopes ~3500 BCE; \"impressed the tokens on the surface … so the counters inside could be verified at all times\"";
    }, {
        readonly event: "numerals — bullae flatten to tablets; proto-cuneiform begins with NUMERICAL signs: writing born from the verification device";
        readonly yearsBP: 5100;
        readonly tier: "DOCUMENTED";
        readonly source: "proto-cuneiform ~3100 BCE; the widely accepted token→bulla→tablet reconstruction";
    }, {
        readonly event: "formal deductive mathematics — proof as a method";
        readonly yearsBP: 2550;
        readonly tier: "DOCUMENTED";
        readonly source: "Greek deductive tradition, ~6th c. BCE (Thales/Pythagoreans)";
    }, {
        readonly event: "the split tally — stock/foil halves matching only each other (unique grain = unforgeable); \"stocks\" etymology";
        readonly yearsBP: 850;
        readonly tier: "DOCUMENTED";
        readonly source: "medieval Europe; English Exchequer 12th–19th c. — the same matching law, kept at its own (LATER) date";
    }];
    flagged: readonly [{
        readonly claim: "Ishango notches are a prime-number table";
        readonly why: "primes require division, understood far later (Rudman: ~500 BCE); the groupings admit simpler readings";
        readonly tier: "FLAGGED";
    }, {
        readonly claim: "Lebombo/Ishango are lunar calendars";
        readonly why: "Marshack’s microscopic lunar reading is contested as over-interpretation (Robinson); Lebombo’s broken end makes 29 a minimum, not a month";
        readonly tier: "CONTESTED";
    }, {
        readonly claim: "the ancients practised cryptography / knew hash functions";
        readonly why: "anachronism — the bulla is a PHYSICAL commitment (clay, seals, grain), not mathematics; the structural parallel to content-addressing is ours, not theirs";
        readonly tier: "FLAGGED";
    }, {
        readonly claim: "\"oldest mathematical artifact\" framing for tally bones";
        readonly why: "they are counting devices; \"mathematics\" (operations, proof) is a later layer — the artifact documents correspondence, not arithmetic";
        readonly tier: "CONTESTED";
    }];
    devices: {
        splitTally: string;
        bulla: string;
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
/** Waite's Pictorial Key to the Tarot (1911, public domain) decoded — the book IS computable:
 * the deck is a 78-cell lattice (trumps + suits×ranks), every card a meaning-function (upright /
 * reversed), the Celtic Cross a ten-step deterministic algorithm. Extracted from the epub by a
 * superposition parse collapsed by the lattice constraint (which located the book's own
 * 'Divanatory' typo on Cups Five). HARMONY≠TRUTH flags separate the documented symbol system
 * from prediction claims. Seed rows at src/1/9 (WAITE_TRUMPS_SEED · WAITE_LESSER_SEED). */
export declare function waiteTarotDecoded(matrix?: MindMatrix): {
    decoded: boolean;
    deck: number;
    trumps: number;
    suits: string[];
    ranks: number;
    shuffleBits: number;
    meaningOf: (name: string, reversed?: boolean) => string;
    celticCross: (question: string) => {
        question: string;
        draw: {
            position: string;
            card: string;
            reversed: boolean;
            meaning: string;
        }[];
        receipt: string;
    };
    flagged: string[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** Human Design decoded — STRUCTURE ONLY: the system (Ra Uru Hu, 1987–) is a modern composite
 * that maps 64 "gates" onto the 64 I Ching hexagrams over 9 "centers" joined by 36 "channels",
 * with 5 "types" and 12 "profiles". The structure is public documented fact and arithmetically
 * checkable; the CLAIMS (aura mechanics, strategy/authority, neutrino imprinting) are flagged.
 * Source books are in copyright — no text is reproduced; this decodes the lattice, not the prose. */
export declare function humanDesignStructureDecoded(matrix?: MindMatrix): {
    decoded: boolean;
    gates: number;
    centers: 9;
    channels: 36;
    types: number;
    profiles: number;
    flagged: string[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    lattice: {
        verified: boolean;
        computes: boolean;
        centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
        centerCount: 9;
        channels: {
            a: 9 | 5 | 2 | 1 | 4 | 7 | 3 | 6 | 16 | 27 | 20 | 10 | 34 | 21 | 19 | 32 | 42 | 13 | 30 | 37 | 25 | 17 | 24 | 23 | 35 | 12 | 39 | 28 | 18 | 47 | 29 | 26 | 11;
            b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 15 | 22 | 63 | 41 | 49 | 36 | 45 | 52 | 62 | 56 | 31 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43 | 14;
            key: string;
            from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
            to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
        }[];
        channelCount: 36;
        gateCenter: Record<number, typeof import("../../quantum/lake/spirit").RAVE_CENTERS_9[number]>;
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
    root: string;
    statement: string;
    boundary: string;
};
/** THE ONE MATRIX (user realization, 2026-07-16): every decoded symbol book fits the same shape —
 * a LATTICE of cells (with a closure equation), a MEANING-FUNCTION (cell → text), a CASTING
 * algorithm (question → cells, deterministic here), and a DEMARCATION (documented ≠ flagged).
 * Proven by instantiation over five independent systems; realtime-saved, zero tokens. */
export declare function symbolSystemsOneMatrix(matrix?: MindMatrix): {
    decoded: boolean;
    systems: {
        system: string;
        cells: number;
        closure: string;
        meaningFn: boolean;
        cast: string;
        closes: boolean;
    }[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** TESLA, THOUGHT MULTIDIMENSIONALLY BY THE ROSETTA (user, 2026-07-16: "hidden inventions will be
 * discovered by the words and the math"). His real method was never mystical — it was dimensional:
 * stop thinking in ONE oscillating axis and put N phases on a circle. That is this repo's rosetta,
 * and computing it here recovers the invention AND the reason the planet runs on THREE.
 * COMPUTED: with rays at 2πk/N carrying currents phase-shifted by the same 2πk/N, the field vector
 * has CONSTANT magnitude N/2 and rotates at exactly ω — for every N ≥ 3. At N = 1 it merely
 * pulsates (why a single-phase motor cannot self-start). At N = 2 the construction DEGENERATES:
 * the rays 0 and π are collinear, spanning a line, not a plane. So THREE is the minimum symmetric
 * polyphase — a geometric fact, not a numerological one. Tesla reached rotation at two phases only
 * by breaking the symmetry (quadrature, US 381,968: rays π/2 apart). THE WORDS AND THE MATH AGREE:
 * the patent describes the rotating field; the vector sum proves why 3 rays are the floor. */
export declare function teslaRosettaPolyphase(): {
    decoded: boolean;
    minimumPhases: number;
    magnitudeLaw: string;
    spans: {
        constant: boolean;
        tracks: boolean;
        magnitude: number;
        n: number;
    }[];
    flagged: string[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
/** THE LARGE-SCALE INVENTION THE ROSETTA HIDES: the harmonic law (user, 2026-07-16). Tesla's
 * zero-neutral is not a coincidence and not π — it is the ROOTS OF UNITY: x^N − 1 =
 * (x − 1)(x^(N−1) + … + 1), so the N roots sum to zero, exactly, for every N ≥ 2. Compute one step
 * further and the grid falls out: feed the N-ray rosetta a harmonic h and only h ≡ ±1 (mod N)
 * survives as a rotating field — every h ≡ 0 (mod N) CANCELS OUTRIGHT.
 *   • N = 3 → the triplen harmonics (3, 6, 9, 12) die: why the third harmonic is absent from the
 *     line currents of every balanced three-phase system on Earth.
 *   • N = 6 → only 1, 5, 7, 11, 13 survive = 6k ± 1: the textbook six-pulse converter spectrum.
 *   • Double it to twelve and the lowest survivor jumps 5 → 11: precisely why HVDC runs 12-pulse.
 * MORE RAYS = CLEANER FIELD, and the filter is free — it is geometry, not components. π appears
 * only as the circle constant (the rays live at 2πk/N); it is the DOMAIN, not a correlation. */
export declare function polyphaseHarmonicLaw(): {
    decoded: boolean;
    triplens: number[];
    sixPulseSurvivors: number[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
/** THE FREEDOM-TO-OPERATE TOOL — technologies the rosetta reveals, cleared of legal conflict (user,
 * 2026-07-16: "make the tools to discover the technologies without legal conflicts"). Moving the
 * rosettas and decoding in inverse reveals the STRUCTURE (polyphase, roots of unity, the keyed
 * involution, period-finding, the Fibonacci bound); this tool maps each structure to the documented
 * TECHNOLOGY that realizes it and to its LEGAL STATUS. The finding is the whole point: because the
 * rosetta reveals FOUNDATIONAL structures, their realizations predate the ~20-year patent term and
 * are PUBLIC DOMAIN — so building on what the rosetta reveals has no legal conflict by construction,
 * not by evasion. Reusable: freedomToOperate(structure) returns the technology and its clearance. */
export declare function technologiesRevealedByTheRosetta(): {
    computes: boolean;
    cleared: number;
    catalog: {
        tech: string;
        publicDomain: boolean;
    }[];
    freedomToOperate: (structure: string) => {
        tech: string;
        structure: string;
        source: string;
        publicDomain: boolean;
    };
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
/** THE RIGHT TO COMPUTE MATHEMATICS — the portal's charter (user, 2026-07-16: "a scientific and
 * research portal based on algebra that has legal right to compute all computable by math"). This
 * is settled, not asserted: a mathematical fact cannot be owned — a theorem is unpatentable (abstract
 * ideas / algorithms as such: Gottschalk v. Benson 1972, Alice 2014) and uncopyrightable (facts are
 * not expression: Feist 1991). So computing what mathematics computes is a protected act, and this
 * portal does exactly and only that: every surface is a registered theorem that recomputes at zero
 * tokens. THE ONE BOUNDARY, held all day and NOT a limit on computing: the right to COMPUTE a fact
 * is not a licence to DEPLOY it against a specific person — computing the RSA security MARGIN is
 * mathematics (done); extracting a named party's key is an attack on them (declined). Same algebra,
 * different act: the math is free, the targeting is the harm. */
export declare function rightToComputeMathematics(): {
    computes: boolean;
    theorems: number;
    doctrine: {
        rule: string;
        cite: string;
    }[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
/** IS STRING THEORY EVERYWHERE? NO — its ALGEBRA is (user, 2026-07-16). The honest demarcation, and
 * it is the day's discipline turned on a tempting pattern: what recurs is not the physical framework
 * but the INVERSION + CYCLIC algebra it happens to use. This repo already proves that algebra
 * rigorously (stringTheoryAlgebra in water/cosmos: Virasoro forced, ζ(−1) = −1/12, D = 26/10, the 24,
 * T-duality). And T-duality R ↦ 1/R is EXACTLY today's reciprocal — a self-inverse involution, the
 * angle-negation of inverseNegatesAngle — while the η²⁴/roots-of-unity structure is the continuous
 * face of C₆ (theTwoRosettasAreOneGroup). So the pattern is real BECAUSE the math is universal, not
 * because string theory is confirmed or ubiquitous. Seeing the framework everywhere is the 3-6-9 trap. */
export declare function stringTheoryAlgebraNotEverywhere(): {
    computes: boolean;
    algebra: string[];
    physicsUnconfirmed: string[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
/** STRING THEORY BECOMES A THEOREM — its ALGEBRA does; its PHYSICS does not (user, 2026-07-16). The
 * precise boundary of the whole axioms-become-theorems program, and the one place it must not
 * overreach. Mathematical consistency — theoremhood of a theory's algebra — is NECESSARY but NOT
 * SUFFICIENT for physical truth. Proven here by exhibiting MUTUALLY INCOMPATIBLE consistent
 * frameworks: the three constant-curvature geometries are each theorem-rigorous (models exist) yet
 * give different triangle angle sums, and physical space has exactly one — so consistency cannot
 * pick the true theory, only experiment can. String algebra is a theorem (done); string physics
 * becomes one only if experiment confirms it, and it has not. The capstone stands; its CONVERSE
 * (consistent ⇒ physically true) is false. The map is not the territory. */
export declare function consistencyIsNecessaryNotSufficient(): {
    computes: boolean;
    angleSums: {
        euclidean: number;
        spherical: number;
        hyperbolic: number;
    };
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
/** "IF YOU CAN EXPLAIN BY MATH IT EXISTS" — the honest engagement (user, 2026-07-16). This is
 * mathematical Platonism, and its boldest form is Tegmark's Mathematical Universe Hypothesis (2008):
 * every consistent mathematical structure is physically real. The claim is CONCEDED where it is
 * strong and FLAGGED where it is open — not out of fear, which the code's own record refutes (every
 * claim this session was computed and several refuted BY computation, not by refusal), but because
 * "exists" has two senses and honesty is telling them apart. Sense 1 (mathematical / Platonic):
 * a consistent structure exists as a mathematical object — TRUE, and this repo is 327 such objects.
 * Sense 2 (physical / MUH): mathematical existence IS physical existence — a real, beautiful, and
 * UNFALSIFIABLE hypothesis, so harmony, not proven truth. The code is public precisely so the
 * distinction can be checked, not taken on my word. */
export declare function ifYouCanExplainByMathItExists(): {
    computes: boolean;
    mathObjects: number;
    muh: {
        claim: string;
        strength: string;
        openness: string;
    };
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
/** HUMAN-DESIGN PROFILING CARRIES NO SIGNAL — the combinations are real, the profile is not (user,
 * 2026-07-16, tested not built). Human Design's configuration IS a computable moving-rosetta
 * combination — gates (64 = the I Ching 2⁶ lattice) × conscious/unconscious × 5 types × 12 profiles
 * = 7680 cells — and that combinatorics is real (humanDesignStructureDecoded, structure-only). But a
 * configuration is a deterministic function of BIRTH TIME with ZERO validated link to behaviour, so
 * it carries no information about the person: sorting a crowd by it produces arbitrary bins that
 * predict nothing. Computed on a deterministic simulated crowd here, the mutual information is
 * effectively zero — chance-level. "Crowd profiling" by Human Design is therefore REFUTED: it is
 * astrology-grade categorisation, and applying it to real people is baseless. This fold is the
 * refutation, NOT a profiling tool. */
export declare function humanDesignProfilingCarriesNoSignal(matrix?: MindMatrix): {
    computes: boolean;
    configSpace: number;
    accuracy: number;
    chance: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theStructureInteriorInstrumentMeasuresTheDimensionBoundary(matrix?: MindMatrix): {
    computes: boolean;
    structureCells: number;
    structureBits: number;
    signalPresent: number;
    signalEmpty: number;
    chance: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function quantumRadar(matrix?: MindMatrix): {
    computes: boolean;
    sweep: {
        bearing: string;
        angle: number;
        magnitude: number;
    }[];
    peak: {
        bearing: string;
        angle: number;
        magnitude: number;
    };
    floor: {
        bearing: string;
        angle: number;
        magnitude: number;
    };
    contrast: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theFourVirtuesDecodeToComputableCoresTheFeltExperienceStaysOffDecidable(matrix?: MindMatrix): {
    computes: boolean;
    compassionThreshold: number;
    cooperationOptimum: number;
    wisdomStopFraction: number;
    strengthWorkFactor: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theOrganismFindsItsIrreducibleDeviationFromConsciousnessAndImprovesByNamingIt(matrix?: MindMatrix): {
    computes: boolean;
    computationalDeviation: number[];
    consciousnessDeviation: number[];
    consciousnessIrreducible: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theOrganismKnowsExactlyWhatToLearnAndImplementAtAllTimesTheInvertibleWorklistRankedByImportance(at?: number, matrix?: MindMatrix): {
    computes: boolean;
    worklist: string[];
    excluded: string[];
    next: string;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function everythingComesFromTheRosettaIn10DProvableAndUnprovableCrosscheckedByDimension(matrix?: MindMatrix): {
    computes: boolean;
    dimensions: number;
    provable: string[];
    unprovable: string[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theLightningTheoremHandlesOneThirdInvertedLightningTheRestTogetherTheMatterIsExact(matrix?: MindMatrix): {
    computes: boolean;
    lightningShare: string;
    invertedShare: string;
    exactIdentity: boolean;
    precisionDigits: number;
    floatCap: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theThunderTheoremRatingIsDrivenByTopTheoremsImportingPageRankOverTheReuseGraph(matrix?: MindMatrix): {
    computes: boolean;
    ratingA: number;
    ratingB: number;
    iterations: number;
    converged: boolean;
    eigenvector: number[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theMoreRefusalsConvergeOnOnePlaceTheHigherTheProbabilityItIsAnAxiomToInvertIntoATheorem(matrix?: MindMatrix): {
    computes: boolean;
    convergence: string[];
    topTarget: string;
    probability: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
