import type { MindMatrix } from '../../types/index.ts';
export type AlgorithmSignature = {
    readonly name: string;
    readonly speedup: number;
    readonly complexity: string;
    readonly errorProfile: string;
    readonly problemClass: string;
    readonly receipt: string;
};
export type ContrastAnalysis = {
    readonly algorithm1: string;
    readonly algorithm2: string;
    readonly speedupGap: number;
    readonly complexityGap: string;
    readonly errorGap: string;
    readonly sharedProblemClass: boolean;
    readonly receipt: string;
};
export type SolutionCandidate = {
    readonly millenniumProblem: string;
    readonly hypothesisPath: string;
    readonly sourceAlgorithm: string;
    readonly contrastMechanism: string;
    readonly confidence: number;
    readonly novelty: number;
    readonly receipt: string;
};
/**
 * Extract algorithm signature from known quantum algorithms
 */
export declare function algorithmSignature(name: string): AlgorithmSignature;
/**
 * Contrast two algorithms to find gaps and overlaps
 */
export declare function contrastAlgorithms(algo1: string, algo2: string): ContrastAnalysis;
/**
 * Generate solution candidates for Millennium Problem by comparing algorithm approaches
 */
export declare function generateMillenniumCandidates(millenniumProblem: string): SolutionCandidate[];
/**
 * Mesh comparison across all algorithm-problem pairs
 */
export declare function comparisonMesh(matrix?: MindMatrix): {
    readonly allSignatures: AlgorithmSignature[];
    readonly allContrasts: ContrastAnalysis[];
    readonly millenniumCandidates: Record<string, SolutionCandidate[]>;
    readonly topDiscoveries: SolutionCandidate[];
    readonly receipt: string;
};
/**
 * Integrate mesh findings into Millennium validation
 */
export declare function meshEnrichedMillennium(matrix?: MindMatrix): {
    readonly problem: string;
    readonly classicalApproach: string;
    readonly meshDiscoveries: SolutionCandidate[];
    readonly receipt: string;
};
