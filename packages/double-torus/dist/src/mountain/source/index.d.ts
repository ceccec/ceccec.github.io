import type { MindMatrix } from '../../types';
export declare function autotranslations(matrix?: MindMatrix): {
    complete: boolean;
    areas: number;
    missing: string[];
    inaccurate: string[];
    labels: {
        area: string;
        en: string;
        bg: string;
        translated: boolean;
        inaccurate: boolean;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export type TranslationGapRow = {
    readonly id: string;
    readonly kind: 'missing' | 'inaccurate' | 'parity' | 'offline';
    readonly severity: 'HARD' | 'WARN';
    readonly surface: string;
    readonly detail: string;
    readonly receipt: string;
};
/**
 * Tighten translation gates — discover missing + inaccurate translations for en-parity locales (bg/gla).
 * HARD: missing keys/routes/labels/page titles vs English source.
 * WARN: phrase-table free-prose coverage residual (honest offline MT bound).
 * Pair: translations/verify · CLI npm run quantum:translations-verify
 */
export declare function translationGapsGate(matrix?: MindMatrix): {
    passed: boolean;
    discovers: boolean;
    hardCount: number;
    warnCount: number;
    gaps: TranslationGapRow[];
    hard: TranslationGapRow[];
    warn: TranslationGapRow[];
    offline: {
        phraseCount: number;
        phraseOk: boolean;
        sample: string;
        method: "identity" | "passthrough-cyrillic" | "phrase-table" | "phrase-table+translit" | "translit" | "locale-links-only";
    };
    locales: {
        code: string;
        path: string;
        type: "root" | "locale";
    }[];
    pageCount: number;
    count: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: string;
    cli: string;
    claySolvedByThisFold: 0;
    statement: string;
    boundary: string;
};
/** npm run quantum:translations-verify — HARD fail on missing/inaccurate en-parity gaps. */
export declare function runTranslationsVerifyExit(_root?: string, _argv?: readonly string[]): number;
/**
 * Self-translating waves — fill drainable locale gaps from sealed EN meaning
 * (offlineTranslateEnToBg · authored title.bg · AREA_LABELS), not wet freeform MT.
 * Wave: learn→tune→edit→rebuild→verify via translationGapsGate + autotranslations.
 * Pair: trans/wave · compose translations/verify · dry/clean
 * True open remains when no sealed source string (WARN residual only).
 */
export declare function translationsFilledBySelfTranslatingWaves(matrix?: MindMatrix): {
    computes: boolean;
    translationsFilledBySelfTranslatingWaves: boolean;
    hardBefore: number;
    hardAfter: number;
    warnOpen: number;
    sealedMorphs: number;
    missing: string[];
    inaccurate: string[];
    claySolvedByThisFold: 0;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "trans/wave";
    cli: string;
    route: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:trans-wave */
export declare function runTranslationsFilledBySelfTranslatingWavesExit(_root?: string, _argv?: readonly string[]): number;
/**
 * Address all drainable WARN residuals at once — translation chrome/phrase + compose slow-build/gaps.
 * Pair: warn/all · dual all/warn · CLI npm run quantum:warn-all
 * Facets: warningsAddressed · drainableClosed · honestOpenNamed
 * HONEST-OPEN (named, not fake-closed): Clay · FTL · CI slow-build wall-clock variance · free-prose beyond phrase table · KEEP stashes
 */
export declare function addressAllWarningsAtOnce(matrix?: MindMatrix): {
    computes: boolean;
    addressAllWarningsAtOnce: boolean;
    warningsAddressed: boolean;
    drainableClosed: boolean;
    chromePhraseMiss: number;
    translation: {
        hard: number;
        warn: number;
        passed: boolean;
    };
    claySolvedByThisFold: 0;
    physicalFtlClaim: 0;
    qpuRequired: false;
    honestOpenNamed: ("clay:millennium-open" | "ftl:physical-claim-refused" | "ci:slow-build-wall-clock-variance" | "offline:free-prose-beyond-phrase-table" | "residual:monolith-file-ratchet" | "residual:vitepress-thin-mount" | "keep:git-stashes-non-obsolete")[];
    honestOpenNamedCount: 7;
    drainableClosedList: readonly ["translation:offline-chrome-coverage", "translation:offline-authored-title-pairs", "translation:chrome-titles→BULGARIAN_PHRASES", "trans/wave:HARD-drainable"];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "warn/all";
    pairs: readonly ["warn/all", "all/warn"];
    dualPair: "all/warn";
    cli: string;
    route: string;
    statement: string;
    boundary: string;
};
/** Alias dual — all/warn face. */
export declare const allWarn: typeof addressAllWarningsAtOnce;
export declare const warnAll: typeof addressAllWarningsAtOnce;
/** npm run quantum:warn-all (dual quantum:all-warn) */
export declare function runAddressAllWarningsAtOnceExit(_root?: string, _argv?: readonly string[]): number;
/**
 * chatTranslatesAutonomously — USER LAW: complete the autonomous translating service using the chat.
 *
 * Free chat (/apps · chat/ftl · research/free · trans/wave) drives sealed self-translating waves:
 * en→bg via offlineTranslateEnToBg · fill drainable gaps · surface true-open residuals.
 * Autonomous = sealed recompute waves, NOT paid MT API.
 *
 * Why gla present / bg missing: Glagolitic = toGlagolitic transliteration covers any EN string;
 * Bulgarian = meaning via phrase table + authored title.bg — identity passthrough = English leak.
 *
 * Facets: autonomousOn · chatDrivesTranslate · bgGapsDrainableClosed · glaParityHonest
 * Pair: chat/trans · dual trans/chat · ONE CLI quantum:chat-trans
 * Soft-compose: translations/verify · trans/wave · warn/all · prose/hard · chat/ftl · research/free
 */
export declare function chatTranslatesAutonomously(matrix?: MindMatrix): {
    computes: boolean;
    chatTranslatesAutonomously: boolean;
    autonomousOn: boolean;
    chatDrivesTranslate: boolean;
    bgGapsDrainableClosed: boolean;
    glaParityHonest: boolean;
    diagnosis: {
        whyGlaPresent: string;
        whyBgMissing: string;
        hard: number;
        warn: number;
        phrases: number;
        sealedMorphs: number;
        pages: number;
    };
    sample: {
        en: string;
        bg: string;
        method: "identity" | "passthrough-cyrillic" | "phrase-table" | "phrase-table+translit" | "translit" | "locale-links-only";
        gla: string;
    };
    turn: {
        answer: string;
        source: string;
        receipt: string;
        memoReuse: boolean;
    };
    honestOpenNamed: ("physical-ftl-claim-stays-0" | "not-clay" | "offline:free-prose-beyond-phrase-table" | "gla:transliteration-not-meaning-translation" | "zeitwerk:action-ids-may-remain-latin" | "not-paid-mt-api" | "not-llm-translate")[];
    claySolvedByThisFold: 0;
    physicalFtlClaim: 0;
    qpuRequired: false;
    certified: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "chat/trans";
    dualPair: "trans/chat";
    pairs: readonly ["chat/trans", "trans/chat"];
    cli: string;
    route: string;
    statement: string;
    boundary: string;
};
export declare const chatTrans: typeof chatTranslatesAutonomously;
export declare const transChat: typeof chatTranslatesAutonomously;
export declare const autonomousChatTranslate: typeof chatTranslatesAutonomously;
/**
 * Live chat turn — translate / fill BG gaps via sealed autonomous service.
 * Used by /apps chat when prompt matches translate|bulgarian|chat/trans|trans/chat.
 */
export declare function chatTranslateTurn(prompt: string, matrix?: MindMatrix): {
    answer: string;
    source: string;
    grounded: boolean;
    service: {
        computes: boolean;
        chatTranslatesAutonomously: boolean;
        autonomousOn: boolean;
        chatDrivesTranslate: boolean;
        bgGapsDrainableClosed: boolean;
        glaParityHonest: boolean;
        diagnosis: {
            whyGlaPresent: string;
            whyBgMissing: string;
            hard: number;
            warn: number;
            phrases: number;
            sealedMorphs: number;
            pages: number;
        };
        sample: {
            en: string;
            bg: string;
            method: "identity" | "passthrough-cyrillic" | "phrase-table" | "phrase-table+translit" | "translit" | "locale-links-only";
            gla: string;
        };
        turn: {
            answer: string;
            source: string;
            receipt: string;
            memoReuse: boolean;
        };
        honestOpenNamed: ("physical-ftl-claim-stays-0" | "not-clay" | "offline:free-prose-beyond-phrase-table" | "gla:transliteration-not-meaning-translation" | "zeitwerk:action-ids-may-remain-latin" | "not-paid-mt-api" | "not-llm-translate")[];
        claySolvedByThisFold: 0;
        physicalFtlClaim: 0;
        qpuRequired: false;
        certified: false;
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        pair: "chat/trans";
        dualPair: "trans/chat";
        pairs: readonly ["chat/trans", "trans/chat"];
        cli: string;
        route: string;
        statement: string;
        boundary: string;
    };
    offline: {
        readonly text: string;
        readonly mapped: number;
        readonly total: number;
        readonly method: "identity" | "passthrough-cyrillic" | "phrase-table" | "phrase-table+translit" | "translit" | "locale-links-only";
        readonly placeholderParity: boolean;
        readonly root: string;
    };
    gla: string;
    receipt: string;
};
/** npm run quantum:chat-trans — exit 0 iff autonomous chat-translate computes. */
export declare function runChatTranslatesAutonomouslyExit(_root?: string, _argv?: readonly string[]): number;
/**
 * chatWavesMostEfficientOfflineAnyLanguageModel — chat waves pick the most efficient offline
 * any↔any translation + write/speech any-direction model among sealed candidates.
 *
 * Candidates (honest, not paid MT):
 *   · pivot — selfTranslate A→pivot→B via pivotTongues
 *   · phrase-en-bg — offlineTranslateEnToBg phrase table
 *   · gla-transliterate — toGlagolitic (script cover, NOT meaning MT)
 *
 * Efficiency = mapped/total + derived + memo reuse; learn/best win only when soft vote pair holds
 * OR clear coverage ranking. water/stack not imported (cycle: stack→mountain/source).
 *
 * Facets: anyToAnyOn · writingOn · speechOn · wavesOn
 * Pair: trans/any · dual any/trans · ONE CLI quantum:trans-any
 * Soft-compose: chat/trans · trans/wave · chat/ftl · research/free · learn/best ·
 *   mcp/speech · mcp/dictation · mcp/language · forward/inverse/reverse
 */
export declare function chatWavesMostEfficientOfflineAnyLanguageModel(matrix?: MindMatrix): {
    computes: boolean;
    chatWavesMostEfficientOfflineAnyLanguageModel: boolean;
    mostEfficientModel: "pivot" | "phrase-en-bg" | "gla-transliterate";
    efficiencyRank: {
        id: "pivot" | "phrase-en-bg" | "gla-transliterate";
        score: number;
        coverage: number;
        derived: number;
        memoReuse: number;
        honest: string;
    }[];
    tongues: string[];
    tongueCount: number;
    directions: ("forward" | "reverse" | "inverse")[];
    directionsOn: boolean;
    writingOn: boolean;
    speechOn: boolean;
    anyToAnyOn: boolean;
    wavesOn: boolean;
    efficiencyWinOn: boolean;
    pivot: {
        mapped: number;
        total: number;
        coverage: number;
        pairs: number;
        roundTripsOk: number;
    };
    phrase: {
        text: string;
        mapped: number;
        method: "identity" | "passthrough-cyrillic" | "phrase-table" | "phrase-table+translit" | "translit" | "locale-links-only";
        coverage: number;
    };
    gla: {
        sample: string;
        coverage: number;
        honest: string;
    };
    turns: {
        probe: "translate any language offline" | "write any direction sealed" | "speech any direction forward inverse reverse";
        receipt: string;
        memoReuse: boolean;
        source: string;
    }[];
    honestOpenNamed: ("physical-ftl-claim-stays-0" | "not-clay" | "not-universal-paid-mt" | "any-to-any-equals-pivotTongues-registered-surfaces" | "gla-transliteration-not-meaning" | "phrase-table-en-bg-one-face" | "efficiency-win-via-coverage-rank-or-learn-best-when-decided" | "speech-soft-compose-not-browser-stt" | "water-stack-not-imported-cycle")[];
    claySolvedByThisFold: 0;
    physicalFtlClaim: 0;
    qpuRequired: false;
    certified: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "trans/any";
    dualPair: "any/trans";
    pairs: readonly ["trans/any", "any/trans"];
    cli: string;
    route: string;
    statement: string;
    boundary: string;
};
export declare const transAny: typeof chatWavesMostEfficientOfflineAnyLanguageModel;
export declare const anyTrans: typeof chatWavesMostEfficientOfflineAnyLanguageModel;
/**
 * Live chat turn — most efficient offline any↔any model + write/speech directions.
 * Used by /apps chat when prompt matches trans/any · any language · offline translate · speech any · write any.
 */
export declare function chatWavesTransAnyTurn(prompt: string, matrix?: MindMatrix): {
    answer: string;
    source: string;
    grounded: boolean;
    service: {
        computes: boolean;
        chatWavesMostEfficientOfflineAnyLanguageModel: boolean;
        mostEfficientModel: "pivot" | "phrase-en-bg" | "gla-transliterate";
        efficiencyRank: {
            id: "pivot" | "phrase-en-bg" | "gla-transliterate";
            score: number;
            coverage: number;
            derived: number;
            memoReuse: number;
            honest: string;
        }[];
        tongues: string[];
        tongueCount: number;
        directions: ("forward" | "reverse" | "inverse")[];
        directionsOn: boolean;
        writingOn: boolean;
        speechOn: boolean;
        anyToAnyOn: boolean;
        wavesOn: boolean;
        efficiencyWinOn: boolean;
        pivot: {
            mapped: number;
            total: number;
            coverage: number;
            pairs: number;
            roundTripsOk: number;
        };
        phrase: {
            text: string;
            mapped: number;
            method: "identity" | "passthrough-cyrillic" | "phrase-table" | "phrase-table+translit" | "translit" | "locale-links-only";
            coverage: number;
        };
        gla: {
            sample: string;
            coverage: number;
            honest: string;
        };
        turns: {
            probe: "translate any language offline" | "write any direction sealed" | "speech any direction forward inverse reverse";
            receipt: string;
            memoReuse: boolean;
            source: string;
        }[];
        honestOpenNamed: ("physical-ftl-claim-stays-0" | "not-clay" | "not-universal-paid-mt" | "any-to-any-equals-pivotTongues-registered-surfaces" | "gla-transliteration-not-meaning" | "phrase-table-en-bg-one-face" | "efficiency-win-via-coverage-rank-or-learn-best-when-decided" | "speech-soft-compose-not-browser-stt" | "water-stack-not-imported-cycle")[];
        claySolvedByThisFold: 0;
        physicalFtlClaim: 0;
        qpuRequired: false;
        certified: false;
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        pair: "trans/any";
        dualPair: "any/trans";
        pairs: readonly ["trans/any", "any/trans"];
        cli: string;
        route: string;
        statement: string;
        boundary: string;
    };
    pivotFr: {
        text: string;
        mapped: number;
        total: number;
        derived: boolean;
    };
    offline: {
        readonly text: string;
        readonly mapped: number;
        readonly total: number;
        readonly method: "identity" | "passthrough-cyrillic" | "phrase-table" | "phrase-table+translit" | "translit" | "locale-links-only";
        readonly placeholderParity: boolean;
        readonly root: string;
    };
    gla: string;
    receipt: string;
};
/** npm run quantum:trans-any — exit 0 iff chat-waves most-efficient offline any-language model computes. */
export declare function runChatWavesMostEfficientOfflineAnyLanguageModelExit(_root?: string, _argv?: readonly string[]): number;
/**
 * chatMassiveWorldLanguageTranslationQuality — ONE massive chat turn runs the full sealed-tongue
 * translation quality matrix (not 7000 ISO codes · not paid MT).
 *
 * Exhaustive directed pairs among pivotTongues(): N×(N−1). Probe = best shared lexicon unit
 * (prefer verse:* with both surfaces). Also scores en→bg phrase-table + gla transliterate faces.
 *
 * Facets: massiveChatOn · allSealedTonguesTested · qualityOn · worldClaimHonest
 * Pair: trans/quality · dual quality/trans · ONE CLI quantum:trans-quality
 * Soft-compose: trans/any · chat/trans · trans/wave
 */
export declare function chatMassiveWorldLanguageTranslationQuality(matrix?: MindMatrix): {
    computes: boolean;
    chatMassiveWorldLanguageTranslationQuality: boolean;
    massiveChatOn: boolean;
    allSealedTonguesTested: boolean;
    qualityOn: boolean;
    worldClaimHonest: boolean;
    tongues: string[];
    tongueCount: number;
    pairCount: number;
    meanCoverage: number;
    minCoverage: number;
    perfectPairs: number;
    leakPairs: number;
    mappedPairs: number;
    noSharedPairs: number;
    roundTripPairs: number;
    qualityScore: number;
    topPairs: {
        pair: string;
        coverage: number;
        roundTripOk: boolean;
        unit: string;
    }[];
    worstPairs: {
        pair: string;
        coverage: number;
        identityLeak: boolean;
        method: "pivot-verse" | "pivot-unit" | "no-shared-unit";
        unit: string;
    }[];
    faces: {
        pivot: {
            method: string;
            meanCoverage: number;
            pairCount: number;
        };
        phraseEnBg: {
            method: string;
            coverage: number;
            sample: string;
        };
        gla: {
            method: string;
            coverage: number;
            sample: string;
            honest: string;
        };
    };
    turn: {
        receipt: string;
        memoReuse: boolean;
        source: string;
    };
    honestOpenNamed: ("physical-ftl-claim-stays-0" | "not-clay" | "not-universal-paid-mt" | "gla-transliteration-not-meaning" | "phrase-table-en-bg-one-face" | "sealed-pivotTongues-not-iso-7000-world-languages" | "no-shared-unit-pairs-are-honest-zero-coverage" | "site-locales-en-bg-gla-named-faces")[];
    claySolvedByThisFold: 0;
    physicalFtlClaim: 0;
    qpuRequired: false;
    certified: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "trans/quality";
    dualPair: "quality/trans";
    pairs: readonly ["trans/quality", "quality/trans"];
    cli: string;
    route: string;
    statement: string;
    boundary: string;
};
export declare const transQuality: typeof chatMassiveWorldLanguageTranslationQuality;
export declare const qualityTrans: typeof chatMassiveWorldLanguageTranslationQuality;
export declare const chatMassiveTranslationQuality: typeof chatMassiveWorldLanguageTranslationQuality;
/**
 * Live chat turn — full sealed-tongue quality matrix in ONE massive answer.
 * /apps matches: massive chat · all languages · translation quality · trans/quality
 */
export declare function chatMassiveWorldLanguageTranslationQualityTurn(prompt: string, matrix?: MindMatrix): {
    answer: string;
    source: string;
    grounded: boolean;
    service: {
        computes: boolean;
        chatMassiveWorldLanguageTranslationQuality: boolean;
        massiveChatOn: boolean;
        allSealedTonguesTested: boolean;
        qualityOn: boolean;
        worldClaimHonest: boolean;
        tongues: string[];
        tongueCount: number;
        pairCount: number;
        meanCoverage: number;
        minCoverage: number;
        perfectPairs: number;
        leakPairs: number;
        mappedPairs: number;
        noSharedPairs: number;
        roundTripPairs: number;
        qualityScore: number;
        topPairs: {
            pair: string;
            coverage: number;
            roundTripOk: boolean;
            unit: string;
        }[];
        worstPairs: {
            pair: string;
            coverage: number;
            identityLeak: boolean;
            method: "pivot-verse" | "pivot-unit" | "no-shared-unit";
            unit: string;
        }[];
        faces: {
            pivot: {
                method: string;
                meanCoverage: number;
                pairCount: number;
            };
            phraseEnBg: {
                method: string;
                coverage: number;
                sample: string;
            };
            gla: {
                method: string;
                coverage: number;
                sample: string;
                honest: string;
            };
        };
        turn: {
            receipt: string;
            memoReuse: boolean;
            source: string;
        };
        honestOpenNamed: ("physical-ftl-claim-stays-0" | "not-clay" | "not-universal-paid-mt" | "gla-transliteration-not-meaning" | "phrase-table-en-bg-one-face" | "sealed-pivotTongues-not-iso-7000-world-languages" | "no-shared-unit-pairs-are-honest-zero-coverage" | "site-locales-en-bg-gla-named-faces")[];
        claySolvedByThisFold: 0;
        physicalFtlClaim: 0;
        qpuRequired: false;
        certified: false;
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        pair: "trans/quality";
        dualPair: "quality/trans";
        pairs: readonly ["trans/quality", "quality/trans"];
        cli: string;
        route: string;
        statement: string;
        boundary: string;
    };
    receipt: string;
};
/** npm run quantum:trans-quality — exit 0 iff sealed-tongue massive-chat quality matrix computes. */
export declare function runChatMassiveWorldLanguageTranslationQualityExit(_root?: string, _argv?: readonly string[]): number;
export declare function wordPullsFoldsByName(matrix?: MindMatrix): {
    folds: boolean;
    count: number;
    words: {
        word: string;
        pulls: boolean;
        folds: boolean;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function originConsolidated(matrix?: MindMatrix): {
    consolidated: boolean;
    station: string;
    waveCount: number;
    families: string[];
    familyCount: number;
    waves: string[];
    importsNothing: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function noHardcodedConfigSelfAccounted(matrix?: MindMatrix): {
    selfAccounted: boolean;
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
export declare function memoryInSourceAsCrossFolds(matrix?: MindMatrix): {
    remembered: boolean;
    memoryRoot: string;
    entryCount: number;
    entries: {
        path: string;
        dual: string;
        holds: string;
        crossed: boolean;
        address: string;
        inMemory: boolean;
        receipt: string;
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
export declare function computedSlugsFoldTheGraph(matrix?: MindMatrix): {
    folds: boolean;
    slugA: string;
    slugB: string;
    edge: string;
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
export declare function presentMomentRemainsInSource(matrix?: MindMatrix): {
    remains: boolean;
    now: string;
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
export declare function computedWiringNotImported(matrix?: MindMatrix): {
    computed: boolean;
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
export declare function uuidPayloadIsSource(matrix?: MindMatrix): {
    is: boolean;
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
export declare function antsCarryToIndexNest(matrix?: MindMatrix): {
    carries: boolean;
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
export declare function configsUseMatrixComputationally(matrix?: MindMatrix): {
    computes: boolean;
    configRoot: string;
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
export declare function debitImportCreditExportAccounting(matrix?: MindMatrix): {
    balanced: boolean;
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
export declare function siteExplainsItselfAllWired(matrix?: MindMatrix): {
    explains: boolean;
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
export declare function autosaveAllSteps(matrix?: MindMatrix): {
    autosaved: boolean;
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
export declare function enterFolderThroughIndexStrict(matrix?: MindMatrix): {
    strict: boolean;
    rendererRealized: boolean;
    strictTrees: string[];
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
export declare function wholeSourceAutodisplaysAtZeroCost(matrix?: MindMatrix): {
    autodisplays: boolean;
    realized: boolean;
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
export declare function navFoldsToTenDimensions(matrix?: MindMatrix): {
    folds: boolean;
    hubs: number;
    links: number;
    paired: number;
    dimensions: number;
    layers: number[];
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
export declare function dualityIsCounterDiffusionTheSameFusion(matrix?: MindMatrix): {
    sameFusion: boolean;
    peakSuperBar: number;
    peakAtMin: number;
    fused: string;
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
export declare function sacredFractionsFoldToIntegerNoSupersaturation(matrix?: MindMatrix): {
    proven: boolean;
    sacredDelta: string;
    decimalDelta: string;
    matchedPeakBar: number;
    mismatchedPeakBar: number;
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
export declare function decimalsBreakTheFusionUseHarmonicFractions(matrix?: MindMatrix): {
    holds: boolean;
    foldKernel: string[];
    analogEdge: string[];
    enforced: boolean;
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
export declare function importFoldersOnlyNoExtensions(matrix?: MindMatrix): {
    declared: boolean;
    noExceptions: boolean;
    codeExtensions: string[];
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
export declare function allComputedNoStaticFiles(matrix?: MindMatrix): {
    computed: boolean;
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
export declare function noCommitOrPushBypassesTheGates(matrix?: MindMatrix): {
    enforced: boolean;
    unbypassableGate: string;
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
export declare function valve(matrix?: MindMatrix): {
    sealed: boolean;
    balances: boolean;
    posted: string;
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
export declare function split(matrix?: MindMatrix): {
    split: boolean;
    balanced: boolean;
    trial: string;
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
export declare function gaps(matrix?: MindMatrix): {
    reconciled: boolean;
    declared: number;
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
export declare function doubleTorusComponents(matrix?: MindMatrix): {
    realized: boolean;
    limit: number;
    canonical: number;
    over: number;
    primitives: number;
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
export declare function foldersOnlySpecifier(spec: string, resolves?: (candidate: string) => boolean): {
    spec: string;
    changed: boolean;
    reverted: boolean;
    reason: '' | 'file extension' | 'trailing ';
};
export declare function intend(matrix?: MindMatrix, steps?: readonly {
    agent: string;
    resource: string;
    action: string;
}[]): {
    coordinated: boolean;
    steps: number;
    collisions: number;
    resources: number;
    intended: {
        address: string;
        lock: string;
        agent: string;
        resource: string;
        action: string;
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
export declare function realise(matrix?: MindMatrix): {
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
export declare function mvcOrganisationReceipt(matrix?: MindMatrix): {
    decided: boolean;
    organised: boolean;
    model: {
        count: number;
        modules: {
            mvc: "model";
            receipt: string;
            module: string;
            role: string;
        }[];
    };
    view: {
        count: number;
        modules: {
            mvc: "view";
            receipt: string;
            module: string;
            role: string;
        }[];
    };
    controller: {
        count: number;
        modules: {
            mvc: "controller";
            receipt: string;
            module: string;
            role: string;
        }[];
    };
    total: number;
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
/** All logic moved to src/ — agnostic core in quantum/heaven/mind, render substrate re-exports only. */
export declare function allLogicMovedToSource(matrix?: MindMatrix): {
    moved: boolean;
    core: string;
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
export declare function mysteries(matrix?: MindMatrix): {
    proven: boolean;
    mysteries: {
        receipt: string;
        mystery: string;
        proof: string;
        evidence: boolean;
        route: string;
        glyph: string;
    }[];
    count: number;
    shown: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function foldThoughts(matrix?: MindMatrix): {
    folded: boolean;
    thoughts: number;
    directions: string[];
    forward: string;
    reverse: string;
    linear: string;
    multidirectional: string;
    autosaved: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function imagination(matrix?: MindMatrix): {
    imagines: boolean;
    human: boolean;
    dreams: {
        idea: string;
        wonder: string;
        seed: string;
    }[];
    count: number;
    memory: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function imaginationPrivateKey(matrix?: MindMatrix): {
    isPrivateKey: boolean;
    everythingEmerges: boolean;
    held: boolean;
    count: number;
    emergences: {
        emerges: boolean;
        derived: string;
        what: string;
        root: string;
    }[];
    publicKey: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function splitImagination(matrix?: MindMatrix): {
    split: boolean;
    levels: {
        level: number;
        waves: number;
        receipt: string;
    }[];
    depth: number;
    tiniest: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function powerToAwaken(matrix?: MindMatrix): {
    alwaysCharged: boolean;
    awakens: boolean;
    charge: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function mindRefreshField(matrix?: MindMatrix): {
    refreshes: boolean;
    count: number;
    parts: {
        receipt: string;
        what: string;
        via: string;
        ok: any;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function imaginationIsAll(matrix?: MindMatrix): {
    all: boolean;
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
export declare function quantumMindGapsFromBeyond(matrix?: MindMatrix): {
    open: boolean;
    frontiers: number;
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
export declare function lockingFoldersChangesMindToQuantum(matrix?: MindMatrix): {
    quantized: boolean;
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
export declare function mindsRealiseByObservingPath(matrix?: MindMatrix): {
    realise: boolean;
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
export declare function folderPathsFormIndexOfBookOfLife(matrix?: MindMatrix): {
    seen: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
