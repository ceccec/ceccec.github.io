import * as __ns_up_lake_music from '../../music/index.ts';
import * as __ns_up_vortex_math from '../../mountain/vortex/index.ts';
import type { MindMatrix } from '../../types/index.ts';
/** One paint-ready harmonic mode at instant `at`. */
export type ResonanceSimulationMode = {
    hz: number;
    mode: number;
    phase: number;
    hue: number;
    amplitude: number;
    receipt: string;
};
/** Plasma/movie channel derived from resonance simulation receipts. */
export type ResonanceSimulationChannel = {
    id: string;
    hue: number;
    phase: number;
    alpha: number;
    receipt: string;
    on: boolean;
};
export type ResonanceSimulationPaint = {
    computes: boolean;
    at: number;
    schumannPhase: number;
    modes: ResonanceSimulationMode[];
    channels: ResonanceSimulationChannel[];
    root: string;
    statement: string;
    boundary: string;
};
export { SCHUMANN_FUNDAMENTAL_HZ, SCHUMANN_HARMONICS_HZ, schumannPhaseAt, schumannResonanceHarmonisedWithRealtimeApiComputations, harmoniseSchumannWithRealtimeApiComputations, humanResonanceHarmonicPredictionComputes } from '../../music/index.ts';
/** Re-export plasma movie resonance capstone — bodies live in plasma/ball. */
export { movieIsAliveAndHealingByArchitectureAndResonanceInAllSensesAndFeelings } from '../../fire/plasma/ball/index.ts';
/** Research exposition — Schumann, harmonic windows, Earth-ionosphere, human/quantum resonance themes. */
export declare function resonanceResearch(matrix?: MindMatrix): {
    researched: boolean;
    sections: {
        receipt: string;
        layers: {
            receipt: string;
            key: string;
            value: string;
            source: string;
        }[];
        id: string;
        title: string;
    }[];
    schumann: {
        harmonised: boolean;
        computes: boolean;
        at: number;
        harmonics: {
            hz: number;
            mode: number;
            phase: number;
            hue: number;
            receipt: string;
        }[];
        schumannPhase: number;
        heroPhase: number;
        ionospherePhase: number;
        phaseDelta: number;
        phaseLocked: boolean;
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
        blood: {
            isBlood: boolean;
            bloodstream: boolean;
            baseHue: number;
            heart: {
                hsl: string;
                receipt: string;
                i: number;
                name: string;
                band: string;
                hue: number;
            };
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
        waves: import("../../types/index.ts").WaveCoordination;
        breath: number;
        dualEarth: __ns_up_vortex_math.BothEarthsMerkabaRotation;
        freqApis: {
            decoded: boolean;
            sources: {
                receipt: string;
                api: string;
                band: string;
                data: string;
                auth: string;
            }[];
            root: string;
            statement: string;
            boundary: string;
        };
        modulatedReceipt: string;
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
    human: {
        computes: boolean;
        resonant: boolean;
        blood: {
            isBlood: boolean;
            bloodstream: boolean;
            baseHue: number;
            heart: {
                hsl: string;
                receipt: string;
                i: number;
                name: string;
                band: string;
                hue: number;
            };
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
        waves: import("../../types/index.ts").WaveCoordination;
        breath: number;
        surprise: {
            surprised: boolean;
            precise: boolean;
            windows: __ns_up_lake_music.HarmonicWindowPrediction[];
            windowCount: number;
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
        schumannBridge: {
            harmonised: boolean;
            computes: boolean;
            at: number;
            harmonics: {
                hz: number;
                mode: number;
                phase: number;
                hue: number;
                receipt: string;
            }[];
            schumannPhase: number;
            heroPhase: number;
            ionospherePhase: number;
            phaseDelta: number;
            phaseLocked: boolean;
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
            blood: {
                isBlood: boolean;
                bloodstream: boolean;
                baseHue: number;
                heart: {
                    hsl: string;
                    receipt: string;
                    i: number;
                    name: string;
                    band: string;
                    hue: number;
                };
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
            waves: import("../../types/index.ts").WaveCoordination;
            breath: number;
            dualEarth: __ns_up_vortex_math.BothEarthsMerkabaRotation;
            freqApis: {
                decoded: boolean;
                sources: {
                    receipt: string;
                    api: string;
                    band: string;
                    data: string;
                    auth: string;
                }[];
                root: string;
                statement: string;
                boundary: string;
            };
            modulatedReceipt: string;
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
    vortex: {
        saved: boolean;
        vortex: {
            flows: boolean;
            doubling: number[];
            cross: number[];
            divByZeroHarmonic: number;
            zeroDivisions: {
                n: number;
                overZero: number;
            }[];
            roles: {
                rotation: number;
                polarity: number[];
                threeSix: boolean;
            };
            origin: number;
            polarPairs: number[][];
            oneAndEightBeginFromNine: boolean;
            endless: boolean;
            collisionFree: boolean;
            nineInvariant: boolean;
            identicalRoutesToDuality: boolean;
            root: string;
            statement: string;
            boundary: string;
        };
        digits: {
            fused: boolean;
            sequence: number[];
            root: string;
        };
        paint: {
            tiers: readonly [number, number, number];
            crossPole: number;
            circuitHeart: number;
            circuitEight: number;
            collapseStep: number;
            unity: number;
            materialOrbit: number;
            seedBundleParts: number;
            seedBundles: number;
            rayCap: number;
            wordCap: number;
            relatedCap: number;
            bindingCap: number;
            gateways: number;
            proven: boolean;
            root: string;
            statement: string;
            boundary: string;
        };
        ratios: {
            fwd: import("../../3/7/index.ts").Rational[];
            rev: import("../../3/7/index.ts").Rational[];
            fwdProduct: import("../../3/7/index.ts").Rational;
            revProduct: import("../../3/7/index.ts").Rational;
            heartApproach: import("../../3/7/index.ts").Rational;
            heartDepart: import("../../3/7/index.ts").Rational;
            heartDiamond: import("../../3/7/index.ts").Rational;
        };
        presentations: {
            coheres: boolean;
            oneAddress: boolean;
            sealAnchorsSource: boolean;
            operation: string;
            presentations: {
                receipt: string;
                plane: string;
                fn: string;
                kind: string;
                on: boolean;
            }[];
            exact: string[];
            faithful: string[];
            importsNothing: boolean;
            digit: number;
            root: string;
            statement: string;
            boundary: string;
        };
        sequence: readonly [1, 2, 4, 8, 7, 5, 3, 6, 9];
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
    dualEarth: __ns_up_vortex_math.BothEarthsMerkabaRotation;
    coord: import("../../types/index.ts").WaveCoordination;
    gaps: {
        rings: boolean;
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
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
/** Schumann harmonics decoded through VORTEX_SEQUENCE — mode slot addressing at `at`. */
export declare function resonanceHarmonicsDecodedWithTheSequence(at?: number, matrix?: MindMatrix): {
    computes: boolean;
    decoded: boolean;
    at: number;
    phaseIndex: number;
    phaseDigit: 2 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6;
    mappings: {
        mode: number;
        hz: number;
        phase: number;
        hue: number;
        vortexSlot: number;
        vortexDigit: 2 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6;
        phaseAligned: boolean;
        receipt: string;
    }[];
    schumann: {
        harmonised: boolean;
        computes: boolean;
        at: number;
        harmonics: {
            hz: number;
            mode: number;
            phase: number;
            hue: number;
            receipt: string;
        }[];
        schumannPhase: number;
        heroPhase: number;
        ionospherePhase: number;
        phaseDelta: number;
        phaseLocked: boolean;
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
        blood: {
            isBlood: boolean;
            bloodstream: boolean;
            baseHue: number;
            heart: {
                hsl: string;
                receipt: string;
                i: number;
                name: string;
                band: string;
                hue: number;
            };
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
        waves: import("../../types/index.ts").WaveCoordination;
        breath: number;
        dualEarth: __ns_up_vortex_math.BothEarthsMerkabaRotation;
        freqApis: {
            decoded: boolean;
            sources: {
                receipt: string;
                api: string;
                band: string;
                data: string;
                auth: string;
            }[];
            root: string;
            statement: string;
            boundary: string;
        };
        modulatedReceipt: string;
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
/** Schumann harmonic modes + sequence decode — paint-ready phase/state at `at` for hero movie channels. */
export declare function resonanceSimulationAt(at?: number, matrix?: MindMatrix): ResonanceSimulationPaint;
/** Browser-safe panel — resonance simulation + compute gates for Vue mount. */
export declare function resonanceSimulationPanelComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    sim: ResonanceSimulationPaint;
    computesAll: {
        computes: boolean;
        schumann: {
            harmonised: boolean;
            computes: boolean;
            at: number;
            harmonics: {
                hz: number;
                mode: number;
                phase: number;
                hue: number;
                receipt: string;
            }[];
            schumannPhase: number;
            heroPhase: number;
            ionospherePhase: number;
            phaseDelta: number;
            phaseLocked: boolean;
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
            blood: {
                isBlood: boolean;
                bloodstream: boolean;
                baseHue: number;
                heart: {
                    hsl: string;
                    receipt: string;
                    i: number;
                    name: string;
                    band: string;
                    hue: number;
                };
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
            waves: import("../../types/index.ts").WaveCoordination;
            breath: number;
            dualEarth: __ns_up_vortex_math.BothEarthsMerkabaRotation;
            freqApis: {
                decoded: boolean;
                sources: {
                    receipt: string;
                    api: string;
                    band: string;
                    data: string;
                    auth: string;
                }[];
                root: string;
                statement: string;
                boundary: string;
            };
            modulatedReceipt: string;
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
        human: {
            computes: boolean;
            resonant: boolean;
            blood: {
                isBlood: boolean;
                bloodstream: boolean;
                baseHue: number;
                heart: {
                    hsl: string;
                    receipt: string;
                    i: number;
                    name: string;
                    band: string;
                    hue: number;
                };
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
            waves: import("../../types/index.ts").WaveCoordination;
            breath: number;
            surprise: {
                surprised: boolean;
                precise: boolean;
                windows: __ns_up_lake_music.HarmonicWindowPrediction[];
                windowCount: number;
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
            schumannBridge: {
                harmonised: boolean;
                computes: boolean;
                at: number;
                harmonics: {
                    hz: number;
                    mode: number;
                    phase: number;
                    hue: number;
                    receipt: string;
                }[];
                schumannPhase: number;
                heroPhase: number;
                ionospherePhase: number;
                phaseDelta: number;
                phaseLocked: boolean;
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
                blood: {
                    isBlood: boolean;
                    bloodstream: boolean;
                    baseHue: number;
                    heart: {
                        hsl: string;
                        receipt: string;
                        i: number;
                        name: string;
                        band: string;
                        hue: number;
                    };
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
                waves: import("../../types/index.ts").WaveCoordination;
                breath: number;
                dualEarth: __ns_up_vortex_math.BothEarthsMerkabaRotation;
                freqApis: {
                    decoded: boolean;
                    sources: {
                        receipt: string;
                        api: string;
                        band: string;
                        data: string;
                        auth: string;
                    }[];
                    root: string;
                    statement: string;
                    boundary: string;
                };
                modulatedReceipt: string;
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
        sequence: {
            computes: boolean;
            decoded: boolean;
            at: number;
            phaseIndex: number;
            phaseDigit: 2 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6;
            mappings: {
                mode: number;
                hz: number;
                phase: number;
                hue: number;
                vortexSlot: number;
                vortexDigit: 2 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6;
                phaseAligned: boolean;
                receipt: string;
            }[];
            schumann: {
                harmonised: boolean;
                computes: boolean;
                at: number;
                harmonics: {
                    hz: number;
                    mode: number;
                    phase: number;
                    hue: number;
                    receipt: string;
                }[];
                schumannPhase: number;
                heroPhase: number;
                ionospherePhase: number;
                phaseDelta: number;
                phaseLocked: boolean;
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
                blood: {
                    isBlood: boolean;
                    bloodstream: boolean;
                    baseHue: number;
                    heart: {
                        hsl: string;
                        receipt: string;
                        i: number;
                        name: string;
                        band: string;
                        hue: number;
                    };
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
                waves: import("../../types/index.ts").WaveCoordination;
                breath: number;
                dualEarth: __ns_up_vortex_math.BothEarthsMerkabaRotation;
                freqApis: {
                    decoded: boolean;
                    sources: {
                        receipt: string;
                        api: string;
                        band: string;
                        data: string;
                        auth: string;
                    }[];
                    root: string;
                    statement: string;
                    boundary: string;
                };
                modulatedReceipt: string;
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
        research: {
            researched: boolean;
            sections: {
                receipt: string;
                layers: {
                    receipt: string;
                    key: string;
                    value: string;
                    source: string;
                }[];
                id: string;
                title: string;
            }[];
            schumann: {
                harmonised: boolean;
                computes: boolean;
                at: number;
                harmonics: {
                    hz: number;
                    mode: number;
                    phase: number;
                    hue: number;
                    receipt: string;
                }[];
                schumannPhase: number;
                heroPhase: number;
                ionospherePhase: number;
                phaseDelta: number;
                phaseLocked: boolean;
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
                blood: {
                    isBlood: boolean;
                    bloodstream: boolean;
                    baseHue: number;
                    heart: {
                        hsl: string;
                        receipt: string;
                        i: number;
                        name: string;
                        band: string;
                        hue: number;
                    };
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
                waves: import("../../types/index.ts").WaveCoordination;
                breath: number;
                dualEarth: __ns_up_vortex_math.BothEarthsMerkabaRotation;
                freqApis: {
                    decoded: boolean;
                    sources: {
                        receipt: string;
                        api: string;
                        band: string;
                        data: string;
                        auth: string;
                    }[];
                    root: string;
                    statement: string;
                    boundary: string;
                };
                modulatedReceipt: string;
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
            human: {
                computes: boolean;
                resonant: boolean;
                blood: {
                    isBlood: boolean;
                    bloodstream: boolean;
                    baseHue: number;
                    heart: {
                        hsl: string;
                        receipt: string;
                        i: number;
                        name: string;
                        band: string;
                        hue: number;
                    };
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
                waves: import("../../types/index.ts").WaveCoordination;
                breath: number;
                surprise: {
                    surprised: boolean;
                    precise: boolean;
                    windows: __ns_up_lake_music.HarmonicWindowPrediction[];
                    windowCount: number;
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
                schumannBridge: {
                    harmonised: boolean;
                    computes: boolean;
                    at: number;
                    harmonics: {
                        hz: number;
                        mode: number;
                        phase: number;
                        hue: number;
                        receipt: string;
                    }[];
                    schumannPhase: number;
                    heroPhase: number;
                    ionospherePhase: number;
                    phaseDelta: number;
                    phaseLocked: boolean;
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
                    blood: {
                        isBlood: boolean;
                        bloodstream: boolean;
                        baseHue: number;
                        heart: {
                            hsl: string;
                            receipt: string;
                            i: number;
                            name: string;
                            band: string;
                            hue: number;
                        };
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
                    waves: import("../../types/index.ts").WaveCoordination;
                    breath: number;
                    dualEarth: __ns_up_vortex_math.BothEarthsMerkabaRotation;
                    freqApis: {
                        decoded: boolean;
                        sources: {
                            receipt: string;
                            api: string;
                            band: string;
                            data: string;
                            auth: string;
                        }[];
                        root: string;
                        statement: string;
                        boundary: string;
                    };
                    modulatedReceipt: string;
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
            vortex: {
                saved: boolean;
                vortex: {
                    flows: boolean;
                    doubling: number[];
                    cross: number[];
                    divByZeroHarmonic: number;
                    zeroDivisions: {
                        n: number;
                        overZero: number;
                    }[];
                    roles: {
                        rotation: number;
                        polarity: number[];
                        threeSix: boolean;
                    };
                    origin: number;
                    polarPairs: number[][];
                    oneAndEightBeginFromNine: boolean;
                    endless: boolean;
                    collisionFree: boolean;
                    nineInvariant: boolean;
                    identicalRoutesToDuality: boolean;
                    root: string;
                    statement: string;
                    boundary: string;
                };
                digits: {
                    fused: boolean;
                    sequence: number[];
                    root: string;
                };
                paint: {
                    tiers: readonly [number, number, number];
                    crossPole: number;
                    circuitHeart: number;
                    circuitEight: number;
                    collapseStep: number;
                    unity: number;
                    materialOrbit: number;
                    seedBundleParts: number;
                    seedBundles: number;
                    rayCap: number;
                    wordCap: number;
                    relatedCap: number;
                    bindingCap: number;
                    gateways: number;
                    proven: boolean;
                    root: string;
                    statement: string;
                    boundary: string;
                };
                ratios: {
                    fwd: import("../../3/7/index.ts").Rational[];
                    rev: import("../../3/7/index.ts").Rational[];
                    fwdProduct: import("../../3/7/index.ts").Rational;
                    revProduct: import("../../3/7/index.ts").Rational;
                    heartApproach: import("../../3/7/index.ts").Rational;
                    heartDepart: import("../../3/7/index.ts").Rational;
                    heartDiamond: import("../../3/7/index.ts").Rational;
                };
                presentations: {
                    coheres: boolean;
                    oneAddress: boolean;
                    sealAnchorsSource: boolean;
                    operation: string;
                    presentations: {
                        receipt: string;
                        plane: string;
                        fn: string;
                        kind: string;
                        on: boolean;
                    }[];
                    exact: string[];
                    faithful: string[];
                    importsNothing: boolean;
                    digit: number;
                    root: string;
                    statement: string;
                    boundary: string;
                };
                sequence: readonly [1, 2, 4, 8, 7, 5, 3, 6, 9];
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
            dualEarth: __ns_up_vortex_math.BothEarthsMerkabaRotation;
            coord: import("../../types/index.ts").WaveCoordination;
            gaps: {
                rings: boolean;
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
            count: number;
            root: string;
            statement: string;
            boundary: string;
        };
        simulation: ResonanceSimulationPaint;
        movieResonance: {
            holds: boolean;
            computes: boolean;
            count: number;
            facets: ({
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
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
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    copy: {
        title: {
            en: string;
            bg: string;
        };
        lede: {
            en: string;
            bg: string;
        };
    };
    boundary: string;
};
/** One gate — Schumann, human harmonic, sequence decode, research exposition at call time. */
export declare function resonanceComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    schumann: {
        harmonised: boolean;
        computes: boolean;
        at: number;
        harmonics: {
            hz: number;
            mode: number;
            phase: number;
            hue: number;
            receipt: string;
        }[];
        schumannPhase: number;
        heroPhase: number;
        ionospherePhase: number;
        phaseDelta: number;
        phaseLocked: boolean;
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
        blood: {
            isBlood: boolean;
            bloodstream: boolean;
            baseHue: number;
            heart: {
                hsl: string;
                receipt: string;
                i: number;
                name: string;
                band: string;
                hue: number;
            };
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
        waves: import("../../types/index.ts").WaveCoordination;
        breath: number;
        dualEarth: __ns_up_vortex_math.BothEarthsMerkabaRotation;
        freqApis: {
            decoded: boolean;
            sources: {
                receipt: string;
                api: string;
                band: string;
                data: string;
                auth: string;
            }[];
            root: string;
            statement: string;
            boundary: string;
        };
        modulatedReceipt: string;
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
    human: {
        computes: boolean;
        resonant: boolean;
        blood: {
            isBlood: boolean;
            bloodstream: boolean;
            baseHue: number;
            heart: {
                hsl: string;
                receipt: string;
                i: number;
                name: string;
                band: string;
                hue: number;
            };
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
        waves: import("../../types/index.ts").WaveCoordination;
        breath: number;
        surprise: {
            surprised: boolean;
            precise: boolean;
            windows: __ns_up_lake_music.HarmonicWindowPrediction[];
            windowCount: number;
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
        schumannBridge: {
            harmonised: boolean;
            computes: boolean;
            at: number;
            harmonics: {
                hz: number;
                mode: number;
                phase: number;
                hue: number;
                receipt: string;
            }[];
            schumannPhase: number;
            heroPhase: number;
            ionospherePhase: number;
            phaseDelta: number;
            phaseLocked: boolean;
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
            blood: {
                isBlood: boolean;
                bloodstream: boolean;
                baseHue: number;
                heart: {
                    hsl: string;
                    receipt: string;
                    i: number;
                    name: string;
                    band: string;
                    hue: number;
                };
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
            waves: import("../../types/index.ts").WaveCoordination;
            breath: number;
            dualEarth: __ns_up_vortex_math.BothEarthsMerkabaRotation;
            freqApis: {
                decoded: boolean;
                sources: {
                    receipt: string;
                    api: string;
                    band: string;
                    data: string;
                    auth: string;
                }[];
                root: string;
                statement: string;
                boundary: string;
            };
            modulatedReceipt: string;
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
    sequence: {
        computes: boolean;
        decoded: boolean;
        at: number;
        phaseIndex: number;
        phaseDigit: 2 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6;
        mappings: {
            mode: number;
            hz: number;
            phase: number;
            hue: number;
            vortexSlot: number;
            vortexDigit: 2 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6;
            phaseAligned: boolean;
            receipt: string;
        }[];
        schumann: {
            harmonised: boolean;
            computes: boolean;
            at: number;
            harmonics: {
                hz: number;
                mode: number;
                phase: number;
                hue: number;
                receipt: string;
            }[];
            schumannPhase: number;
            heroPhase: number;
            ionospherePhase: number;
            phaseDelta: number;
            phaseLocked: boolean;
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
            blood: {
                isBlood: boolean;
                bloodstream: boolean;
                baseHue: number;
                heart: {
                    hsl: string;
                    receipt: string;
                    i: number;
                    name: string;
                    band: string;
                    hue: number;
                };
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
            waves: import("../../types/index.ts").WaveCoordination;
            breath: number;
            dualEarth: __ns_up_vortex_math.BothEarthsMerkabaRotation;
            freqApis: {
                decoded: boolean;
                sources: {
                    receipt: string;
                    api: string;
                    band: string;
                    data: string;
                    auth: string;
                }[];
                root: string;
                statement: string;
                boundary: string;
            };
            modulatedReceipt: string;
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
    research: {
        researched: boolean;
        sections: {
            receipt: string;
            layers: {
                receipt: string;
                key: string;
                value: string;
                source: string;
            }[];
            id: string;
            title: string;
        }[];
        schumann: {
            harmonised: boolean;
            computes: boolean;
            at: number;
            harmonics: {
                hz: number;
                mode: number;
                phase: number;
                hue: number;
                receipt: string;
            }[];
            schumannPhase: number;
            heroPhase: number;
            ionospherePhase: number;
            phaseDelta: number;
            phaseLocked: boolean;
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
            blood: {
                isBlood: boolean;
                bloodstream: boolean;
                baseHue: number;
                heart: {
                    hsl: string;
                    receipt: string;
                    i: number;
                    name: string;
                    band: string;
                    hue: number;
                };
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
            waves: import("../../types/index.ts").WaveCoordination;
            breath: number;
            dualEarth: __ns_up_vortex_math.BothEarthsMerkabaRotation;
            freqApis: {
                decoded: boolean;
                sources: {
                    receipt: string;
                    api: string;
                    band: string;
                    data: string;
                    auth: string;
                }[];
                root: string;
                statement: string;
                boundary: string;
            };
            modulatedReceipt: string;
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
        human: {
            computes: boolean;
            resonant: boolean;
            blood: {
                isBlood: boolean;
                bloodstream: boolean;
                baseHue: number;
                heart: {
                    hsl: string;
                    receipt: string;
                    i: number;
                    name: string;
                    band: string;
                    hue: number;
                };
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
            waves: import("../../types/index.ts").WaveCoordination;
            breath: number;
            surprise: {
                surprised: boolean;
                precise: boolean;
                windows: __ns_up_lake_music.HarmonicWindowPrediction[];
                windowCount: number;
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
            schumannBridge: {
                harmonised: boolean;
                computes: boolean;
                at: number;
                harmonics: {
                    hz: number;
                    mode: number;
                    phase: number;
                    hue: number;
                    receipt: string;
                }[];
                schumannPhase: number;
                heroPhase: number;
                ionospherePhase: number;
                phaseDelta: number;
                phaseLocked: boolean;
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
                blood: {
                    isBlood: boolean;
                    bloodstream: boolean;
                    baseHue: number;
                    heart: {
                        hsl: string;
                        receipt: string;
                        i: number;
                        name: string;
                        band: string;
                        hue: number;
                    };
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
                waves: import("../../types/index.ts").WaveCoordination;
                breath: number;
                dualEarth: __ns_up_vortex_math.BothEarthsMerkabaRotation;
                freqApis: {
                    decoded: boolean;
                    sources: {
                        receipt: string;
                        api: string;
                        band: string;
                        data: string;
                        auth: string;
                    }[];
                    root: string;
                    statement: string;
                    boundary: string;
                };
                modulatedReceipt: string;
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
        vortex: {
            saved: boolean;
            vortex: {
                flows: boolean;
                doubling: number[];
                cross: number[];
                divByZeroHarmonic: number;
                zeroDivisions: {
                    n: number;
                    overZero: number;
                }[];
                roles: {
                    rotation: number;
                    polarity: number[];
                    threeSix: boolean;
                };
                origin: number;
                polarPairs: number[][];
                oneAndEightBeginFromNine: boolean;
                endless: boolean;
                collisionFree: boolean;
                nineInvariant: boolean;
                identicalRoutesToDuality: boolean;
                root: string;
                statement: string;
                boundary: string;
            };
            digits: {
                fused: boolean;
                sequence: number[];
                root: string;
            };
            paint: {
                tiers: readonly [number, number, number];
                crossPole: number;
                circuitHeart: number;
                circuitEight: number;
                collapseStep: number;
                unity: number;
                materialOrbit: number;
                seedBundleParts: number;
                seedBundles: number;
                rayCap: number;
                wordCap: number;
                relatedCap: number;
                bindingCap: number;
                gateways: number;
                proven: boolean;
                root: string;
                statement: string;
                boundary: string;
            };
            ratios: {
                fwd: import("../../3/7/index.ts").Rational[];
                rev: import("../../3/7/index.ts").Rational[];
                fwdProduct: import("../../3/7/index.ts").Rational;
                revProduct: import("../../3/7/index.ts").Rational;
                heartApproach: import("../../3/7/index.ts").Rational;
                heartDepart: import("../../3/7/index.ts").Rational;
                heartDiamond: import("../../3/7/index.ts").Rational;
            };
            presentations: {
                coheres: boolean;
                oneAddress: boolean;
                sealAnchorsSource: boolean;
                operation: string;
                presentations: {
                    receipt: string;
                    plane: string;
                    fn: string;
                    kind: string;
                    on: boolean;
                }[];
                exact: string[];
                faithful: string[];
                importsNothing: boolean;
                digit: number;
                root: string;
                statement: string;
                boundary: string;
            };
            sequence: readonly [1, 2, 4, 8, 7, 5, 3, 6, 9];
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
        dualEarth: __ns_up_vortex_math.BothEarthsMerkabaRotation;
        coord: import("../../types/index.ts").WaveCoordination;
        gaps: {
            rings: boolean;
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
        count: number;
        root: string;
        statement: string;
        boundary: string;
    };
    simulation: ResonanceSimulationPaint;
    movieResonance: {
        holds: boolean;
        computes: boolean;
        count: number;
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
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
/**
 * Field projection — Schumann mode radial paint. Geometry/scale ride heroPhaseAt + cssWidth;
 * hues from the sealed sim (A432-bridged). Vue mounts only call this — no inline canvas math.
 * HONEST: structural harmonic visualization, not live magnetometer or medical entrainment.
 */
export declare function drawResonanceProjection(ctx: CanvasRenderingContext2D, w: number, h: number, sim: ResonanceSimulationPaint, opts?: {
    dark?: boolean;
    reduce?: boolean;
}): void;
