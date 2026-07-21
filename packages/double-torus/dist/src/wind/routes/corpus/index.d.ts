import type { MindMatrix } from '../../types';
import { type LocaleName, type PageForgeSeal, type ProofAcknowledgment } from '../../site';
import { type RosettaRayHub } from '../../../water/digit';
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
        monograph: string;
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
    monograph: string;
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
        ray: 0 | 5 | 2 | 4 | 1 | 3 | 6;
        glyph: "Ⰰ" | "Ⰲ" | "Ⰴ" | "Ⰶ" | "Ⰹ" | "Ⰿ" | "Ⱄ";
        name: "Origin" | "Proof" | "Explore" | "Learn" | "Apps" | "Frontier" | "Reference";
        nameBg: "Произход" | "Доказателства" | "Изследване" | "Обучение" | "Приложения" | "Граници" | "Справочник";
        domain: "geometry" | "origin" | "expression" | "knowledge" | "nature" | "computation" | "language";
        hue: 0 | 51 | 102 | 154 | 205 | 257 | 308;
        labelEn: "Origin" | "Proof" | "Explore" | "Learn" | "Apps" | "Frontier" | "Reference";
        labelBg: "Произход" | "Доказателства" | "Изследване" | "Обучение" | "Приложения" | "Граници" | "Справочник";
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
export type RosettaBreadcrumb = {
    label: string;
    labelBg: string;
    glyph: string;
    route: string;
    current: boolean;
};
/** The reusable science-portal part for a route: the hub plus its content-shelved member pages.
 * A hub landing gets its own part; any other slug gets the part that shelves it (falling back to the
 * content lenses on the slug alone for non-static routes). RayHub and breadcrumbs consume THIS. */
export declare function rayHubPart(route: string, matrix?: MindMatrix): {
    hub: RosettaRayHub;
    part: {
        ray: 0 | 5 | 2 | 4 | 1 | 3 | 6;
        slug: "learn" | "reference" | "proof" | "explore" | "frontier" | "origin" | "apps";
        route: string;
        labelEn: "Origin" | "Proof" | "Explore" | "Learn" | "Apps" | "Frontier" | "Reference";
        labelBg: "Произход" | "Доказателства" | "Изследване" | "Обучение" | "Приложения" | "Граници" | "Справочник";
        glyph: "Ⰰ" | "Ⰲ" | "Ⰴ" | "Ⰶ" | "Ⰹ" | "Ⰿ" | "Ⱄ";
        hue: 0 | 51 | 102 | 154 | 205 | 257 | 308;
        count: number;
        pages: {
            slug: string;
            titleEn: string;
            titleBg: string;
        }[];
    };
    onHub: boolean;
};
/** Breadcrumb trail: Home (Origin hub fronts /) → ray-hub → current page. The ray-hub IA derives from
 * the sealed rosetta tables; a page folds to its hub by CONTENT shelving (sciencePortalParts lenses),
 * not the slug hash. The taxonomy is an organizing lens, not metaphysics. */
export declare function rosettaBreadcrumbs(route: string, at?: number, matrix?: MindMatrix): {
    route: string;
    ray: number;
    hub: RosettaRayHub;
    onHub: boolean;
    trail: RosettaBreadcrumb[];
    root: string;
    statement: string;
    boundary: string;
};
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
export declare function searchSectionsFor(file: string, html: string): {
    anchor?: string;
    titles: string[];
    text: string;
}[] | undefined;
export type TheoremPageRow = {
    slug: string;
    theorem: string;
    proof: string;
    proofClass: string;
    provedBy: string;
    home: string;
    spec: unknown;
    humanityNovel: boolean;
    registryFirst: boolean;
    leansCited: boolean;
    classification: string;
    provenance: string;
    reproducibility: string;
    citation: string;
    acknowledgment: ProofAcknowledgment;
    ordinal: number;
    tags: string[];
};
export declare function theoremSlug(theorem: string): string;
/** The domain tag of a proving home: the terminal named folder (music, crypto, decode…) or, for a pure
 * digit station, the station itself (9/1, 4/6). Derived from the home path — refutable: move the fold to
 * another home and the tag changes. */
