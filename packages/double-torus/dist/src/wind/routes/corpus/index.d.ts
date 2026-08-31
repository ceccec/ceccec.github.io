import type { MindMatrix } from '../../../types';
import { discoveryDomain } from '../../../4/6';
import { type LocaleName, type PageForgeSeal, type ProofAcknowledgment } from '../../site';
import { type RosettaRayHub } from '../../../water/digit';
import type { CorpusKind } from '../../../quantum/heaven/mind';
import { type ComponentCrosslink, type CorpusPaperStandardSections } from '../../../learning';
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
        sections: CorpusPaperStandardSections;
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
    lattice: readonly import("../../../types").QuantumDiamond[];
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
    sections: CorpusPaperStandardSections;
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
export declare function componentRosettaGroups(names?: readonly string[]): {
    groups: {
        grouped: boolean;
        ray: 0 | 2 | 5 | 4 | 1 | 3 | 6;
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
    /** cardMoviePath(route, seed) — same path CardBackgroundMovie paints via sharedHeroAt. */
    moviePath: string;
    /** Phase on the one hero clock (heroPhaseAt) — card + page share this. */
    p: number;
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
    /** Canonical body sections — PaperFrame owns abstract; H1 owns title (#68). Not a Clay Millennium mark. */
    standardPaper: CorpusPaperStandardSections | null;
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
/**
 * Linked card hero preview — one shared hero field for card CSS + CardBackgroundMovie.
 * Seed = cardMovieSeed([route, title]); moviePath = cardMoviePath(route, seed); hue from
 * heroMoviePhaseHue(moviePath, heroPhaseAt(at)) — same clock/path the canvas paints via sharedHeroAt.
 * Closes multi-clock / destination-vs-page-route desync (pair hero/card · card/hero · hero/anim).
 */
export declare function heroPreviewForRoute(route: string, title?: string, matrix?: MindMatrix, at?: number): HeroPreview;
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
        ray: 0 | 2 | 5 | 4 | 1 | 3 | 6;
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
export { harmonisedNavigation, navigationIsMovie, ogBuildsNavigation, rosettaComputesNavigationAndContent, siteNavigation, vitepressSidebar } from '../../../learning';
export { pageForgeMaxTamper, type PageForgeSeal } from '../../site';
export { contentIsMonographOfMonographs, eachPageSpeaksContinuesNext, everyElementIsALinkedNodeOrUseless, everyGraphAMonographConsolidateExtend, everyPageGraphOfGraphsFractal, monographs, onlyPageRouteForAll, theMonograph } from '../../../learning';
export { homePageNoDifferent, homepage, pageStatusStatistics, proveAllOnHomePage } from '../../site';
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
    formulas: readonly string[];
    formulaSource: string;
    acknowledgment: ProofAcknowledgment;
    ordinal: number;
    tags: string[];
};
/** Algebraic formulas dual to sealed proving code — pair formula/code. */
export declare function theoremFormulaCodeDual(row: {
    readonly slug: string;
    readonly theorem: string;
    readonly provedBy: string;
    readonly home: string;
    readonly proofClass: string;
    readonly algebraicStatement?: string;
    readonly proof?: string;
}): {
    readonly formulas: readonly string[];
    readonly formulaSource: string;
    readonly pair: 'formula/code';
};
export declare function theoremSlug(theorem: string): string;
/** The domain tag of a proving home: the terminal named folder (music, crypto, decode…) or, for a pure
 * digit station, the station itself (9/1, 4/6). Derived from the home path — refutable: move the fold to
 * another home and the tag changes. */
/** The domain tag of a home path — the canonical lives in src/4/6 (discoveryDomain); this is the DRY alias. */
export declare const theoremDomainTag: typeof discoveryDomain;
/** Computed tags for a theorem paper — three axes, each a projection of a real field, none hand-authored:
 * the domain (home), the proof class (finite-complete / bounded-witness), and the method lean
 * (self-contained vs cited-frame). Change the field and the tag changes; that is what makes it computed. */
export declare function theoremTags(row: {
    home: string;
    proofClass: string;
    leansCited: boolean;
}): string[];
export declare function theoremPageRows(matrix?: MindMatrix): TheoremPageRow[];
/** openFrontierCardLinks — each Open-frontier card on /frontiers links to its REVERSED (closed) companion theorem's
 *  dedicated page, computed by EXACT identity, never a fuzzy guess: a frontier that composes an inversion fold declares
 *  its `reversedProvedBy` (the fold name), and the page is theoremPageRows().find(provedBy === it). Below that (a frontier
 *  with no closed companion, e.g. baryogenesis) there is NO link — never a dead one. The link is the part we CAN prove;
 *  the card still states the OPEN empirical part. Quantumises "which page does this frontier open?" into a provedBy join.
 *  Pair: frontiers/link · frontiers/verify. */
export declare function openFrontierCardLinks(matrix?: MindMatrix): {
    computes: boolean;
    links: {
        frontier: string;
        term: string;
        reversedProvedBy: string;
        route: string;
        receipt: string;
    }[];
    linkedCount: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
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
    axis: 'domain' | 'class' | 'lean' | 'animation';
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
/** sessionGapsFilledAndSealedByTools — the session's named gaps, filled and sealed by registered tools (user,
 * 2026-07-25: "fill the session gaps and continue with the tools sealing those gaps"). Each gap is checked against the
 * registry: SEALED iff its sealing fold is registered (and, for gates, fails closed); OPEN gaps (the readme↔site roster
 * coupling, the registry monolith size) are named with a computed resolution, not faked closed. */
export declare function sessionGapsFilledAndSealedByTools(): {
    computes: boolean;
    sealedCount: number;
    openCount: number;
    ledger: {
        gap: string;
        tool: string;
        sealed: boolean;
        failClosed: boolean;
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
/** pagesWithoutDedicatedAnimationFailTheVitepressGates — a fail-closed gate: anything without a dedicated animation
 * does NOT pass (user, 2026-07-25: "anything without dedicated animation may not pass the vitepress gates"). Every page
 * must carry a dedicated animation — a divisor rung of the one 108 s fractal clock; the gate recomputes it and rejects
 * a page with none (allow is never the default). Because saveTheMissingTheoremsAndAnimations gives EVERY theorem a
 * computed animation, all pages pass; a hypothetical page without one fails closed. [[fractal-clock-lattice]] */
export declare function pagesWithoutDedicatedAnimationFailTheVitepressGates(): {
    computes: boolean;
    everyPageHasAnimation: boolean;
    pageWithoutAnimationFails: boolean;
    total: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** quantumiseAnchorsContentAddressed — heading anchors (the #fragment ids) are content-addressed, so they are
 * deterministic, collision-free, and stable across regeneration (user, 2026-07-25: "quantumise the anchors"). A
 * heading's anchor is a slug of its text; on a duplicate heading a content-address suffix disambiguates, so every
 * anchor on a page is unique and every external #link is stable. Feeds VitePress's heading-anchor slugify. */
export declare function quantumiseAnchorsContentAddressed(): {
    computes: boolean;
    anchors: string[];
    unique: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** privateSearchRanksByBM25IndustryStandard — the private search engine ranked by Okapi BM25, the industry-standard
 * lexical ranking (user, 2026-07-25: "further improve to industry standard"). Every registry page is a document; the
 * query ranks them by BM25 (k1 = 1.2, b = 0.75 — the Lucene/Elasticsearch/Solr defaults) with IDF weighting, term-
 * frequency saturation and document-length normalization. Fully client-side over the sealed corpus: deterministic,
 * zero-token, no egress — a private BM25 index. Lexical relevance, not neural/semantic ranking. [[portal-is-the-ai-model]] */
export declare function privateSearchRanksByBM25IndustryStandard(query?: string): {
    computes: boolean;
    query: string;
    results: {
        slug: string;
        title: string;
        provedBy: string;
        identity: string;
        score: number;
    }[];
    resultCount: number;
    docCount: number;
    avgdl: number;
    rank: (q: string) => {
        slug: string;
        title: string;
        provedBy: string;
        identity: string;
        score: number;
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
/** frontiersChatDiscoverInWaves — the open frontiers CHAT WITH EACH OTHER through the chat API (user: "wire /frontiers
 *  in the chat apis" · "let the frontiers chat with each other discovering in waves"). Each frontier speaks its own term
 *  into the BM25 chat retrieval (privateSearchRanksByBM25IndustryStandard) and hears back the theorems that rank — its
 *  neighbourhood. Two frontiers CHAT when their neighbourhoods OVERLAP: a shared theorem is a conversation between them.
 *  The chat graph is DISCOVERED IN WAVES — BFS from the first frontier, each wave the newly-reached frontiers — until the
 *  connected component closes. Deterministic (BM25 is deterministic), zero-egress, no LLM: same frontiers → same waves. */
export declare function frontiersChatDiscoverInWaves(matrix?: MindMatrix): {
    computes: boolean;
    voices: {
        frontier: string;
        term: string;
        heard: string[];
    }[];
    edges: {
        a: string;
        b: string;
        shared: readonly string[];
    }[];
    waves: string[][];
    reached: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** The VitePress local-search config (themeConfig.search) fused to the private corpus — provider 'local' (MiniSearch,
 * built at compile time), no Algolia, no query egress. Consumes the VitePress API rather than bypassing it. */
export declare function vitepressSearchConfig(): {
    provider: "local";
    options: {
        detailedView: boolean;
        miniSearch: {
            searchOptions: {
                fuzzy: number;
                prefix: boolean;
                boost: {
                    title: number;
                    text: number;
                };
            };
        };
    };
};
/** vitepressSearchFusedToPrivateBm25Engine — the VitePress ⌘K search is fused to the private BM25 engine (user,
 * 2026-07-25: "vitepress search is fused to the search engine"). Every BM25 document is a served VitePress page, so the
 * native local search (MiniSearch) and the private Okapi-BM25 box index the SAME corpus — one document source, consistent
 * results on either surface. VitePress search stays its own local provider (no Algolia, no query egress); the private
 * box adds scored ranking, the fused answer, and search-driven navigation. [[feedback-do-not-bypass-vitepress-api]] */
export declare function vitepressSearchFusedToPrivateBm25Engine(): {
    computes: boolean;
    sharedCorpus: boolean;
    coveredDocs: number;
    totalDocs: number;
    servedPages: number;
    config: {
        provider: "local";
        options: {
            detailedView: boolean;
            miniSearch: {
                searchOptions: {
                    fuzzy: number;
                    prefix: boolean;
                    boost: {
                        title: number;
                        text: number;
                    };
                };
            };
        };
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
export type SearchExperience = {
    query: string;
    selectedSlug: string;
};
/** searchImprovesByExperiencePrivateRelevanceFeedback — the private search improves BY EXPERIENCE (user, 2026-07-25:
 * "improve by experience"). Given a LOCAL, client-side experience log (past query → selected result), it reranks the
 * industry-standard BM25 results by relevance feedback (Rocchio-style click-boost): a document the user previously
 * chose for a query sharing terms is boosted, so it rises. Deterministic (same query + experience → same reranking),
 * private (the log is client-side, nothing leaves the browser), and bounded to the user's OWN experience — local
 * relevance feedback, not server-side learning-to-rank on aggregated logs. [[erpax-cross-pollination]] */
export declare function searchImprovesByExperiencePrivateRelevanceFeedback(query?: string, experience?: readonly SearchExperience[]): {
    computes: boolean;
    query: string;
    results: {
        finalScore: number;
        boost: number;
        slug: string;
        title: string;
        provedBy: string;
        identity: string;
        score: number;
    }[];
    improves: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** A computed default figure + fractal-clock animation for a theorem, derived from its content-address, so no page is
 * missing a graph or an animation. The bespoke theoremFigureBuilders stay the richest; this guarantees COVERAGE. */
/** figureArchetypeOf — the IDENTITY selects the figure's SHAPE (user, 2026-07-28: "why so many animations are
 * generic?" → the default had ONE archetype for ~746 theorems). The theorem's algebraic statement classifies to
 * a visual archetype by its own operators — congruence → wheel, group/orbit → orbit polygon, inequality →
 * region, count/set → lattice, map → flow, equation → curve, else the 9-point series. Deterministic; the FIRST
 * matching class wins (mod before =, so ≡-rows wheel rather than curve). */
export declare function figureArchetypeOf(identity: string): 'wheel' | 'orbit' | 'region' | 'lattice' | 'flow' | 'curve' | 'series';
export declare function computedTheoremFigureAndAnimation(atom: {
    theorem: string;
    provedBy: string;
    algebraicStatement?: string;
    states?: string;
}): {
    figure: {
        formula: string;
        archetype: "flow" | "lattice" | "wheel" | "orbit" | "region" | "curve" | "series";
        series: {
            x: number;
            y: number;
        }[];
    };
    animation: {
        rung: number;
        periodS: number;
        phase: number;
        direction: string;
        amplitude: number;
        archetype: "flow" | "lattice" | "wheel" | "orbit" | "region" | "curve" | "series";
    };
    itemid: string;
};
/** saveTheMissingTheoremsAndAnimations — save the theorems and animations that are missing (user, 2026-07-25: "save
 * the missing theorems and animations"). It audits which registry theorems lack an explicit figure builder, then SAVES
 * a computed default graph + fractal-clock animation for EVERY theorem (derived from its content-address), so no page
 * is missing a graph or an animation. Saved as computation (recomputed, not stored per page). [[every-page-is-a-proof-standards-formulas-graphs-animations]] */
export declare function saveTheMissingTheoremsAndAnimations(): {
    computes: boolean;
    total: number;
    withFigure: number;
    missing: number;
    everyCovered: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** nothingSealsWithoutAUniqueSealedAnimationFormingTheSouthPole — the seal law (user, 2026-07-25: "nothing may seal
 * without a sealed unique animation as the 4th element as the south pole" + "the fourth element is the seal forming
 * south pole"). A seal is a TETRAD, not a trinity: statement · facets · boundary are the three (north/equator); the
 * FOURTH element is a sealed UNIQUE animation, and that element IS the seal — it FORMS the south pole (the nadir, the
 * boundary circle one-point-compactified on the double torus). The seal closes only when the trinity (north) is fused
 * with the sealed animation (south): no animation → no south pole → nothing seals. Every registered theorem forms its
 * south pole automatically — computedTheoremFigureAndAnimation derives a content-addressed fractal-clock animation from
 * the atom, so each closed seal is sealed and unique. Verified across the whole corpus. [[fractal-clock-lattice]] [[double-torus-fold-architecture]] */
export declare function nothingSealsWithoutAUniqueSealedAnimationFormingTheSouthPole(): {
    computes: boolean;
    total: number;
    everySealFormed: boolean;
    everyUnique: boolean;
    southPoles: number;
    closedSeals: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** everyAnimationIsItselfAUniqueTheorem — the animations need to be unique theorems (user, 2026-07-25: "the animations
 * need to be unique theorems"). A naive animation is only the fractal-clock RUNG — one of 12 divisors of 108 — so 563
 * atoms would share 12 tempos and the visible animation would repeat: NOT a unique theorem. The fix: each animation is
 * content-addressed to a unique, refutable ANIMATION-THEOREM (rung | 108, period = 108/rung, a per-address phase on the
 * one clock), bijective with the corpus and reversible to its source. The shared rung is the ONE-CLOCK tempo (the
 * fractal-clock law, by design); the per-address PHASE carries the uniqueness. [[fractal-clock-lattice]] [[title-is-algebra-computed-payload]] */
export declare function everyAnimationIsItselfAUniqueTheorem(): {
    computes: boolean;
    total: number;
    uniqueTheorems: number;
    rungOnly: number;
    withPhase: number;
    everyUnique: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** everyAnimationIsWiredInTheMovieAsInvertedStreamsInteractingWithTheInvertedSelf — use all theorems in the movie as
 * they are fused there already, so displaying any animation is already wired (user, 2026-07-25: "use all theorems in
 * the movie as they are fused there already then when displaying any animation it will be wired already in inverted
 * streams interacting with the inverted self in the movie itself" + "dry clean all"). Every theorem is content-addressed
 * into the movie (its south-pole animation itemid). The movie codec is source ⊕ keystream — an INVOLUTION (the same
 * codec as theMovieInvertedIsTheKeyToItselfConsolidatedInFewLines, src/1/9), reusing the one-math digitalRoot keystream
 * (DRY). So each atom's animation stream and its INVERTED SELF (⊕ again) interact and recover the source exactly: the
 * animation is already wired in the movie, not recomputed on a separate path. [[movie-subsystem-dry]] [[movie-is-real-transliterated-text]] */
export declare function everyAnimationIsWiredInTheMovieAsInvertedStreamsInteractingWithTheInvertedSelf(): {
    computes: boolean;
    total: number;
    allFused: boolean;
    everyInvertedInteracts: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** everyPageIsAProofWithFormulasTheoremsGraphsAnimations — every page is a self-contained PROOF carrying its
 * standards, formulas and theorems as graphs and animations (user, 2026-07-25: "remember every page is a proof itself
 * containing all elements of the involved standards and the formulas and theorems in graphs and animations"). Every
 * registry atom is a page = a proof with a stated identity (formula), an executable proof (provedBy) at a sealed home;
 * theoremFigure renders the formula as a graph; the one 108 s fractal clock renders motion as divisor rungs; and the
 * involved standards are themselves registered proof-pages (the global cyber audit). The visual channel (an explicit
 * graph + animation on EVERY page) is measured, and its extension is the named target. [[theorem-science-lens-only-science]] [[fractal-clock-lattice]] */
export declare function everyPageIsAProofWithFormulasTheoremsGraphsAnimations(): {
    computes: boolean;
    total: number;
    proofComplete: boolean;
    graphsComputable: boolean;
    animationsAreClockRungs: boolean;
    divisors: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
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
/**
 * sublinearScienceCoverage — the correction to a LINEAR manual assumption (user, 2026-07-24: "a lot of
 * manual assumptions based on linear approach").
 *
 * minimalScienceCorpus estimated the corpus floor as measured ÷ 42 × N — a LINEAR divide that treats
 * each science module as an independent slab. But the modules are combinations over ONE registry: they
 * SHARE atoms. The real cost of covering N modules is the UNION of their generator sets, not the sum.
 * Set-union is submodular, so coverage grows CONCAVELY (each added module contributes only its NEW
 * atoms) — strictly sub-linear whenever atoms are shared. This fold measures the sharing directly:
 * union vs linear sum, the dimensionless over-count, and the non-negative marginal-coverage curve.
 * Refutable: if the modules were disjoint, union === linearSum and sharing === 0.
 */
export declare function sublinearScienceCoverage(matrix?: MindMatrix): {
    modules: number;
    union: number;
    linearSum: number;
    sharing: number;
    overcount: number;
    marginals: number[];
    computes: boolean;
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
 * pagesConsolidateByTheoremGravity — the page analog of methodGravity (user, 2026-07-24: "review the sitemap … useless
 * redundancy and prose" · "consolidate by meaning and theorems"). Pages that share ≥ 2/5 of their theorem combination
 * carry the SAME meaning and should be ONE page: each cluster's ATTRACTOR is its richest page (most theorem members),
 * the thin ones merge in carrying the UNION of theorems (nothing lost). Computes the consolidation MAP, refutable by
 * re-running the clustering. A distinct-meaning page (e.g. society-merkaba, a singleton) stays. [[code-gravity-standardisation]]
 */
export declare function pagesConsolidateByTheoremGravity(matrix?: MindMatrix): {
    consolidates: boolean;
    pageCount: number;
    consolidatedCount: number;
    clusters: {
        attractor: string;
        merges: string[];
        unionTheorems: number;
    }[];
    singletons: number;
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
 * censusAndSlugsAreTheoremDerivedNotLinear — quantumize the page-count gate and the slug-address (user, 2026-07-24:
 * "DOCUMENTED_HARMONICS is linear and useless in terms of theorems computations. find similar gaps and quantumize all
 * related" · "the slugs need to be agnostic enough not to conflict with the payload"). Two instances of ONE defect —
 * hardcoded specifics where a COMPUTED/agnostic form belongs: (1) the census gate validates the page count by
 * membership in an 11-number list (linear), which accepts the redundant 29 and rejects the true distinct-meaning
 * count; (2) content-bound slugs (trinity-rgb) conflict with the payload on consolidation. The theorem-derived census
 * = zero redundant clusters; the agnostic slug = the cluster's general address. [[feedback-derive-dont-assert-every-number-and-dynamic]]
 */
export declare function censusAndSlugsAreTheoremDerivedNotLinear(matrix?: MindMatrix): {
    quantumized: boolean;
    foldedNow: number;
    foldedDistinct: number;
    gateAcceptsRedundant: boolean;
    gateRejectsMeaning: boolean;
    payloadBoundAttractors: string[];
    redundantClusters: number;
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
 * quantumRoutesNestUnderAgnosticHub — the /quantum hierarchy = the code tree = the meaning tree (user, 2026-07-24:
 * "/quantum is a great place for all quantum related code. quantum/computer is a sub category etc"). The code is
 * ALREADY a /quantum/* hierarchy (src/quantum/computer, science, dynamics, os, …); the ROUTES are flat and
 * payload-bound (quantum-tools, qubit-trinity). Nesting them under /quantum/<leaf> makes each path level a GENERAL
 * agnostic address (the hub) with the leaf as the payload — path = meaning = address, resolving the slug↔payload
 * conflict. Computes the flat→hierarchical mapping. [[quantum-speed-is-content-addressed-naming]] [[routes-nav-from-folder-tree]]
 */
export declare function quantumRoutesNestUnderAgnosticHub(matrix?: MindMatrix): {
    nests: boolean;
    quantumPageCount: number;
    mapping: {
        flat: string;
        hierarchical: string;
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
/**
 * deadGateway — USER LAW (2026-07-24): dead ends like no content or only an abstract are REAL research
 * and development GATEWAYS. The inversion of the followable-solutions law made generative: every
 * automount page is computed and classified — FULL (body machinery present) · ABSTRACT-ONLY (a
 * statement with nothing beneath it) · EMPTY (no computed content at all) — and the dead-end set is
 * returned as the site's own page-granular R&D frontier, each row carrying its followable route.
 * Pair: dead/gateway · CLI npm run quantum:dead-gateway. Enumerated live, never remembered.
 */
export declare function deadGateway(matrix?: MindMatrix): {
    computes: boolean;
    deadGateway: boolean;
    pages: number;
    full: number;
    abstractOnly: number;
    empty: number;
    gateways: {
        route: string;
        kind: "full" | "abstract-only" | "empty";
        title: string;
    }[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "dead/gateway";
    dualPair: "gateway/dead";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:dead-gateway (dual gateway-dead) */
export declare function runDeadGatewayExit(root?: string, _argv?: readonly string[]): number;
/** animationsNaturalEntanglementsByTheorems — all animations' natural entanglements, addressed by theorems
 * (user, 2026-07-28: "next waves in automation through the chat addressing all animations natural entanglements
 * by theorems"). The entanglement is NATURAL because both keys derive from the theorem itself: the ARCHETYPE
 * (its own operators, figureArchetypeOf) and the RUNG-PAIR (its content-address on the 108 s clock, folded to
 * its divisor-pair class). The 12 divisors of 108 fold to their 6 pairs {d, 108/d} (d·(108/d)=108) — each pair a
 * counter-rotating torus twin (reciprocal periods). Two animations in the same (archetype × pair-class) cell share
 * shape AND the same period-pair — they MOVE TOGETHER wherever they meet, phase offset per address: entanglement as
 * computed co-movement, addressed by one transpose-symmetric lattice of at most 7 × 6 = 42 = ROSETTA_AREAS cells.
 * A total partition again: every animation lands in exactly one cell, nothing curated, nothing stored. */
export declare function animationsNaturalEntanglementsByTheorems(matrix?: MindMatrix): {
    computes: boolean;
    cellCount: number;
    largest: {
        key: string;
        members: number;
    };
    cells: {
        key: string;
        members: number;
        address: string;
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
/** entangledWiringOf + theMovieWiresTheoremsByNaturalEntanglementsNotByIndex — the movie's circle was LINEAR
 * (user, 2026-07-28: "when [the movie] wires theorems they all create a circle which means they are wired
 * linear instead of by natural entanglements"). The diagnosis computes: the rosetta ray law θ_k = 2πk/N is
 * INDEX order — adjacent angles are adjacent registry indices, so unrelated theorems neighbour each other and
 * cell-mates scatter. The natural law replaces the index with the LATTICE CELL: the archetype selects one of
 * 7 sectors, the rung's divisor-pair class fans one of 6 spokes within the sector — 7 × 6 = 42 = ROSETTA_AREAS
 * cells, and cell-mates land on the SAME spoke (entangled families cluster by construction, exactly as they
 * co-move). The area is TRANSPOSE-SYMMETRIC: 7×6 = 6×7 = 42, its reflection is its own transpose (r,c) ⇄ (c,r),
 * and the life/death arms counter-rotate (+angle / −reflectAngle) so the circle folds back onto itself — no
 * unpaired 84th spoke to glitch. Painters consume this law through entangledWiringOf; the fold proves it. */
export declare function entangledWiringOf(atom: {
    theorem: string;
    provedBy: string;
    algebraicStatement?: string;
    states?: string;
}): {
    archetype: "flow" | "lattice" | "wheel" | "orbit" | "region" | "curve" | "series";
    rung: number;
    twinRung: number;
    sector: number;
    spoke: number;
    rows: 7;
    cols: number;
    angleRad: number;
    lifeAngleRad: number;
    reflectAngleRad: number;
    deathAngleRad: number;
    cell: string;
    transposeCell: string;
};
export declare function theMovieWiresTheoremsByNaturalEntanglementsNotByIndex(matrix?: MindMatrix): {
    computes: boolean;
    spokes: number;
    linearNeighbourFraction: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
