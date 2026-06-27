export { MAX_TAMPERING_COST_PRINCIPLE } from '../../3/7';
/** Baryon-to-photon ratio η = n_B/n_γ — CMB + BBN agree. */
export declare const BARYON_TO_PHOTON_RATIO = 6.12e-10;
/** Reversible classical CNOT — bit flip on target when control set. */
export declare function rcnot(bits: number, control: number, target: number): number;
/** Coupled calendar ring — phase wraps at period. */
export interface Ring {
    readonly name: string;
    readonly period: number;
    phase: number;
}
/** Advance coupled rings by dt — each phase wraps at its own period. */
export declare function cycleAdvance(rings: readonly Ring[], dt: number): Ring[];
/** Multiplicative orbit of generator mod modulus — groupOrbit(2,9) = [1,2,4,8,7,5]. */
export declare function groupOrbit(generator: number, modulus: number): number[];
/** Sound pressure level in dB SPL — reference 20 µPa. */
export declare function soundPressureLevelDb(pressurePa: number): number;
/** Hawking temperature T_H = ħc³/(8πGMk_B). */
export declare function hawkingTemperature(massKg: number): number;
/** Helmholtz free energy F = U − TS. */
export declare function helmholtzFreeEnergy(internalEnergyJ: number, tempK: number, entropyJPerK: number): number;
export { inductionStep } from '../../0';
export declare function caStep(rule: number, state: readonly number[]): number[];
export declare function caEvolve(rule: number, initial: readonly number[], steps: number): number[][];
