export declare const theorems: readonly [];
export declare const spectrum: {
    k: number;
    angleDeg: number;
    modulus: number;
    harmonic: boolean;
    image: number;
    fixedPoints: number[];
}[];
export declare const polarities: {
    tensPair: number;
    ninePair: number;
    sixtyPair: number;
    fold: number;
    lobes: readonly [number, number];
    forward: number;
    reverse: number;
};
export declare const equilibrium: {
    lobe0: number;
    lobe1: number;
    translate: number;
    throat: string;
};
export declare const unfold: (depth: number) => {
    addresses: string[];
    digits: number[];
    allDistinct: boolean;
    allInRing: boolean;
    digit: number;
    root: string;
};
export declare const prove: () => {
    ok: boolean;
    count: number;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
};
export declare const coverage: (depth?: number, n?: number) => {
    seen: number;
    total: number;
    complete: boolean;
    distribution: number[];
    flat: boolean;
    allDistinct: boolean;
    root: string;
};
export declare const root: () => string;
export declare const statement: () => string;
export declare const mappings: {
    spectrum: {
        k: number;
        angleDeg: number;
        image: number;
        fixedPoints: number[];
    }[];
    polarities: {
        tensPair: number;
        ninePair: number;
        sixtyPair: number;
        fold: number;
        lobes: readonly [number, number];
        forward: number;
        reverse: number;
    };
    digit: number;
    reflect: number;
    reflections: {
        at180: number;
        at90: number;
        at60: number;
    };
    equilibrium: {
        lobe0: number;
        lobe1: number;
        translate: number;
        throat: string;
    };
    op: import("../0/index.ts").VortexOp;
    dash: "/" | "\\";
    next: number;
    successor: number;
    predecessor: number;
    isSelfReflect: boolean;
    bitCost: number;
    isTheorem: boolean;
};
export declare const digit: {
    theorems: readonly [];
    spectrum: {
        k: number;
        angleDeg: number;
        modulus: number;
        harmonic: boolean;
        image: number;
        fixedPoints: number[];
    }[];
    polarities: {
        tensPair: number;
        ninePair: number;
        sixtyPair: number;
        fold: number;
        lobes: readonly [number, number];
        forward: number;
        reverse: number;
    };
    equilibrium: {
        lobe0: number;
        lobe1: number;
        translate: number;
        throat: string;
    };
    unfold: (depth: number) => {
        addresses: string[];
        digits: number[];
        allDistinct: boolean;
        allInRing: boolean;
        digit: number;
        root: string;
    };
    coverage: (depth?: number, n?: number) => {
        seen: number;
        total: number;
        complete: boolean;
        distribution: number[];
        flat: boolean;
        allDistinct: boolean;
        root: string;
    };
    prove: () => {
        ok: boolean;
        count: number;
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
    };
    root: () => string;
    statement: () => string;
    mappings: {
        spectrum: {
            k: number;
            angleDeg: number;
            image: number;
            fixedPoints: number[];
        }[];
        polarities: {
            tensPair: number;
            ninePair: number;
            sixtyPair: number;
            fold: number;
            lobes: readonly [number, number];
            forward: number;
            reverse: number;
        };
        digit: number;
        reflect: number;
        reflections: {
            at180: number;
            at90: number;
            at60: number;
        };
        equilibrium: {
            lobe0: number;
            lobe1: number;
            translate: number;
            throat: string;
        };
        op: import("../0/index.ts").VortexOp;
        dash: "/" | "\\";
        next: number;
        successor: number;
        predecessor: number;
        isSelfReflect: boolean;
        bitCost: number;
        isTheorem: boolean;
    };
};
