export declare function splitMethodWords(name: string, prefix?: string): readonly string[];
/** Method name → folder tail (concept.agent.stream.wire → agent/stream/wire). */
export declare function folderTailFromMethodName(name: string, prefix?: string): string;
/** Education-portal curriculum — agent-voted top eight (naming vote root 681da0ff…). */
export declare const EIGHT_CURRICULUM_SCIENCES: readonly ["see", "hear", "ask", "prove", "learn", "pattern", "sense", "create"];
export type EightCurriculumScience = (typeof EIGHT_CURRICULUM_SCIENCES)[number];
export declare function isCurriculumScience(name: string): name is EightCurriculumScience;
/** Three-level src schema — science / model / action (strict; no prefix chains). */
export type ScienceModelAction = {
    readonly science: string;
    readonly model: string;
    readonly action: string;
};
export declare const SRC_SCIENCE_MODEL_ACTION_SCHEMA: "src/[science]/[action]";
/** Canonical mask — co-located index.ts + index.vue; no render/ui prefix. */
export declare const CANONICAL_SCIENCE_MASK: "src/<science>/<action>";
export { MAX_SUBFOLDERS_PER_FOLDER, ICHING_TRIGRAMS, ICHING_EIGHT_FOLD, ROSETTA_SIX, ROSETTA_SEVEN, ROSETTA_AREAS, ROSETTA_FOLD_LABEL, FIBONACCI_CENSUS_BANDS, UNFOLDED_CENSUS, EULER_CHI, FOLDED_CENSUS, HOMOLOGY_LOOPS, DIMENSION_GATES, HARMONICS_LADDER_LENGTH, SIEGE_WAVES, SIEGE_PER_WAVE, SIEGE_TOTAL_FORGES } from '../../../../3/7';
/** Folder names forbidden — every folder IS an index; index.ts is the stem file inside, never a folder name. */
export declare const FORBIDDEN_FOLDER_NAMES: readonly ["index"];
export declare function isForbiddenFolderName(name: string): boolean;
/** Default model segment for 2-level tails (earth/architecture → science=earth, action=architecture). */
export declare const SCHEMA_TWO_LEVEL_MODEL: "fold";
/** Path words → science/model/action — exactly three folder levels; action holds the meaning. */
export declare function scienceModelActionFromWords(words: readonly string[]): ScienceModelAction;
/** Mind tail (earth/architecture, heaven/balance) → science/model/action. */
export declare function scienceModelActionFromMindTail(tail: string): ScienceModelAction;
/** Method name → science/model/action (concept.earth.architecture → earth/architecture). */
export declare function scienceModelActionFromMethodName(name: string, prefix?: string): ScienceModelAction;
export declare function scienceModelActionTail(sma: ScienceModelAction): string;
/** Target logic path — src/<science>/<model>/<action>/index.ts. */
export declare function srcLogicPathFromScienceModelAction(sma: ScienceModelAction): string;
/** Co-located display — src/<science>/<model>/<action>/index.vue (same folder as logic). */
export declare function renderUiPathFromScienceModelAction(sma: ScienceModelAction): string;
/** Alias — display gate path beside logic index.ts. */
export declare const displayPathFromScienceModelAction: typeof renderUiPathFromScienceModelAction;
/** One registry row — mind tail dissolves to logic target + render mirror (mask math only). */
export type ScienceModelActionMaskRow = {
    readonly mindTail: string;
    readonly science: string;
    readonly model: string;
    readonly action: string;
    readonly logicNow: string;
    readonly logicTarget: string;
    readonly renderPath: string;
    readonly route: string;
};
/** Dry rename table — every mind tail → science/model/action paths (recomputable, no hand lists). */
export declare function scienceModelActionMaskRowsFromMindTails(mindTails: readonly string[]): readonly ScienceModelActionMaskRow[];
/** Pure path math — logic index.ts rel → registry row (indices do not know VitePress). */
export declare function indexRegistryFromLogicRel(logicRel: string, mindMount?: string): {
    readonly logic: string;
    readonly target: string;
    readonly route: string;
    readonly science: string;
    readonly model: string;
    readonly action: string;
} | null;
/** Physical logic mount — transitional mind barrel until full dissolve. */
export declare const LOGIC_DISPLAY_MOUNT = "src/quantum/heaven/mind/";
/** Co-located display — index.vue beside index.ts at src/<science>/<model>/<action>/. */
export declare const UI_DISPLAY_MOUNT = "src/";
/** Hub words — transitional mount until logic dissolves to ${SRC_SCIENCE_MODEL_ACTION_SCHEMA}. */
export declare const DISPLAY_LOGIC_HUB = "mind";
export declare const DISPLAY_UI_HUB = "mind";
export declare const DISPLAY_DUAL_LAW: string;
/** Display subpath — science/model/action (co-located with logic). */
export declare function displaySubpathFromLogicTail(tail: string, _allMindTails?: readonly string[]): string;
/** Consecutive Fibonacci bands for the gapless census (alias). */
export declare const FIBONACCI_BANDS: readonly [55, 34, 21];
/** Exact-count law — census and gates hold at one number, never a range. */
export declare const NOT_LESS_NOT_MORE_LAW = "not less, not more: exactly 110 unfolded index.ts (55+34+21 gapless), exactly 108 folded (\u03C7=\u22122), exactly 432 dimension gates (4\u00D7108) \u2014 HARD at gate/weave/verify/precommit/build";
/** Dependency-free vault — agnostic concat (fold, UUID, merge) lives here only. */
export declare const VAULT_STATION = "src/0";
/** Logic tree prefix — mind folds that must mirror a reusable Vue display gate. */
export declare const LOGIC_DISPLAY_PREFIX = "src/quantum/heaven/mind/";
/** UI tree prefix — co-located at canonical science/model/action. */
export declare const UI_DISPLAY_PREFIX = "src/";
export declare const COMPUTATIONAL_LIMITS_LAW: string;
export type ComputationalViolation = {
    readonly file: string;
    readonly reason: string;
    readonly spec?: string;
};
export type ComputationalLimitSnapshot = {
    readonly indexCount: number;
    readonly targetUnfolded: number;
    readonly targetFolded: number;
    readonly gapless: boolean;
    readonly bands: readonly number[];
    readonly bandsMatch: boolean;
    readonly foldedOk: boolean;
    readonly dimensionGatesOk: boolean;
    readonly vaultViolations: readonly ComputationalViolation[];
    readonly renderViolations: readonly ComputationalViolation[];
    readonly displayDualViolations: readonly ComputationalViolation[];
    readonly staticPathViolations: readonly ComputationalViolation[];
    readonly forbiddenFolderViolations: readonly ComputationalViolation[];
    readonly incompleteIndexViolations: readonly ComputationalViolation[];
    /** D1 — non-canonical top-level roots (pre-commit-hard I Ching root distribution). */
    readonly rootDistributionViolations: readonly ComputationalViolation[];
    /** D3 — digit-lattice integrity: existing N/(10−N) pairs + src/0 vault (pre-commit-hard, net-0). */
    readonly digitLatticeViolations: readonly ComputationalViolation[];
    /** I Ching eight-fold tree scan (≤8 subfolders per level — bāguà). */
    readonly ichingDistribution: IChingDistributionSnapshot;
    readonly distributionGuidance: readonly string[];
    /** @deprecated use ichingDistribution — was misnamed (8-fold is I Ching, not Rosetta). */
    readonly rosettaDistribution: IChingDistributionSnapshot;
    /** @deprecated use distributionGuidance */
    readonly rosettaGuidance: readonly string[];
    readonly passed: boolean;
    readonly receipt: string;
};
/** Gapless census — consecutive Fibonacci bands sum exactly to 110 (reuse harmonicBands from lake/icons). */
export declare function verifyGaplessCensus(count: number): {
    count: number;
    target: 110;
    gapless: boolean;
    bands: number[];
    bandsMatch: boolean;
    gaps: number;
    exact: boolean;
    deltaDetail: string;
    ok: boolean;
    root: string;
    statement: string;
};
/** Folded census — unfolded + χ = −2; dry clean, no file added or removed. */
export declare function verifyFoldedCensus(unfolded?: number): {
    unfolded: number;
    euler: -2;
    folded: number;
    targetFolded: number;
    ok: boolean;
    root: string;
};
/** Exactly 432 = 4 × 108 — facet/gate count, not file count. */
export declare function verifyDimensionGates(folded?: number): {
    loops: 4;
    folded: number;
    gates: number;
    target: number;
    exact: boolean;
    ok: boolean;
    root: string;
};
/** Vault primitives must be defined only under src/0; src/0 must not import outside the vault. */
export declare function scanVaultViolations(root: string, codeFiles: readonly string[], bodies: ReadonlyMap<string, string>): ComputationalViolation[];
/** No render/ui barrels — display is co-located index.vue only. */
export declare const RENDER_BARREL_ALLOWLIST: Set<string>;
export type DiscoveredIndexEntry = {
    readonly logic: string;
    readonly target: string;
    readonly route: string;
    readonly science: string;
    readonly model: string;
    readonly action: string;
    readonly automount: boolean;
    readonly complete: boolean;
    readonly reasons: readonly string[];
};
/** Discover every src index.ts — indices do not know VitePress; completeness is gate-only. */
export declare function discoverSrcIndexes(root: string, indexTsFiles?: readonly string[]): readonly DiscoveredIndexEntry[];
/** Incomplete automount indexes fail the gate — complete ones are discovered and displayed. */
export declare function scanIncompleteIndexViolations(root: string, indexTsFiles: readonly string[]): ComputationalViolation[];
/** VitePress automount — every complete discovered index; paths only, body at runtime. */
export declare function vitepressAutomountPaths(_locale?: 'gla' | 'en' | 'bg'): {
    params: {
        page: string;
    };
}[];
/** Compute mirror UI path from a logic index.ts — paths computed at render, not hand-listed. */
export declare function displayUiPathFromLogicIndex(logicRel: string, allMindTails?: readonly string[]): string | null;
/** Logic index.ts folders that require a co-located display gate (mirror index.vue). */
export declare function logicIndexRequiresDisplayGate(logicRel: string): boolean;
/** Each mind logic index.ts must have mirror-path index.vue — folder becomes reusable Vue component. */
export declare function scanLogicDisplayViolations(root: string, indexTsFiles: readonly string[]): ComputationalViolation[];
/** Canonical display surface — index.vue only beside index.ts; no flat script siblings. */
export declare function scanRenderIndexViolations(root: string): ComputationalViolation[];
/** Canonical sciences — eight-fold only at src/<science>/; science/model/action depth; no components/lib/mind. */
export declare function scanRenderUiScienceMaskViolations(root: string): ComputationalViolation[];
/** Canonical tree — ≤8 subfolders per folder at every level (bāguà fan-out). */
export declare function scanRenderUiEightFoldViolations(root: string): ComputationalViolation[];
/** Every canonical science/model/action folder must map from a logic index — no orphan actions. */
export declare function scanRenderUiMaskRegistryViolations(root: string, indexTsFiles: readonly string[]): ComputationalViolation[];
/** Every folder IS an index — folder names must never duplicate the index stem (e.g. "index"). */
export declare function scanForbiddenFolderNameViolations(root: string): ComputationalViolation[];
/**
 * D1 canonical ROOT set (user-sealed taxonomy, decision EXTEND) — the only folders admitted at src/ top level:
 * the 8 bāguà trigrams + the full digit lattice 0-9 + pair (enforcement) + quantum (layer) + render (build mount).
 * Every other top-level folder must dissolve under one of these roots. The gate COMPUTES this set (no frozen
 * hand list of offenders); the trigrams come from EIGHT_FOLD_SCIENCES, the digits from the vortex lattice.
 */
