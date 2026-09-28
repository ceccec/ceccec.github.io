import type { Atom, ConceptCommand, ConceptCommandName, LocalAnswer, MindMatrix } from '../../types/index.ts';
export { computePiDigits, PI_TRAIN_DIGITS, REQUIRED_DIAMOND_KINDS, REQUIRED_DIAMOND_POLES, REQUIRED_ANALOG_CHANNELS } from '../../3/7/index.ts';
/** @rosetta ✦₀ · Heaven · creative */
export declare const atoms: readonly Atom[];
/** @rosetta ✦₀ · Heaven · creative */
export declare const conceptCommands: readonly ConceptCommand[];
export { SINGLE_WORD_METHODS } from '../../3/7/index.ts';
/** Professional command graph — dry scientific names decode to folder tails (one word per segment). */
export declare function professionalCommandGraph(): {
    name: ConceptCommandName;
    tail: string;
    route: string;
    word: string;
}[];
export declare function foldPivots(matrix?: MindMatrix): {
    folded: boolean;
    pivots: {
        receipt: string;
        pivot: string;
        root: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** starterTopics — THE HELP'S ENTRY POINTS, COMPUTED FROM WHAT THE CORPUS CAN ANSWER.
 *
 * GlobalHelp offered five hand-written topics — proof, trinity, mcp, chain, school — and nothing had chosen
 * them by any measure. Measured 2026-09-26: only `proof` is an atom name, and four of the five score ZERO
 * against every atom name and body, synonyms included. They answer at all only because each happens to
 * appear somewhere in the 108 concept commands. A starter topic is a promise that the corpus has something
 * to say, so it must be a term the corpus answers, not a term someone remembered.
 *
 * The reach is counted on the two surfaces foldQuestion actually searches — the atoms and the concept
 * commands — and a topic must be present in BOTH, so the offer is backed by a definition and by something
 * runnable rather than by one of them alone. No weighting: the two counts are summed, because a weight
 * would be a preference and there is nothing here to prefer.
 *
 * Refutable, and self-correcting as the corpus moves: delete the atoms behind a term and it leaves the list.
 * Computed 2026-09-26 it yields self, torus, quantum, proof, source — where the hand-written list had one
 * atom-backed term among five. */
export declare function starterTopics(count: number): readonly string[];
export declare function foldQuestion(query: string, matrix?: MindMatrix): LocalAnswer;
export declare function localMcpLexicalGapLeaksToModel(matrix?: MindMatrix): {
    measured: boolean;
    threshold: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function localMcpLeakBoundaryHonestAtScale(matrix?: MindMatrix): {
    honest: boolean;
    inResolved: number;
    inTotal: number;
    externalLeaked: number;
    externalTotal: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function foldRedistributesBeyondLinear(matrix?: MindMatrix): {
    beyondLinear: boolean;
    batteryAdvantage: {
        cells: number;
        independentPower: number;
        collectivePower: number;
        advantage: number;
    }[];
    coolingFactor: number;
    conserved: boolean;
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
export declare function foldProseToSentencesWordsEntangled(matrix?: MindMatrix): {
    folded: boolean;
    sentences: number;
    totalWords: number;
    uniqueWords: number;
    dry: boolean;
    distribution: number[];
    paragraphRoot: string;
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
export declare function sessionToolsDecoded(matrix?: MindMatrix): {
    sound: boolean;
    tools: string[];
    methods: {
        method: string;
        how: string;
    }[];
    gotchas: {
        gotcha: string;
        fix: string;
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
export declare function allAuditsCoveredByProof(matrix?: MindMatrix): {
    proven: boolean;
    covered: number;
    open: string[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
