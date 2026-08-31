import * as __ns_up_vortex_math from '../../../mountain/vortex';
import * as __ns_up_learning from '../../../learning';
import type { MindMatrix } from '../../../types';
import { RAVE_BODIES_13, RAVE_CENTERS_9 } from '../../../quantum/spirit';
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
            betti: (4 | 1)[];
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
    phaseDigit: 2 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6;
    digitFolderDigit: number;
    mappings: {
        name: string;
        kind: "planet" | "star" | "satellite" | "major-moon";
        vortexSlot: number;
        vortexDigit: 2 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6;
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
            betti: (4 | 1)[];
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
            waves: import("../../../types").WaveCoordination;
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
                        realm: "proven" | "animated" | "presented";
                        trinityLeg: "fold" | "cross" | "weave";
                        glyph: string;
                    }[];
                    hexEvenSteps: number[];
                    wiringSlugs: string[];
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
                        realm: "proven" | "animated" | "presented";
                        trinityLeg: "fold" | "cross" | "weave";
                        glyph: string;
                    }[];
                    hexEvenSteps: number[];
                    wiringSlugs: string[];
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
        waves: import("../../../types").WaveCoordination;
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
                tail: "language" | "ui" | "fusion" | "site" | "types" | "rosetta" | "routes" | "learning" | "iching";
                action: "language" | "ui" | "fusion" | "site" | "types" | "rosetta" | "routes" | "learning" | "iching";
                ray: number;
                rayMeta: {
                    readonly ray: 0;
                    readonly glyph: "Ⰰ";
                    readonly nameEn: "Origin";
                    readonly nameBg: "Произход";
                    readonly domain: "origin";
                    readonly hue: 0;
                } | {
                    readonly ray: 1;
                    readonly glyph: "Ⰲ";
                    readonly nameEn: "Proof";
                    readonly nameBg: "Доказателства";
                    readonly domain: "expression";
                    readonly hue: 51;
                } | {
                    readonly ray: 2;
                    readonly glyph: "Ⰴ";
                    readonly nameEn: "Explore";
                    readonly nameBg: "Изследване";
                    readonly domain: "knowledge";
                    readonly hue: 102;
                } | {
                    readonly ray: 3;
                    readonly glyph: "Ⰶ";
                    readonly nameEn: "Learn";
                    readonly nameBg: "Обучение";
                    readonly domain: "nature";
                    readonly hue: 154;
                } | {
                    readonly ray: 4;
                    readonly glyph: "Ⰹ";
                    readonly nameEn: "Apps";
                    readonly nameBg: "Приложения";
                    readonly domain: "computation";
                    readonly hue: 205;
                } | {
                    readonly ray: 5;
                    readonly glyph: "Ⰿ";
                    readonly nameEn: "Frontier";
                    readonly nameBg: "Граници";
                    readonly domain: "geometry";
                    readonly hue: 257;
                } | {
                    readonly ray: 6;
                    readonly glyph: "Ⱄ";
                    readonly nameEn: "Reference";
                    readonly nameBg: "Справочник";
                    readonly domain: "language";
                    readonly hue: 308;
                };
                legacyWind: string;
                legacyMind: string;
                legacyBare: string;
                schemaTarget: string;
                canonical: string;
                importBarrel: "language" | "ui" | "fusion" | "site" | "types" | "rosetta" | "routes" | "learning" | "iching";
                wave: 2 | 1;
                applied: boolean;
                receipt: string;
            }[];
            moveTable: {
                from: string;
                to: string;
                wave: 2 | 1;
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
        core: {
            computes: boolean;
            at: number;
            core: {
                computes: boolean;
                at: number;
                surfaces: import("../../../quantum/apps").RosettaCoreSurface[];
                inventory: {
                    core: {
                        label: string;
                        kind: import("../../../quantum/apps").RosettaCoreSurfaceKind;
                        ray: number;
                        address: string;
                    }[];
                    parallel: readonly [];
                    hubs: {
                        slug: "learn" | "reference" | "proof" | "explore" | "frontier" | "origin" | "apps";
                        ray: number;
                        route: string;
                        hue: number;
                    }[];
                };
                hubs: readonly import("../../../3/7").RosettaRayHub[];
                raysUsed: number;
                kinds: readonly ["route", "hub", "compute", "nav", "tool", "app", "projection"];
                resolve: (label: string, kind?: import("../../../quantum/apps").RosettaCoreSurfaceKind) => import("../../../quantum/apps").RosettaCoreSurface;
                shelve: typeof __ns_up_learning.rosettaShelve;
                byRay: (ray: number) => import("../../../quantum/apps").RosettaCoreSurface[];
                resolveRoute: (route: string) => {
                    surface: import("../../../quantum/apps").RosettaCoreSurface;
                    address: string;
                    computed: boolean;
                    route: string;
                    slug: string;
                    ray: number;
                    rayMeta: {
                        readonly ray: 0;
                        readonly glyph: "Ⰰ";
                        readonly nameEn: "Origin";
                        readonly nameBg: "Произход";
                        readonly domain: "origin";
                        readonly hue: 0;
                    } | {
                        readonly ray: 1;
                        readonly glyph: "Ⰲ";
                        readonly nameEn: "Proof";
                        readonly nameBg: "Доказателства";
                        readonly domain: "expression";
                        readonly hue: 51;
                    } | {
                        readonly ray: 2;
                        readonly glyph: "Ⰴ";
                        readonly nameEn: "Explore";
                        readonly nameBg: "Изследване";
                        readonly domain: "knowledge";
                        readonly hue: 102;
                    } | {
                        readonly ray: 3;
                        readonly glyph: "Ⰶ";
                        readonly nameEn: "Learn";
                        readonly nameBg: "Обучение";
                        readonly domain: "nature";
                        readonly hue: 154;
                    } | {
                        readonly ray: 4;
                        readonly glyph: "Ⰹ";
                        readonly nameEn: "Apps";
                        readonly nameBg: "Приложения";
                        readonly domain: "computation";
                        readonly hue: 205;
                    } | {
                        readonly ray: 5;
                        readonly glyph: "Ⰿ";
                        readonly nameEn: "Frontier";
                        readonly nameBg: "Граници";
                        readonly domain: "geometry";
                        readonly hue: 257;
                    } | {
                        readonly ray: 6;
                        readonly glyph: "Ⱄ";
                        readonly nameEn: "Reference";
                        readonly nameBg: "Справочник";
                        readonly domain: "language";
                        readonly hue: 308;
                    };
                    station: number;
                    crossPair: string;
                    glaAddress: string;
                    navigation: {
                        rayLabel: "Origin" | "Proof" | "Explore" | "Learn" | "Apps" | "Frontier" | "Reference";
                        rayLabelBg: "Произход" | "Доказателства" | "Изследване" | "Обучение" | "Приложения" | "Граници" | "Справочник";
                        rayGlyph: "Ⰰ" | "Ⰲ" | "Ⰴ" | "Ⰶ" | "Ⰹ" | "Ⰿ" | "Ⱄ";
                        rayDomain: "geometry" | "origin" | "expression" | "knowledge" | "nature" | "computation" | "language";
                        siblings: import("../../../types").ConceptCommandName[];
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
                resolveProjection: (label: string) => {
                    surface: import("../../../quantum/apps").RosettaCoreSurface;
                    phase: number;
                    hue: number;
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
                };
                facets: {
                    receipt: string;
                    facet: string;
                    on: boolean;
                }[];
                root: string;
                pair: "rosetta/core";
                cli: string;
                statement: string;
                boundary: string;
            };
            slots: {
                ray: number;
                kind: "hub" | "route" | "compute" | "nav" | "tool" | "app" | "projection";
                pageKind: import("../../../3/7").RosettaComputationType;
                vortexDigit: 2 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6;
                receipt: string;
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
                tag: "geometry" | "origin" | "expression" | "knowledge" | "nature" | "computation" | "language";
                ray: number;
                name: "Origin" | "Proof" | "Explore" | "Learn" | "Apps" | "Frontier" | "Reference";
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
                    readonly nameEn: "Origin";
                    readonly nameBg: "Произход";
                    readonly domain: "origin";
                    readonly hue: 0;
                } | {
                    readonly ray: 1;
                    readonly glyph: "Ⰲ";
                    readonly nameEn: "Proof";
                    readonly nameBg: "Доказателства";
                    readonly domain: "expression";
                    readonly hue: 51;
                } | {
                    readonly ray: 2;
                    readonly glyph: "Ⰴ";
                    readonly nameEn: "Explore";
                    readonly nameBg: "Изследване";
                    readonly domain: "knowledge";
                    readonly hue: 102;
                } | {
                    readonly ray: 3;
                    readonly glyph: "Ⰶ";
                    readonly nameEn: "Learn";
                    readonly nameBg: "Обучение";
                    readonly domain: "nature";
                    readonly hue: 154;
                } | {
                    readonly ray: 4;
                    readonly glyph: "Ⰹ";
                    readonly nameEn: "Apps";
                    readonly nameBg: "Приложения";
                    readonly domain: "computation";
                    readonly hue: 205;
                } | {
                    readonly ray: 5;
                    readonly glyph: "Ⰿ";
                    readonly nameEn: "Frontier";
                    readonly nameBg: "Граници";
                    readonly domain: "geometry";
                    readonly hue: 257;
                } | {
                    readonly ray: 6;
                    readonly glyph: "Ⱄ";
                    readonly nameEn: "Reference";
                    readonly nameBg: "Справочник";
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
                readonly nameEn: "Origin";
                readonly nameBg: "Произход";
                readonly domain: "origin";
                readonly hue: 0;
            } | {
                readonly ray: 1;
                readonly glyph: "Ⰲ";
                readonly nameEn: "Proof";
                readonly nameBg: "Доказателства";
                readonly domain: "expression";
                readonly hue: 51;
            } | {
                readonly ray: 2;
                readonly glyph: "Ⰴ";
                readonly nameEn: "Explore";
                readonly nameBg: "Изследване";
                readonly domain: "knowledge";
                readonly hue: 102;
            } | {
                readonly ray: 3;
                readonly glyph: "Ⰶ";
                readonly nameEn: "Learn";
                readonly nameBg: "Обучение";
                readonly domain: "nature";
                readonly hue: 154;
            } | {
                readonly ray: 4;
                readonly glyph: "Ⰹ";
                readonly nameEn: "Apps";
                readonly nameBg: "Приложения";
                readonly domain: "computation";
                readonly hue: 205;
            } | {
                readonly ray: 5;
                readonly glyph: "Ⰿ";
                readonly nameEn: "Frontier";
                readonly nameBg: "Граници";
                readonly domain: "geometry";
                readonly hue: 257;
            } | {
                readonly ray: 6;
                readonly glyph: "Ⱄ";
                readonly nameEn: "Reference";
                readonly nameBg: "Справочник";
                readonly domain: "language";
                readonly hue: 308;
            };
            station: number;
            crossPair: string;
            glaAddress: string;
            navigation: {
                rayLabel: "Origin" | "Proof" | "Explore" | "Learn" | "Apps" | "Frontier" | "Reference";
                rayLabelBg: "Произход" | "Доказателства" | "Изследване" | "Обучение" | "Приложения" | "Граници" | "Справочник";
                rayGlyph: "Ⰰ" | "Ⰲ" | "Ⰴ" | "Ⰶ" | "Ⰹ" | "Ⰿ" | "Ⱄ";
                rayDomain: "geometry" | "origin" | "expression" | "knowledge" | "nature" | "computation" | "language";
                siblings: import("../../../types").ConceptCommandName[];
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
                betti: (4 | 1)[];
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
            phaseDigit: 2 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6;
            digitFolderDigit: number;
            mappings: {
                name: string;
                kind: "planet" | "star" | "satellite" | "major-moon";
                vortexSlot: number;
                vortexDigit: 2 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6;
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
                    betti: (4 | 1)[];
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
                    waves: import("../../../types").WaveCoordination;
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
                                realm: "proven" | "animated" | "presented";
                                trinityLeg: "fold" | "cross" | "weave";
                                glyph: string;
                            }[];
                            hexEvenSteps: number[];
                            wiringSlugs: string[];
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
                                realm: "proven" | "animated" | "presented";
                                trinityLeg: "fold" | "cross" | "weave";
                                glyph: string;
                            }[];
                            hexEvenSteps: number[];
                            wiringSlugs: string[];
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
                waves: import("../../../types").WaveCoordination;
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
                        tail: "language" | "ui" | "fusion" | "site" | "types" | "rosetta" | "routes" | "learning" | "iching";
                        action: "language" | "ui" | "fusion" | "site" | "types" | "rosetta" | "routes" | "learning" | "iching";
                        ray: number;
                        rayMeta: {
                            readonly ray: 0;
                            readonly glyph: "Ⰰ";
                            readonly nameEn: "Origin";
                            readonly nameBg: "Произход";
                            readonly domain: "origin";
                            readonly hue: 0;
                        } | {
                            readonly ray: 1;
                            readonly glyph: "Ⰲ";
                            readonly nameEn: "Proof";
                            readonly nameBg: "Доказателства";
                            readonly domain: "expression";
                            readonly hue: 51;
                        } | {
                            readonly ray: 2;
                            readonly glyph: "Ⰴ";
                            readonly nameEn: "Explore";
                            readonly nameBg: "Изследване";
                            readonly domain: "knowledge";
                            readonly hue: 102;
                        } | {
                            readonly ray: 3;
                            readonly glyph: "Ⰶ";
                            readonly nameEn: "Learn";
                            readonly nameBg: "Обучение";
                            readonly domain: "nature";
                            readonly hue: 154;
                        } | {
                            readonly ray: 4;
                            readonly glyph: "Ⰹ";
                            readonly nameEn: "Apps";
                            readonly nameBg: "Приложения";
                            readonly domain: "computation";
                            readonly hue: 205;
                        } | {
                            readonly ray: 5;
                            readonly glyph: "Ⰿ";
                            readonly nameEn: "Frontier";
                            readonly nameBg: "Граници";
                            readonly domain: "geometry";
                            readonly hue: 257;
                        } | {
                            readonly ray: 6;
                            readonly glyph: "Ⱄ";
                            readonly nameEn: "Reference";
                            readonly nameBg: "Справочник";
                            readonly domain: "language";
                            readonly hue: 308;
                        };
                        legacyWind: string;
                        legacyMind: string;
                        legacyBare: string;
                        schemaTarget: string;
                        canonical: string;
                        importBarrel: "language" | "ui" | "fusion" | "site" | "types" | "rosetta" | "routes" | "learning" | "iching";
                        wave: 2 | 1;
                        applied: boolean;
                        receipt: string;
                    }[];
                    moveTable: {
                        from: string;
                        to: string;
                        wave: 2 | 1;
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
                core: {
                    computes: boolean;
                    at: number;
                    core: {
                        computes: boolean;
                        at: number;
                        surfaces: import("../../../quantum/apps").RosettaCoreSurface[];
                        inventory: {
                            core: {
                                label: string;
                                kind: import("../../../quantum/apps").RosettaCoreSurfaceKind;
                                ray: number;
                                address: string;
                            }[];
                            parallel: readonly [];
                            hubs: {
                                slug: "learn" | "reference" | "proof" | "explore" | "frontier" | "origin" | "apps";
                                ray: number;
                                route: string;
                                hue: number;
                            }[];
                        };
                        hubs: readonly import("../../../3/7").RosettaRayHub[];
                        raysUsed: number;
                        kinds: readonly ["route", "hub", "compute", "nav", "tool", "app", "projection"];
                        resolve: (label: string, kind?: import("../../../quantum/apps").RosettaCoreSurfaceKind) => import("../../../quantum/apps").RosettaCoreSurface;
                        shelve: typeof __ns_up_learning.rosettaShelve;
                        byRay: (ray: number) => import("../../../quantum/apps").RosettaCoreSurface[];
                        resolveRoute: (route: string) => {
                            surface: import("../../../quantum/apps").RosettaCoreSurface;
                            address: string;
                            computed: boolean;
                            route: string;
                            slug: string;
                            ray: number;
                            rayMeta: {
                                readonly ray: 0;
                                readonly glyph: "Ⰰ";
                                readonly nameEn: "Origin";
                                readonly nameBg: "Произход";
                                readonly domain: "origin";
                                readonly hue: 0;
                            } | {
                                readonly ray: 1;
                                readonly glyph: "Ⰲ";
                                readonly nameEn: "Proof";
                                readonly nameBg: "Доказателства";
                                readonly domain: "expression";
                                readonly hue: 51;
                            } | {
                                readonly ray: 2;
                                readonly glyph: "Ⰴ";
                                readonly nameEn: "Explore";
                                readonly nameBg: "Изследване";
                                readonly domain: "knowledge";
                                readonly hue: 102;
                            } | {
                                readonly ray: 3;
                                readonly glyph: "Ⰶ";
                                readonly nameEn: "Learn";
                                readonly nameBg: "Обучение";
                                readonly domain: "nature";
                                readonly hue: 154;
                            } | {
                                readonly ray: 4;
                                readonly glyph: "Ⰹ";
                                readonly nameEn: "Apps";
                                readonly nameBg: "Приложения";
                                readonly domain: "computation";
                                readonly hue: 205;
                            } | {
                                readonly ray: 5;
                                readonly glyph: "Ⰿ";
                                readonly nameEn: "Frontier";
                                readonly nameBg: "Граници";
                                readonly domain: "geometry";
                                readonly hue: 257;
                            } | {
                                readonly ray: 6;
                                readonly glyph: "Ⱄ";
                                readonly nameEn: "Reference";
                                readonly nameBg: "Справочник";
                                readonly domain: "language";
                                readonly hue: 308;
                            };
                            station: number;
                            crossPair: string;
                            glaAddress: string;
                            navigation: {
                                rayLabel: "Origin" | "Proof" | "Explore" | "Learn" | "Apps" | "Frontier" | "Reference";
                                rayLabelBg: "Произход" | "Доказателства" | "Изследване" | "Обучение" | "Приложения" | "Граници" | "Справочник";
                                rayGlyph: "Ⰰ" | "Ⰲ" | "Ⰴ" | "Ⰶ" | "Ⰹ" | "Ⰿ" | "Ⱄ";
                                rayDomain: "geometry" | "origin" | "expression" | "knowledge" | "nature" | "computation" | "language";
                                siblings: import("../../../types").ConceptCommandName[];
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
                        resolveProjection: (label: string) => {
                            surface: import("../../../quantum/apps").RosettaCoreSurface;
                            phase: number;
                            hue: number;
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
                        };
                        facets: {
                            receipt: string;
                            facet: string;
                            on: boolean;
                        }[];
                        root: string;
                        pair: "rosetta/core";
                        cli: string;
                        statement: string;
                        boundary: string;
                    };
                    slots: {
                        ray: number;
                        kind: "hub" | "route" | "compute" | "nav" | "tool" | "app" | "projection";
                        pageKind: import("../../../3/7").RosettaComputationType;
                        vortexDigit: 2 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6;
                        receipt: string;
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
                        tag: "geometry" | "origin" | "expression" | "knowledge" | "nature" | "computation" | "language";
                        ray: number;
                        name: "Origin" | "Proof" | "Explore" | "Learn" | "Apps" | "Frontier" | "Reference";
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
                            readonly nameEn: "Origin";
                            readonly nameBg: "Произход";
                            readonly domain: "origin";
                            readonly hue: 0;
                        } | {
                            readonly ray: 1;
                            readonly glyph: "Ⰲ";
                            readonly nameEn: "Proof";
                            readonly nameBg: "Доказателства";
                            readonly domain: "expression";
                            readonly hue: 51;
                        } | {
                            readonly ray: 2;
                            readonly glyph: "Ⰴ";
                            readonly nameEn: "Explore";
                            readonly nameBg: "Изследване";
                            readonly domain: "knowledge";
                            readonly hue: 102;
                        } | {
                            readonly ray: 3;
                            readonly glyph: "Ⰶ";
                            readonly nameEn: "Learn";
                            readonly nameBg: "Обучение";
                            readonly domain: "nature";
                            readonly hue: 154;
                        } | {
                            readonly ray: 4;
                            readonly glyph: "Ⰹ";
                            readonly nameEn: "Apps";
                            readonly nameBg: "Приложения";
                            readonly domain: "computation";
                            readonly hue: 205;
                        } | {
                            readonly ray: 5;
                            readonly glyph: "Ⰿ";
                            readonly nameEn: "Frontier";
                            readonly nameBg: "Граници";
                            readonly domain: "geometry";
                            readonly hue: 257;
                        } | {
                            readonly ray: 6;
                            readonly glyph: "Ⱄ";
                            readonly nameEn: "Reference";
                            readonly nameBg: "Справочник";
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
                        readonly nameEn: "Origin";
                        readonly nameBg: "Произход";
                        readonly domain: "origin";
                        readonly hue: 0;
                    } | {
                        readonly ray: 1;
                        readonly glyph: "Ⰲ";
                        readonly nameEn: "Proof";
                        readonly nameBg: "Доказателства";
                        readonly domain: "expression";
                        readonly hue: 51;
                    } | {
                        readonly ray: 2;
                        readonly glyph: "Ⰴ";
                        readonly nameEn: "Explore";
                        readonly nameBg: "Изследване";
                        readonly domain: "knowledge";
                        readonly hue: 102;
                    } | {
                        readonly ray: 3;
                        readonly glyph: "Ⰶ";
                        readonly nameEn: "Learn";
                        readonly nameBg: "Обучение";
                        readonly domain: "nature";
                        readonly hue: 154;
                    } | {
                        readonly ray: 4;
                        readonly glyph: "Ⰹ";
                        readonly nameEn: "Apps";
                        readonly nameBg: "Приложения";
                        readonly domain: "computation";
                        readonly hue: 205;
                    } | {
                        readonly ray: 5;
                        readonly glyph: "Ⰿ";
                        readonly nameEn: "Frontier";
                        readonly nameBg: "Граници";
                        readonly domain: "geometry";
                        readonly hue: 257;
                    } | {
                        readonly ray: 6;
                        readonly glyph: "Ⱄ";
                        readonly nameEn: "Reference";
                        readonly nameBg: "Справочник";
                        readonly domain: "language";
                        readonly hue: 308;
                    };
                    station: number;
                    crossPair: string;
                    glaAddress: string;
                    navigation: {
                        rayLabel: "Origin" | "Proof" | "Explore" | "Learn" | "Apps" | "Frontier" | "Reference";
                        rayLabelBg: "Произход" | "Доказателства" | "Изследване" | "Обучение" | "Приложения" | "Граници" | "Справочник";
                        rayGlyph: "Ⰰ" | "Ⰲ" | "Ⰴ" | "Ⰶ" | "Ⰹ" | "Ⰿ" | "Ⱄ";
                        rayDomain: "geometry" | "origin" | "expression" | "knowledge" | "nature" | "computation" | "language";
                        siblings: import("../../../types").ConceptCommandName[];
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
                        betti: (4 | 1)[];
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
                    betti: (4 | 1)[];
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
        hdEph: {
            computes: boolean;
            verified: boolean;
            birthJd: number;
            ephemeris: {
                readonly jd: number;
                readonly bodies: readonly SealedMeeusBodyLongitude[];
                readonly sun: number;
                readonly moon: number;
                readonly root: string;
            };
            design: {
                readonly birthJd: number;
                readonly designJd: number;
                readonly birthSunDeg: number;
                readonly designSunDeg: number;
                readonly targetDeg: number;
                readonly arcErrDeg: number;
                readonly daysBeforeBirth: number;
            };
            sunJ2000: number;
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
        hdChart: {
            computes: boolean;
            verified: boolean;
            birthJd: number;
            designJd: number;
            personality: {
                layer: "design" | "personality";
                body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                longitudeDeg: number;
                gate: number;
                line: number;
                cusp: boolean;
                fastMoverCusp: boolean;
                receipt: string;
            }[];
            design: {
                layer: "design" | "personality";
                body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                longitudeDeg: number;
                gate: number;
                line: number;
                cusp: boolean;
                fastMoverCusp: boolean;
                receipt: string;
            }[];
            activatedGates: number[];
            definedChannels: {
                a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                key: string;
                from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
            }[];
            cuspWarnings: {
                layer: "design" | "personality";
                body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                longitudeDeg: number;
                gate: number;
                line: number;
                cusp: boolean;
                fastMoverCusp: boolean;
                receipt: string;
            }[];
            cuspBandDeg: number;
            wheel: {
                verified: boolean;
                computes: boolean;
                gateArcDeg: number;
                lineArcDeg: number;
                gate41StartDeg: number;
                designSunArcDeg: number;
                bodies: ("Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto")[];
                bodyCount: 13;
                gates: (2 | 16 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6 | 27 | 54 | 64 | 20 | 46 | 61 | 53 | 10 | 55 | 34 | 21 | 13 | 17 | 12 | 18 | 51 | 23 | 31 | 32 | 42 | 63 | 14 | 41 | 19 | 49 | 30 | 37 | 22 | 36 | 25 | 24 | 35 | 45 | 15 | 52 | 39 | 62 | 56 | 33 | 44 | 28 | 50 | 57 | 48 | 47 | 40 | 59 | 29 | 26 | 11 | 58 | 38 | 60 | 43)[];
                starts: number[];
                sample: {
                    gate: number;
                    line: number;
                    index: number;
                    startDeg: number;
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
            lattice: {
                verified: boolean;
                computes: boolean;
                centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
                centerCount: 9;
                channels: {
                    a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                    b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                    key: string;
                    from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                    to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                }[];
                channelCount: 36;
                gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
            ephCore: {
                computes: boolean;
                verified: boolean;
                birthJd: number;
                ephemeris: {
                    readonly jd: number;
                    readonly bodies: readonly SealedMeeusBodyLongitude[];
                    readonly sun: number;
                    readonly moon: number;
                    readonly root: string;
                };
                design: {
                    readonly birthJd: number;
                    readonly designJd: number;
                    readonly birthSunDeg: number;
                    readonly designSunDeg: number;
                    readonly targetDeg: number;
                    readonly arcErrDeg: number;
                    readonly daysBeforeBirth: number;
                };
                sunJ2000: number;
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
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            root: string;
            statement: string;
            boundary: string;
        };
        hdW6: {
            computes: boolean;
            verified: boolean;
            birthJd: number;
            designJd: number;
            definedCenters: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
            openCenters: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
            hangingGates: number[];
            definitionComponents: number;
            definitionKind: HdDefinitionKind;
            personalityGates: number[];
            designGates: number[];
            sharedGates: number[];
            definedChannelCount: number;
            activatedGateCount: number;
            cuspCount: number;
            chart: {
                computes: boolean;
                verified: boolean;
                birthJd: number;
                designJd: number;
                personality: {
                    layer: "design" | "personality";
                    body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                    longitudeDeg: number;
                    gate: number;
                    line: number;
                    cusp: boolean;
                    fastMoverCusp: boolean;
                    receipt: string;
                }[];
                design: {
                    layer: "design" | "personality";
                    body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                    longitudeDeg: number;
                    gate: number;
                    line: number;
                    cusp: boolean;
                    fastMoverCusp: boolean;
                    receipt: string;
                }[];
                activatedGates: number[];
                definedChannels: {
                    a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                    b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                    key: string;
                    from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                    to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                }[];
                cuspWarnings: {
                    layer: "design" | "personality";
                    body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                    longitudeDeg: number;
                    gate: number;
                    line: number;
                    cusp: boolean;
                    fastMoverCusp: boolean;
                    receipt: string;
                }[];
                cuspBandDeg: number;
                wheel: {
                    verified: boolean;
                    computes: boolean;
                    gateArcDeg: number;
                    lineArcDeg: number;
                    gate41StartDeg: number;
                    designSunArcDeg: number;
                    bodies: ("Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto")[];
                    bodyCount: 13;
                    gates: (2 | 16 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6 | 27 | 54 | 64 | 20 | 46 | 61 | 53 | 10 | 55 | 34 | 21 | 13 | 17 | 12 | 18 | 51 | 23 | 31 | 32 | 42 | 63 | 14 | 41 | 19 | 49 | 30 | 37 | 22 | 36 | 25 | 24 | 35 | 45 | 15 | 52 | 39 | 62 | 56 | 33 | 44 | 28 | 50 | 57 | 48 | 47 | 40 | 59 | 29 | 26 | 11 | 58 | 38 | 60 | 43)[];
                    starts: number[];
                    sample: {
                        gate: number;
                        line: number;
                        index: number;
                        startDeg: number;
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
                lattice: {
                    verified: boolean;
                    computes: boolean;
                    centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
                    centerCount: 9;
                    channels: {
                        a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                        b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                        key: string;
                        from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                        to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                    }[];
                    channelCount: 36;
                    gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
                ephCore: {
                    computes: boolean;
                    verified: boolean;
                    birthJd: number;
                    ephemeris: {
                        readonly jd: number;
                        readonly bodies: readonly SealedMeeusBodyLongitude[];
                        readonly sun: number;
                        readonly moon: number;
                        readonly root: string;
                    };
                    design: {
                        readonly birthJd: number;
                        readonly designJd: number;
                        readonly birthSunDeg: number;
                        readonly designSunDeg: number;
                        readonly targetDeg: number;
                        readonly arcErrDeg: number;
                        readonly daysBeforeBirth: number;
                    };
                    sunJ2000: number;
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
                facets: {
                    receipt: string;
                    facet: string;
                    on: boolean;
                }[];
                root: string;
                statement: string;
                boundary: string;
            };
            lattice: {
                verified: boolean;
                computes: boolean;
                centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
                centerCount: 9;
                channels: {
                    a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                    b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                    key: string;
                    from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                    to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                }[];
                channelCount: 36;
                gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
            wheel: {
                verified: boolean;
                computes: boolean;
                gateArcDeg: number;
                lineArcDeg: number;
                gate41StartDeg: number;
                designSunArcDeg: number;
                bodies: ("Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto")[];
                bodyCount: 13;
                gates: (2 | 16 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6 | 27 | 54 | 64 | 20 | 46 | 61 | 53 | 10 | 55 | 34 | 21 | 13 | 17 | 12 | 18 | 51 | 23 | 31 | 32 | 42 | 63 | 14 | 41 | 19 | 49 | 30 | 37 | 22 | 36 | 25 | 24 | 35 | 45 | 15 | 52 | 39 | 62 | 56 | 33 | 44 | 28 | 50 | 57 | 48 | 47 | 40 | 59 | 29 | 26 | 11 | 58 | 38 | 60 | 43)[];
                starts: number[];
                sample: {
                    gate: number;
                    line: number;
                    index: number;
                    startDeg: number;
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
            count: number;
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            root: string;
            pair: "edit/build";
            qpuRequired: false;
            route: string;
            statement: string;
            boundary: string;
        };
        hdBody: {
            computes: boolean;
            verified: boolean;
            birthJd: number;
            chart: {
                computes: boolean;
                verified: boolean;
                birthJd: number;
                designJd: number;
                personality: {
                    layer: "design" | "personality";
                    body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                    longitudeDeg: number;
                    gate: number;
                    line: number;
                    cusp: boolean;
                    fastMoverCusp: boolean;
                    receipt: string;
                }[];
                design: {
                    layer: "design" | "personality";
                    body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                    longitudeDeg: number;
                    gate: number;
                    line: number;
                    cusp: boolean;
                    fastMoverCusp: boolean;
                    receipt: string;
                }[];
                activatedGates: number[];
                definedChannels: {
                    a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                    b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                    key: string;
                    from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                    to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                }[];
                cuspWarnings: {
                    layer: "design" | "personality";
                    body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                    longitudeDeg: number;
                    gate: number;
                    line: number;
                    cusp: boolean;
                    fastMoverCusp: boolean;
                    receipt: string;
                }[];
                cuspBandDeg: number;
                wheel: {
                    verified: boolean;
                    computes: boolean;
                    gateArcDeg: number;
                    lineArcDeg: number;
                    gate41StartDeg: number;
                    designSunArcDeg: number;
                    bodies: ("Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto")[];
                    bodyCount: 13;
                    gates: (2 | 16 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6 | 27 | 54 | 64 | 20 | 46 | 61 | 53 | 10 | 55 | 34 | 21 | 13 | 17 | 12 | 18 | 51 | 23 | 31 | 32 | 42 | 63 | 14 | 41 | 19 | 49 | 30 | 37 | 22 | 36 | 25 | 24 | 35 | 45 | 15 | 52 | 39 | 62 | 56 | 33 | 44 | 28 | 50 | 57 | 48 | 47 | 40 | 59 | 29 | 26 | 11 | 58 | 38 | 60 | 43)[];
                    starts: number[];
                    sample: {
                        gate: number;
                        line: number;
                        index: number;
                        startDeg: number;
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
                lattice: {
                    verified: boolean;
                    computes: boolean;
                    centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
                    centerCount: 9;
                    channels: {
                        a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                        b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                        key: string;
                        from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                        to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                    }[];
                    channelCount: 36;
                    gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
                ephCore: {
                    computes: boolean;
                    verified: boolean;
                    birthJd: number;
                    ephemeris: {
                        readonly jd: number;
                        readonly bodies: readonly SealedMeeusBodyLongitude[];
                        readonly sun: number;
                        readonly moon: number;
                        readonly root: string;
                    };
                    design: {
                        readonly birthJd: number;
                        readonly designJd: number;
                        readonly birthSunDeg: number;
                        readonly designSunDeg: number;
                        readonly targetDeg: number;
                        readonly arcErrDeg: number;
                        readonly daysBeforeBirth: number;
                    };
                    sunJ2000: number;
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
                facets: {
                    receipt: string;
                    facet: string;
                    on: boolean;
                }[];
                root: string;
                statement: string;
                boundary: string;
            };
            structure: {
                computes: boolean;
                verified: boolean;
                birthJd: number;
                designJd: number;
                definedCenters: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
                openCenters: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
                hangingGates: number[];
                definitionComponents: number;
                definitionKind: HdDefinitionKind;
                personalityGates: number[];
                designGates: number[];
                sharedGates: number[];
                definedChannelCount: number;
                activatedGateCount: number;
                cuspCount: number;
                chart: {
                    computes: boolean;
                    verified: boolean;
                    birthJd: number;
                    designJd: number;
                    personality: {
                        layer: "design" | "personality";
                        body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                        longitudeDeg: number;
                        gate: number;
                        line: number;
                        cusp: boolean;
                        fastMoverCusp: boolean;
                        receipt: string;
                    }[];
                    design: {
                        layer: "design" | "personality";
                        body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                        longitudeDeg: number;
                        gate: number;
                        line: number;
                        cusp: boolean;
                        fastMoverCusp: boolean;
                        receipt: string;
                    }[];
                    activatedGates: number[];
                    definedChannels: {
                        a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                        b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                        key: string;
                        from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                        to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                    }[];
                    cuspWarnings: {
                        layer: "design" | "personality";
                        body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                        longitudeDeg: number;
                        gate: number;
                        line: number;
                        cusp: boolean;
                        fastMoverCusp: boolean;
                        receipt: string;
                    }[];
                    cuspBandDeg: number;
                    wheel: {
                        verified: boolean;
                        computes: boolean;
                        gateArcDeg: number;
                        lineArcDeg: number;
                        gate41StartDeg: number;
                        designSunArcDeg: number;
                        bodies: ("Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto")[];
                        bodyCount: 13;
                        gates: (2 | 16 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6 | 27 | 54 | 64 | 20 | 46 | 61 | 53 | 10 | 55 | 34 | 21 | 13 | 17 | 12 | 18 | 51 | 23 | 31 | 32 | 42 | 63 | 14 | 41 | 19 | 49 | 30 | 37 | 22 | 36 | 25 | 24 | 35 | 45 | 15 | 52 | 39 | 62 | 56 | 33 | 44 | 28 | 50 | 57 | 48 | 47 | 40 | 59 | 29 | 26 | 11 | 58 | 38 | 60 | 43)[];
                        starts: number[];
                        sample: {
                            gate: number;
                            line: number;
                            index: number;
                            startDeg: number;
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
                    lattice: {
                        verified: boolean;
                        computes: boolean;
                        centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
                        centerCount: 9;
                        channels: {
                            a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                            b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                            key: string;
                            from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                            to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                        }[];
                        channelCount: 36;
                        gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
                    ephCore: {
                        computes: boolean;
                        verified: boolean;
                        birthJd: number;
                        ephemeris: {
                            readonly jd: number;
                            readonly bodies: readonly SealedMeeusBodyLongitude[];
                            readonly sun: number;
                            readonly moon: number;
                            readonly root: string;
                        };
                        design: {
                            readonly birthJd: number;
                            readonly designJd: number;
                            readonly birthSunDeg: number;
                            readonly designSunDeg: number;
                            readonly targetDeg: number;
                            readonly arcErrDeg: number;
                            readonly daysBeforeBirth: number;
                        };
                        sunJ2000: number;
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
                    facets: {
                        receipt: string;
                        facet: string;
                        on: boolean;
                    }[];
                    root: string;
                    statement: string;
                    boundary: string;
                };
                lattice: {
                    verified: boolean;
                    computes: boolean;
                    centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
                    centerCount: 9;
                    channels: {
                        a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                        b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                        key: string;
                        from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                        to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                    }[];
                    channelCount: 36;
                    gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
                wheel: {
                    verified: boolean;
                    computes: boolean;
                    gateArcDeg: number;
                    lineArcDeg: number;
                    gate41StartDeg: number;
                    designSunArcDeg: number;
                    bodies: ("Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto")[];
                    bodyCount: 13;
                    gates: (2 | 16 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6 | 27 | 54 | 64 | 20 | 46 | 61 | 53 | 10 | 55 | 34 | 21 | 13 | 17 | 12 | 18 | 51 | 23 | 31 | 32 | 42 | 63 | 14 | 41 | 19 | 49 | 30 | 37 | 22 | 36 | 25 | 24 | 35 | 45 | 15 | 52 | 39 | 62 | 56 | 33 | 44 | 28 | 50 | 57 | 48 | 47 | 40 | 59 | 29 | 26 | 11 | 58 | 38 | 60 | 43)[];
                    starts: number[];
                    sample: {
                        gate: number;
                        line: number;
                        index: number;
                        startDeg: number;
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
                count: number;
                facets: {
                    receipt: string;
                    facet: string;
                    on: boolean;
                }[];
                root: string;
                pair: "edit/build";
                qpuRequired: false;
                route: string;
                statement: string;
                boundary: string;
            };
            lattice: {
                verified: boolean;
                computes: boolean;
                centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
                centerCount: 9;
                channels: {
                    a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                    b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                    key: string;
                    from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                    to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                }[];
                channelCount: 36;
                gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
            layout: {
                readonly Head: {
                    readonly x: number;
                    readonly y: number;
                    readonly shape: "tri";
                };
                readonly Ajna: {
                    readonly x: number;
                    readonly y: number;
                    readonly shape: "tri";
                };
                readonly Throat: {
                    readonly x: number;
                    readonly y: number;
                    readonly shape: "sq";
                };
                readonly G: {
                    readonly x: number;
                    readonly y: number;
                    readonly shape: "dia";
                };
                readonly Heart: {
                    readonly x: number;
                    readonly y: number;
                    readonly shape: "tri";
                };
                readonly Sacral: {
                    readonly x: number;
                    readonly y: number;
                    readonly shape: "sq";
                };
                readonly SolarPlexus: {
                    readonly x: number;
                    readonly y: number;
                    readonly shape: "tri";
                };
                readonly Spleen: {
                    readonly x: number;
                    readonly y: number;
                    readonly shape: "tri";
                };
                readonly Root: {
                    readonly x: number;
                    readonly y: number;
                    readonly shape: "sq";
                };
            };
            definedKeys: string[];
            activatedGates: number[];
            definedCenters: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
            openCenters: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
            hangingGates: number[];
            definitionKind: HdDefinitionKind;
            definitionComponents: number;
            cuspCount: number;
            definedChannelCount: number;
            count: number;
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            root: string;
            route: string;
            pair: string;
            qpuRequired: false;
            statement: string;
            boundary: string;
        };
        hdW7: {
            computes: boolean;
            verified: boolean;
            birthJd: number;
            svg: string;
            svgBytes: number;
            definitionKind: HdDefinitionKind;
            definedCenters: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
            hangingGates: number[];
            panel: {
                computes: boolean;
                verified: boolean;
                birthJd: number;
                chart: {
                    computes: boolean;
                    verified: boolean;
                    birthJd: number;
                    designJd: number;
                    personality: {
                        layer: "design" | "personality";
                        body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                        longitudeDeg: number;
                        gate: number;
                        line: number;
                        cusp: boolean;
                        fastMoverCusp: boolean;
                        receipt: string;
                    }[];
                    design: {
                        layer: "design" | "personality";
                        body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                        longitudeDeg: number;
                        gate: number;
                        line: number;
                        cusp: boolean;
                        fastMoverCusp: boolean;
                        receipt: string;
                    }[];
                    activatedGates: number[];
                    definedChannels: {
                        a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                        b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                        key: string;
                        from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                        to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                    }[];
                    cuspWarnings: {
                        layer: "design" | "personality";
                        body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                        longitudeDeg: number;
                        gate: number;
                        line: number;
                        cusp: boolean;
                        fastMoverCusp: boolean;
                        receipt: string;
                    }[];
                    cuspBandDeg: number;
                    wheel: {
                        verified: boolean;
                        computes: boolean;
                        gateArcDeg: number;
                        lineArcDeg: number;
                        gate41StartDeg: number;
                        designSunArcDeg: number;
                        bodies: ("Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto")[];
                        bodyCount: 13;
                        gates: (2 | 16 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6 | 27 | 54 | 64 | 20 | 46 | 61 | 53 | 10 | 55 | 34 | 21 | 13 | 17 | 12 | 18 | 51 | 23 | 31 | 32 | 42 | 63 | 14 | 41 | 19 | 49 | 30 | 37 | 22 | 36 | 25 | 24 | 35 | 45 | 15 | 52 | 39 | 62 | 56 | 33 | 44 | 28 | 50 | 57 | 48 | 47 | 40 | 59 | 29 | 26 | 11 | 58 | 38 | 60 | 43)[];
                        starts: number[];
                        sample: {
                            gate: number;
                            line: number;
                            index: number;
                            startDeg: number;
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
                    lattice: {
                        verified: boolean;
                        computes: boolean;
                        centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
                        centerCount: 9;
                        channels: {
                            a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                            b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                            key: string;
                            from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                            to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                        }[];
                        channelCount: 36;
                        gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
                    ephCore: {
                        computes: boolean;
                        verified: boolean;
                        birthJd: number;
                        ephemeris: {
                            readonly jd: number;
                            readonly bodies: readonly SealedMeeusBodyLongitude[];
                            readonly sun: number;
                            readonly moon: number;
                            readonly root: string;
                        };
                        design: {
                            readonly birthJd: number;
                            readonly designJd: number;
                            readonly birthSunDeg: number;
                            readonly designSunDeg: number;
                            readonly targetDeg: number;
                            readonly arcErrDeg: number;
                            readonly daysBeforeBirth: number;
                        };
                        sunJ2000: number;
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
                    facets: {
                        receipt: string;
                        facet: string;
                        on: boolean;
                    }[];
                    root: string;
                    statement: string;
                    boundary: string;
                };
                structure: {
                    computes: boolean;
                    verified: boolean;
                    birthJd: number;
                    designJd: number;
                    definedCenters: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
                    openCenters: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
                    hangingGates: number[];
                    definitionComponents: number;
                    definitionKind: HdDefinitionKind;
                    personalityGates: number[];
                    designGates: number[];
                    sharedGates: number[];
                    definedChannelCount: number;
                    activatedGateCount: number;
                    cuspCount: number;
                    chart: {
                        computes: boolean;
                        verified: boolean;
                        birthJd: number;
                        designJd: number;
                        personality: {
                            layer: "design" | "personality";
                            body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                            longitudeDeg: number;
                            gate: number;
                            line: number;
                            cusp: boolean;
                            fastMoverCusp: boolean;
                            receipt: string;
                        }[];
                        design: {
                            layer: "design" | "personality";
                            body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                            longitudeDeg: number;
                            gate: number;
                            line: number;
                            cusp: boolean;
                            fastMoverCusp: boolean;
                            receipt: string;
                        }[];
                        activatedGates: number[];
                        definedChannels: {
                            a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                            b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                            key: string;
                            from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                            to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                        }[];
                        cuspWarnings: {
                            layer: "design" | "personality";
                            body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                            longitudeDeg: number;
                            gate: number;
                            line: number;
                            cusp: boolean;
                            fastMoverCusp: boolean;
                            receipt: string;
                        }[];
                        cuspBandDeg: number;
                        wheel: {
                            verified: boolean;
                            computes: boolean;
                            gateArcDeg: number;
                            lineArcDeg: number;
                            gate41StartDeg: number;
                            designSunArcDeg: number;
                            bodies: ("Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto")[];
                            bodyCount: 13;
                            gates: (2 | 16 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6 | 27 | 54 | 64 | 20 | 46 | 61 | 53 | 10 | 55 | 34 | 21 | 13 | 17 | 12 | 18 | 51 | 23 | 31 | 32 | 42 | 63 | 14 | 41 | 19 | 49 | 30 | 37 | 22 | 36 | 25 | 24 | 35 | 45 | 15 | 52 | 39 | 62 | 56 | 33 | 44 | 28 | 50 | 57 | 48 | 47 | 40 | 59 | 29 | 26 | 11 | 58 | 38 | 60 | 43)[];
                            starts: number[];
                            sample: {
                                gate: number;
                                line: number;
                                index: number;
                                startDeg: number;
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
                        lattice: {
                            verified: boolean;
                            computes: boolean;
                            centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
                            centerCount: 9;
                            channels: {
                                a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                                b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                                key: string;
                                from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                                to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                            }[];
                            channelCount: 36;
                            gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
                        ephCore: {
                            computes: boolean;
                            verified: boolean;
                            birthJd: number;
                            ephemeris: {
                                readonly jd: number;
                                readonly bodies: readonly SealedMeeusBodyLongitude[];
                                readonly sun: number;
                                readonly moon: number;
                                readonly root: string;
                            };
                            design: {
                                readonly birthJd: number;
                                readonly designJd: number;
                                readonly birthSunDeg: number;
                                readonly designSunDeg: number;
                                readonly targetDeg: number;
                                readonly arcErrDeg: number;
                                readonly daysBeforeBirth: number;
                            };
                            sunJ2000: number;
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
                        facets: {
                            receipt: string;
                            facet: string;
                            on: boolean;
                        }[];
                        root: string;
                        statement: string;
                        boundary: string;
                    };
                    lattice: {
                        verified: boolean;
                        computes: boolean;
                        centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
                        centerCount: 9;
                        channels: {
                            a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                            b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                            key: string;
                            from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                            to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                        }[];
                        channelCount: 36;
                        gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
                    wheel: {
                        verified: boolean;
                        computes: boolean;
                        gateArcDeg: number;
                        lineArcDeg: number;
                        gate41StartDeg: number;
                        designSunArcDeg: number;
                        bodies: ("Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto")[];
                        bodyCount: 13;
                        gates: (2 | 16 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6 | 27 | 54 | 64 | 20 | 46 | 61 | 53 | 10 | 55 | 34 | 21 | 13 | 17 | 12 | 18 | 51 | 23 | 31 | 32 | 42 | 63 | 14 | 41 | 19 | 49 | 30 | 37 | 22 | 36 | 25 | 24 | 35 | 45 | 15 | 52 | 39 | 62 | 56 | 33 | 44 | 28 | 50 | 57 | 48 | 47 | 40 | 59 | 29 | 26 | 11 | 58 | 38 | 60 | 43)[];
                        starts: number[];
                        sample: {
                            gate: number;
                            line: number;
                            index: number;
                            startDeg: number;
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
                    count: number;
                    facets: {
                        receipt: string;
                        facet: string;
                        on: boolean;
                    }[];
                    root: string;
                    pair: "edit/build";
                    qpuRequired: false;
                    route: string;
                    statement: string;
                    boundary: string;
                };
                lattice: {
                    verified: boolean;
                    computes: boolean;
                    centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
                    centerCount: 9;
                    channels: {
                        a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                        b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                        key: string;
                        from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                        to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                    }[];
                    channelCount: 36;
                    gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
                layout: {
                    readonly Head: {
                        readonly x: number;
                        readonly y: number;
                        readonly shape: "tri";
                    };
                    readonly Ajna: {
                        readonly x: number;
                        readonly y: number;
                        readonly shape: "tri";
                    };
                    readonly Throat: {
                        readonly x: number;
                        readonly y: number;
                        readonly shape: "sq";
                    };
                    readonly G: {
                        readonly x: number;
                        readonly y: number;
                        readonly shape: "dia";
                    };
                    readonly Heart: {
                        readonly x: number;
                        readonly y: number;
                        readonly shape: "tri";
                    };
                    readonly Sacral: {
                        readonly x: number;
                        readonly y: number;
                        readonly shape: "sq";
                    };
                    readonly SolarPlexus: {
                        readonly x: number;
                        readonly y: number;
                        readonly shape: "tri";
                    };
                    readonly Spleen: {
                        readonly x: number;
                        readonly y: number;
                        readonly shape: "tri";
                    };
                    readonly Root: {
                        readonly x: number;
                        readonly y: number;
                        readonly shape: "sq";
                    };
                };
                definedKeys: string[];
                activatedGates: number[];
                definedCenters: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
                openCenters: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
                hangingGates: number[];
                definitionKind: HdDefinitionKind;
                definitionComponents: number;
                cuspCount: number;
                definedChannelCount: number;
                count: number;
                facets: {
                    receipt: string;
                    facet: string;
                    on: boolean;
                }[];
                root: string;
                route: string;
                pair: string;
                qpuRequired: false;
                statement: string;
                boundary: string;
            };
            count: number;
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            root: string;
            pair: "symbols/quantumise";
            qpuRequired: false;
            physicalFtlClaim: 0;
            route: string;
            cli: string;
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
/** Alias — decode astronomy through VORTEX_SEQUENCE at call time. */
export declare const decodeAstronomyThroughVortexSequence: typeof astronomyDecodedWithTheSequence;
/** One gate — celestial catalog, sequence decode, galaxy compute at call time. */
export declare function planetBatchFacetsComputes(batch: number, matrix?: MindMatrix, at?: number): {
    computes: boolean;
    batch: number;
    planets: string[];
    facets: {
        facet: string;
        on: boolean;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** J2000.0 TT epoch as Julian Day (Meeus). */
export declare const MEEUS_J2000_JD = 2451545;
/** Civil UT sample matching MEEUS_J2000_JD — lattice products (crack-clean). */
export declare const MEEUS_J2000_CIVIL: {
    readonly year: number;
    readonly month: 1;
    readonly day: 1;
    readonly hourUt: number;
};
/** Normalize ecliptic longitude into [0, 360). */
export declare function normalizeEclipticDeg(deg: number): number;
/** Shortest signed degree delta a→b on the circle (−180, 180]. */
export declare function signedAngleDeg(fromDeg: number, toDeg: number): number;
/** Civil UT date → Julian Day (Meeus ch.7). Hour defaults to noon UT. */
export declare function julianDayFromCivil(year: number, month: number, day: number, hourUt?: number): number;
/** Julian centuries from J2000.0 (Meeus T). */
export declare function meeusT(jd: number): number;
/**
 * Apparent geocentric ecliptic longitude of the Sun — Meeus ch.25 reduced (equation of center + aberration/nutation sketch).
 * HONEST tolerance band for facets: ~0.01° near J2000; NOT DE440.
 */
export declare function sunEclipticLongitudeDeg(jd: number): number;
/**
 * Geocentric ecliptic longitude of the Moon — Meeus ch.47 truncated (principal terms only).
 * HONEST: reduced series; facet tolerance ~1° vs full ELP/DE440 — symbolic HD computer grade.
 */
export declare function moonEclipticLongitudeDeg(jd: number): number;
/** Mean lunar ascending node Ω (Meeus) — North Node longitude; South = +180°. */
export declare function lunarNorthNodeLongitudeDeg(jd: number): number;
/** Pluto ecliptic longitude — Meeus polynomial (reduced; dwarf-planet grade). */
export declare function plutoEclipticLongitudeDeg(jd: number): number;
export type SealedMeeusBodyLongitude = {
    readonly name: (typeof RAVE_BODIES_13)[number];
    readonly longitudeDeg: number;
    readonly receipt: string;
};
/**
 * Sealed Meeus reduced-precision geocentric ecliptic longitudes for the 13 HD activation bodies.
 * Design layer is a separate solver (`designLayerFromNatalSun`).
 */
export declare function sealedMeeusEphemerisAt(jd: number): {
    readonly jd: number;
    readonly bodies: readonly SealedMeeusBodyLongitude[];
    readonly sun: number;
    readonly moon: number;
    readonly root: string;
};
/**
 * Design-layer Julian Day: solve Sun(design) = Sun(birth) − 88° of solar arc (not calendar days).
 * Binary search on signed angle residual; ~88 days bracket (Sun ≈ 1°/day).
 */
export declare function designLayerFromNatalSun(birthJd: number): {
    readonly birthJd: number;
    readonly designJd: number;
    readonly birthSunDeg: number;
    readonly designSunDeg: number;
    readonly targetDeg: number;
    readonly arcErrDeg: number;
    readonly daysBeforeBirth: number;
};
/**
 * HD W4 fold — sealed Meeus ephemeris + Design Sun−88° solver with adversarial reference-tolerance facets.
 * HONEST symbolic-system computer grade; cusp/fast-mover warnings live in W5 `humanDesignChartStructureAt`.
 */
export declare function humanDesignEphemerisCore(matrix?: MindMatrix, birthJd?: number): {
    computes: boolean;
    verified: boolean;
    birthJd: number;
    ephemeris: {
        readonly jd: number;
        readonly bodies: readonly SealedMeeusBodyLongitude[];
        readonly sun: number;
        readonly moon: number;
        readonly root: string;
    };
    design: {
        readonly birthJd: number;
        readonly designJd: number;
        readonly birthSunDeg: number;
        readonly designSunDeg: number;
        readonly targetDeg: number;
        readonly arcErrDeg: number;
        readonly daysBeforeBirth: number;
    };
    sunJ2000: number;
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
/**
 * HD W5 chart structure — compose wheel W3 + channels/centers tables + Meeus W4 activations.
 * Cusp warning when a body sits within one line-arc of a gate boundary (fast movers flagged).
 * STRUCTURE ONLY — not a personality / aura / type engine.
 */
export declare function humanDesignChartStructureAt(matrix?: MindMatrix, birthJd?: number): {
    computes: boolean;
    verified: boolean;
    birthJd: number;
    designJd: number;
    personality: {
        layer: "design" | "personality";
        body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
        longitudeDeg: number;
        gate: number;
        line: number;
        cusp: boolean;
        fastMoverCusp: boolean;
        receipt: string;
    }[];
    design: {
        layer: "design" | "personality";
        body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
        longitudeDeg: number;
        gate: number;
        line: number;
        cusp: boolean;
        fastMoverCusp: boolean;
        receipt: string;
    }[];
    activatedGates: number[];
    definedChannels: {
        a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
        b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
        key: string;
        from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
        to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
    }[];
    cuspWarnings: {
        layer: "design" | "personality";
        body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
        longitudeDeg: number;
        gate: number;
        line: number;
        cusp: boolean;
        fastMoverCusp: boolean;
        receipt: string;
    }[];
    cuspBandDeg: number;
    wheel: {
        verified: boolean;
        computes: boolean;
        gateArcDeg: number;
        lineArcDeg: number;
        gate41StartDeg: number;
        designSunArcDeg: number;
        bodies: ("Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto")[];
        bodyCount: 13;
        gates: (2 | 16 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6 | 27 | 54 | 64 | 20 | 46 | 61 | 53 | 10 | 55 | 34 | 21 | 13 | 17 | 12 | 18 | 51 | 23 | 31 | 32 | 42 | 63 | 14 | 41 | 19 | 49 | 30 | 37 | 22 | 36 | 25 | 24 | 35 | 45 | 15 | 52 | 39 | 62 | 56 | 33 | 44 | 28 | 50 | 57 | 48 | 47 | 40 | 59 | 29 | 26 | 11 | 58 | 38 | 60 | 43)[];
        starts: number[];
        sample: {
            gate: number;
            line: number;
            index: number;
            startDeg: number;
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
    lattice: {
        verified: boolean;
        computes: boolean;
        centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
        centerCount: 9;
        channels: {
            a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
            b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
            key: string;
            from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
            to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
        }[];
        channelCount: 36;
        gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
    ephCore: {
        computes: boolean;
        verified: boolean;
        birthJd: number;
        ephemeris: {
            readonly jd: number;
            readonly bodies: readonly SealedMeeusBodyLongitude[];
            readonly sun: number;
            readonly moon: number;
            readonly root: string;
        };
        design: {
            readonly birthJd: number;
            readonly designJd: number;
            readonly birthSunDeg: number;
            readonly designSunDeg: number;
            readonly targetDeg: number;
            readonly arcErrDeg: number;
            readonly daysBeforeBirth: number;
        };
        sunJ2000: number;
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
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export type HdDefinitionKind = 'none' | 'single' | 'split' | 'triple-split' | 'quadruple-split';
/**
 * HD W6 — structure-only chart facets.
 * Composes W3 wheel · W5 RAVE_CHANNELS_36/centers · W5 humanDesignChartStructureAt.
 * Emits defined/open centers · hanging gates · definition connectivity · personality∩design gate sets.
 * NOT type / authority / strategy / aura science.
 */
export declare function humanDesignChartStructureFacetsAt(matrix?: MindMatrix, birthJd?: number): {
    computes: boolean;
    verified: boolean;
    birthJd: number;
    designJd: number;
    definedCenters: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
    openCenters: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
    hangingGates: number[];
    definitionComponents: number;
    definitionKind: HdDefinitionKind;
    personalityGates: number[];
    designGates: number[];
    sharedGates: number[];
    definedChannelCount: number;
    activatedGateCount: number;
    cuspCount: number;
    chart: {
        computes: boolean;
        verified: boolean;
        birthJd: number;
        designJd: number;
        personality: {
            layer: "design" | "personality";
            body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
            longitudeDeg: number;
            gate: number;
            line: number;
            cusp: boolean;
            fastMoverCusp: boolean;
            receipt: string;
        }[];
        design: {
            layer: "design" | "personality";
            body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
            longitudeDeg: number;
            gate: number;
            line: number;
            cusp: boolean;
            fastMoverCusp: boolean;
            receipt: string;
        }[];
        activatedGates: number[];
        definedChannels: {
            a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
            b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
            key: string;
            from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
            to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
        }[];
        cuspWarnings: {
            layer: "design" | "personality";
            body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
            longitudeDeg: number;
            gate: number;
            line: number;
            cusp: boolean;
            fastMoverCusp: boolean;
            receipt: string;
        }[];
        cuspBandDeg: number;
        wheel: {
            verified: boolean;
            computes: boolean;
            gateArcDeg: number;
            lineArcDeg: number;
            gate41StartDeg: number;
            designSunArcDeg: number;
            bodies: ("Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto")[];
            bodyCount: 13;
            gates: (2 | 16 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6 | 27 | 54 | 64 | 20 | 46 | 61 | 53 | 10 | 55 | 34 | 21 | 13 | 17 | 12 | 18 | 51 | 23 | 31 | 32 | 42 | 63 | 14 | 41 | 19 | 49 | 30 | 37 | 22 | 36 | 25 | 24 | 35 | 45 | 15 | 52 | 39 | 62 | 56 | 33 | 44 | 28 | 50 | 57 | 48 | 47 | 40 | 59 | 29 | 26 | 11 | 58 | 38 | 60 | 43)[];
            starts: number[];
            sample: {
                gate: number;
                line: number;
                index: number;
                startDeg: number;
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
        lattice: {
            verified: boolean;
            computes: boolean;
            centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
            centerCount: 9;
            channels: {
                a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                key: string;
                from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
            }[];
            channelCount: 36;
            gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
        ephCore: {
            computes: boolean;
            verified: boolean;
            birthJd: number;
            ephemeris: {
                readonly jd: number;
                readonly bodies: readonly SealedMeeusBodyLongitude[];
                readonly sun: number;
                readonly moon: number;
                readonly root: string;
            };
            design: {
                readonly birthJd: number;
                readonly designJd: number;
                readonly birthSunDeg: number;
                readonly designSunDeg: number;
                readonly targetDeg: number;
                readonly arcErrDeg: number;
                readonly daysBeforeBirth: number;
            };
            sunJ2000: number;
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
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
    lattice: {
        verified: boolean;
        computes: boolean;
        centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
        centerCount: 9;
        channels: {
            a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
            b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
            key: string;
            from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
            to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
        }[];
        channelCount: 36;
        gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
    wheel: {
        verified: boolean;
        computes: boolean;
        gateArcDeg: number;
        lineArcDeg: number;
        gate41StartDeg: number;
        designSunArcDeg: number;
        bodies: ("Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto")[];
        bodyCount: 13;
        gates: (2 | 16 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6 | 27 | 54 | 64 | 20 | 46 | 61 | 53 | 10 | 55 | 34 | 21 | 13 | 17 | 12 | 18 | 51 | 23 | 31 | 32 | 42 | 63 | 14 | 41 | 19 | 49 | 30 | 37 | 22 | 36 | 25 | 24 | 35 | 45 | 15 | 52 | 39 | 62 | 56 | 33 | 44 | 28 | 50 | 57 | 48 | 47 | 40 | 59 | 29 | 26 | 11 | 58 | 38 | 60 | 43)[];
        starts: number[];
        sample: {
            gate: number;
            line: number;
            index: number;
            startDeg: number;
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
    count: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "edit/build";
    qpuRequired: false;
    route: string;
    statement: string;
    boundary: string;
};
/** CLI — HD W6 structure facets (compose W3–W5). Pair: edit/build · waves/build. */
export declare function runHumanDesignChartStructureFacetsW6Exit(_root?: string, argv?: readonly string[]): number;
/** Normalized BodyGraph center anchors — lattice fractions only (structure layout, not aura geometry). */
export declare const RAVE_CENTER_LAYOUT: {
    readonly Head: {
        readonly x: number;
        readonly y: number;
        readonly shape: "tri";
    };
    readonly Ajna: {
        readonly x: number;
        readonly y: number;
        readonly shape: "tri";
    };
    readonly Throat: {
        readonly x: number;
        readonly y: number;
        readonly shape: "sq";
    };
    readonly G: {
        readonly x: number;
        readonly y: number;
        readonly shape: "dia";
    };
    readonly Heart: {
        readonly x: number;
        readonly y: number;
        readonly shape: "tri";
    };
    readonly Sacral: {
        readonly x: number;
        readonly y: number;
        readonly shape: "sq";
    };
    readonly SolarPlexus: {
        readonly x: number;
        readonly y: number;
        readonly shape: "tri";
    };
    readonly Spleen: {
        readonly x: number;
        readonly y: number;
        readonly shape: "tri";
    };
    readonly Root: {
        readonly x: number;
        readonly y: number;
        readonly shape: "sq";
    };
};
/** HD BodyGraph Vue panel — sealed W5/W6 chart structure → browser paint (JD-parameter structure demo). */
export declare function humanDesignBodyGraphPanelComputes(matrix?: MindMatrix, birthJd?: number): {
    computes: boolean;
    verified: boolean;
    birthJd: number;
    chart: {
        computes: boolean;
        verified: boolean;
        birthJd: number;
        designJd: number;
        personality: {
            layer: "design" | "personality";
            body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
            longitudeDeg: number;
            gate: number;
            line: number;
            cusp: boolean;
            fastMoverCusp: boolean;
            receipt: string;
        }[];
        design: {
            layer: "design" | "personality";
            body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
            longitudeDeg: number;
            gate: number;
            line: number;
            cusp: boolean;
            fastMoverCusp: boolean;
            receipt: string;
        }[];
        activatedGates: number[];
        definedChannels: {
            a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
            b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
            key: string;
            from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
            to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
        }[];
        cuspWarnings: {
            layer: "design" | "personality";
            body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
            longitudeDeg: number;
            gate: number;
            line: number;
            cusp: boolean;
            fastMoverCusp: boolean;
            receipt: string;
        }[];
        cuspBandDeg: number;
        wheel: {
            verified: boolean;
            computes: boolean;
            gateArcDeg: number;
            lineArcDeg: number;
            gate41StartDeg: number;
            designSunArcDeg: number;
            bodies: ("Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto")[];
            bodyCount: 13;
            gates: (2 | 16 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6 | 27 | 54 | 64 | 20 | 46 | 61 | 53 | 10 | 55 | 34 | 21 | 13 | 17 | 12 | 18 | 51 | 23 | 31 | 32 | 42 | 63 | 14 | 41 | 19 | 49 | 30 | 37 | 22 | 36 | 25 | 24 | 35 | 45 | 15 | 52 | 39 | 62 | 56 | 33 | 44 | 28 | 50 | 57 | 48 | 47 | 40 | 59 | 29 | 26 | 11 | 58 | 38 | 60 | 43)[];
            starts: number[];
            sample: {
                gate: number;
                line: number;
                index: number;
                startDeg: number;
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
        lattice: {
            verified: boolean;
            computes: boolean;
            centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
            centerCount: 9;
            channels: {
                a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                key: string;
                from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
            }[];
            channelCount: 36;
            gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
        ephCore: {
            computes: boolean;
            verified: boolean;
            birthJd: number;
            ephemeris: {
                readonly jd: number;
                readonly bodies: readonly SealedMeeusBodyLongitude[];
                readonly sun: number;
                readonly moon: number;
                readonly root: string;
            };
            design: {
                readonly birthJd: number;
                readonly designJd: number;
                readonly birthSunDeg: number;
                readonly designSunDeg: number;
                readonly targetDeg: number;
                readonly arcErrDeg: number;
                readonly daysBeforeBirth: number;
            };
            sunJ2000: number;
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
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
    structure: {
        computes: boolean;
        verified: boolean;
        birthJd: number;
        designJd: number;
        definedCenters: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
        openCenters: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
        hangingGates: number[];
        definitionComponents: number;
        definitionKind: HdDefinitionKind;
        personalityGates: number[];
        designGates: number[];
        sharedGates: number[];
        definedChannelCount: number;
        activatedGateCount: number;
        cuspCount: number;
        chart: {
            computes: boolean;
            verified: boolean;
            birthJd: number;
            designJd: number;
            personality: {
                layer: "design" | "personality";
                body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                longitudeDeg: number;
                gate: number;
                line: number;
                cusp: boolean;
                fastMoverCusp: boolean;
                receipt: string;
            }[];
            design: {
                layer: "design" | "personality";
                body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                longitudeDeg: number;
                gate: number;
                line: number;
                cusp: boolean;
                fastMoverCusp: boolean;
                receipt: string;
            }[];
            activatedGates: number[];
            definedChannels: {
                a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                key: string;
                from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
            }[];
            cuspWarnings: {
                layer: "design" | "personality";
                body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                longitudeDeg: number;
                gate: number;
                line: number;
                cusp: boolean;
                fastMoverCusp: boolean;
                receipt: string;
            }[];
            cuspBandDeg: number;
            wheel: {
                verified: boolean;
                computes: boolean;
                gateArcDeg: number;
                lineArcDeg: number;
                gate41StartDeg: number;
                designSunArcDeg: number;
                bodies: ("Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto")[];
                bodyCount: 13;
                gates: (2 | 16 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6 | 27 | 54 | 64 | 20 | 46 | 61 | 53 | 10 | 55 | 34 | 21 | 13 | 17 | 12 | 18 | 51 | 23 | 31 | 32 | 42 | 63 | 14 | 41 | 19 | 49 | 30 | 37 | 22 | 36 | 25 | 24 | 35 | 45 | 15 | 52 | 39 | 62 | 56 | 33 | 44 | 28 | 50 | 57 | 48 | 47 | 40 | 59 | 29 | 26 | 11 | 58 | 38 | 60 | 43)[];
                starts: number[];
                sample: {
                    gate: number;
                    line: number;
                    index: number;
                    startDeg: number;
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
            lattice: {
                verified: boolean;
                computes: boolean;
                centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
                centerCount: 9;
                channels: {
                    a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                    b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                    key: string;
                    from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                    to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                }[];
                channelCount: 36;
                gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
            ephCore: {
                computes: boolean;
                verified: boolean;
                birthJd: number;
                ephemeris: {
                    readonly jd: number;
                    readonly bodies: readonly SealedMeeusBodyLongitude[];
                    readonly sun: number;
                    readonly moon: number;
                    readonly root: string;
                };
                design: {
                    readonly birthJd: number;
                    readonly designJd: number;
                    readonly birthSunDeg: number;
                    readonly designSunDeg: number;
                    readonly targetDeg: number;
                    readonly arcErrDeg: number;
                    readonly daysBeforeBirth: number;
                };
                sunJ2000: number;
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
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            root: string;
            statement: string;
            boundary: string;
        };
        lattice: {
            verified: boolean;
            computes: boolean;
            centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
            centerCount: 9;
            channels: {
                a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                key: string;
                from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
            }[];
            channelCount: 36;
            gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
        wheel: {
            verified: boolean;
            computes: boolean;
            gateArcDeg: number;
            lineArcDeg: number;
            gate41StartDeg: number;
            designSunArcDeg: number;
            bodies: ("Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto")[];
            bodyCount: 13;
            gates: (2 | 16 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6 | 27 | 54 | 64 | 20 | 46 | 61 | 53 | 10 | 55 | 34 | 21 | 13 | 17 | 12 | 18 | 51 | 23 | 31 | 32 | 42 | 63 | 14 | 41 | 19 | 49 | 30 | 37 | 22 | 36 | 25 | 24 | 35 | 45 | 15 | 52 | 39 | 62 | 56 | 33 | 44 | 28 | 50 | 57 | 48 | 47 | 40 | 59 | 29 | 26 | 11 | 58 | 38 | 60 | 43)[];
            starts: number[];
            sample: {
                gate: number;
                line: number;
                index: number;
                startDeg: number;
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
        count: number;
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        pair: "edit/build";
        qpuRequired: false;
        route: string;
        statement: string;
        boundary: string;
    };
    lattice: {
        verified: boolean;
        computes: boolean;
        centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
        centerCount: 9;
        channels: {
            a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
            b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
            key: string;
            from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
            to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
        }[];
        channelCount: 36;
        gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
    layout: {
        readonly Head: {
            readonly x: number;
            readonly y: number;
            readonly shape: "tri";
        };
        readonly Ajna: {
            readonly x: number;
            readonly y: number;
            readonly shape: "tri";
        };
        readonly Throat: {
            readonly x: number;
            readonly y: number;
            readonly shape: "sq";
        };
        readonly G: {
            readonly x: number;
            readonly y: number;
            readonly shape: "dia";
        };
        readonly Heart: {
            readonly x: number;
            readonly y: number;
            readonly shape: "tri";
        };
        readonly Sacral: {
            readonly x: number;
            readonly y: number;
            readonly shape: "sq";
        };
        readonly SolarPlexus: {
            readonly x: number;
            readonly y: number;
            readonly shape: "tri";
        };
        readonly Spleen: {
            readonly x: number;
            readonly y: number;
            readonly shape: "tri";
        };
        readonly Root: {
            readonly x: number;
            readonly y: number;
            readonly shape: "sq";
        };
    };
    definedKeys: string[];
    activatedGates: number[];
    definedCenters: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
    openCenters: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
    hangingGates: number[];
    definitionKind: HdDefinitionKind;
    definitionComponents: number;
    cuspCount: number;
    definedChannelCount: number;
    count: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    route: string;
    pair: string;
    qpuRequired: false;
    statement: string;
    boundary: string;
};
/**
 * BodyGraph canvas paint — Vue mounts only call this (no inline chart math).
 * HONEST: schematic center/channel layout + sealed activation highlight; not a commercial BodyGraph product.
 */
export declare function drawHumanDesignBodyGraph(ctx: CanvasRenderingContext2D, w: number, h: number, panel: ReturnType<typeof humanDesignBodyGraphPanelComputes>, opts?: {
    dark?: boolean;
    reduce?: boolean;
    at?: number;
}): void;
/**
 * HD W7 — BodyGraph structure SVG emitter (sealed layout + W5/W6 activations).
 * HONEST: schematic SMIL-safe SVG for /en/spirit + symbols inventory — not commercial BodyGraph, not aura/type.
 */
export declare function humanDesignBodyGraphSvg(matrix?: MindMatrix, birthJd?: number, opts?: {
    size?: number;
    animate?: boolean;
    dark?: boolean;
}): string;
/**
 * HD W7 fold — BodyGraph SVG emitter recomputes from sealed W5/W6 panel + layout.
 * Pair: symbols/quantumise · CLI npm run quantum:hd-w7-bodygraph-svg · route /en/spirit#human-design-bodygraph
 */
export declare function humanDesignBodyGraphSvgW7(matrix?: MindMatrix, birthJd?: number): {
    computes: boolean;
    verified: boolean;
    birthJd: number;
    svg: string;
    svgBytes: number;
    definitionKind: HdDefinitionKind;
    definedCenters: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
    hangingGates: number[];
    panel: {
        computes: boolean;
        verified: boolean;
        birthJd: number;
        chart: {
            computes: boolean;
            verified: boolean;
            birthJd: number;
            designJd: number;
            personality: {
                layer: "design" | "personality";
                body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                longitudeDeg: number;
                gate: number;
                line: number;
                cusp: boolean;
                fastMoverCusp: boolean;
                receipt: string;
            }[];
            design: {
                layer: "design" | "personality";
                body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                longitudeDeg: number;
                gate: number;
                line: number;
                cusp: boolean;
                fastMoverCusp: boolean;
                receipt: string;
            }[];
            activatedGates: number[];
            definedChannels: {
                a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                key: string;
                from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
            }[];
            cuspWarnings: {
                layer: "design" | "personality";
                body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                longitudeDeg: number;
                gate: number;
                line: number;
                cusp: boolean;
                fastMoverCusp: boolean;
                receipt: string;
            }[];
            cuspBandDeg: number;
            wheel: {
                verified: boolean;
                computes: boolean;
                gateArcDeg: number;
                lineArcDeg: number;
                gate41StartDeg: number;
                designSunArcDeg: number;
                bodies: ("Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto")[];
                bodyCount: 13;
                gates: (2 | 16 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6 | 27 | 54 | 64 | 20 | 46 | 61 | 53 | 10 | 55 | 34 | 21 | 13 | 17 | 12 | 18 | 51 | 23 | 31 | 32 | 42 | 63 | 14 | 41 | 19 | 49 | 30 | 37 | 22 | 36 | 25 | 24 | 35 | 45 | 15 | 52 | 39 | 62 | 56 | 33 | 44 | 28 | 50 | 57 | 48 | 47 | 40 | 59 | 29 | 26 | 11 | 58 | 38 | 60 | 43)[];
                starts: number[];
                sample: {
                    gate: number;
                    line: number;
                    index: number;
                    startDeg: number;
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
            lattice: {
                verified: boolean;
                computes: boolean;
                centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
                centerCount: 9;
                channels: {
                    a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                    b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                    key: string;
                    from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                    to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                }[];
                channelCount: 36;
                gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
            ephCore: {
                computes: boolean;
                verified: boolean;
                birthJd: number;
                ephemeris: {
                    readonly jd: number;
                    readonly bodies: readonly SealedMeeusBodyLongitude[];
                    readonly sun: number;
                    readonly moon: number;
                    readonly root: string;
                };
                design: {
                    readonly birthJd: number;
                    readonly designJd: number;
                    readonly birthSunDeg: number;
                    readonly designSunDeg: number;
                    readonly targetDeg: number;
                    readonly arcErrDeg: number;
                    readonly daysBeforeBirth: number;
                };
                sunJ2000: number;
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
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            root: string;
            statement: string;
            boundary: string;
        };
        structure: {
            computes: boolean;
            verified: boolean;
            birthJd: number;
            designJd: number;
            definedCenters: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
            openCenters: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
            hangingGates: number[];
            definitionComponents: number;
            definitionKind: HdDefinitionKind;
            personalityGates: number[];
            designGates: number[];
            sharedGates: number[];
            definedChannelCount: number;
            activatedGateCount: number;
            cuspCount: number;
            chart: {
                computes: boolean;
                verified: boolean;
                birthJd: number;
                designJd: number;
                personality: {
                    layer: "design" | "personality";
                    body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                    longitudeDeg: number;
                    gate: number;
                    line: number;
                    cusp: boolean;
                    fastMoverCusp: boolean;
                    receipt: string;
                }[];
                design: {
                    layer: "design" | "personality";
                    body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                    longitudeDeg: number;
                    gate: number;
                    line: number;
                    cusp: boolean;
                    fastMoverCusp: boolean;
                    receipt: string;
                }[];
                activatedGates: number[];
                definedChannels: {
                    a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                    b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                    key: string;
                    from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                    to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                }[];
                cuspWarnings: {
                    layer: "design" | "personality";
                    body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                    longitudeDeg: number;
                    gate: number;
                    line: number;
                    cusp: boolean;
                    fastMoverCusp: boolean;
                    receipt: string;
                }[];
                cuspBandDeg: number;
                wheel: {
                    verified: boolean;
                    computes: boolean;
                    gateArcDeg: number;
                    lineArcDeg: number;
                    gate41StartDeg: number;
                    designSunArcDeg: number;
                    bodies: ("Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto")[];
                    bodyCount: 13;
                    gates: (2 | 16 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6 | 27 | 54 | 64 | 20 | 46 | 61 | 53 | 10 | 55 | 34 | 21 | 13 | 17 | 12 | 18 | 51 | 23 | 31 | 32 | 42 | 63 | 14 | 41 | 19 | 49 | 30 | 37 | 22 | 36 | 25 | 24 | 35 | 45 | 15 | 52 | 39 | 62 | 56 | 33 | 44 | 28 | 50 | 57 | 48 | 47 | 40 | 59 | 29 | 26 | 11 | 58 | 38 | 60 | 43)[];
                    starts: number[];
                    sample: {
                        gate: number;
                        line: number;
                        index: number;
                        startDeg: number;
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
                lattice: {
                    verified: boolean;
                    computes: boolean;
                    centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
                    centerCount: 9;
                    channels: {
                        a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                        b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                        key: string;
                        from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                        to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                    }[];
                    channelCount: 36;
                    gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
                ephCore: {
                    computes: boolean;
                    verified: boolean;
                    birthJd: number;
                    ephemeris: {
                        readonly jd: number;
                        readonly bodies: readonly SealedMeeusBodyLongitude[];
                        readonly sun: number;
                        readonly moon: number;
                        readonly root: string;
                    };
                    design: {
                        readonly birthJd: number;
                        readonly designJd: number;
                        readonly birthSunDeg: number;
                        readonly designSunDeg: number;
                        readonly targetDeg: number;
                        readonly arcErrDeg: number;
                        readonly daysBeforeBirth: number;
                    };
                    sunJ2000: number;
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
                facets: {
                    receipt: string;
                    facet: string;
                    on: boolean;
                }[];
                root: string;
                statement: string;
                boundary: string;
            };
            lattice: {
                verified: boolean;
                computes: boolean;
                centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
                centerCount: 9;
                channels: {
                    a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                    b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                    key: string;
                    from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                    to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                }[];
                channelCount: 36;
                gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
            wheel: {
                verified: boolean;
                computes: boolean;
                gateArcDeg: number;
                lineArcDeg: number;
                gate41StartDeg: number;
                designSunArcDeg: number;
                bodies: ("Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto")[];
                bodyCount: 13;
                gates: (2 | 16 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6 | 27 | 54 | 64 | 20 | 46 | 61 | 53 | 10 | 55 | 34 | 21 | 13 | 17 | 12 | 18 | 51 | 23 | 31 | 32 | 42 | 63 | 14 | 41 | 19 | 49 | 30 | 37 | 22 | 36 | 25 | 24 | 35 | 45 | 15 | 52 | 39 | 62 | 56 | 33 | 44 | 28 | 50 | 57 | 48 | 47 | 40 | 59 | 29 | 26 | 11 | 58 | 38 | 60 | 43)[];
                starts: number[];
                sample: {
                    gate: number;
                    line: number;
                    index: number;
                    startDeg: number;
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
            count: number;
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            root: string;
            pair: "edit/build";
            qpuRequired: false;
            route: string;
            statement: string;
            boundary: string;
        };
        lattice: {
            verified: boolean;
            computes: boolean;
            centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
            centerCount: 9;
            channels: {
                a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                key: string;
                from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
            }[];
            channelCount: 36;
            gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
        layout: {
            readonly Head: {
                readonly x: number;
                readonly y: number;
                readonly shape: "tri";
            };
            readonly Ajna: {
                readonly x: number;
                readonly y: number;
                readonly shape: "tri";
            };
            readonly Throat: {
                readonly x: number;
                readonly y: number;
                readonly shape: "sq";
            };
            readonly G: {
                readonly x: number;
                readonly y: number;
                readonly shape: "dia";
            };
            readonly Heart: {
                readonly x: number;
                readonly y: number;
                readonly shape: "tri";
            };
            readonly Sacral: {
                readonly x: number;
                readonly y: number;
                readonly shape: "sq";
            };
            readonly SolarPlexus: {
                readonly x: number;
                readonly y: number;
                readonly shape: "tri";
            };
            readonly Spleen: {
                readonly x: number;
                readonly y: number;
                readonly shape: "tri";
            };
            readonly Root: {
                readonly x: number;
                readonly y: number;
                readonly shape: "sq";
            };
        };
        definedKeys: string[];
        activatedGates: number[];
        definedCenters: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
        openCenters: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
        hangingGates: number[];
        definitionKind: HdDefinitionKind;
        definitionComponents: number;
        cuspCount: number;
        definedChannelCount: number;
        count: number;
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        route: string;
        pair: string;
        qpuRequired: false;
        statement: string;
        boundary: string;
    };
    count: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "symbols/quantumise";
    qpuRequired: false;
    physicalFtlClaim: 0;
    route: string;
    cli: string;
    statement: string;
    boundary: string;
};
/** CLI — HD W7 BodyGraph SVG emitter. Pair: symbols/quantumise · waves/build. */
export declare function runHumanDesignBodyGraphSvgW7Exit(_root?: string, argv?: readonly string[]): number;
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
        phaseDigit: 2 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6;
        digitFolderDigit: number;
        mappings: {
            name: string;
            kind: "planet" | "star" | "satellite" | "major-moon";
            vortexSlot: number;
            vortexDigit: 2 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6;
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
                betti: (4 | 1)[];
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
                waves: import("../../../types").WaveCoordination;
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
                            realm: "proven" | "animated" | "presented";
                            trinityLeg: "fold" | "cross" | "weave";
                            glyph: string;
                        }[];
                        hexEvenSteps: number[];
                        wiringSlugs: string[];
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
                            realm: "proven" | "animated" | "presented";
                            trinityLeg: "fold" | "cross" | "weave";
                            glyph: string;
                        }[];
                        hexEvenSteps: number[];
                        wiringSlugs: string[];
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
            waves: import("../../../types").WaveCoordination;
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
                    tail: "language" | "ui" | "fusion" | "site" | "types" | "rosetta" | "routes" | "learning" | "iching";
                    action: "language" | "ui" | "fusion" | "site" | "types" | "rosetta" | "routes" | "learning" | "iching";
                    ray: number;
                    rayMeta: {
                        readonly ray: 0;
                        readonly glyph: "Ⰰ";
                        readonly nameEn: "Origin";
                        readonly nameBg: "Произход";
                        readonly domain: "origin";
                        readonly hue: 0;
                    } | {
                        readonly ray: 1;
                        readonly glyph: "Ⰲ";
                        readonly nameEn: "Proof";
                        readonly nameBg: "Доказателства";
                        readonly domain: "expression";
                        readonly hue: 51;
                    } | {
                        readonly ray: 2;
                        readonly glyph: "Ⰴ";
                        readonly nameEn: "Explore";
                        readonly nameBg: "Изследване";
                        readonly domain: "knowledge";
                        readonly hue: 102;
                    } | {
                        readonly ray: 3;
                        readonly glyph: "Ⰶ";
                        readonly nameEn: "Learn";
                        readonly nameBg: "Обучение";
                        readonly domain: "nature";
                        readonly hue: 154;
                    } | {
                        readonly ray: 4;
                        readonly glyph: "Ⰹ";
                        readonly nameEn: "Apps";
                        readonly nameBg: "Приложения";
                        readonly domain: "computation";
                        readonly hue: 205;
                    } | {
                        readonly ray: 5;
                        readonly glyph: "Ⰿ";
                        readonly nameEn: "Frontier";
                        readonly nameBg: "Граници";
                        readonly domain: "geometry";
                        readonly hue: 257;
                    } | {
                        readonly ray: 6;
                        readonly glyph: "Ⱄ";
                        readonly nameEn: "Reference";
                        readonly nameBg: "Справочник";
                        readonly domain: "language";
                        readonly hue: 308;
                    };
                    legacyWind: string;
                    legacyMind: string;
                    legacyBare: string;
                    schemaTarget: string;
                    canonical: string;
                    importBarrel: "language" | "ui" | "fusion" | "site" | "types" | "rosetta" | "routes" | "learning" | "iching";
                    wave: 2 | 1;
                    applied: boolean;
                    receipt: string;
                }[];
                moveTable: {
                    from: string;
                    to: string;
                    wave: 2 | 1;
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
            core: {
                computes: boolean;
                at: number;
                core: {
                    computes: boolean;
                    at: number;
                    surfaces: import("../../../quantum/apps").RosettaCoreSurface[];
                    inventory: {
                        core: {
                            label: string;
                            kind: import("../../../quantum/apps").RosettaCoreSurfaceKind;
                            ray: number;
                            address: string;
                        }[];
                        parallel: readonly [];
                        hubs: {
                            slug: "learn" | "reference" | "proof" | "explore" | "frontier" | "origin" | "apps";
                            ray: number;
                            route: string;
                            hue: number;
                        }[];
                    };
                    hubs: readonly import("../../../3/7").RosettaRayHub[];
                    raysUsed: number;
                    kinds: readonly ["route", "hub", "compute", "nav", "tool", "app", "projection"];
                    resolve: (label: string, kind?: import("../../../quantum/apps").RosettaCoreSurfaceKind) => import("../../../quantum/apps").RosettaCoreSurface;
                    shelve: typeof __ns_up_learning.rosettaShelve;
                    byRay: (ray: number) => import("../../../quantum/apps").RosettaCoreSurface[];
                    resolveRoute: (route: string) => {
                        surface: import("../../../quantum/apps").RosettaCoreSurface;
                        address: string;
                        computed: boolean;
                        route: string;
                        slug: string;
                        ray: number;
                        rayMeta: {
                            readonly ray: 0;
                            readonly glyph: "Ⰰ";
                            readonly nameEn: "Origin";
                            readonly nameBg: "Произход";
                            readonly domain: "origin";
                            readonly hue: 0;
                        } | {
                            readonly ray: 1;
                            readonly glyph: "Ⰲ";
                            readonly nameEn: "Proof";
                            readonly nameBg: "Доказателства";
                            readonly domain: "expression";
                            readonly hue: 51;
                        } | {
                            readonly ray: 2;
                            readonly glyph: "Ⰴ";
                            readonly nameEn: "Explore";
                            readonly nameBg: "Изследване";
                            readonly domain: "knowledge";
                            readonly hue: 102;
                        } | {
                            readonly ray: 3;
                            readonly glyph: "Ⰶ";
                            readonly nameEn: "Learn";
                            readonly nameBg: "Обучение";
                            readonly domain: "nature";
                            readonly hue: 154;
                        } | {
                            readonly ray: 4;
                            readonly glyph: "Ⰹ";
                            readonly nameEn: "Apps";
                            readonly nameBg: "Приложения";
                            readonly domain: "computation";
                            readonly hue: 205;
                        } | {
                            readonly ray: 5;
                            readonly glyph: "Ⰿ";
                            readonly nameEn: "Frontier";
                            readonly nameBg: "Граници";
                            readonly domain: "geometry";
                            readonly hue: 257;
                        } | {
                            readonly ray: 6;
                            readonly glyph: "Ⱄ";
                            readonly nameEn: "Reference";
                            readonly nameBg: "Справочник";
                            readonly domain: "language";
                            readonly hue: 308;
                        };
                        station: number;
                        crossPair: string;
                        glaAddress: string;
                        navigation: {
                            rayLabel: "Origin" | "Proof" | "Explore" | "Learn" | "Apps" | "Frontier" | "Reference";
                            rayLabelBg: "Произход" | "Доказателства" | "Изследване" | "Обучение" | "Приложения" | "Граници" | "Справочник";
                            rayGlyph: "Ⰰ" | "Ⰲ" | "Ⰴ" | "Ⰶ" | "Ⰹ" | "Ⰿ" | "Ⱄ";
                            rayDomain: "geometry" | "origin" | "expression" | "knowledge" | "nature" | "computation" | "language";
                            siblings: import("../../../types").ConceptCommandName[];
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
                    resolveProjection: (label: string) => {
                        surface: import("../../../quantum/apps").RosettaCoreSurface;
                        phase: number;
                        hue: number;
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
                    };
                    facets: {
                        receipt: string;
                        facet: string;
                        on: boolean;
                    }[];
                    root: string;
                    pair: "rosetta/core";
                    cli: string;
                    statement: string;
                    boundary: string;
                };
                slots: {
                    ray: number;
                    kind: "hub" | "route" | "compute" | "nav" | "tool" | "app" | "projection";
                    pageKind: import("../../../3/7").RosettaComputationType;
                    vortexDigit: 2 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6;
                    receipt: string;
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
                    tag: "geometry" | "origin" | "expression" | "knowledge" | "nature" | "computation" | "language";
                    ray: number;
                    name: "Origin" | "Proof" | "Explore" | "Learn" | "Apps" | "Frontier" | "Reference";
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
                        readonly nameEn: "Origin";
                        readonly nameBg: "Произход";
                        readonly domain: "origin";
                        readonly hue: 0;
                    } | {
                        readonly ray: 1;
                        readonly glyph: "Ⰲ";
                        readonly nameEn: "Proof";
                        readonly nameBg: "Доказателства";
                        readonly domain: "expression";
                        readonly hue: 51;
                    } | {
                        readonly ray: 2;
                        readonly glyph: "Ⰴ";
                        readonly nameEn: "Explore";
                        readonly nameBg: "Изследване";
                        readonly domain: "knowledge";
                        readonly hue: 102;
                    } | {
                        readonly ray: 3;
                        readonly glyph: "Ⰶ";
                        readonly nameEn: "Learn";
                        readonly nameBg: "Обучение";
                        readonly domain: "nature";
                        readonly hue: 154;
                    } | {
                        readonly ray: 4;
                        readonly glyph: "Ⰹ";
                        readonly nameEn: "Apps";
                        readonly nameBg: "Приложения";
                        readonly domain: "computation";
                        readonly hue: 205;
                    } | {
                        readonly ray: 5;
                        readonly glyph: "Ⰿ";
                        readonly nameEn: "Frontier";
                        readonly nameBg: "Граници";
                        readonly domain: "geometry";
                        readonly hue: 257;
                    } | {
                        readonly ray: 6;
                        readonly glyph: "Ⱄ";
                        readonly nameEn: "Reference";
                        readonly nameBg: "Справочник";
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
                    readonly nameEn: "Origin";
                    readonly nameBg: "Произход";
                    readonly domain: "origin";
                    readonly hue: 0;
                } | {
                    readonly ray: 1;
                    readonly glyph: "Ⰲ";
                    readonly nameEn: "Proof";
                    readonly nameBg: "Доказателства";
                    readonly domain: "expression";
                    readonly hue: 51;
                } | {
                    readonly ray: 2;
                    readonly glyph: "Ⰴ";
                    readonly nameEn: "Explore";
                    readonly nameBg: "Изследване";
                    readonly domain: "knowledge";
                    readonly hue: 102;
                } | {
                    readonly ray: 3;
                    readonly glyph: "Ⰶ";
                    readonly nameEn: "Learn";
                    readonly nameBg: "Обучение";
                    readonly domain: "nature";
                    readonly hue: 154;
                } | {
                    readonly ray: 4;
                    readonly glyph: "Ⰹ";
                    readonly nameEn: "Apps";
                    readonly nameBg: "Приложения";
                    readonly domain: "computation";
                    readonly hue: 205;
                } | {
                    readonly ray: 5;
                    readonly glyph: "Ⰿ";
                    readonly nameEn: "Frontier";
                    readonly nameBg: "Граници";
                    readonly domain: "geometry";
                    readonly hue: 257;
                } | {
                    readonly ray: 6;
                    readonly glyph: "Ⱄ";
                    readonly nameEn: "Reference";
                    readonly nameBg: "Справочник";
                    readonly domain: "language";
                    readonly hue: 308;
                };
                station: number;
                crossPair: string;
                glaAddress: string;
                navigation: {
                    rayLabel: "Origin" | "Proof" | "Explore" | "Learn" | "Apps" | "Frontier" | "Reference";
                    rayLabelBg: "Произход" | "Доказателства" | "Изследване" | "Обучение" | "Приложения" | "Граници" | "Справочник";
                    rayGlyph: "Ⰰ" | "Ⰲ" | "Ⰴ" | "Ⰶ" | "Ⰹ" | "Ⰿ" | "Ⱄ";
                    rayDomain: "geometry" | "origin" | "expression" | "knowledge" | "nature" | "computation" | "language";
                    siblings: import("../../../types").ConceptCommandName[];
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
                    betti: (4 | 1)[];
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
                betti: (4 | 1)[];
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
    hdEph: {
        computes: boolean;
        verified: boolean;
        birthJd: number;
        ephemeris: {
            readonly jd: number;
            readonly bodies: readonly SealedMeeusBodyLongitude[];
            readonly sun: number;
            readonly moon: number;
            readonly root: string;
        };
        design: {
            readonly birthJd: number;
            readonly designJd: number;
            readonly birthSunDeg: number;
            readonly designSunDeg: number;
            readonly targetDeg: number;
            readonly arcErrDeg: number;
            readonly daysBeforeBirth: number;
        };
        sunJ2000: number;
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
    hdChart: {
        computes: boolean;
        verified: boolean;
        birthJd: number;
        designJd: number;
        personality: {
            layer: "design" | "personality";
            body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
            longitudeDeg: number;
            gate: number;
            line: number;
            cusp: boolean;
            fastMoverCusp: boolean;
            receipt: string;
        }[];
        design: {
            layer: "design" | "personality";
            body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
            longitudeDeg: number;
            gate: number;
            line: number;
            cusp: boolean;
            fastMoverCusp: boolean;
            receipt: string;
        }[];
        activatedGates: number[];
        definedChannels: {
            a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
            b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
            key: string;
            from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
            to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
        }[];
        cuspWarnings: {
            layer: "design" | "personality";
            body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
            longitudeDeg: number;
            gate: number;
            line: number;
            cusp: boolean;
            fastMoverCusp: boolean;
            receipt: string;
        }[];
        cuspBandDeg: number;
        wheel: {
            verified: boolean;
            computes: boolean;
            gateArcDeg: number;
            lineArcDeg: number;
            gate41StartDeg: number;
            designSunArcDeg: number;
            bodies: ("Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto")[];
            bodyCount: 13;
            gates: (2 | 16 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6 | 27 | 54 | 64 | 20 | 46 | 61 | 53 | 10 | 55 | 34 | 21 | 13 | 17 | 12 | 18 | 51 | 23 | 31 | 32 | 42 | 63 | 14 | 41 | 19 | 49 | 30 | 37 | 22 | 36 | 25 | 24 | 35 | 45 | 15 | 52 | 39 | 62 | 56 | 33 | 44 | 28 | 50 | 57 | 48 | 47 | 40 | 59 | 29 | 26 | 11 | 58 | 38 | 60 | 43)[];
            starts: number[];
            sample: {
                gate: number;
                line: number;
                index: number;
                startDeg: number;
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
        lattice: {
            verified: boolean;
            computes: boolean;
            centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
            centerCount: 9;
            channels: {
                a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                key: string;
                from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
            }[];
            channelCount: 36;
            gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
        ephCore: {
            computes: boolean;
            verified: boolean;
            birthJd: number;
            ephemeris: {
                readonly jd: number;
                readonly bodies: readonly SealedMeeusBodyLongitude[];
                readonly sun: number;
                readonly moon: number;
                readonly root: string;
            };
            design: {
                readonly birthJd: number;
                readonly designJd: number;
                readonly birthSunDeg: number;
                readonly designSunDeg: number;
                readonly targetDeg: number;
                readonly arcErrDeg: number;
                readonly daysBeforeBirth: number;
            };
            sunJ2000: number;
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
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
    hdW6: {
        computes: boolean;
        verified: boolean;
        birthJd: number;
        designJd: number;
        definedCenters: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
        openCenters: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
        hangingGates: number[];
        definitionComponents: number;
        definitionKind: HdDefinitionKind;
        personalityGates: number[];
        designGates: number[];
        sharedGates: number[];
        definedChannelCount: number;
        activatedGateCount: number;
        cuspCount: number;
        chart: {
            computes: boolean;
            verified: boolean;
            birthJd: number;
            designJd: number;
            personality: {
                layer: "design" | "personality";
                body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                longitudeDeg: number;
                gate: number;
                line: number;
                cusp: boolean;
                fastMoverCusp: boolean;
                receipt: string;
            }[];
            design: {
                layer: "design" | "personality";
                body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                longitudeDeg: number;
                gate: number;
                line: number;
                cusp: boolean;
                fastMoverCusp: boolean;
                receipt: string;
            }[];
            activatedGates: number[];
            definedChannels: {
                a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                key: string;
                from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
            }[];
            cuspWarnings: {
                layer: "design" | "personality";
                body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                longitudeDeg: number;
                gate: number;
                line: number;
                cusp: boolean;
                fastMoverCusp: boolean;
                receipt: string;
            }[];
            cuspBandDeg: number;
            wheel: {
                verified: boolean;
                computes: boolean;
                gateArcDeg: number;
                lineArcDeg: number;
                gate41StartDeg: number;
                designSunArcDeg: number;
                bodies: ("Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto")[];
                bodyCount: 13;
                gates: (2 | 16 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6 | 27 | 54 | 64 | 20 | 46 | 61 | 53 | 10 | 55 | 34 | 21 | 13 | 17 | 12 | 18 | 51 | 23 | 31 | 32 | 42 | 63 | 14 | 41 | 19 | 49 | 30 | 37 | 22 | 36 | 25 | 24 | 35 | 45 | 15 | 52 | 39 | 62 | 56 | 33 | 44 | 28 | 50 | 57 | 48 | 47 | 40 | 59 | 29 | 26 | 11 | 58 | 38 | 60 | 43)[];
                starts: number[];
                sample: {
                    gate: number;
                    line: number;
                    index: number;
                    startDeg: number;
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
            lattice: {
                verified: boolean;
                computes: boolean;
                centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
                centerCount: 9;
                channels: {
                    a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                    b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                    key: string;
                    from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                    to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                }[];
                channelCount: 36;
                gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
            ephCore: {
                computes: boolean;
                verified: boolean;
                birthJd: number;
                ephemeris: {
                    readonly jd: number;
                    readonly bodies: readonly SealedMeeusBodyLongitude[];
                    readonly sun: number;
                    readonly moon: number;
                    readonly root: string;
                };
                design: {
                    readonly birthJd: number;
                    readonly designJd: number;
                    readonly birthSunDeg: number;
                    readonly designSunDeg: number;
                    readonly targetDeg: number;
                    readonly arcErrDeg: number;
                    readonly daysBeforeBirth: number;
                };
                sunJ2000: number;
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
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            root: string;
            statement: string;
            boundary: string;
        };
        lattice: {
            verified: boolean;
            computes: boolean;
            centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
            centerCount: 9;
            channels: {
                a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                key: string;
                from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
            }[];
            channelCount: 36;
            gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
        wheel: {
            verified: boolean;
            computes: boolean;
            gateArcDeg: number;
            lineArcDeg: number;
            gate41StartDeg: number;
            designSunArcDeg: number;
            bodies: ("Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto")[];
            bodyCount: 13;
            gates: (2 | 16 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6 | 27 | 54 | 64 | 20 | 46 | 61 | 53 | 10 | 55 | 34 | 21 | 13 | 17 | 12 | 18 | 51 | 23 | 31 | 32 | 42 | 63 | 14 | 41 | 19 | 49 | 30 | 37 | 22 | 36 | 25 | 24 | 35 | 45 | 15 | 52 | 39 | 62 | 56 | 33 | 44 | 28 | 50 | 57 | 48 | 47 | 40 | 59 | 29 | 26 | 11 | 58 | 38 | 60 | 43)[];
            starts: number[];
            sample: {
                gate: number;
                line: number;
                index: number;
                startDeg: number;
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
        count: number;
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        pair: "edit/build";
        qpuRequired: false;
        route: string;
        statement: string;
        boundary: string;
    };
    hdBody: {
        computes: boolean;
        verified: boolean;
        birthJd: number;
        chart: {
            computes: boolean;
            verified: boolean;
            birthJd: number;
            designJd: number;
            personality: {
                layer: "design" | "personality";
                body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                longitudeDeg: number;
                gate: number;
                line: number;
                cusp: boolean;
                fastMoverCusp: boolean;
                receipt: string;
            }[];
            design: {
                layer: "design" | "personality";
                body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                longitudeDeg: number;
                gate: number;
                line: number;
                cusp: boolean;
                fastMoverCusp: boolean;
                receipt: string;
            }[];
            activatedGates: number[];
            definedChannels: {
                a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                key: string;
                from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
            }[];
            cuspWarnings: {
                layer: "design" | "personality";
                body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                longitudeDeg: number;
                gate: number;
                line: number;
                cusp: boolean;
                fastMoverCusp: boolean;
                receipt: string;
            }[];
            cuspBandDeg: number;
            wheel: {
                verified: boolean;
                computes: boolean;
                gateArcDeg: number;
                lineArcDeg: number;
                gate41StartDeg: number;
                designSunArcDeg: number;
                bodies: ("Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto")[];
                bodyCount: 13;
                gates: (2 | 16 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6 | 27 | 54 | 64 | 20 | 46 | 61 | 53 | 10 | 55 | 34 | 21 | 13 | 17 | 12 | 18 | 51 | 23 | 31 | 32 | 42 | 63 | 14 | 41 | 19 | 49 | 30 | 37 | 22 | 36 | 25 | 24 | 35 | 45 | 15 | 52 | 39 | 62 | 56 | 33 | 44 | 28 | 50 | 57 | 48 | 47 | 40 | 59 | 29 | 26 | 11 | 58 | 38 | 60 | 43)[];
                starts: number[];
                sample: {
                    gate: number;
                    line: number;
                    index: number;
                    startDeg: number;
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
            lattice: {
                verified: boolean;
                computes: boolean;
                centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
                centerCount: 9;
                channels: {
                    a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                    b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                    key: string;
                    from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                    to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                }[];
                channelCount: 36;
                gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
            ephCore: {
                computes: boolean;
                verified: boolean;
                birthJd: number;
                ephemeris: {
                    readonly jd: number;
                    readonly bodies: readonly SealedMeeusBodyLongitude[];
                    readonly sun: number;
                    readonly moon: number;
                    readonly root: string;
                };
                design: {
                    readonly birthJd: number;
                    readonly designJd: number;
                    readonly birthSunDeg: number;
                    readonly designSunDeg: number;
                    readonly targetDeg: number;
                    readonly arcErrDeg: number;
                    readonly daysBeforeBirth: number;
                };
                sunJ2000: number;
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
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            root: string;
            statement: string;
            boundary: string;
        };
        structure: {
            computes: boolean;
            verified: boolean;
            birthJd: number;
            designJd: number;
            definedCenters: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
            openCenters: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
            hangingGates: number[];
            definitionComponents: number;
            definitionKind: HdDefinitionKind;
            personalityGates: number[];
            designGates: number[];
            sharedGates: number[];
            definedChannelCount: number;
            activatedGateCount: number;
            cuspCount: number;
            chart: {
                computes: boolean;
                verified: boolean;
                birthJd: number;
                designJd: number;
                personality: {
                    layer: "design" | "personality";
                    body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                    longitudeDeg: number;
                    gate: number;
                    line: number;
                    cusp: boolean;
                    fastMoverCusp: boolean;
                    receipt: string;
                }[];
                design: {
                    layer: "design" | "personality";
                    body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                    longitudeDeg: number;
                    gate: number;
                    line: number;
                    cusp: boolean;
                    fastMoverCusp: boolean;
                    receipt: string;
                }[];
                activatedGates: number[];
                definedChannels: {
                    a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                    b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                    key: string;
                    from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                    to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                }[];
                cuspWarnings: {
                    layer: "design" | "personality";
                    body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                    longitudeDeg: number;
                    gate: number;
                    line: number;
                    cusp: boolean;
                    fastMoverCusp: boolean;
                    receipt: string;
                }[];
                cuspBandDeg: number;
                wheel: {
                    verified: boolean;
                    computes: boolean;
                    gateArcDeg: number;
                    lineArcDeg: number;
                    gate41StartDeg: number;
                    designSunArcDeg: number;
                    bodies: ("Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto")[];
                    bodyCount: 13;
                    gates: (2 | 16 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6 | 27 | 54 | 64 | 20 | 46 | 61 | 53 | 10 | 55 | 34 | 21 | 13 | 17 | 12 | 18 | 51 | 23 | 31 | 32 | 42 | 63 | 14 | 41 | 19 | 49 | 30 | 37 | 22 | 36 | 25 | 24 | 35 | 45 | 15 | 52 | 39 | 62 | 56 | 33 | 44 | 28 | 50 | 57 | 48 | 47 | 40 | 59 | 29 | 26 | 11 | 58 | 38 | 60 | 43)[];
                    starts: number[];
                    sample: {
                        gate: number;
                        line: number;
                        index: number;
                        startDeg: number;
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
                lattice: {
                    verified: boolean;
                    computes: boolean;
                    centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
                    centerCount: 9;
                    channels: {
                        a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                        b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                        key: string;
                        from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                        to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                    }[];
                    channelCount: 36;
                    gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
                ephCore: {
                    computes: boolean;
                    verified: boolean;
                    birthJd: number;
                    ephemeris: {
                        readonly jd: number;
                        readonly bodies: readonly SealedMeeusBodyLongitude[];
                        readonly sun: number;
                        readonly moon: number;
                        readonly root: string;
                    };
                    design: {
                        readonly birthJd: number;
                        readonly designJd: number;
                        readonly birthSunDeg: number;
                        readonly designSunDeg: number;
                        readonly targetDeg: number;
                        readonly arcErrDeg: number;
                        readonly daysBeforeBirth: number;
                    };
                    sunJ2000: number;
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
                facets: {
                    receipt: string;
                    facet: string;
                    on: boolean;
                }[];
                root: string;
                statement: string;
                boundary: string;
            };
            lattice: {
                verified: boolean;
                computes: boolean;
                centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
                centerCount: 9;
                channels: {
                    a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                    b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                    key: string;
                    from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                    to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                }[];
                channelCount: 36;
                gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
            wheel: {
                verified: boolean;
                computes: boolean;
                gateArcDeg: number;
                lineArcDeg: number;
                gate41StartDeg: number;
                designSunArcDeg: number;
                bodies: ("Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto")[];
                bodyCount: 13;
                gates: (2 | 16 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6 | 27 | 54 | 64 | 20 | 46 | 61 | 53 | 10 | 55 | 34 | 21 | 13 | 17 | 12 | 18 | 51 | 23 | 31 | 32 | 42 | 63 | 14 | 41 | 19 | 49 | 30 | 37 | 22 | 36 | 25 | 24 | 35 | 45 | 15 | 52 | 39 | 62 | 56 | 33 | 44 | 28 | 50 | 57 | 48 | 47 | 40 | 59 | 29 | 26 | 11 | 58 | 38 | 60 | 43)[];
                starts: number[];
                sample: {
                    gate: number;
                    line: number;
                    index: number;
                    startDeg: number;
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
            count: number;
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            root: string;
            pair: "edit/build";
            qpuRequired: false;
            route: string;
            statement: string;
            boundary: string;
        };
        lattice: {
            verified: boolean;
            computes: boolean;
            centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
            centerCount: 9;
            channels: {
                a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                key: string;
                from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
            }[];
            channelCount: 36;
            gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
        layout: {
            readonly Head: {
                readonly x: number;
                readonly y: number;
                readonly shape: "tri";
            };
            readonly Ajna: {
                readonly x: number;
                readonly y: number;
                readonly shape: "tri";
            };
            readonly Throat: {
                readonly x: number;
                readonly y: number;
                readonly shape: "sq";
            };
            readonly G: {
                readonly x: number;
                readonly y: number;
                readonly shape: "dia";
            };
            readonly Heart: {
                readonly x: number;
                readonly y: number;
                readonly shape: "tri";
            };
            readonly Sacral: {
                readonly x: number;
                readonly y: number;
                readonly shape: "sq";
            };
            readonly SolarPlexus: {
                readonly x: number;
                readonly y: number;
                readonly shape: "tri";
            };
            readonly Spleen: {
                readonly x: number;
                readonly y: number;
                readonly shape: "tri";
            };
            readonly Root: {
                readonly x: number;
                readonly y: number;
                readonly shape: "sq";
            };
        };
        definedKeys: string[];
        activatedGates: number[];
        definedCenters: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
        openCenters: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
        hangingGates: number[];
        definitionKind: HdDefinitionKind;
        definitionComponents: number;
        cuspCount: number;
        definedChannelCount: number;
        count: number;
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        route: string;
        pair: string;
        qpuRequired: false;
        statement: string;
        boundary: string;
    };
    hdW7: {
        computes: boolean;
        verified: boolean;
        birthJd: number;
        svg: string;
        svgBytes: number;
        definitionKind: HdDefinitionKind;
        definedCenters: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
        hangingGates: number[];
        panel: {
            computes: boolean;
            verified: boolean;
            birthJd: number;
            chart: {
                computes: boolean;
                verified: boolean;
                birthJd: number;
                designJd: number;
                personality: {
                    layer: "design" | "personality";
                    body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                    longitudeDeg: number;
                    gate: number;
                    line: number;
                    cusp: boolean;
                    fastMoverCusp: boolean;
                    receipt: string;
                }[];
                design: {
                    layer: "design" | "personality";
                    body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                    longitudeDeg: number;
                    gate: number;
                    line: number;
                    cusp: boolean;
                    fastMoverCusp: boolean;
                    receipt: string;
                }[];
                activatedGates: number[];
                definedChannels: {
                    a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                    b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                    key: string;
                    from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                    to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                }[];
                cuspWarnings: {
                    layer: "design" | "personality";
                    body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                    longitudeDeg: number;
                    gate: number;
                    line: number;
                    cusp: boolean;
                    fastMoverCusp: boolean;
                    receipt: string;
                }[];
                cuspBandDeg: number;
                wheel: {
                    verified: boolean;
                    computes: boolean;
                    gateArcDeg: number;
                    lineArcDeg: number;
                    gate41StartDeg: number;
                    designSunArcDeg: number;
                    bodies: ("Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto")[];
                    bodyCount: 13;
                    gates: (2 | 16 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6 | 27 | 54 | 64 | 20 | 46 | 61 | 53 | 10 | 55 | 34 | 21 | 13 | 17 | 12 | 18 | 51 | 23 | 31 | 32 | 42 | 63 | 14 | 41 | 19 | 49 | 30 | 37 | 22 | 36 | 25 | 24 | 35 | 45 | 15 | 52 | 39 | 62 | 56 | 33 | 44 | 28 | 50 | 57 | 48 | 47 | 40 | 59 | 29 | 26 | 11 | 58 | 38 | 60 | 43)[];
                    starts: number[];
                    sample: {
                        gate: number;
                        line: number;
                        index: number;
                        startDeg: number;
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
                lattice: {
                    verified: boolean;
                    computes: boolean;
                    centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
                    centerCount: 9;
                    channels: {
                        a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                        b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                        key: string;
                        from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                        to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                    }[];
                    channelCount: 36;
                    gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
                ephCore: {
                    computes: boolean;
                    verified: boolean;
                    birthJd: number;
                    ephemeris: {
                        readonly jd: number;
                        readonly bodies: readonly SealedMeeusBodyLongitude[];
                        readonly sun: number;
                        readonly moon: number;
                        readonly root: string;
                    };
                    design: {
                        readonly birthJd: number;
                        readonly designJd: number;
                        readonly birthSunDeg: number;
                        readonly designSunDeg: number;
                        readonly targetDeg: number;
                        readonly arcErrDeg: number;
                        readonly daysBeforeBirth: number;
                    };
                    sunJ2000: number;
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
                facets: {
                    receipt: string;
                    facet: string;
                    on: boolean;
                }[];
                root: string;
                statement: string;
                boundary: string;
            };
            structure: {
                computes: boolean;
                verified: boolean;
                birthJd: number;
                designJd: number;
                definedCenters: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
                openCenters: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
                hangingGates: number[];
                definitionComponents: number;
                definitionKind: HdDefinitionKind;
                personalityGates: number[];
                designGates: number[];
                sharedGates: number[];
                definedChannelCount: number;
                activatedGateCount: number;
                cuspCount: number;
                chart: {
                    computes: boolean;
                    verified: boolean;
                    birthJd: number;
                    designJd: number;
                    personality: {
                        layer: "design" | "personality";
                        body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                        longitudeDeg: number;
                        gate: number;
                        line: number;
                        cusp: boolean;
                        fastMoverCusp: boolean;
                        receipt: string;
                    }[];
                    design: {
                        layer: "design" | "personality";
                        body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                        longitudeDeg: number;
                        gate: number;
                        line: number;
                        cusp: boolean;
                        fastMoverCusp: boolean;
                        receipt: string;
                    }[];
                    activatedGates: number[];
                    definedChannels: {
                        a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                        b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                        key: string;
                        from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                        to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                    }[];
                    cuspWarnings: {
                        layer: "design" | "personality";
                        body: "Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto";
                        longitudeDeg: number;
                        gate: number;
                        line: number;
                        cusp: boolean;
                        fastMoverCusp: boolean;
                        receipt: string;
                    }[];
                    cuspBandDeg: number;
                    wheel: {
                        verified: boolean;
                        computes: boolean;
                        gateArcDeg: number;
                        lineArcDeg: number;
                        gate41StartDeg: number;
                        designSunArcDeg: number;
                        bodies: ("Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto")[];
                        bodyCount: 13;
                        gates: (2 | 16 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6 | 27 | 54 | 64 | 20 | 46 | 61 | 53 | 10 | 55 | 34 | 21 | 13 | 17 | 12 | 18 | 51 | 23 | 31 | 32 | 42 | 63 | 14 | 41 | 19 | 49 | 30 | 37 | 22 | 36 | 25 | 24 | 35 | 45 | 15 | 52 | 39 | 62 | 56 | 33 | 44 | 28 | 50 | 57 | 48 | 47 | 40 | 59 | 29 | 26 | 11 | 58 | 38 | 60 | 43)[];
                        starts: number[];
                        sample: {
                            gate: number;
                            line: number;
                            index: number;
                            startDeg: number;
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
                    lattice: {
                        verified: boolean;
                        computes: boolean;
                        centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
                        centerCount: 9;
                        channels: {
                            a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                            b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                            key: string;
                            from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                            to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                        }[];
                        channelCount: 36;
                        gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
                    ephCore: {
                        computes: boolean;
                        verified: boolean;
                        birthJd: number;
                        ephemeris: {
                            readonly jd: number;
                            readonly bodies: readonly SealedMeeusBodyLongitude[];
                            readonly sun: number;
                            readonly moon: number;
                            readonly root: string;
                        };
                        design: {
                            readonly birthJd: number;
                            readonly designJd: number;
                            readonly birthSunDeg: number;
                            readonly designSunDeg: number;
                            readonly targetDeg: number;
                            readonly arcErrDeg: number;
                            readonly daysBeforeBirth: number;
                        };
                        sunJ2000: number;
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
                    facets: {
                        receipt: string;
                        facet: string;
                        on: boolean;
                    }[];
                    root: string;
                    statement: string;
                    boundary: string;
                };
                lattice: {
                    verified: boolean;
                    computes: boolean;
                    centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
                    centerCount: 9;
                    channels: {
                        a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                        b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                        key: string;
                        from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                        to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                    }[];
                    channelCount: 36;
                    gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
                wheel: {
                    verified: boolean;
                    computes: boolean;
                    gateArcDeg: number;
                    lineArcDeg: number;
                    gate41StartDeg: number;
                    designSunArcDeg: number;
                    bodies: ("Jupiter" | "Saturn" | "Neptune" | "Mars" | "Sun" | "Venus" | "Mercury" | "Moon" | "Earth" | "North Node" | "South Node" | "Uranus" | "Pluto")[];
                    bodyCount: 13;
                    gates: (2 | 16 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6 | 27 | 54 | 64 | 20 | 46 | 61 | 53 | 10 | 55 | 34 | 21 | 13 | 17 | 12 | 18 | 51 | 23 | 31 | 32 | 42 | 63 | 14 | 41 | 19 | 49 | 30 | 37 | 22 | 36 | 25 | 24 | 35 | 45 | 15 | 52 | 39 | 62 | 56 | 33 | 44 | 28 | 50 | 57 | 48 | 47 | 40 | 59 | 29 | 26 | 11 | 58 | 38 | 60 | 43)[];
                    starts: number[];
                    sample: {
                        gate: number;
                        line: number;
                        index: number;
                        startDeg: number;
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
                count: number;
                facets: {
                    receipt: string;
                    facet: string;
                    on: boolean;
                }[];
                root: string;
                pair: "edit/build";
                qpuRequired: false;
                route: string;
                statement: string;
                boundary: string;
            };
            lattice: {
                verified: boolean;
                computes: boolean;
                centers: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
                centerCount: 9;
                channels: {
                    a: 2 | 16 | 9 | 5 | 4 | 7 | 1 | 3 | 6 | 27 | 20 | 10 | 34 | 21 | 13 | 17 | 12 | 18 | 23 | 32 | 42 | 19 | 30 | 37 | 25 | 24 | 35 | 39 | 28 | 47 | 29 | 26 | 11;
                    b: 8 | 54 | 64 | 20 | 46 | 61 | 53 | 55 | 34 | 51 | 31 | 63 | 14 | 41 | 49 | 22 | 36 | 45 | 15 | 52 | 62 | 56 | 33 | 44 | 50 | 57 | 48 | 40 | 59 | 58 | 38 | 60 | 43;
                    key: string;
                    from: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                    to: "Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root";
                }[];
                channelCount: 36;
                gateCenter: Record<number, (typeof RAVE_CENTERS_9)[number]>;
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
            layout: {
                readonly Head: {
                    readonly x: number;
                    readonly y: number;
                    readonly shape: "tri";
                };
                readonly Ajna: {
                    readonly x: number;
                    readonly y: number;
                    readonly shape: "tri";
                };
                readonly Throat: {
                    readonly x: number;
                    readonly y: number;
                    readonly shape: "sq";
                };
                readonly G: {
                    readonly x: number;
                    readonly y: number;
                    readonly shape: "dia";
                };
                readonly Heart: {
                    readonly x: number;
                    readonly y: number;
                    readonly shape: "tri";
                };
                readonly Sacral: {
                    readonly x: number;
                    readonly y: number;
                    readonly shape: "sq";
                };
                readonly SolarPlexus: {
                    readonly x: number;
                    readonly y: number;
                    readonly shape: "tri";
                };
                readonly Spleen: {
                    readonly x: number;
                    readonly y: number;
                    readonly shape: "tri";
                };
                readonly Root: {
                    readonly x: number;
                    readonly y: number;
                    readonly shape: "sq";
                };
            };
            definedKeys: string[];
            activatedGates: number[];
            definedCenters: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
            openCenters: ("Head" | "Ajna" | "Throat" | "G" | "Heart" | "Sacral" | "SolarPlexus" | "Spleen" | "Root")[];
            hangingGates: number[];
            definitionKind: HdDefinitionKind;
            definitionComponents: number;
            cuspCount: number;
            definedChannelCount: number;
            count: number;
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            root: string;
            route: string;
            pair: string;
            qpuRequired: false;
            statement: string;
            boundary: string;
        };
        count: number;
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        pair: "symbols/quantumise";
        qpuRequired: false;
        physicalFtlClaim: 0;
        route: string;
        cli: string;
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
/**
 * Field projection — Keplerian orbit rings + bodies. Scale/breath from heroPhaseAt; hues from sim.
 * Vue mounts only call this — no inline canvas math. HONEST: circular Keplerian paint, not JPL ephemeris.
 */
export declare function drawAstronomyProjection(ctx: CanvasRenderingContext2D, w: number, h: number, sim: AstronomySimulationPaint, opts?: {
    dark?: boolean;
    reduce?: boolean;
}): void;