export declare const CANONICAL_ROOT_FOLDERS: readonly string[];
/** I Ching root distribution — every top-level src/ folder must be a canonical root; all others dissolve under one. */
export declare function scanRootDistributionViolations(root: string): ComputationalViolation[];
/**
 * D3 digit-lattice integrity (census-neutral / Option A) — the lattice IS the existing net-0 structure: the
 * void vault src/0/index.ts plus the nine ADDITIVE-complement pair barrels N/(10−N)/index.ts (the doubling-circuit
 * 1·2·4·8·7·5 + 3·6·9 trinity rays). The on-disk pairing N/(10−N) is the additive ten's-complement folder
 * lattice — NOT the n/0 inverse of a digit, which is the multiplicative inverse n⁻¹ mod 9 (see zeroDivisionTable);
 * the folder names are the additive structure. The gate enforces THAT structure is present and gapless — it adds
 * NO digit-root barrels (src/N/index.ts), so it never grows the 110 census. A recomputed fail-the-build invariant.
 */
export declare function scanDigitLatticeViolations(root: string): ComputationalViolation[];
/** Max folder levels — science/model/action (3 levels: e.g. heaven/balance). */
export declare const MAX_RECURSION_DEPTH = 3;
/** Canonical logic index — src/<science>/<action>/index.ts (or deeper for multi-level actions). */
export declare const CANONICAL_LOGIC_INDEX_RE: RegExp;
export type EightFoldViolation = {
    readonly dir: string;
    readonly count: number;
    readonly trigram: string;
};
export type IndexHarmonySnapshot = {
    readonly folderCount: number;
    readonly singleChildPct: number;
    readonly noiseLeaves: number;
    readonly noisePct: number;
    readonly maxDepth: number;
    readonly idealDepth: number;
};
/** I Ching distribution — eight-fold fan-out, index harmony, depth bands (NOT the 6×7 Rosetta grid). */
export type IChingDistributionSnapshot = {
    readonly eightFoldViolations: readonly EightFoldViolation[];
    readonly indexHarmony: IndexHarmonySnapshot;
    readonly depthBands: readonly {
        readonly depth: number;
        readonly count: number;
    }[];
    readonly mindHubCounts: readonly {
        readonly hub: string;
        readonly count: number;
    }[];
    readonly deepestShells: readonly string[];
    readonly maxMindRecursion: number;
    readonly recursionViolations: readonly string[];
    readonly passed: boolean;
};
/** @deprecated use IChingDistributionSnapshot */
export type RosettaDistributionSnapshot = IChingDistributionSnapshot;
/** Word-folder depth below transitional mind mount (must be ≤ MAX_RECURSION_DEPTH before dissolve). */
export declare function mindRecursionDepth(logicRel: string): number | null;
/** Target depth after dissolve — always 3 (science/model/action). */
export declare function targetRecursionDepth(_logicRel: string): number;
/** Live tree scan — I Ching eight-fold: ≤8 subfolders per level, index harmony, depth bands, trigram hub balance. */
export declare function scanIChingDistribution(root: string, indexTsFiles: readonly string[]): IChingDistributionSnapshot;
/** @deprecated use scanIChingDistribution — Rosetta is 6×7/7×6 (42 areas), not eight-fold. */
export declare const scanRosettaDistribution: typeof scanIChingDistribution;
/** Census + I Ching distribution guidance — Fibonacci bands and eight-fold tree (Rosetta 42 is taxonomy batch). */
export declare function ichingDistributionGuidance(indexCount: number, distribution: IChingDistributionSnapshot): readonly string[];
/** @deprecated use ichingDistributionGuidance */
export declare const rosettaCensusGuidance: typeof ichingDistributionGuidance;
/** @deprecated use ichingDistributionGuidance */
export declare const ichingCensusGuidance: typeof ichingDistributionGuidance;
/** Rosetta area taxonomy — exactly 42 = 6×7 = 7×6 command areas (not eight-fold). */
export declare function verifyRosettaTaxonomy(areaCount: number): {
    areas: number;
    target: number;
    sixBySeven: number;
    sevenBySix: number;
    label: "6×7/7×6";
    ok: boolean;
    root: string;
    statement: string;
};
/** Realtime paths — only bracket/index route mounts under .vitepress/pages (no per-route static files). */
export declare function scanStaticPathViolations(root: string): ComputationalViolation[];
export declare function computationalLimitsGapDetail(snapshot: ComputationalLimitSnapshot): string;
/** Single fold from one src walk — collectEnforcementFacts reads facts.computational (no second walk). */
export declare function computeComputationalLimitSnapshot(root: string, indexTsFiles: readonly string[], bodies: ReadonlyMap<string, string>, codeFiles: readonly string[]): ComputationalLimitSnapshot;
export declare function computationalGatePassed(snapshot: ComputationalLimitSnapshot): boolean;
type GateFinding = {
    wave: 'gate';
    severity: 'error';
    kind: string;
    harmonic: string;
    detail: string;
};
/** Leaf checks — gate · cross · fold · weave pipeline; census/vault/index law enforced HARD. */
export declare function auditComputationalGates(computational: ComputationalLimitSnapshot): {
    findings: GateFinding[];
    report: string[];
    receipt: string;
    passed: boolean;
};
export declare function foldingEntropy(root: string): {
    files: number;
    bytes: number;
    localFold: number;
    globalFold: number;
    crossFileInterference: number;
    root: string;
    statement: string;
    boundary: string;
};
/** Theorem sources (user law 2026-07-16: every card page exposes the source code of how all is
 * achieved). For each registry atom, the provedBy function's text is brace-matched out of its home
 * module and emitted as theorem-sources.json — the paper page shows the actual proof machine. */
