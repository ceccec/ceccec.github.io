import type { MindMatrix } from '../../wind/types';
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
