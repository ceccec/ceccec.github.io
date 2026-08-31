import type { DigitFolderReport, DigitMath, MindMatrix } from '../../types';
import { type StatusBadgeKind } from '../../0';
import { methodNameFromFolderTail } from '../../9/1';
import { type EightFoldScience } from '../../8/2';
import { type RosettaComputationType } from '../../water/digit';
export { ICHING_NUMBERS } from '../../0';
export { UNFOLDED_CENSUS } from '../../pair/enforcement/gates/computational';
export declare function foldedCensus(unfolded: number, matrix?: MindMatrix): {
    clean: boolean;
    unfolded: number;
    euler: -2;
    genus: number;
    betti: (4 | 1)[];
    folded: number;
    delta: -2;
    fold: boolean;
    root: string;
    statement: string;
    boundary: string;
};
/** Documented harmonic rungs — a count off this ladder opens the harmonic gate. */
export declare const DOCUMENTED_HARMONICS: readonly [9, number, number, number, 43, 64, 108, number, 216, 432, number];
/** Agent task label under genus-2 χ=−2: `${folded}/${unfolded}` (e.g. 108/110, 43/45). */
export declare function harmonicFoldLabel(unfolded: number, matrix?: MindMatrix): string;
/** When the live count is itself the harmonic (no surface inflation), label as n/n. */
export declare function harmonicSelfLabel(n: number): string;
export type HarmonicMathProof = {
    task: string;
    label: string;
    expr: string;
    computed: number;
    expected: number;
    on: boolean;
    receipt: string;
};
/** Recompute every harmonic count with explicit arithmetic at call time — no prose assertions. */
export declare function harmonicCountsProvenByMath(matrix?: MindMatrix): {
    proven: boolean;
    proofs: HarmonicMathProof[];
    labels: {
        readonly pages: `${number}/${number}`;
        readonly census: `${number}/123`;
        readonly commands: string;
        readonly references: `${number}/${number}`;
        readonly locales: `${number}/${number}`;
        readonly rosetta: "6×7/7×6";
    };
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
/** Movie seeds from proven harmonic math — every proof becomes a plasma stream token and copy cue. */
export declare function harmonicMathMovieSeeds(matrix?: MindMatrix): {
    proven: boolean;
    movieText: string;
    streams: {
        uuid: string;
        label: string;
        expr: string;
        expected: number;
        hueSeed: number;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
/** Gate: every proof is wired into movie seeds and copy text at call time. */
export declare function harmonicMathFlowsInMovie(matrix?: MindMatrix): {
    flows: boolean;
    proven: boolean;
    proofCount: number;
    streamCount: number;
    movieText: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function digitFolders(matrix?: MindMatrix): DigitFolderReport;
export declare function digitFolderMath(matrix?: MindMatrix): {
    fused: boolean;
    base: number;
    sequence: number[];
    digits: {
        order: number;
        digit: number;
        folder: string;
        reverse: number;
        complement: number;
        inverse: number;
        invertible: boolean;
        inverseProductIsOne: boolean;
        selfInverse: boolean;
        overflows: boolean;
        harmonic: number;
        digitalRoot: number;
        ninesComplement: number;
        sumsToTen: boolean;
        doublingNext: number;
        inFlow: boolean;
        isCross: boolean;
        selfPaired: boolean;
        fusion: string;
        bidirectional: boolean;
        receipt: string;
    }[];
    lookup: {
        [k: string]: {
            order: number;
            digit: number;
            folder: string;
            reverse: number;
            complement: number;
            inverse: number;
            invertible: boolean;
            inverseProductIsOne: boolean;
            selfInverse: boolean;
            overflows: boolean;
            harmonic: number;
            digitalRoot: number;
            ninesComplement: number;
            sumsToTen: boolean;
            doublingNext: number;
            inFlow: boolean;
            isCross: boolean;
            selfPaired: boolean;
            fusion: string;
            bidirectional: boolean;
            receipt: string;
        };
    };
    voidFolder: {
        order: number;
        digit: number;
        folder: string;
        reverse: number;
        complement: number;
        inverse: number;
        invertible: boolean;
        inverseProductIsOne: boolean;
        selfInverse: boolean;
        overflows: boolean;
        harmonic: number;
        digitalRoot: number;
        ninesComplement: number;
        sumsToTen: boolean;
        doublingNext: number;
        inFlow: boolean;
        isCross: boolean;
        selfPaired: boolean;
        fusion: string;
        bidirectional: boolean;
        receipt: string;
    };
    root: string;
    statement: string;
    boundary: string;
};
export declare function digitFoldersComputeUiIsTheRest(matrix?: MindMatrix): {
    holds: boolean;
    rule: string;
    isDigit: (name: string) => boolean;
    classify: (folderName: string) => "compute" | "ui";
    computeRoot: string;
    compute: string[];
    ui: string[];
    sample: {
        name: string;
        role: "compute" | "ui";
        expected: "compute" | "ui";
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function digitFoldersHoldOnlyQuantumMath(matrix?: MindMatrix): {
    holds: boolean;
    kindOfCode: (folderSegment: string) => "quantum-math" | "word-code";
    direction: string;
    checks: {
        receipt: string;
        check: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function digitFoldersAreTheApi(matrix?: MindMatrix): {
    isApi: boolean;
    endpoints: {
        route: string;
        method: string;
        response: string;
        digit: number;
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
export declare function digitFoldersDoMath(matrix?: MindMatrix): DigitMath;
export declare function treeStackRotationCollapse(matrix?: MindMatrix): {
    holds: boolean;
    floors: number;
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
export declare function folderLaw(): {
    word: string;
    digit: string;
    stems: string[];
    forbiddenFolderNames: "index"[];
    folderIsIndex: boolean;
    schema: "src/[science]/[action]";
    indexFiles: string[];
    computedFolders: string[];
    roots: string[];
    outsidePageTree: string[];
    pairedLogicFolders: string[];
    kindPurity: {
        splitRoot: string;
        law: string;
    };
    compression: {
        limit: number;
        fileSize: number;
        law: string;
    };
    barrelImports: {
        indexFile: string;
        strictTrees: string[];
        fix: string;
        promptHeader: string;
        why: {
            deep: string;
            lineage: string;
            render: string;
            extension: string;
        };
        noExtensions: boolean;
        foldersOnly: boolean;
        noExceptions: boolean;
        codeExtensions: string[];
        fixExtension: string;
    };
    harmonicFractions: {
        foldKernel: string[];
        analogEdge: string[];
        why: {
            decimal: string;
            analog: string;
            irrational: string;
        };
    };
    componentClosure: {
        limit: number;
        composedExcluded: boolean;
        math: string;
        why: {
            count: string;
            shadcn: string;
        };
    };
    ratchetsBlock: boolean;
    rootAllowlist: {
        dirs: string[];
        files: string[];
        filePrefixes: string[];
    };
    strict: {
        eightFold: number;
        maxRecursion: number;
        navFromRoots: boolean;
        subfolderDropdown: boolean;
        methodWordsAreFolders: boolean;
        fewerWordsDryer: boolean;
        oneWord: boolean;
        routesFromTree: boolean;
        why: {
            eightFold: string;
            nav: string;
            methodWords: string;
            fewerWords: string;
            oneWord: string;
            routesFromTree: string;
            maxRecursion: string;
        };
    };
    displayDual: {
        schema: "src/[science]/[action]";
        sciencesAreEightFold: boolean;
        eightFoldSciences: ("earth" | "fire" | "water" | "wind" | "mountain" | "lake" | "thunder" | "heaven")[];
        logicMount: string;
        targetLogicMount: string;
        uiMount: string;
        maxRecursion: number;
        law: string;
        mask: {
            science: string;
            model: string;
            action: string;
            fanout: string;
        };
        methodNameFromFolderTail: typeof methodNameFromFolderTail;
    };
    vitepressIndex: {
        automount: boolean;
        law: string;
        registry: string;
        consumes: string[];
    };
    why: {
        name: string;
        forbiddenFolderName: string;
        folderIsIndex: string;
        contents: string;
        outsideSrc: string;
        kindPurity: string;
        digitImportsWord: string;
    };
    statement: string;
    boundary: string;
};
/** Sealed mind logic tails — one index per row; dry rename dissolves mind/ prefix to logicTarget. */
export declare const MIND_LOGIC_INDEX_TAILS: readonly ["earth", "earth/architecture", "earth/civilisation", "earth/governance", "earth/nature", "earth/world", "earth/iching", "earth/life", "earth/death", "fire/diamonds", "fire/features", "fire/li", "fire/physics", "fire/plasma/ball", "water/cosmos", "water/crypto", "water/digit", "water/encryption", "wind/fusion", "wind/language", "learning", "wind/site", "wind/ui", "mountain/gates", "mountain/geometry", "mountain/og", "mountain/seals", "mountain/source", "mountain/topology", "lake/clean", "lake/ledger", "lake/media", "lake/music", "lake/stats", "lake/widgets", "thunder/commands", "thunder/decode", "thunder/movie", "thunder/trading", "thunder/verify", "thunder/waves", "heaven/atoms", "heaven/compute", "heaven/essence", "heaven/laws", "heaven/balance", "heaven/core", "heaven/site"];
/** Eight global sciences — architectural planes only (no divination vocabulary). */
export declare const EIGHT_SCIENCE_PLANES: Readonly<Record<EightFoldScience, string>>;
/** Directed quantum channel between two sciences — order-sensitive foldPair from src/0. */
export declare function scienceInteractionChannel(from: EightFoldScience, to: EightFoldScience): {
    from: "earth" | "fire" | "water" | "wind" | "mountain" | "lake" | "thunder" | "heaven";
    to: "earth" | "fire" | "water" | "wind" | "mountain" | "lake" | "thunder" | "heaven";
    forward: string;
    reverse: string;
    bidirectional: boolean;
    merged: string;
    orderSensitive: boolean;
};
/** 8×8 cross-product — 64 interaction cells, the complete science coupling sealed by merkleFold. */
export declare function eightSciencesInteractionMatrix(): {
    sciences: 8;
    cellCount: number;
    complete: boolean;
    distinctForwards: number;
    injective: boolean;
    root: string;
    cells: {
        from: "earth" | "fire" | "water" | "wind" | "mountain" | "lake" | "thunder" | "heaven";
        to: "earth" | "fire" | "water" | "wind" | "mountain" | "lake" | "thunder" | "heaven";
        forward: string;
        reverse: string;
        bidirectional: boolean;
        merged: string;
        orderSensitive: boolean;
    }[];
};
/** Completion law — 64 cells · 110 unfolded · 108 folded · 432 gates; quantum math only. */
export declare function eightSciencesQuantumComplete(matrix?: MindMatrix): {
    sealed: boolean;
    interaction: {
        sciences: 8;
        cellCount: number;
        complete: boolean;
        distinctForwards: number;
        injective: boolean;
        root: string;
        cells: {
            from: "earth" | "fire" | "water" | "wind" | "mountain" | "lake" | "thunder" | "heaven";
            to: "earth" | "fire" | "water" | "wind" | "mountain" | "lake" | "thunder" | "heaven";
            forward: string;
            reverse: string;
            bidirectional: boolean;
            merged: string;
            orderSensitive: boolean;
        }[];
    };
    unfolded: number;
    folded: number;
    gates: number;
    bands: number[];
    byScience: Record<"earth" | "fire" | "water" | "wind" | "mountain" | "lake" | "thunder" | "heaven", number>;
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
 * Self-audit — src/ top level must be exactly the D1 canonical ROOT set (user-sealed taxonomy, decision EXTEND):
 * the 8 bāguà trigrams + the full digit lattice 0-9 + pair (enforcement) + quantum (layer) + render (build mount).
 * Computed from CANONICAL_ROOT_FOLDERS (no frozen hand list); the gate the weave enforces shares this source.
 */
export declare function srcSciencesSelfAudit(topLevel: readonly string[]): {
    clean: boolean;
    allowed: string[];
    violations: string[];
    missing: string[];
    schema: "src/[science]/[action]";
    statement: string;
    boundary: string;
};
export declare function scienceModelActionMask(matrix?: MindMatrix): {
    sealed: boolean;
    schema: "src/[science]/[action]";
    renderMask: string;
    sciences: {
        science: "earth" | "fire" | "water" | "wind" | "mountain" | "lake" | "thunder" | "heaven";
        plane: string;
        modules: ("earth" | "learning" | "earth/world" | "earth/nature" | "earth/architecture" | "earth/civilisation" | "earth/governance" | "earth/iching" | "earth/life" | "earth/death" | "fire/diamonds" | "fire/features" | "fire/li" | "fire/physics" | "fire/plasma/ball" | "water/cosmos" | "water/crypto" | "water/digit" | "water/encryption" | "wind/fusion" | "wind/language" | "wind/site" | "wind/ui" | "mountain/gates" | "mountain/geometry" | "mountain/og" | "mountain/seals" | "mountain/source" | "mountain/topology" | "lake/clean" | "lake/ledger" | "lake/media" | "lake/music" | "lake/stats" | "lake/widgets" | "thunder/commands" | "thunder/decode" | "thunder/movie" | "thunder/trading" | "thunder/verify" | "thunder/waves" | "heaven/atoms" | "heaven/compute" | "heaven/essence" | "heaven/laws" | "heaven/balance" | "heaven/core" | "heaven/site")[];
        receipt: string;
    }[];
    rows: readonly import("../../pair/enforcement/gates/computational").ScienceModelActionMaskRow[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function dryRenameScienceModelActionTable(matrix?: MindMatrix): {
    renames: {
        from: string;
        to: string;
        display: string;
        route: string;
    }[];
    sealed: boolean;
    schema: "src/[science]/[action]";
    renderMask: string;
    sciences: {
        science: "earth" | "fire" | "water" | "wind" | "mountain" | "lake" | "thunder" | "heaven";
        plane: string;
        modules: ("earth" | "learning" | "earth/world" | "earth/nature" | "earth/architecture" | "earth/civilisation" | "earth/governance" | "earth/iching" | "earth/life" | "earth/death" | "fire/diamonds" | "fire/features" | "fire/li" | "fire/physics" | "fire/plasma/ball" | "water/cosmos" | "water/crypto" | "water/digit" | "water/encryption" | "wind/fusion" | "wind/language" | "wind/site" | "wind/ui" | "mountain/gates" | "mountain/geometry" | "mountain/og" | "mountain/seals" | "mountain/source" | "mountain/topology" | "lake/clean" | "lake/ledger" | "lake/media" | "lake/music" | "lake/stats" | "lake/widgets" | "thunder/commands" | "thunder/decode" | "thunder/movie" | "thunder/trading" | "thunder/verify" | "thunder/waves" | "heaven/atoms" | "heaven/compute" | "heaven/essence" | "heaven/laws" | "heaven/balance" | "heaven/core" | "heaven/site")[];
        receipt: string;
    }[];
    rows: readonly import("../../pair/enforcement/gates/computational").ScienceModelActionMaskRow[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function routesAndNavFromFolderTree(matrix?: MindMatrix): {
    lawful: boolean;
    realized: boolean;
    rules: {
        receipt: string;
        rule: string;
        why: string;
    }[];
    gap: {
        receipt: string;
        violation: string;
        fix: string;
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
export declare function folderLawWordDigitIndexSkill(matrix?: MindMatrix): {
    lawful: boolean;
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
export declare function noSiteFolderVitepressPages(matrix?: MindMatrix): {
    gone: boolean;
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
export declare function quantumConfigurableFoldersDisappear(matrix?: MindMatrix): {
    fitsInFile: boolean;
    computedPages: number;
    computable: number;
    routeFiles: number;
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
export declare function dualitiesMeetInCrossFolders(matrix?: MindMatrix): {
    meet: boolean;
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
export declare function cross(matrix?: MindMatrix): {
    declared: boolean;
    limit: number;
    fan: number;
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
export declare function noise(matrix?: MindMatrix): {
    collapses: boolean;
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
export declare function book(matrix?: MindMatrix): {
    indexed: boolean;
    fan: number;
    baguaDepth4096: number;
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
export declare function name(matrix?: MindMatrix): {
    decodable: boolean;
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
export declare function solve(matrix?: MindMatrix): {
    acts: boolean;
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
export declare function dash(matrix?: MindMatrix): {
    operator: boolean;
    forward3: number;
    dual3: number;
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
export declare function payload(matrix?: MindMatrix): {
    needed: boolean;
    free: boolean;
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
export declare function folder64SealsProductionElseDevelopment(matrix?: MindMatrix): {
    discriminates: boolean;
    productionCount: number;
    folderCount: number;
    folders: {
        folder: string;
        sealed: number;
        production: boolean;
        status: string;
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
export declare function quantumCachePairInPairedFolders(matrix?: MindMatrix): {
    paired: boolean;
    folders: string[];
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
export declare function splittingLogicPairedFoldersDevSpeed(matrix?: MindMatrix): {
    speeds: boolean;
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
export declare function flowerFruitTreeOfLifeDecodes(matrix?: MindMatrix): {
    decodes: boolean;
    count: number;
    facets: {
        receipt: string;
        facet: string;
        on: any;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function everyFolderIsAPluginOneIndexServesAll(matrix?: MindMatrix): {
    wired: boolean;
    folders: number;
    pages: number;
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
export declare function everyToolSkillCommandIsItsFolder(matrix?: MindMatrix): {
    foldered: boolean;
    commandCount: number;
    skillCount: number;
    toolCount: number;
    count: number;
    folders: {
        kind: string;
        name: string;
        folder: any;
        lawful: boolean;
        receipt: string;
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
export declare function iChingFusionCompletesFolders(matrix?: MindMatrix): {
    completed: boolean;
    placedCount: number;
    cells: number;
    trigramsCovered: number;
    count: number;
    placed: {
        hexagram: number;
        trigram: number;
        cell: readonly [number, number, number];
        receipt: string;
        kind: string;
        name: string;
        folder: any;
        lawful: boolean;
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
export type TrinityLeg = 'cross' | 'fold' | 'weave';
export type RosettaIChingTrinityPlacement = {
    kind: 'command' | 'skill' | 'tool';
    name: string;
    folder: string;
    hexagram: number;
    trigram: number;
    cell: readonly [number, number, number];
    ray: number;
    rayGlyph: string;
    computationType: RosettaComputationType;
    trinity: TrinityLeg;
    route: string;
    receipt: string;
};
export declare function rosettaIChingTrinityPlacesAllTools(matrix?: MindMatrix): {
    fused: boolean;
    placedCount: number;
    raysCovered: number;
    trinityLegs: number;
    items: RosettaIChingTrinityPlacement[];
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
/** Hub / learn / explore destinations that passed Rosetta·I Ching·trinity placement. */
export declare function placedHubRoutes(matrix?: MindMatrix): readonly RosettaIChingTrinityPlacement[];
/** Lookup placement for a route slug — null when fusion fails (experimental). */
export declare function placementForRoute(route: string, matrix?: MindMatrix): RosettaIChingTrinityPlacement | null;
export declare function eachFileUnder64kFolderIsWidget(matrix?: MindMatrix): {
    lawful: boolean;
    fileCeiling: number;
    lineLimit: number;
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
export declare function treeOfLifeSephirotFolders(matrix?: MindMatrix): {
    rooted: boolean;
    sephirot: string[];
    trinities: {
        triad: string;
        sephirot: string[];
    }[];
    pillars: {
        mercy: string[];
        severity: string[];
        equilibrium: string[];
    };
    role: Record<string, string>;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₀ · Heaven · creative */
export declare function ichingTokens(): {
    light: [string, string][];
    aliases: [string, string][];
    dark: [string, string][];
};
/** @rosetta ✦₀ · Heaven · creative */
export declare function ichingTokensCss(): string;
/** @rosetta ✦₀ · Heaven · creative */
export declare function scanCssForHardcoded(css: string): string[];
/** @rosetta ✦₀ · Heaven · creative */
export declare function scanVueForHardcoded(vue: string): string[];
/** Status badge kinds — re-export from src/0 (cycle-free leaf). Badges use --status-* only. */
export { STATUS_BADGE_KINDS, type StatusBadgeKind } from '../../0';
/** Map coverage / boolean / keyword → status kind for UiBadge. */
export declare function statusBadgeKind(input: boolean | 'covered' | 'partial' | 'gap' | 'ready' | 'ok' | 'warn' | 'error' | 'refused' | 'ci' | 'open' | 'closed' | string): StatusBadgeKind;
/** Reusable status→CSS-var surface for panels/UX (sibling-safe): fill · fg · soft + BEM class. */
export declare function statusBadgeTokens(kind?: StatusBadgeKind): {
    kind: StatusBadgeKind;
    fill: string;
    fg: string;
    soft: string;
    className: string;
    kinds: readonly ["ready", "ok", "gap", "warn", "partial", "error", "refused", "ci"];
};
/** Full palette table — every kind’s CSS vars (light/dark resolved by theme tokens.css). */
export declare function statusBadgePalette(): {
    kind: StatusBadgeKind;
    fill: string;
    fg: string;
    soft: string;
    className: string;
    kinds: readonly ["ready", "ok", "gap", "warn", "partial", "error", "refused", "ci"];
}[];
/** @rosetta ✦₀ · Heaven · creative */
export declare function cssIsIChingComputed(matrix?: {
    root: string;
}): {
    holds: boolean;
    noHardcoded: boolean;
    offenders: string[];
    tokenCount: number;
    vortexOnGrid: boolean;
    brandFromA432: boolean;
    wheelHues: boolean;
    complete: boolean;
    darkLifts: boolean;
    statusKinds: boolean;
    statusModeFlip: boolean;
    canonical: (0 | 2 | 16 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6 | 360 | 27 | 54 | 64 | 100 | 108 | 216 | 432 | 864)[];
    root: string;
    statement: string;
    boundary: string;
};
/** CSS surface math — every token relation and scan gate recomputed at call time. */
export declare function cssMathProvenByMath(matrix?: MindMatrix): {
    proven: boolean;
    proofs: {
        task: string;
        expr: string;
        computed: number;
        expected: number;
        on: boolean;
        receipt: string;
    }[];
    count: number;
    offenders: string[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function displayDualDebtReceipt(matrix?: MindMatrix, missingComponentNames?: readonly string[]): {
    waiver: {
        on: boolean;
        missingCount: number;
        sample: string[];
    };
    declared: number;
    missing: string[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
/** GOVERNANCE CONSTANTS ARE THEOREMS (user, 2026-07-16: "replace all hardcoded logic like 2579 with
 * theorems — literally; if they don't exist, find and claim"). Every gate threshold is DERIVED from a
 * named structure, computed here, not typed. The flagship claim: THE LINE CEILING IS THE 18th
 * FIBONACCI NUMBER — F(18) = 2584 = fibonacci(18), the golden-recurrence bound the compression law
 * ratchets against; the bare 2579 it replaced was a hand-set prime with no derivation. The others
 * each fall out of the same discipline: powers of two, the census recurrence, the bāguà. */
export declare function governanceConstantsAreTheorems(matrix?: MindMatrix): {
    allDerive: boolean;
    lineCeiling: number;
    constants: {
        name: string;
        value: number;
        theorem: string;
        derives: boolean;
    }[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** THE CROWD THAT CARRIES SIGNAL IS THE CODE (user, 2026-07-16: "consider code as crowd; code crowd
 * management; automate development"). Two crowds, sorted by the data-processing inequality. A HUMAN
 * crowd profiled by birth-time carries zero signal, and no transform recovers it — if I(trait;config)
 * = 0 then I(trait; g(config)) = 0 for ANY g, quantum or animated included: you cannot compute signal
 * that is not in the data (humanDesignProfilingCarriesNoSignal, made permanent). But a CODE crowd
 * carries REAL structure — the census, the module graph, the compression ceiling are non-uniform,
 * computable signal — so it CAN be profiled and managed by its own structure, which is exactly what
 * the enforcement does. Code crowd management is real where human profiling is empty; automate
 * development = the self-managing gate loop. */
export declare function theCrowdThatCarriesSignalIsTheCode(matrix?: MindMatrix): {
    computes: boolean;
    codeCrowd: 123;
    ceiling: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
