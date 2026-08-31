import type { MindMatrix, StaticPage } from '../../../types';
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
/** Every movement plane's visibility as DATA — exact lattice ratios, read by plasmaCanvasFor and verified by the fold. */
export declare const PLANE_VIS: {
    readonly tagLineL: readonly [3, 5];
    readonly tagLineA0: readonly [16, 64];
    readonly tagLineA1: readonly [2, 5];
    readonly tagDotL: readonly [5, 8];
    readonly tagDotA0: readonly [2, 5];
    readonly tagDotA1: readonly [number, 64];
    readonly tagGlyphL: readonly [number, 64];
    readonly tagGlyphA0: readonly [number, 64];
    readonly tagGlyphA1: readonly [2, 5];
    readonly blobInnerL: readonly [29, 64];
    readonly blobInnerA: readonly [number, 64];
    readonly blobMidL: readonly [number, 64];
    readonly blobMidA: readonly [number, 64];
    readonly vignetteInnerL: readonly [number, 64];
    readonly vignetteInnerA: readonly [number, 64];
    readonly vignetteMidL: readonly [8, 64];
    readonly vignetteMidA: readonly [19, 64];
    readonly streamNearFactor: readonly [number, 64];
    readonly streamFillNearL: readonly [number, 64];
    readonly streamFillFarL: readonly [3, 5];
    readonly streamGlowL: readonly [number, 64];
    readonly streamGlowA: readonly [4, 5];
    readonly voidCoreL: readonly [5, 64];
    readonly voidCoreA: readonly [58, 64];
    readonly voidMidL: readonly [number, 64];
    readonly voidMidA: readonly [number, 64];
    readonly voidOuterL: readonly [number, 64];
    readonly voidOuterA: readonly [13, 64];
    readonly ringL: readonly [3, 5];
    readonly ringA0: readonly [19, 64];
    readonly ringA1: readonly [number, 64];
    readonly ballGlyphGlowL: readonly [number, 64];
    readonly ballGlyphL: readonly [number, 64];
    readonly ballGlyphStep: readonly [3, 64];
    readonly reduceCoreL: readonly [6, 64];
    readonly reduceCoreA: readonly [38, 64];
};
export declare const PLASMA_PAINT_TIERS: readonly [3, 5, 8];
export declare const PLASMA_PAINT_CHROMA: number;
export declare const PLASMA_PAINT_L_BACK: number;
export declare const PLASMA_PAINT_L_SHELL: number;
export declare const PLASMA_PAINT_L_SOFT: number;
export declare const PLASMA_PAINT_L_CARD: number;
export declare const PLASMA_PAINT_L_GLOW: number;
export declare const HERO_CYCLE_MS: number;
export declare const REALTIME_COMPUTE_MOVIE_CAP: number;
export declare function plasmaPaintHardcodedPlanesDiscovered(matrix?: MindMatrix): {
    discovered: boolean;
    realized: boolean;
    planes: number;
    ratios: number;
    remaining: any[];
    chroma: {
        value: number;
        lattice: string;
    };
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
export declare function heroClockOffTheLadderDiscovered(matrix?: MindMatrix): {
    discovered: boolean;
    realized: boolean;
    cycleS: number;
    nearestHarmonicS: number;
    cap: {
        value: number;
        law: string;
    };
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
/** 0..1 phase on the shared hero clock at time `at`. */
export declare function heroPhaseAt(at?: number, cycleMs?: number): number;
export declare const FRACTAL_CLOCK_DIVISORS: readonly number[];
/** The divisor-d period in seconds, snapped to the nearest ladder step when d is off-lattice (total, never throws). */
export declare function fractalClockS(d: number): number;
/** The divisor-d period as a CSS/SMIL duration string — the ONE spelling every animation host uses. */
export declare function fractalClockDur(d: number): string;
export declare function animationsFractalOfOneClockDiscovered(matrix?: MindMatrix): {
    discovered: boolean;
    realized: boolean;
    ladder: {
        d: number;
        s: number;
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
export declare function realtimeWiring(path?: string, matrix?: MindMatrix): {
    route: string;
    wired: boolean;
    computes: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    gateways: WiredGateway[];
    paths: WiredPath[];
    related: WiredPath[];
    streams: PlasmaWiredStream[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
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
/** quantumNavigationNavigatesThePlasma — the plasma hero is driven by the (referrer, path) superposition (user,
 * 2026-07-24: "use the quantum navigation to navigate the plasma"). The plasma hue is a content-address of
 * pageNavContext(referrer, path).superposition, so navigating the referrer OR the path repaints the plasma; the
 * path-only heroMoviePhaseHue is the referrer-agnostic base the superposition lifts. Deterministic, zero-token. */
export declare function quantumNavigationNavigatesThePlasma(matrix?: MindMatrix): {
    navigates: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
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
export declare const SCREENSAVER_IDLE_MS: number;
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
/** How fast plasma moves compared to c — BY THEOREM (user, 2026-07-16), and the reveal is that it
 * is the SAME theorem as the void station's. From the cold-plasma dispersion ω² = ωₚ² + c²k²,
 * nothing is postulated: the phase velocity EXCEEDS c for every propagating wave, the group
 * velocity never does, and they are exact reciprocals about c — v_φ·v_g = c². So the "faster than
 * light" plasma wave is a theorem that costs nothing: no signal rides the phase.
 * THE SIMULTANEOUS REVEAL: at cutoff ω → ωₚ the refractive index n → 0, so v_φ = c/n → ∞ — this
 * is division by zero at the pole (divisionByZeroComputes, src/9/1) and the reciprocal reflection
 * (inverseNegatesAngle) in one physical object: v_g → 0 as v_φ → ∞, the wave stops and reflects.
 * The ionosphere bouncing shortwave IS 1/0 = ∞ made audible. */
export declare function plasmaSpeedByTheorem(): {
    computes: boolean;
    sampleVPhaseOverC: number;
    sampleVGroupOverC: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theTracesFadeInHueFormingSpaceForNewEmergenceFromTheSource(matrix?: MindMatrix): {
    computes: boolean;
    capacity: number;
    distinctHues: number;
    aliveCount: number;
    freedSlots: number;
    luminances: number[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export {};
