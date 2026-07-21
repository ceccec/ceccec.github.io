export { SOURCE_REPO, AUTHOR_HANDLE } from '../../3/7';
import type { ConceptSiteSection, MindMatrix, StaticPage } from '../types';
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
    readonly canonical: "quantum-encryption";
    readonly aliases: readonly [];
}, {
    readonly id: "theorems";
    readonly labelEn: "Theorems";
    readonly labelBg: "Теореми";
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
        canonical: "quantum-encryption";
        aliases: readonly [];
    } | {
        route: string;
        hubRoute: string;
        rayNameEn: "Origin" | "Explore" | "Learn" | "Apps" | "Frontier";
        rayNameBg: "Произход" | "Изследване" | "Обучение" | "Приложения" | "Граници";
        hue: 0 | 102 | 154 | 205 | 257;
        receipt: string;
        id: "theorems";
        labelEn: "Theorems";
        labelBg: "Теореми";
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
    navSlugs: Set<"learn" | "research" | "frontiers" | "quantum-tools" | "quantum-trading-hub" | "quantum-encryption" | "society-merkaba">;
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
        canonical: "learn" | "research" | "frontiers" | "quantum-tools" | "quantum-trading-hub" | "quantum-encryption" | "society-merkaba";
        route: string;
        text: "Learn" | "Обучение" | "Society" | "Theorems" | "Quantum tools" | "Квантови инструменти" | "Trading" | "Търговия" | "Encryption" | "Криптиране" | "Теореми" | "Research" | "Изследвания" | "Общество";
        items: {
            text: string;
            link: string;
        }[];
        receipt: string;
    }[];
    byCanonical: {
        [k: string]: {
            domainId: "learn" | "research" | "society" | "theorems" | "tools" | "trading" | "encryption";
            canonical: "learn" | "research" | "frontiers" | "quantum-tools" | "quantum-trading-hub" | "quantum-encryption" | "society-merkaba";
            route: string;
            text: "Learn" | "Обучение" | "Society" | "Theorems" | "Quantum tools" | "Квантови инструменти" | "Trading" | "Търговия" | "Encryption" | "Криптиране" | "Теореми" | "Research" | "Изследвания" | "Общество";
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
export { localePath, localeFromRoute, bulgarianFromEnglish, type LocaleName } from '../../1/9';
export { pickLocale, localizeMonolingual, localizeMonolingual as displayText } from '../../quantum/heaven/library';
export type VitePressLocaleKey = 'root' | 'bg' | 'gla';
export declare function vitepressLocaleLink(localeKey: VitePressLocaleKey): string;
export declare function localePaths(route: string): {
    gla: string;
    en: string;
    bg: string;
};
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
        ray: 0 | 5 | 2 | 4 | 1 | 3 | 6;
        slug: "learn" | "reference" | "proof" | "explore" | "frontier" | "origin" | "apps";
        labelEn: "Origin" | "Proof" | "Explore" | "Learn" | "Apps" | "Frontier" | "Reference";
        labelBg: "Произход" | "Доказателства" | "Изследване" | "Обучение" | "Приложения" | "Граници" | "Справочник";
        pages: {
            slug: string;
            titleEn: string;
            titleBg: string;
        }[];
    }[];
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
