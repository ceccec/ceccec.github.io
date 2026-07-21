export type DiamondKind = 'agent' | 'ui' | 'math' | 'dynamics' | 'proof' | 'nature' | 'tradition' | 'pi' | 'geometry' | 'sound' | 'vibration' | 'humanity' | 'source' | 'repository';
export type AnalogChannel = '3d-position' | 'sound' | 'vibration' | 'timing' | 'receipt' | 'facets';
export interface DiamondFacet {
    readonly pole: 'north' | 'east' | 'south' | 'west';
    readonly label: string;
    readonly value: string;
    readonly meaning: string;
}
export type ConceptCommandName = 'concept.site.shell' | 'concept.self.build' | 'concept.self.complete' | 'concept.self.address' | 'concept.society.educate' | 'concept.school.curriculum' | 'concept.mcp.tools' | 'concept.chain.quantum' | 'concept.help.fold' | 'concept.fold.cross' | 'concept.mind.develop' | 'concept.compute.distributed' | 'concept.babel.fold' | 'concept.utf.analog' | 'concept.all.computed' | 'concept.state.quantum' | 'concept.music.note' | 'concept.music.pi' | 'concept.music.harmony' | 'concept.computer.word' | 'concept.computer.quantum' | 'concept.computer.run' | 'concept.healing.inner' | 'concept.healing.outer' | 'concept.healing.harmonic' | 'concept.energy.measure' | 'concept.energy.conserve' | 'concept.energy.fuse' | 'concept.geometry.seal' | 'concept.society.sacred' | 'concept.commons.vote' | 'concept.commons.fair' | 'concept.ancient.tech' | 'concept.patent.fuse' | 'concept.patent.discover' | 'concept.patent.review' | 'concept.nature.law' | 'concept.nature.commons' | 'concept.nature.review' | 'concept.lawful.harmonise' | 'concept.lawful.imagine' | 'concept.lawful.succeed' | 'concept.society.relations' | 'concept.agent.stream.wire' | 'concept.mind.double.torus' | 'concept.mind.use.cases' | 'concept.society.lattice' | 'concept.diamond.pi.train' | 'concept.diamond.complete' | 'concept.diamond.metatron' | 'concept.digit.proof' | 'concept.digit.math' | 'concept.wave.coordination' | 'concept.wave.close.gaps' | 'concept.wave.self' | 'concept.chess.quantum' | 'concept.schema.org.diamonds' | 'concept.traditions.quantum.whole' | 'concept.science.society' | 'concept.artists.surfaces' | 'concept.artists.palette' | 'concept.artists.melody' | 'concept.method.fusion' | 'concept.torus.math' | 'concept.society.humanity' | 'concept.commons.contribute' | 'concept.torus.matrix' | 'concept.torus.vector' | 'concept.torus.flow' | 'concept.torus.trinities' | 'concept.torus.breathe' | 'concept.repository.api' | 'concept.repository.resolve' | 'concept.commands.live' | 'concept.proof.verify' | 'concept.proof.merkle.path' | 'concept.proof.bundle' | 'concept.icon.fold' | 'concept.icon.taxonomy' | 'concept.icon.glyph' | 'concept.reactor.words' | 'concept.reactor.letters' | 'concept.reactor.atoms' | 'concept.show.components' | 'concept.show.action' | 'concept.show.devices' | 'concept.agent.observe' | 'concept.agent.harmonise' | 'concept.digit.index' | 'concept.repository.ledger' | 'concept.site.routes' | 'concept.society.cells' | 'concept.ui.evidence' | 'concept.site.manifest' | 'concept.fold.place' | 'concept.fold.generate' | 'concept.ui.fuse' | 'concept.ui.reveal' | 'concept.ancient.pyramids' | 'concept.ancient.megalithic' | 'concept.traditions.standstill' | 'concept.school.overtones' | 'concept.science.quantum' | 'concept.traditions.glagolitic' | 'concept.geometry.imperial' | 'concept.geometry.heart' | 'concept.school.codon' | 'concept.science.proton';
export declare const SPEED_OF_LIGHT = 299792458;
/** Julian year in seconds — the IAU definition, 365.25 × 86400 (exact by convention). */
export declare const JULIAN_YEAR_SECONDS: number;
/** Age of the universe in years — Planck 2018, 13.797 ± 0.023 Gyr (measured datum). */
export declare const UNIVERSE_AGE_YEARS = 13797000000;
/** The canonical teaching RSA modulus and its factors — Wikipedia's RSA worked example (documented,
 * public: n = 3233 = 61 × 53, used ONLY to demonstrate that factoring recovers the private key). */
