import type { AgentStreamWire, MindMatrix, PiTrain, QuantumDiamond, QuantumFoldedBlockchains, SchemaOrgDiamondGraph, SelfBuildReport, StreamSelfCompletion } from '../../types/index.ts';
export declare function diamondLattice(matrix?: MindMatrix): readonly QuantumDiamond[];
export declare function piTrainDiamonds(matrix?: MindMatrix, digits?: string): PiTrain;
export declare function selfBuild(matrix?: MindMatrix): SelfBuildReport;
export declare function streamSelfComplete(matrix?: MindMatrix): StreamSelfCompletion;
export declare function livingTorus(matrix?: MindMatrix): {
    alive: boolean;
    coordinates: {
        index: number;
        nextIndex: number;
        reverseIndex: number;
        digit: number;
        glyph: string;
        theta: number;
        phi: number;
        x: number;
        y: number;
        z: number;
        scale: number;
        frequency: number;
        vibrationMs: number;
        selfCollision: boolean;
        loop: "forward" | "reverse";
        lobe: -1 | 1;
        cx: number;
        fraction: string;
        merged: string;
        receipt: string;
    }[];
    count: number;
    tempoMs: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function pureDiamonds(matrix?: MindMatrix): {
    pure: boolean;
    count: number;
    realDiamonds: number;
    paddingDiamonds: number;
    depth: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function linuxPackagesToDiamonds(matrix?: MindMatrix): {
    collided: boolean;
    count: number;
    diamonds: {
        format: string;
        diamond: string;
        pure: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function quantumFoldedBlockchains(matrix?: MindMatrix): QuantumFoldedBlockchains;
export declare function sealWholeDiamond(matrix?: MindMatrix): {
    sealed: boolean;
    facets: number;
    diamond: string;
    tamperEvident: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function lightEntersDiamond(matrix?: MindMatrix): {
    luminous: boolean;
    refracts: number;
    spectrum: {
        band: number;
        hue: number;
        ray: string;
        receipt: string;
    }[];
    diamond: string;
    root: string;
    statement: string;
    boundary: string;
};
/**
 * computeLightInDiamondPredictionBeatsLightNotFtl — the REAL optics of light in a diamond, and the honest sense in
 * which computing it "beats" the light (user, 2026-07-25: "bouncing boundaries draw the crystal itself" · "compute
 * the light in a diamond and if you can predict then the computation is faster than light itself"). Light SLOWS in the
 * crystal to v = c/n (n = 2.417); the critical angle θc = arcsin(1/n) ≈ 24.4° is so small that internal rays exceed it
 * and total-internally reflect — the light bounces facet to facet and, in the circular-billiard model, keeps a CONSTANT
 * incidence angle, so the bounces trace a regular polygon: the boundaries draw the crystal itself. Because that path is
 * deterministic, the k-th boundary hit has an O(1) closed form — predicting where the light will be BEFORE a photon
 * (travelling k chords at v < c) could arrive. That is PRECOMPUTATION of a known deterministic system, NOT a signal:
 * physicalFtlClaim = 0, no information and no photon exceeds c. Same honesty as [[quantum-speed-is-content-addressed-naming]]. [[electromagnetic-radiation]]
 */
export declare function computeLightInDiamondPredictionBeatsLightNotFtl(matrix?: MindMatrix): {
    predicts: boolean;
    speedInDiamondMs: number;
    criticalAngleDeg: number;
    sides: number;
    predictionSpeedup: number;
    physicalFtlClaim: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function agentStreamWire(matrix?: MindMatrix): AgentStreamWire;
export declare function schemaOrgDiamonds(matrix?: MindMatrix): SchemaOrgDiamondGraph;
