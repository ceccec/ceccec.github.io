import type { MindMatrix } from '../../../types/index.ts';
export declare const SHOTS: number;
export type GapResolution = {
    readonly name: string;
    readonly severity: 'BLOCKER' | 'HIGH' | 'MEDIUM' | 'LOW';
    readonly discovered: string;
    readonly fixed: boolean;
    readonly howToFix: string;
    readonly receipt: string;
};
export type LiveTestResult = {
    readonly name: string;
    readonly api: string;
    readonly endpoint: string;
    readonly success: boolean;
    readonly message: string;
    readonly dataPoints: number;
    readonly receipt: string;
};
export type LiveTestReport = {
    readonly testsRun: number;
    readonly testsPassed: number;
    readonly testsFailed: number;
    readonly passRate: number;
    readonly results: readonly LiveTestResult[];
    readonly gaps: readonly string[];
    readonly receipt: string;
};
export declare function liveApiTestSuite(fetch?: any): Promise<LiveTestReport>;
export declare function liveApiTestReport(matrix?: MindMatrix): LiveTestReport;
export declare function liveTestingGapsDiscoveredAndFixed(matrix?: MindMatrix): {
    computes: boolean;
    facets: {
        ok: boolean;
        count: number;
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
    };
    gaps: GapResolution[];
    statement: string;
    receipt: string;
};
export declare function liveTestingDiscovery(matrix?: MindMatrix): {
    computes: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
};
export type IbmQuantumBackend = 'simulator_statevector' | 'ibmq_qasm_simulator' | 'ibmq_jakarta' | 'ibmq_manila';
export interface IbmQuantumJob {
    id: string;
    status: 'QUEUED' | 'RUNNING' | 'COMPLETED' | 'FAILED' | 'CANCELLED';
    result?: {
        counts: Record<string, number>;
    };
    error_message?: string;
}
export declare function ibmQuantumSubmitJob(token: string, qasm: string, shots?: number, backend?: IbmQuantumBackend): Promise<IbmQuantumJob | {
    error: string;
}>;
export declare function ibmQuantumGetJob(token: string, jobId: string): Promise<IbmQuantumJob | {
    error: string;
}>;
export declare function ibmQuantumTest(matrix?: MindMatrix): {
    name: string;
    api: string;
    endpoint: string;
    requires: string;
};
export type AwsBraketDevice = 'sv1' | 'tn1' | 'dm1' | 'local';
export interface AwsBraketJob {
    deviceArn: string;
    quantumTaskArn?: string;
    status: 'QUEUED' | 'RUNNING' | 'COMPLETED' | 'FAILED' | 'CANCELLED';
    result?: {
        measurements?: number[][];
    };
    errorMessage?: string;
}
export declare function awsBraketSubmitTask(accessKey: string, secretKey: string, circuit: string, shots?: number, device?: AwsBraketDevice): Promise<AwsBraketJob | {
    error: string;
}>;
export declare function awsBraketGetTask(accessKey: string, secretKey: string, taskArn: string): Promise<AwsBraketJob | {
    error: string;
}>;
export declare function awsBraketTest(matrix?: MindMatrix): {
    name: string;
    api: string;
    endpoint: string;
    requires: string;
};
export type AzureQuantumProvider = 'ionq' | 'rigetti' | 'quantinuum' | 'microsoft-qci';
export type AzureQuantumTarget = 'ionq.simulator' | 'ionq.qpu.aria-1' | 'rigetti.qvm' | 'quantinuum.qpu.h1';
export interface AzureQuantumJob {
    id: string;
    provider: AzureQuantumProvider;
    target: AzureQuantumTarget;
    status: 'waiting' | 'executing' | 'succeeded' | 'failed' | 'cancelled';
    result?: {
        counts?: Record<string, number>;
        histograms?: Record<string, Record<string, number>>;
    };
    errorMessage?: string;
}
export declare function azureQuantumSubmitJob(token: string, subscription: string, resourceGroup: string, workspace: string, circuit: string, shots?: number, provider?: AzureQuantumProvider, target?: AzureQuantumTarget): Promise<AzureQuantumJob | {
    error: string;
}>;
export declare function azureQuantumGetJob(token: string, subscription: string, workspace: string, jobId: string): Promise<AzureQuantumJob | {
    error: string;
}>;
export declare function azureQuantumTest(matrix?: MindMatrix): {
    name: string;
    api: string;
    endpoint: string;
    requires: string;
};
export declare function quantumHardwareCapabilities(ibmToken?: string, awsKeys?: {
    access: string;
    secret: string;
}, azureToken?: string): Promise<{
    ibm: {
        available: boolean;
        provider: string;
        backends: string[];
    };
    aws: {
        available: boolean;
        provider: string;
        devices: string[];
    };
    azure: {
        available: boolean;
        provider: string;
        providers: string[];
    };
}>;
export type CitationSource = 'arxiv' | 'zenodo' | 'crossref' | 'epo-ops' | 'doi' | 'isbn';
export type CitationStatus = 'verified' | 'not-found' | 'error' | 'pending';
export interface Citation {
    id: string;
    source: CitationSource;
    identifier: string;
    title?: string;
    authors?: string[];
    year?: number;
    url?: string;
    status: CitationStatus;
    message?: string;
    latencyMs?: number;
    receipt: string;
}
export interface BatchLoadResult {
    totalCitations: number;
    verified: number;
    notFound: number;
    errors: number;
    pending: number;
    bySource: Record<CitationSource, {
        count: number;
        verified: number;
    }>;
    citations: Citation[];
    totalLatencyMs: number;
    receipt: string;
}
export declare function batchLoadCitations(fetch?: any, epoToken?: string, options?: {
    maxBatchSize?: number;
    delayMs?: number;
}): Promise<BatchLoadResult>;
export declare function citationBatchDiscovery(fetch?: any, matrix?: MindMatrix): Promise<{
    computes: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
}>;
export declare function citationsDescription(): {
    name: string;
    purpose: string;
    apis: string[];
    zeroNetwork: boolean;
    optIn: string;
    measurements: string[];
};
/**
 * CROSS FORMULAS: Formula-Driven Discovery via Involutions (σ)
 *
 * Method: Extract involutions from theorems → classify by Bell bounds →
 * let mathematical structure formulate verification requirements
 *
 * 164 involution patterns found in src/research/index.ts
 * QPU demarcation: mechanical (code-provable) vs quantum (measurement-required)
 */
