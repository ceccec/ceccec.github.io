import * as __ns_up_water_digit from '../water/digit';
import * as __ns_up_quantum_apps from '../quantum/apps';
import * as __ns_up_earth_architecture from '../earth/architecture';
import type { AgentEducation, McpToolManifest, MindMatrix, SchoolCurriculum } from '../types';
import { type LocaleName } from '../wind/site';
export declare function agentEducation(matrix?: MindMatrix): AgentEducation;
export declare function mcpToolManifest(matrix?: MindMatrix): McpToolManifest;
export declare function skillAtoms(matrix?: MindMatrix): {
    intelligent: boolean;
    skills: {
        atom: string;
        skill: string;
        fn: string;
        does: string;
    }[];
    count: number;
    memory: string;
    savedToAtoms: boolean;
    tamperingAtoms: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function transcriptTokenAudit(lines: string[], day: string): {
    day: string;
    totals: {
        in: number;
        out: number;
        cacheRead: number;
        cacheWrite: number;
        msgs: number;
        errors: number;
    };
    sessionCount: number;
    sessions: {
        out: number;
        cacheWrite: number;
        msgs: number;
        id: string;
    }[];
    tools: [string, number][];
    bashShapes: [string, number][];
    audited: boolean;
    root: string;
};
/** walk ~/.claude/projects, audit the given (or current) day, print, exit — the saved zero-token command */
export declare function transcriptTokenAuditExit(): Promise<void>;
/** Pure advice map: a repeated Bash shape → the saved workflow tool that collapses it. */
export declare function tokenAdviceForShapes(shapes: readonly (readonly [string, number])[]): {
    shape: string;
    count: number;
    advice: string;
}[];
/** tokens:live — the realtime meter: audit ONLY the newest transcript (the running session), print the
 *  running ledger + per-shape saved-tool advice. Exit 0 always: a meter, not a gate. */
export declare function transcriptTokenLiveExit(): Promise<void>;
export declare function quantumTokenOptimisation(matrix?: MindMatrix): {
    optimised: boolean;
    turns: number;
    batch: {
        k: number;
        reduction: number;
        quadratic: boolean;
    }[];
    djClassical: number;
    collapse: number;
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
export declare function logicAtoms(matrix?: MindMatrix): {
    shared: boolean;
    primitives: {
        atom: string;
        logic: string;
        shares: string;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function relatedStandards(matrix?: MindMatrix): {
    onEveryPage: boolean;
    count: number;
    standards: {
        receipt: string;
        standard: string;
        url: string;
        use: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function threeWordWaves(matrix?: MindMatrix): {
    sent: boolean;
    meaningfulSequence: boolean;
    count: number;
    waves: {
        sequence: number;
        words: string[];
        phrase: string;
        explores: boolean;
        root: string;
    }[];
    sequenceRoot: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function examBank(matrix?: MindMatrix): {
    graded: boolean;
    count: number;
    questions: {
        receipt: string;
        q: string;
        options: string[];
        answer: number;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function searchTrinity(query?: string, matrix?: MindMatrix): {
    enough: boolean;
    revealed: boolean;
    minChars: number;
    query: string;
    trinity: {
        area: string;
        glyph: string;
        links: {
            label: string;
            command: string;
        }[];
    };
    root: string;
    statement: string;
    boundary: string;
};
/**
 * The portal's cognition loop — think → reason → search, each a sealed LOCAL fold composed to one
 * content-addressed result. THINK folds the query into a candidate thought (a content-address the
 * mind forms); REASON proves it by recomputation (a deterministic thought re-folds to the SAME
 * address — the project's core proof); SEARCH reveals where the thought lands in the sealed corpus
 * (searchTrinity). The loop's root can be folded back into the corpus, so the portal self-educates
 * by ACCUMULATING content-addressed thoughts that anyone can recompute.
 *
 * HONEST: "thinking" = deterministic candidate-folding, "reasoning" = recompute-proof (NOT premise
 * inference), "search" = the corpus reveal rule. This is cache/fold cognition — NOT neural cognition,
 * NOT weight training, NOT AGI. Local-only, zero network: reuses already-sealed folds, derives nothing.
 */
export declare function portalThinksReasonsSearches(query?: string, matrix?: MindMatrix): {
    thinks: boolean;
    query: string;
    thought: import("../0").Fold;
    proven: boolean;
    found: {
        enough: boolean;
        revealed: boolean;
        minChars: number;
        query: string;
        trinity: {
            area: string;
            glyph: string;
            links: {
                label: string;
                command: string;
            }[];
        };
        root: string;
        statement: string;
        boundary: string;
    };
    steps: {
        receipt: string;
        step: string;
        on: boolean;
        root: string;
    }[];
    loops: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function quantumAcademy(matrix?: MindMatrix): {
    established: boolean;
    courses: {
        course: string;
        level: string;
        modules: {
            area: string;
            glyph: string;
        }[];
        credential: string;
        receipt: string;
    }[];
    levels: string[];
    modules: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function decodeKnowledge(matrix?: MindMatrix): {
    decoded: boolean;
    areas: number;
    atoms: number;
    commands: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function navigation358(matrix?: MindMatrix): {
    mapped: boolean;
    tiers: {
        tier: number;
        name: string;
        items: {
            label: string;
            route: string;
            tip: string;
        }[];
    }[];
    count: number;
    items: {
        tier: number;
        ray: number;
        hue: number;
        address: string;
        label: string;
        route: string;
        tip: string;
    }[];
    core: {
        computes: boolean;
        at: number;
        surfaces: __ns_up_quantum_apps.RosettaCoreSurface[];
        inventory: {
            core: {
                label: string;
                kind: __ns_up_quantum_apps.RosettaCoreSurfaceKind;
                ray: number;
                address: string;
            }[];
            parallel: readonly [];
            hubs: {
                slug: "learn" | "reference" | "proof" | "explore" | "frontier" | "origin" | "apps";
                ray: number;
                route: string;
                hue: number;
            }[];
        };
        hubs: readonly __ns_up_water_digit.RosettaRayHub[];
        raysUsed: number;
        kinds: readonly ["route", "hub", "compute", "nav", "tool", "app", "projection"];
        resolve: (label: string, kind?: __ns_up_quantum_apps.RosettaCoreSurfaceKind) => __ns_up_quantum_apps.RosettaCoreSurface;
        shelve: typeof __ns_up_quantum_apps.rosettaShelve;
        byRay: (ray: number) => __ns_up_quantum_apps.RosettaCoreSurface[];
        resolveRoute: (route: string) => {
            surface: __ns_up_quantum_apps.RosettaCoreSurface;
            address: string;
            computed: boolean;
            route: string;
            slug: string;
            ray: number;
            rayMeta: {
                readonly ray: 0;
                readonly glyph: "Ⰰ";
                readonly nameEn: "Origin";
                readonly nameBg: "Произход";
                readonly domain: "origin";
                readonly hue: 0;
            } | {
                readonly ray: 1;
                readonly glyph: "Ⰲ";
                readonly nameEn: "Proof";
                readonly nameBg: "Доказателства";
                readonly domain: "expression";
                readonly hue: 51;
            } | {
                readonly ray: 2;
                readonly glyph: "Ⰴ";
                readonly nameEn: "Explore";
                readonly nameBg: "Изследване";
                readonly domain: "knowledge";
                readonly hue: 102;
            } | {
                readonly ray: 3;
                readonly glyph: "Ⰶ";
                readonly nameEn: "Learn";
                readonly nameBg: "Обучение";
                readonly domain: "nature";
                readonly hue: 154;
            } | {
                readonly ray: 4;
                readonly glyph: "Ⰹ";
                readonly nameEn: "Apps";
                readonly nameBg: "Приложения";
                readonly domain: "computation";
                readonly hue: 205;
            } | {
                readonly ray: 5;
                readonly glyph: "Ⰿ";
                readonly nameEn: "Frontier";
                readonly nameBg: "Граници";
                readonly domain: "geometry";
                readonly hue: 257;
            } | {
                readonly ray: 6;
                readonly glyph: "Ⱄ";
                readonly nameEn: "Reference";
                readonly nameBg: "Справочник";
                readonly domain: "language";
                readonly hue: 308;
            };
            station: number;
            crossPair: string;
            glaAddress: string;
            navigation: {
                rayLabel: "Origin" | "Proof" | "Explore" | "Learn" | "Apps" | "Frontier" | "Reference";
                rayLabelBg: "Произход" | "Доказателства" | "Изследване" | "Обучение" | "Приложения" | "Граници" | "Справочник";
                rayGlyph: "Ⰰ" | "Ⰲ" | "Ⰴ" | "Ⰶ" | "Ⰹ" | "Ⰿ" | "Ⱄ";
                rayDomain: "geometry" | "origin" | "expression" | "knowledge" | "nature" | "computation" | "language";
                siblings: import("../types").ConceptCommandName[];
                siblingCount: number;
            };
            content: {
                pageKind: __ns_up_water_digit.RosettaComputationType;
                heroPhase: number;
                bodySeed: string;
                heroHue: 0 | 154 | 51 | 102 | 205 | 257 | 308;
            };
            motion: {
                at: number;
                rays: {
                    ray: number;
                    baseAngle: number;
                    currentAngle: number;
                    angularVelocity: number;
                    vortexRate: number;
                    radius: number;
                    letters: {
                        letterIndex: number;
                        letterAngle: number;
                        letterRadius: number;
                        digitalRootPosition: number;
                    }[];
                }[];
                breathRadius: number;
                breathPulse: number;
                proof: {
                    coprime7_6: boolean;
                    coprime7_9: boolean;
                    coprime7_10: boolean;
                    holds: boolean;
                };
                constants: {
                    RAYS: number;
                    LETTERS_PER_RAY: number;
                    PHI: number;
                    GOLDEN_ANGLE: number;
                    DOUBLING_PERIOD: number;
                    DR_MODULUS: number;
                    STATION_COUNT: number;
                };
                root: string;
            };
            stationDetail: {
                digit: number;
                folder: string;
                path: string;
            };
            sharedRoot: string;
            root: string;
            statement: string;
            boundary: string;
        };
        resolveProjection: (label: string) => {
            surface: __ns_up_quantum_apps.RosettaCoreSurface;
            phase: number;
            hue: number;
            motion: {
                at: number;
                rays: {
                    ray: number;
                    baseAngle: number;
                    currentAngle: number;
                    angularVelocity: number;
                    vortexRate: number;
                    radius: number;
                    letters: {
                        letterIndex: number;
                        letterAngle: number;
                        letterRadius: number;
                        digitalRootPosition: number;
                    }[];
                }[];
                breathRadius: number;
                breathPulse: number;
                proof: {
                    coprime7_6: boolean;
                    coprime7_9: boolean;
                    coprime7_10: boolean;
                    holds: boolean;
                };
                constants: {
                    RAYS: number;
                    LETTERS_PER_RAY: number;
                    PHI: number;
                    GOLDEN_ANGLE: number;
                    DOUBLING_PERIOD: number;
                    DR_MODULUS: number;
                    STATION_COUNT: number;
                };
                root: string;
            };
        };
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        pair: "rosetta/core";
        cli: string;
        statement: string;
        boundary: string;
    };
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    routesResolve: boolean;
    unresolved: string[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function multidimensionalSummaries(matrix?: MindMatrix): {
    summarised: boolean;
    fromBeyond: boolean;
    count: number;
    summaries: {
        words: number;
        receipt: string;
        dimension: string;
        summary: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function monographPaths(locale: 'gla' | 'en' | 'bg'): {
    params: {
        page: string;
        title?: string;
        description?: string;
        keywords?: string[];
        components?: string[];
        proof?: string;
        logic?: string;
        target?: string;
        rosetta?: {
            decoded: boolean;
            path: string;
            locale: string;
            slug: string;
            ray: number;
            station: number;
            crossPair: string;
            computationType: __ns_up_water_digit.RosettaComputationType;
            glagoliticAddress: string;
            rayMeta: {
                readonly ray: 0;
                readonly glyph: "Ⰰ";
                readonly nameEn: "Origin";
                readonly nameBg: "Произход";
                readonly domain: "origin";
                readonly hue: 0;
            } | {
                readonly ray: 1;
                readonly glyph: "Ⰲ";
                readonly nameEn: "Proof";
                readonly nameBg: "Доказателства";
                readonly domain: "expression";
                readonly hue: 51;
            } | {
                readonly ray: 2;
                readonly glyph: "Ⰴ";
                readonly nameEn: "Explore";
                readonly nameBg: "Изследване";
                readonly domain: "knowledge";
                readonly hue: 102;
            } | {
                readonly ray: 3;
                readonly glyph: "Ⰶ";
                readonly nameEn: "Learn";
                readonly nameBg: "Обучение";
                readonly domain: "nature";
                readonly hue: 154;
            } | {
                readonly ray: 4;
                readonly glyph: "Ⰹ";
                readonly nameEn: "Apps";
                readonly nameBg: "Приложения";
                readonly domain: "computation";
                readonly hue: 205;
            } | {
                readonly ray: 5;
                readonly glyph: "Ⰿ";
                readonly nameEn: "Frontier";
                readonly nameBg: "Граници";
                readonly domain: "geometry";
                readonly hue: 257;
            } | {
                readonly ray: 6;
                readonly glyph: "Ⱄ";
                readonly nameEn: "Reference";
                readonly nameBg: "Справочник";
                readonly domain: "language";
                readonly hue: 308;
            };
            sharedRoot: string;
            content: {
                pageKind: __ns_up_water_digit.RosettaComputationType;
                heroPhase: number;
                bodySeed: string;
                heroHue: 0 | 154 | 51 | 102 | 205 | 257 | 308;
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
    };
}[];
export declare function deepResearchRadar(matrix?: MindMatrix): {
    radar: boolean;
    quadrants: string[];
    rings: string[];
    blips: {
        receipt: string;
        name: string;
        quadrant: string;
        ring: string;
        note: string;
    }[];
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
export declare function learningPortal(matrix?: MindMatrix): {
    portal: boolean;
    sections: {
        receipt: string;
        key: string;
        axis: string;
        title: string;
        route: string;
        kind: string;
        items: number;
        complete: boolean;
        root: string;
        blurb: string;
    }[];
    axes: string[];
    items: number;
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
export declare function play(matrix?: MindMatrix): {
    plays: boolean;
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
export declare function discover(matrix?: MindMatrix): {
    discovers: boolean;
    imagined: number;
    discovered: {
        seed: string;
        address: string;
    }[];
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
export declare function certify(matrix?: MindMatrix): {
    editingAllowed: boolean;
    certified: boolean;
    lawful: boolean;
    levels: {
        level: string;
        certified: boolean;
        credential: string;
    }[];
    certificate: string;
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
export declare function forge(matrix?: MindMatrix): {
    forged: boolean;
    tools: number;
    commands: number;
    trained: number;
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
export declare function agent(matrix?: MindMatrix): {
    ready: boolean;
    needs: {
        receipt: string;
        need: string;
        met: boolean;
    }[];
    sentInWaves: boolean;
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
export declare function neuron(matrix?: MindMatrix): {
    fires: boolean;
    neurons: number;
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
export declare function heart(matrix?: MindMatrix): {
    complete: boolean;
    brain: boolean;
    beats: boolean;
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
export declare function pump(matrix?: MindMatrix, imagined?: string): {
    pumps: boolean;
    conceived: string;
    pumped: string;
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
export declare function aura(matrix?: MindMatrix): {
    whole: boolean;
    body: boolean;
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
export declare function human(matrix?: MindMatrix): {
    formed: boolean;
    sciences: number;
    collapsed: string;
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
export declare function apex(matrix?: MindMatrix): {
    peak: boolean;
    form: boolean;
    nextEra: boolean;
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
export declare function collective(matrix?: MindMatrix): {
    one: boolean;
    minds: number;
    fused: string;
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
export declare function schoolCurriculum(matrix?: MindMatrix): SchoolCurriculum;
export declare function mathPaths(matrix?: MindMatrix): {
    educates: boolean;
    rooted: boolean;
    core: {
        law: string;
        why: string;
    };
    paths: {
        length: number;
        receipt: string;
        path: string;
        steps: {
            law: string;
            why: string;
        }[];
        reaches: string;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function scientists(matrix?: MindMatrix): {
    robust: boolean;
    challenges: {
        claim: string;
        attack: string;
        withstood: boolean;
        receipt: string;
    }[];
    count: number;
    withstood: number;
    develops: string[];
    frontiers: string[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function papers(matrix?: MindMatrix, count?: number): {
    expanded: boolean;
    count: number;
    fundamental: number;
    octaves: number[];
    nextHarmonic: number;
    generators: number;
    coordinates: number;
    papers: {
        number: number;
        id: string;
        title: string;
        coordinateIndex: number;
        digit: number;
        glyph: string;
        generator: string;
        generatorName: string;
        theta: number;
        phi: number;
        x: number;
        y: number;
        z: number;
        frequency: number;
        vibrationMs: number;
        hue: number;
        coordinateReceipt: string;
        generatorUuid: string;
        forward: string;
        reverse: string;
        bidirectional: boolean;
        root: string;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** Canonical paper sections (statement · explanation · formulas · status) for one corpus proof paper —
 * computed from sealed foldPair · livingTorus · merkleProof. NOT a Clay Millennium challenge. */
export type CorpusPaperStandardSections = {
    readonly officialStatement: string;
    readonly detailedExplanation: string;
    readonly formula: string;
    readonly formulaSource: string;
    readonly status: 'structure-only';
    readonly statusDetail: string;
    readonly gap: string;
    readonly physicalFtlClaim: 0;
};
export declare function paperParamsById(id: string, matrix?: MindMatrix, count?: number): {
    index: string;
    ax: number;
    ay: number;
    bx: number;
    by: number;
    total: number;
    fundamental: number;
    octaves: string;
    corpusRoot: string;
    proofVerified: boolean;
    proofDepth: number;
    leafCount: number;
    sections: CorpusPaperStandardSections;
    monograph: string;
    number: number;
    id: string;
    title: string;
    coordinateIndex: number;
    digit: number;
    glyph: string;
    generator: string;
    generatorName: string;
    theta: number;
    phi: number;
    x: number;
    y: number;
    z: number;
    frequency: number;
    vibrationMs: number;
    hue: number;
    coordinateReceipt: string;
    generatorUuid: string;
    forward: string;
    reverse: string;
    bidirectional: boolean;
    root: string;
    receipt: string;
};
export declare function paperReferences(matrix?: MindMatrix, count?: number): {
    number: number;
    id: string;
    paperId: string;
    title: string;
    refersTo: string;
    root: string;
    coordinateIndex: number;
    generator: string;
    glyph: string;
    hue: number;
    bidirectional: boolean;
}[];
export declare function referenceParamsById(id: string, matrix?: MindMatrix, count?: number): {
    index: string;
    total: number;
    corpusRoot: string;
    binaryOctave: number;
    treeDepth: number;
    number: number;
    id: string;
    paperId: string;
    title: string;
    refersTo: string;
    root: string;
    coordinateIndex: number;
    generator: string;
    glyph: string;
    hue: number;
    bidirectional: boolean;
};
export declare function digitIndexReferences(matrix?: MindMatrix): {
    indexed: boolean;
    count: number;
    collisions: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function papersReferencesDiamondsNoDrift(matrix?: MindMatrix): {
    noDrift: boolean;
    papers: number;
    references: number;
    diamonds: number;
    count: number;
    sets: {
        anchored: boolean;
        receipt: string;
        set: string;
        count: number;
        expected: number;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function navigationIsMovie(matrix?: MindMatrix): {
    isMovie: boolean;
    libraryCount: number;
    count: number;
    facets: {
        receipt: string;
        facet: string;
        via: string;
        root: any;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function harmonisedNavigation(matrix?: MindMatrix): {
    harmonised: boolean;
    distributed: boolean;
    count: number;
    items: {
        path: string;
        title: string;
        matches: boolean;
        inFooter: boolean;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function ogBuildsNavigation(matrix?: MindMatrix): {
    builds: boolean;
    count: number;
    items: {
        path: string;
        title: string;
        built: boolean;
        card: string;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** The science portal organized into seven REUSABLE parts — one part per rosetta ray, each part =
 * {ray, hub slug/route, functional labels, member pages} with membership decided by the content lenses
 * (what a page IS), never the slug hash. Nav, sidebar, related sections, crosslinks and the RayHub
 * landing all consume THIS one fold — change the shelving here and every surface follows. */
export declare function sciencePortalParts(matrix?: MindMatrix): {
    computed: boolean;
    parts: {
        ray: 0 | 2 | 5 | 4 | 1 | 3 | 6;
        slug: "learn" | "reference" | "proof" | "explore" | "frontier" | "origin" | "apps";
        route: string;
        labelEn: "Origin" | "Proof" | "Explore" | "Learn" | "Apps" | "Frontier" | "Reference";
        labelBg: "Произход" | "Доказателства" | "Изследване" | "Обучение" | "Приложения" | "Граници" | "Справочник";
        glyph: "Ⰰ" | "Ⰲ" | "Ⰴ" | "Ⰶ" | "Ⰹ" | "Ⰿ" | "Ⱄ";
        hue: 0 | 154 | 51 | 102 | 205 | 257 | 308;
        count: number;
        pages: {
            slug: string;
            titleEn: string;
            titleBg: string;
        }[];
    }[];
    partCount: number;
    pageCount: number;
    assigned: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function siteNavigation(matrix?: MindMatrix): {
    computed: boolean;
    tagCloud: {
        tag: string;
        count: number;
    }[];
    clusters: string[];
    en: {
        nav: ({
            text: string;
            items: {
                text: string;
                link: string;
            }[];
        } | {
            text: string;
            link: string;
        })[];
        sidebar: {
            text: "Origin" | "Произход" | "Proof" | "Доказателства" | "Explore" | "Изследване" | "Learn" | "Обучение" | "Apps" | "Приложения" | "Frontier" | "Граници" | "Reference" | "Справочник";
            items: {
                text: string;
                link: string;
            }[];
        }[];
        relatedSidebar: Record<string, {
            text: string;
            items: {
                text: string;
                link: string;
            }[];
        }[]>;
        crosslinks: Record<string, {
            text: string;
            link: string;
        }[]>;
        footer: {
            message: string;
            copyright: string;
        };
    };
    bg: {
        nav: ({
            text: string;
            items: {
                text: string;
                link: string;
            }[];
        } | {
            text: string;
            link: string;
        })[];
        sidebar: {
            text: "Origin" | "Произход" | "Proof" | "Доказателства" | "Explore" | "Изследване" | "Learn" | "Обучение" | "Apps" | "Приложения" | "Frontier" | "Граници" | "Reference" | "Справочник";
            items: {
                text: string;
                link: string;
            }[];
        }[];
        relatedSidebar: Record<string, {
            text: string;
            items: {
                text: string;
                link: string;
            }[];
        }[]>;
        crosslinks: Record<string, {
            text: string;
            link: string;
        }[]>;
        footer: {
            message: string;
            copyright: string;
        };
    };
    relatedSidebarComplete: boolean;
    crosslinksComplete: boolean;
    aliasDiscoveryPurged: boolean;
    searchIndexRoot: string;
    searchEntries: number;
    routes: string[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function vitepressShowsOnlyScience(matrix?: MindMatrix): {
    computes: boolean;
    visiblePages: number;
    hiddenPages: number;
    theoremCount: number;
    rays: number;
    searchLines: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** VitePress-native sidebar item — themeConfig.sidebar canonical shape. */
export type VitePressSidebarItem = {
    text: string;
    link?: string;
    items?: VitePressSidebarItem[];
    collapsed?: boolean;
};
/** Canonical VitePress themeConfig.sidebar — path-prefix map from siteNavigation + corpus REST. */
export declare function vitepressSidebar(matrix?: MindMatrix): {
    computed: boolean;
    en: Record<string, VitePressSidebarItem[]>;
    bg: Record<string, VitePressSidebarItem[]>;
    dryClean: {
        computes: boolean;
        before: {
            nav: string;
            sidebar: string;
        };
        after: {
            nav: string;
            sidebar: string;
        };
        aliasPurged: number;
        domainSidebarCount: number;
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        pair: string;
        statement: string;
        boundary: string;
    };
    folderWaves: {
        computes: boolean;
        folderCount: 23;
        migratedCount: number;
        partialCount: number;
        residualCount: number;
        gaplessCensus: boolean;
        folders: {
            id: "papers" | "references" | "diamonds" | "model" | "theorems" | "proofs" | "pages-root" | "pages-bg" | "pages-gla" | "domain-tools" | "domain-trading" | "domain-encryption" | "domain-theorems" | "domain-research" | "domain-learn" | "domain-society" | "hub-origin" | "hub-proof" | "hub-explore" | "hub-learn" | "hub-apps" | "hub-frontier" | "hub-reference";
            path: "/frontiers" | "/learn" | "/explore" | ".vitepress/pages" | ".vitepress/pages/bg" | ".vitepress/pages/gla" | ".vitepress/pages/proofs" | ".vitepress/pages/theorems" | ".vitepress/pages/papers" | ".vitepress/pages/references" | ".vitepress/pages/diamonds" | ".vitepress/pages/model" | "/quantum-tools" | "/quantum-trading-hub" | "/encryption" | "/research" | "/society-merkaba" | "/origin" | "/proof" | "/apps" | "/frontier" | "/reference";
            role: "en-root locale mounts" | "bg locale" | "gla locale" | "Clay domain proofs" | "machine tag index" | "machine papers REST" | "machine references REST" | "machine diamonds REST" | "model cards" | "tools canonical" | "trading canonical" | "encryption canonical" | "theorem registry canonical" | "research canonical" | "learn canonical" | "society canonical" | "rosetta ray hub" | "rosetta ray hub (learn ray)";
            kind: "hub" | "domain" | "locale" | "corpus";
            emitter: "references" | "toGlagolitic" | "sciencePortalParts" | "siteDomainRegistry" | "staticPages+computed-pages" | "localePath+bulgarianFromEnglish" | "domainProofCatalog" | "theoremRosettaSidebar" | "papers()" | "diamondLattice" | "ModelCardPages";
            domainId: any;
            status: "partial" | "migrated";
            note: string;
            receipt: string;
            facet: {
                facet: string;
                on: boolean;
            };
        }[];
        kindCounts: {
            locale: number;
            corpus: number;
            domain: number;
            hub: number;
        };
        navBefore: {
            topNav: string;
            sidebar: string;
            content: string;
        };
        navAfter: {
            topNav: string;
            sidebar: string;
            content: string;
        };
        residuals: ("composed-after #68 uiProseDuplicationRemoved — residual Clay Statement=title catalog pattern in staticPages descriptions" | "composed-after #70 mcp-commands-scripts-gaps-audit (MCP/script synonym census landed; residual conceptTools + trading:* outside PRIMARY)" | "thin-mount alias leaves still served (efficiency-vote… · learn-developer) — intentional census fold" | "compose import/distance — importPathShowsDistanceInMigrationMatrix measures compact+even code in the src matrix (npm run quantum:import-path-distance)")[];
        claySolvedByThisFold: 0;
        qpuRequired: false;
        facets: ({
            receipt: string;
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        pair: "folder/migrate";
        cli: string;
        route: string;
        anchor: string;
        heading: string;
        honestyLine: string;
        statement: string;
        boundary: string;
    };
    aliasKeysPurged: boolean;
    domainKeysPresent: boolean;
    contentMatchesSidebar: boolean;
    orphanLinks: string[];
    navBefore: {
        topNav: string;
        sidebar: string;
        content: string;
    };
    navAfter: {
        topNav: string;
        sidebar: string;
        content: string;
    };
    root: string;
    statement: string;
    boundary: string;
};
export type ComponentCrosslink = {
    text: string;
    link: string;
    kind: 'topic' | 'detail' | 'peer' | 'related' | 'sibling' | 'gateway' | 'home';
};
/** Computed crosslinks for a home or page component — topic page, ray peers, tag-related, siblings, trinity gateways. */
export declare function componentCrosslinks(componentName: string, locale?: LocaleName): ComponentCrosslink[];
export declare function rosettaComputesNavigationAndContent(path: string, matrix?: MindMatrix): {
    computes: boolean;
    navigation: {
        tag: "geometry" | "origin" | "expression" | "knowledge" | "nature" | "computation" | "language";
        ray: number;
        name: "Origin" | "Proof" | "Explore" | "Learn" | "Apps" | "Frontier" | "Reference";
    };
    rosetta: {
        decoded: boolean;
        path: string;
        locale: string;
        slug: string;
        ray: number;
        station: number;
        crossPair: string;
        computationType: __ns_up_water_digit.RosettaComputationType;
        glagoliticAddress: string;
        rayMeta: {
            readonly ray: 0;
            readonly glyph: "Ⰰ";
            readonly nameEn: "Origin";
            readonly nameBg: "Произход";
            readonly domain: "origin";
            readonly hue: 0;
        } | {
            readonly ray: 1;
            readonly glyph: "Ⰲ";
            readonly nameEn: "Proof";
            readonly nameBg: "Доказателства";
            readonly domain: "expression";
            readonly hue: 51;
        } | {
            readonly ray: 2;
            readonly glyph: "Ⰴ";
            readonly nameEn: "Explore";
            readonly nameBg: "Изследване";
            readonly domain: "knowledge";
            readonly hue: 102;
        } | {
            readonly ray: 3;
            readonly glyph: "Ⰶ";
            readonly nameEn: "Learn";
            readonly nameBg: "Обучение";
            readonly domain: "nature";
            readonly hue: 154;
        } | {
            readonly ray: 4;
            readonly glyph: "Ⰹ";
            readonly nameEn: "Apps";
            readonly nameBg: "Приложения";
            readonly domain: "computation";
            readonly hue: 205;
        } | {
            readonly ray: 5;
            readonly glyph: "Ⰿ";
            readonly nameEn: "Frontier";
            readonly nameBg: "Граници";
            readonly domain: "geometry";
            readonly hue: 257;
        } | {
            readonly ray: 6;
            readonly glyph: "Ⱄ";
            readonly nameEn: "Reference";
            readonly nameBg: "Справочник";
            readonly domain: "language";
            readonly hue: 308;
        };
        sharedRoot: string;
        content: {
            pageKind: __ns_up_water_digit.RosettaComputationType;
            heroPhase: number;
            bodySeed: string;
            heroHue: 0 | 154 | 51 | 102 | 205 | 257 | 308;
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
    root: string;
};
export declare function monographs(matrix?: MindMatrix): {
    compacted: boolean;
    zeroEntropy: boolean;
    monographs: {
        index: string;
        title: string;
        essence: string;
        ref: string;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function theMonograph(matrix?: MindMatrix): {
    distilled: boolean;
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function onlyPageRouteForAll(matrix?: MindMatrix): {
    unified: boolean;
    pages: number;
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
export declare function contentIsMonographOfMonographs(matrix?: MindMatrix): {
    monographic: boolean;
    pages: number;
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
export declare function everyGraphAMonographConsolidateExtend(matrix?: MindMatrix): {
    reusable: boolean;
    fewRenderers: string[];
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
export declare function eachPageSpeaksContinuesNext(matrix?: MindMatrix): {
    speaks: boolean;
    count: number;
    facets: {
        receipt: string;
        facet: string;
        on: any;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function everyPageGraphOfGraphsFractal(matrix?: MindMatrix): {
    fractal: boolean;
    count: number;
    facets: {
        receipt: string;
        facet: string;
        on: any;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function everyElementIsALinkedNodeOrUseless(matrix?: MindMatrix): {
    graphed: boolean;
    pages: number;
    linked: number;
    isolated: number;
    clusters: number;
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
export { ROSETTA_RAYS, ROSETTA_COMPUTATION_TYPES, ROSETTA_CORE_KINDS, rosettaComputesAll, rosettaComputesCensusDissolve, rosettaComputesItself, rosettaDecodesUrlPath, rosettaRayOf, rosettaReuse, sevenStarRosettaNaturalMotion } from '../water/digit';
export { rosettaCoreApi, rosettaCoreApiSelfWires, rosettaShelve, rosettaCoreApiSurface } from '../quantum/apps';
export { movieIsNeuroscienceComputation } from '../earth/life';
export { rosettaGlagoliticGlobalKeyDecodeAll, rosettaImprovesDictationAndDialects } from '../wind/language';
export { rosettaIChingTrinityPlacesAllTools } from '../earth/architecture';
export { publicAstronomyNewsCitation } from '../earth/world';
/** One gate — Glagolitic global key, 7-ray taxonomy, decode-all chain, and path response at call time. */
export declare function rosettaComputes(matrix?: MindMatrix, path?: string): {
    computes: boolean;
    itself: {
        computed: boolean;
        at: number;
        motion: {
            at: number;
            rays: {
                ray: number;
                baseAngle: number;
                currentAngle: number;
                angularVelocity: number;
                vortexRate: number;
                radius: number;
                letters: {
                    letterIndex: number;
                    letterAngle: number;
                    letterRadius: number;
                    digitalRootPosition: number;
                }[];
            }[];
            breathRadius: number;
            breathPulse: number;
            proof: {
                coprime7_6: boolean;
                coprime7_9: boolean;
                coprime7_10: boolean;
                holds: boolean;
            };
            constants: {
                RAYS: number;
                LETTERS_PER_RAY: number;
                PHI: number;
                GOLDEN_ANGLE: number;
                DOUBLING_PERIOD: number;
                DR_MODULUS: number;
                STATION_COUNT: number;
            };
            root: string;
        };
        rows: {
            tail: "language" | "ui" | "fusion" | "site" | "types" | "rosetta" | "routes" | "learning" | "iching";
            action: "language" | "ui" | "fusion" | "site" | "types" | "rosetta" | "routes" | "learning" | "iching";
            ray: number;
            rayMeta: {
                readonly ray: 0;
                readonly glyph: "Ⰰ";
                readonly nameEn: "Origin";
                readonly nameBg: "Произход";
                readonly domain: "origin";
                readonly hue: 0;
            } | {
                readonly ray: 1;
                readonly glyph: "Ⰲ";
                readonly nameEn: "Proof";
                readonly nameBg: "Доказателства";
                readonly domain: "expression";
                readonly hue: 51;
            } | {
                readonly ray: 2;
                readonly glyph: "Ⰴ";
                readonly nameEn: "Explore";
                readonly nameBg: "Изследване";
                readonly domain: "knowledge";
                readonly hue: 102;
            } | {
                readonly ray: 3;
                readonly glyph: "Ⰶ";
                readonly nameEn: "Learn";
                readonly nameBg: "Обучение";
                readonly domain: "nature";
                readonly hue: 154;
            } | {
                readonly ray: 4;
                readonly glyph: "Ⰹ";
                readonly nameEn: "Apps";
                readonly nameBg: "Приложения";
                readonly domain: "computation";
                readonly hue: 205;
            } | {
                readonly ray: 5;
                readonly glyph: "Ⰿ";
                readonly nameEn: "Frontier";
                readonly nameBg: "Граници";
                readonly domain: "geometry";
                readonly hue: 257;
            } | {
                readonly ray: 6;
                readonly glyph: "Ⱄ";
                readonly nameEn: "Reference";
                readonly nameBg: "Справочник";
                readonly domain: "language";
                readonly hue: 308;
            };
            legacyWind: string;
            legacyMind: string;
            legacyBare: string;
            schemaTarget: string;
            canonical: string;
            importBarrel: "language" | "ui" | "fusion" | "site" | "types" | "rosetta" | "routes" | "learning" | "iching";
            wave: 2 | 1;
            applied: boolean;
            receipt: string;
        }[];
        moveTable: {
            from: string;
            to: string;
            wave: 2 | 1;
            applied: boolean;
            ray: number;
        }[];
        census: {
            target: number;
            pendingDissolve: string[];
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
    core: {
        computes: boolean;
        at: number;
        core: {
            computes: boolean;
            at: number;
            surfaces: __ns_up_quantum_apps.RosettaCoreSurface[];
            inventory: {
                core: {
                    label: string;
                    kind: __ns_up_quantum_apps.RosettaCoreSurfaceKind;
                    ray: number;
                    address: string;
                }[];
                parallel: readonly [];
                hubs: {
                    slug: "learn" | "reference" | "proof" | "explore" | "frontier" | "origin" | "apps";
                    ray: number;
                    route: string;
                    hue: number;
                }[];
            };
            hubs: readonly __ns_up_water_digit.RosettaRayHub[];
            raysUsed: number;
            kinds: readonly ["route", "hub", "compute", "nav", "tool", "app", "projection"];
            resolve: (label: string, kind?: __ns_up_quantum_apps.RosettaCoreSurfaceKind) => __ns_up_quantum_apps.RosettaCoreSurface;
            shelve: typeof __ns_up_quantum_apps.rosettaShelve;
            byRay: (ray: number) => __ns_up_quantum_apps.RosettaCoreSurface[];
            resolveRoute: (route: string) => {
                surface: __ns_up_quantum_apps.RosettaCoreSurface;
                address: string;
                computed: boolean;
                route: string;
                slug: string;
                ray: number;
                rayMeta: {
                    readonly ray: 0;
                    readonly glyph: "Ⰰ";
                    readonly nameEn: "Origin";
                    readonly nameBg: "Произход";
                    readonly domain: "origin";
                    readonly hue: 0;
                } | {
                    readonly ray: 1;
                    readonly glyph: "Ⰲ";
                    readonly nameEn: "Proof";
                    readonly nameBg: "Доказателства";
                    readonly domain: "expression";
                    readonly hue: 51;
                } | {
                    readonly ray: 2;
                    readonly glyph: "Ⰴ";
                    readonly nameEn: "Explore";
                    readonly nameBg: "Изследване";
                    readonly domain: "knowledge";
                    readonly hue: 102;
                } | {
                    readonly ray: 3;
                    readonly glyph: "Ⰶ";
                    readonly nameEn: "Learn";
                    readonly nameBg: "Обучение";
                    readonly domain: "nature";
                    readonly hue: 154;
                } | {
                    readonly ray: 4;
                    readonly glyph: "Ⰹ";
                    readonly nameEn: "Apps";
                    readonly nameBg: "Приложения";
                    readonly domain: "computation";
                    readonly hue: 205;
                } | {
                    readonly ray: 5;
                    readonly glyph: "Ⰿ";
                    readonly nameEn: "Frontier";
                    readonly nameBg: "Граници";
                    readonly domain: "geometry";
                    readonly hue: 257;
                } | {
                    readonly ray: 6;
                    readonly glyph: "Ⱄ";
                    readonly nameEn: "Reference";
                    readonly nameBg: "Справочник";
                    readonly domain: "language";
                    readonly hue: 308;
                };
                station: number;
                crossPair: string;
                glaAddress: string;
                navigation: {
                    rayLabel: "Origin" | "Proof" | "Explore" | "Learn" | "Apps" | "Frontier" | "Reference";
                    rayLabelBg: "Произход" | "Доказателства" | "Изследване" | "Обучение" | "Приложения" | "Граници" | "Справочник";
                    rayGlyph: "Ⰰ" | "Ⰲ" | "Ⰴ" | "Ⰶ" | "Ⰹ" | "Ⰿ" | "Ⱄ";
                    rayDomain: "geometry" | "origin" | "expression" | "knowledge" | "nature" | "computation" | "language";
                    siblings: import("../types").ConceptCommandName[];
                    siblingCount: number;
                };
                content: {
                    pageKind: __ns_up_water_digit.RosettaComputationType;
                    heroPhase: number;
                    bodySeed: string;
                    heroHue: 0 | 154 | 51 | 102 | 205 | 257 | 308;
                };
                motion: {
                    at: number;
                    rays: {
                        ray: number;
                        baseAngle: number;
                        currentAngle: number;
                        angularVelocity: number;
                        vortexRate: number;
                        radius: number;
                        letters: {
                            letterIndex: number;
                            letterAngle: number;
                            letterRadius: number;
                            digitalRootPosition: number;
                        }[];
                    }[];
                    breathRadius: number;
                    breathPulse: number;
                    proof: {
                        coprime7_6: boolean;
                        coprime7_9: boolean;
                        coprime7_10: boolean;
                        holds: boolean;
                    };
                    constants: {
                        RAYS: number;
                        LETTERS_PER_RAY: number;
                        PHI: number;
                        GOLDEN_ANGLE: number;
                        DOUBLING_PERIOD: number;
                        DR_MODULUS: number;
                        STATION_COUNT: number;
                    };
                    root: string;
                };
                stationDetail: {
                    digit: number;
                    folder: string;
                    path: string;
                };
                sharedRoot: string;
                root: string;
                statement: string;
                boundary: string;
            };
            resolveProjection: (label: string) => {
                surface: __ns_up_quantum_apps.RosettaCoreSurface;
                phase: number;
                hue: number;
                motion: {
                    at: number;
                    rays: {
                        ray: number;
                        baseAngle: number;
                        currentAngle: number;
                        angularVelocity: number;
                        vortexRate: number;
                        radius: number;
                        letters: {
                            letterIndex: number;
                            letterAngle: number;
                            letterRadius: number;
                            digitalRootPosition: number;
                        }[];
                    }[];
                    breathRadius: number;
                    breathPulse: number;
                    proof: {
                        coprime7_6: boolean;
                        coprime7_9: boolean;
                        coprime7_10: boolean;
                        holds: boolean;
                    };
                    constants: {
                        RAYS: number;
                        LETTERS_PER_RAY: number;
                        PHI: number;
                        GOLDEN_ANGLE: number;
                        DOUBLING_PERIOD: number;
                        DR_MODULUS: number;
                        STATION_COUNT: number;
                    };
                    root: string;
                };
            };
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            root: string;
            pair: "rosetta/core";
            cli: string;
            statement: string;
            boundary: string;
        };
        slots: {
            ray: number;
            kind: "hub" | "route" | "compute" | "nav" | "tool" | "app" | "projection";
            pageKind: __ns_up_water_digit.RosettaComputationType;
            vortexDigit: 2 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6;
            receipt: string;
        }[];
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
    motion: {
        at: number;
        rays: {
            ray: number;
            baseAngle: number;
            currentAngle: number;
            angularVelocity: number;
            vortexRate: number;
            radius: number;
            letters: {
                letterIndex: number;
                letterAngle: number;
                letterRadius: number;
                digitalRootPosition: number;
            }[];
        }[];
        breathRadius: number;
        breathPulse: number;
        proof: {
            coprime7_6: boolean;
            coprime7_9: boolean;
            coprime7_10: boolean;
            holds: boolean;
        };
        constants: {
            RAYS: number;
            LETTERS_PER_RAY: number;
            PHI: number;
            GOLDEN_ANGLE: number;
            DOUBLING_PERIOD: number;
            DR_MODULUS: number;
            STATION_COUNT: number;
        };
        root: string;
    };
    glagolitic: {
        decodes: boolean;
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
    dictation: any;
    nav: {
        computes: boolean;
        navigation: {
            tag: "geometry" | "origin" | "expression" | "knowledge" | "nature" | "computation" | "language";
            ray: number;
            name: "Origin" | "Proof" | "Explore" | "Learn" | "Apps" | "Frontier" | "Reference";
        };
        rosetta: {
            decoded: boolean;
            path: string;
            locale: string;
            slug: string;
            ray: number;
            station: number;
            crossPair: string;
            computationType: __ns_up_water_digit.RosettaComputationType;
            glagoliticAddress: string;
            rayMeta: {
                readonly ray: 0;
                readonly glyph: "Ⰰ";
                readonly nameEn: "Origin";
                readonly nameBg: "Произход";
                readonly domain: "origin";
                readonly hue: 0;
            } | {
                readonly ray: 1;
                readonly glyph: "Ⰲ";
                readonly nameEn: "Proof";
                readonly nameBg: "Доказателства";
                readonly domain: "expression";
                readonly hue: 51;
            } | {
                readonly ray: 2;
                readonly glyph: "Ⰴ";
                readonly nameEn: "Explore";
                readonly nameBg: "Изследване";
                readonly domain: "knowledge";
                readonly hue: 102;
            } | {
                readonly ray: 3;
                readonly glyph: "Ⰶ";
                readonly nameEn: "Learn";
                readonly nameBg: "Обучение";
                readonly domain: "nature";
                readonly hue: 154;
            } | {
                readonly ray: 4;
                readonly glyph: "Ⰹ";
                readonly nameEn: "Apps";
                readonly nameBg: "Приложения";
                readonly domain: "computation";
                readonly hue: 205;
            } | {
                readonly ray: 5;
                readonly glyph: "Ⰿ";
                readonly nameEn: "Frontier";
                readonly nameBg: "Граници";
                readonly domain: "geometry";
                readonly hue: 257;
            } | {
                readonly ray: 6;
                readonly glyph: "Ⱄ";
                readonly nameEn: "Reference";
                readonly nameBg: "Справочник";
                readonly domain: "language";
                readonly hue: 308;
            };
            sharedRoot: string;
            content: {
                pageKind: __ns_up_water_digit.RosettaComputationType;
                heroPhase: number;
                bodySeed: string;
                heroHue: 0 | 154 | 51 | 102 | 205 | 257 | 308;
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
        root: string;
    };
    all: {
        computed: boolean;
        route: string;
        slug: string;
        ray: number;
        rayMeta: {
            readonly ray: 0;
            readonly glyph: "Ⰰ";
            readonly nameEn: "Origin";
            readonly nameBg: "Произход";
            readonly domain: "origin";
            readonly hue: 0;
        } | {
            readonly ray: 1;
            readonly glyph: "Ⰲ";
            readonly nameEn: "Proof";
            readonly nameBg: "Доказателства";
            readonly domain: "expression";
            readonly hue: 51;
        } | {
            readonly ray: 2;
            readonly glyph: "Ⰴ";
            readonly nameEn: "Explore";
            readonly nameBg: "Изследване";
            readonly domain: "knowledge";
            readonly hue: 102;
        } | {
            readonly ray: 3;
            readonly glyph: "Ⰶ";
            readonly nameEn: "Learn";
            readonly nameBg: "Обучение";
            readonly domain: "nature";
            readonly hue: 154;
        } | {
            readonly ray: 4;
            readonly glyph: "Ⰹ";
            readonly nameEn: "Apps";
            readonly nameBg: "Приложения";
            readonly domain: "computation";
            readonly hue: 205;
        } | {
            readonly ray: 5;
            readonly glyph: "Ⰿ";
            readonly nameEn: "Frontier";
            readonly nameBg: "Граници";
            readonly domain: "geometry";
            readonly hue: 257;
        } | {
            readonly ray: 6;
            readonly glyph: "Ⱄ";
            readonly nameEn: "Reference";
            readonly nameBg: "Справочник";
            readonly domain: "language";
            readonly hue: 308;
        };
        station: number;
        crossPair: string;
        glaAddress: string;
        navigation: {
            rayLabel: "Origin" | "Proof" | "Explore" | "Learn" | "Apps" | "Frontier" | "Reference";
            rayLabelBg: "Произход" | "Доказателства" | "Изследване" | "Обучение" | "Приложения" | "Граници" | "Справочник";
            rayGlyph: "Ⰰ" | "Ⰲ" | "Ⰴ" | "Ⰶ" | "Ⰹ" | "Ⰿ" | "Ⱄ";
            rayDomain: "geometry" | "origin" | "expression" | "knowledge" | "nature" | "computation" | "language";
            siblings: import("../types").ConceptCommandName[];
            siblingCount: number;
        };
        content: {
            pageKind: __ns_up_water_digit.RosettaComputationType;
            heroPhase: number;
            bodySeed: string;
            heroHue: 0 | 154 | 51 | 102 | 205 | 257 | 308;
        };
        motion: {
            at: number;
            rays: {
                ray: number;
                baseAngle: number;
                currentAngle: number;
                angularVelocity: number;
                vortexRate: number;
                radius: number;
                letters: {
                    letterIndex: number;
                    letterAngle: number;
                    letterRadius: number;
                    digitalRootPosition: number;
                }[];
            }[];
            breathRadius: number;
            breathPulse: number;
            proof: {
                coprime7_6: boolean;
                coprime7_9: boolean;
                coprime7_10: boolean;
                holds: boolean;
            };
            constants: {
                RAYS: number;
                LETTERS_PER_RAY: number;
                PHI: number;
                GOLDEN_ANGLE: number;
                DOUBLING_PERIOD: number;
                DR_MODULUS: number;
                STATION_COUNT: number;
            };
            root: string;
        };
        stationDetail: {
            digit: number;
            folder: string;
            path: string;
        };
        sharedRoot: string;
        root: string;
        statement: string;
        boundary: string;
    };
    trinity: {
        fused: boolean;
        placedCount: number;
        raysCovered: number;
        trinityLegs: number;
        items: __ns_up_earth_architecture.RosettaIChingTrinityPlacement[];
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
    decodeAll: {
        decodes: boolean;
        count: number;
        knowledge: {
            decoded: boolean;
            areas: number;
            atoms: number;
            commands: number;
            root: string;
            statement: string;
            boundary: string;
        };
        rosetta: {
            decodes: boolean;
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            root: string;
            statement: string;
            boundary: string;
        };
        waves: {
            sends: boolean;
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
        training: {
            learns: boolean;
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
        bound: {
            bound: boolean;
            liveApis: string[];
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            root: string;
            statement: string;
            boundary: string;
        };
        census: {
            clean: boolean;
            unfolded: number;
            euler: -2;
            genus: number;
            betti: (4 | 1)[];
            folded: number;
            delta: -2;
            fold: boolean;
            root: string;
            statement: string;
            boundary: string;
        };
        corpus: {
            complete: boolean;
            papers: number;
            references: number;
            real: number;
            padding: number;
            total: number;
            depth: number;
            target: number;
            perfect: boolean;
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
    foldLabel: "6×7/7×6";
    facets: ({
        facet: string;
        on: any;
    } & {
        receipt: string;
    })[];
    root: string;
    statement: string;
    boundary: string;
};
/** Rosetta codec — the lossless round-trip between an I Ching hexagram label (0..63) and a Rosetta ray.
 *  A hexagram factors into one of the seven rays plus an octave: n = ray + 7·octave (ray ∈ 0..6 indexes
 *  ROSETTA_RAYS, octave ∈ 0..9). `encode` maps the label to {ray, octave, glyph, domain}; `decode` rebuilds
 *  the label. The round-trip is EXACT for all 64 hexagrams — the 7×10 grid covers 0..63 with no gap or excess,
 *  so the rosetta ray is a faithful state/result codec for the 6-qubit (64-hexagram) computational basis. */
export declare function rosettaCodec(matrix?: MindMatrix): {
    proved: boolean;
    encode: (label: number) => {
        label: number;
        ray: number;
        octave: number;
        glyph: "Ⰰ" | "Ⰲ" | "Ⰴ" | "Ⰶ" | "Ⰹ" | "Ⰿ" | "Ⱄ";
        domain: "geometry" | "origin" | "expression" | "knowledge" | "nature" | "computation" | "language";
    };
    decode: (ray: number, octave: number) => number;
    rayCount: 7;
    trips: {
        n: number;
        ray: number;
        octave: number;
        glyph: "Ⰰ" | "Ⰲ" | "Ⰴ" | "Ⰶ" | "Ⰹ" | "Ⰿ" | "Ⱄ";
        back: number;
    }[];
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function discoveryEconomyIsTheCoreOfCompetitionAndEducation(matrix?: MindMatrix): {
    core: boolean;
    won: number;
    open: number;
    attachments: number;
    zeroAccount: string;
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
