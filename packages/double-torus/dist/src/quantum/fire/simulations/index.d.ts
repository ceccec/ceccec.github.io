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
