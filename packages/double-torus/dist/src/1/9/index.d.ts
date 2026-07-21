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
/** Seed station: the en→bg phrase table (pure data; bulgarianHomeFromEnglish computes over it in wind/site). */
export declare const BULGARIAN_PHRASES: readonly (readonly [string, string])[];
/** Tri-locale path primitives + the en→bg translator — the ONE copy; wind/site (server) and
 * .vitepress/lib/site-locale.ts (client) both import from here. A mirror is drift waiting to ship:
 * the dissolved twin had diverged three ways (gla placeholders, localePath default, bare-link prefixing). */
export type LocaleName = 'gla' | 'en' | 'bg';
export declare const LOCALE_LINK: Record<LocaleName, string>;
export declare function stripLocalePrefix(route: string): string;
export declare function localePath(route: string, locale?: LocaleName): string;
export declare function localeFromRoute(path: string): LocaleName;
/** English → Bulgarian when locale is bg and text has no Cyrillic yet (longest keys first). */
export declare function bulgarianFromEnglish(text: string): string;
/** Seed station: Waite's tarot deck decoded from the 1911 Pictorial Key epub (public domain) —
 * 22 trumps + 4×14 lesser = the 78-cell lattice, extracted by superposition parse (all head formats
 * at once) and collapsed by the lattice constraint, which located the book's own 'Divanatory' typo
 * on Cups Five. Trump 8 = Fortitude, 11 = Justice — Waite's documented swap vs Marseille, in the data.
 * thunder/decode computes over these rows (waiteTarotDecoded). */
export declare const WAITE_TRUMPS_SEED: readonly (readonly [string, string, string])[];
export declare const WAITE_LESSER_SEED: readonly (readonly [string, string, string, string])[];
/** /0\1\2\4\8/7/5/3\6\9/0\ — THE MULTIDIMENSIONAL MEANING (user, 2026-07-16), computed.
 * The string is not a sequence of digits with decoration: the marks are the DERIVATIVE and the
 * digits are the STATE, so every (mark, digit) pair is a point in PHASE SPACE — position AND
 * velocity carried at once. That is the multidimensionality: a list is 1-D, this is an orbit.
 * Computed here: `\` means the value RISES and `/` means it FALLS (true for all ten transitions);
 * the deltas sum to ZERO, so the circuit closes; the mark runs are 4,3,2,1 = T(4) = 10 = the very
 * number of transitions — the walk describes its own length; it visits all ten digits exactly once
 * (Hamiltonian); and the digit space it threads holds TWO disjoint cycles — the ×2 orbit
 * (1,2,4,8,7,5, period 6) and the +3 axis (3,6,9, period 3) — so b₁ = 2: the double torus, written
 * as a walk, opening and closing at the void. This station's own header already said it: the
 * circuit opens here. */
