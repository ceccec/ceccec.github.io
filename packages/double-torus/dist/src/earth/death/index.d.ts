import type { MindMatrix } from '../../wind/types';
export { doubleTorusCompost as compost } from '../../fire/li';
/** Double torus compost — waste folds to soil and soil to life (тор/torus pun). */
export declare function deathCompost(matrix?: MindMatrix): {
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
/** Entropy recycled at the gates — disorder caught becomes the next fold's seed. */
export declare function deathEntropyRecycled(matrix?: MindMatrix): {
    recycled: boolean;
    gates: {
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
    modelEntropy: number;
    root: string;
    statement: string;
    boundary: string;
};
/** Material streams closed in torus loops — organic through e-waste. */
export declare function deathMaterialRecycling(matrix?: MindMatrix): {
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
/** Social and gap regeneration — laws and inverse gaps rebuild deterministically. */
export declare function deathRegeneration(matrix?: MindMatrix): {
    regenerates: boolean;
    social: {
        regenerated: boolean;
        systems: number;
        subsystems: {
            system: string;
            root: string;
        }[];
        deterministic: boolean;
        root: string;
        statement: string;
        boundary: string;
    };
    gaps: {
        regenerates: boolean;
        count: number;
        facets: ({
            receipt: string;
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        statement: string;
        boundary: string;
    };
    root: string;
    statement: string;
    boundary: string;
};
/** Terminal end that is productive — gaps regenerate, development never converges to zero. */
export declare function deathTerminalEndProductive(matrix?: MindMatrix): {
    productive: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** Obsolete hardware second life — anti-obsolescence extends device lifespans. */
export declare function deathSecondLife(matrix?: MindMatrix): {
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
/** Bitten apple opening — genus-2 bite (χ=−2) opens Rosetta decode (pairs with life/genesis). */
export declare function deathBittenAppleOpening(matrix?: MindMatrix, path?: string): {
    opened: boolean;
    decode: {
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
    qa: {
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
    root: string;
    statement: string;
    boundary: string;
};
/** Decay doomed to infinite forge cost — the thrive/decay duality from trinityOtherSideDoomed. */
export declare function deathDecayDoomed(matrix?: MindMatrix): {
    doomed: boolean;
    decayLeg: {
        forgeCostLog2: number;
        doomed: boolean;
        receipt: string;
        side: string;
        other: string;
        onByDefault: boolean;
    };
    root: string;
    statement: string;
    boundary: string;
};
/** Contraction settles to equilibrium — damped breath after expansion (dual to life breath). */
export declare function deathContractionEquilibrium(matrix?: MindMatrix): {
    settled: boolean;
    breath: {
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
    root: string;
    statement: string;
    boundary: string;
};
/**
 * Life without death is unbounded growth — the cancer metaphor. The death counter-flow (contraction /
 * decay / reabsorption) BOUNDS the modeled life expansion so the coupled system is homeostatic: the
 * outward birth→life→expansion current and the inward death→reabsorption→contraction current are the
 * two flows of ONE double torus sharing one throat. Bounded coupling = healthy; runaway one-directional
 * growth = cancer. Composes deathContractionEquilibrium (the damped breath that settles) with
 * deathTerminalEndProductive (the productive, compost terminal — not a runaway dead end).
 *
 * HONEST: a homeostasis/feedback MODEL over computed gates plus a black/white-hole throat topological
 * analogy — NOT a biological, oncological, or physical death claim. "Cancer" names the unbounded
 * one-directional growth pattern of a model with no contraction term, not the disease.
 */
export declare function deathBoundsLifeNotCancer(matrix?: MindMatrix): {
    bounded: boolean;
    contract: {
        settled: boolean;
        breath: {
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
        root: string;
        statement: string;
        boundary: string;
    };
    terminal: {
        productive: boolean;
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
/** Ancient decode terminal receipt — thunder/decode seals reusable ancient knowledge. */
export declare function deathAncientDecodeTerminal(matrix?: MindMatrix): {
    terminal: boolean;
    decode: {
        reusable: boolean;
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
    root: string;
    statement: string;
    boundary: string;
};
/** Life/death duality pair — order-sensitive cross-fold; emergence and compost sealed together. */
export declare function lifeDeathPairComputes(matrix?: MindMatrix): {
    computes: boolean;
    life: {
        computes: boolean;
        bio: {
            alive: boolean;
            aspects: {
                receipt: string;
                aspect: string;
                maps: string;
                alive: boolean;
            }[];
            count: number;
            root: string;
            statement: string;
            boundary: string;
        };
        neuro: {
            mirrors: boolean;
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            root: string;
            statement: string;
            boundary: string;
        };
        harmony: import("../../wind/types").HarmonyProbability;
        immune: {
            healthy: boolean;
            maxHealth: boolean;
            health: number;
            of: number;
            antibodies: {
                receipt: string;
                defends: string;
                healthy: boolean;
            }[];
            investigations: {
                aspect: string;
                sound: boolean;
            }[];
            nourishment: {
                pureSoul: string;
                food: string;
                sustainable: string;
            };
            tamperingCost: number;
            root: string;
            statement: string;
            boundary: string;
        };
        movie: {
            harmonises: boolean;
            facets: {
                receipt: string;
                facet: string;
                on: any;
            }[];
            typoNote: string;
            root: string;
            statement: string;
            boundary: string;
        };
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
    death: {
        computes: boolean;
        compost: {
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
        entropyGate: {
            recycled: boolean;
            gates: {
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
            modelEntropy: number;
            root: string;
            statement: string;
            boundary: string;
        };
        material: {
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
        regen: {
            regenerates: boolean;
            social: {
                regenerated: boolean;
                systems: number;
                subsystems: {
                    system: string;
                    root: string;
                }[];
                deterministic: boolean;
                root: string;
                statement: string;
                boundary: string;
            };
            gaps: {
                regenerates: boolean;
                count: number;
                facets: ({
                    receipt: string;
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                statement: string;
                boundary: string;
            };
            root: string;
            statement: string;
            boundary: string;
        };
        terminal: {
            productive: boolean;
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            root: string;
            statement: string;
            boundary: string;
        };
        second: {
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
        apple: {
            opened: boolean;
            decode: {
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
            qa: {
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
            root: string;
            statement: string;
            boundary: string;
        };
        decay: {
            doomed: boolean;
            decayLeg: {
                forgeCostLog2: number;
                doomed: boolean;
                receipt: string;
                side: string;
                other: string;
                onByDefault: boolean;
            };
            root: string;
            statement: string;
            boundary: string;
        };
        contract: {
            settled: boolean;
            breath: {
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
            root: string;
            statement: string;
            boundary: string;
        };
        ancient: {
            terminal: boolean;
            decode: {
                reusable: boolean;
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
            root: string;
            statement: string;
            boundary: string;
        };
        bounded: {
            bounded: boolean;
            contract: {
                settled: boolean;
                breath: {
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
                root: string;
                statement: string;
                boundary: string;
            };
            terminal: {
                productive: boolean;
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
    cross: {
        forward: string;
        reverse: string;
        bidirectional: boolean;
        merged: string;
    };
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
/** One gate — compost, entropy recycle, material loops, regeneration, and terminal-end facets at call time. */
export declare function deathComputes(matrix?: MindMatrix): {
    computes: boolean;
    compost: {
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
    entropyGate: {
        recycled: boolean;
        gates: {
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
        modelEntropy: number;
        root: string;
        statement: string;
        boundary: string;
    };
    material: {
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
    regen: {
        regenerates: boolean;
        social: {
            regenerated: boolean;
            systems: number;
            subsystems: {
                system: string;
                root: string;
            }[];
            deterministic: boolean;
            root: string;
            statement: string;
            boundary: string;
        };
        gaps: {
            regenerates: boolean;
            count: number;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            statement: string;
            boundary: string;
        };
        root: string;
        statement: string;
        boundary: string;
    };
    terminal: {
        productive: boolean;
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
    second: {
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
    apple: {
        opened: boolean;
        decode: {
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
        qa: {
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
        root: string;
        statement: string;
        boundary: string;
    };
    decay: {
        doomed: boolean;
        decayLeg: {
            forgeCostLog2: number;
            doomed: boolean;
            receipt: string;
            side: string;
            other: string;
            onByDefault: boolean;
        };
        root: string;
        statement: string;
        boundary: string;
    };
    contract: {
        settled: boolean;
        breath: {
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
        root: string;
        statement: string;
        boundary: string;
    };
    ancient: {
        terminal: boolean;
        decode: {
            reusable: boolean;
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
        root: string;
        statement: string;
        boundary: string;
    };
    bounded: {
        bounded: boolean;
        contract: {
            settled: boolean;
            breath: {
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
            root: string;
            statement: string;
            boundary: string;
        };
        terminal: {
            productive: boolean;
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
export declare function violationsComputationallyDecreaseAgentLifeToNoLifeAtAll(matrix?: MindMatrix): {
    computes: boolean;
    fullLife: number;
    series: number[];
    deathAt: number;
    root: string;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    statement: string;
    boundary: string;
};
export declare function betterTrainedTeamsWinTheBitsByQuantumAmplitudeAmplificationTeamsReplaceAgentsWavesReplaceTeams(): {
    computes: boolean;
    optimalTraining: number;
    ladder: {
        agentWin: number;
        teamWin: number;
        waveWin: number;
    };
    root: string;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    statement: string;
    boundary: string;
};
