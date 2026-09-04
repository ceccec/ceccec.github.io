import type { MindMatrix } from '../../types/index.ts';
/** The shadcn primitives actually vendored as Ui* SFCs in .vitepress/theme/components/ui (Path A). */
export declare const SHADCN_COMPOUND_SFCS: readonly ["AccordionItem", "CardContent", "TabsContent", "TabsList", "TabsTrigger"];
/** The 18 canonical primitives — the ONE seed, at its domain home; lake/widgets re-exports it. */
export declare const SHADCN_PRIMITIVE_NAMES: readonly ["Button", "Badge", "Card", "Input", "Label", "Textarea", "Checkbox", "Switch", "Separator", "Avatar", "Alert", "Progress", "Skeleton", "AspectRatio", "Tabs", "Accordion", "Tooltip", "Collapsible"];
export declare const SHADCN_IMPLEMENTED: readonly string[];
/** cva variant axes carried by the implemented primitives (variant/size enumerations). */
export declare const SHADCN_VARIANTS: {
    readonly Button: {
        readonly variant: readonly ["default", "secondary", "outline", "ghost", "destructive", "link"];
        readonly size: readonly ["default", "sm", "lg", "icon"];
    };
    readonly Badge: {
        readonly variant: readonly ["default", "secondary", "outline", "destructive"];
    };
    readonly Alert: {
        readonly variant: readonly ["default", "destructive"];
    };
};
/** Design-system CSS-variable tokens (oklch new-york), bridged to VitePress --vp-* and .dark. */
export declare const SHADCN_TOKENS: readonly ["--background", "--foreground", "--card", "--popover", "--primary", "--secondary", "--muted", "--accent", "--destructive", "--border", "--input", "--ring", "--radius"];
/** The cn() pattern the theme mount re-exports — tailwind-merge over clsx, the one class composer. */
export declare const CN_PATTERN: "cn(...inputs) = twMerge(clsx(inputs)) \u2014 single class-name composer; theme re-exports from .vitepress/lib/cn.ts";
/** Pure, dependency-free class join — the deterministic shadow of cn() for sealed callers (no twMerge dedupe). */
export declare function cn(...inputs: Array<string | false | null | undefined>): string;
/** The design-system research surface — sources, integration paths, the implemented-vs-graph delta. */
export declare function shadcnResearch(matrix?: MindMatrix): {
    researched: boolean;
    sections: {
        id: string;
        title: string;
        note: string;
        receipt: string;
    }[];
    root: string;
    boundary: string;
};
export declare function shadcnQuantumLens(matrix?: MindMatrix): {
    opens: boolean;
    tensorDim: number;
    hexagramSpace: number;
    forestDepth: number;
    valueAssignments: number;
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
/** One gate — the canonical design-system registry composes with the 64-component graph at call time. */
export declare function shadcnComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    graph: {
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
    research: {
        researched: boolean;
        sections: {
            id: string;
            title: string;
            note: string;
            receipt: string;
        }[];
        root: string;
        boundary: string;
    };
    implemented: readonly string[];
    tokens: readonly ["--background", "--foreground", "--card", "--popover", "--primary", "--secondary", "--muted", "--accent", "--destructive", "--border", "--input", "--ring", "--radius"];
    variants: {
        readonly Button: {
            readonly variant: readonly ["default", "secondary", "outline", "ghost", "destructive", "link"];
            readonly size: readonly ["default", "sm", "lg", "icon"];
        };
        readonly Badge: {
            readonly variant: readonly ["default", "secondary", "outline", "destructive"];
        };
        readonly Alert: {
            readonly variant: readonly ["default", "destructive"];
        };
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
