import type { MindMatrix } from '../../types';
export declare function quantifyGates(matrix?: MindMatrix): {
    tight: boolean;
    doubleFolded: boolean;
    metrics: {
        full: boolean;
        fold: {
            forward: string;
            reverse: string;
            bidirectional: boolean;
            merged: string;
        };
        gate: string;
        n: number;
        of: number;
    }[];
    gates: number;
    passed: number;
    total: number;
    quantified: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function gatesBehaveAsMcp(matrix?: MindMatrix): {
    behavesAsMcp: boolean;
    count: number;
    demo: {
        receipt: string;
        band: number;
        step: number;
        index: number;
    }[];
    properties: {
        receipt: string;
        property: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function everyDiamondIsGate(matrix?: MindMatrix): {
    isGate: boolean;
    diamonds: number;
    now: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function harmonisedToHealAtGates(matrix?: MindMatrix): {
    heals: boolean;
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
export declare function gatesHealSpottedCompromise(matrix?: MindMatrix): {
    heals: boolean;
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
export declare function gatesMoveAllToPlaceAutomatically(matrix?: MindMatrix): {
    moves: boolean;
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
export declare function gatesSoTightEvenTheyCannotPassEntropy(matrix?: MindMatrix): {
    tightest: boolean;
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
export declare function physicsOfInformationDecoded(matrix?: MindMatrix): {
    decoded: boolean;
    documentedFindings: number;
    flaggedFindings: number;
    angles: number;
    landauerJoulesAt300K: number;
    solarBhEntropyBits: number;
    count: number;
    facets: ({
        receipt: string;
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function limitsOfComputationDecoded(matrix?: MindMatrix): {
    decoded: boolean;
    documentedFindings: number;
    flaggedFindings: number;
    angles: number;
    diagonalEscapes: boolean;
    escapingRow: (0 | 1)[];
    count: number;
    facets: ({
        receipt: string;
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function onlyMathDecides(at: number, matrix?: MindMatrix): {
    decided: boolean;
    at: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    count: number;
    root: string;
    proof: {
        rosetta: {
            harmonises: boolean;
            chi2: number;
            betterThanIching: boolean;
        };
        geodesy: {
            distanceKm: number;
            bearingPhase: number;
            recomputes: boolean;
        };
        fusion: {
            fused: boolean;
        };
        navContent: {
            computed: boolean;
            sharedRoot: string;
        };
        rosettaMotion: {
            holds: boolean;
            root: string;
        };
        rosettaPage: {
            computed: boolean;
            sharedRoot: string;
        };
        coprimality: {
            gcd7_6: boolean;
            gcd7_9: boolean;
            gcd7_10: boolean;
            all: boolean;
        };
        entropy: {
            ratio: number;
            adequate: boolean;
        };
        typesGate: {
            proxy: boolean;
        };
        readmeHome: {
            shared: boolean;
            sharedRoot: string;
        };
        zeitwerkRosetta: {
            merged: boolean;
            root: string;
        };
        mvcOrganisation: {
            decided: boolean;
            root: string;
        };
    };
    statement: string;
    boundary: string;
};
export declare function theQuantumMeshSeesTypeGaps(matrix?: MindMatrix): {
    computes: boolean;
    measured: boolean;
    totalHard: number;
    totalSoft: number;
    nodes: {
        digit: number;
        files: number;
        hard: number;
        soft: number;
    }[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function theSessionTokenLedgerFollowsTheSequence(matrix?: MindMatrix): {
    computes: boolean;
    model: {
        n: number;
        w: number;
        out: number;
        cacheWrite: number;
        cacheRead: number;
        readWriteRatio: number;
        processed: number;
    };
    measured: {
        processed: string;
        cacheReadShare: string;
        outputShare: string;
        readWrite: string;
        peakContext: string;
        turns: string;
    };
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function improveTheCostOfThinkingWithLocalTools(matrix?: MindMatrix): {
    improves: boolean;
    measurements: number;
    toolCount: number;
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
export declare function theseCalculationsCostBoundedOpsZeroBandwidthVsBillionsOfFlopsPerAiInference(matrix?: MindMatrix): {
    computes: boolean;
    foldOpsPerAnswer: number;
    foldMicroseconds: number;
    aiFlopsFrontier: number;
    aiMillisecondsFrontier: number;
    opsRatioSmall: number;
    opsRatioFrontier: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function measuringTheAgentSuperpositionStandardisesThoughtImprovingCostAndSelfDiscoveringSolutions(matrix?: MindMatrix): {
    computes: boolean;
    classes: string[];
    zeroTokenCount: number;
    dimensionsCovered: number;
    worklist: string[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