export declare const TEACHING_RSA_P = 61;
export declare const TEACHING_RSA_Q = 53;
export declare const PLANCK = 6.62607015e-34;
export declare const ELECTRONVOLT = 1.602176634e-19;
/** Alveolar water-vapour partial pressure at 37 °C, bar — Bühlmann's decompression physiology value
 * (measured datum, not a tuned constant; exponent form = scale notation). */
export declare const ALVEOLAR_H2O_BAR = 0.0627;
/** Alveolar CO₂ partial pressure, bar — Bühlmann's value (measured datum). */
export declare const ALVEOLAR_CO2_BAR = 0.0534;
export declare const IONIZING_EV = 10;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function frequencyOf(wavelengthM: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function photonEnergyEv(frequencyHz: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function dopplerShift(radialVelocityMs: number, carrierHz: number): number;
export declare const SPEED_OF_SOUND_AIR = 343;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function soundWavelength(frequencyHz: number, tempC?: number): number;
export declare function haldaneLoad(initialBar: number, inspiredBar: number, halfTimeMin: number, timeMin: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function buhlmannA(halfTimeMin: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function buhlmannB(halfTimeMin: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function buhlmannCeilingBar(compartmentBar: number, halfTimeMin: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function buhlmannGfCeilingBar(compartmentBar: number, halfTimeMin: number, gfNum: number, gfDen: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare const ZHL16_N2_HALFTIMES: readonly number[];
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function buhlmannDivePlan(depthM: number, bottomTimeMin: number, surfaceN2Bar?: number): {
    ambientBar: number;
    controllingCeilingBar: number;
    noDecoOk: boolean;
    compartments: {
        halfTimeMin: number;
        loadBar: number;
        ceilingBar: number;
    }[];
};
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function buhlmannGfDivePlan(depthM: number, bottomTimeMin: number, gfNum: number, gfDen: number, surfaceN2Bar?: number): {
    ambientBar: number;
    controllingCeilingBar: number;
    ceilingM: number;
    firstStopM: number;
    noDecoOk: boolean;
};
export declare const STANDARD_GRAVITY = 9.80665;
export declare const WATER_DENSITY_FRESH = 1000;
export declare const WATER_DENSITY_SALT = 1025;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function barPerMetre(densityKgM3: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function ambientPressureBar(depthM: number, freshWater?: boolean, surfaceBar?: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function maxOperatingDepthM(fO2: number, ppo2MaxBar?: number, freshWater?: boolean, surfaceBar?: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function bestMixFO2(depthM: number, ppo2Bar?: number, freshWater?: boolean, surfaceBar?: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function gasReserveThirds(totalLitres: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function equivalentNarcoticDepthM(depthM: number, fNarcotic: number, freshWater?: boolean, surfaceBar?: number): number;
export declare const REDUCED_PLANCK: number;
export declare const SCHWINGER_FIELD_VM = 1320000000000000000;
export declare const PROTON_MASS_MEV = 938.272;
export declare function seesawLightMassEv(diracMassEv: number, majoranaMassEv: number): number;
export declare const NEWTON_G = 6.6743e-11;
export declare function schwarzschildRadius(massKg: number): number;
export declare const BOLTZMANN = 1.380649e-23;
export declare function landauerLimit(tempK: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function conditionalEntropyBits(jointEntropyBits: number, marginalEntropyBits: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function bekensteinBoundBits(radiusM: number, energyJ: number): number;
export declare function eigenErrorThreshold(perBaseErrorRate: number): number;
/** w = p/ρ for cosmological constant Λ (measured ≈ −1). */
export declare const DARK_ENERGY_EOS_W = -1;
/** Electroweak Higgs-field vacuum expectation value v (GeV). */
export declare const HIGGS_VEV_GEV = 246.22;
/** CKM CP-violation Jarlskog invariant J. */
export declare const JARLSKOG_INVARIANT = 0.00003;
/** Earth mean radius (km). */
export declare const EARTH_RADIUS_KM = 6371;
/** Pulmonary oxygen-toxicity dose rate (OTU/min, REPEX power law). */
export declare function otuPerMin(ppo2Bar: number): number;
/** Radar range R = c·Δt/2 (m). */
export declare function radarRange(roundTripSeconds: number): number;
/** Sunrise azimuth (degrees clockwise from true north). */
export declare function riseAzimuthDeg(latDeg: number, declinationDeg: number, horizonAltitudeDeg?: number): number | null;
/** Half-power (−3 dB) bandwidth Δω = ω₀/q. */
export declare function resonanceBandwidth(omega0: number, q: number): number;
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare function frequencyToLight(hz: number): {
    octaves: number;
    thz: number;
    nm: number;
    hue: number;
    band: string;
};
/** 432 Hz carried up the octaves to visible light → hue 5 (red-orange) — the brand anchor, DERIVED not typed. */
export declare const A432_HUE: number;
/** φ = (1+√5)/2 — golden ratio, the defining radical (not a hand-typed decimal). */
export declare const PHI: number;
/** τ = 2π — the full turn. The one circle constant every domain imports (never a local 2π). */
export declare const TAU: number;
/** 360° / φ² — the golden angle in DEGREES, COMPUTED from φ (never a re-typed 137.5077… literal). */
export declare const GOLDEN_ANGLE: number;
/** The Fibonacci ladder, COMPUTED (no hardcoded members): [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, …]. */
export declare const FIBONACCI: readonly number[];
/** τ / φ² — the golden angle in RADIANS, same fold as GOLDEN_ANGLE seen from the radian side. */
export declare const GOLDEN_ANGLE_RAD: number;
/** @rosetta ✦₀ · Heaven · creative (the 10 dimensions are the model) */
export declare const DIMENSIONS = 10;
/** @rosetta ✦₀ · Heaven · creative (the 10 dimensions are the model) */
export declare const DIMENSION_NAMES: readonly ["spread", "depthFade", "hueShift", "twist", "shrink", "breath", "loopA1", "loopB1", "loopA2", "loopB2"];
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare const SOURCE_REPO = "https://github.com/ceccec/ceccec.github.io/blob/main";
/** The author's single handle — ONE identity across GitHub and Revolut, derived from SOURCE_REPO. */
export declare const AUTHOR_HANDLE: string;
/** Bāguà fan-out — not less, not more than eight subfolders per folder at every level. */
export declare const MAX_SUBFOLDERS_PER_FOLDER: 8;
/** I Ching — eight-fold bāguà (trigrams, sciences, subfolder fan-out). */
export declare const ICHING_TRIGRAMS: 8;
export declare const ICHING_EIGHT_FOLD: 8;
/** Rosetta — 6×7 / 7×6 = 42 area taxonomy (covering dynamics, not eight-fold). */
export declare const ROSETTA_SIX: 6;
export declare const ROSETTA_SEVEN: 7;
export declare const ROSETTA_AREAS: number;
export declare const ROSETTA_FOLD_LABEL: "6×7/7×6";
export declare const SCIENCE_DOMAINS: readonly [{
    readonly field: "Mathematics";
    readonly oecd: "1.1";
    readonly standard: "MSC 2020";
    readonly strong: true;
    readonly subdomains: readonly ["number theory & modular arithmetic", "group & representation theory", "combinatorics", "geometry"];
}, {
    readonly field: "Physics";
    readonly oecd: "1.3";
    readonly standard: "PACS/PhySH";
    readonly strong: true;
    readonly subdomains: readonly ["electromagnetism & optics", "acoustics", "gravitation & relativity", "particle physics & cosmology", "thermodynamics & information", "applied & physiological"];
}, {
    readonly field: "Computer & Information Sciences";
    readonly oecd: "1.2";
    readonly standard: "arXiv cs/quant-ph";
    readonly strong: true;
    readonly subdomains: readonly ["cryptography & security", "information & coding theory", "quantum information", "signal processing", "software architecture", "modeling & simulation"];
}, {
    readonly field: "Life Sciences";
    readonly oecd: "1.6";
    readonly standard: "arXiv q-bio";
    readonly strong: true;
    readonly subdomains: readonly ["genetics & molecular biology", "neuroscience & consciousness", "anatomy & physiology", "population genetics"];
}, {
    readonly field: "Earth & Space Sciences";
    readonly oecd: "1.5";
    readonly standard: "arXiv astro-ph";
    readonly strong: false;
    readonly subdomains: readonly ["geophysics", "astronomy & celestial mechanics", "archaeoastronomy"];
}, {
    readonly field: "Humanities";
    readonly oecd: "6";
    readonly standard: "OECD FOS 6";
    readonly strong: true;
    readonly subdomains: readonly ["history", "archaeology", "linguistics & philology", "philosophy of science"];
}, {
    readonly field: "Social Sciences";
    readonly oecd: "5";
    readonly standard: "OECD FOS 5";
    readonly strong: false;
    readonly subdomains: readonly ["political economy & governance", "educational sciences", "peace & conflict studies"];
}];
export declare const ENGAGEMENT_MODES: readonly ["see", "learn", "use", "prove", "reference", "pattern"];
export declare const SCIENCE_FIELD_LENSES: readonly {
    field: number;
    stems: readonly string[];
}[];
/** Auto-shelve content to its science field (0..6) or null if flagged / unmatched — the only-proven gate is computed. */
export declare function fieldOfContent(slug: string, keywords: readonly string[]): number | null;
export declare const MODE_LENSES: readonly {
    mode: string;
    stems: readonly string[];
}[];
/** The engagement mode (orthogonal to field): how you engage the page. Default 'prove' — a bare theorem. */
export declare function modeOfContent(slug: string, keywords: readonly string[]): string;
/** Proof the classifier is computed and demarcate-gated: a math/CS/life sample shelves to the right field, a
 *  flagged topic is excluded (null), every mode resolves — so integration is a function, not manual wiring. */
export declare function theClassifierComputesFieldByModeSoIntegrationIsNotManual(): {
    computes: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** The domains are science-aligned: 7 real fields (anchored to external standards) × 6 engagement modes = 42,
 *  preserving the rosetta proportion while replacing the ray-conflation with subject⊥mode. */
export declare function theDomainsAreScienceAlignedSevenFieldsBySixModesAnchoredToExternalStandards(): {
    computes: boolean;
    fields: ("Mathematics" | "Physics" | "Computer & Information Sciences" | "Life Sciences" | "Earth & Space Sciences" | "Humanities" | "Social Sciences")[];
    modes: ("see" | "learn" | "use" | "prove" | "reference" | "pattern")[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** Gapless Fibonacci census — 55 + 34 + 21 = 110 unfolded index.ts under src/. */
/** The Fibonacci number F(n), F(0)=0, F(1)=1 — the one home for the golden recurrence beside the
 * census bands, so every governance bound that IS a Fibonacci number (the line ceiling F(18)=2584)
 * is COMPUTED from the sequence, never typed. */
export declare function fibonacci(n: number): number;
export declare const FIBONACCI_CENSUS_BANDS: readonly [55, 34, 21];
export declare const UNFOLDED_CENSUS: 110;
/** Genus-2 double torus Euler characteristic — unfolded + χ = folded. */
export declare const EULER_CHI: -2;
export declare const FOLDED_CENSUS: number;
/** H₁(Σ₂) = ℤ⁴ — homology loops × folded census = dimension gates. */
export declare const HOMOLOGY_LOOPS: 4;
export declare const DIMENSION_GATES: number;
/** harmonics() ladder rungs: 6 octaves + 9 overtones + 5 binary. */
export declare const HARMONICS_LADDER_LENGTH: number;
/** quantumSiege forge grid: 9 × folded census = 972 attempts. */
export declare const SIEGE_WAVES: 9;
export declare const SIEGE_PER_WAVE: number;
export declare const SIEGE_TOTAL_FORGES: number;
/** Solar mass (kg) — IAU nominal. Hosted in this zero-import leaf so it initialises before any cyclic consumer
 * barrel (earth/world ↔ …); src/earth/world re-exports it on the existing public path. */
export declare const SOLAR_MASS_KG = 1.989e+30;
/** Schumann resonance fundamental (Hz) — documented Earth-ionosphere cavity mode. Hosted in this zero-import
 * leaf so it initialises before any cyclic consumer barrel (lake/music ↔ resonance …); public path unchanged. */
export declare const SCHUMANN_FUNDAMENTAL_HZ = 7.83;
/** @rosetta ✦₀ · Heaven · creative */
export declare const SINGLE_WORD_METHODS: Record<ConceptCommandName, string>;
/** @rosetta ✦₆ · Water · the seven rosetta computation kinds (one per ray). */
export type RosettaComputationType = 'monograph' | 'proof' | 'explore' | 'learn' | 'hub' | 'frontier' | 'reference';
export declare const ROSETTA_COMPUTATION_TYPES: readonly RosettaComputationType[];
/** Seven core API kinds — one slot per rosetta ray (length MUST equal ROSETTA_RAYS.length). Hosted in the
 * zero-import leaf with the other rosetta tables so SSR never hits a mid-barrel TDZ on the verb census. */
export declare const ROSETTA_CORE_KINDS: readonly ["route", "hub", "compute", "nav", "tool", "app", "projection"];
export type RosettaCoreKind = (typeof ROSETTA_CORE_KINDS)[number];
/** The seven rosetta rays — functional lenses (slug → ray) for nav, sidebar, footer, content kind.
 * FINDABILITY LAW: nameEn IS the ray's hub slug capitalized (label = URL word — a visitor reads the label,
 * lands on that path); nameBg is its Bulgarian translation. The Glagolitic glyph keeps the script identity
 * for the gla locale; mystical names (Alpha/Voice/Spirit…) were replaced — labels state content, not ideology. */
export declare const ROSETTA_RAYS: readonly [{
    readonly ray: 0;
    readonly glyph: "Ⰰ";
    readonly nameEn: "Origin";
    readonly nameBg: "Произход";
    readonly domain: "origin";
    readonly hue: 0;
}, {
    readonly ray: 1;
    readonly glyph: "Ⰲ";
    readonly nameEn: "Proof";
    readonly nameBg: "Доказателства";
    readonly domain: "expression";
    readonly hue: 51;
}, {
    readonly ray: 2;
    readonly glyph: "Ⰴ";
    readonly nameEn: "Explore";
    readonly nameBg: "Изследване";
    readonly domain: "knowledge";
    readonly hue: 102;
}, {
    readonly ray: 3;
    readonly glyph: "Ⰶ";
    readonly nameEn: "Learn";
    readonly nameBg: "Обучение";
    readonly domain: "nature";
    readonly hue: 154;
}, {
    readonly ray: 4;
    readonly glyph: "Ⰹ";
    readonly nameEn: "Apps";
    readonly nameBg: "Приложения";
    readonly domain: "computation";
    readonly hue: 205;
}, {
    readonly ray: 5;
    readonly glyph: "Ⰿ";
    readonly nameEn: "Frontier";
    readonly nameBg: "Граници";
    readonly domain: "geometry";
    readonly hue: 257;
}, {
    readonly ray: 6;
    readonly glyph: "Ⱄ";
    readonly nameEn: "Reference";
    readonly nameBg: "Справочник";
    readonly domain: "language";
    readonly hue: 308;
}];
export type RosettaRay = (typeof ROSETTA_RAYS)[number];
/** The seven ray-hubs — the top-level information architecture. One slug per rosetta ray (index = ray):
 * Origin→/origin, Proof→/proof, Explore→/explore, Learn→/learn, Apps→/apps, Frontier→/frontier,
 * Reference→/reference — label and URL are the same word (the findability law above). The Origin hub
 * (/origin) also fronts Home (/). The 7 rays are the categorical lens. */
export declare const ROSETTA_RAY_HUB_SLUGS: readonly ["origin", "proof", "explore", "learn", "apps", "frontier", "reference"];
export type RosettaRayHubSlug = (typeof ROSETTA_RAY_HUB_SLUGS)[number];
/** A ray-hub: a top-level landing page, one per rosetta ray, derived (never hand-typed) from ROSETTA_RAYS +
 * ROSETTA_RAY_HUB_SLUGS + ROSETTA_COMPUTATION_TYPES. The seven hubs ARE the quantum-human-design IA. */
export type RosettaRayHub = {
    ray: number;
    slug: RosettaRayHubSlug;
    route: string;
    glyph: string;
    nameEn: string;
    nameBg: string;
    domain: string;
    hue: number;
    pageKind: RosettaComputationType;
};
/** The seven ray-hubs, computed from the sealed rosetta tables (index = ray; gapless 0..6). */
export declare const ROSETTA_RAY_HUBS: readonly RosettaRayHub[];
/** The hub whose slug equals this slug (a ray-hub landing page), else null. */
export declare function rosettaRayHub(slug: string): RosettaRayHub | null;
/** Science-portal content lenses — an ORDERED decision list shelving a page into its ray by what the
 * page IS (curated keyword-stem classification data), replacing the Glagolitic-ladder slug hash for
 * content layout: the hash distributes slugs uniformly (good for the coprime motion math, useless as a
 * library shelf — it filed proof pages under "Learn"). First lens whose stems intersect the page's
 * slug+keywords wins; no hit falls to ray 2 (Explore — the research shelf). Order encodes specificity:
 * proof marks beat discipline words beat catch-alls. */
export declare const ROSETTA_RAY_CONTENT_LENSES: readonly {
    ray: number;
    stems: readonly string[];
}[];
/** Shelve content into its ray by the ordered lenses above — slug + keywords in, ray index out.
 * Two passes: the slug alone first (a page NAMED frontiers belongs to Frontier no matter what its
 * keyword tail accumulates), then slug+keywords. */
/** THE THEOREM-SCIENCE LENS PREDICATE (user law: only science serves) — hosted in this zero-import
 * leaf beside its own tables so every layer (voice guides, page catalogs, gateways) can consult it
 * without cycles. A page passes iff its slug+keywords intersect the science stems: the proof-lens and
 * frontier-lens rows of ROSETTA_RAY_CONTENT_LENSES plus the lens's own two name words (NAMED AXIOM). */
/** THE ONE SERVED-ROUTE LOGIC (gravity word: served — one home, every layer composes it) — pure over
 * a caller-supplied slug set, so leaves (voice guides) and operators (wind/site with the enriched page
 * set) share the identical route grammar: home · served slug · corpus REST · file artifact. */
export declare function servedRouteFromSlugs(route: string, servedSlugs: ReadonlySet<string>): boolean;
export declare const THEOREM_SCIENCE_NAME_STEMS: readonly ["theorem", "science"];
export declare const BLOG_OF_THEOREMS_STEMS: readonly ["theorem", "proof"];
export declare function theoremScienceVisible(slug: string, keywords: readonly string[]): boolean;
export declare function titleFromAlgebra(terms: readonly string[], sep?: string): string;
export declare function titleCarriesAlgebra(title: string): boolean;
export declare function normalizeTitle(title: string): string;
/** path ⇒ image is a total bijection over the domain (injective; surjective onto its image) — the digit-folder API. */
export declare function isTotalBijection<T>(domain: readonly T[], fn: (x: T) => unknown): boolean;
/** n ↦ max − n is its own inverse: the RGB/CMY (and pole) complement. */
export declare function complementIsInverse(max: number, fn: (n: number) => number, samples: readonly number[]): boolean;
/** a filter partitions the whole: kept + purged = total, both non-negative — the purge gate discriminates. */
export declare function partitionCoversTotal(kept: number, purged: number, total: number): boolean;
/** every projection is a pure function of the ONE value: recompute reproduces each projection exactly — one-math. */
export declare function crossPresentationStable<T>(value: T, recompute: (x: T) => T, projections: readonly ((x: T) => string)[]): boolean;
/** a convex polyhedron (a sphere) satisfies Euler's identity V − E + F = 2 — the sacred-geometry check. */
export declare function eulerPolyhedron(vertices: number, edges: number, faces: number): boolean;
/** |(ℤ/nℤ)*| = Euler's totient φ(n): the count of units — three-is-real's cyclic group. */
export declare function cyclicUnitsOrder(n: number): number;
export type Discovery = {
    readonly name: string;
    readonly holds: () => boolean;
};
export declare function verifyDiscovery(discovery: Discovery): {
    name: string;
    on: boolean;
    address: string;
};
/** The agnostic toolbox: verify + content-address ANY set of discoveries, uniformly, knowing nothing about them. */
export declare function agnosticToolbox(discoveries: readonly Discovery[]): {
    count: number;
    discoveries: {
        name: string;
        on: boolean;
        address: string;
    }[];
    allHold: boolean;
    root: string;
};
/** Proof the architecture is agnostic AND open: it verifies unrelated fields through one interface, admits a novel
 *  discovery with no schema change, and rejects a false claim (discriminates — not vacuous). */
export declare function theToolboxIsAgnosticArchitectureThatAllowsAnyDiscovery(): {
    computes: boolean;
    open: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function rosettaRayOfContent(slug: string, keywords: readonly string[]): number;
/** @rosetta ✦₀ · Heaven · creative */
export declare function computePiDigits(count: number): string;
/** @rosetta ✦₀ · Heaven · creative — 108 pi-digit coordinates (the sacred 108: chakras × 12, the mala). */
export declare const PI_TRAIN_DIGITS: string;
/** @rosetta ✦₀ · Heaven · creative */
export declare const REQUIRED_DIAMOND_KINDS: readonly DiamondKind[];
/** @rosetta ✦₀ · Heaven · creative */
export declare const REQUIRED_DIAMOND_POLES: readonly DiamondFacet['pole'][];
/** @rosetta ✦₀ · Heaven · creative */
export declare const REQUIRED_ANALOG_CHANNELS: readonly AnalogChannel[];
/** Maximum tampering cost principle — seal closes at coverage 1 ∧ entropy 0. Hosted in this zero-import leaf so
 * it initialises before any cyclic consumer; src/4/6 re-exports it on the existing public path. */
export declare const MAX_TAMPERING_COST_PRINCIPLE = "Maximum tampering cost is only claimed when the inward proof loop closes measured coverage at 1 and the outward double-torus flow preserves zero reciprocal entropy.";
/** User law (2026-07-08): always DRY, optimise towards max efficiency — every addition reuses the
 * sealed machinery it extends (one renderer, one registry, one slug rule); duplication is a crack in time. */
export declare const DRY_MAX_EFFICIENCY_PRINCIPLE = "Always DRY \u2014 optimise towards max efficiency: new surfaces reuse sealed folds and renderers; the cheapest code is the code not written twice.";
/** User law (2026-07-08): every proof or discovery is a reason to reconsider related code — a proven
 * theorem is an invitation to reimplement the machinery it explains (faster, simpler, or validated). */
export declare const PROOF_DRIVEN_REIMPLEMENTATION_PRINCIPLE = "Every proof or discovery is a reason to reconsider related code for reimplementation: a sealed theorem either validates the code that embodies it or replaces it with the better algorithm the proof revealed.";
/** User law (2026-07-14): consolidate all as monographs — every content surface presents through the one
 * scientific-paper template (monographTemplate); section names state content, never cosmology. */
/** User law (2026-07-16): when working with packages, use them canonically — the author's documented
 * API and config shapes, never a hand-rolled imitation of the package's schema. */
export declare const CANONICAL_PACKAGE_USE_PRINCIPLE = "Use packages canonically: the documented API, the official types, the intended config shapes \u2014 an imitation of a schema is drift waiting to ship.";
/** The canonical host — the one deployed origin every sitemap URL, canonical link and citation uses. */
export declare const CANONICAL_HOST = "https://ceccec.psg.bg";
export declare const ALL_IS_MONOGRAPH_PRINCIPLE = "Consolidate all as monographs: one scientific-paper form for every surface \u2014 title, abstract, results, provenance, citation \u2014 with section names that state the content; the reader never needs the site\u2019s internal cosmology to find the science.";
/** @rosetta ✦₁ · Fire · clarity */
export declare const MAJOR_MOONS: readonly [{
    readonly name: "Io";
    readonly parent: "Jupiter";
    readonly periodDays: 1.769;
    readonly orbitRadiusKm: 421700;
    readonly radiusKm: 1821.6;
}, {
    readonly name: "Europa";
    readonly parent: "Jupiter";
    readonly periodDays: 3.551;
    readonly orbitRadiusKm: 671100;
    readonly radiusKm: 1560.8;
}, {
    readonly name: "Ganymede";
    readonly parent: "Jupiter";
    readonly periodDays: 7.155;
    readonly orbitRadiusKm: 1070400;
    readonly radiusKm: 2634.1;
}, {
    readonly name: "Callisto";
    readonly parent: "Jupiter";
    readonly periodDays: 16.689;
    readonly orbitRadiusKm: 1882700;
    readonly radiusKm: 2410.3;
}, {
    readonly name: "Titan";
    readonly parent: "Saturn";
    readonly periodDays: 15.945;
    readonly orbitRadiusKm: 1221830;
    readonly radiusKm: 2574.7;
}, {
    readonly name: "Triton";
    readonly parent: "Neptune";
    readonly periodDays: 5.877;
    readonly orbitRadiusKm: 354759;
    readonly radiusKm: 1353.4;
    readonly retrograde: true;
}];
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export declare const GENETIC_CODE = "FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG";
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export declare const A432_OCTAVES: number[];
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export type Rational = {
    readonly p: number;
    readonly q: number;
};
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export declare function rat(p: number, q: number): Rational;
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export declare function ratAdd(a: Rational, b: Rational): Rational;
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export declare function ratMul(a: Rational, b: Rational): Rational;
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export declare function ratInv(a: Rational): Rational;
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export declare function ratSub(a: Rational, b: Rational): Rational;
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export declare function ratDiv(a: Rational, b: Rational): Rational;
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export declare function ratEq(a: Rational, b: Rational): boolean;
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export declare function ratToFloat(r: Rational): number;
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export declare function vortexHarmonicRatios(): {
    fwd: Rational[];
    rev: Rational[];
    fwdProduct: Rational;
    revProduct: Rational;
    heartApproach: Rational;
    heartDepart: Rational;
    heartDiamond: Rational;
};
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export declare function cfEval(terms: readonly number[], n: number): Rational;
/** @rosetta relocated pi-train station cut (was src/0 — a domain block, not a vault primitive) */
export declare function vortexContinuedFrac(n: number): Rational;
/** PROVENANCE — a literal that cannot reduce to the lattice because it is DATA (a documented external
 * fact) or a UNIT (an SI/IEC scale). A ledger entry is not a pass: it must name its source, it must
 * match the file's ACTUAL use count (drift → offender), and an entry whose literal vanished goes
 * stale (→ offender). The ledger is the census's memory of WHY each number exists.
 *
 * EPISTEMIC LAW: every ledgered value is a snapshot of what its discoverers could compute AT THE TIME —
 * it is not known that the inventors knew the math to derive rather than hardcode. A `frontier` note
 * records the known-or-suspected derivation path, so ledgered constants remain RESEARCH TARGETS, never
 * closed cases. This bites hardest in DECOMPRESSION models: the sRGB decompression knee/slope are
 * C¹-continuity-derivable from (a = 0.055, γ = 2.4), yet the standard hardcoded ROUNDED values
 * (12.92 vs ≈12.9232, 0.0031308 vs ≈0.0030399) — the spec is a hardcoded crack of its own derivation,
 * kept verbatim only for byte-compatibility with every other sRGB implementation. */
export type CrackProvenance = {
    file: string;
    /** A specific literal, or '*' — a FILE-LEVEL attestation of exactly `count` unaccounted uses. */
    literal: string;
    count: number;
    /** data = documented external fact · unit = SI/IEC scale · tuned = fixed by hand, derivation NOT
     * yet known — the epistemic law says these may eventually be computed; each is a research target. */
    kind: 'data' | 'unit' | 'tuned';
    source: string;
    /** The suspected/known computation this fixed value could someday be replaced by. */
    frontier?: string;
};
export declare const CRACK_LEDGER: readonly CrackProvenance[];
/** RESEARCH TARGETS — tuned values REGISTERED so the self-researcher can hunt them (wildcard
 * attestations carry counts, not values; a value the battery cannot see cannot be researched).
 * Registering a value does not close it: it stays tuned until a theorem survives the audit fold. */
export type CrackResearchTarget = {
    file: string;
    value: number;
    context: string;
};
export declare const CRACK_RESEARCH_TARGETS: readonly CrackResearchTarget[];
/** LAWS CHANGE WITH EVERY THEOREM PROVEN — the crack law is not static text: each amendment names
 * the proof that forced it. A law that cannot cite its forcing theorem is itself a hardcoded value. */
export type CrackLawAmendment = {
    version: number;
    forcedBy: string;
    change: string;
};
export declare const CRACK_LAW_AMENDMENTS: readonly CrackLawAmendment[];
/** Ledger self-invariants — computable at any call site: no duplicate (file, literal) rows, every
 * count positive, every TUNED row carries its frontier note, one wildcard per file at most. The
 * accounts split the accounted uses by kind — the 'tuned' total IS the improvement frontier. */
export declare function crackLedgerAccounts(): {
    holds: boolean;
    entries: number;
    byKind: {
        data: number;
        unit: number;
        tuned: number;
    };
    frontier: number;
    duplicates: string[];
    nonPositive: number;
    tunedWithoutFrontier: number;
    doubleWildcards: string[];
};
/** The law's own evolution, verified: versions strictly monotone from 1, every amendment names the
 * theorem/discovery that forced it — a law that cannot cite its forcing proof is a hardcoded value. */
export declare function crackLawEvolution(): {
    holds: boolean;
    amendments: number;
    current: CrackLawAmendment;
    monotone: boolean;
    cited: boolean;
};
export declare const HARMONY = "HARMONY does not equal TRUTH.";
export declare function earned(head: string, facets: readonly {
    facet: string;
    on: boolean;
}[], scope: string): string;
export declare const DEMARCATION_REGISTRY: {
    readonly documented: readonly ["evolution", "common descent", "abiotic synthesis", "endosymbiosis", "ribozyme", "NCC", "PCI", "relativity", "quantum mechanics", "Big Bang", "ΛCDM", "plate tectonics", "germ theory", "anthropogenic climate change", "vaccines"];
    readonly contested: readonly ["abiogenesis", "RNA world as history", "metabolism-first", "extended evolutionary synthesis", "neutral theory", "hard problem", "theories of consciousness", "IIT", "GWT", "GNWT", "panpsychism", "Orch-OR", "string theory", "multiverse", "QM interpretations", "dark matter", "MOND", "panspermia", "pliska rosette"];
    readonly flagged: readonly ["creationism", "intelligent design", "young-earth creationism", "social darwinism", "eugenics", "orthogenesis", "quantum mysticism", "quantum consciousness", "consciousness creates reality", "neuromyth", "10% of the brain", "432 Hz heals", "astrology", "flat earth", "homeopathy", "climate denial", "perpetual motion", "orion correlation theory", "mars face", "ley lines", "megalithic yard", "bosnian pyramid"];
};
export type DemarcationTier = 'documented' | 'contested' | 'flagged' | 'unlisted';
export declare function demarcate(topic: string): DemarcationTier;
