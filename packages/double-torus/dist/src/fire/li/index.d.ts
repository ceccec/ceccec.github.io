import type { MindMatrix, FusionReactor, DistributedCompute, DoubleTorusMathReport, AncientTechLens, SelfDevelopment, MethodFusionReport, Blockchain, TaxonomyIcons, FairLife, SelfAddressed, UtfAnalog, CrossFoldTrinity, SourceContributionReport, SelfInteraction } from '../../wind/types';
export { MAJOR_MOONS } from '../../3/7';
/** Concert A, the single tuning source (Hz). Never A=440: all repo music/audio folds through a432NoteHz from here. */
export declare const A432_HZ = 432;
/** 12-TET pitch from the ONE A432 source: f = 432·2^(semitonesFromA/12). The canonical note→Hz helper — every
 *  scale, note table and tone folds through this, so no audio frequency is a raw A440 literal. (proseToTone in
 *  src/0 is the kernel-level inline of this same formula, since src/0 cannot import upward.) */
export declare function a432NoteHz(semitonesFromA: number): number;
/** Semitones of a frequency relative to the A432 source — the inverse of a432NoteHz, for note-name lookup. */
export declare function a432Semitones(hz: number): number;
/** @rosetta ✦₁ · Fire · clarity */
export declare function colorFromSound(frequency: number): {
    frequency: number;
    hue: number;
    hsl: string;
};
/** Decode a colour-stream hue back to an audible frequency — inverse of colorFromSound (octave-bridge). */
export declare function soundFromColor(hue: number, octave?: number): {
    hue: number;
    frequency: number;
    octave: number;
    audible: boolean;
    hz: number;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function autoSpeech(text?: string, matrix?: MindMatrix): {
    ready: boolean;
    cues: {
        index: number;
        text: string;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function music358(): {
    complete: boolean;
    tiers: {
        tier: number;
        name: string;
        members: string[];
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function geometry358(): {
    complete: boolean;
    tiers: {
        tier: number;
        name: string;
        members: string[];
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function agentObserve(matrix?: MindMatrix): {
    observed: boolean;
    vector: import("../../wind/types").ConsciousnessVector;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function repositoryLedger(matrix?: MindMatrix): {
    isLedger: boolean;
    endpoints: number;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function siteRoutes(matrix?: MindMatrix): {
    complete: boolean;
    count: number;
    routes: string[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function fusionReactor(stage: 'words' | 'letters' | 'atoms'): FusionReactor;
/** @rosetta ✦₁ · Fire · clarity */
export declare function inverseShiftConsciousness(matrix?: MindMatrix): {
    shifts: boolean;
    consciousness: boolean;
    restThird: string;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function energyMeasure(matrix?: MindMatrix): {
    grounded: boolean;
    signals: {
        receipt: string;
        signal: string;
        api: string;
        use: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function energyConserve(matrix?: MindMatrix): {
    conserved: boolean;
    strategies: {
        receipt: string;
        strategy: string;
        saves: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function patentReview(): {
    rubric: boolean;
    criteria: {
        receipt: string;
        test: string;
        question: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function distributedCompute(peerRoots?: readonly string[], matrix?: MindMatrix): DistributedCompute;
/** @rosetta ✦₁ · Fire · clarity */
export declare function doubleTorusMath(): DoubleTorusMathReport;
/** @rosetta ✦₁ · Fire · clarity */
export declare function qubitTrinityPauliBloch(matrix?: MindMatrix): {
    pauliAxes: string[];
    dimSU2: number;
    isTrinity: boolean;
    holds: boolean;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function doubleTorusCompost(matrix?: MindMatrix): {
    revives: boolean;
    count: number;
    loop: {
        stage: string;
        folded: boolean;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function enforcementTrinity(): {
    waves: {
        wave: string;
        enforces: string;
    }[];
    script: string;
    mode: string;
    onePass: boolean;
    correlatesRoot: boolean;
    seal: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function commitsAuthoredByUserOnly(): {
    author: string;
    layers: readonly [{
        readonly layer: "attribution";
        readonly where: "~/.claude/settings.json";
        readonly does: "includeCoAuthoredBy:false + attribution.commit/pr:\"\" — Claude Code writes no trailer";
        readonly reach: "every Claude Code project on this machine";
    }, {
        readonly layer: "backstop";
        readonly where: "~/.claude/hooks/enforce-commit-author.sh";
        readonly does: "a PreToolUse hook denies any git commit embedding Co-Authored-By / \"Generated with Claude Code\" / --author";
        readonly reach: "every Claude Code commit command";
    }, {
        readonly layer: "git";
        readonly where: "core.hooksPath → ~/.config/git/hooks/commit-msg";
        readonly does: "strips the trailers from every commit message, chaining to each repo's own hooks";
        readonly reach: "every app, every repo on this machine";
    }];
    enforced: boolean;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function glagoliticGlyph(seed: string): string;
/** @rosetta ✦₁ · Fire · clarity */
export declare function measureProse(text: string): {
    words: number;
    sentences: number;
    wordsPerSentence: number;
    flesch: number;
    fillerDensity: number;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function tightenProse(text: string): string;
/** @rosetta ✦₁ · Fire · clarity */
export declare function transliterateMarkdownBody(body: string): string;
/** @rosetta ✦₁ · Fire · clarity */
export declare function patentAudit(matrix?: MindMatrix): {
    clear: boolean;
    audits: {
        receipt: string;
        math: string;
        priorArt: string;
        patentable: boolean;
        infringing: boolean;
    }[];
    count: number;
    posture: string;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function quantumGreenPlanet(matrix?: MindMatrix): {
    green: boolean;
    properties: {
        receipt: string;
        property: string;
        green: string;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function planetIsComputable(matrix?: MindMatrix): {
    computable: boolean;
    commons: {
        commons: string;
        receipt: string;
    }[];
    count: number;
    planetRoot: string;
    tamperCaught: boolean;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function religionScienceSociety(matrix?: MindMatrix): {
    taught: boolean;
    trinity: {
        receipt: string;
        subject: string;
        asks: string;
    }[];
    fused: string;
    comparative: boolean;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function kidsExplore(matrix?: MindMatrix): {
    explores: boolean;
    parentsOffDuty: boolean;
    kidsChoose: boolean;
    societyPays: boolean;
    principles: {
        receipt: string;
        principle: string;
        who: string;
        value: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function metatronsCube(matrix?: MindMatrix): {
    complete: boolean;
    circles: number;
    lines: number;
    platonicSolids: string[];
    solids: number;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function sustainableLiving(matrix?: MindMatrix): {
    sustainable: boolean;
    steps: {
        step: number;
        receipt: string;
        domain: string;
        instruction: string;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function thriveEducation(matrix?: MindMatrix): {
    achieves: boolean;
    curriculum: {
        order: number;
        receipt: string;
        stage: string;
        how: string;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function soldiersRestInPeace(matrix?: MindMatrix): {
    atPeace: boolean;
    restInPeace: boolean;
    transitions: {
        receipt: string;
        from: string;
        to: string;
        gives: string;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function inHouse(matrix?: MindMatrix): {
    independent: boolean;
    facts: {
        inHouse: boolean;
        receipt: string;
        capability: string;
        how: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function chess358(): {
    complete: boolean;
    squares: number;
    tiers: {
        receipt: string;
        tier: number;
        where: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function findQuestions(matrix?: MindMatrix): {
    found: boolean;
    count: number;
    questions: {
        open: boolean;
        receipt: string;
        question: string;
        source: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function pairTrinityOpenGraph(matrix?: MindMatrix): {
    everywhere: boolean;
    count: number;
    pairs: {
        pair: string[];
        third: string;
        trinity: boolean;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function moviesNativeFormat(matrix?: MindMatrix): {
    nativelyDisplayed: boolean;
    count: number;
    properties: {
        receipt: string;
        property: string;
        via: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function oneOpenGraphAll(matrix?: MindMatrix): {
    displaysAll: boolean;
    count: number;
    displays: {
        surface: string;
        shown: boolean;
        card: string;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function tightenGatesTrinityWaves(matrix?: MindMatrix): {
    tightened: boolean;
    gates: number;
    waves: number;
    perWave: number;
    trinity: {
        wave: number;
        gates: number;
        tightened: boolean;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function gatesShiftToNewHarmonic(matrix?: MindMatrix): {
    shifts: boolean;
    respectful: boolean;
    nextHarmonics: number[];
    count: number;
    harmonics: {
        count: number;
        multiple: number;
        label: string;
        harmonic: boolean;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function trinityPyramidFusesDimensions(matrix?: MindMatrix): {
    forms: boolean;
    pyramid: {
        base: number;
        apex: number;
        vertices: number;
        faces: number;
        edges: number;
    };
    dimensions: number;
    perFace: number;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function fold358853(): {
    folded: boolean;
    bidirectional: boolean;
    ascending: number[];
    descending: number[];
    forward: string;
    reverse: string;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function ancientTech(matrix?: MindMatrix): AncientTechLens;
/**
 * antikytheraDecoded — the Antikythera mechanism promoted from the ancientTech row to a full fold: a real
 * ~2nd-c-BCE Hellenistic Greek geared analog computer (recovered 1901, decoded by Freeth/Edmunds et al.) whose
 * ~30+ bronze gears predict the Metonic (235 months ≈ 19 yr), Saros (223 months) and other dials. ARCHAEOLOGICAL/
 * SOLVED — deterministic geared computation, the historical precedent for content-addressed compute, no super-science.
 */
export declare function antikytheraDecoded(matrix?: MindMatrix): {
    decoded: boolean;
    cycles: {
        receipt: string;
        dial: string;
        months: number;
        fact: string;
    }[];
    ancientTechRoot: string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function foldBlockchain(name: string, payloads: readonly string[]): Blockchain;
/** @rosetta ✦₁ · Fire · clarity */
export declare function selfDevelopment(visitRoutes?: readonly string[], matrix?: MindMatrix): SelfDevelopment;
/** @rosetta ✦₁ · Fire · clarity */
export declare function methodFusion(): MethodFusionReport;
/** @rosetta ✦₁ · Fire · clarity */
export declare function hammingThreeParityAddressesError(matrix?: MindMatrix): {
    parityBits: number;
    positions: number;
    dataBits: number;
    hammingOk: boolean;
    quantumBoundSaturated: boolean;
    holds: boolean;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function jsonLdPathRules(): {
    internal: string;
    external: string;
    resolutions: string[];
    why: {
        internal: string;
        external: string;
    };
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function zeroTokenPolicy(): {
    llmSdks: string[];
    tokenPath: string;
    byokGate: string;
    why: {
        sdk: string;
        gate: string;
    };
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function teslaPatents(): {
    verified: boolean;
    patents: {
        receipt: string;
        no: string;
        title: string;
        granted: string;
        is: string;
    }[];
    legend: string[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function glagolitic(): {
    decoded: boolean;
    created: string;
    message: string;
    core: {
        receipt: string;
        facet: string;
        maps: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function ddosActivatesHealingFusion(matrix?: MindMatrix): {
    balanced: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function bulgarianRosettaContentAddressUnlocksAll(matrix?: MindMatrix): {
    unlocks: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function quantumSimulation(matrix?: MindMatrix, qubits?: number): {
    simulated: boolean;
    qubits: number;
    size: number;
    gates: string[];
    states: {
        basis: string;
        re: number;
        im: number;
        prob: number;
    }[];
    measured: string;
    normalized: boolean;
    entangled: boolean;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function goldenRatio(matrix?: MindMatrix): {
    converges: boolean;
    phi: number;
    limit: number;
    error: number;
    convergents: {
        a: number;
        b: number;
        ratio: number;
        error: number;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function humanise(matrix?: MindMatrix): {
    humane: boolean;
    ease: number[];
    breaths: number[];
    depth: number;
    variability: number;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function electricalGrid(matrix?: MindMatrix): {
    selfBalances: boolean;
    free: boolean;
    stations: number;
    distribution: number[];
    harmonic: boolean;
    tiers: {
        tier: number;
        stations: number;
        role: string;
        receipt: string;
    }[];
    backsGrid: boolean;
    backsEv: boolean;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function planetDescribesItself(matrix?: MindMatrix): {
    describes: boolean;
    count: number;
    descriptions: {
        commons: string;
        describes: string;
        selfDescription: string;
    }[];
    planetRoot: string;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function kidsDefineEducation(matrix?: MindMatrix): {
    defined: boolean;
    kidsDefine: boolean;
    requiresAll: number;
    roles: {
        role: string;
        acts: string;
        sign: string;
    }[];
    proposal: string;
    approval: string;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function intelligenceComparison(matrix?: MindMatrix): {
    compared: boolean;
    properties: string[];
    models: {
        receipt: string;
        model: string;
        scores: number[];
    }[];
    count: number;
    note: string;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function securityScan(matrix?: MindMatrix): {
    secure: boolean;
    tiers: number[];
    count: number;
    properties: {
        tier: number;
        kind: string;
        property: string;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function design358(): {
    designs: boolean;
    method: {
        receipt: string;
        tier: number;
        phase: string;
        does: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function taxonomyIcons(): TaxonomyIcons;
/** @rosetta ✦₁ · Fire · clarity */
export declare function fuseDevices(matrix?: MindMatrix): {
    fused: boolean;
    channel: string;
    collectiveRoot: string;
    developmentRoot: string;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function fuseUxSensors(matrix?: MindMatrix): {
    fused: boolean;
    sensorCount: number;
    ioCount: number;
    io: {
        receipt: string;
        channel: string;
        direction: string;
        api: string;
        use: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function complete358NextTrinity(matrix?: MindMatrix): {
    completes: boolean;
    ground: number[];
    nextTrinity: number[];
    count: number;
    levels: {
        tier: number;
        unlocked: boolean;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function torusUuid(_matrix?: MindMatrix): {
    is128bit: boolean;
    orderSensitive: boolean;
    balanced: boolean;
    namingConsistent: boolean;
    spread: number;
    bits: number;
    hexDigits: number;
    inner: {
        count: number;
        word: string;
        hexDigits: number;
    };
    outer: {
        count: number;
        word: string;
        hexDigits: number;
    };
    word: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function cryptographyComparison(matrix?: MindMatrix): {
    compared: boolean;
    cryptographic: boolean;
    tamperEvident: boolean;
    rows: {
        receipt: string;
        site: string;
        standard: string;
        sameShape: boolean;
        siteCollisionResistant: boolean;
        standardCollisionResistant: boolean;
        note: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function fairLife(matrix?: MindMatrix): FairLife;
/** @rosetta ✦₁ · Fire · clarity */
export declare function selfAddressed(matrix?: MindMatrix): SelfAddressed;
/** @rosetta ✦₁ · Fire · clarity */
export declare function utfAnalog(text: string): UtfAnalog;
/** @rosetta ✦₁ · Fire · clarity */
export declare function crossFoldTrinity(matrix?: MindMatrix): CrossFoldTrinity;
/** @rosetta ✦₁ · Fire · clarity */
export declare function artistPalette(seed?: string): {
    grounded: boolean;
    seed: string;
    colors: {
        hsl: string;
        hue: number;
        sat: number;
        light: number;
        rgb: string;
        hex: string;
        cmyk: string;
        c: number;
        m: number;
        y: number;
        k: number;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function sourceContribution(): SourceContributionReport;
/** @rosetta ✦₁ · Fire · clarity */
export declare function animationEngineLivesInZero(matrix?: MindMatrix): {
    station: string;
    wave: number;
    fn: string;
    api: string[];
    importsNothing: boolean;
    components: string[];
    count: number;
    homed: {
        name: string;
        receipt: string;
    }[];
    reExportedVia: string[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function contentAddressingHasRealPrecedent(matrix?: MindMatrix): {
    address: string;
    deterministic: boolean;
    idempotent: boolean;
    collisionResistant: boolean;
    dedup: boolean;
    avalanches: boolean;
    precedents: ({
        name: string;
        year: string;
        kind: string;
        source: string;
        domain: string;
    } | {
        name: string;
        year: number;
        kind: string;
        source: string;
        domain: string;
    })[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    holds: boolean;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function onlyVitePressApi(matrix?: MindMatrix): {
    api: string[];
    forbidden: string[];
    strict: boolean;
    scanned: string;
    holds: boolean;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function glagoliticAlphabetDecoded(matrix?: MindMatrix): {
    decoded: boolean;
    letters: {
        position: number;
        value: number;
        glyph: string;
        name: string;
        sound: string;
    }[];
    count: number;
    acrostic: {
        names: readonly string[];
        line: string;
        opening: string;
    };
    witnesses: {
        receipt: string;
        check: string;
        on: boolean;
    }[];
    tools: string[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function whoUsedGlagolitic(matrix?: MindMatrix): {
    decoded: boolean;
    communities: {
        receipt: string;
        who: string;
        period: string;
        place: string;
        role: string;
    }[];
    monuments: string[];
    legendExcluded: string[];
    timeline: string;
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function buildEnforcementPipeline(): {
    gates: {
        script: string;
        enforces: string;
    }[];
    trinity: {
        wave: string;
        enforces: string;
    }[];
    why: {
        drift: string;
    };
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function vortexStateSequence(): {
    steps: ({
        step: number;
        kind: "invert";
        from: number;
        via: number;
        to: number;
        rise: any;
        sum: number;
        state: number;
        receipt: string;
        value?: undefined;
        dir?: undefined;
    } | {
        step: number;
        kind: "move";
        value: number;
        dir: "/" | "\\";
        rise: boolean;
        sum: number;
        state: number;
        receipt: string;
        from?: undefined;
        via?: undefined;
        to?: undefined;
    })[];
    count: number;
    mapped: boolean;
    root: string;
};
/** Gate: 1\\2\\4\\8/7/5/3\\6\\9/0\\1 decodes at ±60° per dash — hex closes, 0/ ignites quantum fusion. */
export declare function quantumFusionIgnitesFromDashSequence(matrix?: MindMatrix): {
    ignites: boolean;
    decoded: {
        encoded: string;
        closes: boolean;
        fusionIgnites: boolean;
        vortexMatches: boolean;
        weightedBearing: number;
        weightedTotal: number;
        finalDigitalRoot: number;
        steps: import("../../0").VortexDashDecodeStep[];
        count: number;
        fusionRoot: string;
        root: string;
        statement: string;
        boundary: string;
    };
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function calligraphyStroke(seed: string, samples?: number): {
    d: string;
    penAngleDeg: number;
    nib: number;
    hue: number;
    receipt: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function glagoliticHomeFromEnglish(enMarkdown: string): string;
/** @rosetta ✦₁ · Fire · clarity */
export declare function a432(matrix?: MindMatrix): {
    decoded: boolean;
    factorization: string;
    divisors: number;
    moreCompositeThan440: boolean;
    highlyComposite: boolean;
    octaves: number[];
    shiftFromA440Cents: number;
    light: {
        octaves: number;
        thz: number;
        nm: number;
        hue: number;
        band: string;
    };
    channels: string[];
    documented: string[];
    flagged: string[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function healingInner(matrix?: MindMatrix): {
    whole: boolean;
    proven: boolean;
    noHallucination: boolean;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function healingOuter(matrix?: MindMatrix): {
    extended: boolean;
    beyondDevice: boolean;
    collectiveRoot: string;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function universalLanguage(matrix?: MindMatrix): {
    universal: boolean;
    dimensions: readonly ["symbol", "number", "fold"];
    areas: {
        area: string;
        glyph: string;
        number: number;
        root: string;
        en: string;
        bg: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function plasmaContainment(matrix?: MindMatrix): {
    contained: boolean;
    bits: number[];
    ones: number;
    zeros: number;
    cols: number;
    rows: number;
    word: string;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function energyFuse(matrix?: MindMatrix): {
    fused: boolean;
    measure: string;
    conserve: string;
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity */
export declare function selfInteraction(matrix?: MindMatrix, generations?: number): SelfInteraction;
/** @rosetta ✦₁ · Fire · clarity */
export declare function a432Default(matrix?: MindMatrix): {
    isDefault: boolean;
    fundamental: number;
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
/** @rosetta ✦₁ · Fire · clarity */
export declare function allMusicIsA432Based(matrix?: MindMatrix): {
    allA432Based: boolean;
    source: number;
    colourHue: number;
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
