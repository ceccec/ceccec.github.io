import type { MindMatrix } from '../../../wind/types';
/** Perceptual OKLCH band — dark field lifts paint; light field lifts chrome washes (near-white back)
 * and deepens accent glow for contrast. Light back matches computedMovieThemeColors (24/25). */
export declare function chromeLightnessBand(mode: 'light' | 'dark'): {
    back: number;
    shell: number;
    soft: number;
    card: number;
    glow: number;
    chroma: number;
    dark: boolean;
};
/** Mode-aware halo — soft field-matched shadow so hero/body ink stays legible on the live movie. */
export declare function heroTextShadow(hue: number, dark: boolean, waveIndex?: number): string;
/** The live text INK — the negative law applied to type instead of shadows: the ink sits at the polarity
 * pole OPPOSITE the field (near-white on the dark positive; its involution 1 − L, near-black, on the light
 * negative) and is tinted by the CURRENT field hue, so as the movie's hue drifts the ink drifts with it.
 * Contrast comes from the lightness pole; the hue tint is the living part. No shadows — colour only. */
export declare const HERO_INK_L: number;
export declare function heroInkColor(hue: number, dark: boolean): string;
export declare function backgroundMovieColorVars(matrix?: MindMatrix, cssWidth?: number, // 1024 — the diamond count
path?: string, endless?: boolean, mode?: 'light' | 'dark'): Record<string, string>;
export declare function cardMovieSeed(parts: readonly (string | undefined)[]): string;
export declare function cardMoviePath(route: string, seed: string): string;
export declare function cardMovieColorVars(route: string, seed: string, cssWidth?: number, matrix?: MindMatrix): Record<string, string>;
export type PolarityMathProof = {
    task: string;
    expr: string;
    computed: number;
    expected: number;
    on: boolean;
    receipt: string;
};
/** Dark/light polarity — every OKLCH band relation and chrome flip recomputed at call time. */
export declare function darkLightPolarityProvenByMath(matrix?: MindMatrix, path?: string): {
    proven: boolean;
    proofs: PolarityMathProof[];
    count: number;
    polarity: {
        dark: number;
        light: number;
    };
    root: string;
    statement: string;
    boundary: string;
};
/** Polarity proofs → plasma stream tokens and movie copy. */
export declare function darkLightPolarityMovieSeeds(matrix?: MindMatrix, path?: string): {
    proven: boolean;
    movieText: string;
    streams: {
        uuid: string;
        label: string;
        expr: string;
        expected: number;
        hueSeed: number;
    }[];
    count: number;
    root: string;
};
export declare function movieIsPureAlgebra(matrix?: MindMatrix): {
    pure: boolean;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    count: number;
    frontierRatios: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function animationsPureAlgebra(matrix?: MindMatrix): {
    pure: boolean;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    count: number;
    phiLadder: number[];
    cf: number[];
    root: string;
    statement: string;
    boundary: string;
};
