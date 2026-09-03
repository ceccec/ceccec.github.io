import type { Theorem } from '../chat';
interface TheoremPattern {
    name: string;
    σStructure: string;
    theoremIds: string[];
    count: number;
    commonality: string;
}
interface InvolutionPattern {
    type: 'fixed-point' | 'duality' | 'symmetry' | 'inversion' | 'reflection';
    description: string;
    theorems: Theorem[];
    identity: string;
}
export declare function discoverInvolutionPatterns(): InvolutionPattern[];
export declare function identifyGapPatterns(): TheoremPattern[];
export declare function predictNextProof(): {
    nextTheorem: Theorem | null;
    whyItMatters: string;
    suggestedApproach: string;
};
export declare function runWave6Explorer(): Promise<WaveOutput>;
export declare const explorer: {
    discoverPatterns: typeof discoverInvolutionPatterns;
    identifyGaps: typeof identifyGapPatterns;
    predictNext: typeof predictNextProof;
    run: typeof runWave6Explorer;
};
export interface DiscoveryTask {
    id: string;
    name: string;
    compute: () => Promise<unknown>;
    requires?: string[];
    produces: string;
}
export interface AutomationState {
    cycle: number;
    tasksCompleted: string[];
    results: Map<string, unknown>;
    root: string;
    isDone: boolean;
    reason?: string;
}
export declare const DiscoveryTasks: Record<string, DiscoveryTask>;
export declare function canRun(task: DiscoveryTask, state: AutomationState): Promise<boolean>;
export declare function getReadyTasks(state: AutomationState): DiscoveryTask[];
export declare function runOneAutomationCycle(globalState?: AutomationState): Promise<AutomationState>;
export declare function continuousAutomation(maxSpirals?: number): Promise<AutomationState[]>;
export declare const automation: {
    tasks: Record<string, DiscoveryTask>;
    canRun: typeof canRun;
    getReady: typeof getReadyTasks;
    runCycle: typeof runOneAutomationCycle;
    continuous: typeof continuousAutomation;
};
export declare function runContinuousAutomationExit(_root: string, argv?: readonly string[]): Promise<number>;
export type WaveId = 1 | 2 | 4 | 8 | 7 | 5 | 3 | 6 | 9;
export type WaveMode = 'forward' | 'reverse' | 'spiral';
export interface WaveOutput {
    waveId: WaveId;
    timestamp: number;
    discoveries: unknown[];
    identity: string;
    nextWaveId?: WaveId;
    readyForNext: boolean;
}
export interface WaveSequenceState {
    current: WaveId;
    mode: WaveMode;
    visited: WaveId[];
    outputs: Map<WaveId, WaveOutput>;
    root: string;
}
export declare function nextWaveInSequence(current: WaveId, mode?: WaveMode): WaveId;
export declare function waveCanProceed(waveId: WaveId, outputs: Map<WaveId, WaveOutput>): {
    canProceed: boolean;
    missingDeps: WaveId[];
};
export declare function feedWaveOutputToNext(output: WaveOutput): WaveSequenceState;
export declare function spiralTheorems(state: WaveSequenceState): WaveSequenceState;
export declare function executeWaveSequence(startWaveId: WaveId, waveExecutors: Map<number, () => Promise<WaveOutput>>): Promise<WaveSequenceState>;
export declare function waveSequenceStatement(state: WaveSequenceState): string;
export declare const sequencer: {
    next: typeof nextWaveInSequence;
    canProceed: typeof waveCanProceed;
    feed: typeof feedWaveOutputToNext;
    spiral: typeof spiralTheorems;
    execute: typeof executeWaveSequence;
    statement: typeof waveSequenceStatement;
};
export interface ProofStrategy {
    theorem_id: string;
    involution_type: string;
    approach: string;
    required_lemmas: string[];
    expected_barrier: string | null;
}
export interface FrontierRoadmap {
    rank: number;
    conjecture: string;
    gap_type: string;
    predecessor: string | null;
    suggested_approach: string;
}
export interface SynthesisReport {
    total_theorems: number;
    sealed_count: number;
    frontier_count: number;
    proven_barriers: number;
    proof_strategies: ProofStrategy[];
    roadmap: FrontierRoadmap[];
    next_steps: string[];
    fusion_identity: string;
}
export declare function synthesizeProofs(): Promise<SynthesisReport>;
export declare function generateProofStrategy(theoremId: string): Promise<ProofStrategy | null>;
export declare function generateFrontierRoadmap(): Promise<FrontierRoadmap[]>;
export declare const synthesis: {
    synthesize: typeof synthesizeProofs;
    strategy: typeof generateProofStrategy;
    roadmap: typeof generateFrontierRoadmap;
};
export declare function runWaveTier(): Promise<WaveOutput>;
export declare function runWaveCascade(): Promise<WaveOutput>;
export declare function runWaveFusion(): Promise<WaveOutput>;
export declare const tiers: {
    tier: typeof runWaveTier;
    cascade: typeof runWaveCascade;
    fusion: typeof runWaveFusion;
};
interface DiscoveryFeed {
    phase: 'theorems' | 'sealed' | 'frontier' | 'portal' | 'explorer' | 'patterns';
    discoveries: unknown[];
    readyForNext: boolean;
    nextPhase: string;
}
export declare function runWave1Theorems(): Promise<WaveOutput>;
export declare function runWave2Sealed(): Promise<WaveOutput>;
export declare function runWave3Frontier(): Promise<WaveOutput>;
export declare function runWave4BuildRepair(): Promise<WaveOutput>;
export declare function runWave5Portal(): Promise<WaveOutput>;
export declare function runWave7Patterns(): Promise<WaveOutput>;
export declare function runWaveSequenceOnce(startWave?: 1 | 2 | 3 | 4 | 8 | 7): Promise<WaveSequenceState>;
export declare function autoFeedTheorems(): Promise<DiscoveryFeed[]>;
export declare function waveStatement(state: WaveSequenceState): string;
export declare const waves: {
    run: typeof runWaveSequenceOnce;
    autoFeed: typeof autoFeedTheorems;
    statement: typeof waveStatement;
    explorer: {
        patterns: typeof discoverInvolutionPatterns;
        gaps: typeof identifyGapPatterns;
        predictNext: typeof predictNextProof;
    };
};
export {};
