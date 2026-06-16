export declare const dual = "src/voice/quantum";
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
export declare function analogSpeech(): {
    analog: boolean;
    params: ({
        analog: boolean;
        receipt: string;
        param: string;
        range: readonly [0, 2];
        note: string;
    } | {
        analog: boolean;
        receipt: string;
        param: string;
        range: readonly [0.5, 2];
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
export declare function multidimensional(): {
    mapped: boolean;
    dimensions: {
        dimension: string;
        icon: string;
        items: {
            label: string;
            route: string;
            tip: string;
        }[];
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
