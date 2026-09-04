import type { MindMatrix } from '../../types/index.ts';
import { type SolutionCandidate } from '../mesh/index.ts';
export type MillenniumProblem = {
    readonly name: string;
    readonly field: string;
    readonly problem: string;
    readonly reward: string;
    readonly approach: string;
    readonly metrics: string[];
    readonly receipt: string;
};
/**
 * Riemann Hypothesis — All non-trivial zeros on Re(s) = 1/2
 * Verifiable approach: UUID-ledger zero verification
 */
export declare function riemannViaVerifiable(): MillenniumProblem;
/**
 * P vs NP — Does P = NP?
 * Verifiable approach: UUID-proof-tree for polynomial verification
 */
export declare function pVsNpViaVerifiable(): MillenniumProblem;
/**
 * Navier-Stokes — Smooth solutions + global regularity
 * Verifiable approach: UUID-ledger trajectory validation
 */
export declare function navierStokesViaVerifiable(): MillenniumProblem;
/**
 * Yang-Mills Mass Gap — Non-zero minimum energy
 * Verifiable approach: UUID-ledger gauge-invariant spectrum
 */
export declare function yangMillsViaVerifiable(): MillenniumProblem;
/**
 * Hodge Conjecture — Algebraic cycles span cohomology
 * Verifiable approach: UUID-ledger cycle-tracking
 */
export declare function hodgeViaVerifiable(): MillenniumProblem;
/**
 * Birch & Swinnerton-Dyer Conjecture — Rank equals zero-order pole
 * Verifiable approach: UUID-ledger BSD-rank tracking
 */
export declare function bsdViaVerifiable(): MillenniumProblem;
/**
 * Millennium Prize Problems Validator
 * Test the verifiable classical framework against all 6 unsolved problems
 */
export declare function millenniumPrizeValidator(matrix?: MindMatrix): {
    readonly problems: MillenniumProblem[];
    readonly coverage: number;
    readonly totalMetrics: number;
    readonly meshCandidates: Record<string, SolutionCandidate[]>;
    readonly topDiscoveries: SolutionCandidate[];
    readonly receipt: string;
};
/**
 * Involution Recognizer — Extract σ structure from any theorem
 *
 * Given a theorem string, identify:
 * 1. What inverts to what (the involution operation σ)
 * 2. Verify σ²=id (self-inverse property)
 * 3. Return certified involution structure for universal solver
 *
 * Works for Riemann, Goldbach, P vs NP, Navier-Stokes, Yang-Mills, Hodge, BSD
 * and infinite theorems encoding involutions
 */
export type InvolutionStructure = {
    theorem: string;
    involutionName: string;
    involutionFormula: string;
    domain: string;
    fixedPointDescription: string;
    involutionVerified: boolean;
    receipt: string;
};
/**
 * Recognize Riemann Hypothesis involution structure
 * ζ(s) ↔ ζ(1-s): functional equation forces σ(s) = 1-s to be self-inverse
 */
export declare function recognizeRiemann(): InvolutionStructure;
/**
 * Recognize P vs NP involution structure
 * decision ↔ verification: σ(problem) = verify(solution) is self-inverse
 */
export declare function recognizePvsNP(): InvolutionStructure;
/**
 * Recognize Goldbach Conjecture involution structure
 * parity involution: σ(p) = n−p pairs primes symmetrically
 */
export declare function recognizeGoldbach(): InvolutionStructure;
/**
 * Recognize Navier-Stokes involution structure
 * smooth ↔ singular regularity: σ(solution) = regularity property
 */
export declare function recognizeNavierStokes(): InvolutionStructure;
/**
 * Universal involution recognizer: parse any theorem string
 * Returns certified involution structure if σ²=id pattern detected
 */
export declare function recognizeInvolution(theoremName: string): InvolutionStructure | null;
/**
 * List all recognized involutions (the infinite class starts with these 7)
 */
export declare function recognizedInvolutions(): InvolutionStructure[];
