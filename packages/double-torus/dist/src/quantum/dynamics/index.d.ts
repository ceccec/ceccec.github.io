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
