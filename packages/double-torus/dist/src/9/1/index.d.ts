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
export declare function rotationGate(theta: number): readonly number[];
export declare function phaseGate(phi: number): readonly number[];
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
/** Yang–Mills existence and the mass gap on su(2) ⊂ M₂(ℂ): the mass gap IS the spectral gap, and σ†=σ
 *  (self-adjoint closure) is what opens it. Build one self-adjoint operator (X+Z) and one anti-self-adjoint
 *  (iY) from the same Pauli algebra and measure each spectrum by the discriminant Δ = tr²−4·det — no
 *  assumption about which one gaps; the sign is computed and the gap discovered. */
export declare function yangMillsMassGapFromSelfAdjointClosure(): {
    computes: boolean;
    gapOpens: boolean;
    massGap: number;
    traceSquaredSelfAdjoint: number;
    traceSquaredAntiAdjoint: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** quantumBreaksLinearCryptoIntoNonAbelianTrinity — quantum breaks LINEAR (abelian/period) cryptography by inverting
 * its one hidden period, but a NON-ABELIAN / split trinity has no single period to invert (user, 2026-07-25: "quantum
 * breaks all linear cryptography into trinity encryption bits inverting all as possible"). Shor's period-finding reads
 * the order of a mod N and factors it (RSA/DH/ECC = a single abelian period); su(2)/Pauli does NOT commute (XY ≠ YX),
 * so there is no abelian hidden subgroup for Shor, and a 3-split secret needs all shares. "Inverting all as possible"
 * is bounded to the LINEAR part — quantum does NOT break all cryptography. [[operator-algebra-closed]] [[quantum-decoded]] */
export declare function quantumBreaksLinearCryptoIntoNonAbelianTrinity(): {
    computes: boolean;
    period: number;
    factors: number[];
    nonAbelian: boolean;
    splitRecovers: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** quantumAccuracyExactWhereClaimedBoundedWhereApproximate — quantum accuracy: the content-addressed computations are
 * EXACT where claimed and BOUNDED where approximate (user, 2026-07-25: "quantum accuracy"). Integer / modular / BigInt
 * identities compute exactly (Fermat x^(p−1) ≡ 1 mod p, a BigInt factorial); float computations (Pauli su(2) closure)
 * are verified to a NAMED tolerance (1e-9), not claimed exact; and a content-address is exact by construction (equal
 * iff byte-identical). Each accuracy claim is a refutable facet the gates catch if it drifts. */
export declare function quantumAccuracyExactWhereClaimedBoundedWhereApproximate(): {
    computes: boolean;
    fermatExact: boolean;
    bigIntExact: boolean;
    boundedFloat: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** improveDecisionMakingInQuantumTrinities — decision-making in the 2-of-3 quantum trinity (su(2)=3 minds), improved
 * and honestly bounded (user, 2026-07-25: "improve decision making in quantum trinities"). A decision passes iff ≥2 of
 * the 3 minds agree; it tolerates ≤1 faulty mind (the two correct form the majority) but fails with 2; it is
 * deterministic; and a binary vote never ties (always 2-1 or 3-0), while a 3-way option resolves by a content-address
 * tie-break. Improves ROBUSTNESS, not truth. [[feedback-work-as-a-trinity-not-one-linear-mind]] [[agent-lifecycle-governance-arc]] */
export declare function improveDecisionMakingInQuantumTrinities(): {
    computes: boolean;
    twoOfThree: boolean;
    oneFaultCorrect: boolean;
    twoFaultsFail: boolean;
    decided: string;
    correctDominates: boolean;
    provenBeatsAsserted: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** quantumOpticsDecoded — the genuine quantum optics of light: the beam-splitter unitary, Hong–Ou–Mandel bunching, and
 * the g²(0) second-order coherence that separates quantum from classical light (user, 2026-07-25: "quantum optics").
 * A 50/50 beam splitter is a real orthogonal unitary; two indistinguishable photons entering it always leave together
 * (the coincidence amplitude r²−t² vanishes); and g²(0) = 1 (coherent), 2 (thermal), 0 (single photon) — antibunching
 * g²(0)<1 has no classical model. A MODEL over the sealed algebra, not a photon-counting experiment. [[electromagnetic-radiation]] */
export declare function quantumOpticsDecoded(): {
    computes: boolean;
    isUnitary: boolean;
    coincidenceAmplitude: number;
    g2: {
        coherent: number;
        thermal: number;
        fock1: number;
    };
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** hittingAPrimeIsTheInversionPoint — a prime modulus is the point where inversion becomes TOTAL (user, 2026-07-25:
 * "hitting a prime is inversion point"). In ℤ/pℤ for prime p every nonzero residue has a multiplicative inverse (it is
 * a FIELD), so the invertible fraction reaches 1; at a composite n only φ(n) < n−1 residues invert (the rest are zero
 * divisors). By Fermat, x⁻¹ = x^(p−2) inverts all nonzero residues at once, defined for all precisely because p is
 * prime — so scanning moduli, hitting a prime is the inversion pole of the arc. [[inversion-arc-one-group]] */
export declare function hittingAPrimeIsTheInversionPoint(): {
    computes: boolean;
    primeTotal: boolean;
    compositePartial: boolean;
    fermatOk: boolean;
    scan: {
        n: number;
        prime: boolean;
        frac: number;
    }[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function rubiksCubeDecodesToQuantumCube(): {
    decoded: boolean;
    order: string;
    godsNumber: number;
    faces: number;
    addressCubeCapacity: string;
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
export declare function quantumEvolutionDecoded(): {
    decoded: boolean;
    unitary: boolean;
    reversible: boolean;
    decohered: boolean;
    fragments: number;
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
export declare function quantumMemoryOptimisation(matrix?: {
    root: string;
}): {
    optimised: boolean;
    computeCount: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function concurrence(state: QuantumState): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function mechanicalToolsEntangleBinaryAndAnalogBellBounds(matrix?: {
    root: string;
}): {
    modelsEntanglement: boolean;
    classicalCHSH: number;
    quantumCHSH: number;
    bellGap: number;
    bellConcurrence: number;
    productConcurrence: number;
    binary: string;
    analogHz: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
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
export declare function shannonSourceCodingTheoremEntropyIsTheCompressionLimitReachableWithinOneBit(matrix?: {
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
export declare function blacksMedianVoterTheoremSinglePeakedPreferencesGiveACondorcetWinnerTheMedianAndKillTheCycles(matrix?: {
    root: string;
}): {
    computes: boolean;
    median: {
        medianAlwaysWins: boolean;
        noCycles: boolean;
        trials: number;
        alternatives: number;
    };
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function aFullPeriodPowerOfTwoLcgHasBitIPeriodTwoToTheIPlusOneSoTheLowBitAlternatesAndOnlyHighBitsAreRandom(matrix?: {
    root: string;
}): {
    computes: boolean;
    lcg: {
        fullPeriod: boolean;
        bitPeriodLaw: boolean;
        lowBitAlternates: boolean;
        highBitFull: boolean;
    };
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
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
export declare const modular: {
    readonly quantum: {
        readonly algebra: typeof pauliAlgebraCloses;
        readonly gates: typeof rotationGate;
        readonly phase: typeof phaseGate;
        readonly innerProduct: typeof innerProduct;
        readonly commutator: typeof commutator;
        readonly anticommutator: typeof anticommutator;
        readonly trace: typeof trace;
        readonly dagger: typeof dagger;
    };
    readonly primes: {
        readonly primality: (n: number) => boolean;
        readonly hittingInversionPoint: typeof hittingAPrimeIsTheInversionPoint;
    };
    readonly evolution: {
        readonly quantum: typeof quantumEvolutionDecoded;
    };
};
