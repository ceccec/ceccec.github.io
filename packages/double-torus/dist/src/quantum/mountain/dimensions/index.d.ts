import type { MindMatrix } from '../../../types/index.ts';
export { DIMENSIONS, DIMENSION_NAMES } from '../../../3/7/index.ts';
/** @rosetta ✦₀ · Heaven · creative (the 10 dimensions are the model) */
export interface Dims {
    spread: number;
    depthFade: number;
    hueShift: number;
    twist: number;
    shrink: number;
    breath: number;
    loopA1: number;
    loopB1: number;
    loopA2: number;
    loopB2: number;
}
/** @rosetta ✦₀ · Heaven · creative (the 10 dimensions are the model) */
export declare function dims(p: number, scale?: number): Dims;
/** @rosetta ✦₀ · Heaven · creative (the 10 dimensions are the model) */
export declare function dimWalk(p: number): number;
/** Ten dimensions at every scale — genus-2 homology + cross-fold axes (no ui require cycle). */
export declare function tenDimensionalAnimation(matrix: MindMatrix): {
    tenDimensional: boolean;
    grounded: boolean;
    atEveryScale: boolean;
    homologyLoops: ("spread" | "depthFade" | "hueShift" | "twist" | "shrink" | "breath" | "loopA1" | "loopB1" | "loopA2" | "loopB2")[];
    crossFoldAxes: ("spread" | "depthFade" | "hueShift" | "twist" | "shrink" | "breath" | "loopA1" | "loopB1" | "loopA2" | "loopB2")[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function animationsAreGenuinely10DNotFaked(matrix?: MindMatrix): {
    genuine: boolean;
    channels: number;
    maxCorrelation: number;
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
