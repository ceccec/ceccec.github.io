import { type MindMatrix } from '../../heaven/mind/index.ts';
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
export declare function drawBursts(ctx: CanvasRenderingContext2D, w: number, h: number, bursts: Burst[], dark?: boolean): void;
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare const VACUUM_PERMITTIVITY = 8.8541878128e-12;
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare function waveNumber(wavelengthM: number): number;
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare function angularFrequency(frequencyHz: number): number;
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare function planeWaveSpeed(frequencyHz: number): number;
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare function planeWaveField(frequencyHz: number, opts?: {
    e0?: number;
    samples?: number;
    cycles?: number;
    t?: number;
    phase?: number;
    seed?: string;
}): {
    x: number[];
    E: number[];
    B: number[];
};
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare function planeWaveEnergyDensity(E: readonly number[]): number[];
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare function planeWaveIntensity(e0?: number): number;
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare function planeWaveCircular(frequencyHz: number, opts?: {
    e0?: number;
    samples?: number;
    cycles?: number;
    t?: number;
    handedness?: 1 | -1;
}): {
    x: number[];
    Ey: number[];
    Ez: number[];
};
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare function planeWaveReceipt(frequencyHz: number, opts?: {
    e0?: number;
    samples?: number;
    cycles?: number;
    t?: number;
    phase?: number;
    seed?: string;
}): {
    uuid: string;
    root: string;
    lambda: number;
    intensity: number;
    photonEv: number;
    ionizing: boolean;
    samples: number;
};
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare function kevToFrequency(keV: number): number;
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare function beamProfile(keV: number): {
    keV: number;
    frequencyHz: number;
    photonEnergyEv: number;
    ionizing: boolean;
};
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare function opticalDepth(layers: readonly {
    mu: number;
    x: number;
}[]): number;
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare function beerLambert(i0: number, layers: readonly {
    mu: number;
    x: number;
}[]): number;
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare function muToHu(mu: number, muWater?: number): number;
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare function forwardProjectAxis(phantom: readonly (readonly number[])[]): number[][];
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare function ramLakKernel(half: number): number[];
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare function rampFilter(projection: readonly number[], half?: number): number[];
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare function backProjectAxis(sinogram: readonly (readonly number[])[], filtered?: boolean): number[][];
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare function ctReceipt(keV: number, phantom: readonly (readonly number[])[]): {
    id: string;
    root: string;
    beam: {
        keV: number;
        frequencyHz: number;
        photonEnergyEv: number;
        ionizing: boolean;
    };
    sinogram: number[][];
    recon: number[][];
};
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare function blochStep(m: readonly number[], opts: {
    T1: number;
    T2: number;
    M0?: number;
    df?: number;
    dt?: number;
}): number[];
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare function blochEvolve(m0: readonly number[], opts: {
    T1: number;
    T2: number;
    M0?: number;
    df?: number;
    dt?: number;
}, steps: number): number[][];
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare function fid(opts: {
    M0?: number;
    T2: number;
    f: number;
    dt?: number;
}, samples: number): number[];
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare function t1Recovery(opts: {
    M0?: number;
    T1: number;
    dt?: number;
}, samples: number): number[];
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare function phantomFid(voxels: readonly {
    M0: number;
    T2: number;
}[], opts: {
    f?: number;
    dt?: number;
}, samples: number): number[];
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare function blochReceipt(opts: {
    B0: number;
    T1: number;
    T2: number;
    M0?: number;
    f?: number;
    dt?: number;
    steps: number;
}, signal: readonly number[]): {
    id: string;
    root: string;
    f0: number;
    ionizing: boolean;
};
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare function radarVelocity(beatHz: number, carrierHz: number): number;
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare function fmcwSlope(bandwidthHz: number, chirpSeconds: number): number;
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare function beatToRange(beatHz: number, slopeHzPerS: number): number;
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare function rangeToBeat(rangeM: number, slopeHzPerS: number): number;
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare function rangeResolution(bandwidthHz: number): number;
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare function velocityResolution(carrierHz: number, chirps: number, priSeconds: number): number;
export interface RadarScene {
    carrierHz: number;
    ns: number;
    nc: number;
    fs: number;
    slopeHzPerS: number;
    priSeconds: number;
    targets: {
        rangeM: number;
        velocityMs: number;
        rcs: number;
    }[];
    noise?: number;
    seed?: string;
}
export interface RadarDetection {
    rangeBin: number;
    dopplerBin: number;
    rangeM: number;
    velocityMs: number;
    mag: number;
}
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare function syntheticEcho(scene: RadarScene): {
    re: number[][];
    im: number[][];
};
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare function rangeDopplerMap(echo: {
    re: number[][];
    im: number[][];
}): number[][];
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare function detectTargets(mag: readonly (readonly number[])[], scene: RadarScene, threshold: number): RadarDetection[];
/** @rosetta ✦₁ · Fire · clarity (EM simulators) */
export declare function radarReceipt(scene: RadarScene): {
    id: string;
    root: string;
    ionizing: boolean;
    carrierWavelengthM: number;
    dr: number;
    dv: number;
    detections: RadarDetection[];
};
