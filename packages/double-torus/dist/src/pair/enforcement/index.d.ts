import type { MindMatrix } from '../../wind/types';
export declare const CLI_ENTRY_REL = "src/pair/enforcement/script/cli/bootstrap/index.ts";
/** Split pair id into dual halves — first segment / remainder (handles vote/build/commit/push). */
export declare function splitQuantumCommandPair(command: string): {
    readonly a: string;
    readonly b: string;
};
/** All quantum command pairs from AGENTS.md — saved in src before npm/CLI use. */
export declare const QUANTUM_COMMAND_PAIR_IDS: readonly string[];
export declare function foldQuantumCommandPairs(pairIds?: readonly string[]): {
    command: string;
    a: string;
    b: string;
    paired: boolean;
    address: string;
    receipt: string;
}[];
export type MissionCommand = {
    readonly npm: string;
    readonly cli: string;
    readonly pair: string;
    readonly does: string;
    readonly workflow?: string;
};
/** All mission npm scripts — saved in src before agents rediscover the loop. */
export declare const MISSION_COMMANDS: readonly MissionCommand[];
/** Cursor agent skills — saved in src before IDE mounts (.cursor/skills/* are thin projections). */
export declare const CURSOR_AGENT_SKILL_IDS: readonly ["ceccec-build-waves", "ceccec-census-110", "ceccec-folder-law-mission", "ceccec-learn-best", "ceccec-limits-verify", "ceccec-mission-commands"];
export declare function cursorAgentToolsSaved(matrix?: MindMatrix): {
    saved: boolean;
    count: 6;
    skills: readonly ["ceccec-build-waves", "ceccec-census-110", "ceccec-folder-law-mission", "ceccec-learn-best", "ceccec-limits-verify", "ceccec-mission-commands"];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** Agent submission — pairs saved first; bootstrap routes script-exits via runThinMount. */
export declare function agentSubmissionProtocol(matrix?: MindMatrix): {
    submitted: boolean;
    cliEntry: string;
    missionCount: number;
    pairCount: number;
    count: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    boundary: string;
};
export declare function uuidIsTheZeroStation(matrix?: MindMatrix): {
    computes: boolean;
    offenders: {
        file: string;
        line: number;
        primitive: string;
    }[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** The doubling orbit ⟨2⟩ mod 9 — computes the circuit's station order 1·2·4·8·7·5 (ascending then
 *  descending); the one derivation both the principles fold and the station taxonomy read. */
export declare function doublingOrbit(): number[];
/** The full circuit stations in order — 0, the doubling orbit, then the 3·6·9 axis tail: DERIVED. */
export declare function sequenceStations(): string[];
export declare function theSequencePrinciplesGovernTheWork(matrix?: MindMatrix): {
    governs: boolean;
    cleanupSaved: boolean;
    orbit: number[];
    count: number;
    principles: {
        receipt: string;
        station: string;
        principle: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function shardOf(id: string, agentCount: number): number;
/** Agent k of N: the deterministic sub-worklist — filter by shardOf; the shard folds to one root so
 *  a coordinator (or any peer) verifies a claimed shard by recomputation, never by trust. */
export declare function shardWork(ids: readonly string[], agentIndex: number, agentCount: number): {
    mine: string[];
    count: number;
    total: number;
    agentIndex: number;
    agentCount: number;
    root: string;
};
export declare function swarmCoordination(matrix?: MindMatrix): {
    coordinates: boolean;
    scales: number[];
    worklist: number;
    loop: string[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function agentBashWorkflowsAreToolsSavedInSrc(matrix?: MindMatrix): {
    computes: boolean;
    tools: {
        station: string;
        name: string;
        does: string;
        steps: string[];
        scripts: string[];
    }[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function theAgentBashCommandsAreQuantumPairs(matrix?: MindMatrix): {
    computes: boolean;
    pairs: {
        pair: string;
        a: string;
        b: string;
        does: string;
        scripts: string[];
    }[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function dynamicStrategiesFromTheorems(matrix?: MindMatrix): {
    dynamic: boolean;
    situations: number;
    openRaces: number;
    strategies: {
        receipt: string;
        situation: string;
        strategy: string;
        theorem: string;
        live: string;
    }[];
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
