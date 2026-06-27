export { SOURCE_REPO, AUTHOR_HANDLE } from '../../3/7';
import type { ConceptSiteSection, MindMatrix, StaticPage } from '../types';
export type LocaleName = 'gla' | 'en' | 'bg';
export type VitePressLocaleKey = 'root' | 'en' | 'bg';
export declare function vitepressLocaleLink(localeKey: VitePressLocaleKey): string;
export declare function localePath(route: string, locale?: LocaleName): string;
export declare function localePaths(route: string): {
    gla: string;
    en: string;
    bg: string;
};
/** Runtime locale from a VitePress route path — pure; pairs with pickLocale in page scripts. */
export declare function localeFromRoute(path: string): LocaleName;
/** Bilingual pick — en uses Latin source; bg uses Cyrillic; gla transliterates Latin to Glagolitic. */
export declare function pickLocale<T>(locale: LocaleName, en: T, bg: T): T;
/** English → Bulgarian when locale is bg and text has no Cyrillic yet. */
export declare function bulgarianFromEnglish(text: string): string;
/** Bulgarian home — computed from en/index.md (mirror of glagoliticHomeFromEnglish). */
export declare function bulgarianHomeFromEnglish(enMarkdown: string): string;
/** Locale display copy — gla transliterates; bg maps sealed phrases; en passes through. */
export declare function localizeMonolingual(locale: LocaleName, text: string): string;
/** Alias for card/surface display — gla transliteration + bg phrase map. */
export declare const displayText: typeof localizeMonolingual;
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
/** Computed VitePress home hero — rosetta rays + 三才 Three Powers; injected in transformPageData. */
export declare function homeHero(locale?: LocaleName): HomeHeroFrontmatter;
/** @rosetta ✦₂ · Wind · gentle */
export declare function staticPages(): StaticPage[];
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
/** @rosetta ✦₂ · Wind · gentle */
export declare function monographAsScientificPaper(page: StaticPage): {
    title: string;
    abstract: string;
    keywords: string[];
    results: string[];
    references: string[];
    receipt: string;
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
