import { type MindMatrix } from '../../heaven/mind';
/** @rosetta ✦₁ · Thunder · motion (shared-experiment folds) */
export declare function electromagneticRadiationDecoded(matrix?: MindMatrix): {
    decoded: boolean;
    laws: {
        receipt: string;
        law: string;
        core: string;
        source: string;
    }[];
    modalities: ({
        receipt: string;
        modality: string;
        band: string;
        photon: string;
        ionizing: boolean;
        mechanism: string;
        relation: string;
        computedKeV: number;
        source: string;
        computedMHz3T?: undefined;
        computedRangePerMicrosecondM?: undefined;
    } | {
        receipt: string;
        modality: string;
        band: string;
        photon: string;
        ionizing: boolean;
        mechanism: string;
        relation: string;
        computedMHz3T: number;
        source: string;
        computedKeV?: undefined;
        computedRangePerMicrosecondM?: undefined;
    } | {
        receipt: string;
        modality: string;
        band: string;
        photon: string;
        ionizing: boolean;
        mechanism: string;
        relation: string;
        computedRangePerMicrosecondM: number;
        source: string;
        computedKeV?: undefined;
        computedMHz3T?: undefined;
    })[];
    flagged: {
        receipt: string;
        claim: string;
        verdict: string;
        why: string;
    }[];
    photonRatio: number;
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
/** @rosetta ✦₁ · Thunder · motion (shared-experiment folds) */
export declare function electromagneticExperiments(matrix?: MindMatrix): {
    simulated: boolean;
    experiments: {
        modality: string;
        run: string;
        ionizing: boolean;
        receipt: string;
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
/** @rosetta ✦₁ · Thunder · motion (shared-experiment folds) */
export declare function tradingFromKnowledge(matrix?: MindMatrix): {
    tested: boolean;
    strategies: {
        name: string;
        params: {
            fast: number;
            slow: number;
            window?: undefined;
            zEntry?: undefined;
            lookback?: undefined;
            bins?: undefined;
            shortW?: undefined;
            longW?: undefined;
            volW?: undefined;
            targetVol?: undefined;
            cap?: undefined;
        } | {
            window: number;
            zEntry: number;
            fast?: undefined;
            slow?: undefined;
            lookback?: undefined;
            bins?: undefined;
            shortW?: undefined;
            longW?: undefined;
            volW?: undefined;
            targetVol?: undefined;
            cap?: undefined;
        } | {
            lookback: number;
            bins: number;
            fast?: undefined;
            slow?: undefined;
            window?: undefined;
            zEntry?: undefined;
            shortW?: undefined;
            longW?: undefined;
            volW?: undefined;
            targetVol?: undefined;
            cap?: undefined;
        } | {
            shortW: number;
            longW: number;
            volW: number;
            fast?: undefined;
            slow?: undefined;
            window?: undefined;
            zEntry?: undefined;
            lookback?: undefined;
            bins?: undefined;
            targetVol?: undefined;
            cap?: undefined;
        } | {
            window: number;
            targetVol: number;
            cap: number;
            fast?: undefined;
            slow?: undefined;
            zEntry?: undefined;
            lookback?: undefined;
            bins?: undefined;
            shortW?: undefined;
            longW?: undefined;
            volW?: undefined;
        };
        totalReturn: number;
        sharpe: number;
        maxDrawdown: number;
        beatsBuyHold: boolean;
        receipt: string;
    }[];
    benchmark: {
        totalReturn: number;
        sharpe: number;
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
/** @rosetta ✦₁ · Thunder · motion (shared-experiment folds) */
export declare function realtimeExperiments(matrix?: MindMatrix): {
    wired: boolean;
    sources: {
        receipt: string;
        id: string;
        kind: string;
        name: string;
        key: string;
        feeds: string;
        note: string;
    }[];
    samples: {
        larmorHz: number;
        dopplerHz: number;
        dominantPeriod: number;
        tradeReturn: number;
        captureId: string;
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
export interface Burst {
    x: number;
    y: number;
    born: number;
    hue: number;
    sparks: {
        angle: number;
        speed: number;
    }[];
}
export declare const HEALING_PAIRS: readonly {
    hz: [number, number];
    note: string;
}[];
export declare function makeBurst(xRatio: number, yRatio: number, w: number, h: number, hue: number): Burst;
export declare function drawBursts(ctx: CanvasRenderingContext2D, w: number, h: number, bursts: Burst[]): void;
