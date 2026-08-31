export { SOURCE_REPO, AUTHOR_HANDLE } from '../../3/7';
import type { ConceptSiteSection, MindMatrix, StaticPage } from '../../types';
import { type LocaleName } from '../../1/9';
/** Site domains — one canonical page per concern, shelved onto the seven rosetta rays. Pair: site/consolidate. */
export declare const SITE_DOMAIN_SEED: readonly [{
    readonly id: "tools";
    readonly labelEn: "Quantum tools";
    readonly labelBg: "Квантови инструменти";
    readonly ray: 4;
    readonly hub: "apps";
    readonly canonical: "quantum-tools";
    readonly aliases: readonly ["efficiency-vote", "offender-spec", "hero-spawn-verify", "name-entropy-verify", "fusion-verify"];
}, {
    readonly id: "trading";
    readonly labelEn: "Trading";
    readonly labelBg: "Търговия";
    readonly ray: 4;
    readonly hub: "apps";
    readonly canonical: "quantum-trading-hub";
    readonly aliases: readonly [];
}, {
    readonly id: "encryption";
    readonly labelEn: "Encryption";
    readonly labelBg: "Криптиране";
    readonly ray: 5;
    readonly hub: "frontier";
    readonly canonical: "encryption";
    readonly aliases: readonly ["quantum-encryption"];
}, {
    readonly id: "theorems";
    readonly labelEn: "Theorem registry";
    readonly labelBg: "Теоремен регистър";
    readonly ray: 5;
    readonly hub: "frontier";
    readonly canonical: "frontiers";
    readonly aliases: readonly [];
}, {
    readonly id: "research";
    readonly labelEn: "Research";
    readonly labelBg: "Изследвания";
    readonly ray: 2;
    readonly hub: "explore";
    readonly canonical: "research";
    readonly aliases: readonly ["millennium-challenge"];
}, {
    readonly id: "learn";
    readonly labelEn: "Learn";
    readonly labelBg: "Обучение";
    readonly ray: 3;
    readonly hub: "learn";
    readonly canonical: "learn";
    readonly aliases: readonly ["learn-developer", "academy", "school"];
}, {
    readonly id: "society";
    readonly labelEn: "Society";
    readonly labelBg: "Общество";
    readonly ray: 0;
    readonly hub: "origin";
    readonly canonical: "society-merkaba";
    readonly aliases: readonly [];
}];
export type SiteDomainId = (typeof SITE_DOMAIN_SEED)[number]['id'];
/** Catch-all thin mounts only — nav-hidden tool leaves stay as seed pages (genus-2 fold ∈ DOCUMENTED_HARMONICS) but omit from dropdowns. */
export declare const ROUTE_ALIASES: Record<string, string>;
export declare function googleSuggestUrl(q: string): string;
export declare function wikipediaOpenSearchUrl(q: string): string;
export declare function wikimediaPageviewsUrl(article: string): string;
export declare function duckDuckGoInstantUrl(q: string): string;
export type SearchInterestRequest = {
    source: string;
    url: string;
    auth: 'none';
    gives: string;
};
/** The opt-in request set for one term — pure URLs, no fetch here (the caller does the fetch at the edge). */
export declare function searchInterestRequests(term: string): SearchInterestRequest[];
/** OPT-IN edge fetch — returns live suggestions ONLY when a fetch impl is passed; [] otherwise (no build-time network). */
export declare function fetchSearchSuggestions(term: string, fetchImpl?: typeof fetch): Promise<string[]>;
/** renameToMostSearchedTermsWiredToPublicSearchApis — rename each covered area to its most-searched term, wired to
 * public search APIs (user, 2026-07-25: "rename all needed to match most searched in the areas covered" · "wire to
 * public search apis and use to improve"). The searched term is either the live top suggestion from the opt-in
 * public-API adapter (Google Suggest / Wikipedia / Wikimedia / DuckDuckGo — no key, no build-time fetch) or the named
 * lexicon fallback; the deterministic core computes the rename map and keeps every old slug as an alias→new canonical
 * (ROUTE_ALIASES mechanism), so no link dies. Mass public-route execution stays deliberate. */