export type InvolutionDomain = 'functional' | 'arithmetic' | 'graph' | 'topological' | 'algebraic' | 'computational';
export type VerificationMethod = 'code' | 'live-api' | 'hardness-solver' | 'computation' | 'lean-proof';
export interface Involution {
    id: string;
    domain: InvolutionDomain;
    pattern: string;
    fixedPoint?: string;
    verificationMethod: VerificationMethod;
    status: 'proved' | 'open';
    statement: string;
    sigma: (x: number) => number;
    samples: readonly number[];
    model: string;
    perspective?: string;
    through?: string;
    lean?: string;
}
export declare const INVOLUTION_PATTERNS: readonly Involution[];
type InvolutionKind = 'involution' | 'scale-map';
/** σ-CLASS, computed from the map on its samples: negation (σx = −x), reflection (σx + x constant), or its own class. Two rows
 *  of one class carry the same involution on their models; a Clay row reaches a perspective whose row shares its class. */
export declare const sigmaClass: (r: Involution) => string;
/** A row's coins: the SAME map carried one scale forward and one scale reverse along the sealed ladder, around its own axis — the
 *  midline (k−1)/2 of a reflection, 0 of a negation. The coil closes when σ² = id holds at both neighbouring scales and the axis
 *  stays fixed; a scale map (log, 2^t) breaks it at every scale. One computation, every row, both directions. */
