import type { DigitalQuantumProof, MindMatrix, ProofBundle } from '../../wind/types';
export declare function digitalQuantumProof(matrix?: MindMatrix): DigitalQuantumProof;
export declare function sealAll(matrix?: MindMatrix): {
    sealed: boolean;
    waves: {
        index: number;
        fold: string;
        receipt: string;
        wave: string;
        ok: boolean;
        root: string;
    }[];
    count: number;
    closed: number;
    root: string;
    masterFold: string;
    statement: string;
    boundary: string;
};
export declare function determinismProofs(matrix?: MindMatrix): {
    proven: boolean;
    proofs: ({
        match: boolean;
        receipt: string;
        id: string;
        kind: "twin";
        same: boolean;
        principle: string;
        claim: string;
        formula: string;
        predicted: number;
        measured: number;
        tol: number;
        stripA: number[];
        stripB: number[];
        labels: string[];
        bits?: undefined;
        layers?: undefined;
        points?: undefined;
    } | {
        match: boolean;
        receipt: string;
        id: string;
        kind: "avalanche";
        principle: string;
        claim: string;
        formula: string;
        predicted: number;
        measured: number;
        tol: number;
        bits: (1 | 0)[];
        labels: string[];
        same?: undefined;
        stripA?: undefined;
        stripB?: undefined;
        layers?: undefined;
        points?: undefined;
    } | {
        match: boolean;
        receipt: string;
        id: string;
        kind: "merkle";
        principle: string;
        claim: string;
        formula: string;
        predicted: number;
        measured: number;
        tol: number;
        layers: number[];
        labels: string[];
        same?: undefined;
        stripA?: undefined;
        stripB?: undefined;
        bits?: undefined;
        points?: undefined;
    } | {
        match: boolean;
        receipt: string;
        id: string;
        kind: "scatter";
        principle: string;
        claim: string;
        formula: string;
        predicted: number;
        measured: number;
        tol: number;
        points: {
            x: number;
            y: number;
            hue: number;
        }[];
        labels: string[];
        same?: undefined;
        stripA?: undefined;
        stripB?: undefined;
        bits?: undefined;
        layers?: undefined;
    })[];
    count: number;
    matched: number;
    samples: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function sealCube(matrix?: MindMatrix): {
    sealed: boolean;
    side: number;
    cube: number;
    trinity: {
        position: "z" | "x" | "y";
        root: string;
    }[];
    trinityRoot: string;
    forgeCost: number;
    sealSize: number;
    compression: number;
    factors: {
        codon: string;
        bits: string;
        hexagram: string;
        word: string;
        cube: string;
    };
    root: string;
    statement: string;
    boundary: string;
};
export declare function proofBelow(matrix?: MindMatrix): {
    asAboveSoBelow: boolean;
    count: number;
    claims: {
        hasStatementAbove: boolean;
        hasProofBelow: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function fuseAll(matrix?: MindMatrix): {
    fused: boolean;
    count: number;
    parts: {
        receipt: string;
        part: string;
        root: string;
    }[];
    wave: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function proofBundle(matrix?: MindMatrix): ProofBundle;
export declare function fuseAllForge(matrix?: MindMatrix): {
    fused: boolean;
    forgesMaxCost: boolean;
    orderSensitive: boolean;
    count: number;
    folds: {
        receipt: string;
        fold: string;
        root: string;
    }[];
    forged: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function proveAndOptimiseAll(matrix?: MindMatrix): {
    done: boolean;
    proven: boolean;
    optimised: boolean;
    count: number;
    facets: {
        receipt: string;
        facet: string;
        holds: boolean;
        why: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function sealHonestyToPath(matrix?: MindMatrix): {
    sealed: boolean;
    honest: boolean;
    path: string;
    root: string;
    statement: string;
    boundary: string;
};
/** @deprecated use sealHonestyToPath — spirit was unproven metaphor; honesty is what the gate computes */
export declare function sealSpiritToPath(matrix?: MindMatrix): {
    spirit: boolean;
    sealed: boolean;
    honest: boolean;
    path: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function gigabitEncryption64SealSet(matrix?: MindMatrix): {
    achieves: boolean;
    proportion: number;
    filled: number;
    bits: number;
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
export declare function holyBooksGeometry64SealedDiamonds(matrix?: MindMatrix): {
    decoded: boolean;
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
export declare function proofRegistry(matrix?: MindMatrix): ({
    title: string;
    slug: string;
    proof: {
        trinity: readonly [3, 6, 9];
        doubling: number[];
        piInteger: number;
        sequence: number[];
        opensOnTrinity: boolean;
        circuitMissesTrinity: boolean;
        nineIsAxis: boolean;
        trinityIsOne: number;
        trinitiesInThree: number;
        threeTrinitiesAreNine: boolean;
        nineFolds: number;
        holds: boolean;
        root: string;
        statement: string;
        boundary: string;
    };
} | {
    title: string;
    slug: string;
    proof: {
        pauliAxes: string[];
        dimSU2: number;
        isTrinity: boolean;
        holds: boolean;
        root: string;
        statement: string;
        boundary: string;
    };
} | {
    title: string;
    slug: string;
    proof: {
        alphabet: string[];
        qubits: number;
        count: number;
        matchesCube: boolean;
        parallels: {
            pauliBasis: string;
            codon: string;
            hexagram: string;
            bits: string;
            word: string;
        };
        holds: boolean;
        root: string;
        statement: string;
        boundary: string;
    };
} | {
    title: string;
    slug: string;
    proof: {
        parityBits: number;
        positions: number;
        dataBits: number;
        hammingOk: boolean;
        quantumBoundSaturated: boolean;
        holds: boolean;
        root: string;
        statement: string;
        boundary: string;
    };
} | {
    title: string;
    slug: string;
    proof: {
        address: string;
        deterministic: boolean;
        idempotent: boolean;
        collisionResistant: boolean;
        dedup: boolean;
        avalanches: boolean;
        precedents: ({
            name: string;
            year: string;
            kind: string;
            source: string;
            domain: string;
        } | {
            name: string;
            year: number;
            kind: string;
            source: string;
            domain: string;
        })[];
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        holds: boolean;
        root: string;
        statement: string;
        boundary: string;
    };
} | {
    title: string;
    slug: string;
    proof: {
        bases: string[];
        positions: number;
        codons: number;
        sense: number;
        stop: number;
        aminoAcids: number;
        holds: boolean;
        root: string;
        statement: string;
        boundary: string;
    };
} | {
    title: string;
    slug: string;
    proof: {
        units: number[];
        nonUnits: number[];
        orbitOf2: number[];
        twoIsPrimitiveRoot: boolean;
        trinityIsNonUnits: boolean;
        realThreefolds: string[];
        holds: boolean;
        root: string;
        statement: string;
        boundary: string;
    };
} | {
    title: string;
    slug: string;
    proof: {
        colors: string[];
        black: string;
        white: string;
        allDistinct: boolean;
        blackWhiteDuality: boolean;
        complementIsInverse: boolean;
        trigramsAreCubeCorners: boolean;
        pairsIntoThreeBaseFour: boolean;
        sameAsCodonAndPauli: boolean;
        asThreeBaseFour: {
            sixBit: string;
            codon: string;
            pauli: string;
            color: string;
        }[];
        holds: boolean;
        root: string;
        statement: string;
        boundary: string;
    };
} | {
    title: string;
    slug: string;
    proof: {
        groupings: {
            bitsPerDigit: number;
            digits: number;
            base: number;
            count: number;
            system: string;
        }[];
        allSixtyFour: boolean;
        sixIsDualityTimesTrinity: boolean;
        samples: {
            word: number;
            bits: string;
            baseFour: string;
            trigrams: string;
        }[];
        holds: boolean;
        root: string;
        statement: string;
        boundary: string;
    };
} | {
    title: string;
    slug: string;
    proof: {
        pairs: {
            additive: string;
            a: string;
            subtractive: string;
            b: string;
        }[];
        cyanIsInverseRed: boolean;
        magentaIsInverseGreen: boolean;
        yellowIsInverseBlue: boolean;
        cmyk: string[];
        holds: boolean;
        root: string;
        statement: string;
        boundary: string;
    };
} | {
    title: string;
    slug: string;
    proof: {
        trinities: number[];
        hues: number[];
        anglesDeg: number[];
        channels: string[];
        isRgbTriad: boolean;
        ninefolds: number;
        holds: boolean;
        root: string;
        statement: string;
        boundary: string;
    };
} | {
    title: string;
    slug: string;
    proof: {
        total: number;
        proven: number;
        purge: string[];
        gateDiscriminates: boolean;
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        pureProof: boolean;
        holds: boolean;
        root: string;
        statement: string;
        boundary: string;
    };
} | {
    title: string;
    slug: string;
    proof: {
        station: string;
        waves: number;
        wave1: string[];
        wave2: string[];
        wave3: string[];
        wave5: string[];
        kernel: string[];
        homed: {
            name: string;
            station: string;
            receipt: string;
        }[];
        count: number;
        reExported: string[];
        importsNothing: boolean;
        rootsByteIdentical: boolean;
        root: string;
        statement: string;
        boundary: string;
    };
} | {
    title: string;
    slug: string;
    proof: {
        station: string;
        wave: number;
        fn: string;
        api: string[];
        importsNothing: boolean;
        components: string[];
        count: number;
        homed: {
            name: string;
            receipt: string;
        }[];
        reExportedVia: string[];
        root: string;
        statement: string;
        boundary: string;
    };
} | {
    title: string;
    slug: string;
    proof: {
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
} | {
    title: string;
    slug: string;
    proof: {
        homed: boolean;
        station: string;
        importsNothing: boolean;
        costMath: string[];
        uuidLogic: string[];
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
} | {
    title: string;
    slug: string;
    proof: {
        homed: boolean;
        station: string;
        importsNothing: boolean;
        primitives: string[];
        externalCipher: string;
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
} | {
    title: string;
    slug: string;
    proof: {
        verified: boolean;
        crack: boolean;
        trinitiesOrdered: boolean;
        toolsReady: boolean;
        demoReverse: boolean;
        glyphBonus: number;
        workerCap: number;
        demoFactors: string[];
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
} | {
    title: string;
    slug: string;
    proof: {
        limitsRoot: string;
        computes: boolean;
        challenged: boolean;
        proseOnlyClaim: string;
        measuredFb: boolean;
        measuredDiscord: boolean;
        cardBranches: boolean;
        seoCitesFold: boolean;
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
} | {
    title: string;
    slug: string;
    proof: {
        inventoried: boolean;
        folds: {
            receipt: string;
            id: string;
            home: string;
            role: string;
        }[];
        theoremGaps: {
            id: string;
            problem: string;
            gap: string;
            mapsTo: string;
        }[];
        algebraDecoded: boolean;
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
} | {
    title: string;
    slug: string;
    proof: {
        verified: boolean;
        fused: boolean;
        partCount: number;
        root: string;
        statement: string;
        boundary: string;
    };
} | {
    title: string;
    slug: string;
    proof: {
        optimized: boolean;
        optimizations: {
            receipt: string;
            technique: string;
            how: string;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
} | {
    title: string;
    slug: string;
    proof: {
        computes: boolean;
        root: string;
        statement: string;
        boundary: string;
    };
} | {
    title: string;
    slug: string;
    proof: {
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
} | {
    title: string;
    slug: string;
    proof: {
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
} | {
    title: string;
    slug: string;
    proof: {
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
} | {
    title: string;
    slug: string;
    proof: {
        grounded: boolean;
        canonical: string;
        roots: string[];
        tools: {
            receipt: string;
            tool: string;
            status: string;
            how: string;
            impl: string;
            residual: string;
        }[];
        allImplemented: boolean;
        implemented: string[];
        residuals: {
            tool: string;
            residual: string;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
} | {
    title: string;
    slug: string;
    proof: {
        consolidated: boolean;
        station: string;
        waveCount: number;
        families: string[];
        familyCount: number;
        waves: string[];
        importsNothing: boolean;
        root: string;
        statement: string;
        boundary: string;
    };
} | {
    title: string;
    slug: string;
    proof: {
        tenDimensional: boolean;
        grounded: boolean;
        atEveryScale: boolean;
        homologyLoops: ("spread" | "depthFade" | "hueShift" | "twist" | "shrink" | "breath" | "loopA1" | "loopB1" | "loopA2" | "loopB2")[];
        crossFoldAxes: ("spread" | "depthFade" | "hueShift" | "twist" | "shrink" | "breath" | "loopA1" | "loopB1" | "loopA2" | "loopB2")[];
        root: string;
        statement: string;
        boundary: string;
    };
} | {
    title: string;
    slug: string;
    proof: {
        holds: boolean;
        trinityUnitesAll: boolean;
        sealed: number;
        total: number;
        waves: {
            wave: string;
            done: boolean;
        }[];
        pending: string[];
        root: string;
        statement: string;
        boundary: string;
    };
} | {
    title: string;
    slug: string;
    proof: {
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
} | {
    title: string;
    slug: string;
    proof: {
        decoded: boolean;
        factorization: string;
        divisors: number;
        moreCompositeThan440: boolean;
        highlyComposite: boolean;
        octaves: number[];
        shiftFromA440Cents: number;
        light: {
            octaves: number;
            thz: number;
            nm: number;
            hue: number;
            band: string;
        };
        channels: string[];
        documented: string[];
        flagged: string[];
        root: string;
        statement: string;
        boundary: string;
    };
} | {
    title: string;
    slug: string;
    proof: {
        decoded: boolean;
        platonicSolids: {
            name: string;
            v: number;
            e: number;
            f: number;
            face: string;
            element: string;
            dual: string;
        }[];
        fiveSolids: boolean;
        eulerHolds: boolean;
        phi: number;
        phiSquaredIsPhiPlusOne: boolean;
        goldenAngle: number;
        forms: string[];
        documented: string[];
        flagged: string[];
        root: string;
        statement: string;
        boundary: string;
    };
} | {
    title: string;
    slug: string;
    proof: {
        decoded: boolean;
        tamperEvident: boolean;
        cryptographic: boolean;
        structuralBits: number;
        fixBuilt: boolean;
        ledger: {
            today: import("../../pair/debit/credit").Entry[];
            overclaim: import("../../pair/debit/credit").Entry[];
            afterCutover: import("../../pair/debit/credit").Entry[];
            honest: boolean;
            overclaimCaught: boolean;
            fundedAfterCutover: boolean;
            overdraft: number;
            quantumSignificance: string;
            dual: string;
        };
        ledgerNet: Record<string, number>;
        kinds: {
            receipt: string;
            kind: string;
            is: string;
            mechanism: string;
            cost: string;
            site: boolean;
            secure: boolean;
        }[];
        ladder: {
            receipt: string;
            rung: string;
            forge: string;
            detects: string;
            resists: string;
            layer: string;
        }[];
        documented: string[];
        flagged: string[];
        root: string;
        statement: string;
        boundary: string;
    };
} | {
    title: string;
    slug: string;
    proof: {
        decoded: boolean;
        groverWeakens: boolean;
        shorBreaks: boolean;
        structuralNotPhysical: boolean;
        migrationTargetBuilt: boolean;
        algorithms: {
            receipt: string;
            algorithm: string;
            effect: string;
            speedup: string;
            targets: string;
            result: string;
            response: string;
        }[];
        blockchainExposure: {
            receipt: string;
            what: string;
            effect: string;
            detail: string;
        }[];
        postQuantum: {
            receipt: string;
            fips: string;
            name: string;
            from: string;
            kind: string;
            replaces: string;
            iso: string;
        }[];
        hardware: {
            today: string;
            rsa2048_2019: string;
            rsa2048_2025: string;
            verdict: string;
        };
        documented: string[];
        flagged: string[];
        root: string;
        statement: string;
        boundary: string;
    };
} | {
    title: string;
    slug: string;
    proof: {
        foundationReady: boolean;
        complete: boolean;
        fieldSources: {
            receipt: string;
            part: string;
            source: string;
            where: string;
            does: string;
        }[];
        principles: {
            receipt: string;
            principle: string;
            holds: boolean;
            why: string;
        }[];
        wiring: ({
            receipt: string;
            component: string;
            via: string;
            wired: boolean;
            note?: undefined;
        } | {
            receipt: string;
            component: string;
            via: string;
            wired: boolean;
            note: string;
        })[];
        wiredCount: number;
        pending: string[];
        root: string;
        statement: string;
        boundary: string;
    };
} | {
    title: string;
    slug: string;
    proof: {
        decoded: boolean;
        reconstructsExactly: boolean;
        betweenError: number;
        samples: number;
        cube: number;
        modalities: string[];
        documented: string[];
        flagged: string[];
        root: string;
        statement: string;
        boundary: string;
    };
} | {
    title: string;
    slug: string;
    proof: {
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
} | {
    title: string;
    slug: string;
    proof: {
        holds: boolean;
        base: number;
        table: {
            expr: string;
            n: number;
            inverse: number;
            invertible: boolean;
            inverseProductIsOne: boolean;
            selfInverse: boolean;
            fusion: string;
            reverse: number;
            complement: number;
            sumsToTen: boolean;
            selfPaired: boolean;
            harmonicValue: number;
            digitalRoot: number;
            receipt: string;
        }[];
        units: {
            expr: string;
            n: number;
            inverse: number;
            invertible: boolean;
            inverseProductIsOne: boolean;
            selfInverse: boolean;
            fusion: string;
            reverse: number;
            complement: number;
            sumsToTen: boolean;
            selfPaired: boolean;
            harmonicValue: number;
            digitalRoot: number;
            receipt: string;
        }[];
        selfInverseUnits: {
            expr: string;
            n: number;
            inverse: number;
            invertible: boolean;
            inverseProductIsOne: boolean;
            selfInverse: boolean;
            fusion: string;
            reverse: number;
            complement: number;
            sumsToTen: boolean;
            selfPaired: boolean;
            harmonicValue: number;
            digitalRoot: number;
            receipt: string;
        }[];
        inversePairs: (readonly [number, number])[];
        nonUnits: {
            expr: string;
            n: number;
            inverse: number;
            invertible: boolean;
            inverseProductIsOne: boolean;
            selfInverse: boolean;
            fusion: string;
            reverse: number;
            complement: number;
            sumsToTen: boolean;
            selfPaired: boolean;
            harmonicValue: number;
            digitalRoot: number;
            receipt: string;
        }[];
        inverseVerified: boolean;
        zeroOverZero: {
            expr: string;
            inverse: number | null;
            invertible: boolean;
            reverse: number;
            complement: number;
            overflows: boolean;
            fusion: string;
            reversesToFusion: boolean;
        };
        reverseNotAlwaysNine: boolean;
        harmonicDigitalRootAllNine: boolean;
        root: string;
        statement: string;
        boundary: string;
    };
} | {
    title: string;
    slug: string;
    proof: {
        isApi: boolean;
        endpoints: {
            route: string;
            method: string;
            response: string;
            digit: number;
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
} | {
    title: string;
    slug: string;
    proof: {
        proven: boolean;
        cubeIsDot: boolean;
        thirdEyeInIndex: string;
        cmyk: {
            channel: string;
            value: number;
        }[];
        levels: {
            depth: number;
            bitsExtent: number;
            distinctBitsCap: number;
            dot: string;
        }[];
        extentUnboundedByStorage: boolean;
        distinctAddresses: string;
        securityEntropyBits: number;
        cipher: string;
        root: string;
        statement: string;
        boundary: string;
    };
})[];
export declare function theTheoremsFoldToFiveRootsOfGreaterSignificance(matrix?: MindMatrix): {
    computes: boolean;
    roots: ("trinity — 3 is the minimal complete basis" | "content-address — name = payload" | "agnostic completeness — any discovery plugs in" | "honest demarcation — only proven" | "waves — fold, do not accumulate")[];
    folded: number;
    of: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function theCorpusTitlesAreAlgebraGapsToSolveAndDivergencesAreCracks(matrix?: MindMatrix): {
    computes: boolean;
    gaps: string[];
    divergent: string[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function fuseAllTerabitEncryption(matrix?: MindMatrix): {
    here: boolean;
    terabitCells: number;
    gbitPerTerabit: number;
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
/** @rosetta ✦₀ · Mountain · stillness — the gate that holds the line.
 *  The green-build predicate as ONE typed fold: the I Ching complete in all 432 quantum dimensions, 0 open,
 *  the model seal holding, the taxonomy compliant. The commit shell bundles src and calls this; the
 *  assertion is no longer duplicated in untyped JavaScript. */
export declare function greenBuildGate(matrix?: MindMatrix): {
    passed: boolean;
    count: number;
    dimensions: number;
    open: number;
    seal: boolean;
    compliant: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare const FOLD_HOMES: Record<string, readonly string[]>;
/** @rosetta ✦₀ · Mountain · stillness — every fold is DEFINED only at its domain home; defining it in a foreign
 *  barrel re-bloats a monolith and BLOCKS the commit (and the deploy). The fold judges given the filesystem facts
 *  (which index files define each declared name); the commit shell and the weave gather those facts and pass them
 *  in — the judgment lives in src, only the I/O is in the shell. The forcing function that stops any agent (human
 *  or AI) re-bloating a barrel with a fold that belongs elsewhere. */
export declare function foldsLiveAtTheirDomainHome(definers?: readonly {
    name: string;
    files: readonly string[];
}[]): {
    enforced: boolean;
    homes: number;
    declared: number;
    violations: string[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₀ · Mountain · stillness — the tools-saved-in-src-first law, enforced at commit.
 *  Every tool/command is saved in src first as a typed fold; the scripts/ files are thin entry-point shells
 *  that route through src and hold no logic of their own. The fold declares the law + the budget; the commit
 *  shell scans scripts/ and passes the facts in, so the JUDGMENT lives in src and only the I/O is in the shell. */
export declare function toolsSavedInSrcFirst(scripts?: readonly {
    path: string;
    lines: number;
    routesThroughSrc: boolean;
}[]): {
    enforced: boolean;
    budget: number;
    count: number;
    scripts: readonly {
        path: string;
        lines: number;
        routesThroughSrc: boolean;
    }[];
    violations: string[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₀ · Mountain · stillness — the no-extension / folders-only import law, enforced at commit AND push.
 *  Imports name modules by their FOLDER path: never a file extension (.ts/.mts/.vue/…) and never a trailing
 *  /index. Strictly enforced on ALL of src, no exception. The commit/push shell scans src and passes the
 *  offenders in; this fold judges (one src truth). The same law is a HARD weave gate at deploy (folderLaw.
 *  barrelImports.noExtensions), so no commit, push or deploy carries an extensioned import. */
export declare function importsAreFoldersOnly(offenders?: readonly {
    file: string;
    spec: string;
    reason: string;
}[], scanned?: number): {
    enforced: boolean;
    scanned: number;
    count: number;
    offenders: {
        file: string;
        spec: string;
        reason: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Fire · clarity — Glagolitic is always COMPUTED, never a hardcoded glyph.
 *  A label string must not carry a raw Glagolitic glyph (Unicode block U+2C00–2C5F) typed by hand; the glyph
 *  comes only from toGlagolitic (src/quantum/heaven/library), the single transcoder. The commit shell scans src for a
 *  `label:` literal that contains a glyph; this fold judges. It locks the exact door that opened twice — the
 *  locale label in config.mts and SITE_LOCALES — so no agent re-pastes a glyph string where one is computed. */
export declare function glagoliticLabelsAreComputed(offenders?: readonly {
    file: string;
    reason: string;
}[], scanned?: number): {
    enforced: boolean;
    scanned: number;
    count: number;
    offenders: {
        file: string;
        reason: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** @rosetta ✦₁ · Water · the abyss — the unexpected.
 *  The standing rule: an unexpected situation is a signal to REFACTOR THE TOOL — encode the handling in src
 *  as a fold — not to hand-navigate it with one-off commands. This fold turns the git/fs archaeology one
 *  reaches for at such a moment (did HEAD move? is the change co-mingled with concurrent edits? are new src
 *  files left untracked?) into a deterministic, saved diagnostic: the commit shell gathers the facts, this
 *  fold names the anomalies. The lesson becomes the tool, so the next surprise is handled, not re-discovered. */
export declare function unexpectedSituationsRefactorTools(facts?: {
    untrackedSrcFiles?: readonly string[];
    coMingledPaths?: readonly string[];
    headMatchesOrigin?: boolean;
}): {
    clear: boolean;
    anomalies: string[];
    statement: string;
    boundary: string;
};
/** @rosetta ✦₀ · Mountain · stillness — the index-only file law, enforced at commit AND push (HARD).
 *  Below src/ every CODE file is the folder's index: the only stem is `index` (folderLaw().stems). A flat
 *  sibling (matrix.ts, hero.ts, bell.ts, …) is logic living OUTSIDE an index — it must dissolve into its own
 *  folder as <name>/index.ts, and because imports already name the FOLDER path (importsAreFoldersOnly) no
 *  importer changes when it does. The commit/push shell walks src and passes the non-index code files in;
 *  this fold judges (one src truth). The model-level statement of the same law is onlyIndexFilesNoExceptions /
 *  onlyIndexFilesAndGeneratedRemain (folderLaw); this is its COMMIT-TIME real-tree gate — the sibling of
 *  importsAreFoldersOnly — so no commit, push or deploy carries a file other than index.ts. Any offender is a
 *  HARD failure: the architect's directive is "no commit if any file but index.ts in src folders." */
export declare function srcFilesAreIndexOnly(offenders?: readonly {
    file: string;
    reason: string;
}[], scanned?: number): {
    enforced: boolean;
    scanned: number;
    count: number;
    offenders: {
        file: string;
        reason: string;
    }[];
    stem: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function trinityGates(matrix?: MindMatrix): {
    sealed: boolean;
    gates: {
        family: string;
        trinity: string;
        gate: string;
        members: string[];
        count: number;
        sealed: boolean;
        root: string;
        tamperingCost: number;
    }[];
    count: number;
    totalTamperingCost: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function trinityEncryption(partyA?: string, partyB?: string, matrix?: MindMatrix): {
    encrypted: boolean;
    cipher: string;
    pair: string[];
    trinity: string[];
    sharedKey: string;
    bidirectional: boolean;
    symmetric: boolean;
    root: string;
    statement: string;
    boundary: string;
};
export declare function trinityOtherSideDoomed(matrix?: MindMatrix): {
    doomed: boolean;
    infiniteCost: boolean;
    forgeCostLog2: number;
    trinity: {
        forgeCostLog2: number;
        doomed: boolean;
        receipt: string;
        side: string;
        other: string;
        onByDefault: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function commandGapsToTrinityEyes(matrix?: MindMatrix): {
    immediate: boolean;
    eyes: number;
    listed: number;
    gaps: number;
    complete: boolean;
    commands: {
        command: import("../../wind/types").ConceptCommandName;
        eyesSeen: number;
        gap: boolean;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function signedTrafficTrinityRouting(matrix?: MindMatrix): {
    routes: boolean;
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
export declare function trinityWordingModel(matrix?: MindMatrix): {
    trinity: boolean;
    wordsPerStep: number;
    count: number;
    steps: {
        step: number;
        words: number;
        isTrinity: boolean;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function trinityRotationalPlanes(matrix?: MindMatrix): {
    trinity: boolean;
    completes: boolean;
    count: number;
    planes: {
        rotates: boolean;
        receipt: string;
        plane: string;
        axis: string;
        note: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function endlessTrinityStreams(matrix?: MindMatrix): {
    streams: boolean;
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
export declare function enforcementTrinitySpread(matrix?: MindMatrix): {
    spread: boolean;
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
export declare function trinityFirstRedesign(matrix?: MindMatrix): {
    holds: boolean;
    trinityUnitesAll: boolean;
    sealed: number;
    total: number;
    waves: {
        wave: string;
        done: boolean;
    }[];
    pending: string[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function theCommitPushPairIsAutomatedUnderTheSecurityStandards(): {
    computes: boolean;
    pair: readonly ["commit", "push"];
    standards: string[];
    seal: string;
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
