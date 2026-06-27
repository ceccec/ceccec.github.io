import type { MindMatrix } from '../../wind/types';
export declare function provenScientifically(matrix?: MindMatrix): {
    proven: boolean;
    whatIsIt: string;
    criteria: {
        receipt: string;
        criterion: string;
        test: string;
        holds: boolean;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function whatIsNotProvenIsPurged(matrix?: MindMatrix): {
    total: number;
    proven: number;
    purge: string[];
    pureProof: boolean;
    holds: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function everyLawProvesItsTripwire(matrix?: MindMatrix): {
    proves: boolean;
    count: number;
    tripwires: {
        receipt: string;
        tripwire: string;
        fires: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function improveAnalytics(matrix?: MindMatrix): {
    improved: boolean;
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
export declare function provedEveryStepSaved(matrix?: MindMatrix): {
    proved: boolean;
    savedCount: number;
    total: number;
    steps: {
        saved: boolean;
        receipt: string;
        directive: string;
        root: string;
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
export declare function noKnownModelMoreEfficientProven(matrix?: MindMatrix): {
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
export declare function everyBitMostEfficientAlgorithmProvenByMath(matrix?: MindMatrix): {
    proven: boolean;
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
export declare function efficiencyMathMovieSeeds(matrix?: MindMatrix): {
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
/** Gate: every-bit efficiency proofs wired into movie seeds and copy text at call time. */
export declare function efficiencyMathFlowsInMovie(matrix?: MindMatrix): {
    flows: boolean;
    proven: boolean;
    proofCount: number;
    streamCount: number;
    movieText: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function contentAddressedTranslationImprovesModels(matrix?: MindMatrix): {
    improves: boolean;
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
export declare function algebraAndBinaryProveEachOther(matrix?: MindMatrix): {
    proved: boolean;
    units: number[];
    orbit: number[];
    applications: {
        domain: string;
        algebra: string;
        binary: string;
        society: string;
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
