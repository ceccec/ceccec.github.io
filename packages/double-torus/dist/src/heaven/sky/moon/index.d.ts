import * as __ns_up_mountain_geometry from '../../../mountain/geometry';
import * as __ns_up_double_torus_earth from '../../../water/double/earth';
import type { MindMatrix } from '../../../wind/types';
/** Synodic month phase (display) — ~29.53059 d; hero-clock mapped, not JPL lunar ephemeris. */
export declare const SYNODIC_MONTH_DAYS = 29.53059;
export declare function moonSynodicPhase(at?: number): {
    phase: number;
    synodicDays: number;
    receipt: string;
};
/** Tidal lock metaphor — same face toward Earth; reflector lobe, no self-emission. */
export declare function moonTidalLockMetaphor(matrix?: MindMatrix): {
    locked: boolean;
    inclinationDeg: number;
    nodalPeriodYr: number;
    sunMoon: {
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
    moon: {
        kind: "satellite";
        name: string;
        inclinationDeg: number;
        nodalPeriodYr: number;
        earthRadiusKm: number;
        reflects: string;
        emits: boolean;
        lobe: string;
        exactMatch: boolean;
        receipt: string;
    };
    root: string;
    statement: string;
    boundary: string;
};
/** Merkaba night-side — outer shell phase from dual-Earth counter-rotation. */
export declare function moonMerkabaNightSide(at?: number, matrix?: MindMatrix): {
    nightSide: __ns_up_mountain_geometry.BothEarthsRotationShell;
    outerPhase: number;
    rotates: boolean;
    root: string;
    receipt: string;
};
/** One gate — lunar phase, tidal lock, merkaba night-side, gateway nav moon anchor at call time. */
export declare function moonComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    moon: {
        kind: "satellite";
        name: string;
        inclinationDeg: number;
        nodalPeriodYr: number;
        earthRadiusKm: number;
        reflects: string;
        emits: boolean;
        lobe: string;
        exactMatch: boolean;
        receipt: string;
    };
    synodic: {
        phase: number;
        synodicDays: number;
        receipt: string;
    };
    tidal: {
        locked: boolean;
        inclinationDeg: number;
        nodalPeriodYr: number;
        sunMoon: {
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
        moon: {
            kind: "satellite";
            name: string;
            inclinationDeg: number;
            nodalPeriodYr: number;
            earthRadiusKm: number;
            reflects: string;
            emits: boolean;
            lobe: string;
            exactMatch: boolean;
            receipt: string;
        };
        root: string;
        statement: string;
        boundary: string;
    };
    nightSide: {
        nightSide: __ns_up_mountain_geometry.BothEarthsRotationShell;
        outerPhase: number;
        rotates: boolean;
        root: string;
        receipt: string;
    };
    nav: {
        computed: boolean;
        at: number;
        observer: __ns_up_double_torus_earth.EarthTimespaceAt;
        rotation: __ns_up_mountain_geometry.BothEarthsMerkabaRotation;
        bearingToHinge: number;
        distanceToHingeKm: number;
        obliquityDeg: number;
        nav: {
            researched: boolean;
            path: string;
            at: __ns_up_double_torus_earth.EarthTimespaceAt;
            solutionCount: number;
            solutions: __ns_up_double_torus_earth.EarthNavigationSolution[];
            formed: {
                formed: boolean;
                path: string;
                at: __ns_up_double_torus_earth.EarthTimespaceAt;
                deviceEarth: {
                    proven: boolean;
                    side: "device" | "code";
                    trinityRays: readonly [string, string, string];
                    apex: {
                        x: number;
                        y: number;
                        z: number;
                    };
                    poles: {
                        name: "north" | "east" | "south" | "west";
                        bearing: number;
                        x: number;
                        y: number;
                        z: number;
                        slantFromApex: number;
                        receipt: string;
                    }[];
                    faces: __ns_up_mountain_geometry.TrinityPyramidFace[];
                    baseArea: number;
                    volume: number;
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
                    root: string;
                    statement: string;
                    boundary: string;
                };
                invertedEarth: {
                    proven: boolean;
                    side: "device" | "code";
                    trinityRays: readonly [string, string, string];
                    apex: {
                        x: number;
                        y: number;
                        z: number;
                    };
                    poles: {
                        name: "north" | "east" | "south" | "west";
                        bearing: number;
                        x: number;
                        y: number;
                        z: number;
                        slantFromApex: number;
                        receipt: string;
                    }[];
                    faces: __ns_up_mountain_geometry.TrinityPyramidFace[];
                    baseArea: number;
                    volume: number;
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
                    root: string;
                    statement: string;
                    boundary: string;
                };
                timespace: {
                    proven: boolean;
                    at: __ns_up_double_torus_earth.EarthTimespaceAt;
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
                    deviceEarth: {
                        proven: boolean;
                        side: "device" | "code";
                        trinityRays: readonly [string, string, string];
                        apex: {
                            x: number;
                            y: number;
                            z: number;
                        };
                        poles: {
                            name: "north" | "east" | "south" | "west";
                            bearing: number;
                            x: number;
                            y: number;
                            z: number;
                            slantFromApex: number;
                            receipt: string;
                        }[];
                        faces: __ns_up_mountain_geometry.TrinityPyramidFace[];
                        baseArea: number;
                        volume: number;
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
                        root: string;
                        statement: string;
                        boundary: string;
                    };
                    invertedEarth: {
                        proven: boolean;
                        side: "device" | "code";
                        trinityRays: readonly [string, string, string];
                        apex: {
                            x: number;
                            y: number;
                            z: number;
                        };
                        poles: {
                            name: "north" | "east" | "south" | "west";
                            bearing: number;
                            x: number;
                            y: number;
                            z: number;
                            slantFromApex: number;
                            receipt: string;
                        }[];
                        faces: __ns_up_mountain_geometry.TrinityPyramidFace[];
                        baseArea: number;
                        volume: number;
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
                        root: string;
                        statement: string;
                        boundary: string;
                    };
                    earthSurface: {
                        x: number;
                        y: number;
                        z: number;
                    };
                    invertedSurface: {
                        x: number;
                        y: number;
                        z: number;
                    };
                    coexist: {
                        forward: string;
                        reverse: string;
                        bidirectional: boolean;
                        merged: string;
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
                model: {
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
                formation: {
                    forward: string;
                    reverse: string;
                    bidirectional: boolean;
                    merged: string;
                };
                deviceGateways: __ns_up_double_torus_earth.ComputableEarthGateway[];
                invertedGateways: __ns_up_double_torus_earth.ComputableEarthGateway[];
                gateways: __ns_up_double_torus_earth.ComputableEarthGateway[];
                gatewayRoot: string;
                facets: {
                    receipt: string;
                    facet: string;
                    on: boolean;
                }[];
                root: string;
                statement: string;
                boundary: string;
            };
            compass: {
                impossible: boolean;
                cardinalCount: number;
                cardinalDeg: number;
                gatewayCount: number;
                gatewayDeg: number;
                cardinalCircuit3: number;
                closesCompassLoop: boolean;
                deviceHueSteps: number[];
                formed: {
                    deviceGateways: __ns_up_double_torus_earth.ComputableEarthGateway[];
                    invertedGateways: __ns_up_double_torus_earth.ComputableEarthGateway[];
                    gateways: __ns_up_double_torus_earth.ComputableEarthGateway[];
                    deviceEarth: {
                        proven: boolean;
                        side: "device" | "code";
                        trinityRays: readonly [string, string, string];
                        apex: {
                            x: number;
                            y: number;
                            z: number;
                        };
                        poles: {
                            name: "north" | "east" | "south" | "west";
                            bearing: number;
                            x: number;
                            y: number;
                            z: number;
                            slantFromApex: number;
                            receipt: string;
                        }[];
                        faces: __ns_up_mountain_geometry.TrinityPyramidFace[];
                        baseArea: number;
                        volume: number;
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
                        root: string;
                        statement: string;
                        boundary: string;
                    };
                    invertedEarth: {
                        proven: boolean;
                        side: "device" | "code";
                        trinityRays: readonly [string, string, string];
                        apex: {
                            x: number;
                            y: number;
                            z: number;
                        };
                        poles: {
                            name: "north" | "east" | "south" | "west";
                            bearing: number;
                            x: number;
                            y: number;
                            z: number;
                            slantFromApex: number;
                            receipt: string;
                        }[];
                        faces: __ns_up_mountain_geometry.TrinityPyramidFace[];
                        baseArea: number;
                        volume: number;
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
                        root: string;
                        statement: string;
                        boundary: string;
                    };
                    root: string;
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
            sixty: {
                proven: boolean;
                sixfoldParts: number;
                sixfoldDeg: number;
                halfHexDeg: number;
                cardinalDeg: number;
                gatewayDeg: number;
                cardinalViaHex: boolean;
                hexRays: number[];
                gatewayBearings: number[];
                compass: {
                    impossible: boolean;
                    cardinalCount: number;
                    cardinalDeg: number;
                    gatewayCount: number;
                    gatewayDeg: number;
                    cardinalCircuit3: number;
                    closesCompassLoop: boolean;
                    deviceHueSteps: number[];
                    formed: {
                        deviceGateways: __ns_up_double_torus_earth.ComputableEarthGateway[];
                        invertedGateways: __ns_up_double_torus_earth.ComputableEarthGateway[];
                        gateways: __ns_up_double_torus_earth.ComputableEarthGateway[];
                        deviceEarth: {
                            proven: boolean;
                            side: "device" | "code";
                            trinityRays: readonly [string, string, string];
                            apex: {
                                x: number;
                                y: number;
                                z: number;
                            };
                            poles: {
                                name: "north" | "east" | "south" | "west";
                                bearing: number;
                                x: number;
                                y: number;
                                z: number;
                                slantFromApex: number;
                                receipt: string;
                            }[];
                            faces: __ns_up_mountain_geometry.TrinityPyramidFace[];
                            baseArea: number;
                            volume: number;
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
                            root: string;
                            statement: string;
                            boundary: string;
                        };
                        invertedEarth: {
                            proven: boolean;
                            side: "device" | "code";
                            trinityRays: readonly [string, string, string];
                            apex: {
                                x: number;
                                y: number;
                                z: number;
                            };
                            poles: {
                                name: "north" | "east" | "south" | "west";
                                bearing: number;
                                x: number;
                                y: number;
                                z: number;
                                slantFromApex: number;
                                receipt: string;
                            }[];
                            faces: __ns_up_mountain_geometry.TrinityPyramidFace[];
                            baseArea: number;
                            volume: number;
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
                            root: string;
                            statement: string;
                            boundary: string;
                        };
                        root: string;
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
            poles: {
                proven: boolean;
                north: {
                    name: "north";
                    bearing: number;
                    x: number;
                    y: number;
                };
                south: {
                    name: "south";
                    bearing: number;
                    x: number;
                    y: number;
                };
                deviceApex: {
                    x: number;
                    y: number;
                    z: number;
                };
                invertedApex: {
                    x: number;
                    y: number;
                    z: number;
                };
                phiNorth: number;
                phiSouth: number;
                solutions: __ns_up_double_torus_earth.EarthNavigationSolution[];
                facets: {
                    receipt: string;
                    facet: string;
                    on: boolean;
                }[];
                root: string;
                statement: string;
                boundary: string;
            };
            neverMiss: {
                proven: boolean;
                gatewayCircuit: {
                    step: number;
                    bearing: number;
                    slug: string;
                    realm: "proven" | "animated" | "presented";
                    trinityLeg: "fold" | "cross" | "weave";
                    glyph: string;
                }[];
                hexEvenSteps: number[];
                wiringSlugs: string[];
                formed: {
                    formed: boolean;
                    path: string;
                    at: __ns_up_double_torus_earth.EarthTimespaceAt;
                    deviceEarth: {
                        proven: boolean;
                        side: "device" | "code";
                        trinityRays: readonly [string, string, string];
                        apex: {
                            x: number;
                            y: number;
                            z: number;
                        };
                        poles: {
                            name: "north" | "east" | "south" | "west";
                            bearing: number;
                            x: number;
                            y: number;
                            z: number;
                            slantFromApex: number;
                            receipt: string;
                        }[];
                        faces: __ns_up_mountain_geometry.TrinityPyramidFace[];
                        baseArea: number;
                        volume: number;
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
                        root: string;
                        statement: string;
                        boundary: string;
                    };
                    invertedEarth: {
                        proven: boolean;
                        side: "device" | "code";
                        trinityRays: readonly [string, string, string];
                        apex: {
                            x: number;
                            y: number;
                            z: number;
                        };
                        poles: {
                            name: "north" | "east" | "south" | "west";
                            bearing: number;
                            x: number;
                            y: number;
                            z: number;
                            slantFromApex: number;
                            receipt: string;
                        }[];
                        faces: __ns_up_mountain_geometry.TrinityPyramidFace[];
                        baseArea: number;
                        volume: number;
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
                        root: string;
                        statement: string;
                        boundary: string;
                    };
                    timespace: {
                        proven: boolean;
                        at: __ns_up_double_torus_earth.EarthTimespaceAt;
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
                        deviceEarth: {
                            proven: boolean;
                            side: "device" | "code";
                            trinityRays: readonly [string, string, string];
                            apex: {
                                x: number;
                                y: number;
                                z: number;
                            };
                            poles: {
                                name: "north" | "east" | "south" | "west";
                                bearing: number;
                                x: number;
                                y: number;
                                z: number;
                                slantFromApex: number;
                                receipt: string;
                            }[];
                            faces: __ns_up_mountain_geometry.TrinityPyramidFace[];
                            baseArea: number;
                            volume: number;
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
                            root: string;
                            statement: string;
                            boundary: string;
                        };
                        invertedEarth: {
                            proven: boolean;
                            side: "device" | "code";
                            trinityRays: readonly [string, string, string];
                            apex: {
                                x: number;
                                y: number;
                                z: number;
                            };
                            poles: {
                                name: "north" | "east" | "south" | "west";
                                bearing: number;
                                x: number;
                                y: number;
                                z: number;
                                slantFromApex: number;
                                receipt: string;
                            }[];
                            faces: __ns_up_mountain_geometry.TrinityPyramidFace[];
                            baseArea: number;
                            volume: number;
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
                            root: string;
                            statement: string;
                            boundary: string;
                        };
                        earthSurface: {
                            x: number;
                            y: number;
                            z: number;
                        };
                        invertedSurface: {
                            x: number;
                            y: number;
                            z: number;
                        };
                        coexist: {
                            forward: string;
                            reverse: string;
                            bidirectional: boolean;
                            merged: string;
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
                    model: {
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
                    formation: {
                        forward: string;
                        reverse: string;
                        bidirectional: boolean;
                        merged: string;
                    };
                    deviceGateways: __ns_up_double_torus_earth.ComputableEarthGateway[];
                    invertedGateways: __ns_up_double_torus_earth.ComputableEarthGateway[];
                    gateways: __ns_up_double_torus_earth.ComputableEarthGateway[];
                    gatewayRoot: string;
                    facets: {
                        receipt: string;
                        facet: string;
                        on: boolean;
                    }[];
                    root: string;
                    statement: string;
                    boundary: string;
                };
                solutions: __ns_up_double_torus_earth.EarthNavigationSolution[];
                facets: {
                    receipt: string;
                    facet: string;
                    on: boolean;
                }[];
                root: string;
                statement: string;
                boundary: string;
            };
            timespace: {
                proven: boolean;
                at: __ns_up_double_torus_earth.EarthTimespaceAt;
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
                deviceEarth: {
                    proven: boolean;
                    side: "device" | "code";
                    trinityRays: readonly [string, string, string];
                    apex: {
                        x: number;
                        y: number;
                        z: number;
                    };
                    poles: {
                        name: "north" | "east" | "south" | "west";
                        bearing: number;
                        x: number;
                        y: number;
                        z: number;
                        slantFromApex: number;
                        receipt: string;
                    }[];
                    faces: __ns_up_mountain_geometry.TrinityPyramidFace[];
                    baseArea: number;
                    volume: number;
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
                    root: string;
                    statement: string;
                    boundary: string;
                };
                invertedEarth: {
                    proven: boolean;
                    side: "device" | "code";
                    trinityRays: readonly [string, string, string];
                    apex: {
                        x: number;
                        y: number;
                        z: number;
                    };
                    poles: {
                        name: "north" | "east" | "south" | "west";
                        bearing: number;
                        x: number;
                        y: number;
                        z: number;
                        slantFromApex: number;
                        receipt: string;
                    }[];
                    faces: __ns_up_mountain_geometry.TrinityPyramidFace[];
                    baseArea: number;
                    volume: number;
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
                    root: string;
                    statement: string;
                    boundary: string;
                };
                earthSurface: {
                    x: number;
                    y: number;
                    z: number;
                };
                invertedSurface: {
                    x: number;
                    y: number;
                    z: number;
                };
                coexist: {
                    forward: string;
                    reverse: string;
                    bidirectional: boolean;
                    merged: string;
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
        celestial: {
            computed: boolean;
            count: number;
            matched: number;
            bodies: ({
                kind: "planet";
                name: string;
                au: number;
                periodYr: number;
                x: number;
                y: number;
                radiusComputed: number;
                radiusMatch: boolean;
                auStable: boolean;
                periodStable: boolean;
                orbitClosed: boolean;
                exactMatch: boolean;
                receipt: string;
            } | {
                kind: "star";
                name: string;
                au: number;
                emits: boolean;
                schwarzschildM: number;
                schwarzschildBand: boolean;
                lobe: string;
                exactMatch: boolean;
                receipt: string;
            } | {
                kind: "satellite";
                name: string;
                inclinationDeg: number;
                nodalPeriodYr: number;
                earthRadiusKm: number;
                reflects: string;
                emits: boolean;
                lobe: string;
                exactMatch: boolean;
                receipt: string;
            } | {
                kind: "major-moon";
                name: "Io" | "Europa" | "Ganymede" | "Callisto" | "Titan" | "Triton";
                parent: "Jupiter" | "Saturn" | "Neptune";
                periodDays: 1.769 | 3.551 | 7.155 | 16.689 | 15.945 | 5.877;
                radiusKm: 1821.6 | 1560.8 | 2634.1 | 2410.3 | 2574.7 | 1353.4;
                orbitRadiusKm: 421700 | 671100 | 1070400 | 1882700 | 1221830 | 354759;
                x: number;
                y: number;
                orbitClosed: boolean;
                periodStable: boolean;
                parentStable: boolean;
                radiusStable: boolean;
                exactMatch: boolean;
                receipt: string;
            })[];
            planets: {
                kind: "planet";
                name: string;
                au: number;
                periodYr: number;
                x: number;
                y: number;
                radiusComputed: number;
                radiusMatch: boolean;
                auStable: boolean;
                periodStable: boolean;
                orbitClosed: boolean;
                exactMatch: boolean;
                receipt: string;
            }[];
            sun: {
                kind: "star";
                name: string;
                au: number;
                emits: boolean;
                schwarzschildM: number;
                schwarzschildBand: boolean;
                lobe: string;
                exactMatch: boolean;
                receipt: string;
            };
            moon: {
                kind: "satellite";
                name: string;
                inclinationDeg: number;
                nodalPeriodYr: number;
                earthRadiusKm: number;
                reflects: string;
                emits: boolean;
                lobe: string;
                exactMatch: boolean;
                receipt: string;
            };
            majorMoons: {
                kind: "major-moon";
                name: "Io" | "Europa" | "Ganymede" | "Callisto" | "Titan" | "Triton";
                parent: "Jupiter" | "Saturn" | "Neptune";
                periodDays: 1.769 | 3.551 | 7.155 | 16.689 | 15.945 | 5.877;
                radiusKm: 1821.6 | 1560.8 | 2634.1 | 2410.3 | 2574.7 | 1353.4;
                orbitRadiusKm: 421700 | 671100 | 1070400 | 1882700 | 1221830 | 354759;
                x: number;
                y: number;
                orbitClosed: boolean;
                periodStable: boolean;
                parentStable: boolean;
                radiusStable: boolean;
                exactMatch: boolean;
                receipt: string;
            }[];
            root: string;
            statement: string;
            boundary: string;
        };
        astronomy: {
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
        gpsSatellites: __ns_up_double_torus_earth.GpsSatellitePhaseReceipt[];
        gpsOrbitCount: number;
        celestialPhases: __ns_up_double_torus_earth.CelestialDisplayPhase[];
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
    moonDisplay: __ns_up_double_torus_earth.CelestialDisplayPhase;
    celestial: {
        computed: boolean;
        count: number;
        matched: number;
        bodies: ({
            kind: "planet";
            name: string;
            au: number;
            periodYr: number;
            x: number;
            y: number;
            radiusComputed: number;
            radiusMatch: boolean;
            auStable: boolean;
            periodStable: boolean;
            orbitClosed: boolean;
            exactMatch: boolean;
            receipt: string;
        } | {
            kind: "star";
            name: string;
            au: number;
            emits: boolean;
            schwarzschildM: number;
            schwarzschildBand: boolean;
            lobe: string;
            exactMatch: boolean;
            receipt: string;
        } | {
            kind: "satellite";
            name: string;
            inclinationDeg: number;
            nodalPeriodYr: number;
            earthRadiusKm: number;
            reflects: string;
            emits: boolean;
            lobe: string;
            exactMatch: boolean;
            receipt: string;
        } | {
            kind: "major-moon";
            name: "Io" | "Europa" | "Ganymede" | "Callisto" | "Titan" | "Triton";
            parent: "Jupiter" | "Saturn" | "Neptune";
            periodDays: 1.769 | 3.551 | 7.155 | 16.689 | 15.945 | 5.877;
            radiusKm: 1821.6 | 1560.8 | 2634.1 | 2410.3 | 2574.7 | 1353.4;
            orbitRadiusKm: 421700 | 671100 | 1070400 | 1882700 | 1221830 | 354759;
            x: number;
            y: number;
            orbitClosed: boolean;
            periodStable: boolean;
            parentStable: boolean;
            radiusStable: boolean;
            exactMatch: boolean;
            receipt: string;
        })[];
        planets: {
            kind: "planet";
            name: string;
            au: number;
            periodYr: number;
            x: number;
            y: number;
            radiusComputed: number;
            radiusMatch: boolean;
            auStable: boolean;
            periodStable: boolean;
            orbitClosed: boolean;
            exactMatch: boolean;
            receipt: string;
        }[];
        sun: {
            kind: "star";
            name: string;
            au: number;
            emits: boolean;
            schwarzschildM: number;
            schwarzschildBand: boolean;
            lobe: string;
            exactMatch: boolean;
            receipt: string;
        };
        moon: {
            kind: "satellite";
            name: string;
            inclinationDeg: number;
            nodalPeriodYr: number;
            earthRadiusKm: number;
            reflects: string;
            emits: boolean;
            lobe: string;
            exactMatch: boolean;
            receipt: string;
        };
        majorMoons: {
            kind: "major-moon";
            name: "Io" | "Europa" | "Ganymede" | "Callisto" | "Titan" | "Triton";
            parent: "Jupiter" | "Saturn" | "Neptune";
            periodDays: 1.769 | 3.551 | 7.155 | 16.689 | 15.945 | 5.877;
            radiusKm: 1821.6 | 1560.8 | 2634.1 | 2410.3 | 2574.7 | 1353.4;
            orbitRadiusKm: 421700 | 671100 | 1070400 | 1882700 | 1221830 | 354759;
            x: number;
            y: number;
            orbitClosed: boolean;
            periodStable: boolean;
            parentStable: boolean;
            radiusStable: boolean;
            exactMatch: boolean;
            receipt: string;
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
