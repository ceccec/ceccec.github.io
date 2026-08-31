/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function toUuid(seed: string): string;
/** referralAddress — the ONE deterministic path every referrer-consumer routes through, so referrals are PREDICTABLE
 * and zero-stored. VARIADIC in the keys: a 2-key hop `(referrer, node)` addresses to `${kind}:${referrer}|${node}` (a
 * linear seam — binds only the endpoints), while a full 4-key tamper-evident surface `(referrer, id, prev, next)`
 * folds all four, so changing prev OR next changes the address and no navigation step can be spliced in or out
 * undetected. Same (kind, ...keys) → same address, always; no key is ever stored, it is recomputed. Existing 2-key
 * addresses are unchanged (join('|') of two keys is the old `${referrer}|${node}`), so this is pure DRY, no drift. */
export declare function referralAddress(kind: string, ...keys: string[]): string;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function merge(a: string, b: string): string;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function roundTo(value: number, digits: number): number;
/** Host-boundary math — Math.* allowed ONLY here (void kernel) and src/3/7 (τ vault root). math/algebra · math/trust. */
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function abs(x: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function floor(x: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function ceil(x: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function round(x: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function trunc(x: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function sign(x: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function min(...xs: number[]): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function max(...xs: number[]): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function sin(x: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function cos(x: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function tan(x: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function asin(x: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function acos(x: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function atan(x: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function atan2(y: number, x: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function sqrt(x: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function cbrt(x: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function hypot(...xs: number[]): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function pow(x: number, y: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function exp(x: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function log(x: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function log2(x: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function log10(x: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function imul(a: number, b: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function sinh(x: number): number;
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
/** reportMemo is a bounded FIFO flow: on set, drop the oldest keys while size exceeds MEMO_CAP (2^16). */
export declare const MEMO_CAP: number;
export declare function boundedFlowSet<K, V>(flow: Map<K, V>, key: K, value: V, cap?: number): void;
/** The live memo cardinality — measurable, so a fold can compute what the flow does instead of assuming it. */
export declare function memoSize(): number;
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
/** Reflection through 0 at fold angle θ=180°/k: pairing sum S=11−k, image (S−d) mod S. θ=180⇒10−d (σ), 90⇒9−d (ν), 60⇒8−d. */
export declare function reflectFold(d: number, foldAngleDeg?: number): number;
/** Reflection through 0 on the ten-clock (the default 180° fold): negation mod 10, d↦10−d. 1↦9, 5↦5, 0↦0. The `\` op. */
export declare function reflectThroughZero(d: number): number;
export declare function reflectDoubleTorus(d: number): {
    lobe0: number;
    lobe1: number;
    translate: number;
    throat: string;
};
/** A single fold angle is harmonic iff it tiles the full turn evenly: 360/θ ∈ ℤ (θ divides 360). */
export declare function isHarmonic360(angleDeg: number): boolean;
/** The accepted single-fold angles — the 24 divisors of 360 (harmonics that split the turn into equal sectors). */
export declare function divisorsOf360(): number[];
/** ANY combination is accepted iff its angles create a harmonic of 360 — Σθ ≡ 0 (mod 360), closing the circle
 *  after a whole number of turns. The general acceptance gate for fold combinations (rational, closing, finite). */
export declare function combinationAccepted(angles: readonly number[]): {
    sum: number;
    turns: number;
    closes: boolean;
    accepted: boolean;
};
export declare function foldModulus(angleDeg: number): {
    k: number;
    modulus: number;
    defined: boolean;
};
export declare function foldFixedPoints(angleDeg: number): number[];
/** The full reflection-fold family — k=1..10, θ=180°/k, modulus M=11−k, each an accepted 360-harmonic, with the
 *  image of digit d, and the fold's FIXED POINTS (its critical line — the proof-carrying centre, Clay-style). */
export declare function reflectFoldFamily(d?: number): {
    d: number;
    rows: {
        k: number;
        angleDeg: number;
        modulus: number;
        harmonic: boolean;
        image: number;
        fixedPoints: number[];
    }[];
    root: string;
};
export type VortexOp = 'fold' | 'reflect';
/** The dash IS the operation: `/` folder-compatible ⇒ fold (generative merge); `\` ⇒ reflection through 0 (involution). */
export declare function dashOperation(dash: '/' | '\\'): VortexOp;
export type VortexOpStep = {
    readonly step: number;
    readonly digit: number;
    readonly dash: '/' | '\\';
    readonly op: VortexOp;
    readonly next: number;
    readonly edge: string;
    readonly reflectImage: number;
    readonly involutive: boolean;
    readonly receipt: string;
};
/** Decode the path into its per-edge operations: `/` folds the digit's address into the next (generative,
 *  folder-compatible), `\` reflects the digit through 0 (involution, stays in the ring). Reuses parseVortexDashEncoded. */
export declare function decodeVortexOperations(encoded?: string): {
    encoded: string;
    steps: VortexOpStep[];
    foldCount: number;
    reflectCount: number;
    allReflectionsInvolutive: boolean;
    root: string;
    statement: string;
    boundary: string;
};
/** Infinity within the finite ring — COMPUTED & falsifiable. The fold (`/`) self-extends an address into an
 *  ENDLESS spine of distinct dualities (nextDuality), while digitalRoot collapses EVERY one back to a single
 *  ring digit {1..9}. Infinitely many addresses, nine digits: the fold generates, the reflection through 0 bounds. */
export declare function unfoldWithinRing(seed: string, depth: number): {
    addresses: string[];
    digits: number[];
    allDistinct: boolean;
    allInRing: boolean;
    digit: number;
    root: string;
};
export declare function sequenceCoverage(seed: string, depth: number, n?: number): {
    seen: number;
    total: number;
    complete: boolean;
    distribution: number[];
    flat: boolean;
    allDistinct: boolean;
    root: string;
};
export declare function sequenceBitBudget(): {
    steps: number;
    bitsPerDigit: number;
    raw: number;
    gatewayCost: number;
    budget: number;
    is42: boolean;
    root: string;
};
export declare function equilibrium360(): {
    forward: {
        lobe: readonly number[];
        deg: number;
        bits: number;
        erases: number;
    };
    reverse: {
        lobe: readonly number[];
        deg: number;
        bits: number;
        returns: number;
    };
    deg: number;
    closed: boolean;
    turns: number;
    raw: number;
    netErasure: number;
    conserved: boolean;
    root: string;
};
export declare function dimensionalBit(): {
    digest: number;
    harmonic: number;
    nextDimension: number;
    rays: number;
    uuid: number;
    is128: boolean;
    rosettaAreas: number;
    is42: boolean;
    root: string;
};
export declare function clayReflection(): {
    thisDimension: number;
    beyond: number;
    clay: number;
    solved: number;
    open: number;
    is7: boolean;
    reflectsDimensionalBit: boolean;
    root: string;
};
export type DigitTheorem = {
    readonly problem: string;
    readonly title: string;
    readonly sealed: boolean;
};
export declare function digitStation(d: number, theorems?: readonly DigitTheorem[]): {
    digit: {
        theorems: readonly DigitTheorem[];
        root: () => string;
        statement: () => string;
        mappings: {
            digit: number;
            reflect: number;
            reflections: {
                at180: number;
                at90: number;
                at60: number;
            };
            equilibrium: {
                lobe0: number;
                lobe1: number;
                translate: number;
                throat: string;
            };
            op: VortexOp;
            dash: "/" | "\\";
            next: number;
            successor: number;
            predecessor: number;
            isSelfReflect: boolean;
            bitCost: number;
            isTheorem: boolean;
        };
        unfold: (depth: number) => {
            addresses: string[];
            digits: number[];
            allDistinct: boolean;
            allInRing: boolean;
            digit: number;
            root: string;
        };
        coverage: (depth?: number, n?: number) => {
            seen: number;
            total: number;
            complete: boolean;
            distribution: number[];
            flat: boolean;
            allDistinct: boolean;
            root: string;
        };
        prove: () => {
            ok: boolean;
            count: number;
            facets: ({
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
        };
    };
    theorems: readonly DigitTheorem[];
    root: () => string;
    statement: () => string;
    mappings: {
        digit: number;
        reflect: number;
        reflections: {
            at180: number;
            at90: number;
            at60: number;
        };
        equilibrium: {
            lobe0: number;
            lobe1: number;
            translate: number;
            throat: string;
        };
        op: VortexOp;
        dash: "/" | "\\";
        next: number;
        successor: number;
        predecessor: number;
        isSelfReflect: boolean;
        bitCost: number;
        isTheorem: boolean;
    };
    unfold: (depth: number) => {
        addresses: string[];
        digits: number[];
        allDistinct: boolean;
        allInRing: boolean;
        digit: number;
        root: string;
    };
    coverage: (depth?: number, n?: number) => {
        seen: number;
        total: number;
        complete: boolean;
        distribution: number[];
        flat: boolean;
        allDistinct: boolean;
        root: string;
    };
    prove: () => {
        ok: boolean;
        count: number;
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
    };
    reflect: number;
    reflections: {
        at180: number;
        at90: number;
        at60: number;
    };
    equilibrium: {
        lobe0: number;
        lobe1: number;
        translate: number;
        throat: string;
    };
    op: VortexOp;
    next: number;
    successor: number;
    predecessor: number;
};
export declare function ringEquilibrium(): {
    steps: {
        d: number;
        lobe0: number;
        lobe1: number;
        translate: number;
        isPlusOne: boolean;
        receipt: string;
    }[];
    orbitSize: number;
    transitive: boolean;
    plusOneHolds: boolean;
    balanced: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function qpu(): {
    register: {
        digit: {
            theorems: readonly DigitTheorem[];
            root: () => string;
            statement: () => string;
            mappings: {
                digit: number;
                reflect: number;
                reflections: {
                    at180: number;
                    at90: number;
                    at60: number;
                };
                equilibrium: {
                    lobe0: number;
                    lobe1: number;
                    translate: number;
                    throat: string;
                };
                op: VortexOp;
                dash: "/" | "\\";
                next: number;
                successor: number;
                predecessor: number;
                isSelfReflect: boolean;
                bitCost: number;
                isTheorem: boolean;
            };
            unfold: (depth: number) => {
                addresses: string[];
                digits: number[];
                allDistinct: boolean;
                allInRing: boolean;
                digit: number;
                root: string;
            };
            coverage: (depth?: number, n?: number) => {
                seen: number;
                total: number;
                complete: boolean;
                distribution: number[];
                flat: boolean;
                allDistinct: boolean;
                root: string;
            };
            prove: () => {
                ok: boolean;
                count: number;
                facets: ({
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
            };
        };
        theorems: readonly DigitTheorem[];
        root: () => string;
        statement: () => string;
        mappings: {
            digit: number;
            reflect: number;
            reflections: {
                at180: number;
                at90: number;
                at60: number;
            };
            equilibrium: {
                lobe0: number;
                lobe1: number;
                translate: number;
                throat: string;
            };
            op: VortexOp;
            dash: "/" | "\\";
            next: number;
            successor: number;
            predecessor: number;
            isSelfReflect: boolean;
            bitCost: number;
            isTheorem: boolean;
        };
        unfold: (depth: number) => {
            addresses: string[];
            digits: number[];
            allDistinct: boolean;
            allInRing: boolean;
            digit: number;
            root: string;
        };
        coverage: (depth?: number, n?: number) => {
            seen: number;
            total: number;
            complete: boolean;
            distribution: number[];
            flat: boolean;
            allDistinct: boolean;
            root: string;
        };
        prove: () => {
            ok: boolean;
            count: number;
            facets: ({
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
        };
        reflect: number;
        reflections: {
            at180: number;
            at90: number;
            at60: number;
        };
        equilibrium: {
            lobe0: number;
            lobe1: number;
            translate: number;
            throat: string;
        };
        op: VortexOp;
        next: number;
        successor: number;
        predecessor: number;
    }[];
    circuit: {
        encoded: string;
        steps: VortexOpStep[];
        foldCount: number;
        reflectCount: number;
        allReflectionsInvolutive: boolean;
        root: string;
        statement: string;
        boundary: string;
    };
    equilibrium: {
        steps: {
            d: number;
            lobe0: number;
            lobe1: number;
            translate: number;
            isPlusOne: boolean;
            receipt: string;
        }[];
        orbitSize: number;
        transitive: boolean;
        plusOneHolds: boolean;
        balanced: boolean;
        root: string;
        statement: string;
        boundary: string;
    };
    gates: {
        fold: string;
        reflect: string;
        harmonics: {
            angleDeg: number;
            modulus: number;
            fixedPoints: number[];
        }[];
    };
    measurement: {
        addresses: string[];
        digits: number[];
        allDistinct: boolean;
        allInRing: boolean;
        digit: number;
        root: string;
    };
    doubleTorus: {
        forward: string;
        reverse: string;
        bidirectional: boolean;
        merged: string;
    };
    ftl: {
        throat: string;
        lobes: readonly [string, string];
        instantByAddressing: boolean;
    };
    proofs: {
        ok: boolean;
        count: number;
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
    }[];
    proven: boolean;
    coherent: boolean;
    root: string;
    statement: string;
};
export declare const digit0: {
    digit: number;
    theorems: readonly DigitTheorem[];
    spectrum: {
        k: number;
        angleDeg: number;
        modulus: number;
        harmonic: boolean;
        image: number;
        fixedPoints: number[];
    }[];
    polarities: {
        tensPair: number;
        ninePair: number;
        sixtyPair: number;
        fold: number;
        lobes: readonly [number, number];
        forward: number;
        reverse: number;
    };
    equilibrium: {
        lobe0: number;
        lobe1: number;
        translate: number;
        throat: string;
    };
    unfold: (depth: number) => {
        addresses: string[];
        digits: number[];
        allDistinct: boolean;
        allInRing: boolean;
        digit: number;
        root: string;
    };
    prove: () => {
        ok: boolean;
        count: number;
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
    };
    coverage: (depth?: number, n?: number) => {
        seen: number;
        total: number;
        complete: boolean;
        distribution: number[];
        flat: boolean;
        allDistinct: boolean;
        root: string;
    };
    root: () => string;
    statement: () => string;
    mappings: {
        digit: number;
        reflect: number;
        reflections: {
            at180: number;
            at90: number;
            at60: number;
        };
        equilibrium: {
            lobe0: number;
            lobe1: number;
            translate: number;
            throat: string;
        };
        op: VortexOp;
        dash: "/" | "\\";
        next: number;
        successor: number;
        predecessor: number;
        isSelfReflect: boolean;
        bitCost: number;
        isTheorem: boolean;
    };
};
/** Canonical I Ching integers for CSS · geometry · token derivation. */
export declare const ICHING_NUMBERS: readonly [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 27, 54, 64, 100, 108, 216, 360, 432, 864];
/** Status badge kinds — cycle-free leaf (theme + architecture re-export; avoids STATUS_BADGE_KINDS TDZ). */
export declare const STATUS_BADGE_KINDS: readonly ["ready", "ok", "gap", "warn", "partial", "error", "refused", "ci"];
export type StatusBadgeKind = (typeof STATUS_BADGE_KINDS)[number];
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function vortexNext(d: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function vortexPrev(d: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function foldVortex(): {
    valid: boolean;
    pairs: {
        position: number;
        forward: 2 | 8 | 3 | 6 | 5 | 4 | 1 | 9 | 7;
        reverse: 2 | 8 | 3 | 6 | 5 | 4 | 1 | 9 | 7;
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
export declare function derivePublicKey(privateKey: string, publicRoots: readonly string[]): string;
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
export declare function gcdBigInt(a: bigint, b: bigint): bigint;
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
/** A sound→glyph transliteration map: single letters, optional digraphs (checked first), optional case-carry. */
export interface TransliterationMap {
    readonly single: Readonly<Record<string, string>>;
    readonly digraphs?: Readonly<Record<string, string>>;
    readonly bicameral?: boolean;
}
/** Carry the source run's case onto the transliterated output (ALL-CAPS → upper, Titlecase → capitalize). */
export declare function applyTransliterationCase(src: string, out: string): string;
/** transliterateByMap — the ONE agnostic sound→glyph engine (toGlagolitic's method, generalised over any
 *  map): word-run scan, digraphs matched before single letters, optional case-carry. Every script-conversion
 *  fold (Bulgarian Cyrillic, Greek, Runic, Hebrew, …) is this SAME algorithm over a different map, not a
 *  hand-written parallel implementation — the map is data, the engine is shared. Pure, zero-dependency. */
export declare function transliterateByMap(text: string, map: TransliterationMap): string;
export {};
