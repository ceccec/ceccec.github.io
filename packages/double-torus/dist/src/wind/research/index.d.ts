import * as __ns_up_stack_overflow from '../../water/stack';
import type { MindMatrix } from '../types';
export type ProfessionalResearchDataTier = 'DOCUMENTED' | 'MODEL_FIT' | 'HYPOTHESIS' | 'SIMULATOR' | 'METAPHOR' | 'OPEN';
export type ProfessionalResearchProgramRow = {
    readonly id: string;
    readonly category: string;
    readonly question: string;
    readonly methods: string;
    readonly dataTier: ProfessionalResearchDataTier;
    readonly limitation: string;
    readonly nextExperiment: string;
    readonly balanceDim?: string;
    readonly mount: string;
    readonly bibliography?: string;
    readonly receipt: string;
};
/** Machine-readable research program index — links folds, balance dims, verify commands, bibliography at call time. */
export declare function professionalResearchIndex(matrix?: MindMatrix, at?: number): {
    indexed: boolean;
    at: number;
    count: number;
    rows: __ns_up_stack_overflow.ProfessionalResearchProgramRow[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** Balance gate — professional research program index at call time. */
export declare function professionalResearchComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    index: {
        indexed: boolean;
        at: number;
        count: number;
        rows: __ns_up_stack_overflow.ProfessionalResearchProgramRow[];
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    statement: string;
    boundary: string;
};
export type ResearchIndexRow = {
    readonly id: string;
    readonly title: string;
    readonly home: string;
    readonly balanceDim: string;
    readonly verify: string;
    readonly tier: string;
    readonly limit: string;
    readonly receipt: string;
};
export type ResearchReproGate = {
    readonly id: string;
    readonly pair: string;
    readonly command: string;
    readonly receipt: string;
};
export declare function researchIndex(matrix?: MindMatrix, at?: number): {
    indexed: boolean;
    count: number;
    rows: __ns_up_stack_overflow.ResearchIndexRow[];
    professional: {
        indexed: boolean;
        at: number;
        count: number;
        rows: __ns_up_stack_overflow.ProfessionalResearchProgramRow[];
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
    catalog: {
        catalogued: boolean;
        sealedCount: number;
        openCount: number;
        plannedCount: number;
        total: number;
        entries: __ns_up_stack_overflow.ComputableModelEntry[];
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
    root: string;
    statement: string;
    boundary: string;
};
export declare function researchReproducibility(matrix?: MindMatrix, at?: number): {
    reproducible: boolean;
    gates: __ns_up_stack_overflow.ResearchReproGate[];
    census: {
        unfolded: 110;
        gates: number;
        receipt: string;
    };
    root: string;
    statement: string;
    boundary: string;
};
export declare function researchComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    index: {
        indexed: boolean;
        count: number;
        rows: __ns_up_stack_overflow.ResearchIndexRow[];
        professional: {
            indexed: boolean;
            at: number;
            count: number;
            rows: __ns_up_stack_overflow.ProfessionalResearchProgramRow[];
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            root: string;
            statement: string;
            boundary: string;
        };
        catalog: {
            catalogued: boolean;
            sealedCount: number;
            openCount: number;
            plannedCount: number;
            total: number;
            entries: __ns_up_stack_overflow.ComputableModelEntry[];
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            root: string;
            statement: string;
            boundary: string;
        };
        root: string;
        statement: string;
        boundary: string;
    };
    professional: {
        computes: boolean;
        index: {
            indexed: boolean;
            at: number;
            count: number;
            rows: __ns_up_stack_overflow.ProfessionalResearchProgramRow[];
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            root: string;
            statement: string;
            boundary: string;
        };
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        statement: string;
        boundary: string;
    };
    repro: {
        reproducible: boolean;
        gates: __ns_up_stack_overflow.ResearchReproGate[];
        census: {
            unfolded: 110;
            gates: number;
            receipt: string;
        };
        root: string;
        statement: string;
        boundary: string;
    };
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function researchPanelComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    capstone: {
        computes: boolean;
        index: {
            indexed: boolean;
            count: number;
            rows: __ns_up_stack_overflow.ResearchIndexRow[];
            professional: {
                indexed: boolean;
                at: number;
                count: number;
                rows: __ns_up_stack_overflow.ProfessionalResearchProgramRow[];
                facets: {
                    receipt: string;
                    facet: string;
                    on: boolean;
                }[];
                root: string;
                statement: string;
                boundary: string;
            };
            catalog: {
                catalogued: boolean;
                sealedCount: number;
                openCount: number;
                plannedCount: number;
                total: number;
                entries: __ns_up_stack_overflow.ComputableModelEntry[];
                facets: {
                    receipt: string;
                    facet: string;
                    on: boolean;
                }[];
                root: string;
                statement: string;
                boundary: string;
            };
            root: string;
            statement: string;
            boundary: string;
        };
        professional: {
            computes: boolean;
            index: {
                indexed: boolean;
                at: number;
                count: number;
                rows: __ns_up_stack_overflow.ProfessionalResearchProgramRow[];
                facets: {
                    receipt: string;
                    facet: string;
                    on: boolean;
                }[];
                root: string;
                statement: string;
                boundary: string;
            };
            facets: ({
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            statement: string;
            boundary: string;
        };
        repro: {
            reproducible: boolean;
            gates: __ns_up_stack_overflow.ResearchReproGate[];
            census: {
                unfolded: 110;
                gates: number;
                receipt: string;
            };
            root: string;
            statement: string;
            boundary: string;
        };
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        statement: string;
        boundary: string;
    };
    rows: {
        domain: string;
        method: string;
        limit: string;
        verify: string;
        tier: string;
        home: string;
    }[];
    repro: __ns_up_stack_overflow.ResearchReproGate[];
    root: string;
    statement: string;
    boundary: string;
};
