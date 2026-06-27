import { vitepressAutomountPaths } from '../../../pair/enforcement/gates/computational';
export { vitepressAutomountPaths } from '../../../pair/enforcement/gates/computational';
/** @deprecated — rosetta corpus walk replaces automount enumeration */
export { vitepressAutomountPaths as monographCatchAllPaths };
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
export declare function indexOfIndexes(projectRoot?: string): readonly import("../../../pair/enforcement/gates/computational").DiscoveredIndexEntry[];
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
            readonly nameEn: "Alpha";
            readonly nameBg: "Алфа";
            readonly domain: "origin";
            readonly hue: 0;
        } | {
            readonly ray: 1;
            readonly glyph: "Ⰲ";
            readonly nameEn: "Voice";
            readonly nameBg: "Глас";
            readonly domain: "expression";
            readonly hue: 51;
        } | {
            readonly ray: 2;
            readonly glyph: "Ⰴ";
            readonly nameEn: "Spirit";
            readonly nameBg: "Дух";
            readonly domain: "knowledge";
            readonly hue: 102;
        } | {
            readonly ray: 3;
            readonly glyph: "Ⰶ";
            readonly nameEn: "Life";
            readonly nameBg: "Живот";
            readonly domain: "nature";
            readonly hue: 154;
        } | {
            readonly ray: 4;
            readonly glyph: "Ⰹ";
            readonly nameEn: "Thought";
            readonly nameBg: "Мисъл";
            readonly domain: "computation";
            readonly hue: 205;
        } | {
            readonly ray: 5;
            readonly glyph: "Ⰿ";
            readonly nameEn: "Form";
            readonly nameBg: "Форма";
            readonly domain: "geometry";
            readonly hue: 257;
        } | {
            readonly ray: 6;
            readonly glyph: "Ⱄ";
            readonly nameEn: "Word";
            readonly nameBg: "Слово";
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
};
export declare function vitepressIndexOfIndexesLaw(): {
    schema: "src/[science]/[action]";
    law: string;
    registry: readonly import("../../../pair/enforcement/gates/computational").DiscoveredIndexEntry[];
    automount: number;
    incomplete: number;
    count: number;
    statement: string;
    boundary: string;
};
