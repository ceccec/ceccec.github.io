import type { MindMatrix } from '../../../types/index.ts';
export type CoverageMetrics = {
    readonly module: string;
    readonly linesOfCode: number;
    readonly exportedSymbols: number;
    readonly symbolsNamedByTests: number;
    /** symbolsNamedByTests / exportedSymbols — a ratio, not a percentage of lines. */
    readonly coverage: number;
};
export type CoverageReport = {
    readonly totalModules: number;
    readonly modulesFullyReferenced: number;
    readonly averageCoverage: number;
    readonly metrics: CoverageMetrics[];
    readonly gaps: string[];
    readonly statement: string;
    readonly receipt: string;
};
/**
 * Export-reference coverage across src/quantum, measured at call time.
 * Recomputes from the filesystem — add a test naming a symbol and this rises.
 */
export declare function quantumTestCoverageReport(matrix?: MindMatrix): CoverageReport;
/**
 * Exported symbols no test names — the real, computed gap list.
 */
export declare function findUncoveredPaths(matrix?: MindMatrix): {
    readonly paths: Array<{
        module: string;
        path: string;
        reason: string;
    }>;
    readonly statement: string;
    readonly receipt: string;
};
/**
 * The work queue, ordered by measured gap size. No projected future percentages:
 * a roadmap that predicts its own coverage is an assertion, not a measurement.
 */
export declare function coverageRoadmap(matrix?: MindMatrix): {
    readonly current: number;
    readonly queue: Array<{
        module: string;
        unreferenced: number;
        exported: number;
    }>;
    readonly statement: string;
    readonly receipt: string;
};
