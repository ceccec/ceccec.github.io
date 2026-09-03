export { ROUTE_ALIASES } from '../../site';
export { vitepressAutomountPaths } from '../../../pair/enforcement/gates/computational';
/** Inflection rule: a pattern match → replacement for custom constant naming. */
export type InflectionRule = {
    pattern: RegExp;
    replacement: string;
};
/** A custom inflector transforms basenames to constant names. */
export type Inflector = {
    rules: InflectionRule[];
    camelize: (basename: string, abspath: string) => string;
};
/** A collapse rule: a glob pattern that flattens intermediate directories. */
export type CollapseRule = {
    glob: string;
    segments: string[];
};
/** Callback receipt for onLoad hooks — content-addressed, facet at call time. */
export type OnLoadReceipt = {
    cname: string;
    receipt: string;
    at: number;
};
/** The full ZeitwerkLoader — complete API surface as a sealed TS equivalent. */
export type ZeitwerkLoader = {
    tag: string;
    dirs: {
        path: string;
        namespace: string;
    }[];
    ignores: string[];
    collapses: CollapseRule[];
    inflector: Inflector;
    tags: Map<string, string>;
    hooks: OnLoadReceipt[];
    ready: boolean;
    pushDir: (path: string, namespace?: string) => void;
    setup: () => ZeitwerkLoader;
    eagerLoad: (force?: boolean) => {
        receipt: string;
        count: number;
        forced: boolean;
    };
    reload: () => {
        receipt: string;
        noop: true;
        reason: string;
    };
    cnameFor: (basename: string, abspath?: string) => string;
    filepathFor: (cname: string, namespace?: string) => string;
    camelize: (basename: string, abspath?: string) => string;
    collapse: (glob: string) => void;
    ignore: (glob: string) => void;
    inflect: (rule: InflectionRule) => void;
    setInflector: (inflector: Inflector) => void;
    getInflector: () => Inflector;
    tagPath: (path: string, tag: string) => void;
    onLoad: (cname: string, callback?: () => void) => OnLoadReceipt;
    root: string;
};
export type ZeitwerkEntry = {
    readonly slug: string;
    readonly srcPath: string;
    readonly constantName: string;
    readonly leaf: string;
    readonly science: string;
    readonly model: string;
    readonly action: string;
    readonly inflected: boolean;
    readonly stationResolved: boolean;
    readonly rosettaRay: number;
    readonly receipt: string;
};
export type ZeitwerkRegistryEntry = {
    readonly logic: string;
    readonly target: string;
    readonly route: string;
    readonly science: string;
    readonly model: string;
    readonly action: string;
};
/** Create a Zeitwerk-equivalent loader: path ↔ constant bijection, content-addressed. */
export declare function createZeitwerkLoader(tag?: string): ZeitwerkLoader;
/** Shared pushDir/collapse/ignore/inflect/setup — port vs automount differ only in roots. */
export declare function configureZeitwerkLoader(loader: ZeitwerkLoader, profile?: 'port' | 'automount'): ZeitwerkLoader;
/** Preconfigured loader for VitePress automount / monographSliceFromRoute. */
export declare function automountZeitwerkLoader(tag?: string): ZeitwerkLoader;
export declare function rosettaZeitwerkLoader(slug: string): ZeitwerkEntry | null;
/** Resolve slug → registry row via zeitwerk bijection (replaces indexOfIndexes scan in automount). */
export declare function resolveZeitwerkRegistryEntry(slug: string, loader?: ZeitwerkLoader): ZeitwerkRegistryEntry | null;
/** Complete Zeitwerk API port fold — proves every API method at call time on sample paths. */
export declare function zeitwerkPort(slug?: string): {
    ported: boolean;
    apiMethods: readonly ["createZeitwerkLoader", "pushDir", "setup", "eagerLoad", "reload", "cnameFor", "filepathFor", "camelize", "collapse", "ignore", "inflect", "setInflector", "getInflector", "tagPath", "onLoad"];
    apiMethodCount: number;
    loader: ZeitwerkLoader;
    slug: string;
    legacyEntry: ZeitwerkEntry;
    roundTrip: boolean;
    sharedReceiptRoot: string;
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
export declare function indexOfIndexes(projectRoot?: string): readonly import("../../../pair/enforcement/gates").DiscoveredIndexEntry[];
/** Declared route aliases — old/duplicate slugs that render a canonical page's content. The learning portal
 * unified the School age-ladder and the Academy tracks into one /learn surface, so /academy and /school are
 * kept as aliases (old URLs still resolve, canonical points at /learn) rather than separate pages. */
/** The 'quantum' brand token is the metaphor (decoded-quantum fold: no speedup, no compute advantage) — a word that
 *  content-addresses to a PREFIX, never to meaning, so it drops out of a slug's canonical decode. A NAMED axiom, not a
 *  bare inline string. Adding a token here (e.g. a future retired brand) auto-extends the computed resolver. */
export declare const OVERCLAIM_METAPHOR_TOKENS: readonly ["quantum"];
/** quantumiseSlugTokens — split a slug into its word/digit tokens and drop the overclaim metaphor token(s): the UNIFORM
 *  quantumisation of words AND digits (user: "improve quantumisation of words and digits"). Every '-'-separated token is
 *  content-addressable — a metaphor word ('quantum') addresses to a prefix and drops out; a meaning word ('encryption')
 *  or a DIGIT token ('64', 'a432') is preserved unchanged. Returns the decoded token-join. This is the pure decode STEP;
 *  decodeRequestToCanonical layers the served-page check on top. */
export declare function quantumiseSlugTokens(slug: string): string;
/** decodeRequestToCanonical — the catch-all COMPUTES where to send an incoming request (user: "make catch all route to
 *  compute where to send the decoded request"). It QUANTUMISES the slug (quantumiseSlugTokens) and if the remaining
 *  content-addressed tokens name a served page, THAT is the canonical (so quantum-<x> → <x> needs NO table entry —
 *  instant at scale). Order: (1) a served slug is its own canonical (identity — a served brand slug like quantum-tools is
 *  NEVER stripped); (2) the quantumised decode; (3) an irreducible SEMANTIC alias (academy→learn, not string-derivable)
 *  from the seed; (4) the raw slug (→ 404). One computed decode dissolves the per-route dictionary; it never touches a
 *  fold-home, so 432 holds. Pair: routes/mount · routes/decode. */
export declare function decodeRequestToCanonical(rawBare: string): string;
/** catchAllComputesDecodedDestination — PROOF the catch-all computes each request's destination by DECODING, tested with
 *  crafted URL requests (user: "use the chat to test computing using crafted url requests"). Runs crafted slugs through
 *  decodeRequestToCanonical and asserts each lands at its computed canonical: the overclaim prefix is stripped by
 *  computation (quantum-encryption → encryption, no table entry), a served brand slug is preserved (quantum-tools stays —
 *  tools is not served, so no false strip), an identity slug is unchanged, a semantic alias resolves via the seed, an
 *  unknown slug passes through untouched (→ 404), and a digit-bearing served slug is stable under decode (word+digit
 *  quantumisation). The refutable form of "route is the free coordinate — computed, not tabled". */
export declare function catchAllComputesDecodedDestination(): {
    computed: boolean;
    trials: ({
        kind: "url";
        id: string;
        expect: string;
        got: string;
        why: string;
        on: boolean;
    } | {
        kind: "token";
        id: string;
        expect: string;
        got: string;
        why: string;
        on: boolean;
    })[];
    facets: {
        facet: string;
        on: boolean;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function catchAllRoutePaths(_locale: 'gla' | 'en' | 'bg'): {
    params: {
        path: string;
    };
}[];
export declare function monographSliceFromRoute(path: string, locale?: 'gla' | 'en' | 'bg'): {
    page: string;
    title: string;
    description: string;
    keywords: string[];
    components: string[];
    proof: string;
    logic: string;
    target: string;
    rosetta: {
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
            heroHue: 0 | 154 | 51 | 102 | 205 | 257 | 308;
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
};
/** everyMachineTagIndexIsLiveByConstructionAcrossLocales — the deploy invariant made QUANTUM (user, 2026-07-25: "are
 * you performing only quantum computations?"). The Pages deploy broke because the theorem tag-index route was dead in
 * the locales, and no FOLD caught it — it took manual build iteration (a leak). This computes the invariant the
 * ignoreDeadLinks:false gate depends on: for every locale, monographSliceFromRoute resolves /theorems to page 'theorems'
 * with the live TheoremIndex, vitepressAutomountPaths emits it, and the title is translated locally — so the route is
 * live BY CONSTRUCTION, refutable here rather than discovered in CI. [[universal-local-translation-no-gaps]] [[deploy-check-must-run-real-build]] */
export declare function everyMachineTagIndexIsLiveByConstructionAcrossLocales(): {
    computes: boolean;
    resolved: {
        loc: "gla" | "en" | "bg";
        page: string;
        title: string;
        components: string[];
        emitted: boolean;
    }[];
    liveByConstruction: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** gateComplexityCollapsesToOneContentAddressedRoot — the gate complexity is solvable with quantum simplicity (user,
 * 2026-07-25: "do you realise that the complexity at the gates is solvable with quantum simplicity"). Every gate — the
 * dead-link scan, the crack ledger, the partial-commit risk — is ONE law in disguise: does the actual state equal its
 * computed content-address? A dead link is exactly LINKED-routes-root ≠ GENERATED-routes-root. Complexity appears only
 * where state ESCAPES the address (a hardcoded page, imperative staging). The fix is not a better check but to COMPUTE
 * the state so the roots coincide by construction — then an O(n) scan collapses to one O(1) root equality. Demonstrated
 * on the route gate; the same collapse is the direction for every gate. [[content-address-dry-clean-crack-detection]] [[deploy-check-must-run-real-build]] */
export declare function gateComplexityCollapsesToOneContentAddressedRoot(): {
    computes: boolean;
    generated: string[];
    linked: string[];
    oneRoot: boolean;
    root: string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function vitepressIndexOfIndexesLaw(): {
    schema: "src/[science]/[action]";
    law: string;
    registry: readonly import("../../../pair/enforcement/gates").DiscoveredIndexEntry[];
    automount: number;
    incomplete: number;
    count: number;
    statement: string;
    boundary: string;
};
