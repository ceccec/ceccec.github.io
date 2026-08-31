import type { MindMatrix } from '../../types';
import { type AlgorithmSignature, type SolutionCandidate } from '../mesh';
export type PortalState = {
    readonly algorithms: AlgorithmSignature[];
    readonly millenniumProblems: string[];
    readonly candidates: SolutionCandidate[];
    readonly receipt: string;
};
export type DiscoveryView = {
    readonly problem: string;
    readonly candidates: SolutionCandidate[];
    readonly topCandidate: SolutionCandidate | null;
    readonly candidateCount: number;
    readonly receipt: string;
};
/**
 * Portal state — all mesh discoveries addressable via quantum routing
 */
export declare function quantumDiscoveryPortal(matrix?: MindMatrix): PortalState;
/**
 * Single problem view — address via /quantum/discover/:problem
 */
export declare function discoverMillenniumProblem(problem: string, matrix?: MindMatrix): DiscoveryView;
/**
 * Algorithm explorer — depth view of one algorithm's signature and usage
 */
export declare function exploreAlgorithm(algorithmName: string, matrix?: MindMatrix): {
    readonly name: string;
    readonly signature: AlgorithmSignature;
    readonly appliedToProblems: string[];
    readonly totalCandidates: number;
    readonly receipt: string;
};
/**
 * Contrast explorer — view the gap between two algorithms
 */
export declare function exploreContrast(algo1: string, algo2: string, matrix?: MindMatrix): {
    readonly algorithm1: string;
    readonly algorithm2: string;
    readonly speedupGap: number;
    readonly hypothesisCount: number;
    readonly sharedProblems: string[];
    readonly receipt: string;
};
/**
 * Dashboard state — summary of all discoveries, indexable by UUID
 */
export declare function quantumDiscoveryDashboard(matrix?: MindMatrix): {
    readonly totalAlgorithms: number;
    readonly totalProblems: number;
    readonly totalCandidates: number;
    readonly averageConfidence: number;
    readonly averageNovelty: number;
    readonly topDiscovery: SolutionCandidate | null;
    readonly receipt: string;
};
/**
 * Backward-compatibility export for theorem portal references (rosetta, waves modules)
 */
export declare const portal: {
    stats: () => {
        total: number;
        sealed: number;
        frontier: number;
        byClay: number;
        byTier: {
            tier1: number;
            tier2: number;
            tier3: number;
            tier4: number;
            tier5: number;
        };
        byStatus: {
            solved: number;
            provisional: number;
            open: number;
            contested: number;
        };
        avgProofOutlineLength: number;
        gapDocumentation: number;
        root: string;
        statement: string;
        boundary: string;
    };
    query: (q?: any) => {
        theorems: any[];
        count: number;
        cardHtml: string;
        summary: string;
        identity: string;
    };
    byInvolution: () => {};
    nextToProve: () => any;
};
