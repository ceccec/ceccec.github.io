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
