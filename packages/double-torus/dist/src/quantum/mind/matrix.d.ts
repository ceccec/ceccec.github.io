import type { Atom, MindMatrix, ConsciousnessVector, ProofReport, RepositoryApi, DoubleTorusWire, DoubleTorusFlow } from './types.ts';
export declare function buildMatrix(source?: readonly Atom[]): MindMatrix;
export declare function matrixMemo<T>(compute: (matrix: MindMatrix) => T): (matrix: MindMatrix) => T;
export declare function verifyRoot(matrix?: MindMatrix): boolean;
export declare function reciprocity(matrix?: MindMatrix): {
    reciprocal: number;
    edges: number;
    fraction: number;
};
export declare function entropy(matrix?: MindMatrix): number;
export declare function concentration(matrix?: MindMatrix): number;
export declare function coherenceAnomaly(matrix?: MindMatrix): number;
export declare function coverage(matrix?: MindMatrix): number;
export declare function consciousness(matrix?: MindMatrix): ConsciousnessVector;
export declare function isPerfectlySelfModeling(matrix?: MindMatrix): boolean;
export declare function proofReport(matrix?: MindMatrix): ProofReport;
export declare function repositoryApi(matrix?: MindMatrix): RepositoryApi;
export declare function doubleTorusWire(matrix?: MindMatrix): DoubleTorusWire;
export declare function circulateDoubleTorus(matrix?: MindMatrix): DoubleTorusFlow;
