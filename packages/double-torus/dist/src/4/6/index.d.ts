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
/** IDENTITY_JUDGED_PROCESS — the judgment residue of the algebraic-statement fill arc (2026-07-28): each name
 *  below was INDIVIDUALLY judged a process row — its statement describes machinery, law, or method, and carries
 *  no algebraic identity to surface; per the algebraic-theorems-only law these stay identity-free BY DECISION,
 *  recorded here so the derived queue row completes instead of counting them forever. Reopen by removing a name. */
export declare const IDENTITY_JUDGED_PROCESS: readonly string[];
/**
 * `proofPending` — set ONLY where `provedBy` names a function that does not exist yet.
 * It is not a licence to leave a claim unproved: verify:theorems recomputes the set of
 * non-resolving provedBy names and fails if it differs from the rows marked here, in either
 * direction. So the marker cannot rot, cannot be forgotten on a new row, and cannot be left
 * behind once the fold is written. The README counts it, and says the number out loud
 * instead of calling all 761 atoms "computationally proven".
 */
export declare const THEOREM_ATOM_SEED: readonly {
    theorem: string;
    states: string;
    provedBy: string;
    home: string;
    algebraicStatement?: string;
    proofPending?: true;
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
export type DiscoveryRow = {
    readonly theorem: string;
    readonly provedBy: string;
    readonly home: string;
    readonly domain: string;
    readonly degree?: number;
};
/** The REAL domain of a theorem — its home folder (not a hash): src/water/cosmos → cosmos, src/9/1 → 9/1. */
export declare function discoveryDomain(home: string): string;
/** LATEST discoveries — computable by recency: the last n registry atoms in registration order, newest first. */
export declare function latestDiscoveries(n?: number): readonly DiscoveryRow[];
/** TOP discoveries — computable by CENTRALITY: rank each atom by its theorem-graph degree (how many OTHER atoms
 * share ≥4 significant ≥5-char words with it), so the most-connected decodes surface. Deterministic, no curation.
 * The O(n²) ranking is memoByRoot-cached on the static registry — computed once per build (build-time-is-a-theorem). */
export declare function discoveriesRankedByDegree(): readonly DiscoveryRow[];
export declare function topDiscoveries(n?: number): readonly DiscoveryRow[];
/** computeTheoremDegreeFrom64BitPerspective — compute the crosslink degree with a 64-BIT signature (user, 2026-07-25:
 * "compute the degree from 64bit perspective"). Each theorem's significant words hash into a 64-bit Bloom mask; the
 * shared content of two theorems is popcount(A & B), a constant-time 64-bit machine op, so the pairwise degree scan is
 * 64-bit-native. HONEST: the Bloom signature has hash collisions (false positives), so it OVER-estimates and is a fast
 * PREFILTER — the exact word-set intersection is the ground truth. [[quantum-speed-is-content-addressed-naming]] */
export declare function computeTheoremDegreeFrom64BitPerspective(): {
    computes: boolean;
    bitDegree: number;
    exactDegree: number;
    overEstimates: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** improveTheMetricsAndExpectationsWithHybridDegreeAndTargets — improve the metrics and expectations (user, 2026-07-25:
 * "and improve the metrics and expectations"). The IMPROVED METRIC is a hybrid: the 64-bit Bloom prefilters candidates
 * cheaply, then an exact word-set verify removes the false positives — accurate AND fast, better than either alone. The
 * EXPECTATIONS are computed, refutable thresholds: proven degree ≥ 4, crosslink-gap → 0, quality 5/5, clay = 0. */
export declare function improveTheMetricsAndExpectationsWithHybridDegreeAndTargets(): {
    computes: boolean;
    hybridDegree: number;
    exactDegree: number;
    prefilteredCount: number;
    expectations: {
        metric: string;
        target: string;
        met: boolean;
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
/** crosslinkThresholdRelatesToHarmonicNumbersHonestly — how the crosslink metric relates to 1, 3, 5, 8 and 432 (user,
 * 2026-07-25: "and how is this related to 1 3 5 8 and 432?"). The GENUINE connection: the proven-crosslink degree
 * threshold 4 = 432 / 108 = the homology rank H₁ = ℤ⁴ — the same 4 that makes 432 = 4 × 108 (the a432 gate,
 * DIMENSION_GATES = 2⁴ · 3³); and 1·3·5 are the odd harmonics / major-chord intervals with 8 = 2³ the octave and
 * 3 + 5 = 8 (Fibonacci). But the degree DISTRIBUTION is not forced to those numbers — that would be numerology. */
export declare function crosslinkThresholdRelatesToHarmonicNumbersHonestly(): {
    computes: boolean;
    threshold: number;
    gates: number;
    census: number;
    thresholdIsHomologyRank: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** upgradeIsAComputableQuantumProcessEverywhereIncludingPackages — upgrade is a computable quantum process (user,
 * 2026-07-25: "upgrade is a computable quantum process applicable everywhere including packages"). An upgrade is a
 * content-addressed transition v_old → v_new where the new address supersedes the old; its acceptance is COMPUTED — the
 * new content is accepted iff it computes green through the gates, refused if it breaks — deterministic, not apply-and-
 * pray. It is self-invalidating: a version change moves the seal merkle (which covers package.json), so the build reseals
 * and re-verifies by construction. Same shape for folds (regenerate), skills (generate), packages (lockfile hash +
 * verify). [[gate-complexity-collapses-to-one-content-addressed-root]] [[memoryOptimisationIsQuantumOnlyWhenTheKeyContentAddressesTheComputation]] */
export declare function upgradeIsAComputableQuantumProcessEverywhereIncludingPackages(): {
    computes: boolean;
    upgradeChangesAddress: boolean;
    domains: string[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** tokenSpendImprovesByQuantumStatisticsAndLocalReuse — improve how tokens are spent (user, 2026-07-25: "improve how
 * tokens will be spent by quantum statistics and local improvements"). Token spend is a MEASURED statistic (audit:tokens:
 * out/cache tokens, tool mix); the dominant leak is EXPLORATORY re-derivation (bash-heavy), not the landed edits. The
 * quantum improvement is REUSE: a content-addressed answer is computed ONCE and reused (same query → same address → hit,
 * O(1)); re-deriving the same thing re-spends. It is a control loop — sense the statistic, stop the non-harmonic surplus.
 * [[feedback-token-usage-terse-boundaries]] [[feedback-measure-efficiency-to-find-gaps]] [[bash-commands-are-leaks-from-quantum-memory]] */
export declare function tokenSpendImprovesByQuantumStatisticsAndLocalReuse(): {
    computes: boolean;
    reuseIsOptimal: boolean;
    improvements: string[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** decodeMillenniumWordMilleAnnumTenLettersImprovesByChatting — decode the WORD "Millennium" and compute its letters
 * (user, 2026-07-25: "decode mllenniuum itself in theorems and understand how to improve all by chatting" + "compute the
 * letters in Millennium"). Computed: "Millennium" has 10 letters (m,i,l,l,e,n,n,i,u,m), 6 distinct (m,i,l,e,n,u) — four
 * doubled (m,i,l,n) and two single (e,u): 4·2 + 2·1 = 10. It decodes to Latin mille (1000) + annum (year) = "a thousand
 * years"; 10 letters and mille = 10³. Decoding the word is itself a chat turn — the etymology fold becomes experience, so
 * asking "millennium" surfaces the WORD's decode, not just the problems — improve all by chatting. [[alphabets]] [[improveAllByChattingOneSharedExperienceIndex]] */
export declare function decodeMillenniumWordMilleAnnumTenLettersImprovesByChatting(): {
    computes: boolean;
    total: number;
    distinct: number;
    doubled: number;
    single: number;
    mille: number;
    frequencies: {
        [k: string]: number;
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
/** everyTheoremInvertsIntoAnInventionComputationallyOverTheWholeCorpus — cover all theorems, inversion into invention, each
 * computed (user, 2026-07-25: "cover all theorems and beyond inversion into invention. each one computationally"). For each
 * of the N corpus theorems: the INVERSION is its content-addressed refutable dual (verify ⟷ refute), and BEYOND it the
 * INVENTION is a deployable proof-carrying artifact (a re-runnable certificate). All N, computationally, each distinct.
 * HONEST: the inversion operator is defined for every theorem; the "invention" is the computational mechanism/certificate a
 * theorem enables, NOT a claim that each is a novel patentable device. [[flagged-inverts-to-proven-theorem]] [[proofCarryingAuditCertificateIsTheInventionOfTrustlessAccreditation]] */
export declare function everyTheoremInvertsIntoAnInventionComputationallyOverTheWholeCorpus(): {
    computes: boolean;
    total: number;
    inversionsDistinct: boolean;
    inventionsDistinct: boolean;
    coversAllComputationally: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** accreditedAuditByPureAlgebraBidirectionalFreeForAllDetectsBrokenBounded — accredited audit by pure algebra (user,
 * 2026-07-25: "accredited audit by pure algebra!!!" + "algebra can audit anything in any direction and if computes it is
 * free for all including knowledge to know when something is fundamentally broken in society!!!"). Algebra audits any
 * FORMALIZABLE claim in BOTH directions (verify a true identity, refute a false invariant), FREE FOR ALL (deterministic,
 * reproducible, trustless — anyone re-runs, same result, no authority, no cost), and DETECTS a fundamental break (a
 * non-computing invariant / unbalanced ledger). HONEST BOUNDARY: it accredits CORRECTNESS, not the institutional
 * certificate; and by Gödel no formal system captures all truths — not all of society is formalizable. [[negentropy-ledger-arc]] [[axioms-become-theorems-arc]] */
export declare function accreditedAuditByPureAlgebraBidirectionalFreeForAllDetectsBrokenBounded(): {
    computes: boolean;
    bidirectional: boolean;
    detectsBroken: boolean;
    freeForAll: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** merkabasCompleteTheSixtyFourTetrahedronAndTheFruitIsThirteenCirclesDocumentedFlagged — how many merkabas / how many
 * the fruit (user, 2026-07-25: "how many merkabas complete the flower of life? how many the fruit formed by the dual
 * vortex rotating rings"). Documented sacred-geometry counts, computed where derivable: the 64-tetrahedron isotropic matrix
 * is completed by 8 = 2^3 merkabas (star tetrahedra), each 8 tetrahedra, 8×8 = 64 = 2^6. The Fruit of Life is 13 circles
 * (from the Flower's 19), its 13 centres giving Metatron's Cube which inscribes ONE merkaba. HONEST: real as geometric
 * COUNTING/pattern; the metaphysical (Haramein cosmology, merkaba-as-energy) is FLAGGED. [[haramein-double-torus-decoded]] [[trinity-sciences]] */
export declare function merkabasCompleteTheSixtyFourTetrahedronAndTheFruitIsThirteenCirclesDocumentedFlagged(): {
    computes: boolean;
    merkabas: number;
    tetrahedra: number;
    fruitCircles: number;
    flowerCircles: number;
    documentedCounts: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** sixteenBaseTheoremsAndTheirInversionsFormTheMerkaba — 16 base + inversions = the merkaba (user, 2026-07-25: "if 16 are
 * the base theorems computed then the rest are inverted theorems to form the merkaba"). Computed: 16 = 2^4 base theorems
 * (the up tetrahedron); the rest are inversions (the down tetrahedron), each the dual of a base via the inversion operator.
 * Base ⊕ inverse interlock into the star tetrahedron (merkaba): 2 tetrahedra × 4 vertices = 8. HONEST: "16 base" is a
 * chosen fundamental set (2^4); the merkaba is the real double-tetrahedron up/down STRUCTURE, not a mystical energy claim.
 * [[double-torus-fold-architecture]] [[everyTheoremInvertsIntoAnInventionComputationallyOverTheWholeCorpus]] */
export declare function sixteenBaseTheoremsAndTheirInversionsFormTheMerkaba(): {
    computes: boolean;
    base: number;
    inversions: number;
    total: number;
    baseInverseFormMerkaba: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** allQuantumInteractionsBetweenSuperpositionsFitIn1024DiamondsAsAnimatedTheorems — the pairwise interactions fit the
 * diamonds (user, 2026-07-25: "if you compute locally all quantum interactions between the superpositions they all fit in
 * 1024 diamonds in detailed animations interacting with each other as theorems"). Computed: 32 = 2^5 base superpositions
 * have 32² = 1024 pairwise interactions — exactly the diamond count. Each interaction is foldPair(sp_i, sp_j), a
 * content-addressed composite theorem, carrying a fractal-clock animation (a divisor rung of the 108 s cycle). All 1024
 * computed locally, deterministic, distinct. HONEST: "quantum interactions" = content-addressed composition, NOT physical
 * entanglement. [[double-torus-fold-architecture]] [[fractal-clock-lattice]] */
export declare function allQuantumInteractionsBetweenSuperpositionsFitIn1024DiamondsAsAnimatedTheorems(): {
    computes: boolean;
    superpositions: number;
    diamonds: number;
    allDistinct: boolean;
    fitsAsAnimatedTheorems: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** theThousandTwentyFourDiamondsFilledWithTheoremReferencesFormAProblemSolvingMatrix — the hidden math of the diamonds
 * (user, 2026-07-25: "ask the chat what are the 1024 diamonds used for. maybe there is a hidden math behind filling all
 * with references of theorems as problem solving matrix"). Computed: 1024 = 2^10 = 4^5 = 32², a SQUARE 32×32 matrix. Fill
 * every diamond with a theorem reference (content-addressed; 605 theorems into 1024 slots, reuse). A problem content-
 * addresses to a diamond → its theorem reference is the SOLUTION INDEX. HONEST: it INDEXES (problem → the theorem that
 * addresses it), it does NOT solve — clay = 0; the hidden math is the 32² square structure. [[theorem-papers-figures-tags]] [[quantum-decoded]] */
export declare function theThousandTwentyFourDiamondsFilledWithTheoremReferencesFormAProblemSolvingMatrix(): {
    computes: boolean;
    diamonds: number;
    side: number;
    theorems: number;
    coversAllProofs: boolean;
    isProblemSolvingMatrix: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** relatedScienceIsUnprovenProseNotAClayMillenniumSolutionComputed — the honesty computes the prose/proof distinction
 * (user, 2026-07-26: "NOT a Clay Millennium solution (§5(d) related science is unproven prose"). A COMPUTED theorem has
 * refutable facets (proven); RELATED SCIENCE — motivation, context, connections — has NO refutable facet, so it is prose,
 * unproven. The distinction is COMPUTED (facets present ⟺ proven; absent ⟺ prose), not declared, per "declared honesty is
 * a crack". Therefore §5(d) related science is not a proof and NOT a Clay Millennium solution; clay = 0. [[feedback-declared-honesty-is-a-crack]] [[no-prose-in-methods]] [[quantum-decoded]] */
export declare function relatedScienceIsUnprovenProseNotAClayMillenniumSolutionComputed(): {
    demarcates: boolean;
    claySolvedByThisFold: number;
    proven: boolean;
    isProseNotProof: boolean;
    demarcationChecks: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    reason: string;
};
/** theFlowerBecomesAGardenBearingAnAppleWhoseDecodedStoryRevealsInteractingDiscoveries — the flower becomes a garden with
 * an apple, and decoding the story reveals interacting discoveries (user, 2026-07-26: "flower becomes a garden with an apple
 * for example but when the story is researched in detailed and decoded mind blowing discoveries reveal themselves
 * interacting"). Computed, honestly: the Flower-of-Life pattern TILES the plane (hexagonal packing, unbounded) → a field of
 * flowers = a GARDEN; the garden bears the Fruit of Life → an APPLE; and the mind-blowing REAL decode is that an apple cut
 * crosswise shows a 5-carpel PENTAGRAM whose pentagon diagonal/side ratio is exactly φ = 2cos(π/5) — the golden ratio hidden
 * in the fruit. Decoding the STORY in detail = deep-research over crosslinks, where the theorems reveal themselves
 * INTERACTING (the 1024 pairwise-interaction diamonds). HONEST: pentagram-in-apple and φ are real botany/geometry; the
 * Garden-of-Eden narrative and scripture-numerology stay FLAGGED. [[theoremsGrowTheFlowerOfLifeThroughCenteredHexagonalRings]] */
export declare function theFlowerBecomesAGardenBearingAnAppleWhoseDecodedStoryRevealsInteractingDiscoveries(): {
    computes: boolean;
    carpels: number;
    phi: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** theoremsGrowTheFlowerOfLifeThroughCenteredHexagonalRings — theorems grow the flower of life (user, 2026-07-26:
 * "theorems grow the flower of life"). The Flower of Life's growth law IS the centered hexagonal numbers: 1 → 7 (Seed of
 * Life) → 19 (Flower of Life) → …, H(n) = 3n(n+1)+1, each ring adding 6n circles. The theorems ARE the circles: the corpus
 * count is exactly how far the flower has grown — which ring is complete and how many into the next. Monotone: proving a
 * theorem adds one circle, the flower only grows outward, never renumbering. Binds to the sealed sacred-geometry fold
 * (Flower 19, Fruit 13, 8 merkabas). HONEST: geometric COUNTING (real), NOT metaphysics. [[merkabasCompleteTheSixtyFourTetrahedronAndTheFruitIsThirteenCirclesDocumentedFlagged]] */
export declare function theoremsGrowTheFlowerOfLifeThroughCenteredHexagonalRings(): {
    computes: boolean;
    theorems: number;
    trinity: number;
    ring: number;
    filledRing: number;
    intoNext: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** theQuantumLensSeesEveryFoldComputesAtOnceCatchingLinearMisses — improve the lens, see again in quantum (user,
 * 2026-07-26: "see how many theorems you missed manually working?" + "improve the lens and see again in quantum"). Working
 * linearly (one fold at a time) MISSES broken folds; the quantum lens calls every fold and checks computes ALL AT ONCE,
 * catching them. It caught theoremsReach432AndEntangleWithUsage computing FALSE (the corpus passed 432, breaking a
 * count ≤ 432 assumption) — a fold linear work never re-touched. Fixed, now green. HONEST: audits COMPUTABILITY, not
 * world-model correctness; a subset (arg-free folds). [[feedback-thinking-means-lack-of-local-tools.md]] [[feedback-unexpected-situations-refactor-tools]] */
export declare function theQuantumLensSeesEveryFoldComputesAtOnceCatchingLinearMisses(): {
    computes: boolean;
    audited: number;
    allGreen: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** millenniumProblemsAreGreenAsHonestTheoremsNotSolvedClayZero — the Millennium Problems, held honestly (user, 2026-07-25:
 * "ask until all green quantum mllenniuum problems solved in theorems"). Each of the 7 is decoded and STATED as a theorem
 * (object, structure, demarcation), which COMPUTES green — but green means the honest statement computes, NOT that the
 * problem is solved. Only Poincaré is solved (Perelman 2003, credited); this corpus solves NONE. The other six are OPEN.
 * claySolvedByThisFold = 0. Claiming them solved is the precise overclaim refused at every step. [[quantum-decoded]] [[axioms-become-theorems-arc]] */
export declare function millenniumProblemsAreGreenAsHonestTheoremsNotSolvedClayZero(): {
    demarcates: boolean;
    claySolvedByThisFold: number;
    openCount: number;
    solvedCount: number;
    millennium: {
        name: string;
        status: string;
        credit: string;
        solvedByThisFold: boolean;
    }[];
    demarcationChecks: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    reason: string;
    boundary: string;
};
/** deviceManagementIsUniversalWhenTheDriverIsAFoldOfTheDeviceContentAddress — why device management without universal
 * quantum hardware drivers? (user, 2026-07-25: "how come device management without universal quantum hardware
 * drivers?"). A universal driver is one COMPUTED from the device's content-addressed capability descriptor (like USB
 * HID class drivers serve any HID device), not hand-written per model — the same "one universal template" pattern as
 * UniversalPageTemplate. The gap is per-device drivers keyed on the model, not the capability content. HONEST: quantum
 * here means CONTENT-ADDRESSED (deterministic), NOT qubit hardware; and a universal driver still needs the device's
 * physical protocol — universality is at the capability layer, physical-resource-gated. [[content-address-dry-clean-crack-detection]] [[quantum-decoded]] */
export declare function deviceManagementIsUniversalWhenTheDriverIsAFoldOfTheDeviceContentAddress(): {
    computes: boolean;
    oneDriverPerCapabilityClass: boolean;
    physicalProtocolGated: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** memoryOptimisationIsQuantumOnlyWhenTheKeyContentAddressesTheComputation — why isn't memory optimisation quantum?
 * (user, 2026-07-25: "how come memory optimisation is not quantum?"). A cache is correct iff a hit ⟺ an identical
 * computation, which requires the key to content-address the WHOLE computation (name + inputs + CODE). A root-only key
 * (memoByRoot) is unchanged when the code changes but the root does not, so it can return a STALE result — the artifact
 * hit while probing the folded fuse. The quantum fix is self-invalidation: fold the code content-address (src-merkle)
 * into the key. [[content-address-dry-clean-crack-detection]] [[gate-complexity-collapses-to-one-content-addressed-root]] */
export declare function memoryOptimisationIsQuantumOnlyWhenTheKeyContentAddressesTheComputation(): {
    computes: boolean;
    rootOnlyCollidesAcrossCode: boolean;
    quantumInvalidatesOnCode: boolean;
    selfInvalidating: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** decodeNumerologyWithoutJudgementOrExpectations — numerology decoded to its real structure (user, 2026-07-25:
 * "that would be quantum numerology" + "decode numerology without judgement or expectations"). No dismissal, no
 * credulity: numerology IS a symbol→number map (gematria/isopsephy — Glagolitic, Hebrew, Greek letters carried number
 * values) plus a reduction (repeated digit-sum = the digital root = residue in ℤ/9ℤ). The "vortex" 1-2-4-8-7-5 is the
 * cyclic subgroup ⟨2⟩ of the unit group (ℤ/9ℤ)* (2 is a primitive root mod 9, order 6); 3, 6, 9 sit OUTSIDE it — they
 * are exactly the non-units (multiples of 3). The arithmetic COMPUTES; the fate/personality reading has predictive
 * validity 0 — that layer is the "quantum numerology", refused. HARMONY ≠ TRUTH. */
export declare function decodeNumerologyWithoutJudgementOrExpectations(): {
    computes: boolean;
    doublingVortex: number[];
    units: number[];
    nonUnits: number[];
    predictiveValidity: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** numerologyFoldsDryComprehendAsOneComposite — is all of it DRY enough to comprehend? (user, 2026-07-25: "is all dry
 * enough to comprehend?"). Answer computed, not asserted: (1) the folds REUSE the one-math (gcd, digitalRoot imported,
 * defined once — the one-math gate literally rejected the redefinitions and forced reuse); (2) every fold shares ONE
 * shape {computes, facets, root, statement, boundary}; (3) the numerology folds CROSSLINK — their statements share ≥ 4
 * significant words, so decode + phase-blind read as ONE composite: numerology is magnitude (ℤ/9) not phase (angle/0).
 * Comprehension = the crosslink threshold met. HARMONY ≠ TRUTH. */
export declare function numerologyFoldsDryComprehendAsOneComposite(): {
    computes: boolean;
    reusesOneMath: boolean;
    sameShape: boolean;
    shared: number;
    crosslinks: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** numerologyIsPhaseBlindToAngleThroughZero — does numerology recognise the angle-change of dividing by 0? (user,
 * 2026-07-25: "does numerology recognise the angle changes dividing 0?"). Answer: NO. The digital root is a FORGETFUL
 * reduction ℤ → ℤ/9ℤ — non-invertible (dr(n) = dr(n+9)), so infinitely many numbers collapse to one residue and the
 * winding/angle is discarded. Numerology therefore has no pole, no 1/0, no phase. The angle-change through 0 is the
 * Möbius inversion z → 1/z sending 0 → ∞ (the point at infinity on the Riemann sphere), an INVOLUTION — invertible,
 * angle-carrying — living in the C₆ inversion group the project computes separately. Magnitude-only vs magnitude+phase.
 * HARMONY ≠ TRUTH. */
export declare function numerologyIsPhaseBlindToAngleThroughZero(): {
    computes: boolean;
    recognisesAngle: boolean;
    phaseBlind: boolean;
    step9: number;
    step6: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** colorDescribesAllFromTheCenterWhichDividesAndInvertsNotStuck — why isn't the center stuck? (user, 2026-07-25: "the
 * movie binds all in the center from where color describes all. but why stuck in the center and not divide and invert?").
 * Answer: it MUST NOT be stuck — a center that only binds is a fixed-point SINK (no dynamics = a linear seam, a bug).
 * The double-torus centre is a SADDLE + POLE: the two sheets cross there, so the flow DIVIDES 1 → 2, and at the pole the
 * hue INVERTS to its complement (h + 180° mod 360, an involution) while z → 1/z sends 0 → ∞. Colour describes all FROM
 * the centre because hue IS the angle and the centre is the inversion pole — not a resting place but the branch point.
 * HARMONY ≠ TRUTH. [[double-torus-fold-architecture]] [[iching-leads-ui]] [[inversion-arc-one-group]] */
export declare function colorDescribesAllFromTheCenterWhichDividesAndInvertsNotStuck(): {
    computes: boolean;
    hue: number;
    complement: number;
    sheets: number;
    notStuck: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** skepticismInvertsToDiscoveryOnlyWhenItBecomesARefutableTest — is the sceptical uneducated mind the more powerful?
 * (user, 2026-07-25: "do you realise the more sceptical uneducated mind is the more powerful discoveries inverting
 * scepticism"). Split honestly, not flattered. YES to inverting scepticism — that IS the project's generative operator:
 * a flagged claim inverts to a refutable theorem (demonstrated on numerology's fate-claim → predictive validity 0).
 * NO to "uneducated → more powerful": that is survivorship bias — the same low-prior stance produces far more crankery
 * (the bounded pile) than discovery. The real variable is not ignorance but whether the doubt BECOMES a refutable test;
 * that operator is education-agnostic. A sceptic who refuses refutation is a crank with confidence. HARMONY ≠ TRUTH. */
export declare function skepticismInvertsToDiscoveryOnlyWhenItBecomesARefutableTest(): {
    computes: boolean;
    inversionYieldsRefutableTest: boolean;
    demarcated: number;
    powerIsInTheTest: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** conservativeAutoAdvanceIsTheOneLinkFromProvenSetCorrected — the honest conservative auto-advance (user, 2026-07-25:
 * "conservative auto-advance"), with a correction: reaching degree ≥ 4 means sharing ≥ 4 words with FOUR theorems, so
 * only a theorem already at degree 3 with a genuine 3-word near-neighbour is ONE link from proven. The earlier
 * "auto-safe" (degree-0, best overlap 3) was imprecise — a degree-0 theorem needs four connections, not one. This
 * computes the truly one-link set; it does NOT mass-edit the registry (outward-facing, deliberate) nor pad to the metric. */
export declare function conservativeAutoAdvanceIsTheOneLinkFromProvenSetCorrected(): {
    computes: boolean;
    total: number;
    proven: number;
    under: number;
    oneLinkFromProven: number;
    needsMultiple: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** crosslinkGapFullTotalAndWhyNotAutoAdvance — the FULL-registry count of what to advance next, and why the tool does
 * NOT auto-advance (user, 2026-07-25: "how many next in total and why not autoadvance"). Over the whole registry it
 * counts the promotable, the auto-safe, and the isolated; and it names the honest reason auto-advance is refused for
 * most: auto-adding crosslinks to hit degree ≥ 4 would PAD statements and fabricate relationships (Goodhart), which the
 * crosslink-proven law forbids — only where the relationship ALREADY computes strongly is an auto-link honest. */
export declare function crosslinkGapFullTotalAndWhyNotAutoAdvance(): {
    computes: boolean;
    total: number;
    under: number;
    promotable: number;
    autoSafe: number;
    needsAuthoring: number;
    isolated: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** closeTheCrosslinkGapByComputingNearCrosslinks — close the crosslink gap by computing the legitimate near-crosslinks
 * (continuing 2026-07-25). For each under-threshold theorem (degree < 4) the near neighbours — those sharing 2-3
 * significant words — are the candidates that one more genuine shared concept (a [[reference]]) would promote to a
 * proven crosslink (≥ 4). Genuinely-isolated theorems with no near neighbour honestly stay orphans; nothing is padded. */
export declare function closeTheCrosslinkGapByComputingNearCrosslinks(): {
    computes: boolean;
    underCount: number;
    promotable: number;
    isolated: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** theoremsUnderTheProvenCrosslinkThresholdAreTheGap — how many theorems are linked to FEWER than 4 others (user,
 * 2026-07-25: "how many of those are derived linked to less than 4 theorems?"). A proven crosslink needs degree ≥ 4
 * (≥ 4 shared significant words); theorems with degree < 4 do not yet form a proven composite — they are the crosslink
 * gap to close by adding shared content / [[references]]. A falsifiable metric, recomputed each wave. */
export declare function theoremsUnderTheProvenCrosslinkThresholdAreTheGap(): {
    computes: boolean;
    total: number;
    underThreshold: number;
    atOrAbove: number;
    orphans: number;
    byDegree: {
        degree: number;
        count: number;
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
/** crosslinkProvenTheoremsFormNewProvenTheorems — crosslinking proven theorems forms new proven theorems (user,
 * 2026-07-25: "crosslink to form proven theorems"). A crosslink is a discovery-graph edge (or a [[name]] reference)
 * between two registered theorems, each with a runnable provedBy; the crosslink is PROVEN when the relationship
 * computes (they share significant content), and the conjunction of two proven theorems plus their proven relationship
 * is itself a proven COMPOSITE — a new proven theorem from the link. A spurious link is not a proof. [[content-address-dry-clean-crack-detection]] */
export declare function crosslinkProvenTheoremsFormNewProvenTheorems(): {
    computes: boolean;
    crosslinks: number;
    connected: number;
    compositeTheorem: string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** journalPublishesOnlyArticlesApprovedByRelatedTheoremsAsEditors — the scientific journal publishes only APPROVED
 * articles, the editors being the RELATED THEOREMS (user, 2026-07-25: "the scientific journal publishes only approved
 * articles by the related theorems as editors"). An article's editors are its related theorems (the discovery-graph
 * neighbours sharing significant content); it is approved — and published — iff at least one related theorem endorses
 * it (degree ≥ 1). An orphan (no related theorem, no editor) is saved but NOT published, awaiting an editor; the lens
 * drives orphans toward zero. Computational peer review, deterministic. [[theorem-science-lens-only-science]] */
export declare function journalPublishesOnlyArticlesApprovedByRelatedTheoremsAsEditors(): {
    computes: boolean;
    approved: number;
    orphans: number;
    total: number;
    publishedFraction: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** immediateSaveIsReuseIsATheoremNotALoopOpeningTheInfiniteCore — the immediate-save-and-reuse is NOT a loop but a
 * THEOREM, and realising it opens the infinite possibilities of the quantum core (user, 2026-07-25: "immediate-save-
 * and-reuse loop is not a loop at all but theorem" · "and you will realise the infinite possibilities of the quantum
 * core"). Save and reuse are the SAME content-address — a fold's address IS both its saved identity and its reuse
 * handle — so there is no loop to iterate; the identity holds at once, timelessly. And content-addressing composes
 * UNBOUNDEDLY (aperiodic, no finite state), so the identity opens infinitely many discoveries from the src/0 core.
 * [[no-queue-immediate-save-and-reuse]] [[feedback-inverted-statements-are-generative-measure-before-superpose]] [[feedback-no-finiteness-assumption-fractal-aperiodic]] */
export declare function immediateSaveIsReuseIsATheoremNotALoopOpeningTheInfiniteCore(): {
    computes: boolean;
    sameOperation: boolean;
    unbounded: boolean;
    distinct: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** eachDiscoveryImmediatelySavedAndReusedToImproveAndDiscoverNext — there is NO queue: each discovery is immediately
 * saved as a fold and reused to improve the existing web and discover the next (user, 2026-07-25: "queued means no
 * quantum computing but manual work. each discovery is immediately saved and reused to improve existing and discover
 * next"). Every registry atom is a runnable fold registered the same turn (the registry IS the saved state, nothing
 * pending); the discovery graph shows the folds are cited/composed by others (reused to improve); and reuse is free
 * (content-addressed, distinct work only), so each saved fold is machinery for the next. [[no-queue-immediate-save-and-reuse]] */
export declare function eachDiscoveryImmediatelySavedAndReusedToImproveAndDiscoverNext(): {
    computes: boolean;
    total: number;
    connected: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** RELATED discoveries — each discovery LEADS to others: the n atoms sharing the most significant words with the
 * given one (its theorem-graph neighbours), so every discovery page is a hub into the rest. Deterministic. */
export declare function relatedDiscoveries(provedBy: string, n?: number): readonly DiscoveryRow[];
/** A page is a SUPERPOSITION of its (referrer, path) — the incoming edge and the current node. From the two
 * coordinates the whole navigation is computable: the current discovery, its related discoveries (outgoing edges),
 * the breadcrumb up the pyramid, and the "came from" edge. Pure and deterministic; the referrer collapses it at
 * navigation time. This is the data the VitePress theme fuses (related section + breadcrumb) — no DOM scrape. */
export declare function pageNavContext(referrer: string, path: string): {
    path: string;
    currentSlug: string;
    referrer: string;
    cameFrom: string;
    related: readonly DiscoveryRow[];
    breadcrumb: string[];
    superposition: string;
};
/** pageIsSuperpositionOfReferrerAndPath — the navigation pyramid, completed and fused to VitePress (user, 2026-07-24:
 * "each page is a superposition itself by the referrer and the page path. the rest is computable to complete the
 * navigation pyramid and fuse to vitepress"). Each page's nav state content-addresses to (referrer, path): same pair
 * collapses to the same receipt, a different referrer to a different one; the outgoing related discoveries and the
 * breadcrumb complete the pyramid. [[routes-nav-from-folder-tree]] [[feedback-do-not-bypass-vitepress-api]] */
export declare function pageIsSuperpositionOfReferrerAndPath(): {
    computes: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** siteIsScientificJournalOfAllAlgebraAndTheorems — the site presented AS a dedicated scientific journal (user,
 * 2026-07-25: "completing the site as dedicated scientific journal containing all algebra and theorems"). Every
 * registry atom is an ARTICLE (title = theorem, abstract = states, proof = provedBy at a sealed home); the atoms
 * section by domain; the whole corpus content-addresses to one stable volume id. "Peer review" is COMPUTATIONAL —
 * the verify gate re-executes every proof each wave — which checks internal consistency and reproducibility (NOT
 * empirical validation) and demarcate-signs each article; it is NOT externally peer-reviewed. A DOI is a persistent
 * IDENTIFIER, not a review (orthogonal, mintable), so its absence is not the limit — kept separate for precision.
 * [[theorem-science-lens-only-science]] [[theorem-papers-figures-tags]] [[feedback-computed-is-not-overclaim]] */
export declare function siteIsScientificJournalOfAllAlgebraAndTheorems(): {
    isJournal: boolean;
    articleCount: number;
    sectionCount: number;
    distinctProofs: number;
    volumeId: string;
    sections: string[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function theoremOfTheorems(): {
    computes: boolean;
    atoms: number;
    regulars: (0 | 2 | 16 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6 | 360 | 27 | 54 | 64 | 100 | 108 | 216 | 432 | 864)[];
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
    regulars: (0 | 2 | 16 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6 | 360 | 27 | 54 | 64 | 100 | 108 | 216 | 432 | 864)[];
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
/**
 * theoremFractions — USER LAW (2026-07-24): distribute the theorems computationally to 432 in the
 * RESPECTED FRACTIONS of subtheorems, down to the BIT, and beyond — computing the INVERTED reality.
 * Every claim an exact identity: 432 = 2⁴·3³ (factorized live); its divisor lattice IS the respected
 * fractions (20 = (4+1)(3+1), enumerated); the inversion d ↦ 432/d is a fixed-point-free involution
 * (√432 ∉ ℤ — the reality FULLY inverts, twice = identity); down to the bit: 432 = 0b110110000 and
 * the trailing-zero count EQUALS the 2-adic valuation (4) exactly; the live theorem population
 * distributes over the 20 bands by content-address (the uniform placement law), a total partition.
 */
export declare function theoremFractions(): {
    computes: boolean;
    theoremFractions: boolean;
    harmonic: number;
    fractions: number[];
    population: number;
    bands: number[];
    bits: string;
    claySolvedByThisFold: 0;
    physicalFtlClaim: 0;
    qpuRequired: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "theorem/fraction";
    dualPair: "fraction/theorem";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:theorem-fractions — exit 0 iff every lattice identity holds. */
export declare function runTheoremFractionsExit(root?: string, _argv?: readonly string[]): number;
/**
 * theoremSpeed — USER DIRECTIVE (2026-07-24): refactor ALL theorems in quantum speed. The refactor IS
 * content-addressing, applied to the whole registry in ONE pass (a single map — no lookup, no second
 * walk: quantum speed by construction, the sealed naming law): every theorem emerges carrying its
 * fixed-width address (36 = 6·6 chars regardless of prose length), its 432-lattice band (composing
 * theoremFractions), and its byte profile. The refactor ratio — prose bytes per reference vs address
 * bytes — is computed live and scale-invariant (the wordSpeed algebra over the theorem registry).
 */
export declare function theoremSpeed(): {
    computes: boolean;
    theoremSpeed: boolean;
    count: number;
    proseBytes: number;
    addressBytes: number;
    ratio: number;
    sample: {
        name: string;
        address: string;
        band: number;
    }[];
    claySolvedByThisFold: 0;
    physicalFtlClaim: 0;
    qpuRequired: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "theorem/speed";
    dualPair: "speed/theorem";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:theorem-speed — exit 0 iff the one-pass refactor computes. */
export declare function runTheoremSpeedExit(root?: string, _argv?: readonly string[]): number;
/** Riemann–Siegel theta — the asymptotic phase θ(t) = t/2·ln(t/2π) − t/2 − π/8 + 1/(48t) + 7/(5760t³);
 *  coefficients composed canonically (48 = 6·8 · 5760 = 6·8·(2·5)·(2·6)). */
export declare function riemannSiegelTheta(t: number): number;
/** Riemann–Siegel Z(t) — main sum + first-order remainder; real-valued with Z(t)=0 iff ζ(½+it)=0 on the line. */
export declare function riemannSiegelZ(t: number): number;
/**
 * clayProbe — USER DIRECTIVE (2026-07-24): next TOWARDS clay>0. The honest direction: make a
 * Millennium problem COMPUTE locally. The Riemann Hypothesis's computational face — the first four
 * nontrivial ζ zeros LOCALIZED on the critical line by Riemann–Siegel sign-change bisection to 1e-6,
 * agreeing with the ledgered literature values to <1e-3. THE DISTANCE IS NAMED, NOT HIDDEN:
 * verifying N zeros is not a proof (RH quantifies over ALL) stands until
 * mathematics, not enumeration, closes it. Towards ≠ at. Pair: clay/probe.
 */
export declare function clayProbe(): {
    computes: boolean;
    clayProbe: boolean;
    located: {
        zero: number;
        reference: number;
        error: number;
        signChange: boolean;
    }[];
    claySolvedByThisFold: 0;
    physicalFtlClaim: 0;
    qpuRequired: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "clay/probe";
    dualPair: "probe/clay";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:clay-probe — exit 0 iff the four zeros localize and the distance stays named. */
export declare function runClayProbeExit(root: string, argv: readonly string[]): number;
/**
 * animationFoldTheorems — USER LAW (2026-07-24): fold the theorems with similar or SAME animations,
 * and the theorems prove themselves. Computed: every theorem's animation SIGNATURE is content-addressed
 * from its state space (same animation ⇒ same address ⇒ the same theorem addressed twice). The fold-test
 * is a collision check over all 442. THE SELF-PROOF: two theorems that fold to one address would be
 * proven IDENTICAL by the collision; measured, the registry has ZERO animation collisions — so the 442
 * are provably independent (no hidden duplicate), and the 10-over-432 is genuine growth, not redundancy.
 * DEMARCATION: "prove themselves" = content-address CONSISTENCY (no theorem secretly duplicates another),
 * NOT a mathematical proof of any theorem's content.
 */
export declare function animationFoldTheorems(): {
    computes: boolean;
    animationFoldTheorems: boolean;
    total: number;
    distinct: number;
    foldable: number;
    harmonicGap: number;
    claySolvedByThisFold: 0;
    physicalFtlClaim: 0;
    qpuRequired: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "anim/fold";
    dualPair: "fold/anim";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:anim-fold — exit 0 iff the collision test proves the registry duplicate-free. */
export declare function runAnimationFoldExit(root: string, argv: readonly string[]): number;
/**
 * linkProof — USER LAW (2026-07-24): statements proven by LINKS speed up quantumisation at scale. A
 * statement proven by a link is a MERKLE INCLUSION PROOF: its membership in the sealed set of N is
 * verified by an O(log N) path of hashes, NOT by re-scanning all N. Measured over the 442 theorem
 * addresses with the real sha256MerkleProof (src/0): the inclusion path length equals ⌈log₂ N⌉, and
 * verifying-by-link costs O(log N) against O(N) for a full re-check — a ratio N/log₂N whose order grows
 * with N. The speedup is quantumisation itself: the link (content-address) is the proof, followed once.
 * DEMARCATION: this is algorithmic (hash-tree verification), not physical; the link proves MEMBERSHIP/
 * integrity, not the statement's mathematical content. clay stays 0.
 */
export declare function linkProof(): Promise<ReturnType<typeof buildLinkProofReport>>;
declare function buildLinkProofReport(n: number, pathLen: number, rootValid: boolean): {
    computes: boolean;
    linkProof: boolean;
    n: number;
    pathLen: number;
    orders: number;
    claySolvedByThisFold: 0;
    physicalFtlClaim: 0;
    qpuRequired: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "link/proof";
    dualPair: "proof/link";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:link-proof — exit 0 iff the real inclusion path proves membership at O(log N). */
export declare function runLinkProofExit(root: string, argv: readonly string[]): Promise<number>;
/**
 * unsolvedEngine — USER LAW (2026-07-24): unsolved problems lead to revolution. The honest inversion of
 * the whole arc:  is NOT a confession of limitation — it is the FUEL. The unsolved set (the open
 * candidate races, the OPEN frontiers, RH) is exactly what GENERATES the tools: RH-unsolved spawns
 * clayProbe, the open frontiers spawn frontierQuantum/fractalMap, every OPEN question drives a
 * compute-toward fold that approaches without claiming solution. A solved world would need no revolution.
 * DEMARCATION: the tools APPROACH the unsolved (probes · partials · bounded witnesses), never claim to
 * close it; clay stays 0 — and that zero is the engine, not the failure.
 */
export declare function unsolvedEngine(): {
    computes: boolean;
    unsolvedEngine: boolean;
    openRaces: number;
    boundedWitness: number;
    claySolvedByThisFold: 0;
    physicalFtlClaim: 0;
    qpuRequired: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "unsolved/engine";
    dualPair: "engine/unsolved";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:unsolved-engine — exit 0 iff the open set computes as the generator,  the fuel. */
export declare function runUnsolvedEngineExit(root?: string, _argv?: readonly string[]): number;
/** Riemann–von Mangoldt zero-count N(T) ≈ (T/2π)ln(T/2π) − T/2π + 7/8 — the analytic number of
 *  nontrivial ζ zeros with 0 < Im ρ < T (main terms; the S(T) oscillation is the bounded remainder). */
export declare function riemannZeroCountAnalytic(t: number): number;
/**
 * riemannZeroCount — advance the RH probe (unsolvedEngine's fuel): not just "these zeros lie on the
 * line" (clayProbe) but "these are ALL of them below T" — the analytic count N(T) matches the number
 * of localized zeros, a Turing-method-class COMPLETENESS check. Below T = 31 the formula predicts 4 and
 * clayProbe localizes exactly 4 — no zero missed in the interval. DEMARCATION: completeness holds only
 * UP TO T (RH quantifies over all T); clay stays 0 — this strengthens the verification, never closes it.
 */
export declare function riemannZeroCount(): {
    computes: boolean;
    riemannZeroCount: boolean;
    t: number;
    analytic: number;
    localizedBelowT: number;
    claySolvedByThisFold: 0;
    physicalFtlClaim: 0;
    qpuRequired: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "zero/count";
    dualPair: "count/zero";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:zero-count — exit 0 iff the analytic count matches the localized zeros below T. */
export declare function runRiemannZeroCountExit(root?: string, _argv?: readonly string[]): number;
/**
 * riemannZeroScan — advance the RH probe with a GENERAL zero-finder (not hardcoded brackets): scan the
 * critical line for Z(t) sign changes and bisect each, over [2·7, 100]. Localizes the first 29 nontrivial
 * zeros ON the line, and verifies completeness against the analytic count N(T). THE SANDBOX DISCOVERY
 * (2026-07-24): the found count and the ROUNDED main-term N(T) match at T=100 (29=29) but NOT at every T
 * (e.g. T=50: 10 found vs 9.42 main-term) — the gap is S(T), the zero-counting OSCILLATION, computed here
 * as count − N_main, a real bounded quantity, not an error. DEMARCATION: zeros found on the line UP TO
 * T=100 (RH quantifies over all T); S(T) is the honest remainder — the probe advances, never closes.
 */
export declare function riemannZeroScan(): {
    computes: boolean;
    riemannZeroScan: boolean;
    found: number;
    tMax: number;
    sOfT: number;
    firstZeros: number[];
    claySolvedByThisFold: 0;
    physicalFtlClaim: 0;
    qpuRequired: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "zero/scan";
    dualPair: "scan/zero";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** The Riemann critical line IS the fixed axis of the functional-equation involution σ(s)=1−s, and the digit
 *  reflection reflectThroughZero(d)=10−d is the same involution at the digit scale. The reflection axis
 *  (s+σ(s))/2 is the same for every s — the critical line is computed, never the number ½ typed. */
export declare function riemannCriticalLineIsTheInvolutionFixedPoint(): {
    computes: boolean;
    continuousCriticalLine: number;
    digitCritical: number;
    modulus: number;
    zerosOnLine: number;
    facets: ({
        receipt: string;
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:zero-scan — exit 0 iff the general scan localizes the zeros and matches N(T). */
export declare function runRiemannZeroScanExit(root?: string, _argv?: readonly string[]): number;
/**
 * superpositionCompleteness — USER CHALLENGE (2026-07-24): "enforce exactly 432 theorems compute ALL
 * quantum superpositions, or prove me wrong." Honest computation, and it PROVES THE CLAIM WRONG — with
 * respect for what 432 truly is. THREE refutations, each computed:
 *   1. CARDINALITY: a superposition of n qubits is 2^n complex amplitudes; n is UNBOUNDED (no-finiteness
 *      law), and the amplitudes are CONTINUOUS — so the space of superpositions is uncountably infinite.
 *      No FINITE set of theorems (432 or any N) computes ALL of an unbounded continuum: finite ≠ all.
 *   2. INDEPENDENCE: the registry holds 442 theorems, all content-address-DISTINCT (animationFold: 0
 *      collisions) — it is neither AT 432 nor REDUCIBLE to it; 442 = 432 + 10 is real growth.
 *   3. CATEGORY: 432 is the harmonic DIMENSION seal (425+7) and the address-cube CAPACITY (2^18
 *      addresses), NOT a superposition-completeness count — conflating capacity with completeness is the error.
 * VERDICT: the literal claim is FALSE by cardinality. (A weaker "432 as a generating BASIS" is a
 * DIFFERENT, open question — not what "compute all superpositions" states, and not asserted here.) .
 */
export declare function superpositionCompleteness(): {
    computes: boolean;
    superpositionCompleteness: boolean;
    registry: number;
    harmonic: number;
    provenWrong: boolean;
    claySolvedByThisFold: 0;
    physicalFtlClaim: 0;
    qpuRequired: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "superposition/complete";
    dualPair: "complete/superposition";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:superposition-complete — exit 0 iff the completeness claim is disproven by computation. */
export declare function runSuperpositionCompletenessExit(root?: string, _argv?: readonly string[]): number;
export declare const quantum4_6: {
    readonly physics: {
        readonly hawking: typeof hawkingTemperature;
        readonly helmholtz: typeof helmholtzFreeEnergy;
    };
    readonly acoustics: {
        readonly soundPressure: typeof soundPressureLevelDb;
    };
    readonly gates: {
        readonly rcnot: typeof rcnot;
        readonly cycle: typeof cycleAdvance;
    };
    readonly field: {
        readonly f2Add: typeof f2Add;
        readonly f2Mul: typeof f2Mul;
        readonly f2Closes: typeof f2FieldCloses;
    };
    readonly theorems: {
        readonly discoveredWaves: readonly [typeof discoveredTheoremsWaveFiftyOne, typeof discoveredTheoremsWaveFiftyThree, typeof discoveredTheoremsWaveFiftyFour];
    };
};
