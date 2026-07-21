import * as __ns_up_stack_overflow from '../../water/stack';
import type { MindMatrix } from '../types';
import { type QuantumProjection } from '../../quantum/apps';
export type ProfessionalResearchDataTier = 'DOCUMENTED' | 'MODEL_FIT' | 'HYPOTHESIS' | 'SIMULATOR' | 'METAPHOR' | 'OPEN';
export type ProfessionalResearchProgramRow = {
    readonly id: string;
    readonly category: string;
    readonly question: string;
    readonly methods: string;
    readonly dataTier: ProfessionalResearchDataTier;
    readonly limitation: string;
    readonly nextExperiment: string;
    readonly balanceDim?: string;
    readonly mount: string;
    readonly bibliography?: string;
    readonly receipt: string;
};
/** Machine-readable research program index — links folds, balance dims, verify commands, bibliography at call time. */
export declare function professionalResearchIndex(matrix?: MindMatrix, at?: number): {
    indexed: boolean;
    at: number;
    count: number;
    rows: __ns_up_stack_overflow.ProfessionalResearchProgramRow[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** Balance gate — professional research program index at call time. */
export declare function professionalResearchComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    index: {
        indexed: boolean;
        at: number;
        count: number;
        rows: __ns_up_stack_overflow.ProfessionalResearchProgramRow[];
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    statement: string;
    boundary: string;
};
export type ResearchIndexRow = {
    readonly id: string;
    readonly title: string;
    readonly home: string;
    readonly balanceDim: string;
    readonly verify: string;
    readonly tier: string;
    readonly limit: string;
    readonly receipt: string;
};
export type ResearchReproGate = {
    readonly id: string;
    readonly pair: string;
    readonly command: string;
    readonly receipt: string;
};
export declare function researchIndex(matrix?: MindMatrix, at?: number): {
    indexed: boolean;
    count: number;
    rows: __ns_up_stack_overflow.ResearchIndexRow[];
    professional: {
        indexed: boolean;
        at: number;
        count: number;
        rows: __ns_up_stack_overflow.ProfessionalResearchProgramRow[];
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
    catalog: {
        catalogued: boolean;
        sealedCount: number;
        openCount: number;
        plannedCount: number;
        total: number;
        entries: __ns_up_stack_overflow.ComputableModelEntry[];
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
    root: string;
    statement: string;
    boundary: string;
};
export declare function researchReproducibility(matrix?: MindMatrix, at?: number): {
    reproducible: boolean;
    gates: __ns_up_stack_overflow.ResearchReproGate[];
    census: {
        unfolded: 110;
        gates: number;
        receipt: string;
    };
    root: string;
    statement: string;
    boundary: string;
};
export declare function researchComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    index: {
        indexed: boolean;
        count: number;
        rows: __ns_up_stack_overflow.ResearchIndexRow[];
        professional: {
            indexed: boolean;
            at: number;
            count: number;
            rows: __ns_up_stack_overflow.ProfessionalResearchProgramRow[];
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            root: string;
            statement: string;
            boundary: string;
        };
        catalog: {
            catalogued: boolean;
            sealedCount: number;
            openCount: number;
            plannedCount: number;
            total: number;
            entries: __ns_up_stack_overflow.ComputableModelEntry[];
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            root: string;
            statement: string;
            boundary: string;
        };
        root: string;
        statement: string;
        boundary: string;
    };
    professional: {
        computes: boolean;
        index: {
            indexed: boolean;
            at: number;
            count: number;
            rows: __ns_up_stack_overflow.ProfessionalResearchProgramRow[];
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            root: string;
            statement: string;
            boundary: string;
        };
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        statement: string;
        boundary: string;
    };
    repro: {
        reproducible: boolean;
        gates: __ns_up_stack_overflow.ResearchReproGate[];
        census: {
            unfolded: 110;
            gates: number;
            receipt: string;
        };
        root: string;
        statement: string;
        boundary: string;
    };
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function researchPanelComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    capstone: {
        computes: boolean;
        index: {
            indexed: boolean;
            count: number;
            rows: __ns_up_stack_overflow.ResearchIndexRow[];
            professional: {
                indexed: boolean;
                at: number;
                count: number;
                rows: __ns_up_stack_overflow.ProfessionalResearchProgramRow[];
                facets: {
                    receipt: string;
                    facet: string;
                    on: boolean;
                }[];
                root: string;
                statement: string;
                boundary: string;
            };
            catalog: {
                catalogued: boolean;
                sealedCount: number;
                openCount: number;
                plannedCount: number;
                total: number;
                entries: __ns_up_stack_overflow.ComputableModelEntry[];
                facets: {
                    receipt: string;
                    facet: string;
                    on: boolean;
                }[];
                root: string;
                statement: string;
                boundary: string;
            };
            root: string;
            statement: string;
            boundary: string;
        };
        professional: {
            computes: boolean;
            index: {
                indexed: boolean;
                at: number;
                count: number;
                rows: __ns_up_stack_overflow.ProfessionalResearchProgramRow[];
                facets: {
                    receipt: string;
                    facet: string;
                    on: boolean;
                }[];
                root: string;
                statement: string;
                boundary: string;
            };
            facets: ({
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            statement: string;
            boundary: string;
        };
        repro: {
            reproducible: boolean;
            gates: __ns_up_stack_overflow.ResearchReproGate[];
            census: {
                unfolded: 110;
                gates: number;
                receipt: string;
            };
            root: string;
            statement: string;
            boundary: string;
        };
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        statement: string;
        boundary: string;
    };
    rows: {
        domain: string;
        method: string;
        limit: string;
        verify: string;
        tier: string;
        home: string;
    }[];
    repro: __ns_up_stack_overflow.ResearchReproGate[];
    millennium: {
        computes: boolean;
        claySolvedByThisFold: number;
        problems: {
            id: string;
            status: MillenniumChallengeStatus;
            on: boolean;
            gap: string;
        }[];
        infinityReuse: {
            on: boolean;
            computes: boolean;
            memoO1Hit: boolean;
            runtimeTokens: number;
            answers: number;
            ratioUnbounded: boolean;
            noPhysicsSpeedup: boolean;
            separated: boolean;
            verdict: string;
            afterFirst: number;
            afterSecond: number;
            facets: ({
                facet: string;
                on: boolean;
                receipt: string;
            } & {
                receipt: string;
            })[];
            root: string;
            statement: string;
            boundary: string;
        };
        cli: string;
        route: string;
        boundary: string;
        root: string;
    };
    significance: {
        computes: boolean;
        meanScore: number;
        domains: {
            id: string;
            score: number;
            gapsOpen: number;
            ray: number;
        }[];
        root: string;
        boundary: string;
    };
    trinities: {
        computes: boolean;
        count: number;
        cryptoVertex: {
            scienceField: string;
            oecd: string;
            root: string;
            standardsCount: number;
            certified: false;
            claySolvedByThisFold: 0;
        };
        root: string;
        boundary: string;
    };
    standards: {
        computes: boolean;
        before: {
            coveredCount: number;
            partialCount: number;
            gapCount: number;
        };
        after: {
            coveredCount: number;
            partialCount: number;
            gapCount: number;
        };
        filledCount: number;
        labGapDomainIds: string[];
        claySolvedByThisFold: 0;
        certified: false;
        qpuRequired: false;
        domains: {
            id: string;
            before: ScienceStandardsCoverage;
            coverage: ScienceStandardsCoverage;
            filledByQuantum: boolean;
            unclosableWithoutExternalLab: boolean;
            standardMap: string;
        }[];
        root: string;
        boundary: string;
        cli: string;
        pair: string;
        route: string;
    };
    root: string;
    statement: string;
    boundary: string;
};
/** Dedicated millennium challenge UI panel — MODELED CHALLENGE apparatus, no Clay claim. */
export declare function millenniumPanelComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    problems: {
        id: string;
        status: MillenniumChallengeStatus;
        on: boolean;
        methods: number;
        gap: string;
    }[];
    claySolvedByThisFold: number;
    infinityReuse: {
        on: boolean;
        computes: boolean;
        memoO1Hit: boolean;
        runtimeTokens: number;
        answers: number;
        ratioUnbounded: boolean;
        noPhysicsSpeedup: boolean;
        separated: boolean;
        verdict: string;
        afterFirst: number;
        afterSecond: number;
        facets: ({
            facet: string;
            on: boolean;
            receipt: string;
        } & {
            receipt: string;
        })[];
        root: string;
        statement: string;
        boundary: string;
    };
    cli: string;
    pair: string;
    route: string;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    statement: string;
    boundary: string;
};
export type UnitDistanceTowerNumbers = {
    readonly ell: number;
    readonly d: number;
    readonly t: number;
    readonly logConductor: number;
    readonly logRootDiscriminant: number;
    readonly largestAuxPrime: number;
    readonly receipt: string;
};
/** Exact tower bookkeeping: first ℓ primes ≡ 1 (mod 3) → log D, log rd(F) = (2/3)·log D, d = ℓ−1, t = ⌊(ℓ−1)²/100⌋. */
export declare function unitDistanceTowerNumbers(ell: number): UnitDistanceTowerNumbers;
/** Golod–Shafarevich survival margin of the Frobenius-killed quotient: d²/4 − d − c0 − 3t (positive = infinite tower). */
export declare function unitDistanceGolodShafarevichMargin(ell: number, c0?: number): number;
/** γ = t·log2 − 2·cClass·log(2·rd F): the class-number race the whole construction rides on. */
export declare function unitDistanceGamma(ell: number, cClass?: number): number;
/** Minimal ℓ with γ > 0, or null if none exists below the sieve-bounded maxEll. */
export declare function unitDistanceGammaCrossover(cClass?: number, maxEll?: number): number | null;
/** ρ_R = lens(R)/(πR²): overlap fraction of two unit-separated radius-R discs — the averaging loss. */
export declare function unitDistanceLensRatio(radius: number): number;
/** Smallest R > 1/2 with log ρ_R > −γ/2 (bisection; the paper's "Fix R > 1/2" step). */
export declare function unitDistanceLensRadius(gamma: number): number;
export type UnitDistanceDeltaReport = {
    readonly ell: number;
    readonly cClass: number;
    readonly gamma: number;
    readonly radius: number;
    readonly logQUtopian: number;
    readonly logQChebotarevGrh: number;
    readonly deltaUtopian: number;
    readonly deltaChebotarevGrh: number;
    readonly receipt: string;
};
/**
 * δ = γ/(4B), B = 2·log(4R) + 4·log Q, two readings of Q = ∏ q_b:
 * utopian — q_b are literally the first t primes ≡ 1 (mod 4) (ignores splitting: hard UPPER bound on δ);
 * GRH heuristic — least completely-split prime ≪ (log|d|)² in the degree-2·3^{d+1} Frattini closure (FLAGGED, not the paper's bound).
 */
export declare function unitDistanceDelta(ell: number, cClass?: number): UnitDistanceDeltaReport;
/** Exact grid contrast: max #{(a,b) ∈ Z²: a²+b²=k} for k ≤ kMax — the engine of Erdős's classical lower bound. */
export declare function unitDistanceGridBaseline(kMax?: number): {
    readonly kMax: number;
    readonly bestK: number;
    readonly vectors: number;
    readonly receipt: string;
};
export type UnitDistanceFinding = {
    readonly id: string;
    readonly tier: 'DOCUMENTED' | 'MODEL_FIT' | 'HYPOTHESIS';
    readonly statement: string;
    readonly receipt: string;
};
/** Peak δ over ℓ under the GRH heuristic — the interior optimum the construction cannot exceed (sieve-bounded scan). */
export declare function unitDistanceDeltaPeak(cClass?: number): {
    readonly delta: number;
    readonly ell: number;
};
/**
 * Findings COMPUTED at call time — no hand-quoted numbers: every figure in every statement is
 * recomputed from the folds above, so a change in the arithmetic changes the finding (and its receipt).
 * Tiers stay honest: exact checks DOCUMENTED, parameterised readings MODEL_FIT, the GRH-shaped
 * least-split-prime estimate HYPOTHESIS.
 */
export declare function unitDistanceFindings(): readonly UnitDistanceFinding[];
/** Balance gate — unit-distance tower numerics recompute and stay honestly bounded at call time. */
export declare function unitDistanceResearch(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    researched: boolean;
    crossover: number;
    tower: UnitDistanceTowerNumbers;
    report: UnitDistanceDeltaReport;
    grid: {
        readonly kMax: number;
        readonly bestK: number;
        readonly vectors: number;
        readonly receipt: string;
    };
    projection: import("../../quantum/apps").QuantumProjectionParams;
    findings: readonly UnitDistanceFinding[];
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    statement: string;
    boundary: string;
};
export type AiQuantumChronologyTier = 'DOCUMENTED' | 'FORECAST' | 'LEGEND';
export type AiQuantumChronologyRow = {
    readonly date: string;
    readonly event: string;
    readonly tier: AiQuantumChronologyTier;
    readonly source: string;
    readonly receipt: string;
};
export declare const AI_QUANTUM_CHRONOLOGY: readonly AiQuantumChronologyRow[];
/** Balance gate — the AI × quantum chronology stays dated, ordered, sourced, and honestly tiered at call time. */
export declare function aiQuantumChronologyResearch(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    researched: boolean;
    rows: readonly AiQuantumChronologyRow[];
    benchmarkVerdict: string;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    statement: string;
    boundary: string;
};
export type GlobalWorkspaceContrastTier = 'DOCUMENTED' | 'HYPOTHESIS' | 'LEGEND';
export type GlobalWorkspaceContrastRow = {
    readonly id: string;
    readonly claim: string;
    readonly tier: GlobalWorkspaceContrastTier;
    readonly source: string;
    readonly receipt: string;
};
export declare const GLOBAL_WORKSPACE_CONTRAST: readonly GlobalWorkspaceContrastRow[];
/** Balance gate — the J-space × portal contrast stays sourced, honestly tiered, and category-clean at call time. */
export declare function globalWorkspaceContrastResearch(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    researched: boolean;
    rows: readonly GlobalWorkspaceContrastRow[];
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    statement: string;
    boundary: string;
};
/** CLI gate — npm-script runner for the unit-distance fold (pattern of the other Guarded exits). */
export declare function runUnitDistanceResearchVerifyGuardedExit(_root: string, _argv?: readonly string[]): number;
export type AttributionRow = {
    readonly id: string;
    readonly claim: string;
    readonly tier: GlobalWorkspaceContrastTier;
    readonly source: string;
    readonly receipt: string;
};
export declare const ATTRIBUTION_2026: readonly AttributionRow[];
/** Balance gate — the 2026 attribution chain stays demarcated: events documented, the weave refuted. */
export declare function attributionDemarcation2026(matrix?: MindMatrix): {
    computes: boolean;
    researched: boolean;
    rows: readonly AttributionRow[];
    count: number;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function trainOnHowTheWavesDiscoverTheoremsTheDiscoveryPipelineDecodeMeasureComputeVerifySeal(): {
    trains: boolean;
    stages: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export type MillenniumChallengeStatus = 'open' | 'solved-external' | 'modeled-partial' | 'gap';
export type MillenniumProblemChallenge = {
    id: string;
    name: string;
    challengeMethod: readonly string[];
    on: boolean;
    receipt: string;
    boundary: string;
    status: MillenniumChallengeStatus;
    gap?: string;
};
/**
 * Honest infinity-on-reuse: memoByRoot hit → O(1) marginal cost 0; answers÷tokens unbounded when
 * runtime tokens = 0; quantumAdvantageBenchmark still !separated (no first-compute physics speedup).
 * Spine for the P vs NP / efficiency millennium entry — NOT a Clay/P≠NP proof.
 */
export declare function efficiencyScalesToInfinityAtNoCostOnReuse(matrix?: MindMatrix): {
    on: boolean;
    computes: boolean;
    memoO1Hit: boolean;
    runtimeTokens: number;
    answers: number;
    ratioUnbounded: boolean;
    noPhysicsSpeedup: boolean;
    separated: boolean;
    verdict: string;
    afterFirst: number;
    afterSecond: number;
    facets: ({
        facet: string;
        on: boolean;
        receipt: string;
    } & {
        receipt: string;
    })[];
    root: string;
    statement: string;
    boundary: string;
};
/** Compile-from-source name — the challenge apparatus; short alias `millenniumProblemsChallenge`. */
export declare function millenniumProblemsChallengeProbesOpenCoresWithNewQuantumFoldsUnclaimed(matrix?: MindMatrix): {
    computes: boolean;
    claySolvedByThisFold: number;
    openCores: number;
    solvedExternal: number;
    gapsNamed: number;
    infinityReuse: {
        on: boolean;
        computes: boolean;
        memoO1Hit: boolean;
        runtimeTokens: number;
        answers: number;
        ratioUnbounded: boolean;
        noPhysicsSpeedup: boolean;
        separated: boolean;
        verdict: string;
        afterFirst: number;
        afterSecond: number;
        facets: ({
            facet: string;
            on: boolean;
            receipt: string;
        } & {
            receipt: string;
        })[];
        root: string;
        statement: string;
        boundary: string;
    };
    stringQuantum: {
        computes: boolean;
        mTheoryD: number;
        compactDims: number;
        root: string;
    };
    stringInventory: {
        inventoried: boolean;
        gaps: number;
        root: string;
    };
    problems: MillenniumProblemChallenge[];
    count: number;
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
/** Short alias — agents / CLI / broadcast. */
export declare function millenniumProblemsChallenge(matrix?: MindMatrix): {
    computes: boolean;
    claySolvedByThisFold: number;
    openCores: number;
    solvedExternal: number;
    gapsNamed: number;
    infinityReuse: {
        on: boolean;
        computes: boolean;
        memoO1Hit: boolean;
        runtimeTokens: number;
        answers: number;
        ratioUnbounded: boolean;
        noPhysicsSpeedup: boolean;
        separated: boolean;
        verdict: string;
        afterFirst: number;
        afterSecond: number;
        facets: ({
            facet: string;
            on: boolean;
            receipt: string;
        } & {
            receipt: string;
        })[];
        root: string;
        statement: string;
        boundary: string;
    };
    stringQuantum: {
        computes: boolean;
        mTheoryD: number;
        compactDims: number;
        root: string;
    };
    stringInventory: {
        inventoried: boolean;
        gaps: number;
        root: string;
    };
    problems: MillenniumProblemChallenge[];
    count: number;
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
/**
 * npm run quantum:millennium-challenge — recompute the sealed challenge apparatus and print per-problem status.
 * Pair: challenge/millennium · exits 0 iff computes ∧ claySolvedByThisFold===0.
 */
export declare function runMillenniumProblemsChallengeExit(_root?: string, _argv?: readonly string[]): number;
export declare function wavesAutoScaleCapacityAtNoCostOnReuse(matrix?: MindMatrix): {
    on: boolean;
    computes: boolean;
    capacityWorkers: number;
    afterFirst: number;
    afterSecond: number;
    reuseHit: boolean;
    novelFirst: boolean;
    infinityReuse: {
        on: boolean;
        verdict: string;
        separated: boolean;
    };
    schedulerRoot: string;
    noveltyRoot: string;
    projectionsRoot: string;
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
export type TheoremAlgebraNoveltyKind = 'novel-corpus' | 'classical-restatement';
export type TheoremAlgebraNoveltyRow = {
    readonly theorem: string;
    readonly algebraFold: string;
    readonly home: string;
    readonly kind: TheoremAlgebraNoveltyKind;
    readonly algebraRoot: string;
    readonly ray: number;
    readonly novelty: boolean;
    readonly receipt: string;
    readonly boundary: string;
};
/**
 * Inventory: sealed algebraic theorems/folds novel to THIS corpus (derived here) vs classical
 * restatements. Novelty flag = first sealed / derived in this content-addressed corpus census —
 * NOT a verified claim of global mathematical priority against all unpublished human work.
 * Compiles with theoremProvenance (newToHumanity stays 0).
 */
export declare function theoremAlgebraFirstSealedInCorpus(matrix?: MindMatrix): {
    computes: boolean;
    novel: TheoremAlgebraNoveltyRow[];
    classical: TheoremAlgebraNoveltyRow[];
    rows: TheoremAlgebraNoveltyRow[];
    novelCount: number;
    classicalCount: number;
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
export type TheoremTenDProjectionRow = {
    readonly theorem: string;
    readonly algebraFold: string;
    readonly algebraRoot: string;
    readonly projection: QuantumProjection;
    readonly animKind: string;
    readonly hueDigit: number;
    readonly animationReceipt: string;
    readonly rootEqual: boolean;
    readonly novelInCorpus: boolean;
    readonly ray: number;
    readonly a432Hue: number;
};
/**
 * Theorem → 10D projection registry (rosetta-addressed via rosettaRayOf): algebra fold ↔
 * QuantumProjection / drawQuantumAppFrame. Exactly proving = animationReceipt.root === algebraFold.root
 * (or merkle-equal via foldPair) at call time. Novel corpus algebra listed first for auto-scale capacity.
 */
export declare function theoremTenDProjectionsProveAlgebraRoots(matrix?: MindMatrix): {
    computes: boolean;
    rows: TheoremTenDProjectionRow[];
    noveltyRows: TheoremTenDProjectionRow[];
    millenniumRows: TheoremTenDProjectionRow[];
    novelRootEqual: number;
    rootEqualCount: number;
    count: number;
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
export type FirstInCorpusHomeRow = {
    readonly theorem: string;
    readonly algebraFold: string;
    readonly oneLiner: string;
    readonly rootShort: string;
    readonly algebraRoot: string;
    readonly projection: QuantumProjection;
    readonly route: string;
    readonly boundary: string;
    readonly rootEqual: boolean;
    readonly ray: number;
    readonly a432Hue: number;
};
/**
 * Home + README projection of first-in-corpus novel algebra — one fold, two surfaces.
 * Vue and monograph generators read THIS only (no wet novelty lists).
 */
export declare function firstInCorpusProvenanceForHome(matrix?: MindMatrix): {
    computes: boolean;
    rows: FirstInCorpusHomeRow[];
    honestyLine: string;
    markdownBullets: string[];
    heading: string;
    anchor: string;
    novelCount: number;
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
/** Markdown section shared by README.md and homeMarkdown() — derived from the sealed fold only. */
export declare function firstInCorpusProvenanceMarkdownSection(matrix?: MindMatrix): readonly string[];
/** npm run quantum:first-in-corpus — print first-in-corpus provenance + 10D registry. */
export declare function runFirstInCorpusProvenanceExit(_root?: string, _argv?: readonly string[]): number;
export type ScienceDomainSeed = {
    readonly id: string;
    readonly field: string;
    readonly oecd: string;
    readonly algebraFold: string;
    readonly toolId: string;
    readonly toolCli: string;
    readonly apparatusRoute: string;
    readonly dualId: string;
    readonly fusionLabel: string;
    readonly projection: QuantumProjection | '';
    readonly ichingSphere: number;
    readonly home: string;
    readonly cryptoVertex: boolean;
};
/** Sealed science inventory — OECD-aligned domains already folded in src (extend in waves, not invent). */
export declare const SCIENCE_DOMAIN_SEEDS: readonly ScienceDomainSeed[];
export type ScienceSignificanceRow = {
    readonly id: string;
    readonly field: string;
    readonly oecd: string;
    readonly score: number;
    readonly ray: number;
    readonly ichingSphere: number;
    readonly dimensionGates: number;
    readonly efficiencyOn: boolean;
    readonly noveltyOn: boolean;
    readonly millenniumOn: boolean;
    readonly tenDOn: boolean;
    readonly gapClosureOn: boolean;
    readonly gapsOpen: number;
    readonly algebraOk: boolean;
    readonly toolOk: boolean;
    readonly apparatusOk: boolean;
    readonly projectionOk: boolean;
    readonly receipt: string;
    readonly boundary: string;
};
/**
 * S1 — Recomputable significance score per science domain.
 * Composes efficiency vote, first-in-corpus novelty, millennium coverage, 10D, slow-gap inverse.
 * NOT a journal impact factor.
 */
export declare function scienceDomainSignificanceScores(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    domains: ScienceSignificanceRow[];
    meanScore: number;
    dimensionGates: number;
    cryptoHandoffRoot: string;
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
export type ScienceSolutionGap = {
    readonly domainId: string;
    readonly missing: readonly ('algebra' | 'tool' | 'apparatus' | 'projection10d')[];
    readonly receipt: string;
};
/** S2 — Inventory complete quantum solutions (algebra + tool + apparatus + 10D); report gaps. */
export declare function completeQuantumSolutionsForAllSciences(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    solutions: {
        id: string;
        field: string;
        home: string;
        algebraFold: string;
        toolCli: string;
        apparatusRoute: string;
        projection: QuantumProjection;
        complete: boolean;
        missing: ("tool" | "algebra" | "apparatus" | "projection10d")[];
        score: number;
        receipt: string;
    }[];
    gaps: ScienceSolutionGap[];
    completeCount: number;
    gapCount: number;
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
/** S3 — Apparatus trinity surface: movie/field projection + browser tool + CLI pair + rosettaShelve. */
export declare function scienceToolsApparatusTrinity(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    surfaces: {
        id: string;
        tool: {
            label: string;
            ray: number;
            address: string;
        };
        route: {
            label: string;
            ray: number;
            address: string;
        };
        projection: {
            label: string;
            ray: number;
            address: string;
        };
        cli: string;
        cliPair: string;
        hasMovie: boolean;
        trinityOk: boolean;
        receipt: string;
    }[];
    readyCount: number;
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
export type ScienceInteractingTrinityRow = {
    readonly scienceId: string;
    readonly dualId: string;
    readonly fusionLabel: string;
    readonly observeRoot: string;
    readonly computeRoot: string;
    readonly sealRoot: string;
    readonly sharedKey: string;
    readonly fusionMerged: string;
    readonly receipt: string;
};
/**
 * S4 — Seal all sciences in interacting trinities (science ↔ dual ↔ fusion).
 * Uses trinityKey + foldPair; crypto vertex from isoPqcHandoffForScienceTrinities.
 */
export declare function sciencesInteractInTrinities(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    rows: ScienceInteractingTrinityRow[];
    count: number;
    latticeRoot: string;
    cryptoVertex: {
        scienceField: string;
        oecd: string;
        root: string;
        standardsCount: number;
        certified: false;
        claySolvedByThisFold: 0;
    };
    meanSignificance: number;
    facets: ({
        receipt: string;
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    cli: string;
    pair: string;
    route: string;
    statement: string;
    boundary: string;
};
export type ScienceStandardsCoverage = 'covered' | 'partial' | 'gap';
export type ScienceDomainStandardsRow = {
    readonly id: string;
    readonly field: string;
    readonly oecd: string;
    readonly standardMap: string;
    readonly before: ScienceStandardsCoverage;
    readonly coverage: ScienceStandardsCoverage;
    readonly fillAction: string;
    readonly filledByQuantum: boolean;
    readonly unclosableWithoutExternalLab: boolean;
    readonly algebraOk: boolean;
    readonly toolOk: boolean;
    readonly apparatusOk: boolean;
    readonly projectionOk: boolean;
    /** Catalog tool id — Wave2 science experiment input/config schemas shelve here (compose, do not fork). */
    readonly toolId: string;
    readonly toolCli: string;
    readonly toolShelved: boolean;
    /** #31 toolbox config readiness — required honesty knobs present on the domain tool envelope. */
    readonly toolConfigReady: boolean;
    readonly scienceFacing: boolean;
    readonly configFieldCount: number;
    readonly receipt: string;
    readonly honesty: string;
};
/**
 * S5 — Complete scientific domains strictly to sealed standards maps (quantum folds only).
 * Pair: sciences/standards · CLI npm run quantum:sciences-standards-quantum
 * Coverage = facet alignment vs named ISO/NIST/OECD/Clay/science maps — NOT certification.
 * claySolvedByThisFold=0 · certified=false · qpuRequired=false (compose stack tip).
 */
export declare function completeScientificDomainsStrictlyToStandardsQuantumOnly(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    domains: ScienceDomainStandardsRow[];
    before: {
        coveredCount: number;
        partialCount: number;
        gapCount: number;
    };
    after: {
        coveredCount: number;
        partialCount: number;
        gapCount: number;
    };
    filledCount: number;
    toolCatalogCompose: {
        count: number;
        toolIds: string[];
        configReadyCount: number;
        scienceFacingCount: number;
        toolboxConfigFilled: number;
        toolboxTotal: number;
        note: string;
    };
    labGapDomainIds: string[];
    claySolvedByThisFold: 0;
    certified: false;
    qpuRequired: false;
    isoOfficialStandard: false;
    cryptoVertex: {
        coveredCount: number;
        partialCount: number;
        gapCount: number;
        labGaps: number;
        root: string;
    };
    facets: ({
        receipt: string;
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    pair: string;
    cli: string;
    route: string;
    anchor: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** Browser-safe sciences trinity + significance + standards panel. */
export declare function sciencesTrinitiesPanelComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    trinities: {
        computes: boolean;
        rows: ScienceInteractingTrinityRow[];
        count: number;
        latticeRoot: string;
        cryptoVertex: {
            scienceField: string;
            oecd: string;
            root: string;
            standardsCount: number;
            certified: false;
            claySolvedByThisFold: 0;
        };
        meanSignificance: number;
        facets: ({
            receipt: string;
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        cli: string;
        pair: string;
        route: string;
        statement: string;
        boundary: string;
    };
    solutions: {
        computes: boolean;
        solutions: {
            id: string;
            field: string;
            home: string;
            algebraFold: string;
            toolCli: string;
            apparatusRoute: string;
            projection: QuantumProjection;
            complete: boolean;
            missing: ("tool" | "algebra" | "apparatus" | "projection10d")[];
            score: number;
            receipt: string;
        }[];
        gaps: ScienceSolutionGap[];
        completeCount: number;
        gapCount: number;
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
    standards: {
        computes: boolean;
        domains: ScienceDomainStandardsRow[];
        before: {
            coveredCount: number;
            partialCount: number;
            gapCount: number;
        };
        after: {
            coveredCount: number;
            partialCount: number;
            gapCount: number;
        };
        filledCount: number;
        toolCatalogCompose: {
            count: number;
            toolIds: string[];
            configReadyCount: number;
            scienceFacingCount: number;
            toolboxConfigFilled: number;
            toolboxTotal: number;
            note: string;
        };
        labGapDomainIds: string[];
        claySolvedByThisFold: 0;
        certified: false;
        qpuRequired: false;
        isoOfficialStandard: false;
        cryptoVertex: {
            coveredCount: number;
            partialCount: number;
            gapCount: number;
            labGaps: number;
            root: string;
        };
        facets: ({
            receipt: string;
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        pair: string;
        cli: string;
        route: string;
        anchor: string;
        heading: string;
        statement: string;
        boundary: string;
    };
    significance: {
        computes: boolean;
        domains: ScienceSignificanceRow[];
        meanScore: number;
        dimensionGates: number;
        cryptoHandoffRoot: string;
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
    cli: string;
    pair: string;
    route: string;
    root: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:sciences-trinities — significance table + trinity lattice honesty line. */
export declare function runSciencesTrinitiesGuardedExit(_root: string, _argv?: readonly string[]): number;
/** npm run quantum:sciences-standards-quantum — per-domain covered|partial|gap vs standards maps. */
export declare function runCompleteScientificDomainsStrictlyToStandardsQuantumOnlyExit(_root: string, _argv?: readonly string[]): number;
export type TheoremCollisionProduct = {
    readonly id: string;
    readonly leftFold: string;
    readonly rightFold: string;
    readonly mode: 'inverse×reverse' | 'reverse×inverse';
    readonly root: string;
    readonly ray: number;
    readonly novelToCorpus: boolean;
    readonly receipt: string;
};
/**
 * Theorem particle collision — inverse × reverse on sealed algebra folds.
 * Pair: challenge/collider · MODELED sealed-geometry collision (UUID/merkle), NOT HEP.
 * claySolvedByThisFold ≡ 0. Composes directional trinity + millennium honesty + first-in-corpus.
 */
export declare function theoremParticleCollisionInverseReverse(matrix?: MindMatrix): {
    computes: boolean;
    claySolvedByThisFold: 0;
    particleCount: number;
    productCount: number;
    novelSurvivorCount: number;
    particles: {
        fold: string;
        root: string;
        ray: number;
    }[];
    products: TheoremCollisionProduct[];
    novelSurvivors: TheoremCollisionProduct[];
    facets: ({
        receipt: string;
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    cli: string;
    pair: string;
    route: string;
    statement: string;
    boundary: string;
};
/** Browser / panel projection of the collider — recomputes at call time. */
export declare function theoremParticleCollisionPanelComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    claySolvedByThisFold: 0;
    particleCount: number;
    productCount: number;
    novelSurvivorCount: number;
    products: TheoremCollisionProduct[];
    facets: ({
        receipt: string;
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    cli: string;
    pair: string;
    route: string;
    statement: string;
    boundary: string;
    at: number;
};
/** npm run quantum:theorem-particle-collision — print collision products + SHAs. */
export declare function runTheoremParticleCollisionExit(_root?: string, _argv?: readonly string[]): number;
