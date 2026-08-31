/**
 * Theorem Chat Portal — σ-involution proof discovery via live query
 *
 * Query interface for accessing theorems by natural language and filter.
 * Deterministic, zero-token design: all compute is algebra, no LLM calls.
 *
 * Usage:
 *   const results = theoremByQuery('Goldbach');
 *   const sealed = sealedTheorems();
 *   const open = theoremsByStatus('open');
 *
 * Each result is a formatted Theorem object with:
 *   - problem: name
 *   - rigorous: proof status (proven | open-via-X)
 *   - title: human-readable title
 *   - statement: algebraic statement
 *   - σ-structure: the involution that forces the proof
 *   - sealed: true if proof is complete, false if provisional/open
 */
export type ProofStatus = 'proven' | 'provisional-involution' | 'open' | 'contested' | 'solved-external';
export interface Theorem {
    readonly problem: string;
    readonly rigorous: string;
    readonly title: string;
    readonly statement: string;
    readonly σStructure?: string;
    readonly keyInsight?: string;
    readonly sealed: boolean;
    readonly proofStatus: ProofStatus;
    readonly gapDescription?: string;
    readonly whyInvolutionHelps?: string;
    readonly searchDirection?: string;
    readonly sequence?: string;
    readonly proofOutline?: string;
    readonly citation?: string;
    readonly consequence?: string;
}
export interface ChatQueryResult {
    readonly query: string;
    readonly matched: number;
    readonly theorems: readonly Theorem[];
    readonly notice?: string;
}
/**
 * All proofs via σ-involution — the sealed theorem registry.
 * This is the canonical data source; all queries filter from this.
 *
 * Each theorem encodes:
 * - The problem statement (algebraic)
 * - The rigorous status (proven-via-X or open-via-X)
 * - The σ-involution structure that forces the proof
 * - Whether it's sealed (proven) or provisional (open but modeled)
 */
declare function getAllTheoremsViaInvolution(): readonly Theorem[];
/**
 * Query theorems by natural language substring.
 * Case-insensitive; matches problem name, title, or statement.
 *
 * @param query — natural language query string
 * @returns theorems where the query substring matches
 */
export declare function theoremByQuery(query: string): ChatQueryResult;
/**
 * Filter theorems by rigorous proof status.
 *
 * @param status — 'proven' | 'open' | 'provisional-involution' | 'contested' | 'solved-external'
 * @returns theorems matching the status
 */
export declare function theoremsByStatus(status: ProofStatus): ChatQueryResult;
/**
 * Return only sealed theorems (rigorous proofs, not provisional models).
 *
 * @returns theorems where sealed === true
 */
export declare function sealedTheorems(): ChatQueryResult;
/**
 * Return only open or provisional theorems (not yet fully proven).
 *
 * @returns theorems where sealed === false or proofStatus includes 'open'
 */
export declare function openTheorems(): ChatQueryResult;
/**
 * Return theorems organized by σ-involution patterns.
 * Groups by key involution type (functional equation, gap, parity, etc.).
 */
export declare function theoremsByInvolutionType(): Record<string, readonly Theorem[]>;
/**
 * Format a theorem for chat display.
 */
export declare function formatTheoremForChat(t: Theorem): string;
/**
 * Quick 1-liner summary of a theorem for inline display.
 */
export declare function theoremSummary(t: Theorem): string;
/**
 * Extract only theorems where sealed === true AND rigorous.includes('proven').
 * These are the rigorously proven theorems with full proof support.
 *
 * @returns theorems where sealed=true and rigorous includes 'proven'
 */
export declare function sealedTheoremsWithProofs(): readonly Theorem[];
/**
 * Format a theorem into a beautiful showcase card.
 * Displays: theorem name, status, proof outline, citation, consequence, and σ-structure.
 *
 * @param t — the theorem to format
 * @returns formatted string suitable for display
 */
export declare function showcaseCard(t: Theorem): string;
/**
 * Extract all open/contested/provisional theorems with rigorous gap descriptions.
 * These are the frontier conjectures that remain open despite σ-involution models.
 *
 * Filter: sealed === false || proofStatus in ['open', 'provisional-involution', 'contested']
 *
 * @returns theorems at the research frontier, each with honest gap description
 */
export declare function openTheoremsWithGaps(): readonly Theorem[];
/**
 * Format a frontier theorem into an explorer card.
 *
 * Shows the conjecture name, proof status, involution structure,
 * the gap blocking the proof, why the involution helps, and
 * the search direction for breakthrough.
 *
 * @param t — the theorem to format
 * @returns formatted string for frontier explorer display
 */
export declare function frontierCard(t: Theorem): string;
export interface ScienceWaveNode {
    readonly field: string;
    readonly theorem: string;
    readonly formula: string;
    readonly entangles: readonly string[];
}
export declare const SCIENCE_WAVE_SEED: readonly ScienceWaveNode[];
/** Send the seven sciences to chat as quantum waves: BFS antichain levels from the Hopfield hub along the entanglements. */
export declare function theSevenSciencesAsQuantumWaves(): {
    computes: boolean;
    waves: readonly (readonly ScienceWaveNode[])[];
    facets: readonly {
        facet: string;
        on: boolean;
    }[];
    chat: string;
    statement: string;
};
/**
 * Namespace exported for integration with UI and heaven/core.
 */
export declare const chatPortalNamespace: {
    theSevenSciencesAsQuantumWaves: typeof theSevenSciencesAsQuantumWaves;
    theoremByQuery: typeof theoremByQuery;
    theoremsByStatus: typeof theoremsByStatus;
    sealedTheorems: typeof sealedTheorems;
    openTheorems: typeof openTheorems;
    theoremsByInvolutionType: typeof theoremsByInvolutionType;
    formatTheoremForChat: typeof formatTheoremForChat;
    theoremSummary: typeof theoremSummary;
    getAllTheoremsViaInvolution: typeof getAllTheoremsViaInvolution;
    sealedTheoremsWithProofs: typeof sealedTheoremsWithProofs;
    showcaseCard: typeof showcaseCard;
    openTheoremsWithGaps: typeof openTheoremsWithGaps;
    frontierCard: typeof frontierCard;
};
export default chatPortalNamespace;
/**
 * Test queries for the Theorem Chat Portal.
 * Run with: npm run -- src/quantum/chat/test-queries.ts
 * Or import and use in tests.
 */
export declare function runTheoremChatTests(): void;