export declare function renameToMostSearchedTermsWiredToPublicSearchApis(liveSuggestions?: Record<string, string[]>): {
    computes: boolean;
    rows: {
        area: string;
        current: string;
        searched: string;
        source: string;
        needsRename: boolean;
        alias: {
            [x: string]: string;
        };
        receipt: string;
    }[];
    needed: {
        area: string;
        current: string;
        searched: string;
        source: string;
        needsRename: boolean;
        alias: {
            [x: string]: string;
        };
        receipt: string;
    }[];
    neededCount: number;
    requests: SearchInterestRequest[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** egressSecurityForQuantumEncryptionOverHttps — egress security for quantum encryption over any HTTP(S) (user,
 * 2026-07-25: "egress security is important for quantum encryption over any http(s)"). The strongest protection is NO
 * egress (the private core sends nothing); when the user opts into an external call it is HTTPS-only (TLS in transit).
 * HONEST: a public search API must READ the query, so HTTPS protects it in transit but the third-party endpoint sees
 * it — quantum (4-key) encryption cannot hide a query the endpoint must process. The 4-key encryption protects the
 * app's OWN payloads (ciphertext over https, keys derived client-side and never sent). [[tampering-cost-crypto-honesty]] */
export declare function egressSecurityForQuantumEncryptionOverHttps(): {
    computes: boolean;
    httpsOnly: boolean;
    keysNeverSent: boolean;
    requestCount: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** decodeStandardsIntoUiImprovementWaves — decode the standards into UI improvement waves (user, 2026-07-25: "decode
 * the standards in ui improvement waves"). Each standard's UI-relevant requirement decodes to a concrete UI change
 * (accessibility, privacy-by-design, social cards, structured data, security indicators, performance), delivered as an
 * ordered wave, and measured (the DRY metric + the animation gate) — not subjective. Privacy-by-design is already met
 * by construction (no egress). [[ui-presentation-harmonic-dissolution]] [[iching-leads-ui]] */
export declare function decodeStandardsIntoUiImprovementWaves(matrix?: MindMatrix): {
    computes: boolean;
    uiWaves: {
        address: string;
        standard: string;
        uiImprovement: string;
        wave: number;
        met: boolean;
    }[];
    waveCount: number;
    metCount: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** dryCleanVitepressComputedByMetrics — the VitePress DRY state is a MEASURED metric, not asserted (user, 2026-07-25:
 * "dry clean vitepress computed by metrics"). The DRY ratio is single-source means / total; at 100% no VitePress
 * mechanism has a duplicated source, so a change in src regenerates every surface once. Computed and deterministic:
 * a regression (a duplicated source) drops the metric and is caught, and the surface also passes the animation gate. */
export declare function dryCleanVitepressComputedByMetrics(matrix?: MindMatrix): {
    computes: boolean;
    dryRatio: number;
    singleSource: number;
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
/** wireDryInVitepressWithAllMeansPossible — wire DRY into VitePress using every mechanism it offers (user, 2026-07-25:
 * "wire dry in vitepress with all means possible"). Each VitePress means — themeConfig nav/sidebar, dynamic-route
 * paths, the computed home body, transformPageData (frontmatter · hero · SEO · JSON-LD), local search, heading anchors,
 * and shared layout/components — consumes ONE src source through the OFFICIAL VitePress API, so a change in src
 * regenerates every surface once with no duplicated config and no DOM scrape. [[feedback-do-not-bypass-vitepress-api]] [[content-in-site-srcdir]] */
export declare function wireDryInVitepressWithAllMeansPossible(matrix?: MindMatrix): {
    computes: boolean;
    means: {
        mechanism: string;
        source: string;
        native: boolean;
        computes: boolean;
    }[];
    meansCount: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** quantumPredictedUserExperienceMeasuredAnalysedAccountedOptimised — predict the user experience, measure it,
 * statistically analyse, account, and optimise (user, 2026-07-25: "quantum predicted user experience measured and
 * statistically analysed accounted and optimised"). The deterministic model PREDICTS what the user will see (the
 * BM25-ranked results), the metrics are MEASURED client-side (no egress), STATISTICS are computed (mean μ and spread σ
 * of the top scores, grounded ratio), the metrics ACCOUNT to one content-addressed ledger receipt, and the
 * OPTIMISATION is measured (relevance feedback lifts a chosen result). All client-side and deterministic — not
 * real-user telemetry. [[realtime-live-data-testing]] [[searchImprovesByExperiencePrivateRelevanceFeedback]] */
export declare function quantumPredictedUserExperienceMeasuredAnalysedAccountedOptimised(query?: string, matrix?: MindMatrix): {
    computes: boolean;
    predictedResults: number;
    statistics: {
        mean: number;
        std: number;
        groundedRatio: number;
    };
    ledger: string;
    optimised: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** navigationFromSearchResultsAndReferrer — navigation IS the search results plus the referrer (user, 2026-07-25:
 * "navigation is based on the search results themselves and the referrer"). The outgoing edges of a node are the
 * BM25-ranked search results for its query (you navigate by relevance, not a hand-built menu), and the incoming edge
 * is the referrer; the (referrer, query) pair content-addresses the nav state. One index drives both search and
 * navigation — no second topology. Deterministic and private. [[routes-nav-from-folder-tree]] */
export declare function navigationFromSearchResultsAndReferrer(referrer?: string, query?: string): {
    computes: boolean;
    referrer: string;
    query: string;
    edges: {
        slug: string;
        title: string;
        provedBy: string;
        identity: string;
        score: number;
    }[];
    superposition: string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** quantumSearchFusesAllAsPrivateSearchEngine — the UI fuses everything into ONE quantum search: a PRIVATE search
 * engine and a lot more (user, 2026-07-25: "fuse all in quantum search" · "the ui can serve as private search engine
 * and a lot more if you imagine all chat capabilities"). One query fuses the private internal retrieval (content-
 * addressed corpus, deterministic, no egress), the navigation (related discoveries), all chat capabilities (answer ·
 * recall · navigate · self-develop · developed-answer), the canonical most-searched term, and the OPT-IN public search
 * APIs — internal + external + navigation + SEO in one surface. Private by construction; the external edge is opt-in. */
export declare function quantumSearchFusesAllAsPrivateSearchEngine(query?: string, matrix?: MindMatrix): {
    fuses: boolean;
    query: string;
    answer: string;
    results: {
        slug: string;
        title: string;
        provedBy: string;
        identity: string;
        score: number;
    }[];
    resultCount: number;
    related: number;
    capabilities: number;
    externalRequests: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** Domain registry for VitePress nav — canonical pages only; nav aliases filtered; route aliases thin-mount. */
export declare function siteDomainRegistry(matrix?: MindMatrix): {
    computes: boolean;
    domains: ({
        route: string;
        hubRoute: string;
        rayNameEn: "Origin" | "Explore" | "Learn" | "Apps" | "Frontier";
        rayNameBg: "Произход" | "Изследване" | "Обучение" | "Приложения" | "Граници";
        hue: 0 | 102 | 154 | 205 | 257;
        receipt: string;
        id: "tools";
        labelEn: "Quantum tools";
        labelBg: "Квантови инструменти";
        ray: 4;
        hub: "apps";
        canonical: "quantum-tools";
        aliases: readonly ["efficiency-vote", "offender-spec", "hero-spawn-verify", "name-entropy-verify", "fusion-verify"];
    } | {
        route: string;
        hubRoute: string;
        rayNameEn: "Origin" | "Explore" | "Learn" | "Apps" | "Frontier";
        rayNameBg: "Произход" | "Изследване" | "Обучение" | "Приложения" | "Граници";
        hue: 0 | 102 | 154 | 205 | 257;
        receipt: string;
        id: "trading";
        labelEn: "Trading";
        labelBg: "Търговия";
        ray: 4;
        hub: "apps";
        canonical: "quantum-trading-hub";
        aliases: readonly [];
    } | {
        route: string;
        hubRoute: string;
        rayNameEn: "Origin" | "Explore" | "Learn" | "Apps" | "Frontier";
        rayNameBg: "Произход" | "Изследване" | "Обучение" | "Приложения" | "Граници";
        hue: 0 | 102 | 154 | 205 | 257;
        receipt: string;
        id: "encryption";
        labelEn: "Encryption";
        labelBg: "Криптиране";
        ray: 5;
        hub: "frontier";
        canonical: "encryption";
        aliases: readonly ["quantum-encryption"];
    } | {
        route: string;
        hubRoute: string;
        rayNameEn: "Origin" | "Explore" | "Learn" | "Apps" | "Frontier";
        rayNameBg: "Произход" | "Изследване" | "Обучение" | "Приложения" | "Граници";
        hue: 0 | 102 | 154 | 205 | 257;
        receipt: string;
        id: "theorems";
        labelEn: "Theorem registry";
        labelBg: "Теоремен регистър";
        ray: 5;
        hub: "frontier";
        canonical: "frontiers";
        aliases: readonly [];
    } | {
        route: string;
        hubRoute: string;
        rayNameEn: "Origin" | "Explore" | "Learn" | "Apps" | "Frontier";
        rayNameBg: "Произход" | "Изследване" | "Обучение" | "Приложения" | "Граници";
        hue: 0 | 102 | 154 | 205 | 257;
        receipt: string;
        id: "research";
        labelEn: "Research";
        labelBg: "Изследвания";
        ray: 2;
        hub: "explore";
        canonical: "research";
        aliases: readonly ["millennium-challenge"];
    } | {
        route: string;
        hubRoute: string;
        rayNameEn: "Origin" | "Explore" | "Learn" | "Apps" | "Frontier";
        rayNameBg: "Произход" | "Изследване" | "Обучение" | "Приложения" | "Граници";
        hue: 0 | 102 | 154 | 205 | 257;
        receipt: string;
        id: "learn";
        labelEn: "Learn";
        labelBg: "Обучение";
        ray: 3;
        hub: "learn";
        canonical: "learn";
        aliases: readonly ["learn-developer", "academy", "school"];
    } | {
        route: string;
        hubRoute: string;
        rayNameEn: "Origin" | "Explore" | "Learn" | "Apps" | "Frontier";
        rayNameBg: "Произход" | "Изследване" | "Обучение" | "Приложения" | "Граници";
        hue: 0 | 102 | 154 | 205 | 257;
        receipt: string;
        id: "society";
        labelEn: "Society";
        labelBg: "Общество";
        ray: 0;
        hub: "origin";
        canonical: "society-merkaba";
        aliases: readonly [];
    })[];
    aliasToCanonical: {
        [k: string]: string;
    };
    aliasCount: number;
    navSlugs: Set<"learn" | "research" | "frontiers" | "quantum-tools" | "quantum-trading-hub" | "encryption" | "society-merkaba">;
    isNavAlias: (slug: string) => boolean;
    canonicalOf: (slug: string) => string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** VitePress sidebar sections from the sealed domain registry — one section per domain; aliases → canonical anchors. Pair: dry/clean · site/consolidate. */
export declare function domainSidebarFromRegistry(locale?: 0 | 1, matrix?: MindMatrix): {
    computes: boolean;
    sections: {
        domainId: "learn" | "research" | "society" | "theorems" | "tools" | "trading" | "encryption";
        canonical: "learn" | "research" | "frontiers" | "quantum-tools" | "quantum-trading-hub" | "encryption" | "society-merkaba";
        route: string;
        text: "Learn" | "Обучение" | "Society" | "Theorem registry" | "Quantum tools" | "Квантови инструменти" | "Trading" | "Търговия" | "Encryption" | "Криптиране" | "Теоремен регистър" | "Research" | "Изследвания" | "Общество";
        items: {
            text: string;
            link: string;
        }[];
        receipt: string;
    }[];
    byCanonical: {
        [k: string]: {
            domainId: "learn" | "research" | "society" | "theorems" | "tools" | "trading" | "encryption";
            canonical: "learn" | "research" | "frontiers" | "quantum-tools" | "quantum-trading-hub" | "encryption" | "society-merkaba";
            route: string;
            text: "Learn" | "Обучение" | "Society" | "Theorem registry" | "Quantum tools" | "Квантови инструменти" | "Trading" | "Търговия" | "Encryption" | "Криптиране" | "Теоремен регистър" | "Research" | "Изследвания" | "Общество";
            items: {
                text: string;
                link: string;
            }[];
            receipt: string;
        };
    };
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: string;
    statement: string;
    boundary: string;
};
/** Merge domain-registry sidebars into a VitePress path map — aliases omitted; learn/canonical always covered. */
export declare function applyDomainRegistrySidebars(relatedSidebar: Record<string, {
    text: string;
    items: {
        text: string;
        link: string;
    }[];
}[]>, main: {
    text: string;
    link?: string;
    items?: {
        text: string;
        link?: string;
    }[];
    collapsed?: boolean;
}[], portalLabel: string, locale?: 0 | 1, matrix?: MindMatrix): {
    out: Record<string, {
        text: string;
        link?: string;
        items?: {
            text: string;
            link?: string;
        }[];
        collapsed?: boolean;
    }[]>;
    aliasKeysPurged: boolean;
    domainKeysPresent: boolean;
    computes: boolean;
    root: string;
};
/**
 * Dry-clean VitePress nav/sidebars wave — purge alias discovery keys; sidebars from domain registry.
 * Pair: dry/clean · site/consolidate · Wave 1 of dry-clean refactor waves.
 */
export declare function dryCleanVitepressNavSidebarsFromDomainRegistry(matrix?: MindMatrix): {
    computes: boolean;
    before: {
        nav: string;
        sidebar: string;
    };
    after: {
        nav: string;
        sidebar: string;
    };
    aliasPurged: number;
    domainSidebarCount: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: string;
    statement: string;
    boundary: string;
};
/**
 * Content/site folders waved for migration + dedup — gapless census.
 * Locales · corpus mounts · seven domain canonicals · seven rosetta hubs.
 * Pair: folder/migrate · compose dry/clean · siteDomainRegistry · #61 hierarchy.
 */
export declare const CONTENT_FOLDER_WAVE_SEED: readonly [{
    readonly id: "pages-root";
    readonly path: ".vitepress/pages";
    readonly role: "en-root locale mounts";
    readonly kind: "locale";
    readonly emitter: "staticPages+computed-pages";
    readonly domainId: any;
}, {
    readonly id: "pages-bg";
    readonly path: ".vitepress/pages/bg";
    readonly role: "bg locale";
    readonly kind: "locale";
    readonly emitter: "localePath+bulgarianFromEnglish";
    readonly domainId: any;
}, {
    readonly id: "pages-gla";
    readonly path: ".vitepress/pages/gla";
    readonly role: "gla locale";
    readonly kind: "locale";
    readonly emitter: "toGlagolitic";
    readonly domainId: any;
}, {
    readonly id: "proofs";
    readonly path: ".vitepress/pages/proofs";
    readonly role: "Clay domain proofs";
    readonly kind: "corpus";
    readonly emitter: "domainProofCatalog";
    readonly domainId: SiteDomainId | null;
}, {
    readonly id: "theorems";
    readonly path: ".vitepress/pages/theorems";
    readonly role: "machine tag index";
    readonly kind: "corpus";
    readonly emitter: "theoremRosettaSidebar";
    readonly domainId: SiteDomainId | null;
}, {
    readonly id: "papers";
    readonly path: ".vitepress/pages/papers";
    readonly role: "machine papers REST";
    readonly kind: "corpus";
    readonly emitter: "papers()";
    readonly domainId: any;
}, {
    readonly id: "references";
    readonly path: ".vitepress/pages/references";
    readonly role: "machine references REST";
    readonly kind: "corpus";
    readonly emitter: "references";
    readonly domainId: any;
}, {
    readonly id: "diamonds";
    readonly path: ".vitepress/pages/diamonds";
    readonly role: "machine diamonds REST";
    readonly kind: "corpus";
    readonly emitter: "diamondLattice";
    readonly domainId: any;
}, {
    readonly id: "model";
    readonly path: ".vitepress/pages/model";
    readonly role: "model cards";
    readonly kind: "corpus";
    readonly emitter: "ModelCardPages";
    readonly domainId: any;
}, {
    readonly id: "domain-tools";
    readonly path: "/quantum-tools";
    readonly role: "tools canonical";
    readonly kind: "domain";
    readonly emitter: "siteDomainRegistry";
    readonly domainId: SiteDomainId;
}, {
    readonly id: "domain-trading";
    readonly path: "/quantum-trading-hub";
    readonly role: "trading canonical";
    readonly kind: "domain";
    readonly emitter: "siteDomainRegistry";
    readonly domainId: SiteDomainId;
}, {
    readonly id: "domain-encryption";
    readonly path: "/encryption";
    readonly role: "encryption canonical";
    readonly kind: "domain";
    readonly emitter: "siteDomainRegistry";
    readonly domainId: SiteDomainId;
}, {
    readonly id: "domain-theorems";
    readonly path: "/frontiers";
    readonly role: "theorem registry canonical";
    readonly kind: "domain";
    readonly emitter: "siteDomainRegistry";
    readonly domainId: SiteDomainId;
}, {
    readonly id: "domain-research";
    readonly path: "/research";
    readonly role: "research canonical";
    readonly kind: "domain";
    readonly emitter: "siteDomainRegistry";
    readonly domainId: SiteDomainId;
}, {
    readonly id: "domain-learn";
    readonly path: "/learn";
    readonly role: "learn canonical";
    readonly kind: "domain";
    readonly emitter: "siteDomainRegistry";
    readonly domainId: SiteDomainId;
}, {
    readonly id: "domain-society";
    readonly path: "/society-merkaba";
    readonly role: "society canonical";
    readonly kind: "domain";
    readonly emitter: "siteDomainRegistry";
    readonly domainId: SiteDomainId;
}, {
    readonly id: "hub-origin";
    readonly path: "/origin";
    readonly role: "rosetta ray hub";
    readonly kind: "hub";
    readonly emitter: "sciencePortalParts";
    readonly domainId: any;
}, {
    readonly id: "hub-proof";
    readonly path: "/proof";
    readonly role: "rosetta ray hub";
    readonly kind: "hub";
    readonly emitter: "sciencePortalParts";
    readonly domainId: any;
}, {
    readonly id: "hub-explore";
    readonly path: "/explore";
    readonly role: "rosetta ray hub";
    readonly kind: "hub";
    readonly emitter: "sciencePortalParts";
    readonly domainId: any;
}, {
    readonly id: "hub-learn";
    readonly path: "/learn";
    readonly role: "rosetta ray hub (learn ray)";
    readonly kind: "hub";
    readonly emitter: "sciencePortalParts";
    readonly domainId: SiteDomainId | null;
}, {
    readonly id: "hub-apps";
    readonly path: "/apps";
    readonly role: "rosetta ray hub";
    readonly kind: "hub";
    readonly emitter: "sciencePortalParts";
    readonly domainId: any;
}, {
    readonly id: "hub-frontier";
    readonly path: "/frontier";
    readonly role: "rosetta ray hub";
    readonly kind: "hub";
    readonly emitter: "sciencePortalParts";
    readonly domainId: any;
}, {
    readonly id: "hub-reference";
    readonly path: "/reference";
    readonly role: "rosetta ray hub";
    readonly kind: "hub";
    readonly emitter: "sciencePortalParts";
    readonly domainId: any;
}];
export type ContentFolderWaveId = (typeof CONTENT_FOLDER_WAVE_SEED)[number]['id'];
export type ContentFolderWaveStatus = 'migrated' | 'partial' | 'residual';
/**
 * Coordinated folder waves — migration to single-source catalog + dedup + #61 route hierarchy.
 * Per-folder status facets; gapless census of folders touched. Pair: folder/migrate.
 * Phase B nav/sidebar coherence is consumed via dryClean + domain registry (vitepressSidebar composes).
 */
export declare function folderMigrationDedupWaves(matrix?: MindMatrix): {
    computes: boolean;
    folderCount: 23;
    migratedCount: number;
    partialCount: number;
    residualCount: number;
    gaplessCensus: boolean;
    folders: {
        id: "papers" | "references" | "diamonds" | "model" | "theorems" | "proofs" | "pages-root" | "pages-bg" | "pages-gla" | "domain-tools" | "domain-trading" | "domain-encryption" | "domain-theorems" | "domain-research" | "domain-learn" | "domain-society" | "hub-origin" | "hub-proof" | "hub-explore" | "hub-learn" | "hub-apps" | "hub-frontier" | "hub-reference";
        path: "/frontiers" | "/learn" | "/explore" | ".vitepress/pages" | ".vitepress/pages/bg" | ".vitepress/pages/gla" | ".vitepress/pages/proofs" | ".vitepress/pages/theorems" | ".vitepress/pages/papers" | ".vitepress/pages/references" | ".vitepress/pages/diamonds" | ".vitepress/pages/model" | "/quantum-tools" | "/quantum-trading-hub" | "/encryption" | "/research" | "/society-merkaba" | "/origin" | "/proof" | "/apps" | "/frontier" | "/reference";
        role: "en-root locale mounts" | "bg locale" | "gla locale" | "Clay domain proofs" | "machine tag index" | "machine papers REST" | "machine references REST" | "machine diamonds REST" | "model cards" | "tools canonical" | "trading canonical" | "encryption canonical" | "theorem registry canonical" | "research canonical" | "learn canonical" | "society canonical" | "rosetta ray hub" | "rosetta ray hub (learn ray)";
        kind: "hub" | "domain" | "locale" | "corpus";
        emitter: "references" | "toGlagolitic" | "sciencePortalParts" | "siteDomainRegistry" | "staticPages+computed-pages" | "localePath+bulgarianFromEnglish" | "domainProofCatalog" | "theoremRosettaSidebar" | "papers()" | "diamondLattice" | "ModelCardPages";
        domainId: any;
        status: "partial" | "migrated";
        note: string;
        receipt: string;
        facet: {
            facet: string;
            on: boolean;
        };
    }[];
    kindCounts: {
        locale: number;
        corpus: number;
        domain: number;
        hub: number;
    };
    navBefore: {
        topNav: string;
        sidebar: string;
        content: string;
    };
    navAfter: {
        topNav: string;
        sidebar: string;
        content: string;
    };
    residuals: ("composed-after #68 uiProseDuplicationRemoved — residual Clay Statement=title catalog pattern in staticPages descriptions" | "composed-after #70 mcp-commands-scripts-gaps-audit (MCP/script synonym census landed; residual conceptTools + trading:* outside PRIMARY)" | "thin-mount alias leaves still served (efficiency-vote… · learn-developer) — intentional census fold" | "compose import/distance — importPathShowsDistanceInMigrationMatrix measures compact+even code in the src matrix (npm run quantum:import-path-distance)")[];
    claySolvedByThisFold: 0;
    qpuRequired: false;
    facets: ({
        receipt: string;
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    pair: "folder/migrate";
    cli: string;
    route: string;
    anchor: string;
    heading: string;
    honestyLine: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:folder-migration-waves — print per-folder migration/dedup receipt (exit 0 iff computes). */
export declare function runFolderMigrationDedupWavesExit(_root?: string, _argv?: readonly string[]): number;
export { localePath, localeFromRoute, bulgarianFromEnglish, type LocaleName } from '../../1/9';
export { pickLocale, localizeMonolingual, localizeMonolingual as displayText } from '../../quantum/heaven/library';
export type VitePressLocaleKey = 'root' | 'bg' | 'gla';
export declare function vitepressLocaleLink(localeKey: VitePressLocaleKey): string;
export declare function localePaths(route: string): {
    gla: string;
    en: string;
    bg: string;
};
/** Authored staticPages title pairs — extend sealed offline en→bg corpus (zero network). */
export declare function offlineSiteTitlePhrases(): readonly (readonly [string, string])[];
/** Bulgarian home — computed from the English home body homeMarkdown() (mirror of glagoliticHomeFromEnglish). */
export declare function bulgarianHomeFromEnglish(enMarkdown: string): string;
export declare function localeNavLinks(node: unknown, locale: LocaleName, labelMapper?: (text: string) => string): unknown;
export declare function localeSidebarKeys(sidebar: Record<string, unknown>, locale: LocaleName): Record<string, unknown>;
/** @rosetta ✦₂ · Wind · gentle */
export declare function quantumSitemap(matrix?: MindMatrix): {
    quantum: boolean;
    urls: {
        route: string;
        gla: string;
        en: string;
        bg: string;
        theta: number;
        phi: number;
        alternates: {
            hreflang: string;
            href: string;
        }[];
        priority: number;
        changefreq: string;
        receipt: string;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₂ · Wind · gentle */
export declare function professionals(matrix?: MindMatrix): {
    found: boolean;
    groups: {
        entries: {
            receipt: string;
            profession: string;
            capability: string;
            route: string;
            task: string;
            why: string;
            comparable: string;
        }[];
        group: string;
        icon: string;
    }[];
    entries: {
        receipt: string;
        profession: string;
        capability: string;
        route: string;
        task: string;
        why: string;
        comparable: string;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₂ · Wind · gentle */
/** Dev bind — config.mts uses thin mount `.vitepress/lib/dev-server-bind.mts` (zero src/ imports). */
export declare function vitepressDevServerBind(): {
    host: "127.0.0.1";
    port: number;
    strictPort: boolean;
};
export { clientWorkBoundedByPureMath, corpusGridWorkBudget, CORPUS_GRID_PAGE_SIZE } from '../routes/corpus';
export declare function siteConfig(matrix?: MindMatrix): {
    title: string;
    titleBg: string;
    description: string;
    descriptionBg: string;
    themeColor: string;
    backgroundColor: string;
    robots: string;
    keywords: string[];
    root: string;
    computed: boolean;
};
/**
 * VitePress-native theme/app config emitter — values config.mts must consume (thin mount).
 * Sourced from official VitePress 2.x docs (vitepress.dev guide/reference) for package vitepress@2.0.0-alpha.17.
 * Pair: docs/improve · prefers VP API over custom reinvent.
 */
export declare function vitepressNativeDocsConfig(matrix?: MindMatrix): {
    lastUpdated: true;
    markdown: {
        image: {
            lazyLoading: true;
        };
    };
    theme: {
        logo: string;
        externalLinkIcon: true;
        editLink: {
            pattern: string;
            text: string;
        };
        lastUpdated: {
            text: string;
            formatOptions: {
                dateStyle: "medium";
                timeStyle: "short";
            };
        };
    };
    localeLabels: {
        en: {
            editLinkText: string;
            lastUpdatedText: string;
            skipToContentLabel: string;
        };
        bg: {
            editLinkText: string;
            lastUpdatedText: string;
            skipToContentLabel: string;
        };
        gla: {
            editLinkText: string;
            lastUpdatedText: string;
            skipToContentLabel: string;
        };
    };
    localeLinks: {
        root: "/";
        bg: "/bg/";
        gla: "/gla/";
    };
    root: string;
    computed: true;
    vitepressVersionTarget: string;
};
/**
 * Deep-research receipt — VitePress docs researched → gaps audited → high-value native improvements applied.
 * Pair: docs/improve · census untouched.
 */
export declare function vitepressDocsResearchImprovements(matrix?: MindMatrix): {
    computes: boolean;
    researched: ("https://vitepress.dev/guide/what-is-vitepress" | "https://vitepress.dev/reference/site-config" | "https://vitepress.dev/reference/default-theme-config" | "https://vitepress.dev/reference/default-theme-search" | "https://vitepress.dev/reference/default-theme-edit-link" | "https://vitepress.dev/reference/runtime-api" | "https://vitepress.dev/guide/markdown" | "https://vitepress.dev/guide/custom-theme" | "https://vitepress.dev/guide/extending-default-theme" | "https://vitepress.dev/guide/i18n")[];
    gaps: ({
        id: "markdown-image-lazy";
        status: "applied";
        detail: "markdown.image.lazyLoading=true (VP default false)";
    } | {
        id: "lastUpdated";
        status: "applied";
        detail: "site lastUpdated + themeConfig.lastUpdated labels";
    } | {
        id: "editLink";
        status: "applied";
        detail: "themeConfig.editLink → GitHub .vitepress/pages/:path";
    } | {
        id: "externalLinkIcon";
        status: "applied";
        detail: "themeConfig.externalLinkIcon=true";
    } | {
        id: "logo";
        status: "applied";
        detail: "themeConfig.logo=/icon.svg (existing asset)";
    } | {
        id: "bg-locale-link";
        status: "applied";
        detail: "fix locales.bg.link = SITE_LOCALES[1].path (was wrongly [2]/gla)";
    } | {
        id: "skipToContentLabel";
        status: "applied";
        detail: "localized skipToContentLabel en/bg";
    } | {
        id: "cleanUrls-search-aside";
        status: "already";
        detail: "cleanUrls + local MiniSearch + aside/outline deep already wired";
    } | {
        id: "carbon-ads";
        status: "skipped";
        detail: "intentionally omitted — no ads";
    } | {
        id: "algolia";
        status: "skipped";
        detail: "local search preferred (offline, zero-network)";
    } | {
        id: "mathjax";
        status: "residual";
        detail: "markdown.math opt-in needs markdown-it-mathjax3 dep — not this wave";
    } | {
        id: "team-pages";
        status: "residual";
        detail: "VP TeamPage components unused — no team roster surface";
    } | {
        id: "view-transitions";
        status: "residual";
        detail: "appearance view-transition demo skipped (fine-touch vs defaults)";
    })[];
    appliedCount: number;
    residualCount: number;
    native: {
        lastUpdated: true;
        markdown: {
            image: {
                lazyLoading: true;
            };
        };
        theme: {
            logo: string;
            externalLinkIcon: true;
            editLink: {
                pattern: string;
                text: string;
            };
            lastUpdated: {
                text: string;
                formatOptions: {
                    dateStyle: "medium";
                    timeStyle: "short";
                };
            };
        };
        localeLabels: {
            en: {
                editLinkText: string;
                lastUpdatedText: string;
                skipToContentLabel: string;
            };
            bg: {
                editLinkText: string;
                lastUpdatedText: string;
                skipToContentLabel: string;
            };
            gla: {
                editLinkText: string;
                lastUpdatedText: string;
                skipToContentLabel: string;
            };
        };
        localeLinks: {
            root: "/";
            bg: "/bg/";
            gla: "/gla/";
        };
        root: string;
        computed: true;
        vitepressVersionTarget: string;
    };
    claySolvedByThisFold: 0;
    physicalFtlClaim: 0;
    qpuRequired: false;
    pair: "docs/improve";
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:vitepress-docs-research — research receipt + native config emitter. */
export declare function runVitepressDocsResearchImprovementsExit(_root?: string, _argv?: readonly string[]): number;
/** PWA manifest — theme/background fuse from the movie palette, not static hex files. */
export declare function computedWebManifest(matrix?: MindMatrix): string;
export interface HomeHeroAction {
    theme: 'brand' | 'alt';
    text: string;
    link: string;
}
export interface HomeHeroFrontmatter {
    name: string;
    text: string;
    tagline: string;
    actions: HomeHeroAction[];
}
/** Computed VitePress home hero — VitePress shows only science (theoremScienceLens): the hero states the
 * registry and the lens roster, and every action lands on a lens-visible surface; injected in transformPageData. */
export declare function homeHero(locale?: LocaleName): HomeHeroFrontmatter;
/** The FULL curated catalog (seed + enrichment) — the lens's domain. Data is preserved here;
 * VitePress never routes from this set directly. */
export declare function staticPagesAll(): StaticPage[];
/** THE SERVED PAGE SET (user law: ONLY science theorems and related pages — remove the rest from
 * VitePress completely). staticPages() IS the theorem-science lens roster: every consumer — routes,
 * automount, sitemap, search, nav, README, MCP served-set — reads THIS, so a page outside the lens has
 * no route, no build, no search entry, no sitemap line. The full catalog stays in staticPagesAll (data,
 * not surface); restoring a page = giving it a science keyword, never re-wiring VitePress. */
export declare function staticPages(): StaticPage[];
export { theoremScienceVisible, THEOREM_SCIENCE_NAME_STEMS } from '../../3/7';
/** THE SERVED-ROUTE LAW (user law: purge old links) — a route is LIVE iff its bare slug is the home,
 * a served science page, a populated ray hub, a corpus surface, or a real file artifact. Every guide,
 * gateway and section map sanitizes through THIS predicate, so no surface can emit a removed link. */
export declare function isServedRoute(route: string): boolean;
export declare function theNavigationIsTheOneCollectionScopedByTheRosettaProportionsAndDynamics(): {
    computes: boolean;
    collectionSize: number;
    populatedRays: number;
    rays: {
        domain: "Origin" | "Proof" | "Explore" | "Learn" | "Apps" | "Frontier" | "Reference";
        pages: number;
        subdomains: number;
    }[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function thePapersCollectionAutoClassifiesEveryPageFieldByMode(): {
    computes: boolean;
    collectionSize: number;
    shelved: number;
    byField: {
        field: "Mathematics" | "Physics" | "Computer & Information Sciences" | "Life Sciences" | "Earth & Space Sciences" | "Humanities" | "Social Sciences";
        pages: number;
    }[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function theoremScienceLens(matrix?: MindMatrix): {
    computes: boolean;
    pages: StaticPage[];
    hidden: string[];
    rays: {
        ray: 0 | 2 | 5 | 4 | 1 | 3 | 6;
        slug: "learn" | "reference" | "proof" | "explore" | "frontier" | "origin" | "apps";
        labelEn: "Origin" | "Proof" | "Explore" | "Learn" | "Apps" | "Frontier" | "Reference";
        labelBg: "Произход" | "Доказателства" | "Изследване" | "Обучение" | "Приложения" | "Граници" | "Справочник";
        pages: {
            slug: string;
            titleEn: string;
            titleBg: string;
        }[];
    }[];
    discoveryRoutes: readonly ["/frontiers", "/proofs"];
    machineRoutes: readonly ["/theorems", "/papers/", "/references", "/diamonds"];
    corpusRoutes: readonly ["/theorems", "/papers/", "/references", "/diamonds"];
    theoremCount: number;
    visibleCount: number;
    pageCount: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function githubPermalink(path: string, line?: number): string;
/** @rosetta ✦₂ · Wind · The Well — the source that serves all freely; you give back what you can, freely.
 *  The author's Revolut is the project's ONE monetisation endpoint AND the channel to contact the author.
 *  Access is free (the price is already paid, AS the architecture — freeBecauseThePriceIsAlreadyPaid), so what
 *  remains is an INVITATION, not a charge: support with a harmonic PART (1/9, the vortex 3-6-9 share — a proper
 *  fraction, never the whole), freely given, zero a valid amount; and the same link reaches the author. The URL
 *  and handle are COMPUTED from the one identity (AUTHOR_HANDLE ← SOURCE_REPO), not hardcoded a second time. */
export declare function revolutChannel(): {
    handle: string;
    url: string;
    purposes: readonly [{
        readonly purpose: "support";
        readonly en: "support the project with a harmonic part of what you gained";
        readonly bg: "подкрепи проекта с хармонична част от постигнатото";
    }, {
        readonly purpose: "contact";
        readonly en: "contact the author through the same link";
        readonly bg: "свържи се с автора през същата връзка";
    }];
    share: string;
    free: boolean;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₂ · Wind · gentle */
export declare function crawlerKnowledge(): {
    topic: string;
    fact: string;
    source: string;
    receipt: string;
}[];
/** @rosetta ✦₂ · Wind · gentle */
export declare function monographTemplate(): {
    sections: string[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare const PROOF_ACKNOWLEDGMENT_SECTIONS: readonly ["Claim", "Prior art", "Novelty", "Contribution", "Reproducibility", "Cite as"];
export type ProofAcknowledgment = {
    theorem: string;
    novelToHumanity: boolean;
    priorArt: string;
    contribution: string;
    reproducedBy: string;
    citation: string;
    line: string;
};
/** Build a proof's acknowledgment in the one saved scientific format. Default is the honest re-derivation:
 * novelToHumanity = false, prior art = the documented original, contribution = the reproducible computation. */
export declare function proofAcknowledgment(spec: {
    theorem: string;
    provedBy: string;
    home: string;
    canonicalUrl: string;
    priorArt?: string;
    novelToHumanity?: boolean;
}): ProofAcknowledgment;
/** The format is saved and honest — self-proving (user: "every proof needs to be acknowledged"). */
export declare function proofAcknowledgmentFormatSaved(): {
    computes: boolean;
    sections: readonly ["Claim", "Prior art", "Novelty", "Contribution", "Reproducibility", "Cite as"];
    example: ProofAcknowledgment;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₂ · Wind · gentle */
export declare function monographAsScientificPaper(page: StaticPage): {
    title: string;
    abstract: string;
    keywords: string[];
    results: string[];
    references: string[];
    receipt: string;
};
export declare function printStylesheet(): string;
export declare function everyPageIsAPrintableScientificPaper(matrix?: MindMatrix): {
    papers: boolean;
    count: number;
    componentResults: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function rest(matrix?: MindMatrix): {
    designed: boolean;
    stable: boolean;
    resources: number;
    models: number;
    collections: number;
    urls: number;
    crud: {
        receipt: string;
        verb: string;
        http: string;
        op: string;
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
export declare function homepage(matrix?: MindMatrix): {
    computed: boolean;
    sections: {
        receipt: string;
        section: string;
        computed: boolean;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function homePageNoDifferent(matrix?: MindMatrix): {
    noDifferent: boolean;
    count: number;
    sameness: {
        receipt: string;
        property: string;
        on: any;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function pageStatusStatistics(matrix?: MindMatrix): {
    shows: boolean;
    statCount: number;
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
/** Per-route forge seal — content-address + max tampering cost wired on every page. */
export type PageForgeSeal = {
    pageRoot: string;
    sealRoot: string;
    maxReached: boolean;
    forgeCostLog2: number;
    forgeCostLabel: string;
    statsLine: string;
    wired: boolean;
};
export declare function pageForgeMaxTamper(route: string, matrix?: MindMatrix): PageForgeSeal;
export declare function proveAllOnHomePage(matrix?: MindMatrix): {
    proven: boolean;
    homeProof: string[];
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
export declare function siteManifestFromCommands(): readonly ConceptSiteSection[];
export declare function theNavigationRebuiltByTopCategoriesThreeColumnByImportanceOgInteractsIn10D(matrix?: MindMatrix): {
    computes: boolean;
    categories: string[];
    layout: {
        left: string;
        main: string;
        right: string;
    };
    dimensions: number;
    emptiesRemoved: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function rosettaRayDistributionMostPagesClassifyToFewRaysSoHubsAreMissing(matrix?: MindMatrix): {
    computes: boolean;
    distribution: string[];
    populated: number;
    empty: ("learn" | "reference" | "proof" | "explore" | "frontier" | "origin" | "apps")[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
