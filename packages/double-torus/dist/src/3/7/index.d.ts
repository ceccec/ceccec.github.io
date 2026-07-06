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
export declare const PLANCK = 6.62607015e-34;
export declare const ELECTRONVOLT = 1.602176634e-19;
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
/** 360° / φ² — the golden angle, COMPUTED from φ (never a re-typed 137.5077… literal). */
export declare const GOLDEN_ANGLE: number;
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
/** Gapless Fibonacci census — 55 + 34 + 21 = 110 unfolded index.ts under src/. */
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
/** The seven rosetta rays — Glagolitic ladder lenses (slug → ray) for nav, sidebar, footer, content kind. */
export declare const ROSETTA_RAYS: readonly [{
    readonly ray: 0;
    readonly glyph: "Ⰰ";
    readonly nameEn: "Alpha";
    readonly nameBg: "Алфа";
    readonly domain: "origin";
    readonly hue: 0;
}, {
    readonly ray: 1;
    readonly glyph: "Ⰲ";
    readonly nameEn: "Voice";
    readonly nameBg: "Глас";
    readonly domain: "expression";
    readonly hue: 51;
}, {
    readonly ray: 2;
    readonly glyph: "Ⰴ";
    readonly nameEn: "Spirit";
    readonly nameBg: "Дух";
    readonly domain: "knowledge";
    readonly hue: 102;
}, {
    readonly ray: 3;
    readonly glyph: "Ⰶ";
    readonly nameEn: "Life";
    readonly nameBg: "Живот";
    readonly domain: "nature";
    readonly hue: 154;
}, {
    readonly ray: 4;
    readonly glyph: "Ⰹ";
    readonly nameEn: "Thought";
    readonly nameBg: "Мисъл";
    readonly domain: "computation";
    readonly hue: 205;
}, {
    readonly ray: 5;
    readonly glyph: "Ⰿ";
    readonly nameEn: "Form";
    readonly nameBg: "Форма";
    readonly domain: "geometry";
    readonly hue: 257;
}, {
    readonly ray: 6;
    readonly glyph: "Ⱄ";
    readonly nameEn: "Word";
    readonly nameBg: "Слово";
    readonly domain: "language";
    readonly hue: 308;
}];
export type RosettaRay = (typeof ROSETTA_RAYS)[number];
/** The seven ray-hubs — the top-level information architecture. One slug per rosetta ray (index = ray):
 * Alpha→/origin, Voice→/proof, Spirit→/explore, Life→/learn, Thought→/apps, Form→/frontier, Word→/reference.
 * The Alpha hub (/origin) also fronts Home (/). Quantum-human-design IA: the 7 rays are the categorical lens. */
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
