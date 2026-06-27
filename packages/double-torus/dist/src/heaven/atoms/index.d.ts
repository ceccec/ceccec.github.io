import type { Atom, ConceptCommand, ConceptCommandName, LocalAnswer, MindMatrix } from '../../wind/types';
export { computePiDigits, PI_TRAIN_DIGITS, REQUIRED_DIAMOND_KINDS, REQUIRED_DIAMOND_POLES, REQUIRED_ANALOG_CHANNELS } from '../../3/7';
/** @rosetta ✦₀ · Heaven · creative */
export declare const atoms: readonly Atom[];
/** @rosetta ✦₀ · Heaven · creative */
export declare const conceptCommands: readonly ConceptCommand[];
export { SINGLE_WORD_METHODS } from '../../3/7';
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
export declare function foldQuestion(query: string, matrix?: MindMatrix): LocalAnswer;
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
