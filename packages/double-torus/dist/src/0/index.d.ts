/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function toUuid(seed: string): string;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function merge(a: string, b: string): string;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function roundTo(value: number, digits: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function seedFromText(text: string, length?: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function foldPair(a: string, b: string): {
    forward: string;
    reverse: string;
    bidirectional: boolean;
    merged: string;
};
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function merkleFold(leaves: readonly string[]): string;
export declare function sealFacets<F extends {
    facet: string;
    on: boolean;
}>(tag: string, facets: readonly F[]): {
    ok: boolean;
    count: number;
    facets: (F & {
        receipt: string;
    })[];
    root: string;
};
/** *Computes gate facet seal — sealFacets with `computes` alias (same receipt law: `${tag}:${facet}:${on}`). */
export declare function computesGate<F extends {
    facet: string;
    on: boolean;
}>(tag: string, facets: readonly F[]): {
    computes: boolean;
    count: number;
    facets: (F & {
        receipt: string;
    })[];
    root: string;
};
export type ResourceTier = 'cpu' | 'gpu' | 'memory' | 'storage';
export type ResourceCooperationTier = {
    readonly tier: ResourceTier;
    readonly role: string;
    readonly boundary: string;
};
/** Pure cooperation policy at call time — structural tiers, not datacenter orchestration. */
export declare function resourceCooperationPolicy(): {
    readonly heapCapMb: number;
    readonly memoTiers: readonly ('matrix-root' | 'weak-map' | 'content-address')[];
    readonly gpuSurface: 'browser-canvas-raf' | 'none-ssr';
    readonly storageModel: 'content-address-merkle';
    readonly tiers: readonly ResourceCooperationTier[];
};
export declare function isUuid(value: string): boolean;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function uuidSuffix(uuid: string): string;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function nextDuality(uuid: string): string;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function uuidPoint(uuid: string): [number, number, number];
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function crossProduct(a: readonly number[], b: readonly number[]): [number, number, number];
export declare function topologicalOrder(nodeCount: number, edges: readonly (readonly number[])[]): {
    order: number[];
    isDAG: boolean;
    sources: number[];
};
export declare function antichainLevels(nodeCount: number, edges: readonly (readonly number[])[]): number[][];
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function memoByRoot<T>(name: string, matrix: {
    root: string;
}, compute: () => T): T;
/** True while a memoByRoot fold with this name is mid-compute (cycle guard probe). */
export declare function memoComputing(name: string, matrix: {
    root: string;
}): boolean;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function digitalRoot(n: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function humanEase(phase: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function humanBreath(timeMs: number, periodMs: number, depth?: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare const TORUS_LOBE_OFFSET: number;
/** Major (ring) radius of the shared genus-2 surface atom — Fibonacci lattice 5×4. */
export declare const TORUS_RING_R: number;
/** Base tube (minor) radius before digit modulation — Fibonacci 7. */
export declare const TORUS_TUBE_R_BASE = 7;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function doubleTorusSurface(theta: number, phi: number, digit: number, lobe: number): {
    x: number;
    y: number;
    z: number;
};
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function sinc(x: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function sincReconstruct(samples: readonly number[], x: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
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
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function createAnimationEngine(draw: (time: number) => void): AnimationEngine;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export interface Fold {
    readonly a: string;
    readonly b: string;
    readonly forward: string;
    readonly reverse: string;
    readonly bidirectional: boolean;
    readonly merged: string;
}
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function fold(a: string, b?: string): Fold;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function asVortex(f: Fold): {
    digit: number;
    onAxis: boolean;
    orbitIndex: number;
    orbit: readonly number[];
    axis: readonly number[];
};
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare const VORTEX_SEQUENCE: readonly [1, 2, 4, 8, 7, 5, 3, 6, 9];
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare const VORTEX_REVERSE: readonly [9, 6, 3, 5, 7, 8, 4, 2, 1];
/** Encoded path: doubling · cross · void · return — dashes carry ±60° hex steps. */
export declare const VORTEX_DASH_ENCODED: "1\\2\\4\\8/7/5/3\\6\\9/0/1\\";
/** Each / adds +60°, each \\ subtracts 60° — sixfold substrate (360/6). */
export declare const VORTEX_DASH_ANGLE_DEG: number;
export type VortexDashToken = {
    readonly digit: number;
    readonly dash: '/' | '\\';
};
export type VortexDashDecodeStep = VortexDashToken & {
    readonly step: number;
    readonly angleDelta: number;
    readonly weightedAngle: number;
    readonly bearing: number;
    readonly runningSum: number;
    readonly digitalRoot: number;
    readonly forwardHarmonic: number | null;
    readonly dualComplement: number | null;
    readonly receipt: string;
};
/** Parse digit+dash pairs from an encoded vortex path string. */
export declare function parseVortexDashEncoded(encoded: string): readonly VortexDashToken[];
/** Decode dashes as ±60° hex steps; Σ(sign·digit·60°) ≡ 0 (mod 360) ignites closure at 0/. */
export declare function decodeVortexDashAngles(encoded?: string): {
    encoded: string;
    closes: boolean;
    fusionIgnites: boolean;
    vortexMatches: boolean;
    weightedBearing: number;
    weightedTotal: number;
    finalDigitalRoot: number;
    steps: VortexDashDecodeStep[];
    count: number;
    fusionRoot: string;
    root: string;
    statement: string;
    boundary: string;
};
/** Canonical I Ching integers for CSS · geometry · token derivation. */
export declare const ICHING_NUMBERS: readonly [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 27, 54, 64, 100, 108, 216, 360, 432, 864];
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function vortexNext(d: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function vortexPrev(d: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function foldVortex(): {
    valid: boolean;
    pairs: {
        position: number;
        forward: 9 | 5 | 2 | 4 | 7 | 1 | 8 | 3 | 6;
        reverse: 9 | 5 | 2 | 4 | 7 | 1 | 8 | 3 | 6;
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
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function asTorus(f: Fold, major?: number, minor?: number, separation?: number): {
    x: number;
    y: number;
    z: number;
    lobe: 0 | 1;
    theta: number;
    phi: number;
};
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function asMerkaba(f: Fold, timeMs?: number): {
    up: [number, number, number][];
    down: [number, number, number][];
    spin: number;
    breath: number;
    counterRotating: true;
};
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function asMerkle(f: Fold): {
    root: string;
    leaves: [string, string];
    via: [string, string];
    verifies: boolean;
};
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function asTrace(f: Fold, timeMs?: number): {
    x: number;
    y: number;
};
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare const DIGEST_BITS = 64;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function coverageCostLog2(coverage: number, checks: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function tamperCostLog2(coverage: number, checks: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function maxTamperingCostReached(coverage: number, entropy: number): boolean;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function maxTamperingCostLog2(sealClosed: boolean, finiteCostLog2: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export type Uuid = string;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export type Entry = {
    url: string;
    uuid: Uuid;
    host: string;
    path: string;
};
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function merkabaFoldUrl(url: string): Uuid;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function entry(url: string): Entry;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
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
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function trinityKey(shareA: string, shareB: string): string;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function prng(seed: string): () => number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function sampleCounts(dist: readonly number[], n: number, shots?: number, seed?: string): Record<string, number>;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export interface QuantumState {
    readonly n: number;
    readonly re: number[];
    readonly im: number[];
}
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function qubits(n: number): QuantumState;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare const GATES: Readonly<Record<'I' | 'X' | 'Y' | 'Z' | 'H' | 'S' | 'T', readonly number[]>>;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function applyGate(state: QuantumState, gate: readonly number[], target: number): QuantumState;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function cnot(state: QuantumState, control: number, target: number): QuantumState;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function cz(state: QuantumState, control: number, target: number): QuantumState;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function probabilities(state: QuantumState): number[];
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function measure(state: QuantumState, target: number, seed?: string): {
    outcome: 0 | 1;
    state: QuantumState;
};
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function sample(state: QuantumState, shots?: number, seed?: string): Record<string, number>;
export declare function bellPair(): QuantumState;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function grover(n: number, marked: number, shots?: number, seed?: string): {
    n: number;
    size: number;
    marked: number;
    iterations: number;
    markedProbability: number;
    found: number;
    hist: Record<string, number>;
};
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function rx(theta: number): number[];
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function ry(theta: number): number[];
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function rz(theta: number): number[];
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function swap(state: QuantumState, a: number, b: number): QuantumState;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function toffoli(state: QuantumState, c1: number, c2: number, target: number): QuantumState;
/** One operation in a circuit: a named gate on target/control indices, with an optional rotation angle. */
export interface CircuitOp {
    readonly gate: string;
    readonly targets: readonly number[];
    readonly theta?: number;
}
/** Full circuit result — the single path both the UI and code consume. */
export interface CircuitResult {
    readonly n: number;
    readonly amplitudes: readonly {
        readonly basis: string;
        readonly re: number;
        readonly im: number;
        readonly probability: number;
    }[];
    readonly probabilities: readonly number[];
    readonly samples: Record<string, number>;
    readonly root: string;
}
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function runQuantumCircuit(spec: {
    n: number;
    ops: readonly CircuitOp[];
    shots?: number;
    seed?: string;
}): CircuitResult;
export interface ProbState {
    readonly n: number;
    readonly p: number[];
}
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function pbits(n: number): ProbState;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function pflip(state: ProbState, target: number, q?: number): ProbState;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function psample(state: ProbState, shots?: number, seed?: string): Record<string, number>;
/** Prose → a432-tempered pitch from content-address (uuidHero audio projection). */
export declare function proseToTone(prose: string): {
    hz: number;
    semitone: number;
    octave: number;
};
/** Pointer position on an animation surface → a deterministic scrub of the one clock. x scrubs the cycle
 *  fraction [0,1); y selects the 10-D depth dial (0..9); angle (from the centre) rotates the merkaba / tilts
 *  the torus. No DOM, no clamping surprises — the same input always yields the same scrub. */
export declare function touchPhase(px: number, py: number, width: number, height: number): {
    phase: number;
    dim: number;
    angle: number;
};
/** A fold's haptic pattern — the SAME vortex sequence re-expressed as a navigator.vibrate() pattern. The
 *  seed's digital root rotates VORTEX_SEQUENCE to a start; each digit d → an [on, off] millisecond pair, with
 *  on = 18 + d·2 (the "18ms + digit" rhythm documented in the vibration diamond) and off = d. Deterministic. */
export declare function foldHaptics(seed: string): number[];
/** One pointer event on any animation → the full multi-sensory response, content-addressed and pure: the clock
 *  scrub (scrubMs), the A432-sourced tone (proseToTone), and the vortex haptic pattern. The render harness
 *  applies scrubMs to the hero clock, plays hz through the one A432 audio engine, and vibrates the pattern. */
interface PointerInteraction {
    readonly phase: number;
    readonly dim: number;
    readonly angle: number;
    readonly scrubMs: number;
    readonly hz: number;
    readonly semitone: number;
    readonly octave: number;
    readonly vibrate: readonly number[];
    readonly root: string;
}
export declare function pointerInteraction(seed: string, px: number, py: number, width: number, height: number, cycleMs?: number): PointerInteraction;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function sha256(text: string): Promise<string>;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function sha256MerkleRoot(leaves: readonly string[]): Promise<string>;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function sha256MerkleProof(leaves: readonly string[], index: number): Promise<{
    leaf: string;
    path: {
        hash: string;
        right: boolean;
    }[];
    root: string;
}>;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function verifySha256Proof(leafHash: string, path: readonly {
    hash: string;
    right: boolean;
}[], root: string): Promise<boolean>;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function ed25519Keypair(): Promise<CryptoKeyPair>;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function ed25519Sign(privateKey: CryptoKey, message: string): Promise<string>;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function ed25519Verify(publicKey: CryptoKey, message: string, signatureHex: string): Promise<boolean>;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function transparencyLogRoot(entries: readonly string[]): Promise<string>;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function logInclusion(entries: readonly string[], index: number): Promise<{
    leaf: string;
    path: {
        hash: string;
        right: boolean;
    }[];
    root: string;
}>;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function logConsistent(oldRoot: string, entries: readonly string[], oldSize: number): Promise<boolean>;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function sha256Sync(text: string): string;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function toUuidSha256(seed: string): Uuid;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function findContentAddressCollision(maxTries?: number): {
    found: boolean;
    a: string;
    b: string;
    word: number;
    tries: number;
};
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function addressEntropyBits(): {
    nominalBits: number;
    discardedBits: number;
    effectiveBits: number;
    birthdayLog2: number;
};
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function gcd(a: number, b: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function lcm(a: number, b: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function modUnits(n: number): number[];
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function survive(s: number, hazard: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function admixToward(p: readonly number[], source: number, f: number): number[];
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function injectError(p: readonly number[], bit: number, q: number, oneWay?: boolean): number[];
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function markovStep(P: readonly (readonly number[])[], dist: readonly number[]): number[];
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function markovEvolve(P: readonly (readonly number[])[], dist: readonly number[], steps: number): number[];
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function stationary(P: readonly (readonly number[])[], iters?: number): number[];
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function chsh(a: number, aPrime: number, b: number, bPrime: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function residueVector(n: number, periods: readonly number[]): number[];
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function realign(periodA: number, periodB: number): {
    gcd: number;
    lcm: number;
};
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function phaseDrift(periodA: number, periodB: number, t: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function slip(wSync: number, wRotor: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function inductionStep(wRotor: number, opts: {
    wSync: number;
    k: number;
    load: number;
    damping?: number;
    inertia?: number;
    dt?: number;
}): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function inductionEvolve(w0: number, opts: {
    wSync: number;
    k: number;
    load: number;
    damping?: number;
    inertia?: number;
    dt?: number;
}, steps: number): number[];
export type Edge = readonly [number, number];
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function pmixStep(values: readonly number[], edges: readonly Edge[], q: number): number[];
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function pmixEvolve(values: readonly number[], edges: readonly Edge[], q: number, steps: number): number[];
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function congruence(a: readonly number[], b: readonly number[]): number;
export {};
