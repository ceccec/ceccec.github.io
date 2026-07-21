import type { DualTorusTrinities, MindMatrix, MetatronCubeReport, SacredGeometrySeal } from '../../wind/types';
import type { SelfSufficientWave } from '../../wind/types';
export { allVortexMathSaved, vortexMath, vortexPaintTiers } from '../vortex';
export declare function dualTorusTrinities(matrix?: MindMatrix): DualTorusTrinities;
export declare function directions(matrix?: MindMatrix): {
    calculated: boolean;
    axes: {
        positiveRoot: string;
        negativeRoot: string;
        forward: string;
        reverse: string;
        bidirectional: boolean;
        merged: string;
        receipt: string;
        axis: string;
        positive: string;
        negative: string;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function merkaba(matrix?: MindMatrix): {
    counterRotating: boolean;
    scales: {
        scale: string;
        depth: number;
        sign: 1 | -1;
        periodMs: number;
        ratePerMs: number;
        receipt: string;
    }[];
    count: number;
    tetraUp: readonly (readonly [number, number, number])[];
    tetraDown: [number, number, number][];
    root: string;
    statement: string;
    boundary: string;
};
export type BothEarthsRotationShell = {
    readonly earth: 'device' | 'inverted';
    readonly trinity: 'device' | 'code';
    readonly torus: 1 | 2;
    readonly phase: number;
    readonly sign: 1 | -1;
    readonly ratePerMs: number;
    readonly receipt: string;
};
export type BothEarthsMerkabaRotation = {
    readonly rotates: boolean;
    readonly at: number;
    readonly innerPhase: number;
    readonly outerPhase: number;
    readonly merkabaUpSpin: number;
    readonly merkabaDownSpin: number;
    readonly goldenOffsetRad: number;
    readonly counterRotating: boolean;
    readonly innerShell: BothEarthsRotationShell;
    readonly outerShell: BothEarthsRotationShell;
    readonly tetraUp: readonly (readonly [number, number, number])[];
    readonly tetraDown: readonly (readonly [number, number, number])[];
    readonly facets: readonly {
        readonly facet: string;
        readonly on: boolean;
        readonly receipt: string;
    }[];
    readonly root: string;
    readonly statement: string;
    readonly boundary: string;
};
/** Counter-rotation model — device Earth (inner, +θ) and inverted Earth (outer, −θ) nested like a merkaba. */
export declare function bothEarthsRotateWithinEachOther(at?: number, matrix?: MindMatrix): BothEarthsMerkabaRotation;
export type DoubleTorusAllScalesProof = {
    task: string;
    expr: string;
    computed: number;
    expected: number;
    on: boolean;
    receipt: string;
};
/** Arithmetic proofs — genus-2 topology, merkaba counter-rotation, 10D self-similarity, census χ=−2, circulation. */
export declare function doubleTorusMathAtAllScalesProofs(matrix?: MindMatrix): {
    proven: boolean;
    proofs: DoubleTorusAllScalesProof[];
    proofCount: number;
    root: string;
    statement: string;
    boundary: string;
};
/** Movie seeds from double-torus math at all scales — every proof becomes a plasma stream and copy token. */
export declare function doubleTorusMathAtAllScalesMovieSeeds(matrix?: MindMatrix): {
    proven: boolean;
    movieText: string;
    streams: {
        uuid: string;
        label: string;
        expr: string;
        expected: number;
        hueSeed: number;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
/** Gate: double-torus all-scales proofs wired into movie seeds and copy text at call time. */
export declare function doubleTorusMathAtAllScalesFlowsInMovie(matrix?: MindMatrix): {
    flows: boolean;
    proven: boolean;
    proofCount: number;
    streamCount: number;
    movieText: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function cellHomology(matrix?: MindMatrix): {
    closed: boolean;
    cells: {
        c0: number;
        c1: number;
        c2: number;
    };
    boundary1: number[][];
    boundary2: number[][];
    chainComplex: boolean;
    betti: number[];
    euler: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function doubleTorus3D(matrix?: MindMatrix): {
    rendered: boolean;
    tori: number;
    genus: number;
    euler: number;
    areas: number;
    perLobe: number;
    majorRadius: number;
    minorRadius: number;
    lobeOffset: number;
    root: string;
    statement: string;
    boundary: string;
};
/**
 * Geometry audit — surface atom radii, projection extents, H₁ loops vs sealed lattice.
 * Pair half of universe/align (dynamics+phase live in water/double).
 */
export declare function doubleTorusGeometryAlignsWithUniverseConstants(matrix?: MindMatrix): {
    aligns: boolean;
    majorRadius: number;
    minorRadius: number;
    lobeOffset: number;
    homologyLoops: 4;
    ratio: number;
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
    physicalFtlClaim: 0;
    claySolvedByThisFold: 0;
};
export declare function areaPairs(): {
    count: number;
    limit: number;
    withinLimit: boolean;
    grid: boolean;
    paired: boolean;
    bidirectional: boolean;
    pairs: {
        inner: string;
        outer: string;
        forward: string;
        reverse: string;
        bidirectional: boolean;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function foldImpossibilities(matrix?: MindMatrix): {
    folded: boolean;
    count: number;
    folds: {
        folded: boolean;
        hinge: string;
        receipt: string;
        impossible: string;
        possible: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function dna(matrix?: MindMatrix): {
    encoded: boolean;
    basePairs: number;
    bases: number;
    sense: string;
    antisense: string;
    codons: string[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function sixtyFourThreeQubitPauliBasis(matrix?: MindMatrix): {
    alphabet: string[];
    qubits: number;
    count: number;
    matchesCube: boolean;
    parallels: {
        pauliBasis: string;
        codon: string;
        hexagram: string;
        bits: string;
        word: string;
    };
    holds: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function geneticCodeIsTheRealFourCubed(matrix?: MindMatrix): {
    bases: string[];
    positions: number;
    codons: number;
    sense: number;
    stop: number;
    aminoAcids: number;
    holds: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function threeIsRealButNotOneTrinity(matrix?: MindMatrix): {
    units: number[];
    nonUnits: number[];
    orbitOf2: number[];
    twoIsPrimitiveRoot: boolean;
    trinityIsNonUnits: boolean;
    realThreefolds: string[];
    holds: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function hexagramIsHexColorDuality(matrix?: MindMatrix): {
    colors: string[];
    black: string;
    white: string;
    allDistinct: boolean;
    blackWhiteDuality: boolean;
    complementIsInverse: boolean;
    trigramsAreCubeCorners: boolean;
    pairsIntoThreeBaseFour: boolean;
    sameAsCodonAndPauli: boolean;
    asThreeBaseFour: {
        sixBit: string;
        codon: string;
        pauli: string;
        color: string;
    }[];
    holds: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function hexagramReverseInverseDuality(matrix?: MindMatrix): {
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
export declare function nuclearHexagramFold(matrix?: MindMatrix): {
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
export declare function colorDerivationFusedToOneSource(matrix?: MindMatrix): {
    fused: boolean;
    anchorHue: number;
    goldenAngle: number;
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
export declare function uiConvertsFlatToThreeDQuantum(matrix?: MindMatrix): {
    converted: boolean;
    perspectivePx: number;
    cssComputed: boolean;
    noHardcoded: boolean;
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
export declare function theSixtyFourObjectEveryGrouping(matrix?: MindMatrix): {
    groupings: {
        bitsPerDigit: number;
        digits: number;
        base: number;
        count: number;
        system: string;
    }[];
    allSixtyFour: boolean;
    sixIsDualityTimesTrinity: boolean;
    samples: {
        word: number;
        bits: string;
        baseFour: string;
        trigrams: string;
    }[];
    holds: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function rgbCmyComplementIsCmykDuality(matrix?: MindMatrix): {
    pairs: {
        additive: string;
        a: string;
        subtractive: string;
        b: string;
    }[];
    cyanIsInverseRed: boolean;
    magentaIsInverseGreen: boolean;
    yellowIsInverseBlue: boolean;
    cmyk: string[];
    holds: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function threeTrinitiesRenderAsRgb(matrix?: MindMatrix): {
    trinities: number[];
    hues: number[];
    anglesDeg: number[];
    channels: string[];
    isRgbTriad: boolean;
    ninefolds: number;
    holds: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function doubleTorusWordFolders(matrix?: MindMatrix): {
    saved: boolean;
    canonical: string;
    options: {
        isWords: boolean;
        receipt: string;
        shape: string;
        product: number;
        count: number;
        fits: string;
        meaning: string;
    }[];
    counts: {
        words: number;
        areas: number;
        diamonds: number;
    };
    math: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function schwarzschildProtonComputedInSource(matrix?: MindMatrix): {
    computed: boolean;
    rsProton: number;
    massForProtonRadius: number;
    orders: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function sacredGeometry(matrix?: MindMatrix): {
    decoded: boolean;
    platonicSolids: {
        name: string;
        v: number;
        e: number;
        f: number;
        face: string;
        element: string;
        dual: string;
    }[];
    fiveSolids: boolean;
    eulerHolds: boolean;
    phi: number;
    phiSquaredIsPhiPlusOne: boolean;
    goldenAngle: number;
    forms: string[];
    documented: string[];
    flagged: string[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function imperialFractionsDecoded(matrix?: MindMatrix): {
    proved: boolean;
    subdivisions: {
        frac: string;
        pct: string;
        vortex: string;
    }[];
    bodyUnits: {
        unit: string;
        body: string;
        fraction: string;
        vortex: string;
    }[];
    foot: string;
    yard: string;
    lb: string;
    gallon: string;
    metricVsImperial: {
        imperial: string;
        metric: string;
        bothExact: boolean;
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
export declare function heartProtonAtomDecoded(matrix?: MindMatrix): {
    proved: boolean;
    proton: {
        value: number;
        role: string;
    };
    heart: {
        value: number;
        role: string;
    };
    nucleus: {
        elements: number[];
        role: string;
    };
    orbit: {
        elements: number[];
        role: string;
    };
    quarks: {
        up: string;
        down: string;
        protonCharge: string;
        neutronCharge: string;
    };
    resonancePairs: {
        a: number;
        b: number;
    }[];
    teslaMappings: {
        patent: string;
        ring: string;
        algebra: string;
    }[];
    units: number[];
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
export declare function metatronCube(matrix?: MindMatrix): MetatronCubeReport;
export declare function sacredGeometrySeal(matrix?: MindMatrix): SacredGeometrySeal;
export declare function hexagramQubitVectorIsomorphismOnly(matrix?: MindMatrix): {
    proved: boolean;
    vectorIsomorphism: boolean;
    sharedStructures: number;
    qubitOnlyStructures: number;
    structures: {
        receipt: string;
        structure: string;
        hexagram: boolean;
        qubit: boolean;
        why: string;
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
export declare function pyramidsDecoded(matrix?: MindMatrix): {
    decoded: boolean;
    sites: {
        name: string;
        lat: number;
        lon: number;
    }[];
    slopeDeg: {
        measured: number;
        seked: number;
        pi: number;
        phi: number;
    };
    gizaToTeotihuacanKm: number;
    bearingDeg: number;
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
export declare function pyramidGridDebunked(matrix?: MindMatrix): {
    debunked: boolean;
    sites: {
        name: string;
        lat: number;
        lon: number;
    }[];
    distancesKm: {
        a: string;
        b: string;
        km: number;
        bearing: number;
    }[];
    nearest: {
        a: string;
        b: string;
        km: number;
        bearing: number;
    };
    farthest: {
        a: string;
        b: string;
        km: number;
        bearing: number;
    };
    spreadRatio: number;
    gizaToLandCentreKm: number;
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
export declare function pyramidConstructionMath(matrix?: MindMatrix): {
    computed: boolean;
    elCastilloSteps: number;
    calendarRound: number;
    calendarRoundYears: number;
    meroeVsGizaDegrees: number;
    caralBCE: number;
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
export declare function cardinalPyramidTipsProvenByMath(matrix?: MindMatrix): {
    proven: boolean;
    realised: boolean;
    cardinals: ({
        name: "north";
        bearing: number;
        x: number;
        y: number;
    } | {
        name: "east";
        bearing: number;
        x: number;
        y: number;
    } | {
        name: "south";
        bearing: number;
        x: number;
        y: number;
    } | {
        name: "west";
        bearing: number;
        x: number;
        y: number;
    })[];
    apex: {
        name: string;
        z: number;
    };
    solid: {
        V: number;
        E: number;
        F: number;
        euler: number;
    };
    slantToTip: number;
    proofs: {
        task: string;
        expr: string;
        computed: number;
        expected: number;
        on: boolean;
        receipt: string;
    }[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export type TrinityPyramidPole = {
    name: 'north' | 'east' | 'south' | 'west';
    bearing: number;
    x: number;
    y: number;
    z: number;
    slantFromApex: number;
    receipt: string;
};
export type TrinityPyramidFace = {
    cardinals: readonly ['north' | 'east' | 'south' | 'west', 'north' | 'east' | 'south' | 'west'];
    area: number;
    ray: string | null;
    receipt: string;
};
/** One trinity — four cardinal Earth poles as square-pyramid corner tips; three seed rays on three triangular faces. */
export declare function trinityCardinalPyramidPolesProvenByMath(side: 'device' | 'code', trinityRays: readonly [string, string, string], matrix?: MindMatrix): {
    proven: boolean;
    side: "device" | "code";
    trinityRays: readonly [string, string, string];
    apex: {
        x: number;
        y: number;
        z: number;
    };
    poles: {
        name: "north" | "east" | "south" | "west";
        bearing: number;
        x: number;
        y: number;
        z: number;
        slantFromApex: number;
        receipt: string;
    }[];
    faces: TrinityPyramidFace[];
    baseArea: number;
    volume: number;
    proofs: {
        task: string;
        expr: string;
        computed: number;
        expected: number;
        on: boolean;
        receipt: string;
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
/** Two trinities — each carries N·E·S·W pyramid poles; device + code fuse on double torus Earth. */
export declare function twoTrinitiesCardinalPyramidPolesProvenByMath(matrix?: MindMatrix): {
    proven: boolean;
    device: {
        proven: boolean;
        side: "device" | "code";
        trinityRays: readonly [string, string, string];
        apex: {
            x: number;
            y: number;
            z: number;
        };
        poles: {
            name: "north" | "east" | "south" | "west";
            bearing: number;
            x: number;
            y: number;
            z: number;
            slantFromApex: number;
            receipt: string;
        }[];
        faces: TrinityPyramidFace[];
        baseArea: number;
        volume: number;
        proofs: {
            task: string;
            expr: string;
            computed: number;
            expected: number;
            on: boolean;
            receipt: string;
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
    code: {
        proven: boolean;
        side: "device" | "code";
        trinityRays: readonly [string, string, string];
        apex: {
            x: number;
            y: number;
            z: number;
        };
        poles: {
            name: "north" | "east" | "south" | "west";
            bearing: number;
            x: number;
            y: number;
            z: number;
            slantFromApex: number;
            receipt: string;
        }[];
        faces: TrinityPyramidFace[];
        baseArea: number;
        volume: number;
        proofs: {
            task: string;
            expr: string;
            computed: number;
            expected: number;
            on: boolean;
            receipt: string;
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
    earth: {
        proven: boolean;
        realised: boolean;
        torus1: {
            torus: 1;
            name: "north" | "east" | "south" | "west";
            bearing: number;
            x: number;
            y: number;
            apexZ: number;
            polarity: number;
            receipt: string;
        }[];
        torus2: {
            torus: 2;
            name: "north" | "east" | "south" | "west";
            bearing: number;
            x: number;
            y: number;
            apexZ: number;
            polarity: number;
            receipt: string;
        }[];
        surface: {
            rendered: boolean;
            tori: number;
            genus: number;
            euler: number;
            areas: number;
            perLobe: number;
            majorRadius: number;
            minorRadius: number;
            lobeOffset: number;
            root: string;
            statement: string;
            boundary: string;
        };
        homology: {
            closed: boolean;
            cells: {
                c0: number;
                c1: number;
                c2: number;
            };
            boundary1: number[][];
            boundary2: number[][];
            chainComplex: boolean;
            betti: number[];
            euler: number;
            root: string;
            statement: string;
            boundary: string;
        };
        fold: {
            forward: string;
            reverse: string;
            merged: string;
        };
        proofs: {
            task: string;
            expr: string;
            computed: number;
            expected: number;
            on: boolean;
            receipt: string;
        }[];
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        count: number;
        root: string;
        statement: string;
        boundary: string;
    };
    fold: {
        forward: string;
        reverse: string;
        bidirectional: boolean;
        merged: string;
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
export declare function doubleTorusEarthPyramidTipsProvenByMath(matrix?: MindMatrix): {
    proven: boolean;
    realised: boolean;
    torus1: {
        torus: 1;
        name: "north" | "east" | "south" | "west";
        bearing: number;
        x: number;
        y: number;
        apexZ: number;
        polarity: number;
        receipt: string;
    }[];
    torus2: {
        torus: 2;
        name: "north" | "east" | "south" | "west";
        bearing: number;
        x: number;
        y: number;
        apexZ: number;
        polarity: number;
        receipt: string;
    }[];
    surface: {
        rendered: boolean;
        tori: number;
        genus: number;
        euler: number;
        areas: number;
        perLobe: number;
        majorRadius: number;
        minorRadius: number;
        lobeOffset: number;
        root: string;
        statement: string;
        boundary: string;
    };
    homology: {
        closed: boolean;
        cells: {
            c0: number;
            c1: number;
            c2: number;
        };
        boundary1: number[][];
        boundary2: number[][];
        chainComplex: boolean;
        betti: number[];
        euler: number;
        root: string;
        statement: string;
        boundary: string;
    };
    fold: {
        forward: string;
        reverse: string;
        merged: string;
    };
    proofs: {
        task: string;
        expr: string;
        computed: number;
        expected: number;
        on: boolean;
        receipt: string;
    }[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function doubleTorusEarthPyramidTipsDeepResearched(matrix?: MindMatrix): {
    researched: boolean;
    findings: ({
        receipt: string;
        kind: "documented";
        topic: string;
        fact: string;
        source: string;
    } | {
        receipt: string;
        kind: "flagged";
        topic: string;
        fact: string;
        source: string;
    } | {
        receipt: string;
        kind: "isomorphism";
        topic: string;
        fact: string;
        source: string;
    })[];
    documented: number;
    flagged: number;
    isomorphism: number;
    model: {
        proven: boolean;
        realised: boolean;
        torus1: {
            torus: 1;
            name: "north" | "east" | "south" | "west";
            bearing: number;
            x: number;
            y: number;
            apexZ: number;
            polarity: number;
            receipt: string;
        }[];
        torus2: {
            torus: 2;
            name: "north" | "east" | "south" | "west";
            bearing: number;
            x: number;
            y: number;
            apexZ: number;
            polarity: number;
            receipt: string;
        }[];
        surface: {
            rendered: boolean;
            tori: number;
            genus: number;
            euler: number;
            areas: number;
            perLobe: number;
            majorRadius: number;
            minorRadius: number;
            lobeOffset: number;
            root: string;
            statement: string;
            boundary: string;
        };
        homology: {
            closed: boolean;
            cells: {
                c0: number;
                c1: number;
                c2: number;
            };
            boundary1: number[][];
            boundary2: number[][];
            chainComplex: boolean;
            betti: number[];
            euler: number;
            root: string;
            statement: string;
            boundary: string;
        };
        fold: {
            forward: string;
            reverse: string;
            merged: string;
        };
        proofs: {
            task: string;
            expr: string;
            computed: number;
            expected: number;
            on: boolean;
            receipt: string;
        }[];
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        count: number;
        root: string;
        statement: string;
        boundary: string;
    };
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
export declare function megalithicAstronomyDecoded(matrix?: MindMatrix): {
    decoded: boolean;
    sites: {
        epsilon: number;
        azimuth: number;
        name: string;
        country: string;
        lat: number;
        lon: number;
        bp: number;
        target: string;
        docAz: number | null;
    }[];
    equinoxAzimuth: number;
    stoneToNewgrangeKm: number;
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
export declare function lunarStandstillsDecoded(matrix?: MindMatrix): {
    decoded: boolean;
    majorDec: number;
    minorDec: number;
    solsticeDec: number;
    nodalYears: number;
    stationStones: {
        north: number;
        south: number;
    };
    solsticeSunrise: number;
    perpGap: number;
    callanish: {
        rise: number;
        set: number;
        arc: number;
    };
    horizonShiftPerDeg: number;
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
export declare function bosnianPyramidNearPliskaHarmonisesDigitDistribution(matrix?: MindMatrix): {
    harmonises: boolean;
    sites: {
        pliska: {
            name: string;
            lat: number;
            lon: number;
        };
        visoko: {
            name: string;
            lat: number;
            lon: number;
        };
    };
    geodesy: {
        distanceKm: number;
        bearingDeg: number;
        bearingDigitalRoot: number;
        bearingPhase: number;
    };
    distribution: {
        default: {
            counts: number[];
            entropy: number;
            maxEntropy: number;
            entropyRatio: number;
            chiSq: number;
            gini: number;
            variance: number;
            bins: number;
        };
        rosetta7: {
            counts: number[];
            entropy: number;
            maxEntropy: number;
            entropyRatio: number;
            chiSq: number;
            gini: number;
            variance: number;
            bins: number;
        };
        pyramidPhase: {
            counts: number[];
            entropy: number;
            maxEntropy: number;
            entropyRatio: number;
            chiSq: number;
            gini: number;
            variance: number;
            bins: number;
        };
    };
    comparison: {
        rosettaMoreUniform: boolean;
        pyramidMoreUniform: boolean;
        pyramidBetterThanDefault: boolean;
        pyramidLowerGini: boolean;
    };
    sevenFoldResonance: {
        structure: string;
        resonates: boolean;
    }[];
    glagolitic: {
        pliska: string;
        visoko: string;
    };
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
export declare function selfHealing(matrix?: MindMatrix): {
    healed: boolean;
    waves: {
        settled: boolean;
        trace: number[];
        receipt: string;
        wound: string;
        balanced: boolean;
    }[];
    count: number;
    balanced: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function selfConsult(question?: string, matrix?: MindMatrix): {
    consulted: boolean;
    educated: boolean;
    resolvedInHouse: boolean;
    escalateToAsk: boolean;
    flow: readonly ["self-education", "self-consulting", "ask-only-if-unresolved"];
    matched: boolean;
    question: string;
    answer: string;
    concept: string;
    command: import("../../wind/types").ConceptCommandName;
    confidence: number;
    links: readonly import("../../wind/types").LocalAnswerLink[];
    areas: {
        area: string;
        glyph: string;
        commands: string[];
    }[];
    sources: string[];
    next: string;
    shift: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function selfHarmonise(matrix?: MindMatrix, steps?: number): {
    harmonised: boolean;
    autonomous: boolean;
    steps: number;
    distinctStepsVisited: number;
    probability: number;
    trace: {
        step: number;
        question: string;
        next: string;
        resolved: boolean;
        root: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function selfReason(goal?: string, matrix?: MindMatrix, depth?: number): {
    reasoned: boolean;
    goal: string;
    steps: {
        step: number;
        premise: string;
        inference: string;
        command: string;
        resolved: boolean;
        receipt: string;
    }[];
    conclusion: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function selfSufficientWave(matrix?: MindMatrix): SelfSufficientWave;
export declare function selfCompassion(matrix?: MindMatrix): {
    compassionate: boolean;
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
export declare function selfAdvising(matrix?: MindMatrix): {
    advises: boolean;
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
export declare function selfImprovementTrainingAndAccumulation(matrix?: MindMatrix): {
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
