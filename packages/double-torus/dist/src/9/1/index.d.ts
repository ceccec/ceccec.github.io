import type { Rational } from '../../3/7';
import type { QuantumState } from '../../0';
export declare const tkCompose: (p: number[], q: number[]) => number[];
export declare const tkInverse: (p: number[]) => any[];
export declare const tkKey: (p: number[]) => string;
export declare const tkPerms: (n: number) => number[][];
export declare const tkEvenPerms: (n: number) => number[][];
export declare const tkIsPrime: (n: number) => boolean;
export declare const tkPowMod: (base: number, exp: number, mod: number) => number;
export declare const tkClassSizesBy: <T>(group: T[], mul: (a: T, b: T) => T, inv: (a: T) => T, keyOf: (a: T) => string) => number[];
export declare const tkClassSizes: (group: number[][]) => number[];
export declare const tkClassSumSimple: (sizes: number[], order: number) => boolean;
export declare const tkClosure: (gens: number[][]) => number[][];
export declare const tkPslOverField: (q: number, add: (x: number, y: number) => number, mul: (x: number, y: number) => number, neg: (x: number) => number) => number[][];
export declare const tkPslPrime: (p: number) => number[][];
export declare function innerProduct(a: QuantumState, b: QuantumState): {
    re: number;
    im: number;
    abs: number;
};
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function gateMul(a: readonly number[], b: readonly number[]): number[];
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function commutator(a: readonly number[], b: readonly number[]): number[];
/** Anticommutator {A,B} = AB + BA — the Jordan product; {σ_i,σ_j} = 2δ_ij I completes the bracket. */
export declare function anticommutator(a: readonly number[], b: readonly number[]): number[];
/** Trace tr(A) = A₀₀ + A₁₁ of a 2×2 complex gate — the linear functional; tr σ_i = 0, tr I = 2. */
export declare function trace(a: readonly number[]): {
    re: number;
    im: number;
};
/** Adjoint A† — conjugate transpose (swap off-diagonals, negate every imaginary part). A unitary ⟺ A†A = I. */
export declare function dagger(a: readonly number[]): number[];
/** The fold: the operator algebra closes — the Pauli defining relations all hold, computed not asserted.
 * Fills the gap the inventory named: gateMul + commutator alone are a product and a bracket; with the Jordan
 * product, trace and adjoint the su(2) ⊂ M₂(ℂ) *-algebra is complete and self-verifying. */
