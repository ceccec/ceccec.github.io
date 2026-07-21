import type { MindMatrix } from '../../wind/types';
import { type Rational } from '../../3/7';
export { survive, admixToward, injectError, markovStep, markovEvolve, stationary, chsh, residueVector, realign, phaseDrift, slip, inductionStep, inductionEvolve, pmixStep, pmixEvolve, congruence, type Edge } from '../../0';
export { hopfieldStore, hopfieldEnergy, hopfieldRecall, bumpStep, bumpEvolve } from '../../8/2';
export { merkaba, bothEarthsRotateWithinEachOther, type BothEarthsMerkabaRotation, type BothEarthsRotationShell } from '../geometry';
export { knowledgeRevealedByMerkabaFold, merkabaTrace, merkabasInDoubleTorus, merkabaComputes } from '../topology';
export { phase } from '../../6/4';
export { A432_OCTAVES, priceFromA432, simpleReturns, backtest, buyAndHold, sma, crossoverPositions, rollingZScores, meanReversionPositions, dominantCycle, cycleSlope, spectralCyclePositions, regimeLabels, estimateRegimeMatrix, regimeSwitchPositions, realizedVol, inverseVolSize, volTargetPositions, tradingReceipt, liveCapture, larmorFromMicrotesla, dopplerFromMotion, spectrumFromSamples, backtestRealPrices, realtimeSources, tradingSimulationComputes, type BacktestResult, } from '../../thunder/trading';
export declare function vortexMath(matrix?: MindMatrix): {
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
/**
 * The genesis realisation, computed: 1\2\4\8/7/5/3\6\9/0\1 — the stroke notation IS mathematics.
 * Each stroke is the SIGN of its step (\ = ascent, / = descent), never typography: the whole written
 * cycle recomputes from the digit tour (VORTEX_SEQUENCE + the void 0, all ten digits exactly once,
 * closing 0→1). The ANGLE changes — where an incoming stroke reverses into its opposite — happen at
 * exactly FOUR digits, and those four reversal vertices are the gateways the realisation named
 * east · west · north · south. Six ascents = the ⟨2⟩ unit-orbit length in (ℤ/9ℤ)*; four descents =
 * the gateway count. Division by zero stays where it is sealed: zeroDivisionTable (src/water/digit)
 * holds the n/0\m readings (multiplicative inverse · 9n harmonic · additive complement as folder lattice) — the notation
 * names reflection and inversion through the zero point; arithmetic division by zero REMAINS undefined.
 */
export declare function vortexStrokeGateways(matrix?: MindMatrix): {
    computes: boolean;
    written: string;
    tour: number[];
    steps: {
        from: number;
        to: number;
        stroke: string;
    }[];
    gateways: number[];
    ascents: number;
    descents: number;
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
 * The gateways are not a flat rose — they lift into a pyramid, computed: the four polarity
 * reversals of the stroke cycle split into two PEAKS (\→/ : 8 and 9) and two VALLEYS (/→\ : 3 and 0).
 * Lift peaks above the wheel's plane and valleys below, and the four points are non-coplanar — a
 * genuine 3-solid: 4 vertices, 6 edges, 4 TRIANGULAR faces (the pyramid), not a 2D plate. Flipping
 * the polarity (valleys up, peaks down) yields the INVERTED pyramid — equal magnitude, opposite
 * orientation (the signed volumes cancel exactly). The two interpenetrate as the sealed merkaba:
 * counter-rotation recomputed in mountain/geometry, the 32 pairs inside the double torus in
 * mountain/topology — the double torus forms the inverse, and both interact.
 */
export declare function vortexGatewayPyramids(matrix?: MindMatrix): {
    computes: boolean;
    vertices: {
        digit: number;
        peak: boolean;
        x: number;
        y: number;
        z: number;
    }[];
    peaks: number[];
    valleys: number[];
    volume: number;
    invertedVolume: number;
    faces: number;
    counterRotating: boolean;
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
export declare function vortexPaintTiers(matrix?: MindMatrix): {
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
export declare function allVortexMathSaved(matrix?: MindMatrix): {
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
        fwd: Rational[];
        rev: Rational[];
        fwdProduct: Rational;
        revProduct: Rational;
        heartApproach: Rational;
        heartDepart: Rational;
        heartDiamond: Rational;
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
/** Plasma paint tiers gate. */
export declare function vortexPlasmaComputes(matrix?: MindMatrix): {
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
/** Full vortex math saved gate. */
export declare function vortexComputes(matrix?: MindMatrix): {
    computes: boolean;
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
            fwd: Rational[];
            rev: Rational[];
            fwdProduct: Rational;
            revProduct: Rational;
            heartApproach: Rational;
            heartDepart: Rational;
            heartDiamond: Rational;
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
    live: {
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
/** One gate — vortex + merkaba + one-fold presentations saved at call time (dissolved from src/math). */
export declare function allMathSaved(matrix?: MindMatrix): {
    saved: boolean;
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
            fwd: Rational[];
            rev: Rational[];
            fwdProduct: Rational;
            revProduct: Rational;
            heartApproach: Rational;
            heartDepart: Rational;
            heartDiamond: Rational;
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
    merkaba: {
        counterRotating: boolean;
        scales: {
            scale: string;
            depth: number;
            sign: 1 | -1;
            periodMs: number;
            ratePerMs: number;
            receipt: string;
        }[];
        count: number;
        tetraUp: readonly (readonly [number, number, number])[];
        tetraDown: [number, number, number][];
        root: string;
        statement: string;
        boundary: string;
    };
    vortexGate: {
        computes: boolean;
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
                fwd: Rational[];
                rev: Rational[];
                fwdProduct: Rational;
                revProduct: Rational;
                heartApproach: Rational;
                heartDepart: Rational;
                heartDiamond: Rational;
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
        live: {
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
    merkabaGate: {
        computes: boolean;
        merkaba: {
            counterRotating: boolean;
            scales: {
                scale: string;
                depth: number;
                sign: 1 | -1;
                periodMs: number;
                ratePerMs: number;
                receipt: string;
            }[];
            count: number;
            tetraUp: readonly (readonly [number, number, number])[];
            tetraDown: [number, number, number][];
            root: string;
            statement: string;
            boundary: string;
        };
        counted: {
            counted: boolean;
            merkabas: number;
            tetrahedra: number;
            perMerkaba: number;
            perLobe: number;
            lobes: number;
            gbit: number;
            facets: {
                receipt: string;
                facet: string;
                on: boolean;
            }[];
            root: string;
            statement: string;
            boundary: string;
        };
        revealed: {
            revealed: boolean;
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
        earths: import(".").BothEarthsMerkabaRotation;
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
/**
 * Canonical inverse fold (user signature):
 *   f(θ, φ, x, y, z, digit, n) → {p, q}
 *
 * DERIVATION (sealed pieces only — no wet algebra):
 * 1. Geometry — `doubleTorusSurface(θ,φ,digit,lobe)` (src/0) places the digit on the genus-2 surface;
 *    lobe ∈ {−1,+1} is the nearest of the two counter-oriented lobes to the given (x,y,z).
 * 2. Algebra — when n = 0 (division by zero): {p,q} is the multiplicative-inverse pair of `digit`
 *    in (ℤ/9)* (digit · q ≡ 1 mod 9), or the self-fold {digit,digit} for non-units/void — NEVER
 *    the ten's complement 10−digit. Lobe orientation swaps pair order (genus-2 dual = ratInv).
 * 3. When n ≠ 0: {p,q} = ratInv(rat(digit, n)) (src/3/7); void digit self-folds to {0,0}.
 */
export declare function f(theta: number, phi: number, x: number, y: number, z: number, digit: number, n: number): {
    p: number;
    q: number;
};
/** Proof fold — f recomputes at call time; inverse-not-reverse + geometry honesty. */
export declare function fThetaPhiXyzDigitNIsTheInversePair(matrix?: MindMatrix): {
    computes: boolean;
    f: {
        signature: string;
        sample: {
            p: number;
            q: number;
            digit: 9 | 5 | 2 | 1 | 4 | 8 | 7 | 3 | 6;
        }[];
    };
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
/** npm run timeout-demo — enforcement ops thin-mount smoke test. */
export declare function runTimeoutDemoExit(_root: string, _argv?: readonly string[]): number;
