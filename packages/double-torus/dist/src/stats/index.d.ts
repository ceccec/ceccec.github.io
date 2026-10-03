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
export declare const LIVE_CONNECTORS: readonly [{
    readonly key: "metar";
    readonly url: "https://aviationweather.gov/api/data/metar?ids=KJFK&format=json";
    readonly crossChecks: "airport conditions at a timestamp — and it decodes ITSELF, since rawOb carries A2973, SLP067 and T01670161 beside the parsed altim, slp and temp";
    readonly limit: "100 requests per minute, max 400 entries per response (documented)";
    readonly licence: "US Government public domain";
    readonly reproducible: "versioned — a date= query is a ROLLING 30-day fixture and ages out";
}, {
    readonly key: "open-meteo-archive";
    readonly url: "https://archive-api.open-meteo.com/v1/archive";
    readonly crossChecks: "temperature, precipitation, wind and elevation at a place and past date — refutes invented historical weather";
    readonly limit: "10000/day, 5000/hour, 600/minute (documented)";
    readonly licence: "CC BY 4.0 data, but the FREE TIER EXCLUDES commercial use, adverts and subscriptions";
    readonly reproducible: "fixture beyond ~1 week — the last 5 days are ERA5T and get revised";
}, {
    readonly key: "nist-codata";
    readonly url: "https://physics.nist.gov/cuu/Constants/Table/allascii.txt";
    readonly crossChecks: "any stated physical constant, its uncertainty, and whether it is EXACT — refutes a constant that drifted from CODATA";
    readonly limit: "not documented";
    readonly licence: "NIST public domain";
    readonly reproducible: "fixture — versioned by the CODATA adjustment named in its header";
}, {
    readonly key: "usgs-earthquake";
    readonly url: "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson";
    readonly crossChecks: "magnitude, magnitude TYPE, depth, epicentre and origin time; /count gives an aggregate as one integer";
    readonly limit: "20000 results per query (documented); request rate not documented";
    readonly licence: "US Government public domain";
    readonly reproducible: "versioned — an event id is stable but `updated` moves on revision";
}, {
    readonly key: "jpl-horizons";
    readonly url: "https://ssd.jpl.nasa.gov/api/horizons.api";
    readonly crossChecks: "planetary and lunar position, velocity and range at any epoch — refutes almost any quantitative astronomical claim";
    readonly limit: "ONE REQUEST AT A TIME, no concurrency (documented); application User-Agent required";
    readonly licence: "not documented; no non-commercial clause found";
    readonly reproducible: "fixture — byte-stable, pinned by a named planetary ephemeris";
}, {
    readonly key: "crossref";
    readonly url: "https://api.crossref.org/works/";
    readonly crossChecks: "DOI to title, journal, volume, page and year — refutes a fabricated or mismatched citation";
    readonly limit: "10 requests/second, reported live in x-rate-limit-limit; a mailto User-Agent earns the polite pool";
    readonly licence: "metadata largely uncopyrightable; some abstracts are not";
    readonly reproducible: "versioned — bibliographic core stable, citation counts are NOT and must never be cross-checked";
}, {
    readonly key: "oeis";
    readonly url: "https://oeis.org/search?q=id:A000045&fmt=json";
    readonly crossChecks: "an integer sequence BOTH ways — id to terms, and terms to id, which refutes a claim that a computed sequence is novel";
    readonly limit: "not documented for the JSON endpoint";
    readonly licence: "CC BY-SA 4.0 — share-alike, NOT non-commercial; scraping without consent is prohibited";
    readonly reproducible: "fixture — sequence data and b-files are effectively permanent; the NAME is editable";
}, {
    readonly key: "odlyzko-zeros";
    readonly url: "https://www-users.cse.umn.edu/~odlyzko/zeta_tables/zeros1";
    readonly crossChecks: "the imaginary parts of the first 100 000 zeros of ζ — refutes a claimed zero off the critical line in range, and the Riemann–von Mangoldt count N(T) to within S(T)";
    readonly limit: "not documented — a static file on a university host, read by byte range";
    readonly licence: "no licence statement is published on the tables page; academic data by A. M. Odlyzko — cite the tables";
    readonly reproducible: "fixture — the tables have been static since publication";
}, {
    readonly key: "lmfdb-ec";
    readonly url: "https://www.lmfdb.org/api/ec_curvedata?_format=json&_fields=lmfdb_label,rank,analytic_rank&_limit=5";
    readonly crossChecks: "rank and analytic rank of catalogued elliptic curves over ℚ — refutes a claimed rank, and tests rank = analytic rank (the BSD identity) on the catalogued range";
    readonly limit: "not documented for the JSON API";
    readonly licence: "not quotable keylessly — lmfdb.org/license redirects to an interactive gate (beta.lmfdb.org/gate.html); the site states a licence this reader could not read, so none is asserted here";
    readonly reproducible: "versioned — every response carries a timestamp; a catalogued rank is stable, the set grows";
}, {
    readonly key: "oeis-bfile";
    readonly url: "https://oeis.org/A001223/b001223.txt";
    readonly crossChecks: "the b-file terms of a sequence (prime gaps A001223, Goldbach partitions A045917) — refutes a parity or positivity law on the catalogued range";
    readonly limit: "not documented; b-files are static text, read by byte range";
    readonly licence: "CC BY-SA 4.0 — share-alike, NOT non-commercial; scraping without consent is prohibited";
    readonly reproducible: "fixture — b-files are effectively permanent";
}, {
    readonly key: "noaa-tides";
    readonly url: "https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?product=predictions&application=ceccec&begin_date=20240101&end_date=20240101&datum=MLLW&station=8518750&time_zone=GMT&units=metric&interval=hilo&format=json";
    readonly crossChecks: "the strongest self-contained pair here — product=predictions is a harmonic MODEL and product=water_level the MEASUREMENT at the same station, so the residual is the storm surge";
    readonly limit: "throttled, not numeric; per-request spans capped (6-min <= 1 month, hourly <= 1 year)";
    readonly licence: "US Government public domain";
    readonly reproducible: "fixture for past dates when the quality flag is v (verified)";
}, {
    readonly key: "bgs-geomag";
    readonly url: "https://geomag.bgs.ac.uk/web_service/GMModels/igrf/13/";
    readonly crossChecks: "magnetic declination, inclination and field intensity for a place, altitude and epoch — pairs against a USGS observatory measurement, which agreed to ~0.4%";
    readonly limit: "not documented";
    readonly licence: "IGRF, WMM and WMMHR unrestricted; BGGM is subscriber-only";
    readonly reproducible: "fixture — a closed-form spherical-harmonic evaluation pinned by model revision in the URL";
}, {
    readonly key: "opentargets";
    readonly url: "https://api.platform.opentargets.org/api/v4/graphql";
    readonly method: "POST";
    readonly body: "{\"query\":\"{ target(ensemblId: \\\"ENSG00000139618\\\") { id approvedSymbol biotype } }\"}";
    readonly crossChecks: "an Ensembl gene id to its approved symbol and biotype — refutes a gene named wrongly in a claim; GET returns HTTP 400, so a GET-only probe reports this live service dead";
    readonly limit: "not documented";
    readonly licence: "CC0 for Open Targets data; individual source datasets keep their own terms";
    readonly reproducible: "versioned — a target record is stable but moves with each platform release";
}, {
    readonly key: "gnomad";
    readonly url: "https://gnomad.broadinstitute.org/api";
    readonly method: "POST";
    readonly body: "{\"query\":\"{ gene(gene_symbol: \\\"BRCA2\\\", reference_genome: GRCh38) { gene_id symbol chrom } }\"}";
    readonly crossChecks: "population genotype counts and gene coordinates — the source that showed Hardy-Weinberg holding at K = 3.9952 within one ancestry and breaking under pooling";
    readonly limit: "not documented";
    readonly licence: "open data, no key and no account";
    readonly reproducible: "versioned — keyed by the dataset release, e.g. gnomad_r4";
}];
/**
 * THE REGISTRY IS ONLY WORTH HAVING IF EVERY ROW CARRIES WHAT A CALLER NEEDS TO CALL IT SAFELY.
 *
 * This asserts the shape rather than the network: every connector names a reachable-looking https endpoint,
 * says what it can REFUTE, states a limit or admits none is documented, names a licence, and declares its
 * reproducibility class. Nothing here contacts a server — a fold that fetches is not deterministic, cannot
 * be content-addressed, and would make this a measurement of the network rather than of the registry.
 * The live probe belongs in a gate that reports UNCHECKED when it is offline.
 */
