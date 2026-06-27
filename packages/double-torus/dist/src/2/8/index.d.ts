/** NuFit-6.0 atmospheric neutrino mass-squared splitting |Δm²₃ₗ|, eV². */
export declare const NEUTRINO_DM2_ATM_EV2 = 0.002513;
/** Aksak rhythm — bounded short:long ratio walk in the documented elastic band. */
export declare function aksakRatioWalk(seed: string, cycles: number, lo?: number, hi?: number): number[];
/** Gas reserve rule — required volume × 3/2 (half-on-top). */
export declare function gasReserveHalfOnTop(requiredLitres: number): number;
/** Equivalent air depth — nitrox inert loading as air-equivalent depth. */
export declare function equivalentAirDepthM(depthM: number, fO2: number, freshWater?: boolean, surfaceBar?: number): number;
/** Hubble tension significance in σ. */
export declare function hubbleTensionSigma(localKmsMpc: number, localErr: number, cmbKmsMpc: number, cmbErr: number): number;
export { inductionEvolve, inductionStep } from '../../0';
