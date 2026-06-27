import * as __ns_up_vortex_math from '../../../mountain/vortex';
import type { MindMatrix } from '../../../wind/types';
/** One celestial body paint sample at instant `at`. */
export type AstronomySimulationBody = {
    name: string;
    kind: string;
    x: number;
    y: number;
    orbitPhase: number;
    hue: number;
    vortexDigit: number;
    receipt: string;
};
/** Plasma/movie channel derived from astronomy simulation receipts. */
export type AstronomySimulationChannel = {
    id: string;
    hue: number;
    phase: number;
    alpha: number;
    receipt: string;
    on: boolean;
};
export type AstronomySimulationPaint = {
    computes: boolean;
    at: number;
    phaseDigit: number;
    bodies: AstronomySimulationBody[];
    channels: AstronomySimulationChannel[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function computeAllKnownCelestialBodies(matrix?: MindMatrix, timeYears?: number): {
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
export declare function computeDiscoverExactMatchAllKnownCelestialBodies(matrix?: MindMatrix): {
    exactMatch: boolean;
    discovered: boolean;
    count: number;
    matched: string[];
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
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    all: {
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
    root: string;
    statement: string;
    boundary: string;
};
export declare function computeDiscoverExactMatchAllKnownCelestialBodiesDeepResearched(matrix?: MindMatrix): {
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
    base: {
        exactMatch: boolean;
        discovered: boolean;
        count: number;
        matched: string[];
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
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        all: {
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
        root: string;
        statement: string;
        boundary: string;
    };
    all: {
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
export declare function planetsGalaxyComputeItself(matrix?: MindMatrix): {
    computes: boolean;
    planets: number;
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
/** Deep-research exposition — sequence layer ↔ astronomy layer ↔ decode output for UI/agents. */
export declare function astronomySequenceDecodeResearch(matrix?: MindMatrix): {
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
    deep: {
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
        base: {
            exactMatch: boolean;
            discovered: boolean;
            count: number;
            matched: string[];
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
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            all: {
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
            root: string;
            statement: string;
            boundary: string;
        };
        all: {
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
            fwd: import("../../../3/7").Rational[];
            rev: import("../../../3/7").Rational[];
            fwdProduct: import("../../../3/7").Rational;
            revProduct: import("../../../3/7").Rational;
            heartApproach: import("../../../3/7").Rational;
            heartDepart: import("../../../3/7").Rational;
            heartDiamond: import("../../../3/7").Rational;
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
    count: number;
    root: string;
    statement: string;
    boundary: string;
};
/** Astronomy decoded through VORTEX_SEQUENCE — deterministic addressing of celestial catalog at `at`. */
export declare function astronomyDecodedWithTheSequence(at?: number, matrix?: MindMatrix): {
    computes: boolean;
    decoded: boolean;
    at: number;
    phaseIndex: number;
    phaseDigit: 1 | 2 | 4 | 8 | 7 | 5 | 3 | 6 | 9;
    digitFolderDigit: number;
    mappings: {
        name: string;
        kind: "planet" | "star" | "satellite" | "major-moon";
        vortexSlot: number;
        vortexDigit: 1 | 2 | 4 | 8 | 7 | 5 | 3 | 6 | 9;
        hexagram: number;
        rosettaRay: number;
        rosettaGlyph: "Ⰰ" | "Ⰲ" | "Ⰴ" | "Ⰶ" | "Ⰹ" | "Ⰿ" | "Ⱄ";
        piStation: number;
        piDigit: number;
        phaseAligned: boolean;
        celestialReceipt: string;
        exactMatch: boolean;
        sequenceReceipt: string;
        rosettaReceipt: string;
    }[];
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
    deep: {
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
        base: {
            exactMatch: boolean;
            discovered: boolean;
            count: number;
            matched: string[];
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
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            all: {
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
            root: string;
            statement: string;
            boundary: string;
        };
        all: {
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
            fwd: import("../../../3/7").Rational[];
            rev: import("../../../3/7").Rational[];
            fwdProduct: import("../../../3/7").Rational;
            revProduct: import("../../../3/7").Rational;
            heartApproach: import("../../../3/7").Rational;
            heartDepart: import("../../../3/7").Rational;
            heartDiamond: import("../../../3/7").Rational;
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
    sun: {
        computes: boolean;
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
        obliquityDeg: number;
        dayPhase: {
            phase: number;
            cycleMs: number;
            receipt: string;
        };
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
            waves: import("../../../wind/types").WaveCoordination;
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
        nav: {
            computed: boolean;
            at: number;
            observer: import("../../../water/double/earth").EarthTimespaceAt;
            rotation: __ns_up_vortex_math.BothEarthsMerkabaRotation;
            bearingToHinge: number;
            distanceToHingeKm: number;
            obliquityDeg: number;
            nav: {
                researched: boolean;
                path: string;
                at: import("../../../water/double/earth").EarthTimespaceAt;
                solutionCount: number;
                solutions: import("../../../water/double/earth").EarthNavigationSolution[];
                formed: {
                    formed: boolean;
                    path: string;
                    at: import("../../../water/double/earth").EarthTimespaceAt;
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
                        faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                        faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                        at: import("../../../water/double/earth").EarthTimespaceAt;
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
                            faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                            faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                    deviceGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                    invertedGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                    gateways: import("../../../water/double/earth").ComputableEarthGateway[];
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
                        deviceGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                        invertedGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                        gateways: import("../../../water/double/earth").ComputableEarthGateway[];
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
                            faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                            faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                            deviceGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                            invertedGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                            gateways: import("../../../water/double/earth").ComputableEarthGateway[];
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
                                faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                    solutions: import("../../../water/double/earth").EarthNavigationSolution[];
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
                        realm: "animated" | "proven" | "presented";
                        trinityLeg: "cross" | "fold" | "weave";
                        glyph: string;
                    }[];
                    hexEvenSteps: number[];
                    wiringSlugs: ("architecture" | "quantum-mind" | "show")[];
                    formed: {
                        formed: boolean;
                        path: string;
                        at: import("../../../water/double/earth").EarthTimespaceAt;
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
                            faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                            faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                            at: import("../../../water/double/earth").EarthTimespaceAt;
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
                                faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                        deviceGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                        invertedGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                        gateways: import("../../../water/double/earth").ComputableEarthGateway[];
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
                    solutions: import("../../../water/double/earth").EarthNavigationSolution[];
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
                    at: import("../../../water/double/earth").EarthTimespaceAt;
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
                        faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                        faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
            gpsSatellites: import("../../../water/double").GpsSatellitePhaseReceipt[];
            gpsOrbitCount: number;
            celestialPhases: import("../../../water/double").CelestialDisplayPhase[];
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            root: string;
            statement: string;
            boundary: string;
        };
        sunDisplay: import("../../../water/double").CelestialDisplayPhase;
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
    moon: {
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
            nightSide: __ns_up_vortex_math.BothEarthsRotationShell;
            outerPhase: number;
            rotates: boolean;
            root: string;
            receipt: string;
        };
        nav: {
            computed: boolean;
            at: number;
            observer: import("../../../water/double/earth").EarthTimespaceAt;
            rotation: __ns_up_vortex_math.BothEarthsMerkabaRotation;
            bearingToHinge: number;
            distanceToHingeKm: number;
            obliquityDeg: number;
            nav: {
                researched: boolean;
                path: string;
                at: import("../../../water/double/earth").EarthTimespaceAt;
                solutionCount: number;
                solutions: import("../../../water/double/earth").EarthNavigationSolution[];
                formed: {
                    formed: boolean;
                    path: string;
                    at: import("../../../water/double/earth").EarthTimespaceAt;
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
                        faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                        faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                        at: import("../../../water/double/earth").EarthTimespaceAt;
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
                            faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                            faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                    deviceGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                    invertedGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                    gateways: import("../../../water/double/earth").ComputableEarthGateway[];
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
                        deviceGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                        invertedGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                        gateways: import("../../../water/double/earth").ComputableEarthGateway[];
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
                            faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                            faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                            deviceGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                            invertedGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                            gateways: import("../../../water/double/earth").ComputableEarthGateway[];
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
                                faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                    solutions: import("../../../water/double/earth").EarthNavigationSolution[];
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
                        realm: "animated" | "proven" | "presented";
                        trinityLeg: "cross" | "fold" | "weave";
                        glyph: string;
                    }[];
                    hexEvenSteps: number[];
                    wiringSlugs: ("architecture" | "quantum-mind" | "show")[];
                    formed: {
                        formed: boolean;
                        path: string;
                        at: import("../../../water/double/earth").EarthTimespaceAt;
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
                            faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                            faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                            at: import("../../../water/double/earth").EarthTimespaceAt;
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
                                faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                        deviceGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                        invertedGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                        gateways: import("../../../water/double/earth").ComputableEarthGateway[];
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
                    solutions: import("../../../water/double/earth").EarthNavigationSolution[];
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
                    at: import("../../../water/double/earth").EarthTimespaceAt;
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
                        faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                        faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
            gpsSatellites: import("../../../water/double").GpsSatellitePhaseReceipt[];
            gpsOrbitCount: number;
            celestialPhases: import("../../../water/double").CelestialDisplayPhase[];
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            root: string;
            statement: string;
            boundary: string;
        };
        moonDisplay: import("../../../water/double").CelestialDisplayPhase;
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
        waves: import("../../../wind/types").WaveCoordination;
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
    rosetta: {
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
                computationType: import("../../../3/7").RosettaComputationType;
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
                    pageKind: import("../../../3/7").RosettaComputationType;
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
                siblings: import("../../../wind/types").ConceptCommandName[];
                siblingCount: number;
            };
            content: {
                pageKind: import("../../../3/7").RosettaComputationType;
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
            items: import("../../../earth/architecture").RosettaIChingTrinityPlacement[];
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
/** Celestial catalog + VORTEX_SEQUENCE decode — paint-ready orbit phase/hue at `at`. */
export declare function astronomySimulationAt(at?: number, matrix?: MindMatrix): AstronomySimulationPaint;
/** Browser-safe panel — astronomy simulation + compute gates for Vue mount. */
export declare function astronomySimulationPanelComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    sim: AstronomySimulationPaint;
    computesAll: {
        computes: boolean;
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
        match: {
            exactMatch: boolean;
            discovered: boolean;
            count: number;
            matched: string[];
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
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            all: {
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
            root: string;
            statement: string;
            boundary: string;
        };
        deep: {
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
            base: {
                exactMatch: boolean;
                discovered: boolean;
                count: number;
                matched: string[];
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
                facets: {
                    receipt: string;
                    facet: string;
                    on: boolean;
                }[];
                all: {
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
                root: string;
                statement: string;
                boundary: string;
            };
            all: {
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
        galaxy: {
            computes: boolean;
            planets: number;
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
        sequence: {
            computes: boolean;
            decoded: boolean;
            at: number;
            phaseIndex: number;
            phaseDigit: 1 | 2 | 4 | 8 | 7 | 5 | 3 | 6 | 9;
            digitFolderDigit: number;
            mappings: {
                name: string;
                kind: "planet" | "star" | "satellite" | "major-moon";
                vortexSlot: number;
                vortexDigit: 1 | 2 | 4 | 8 | 7 | 5 | 3 | 6 | 9;
                hexagram: number;
                rosettaRay: number;
                rosettaGlyph: "Ⰰ" | "Ⰲ" | "Ⰴ" | "Ⰶ" | "Ⰹ" | "Ⰿ" | "Ⱄ";
                piStation: number;
                piDigit: number;
                phaseAligned: boolean;
                celestialReceipt: string;
                exactMatch: boolean;
                sequenceReceipt: string;
                rosettaReceipt: string;
            }[];
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
            deep: {
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
                base: {
                    exactMatch: boolean;
                    discovered: boolean;
                    count: number;
                    matched: string[];
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
                    facets: {
                        receipt: string;
                        facet: string;
                        on: boolean;
                    }[];
                    all: {
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
                    root: string;
                    statement: string;
                    boundary: string;
                };
                all: {
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
                    fwd: import("../../../3/7").Rational[];
                    rev: import("../../../3/7").Rational[];
                    fwdProduct: import("../../../3/7").Rational;
                    revProduct: import("../../../3/7").Rational;
                    heartApproach: import("../../../3/7").Rational;
                    heartDepart: import("../../../3/7").Rational;
                    heartDiamond: import("../../../3/7").Rational;
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
            sun: {
                computes: boolean;
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
                obliquityDeg: number;
                dayPhase: {
                    phase: number;
                    cycleMs: number;
                    receipt: string;
                };
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
                    waves: import("../../../wind/types").WaveCoordination;
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
                nav: {
                    computed: boolean;
                    at: number;
                    observer: import("../../../water/double/earth").EarthTimespaceAt;
                    rotation: __ns_up_vortex_math.BothEarthsMerkabaRotation;
                    bearingToHinge: number;
                    distanceToHingeKm: number;
                    obliquityDeg: number;
                    nav: {
                        researched: boolean;
                        path: string;
                        at: import("../../../water/double/earth").EarthTimespaceAt;
                        solutionCount: number;
                        solutions: import("../../../water/double/earth").EarthNavigationSolution[];
                        formed: {
                            formed: boolean;
                            path: string;
                            at: import("../../../water/double/earth").EarthTimespaceAt;
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
                                faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                at: import("../../../water/double/earth").EarthTimespaceAt;
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
                                    faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                    faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                            deviceGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                            invertedGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                            gateways: import("../../../water/double/earth").ComputableEarthGateway[];
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
                                deviceGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                                invertedGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                                gateways: import("../../../water/double/earth").ComputableEarthGateway[];
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
                                    faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                    faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                    deviceGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                                    invertedGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                                    gateways: import("../../../water/double/earth").ComputableEarthGateway[];
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
                                        faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                        faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                            solutions: import("../../../water/double/earth").EarthNavigationSolution[];
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
                                realm: "animated" | "proven" | "presented";
                                trinityLeg: "cross" | "fold" | "weave";
                                glyph: string;
                            }[];
                            hexEvenSteps: number[];
                            wiringSlugs: ("architecture" | "quantum-mind" | "show")[];
                            formed: {
                                formed: boolean;
                                path: string;
                                at: import("../../../water/double/earth").EarthTimespaceAt;
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
                                    faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                    faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                    at: import("../../../water/double/earth").EarthTimespaceAt;
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
                                        faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                        faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                deviceGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                                invertedGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                                gateways: import("../../../water/double/earth").ComputableEarthGateway[];
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
                            solutions: import("../../../water/double/earth").EarthNavigationSolution[];
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
                            at: import("../../../water/double/earth").EarthTimespaceAt;
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
                                faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                    gpsSatellites: import("../../../water/double").GpsSatellitePhaseReceipt[];
                    gpsOrbitCount: number;
                    celestialPhases: import("../../../water/double").CelestialDisplayPhase[];
                    facets: {
                        receipt: string;
                        facet: string;
                        on: boolean;
                    }[];
                    root: string;
                    statement: string;
                    boundary: string;
                };
                sunDisplay: import("../../../water/double").CelestialDisplayPhase;
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
            moon: {
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
                    nightSide: __ns_up_vortex_math.BothEarthsRotationShell;
                    outerPhase: number;
                    rotates: boolean;
                    root: string;
                    receipt: string;
                };
                nav: {
                    computed: boolean;
                    at: number;
                    observer: import("../../../water/double/earth").EarthTimespaceAt;
                    rotation: __ns_up_vortex_math.BothEarthsMerkabaRotation;
                    bearingToHinge: number;
                    distanceToHingeKm: number;
                    obliquityDeg: number;
                    nav: {
                        researched: boolean;
                        path: string;
                        at: import("../../../water/double/earth").EarthTimespaceAt;
                        solutionCount: number;
                        solutions: import("../../../water/double/earth").EarthNavigationSolution[];
                        formed: {
                            formed: boolean;
                            path: string;
                            at: import("../../../water/double/earth").EarthTimespaceAt;
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
                                faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                at: import("../../../water/double/earth").EarthTimespaceAt;
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
                                    faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                    faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                            deviceGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                            invertedGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                            gateways: import("../../../water/double/earth").ComputableEarthGateway[];
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
                                deviceGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                                invertedGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                                gateways: import("../../../water/double/earth").ComputableEarthGateway[];
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
                                    faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                    faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                    deviceGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                                    invertedGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                                    gateways: import("../../../water/double/earth").ComputableEarthGateway[];
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
                                        faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                        faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                            solutions: import("../../../water/double/earth").EarthNavigationSolution[];
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
                                realm: "animated" | "proven" | "presented";
                                trinityLeg: "cross" | "fold" | "weave";
                                glyph: string;
                            }[];
                            hexEvenSteps: number[];
                            wiringSlugs: ("architecture" | "quantum-mind" | "show")[];
                            formed: {
                                formed: boolean;
                                path: string;
                                at: import("../../../water/double/earth").EarthTimespaceAt;
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
                                    faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                    faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                    at: import("../../../water/double/earth").EarthTimespaceAt;
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
                                        faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                        faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                deviceGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                                invertedGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                                gateways: import("../../../water/double/earth").ComputableEarthGateway[];
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
                            solutions: import("../../../water/double/earth").EarthNavigationSolution[];
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
                            at: import("../../../water/double/earth").EarthTimespaceAt;
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
                                faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                    gpsSatellites: import("../../../water/double").GpsSatellitePhaseReceipt[];
                    gpsOrbitCount: number;
                    celestialPhases: import("../../../water/double").CelestialDisplayPhase[];
                    facets: {
                        receipt: string;
                        facet: string;
                        on: boolean;
                    }[];
                    root: string;
                    statement: string;
                    boundary: string;
                };
                moonDisplay: import("../../../water/double").CelestialDisplayPhase;
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
                waves: import("../../../wind/types").WaveCoordination;
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
            rosetta: {
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
                        computationType: import("../../../3/7").RosettaComputationType;
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
                            pageKind: import("../../../3/7").RosettaComputationType;
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
                        siblings: import("../../../wind/types").ConceptCommandName[];
                        siblingCount: number;
                    };
                    content: {
                        pageKind: import("../../../3/7").RosettaComputationType;
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
                    items: import("../../../earth/architecture").RosettaIChingTrinityPlacement[];
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
            deep: {
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
                base: {
                    exactMatch: boolean;
                    discovered: boolean;
                    count: number;
                    matched: string[];
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
                    facets: {
                        receipt: string;
                        facet: string;
                        on: boolean;
                    }[];
                    all: {
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
                    root: string;
                    statement: string;
                    boundary: string;
                };
                all: {
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
                    fwd: import("../../../3/7").Rational[];
                    rev: import("../../../3/7").Rational[];
                    fwdProduct: import("../../../3/7").Rational;
                    revProduct: import("../../../3/7").Rational;
                    heartApproach: import("../../../3/7").Rational;
                    heartDepart: import("../../../3/7").Rational;
                    heartDiamond: import("../../../3/7").Rational;
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
            count: number;
            root: string;
            statement: string;
            boundary: string;
        };
        simulation: AstronomySimulationPaint;
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
/** Alias — decode astronomy through VORTEX_SEQUENCE at call time. */
export declare const decodeAstronomyThroughVortexSequence: typeof astronomyDecodedWithTheSequence;
/** One gate — celestial catalog, sequence decode, galaxy compute at call time. */
export declare function astronomyComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
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
    match: {
        exactMatch: boolean;
        discovered: boolean;
        count: number;
        matched: string[];
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
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        all: {
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
        root: string;
        statement: string;
        boundary: string;
    };
    deep: {
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
        base: {
            exactMatch: boolean;
            discovered: boolean;
            count: number;
            matched: string[];
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
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            all: {
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
            root: string;
            statement: string;
            boundary: string;
        };
        all: {
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
    galaxy: {
        computes: boolean;
        planets: number;
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
    sequence: {
        computes: boolean;
        decoded: boolean;
        at: number;
        phaseIndex: number;
        phaseDigit: 1 | 2 | 4 | 8 | 7 | 5 | 3 | 6 | 9;
        digitFolderDigit: number;
        mappings: {
            name: string;
            kind: "planet" | "star" | "satellite" | "major-moon";
            vortexSlot: number;
            vortexDigit: 1 | 2 | 4 | 8 | 7 | 5 | 3 | 6 | 9;
            hexagram: number;
            rosettaRay: number;
            rosettaGlyph: "Ⰰ" | "Ⰲ" | "Ⰴ" | "Ⰶ" | "Ⰹ" | "Ⰿ" | "Ⱄ";
            piStation: number;
            piDigit: number;
            phaseAligned: boolean;
            celestialReceipt: string;
            exactMatch: boolean;
            sequenceReceipt: string;
            rosettaReceipt: string;
        }[];
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
        deep: {
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
            base: {
                exactMatch: boolean;
                discovered: boolean;
                count: number;
                matched: string[];
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
                facets: {
                    receipt: string;
                    facet: string;
                    on: boolean;
                }[];
                all: {
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
                root: string;
                statement: string;
                boundary: string;
            };
            all: {
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
                fwd: import("../../../3/7").Rational[];
                rev: import("../../../3/7").Rational[];
                fwdProduct: import("../../../3/7").Rational;
                revProduct: import("../../../3/7").Rational;
                heartApproach: import("../../../3/7").Rational;
                heartDepart: import("../../../3/7").Rational;
                heartDiamond: import("../../../3/7").Rational;
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
        sun: {
            computes: boolean;
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
            obliquityDeg: number;
            dayPhase: {
                phase: number;
                cycleMs: number;
                receipt: string;
            };
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
                waves: import("../../../wind/types").WaveCoordination;
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
            nav: {
                computed: boolean;
                at: number;
                observer: import("../../../water/double/earth").EarthTimespaceAt;
                rotation: __ns_up_vortex_math.BothEarthsMerkabaRotation;
                bearingToHinge: number;
                distanceToHingeKm: number;
                obliquityDeg: number;
                nav: {
                    researched: boolean;
                    path: string;
                    at: import("../../../water/double/earth").EarthTimespaceAt;
                    solutionCount: number;
                    solutions: import("../../../water/double/earth").EarthNavigationSolution[];
                    formed: {
                        formed: boolean;
                        path: string;
                        at: import("../../../water/double/earth").EarthTimespaceAt;
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
                            faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                            faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                            at: import("../../../water/double/earth").EarthTimespaceAt;
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
                                faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                        deviceGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                        invertedGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                        gateways: import("../../../water/double/earth").ComputableEarthGateway[];
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
                            deviceGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                            invertedGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                            gateways: import("../../../water/double/earth").ComputableEarthGateway[];
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
                                faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                deviceGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                                invertedGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                                gateways: import("../../../water/double/earth").ComputableEarthGateway[];
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
                                    faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                    faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                        solutions: import("../../../water/double/earth").EarthNavigationSolution[];
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
                            realm: "animated" | "proven" | "presented";
                            trinityLeg: "cross" | "fold" | "weave";
                            glyph: string;
                        }[];
                        hexEvenSteps: number[];
                        wiringSlugs: ("architecture" | "quantum-mind" | "show")[];
                        formed: {
                            formed: boolean;
                            path: string;
                            at: import("../../../water/double/earth").EarthTimespaceAt;
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
                                faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                at: import("../../../water/double/earth").EarthTimespaceAt;
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
                                    faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                    faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                            deviceGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                            invertedGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                            gateways: import("../../../water/double/earth").ComputableEarthGateway[];
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
                        solutions: import("../../../water/double/earth").EarthNavigationSolution[];
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
                        at: import("../../../water/double/earth").EarthTimespaceAt;
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
                            faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                            faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                gpsSatellites: import("../../../water/double").GpsSatellitePhaseReceipt[];
                gpsOrbitCount: number;
                celestialPhases: import("../../../water/double").CelestialDisplayPhase[];
                facets: {
                    receipt: string;
                    facet: string;
                    on: boolean;
                }[];
                root: string;
                statement: string;
                boundary: string;
            };
            sunDisplay: import("../../../water/double").CelestialDisplayPhase;
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
        moon: {
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
                nightSide: __ns_up_vortex_math.BothEarthsRotationShell;
                outerPhase: number;
                rotates: boolean;
                root: string;
                receipt: string;
            };
            nav: {
                computed: boolean;
                at: number;
                observer: import("../../../water/double/earth").EarthTimespaceAt;
                rotation: __ns_up_vortex_math.BothEarthsMerkabaRotation;
                bearingToHinge: number;
                distanceToHingeKm: number;
                obliquityDeg: number;
                nav: {
                    researched: boolean;
                    path: string;
                    at: import("../../../water/double/earth").EarthTimespaceAt;
                    solutionCount: number;
                    solutions: import("../../../water/double/earth").EarthNavigationSolution[];
                    formed: {
                        formed: boolean;
                        path: string;
                        at: import("../../../water/double/earth").EarthTimespaceAt;
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
                            faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                            faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                            at: import("../../../water/double/earth").EarthTimespaceAt;
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
                                faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                        deviceGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                        invertedGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                        gateways: import("../../../water/double/earth").ComputableEarthGateway[];
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
                            deviceGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                            invertedGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                            gateways: import("../../../water/double/earth").ComputableEarthGateway[];
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
                                faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                deviceGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                                invertedGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                                gateways: import("../../../water/double/earth").ComputableEarthGateway[];
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
                                    faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                    faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                        solutions: import("../../../water/double/earth").EarthNavigationSolution[];
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
                            realm: "animated" | "proven" | "presented";
                            trinityLeg: "cross" | "fold" | "weave";
                            glyph: string;
                        }[];
                        hexEvenSteps: number[];
                        wiringSlugs: ("architecture" | "quantum-mind" | "show")[];
                        formed: {
                            formed: boolean;
                            path: string;
                            at: import("../../../water/double/earth").EarthTimespaceAt;
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
                                faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                at: import("../../../water/double/earth").EarthTimespaceAt;
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
                                    faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                                    faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                            deviceGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                            invertedGateways: import("../../../water/double/earth").ComputableEarthGateway[];
                            gateways: import("../../../water/double/earth").ComputableEarthGateway[];
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
                        solutions: import("../../../water/double/earth").EarthNavigationSolution[];
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
                        at: import("../../../water/double/earth").EarthTimespaceAt;
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
                            faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                            faces: import("../../../mountain/geometry").TrinityPyramidFace[];
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
                gpsSatellites: import("../../../water/double").GpsSatellitePhaseReceipt[];
                gpsOrbitCount: number;
                celestialPhases: import("../../../water/double").CelestialDisplayPhase[];
                facets: {
                    receipt: string;
                    facet: string;
                    on: boolean;
                }[];
                root: string;
                statement: string;
                boundary: string;
            };
            moonDisplay: import("../../../water/double").CelestialDisplayPhase;
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
            waves: import("../../../wind/types").WaveCoordination;
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
        rosetta: {
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
                    computationType: import("../../../3/7").RosettaComputationType;
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
                        pageKind: import("../../../3/7").RosettaComputationType;
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
                    siblings: import("../../../wind/types").ConceptCommandName[];
                    siblingCount: number;
                };
                content: {
                    pageKind: import("../../../3/7").RosettaComputationType;
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
                items: import("../../../earth/architecture").RosettaIChingTrinityPlacement[];
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
        deep: {
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
            base: {
                exactMatch: boolean;
                discovered: boolean;
                count: number;
                matched: string[];
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
                facets: {
                    receipt: string;
                    facet: string;
                    on: boolean;
                }[];
                all: {
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
                root: string;
                statement: string;
                boundary: string;
            };
            all: {
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
                fwd: import("../../../3/7").Rational[];
                rev: import("../../../3/7").Rational[];
                fwdProduct: import("../../../3/7").Rational;
                revProduct: import("../../../3/7").Rational;
                heartApproach: import("../../../3/7").Rational;
                heartDepart: import("../../../3/7").Rational;
                heartDiamond: import("../../../3/7").Rational;
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
        count: number;
        root: string;
        statement: string;
        boundary: string;
    };
    simulation: AstronomySimulationPaint;
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