export declare function coilOf(r: Involution): {
    class: string;
    scale: number;
    forward: number;
    reverse: number;
    coinForward: boolean;
    coinReverse: boolean;
    closed: boolean;
};
export declare function rosettaRotation(matrix?: MindMatrix): {
    computes: boolean;
    coils: {
        class: string;
        scale: number;
        forward: number;
        reverse: number;
        coinForward: boolean;
        coinReverse: boolean;
        closed: boolean;
        id: string;
        kind: InvolutionKind;
    }[];
    closed: number;
    broken: string[];
    statement: string;
};
export declare function allInvolutions(matrix?: MindMatrix): {
    total: number;
    selfInverse: number;
    scaleMaps: string[];
    byDomain: Record<InvolutionDomain, number>;
    byMethod: Record<VerificationMethod, number>;
    involutions: {
        kind: InvolutionKind;
        fixedPoints: number[];
        id: string;
        domain: InvolutionDomain;
        pattern: string;
        fixedPoint?: string;
        verificationMethod: VerificationMethod;
        status: "proved" | "open";
        statement: string;
        sigma: (x: number) => number;
        samples: readonly number[];
        model: string;
        perspective?: string;
        through?: string;
        lean?: string;
    }[];
};
export declare function involutionsByBellBound(matrix?: MindMatrix): {
    mechanical: {
        count: number;
        involutions: {
            kind: InvolutionKind;
            fixedPoints: number[];
            id: string;
            domain: InvolutionDomain;
            pattern: string;
            fixedPoint?: string;
            verificationMethod: VerificationMethod;
            status: "proved" | "open";
            statement: string;
            sigma: (x: number) => number;
            samples: readonly number[];
            model: string;
            perspective?: string;
            through?: string;
            lean?: string;
        }[];
    };
    quantum: {
        count: number;
        involutions: {
            kind: InvolutionKind;
            fixedPoints: number[];
            id: string;
            domain: InvolutionDomain;
            pattern: string;
            fixedPoint?: string;
            verificationMethod: VerificationMethod;
            status: "proved" | "open";
            statement: string;
            sigma: (x: number) => number;
            samples: readonly number[];
            model: string;
            perspective?: string;
            through?: string;
            lean?: string;
        }[];
    };
};
export declare function involutionDiscovery(matrix?: MindMatrix): {
    computes: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
};
/**
 * UI Configuration derived from Cross Formulas & MCP Lattice
 *
 * NO HARDCODING. All exports, structure, config derived from:
 * - 2×7 rosetta lattice (MCP tools)
 * - 15+ cross formulas (involutions σ)
 * - Combinatorial closure (σ²=id)
 *
 * This prevents duplicates: formula-driven generation forces 1 source of truth
 */
/**
 * Derive ui module exports from cross formulas
 * Each involution σ maps to one family of exports
 */
export declare function uiExportsFromCrossFormulas(matrix?: MindMatrix): {
    mechanical: {
        count: number;
        domains: string[];
        exports: {
            name: string;
            category: InvolutionDomain;
            source: string;
        }[];
    };
    quantum: {
        count: number;
        domains: string[];
        exports: {
            name: string;
            category: InvolutionDomain;
            source: string;
        }[];
    };
};
/**
 * Derive site structure from MCP lattice (2×7+1)
 * Each lattice cell = one export family
 * No hardcoded nav, no manual exports
 */
export declare function uiStructureFromMcpLattice(): {
    core: {
        count: number;
        role: string;
    };
    rosetta: {
        width: number;
        height: number;
        cells: number;
        rows: {
            y: number;
            name: string;
            tools: number;
        }[];
    };
    totalTools: number;
};
/**
 * Involution closure: σ²=id
 * If a config satisfies σ(σ(x))=x, it's self-consistent
 * Use this to validate no duplicates
 */
export declare function validateInvolutionClosure(exports: string[]): {
    unique: number;
    total: number;
    duplicates: string[];
    isClosed: boolean;
};
/**
 * Formula-based site config
 * Derives everything from cross formulas + MCP lattice
 * Zero hardcoded values
 */
export declare function formulaDrivenSiteConfig(matrix?: MindMatrix): {
    computes: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    config: {
        formulas: {
            mechanical: {
                count: number;
                domains: string[];
                exports: {
                    name: string;
                    category: InvolutionDomain;
                    source: string;
                }[];
            };
            quantum: {
                count: number;
                domains: string[];
                exports: {
                    name: string;
                    category: InvolutionDomain;
                    source: string;
                }[];
            };
        };
        structure: {
            core: {
                count: number;
                role: string;
            };
            rosetta: {
                width: number;
                height: number;
                cells: number;
                rows: {
                    y: number;
                    name: string;
                    tools: number;
                }[];
            };
            totalTools: number;
        };
        closure: {
            unique: number;
            total: number;
            duplicates: string[];
            isClosed: boolean;
        };
    };
    statement: string;
};
/** THE TRINITY FAMILIES, the fold's mirror of the SDK's placement (verify:mcp-transport holds the two equal and equal to the
 *  served list): every tool is one role of one family; the count is families × (research, edit, verify), computed — 18 with the Lean family. */
