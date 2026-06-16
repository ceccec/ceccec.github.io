export declare const DIMENSIONS = 10;
export declare const DIMENSION_NAMES: readonly ["spread", "depthFade", "hueShift", "twist", "shrink", "breath", "loopA1", "loopB1", "loopA2", "loopB2"];
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
export declare function dims(p: number, scale?: number): Dims;
export declare function dimWalk(p: number): number;
