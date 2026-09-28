import type { MindMatrix } from '../types/index.ts';
export declare function analytics(matrix?: MindMatrix): {
    measured: boolean;
    boards: {
        board: string;
        icon: string;
        metrics: {
            receipt: string;
            metric: string;
            value: number;
        }[];
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function diamondParamsById(id: string, matrix?: MindMatrix): {
    id: string;
    index: string;
    leaf: number;
    number: number;
    address: string;
    kind: string;
    link: string;
    label: string;
    glyph: string;
    hue: number;
    total: number;
    corpusRoot: string;
    depth: number;
};
export declare function restfulFormats(matrix?: MindMatrix): {
    restful: boolean;
    fruitOfLife: number;
    formats: {
        format: string;
        mime: string;
        circle: string;
    }[];
    resources: ({
        resource: string;
        count: number;
        mode: "ssg-detail";
        merkleLeaves?: undefined;
        ssgDetailRoutes?: undefined;
    } | {
        resource: string;
        count: number;
        merkleLeaves: number;
        ssgDetailRoutes: number;
        mode: "compute-pointer";
    } | {
        resource: string;
        count: number;
        merkleLeaves: number;
        ssgDetailRoutes: number;
        mode: "computational-lattice";
    } | {
        resource: string;
        count: number;
        mode: "computed";
        merkleLeaves?: undefined;
        ssgDetailRoutes?: undefined;
    })[];
    crud: {
        verb: string;
        path: string;
        means: string;
        supported: string;
    }[];
    paths: {
        resource: string;
        format: string;
        path: string;
        receipt: string;
    }[];
    pathCount: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function textEntropy(matrix?: MindMatrix): {
    zeroEntropy: boolean;
    total: number;
    referenced: number;
    plain: number;
    plainRatio: number;
    entropy: number;
    referencedRatio: number;
    units: {
        referenced: number;
        plain: number;
        receipt: string;
        unit: string;
        count: number;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function compression(matrix?: MindMatrix): {
    compressed: boolean;
    inputs: number;
    totalUnits: number;
    ratio: string;
    bits: number;
    entropy: number;
    forgeCost: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function analysisFlower(matrix?: MindMatrix): {
    flower: boolean;
    circles: number;
    measures: {
        receipt: string;
        measure: string;
        value: number;
        note: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function globalApis(matrix?: MindMatrix): {
    fused: boolean;
    count: number;
    open: boolean;
    apis: {
        open: boolean;
        fused: boolean;
        receipt: string;
        api: string;
        domain: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function buildStatistics(matrix?: MindMatrix): {
    fused: boolean;
    count: number;
    stats: {
        receipt: string;
        stat: string;
        value: number;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function maxCompressionForge(matrix?: MindMatrix): {
    maxed: boolean;
    units: number;
    bits: number;
    compressionRatio: string;
    forgeCost: number;
    maxTamperingCost: number;
    sameNumber: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function coveragePerPixel(matrix?: MindMatrix): {
    improved: boolean;
    semanticItems: number;
    coverageBefore: number;
    coverageAfter: number;
    ratio: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function buildStatisticsShowGaps(matrix?: MindMatrix): {
    shows: boolean;
    totalGaps: number;
    count: number;
    eyes: {
        clear: boolean;
        receipt: string;
        eye: string;
        gaps: number;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function fleetScaleStatsFused(matrix?: MindMatrix): {
    fused: boolean;
    decoded: boolean;
    perBuildMetrics: number;
    fleetSizes: {
        nodes: number;
        output: number;
        distinctRecompute: number;
        hitRatio: number;
        expectedJoules: number;
        receipt: string;
    }[];
    documented: string[];
    flagged: string[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function crossDomainSearchLaws(matrix?: MindMatrix): {
    computes: boolean;
    lawsChecked: number;
    samplesPerLaw: number;
    arbitraryValuesTried: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
};
/**
 * HARDY–WEINBERG IS THE LAW OF MASS ACTION, WITH EQUILIBRIUM CONSTANT EXACTLY 4.
 *
 * For A + a ⇌ Aa with no selectivity, mass action reads K = [Aa]²/([AA][aa]). Under Hardy–Weinberg the
 * genotype frequencies are p², 2pq and q², so K = (2pq)²/(p²q²) = 4 for EVERY allele frequency — the p
 * cancels completely. Population genetics and physical chemistry are writing one equation, and the 4 is
 * not fitted: it is the square of the 2 that counts the two ordered ways of drawing a pair, the same 2
 * that appears in the antitrust merger rule proved beside this one.
 */
export declare function hardyWeinbergIsMassAction(matrix?: MindMatrix): {
    computes: boolean;
    frequenciesChecked: number;
    worstDeparture: number;
    departureWithoutTheTwo: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
};
/**
 * THE ANTITRUST MERGER RULE IS THE HETEROZYGOTE TERM.
 *
 * Merging two firms with market shares s_i and s_j raises the Herfindahl–Hirschman index by
 * (s_i + s_j)² − s_i² − s_j² = 2 s_i s_j, which IS the Hardy–Weinberg heterozygote frequency 2pq. A
 * competition regulator and a population geneticist compute the same quantity for the same reason: both
 * ask how often two independent draws land in one category. Checked by recomputing the index from scratch
 * after actually performing the merge, never by trusting the expansion.
 */
export declare function mergerRuleIsTheHeterozygoteTerm(matrix?: MindMatrix): {
    computes: boolean;
    mergesRecomputed: number;
    shareVectors: number;
    worstResidual: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
};
/**
 * FOUR PARADOXES ARE ONE FORMULA, AND THE PARADOX IS THE VARIANCE.
 *
 * Sampling a unit with probability proportional to its own size gives E[X²]/E[X] = μ(1 + CV²), which
 * equals μ if and only if the variance is zero. That single expression is the friendship paradox in
 * network science, the class-size paradox in sociology, the inspection paradox in queueing and
 * length-biased sampling in biostatistics. Nothing is paradoxical about any of them: each is the same
 * second moment divided by the same first.
 */
export declare function sizeBiasIsOneFormula(matrix?: MindMatrix): {
    computes: boolean;
    populationsChecked: number;
    worstResidual: number;
    equalityCaseFactor: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
};
/**
 * A POPULATION'S GROWTH RATE IS A BOND'S YIELD, AND ITS GENERATION TIME IS THE BOND'S DURATION.
 *
 * The Euler–Lotka equation Σ φ(a) e^(−ra) = 1 and bond pricing Σ CF_a (1+y)^(−a) = P are the same
 * root-find on the same discounted sum: set CF := φ and P := 1, and r = ln(1+y). The mean length of a
 * generation, Σ a φ(a) e^(−ra) / Σ φ(a) e^(−ra), is then character-for-character Macaulay duration.
 * Demography and fixed income call one solver on one array and rename the output.
 */
export declare function growthRateIsAYield(matrix?: MindMatrix): {
    computes: boolean;
    periodsInSchedule: number;
    rateGap: number;
    durationGap: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
};
/**
 * LITTLE'S LAW IS AN ACCOUNTING IDENTITY, NOT A STATISTICAL ONE.
 *
 * Σ sojourn times = ∫ N(t) dt is Fubini applied to the indicator 1{arrived and not yet departed}. So
 * L = λW holds PATHWISE for any cohort wholly inside the window: no stationarity, no distribution, no
 * independence, no equilibrium. What breaks it is not a violated statistical assumption but a violated
 * cohort — censor a job at the window edge and the two sides part, which is the failure every dashboard
 * that divides a truncated total by a rate is making.
 */
export declare function littlesLawIsAccounting(matrix?: MindMatrix): {
    computes: boolean;
    jobsChecked: number;
    sojournTotal: number;
    censoredTotal: number;
    integralGap: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
};
