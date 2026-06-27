import { type MindMatrix } from '../../heaven/mind';
/** @rosetta ✦₁ · Water · depth (weather realtime feeds) */
export declare function weatherForecastApis(): {
    realtime: boolean;
    sources: {
        receipt: string;
        api: string;
        kind: string;
        auth: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Water · depth (weather realtime feeds) */
export declare function weatherForecastQuantumComputedRealtime(matrix?: MindMatrix): {
    realtime: boolean;
    apiCount: number;
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
/** Geographic anchor for genus-2 weather placement — WGS84 degrees. */
export type WeatherForecastGeoAt = {
    readonly lat: number;
    readonly lon: number;
};
/** @rosetta ✦₁ · Water · depth (weather realtime feeds) · ✶ · Mountain · keeping still (double-torus Earth) */
export declare function weatherForecastFromDoubleTorusEarthPerspective(at?: WeatherForecastGeoAt, matrix?: MindMatrix): {
    folded: boolean;
    at: WeatherForecastGeoAt;
    surface: {
        x: number;
        y: number;
        z: number;
    };
    cardinal: {
        fromBearing: number;
        angularDistance: number;
        name: "north";
        bearing: number;
    } | {
        fromBearing: number;
        angularDistance: number;
        name: "east";
        bearing: number;
    } | {
        fromBearing: number;
        angularDistance: number;
        name: "south";
        bearing: number;
    } | {
        fromBearing: number;
        angularDistance: number;
        name: "west";
        bearing: number;
    };
    torus: {
        index: 1 | 2;
        lobe: number;
        theta: number;
        phi: number;
        digit: number;
    };
    polarity: number;
    weather: {
        realtime: boolean;
        apiCount: number;
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
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function doubleTorusSolutionsProvenByMath(matrix?: MindMatrix): {
    proven: boolean;
    solutions: {
        id: string;
        domain: string;
        on: boolean;
        receipt: string;
        statement: string;
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
export declare function doubleTorusSolutionsDeepResearched(matrix?: MindMatrix): {
    researched: boolean;
    findings: ({
        receipt: string;
        kind: "documented";
        topic: string;
        fact: string;
        source: string;
    } | {
        receipt: string;
        kind: "flagged";
        topic: string;
        fact: string;
        source: string;
    } | {
        receipt: string;
        kind: "isomorphism";
        topic: string;
        fact: string;
        source: string;
    })[];
    documented: number;
    flagged: number;
    isomorphism: number;
    catalog: {
        proven: boolean;
        solutions: {
            id: string;
            domain: string;
            on: boolean;
            receipt: string;
            statement: string;
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
    count: number;
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
/** Movie seeds from double-torus Earth weather and solutions — facets and domains become plasma streams. */
export declare function doubleTorusEarthWeatherMovieSeeds(matrix?: MindMatrix): {
    proven: boolean;
    movieText: string;
    streams: {
        uuid: string;
        label: string;
        expr: string;
        expected: number;
        hueSeed: number;
    }[];
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
/** Gate: double-torus Earth weather and solutions wired into movie seeds and copy text at call time. */
export declare function doubleTorusEarthWeatherFlowsInMovie(matrix?: MindMatrix): {
    flows: boolean;
    folded: boolean;
    proven: boolean;
    facetCount: number;
    solutionCount: number;
    streamCount: number;
    movieText: string;
    root: string;
    statement: string;
    boundary: string;
};
