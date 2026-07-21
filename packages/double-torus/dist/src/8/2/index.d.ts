/** Moon orbit inclination to the ecliptic (degrees). */
export declare const MOON_ORBIT_INCLINATION_DEG: number;
/** PCI* — the empirical Perturbational Complexity Index cutoff (Casali et al. 2013 introduced PCI; Casarotto et al.
 * 2016, Ann Neurol, validated the threshold): the LARGEST perturbational-complexity value recorded across all
 * UNCONSCIOUS benchmark conditions (deep NREM, midazolam/xenon/propofol anaesthesia, unresponsive-wakefulness
 * patients) — every conscious condition exceeded it, so it is the unconscious CEILING, not a free parameter. A NAMED
 * AXIOM (a measured datum, like the physical constants), not an algebraic identity — conscious above, unconscious
 * below, indexing the LEVEL of consciousness, never certifying its presence. Its status COMPUTES: see
 * thePciConsciousnessThresholdComputesAsADocumentedNamedAxiomIndexingLevelNotPresence. */
export declare const PCI_CONSCIOUSNESS_THRESHOLD = 0.31;
/** Eight-fold bāguà sciences — top-level canonical hubs (earth … heaven). */
export declare const EIGHT_FOLD_SCIENCES: readonly ["earth", "fire", "water", "wind", "mountain", "lake", "thunder", "heaven"];
export type EightFoldScience = (typeof EIGHT_FOLD_SCIENCES)[number];
/** @deprecated use CANONICAL_SCIENCE_MASK — alias for importers not yet renamed */
export declare const RENDER_UI_SCIENCE_MASK: "src/<science>/<model>/<action>";
/** Hex-digit fold — sum hex digit values from a uuid string. */
export declare function hexDigitSum(uuid: string): number;
/** Speed of sound in dry air at θ °C (m/s). */
export declare function speedOfSoundAir(tempC: number): number;
/** Isobaric counterdiffusion — peak supersaturation when fast gas enters, slow gas leaves. */
export declare function isobaricCounterdiffusion(ambientInertBar: number, gasOut: {
    tissue0Bar: number;
    inspiredBar: number;
    halfTimeMin: number;
}, gasIn: {
    tissue0Bar: number;
    inspiredBar: number;
    halfTimeMin: number;
}, timeMin: number, steps?: number): {
    series: {
        t: number;
        out: number;
        in: number;
        total: number;
        superBar: number;
    }[];
    peakSuperBar: number;
    peakAtMin: number;
    supersaturates: boolean;
};
/** Split one identifier into lowercase words — one word per folder level. */
export declare function splitCamelSegment(segment: string): readonly string[];
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export declare function hopfieldStore(patterns: readonly (readonly number[])[]): number[][];
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export declare function hopfieldEnergy(W: readonly (readonly number[])[], s: readonly number[]): number;
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export declare function hopfieldRecall(W: readonly (readonly number[])[], probe: readonly number[], steps?: number): {
    state: number[];
    energy: number;
    iters: number;
};
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export declare function bumpStep(theta: number, v: number): number;
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export declare function bumpEvolve(theta0: number, velocities: readonly number[]): number[];
export declare const STATIC_PAGE_SEED: readonly {
    slug: string;
    title: {
        en: string;
        bg: string;
    };
    description: {
        en: string;
        bg: string;
    };
    keywords: readonly string[];
    components: readonly string[];
}[];
export declare function neuroscienceInTrueFormIsThreeMathematicalPillars(): {
    computes: boolean;
    pillars: {
        neuronODE: boolean;
        memoryAttractor: boolean;
        spaceTorus: boolean;
    };
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theBrainHasPublicDataToMeasureFoldedIntoTheContentAddressedToroidalMap(): {
    computes: boolean;
    sourceCount: number;
    sources: string[];
    recall: {
        completes: boolean;
        energyDescends: boolean;
        iters: number;
    };
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function thePciConsciousnessThresholdComputesAsADocumentedNamedAxiomIndexingLevelNotPresence(): {
    computes: boolean;
    pci: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