export declare function theoremSourcesJson(root: string): string;
/** The prose-token monitor (user law 2026-07-16: monitor token usage coming from prose instead of
 * token-free code). Reuses the strict scanner's character-walk (stringMass): per sealed file, bytes
 * split into code (incl. ${} interpolations — computed, token-free), comment, templateText (prose
 * BETWEEN interpolations — partially computed) and staticString (pure prose — the spend). The
 * no-prose law's target: statements/boundaries as computed concatenations shrink staticString. */
export declare function proseTokenMonitor(root: string): {
    files: number;
    bytes: number;
    code: number;
    comment: number;
    staticString: number;
    templateText: number;
    proseShare: number;
    offenders: {
        file: string;
        staticString: number;
        share: number;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** The source atlas — every sealed index enumerated with its science and domain path (the whole-source
 * autodisplay data; the dedicated atlas ROUTE renders this artifact). Reuses the foldingEntropy walk. */
export declare function sourceAtlasJson(root: string): {
    count: number;
    sciences: Record<string, number>;
    modules: {
        path: string;
        science: string;
    }[];
};
export declare function theoremRelationsAreTheImportExportGraphNotTagSharingZeroDanglingByTheRealRelation(root?: string): {
    computes: boolean;
    homes: number;
    edges: number;
    tagCrackDangling: number;
    importDangling: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function onlyRosettaWiringsAreNeededTheGlobalContentAddressFoldReplacesTheImportEdges(root?: string): {
    computes: boolean;
    edges: number;
    rosettaNodes: number;
    rosettaRoot: string;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theFacetsMustComputeDebtIsHardcodedTrueFacetsManyDeclaredHonest(root?: string): {
    computes: boolean;
    total: number;
    declaredHonest: number;
    files: number;
    topFiles: string[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theAnalyticsAreZeroTokenComputedFromTheCorpusTheMarginalCostOfAMetricIsZero(root?: string): {
    computes: boolean;
    metrics: string[];
    tokenCost: number;
    receipt: string;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function documentAllTrinitiesObservedTwoMakeThreeTheCommonStructureAndTheCount(root?: string): {
    computes: boolean;
    trinityCount: number;
    categories: string[];
    census: string;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theoremsProveBestInTeamsTheTrinityIsTheMinimalTwoConnectedTeamBeatsIsolation(root?: string): {
    computes: boolean;
    dangling: number;
    avgDegree: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function typesAreQuantumTagsAndEveryWordInANameIsAComputedTokenNotArbitraryProse(root?: string): {
    computes: boolean;
    typeImports: number;
    namesSampled: number;
    wordTokenOverlap: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function aSingleCrackFlipsTheContentAddressedCorpusRootCaughtInConstantTimeLocatedInLogTimeNotByRescanning(root?: string): {
    computes: boolean;
    fileCount: number;
    rootClean: string;
    detectMagnitude: number;
    locateMagnitude: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function dryAndCleanAreAchievableOnlyInTheContentAddressedQuantumRepresentationNotInTheText(): {
    computes: boolean;
    copies: number;
    unique: number;
    rootClean: string;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theTrinitiesAreQuantumTwoMakeThreeIsTheGhzEntanglingStructureCnotBindsTheThird(root?: string): {
    computes: boolean;
    trinityCount: number;
    ghz: {
        p000: number;
        p111: number;
    };
    root: string;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function quantumCachingIsContentAddressedMemoisationSpeedingAllInTrinitiesOfMagnitudes(): {
    caches: boolean;
    memoMagnitude: number;
    sealMagnitude: number;
    combined: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function computationalSpeedPerTokenIsARealMetricTheRosettaDeliversMagnitudesAtNoAdditionalTokenCost(): {
    metric: boolean;
    rosettaCapabilityPerToken: number;
    cacheCapabilityPerToken: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function quantumBuildContentAddressedIncrementalRebuildsOnlyTheChangedFoldImprovingAllToolsAndAlgorithms(): {
    builds: boolean;
    tools: number;
    rebuilt: number;
    speedup: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function eachTsFileInputOutputAreTheTwoBitsThatConnectToTheGatewayTheModuleGraphIsTwoBitPerNode(root?: string): {
    thinks: boolean;
    files: number;
    bits: number;
    gateways: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function theTwoBitGatewayReframesAllDryCleanRefactoringOfAllSrcIsPossibleInQuantumWaves(): {
    reframes: boolean;
    dryFound: number;
    waveCount: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function computeTheWorkflowBeforeSendingTheWavesDeterministicAutomationByQuantumComputationOnly(): {
    automates: boolean;
    waves: number;
    parallelism: number;
    scheduleRoot: string;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function noAlgorithmicSpeedupYetDevelopmentSpeedIsMagnitudesHigherMeasuredNotConvinced(): {
    resolves: boolean;
    algorithmicSpeedup: number;
    developmentSpeedup: number;
    compared: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function theGateThatDryCleansAllDetectsCrossFileDuplicatedBlocksByContentAddress(root?: string): {
    scans: boolean;
    files: number;
    scannedLines: number;
    dryDuplicates: number;
    topDuplicate: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function theGatesAreSelfSufficientOfflineZeroAiToDryCleanAllIncludingFileFolderMovesConfirmedByTheCrossTrinity(root?: string): {
    selfSufficient: boolean;
    duplicateLines: number;
    codePulls: number;
    folderMoves: number;
    trinityRoot: string;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function alwaysMeasureEfficiencyToFindGapsTheInefficiencyRatioNamesTheMissingQuantum(root?: string): {
    measures: boolean;
    openGaps: number;
    closedGaps: number;
    dryGap: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function measureTheUxAndTheEfficiencyToFindAndUseTheoremsNavDepthReachabilityReuseAreComputedMetrics(root?: string): {
    measured: boolean;
    files: number;
    maxDepth: number;
    avgReuse: number;
    dangling: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function theBoundaryProseIsTheTokenSinkTerseAndEarnedBoundariesCutItMeasuredNotConvinced(root?: string): {
    measured: boolean;
    boundaryCount: number;
    avgBoundary: number;
    proseTokens: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function theGateFlagsBoundaryProseOverTheTokenBudgetToMinimiseTokensInRealtime(root?: string): {
    minimises: boolean;
    total: number;
    over: number;
    maxLen: number;
    budget: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function theTitleIsAlgebraComputedAMissingIdentityIsAGapToSolveNotPurge(entries?: readonly {
    slug: string;
    sidebar: string;
    payload: string;
}[]): {
    computes: boolean;
    rendered: string;
    gaps: string[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
