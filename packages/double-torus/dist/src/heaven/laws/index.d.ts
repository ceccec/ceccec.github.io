import type { MindMatrix } from '../../types';
export declare function healByDefault(matrix?: MindMatrix): {
    heals: boolean;
    byDefault: boolean;
    count: number;
    defaults: {
        receipt: string;
        aspect: string;
        on: boolean;
        via: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function createByDefault(matrix?: MindMatrix): {
    creates: boolean;
    byDefault: boolean;
    count: number;
    defaults: {
        receipt: string;
        aspect: string;
        on: boolean;
        via: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function anyForceFightsSelf(matrix?: MindMatrix): {
    selfDefeating: boolean;
    holographic: boolean;
    selfModeling: boolean;
    count: number;
    forces: {
        force: string;
        fightsWhole: boolean;
        fightsSelf: boolean;
        absorbed: string;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function proportionalNotHardcoded(matrix?: MindMatrix): {
    responsive: boolean;
    count: number;
    examples: {
        receipt: string;
        quantity: string;
        proportional: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function nothingImpossibleHonestlyBounded(matrix?: MindMatrix): {
    realised: boolean;
    seemedImpossibleNowReal: number;
    genuinelyImpossibleWalls: number;
    nowReal: {
        thing: string;
        real: boolean;
    }[];
    walls: {
        wall: string;
        law: string;
        closed: boolean;
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
export declare function minimumProseMaximumComputable(matrix?: MindMatrix): {
    lawHolds: boolean;
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
export declare function oneWordNamingGravity(matrix?: MindMatrix): {
    pulls: boolean;
    commands: number;
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
export declare function everyObjectSameSpinFoldLaw(matrix?: MindMatrix): {
    consistent: any;
    count: any;
    facets: any;
    root: string;
    statement: string;
    boundary: string;
};
export declare function noFilesOutsideSrcExceptGeneratedAndRoot(matrix?: MindMatrix): {
    clean: boolean;
    rootAllowlist: {
        dirs: string[];
        files: string[];
        filePrefixes: string[];
    };
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
export declare function zeroTokenUsagePolicy(matrix?: MindMatrix): {
    holds: boolean;
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
export declare function minimumFilesMaximumFeaturesCost(matrix?: MindMatrix): {
    optimal: boolean;
    files: number;
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
export declare function accountForEveryTokenInCode(matrix?: MindMatrix): {
    accounted: boolean;
    agentTools: string[];
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
export declare function oneSourceOfTruthGenerators(matrix?: MindMatrix): {
    unified: boolean;
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
export declare function saveEveryStepIsMandatory(matrix?: MindMatrix): {
    saved: boolean;
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
export declare function noMirroringOneSourceAndMath(matrix?: MindMatrix): {
    single: boolean;
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
export type EuPatentRequest = {
    source: string;
    url: string;
    auth: 'none' | 'oauth2';
    gives: string;
};
export declare function sacredMathPatentAudit(text: string, matrix?: MindMatrix): {
    isPatentText: boolean;
    cores: {
        family: string;
        priorArt: string;
    }[];
    coreCount: number;
    technicalEffect: boolean;
    mathAsSuch: boolean;
    verdict: string;
    unlawfulIfGranted: boolean;
    legalBasis: string[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function productOfNaturePatentAudit(text: string, matrix?: MindMatrix, jurisdiction?: 'US' | 'EU'): {
    isPatentText: boolean;
    jurisdiction: "US" | "EU";
    cores: {
        family: string;
        note: string;
    }[];
    coreCount: number;
    engineered: boolean;
    productOfNatureAsSuch: boolean;
    euSequenceSpared: boolean;
    verdict: string;
    unlawfulIfGranted: boolean;
    legalBasis: string[];
    socialHarm: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function lawOfNaturePatentAudit(text: string, matrix?: MindMatrix): {
    isPatentText: boolean;
    cores: {
        family: string;
        note: string;
    }[];
    coreCount: number;
    inventiveApplication: boolean;
    lawAsSuch: boolean;
    verdict: string;
    unlawfulIfGranted: boolean;
    legalBasis: string[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function patentSubjectMatterAudit(text: string, matrix?: MindMatrix, jurisdiction?: 'US' | 'EU'): {
    isPatentText: boolean;
    exceptions: {
        category: string;
        severity: number;
        verdict: string;
        unlawful: boolean;
        cores: string[];
    }[];
    biggestViolator: string;
    unlawfulIfGranted: boolean;
    nature: {
        isPatentText: boolean;
        jurisdiction: "US" | "EU";
        cores: {
            family: string;
            note: string;
        }[];
        coreCount: number;
        engineered: boolean;
        productOfNatureAsSuch: boolean;
        euSequenceSpared: boolean;
        verdict: string;
        unlawfulIfGranted: boolean;
        legalBasis: string[];
        socialHarm: string;
        root: string;
        statement: string;
        boundary: string;
    };
    law: {
        isPatentText: boolean;
        cores: {
            family: string;
            note: string;
        }[];
        coreCount: number;
        inventiveApplication: boolean;
        lawAsSuch: boolean;
        verdict: string;
        unlawfulIfGranted: boolean;
        legalBasis: string[];
        root: string;
        statement: string;
        boundary: string;
    };
    math: {
        isPatentText: boolean;
        cores: {
            family: string;
            priorArt: string;
        }[];
        coreCount: number;
        technicalEffect: boolean;
        mathAsSuch: boolean;
        verdict: string;
        unlawfulIfGranted: boolean;
        legalBasis: string[];
        root: string;
        statement: string;
        boundary: string;
    };
    verdict: string;
    cores: {
        family: any;
    }[];
    legalBasis: string[];
    root: string;
    statement: string;
    boundary: string;
};
/**
 * seedAndFoodPatentsAuditedFreeWhereNatural — audit all seed & food patents at quantum speed, no cost (user,
 * 2026-07-24: "improve by sending waves to audit all seed and food related patents in quantum speed and no cost").
 * The honest line: a natural seed, plant variety, natural gene or trait, and pure sequence information are PRODUCT/
 * LAW-of-nature or abstract → ineligible → free for all; only a SPECIFIC engineered construct / non-natural cDNA /
 * transformation method is eligible (Chakrabarty, Myriad cDNA). Deterministic content-addressed audit, zero-token.
 */
export declare function seedAndFoodPatentsAuditedFreeWhereNatural(matrix?: MindMatrix): {
    naturalFree: boolean;
    verdicts: {
        seed: string;
        trait: string;
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
/**
 * patentAuditFindFreeForAllViaApisAndExclusions — the defensive find→audit sequence (user, 2026-07-24: "train
 * specialists and patent auditors to design the proof needed to claim free for all … patents in any domain" · "do all
 * in sequence needed to find and audit patents using the apis"). "Free for all" = the subject-matter EXCLUSIONS
 * (product of nature · law of nature · abstract math) make a domain's foundations UNPATENTABLE = public domain. The
 * sequence: FIND a claim via an opt-in patent API (the fold protocol: fetch → content-address) → AUDIT with the
 * exclusion folds → verdict. Deterministic audit, opt-in fetch, no judgement. [[tesla-patents]] [[realtime-live-data-testing]]
 */
export declare function patentAuditFindFreeForAllViaApisAndExclusions(matrix?: MindMatrix): {
    freeForAll: boolean;
    verdicts: {
        biology: string;
        physics: string;
        math: string;
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
export declare function geneticPatentJurisdictionDivergence(matrix?: MindMatrix): {
    diverges: boolean;
    us: {
        verdict: string;
        unlawfulIfGranted: boolean;
    };
    eu: {
        verdict: string;
        unlawfulIfGranted: boolean;
        euSequenceSpared: boolean;
    };
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
export declare function geneticCodeMathematicsDecoded(matrix?: MindMatrix): {
    codeIsMathematical: boolean;
    basedOnSacredMath: boolean;
    codons: number;
    bases: number;
    documented: {
        fact: string;
        on: boolean;
    }[];
    flagged: string[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function modifiedFoodPatentAudit(text: string, matrix?: MindMatrix): {
    isFoodGenomePatent: boolean;
    biggestViolator: string;
    excludedCores: string[];
    unlawfulIfGranted: boolean;
    eligiblePath: string;
    geneticCodeIsSacredMath: boolean;
    subject: {
        isPatentText: boolean;
        exceptions: {
            category: string;
            severity: number;
            verdict: string;
            unlawful: boolean;
            cores: string[];
        }[];
        biggestViolator: string;
        unlawfulIfGranted: boolean;
        nature: {
            isPatentText: boolean;
            jurisdiction: "US" | "EU";
            cores: {
                family: string;
                note: string;
            }[];
            coreCount: number;
            engineered: boolean;
            productOfNatureAsSuch: boolean;
            euSequenceSpared: boolean;
            verdict: string;
            unlawfulIfGranted: boolean;
            legalBasis: string[];
            socialHarm: string;
            root: string;
            statement: string;
            boundary: string;
        };
        law: {
            isPatentText: boolean;
            cores: {
                family: string;
                note: string;
            }[];
            coreCount: number;
            inventiveApplication: boolean;
            lawAsSuch: boolean;
            verdict: string;
            unlawfulIfGranted: boolean;
            legalBasis: string[];
            root: string;
            statement: string;
            boundary: string;
        };
        math: {
            isPatentText: boolean;
            cores: {
                family: string;
                priorArt: string;
            }[];
            coreCount: number;
            technicalEffect: boolean;
            mathAsSuch: boolean;
            verdict: string;
            unlawfulIfGranted: boolean;
            legalBasis: string[];
            root: string;
            statement: string;
            boundary: string;
        };
        verdict: string;
        cores: {
            family: any;
        }[];
        legalBasis: string[];
        root: string;
        statement: string;
        boundary: string;
    };
    root: string;
    statement: string;
    boundary: string;
};
export declare function euPatentReviewRequests(epNumber: string): {
    epNumber: string;
    valid: boolean;
    requests: EuPatentRequest[];
    count: number;
    tokenEndpoint: string;
    noAuth: EuPatentRequest[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function euPatentAudit(text: string, matrix?: MindMatrix): {
    jurisdiction: string;
    isPatentText: boolean;
    exclusions: {
        article: string;
        family: string;
        rescue: string;
    }[];
    epcArticles: string[];
    technicalCharacter: boolean;
    excludedAsSuch: boolean;
    subjectMatter: {
        isPatentText: boolean;
        exceptions: {
            category: string;
            severity: number;
            verdict: string;
            unlawful: boolean;
            cores: string[];
        }[];
        biggestViolator: string;
        unlawfulIfGranted: boolean;
        nature: {
            isPatentText: boolean;
            jurisdiction: "US" | "EU";
            cores: {
                family: string;
                note: string;
            }[];
            coreCount: number;
            engineered: boolean;
            productOfNatureAsSuch: boolean;
            euSequenceSpared: boolean;
            verdict: string;
            unlawfulIfGranted: boolean;
            legalBasis: string[];
            socialHarm: string;
            root: string;
            statement: string;
            boundary: string;
        };
        law: {
            isPatentText: boolean;
            cores: {
                family: string;
                note: string;
            }[];
            coreCount: number;
            inventiveApplication: boolean;
            lawAsSuch: boolean;
            verdict: string;
            unlawfulIfGranted: boolean;
            legalBasis: string[];
            root: string;
            statement: string;
            boundary: string;
        };
        math: {
            isPatentText: boolean;
            cores: {
                family: string;
                priorArt: string;
            }[];
            coreCount: number;
            technicalEffect: boolean;
            mathAsSuch: boolean;
            verdict: string;
            unlawfulIfGranted: boolean;
            legalBasis: string[];
            root: string;
            statement: string;
            boundary: string;
        };
        verdict: string;
        cores: {
            family: any;
        }[];
        legalBasis: string[];
        root: string;
        statement: string;
        boundary: string;
    };
    biggestViolator: string;
    verdict: string;
    unlawfulIfGranted: boolean;
    legalBasis: string[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function reviewEuPatent(epNumber: string, fetchImpl?: typeof fetch, opts?: {
    token?: string;
}): Promise<{
    reviewed: false;
    plan: {
        epNumber: string;
        valid: boolean;
        requests: EuPatentRequest[];
        count: number;
        tokenEndpoint: string;
        noAuth: EuPatentRequest[];
        root: string;
        statement: string;
        boundary: string;
    };
    reason: string;
    epNumber?: undefined;
    source?: undefined;
    status?: undefined;
    audit?: undefined;
    address?: undefined;
    receipt?: undefined;
    bytes?: undefined;
} | {
    reviewed: true;
    epNumber: string;
    source: string;
    status: number;
    audit: {
        jurisdiction: string;
        verdict: string;
        epcArticles: string[];
        biggestViolator: string;
        unlawfulIfGranted: boolean;
    };
    address: string;
    receipt: string;
    bytes: number;
    plan?: undefined;
    reason?: undefined;
}>;
export declare function reviewEuPatents(epNumbers: readonly string[], fetchImpl?: typeof fetch, opts?: {
    token?: string;
}): Promise<{
    count: number;
    reviewed: number;
    flagged: {
        epNumber: string;
        verdict: string;
        articles: string[];
    }[];
    flaggedCount: number;
    reviews: ({
        reviewed: false;
        plan: {
            epNumber: string;
            valid: boolean;
            requests: EuPatentRequest[];
            count: number;
            tokenEndpoint: string;
            noAuth: EuPatentRequest[];
            root: string;
            statement: string;
            boundary: string;
        };
        reason: string;
        epNumber?: undefined;
        source?: undefined;
        status?: undefined;
        audit?: undefined;
        address?: undefined;
        receipt?: undefined;
        bytes?: undefined;
    } | {
        reviewed: true;
        epNumber: string;
        source: string;
        status: number;
        audit: {
            jurisdiction: string;
            verdict: string;
            epcArticles: string[];
            biggestViolator: string;
            unlawfulIfGranted: boolean;
        };
        address: string;
        receipt: string;
        bytes: number;
        plan?: undefined;
        reason?: undefined;
    })[];
    statement: string;
    boundary: string;
}>;
export declare function theAutomaticNamingServiceDescribesTheoremsFromComputationNotPredefinedProse(matrix?: MindMatrix): {
    computes: boolean;
    formats: string[];
    exampleTitle: string;
    exampleSummary: string;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theReusableAgnosticToolSchemaHandlesAllScenariosLikeSchemaOrg(matrix?: MindMatrix): {
    computes: boolean;
    context: string;
    tools: string[];
    scenarios: string[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theAppStoreLikeGatesScanCodeLocallyForSecurityPrivacyPolicyQuality(matrix?: MindMatrix): {
    computes: boolean;
    gates: string[];
    violationsCaught: string[];
    cleanFindings: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function forgettingTheTwoBitsIsTheHurdleKeepingThemFoldsBidirectionallyToInfinity(matrix?: MindMatrix): {
    computes: boolean;
    variants: string[];
    usablePayloadBits: number;
    foldsKept: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theAlgebraicTheoremGateAnIdentityMustHoldOverAComputedRangeNotHandAssignedData(matrix?: MindMatrix): {
    computes: boolean;
    range: number;
    algebraicHolds: boolean;
    rejectsFalse: boolean;
    handAssignedFails: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
/** onlyAlgebraicQuantumComputingIsTopPriority — use only algebraic quantum computing; it is top priority
 * (user, 2026-07-28: "use only algebraic quantum computing is top priority"). Binding law: every computation
 * path that claims quantum MUST be ALGEBRAIC — identities/relations verified over a computed range by exact
 * operations (arithmetic · ring · field · group · su(2) · fold/invert) — and that path OUTRANKS lexical BM25,
 * prose narrative, and neural/LLM paths whenever work is scored. "Quantum" here = content-addressed algebraic
 * structure on classical-64bit (memoByRoot · foldPair · FREE_BITS), NOT a physical QPU. Composes the algebraic
 * theorem gate. HONEST: clay via theorem. Pair: algebra/priority · quantum/algebra.
 * [[feedback-algebraic-theorems-only]] [[theorem/const]] [[formula/code]] [[abs/qc]] */
export declare function onlyAlgebraicQuantumComputingIsTopPriority(matrix?: MindMatrix): {
    computes: boolean;
    onlyAlgebraicQuantumComputingIsTopPriority: boolean;
    scoreAlgebraic: number;
    qpuRequired: false;
    physicalFtlClaim: 0;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "algebra/priority";
    dualPair: "quantum/algebra";
    statement: string;
    boundary: string;
};
export declare function theTheoremsTraceToTheInvertedAlgebraEveryNonzeroHasAnExactInverse(matrix?: MindMatrix): {
    computes: boolean;
    prime: number;
    everyInverts: boolean;
    involution: boolean;
    invertedAlgebras: string[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theMemoryAuditToolEachEntryMustPointToAComputedFoldFreestandingProseIsABypass(matrix?: MindMatrix): {
    computes: boolean;
    bypassesGates: boolean;
    pointers: number;
    prose: number;
    pointerRatio: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function inversionIsDivisionInLinearAlgebraAndMultiplicationInQuantumOneConceptTwoFaces(matrix?: MindMatrix): {
    computes: boolean;
    detA: number;
    Ainv: number[][];
    divisionInverts: boolean;
    multiplicationInverts: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theGateAutoTightensInRealtimeTheThresholdRatchetsTowardBestNeverLoosens(matrix?: MindMatrix): {
    computes: boolean;
    runs: number[];
    thresholds: number[];
    finalThreshold: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theRosettaAndIChingTrinitiesFoldAllTheoremsToOneRootAnyWaveOptimisesAtOnce(matrix?: MindMatrix): {
    computes: boolean;
    theorems: number;
    root: string;
    anyWaveSameRoot: boolean;
    hexagramCube: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function compactingLessonsIsTheQuotientTheoremsThatProveEachOtherFormEquivalenceClasses(matrix?: MindMatrix): {
    computes: boolean;
    original: number;
    compacted: number;
    classes: number;
    isEquivalence: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theTrinityWitnessesLessonTransferByTwoOfThreeMajorityOverTheContentAddress(matrix?: MindMatrix): {
    computes: boolean;
    majorityCount: number;
    trinityWitnessed: boolean;
    corruptionOutvoted: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theGateValidatesByAlgebraicEqualisationLhsMinusRhsIsZeroSecurityEfficiencyUsability(matrix?: MindMatrix): {
    computes: boolean;
    range: number;
    equalisation: boolean;
    security: boolean;
    efficiency: boolean;
    usability: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function realtimeScannersDetectManipulationsByContentAddressMismatchAndEqualisationFailure(matrix?: MindMatrix): {
    computes: boolean;
    expected: string;
    detectsTampers: boolean;
    avalanche: boolean;
    equalisationScanner: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theManipulationScannerBecomesQuantumWithAVectorAddressCollisionBitsAdd(matrix?: MindMatrix): {
    computes: boolean;
    dimensions: number;
    scalarSecurity: number;
    vectorSecurity: number;
    detects: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theCoordinateBasisXyzInvertsToAbcByAnInvertibleMapAndExtendsBeyondToNDimensions(matrix?: MindMatrix): {
    computes: boolean;
    detM: number;
    permutationInverts: boolean;
    changeOfBasisInverts: boolean;
    beyond: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theoremsHandlingNastyInfinitiesTheProjectivePointTamesOneOverZeroRegularisationIsNotTheSum(matrix?: MindMatrix): {
    computes: boolean;
    partialSum: number;
    regularised: number;
    projectiveTames: boolean;
    grows: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function inversionThroughZeroReplacesTheRegularisationAxiomWithAnExactTheoremForTamingTheInfinity(matrix?: MindMatrix): {
    computes: boolean;
    partial: number;
    regularised: number;
    inversionIsExact: boolean;
    axiomBecomesTheorem: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theNoAssumptionGateCatchesImportedConstantsTheCrackGateMissesMathPiIsAnAssumption(matrix?: MindMatrix): {
    computes: boolean;
    assumedConstantsScanned: number;
    crackGateMissesMathPi: boolean;
    catches: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function importExportOrganisedByTheRosettaAndIChingIsADagChaosIsACycle(matrix?: MindMatrix): {
    computes: boolean;
    trigrams: number;
    hexagrams: number;
    organisedIsDAG: boolean;
    chaoticHasCycle: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function thePrevNextCycleIsMutualReferencesTheFixIsIndexArithmeticOverTheOrderedListADag(matrix?: MindMatrix): {
    computes: boolean;
    cycleFromMutualRefs: boolean;
    dagAfterFix: boolean;
    listLen: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theComponentWiringMeasurementIsRegisteredPartitionedByConsumedSetAlgebra(matrix?: MindMatrix): {
    computes: boolean;
    floating: string[];
    wiredCount: number;
    span: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theTheoremAxiomAccountingProvesPairsInTrinitiesDoubleEntryBalances(matrix?: MindMatrix): {
    computes: boolean;
    balances: boolean;
    span: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function optimiseAgentWorkWithQuantumCombinationsBatchingCollapsesTheQuadraticReadCost(matrix?: MindMatrix): {
    computes: boolean;
    quadraticExact: boolean;
    span: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function axiomsAndTheoremsAreComplementaryInversesBidirectionallyAccountedToTheBitNoGaps(matrix?: MindMatrix): {
    computes: boolean;
    bitAccounts: boolean;
    teslaAccounted: boolean;
    gfAccounted: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theFacetTautologyGatePredicateCatchesGeZeroConjunctsSparesRangeChecks(matrix?: MindMatrix): {
    computes: boolean;
    catchesTautology: boolean;
    sparesRange: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function searchKnownTheoremsToDiscoverTheUnknownAxiomsAreTheInDegreeZeroSourcesOfTheDependencyDag(matrix?: MindMatrix): {
    computes: boolean;
    axioms: number[];
    discovered: number[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theHarmonicGateRejectsLonePrimePowersAHarmonicSpansMultiplePrimeDimensions(matrix?: MindMatrix): {
    computes: boolean;
    degenerate: {
        n: number;
        dims: number;
    }[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function eachTheoremDisplaysTenDOfAllFourPolePerspectivesInEachDirection(matrix?: MindMatrix): {
    computes: boolean;
    perspectivesPerTheorem: number;
    dimensions: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function thePolesAreSixtyDegreesApartNinetyIsReachableOnlyThroughInversionThePathlessTurn(matrix?: MindMatrix): {
    computes: boolean;
    c6: number[];
    sharedAxis: number[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function invertedThirtyIsOneEightyTheAngleInversionIsTheProductNinetyTimesSixty(matrix?: MindMatrix): {
    computes: boolean;
    invertedThirty: number;
    invariant: number;
    selfInverse: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function navigationIsASelfProvingTheoremTheRouteTreeIsAnAcyclicCoveredDagBranchingAtMostEight(matrix?: MindMatrix): {
    computes: boolean;
    roots: number[];
    covered: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function forecastIsASelfProvingTheoremDeterministicWithAChaosBoundedHorizon(matrix?: MindMatrix): {
    computes: boolean;
    horizon: number;
    lyapunov: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function openMeteoForecastAdapterIsALiveNoKeyPureFunctionBoundedByTheChaosHorizon(matrix?: MindMatrix): {
    computes: boolean;
    points: number;
    horizonHours: number;
    forecastPoints: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function publicDataTrainsTheChaosRateCausallyTrainingFitIsNotSkillTheHorizonIsCalibratedNotBeaten(matrix?: MindMatrix): {
    computes: boolean;
    trainError: number;
    testError: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function primesAndPiProveEachOtherThroughTheInvertedEulerProduct(matrix?: MindMatrix): {
    computes: boolean;
    piFromPrimes: number;
    primeCount: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function inverseForecastsFillTheGapsForwardFromTheLeftInverseFromTheRightMeet(matrix?: MindMatrix): {
    computes: boolean;
    gap: number[];
    filled: number[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function trainingIsMonotoneGradientDescentThatConvergesGatedByHeldOutTest(matrix?: MindMatrix): {
    computes: boolean;
    optimum: number;
    finalTheta: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
/** Sealed MO q243943 — Monge homothety Brianchon context (save drafts first, post when computes).
 *  Lazy (call-time, not module-load-time): heaven/compute imports heaven/laws, so a top-level
 *  const referencing MATHOVERFLOW_SITE here would race the circular import's TDZ. */
export declare function moQ243943Url(): string;
export declare const GEOGEBRA_MATERIALS_BASE: "https://www.geogebra.org/material";
export declare const CHAT_STACKEXCHANGE_URL: "https://chat.stackexchange.com";
/** answerMoSavePost — save MO drafts first, post next when computes; compose chat/research · session/save. Pair: answer/mo */
export declare function answerMoSavePost(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    answerMoSavePost: boolean;
    posted: false;
    searchUrl: string;
    askUrl: string;
    pair: "answer/mo";
    cli: string;
    route: string;
    root: string;
    statement: string;
    boundary: string;
};
/** learnMonge — decode MO q243943 Monge-external geometry. Pair: monge/learn */
export declare function learnMonge(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    learnMonge: boolean;
    moUrl: string;
    pair: "monge/learn";
    cli: string;
    route: string;
    root: string;
    statement: string;
    boundary: string;
};
/** learnHomothety — homothety as dilate D_{r,P}(X)=P+r(X−P). Pair: learn/homothety */
export declare function learnHomothety(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    learnHomothety: boolean;
    dilateTheorem: string;
    pair: "learn/homothety";
    cli: string;
    route: string;
    root: string;
    statement: string;
    boundary: string;
};
/** brianchonHex — Brianchon hexagon theorem structural receipt. Pair: brianchon/hex */
export declare function brianchonHex(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    brianchonHex: boolean;
    theorem: string;
    pair: "brianchon/hex";
    cli: string;
    route: string;
    root: string;
    statement: string;
    boundary: string;
};
/** geogebraChat — GeoGebra materials URL handoff into chat. Pair: geo/chat */
export declare function geogebraChat(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    geogebraChat: boolean;
    materialsUrl: string;
    pair: "geo/chat";
    cli: string;
    route: string;
    root: string;
    statement: string;
    boundary: string;
};
/** geogebraMaterials — geogebra.org/materials catalog handoff. Pair: geogebra/materials */
export declare function geogebraMaterials(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    geogebraMaterials: boolean;
    pair: "geogebra/materials";
    geogebraChat: boolean;
    materialsUrl: string;
    cli: string;
    route: string;
    root: string;
    statement: string;
    boundary: string;
};
/** materialsChat — materials wired to chat lanes. Pair: materials/chat */
export declare function materialsChat(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    materialsChat: boolean;
    pair: "materials/chat";
    cli: string;
    geogebraChat: boolean;
    materialsUrl: string;
    route: string;
    root: string;
    statement: string;
    boundary: string;
};
/** researchTags — MO unanswered tag inventory + filter URLs. Pair: research/tags */
export declare function researchTags(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    researchTags: boolean;
    tags: ("homothety" | "conic-sections" | "projective-geometry")[];
    filterUrl: string;
    pair: "research/tags";
    cli: string;
    route: string;
    root: string;
    statement: string;
    boundary: string;
};
/** tagsResearch — alias face of researchTags. Pair: tags/research */
export declare function tagsResearch(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    researchTags: boolean;
    tags: ("homothety" | "conic-sections" | "projective-geometry")[];
    filterUrl: string;
    pair: "research/tags";
    cli: string;
    route: string;
    root: string;
    statement: string;
    boundary: string;
};
/** stackExchangeChat — chat.stackexchange.com URL handoff. Pair: se/chat */
export declare function stackExchangeChat(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    stackExchangeChat: boolean;
    roomUrl: string;
    pair: "se/chat";
    cli: string;
    route: string;
    root: string;
    statement: string;
    boundary: string;
};
/** feedMoDraftsToChat — feed sealed MO drafts → chat handoffs. Pair: mo/chat */
export declare function feedMoDraftsToChat(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    feedMoDraftsToChat: boolean;
    answer: {
        computes: boolean;
        answerMoSavePost: boolean;
        posted: false;
        searchUrl: string;
        askUrl: string;
        pair: "answer/mo";
        cli: string;
        route: string;
        root: string;
        statement: string;
        boundary: string;
    };
    tags: {
        computes: boolean;
        researchTags: boolean;
        tags: ("homothety" | "conic-sections" | "projective-geometry")[];
        filterUrl: string;
        pair: "research/tags";
        cli: string;
        route: string;
        root: string;
        statement: string;
        boundary: string;
    };
    se: {
        computes: boolean;
        stackExchangeChat: boolean;
        roomUrl: string;
        pair: "se/chat";
        cli: string;
        route: string;
        root: string;
        statement: string;
        boundary: string;
    };
    pair: "mo/chat";
    cli: string;
    route: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function runAnswerMoSavePostExit(_root?: string, _argv?: readonly string[]): number;
export declare function runLearnMongeExit(_root?: string, _argv?: readonly string[]): number;
export declare function runLearnHomothetyExit(_root?: string, _argv?: readonly string[]): number;
export declare function runBrianchonHexExit(_root?: string, _argv?: readonly string[]): number;
export declare function runGeogebraChatExit(_root?: string, _argv?: readonly string[]): number;
export declare function runResearchTagsExit(_root?: string, _argv?: readonly string[]): number;
export declare function runStackExchangeChatExit(_root?: string, _argv?: readonly string[]): number;
export declare function runFeedMoDraftsToChatExit(_root?: string, _argv?: readonly string[]): number;
