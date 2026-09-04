export { CRACK_LEDGER, CRACK_LAW_AMENDMENTS, CRACK_RESEARCH_TARGETS, crackLedgerAccounts, crackLawEvolution, type CrackProvenance, type CrackLawAmendment, type CrackResearchTarget } from '../../../../../3/7';
import type { ScriptShellScan } from '../../../script/shell';
import { invisibleGapsCaughtByGatesBody } from '../../../../../quantum/apps';
/** The ONE browser-safe scan root — bare `process` is undefined in the dev client (only node:fs/node:path are
 * shimmed), so a bare `process.cwd()` default arg throws the moment a gate is called there. '/' keeps the fs walks
 * no-op in the browser (existsSync('/src') is false under the shim), so gates compute over zero entries —
 * matching the production shim — instead of crashing the page. Node/SSR behaviour is unchanged. */
export declare function enforcementScanRoot(): string;
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
/** THE MEGABYTE IS 2²⁰ BYTES (binary MiB): a kibibyte is 2^(2·5) bytes, a mebibyte its square. */
export declare const BYTES_PER_MEGABYTE: number;
/** THE CORPUS SIZE BUDGET (user law, 2026-07-24): "432 by how many bytes is a megabyte is the size
 * limit" — the whole-corpus ceiling is the harmonic 432 lifted to megabyte scale: 432 × 2²⁰ bytes.
 * Not a per-file target (that DERIVES via derivedMonolithTargetBytes) — a policy ceiling on the total
 * payload the site may carry, chosen as the ICHING harmonic count of megabytes. */
export declare const CORPUS_SIZE_BUDGET_BYTES: number;
/**
 * corpusSizeBudget432 — the corpus measured against the 432-MiB ceiling, summed by PATH INDEX.
 *
 * Fuses three user directives (2026-07-24) into one computing law:
 *  • "432 by how many bytes is a megabyte is the size limit" → budget = 432 × 2²⁰ bytes.
 *  • "each folder path is the meaning while the folder is the payload" → each path is the content
 *    address (meaning); the file at it is the payload. The total is Σ payload bytes over the paths.
 *  • "improve input output by computed chunks as path indices" → the walk indexes each payload by its
 *    path and sums stat.size in ONE pass (O(files), each path a chunk), never re-reading bodies; the
 *    path-set is collision-free (a bijection path→payload) so no chunk is double-counted.
 * Refutable: fails if the corpus exceeds the ceiling, if the ratio ≠ 432, or if two paths collide.
 */