export declare const MCP_TRINITY: readonly ["research", "edit", "verify"];
export declare const MCP_TRINITIES: readonly [{
    readonly family: "meta";
    readonly research: "list_capabilities";
    readonly edit: "run_export";
    readonly verify: "run_gate";
}, {
    readonly family: "leads";
    readonly research: "next_leads";
    readonly edit: "run_wave";
    readonly verify: "census_status";
}, {
    readonly family: "compute";
    readonly research: "fold_report";
    readonly edit: "compute_from_source";
    readonly verify: "live_testing";
}, {
    readonly family: "quantum";
    readonly research: "quantum_capabilities";
    readonly edit: "quantum_submit_job";
    readonly verify: "quantum_get_status";
}, {
    readonly family: "release";
    readonly research: "release_readiness";
    readonly edit: "publish_package";
    readonly verify: "live_connectors";
}, {
    readonly family: "lean";
    readonly research: "lean_search";
    readonly edit: "lean_source";
    readonly verify: "lean_verify";
}];
export declare const MCP_TOOLS: ("census_status" | "compute_from_source" | "list_capabilities" | "fold_report" | "run_gate" | "run_wave" | "run_export" | "next_leads" | "live_testing" | "quantum_capabilities" | "quantum_submit_job" | "quantum_get_status" | "release_readiness" | "publish_package" | "live_connectors" | "lean_search" | "lean_source" | "lean_verify")[];
export type McpToolName = (typeof MCP_TOOLS)[number];
export declare function isMcpTool(name: string): name is McpToolName;
export declare function mcpToolList(): {
    name: "census_status" | "compute_from_source" | "list_capabilities" | "fold_report" | "run_gate" | "run_wave" | "run_export" | "next_leads" | "live_testing" | "quantum_capabilities" | "quantum_submit_job" | "quantum_get_status" | "release_readiness" | "publish_package" | "live_connectors" | "lean_search" | "lean_source" | "lean_verify";
    description: string;
}[];
export type QuantumHardwareProvider = 'ibm' | 'aws' | 'azure';
export type QuantumCircuitFormat = 'openqasm' | 'qasm' | 'quil';
export interface QuantumJobSubmissionInput {
    provider: QuantumHardwareProvider;
    circuit: string;
    circuitFormat?: QuantumCircuitFormat;
    shots?: number;
    backend?: string;
    credentials?: {
        ibmToken?: string;
        awsAccessKey?: string;
        awsSecretKey?: string;
        azureToken?: string;
        azureSubscription?: string;
        azureResourceGroup?: string;
        azureWorkspace?: string;
    };
}
export interface QuantumJobStatusInput {
    provider: QuantumHardwareProvider;
    jobId: string;
    credentials?: {
        ibmToken?: string;
        awsAccessKey?: string;
        awsSecretKey?: string;
        azureToken?: string;
        azureSubscription?: string;
        azureResourceGroup?: string;
        azureWorkspace?: string;
    };
}
export declare function quantumSubmitJob(input: QuantumJobSubmissionInput): Promise<{
    error: string;
    provider?: undefined;
    jobId?: undefined;
    status?: undefined;
} | {
    provider: string;
    jobId: string;
    status: "QUEUED" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED";
    error?: undefined;
} | {
    provider: string;
    jobId: string;
    status: "failed" | "waiting" | "executing" | "succeeded" | "cancelled";
    error?: undefined;
}>;
export declare function quantumGetStatus(input: QuantumJobStatusInput): Promise<{
    error: string;
    provider?: undefined;
    jobId?: undefined;
    status?: undefined;
} | {
    provider: string;
    jobId: string;
    status: "QUEUED" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED";
    error?: undefined;
} | {
    provider: string;
    jobId: string;
    status: "failed" | "waiting" | "executing" | "succeeded" | "cancelled";
    error?: undefined;
}>;
export declare function quantumHardwareCapabilitiesForMcp(): {
    providers: ({
        name: string;
        id: string;
        endpoint: string;
        requiresAuth: boolean;
        envVar: string;
        envVars?: undefined;
    } | {
        name: string;
        id: string;
        endpoint: string;
        requiresAuth: boolean;
        envVars: string[];
        envVar?: undefined;
    })[];
    features: string[];
};
export declare function mcpCombinatorsVerify(): {
    computes: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    families: ("compute" | "quantum" | "meta" | "leads" | "release" | "lean")[];
    statement: string;
};
export type ToolDispatch = {
    readonly name: string;
    readonly handler: string;
    readonly latticeX: number;
    readonly latticeY: number;
};
export declare function deriveToolDispatchTable(): ToolDispatch[];
export type ToolDispatcher = (latticeX: number, latticeY: number, args: Record<string, unknown>) => Promise<Record<string, unknown>>;
export declare function generateDispatcher(table: ToolDispatch[]): ToolDispatcher;
export type ReferrerEdge = {
    readonly ref: string;
    readonly to: string;
    readonly names: readonly string[];
    readonly kind?: 'static' | 'lazy';
};
/** The referrer matrix and its superpositions, pure: edges in, laws out. A superposition is a pair of folds one
 *  referrer takes together — the bond the import graph measures, as opposed to a lattice neighbour it does not. */
