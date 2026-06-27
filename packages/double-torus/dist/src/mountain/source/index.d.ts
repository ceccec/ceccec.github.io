import type { MindMatrix } from '../../wind/types';
export declare function autotranslations(matrix?: MindMatrix): {
    complete: boolean;
    areas: number;
    missing: string[];
    labels: {
        area: string;
        en: string;
        bg: string;
        translated: boolean;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
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
