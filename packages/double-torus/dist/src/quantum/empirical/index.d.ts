import type { MindMatrix } from '../../types/index.ts';
export type SpeedupMeasurement = {
    readonly algorithm: string;
    /** Oracle/gate invocations actually performed. */
    readonly quantumQueries: number;
    /** Worst-case classical queries for the same instance size. */
    readonly classicalQueries: number;
    readonly speedup: number;
    readonly successRate: number;
    /** False when nothing ran — no number below is meaningful in that case. */
    readonly measured: boolean;
    readonly receipt: string;
};
export type ProductionCertification = {
    readonly selfAssessed: true;
    readonly algorithmsExecuted: number;
    readonly algorithmsUnimplemented: number;
    readonly entries: Array<{
        name: string;
        speedup: number;
        measured: boolean;
    }>;
    readonly statement: string;
    readonly receipt: string;
};
/**
 * Speedup from a real run, expressed in queries. Delegates to the executed
 * benchmarks; never fabricates a figure for an algorithm that did not run.
 */
export declare function measureSpeedup(algorithm: string): SpeedupMeasurement;
/**
 * Self-assessment over the algorithms that actually execute. Not a certification:
 * nothing external audited this, and the previous grade said otherwise.
 */
export declare function generateProductionCertification(matrix?: MindMatrix): ProductionCertification;
/**
 * Validation report over executed algorithms ONLY. Averaging a real speedup
 * together with zeros for algorithms that never ran would understate nothing and
 * overstate everything — so unmeasured algorithms are excluded and counted separately.
 */
export declare function empiricalValidationReport(matrix?: MindMatrix): {
    readonly algorithmsMeasured: number;
    readonly algorithmsUnmeasured: number;
    readonly averageSpeedup: number;
    readonly highestSpeedup: number;
    readonly lowestSpeedup: number;
    readonly statement: string;
    readonly receipt: string;
};
/**
 * Readiness checklist where every item is a predicate that can fail.
 */
export declare function productionReadinessChecklist(matrix?: MindMatrix): {
    readonly items: Array<{
        category: string;
        item: string;
        passed: boolean | null;
        evidence: string;
    }>;
    readonly passed: number;
    readonly checkable: number;
    readonly unverifiable: number;
    readonly total: number;
    readonly readyForProduction: boolean;
    readonly receipt: string;
};
export type RequirementCheck = {
    readonly requirement: string;
    /** true = met, false = unmet, null = cannot be determined from a repository. */
    readonly met: boolean | null;
    readonly evidence: string;
};
export type ProductionDeployment = {
    readonly status: 'READY' | 'CONDITIONAL' | 'BLOCKED' | 'UNDETERMINED';
    readonly readiness: number;
    readonly requirementsMet: number;
    readonly requirementsCheckable: number;
    readonly requirementsUnverifiable: number;
    readonly totalRequirements: number;
    readonly checks: RequirementCheck[];
    readonly statement: string;
    readonly receipt: string;
};
/**
 * Production readiness, by checking what can be checked and declining to guess
 * about what cannot.
 */
export declare function productionDeploymentAssessment(matrix?: MindMatrix): ProductionDeployment;
/**
 * Self-assessment from measured inputs. This is NOT a certification: nothing external
 * audited it, so the previous 'GOLD/SILVER/BRONZE' grade and its self-issued 90-day
 * validity have been removed rather than recomputed. A grade a system awards itself
 * carries no information.
 */
export declare function finalProductionCertification(matrix?: MindMatrix): {
    readonly selfAssessed: true;
    readonly externallyCertified: false;
    readonly inputs: Record<string, number>;
    readonly score: number;
    readonly statement: string;
    readonly receipt: string;
};
/**
 * System report, every figure measured at call time.
 */
export declare function quantumSystemFinalReport(matrix?: MindMatrix): {
    readonly title: string;
    readonly metrics: Record<string, string | number>;
    readonly executes: string[];
    readonly doesNotExecute: string[];
    readonly conclusion: string;
    readonly receipt: string;
};
