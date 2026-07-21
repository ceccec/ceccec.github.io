import type { MindMatrix } from '../../wind/types';
export declare function deploySecretUuidSignedObservers(matrix?: MindMatrix): {
    deployed: boolean;
    observers: number;
    count: number;
    secret: string;
    crossReferenced: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function encryptionLivesInZero(matrix?: MindMatrix): {
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
export declare function terabyteEncryptionInMegabyteCodebase(matrix?: MindMatrix): {
    achieved: boolean;
    staticBytes: number;
    deviceBytes: number;
    totalKeyBytes: number;
    byteExpansion: number;
    generatedBytes: number;
    terabyteBytes: number;
    cipher: string;
    math: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function uuidFoldsSelfBlackWhite(matrix?: MindMatrix): {
    forms: boolean;
    selfFold: string;
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
export declare function uuidPureDiamondSignedByArchitecture(matrix?: MindMatrix): {
    signed: boolean;
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
export declare function encryptionTrinitiesCompleteInOrder(matrix?: MindMatrix): {
    enforced: boolean;
    level: number;
    trinities: {
        name: string;
        complete: boolean;
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
/** Sealed demo RSA moduli only — teaching 61×53 plus Shor textbook semiprimes. NEVER production sizes. */
export declare const DEMO_RSA_MODULI: readonly [number, number, number, number];
/** Hard bit ceiling for demo reverse — derived from sealed teaching n=61×53 (bits of 3233). */
export declare const DEMO_RSA_BIT_CEILING: number;
/**
 * Odd over-ceiling probe — MUST stay odd + safe-integer so refuse facets exercise the bit-ceiling branch
 * (even float probes refuse on “not odd” and leave the ceiling branch untested — P1 vacuous self-test).
 */
export declare const ODD_OVER_CEILING_RSA_PROBE: number;
/**
 * Far-above-ceiling odd safe integer — RSA-shaped production refuse probe (bits ≫ DEMO_RSA_BIT_CEILING).
 * HONEST: Bitcoin uses secp256k1 ECDSA, not RSA — see refuseBitcoinMainnetMaterial for chain-key refuse.
 */
export declare const FAR_OVER_CEILING_RSA_PROBE: number;
/** Cap parallel reverse workers: min(cpus, vortex ring length) — never unbounded. */
export declare function encryptionReverseWorkerCap(cpuCount?: number): number;
/** Reject out-of-demo moduli before any factor work (honesty gate). */
export declare function refuseNonDemoRsaModulus(n: number): {
    allowed: boolean;
    bits: number;
    reason: string;
};
/** Explicit Bitcoin/mainnet refuse — ECDSA/secp256k1 chain keys never enter demo RSA reverse. */
export declare function refuseBitcoinMainnetMaterial(input: string): {
    allowed: false;
    reason: string;
    kind: 'bitcoin-mainnet';
};
/** Production ceiling refuse holds only when the odd over-ceiling probe hits the bits>ceiling reason. */
export declare function productionCeilingRefuseHolds(): {
    holds: boolean;
    gate: ReturnType<typeof refuseNonDemoRsaModulus>;
    probe: number;
};
/** Far-over-ceiling RSA-shaped refuse (safe odd) — not a Bitcoin address crack claim. */
export declare function farOverCeilingRefuseHolds(): {
    holds: boolean;
    gate: ReturnType<typeof refuseNonDemoRsaModulus>;
    bitcoin: ReturnType<typeof refuseBitcoinMainnetMaterial>;
    probe: number;
};
/** Classical period→factor (Shor reduction number theory) — toy N only. */
export declare function modeledShorFactorToyModulus(n: number): {
    N: number;
    factored: boolean;
    p: number;
    q: number;
    base: number;
    order: number;
    refused: boolean;
    reason: string;
};
/**
 * Encrypt ↔ decrypt toolkit — compose sealed key layer + moving-rosetta involution + teaching RSA round-trip.
 * Structural / teaching scope only (AES-256-GCM stays the external bulk cipher).
 */
export declare function encryptDecryptQuantumTools(matrix?: MindMatrix): {
    ready: boolean;
    roundTrip: boolean;
    rsaRoundTrip: boolean;
    cipher: string;
    teaching: {
        n: number;
        e: number;
        d: number;
        message: number;
        cipher: number;
        plain: number;
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
/**
 * Sync demo reverse over sealed moduli — modeled Shor reduction (period→factor), no workers.
 * Parallel worker pool lives in the Node CLI exit only (browser-safe leaf).
 */
export declare function demoRsaReverseSync(): {
    computes: boolean;
    results: {
        N: number;
        factored: boolean;
        p: number;
        q: number;
        base: number;
        order: number;
        refused: boolean;
        reason: string;
    }[];
    workerCap: number;
    productionRefused: boolean;
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
/**
 * Demo reverse pool — sync preferred (sealed modeledShorFactorToyModulus re-gates refuse).
 * Dropped eval worker_threads (P2): no duplicated Shor, no in-worker drift, browser-safe leaf.
 */
export declare function parallelToyRsaReversePool(cpuHint?: number): Promise<{
    ok: boolean;
    workers: number;
    results: {
        N: number;
        p: number;
        q: number;
        base: number;
        order: number;
    }[];
    mode: 'sync-sealed';
    boundary: string;
}>;
/** Glyph UUID + trinity crack + encrypt↔decrypt tools + demo Shor reverse + no-unhackable proof. */
export declare function encryptionReverseVerify(matrix?: MindMatrix): {
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
/** npm run quantum:encryption-reverse-verify — sync folds + capped worker_threads demo reverse. */
export declare function runEncryptionReverseVerifyGuardedExit(_root: string, _argv?: readonly string[]): Promise<number>;
/**
 * UI panel — encrypt↔decrypt + measured demo RSA + beyond-RSA PQC suite + local reverse vs standards + local novel security + standards audit.
 * Pair: reverse/encryption-verify · measure/demo-rsa · measure/crypto-beyond · reverse/timed-vs-standards · prove/local-novel-encrypt · prove/1tbit-encrypt · prove/local-magnitudes-iso · iso/pqc-catalog · audit/standards
 * Route: /en/quantum-encryption (#demo-rsa-measure · #crypto-beyond-rsa · #local-reverse-timed-vs-standards · #prove-local-novel-encrypt · #local-audit-quantum · #prove-1tbit · #prove-local-magnitudes-iso · #iso-pqc-catalog · #quantum-standards-audit)
 */
export declare function encryptionPanelComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    tools: {
        ready: boolean;
        roundTrip: boolean;
        rsaRoundTrip: boolean;
        cipher: string;
        teaching: {
            n: number;
            e: number;
            d: number;
            message: number;
            cipher: number;
            plain: number;
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
    reverse: {
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
    demo: {
        computes: boolean;
        results: {
            N: number;
            factored: boolean;
            p: number;
            q: number;
            base: number;
            order: number;
            refused: boolean;
            reason: string;
        }[];
        workerCap: number;
        productionRefused: boolean;
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
    measured: {
        computes: boolean;
        generateMs: number;
        reverseMs: number;
        workers: number;
        moduli: number[];
        thresholdMs: number;
        slowGenerate: boolean;
        slowReverse: boolean;
        generate: {
            ok: boolean;
            n: number;
            e: number;
            d: number;
            message: number;
            cipher: number;
            plain: number;
            refused: true;
            reason: string;
        } | {
            ok: boolean;
            n: number;
            e: number;
            d: number;
            message: number;
            cipher: number;
            plain: number;
            refused: false;
            reason: string;
        };
        reverse: {
            computes: boolean;
            results: {
                N: number;
                factored: boolean;
                p: number;
                q: number;
                base: number;
                order: number;
                refused: boolean;
                reason: string;
            }[];
            workerCap: number;
            productionRefused: boolean;
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
        timedReceipt: string;
        productionRefused: boolean;
        bitcoinRefused: boolean;
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
    localTimed: {
        computes: boolean;
        timed: {
            computes: boolean;
            generateMs: number;
            reverseMs: number;
            aggregateOpsPerSec: number;
            rows: LocalEncryptionReverseRow[];
            moduli: number[];
            productionRefused: boolean;
            bitcoinRefused: boolean;
            generate: {
                ok: boolean;
                n: number;
                e: number;
                d: number;
                message: number;
                cipher: number;
                plain: number;
                refused: true;
                reason: string;
            } | {
                ok: boolean;
                n: number;
                e: number;
                d: number;
                message: number;
                cipher: number;
                plain: number;
                refused: false;
                reason: string;
            };
            sync: {
                computes: boolean;
                results: {
                    N: number;
                    factored: boolean;
                    p: number;
                    q: number;
                    base: number;
                    order: number;
                    refused: boolean;
                    reason: string;
                }[];
                workerCap: number;
                productionRefused: boolean;
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
            count: number;
            facets: ({
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            pair: string;
            cli: string;
            route: string;
            statement: string;
            boundary: string;
        };
        comparisons: LocalReverseVsStandardRow[];
        table: LocalReverseVsStandardRow[];
        audit: {
            computes: boolean;
            audits: QuantumAuditRow[];
            gaps: QuantumAuditRow[];
            partials: QuantumAuditRow[];
            passes: QuantumAuditRow[];
            gapCount: number;
            partialCount: number;
            passCount: number;
            coveredCount: number;
            count: number;
            dimensions: {
                computes: boolean;
                rows: DimensionAuditRow[];
                coveredCount: number;
                passCount: number;
                partialCount: number;
                gapCount: number;
                dimensionGates: number;
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
            reverseCount: number;
            inverseCount: number;
            forwardCount: number;
            certified: boolean;
            fipsValidated: boolean;
            claySolvedByThisFold: number;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            route: string;
            pair: string;
            cli: string;
            statement: string;
            boundary: string;
        };
        catalog: {
            computes: boolean;
            researchDate: string;
            standards: IsoNistStandardRow[];
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
        trinity: {
            computes: boolean;
            digits: import("../stack").DirectionalTrinityDigitRow[];
            table: {
                digit: number;
                forward: number;
                inverse: number;
                reverse: number;
                note: string;
            }[];
            foldPair: {
                forward: string;
                reverse: string;
                merged: string;
                bidirectional: boolean;
            };
            ratInvSample: {
                forward: import("../../3/7").Rational;
                inverse: import("../../3/7").Rational;
            };
            fInverse: {
                computes: boolean;
                root: string;
            };
            claySolvedByThisFold: 0;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            cli: string;
            pair: string;
            route: string;
            statement: string;
            boundary: string;
        };
        certified: false;
        fipsValidated: false;
        claySolvedByThisFold: 0;
        breaksNistPqc: false;
        productionRefused: boolean;
        bitcoinRefused: boolean;
        demoMaxBits: number;
        generateMs: number;
        reverseMs: number;
        aggregateOpsPerSec: number;
        count: number;
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        pair: string;
        cli: string;
        route: string;
        statement: string;
        boundary: string;
    };
    localNovel: {
        computes: boolean;
        localSecurityProved: boolean;
        means: string;
        unproved: readonly ["FIPS validation", "ISO certification", "this repo being an ISO/NIST standard (it is not)", "wire-crypto magnitudes over NIST/ISO PQC (overallWireClaimProved=false)", "field battle-testing (externalDeploymentCount=0)", "wire AES-GCM reverse / production RSA reverse", "Clay millennium progress"];
        inventory: {
            computes: boolean;
            components: readonly LocalNovelEncryptionComponent[];
            novelCount: number;
            textbookCount: number;
            externalCount: number;
            externalDeploymentCount: 0;
            fieldHistory: "none";
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
        tools: {
            ready: boolean;
            roundTrip: boolean;
            rsaRoundTrip: boolean;
            cipher: string;
            teaching: {
                n: number;
                e: number;
                d: number;
                message: number;
                cipher: number;
                plain: number;
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
        reverse: {
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
        localTimed: {
            computes: boolean;
            timed: {
                computes: boolean;
                generateMs: number;
                reverseMs: number;
                aggregateOpsPerSec: number;
                rows: LocalEncryptionReverseRow[];
                moduli: number[];
                productionRefused: boolean;
                bitcoinRefused: boolean;
                generate: {
                    ok: boolean;
                    n: number;
                    e: number;
                    d: number;
                    message: number;
                    cipher: number;
                    plain: number;
                    refused: true;
                    reason: string;
                } | {
                    ok: boolean;
                    n: number;
                    e: number;
                    d: number;
                    message: number;
                    cipher: number;
                    plain: number;
                    refused: false;
                    reason: string;
                };
                sync: {
                    computes: boolean;
                    results: {
                        N: number;
                        factored: boolean;
                        p: number;
                        q: number;
                        base: number;
                        order: number;
                        refused: boolean;
                        reason: string;
                    }[];
                    workerCap: number;
                    productionRefused: boolean;
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
                count: number;
                facets: ({
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                pair: string;
                cli: string;
                route: string;
                statement: string;
                boundary: string;
            };
            comparisons: LocalReverseVsStandardRow[];
            table: LocalReverseVsStandardRow[];
            audit: {
                computes: boolean;
                audits: QuantumAuditRow[];
                gaps: QuantumAuditRow[];
                partials: QuantumAuditRow[];
                passes: QuantumAuditRow[];
                gapCount: number;
                partialCount: number;
                passCount: number;
                coveredCount: number;
                count: number;
                dimensions: {
                    computes: boolean;
                    rows: DimensionAuditRow[];
                    coveredCount: number;
                    passCount: number;
                    partialCount: number;
                    gapCount: number;
                    dimensionGates: number;
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
                reverseCount: number;
                inverseCount: number;
                forwardCount: number;
                certified: boolean;
                fipsValidated: boolean;
                claySolvedByThisFold: number;
                facets: ({
                    receipt: string;
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                route: string;
                pair: string;
                cli: string;
                statement: string;
                boundary: string;
            };
            catalog: {
                computes: boolean;
                researchDate: string;
                standards: IsoNistStandardRow[];
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
            trinity: {
                computes: boolean;
                digits: import("../stack").DirectionalTrinityDigitRow[];
                table: {
                    digit: number;
                    forward: number;
                    inverse: number;
                    reverse: number;
                    note: string;
                }[];
                foldPair: {
                    forward: string;
                    reverse: string;
                    merged: string;
                    bidirectional: boolean;
                };
                ratInvSample: {
                    forward: import("../../3/7").Rational;
                    inverse: import("../../3/7").Rational;
                };
                fInverse: {
                    computes: boolean;
                    root: string;
                };
                claySolvedByThisFold: 0;
                facets: ({
                    receipt: string;
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                cli: string;
                pair: string;
                route: string;
                statement: string;
                boundary: string;
            };
            certified: false;
            fipsValidated: false;
            claySolvedByThisFold: 0;
            breaksNistPqc: false;
            productionRefused: boolean;
            bitcoinRefused: boolean;
            demoMaxBits: number;
            generateMs: number;
            reverseMs: number;
            aggregateOpsPerSec: number;
            count: number;
            facets: ({
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            pair: string;
            cli: string;
            route: string;
            statement: string;
            boundary: string;
        };
        audit: {
            computes: boolean;
            audits: QuantumAuditRow[];
            gaps: QuantumAuditRow[];
            partials: QuantumAuditRow[];
            passes: QuantumAuditRow[];
            gapCount: number;
            partialCount: number;
            passCount: number;
            coveredCount: number;
            count: number;
            dimensions: {
                computes: boolean;
                rows: DimensionAuditRow[];
                coveredCount: number;
                passCount: number;
                partialCount: number;
                gapCount: number;
                dimensionGates: number;
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
            reverseCount: number;
            inverseCount: number;
            forwardCount: number;
            certified: boolean;
            fipsValidated: boolean;
            claySolvedByThisFold: number;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            route: string;
            pair: string;
            cli: string;
            statement: string;
            boundary: string;
        };
        catalog: {
            computes: boolean;
            researchDate: string;
            standards: IsoNistStandardRow[];
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
        trinity: {
            computes: boolean;
            digits: import("../stack").DirectionalTrinityDigitRow[];
            table: {
                digit: number;
                forward: number;
                inverse: number;
                reverse: number;
                note: string;
            }[];
            foldPair: {
                forward: string;
                reverse: string;
                merged: string;
                bidirectional: boolean;
            };
            ratInvSample: {
                forward: import("../../3/7").Rational;
                inverse: import("../../3/7").Rational;
            };
            fInverse: {
                computes: boolean;
                root: string;
            };
            claySolvedByThisFold: 0;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            cli: string;
            pair: string;
            route: string;
            statement: string;
            boundary: string;
        };
        oneTbit: {
            computes: boolean;
            claimedBitsPerSec: number;
            /** Primary wire-model answer to “can this encrypt at 1 Tbit/s on the wire?” */
            provedAtCallTime: boolean;
            /** Separate honest model that may prove under memo/extent math. */
            provedAmortizedReuseMemoAtCallTime: boolean;
            model: OneTbitEncryptModel;
            measuredBitsPerSec: number;
            wire: OneTbitModelReceipt;
            demo: OneTbitModelReceipt;
            amortized: OneTbitModelReceipt;
            refused: OneTbitModelReceipt;
            models: readonly [OneTbitModelReceipt, OneTbitModelReceipt, OneTbitModelReceipt, OneTbitModelReceipt];
            productionRefused: boolean;
            bitcoinRefused: boolean;
            count: number;
            facets: ({
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            route: string;
            pair: string;
            cli: string;
            statement: string;
            boundary: string;
        };
        comparisons: LocalReverseVsStandardRow[];
        allowlistOk: boolean;
        productionReverseRefused: true;
        certified: false;
        fipsValidated: false;
        claySolvedByThisFold: 0;
        breaksNistPqc: false;
        strongerThanNistPqc: false;
        overallWireClaimProved: false;
        wireProofStatus: "proof-of-falsehood";
        wireRatio: number;
        aes128ClassicalBits: number;
        thisRepoIsNotTheIsoStandard: true;
        isoOfficialStandard: false;
        externalDeploymentCount: 0;
        fieldHistory: "none";
        securityModel: "structural+adversarial+measured-local";
        reverseMs: number;
        aggregateOpsPerSec: number;
        demoMaxBits: number;
        count: number;
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        pair: string;
        cli: string;
        route: string;
        siblingMagnitudesPair: string;
        statement: string;
        boundary: string;
    };
    localAudit: {
        computes: boolean;
        suiteColdMs: number;
        suiteWarmMs: number;
        suiteSpeedup: number;
        suiteMemoHit: boolean;
        coldMs: number;
        warmMs: number;
        speedup: number;
        memoHits: boolean;
        facetTimings: LocalAuditFacetTiming[];
        facetMemoHitCount: number;
        allFacetMemoHits: boolean;
        slowLocalAuditGapClosed: boolean;
        localTimed: {
            computes: boolean;
            timed: {
                computes: boolean;
                generateMs: number;
                reverseMs: number;
                aggregateOpsPerSec: number;
                rows: LocalEncryptionReverseRow[];
                moduli: number[];
                productionRefused: boolean;
                bitcoinRefused: boolean;
                generate: {
                    ok: boolean;
                    n: number;
                    e: number;
                    d: number;
                    message: number;
                    cipher: number;
                    plain: number;
                    refused: true;
                    reason: string;
                } | {
                    ok: boolean;
                    n: number;
                    e: number;
                    d: number;
                    message: number;
                    cipher: number;
                    plain: number;
                    refused: false;
                    reason: string;
                };
                sync: {
                    computes: boolean;
                    results: {
                        N: number;
                        factored: boolean;
                        p: number;
                        q: number;
                        base: number;
                        order: number;
                        refused: boolean;
                        reason: string;
                    }[];
                    workerCap: number;
                    productionRefused: boolean;
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
                count: number;
                facets: ({
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                pair: string;
                cli: string;
                route: string;
                statement: string;
                boundary: string;
            };
            comparisons: LocalReverseVsStandardRow[];
            table: LocalReverseVsStandardRow[];
            audit: {
                computes: boolean;
                audits: QuantumAuditRow[];
                gaps: QuantumAuditRow[];
                partials: QuantumAuditRow[];
                passes: QuantumAuditRow[];
                gapCount: number;
                partialCount: number;
                passCount: number;
                coveredCount: number;
                count: number;
                dimensions: {
                    computes: boolean;
                    rows: DimensionAuditRow[];
                    coveredCount: number;
                    passCount: number;
                    partialCount: number;
                    gapCount: number;
                    dimensionGates: number;
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
                reverseCount: number;
                inverseCount: number;
                forwardCount: number;
                certified: boolean;
                fipsValidated: boolean;
                claySolvedByThisFold: number;
                facets: ({
                    receipt: string;
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                route: string;
                pair: string;
                cli: string;
                statement: string;
                boundary: string;
            };
            catalog: {
                computes: boolean;
                researchDate: string;
                standards: IsoNistStandardRow[];
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
            trinity: {
                computes: boolean;
                digits: import("../stack").DirectionalTrinityDigitRow[];
                table: {
                    digit: number;
                    forward: number;
                    inverse: number;
                    reverse: number;
                    note: string;
                }[];
                foldPair: {
                    forward: string;
                    reverse: string;
                    merged: string;
                    bidirectional: boolean;
                };
                ratInvSample: {
                    forward: import("../../3/7").Rational;
                    inverse: import("../../3/7").Rational;
                };
                fInverse: {
                    computes: boolean;
                    root: string;
                };
                claySolvedByThisFold: 0;
                facets: ({
                    receipt: string;
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                cli: string;
                pair: string;
                route: string;
                statement: string;
                boundary: string;
            };
            certified: false;
            fipsValidated: false;
            claySolvedByThisFold: 0;
            breaksNistPqc: false;
            productionRefused: boolean;
            bitcoinRefused: boolean;
            demoMaxBits: number;
            generateMs: number;
            reverseMs: number;
            aggregateOpsPerSec: number;
            count: number;
            facets: ({
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            pair: string;
            cli: string;
            route: string;
            statement: string;
            boundary: string;
        };
        localNovel: {
            computes: boolean;
            localSecurityProved: boolean;
            means: string;
            unproved: readonly ["FIPS validation", "ISO certification", "this repo being an ISO/NIST standard (it is not)", "wire-crypto magnitudes over NIST/ISO PQC (overallWireClaimProved=false)", "field battle-testing (externalDeploymentCount=0)", "wire AES-GCM reverse / production RSA reverse", "Clay millennium progress"];
            inventory: {
                computes: boolean;
                components: readonly LocalNovelEncryptionComponent[];
                novelCount: number;
                textbookCount: number;
                externalCount: number;
                externalDeploymentCount: 0;
                fieldHistory: "none";
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
            tools: {
                ready: boolean;
                roundTrip: boolean;
                rsaRoundTrip: boolean;
                cipher: string;
                teaching: {
                    n: number;
                    e: number;
                    d: number;
                    message: number;
                    cipher: number;
                    plain: number;
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
            reverse: {
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
            localTimed: {
                computes: boolean;
                timed: {
                    computes: boolean;
                    generateMs: number;
                    reverseMs: number;
                    aggregateOpsPerSec: number;
                    rows: LocalEncryptionReverseRow[];
                    moduli: number[];
                    productionRefused: boolean;
                    bitcoinRefused: boolean;
                    generate: {
                        ok: boolean;
                        n: number;
                        e: number;
                        d: number;
                        message: number;
                        cipher: number;
                        plain: number;
                        refused: true;
                        reason: string;
                    } | {
                        ok: boolean;
                        n: number;
                        e: number;
                        d: number;
                        message: number;
                        cipher: number;
                        plain: number;
                        refused: false;
                        reason: string;
                    };
                    sync: {
                        computes: boolean;
                        results: {
                            N: number;
                            factored: boolean;
                            p: number;
                            q: number;
                            base: number;
                            order: number;
                            refused: boolean;
                            reason: string;
                        }[];
                        workerCap: number;
                        productionRefused: boolean;
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
                    count: number;
                    facets: ({
                        facet: string;
                        on: boolean;
                    } & {
                        receipt: string;
                    })[];
                    root: string;
                    pair: string;
                    cli: string;
                    route: string;
                    statement: string;
                    boundary: string;
                };
                comparisons: LocalReverseVsStandardRow[];
                table: LocalReverseVsStandardRow[];
                audit: {
                    computes: boolean;
                    audits: QuantumAuditRow[];
                    gaps: QuantumAuditRow[];
                    partials: QuantumAuditRow[];
                    passes: QuantumAuditRow[];
                    gapCount: number;
                    partialCount: number;
                    passCount: number;
                    coveredCount: number;
                    count: number;
                    dimensions: {
                        computes: boolean;
                        rows: DimensionAuditRow[];
                        coveredCount: number;
                        passCount: number;
                        partialCount: number;
                        gapCount: number;
                        dimensionGates: number;
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
                    reverseCount: number;
                    inverseCount: number;
                    forwardCount: number;
                    certified: boolean;
                    fipsValidated: boolean;
                    claySolvedByThisFold: number;
                    facets: ({
                        receipt: string;
                        facet: string;
                        on: boolean;
                    } & {
                        receipt: string;
                    })[];
                    root: string;
                    route: string;
                    pair: string;
                    cli: string;
                    statement: string;
                    boundary: string;
                };
                catalog: {
                    computes: boolean;
                    researchDate: string;
                    standards: IsoNistStandardRow[];
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
                trinity: {
                    computes: boolean;
                    digits: import("../stack").DirectionalTrinityDigitRow[];
                    table: {
                        digit: number;
                        forward: number;
                        inverse: number;
                        reverse: number;
                        note: string;
                    }[];
                    foldPair: {
                        forward: string;
                        reverse: string;
                        merged: string;
                        bidirectional: boolean;
                    };
                    ratInvSample: {
                        forward: import("../../3/7").Rational;
                        inverse: import("../../3/7").Rational;
                    };
                    fInverse: {
                        computes: boolean;
                        root: string;
                    };
                    claySolvedByThisFold: 0;
                    facets: ({
                        receipt: string;
                        facet: string;
                        on: boolean;
                    } & {
                        receipt: string;
                    })[];
                    root: string;
                    cli: string;
                    pair: string;
                    route: string;
                    statement: string;
                    boundary: string;
                };
                certified: false;
                fipsValidated: false;
                claySolvedByThisFold: 0;
                breaksNistPqc: false;
                productionRefused: boolean;
                bitcoinRefused: boolean;
                demoMaxBits: number;
                generateMs: number;
                reverseMs: number;
                aggregateOpsPerSec: number;
                count: number;
                facets: ({
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                pair: string;
                cli: string;
                route: string;
                statement: string;
                boundary: string;
            };
            audit: {
                computes: boolean;
                audits: QuantumAuditRow[];
                gaps: QuantumAuditRow[];
                partials: QuantumAuditRow[];
                passes: QuantumAuditRow[];
                gapCount: number;
                partialCount: number;
                passCount: number;
                coveredCount: number;
                count: number;
                dimensions: {
                    computes: boolean;
                    rows: DimensionAuditRow[];
                    coveredCount: number;
                    passCount: number;
                    partialCount: number;
                    gapCount: number;
                    dimensionGates: number;
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
                reverseCount: number;
                inverseCount: number;
                forwardCount: number;
                certified: boolean;
                fipsValidated: boolean;
                claySolvedByThisFold: number;
                facets: ({
                    receipt: string;
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                route: string;
                pair: string;
                cli: string;
                statement: string;
                boundary: string;
            };
            catalog: {
                computes: boolean;
                researchDate: string;
                standards: IsoNistStandardRow[];
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
            trinity: {
                computes: boolean;
                digits: import("../stack").DirectionalTrinityDigitRow[];
                table: {
                    digit: number;
                    forward: number;
                    inverse: number;
                    reverse: number;
                    note: string;
                }[];
                foldPair: {
                    forward: string;
                    reverse: string;
                    merged: string;
                    bidirectional: boolean;
                };
                ratInvSample: {
                    forward: import("../../3/7").Rational;
                    inverse: import("../../3/7").Rational;
                };
                fInverse: {
                    computes: boolean;
                    root: string;
                };
                claySolvedByThisFold: 0;
                facets: ({
                    receipt: string;
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                cli: string;
                pair: string;
                route: string;
                statement: string;
                boundary: string;
            };
            oneTbit: {
                computes: boolean;
                claimedBitsPerSec: number;
                /** Primary wire-model answer to “can this encrypt at 1 Tbit/s on the wire?” */
                provedAtCallTime: boolean;
                /** Separate honest model that may prove under memo/extent math. */
                provedAmortizedReuseMemoAtCallTime: boolean;
                model: OneTbitEncryptModel;
                measuredBitsPerSec: number;
                wire: OneTbitModelReceipt;
                demo: OneTbitModelReceipt;
                amortized: OneTbitModelReceipt;
                refused: OneTbitModelReceipt;
                models: readonly [OneTbitModelReceipt, OneTbitModelReceipt, OneTbitModelReceipt, OneTbitModelReceipt];
                productionRefused: boolean;
                bitcoinRefused: boolean;
                count: number;
                facets: ({
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                route: string;
                pair: string;
                cli: string;
                statement: string;
                boundary: string;
            };
            comparisons: LocalReverseVsStandardRow[];
            allowlistOk: boolean;
            productionReverseRefused: true;
            certified: false;
            fipsValidated: false;
            claySolvedByThisFold: 0;
            breaksNistPqc: false;
            strongerThanNistPqc: false;
            overallWireClaimProved: false;
            wireProofStatus: "proof-of-falsehood";
            wireRatio: number;
            aes128ClassicalBits: number;
            thisRepoIsNotTheIsoStandard: true;
            isoOfficialStandard: false;
            externalDeploymentCount: 0;
            fieldHistory: "none";
            securityModel: "structural+adversarial+measured-local";
            reverseMs: number;
            aggregateOpsPerSec: number;
            demoMaxBits: number;
            count: number;
            facets: ({
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            pair: string;
            cli: string;
            route: string;
            siblingMagnitudesPair: string;
            statement: string;
            boundary: string;
        };
        audit: {
            computes: boolean;
            audits: QuantumAuditRow[];
            gaps: QuantumAuditRow[];
            partials: QuantumAuditRow[];
            passes: QuantumAuditRow[];
            gapCount: number;
            partialCount: number;
            passCount: number;
            coveredCount: number;
            count: number;
            dimensions: {
                computes: boolean;
                rows: DimensionAuditRow[];
                coveredCount: number;
                passCount: number;
                partialCount: number;
                gapCount: number;
                dimensionGates: number;
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
            reverseCount: number;
            inverseCount: number;
            forwardCount: number;
            certified: boolean;
            fipsValidated: boolean;
            claySolvedByThisFold: number;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            route: string;
            pair: string;
            cli: string;
            statement: string;
            boundary: string;
        };
        vote: {
            decided: boolean;
            winner: "ceccec" | "undecided";
            runtimeTokens: number;
            voters: {
                receipt: string;
                id: string;
                on: boolean;
            }[];
            proven: {
                proven: boolean;
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
            capstone: {
                holds: boolean;
                computes: boolean;
                proven: boolean;
                efficient: {
                    proven: boolean;
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
                optimizations: {
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
                bench: {
                    verdict: string;
                    separated: boolean;
                    tracksClassical: boolean;
                    root: string;
                };
                claySolvedByThisFold: 0;
                qpuRequired: false;
                physicalFtlClaim: 0;
                facets: ({
                    receipt: string;
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                cli: string;
                pair: string;
                route: string;
                statement: string;
                boundary: string;
            };
            optimizations: {
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
            fusion: {
                verified: boolean;
                fused: boolean;
                partCount: number;
                root: string;
                statement: string;
                boundary: string;
            };
            honest: {
                faithfulSimulator: boolean;
                noSpeedup: boolean;
                verdict: string;
                claim: string;
                bloch: {
                    faithful: boolean;
                    checks: {
                        gate: "I" | "X" | "Y" | "Z" | "H" | "S" | "T";
                        init: string;
                        agree: boolean;
                        receipt: string;
                    }[];
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
                cost: {
                    proven: boolean;
                    rows: import("../../quantum/science").DimensionCostRow[];
                    crossover: number;
                    asymptoticallyInsufficient: boolean;
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
                bench: {
                    separated: boolean;
                    tracksClassical: boolean;
                    faithful: boolean;
                    physicalQpuWouldSeparate: boolean;
                    verdict: string;
                    rows: import("../../quantum/science").BenchmarkRow[];
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
                root: string;
                boundary: string;
            };
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
        noQpu: {
            computes: boolean;
            speedDecided: boolean;
            noQuantumHardwareProved: boolean;
            winner: "ceccec" | "undecided";
            decided: boolean;
            comparison: import("../stack").SpeedVsRestComparisonRow[];
            table: import("../stack").SpeedVsRestComparisonRow[];
            quantumHardwareRequired: false;
            qpuRequired: false;
            runsOnClassical64Bit: true;
            architectureRequirement: "classical-64bit";
            environment: import("../stack").Classical64BitEnvironment;
            forbiddenQpuSdks: readonly ["@qiskit", "qiskit", "braket", "amazon-braket", "cuda-quantum", "pennylane", "cirq", "qsharp", "ibm-quantum", "pyquil"];
            tracksClassicalNoSpeedup: boolean;
            benchVerdict: string;
            physicalQmSpeedupClaimed: false;
            isoCertified: false;
            claySolvedByThisFold: 0;
            vote: {
                decided: boolean;
                winner: "ceccec" | "undecided";
                runtimeTokens: number;
                voters: {
                    receipt: string;
                    id: string;
                    on: boolean;
                }[];
                proven: {
                    proven: boolean;
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
                capstone: {
                    holds: boolean;
                    computes: boolean;
                    proven: boolean;
                    efficient: {
                        proven: boolean;
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
                    optimizations: {
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
                    bench: {
                        verdict: string;
                        separated: boolean;
                        tracksClassical: boolean;
                        root: string;
                    };
                    claySolvedByThisFold: 0;
                    qpuRequired: false;
                    physicalFtlClaim: 0;
                    facets: ({
                        receipt: string;
                        facet: string;
                        on: boolean;
                    } & {
                        receipt: string;
                    })[];
                    root: string;
                    cli: string;
                    pair: string;
                    route: string;
                    statement: string;
                    boundary: string;
                };
                optimizations: {
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
                fusion: {
                    verified: boolean;
                    fused: boolean;
                    partCount: number;
                    root: string;
                    statement: string;
                    boundary: string;
                };
                honest: {
                    faithfulSimulator: boolean;
                    noSpeedup: boolean;
                    verdict: string;
                    claim: string;
                    bloch: {
                        faithful: boolean;
                        checks: {
                            gate: "I" | "X" | "Y" | "Z" | "H" | "S" | "T";
                            init: string;
                            agree: boolean;
                            receipt: string;
                        }[];
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
                    cost: {
                        proven: boolean;
                        rows: import("../../quantum/science").DimensionCostRow[];
                        crossover: number;
                        asymptoticallyInsufficient: boolean;
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
                    bench: {
                        separated: boolean;
                        tracksClassical: boolean;
                        faithful: boolean;
                        physicalQpuWouldSeparate: boolean;
                        verdict: string;
                        rows: import("../../quantum/science").BenchmarkRow[];
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
                    root: string;
                    boundary: string;
                };
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
            one: {
                computes: boolean;
                decided: boolean;
                winner: "ceccec" | "undecided";
                vote: {
                    decided: boolean;
                    winner: "ceccec" | "undecided";
                    runtimeTokens: number;
                    voters: {
                        receipt: string;
                        id: string;
                        on: boolean;
                    }[];
                    proven: {
                        proven: boolean;
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
                    capstone: {
                        holds: boolean;
                        computes: boolean;
                        proven: boolean;
                        efficient: {
                            proven: boolean;
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
                        optimizations: {
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
                        bench: {
                            verdict: string;
                            separated: boolean;
                            tracksClassical: boolean;
                            root: string;
                        };
                        claySolvedByThisFold: 0;
                        qpuRequired: false;
                        physicalFtlClaim: 0;
                        facets: ({
                            receipt: string;
                            facet: string;
                            on: boolean;
                        } & {
                            receipt: string;
                        })[];
                        root: string;
                        cli: string;
                        pair: string;
                        route: string;
                        statement: string;
                        boundary: string;
                    };
                    optimizations: {
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
                    fusion: {
                        verified: boolean;
                        fused: boolean;
                        partCount: number;
                        root: string;
                        statement: string;
                        boundary: string;
                    };
                    honest: {
                        faithfulSimulator: boolean;
                        noSpeedup: boolean;
                        verdict: string;
                        claim: string;
                        bloch: {
                            faithful: boolean;
                            checks: {
                                gate: "I" | "X" | "Y" | "Z" | "H" | "S" | "T";
                                init: string;
                                agree: boolean;
                                receipt: string;
                            }[];
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
                        cost: {
                            proven: boolean;
                            rows: import("../../quantum/science").DimensionCostRow[];
                            crossover: number;
                            asymptoticallyInsufficient: boolean;
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
                        bench: {
                            separated: boolean;
                            tracksClassical: boolean;
                            faithful: boolean;
                            physicalQpuWouldSeparate: boolean;
                            verdict: string;
                            rows: import("../../quantum/science").BenchmarkRow[];
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
                        root: string;
                        boundary: string;
                    };
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
                core: {
                    computes: boolean;
                    at: number;
                    surfaces: import("../../quantum/apps").RosettaCoreSurface[];
                    inventory: {
                        core: {
                            label: string;
                            kind: import("../../quantum/apps").RosettaCoreSurfaceKind;
                            ray: number;
                            address: string;
                        }[];
                        parallel: readonly ["ROSETTA_RAY_VIEWS duplicate", "PROJECTION_SEGMENT/FORMS→VORTEX", "rosettaClaim/Owner(heaven/core)", "rosettaCodec(learning)", "string/millennium→rosettaReady-handoff"];
                        hubs: {
                            slug: "learn" | "reference" | "proof" | "explore" | "frontier" | "origin" | "apps";
                            ray: number;
                            route: string;
                            hue: number;
                        }[];
                    };
                    hubs: readonly import("../digit").RosettaRayHub[];
                    raysUsed: number;
                    kinds: readonly ["route", "hub", "compute", "nav", "tool", "app", "projection"];
                    resolve: (label: string, kind?: import("../../quantum/apps").RosettaCoreSurfaceKind) => import("../../quantum/apps").RosettaCoreSurface;
                    shelve: typeof import("../../quantum/apps").rosettaShelve;
                    byRay: (ray: number) => import("../../quantum/apps").RosettaCoreSurface[];
                    resolveRoute: (route: string) => {
                        surface: import("../../quantum/apps").RosettaCoreSurface;
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
                            siblings: import("../../wind/types").ConceptCommandName[];
                            siblingCount: number;
                        };
                        content: {
                            pageKind: import("../digit").RosettaComputationType;
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
                        surface: import("../../quantum/apps").RosettaCoreSurface;
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
                    statement: string;
                    boundary: string;
                };
                learned: ({
                    surface: import("../../quantum/apps").RosettaCoreSurface;
                    receipt: string;
                    source: "GPT/Claude/Gemini tool-use";
                    fold: "rosettaCoreApi · quantumCliToolsCatalog";
                    kind: "tools";
                } | {
                    surface: import("../../quantum/apps").RosettaCoreSurface;
                    receipt: string;
                    source: "agent protocols (AGENTS/llms/MCP)";
                    fold: "agentSubmissionProtocol · gatesHealSpottedCompromise";
                    kind: "protocol";
                } | {
                    surface: import("../../quantum/apps").RosettaCoreSurface;
                    receipt: string;
                    source: "content-addressed corpus";
                    fold: "memoByRoot · completeCorpus · sealFacets";
                    kind: "corpus";
                } | {
                    surface: import("../../quantum/apps").RosettaCoreSurface;
                    receipt: string;
                    source: "adversarial efficiency voters";
                    fold: "noKnownModelMoreEfficientProven · compareCeccecEfficiencyByVote";
                    kind: "voters";
                } | {
                    surface: import("../../quantum/apps").RosettaCoreSurface;
                    receipt: string;
                    source: "honest QC simulator (no FLOPS claim)";
                    fold: "quantumComputerHonestClaim · quantumAdvantageBenchmark";
                    kind: "honesty";
                })[];
                claySolvedByThisFold: 0;
                facets: ({
                    receipt: string;
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                cli: string;
                pair: string;
                route: string;
                statement: string;
                boundary: string;
            };
            proven: {
                proven: boolean;
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
            honest: {
                faithfulSimulator: boolean;
                noSpeedup: boolean;
                verdict: string;
                claim: string;
                bloch: {
                    faithful: boolean;
                    checks: {
                        gate: "I" | "X" | "Y" | "Z" | "H" | "S" | "T";
                        init: string;
                        agree: boolean;
                        receipt: string;
                    }[];
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
                cost: {
                    proven: boolean;
                    rows: import("../../quantum/science").DimensionCostRow[];
                    crossover: number;
                    asymptoticallyInsufficient: boolean;
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
                bench: {
                    separated: boolean;
                    tracksClassical: boolean;
                    faithful: boolean;
                    physicalQpuWouldSeparate: boolean;
                    verdict: string;
                    rows: import("../../quantum/science").BenchmarkRow[];
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
                root: string;
                boundary: string;
            };
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            pair: string;
            cli: string;
            route: string;
            statement: string;
            boundary: string;
        };
        qpuRequired: false;
        quantumHardwareRequired: false;
        runsOnClassical64Bit: true;
        tracksClassicalNoSpeedup: boolean;
        answers: 1;
        runtimeTokens: 0;
        answersPerTokensUnbounded: boolean;
        physicalQubitSpeedup: 0;
        physicalFtlClaim: 0;
        certified: false;
        fipsValidated: false;
        productionReverseRefused: true;
        breaksNistPqc: false;
        claySolvedByThisFold: 0;
        count: number;
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        pair: string;
        cli: string;
        route: string;
        statement: string;
        boundary: string;
    };
    beyond: {
        computes: boolean;
        timings: {
            catalogMs: number;
            familyMs: number;
            shorMapMs: number;
            taxonomyMs: number;
            migrateMs: number;
            trinityMs: number;
            rsaSuiteMs: number;
            rsaGenerateMs: number;
            rsaReverseMs: number;
        };
        thresholdMs: number;
        anySlow: boolean;
        fipsCount: number;
        mlKemParams: string[];
        mlDsaParams: string[];
        slhDsaParams: string[];
        eccShorBreaks: boolean;
        eccFamily: string;
        catalog: {
            computes: boolean;
            researchDate: string;
            standards: IsoNistStandardRow[];
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
        family: {
            computes: boolean;
            prefer: "hash" | "auto" | "code" | "lattice";
            selected: {
                id: string;
                name: string;
                family: string;
                demoParams: string[];
                standards: string[];
            };
            families: {
                receipt: string;
                id: string;
                family: string;
                name: string;
                standards: string[];
                demoParams: string[];
                role: string;
                note: string;
            }[];
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
        shorMap: {
            computes: boolean;
            families: {
                receipt: string;
                family: string;
                shor: string;
                grover: string;
                pqcReplace: string;
                iso: string;
            }[];
            brokenCount: number;
            safeCount: number;
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
        taxonomy: {
            computes: boolean;
            rows: {
                receipt: string;
                layer: string;
                iso: string;
                nist: string;
                repo: string;
                shor: string;
                role: string;
            }[];
            merkleRoot: string;
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
        migrate: {
            computes: boolean;
            steps: {
                receipt: string;
                id: string;
                title: string;
                done: boolean;
                note: string;
            }[];
            openCount: number;
            doneCount: number;
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
        trinity: {
            computes: boolean;
            digits: import("../stack").DirectionalTrinityDigitRow[];
            table: {
                digit: number;
                forward: number;
                inverse: number;
                reverse: number;
                note: string;
            }[];
            foldPair: {
                forward: string;
                reverse: string;
                merged: string;
                bidirectional: boolean;
            };
            ratInvSample: {
                forward: import("../../3/7").Rational;
                inverse: import("../../3/7").Rational;
            };
            fInverse: {
                computes: boolean;
                root: string;
            };
            claySolvedByThisFold: 0;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            cli: string;
            pair: string;
            route: string;
            statement: string;
            boundary: string;
        };
        rsa: {
            computes: boolean;
            generateMs: number;
            reverseMs: number;
            workers: number;
            moduli: number[];
            thresholdMs: number;
            slowGenerate: boolean;
            slowReverse: boolean;
            generate: {
                ok: boolean;
                n: number;
                e: number;
                d: number;
                message: number;
                cipher: number;
                plain: number;
                refused: true;
                reason: string;
            } | {
                ok: boolean;
                n: number;
                e: number;
                d: number;
                message: number;
                cipher: number;
                plain: number;
                refused: false;
                reason: string;
            };
            reverse: {
                computes: boolean;
                results: {
                    N: number;
                    factored: boolean;
                    p: number;
                    q: number;
                    base: number;
                    order: number;
                    refused: boolean;
                    reason: string;
                }[];
                workerCap: number;
                productionRefused: boolean;
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
            timedReceipt: string;
            productionRefused: boolean;
            bitcoinRefused: boolean;
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
        certified: false;
        fipsValidated: false;
        count: number;
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        route: string;
        pair: string;
        cli: string;
        statement: string;
        boundary: string;
    };
    oneTbit: {
        computes: boolean;
        claimedBitsPerSec: number;
        /** Primary wire-model answer to “can this encrypt at 1 Tbit/s on the wire?” */
        provedAtCallTime: boolean;
        /** Separate honest model that may prove under memo/extent math. */
        provedAmortizedReuseMemoAtCallTime: boolean;
        model: OneTbitEncryptModel;
        measuredBitsPerSec: number;
        wire: OneTbitModelReceipt;
        demo: OneTbitModelReceipt;
        amortized: OneTbitModelReceipt;
        refused: OneTbitModelReceipt;
        models: readonly [OneTbitModelReceipt, OneTbitModelReceipt, OneTbitModelReceipt, OneTbitModelReceipt];
        productionRefused: boolean;
        bitcoinRefused: boolean;
        count: number;
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        route: string;
        pair: string;
        cli: string;
        statement: string;
        boundary: string;
    };
    localMagnitudes: {
        computes: boolean;
        perDirection: LocalVsIsoDirectionRow[];
        table: LocalVsIsoDirectionRow[];
        overallWireClaimProved: boolean;
        wireProofStatus: "proof-of-falsehood" | "proved";
        proofOfFalsehood: string;
        structuralMayProve: boolean;
        amortMayProve: boolean;
        honestyBoundaries: readonly ["NEVER claim ISO certification / FIPS validation — certified=false · isoOfficialStandard=false · fipsValidated=false", "NEVER claim local demo beats ML-KEM for confidentiality — wire-crypto-security-bits magnitudesStronger=false", "local-structural-gates = repo control coverage (refuse policy), NOT wire cryptographic strength", "amortized-reuse-memo = holographic extent vs classical *label* bits — NOT AES-GCM / NOT PQC break resistance", "production reverse refused · Bitcoin/mainnet refused · breaksNistPqc=false · claySolvedByThisFold=0", string];
        certified: false;
        isoOfficialStandard: false;
        fipsValidated: false;
        productionReverseRefused: true;
        breaksNistPqc: false;
        claySolvedByThisFold: 0;
        demoMaxBits: number;
        wireLocalMetric: number;
        wireIsoMetric: number;
        wireRatio: number;
        refuseBitSpan: number;
        catalogRows: number;
        extentBits: number;
        classicalLabelBitsSum: number;
        localTimed: {
            computes: boolean;
            timed: {
                computes: boolean;
                generateMs: number;
                reverseMs: number;
                aggregateOpsPerSec: number;
                rows: LocalEncryptionReverseRow[];
                moduli: number[];
                productionRefused: boolean;
                bitcoinRefused: boolean;
                generate: {
                    ok: boolean;
                    n: number;
                    e: number;
                    d: number;
                    message: number;
                    cipher: number;
                    plain: number;
                    refused: true;
                    reason: string;
                } | {
                    ok: boolean;
                    n: number;
                    e: number;
                    d: number;
                    message: number;
                    cipher: number;
                    plain: number;
                    refused: false;
                    reason: string;
                };
                sync: {
                    computes: boolean;
                    results: {
                        N: number;
                        factored: boolean;
                        p: number;
                        q: number;
                        base: number;
                        order: number;
                        refused: boolean;
                        reason: string;
                    }[];
                    workerCap: number;
                    productionRefused: boolean;
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
                count: number;
                facets: ({
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                pair: string;
                cli: string;
                route: string;
                statement: string;
                boundary: string;
            };
            comparisons: LocalReverseVsStandardRow[];
            table: LocalReverseVsStandardRow[];
            audit: {
                computes: boolean;
                audits: QuantumAuditRow[];
                gaps: QuantumAuditRow[];
                partials: QuantumAuditRow[];
                passes: QuantumAuditRow[];
                gapCount: number;
                partialCount: number;
                passCount: number;
                coveredCount: number;
                count: number;
                dimensions: {
                    computes: boolean;
                    rows: DimensionAuditRow[];
                    coveredCount: number;
                    passCount: number;
                    partialCount: number;
                    gapCount: number;
                    dimensionGates: number;
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
                reverseCount: number;
                inverseCount: number;
                forwardCount: number;
                certified: boolean;
                fipsValidated: boolean;
                claySolvedByThisFold: number;
                facets: ({
                    receipt: string;
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                route: string;
                pair: string;
                cli: string;
                statement: string;
                boundary: string;
            };
            catalog: {
                computes: boolean;
                researchDate: string;
                standards: IsoNistStandardRow[];
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
            trinity: {
                computes: boolean;
                digits: import("../stack").DirectionalTrinityDigitRow[];
                table: {
                    digit: number;
                    forward: number;
                    inverse: number;
                    reverse: number;
                    note: string;
                }[];
                foldPair: {
                    forward: string;
                    reverse: string;
                    merged: string;
                    bidirectional: boolean;
                };
                ratInvSample: {
                    forward: import("../../3/7").Rational;
                    inverse: import("../../3/7").Rational;
                };
                fInverse: {
                    computes: boolean;
                    root: string;
                };
                claySolvedByThisFold: 0;
                facets: ({
                    receipt: string;
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                cli: string;
                pair: string;
                route: string;
                statement: string;
                boundary: string;
            };
            certified: false;
            fipsValidated: false;
            claySolvedByThisFold: 0;
            breaksNistPqc: false;
            productionRefused: boolean;
            bitcoinRefused: boolean;
            demoMaxBits: number;
            generateMs: number;
            reverseMs: number;
            aggregateOpsPerSec: number;
            count: number;
            facets: ({
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            pair: string;
            cli: string;
            route: string;
            statement: string;
            boundary: string;
        };
        localNovel: {
            computes: boolean;
            localSecurityProved: boolean;
            means: string;
            unproved: readonly ["FIPS validation", "ISO certification", "this repo being an ISO/NIST standard (it is not)", "wire-crypto magnitudes over NIST/ISO PQC (overallWireClaimProved=false)", "field battle-testing (externalDeploymentCount=0)", "wire AES-GCM reverse / production RSA reverse", "Clay millennium progress"];
            inventory: {
                computes: boolean;
                components: readonly LocalNovelEncryptionComponent[];
                novelCount: number;
                textbookCount: number;
                externalCount: number;
                externalDeploymentCount: 0;
                fieldHistory: "none";
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
            tools: {
                ready: boolean;
                roundTrip: boolean;
                rsaRoundTrip: boolean;
                cipher: string;
                teaching: {
                    n: number;
                    e: number;
                    d: number;
                    message: number;
                    cipher: number;
                    plain: number;
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
            reverse: {
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
            localTimed: {
                computes: boolean;
                timed: {
                    computes: boolean;
                    generateMs: number;
                    reverseMs: number;
                    aggregateOpsPerSec: number;
                    rows: LocalEncryptionReverseRow[];
                    moduli: number[];
                    productionRefused: boolean;
                    bitcoinRefused: boolean;
                    generate: {
                        ok: boolean;
                        n: number;
                        e: number;
                        d: number;
                        message: number;
                        cipher: number;
                        plain: number;
                        refused: true;
                        reason: string;
                    } | {
                        ok: boolean;
                        n: number;
                        e: number;
                        d: number;
                        message: number;
                        cipher: number;
                        plain: number;
                        refused: false;
                        reason: string;
                    };
                    sync: {
                        computes: boolean;
                        results: {
                            N: number;
                            factored: boolean;
                            p: number;
                            q: number;
                            base: number;
                            order: number;
                            refused: boolean;
                            reason: string;
                        }[];
                        workerCap: number;
                        productionRefused: boolean;
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
                    count: number;
                    facets: ({
                        facet: string;
                        on: boolean;
                    } & {
                        receipt: string;
                    })[];
                    root: string;
                    pair: string;
                    cli: string;
                    route: string;
                    statement: string;
                    boundary: string;
                };
                comparisons: LocalReverseVsStandardRow[];
                table: LocalReverseVsStandardRow[];
                audit: {
                    computes: boolean;
                    audits: QuantumAuditRow[];
                    gaps: QuantumAuditRow[];
                    partials: QuantumAuditRow[];
                    passes: QuantumAuditRow[];
                    gapCount: number;
                    partialCount: number;
                    passCount: number;
                    coveredCount: number;
                    count: number;
                    dimensions: {
                        computes: boolean;
                        rows: DimensionAuditRow[];
                        coveredCount: number;
                        passCount: number;
                        partialCount: number;
                        gapCount: number;
                        dimensionGates: number;
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
                    reverseCount: number;
                    inverseCount: number;
                    forwardCount: number;
                    certified: boolean;
                    fipsValidated: boolean;
                    claySolvedByThisFold: number;
                    facets: ({
                        receipt: string;
                        facet: string;
                        on: boolean;
                    } & {
                        receipt: string;
                    })[];
                    root: string;
                    route: string;
                    pair: string;
                    cli: string;
                    statement: string;
                    boundary: string;
                };
                catalog: {
                    computes: boolean;
                    researchDate: string;
                    standards: IsoNistStandardRow[];
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
                trinity: {
                    computes: boolean;
                    digits: import("../stack").DirectionalTrinityDigitRow[];
                    table: {
                        digit: number;
                        forward: number;
                        inverse: number;
                        reverse: number;
                        note: string;
                    }[];
                    foldPair: {
                        forward: string;
                        reverse: string;
                        merged: string;
                        bidirectional: boolean;
                    };
                    ratInvSample: {
                        forward: import("../../3/7").Rational;
                        inverse: import("../../3/7").Rational;
                    };
                    fInverse: {
                        computes: boolean;
                        root: string;
                    };
                    claySolvedByThisFold: 0;
                    facets: ({
                        receipt: string;
                        facet: string;
                        on: boolean;
                    } & {
                        receipt: string;
                    })[];
                    root: string;
                    cli: string;
                    pair: string;
                    route: string;
                    statement: string;
                    boundary: string;
                };
                certified: false;
                fipsValidated: false;
                claySolvedByThisFold: 0;
                breaksNistPqc: false;
                productionRefused: boolean;
                bitcoinRefused: boolean;
                demoMaxBits: number;
                generateMs: number;
                reverseMs: number;
                aggregateOpsPerSec: number;
                count: number;
                facets: ({
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                pair: string;
                cli: string;
                route: string;
                statement: string;
                boundary: string;
            };
            audit: {
                computes: boolean;
                audits: QuantumAuditRow[];
                gaps: QuantumAuditRow[];
                partials: QuantumAuditRow[];
                passes: QuantumAuditRow[];
                gapCount: number;
                partialCount: number;
                passCount: number;
                coveredCount: number;
                count: number;
                dimensions: {
                    computes: boolean;
                    rows: DimensionAuditRow[];
                    coveredCount: number;
                    passCount: number;
                    partialCount: number;
                    gapCount: number;
                    dimensionGates: number;
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
                reverseCount: number;
                inverseCount: number;
                forwardCount: number;
                certified: boolean;
                fipsValidated: boolean;
                claySolvedByThisFold: number;
                facets: ({
                    receipt: string;
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                route: string;
                pair: string;
                cli: string;
                statement: string;
                boundary: string;
            };
            catalog: {
                computes: boolean;
                researchDate: string;
                standards: IsoNistStandardRow[];
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
            trinity: {
                computes: boolean;
                digits: import("../stack").DirectionalTrinityDigitRow[];
                table: {
                    digit: number;
                    forward: number;
                    inverse: number;
                    reverse: number;
                    note: string;
                }[];
                foldPair: {
                    forward: string;
                    reverse: string;
                    merged: string;
                    bidirectional: boolean;
                };
                ratInvSample: {
                    forward: import("../../3/7").Rational;
                    inverse: import("../../3/7").Rational;
                };
                fInverse: {
                    computes: boolean;
                    root: string;
                };
                claySolvedByThisFold: 0;
                facets: ({
                    receipt: string;
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                cli: string;
                pair: string;
                route: string;
                statement: string;
                boundary: string;
            };
            oneTbit: {
                computes: boolean;
                claimedBitsPerSec: number;
                /** Primary wire-model answer to “can this encrypt at 1 Tbit/s on the wire?” */
                provedAtCallTime: boolean;
                /** Separate honest model that may prove under memo/extent math. */
                provedAmortizedReuseMemoAtCallTime: boolean;
                model: OneTbitEncryptModel;
                measuredBitsPerSec: number;
                wire: OneTbitModelReceipt;
                demo: OneTbitModelReceipt;
                amortized: OneTbitModelReceipt;
                refused: OneTbitModelReceipt;
                models: readonly [OneTbitModelReceipt, OneTbitModelReceipt, OneTbitModelReceipt, OneTbitModelReceipt];
                productionRefused: boolean;
                bitcoinRefused: boolean;
                count: number;
                facets: ({
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                route: string;
                pair: string;
                cli: string;
                statement: string;
                boundary: string;
            };
            comparisons: LocalReverseVsStandardRow[];
            allowlistOk: boolean;
            productionReverseRefused: true;
            certified: false;
            fipsValidated: false;
            claySolvedByThisFold: 0;
            breaksNistPqc: false;
            strongerThanNistPqc: false;
            overallWireClaimProved: false;
            wireProofStatus: "proof-of-falsehood";
            wireRatio: number;
            aes128ClassicalBits: number;
            thisRepoIsNotTheIsoStandard: true;
            isoOfficialStandard: false;
            externalDeploymentCount: 0;
            fieldHistory: "none";
            securityModel: "structural+adversarial+measured-local";
            reverseMs: number;
            aggregateOpsPerSec: number;
            demoMaxBits: number;
            count: number;
            facets: ({
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            pair: string;
            cli: string;
            route: string;
            siblingMagnitudesPair: string;
            statement: string;
            boundary: string;
        };
        catalog: {
            computes: boolean;
            researchDate: string;
            standards: IsoNistStandardRow[];
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
        trinity: {
            computes: boolean;
            digits: import("../stack").DirectionalTrinityDigitRow[];
            table: {
                digit: number;
                forward: number;
                inverse: number;
                reverse: number;
                note: string;
            }[];
            foldPair: {
                forward: string;
                reverse: string;
                merged: string;
                bidirectional: boolean;
            };
            ratInvSample: {
                forward: import("../../3/7").Rational;
                inverse: import("../../3/7").Rational;
            };
            fInverse: {
                computes: boolean;
                root: string;
            };
            claySolvedByThisFold: 0;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            cli: string;
            pair: string;
            route: string;
            statement: string;
            boundary: string;
        };
        audit: {
            computes: boolean;
            audits: QuantumAuditRow[];
            gaps: QuantumAuditRow[];
            partials: QuantumAuditRow[];
            passes: QuantumAuditRow[];
            gapCount: number;
            partialCount: number;
            passCount: number;
            coveredCount: number;
            count: number;
            dimensions: {
                computes: boolean;
                rows: DimensionAuditRow[];
                coveredCount: number;
                passCount: number;
                partialCount: number;
                gapCount: number;
                dimensionGates: number;
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
            reverseCount: number;
            inverseCount: number;
            forwardCount: number;
            certified: boolean;
            fipsValidated: boolean;
            claySolvedByThisFold: number;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            route: string;
            pair: string;
            cli: string;
            statement: string;
            boundary: string;
        };
        oneTbit: {
            computes: boolean;
            claimedBitsPerSec: number;
            /** Primary wire-model answer to “can this encrypt at 1 Tbit/s on the wire?” */
            provedAtCallTime: boolean;
            /** Separate honest model that may prove under memo/extent math. */
            provedAmortizedReuseMemoAtCallTime: boolean;
            model: OneTbitEncryptModel;
            measuredBitsPerSec: number;
            wire: OneTbitModelReceipt;
            demo: OneTbitModelReceipt;
            amortized: OneTbitModelReceipt;
            refused: OneTbitModelReceipt;
            models: readonly [OneTbitModelReceipt, OneTbitModelReceipt, OneTbitModelReceipt, OneTbitModelReceipt];
            productionRefused: boolean;
            bitcoinRefused: boolean;
            count: number;
            facets: ({
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            route: string;
            pair: string;
            cli: string;
            statement: string;
            boundary: string;
        };
        isoGap: {
            computes: boolean;
            answer: {
                computes: boolean;
                /** Top-level honest answer to “does ISO require PQC?” — false (no universal mandate). */
                isoRequiresPostQuantumSecurity: false;
                universalMandate: false;
                migrationGuidance: true;
                nistAlignedIsoWork: true;
                isoOfficialStandard: false;
                publishedIsoPqcAmd: boolean;
                nistFipsFinal: boolean;
                researchDate: "2026-07";
                plainAnswer: string;
                certified: false;
                fipsValidated: false;
                catalogRoot: string;
                facets: ({
                    receipt: string;
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                pair: string;
                cli: string;
                route: string;
                statement: string;
                boundary: string;
            };
            needs: IsoPqcNeedRow[];
            covered: IsoPqcNeedRow[];
            partial: IsoPqcNeedRow[];
            gaps: IsoPqcNeedRow[];
            labGaps: IsoPqcNeedRow[];
            coveredCount: number;
            partialCount: number;
            gapCount: number;
            forwardCount: number;
            inverseCount: number;
            reverseCount: number;
            before: {
                note: string;
                coveredApprox: number;
                partialApprox: number;
                gapApprox: number;
            };
            after: {
                covered: number;
                partial: number;
                gap: number;
                labGapsUnclosable: string[];
                platformGaps: string[];
            };
            thisIsItMeans: string;
            isoOfficialStandard: false;
            certified: false;
            fipsValidated: false;
            claySolvedByThisFold: 0;
            audit: {
                computes: boolean;
                audits: QuantumAuditRow[];
                gaps: QuantumAuditRow[];
                partials: QuantumAuditRow[];
                passes: QuantumAuditRow[];
                gapCount: number;
                partialCount: number;
                passCount: number;
                coveredCount: number;
                count: number;
                dimensions: {
                    computes: boolean;
                    rows: DimensionAuditRow[];
                    coveredCount: number;
                    passCount: number;
                    partialCount: number;
                    gapCount: number;
                    dimensionGates: number;
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
                reverseCount: number;
                inverseCount: number;
                forwardCount: number;
                certified: boolean;
                fipsValidated: boolean;
                claySolvedByThisFold: number;
                facets: ({
                    receipt: string;
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                route: string;
                pair: string;
                cli: string;
                statement: string;
                boundary: string;
            };
            trinity: {
                computes: boolean;
                digits: import("../stack").DirectionalTrinityDigitRow[];
                table: {
                    digit: number;
                    forward: number;
                    inverse: number;
                    reverse: number;
                    note: string;
                }[];
                foldPair: {
                    forward: string;
                    reverse: string;
                    merged: string;
                    bidirectional: boolean;
                };
                ratInvSample: {
                    forward: import("../../3/7").Rational;
                    inverse: import("../../3/7").Rational;
                };
                fInverse: {
                    computes: boolean;
                    root: string;
                };
                claySolvedByThisFold: 0;
                facets: ({
                    receipt: string;
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                cli: string;
                pair: string;
                route: string;
                statement: string;
                boundary: string;
            };
            catalog: {
                computes: boolean;
                researchDate: string;
                standards: IsoNistStandardRow[];
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
            localTimed: {
                computes: boolean;
                timed: {
                    computes: boolean;
                    generateMs: number;
                    reverseMs: number;
                    aggregateOpsPerSec: number;
                    rows: LocalEncryptionReverseRow[];
                    moduli: number[];
                    productionRefused: boolean;
                    bitcoinRefused: boolean;
                    generate: {
                        ok: boolean;
                        n: number;
                        e: number;
                        d: number;
                        message: number;
                        cipher: number;
                        plain: number;
                        refused: true;
                        reason: string;
                    } | {
                        ok: boolean;
                        n: number;
                        e: number;
                        d: number;
                        message: number;
                        cipher: number;
                        plain: number;
                        refused: false;
                        reason: string;
                    };
                    sync: {
                        computes: boolean;
                        results: {
                            N: number;
                            factored: boolean;
                            p: number;
                            q: number;
                            base: number;
                            order: number;
                            refused: boolean;
                            reason: string;
                        }[];
                        workerCap: number;
                        productionRefused: boolean;
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
                    count: number;
                    facets: ({
                        facet: string;
                        on: boolean;
                    } & {
                        receipt: string;
                    })[];
                    root: string;
                    pair: string;
                    cli: string;
                    route: string;
                    statement: string;
                    boundary: string;
                };
                comparisons: LocalReverseVsStandardRow[];
                table: LocalReverseVsStandardRow[];
                audit: {
                    computes: boolean;
                    audits: QuantumAuditRow[];
                    gaps: QuantumAuditRow[];
                    partials: QuantumAuditRow[];
                    passes: QuantumAuditRow[];
                    gapCount: number;
                    partialCount: number;
                    passCount: number;
                    coveredCount: number;
                    count: number;
                    dimensions: {
                        computes: boolean;
                        rows: DimensionAuditRow[];
                        coveredCount: number;
                        passCount: number;
                        partialCount: number;
                        gapCount: number;
                        dimensionGates: number;
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
                    reverseCount: number;
                    inverseCount: number;
                    forwardCount: number;
                    certified: boolean;
                    fipsValidated: boolean;
                    claySolvedByThisFold: number;
                    facets: ({
                        receipt: string;
                        facet: string;
                        on: boolean;
                    } & {
                        receipt: string;
                    })[];
                    root: string;
                    route: string;
                    pair: string;
                    cli: string;
                    statement: string;
                    boundary: string;
                };
                catalog: {
                    computes: boolean;
                    researchDate: string;
                    standards: IsoNistStandardRow[];
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
                trinity: {
                    computes: boolean;
                    digits: import("../stack").DirectionalTrinityDigitRow[];
                    table: {
                        digit: number;
                        forward: number;
                        inverse: number;
                        reverse: number;
                        note: string;
                    }[];
                    foldPair: {
                        forward: string;
                        reverse: string;
                        merged: string;
                        bidirectional: boolean;
                    };
                    ratInvSample: {
                        forward: import("../../3/7").Rational;
                        inverse: import("../../3/7").Rational;
                    };
                    fInverse: {
                        computes: boolean;
                        root: string;
                    };
                    claySolvedByThisFold: 0;
                    facets: ({
                        receipt: string;
                        facet: string;
                        on: boolean;
                    } & {
                        receipt: string;
                    })[];
                    root: string;
                    cli: string;
                    pair: string;
                    route: string;
                    statement: string;
                    boundary: string;
                };
                certified: false;
                fipsValidated: false;
                claySolvedByThisFold: 0;
                breaksNistPqc: false;
                productionRefused: boolean;
                bitcoinRefused: boolean;
                demoMaxBits: number;
                generateMs: number;
                reverseMs: number;
                aggregateOpsPerSec: number;
                count: number;
                facets: ({
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                pair: string;
                cli: string;
                route: string;
                statement: string;
                boundary: string;
            };
            localNovel: {
                computes: boolean;
                localSecurityProved: boolean;
                means: string;
                unproved: readonly ["FIPS validation", "ISO certification", "this repo being an ISO/NIST standard (it is not)", "wire-crypto magnitudes over NIST/ISO PQC (overallWireClaimProved=false)", "field battle-testing (externalDeploymentCount=0)", "wire AES-GCM reverse / production RSA reverse", "Clay millennium progress"];
                inventory: {
                    computes: boolean;
                    components: readonly LocalNovelEncryptionComponent[];
                    novelCount: number;
                    textbookCount: number;
                    externalCount: number;
                    externalDeploymentCount: 0;
                    fieldHistory: "none";
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
                tools: {
                    ready: boolean;
                    roundTrip: boolean;
                    rsaRoundTrip: boolean;
                    cipher: string;
                    teaching: {
                        n: number;
                        e: number;
                        d: number;
                        message: number;
                        cipher: number;
                        plain: number;
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
                reverse: {
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
                localTimed: {
                    computes: boolean;
                    timed: {
                        computes: boolean;
                        generateMs: number;
                        reverseMs: number;
                        aggregateOpsPerSec: number;
                        rows: LocalEncryptionReverseRow[];
                        moduli: number[];
                        productionRefused: boolean;
                        bitcoinRefused: boolean;
                        generate: {
                            ok: boolean;
                            n: number;
                            e: number;
                            d: number;
                            message: number;
                            cipher: number;
                            plain: number;
                            refused: true;
                            reason: string;
                        } | {
                            ok: boolean;
                            n: number;
                            e: number;
                            d: number;
                            message: number;
                            cipher: number;
                            plain: number;
                            refused: false;
                            reason: string;
                        };
                        sync: {
                            computes: boolean;
                            results: {
                                N: number;
                                factored: boolean;
                                p: number;
                                q: number;
                                base: number;
                                order: number;
                                refused: boolean;
                                reason: string;
                            }[];
                            workerCap: number;
                            productionRefused: boolean;
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
                        count: number;
                        facets: ({
                            facet: string;
                            on: boolean;
                        } & {
                            receipt: string;
                        })[];
                        root: string;
                        pair: string;
                        cli: string;
                        route: string;
                        statement: string;
                        boundary: string;
                    };
                    comparisons: LocalReverseVsStandardRow[];
                    table: LocalReverseVsStandardRow[];
                    audit: {
                        computes: boolean;
                        audits: QuantumAuditRow[];
                        gaps: QuantumAuditRow[];
                        partials: QuantumAuditRow[];
                        passes: QuantumAuditRow[];
                        gapCount: number;
                        partialCount: number;
                        passCount: number;
                        coveredCount: number;
                        count: number;
                        dimensions: {
                            computes: boolean;
                            rows: DimensionAuditRow[];
                            coveredCount: number;
                            passCount: number;
                            partialCount: number;
                            gapCount: number;
                            dimensionGates: number;
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
                        reverseCount: number;
                        inverseCount: number;
                        forwardCount: number;
                        certified: boolean;
                        fipsValidated: boolean;
                        claySolvedByThisFold: number;
                        facets: ({
                            receipt: string;
                            facet: string;
                            on: boolean;
                        } & {
                            receipt: string;
                        })[];
                        root: string;
                        route: string;
                        pair: string;
                        cli: string;
                        statement: string;
                        boundary: string;
                    };
                    catalog: {
                        computes: boolean;
                        researchDate: string;
                        standards: IsoNistStandardRow[];
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
                    trinity: {
                        computes: boolean;
                        digits: import("../stack").DirectionalTrinityDigitRow[];
                        table: {
                            digit: number;
                            forward: number;
                            inverse: number;
                            reverse: number;
                            note: string;
                        }[];
                        foldPair: {
                            forward: string;
                            reverse: string;
                            merged: string;
                            bidirectional: boolean;
                        };
                        ratInvSample: {
                            forward: import("../../3/7").Rational;
                            inverse: import("../../3/7").Rational;
                        };
                        fInverse: {
                            computes: boolean;
                            root: string;
                        };
                        claySolvedByThisFold: 0;
                        facets: ({
                            receipt: string;
                            facet: string;
                            on: boolean;
                        } & {
                            receipt: string;
                        })[];
                        root: string;
                        cli: string;
                        pair: string;
                        route: string;
                        statement: string;
                        boundary: string;
                    };
                    certified: false;
                    fipsValidated: false;
                    claySolvedByThisFold: 0;
                    breaksNistPqc: false;
                    productionRefused: boolean;
                    bitcoinRefused: boolean;
                    demoMaxBits: number;
                    generateMs: number;
                    reverseMs: number;
                    aggregateOpsPerSec: number;
                    count: number;
                    facets: ({
                        facet: string;
                        on: boolean;
                    } & {
                        receipt: string;
                    })[];
                    root: string;
                    pair: string;
                    cli: string;
                    route: string;
                    statement: string;
                    boundary: string;
                };
                audit: {
                    computes: boolean;
                    audits: QuantumAuditRow[];
                    gaps: QuantumAuditRow[];
                    partials: QuantumAuditRow[];
                    passes: QuantumAuditRow[];
                    gapCount: number;
                    partialCount: number;
                    passCount: number;
                    coveredCount: number;
                    count: number;
                    dimensions: {
                        computes: boolean;
                        rows: DimensionAuditRow[];
                        coveredCount: number;
                        passCount: number;
                        partialCount: number;
                        gapCount: number;
                        dimensionGates: number;
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
                    reverseCount: number;
                    inverseCount: number;
                    forwardCount: number;
                    certified: boolean;
                    fipsValidated: boolean;
                    claySolvedByThisFold: number;
                    facets: ({
                        receipt: string;
                        facet: string;
                        on: boolean;
                    } & {
                        receipt: string;
                    })[];
                    root: string;
                    route: string;
                    pair: string;
                    cli: string;
                    statement: string;
                    boundary: string;
                };
                catalog: {
                    computes: boolean;
                    researchDate: string;
                    standards: IsoNistStandardRow[];
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
                trinity: {
                    computes: boolean;
                    digits: import("../stack").DirectionalTrinityDigitRow[];
                    table: {
                        digit: number;
                        forward: number;
                        inverse: number;
                        reverse: number;
                        note: string;
                    }[];
                    foldPair: {
                        forward: string;
                        reverse: string;
                        merged: string;
                        bidirectional: boolean;
                    };
                    ratInvSample: {
                        forward: import("../../3/7").Rational;
                        inverse: import("../../3/7").Rational;
                    };
                    fInverse: {
                        computes: boolean;
                        root: string;
                    };
                    claySolvedByThisFold: 0;
                    facets: ({
                        receipt: string;
                        facet: string;
                        on: boolean;
                    } & {
                        receipt: string;
                    })[];
                    root: string;
                    cli: string;
                    pair: string;
                    route: string;
                    statement: string;
                    boundary: string;
                };
                oneTbit: {
                    computes: boolean;
                    claimedBitsPerSec: number;
                    /** Primary wire-model answer to “can this encrypt at 1 Tbit/s on the wire?” */
                    provedAtCallTime: boolean;
                    /** Separate honest model that may prove under memo/extent math. */
                    provedAmortizedReuseMemoAtCallTime: boolean;
                    model: OneTbitEncryptModel;
                    measuredBitsPerSec: number;
                    wire: OneTbitModelReceipt;
                    demo: OneTbitModelReceipt;
                    amortized: OneTbitModelReceipt;
                    refused: OneTbitModelReceipt;
                    models: readonly [OneTbitModelReceipt, OneTbitModelReceipt, OneTbitModelReceipt, OneTbitModelReceipt];
                    productionRefused: boolean;
                    bitcoinRefused: boolean;
                    count: number;
                    facets: ({
                        facet: string;
                        on: boolean;
                    } & {
                        receipt: string;
                    })[];
                    root: string;
                    route: string;
                    pair: string;
                    cli: string;
                    statement: string;
                    boundary: string;
                };
                comparisons: LocalReverseVsStandardRow[];
                allowlistOk: boolean;
                productionReverseRefused: true;
                certified: false;
                fipsValidated: false;
                claySolvedByThisFold: 0;
                breaksNistPqc: false;
                strongerThanNistPqc: false;
                overallWireClaimProved: false;
                wireProofStatus: "proof-of-falsehood";
                wireRatio: number;
                aes128ClassicalBits: number;
                thisRepoIsNotTheIsoStandard: true;
                isoOfficialStandard: false;
                externalDeploymentCount: 0;
                fieldHistory: "none";
                securityModel: "structural+adversarial+measured-local";
                reverseMs: number;
                aggregateOpsPerSec: number;
                demoMaxBits: number;
                count: number;
                facets: ({
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                pair: string;
                cli: string;
                route: string;
                siblingMagnitudesPair: string;
                statement: string;
                boundary: string;
            };
            oneTbit: {
                computes: boolean;
                claimedBitsPerSec: number;
                /** Primary wire-model answer to “can this encrypt at 1 Tbit/s on the wire?” */
                provedAtCallTime: boolean;
                /** Separate honest model that may prove under memo/extent math. */
                provedAmortizedReuseMemoAtCallTime: boolean;
                model: OneTbitEncryptModel;
                measuredBitsPerSec: number;
                wire: OneTbitModelReceipt;
                demo: OneTbitModelReceipt;
                amortized: OneTbitModelReceipt;
                refused: OneTbitModelReceipt;
                models: readonly [OneTbitModelReceipt, OneTbitModelReceipt, OneTbitModelReceipt, OneTbitModelReceipt];
                productionRefused: boolean;
                bitcoinRefused: boolean;
                count: number;
                facets: ({
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                route: string;
                pair: string;
                cli: string;
                statement: string;
                boundary: string;
            };
            handoff: {
                computes: boolean;
                scienceField: string;
                oecd: string;
                subdomain: string;
                exports: readonly ["isoNistPqcStandardsCatalog", "quantumStandardsAuditSuite", "quantumDimensionAuditCoverage", "pqcNecessityFromShorCompose", "postQuantumMigrationChecklist", "shorBreaksWhichPublicKey", "pqcAlgorithmFamilySelector", "isoAlignedHashSignatureTaxonomy", "runPqcStandardsToolInBrowser", "runQuantumStandardsAuditInBrowser"];
                standardsCount: number;
                researchDate: string;
                auditPass: number;
                auditGap: number;
                dimensionCoverage: number;
                dimensionGates: number;
                migrateOpen: number;
                certified: false;
                fipsValidated: false;
                claySolvedByThisFold: 0;
                catalogRoot: string;
                auditRoot: string;
                facets: ({
                    receipt: string;
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                route: string;
                pair: string;
                cli: string;
                statement: string;
                boundary: string;
            };
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            pair: string;
            cli: string;
            route: string;
            statement: string;
            boundary: string;
        };
        isoRequires: {
            computes: boolean;
            /** Top-level honest answer to “does ISO require PQC?” — false (no universal mandate). */
            isoRequiresPostQuantumSecurity: false;
            universalMandate: false;
            migrationGuidance: true;
            nistAlignedIsoWork: true;
            isoOfficialStandard: false;
            publishedIsoPqcAmd: boolean;
            nistFipsFinal: boolean;
            researchDate: "2026-07";
            plainAnswer: string;
            certified: false;
            fipsValidated: false;
            catalogRoot: string;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            pair: string;
            cli: string;
            route: string;
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
        pair: string;
        cli: string;
        route: string;
        statement: string;
        boundary: string;
    };
    zero: {
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
    order: {
        enforced: boolean;
        level: number;
        trinities: {
            name: string;
            complete: boolean;
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
    pqc: {
        computes: boolean;
        researchDate: string;
        standards: IsoNistStandardRow[];
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
    migrate: {
        computes: boolean;
        steps: {
            receipt: string;
            id: string;
            title: string;
            done: boolean;
            note: string;
        }[];
        openCount: number;
        doneCount: number;
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
    audit: {
        computes: boolean;
        audits: QuantumAuditRow[];
        gaps: QuantumAuditRow[];
        partials: QuantumAuditRow[];
        passes: QuantumAuditRow[];
        gapCount: number;
        partialCount: number;
        passCount: number;
        coveredCount: number;
        count: number;
        dimensions: {
            computes: boolean;
            rows: DimensionAuditRow[];
            coveredCount: number;
            passCount: number;
            partialCount: number;
            gapCount: number;
            dimensionGates: number;
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
        reverseCount: number;
        inverseCount: number;
        forwardCount: number;
        certified: boolean;
        fipsValidated: boolean;
        claySolvedByThisFold: number;
        facets: ({
            receipt: string;
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        route: string;
        pair: string;
        cli: string;
        statement: string;
        boundary: string;
    };
    sections: readonly [{
        readonly id: "demo-rsa-measure";
        readonly title: "Demo RSA generate+reverse measured";
        readonly route: "/en/quantum-encryption#demo-rsa-measure";
        readonly pair: "measure/demo-rsa";
        readonly cli: "npm run quantum:demo-rsa-measure";
        readonly on: boolean;
    }, {
        readonly id: "local-reverse-timed-vs-standards";
        readonly title: "Local reverse timed vs ISO/NIST standards";
        readonly route: "/en/quantum-encryption#local-reverse-timed-vs-standards";
        readonly pair: "reverse/timed-vs-standards";
        readonly cli: "npm run quantum:local-reverse-timed-vs-standards";
        readonly on: boolean;
    }, {
        readonly id: "prove-local-novel-encrypt";
        readonly title: "Local novel-encryption security proof (no production reverse)";
        readonly route: "/en/quantum-encryption#prove-local-novel-encrypt";
        readonly pair: "prove/local-novel-encrypt";
        readonly cli: "npm run quantum:prove-local-novel-encrypt";
        readonly on: boolean;
    }, {
        readonly id: "local-audit-quantum";
        readonly title: "Local audit quantum speed & efficiency";
        readonly route: "/en/quantum-encryption#local-audit-quantum";
        readonly pair: "audit/local-quantum";
        readonly cli: "npm run quantum:local-audit-quantum";
        readonly on: boolean;
    }, {
        readonly id: "crypto-beyond-rsa";
        readonly title: "PQC families · Shor/ECC · hash taxonomy · directional trinity";
        readonly route: "/en/quantum-encryption#crypto-beyond-rsa";
        readonly pair: "measure/crypto-beyond";
        readonly cli: "npm run quantum:crypto-beyond-measure";
        readonly on: boolean;
    }, {
        readonly id: "prove-1tbit";
        readonly title: "1 Tbit/s realtime encryption claim (honest receipt)";
        readonly route: "/en/quantum-encryption#prove-1tbit";
        readonly pair: "prove/1tbit-encrypt";
        readonly cli: "npm run quantum:prove-1tbit-encrypt";
        readonly on: boolean;
    }, {
        readonly id: "prove-local-magnitudes-iso";
        readonly title: "Local vs ISO magnitudes (honest multi-model)";
        readonly route: "/en/quantum-encryption#prove-local-magnitudes-iso";
        readonly pair: "prove/local-magnitudes-iso";
        readonly cli: "npm run quantum:prove-local-magnitudes-iso";
        readonly on: boolean;
    }, {
        readonly id: "iso-pqc-catalog";
        readonly title: "ISO/NIST PQC standards catalog";
        readonly route: "/en/quantum-encryption#iso-pqc-catalog";
        readonly pair: "iso/pqc-catalog";
        readonly cli: "npm run quantum:iso-pqc-catalog";
        readonly on: boolean;
    }, {
        readonly id: "quantum-standards-audit";
        readonly title: "Standards audit (forward·inverse·reverse·10D)";
        readonly route: "/en/quantum-encryption#quantum-standards-audit";
        readonly pair: "audit/standards";
        readonly cli: "npm run quantum:standards-audit";
        readonly on: boolean;
    }];
    timings: {
        catalogMs: number;
        familyMs: number;
        shorMapMs: number;
        taxonomyMs: number;
        migrateMs: number;
        trinityMs: number;
        rsaSuiteMs: number;
        rsaGenerateMs: number;
        rsaReverseMs: number;
    };
    mlKemParams: string[];
    mlDsaParams: string[];
    slhDsaParams: string[];
    eccShorBreaks: boolean;
    demoModuli: number[];
    cli: string;
    pqcCli: string;
    auditCli: string;
    beyondCli: string;
    localTimedCli: string;
    localNovelCli: string;
    localAuditCli: string;
    oneTbitCli: string;
    localMagnitudesCli: string;
    pair: string;
    pqcPair: string;
    auditPair: string;
    beyondPair: string;
    localTimedPair: string;
    localNovelPair: string;
    localAuditPair: string;
    oneTbitPair: string;
    localMagnitudesPair: string;
    route: string;
    teaching: {
        n: number;
        e: number;
        d: number;
        message: number;
        cipher: number;
        plain: number;
    };
    demoFactors: string[];
    workerCap: number;
    glyphBonus: number;
    standards: IsoNistStandardRow[];
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
 * Browser-runnable encryption tool — sync only (demoRsaReverseSync / modeledShorFactorToyModulus).
 * HONEST: never uses worker_threads; production moduli refused via refuseNonDemoRsaModulus.
 */
export declare function runEncryptionToolInBrowser(modulus?: number | null, matrix?: MindMatrix): {
    ok: boolean;
    refused: boolean;
    refuseReason: string;
    bits: number;
    modulus: number;
    demoModuli: number[];
    factor: {
        N: number;
        p: number;
        q: number;
        base: number;
        order: number;
        factored: boolean;
        reason: string;
    };
    teaching: {
        n: number;
        e: number;
        message: number;
        cipher: number;
        plain: number;
    };
    roundTrip: boolean;
    rsaRoundTrip: boolean;
    glyphBonus: number;
    generateMs: number;
    reverseMs: number;
    thresholdMs: number;
    measured: {
        computes: boolean;
        generateMs: number;
        reverseMs: number;
        workers: number;
        moduli: number[];
        thresholdMs: number;
        slowGenerate: boolean;
        slowReverse: boolean;
        generate: {
            ok: boolean;
            n: number;
            e: number;
            d: number;
            message: number;
            cipher: number;
            plain: number;
            refused: true;
            reason: string;
        } | {
            ok: boolean;
            n: number;
            e: number;
            d: number;
            message: number;
            cipher: number;
            plain: number;
            refused: false;
            reason: string;
        };
        reverse: {
            computes: boolean;
            results: {
                N: number;
                factored: boolean;
                p: number;
                q: number;
                base: number;
                order: number;
                refused: boolean;
                reason: string;
            }[];
            workerCap: number;
            productionRefused: boolean;
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
        timedReceipt: string;
        productionRefused: boolean;
        bitcoinRefused: boolean;
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
    localTimed: {
        computes: boolean;
        timed: {
            computes: boolean;
            generateMs: number;
            reverseMs: number;
            aggregateOpsPerSec: number;
            rows: LocalEncryptionReverseRow[];
            moduli: number[];
            productionRefused: boolean;
            bitcoinRefused: boolean;
            generate: {
                ok: boolean;
                n: number;
                e: number;
                d: number;
                message: number;
                cipher: number;
                plain: number;
                refused: true;
                reason: string;
            } | {
                ok: boolean;
                n: number;
                e: number;
                d: number;
                message: number;
                cipher: number;
                plain: number;
                refused: false;
                reason: string;
            };
            sync: {
                computes: boolean;
                results: {
                    N: number;
                    factored: boolean;
                    p: number;
                    q: number;
                    base: number;
                    order: number;
                    refused: boolean;
                    reason: string;
                }[];
                workerCap: number;
                productionRefused: boolean;
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
            count: number;
            facets: ({
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            pair: string;
            cli: string;
            route: string;
            statement: string;
            boundary: string;
        };
        comparisons: LocalReverseVsStandardRow[];
        table: LocalReverseVsStandardRow[];
        audit: {
            computes: boolean;
            audits: QuantumAuditRow[];
            gaps: QuantumAuditRow[];
            partials: QuantumAuditRow[];
            passes: QuantumAuditRow[];
            gapCount: number;
            partialCount: number;
            passCount: number;
            coveredCount: number;
            count: number;
            dimensions: {
                computes: boolean;
                rows: DimensionAuditRow[];
                coveredCount: number;
                passCount: number;
                partialCount: number;
                gapCount: number;
                dimensionGates: number;
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
            reverseCount: number;
            inverseCount: number;
            forwardCount: number;
            certified: boolean;
            fipsValidated: boolean;
            claySolvedByThisFold: number;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            route: string;
            pair: string;
            cli: string;
            statement: string;
            boundary: string;
        };
        catalog: {
            computes: boolean;
            researchDate: string;
            standards: IsoNistStandardRow[];
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
        trinity: {
            computes: boolean;
            digits: import("../stack").DirectionalTrinityDigitRow[];
            table: {
                digit: number;
                forward: number;
                inverse: number;
                reverse: number;
                note: string;
            }[];
            foldPair: {
                forward: string;
                reverse: string;
                merged: string;
                bidirectional: boolean;
            };
            ratInvSample: {
                forward: import("../../3/7").Rational;
                inverse: import("../../3/7").Rational;
            };
            fInverse: {
                computes: boolean;
                root: string;
            };
            claySolvedByThisFold: 0;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            cli: string;
            pair: string;
            route: string;
            statement: string;
            boundary: string;
        };
        certified: false;
        fipsValidated: false;
        claySolvedByThisFold: 0;
        breaksNistPqc: false;
        productionRefused: boolean;
        bitcoinRefused: boolean;
        demoMaxBits: number;
        generateMs: number;
        reverseMs: number;
        aggregateOpsPerSec: number;
        count: number;
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        pair: string;
        cli: string;
        route: string;
        statement: string;
        boundary: string;
    };
    localNovel: {
        computes: boolean;
        localSecurityProved: boolean;
        means: string;
        unproved: readonly ["FIPS validation", "ISO certification", "this repo being an ISO/NIST standard (it is not)", "wire-crypto magnitudes over NIST/ISO PQC (overallWireClaimProved=false)", "field battle-testing (externalDeploymentCount=0)", "wire AES-GCM reverse / production RSA reverse", "Clay millennium progress"];
        inventory: {
            computes: boolean;
            components: readonly LocalNovelEncryptionComponent[];
            novelCount: number;
            textbookCount: number;
            externalCount: number;
            externalDeploymentCount: 0;
            fieldHistory: "none";
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
        tools: {
            ready: boolean;
            roundTrip: boolean;
            rsaRoundTrip: boolean;
            cipher: string;
            teaching: {
                n: number;
                e: number;
                d: number;
                message: number;
                cipher: number;
                plain: number;
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
        reverse: {
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
        localTimed: {
            computes: boolean;
            timed: {
                computes: boolean;
                generateMs: number;
                reverseMs: number;
                aggregateOpsPerSec: number;
                rows: LocalEncryptionReverseRow[];
                moduli: number[];
                productionRefused: boolean;
                bitcoinRefused: boolean;
                generate: {
                    ok: boolean;
                    n: number;
                    e: number;
                    d: number;
                    message: number;
                    cipher: number;
                    plain: number;
                    refused: true;
                    reason: string;
                } | {
                    ok: boolean;
                    n: number;
                    e: number;
                    d: number;
                    message: number;
                    cipher: number;
                    plain: number;
                    refused: false;
                    reason: string;
                };
                sync: {
                    computes: boolean;
                    results: {
                        N: number;
                        factored: boolean;
                        p: number;
                        q: number;
                        base: number;
                        order: number;
                        refused: boolean;
                        reason: string;
                    }[];
                    workerCap: number;
                    productionRefused: boolean;
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
                count: number;
                facets: ({
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                pair: string;
                cli: string;
                route: string;
                statement: string;
                boundary: string;
            };
            comparisons: LocalReverseVsStandardRow[];
            table: LocalReverseVsStandardRow[];
            audit: {
                computes: boolean;
                audits: QuantumAuditRow[];
                gaps: QuantumAuditRow[];
                partials: QuantumAuditRow[];
                passes: QuantumAuditRow[];
                gapCount: number;
                partialCount: number;
                passCount: number;
                coveredCount: number;
                count: number;
                dimensions: {
                    computes: boolean;
                    rows: DimensionAuditRow[];
                    coveredCount: number;
                    passCount: number;
                    partialCount: number;
                    gapCount: number;
                    dimensionGates: number;
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
                reverseCount: number;
                inverseCount: number;
                forwardCount: number;
                certified: boolean;
                fipsValidated: boolean;
                claySolvedByThisFold: number;
                facets: ({
                    receipt: string;
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                route: string;
                pair: string;
                cli: string;
                statement: string;
                boundary: string;
            };
            catalog: {
                computes: boolean;
                researchDate: string;
                standards: IsoNistStandardRow[];
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
            trinity: {
                computes: boolean;
                digits: import("../stack").DirectionalTrinityDigitRow[];
                table: {
                    digit: number;
                    forward: number;
                    inverse: number;
                    reverse: number;
                    note: string;
                }[];
                foldPair: {
                    forward: string;
                    reverse: string;
                    merged: string;
                    bidirectional: boolean;
                };
                ratInvSample: {
                    forward: import("../../3/7").Rational;
                    inverse: import("../../3/7").Rational;
                };
                fInverse: {
                    computes: boolean;
                    root: string;
                };
                claySolvedByThisFold: 0;
                facets: ({
                    receipt: string;
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                cli: string;
                pair: string;
                route: string;
                statement: string;
                boundary: string;
            };
            certified: false;
            fipsValidated: false;
            claySolvedByThisFold: 0;
            breaksNistPqc: false;
            productionRefused: boolean;
            bitcoinRefused: boolean;
            demoMaxBits: number;
            generateMs: number;
            reverseMs: number;
            aggregateOpsPerSec: number;
            count: number;
            facets: ({
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            pair: string;
            cli: string;
            route: string;
            statement: string;
            boundary: string;
        };
        audit: {
            computes: boolean;
            audits: QuantumAuditRow[];
            gaps: QuantumAuditRow[];
            partials: QuantumAuditRow[];
            passes: QuantumAuditRow[];
            gapCount: number;
            partialCount: number;
            passCount: number;
            coveredCount: number;
            count: number;
            dimensions: {
                computes: boolean;
                rows: DimensionAuditRow[];
                coveredCount: number;
                passCount: number;
                partialCount: number;
                gapCount: number;
                dimensionGates: number;
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
            reverseCount: number;
            inverseCount: number;
            forwardCount: number;
            certified: boolean;
            fipsValidated: boolean;
            claySolvedByThisFold: number;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            route: string;
            pair: string;
            cli: string;
            statement: string;
            boundary: string;
        };
        catalog: {
            computes: boolean;
            researchDate: string;
            standards: IsoNistStandardRow[];
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
        trinity: {
            computes: boolean;
            digits: import("../stack").DirectionalTrinityDigitRow[];
            table: {
                digit: number;
                forward: number;
                inverse: number;
                reverse: number;
                note: string;
            }[];
            foldPair: {
                forward: string;
                reverse: string;
                merged: string;
                bidirectional: boolean;
            };
            ratInvSample: {
                forward: import("../../3/7").Rational;
                inverse: import("../../3/7").Rational;
            };
            fInverse: {
                computes: boolean;
                root: string;
            };
            claySolvedByThisFold: 0;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            cli: string;
            pair: string;
            route: string;
            statement: string;
            boundary: string;
        };
        oneTbit: {
            computes: boolean;
            claimedBitsPerSec: number;
            /** Primary wire-model answer to “can this encrypt at 1 Tbit/s on the wire?” */
            provedAtCallTime: boolean;
            /** Separate honest model that may prove under memo/extent math. */
            provedAmortizedReuseMemoAtCallTime: boolean;
            model: OneTbitEncryptModel;
            measuredBitsPerSec: number;
            wire: OneTbitModelReceipt;
            demo: OneTbitModelReceipt;
            amortized: OneTbitModelReceipt;
            refused: OneTbitModelReceipt;
            models: readonly [OneTbitModelReceipt, OneTbitModelReceipt, OneTbitModelReceipt, OneTbitModelReceipt];
            productionRefused: boolean;
            bitcoinRefused: boolean;
            count: number;
            facets: ({
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            route: string;
            pair: string;
            cli: string;
            statement: string;
            boundary: string;
        };
        comparisons: LocalReverseVsStandardRow[];
        allowlistOk: boolean;
        productionReverseRefused: true;
        certified: false;
        fipsValidated: false;
        claySolvedByThisFold: 0;
        breaksNistPqc: false;
        strongerThanNistPqc: false;
        overallWireClaimProved: false;
        wireProofStatus: "proof-of-falsehood";
        wireRatio: number;
        aes128ClassicalBits: number;
        thisRepoIsNotTheIsoStandard: true;
        isoOfficialStandard: false;
        externalDeploymentCount: 0;
        fieldHistory: "none";
        securityModel: "structural+adversarial+measured-local";
        reverseMs: number;
        aggregateOpsPerSec: number;
        demoMaxBits: number;
        count: number;
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        pair: string;
        cli: string;
        route: string;
        siblingMagnitudesPair: string;
        statement: string;
        boundary: string;
    };
    comparisons: LocalReverseVsStandardRow[];
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    statement: string;
    boundary: string;
    mode: "browser-sync";
};
/** Sealed slow threshold — FOLDED_CENSUS × digitalRoot(432) (= 108×9 = 972 ms). Lattice-derived, not a magic SLO. */
export declare const DEMO_RSA_MEASURE_SLOW_MS: number;
/** Teaching RSA keygen + encrypt→decrypt on sealed n=p·q — GENERATE half. */
export declare function demoRsaTeachingGenerateSync(): {
    ok: boolean;
    n: number;
    e: number;
    d: number;
    message: number;
    cipher: number;
    plain: number;
    refused: true;
    reason: string;
} | {
    ok: boolean;
    n: number;
    e: number;
    d: number;
    message: number;
    cipher: number;
    plain: number;
    refused: false;
    reason: string;
};
/**
 * Measure demo RSA generate + reverse at call time — numbers, not prose.
 * Pair: measure/demo-rsa · CLI npm run quantum:demo-rsa-measure
 * Wall-clock is telemetry only — excluded from merkle structural root (P2 honesty).
 */
export declare function demoRsaGenerateAndReverseMeasured(matrix?: MindMatrix): {
    computes: boolean;
    generateMs: number;
    reverseMs: number;
    workers: number;
    moduli: number[];
    thresholdMs: number;
    slowGenerate: boolean;
    slowReverse: boolean;
    generate: {
        ok: boolean;
        n: number;
        e: number;
        d: number;
        message: number;
        cipher: number;
        plain: number;
        refused: true;
        reason: string;
    } | {
        ok: boolean;
        n: number;
        e: number;
        d: number;
        message: number;
        cipher: number;
        plain: number;
        refused: false;
        reason: string;
    };
    reverse: {
        computes: boolean;
        results: {
            N: number;
            factored: boolean;
            p: number;
            q: number;
            base: number;
            order: number;
            refused: boolean;
            reason: string;
        }[];
        workerCap: number;
        productionRefused: boolean;
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
    timedReceipt: string;
    productionRefused: boolean;
    bitcoinRefused: boolean;
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
/** npm run quantum:demo-rsa-measure */
export declare function runDemoRsaGenerateAndReverseMeasuredExit(_root: string, _argv?: readonly string[]): number;
export type LocalEncryptionReverseRow = {
    readonly N: number;
    readonly bits: number;
    readonly reverseMs: number;
    readonly opsPerSec: number;
    readonly factored: boolean;
    readonly refused: boolean;
    readonly p: number;
    readonly q: number;
};
/**
 * Local/demo encryption reverse timings — allowlisted moduli only.
 * Pair: reverse/local-timed · wall-clock labeled toy-only.
 * memoByRoot — structural receipt reused; wall-clock frozen at first seal (amortized reuse, not a new SLA).
 */
export declare function localEncryptionReverseTimed(matrix?: MindMatrix): {
    computes: boolean;
    generateMs: number;
    reverseMs: number;
    aggregateOpsPerSec: number;
    rows: LocalEncryptionReverseRow[];
    moduli: number[];
    productionRefused: boolean;
    bitcoinRefused: boolean;
    generate: {
        ok: boolean;
        n: number;
        e: number;
        d: number;
        message: number;
        cipher: number;
        plain: number;
        refused: true;
        reason: string;
    } | {
        ok: boolean;
        n: number;
        e: number;
        d: number;
        message: number;
        cipher: number;
        plain: number;
        refused: false;
        reason: string;
    };
    sync: {
        computes: boolean;
        results: {
            N: number;
            factored: boolean;
            p: number;
            q: number;
            base: number;
            order: number;
            refused: boolean;
            reason: string;
        }[];
        workerCap: number;
        productionRefused: boolean;
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
    count: number;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    pair: string;
    cli: string;
    route: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:local-reverse-timed */
export declare function runLocalEncryptionReverseTimedExit(_root: string, _argv?: readonly string[]): number;
export type LocalReverseVsStandardRow = {
    readonly id: string;
    readonly classicalSecurityBits: number;
    readonly source: string;
    readonly demoReverseMs: number;
    readonly demoMaxBits: number;
    readonly estimatedClassicalLog2Sec: number;
    readonly demoOrdersOfMagnitudeFasterLog2: number;
    readonly breaksStandard: false;
    readonly note: string;
};
/**
 * Compare local demo reverse timings to ISO/NIST classical security levels.
 * Pair: reverse/timed-vs-standards · certified=false · never claims breaking NIST PQC.
 * memoByRoot — deterministic facets + composed roots reused at O(1) warm hit.
 */
export declare function localEncryptionReverseTimedVsStandards(matrix?: MindMatrix): {
    computes: boolean;
    timed: {
        computes: boolean;
        generateMs: number;
        reverseMs: number;
        aggregateOpsPerSec: number;
        rows: LocalEncryptionReverseRow[];
        moduli: number[];
        productionRefused: boolean;
        bitcoinRefused: boolean;
        generate: {
            ok: boolean;
            n: number;
            e: number;
            d: number;
            message: number;
            cipher: number;
            plain: number;
            refused: true;
            reason: string;
        } | {
            ok: boolean;
            n: number;
            e: number;
            d: number;
            message: number;
            cipher: number;
            plain: number;
            refused: false;
            reason: string;
        };
        sync: {
            computes: boolean;
            results: {
                N: number;
                factored: boolean;
                p: number;
                q: number;
                base: number;
                order: number;
                refused: boolean;
                reason: string;
            }[];
            workerCap: number;
            productionRefused: boolean;
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
        count: number;
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        pair: string;
        cli: string;
        route: string;
        statement: string;
        boundary: string;
    };
    comparisons: LocalReverseVsStandardRow[];
    table: LocalReverseVsStandardRow[];
    audit: {
        computes: boolean;
        audits: QuantumAuditRow[];
        gaps: QuantumAuditRow[];
        partials: QuantumAuditRow[];
        passes: QuantumAuditRow[];
        gapCount: number;
        partialCount: number;
        passCount: number;
        coveredCount: number;
        count: number;
        dimensions: {
            computes: boolean;
            rows: DimensionAuditRow[];
            coveredCount: number;
            passCount: number;
            partialCount: number;
            gapCount: number;
            dimensionGates: number;
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
        reverseCount: number;
        inverseCount: number;
        forwardCount: number;
        certified: boolean;
        fipsValidated: boolean;
        claySolvedByThisFold: number;
        facets: ({
            receipt: string;
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        route: string;
        pair: string;
        cli: string;
        statement: string;
        boundary: string;
    };
    catalog: {
        computes: boolean;
        researchDate: string;
        standards: IsoNistStandardRow[];
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
    trinity: {
        computes: boolean;
        digits: import("../stack").DirectionalTrinityDigitRow[];
        table: {
            digit: number;
            forward: number;
            inverse: number;
            reverse: number;
            note: string;
        }[];
        foldPair: {
            forward: string;
            reverse: string;
            merged: string;
            bidirectional: boolean;
        };
        ratInvSample: {
            forward: import("../../3/7").Rational;
            inverse: import("../../3/7").Rational;
        };
        fInverse: {
            computes: boolean;
            root: string;
        };
        claySolvedByThisFold: 0;
        facets: ({
            receipt: string;
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        cli: string;
        pair: string;
        route: string;
        statement: string;
        boundary: string;
    };
    certified: false;
    fipsValidated: false;
    claySolvedByThisFold: 0;
    breaksNistPqc: false;
    productionRefused: boolean;
    bitcoinRefused: boolean;
    demoMaxBits: number;
    generateMs: number;
    reverseMs: number;
    aggregateOpsPerSec: number;
    count: number;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    pair: string;
    cli: string;
    route: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:local-reverse-timed-vs-standards */
export declare function runLocalEncryptionReverseTimedVsStandardsExit(_root: string, _argv?: readonly string[]): number;
export type LocalNovelEncryptionKind = 'novel-to-corpus' | 'textbook-demo' | 'external-standard';
export type LocalNovelEncryptionComponent = {
    readonly id: string;
    readonly kind: LocalNovelEncryptionKind;
    readonly fold: string;
    readonly barrel: string;
    readonly note: string;
};
/**
 * Inventory of sealed encryption components — label novel-to-corpus vs textbook-demo vs external-standard.
 * Pair: prove/local-novel-encrypt · composed by proveLocalNovelEncryptionSecurity.
 */
export declare function inventoryLocalNovelEncryptionScheme(matrix?: MindMatrix): {
    computes: boolean;
    components: readonly LocalNovelEncryptionComponent[];
    novelCount: number;
    textbookCount: number;
    externalCount: number;
    externalDeploymentCount: 0;
    fieldHistory: "none";
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
/**
 * Prove local security of this repo’s brand-new encryption without production-crack tools.
 *
 * localSecurityProved = structural proofs + refuse + round-trip + allowlisted reverse + timed reverse
 * + ISO/NIST map as reference bounds + wire-vs-ISO proof-of-falsehood (overallWireClaimProved=false).
 * HARD: strongerThanNistPqc=false. Does NOT call proveLocalEncryptionMagnitudesStrongerThanIsoAllDirections
 * (sibling #24 owns directions×models; calling it would recurse).
 *
 * Pair: prove/local-novel-encrypt · CLI npm run quantum:prove-local-novel-encrypt
 * Stacked on PR #24. This repo is NOT the ISO/NIST standard.
 * memoByRoot — full local-security receipt reused; production reverse still refused.
 */
export declare function proveLocalNovelEncryptionSecurity(matrix?: MindMatrix): {
    computes: boolean;
    localSecurityProved: boolean;
    means: string;
    unproved: readonly ["FIPS validation", "ISO certification", "this repo being an ISO/NIST standard (it is not)", "wire-crypto magnitudes over NIST/ISO PQC (overallWireClaimProved=false)", "field battle-testing (externalDeploymentCount=0)", "wire AES-GCM reverse / production RSA reverse", "Clay millennium progress"];
    inventory: {
        computes: boolean;
        components: readonly LocalNovelEncryptionComponent[];
        novelCount: number;
        textbookCount: number;
        externalCount: number;
        externalDeploymentCount: 0;
        fieldHistory: "none";
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
    tools: {
        ready: boolean;
        roundTrip: boolean;
        rsaRoundTrip: boolean;
        cipher: string;
        teaching: {
            n: number;
            e: number;
            d: number;
            message: number;
            cipher: number;
            plain: number;
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
    reverse: {
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
    localTimed: {
        computes: boolean;
        timed: {
            computes: boolean;
            generateMs: number;
            reverseMs: number;
            aggregateOpsPerSec: number;
            rows: LocalEncryptionReverseRow[];
            moduli: number[];
            productionRefused: boolean;
            bitcoinRefused: boolean;
            generate: {
                ok: boolean;
                n: number;
                e: number;
                d: number;
                message: number;
                cipher: number;
                plain: number;
                refused: true;
                reason: string;
            } | {
                ok: boolean;
                n: number;
                e: number;
                d: number;
                message: number;
                cipher: number;
                plain: number;
                refused: false;
                reason: string;
            };
            sync: {
                computes: boolean;
                results: {
                    N: number;
                    factored: boolean;
                    p: number;
                    q: number;
                    base: number;
                    order: number;
                    refused: boolean;
                    reason: string;
                }[];
                workerCap: number;
                productionRefused: boolean;
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
            count: number;
            facets: ({
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            pair: string;
            cli: string;
            route: string;
            statement: string;
            boundary: string;
        };
        comparisons: LocalReverseVsStandardRow[];
        table: LocalReverseVsStandardRow[];
        audit: {
            computes: boolean;
            audits: QuantumAuditRow[];
            gaps: QuantumAuditRow[];
            partials: QuantumAuditRow[];
            passes: QuantumAuditRow[];
            gapCount: number;
            partialCount: number;
            passCount: number;
            coveredCount: number;
            count: number;
            dimensions: {
                computes: boolean;
                rows: DimensionAuditRow[];
                coveredCount: number;
                passCount: number;
                partialCount: number;
                gapCount: number;
                dimensionGates: number;
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
            reverseCount: number;
            inverseCount: number;
            forwardCount: number;
            certified: boolean;
            fipsValidated: boolean;
            claySolvedByThisFold: number;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            route: string;
            pair: string;
            cli: string;
            statement: string;
            boundary: string;
        };
        catalog: {
            computes: boolean;
            researchDate: string;
            standards: IsoNistStandardRow[];
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
        trinity: {
            computes: boolean;
            digits: import("../stack").DirectionalTrinityDigitRow[];
            table: {
                digit: number;
                forward: number;
                inverse: number;
                reverse: number;
                note: string;
            }[];
            foldPair: {
                forward: string;
                reverse: string;
                merged: string;
                bidirectional: boolean;
            };
            ratInvSample: {
                forward: import("../../3/7").Rational;
                inverse: import("../../3/7").Rational;
            };
            fInverse: {
                computes: boolean;
                root: string;
            };
            claySolvedByThisFold: 0;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            cli: string;
            pair: string;
            route: string;
            statement: string;
            boundary: string;
        };
        certified: false;
        fipsValidated: false;
        claySolvedByThisFold: 0;
        breaksNistPqc: false;
        productionRefused: boolean;
        bitcoinRefused: boolean;
        demoMaxBits: number;
        generateMs: number;
        reverseMs: number;
        aggregateOpsPerSec: number;
        count: number;
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        pair: string;
        cli: string;
        route: string;
        statement: string;
        boundary: string;
    };
    audit: {
        computes: boolean;
        audits: QuantumAuditRow[];
        gaps: QuantumAuditRow[];
        partials: QuantumAuditRow[];
        passes: QuantumAuditRow[];
        gapCount: number;
        partialCount: number;
        passCount: number;
        coveredCount: number;
        count: number;
        dimensions: {
            computes: boolean;
            rows: DimensionAuditRow[];
            coveredCount: number;
            passCount: number;
            partialCount: number;
            gapCount: number;
            dimensionGates: number;
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
        reverseCount: number;
        inverseCount: number;
        forwardCount: number;
        certified: boolean;
        fipsValidated: boolean;
        claySolvedByThisFold: number;
        facets: ({
            receipt: string;
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        route: string;
        pair: string;
        cli: string;
        statement: string;
        boundary: string;
    };
    catalog: {
        computes: boolean;
        researchDate: string;
        standards: IsoNistStandardRow[];
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
    trinity: {
        computes: boolean;
        digits: import("../stack").DirectionalTrinityDigitRow[];
        table: {
            digit: number;
            forward: number;
            inverse: number;
            reverse: number;
            note: string;
        }[];
        foldPair: {
            forward: string;
            reverse: string;
            merged: string;
            bidirectional: boolean;
        };
        ratInvSample: {
            forward: import("../../3/7").Rational;
            inverse: import("../../3/7").Rational;
        };
        fInverse: {
            computes: boolean;
            root: string;
        };
        claySolvedByThisFold: 0;
        facets: ({
            receipt: string;
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        cli: string;
        pair: string;
        route: string;
        statement: string;
        boundary: string;
    };
    oneTbit: {
        computes: boolean;
        claimedBitsPerSec: number;
        /** Primary wire-model answer to “can this encrypt at 1 Tbit/s on the wire?” */
        provedAtCallTime: boolean;
        /** Separate honest model that may prove under memo/extent math. */
        provedAmortizedReuseMemoAtCallTime: boolean;
        model: OneTbitEncryptModel;
        measuredBitsPerSec: number;
        wire: OneTbitModelReceipt;
        demo: OneTbitModelReceipt;
        amortized: OneTbitModelReceipt;
        refused: OneTbitModelReceipt;
        models: readonly [OneTbitModelReceipt, OneTbitModelReceipt, OneTbitModelReceipt, OneTbitModelReceipt];
        productionRefused: boolean;
        bitcoinRefused: boolean;
        count: number;
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        route: string;
        pair: string;
        cli: string;
        statement: string;
        boundary: string;
    };
    comparisons: LocalReverseVsStandardRow[];
    allowlistOk: boolean;
    productionReverseRefused: true;
    certified: false;
    fipsValidated: false;
    claySolvedByThisFold: 0;
    breaksNistPqc: false;
    strongerThanNistPqc: false;
    overallWireClaimProved: false;
    wireProofStatus: "proof-of-falsehood";
    wireRatio: number;
    aes128ClassicalBits: number;
    thisRepoIsNotTheIsoStandard: true;
    isoOfficialStandard: false;
    externalDeploymentCount: 0;
    fieldHistory: "none";
    securityModel: "structural+adversarial+measured-local";
    reverseMs: number;
    aggregateOpsPerSec: number;
    demoMaxBits: number;
    count: number;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    pair: string;
    cli: string;
    route: string;
    siblingMagnitudesPair: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:prove-local-novel-encrypt */
export declare function runProveLocalNovelEncryptionSecurityExit(_root: string, _argv?: readonly string[]): number;
export type LocalAuditFacetTiming = {
    readonly id: string;
    readonly fold: string;
    readonly coldMs: number;
    readonly warmMs: number;
    readonly memoHit: boolean;
    readonly root: string;
    readonly computes: boolean;
};
/**
 * Run the local security/audit suite with memoByRoot reuse receipts.
 * Pair: audit/local-quantum · CLI npm run quantum:local-audit-quantum
 * Route: /en/quantum-encryption#local-audit-quantum
 *
 * Composes proveLocalNovelEncryptionSecurity + localEncryptionReverseTimedVsStandards +
 * quantumStandardsAuditSuite through memoized roots; reports cold vs warm ms, memo hits,
 * answers÷tokens efficiency vote honesty (compareCeccecEfficiencyByVote). Closes the
 * "slow local audit" quantum gap via amortized O(1) warm reuse — NOT physical qubits.
 */
export declare function localAuditQuantumSpeedEfficiency(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    suiteColdMs: number;
    suiteWarmMs: number;
    suiteSpeedup: number;
    suiteMemoHit: boolean;
    coldMs: number;
    warmMs: number;
    speedup: number;
    memoHits: boolean;
    facetTimings: LocalAuditFacetTiming[];
    facetMemoHitCount: number;
    allFacetMemoHits: boolean;
    slowLocalAuditGapClosed: boolean;
    localTimed: {
        computes: boolean;
        timed: {
            computes: boolean;
            generateMs: number;
            reverseMs: number;
            aggregateOpsPerSec: number;
            rows: LocalEncryptionReverseRow[];
            moduli: number[];
            productionRefused: boolean;
            bitcoinRefused: boolean;
            generate: {
                ok: boolean;
                n: number;
                e: number;
                d: number;
                message: number;
                cipher: number;
                plain: number;
                refused: true;
                reason: string;
            } | {
                ok: boolean;
                n: number;
                e: number;
                d: number;
                message: number;
                cipher: number;
                plain: number;
                refused: false;
                reason: string;
            };
            sync: {
                computes: boolean;
                results: {
                    N: number;
                    factored: boolean;
                    p: number;
                    q: number;
                    base: number;
                    order: number;
                    refused: boolean;
                    reason: string;
                }[];
                workerCap: number;
                productionRefused: boolean;
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
            count: number;
            facets: ({
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            pair: string;
            cli: string;
            route: string;
            statement: string;
            boundary: string;
        };
        comparisons: LocalReverseVsStandardRow[];
        table: LocalReverseVsStandardRow[];
        audit: {
            computes: boolean;
            audits: QuantumAuditRow[];
            gaps: QuantumAuditRow[];
            partials: QuantumAuditRow[];
            passes: QuantumAuditRow[];
            gapCount: number;
            partialCount: number;
            passCount: number;
            coveredCount: number;
            count: number;
            dimensions: {
                computes: boolean;
                rows: DimensionAuditRow[];
                coveredCount: number;
                passCount: number;
                partialCount: number;
                gapCount: number;
                dimensionGates: number;
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
            reverseCount: number;
            inverseCount: number;
            forwardCount: number;
            certified: boolean;
            fipsValidated: boolean;
            claySolvedByThisFold: number;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            route: string;
            pair: string;
            cli: string;
            statement: string;
            boundary: string;
        };
        catalog: {
            computes: boolean;
            researchDate: string;
            standards: IsoNistStandardRow[];
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
        trinity: {
            computes: boolean;
            digits: import("../stack").DirectionalTrinityDigitRow[];
            table: {
                digit: number;
                forward: number;
                inverse: number;
                reverse: number;
                note: string;
            }[];
            foldPair: {
                forward: string;
                reverse: string;
                merged: string;
                bidirectional: boolean;
            };
            ratInvSample: {
                forward: import("../../3/7").Rational;
                inverse: import("../../3/7").Rational;
            };
            fInverse: {
                computes: boolean;
                root: string;
            };
            claySolvedByThisFold: 0;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            cli: string;
            pair: string;
            route: string;
            statement: string;
            boundary: string;
        };
        certified: false;
        fipsValidated: false;
        claySolvedByThisFold: 0;
        breaksNistPqc: false;
        productionRefused: boolean;
        bitcoinRefused: boolean;
        demoMaxBits: number;
        generateMs: number;
        reverseMs: number;
        aggregateOpsPerSec: number;
        count: number;
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        pair: string;
        cli: string;
        route: string;
        statement: string;
        boundary: string;
    };
    localNovel: {
        computes: boolean;
        localSecurityProved: boolean;
        means: string;
        unproved: readonly ["FIPS validation", "ISO certification", "this repo being an ISO/NIST standard (it is not)", "wire-crypto magnitudes over NIST/ISO PQC (overallWireClaimProved=false)", "field battle-testing (externalDeploymentCount=0)", "wire AES-GCM reverse / production RSA reverse", "Clay millennium progress"];
        inventory: {
            computes: boolean;
            components: readonly LocalNovelEncryptionComponent[];
            novelCount: number;
            textbookCount: number;
            externalCount: number;
            externalDeploymentCount: 0;
            fieldHistory: "none";
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
        tools: {
            ready: boolean;
            roundTrip: boolean;
            rsaRoundTrip: boolean;
            cipher: string;
            teaching: {
                n: number;
                e: number;
                d: number;
                message: number;
                cipher: number;
                plain: number;
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
        reverse: {
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
        localTimed: {
            computes: boolean;
            timed: {
                computes: boolean;
                generateMs: number;
                reverseMs: number;
                aggregateOpsPerSec: number;
                rows: LocalEncryptionReverseRow[];
                moduli: number[];
                productionRefused: boolean;
                bitcoinRefused: boolean;
                generate: {
                    ok: boolean;
                    n: number;
                    e: number;
                    d: number;
                    message: number;
                    cipher: number;
                    plain: number;
                    refused: true;
                    reason: string;
                } | {
                    ok: boolean;
                    n: number;
                    e: number;
                    d: number;
                    message: number;
                    cipher: number;
                    plain: number;
                    refused: false;
                    reason: string;
                };
                sync: {
                    computes: boolean;
                    results: {
                        N: number;
                        factored: boolean;
                        p: number;
                        q: number;
                        base: number;
                        order: number;
                        refused: boolean;
                        reason: string;
                    }[];
                    workerCap: number;
                    productionRefused: boolean;
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
                count: number;
                facets: ({
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                pair: string;
                cli: string;
                route: string;
                statement: string;
                boundary: string;
            };
            comparisons: LocalReverseVsStandardRow[];
            table: LocalReverseVsStandardRow[];
            audit: {
                computes: boolean;
                audits: QuantumAuditRow[];
                gaps: QuantumAuditRow[];
                partials: QuantumAuditRow[];
                passes: QuantumAuditRow[];
                gapCount: number;
                partialCount: number;
                passCount: number;
                coveredCount: number;
                count: number;
                dimensions: {
                    computes: boolean;
                    rows: DimensionAuditRow[];
                    coveredCount: number;
                    passCount: number;
                    partialCount: number;
                    gapCount: number;
                    dimensionGates: number;
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
                reverseCount: number;
                inverseCount: number;
                forwardCount: number;
                certified: boolean;
                fipsValidated: boolean;
                claySolvedByThisFold: number;
                facets: ({
                    receipt: string;
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                route: string;
                pair: string;
                cli: string;
                statement: string;
                boundary: string;
            };
            catalog: {
                computes: boolean;
                researchDate: string;
                standards: IsoNistStandardRow[];
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
            trinity: {
                computes: boolean;
                digits: import("../stack").DirectionalTrinityDigitRow[];
                table: {
                    digit: number;
                    forward: number;
                    inverse: number;
                    reverse: number;
                    note: string;
                }[];
                foldPair: {
                    forward: string;
                    reverse: string;
                    merged: string;
                    bidirectional: boolean;
                };
                ratInvSample: {
                    forward: import("../../3/7").Rational;
                    inverse: import("../../3/7").Rational;
                };
                fInverse: {
                    computes: boolean;
                    root: string;
                };
                claySolvedByThisFold: 0;
                facets: ({
                    receipt: string;
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                cli: string;
                pair: string;
                route: string;
                statement: string;
                boundary: string;
            };
            certified: false;
            fipsValidated: false;
            claySolvedByThisFold: 0;
            breaksNistPqc: false;
            productionRefused: boolean;
            bitcoinRefused: boolean;
            demoMaxBits: number;
            generateMs: number;
            reverseMs: number;
            aggregateOpsPerSec: number;
            count: number;
            facets: ({
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            pair: string;
            cli: string;
            route: string;
            statement: string;
            boundary: string;
        };
        audit: {
            computes: boolean;
            audits: QuantumAuditRow[];
            gaps: QuantumAuditRow[];
            partials: QuantumAuditRow[];
            passes: QuantumAuditRow[];
            gapCount: number;
            partialCount: number;
            passCount: number;
            coveredCount: number;
            count: number;
            dimensions: {
                computes: boolean;
                rows: DimensionAuditRow[];
                coveredCount: number;
                passCount: number;
                partialCount: number;
                gapCount: number;
                dimensionGates: number;
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
            reverseCount: number;
            inverseCount: number;
            forwardCount: number;
            certified: boolean;
            fipsValidated: boolean;
            claySolvedByThisFold: number;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            route: string;
            pair: string;
            cli: string;
            statement: string;
            boundary: string;
        };
        catalog: {
            computes: boolean;
            researchDate: string;
            standards: IsoNistStandardRow[];
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
        trinity: {
            computes: boolean;
            digits: import("../stack").DirectionalTrinityDigitRow[];
            table: {
                digit: number;
                forward: number;
                inverse: number;
                reverse: number;
                note: string;
            }[];
            foldPair: {
                forward: string;
                reverse: string;
                merged: string;
                bidirectional: boolean;
            };
            ratInvSample: {
                forward: import("../../3/7").Rational;
                inverse: import("../../3/7").Rational;
            };
            fInverse: {
                computes: boolean;
                root: string;
            };
            claySolvedByThisFold: 0;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            cli: string;
            pair: string;
            route: string;
            statement: string;
            boundary: string;
        };
        oneTbit: {
            computes: boolean;
            claimedBitsPerSec: number;
            /** Primary wire-model answer to “can this encrypt at 1 Tbit/s on the wire?” */
            provedAtCallTime: boolean;
            /** Separate honest model that may prove under memo/extent math. */
            provedAmortizedReuseMemoAtCallTime: boolean;
            model: OneTbitEncryptModel;
            measuredBitsPerSec: number;
            wire: OneTbitModelReceipt;
            demo: OneTbitModelReceipt;
            amortized: OneTbitModelReceipt;
            refused: OneTbitModelReceipt;
            models: readonly [OneTbitModelReceipt, OneTbitModelReceipt, OneTbitModelReceipt, OneTbitModelReceipt];
            productionRefused: boolean;
            bitcoinRefused: boolean;
            count: number;
            facets: ({
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            route: string;
            pair: string;
            cli: string;
            statement: string;
            boundary: string;
        };
        comparisons: LocalReverseVsStandardRow[];
        allowlistOk: boolean;
        productionReverseRefused: true;
        certified: false;
        fipsValidated: false;
        claySolvedByThisFold: 0;
        breaksNistPqc: false;
        strongerThanNistPqc: false;
        overallWireClaimProved: false;
        wireProofStatus: "proof-of-falsehood";
        wireRatio: number;
        aes128ClassicalBits: number;
        thisRepoIsNotTheIsoStandard: true;
        isoOfficialStandard: false;
        externalDeploymentCount: 0;
        fieldHistory: "none";
        securityModel: "structural+adversarial+measured-local";
        reverseMs: number;
        aggregateOpsPerSec: number;
        demoMaxBits: number;
        count: number;
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        pair: string;
        cli: string;
        route: string;
        siblingMagnitudesPair: string;
        statement: string;
        boundary: string;
    };
    audit: {
        computes: boolean;
        audits: QuantumAuditRow[];
        gaps: QuantumAuditRow[];
        partials: QuantumAuditRow[];
        passes: QuantumAuditRow[];
        gapCount: number;
        partialCount: number;
        passCount: number;
        coveredCount: number;
        count: number;
        dimensions: {
            computes: boolean;
            rows: DimensionAuditRow[];
            coveredCount: number;
            passCount: number;
            partialCount: number;
            gapCount: number;
            dimensionGates: number;
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
        reverseCount: number;
        inverseCount: number;
        forwardCount: number;
        certified: boolean;
        fipsValidated: boolean;
        claySolvedByThisFold: number;
        facets: ({
            receipt: string;
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        route: string;
        pair: string;
        cli: string;
        statement: string;
        boundary: string;
    };
    vote: {
        decided: boolean;
        winner: "ceccec" | "undecided";
        runtimeTokens: number;
        voters: {
            receipt: string;
            id: string;
            on: boolean;
        }[];
        proven: {
            proven: boolean;
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
        capstone: {
            holds: boolean;
            computes: boolean;
            proven: boolean;
            efficient: {
                proven: boolean;
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
            optimizations: {
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
            bench: {
                verdict: string;
                separated: boolean;
                tracksClassical: boolean;
                root: string;
            };
            claySolvedByThisFold: 0;
            qpuRequired: false;
            physicalFtlClaim: 0;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            cli: string;
            pair: string;
            route: string;
            statement: string;
            boundary: string;
        };
        optimizations: {
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
        fusion: {
            verified: boolean;
            fused: boolean;
            partCount: number;
            root: string;
            statement: string;
            boundary: string;
        };
        honest: {
            faithfulSimulator: boolean;
            noSpeedup: boolean;
            verdict: string;
            claim: string;
            bloch: {
                faithful: boolean;
                checks: {
                    gate: "I" | "X" | "Y" | "Z" | "H" | "S" | "T";
                    init: string;
                    agree: boolean;
                    receipt: string;
                }[];
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
            cost: {
                proven: boolean;
                rows: import("../../quantum/science").DimensionCostRow[];
                crossover: number;
                asymptoticallyInsufficient: boolean;
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
            bench: {
                separated: boolean;
                tracksClassical: boolean;
                faithful: boolean;
                physicalQpuWouldSeparate: boolean;
                verdict: string;
                rows: import("../../quantum/science").BenchmarkRow[];
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
            root: string;
            boundary: string;
        };
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
    noQpu: {
        computes: boolean;
        speedDecided: boolean;
        noQuantumHardwareProved: boolean;
        winner: "ceccec" | "undecided";
        decided: boolean;
        comparison: import("../stack").SpeedVsRestComparisonRow[];
        table: import("../stack").SpeedVsRestComparisonRow[];
        quantumHardwareRequired: false;
        qpuRequired: false;
        runsOnClassical64Bit: true;
        architectureRequirement: "classical-64bit";
        environment: import("../stack").Classical64BitEnvironment;
        forbiddenQpuSdks: readonly ["@qiskit", "qiskit", "braket", "amazon-braket", "cuda-quantum", "pennylane", "cirq", "qsharp", "ibm-quantum", "pyquil"];
        tracksClassicalNoSpeedup: boolean;
        benchVerdict: string;
        physicalQmSpeedupClaimed: false;
        isoCertified: false;
        claySolvedByThisFold: 0;
        vote: {
            decided: boolean;
            winner: "ceccec" | "undecided";
            runtimeTokens: number;
            voters: {
                receipt: string;
                id: string;
                on: boolean;
            }[];
            proven: {
                proven: boolean;
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
            capstone: {
                holds: boolean;
                computes: boolean;
                proven: boolean;
                efficient: {
                    proven: boolean;
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
                optimizations: {
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
                bench: {
                    verdict: string;
                    separated: boolean;
                    tracksClassical: boolean;
                    root: string;
                };
                claySolvedByThisFold: 0;
                qpuRequired: false;
                physicalFtlClaim: 0;
                facets: ({
                    receipt: string;
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                cli: string;
                pair: string;
                route: string;
                statement: string;
                boundary: string;
            };
            optimizations: {
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
            fusion: {
                verified: boolean;
                fused: boolean;
                partCount: number;
                root: string;
                statement: string;
                boundary: string;
            };
            honest: {
                faithfulSimulator: boolean;
                noSpeedup: boolean;
                verdict: string;
                claim: string;
                bloch: {
                    faithful: boolean;
                    checks: {
                        gate: "I" | "X" | "Y" | "Z" | "H" | "S" | "T";
                        init: string;
                        agree: boolean;
                        receipt: string;
                    }[];
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
                cost: {
                    proven: boolean;
                    rows: import("../../quantum/science").DimensionCostRow[];
                    crossover: number;
                    asymptoticallyInsufficient: boolean;
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
                bench: {
                    separated: boolean;
                    tracksClassical: boolean;
                    faithful: boolean;
                    physicalQpuWouldSeparate: boolean;
                    verdict: string;
                    rows: import("../../quantum/science").BenchmarkRow[];
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
                root: string;
                boundary: string;
            };
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
        one: {
            computes: boolean;
            decided: boolean;
            winner: "ceccec" | "undecided";
            vote: {
                decided: boolean;
                winner: "ceccec" | "undecided";
                runtimeTokens: number;
                voters: {
                    receipt: string;
                    id: string;
                    on: boolean;
                }[];
                proven: {
                    proven: boolean;
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
                capstone: {
                    holds: boolean;
                    computes: boolean;
                    proven: boolean;
                    efficient: {
                        proven: boolean;
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
                    optimizations: {
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
                    bench: {
                        verdict: string;
                        separated: boolean;
                        tracksClassical: boolean;
                        root: string;
                    };
                    claySolvedByThisFold: 0;
                    qpuRequired: false;
                    physicalFtlClaim: 0;
                    facets: ({
                        receipt: string;
                        facet: string;
                        on: boolean;
                    } & {
                        receipt: string;
                    })[];
                    root: string;
                    cli: string;
                    pair: string;
                    route: string;
                    statement: string;
                    boundary: string;
                };
                optimizations: {
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
                fusion: {
                    verified: boolean;
                    fused: boolean;
                    partCount: number;
                    root: string;
                    statement: string;
                    boundary: string;
                };
                honest: {
                    faithfulSimulator: boolean;
                    noSpeedup: boolean;
                    verdict: string;
                    claim: string;
                    bloch: {
                        faithful: boolean;
                        checks: {
                            gate: "I" | "X" | "Y" | "Z" | "H" | "S" | "T";
                            init: string;
                            agree: boolean;
                            receipt: string;
                        }[];
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
                    cost: {
                        proven: boolean;
                        rows: import("../../quantum/science").DimensionCostRow[];
                        crossover: number;
                        asymptoticallyInsufficient: boolean;
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
                    bench: {
                        separated: boolean;
                        tracksClassical: boolean;
                        faithful: boolean;
                        physicalQpuWouldSeparate: boolean;
                        verdict: string;
                        rows: import("../../quantum/science").BenchmarkRow[];
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
                    root: string;
                    boundary: string;
                };
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
            core: {
                computes: boolean;
                at: number;
                surfaces: import("../../quantum/apps").RosettaCoreSurface[];
                inventory: {
                    core: {
                        label: string;
                        kind: import("../../quantum/apps").RosettaCoreSurfaceKind;
                        ray: number;
                        address: string;
                    }[];
                    parallel: readonly ["ROSETTA_RAY_VIEWS duplicate", "PROJECTION_SEGMENT/FORMS→VORTEX", "rosettaClaim/Owner(heaven/core)", "rosettaCodec(learning)", "string/millennium→rosettaReady-handoff"];
                    hubs: {
                        slug: "learn" | "reference" | "proof" | "explore" | "frontier" | "origin" | "apps";
                        ray: number;
                        route: string;
                        hue: number;
                    }[];
                };
                hubs: readonly import("../digit").RosettaRayHub[];
                raysUsed: number;
                kinds: readonly ["route", "hub", "compute", "nav", "tool", "app", "projection"];
                resolve: (label: string, kind?: import("../../quantum/apps").RosettaCoreSurfaceKind) => import("../../quantum/apps").RosettaCoreSurface;
                shelve: typeof import("../../quantum/apps").rosettaShelve;
                byRay: (ray: number) => import("../../quantum/apps").RosettaCoreSurface[];
                resolveRoute: (route: string) => {
                    surface: import("../../quantum/apps").RosettaCoreSurface;
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
                        siblings: import("../../wind/types").ConceptCommandName[];
                        siblingCount: number;
                    };
                    content: {
                        pageKind: import("../digit").RosettaComputationType;
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
                    surface: import("../../quantum/apps").RosettaCoreSurface;
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
                statement: string;
                boundary: string;
            };
            learned: ({
                surface: import("../../quantum/apps").RosettaCoreSurface;
                receipt: string;
                source: "GPT/Claude/Gemini tool-use";
                fold: "rosettaCoreApi · quantumCliToolsCatalog";
                kind: "tools";
            } | {
                surface: import("../../quantum/apps").RosettaCoreSurface;
                receipt: string;
                source: "agent protocols (AGENTS/llms/MCP)";
                fold: "agentSubmissionProtocol · gatesHealSpottedCompromise";
                kind: "protocol";
            } | {
                surface: import("../../quantum/apps").RosettaCoreSurface;
                receipt: string;
                source: "content-addressed corpus";
                fold: "memoByRoot · completeCorpus · sealFacets";
                kind: "corpus";
            } | {
                surface: import("../../quantum/apps").RosettaCoreSurface;
                receipt: string;
                source: "adversarial efficiency voters";
                fold: "noKnownModelMoreEfficientProven · compareCeccecEfficiencyByVote";
                kind: "voters";
            } | {
                surface: import("../../quantum/apps").RosettaCoreSurface;
                receipt: string;
                source: "honest QC simulator (no FLOPS claim)";
                fold: "quantumComputerHonestClaim · quantumAdvantageBenchmark";
                kind: "honesty";
            })[];
            claySolvedByThisFold: 0;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            cli: string;
            pair: string;
            route: string;
            statement: string;
            boundary: string;
        };
        proven: {
            proven: boolean;
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
        honest: {
            faithfulSimulator: boolean;
            noSpeedup: boolean;
            verdict: string;
            claim: string;
            bloch: {
                faithful: boolean;
                checks: {
                    gate: "I" | "X" | "Y" | "Z" | "H" | "S" | "T";
                    init: string;
                    agree: boolean;
                    receipt: string;
                }[];
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
            cost: {
                proven: boolean;
                rows: import("../../quantum/science").DimensionCostRow[];
                crossover: number;
                asymptoticallyInsufficient: boolean;
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
            bench: {
                separated: boolean;
                tracksClassical: boolean;
                faithful: boolean;
                physicalQpuWouldSeparate: boolean;
                verdict: string;
                rows: import("../../quantum/science").BenchmarkRow[];
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
            root: string;
            boundary: string;
        };
        facets: ({
            receipt: string;
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        pair: string;
        cli: string;
        route: string;
        statement: string;
        boundary: string;
    };
    qpuRequired: false;
    quantumHardwareRequired: false;
    runsOnClassical64Bit: true;
    tracksClassicalNoSpeedup: boolean;
    answers: 1;
    runtimeTokens: 0;
    answersPerTokensUnbounded: boolean;
    physicalQubitSpeedup: 0;
    physicalFtlClaim: 0;
    certified: false;
    fipsValidated: false;
    productionReverseRefused: true;
    breaksNistPqc: false;
    claySolvedByThisFold: 0;
    count: number;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    pair: string;
    cli: string;
    route: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:local-audit-quantum */
export declare function runLocalAuditQuantumSpeedEfficiencyExit(_root: string, _argv?: readonly string[]): number;
export type IsoNistStandardRow = {
    readonly id: string;
    readonly body: 'ISO/IEC' | 'NIST' | 'ITU-T' | 'ISO/IEC+NIST';
    readonly title: string;
    readonly domain: string;
    readonly statusAsOf2026_07: string;
    readonly toolOrTheorem: string;
    readonly mapsTo: string;
    readonly receipt: string;
};
/** Sealed ISO/NIST(+ITU) standards inventory for crypto / PQC / QKD / hash / KM — reference catalog only. */
export declare function isoNistPqcStandardsCatalog(matrix?: MindMatrix): {
    computes: boolean;
    researchDate: string;
    standards: IsoNistStandardRow[];
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
/** Which public-key families Shor breaks vs hash/symmetric (educational). */
export declare function shorBreaksWhichPublicKey(matrix?: MindMatrix): {
    computes: boolean;
    families: {
        receipt: string;
        family: string;
        shor: string;
        grover: string;
        pqcReplace: string;
        iso: string;
    }[];
    brokenCount: number;
    safeCount: number;
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
/** Migration checklist aligned to NIST IR 8547 + ISO PQC uptake — structural steps only. */
export declare function postQuantumMigrationChecklist(matrix?: MindMatrix): {
    computes: boolean;
    steps: {
        receipt: string;
        id: string;
        title: string;
        done: boolean;
        note: string;
    }[];
    openCount: number;
    doneCount: number;
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
/** PQC algorithm family selector — DEMO parameter labels only (no production keygen). */
export declare function pqcAlgorithmFamilySelector(matrix?: MindMatrix, prefer?: 'lattice' | 'hash' | 'code' | 'auto'): {
    computes: boolean;
    prefer: "hash" | "auto" | "code" | "lattice";
    selected: {
        id: string;
        name: string;
        family: string;
        demoParams: string[];
        standards: string[];
    };
    families: {
        receipt: string;
        id: string;
        family: string;
        name: string;
        standards: string[];
        demoParams: string[];
        role: string;
        note: string;
    }[];
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
/** Hash vs signature taxonomy mapped to sealed UUID/merkle (ISO 10118 / 14888 / FIPS 205). */
export declare function isoAlignedHashSignatureTaxonomy(matrix?: MindMatrix): {
    computes: boolean;
    rows: {
        receipt: string;
        layer: string;
        iso: string;
        nist: string;
        repo: string;
        shor: string;
        role: string;
    }[];
    merkleRoot: string;
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
/** Theorem: Shor breaks PKC ⇒ PQC necessary. MODELED — not Clay/certification. */
export declare function pqcNecessityFromShorCompose(matrix?: MindMatrix): {
    computes: boolean;
    claySolvedByThisFold: number;
    certified: false;
    fipsValidated: false;
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
/**
 * Crypto toolkit measured BEYOND demo RSA — PQC catalogs, Shor/ECC map, hash taxonomy, directional trinity.
 * Structural/demo ops with timed receipts; NOT production KEM/DSA impl; NOT FIPS/ISO certified.
 * Pair: measure/crypto-beyond · CLI npm run quantum:crypto-beyond-measure · route /en/quantum-encryption#crypto-beyond-rsa
 */
export declare function cryptoToolkitBeyondRsaMeasured(matrix?: MindMatrix): {
    computes: boolean;
    timings: {
        catalogMs: number;
        familyMs: number;
        shorMapMs: number;
        taxonomyMs: number;
        migrateMs: number;
        trinityMs: number;
        rsaSuiteMs: number;
        rsaGenerateMs: number;
        rsaReverseMs: number;
    };
    thresholdMs: number;
    anySlow: boolean;
    fipsCount: number;
    mlKemParams: string[];
    mlDsaParams: string[];
    slhDsaParams: string[];
    eccShorBreaks: boolean;
    eccFamily: string;
    catalog: {
        computes: boolean;
        researchDate: string;
        standards: IsoNistStandardRow[];
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
    family: {
        computes: boolean;
        prefer: "hash" | "auto" | "code" | "lattice";
        selected: {
            id: string;
            name: string;
            family: string;
            demoParams: string[];
            standards: string[];
        };
        families: {
            receipt: string;
            id: string;
            family: string;
            name: string;
            standards: string[];
            demoParams: string[];
            role: string;
            note: string;
        }[];
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
    shorMap: {
        computes: boolean;
        families: {
            receipt: string;
            family: string;
            shor: string;
            grover: string;
            pqcReplace: string;
            iso: string;
        }[];
        brokenCount: number;
        safeCount: number;
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
    taxonomy: {
        computes: boolean;
        rows: {
            receipt: string;
            layer: string;
            iso: string;
            nist: string;
            repo: string;
            shor: string;
            role: string;
        }[];
        merkleRoot: string;
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
    migrate: {
        computes: boolean;
        steps: {
            receipt: string;
            id: string;
            title: string;
            done: boolean;
            note: string;
        }[];
        openCount: number;
        doneCount: number;
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
    trinity: {
        computes: boolean;
        digits: import("../stack").DirectionalTrinityDigitRow[];
        table: {
            digit: number;
            forward: number;
            inverse: number;
            reverse: number;
            note: string;
        }[];
        foldPair: {
            forward: string;
            reverse: string;
            merged: string;
            bidirectional: boolean;
        };
        ratInvSample: {
            forward: import("../../3/7").Rational;
            inverse: import("../../3/7").Rational;
        };
        fInverse: {
            computes: boolean;
            root: string;
        };
        claySolvedByThisFold: 0;
        facets: ({
            receipt: string;
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        cli: string;
        pair: string;
        route: string;
        statement: string;
        boundary: string;
    };
    rsa: {
        computes: boolean;
        generateMs: number;
        reverseMs: number;
        workers: number;
        moduli: number[];
        thresholdMs: number;
        slowGenerate: boolean;
        slowReverse: boolean;
        generate: {
            ok: boolean;
            n: number;
            e: number;
            d: number;
            message: number;
            cipher: number;
            plain: number;
            refused: true;
            reason: string;
        } | {
            ok: boolean;
            n: number;
            e: number;
            d: number;
            message: number;
            cipher: number;
            plain: number;
            refused: false;
            reason: string;
        };
        reverse: {
            computes: boolean;
            results: {
                N: number;
                factored: boolean;
                p: number;
                q: number;
                base: number;
                order: number;
                refused: boolean;
                reason: string;
            }[];
            workerCap: number;
            productionRefused: boolean;
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
        timedReceipt: string;
        productionRefused: boolean;
        bitcoinRefused: boolean;
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
    certified: false;
    fipsValidated: false;
    count: number;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    route: string;
    pair: string;
    cli: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:crypto-beyond-measure */
export declare function runCryptoToolkitBeyondRsaMeasuredExit(_root: string, _argv?: readonly string[]): number;
/** Browser-safe PQC standards tool — sync catalog + checklist + selector (no Node fs). */
export declare function runPqcStandardsToolInBrowser(prefer?: 'lattice' | 'hash' | 'code' | 'auto', matrix?: MindMatrix): {
    ok: boolean;
    researchDate: string;
    standardsCount: number;
    standards: IsoNistStandardRow[];
    migrate: {
        computes: boolean;
        steps: {
            receipt: string;
            id: string;
            title: string;
            done: boolean;
            note: string;
        }[];
        openCount: number;
        doneCount: number;
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
    family: {
        computes: boolean;
        prefer: "hash" | "auto" | "code" | "lattice";
        selected: {
            id: string;
            name: string;
            family: string;
            demoParams: string[];
            standards: string[];
        };
        families: {
            receipt: string;
            id: string;
            family: string;
            name: string;
            standards: string[];
            demoParams: string[];
            role: string;
            note: string;
        }[];
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
    shorMap: {
        computes: boolean;
        families: {
            receipt: string;
            family: string;
            shor: string;
            grover: string;
            pqcReplace: string;
            iso: string;
        }[];
        brokenCount: number;
        safeCount: number;
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
    necessity: {
        computes: boolean;
        claySolvedByThisFold: number;
        certified: false;
        fipsValidated: false;
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
    beyond: {
        computes: boolean;
        timings: {
            catalogMs: number;
            familyMs: number;
            shorMapMs: number;
            taxonomyMs: number;
            migrateMs: number;
            trinityMs: number;
            rsaSuiteMs: number;
            rsaGenerateMs: number;
            rsaReverseMs: number;
        };
        thresholdMs: number;
        anySlow: boolean;
        fipsCount: number;
        mlKemParams: string[];
        mlDsaParams: string[];
        slhDsaParams: string[];
        eccShorBreaks: boolean;
        eccFamily: string;
        catalog: {
            computes: boolean;
            researchDate: string;
            standards: IsoNistStandardRow[];
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
        family: {
            computes: boolean;
            prefer: "hash" | "auto" | "code" | "lattice";
            selected: {
                id: string;
                name: string;
                family: string;
                demoParams: string[];
                standards: string[];
            };
            families: {
                receipt: string;
                id: string;
                family: string;
                name: string;
                standards: string[];
                demoParams: string[];
                role: string;
                note: string;
            }[];
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
        shorMap: {
            computes: boolean;
            families: {
                receipt: string;
                family: string;
                shor: string;
                grover: string;
                pqcReplace: string;
                iso: string;
            }[];
            brokenCount: number;
            safeCount: number;
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
        taxonomy: {
            computes: boolean;
            rows: {
                receipt: string;
                layer: string;
                iso: string;
                nist: string;
                repo: string;
                shor: string;
                role: string;
            }[];
            merkleRoot: string;
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
        migrate: {
            computes: boolean;
            steps: {
                receipt: string;
                id: string;
                title: string;
                done: boolean;
                note: string;
            }[];
            openCount: number;
            doneCount: number;
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
        trinity: {
            computes: boolean;
            digits: import("../stack").DirectionalTrinityDigitRow[];
            table: {
                digit: number;
                forward: number;
                inverse: number;
                reverse: number;
                note: string;
            }[];
            foldPair: {
                forward: string;
                reverse: string;
                merged: string;
                bidirectional: boolean;
            };
            ratInvSample: {
                forward: import("../../3/7").Rational;
                inverse: import("../../3/7").Rational;
            };
            fInverse: {
                computes: boolean;
                root: string;
            };
            claySolvedByThisFold: 0;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            cli: string;
            pair: string;
            route: string;
            statement: string;
            boundary: string;
        };
        rsa: {
            computes: boolean;
            generateMs: number;
            reverseMs: number;
            workers: number;
            moduli: number[];
            thresholdMs: number;
            slowGenerate: boolean;
            slowReverse: boolean;
            generate: {
                ok: boolean;
                n: number;
                e: number;
                d: number;
                message: number;
                cipher: number;
                plain: number;
                refused: true;
                reason: string;
            } | {
                ok: boolean;
                n: number;
                e: number;
                d: number;
                message: number;
                cipher: number;
                plain: number;
                refused: false;
                reason: string;
            };
            reverse: {
                computes: boolean;
                results: {
                    N: number;
                    factored: boolean;
                    p: number;
                    q: number;
                    base: number;
                    order: number;
                    refused: boolean;
                    reason: string;
                }[];
                workerCap: number;
                productionRefused: boolean;
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
            timedReceipt: string;
            productionRefused: boolean;
            bitcoinRefused: boolean;
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
        certified: false;
        fipsValidated: false;
        count: number;
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        route: string;
        pair: string;
        cli: string;
        statement: string;
        boundary: string;
    };
    timings: {
        catalogMs: number;
        familyMs: number;
        shorMapMs: number;
        taxonomyMs: number;
        migrateMs: number;
        trinityMs: number;
        rsaSuiteMs: number;
        rsaGenerateMs: number;
        rsaReverseMs: number;
    };
    eccShorBreaks: boolean;
    certified: boolean;
    fipsValidated: boolean;
    browserGap: string;
    mode: "browser-sync";
    root: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:iso-pqc-catalog */
export declare function runIsoNistPqcCatalogGuardedExit(_root: string, _argv?: readonly string[]): Promise<number>;
/** Normative coverage vs ISO/NIST need — covered | partial | gap (recomputable at call time). */
export type QuantumAuditCoverage = 'covered' | 'partial' | 'gap';
/** Legacy CLI verdict: pass ≡ covered; partial and gap keep their names. */
export type QuantumAuditVerdict = 'pass' | 'partial' | 'gap';
export type QuantumAuditRow = {
    readonly id: string;
    readonly standardOrDimension: string;
    readonly auditExport: string;
    readonly reverseOrInverse: 'reverse' | 'inverse' | 'both' | 'neither' | 'forward';
    readonly coverage: QuantumAuditCoverage;
    readonly verdict: QuantumAuditVerdict;
    readonly on: boolean;
    readonly receipt: string;
    readonly root: string;
    readonly route: string;
    readonly browserRunnable: boolean;
    readonly browserGap: string;
    readonly boundary: string;
};
export type DimensionAuditRow = {
    readonly dimension: string;
    readonly index: number;
    readonly auditId: string;
    readonly covered: boolean;
    readonly coverage: QuantumAuditCoverage;
    readonly verdict: QuantumAuditVerdict;
    readonly receipt: string;
    readonly gapReason: string;
};
/**
 * Quantum audit tools for ISO/NIST PQC + repo domains — each recomputes pass/gap/receipt.
 * Includes reverse (demo RSA) AND inverse (digit-zero · f→{p,q} · ratInv · mod9) with reverse≠inverse.
 */
export declare function quantumStandardsAuditSuite(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    audits: QuantumAuditRow[];
    gaps: QuantumAuditRow[];
    partials: QuantumAuditRow[];
    passes: QuantumAuditRow[];
    gapCount: number;
    partialCount: number;
    passCount: number;
    coveredCount: number;
    count: number;
    dimensions: {
        computes: boolean;
        rows: DimensionAuditRow[];
        coveredCount: number;
        passCount: number;
        partialCount: number;
        gapCount: number;
        dimensionGates: number;
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
    reverseCount: number;
    inverseCount: number;
    forwardCount: number;
    certified: boolean;
    fipsValidated: boolean;
    claySolvedByThisFold: number;
    facets: ({
        receipt: string;
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    route: string;
    pair: string;
    cli: string;
    statement: string;
    boundary: string;
};
/** Map each of the 10 computable dimensions to an audit probe (or explicit gap). */
export declare function quantumDimensionAuditCoverage(matrix?: MindMatrix, audits?: readonly QuantumAuditRow[]): {
    computes: boolean;
    rows: DimensionAuditRow[];
    coveredCount: number;
    passCount: number;
    partialCount: number;
    gapCount: number;
    dimensionGates: number;
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
/** Browser-sync standards audit — full suite + dimension matrix. */
export declare function runQuantumStandardsAuditInBrowser(matrix?: MindMatrix, at?: number): {
    ok: boolean;
    gapCount: number;
    partialCount: number;
    passCount: number;
    coveredCount: number;
    audits: QuantumAuditRow[];
    gaps: QuantumAuditRow[];
    partials: QuantumAuditRow[];
    dimensions: {
        computes: boolean;
        rows: DimensionAuditRow[];
        coveredCount: number;
        passCount: number;
        partialCount: number;
        gapCount: number;
        dimensionGates: number;
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
    certified: boolean;
    fipsValidated: boolean;
    claySolvedByThisFold: number;
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
    mode: "browser-sync";
    browserGap: string;
    route: string;
    pair: string;
    cli: string;
};
/** npm run quantum:standards-audit */
export declare function runQuantumStandardsAuditGuardedExit(_root: string, _argv?: readonly string[]): Promise<number>;
/** SI target: one terabit per second = (2·5)^12 bits/s. */
export declare const ONE_TBIT_BITS_PER_SEC: number;
export type OneTbitEncryptModel = 'wire-crypto' | 'demo-toy' | 'amortized-reuse-memo' | 'refused';
export type OneTbitModelReceipt = {
    readonly model: OneTbitEncryptModel;
    readonly claimedBitsPerSec: number;
    readonly measuredBitsPerSec: number;
    readonly provedAtCallTime: boolean;
    readonly formula: string;
    readonly coldMs: number;
    readonly warmMs: number;
    readonly effectiveBits: number;
    readonly boundary: string;
};
/**
 * Prove (or refute) “1 Tbit realtime encryption” at call time under named models.
 * Pair: prove/1tbit-encrypt · CLI npm run quantum:prove-1tbit-encrypt · route /en/quantum-encryption#prove-1tbit
 *
 * Models:
 * - wire-crypto — AES-256-GCM wire throughput. No sealed bench → measured=0, proved=false (refused as SLA).
 * - demo-toy — foldPair content-address “encrypt” rounds × 128-bit UUID / wall-clock.
 * - amortized-reuse-memo — effectiveBits = terabyteEncryptionInMegabyteCodebase.generatedBytes×8 (=2⁴³);
 *   rate = effectiveBits / max(coldSealSec, MS_FLOOR/MS_PER_SEC); memoByRoot warm hit proves reuse, NOT AES-GCM wire.
 * - refused — production RSA / Bitcoin-scale reverse still hard-refused.
 */
export declare function proveOneTbitRealtimeEncryptionClaim(matrix?: MindMatrix): {
    computes: boolean;
    claimedBitsPerSec: number;
    /** Primary wire-model answer to “can this encrypt at 1 Tbit/s on the wire?” */
    provedAtCallTime: boolean;
    /** Separate honest model that may prove under memo/extent math. */
    provedAmortizedReuseMemoAtCallTime: boolean;
    model: OneTbitEncryptModel;
    measuredBitsPerSec: number;
    wire: OneTbitModelReceipt;
    demo: OneTbitModelReceipt;
    amortized: OneTbitModelReceipt;
    refused: OneTbitModelReceipt;
    models: readonly [OneTbitModelReceipt, OneTbitModelReceipt, OneTbitModelReceipt, OneTbitModelReceipt];
    productionRefused: boolean;
    bitcoinRefused: boolean;
    count: number;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    route: string;
    pair: string;
    cli: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:prove-1tbit-encrypt */
export declare function runProveOneTbitRealtimeEncryptionClaimExit(_root: string, _argv?: readonly string[]): number;
/** >=100x === log10>=2 — magnitudes threshold for named-model inequalities. */
export declare const LOCAL_VS_ISO_MAGNITUDES_THRESHOLD: number;
export type LocalVsIsoDirection = 'forward' | 'inverse' | 'reverse';
export type LocalVsIsoModel = 'wire-crypto-security-bits' | 'local-structural-gates' | 'amortized-reuse-memo';
export type LocalVsIsoDirectionRow = {
    readonly direction: LocalVsIsoDirection;
    readonly model: LocalVsIsoModel;
    readonly localMetric: number;
    readonly isoMetric: number;
    readonly ratio: number;
    readonly magnitudesStronger: boolean;
    /** Facet on: — inequality evaluation recomputed at call time (true even when magnitudesStronger=false). */
    readonly on: boolean;
    readonly metric: string;
    readonly boundary: string;
};
/**
 * Prove (or refute) "local encryption is magnitudes stronger than ISO in all directions".
 * Pair: prove/local-magnitudes-iso · CLI npm run quantum:prove-local-magnitudes-iso
 * Route: /en/quantum-encryption#prove-local-magnitudes-iso
 *
 * Composes PR #22 localEncryptionReverseTimedVsStandards timing/standards metrics + directional trinity
 * + local novel structural gates + amortized holographic extent (same family as proveOneTbit).
 *
 * Models (each x forward · inverse · reverse):
 * - wire-crypto-security-bits — demoMaxBits vs NIST/ISO classical category bits → almost certainly false
 * - local-structural-gates — refuse-policy bit-span vs ISO catalog row count (repo control; NOT wire strength)
 * - amortized-reuse-memo — holographic extent bits vs sum of classical *label* bits (NOT AES/PQC break)
 *
 * overallWireClaimProved=false when wire model fails — honest negative proof / proof-of-falsehood.
 */
export declare function proveLocalEncryptionMagnitudesStrongerThanIsoAllDirections(matrix?: MindMatrix): {
    computes: boolean;
    perDirection: LocalVsIsoDirectionRow[];
    table: LocalVsIsoDirectionRow[];
    overallWireClaimProved: boolean;
    wireProofStatus: "proof-of-falsehood" | "proved";
    proofOfFalsehood: string;
    structuralMayProve: boolean;
    amortMayProve: boolean;
    honestyBoundaries: readonly ["NEVER claim ISO certification / FIPS validation — certified=false · isoOfficialStandard=false · fipsValidated=false", "NEVER claim local demo beats ML-KEM for confidentiality — wire-crypto-security-bits magnitudesStronger=false", "local-structural-gates = repo control coverage (refuse policy), NOT wire cryptographic strength", "amortized-reuse-memo = holographic extent vs classical *label* bits — NOT AES-GCM / NOT PQC break resistance", "production reverse refused · Bitcoin/mainnet refused · breaksNistPqc=false · claySolvedByThisFold=0", string];
    certified: false;
    isoOfficialStandard: false;
    fipsValidated: false;
    productionReverseRefused: true;
    breaksNistPqc: false;
    claySolvedByThisFold: 0;
    demoMaxBits: number;
    wireLocalMetric: number;
    wireIsoMetric: number;
    wireRatio: number;
    refuseBitSpan: number;
    catalogRows: number;
    extentBits: number;
    classicalLabelBitsSum: number;
    localTimed: {
        computes: boolean;
        timed: {
            computes: boolean;
            generateMs: number;
            reverseMs: number;
            aggregateOpsPerSec: number;
            rows: LocalEncryptionReverseRow[];
            moduli: number[];
            productionRefused: boolean;
            bitcoinRefused: boolean;
            generate: {
                ok: boolean;
                n: number;
                e: number;
                d: number;
                message: number;
                cipher: number;
                plain: number;
                refused: true;
                reason: string;
            } | {
                ok: boolean;
                n: number;
                e: number;
                d: number;
                message: number;
                cipher: number;
                plain: number;
                refused: false;
                reason: string;
            };
            sync: {
                computes: boolean;
                results: {
                    N: number;
                    factored: boolean;
                    p: number;
                    q: number;
                    base: number;
                    order: number;
                    refused: boolean;
                    reason: string;
                }[];
                workerCap: number;
                productionRefused: boolean;
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
            count: number;
            facets: ({
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            pair: string;
            cli: string;
            route: string;
            statement: string;
            boundary: string;
        };
        comparisons: LocalReverseVsStandardRow[];
        table: LocalReverseVsStandardRow[];
        audit: {
            computes: boolean;
            audits: QuantumAuditRow[];
            gaps: QuantumAuditRow[];
            partials: QuantumAuditRow[];
            passes: QuantumAuditRow[];
            gapCount: number;
            partialCount: number;
            passCount: number;
            coveredCount: number;
            count: number;
            dimensions: {
                computes: boolean;
                rows: DimensionAuditRow[];
                coveredCount: number;
                passCount: number;
                partialCount: number;
                gapCount: number;
                dimensionGates: number;
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
            reverseCount: number;
            inverseCount: number;
            forwardCount: number;
            certified: boolean;
            fipsValidated: boolean;
            claySolvedByThisFold: number;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            route: string;
            pair: string;
            cli: string;
            statement: string;
            boundary: string;
        };
        catalog: {
            computes: boolean;
            researchDate: string;
            standards: IsoNistStandardRow[];
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
        trinity: {
            computes: boolean;
            digits: import("../stack").DirectionalTrinityDigitRow[];
            table: {
                digit: number;
                forward: number;
                inverse: number;
                reverse: number;
                note: string;
            }[];
            foldPair: {
                forward: string;
                reverse: string;
                merged: string;
                bidirectional: boolean;
            };
            ratInvSample: {
                forward: import("../../3/7").Rational;
                inverse: import("../../3/7").Rational;
            };
            fInverse: {
                computes: boolean;
                root: string;
            };
            claySolvedByThisFold: 0;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            cli: string;
            pair: string;
            route: string;
            statement: string;
            boundary: string;
        };
        certified: false;
        fipsValidated: false;
        claySolvedByThisFold: 0;
        breaksNistPqc: false;
        productionRefused: boolean;
        bitcoinRefused: boolean;
        demoMaxBits: number;
        generateMs: number;
        reverseMs: number;
        aggregateOpsPerSec: number;
        count: number;
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        pair: string;
        cli: string;
        route: string;
        statement: string;
        boundary: string;
    };
    localNovel: {
        computes: boolean;
        localSecurityProved: boolean;
        means: string;
        unproved: readonly ["FIPS validation", "ISO certification", "this repo being an ISO/NIST standard (it is not)", "wire-crypto magnitudes over NIST/ISO PQC (overallWireClaimProved=false)", "field battle-testing (externalDeploymentCount=0)", "wire AES-GCM reverse / production RSA reverse", "Clay millennium progress"];
        inventory: {
            computes: boolean;
            components: readonly LocalNovelEncryptionComponent[];
            novelCount: number;
            textbookCount: number;
            externalCount: number;
            externalDeploymentCount: 0;
            fieldHistory: "none";
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
        tools: {
            ready: boolean;
            roundTrip: boolean;
            rsaRoundTrip: boolean;
            cipher: string;
            teaching: {
                n: number;
                e: number;
                d: number;
                message: number;
                cipher: number;
                plain: number;
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
        reverse: {
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
        localTimed: {
            computes: boolean;
            timed: {
                computes: boolean;
                generateMs: number;
                reverseMs: number;
                aggregateOpsPerSec: number;
                rows: LocalEncryptionReverseRow[];
                moduli: number[];
                productionRefused: boolean;
                bitcoinRefused: boolean;
                generate: {
                    ok: boolean;
                    n: number;
                    e: number;
                    d: number;
                    message: number;
                    cipher: number;
                    plain: number;
                    refused: true;
                    reason: string;
                } | {
                    ok: boolean;
                    n: number;
                    e: number;
                    d: number;
                    message: number;
                    cipher: number;
                    plain: number;
                    refused: false;
                    reason: string;
                };
                sync: {
                    computes: boolean;
                    results: {
                        N: number;
                        factored: boolean;
                        p: number;
                        q: number;
                        base: number;
                        order: number;
                        refused: boolean;
                        reason: string;
                    }[];
                    workerCap: number;
                    productionRefused: boolean;
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
                count: number;
                facets: ({
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                pair: string;
                cli: string;
                route: string;
                statement: string;
                boundary: string;
            };
            comparisons: LocalReverseVsStandardRow[];
            table: LocalReverseVsStandardRow[];
            audit: {
                computes: boolean;
                audits: QuantumAuditRow[];
                gaps: QuantumAuditRow[];
                partials: QuantumAuditRow[];
                passes: QuantumAuditRow[];
                gapCount: number;
                partialCount: number;
                passCount: number;
                coveredCount: number;
                count: number;
                dimensions: {
                    computes: boolean;
                    rows: DimensionAuditRow[];
                    coveredCount: number;
                    passCount: number;
                    partialCount: number;
                    gapCount: number;
                    dimensionGates: number;
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
                reverseCount: number;
                inverseCount: number;
                forwardCount: number;
                certified: boolean;
                fipsValidated: boolean;
                claySolvedByThisFold: number;
                facets: ({
                    receipt: string;
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                route: string;
                pair: string;
                cli: string;
                statement: string;
                boundary: string;
            };
            catalog: {
                computes: boolean;
                researchDate: string;
                standards: IsoNistStandardRow[];
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
            trinity: {
                computes: boolean;
                digits: import("../stack").DirectionalTrinityDigitRow[];
                table: {
                    digit: number;
                    forward: number;
                    inverse: number;
                    reverse: number;
                    note: string;
                }[];
                foldPair: {
                    forward: string;
                    reverse: string;
                    merged: string;
                    bidirectional: boolean;
                };
                ratInvSample: {
                    forward: import("../../3/7").Rational;
                    inverse: import("../../3/7").Rational;
                };
                fInverse: {
                    computes: boolean;
                    root: string;
                };
                claySolvedByThisFold: 0;
                facets: ({
                    receipt: string;
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                cli: string;
                pair: string;
                route: string;
                statement: string;
                boundary: string;
            };
            certified: false;
            fipsValidated: false;
            claySolvedByThisFold: 0;
            breaksNistPqc: false;
            productionRefused: boolean;
            bitcoinRefused: boolean;
            demoMaxBits: number;
            generateMs: number;
            reverseMs: number;
            aggregateOpsPerSec: number;
            count: number;
            facets: ({
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            pair: string;
            cli: string;
            route: string;
            statement: string;
            boundary: string;
        };
        audit: {
            computes: boolean;
            audits: QuantumAuditRow[];
            gaps: QuantumAuditRow[];
            partials: QuantumAuditRow[];
            passes: QuantumAuditRow[];
            gapCount: number;
            partialCount: number;
            passCount: number;
            coveredCount: number;
            count: number;
            dimensions: {
                computes: boolean;
                rows: DimensionAuditRow[];
                coveredCount: number;
                passCount: number;
                partialCount: number;
                gapCount: number;
                dimensionGates: number;
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
            reverseCount: number;
            inverseCount: number;
            forwardCount: number;
            certified: boolean;
            fipsValidated: boolean;
            claySolvedByThisFold: number;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            route: string;
            pair: string;
            cli: string;
            statement: string;
            boundary: string;
        };
        catalog: {
            computes: boolean;
            researchDate: string;
            standards: IsoNistStandardRow[];
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
        trinity: {
            computes: boolean;
            digits: import("../stack").DirectionalTrinityDigitRow[];
            table: {
                digit: number;
                forward: number;
                inverse: number;
                reverse: number;
                note: string;
            }[];
            foldPair: {
                forward: string;
                reverse: string;
                merged: string;
                bidirectional: boolean;
            };
            ratInvSample: {
                forward: import("../../3/7").Rational;
                inverse: import("../../3/7").Rational;
            };
            fInverse: {
                computes: boolean;
                root: string;
            };
            claySolvedByThisFold: 0;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            cli: string;
            pair: string;
            route: string;
            statement: string;
            boundary: string;
        };
        oneTbit: {
            computes: boolean;
            claimedBitsPerSec: number;
            /** Primary wire-model answer to “can this encrypt at 1 Tbit/s on the wire?” */
            provedAtCallTime: boolean;
            /** Separate honest model that may prove under memo/extent math. */
            provedAmortizedReuseMemoAtCallTime: boolean;
            model: OneTbitEncryptModel;
            measuredBitsPerSec: number;
            wire: OneTbitModelReceipt;
            demo: OneTbitModelReceipt;
            amortized: OneTbitModelReceipt;
            refused: OneTbitModelReceipt;
            models: readonly [OneTbitModelReceipt, OneTbitModelReceipt, OneTbitModelReceipt, OneTbitModelReceipt];
            productionRefused: boolean;
            bitcoinRefused: boolean;
            count: number;
            facets: ({
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            route: string;
            pair: string;
            cli: string;
            statement: string;
            boundary: string;
        };
        comparisons: LocalReverseVsStandardRow[];
        allowlistOk: boolean;
        productionReverseRefused: true;
        certified: false;
        fipsValidated: false;
        claySolvedByThisFold: 0;
        breaksNistPqc: false;
        strongerThanNistPqc: false;
        overallWireClaimProved: false;
        wireProofStatus: "proof-of-falsehood";
        wireRatio: number;
        aes128ClassicalBits: number;
        thisRepoIsNotTheIsoStandard: true;
        isoOfficialStandard: false;
        externalDeploymentCount: 0;
        fieldHistory: "none";
        securityModel: "structural+adversarial+measured-local";
        reverseMs: number;
        aggregateOpsPerSec: number;
        demoMaxBits: number;
        count: number;
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        pair: string;
        cli: string;
        route: string;
        siblingMagnitudesPair: string;
        statement: string;
        boundary: string;
    };
    catalog: {
        computes: boolean;
        researchDate: string;
        standards: IsoNistStandardRow[];
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
    trinity: {
        computes: boolean;
        digits: import("../stack").DirectionalTrinityDigitRow[];
        table: {
            digit: number;
            forward: number;
            inverse: number;
            reverse: number;
            note: string;
        }[];
        foldPair: {
            forward: string;
            reverse: string;
            merged: string;
            bidirectional: boolean;
        };
        ratInvSample: {
            forward: import("../../3/7").Rational;
            inverse: import("../../3/7").Rational;
        };
        fInverse: {
            computes: boolean;
            root: string;
        };
        claySolvedByThisFold: 0;
        facets: ({
            receipt: string;
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        cli: string;
        pair: string;
        route: string;
        statement: string;
        boundary: string;
    };
    audit: {
        computes: boolean;
        audits: QuantumAuditRow[];
        gaps: QuantumAuditRow[];
        partials: QuantumAuditRow[];
        passes: QuantumAuditRow[];
        gapCount: number;
        partialCount: number;
        passCount: number;
        coveredCount: number;
        count: number;
        dimensions: {
            computes: boolean;
            rows: DimensionAuditRow[];
            coveredCount: number;
            passCount: number;
            partialCount: number;
            gapCount: number;
            dimensionGates: number;
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
        reverseCount: number;
        inverseCount: number;
        forwardCount: number;
        certified: boolean;
        fipsValidated: boolean;
        claySolvedByThisFold: number;
        facets: ({
            receipt: string;
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        route: string;
        pair: string;
        cli: string;
        statement: string;
        boundary: string;
    };
    oneTbit: {
        computes: boolean;
        claimedBitsPerSec: number;
        /** Primary wire-model answer to “can this encrypt at 1 Tbit/s on the wire?” */
        provedAtCallTime: boolean;
        /** Separate honest model that may prove under memo/extent math. */
        provedAmortizedReuseMemoAtCallTime: boolean;
        model: OneTbitEncryptModel;
        measuredBitsPerSec: number;
        wire: OneTbitModelReceipt;
        demo: OneTbitModelReceipt;
        amortized: OneTbitModelReceipt;
        refused: OneTbitModelReceipt;
        models: readonly [OneTbitModelReceipt, OneTbitModelReceipt, OneTbitModelReceipt, OneTbitModelReceipt];
        productionRefused: boolean;
        bitcoinRefused: boolean;
        count: number;
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        route: string;
        pair: string;
        cli: string;
        statement: string;
        boundary: string;
    };
    isoGap: {
        computes: boolean;
        answer: {
            computes: boolean;
            /** Top-level honest answer to “does ISO require PQC?” — false (no universal mandate). */
            isoRequiresPostQuantumSecurity: false;
            universalMandate: false;
            migrationGuidance: true;
            nistAlignedIsoWork: true;
            isoOfficialStandard: false;
            publishedIsoPqcAmd: boolean;
            nistFipsFinal: boolean;
            researchDate: "2026-07";
            plainAnswer: string;
            certified: false;
            fipsValidated: false;
            catalogRoot: string;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            pair: string;
            cli: string;
            route: string;
            statement: string;
            boundary: string;
        };
        needs: IsoPqcNeedRow[];
        covered: IsoPqcNeedRow[];
        partial: IsoPqcNeedRow[];
        gaps: IsoPqcNeedRow[];
        labGaps: IsoPqcNeedRow[];
        coveredCount: number;
        partialCount: number;
        gapCount: number;
        forwardCount: number;
        inverseCount: number;
        reverseCount: number;
        before: {
            note: string;
            coveredApprox: number;
            partialApprox: number;
            gapApprox: number;
        };
        after: {
            covered: number;
            partial: number;
            gap: number;
            labGapsUnclosable: string[];
            platformGaps: string[];
        };
        thisIsItMeans: string;
        isoOfficialStandard: false;
        certified: false;
        fipsValidated: false;
        claySolvedByThisFold: 0;
        audit: {
            computes: boolean;
            audits: QuantumAuditRow[];
            gaps: QuantumAuditRow[];
            partials: QuantumAuditRow[];
            passes: QuantumAuditRow[];
            gapCount: number;
            partialCount: number;
            passCount: number;
            coveredCount: number;
            count: number;
            dimensions: {
                computes: boolean;
                rows: DimensionAuditRow[];
                coveredCount: number;
                passCount: number;
                partialCount: number;
                gapCount: number;
                dimensionGates: number;
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
            reverseCount: number;
            inverseCount: number;
            forwardCount: number;
            certified: boolean;
            fipsValidated: boolean;
            claySolvedByThisFold: number;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            route: string;
            pair: string;
            cli: string;
            statement: string;
            boundary: string;
        };
        trinity: {
            computes: boolean;
            digits: import("../stack").DirectionalTrinityDigitRow[];
            table: {
                digit: number;
                forward: number;
                inverse: number;
                reverse: number;
                note: string;
            }[];
            foldPair: {
                forward: string;
                reverse: string;
                merged: string;
                bidirectional: boolean;
            };
            ratInvSample: {
                forward: import("../../3/7").Rational;
                inverse: import("../../3/7").Rational;
            };
            fInverse: {
                computes: boolean;
                root: string;
            };
            claySolvedByThisFold: 0;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            cli: string;
            pair: string;
            route: string;
            statement: string;
            boundary: string;
        };
        catalog: {
            computes: boolean;
            researchDate: string;
            standards: IsoNistStandardRow[];
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
        localTimed: {
            computes: boolean;
            timed: {
                computes: boolean;
                generateMs: number;
                reverseMs: number;
                aggregateOpsPerSec: number;
                rows: LocalEncryptionReverseRow[];
                moduli: number[];
                productionRefused: boolean;
                bitcoinRefused: boolean;
                generate: {
                    ok: boolean;
                    n: number;
                    e: number;
                    d: number;
                    message: number;
                    cipher: number;
                    plain: number;
                    refused: true;
                    reason: string;
                } | {
                    ok: boolean;
                    n: number;
                    e: number;
                    d: number;
                    message: number;
                    cipher: number;
                    plain: number;
                    refused: false;
                    reason: string;
                };
                sync: {
                    computes: boolean;
                    results: {
                        N: number;
                        factored: boolean;
                        p: number;
                        q: number;
                        base: number;
                        order: number;
                        refused: boolean;
                        reason: string;
                    }[];
                    workerCap: number;
                    productionRefused: boolean;
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
                count: number;
                facets: ({
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                pair: string;
                cli: string;
                route: string;
                statement: string;
                boundary: string;
            };
            comparisons: LocalReverseVsStandardRow[];
            table: LocalReverseVsStandardRow[];
            audit: {
                computes: boolean;
                audits: QuantumAuditRow[];
                gaps: QuantumAuditRow[];
                partials: QuantumAuditRow[];
                passes: QuantumAuditRow[];
                gapCount: number;
                partialCount: number;
                passCount: number;
                coveredCount: number;
                count: number;
                dimensions: {
                    computes: boolean;
                    rows: DimensionAuditRow[];
                    coveredCount: number;
                    passCount: number;
                    partialCount: number;
                    gapCount: number;
                    dimensionGates: number;
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
                reverseCount: number;
                inverseCount: number;
                forwardCount: number;
                certified: boolean;
                fipsValidated: boolean;
                claySolvedByThisFold: number;
                facets: ({
                    receipt: string;
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                route: string;
                pair: string;
                cli: string;
                statement: string;
                boundary: string;
            };
            catalog: {
                computes: boolean;
                researchDate: string;
                standards: IsoNistStandardRow[];
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
            trinity: {
                computes: boolean;
                digits: import("../stack").DirectionalTrinityDigitRow[];
                table: {
                    digit: number;
                    forward: number;
                    inverse: number;
                    reverse: number;
                    note: string;
                }[];
                foldPair: {
                    forward: string;
                    reverse: string;
                    merged: string;
                    bidirectional: boolean;
                };
                ratInvSample: {
                    forward: import("../../3/7").Rational;
                    inverse: import("../../3/7").Rational;
                };
                fInverse: {
                    computes: boolean;
                    root: string;
                };
                claySolvedByThisFold: 0;
                facets: ({
                    receipt: string;
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                cli: string;
                pair: string;
                route: string;
                statement: string;
                boundary: string;
            };
            certified: false;
            fipsValidated: false;
            claySolvedByThisFold: 0;
            breaksNistPqc: false;
            productionRefused: boolean;
            bitcoinRefused: boolean;
            demoMaxBits: number;
            generateMs: number;
            reverseMs: number;
            aggregateOpsPerSec: number;
            count: number;
            facets: ({
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            pair: string;
            cli: string;
            route: string;
            statement: string;
            boundary: string;
        };
        localNovel: {
            computes: boolean;
            localSecurityProved: boolean;
            means: string;
            unproved: readonly ["FIPS validation", "ISO certification", "this repo being an ISO/NIST standard (it is not)", "wire-crypto magnitudes over NIST/ISO PQC (overallWireClaimProved=false)", "field battle-testing (externalDeploymentCount=0)", "wire AES-GCM reverse / production RSA reverse", "Clay millennium progress"];
            inventory: {
                computes: boolean;
                components: readonly LocalNovelEncryptionComponent[];
                novelCount: number;
                textbookCount: number;
                externalCount: number;
                externalDeploymentCount: 0;
                fieldHistory: "none";
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
            tools: {
                ready: boolean;
                roundTrip: boolean;
                rsaRoundTrip: boolean;
                cipher: string;
                teaching: {
                    n: number;
                    e: number;
                    d: number;
                    message: number;
                    cipher: number;
                    plain: number;
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
            reverse: {
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
            localTimed: {
                computes: boolean;
                timed: {
                    computes: boolean;
                    generateMs: number;
                    reverseMs: number;
                    aggregateOpsPerSec: number;
                    rows: LocalEncryptionReverseRow[];
                    moduli: number[];
                    productionRefused: boolean;
                    bitcoinRefused: boolean;
                    generate: {
                        ok: boolean;
                        n: number;
                        e: number;
                        d: number;
                        message: number;
                        cipher: number;
                        plain: number;
                        refused: true;
                        reason: string;
                    } | {
                        ok: boolean;
                        n: number;
                        e: number;
                        d: number;
                        message: number;
                        cipher: number;
                        plain: number;
                        refused: false;
                        reason: string;
                    };
                    sync: {
                        computes: boolean;
                        results: {
                            N: number;
                            factored: boolean;
                            p: number;
                            q: number;
                            base: number;
                            order: number;
                            refused: boolean;
                            reason: string;
                        }[];
                        workerCap: number;
                        productionRefused: boolean;
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
                    count: number;
                    facets: ({
                        facet: string;
                        on: boolean;
                    } & {
                        receipt: string;
                    })[];
                    root: string;
                    pair: string;
                    cli: string;
                    route: string;
                    statement: string;
                    boundary: string;
                };
                comparisons: LocalReverseVsStandardRow[];
                table: LocalReverseVsStandardRow[];
                audit: {
                    computes: boolean;
                    audits: QuantumAuditRow[];
                    gaps: QuantumAuditRow[];
                    partials: QuantumAuditRow[];
                    passes: QuantumAuditRow[];
                    gapCount: number;
                    partialCount: number;
                    passCount: number;
                    coveredCount: number;
                    count: number;
                    dimensions: {
                        computes: boolean;
                        rows: DimensionAuditRow[];
                        coveredCount: number;
                        passCount: number;
                        partialCount: number;
                        gapCount: number;
                        dimensionGates: number;
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
                    reverseCount: number;
                    inverseCount: number;
                    forwardCount: number;
                    certified: boolean;
                    fipsValidated: boolean;
                    claySolvedByThisFold: number;
                    facets: ({
                        receipt: string;
                        facet: string;
                        on: boolean;
                    } & {
                        receipt: string;
                    })[];
                    root: string;
                    route: string;
                    pair: string;
                    cli: string;
                    statement: string;
                    boundary: string;
                };
                catalog: {
                    computes: boolean;
                    researchDate: string;
                    standards: IsoNistStandardRow[];
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
                trinity: {
                    computes: boolean;
                    digits: import("../stack").DirectionalTrinityDigitRow[];
                    table: {
                        digit: number;
                        forward: number;
                        inverse: number;
                        reverse: number;
                        note: string;
                    }[];
                    foldPair: {
                        forward: string;
                        reverse: string;
                        merged: string;
                        bidirectional: boolean;
                    };
                    ratInvSample: {
                        forward: import("../../3/7").Rational;
                        inverse: import("../../3/7").Rational;
                    };
                    fInverse: {
                        computes: boolean;
                        root: string;
                    };
                    claySolvedByThisFold: 0;
                    facets: ({
                        receipt: string;
                        facet: string;
                        on: boolean;
                    } & {
                        receipt: string;
                    })[];
                    root: string;
                    cli: string;
                    pair: string;
                    route: string;
                    statement: string;
                    boundary: string;
                };
                certified: false;
                fipsValidated: false;
                claySolvedByThisFold: 0;
                breaksNistPqc: false;
                productionRefused: boolean;
                bitcoinRefused: boolean;
                demoMaxBits: number;
                generateMs: number;
                reverseMs: number;
                aggregateOpsPerSec: number;
                count: number;
                facets: ({
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                pair: string;
                cli: string;
                route: string;
                statement: string;
                boundary: string;
            };
            audit: {
                computes: boolean;
                audits: QuantumAuditRow[];
                gaps: QuantumAuditRow[];
                partials: QuantumAuditRow[];
                passes: QuantumAuditRow[];
                gapCount: number;
                partialCount: number;
                passCount: number;
                coveredCount: number;
                count: number;
                dimensions: {
                    computes: boolean;
                    rows: DimensionAuditRow[];
                    coveredCount: number;
                    passCount: number;
                    partialCount: number;
                    gapCount: number;
                    dimensionGates: number;
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
                reverseCount: number;
                inverseCount: number;
                forwardCount: number;
                certified: boolean;
                fipsValidated: boolean;
                claySolvedByThisFold: number;
                facets: ({
                    receipt: string;
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                route: string;
                pair: string;
                cli: string;
                statement: string;
                boundary: string;
            };
            catalog: {
                computes: boolean;
                researchDate: string;
                standards: IsoNistStandardRow[];
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
            trinity: {
                computes: boolean;
                digits: import("../stack").DirectionalTrinityDigitRow[];
                table: {
                    digit: number;
                    forward: number;
                    inverse: number;
                    reverse: number;
                    note: string;
                }[];
                foldPair: {
                    forward: string;
                    reverse: string;
                    merged: string;
                    bidirectional: boolean;
                };
                ratInvSample: {
                    forward: import("../../3/7").Rational;
                    inverse: import("../../3/7").Rational;
                };
                fInverse: {
                    computes: boolean;
                    root: string;
                };
                claySolvedByThisFold: 0;
                facets: ({
                    receipt: string;
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                cli: string;
                pair: string;
                route: string;
                statement: string;
                boundary: string;
            };
            oneTbit: {
                computes: boolean;
                claimedBitsPerSec: number;
                /** Primary wire-model answer to “can this encrypt at 1 Tbit/s on the wire?” */
                provedAtCallTime: boolean;
                /** Separate honest model that may prove under memo/extent math. */
                provedAmortizedReuseMemoAtCallTime: boolean;
                model: OneTbitEncryptModel;
                measuredBitsPerSec: number;
                wire: OneTbitModelReceipt;
                demo: OneTbitModelReceipt;
                amortized: OneTbitModelReceipt;
                refused: OneTbitModelReceipt;
                models: readonly [OneTbitModelReceipt, OneTbitModelReceipt, OneTbitModelReceipt, OneTbitModelReceipt];
                productionRefused: boolean;
                bitcoinRefused: boolean;
                count: number;
                facets: ({
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                route: string;
                pair: string;
                cli: string;
                statement: string;
                boundary: string;
            };
            comparisons: LocalReverseVsStandardRow[];
            allowlistOk: boolean;
            productionReverseRefused: true;
            certified: false;
            fipsValidated: false;
            claySolvedByThisFold: 0;
            breaksNistPqc: false;
            strongerThanNistPqc: false;
            overallWireClaimProved: false;
            wireProofStatus: "proof-of-falsehood";
            wireRatio: number;
            aes128ClassicalBits: number;
            thisRepoIsNotTheIsoStandard: true;
            isoOfficialStandard: false;
            externalDeploymentCount: 0;
            fieldHistory: "none";
            securityModel: "structural+adversarial+measured-local";
            reverseMs: number;
            aggregateOpsPerSec: number;
            demoMaxBits: number;
            count: number;
            facets: ({
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            pair: string;
            cli: string;
            route: string;
            siblingMagnitudesPair: string;
            statement: string;
            boundary: string;
        };
        oneTbit: {
            computes: boolean;
            claimedBitsPerSec: number;
            /** Primary wire-model answer to “can this encrypt at 1 Tbit/s on the wire?” */
            provedAtCallTime: boolean;
            /** Separate honest model that may prove under memo/extent math. */
            provedAmortizedReuseMemoAtCallTime: boolean;
            model: OneTbitEncryptModel;
            measuredBitsPerSec: number;
            wire: OneTbitModelReceipt;
            demo: OneTbitModelReceipt;
            amortized: OneTbitModelReceipt;
            refused: OneTbitModelReceipt;
            models: readonly [OneTbitModelReceipt, OneTbitModelReceipt, OneTbitModelReceipt, OneTbitModelReceipt];
            productionRefused: boolean;
            bitcoinRefused: boolean;
            count: number;
            facets: ({
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            route: string;
            pair: string;
            cli: string;
            statement: string;
            boundary: string;
        };
        handoff: {
            computes: boolean;
            scienceField: string;
            oecd: string;
            subdomain: string;
            exports: readonly ["isoNistPqcStandardsCatalog", "quantumStandardsAuditSuite", "quantumDimensionAuditCoverage", "pqcNecessityFromShorCompose", "postQuantumMigrationChecklist", "shorBreaksWhichPublicKey", "pqcAlgorithmFamilySelector", "isoAlignedHashSignatureTaxonomy", "runPqcStandardsToolInBrowser", "runQuantumStandardsAuditInBrowser"];
            standardsCount: number;
            researchDate: string;
            auditPass: number;
            auditGap: number;
            dimensionCoverage: number;
            dimensionGates: number;
            migrateOpen: number;
            certified: false;
            fipsValidated: false;
            claySolvedByThisFold: 0;
            catalogRoot: string;
            auditRoot: string;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            route: string;
            pair: string;
            cli: string;
            statement: string;
            boundary: string;
        };
        facets: ({
            receipt: string;
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        pair: string;
        cli: string;
        route: string;
        statement: string;
        boundary: string;
    };
    isoRequires: {
        computes: boolean;
        /** Top-level honest answer to “does ISO require PQC?” — false (no universal mandate). */
        isoRequiresPostQuantumSecurity: false;
        universalMandate: false;
        migrationGuidance: true;
        nistAlignedIsoWork: true;
        isoOfficialStandard: false;
        publishedIsoPqcAmd: boolean;
        nistFipsFinal: boolean;
        researchDate: "2026-07";
        plainAnswer: string;
        certified: false;
        fipsValidated: false;
        catalogRoot: string;
        facets: ({
            receipt: string;
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        pair: string;
        cli: string;
        route: string;
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
    pair: string;
    cli: string;
    route: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:prove-local-magnitudes-iso */
export declare function runProveLocalEncryptionMagnitudesStrongerThanIsoAllDirectionsExit(_root: string, _argv?: readonly string[]): number;
/**
 * Handoff for science-trinity / significance waves (parent stack dfb997fc).
 * Cryptography & security facet only — compose from here; do not re-infer PQC catalog.
 * Other SCIENCE_DOMAINS (math, physics, life, earth, humanities, social) stay for trinity waves.
 */
export declare function isoPqcHandoffForScienceTrinities(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    scienceField: string;
    oecd: string;
    subdomain: string;
    exports: readonly ["isoNistPqcStandardsCatalog", "quantumStandardsAuditSuite", "quantumDimensionAuditCoverage", "pqcNecessityFromShorCompose", "postQuantumMigrationChecklist", "shorBreaksWhichPublicKey", "pqcAlgorithmFamilySelector", "isoAlignedHashSignatureTaxonomy", "runPqcStandardsToolInBrowser", "runQuantumStandardsAuditInBrowser"];
    standardsCount: number;
    researchDate: string;
    auditPass: number;
    auditGap: number;
    dimensionCoverage: number;
    dimensionGates: number;
    migrateOpen: number;
    certified: false;
    fipsValidated: false;
    claySolvedByThisFold: 0;
    catalogRoot: string;
    auditRoot: string;
    facets: ({
        receipt: string;
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    route: string;
    pair: string;
    cli: string;
    statement: string;
    boundary: string;
};
export type IsoPqcNeedCoverage = QuantumAuditCoverage;
export type IsoPqcNeedRow = {
    readonly id: string;
    readonly need: string;
    readonly source: string;
    readonly direction: 'forward' | 'inverse' | 'reverse' | 'both' | 'neither';
    readonly coverage: IsoPqcNeedCoverage;
    readonly on: boolean;
    readonly fold: string;
    readonly fillAction: string;
    readonly unclosableWithoutExternalLab: boolean;
    readonly receipt: string;
};
/**
 * Honest answer: does ISO *require* post-quantum security?
 * Pair: iso/requires-pqc · boolean isoRequiresPostQuantumSecurity with nuance fields.
 *
 * Answer: NO universal mandate. ISO publishes PQC algorithm standards + migration-aligned work;
 * NIST leads finalized FIPS; jurisdictions may reference ISO in procurement. Not a global “must PQC” law.
 */
export declare function isoRequiresPostQuantumSecurity(matrix?: MindMatrix): {
    computes: boolean;
    /** Top-level honest answer to “does ISO require PQC?” — false (no universal mandate). */
    isoRequiresPostQuantumSecurity: false;
    universalMandate: false;
    migrationGuidance: true;
    nistAlignedIsoWork: true;
    isoOfficialStandard: false;
    publishedIsoPqcAmd: boolean;
    nistFipsFinal: boolean;
    researchDate: "2026-07";
    plainAnswer: string;
    certified: false;
    fipsValidated: false;
    catalogRoot: string;
    facets: ({
        receipt: string;
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    pair: string;
    cli: string;
    route: string;
    statement: string;
    boundary: string;
};
/**
 * Gap-fill ISO/NIST PQC normative needs across forward · inverse · reverse (directional trinity).
 * Pair: iso/pqc-gap-fill · CLI npm run quantum:iso-pqc-gap-fill · route #iso-pqc-gap-fill
 *
 * Fills sealed-src gaps; lab certification / CMVP / Common Criteria stay `gap` with handoff.
 * "this is it" = modeled catalog + audit + gap-fill toward requirements — NOT certification.
 */
export declare function isoPqcRequirementsGapFillAllQuantumDirections(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    answer: {
        computes: boolean;
        /** Top-level honest answer to “does ISO require PQC?” — false (no universal mandate). */
        isoRequiresPostQuantumSecurity: false;
        universalMandate: false;
        migrationGuidance: true;
        nistAlignedIsoWork: true;
        isoOfficialStandard: false;
        publishedIsoPqcAmd: boolean;
        nistFipsFinal: boolean;
        researchDate: "2026-07";
        plainAnswer: string;
        certified: false;
        fipsValidated: false;
        catalogRoot: string;
        facets: ({
            receipt: string;
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        pair: string;
        cli: string;
        route: string;
        statement: string;
        boundary: string;
    };
    needs: IsoPqcNeedRow[];
    covered: IsoPqcNeedRow[];
    partial: IsoPqcNeedRow[];
    gaps: IsoPqcNeedRow[];
    labGaps: IsoPqcNeedRow[];
    coveredCount: number;
    partialCount: number;
    gapCount: number;
    forwardCount: number;
    inverseCount: number;
    reverseCount: number;
    before: {
        note: string;
        coveredApprox: number;
        partialApprox: number;
        gapApprox: number;
    };
    after: {
        covered: number;
        partial: number;
        gap: number;
        labGapsUnclosable: string[];
        platformGaps: string[];
    };
    thisIsItMeans: string;
    isoOfficialStandard: false;
    certified: false;
    fipsValidated: false;
    claySolvedByThisFold: 0;
    audit: {
        computes: boolean;
        audits: QuantumAuditRow[];
        gaps: QuantumAuditRow[];
        partials: QuantumAuditRow[];
        passes: QuantumAuditRow[];
        gapCount: number;
        partialCount: number;
        passCount: number;
        coveredCount: number;
        count: number;
        dimensions: {
            computes: boolean;
            rows: DimensionAuditRow[];
            coveredCount: number;
            passCount: number;
            partialCount: number;
            gapCount: number;
            dimensionGates: number;
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
        reverseCount: number;
        inverseCount: number;
        forwardCount: number;
        certified: boolean;
        fipsValidated: boolean;
        claySolvedByThisFold: number;
        facets: ({
            receipt: string;
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        route: string;
        pair: string;
        cli: string;
        statement: string;
        boundary: string;
    };
    trinity: {
        computes: boolean;
        digits: import("../stack").DirectionalTrinityDigitRow[];
        table: {
            digit: number;
            forward: number;
            inverse: number;
            reverse: number;
            note: string;
        }[];
        foldPair: {
            forward: string;
            reverse: string;
            merged: string;
            bidirectional: boolean;
        };
        ratInvSample: {
            forward: import("../../3/7").Rational;
            inverse: import("../../3/7").Rational;
        };
        fInverse: {
            computes: boolean;
            root: string;
        };
        claySolvedByThisFold: 0;
        facets: ({
            receipt: string;
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        cli: string;
        pair: string;
        route: string;
        statement: string;
        boundary: string;
    };
    catalog: {
        computes: boolean;
        researchDate: string;
        standards: IsoNistStandardRow[];
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
    localTimed: {
        computes: boolean;
        timed: {
            computes: boolean;
            generateMs: number;
            reverseMs: number;
            aggregateOpsPerSec: number;
            rows: LocalEncryptionReverseRow[];
            moduli: number[];
            productionRefused: boolean;
            bitcoinRefused: boolean;
            generate: {
                ok: boolean;
                n: number;
                e: number;
                d: number;
                message: number;
                cipher: number;
                plain: number;
                refused: true;
                reason: string;
            } | {
                ok: boolean;
                n: number;
                e: number;
                d: number;
                message: number;
                cipher: number;
                plain: number;
                refused: false;
                reason: string;
            };
            sync: {
                computes: boolean;
                results: {
                    N: number;
                    factored: boolean;
                    p: number;
                    q: number;
                    base: number;
                    order: number;
                    refused: boolean;
                    reason: string;
                }[];
                workerCap: number;
                productionRefused: boolean;
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
            count: number;
            facets: ({
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            pair: string;
            cli: string;
            route: string;
            statement: string;
            boundary: string;
        };
        comparisons: LocalReverseVsStandardRow[];
        table: LocalReverseVsStandardRow[];
        audit: {
            computes: boolean;
            audits: QuantumAuditRow[];
            gaps: QuantumAuditRow[];
            partials: QuantumAuditRow[];
            passes: QuantumAuditRow[];
            gapCount: number;
            partialCount: number;
            passCount: number;
            coveredCount: number;
            count: number;
            dimensions: {
                computes: boolean;
                rows: DimensionAuditRow[];
                coveredCount: number;
                passCount: number;
                partialCount: number;
                gapCount: number;
                dimensionGates: number;
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
            reverseCount: number;
            inverseCount: number;
            forwardCount: number;
            certified: boolean;
            fipsValidated: boolean;
            claySolvedByThisFold: number;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            route: string;
            pair: string;
            cli: string;
            statement: string;
            boundary: string;
        };
        catalog: {
            computes: boolean;
            researchDate: string;
            standards: IsoNistStandardRow[];
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
        trinity: {
            computes: boolean;
            digits: import("../stack").DirectionalTrinityDigitRow[];
            table: {
                digit: number;
                forward: number;
                inverse: number;
                reverse: number;
                note: string;
            }[];
            foldPair: {
                forward: string;
                reverse: string;
                merged: string;
                bidirectional: boolean;
            };
            ratInvSample: {
                forward: import("../../3/7").Rational;
                inverse: import("../../3/7").Rational;
            };
            fInverse: {
                computes: boolean;
                root: string;
            };
            claySolvedByThisFold: 0;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            cli: string;
            pair: string;
            route: string;
            statement: string;
            boundary: string;
        };
        certified: false;
        fipsValidated: false;
        claySolvedByThisFold: 0;
        breaksNistPqc: false;
        productionRefused: boolean;
        bitcoinRefused: boolean;
        demoMaxBits: number;
        generateMs: number;
        reverseMs: number;
        aggregateOpsPerSec: number;
        count: number;
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        pair: string;
        cli: string;
        route: string;
        statement: string;
        boundary: string;
    };
    localNovel: {
        computes: boolean;
        localSecurityProved: boolean;
        means: string;
        unproved: readonly ["FIPS validation", "ISO certification", "this repo being an ISO/NIST standard (it is not)", "wire-crypto magnitudes over NIST/ISO PQC (overallWireClaimProved=false)", "field battle-testing (externalDeploymentCount=0)", "wire AES-GCM reverse / production RSA reverse", "Clay millennium progress"];
        inventory: {
            computes: boolean;
            components: readonly LocalNovelEncryptionComponent[];
            novelCount: number;
            textbookCount: number;
            externalCount: number;
            externalDeploymentCount: 0;
            fieldHistory: "none";
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
        tools: {
            ready: boolean;
            roundTrip: boolean;
            rsaRoundTrip: boolean;
            cipher: string;
            teaching: {
                n: number;
                e: number;
                d: number;
                message: number;
                cipher: number;
                plain: number;
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
        reverse: {
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
        localTimed: {
            computes: boolean;
            timed: {
                computes: boolean;
                generateMs: number;
                reverseMs: number;
                aggregateOpsPerSec: number;
                rows: LocalEncryptionReverseRow[];
                moduli: number[];
                productionRefused: boolean;
                bitcoinRefused: boolean;
                generate: {
                    ok: boolean;
                    n: number;
                    e: number;
                    d: number;
                    message: number;
                    cipher: number;
                    plain: number;
                    refused: true;
                    reason: string;
                } | {
                    ok: boolean;
                    n: number;
                    e: number;
                    d: number;
                    message: number;
                    cipher: number;
                    plain: number;
                    refused: false;
                    reason: string;
                };
                sync: {
                    computes: boolean;
                    results: {
                        N: number;
                        factored: boolean;
                        p: number;
                        q: number;
                        base: number;
                        order: number;
                        refused: boolean;
                        reason: string;
                    }[];
                    workerCap: number;
                    productionRefused: boolean;
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
                count: number;
                facets: ({
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                pair: string;
                cli: string;
                route: string;
                statement: string;
                boundary: string;
            };
            comparisons: LocalReverseVsStandardRow[];
            table: LocalReverseVsStandardRow[];
            audit: {
                computes: boolean;
                audits: QuantumAuditRow[];
                gaps: QuantumAuditRow[];
                partials: QuantumAuditRow[];
                passes: QuantumAuditRow[];
                gapCount: number;
                partialCount: number;
                passCount: number;
                coveredCount: number;
                count: number;
                dimensions: {
                    computes: boolean;
                    rows: DimensionAuditRow[];
                    coveredCount: number;
                    passCount: number;
                    partialCount: number;
                    gapCount: number;
                    dimensionGates: number;
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
                reverseCount: number;
                inverseCount: number;
                forwardCount: number;
                certified: boolean;
                fipsValidated: boolean;
                claySolvedByThisFold: number;
                facets: ({
                    receipt: string;
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                route: string;
                pair: string;
                cli: string;
                statement: string;
                boundary: string;
            };
            catalog: {
                computes: boolean;
                researchDate: string;
                standards: IsoNistStandardRow[];
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
            trinity: {
                computes: boolean;
                digits: import("../stack").DirectionalTrinityDigitRow[];
                table: {
                    digit: number;
                    forward: number;
                    inverse: number;
                    reverse: number;
                    note: string;
                }[];
                foldPair: {
                    forward: string;
                    reverse: string;
                    merged: string;
                    bidirectional: boolean;
                };
                ratInvSample: {
                    forward: import("../../3/7").Rational;
                    inverse: import("../../3/7").Rational;
                };
                fInverse: {
                    computes: boolean;
                    root: string;
                };
                claySolvedByThisFold: 0;
                facets: ({
                    receipt: string;
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                cli: string;
                pair: string;
                route: string;
                statement: string;
                boundary: string;
            };
            certified: false;
            fipsValidated: false;
            claySolvedByThisFold: 0;
            breaksNistPqc: false;
            productionRefused: boolean;
            bitcoinRefused: boolean;
            demoMaxBits: number;
            generateMs: number;
            reverseMs: number;
            aggregateOpsPerSec: number;
            count: number;
            facets: ({
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            pair: string;
            cli: string;
            route: string;
            statement: string;
            boundary: string;
        };
        audit: {
            computes: boolean;
            audits: QuantumAuditRow[];
            gaps: QuantumAuditRow[];
            partials: QuantumAuditRow[];
            passes: QuantumAuditRow[];
            gapCount: number;
            partialCount: number;
            passCount: number;
            coveredCount: number;
            count: number;
            dimensions: {
                computes: boolean;
                rows: DimensionAuditRow[];
                coveredCount: number;
                passCount: number;
                partialCount: number;
                gapCount: number;
                dimensionGates: number;
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
            reverseCount: number;
            inverseCount: number;
            forwardCount: number;
            certified: boolean;
            fipsValidated: boolean;
            claySolvedByThisFold: number;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            route: string;
            pair: string;
            cli: string;
            statement: string;
            boundary: string;
        };
        catalog: {
            computes: boolean;
            researchDate: string;
            standards: IsoNistStandardRow[];
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
        trinity: {
            computes: boolean;
            digits: import("../stack").DirectionalTrinityDigitRow[];
            table: {
                digit: number;
                forward: number;
                inverse: number;
                reverse: number;
                note: string;
            }[];
            foldPair: {
                forward: string;
                reverse: string;
                merged: string;
                bidirectional: boolean;
            };
            ratInvSample: {
                forward: import("../../3/7").Rational;
                inverse: import("../../3/7").Rational;
            };
            fInverse: {
                computes: boolean;
                root: string;
            };
            claySolvedByThisFold: 0;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            cli: string;
            pair: string;
            route: string;
            statement: string;
            boundary: string;
        };
        oneTbit: {
            computes: boolean;
            claimedBitsPerSec: number;
            /** Primary wire-model answer to “can this encrypt at 1 Tbit/s on the wire?” */
            provedAtCallTime: boolean;
            /** Separate honest model that may prove under memo/extent math. */
            provedAmortizedReuseMemoAtCallTime: boolean;
            model: OneTbitEncryptModel;
            measuredBitsPerSec: number;
            wire: OneTbitModelReceipt;
            demo: OneTbitModelReceipt;
            amortized: OneTbitModelReceipt;
            refused: OneTbitModelReceipt;
            models: readonly [OneTbitModelReceipt, OneTbitModelReceipt, OneTbitModelReceipt, OneTbitModelReceipt];
            productionRefused: boolean;
            bitcoinRefused: boolean;
            count: number;
            facets: ({
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            route: string;
            pair: string;
            cli: string;
            statement: string;
            boundary: string;
        };
        comparisons: LocalReverseVsStandardRow[];
        allowlistOk: boolean;
        productionReverseRefused: true;
        certified: false;
        fipsValidated: false;
        claySolvedByThisFold: 0;
        breaksNistPqc: false;
        strongerThanNistPqc: false;
        overallWireClaimProved: false;
        wireProofStatus: "proof-of-falsehood";
        wireRatio: number;
        aes128ClassicalBits: number;
        thisRepoIsNotTheIsoStandard: true;
        isoOfficialStandard: false;
        externalDeploymentCount: 0;
        fieldHistory: "none";
        securityModel: "structural+adversarial+measured-local";
        reverseMs: number;
        aggregateOpsPerSec: number;
        demoMaxBits: number;
        count: number;
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        pair: string;
        cli: string;
        route: string;
        siblingMagnitudesPair: string;
        statement: string;
        boundary: string;
    };
    oneTbit: {
        computes: boolean;
        claimedBitsPerSec: number;
        /** Primary wire-model answer to “can this encrypt at 1 Tbit/s on the wire?” */
        provedAtCallTime: boolean;
        /** Separate honest model that may prove under memo/extent math. */
        provedAmortizedReuseMemoAtCallTime: boolean;
        model: OneTbitEncryptModel;
        measuredBitsPerSec: number;
        wire: OneTbitModelReceipt;
        demo: OneTbitModelReceipt;
        amortized: OneTbitModelReceipt;
        refused: OneTbitModelReceipt;
        models: readonly [OneTbitModelReceipt, OneTbitModelReceipt, OneTbitModelReceipt, OneTbitModelReceipt];
        productionRefused: boolean;
        bitcoinRefused: boolean;
        count: number;
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        route: string;
        pair: string;
        cli: string;
        statement: string;
        boundary: string;
    };
    handoff: {
        computes: boolean;
        scienceField: string;
        oecd: string;
        subdomain: string;
        exports: readonly ["isoNistPqcStandardsCatalog", "quantumStandardsAuditSuite", "quantumDimensionAuditCoverage", "pqcNecessityFromShorCompose", "postQuantumMigrationChecklist", "shorBreaksWhichPublicKey", "pqcAlgorithmFamilySelector", "isoAlignedHashSignatureTaxonomy", "runPqcStandardsToolInBrowser", "runQuantumStandardsAuditInBrowser"];
        standardsCount: number;
        researchDate: string;
        auditPass: number;
        auditGap: number;
        dimensionCoverage: number;
        dimensionGates: number;
        migrateOpen: number;
        certified: false;
        fipsValidated: false;
        claySolvedByThisFold: 0;
        catalogRoot: string;
        auditRoot: string;
        facets: ({
            receipt: string;
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        route: string;
        pair: string;
        cli: string;
        statement: string;
        boundary: string;
    };
    facets: ({
        receipt: string;
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    pair: string;
    cli: string;
    route: string;
    statement: string;
    boundary: string;
};
/** Browser-sync ISO PQC gap-fill. */
export declare function runIsoPqcRequirementsGapFillInBrowser(matrix?: MindMatrix, at?: number): {
    ok: boolean;
    isoRequiresPostQuantumSecurity: false;
    universalMandate: false;
    migrationGuidance: true;
    nistAlignedIsoWork: true;
    plainAnswer: string;
    coveredCount: number;
    partialCount: number;
    gapCount: number;
    needs: IsoPqcNeedRow[];
    after: {
        covered: number;
        partial: number;
        gap: number;
        labGapsUnclosable: string[];
        platformGaps: string[];
    };
    labGaps: IsoPqcNeedRow[];
    certified: false;
    fipsValidated: false;
    isoOfficialStandard: false;
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
    mode: "browser-sync";
    browserGap: string;
    route: string;
    pair: string;
    cli: string;
};
/** npm run quantum:iso-pqc-gap-fill */
export declare function runIsoPqcRequirementsGapFillExit(_root: string, _argv?: readonly string[]): number;
