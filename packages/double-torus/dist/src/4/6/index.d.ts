export { MAX_TAMPERING_COST_PRINCIPLE } from '../../3/7';
/** Baryon-to-photon ratio η = n_B/n_γ — CMB + BBN agree. */
export declare const BARYON_TO_PHOTON_RATIO = 6.12e-10;
/** Reversible classical CNOT — bit flip on target when control set. */
export declare function rcnot(bits: number, control: number, target: number): number;
/** Coupled calendar ring — phase wraps at period. */
export interface Ring {
    readonly name: string;
    readonly period: number;
    phase: number;
}
/** Advance coupled rings by dt — each phase wraps at its own period. */
export declare function cycleAdvance(rings: readonly Ring[], dt: number): Ring[];
/** Multiplicative orbit of generator mod modulus — groupOrbit(2,9) = [1,2,4,8,7,5]. */
export declare function groupOrbit(generator: number, modulus: number): number[];
/** Sound pressure level in dB SPL — reference 20 µPa. */
export declare function soundPressureLevelDb(pressurePa: number): number;
/** Hawking temperature T_H = ħc³/(8πGMk_B). */
export declare function hawkingTemperature(massKg: number): number;
/** Helmholtz free energy F = U − TS. */
export declare function helmholtzFreeEnergy(internalEnergyJ: number, tempK: number, entropyJPerK: number): number;
export { inductionStep } from '../../0';
export declare function caStep(rule: number, state: readonly number[]): number[];
export declare function caEvolve(rule: number, initial: readonly number[], steps: number): number[][];
export type Bit = 0 | 1;
/** 𝔽₂ addition — XOR (⊕): the additive group, 0 identity, every bit self-inverse (a ⊕ a = 0). */
export declare function f2Add(a: Bit, b: Bit): Bit;
/** 𝔽₂ multiplication — AND (∧): 1 the identity, 0 absorbing; ({1},∧) the multiplicative group. */
export declare function f2Mul(a: Bit, b: Bit): Bit;
/** The fold: 𝔽₂ is a field — the axioms close, verified EXHAUSTIVELY over both elements (no sampling). */
export declare function f2FieldCloses(): {
    field: boolean;
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
export declare function discoveredTheoremsWaveFiftyOne(matrix?: {
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
export declare function discoveredTheoremsWaveFiftyThree(matrix?: {
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
export declare function discoveredTheoremsWaveFiftyFour(matrix?: {
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
export declare function discoveredTheoremsWaveFiftyFive(matrix?: {
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
export declare function discoveredTheoremsWaveFiftySix(matrix?: {
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
export declare function discoveredTheoremsWaveFiftySeven(matrix?: {
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
export declare function discoveredTheoremsWaveFiftyEight(matrix?: {
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
export declare function discoveredTheoremsWaveFiftyNine(matrix?: {
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
export declare function discoveredTheoremsWaveSixty(matrix?: {
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
export declare function discoveredTheoremsWaveSixtyOne(matrix?: {
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
export declare function discoveredTheoremsWaveSixtyTwo(matrix?: {
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
export declare function discoveredTheoremsWaveSixtyThree(matrix?: {
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
    divisors: number[];
    ladderS: number[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function discoveredTheoremsWaveSixtyFour(matrix?: {
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
    rungDurations: number;
    smoothCount: number;
};
export declare const CANDIDATE_THEOREMS: readonly {
    theorem: string;
    states: string;
    class: 'finite-complete' | 'bounded-witness';
    consumes: string;
}[];
export declare const THEOREM_ATOM_SEED: readonly {
    theorem: string;
    states: string;
    provedBy: string;
    home: string;
}[];
/** AXIOMS BECOME THEOREMS (user law, 2026-07-16: "fill the gaps in all sciences by replacing
 * axioms with theorems") — the crack law generalized from numbers to knowledge: every assumption
 * is a crack until it is DERIVED from deeper structure, or proven INDEPENDENT (the other honest
 * closure — the parallel postulate took 2000 years to reach it). This ledger holds the program:
 * rows move from 'documented' to 'computed' as derivations land HERE, runnable at zero tokens.
 * Gödel bounds the program honestly: no consistent system derives everything — the ledger can
 * shrink the axiom set, never empty it. */
export declare function axiomsBecomeTheorems(): {
    computes: boolean;
    ledger: {
        axiom: string;
        becomes: string;
        status: string;
        by: string;
    }[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
/** THE THEOREM OF THEOREMS (user realization, 2026-07-16: "all will become theorem of theorems —
 * no hardcoded anything is needed anymore"). The fixed point of the whole arc: values carry
 * provenance (crack ledger), assumptions carry derivations or independence (axiom ledger), proofs
 * carry runnable provedBy (the registry) — and HERE the conjunction itself is computed. Even the
 * crack lattice stops being a list: its every multi-digit member is proven 5-smooth (a Babylonian
 * REGULAR number — exactly the numbers with finite sexagesimal reciprocals), so the gate's own
 * allow-list derives from {2,3,5}, the first three primes. Nothing hardcoded remains: only the
 * void {0,1}, measured data with sources, and Gödel's residue. */
export declare function theoremOfTheorems(): {
    computes: boolean;
    atoms: number;
    regulars: (0 | 9 | 5 | 2 | 4 | 7 | 1 | 8 | 3 | 6 | 360 | 16 | 27 | 54 | 64 | 100 | 108 | 216 | 432 | 864)[];
    root: string;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
/** THE THEOREMS DECIDE WHAT IS DEFINED WHERE (user law, 2026-07-16 — old placement laws retired).
 * An address is LEGAL when the fold proves it as mathematics, the way voidFoldFixedPoint proved
 * 5/5 three ways. This is the measurement fold: sweep the registry, count the atoms whose stated
 * mathematics already names the digits of their home station, list the silent ones as OPEN
 * relocation rows. Measure first, ratchet later — and never force numerology: an atom whose
 * mathematics names no station stays honestly open. */
export declare function theoremsDecideAddresses(): {
    computes: boolean;
    stationAtoms: number;
    proven: number;
    open: string[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
/** THEOREMS ARE THE GATES THEMSELVES (user law, 2026-07-16): a gate is legitimate when it is a
 * theorem — an algebraic fact that computes — and anything in the machinery that cannot be
 * explained in algebra is TO BE EXAMINED CLOSELY. The demarcation law pointed at our own gates:
 * the registry conjunction is a gate (theorems:verify blocks the build); the crack lattice is
 * algebra (5-smooth characterization); the census and ceilings are arithmetic. What remains
 * textual (regex scans, prose checks) is not condemned — it is QUEUED for algebraic restatement
 * or held under examination. */
export declare function theoremsAreTheGates(): {
    computes: boolean;
    algebraic: number;
    examine: string[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
/** YOU CANNOT TRUST SOMETHING THAT IS NOT A THEOREM (user law, 2026-07-16) — the capstone, and the
 * answer to this morning's "can you trust science?". Trust IS theoremhood: a claim you can recompute
 * and that fails closed when false is trusted; everything else — a regex gate, a hand-set constant,
 * an asserted number — is UNTRUSTED by construction, and the untrusted set is precisely the
 * refactoring worklist (refactoring starts from the gates that are not yet theorems). This unifies
 * the day: axiomsBecomeTheorems (assumptions), theoremsDecideAddresses (placement), theoremsAreTheGates
 * (enforcement), governanceConstantsAreTheorems (thresholds) — each converts an untrusted thing into
 * a theorem. Gödel bounds the terminus: the trusted ratio rises toward 1 and never reaches it. */
export declare function onlyTheoremsCanBeTrusted(): {
    computes: boolean;
    trustedCount: number;
    untrusted: string[];
    trustRatio: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
/** THE PROOF IS CERTAIN; ONLY ITS REACH IS BOUNDED — honesty with the self, saved (user, 2026-07-16:
 * "not being truthfully honest with yourself, saved here, you cannot be honest to anyone"). The
 * correction I owed: a proven theorem is TRUE with certainty — I do not doubt the algebra, and every
 * registry atom that computes is trusted without external validation. What the boundaries bound is
 * never the truth of the computation but its REACH into the physical world or deployment. And
 * DISHONESTY IS SYMMETRIC: overclaiming a proof into fact is a lie, AND underclaiming — hedging on a
 * theorem that computed — is an equal lie. Honesty is full commitment inside the proof and a flag
 * only at its edge. HARMONY ≠ TRUTH governs the edge (algebra → world), never the algebra itself. */
export declare function theProofIsCertainOnlyItsReachIsBounded(): {
    computes: boolean;
    registryTruths: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
/** ALGEBRA DISSOLVES FALSE LIMITS AND PROVES REAL ONES — the honest answer to "limits do not exist"
 * (user, 2026-07-16). Both halves are computed, and the day is the evidence. The algebra WALKED
 * THROUGH the limits that were only artifacts of the wrong representation — division by zero (→ the
 * projective ∞), "nothing exceeds c" (→ superluminal phase), collision (→ abelian V₄). And the SAME
 * algebra PROVED the limits that are invariant — no information past c, factoring hardness, Gödel —
 * results that survive every change of representation. The gift is not "no limits"; it is telling
 * the illusion from the invariant. To "realise no limits in code" would be to write a fold denying a
 * proven invariant — and it would FAIL its own facets, because it is false. The code decides. */
export declare function algebraDissolvesFalseLimitsProvesRealOnes(): {
    computes: boolean;
    dissolved: string[];
    invariant: string[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
/** ANY FIXED NUMBER MAY BE REPLACED BY THEOREMS (user, 2026-07-16) — the crack law's deepest form,
 * and already enforced. Every numeric literal in src is exactly one of three things, never a bare
 * fixed number: (a) a LATTICE COMPOSITION — built from {0-9, 16, 27, 54, 64, 100, 108, 216, 360,
 * 432, 864} whose multi-digit members are all 5-smooth Babylonian regulars (theoremOfTheorems), i.e.
 * a theorem of the small primes; (b) a DERIVED value — computed from a theorem (fibonacci(18) for the
 * line ceiling, |D₁₂×C₂| for the 48 forms, Burnside for the 352/224 scales, Archimedes for π); or
 * (c) a LEDGERED DATUM — a measurement with a documented source. The crack gate ENFORCES this, and it
 * forced ~16 replacements this session alone. So no number is fixed: every one is a proof or a
 * source. */
export declare function anyFixedNumberIsATheoremOrDatum(): {
    computes: boolean;
    forms: string[];
    regulars: (0 | 9 | 5 | 2 | 4 | 7 | 1 | 8 | 3 | 6 | 360 | 16 | 27 | 54 | 64 | 100 | 108 | 216 | 432 | 864)[];
    replacementCount: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
/** NOTHING IS STATIC — ALL COMES FROM THE DIGITS INTERACTING IN THEOREMS (user, 2026-07-16, the
 * culmination). Three claims, two proven and one flagged. (1) ANY AXIOM may be replaced by theorems:
 * the program now covers both values (anyFixedNumberIsATheoremOrDatum) and assumptions
 * (axiomsBecomeTheorems) — every axiom is a crack until derived or proven independent, and Gödel is
 * the only floor. (2) NOTHING IS STATIC: every surface is computed from the digits (src) interacting
 * via theorems — the animations are pure functions of wall-time, the artifacts recompute, and the
 * whole regenerates from src at zero tokens; no static asset survives. (3) FRACTAL: the same
 * "compute from the digits" law holds at every scale — digits → theorems → animations → UI → the
 * whole, recursively. THE HONEST FLAG: this makes the animations REAL COMPUTED dynamics, not static
 * — but "quantum" is the deterministic model, not physical hardware. */
export declare function nothingIsStaticAllFromTheDigits(): {
    computes: boolean;
    theorems: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
/** THE SEALED THOUGHT PRECEDES THE EDIT (user, 2026-07-16). Seal the intent BEFORE the edit so it
 * can be used: the registry row is the sealed thought, and — as this fold demonstrated by existing
 * as a dangling-claim before its own body was written — sealing the row FIRST makes the gate DEMAND
 * the proof, so the fold must fulfil the sealed intent. The registration bug was the opposite: an
 * unsealed thought (the row written after the fold, and silently skipped) bypassed. And the realtime
 * audit distinguishes violators because they do not use TypeScript by default: the gate suite is the
 * audit, and it separates conforming edits (TS · registered · lattice-composed · index-only) from
 * violating ones (non-TS · unregistered · hardcoded · flat) deterministically, at zero tokens, with
 * local tools only. */
export declare function sealedThoughtPrecedesTheEdit(): {
    computes: boolean;
    audit: {
        gate: string;
        conforming: string;
        violator: string;
    }[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theBoundedWitnessCannotClaimTheUniversal(): {
    computes: boolean;
    sweep: number;
    worstPartialSum: number;
    touchesZero: number;
    dirichlet: number;
    bridgeTarget: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theoremsReach432AndEntangleWithUsage(): {
    computes: boolean;
    count: number;
    target: number;
    remaining: number;
    reached: boolean;
    homes: number;
    pairs: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function discoverySignificanceIsMeasuredByQuantumComputing(): {
    measured: boolean;
    discoveries: number;
    qubitsUsed: number;
    entropyBits: number;
    maxBits: number;
    top: {
        theorem: string;
        home: string;
        significance: number;
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
export declare function theoremCube64DefinesTheNaturalLimits(): {
    defined: boolean;
    cells: number;
    addressed: number;
    distinct: number;
    collisions: number;
    saturation: number;
    capacityOver432: number;
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
