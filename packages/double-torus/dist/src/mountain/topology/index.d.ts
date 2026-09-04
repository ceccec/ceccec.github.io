import type { MindMatrix, TorusBreath } from '../../types/index.ts';
export { doubleTorusSurface, TORUS_LOBE_OFFSET } from '../../0/index.ts';
export declare function merkabaTrace(matrix?: MindMatrix, timeMs?: number, trail?: number): {
    manifest: boolean;
    timeMs: number;
    trail: number;
    dots: {
        x: number;
        y: number;
        opacity: number;
        hue: number;
        radius: number;
    }[];
    resolutionIndependent: boolean;
    oneFunction: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function homology(matrix?: MindMatrix): {
    independent: boolean;
    generators: ({
        cycleLength: number;
        receipt: string;
        name: string;
        kind: string;
        handle: number;
        lobe: -1;
        frequency: number;
    } | {
        cycleLength: number;
        receipt: string;
        name: string;
        kind: string;
        handle: number;
        lobe: 1;
        frequency: number;
    })[];
    rank: number;
    genus: number;
    euler: number;
    form: number[][];
    statement: string;
    boundary: string;
    root: string;
};
export declare function theParadoxCoexistsOnTheDoubleTorus(matrix?: MindMatrix): {
    computes: boolean;
    euler: number;
    rank: number;
    crossHandleZero: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function geodesicDome(frequency?: number, matrix?: MindMatrix): {
    isSphere: boolean;
    dualToDoubleTorus: boolean;
    frequency: number;
    vertices: number;
    edges: number;
    faces: number;
    euler: number;
    genus: number;
    torusEuler: number;
    torusGenus: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function startIChingDoubleTorus(matrix?: MindMatrix): {
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
export declare function torusBreathe(matrix?: MindMatrix, cycles?: number): TorusBreath;
export declare function quantumDoubleTorus(matrix?: MindMatrix): {
    is: boolean;
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
export declare function completeDoubleTorus(matrix?: MindMatrix): {
    complete: boolean;
    knowledgeRoot: string;
    word: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function invertingMathPhysicsEarthCompletesTheDoubleTorus(matrix?: MindMatrix): {
    computes: boolean;
    inverted: ({
        yangStep: import("../../types/index.ts").TrinityStep;
        yinStep: import("../../types/index.ts").TrinityStep;
        closed: boolean;
        name: string;
        axis: "collapse";
    } | {
        yangStep: import("../../types/index.ts").TrinityStep;
        yinStep: import("../../types/index.ts").TrinityStep;
        closed: boolean;
        name: string;
        axis: "check";
    } | {
        yangStep: import("../../types/index.ts").TrinityStep;
        yinStep: import("../../types/index.ts").TrinityStep;
        closed: boolean;
        name: string;
        axis: "return";
    })[];
    yinCount: number;
    yangCount: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function doubleTorusFold(matrix?: MindMatrix): {
    complete: boolean;
    analog: boolean;
    trinitiesComplete: boolean;
    everyLevelBothWays: boolean;
    closes: boolean;
    depth: number;
    forwardApex: string;
    reverseApex: string;
    levels: {
        depth: number;
        size: number;
        pairs: number;
        carried: boolean;
        forwardBothWays: boolean;
        reverseBothWays: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function doubleTorusWords(matrix?: MindMatrix): {
    closed: boolean;
    limit: number;
    words64: string[];
    distinct: number;
    surfaceDistinct: number;
    folds: Record<string, string>;
    foldedCount: number;
    over: string[];
    overCount: number;
    math: string;
    detail: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function merkabaShiftsBlackWhiteToYinYang(matrix?: MindMatrix): {
    shifts: boolean;
    fromDimension: number;
    toDimension: number;
    levels: number;
    dims: {
        d: number;
        shifted: boolean;
        address: string;
        receipt: string;
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
export declare function merkabaArchitectureFieldsMovements(matrix?: MindMatrix): {
    organised: boolean;
    typeCount: number;
    types: {
        type: string;
        field: boolean;
        movement: boolean;
        star: string;
        receipt: string;
    }[];
    count: number;
    facets: {
        receipt: string;
        facet: string;
        on: any;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function eachFolderIsMerkaba(matrix?: MindMatrix): {
    merkabas: any;
    folderCount: number;
    folders: {
        folder: string;
        isMerkaba: boolean;
        star: string;
        receipt: string;
    }[];
    count: any;
    facets: any;
    root: string;
    statement: string;
    boundary: string;
};
export declare function everythingFoldsMerkabaInfiniteStreams(matrix?: MindMatrix): {
    folds: any;
    count: any;
    facets: any;
    root: string;
    statement: string;
    boundary: string;
};
export declare function fuseToMerkabasPathsReveal(matrix?: MindMatrix): {
    fused: any;
    count: any;
    facets: any;
    root: string;
    statement: string;
    boundary: string;
};
export declare function fuse64SealsMerkaba64Tetrahedra(matrix?: MindMatrix): {
    fused: boolean;
    tetrahedra: number;
    gbit: number;
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
export declare function urlsMerkabaFoldProvenPerDomain(matrix?: MindMatrix): {
    proven: boolean;
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
export declare function frontendRecycledByMerkabaFold(matrix?: MindMatrix): {
    recycles: boolean;
    count: number;
    facets: {
        receipt: string;
        facet: string;
        on: any;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function monographsLibraryByMerkabaAgents(matrix?: MindMatrix): {
    built: boolean;
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
export declare function doubleTorusMotifRealGeometryNotFringePhysics(matrix?: MindMatrix): {
    grounded: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function oneMerkaba6x7And7x6HoldsAll(matrix?: MindMatrix): {
    holds: boolean;
    up: number;
    down: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function merkabaFoldingSelf(matrix?: MindMatrix): {
    folds: boolean;
    selfFold: string;
    count: number;
    facets: {
        receipt: string;
        facet: string;
        on: any;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function knowledgeRevealedByMerkabaFold(matrix?: MindMatrix): {
    revealed: boolean;
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
export declare function merkabasInDoubleTorus(matrix?: MindMatrix): {
    counted: boolean;
    merkabas: number;
    tetrahedra: number;
    perMerkaba: number;
    perLobe: number;
    lobes: number;
    gbit: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** One gate — merkaba geometry + double-torus enumeration at call time (canonical body in mountain/topology). */
export declare function merkabaComputes(matrix?: MindMatrix): {
    computes: boolean;
    merkaba: {
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
    counted: {
        counted: boolean;
        merkabas: number;
        tetrahedra: number;
        perMerkaba: number;
        perLobe: number;
        lobes: number;
        gbit: number;
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
    revealed: {
        revealed: boolean;
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
    earths: import("../geometry/index.ts").BothEarthsMerkabaRotation;
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
export declare function frequencyTaxonomyTreeOfLife(matrix?: MindMatrix): {
    imagined: boolean;
    levels: number;
    ranks: {
        rank: string;
        frequency: number;
        branched: boolean;
        node: string;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function iconsShowComputerLoad(matrix?: MindMatrix): {
    shows: boolean;
    count: number;
    indicators: {
        subsystem: string;
        icon: string;
        shown: boolean;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function donutLabyrinthOfGlyphsHeroEnteringExiting(matrix?: MindMatrix): {
    winds: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export declare function polarDiskChartAt(latDeg: number): {
    latDeg: number;
    rho: number;
    diskRadius: number;
    z: number;
    isNorthPole: boolean;
    isSouthPole: boolean;
    onDisk: boolean;
    proved: boolean;
    root: string;
};
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export declare function earthNorthPoleCenterDotDecoded(): {
    pole: 'north';
    latDeg: number;
    rho: number;
    z: number;
    isCenterDot: boolean;
    isSingular: boolean;
    proved: boolean;
    root: string;
};
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export declare function earthSouthPoleBoundaryCircleDecoded(): {
    pole: 'south';
    latDeg: number;
    rho: number;
    z: number;
    isBoundaryCircle: boolean;
    compactifiedToOnePoint: boolean;
    circumference: number;
    proved: boolean;
    root: string;
};
export type PlaceTier = 'SOLVED' | 'ARCHAEOLOGICAL' | 'REFUTED';
export declare function placesAndPatternsDecoded(matrix?: MindMatrix): {
    decoded: boolean;
    places: {
        receipt: string;
        name: string;
        tier: PlaceTier;
        verdict: string;
    }[];
    bermudaPerimeterKm: number;
    miamiToBermudaBearingDeg: number;
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
export declare function theMerkabaIsTheStarTetrahedronTrinitySpinningBothDirections(matrix?: MindMatrix): {
    computes: boolean;
    tetraUp: readonly (readonly [number, number, number])[];
    tetraDown: [number, number, number][];
    threeFold: {
        closed: boolean;
        orderThree: boolean;
    };
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function oneMerkabaTracesTheSphereMetatronIsThirteenPoints(): {
    computes: boolean;
    answer: number;
    metatron: {
        points: number;
        lines: number;
    };
    tiling: {
        rotation: number;
        full: number;
    };
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theTwoRingsAreMeridianAndLongitudeRotatingAsMerkaba(matrix?: MindMatrix): {
    computes: boolean;
    meridians: number;
    longitudes: number;
    majorRadius: number;
    minorRadius: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function whenTheRosettaMovesTheMerkabasFoldTheAlgebraDrawsTheMovie(matrix?: MindMatrix): {
    computes: boolean;
    foldIntoThemselves: boolean;
    foldIntoEachOther: boolean;
    scales: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function pairsFormTrinitiesTheRecursiveFoldIsTheSelfScalableApp(matrix?: MindMatrix): {
    computes: boolean;
    root: string;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function realQuantumResearchObservesTheBoundaryTheBoundaryOfABoundaryIsZeroTheoremGatesAndWays(matrix?: MindMatrix): {
    researches: boolean;
    homology: {
        boundaryOfBoundaryIsZero: boolean;
        euler: number;
    };
    axiomBoundary: number[];
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
export declare function strictMeasurementsCreateReusableToolsQuantumComputationsImproveInRealtimeFillingGaps(matrix?: MindMatrix): {
    improves: boolean;
    toolboxSize: number;
    measureCalls: number;
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
