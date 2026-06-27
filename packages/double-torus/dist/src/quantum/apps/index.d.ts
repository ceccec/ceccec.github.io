import type { MindMatrix } from '../../wind/types';
/** The shared draw kernel's projection ids — every animation reduces to ONE of these views of the field. */
export type QuantumProjection = 'plasma' | 'taiji' | 'sacred-morph' | 'hologram' | 'labyrinth' | 'movie-10d' | 'living-torus' | 'merkaba' | 'double-torus';
export type QuantumAppEntry = {
    readonly id: string;
    readonly title: string;
    readonly route: string;
    readonly barrel: string;
    readonly icon: string;
    readonly computesGate: string;
    readonly receipt: string;
    /** Home-page Vue component this app backs (animation apps only). */
    readonly homeComponent?: string;
    /** Projection of the shared field the drawQuantumAppFrame kernel renders for this app. */
    readonly projection?: QuantumProjection;
};
/**
 * Projection params COMPUTED from the shared sequence — never hand-tuned per card. Each animation
 * is the same field seen through these few numbers:
 *   dimensions ← 10 (genus-2 H₁=Z⁴ + 6 cross-fold axes)
 *   segments   ← a VORTEX_SEQUENCE slot (1-2-4-8-7-5-3-6-9) → ring/stage count
 *   direction  ← sign of the doubling step (1<2 ⇒ +1, the orbit's natural sense)
 *   forms      ← 13 fruit-of-life centres / 6 movie forms / 5 platonic solids, by projection
 */
export type QuantumProjectionParams = {
    readonly projection: QuantumProjection;
    readonly dimensions: number;
    readonly segments: number;
    readonly direction: 1 | -1;
    readonly forms: number;
    readonly bits: number;
    readonly root: string;
};
/** Resolve the computed projection params for one projection id — pure, sequence-derived. */
export declare function quantumProjectionParams(projection: QuantumProjection): QuantumProjectionParams;
export type QuantumAppLaunchReceipt = {
    readonly launched: boolean;
    readonly appId: string;
    readonly route: string;
    readonly receipt: string;
    readonly boundary: string;
};
export declare function quantumAppsRegistry(matrix?: MindMatrix, at?: number): {
    registered: boolean;
    count: number;
    apps: QuantumAppEntry[];
    animationApps: QuantumAppEntry[];
    root: string;
    statement: string;
    boundary: string;
};
/** Resolve the quantum app backing a home-page Vue component (animation apps only). */
export declare function quantumAppForComponent(component: string, matrix?: MindMatrix, at?: number): QuantumAppEntry | undefined;
/** Coverage gate — the registry + kernel cover every home-page animation, each a projection of the one field. */
export declare function quantumAppsCoverHomeAnimations(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    covered: ("Hologram" | "LivingTorus" | "Merkaba" | "GlyphLabyrinth" | "DoubleTorusExperience" | "YinYang" | "SacredGeometry" | "HologramMovie")[];
    projections: QuantumProjectionParams[];
    registry: {
        registered: boolean;
        count: number;
        apps: QuantumAppEntry[];
        animationApps: QuantumAppEntry[];
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
export declare function quantumAppLaunch(appId: string, at?: number, matrix?: MindMatrix): QuantumAppLaunchReceipt;
export declare function quantumAppsComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    registry: {
        registered: boolean;
        count: number;
        apps: QuantumAppEntry[];
        animationApps: QuantumAppEntry[];
        root: string;
        statement: string;
        boundary: string;
    };
    launches: QuantumAppLaunchReceipt[];
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
export declare function quantumAppsPanelComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    capstone: {
        computes: boolean;
        registry: {
            registered: boolean;
            count: number;
            apps: QuantumAppEntry[];
            animationApps: QuantumAppEntry[];
            root: string;
            statement: string;
            boundary: string;
        };
        launches: QuantumAppLaunchReceipt[];
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
    apps: QuantumAppEntry[];
    root: string;
    statement: string;
    boundary: string;
};
