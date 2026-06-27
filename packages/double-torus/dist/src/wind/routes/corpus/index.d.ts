import type { MindMatrix } from '../../types';
import { type LocaleName, type PageForgeSeal } from '../../site';
import type { CorpusKind } from '../../../quantum/heaven/mind';
import { type ComponentCrosslink } from '../../learning';
/** Fibonacci tiers [3,5,8] — same math as plasma hero; closes O(pages) client hangs. */
export declare const CLIENT_WORK_TIERS: readonly [3, 5, 8];
export declare const NAV358_TOTAL: number;
export declare const HUB_CARD_MAX: number;
export declare const TAG_CLUSTER_CAP: 8;
export declare const CORPUS_GRID_PAGE_SIZE: number;
export declare function corpusGridWorkBudget(): {
    tiers: readonly [3, 5, 8];
    nav358Total: number;
    hubCardMax: number;
    tagClusterCap: 8;
    gridPageSize: number;
    clientTagPages: number;
};
export declare function paperRoutes(matrix?: MindMatrix, count?: number): {
    params: {
        index: string;
        ax: number;
        ay: number;
        bx: number;
        by: number;
        total: number;
        fundamental: number;
        octaves: string;
        corpusRoot: string;
        proofVerified: boolean;
        proofDepth: number;
        leafCount: number;
        number: number;
        id: string;
        title: string;
        coordinateIndex: number;
        digit: number;
        glyph: string;
        generator: string;
        generatorName: string;
        theta: number;
        phi: number;
        x: number;
        y: number;
        z: number;
        frequency: number;
        vibrationMs: number;
        hue: number;
        coordinateReceipt: string;
        generatorUuid: string;
        forward: string;
        reverse: string;
        bidirectional: boolean;
        root: string;
        receipt: string;
    };
}[];
export declare function completeCorpus(matrix?: MindMatrix): {
    complete: boolean;
    papers: number;
    references: number;
    real: number;
    padding: number;
    total: number;
    depth: number;
    target: number;
    perfect: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function paperReferenceRoutes(matrix?: MindMatrix, count?: number): {
    params: {
        index: string;
        total: number;
        corpusRoot: string;
        binaryOctave: number;
        treeDepth: number;
        number: number;
        id: string;
        paperId: string;
        title: string;
        refersTo: string;
        root: string;
        coordinateIndex: number;
        generator: string;
        glyph: string;
        hue: number;
        bidirectional: boolean;
    };
}[];
export declare function diamondRoutes(matrix?: MindMatrix): {
    params: {
        id: string;
        index: string;
        leaf: number;
        number: number;
        address: string;
        kind: string;
        link: string;
        label: string;
        glyph: string;
        hue: number;
        total: number;
        corpusRoot: string;
        depth: number;
    };
}[];
export declare function pageSkills(matrix?: MindMatrix): {
    isSkillCorpus: boolean;
    pages: number;
    skills: number;
    references: number;
    statistics: number;
    graph: number;
    total: number;
    locales: number;
    root: string;
    statement: string;
    boundary: string;
};
/** One fold — quantum double torus decides SSG vs compute-only per corpus kind. */
export declare function doubleTorusCorpusRouting(matrix?: MindMatrix): {
    torus: {
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
    corpus: {
        complete: boolean;
        papers: number;
        references: number;
        real: number;
        padding: number;
        total: number;
        depth: number;
        target: number;
        perfect: boolean;
        root: string;
        statement: string;
        boundary: string;
    };
    lattice: readonly import("../../types").QuantumDiamond[];
    leaves: {
        pure: boolean;
        count: number;
        realDiamonds: number;
        paddingDiamonds: number;
        depth: number;
        root: string;
        statement: string;
        boundary: string;
    };
    ssg: Record<CorpusKind, readonly {
        params: Record<string, unknown>;
    }[]>;
    ssgPaths: (kind: CorpusKind) => readonly {
        params: Record<string, unknown>;
    }[];
    computeOnly: (kind: CorpusKind) => boolean;
    ssgPathCount: (kind: CorpusKind) => number;
    routed: boolean;
    enumerated: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function corpusRestPathRouting(matrix?: MindMatrix): {
    routed: boolean;
    count: number;
    enumerated: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** Gate: no static diamond [id] pages — lattice stays in computations (pureDiamonds, diamondLattice, pi train). */
export declare function diamondsStaticPagesPurged(matrix?: MindMatrix): {
    purged: boolean;
    staticPathCount: number;
    latticeKinds: number;
    merkleLeaves: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function corpusParams(kind: CorpusKind, id: string, matrix?: MindMatrix): {
    index: string;
    total: number;
    corpusRoot: string;
    binaryOctave: number;
    treeDepth: number;
    number: number;
    id: string;
    paperId: string;
    title: string;
    refersTo: string;
    root: string;
    coordinateIndex: number;
    generator: string;
    glyph: string;
    hue: number;
    bidirectional: boolean;
} | {
    index: string;
    ax: number;
    ay: number;
    bx: number;
    by: number;
    total: number;
    fundamental: number;
    octaves: string;
    corpusRoot: string;
    proofVerified: boolean;
    proofDepth: number;
    leafCount: number;
    number: number;
    id: string;
    title: string;
    coordinateIndex: number;
    digit: number;
    glyph: string;
    generator: string;
    generatorName: string;
    theta: number;
    phi: number;
    x: number;
    y: number;
    z: number;
    frequency: number;
    vibrationMs: number;
    hue: number;
    coordinateReceipt: string;
    generatorUuid: string;
    forward: string;
    reverse: string;
    bidirectional: boolean;
    root: string;
    receipt: string;
} | {
    id: string;
    index: string;
    leaf: number;
    number: number;
    address: string;
    kind: string;
    link: string;
    label: string;
    glyph: string;
    hue: number;
    total: number;
    corpusRoot: string;
    depth: number;
};
export declare function corpusCatchAllPaths(kind: CorpusKind, matrix?: MindMatrix): readonly {
    params: Record<string, unknown>;
}[];
declare function componentRosettaGroups(names?: readonly string[]): {
    groups: {
        grouped: boolean;
        ray: 0 | 1 | 2 | 4 | 5 | 3 | 6;
        glyph: "Ⰰ" | "Ⰲ" | "Ⰴ" | "Ⰶ" | "Ⰹ" | "Ⰿ" | "Ⱄ";
        name: "Alpha" | "Voice" | "Spirit" | "Life" | "Thought" | "Form" | "Word";
        nameBg: "Алфа" | "Глас" | "Дух" | "Живот" | "Мисъл" | "Форма" | "Слово";
        domain: "origin" | "expression" | "knowledge" | "nature" | "computation" | "geometry" | "language";
        hue: 0 | 51 | 102 | 154 | 205 | 257 | 308;
        labelEn: "Alpha" | "Voice" | "Spirit" | "Life" | "Thought" | "Form" | "Word";
        labelBg: "Алфа" | "Глас" | "Дух" | "Живот" | "Мисъл" | "Форма" | "Слово";
        components: string[];
    }[];
    grouped: boolean;
    count: number;
};
export type UniversalPageKind = 'corpus-index' | 'corpus-detail' | 'monograph' | 'catch-all';
export type UniversalDecodedFacet = {
    facet: string;
    on?: boolean;
    link?: string;
};
export type UniversalDecodedStation = {
    step?: number;
    station: string;
    route: string;
    why?: string;
};
export type CorpusGridItem = {
    route: string;
    id: string;
    title: string;
    glyph?: string;
    hue: number;
};
export type HeroPreview = {
    route: string;
    seed: string;
    hue: number;
    title: string;
    cardStyle: Record<string, string>;
};
export type UniversalRosettaRay = {
    ray: number;
    glyph: string;
    labelEn: string;
    labelBg: string;
    hue: number;
    domain: string;
};
export type UniversalPage = {
    kind: UniversalPageKind;
    route: string;
    locale: LocaleName;
    title: string;
    description: string;
    components: readonly string[];
    groups: ReturnType<typeof componentRosettaGroups>;
    proof: string | null;
    logic: string | null;
    target: string | null;
    corpusKind: CorpusKind | null;
    corpusId: string | null;
    corpusItems: readonly CorpusGridItem[];
    rosettaRay: UniversalRosettaRay | null;
    decoded: {
        title?: string;
        statement?: string;
        boundary?: string;
        facets?: UniversalDecodedFacet[];
        stations?: UniversalDecodedStation[];
        crosslinks?: ComponentCrosslink[];
        ok?: boolean;
    } | null;
    proofOk: string;
    proofNote: string;
    cardSeed: string;
    root: string;
    forge: PageForgeSeal;
};
/** Linked card hero preview — rosetta hue + card movie vars from one route. */
export declare function heroPreviewForRoute(route: string, title?: string, matrix?: MindMatrix): HeroPreview;
/** Hub destinations — navigation358 + harmonised nav, gated by global Rosetta·I Ching·trinity fusion. */
export declare function hubCardItems(locale: LocaleName, matrix?: MindMatrix): CorpusGridItem[];
/** Top keyword tags — staticPages on client (O(static)); full catalog on SSR/build. */
export declare function tagBrowserTags(matrix?: MindMatrix): readonly string[];
/** Pages sharing a keyword tag — capped at tier[0]×nav358 (=48) per grid page. */
export declare function tagBrowserItems(tag: string, locale: LocaleName, matrix?: MindMatrix): CorpusGridItem[];
/** Gate: hub · tag · grid pagination bounded by [3,5,8] pure math at call time. */
export declare function cardHeroClientWorkBoundedByPureMath(matrix?: MindMatrix): {
    bounded: boolean;
    budget: {
        tiers: readonly [3, 5, 8];
        nav358Total: number;
        hubCardMax: number;
        tagClusterCap: 8;
        gridPageSize: number;
        clientTagPages: number;
    };
    hubCount: number;
    tagCount: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** All client surfaces — plasma hero + hub/tag grids — one composite pure-math gate. */
export declare function clientWorkBoundedByPureMath(path?: string, matrix?: MindMatrix): {
    bounded: boolean;
    plasma: {
        bounded: boolean;
        paintPathSealed: boolean;
        computes: boolean;
        count: number;
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
    };
    cards: {
        bounded: boolean;
        budget: {
            tiers: readonly [3, 5, 8];
            nav358Total: number;
            hubCardMax: number;
            tagClusterCap: 8;
            gridPageSize: number;
            clientTagPages: number;
        };
        hubCount: number;
        tagCount: number;
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
/** card/hero-link pair — heroPreviewForRoute + hub + tag browser through Rosetta·I Ching·trinity. */
export declare function cardHeroLinkWiresInUi(matrix?: MindMatrix): {
    wired: boolean;
    hubCount: number;
    tagCount: number;
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
export declare function corpusIndexItems(kind: CorpusKind, locale: LocaleName, matrix?: MindMatrix): CorpusGridItem[];
/** One fold per route — hero, rosetta groups, corpus, or catch-all monograph. */
export declare function computeUniversalPage(route: string, params?: Record<string, unknown>, matrix?: MindMatrix): UniversalPage;
export { resolveZeitwerkRegistryEntry, zeitwerkPort } from '../automount';
export type { ZeitwerkEntry, ZeitwerkLoader, ZeitwerkRegistryEntry } from '../automount';
export { harmonisedNavigation, navigationIsMovie, ogBuildsNavigation, rosettaComputesNavigationAndContent, siteNavigation, vitepressSidebar, } from '../../learning';
export { pageForgeMaxTamper, type PageForgeSeal } from '../../site';
export { contentIsMonographOfMonographs, eachPageSpeaksContinuesNext, everyElementIsALinkedNodeOrUseless, everyGraphAMonographConsolidateExtend, everyPageGraphOfGraphsFractal, monographs, onlyPageRouteForAll, theMonograph, } from '../../learning';
export { homePageNoDifferent, homepage, pageStatusStatistics, proveAllOnHomePage, } from '../../site';
export { rosettaCanonicalImportPath, rosettaComputesCensusDissolve, rosettaComputesItself, rosettaReuse, coreComputationalLogicSaved } from '../../../water/digit';
/** All is monograph — every page is a scientific paper with one template. */
export declare function allIsMonographScientificPaper(matrix?: MindMatrix): {
    papered: boolean;
    papers: number;
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