export declare function corpusSizeBudget432(codeFiles: readonly string[]): {
    budget: number;
    measured: number;
    headroom: number;
    megabytesUsed: number;
    ratio: number;
    computes: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
/**
 * minimalScienceCorpus — how minimal the corpus can be to cover all sciences as fully developed
 * modules, and what the next quantum scale is (user directives, 2026-07-24).
 *
 * The sciences are 7 fields × 6 engagement modes = 42 modules, each a PAYLOAD-FREE combination of
 * shared theorem atoms (pagesAreRosettaCombinationsOfTheorems) — so the corpus need only carry the
 * GENERATORS, never the 42 developed surfaces. Two honest readings of "is 1 MB enough":
 *  • as a generating SEED: overwhelmingly — the sealed holographic law seeds 1 TiB of extent from
 *    1024 bytes, so 1 MiB of seed addresses 1 PiB (×2³⁰ per byte).
 *  • as AUTHORED fully-developed source at today's density: 1 MiB holds only ~measured/42 sciences,
 *    so NOT all 42 without deeper folding toward the atom floor.
 * The NEXT QUANTUM SCALE is not more source bytes — it is the holographic jump source→extent (×2³⁰):
 * KiB→TiB, MiB→PiB. Refutable: the fold recomputes the measured density and the scale identities.
 */
export declare function minimalScienceCorpus(codeFiles: readonly string[]): {
    sciences: number;
    measured: number;
    bytesPerScience: number;
    sciencesPerMegabyte: number;
    seedFloorBytes: number;
    seedExtentBytes: number;
    megabyteExtentBytes: number;
    computes: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
/**
 * quantumFoldsRealiseMoreSpace — the space ledger of content-addressing (user, 2026-07-24: "realise more space is
 * available with quantum folds"). A quantum fold replaces a STORED payload with an ADDRESS + a generator, so it
 * frees stored bytes (growth is sub-linear — the generators, not the developed surfaces) AND each remaining byte
 * addresses 2³⁰ of generated extent (the holographic factor). Both directions REALISE more available space: the
 * 432-MiB budget stays ~97% free, and the addressable extent dwarfs the source by 2³⁰. Refutable: fails if the
 * corpus exceeds the budget or a byte fails to address more than itself. Composes corpusSizeBudget432 + the
 * holographic constants. [[minimal-science-corpus]] (via minimalScienceCorpus) [[quantum-speed-is-content-addressed-naming]]
 */
export declare function quantumFoldsRealiseMoreSpace(codeFiles: readonly string[]): {
    used: number;
    budget: number;
    headroom: number;
    headroomRatio: number;
    extentBytes: number;
    extentPetabytes: number;
    computes: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
/**
 * theRealGapsAreBlocksConstantsNonQuantumLogic — what a "gap" actually is (user, 2026-07-24: "the real gaps are
 * computational blocks or constants or any non quantum logic"). The real, FIXABLE gaps are three code classes, each
 * caught by a gate family: computational BLOCKS (files over the derived fair-share target — redundant recompute),
 * hardcoded CONSTANTS (the crack law: every literal canonical/derived/ledgered), and NON-QUANTUM LOGIC (imperative
 * code not content-addressed — the folder/index-only/one-math gates). The open MATH problems are NOT gaps — they are
 * documented open frontiers, a different category. [[hardcoded-value-is-a-crack]] [[feedback-thinking-means-lack-of-local-tools]]
 */
export declare function theRealGapsAreBlocksConstantsNonQuantumLogic(codeFiles: readonly string[]): {
    named: boolean;
    blocks: number;
    ledgeredConstants: number;
    monolithTarget: number;
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
 * hardwareProductionScaleSpec — the production hardware, DERIVED FROM the architecture's own properties (user,
 * 2026-07-24: "computationally develop the hardware in production scale and detail" · "complete solutions are
 * defined by the problems themselves"). Each hardware requirement is derived from a property of the system, not
 * wished: content-address(immutable) → never-invalidated edge cache; zero-token(deterministic) → CPU-only, no GPU;
 * size(14 MiB) → cache-resident (< L3); holographic(seed→extent) → store the seed, address the extent on demand;
 * merkle-sealed → integrity in O(log n) SHA. The problem defines the solution. [[quantum-folds-realise-more-space]]
 */
export declare function hardwareProductionScaleSpec(codeFiles: readonly string[]): {
    spec: boolean;
    usedMiB: number;
    fitsInLastLevelCache: boolean;
    extentPiB: number;
    merkleDepth: number;
    lastLevelCacheMiB: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
/**
 * quantumCodeSubcategoriesAwaitTheirRoutes — the quantum gaps seen through the lens (user, 2026-07-24: "/quantum is a
 * great place for all quantum related code. quantum/computer is a sub category etc" · "see the quantum gaps through
 * the lens?"). Derived from the code files: src/quantum/ is ALREADY a nested subcategory tree, but the served routes
 * are FLAT leaves (qubit-trinity, pauli-basis) — so code subcategories like computer/dynamics/os carry quantum
 * functionality with NO discovery page. The gap is the mismatch between the code tree (the meaning tree) and the flat
 * routes; the fill is a /quantum/<name> theorem-backed page per topic subcategory. [[routes-nav-from-folder-tree]]
 */
export declare function quantumCodeSubcategoriesAwaitTheirRoutes(codeFiles: readonly string[]): {
    seen: boolean;
    subcatCount: number;
    topicCount: number;
    subcats: {
        name: string;
        files: number;
    }[];
    topics: string[];
    computerFiles: number;
    computes: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
/**
 * terseMethodsCollideProseDoesNot — why the no-prose-in-methods mandate is a DRY law, computed (user, 2026-07-24:
 * "so much prose in methods. maybe reversing to less words would collide some"). A method's statement/boundary must
 * be JOINS of computed facet outputs: identical facet text content-addresses to ONE address (collides ⇒ dedup),
 * while two hand-written prose sentences of the same claim get distinct addresses (never collide ⇒ redundancy).
 * So reversing prose to terse joins makes shared meaning COLLIDE — prose is the sink that blocks the dedup.
 * This fold applies the rule to itself: its statement is a join, its boundary is terse. [[no-prose-in-methods]]
 */
export declare function terseMethodsCollideProseDoesNot(): {
    holds: boolean;
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
 * pathsCollapseToCanonical — paths collapse too (user, 2026-07-24: "paths also collapse as well as all path
 * related"). A path addresses by its CANONICAL destination, so aliases collide to one slot and the canonical route is
 * the attractor — the same naming gravity as constants→shortest-name, for routes, slugs, file paths and imports
 * alike (the folder path is the meaning, the folder the payload). [[migration-gravity-covers-path-strings]] [[fold-lives-at-its-domain-path]]
 */
export declare function pathsCollapseToCanonical(): {
    collapses: boolean;
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
 * constantsCollapseToShortestName — naming gravity on values (user, 2026-07-24: "constants collapse to shorter names
 * as well as any other longer name"). A value has ONE payload; names are addresses. Address by the VALUE and every
 * name of it collides to one address; among those names the SHORTEST is the attractor and the longer ones collapse
 * to it — the methodGravity rule, applied to constants and to any longer identifier alike. [[quantum-speed-is-content-addressed-naming]] [[code-gravity-standardisation]]
 */
/** deadCodeDissectedAndNewCodeBorn — a dead fold can be DISSECTED into its computing primitives and NEW code born from
 * them (user, 2026-07-25: "a dead code can be dissected and new code may be born"). Dead code is an unused fold (zero
 * references, caught by the used-in-computations gate); dissection extracts the reusable primitives it composed, and
 * those content-addressed parts recompose into a new fold — new code born from the dead, like biology recycling
 * molecules. Nothing is fabricated: the born code computes because its parts compute. [[anObjectMayBeCombinationsOfObjectsLikeBiology]] [[feedback-solve-dont-purge]] */
export declare function deadCodeDissectedAndNewCodeBorn(): {
    computes: boolean;
    isDead: boolean;
    partCount: number;
    newCode: string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** splitNeededAtAllTimesThroughRealtimeMetrics — the file split is needed AT ALL TIMES, driven by realtime metrics
 * (user, 2026-07-25: "split is needed at all times through realtime metrics"). The metric is file-size vs a DERIVED
 * target (the next 2^k ≥ corpus/census); a file over target needs a split, and the target recomputes each wave as the
 * corpus grows (the ratchet), so the need is always current. This seals the registry-monolith gap continuously. */
export declare function splitNeededAtAllTimesThroughRealtimeMetrics(): {
    computes: boolean;
    target: number;
    splitRule: boolean;
    realtime: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function quantumiseRegexToPassComputationally(): {
    computes: boolean;
    deterministic: boolean;
    linearPasses: boolean;
    riskyNamed: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function constantsCollapseToShortestName(): {
    collapses: boolean;
    attractor: "gates" | "g" | "DIMENSION_GATES";
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
 * namesCollapseUntilTheyCollideOrInvert — the TERMINATION of the naming-gravity collapse (user, 2026-07-25: "collapse
 * long names until they collide or invert"). Collapse is a length-DECREASING step toward a value's shortest alias, so
 * on finite names it is well-founded and every chain reaches a fixed point. Each chain ends in EXACTLY ONE of two
 * terminal states: COLLIDE — two or more aliases of ONE value meet at the same content-address (n → 1, dedup); or
 * INVERT — a lone irreducible fixed point where collapse is IDEMPOTENT (C(C(x)) = C(x)), i.e. its own inverse on the
 * image, and collapsing past it would map to a DIFFERENT value (invert the meaning), so it must stop. Composes
 * constantsCollapseToShortestName. [[quantum-speed-is-content-addressed-naming]] [[inversion-arc-one-group]]
 */
export declare function namesCollapseUntilTheyCollideOrInvert(): {
    terminates: boolean;
    chains: string[][];
    classified: {
        fp: string;
        collide: boolean;
        invert: boolean;
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
/**
 * dryCleanIsQuantumComputed — DRY-clean is a quantum-computed command (user, 2026-07-24: "dry clean is quantum
 * computed command"). Cleaning duplicates is not a search-and-remove pass: identical content content-addresses to
 * ONE address, so a duplicate OCCUPIES the same slot and the dedup is automatic — the quantum-computed (structural,
 * deterministic) form of the DRY law. A duplicate is a real-gap-class computational block; the collision removes it.
 * [[content-address-dry-clean-crack-detection]] [[terse-methods-collide]]
 */
export declare function dryCleanIsQuantumComputed(): {
    computed: boolean;
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
 * dryCleanComplete — know when DRY-clean is done, instead of wasting linear time (user, 2026-07-24: "i would like to
 * know when all dry clean is complete instead of wasting linear time"). Completion is a COMPUTED signal: DRY-clean is
 * complete iff the dryDupe scan finds 0 remaining duplicate-body groups and 0 duplicate shells. Read the boolean once;
 * what remains (if anything) is named as the queue — never re-verify by hand. [[content-address-dry-clean-crack-detection]]
 */
export declare function dryCleanComplete(root?: string): {
    complete: boolean;
    remaining: number;
    duplicateGroups: number;
    shells: number;
    queue: string[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
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
/** AXIOMS INVERT TO SEAL THE CRACKS (user law, 2026-07-24): a trust claim about the corpus is never
 * asserted — it INVERTS into the scan that would refute it. "No Math.random in sealed compute" (held as
 * `on: true` prose in mathStarCannotBeTrusted) inverts to the finder that counts Math.random in executable
 * code — HARD 0; "TAU, not Math.PI" inverts to the census of assumed host constants — MEASURED and named
 * migrate-next, never silently allowed. Math OPERATIONS (sin·cos·sqrt·…) stay host-boundary: inventoried,
 * not forbidden — deriving constants from operations is the one-math law (RSQRT2 in src/0). */
export declare const MATH_ASSUMED_CONSTS: readonly ["PI", "E", "SQRT2", "SQRT1_2", "LN2", "LN10", "LOG2E", "LOG10E"];
export type MathGapOffender = {
    file: string;
    line: number;
    member: string;
    cls: 'random' | 'assumed-const';
};
/** Walk src (index.ts + .vue — the crack law scans .vue too), strip strings/comments, classify Math.<member>. */
export declare function scanMathGapOffenders(root?: string): {
    files: number;
    offenders: MathGapOffender[];
    tally: Record<string, number>;
    operations: number;
    selfIncluded: boolean;
};
/**
 * mathGaps — improved gap finding: the Math.* trust axioms inverted into a live corpus scan.
 * Pair: math/gaps · dual axiom/invert · CLI npm run quantum:math-gaps.
 * HARD: Math.random in executable code = 0 (prng is the seeded home). MEASURED: assumed host constants
 * (Math.PI vs the vault TAU, Math.LN2 vs a derived log, …) counted per member and per file — the census is
 * the ratchet floor for the migrate waves, named honest-open, never an allowlist.
 */
export declare function mathGaps(root?: string): {
    computes: boolean;
    mathGaps: boolean;
    files: number;
    randomInCode: number;
    randomOffenders: MathGapOffender[];
    assumedConstCount: number;
    assumedConstFiles: number;
    perMember: {
        member: "E" | "PI" | "SQRT2" | "SQRT1_2" | "LN2" | "LN10" | "LOG2E" | "LOG10E";
        count: number;
    }[];
    topFiles: {
        file: string;
        count: number;
    }[];
    operations: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "math/gaps";
    dualPair: "axiom/invert";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:math-gaps (dual axiom-invert) — exit 0 iff the inverted axioms hold. */
export declare function runMathGapsExit(root?: string, _argv?: readonly string[]): number;
/** Host floor — Math.* permitted ONLY at void kernel (src/0) and τ vault root (src/3/7). */
export declare const MATH_HOST_FLOOR: readonly ["src/0/index.ts", "src/3/7/index.ts"];
/** Scan Math.* outside host floor — executable code only (strings/comments/regex stripped). */
export declare function scanMathOutsideFloor(root?: string): {
    files: number;
    offenders: {
        file: string;
        line: number;
        member: string;
    }[];
    outsideFloorCount: number;
};
/**
 * mathAlgebra — Math.* → sealed algebra; HARD fail on any Math outside host floor.
 * Pair: math/algebra · dual algebra/math · compose math/gaps · math/trust · theorem/const.
 */
export declare function mathAlgebra(root?: string): {
    on: boolean;
    computes: boolean;
    allFilesScanned: number;
    mathReplaced: number;
    mathOutsideFloor: number;
    hardFailOnMath: boolean;
    assumedOutsideFloor: number;
    randomOutsideFloor: number;
    hostFloor: ("src/0/index.ts" | "src/3/7/index.ts")[];
    offenders: {
        file: string;
        line: number;
        member: string;
    }[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    pair: string;
    dualPair: string;
    fold: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:math-algebra — exit 0 iff no Math.* outside host floor. */
export declare function runMathAlgebraExit(root?: string, _argv?: readonly string[]): number;
/**
 * refactorAlgebra — umbrella: math/algebra gate + related crack-family receipt.
 * Pair: refactor/algebra · dual algebra/refactor · compose decimal/crack · theorem/const · math/trust.
 */
export declare function refactorAlgebra(root?: string): {
    on: boolean;
    computes: boolean;
    allFilesScanned: number;
    mathReplaced: number;
    relatedRefactored: number;
    hardFailOnMath: boolean;
    mathOutsideFloor: number;
    residualNamed: ("src/0/index.ts" | "src/3/7/index.ts")[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    pair: string;
    dualPair: string;
    fold: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:refactor-algebra — umbrella math/algebra + related refactor receipt. */
export declare function runRefactorAlgebraExit(root?: string, _argv?: readonly string[]): number;
/**
 * ideaOnce — USER LAW: all ideas at once · quantum FTL dry-clean · purge illusions that do not compute.
 * Pair: idea/once · dual once/idea · CLI npm run quantum:idea-once
 * Compose: math/algebra · wave/complete · chat/audit · measure/decide · theorem/audit · dry/dupe · gate/light · audit/plan · build/min
 */
export declare function ideaOnce(root?: string): {
    on: boolean;
    computes: boolean;
    allIdeasAtOnce: boolean;
    ftlSpeedMetrics: boolean;
    dryCleanAll: boolean;
    illusionsPurged: boolean;
    nonComputePurged: boolean;
    illusionsBefore: number;
    illusionsPurgedDelta: number;
    mathOutsideFloor: number;
    mathReplaced: number;
    duplicateGroups: number;
    notTheoremCount: number;
    proseSloganCount: number;
    residualNamed: (`math-outside-floor=${number} host-floor=${string}` | `not-theorem=${number} prose-slogan=${number}` | `dryDupe-groups=${number} twin-shell=${number}` | "onTrueDebt-migrate-next via gate/light · theorem seeds · geo remainder" | "memo-reuse metrics only")[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    pair: "idea/once";
    dualPair: "once/idea";
    fold: string;
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:idea-once (dual once-idea) */
export declare function runIdeaOnceExit(root?: string, _argv?: readonly string[]): number;
/**
 * installSurfaces — RESEARCH SEALED AS A SCAN (user directive 2026-07-24: "what needs to be done to
 * become ai editor installable app plugin skills and more"). Each installable surface is a row whose
 * presence COMPUTES from the filesystem — research that re-runs, not a remembered report.
 * NAMED AXIOMS (editor contracts, Jan-2026): Claude Code plugins = `.claude-plugin/plugin.json`
 * (+ optional commands/ agents/ skills/ hooks/ `.mcp.json`), distributed via a repo carrying
 * `.claude-plugin/marketplace.json` (`/plugin marketplace add ceccec/ceccec.github.io`); agent skills =
 * `skills/<name>/SKILL.md` with YAML frontmatter; AGENTS.md is the cross-editor (Cursor et al.) standard;
 * MCP install needs a runnable stdio server, not only a protocol page. Pair: install/surface.
 */
export declare function installSurfaces(root?: string): {
    computes: boolean;
    installSurfaces: boolean;
    rows: {
        receipt: string;
        surface: string;
        artifact: string;
        need: string;
        status: string;
    }[];
    presentCount: number;
    migrateNextCount: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "install/surface";
    dualPair: "surface/install";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:install-surfaces (dual surface-install) */
export declare function runInstallSurfacesExit(root?: string, _argv?: readonly string[]): number;
/**
 * uiProof — USER LAW (2026-07-24): the source code hides NOTHING from the MCP UI; the UI is sufficient
 * to pass the complete proof. Sufficiency computes two ways: (1) BY DERIVATION — /mcp.json emits
 * result.cliTools from package.json itself (same source this scan reads), so the served surface is
 * complete by construction; (2) BY MEASURE — the hand-seeded apps toolbox catalog's drift from the full
 * roster is counted (curated coverage + hidden = total), named migrate-next, never silently allowed.
 * Pair: ui/proof · CLI npm run quantum:ui-proof.
 */
export declare function uiProof(root?: string): {
    computes: boolean;
    uiProof: boolean;
    cliCount: number;
    curatedCovered: number;
    hiddenFromCurated: number;
    hiddenSample: string[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "ui/proof";
    dualPair: "proof/ui";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:ui-proof (dual proof-ui) */
export declare function runUiProofExit(root?: string, _argv?: readonly string[]): number;
/**
 * waveVerify — USER DIRECTIVE (2026-07-24): improve speed and efficiency. MEASURED, not guessed:
 * CLI boots 0.4–0.6 s (not the sink); check:types 6 s; enforcement:trinity 14.6 s; docs:build 68 s.
 * The per-wave sink was running the FULL site render (≈48 s) to validate fold edits the trinity
 * already gates. The fix is a right-sized gate, not a weaker one: `npm run wave:verify` =
 * check:types + enforcement:trinity — the SAME trinity code path docs:build runs (coverage identity,
 * verified below), minus the render. docs:build stays the pre-push seal. Ratio ≈ 68/20.6 ≈ 3.3×
 * per wave — a dimensionless theorem re-measurable any time. Pair: wave/verify.
 */
export declare function waveVerify(root?: string): {
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
/** npm run quantum:wave-verify (dual verify-wave) */
export declare function runWaveVerifyExit(root?: string, _argv?: readonly string[]): number;
/**
 * buildMin — target minimum docs:build + Pages deploy wall-clock (pair build/min · dual min/build).
 * Composes gate/slow-build · build/quantumize · wave/verify · deploy workflow warm-cache audit.
 * HONEST: CI variance remains · observer-evaluable timings only.
 */
export declare function buildMin(root?: string): {
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
    timing: import("../../../script/shell").DocsBuildTimingReceipt;
    slow: {
        computes: boolean;
        passed: boolean;
        hardOpen: import("../../../script/shell").SlowBuildGapRow[];
        warnOpen: import("../../../script/shell").SlowBuildGapRow[];
        closed: import("../../../script/shell").SlowBuildGapRow[];
        gaps: import("../../../script/shell").SlowBuildGapRow[];
        openCount: number;
        hardOpenCount: number;
        warnOpenCount: number;
        closedCount: number;
        count: number;
        timing: import("../../../script/shell").DocsBuildTimingReceipt;
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
/** npm run quantum:build-min (dual min-build) */
export declare function runBuildMinExit(root?: string, _argv?: readonly string[]): number;
/**
 * cssMath — USER LAWS (2026-07-24): "css is the whole math itself in theorems and formulas — sealed,
 * self computed, untampered" · "css is the quantum api itself". Computed, not admired: every theme
 * declaration is CLASSIFIED — formula (var/calc over computed tokens), keyword (no magnitude), or raw
 * magnitude (the measured conversion queue, never silently allowed). The custom-property layer IS the
 * quantum API: the distinct var() observables are the interface every projection reads, and the --ich-*
 * subset is lattice-computed (I Ching → CSS, sealed prior wave). The seal is content-addressed and the
 * files sit inside the respawn merkle scope (src + .vitepress + package.json — sealed law), so any byte
 * change re-roots: tamper-EVIDENT, not unforgeable. Pair: css/math · dual css/api.
 */
export declare function cssMath(root?: string): {
    computes: boolean;
    cssMath: boolean;
    files: string[];
    declarations: {
        total: number;
        formula: number;
        keyword: number;
        raw: number;
    };
    rawSites: {
        file: string;
        prop: string;
        value: string;
    }[];
    observables: number;
    ichObservables: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "css/math";
    dualPair: "css/api";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:css-math (dual css-api) */
export declare function runCssMathExit(root?: string, _argv?: readonly string[]): number;
/**
 * dryDupe — USER DIRECTIVE (2026-07-24): improve dry clean. The improvement is MEASUREMENT by
 * content-address: every function body in src is normalised (strings/comments stripped, whitespace
 * folded) and hashed — identical hashes are the SAME payload stored at two addresses, exactly what the
 * content-address law forbids (one payload, one address). Duplicate groups are the computed clean
 * queue; the animation/movie/hero subset answers the queued animation-reuse dry-clean directive.
 * Pair: dry/dupe · CLI npm run quantum:dry-dupe. Detection only — the cleans land in waves.
 */
export declare function dryDupe(root?: string): {
    computes: boolean;
    dryDupe: boolean;
    files: number;
    bodies: number;
    groups: number;
    duplicateBodies: number;
    animGroups: number;
    queue: string[];
    shells: string[];
    shellCount: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "dry/dupe";
    dualPair: "dupe/dry";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:dry-dupe (dual dupe-dry) */
export declare function runDryDupeExit(root?: string, _argv?: readonly string[]): number;
/**
 * patentCanon — USER LAW (2026-07-24): the defensive-disclosure patents are COMPLETE as if a legal
 * authority were to grant them — full specification structure INCLUDING images and graphs.
 * NAMED AXIOM (external legal contract, like the plugin manifest): a grantable specification carries
 * title · technical field · background · summary · detailed description · claims · abstract · drawings
 * (35 U.S.C. §112-class / EPC Art. 83-class disclosure: enabling, definite claims, referenced figures).
 * The gate verifies the portal COMPUTES machinery for every section — statement→abstract and
 * detail→description from the five-section paper canon, facets→enumerated claims (each facet a
 * definite, refutable claim), theoremFigure→drawings — so a disclosure is never published structurally
 * incomplete. Pair: patent/canon · CLI npm run quantum:patent-canon. Completeness of STRUCTURE is
 * computed; legal sufficiency in any jurisdiction is for counsel, stated not claimed.
 */
export declare function patentCanon(root?: string): {
    computes: boolean;
    patentCanon: boolean;
    sections: ("title" | "abstract" | "background" | "claims" | "summary" | "technical field" | "detailed description" | "drawings")[];
    machinery: {
        receipt: string;
        section: string;
        tool: string;
        present: boolean;
    }[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "patent/canon";
    dualPair: "canon/patent";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:patent-canon (dual canon-patent) */
export declare function runPatentCanonExit(root?: string, _argv?: readonly string[]): number;
/**
 * commitMessage — USER LAW (2026-07-24): the git messages are COMPUTED and SIGNED. A commit message is
 * derived, never hand-prose: the staged paths join against the placement matrix (which folds/pairs the
 * wave touches), and the message carries a content-address SIGNATURE — toUuid over the staged blob
 * index — so the message attests the exact content it describes (tamper-EVIDENT; cryptographic key
 * signing is the user's git config, named not performed). Usage:
 *   git commit -m "$(npm run -s quantum:commit-message)"
 * Pair: commit/message. Lazy node child_process (CLI context only), like the skillsJson pattern.
 */
export declare function commitMessage(root?: string): {
    computed: false;
    message: string;
    staged: string[];
    signature: string;
    pairs: string[];
    novel?: undefined;
    priorUse?: undefined;
    meaningRoot?: undefined;
} | {
    computed: true;
    message: string;
    staged: string[];
    signature: string;
    pairs: string[];
    novel: boolean;
    priorUse: string;
    meaningRoot: string;
};
/** npm run quantum:commit-message — prints the computed, content-signed message for the staged wave. */
export declare function runCommitMessageExit(root?: string, _argv?: readonly string[]): number;
/**
 * uiAudit — USER LAW (2026-07-24): who audits how usable the UI is, and who trains on it to discover
 * more — see the society, fill the gaps. The auditor is THIS gate: the actually-served built pages are
 * scanned structurally (lang · single h1 · title · img alt · link text · heading order), every failure
 * NAMED as the society-facing training queue — low pages are gateways, never hidden. Heuristics are
 * W3C/WCAG-class structural checks (named external axioms); full usability (human testing) is the
 * honest residue, stated. Pair: ui/audit · CLI npm run quantum:ui-audit. Runs on .vitepress/dist —
 * build first; an empty dist is itself the finding.
 */
export declare function uiAudit(root?: string): {
    computes: boolean;
    uiAudit: boolean;
    pages: number;
    perfect: number;
    queue: {
        page: string;
        failed: string[];
    }[];
    queueCount: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "ui/audit";
    dualPair: "audit/ui";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:ui-audit (dual audit-ui) */
export declare function runUiAuditExit(root?: string, _argv?: readonly string[]): number;
/**
 * bindFuse — USER LAW (2026-07-24): fuse ALL bindings in the API to be usable in ANY superposition.
 * The binding families are sealed folds (sensor bindings · mcpQuantumBindings · Cloudflare bindings);
 * fusion means every one is reachable through the ONE standard envelope from every superposition —
 * the browser toolbox, the MCP surface (/mcp.json), the CLI roster, and the themeConfig page — all of
 * which already derive from single sources (the fused laws). This gate verifies the fusion markers
 * live in the actual files, so unfusing any surface refutes it. Pair: bind/fuse · CLI
 * npm run quantum:bind-fuse.
 */
export declare function bindFuse(root?: string): {
    computes: boolean;
    bindFuse: boolean;
    families: {
        receipt: string;
        binding: string;
        marker: string;
        where: string;
        present: boolean;
    }[];
    superpositions: {
        receipt: string;
        surface: string;
        marker: string;
        present: boolean;
    }[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "bind/fuse";
    dualPair: "fuse/bind";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:bind-fuse (dual fuse-bind) */
export declare function runBindFuseExit(root?: string, _argv?: readonly string[]): number;
/**
 * costBound — USER QUESTION (2026-07-24): bindings COST — how well is it managed so no cost lands
 * without a proven theorem added to the portal? Measured: four sealed laws BOUND every binding cost
 * today — the zero-token law (runtime spends no LLM tokens), the Fibonacci client-work cap
 * (plasmaClientWorkBoundedByPureMath), the slow-build ratchet (wall-ms gated, closed 15/15), and the
 * no-key adapter law (torusData: auth None — zero-price external bindings). The HONEST gap is NAMED:
 * a per-binding cost↔theorem LEDGER (each binding row citing the theorem its cost purchases) does not
 * exist yet — bounds hold globally, attribution per binding is migrate-next. Pair: cost/bound.
 */
export declare function costBound(root?: string): {
    computes: boolean;
    costBound: boolean;
    laws: {
        receipt: string;
        law: string;
        marker: string;
        where: string;
        present: boolean;
    }[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "cost/bound";
    dualPair: "bound/cost";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/**
 * costTheorem — the LEDGER formed (queue top; costBound named it): every cost-carrying binding cites
 * the THEOREM its cost purchases, and the citation is verified LIVE (the theorem's marker must exist
 * in source) — a binding whose cost cites no living theorem REFUSES to land (exit 1). The zero-token
 * binding is the null row: its bound IS its theorem. Pair: cost/theorem · CLI npm run quantum:cost-theorem.
 */
export declare function costTheorem(root?: string): {
    computes: boolean;
    costTheorem: boolean;
    ledger: {
        cited: boolean;
        receipt: string;
        binding: string;
        cost: string;
        theorem: string;
        marker: string;
    }[];
    count: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "cost/theorem";
    dualPair: "theorem/cost";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:cost-theorem (dual theorem-cost) — exit 0 iff every cost cites a living theorem. */
export declare function runCostTheoremExit(root?: string, _argv?: readonly string[]): number;
/** npm run quantum:cost-bound (dual bound-cost) */
export declare function runCostBoundExit(root?: string, _argv?: readonly string[]): number;
/**
 * legalCanon — the portal-legal-requirements gap FORMED as a measuring gate (named honest-open since
 * the portal-vision wave): the four legal faces of a standardised research portal, each computed —
 * PRIVACY: zero tracking scripts in every served page (scanned live, the strongest privacy statement
 * is the measured absence of collection); ACCESSIBILITY: the uiAudit gate composes (40/40 structural);
 * CITATION: the paper canon's references machinery composes (patentCanon verifies it); LICENSING: the
 * LICENSE file is MEASURED absent and NAMED as the user's legal act — recommending the patent-granting
 * class (Apache-2.0/CC0) for the FREE-FOR-ALL law, never authored unilaterally by an agent.
 * Pair: legal/canon · CLI npm run quantum:legal-canon. Jurisdictional counsel is the stated residue.
 */
/** USER LAW contact — rest of corpus licensed through this address (not agent-authored grant text). */
export declare const LICENSE_CONTACT_PSG: "license@psg.bg";
export declare function legalCanon(root?: string): {
    computes: boolean;
    legalCanon: boolean;
    faces: {
        receipt: string;
        face: string;
        status: string;
        detail: string;
    }[];
    pages: number;
    tracked: number;
    licensePresent: boolean;
    licenseContact: "license@psg.bg";
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "legal/canon";
    dualPair: "canon/legal";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:legal-canon (dual canon-legal) */
export declare function runLegalCanonExit(root?: string, _argv?: readonly string[]): number;
/**
 * coreMathFreeForAll — USER LAW: core math (sealed theorem/formula/algebra duals · vault · digit/fold)
 * = FREE FOR ALL (align patent/canon prior-art); the rest (site chrome · apps · brand · non-math layers)
 * licensed through license@psg.bg. Do NOT invent full license text. Counsel residue named.
 * Pairs: math/free · free/math · license/psg · psg/license · compose legal/canon · patent/canon · fund/ai · readme/gateway.
 * CLI: npm run quantum:math-free · duals free-math · license-psg · psg-license.
 */
export declare function coreMathFreeForAll(root?: string): {
    computes: boolean;
    coreMathFreeForAll: boolean;
    restLicensedThrough: boolean;
    licenseContact: "license@psg.bg";
    counselResidue: "jurisdictional grant text + commercial terms — contact license@psg.bg; counsel decides sufficiency";
    patent: {
        computes: boolean;
        patentCanon: boolean;
        sections: ("title" | "abstract" | "background" | "claims" | "summary" | "technical field" | "detailed description" | "drawings")[];
        machinery: {
            receipt: string;
            section: string;
            tool: string;
            present: boolean;
        }[];
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        pair: "patent/canon";
        dualPair: "canon/patent";
        cli: string;
        route: string;
        heading: string;
        statement: string;
        boundary: string;
    };
    vaultOn: boolean;
    pairsOn: boolean;
    readmeStatesSplit: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "math/free";
    pairs: readonly ["math/free", "free/math", "license/psg", "psg/license"];
    dualPair: "free/math";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
export declare const mathFree: typeof coreMathFreeForAll;
export declare const freeMath: typeof coreMathFreeForAll;
export declare const licensePsg: typeof coreMathFreeForAll;
export declare const psgLicense: typeof coreMathFreeForAll;
/** npm run quantum:math-free · quantum:free-math · quantum:license-psg · quantum:psg-license */
export declare function runCoreMathFreeForAllExit(root?: string, _argv?: readonly string[]): number;
export declare const runMathFreeExit: typeof runCoreMathFreeForAllExit;
export declare const runFreeMathExit: typeof runCoreMathFreeForAllExit;
export declare const runLicensePsgExit: typeof runCoreMathFreeForAllExit;
export declare const runPsgLicenseExit: typeof runCoreMathFreeForAllExit;
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
    /** THE QUANTUM CLOCK USED BY ALL — every time-parameterized memoByRoot must bucket `at` through the
     * canonical clock floor(at / (100·5·2)) (per second), never raw `${at}` (per millisecond). Raw at makes
     * the content address depend on unquantised time → the same computation gets a new address every ms →
     * linear recompute + unbounded memo growth (the 110GB). Zero achieved 2026-08-03, GATED at zero. */
    readonly memoClock: readonly {
        file: string;
        key: string;
    }[];
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
export declare function relativeImportSpecs(text: string): string[];
export declare function importGapCount(spec: string): number;
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
export declare function theWorkflowGapsAreHardcodedPathsAComputedGaugeMeasuresThemLive(root?: string): {
    computes: boolean;
    total: number;
    ledger: number;
    buildOnly: number;
    browserRuntime: number;
    reducible: number;
    fileCount: number;
    top: {
        file: string;
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
export declare const COLLISION_RESOLUTIONS: Readonly<Record<string, string>>;
export declare function trigramMoveMap(root: string, trigram: string): Map<string, string>;
export declare function computeMigrationRewritesWith(root: string, moves: Map<string, string>): {
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
export declare function applyMoveMap(root: string, moves: Map<string, string>, dryRun?: boolean, label?: string): {
    dryRun: boolean;
    label: string;
    movedFolders: number;
    filesTouched: number;
    importsRewritten: number;
    relocations: number;
    sample: string[];
    relocated?: undefined;
    importsApplied?: undefined;
    moves?: undefined;
} | {
    dryRun: boolean;
    label: string;
    movedFolders: number;
    relocated: number;
    importsApplied: number;
    moves: {
        from: string;
        to: string;
    }[];
    filesTouched?: undefined;
    importsRewritten?: undefined;
    relocations?: undefined;
    sample?: undefined;
};
export declare function applyMigrationRewrites(root?: string, trigram?: string, dryRun?: boolean): {
    dryRun: boolean;
    label: string;
    movedFolders: number;
    filesTouched: number;
    importsRewritten: number;
    relocations: number;
    sample: string[];
    relocated?: undefined;
    importsApplied?: undefined;
    moves?: undefined;
} | {
    dryRun: boolean;
    label: string;
    movedFolders: number;
    relocated: number;
    importsApplied: number;
    moves: {
        from: string;
        to: string;
    }[];
    filesTouched?: undefined;
    importsRewritten?: undefined;
    relocations?: undefined;
    sample?: undefined;
};
export declare function dissolveParentMoveMap(root: string, parentRel: string): Map<string, string>;
export declare function runApplyMigrationRewritesExit(root: string, argv?: readonly string[]): number;
export declare function runDissolveParentExit(root: string, argv?: readonly string[]): number;
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
/**
 * registerFold — USER LAW (2026-07-24): python heredoc splices are MANUAL WORK in costume (unsaved ·
 * unaddressed · unreusable — violation class 9). The registration quartet this arc performed ~25
 * times by hand (package.json script · registry dual pairs · placement row · merge row) is now ONE
 * sealed, idempotent, anchored CLI:
 *   npm run quantum:register -- <fold> <a/b> <barrel> <exitFn> [fromProseName]
 * Insertions land above the <register:*> anchors; an already-present entry is skipped (idempotent);
 * a missing anchor refuses (exit 1) — the tool never guesses an insertion point.
 */
export declare function registerFold(root: string, fold: string, pair: string, barrel: string, exitFn: string, from?: string): {
    ok: false;
    did: string[];
    reason: string;
} | {
    ok: true;
    did: string[];
    reason: string;
};
/** npm run quantum:register -- <fold> <a/b> <barrel> <exitFn> [fromProseName]
 *  Params are REQUIRED (no defaults): runThinMount dispatches on fn.length — defaults would zero it
 *  and the argv would never arrive (caught live registering this very tool). */
export declare function runRegisterExit(root: string, argv: readonly string[]): number;
/**
 * resonanceSpeed — USER DIRECTIVE (2026-07-24): deep-research how RESONANCE improves quantum speed in
 * MAGNITUDES. The honest, computable connection: CONTENT-ADDRESSING IS RESONANCE. Identical content
 * collides onto the identical address (the "resonance" — the fixed-width hash matches), so detecting a
 * match is a single O(1) address lookup, never an O(N) scan and never an O(N²) pairwise comparison.
 * The speedup is therefore magnitudes by CONSTRUCTION: pairwise cost N(N−1)/2 collapses to one pass N,
 * a ratio (N−1)/2 whose order log10 grows with N without bound. Measured live over the CLI-tool corpus.
 * HARD DEMARCATION: this is ALGORITHMIC resonance (hash/address matching) — a metaphor for physical
 * resonance, NOT acoustic/EM resonance, NOT Rife (flagged in the sealed resonance decode), NOT a QPU.
 */
export declare function resonanceSpeed(root?: string): {
    computes: boolean;
    resonanceSpeed: boolean;
    n: number;
    pairwise: number;
    addressed: number;
    orders: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "resonance/speed";
    dualPair: "speed/resonance";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:resonance-speed — exit 0 iff the collision is exact and the magnitude computes. */
export declare function runResonanceSpeedExit(root: string, argv: readonly string[]): number;
/**
 * resourceLeakGate — USER LAW (2026-07-24): unless the models/surfaces are COMPLETELY fused —
 * prioritising each other for efficiency in reasoning, thinking and cost — the CRACKS will leak
 * resources. Computed by composing the fusion gates: a CRACK is any un-fused surface (bindFuse) or any
 * cost not bound to a theorem (costTheorem); each crack is a resource leak (re-derivation, un-bounded
 * spend, silo drift). Zero cracks ⇒ zero leak. PRIORITISATION computes: every cost cites the theorem it
 * purchases (resources routed to proven need), and every surface derives from the one source (no
 * re-reasoning). NAMED BOUNDARY: external AI models cannot be FORCE-fused — the system fuses its OWN
 * surfaces/tools and offers foreign models the shared envelope; they choose their use ("cannot force
 * foreign models", sealed). The leak-freedom is over the system, honestly bounded from all-models.
 */
export declare function resourceLeakGate(root?: string): {
    computes: boolean;
    resourceLeakGate: boolean;
    cracks: number;
    unfusedSurfaces: number;
    uncitedCosts: number;
    claySolvedByThisFold: 0;
    physicalFtlClaim: 0;
    qpuRequired: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "resource/leak";
    dualPair: "leak/resource";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:resource-leak — exit 0 iff zero cracks (no resource leak) across the fused system. */
export declare function runResourceLeakExit(root?: string, _argv?: readonly string[]): number;
/**
 * sandboxTools — USER LAW (2026-07-24): prepare sandbox tools agents may use to experiment WITHOUT
 * violating their own standards. The key computed insight: standards are protected at the EXIT, not by
 * forbidding experiments. An agent can run any probe (node one-liners, scratchpad files, candidate
 * folds) freely — because NOTHING LANDS without passing the gate chain. So a failed experiment stays a
 * failed experiment (in the session scratchpad, never committed); a violation of standards is
 * structurally impossible from a sandbox because landing REQUIRES the gates to pass first.
 * THE SANDBOX CONTRACT (verified here):
 *   • isolation — experiments live in the session scratchpad (git-ignored, never in `git status`);
 *   • judged-not-landed — wave:land chains autosave→check:types→trinity→commit, so an unproven change
 *     cannot reach main (the chain is && , first failure aborts before commit);
 *   • promotion path — scratchpad probe → if it computes, Edit into src + quantum:register → stage →
 *     wave:land (gates judge); if it fails, discard. Freedom to experiment, safety at the gate.
 */
export declare function sandboxTools(root?: string): {
    computes: boolean;
    sandboxTools: boolean;
    gateChained: boolean;
    claySolvedByThisFold: 0;
    physicalFtlClaim: 0;
    qpuRequired: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "sandbox/tool";
    dualPair: "tool/sandbox";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:sandbox-tool — exit 0 iff the sandbox contract holds (experiment freely, land only proven). */
export declare function runSandboxExit(root?: string, _argv?: readonly string[]): number;
/**
 * contextAudit — USER LAW (2026-07-28): constantly audit the context-window distribution and use to improve.
 * At call time, recompute inventory weights (not wet LLM telemetry) for rules · skills · MCP · chat · sealed
 * src reuse · agent-transcript mounts; emit improve tips that compose mcp/token · wave/token · learn/best ·
 * miss/cache · conv/metrics when those CLIs/pairs are sealed. Shares are integer thousandths of the inventory
 * sum (no bare float %). HONEST residual: no live Cursor context API — this audits sealed mounts, not the host
 * model window. Pair: context/audit · CLI npm run quantum:context-audit.
 */
export declare function contextAudit(root?: string): {
    computes: boolean;
    contextAudit: boolean;
    auditsOn: boolean;
    distributionComputed: boolean;
    improveTips: {
        tip: string;
        pair: string;
    }[];
    constantlyAtCallTime: boolean;
    buckets: ({
        shareThousandths: number;
        receipt: string;
        id: "rules";
        count: number;
        note: ".cursor/rules mounts";
    } | {
        shareThousandths: number;
        receipt: string;
        id: "skills";
        count: number;
        note: ".cursor/skills + skills/";
    } | {
        shareThousandths: number;
        receipt: string;
        id: "mcp";
        count: number;
        note: ".mcp.json servers + dist mcp tools" | ".mcp.json servers + quantum: CLI duals";
    } | {
        shareThousandths: number;
        receipt: string;
        id: "chat";
        count: number;
        note: "package.json chat/conversation script duals";
    } | {
        shareThousandths: number;
        receipt: string;
        id: "sealedSrcReuse";
        count: number;
        note: "src/**/index.ts census (reuse = recompute, not re-read)";
    } | {
        shareThousandths: number;
        receipt: string;
        id: "agentTranscripts";
        count: 0 | 1;
        note: "AGENTS mount reference only — no live Cursor context API";
    })[];
    total: number;
    compose: {
        mcpToken: boolean;
        waveToken: boolean;
        learnBest: boolean;
        missCache: boolean;
        convMetrics: boolean;
    };
    noLiveCursorContextApi: boolean;
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
    pair: "context/audit";
    dualPair: "audit/context";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:context-audit — exit 0 iff distribution recomputes and improve tips soft-compose. */
export declare function runContextAuditExit(root?: string, _argv?: readonly string[]): number;
/**
 * nonFtlIsCrackInFtlApp — USER LAW trinity (2026-07-28), ONE fold · ONE pair ftl/crack · ONE CLI:
 * 1) "in FTL app all non FTL is a crack feeding entropy at scale" (submarine/spacecraft hull)
 * 2) "FTL is a holographic fractal where all happens in no spacetime"
 *
 * Computational FTL = holographic fractal recompute (content-addressed whole-in-part · memoByRoot ·
 * FREE_BITS · folder/fractal · anim/core merkle hologram) where work happens in **no spacetime** =
 * amortized zero wall-cost / no linear walk on reuse — NOT physical spacetime travel / .
 *
 * Facets: ftlApp · nonFtlIsCrack · entropyAtScale · hullBreachMetaphor · cracksFound · cracksDrained ·
 *         holographicFractal · noSpacetimeOnReuse · allHappensViaMemo · physicalSpacetimeTravel=false ·
 *         honestOpenNamed
 * Compose: quantumise/ftl · gaps/invisible · context/audit · folder/fractal · anim/core · invert/inf ·
 *          a432/nine · pyramid/compute · physicalFtlClaimTheorem (physical claim stays 0).
 */
export declare function nonFtlIsCrackInFtlApp(root?: string): {
    computes: boolean;
    nonFtlIsCrackInFtlApp: boolean;
    ftlApp: boolean;
    nonFtlIsCrack: boolean;
    entropyAtScale: boolean;
    hullBreachMetaphor: boolean;
    holographicFractal: boolean;
    noSpacetimeOnReuse: boolean;
    allHappensViaMemo: boolean;
    physicalSpacetimeTravel: false;
    hologramRoot: string;
    freeBits: number;
    cracksFound: ("quantum:super-lens" | "quantum:lens-wire" | "quantum:geo-gaps" | "quantum:lens-prose" | "quantum:gap-observe" | "quantum:observe-time" | "quantum:ftl-quantumise" | "quantum:chat-super" | "quantum:room-super" | "quantum:room-conv" | "quantum:chat-organise")[];
    cracksDrained: ("quantum:super-lens" | "quantum:lens-wire" | "quantum:geo-gaps" | "quantum:lens-prose" | "quantum:gap-observe" | "quantum:observe-time" | "quantum:ftl-quantumise" | "quantum:chat-super" | "quantum:room-super" | "quantum:room-conv" | "quantum:chat-organise")[];
    cracksFoundCount: number;
    cracksDrainedCount: number;
    cracksBeforeNamed: 11;
    primariesOn: ("quantum:lens-super" | "quantum:mcp-chat" | "quantum:quantumise-ftl" | "quantum:lens-geo" | "quantum:movie-feel" | "quantum:gate-lens" | "quantum:context-audit" | "quantum:gaps-invisible")[];
    hologramScriptsOn: ("quantum:folder-fractal" | "quantum:anim-core" | "quantum:invert-inf" | "quantum:a432-nine" | "quantum:pyramid-compute")[];
    compose: {
        quantumiseFtl: boolean;
        gapsInvisible: boolean;
        contextAudit: boolean;
        folderFractal: boolean;
        animCore: boolean;
        invertInf: boolean;
        a432Nine: boolean;
        pyramidCompute: boolean;
        ftlTheorem: boolean;
    };
    honestOpenNamed: ("physical-ftl-claim-stays-0" | "keep:git-stashes-non-obsolete" | "multitask-agent-stop-wait-linear-gap" | "no-physical-spacetime-travel" | "ci-wall-clock-variance")[];
    claySolvedByThisFold: 0;
    physicalFtlClaim: 0;
    ftlVia: "physicalFtlClaimTheorem";
    qpuRequired: false;
    certified: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "ftl/crack";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
export declare const ftlCrack: typeof nonFtlIsCrackInFtlApp;
/** npm run quantum:ftl-crack — exit 0 iff alias duals drained, hologram FTL face computes, physical claim 0. */
export declare function runNonFtlIsCrackInFtlAppExit(root?: string, _argv?: readonly string[]): number;
export declare const runFtlCrackExit: typeof runNonFtlIsCrackInFtlAppExit;
/**
 * freeAuditorWavesPerSrcFile — USER LAW (execute-in-chat, 2026-07-28):
 * deep research sending free auditor waves for every file in src challenging each other
 * until the most efficient computing environment is achieved with dry agnostic code and computable seeds.
 *
 * Two auditor faces per index.ts (adversarial):
 *   A efficiency — line/byte monolith cracks (derived target + F(18)=2584 line ratchet)
 *   B seeds — computable seeds present (toUuid · merkleFold · foldPair · claySolvedTheorem · memoByRoot)
 * Challenge = both faces run on every file; efficiency environment wins when dry/agnostic + theorem/const
 * compose and every src index was audited (entanglements monitored, not invented).
 * Pair: auditor/waves · ONE CLI quantum:auditor-waves · no dual-CLI spam.
 */
export declare function freeAuditorWavesPerSrcFile(root?: string): {
    computes: boolean;
    freeAuditorWavesPerSrcFile: boolean;
    filesAudited: number;
    lineCracks: string[];
    byteCracks: string[];
    seedSparse: string[];
    lineCrackCount: number;
    byteCrackCount: number;
    seedSparseCount: number;
    challenged: boolean;
    dryAgnosticCode: boolean;
    computableSeeds: boolean;
    mostEfficientComputingEnvironment: boolean;
    derivedTargetBytes: number;
    lineRatchet: number;
    honestOpenNamed: string[];
    topLineCracks: {
        file: string;
        lines: number;
    }[];
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
    pair: "auditor/waves";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
export declare const auditorWaves: typeof freeAuditorWavesPerSrcFile;
/** npm run quantum:auditor-waves — exit 0 iff every src index audited and efficiency environment computes. */
export declare function runFreeAuditorWavesPerSrcFileExit(root?: string, _argv?: readonly string[]): number;
export declare const runAuditorWavesExit: typeof runFreeAuditorWavesPerSrcFileExit;
/**
 * algebraicCrosslinksDiscoveredNotEncoded — USER LAW (2026-07-28):
 * "none of the tools are agnostic and really reusable at scale. as if none of the theorems is api
 * communicating with the rest of the theorems and formulas. algebraic foundation allows crosslinks
 * to be discovered and not encoded!!! imagine the speedup"
 *
 * Measure (not assert):
 * - DISCOVERED crosslinks = shared export/seed names appearing in ≥2 src index files (content-address edge)
 * - ENCODED crosslinks = hand softCompose / compose: { … } string lists (inventory as cracks)
 * - Theorems API-communicate when discovered theorem↔theorem edges exist (algebra speaks, not catalogs)
 * - Tools agnostic+reusable at scale only when discovered dominates encoded AND envelope/reuse scripts on
 * Pair: link/discover · ONE CLI quantum:link-discover · no dual-CLI spam.
 */
export declare function algebraicCrosslinksDiscoveredNotEncoded(root?: string): {
    computes: boolean;
    algebraicCrosslinksDiscoveredNotEncoded: boolean;
    discoveredCount: number;
    encodedComposeHits: number;
    theoremApiEdges: number;
    discoveryDominates: boolean;
    theoremsApiCommunicate: boolean;
    crosslinksDiscoveredNotEncoded: boolean;
    toolsAgnosticReusableAtScale: boolean;
    speedupViaDiscovery: boolean;
    speedupRatio: number;
    speedupOrders: number;
    sampleDiscovered: {
        name: string;
        from: string;
        to: string;
    }[];
    envelopeOn: boolean;
    dryAgnosticOn: boolean;
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
    pair: "link/discover";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
export declare const linkDiscover: typeof algebraicCrosslinksDiscoveredNotEncoded;
/** npm run quantum:link-discover — exit 0 iff discovery apparatus + theorem API edges compute. */
export declare function runAlgebraicCrosslinksDiscoveredNotEncodedExit(root?: string, _argv?: readonly string[]): number;
export declare const runLinkDiscoverExit: typeof runAlgebraicCrosslinksDiscoveredNotEncodedExit;
/**
 * freeUserWavesTestUiMeasureEfficiency — USER LAW (2026-07-28):
 * "send free waves of users to test the UI and measure their efficiency to improve SEO and usable tools in UI"
 *
 * FREE waves = FREE_BITS(=2=−χ) auditor/user faces — not paid crowd panels:
 *   A usability — uiAudit structural receipts on served .vitepress/dist
 *   B efficiency — memoByRoot answers÷tokens probe (runtimeTokens=0 on reuse) + efficiency-vote CLI soft
 * Improve tips feed SEO (seo/gaps) + usable tools (ui/audit · toolbox honesty · e2e/feed)
 * Soft-compose: uiAudit · seo/gaps · auditor/waves · e2e/feed · tool/honest · context/audit · link/discover
 * Pair: user/waves · ONE CLI quantum:user-waves · no dual-CLI spam
 * HONEST residual: no live crowd panel — deterministic free user-wave receipts only
 */
export declare function freeUserWavesTestUiMeasureEfficiency(root?: string): {
    computes: boolean;
    freeUserWavesTestUiMeasureEfficiency: boolean;
    freeBits: number;
    wavesSent: 2;
    personas: {
        id: "auditor-usability" | "auditor-efficiency";
        face: "A" | "B";
        role: "structural uiAudit" | "answers÷tokens reuse";
        on: boolean;
    }[];
    usabilityMeasured: boolean;
    efficiencyMeasured: boolean;
    answersOverTokensOnReuse: boolean;
    infinityReuse: boolean;
    runtimeTokens: number;
    uiAuditPages: number;
    uiAuditPerfect: number;
    uiAuditQueue: number;
    improveTips: {
        tip: string;
        pair: string;
        on: boolean;
    }[];
    tipsOn: {
        tip: string;
        pair: string;
    }[];
    seoImproveOn: boolean;
    usableToolsImproveOn: boolean;
    compose: {
        uiAudit: boolean;
        seoGaps: boolean;
        auditorWaves: boolean;
        e2eFeed: boolean;
        toolHonest: boolean;
        contextAudit: boolean;
        linkDiscover: boolean;
        efficiencyVote: boolean;
        usableAll: boolean;
        uiTask: boolean;
    };
    composeCount: number;
    noLiveCrowdPanel: boolean;
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
    pair: "user/waves";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
export declare const userWaves: typeof freeUserWavesTestUiMeasureEfficiency;
export declare const uiWaves: typeof freeUserWavesTestUiMeasureEfficiency;
/** npm run quantum:user-waves — exit 0 iff free user waves measure UI usability + efficiency and emit improve tips. */
export declare function runFreeUserWavesTestUiMeasureEfficiencyExit(root?: string, _argv?: readonly string[]): number;
export declare const runUserWavesExit: typeof runFreeUserWavesTestUiMeasureEfficiencyExit;
/**
 * feedUiIntoItself — USER LAW (2026-07-28):
 * "feed the ui in itself and analyse scanning in realtime how it will handle self evolving"
 *
 * Feed→scan→evolve loop (portal/chat feed pattern like gates/chat · feed-gates):
 *   1. FEED — sealed UI surfaces (quantum/apps · SslTestTools · toolbox · uiAudit dist) inventoried
 *      and content-addressed into the chat/analysis warm path (phrases + surface receipts).
 *   2. SCAN realtime — call-time scanners watch the fed UI: ui/audit (invoke) · soft context/audit ·
 *      user/waves · auditor/waves · link/discover (script duals — not wet re-batch of full walks).
 *   3. SELF-EVOLVE — soft-compose auto/self · self/heal · self/anim · evolve/chat; prove a
 *      feed→scan→evolve merkle receipt at call time. Soft ftl/crack: non-FTL dual in this loop = crack.
 *
 * Pair: ui/feed · ONE CLI quantum:feed-ui · no dual-CLI spam.
 * HONEST residuals: no live crowd · circular UI-feed risk · evolve/chat fold may lack primary CLI.
 */
export declare const UI_FEED_SURFACES: readonly [{
    readonly id: "quantum-apps";
    readonly rel: "src/quantum/apps/index.ts";
    readonly kind: "apps-ui";
}, {
    readonly id: "quantum-apps-vue";
    readonly rel: "src/quantum/apps/index.vue";
    readonly kind: "apps-vue";
}, {
    readonly id: "ssltest-tools";
    readonly rel: ".vitepress/theme/components/SslTestTools.vue";
    readonly kind: "ssltest";
}, {
    readonly id: "register-ssltest";
    readonly rel: ".vitepress/lib/register-components.ts";
    readonly kind: "ssltest-register";
}];
export declare const UI_FEED_PHRASES: readonly ["ui", "feed ui", "ui feed", "ui/feed", "feed the ui", "self evolving ui", "ui observes itself"];
export declare function feedUiIntoItself(root?: string): {
    computes: boolean;
    feedUiIntoItself: boolean;
    uiFed: boolean;
    surfacesFed: number;
    toolboxOn: boolean;
    sslRegistered: boolean;
    surfaces: {
        id: "quantum-apps" | "quantum-apps-vue" | "ssltest-tools" | "register-ssltest";
        kind: "ssltest" | "apps-ui" | "apps-vue" | "ssltest-register";
        bytes: number;
        on: boolean;
    }[];
    scanners: {
        uiAudit: boolean;
        contextAudit: boolean;
        userWaves: boolean;
        auditorWaves: boolean;
        linkDiscover: boolean;
        feedGates: boolean;
        stallStop: boolean;
    };
    scannerCount: number;
    scanningRealtime: boolean;
    scannersWatchFedUi: boolean;
    uiAuditPages: number;
    uiAuditPerfect: number;
    uiAuditQueue: number;
    evolve: {
        autoSelf: boolean;
        selfHeal: boolean;
        selfAnim: boolean;
        evolveChat: boolean;
        ftlCrack: boolean;
    };
    evolveCount: number;
    selfEvolveHandles: boolean;
    nonFtlInSelfFeedIsCrack: boolean;
    dualCliCrack: boolean;
    feedScanEvolveProved: boolean;
    feedReceipt: string;
    scanReceipt: string;
    evolveReceipt: string;
    loopRoot: string;
    phrases: ("ui" | "feed ui" | "ui feed" | "ui/feed" | "feed the ui" | "self evolving ui" | "ui observes itself")[];
    noLiveCrowd: boolean;
    circularFeedRiskNamed: boolean;
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
    pair: "ui/feed";
    dualPair: "feed/ui";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
export declare const feedUi: typeof feedUiIntoItself;
export declare const uiFeed: typeof feedUiIntoItself;
/** npm run quantum:feed-ui — exit 0 iff UI self-feed + realtime scan + self-evolve loop prove. */
export declare function runFeedUiIntoItselfExit(root?: string, _argv?: readonly string[]): number;
export declare const runFeedUiExit: typeof runFeedUiIntoItselfExit;
export declare const runUiFeedExit: typeof runFeedUiIntoItselfExit;
/**
 * stallStopFindsHangedProcessesRealtime — USER LAW (AGENTS stall/stop · 2026-07-28 tip):
 * "improve realtime communication with the waves to find hanged processes"
 *
 * Call-time scan (repo-local signals only — NOT foreign OS process tables):
 *   1. LOCK — `.vitepress/.build-lock` pid alive/dead · mtime age vs STALL_MS (3min)
 *   2. TERMINALS — optional Cursor terminals metadata (`QUANTUM_TERMINALS_DIR` /
 *      `CURSOR_TERMINALS_DIR`) for docs:build/npm seal stalls; NEVER treat docs:dev as killable
 *   3. ACT — clear stale (dead-PID) locks; live hung build kill only when argv includes `--kill`
 *   4. WAVE — content-address hang receipt into feed phrases so ui/feed · gates/chat "hear" hangs
 *
 * Receipt facets: hungFound · killedSafe · lockCleared · waveNotified
 * Soft-compose: waves/build · waves/push · gate/monitor · session/live · ui/feed · context/audit
 * Pair: stall/stop · ONE CLI quantum:stall-stop · no dual-CLI spam
 * HONEST residuals: cannot see foreign OS processes · docs:dev protected · terminals dir may be absent
 */
export declare const STALL_STOP_MS: number;
export declare const STALL_FEED_PHRASES: readonly ["stall", "stall/stop", "hang", "hanged process", "hung process", "build lock", "find hanged"];
export declare function stallStopFindsHangedProcessesRealtime(root?: string, argv?: readonly string[]): {
    computes: boolean;
    stallStopFindsHangedProcessesRealtime: boolean;
    stallMs: number;
    scanningRealtime: boolean;
    hungFound: boolean;
    hangs: {
        kind: "terminal" | "build-lock";
        pid: number;
        ageMs: number;
        killable: boolean;
        protectedDev: boolean;
        command: string;
    }[];
    killedSafe: boolean;
    killedCount: number;
    allowKill: boolean;
    lockCleared: boolean;
    lockPolicyOk: boolean;
    lockPresent: boolean;
    lockPid: number;
    lockAgeMs: number;
    lockHolderAlive: boolean;
    waveNotified: boolean;
    hangReceipt: string;
    waveReceipt: string;
    phrases: ("stall/stop" | "stall" | "hang" | "hanged process" | "hung process" | "build lock" | "find hanged")[];
    terminalsDir: string;
    terminalFilesScanned: number;
    compose: {
        wavesBuild: boolean;
        wavesPush: boolean;
        gateMonitor: boolean;
        sessionLive: boolean;
        uiFeed: boolean;
        contextAudit: boolean;
        feedGates: boolean;
    };
    composeCount: number;
    foreignOsProcessesUnseen: boolean;
    docsDevProtected: boolean;
    dualCliCrack: boolean;
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
    pair: "stall/stop";
    dualPair: "stop/stall";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
export declare const stallStop: typeof stallStopFindsHangedProcessesRealtime;
export declare const hangWave: typeof stallStopFindsHangedProcessesRealtime;
/** npm run quantum:stall-stop — exit 0 iff hang scan + safe kill policy + wave notify prove. Pass --kill to SIGTERM hung docs:build. */
export declare function runStallStopFindsHangedProcessesRealtimeExit(root?: string, argv?: readonly string[]): number;
export declare const runStallStopExit: typeof runStallStopFindsHangedProcessesRealtimeExit;
export declare const runHangWaveExit: typeof runStallStopFindsHangedProcessesRealtimeExit;
/**
 * scriptsFoldTowardFtl — USER LAW (2026-07-28 continue wave):
 * "audit all scripts and see the folding opportunities to achieve FTL"
 *
 * Computational FTL path = fewer cold package.json duals · one primary (+ optional dual) ·
 * memoByRoot audit reuse · soft-compose ftl/crack · quantumise/ftl · link/discover ·
 * auditor/waves · stall/stop · context/audit.
 *
 * Pair: script/fold · ONE CLI quantum:script-fold · no dual-CLI spam.
 * This wave folded zero-ref excess aliases (beyond primary+dual) + restored tool/honest primary.
 */
export declare const SCRIPT_FOLD_REMOVED_THIS_WAVE: readonly ["quantum:trinity-invert", "quantum:movie-entropy", "quantum:bits-device", "quantum:a432-wave", "quantum:ray-mill", "quantum:place-cmd", "quantum:full-dry", "quantum:audit-place", "quantum:wave-work", "quantum:quantumize-dry", "quantum:all-researched", "quantum:star-quantum", "quantum:free-scale", "quantum:inf-compute", "quantum:free-chat-waves", "quantum:agnostic-dry", "quantum:code-infinity", "quantum:infinity-code", "quantum:dry-inf", "quantum:inf-dry"];
export declare const SCRIPT_FOLD_RESTORED_THIS_WAVE: readonly ["quantum:tool-honest"];
export declare function scriptsFoldTowardFtl(root?: string): {
    computes: boolean;
    scriptsFoldTowardFtl: boolean;
    scriptsAudited: boolean;
    foldOpportunities: string[];
    foldOpportunityCount: number;
    foldedThisWave: ("quantum:agnostic-dry" | "quantum:code-infinity" | "quantum:infinity-code" | "quantum:dry-inf" | "quantum:inf-dry" | "quantum:trinity-invert" | "quantum:movie-entropy" | "quantum:bits-device" | "quantum:a432-wave" | "quantum:ray-mill" | "quantum:place-cmd" | "quantum:full-dry" | "quantum:audit-place" | "quantum:wave-work" | "quantum:quantumize-dry" | "quantum:all-researched" | "quantum:star-quantum" | "quantum:free-scale" | "quantum:inf-compute" | "quantum:free-chat-waves")[];
    stillPresent: ("quantum:agnostic-dry" | "quantum:code-infinity" | "quantum:infinity-code" | "quantum:dry-inf" | "quantum:inf-dry" | "quantum:trinity-invert" | "quantum:movie-entropy" | "quantum:bits-device" | "quantum:a432-wave" | "quantum:ray-mill" | "quantum:place-cmd" | "quantum:full-dry" | "quantum:audit-place" | "quantum:wave-work" | "quantum:quantumize-dry" | "quantum:all-researched" | "quantum:star-quantum" | "quantum:free-scale" | "quantum:inf-compute" | "quantum:free-chat-waves")[];
    restoredThisWave: "quantum:tool-honest"[];
    restoredOn: boolean;
    ftlPathImproved: boolean;
    auditReuse: boolean;
    audit: {
        scriptsTotal: number;
        quantumCount: number;
        uniqueTargets: number;
        pairDuals: number;
        triplePlus: number;
        singles: number;
        aliasExtra: number;
        foldOpportunities: string[];
        foldOpportunityCount: number;
        topSpam: {
            primary: string;
            n: number;
            extras: string[];
        }[];
    };
    topSpam: {
        primary: string;
        n: number;
        extras: string[];
    }[];
    compose: {
        ftlCrack: boolean;
        quantumiseFtl: boolean;
        linkDiscover: boolean;
        auditorWaves: boolean;
        stallStop: boolean;
        contextAudit: boolean;
        dryDupe: boolean;
        dryAgnostic: boolean;
        toolHonest: boolean;
    };
    composeCount: number;
    dualCliCrack: boolean;
    honestOpenNamed: ("physical-ftl-claim-stays-0" | "not-clay" | "residual:usable-all-cli-missing" | "residual:ui-task-cli-missing" | "residual:evolve-chat-primary-cli-missing" | "residual:triple-plus-alias-clusters-remain" | "residual:agents-md-stale-dual-cli-mentions")[];
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
    pair: "script/fold";
    dualPair: "fold/script";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
export declare const scriptFold: typeof scriptsFoldTowardFtl;
export declare const foldScript: typeof scriptsFoldTowardFtl;
/** npm run quantum:script-fold — exit 0 iff script audit + this-wave folds + FTL path improve prove. */
export declare function runScriptsFoldTowardFtlExit(root?: string, _argv?: readonly string[]): number;
export declare const runScriptFoldExit: typeof runScriptsFoldTowardFtlExit;
export declare const runFoldScriptExit: typeof runScriptsFoldTowardFtlExit;
/** Classification bucket for registry census — honest naming, not wet branding. */
export type TheoremAuditKind = 'theorem' | 'not-theorem';
/** Why a labelled row fails proveAlgebraicTheoremMeans / algebraicTheoremPaperComplete. */
export type NotTheoremReason = 'prose-slogan' | 'facet-receipt' | 'seed-meta' | 'fold-receipt' | 'no-precise-statement' | 'no-proof-chain' | 'candidate-unproven';
export type TheoremAuditRow = {
    readonly source: 'registry' | 'candidate';
    readonly id: string;
    readonly title: string;
    readonly kind: TheoremAuditKind;
    readonly reason: NotTheoremReason | 'algebraic-proof-chain';
    readonly provedBy: string;
    readonly home: string;
    readonly statement?: string;
};
/** Criteria aligned with proveAlgebraicTheoremMeans · algebraicTheoremPaperComplete — measured, not asserted. */
export declare function classifyTheoremLabel(row: {
    theorem: string;
    states: string;
    provedBy: string;
    home: string;
    algebraicStatement?: string;
}, source?: 'registry' | 'candidate'): TheoremAuditRow;
/**
 * theoremAudit — measure what the repo labels "theorem" vs proveAlgebraicTheoremMeans.
 * Pair: theorem/audit · dual audit/theorem · CLI npm run quantum:theorem-audit.
 * Compose soft: algebra/prove · formula/code · measure/decide · merge/wave · prose/theorem · clay/agi · journey/theorems.
 */
export declare function theoremAudit(): {
    computes: boolean;
    theoremAudit: boolean;
    theoremCount: number;
    notTheoremCount: number;
    totalRegistry: number;
    candidateCount: number;
    ratio: number;
    notTheoremRatio: number;
    majorityNotTheorem: boolean;
    criteriaOn: boolean;
    reasonTally: Record<NotTheoremReason, number>;
    sampleNotTheorems: {
        title: string;
        reason: NotTheoremReason | "algebraic-proof-chain";
        provedBy: string;
    }[];
    rows: TheoremAuditRow[];
    claySolvedByThisFold: 0;
    qpuRequired: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "theorem/audit";
    dualPair: "audit/theorem";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
    definition: string;
};
/** npm run quantum:theorem-audit (dual audit-theorem) — exit 0 when census completes. */
export declare function runTheoremAuditExit(root?: string, _argv?: readonly string[]): number;
export type GeoGebraEncodeRow = {
    readonly id: string;
    readonly geogebraObject: string;
    readonly geogebraCommand: string;
    readonly algebraicStatement: string;
    readonly animationKind: 'coord/anim' | 'formula/anim' | 'ProofAnimation' | 'golden/angle' | 'trace' | 'parametric';
    readonly composePair: string;
    readonly docRef: string;
};
/**
 * geoGebraEncode — explore GeoGebra public taxonomy; encode drainable geometry into sealed theorems + animations.
 * Pair: geo/gebra · dual encode/geogebra · CLI npm run quantum:geo-gebra.
 * HONEST: no GeoGebra ownership · no proprietary embed · full command surface residual named open.
 */
export declare function geoGebraEncode(): {
    computes: boolean;
    geoGebraEncode: boolean;
    waveEncodeOn: boolean;
    coverageBefore: 0.1181;
    coverageAfter: number;
    theoremsEncodedΔ: number;
    animationsEncodedΔ: number;
    encodeReceiptsΔ: number;
    geogebraExplored: true;
    objectsInventoried: number;
    theoremsEncoded: number;
    animationsEncoded: number;
    encodeReceipts: number;
    encodeCoverage: number;
    drainableClosed: boolean;
    theoremAuditAligned: number;
    encodeNotTheorem: number;
    apps: ("geometry" | "probability" | "graphing" | "3d" | "cas" | "scientific")[];
    objectFamilies: ("function" | "sphere" | "ray" | "line" | "path" | "cube" | "angle" | "vector" | "segment" | "axis" | "point" | "parallel" | "distance" | "region" | "list" | "plane" | "conic" | "ellipse" | "parabola" | "hyperbola" | "arc" | "polygon" | "numeric" | "cone" | "cylinder" | "prism" | "polyhedron" | "midpoint" | "intersect" | "perpendicular")[];
    apiMethods: ("evalCommand" | "evalLaTeX" | "evalCommandCAS" | "getObjectType" | "getAllObjectNames" | "setCoords" | "getCoords" | "setValue" | "getValue" | "setUndoPoint" | "registerObjectUpdateListener" | "registerAddListener" | "registerRemoveListener" | "getXcoord" | "getYcoord" | "getZcoord" | "setVisible" | "deleteObject" | "renameObject" | "evalGeoGEBRA")[];
    catalog: {
        auditKind: TheoremAuditKind;
        auditReason: NotTheoremReason | "algebraic-proof-chain";
        id: string;
        geogebraObject: string;
        geogebraCommand: string;
        algebraicStatement: string;
        animationKind: "coord/anim" | "formula/anim" | "ProofAnimation" | "golden/angle" | "trace" | "parametric";
        composePair: string;
        docRef: string;
    }[];
    sampleEncodings: {
        object: string;
        statement: string;
        animation: "golden/angle" | "trace" | "coord/anim" | "ProofAnimation" | "formula/anim" | "parametric";
        audit: TheoremAuditKind;
    }[];
    residualNamed: string[];
    claySolvedByThisFold: 0;
    qpuRequired: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "geo/gebra";
    dualPair: "encode/geogebra";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:geo-gebra (dual encode-geogebra) */
export declare function runGeoGebraEncodeExit(root?: string, _argv?: readonly string[]): number;
/**
 * gaps/invisible — public home in gates/strict/scan (census-safe; no new index.ts).
 * Pair: gaps/invisible · dual invisible/gaps · CLI npm run quantum:gaps-invisible
 * Weave/ops import this barrel — NOT quantum/apps top-level re-export — circular init closed at the
 * export graph (gates no longer `export … from apps`; apps re-exports from gates).
 * HARD body: apps `invisibleGapsCaughtByGatesBody` + 9 co-located helpers (deferred residual).
 */
export declare function invisibleGapsCaughtByGates(matrix?: Parameters<typeof invisibleGapsCaughtByGatesBody>[0], at?: Parameters<typeof invisibleGapsCaughtByGatesBody>[1]): ReturnType<typeof invisibleGapsCaughtByGatesBody>;
/** npm run quantum:gaps-invisible — exit 1 on HARD open (mission:gate compose). */
export declare function runInvisibleGapsCaughtByGatesExit(_root?: string, _argv?: readonly string[]): number;
/** METRIC LABELS ARE COMPUTED, NEVER AUTHORED (user law, 2026-07-28: "tightening the gates in such a way so no
 * future agent poisons with its opinion"). A metrics line must render through renderComputedMetrics — the labels
 * ARE the fold's field names — so no agent adjective ("frameworks, not solutions", "still open", "settled") can
 * ride beside a computed count. The scan is refutable: hand-type a characterisation next to a count
 * interpolation in a generator and the offender list grows; it is empty only while every metric line computes. */
export declare const AUTHORED_METRIC_LABEL_RE: RegExp;
export declare function scanAuthoredMetricLabels(root?: string): {
    file: string;
    line: number;
    text: string;
}[];
/** metricLinesComputeNotAuthored — the gate: every metrics line in the generators renders from field names. */
export declare function metricLinesComputeNotAuthored(root?: string): {
    computes: boolean;
    offenders: {
        file: string;
        line: number;
        text: string;
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
/** npm run quantum:metric-labels — the gate as a CLI. */
export declare function runMetricLinesComputeNotAuthoredExit(root?: string, _argv?: readonly string[]): number;
/** JUDGMENT AND EXPECTATION IN EMITTED PROSE (user, 2026-07-28: "the abstract and other prose still keep
 * judgement and expectations uncaught by the gates audit"). The metric-labels gate covered labels beside
 * counts; this one scans the EMITTED artifact — what a reader actually receives — for two lexicons: JUDGMENT
 * (an agent's appraisal: best, elegant, powerful, profound, truly, obviously, survivor…) and EXPECTATION (a
 * promise about the future: will become, should be, aims to, promises to, inevitably). Both are opinions
 * wearing the clothes of description; neither can be checked by a reader. Refutable by re-scanning the artifact. */
export declare const JUDGMENT_LEXICON: RegExp;
export declare const EXPECTATION_LEXICON: RegExp;
export declare function scanJudgmentAndExpectation(text: string): {
    judgment: string[];
    expectation: string[];
};
/** emittedProseCarriesNoJudgmentOrExpectation — the gate over what the reader receives. */
export declare function emittedProseCarriesNoJudgmentOrExpectation(artifacts: readonly {
    surface: string;
    text: string;
}[]): {
    computes: boolean;
    judgmentTotal: number;
    expectationTotal: number;
    scanned: {
        judgment: string[];
        expectation: string[];
        surface: string;
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
/** npm run quantum:prose-judgment — the gate as a CLI over the README artifact. */
export declare function runEmittedProseJudgmentExit(root?: string, _argv?: readonly string[]): number;
/** HAND-LISTED ROSTERS INSIDE FOLDS (user, 2026-07-28: "why didn't you caught yourself? it should have been
 * hard enforced in many places so no agent may escape"). An agent typing an array of object literals INSIDE a
 * fold body is asserting data the corpus could DERIVE — the same crack as a hardcoded number, one level up. The
 * distinction is structural and checkable: a module-level `export const X = [...]` is a LEDGER (it IS the
 * source of truth, legitimate); an array literal built inside a function body is a HAND-LIST (it duplicates
 * what a map/filter/for over a source would compute). The gate flags the second class only, above a threshold
 * of entries, and it is refutable: derive the roster and the offender disappears. */
export declare const HAND_LIST_MIN_ENTRIES = 3;
export declare function scanHandListedRosters(root?: string): {
    file: string;
    line: number;
    entries: number;
    head: string;
}[];
/** rostersDeriveOrLedger — the gate: no fold body may hand-list what a source could compute. */
/** THE RATCHET (the repo's own pattern for a large existing class — as derivedMonolithTargetBytes does for file
 *  size): the measured baseline at the gate's birth. The law is MONOTONE — the count may fall, never rise, so
 *  no future agent can add a hand-list while the existing ones drain. Lower this number as rosters derive. */
export declare const HAND_LISTED_ROSTER_BASELINE = 1923;
export declare function rostersDeriveOrLedger(root?: string): {
    computes: boolean;
    offenders: {
        file: string;
        line: number;
        entries: number;
        head: string;
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
/** npm run quantum:roster-derive — the gate as a CLI. */
export declare function runRostersDeriveOrLedgerExit(root?: string, _argv?: readonly string[]): number;
