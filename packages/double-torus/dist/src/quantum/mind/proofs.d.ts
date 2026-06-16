import type { MindMatrix, MerkleStep, MerkleProof, AtomInclusionProof } from './types.ts';
export declare function merkleProof(leaves: readonly string[], leaf: string): MerkleProof;
export declare function verifyMerkleProof(leaf: string, path: readonly MerkleStep[], root: string): boolean;
export declare function quantumNetworkHashing(nodeCount?: number, itemCount?: number, matrix?: MindMatrix): {
    complete: boolean;
    nodes: number;
    items: number;
    networkRoot: string;
    convergence: boolean;
    membership: boolean;
    entangled: boolean;
    distribution: {
        node: number;
        items: number;
        root: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function atomInclusionProof(atomName?: string, matrix?: MindMatrix): AtomInclusionProof;
