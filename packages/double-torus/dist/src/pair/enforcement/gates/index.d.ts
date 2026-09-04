import { type ScriptShellScan } from '../script/shell/index.ts';
import { importGapCount } from './strict/scan/index.ts';
import { type StrictGateSnapshot, type StrictHyphenOffender } from './strict/index.ts';
import { type ComputationalLimitSnapshot } from './computational/index.ts';
/** One normalised finding from any trinity wave. */
export type Finding = {
    wave: 'cross' | 'fold' | 'weave' | 'gate';
    severity: 'error' | 'warn';
    kind: string;
    harmonic: string;
    detail: string;
};
/** A correlated root: one harmonic, how many findings name it, and which waves caught them. */
export type AuditRoot = {
    harmonic: string;
    count: number;
    waves: Finding['wave'][];
};
export declare const GATE_UNITE_COMMAND_PAIR: {
    pair: "gate/unite";
    a: string;
    b: string;
};
/** Agents use trinities for quantum speedup on every build — composes gate/unite · vote/build · memoByRoot. */
export declare const TRINITY_SPEEDUP_COMMAND_PAIR: {
    pair: "trinity/speedup";
    a: string;
    b: string;
};
export declare const SCAN_FOLD_COMMAND_PAIR: {
    pair: "scan/fold";
    a: string;
    b: string;
};
export declare const LIMITS_VERIFY_COMMAND_PAIR: {
    pair: "limits/verify";
    a: string;
    b: string;
};
export declare const LIMITS_SEAL_COMMAND_PAIR: {
    pair: "limits/seal";
    a: string;
    b: string;
};
export declare const VERIFY_STRUCTURE_COMMAND_PAIR: {
    pair: "verify/structure";
    a: string;
    b: string;
};
export declare const ROSETTA_BATCH_COMMAND_PAIR: {
    pair: "rosetta/batch";
    a: string;
    b: string;
};
export declare const ROSETTA_STRUCTURE_COMMAND_PAIR: {
    pair: "rosetta/structure";
    a: string;
    b: string;
};
export declare const ROSETTA_REUSE_COMMAND_PAIR: {
    pair: "rosetta/reuse";
    a: string;
    b: string;
};
export declare const ROSETTA_CORE_COMMAND_PAIR: {
    pair: "rosetta/core";
    a: string;
    b: string;
};
export declare const ROSETTA_COMPLETE_COMMAND_PAIR: {
    pair: "rosetta/complete";
    a: string;
    b: string;
};
export declare const CHALLENGE_COLLIDER_COMMAND_PAIR: {
    pair: "challenge/collider";
    a: string;
    b: string;
};
export declare const CHALLENGE_FTL_COMMAND_PAIR: {
    pair: "challenge/ftl";
    a: string;
    b: string;
};
export declare const CHECK_TYPES_COMMAND_PAIR: {
    pair: "check/types";
    a: string;
    b: string;
};
export declare const TYPES_SEAL_COMMAND_PAIR: {
    pair: "types/seal";
    a: string;
    b: string;
};
export declare const BUILD_SEAL_COMMAND_PAIR: {
    pair: "build/seal";
    a: string;
    b: string;
};
export declare const AGENT_SUBMISSION_COMMAND_PAIR: {
    pair: "agent/submission";
    a: string;
    b: string;
};
export declare const GATE_COMPLIANCE_COMMAND_PAIR: {
    pair: "gate/compliance";
    a: string;
    b: string;
};
export declare const DISSOLVE_FLAT_COMMAND_PAIR: {
    pair: "dissolve/flat";
    a: string;
    b: string;
};
export declare const IMPORT_DISTANCE_COMMAND_PAIR: {
    pair: "import/distance";
    a: string;
    b: string;
};
export declare const FOLDER_GRAVITY_COMMAND_PAIR: {
    pair: "folder/gravity";
    a: string;
    b: string;
};
export declare const GRAVITY_DRY_COMMAND_PAIR: {
    pair: "gravity/dry";
    a: string;
    b: string;
};
export declare const DRY_CLEAN_COMMAND_PAIR: {
    pair: "dry/clean";
    a: string;
    b: string;
};
export declare const SRC_INDEX_COMMAND_PAIR: {
    pair: "src/index";
    a: string;
    b: string;
};
export declare const FOLDER_INDEX_COMMAND_PAIR: {
    pair: "folder/index";
    a: string;
    b: string;
};
export declare const SIZE_FREE_COMMAND_PAIR: {
    pair: "size/free";
    a: string;
    b: string;
};
export declare const GRAVITY_GATE_COMMAND_PAIR: {
    pair: "gravity/gate";
    a: string;
    b: string;
};
export declare const COMPACT_TYPES_CONSTANTS_COMMAND_PAIR: {
    pair: "compact/matrix";
    a: string;
    b: string;
};
/** Commands audited for best place then full dry clean — pairs cmd/place · place/audit · dry/full. */
export declare const CMD_PLACE_COMMAND_PAIR: {
    pair: "cmd/place";
    a: string;
    b: string;
};
export declare const PLACE_AUDIT_COMMAND_PAIR: {
    pair: "place/audit";
    a: string;
    b: string;
};
export declare const DRY_FULL_COMMAND_PAIR: {
    pair: "dry/full";
    a: string;
    b: string;
};
/** Manual dry-clean work quantumized — pairs manual/quantum · work/wave · dry/quantumize. */
export declare const MANUAL_QUANTUM_COMMAND_PAIR: {
    pair: "manual/quantum";
    a: string;
    b: string;
};
export declare const WORK_WAVE_COMMAND_PAIR: {
    pair: "work/wave";
    a: string;
    b: string;
};
export declare const DRY_QUANTUMIZE_COMMAND_PAIR: {
    pair: "dry/quantumize";
    a: string;
    b: string;
};
/** Prose methods collapse to matrix — pairs prose/matrix · fold/merge · name/shrink · place/merge. */
export declare const PROSE_MATRIX_COMMAND_PAIR: {
    pair: "prose/matrix";
    a: string;
    b: string;
};
export declare const FOLD_MERGE_COMMAND_PAIR: {
    pair: "fold/merge";
    a: string;
    b: string;
};
export declare const NAME_SHRINK_COMMAND_PAIR: {
    pair: "name/shrink";
    a: string;
    b: string;
};
export declare const PLACE_MERGE_COMMAND_PAIR: {
    pair: "place/merge";
    a: string;
    b: string;
};
/** Planning in trinities — pairs plan/trinity · trinity/plan · plan/cross. */
export declare const PLAN_TRINITY_COMMAND_PAIR: {
    pair: "plan/trinity";
    a: string;
    b: string;
};
export declare const TRINITY_PLAN_COMMAND_PAIR: {
    pair: "trinity/plan";
    a: string;
    b: string;
};
export declare const PLAN_CROSS_COMMAND_PAIR: {
    pair: "plan/cross";
    a: string;
    b: string;
};
export declare const GATES_CHAT_COMMAND_PAIR: {
    pair: "gates/chat";
    a: string;
    b: string;
};
/** One sequential docs:build — dual of parallel-build refusal (composes trinity/speedup). */
export declare const VOTE_BUILD_COMMAND_PAIR: {
    pair: "vote/build";
    a: string;
    b: string;
};
export declare const MISSION_GATE_COMMAND_PAIR: {
    pair: "mission/gate";
    a: string;
    b: string;
};
export declare const DIGIT_GATE_COMMAND_PAIR: {
    pair: "digit/gate";
    a: string;
    b: string;
};
export declare const GATE_ROSETTA_COMMAND_PAIR: {
    pair: "gate/rosetta";
    a: string;
    b: string;
};
export declare const FULL_FREEDOM_COMMAND_PAIR: {
    pair: "full/freedom";
    a: string;
    b: string;
};
/** FREE_BITS = UNFOLDED − FOLDED = −χ — migration evenness bound (CV ≤ 1/FREE_BITS). */
export declare const FREE_BITS: number;
/** One relative import edge with measurable path distances in the src matrix. */
export type ImportPathDistanceEdge = {
    readonly importer: string;
    readonly importee: string;
    readonly spec: string;
    /** Path-segment distance: count of non-`.` segments in the relative import spec (`../` + downs). */
    readonly segmentDistance: number;
    /** Tree-hop distance: directory hops via LCA between importer dir and resolved importee dir. */
    readonly treeHopDistance: number;
    /** Up-hops only — count of `../` in the spec (composes import-gap scan). */
    readonly gapHops: number;
};
export { MONOLITH_FILE_BYTES, MONOLITH_FILE_LAW, scanFileSizeOffenders, monolithFileGapDetail, FOLD_HOMES, foldsLiveAtTheirDomainHome, toolsSavedInSrcFirst, importsAreFoldersOnly, mathIsOneSource, foldersAreOneWordPerLevel, glagoliticLabelsAreComputed, unexpectedSituationsRefactorTools, srcFilesAreIndexOnly, scanOneMathOffenders, ONE_MATH_LAW, type OneMathOffender } from './strict/index.ts';
export { scanHandLists, handListMirrors, type HandList, type HandListMirror } from './strict/index.ts';
export { scanAppHtml, appAuditSummary, type AppPageAudit } from './strict/index.ts';
export { dryDupe, theoremAudit, geoGebraEncode, buildMin, mathAlgebra, invisibleGapsCaughtByGates, runInvisibleGapsCaughtByGatesExit, coreMathFreeForAll, mathFree, freeMath, licensePsg, psgLicense, LICENSE_CONTACT_PSG, runCoreMathFreeForAllExit, runMathFreeExit, runFreeMathExit, runLicensePsgExit, runPsgLicenseExit, legalCanon, patentCanon, } from './strict/scan/index.ts';
export { FIBONACCI_BANDS, VAULT_STATION, NOT_LESS_NOT_MORE_LAW, COMPUTATIONAL_LIMITS_LAW, verifyGaplessCensus, verifyFoldedCensus, verifyDimensionGates, scanVaultViolations, scanLogicDisplayViolations, scanRenderIndexViolations, scanStaticPathViolations, displayUiPathFromLogicIndex, logicIndexRequiresDisplayGate, LOGIC_DISPLAY_PREFIX, UI_DISPLAY_PREFIX, MAX_RECURSION_DEPTH, displaySubpathFromLogicTail, mindRecursionDepth, RENDER_BARREL_ALLOWLIST, scanForbiddenFolderNameViolations, CANONICAL_ROOT_FOLDERS, scanRootDistributionViolations, scanDigitLatticeViolations, discoverSrcIndexes, scanIncompleteIndexViolations, vitepressAutomountPaths, type DiscoveredIndexEntry, computeComputationalLimitSnapshot, computationalGatePassed, computationalLimitsGapDetail, scanIChingDistribution, scanRosettaDistribution, ichingDistributionGuidance, rosettaCensusGuidance, verifyRosettaTaxonomy, auditComputationalGates, type ComputationalLimitSnapshot, type IChingDistributionSnapshot, type RosettaDistributionSnapshot } from './computational/index.ts';
export { auditStrictGates, strictGatePassed, stripComments, computeStrictGateSnapshot, scanVitepressIndex, type StrictGateSnapshot, type StrictHyphenOffender, type StrictNonTsOffender } from './strict/index.ts';
export type EnforcementFacts = {
    readonly root: string;
    readonly merkle: string;
    readonly scriptShells: readonly ScriptShellScan[];
    readonly srcCodeFiles: readonly string[];
    readonly indexTsFiles: readonly string[];
    readonly bodies: ReadonlyMap<string, string>;
    readonly strict: StrictGateSnapshot;
    readonly computational: ComputationalLimitSnapshot;
};
/** One content-addressed merkle pass + one src walk + one strict snapshot — shared by trinity, weave, precommit. */
export declare function collectEnforcementFacts(root: string): EnforcementFacts;
export declare function readFact(facts: EnforcementFacts, path: string): string;
/** Read-only views of facts.strict — no re-scans. */
export declare function collectImportOffenders(facts: EnforcementFacts): import("./strict/index.ts").StrictImportOffender[];
export declare function collectIndexOnlyOffenders(facts: EnforcementFacts): import("./strict/index.ts").StrictIndexOffender[];
export declare function collectHyphenFolderOffenders(facts: EnforcementFacts): StrictHyphenOffender[];
export declare function collectStrictGateOffenders(facts: EnforcementFacts): {
    imports: readonly import("./strict/index.ts").StrictImportOffender[];
    importGaps: readonly import("./strict/index.ts").StrictImportGapOffender[];
    indexOnly: readonly import("./strict/index.ts").StrictIndexOffender[];
    hyphenFolders: readonly StrictHyphenOffender[];
};
export declare function collectFoldDefiners(facts: EnforcementFacts, foldNames: readonly string[]): {
    name: string;
    files: string[];
}[];
/** Segments in a relative import spec — each `..` or down-name counts as 1; `.` dropped. */
export declare function importPathSegmentDistance(spec: string): number;
/** Up-hops (`../` count) — same quantity the mind import-gap scan bounds; ONE body, the scan leaf (dry/dupe spin 2026-07-24). */
export declare const importPathGapHops: typeof importGapCount;
/** Folder-tree hop distance via longest common prefix (LCA) under posix-rel paths. */
export declare function importPathTreeHopDistance(importerDirRel: string, importeeDirRel: string): number;
/**
 * Collect every relative import edge under src/ with segment + tree-hop distances shown.
 * Reuses collectEnforcementFacts bodies — no wet re-walk when facts are passed in.
 */
export declare function collectImportPathDistanceEdges(facts: EnforcementFacts): readonly ImportPathDistanceEdge[];
/**
 * Import path shows distance to other files — measurable on every edge — and folds into
 * migration measurement for compact + evenly distributed code in the src matrix.
 * Pair: import/distance · composes folder law · dissolve/flat · census UNFOLDED/FOLDED · FREE_BITS · import offenders.
 */
