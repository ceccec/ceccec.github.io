import type { MindMatrix } from '../../../wind/types';
/** Perceptual OKLCH band — negative (dark field) lifts; positive (light field) deepens. */
export declare function chromeLightnessBand(mode: 'light' | 'dark'): {
    back: number;
    shell: number;
    soft: number;
    card: number;
    glow: number;
    chroma: number;
    dark: boolean;
};
export declare function backgroundMovieColorVars(matrix?: MindMatrix, cssWidth?: number, path?: string, endless?: boolean, mode?: 'light' | 'dark'): Record<string, string>;
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
