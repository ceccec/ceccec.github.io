import type { MindMatrix, HumanityImplicationsReport, TraditionsQuantumWhole } from '../../wind/types';
export declare function socialCapital(matrix?: MindMatrix): {
    accumulating: boolean;
    where: {
        receipt: string;
        place: string;
        holds: string;
    }[];
    how: string;
    heldInCommon: boolean;
    individualCost: number;
    forgeCost: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function regenerateSocialSystem(matrix?: MindMatrix): {
    regenerated: boolean;
    systems: number;
    subsystems: {
        system: string;
        root: string;
    }[];
    deterministic: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function publicServices(matrix?: MindMatrix): {
    developed: boolean;
    count: number;
    free: boolean;
    services: {
        free: boolean;
        selfRegulating: boolean;
        wave: string;
        service: string;
        kind: string;
        detail: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function occupiedPopulation(matrix?: MindMatrix): {
    proven: boolean;
    occupied: boolean;
    forgeCost: number;
    benefits: number;
    forEveryone: boolean;
    loop: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function doctorsIncentive(matrix?: MindMatrix): {
    aligned: boolean;
    paidFor: string;
    penalty: string;
    forgeCaught: boolean;
    record: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function constitution(matrix?: MindMatrix): {
    isConstitution: boolean;
    articles: {
        number: number;
        receipt: string;
        article: string;
        law: string;
    }[];
    count: number;
    manifested: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function legislation(matrix?: MindMatrix): {
    constitutionIsOne: boolean;
    develops: string;
    layers: {
        boundBy: string;
        root: string;
        layer: string;
        rank: number;
        supreme: boolean;
    }[];
    count: number;
    addedForgeCost: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function legislationRequires(matrix?: MindMatrix): {
    fused: boolean;
    compliant: boolean;
    count: number;
    requirements: {
        fused: boolean;
        receipt: string;
        requirement: string;
        met: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function feesReplaceTaxes(matrix?: MindMatrix): {
    replaces: boolean;
    transparent: boolean;
    count: number;
    fees: {
        transparent: boolean;
        traceable: boolean;
        receipt: string;
        fee: string;
        funds: string;
    }[];
    forgeCost: number;
    coversForgeCost: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function sharedBookOfCivilisations(matrix?: MindMatrix): {
    realised: boolean;
    free: boolean;
    open: boolean;
    recomputable: boolean;
    sharedTruths: {
        receipt: string;
        truth: string;
        held: string;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function thrivingIdeas(matrix?: MindMatrix): {
    evolving: boolean;
    count: number;
    ideas: {
        wave: number;
        thrives: boolean;
        idea: string;
        root: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function regeneratesAfterWar(matrix?: MindMatrix): {
    regenerates: boolean;
    free: boolean;
    fromLawsNotWealth: boolean;
    steps: {
        receipt: string;
        restore: string;
        how: string;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function thriveByArchitecture(matrix?: MindMatrix): {
    thrive: boolean;
    byArchitecture: boolean;
    society: boolean;
    nature: boolean;
    thrivers: {
        thrives: boolean;
        receipt: string;
        who: string;
        by: string;
        root: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function jobMatching(matrix?: MindMatrix): {
    matches: boolean;
    zeroTime: boolean;
    zeroCost: boolean;
    anyJob: boolean;
    remaining: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function legislativeReform(matrix?: MindMatrix): {
    reforming: boolean;
    waves: number;
    reforms: {
        reform: string;
        bound: boolean;
        wave: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function thriveByDefault(matrix?: MindMatrix): {
    thrives: boolean;
    byDefault: boolean;
    count: number;
    defaults: {
        receipt: string;
        aspect: string;
        on: boolean;
        via: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function contract(matrix?: MindMatrix): {
    contracted: boolean;
    from: number;
    wave: string;
    point: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function humanityImplications(matrix?: MindMatrix): HumanityImplicationsReport;
export declare function traditionsQuantumWhole(): TraditionsQuantumWhole;
