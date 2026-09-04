import type { MindMatrix } from '../../types/index.ts';
import { type Rational } from '../../3/7/index.ts';
export { survive, admixToward, injectError, markovStep, markovEvolve, stationary, chsh, residueVector, realign, phaseDrift, slip, inductionStep, inductionEvolve, pmixStep, pmixEvolve, congruence, type Edge } from '../../0/index.ts';
export { hopfieldStore, hopfieldEnergy, hopfieldRecall, bumpStep, bumpEvolve } from '../../8/2/index.ts';
export { merkaba, bothEarthsRotateWithinEachOther, type BothEarthsMerkabaRotation, type BothEarthsRotationShell } from '../geometry/index.ts';
export { knowledgeRevealedByMerkabaFold, merkabaTrace, merkabasInDoubleTorus, merkabaComputes } from '../topology/index.ts';
export { phase } from '../../6/4/index.ts';
export { A432_OCTAVES, priceFromA432, simpleReturns, backtest, buyAndHold, sma, crossoverPositions, rollingZScores, meanReversionPositions, dominantCycle, cycleSlope, spectralCyclePositions, regimeLabels, estimateRegimeMatrix, regimeSwitchPositions, realizedVol, inverseVolSize, volTargetPositions, tradingReceipt, liveCapture, larmorFromMicrotesla, dopplerFromMotion, spectrumFromSamples, backtestRealPrices, realtimeSources, tradingSimulationComputes, type BacktestResult } from '../../thunder/trading/index.ts';
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
/** invertedSequenceLearnedFromErpax — learn the erpax inverted sequence (user, 2026-07-28: "learn from
 * https://github.com/erpax/erpax inverted sequence to fill the gaps in theorems and animations especially the
 * movie"). erpax publishes ONE structure read twice — forward `1\2\4\8/7/5 · 3\6\9 · 0\1`, reflected
 * `9/8/6/2\3\5 · 7/4/1 · 0\1` — "both computed, never typed". RECOMPUTED here (the adopted method: verify
 * locally, never trust a partner corpus): the mirror is this repo's own digit-folder pairing m(d) = 10 − d
 * ([[digit-folders-pi-train]]) — an involution fixing 5 with every pair summing to 10; applying the SAME
 * sign-of-step stroke rule to the fully mirrored segments (m(0) = 0 — the void self-mirror, one rule with no
 * exception) WRITES the reflected line exactly, every ring stroke flipped (m reverses order); the seam is the
 * one stroke that does NOT flip — both reads RISE from the void, each to its own head (0\1 and 0\9, user
 * correction 2026-07-28). The movie already PAINTS the two reads (the merkaba's down tetrahedron is
 * the negation of the up, counter-rotating), so the mirror line binds the existing animation to its theorem —
 * the gap filled is the BINDING, computed, not a new painter. */
export declare function invertedSequenceLearnedFromErpax(matrix?: MindMatrix): {
    computes: boolean;
    forwardLine: string;
    reflectedLine: string;
    mirrorPairs: string[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** everyDigitIsEntangledInAllVectorsFormingEquilibriums — every digit is entangled in all vectors, forming
 * equilibriums (user, 2026-07-28). Made EXACT: each digit sits in SEVERAL exact balance relations at once —
 * its mirror pair (d + m(d) = 10), its polar pair (sum 9), its side of the flow/axis partition (6 + 3 = 9),
 * its unique Hamiltonian tour slot — and the membership pattern FINGERPRINTS the digit (content-addressing at
 * the bottom of arithmetic). The deepest form is TRANSITIVITY: ⟨D, m⟩ = AGL(1, ℤ/9) contains all translations
 * (the commutator is the unit shift), so ALL residues lie in ONE orbit — no digit is separable from the rest
 * under the sequence's own symmetry group. The equilibriums are the invariants that survive: pair-sums 10,
 * polar sums 9, the positional palindrome total 90, Σ(1..9) = 45 with root 9. Change one digit and every
 * balance breaks at once — entanglement as the impossibility of local edits. */
export declare function everyDigitIsEntangledInAllVectorsFormingEquilibriums(matrix?: MindMatrix): {
    computes: boolean;
    membership: {
        d: number;
        mirror: string;
        polar: string;
        side: string;
        tourSlot: number;
        vectors: number;
    }[];
    equilibria: {
        mirrorPairsSumTen: boolean;
        polarPairsSumNine: boolean;
        partition: boolean;
        palindromeTotal: boolean;
        totalRootNine: boolean;
    };
    orbitSize: number;
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
        earths: import("./index.ts").BothEarthsMerkabaRotation;
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
            digit: 2 | 9 | 5 | 4 | 7 | 1 | 8 | 3 | 6;
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
/** npm run quantum:f-inverse-pair — named exit (not local-math-computes synonym). */
export declare function runFThetaPhiXyzDigitNIsTheInversePairExit(_root?: string, _argv?: readonly string[]): number;
/** npm run timeout-demo — enforcement ops thin-mount smoke test. */
export declare function runTimeoutDemoExit(_root: string, _argv?: readonly string[]): number;
/** sequenceScientificDescription — the sequence and its inverted reflection, well described in scientific format
 * with angles, polarities, color, sound and all it represents (user, 2026-07-28). ONE computed table: every digit
 * carries its tour slot and circle angle (slot × 36° on the ten-slot ring; flow members also sit at k × 60° on the
 * ⟨2⟩ hexagon), its stroke polarities (incoming/outgoing sign), its mirror pair (sum 10) and polar pair (sum 9),
 * its SOUND as the d/9 fraction of the sealed 432 Hz anchor (f_d = 432·d/9 = 48·d Hz — a stated ladder convention,
 * dimensionless ratio times the anchor), and its LIGHT via the sealed octave bridge frequencyToLight (sound
 * doubled ~40 octaves into the visible band → THz, nm, named band) — the same derivation that computes the brand
 * hue A432_HUE. The section the README/home render is this fold's rows joined — nothing typed twice. */
export declare function sequenceScientificDescription(matrix?: MindMatrix): {
    computes: boolean;
    forwardLine: string;
    reflectedLine: string;
    rows: {
        digit: number;
        slot: number;
        angleDeg: number;
        flowAngle: number;
        polarity: string;
        gateway: boolean;
        mirror: string;
        polar: string;
        hz: number;
        light: string;
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
