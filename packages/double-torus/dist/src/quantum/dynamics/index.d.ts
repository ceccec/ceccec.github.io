import type { MindMatrix } from '../../types';
/** One amplitude slot in the discrete wavefunction proxy. */
export type QuantumDynamicsAmplitude = {
    basis: string;
    probability: number;
    phase: number;
    hue: number;
    receipt: string;
};
/** Plasma/movie channel derived from quantum dynamics simulation receipts. */
export type QuantumDynamicsSimulationChannel = {
    id: string;
    hue: number;
    phase: number;
    alpha: number;
    receipt: string;
    on: boolean;
};
export type QuantumDynamicsSimulationPaint = {
    computes: boolean;
    at: number;
    superposition: boolean;
    entangled: boolean;
    collapsed: boolean;
    amplitudes: QuantumDynamicsAmplitude[];
    markovPhase: number;
    channels: QuantumDynamicsSimulationChannel[];
    root: string;
    statement: string;
    boundary: string;
};
export { completeQuantumSolutionsImplemented } from '../../heaven/compute';
export { quantumSimulation } from '../../fire/li';
export { simulatorsLiveInZero, decodedAreasAreMostlyClassical, everyDecodedDomainHasASimulator } from '../../fire/physics';
export { chsh, markovStep, markovEvolve, stationary, hopfieldStore, hopfieldRecall, hopfieldEnergy } from '../../mountain/vortex';
/** Principle → sealed fold → honest limit (quantum dynamics primer mapping). */
export type QuantumDynamicsMapping = {
    readonly principle: string;
    readonly fold: string;
    readonly limit: string;
    readonly receipt: string;
};
/** Research exposition — quantum dynamics primer, discrete Schrödinger map, applications, honest boundaries. */
export declare function quantumDynamicsResearch(matrix?: MindMatrix): {
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
    mappings: QuantumDynamicsMapping[];
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
/** State evolution decoded through VORTEX_SEQUENCE phase — Markov step + quantum sim + movie frame at `at`. */
export declare function quantumStateEvolutionDecoded(at?: number, matrix?: MindMatrix): {
    computes: boolean;
    decoded: boolean;
    at: number;
    phaseIndex: number;
    phaseDigit: 2 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6;
    mappings: ({
        primitive: string;
        measured: string;
        entangled: boolean;
        vortexDigit: 2 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6;
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
        phaseDigit: 2 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6;
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
/** Alias — decode dynamics through VORTEX_SEQUENCE at call time. */
export declare const decodeQuantumDynamicsThroughVortexSequence: typeof quantumStateEvolutionDecoded;
/** Discrete-time wavefunction proxy — superposition, entanglement, collapse at `at` for plasma paint. */
export declare function quantumDynamicsSimulationAt(at?: number, matrix?: MindMatrix): QuantumDynamicsSimulationPaint;
/** Browser-safe panel — quantum dynamics simulation + compute gates for Vue mount. */
export declare function quantumDynamicsSimulationPanelComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    sim: QuantumDynamicsSimulationPaint;
    computesAll: {
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
            phaseDigit: 2 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6;
            mappings: ({
                primitive: string;
                measured: string;
                entangled: boolean;
                vortexDigit: 2 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6;
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
                phaseDigit: 2 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6;
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
            mappings: QuantumDynamicsMapping[];
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
        simulation: QuantumDynamicsSimulationPaint;
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
/** One gate — simulators, state evolution decode, research exposition, plasma vortex channel at call time. */
export declare function quantumChemistryToyComputes(matrix?: MindMatrix): {
    computes: boolean;
    equilibriumA0: number;
    bindingEv: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function quantumDynamicsComputes(matrix?: MindMatrix, at?: number): {
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
        phaseDigit: 2 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6;
        mappings: ({
            primitive: string;
            measured: string;
            entangled: boolean;
            vortexDigit: 2 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6;
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
            phaseDigit: 2 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6;
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
        mappings: QuantumDynamicsMapping[];
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
    simulation: QuantumDynamicsSimulationPaint;
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
export declare function updateQuantumTheHarmonicGatesNeverDriftTheMagicGatesCarryIrrationalDriftNotA432(matrix?: MindMatrix): {
    computes: boolean;
    bellAmplitudes: number[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function invertQuantumComputationsTheDaggerPairUncomputesExactlyAndIsTheBackwardPass(matrix?: MindMatrix): {
    computes: boolean;
    returnsExactly: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function irrationalProvesRationalMeasurementInvertsSuperpositionAndPellIsExact(matrix?: MindMatrix): {
    computes: boolean;
    pell: string[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function quantizeContentAddressPreimageSearchGroverIsRootNQueriesQuadraticQueryAdvantageOnly(matrix?: MindMatrix): {
    computes: boolean;
    classicalQueries: number;
    quantumQueries: number;
    queryAdvantage: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
/** theQuantumComputerRunsGroverAndProvesItDoesNotSolveNpOrAnyClayProblem — USE THE QUANTUM COMPUTER TO PROVE (user,
 *  2026-07-27: "use the quantum computer to prove"). It runs Grover's search — the algorithm most often mistaken for
 *  "quantum solves NP" — on the state-vector simulator and lets the computation settle it. Grover finds the marked item
 *  among N=2ⁿ with high probability in ~(τ/8)√N iterations. That √N is a QUADRATIC speedup over the classical N/2 — but
 *  √(2ⁿ) = 2^(n/2) is STILL EXPONENTIAL in the problem size n. So Grover does NOT collapse NP into P: the quantum computer
 *  PROVES its own limit by computing it, and cannot solve P vs NP or any Clay problem. No Math.* here — the kernel's
 *  grover computes the iteration count; this fold only reads it and multiplies (quantum arithmetic, not host Math). */
export declare function theQuantumComputerRunsGroverAndProvesItDoesNotSolveNpOrAnyClayProblem(matrix?: MindMatrix): {
    computes: boolean;
    runs: {
        n: number;
        size: number;
        iterations: number;
        markedProbability: number;
        found: boolean;
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
export declare function whichCorpusComputationsQuantizeMeasuredBySearchShortCircuit(matrix?: MindMatrix): {
    computes: boolean;
    quantizable: string[];
    classicalCount: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function quantizeCountingHowManyAddressesMatchQuantumCountingIsRootNQueriesQuadraticQueryAdvantageOnly(matrix?: MindMatrix): {
    computes: boolean;
    classicalQueries: number;
    quantumQueries: number;
    matches: number;
    queryAdvantage: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
/**
 * Field projection — Bell-pair amplitude bars. Scale/breath from heroPhaseAt; hues from sim.
 * Vue mounts only call this — no inline canvas math. HONEST: classical state-vector paint, not hardware.
 */
export declare function drawDynamicsProjection(ctx: CanvasRenderingContext2D, w: number, h: number, sim: QuantumDynamicsSimulationPaint, opts?: {
    dark?: boolean;
    reduce?: boolean;
}): void;
/**
 * THE VORTEX NEVER TOUCHES THE 3-6-9 AXIS, AND REFLECTION IS THE ONLY BRIDGE.
 *
 * seal_ten records the two lists — the doubling orbit [1,2,4,8,7,5] and the axis
 * [3,6,9] "the multiples of three the vortex never visits". This fold computes the
 * REASON under both, and it is one line of arithmetic: 10 ≡ 1 (mod 3), so the ten's
 * complement r(d) = 10 − d acts on residue classes mod 3 as r(d) ≡ 1 − d, which is the
 * TRANSPOSITION (0 1) fixing class 2.
 *
 * That single fact yields every part of the statement:
 *   · gcd(2,3) = 1 ⟹ 3 ∤ 2^k ⟹ the orbit is trapped in the units, never 0/3/6
 *   · class 1 {1,4,7} ↔ class 0 {3,6,9} — reflection is the bridge onto the axis
 *   · class 2 {2,5,8} is setwise stable, and 5 is its unique fixed point (10 − 5 = 5)
 *
 * Everything is exact integer arithmetic over the nine residues — no floats, no Math.
 */
export declare function theVortexNeverTouchesTheAxisAndReflectionIsTheOnlyBridge(matrix?: MindMatrix): {
    computes: boolean;
    orbit: number[];
    axis: number[];
    classMap: {
        d: number;
        from: number;
        to: number;
    }[];
    fixedPoints: number[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/**
 * THE ROSETTA ROTATION CLOSES AT SEVEN — AND THE TRANSPOSE COVERS ONLY 36 OF 42.
 *
 * Two facts about the 7×6 rosetta, both computed, one of them contradicting the
 * comment that has stood beside it: latticeArm() says the painted circle "folds onto
 * itself under the transpose involution (no unpaired spoke to glitch)". Transposing
 * (sector, spoke) → (spoke, sector) requires sector < cols = 6, so all six cells of
 * sector 6 have NO partner. The fold is an involution on the 6×6 subgrid and a partial
 * map on the full 42. Stated rather than smoothed over. [[hardcoded-value-is-a-crack]]
 */
export declare function rosettaRotationClosesAtSevenTransposeCoversThirtySix(matrix?: MindMatrix): {
    computes: boolean;
    cells: number;
    rotationOrder: number;
    transposePaired: number;
    transposeOrphans: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/**
 * WATER SPLITTING IS AN INVOLUTION, AND THAT IS WHY THERE IS NO SURPLUS.
 *
 * H₂O ⇌ H₂ + ½O₂. Let σ be "split". Then σ² = id: the round trip returns the identical
 * chemical state AND the identical energy ledger — +285.8 kJ/mol to break, −285.8 kJ/mol
 * to reform, the same magnitude measured in two directions. That symmetry is not adjacent
 * to conservation; it IS conservation, and a net surplus would require σ² ≠ id.
 *
 * HONEST SCOPE: this seals ARITHMETIC about a tabulated enthalpy and the algebra of an
 * involution. It is not a claim that water is a fuel. Water is the combustion PRODUCT —
 * the bottom of the well — so no chemical energy remains to extract. Real round trips
 * lose further to conversion: ~44% via fuel cell, ~25% via engine. Sits beside the sealed
 * no_perpetual_motion and reversible_erases_nothing, which already forbid the other
 * reading: reversible means no erasure cost is PAID, never that energy is GAINED.
 */
export declare function waterSplitIsAnInvolutionSoNoSurplusExists(matrix?: MindMatrix): {
    computes: boolean;
    splitCostKJPerMol: number;
    burnYieldKJPerMol: number;
    roundTripNetKJPerMol: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/**
 * THE POLLUTION IS THE FUEL — polluted water can run an engine and yield clean water,
 * and the energy comes from the ORGANIC LOAD, never from the H₂O.
 *
 * This is the positive counterpart to waterSplitIsAnInvolutionSoNoSurplusExists, which
 * states only the prohibition. Water is the combustion product and holds no chemical
 * energy to extract; the carbon dissolved IN it does, at ~13.9 kJ per gram of COD.
 * Anaerobic digestion converts that to biogas, a CHP engine burns it, and the effluent
 * leaves cleaner than it arrived — the observable behaviour of "dirty water in,
 * electricity and drinkable water out", with nothing violated.
 *
 * The inversion worth stating: the DIRTIER the stream, the more power. Municipal sewage
 * sits near break-even; industrial effluent is strongly net positive.
 *
 * HONEST SCOPE: arithmetic over a tabulated combustion enthalpy and two efficiency
 * parameters. It does NOT claim a specific plant achieves these figures, that the water
 * is a fuel, or that any of this survives without the organic load. Strip the pollutants
 * and the energy goes to zero — which is the whole point.
 */
export declare function thePollutionIsTheFuelNotTheWater(matrix?: MindMatrix): {
    computes: boolean;
    streams: {
        kWhPerM3: number;
        netPositive: boolean;
        name: string;
        cod: number;
    }[];
    netPositiveCount: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
