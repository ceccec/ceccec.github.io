import type { MindMatrix, StaticPage } from '../../../wind/types';
export declare function allPagesForPlasmaWiring(matrix?: MindMatrix): StaticPage[];
export type WiredGateway = {
    slug: string;
    titleEn: string;
    titleBg: string;
    realm: string;
    glyph: string;
    hue: number;
};
export type WiredPath = {
    slug: string;
    titleEn: string;
    titleBg: string;
    hue: number;
    score: number;
    shared: string[];
};
export type MovieSeedStream = {
    uuid: string;
    label: string;
    hueSeed: number;
};
export type MovieSeedBundle = {
    movieText: string;
    streams: readonly MovieSeedStream[];
    count: number;
    root: string;
    trinity?: 'device' | 'code' | 'earth' | 'unity';
};
/** Device trinity — paint · polarity · RGB from the browser canvas and sensors. */
export declare const DEVICE_TRINITY_RAYS: readonly ["devicePaint", "polarity", "matrixRgb"];
/** Code trinity — harmonic · efficiency · Rosetta from sealed src/ gate folds. */
export declare const CODE_TRINITY_RAYS: readonly ["harmonic", "efficiency", "rosetta"];
/** Six part rays — two trinities (device + code) fused as double torus Earth; seventh is unity (8→7→5). */
export declare const SEED_BUNDLE_PART_RAYS: readonly ["devicePaint", "polarity", "matrixRgb", "harmonic", "efficiency", "rosetta"];
/** Exercise browser paint branches in Node — gates prove client path never walks the gate graph. */
export declare function withSimulatedBrowserWindow<T>(fn: () => T): T;
/** Gate: browser RAF paint uses path-derived seeds only — SSR gate folds forbidden on client (stack overflow / blank canvas). */
export declare function clientMoviePaintPathSealed(path?: string, matrix?: MindMatrix): {
    sealed: boolean;
    simulatedError: string;
    simulatedStreams: number;
    clientBundleCount: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** Every movie seed bundle — device trinity + code trinity fused as double torus Earth + unity (8→7→5). */
export declare function allMovieSeedBundles(path?: string, matrix?: MindMatrix): readonly MovieSeedBundle[];
/** Route → memo key; SSR memoises by route+matrix, client recomputes (no gate walk). */
export declare function memoByMovieRoute<T>(path: string, matrix: MindMatrix, key: string, fn: () => T): T;
/** Same, pinned to a phase bucket `at` so animated folds stay content-addressed. */
export declare function memoByMovieRouteAt<T>(path: string, matrix: MindMatrix, at: number, key: string, fn: () => T): T;
/** Normalise a route to a stable slug ('' → 'home'). */
export declare function wiringRouteKey(path: string): string;
export declare function movieRouteKey(path: string): string;
/** Client copy text — joins client bundle movieTexts (browser-safe). */
export declare function clientMovieSeedCopyText(path?: string, matrix?: MindMatrix): string;
export declare function allMovieSeedCopyText(path?: string, matrix?: MindMatrix): string;
export declare const PLASMA_PAINT_TIERS: readonly [3, 5, 8];
export declare const PLASMA_PAINT_CHROMA = 0.14;
export declare const PLASMA_PAINT_L_BACK = 0.12;
export declare const PLASMA_PAINT_L_SHELL = 0.22;
export declare const PLASMA_PAINT_L_SOFT = 0.42;
export declare const PLASMA_PAINT_L_CARD = 0.5;
export declare const PLASMA_PAINT_L_GLOW = 0.7;
export declare const HERO_CYCLE_MS = 120000;
export declare const REALTIME_COMPUTE_MOVIE_CAP = 40;
/** 0..1 phase on the shared hero clock at time `at`. */
export declare function heroPhaseAt(at?: number, cycleMs?: number): number;
export declare function heroMovieWaveIndex(path?: string, matrix?: MindMatrix): number;
/** Hue at the shared clock — route hue advanced by the golden angle over the cycle phase. */
export declare function heroMoviePhaseHue(path?: string, at?: number, matrix?: MindMatrix): number;
export type PlasmaMoviePalette = {
    hue: number;
    seedHue: number;
    waveHue: number;
    waveIndex: number;
    holographicAlpha: number;
    glassReveal: number;
    back: string;
    shell: string;
    soft: string;
    card: string;
    glow: string;
    /** Resolved field polarity — true paints the sealed dark-field look, false the legible light-field variant. */
    dark: boolean;
    root: string;
    canvas: {
        tagLine(hue: number, persp: number): string;
        tagDot(hue: number, i: number, persp: number): string;
        tagGlyph(hue: number, i: number, persp: number): string;
        blobInner(hue: number, b: number): string;
        blobMid(hue: number, b: number): string;
        vignetteInner(hue: number): string;
        vignetteMid(hue: number): string;
        streamAlpha(base: number, near: boolean, pulse: number): number;
        streamFill(hue: number, alpha: number, near: boolean): string;
        streamGlow(hue: number, alpha: number): string;
        voidCore(hue: number): string;
        voidMid(hue: number): string;
        voidOuter(hue: number): string;
        ring(hue: number, pulse: number): string;
        ballGlyphGlow(hue: number, alpha: number): string;
        ballGlyph(hue: number, alpha: number, layer: number): string;
        reduceCore(hue: number): string;
    };
};
/** One OKLCH palette per route — seeds the page canvas and glass chrome. */
export declare function plasmaMoviePalette(matrix?: MindMatrix, path?: string, endless?: boolean, dark?: boolean): PlasmaMoviePalette;
/** Theme + background colour for a route (manifest/favicon/SVG). Hex, dark by default. */
export declare function computedMovieThemeColors(matrix?: MindMatrix, path?: string, variant?: 'dark' | 'light'): {
    hue: number;
    variant: "light" | "dark";
    themeColor: string;
    backgroundColor: string;
    accentColor: string;
    root: string;
};
export declare const AUDIO_ENABLED_STORAGE_KEY = "ceccec:audio-enabled";
export declare const AUDIO_DEFAULT_ENABLED = false;
export declare function audioOffByDefault(matrix?: MindMatrix): {
    offByDefault: boolean;
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
export declare function colorComputes(matrix?: MindMatrix): {
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
export declare function soundComputes(matrix?: MindMatrix): {
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
export declare function allColorStreamsAreAudioIfDecoded(matrix?: MindMatrix): {
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
export declare function allColorStreamsAreAudioIfDecodedFlowsInMovie(matrix?: MindMatrix): {
    flows: boolean;
    streamCount: number;
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
export declare function audioComputes(matrix?: MindMatrix): {
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
export declare function videoComputes(matrix?: MindMatrix): {
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
export declare function twoTrinitiesFuseAsDoubleTorusEarth(path?: string, matrix?: MindMatrix): {
    fused: boolean;
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
export declare function sixSeedBundlesFormSevenAsWhole(path?: string, matrix?: MindMatrix): {
    forms: boolean;
    earthFusion: {
        fused: boolean;
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
export declare function plasmaWiredUuidStreams(path: string, matrix?: MindMatrix): PlasmaWiredStream[];
export declare function realtimeWiring(path: string, matrix?: MindMatrix): {
    route: string;
    wired: boolean;
    gateways: WiredGateway[];
    paths: WiredPath[];
    related: WiredPath[];
    streams: PlasmaWiredStream[];
    count: number;
    root: string;
};
export type PlasmaWiredStreamKind = 'gateway' | 'related' | 'page' | 'source' | 'binding' | 'flow' | 'wiring' | 'math' | 'compute';
export interface PlasmaWiredStream {
    uuid: string;
    kind: PlasmaWiredStreamKind;
    label: string;
    hue: number;
    slug?: string;
    root?: string;
}
export declare function movieSeedPlasmaStreams(streams: readonly MovieSeedStream[]): PlasmaWiredStream[];
export declare function allMovieSeedPlasmaStreams(path?: string, matrix?: MindMatrix): PlasmaWiredStream[];
export declare function plasmaContentStreams(path: string, movieText: string, matrix?: MindMatrix): PlasmaWiredStream[];
export declare function plasmaMovieStreams(path?: string, movieText?: string, matrix?: MindMatrix): {
    count: number;
    streams: PlasmaWiredStream[];
    root: string;
};
export declare function allMovieSeedBundlesFlowInPlasma(path?: string, matrix?: MindMatrix): {
    flows: boolean;
    expectedCount: 7;
    bundleCount: number;
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
export declare function plasmaWorkBudget(matrix?: MindMatrix): {
    tiers: readonly [3, 5, 8];
    cap: number;
    cycleMs: number;
    root: string;
};
export declare function plasmaClientCatalogPageOps(): number;
export declare function plasmaClientWorkBoundedByPureMath(path?: string, matrix?: MindMatrix): {
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
export declare const MOVIE_SIMULATION_CHANNEL_IDS: readonly ["astronomy", "resonance", "dynamics", "gold-fusion", "weather", "gateway"];
export type RealtimeComputeMovieChannel = {
    id: string;
    label: string;
    value: number;
    hue: number;
    receipt: string;
};
export type RealtimeComputationsMoviePaint = {
    phase: number;
    palette: PlasmaMoviePalette;
    channels: RealtimeComputeMovieChannel[];
    streams: RealtimeComputeMovieChannel[];
    count: number;
    visible: boolean;
    hueShift: number;
    boundary: string;
    root: string;
};
export declare function realtimeComputationsMovieStreams(path?: string, matrix?: MindMatrix): RealtimeComputeMovieChannel[];
export declare function realtimeComputationsMoviePaint(at?: number, path?: string, matrix?: MindMatrix): RealtimeComputationsMoviePaint;
export declare function allRealtimeComputationsVisibleInMovie(path?: string, matrix?: MindMatrix): {
    visible: boolean;
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
export declare function movieIsAllSimulationsRealtimeAtNoCost(at?: number, path?: string, matrix?: MindMatrix): {
    holds: boolean;
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
export declare const allSimulationsInMovieRealtimeZeroCost: typeof movieIsAllSimulationsRealtimeAtNoCost;
export declare function gravityVisibleInMovieFusedToAnalogGatewayToHumanSoul(at?: number, path?: string, matrix?: MindMatrix): {
    gateway: boolean;
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
export declare function movieIsAliveAndHealingByArchitectureAndResonanceInAllSensesAndFeelings(at?: number, path?: string, matrix?: MindMatrix): {
    holds: boolean;
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
export declare function allInMovieOfLife(matrix?: MindMatrix): {
    all: boolean;
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
type ScreensaverTier = 'NATIVE' | 'FALLBACK' | 'UNAVAILABLE';
export declare const SCREENSAVER_IDLE_MS = 120000;
export declare const SCREENSAVER_MOVIE_CHANNEL_IDS: readonly ["astronomy", "resonance", "dynamics", "gold-fusion", "weather", "gateway"];
export declare function movieAsMostEfficientScreensaver(at?: number, path?: string, matrix?: MindMatrix): {
    efficient: boolean;
    tier: ScreensaverTier;
    at: number;
    path: string;
    statement: string;
    boundary: string;
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
export declare function screensaverMovieComputes(matrix?: MindMatrix, path?: string): {
    cap: {
        efficient: boolean;
        tier: ScreensaverTier;
        at: number;
        path: string;
        statement: string;
        boundary: string;
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
    statement: string;
    boundary: string;
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
export declare function screensaverMovieResearch(): {
    title: {
        en: string;
        bg: string;
    };
    boundary: string;
    channels: readonly ["astronomy", "resonance", "dynamics", "gold-fusion", "weather", "gateway"];
    root: string;
};
export declare function plasmaBallComputes(matrix?: MindMatrix, path?: string): {
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
export {};