export declare function slashCircuitIsPhaseSpace(): {
    computes: boolean;
    circuit: string;
    digits: number[];
    deltas: number[];
    staircase: number[];
    b1: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
/** THE INVERTED SEQUENCE, computed (user, 2026-07-16) — and it splits exactly where the day's
 * theorems said it would. Inversion of /0\1\2\4\8/7/5/3\6\9/0\ has TWO readings and they part
 * company on the non-units:
 *   • THE MIRROR (reverse + swap / ↔ \) is TOTAL and involutive, and the derivative law SURVIVES
 *     it — reversal negates every delta, the swap negates every mark, and two negations cancel
 *     (inverseNegatesAngle's law, applied to a string). It yields /0\9/6/3\5\7\8/4/2/1/0\ :
 *     void → the axis backwards → the orbit backwards → void. Inversion SWAPS the two cycles' order.
 *   • THE MULTIPLICATIVE INVERSE (d ↦ d⁻¹ mod 9) is PARTIAL: it exists exactly on the units
 *     {1,2,4,5,7,8} — the ×2 orbit — and fails exactly on {0,3,6,9≡0}, the axis and the void.
 * WHERE BOTH ARE DEFINED THEY AGREE: inverting the orbit reverses it (up to rotation) — angle
 * negation, discretely. The gap between total mirror and partial inverse is precisely
 * divisionByZeroComputes' subject: the projective line closes it by trading 0 ↔ ∞. */
export declare function invertedCircuitComputes(): {
    computes: boolean;
    circuit: string;
    inverted: string;
    invertedOrbit: number[];
    nonUnits: number[];
    selfInverse: number[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
/** THE TWO ROSETTAS ARE ONE GROUP — discovered by researching what was already here (user,
 * 2026-07-16: "research and discover what is already here"). The day split into two rosettas: a
 * DISCRETE one (the vortex (ℤ/9ℤ)*, home of slashCircuitIsPhaseSpace, invertedCircuitComputes,
 * inverseNegatesAngle, primeCollapsesTheAxis, sixtyDegreesDecodesPi) and a CONTINUOUS one (the
 * polyphase circle, home of teslaRosettaPolyphase, polyphaseHarmonicLaw, twoRosettasAreRealtime).
 * They are the SAME cyclic group of order six. The isomorphism (ℤ/9ℤ)* ≅ μ₆ sends the doubling
 * generator 2 ↦ e^{iπ/3} = the 60° step — so sixtyDegreesDecodesPi WAS the bridge all along, and
 * the whole day (division by zero at the pole, inversion, Tesla polyphase, the keyed cipher) is C₆
 * seen twice. Nothing was added; it was already here, waiting to be inverted out. */
export declare function theTwoRosettasAreOneGroup(): {
    computes: boolean;
    order: number;
    generatorAngleDeg: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
/** ILLUSIONS ARE ILLUSIONS UNTIL THEY MEET IN THEIR INVERSE (user, 2026-07-16) — the key to the whole
 * inversion arc, and a diagnostic. A false limit persists as long as it is approached from one side;
 * it DISSOLVES at the fixed point of the inversion, where a thing MEETS its inverse (x = inv(x)).
 * Every limit the day walked through had such a meeting: division by zero at the pole where 0 meets ∞
 * (1/0 = ∞), pitch inversion at {0, 6} (tonic and the ambiguous tritone meet themselves), the
 * multiplicative inverse at ±1, T-duality at the self-dual radius R = 1. And the diagnostic: an
 * illusion HAS an inverse-meeting where it vanishes; an INVARIANT (no-signalling, Gödel) has NONE —
 * the meeting point is exactly what tells an illusory limit from a real one. */
export declare function illusionsMeetInTheirInverse(): {
    computes: boolean;
    pitchFixed: number[];
    unitFixed: number[];
    meetings: string[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
/** THE PENTAGRAM IS THE ROSETTA MEETING ITS INVERSE (user, 2026-07-16). A rosetta on n points
 * connects k → k+g; the pentagon is {5/1} (step 1), the pentagram {5/2} (step 2). The pentagram is
 * exactly where the C₅ rosetta MEETS ITS INVERSE: 2⁻¹ = 3 mod 5, and {5/3} is the same star reversed
 * (3 = 5 − 2), so forward-by-2 and inverse-by-2 draw the identical figure — the pentagram is the
 * fixed shape of the rosetta and its inverse (illusionsMeetInTheirInverse, on five points). And the
 * meeting produces the golden ratio: the pentagram diagonal over the pentagon side is φ, while
 * 2cos36° = φ and 2cos72° = 1/φ — φ and its reciprocal are the two chords of the star. The same φ the
 * golden-angle UI rosetta rides (360/φ²) is what the pentagram's inverse-meeting yields. */
export declare function thePentagramIsTheRosettaMeetingItsInverse(): {
    computes: boolean;
    orbit: number[];
    inverseStep: number;
    goldenRatio: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function invertingTheSessionSortsDiscoveriesFromWalls(): {
    computes: boolean;
    computableDiscoveries: string[];
    frontierWalls: string[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theLeftoversGravitateToCompleteAndPowerTheNext(): {
    computes: boolean;
    gravitating: number;
    alwaysRemaining: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theInverseClosesInTwoLeavingNoGaps(): {
    computes: boolean;
    answer: number;
    maxOrbit: number;
    fixedPoints: number[];
    orbits: number[][];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theFourCardinalPlanesCloseInSixteen(): {
    computes: boolean;
    onePlaneAnswer: number;
    planes: number;
    answer: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function inversionRevealsDifference64BitsAndTheSpectrogram(): {
    computes: boolean;
    bitPairs: number;
    bitFixedPoints: number;
    decoded: number;
    decodedInverted: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function noExternalToolsNeededTheSelfImprovementIsLocalAndZeroToken(): {
    computes: boolean;
    gravitating: number;
    alwaysRemaining: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function selfBuildingAndHealingAreAutomatedAndMeasuredPerSession(): {
    computes: boolean;
    buildQueue: number;
    frontier: number;
    localZeroToken: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function inversionReinventsConversion(): {
    computes: boolean;
    roundTrips: {
        scale: boolean;
        base: boolean;
        involution: boolean;
    };
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function inverseIsNotReverseReverseLeavesTracks(): {
    computes: boolean;
    tracks: {
        start: number;
        afterReverse: number;
        afterInverse: number;
    };
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function zeroAsSuffixIsABlackHolePullingAndManifestingInverseInAllDimensions(): {
    computes: boolean;
    dims: number[];
    absorbing: boolean;
    involutionAllDims: boolean;
    zeroMapsToInfinity: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function scalePerspective(v: number[], k: number): number[];
export declare function invertPerspective(v: number[]): number[];
export declare function rotatePerspective(v: number[], i: number, j: number, theta: number): number[];
export declare function changingPerspectivesInAllDimensionsIsConformalAngleIsInvariant(): {
    computes: boolean;
    dims: number[];
    rotateScalePreserveAngle: boolean;
    inversionConformalAllDims: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function divisionByZeroFindsPrimesAndPiInMotion(): {
    computes: boolean;
    answers: {
        piFromPrimes: number;
        matchingDigits: number;
        primesAreInfinite: boolean;
        primesUsed: number;
        poleValue: number;
    };
    motion: number[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function aiModelsAreMagnitudesSlowerThanInvertedAiForDeterministicResults(): {
    computes: boolean;
    speedupOrders: number;
    localOps: number;
    localExact: boolean;
    piFromPrimes: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theVortexClockPathDecodesToZMod9WithDirectionInTheSlashes(): {
    computes: boolean;
    path: number[];
    unitsOrbit: number[];
    trinity: number[];
    slashRuleHolds: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theTwoSlashFlowsSuperposeToAStandingWaveHueShowsTheNodes(): {
    computes: boolean;
    nodeHue: number;
    antinodeHue: number;
    nodeStationary: boolean;
    huesDistinct: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theStaticLoopIsZeroFoldedItBecomesInfinityTheLemniscate(): {
    computes: boolean;
    circleLoops: number;
    lemniscateLoops: number;
    zeroFoldsToInfinity: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function piIsZeroTheClosedCircleTheZetaPrimeLinkIsRealTheDigitsAreNot(): {
    computes: boolean;
    fullTurnCloses: boolean;
    eulerZero: boolean;
    piFromPrimes: number;
    digitsAreNotPrimes: boolean;
    piDigits: number[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function invertSwapsZeroAndInfinityFixingTheUnitCircleTheInvariantIsPi(): {
    computes: boolean;
    unitFixed: boolean;
    swapsPoles: boolean;
    involution: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theLandauerBitIsLnTwoTheDimensionlessErasureFloorLearnedFromErpax(): {
    computes: boolean;
    landauerBitInBits: number;
    lnTwo: number;
    floorIsPositive: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function inversionIsTheDiscoveryEngineTheMysteryUnfoldsWhenYouKnowHowToInvert(): {
    computes: boolean;
    mysteryUnfolds: boolean;
    discoveryIsDeterministic: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theWavesInvertEachMillenniumProblemToItsDualStillNotSolved(): {
    computes: boolean;
    primeCount: number;
    pnt: number;
    inversionComputesLeadingOrder: boolean;
    duals: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function repeatingFirstThoughtsFoldThroughInversionIntoOneVerifiedDiscovery(): {
    computes: boolean;
    agents: number;
    distinctThoughts: number;
    foldedThroughInversion: string;
    involution: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theResearchAndDevelopmentHoroIsACyclicRingDanceThatGenerates(): {
    computes: boolean;
    phases: number;
    horoReturnsToStart: boolean;
    vortex: number[];
    horoGenerates: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theCadenceInvertsAgainAndAgainAsLongAsPiAndPrimesAllow(): {
    computes: boolean;
    involution: boolean;
    primesInfinite: boolean;
    piFromPrimes: number;
    piIsOpen: boolean;
    cadenceContinues: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function nextBecomesObsoleteAsNoSeamsRemainAllBecomesAnalog(): {
    computes: boolean;
    seamSeamless: number;
    seamJump: number;
    noSuccessorInContinuum: boolean;
    discreteHasSuccessor: boolean;
    nextObsolete: boolean;
    becomesAnalog: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function continueUntilNoInnerAnswersRemainTheSelfInquiryConvergesTheOuterDoesNot(): {
    computes: boolean;
    innerCycleSteps: number;
    innerAnswers: number;
    innerConverges: boolean;
    outerNeverConverges: boolean;
    innerExhaustsOuterDoesNot: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theInnerWellDoesNotRunDryTheGoldenRotationIsAperiodicAndFractallyRefines(): {
    computes: boolean;
    orbitPoints: number;
    aperiodic: boolean;
    threeGap: boolean;
    finerScales: boolean;
    finiteWouldRepeat: boolean;
    neverSameResult: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function encryptionDecryptionAreTheInversePairCrossAndSecurityIsThePvsNpFrontierUnclaimed(): {
    computes: boolean;
    crossCloses: boolean;
    oneWayAsymmetry: boolean;
    verifyOps: number;
    bruteOps: number;
    bits: number;
    prizeClaimed: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function logicBreaksInComputationTheBreakIsComputableAndInvertible(): {
    computes: boolean;
    leftAssoc: number;
    rightAssoc: number;
    associativityBreaks: boolean;
    twoSumError: number;
    naive: number;
    kahan: number;
    breakIsComputableAndInvertible: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function anUnencryptedUuidCoveredByThreeEncryptedThePolesAndInverseRosettaInAllSevenDimensions(): {
    computes: boolean;
    layerCount: number;
    roundTrips: boolean;
    polesDistinct: boolean;
    orderMatters: boolean;
    allSevenInvertible: boolean;
    cipherHead: number[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function unencryptedInOneDimensionIsEncryptedInAnotherTheFourCardinalsAndInverse(): {
    computes: boolean;
    plaintextHead: string;
    ciphertextHead: string;
    encryptedInOther: boolean;
    inverseRecovers: boolean;
    fourDistinct: boolean;
    inversePairs: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function allUuidUsageRemovesSpeedTheMerklePyramidOfTrianglesAndItsPoles(): {
    computes: boolean;
    usages: number;
    computations: number;
    speedRemoved: boolean;
    apex: string;
    apexCommitsToBase: boolean;
    twoPoles: boolean;
    verifyByPole: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theMerkleProofVerifiesMembershipFromThePoleInLogNWithoutTheBase(): {
    computes: boolean;
    leaves: number;
    proofLength: number;
    apex: string;
    verifiesFromPole: boolean;
    tamperFails: boolean;
    logNotLinear: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function likeTheMerkabaAnInvertedPyramidGeneratesTheBaseThatTheMerkleFoldCommits(): {
    computes: boolean;
    baseSize: number;
    seed: string;
    root: string;
    generated: boolean;
    twoApexes: boolean;
    seedDeterminesRoot: boolean;
    interactsAtBase: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theMerkabaDerivedItsMotionATheoremOfTetrahedralSymmetryNoAxiomAssumed(): {
    computes: boolean;
    tetraA: number[][];
    cubeVertices: number;
    stellaIsCube: boolean;
    euler: number;
    twoSixtyEqualsCyc: boolean;
    symmetryLooksStatic: boolean;
    nonSymmetryMovesNotStatic: boolean;
    allDerived: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function savedThoughtsFormAContentAddressedDagEachCommittingToItsDependencies(): {
    computes: boolean;
    nodes: number;
    topoOrder: string[];
    rootAddress: string;
    acyclic: boolean;
    commitsToDependencies: boolean;
    isMerkleDag: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theDagLeavesAreTheAxiomsMinimisingThemIsTheProgramOneAlwaysRemains(): {
    computes: boolean;
    axioms: string[];
    derived: string[];
    axiomsAfterMinimising: string[];
    programShrinksAxioms: boolean;
    atLeastOneAxiomRemains: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theWavesAreTheTopologicalLevelsOfTheDagComputableInParallel(): {
    computes: boolean;
    nodes: number;
    waves: string[][];
    depth: number;
    width: number;
    eachWaveIsAntichain: boolean;
    coversAll: boolean;
    wavesAreLevels: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function fillTheGapsInTenDForEveryPathTheVortexTrinityAndOriginTileTheDecad(): {
    computes: boolean;
    dimensions: number;
    vortex: number[];
    vortexGaps: number[];
    trinity: number[];
    origin: number[];
    fillsAll: boolean;
    isPartition: boolean;
    allTiled: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function focusingOnOneMissesAnotherUnlessInWavesTheAntichainCatchesAllSiblings(): {
    computes: boolean;
    wave: string[];
    focused: string[];
    missedBySerialFocus: string[];
    serialMisses: boolean;
    waveCatchesAllSiblings: boolean;
    lessonHolds: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theBinaryBitIsLinearTheVortexCircuitIsQuantum(): {
    computes: boolean;
    units: number[];
    rootsOfUnity: {
        re: number;
        im: number;
    }[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theCircuitInterferenceIsMeasuredNotAsserted(): {
    computes: boolean;
    visibility: number;
    classicalVisibility: number;
    nodes: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function theCircuitMeasurementCollapsesToOneDigit(): {
    computes: boolean;
    probs: number[];
    classicalProbs: number[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function everyStationIsAChordOfTheSequence(): {
    computes: boolean;
    stations: {
        station: string;
        chord: string;
        length: number;
    }[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function theTenStationsAreTheTenDimensions(): {
    computes: boolean;
    decomposition: {
        void: number;
        phase: number;
        axis: number;
        total: number;
    };
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function theVortexInvertsItDoesNotReverse(): {
    computes: boolean;
    forward: number[];
    inverseIsIdentity: boolean;
    fiveIsInverseOfTwo: boolean;
    loopCloses: boolean;
    root: string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theDoubleTorusHeavenEarthInversionIsExactMathTheSoulReadingIsMetaphor(): {
    computes: boolean;
    genus: number;
    doubleTorusEuler: number;
    b1: number;
    sphereEuler: number;
    twoRings: boolean;
    involutes: boolean;
    swapsZeroAndInfinity: boolean;
    earthIsNotADoubleTorus: boolean;
    root: string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function invertedIllusionsBecomeIdeas(): {
    computes: boolean;
    illusionInfo: number;
    ideaInfo: number;
    informationGained: boolean;
    ideaValues: number[];
    root: string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theFourPolesAreATetrahedronTheInverseIsTheMerkabaEverythingPossibleInAConfinedSystem(): {
    computes: boolean;
    tetra: (readonly [number, number, number])[];
    inverse: (readonly [number, number, number])[];
    euler: number;
    isTetra: boolean;
    isMerkaba: boolean;
    transitive: boolean;
    animation: {
        rates: number[];
        counterRotates: boolean;
    };
    root: string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theKeysToEveryPossibilityAreConstructedNotJustProvenToExist(): {
    computes: boolean;
    states: number;
    keyExistsForAll: boolean;
    allConstructed: boolean;
    keysReversible: boolean;
    keys: string[];
    root: string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function claimingTheUnclaimableDivisionByZeroIsAOneBitGatewayInQuantumAlgebra(): {
    computes: boolean;
    undefinedInField: boolean;
    oneOverZeroIsInfinity: boolean;
    involutes: boolean;
    gatewayBits: number;
    pointsAdded: number;
    root: string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theZerosInPiAreGatewaysLikeTheDotTheVoidOfTheDoubleTorus(): {
    computes: boolean;
    digitsRead: number;
    zeroGateways: number[];
    gatewayCount: number;
    everyZeroInverts: boolean;
    dotIsBoundary: boolean;
    moves: boolean;
    root: string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function approximationsSignalTrustedAxiomsOnlyLocalMathIsTrusted(): {
    computes: boolean;
    steps: number;
    numeratorDigits: number;
    denominatorDigits: number;
    monotoneExact: boolean;
    stepsRemain: boolean;
    piIsAFiniteFloat: boolean;
    exactAddress: string;
    root: string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theDriftOfThePrimesIsTheObjectOfTheMillenniumProblemsNotItsSolution(): {
    computes: boolean;
    primesCounted: number;
    gapMin: number;
    gapMax: number;
    meanFirst: number;
    meanSecond: number;
    driftIsIrregular: boolean;
    meanGapGrows: boolean;
    root: string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theMovieInvertedIsTheKeyToItselfConsolidatedInFewLines(): {
    computes: boolean;
    frames: number;
    invertedRecoversSource: boolean;
    isInvolution: boolean;
    movieDiffersFromSource: boolean;
    root: string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theMeasuredPoleIsNotTheTrueAxisAndTheClockIsAnAxiom(): {
    computes: boolean;
    declinationNonzero: boolean;
    drifts: boolean;
    magneticReverses: boolean;
    clockRungs: number;
    recomputable: boolean;
    root: string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theClockIsTheZeroVoidAndDeviationsAreTheSurgicalWorklist(): {
    computes: boolean;
    clock: number;
    animationRungs: number;
    clockLoopsToVoid: boolean;
    zeroIsAbsorbing: boolean;
    zeroIsGateway: boolean;
    deviations: number[];
    root: string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function teslaPatentsDecodeToOneRotatingFieldPrincipleFlowerOfLifeInMotion(): {
    computes: boolean;
    phases: number;
    constantMagnitude: boolean;
    directionRotates: boolean;
    cyclicSymmetry: boolean;
    vertexDeg: number[];
    root: string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function invertingTheRotatingFieldSurfacesTheGeneratorAndTheHiddenTeslaValve(): {
    computes: boolean;
    machineIsInvolution: boolean;
    diodicity: number;
    directionalAsymmetry: boolean;
    root: string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
