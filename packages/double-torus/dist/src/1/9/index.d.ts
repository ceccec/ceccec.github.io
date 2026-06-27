export declare const digit = 1;
export declare const role: "circuit";
export declare const forward = 2;
export declare const reverse = 0;
export declare const tensComplement = 9;
export declare const doubling = 2;
/** Digit-1 vortex gate — period-6 doubling orbit under ×2 mod 9. */
export declare function digitFold(): {
    valid: boolean;
    digit: number;
    role: "circuit";
    forward: number;
    reverse: number;
    tensComplement: number;
    doubling: number;
    orbit: number[];
    powers: {
        n: number;
        root: number;
        step: number;
    }[];
    root: string;
    receipt: string;
    statement: string;
};
/** Reversible classical NOT — bit flip (bit 0 = LSB). */
export declare function rnot(bits: number, target: number): number;
/** Reversible Toffoli — universal for classical reversible computation. */
export declare function rtoffoli(bits: number, control1: number, control2: number, target: number): number;
/** CODATA experimental electron anomalous moment a_e = (g−2)/2. */
export declare const ELECTRON_G_FACTOR_ANOMALY = 0.00115965218073;
/** Survival hazard composition — multiplicative levers clamped to (0.001, 0.999). */
export declare function composeHazard(base: number, levers: readonly number[]): number;
/** Tesla rotating field — two currents 90° apart. */
export declare function rotatingField(t: number, freq: number, phaseShift?: number): {
    bx: number;
    by: number;
    theta: number;
    omega: number;
};
/** Real-DFT magnitude spectrum in dB, clamped 0..255. */
export declare function powerSpectrum(samples: readonly number[], bins?: number): number[];
/** CCR diluent pressure = ambient − PPO₂ setpoint. */
export declare function rebreatherInertBar(ambientBar: number, ppo2SetpointBar?: number): number;
/** Zero-point energy ½ħω for one mode. */
export declare function zeroPointEnergy(angularFreqRadS: number): number;
/** Casimir pressure between ideal parallel plates. */
export declare function casimirPressure(plateGapM: number): number;
/** Wavelength λ = c/f. */
export declare function wavelengthOf(frequencyHz: number): number;
/** Larmor frequency γB₀. */
export declare function larmorFrequency(b0Tesla: number, gyromagnetic?: number): number;