export declare function referrerSuperpositions(edges: readonly ReferrerEdge[], folds: readonly string[]): {
    folds: number;
    edges: number;
    referrers: number;
    referred: number;
    pairs: number;
    possible: number;
    density: number;
    reflections: (readonly [string, string])[];
    reflectionsHeld: (readonly [string, string])[];
    mostReferred: {
        fold: string;
        referrers: number;
        names: number;
    };
    ranked: {
        fold: string;
        referrers: number;
        names: number;
    }[];
    topPair: {
        pair: string;
        referrers: number;
    };
    ambiguous: {
        ref: string;
        name: string;
        sources: string[];
    }[];
    unreferred: string[];
    single: {
        fold: string;
        ref: string;
        names: number;
    }[];
    referrersOf: (f: string) => number;
};
/** The laws, refutable: the four reflection pairs are each held in one referrer's superposition; the vault (src/0) is the
 *  most-referred fold and sits in the strongest superposition; every double-torus perspective that names a fold is referred;
 *  a referrer takes a name from one source. The counts that only fall (ambiguous names, unreferred logic) are ratcheted by
 *  verify:referrers, which also supplies the edges — this fold scans nothing. */
export declare function doubleTorusReferrerDiscovery(edges: readonly ReferrerEdge[], folds: readonly string[], matrix?: MindMatrix): {
    computes: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    measurements: {
        ambiguous: {
            ref: string;
            name: string;
            sources: string[];
        }[];
        unreferred: string[];
        single: {
            fold: string;
            ref: string;
            names: number;
        }[];
        ranked: {
            fold: string;
            referrers: number;
            names: number;
        }[];
        topPair: {
            pair: string;
            referrers: number;
        };
        density: number;
    };
    statement: string;
};
export type DatasetState = 'held' | 'refuted' | 'unchecked';
export type DatasetVerdict = {
    readonly state: DatasetState;
    readonly detail: string;
};
/** Odlyzko's zeros1: one imaginary part per line, increasing. N(T) = (T/τ)·log(T/τe) + 7/8 + S(T) with S(T) = O(log T) — range-checked. */
export declare function checkRiemannZeros(text: string): DatasetVerdict;
/** LMFDB ec_curvedata: rank = analytic rank on every catalogued curve returned — the BSD identity on the catalogued range. */
export declare function checkBsdRanks(json: string): DatasetVerdict;
/** OEIS A001223 b-file "n gap": every gap after 2→3 is even (σ: parity) and no gap below the last prime exceeds (log p)² — Cramér, range-checked. */
export declare function checkPrimeGaps(text: string): DatasetVerdict;
/** OEIS A045917 b-file "n r": r(2n) ≥ 1 for every n ≥ 2 — Goldbach on the catalogued range. */
export declare function checkGoldbach(text: string): DatasetVerdict;
/** OEIS b-files joined under '## Axxxxxx' headers, in the row's order: planar graphs on n nodes (A005470), then planar graphs with
 *  χ = 2, 3, 4 (A164099, A164100, A164101). For every n all four list, planar(n) = 1 + χ₂(n) + χ₃(n) + χ₄(n) — the one χ = 1 planar
 *  graph is the edgeless one. A shortfall is a planar graph needing a fifth colour: the four-colour theorem, tested on public data. */
