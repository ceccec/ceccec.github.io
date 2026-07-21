/** ΛCDM dark-matter density fraction Ω_c. */
export declare const OMEGA_DARK_MATTER: number;
/** Carnot efficiency η = 1 − T_c/T_h (kelvin). */
export declare function carnotEfficiency(coldK: number, hotK: number): number;
/** Haversine great-circle distance (km) between two lat/long points. */
export declare function greatCircleKm(lat1: number, lon1: number, lat2: number, lon2: number): number;
/** UUID duality — content (first four groups), sans link suffix. */
export declare function uuidDuality(uuid: string): string;
/** Tamper-evidence — folding any tamper token changes the address. */
export declare function tamperEvident(root: string): boolean;
/** Unruh temperature T_U = ħa/(2πck_B). */
export declare function unruhTemperature(accelerationMS2: number): number;
/** Sunset azimuth (degrees) — 360 − sunrise azimuth. */
export declare function setAzimuthDeg(latDeg: number, declinationDeg: number, horizonAltitudeDeg?: number): number | null;
/** One-way public key from private key and public roots. */
export declare function derivePublicKey(privateKey: string, publicRoots: readonly string[]): string;
/** text contains every token (numbers stringified). */
export declare function covers(text: string, tokens: readonly (string | number)[]): boolean;
/** list has the expected length and every entry is content-addressed. */
export declare function addressed(list: readonly {
    uuid: string;
}[], expected: number): boolean;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function foldMagmaLaws(): {
    magma: boolean;
    count: number;
    facets: {
        facet: string;
        on: boolean;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** src/5/0\5 = src/5/5 — the fold at the void (user realization, 2026-07-16). Fold the expression
 * at its central 0: the slash mirrors to the backslash, 5 lands on 5, and the notation closes to
 * 5/5 = 1 — computed on the string itself. Underneath the notation, one fixed-point theorem in
 * three guises: 5 is the ONLY digit the station mirror d↦10−d fixes; 5 is the ONLY residue the
 * void-reflection x↦1−x fixes mod 9; and 5 = 2⁻¹ (mod 9) — the halving digit, the inversion image
 * of the generator. The self-inverse station is where this file already keeps tamper-evidence:
 * self-verification lives at the self-paired address. */
export declare function voidFoldFixedPoint(): {
    computes: boolean;
    fixedStation: number;
    fixedVoid: number;
    halvingDigit: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
