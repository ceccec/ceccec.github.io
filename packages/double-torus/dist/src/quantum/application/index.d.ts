import * as __ns_up_dynamics from '../dynamics';
import * as __ns_up_heaven_mind from '../heaven/mind';
import type { MindMatrix } from '../../wind/types';
export type QuantumApplicationFacetRow = {
    readonly id: string;
    readonly title: string;
    readonly home: string;
    readonly balanceDim: string;
    readonly receipt: string;
};
export declare function quantumApplicationResearch(matrix?: MindMatrix, at?: number): {
    researched: boolean;
    rows: QuantumApplicationFacetRow[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function quantumApplicationComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    research: {
        researched: boolean;
        rows: QuantumApplicationFacetRow[];
        root: string;
        statement: string;
        boundary: string;
    };
    qc: {
        coherent: boolean;
        parts: {
            receipt: string;
            part: string;
            is: string;
            count: number;
        }[];
        qubits: number;
        register: string;
        root: string;
        statement: string;
        boundary: string;
    };
    dynamics: {
        computes: boolean;
        solutions: {
            implemented: boolean;
            implementedCount: number;
            solutions: {
                receipt: string;
                structure: string;
                ran: string;
                implemented: boolean;
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
        simulators: {
            homed: boolean;
            station: string;
            importsNothing: boolean;
            simulators: string[];
            spectrum: string;
            shared: string[];
            isAComputer: boolean;
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            root: string;
            statement: string;
            boundary: string;
        };
        classical: {
            homed: boolean;
            station: string;
            importsNothing: boolean;
            total: number;
            distribution: {
                probabilistic: number;
                dynamical: number;
                network: number;
                quantum: number;
            };
            primitives: string[];
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            root: string;
            statement: string;
            boundary: string;
        };
        domains: {
            homed: boolean;
            station: string;
            families: {
                receipt: string;
                family: string;
                component: string;
                domains: string[];
                check: boolean;
            }[];
            components: string[];
            covered: number;
            deferred: string[];
            total: number;
            root: string;
            statement: string;
            boundary: string;
        };
        evolution: {
            computes: boolean;
            decoded: boolean;
            at: number;
            phaseIndex: number;
            phaseDigit: 1 | 2 | 4 | 8 | 7 | 5 | 3 | 6 | 9;
            mappings: ({
                primitive: string;
                measured: string;
                entangled: boolean;
                vortexDigit: 1 | 2 | 4 | 8 | 7 | 5 | 3 | 6 | 9;
                receipt: string;
                steps?: undefined;
                stationary?: undefined;
                phaseAligned?: undefined;
                energy?: undefined;
                stable?: undefined;
                frames?: undefined;
                phaseDigit?: undefined;
            } | {
                primitive: string;
                steps: number;
                stationary: number[];
                phaseAligned: boolean;
                receipt: string;
                measured?: undefined;
                entangled?: undefined;
                vortexDigit?: undefined;
                energy?: undefined;
                stable?: undefined;
                frames?: undefined;
                phaseDigit?: undefined;
            } | {
                primitive: string;
                energy: number;
                stable: boolean;
                receipt: string;
                measured?: undefined;
                entangled?: undefined;
                vortexDigit?: undefined;
                steps?: undefined;
                stationary?: undefined;
                phaseAligned?: undefined;
                frames?: undefined;
                phaseDigit?: undefined;
            } | {
                primitive: string;
                frames: number;
                phaseDigit: 1 | 2 | 4 | 8 | 7 | 5 | 3 | 6 | 9;
                receipt: string;
                measured?: undefined;
                entangled?: undefined;
                vortexDigit?: undefined;
                steps?: undefined;
                stationary?: undefined;
                phaseAligned?: undefined;
                energy?: undefined;
                stable?: undefined;
            })[];
            solutions: {
                implemented: boolean;
                implementedCount: number;
                solutions: {
                    receipt: string;
                    structure: string;
                    ran: string;
                    implemented: boolean;
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
            qsim: {
                simulated: boolean;
                qubits: number;
                size: number;
                gates: string[];
                states: {
                    basis: string;
                    re: number;
                    im: number;
                    prob: number;
                }[];
                measured: string;
                normalized: boolean;
                entangled: boolean;
                root: string;
                statement: string;
                boundary: string;
            };
            tenD: {
                tenDimensional: boolean;
                entangled: boolean;
                forms: number;
                channels: number;
                gestureTravel: boolean;
                background: string;
                root: string;
                statement: string;
                boundary: string;
            };
            markovTrail: number[][];
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
                    fwd: import("../../3/7").Rational[];
                    rev: import("../../3/7").Rational[];
                    fwdProduct: import("../../3/7").Rational;
                    revProduct: import("../../3/7").Rational;
                    heartApproach: import("../../3/7").Rational;
                    heartDepart: import("../../3/7").Rational;
                    heartDiamond: import("../../3/7").Rational;
                };
                presentations: {
                    coheres: boolean;
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
            definition: string;
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
            mappings: __ns_up_dynamics.QuantumDynamicsMapping[];
            solutions: {
                implemented: boolean;
                implementedCount: number;
                solutions: {
                    receipt: string;
                    structure: string;
                    ran: string;
                    implemented: boolean;
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
            simulators: {
                homed: boolean;
                station: string;
                importsNothing: boolean;
                simulators: string[];
                spectrum: string;
                shared: string[];
                isAComputer: boolean;
                facets: {
                    receipt: string;
                    facet: string;
                    on: boolean;
                }[];
                root: string;
                statement: string;
                boundary: string;
            };
            classical: {
                homed: boolean;
                station: string;
                importsNothing: boolean;
                total: number;
                distribution: {
                    probabilistic: number;
                    dynamical: number;
                    network: number;
                    quantum: number;
                };
                primitives: string[];
                facets: {
                    receipt: string;
                    facet: string;
                    on: boolean;
                }[];
                root: string;
                statement: string;
                boundary: string;
            };
            domains: {
                homed: boolean;
                station: string;
                families: {
                    receipt: string;
                    family: string;
                    component: string;
                    domains: string[];
                    check: boolean;
                }[];
                components: string[];
                covered: number;
                deferred: string[];
                total: number;
                root: string;
                statement: string;
                boundary: string;
            };
            qsim: {
                simulated: boolean;
                qubits: number;
                size: number;
                gates: string[];
                states: {
                    basis: string;
                    re: number;
                    im: number;
                    prob: number;
                }[];
                measured: string;
                normalized: boolean;
                entangled: boolean;
                root: string;
                statement: string;
                boundary: string;
            };
            tsirelson: number;
            count: number;
            root: string;
            statement: string;
            boundary: string;
        };
        simulation: __ns_up_dynamics.QuantumDynamicsSimulationPaint;
        vortexPlasma: {
            computes: boolean;
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
    trading: {
        computes: boolean;
        strategies: {
            strategy: string;
            n: number;
            result: __ns_up_heaven_mind.BacktestResult;
            benchmark: __ns_up_heaven_mind.BacktestResult;
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
export declare function quantumApplicationPanelComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    capstone: {
        computes: boolean;
        research: {
            researched: boolean;
            rows: QuantumApplicationFacetRow[];
            root: string;
            statement: string;
            boundary: string;
        };
        qc: {
            coherent: boolean;
            parts: {
                receipt: string;
                part: string;
                is: string;
                count: number;
            }[];
            qubits: number;
            register: string;
            root: string;
            statement: string;
            boundary: string;
        };
        dynamics: {
            computes: boolean;
            solutions: {
                implemented: boolean;
                implementedCount: number;
                solutions: {
                    receipt: string;
                    structure: string;
                    ran: string;
                    implemented: boolean;
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
            simulators: {
                homed: boolean;
                station: string;
                importsNothing: boolean;
                simulators: string[];
                spectrum: string;
                shared: string[];
                isAComputer: boolean;
                facets: {
                    receipt: string;
                    facet: string;
                    on: boolean;
                }[];
                root: string;
                statement: string;
                boundary: string;
            };
            classical: {
                homed: boolean;
                station: string;
                importsNothing: boolean;
                total: number;
                distribution: {
                    probabilistic: number;
                    dynamical: number;
                    network: number;
                    quantum: number;
                };
                primitives: string[];
                facets: {
                    receipt: string;
                    facet: string;
                    on: boolean;
                }[];
                root: string;
                statement: string;
                boundary: string;
            };
            domains: {
                homed: boolean;
                station: string;
                families: {
                    receipt: string;
                    family: string;
                    component: string;
                    domains: string[];
                    check: boolean;
                }[];
                components: string[];
                covered: number;
                deferred: string[];
                total: number;
                root: string;
                statement: string;
                boundary: string;
            };
            evolution: {
                computes: boolean;
                decoded: boolean;
                at: number;
                phaseIndex: number;
                phaseDigit: 1 | 2 | 4 | 8 | 7 | 5 | 3 | 6 | 9;
                mappings: ({
                    primitive: string;
                    measured: string;
                    entangled: boolean;
                    vortexDigit: 1 | 2 | 4 | 8 | 7 | 5 | 3 | 6 | 9;
                    receipt: string;
                    steps?: undefined;
                    stationary?: undefined;
                    phaseAligned?: undefined;
                    energy?: undefined;
                    stable?: undefined;
                    frames?: undefined;
                    phaseDigit?: undefined;
                } | {
                    primitive: string;
                    steps: number;
                    stationary: number[];
                    phaseAligned: boolean;
                    receipt: string;
                    measured?: undefined;
                    entangled?: undefined;
                    vortexDigit?: undefined;
                    energy?: undefined;
                    stable?: undefined;
                    frames?: undefined;
                    phaseDigit?: undefined;
                } | {
                    primitive: string;
                    energy: number;
                    stable: boolean;
                    receipt: string;
                    measured?: undefined;
                    entangled?: undefined;
                    vortexDigit?: undefined;
                    steps?: undefined;
                    stationary?: undefined;
                    phaseAligned?: undefined;
                    frames?: undefined;
                    phaseDigit?: undefined;
                } | {
                    primitive: string;
                    frames: number;
                    phaseDigit: 1 | 2 | 4 | 8 | 7 | 5 | 3 | 6 | 9;
                    receipt: string;
                    measured?: undefined;
                    entangled?: undefined;
                    vortexDigit?: undefined;
                    steps?: undefined;
                    stationary?: undefined;
                    phaseAligned?: undefined;
                    energy?: undefined;
                    stable?: undefined;
                })[];
                solutions: {
                    implemented: boolean;
                    implementedCount: number;
                    solutions: {
                        receipt: string;
                        structure: string;
                        ran: string;
                        implemented: boolean;
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
                qsim: {
                    simulated: boolean;
                    qubits: number;
                    size: number;
                    gates: string[];
                    states: {
                        basis: string;
                        re: number;
                        im: number;
                        prob: number;
                    }[];
                    measured: string;
                    normalized: boolean;
                    entangled: boolean;
                    root: string;
                    statement: string;
                    boundary: string;
                };
                tenD: {
                    tenDimensional: boolean;
                    entangled: boolean;
                    forms: number;
                    channels: number;
                    gestureTravel: boolean;
                    background: string;
                    root: string;
                    statement: string;
                    boundary: string;
                };
                markovTrail: number[][];
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
                        fwd: import("../../3/7").Rational[];
                        rev: import("../../3/7").Rational[];
                        fwdProduct: import("../../3/7").Rational;
                        revProduct: import("../../3/7").Rational;
                        heartApproach: import("../../3/7").Rational;
                        heartDepart: import("../../3/7").Rational;
                        heartDiamond: import("../../3/7").Rational;
                    };
                    presentations: {
                        coheres: boolean;
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
                definition: string;
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
                mappings: __ns_up_dynamics.QuantumDynamicsMapping[];
                solutions: {
                    implemented: boolean;
                    implementedCount: number;
                    solutions: {
                        receipt: string;
                        structure: string;
                        ran: string;
                        implemented: boolean;
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
                simulators: {
                    homed: boolean;
                    station: string;
                    importsNothing: boolean;
                    simulators: string[];
                    spectrum: string;
                    shared: string[];
                    isAComputer: boolean;
                    facets: {
                        receipt: string;
                        facet: string;
                        on: boolean;
                    }[];
                    root: string;
                    statement: string;
                    boundary: string;
                };
                classical: {
                    homed: boolean;
                    station: string;
                    importsNothing: boolean;
                    total: number;
                    distribution: {
                        probabilistic: number;
                        dynamical: number;
                        network: number;
                        quantum: number;
                    };
                    primitives: string[];
                    facets: {
                        receipt: string;
                        facet: string;
                        on: boolean;
                    }[];
                    root: string;
                    statement: string;
                    boundary: string;
                };
                domains: {
                    homed: boolean;
                    station: string;
                    families: {
                        receipt: string;
                        family: string;
                        component: string;
                        domains: string[];
                        check: boolean;
                    }[];
                    components: string[];
                    covered: number;
                    deferred: string[];
                    total: number;
                    root: string;
                    statement: string;
                    boundary: string;
                };
                qsim: {
                    simulated: boolean;
                    qubits: number;
                    size: number;
                    gates: string[];
                    states: {
                        basis: string;
                        re: number;
                        im: number;
                        prob: number;
                    }[];
                    measured: string;
                    normalized: boolean;
                    entangled: boolean;
                    root: string;
                    statement: string;
                    boundary: string;
                };
                tsirelson: number;
                count: number;
                root: string;
                statement: string;
                boundary: string;
            };
            simulation: __ns_up_dynamics.QuantumDynamicsSimulationPaint;
            vortexPlasma: {
                computes: boolean;
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
        trading: {
            computes: boolean;
            strategies: {
                strategy: string;
                n: number;
                result: __ns_up_heaven_mind.BacktestResult;
                benchmark: __ns_up_heaven_mind.BacktestResult;
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
    rows: {
        domain: string;
        home: string;
        dim: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
