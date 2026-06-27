import type { MindMatrix, ConceptCommandName, ConceptCommandResult, DiamondKind, DimensionalGapKind, DiamondCompletenessReport, StaticPage } from '../../wind/types';
export { cssIsIChingComputed, ichingTokens, ichingTokensCss, scanCssForHardcoded, cssMathProvenByMath, ICHING_NUMBERS } from '../../earth/architecture';
export { merkleProof, verifyMerkleProof, quantumNetworkHashing, atomInclusionProof, quantumProofs, quantumSolutions, solutions } from '../../lake/ledger';
export { buildMatrix, verifyRoot, reciprocity, entropy, concentration, coherenceAnomaly, coverage, consciousness, isPerfectlySelfModeling, proofReport, repositoryApi, doubleTorusWire, circulateDoubleTorus } from '../compute';
export { analogSpeech, areaLabel, attestation, bulgarianAncientCivilisations, bulgarianEthnogenesis, bulgarianHeritage, bulgarianHistory, chakrasAura, charUuids, computerDesign, deviceSensors, dimensions, dualities, efficiency, emfApplications, frequencyToLight, A432_HUE, GOLDEN_ANGLE, lobeHues, fuseTeslaPatents, geneticLinksChallengeHistory, glagoliticBulgarianReception, harmonicBands, herbalApis, humanDesign, humanize, iconGlyphs, iconSeal, lawfulHarmonise, lawfulImagine, lawfulSucceed, multidimensional, natureCommons, natureLaw, natureReview, openGraph, patentDiscovery, plainLanguage, playLearn, publicFrequencyApis, typographySeo, wordUuids, yinYang } from '../../quantum/lake/icons';
export { quantumSitemap, professionals, siteConfig, staticPages, crawlerKnowledge, monographTemplate, monographAsScientificPaper } from '../../wind/site';
export { a432, a432Default, agentObserve, ancientTech, animationEngineLivesInZero, artistPalette, autoSpeech, buildEnforcementPipeline, bulgarianRosettaContentAddressUnlocksAll, calligraphyStroke, chess358, colorFromSound, commitsAuthoredByUserOnly, complete358NextTrinity, contentAddressingHasRealPrecedent, crossFoldTrinity, cryptographyComparison, ddosActivatesHealingFusion, design358, distributedCompute, doubleTorusCompost, doubleTorusMath, electricalGrid, energyConserve, energyFuse, energyMeasure, enforcementTrinity, fairLife, findQuestions, fold358853, fuseDevices, fuseUxSensors, fusionReactor, gatesShiftToNewHarmonic, geometry358, glagolitic, glagoliticAlphabetDecoded, glagoliticGlyph, glagoliticHomeFromEnglish, goldenRatio, hammingThreeParityAddressesError, healingInner, healingOuter, humanise, inHouse, intelligenceComparison, inverseShiftConsciousness, jsonLdPathRules, kidsDefineEducation, kidsExplore, measureProse, metatronsCube, methodFusion, moviesNativeFormat, music358, oneOpenGraphAll, onlyVitePressApi, pairTrinityOpenGraph, patentAudit, patentReview, planetDescribesItself, planetIsComputable, plasmaContainment, quantumGreenPlanet, quantumSimulation, qubitTrinityPauliBloch, religionScienceSociety, repositoryLedger, securityScan, selfAddressed, selfDevelopment, selfInteraction, sidebarsFromVoid, siteRoutes, soldiersRestInPeace, sourceContribution, sustainableLiving, taxonomyIcons, teslaPatents, thriveEducation, tightenGatesTrinityWaves, tightenProse, torusUuid, transliterateMarkdownBody, trinityPyramidFusesDimensions, universalLanguage, utfAnalog, vortexStateSequence, whoUsedGlagolitic, zeroTokenPolicy } from '../../fire/li';
export { ancientCalendars } from '../../thunder/decode';
export { solarSystem } from '../../water/cosmos';
export declare function eightFoldBalance(matrix?: MindMatrix): {
    honest: boolean;
    distribution: {
        glyph: string;
        name: string;
        pages: number;
        components: number;
    }[];
    totalPages: number;
    pageImbalance: number;
    contentImbalance: number;
    componentImbalance: number;
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
export declare function threeEightFoldsTopNav(matrix?: MindMatrix): {
    split: boolean;
    topCategories: number;
    doorsPerCategory: number;
    topDoors: number;
    perAxis: number;
    cube: number;
    categories: {
        doors: number;
        receipt: string;
        axis: string;
        reading: string;
        glyph: string;
        lines: string;
        summary: string;
        summaryBg: string;
    }[];
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
export declare function iChingDomainMap(matrix?: MindMatrix): {
    aligned: boolean;
    domains: {
        glyph: string;
        pinyin: string;
        name: string;
        attribute: string;
        meaningEn: string;
        meaningBg: string;
        receipt: string;
        bits: number;
        module: string;
        dual: string;
        slugs: string[];
        summary: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function uniqueDiamondKinds(items: readonly DiamondKind[]): readonly DiamondKind[];
export declare function gapTargets(completeness: DiamondCompletenessReport): readonly {
    kind: DimensionalGapKind;
    target: string;
}[];
export declare function result(command: ConceptCommandName, ok: boolean, summary: string, data: unknown): ConceptCommandResult;
export type DeveloperCommandName = 'developer.learn.core' | 'developer.mind.matrix' | 'developer.consciousness.vector' | 'developer.repository.api' | 'developer.proof.verify' | 'developer.site.manifest';
export interface DeveloperCommandResult {
    readonly command: DeveloperCommandName;
    readonly ok: boolean;
    readonly uuid: string;
    readonly summary: string;
    readonly data: unknown;
}
export interface DeveloperLesson {
    readonly name: string;
    readonly source: string;
    readonly command: DeveloperCommandName;
    readonly lesson: string;
    readonly appliedAs: string;
    readonly uuid: string;
}
export interface DeveloperLearning {
    readonly root: string;
    readonly receipt: string;
    readonly lessons: readonly DeveloperLesson[];
    readonly invariant: boolean;
    readonly statement: string;
}
export declare function developerLesson(name: string, source: string, command: DeveloperCommandName, lessonText: string, appliedAs: string): DeveloperLesson;
export declare function emergentDimensions(matrix?: MindMatrix): {
    hold: boolean;
    count: number;
    emerged: number;
    folded: boolean;
    open: string[];
    dimensions: {
        d: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export interface JsonLdPageIdentity {
    readonly path: string;
    readonly relativePath: string;
    readonly title: string;
    readonly description: string;
    readonly frontmatter: Record<string, unknown>;
    readonly site: {
        readonly en: string;
        readonly bg: string;
        readonly descriptionEn: string;
        readonly descriptionBg: string;
    };
}
export declare function enforcementLawFabric(matrix?: MindMatrix): {
    enforced: boolean;
    falsifiable: boolean;
    count: number;
    laws: {
        receipt: string;
        law: string;
        declared: boolean;
        holds: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function modelSeal(matrix?: MindMatrix, opts?: {
    tripwire?: boolean;
    tripwireOnly?: boolean;
}): {
    passed: boolean;
    failures: {
        label: string;
        index: number;
    }[];
    gateCount: number;
    okCount: number;
    commandTotal: number;
    dimensions: number;
    open: string[];
};
export declare function enforcementPipelineComplete(matrix?: MindMatrix): {
    complete: boolean;
    count: number;
    gates: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare const SITE_LOCALES: ({
    code: string;
    label: string;
    lang: string;
    path: string;
    slugPath: string;
    name: string;
    type: "root";
    ogLocale: string;
} | {
    code: string;
    label: string;
    lang: string;
    path: string;
    slugPath: string;
    name: string;
    type: "locale";
    ogLocale: string;
})[];
export { localeNavLinks, localePath, localePaths, localeSidebarKeys, vitepressLocaleLink, localizeMonolingual } from '../../wind/site';
export type { LocaleName, VitePressLocaleKey } from '../../wind/site';
export declare function componentPages(matrix?: MindMatrix): (StaticPage & {
    proof: string;
})[];
export type CorpusKind = 'papers' | 'references' | 'diamonds';
export declare function essentialKernel(matrix?: MindMatrix): {
    kernel: boolean;
    remains: string[];
    obsolete: string[];
    added: string[];
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
export interface WiredPath {
    slug: string;
    titleEn: string;
    titleBg: string;
    hue: number;
    score: number;
    shared: string[];
}
export interface WiredGateway {
    slug: string;
    titleEn: string;
    titleBg: string;
    realm: string;
    glyph: string;
    hue: number;
}
