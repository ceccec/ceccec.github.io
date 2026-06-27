export declare function initialBearing(lat1: number, lon1: number, lat2: number, lon2: number): number;
export declare const OBLIQUITY_J2000_DEG = 23.4392811;
export declare function obliquityAtEpoch(yearsBeforePresent: number): number;
/** ¹H gyromagnetic ratio γ/2π (Hz/T, CODATA) — the MRI Larmor constant. */
export declare const PROTON_GYROMAGNETIC = 42577478.461;
/** ZHL-16 helium half-times per tissue compartment (minutes). */
export declare const ZHL16_HE_HALFTIMES: readonly number[];
/** Late-universe distance-ladder Hubble constant H₀ (km/s/Mpc, SH0ES). */
export declare const HUBBLE_CONSTANT_LOCAL = 73;
/** Driven damped harmonic oscillator — steady-state resonance amplitude A(ω). */
export declare function resonantAmplitude(omega: number, omega0: number, q: number): number;
/** Multi-mode resonant oscillator bank driven by stochastic kicks. */
export declare function oscillatorBank(seed: string, modes: readonly {
    freq: number;
    q: number;
}[], samples: number, dt?: number): number[];
/** Casimir vacuum energy per unit area between parallel plates (J/m²). */
export declare function casimirEnergyPerArea(plateGapM: number): number;
/** Bekenstein–Hawking black-hole entropy in bits — proportional to horizon area. */
export declare function blackHoleEntropyBits(massKg: number): number;
/** Cantor diagonal — flip the i-th bit of the i-th row; escapes any enumeration. */
export declare function cantorDiagonal(rows: ReadonlyArray<ReadonlyArray<0 | 1>>): Array<0 | 1>;
/** Quantum Zeno survival probability after n rapid measurements. */
export declare function quantumZeno(n: number): number;
/** Frequency from wavelength f = c/λ (Hz) — re-export from SI hub. */
export { frequencyOf } from '../../3/7';
/** Sweepable phase gate diag(1, e^{iθ}) in applyGate flat format — interferometer fringe P(0)=cos²(φ/2). */
export declare function phase(theta: number): number[];
/** Fractional lag of the rotor behind the synchronous field (induction motor slip). */
export declare function slip(wSync: number, wRotor: number): number;
