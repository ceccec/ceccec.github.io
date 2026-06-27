/** Planck 2018 primordial spectral index n_s. */
export declare const SCALAR_SPECTRAL_INDEX_NS = 0.9649;
/** NuFit-6.0 solar neutrino mass-squared splitting Δm²₂₁ (eV²). */
export declare const NEUTRINO_DM2_SOLAR_EV2 = 0.0000749;
/** ΛCDM dark-energy density fraction Ω_Λ. */
export declare const OMEGA_DARK_ENERGY = 0.685;
/** CMB-inferred Hubble constant H₀ (km/s/Mpc, Planck 2018). */
export declare const HUBBLE_CONSTANT_CMB = 67.4;
/** Hardy–Weinberg genotype frequencies for allele frequency p. */
export declare function hardyWeinbergGenotypes(p: number): {
    AA: number;
    Aa: number;
    aa: number;
};
/** Han–Kim QIEA amplitude rotation toward target bit pole. */
export declare function qieaRotate(alpha: number, beta: number, targetBit: number, angle: number): [number, number];
/** Resonance peak gain (≈ q) for driven oscillator. */
export declare function resonancePeakGain(q: number): number;
/** Moon standstill declination magnitude — major = ε + i, minor = ε − i. */
export declare function lunarStandstillDeclinationDeg(obliquityDeg: number, major: boolean): number;
