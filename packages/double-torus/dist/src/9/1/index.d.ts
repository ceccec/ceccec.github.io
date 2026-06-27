import type { Rational } from '../../3/7';
import type { QuantumState } from '../../0';
export declare function innerProduct(a: QuantumState, b: QuantumState): {
    re: number;
    im: number;
    abs: number;
};
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function gateMul(a: readonly number[], b: readonly number[]): number[];
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function commutator(a: readonly number[], b: readonly number[]): number[];
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function concurrence(state: QuantumState): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function noCloningWitness(): {
    overlap: number;
    clonedRequires: number;
    contradiction: boolean;
};
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function bitFlipCode(alphaRe: number, betaRe: number, errorQubit: number): {
    syndrome: [number, number];
    errorLocated: number;
    corrected: boolean;
    fidelity: number;
};
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function repetitionLogicalError(d: number, p: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function quantumBatteryAdvantage(n: number): {
    cells: number;
    independentPower: number;
    collectivePower: number;
    advantage: number;
};
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function algorithmicCoolingBias(epsilon: number): {
    initial: number;
    cooled: number;
    factor: number;
    physical: boolean;
};
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function teleportQubit(theta: number, phi: number, seed?: string): {
    fidelity: number;
    b1: 0 | 1;
    b2: 0 | 1;
};
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function interactionFreeMeasurement(): {
    explode: number;
    bright: number;
    dark: number;
    darkWithoutObject: number;
};
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function bernsteinVazirani(s: number, n: number): {
    hidden: number;
    recovered: number;
    queries: number;
    classicalQueries: number;
    ok: boolean;
};
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function entanglementSwap(seed?: string): {
    concurrence: number;
    swapped: boolean;
};
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function ghzMermin(): {
    xxx: number;
    xyy: number;
    yxy: number;
    yyx: number;
    qmProduct: number;
    lhvProduct: number;
    refuted: boolean;
};
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function bb84(rounds?: number, seed?: string): {
    sifted: number;
    errorNoEve: number;
    errorWithEve: number;
};
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function deutschJozsa(n: number, balanced: boolean): {
    balanced: boolean;
    zeroProbability: number;
    verdict: string;
    ok: boolean;
};
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function simon(seed?: string): {
    hiddenS: number;
    ys: number[];
    allOrthogonal: boolean;
    recoveredS: number;
    ok: boolean;
};
/** QED critical magnetic field B_c — the scale where vacuum birefringence sets in (Euler–Heisenberg). */
export declare const CRITICAL_MAGNETIC_FIELD_T = 4410000000;
/** Moon's orbit node regression cycle ~18.6 yr — the basis of megalithic standstill markers. */
export declare const LUNAR_NODAL_PERIOD_YEARS = 18.613;
/** MOND critical acceleration (Milgrom 1983); numerically ≈ cH₀. */
export declare const MOND_ACCELERATION_A0 = 1.2e-10;
/** ΛCDM baryonic fraction — ~5% ordinary matter. */
export declare const OMEGA_BARYON = 0.049;
/** Synchronous speed (rpm) from line frequency and pole count: 120·f / poles. */
export declare function syncSpeedRpm(freq: number, poles: number): number;
/** Folder tail → dot method name (agent/stream/wire → concept.agent.stream.wire). */
export declare function methodNameFromFolderTail(tail: string, prefix?: string): string;
/** Last path segment — the folder that holds the meaning (earth/architecture → architecture). */
export declare function leafFromPathTail(tail: string): string;
/** Gaussian bump profile distributed on a circle — N samples of exp(−d²/2σ²) centered at theta. */
export declare function bumpProfile(theta: number, width: number, N: number): number[];
/** QCD mass fraction of the proton — ~99% is binding energy, not Higgs. */
export declare function qcdMassFractionOfProton(valenceQuarkSumMeV?: number): number;
/** Rational is an integer iff denominator is 1. */
export declare function ratIsInteger(r: Rational): boolean;
/** Display a rational as p/q or just p when integer. */
export declare function ratStr(r: Rational): string;
/** Photon is ionizing if E >= 10 eV (far-UV and up). */
export declare function isIonizing(frequencyHz: number): boolean;
/** Superdense coding (Bennett-Wiesner 1992) — TWO classical bits on ONE qubit via pre-shared Bell pair. */
export declare function superdense(message: number, seed?: string): {
    sent: number;
    decoded: number;
    ok: boolean;
};
