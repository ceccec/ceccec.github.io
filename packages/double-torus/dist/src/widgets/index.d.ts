import type { MindMatrix } from '../types';
import type { FreqNode } from '../quantum/heaven/mind';
export declare function recursiveFrequencyDropdowns(matrix?: MindMatrix): {
    computed: boolean;
    nodes: number;
    depth: number;
    binaryLevels: number;
    leadsToMaxCost: boolean;
    tree: FreqNode;
    root: string;
    statement: string;
    boundary: string;
};
export declare function multimediaFirstPlainText(matrix?: MindMatrix): {
    leads: boolean;
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
export declare function shownInUiVitepressComponentsPairs(matrix?: MindMatrix): {
    shown: boolean;
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
export declare function beautyInMathBlastsThroughUi(matrix?: MindMatrix): {
    blasts: boolean;
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
export declare function stateOfTheArtHarmonisedQuantumWidgets(matrix?: MindMatrix): {
    exemplary: boolean;
    techniques: string[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function fillAllGapsCleanHardcodedLinear(matrix?: MindMatrix): {
    cleaned: boolean;
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
/** 18 canonical shadcn primitives ported in repo idiom (radix + cva + ui-* CSS) — fused on VitePress enhanceApp. */
export { SHADCN_PRIMITIVE_NAMES } from '../mountain/shadcn';
export declare function shadcnIsTheGraph(matrix?: MindMatrix): {
    graphed: boolean;
    components: {
        form: string[];
        overlay: string[];
        layout: string[];
        data: string[];
        navigation: string[];
        feedback: string[];
        text: string[];
    };
    allComponents: string[];
    tokens: string[];
    deps: string[];
    pathBDeps: string[];
    paths: {
        A: string;
        B: string;
    };
    caveats: string[];
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
export declare function widgetDimensionControls(matrix?: MindMatrix): {
    controlled: boolean;
    layerNames: readonly ["spread", "depthFade", "hueShift", "twist", "shrink", "breath", "loopA1", "loopB1", "loopA2", "loopB2"];
    groups: {
        inner: ("spread" | "depthFade" | "hueShift" | "twist" | "shrink" | "breath" | "loopA1" | "loopB1" | "loopA2" | "loopB2")[];
        outer: ("spread" | "depthFade" | "hueShift" | "twist" | "shrink" | "breath" | "loopA1" | "loopB1" | "loopA2" | "loopB2")[];
        loop: ("spread" | "depthFade" | "hueShift" | "twist" | "shrink" | "breath" | "loopA1" | "loopB1" | "loopA2" | "loopB2")[];
    };
    distributions: {
        d2: number[];
        d5: number[];
        d10: number[];
    };
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
export type QuantumWidgetTier = 'core' | 'modality' | 'preview' | 'meta';
export type QuantumWidgetEntry = {
    readonly id: string;
    readonly title: string;
    readonly component: string;
    readonly barrel: string;
    readonly computesGate: string;
    readonly tier: QuantumWidgetTier;
    readonly receipt: string;
};
export type QuantumWidgetPaint = {
    readonly widgetId: string;
    readonly title: string;
    readonly computes: boolean;
    readonly score?: number;
    readonly phase?: number;
    readonly tier?: string;
    readonly summary: string;
    readonly root: string;
    readonly boundary: string;
};
export declare function quantumWidgetsRegistry(): readonly QuantumWidgetEntry[];
export declare function quantumWidgetRender(widgetId: string, at?: number, matrix?: MindMatrix): QuantumWidgetPaint;
export declare function quantumWidgetsComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    registry: readonly QuantumWidgetEntry[];
    paints: QuantumWidgetPaint[];
    sota: {
        exemplary: boolean;
        techniques: string[];
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
export declare function quantumWidgetsResearch(matrix?: MindMatrix): {
    researched: boolean;
    rows: {
        id: string;
        title: string;
        barrel: string;
        gate: string;
        tier: QuantumWidgetTier;
        limit: string;
        receipt: string;
    }[];
    shadcn: 18;
    root: string;
    statement: string;
    boundary: string;
};
export declare function quantumWidgetsPanelComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    capstone: {
        computes: boolean;
        registry: readonly QuantumWidgetEntry[];
        paints: QuantumWidgetPaint[];
        sota: {
            exemplary: boolean;
            techniques: string[];
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
    registry: readonly QuantumWidgetEntry[];
    paints: QuantumWidgetPaint[];
    rows: {
        id: string;
        title: string;
        barrel: string;
        gate: string;
        tier: QuantumWidgetTier;
        paint: QuantumWidgetPaint;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
