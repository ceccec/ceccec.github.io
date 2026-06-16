export declare function hopfieldStore(patterns: readonly (readonly number[])[]): number[][];
export declare function hopfieldEnergy(W: readonly (readonly number[])[], s: readonly number[]): number;
export declare function hopfieldRecall(W: readonly (readonly number[])[], probe: readonly number[], steps?: number): {
    state: number[];
    energy: number;
    iters: number;
};
