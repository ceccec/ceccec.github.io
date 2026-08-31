import type { MindMatrix } from '../types';
export declare function analytics(matrix?: MindMatrix): {
    measured: boolean;
    boards: {
        board: string;
        icon: string;
        metrics: {
            receipt: string;
            metric: string;
            value: number;
        }[];
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function diamondParamsById(id: string, matrix?: MindMatrix): {
    id: string;
    index: string;
    leaf: number;
    number: number;
    address: string;
    kind: string;
    link: string;
    label: string;
    glyph: string;
    hue: number;
    total: number;
    corpusRoot: string;
    depth: number;
};
export declare function restfulFormats(matrix?: MindMatrix): {
    restful: boolean;
    fruitOfLife: number;
    formats: {
        format: string;
        mime: string;
        circle: string;
    }[];
    resources: ({
        resource: string;
        count: number;
        mode: "ssg-detail";
        merkleLeaves?: undefined;
        ssgDetailRoutes?: undefined;
    } | {
        resource: string;
        count: number;
        merkleLeaves: number;
        ssgDetailRoutes: number;
        mode: "compute-pointer";
    } | {
        resource: string;
        count: number;
        merkleLeaves: number;
        ssgDetailRoutes: number;
        mode: "computational-lattice";
    } | {
        resource: string;
        count: number;
        mode: "computed";
        merkleLeaves?: undefined;
        ssgDetailRoutes?: undefined;
    })[];
    crud: {
        verb: string;
        path: string;
        means: string;
        supported: string;
    }[];
    paths: {
        resource: string;
        format: string;
        path: string;
        receipt: string;
    }[];
    pathCount: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function textEntropy(matrix?: MindMatrix): {
    zeroEntropy: boolean;
    total: number;
    referenced: number;
    plain: number;
    plainRatio: number;
    entropy: number;
    referencedRatio: number;
    units: {
        referenced: number;
        plain: number;
        receipt: string;
        unit: string;
        count: number;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function compression(matrix?: MindMatrix): {
    compressed: boolean;
    inputs: number;
    totalUnits: number;
    ratio: string;
    bits: number;
    entropy: number;
    forgeCost: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function analysisFlower(matrix?: MindMatrix): {
    flower: boolean;
    circles: number;
    measures: {
        receipt: string;
        measure: string;
        value: number;
        note: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function globalApis(matrix?: MindMatrix): {
    fused: boolean;
    count: number;
    open: boolean;
    apis: {
        open: boolean;
        fused: boolean;
        receipt: string;
        api: string;
        domain: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function buildStatistics(matrix?: MindMatrix): {
    fused: boolean;
    count: number;
    stats: {
        receipt: string;
        stat: string;
        value: number;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function maxCompressionForge(matrix?: MindMatrix): {
    maxed: boolean;
    units: number;
    bits: number;
    compressionRatio: string;
    forgeCost: number;
    maxTamperingCost: number;
    sameNumber: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function coveragePerPixel(matrix?: MindMatrix): {
    improved: boolean;
    semanticItems: number;
    coverageBefore: number;
    coverageAfter: number;
    ratio: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function buildStatisticsShowGaps(matrix?: MindMatrix): {
    shows: boolean;
    totalGaps: number;
    count: number;
    eyes: {
        clear: boolean;
        receipt: string;
        eye: string;
        gaps: number;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function fleetScaleStatsFused(matrix?: MindMatrix): {
    fused: boolean;
    decoded: boolean;
    perBuildMetrics: number;
    fleetSizes: {
        nodes: number;
        output: number;
        distinctRecompute: number;
        hitRatio: number;
        expectedJoules: number;
        receipt: string;
    }[];
    documented: string[];
    flagged: string[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