export declare function liveConnectorsRegistered(matrix?: MindMatrix): {
    computes: boolean;
    connectors: 14;
    commerciallyRestricted: number;
    registry: {
        key: "metar" | "open-meteo-archive" | "nist-codata" | "usgs-earthquake" | "jpl-horizons" | "crossref" | "oeis" | "odlyzko-zeros" | "lmfdb-ec" | "oeis-bfile" | "noaa-tides" | "bgs-geomag" | "opentargets" | "gnomad";
        url: "https://aviationweather.gov/api/data/metar?ids=KJFK&format=json" | "https://archive-api.open-meteo.com/v1/archive" | "https://physics.nist.gov/cuu/Constants/Table/allascii.txt" | "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson" | "https://ssd.jpl.nasa.gov/api/horizons.api" | "https://api.crossref.org/works/" | "https://oeis.org/search?q=id:A000045&fmt=json" | "https://www-users.cse.umn.edu/~odlyzko/zeta_tables/zeros1" | "https://www.lmfdb.org/api/ec_curvedata?_format=json&_fields=lmfdb_label,rank,analytic_rank&_limit=5" | "https://oeis.org/A001223/b001223.txt" | "https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?product=predictions&application=ceccec&begin_date=20240101&end_date=20240101&datum=MLLW&station=8518750&time_zone=GMT&units=metric&interval=hilo&format=json" | "https://geomag.bgs.ac.uk/web_service/GMModels/igrf/13/" | "https://api.platform.opentargets.org/api/v4/graphql" | "https://gnomad.broadinstitute.org/api";
        method: string;
        body: string;
    }[];
    reproducibilityClasses: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
};
/**
 * ONE REMAINDER SEQUENCE, SIX DISCIPLINES, AND NOBODY CALLS IT THE SAME THING.
 *
 * (a, b) → (b, a mod b) is Euclid's algorithm. Run it on log₂(3/2) and the convergent denominators are the
 * equal temperaments a musician actually builds — 12, 41, 53. Run it on the tropical year and they are the
 * calendars a civilisation actually adopts — 4 for Julian, 33 for Persian, 128 for the rule that beats
 * Gregorian. Run it on (k, n) and the floor-difference word is the Euclidean rhythm a drummer plays, the
 * Sturmian word a number theorist studies and the line Bresenham rasterises. Run it on the even and odd
 * parts of a polynomial and the quotients are the Routh array a control engineer reads for stability AND
 * the element values of the Cauer ladder a filter designer builds — the same list of rationals, twice.
 *
 * THE LAST PAIR IS THE SHARPEST because nothing about a tuning system suggests a filter: the consecutive
 * ratios of the Routh first column ARE the inductances and capacitances, so a polynomial being stable and
 * its network being realisable from passive parts are one computation with two names.
 */