export declare function checkPlanarChromaticPartition(text: string): DatasetVerdict;
/** The datasets by CONNECTOR KEY in the keyless catalogue (src/stats · LIVE_CONNECTORS): the URL derives from the catalogued row —
 *  a b-file sequence is swapped into the row's b-file path, a sample size into its _limit — so one source names every endpoint
 *  and the MCP's live_connectors shows exactly what this gate reads. */
/** OEIS A002496 b-file "n p": every term is n² + 1 for an integer n — so σ(n) = −n yields the same term — and the terms increase.
 *  Primality is OEIS's curation; this reader asserts no primitive it does not have. */
export declare function checkPolynomialPrimes(text: string): DatasetVerdict;
export declare const CLAY_DATASETS: readonly [{
    readonly involution: "polynomial-prime-symmetry";
    readonly connector: "oeis-bfile";
    readonly sequence: "A002496";
    readonly exactness: "exact on the catalogued range — every term is n² + 1";
    readonly check: typeof checkPolynomialPrimes;
}, {
    readonly involution: "riemann-s-involution";
    readonly connector: "odlyzko-zeros";
    readonly exactness: "range-checked — N(T) against Riemann–von Mangoldt within log T + 1";
    readonly check: typeof checkRiemannZeros;
}, {
    readonly involution: "birch-swinnerton-dyer";
    readonly connector: "lmfdb-ec";
    readonly limit: 100;
    readonly exactness: "exact on the catalogued range — rank = analytic rank";
    readonly check: typeof checkBsdRanks;
}, {
    readonly involution: "twin-prime-gap";
    readonly connector: "oeis-bfile";
    readonly sequence: "A001223";
    readonly exactness: "exact parity; Cramér bound range-checked";
    readonly check: typeof checkPrimeGaps;
}, {
    readonly involution: "goldbach-parity";
    readonly connector: "oeis-bfile";
    readonly sequence: "A045917";
    readonly exactness: "exact on the catalogued range — r(2n) ≥ 1";
    readonly check: typeof checkGoldbach;
}, {
    readonly involution: "four-color-planar";
    readonly connector: "oeis-bfile";
    readonly sequences: readonly ["A005470", "A164099", "A164100", "A164101"];
    readonly exactness: "exact on the catalogued range — planar graphs on n nodes partition by χ ∈ {1, 2, 3, 4}";
    readonly check: typeof checkPlanarChromaticPartition;
}];
export type ClayDataset = (typeof CLAY_DATASETS)[number];
export declare function datasetUrls(d: ClayDataset): readonly string[];
export declare const datasetUrl: (d: ClayDataset) => string;
/** The cross, measured: rows = every formula (the Clay seven and the direct extensions); columns = the perspectives a row's own
 *  words reach (common carrier words — the ones most perspectives share — are dropped, so a reach is specific), and the dataset
 *  verdict. The facets state what data or the single rigor map can refute; coverage is RATCHETED by verify:clay-datasets. */
