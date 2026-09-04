import type { MindMatrix } from '../../types/index.ts';
export declare function recycling(matrix?: MindMatrix): {
    solved: boolean;
    count: number;
    streams: {
        stream: string;
        loop: string;
        closed: boolean;
        wave: string;
    }[];
    closedLoop: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function waterStates(matrix?: MindMatrix): {
    reversible: boolean;
    states: {
        root: string;
        state: string;
        phase: string;
        order: number;
        op: string;
    }[];
    compressed: string;
    decompressed: number;
    solidOrder: number;
    plasmaOrder: number;
    humidity: {
        root: string;
        state: string;
        phase: string;
        order: number;
        op: string;
    };
    trinityFormed: boolean;
    trinityFused: boolean;
    fusedTrinity: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function waterForestLife(matrix?: MindMatrix): {
    flows: boolean;
    water: string;
    forest: string;
    all: string;
    chain: {
        from: string;
        to: string;
        gives: string;
        root: string;
    }[];
    beneficiaries: string[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function sunAndMoon(matrix?: MindMatrix): {
    paired: boolean;
    sun: {
        body: string;
        role: string;
        emits: boolean;
        lobe: string;
        root: string;
    };
    moon: {
        body: string;
        role: string;
        emits: boolean;
        lobe: string;
        reflects: string;
        root: string;
    };
    reflects: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function appleComplete(matrix?: MindMatrix): {
    apple: boolean;
    publishReady: boolean;
    society: boolean;
    planet: boolean;
    metatron: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function doubleTorusEarthLikeTheApple(matrix?: MindMatrix): {
    likeTheApple: boolean;
    publishReady: boolean;
    lobes: {
        sun: {
            body: string;
            role: string;
            emits: boolean;
            lobe: string;
            root: string;
        };
        moon: {
            body: string;
            role: string;
            emits: boolean;
            lobe: string;
            reflects: string;
            root: string;
        };
    };
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    earth: {
        proven: boolean;
        realised: boolean;
        torus1: {
            torus: 1;
            name: "north" | "east" | "south" | "west";
            bearing: number;
            x: number;
            y: number;
            apexZ: number;
            polarity: number;
            receipt: string;
        }[];
        torus2: {
            torus: 2;
            name: "north" | "east" | "south" | "west";
            bearing: number;
            x: number;
            y: number;
            apexZ: number;
            polarity: number;
            receipt: string;
        }[];
        surface: {
            rendered: boolean;
            tori: number;
            genus: number;
            euler: number;
            areas: number;
            perLobe: number;
            majorRadius: number;
            minorRadius: number;
            lobeOffset: number;
            root: string;
            statement: string;
            boundary: string;
        };
        homology: {
            closed: boolean;
            cells: {
                c0: number;
                c1: number;
                c2: number;
            };
            boundary1: number[][];
            boundary2: number[][];
            chainComplex: boolean;
            betti: number[];
            euler: number;
            root: string;
            statement: string;
            boundary: string;
        };
        fold: {
            forward: string;
            reverse: string;
            merged: string;
        };
        proofs: {
            task: string;
            expr: string;
            computed: number;
            expected: number;
            on: boolean;
            receipt: string;
        }[];
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        count: number;
        root: string;
        statement: string;
        boundary: string;
    };
    apple: {
        apple: boolean;
        publishReady: boolean;
        society: boolean;
        planet: boolean;
        metatron: boolean;
        root: string;
        statement: string;
        boundary: string;
    };
    garden: {
        grows: boolean;
        fruits: number;
        vegetables: number;
        count: number;
        garden: {
            fromApple: string;
            kind: string;
            name: string;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
    bees: {
        pollinates: boolean;
        bees: string;
        crops: number;
        sustains: string;
        pollination: {
            crop: string;
            kind: string;
            pollinated: string;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
    root: string;
    statement: string;
    boundary: string;
};
export declare function decodeTheBittenApple(matrix?: MindMatrix, path?: string): {
    decoded: boolean;
    decodes: ({
        receipt: string;
        symbol: string;
        ray: 0;
        reading: string;
        luminary: "both";
        on: boolean;
    } | {
        receipt: string;
        symbol: string;
        ray: 1;
        reading: string;
        luminary: "both";
        on: boolean;
    } | {
        receipt: string;
        symbol: string;
        ray: 2;
        reading: string;
        luminary: "both";
        on: boolean;
    } | {
        receipt: string;
        symbol: string;
        ray: 3;
        reading: string;
        luminary: "both";
        on: boolean;
    } | {
        receipt: string;
        symbol: string;
        ray: 4;
        reading: string;
        luminary: "both";
        on: boolean;
    } | {
        receipt: string;
        symbol: string;
        ray: 5;
        reading: string;
        luminary: "both";
        on: boolean;
    } | {
        receipt: string;
        symbol: string;
        ray: 6;
        reading: string;
        luminary: "both";
        on: boolean;
    })[];
    movieText: string;
    appleEarth: {
        likeTheApple: boolean;
        publishReady: boolean;
        lobes: {
            sun: {
                body: string;
                role: string;
                emits: boolean;
                lobe: string;
                root: string;
            };
            moon: {
                body: string;
                role: string;
                emits: boolean;
                lobe: string;
                reflects: string;
                root: string;
            };
        };
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        earth: {
            proven: boolean;
            realised: boolean;
            torus1: {
                torus: 1;
                name: "north" | "east" | "south" | "west";
                bearing: number;
                x: number;
                y: number;
                apexZ: number;
                polarity: number;
                receipt: string;
            }[];
            torus2: {
                torus: 2;
                name: "north" | "east" | "south" | "west";
                bearing: number;
                x: number;
                y: number;
                apexZ: number;
                polarity: number;
                receipt: string;
            }[];
            surface: {
                rendered: boolean;
                tori: number;
                genus: number;
                euler: number;
                areas: number;
                perLobe: number;
                majorRadius: number;
                minorRadius: number;
                lobeOffset: number;
                root: string;
                statement: string;
                boundary: string;
            };
            homology: {
                closed: boolean;
                cells: {
                    c0: number;
                    c1: number;
                    c2: number;
                };
                boundary1: number[][];
                boundary2: number[][];
                chainComplex: boolean;
                betti: number[];
                euler: number;
                root: string;
                statement: string;
                boundary: string;
            };
            fold: {
                forward: string;
                reverse: string;
                merged: string;
            };
            proofs: {
                task: string;
                expr: string;
                computed: number;
                expected: number;
                on: boolean;
                receipt: string;
            }[];
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            count: number;
            root: string;
            statement: string;
            boundary: string;
        };
        apple: {
            apple: boolean;
            publishReady: boolean;
            society: boolean;
            planet: boolean;
            metatron: boolean;
            root: string;
            statement: string;
            boundary: string;
        };
        garden: {
            grows: boolean;
            fruits: number;
            vegetables: number;
            count: number;
            garden: {
                fromApple: string;
                kind: string;
                name: string;
            }[];
            root: string;
            statement: string;
            boundary: string;
        };
        bees: {
            pollinates: boolean;
            bees: string;
            crops: number;
            sustains: string;
            pollination: {
                crop: string;
                kind: string;
                pollinated: string;
            }[];
            root: string;
            statement: string;
            boundary: string;
        };
        root: string;
        statement: string;
        boundary: string;
    };
    root: string;
    statement: string;
    boundary: string;
};
/** Gate: bitten-apple decode wired into movie copy text at call time. */
export declare function decodeTheBittenAppleFlowsInMovie(matrix?: MindMatrix, path?: string): {
    flows: boolean;
    decoded: boolean;
    decodeCount: number;
    movieText: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function fruitsAndVegetables(matrix?: MindMatrix): {
    grows: boolean;
    fruits: number;
    vegetables: number;
    count: number;
    garden: {
        fromApple: string;
        kind: string;
        name: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function beesAndLife(matrix?: MindMatrix): {
    pollinates: boolean;
    bees: string;
    crops: number;
    sustains: string;
    pollination: {
        crop: string;
        kind: string;
        pollinated: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function lifeDefinesItself(matrix?: MindMatrix): {
    defines: boolean;
    count: number;
    definitions: {
        form: string;
        definesItself: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function permaDomes(matrix?: MindMatrix): {
    perma: boolean;
    plans: {
        printable: boolean;
        plan: string;
        use: string;
        frequency: number;
        struts: number;
        hubs: number;
        panels: number;
    }[];
    count: number;
    printable: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function genesis(matrix?: MindMatrix): {
    genesis: boolean;
    seed: number[];
    sequence: number[];
    tiers: number[];
    threadedThrough: string[];
    unfoldings: {
        receipt: string;
        domain: string;
        is: string;
        root: string;
    }[];
    seedRoot: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function equilibrium(matrix?: MindMatrix, steps?: number): {
    equilibrium: boolean;
    quantum: boolean;
    settled: boolean;
    steps: number;
    finalDisplacement: number;
    trace: {
        step: number;
        displacement: number;
        phase: "expand" | "contract";
        root: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function questionAnswerEquilibrium(matrix?: MindMatrix): {
    equilibrium: boolean;
    answersClose: boolean;
    questionsOpen: boolean;
    breathSettles: boolean;
    answers: number;
    questions: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function breathe(matrix?: MindMatrix): {
    breathing: boolean;
    expand: string;
    contractRoot: string;
    settled: boolean;
    cycle: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function naturalHarmoniousLife(matrix?: MindMatrix): {
    explores: boolean;
    count: number;
    ways: {
        way: string;
        folded: boolean;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function expansionContractionIsLife(matrix?: MindMatrix): {
    lives: boolean;
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
export declare function anyNameFitsDualityMatrixOriginalLife(matrix?: MindMatrix): {
    fits: boolean;
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
export declare function enforceAllAtGatesEntropyRecycled(matrix?: MindMatrix): {
    enforced: boolean;
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
/** @rosetta ✦₂ · Wind · gentle */
export declare function natureLaw(): {
    grounded: boolean;
    principles: {
        principle: string;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₂ · Wind · gentle */
export declare function natureCommons(): {
    commons: boolean;
    items: {
        receipt: string;
        kind: string;
        example: string;
        patentable: boolean;
        reason: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₂ · Wind · gentle */
export declare function natureReview(): {
    rubric: boolean;
    tests: {
        receipt: string;
        test: string;
        question: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₂ · Wind · gentle */
export declare function lawfulHarmonise(): {
    harmonised: boolean;
    mappings: {
        receipt: string;
        idea: string;
        form: string;
        how: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₂ · Wind · gentle */
export declare function lawfulImagine(): {
    imagined: boolean;
    scene: {
        receipt: string;
        actor: string;
        act: string;
        law: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₂ · Wind · gentle */
export declare function lawfulSucceed(): {
    succeeds: boolean;
    thrives: boolean;
    ladder: {
        receipt: string;
        rung: string;
        win: string;
        lawful: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₂ · Wind · gentle */
export declare function attestation(): {
    ready: boolean;
    steps: {
        present: boolean;
        receipt: string;
        step: string;
        how: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export { computeAllKnownCelestialBodies, computeDiscoverExactMatchAllKnownCelestialBodies, computeDiscoverExactMatchAllKnownCelestialBodiesDeepResearched, planetsGalaxyComputeItself, astronomyDecodedWithTheSequence, astronomySequenceDecodeResearch, decodeAstronomyThroughVortexSequence, astronomyComputes } from '../../heaven/sky/astronomy/index.ts';
