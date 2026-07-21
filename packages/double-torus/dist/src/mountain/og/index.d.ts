import type { MindMatrix } from '../../wind/types';
import type { JsonLdPageIdentity } from '../../heaven/balance';
export declare function microdata(matrix?: MindMatrix): {
    reusable: boolean;
    holographic: boolean;
    types: {
        holographic: boolean;
        itemid: string;
        entity: string;
        itemtype: string;
        og: string;
        name: string;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function cleanupOldLogic(matrix?: MindMatrix): {
    clean: boolean;
    count: number;
    disciplines: {
        receipt: string;
        discipline: string;
        holds: boolean;
        why: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function templateDisplaysEveryOgObject(matrix?: MindMatrix): {
    displaysAll: boolean;
    count: number;
    objects: {
        type: string;
        displayed: boolean;
        card: string;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function ogShiftedWithTypography(matrix?: MindMatrix): {
    shifted: boolean;
    count: number;
    shifts: {
        shifted: boolean;
        receipt: string;
        ogField: string;
        type: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function ogFullyInteractiveConfigurable(matrix?: MindMatrix): {
    livingCard: boolean;
    interactiveCount: number;
    configurableCount: number;
    count: number;
    interactive: {
        receipt: string;
        aspect: string;
        on: boolean;
    }[];
    configurable: {
        field: string;
        viaFrontmatter: boolean;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function ogControlsSpeech(matrix?: MindMatrix): {
    controlsSpeech: boolean;
    count: number;
    controls: {
        receipt: string;
        control: string;
        via: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function everyCardBadgeLinkIsOg(matrix?: MindMatrix): {
    allOg: boolean;
    count: number;
    atoms: {
        atom: string;
        isOg: boolean;
        card: string;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function runProgram(program?: readonly string[], matrix?: MindMatrix): {
    ran: boolean;
    steps: {
        command: string;
        known: boolean;
        ran: boolean;
        uuid: string;
    }[];
    result: string;
    statement: string;
    boundary: string;
};
export declare function analogNoGapsNoLeak(matrix?: MindMatrix): {
    sealed: boolean;
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
export declare function oneJsonLdTemplateServesAll(matrix?: MindMatrix): {
    serves: boolean;
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
export declare function jsonLdValidPaths(matrix?: MindMatrix): {
    valid: boolean;
    promised: number;
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
export declare function noHardcodedLogicFailsStreams(matrix?: MindMatrix): {
    flows: boolean;
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
export declare function imagineMicrodataVortexItself(matrix?: MindMatrix): {
    vortexed: boolean;
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
export declare function saveAllTranslationLogicAutotranslateLocale(matrix?: MindMatrix): {
    saved: boolean;
    sample: string;
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
export declare function feedCrawlersWithKnowledge(matrix?: MindMatrix): {
    fed: boolean;
    topics: number;
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
export declare function typography(matrix?: MindMatrix): {
    typeset: boolean;
    ratio: number;
    scale: {
        step: string;
        factor: number;
    }[];
    features: string[];
    principles: string[];
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
export declare function frontmatterGraphComputesTags(matrix?: MindMatrix): {
    graphed: boolean;
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
export declare function computedSeo(path?: string, title?: string, matrix?: MindMatrix): {
    computed: boolean;
    title: string;
    description: string;
    category: string;
    keywords: string[];
    tags: {
        tag: string;
        holographic: boolean;
        receipt: string;
    }[];
    holographic: boolean;
    root: string;
    statement: string;
    boundary: string;
};
/** Absolute URL on the one deployed host — og:url, JSON-LD and hreflang speak full URLs, never paths. */
export declare function canonicalUrl(path: string): string;
/** Per-page hreflang alternates: the three locale editions OF THIS PAGE (localePath strips any incoming
 * locale prefix), absolute, with x-default = the English edition — the root locale lives at the canonical
 * bare URLs. Replaces the locale-HOME links that previously rode every page's head. */
export declare function pageHreflangAlternates(path: string): {
    hreflang: string;
    href: string;
}[];
/** Meta-description clamp — search results display ~160 characters (160 = 2⁵·5, composed from lattice
 * digits as 8·4·5); longer computed descriptions cut at a word boundary with an ellipsis. Page bodies
 * keep the full text — the clamp governs the meta/OG/JSON-LD projection only. */
export declare function seoMetaDescription(text: string): string;
export declare function jsonLdTemplate(page: JsonLdPageIdentity, matrix?: MindMatrix): Record<string, unknown>[];
export type { JsonLdPageIdentity };
export declare function seoOptimised(matrix?: MindMatrix): {
    optimised: boolean;
    targets: number;
    theoremCount: number;
    budget: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** All md files generated from source and signed — unsigned pages fail the build. */
export declare function allMdSignedFromSource(matrix?: MindMatrix): {
    signed: boolean;
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
export declare function honestIsACrackWhenDeclaredHonestyMustBeARefutableComputationNotProse(matrix?: MindMatrix): {
    computes: boolean;
    declaredUnrefutable: boolean;
    computedHonest: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theDeclaredHonestyGateFlagsDemarcationProseWithNoRefutableFacet(matrix?: MindMatrix): {
    computes: boolean;
    markers: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function unbalancedTheoremPairsPassBecauseTheAccountingConstructsTheApexTheRealCheckReconcilesIt(matrix?: MindMatrix): {
    computes: boolean;
    dangling: string[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
/** Preview-motion class — first-frame-only vs animates vs unknown (sealed table, not vibes). */
export type PlatformOgPreviewMotion = 'animates' | 'first-frame-only' | 'unknown';
/** One social/preview surface capability row — booleans + dims from documented specs. */
export type PlatformOgCapability = {
    readonly id: string;
    readonly name: string;
    readonly supportsAnimatedOgImage: boolean;
    readonly maxImageBytes: number | null;
    readonly maxImageWidth: number | null;
    readonly maxImageHeight: number | null;
    readonly supportsOgVideo: boolean;
    readonly previewMotion: PlatformOgPreviewMotion;
    readonly linkFields: readonly string[];
    readonly source: string;
    readonly receipt: string;
};
/**
 * Platform OG limits MEASURED — sealed table → receipts → root; round-trips at call time.
 * Pair: measure/og-limits · fold platformOgLimitsMeasured — kills prose-only animation claims.
 */
export declare function platformOgLimitsMeasured(matrix?: MindMatrix): {
    computes: boolean;
    measured: boolean;
    count: number;
    platforms: PlatformOgCapability[];
    animatingIds: string[];
    firstFrameIds: string[];
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    statement: string;
    boundary: string;
};
/** OG image asset paths — animated SMIL SVG + still first-frame twin. */
export declare function openGraphCardAssetPaths(route: string): {
    animated: string;
    still: string;
    slug: string;
};
/**
 * Animated or still OG card SVG from route — same heroSvgFromUuid substrate; animate flag from measured limits.
 */
export declare function openGraphCardSvgFromRoute(route: string, opts?: {
    animate?: boolean;
}): string;
export type OpenGraphCardLink = {
    readonly rel: string;
    readonly href: string;
    readonly kind: 'canonical' | 'ray-hub' | 'tool' | 'theorem' | 'related';
};
/**
 * OG1–OG3: compute full OG card from route — SEO + links + animation branched on platformOgLimitsMeasured.
 */
export declare function openGraphCardFromRoute(route?: string, title?: string, platformId?: string, matrix?: MindMatrix): {
    computes: boolean;
    route: string;
    platformId: string;
    platform: PlatformOgCapability;
    supportsAnimation: boolean;
    animationGap: boolean;
    title: string;
    description: string;
    category: string;
    keywords: string[];
    meta: Record<string, string>;
    links: OpenGraphCardLink[];
    jsonLdRelated: {
        '@context': string;
        '@type': string;
        url: string;
        name: string;
        description: string;
        image: string;
        relatedLink: string[];
    };
    imagePath: string;
    imageAbsolute: string;
    assets: {
        animated: string;
        still: string;
        slug: string;
    };
    svg: string;
    smilCount: number;
    cycleMs: number;
    hue: number;
    seed: string;
    ray: number;
    hub: {
        slug: "learn" | "reference" | "proof" | "explore" | "frontier" | "origin" | "apps";
        route: string;
        glyph: string;
    };
    limitsRoot: string;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    statement: string;
    boundary: string;
};
/**
 * Gate: platform-limit honesty in prose is challenged — fails when claims lack fold citation / recomputed on:.
 */
export declare function honestyInProseChallenged(matrix?: MindMatrix): {
    computes: boolean;
    challenged: boolean;
    proseOnlyClaim: string;
    measuredFb: boolean;
    measuredDiscord: boolean;
    cardBranches: boolean;
    seoCitesFold: boolean;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:og-limits-measure */
export declare function runPlatformOgLimitsMeasuredExit(_root: string, _argv?: readonly string[]): number;
