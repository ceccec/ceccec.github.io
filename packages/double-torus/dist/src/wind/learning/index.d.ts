import * as __ns_up_water_digit from '../../water/digit';
import * as __ns_up_earth_architecture from '../../earth/architecture';
import type { AgentEducation, McpToolManifest, MindMatrix, SchoolCurriculum } from '../types';
import { type LocaleName } from '../site';
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
    thought: import("../../0").Fold;
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
export declare function navigation358(): {
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
                readonly nameEn: "Alpha";
                readonly nameBg: "Алфа";
                readonly domain: "origin";
                readonly hue: 0;
            } | {
                readonly ray: 1;
                readonly glyph: "Ⰲ";
                readonly nameEn: "Voice";
                readonly nameBg: "Глас";
                readonly domain: "expression";
                readonly hue: 51;
            } | {
                readonly ray: 2;
                readonly glyph: "Ⰴ";
                readonly nameEn: "Spirit";
                readonly nameBg: "Дух";
                readonly domain: "knowledge";
                readonly hue: 102;
            } | {
                readonly ray: 3;
                readonly glyph: "Ⰶ";
                readonly nameEn: "Life";
                readonly nameBg: "Живот";
                readonly domain: "nature";
                readonly hue: 154;
            } | {
                readonly ray: 4;
                readonly glyph: "Ⰹ";
                readonly nameEn: "Thought";
                readonly nameBg: "Мисъл";
                readonly domain: "computation";
                readonly hue: 205;
            } | {
                readonly ray: 5;
                readonly glyph: "Ⰿ";
                readonly nameEn: "Form";
                readonly nameBg: "Форма";
                readonly domain: "geometry";
                readonly hue: 257;
            } | {
                readonly ray: 6;
                readonly glyph: "Ⱄ";
                readonly nameEn: "Word";
                readonly nameBg: "Слово";
                readonly domain: "language";
                readonly hue: 308;
            };
            sharedRoot: string;
            content: {
                pageKind: __ns_up_water_digit.RosettaComputationType;
                heroPhase: number;
                bodySeed: string;
                heroHue: 0 | 51 | 102 | 154 | 205 | 257 | 308;
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
            link: string;
            items?: undefined;
        } | {
            text: string;
            items: {
                text: string;
                items: {
                    text: string;
                    link: string;
                }[];
            }[];
            link?: undefined;
        })[];
        sidebar: {
            text: string;
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
            link: string;
            items?: undefined;
        } | {
            text: string;
            items: {
                text: string;
                items: {
                    text: string;
                    link: string;
                }[];
            }[];
            link?: undefined;
        })[];
        sidebar: {
            text: string;
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
    searchIndexRoot: string;
    searchEntries: number;
    routes: string[];
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
        tag: "origin" | "expression" | "knowledge" | "nature" | "computation" | "geometry" | "language";
        ray: number;
        name: "Alpha" | "Voice" | "Spirit" | "Life" | "Thought" | "Form" | "Word";
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
            readonly nameEn: "Alpha";
            readonly nameBg: "Алфа";
            readonly domain: "origin";
            readonly hue: 0;
        } | {
            readonly ray: 1;
            readonly glyph: "Ⰲ";
            readonly nameEn: "Voice";
            readonly nameBg: "Глас";
            readonly domain: "expression";
            readonly hue: 51;
        } | {
            readonly ray: 2;
            readonly glyph: "Ⰴ";
            readonly nameEn: "Spirit";
            readonly nameBg: "Дух";
            readonly domain: "knowledge";
            readonly hue: 102;
        } | {
            readonly ray: 3;
            readonly glyph: "Ⰶ";
            readonly nameEn: "Life";
            readonly nameBg: "Живот";
            readonly domain: "nature";
            readonly hue: 154;
        } | {
            readonly ray: 4;
            readonly glyph: "Ⰹ";
            readonly nameEn: "Thought";
            readonly nameBg: "Мисъл";
            readonly domain: "computation";
            readonly hue: 205;
        } | {
            readonly ray: 5;
            readonly glyph: "Ⰿ";
            readonly nameEn: "Form";
            readonly nameBg: "Форма";
            readonly domain: "geometry";
            readonly hue: 257;
        } | {
            readonly ray: 6;
            readonly glyph: "Ⱄ";
            readonly nameEn: "Word";
            readonly nameBg: "Слово";
            readonly domain: "language";
            readonly hue: 308;
        };
        sharedRoot: string;
        content: {
            pageKind: __ns_up_water_digit.RosettaComputationType;
            heroPhase: number;
            bodySeed: string;
            heroHue: 0 | 51 | 102 | 154 | 205 | 257 | 308;
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
export { ROSETTA_RAYS, ROSETTA_COMPUTATION_TYPES, rosettaComputesAll, rosettaComputesCensusDissolve, rosettaComputesItself, rosettaDecodesUrlPath, rosettaRayOf, rosettaReuse, sevenStarRosettaNaturalMotion, } from '../../water/digit';
export { rosettaGlagoliticGlobalKeyDecodeAll, rosettaImprovesDictationAndDialects } from '../language';
export { rosettaIChingTrinityPlacesAllTools } from '../../earth/architecture';
export { publicAstronomyNewsCitation } from '../../earth/world';
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
            tail: "language" | "ui" | "routes" | "rosetta" | "fusion" | "learning" | "site" | "types" | "iching";
            action: "language" | "ui" | "routes" | "rosetta" | "fusion" | "learning" | "site" | "types" | "iching";
            ray: number;
            rayMeta: {
                readonly ray: 0;
                readonly glyph: "Ⰰ";
                readonly nameEn: "Alpha";
                readonly nameBg: "Алфа";
                readonly domain: "origin";
                readonly hue: 0;
            } | {
                readonly ray: 1;
                readonly glyph: "Ⰲ";
                readonly nameEn: "Voice";
                readonly nameBg: "Глас";
                readonly domain: "expression";
                readonly hue: 51;
            } | {
                readonly ray: 2;
                readonly glyph: "Ⰴ";
                readonly nameEn: "Spirit";
                readonly nameBg: "Дух";
                readonly domain: "knowledge";
                readonly hue: 102;
            } | {
                readonly ray: 3;
                readonly glyph: "Ⰶ";
                readonly nameEn: "Life";
                readonly nameBg: "Живот";
                readonly domain: "nature";
                readonly hue: 154;
            } | {
                readonly ray: 4;
                readonly glyph: "Ⰹ";
                readonly nameEn: "Thought";
                readonly nameBg: "Мисъл";
                readonly domain: "computation";
                readonly hue: 205;
            } | {
                readonly ray: 5;
                readonly glyph: "Ⰿ";
                readonly nameEn: "Form";
                readonly nameBg: "Форма";
                readonly domain: "geometry";
                readonly hue: 257;
            } | {
                readonly ray: 6;
                readonly glyph: "Ⱄ";
                readonly nameEn: "Word";
                readonly nameBg: "Слово";
                readonly domain: "language";
                readonly hue: 308;
            };
            legacyWind: string;
            legacyMind: string;
            legacyBare: string;
            schemaTarget: string;
            canonical: string;
            importBarrel: "language" | "ui" | "routes" | "rosetta" | "fusion" | "learning" | "site" | "types" | "iching";
            wave: 1 | 2;
            applied: boolean;
            receipt: string;
        }[];
        moveTable: {
            from: string;
            to: string;
            wave: 1 | 2;
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
            tag: "origin" | "expression" | "knowledge" | "nature" | "computation" | "geometry" | "language";
            ray: number;
            name: "Alpha" | "Voice" | "Spirit" | "Life" | "Thought" | "Form" | "Word";
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
                readonly nameEn: "Alpha";
                readonly nameBg: "Алфа";
                readonly domain: "origin";
                readonly hue: 0;
            } | {
                readonly ray: 1;
                readonly glyph: "Ⰲ";
                readonly nameEn: "Voice";
                readonly nameBg: "Глас";
                readonly domain: "expression";
                readonly hue: 51;
            } | {
                readonly ray: 2;
                readonly glyph: "Ⰴ";
                readonly nameEn: "Spirit";
                readonly nameBg: "Дух";
                readonly domain: "knowledge";
                readonly hue: 102;
            } | {
                readonly ray: 3;
                readonly glyph: "Ⰶ";
                readonly nameEn: "Life";
                readonly nameBg: "Живот";
                readonly domain: "nature";
                readonly hue: 154;
            } | {
                readonly ray: 4;
                readonly glyph: "Ⰹ";
                readonly nameEn: "Thought";
                readonly nameBg: "Мисъл";
                readonly domain: "computation";
                readonly hue: 205;
            } | {
                readonly ray: 5;
                readonly glyph: "Ⰿ";
                readonly nameEn: "Form";
                readonly nameBg: "Форма";
                readonly domain: "geometry";
                readonly hue: 257;
            } | {
                readonly ray: 6;
                readonly glyph: "Ⱄ";
                readonly nameEn: "Word";
                readonly nameBg: "Слово";
                readonly domain: "language";
                readonly hue: 308;
            };
            sharedRoot: string;
            content: {
                pageKind: __ns_up_water_digit.RosettaComputationType;
                heroPhase: number;
                bodySeed: string;
                heroHue: 0 | 51 | 102 | 154 | 205 | 257 | 308;
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
            readonly nameEn: "Alpha";
            readonly nameBg: "Алфа";
            readonly domain: "origin";
            readonly hue: 0;
        } | {
            readonly ray: 1;
            readonly glyph: "Ⰲ";
            readonly nameEn: "Voice";
            readonly nameBg: "Глас";
            readonly domain: "expression";
            readonly hue: 51;
        } | {
            readonly ray: 2;
            readonly glyph: "Ⰴ";
            readonly nameEn: "Spirit";
            readonly nameBg: "Дух";
            readonly domain: "knowledge";
            readonly hue: 102;
        } | {
            readonly ray: 3;
            readonly glyph: "Ⰶ";
            readonly nameEn: "Life";
            readonly nameBg: "Живот";
            readonly domain: "nature";
            readonly hue: 154;
        } | {
            readonly ray: 4;
            readonly glyph: "Ⰹ";
            readonly nameEn: "Thought";
            readonly nameBg: "Мисъл";
            readonly domain: "computation";
            readonly hue: 205;
        } | {
            readonly ray: 5;
            readonly glyph: "Ⰿ";
            readonly nameEn: "Form";
            readonly nameBg: "Форма";
            readonly domain: "geometry";
            readonly hue: 257;
        } | {
            readonly ray: 6;
            readonly glyph: "Ⱄ";
            readonly nameEn: "Word";
            readonly nameBg: "Слово";
            readonly domain: "language";
            readonly hue: 308;
        };
        station: number;
        crossPair: string;
        glaAddress: string;
        navigation: {
            rayLabel: "Alpha" | "Voice" | "Spirit" | "Life" | "Thought" | "Form" | "Word";
            rayLabelBg: "Алфа" | "Глас" | "Дух" | "Живот" | "Мисъл" | "Форма" | "Слово";
            rayGlyph: "Ⰰ" | "Ⰲ" | "Ⰴ" | "Ⰶ" | "Ⰹ" | "Ⰿ" | "Ⱄ";
            rayDomain: "origin" | "expression" | "knowledge" | "nature" | "computation" | "geometry" | "language";
            siblings: import("../types").ConceptCommandName[];
            siblingCount: number;
        };
        content: {
            pageKind: __ns_up_water_digit.RosettaComputationType;
            heroPhase: number;
            bodySeed: string;
            heroHue: 0 | 51 | 102 | 154 | 205 | 257 | 308;
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
            betti: (1 | 4)[];
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
        domain: "origin" | "expression" | "knowledge" | "nature" | "computation" | "geometry" | "language";
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
