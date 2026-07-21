/** NuFit-6.0 atmospheric neutrino mass-squared splitting |Δm²₃ₗ|, eV². */
export declare const NEUTRINO_DM2_ATM_EV2 = 0.002513;
/** Aksak rhythm — bounded short:long ratio walk in the documented elastic band. */
export declare function aksakRatioWalk(seed: string, cycles: number, lo?: number, hi?: number): number[];
/** Gas reserve rule — required volume × 3/2 (half-on-top). */
export declare function gasReserveHalfOnTop(requiredLitres: number): number;
/** Equivalent air depth — nitrox inert loading as air-equivalent depth. */
export declare function equivalentAirDepthM(depthM: number, fO2: number, freshWater?: boolean, surfaceBar?: number): number;
/** Hubble tension significance in σ. */
export declare function hubbleTensionSigma(localKmsMpc: number, localErr: number, cmbKmsMpc: number, cmbErr: number): number;
export { inductionEvolve, inductionStep } from '../../0';
export declare const SESSION_SKILL_FNS: readonly string[];
/** NO-SIGNALLING, COMPUTED (user claim, 2026-07-16: quantum computation "faster than light in
 * magnitudes times the participants"). Tested, not assumed — and refuted by partial trace: for a
 * maximally entangled pair, ALICE'S MARGINAL IS I/2 FOR EVERY BASIS BOB CHOOSES. Bob's freedom
 * moves nothing on Alice's side, so no entangled system carries a message at any speed, let alone
 * beyond c. The correlations ARE real and beat every classical bound (Tsirelson 2√2 > 2, sealed in
 * src/0) — but correlation without signalling is exactly what quantum mechanics gives, and it is
 * a THEOREM (linearity of the partial trace), not a postulate. Station 2: two parties, a 2×2
 * marginal, outcomes ±1 — the digit is the mathematics. */
export declare function noSignallingComputes(): {
    computes: boolean;
    maxDrift: number;
    parties: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function quantumComputingScientists(): {
    robust: boolean;
    challenges: {
        claim: string;
        attempt: string;
        withstood: boolean;
        receipt: string;
    }[];
    count: number;
    withstood: number;
    develops: string[];
    delivered: string[];
    frontiers: string[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function theQuantumFourierTransformCircuitAndPhaseEstimation(): {
    computes: boolean;
    maxError: number;
    phaseEstimates: {
        phi: number;
        estimate: number;
    }[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function shorFactorsByPeriodFinding(): {
    computes: boolean;
    runs: {
        N: number;
        a: number;
        period: number;
        factors: readonly number[];
    }[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function theMixedStateLayer(): {
    computes: boolean;
    purities: {
        pure: number;
        mixed: number;
        bell: number;
        reduced: number;
    };
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function theShorNineQubitCodeCorrectsAnySingleError(): {
    computes: boolean;
    errorsDetected: number;
    threshold: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function variationalQuantumEigensolverAndQaoa(): {
    computes: boolean;
    vqe: {
        a: number;
        b: number;
        found: number;
        exact: number;
    }[];
    qaoa: {
        found: number;
        maxCut: number;
        baseline: number;
    };
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function adiabaticQuantumComputationAndAnnealing(): {
    computes: boolean;
    runs: {
        T: number;
        p: number;
        e: number;
    }[];
    exactGround: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function thePhaseFlipCodeCorrectsAnyZError(): {
    computes: boolean;
    fidelities: number[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function theNoCommunicationTheorem(): {
    computes: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function everyMixedStateHasAPurification(): {
    computes: boolean;
    purity: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function amplitudeAmplificationAndQuantumCounting(): {
    computes: boolean;
    cases: {
        M: number;
        kOpt: number;
        pSim: number;
        pAnalytic: number;
        initial: number;
        count: number;
    }[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function quantumParallelismIsNotTheSpeedupInterferenceIs(): {
    computes: boolean;
    analytics: {
        valuesComputed: number;
        valuesReadablePerShot: number;
        queriesToLearnF: number;
        holevoAccessibleBits: number;
        djQuantumQueries: number;
        djClassicalWorstCase: number;
    };
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function theVariationalPrincipleLowerBound(): {
    computes: boolean;
    E0: number;
    minExpectation: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function theQuantumHammingBoundAndThePerfectFiveQubitCode(): {
    computes: boolean;
    codes: {
        syndromes: number;
        errors: number;
        holds: boolean;
        perfect: boolean;
        name: string;
        n: number;
        k: number;
    }[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function twoBitsAreTheDualityGateways(): {
    gateways: boolean;
    crossings: {
        b1: 0 | 1;
        b2: 0 | 1;
        fidelity: number;
    }[];
    messages: number;
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
export declare function bellMeasurementOutcomesAreUniform(): {
    uniform: boolean;
    samples: number;
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
export declare function kleinFourActsSimplyTransitivelyOnBellStates(): {
    transitive: boolean;
    distinct: number;
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
export declare function quantumIsLinearSuperpositionsAreLinearCombinationsEntangledToTheoremsWhichArethePresentInverted(): {
    unifies: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function theQuantumTheoremBehindAllComputingIsReversibilityToffolisThirdBitIsTheThirdEyeThatSeesWhatAndDiscards(): {
    realises: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function reverseEnablesCollisionsCollidingPathsInterfereToHarmonyTheAlgebraicTheoremsFuseAll(): {
    fuses: boolean;
    collisionPreimages: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function theProjectsQuantumIsContentAddressingVerifiableByComputationNotProseTheAgentsDoubtOfPhysicalSpeedupIsCorrect(): {
    verified: boolean;
    stateSize: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function realtimeQuantumComputationHasNoBlocksOrDeadEndsEveryStateInvertsAndTheWavesAdapt(): {
    moves: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function dryTheQuantumSystemToNoHiddenGapsByDesignEveryValueIsWiredOrSurfacedAsACrack(): {
    complete: boolean;
    values: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