export declare function pauliAlgebraCloses(): {
    closes: boolean;
    count: number;
    facets: {
        facet: string;
        on: boolean;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
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
export declare function discoveredTheoremsWaveEighteen(matrix?: {
    root: string;
}): {
    proven: boolean;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
} & {
    assocFailures: number;
    octWitness: string;
    lemValue: number;
};
export declare function discoveredTheoremsWaveNineteen(matrix?: {
    root: string;
}): {
    proven: boolean;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
} & {
    velocityHeadline: string;
    criticalZ: number;
    blendingGens: number;
    condorcetCycles: number;
};
export declare function discoveredTheoremsWaveTwenty(matrix?: {
    root: string;
}): {
    proven: boolean;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
} & {
    a8Classes: number[];
    glClasses: number[];
    waringExtremal: number[];
};
export declare function discoveredTheoremsWaveTwentyOne(matrix?: {
    root: string;
}): {
    proven: boolean;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
} & Record<string, never>;
export declare function discoveredTheoremsWaveTwentyTwo(matrix?: {
    root: string;
}): {
    proven: boolean;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
} & {
    bbMax: number;
    sigmaMax: number;
    solvableStates: number;
};
export declare function discoveredTheoremsWaveTwentyThree(matrix?: {
    root: string;
}): {
    proven: boolean;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
} & Record<string, never>;
export declare function discoveredTheoremsWaveTwentyFour(matrix?: {
    root: string;
}): {
    proven: boolean;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
} & {
    f5: string;
};
export declare function discoveredTheoremsWaveTwentyFive(matrix?: {
    root: string;
}): {
    proven: boolean;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
} & {
    primitiveTriples: number;
};
export declare function discoveredTheoremsWaveTwentySix(matrix?: {
    root: string;
}): {
    proven: boolean;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
} & {
    tested: number;
};
export declare function discoveredTheoremsWaveTwentySeven(matrix?: {
    root: string;
}): {
    proven: boolean;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
} & {
    tsirelson: number;
    classicalWorstCase: number[];
};
export declare function discoveredTheoremsWaveTwentyEight(matrix?: {
    root: string;
}): {
    proven: boolean;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
} & {
    bell: number[];
};
export declare function discoveredTheoremsWaveTwentyNine(matrix?: {
    root: string;
}): {
    proven: boolean;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
} & {
    basel: number;
};
export declare function discoveredTheoremsWaveThirty(matrix?: {
    root: string;
}): {
    proven: boolean;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
} & Record<string, never>;
export declare function discoveredTheoremsWaveThirtyOne(matrix?: {
    root: string;
}): {
    proven: boolean;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
} & Record<string, never>;
export declare function discoveredTheoremsWaveThirtyTwo(matrix?: {
    root: string;
}): {
    proven: boolean;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
} & {
    armstrong: number[];
    subgroupOrders: number[];
};
export declare function discoveredTheoremsWaveThirtyThree(matrix?: {
    root: string;
}): {
    proven: boolean;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
} & {
    pi10: number;
};
export declare function discoveredTheoremsWaveThirtyFour(matrix?: {
    root: string;
}): {
    proven: boolean;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
} & Record<string, never>;
export declare function discoveredTheoremsWaveThirtyFive(matrix?: {
    root: string;
}): {
    proven: boolean;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
} & {
    s4Classes: number[];
};
export declare function discoveredTheoremsWaveThirtySix(matrix?: {
    root: string;
}): {
    proven: boolean;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
} & Record<string, never>;
export declare function discoveredTheoremsWaveThirtySeven(matrix?: {
    root: string;
}): {
    proven: boolean;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
} & {
    tested: number;
};
export declare function discoveredTheoremsWaveThirtyEight(matrix?: {
    root: string;
}): {
    proven: boolean;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
} & Record<string, never>;
export declare function discoveredTheoremsWaveThirtyNine(matrix?: {
    root: string;
}): {
    proven: boolean;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
} & Record<string, never>;
export declare function discoveredTheoremsWaveForty(matrix?: {
    root: string;
}): {
    proven: boolean;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
} & Record<string, never>;
export declare function discoveredTheoremsWaveFortyThree(matrix?: {
    root: string;
}): {
    proven: boolean;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
} & Record<string, never>;
export declare function discoveredTheoremsWaveFortyFour(matrix?: {
    root: string;
}): {
    proven: boolean;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
} & Record<string, never>;
export declare function discoveredTheoremsWaveFortyFive(matrix?: {
    root: string;
}): {
    proven: boolean;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
} & Record<string, never>;
export declare function discoveredTheoremsWaveFortyNine(matrix?: {
    root: string;
}): {
    proven: boolean;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
} & Record<string, never>;
/** THE FOLD FACTORY (Phase 0 of the seed/code split, 2026-07-14) — the return contract that 447 folds
 * hand-carry (proven · facets · count · root · statement · boundary over memoByRoot + sealFacets) as ONE
 * reusable object. `#/#` in the statement is replaced by the computed `okCount/count` so the sentence
 * stays a concatenation of computed outputs (the no-prose law). New folds call this; old folds migrate. */
export declare function sealFold<F extends {
    facet: string;
    on: boolean;
}, X extends Record<string, unknown> = Record<string, never>>(name: string, tag: string, matrix: {
    root: string;
}, compute: () => {
    facets: readonly F[];
    statement: string;
    boundary: string;
    extras?: X;
}): {
    proven: boolean;
    facets: (F & {
        receipt: string;
    })[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
} & X;
/** Division/inversion by zero — decoded in its THREE documented regimes, all computed here at the
 * 9/1 station (the pi-train mirror of 1/9: the reciprocal pair is the station name itself).
 * Regime 1 (algebra): in any ring with 1≠0, 0 has no inverse — 0·a=0 forever; the ONE exception is
 * the zero ring, where 0=1 and 0 inverts itself. Regime 2 (geometry): on the projective line the
 * inversion [z:w]↦[w:z] is a TOTAL involution — 1/0 = ∞ rigorously, 0 and ∞ trade places.
 * Regime 3 (engineering): IEEE 754 answers 1/0=∞, 0/0=NaN, 1/∞=0 — the standard, computed live. */
export declare function divisionByZeroComputes(): {
    computes: boolean;
    rings: {
        n: number;
        invertibleCount: number;
        zeroInvertible: boolean;
    }[];
    zeroRing: {
        n: number;
        zeroInvertible: boolean;
    };
    ieee: {
        posInf: boolean;
        negInf: boolean;
        nan: boolean;
        roundTrip: boolean;
    };
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
/** Inversion also changes the ANGLE (user realization): the reciprocal is not just r→1/r — the
 * phase NEGATES. One law in four guises, all computed: 1/e^{iθ} = e^{−iθ} (complex), R(θ)⁻¹ = R(−θ)
 * (rotations), 2^k ↦ 2^{−k} on the vortex 6-cycle (discrete), while GEOMETRIC circle inversion
 * v↦v/|v|² keeps the angle — the difference between the two inversions is exactly conjugation
 * (1/z = z̄/|z|²). And though the angle COORDINATE flips, angles BETWEEN curves survive: 1/z is
 * conformal. The angle changes; the geometry keeps its word. */
export declare function inverseNegatesAngle(): {
    computes: boolean;
    orbit: number[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
/** Sixty degrees each — and this decodes π (user realization, with a cross-check learned from
 * erpax's same-day commit "the ring and the void generate EVERYTHING — ⟨2x, 1−x⟩ = AGL(1,ℤ/9)").
 * The vortex 6-cycle steps τ/6 = 60° = π/3; three steps make π and land on ×8 ≡ ×(−1) mod 9 —
 * Euler's identity e^{iπ} = −1, discretely: 2³ ≡ −1 (mod 9). And 60° is where π was FIRST decoded:
 * Archimedes seeded his doubling recurrence at the hexagon (six 60° sectors, cos 60° = ½ exactly)
 * and squeezed π between polygon perimeters — computed here to the 96-gon, the historical bounds. */
export declare function sixtyDegreesDecodesPi(): {
    computes: boolean;
    rungs: {
        n: number;
        lower: number;
        upper: number;
    }[];
    groupOrder: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