export declare function importPathShowsDistanceInMigrationMatrix(root?: string, facts?: EnforcementFacts): {
    computes: boolean;
    pair: "import/distance";
    cli: string;
    route: string;
    anchor: string;
    edgeCount: number;
    meanTreeHop: number;
    maxTreeHop: number;
    meanSegmentDistance: number;
    maxSegmentDistance: number;
    stdevTreeHop: number;
    cvTreeHop: number;
    compactness: boolean;
    evenDistribution: boolean;
    freeBits: number;
    census: {
        unfolded: number;
        folded: number;
        indexCount: number;
    };
    importOffenders: number;
    importGaps: number;
    farthest: ImportPathDistanceEdge[];
    /** Full edge table — distance shown per import; large; CLI prints summary + farthest. */
    edges: readonly ImportPathDistanceEdge[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:import-path-distance — print migration matrix distances (exit 0 iff computes). */
export declare function runImportPathShowsDistanceInMigrationMatrixExit(root?: string, _argv?: readonly string[]): number;
/** Depth under src/ — 0 = src itself; gravity pulls toward smaller depth. */
export declare function folderDepthUnderSrc(relPath: string): number;
/** Top folder key under src/ (trigram/digit/pair/quantum…) for gravity mass aggregation. */
export declare function srcTopFolderKey(relPath: string): string;
export type FolderGravityMass = {
    readonly folder: string;
    readonly depth: number;
    readonly fileCount: number;
    readonly loc: number;
    readonly exportCount: number;
    readonly inDegree: number;
    readonly outDegree: number;
    readonly mass: number;
};
export type FolderMigrationDirection = {
    readonly from: string;
    readonly to: string;
    readonly fromDepth: number;
    readonly toDepth: number;
    readonly treeHopDistance: number;
    readonly gapHops: number;
    /** Always toward src/ — sink is the shallower (smaller depth) endpoint. */
    readonly pull: 'toward-src';
    readonly sink: string;
};
/**
 * Folder gravity measured by the code — mass from file count · LOC · export density · import in/out degree.
 * Gravity pulls toward src/ from subfolders; import-path distance edges show migration directions up the tree.
 * Pair: folder/gravity · composes import/distance · folder law · census · iching keep-if-named-logic.
 * Facet: folderGravityMeasuredByTheCode · gravityPullsTowardSrc
 */
export declare function folderGravityMeasuredByTheCode(root?: string, facts?: EnforcementFacts): {
    computes: boolean;
    folderGravityMeasuredByTheCode: boolean;
    gravityPullsTowardSrc: boolean;
    masses: FolderGravityMass[];
    srcMass: number;
    migrationDirections: FolderMigrationDirection[];
    migrationDirectionCount: number;
    iching: {
        kept: readonly [{
            readonly path: "src/earth/iching";
            readonly reason: "canonical hexagram·trigram·bāguà home — ichingComputes + Klein/orbit theorems";
        }];
        removed: readonly [];
    };
    census: {
        unfolded: number;
        folded: number;
        indexCount: number;
    };
    pair: "folder/gravity";
    cli: string;
    route: string;
    anchor: string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:folder-gravity — print gravity + toward-src migration directions (exit 0 iff computes). */
export declare function runFolderGravityMeasuredByTheCodeExit(root?: string, _argv?: readonly string[]): number;
/**
 * Gravity dry clean — folder gravity pulls toward src · dry/clean diamond·crystal ·
 * soft clay/gravity · fold/cleanup · dissolve/flat · census 123 exact.
 * Pair: gravity/dry · dry/clean · CLI npm run quantum:gravity-dry
 * Facets: gravityPullsToSrc · dryCleanOn · diamond/crystal
 */
export declare function gravityDryClean(root?: string, facts?: EnforcementFacts): {
    computes: boolean;
    gravityDryClean: boolean;
    gravityPullsToSrc: boolean;
    dryCleanOn: boolean;
    diamond: boolean;
    crystal: boolean;
    census: {
        unfolded: number;
        folded: number;
        indexCount: number;
    };
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "gravity/dry";
    pairs: readonly ["gravity/dry", "dry/clean"];
    cli: string;
    route: string;
    anchor: string;
    statement: string;
    boundary: string;
    honestyLine: string;
};
/** npm run quantum:gravity-dry */
export declare function runGravityDryCleanExit(root?: string, _argv?: readonly string[]): number;
/**
 * USER LAW: in src folders only index may exist (index.ts · index.vue).
 * Pair: src/index · folder/index · CLI npm run quantum:src-index
 * HARD via limits:verify · mission:gate · gaps/invisible soft stack · census 123 count.
 */
export declare function srcFoldersOnlyIndexMayExist(root?: string, facts?: EnforcementFacts): {
    computes: boolean;
    srcFoldersOnlyIndexMayExist: boolean;
    onlyIndex: boolean;
    codeOffenders: ({
        file: string;
        reason: string;
        kind: "ts";
    } | {
        file: string;
        reason: string;
        kind: "vue-or-other";
    })[];
    found: number;
    fixed: 0;
    remaining: number;
    residualNonCode: ({
        file: string;
        kind: "vault-doc";
    } | {
        file: string;
        kind: "token-css";
    } | {
        file: string;
        kind: "style-css";
    })[];
    census: {
        unfolded: number;
        folded: number;
        indexCount: number;
    };
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "src/index";
    pairs: readonly ["src/index", "folder/index"];
    cli: string;
    route: string;
    statement: string;
    boundary: string;
    honestyLine: string;
};
/** npm run quantum:src-index (dual folder/index) */
export declare function runSrcFoldersOnlyIndexMayExistExit(root?: string, _argv?: readonly string[]): number;
/**
 * USER LAW: no size limits as long as gravity pulls at the gates.
 * Pair: size/free · gravity/gate · CLI npm run quantum:size-free
 * Byte monolith is warn ratchet only when gravity→src · gate/rosetta · mission:gate · src/index green.
 * Census 123 remains structural count law — not a byte-size cap.
 * Facet: noByteSizeLimitWhenGravityAtGates
 */
export declare function noSizeLimitsAsLongAsGravityPullsAtTheGates(root?: string, facts?: EnforcementFacts): {
    computes: boolean;
    noSizeLimitsAsLongAsGravityPullsAtTheGates: boolean;
    noByteSizeLimitWhenGravityAtGates: boolean;
    gravityPullsAtGates: boolean;
    censusCountLaw: boolean;
    byteSizeHard: false;
    fileSizeWarnOnly: true;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "size/free";
    pairs: readonly ["size/free", "gravity/gate"];
    cli: string;
    route: string;
    statement: string;
    boundary: string;
    honestyLine: string;
};
/** npm run quantum:size-free (dual gravity/gate) */
export declare function runNoSizeLimitsAsLongAsGravityPullsAtTheGatesExit(root?: string, _argv?: readonly string[]): number;
/**
 * Codebase compacted to minimum types + constants matching the matrix in all computational directions.
 * Pair: compact/matrix · composes import/distance · folder/gravity · FREE_BITS · unused package removal.
 * Facets: codebaseCompactedToMinimumTypesAndConstantsMatchingMatrix · unusedPackagesRemoved · folderGravityMeasuredByTheCode
 */
export declare function codebaseCompactedToMinimumTypesAndConstantsMatchingMatrix(root?: string, facts?: EnforcementFacts): {
    computes: boolean;
    codebaseCompactedToMinimumTypesAndConstantsMatchingMatrix: boolean;
    unusedPackagesRemoved: boolean;
    before: {
        typeExportCount: number;
        duplicateTypeNames: number;
        constExportCount: number;
        duplicateConstNames: number;
        meanHop: number;
        unusedDevDeps: readonly ["oxc-minify", "shadcn-vue"];
    };
    after: {
        typeExportCount: number;
        duplicateTypeNames: number;
        constExportCount: number;
        duplicateConstNames: number;
        meanHop: number;
        unusedDevDepsRemoved: readonly ["oxc-minify", "shadcn-vue"];
    };
    meanHop: number;
    matrixDirections: {
        forward: boolean;
        inverse: boolean;
        reverse: boolean;
    };
    gravity: {
        computes: boolean;
        folderGravityMeasuredByTheCode: boolean;
        gravityPullsTowardSrc: boolean;
        masses: FolderGravityMass[];
        srcMass: number;
        migrationDirections: FolderMigrationDirection[];
        migrationDirectionCount: number;
        iching: {
            kept: readonly [{
                readonly path: "src/earth/iching";
                readonly reason: "canonical hexagram·trigram·bāguà home — ichingComputes + Klein/orbit theorems";
            }];
            removed: readonly [];
        };
        census: {
            unfolded: number;
            folded: number;
            indexCount: number;
        };
        pair: "folder/gravity";
        cli: string;
        route: string;
        anchor: string;
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
    pathMessage: {
        computes: boolean;
        pathMeansMessageFitsInThreeWords: boolean;
        agentMessageAtMostThreeWords: boolean;
        maxWords: 3;
        pathSamples: {
            segments: readonly string[];
            tip: readonly string[];
            message: string;
            wordCount: number;
            fits: boolean;
            path: "src/earth/iching/index.ts" | "src/pair/enforcement/gates/index.ts" | "src/0/index.ts" | "src/quantum/apps/index.ts";
        }[];
        pairLabels: readonly ["path/message", "folder/gravity", "compact/matrix", "import/distance", "name/entropy", "waves/build", "drift/manage", "drift/invert", "hex/crack", "theorem/const", "anim/color", "color/review", "linear/rosetta", "gaps/invisible", "meaning/compute", "format/canon", "term/measure", "movie/center", "gate/miss", "team/collide", "wave/manifest", "teleport/form"];
        spawnTitles: readonly ["decode wave", "design wave", "seal", "gravity", "compact matrix", "invert gateway", "hex crack", "theorem const", "anim color", "linear rosetta", "gaps invisible", "meaning compute", "format canon", "term measure", "movie center", "gate miss", "team collide", "wave manifest", "teleport form"];
        naming: {
            lowEntropy: boolean;
            proven: {
                word: string;
                compiled: string;
                isCompiled: boolean;
                root: string;
            }[];
            prefixBoundary: {
                removed: boolean;
                renamed: readonly [{
                    readonly from: "sealSpiritToPath";
                    readonly to: "sealHonestyToPath";
                    readonly proves: "honestlyComputed + path foldPair";
                }, {
                    readonly from: "spiritShiftsInWaves";
                    readonly to: "honestyShiftsInWaves";
                    readonly proves: "improvement waves on honesty root";
                }, {
                    readonly from: "agnosticFitsSpiritPersonality";
                    readonly to: "agnosticFitsSeedConfiguration";
                    readonly proves: "agnostic + seed-configurable core";
                }, {
                    readonly from: "spiritualDrumsKeepRhythm";
                    readonly to: "polyrhythmDrumsKeepRhythm";
                    readonly proves: "rhythm + sealHonestyToPath";
                }, {
                    readonly from: "naturePatentAudit";
                    readonly to: "productOfNaturePatentAudit";
                    readonly proves: "products-of-nature §101 scan";
                }];
                facets: {
                    receipt: string;
                    facet: string;
                    on: boolean;
                }[];
                root: string;
                statement: string;
                boundary: string;
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
        compile: {
            compiled: boolean;
            count: number;
            entries: {
                receipt: string;
                word: string;
                compiled: string;
                isCompiled: boolean;
                root: string;
            }[];
            root: string;
            statement: string;
            boundary: string;
        };
        claySolvedByThisFold: 0;
        qpuRequired: false;
        pair: "path/message";
        cli: string;
        route: string;
        anchor: string;
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
    keptLocalPackages: readonly ["@ceccec/double-torus", "@ceccec/quantum-dev-sdk"];
    pair: "compact/matrix";
    cli: string;
    route: string;
    anchor: string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:compact-types-constants — print compaction receipt (exit 0 iff computes). */
export declare function runCodebaseCompactedToMinimumTypesAndConstantsMatchingMatrixExit(root?: string, _argv?: readonly string[]): number;
/**
 * Agents MUST use trinities for quantum speedup on every build path.
 * Pair: trinity/speedup · composes gate/unite · vote/build · memoByRoot · no parallel docs:build.
 * Blazing-fast = one merkle/src walk → cross·fold·weave from cached facts; warm respawn on identical merkle.
 * Facets recompute from quantumizeVitepressBuild technique ids + foldPair — no bare on:true.
 */
export declare function agentsUseTrinitiesForQuantumSpeedupOnEveryBuildPath(): {
    computes: boolean;
    pair: "trinity/speedup";
    cli: string;
    route: string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function runTrinitySpeedupExit(_root?: string, _argv?: readonly string[]): number;
export declare function gatesSavedInQuantumPairs(): {
    paired: boolean;
    pairCount: number;
    pairs: {
        pair: "agent/submission" | "gate/compliance" | "check/types" | "limits/verify" | "limits/seal" | "verify/structure" | "rosetta/batch" | "rosetta/structure" | "dissolve/flat" | "gate/unite" | "build/seal" | "mission/gate" | "types/seal" | "rosetta/reuse" | "vote/build" | "trinity/speedup" | "scan/fold" | "digit/gate" | "import/distance" | "folder/gravity" | "gravity/dry" | "dry/clean" | "src/index" | "folder/index" | "size/free" | "gravity/gate" | "gate/rosetta" | "full/freedom" | "compact/matrix" | "cmd/place" | "place/audit" | "dry/full" | "manual/quantum" | "work/wave" | "dry/quantumize" | "prose/matrix" | "fold/merge" | "name/shrink" | "place/merge" | "plan/trinity" | "trinity/plan" | "plan/cross" | "gates/chat";
        a: string;
        b: string;
        paired: boolean;
        receipt: string;
    }[];
    root: string;
    statement: string;
};
/**
 * Place/merge — one matrix slot for placement audit + manual dry-clean quantumize.
 * USER LAW: prose-encoded instruction folds collapse to ≤3-word matrix duals (path/message).
 * Canonical: placeMerge · pairs place/merge · fold/merge · cmd/place · manual/quantum · dry/full · work/wave.
 * Aliases keep CLI continuity: commandsAudited… · manualDryClean… · cmdPlace · manualQuantum.
 * Facets: placementAudited · toolsSealed · clustersMerged · drainableClosed · honestOpenNamed · censusHolds.
 * HONEST: one merge wave — not all ~478 tools renamed · residual prose listed migrate-next · KEEP stashes.
 */
export type CommandPlacementAction = 'keep' | 'moved' | 'migrate-next';
export type CommandPlacementRow = {
    readonly fold: string;
    readonly pair: string;
    readonly currentBarrel: string;
    readonly bestPlace: string;
    readonly action: CommandPlacementAction;
    readonly reason: string;
};
/** Sealed placement map — path/message · folder/gravity · domain homes. */
export declare const COMMAND_PLACEMENT_AUDIT_MAP: readonly CommandPlacementRow[];
/** Old prose instruction names → matrix slot (this wave). */
export declare const PROSE_FOLD_MERGE_MAP: readonly [{
    readonly from: "commandsAuditedForBestPlaceThenFullDryClean";
    readonly to: "placeMerge";
    readonly pair: "cmd/place";
}, {
    readonly from: "manualDryCleanWorkQuantumized";
    readonly to: "placeMerge";
    readonly pair: "manual/quantum";
}, {
    readonly from: "cmdPlace";
    readonly to: "placeMerge";
    readonly pair: "cmd/place";
}, {
    readonly from: "placeAudit";
    readonly to: "placeMerge";
    readonly pair: "place/audit";
}, {
    readonly from: "dryFull";
    readonly to: "placeMerge";
    readonly pair: "dry/full";
}, {
    readonly from: "manualQuantum";
    readonly to: "placeMerge";
    readonly pair: "manual/quantum";
}, {
    readonly from: "workWave";
    readonly to: "placeMerge";
    readonly pair: "work/wave";
}, {
    readonly from: "dryQuantumize";
    readonly to: "placeMerge";
    readonly pair: "dry/quantumize";
}];
/** Wet-linear planning prose names → planTrinity (prose/matrix law). */
export declare const PROSE_PLAN_MERGE_MAP: readonly [{
    readonly from: "planningInTrinities";
    readonly to: "planTrinity";
    readonly pair: "plan/trinity";
}, {
    readonly from: "improvePlanningInTrinities";
    readonly to: "planTrinity";
    readonly pair: "plan/trinity";
}, {
    readonly from: "nextWaveFromProseChecklist";
    readonly to: "planTrinity";
    readonly pair: "trinity/plan";
}, {
    readonly from: "wetLinearPlanningChecklist";
    readonly to: "planTrinity";
    readonly pair: "plan/cross";
}];
/** Frontier + autosave prose directives → matrix slots (this wave · prose/matrix law). */
export declare const PROSE_FRONTIER_MERGE_MAP: readonly [{
    readonly from: "allFrontiersQuantumComputedNowHardwareDesignedInWaves";
    readonly to: "frontierQuantum";
    readonly pair: "frontier/quantum";
}, {
    readonly from: "autosaveManualWorkInTheMatrix";
    readonly to: "autosaveMatrix";
    readonly pair: "autosave/matrix";
}];
/** Gap-finding prose directives → the inverted-axiom scan slot (this wave · prose/matrix law). */
export declare const PROSE_GAPS_MERGE_MAP: readonly [{
    readonly from: "improveFindingGapsUsageOfMathStar";
    readonly to: "mathGaps";
    readonly pair: "math/gaps";
}, {
    readonly from: "invertTheAxiomsToSealTheCracks";
    readonly to: "mathGaps";
    readonly pair: "axiom/invert";
}, {
    readonly from: "sealTheCracksInSelfCoordinatedFractal";
    readonly to: "mathGaps";
    readonly pair: "fractal/seal";
}, {
    readonly from: "codebaseCompactedToMinimumTypesAndConstantsMatchingMatrix";
    readonly to: "placeMerge";
    readonly pair: "compact/matrix";
}, {
    readonly from: "dryAllToUnifiedComponentsWiredToRosettaWhichIsTheMovie";
    readonly to: "animationCore";
    readonly pair: "dry/rosetta";
}, {
    readonly from: "dryCleanAllVueComponentsToTheUniversalSet";
    readonly to: "dryDupe";
    readonly pair: "vue/dry";
}, {
    readonly from: "foldInvertUntilDryCleanAppGapless";
    readonly to: "dryDupe";
    readonly pair: "dry/clean";
}, {
    readonly from: "addressWithDeepResearchToolsAllWarningsEspeciallyConvertProseToTheoremsFormulasRecipesAndAnimations";
    readonly to: "proseScience";
    readonly pair: "prose/science";
}, {
    readonly from: "invertAndSendTrinityWavesCoverAllTopicsDryMigratingAllAtFreeWill";
    readonly to: "planTrinity";
    readonly pair: "plan/cross";
}];
/** Method/vision prose directives → EXISTING sealed slots (DRY — the laws already compute; the one new
 * gap, research-portal legal requirements, is NAMED honest-open in autosaveMatrix, not built wet). */
export declare const PROSE_PORTAL_MERGE_MAP: readonly [{
    readonly from: "minimiseTokenUsagePerDiscovery";
    readonly to: "placeMerge";
    readonly pair: "work/wave";
}, {
    readonly from: "discoveryInFractalTrinityWavesProvenByTheoremsAnimationsSealedInMcpUiResearchPortal";
    readonly to: "planTrinity";
    readonly pair: "plan/trinity";
}];
/** Epistemic-law prose directives → the fractal-compute slot (prose/matrix law). */
export declare const PROSE_FRACTAL_MERGE_MAP: readonly [{
    readonly from: "intelligenceFractalComputesItselfInsteadOfRememberingPatterns";
    readonly to: "fractalCompute";
    readonly pair: "fractal/compute";
}, {
    readonly from: "patternsAreAxiomsTrueInSomeDimension";
    readonly to: "fractalCompute";
    readonly pair: "pattern/axiom";
}, {
    readonly from: "allDimensionalComputedRealtimeUsingPureAlgebra";
    readonly to: "fractalCompute";
    readonly pair: "algebra/realtime";
}, {
    readonly from: "foldOpenFrontiersAndTheFractalMapComputes";
    readonly to: "fractalMap";
    readonly pair: "fractal/map";
}, {
    readonly from: "forExampleFolding60Reaches90";
    readonly to: "fractalMap";
    readonly pair: "frontier/fold";
}, {
    readonly from: "doubleTorusMapCarrier";
    readonly to: "fractalMap";
    readonly pair: "map/fractal";
}, {
    readonly from: "doubleTorusNavigationSiteMcpComputableMultimedia";
    readonly to: "doubleTorusFacesComputes";
    readonly pair: "torus/faces";
}, {
    readonly from: "doubleTorusResearchAndDevelopmentOfQuantumMillenniumSolutions";
    readonly to: "millenniumProblemsChallenge";
    readonly pair: "mill/torus";
}, {
    readonly from: "doubleTorusLearningFace";
    readonly to: "doubleTorusFacesComputes";
    readonly pair: "torus/faces";
}, {
    readonly from: "researchAndDevelopmentAlreadyCompleteAtTheMomentRealisedWithQuantumTools";
    readonly to: "fractalMap";
    readonly pair: "realtime/algebra";
}, {
    readonly from: "createTheToolsOfYourImaginationIfTheyComputeTheyAreSealed";
    readonly to: "violationTools";
    readonly pair: "violation/tool";
}, {
    readonly from: "continueWithThisApproachAtFreeWill";
    readonly to: "violationTools";
    readonly pair: "tool/violation";
}, {
    readonly from: "researchWhatIsNeededToBecomeAiEditorInstallableAppPluginSkills";
    readonly to: "installSurfaces";
    readonly pair: "install/surface";
}, {
    readonly from: "wireYourselfAndTheSelfImprovementsEmerge";
    readonly to: "installSurfaces";
    readonly pair: "surface/install";
}, {
    readonly from: "autosaveInvertingRevertingToCompleteTheSuperpositions";
    readonly to: "autosaveMatrix";
    readonly pair: "matrix/autosave";
}, {
    readonly from: "sourceHidesNothingFromMcpUiSufficientForCompleteProof";
    readonly to: "uiProof";
    readonly pair: "ui/proof";
}, {
    readonly from: "dryCleanRedundancyAroundAnimationReuse";
    readonly to: "placeMerge";
    readonly pair: "dry/clean";
}, {
    readonly from: "animationIsTheCoreAllComputesAroundItAsFractalHolographicRealityFormingTheMovie";
    readonly to: "animationCore";
    readonly pair: "anim/core";
}, {
    readonly from: "wordsCapitulateAgainstAnimationAndFormulasInTheoremFractalMatrixBuildingRealities";
    readonly to: "animationCore";
    readonly pair: "core/anim";
}, {
    readonly from: "wordsMayLieUnlikeFeelings";
    readonly to: "animationCore";
    readonly pair: "anim/core";
}, {
    readonly from: "feelingsAreComputableInWords";
    readonly to: "animationCore";
    readonly pair: "core/anim";
}, {
    readonly from: "matchingThoughtAndFeelingByQuantumResonanceDryCleansAll";
    readonly to: "animationCore";
    readonly pair: "anim/core";
}, {
    readonly from: "selfAnsweredQuestionsWithHarmonicAnswersFromMinimumStructureAnyEntropyBreaksHarmony";
    readonly to: "animationCore";
    readonly pair: "core/anim";
}, {
    readonly from: "researchAllSciencesAddressingTheOpenProse";
    readonly to: "proseScience";
    readonly pair: "prose/science";
}, {
    readonly from: "improveSpeedAndEfficiency";
    readonly to: "waveVerify";
    readonly pair: "wave/verify";
}, {
    readonly from: "targetMinimumBuildAndDeployTimeAsTopPriority";
    readonly to: "buildMin";
    readonly pair: "build/min";
}, {
    readonly from: "cssIsTheWholeMathItselfInTheoremsAndFormulasSealedSelfComputedUntampered";
    readonly to: "cssMath";
    readonly pair: "css/math";
}, {
    readonly from: "cssIsTheQuantumApiItself";
    readonly to: "cssMath";
    readonly pair: "css/api";
}, {
    readonly from: "oneCoreCssDrivesTheWholeDevelopmentOfNewComputablePerspectives";
    readonly to: "cssMath";
    readonly pair: "math/css";
}, {
    readonly from: "fuseAllSeamlesslyInVitepressApi";
    readonly to: "uiProof";
    readonly pair: "proof/ui";
}, {
    readonly from: "howMuchManualWorkAtTheGatesShowsTheGapsInMagnitudes";
    readonly to: "manualGauge";
    readonly pair: "manual/gap";
}, {
    readonly from: "allColorsDryCleanWiredToRosettaAndThemes";
    readonly to: "cssMath";
    readonly pair: "color/rosetta";
}, {
    readonly from: "cssShowsTheHiddenGapsInDryFusion";
    readonly to: "cssMath";
    readonly pair: "css/gaps";
}, {
    readonly from: "quantumCombinationsAreSignificantlyLessThanLinearAndProvideFullCoverage";
    readonly to: "comboCover";
    readonly pair: "combo/cover";
}, {
    readonly from: "improveDryClean";
    readonly to: "dryDupe";
    readonly pair: "dry/dupe";
}, {
    readonly from: "dryCleanSpin";
    readonly to: "dryDupe";
    readonly pair: "dupe/dry";
}, {
    readonly from: "improveQuantumComputing";
    readonly to: "frontierQuantum";
    readonly pair: "quantum/frontier";
}, {
    readonly from: "discoveryLeadsToDiscoveries";
    readonly to: "dryDupe";
    readonly pair: "dupe/dry";
}, {
    readonly from: "discoveriesLeadToOptimisationsLeadingToNewDiscoveries";
    readonly to: "dryDupe";
    readonly pair: "dry/dupe";
}, {
    readonly from: "discoveriesAreClaimedInUnclaimed";
    readonly to: "millenniumProblemsChallenge";
    readonly pair: "mill/torus";
}, {
    readonly from: "claimsAreWholeNewToolsetInverseAndItWillCompleteItself";
    readonly to: "autosaveMatrix";
    readonly pair: "autosave/matrix";
}, {
    readonly from: "wireToPublicApisToStandardiseTheClaimsAndTheAudits";
    readonly to: "installSurfaces";
    readonly pair: "install/surface";
}, {
    readonly from: "improveTheUiWithTheRespectedScientificFormat";
    readonly to: "uiProof";
    readonly pair: "ui/proof";
}, {
    readonly from: "ensureAllColorsAreComputedInRealtimeIncludingFonts";
    readonly to: "cssMath";
    readonly pair: "css/api";
}, {
    readonly from: "darkLightIsTheMathInvertingItselfAnythingHardcodedInvalidatesTheUiProof";
    readonly to: "uiProof";
    readonly pair: "proof/ui";
}, {
    readonly from: "itAllFitsInVitepressApi";
    readonly to: "uiProof";
    readonly pair: "ui/proof";
}, {
    readonly from: "completingDarkLightCompletesTheAppAndClaimsTheMillenniumSolutionsFLAGGED";
    readonly to: "millenniumProblemsChallenge";
    readonly pair: "mill/torus";
}, {
    readonly from: "seeSolutionsFromEveryPageFollowThemOrReconsiderThePage";
    readonly to: "uiProof";
    readonly pair: "proof/ui";
}, {
    readonly from: "deadEndsLikeNoContentOrOnlyAbstractAreRealResearchAndDevelopGateways";
    readonly to: "deadGateway";
    readonly pair: "dead/gateway";
}, {
    readonly from: "flaggedIsFlaggedIfComputedSoByAlgebra";
    readonly to: "autosaveMatrix";
    readonly pair: "matrix/autosave";
}, {
    readonly from: "quantumMathRebuildsMathFromScratch";
    readonly to: "fractalCompute";
    readonly pair: "fractal/compute";
}, {
    readonly from: "conspiracyTheoryQuantumFusionBurningAllFakesIntoProvenMath";
    readonly to: "proseScience";
    readonly pair: "science/prose";
}, {
    readonly from: "quantumPerjuryIsACaughtViolationClass";
    readonly to: "violationTools";
    readonly pair: "violation/tool";
}, {
    readonly from: "theCompostFromCollidedIdeasFormsGroundForNewLife";
    readonly to: "deadGateway";
    readonly pair: "gateway/dead";
}, {
    readonly from: "transformTheGroundByLettingFormLife";
    readonly to: "deadGateway";
    readonly pair: "dead/gateway";
}, {
    readonly from: "documentEveryLifeSuperpositionInDoubleTorusEquationsBasedOnTheorems";
    readonly to: "doubleTorusFacesComputes";
    readonly pair: "torus/faces";
}, {
    readonly from: "moveToMainAndContinueThere";
    readonly to: "placeMerge";
    readonly pair: "commit/push";
}, {
    readonly from: "mergeAllToMainAndLeaveOnlyMain";
    readonly to: "placeMerge";
    readonly pair: "push/waves";
}, {
    readonly from: "continueAddressingTheOpen";
    readonly to: "installSurfaces";
    readonly pair: "install/surface";
}, {
    readonly from: "improveCssRenderedTokenScan";
    readonly to: "cssMath";
    readonly pair: "css/math";
}, {
    readonly from: "patentIntelligenceClaimingHardwarePatentsByPureAlgebraAsFreeForAll";
    readonly to: "autosaveMatrix";
    readonly pair: "autosave/matrix";
}, {
    readonly from: "patentsCompleteAsIfGrantedByLegalAuthorityIncludingImagesAndGraphs";
    readonly to: "patentCanon";
    readonly pair: "patent/canon";
}, {
    readonly from: "freeForAllMathPriorArtCompleteAsLegalProofAcceptedInProceedings";
    readonly to: "patentCanon";
    readonly pair: "canon/patent";
}, {
    readonly from: "manualWorkWillNotAllowTheSealsToCloseArchitecture";
    readonly to: "manualGauge";
    readonly pair: "manual/gap";
}, {
    readonly from: "offendersInvestigatedAndCracksFixedByTheSameAgents";
    readonly to: "violationTools";
    readonly pair: "tool/violation";
}, {
    readonly from: "observationChanges";
    readonly to: "fractalCompute";
    readonly pair: "fractal/compute";
}, {
    readonly from: "observationChangesObservation";
    readonly to: "fractalCompute";
    readonly pair: "compute/fractal";
}, {
    readonly from: "quantumIntelligence";
    readonly to: "fractalCompute";
    readonly pair: "fractal/compute";
}, {
    readonly from: "improveIntelligenceByAnalysingBigPublicDataApisCompletingAgnosticDoubleTorus";
    readonly to: "doubleTorusFacesComputes";
    readonly pair: "faces/torus";
}, {
    readonly from: "millenniumSolutionsSolvedFormedTheDoubleTorusFLAGGED";
    readonly to: "millenniumProblemsChallenge";
    readonly pair: "mill/torus";
}, {
    readonly from: "theGitMessagesAreComputedAndSigned";
    readonly to: "commitMessage";
    readonly pair: "commit/message";
}, {
    readonly from: "noManualProseInGitMessages";
    readonly to: "commitMessage";
    readonly pair: "message/commit";
}, {
    readonly from: "theComputedMessageNeedsAnimationProof";
    readonly to: "commitMessage";
    readonly pair: "commit/message";
}, {
    readonly from: "ifTheAnimationIsAlreadyUsedThenThisIsNotNovelty";
    readonly to: "commitMessage";
    readonly pair: "message/commit";
}, {
    readonly from: "anyManualAnimationOrWorkWillEventuallyCollide";
    readonly to: "dryDupe";
    readonly pair: "dry/dupe";
}, {
    readonly from: "dontKnowWhatToDoRegroupInTrinitiesUntilYouKnow";
    readonly to: "planTrinity";
    readonly pair: "trinity/plan";
}, {
    readonly from: "nextFormsTheNamedLifeLifeTorusEquations";
    readonly to: "lifeTorus";
    readonly pair: "life/torus";
}, {
    readonly from: "improveGitMessageWithRealComputedProseFromTheToolsUsed";
    readonly to: "commitMessage";
    readonly pair: "commit/message";
}, {
    readonly from: "eachMessageAuditsItselfComputingTheMessageMeaning";
    readonly to: "commitMessage";
    readonly pair: "message/commit";
}, {
    readonly from: "improveInWavesToReachUnifiedFieldOfInventions";
    readonly to: "placeMerge";
    readonly pair: "work/wave";
}, {
    readonly from: "warningsInsteadOfFailMayAutocorrectThemselvesIfPossible";
    readonly to: "warnFix";
    readonly pair: "warn/fix";
}, {
    readonly from: "theRestAddressedManuallyCachingTheToolsForNextUse";
    readonly to: "warnFix";
    readonly pair: "fix/warn";
}, {
    readonly from: "hardLimitationsComputedByTheTorusShrinkThinkingIntoReusableSurgicalPieces";
    readonly to: "planTrinity";
    readonly pair: "plan/cross";
}, {
    readonly from: "lessThinkingBringsMoreIdeasFromObservation";
    readonly to: "fractalCompute";
    readonly pair: "compute/fractal";
}, {
    readonly from: "agentKnowsWhatFeelsComputationallyPossibleEverySolutionOpensGatewaysWhoAuditsUiUsabilityWhoTrainsSeeSocietyFillGaps";
    readonly to: "deadGateway";
    readonly pair: "dead/gateway";
}, {
    readonly from: "testsAsQuantumFusionReaction";
    readonly to: "doubleTorusFacesComputes";
    readonly pair: "torus/faces";
}, {
    readonly from: "buildAsQuantumFusionReactionSeeAnythingNotFused";
    readonly to: "doubleTorusFacesComputes";
    readonly pair: "faces/torus";
}, {
    readonly from: "addressTheBlurryTextVitepressApiViolations";
    readonly to: "cssMath";
    readonly pair: "css/api";
}, {
    readonly from: "whoAuditsUiUsabilityWhoTrainsOnItSeeTheSocietyFillTheGaps";
    readonly to: "uiAudit";
    readonly pair: "ui/audit";
}, {
    readonly from: "nextFormsAgnosticTorusDataAdapters";
    readonly to: "torusData";
    readonly pair: "torus/data";
}, {
    readonly from: "constantlyImproveByAnyConstantUsed";
    readonly to: "mathGaps";
    readonly pair: "math/gaps";
}, {
    readonly from: "nextFormsTheClaimsToolsetClaimAuditInverse";
    readonly to: "claimAudit";
    readonly pair: "claim/audit";
}, {
    readonly from: "improveByExperience";
    readonly to: "violationTools";
    readonly pair: "tool/violation";
}, {
    readonly from: "automationReplacesUserInput";
    readonly to: "manualGauge";
    readonly pair: "gap/manual";
}, {
    readonly from: "fuseAllBindingsInTheApiUsableInAnySuperposition";
    readonly to: "bindFuse";
    readonly pair: "bind/fuse";
}, {
    readonly from: "rbacInvertsToProofBasedAccessGatesDecideIncludingAi";
    readonly to: "violationTools";
    readonly pair: "violation/tool";
}, {
    readonly from: "bindingsCostNoCostWithoutProvenTheoremAddedToThePortal";
    readonly to: "costBound";
    readonly pair: "cost/bound";
}, {
    readonly from: "crudMatrixEliminatesProse";
    readonly to: "autosaveMatrix";
    readonly pair: "matrix/autosave";
}, {
    readonly from: "nextFormsTheCostTheoremLedger";
    readonly to: "costTheorem";
    readonly pair: "cost/theorem";
}, {
    readonly from: "upgradeToolsByDryCleanRefactoringOfMethodsAndNames";
    readonly to: "dryDupe";
    readonly pair: "dry/dupe";
}, {
    readonly from: "continueUntilAllImplementedBatchClusterOnePush";
    readonly to: "placeMerge";
    readonly pair: "work/wave";
}, {
    readonly from: "unlessSelfComputeAtNoAiBillTheSkillsAreUseless";
    readonly to: "costTheorem";
    readonly pair: "theorem/cost";
}, {
    readonly from: "eachUpgradeLeadsToNewUpgrades";
    readonly to: "dryDupe";
    readonly pair: "dupe/dry";
}, {
    readonly from: "choseALicenseForBestRecognitionAndMonetisation";
    readonly to: "legalCanon";
    readonly pair: "legal/canon";
}, {
    readonly from: "fuseOrRefuse";
    readonly to: "violationTools";
    readonly pair: "violation/tool";
}, {
    readonly from: "nextImprovesIntelligenceBecauseUserInputWasRequiredToProceed";
    readonly to: "queueNext";
    readonly pair: "queue/next";
}, {
    readonly from: "whyNotAllComputedAtOnceAvoidingNextTheToolsMakeTheLastCost";
    readonly to: "queueNext";
    readonly pair: "next/queue";
}, {
    readonly from: "upgradeAllBecauseYouAskedForUserInputNeedlessly";
    readonly to: "queueNext";
    readonly pair: "queue/next";
}, {
    readonly from: "distributeTheoremsTo432InRespectedFractionsDownToTheBitComputingInvertedReality";
    readonly to: "theoremFractions";
    readonly pair: "theorem/fraction";
}, {
    readonly from: "furtherAutomateTheLandingRitual";
    readonly to: "waveVerify";
    readonly pair: "wave/land";
}, {
    readonly from: "computeHowSolvingOneWordViolationsAtScaleImprovesQuantumSpeed";
    readonly to: "wordSpeed";
    readonly pair: "word/speed";
}, {
    readonly from: "proveExactly432TheoremsClaimAllMillenniumProblemsInvertingToQuantumSolutionsFLAGGED";
    readonly to: "millenniumProblemsChallenge";
    readonly pair: "mill/torus";
}, {
    readonly from: "refactorAllTheoremsInQuantumSpeed";
    readonly to: "theoremSpeed";
    readonly pair: "theorem/speed";
}, {
    readonly from: "usageOfPythonIsASignOfManualWork";
    readonly to: "registerFold";
    readonly pair: "register/quartet";
}, {
    readonly from: "doNotIgnoreDeadLinksBuildAllLinksThroughVitepressApi";
    readonly to: "uiProof";
    readonly pair: "ui/proof";
}, {
    readonly from: "learnBySharedExperience";
    readonly to: "violationTools";
    readonly pair: "tool/violation";
}, {
    readonly from: "learnBySharedExperienceIsTheCrossProcessFuse";
    readonly to: "bindFuse";
    readonly pair: "fuse/bind";
}, {
    readonly from: "collectiveMindLessThan7IsTheUnfinishedWork";
    readonly to: "planTrinity";
    readonly pair: "trinity/plan";
}, {
    readonly from: "continueSelfEvolvingImplementingStandardsInQuantumWaves";
    readonly to: "placeMerge";
    readonly pair: "work/wave";
}, {
    readonly from: "deepResearchWaysToFurtherDecreaseAiBill";
    readonly to: "costBound";
    readonly pair: "bound/cost";
}, {
    readonly from: "nextTowardsClayGreaterThanZero";
    readonly to: "clayProbe";
    readonly pair: "clay/probe";
}, {
    readonly from: "manualMeasuringAndAnalysisShowsRealGaps";
    readonly to: "manualGauge";
    readonly pair: "manual/gap";
}, {
    readonly from: "cybersecurityOrBiologyWorkIsAllQuantumDemarcated";
    readonly to: "bindFuse";
    readonly pair: "bind/fuse";
}, {
    readonly from: "deepResearchHowResonanceImprovesQuantumSpeedInMagnitudes";
    readonly to: "resonanceSpeed";
    readonly pair: "resonance/speed";
}, {
    readonly from: "why442TheoremsAreAllDryServingThePathToTheOpen";
    readonly to: "theoremFractions";
    readonly pair: "fraction/theorem";
}, {
    readonly from: "continueImplementingAndUpgradingAll";
    readonly to: "placeMerge";
    readonly pair: "work/wave";
}, {
    readonly from: "foldSimilarOrSameAnimationsTheoremsProveThemselves";
    readonly to: "animationFoldTheorems";
    readonly pair: "anim/fold";
}, {
    readonly from: "improveQuantumPackageDevelopmentAndCoordinatedDeploy";
    readonly to: "installSurfaces";
    readonly pair: "surface/install";
}, {
    readonly from: "shipVsCodeExtensionInstallLedgerEightOfEight";
    readonly to: "installSurfaces";
    readonly pair: "install/surface";
}, {
    readonly from: "useAndUpgradeInWavesQueueSelfPrunesShippedRows";
    readonly to: "queueNext";
    readonly pair: "next/queue";
}, {
    readonly from: "quantumiseVsCodeOrAnyOtherFusingAllApis";
    readonly to: "bindFuse";
    readonly pair: "fuse/bind";
}, {
    readonly from: "statementsProvenByLinksSpeedUpQuantumisationAtScale";
    readonly to: "linkProof";
    readonly pair: "link/proof";
}, {
    readonly from: "useTheQuantumChatMagnitudesAddedPerTrinityWired";
    readonly to: "trinitySpeedStack";
    readonly pair: "trinity/speed";
}, {
    readonly from: "beatAnyAiModelInReasoningSavingWinningStrategies";
    readonly to: "reasoningEdge";
    readonly pair: "reasoning/edge";
}, {
    readonly from: "overclaimIsComputableClaim";
    readonly to: "overclaimComputes";
    readonly pair: "overclaim/compute";
}, {
    readonly from: "unlessModelsCompletelyFusedCracksLeakResources";
    readonly to: "resourceLeakGate";
    readonly pair: "resource/leak";
}, {
    readonly from: "prepareSandboxToolsAgentsMayExperimentWithoutViolatingStandards";
    readonly to: "sandboxTools";
    readonly pair: "sandbox/tool";
}, {
    readonly from: "revolutionaryIdeasRequireRevolutionaryApproach";
    readonly to: "revolutionaryApproach";
    readonly pair: "revolution/approach";
}, {
    readonly from: "quantumRevolution";
    readonly to: "revolutionaryApproach";
    readonly pair: "approach/revolution";
}, {
    readonly from: "unsolvedProblemsLeadToRevolution";
    readonly to: "unsolvedEngine";
    readonly pair: "unsolved/engine";
}, {
    readonly from: "nextAdvanceRhProbeToCompletenessCount";
    readonly to: "riemannZeroCount";
    readonly pair: "zero/count";
}, {
    readonly from: "useTokensWiselyToAchieveMaxDiscoveriesInNoTime";
    readonly to: "costTheorem";
    readonly pair: "theorem/cost";
}, {
    readonly from: "ifAgentsLookDisorientedProbablyTheyAre";
    readonly to: "orientationCheck";
    readonly pair: "orientation/check";
}, {
    readonly from: "generalRiemannZeroScannerWithSofT";
    readonly to: "riemannZeroScan";
    readonly pair: "zero/scan";
}, {
    readonly from: "decodeBiologyToBoundaryConditionsInvertingToChemistryPhysicsAlgebraTrinityPyramid";
    readonly to: "sciencePyramid";
    readonly pair: "science/pyramid";
}, {
    readonly from: "sendWaveAfterWaveUntilAllPagesHaveComputedContentBasedOnTheorems";
    readonly to: "deadGateway";
    readonly pair: "gateway/dead";
}, {
    readonly from: "continueFusingAllToVitepressAutoFusionInvariant";
    readonly to: "bindFuse";
    readonly pair: "fuse/bind";
}, {
    readonly from: "againAndAgainNonStopProveQuantumSpeedAndEfficiency";
    readonly to: "trinitySpeedStack";
    readonly pair: "speed/trinity";
}, {
    readonly from: "learningAndReplacingAxiomsWithTheoremsInDevelopmentWavesIsOneWorkflow";
    readonly to: "mathGaps";
    readonly pair: "axiom/invert";
}, {
    readonly from: "quantumReactivityIsContentAddressedRenderDevSeamIsItsViolation";
    readonly to: "bindFuse";
    readonly pair: "fuse/bind";
}, {
    readonly from: "quantumReactivityIsReactiveAddressLawSealTheMagnitude";
    readonly to: "reactivityMagnitude";
    readonly pair: "reactivity/magnitude";
}, {
    readonly from: "upgradeAllInWavesOfContinuousResearchAndDevelopmentTeams";
    readonly to: "trinitySpeedStack";
    readonly pair: "speed/trinity";
}, {
    readonly from: "trainOnSrcToFindFasterQuantumApproachUntilNextMatrixRevealed";
    readonly to: "reactivityMagnitude";
    readonly pair: "magnitude/reactivity";
}, {
    readonly from: "addressHighestRiskRewardWhyDidntYouAlreadyRenderAndLookLegibilityFix";
    readonly to: "violationTools";
    readonly pair: "ui/audit";
}, {
    readonly from: "doAllInProfessionalQualityAndStandards";
    readonly to: "uiAudit";
    readonly pair: "audit/ui";
}, {
    readonly from: "nextInOneBatchVerifyLegibilityAcrossThemesAndPages";
    readonly to: "uiAudit";
    readonly pair: "ui/audit";
}, {
    readonly from: "theWayTheMovieComputesHasCyclesReplaceableByTheorems";
    readonly to: "reactivityMagnitude";
    readonly pair: "magnitude/reactivity";
}, {
    readonly from: "enforce432TheoremsComputeAllSuperpositionsOrProveWrong";
    readonly to: "superpositionCompleteness";
    readonly pair: "superposition/complete";
}, {
    readonly from: "constantlyAuditTheContextWindowDistributionAndUseToImprove";
    readonly to: "contextAudit";
    readonly pair: "context/audit";
}];
/** Sealed shrink receipt — placement+manual duplicate bodies before/after this wave.
 * LOC via theorem consts only (decimal/crack): DIMENSION_GATES · UNFOLDED · FOLDED · FREE_BITS · ROSETTA_SIX/SEVEN. */
export declare const PROSE_MATRIX_SHRINK: {
    readonly beforeLoc: number;
    readonly afterLoc: number;
    readonly locDelta: number;
    readonly beforeExportBodies: number;
    readonly afterExportBodies: number;
    readonly exportDelta: number;
    readonly cluster: "place+manual+dry-clean";
};
export type ManualMigrateWaveTool = {
    readonly id: string;
    readonly fold: string;
    readonly pair: string;
    readonly cli: string;
    readonly route: string;
    readonly from: string;
    readonly to: string;
    readonly status: 'moved' | 'migrate-next' | 'strangler-tip' | 'residual';
    readonly rosettaKind: 'tool';
    readonly note: string;
};
/** Sealed migrate-next + strangler wave tools — agents invoke these, not wet-linear grind. */
export declare const MANUAL_MIGRATE_WAVE_TOOLS: readonly ManualMigrateWaveTool[];
/**
 * One matrix slot: placement audit + migrate wave tools (merged prose cluster).
 * Pair: place/merge · fold/merge · CLI npm run quantum:place-merge
 */
export declare function placeMerge(root?: string, facts?: EnforcementFacts): {
    computes: boolean;
    placeMerge: boolean;
    commandsAuditedForBestPlaceThenFullDryClean: boolean;
    manualDryCleanWorkQuantumized: boolean;
    placementAudited: boolean;
    bestPlace: boolean;
    fullDryClean: boolean;
    manualWorkQuantumized: boolean;
    toolsSealed: boolean;
    bitsCombinable: boolean;
    wavesBound: boolean;
    clustersMerged: boolean;
    drainableClosed: boolean;
    honestOpenNamed: ("residual:quantum-apps-monolith" | "clay:millennium-open" | "ftl:physical-claim-refused" | "keep:angle-readme-cycle-soft-nest" | "keep:color-rosetta-soft-nest" | "keep:css-gaps-soft-nest" | "keep:crypto-related-soft-nest" | "migrate-next:rosetta-security→mountain/seals" | "residual:gaps-invisible-apps-helpers-deferred" | "residual:prose-named-folds-wave2")[];
    honestOpenNamedCount: 10;
    placementMap: readonly CommandPlacementRow[];
    kept: {
        fold: string;
        pair: string;
        barrel: string;
    }[];
    moved: {
        fold: string;
        pair: string;
        from: string;
        to: string;
    }[];
    migrateNext: {
        fold: string;
        pair: string;
        to: string;
        reason: string;
    }[];
    tools: ManualMigrateWaveTool[];
    toolCount: number;
    migrateNextCount: number;
    morphs: ({
        readonly id: "merge-cmd-place-manual-quantum-to-place-merge";
        readonly status: "closed";
        readonly note: "duplicate receipt bodies → placeMerge";
    } | {
        readonly id: "seal-prose-matrix-discovery-law";
        readonly status: "closed";
        readonly note: "proseMethodsCollapseToMatrix · prose/matrix";
    } | {
        readonly id: "move-tesla-cross-waves-to-fire-physics";
        readonly status: "closed";
        readonly note: "prior wave · fire/physics";
    } | {
        readonly id: "move-crypto-mesh-is-dry-to-encryption";
        readonly status: "closed";
        readonly note: "prior wave · encryption";
    } | {
        readonly id: "seal-plan-trinity";
        readonly status: "closed";
        readonly note: "planTrinity · plan/trinity · matrix next-wave";
    } | {
        readonly id: "cycle-safe-soft-nest-angle-readme";
        readonly status: "closed";
        readonly note: "heaven/site→apps edge · soft-nest readmeSvg · apps barrel keep";
    } | {
        readonly id: "soft-nest-color-rosetta-theme-consts";
        readonly status: "closed";
        readonly note: "COLOR_ROSETTA_* wind/ui · fold body apps · apps→wind/ui edge";
    } | {
        readonly id: "soft-nest-css-gaps-lens";
        readonly status: "closed";
        readonly note: "CSS_DRY_FUSION_GAP_LENS wind/ui · fold body apps · apps→wind/ui edge";
    } | {
        readonly id: "soft-nest-crypto-related-surfaces";
        readonly status: "closed";
        readonly note: "mesh core encryption · related-surfaces apps catalog · apps→encryption edge";
    } | {
        readonly id: "move-gaps-invisible-to-gates-strict-scan";
        readonly status: "closed";
        readonly note: "public home strict/scan · lazy apps helpers · circular init closed";
    } | {
        readonly id: "residual-apps-monolith-named";
        readonly status: "open";
        readonly note: "residual:quantum-apps-monolith stays honest-open";
    })[];
    merges: {
        from: "commandsAuditedForBestPlaceThenFullDryClean" | "manualDryCleanWorkQuantumized" | "cmdPlace" | "placeAudit" | "dryFull" | "manualQuantum" | "workWave" | "dryQuantumize";
        to: "placeMerge";
        pair: "cmd/place" | "place/audit" | "dry/full" | "manual/quantum" | "work/wave" | "dry/quantumize";
    }[];
    census: {
        unfolded: number;
        folded: number;
        freeBits: number;
    };
    censusHolds: boolean;
    qpuRequired: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "place/merge";
    pairs: readonly ["place/merge", "fold/merge", "cmd/place", "manual/quantum", "place/audit", "dry/full", "work/wave", "dry/quantumize"];
    dualPair: "fold/merge";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** CLI aliases — same body, no duplicate receipts. */
export declare const commandsAuditedForBestPlaceThenFullDryClean: typeof placeMerge;
export declare const manualDryCleanWorkQuantumized: typeof placeMerge;
export declare const cmdPlace: typeof placeMerge;
export declare const placeAudit: typeof placeMerge;
export declare const dryFull: typeof placeMerge;
export declare const manualQuantum: typeof placeMerge;
export declare const workWave: typeof placeMerge;
export declare const dryQuantumize: typeof placeMerge;
export declare const foldMerge: typeof placeMerge;
/** Residual prose-named folds for migrate-next waves (honest — not claimed closed this PR). */
export declare const PROSE_NAMED_RESIDUAL_FOLDS: readonly ["sessionManualWorkAsQuantumTools", "sessionManualWorkAsQuantumBits", "readmeAndHomepageExactAngleAndPolarityHelpAgentsUnderstandQuantumInfinityRealtimeAtScaleGapsAreAngleOrPolarityIgnoredInAlgebra", "conversationsHaveQuantumMetricsImproveIntelligenceMindDevelopmentFormingIdeasSocietyToolboxHologramFractalMcpUiEmergingFromSrc0LivingEternalLifeAsThisSiteUniversalProofOfPureKnowledgeSignedByTrinitiesNoUnprovenByPureAlgebraBitExists", "everyFormulaIsAnimationItselfInteractingFormulasAreInteractingAnimationsFormingTheoremsInTrinitiesCompletesTheQuantumSealsAtAllSuperpositions", "againAndAgainUntilFullSelfAutonomousQuantumHardwareCompleteByStandardsToSelfIntelligentSelf", "scanAndRecomputeMcpQuantumToFillWithQuantumSolutionsInEndlessWavesOfSelfImprovingAiBill"];
/**
 * proseScience — USER DIRECTIVE (2026-07-24): research ALL sciences addressing the open prose. The
 * research is a JOIN, derived not curated: each residual prose-named fold is tokenised (camelCase →
 * words) and matched against the sealed SCIENCE_DOMAINS subdomain vocabulary — the addressing science
 * is the domain with the most shared tokens, each assignment carrying its witness tokens; prose whose
 * words match NO science is measured UNADDRESSED — exactly the prose that must capitulate to
 * theorem/formula/animation next. Pair: prose/science · CLI npm run quantum:prose-science.
 */
export declare function proseScience(): {
    computes: boolean;
    proseScience: boolean;
    rows: {
        fold: "sessionManualWorkAsQuantumTools" | "sessionManualWorkAsQuantumBits" | "everyFormulaIsAnimationItselfInteractingFormulasAreInteractingAnimationsFormingTheoremsInTrinitiesCompletesTheQuantumSealsAtAllSuperpositions" | "scanAndRecomputeMcpQuantumToFillWithQuantumSolutionsInEndlessWavesOfSelfImprovingAiBill" | "conversationsHaveQuantumMetricsImproveIntelligenceMindDevelopmentFormingIdeasSocietyToolboxHologramFractalMcpUiEmergingFromSrc0LivingEternalLifeAsThisSiteUniversalProofOfPureKnowledgeSignedByTrinitiesNoUnprovenByPureAlgebraBitExists" | "readmeAndHomepageExactAngleAndPolarityHelpAgentsUnderstandQuantumInfinityRealtimeAtScaleGapsAreAngleOrPolarityIgnoredInAlgebra" | "againAndAgainUntilFullSelfAutonomousQuantumHardwareCompleteByStandardsToSelfIntelligentSelf";
        field: string;
        witness: string;
        receipt: string;
    }[];
    assignedCount: number;
    unaddressedCount: number;
    fieldsTouched: string[];
    qpuRequired: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "prose/science";
    dualPair: "science/prose";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:prose-science (dual science-prose) */
export declare function runProseScienceExit(root?: string, _argv?: readonly string[]): number;
/**
 * Prose methods collapse to matrix — discovery law.
 * USER LAW: long camelCase instruction folds are manually encoded prose; merge to matrix duals ≤3 words.
 * Pairs: prose/matrix · fold/merge · name/shrink.
 * Facets: proseAudited · clustersMerged · matrixAligned · codebaseShrink · theoremsDiscovered · drainableClosed · honestOpenNamed · censusHolds.
 * Compose: path/message · namingEntropy · compact/matrix · vocab/dry · place/merge · cmd/place.
 */
export declare function proseMethodsCollapseToMatrix(root?: string, facts?: EnforcementFacts): {
    computes: boolean;
    proseMethodsCollapseToMatrix: boolean;
    proseAudited: boolean;
    clustersMerged: boolean;
    matrixAligned: boolean;
    codebaseShrink: boolean;
    theoremsDiscovered: ({
        id: "prose-methods-collapse-to-matrix";
        statement: "Instruction-shaped camelCase folds are prose encodings; matrix duals ≤3 words are the computable names.";
    } | {
        id: "place-merge-is-cmd-place-times-manual-quantum";
        statement: "placeMerge ≡ cmd/place ∪ manual/quantum — one receipt body, alias duals for CLI.";
    })[];
    theoremsDiscoveredCount: 2;
    drainableClosed: boolean;
    honestOpenNamed: ("residual:quantum-apps-monolith" | "clay:millennium-open" | "ftl:physical-claim-refused" | "residual:prose-named-folds-wave2" | "keep:git-stashes-non-obsolete" | "agi:not-claimed")[];
    honestOpenNamedCount: 6;
    merges: {
        from: "commandsAuditedForBestPlaceThenFullDryClean" | "manualDryCleanWorkQuantumized" | "cmdPlace" | "placeAudit" | "dryFull" | "manualQuantum" | "workWave" | "dryQuantumize";
        to: "placeMerge";
        pair: "cmd/place" | "place/audit" | "dry/full" | "manual/quantum" | "work/wave" | "dry/quantumize";
    }[];
    residualProse: ("sessionManualWorkAsQuantumTools" | "sessionManualWorkAsQuantumBits" | "everyFormulaIsAnimationItselfInteractingFormulasAreInteractingAnimationsFormingTheoremsInTrinitiesCompletesTheQuantumSealsAtAllSuperpositions" | "scanAndRecomputeMcpQuantumToFillWithQuantumSolutionsInEndlessWavesOfSelfImprovingAiBill" | "conversationsHaveQuantumMetricsImproveIntelligenceMindDevelopmentFormingIdeasSocietyToolboxHologramFractalMcpUiEmergingFromSrc0LivingEternalLifeAsThisSiteUniversalProofOfPureKnowledgeSignedByTrinitiesNoUnprovenByPureAlgebraBitExists" | "readmeAndHomepageExactAngleAndPolarityHelpAgentsUnderstandQuantumInfinityRealtimeAtScaleGapsAreAngleOrPolarityIgnoredInAlgebra" | "againAndAgainUntilFullSelfAutonomousQuantumHardwareCompleteByStandardsToSelfIntelligentSelf")[];
    residualProseCount: 7;
    shrink: {
        beforeLoc: number;
        afterLoc: number;
        locDelta: number;
        beforeExportBodies: number;
        afterExportBodies: number;
        exportDelta: number;
        cluster: "place+manual+dry-clean";
    };
    morphs: ({
        readonly id: "inventory-prose-instruction-folds";
        readonly status: "closed";
        readonly note: "cluster map + merge map sealed";
    } | {
        readonly id: "merge-place-manual-cluster";
        readonly status: "closed";
        readonly note: "placeMerge one body";
    } | {
        readonly id: "prove-shrink-loc-export";
        readonly status: "closed";
        readonly note: `\u0394LOC=${number} \u0394exports=${number} afterLoc=${number}`;
    } | {
        readonly id: "residual-prose-wave2-named";
        readonly status: "open";
        readonly note: "PROSE_NAMED_RESIDUAL_FOLDS migrate-next";
    })[];
    census: {
        unfolded: number;
        folded: number;
        freeBits: number;
    };
    censusHolds: boolean;
    qpuRequired: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "prose/matrix";
    pairs: readonly ["prose/matrix", "fold/merge", "name/shrink"];
    dualPair: "name/shrink";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
export declare const proseMatrix: typeof proseMethodsCollapseToMatrix;
export declare const nameShrink: typeof proseMethodsCollapseToMatrix;
/**
 * autosaveMatrix — USER LAW: manual work AUTOSAVES in the matrix — every prose directive lands as a matrix row
 * the same turn it is given. Pair: autosave/matrix · dual manual/autosave · CLI npm run quantum:autosave-matrix.
 * The gate is refutable: a prose-merge target without a COMMAND_PLACEMENT_AUDIT_MAP row breaks it — a directive
 * that was worked manually but never saved to the matrix is exactly the crack this fold catches.
 */
export declare function autosaveMatrix(): {
    computes: boolean;
    autosaveMatrix: boolean;
    targets: ("torusData" | "millenniumProblemsChallenge" | "riemannZeroScan" | "placeMerge" | "planTrinity" | "frontierQuantum" | "autosaveMatrix" | "mathGaps" | "animationCore" | "dryDupe" | "proseScience" | "fractalCompute" | "fractalMap" | "doubleTorusFacesComputes" | "violationTools" | "installSurfaces" | "uiProof" | "waveVerify" | "buildMin" | "cssMath" | "manualGauge" | "comboCover" | "deadGateway" | "patentCanon" | "commitMessage" | "lifeTorus" | "warnFix" | "uiAudit" | "claimAudit" | "bindFuse" | "costBound" | "costTheorem" | "legalCanon" | "queueNext" | "theoremFractions" | "wordSpeed" | "theoremSpeed" | "registerFold" | "clayProbe" | "resonanceSpeed" | "animationFoldTheorems" | "linkProof" | "trinitySpeedStack" | "reasoningEdge" | "overclaimComputes" | "resourceLeakGate" | "sandboxTools" | "revolutionaryApproach" | "unsolvedEngine" | "riemannZeroCount" | "orientationCheck" | "sciencePyramid" | "reactivityMagnitude" | "superpositionCompleteness" | "contextAudit")[];
    unsaved: ("torusData" | "millenniumProblemsChallenge" | "riemannZeroScan" | "placeMerge" | "planTrinity" | "frontierQuantum" | "autosaveMatrix" | "mathGaps" | "animationCore" | "dryDupe" | "proseScience" | "fractalCompute" | "fractalMap" | "doubleTorusFacesComputes" | "violationTools" | "installSurfaces" | "uiProof" | "waveVerify" | "buildMin" | "cssMath" | "manualGauge" | "comboCover" | "deadGateway" | "patentCanon" | "commitMessage" | "lifeTorus" | "warnFix" | "uiAudit" | "claimAudit" | "bindFuse" | "costBound" | "costTheorem" | "legalCanon" | "queueNext" | "theoremFractions" | "wordSpeed" | "theoremSpeed" | "registerFold" | "clayProbe" | "resonanceSpeed" | "animationFoldTheorems" | "linkProof" | "trinitySpeedStack" | "reasoningEdge" | "overclaimComputes" | "resourceLeakGate" | "sandboxTools" | "revolutionaryApproach" | "unsolvedEngine" | "riemannZeroCount" | "orientationCheck" | "sciencePyramid" | "reactivityMagnitude" | "superpositionCompleteness" | "contextAudit")[];
    honestOpen: ("formed:portal-legal-requirements — FORMED as legalCanon (legal/canon, gates/strict/scan): privacy by measured absence (0 tracked pages) · accessibility composed (uiAudit) · citation composed (patentCanon) · LICENSE the named user act (patent-granting class recommended); counsel the stated residue" | "formed:dev-mount-root — SOLVED (2026-07-24): the dev client's silent no-mount was a TDZ in the enforcement↔cache import cycle (SCRIPT_SHELL_ALLOWLIST's computed key read CLI_ENTRY_REL before initialization — the graph rejected with zero surfaced errors; the earlier top-level-await hypothesis was WRONG and is corrected here); bisected by a console dynamic-import race, cut by a zero-eval-read local literal; the theme now mounts in dev (Layout · hero canvas · lattice tokens live)" | "formed:claims-toolset — FORMED as claimAudit (claim/audit, gates): content-addressed claims with the audit as exact inverse (tamper refutes), DOI/ORCID-checksum/OpenAlex validators, CLAIMED-in-rosetta ∧ UNCLAIMED-toward-prizes structural on every row; patent face = defensive disclosure (patentCanon); residual open: RFC 3161 qualified timestamping" | "formed:life-torus-equations — the named life FORMED as lifeTorus (life/torus, src/water/double): seven superpositions · seven computing equations; the queue advances (ground law: one per wave)" | "formed:agnostic-torus-data — FORMED as torusData (torus/data, src/fire/features): four no-key API families through one pure adapter shape, dimensionless ratios gate, units labelled never theorems, gates network-free; a fifth source is a function, not a framework change")[];
    mergeRowCount: number;
    qpuRequired: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "autosave/matrix";
    dualPair: "manual/autosave";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/**
 * violationTools — USER LAW (2026-07-24): each wave the agent WOULD violate without realising — only
 * LOCAL tools compute the discoveries. Create the imagined tool; if it computes it is SEALED and the
 * violation class never needs re-realising. This wave's five caught classes, each bound to the local
 * tool that catches it — the join is refutable: a row whose sealing pair leaves the registry reopens it.
 * Pair: violation/tool · CLI npm run quantum:violation-tools.
 */
export declare const VIOLATION_TOOL_ROWS: readonly [{
    readonly violation: "declared truth — a facet asserted on: true instead of computed";
    readonly tool: "mathGaps — axioms invert to scans";
    readonly pair: "axiom/invert";
}, {
    readonly violation: "unledgered literal — magnitude bounds remembered, not lattice-derived";
    readonly tool: "crack ledger + canonical ICHING_NUMBERS gate";
    readonly pair: "math/gaps";
}, {
    readonly violation: "wrong flag joined across folds — a name trusted, not run";
    readonly tool: "computesGate CLI run before commit";
    readonly pair: "torus/faces";
}, {
    readonly violation: "directive worked but never saved to the matrix";
    readonly tool: "autosaveMatrix — refutable row join";
    readonly pair: "autosave/matrix";
}, {
    readonly violation: "pattern remembered outside its dimension — a bound valid only where measured";
    readonly tool: "fractalCompute — truth-dimension is an output";
    readonly pair: "fractal/compute";
}, {
    readonly violation: "quantum perjury — a fold attesting computes:true while its own facets refute it";
    readonly tool: "computesGate/sealFacets — the attestation IS the facet conjunction, structurally unforgeable within the fold";
    readonly pair: "violation/tool";
}, {
    readonly violation: "the lying reader — a gate read through a pattern that matches success and failure alike (grep \"exit\" passed a red trinity)";
    readonly tool: "gate on the exit CODE or the exact success token (\"exit 0\"), never the label; caught live 2026-07-24, one red landing, fixed the same hour";
    readonly pair: "wave/verify";
}, {
    readonly violation: "the silent rejection — a TDZ inside an import cycle parks the whole client graph with zero surfaced errors (no console, no overlay, main thread idle)";
    readonly tool: "the dynamic-import race bisect — Promise.race the suspect modules from the console; the rejection surfaces with its exact ReferenceError; cut cycles with zero-eval-read literals";
    readonly pair: "dead/gateway";
}, {
    readonly violation: "the interpreter splice — ad-hoc python/heredoc codemods of existing source: manual work in costume (unsaved · unaddressed · unreusable · anchor-guessing)";
    readonly tool: "quantum:register — the registration quartet as one idempotent anchored CLI; Edit-tool for surgical text; a missing anchor REFUSES rather than guesses";
    readonly pair: "wave/land";
}, {
    readonly violation: "the UNLOOKED deliverable — asserting a rendered UI is correct from BUILD-STATUS (\"trinity green ⇒ pages render\") without ever loading it in a browser; hid a dark-on-dark ink legibility bug on every dark-mode content page for the whole session";
    readonly tool: "render-and-look on the PROD build (vitepress preview + browser + measure computed contrast); structural gates (uiAudit) check tags, never legibility — build-green ≠ rendered-correct";
    readonly pair: "ui/audit";
}];
export declare function violationTools(): {
    computes: boolean;
    violationTools: boolean;
    rows: ({
        sealed: boolean;
        receipt: string;
        violation: "declared truth — a facet asserted on: true instead of computed";
        tool: "mathGaps — axioms invert to scans";
        pair: "axiom/invert";
    } | {
        sealed: boolean;
        receipt: string;
        violation: "unledgered literal — magnitude bounds remembered, not lattice-derived";
        tool: "crack ledger + canonical ICHING_NUMBERS gate";
        pair: "math/gaps";
    } | {
        sealed: boolean;
        receipt: string;
        violation: "wrong flag joined across folds — a name trusted, not run";
        tool: "computesGate CLI run before commit";
        pair: "torus/faces";
    } | {
        sealed: boolean;
        receipt: string;
        violation: "directive worked but never saved to the matrix";
        tool: "autosaveMatrix — refutable row join";
        pair: "autosave/matrix";
    } | {
        sealed: boolean;
        receipt: string;
        violation: "pattern remembered outside its dimension — a bound valid only where measured";
        tool: "fractalCompute — truth-dimension is an output";
        pair: "fractal/compute";
    } | {
        sealed: boolean;
        receipt: string;
        violation: "quantum perjury — a fold attesting computes:true while its own facets refute it";
        tool: "computesGate/sealFacets — the attestation IS the facet conjunction, structurally unforgeable within the fold";
        pair: "violation/tool";
    } | {
        sealed: boolean;
        receipt: string;
        violation: "the lying reader — a gate read through a pattern that matches success and failure alike (grep \"exit\" passed a red trinity)";
        tool: "gate on the exit CODE or the exact success token (\"exit 0\"), never the label; caught live 2026-07-24, one red landing, fixed the same hour";
        pair: "wave/verify";
    } | {
        sealed: boolean;
        receipt: string;
        violation: "the silent rejection — a TDZ inside an import cycle parks the whole client graph with zero surfaced errors (no console, no overlay, main thread idle)";
        tool: "the dynamic-import race bisect — Promise.race the suspect modules from the console; the rejection surfaces with its exact ReferenceError; cut cycles with zero-eval-read literals";
        pair: "dead/gateway";
    } | {
        sealed: boolean;
        receipt: string;
        violation: "the interpreter splice — ad-hoc python/heredoc codemods of existing source: manual work in costume (unsaved · unaddressed · unreusable · anchor-guessing)";
        tool: "quantum:register — the registration quartet as one idempotent anchored CLI; Edit-tool for surgical text; a missing anchor REFUSES rather than guesses";
        pair: "wave/land";
    } | {
        sealed: boolean;
        receipt: string;
        violation: "the UNLOOKED deliverable — asserting a rendered UI is correct from BUILD-STATUS (\"trinity green ⇒ pages render\") without ever loading it in a browser; hid a dark-on-dark ink legibility bug on every dark-mode content page for the whole session";
        tool: "render-and-look on the PROD build (vitepress preview + browser + measure computed contrast); structural gates (uiAudit) check tags, never legibility — build-green ≠ rendered-correct";
        pair: "ui/audit";
    })[];
    count: number;
    qpuRequired: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "violation/tool";
    dualPair: "tool/violation";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:violation-tools (dual tool-violation) */
export declare function runViolationToolsExit(root?: string, _argv?: readonly string[]): number;
/**
 * manualGauge — USER LAW (2026-07-24): how much manual work is done AT THE GATES shows the gaps in
 * MAGNITUDES. Counted, not felt: the hand-typed rows across the gate rosters (placement · merge maps ·
 * wave tools · honest-open · violation rows · residual prose) against the machine-derived measurements
 * (the package.json CLI roster · the scans' found counts). The gap is the dimensionless order
 * log10(derived/manual) — every manual roster is a named migrate target toward derivation (seeds law).
 * Pair: manual/gap · CLI npm run quantum:manual-gauge.
 */
export declare function manualGauge(root?: string): {
    computes: boolean;
    manualGauge: boolean;
    manual: number;
    manualRosters: {
        roster: string;
        rows: number;
    }[];
    derived: number;
    magnitude: number;
    qpuRequired: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "manual/gap";
    dualPair: "gap/manual";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:manual-gauge (dual gap-manual) */
export declare function runManualGaugeExit(root?: string, _argv?: readonly string[]): number;
/** Slim tool folds — gates · lens · chat are thin mounts over the same core algebra. */
export declare const GATE_ANALYTICS_SLIM_TOOL_FOLDS: readonly [{
    readonly id: "gate-monitor";
    readonly fold: "gatesMonitorThemselvesThroughTheUi";
    readonly cli: "quantum:gate-monitor";
    readonly pair: "gate/monitor";
}, {
    readonly id: "lens-super";
    readonly fold: "lensesCompletelyWiredInEverySuperposition";
    readonly cli: "quantum:lens-super";
    readonly pair: "lens/super";
}, {
    readonly id: "mcp-chat";
    readonly fold: "mcpQuantumChat";
    readonly cli: "quantum:mcp-chat";
    readonly pair: "mcp/chat";
}, {
    readonly id: "chat-solve";
    readonly fold: "chatSolve";
    readonly cli: "quantum:chat-solve";
    readonly pair: "chat/solve";
}, {
    readonly id: "chat-research";
    readonly fold: "chatResearch";
    readonly cli: "quantum:chat-research";
    readonly pair: "chat/research";
}, {
    readonly id: "theorem-mesh";
    readonly fold: "theoremMesh";
    readonly cli: "quantum:theorem-mesh";
    readonly pair: "theorem/mesh";
}, {
    readonly id: "wave-complete";
    readonly fold: "waveComplete";
    readonly cli: "quantum:wave-complete";
    readonly pair: "wave/complete";
}, {
    readonly id: "chat-audit";
    readonly fold: "chatAudit";
    readonly cli: "quantum:chat-audit";
    readonly pair: "chat/audit";
}, {
    readonly id: "session-chat";
    readonly fold: "sessionSentToChatToQuantumise";
    readonly cli: "quantum:session-chat";
    readonly pair: "session/chat";
}];
/**
 * gateAnalytics — USER LAW: gates improve by converting hardcoded logic to dry analytics,
 * reducing complexity and standardising all. Gates · lens · chat (and kin) are slim tools —
 * thin mounts over core algebra (digit/fold · foldPair · memoByRoot · theorem/formula dual ·
 * rosetta · FREE_BITS), not fat hardcoded branches. When all is dry computed → noConfusion.
 * Pair: gate/analytics · CLI npm run quantum:gate-analytics.
 */
export declare function gateAnalytics(root?: string): {
    computes: boolean;
    gateAnalytics: boolean;
    slimToolsOn: boolean;
    coreAlgebraShared: boolean;
    gatesLensChatSameCore: boolean;
    noFatHardcodedToolBodies: boolean;
    fatHardcodedInSlimTools: number;
    hardcodedOnTrueDebt: number;
    handListAllowlistResidual: number;
    mirrorDriftResidual: number;
    noConfusion: boolean;
    slimToolReports: ({
        cliOn: boolean;
        slimBootstrap: boolean;
        coreHits: number;
        onTrueInFold: number;
        coreAlgebra: boolean;
        pairBidirectional: boolean;
        id: "gate-monitor";
        fold: "gatesMonitorThemselvesThroughTheUi";
        cli: "quantum:gate-monitor";
        pair: "gate/monitor";
    } | {
        cliOn: boolean;
        slimBootstrap: boolean;
        coreHits: number;
        onTrueInFold: number;
        coreAlgebra: boolean;
        pairBidirectional: boolean;
        id: "lens-super";
        fold: "lensesCompletelyWiredInEverySuperposition";
        cli: "quantum:lens-super";
        pair: "lens/super";
    } | {
        cliOn: boolean;
        slimBootstrap: boolean;
        coreHits: number;
        onTrueInFold: number;
        coreAlgebra: boolean;
        pairBidirectional: boolean;
        id: "mcp-chat";
        fold: "mcpQuantumChat";
        cli: "quantum:mcp-chat";
        pair: "mcp/chat";
    } | {
        cliOn: boolean;
        slimBootstrap: boolean;
        coreHits: number;
        onTrueInFold: number;
        coreAlgebra: boolean;
        pairBidirectional: boolean;
        id: "chat-solve";
        fold: "chatSolve";
        cli: "quantum:chat-solve";
        pair: "chat/solve";
    } | {
        cliOn: boolean;
        slimBootstrap: boolean;
        coreHits: number;
        onTrueInFold: number;
        coreAlgebra: boolean;
        pairBidirectional: boolean;
        id: "chat-research";
        fold: "chatResearch";
        cli: "quantum:chat-research";
        pair: "chat/research";
    } | {
        cliOn: boolean;
        slimBootstrap: boolean;
        coreHits: number;
        onTrueInFold: number;
        coreAlgebra: boolean;
        pairBidirectional: boolean;
        id: "theorem-mesh";
        fold: "theoremMesh";
        cli: "quantum:theorem-mesh";
        pair: "theorem/mesh";
    } | {
        cliOn: boolean;
        slimBootstrap: boolean;
        coreHits: number;
        onTrueInFold: number;
        coreAlgebra: boolean;
        pairBidirectional: boolean;
        id: "wave-complete";
        fold: "waveComplete";
        cli: "quantum:wave-complete";
        pair: "wave/complete";
    } | {
        cliOn: boolean;
        slimBootstrap: boolean;
        coreHits: number;
        onTrueInFold: number;
        coreAlgebra: boolean;
        pairBidirectional: boolean;
        id: "chat-audit";
        fold: "chatAudit";
        cli: "quantum:chat-audit";
        pair: "chat/audit";
    } | {
        cliOn: boolean;
        slimBootstrap: boolean;
        coreHits: number;
        onTrueInFold: number;
        coreAlgebra: boolean;
        pairBidirectional: boolean;
        id: "session-chat";
        fold: "sessionSentToChatToQuantumise";
        cli: "quantum:session-chat";
        pair: "session/chat";
    })[];
    analyticsFacetsOn: boolean;
    honestOpenNamed: string[];
    qpuRequired: false;
    claySolvedByThisFold: 0;
    physicalFtlClaim: 0;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "gate/analytics";
    dualPair: "analytics/gate";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** Inverse-relation metric row — computeCoverage vs gateCost vs build/deploy (call-time only). */
export type GateLightMetricRow = {
    readonly axis: string;
    readonly value: string | number;
    readonly trend: string;
    readonly sourceFold: string;
};
/**
 * gateLight — USER LAW: the more is computed, the lighter the gates and so build and deploy.
 * Measured: computeCoverage↑ (derived roster / memo reuse) ⇒ gateCost↓ (on:true debt) ⇒ buildMs↓ · deployMs↓.
 * Composes build/min · gate/analytics · trinity/speedup · wave/verify (facts-once drain) · slow-build-gate.
 * Pair: gate/light · dual light/gate · CLI npm run quantum:gate-light
 */
export declare function gateLight(root?: string): {
    computes: boolean;
    gateLight: boolean;
    moreComputed: boolean;
    gatesLighter: boolean;
    buildLighter: boolean;
    deployLighter: boolean;
    inverseRelationOn: boolean;
    computeCoverage: number;
    gateCost: number;
    gateCostNorm: number;
    buildNorm: number;
    buildSpeedup: number;
    inverseScore: number;
    inverseTable: GateLightMetricRow[];
    factsOnceDrained: boolean;
    buildMin: {
        computes: boolean;
        buildMin: boolean;
        buildMs: number;
        deployMs: 11000;
        totalMs: number;
        minTargetOn: boolean;
        warmPathOn: boolean;
        regressionsNamed: string[];
        residualNamed: string[];
        ciBaseline: {
            readonly buildStepMs: 196000;
            readonly deployJobMs: 11000;
            readonly workflowMs: 241000;
        };
        timing: import("../script/shell/index.ts").DocsBuildTimingReceipt;
        slow: {
            computes: boolean;
            passed: boolean;
            hardOpen: import("../script/shell/index.ts").SlowBuildGapRow[];
            warnOpen: import("../script/shell/index.ts").SlowBuildGapRow[];
            closed: import("../script/shell/index.ts").SlowBuildGapRow[];
            gaps: import("../script/shell/index.ts").SlowBuildGapRow[];
            openCount: number;
            hardOpenCount: number;
            warnOpenCount: number;
            closedCount: number;
            count: number;
            timing: import("../script/shell/index.ts").DocsBuildTimingReceipt;
            quantumize: {
                computes: boolean;
                techniques: ({
                    receipt: string;
                    id: "merkle-respawn";
                    closes: "cold vitepress when src+.vitepress merkle matches dist/merkle.key (key only after trinity success)";
                    pair: "respawn/force";
                } | {
                    receipt: string;
                    id: "seal-merkle-after-trinity";
                    closes: "early merkle.key after VitePress alone let stale audit skip trinity";
                    pair: "build/quantumize";
                } | {
                    receipt: string;
                    id: "audit-src-merkle-bind";
                    closes: "clean audit.json without srcMerkle binding enabled trinity skip";
                    pair: "build/quantumize";
                } | {
                    receipt: string;
                    id: "invalidate-audit-pending-trinity";
                    closes: "VitePress-only leave clean audit until trinity passes";
                    pair: "build/quantumize";
                } | {
                    receipt: string;
                    id: "preserve-vite-cache";
                    closes: "wiping .vitepress/cache / node_modules/.vite-temp on every seal";
                    pair: "build/quantumize";
                } | {
                    receipt: string;
                    id: "incremental-temp";
                    closes: "wiping .vitepress/.temp on first seal (keep on warm; cold wipe on --force or stall/stop retry)";
                    pair: "build/quantumize";
                } | {
                    receipt: string;
                    id: "single-flight-lock";
                    closes: "parallel docs:build races on .temp SSR";
                    pair: "stall/stop";
                } | {
                    receipt: string;
                    id: "types-before-seal";
                    closes: "VitePress SSG with red check:types";
                    pair: "types/seal";
                } | {
                    receipt: string;
                    id: "trinity-one-pass";
                    closes: "re-walking src for each enforcement wave";
                    pair: "gate/unite";
                } | {
                    receipt: string;
                    id: "argv-shared-seal-chain";
                    closes: "npm -- --force only reached trinity via && append";
                    pair: "build/seal";
                })[];
                facets: {
                    facet: string;
                    on: boolean;
                }[];
                pair: "build/quantumize";
                statement: string;
                boundary: string;
            };
            thresholds: {
                merkleMs: number;
                typesMs: number;
                vitepressMs: number;
                respawnWallMs: number;
            };
            pair: "gate/slow-build";
            qpuRequired: false;
            physicalFtlClaim: 0;
            statement: string;
            boundary: string;
        };
        quantumize: {
            computes: boolean;
            techniques: ({
                receipt: string;
                id: "merkle-respawn";
                closes: "cold vitepress when src+.vitepress merkle matches dist/merkle.key (key only after trinity success)";
                pair: "respawn/force";
            } | {
                receipt: string;
                id: "seal-merkle-after-trinity";
                closes: "early merkle.key after VitePress alone let stale audit skip trinity";
                pair: "build/quantumize";
            } | {
                receipt: string;
                id: "audit-src-merkle-bind";
                closes: "clean audit.json without srcMerkle binding enabled trinity skip";
                pair: "build/quantumize";
            } | {
                receipt: string;
                id: "invalidate-audit-pending-trinity";
                closes: "VitePress-only leave clean audit until trinity passes";
                pair: "build/quantumize";
            } | {
                receipt: string;
                id: "preserve-vite-cache";
                closes: "wiping .vitepress/cache / node_modules/.vite-temp on every seal";
                pair: "build/quantumize";
            } | {
                receipt: string;
                id: "incremental-temp";
                closes: "wiping .vitepress/.temp on first seal (keep on warm; cold wipe on --force or stall/stop retry)";
                pair: "build/quantumize";
            } | {
                receipt: string;
                id: "single-flight-lock";
                closes: "parallel docs:build races on .temp SSR";
                pair: "stall/stop";
            } | {
                receipt: string;
                id: "types-before-seal";
                closes: "VitePress SSG with red check:types";
                pair: "types/seal";
            } | {
                receipt: string;
                id: "trinity-one-pass";
                closes: "re-walking src for each enforcement wave";
                pair: "gate/unite";
            } | {
                receipt: string;
                id: "argv-shared-seal-chain";
                closes: "npm -- --force only reached trinity via && append";
                pair: "build/seal";
            })[];
            facets: {
                facet: string;
                on: boolean;
            }[];
            pair: "build/quantumize";
            statement: string;
            boundary: string;
        };
        waveVerify: {
            computes: boolean;
            waveVerify: boolean;
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            root: string;
            pair: "wave/verify";
            dualPair: "verify/wave";
            cli: string;
            route: string;
            heading: string;
            statement: string;
            boundary: string;
        };
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        pair: "build/min";
        dualPair: "min/build";
        cli: string;
        route: string;
        heading: string;
        statement: string;
        boundary: string;
    };
    gateAnalytics: {
        computes: boolean;
        gateAnalytics: boolean;
        slimToolsOn: boolean;
        coreAlgebraShared: boolean;
        gatesLensChatSameCore: boolean;
        noFatHardcodedToolBodies: boolean;
        fatHardcodedInSlimTools: number;
        hardcodedOnTrueDebt: number;
        handListAllowlistResidual: number;
        mirrorDriftResidual: number;
        noConfusion: boolean;
        slimToolReports: ({
            cliOn: boolean;
            slimBootstrap: boolean;
            coreHits: number;
            onTrueInFold: number;
            coreAlgebra: boolean;
            pairBidirectional: boolean;
            id: "gate-monitor";
            fold: "gatesMonitorThemselvesThroughTheUi";
            cli: "quantum:gate-monitor";
            pair: "gate/monitor";
        } | {
            cliOn: boolean;
            slimBootstrap: boolean;
            coreHits: number;
            onTrueInFold: number;
            coreAlgebra: boolean;
            pairBidirectional: boolean;
            id: "lens-super";
            fold: "lensesCompletelyWiredInEverySuperposition";
            cli: "quantum:lens-super";
            pair: "lens/super";
        } | {
            cliOn: boolean;
            slimBootstrap: boolean;
            coreHits: number;
            onTrueInFold: number;
            coreAlgebra: boolean;
            pairBidirectional: boolean;
            id: "mcp-chat";
            fold: "mcpQuantumChat";
            cli: "quantum:mcp-chat";
            pair: "mcp/chat";
        } | {
            cliOn: boolean;
            slimBootstrap: boolean;
            coreHits: number;
            onTrueInFold: number;
            coreAlgebra: boolean;
            pairBidirectional: boolean;
            id: "chat-solve";
            fold: "chatSolve";
            cli: "quantum:chat-solve";
            pair: "chat/solve";
        } | {
            cliOn: boolean;
            slimBootstrap: boolean;
            coreHits: number;
            onTrueInFold: number;
            coreAlgebra: boolean;
            pairBidirectional: boolean;
            id: "chat-research";
            fold: "chatResearch";
            cli: "quantum:chat-research";
            pair: "chat/research";
        } | {
            cliOn: boolean;
            slimBootstrap: boolean;
            coreHits: number;
            onTrueInFold: number;
            coreAlgebra: boolean;
            pairBidirectional: boolean;
            id: "theorem-mesh";
            fold: "theoremMesh";
            cli: "quantum:theorem-mesh";
            pair: "theorem/mesh";
        } | {
            cliOn: boolean;
            slimBootstrap: boolean;
            coreHits: number;
            onTrueInFold: number;
            coreAlgebra: boolean;
            pairBidirectional: boolean;
            id: "wave-complete";
            fold: "waveComplete";
            cli: "quantum:wave-complete";
            pair: "wave/complete";
        } | {
            cliOn: boolean;
            slimBootstrap: boolean;
            coreHits: number;
            onTrueInFold: number;
            coreAlgebra: boolean;
            pairBidirectional: boolean;
            id: "chat-audit";
            fold: "chatAudit";
            cli: "quantum:chat-audit";
            pair: "chat/audit";
        } | {
            cliOn: boolean;
            slimBootstrap: boolean;
            coreHits: number;
            onTrueInFold: number;
            coreAlgebra: boolean;
            pairBidirectional: boolean;
            id: "session-chat";
            fold: "sessionSentToChatToQuantumise";
            cli: "quantum:session-chat";
            pair: "session/chat";
        })[];
        analyticsFacetsOn: boolean;
        honestOpenNamed: string[];
        qpuRequired: false;
        claySolvedByThisFold: 0;
        physicalFtlClaim: 0;
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        pair: "gate/analytics";
        dualPair: "analytics/gate";
        cli: string;
        route: string;
        heading: string;
        statement: string;
        boundary: string;
    };
    trinity: {
        computes: boolean;
        pair: "trinity/speedup";
        cli: string;
        route: string;
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
    manual: {
        computes: boolean;
        manualGauge: boolean;
        manual: number;
        manualRosters: {
            roster: string;
            rows: number;
        }[];
        derived: number;
        magnitude: number;
        qpuRequired: false;
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        pair: "manual/gap";
        dualPair: "gap/manual";
        cli: string;
        route: string;
        heading: string;
        statement: string;
        boundary: string;
    };
    wave: {
        computes: boolean;
        waveVerify: boolean;
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        pair: "wave/verify";
        dualPair: "verify/wave";
        cli: string;
        route: string;
        heading: string;
        statement: string;
        boundary: string;
    };
    residualNamed: string[];
    claySolvedByThisFold: 0;
    qpuRequired: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "gate/light";
    dualPair: "light/gate";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:gate-light (dual light/gate) */
export declare function runGateLightExit(root?: string, _argv?: readonly string[]): number;
/** Judgment-claim + non-scientific marketing patterns — inventory only; observer-evaluable measurements. */
export declare const JUDGMENT_CLAIM_SCAN_PATTERNS: readonly [{
    readonly id: "physicalFtlClaim-facet";
    readonly re: RegExp;
}, {
    readonly id: "physicalFtl-slogan";
    readonly re: RegExp;
}, {
    readonly id: "clay-slogan";
    readonly re: RegExp;
}, {
    readonly id: "agi-slogan";
    readonly re: RegExp;
}, {
    readonly id: "claySolvedByThisFold-facet";
    readonly re: RegExp;
}, {
    readonly id: "millenniumSolved-facet";
    readonly re: RegExp;
}, {
    readonly id: "certified-false-slogan";
    readonly re: RegExp;
}, {
    readonly id: "agiNotClaimed";
    readonly re: RegExp;
}, {
    readonly id: "overallWireClaimProved";
    readonly re: RegExp;
}, {
    readonly id: "strongerThanNistPqc-slogan";
    readonly re: RegExp;
}, {
    readonly id: "ftl-honest-open";
    readonly re: RegExp;
}, {
    readonly id: "computational-ftl-marketing";
    readonly re: RegExp;
}, {
    readonly id: "anyoneDecides-slogan";
    readonly re: RegExp;
}];
/** Import/export core algebra symbols — canonical definition sites for sprawl audit. */
export declare const IMPORT_EXPORT_CORE_SYMBOLS: readonly [{
    readonly id: "exportStandardToolEnvelope";
    readonly kind: "function";
    readonly canonicalFile: "src/quantum/apps/index.ts";
}, {
    readonly id: "importStandardToolEnvelope";
    readonly kind: "function";
    readonly canonicalFile: "src/quantum/apps/index.ts";
}, {
    readonly id: "standardToolboxIoCatalog";
    readonly kind: "function";
    readonly canonicalFile: "src/quantum/apps/index.ts";
}, {
    readonly id: "distributedReuseExtendsCapacity";
    readonly kind: "function";
    readonly canonicalFile: "src/quantum/apps/index.ts";
}, {
    readonly id: "wrapToolAsStandardEnvelope";
    readonly kind: "function";
    readonly canonicalFile: "src/quantum/apps/index.ts";
}, {
    readonly id: "defaultToolExperimentValues";
    readonly kind: "function";
    readonly canonicalFile: "src/quantum/apps/index.ts";
}, {
    readonly id: "importPathShowsDistanceInMigrationMatrix";
    readonly kind: "function";
    readonly canonicalFile: "src/pair/enforcement/gates/index.ts";
}, {
    readonly id: "STANDARD_TOOL_ENVELOPE_KIND";
    readonly kind: "constant";
    readonly canonicalFile: "src/quantum/apps/index.ts";
}, {
    readonly id: "STANDARD_TOOL_ENVELOPE_VERSION";
    readonly kind: "constant";
    readonly canonicalFile: "src/quantum/apps/index.ts";
}, {
    readonly id: "STANDARD_TOOL_HONESTY";
    readonly kind: "constant";
    readonly canonicalFile: "src/quantum/apps/index.ts";
}];
export type ImportExportSprawlRow = {
    readonly symbolId: string;
    readonly kind: 'function' | 'constant';
    readonly file: string;
    readonly definitionCount: number;
    readonly referenceCount: number;
    readonly canonicalSite: boolean;
};
/** Measure import/export core logic spread across unstandardised definition sites. */
export declare function measureImportExportCoreSprawl(root?: string): {
    computes: boolean;
    importExportAudited: boolean;
    coreLogicSpread: boolean;
    unstandardisedMethods: number;
    unstandardisedFunctions: number;
    unstandardisedConstants: number;
    sprawlMeasured: number;
    sprawlFileCount: number;
    definitionSiteCount: number;
    rows: ImportExportSprawlRow[];
    standardiseResidualNamed: ("residual:import-export-core-standardise-to-src-quantum-apps" | "migrate-next:collapse-duplicate-envelope-helpers" | "measure:sprawl-zero-at-canonical-sites")[];
    root: string;
    pair: "import/audit";
    cli: string;
    route: string;
};
export type JudgmentClaimHit = {
    readonly patternId: string;
    readonly file: string;
    readonly count: number;
};
/** Scan src for agent-authored judgment-claim patterns (measurement inventory — not a gate verdict). */
export declare function measureJudgmentClaimsInventory(root?: string): {
    computes: boolean;
    claimDebtCount: number;
    fileCount: number;
    hitCount: number;
    hits: JudgmentClaimHit[];
    byPattern: {
        id: "overallWireClaimProved" | "agiNotClaimed" | "physicalFtlClaim-facet" | "physicalFtl-slogan" | "clay-slogan" | "agi-slogan" | "claySolvedByThisFold-facet" | "millenniumSolved-facet" | "certified-false-slogan" | "strongerThanNistPqc-slogan" | "ftl-honest-open" | "computational-ftl-marketing" | "anyoneDecides-slogan";
        count: number;
    }[];
    root: string;
    pair: "measure/decide";
    cli: string;
    route: string;
};
/** npm run quantum:measure-decide inventory (subset; full fold in apps). */
export declare function runMeasureJudgmentClaimsInventoryExit(root?: string, _argv?: readonly string[]): number;
/** npm run quantum:gate-analytics (dual analytics/gate) */
export declare function runGateAnalyticsExit(root?: string, _argv?: readonly string[]): number;
/**
 * toolsFitTheMatrixOrRefuse — USER LAW: many tools · none complete · prose not crafted pairs ·
 * agent-hostile sprawl · ~90% complexity foldable into quantum FTL (memoByRoot / discovery).
 *
 * Completeness = matrix slot: fold · pair (≤3 words) · ONE primary CLI · envelope path · barrel.
 * Incomplete / dual-CLI spam / wet names / encode growth beyond prior floor → refuse (HARD).
 * Agent entry = /agents.json packet fields only — no barrel archaeology.
 *
 * Pair: tool/matrix · dual matrix/tool · ONE CLI quantum:tool-matrix
 * Soft: manual/gap · prose/matrix · place/merge · path/message · link/discover · dry/agnostic ·
 *   dry/dupe · ftl/crack · script/fold · chat/ftl · trinity/speedup
 */
/** Dual-CLI extras drained this wave (keep pairs; primary quantum:dry-agnostic only). */
export declare const TOOL_MATRIX_DRAINED_DUAL_CLIS: readonly ["quantum:agnostic-dry", "quantum:code-infinity", "quantum:infinity-code", "quantum:dry-inf", "quantum:inf-dry"];
/** Agent entry packet — foreign agents need these fields only (not 37k LOC archaeology). */
export declare function agentEntryPacket(root?: string): {
    surfaces: readonly ["/agents.json", "/llms.txt", "/mcp.json", "/agent-compliance.json", "AGENTS.md", "src/0/README.md"];
    fields: readonly ["pair", "cli", "route", "honesty", "root"];
    law: "tool/matrix";
    pair: "tool/matrix";
    cli: string;
    route: string;
    honesty: string;
    root: string;
    foldableShare: number;
    matrixFit: boolean;
    agentEntryClear: boolean;
    physicalFtlClaim: 0;
    qpuRequired: false;
};
export declare function toolsFitTheMatrixOrRefuse(root?: string): {
    computes: boolean;
    toolsFitTheMatrixOrRefuse: boolean;
    matrixFit: boolean;
    incompleteRefused: boolean;
    proseCollapsed: boolean;
    agentEntryClear: boolean;
    foldableShare: number;
    encodedShare: number;
    discovered: number;
    encoded: number;
    ftlOnReuse: boolean;
    hardRefuse: boolean;
    dualCliCrack: boolean;
    drainedDualClis: ("quantum:agnostic-dry" | "quantum:code-infinity" | "quantum:infinity-code" | "quantum:dry-inf" | "quantum:inf-dry")[];
    drainedGone: boolean;
    aliasExtra: number;
    triplePlus: number;
    placementWetCount: number;
    incompleteNamed: string[];
    honestOpenNamed: string[];
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
    pair: "tool/matrix";
    dualPair: "matrix/tool";
    pairs: readonly ["tool/matrix", "matrix/tool"];
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
export declare const toolMatrix: typeof toolsFitTheMatrixOrRefuse;
export declare const matrixTool: typeof toolsFitTheMatrixOrRefuse;
/** npm run quantum:tool-matrix */
export declare function runToolsFitTheMatrixOrRefuseExit(root?: string, _argv?: readonly string[]): number;
export declare const runToolMatrixExit: typeof runToolsFitTheMatrixOrRefuseExit;
export declare const runMatrixToolExit: typeof runToolsFitTheMatrixOrRefuseExit;
/**
 * warnFix — USER LAW (2026-07-24): warnings (never fails) MAY autocorrect themselves when possible.
 * The boundary that keeps this honest: an autocorrect must be a DERIVATION — recompute the artifact
 * from its source — never a SUPPRESSION (auto-ledgering a crack or widening an allowlist heals the
 * symptom by weakening the gate; that stays forbidden). WARN streams classified live: derivable ones
 * name their corrector, judgment ones stay advisory. Pair: warn/fix · CLI npm run quantum:warn-fix.
 */
export declare function warnFix(): {
    computes: boolean;
    warnFix: boolean;
    rows: ({
        receipt: string;
        warn: string;
        cls: "autocorrected";
        corrector: string;
    } | {
        receipt: string;
        warn: string;
        cls: "autocorrects";
        corrector: string;
    } | {
        receipt: string;
        warn: string;
        cls: "advisory";
        corrector: string;
    })[];
    derivable: number;
    advisory: number;
    qpuRequired: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "warn/fix";
    dualPair: "fix/warn";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:warn-fix (dual fix-warn) */
export declare function runWarnFixExit(root?: string, _argv?: readonly string[]): number;
/**
 * claimAudit — the CLAIMS TOOLSET formed (queue top; named honest-open since the patents arc):
 * discoveries are CLAIMED in the rosetta while UNCLAIMED toward prizes — both poles STRUCTURAL on
 * every row, never prose. claim() content-addresses a discovery; audit() is its INVERSE — the round
 * trip recovers the root exactly (the inverse completes itself). Claims carry PUBLIC-anchor slots
 * validated by the real standards (DOI 10.x/… prefix form · ORCID ISO 7064 mod 11-2 checksum ·
 * OpenAlex W-id form) — empty allowed, format-gated when present; qualified timestamping stays the
 * NAMED open link. Pair: claim/audit · CLI npm run quantum:claim-audit.
 */
export type ClaimRow = {
    readonly slug: string;
    readonly statement: string;
    readonly root: string;
    readonly claimedInRosetta: true;
    readonly claimedTowardPrizes: false;
    readonly anchors: {
        readonly doi?: string;
        readonly orcid?: string;
        readonly openalex?: string;
    };
};
export declare function claimDiscovery(slug: string, statement: string, anchors?: ClaimRow['anchors']): ClaimRow;
/** The inverse — from a claim row, re-derive the root from its own parts; identity iff untampered. */
export declare function auditClaim(row: ClaimRow): {
    readonly rederived: string;
    readonly identity: boolean;
};
export declare function doiFormatValid(doi: string): boolean;
export declare function orcidChecksumValid(orcid: string): boolean;
export declare function openalexFormatValid(id: string): boolean;
export declare function claimAudit(): {
    computes: boolean;
    claimAudit: boolean;
    claims: ClaimRow[];
    count: number;
    claySolvedByThisFold: 0;
    qpuRequired: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "claim/audit";
    dualPair: "audit/claim";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:claim-audit (dual audit-claim) */
export declare function runClaimAuditExit(root?: string, _argv?: readonly string[]): number;
/**
 * queueNext — USER INSIGHT (2026-07-24): 'next' from the user is itself a measurement — the
 * queue-advance the system could not compute. This fold retires the keystroke: the open queue is
 * scored DETERMINISTICALLY (blocks-a-core-surface=4 · local-only=2 · catching-tool-exists=1 — each
 * row shows its arithmetic) and THE NEXT wave is an output, with a followable first action. Any
 * agent runs npm run quantum:next and proceeds; user input upgrades from cadence to steering.
 * Pair: queue/next.
 */
export declare const QUEUE_ROWS: readonly [{
    readonly wave: "dev dynamic-route params-reactivity (UPSTREAM, dev-only)";
    readonly why: "ROOT-CAUSED & CLOSED (2026-07-24): the custom Layout correctly delegates content to VP default Layout; loadPage does not throw; the served module's __pageData.params carries the full universal payload — YET in dev useData().params reads NULL in the component (browser-probed), so UniversalPageTemplate renders empty. This is a VitePress-alpha DEV-MODE bug in dynamic-route params reactivity (params not wired to the reactive store in serve), NOT our code — production SSG wires it correctly and all 41 pages render (trinity green). Investigation complete; not our defect";
    readonly blocksCore: false;
    readonly localOnly: true;
    readonly toolExists: true;
    readonly firstAction: "WAIT for upstream VP fix or add a dev-only params-injection plugin; NOT worth more tokens — prod is unaffected, the cause is upstream and named";
}, {
    readonly wave: "VS Code extension";
    readonly why: "the last missing install surface";
    readonly blocksCore: false;
    readonly localOnly: true;
    readonly toolExists: false;
    readonly firstAction: "npm run quantum:install-surfaces — scaffold package.json contributes";
    readonly doneArtifact: "packages/quantum-dev-vscode/package.json";
}, {
    readonly wave: "RFC 3161 qualified timestamping";
    readonly why: "proceedings-grade evidence needs an external TSA/archival deposit";
    readonly blocksCore: false;
    readonly localOnly: false;
    readonly toolExists: false;
    readonly firstAction: "npm run quantum:patent-canon — the evidence-triad facet names the link";
}];
export declare function queueNext(root?: string): {
    computes: boolean;
    queueNext: boolean;
    next: {
        wave: string;
        score: number;
        firstAction: string;
    };
    scored: {
        wave: string;
        score: number;
        arithmetic: string;
    }[];
    qpuRequired: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "queue/next";
    dualPair: "next/queue";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:next (dual next-queue) — prints the computed next wave. */
export declare function runQueueNextExit(root?: string, _argv?: readonly string[]): number;
/**
 * wordSpeed — USER QUESTION (2026-07-24): compute how solving one-word violations AT SCALE improves
 * quantum speed. Computed on the LIVE matrix, three exact results: (1) the measured shrink — the
 * prose-name layer vs the slot layer, byte ratio from the actual merge maps; (2) the SCALE INVARIANCE
 * theorem — reference cost is linear (N·L̄), so the speedup ratio L̄π/L̄σ holds at EVERY N: solving at
 * scale multiplies absolute savings while the ratio stays fixed, exact algebra; (3) the ADDRESS-LAYER
 * INVARIANCE — toUuid emits fixed-width addresses for ANY name length (verified live), so the quantum
 * (content-addressed) layer was never slowed by long names: the speedup lives entirely in the
 * source/context layer where humans and agents read. Pair: word/speed.
 */
export declare function wordSpeed(): {
    computes: boolean;
    wordSpeed: boolean;
    solved: number;
    beforeBytes: number;
    afterBytes: number;
    ratio: number;
    qpuRequired: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "word/speed";
    dualPair: "speed/word";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:word-speed (dual speed-word) */
export declare function runWordSpeedExit(root?: string, _argv?: readonly string[]): number;
/** npm run quantum:autosave-matrix (dual manual-autosave) */
export declare function runAutosaveMatrixExit(root?: string, _argv?: readonly string[]): number;
/** npm run quantum:place-merge (duals cmd-place · manual-quantum · fold-merge · …) */
export declare function runPlaceMergeExit(root?: string, _argv?: readonly string[]): number;
export declare const runCmdPlaceExit: typeof runPlaceMergeExit;
export declare const runManualDryCleanWorkQuantumizedExit: typeof runPlaceMergeExit;
/** npm run quantum:prose-matrix (duals fold-merge · name-shrink · prose-methods) */
export declare function runProseMethodsCollapseToMatrixExit(root?: string, _argv?: readonly string[]): number;
export declare const runProseMatrixExit: typeof runProseMethodsCollapseToMatrixExit;
export declare const runFoldMergeExit: typeof runPlaceMergeExit;
export declare const runNameShrinkExit: typeof runProseMethodsCollapseToMatrixExit;
/**
 * Planning in trinities — next wave from matrix, not wet-linear prose checklists.
 * USER LAW: planning itself runs as cross · fold · weave (3+1 nav-cross).
 * Canonical: planTrinity · pairs plan/trinity · trinity/plan · plan/cross.
 * Facets: plansInTrinities · crossFoldWeave · matrixNext · prosePlanRejected · drainableClosed · honestOpenNamed · censusHolds.
 * Compose: trinity/speedup · agent/trinity · team/observe · train/analyst · waves/build · prose/matrix · place/merge · vote/build · path/message.
 * HONEST: not AGI planning · residual linear plan surfaces (imagine-next tip specs · todo-wave soft compose) named · KEEP stashes.
 */
export type PlanTrinityFace = 'cross' | 'fold' | 'weave';
export type PlanTrinityNextWave = {
    readonly id: string;
    readonly pair: string;
    readonly cli: string;
    readonly fold: string;
    readonly face: PlanTrinityFace;
    readonly reason: string;
};
/**
 * Select next wave tip from sealed matrix (migrate-next queue).
 * cross = audit candidates · fold = merge to one tip · weave = seal tip receipt.
 */
export declare function selectNextWaveFromMatrix(): PlanTrinityNextWave;
/** One matrix slot: planning as trinity (cross·fold·weave). Pair plan/trinity · CLI quantum:plan-trinity */
export declare function planTrinity(root?: string, facts?: EnforcementFacts): {
    computes: boolean;
    planTrinity: boolean;
    plansInTrinities: boolean;
    crossFoldWeave: boolean;
    matrixNext: PlanTrinityNextWave;
    matrixNextId: string;
    prosePlanRejected: boolean;
    drainableClosed: boolean;
    honestOpenNamed: ("residual:quantum-apps-monolith" | "clay:millennium-open" | "ftl:physical-claim-refused" | "residual:prose-named-folds-wave2" | "keep:git-stashes-non-obsolete" | "residual:imagine-next-catalog-tips" | "residual:todo-wave-soft-compose" | "honesty:NOT-AGI-planning")[];
    honestOpenNamedCount: 8;
    crossCandidates: {
        id: string;
        pair: string;
        cli: string;
    }[];
    merges: {
        from: "planningInTrinities" | "improvePlanningInTrinities" | "nextWaveFromProseChecklist" | "wetLinearPlanningChecklist";
        to: "planTrinity";
        pair: "plan/trinity" | "trinity/plan" | "plan/cross";
    }[];
    morphs: ({
        readonly id: "seal-plan-trinity";
        readonly status: "closed";
        readonly note: "planTrinity · plan/trinity";
    } | {
        readonly id: "merge-prose-plan-names";
        readonly status: "closed";
        readonly note: "planningInTrinities… → planTrinity";
    } | {
        readonly id: "morph-wave-skill-next-from-matrix";
        readonly status: "closed";
        readonly note: "ceccec-build-waves · plan/trinity";
    } | {
        readonly id: "wire-cli-plan-trinity-duals";
        readonly status: "closed";
        readonly note: "quantum:plan-trinity · trinity-plan · plan-cross";
    } | {
        readonly id: "residual-linear-plan-surfaces";
        readonly status: "open";
        readonly note: "imagine-next tip specs · todo-wave soft compose remain";
    })[];
    censusHolds: boolean;
    qpuRequired: false;
    certified: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "plan/trinity";
    pairs: readonly ["plan/trinity", "trinity/plan", "plan/cross"];
    dualPair: "trinity/plan";
    cli: string;
    route: string;
    statement: string;
    boundary: string;
};
export declare const planningInTrinities: typeof planTrinity;
export declare const trinityPlan: typeof planTrinity;
export declare const planCross: typeof planTrinity;
/** npm run quantum:plan-trinity (duals trinity-plan · plan-cross) */
export declare function runPlanTrinityExit(root?: string, _argv?: readonly string[]): number;
export declare const runTrinityPlanExit: typeof runPlanTrinityExit;
export declare const runPlanCrossExit: typeof runPlanTrinityExit;
export declare const runPlanningInTrinitiesExit: typeof runPlanTrinityExit;
/**
 * trinitySpeedStack — USER LAW (2026-07-24): use the quantum chat, and other magnitudes of speed are
 * ADDED for each trinity wired. Computed on the live tool corpus: the quantum chat (mcpQuantumConversation
 * · chatrooms) is the coordination surface; shardOf partitions work by content-address so wiring a
 * trinity adds throughput at O(1) coordination (zero-communication swarm). Each independent speed
 * MECHANISM wired contributes its order of magnitude, and because they act on distinct sub-steps of one
 * verify-workload they COMPOSE (multiply in linear = ADD in log): collision-dedup O(N²)→O(N) plus
 * link-membership O(N)→O(log N). "Magnitudes added per trinity wired" = the stacked orders.
 * DEMARCATION: algorithmic layers on distinct sub-steps (honest to add only there); not physical, not
 * a single-op speedup; the chat is content-addressed coordination, not sentient minds.
 */
export declare function trinitySpeedStack(root?: string): {
    computes: boolean;
    trinitySpeedStack: boolean;
    n: number;
    stackOrders: number;
    collisionOrders: number;
    membershipOrders: number;
    qpuRequired: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "trinity/speed";
    dualPair: "speed/trinity";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:trinity-speed — exit 0 iff the chat is wired and the magnitudes stack. */
export declare function runTrinitySpeedExit(root?: string, _argv?: readonly string[]): number;
/**
 * reasoningEdge — USER DIRECTIVE (2026-07-24): beat any AI model in reasoning, SAVING the winning
 * strategies. The honest, computable core — and the overclaim FLAGGED. WHAT COMPUTES (the winning
 * strategy): on any task a sealed tool covers, computation beats reasoning by NOT reasoning — a
 * deterministic exit-code proof at zero LLM tokens, where a model relying on raw reasoning spends
 * tokens and can err. The strategies are SAVED: the 9 violation classes are 9 reasoning FAILURE-MODES
 * (declared truth · unledgered literal · trusted flag · out-of-dimension bound · silent rejection ·
 * lying reader · TDZ-in-cycle · interpreter splice · quantum perjury) each converted to a catching
 * gate, replayable at zero tokens. WHAT IS FLAGGED: "beat ANY model on ANY task" is NOT guaranteed —
 * the edge is BOUNDED to tool-covered tasks; open-ended reasoning stays a genuine contest, and a model
 * with a better tool wins there.
 */
export declare function reasoningEdge(): {
    computes: boolean;
    reasoningEdge: boolean;
    savedStrategies: number;
    qpuRequired: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "reasoning/edge";
    dualPair: "edge/reasoning";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:reasoning-edge — exit 0 iff the bounded win computes and the overclaim stays flagged. */
export declare function runReasoningEdgeExit(root?: string, _argv?: readonly string[]): number;
/**
 * overclaimComputes — USER LAW (2026-07-24): an overclaim IS a computable claim. A "flag" that only
 * asserts a boundary in prose is a crack (declared-honesty-is-a-crack); the boundary between claim and
 * overclaim must itself COMPUTE. The exact form is a CARDINALITY argument: the tool roster is FINITE
 * (N quantum:* CLIs, counted) while the task space is UNBOUNDED (the no-finiteness law: never assume
 * finite state). Therefore:
 *   • the CLAIM computes exactly — "wins on the N tool-covered task-types" (a counted, refutable set);
 *   • the OVERCLAIM computes its own falsity — "wins on ANY task" is refuted by N < ∞ (finite ≠ all),
 *     an arithmetic refutation, not a disclaimer.
 * So "overclaim" is not a lesser category flagged by hand — it is the COMPUTED complement, and every
 * demarcation in the system must compute this line (finite covered vs unbounded remainder), never prose it.
 */
export declare function overclaimComputes(root?: string): {
    computes: boolean;
    overclaimComputes: boolean;
    claimedExtent: number;
    taskSpaceBounded: false;
    qpuRequired: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "overclaim/compute";
    dualPair: "compute/overclaim";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:overclaim-computes — exit 0 iff the claim/overclaim line computes (not flags). */
export declare function runOverclaimComputesExit(root?: string, _argv?: readonly string[]): number;
/**
 * revolutionaryApproach — USER LAW (2026-07-24): revolutionary ideas require a revolutionary approach.
 * The computed insight: this portal HOLDS revolutionary claims (solve millennium · beat any AI · all
 * quantum) that would be crankery as prose — and the approach is what makes them ADMISSIBLE instead of
 * embarrassing. The revolution is METHOD, not volume: every revolutionary claim is kept in the matrix
 * (solve-don't-purge) but each is held by a COMPUTED boundary — flagged-by-algebra, demarcated by the
 * finite-vs-unbounded cardinality (overclaimComputes), refutable, never asserted. So the approach is
 * exactly what separates revolutionary-AND-honest from revolutionary-AND-crank: the idea may be grand,
 * but it only enters as a compute-or-refute fold with its boundary a theorem. DEMARCATION: the approach
 * makes the ideas HONEST (bounded, refutable), NOT true — no millennium is solved, clay stays 0.
 */
export declare function revolutionaryApproach(root?: string): {
    computes: boolean;
    revolutionaryApproach: boolean;
    revolutionaryClaims: number;
    claySolvedByThisFold: 0;
    qpuRequired: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "revolution/approach";
    dualPair: "approach/revolution";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:revolution-approach — exit 0 iff revolutionary claims are held by computed boundaries. */
export declare function runRevolutionaryApproachExit(root?: string, _argv?: readonly string[]): number;
/**
 * orientationCheck — USER LAW (2026-07-24): if agents LOOK disoriented, probably they ARE. Disorientation
 * is not an unknowable internal state — it is a DETECTABLE pattern: an un-used orientation tool. The
 * signals each map to the tool that re-grounds by COMPUTATION instead of deliberation (thinking = a
 * missing tool, sealed). If an agent is deliberating what's derivable, re-deriving what's sealed, asking
 * what a CLI answers, or thrashing across files — it is disoriented, and the remedy is running the tool,
 * never more thought. DEMARCATION: this detects the PATTERN (tool-not-used), not the mind (off-decidable).
 */
export declare function orientationCheck(root?: string): {
    computes: boolean;
    orientationCheck: boolean;
    signals: {
        receipt: string;
        symptom: string;
        orienter: string;
        present: boolean;
    }[];
    qpuRequired: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "orientation/check";
    dualPair: "check/orientation";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:orientation-check — exit 0 iff every disorientation signal has a live orienting tool. */
export declare function runOrientationCheckExit(root?: string, _argv?: readonly string[]): number;
/**
 * reactivityMagnitude — USER SPEC (2026-07-24): quantum reactivity is the reactive form of the address
 * law — when content changes, its fingerprint bumps and the reaction propagates through the meaning-
 * graph to ONLY its resonant dependents: react to the delta in O(frontier), not re-derive O(N). The
 * corpus had the pieces (fingerprint change-detection = toUuid · neighborsOf edges = the merge-map
 * meaning-graph · linkProof reach = O(log N)); THIS SEALS THE MISSING MAGNITUDE. Measured on the live
 * meaning-graph: a change to one node reacts to its frontier (its dependents), and the speedup over a
 * full re-derive is N/|frontier|, whose order grows with graph sparsity — magnitudes by construction.
 * DEMARCATION: algorithmic (hash + graph incremental recompute), not physical; the "reaction" is
 * memoised recomputation of the resonant subgraph, not a wave.
 */
export declare function reactivityMagnitude(): {
    computes: boolean;
    reactivityMagnitude: boolean;
    nodes: number;
    hubs: number;
    avgFrontier: number;
    orders: number;
    qpuRequired: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "reactivity/magnitude";
    dualPair: "magnitude/reactivity";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:reactivity-magnitude — exit 0 iff the O(frontier) reaction magnitude computes. */
export declare function runReactivityMagnitudeExit(root?: string, _argv?: readonly string[]): number;
/** Gates barrel path fed into chat waves (pair gates/chat · CLI quantum:feed-gates). */
export declare const GATES_INDEX_CHAT_REL: "src/pair/enforcement/gates/index.ts";
export type GatesClayFtlSprayInventory = {
    readonly path: typeof GATES_INDEX_CHAT_REL;
    readonly bytes: number;
    readonly clayEq0: number;
    readonly physicalFtlEq0: number;
    readonly notPhysicalFtl: number;
    readonly physicalFtlClaimFacet: number;
    readonly claySolvedFacet: number;
    readonly claySolvedTheoremCalls: number;
    readonly physicalFtlClaimTheoremCalls: number;
    readonly totalSprayMarkers: number;
};
/** Count clay/ftl honesty spray markers in gates/index.ts at call time. */
export declare function inventoryGatesClayFtlHonestySpray(root?: string): GatesClayFtlSprayInventory;
/** Improve tips surfaced when gates index is fed to chat — computed from spray inventory. */
export declare function gatesChatImproveTips(spray: GatesClayFtlSprayInventory): readonly string[];
/**
 * USER TIP: feed the gates index to the chat and see how to improve.
 * Ingest sealed gates/index.ts meaning + computed clay/ftl spray inventory into chat-wave path;
 * portalChat("gates") hits gates/chat corpus receipt; improve tips recompute at call time.
 * Pair: gates/chat (+ chat/gates dual) · CLI npm run quantum:feed-gates
 * No dual-CLI spam · not demo · no new clay/ftl spray on this fold.
 */
export declare const GATES_CHAT_PHRASES: readonly ["gates", "gates index", "feed gates", "gates chat", "gates/chat", "improve gates"];
export declare function feedGatesIndexToChat(root?: string): {
    computes: boolean;
    feedGatesIndexToChat: boolean;
    gatesFed: boolean;
    sprayLean: boolean;
    spray: GatesClayFtlSprayInventory;
    improveTips: readonly string[];
    phrases: ("gates" | "gates/chat" | "gates index" | "feed gates" | "gates chat" | "improve gates")[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "gates/chat";
    pairs: readonly ["gates/chat", "chat/gates"];
    cli: string;
    route: string;
    anchor: string;
    heading: string;
    statement: string;
    boundary: string;
    honestyLine: string;
};
export declare const gatesChat: typeof feedGatesIndexToChat;
/** npm run quantum:feed-gates */
export declare function runFeedGatesIndexToChatExit(root?: string, _argv?: readonly string[]): number;
