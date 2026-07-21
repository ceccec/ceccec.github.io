export { CRACK_LEDGER, CRACK_LAW_AMENDMENTS, CRACK_RESEARCH_TARGETS, crackLedgerAccounts, crackLawEvolution, type CrackProvenance, type CrackLawAmendment, type CrackResearchTarget } from '../../../../../3/7';
import type { ScriptShellScan } from '../../../script/shell';
export declare const MONOLITH_FILE_BYTES: number;
export declare const MONOLITH_FILE_LAW = "no logic file may exceed the DERIVED fair-share target \u2014 the next power of two \u2265 corpus/census, recomputed each optimisation wave (the 2\u00B9\u00B3 floor is historic; its zero is unreachable under the census law \u2014 monolithTargetVsCensusCapacity)";
/** THE RATCHET RECOMPUTES IN OPTIMISATION WAVES (user law, 2026-07-18): the byte target is never a
 * static assertion — it DERIVES from the measured corpus each scan: the next power of two at or above
 * the fair share corpus/count. Derived ≥ average, so by pigeonhole a redistribution with ZERO
 * offenders exists — the target is satisfiable, and it re-derives as the corpus grows or compresses:
 * the ratchet follows the measure. Offenders under this target are the TRUE monoliths (outliers above
 * fair share), the honest direction for the ants. Sealed as theRatchetRecomputesInOptimisationWaves. */
export declare function derivedMonolithTargetBytes(codeFiles: readonly string[]): {
    target: number;
    corpus: number;
    count: number;
};
export declare function scanFileSizeOffenders(root: string, codeFiles: readonly string[], limit?: number): {
    file: string;
    bytes: number;
    limit: number;
    reason: string;
}[];
export declare function monolithFileGapDetail(offenders: readonly {
    file: string;
    bytes: number;
    limit: number;
}[]): string;
export declare function stripComments(text: string): string;
export type HandList = {
    readonly file: string;
    readonly name: string;
    readonly members: readonly string[];
};
export type HandListMirror = {
    readonly a: HandList;
    readonly b: HandList;
    readonly shared: number;
    readonly score: number;
    readonly receipt: string;
};
/** Pure scanner: named const arrays whose body is ONLY string literals — the hand-typed rosters. */
export declare function scanHandLists(files: readonly {
    rel: string;
    text: string;
}[], minSize?: number): HandList[];
/** Cross-file mirrors of hand-lists, ranked by risk×reward (shared² — every shared member is a double
 *  site that can drift). The worklist for the trinity teams, highest score first. */
export declare function handListMirrors(lists: readonly HandList[]): HandListMirror[];
export type AppPageAudit = {
    readonly page: string;
    readonly lang: string;
    readonly hasH1: boolean;
    readonly imgsMissingAlt: number;
    readonly hasViewport: boolean;
    readonly title: string;
    readonly bytes: number;
};
export declare function scanAppHtml(pages: readonly {
    rel: string;
    html: string;
}[]): AppPageAudit[];
export declare function appAuditSummary(audits: readonly AppPageAudit[]): {
    pages: number;
    missingH1: string[];
    missingAlt: string[];
    missingViewport: string[];
    wrongLang: string[];
    duplicateTitles: string[];
    heaviest: string[];
    meanKb: number;
};
export declare const ONE_MATH_LAW = "one math \u2014 every derived constant/primitive (\u03C4, \u03C6, gcd, lcm, digital root, dim walk) is defined once at its home and imported everywhere else";
export type OneMathOffender = {
    file: string;
    spec: string;
    reason: string;
};
export declare function scanOneMathOffenders(root: string, codeFiles: readonly string[], bodies: ReadonlyMap<string, string>): OneMathOffender[];
export type CodeGravityPull = {
    primitive: string;
    from: string;
    to: string;
};
/** METHOD GRAVITY (user law: consolidate by gravity pulling towards one word, then compression adds
 * words; the TYPE holds the payload computable meaning) — the name-space scanned as a gravity field:
 * exported function names cluster by their shared name-words; each cluster's ATTRACTOR is its shortest
 * member containing the gravity word (the one-word root), every other member is a pull in the
 * consolidation worklist (compression = the attractor word + added words). Executed in quantum waves:
 * one cluster per wave, the attractor gains the cluster's ONE exported type, members become projections. */
