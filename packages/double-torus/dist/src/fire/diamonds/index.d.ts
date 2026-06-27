import type { AgentStreamWire, MindMatrix, PiTrain, QuantumDiamond, QuantumFoldedBlockchains, SchemaOrgDiamondGraph, SelfBuildReport, StreamSelfCompletion } from '../../wind/types';
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
export declare function agentStreamWire(matrix?: MindMatrix): AgentStreamWire;
export declare function schemaOrgDiamonds(matrix?: MindMatrix): SchemaOrgDiamondGraph;