export declare function theoremDomainTag(home: string): string;
/** Computed tags for a theorem paper — three axes, each a projection of a real field, none hand-authored:
 * the domain (home), the proof class (finite-complete / bounded-witness), and the method lean
 * (self-contained vs cited-frame). Change the field and the tag changes; that is what makes it computed. */
export declare function theoremTags(row: {
    home: string;
    proofClass: string;
    leansCited: boolean;
}): string[];
export declare function theoremPageRows(matrix?: MindMatrix): TheoremPageRow[];
export declare function theoremPagePaths(matrix?: MindMatrix): {
    params: {
        slug: string;
        title: string;
    };
}[];
export declare function theoremPageBySlug(slug: string, matrix?: MindMatrix): TheoremPageRow | null;
/** The papers latest-to-oldest — the user's reading order. Slug-stable: slugs are computed in the forward
 * (append) pass, so reversing the finished array only flips display order, never a URL. "Latest" = highest
 * registry ordinal (last appended); a deterministic proxy for recency, documented, not a wall-clock guess. */
export declare function theoremPapersLatestFirst(matrix?: MindMatrix): TheoremPageRow[];
export type TheoremTagGroup = {
    tag: string;
    axis: 'domain' | 'class' | 'lean';
    count: number;
    papers: TheoremPageRow[];
};
/** The papers organised BY TAG — each group is a computed tag and the papers carrying it, latest-first
 * inside the group. Groups are sorted by size (largest first) then tag name. A paper appears under each of
 * its tags (domain · class · lean), so the whole registry is reachable from any axis, newest at the top. */
export declare function theoremTagIndex(matrix?: MindMatrix): TheoremTagGroup[];
/** Lightweight tag headers (tag · axis · count) without the papers — for the index's filter chips and for
 * SSR nav, so rendering the chip row never ships every paper's proof text. */
