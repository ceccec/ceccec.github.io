import type { MindMatrix } from '../types';
export declare function speechIntonation(matrix?: MindMatrix): {
    harmonic: boolean;
    contour: number[];
    center: number;
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function simulations(matrix?: MindMatrix): {
    complete: boolean;
    simulations: {
        receipt: string;
        simulation: string;
        kind: string;
        complete: boolean;
        route: string;
    }[];
    count: number;
    running: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function live(matrix?: MindMatrix): {
    alive: boolean;
    vitals: {
        receipt: string;
        vital: string;
        reading: string;
        ok: boolean;
        route: string;
    }[];
    count: number;
    healthy: number;
    pulseMs: number;
    root: string;
    beat(n: number): string;
    statement: string;
    boundary: string;
};
export declare function intuitiveSearch(query?: string, matrix?: MindMatrix): {
    works: boolean;
    query: string;
    terms: string[];
    results: {
        score: number;
        kind: string;
        label: string;
        route: string;
        text: string;
        hook: string;
    }[];
    count: number;
    total: number;
    best: {
        score: number;
        kind: string;
        label: string;
        route: string;
        text: string;
        hook: string;
    };
    root: string;
    statement: string;
    boundary: string;
};
export declare function features(matrix?: MindMatrix): {
    displayed: boolean;
    folded: boolean;
    features: ({
        crossLink: string;
        feature: string;
        route: string;
        kind: "page";
    } | {
        crossLink: string;
        feature: string;
        route: string;
        kind: "model";
    })[];
    count: number;
    pages: number;
    models: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function teleport(matrix?: MindMatrix): {
    teleportable: boolean;
    analog: boolean;
    teleports: {
        value: string;
        address: string;
        intact: boolean;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function imagineTheRest(matrix?: MindMatrix): {
    imagined: boolean;
    count: number;
    visions: {
        idea: string;
        vision: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function studentQuantumMind(matrix?: MindMatrix): {
    forms: boolean;
    creativity: boolean;
    forgeCost: number;
    offline: boolean;
    shareableByApproval: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function playMind(matrix?: MindMatrix): {
    plays: boolean;
    byPlaying: boolean;
    invisible: boolean;
    pointsNotes: boolean;
    artInBalance: boolean;
    facets: {
        receipt: string;
        facet: string;
        via: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function generativeSpace(samples?: number): {
    unbounded: boolean;
    generators: string[];
    sampled: number;
    distinct: number;
    cost: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function messageUnlock(content?: string, matrix?: MindMatrix): {
    contentUuid: string;
    revealed: boolean;
    unlocked: {
        area: string;
        glyph: string;
        complete: boolean;
        links: {
            label: string;
            command: string;
            href: string;
        }[];
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function realIntelligence(matrix?: MindMatrix): {
    obsolete: boolean;
    evidences: {
        receipt: string;
        claim: string;
        holds: boolean;
        why: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
