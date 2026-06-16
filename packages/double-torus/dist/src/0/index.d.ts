export declare function toUuid(seed: string): string;
export declare function merge(a: string, b: string): string;
export declare function roundTo(value: number, digits: number): number;
export declare function seedFromText(text: string, length?: number): number;
export declare function foldPair(a: string, b: string): {
    forward: string;
    reverse: string;
    bidirectional: boolean;
    merged: string;
};
export declare function merkleFold(leaves: readonly string[]): string;
export declare function isUuid(value: string): boolean;
export declare function memoByRoot<T>(name: string, matrix: {
    root: string;
}, compute: () => T): T;
export declare function digitalRoot(n: number): number;
export declare function humanEase(phase: number): number;
export declare function humanBreath(timeMs: number, periodMs: number, depth?: number): number;
export declare function sinc(x: number): number;
export declare function sincReconstruct(samples: readonly number[], x: number): number;
export interface AnimationEngine {
    /** Whether the persistent loop is currently running (callers still ask, e.g. to gate a one-shot redraw). */
    readonly running: boolean;
    /** Begin the persistent rAF loop (idempotent). */
    start(): void;
    /** Cancel the persistent loop. */
    stop(): void;
    /** Gate motion in one call: active ⇒ run; paused ⇒ stop and paint exactly one still frame. */
    sync(active: boolean): void;
    /** Paint exactly one frame now, even while paused — a scrub/tap/resize/route redraw. */
    tick(): void;
    /** A self-terminating sub-loop that ticks until `active()` returns false (e.g. the hero's fading bursts). */
    runWhile(active: () => boolean): void;
    /** Cancel every scheduled frame — the unmount teardown. */
    dispose(): void;
}
export declare function createAnimationEngine(draw: (time: number) => void): AnimationEngine;
export interface Fold {
    readonly a: string;
    readonly b: string;
    readonly forward: string;
    readonly reverse: string;
    readonly bidirectional: boolean;
    readonly merged: string;
}
export declare function fold(a: string, b?: string): Fold;
export declare function asVortex(f: Fold): {
    digit: number;
    onAxis: boolean;
    orbitIndex: number;
    orbit: readonly number[];
    axis: readonly number[];
};
export declare const VORTEX_SEQUENCE: readonly [1, 2, 4, 8, 7, 5, 3, 6, 9];
export declare const VORTEX_REVERSE: readonly [9, 6, 3, 5, 7, 8, 4, 2, 1];
export declare function vortexNext(d: number): number;
export declare function vortexPrev(d: number): number;
export declare function foldVortex(): {
    valid: boolean;
    pairs: {
        position: number;
        forward: 2 | 8 | 6 | 1 | 9 | 7 | 4 | 5 | 3;
        reverse: 2 | 8 | 6 | 1 | 9 | 7 | 4 | 5 | 3;
        sum: number;
        root: number;
    }[];
    palindrome: number[];
    total: number;
    totalRoot: number;
    inverseHolds: boolean;
    statement: string;
    boundary: string;
};
export declare function asTorus(f: Fold, major?: number, minor?: number, separation?: number): {
    x: number;
    y: number;
    z: number;
    lobe: 0 | 1;
    theta: number;
    phi: number;
};
export declare function asMerkaba(f: Fold, timeMs?: number): {
    up: [number, number, number][];
    down: [number, number, number][];
    spin: number;
    breath: number;
    counterRotating: true;
};
export declare function asMerkle(f: Fold): {
    root: string;
    leaves: [string, string];
    via: [string, string];
    verifies: boolean;
};
export declare function asTrace(f: Fold, timeMs?: number): {
    x: number;
    y: number;
};
export declare const DIGEST_BITS = 64;
export declare function coverageCostLog2(coverage: number, checks: number): number;
export declare function tamperCostLog2(coverage: number, checks: number): number;
export declare function maxTamperingCostReached(coverage: number, entropy: number): boolean;
export declare function maxTamperingCostLog2(sealClosed: boolean, finiteCostLog2: number): number;
export declare const MAX_TAMPERING_COST_PRINCIPLE = "Maximum tampering cost is only claimed when the inward proof loop closes measured coverage at 1 and the outward double-torus flow preserves zero reciprocal entropy.";
export declare function tamperEvident(root: string): boolean;
export type Uuid = string;
export type Entry = {
    url: string;
    uuid: Uuid;
    host: string;
    path: string;
};
export declare function merkabaFoldUrl(url: string): Uuid;
export declare function entry(url: string): Entry;
export declare function uuidHero(uuid: string): {
    uuid: string;
    hue: number;
    theta: number;
    phi: number;
    spinMs: number;
    frequency: number;
    ax: number;
    ay: number;
    bx: number;
    by: number;
    glyph: string;
    unique: boolean;
};
export declare function trinityKey(shareA: string, shareB: string): string;
export declare function derivePublicKey(privateKey: string, publicRoots: readonly string[]): string;
export declare function prng(seed: string): () => number;
export declare function sampleCounts(dist: readonly number[], n: number, shots?: number, seed?: string): Record<string, number>;
export interface QuantumState {
    readonly n: number;
    readonly re: number[];
    readonly im: number[];
}
export declare function qubits(n: number): QuantumState;
export declare const GATES: Readonly<Record<'I' | 'X' | 'Y' | 'Z' | 'H' | 'S' | 'T', readonly number[]>>;
export declare function applyGate(state: QuantumState, gate: readonly number[], target: number): QuantumState;
export declare function cnot(state: QuantumState, control: number, target: number): QuantumState;
export declare function cz(state: QuantumState, control: number, target: number): QuantumState;
export declare function probabilities(state: QuantumState): number[];
export declare function measure(state: QuantumState, target: number, seed?: string): {
    outcome: 0 | 1;
    state: QuantumState;
};
export declare function sample(state: QuantumState, shots?: number, seed?: string): Record<string, number>;
export declare function grover(n: number, marked: number, shots?: number, seed?: string): {
    n: number;
    size: number;
    marked: number;
    iterations: number;
    markedProbability: number;
    found: number;
    hist: Record<string, number>;
};
export interface ProbState {
    readonly n: number;
    readonly p: number[];
}
export declare function pbits(n: number): ProbState;
export declare function pflip(state: ProbState, target: number, q?: number): ProbState;
export declare function psample(state: ProbState, shots?: number, seed?: string): Record<string, number>;
export declare function rnot(bits: number, target: number): number;
export declare function rcnot(bits: number, control: number, target: number): number;
export declare function rtoffoli(bits: number, control1: number, control2: number, target: number): number;
export declare function composeHazard(base: number, levers: readonly number[]): number;
export declare function survive(s: number, hazard: number): number;
export declare function admixToward(p: readonly number[], source: number, f: number): number[];
export declare function injectError(p: readonly number[], bit: number, q: number, oneWay?: boolean): number[];
export declare function markovStep(P: readonly (readonly number[])[], dist: readonly number[]): number[];
export declare function markovEvolve(P: readonly (readonly number[])[], dist: readonly number[], steps: number): number[];
export declare function stationary(P: readonly (readonly number[])[], iters?: number): number[];
export declare function aksakRatioWalk(seed: string, cycles: number, lo?: number, hi?: number): number[];
export declare function phase(theta: number): number[];
export declare function chsh(a: number, aPrime: number, b: number, bPrime: number): number;
export interface Ring {
    readonly name: string;
    readonly period: number;
    phase: number;
}
export declare function cycleAdvance(rings: readonly Ring[], dt: number): Ring[];
export declare function residueVector(n: number, periods: readonly number[]): number[];
export declare function realign(periodA: number, periodB: number): {
    gcd: number;
    lcm: number;
};
export declare function phaseDrift(periodA: number, periodB: number, t: number): number;
export declare function rotatingField(t: number, freq: number, phaseShift?: number): {
    bx: number;
    by: number;
    theta: number;
    omega: number;
};
export declare function syncSpeedRpm(freq: number, poles: number): number;
export declare function slip(wSync: number, wRotor: number): number;
export declare function inductionStep(wRotor: number, opts: {
    wSync: number;
    k: number;
    load: number;
    damping?: number;
    inertia?: number;
    dt?: number;
}): number;
export declare function inductionEvolve(w0: number, opts: {
    wSync: number;
    k: number;
    load: number;
    damping?: number;
    inertia?: number;
    dt?: number;
}, steps: number): number[];
export declare function oscillatorBank(seed: string, modes: readonly {
    freq: number;
    q: number;
}[], samples: number, dt?: number): number[];
export declare function powerSpectrum(samples: readonly number[], bins?: number): number[];
export declare const SPEED_OF_LIGHT = 299792458;
export declare const PLANCK = 6.62607015e-34;
export declare const ELECTRONVOLT = 1.602176634e-19;
export declare const PROTON_GYROMAGNETIC = 42577478.461;
export declare const IONIZING_EV = 10;
export declare function wavelengthOf(frequencyHz: number): number;
export declare function frequencyOf(wavelengthM: number): number;
export declare function photonEnergyEv(frequencyHz: number): number;
export declare function isIonizing(frequencyHz: number): boolean;
export declare function larmorFrequency(b0Tesla: number, gyromagnetic?: number): number;
export declare function radarRange(roundTripSeconds: number): number;
export declare function dopplerShift(radialVelocityMs: number, carrierHz: number): number;
export type Edge = readonly [number, number];
export declare function pmixStep(values: readonly number[], edges: readonly Edge[], q: number): number[];
export declare function pmixEvolve(values: readonly number[], edges: readonly Edge[], q: number, steps: number): number[];
export declare function congruence(a: readonly number[], b: readonly number[]): number;
export declare const GENETIC_CODE = "FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG";
export declare function mutationClass(codon: number, pos: number, base: number): 'silent' | 'missense' | 'nonsense';
export declare function codeRobustness(kappa?: number): {
    silent: number;
    missense: number;
    nonsense: number;
};
export declare function sha256(text: string): Promise<string>;
export declare function sha256MerkleRoot(leaves: readonly string[]): Promise<string>;
export declare function sha256MerkleProof(leaves: readonly string[], index: number): Promise<{
    leaf: string;
    path: {
        hash: string;
        right: boolean;
    }[];
    root: string;
}>;
export declare function verifySha256Proof(leafHash: string, path: readonly {
    hash: string;
    right: boolean;
}[], root: string): Promise<boolean>;
export declare function ed25519Keypair(): Promise<CryptoKeyPair>;
export declare function ed25519Sign(privateKey: CryptoKey, message: string): Promise<string>;
export declare function ed25519Verify(publicKey: CryptoKey, message: string, signatureHex: string): Promise<boolean>;
export declare function transparencyLogRoot(entries: readonly string[]): Promise<string>;
export declare function logInclusion(entries: readonly string[], index: number): Promise<{
    leaf: string;
    path: {
        hash: string;
        right: boolean;
    }[];
    root: string;
}>;
export declare function logConsistent(oldRoot: string, entries: readonly string[], oldSize: number): Promise<boolean>;
export declare function sha256Sync(text: string): string;
export declare function toUuidSha256(seed: string): Uuid;
export declare function findContentAddressCollision(maxTries?: number): {
    found: boolean;
    a: string;
    b: string;
    word: number;
    tries: number;
};
export declare function addressEntropyBits(): {
    nominalBits: number;
    discardedBits: number;
    effectiveBits: number;
    birthdayLog2: number;
};