export declare function clayCrossDiscovery(fetched: Readonly<Record<string, string | null>>, matrix?: MindMatrix): {
    computes: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    rows: {
        id: string;
        clay: import("../../../research/index.ts").ClayProblemId;
        rigor: import("../../../research/index.ts").ClayRigorLevel;
        status: "open" | "proved";
        kind: InvolutionKind;
        sigmaClass: string;
        perspectives: string[];
        dataset: "odlyzko-zeros" | "lmfdb-ec" | "oeis-bfile" | `through ${string}`;
        verdict: DatasetVerdict;
        tag: "open" | "overclaim" | "crossed" | "refuted";
        overclaims: number;
        effort: string;
        coil: {
            class: string;
            scale: number;
            forward: number;
            reverse: number;
            coinForward: boolean;
            coinReverse: boolean;
            closed: boolean;
        };
    }[];
    perspectives: ("geometry" | "ui" | "math" | "dynamics" | "data" | "earth" | "quantum" | "merkaba" | "diamonds" | "plasma" | "life" | "fusion" | "star" | "faces" | "physics" | "corpus" | "vortex" | "computer" | "movie" | "algebra" | "voice" | "lens" | "sixty-ninety" | "vite-mirror" | "biology" | "chemistry" | "topology" | "poles-v4" | "geodesy" | "10d-poles")[];
    statement: string;
};
export declare const LEAN_CROSS_FILE = "src/pair/lean/proofs/cross.lean";
/** For any catalogue row that names its map in cross.lean: the theorem there that decides the row's own formula — `<map>_is_an_involution`
 *  for an involution row, a `…not_an_involution` theorem naming the map for a scale-map row — or undefined. Absent where the file
 *  cannot be read, so a browser holds no row by it. */
export declare function leanDecidesRow(root?: string, matrix?: MindMatrix): (id: string) => {
    readonly kindTheorem: string;
} | undefined;
/** The declarations of a Lean file and its reuse graph: declaration i links to every other declaration its text names. */
export declare function leanReuseGraph(text: string): {
    names: string[];
    kinds: string[];
    bodies: string[];
    links: number[][];
};
/**
 * THE SEVEN CLAY CASES, CROSSED WITH THEIR LEAN. Every Clay row of the catalogue names the definition in cross.lean that carries
 * its map, and this fold reads that file and decides, row by row, what the kernel was asked to prove against what this module
 * computes from the row: an involution row has `<map>_is_an_involution`, the scale-map row (Poincaré) has a theorem that it is
 * not one, and the row's σ-class — computed here by sigmaClass — is the cluster theorem that names its map.
 *
 * The clusters are where the thunder of a strike at a row's map carries: to every theorem that uses the map, and from each of
 * them to what it rests on — exact, read off the reuse graph. Inside a cluster the members are ranked by the thunder itself,
 * PageRank over the reuse graph, where a declaration is rated by who imports it. The one law, odd_cancels, must be in the
 * cluster of exactly the rows whose map is an involution. (A first version took the cluster as everything a personalised
 * spread rated above its global rating; that cut-off never reached the law, two hops behind a hub, and was replaced.)
 * It proves the symmetries and their fixed sets, never a conjecture: an open row stays open.
 */
export declare function clayCasesCrossInLean(root?: string, matrix?: MindMatrix): {
    computes: boolean;
    source: "absent";
    facets: {
        facet: string;
        on: boolean;
    }[];
    clusters: any[];
    statement: string;
    declarations?: undefined;
    boundary?: undefined;
} | {
    computes: boolean;
    source: "read";
    facets: {
        facet: string;
        on: boolean;
    }[];
    clusters: {
        id: string;
        clay: import("../../../research/index.ts").ClayProblemId;
        map: string;
        status: "open" | "proved";
        kind: InvolutionKind;
        sigmaClass: string;
        defined: boolean;
        kindProved: boolean;
        kindTheorem: string;
        classProved: boolean;
        classTheorem: string;
        lawHeard: boolean;
        cluster: string[];
    }[];
    declarations: number;
    statement: string;
    boundary: string;
};
export declare function runQuantumCapabilitiesExit(_root?: string, _argv?: readonly string[]): number;
export declare function runQuantumSubmitJobExit(_root?: string, argv?: readonly string[]): Promise<number>;
export declare function runQuantumGetStatusExit(_root?: string, argv?: readonly string[]): Promise<number>;
export declare function runLiveTestingExit(_root?: string, _argv?: readonly string[]): Promise<number>;
export declare function piTrain(): {
    computes: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    rows: {
        d: number;
        tensPair: number;
        ninePair: number;
        root: () => string;
    }[];
    statement: string;
};
export {};
