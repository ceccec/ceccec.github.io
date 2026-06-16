import { type MindMatrix } from '../mind/index.ts';
export declare function weatherForecastApis(): {
    realtime: boolean;
    sources: {
        receipt: string;
        api: string;
        kind: string;
        auth: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function weatherForecastQuantumComputedRealtime(matrix?: MindMatrix): {
    realtime: boolean;
    apiCount: number;
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
