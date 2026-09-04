import type { GovernanceVote, MindMatrix, SacredSociety, ScientificSociety, SocietyRelations } from '../../types/index.ts';
export declare function society(matrix?: MindMatrix): {
    folded: boolean;
    pairs: {
        duality: string;
        left: {
            receipt: string;
            cell: string;
            principle: string;
            basis: boolean;
            route: string;
        };
        right: {
            receipt: string;
            cell: string;
            principle: string;
            basis: boolean;
            route: string;
        };
        fold: {
            forward: string;
            reverse: string;
            bidirectional: boolean;
            merged: string;
        };
        paired: boolean;
    }[];
    count: number;
    cells: number;
    standing: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function quantumSociety(matrix?: MindMatrix): {
    evolved: boolean;
    quantum: boolean;
    postQuantum: boolean;
    organisation: string;
    stages: string[];
    cells: {
        duality: string;
        superposition: string;
        stage: string;
    }[];
    pages: number;
    rebuilt: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function societyEvolves(matrix?: MindMatrix): {
    evolving: boolean;
    discoveredDomains: number;
    discoveredMembers: number;
    discovered: {
        receipt: string;
        domain: string;
        members: number;
        root: string;
    }[];
    restCount: number;
    rest: string[];
    generationRoot: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function societyFuture(matrix?: MindMatrix, generations?: number): {
    evolving: boolean;
    dimensions: number;
    dimensionNames: string[];
    generations: number;
    future: {
        generation: number;
        root: string;
    }[];
    discoveredDomains: number;
    allDimensionsRoot: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function societyRegulates(matrix?: MindMatrix): {
    regulated: boolean;
    individualCost: number;
    forgerCost: number;
    independent: boolean;
    zeroLivingCost: boolean;
    maxForgeCost: number;
    selfRegulating: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function fairTrade(matrix?: MindMatrix): {
    regulated: boolean;
    selfRegulating: boolean;
    individualCost: number;
    forgeCost: number;
    chain: {
        step: string;
        index: number;
        receipt: string;
    }[];
    provenance: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function licenseAppliesToSociety(matrix?: MindMatrix): {
    applies: boolean;
    selfApplying: boolean;
    scope: string;
    licence: string;
    society: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function societyCreatesRequiredPages(matrix?: MindMatrix): {
    creates: boolean;
    count: number;
    pages: {
        page: string;
        requirement: string;
        satisfies: string;
        created: boolean;
        root: string;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function pyramidLayersServeSociety(matrix?: MindMatrix): {
    serves: boolean;
    count: number;
    layers: {
        serves: boolean;
        bond: string;
        receipt: string;
        layer: string;
        purpose: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function societyRelations(matrix?: MindMatrix): SocietyRelations;
export declare function governanceVote(ballots?: readonly {
    rating: number;
    approve: boolean;
    id?: string;
}[], matrix?: MindMatrix): GovernanceVote;
export declare function sacredSociety(matrix?: MindMatrix): SacredSociety;
export declare function scientificSociety(matrix?: MindMatrix): ScientificSociety;
export declare function awakenArtisticSociety(matrix?: MindMatrix): {
    awakens: boolean;
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
export declare function skillsToRebuildSociety(matrix?: MindMatrix): {
    rebuilt: boolean;
    developed: boolean;
    sent: boolean;
    missing: string[];
    count: number;
    aspects: {
        receipt: string;
        aspect: string;
        skill: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function sign(matrix?: MindMatrix, signer?: string, witnesses?: readonly string[]): {
    signed: boolean;
    signer: string;
    witnesses: readonly string[];
    trinity: {
        party: string;
        role: string;
        signature: string;
    }[];
    threshold: number;
    hero: {
        party: string;
        role: string;
        signature: string;
    };
    termsRoot: string;
    signature: string;
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
export declare function consensus(matrix?: MindMatrix, commit?: string): {
    sealed: boolean;
    trinity: number;
    threshold: number;
    hero: string;
    agreement: string;
    seal: string;
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
export declare function societyMerkabaGraphComputes(matrix?: MindMatrix): {
    computes: boolean;
    actors: number;
    edges: number;
    nodes: {
        actor: "science" | "commons" | "governance" | "traditions" | "observer" | "replicator" | "falsifier" | "steward" | "fair-life";
        state: number[];
        receipt: string;
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
