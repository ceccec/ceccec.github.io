import type { CommandsRegistry, ConceptCommandName, ConceptCommandResult, MindMatrix } from '../../wind/types';
import type { DeveloperCommandName, DeveloperCommandResult } from '../../quantum/heaven/mind';
export declare function mcpCodebase(matrix?: MindMatrix): {
    understandable: boolean;
    overview: string;
    subsystems: {
        name: string;
        purpose: string;
        root: string;
    }[];
    resources: {
        uri: string;
        purpose: string;
    }[];
    understand: string[];
    math: {
        scale: string;
        law: string;
        value: string;
    }[];
    educate: {
        length: number;
        receipt: string;
        path: string;
        steps: {
            law: string;
            why: string;
        }[];
        reaches: string;
    }[];
    secure: boolean;
    secureBecause: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function commandsRegistry(matrix?: MindMatrix): CommandsRegistry;
export declare function skillsDryRefactorCommands(matrix?: MindMatrix): {
    refactored: boolean;
    dry: boolean;
    commands: number;
    count: number;
    steps: {
        step: string;
        applied: boolean;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function executeConceptCommand(command: ConceptCommandName, input?: {
    readonly atom?: string;
    readonly query?: string;
}, matrix?: MindMatrix): ConceptCommandResult;
export declare function executeDeveloperCommand(command: DeveloperCommandName, _input?: {
    readonly atom?: string;
}, matrix?: MindMatrix): DeveloperCommandResult;
export declare function commandsSavedInQuantumPairs(matrix?: MindMatrix): {
    paired: boolean;
    pairCount: number;
    pairs: {
        command: string;
        a: string;
        b: string;
        paired: boolean;
        address: string;
        receipt: string;
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
export declare function enforceAgentsCommandPairs(matrix?: MindMatrix): {
    enforced: boolean;
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
export { agentSubmissionProtocol, QUANTUM_COMMAND_PAIR_IDS, foldQuantumCommandPairs } from '../../pair/enforcement';
export declare function graduation(matrix?: MindMatrix): {
    graduated: boolean;
    courses: {
        course: string;
        credential: string;
    }[];
    count: number;
    credential: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function agentHarmonise(matrix?: MindMatrix): {
    harmonised: boolean;
    laws: {
        receipt: string;
        law: string;
        why: string;
    }[];
    mcp: string;
    llms: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function howAgentsAchievedIt(matrix?: MindMatrix): {
    achieved: boolean;
    count: number;
    research: {
        angles: number;
        sources: number;
        claimsExtracted: number;
        claimsVerified: number;
        votersPerClaim: number;
        confirmed: number;
        refuted: number;
        findings: number;
        agents: number;
    };
    steps: {
        receipt: string;
        step: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function bestWritingSkills(matrix?: MindMatrix): {
    skilled: boolean;
    principles: string[];
    measured: {
        words: number;
        sentences: number;
        wordsPerSentence: number;
        flesch: number;
        fillerDensity: number;
    }[];
    example: {
        wordy: string;
        tight: string;
    };
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
export declare function zeroTokenLawForAgentsAndForever(matrix?: MindMatrix): {
    bound: boolean;
    violations: string[];
    enforcement: string[];
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
