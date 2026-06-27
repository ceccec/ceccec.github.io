/** ΛCDM dark-matter density fraction Ω_c. */
export declare const OMEGA_DARK_MATTER = 0.265;
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
