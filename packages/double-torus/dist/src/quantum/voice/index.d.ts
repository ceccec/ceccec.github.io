/** @rosetta ✦₁ · Water · depth */
export declare const dual = "src/water/double";
/** @rosetta ✦₁ · Water · depth */
export declare function plainLanguage(): {
    clear: boolean;
    lines: {
        receipt: string;
        term: string;
        plain: string;
        route: string;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Water · depth */
export declare function playLearn(word?: string): {
    playable: boolean;
    word: string;
    letters: {
        char: string;
        step: number;
        note: string;
        frequency: number;
        hue: number;
        hsl: string;
        receipt: string;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Water · depth */
export declare function analogSpeech(): {
    analog: boolean;
    params: ({
        analog: boolean;
        receipt: string;
        param: string;
        range: readonly [number, 2];
        note: string;
    } | {
        analog: boolean;
        receipt: string;
        param: string;
        range: readonly [0, 1];
        note: string;
    })[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Water · depth */
export declare function typographySeo(): {
    grounded: boolean;
    principles: {
        receipt: string;
        principle: string;
        seo: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Water · depth */
export declare function openGraph(): {
    computed: boolean;
    fields: {
        field: string;
        source: string;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Water · depth */
export declare function charUuids(text?: string): {
    count: number;
    chars: {
        char: string;
        index: number;
        uuid: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Water · depth */
export declare function wordUuids(text?: string): {
    count: number;
    words: {
        word: string;
        index: number;
        charRoot: string;
        uuid: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Water · depth */
export declare function humanize(): {
    human: boolean;
    translations: {
        receipt: string;
        idea: string;
        human: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Water · depth */
export declare function multidimensional(): {
    mapped: boolean;
    dimensions: {
        items: {
            label: string;
            route: string;
            tip: string;
        }[];
        dimension: string;
        icon: string;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
/** Quantum state description in plain language — coherence, superposition, measurement. */
export declare function quantumStateDescription(stateIndex: number, totalStates?: number): {
    index: number;
    state: string;
    plain: string;
    meaning: string;
    receipt: string;
};
/** Entanglement-assisted communication protocol — send classical + quantum bits via one channel. */
export declare function entanglementCommunicationProtocol(sharedBits?: number): {
    name: string;
    description: string;
    protocol: {
        step: number;
        action: string;
        carrier: string;
    }[];
    capacity: {
        classical: number;
        quantum: number;
        shared: number;
        total: number;
        enhancement: string;
    };
    root: string;
    statement: string;
    boundary: string;
};
/** Coherence messaging — use σ-involution structure to encode information. */
export declare function coherenceSignal(message: string): {
    message: string;
    chars: {
        char: string;
        coherence: number;
        involution: string;
        description: string;
    }[];
    avgCoherence: number;
    root: string;
    statement: string;
    boundary: string;
};
/** Involution-forced signalling — use σ² = identity to ensure correct decoding. */
export declare function involutionSignal(data: string): {
    original: string;
    encoded: string;
    decoded: string;
    selfInverse: boolean;
    statement: string;
    root: string;
    boundary: string;
};
