import type { MindMatrix } from '../../types';
import type { JsonLdPageIdentity } from '../../heaven/balance';
export type MicrodataPage = {
    slug: string;
    title: string;
    description: string;
    identifier: string;
};
/** Generate a page's schema.org microdata (itemscope / itemtype / itemprop) deterministically from its content — the
 * itemid is the page's content-address, so the structured data is reproducible and tamper-evident. */
export declare function pageMicrodata(page: MicrodataPage, itemtype?: string): {
    itemscope: boolean;
    itemtype: string;
    itemid: string;
    props: {
        itemprop: string;
        content: string;
    }[];
};
/** quantumMicrodataContentAddressed — quantum (content-addressed) schema.org microdata per page (user, 2026-07-25:
 * "quantum microdata"). Each page's structured data (itemscope / itemtype / itemprop) is generated deterministically
 * from its content, with itemid = the page's content-address — reproducible and tamper-evident (a changed page changes
 * the itemid). Composes the site-level microdata types; the whole structured-data surface is one content-addressed root.
 * "Quantum" = content-addressed/deterministic, not physical quantum; it is search-engine markup that describes a page. */
export declare function quantumMicrodataContentAddressed(matrix?: MindMatrix): {
    computes: boolean;
    itemid: string;
    props: number;
    siteTypes: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** anObjectMayBeCombinationsOfObjectsLikeBiology — a content-addressed object may be a COMBINATION of objects,
 * recursively, like biology (user, 2026-07-25: "an object may be combinations of objects. like biology"). A composite
 * object is the merkle of its parts and is itself an object, so composition is CLOSED; objects nest — organism ⊃
 * organs ⊃ cells — each level an object with its own address; the combination has its own tamper-evident identity; and
 * composition is unbounded. Structural, like the biological hierarchy — not a claim the object is alive. [[biology-human-body-davinci]] [[immediate-save-and-reuse]] */
export declare function anObjectMayBeCombinationsOfObjectsLikeBiology(): {
    computes: boolean;
    body: string;
    closed: boolean;
    unbounded: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** Build a page's Open Graph object FROM its schema.org microdata — one source, content-addressed. */
export declare function openGraphFromMicrodata(page: MicrodataPage): {
    og: Record<string, string>;
    itemid: string;
    complete: boolean;
};
/** onlyCompleteOpenGraphObjectsFromMicrodataMayBeWired — a fail-closed gate: only COMPLETE Open Graph objects built
 * from microdata may be computed and wired (user, 2026-07-25: "which means only complete open graph objects based on
 * microdata may be computed and wired"). Each page's OG (og:title · description · type · url · image) is derived from
 * its schema.org microdata; an OG object missing any required property is NOT wired (rejected, allow never default). */
export declare function onlyCompleteOpenGraphObjectsFromMicrodataMayBeWired(matrix?: MindMatrix): {
    computes: boolean;
    completeIsWired: boolean;
    incompleteRejected: boolean;
    requiredProperties: 5;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** allStandardsAreSchemasComputedInQuantumManifestAtOnce — all standards are covered by schemas; compute the schemas
 * in quantum and all is manifested at once (user, 2026-07-25: "all standards are covered by schemas. compute the
 * schemas in quantum and all is manifested at once"). Each standard family maps to a content-addressed SCHEMA
 * (schema.org type, Open Graph meta, JSON-LD context, the audit-row schema); the schema folds are deterministic, so
 * one computation manifests every surface at once, and schemas compose like objects into one catalog. */
export declare function allStandardsAreSchemasComputedInQuantumManifestAtOnce(matrix?: MindMatrix): {
    computes: boolean;
    standardsToSchemas: {
        standard: string;
        schema: string;
        kind: string;
        address: string;
    }[];
    manifest: string;
    manifestedAtOnce: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
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
/**
 * Drainable SEO violations closed this wave — inventory recomputes at call time.
 * status closed = safely drained; open entries live under honestOpenNamed.
 */
export declare const SEO_VIOLATIONS_DRAINABLE: readonly [{
    readonly id: "alias-learn-lens-hidden";
    readonly kind: "canonical-alias";
    readonly status: "closed";
    readonly note: "academy/school/learn-developer → learn; learn theorem|proof lens-visible + sitemap";
}, {
    readonly id: "academy-jsonld-stale-path";
    readonly kind: "json-ld";
    readonly status: "closed";
    readonly note: "Course ItemList emits on /learn (not academy.md-only)";
}, {
    readonly id: "site-description-over-budget";
    readonly kind: "meta-description";
    readonly status: "closed";
    readonly note: "siteConfig description ≤160 search-display budget";
}, {
    readonly id: "portal-routes-quantum-mind-hidden";
    readonly kind: "internal-link";
    readonly status: "closed";
    readonly note: "learningPortal section routes retarget /learn#… (quantum-mind lens-hidden)";
}, {
    readonly id: "page-census-harmonic-slot";
    readonly kind: "census";
    readonly status: "closed";
    readonly note: "learn served; name-entropy-verify de-lensed so staticPages stay 29→folded 27 harmonic";
}];
/** Honest-open SEO residuals — named, not fake-closed. */
export declare const SEO_VIOLATIONS_HONEST_OPEN: readonly ["platform-og:facebook-first-frame-only", "platform-og:limits-modeled-not-live-cdn-crawl", "hreflang:cu-emitted-gsc-may-ignore", "residual:learn-developer-page-data-lens-hidden-alias-ok", "residual:name-entropy-verify-page-data-lens-hidden-tools-ok", "google:ranking-not-guaranteed", "clay:millennium-open", "ftl:physical-claim-refused"];
/**
 * USER LAW: find SEO violations.
 * Fold: findSeoViolations (= seoViolationsInventory)
 * Facets: violationsFound · drainableClosed · honestOpenNamed · clay via theorem.
 * Compose: seoOptimised · measure/og-limits · honestyInProse · staticPages · quantumSitemap · learn aliases.
 * Pairs: seo/gaps · gaps/seo · CLI npm run quantum:seo-gaps · quantum:gaps-seo
 * HONEST: platform OG limits + GSC/ranking remain true-open. NOT Clay prize.
 */
export declare function findSeoViolations(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    findSeoViolations: boolean;
    violationsFound: boolean;
    drainableClosed: boolean;
    honestOpenNamedOn: boolean;
    drainableCount: 5;
    honestOpenNamedCount: 8;
    closed: ("alias-learn-lens-hidden" | "academy-jsonld-stale-path" | "site-description-over-budget" | "portal-routes-quantum-mind-hidden" | "page-census-harmonic-slot")[];
    open: ("platform-og:facebook-first-frame-only" | "platform-og:limits-modeled-not-live-cdn-crawl" | "hreflang:cu-emitted-gsc-may-ignore" | "residual:learn-developer-page-data-lens-hidden-alias-ok" | "residual:name-entropy-verify-page-data-lens-hidden-tools-ok" | "google:ranking-not-guaranteed" | "clay:millennium-open" | "ftl:physical-claim-refused")[];
    violations: readonly [{
        readonly id: "alias-learn-lens-hidden";
        readonly kind: "canonical-alias";
        readonly status: "closed";
        readonly note: "academy/school/learn-developer → learn; learn theorem|proof lens-visible + sitemap";
    }, {
        readonly id: "academy-jsonld-stale-path";
        readonly kind: "json-ld";
        readonly status: "closed";
        readonly note: "Course ItemList emits on /learn (not academy.md-only)";
    }, {
        readonly id: "site-description-over-budget";
        readonly kind: "meta-description";
        readonly status: "closed";
        readonly note: "siteConfig description ≤160 search-display budget";
    }, {
        readonly id: "portal-routes-quantum-mind-hidden";
        readonly kind: "internal-link";
        readonly status: "closed";
        readonly note: "learningPortal section routes retarget /learn#… (quantum-mind lens-hidden)";
    }, {
        readonly id: "page-census-harmonic-slot";
        readonly kind: "census";
        readonly status: "closed";
        readonly note: "learn served; name-entropy-verify de-lensed so staticPages stay 29→folded 27 harmonic";
    }];
    honestOpenNamed: readonly ["platform-og:facebook-first-frame-only", "platform-og:limits-modeled-not-live-cdn-crawl", "hreflang:cu-emitted-gsc-may-ignore", "residual:learn-developer-page-data-lens-hidden-alias-ok", "residual:name-entropy-verify-page-data-lens-hidden-tools-ok", "google:ranking-not-guaranteed", "clay:millennium-open", "ftl:physical-claim-refused"];
    learnServed: boolean;
    learnInSitemap: boolean;
    brokenAliases: string[];
    incompleteSlugs: string[];
    siteDescriptionLength: number;
    budget: number;
    seoOptimised: boolean;
    ogLimitsOn: boolean;
    honestyOn: boolean;
    pair: "seo/gaps";
    dualPair: "gaps/seo";
    cli: string;
    route: string;
    anchor: string;
    heading: string;
    claySolvedByThisFold: 0;
    physicalFtlClaim: 0;
    qpuRequired: false;
    facets: ({
        receipt: string;
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    statement: string;
    boundary: string;
    honestyLine: string;
};
/** Alias — seoViolationsInventory ≡ findSeoViolations. */
export declare const seoViolationsInventory: typeof findSeoViolations;
/** Alias — seoGaps ≡ findSeoViolations. */
export declare const seoGaps: typeof findSeoViolations;
/** Alias — gapsSeo ≡ findSeoViolations. */
export declare const gapsSeo: typeof findSeoViolations;
/** npm run quantum:seo-gaps · quantum:gaps-seo */
export declare function runFindSeoViolationsExit(_root?: string, _argv?: readonly string[]): number;
