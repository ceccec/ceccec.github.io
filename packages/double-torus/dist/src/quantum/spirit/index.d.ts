export declare const dual = "src/water/double";
/** tiers358 — the ONE 3-5-8 tier core (twin-shell parameterization, quantum:dry-dupe worklist): music358,
 * emf358, computerDesign, chakrasAura shared one body differing only in data — the dataset IS the parameter
 * ([[feedback-fewest-words-combinatorial-functions]]). `indexed` preserves each caller's original address shape
 * (`key:index:member` vs `key:member`), so every content-address stays byte-identical to the pre-merge fold. */
export declare function tiers358(key: string, indexed: boolean, tiers: readonly {
    tier: number;
    name: string;
    members: readonly string[];
}[], statement: string, boundary: string): {
    complete: boolean;
    tiers: readonly {
        tier: number;
        name: string;
        members: readonly string[];
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₄ · Lake · joyous */
export declare function chakrasAura(): {
    complete: boolean;
    tiers: readonly {
        tier: number;
        name: string;
        members: readonly string[];
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₄ · Lake · joyous */
export declare function humanDesign(): {
    complete: boolean;
    gates: number;
    channels: 36;
    centers: 9;
    tiers: {
        tier: number;
        name: string;
        members: string[];
    }[];
    wheel: {
        verified: boolean;
        computes: boolean;
        gateArcDeg: number;
        lineArcDeg: number;
        gate41StartDeg: number;
        designSunArcDeg: number;
        bodies: ("Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto")[];
        bodyCount: 13;
        gates: (2 | 16 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6 | 27 | 54 | 64 | 20 | 46 | 61 | 53 | 10 | 55 | 34 | 21 | 13 | 17 | 12 | 18 | 51 | 23 | 31 | 32 | 42 | 63 | 14 | 41 | 19 | 49 | 30 | 37 | 22 | 36 | 25 | 24 | 35 | 45 | 15 | 52 | 39 | 62 | 56 | 33 | 44 | 28 | 50 | 57 | 48 | 47 | 40 | 59 | 29 | 26 | 11 | 58 | 38 | 60 | 43)[];
        starts: number[];
        sample: {
            gate: number;
            line: number;
            index: number;
            startDeg: number;
        };
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
    lattice: {
        verified: boolean;
        computes: boolean;
        centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
        centerCount: 9;
        channels: {
            a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
            b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
            key: string;
            from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
            to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
        }[];
        channelCount: 36;
        gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
    root: string;
    statement: string;
    boundary: string;
};
/** Verified Rave Mandala wheel — structure-only (Gate 41 @ 302°, 5.625°/gate, Design Sun −88°, 13 bodies, no Chiron). */
export declare const RAVE_MANDALA_GATE_ORDER: readonly [41, 19, 13, 49, 30, 55, 37, 63, 22, 36, 25, 17, 21, 51, 42, 3, 27, 24, 2, 23, 8, 20, 16, 35, 45, 12, 15, 52, 39, 53, 62, 56, 31, 7, 33, 44, 28, 50, 32, 57, 48, 18, 46, 6, 47, 64, 40, 59, 29, 4, 5, 26, 11, 10, 58, 38, 54, 61, 60, 43, 1, 34, 9, 14];
/** Gate arc = 360/64 — sealed lattice form (not a hand-typed 5.625). */
export declare const RAVE_GATE_ARC_DEG: number;
/** Line arc = gate/6. */
export declare const RAVE_LINE_ARC_DEG: number;
/** Gate 41 start longitude — verified anchor 2° Aquarius = 300+2 (user W3). */
export declare const RAVE_GATE_41_START_DEG: number;
/** Design layer = Sun longitude − 88° of solar arc (not calendar days). */
export declare const RAVE_DESIGN_SUN_ARC_DEG: number;
/** Core activation bodies — Chiron is NOT in the standard 13. */
export declare const RAVE_BODIES_13: readonly ["Sun", "Earth", "Moon", "North Node", "South Node", "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];
/** Nine BodyGraph centers — structure ids only (no aura / type prose). */
export declare const RAVE_CENTERS_9: readonly ["Head", "Ajna", "Throat", "G", "Heart", "Sacral", "SolarPlexus", "Spleen", "Root"];
/** Gate sets per center — partition of 1..64 (structure-only; public BodyGraph lattice). */
export declare const RAVE_CENTER_GATES: {
    readonly Head: readonly [61, 63, 64];
    readonly Ajna: readonly [4, 11, 17, 24, 43, 47];
    readonly Throat: readonly [8, 12, 16, 20, 23, 31, 33, 35, 45, 56, 62];
    readonly G: readonly [1, 2, 7, 10, 13, 15, 25, 46];
    readonly Heart: readonly [21, 26, 40, 51];
    readonly Sacral: readonly [3, 5, 9, 14, 27, 29, 34, 42, 59];
    readonly SolarPlexus: readonly [6, 22, 30, 36, 37, 49, 55];
    readonly Spleen: readonly [18, 28, 32, 44, 48, 50, 57];
    readonly Root: readonly [19, 38, 39, 41, 52, 53, 54, 58, 60];
};
/**
 * 36 channels as sorted [lo, hi] gate pairs.
 * Integration multi-degree: gates 10 · 20 · 34 · 57 each appear in 3 channels (8 shared slots = 72−64).
 */
export declare const RAVE_CHANNELS_36: readonly [readonly [1, 8], readonly [2, 14], readonly [3, 60], readonly [4, 63], readonly [5, 15], readonly [6, 59], readonly [7, 31], readonly [9, 52], readonly [10, 20], readonly [10, 34], readonly [10, 57], readonly [11, 56], readonly [12, 22], readonly [13, 33], readonly [16, 48], readonly [17, 62], readonly [18, 58], readonly [19, 49], readonly [20, 34], readonly [20, 57], readonly [21, 45], readonly [23, 43], readonly [24, 61], readonly [25, 51], readonly [26, 44], readonly [27, 50], readonly [28, 38], readonly [29, 46], readonly [30, 41], readonly [32, 54], readonly [34, 57], readonly [35, 36], readonly [37, 40], readonly [39, 55], readonly [42, 53], readonly [47, 64]];
/** Gate → center lookup (derived once from RAVE_CENTER_GATES). */
export declare function raveCenterOfGate(gate: number): (typeof RAVE_CENTERS_9)[number] | undefined;
/** Channels whose both gates are in the activated set (structure definition, not personality claim). */
export declare function raveDefinedChannels(activated: ReadonlySet<number> | readonly number[]): {
    a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
    b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
    key: string;
    from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
    to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
}[];
/**
 * HD W5 — sealed 36 channels + gate→center partition.
 * Composes with wheel W3; chart activation composes Meeus W4 separately.
 */
export declare function humanDesignChannelsAndCenters(matrixRoot?: string): {
    verified: boolean;
    computes: boolean;
    centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
    centerCount: 9;
    channels: {
        a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
        b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
        key: string;
        from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
        to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
    }[];
    channelCount: 36;
    gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
/** Longitude → gate.line on the verified wheel (tropical ecliptic degrees). */
export declare function raveMandalaGateLineAt(longitudeDeg: number): {
    gate: number;
    line: number;
    index: number;
    startDeg: number;
};
/**
 * Verified Human Design wheel — DOCUMENTED structure for longitude→gate.
 * Cross-checked: 360/64 gate arc; Gate 41 opens the wheel at 302°; Design = Sun−88°;
 * 13 bodies (no Chiron). Predictive/aura claims stay flagged elsewhere.
 */
export declare function humanDesignVerifiedWheel(matrixRoot?: string): {
    verified: boolean;
    computes: boolean;
    gateArcDeg: number;
    lineArcDeg: number;
    gate41StartDeg: number;
    designSunArcDeg: number;
    bodies: ("Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto")[];
    bodyCount: 13;
    gates: (2 | 16 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6 | 27 | 54 | 64 | 20 | 46 | 61 | 53 | 10 | 55 | 34 | 21 | 13 | 17 | 12 | 18 | 51 | 23 | 31 | 32 | 42 | 63 | 14 | 41 | 19 | 49 | 30 | 37 | 22 | 36 | 25 | 24 | 35 | 45 | 15 | 52 | 39 | 62 | 56 | 33 | 44 | 28 | 50 | 57 | 48 | 47 | 40 | 59 | 29 | 26 | 11 | 58 | 38 | 60 | 43)[];
    starts: number[];
    sample: {
        gate: number;
        line: number;
        index: number;
        startDeg: number;
    };
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
/** @rosetta ✦₄ · Lake · joyous */
export declare function yinYang(): {
    complete: boolean;
    taiji: {
        symbol: string;
        source: string;
    };
    tiers: {
        tier: number;
        name: string;
        members: string[];
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₄ · Lake · joyous */
export declare function dimensions(): {
    enriched: boolean;
    levels: (5 | 8 | 3)[];
    fibonacci: boolean;
    ladder: {
        d: 5 | 8 | 3;
        label: string;
        extraPlanes: number;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₄ · Lake · joyous */
export declare function deviceSensors(): {
    tiered: boolean;
    tiers: number[];
    count: number;
    sensors: {
        tier: number;
        kind: string;
        sensor: string;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₄ · Lake · joyous */
export declare function dualities(): {
    compared: boolean;
    tiers: number[];
    fibonacci: boolean;
    count: number;
    dualities: {
        tier: number;
        kind: string;
        left: string;
        right: string;
        forward: string;
        reverse: string;
        ordered: boolean;
        bidirectional: boolean;
        root: string;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
