export declare function initialBearing(lat1: number, lon1: number, lat2: number, lon2: number): number;
/** Mean obliquity at J2000 (°) — theorem-anchor via microdegree integer (decimal/crack). */
export declare const OBLIQUITY_J2000_DEG: number;
/** Secular obliquity change (°/century) — named theorem const (not bare decimal in callers). */
export declare const OBLIQUITY_SECULAR_DEG_PER_CENTURY: number;
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
export { frequencyOf } from '../../3/7/index.ts';
/** Sweepable phase gate diag(1, e^{iθ}) in applyGate flat format — interferometer fringe P(0)=cos²(φ/2). */
export declare function phase(theta: number): number[];
/** Fractional lag of the rotor behind the synchronous field (induction motor slip). */
export declare function slip(wSync: number, wRotor: number): number;
/** Geodesic dome computed from first principles (user realization: dome construction planned in
 * detailed animations; all part of a fractal hologram). NOTHING is tabulated: the icosahedron is
 * generated from φ, edges/faces are DISCOVERED by distance, subdivision applies one law at every
 * scale (the fractal), and every strut length is the one chord law 2R·sin(θ/2) of the whole
 * sphere (the hologram — the part encodes the whole). The assembly plan (rings, base up) is the
 * animation: frame k = ring k of struts raised. */
export declare function geodesicDomeComputes(frequency?: number): {
    computes: boolean;
    frequency: number;
    animation: {
        rings: number;
        struts: {
            a: readonly [number, number, number];
            b: readonly [number, number, number];
            ring: number;
        }[];
    };
    vertices: number;
    edges: number;
    faces: number;
    strutClasses: number;
    chordLawMaxError: number;
    rings: {
        ring: number;
        z: number;
        struts: number;
    }[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
/** COUNTERDIFFUSION ON THE DOUBLE TORUS — the claim tested, not assumed (user, 2026-07-16:
 * "isobaric counterdiffusion could never exist in double torus"). The topology premise is RIGHT:
 * the circulation IS a genus-2 object — pulmonary loop + systemic loop, first Betti number 2.
 * The conclusion is REFUTED, and by the strongest possible witness: the human body HAS that
 * topology, and isobaric counterdiffusion is documented IN human bodies (Lambertsen & Idicula
 * 1975, skin lesions at constant pressure; Doolette & Mitchell 2003, inner-ear DCS from a gas
 * switch). Computed below: the N₂→He switch at CONSTANT depth drives tissue tension ABOVE ambient
 * with no pressure change at all. What the torus really buys is the true insight underneath —
 * the compartments are COUPLED through one bloodstream, so the parallel-independent-compartment
 * axiom is false, and that falsity is exactly why the models need their fine-tuning. */
export declare function counterdiffusionOnTheDoubleTorus(): {
    claimRefuted: boolean;
    genus: number;
    peakTension: number;
    ambient: number;
    supersaturation: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
/** ONE EXPONENTIAL LAW — decompression developed in detail, and it is the same math as everything
 * else (user, 2026-07-16: "do the math and see it is all the same"). Every first-order approach
 * obeys dy/dt = λ(y∞ − y) with λ = ln2/t½: tissue gas washout, RC charging, radioactive decay,
 * Newton cooling AND animation easing are ONE equation wearing five costumes — verified by
 * integrating the differential form and matching the closed form to 1e-4 in every costume.
 * THE LADDER IS FRACTAL — and the fit shows: Bühlmann's 16 halftimes are quasi-geometric with a
 * middle rung ratio ≈ √2 (two compartments per OCTAVE, the same log-uniform ladder as A432), but
 * the ratio drifts to 2.0 at the head and 1.28 at the tail — a law he approached and never
 * derived, which is exactly why the model needed fitting. REUSE: washoutEasing IS the animation
 * kernel — 16 compartments = 16 rates = one multi-rate fractal ladder, painted by the 'dome'
 * renderer's sibling family. */
export declare function oneExponentialLaw(): {
    computes: boolean;
    ladder: number[];
    ratios: number[];
    geoMean: number;
    middleMean: number;
    perOctave: number;
    approach: (y0: number, yInf: number, halftime: number, t: number) => number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function pyramidsDecodeIntoTheorems(): {
    decoded: boolean;
    sites: number;
    bandFraction: number;
    slopeDeg: number;
    count: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