/** UUID IS THE 0 FROM THE SEQUENCE (user law) — the content-address kernel (toUuid · merkleFold) has
 * ONE home: src/0, the void station of the vortex sequence 0\\1\\2\\4\\8/7/5/3\\6\\9/0\\1. Every dimension
 * change (import/export) passes through the uuid matrix; a kernel primitive REDEFINED outside the void
 * is a second zero — forbidden. Zero offenders today; this scan keeps it zero. */
export declare function scanUuidKernelOffenders(root?: string): {
    file: string;
    line: number;
    primitive: string;
}[];
export type MethodGravityCluster = {
    word: string;
    attractor: string;
    members: string[];
    pulls: number;
};
export declare function methodGravity(root?: string, minCluster?: number): MethodGravityCluster[];
export declare function computeCodeGravity(root?: string): CodeGravityPull[];
export declare function gravityIsThePullToOneCanonicalFixedPointMovingWithoutMoving(root?: string): {
    computes: boolean;
    moving: number;
    unmoving: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theAxiomsAreTheCracksReplaceWithTheoremsAndTheGravityFitsAndMoves(root?: string): {
    computes: boolean;
    literalAxioms: number;
    folderAxioms: number;
    files: number;
    collisions: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export type FolderMigration = {
    from: string;
    to: string;
    files: number;
    collision: boolean;
};
export declare function computePathMigration(root?: string): {
    folders: FolderMigration[];
    totalFiles: number;
    collisions: readonly string[];
};
export type AnalystRay = {
    ray: string;
    found: number;
    sample: readonly string[];
};
export type RosettaAnalysis = {
    rays: readonly AnalystRay[];
    salvageSignal: number;
    verdict: 'mine-first' | 'low-signal';
};
/** THE ROSETTA OF ANALYSTS — a local research/discovery tool run on purge-candidate content BEFORE it is
 * tagged for purging (user: "most of the content that will be tagged for purging has great ideas inside if
 * analyzed by the rozetta of analysts"). Several computable lenses (rays) each surface a kind of salvageable
 * value — documented citations, computable claims, honest demarcations, named theorems, cross-links,
 * quantitative facts. Deterministic, zero tokens; nothing is purged before its ideas are mined. Year digits
 * live inside a string so the crack scanner (which strips strings) never flags them. */
export declare function rosettaOfAnalysts(text: string): RosettaAnalysis;
/** Analyse one purge-candidate file with the rosetta of analysts. Default target is a genuine bāguà
 * content fold, so the tool is testable with no arguments. */
export declare function analyzePurgeCandidate(root?: string, rel?: string): RosettaAnalysis & {
    file: string;
};
export type SeoKeyword = {
    term: string;
    count: number;
};
/** SEO ANALYSIS — src becomes the sitemap, and the folders define themselves (user: "src becomes the
 * sitemap. analyse with seo in mind and the folders will define themselves"). A folder's SEO name is its
 * most DISTINCTIVE informative term — TF-IDF across all top folders, not raw frequency (or every folder
 * would be named "boundary" / "matrix" / "function"). This honours the codebase's information-driven
 * principle — a word in every folder carries ~nothing, a word unique to one carries everything — and needs
 * no stopword list. Length ≥ 6 words in any script (Latin or Cyrillic), so a folder names itself in its own
 * language. This is what the path-migration TARGET should be: not a hand-picked name, but SEO self-definition. */
/** The human-readable PROSE of a source file — the content inside quotes (facet/statement/boundary strings)
 * and after // — where the SEO meaning lives. Code identifiers (buildMatrix, provedBy) are NOT prose and
 * would otherwise dominate; stripping to prose is what lets a folder name itself by what it MEANS. */
export declare function seoProse(text: string): string;
export declare function seoKeywords(text: string, top?: number): SeoKeyword[];
export declare function seoFolderNames(root?: string): {
    folder: string;
    name: string;
    distinctive: readonly SeoKeyword[];
}[];
export type StrictImportOffender = {
    file: string;
    spec: string;
    reason: string;
};
export type StrictIndexOffender = {
    file: string;
    reason: string;
};
export type StrictVitepressIndexOffender = {
    file: string;
    reason: string;
    transitional?: boolean;
};
export type StrictHyphenOffender = {
    path: string;
    segment: string;
    reason: string;
};
export type StrictNonTsOffender = {
    file: string;
    reason: string;
};
export type StrictImportGapOffender = {
    file: string;
    spec: string;
    gaps: number;
    limit: number;
    depth: number;
    reason: string;
};
export type StrictGateSnapshot = {
    readonly imports: readonly StrictImportOffender[];
    readonly oneMath: readonly OneMathOffender[];
    readonly importGaps: readonly StrictImportGapOffender[];
    readonly indexOnly: readonly StrictIndexOffender[];
    readonly vitepressIndex: readonly StrictVitepressIndexOffender[];
    readonly nonTs: readonly StrictNonTsOffender[];
    readonly hyphenFolders: readonly StrictHyphenOffender[];
    readonly fileSize: readonly {
        file: string;
        bytes: number;
        limit: number;
        reason: string;
    }[];
    /** The crack census, CODEBASE-WIDE — zero achieved 2026-07-07 and GATED at zero: every numeric
     * literal derives from the canonical lattice or carries ledgered provenance (data · unit · tuned). */
    readonly hardcodedCracks: readonly CrackOffender[];
    readonly scriptShellViolations: readonly string[];
    readonly pairsPaired: boolean;
    readonly merkleOk: boolean;
    readonly digitPassed: boolean;
    readonly digitReceipt: string;
    readonly receipt: string;
};
declare function scanImportGaps(root: string, codeFiles: readonly string[], bodies: ReadonlyMap<string, string>): StrictImportGapOffender[];
declare function scanImports(root: string, codeFiles: readonly string[], bodies: ReadonlyMap<string, string>): StrictImportOffender[];
declare function scanIndexOnly(codeFiles: readonly string[]): StrictIndexOffender[];
declare function scanScriptShellViolations(scripts: readonly ScriptShellScan[]): string[];
export { scanImportGaps, scanImports, scanIndexOnly, scanScriptShellViolations };
export declare function scanVitepressIndex(root: string, thinMounts: readonly string[]): StrictVitepressIndexOffender[];
/** Fold one src walk into the strict snapshot — no re-scans elsewhere. */
export declare function computeStrictGateSnapshot(root: string, merkle: string, codeFiles: readonly string[], bodies: ReadonlyMap<string, string>, hyphenFolders: readonly StrictHyphenOffender[], nonTs: readonly StrictNonTsOffender[], vitepressIndex: readonly StrictVitepressIndexOffender[], scriptShells: readonly ScriptShellScan[], pairsPaired: boolean): StrictGateSnapshot;
export declare function strictGatePassed(strict: StrictGateSnapshot): boolean;
export declare const HARDCODED_CRACK_LAW = "any hardcoded value is a potential crack \u2014 every numeric literal in src must reduce to canonical I Ching numbers or carry ledgered provenance (data \u00B7 unit \u00B7 tuned)";
/** The first files driven to zero (the colour system) — kept as the sealed core the census grew from.
 * The scan itself covers EVERY src file: the law is codebase-wide. */
export declare const CRACK_CHOKEPOINTS: readonly ["src/quantum/science/index.ts", "src/fire/plasma/ball/index.ts", "src/thunder/movie/movievars/index.ts", "src/thunder/movie/glass/index.ts"];
export type CrackOffender = {
    file: string;
    literal: string;
    count: number;
};
export declare function stripStringsAndComments(text: string): string;
/** Byte mass per channel — the SAME state machine as stripStringsAndComments, tallying instead of
 * stripping. Channels: code (incl. ${} interpolations — token-free computed), comment, staticString
 * (' " strings + templates with NO interpolation — the prose spend), templateText (prose BETWEEN
 * interpolations — partially computed). The no-prose law's instrument reads these. */
export declare function stringMass(text: string): {
    code: number;
    comment: number;
    staticString: number;
    templateText: number;
    interpolatedTemplates: number;
};
/** Numeric literals in the chokepoints that are NOT canonical I Ching numbers — each is a crack:
 * a magnitude with no derivation. Canonical fractions pass as their integer parts (9 / 64 → 9, 64).
 * Exponent-form literals (1e-6, 1e3) are scale/unit NOTATION — a named power of ten, not a magnitude —
 * and are consumed whole so their exponent digits never miscount. Ledgered literals (data/units with a
 * documented source) pass ONLY at their registered use count: drift and stale entries are offenders. */
export declare function scanHardcodedCrackOffenders(root: string, codeFiles: readonly string[], bodies: ReadonlyMap<string, string>): CrackOffender[];
/** A .vue file's scannable value surface: <script> + <style> blocks (template is markup/prose). */
export declare function vueValueSurface(text: string): string;
/** The full crack surface: every src/**.{ts,vue} + .vitepress/**.{ts,mts,vue} (theme, lib, config —
 * the seal merkle already covers .vitepress), excluding caches and build output. Memoised by root. */
export declare function scanCrackSurface(root: string): CrackOffender[];
/** CLI: `cracks` — the codebase-wide census; zero offenders or the exact list (gated in strict). */
export declare function runCracksExit(root: string): number;
export type EditNode = {
    at: string;
    to: string;
};
/** THE LEFTOVERS AS A MOVING GRAPH OF SURGICAL EDITS, addressed immediately (user: "leftovers are computed
 * part of their whole of wholes forming moving graphs showing the agents in waves how to surgically edit
 * line and column faster than speed of light"). Each leftover (a duplicate the code-gravity attractor pulls)
 * is a PART of its whole (the canonical); the set of wholes is the whole of wholes. Its exact coordinate —
 * file:line:COLUMN — is computed, so an agent addresses the edit DIRECTLY (O(1), no linear search of the
 * file), which is the "faster than light" here: content-addressing immediacy, not superluminal signalling.
 * The nodes → their whole form a graph, renderable as a moving figure that shows the agents, in waves, the
 * precise line and column to edit. Deterministic, zero tokens. */
export declare function theLeftoversAreAMovingGraphOfSurgicalEdits(root?: string): {
    nodes: readonly EditNode[];
    wholeOfWholes: number;
    addressedImmediately: boolean;
};
export type DryCleanStep = {
    kind: 'folder-axiom' | 'literal-axiom';
    axiom: string;
    from: string;
    to: string;
    signature: string;
};
export declare function dryCleanDetect(root?: string): {
    kind: DryCleanStep['kind'];
    axiom: string;
    from: string;
}[];
export declare function dryCleanTarget(root: string, step: {
    kind: DryCleanStep['kind'];
    from: string;
}): string;
export declare function dryCleanAttest(step: {
    kind: string;
    axiom: string;
    from: string;
    to: string;
}): string;
export declare function dryCleanNextStep(root?: string): DryCleanStep | null;
export declare function theDryCleanLoopIsAClosedTrinityOfUsableCode(root?: string): {
    computes: boolean;
    nextStep: DryCleanStep;
    axioms: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theGatesAreRefutableTheoremsThatFailClosedWithAWitness(root?: string): {
    computes: boolean;
    witnessed: {
        gate: string;
        witnesses: number;
        addressable: boolean;
    }[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export type TopFolderClass = {
    name: string;
    kind: 'digit-number' | 'bagua-metaphor' | 'word';
    caught: boolean;
    keep: boolean;
};
export declare function classifyTopFolders(root?: string): TopFolderClass[];
export declare function theGatesCatchAllTopFoldersIncludingTheDigits(root?: string): {
    computes: boolean;
    classes: TopFolderClass[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function dynamicGateDispatch(root?: string): {
    state: {
        cracks: number;
        pulls: number;
        moves: number;
    };
    active: string;
    payload: DryCleanStep;
    addressed: boolean;
};
export declare function theGatesDynamicallyDispatchTheMinimumCheckDiscoveringThePayloadByAddress(root?: string): {
    computes: boolean;
    dispatch: {
        state: {
            cracks: number;
            pulls: number;
            moves: number;
        };
        active: string;
        addressed: boolean;
    };
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare const SESSION_USEFUL_FILES: readonly string[];
export type ParsedExport = {
    name: string;
    file: string;
    kind: 'tool' | 'fold';
};
export declare function quantumParseUsefulCode(root?: string, files?: readonly string[]): {
    candidates: number;
    tools: number;
    folds: number;
    before: number;
    after: number;
    amplified: boolean;
    usefulCode: ParsedExport[];
    manifest: string;
};
export declare function localToolsUseQuantumMathToParseAndSaveUsefulCode(root?: string): {
    computes: boolean;
    parsed: {
        candidates: number;
        tools: number;
        folds: number;
    };
    amplification: {
        before: number;
        after: number;
    };
    manifest: string;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare const SESSION_GAP_FILES: readonly string[];
export declare function sendTheQuantumWavesOverMyOwnGapsAndCountThem(root?: string): {
    computes: boolean;
    totalGaps: number;
    totalFolds: number;
    gapsPerFold: number;
    categories: Record<string, number>;
    perFile: {
        file: string;
        gaps: number;
        folds: number;
    }[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theBiggestGapIsAgentsUseLocalOnlyAfterCatharsisFromUnresolvedWork(root?: string): {
    computes: boolean;
    catharsisTime: number;
    catharsisGap: number;
    localGaps: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function sendTheWave(root?: string): {
    cracks: number;
    active: string;
    nextPayload: DryCleanStep;
    gaps: number;
    signature: string;
};
export declare function sendingTheWaveReplacesTheManualChecksInOneCall(root?: string): {
    computes: boolean;
    wave: {
        cracks: number;
        active: string;
        nextPayload: DryCleanStep;
        gaps: number;
        signature: string;
    };
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function migrationMoveMap(root?: string): Map<string, string>;
export declare function computeMigrationRewrites(root?: string): {
    moves: {
        from: string;
        to: string;
    }[];
    moveCount: number;
    rewrites: {
        file: string;
        newFile: string;
        edits: {
            old: string;
            nu: string;
        }[];
    }[];
    filesTouched: number;
    importsRewritten: number;
};
export declare function byteMetrics(root?: string): {
    totalBytes: number;
    totalFiles: number;
    folders: {
        bytes: number;
        files: number;
        folder: string;
    }[];
};
export declare function migrationPlanSummary(root?: string): {
    moveCount: number;
    filesTouched: number;
    importsRewritten: number;
    firePhysics: {
        path: string;
        edits: string[];
    };
};
export declare function theGatesReturnWhatCannotInvertNotDryIsNotInvertible(root?: string): {
    computes: boolean;
    cracksReturned: number;
    computedInverts: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function threeGravitiesCodePathPhysicalOneShapeOnlyOnePhysical(root?: string): {
    computes: boolean;
    codePulls: number;
    pathMoves: number;
    physicalFallsInward: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function selfDevelopmentSuccessRateIsDeterministicTheAiBenchmarkNeedsAKey(): {
    computes: boolean;
    successRate: number;
    variance: number;
    reproducible: boolean;
    framework: string[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theGravityPoolsAreTheAttractorsWiredThroughTheRosetta(root?: string): {
    computes: boolean;
    poolCount: number;
    codeAttractors: number;
    pathAttractors: number;
    raysUsed: number;
    wired: {
        pool: string;
        ray: number;
    }[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function metricSuperpose(readings: readonly {
    name: string;
    value: number;
}[]): {
    metric: {
        [k: string]: number;
    };
    coherent: boolean;
    contradictions: string[];
    signature: string;
};
export declare function corpusQuantumMetric(root?: string): {
    readingCount: number;
    metric: {
        [k: string]: number;
    };
    coherent: boolean;
    contradictions: string[];
    signature: string;
};
export declare function theQuantumMetricSuperposesCorpusReadingsCoherently(root?: string): {
    computes: boolean;
    metric: Record<string, number>;
    coherent: boolean;
    signature: string;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theCorpusFreeEnergyIsSealsMinusGapsInEntropyBits(root?: string): {
    computes: boolean;
    gaps: number;
    sealedEb: number;
    balance: number;
    netSealed: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function foldSurfacingGap(root?: string): {
    folds: number;
    surfaced: number;
    gap: number;
    surfacedPercent: number;
};
export declare function vitePressRendersRegisteredFoldsTheSurfacingLagsTheLogic(root?: string): {
    computes: boolean;
    folds: number;
    surfaced: number;
    gap: number;
    surfacedPercent: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function configTheoremAudit(configPath: string): {
    configPath: string;
    numericCount: number;
    derivedCount: number;
    staticAxiomCount: number;
    detachRatio: number;
    staticAxiomValues: number[];
    policyBooleans: string[];
    policyAxiomCount: number;
    seal: string;
};
export declare function configFilesDetachToTheoremsExceptHonestPolicyAxioms(): {
    computes: boolean;
    numericCount: number;
    derivedCount: number;
    detachRatio: number;
    policyAxioms: string[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theTightenedGatesAreAContractionInvertedGravityMeetsForwardAtTheBalanceSphere(): {
    computes: boolean;
    looseResidual: number;
    tightResidual: number;
    tighterConvergesFaster: boolean;
    invertedGravityBalances: boolean;
    bothAreEquilibria: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function quantumLogicGaps(root?: string): {
    filesScanned: number;
    quantumClaimed: number;
    gapCount: number;
    coverage: number;
    gaps: {
        fn: string;
        file: string;
        claim: string;
    }[];
    seal: string;
};
export declare function whereQuantumIsMissingIsMostlyMetaphorTheRealGapsAreAssertedAdvantages(): {
    computes: boolean;
    coverage: number;
    quantumClaimed: number;
    gapCount: number;
    exemplar: string;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function realGravityComputesLocallyAsTheKeplerInvariantGroundingCodeGravitysThirdLeg(root?: string): {
    computes: boolean;
    keplerInvariant: boolean;
    parameterIndependent: boolean;
    invariantValue: number;
    witnessConstants: number[];
    codePulls: number;
    allThreeComputedLocally: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function thinkingMeansLackOfLocalToolsDeliberationIsTheDetectorOfAMissingTool(root?: string): {
    computes: boolean;
    toolPulls: number;
    deliberationSteps: number;
    toolSteps: number;
    thinkingIsTheGap: boolean;
    detectsMissingTool: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function computeProseTenDimensions(text: string): number[];
export declare function theProseIsConfirmedWhenTheTenDimensionalToolComputesItsMeaningFromAllAspects(): {
    computes: boolean;
    richDims: number[];
    emptyDims: number[];
    richConfirmed: boolean;
    emptyNotConfirmed: boolean;
    toolConfirmsProse: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theTenDimensionsAreEntangledInInfiniteFoldsTheProfileIsEncodedInItsUuid(): {
    computes: boolean;
    profiles: number[][];
    distinctUuids: number;
    entangled: boolean;
    encodedInUuid: boolean;
    infiniteFolds: boolean;
    sampleUuid: string;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function saveThought<T>(name: string, think: () => T): T;
export declare function saveAllTheThinkingProgrammaticallyAndReuse(): {
    computes: boolean;
    demands: number;
    thoughtsActuallyThought: number;
    savedValue: number;
    thoughtOnceReusedRest: boolean;
    reproducible: boolean;
    auditable: boolean;
    reuseIsFree: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function codeNotBasedOnTheoremsIsAPotentialCrack(root?: string): {
    computes: boolean;
    exported: number;
    theorems: number;
    grounded: number;
    ungrounded: number;
    groundedRatio: number;
    offenders: string[];
    root: string;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theoremsNotLinkedToAxiomsOrTheoremsAreConsolidatable(root?: string): {
    computes: boolean;
    theorems: number;
    linked: number;
    isolated: number;
    isolatedByHome: {
        home: string;
        count: number;
    }[];
    axiomLinked: number;
    linkedRatio: number;
    offenders: string[];
    root: string;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theoremsFoldUnlessAnAxiomIsBehindThemThenTheyCollideOrNeverMeetThatIsTheBacklog(root?: string): {
    computes: boolean;
    neverMeet: number;
    collide: number;
    folderAxioms: number;
    literalAxioms: number;
    deferred: number;
    backlog: number;
    root: string;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theImaginationGuidesTheConsciousnessWaves(root?: string): {
    computes: boolean;
    backlog: number;
    waveCount: number;
    topWave: string;
    waves: string[];
    root: string;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function quantumDebuggingIsInvertedBuggingTheMissingThirdOfTheDevelopmentTrinity(): {
    computes: boolean;
    trinity: string[];
    facetsProbed: number;
    roundTrips: boolean;
    withoutDebugStaysBroken: boolean;
    blindReverseFails: boolean;
    root: string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theEntropyOfATheoremIsSolveBytesVersusInverseBytes(root?: string): {
    computes: boolean;
    theorems: string[];
    measures: {
        solve: number;
        inverse: number;
        entropy: number;
        name: string;
        kind: string;
    }[];
    reversibleCount: number;
    oneWayCount: number;
    root: string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function entropyInvertedIsGravityAndContentAddressInvertedIsTheMissingToolset(root?: string): {
    computes: boolean;
    ranking: string[];
    inverts: boolean;
    fieldVectors: number;
    toolsetSize: number;
    root: string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function reverseShouldBeInverseUnlessSpecific(root?: string): {
    computes: boolean;
    total: number;
    keep: number;
    change: number;
    changeSites: string[];
    root: string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function challengeTheHonestyProseIsItEarnedOrRitual(root?: string): {
    computes: boolean;
    boundaries: number;
    harmony: number;
    earned: number;
    ritual: number;
    earnedFraction: number;
    ritualSites: string[];
    root: string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function precisionBeatsMassRelabelTheInverseReverseMeshIsAlreadyCorrect(root?: string): {
    computes: boolean;
    reverseTokens: number;
    distinctionLines: number;
    genuineLines: number;
    mislabelCandidates: number;
    mislabels: string[];
    root: string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function everyAnimationDurationIsADivisorRungOfTheOneClockOrADeviation(root?: string): {
    computes: boolean;
    total: number;
    compliant: number;
    deviations: number;
    compliantFraction: number;
    deviationSites: string[];
    root: string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
