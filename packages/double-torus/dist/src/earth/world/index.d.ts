export { SOLAR_MASS_KG } from '../../3/7';
import type { BabelFold, MindMatrix } from '../../types';
export declare function textToMovie(text?: string, frames?: number): {
    generated: boolean;
    deterministic: boolean;
    text: string;
    glyphs: string;
    script: "glagolitic";
    frames: number;
    cells: number;
    elements: {
        i: number;
        char: string;
        glyph: string;
        space: boolean;
        hue: number;
        jitter: number;
        reveal: number;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function movieFoldsEveryScaleToBitInTrinities(text?: string): {
    folds: boolean;
    text: string;
    ladder: {
        scale: string;
        count: number;
    }[];
    trinities: number;
    bits: number;
    dimensions: number;
    seal: string;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function worldEventsMap(matrix?: MindMatrix): {
    mapped: boolean;
    count: number;
    events: {
        lat: number;
        lon: number;
        receipt: string;
        event: string;
        kind: string;
        root: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function publicAstronomyNewsCitation(matrix?: MindMatrix): {
    cited: boolean;
    report: {
        id: string;
        title: string;
        published: string;
        url: string;
        instruments: readonly ["LIGO Hanford", "LIGO Livingston", "Virgo", "KAGRA"];
        observingWindow: string;
        highlights: string[];
        simulationParams: {
            eventId: string;
            m1Solar: number;
            m2Solar: number;
            mfSolar: number;
            chiFinal: number;
            snrNetwork: number;
            strainAmplitude: number;
            ringdownF220Hz: number;
            ringdownGamma220Hz: number;
            catalogTotalEvents: number;
            catalogNewEvents: number;
        };
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
/** Solar mass in kg (IAU nominal) — sealed constant for merger mass → kg conversion. */
export type BlackHoleMergerCitationParams = {
    eventId?: string;
    m1Solar?: number;
    m2Solar?: number;
    mfSolar?: number;
    chiFinal?: number;
    snrNetwork?: number;
    strainAmplitude?: number;
    ringdownF220Hz?: number;
    ringdownGamma220Hz?: number;
};
export declare function blackHoleMergerSimulatedFromZero(at?: number, params?: BlackHoleMergerCitationParams): {
    simulated: boolean;
    citation: {
        eventId: string;
        m1Solar: number;
        m2Solar: number;
        mfSolar: number;
        chiFinal: number;
        snrNetwork: number;
        strainAmplitude: number;
        ringdownF220Hz: number;
        ringdownGamma220Hz: number;
    };
    radii: {
        m1M: number;
        m2M: number;
        remnantM: number;
    };
    areas: {
        m1M2: number;
        m2M2: number;
        initialM2: number;
        remnantM2: number;
    };
    areaIncreaseFraction: number;
    hawkingAreaLawClassical: boolean;
    entropyBits: {
        m1: number;
        m2: number;
        remnant: number;
    };
    ringdown: {
        frequencyHz: number;
        dampingHz: number;
        amplitude: number;
    };
    strain: {
        orderOfMagnitude: number;
        citedSnr: number;
        samples: number[];
    };
    receipt: string;
    statement: string;
    boundary: string;
};
export declare function gwtcCatalogSimulatedFromZero(matrix?: MindMatrix): {
    addressed: boolean;
    totalEvents: number;
    newEvents: number;
    registerBits: number;
    entries: {
        index: number;
        eventId: string;
        address: string;
        registerSlot: number;
    }[];
    merger: {
        simulated: boolean;
        citation: {
            eventId: string;
            m1Solar: number;
            m2Solar: number;
            mfSolar: number;
            chiFinal: number;
            snrNetwork: number;
            strainAmplitude: number;
            ringdownF220Hz: number;
            ringdownGamma220Hz: number;
        };
        radii: {
            m1M: number;
            m2M: number;
            remnantM: number;
        };
        areas: {
            m1M2: number;
            m2M2: number;
            initialM2: number;
            remnantM2: number;
        };
        areaIncreaseFraction: number;
        hawkingAreaLawClassical: boolean;
        entropyBits: {
            m1: number;
            m2: number;
            remnant: number;
        };
        ringdown: {
            frequencyHz: number;
            dampingHz: number;
            amplitude: number;
        };
        strain: {
            orderOfMagnitude: number;
            citedSnr: number;
            samples: number[];
        };
        receipt: string;
        statement: string;
        boundary: string;
    };
    citation: {
        cited: boolean;
        report: {
            id: string;
            title: string;
            published: string;
            url: string;
            instruments: readonly ["LIGO Hanford", "LIGO Livingston", "Virgo", "KAGRA"];
            observingWindow: string;
            highlights: string[];
            simulationParams: {
                eventId: string;
                m1Solar: number;
                m2Solar: number;
                mfSolar: number;
                chiFinal: number;
                snrNetwork: number;
                strainAmplitude: number;
                ringdownF220Hz: number;
                ringdownGamma220Hz: number;
                catalogTotalEvents: number;
                catalogNewEvents: number;
            };
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
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** Gate: src/0 black-hole merger simulation composed with GWTC catalog addressing. */
export declare function src0BlackHoleSimulationComputes(matrix?: MindMatrix): {
    computes: boolean;
    sim: {
        simulated: boolean;
        citation: {
            eventId: string;
            m1Solar: number;
            m2Solar: number;
            mfSolar: number;
            chiFinal: number;
            snrNetwork: number;
            strainAmplitude: number;
            ringdownF220Hz: number;
            ringdownGamma220Hz: number;
        };
        radii: {
            m1M: number;
            m2M: number;
            remnantM: number;
        };
        areas: {
            m1M2: number;
            m2M2: number;
            initialM2: number;
            remnantM2: number;
        };
        areaIncreaseFraction: number;
        hawkingAreaLawClassical: boolean;
        entropyBits: {
            m1: number;
            m2: number;
            remnant: number;
        };
        ringdown: {
            frequencyHz: number;
            dampingHz: number;
            amplitude: number;
        };
        strain: {
            orderOfMagnitude: number;
            citedSnr: number;
            samples: number[];
        };
        receipt: string;
        statement: string;
        boundary: string;
    };
    catalog: {
        addressed: boolean;
        totalEvents: number;
        newEvents: number;
        registerBits: number;
        entries: {
            index: number;
            eventId: string;
            address: string;
            registerSlot: number;
        }[];
        merger: {
            simulated: boolean;
            citation: {
                eventId: string;
                m1Solar: number;
                m2Solar: number;
                mfSolar: number;
                chiFinal: number;
                snrNetwork: number;
                strainAmplitude: number;
                ringdownF220Hz: number;
                ringdownGamma220Hz: number;
            };
            radii: {
                m1M: number;
                m2M: number;
                remnantM: number;
            };
            areas: {
                m1M2: number;
                m2M2: number;
                initialM2: number;
                remnantM2: number;
            };
            areaIncreaseFraction: number;
            hawkingAreaLawClassical: boolean;
            entropyBits: {
                m1: number;
                m2: number;
                remnant: number;
            };
            ringdown: {
                frequencyHz: number;
                dampingHz: number;
                amplitude: number;
            };
            strain: {
                orderOfMagnitude: number;
                citedSnr: number;
                samples: number[];
            };
            receipt: string;
            statement: string;
            boundary: string;
        };
        citation: {
            cited: boolean;
            report: {
                id: string;
                title: string;
                published: string;
                url: string;
                instruments: readonly ["LIGO Hanford", "LIGO Livingston", "Virgo", "KAGRA"];
                observingWindow: string;
                highlights: string[];
                simulationParams: {
                    eventId: string;
                    m1Solar: number;
                    m2Solar: number;
                    mfSolar: number;
                    chiFinal: number;
                    snrNetwork: number;
                    strainAmplitude: number;
                    ringdownF220Hz: number;
                    ringdownGamma220Hz: number;
                    catalogTotalEvents: number;
                    catalogNewEvents: number;
                };
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
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
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
export declare function dissolveIntoNature(matrix?: MindMatrix): {
    dissolved: boolean;
    coverageRises: boolean;
    centralisationFalls: boolean;
    coverage: number;
    centralisation: number;
    nodes: number;
    stages: {
        receipt: string;
        stage: string;
        nodes: number;
        coverage: number;
        centralisation: number;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function astrology(seed?: string, matrix?: MindMatrix): {
    developed: boolean;
    seed: string;
    sun: {
        sign: string;
        glyph: string;
        element: string;
        ruler: string;
        hour: number;
        hue: number;
        frequency: number;
        receipt: string;
    };
    chart: {
        sign: string;
        glyph: string;
        element: string;
        ruler: string;
        hour: number;
        hue: number;
        frequency: number;
        receipt: string;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function selfOrganizing(matrix?: MindMatrix): {
    organized: boolean;
    entropy: number;
    categories: {
        receipt: string;
        category: string;
        members: string[];
    }[];
    count: number;
    members: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function babelFold(matrix?: MindMatrix): BabelFold;
export declare function societyCells(): {
    grounded: boolean;
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function societyOrganismTags(matrix?: MindMatrix): {
    organism: boolean;
    count: number;
    swaps: {
        stripped: boolean;
        tagRoot: string;
        receipt: string;
        label: string;
        tag: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function realtimeMovieParticipation(matrix?: MindMatrix): {
    participates: boolean;
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
export declare function darkLightRealities(matrix?: MindMatrix): {
    switches: boolean;
    dual: boolean;
    realities: {
        holdsWhole: boolean;
        receipt: string;
        reality: string;
        world: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function foldingLinearGivesAnalog(matrix?: MindMatrix): {
    decoded: boolean;
    reconstructsExactly: boolean;
    betweenError: number;
    samples: number;
    cube: number;
    modalities: string[];
    documented: string[];
    flagged: string[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function warToForge(matrix?: MindMatrix): {
    converted: boolean;
    conserved: boolean;
    warPower: number;
    forgePower: number;
    maxTamperingCost: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function forwardDevelopmentWaves(matrix?: MindMatrix): {
    converting: boolean;
    count: number;
    conversions: {
        converted: boolean;
        wave: string;
        receipt: string;
        backward: string;
        forward: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function quantumLogicBackwards(matrix?: MindMatrix): {
    backwards: boolean;
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
export declare function peaceTechMentalityDecoded(matrix?: MindMatrix): {
    decoded: boolean;
    levers: {
        receipt: string;
        lever: string;
        evidenced: string;
        naivety: string;
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
export declare function provenMysteriesBecomeMiraclesOfPeace(matrix?: MindMatrix): {
    miracles: boolean;
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
export declare function warPaysTheForgerPrice(matrix?: MindMatrix): {
    priced: boolean;
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
export declare function hardwareCmykMerkabaFusion(matrix?: MindMatrix): {
    fused: boolean;
    channels: {
        uuid: string;
        hw: string;
        torus: string;
        cmyk: string;
    }[];
    colour: string;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function deviceHardwareVisibleInComputedWidgets(matrix?: MindMatrix): {
    visible: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function achievableOnHardwareComputableInReviews(matrix?: MindMatrix): {
    computable: boolean;
    uuidsPerTB: number;
    tiers: {
        secToTerabyte: number;
        receipt: string;
        tier: string;
        rate: number;
    }[];
    papers: {
        paper: string;
        is: string;
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
export declare function obsoleteHardwareSecondLifeAntiEwaste(matrix?: MindMatrix): {
    solves: boolean;
    ewasteMtPerYear: number;
    recycledPct: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function debitCreditForwardReverseEngineering(matrix?: MindMatrix): {
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
export declare function bulgarianHeritageDecoded(matrix?: MindMatrix): {
    decoded: boolean;
    topicCount: number;
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
export declare function bulgarianHistoryDecoded(matrix?: MindMatrix): {
    decoded: boolean;
    eraCount: number;
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
export declare function bulgarianAncientCivilisationsDecoded(matrix?: MindMatrix): {
    decoded: boolean;
    stratumCount: number;
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
export declare function bulgarianEthnogenesisDecoded(matrix?: MindMatrix): {
    decoded: boolean;
    peopleCount: number;
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
export declare function bulgarianHeritageEightfold(matrix?: MindMatrix): {
    eightfold: boolean;
    axisCount: number;
    count: number;
    axes: {
        glyph: string;
        pinyin: string;
        name: string;
        attribute: string;
        meaningEn: string;
        meaningBg: string;
        receipt: string;
        bits: number;
        en: string;
        bg: string;
        gloss: string;
        on: boolean;
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
export { GOLD_MINE_MAP_HINGE, goldMineMapCatalog, goldMineMapFitsPerfectlyInModel, undiscoveredGoldConcentrationCandidatesFromMap, goldMineMapComputes, thunderGoldGraphFromPreciseGpsCoordinates, thunderGoldGraphPaintSamples, thunderGoldGraphComputes, schumannGoldSiteCouplingAt, schumannGoldSiteCouplingComputes } from '../../wind/fusion';
export declare function magneticDeclinationAtSite(latDeg: number, lonDeg: number): {
    declinationDeg: number;
    poleLatDeg: number;
    poleLonDeg: number;
    boundary: string;
};
export declare function preciousMetalsThunderGraphFromGps(at?: number, matrix?: {
    root: string;
}): {
    graphed: boolean;
    nodes: ({
        declinationDeg: number;
        receipt: string;
        id: "potosi";
        metal: "Ag";
        lat: -19.6;
        lon: -65.8;
    } | {
        declinationDeg: number;
        receipt: string;
        id: "fresnillo";
        metal: "Ag";
        lat: 23.2;
        lon: -102.9;
    } | {
        declinationDeg: number;
        receipt: string;
        id: "coeur-dalene";
        metal: "Ag";
        lat: 47.5;
        lon: -116.1;
    } | {
        declinationDeg: number;
        receipt: string;
        id: "bushveld";
        metal: "Pt";
        lat: -25;
        lon: 29.5;
    } | {
        declinationDeg: number;
        receipt: string;
        id: "norilsk";
        metal: "Pt";
        lat: 69.4;
        lon: 88.2;
    } | {
        declinationDeg: number;
        receipt: string;
        id: "stillwater";
        metal: "Pt";
        lat: 45.4;
        lon: -109.9;
    } | {
        declinationDeg: number;
        receipt: string;
        id: "escondida";
        metal: "Cu";
        lat: -24.3;
        lon: -69.1;
    } | {
        declinationDeg: number;
        receipt: string;
        id: "chuquicamata";
        metal: "Cu";
        lat: -22.3;
        lon: -68.9;
    } | {
        declinationDeg: number;
        receipt: string;
        id: "bingham";
        metal: "Cu";
        lat: 40.5;
        lon: -112.2;
    })[];
    edges: {
        from: "potosi" | "fresnillo" | "coeur-dalene" | "bushveld" | "norilsk" | "stillwater" | "escondida" | "chuquicamata" | "bingham";
        to: "potosi" | "fresnillo" | "coeur-dalene" | "bushveld" | "norilsk" | "stillwater" | "escondida" | "chuquicamata" | "bingham";
        km: number;
        weight: number;
        receipt: string;
    }[];
    metals: ("Ag" | "Pt" | "Cu")[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function energyFlowThunderGraphFromGps(at?: number, matrix?: {
    root: string;
}): {
    graphed: boolean;
    nodes: ({
        declinationDeg: number;
        receipt: string;
        id: "three-gorges";
        kind: "water";
        lat: 30.8;
        lon: 111;
    } | {
        declinationDeg: number;
        receipt: string;
        id: "itaipu";
        kind: "water";
        lat: -25.4;
        lon: -54.6;
    } | {
        declinationDeg: number;
        receipt: string;
        id: "grand-coulee";
        kind: "water";
        lat: 48;
        lon: -119;
    } | {
        declinationDeg: number;
        receipt: string;
        id: "ghawar";
        kind: "oil";
        lat: 25.4;
        lon: 49.6;
    } | {
        declinationDeg: number;
        receipt: string;
        id: "permian";
        kind: "oil";
        lat: 31.8;
        lon: -102.4;
    } | {
        declinationDeg: number;
        receipt: string;
        id: "samotlor";
        kind: "oil";
        lat: 61.1;
        lon: 76.7;
    })[];
    edges: {
        from: "three-gorges" | "itaipu" | "grand-coulee" | "ghawar" | "permian" | "samotlor";
        to: "three-gorges" | "itaipu" | "grand-coulee" | "ghawar" | "permian" | "samotlor";
        km: number;
        flow: number;
        receipt: string;
    }[];
    kinds: ("water" | "oil")[];
    root: string;
    statement: string;
    boundary: string;
};
