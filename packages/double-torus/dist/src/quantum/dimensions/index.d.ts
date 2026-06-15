export interface Dims {
    spread: number;
    depthFade: number;
    hueShift: number;
    twist: number;
    shrink: number;
    breath: number;
}
export declare function dims(p: number): Dims;
export declare function dimWalk(p: number): number;
