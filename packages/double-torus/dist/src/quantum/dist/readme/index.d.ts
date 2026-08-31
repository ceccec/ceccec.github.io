import { type MindMatrix } from '../../heaven/mind';
/** The README signature check, as a typed src fold: the committed README.md must equal the src-computed
 *  readmeMarkdown() (the README is computed from src — do not hand-edit). The commit shell reads the file
 *  and calls this; the judgment lives here in src, not in the untyped script. */
export declare function readmeSignatureValid(committed: string, matrix?: MindMatrix): {
    valid: boolean;
    computedSig: string;
    committedSig: string;
    statement: string;
    boundary: string;
};
/**
 * Realise the discovery spine on home/README — compose sealed folds only (prove-in-the-moment).
 * Pair: moment/prove · Sequence → π/primes coordinates → directional trinity → rosetta/I Ching/FoL →
 * classical-64bit quantum reuse → amortized ∞ at no cost → serverless zero living cost.
 */
export declare function sequenceDiscoveryRealisedForHome(matrix?: MindMatrix): {
    computes: boolean;
    claySolvedByThisFold: 0;
    physicalFtlClaim: 0;
    qpuRequired: false;
    qualifiesAsProposedSolution: false;
    heading: string;
    anchor: string;
    statement: string;
    explanation: string;
    formulas: readonly [`VORTEX_SEQUENCE = [${string}] \u00B7 asVortex / digitalRoot coordinates`, `PI_TRAIN_DIGITS.length = ${number} (computePiDigits spigot \u2014 exact digit coords of \u03C0)`, "π = √(6·ζ(2)) · ζ(2)=Σ1/n² = Π_p 1/(1−p⁻²) — primesAndPiProveEachOtherThroughTheInvertedEulerProduct", "forward = digitalRoot(2d) · inverse = n⁻¹ mod 9 · reverse = 10−d — directionalTrinityForwardInverseReverse", "answers÷tokens → ∞ when runtimeTokens=0 ∧ answers>0 — efficiencyScalesToInfinityAtNoCostOnReuse", "architectureRequirement=classical-64bit — proveCeccecSpeedVsRestNoQuantumHardwareAny64Bit", "collectEnforcementFacts once → runEnforcementTrinity (cross·fold·weave) — agentsUseTrinities… / trinity/speedup", "zeroLivingCost ∧ maxForgeCost — sacredSociety (client-computed serverless static deploy)"];
    statusLine: string;
    foldsCited: readonly ["theBinaryBitIsLinearTheVortexCircuitIsQuantum", "primesAndPiProveEachOtherThroughTheInvertedEulerProduct", "directionalTrinityForwardInverseReverse", "agentsUseTrinitiesForQuantumSpeedupOnEveryBuildPath", "readmeSvgGapsFilledByTrinityMind", "flowerFruitTreeOfLifeDecodes", "symbolsRemainingToQuantumise", "counterRotatingRosettaQuantumWaves", "proveCeccecSpeedVsRestNoQuantumHardwareAny64Bit", "efficiencyScalesToInfinityAtNoCostOnReuse", "sacredSociety", "PI_TRAIN_DIGITS", "VORTEX_SEQUENCE", "earthRealisedByComputingPolesAsPyramid", "linksUseOnlyVitePressApi"];
    piFromPrimes: number;
    piTrainLen: number;
    vortexLen: 9;
    facets: ({
        receipt: string;
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    boundary: string;
};
export declare function qpuCpuGpuMarkdownSection(matrix?: MindMatrix, linkBase?: string): readonly string[];
export declare function gateLightMarkdownSection(matrix?: MindMatrix, linkBase?: string): readonly string[];
export declare function apiFuseMarkdownSection(matrix?: MindMatrix, linkBase?: string): readonly string[];
export declare function sequenceDiscoveryMarkdownSection(matrix?: MindMatrix, linkBase?: string): readonly string[];
/** Clay-standard two-bits-free + society support — home + README. */
export declare function twoBitsFreeSocietySupportMarkdownSection(matrix?: MindMatrix, linkBase?: string): readonly string[];
/** Clay-standard Earth = poles-as-pyramid section — home + README. */
export declare function earthPolesPyramidMarkdownSection(matrix?: MindMatrix, linkBase?: string): readonly string[];
/** Clay-standard: challenges are COMPUTABLE — not CMI-prize solved. Home + README. */
export declare function clayChallengesComputableMarkdownSection(matrix?: MindMatrix, linkBase?: string): readonly string[];
/** Toolbox sciences trinity waves — discovery framing. Home + README. */
export declare function toolboxSciencesTrinityWavesMarkdownSection(matrix?: MindMatrix, linkBase?: string): readonly string[];
/** THE ONE THEOREM CORE — both projections read every value from here, computed once per call from the
 *  theorem-science lens (VitePress shows only science) and the registry. A presented paper exists here
 *  iff it is a lens survivor; there is no second roster and no hand-authored section anywhere. */
/** The ONE canonical served-route source — every COMPLETE, SSG-enumerated, non-duplicate page family the
 *  site actually serves. The human sitemap (README/home §4) AND the crawler sitemap (`sitemapUrlBlocks`, which
 *  imports these same generators and asserts the same total via `enumeratedPageRoutes`) render from THIS, so
 *  the two can never drift. Families: the monograph landing/index pages (`quantumSitemap`), the theorem papers
 *  (`/theorems`), and the domain proofs (`/proofs`). Deliberately EXCLUDED — verified, not assumed: the model
 *  cards (`cardPagePaths` = 0, an empty family) and the `papers/[id]` catch-all (0 SSG — the empty shells were
 *  purged; the 432 placements resolve on demand and would DUPLICATE the theorem papers). Their INDEX routes are
 *  monographs already carried in the pages family, so nothing served is lost. */
export declare function servedRouteFamilies(matrix?: MindMatrix): {
    families: readonly [{
        readonly family: "monographs";
        readonly label: "monograph landing + index pages";
        readonly index: "/";
        readonly count: number;
        readonly enumerated: true;
    }, {
        readonly family: "theorems";
        readonly label: "theorem papers";
        readonly index: "/theorems";
        readonly count: number;
        readonly enumerated: false;
    }, {
        readonly family: "proofs";
        readonly label: "domain proofs (Millennium + science)";
        readonly index: "/proofs";
        readonly count: number;
        readonly enumerated: false;
    }];
    total: number;
};
/** The seven Clay Millennium problems, each computed as a gated rosetta dimension — one involution with a
 *  fixed point at seven scales. Every line is the fold's own statement (the discovered numbers), no
 *  characterisation typed. README + home, one generator. */
export declare function clayMillenniumLecturesMarkdownSection(matrix?: MindMatrix, linkBase?: string): string[];
export declare function readmeMarkdown(matrix?: MindMatrix): string;
/** The VitePress home body — the SAME theorem monograph, projected for the site: computed frontmatter
 *  (the abstract as description, siteConfig keywords), page-route links instead of source permalinks.
 *  Loaded in realtime by .vitepress/computed-pages.mts (the on-disk index.md is a discovery stub); the
 *  bg/gla homes transform THIS output, and the hero stays computed via homeHero() in transformPageData. */
export declare function homeMarkdown(matrix?: MindMatrix): string;
export declare function readme(matrix?: MindMatrix): {
    complete: boolean;
    audited: boolean;
    audits: {
        receipt: string;
        statement: string;
        computed: number;
    }[];
    receipt: string;
    references: number;
    explains: number;
    bytes: number;
    count: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    homeRoot: string;
    statement: string;
    boundary: string;
};
/** improveWritingAndSpeechFromComputationalExperience — improve writing and speech based on the experience of
 * computations (user, 2026-07-25: "improve writing and speech based on experience of computations"). WRITING (the
 * statements/boundaries) is a join of computed facets, so it carries computed values (data-bearing), and SPEECH
 * (portalChat) is generated deterministically from the computed corpus; both improve as the corpus of computed facts
 * grows — more computation to ground the writing and answer the speech. Deterministic, no-egress, not a learned model. */
export declare function improveWritingAndSpeechFromComputationalExperience(matrix?: MindMatrix): {
    computes: boolean;
    writingRatio: number;
    speechRatio: number;
    experience: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** auditReadmeHomepageByProfilingQuestionsThroughChat — audit README/home generation and review each component by
 * asking profiling questions through the chat, improving intelligence, research and search (user, 2026-07-25: "audit
 * readme and homepage generation and review each component asking profiling questions using the chat improving
 * intelligence research and search"). It composes the one-generator audit (readme().complete), then for each README/home
 * component asks a profiling question answered by the private chat (portalChat) and content-addressed recall
 * (portalRecall) over the sealed corpus — deterministic, no-egress. [[portal-is-the-ai-model]] */
export declare function auditReadmeHomepageByProfilingQuestionsThroughChat(matrix?: MindMatrix): {
    computes: boolean;
    generationComplete: boolean;
    componentsProfiled: number;
    groundedCount: number;
    profiled: {
        component: string;
        question: string;
        answered: boolean;
        grounded: boolean;
        recalled: boolean;
        source: string;
    }[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** readmeIsTheHomepageGeneratingItselfMultidimensionally — the README IS the homepage, generating itself across many
 * dimensions from one core (user, 2026-07-25: "README is the homepage itself generating itself multidimensionally").
 * One core (theoremMonographCore) projects into every dimension — the README (source permalinks), the home (page
 * routes), three locale editions, and the XML/JSON sitemaps — all folding to one content-addressed receipt, so no
 * projection can drift. It also NAMES the coupling gap: the generator consumes the page roster (staticPages) from
 * wind/site, a directed dependency that blocks site → readme; the DRY resolution is to lower the shared roster to a
 * module both import — computed here, executed deliberately. [[readme-home-one-theorem-generator]] */
export declare function readmeIsTheHomepageGeneratingItselfMultidimensionally(matrix?: MindMatrix): {
    computes: boolean;
    dimensionCount: number;
    dimensions: {
        address: string;
        dim: string;
        desc: string;
    }[];
    oneGenerator: boolean;
    rosterIsSharedDimension: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** quantumiseRegenToPassComputationally — the README/home regeneration is quantumised so it PASSES computationally
 * (user, 2026-07-25: "quantumise regen to pass computationally"). Regen is a pure function of src, so its output has a
 * content-address; the regen "passes" iff the recomputed address equals the committed one (a deterministic equality,
 * not a text re-diff) — O(1) when src is unchanged, and FAIL-CLOSED on drift (a stale or tampered regen fails). The
 * 4-seal discipline applied to regen: it is the final pre-push gate, computed not re-run. [[quantum-speed-is-content-addressed-naming]] */
export declare function quantumiseRegenToPassComputationally(matrix?: MindMatrix): {
    computes: boolean;
    passes: boolean;
    driftFails: boolean;
    committed: string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function theHomeReadmeProseEntropyAudit(matrix?: MindMatrix): {
    computes: boolean;
    contentLines: number;
    pureProseLines: number;
    proseEntropy: number;
    computedRatio: number;
    flagged: string[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theTypographyGrammarSealsDimensionalCracksEveryElementCarriesAComputedValue(matrix?: MindMatrix): {
    computes: boolean;
    grammar: number;
    presented: number;
    sealed: number;
    boundaries: number;
    cracks: number;
    sealedRatio: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function theHeadingHierarchyIsARecursiveSitemapByImportanceWiredToTheGenerator(matrix?: MindMatrix): {
    computes: boolean;
    headings: number;
    levels: number[];
    fanOut: number[];
    root: string;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