export declare function theoremTagSummary(matrix?: MindMatrix): {
    tag: string;
    axis: TheoremTagGroup['axis'];
    count: number;
}[];
export type FigPoint = {
    x: number;
    y: number;
};
export type FigRole = 'a' | 'b' | 'target' | 'ok' | 'bad';
export type FigSeries = {
    label: string;
    kind: 'line' | 'dots';
    role: FigRole;
    points: FigPoint[];
};
export type TheoremFigureData = {
    formula: string;
    caption: string;
    xLabel: string;
    yLabel: string;
    series: FigSeries[];
    refLines: {
        y: number;
        label: string;
    }[];
    source: string;
};
/** The computed graph for a theorem, or null if src exposes none (never invented). */
export declare function theoremFigure(slug: string): TheoremFigureData | null;
export declare function hasTheoremFigure(slug: string): boolean;
export declare function staticProseBecomesPublishedResearchOnlyWhereItComputes(matrix?: MindMatrix): {
    computes: boolean;
    published: number;
    allTagged: boolean;
    allAcknowledged: boolean;
    allBackedByAFold: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function savingAThoughtIsProseConvertedToProofOrPurged(matrix?: MindMatrix): {
    computes: boolean;
    definition: string;
    published: number;
    allProven: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function rosettaDecodesCorpus(matrix?: MindMatrix): {
    params: {
        decoded: boolean;
        path: string;
        locale: string;
        slug: string;
        ray: number;
        station: number;
        crossPair: string;
        computationType: import("../../../3/7").RosettaComputationType;
        glagoliticAddress: string;
        rayMeta: {
            readonly ray: 0;
            readonly glyph: "Ⰰ";
            readonly nameEn: "Origin";
            readonly nameBg: "Произход";
            readonly domain: "origin";
            readonly hue: 0;
        } | {
            readonly ray: 1;
            readonly glyph: "Ⰲ";
            readonly nameEn: "Proof";
            readonly nameBg: "Доказателства";
            readonly domain: "expression";
            readonly hue: 51;
        } | {
            readonly ray: 2;
            readonly glyph: "Ⰴ";
            readonly nameEn: "Explore";
            readonly nameBg: "Изследване";
            readonly domain: "knowledge";
            readonly hue: 102;
        } | {
            readonly ray: 3;
            readonly glyph: "Ⰶ";
            readonly nameEn: "Learn";
            readonly nameBg: "Обучение";
            readonly domain: "nature";
            readonly hue: 154;
        } | {
            readonly ray: 4;
            readonly glyph: "Ⰹ";
            readonly nameEn: "Apps";
            readonly nameBg: "Приложения";
            readonly domain: "computation";
            readonly hue: 205;
        } | {
            readonly ray: 5;
            readonly glyph: "Ⰿ";
            readonly nameEn: "Frontier";
            readonly nameBg: "Граници";
            readonly domain: "geometry";
            readonly hue: 257;
        } | {
            readonly ray: 6;
            readonly glyph: "Ⱄ";
            readonly nameEn: "Reference";
            readonly nameBg: "Справочник";
            readonly domain: "language";
            readonly hue: 308;
        };
        sharedRoot: string;
        content: {
            pageKind: import("../../../3/7").RosettaComputationType;
            heroPhase: number;
            bodySeed: string;
            heroHue: 0 | 51 | 102 | 154 | 205 | 257 | 308;
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
}[];
/** The quantum-computing ray of a theorem, or −1 if it is not one. Classifies on the theorem TITLE only
 * (not the proof — proofs cross-reference other subfields and misroute), against the unambiguous subfield
 * keyword sets; the first matching subfield wins (ordered foundations→tools). Refutable: rename the
 * theorem and the routing changes. Title-only routing is both the membership filter and the ray. */
export declare function quantumTheoremRay(theorem: string, _proof?: string): number;
export type TheoremAtlasMetric = {
    slug: string;
    theorem: string;
    ray: number;
    tagGravity: number;
    inDegree: number;
    recency: number;
    proofClass: string;
    lean: 'self-contained' | 'cited-frame';
    domain: string;
};
export type TheoremAtlasTag = {
    tag: string;
    gravity: number;
    size: number;
    slugs?: string[];
};
export type TheoremAtlasRay = {
    ray: number;
    glyph: string;
    nameEn: string;
    hue: number;
    subfield: string;
    count: number;
    tagCloud: TheoremAtlasTag[];
    theorems: TheoremAtlasMetric[];
};
export type CombinationMember = {
    readonly slug: string;
    readonly theorem: string;
    readonly receipt: string;
};
export type Combination = {
    readonly slug: string;
    readonly members: readonly CombinationMember[];
    readonly root: string;
};
/** The rosetta combination of one served page — theorems whose name/tags share a word with the page's
 * slug+keywords. Deterministic, recomputed from the registry at every call; members are receipts only. */
export declare function pageCombination(slug: string, keywords: readonly string[], matrix?: MindMatrix): Combination;
export declare function pagesAreRosettaCombinationsOfTheorems(matrix?: MindMatrix): {
    computes: boolean;
    pageCount: number;
    memberEdges: number;
    reachedTheorems: number;
    registrySize: number;
    combinations: Combination[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function theoremRosettaAtlas(matrix?: MindMatrix): {
    rays: TheoremAtlasRay[];
    metrics: TheoremAtlasMetric[];
    searchIndex: {
        slug: string;
        text: string;
        ray: number;
        gravity: number;
    }[];
    cloud: TheoremAtlasTag[];
    undiscoverable: TheoremAtlasMetric[];
    topByGravity: TheoremAtlasMetric[];
    topByUse: TheoremAtlasMetric[];
    tagCount: number;
    total: number;
    root: string;
};
/** USE THE ROSETTA IN WAVES — the seven rays ARE seven development waves, ordered foundations → tools
 * (the logical build order: no-go results first, then algorithms, search, variational, communication,
 * error correction, and the state/tool layer). Each wave carries its ray's quantum theorems; a wave is
 * "landed" when every theorem in it computes. This is the rosetta as the work plan, not just a grouping —
 * new quantum theorems join the wave their subfield names, and the ray order is the curriculum order. */
export declare function quantumRosettaWaves(matrix?: MindMatrix): {
    wave: number;
    ray: number;
    subfield: string;
    glyph: string;
    theorems: string[];
    landed: boolean;
}[];
/** The VitePress sidebar for the quantum-computing theorems, computed from the rosetta atlas — one
 * collapsible section per ray (subfield), each listing its theorems ranked by tag-gravity, deepest first.
 * config.mts merges this under /theorems/ so the theorem sidebar IS the rosetta, quantum-only. */
export declare function theoremRosettaSidebar(matrix?: MindMatrix): {
    text: string;
    collapsed: boolean;
    items: {
        text: string;
        link: string;
    }[];
}[];
/** THE DISCOVERY LENS — improve the lens to discover the UNDISCOVERABLE using the quantum rosetta (user
 * law). The undiscoverable theorems are the ones NO citation and NO prominent tag surfaces: in-degree 0
 * (no other theorem's proof names their fold), ordered by least tag-gravity first. Ordinary navigation
 * (top-by-gravity, most-cited) can never reach them — the lens is the INVERSE-gravity view that brings the
 * orphans to light, ray by ray, so nothing proven stays hidden. Returns the hidden theorems and, per ray,
 * how many of its members are undiscoverable — the discovery worklist the rosetta computes. */
export declare function quantumLensDiscovery(matrix?: MindMatrix): {
    undiscoverable: {
        slug: string;
        theorem: string;
        ray: number;
        subfield: string;
        tagGravity: number;
    }[];
    byRay: {
        ray: number;
        subfield: string;
        hidden: number;
        total: number;
    }[];
    hiddenCount: number;
    total: number;
};
/** The atlas + sidebar as a computing theorem — quantum-only, the seven rays distinct, clouds ray-local. */
export declare function theoremRosettaAtlasComputes(matrix?: MindMatrix): {
    computes: boolean;
    rayCount: number;
    quantumTheorems: number;
    tagCount: number;
    rays: {
        ray: number;
        subfield: string;
        count: number;
        topTag: string;
    }[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function theRosettaReconfiguresVitepress(matrix?: MindMatrix): {
    computes: boolean;
    sidebarSections: number;
    searchLines: number;
    undiscoverable: number;
    waves: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function quantumLensImprovesItself(matrix?: MindMatrix): {
    computes: boolean;
    before: number;
    after: number;
    linked: number;
    residual: {
        theorem: string;
        subfield: "foundations & no-go" | "query algorithms" | "search & factoring" | "variational & adiabatic" | "communication" | "error correction" | "states & tools";
    }[];
    improvements: {
        slug: string;
        linkTo: string;
    }[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function selfImprovingResearchAndDevelopment(matrix?: MindMatrix): {
    computes: boolean;
    total: number;
    frontier: string;
    frontierCount: number;
    orphansHealed: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function theRosettaConsolidatesAllCollectionsDryToTheBitTheInvertedBitIsTheLight(matrix?: MindMatrix): {
    computes: boolean;
    collections: string[];
    addressed: number;
    distinct: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theRosettaCombinationsInvertOnlyAfterManifestingIn10DScientificFormatAcrossTheCodebase(matrix?: MindMatrix): {
    computes: boolean;
    addressable: number;
    manifested: number;
    inverted: number;
    manifestedShape: string[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function inversionIsRealtimeTheFieldDecidesNamingAndLocationEachDimensionGateHasExactCoordinates(matrix?: MindMatrix): {
    computes: boolean;
    placed: string[];
    gateCount: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