export declare function euclidIsSixDisciplines(matrix?: MindMatrix): {
    computes: boolean;
    temperamentDenominators: number;
    calendarDenominators: number;
    routhColumnEntries: number;
    ladderElements: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
};
/**
 * THE CIRCLE OF FIFTHS DOES NOT CLOSE, AND THE GAP IS EXACT.
 *
 * Twelve perfect fifths are not seven octaves. (3/2)¹² = 531441/4096 against 2⁷ = 128, a ratio of
 * 531441/524288 — the Pythagorean comma, 23.46 cents. Equal temperament's fifth is not the perfect fifth
 * either: 2^(7/12) = 1.4983… falls 1.955 cents short of 3/2. Both are exact rational facts, and the whole
 * of tuning theory is what to do about them.
 */
export declare function circleOfFifthsDoesNotClose(matrix?: MindMatrix): {
    computes: boolean;
    commaCents: number;
    temperedShortfallCents: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
};
/**
 * THE GREGORIAN CALENDAR IS NOT A BEST RATIONAL APPROXIMATION, AND 49 SMALLER RULES BEAT IT.
 *
 * 97/400 errs +26.78 seconds per year against the mean tropical year. 31/128 errs −0.216 — about 124 times
 * more accurate on a denominator three times smaller — and it is a continued-fraction convergent, which
 * 97/400 is not. Searching every denominator below 400 finds 49 strictly better than the rule in use. The
 * Gregorian cycle is a decimal-friendly compromise, which is a real virtue and a different one from being
 * the best rational approximation it is usually described as.
 */
export declare function gregorianIsNotABestApproximation(matrix?: MindMatrix): {
    computes: boolean;
    gregorianErrorSeconds: number;
    persianErrorSeconds: number;
    betterDenominators: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
};
/**
 * LYNDON WORDS, IRREDUCIBLE POLYNOMIALS AND THE FREE LIE ALGEBRA ARE ONE COUNT.
 *
 * The aperiodic binary necklaces of length n, the monic irreducible polynomials of degree n over GF(2),
 * and the dimension of the degree-n part of the free Lie algebra on two generators are the same integer —
 * (1/n)·Σ_{d|n} μ(d)·2^(n/d). Combinatorics on words, finite-field coding theory and Lie theory each
 * derived it without reference to the others; an LFSR designer picking feedback taps and a combinatorialist
 * counting necklaces are consulting one sequence.
 *
 * APERIODICITY IS THE WHOLE OF IT: counting ALL necklaces instead of the primitive ones breaks the identity
 * immediately, at n = 2 (3 against 1) and never recovers.
 */
export declare function lyndonWordsAreIrreduciblePolynomials(matrix?: MindMatrix): {
    computes: boolean;
    lengthsChecked: number;
    lengthsAgreeing: number;
    perturbationsBreaking: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
};
