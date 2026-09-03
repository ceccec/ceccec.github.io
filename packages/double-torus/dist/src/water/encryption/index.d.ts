import * as __ns_mountain_geometry from '../../mountain/geometry';
import type { MindMatrix } from '../../types';
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
/**
 * Sealed catalog RSA moduli for production browser reverse tools — teaching 61×53 plus Shor textbook semiprimes.
 * moduliClass=sealed-catalog · NEVER production RSA break sizes.
 * Public name = SEALED_CATALOG_RSA_MODULI (SEALED_CATALOG_RSA_MODULI is a deprecated internal alias only).
 */
export declare const SEALED_CATALOG_RSA_MODULI: readonly [number, number, number, number];
/** @deprecated Use SEALED_CATALOG_RSA_MODULI — do not surface “demo” in UI/MCP copy. */
export declare const DEMO_RSA_MODULI: readonly [number, number, number, number];
/**
 * Production browser reverse tools — UI/toolbox/MCP reverse surfaces users run.
 * Distinct from production RSA break (still refuseBeyond). Pair: reverse tools ≠ RSA break.
 */
export declare const PRODUCTION_BROWSER_REVERSE_TOOLS: readonly ["encryption-reverse-verify", "sealed-catalog-rsa-measure", "local-reverse-timed", "local-reverse-timed-vs-standards", "max-bits-crypto", "standards-audit"];
/** @deprecated Quarantined tool id — prefer sealed-catalog-rsa-measure in UI. */
export declare const DEPRECATED_DEMO_RSA_MEASURE_TOOL_ID: "demo-rsa-measure";
/** Hard bit ceiling for sealed-catalog reverse — derived from teaching n=61×53 (bits of 3233). */
export declare const SEALED_CATALOG_RSA_BIT_CEILING: number;
/** @deprecated Use SEALED_CATALOG_RSA_BIT_CEILING — do not surface “demo” in UI/MCP copy. */
export declare const DEMO_RSA_BIT_CEILING: number;
/**
 * Odd over-ceiling probe — MUST stay odd + safe-integer so refuse facets exercise the bit-ceiling branch
 * (even float probes refuse on “not odd” and leave the ceiling branch untested — P1 vacuous self-test).
 */
export declare const ODD_OVER_CEILING_RSA_PROBE: number;
/**
 * Far-above-ceiling odd safe integer — RSA-shaped production refuse probe (bits ≫ SEALED_CATALOG_RSA_BIT_CEILING).
 * HONEST: Bitcoin uses secp256k1 ECDSA, not RSA — see refuseBitcoinMainnetMaterial for chain-key refuse.
 */
export declare const FAR_OVER_CEILING_RSA_PROBE: number;
/** Cap parallel reverse workers: min(cpus, vortex ring length) — never unbounded. */
export declare function encryptionReverseWorkerCap(cpuCount?: number): number;
/** Classical 64-bit word — architectureRequirement=classical-64bit (NOT QPU). */
export declare const CLASSICAL_64BIT_WORD_BITS: number;
/**
 * Local reverse path uses Number.isSafeInteger — bit WIDTH of JS safe integers.
 * Number.MAX_SAFE_INTEGER = 2^53 − 1; use ceil(log2(MAX+1)) so float rounding cannot yield 54.
 */
export declare const JS_SAFE_INTEGER_BITS: number;
/** AES-256 classical strength named by sealed max-bits theorem (external bulk cipher). */
export declare const AES256_CLASSICAL_BITS: number;
/** Digit-folder mod-9 inverse domain 0..9 — ceil(log2(9)). */
export declare const DIGIT_INVERSE_DOMAIN_BITS: number;
/**
 * Probe CPU parallelism at call time — browser hardwareConcurrency or Node os.
 * Browser-safe · no static node:os import (vite).
 */
export declare function probeLocalCpuCount(): number;
export type MaxBitsHardwareCapabilities = {
    readonly cpuCount: number;
    readonly workerCap: number;
    readonly heapCapMb: number;
    readonly classicalWordBits: number;
    readonly jsSafeIntegerBits: number;
    readonly hardwareReverseCapacityBits: number;
    readonly demoSampleCeilingBits: number;
    readonly encryptTheoremBits: number;
    readonly inverseTheoremBits: number;
    readonly reverseClaimBits: number;
    readonly demoIsNotHardwareCeiling: boolean;
    readonly qpuRequired: false;
    readonly receipt: string;
};
/**
 * Max-bits boundary from hardware capabilities at call time.
 * Formula: hardwareReverseCapacityBits = min(JS_SAFE_INTEGER_BITS, CLASSICAL_64BIT_WORD_BITS);
 * reverseClaimBits = min(SEALED_CATALOG_RSA_BIT_CEILING, hardwareReverseCapacityBits);
 * SEALED_CATALOG_RSA_MODULI = sample set only — NEVER pretends to be the hardware ceiling.
 * Pair: bits/hardware
 */
export declare function maxBitsFromHardwareCapabilities(cpuHint?: number): MaxBitsHardwareCapabilities;
/**
 * Boundary string recomputed from hardware ∩ refuseBeyond ∩ sealed theorem constants.
 * SEALED_CATALOG_RSA_MODULI named as demo sample — not the hardware ceiling.
 */
export declare function maxBitsHardwareBoundaryText(hw?: MaxBitsHardwareCapabilities, refuseBeyond?: boolean): string;
/** Reject out-of-catalog moduli before any factor work (honesty gate — refuseBeyond for production RSA break). */
export declare function refuseNonDemoRsaModulus(n: number): {
    allowed: boolean;
    bits: number;
    reason: string;
};
/** Explicit Bitcoin/mainnet refuse — ECDSA/secp256k1 chain keys never enter sealed-catalog RSA reverse. */
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
/** chatEncryptedWithAllFourKeysUnboundedKeyspace — the chat turn is encrypted under the composite of all FOUR
 * navigation-cross keys (user, 2026-07-25: "the chat itself is encrypted with all 4 keys providing infinite
 * cryptography"). A keystream XOR keyed by merkle(referrer, id, pairA, pairB) hides the plaintext and recovers it with
 * all four keys; dropping any one key fails to decrypt. "Infinite" is the honest, structural sense: the key tuple
 * contains arbitrary-length strings and the referrer chains every turn, so the keyspace is UNBOUNDED and non-repeating
 * (aperiodic, no finite period) — NOT infinite entropy per message, and a DETERMINISTIC key derived from observable
 * coordinates gives all-4-keys access-control + tamper-evidence, NOT information-theoretic secrecy. [[tampering-cost-crypto-honesty]] [[feedback-no-finiteness-assumption-fractal-aperiodic]] */
export declare function chatEncryptedWithAllFourKeysUnboundedKeyspace(matrix?: MindMatrix): {
    encrypted: boolean;
    recovers: boolean;
    needsAllFour: boolean;
    unbounded: boolean;
    distinctKeys: number;
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
 * Production browser reverse pool — sync preferred (sealed modeledShorFactorToyModulus re-gates refuse).
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
/** Pure: boundary names SEALED_CATALOG_RSA_MODULI as sealed-catalog sample (not hardware ceiling). Pair: bits/hardware */
export declare function reverseBoundaryNamesSealedCatalogRsaModuli(boundary: string): boolean;
/** @deprecated Prefer reverseBoundaryNamesSealedCatalogRsaModuli */
export declare const reverseBoundaryNamesDemoRsaModuli: typeof reverseBoundaryNamesSealedCatalogRsaModuli;
/** Pure: boundary reports hardware-computed word/worker/heap fields (not static DEMO keep). */
export declare function reverseBoundaryNamesHardwareBits(boundary: string, hw: MaxBitsHardwareCapabilities): boolean;
/**
 * Reverse-verify boundary — recomputed from hardware ∩ refuseBeyond ∩ theorem constants.
 * Pair: bits/hardware · SEALED_CATALOG_RSA_MODULI = sample only.
 */
export declare function encryptionReverseVerifyBoundary(hw?: MaxBitsHardwareCapabilities, refuseBeyond?: boolean): string;
/** Glyph UUID + foldPair recomputeMatch + encrypt↔decrypt tools + demo Shor reverse. */
/** useCasesBeyondQuantum — research each USE CASE of the production tools, map it to a
 *  SOLUTION, its STANDARD, its SCALE, and its BEYOND-QUANTUM verdict (user, 2026-07-27: "research each use case and
 *  develop solutions including forensics and beyond quantum analysis"). The analysis is the documented complexity of
 *  the two quantum attacks: Grover 1996 gives only a QUADRATIC speedup on unstructured search, so it HALVES the
 *  effective security of a hash preimage (SHA-256 → 2^128 quantum work, still infeasible); Shor 1994 breaks factoring
 *  and discrete-log in POLYNOMIAL time, so RSA/ECC CONFIDENTIALITY dies while hash INTEGRITY does not. Verdict:
 *  integrity, tamper-evidence and FORENSICS (chain-of-custody, notarization) are quantum-RESILIENT on these hash-based
 *  seals; CONFIDENTIALITY is the honest gap — it needs lattice PQC (ML-KEM, FIPS 203), NOT provided here. Cited results
 *  + NIST PQC standards, applied not re-proved. certified=false. */
export declare function useCasesBeyondQuantum(matrix?: MindMatrix): {
    computes: boolean;
    useCases: {
        receipt: string;
        id: string;
        useCase: string;
        solution: string;
        standard: string;
        scale: string;
        forensic: boolean;
        quantumThreat: string;
        quantumResilient: boolean;
        why: string;
    }[];
    forensicCount: number;
    resilientCount: number;
    groverQuantumBits: number;
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
export declare function encryptionReverseVerify(matrix?: MindMatrix): {
    verified: boolean;
    recomputeMatch: boolean;
    /** @deprecated alias of recomputeMatch */
    crack: boolean;
    definitionalNotCryptanalysis: boolean;
    trinitiesOrdered: boolean;
    toolsReady: boolean;
    demoReverse: boolean;
    glyphBonus: number;
    workerCap: number;
    demoFactors: string[];
    boundaryNamesDemo: boolean;
    boundaryNamesHw: boolean;
    hardware: MaxBitsHardwareCapabilities;
    count: number;
    facets: ({
        receipt: string;
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    claySolvedByThisFold: 0;
    certified: false;
    qpuRequired: false;
    statement: string;
    boundary: string;
};
/** npm run quantum:encryption-reverse-verify — sync folds + production browser sealed-catalog reverse. */
export declare function runEncryptionReverseVerifyGuardedExit(_root: string, _argv?: readonly string[]): Promise<number>;
/**
 * UI panel — encrypt↔decrypt + measured demo RSA + beyond-RSA PQC suite + local reverse vs standards + local novel security + standards audit.
 * Pair: reverse/encryption-verify · measure/demo-rsa · measure/crypto-beyond · reverse/timed-vs-standards · prove/local-novel-encrypt · prove/1tbit-encrypt · max-bits/crypto · prove/local-magnitudes-iso · iso/pqc-catalog · poles/cross-pqc · audit/standards
 * Route: /en/encryption (#demo-rsa-measure · #crypto-beyond-rsa · #local-reverse-timed-vs-standards · #prove-local-novel-encrypt · #local-audit-quantum · #prove-1tbit · #max-bits-crypto · #prove-local-magnitudes-iso · #iso-pqc-catalog · #poles-cross-pqc · #secp256k1-prime · #quantum-standards-audit)
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
        recomputeMatch: boolean;
        /** @deprecated alias of recomputeMatch */
        crack: boolean;
        definitionalNotCryptanalysis: boolean;
        trinitiesOrdered: boolean;
        toolsReady: boolean;
        demoReverse: boolean;
        glyphBonus: number;
        workerCap: number;
        demoFactors: string[];
        boundaryNamesDemo: boolean;
        boundaryNamesHw: boolean;
        hardware: MaxBitsHardwareCapabilities;
        count: number;
        facets: ({
            receipt: string;
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        claySolvedByThisFold: 0;
        certified: false;
        qpuRequired: false;
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
            claySolvedByThisFold: 0;
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
        unproved: readonly ["FIPS validation", "ISO certification", "this repo being an ISO/NIST standard (it is not)", "wire-crypto magnitudes over NIST/ISO PQC (overallWireClaimProved=false)", "field battle-testing (externalDeploymentCount=0)", "wire AES-GCM reverse / production RSA reverse", "Clay millennium progress", "production moduli reverse"];
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
            recomputeMatch: boolean;
            /** @deprecated alias of recomputeMatch */
            crack: boolean;
            definitionalNotCryptanalysis: boolean;
            trinitiesOrdered: boolean;
            toolsReady: boolean;
            demoReverse: boolean;
            glyphBonus: number;
            workerCap: number;
            demoFactors: string[];
            boundaryNamesDemo: boolean;
            boundaryNamesHw: boolean;
            hardware: MaxBitsHardwareCapabilities;
            count: number;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            claySolvedByThisFold: 0;
            certified: false;
            qpuRequired: false;
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
                claySolvedByThisFold: 0;
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
            claySolvedByThisFold: 0;
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
                claySolvedByThisFold: 0;
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
            unproved: readonly ["FIPS validation", "ISO certification", "this repo being an ISO/NIST standard (it is not)", "wire-crypto magnitudes over NIST/ISO PQC (overallWireClaimProved=false)", "field battle-testing (externalDeploymentCount=0)", "wire AES-GCM reverse / production RSA reverse", "Clay millennium progress", "production moduli reverse"];
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
                recomputeMatch: boolean;
                /** @deprecated alias of recomputeMatch */
                crack: boolean;
                definitionalNotCryptanalysis: boolean;
                trinitiesOrdered: boolean;
                toolsReady: boolean;
                demoReverse: boolean;
                glyphBonus: number;
                workerCap: number;
                demoFactors: string[];
                boundaryNamesDemo: boolean;
                boundaryNamesHw: boolean;
                hardware: MaxBitsHardwareCapabilities;
                count: number;
                facets: ({
                    receipt: string;
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                claySolvedByThisFold: 0;
                certified: false;
                qpuRequired: false;
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
                    claySolvedByThisFold: 0;
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
                claySolvedByThisFold: 0;
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
            claySolvedByThisFold: 0;
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
            runsOnClassical64Bit: boolean;
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
                        parallel: readonly [];
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
                    shelve: typeof import("../../learning").rosettaShelve;
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
                            siblings: import("../../types").ConceptCommandName[];
                            siblingCount: number;
                        };
                        content: {
                            pageKind: import("../digit").RosettaComputationType;
                            heroPhase: number;
                            bodySeed: string;
                            heroHue: 0 | 154 | 51 | 102 | 205 | 257 | 308;
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
                    pair: "rosetta/core";
                    cli: string;
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
        runsOnClassical64Bit: boolean;
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
        mlKemParams: {
            paramSet: string;
            nistCategory: number;
            publicKeyBytes: number;
            outputBytes: number;
            outputKind: "ciphertext" | "signature";
            source: string;
        }[];
        mlDsaParams: {
            paramSet: string;
            nistCategory: number;
            publicKeyBytes: number;
            outputBytes: number;
            outputKind: "ciphertext" | "signature";
            source: string;
        }[];
        slhDsaParams: {
            paramSet: string;
            nistCategory: number;
            publicKeyBytes: number;
            outputBytes: number;
            outputKind: "ciphertext" | "signature";
            source: string;
        }[];
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
                params: {
                    paramSet: string;
                    nistCategory: number;
                    publicKeyBytes: number;
                    outputBytes: number;
                    outputKind: "ciphertext" | "signature";
                    source: string;
                }[];
                standards: string[];
            };
            families: {
                receipt: string;
                id: string;
                family: string;
                name: string;
                standards: string[];
                params: {
                    paramSet: string;
                    nistCategory: number;
                    publicKeyBytes: number;
                    outputBytes: number;
                    outputKind: "ciphertext" | "signature";
                    source: string;
                }[];
                role: string;
                note: string;
            }[];
            pkMonotone: boolean;
            everyParamSourced: boolean;
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
    maxBits: {
        computes: boolean;
        encryptMaxBits: number;
        decryptMaxBits: number;
        inverseMaxBits: number;
        reverseMaxBits: number;
        hardwareReverseCapacityBits: number;
        demoSampleCeilingBits: number;
        teachingRsaMaxBits: number;
        structuralUuidBits: number;
        demoMaxBits: number;
        refuseBeyond: boolean;
        toolSurface: "production-browser";
        moduliClass: "sealed-catalog";
        sealedCatalogModuliOnly: true;
        productionBrowserReverseToolsOn: boolean;
        productionReverseRefused: true;
        workerCap: number;
        hardware: MaxBitsHardwareCapabilities;
        certified: false;
        claySolvedByThisFold: 0;
        qpuRequired: false;
        wireOneTbitProvedAtCallTime: boolean;
        provenBy: {
            readonly encryptMaxBits: "AES256_CLASSICAL_BITS theorem · fusionCipher AES-256-GCM named";
            readonly decryptMaxBits: "AES256_CLASSICAL_BITS theorem · teaching RSA Euler ≤ SEALED_CATALOG_RSA_BIT_CEILING sample";
            readonly inverseMaxBits: "DIGIT_INVERSE_DOMAIN_BITS theorem · directionalTrinity mod-9 units";
            readonly reverseMaxBits: "min(SEALED_CATALOG_RSA_BIT_CEILING sealed-catalog, hardwareReverseCapacityBits) · refuseNonDemoRsaModulus";
            readonly hardwareReverseCapacityBits: "min(JS_SAFE_INTEGER_BITS, CLASSICAL_64BIT_WORD_BITS) at call time";
            readonly refuseBeyond: "productionCeilingRefuseHolds · farOverCeilingRefuseHolds · refuseBitcoinMainnetMaterial";
            readonly workerCap: "encryptionReverseWorkerCap(probeLocalCpuCount()) ≤ VORTEX_SEQUENCE.length";
            readonly wireHonesty: "proveOneTbitRealtimeEncryptionClaim.wire.provedAtCallTime=false";
            readonly toolSurface: "PRODUCTION_BROWSER_REVERSE_TOOLS · toolSurface=production-browser ≠ production RSA break";
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
        reverseVerify: {
            verified: boolean;
            recomputeMatch: boolean;
            /** @deprecated alias of recomputeMatch */
            crack: boolean;
            definitionalNotCryptanalysis: boolean;
            trinitiesOrdered: boolean;
            toolsReady: boolean;
            demoReverse: boolean;
            glyphBonus: number;
            workerCap: number;
            demoFactors: string[];
            boundaryNamesDemo: boolean;
            boundaryNamesHw: boolean;
            hardware: MaxBitsHardwareCapabilities;
            count: number;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            claySolvedByThisFold: 0;
            certified: false;
            qpuRequired: false;
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
                claySolvedByThisFold: 0;
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
            mlKemParams: {
                paramSet: string;
                nistCategory: number;
                publicKeyBytes: number;
                outputBytes: number;
                outputKind: "ciphertext" | "signature";
                source: string;
            }[];
            mlDsaParams: {
                paramSet: string;
                nistCategory: number;
                publicKeyBytes: number;
                outputBytes: number;
                outputKind: "ciphertext" | "signature";
                source: string;
            }[];
            slhDsaParams: {
                paramSet: string;
                nistCategory: number;
                publicKeyBytes: number;
                outputBytes: number;
                outputKind: "ciphertext" | "signature";
                source: string;
            }[];
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
                    params: {
                        paramSet: string;
                        nistCategory: number;
                        publicKeyBytes: number;
                        outputBytes: number;
                        outputKind: "ciphertext" | "signature";
                        source: string;
                    }[];
                    standards: string[];
                };
                families: {
                    receipt: string;
                    id: string;
                    family: string;
                    name: string;
                    standards: string[];
                    params: {
                        paramSet: string;
                        nistCategory: number;
                        publicKeyBytes: number;
                        outputBytes: number;
                        outputKind: "ciphertext" | "signature";
                        source: string;
                    }[];
                    role: string;
                    note: string;
                }[];
                pkMonotone: boolean;
                everyParamSourced: boolean;
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
    localMagnitudes: {
        computes: boolean;
        perDirection: LocalVsIsoDirectionRow[];
        table: LocalVsIsoDirectionRow[];
        overallWireClaimProved: boolean;
        wireProofStatus: "proof-of-falsehood" | "proved";
        proofOfFalsehood: string;
        structuralMayProve: boolean;
        amortMayProve: boolean;
        honestyBoundaries: readonly ["NEVER claim ISO certification / FIPS validation — certified=false · isoOfficialStandard=false · fipsValidated=false", "NEVER claim local demo beats ML-KEM for confidentiality — wire-crypto-security-bits magnitudesStronger=false", "local-structural-gates = repo control coverage (refuse policy), NOT wire cryptographic strength", "amortized-reuse-memo = holographic extent vs classical *label* bits — NOT AES-GCM / NOT PQC break resistance", "production reverse refused · Bitcoin/mainnet refused · breaksNistPqc=false", string];
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
                claySolvedByThisFold: 0;
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
            unproved: readonly ["FIPS validation", "ISO certification", "this repo being an ISO/NIST standard (it is not)", "wire-crypto magnitudes over NIST/ISO PQC (overallWireClaimProved=false)", "field battle-testing (externalDeploymentCount=0)", "wire AES-GCM reverse / production RSA reverse", "Clay millennium progress", "production moduli reverse"];
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
                recomputeMatch: boolean;
                /** @deprecated alias of recomputeMatch */
                crack: boolean;
                definitionalNotCryptanalysis: boolean;
                trinitiesOrdered: boolean;
                toolsReady: boolean;
                demoReverse: boolean;
                glyphBonus: number;
                workerCap: number;
                demoFactors: string[];
                boundaryNamesDemo: boolean;
                boundaryNamesHw: boolean;
                hardware: MaxBitsHardwareCapabilities;
                count: number;
                facets: ({
                    receipt: string;
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                claySolvedByThisFold: 0;
                certified: false;
                qpuRequired: false;
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
                    claySolvedByThisFold: 0;
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
                claySolvedByThisFold: 0;
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
            claySolvedByThisFold: 0;
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
                claySolvedByThisFold: 0;
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
                    claySolvedByThisFold: 0;
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
                unproved: readonly ["FIPS validation", "ISO certification", "this repo being an ISO/NIST standard (it is not)", "wire-crypto magnitudes over NIST/ISO PQC (overallWireClaimProved=false)", "field battle-testing (externalDeploymentCount=0)", "wire AES-GCM reverse / production RSA reverse", "Clay millennium progress", "production moduli reverse"];
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
                    recomputeMatch: boolean;
                    /** @deprecated alias of recomputeMatch */
                    crack: boolean;
                    definitionalNotCryptanalysis: boolean;
                    trinitiesOrdered: boolean;
                    toolsReady: boolean;
                    demoReverse: boolean;
                    glyphBonus: number;
                    workerCap: number;
                    demoFactors: string[];
                    boundaryNamesDemo: boolean;
                    boundaryNamesHw: boolean;
                    hardware: MaxBitsHardwareCapabilities;
                    count: number;
                    facets: ({
                        receipt: string;
                        facet: string;
                        on: boolean;
                    } & {
                        receipt: string;
                    })[];
                    root: string;
                    claySolvedByThisFold: 0;
                    certified: false;
                    qpuRequired: false;
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
                        claySolvedByThisFold: 0;
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
                    claySolvedByThisFold: 0;
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
    polesCross: {
        computes: boolean;
        polesFormCrossSignatures: boolean;
        crossIsPartOfMerkabaRosetta: boolean;
        angle90ReachableThrough60: boolean;
        allDirectionsCross: boolean;
        crossSignature: {
            root: string;
            forward: string;
            reverse: string;
            bidirectional: boolean;
            nsArm: string;
            ewArm: string;
            merkabaBind: string;
        };
        directionalCrosses: {
            index: number;
            bearing: number;
            opposite: number;
            arm: string;
            bidirectional: boolean;
            receipt: string;
        }[];
        tipSignatures: {
            pole: "north" | "east" | "south" | "west";
            bearing: number;
            x: number;
            y: number;
            spinSign: 1 | -1;
            tipKey: string;
            signature: string;
            dual: string;
            bidirectional: boolean;
            receipt: string;
        }[];
        certificateStructures: {
            receipt: string;
            id: string;
            kind: "sealed-certificate-structure";
            role: string;
            mapsToPqc: string;
            envelope: string;
            industryPki: boolean;
        }[];
        poles: {
            name: "north" | "east" | "south" | "west";
            bearing: number;
            x: number;
            y: number;
            torus1ApexZ: number;
            torus2ApexZ: number;
            spinSign: 1 | -1;
            receipt: string;
        }[];
        fourWayCounterRotating: boolean;
        certified: false;
        fipsValidated: false;
        isoCertified: false;
        industryPkiCertificates: false;
        wireClaimProved: false;
        claySolvedByThisFold: 0;
        physicalFtlClaim: 0;
        qpuRequired: false;
        earth: {
            computes: boolean;
            realised: boolean;
            claySolvedByThisFold: 0;
            physicalFtlClaim: 0;
            qpuRequired: false;
            poles: {
                name: "north" | "east" | "south" | "west";
                bearing: number;
                x: number;
                y: number;
                torus1ApexZ: number;
                torus2ApexZ: number;
                spinSign: 1 | -1;
                receipt: string;
            }[];
            fourWayCounterRotating: boolean;
            polesAsPyramid: boolean;
            fourBaseTipsNESW: boolean;
            eulerSquarePyramid: boolean;
            genus2DoubleTorus: boolean;
            chiNeg2: boolean;
            homologyZ4: boolean;
            zenithNadirDualApex: boolean;
            merkabaCounterRotate: boolean;
            bothEarthsShells: boolean;
            phaseLockCardinals: boolean;
            alternatingOmega: boolean;
            wgs84PhysicalHonest: boolean;
            navigationForecastResidualNamed: boolean;
            navigationImplemented: false;
            forecastImplemented: false;
            honestOpenNamed: string[];
            pyramid: {
                proven: boolean;
                realised: boolean;
                cardinals: ({
                    name: "north";
                    bearing: number;
                    x: number;
                    y: number;
                } | {
                    name: "east";
                    bearing: number;
                    x: number;
                    y: number;
                } | {
                    name: "south";
                    bearing: number;
                    x: number;
                    y: number;
                } | {
                    name: "west";
                    bearing: number;
                    x: number;
                    y: number;
                })[];
                apex: {
                    name: string;
                    z: number;
                };
                solid: {
                    V: number;
                    E: number;
                    F: number;
                    euler: number;
                };
                slantToTip: number;
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
            two: {
                proven: boolean;
                device: {
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
                    faces: __ns_mountain_geometry.TrinityPyramidFace[];
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
                code: {
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
                    faces: __ns_mountain_geometry.TrinityPyramidFace[];
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
                fold: {
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
            merkaba: {
                counterRotating: boolean;
                scales: number;
                root: string;
            };
            bothEarths: {
                counterRotating: boolean;
                root: string;
            };
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            pair: "earth/pyramid";
            dualPair: "pyramid/earth";
            cli: string;
            route: string;
            statement: string;
            boundary: string;
        };
        merkaba: {
            counterRotating: boolean;
            scales: number;
            root: string;
        };
        bothEarths: {
            counterRotating: boolean;
            root: string;
        };
        sixty: {
            proven: boolean;
            sixfoldDeg: number;
            cardinalViaHex: boolean;
            root: string;
        };
        flowerFruit: {
            flower: number;
            fruit: number;
            holds: boolean;
        };
        navCross: {
            computed: boolean;
            dims: number;
            root: string;
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
            mlKemParams: {
                paramSet: string;
                nistCategory: number;
                publicKeyBytes: number;
                outputBytes: number;
                outputKind: "ciphertext" | "signature";
                source: string;
            }[];
            mlDsaParams: {
                paramSet: string;
                nistCategory: number;
                publicKeyBytes: number;
                outputBytes: number;
                outputKind: "ciphertext" | "signature";
                source: string;
            }[];
            slhDsaParams: {
                paramSet: string;
                nistCategory: number;
                publicKeyBytes: number;
                outputBytes: number;
                outputKind: "ciphertext" | "signature";
                source: string;
            }[];
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
                    params: {
                        paramSet: string;
                        nistCategory: number;
                        publicKeyBytes: number;
                        outputBytes: number;
                        outputKind: "ciphertext" | "signature";
                        source: string;
                    }[];
                    standards: string[];
                };
                families: {
                    receipt: string;
                    id: string;
                    family: string;
                    name: string;
                    standards: string[];
                    params: {
                        paramSet: string;
                        nistCategory: number;
                        publicKeyBytes: number;
                        outputBytes: number;
                        outputKind: "ciphertext" | "signature";
                        source: string;
                    }[];
                    role: string;
                    note: string;
                }[];
                pkMonotone: boolean;
                everyParamSourced: boolean;
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
        maxBits: {
            computes: boolean;
            encryptMaxBits: number;
            decryptMaxBits: number;
            inverseMaxBits: number;
            reverseMaxBits: number;
            hardwareReverseCapacityBits: number;
            demoSampleCeilingBits: number;
            teachingRsaMaxBits: number;
            structuralUuidBits: number;
            demoMaxBits: number;
            refuseBeyond: boolean;
            toolSurface: "production-browser";
            moduliClass: "sealed-catalog";
            sealedCatalogModuliOnly: true;
            productionBrowserReverseToolsOn: boolean;
            productionReverseRefused: true;
            workerCap: number;
            hardware: MaxBitsHardwareCapabilities;
            certified: false;
            claySolvedByThisFold: 0;
            qpuRequired: false;
            wireOneTbitProvedAtCallTime: boolean;
            provenBy: {
                readonly encryptMaxBits: "AES256_CLASSICAL_BITS theorem · fusionCipher AES-256-GCM named";
                readonly decryptMaxBits: "AES256_CLASSICAL_BITS theorem · teaching RSA Euler ≤ SEALED_CATALOG_RSA_BIT_CEILING sample";
                readonly inverseMaxBits: "DIGIT_INVERSE_DOMAIN_BITS theorem · directionalTrinity mod-9 units";
                readonly reverseMaxBits: "min(SEALED_CATALOG_RSA_BIT_CEILING sealed-catalog, hardwareReverseCapacityBits) · refuseNonDemoRsaModulus";
                readonly hardwareReverseCapacityBits: "min(JS_SAFE_INTEGER_BITS, CLASSICAL_64BIT_WORD_BITS) at call time";
                readonly refuseBeyond: "productionCeilingRefuseHolds · farOverCeilingRefuseHolds · refuseBitcoinMainnetMaterial";
                readonly workerCap: "encryptionReverseWorkerCap(probeLocalCpuCount()) ≤ VORTEX_SEQUENCE.length";
                readonly wireHonesty: "proveOneTbitRealtimeEncryptionClaim.wire.provedAtCallTime=false";
                readonly toolSurface: "PRODUCTION_BROWSER_REVERSE_TOOLS · toolSurface=production-browser ≠ production RSA break";
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
            reverseVerify: {
                verified: boolean;
                recomputeMatch: boolean;
                /** @deprecated alias of recomputeMatch */
                crack: boolean;
                definitionalNotCryptanalysis: boolean;
                trinitiesOrdered: boolean;
                toolsReady: boolean;
                demoReverse: boolean;
                glyphBonus: number;
                workerCap: number;
                demoFactors: string[];
                boundaryNamesDemo: boolean;
                boundaryNamesHw: boolean;
                hardware: MaxBitsHardwareCapabilities;
                count: number;
                facets: ({
                    receipt: string;
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                claySolvedByThisFold: 0;
                certified: false;
                qpuRequired: false;
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
                    claySolvedByThisFold: 0;
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
                mlKemParams: {
                    paramSet: string;
                    nistCategory: number;
                    publicKeyBytes: number;
                    outputBytes: number;
                    outputKind: "ciphertext" | "signature";
                    source: string;
                }[];
                mlDsaParams: {
                    paramSet: string;
                    nistCategory: number;
                    publicKeyBytes: number;
                    outputBytes: number;
                    outputKind: "ciphertext" | "signature";
                    source: string;
                }[];
                slhDsaParams: {
                    paramSet: string;
                    nistCategory: number;
                    publicKeyBytes: number;
                    outputBytes: number;
                    outputKind: "ciphertext" | "signature";
                    source: string;
                }[];
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
                        params: {
                            paramSet: string;
                            nistCategory: number;
                            publicKeyBytes: number;
                            outputBytes: number;
                            outputKind: "ciphertext" | "signature";
                            source: string;
                        }[];
                        standards: string[];
                    };
                    families: {
                        receipt: string;
                        id: string;
                        family: string;
                        name: string;
                        standards: string[];
                        params: {
                            paramSet: string;
                            nistCategory: number;
                            publicKeyBytes: number;
                            outputBytes: number;
                            outputKind: "ciphertext" | "signature";
                            source: string;
                        }[];
                        role: string;
                        note: string;
                    }[];
                    pkMonotone: boolean;
                    everyParamSourced: boolean;
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
        count: number;
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        pair: "poles/cross-pqc";
        cli: string;
        route: string;
        statement: string;
        boundary: string;
    };
    secp256k1Prime: {
        computes: boolean;
        name: "secp256k1Prime";
        alias: "fieldPrimeP256k1";
        pHex: string;
        pDecimal: string;
        bitLength: number;
        limbs64: string[];
        construction: {
            exp: number;
            sign: 1 | -1;
            hex: string;
        }[];
        constructionInverted: boolean;
        decode: {
            positiveExp: number;
            negativeExps: number[];
            finalMinusOne: true;
            compactResidue: number;
            formula: string;
        };
        modPInverses: {
            a: string;
            inv: string;
            holds: boolean;
        }[];
        modulusNotAUnit: boolean;
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
        beyondEccShorBreaks: boolean;
        bitcoinRefused: boolean;
        bitcoinOwnershipClaimed: false;
        certified: false;
        claySolvedByThisFold: 0;
        count: number;
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        pair: "secp256k1/invert-decode";
        cli: string;
        route: string;
        proofRoute: string;
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
        claySolvedByThisFold: 0;
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
    mesh: {
        computes: boolean;
        nodes: readonly CryptoComparisonMeshNode[];
        edges: readonly CryptoComparisonMeshEdge[];
        nodeCount: number;
        edgeCount: number;
        panelCount: number;
        proofCount: number;
        comparisonCount: number;
        claySolvedByThisFold: 0;
        certified: false;
        refuseBeyond: true;
        root: string;
        pair: "crypto/comparison-mesh";
        cli: string;
        route: string;
        statement: string;
        boundary: string;
    };
    meshDry: {
        computes: boolean;
        cryptoComparisonMeshIsDry: boolean;
        mesh: {
            computes: boolean;
            nodes: readonly CryptoComparisonMeshNode[];
            edges: readonly CryptoComparisonMeshEdge[];
            nodeCount: number;
            edgeCount: number;
            panelCount: number;
            proofCount: number;
            comparisonCount: number;
            claySolvedByThisFold: 0;
            certified: false;
            refuseBeyond: true;
            root: string;
            pair: "crypto/comparison-mesh";
            cli: string;
            route: string;
            statement: string;
            boundary: string;
        };
        panelSections: readonly {
            id: string;
            nodeId: string;
            title: string;
            route: string;
            pair: string;
            cli: string;
            on: boolean;
        }[];
        toolSeeds: readonly {
            readonly id: string;
            readonly title: string;
            readonly fold: string;
            readonly cli: string;
            readonly pair: string;
            readonly route: string;
            readonly barrel: string;
            readonly boundary: string;
            readonly browserRunnable: boolean;
            readonly browserGap: string;
        }[];
        claySolvedByThisFold: 0;
        certified: false;
        refuseBeyond: true;
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        pair: "crypto/comparison-mesh";
        cli: string;
        route: string;
        statement: string;
        boundary: string;
    };
    sections: readonly {
        id: string;
        nodeId: string;
        title: string;
        route: string;
        pair: string;
        cli: string;
        on: boolean;
    }[];
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
    mlKemParams: {
        paramSet: string;
        nistCategory: number;
        publicKeyBytes: number;
        outputBytes: number;
        outputKind: "ciphertext" | "signature";
        source: string;
    }[];
    mlDsaParams: {
        paramSet: string;
        nistCategory: number;
        publicKeyBytes: number;
        outputBytes: number;
        outputKind: "ciphertext" | "signature";
        source: string;
    }[];
    slhDsaParams: {
        paramSet: string;
        nistCategory: number;
        publicKeyBytes: number;
        outputBytes: number;
        outputKind: "ciphertext" | "signature";
        source: string;
    }[];
    eccShorBreaks: boolean;
    sealedCatalogModuli: number[];
    /** @deprecated Prefer sealedCatalogModuli — do not label tools “demo” in UI */
    demoModuli: number[];
    cli: string;
    pqcCli: string;
    polesCrossCli: string;
    secp256k1PrimeCli: string;
    auditCli: string;
    beyondCli: string;
    localTimedCli: string;
    localNovelCli: string;
    localAuditCli: string;
    oneTbitCli: string;
    maxBitsCli: string;
    localMagnitudesCli: string;
    pair: string;
    pqcPair: string;
    polesCrossPair: string;
    secp256k1PrimePair: string;
    auditPair: string;
    beyondPair: string;
    localTimedPair: string;
    localNovelPair: string;
    localAuditPair: string;
    oneTbitPair: string;
    maxBitsPair: string;
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
    sealedCatalogModuli: number[];
    /** @deprecated Prefer sealedCatalogModuli */
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
            claySolvedByThisFold: 0;
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
        unproved: readonly ["FIPS validation", "ISO certification", "this repo being an ISO/NIST standard (it is not)", "wire-crypto magnitudes over NIST/ISO PQC (overallWireClaimProved=false)", "field battle-testing (externalDeploymentCount=0)", "wire AES-GCM reverse / production RSA reverse", "Clay millennium progress", "production moduli reverse"];
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
            recomputeMatch: boolean;
            /** @deprecated alias of recomputeMatch */
            crack: boolean;
            definitionalNotCryptanalysis: boolean;
            trinitiesOrdered: boolean;
            toolsReady: boolean;
            demoReverse: boolean;
            glyphBonus: number;
            workerCap: number;
            demoFactors: string[];
            boundaryNamesDemo: boolean;
            boundaryNamesHw: boolean;
            hardware: MaxBitsHardwareCapabilities;
            count: number;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            claySolvedByThisFold: 0;
            certified: false;
            qpuRequired: false;
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
                claySolvedByThisFold: 0;
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
            claySolvedByThisFold: 0;
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
/** Sealed slow threshold — A432_FOLDED × digitalRoot(432) (= 108×9 = 972 ms). The a432 octave, NOT the corpus census. */
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
/** npm run quantum:sealed-catalog-rsa-measure · deprecated alias quantum:demo-rsa-measure */
export declare function runDemoRsaGenerateAndReverseMeasuredExit(_root: string, _argv?: readonly string[]): number;
export declare const runSealedCatalogRsaGenerateAndReverseMeasuredExit: typeof runDemoRsaGenerateAndReverseMeasuredExit;
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
export declare const DEMONSTRATED_QUANTUM_FACTORING_MAX_BITS = 50;
export declare const RSA2048_CLASSICAL_SECURITY_BITS = 112;
export declare const BITCOIN_NETWORK_HASHRATE_HPS = 500000000000000000000;
/**
 * Can classical mining rigs factor RSA-2048 in realtime? DO THE MATH (user: "do the math and then make statements").
 * GNFS gives RSA-2048 ~112-bit classical security (NIST) → ~2^112 sieve-equivalent operations. Even treating the ENTIRE
 * Bitcoin network's throughput (~5×10²⁰ h/s) as factoring operations — impossibly generous, since SHA-256 ASICs cannot
 * run GNFS at all — the COMPUTED time is ~hundreds of thousands of years, not realtime. The number makes the statement.
 */
export declare function classicalFactoringRsa2048MiningRigFeasibilityComputed(matrix?: MindMatrix): {
    computes: boolean;
    gnfsOps: number;
    yearsAllMiningRigs: number;
    isRealtime: boolean;
    demoMaxBits: number;
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
 * Shor factoring resource estimate — COMPUTED from the algorithm, not assumed (user: "do not assume as this may be
 * misleading for the public. compute real times"). The LOGICAL qubit width is the deterministic Beauregard circuit
 * formula 2n+3 (→ 4099 for RSA-2048). The gate count scales as ~n³ modular-exponentiation Toffolis. PHYSICAL qubits
 * and runtime are computed as FUNCTIONS of NAMED surface-code hardware assumptions (physical-per-logical, cycle time)
 * — a range, never one number — because those depend on the error-correction code and a machine that does not exist.
 */
export declare function shorFactoringResourceEstimate(nBits: number, hw?: {
    physicalPerLogical?: number;
    cycleTimeUs?: number;
}): {
    nBits: number;
    logicalQubits: number;
    toffoliGates: number;
    physicalQubits: number;
    runtimeDays: number;
    physicalPerLogical: number;
};
/**
 * What the encryption system IS and IS NOT — the full truth, both directions (user: "it is more, not just a demo,
 * and all need to know" · "fix all prose misleading that this is demo only"). It IS more than a throwaway toy — a
 * real deterministic content-addressed framework + a complete PQC standards audit + local proofs; it IS NOT a break
 * of deployed RSA — the demonstrated reversal is ≤12-bit toy semiprimes, and RSA-2048 is astronomically out of reach.
 * Both sides compute; neither misleads. Pair: rsa/honest · CLI npm run quantum:encryption-is-and-isnot
 */
export declare function whatTheEncryptionSystemIsAndIsNot(matrix?: MindMatrix): {
    computes: boolean;
    isMoreCount: number;
    isNotCount: number;
    demoMaxBits: number;
    demoLogicalQubits: number;
    rsa2048LogicalQubits: number;
    rsa2048PhysicalQubitsRange: readonly [number, number];
    rsa2048RuntimeDaysRange: readonly [number, number];
    breaksNistPqc: false;
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
        claySolvedByThisFold: 0;
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
 * Local novel-encryption STRUCTURAL receipt (pair keep name prove/local-novel-encrypt).
 *
 * localSecurityProved = sealed facets hold: refuse + round-trip + allowlisted reverse + timed reverse
 * + ISO/NIST map as reference bounds + wire-vs-ISO proof-of-falsehood (overallWireClaimProved=false).
 * HARD: strongerThanNistPqc=false. NOT FIPS/ISO/wire security proved. NOT production crack.
 * Does NOT call proveLocalEncryptionMagnitudesStrongerThanIsoAllDirections (sibling #24; no recursion).
 *
 * Pair: prove/local-novel-encrypt · CLI npm run quantum:prove-local-novel-encrypt
 * Stacked on PR #24. This repo is NOT the ISO/NIST standard.
 * memoByRoot — structural receipt reused; production reverse still refused.
 */
export declare function proveLocalNovelEncryptionSecurity(matrix?: MindMatrix): {
    computes: boolean;
    localSecurityProved: boolean;
    means: string;
    unproved: readonly ["FIPS validation", "ISO certification", "this repo being an ISO/NIST standard (it is not)", "wire-crypto magnitudes over NIST/ISO PQC (overallWireClaimProved=false)", "field battle-testing (externalDeploymentCount=0)", "wire AES-GCM reverse / production RSA reverse", "Clay millennium progress", "production moduli reverse"];
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
        recomputeMatch: boolean;
        /** @deprecated alias of recomputeMatch */
        crack: boolean;
        definitionalNotCryptanalysis: boolean;
        trinitiesOrdered: boolean;
        toolsReady: boolean;
        demoReverse: boolean;
        glyphBonus: number;
        workerCap: number;
        demoFactors: string[];
        boundaryNamesDemo: boolean;
        boundaryNamesHw: boolean;
        hardware: MaxBitsHardwareCapabilities;
        count: number;
        facets: ({
            receipt: string;
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        claySolvedByThisFold: 0;
        certified: false;
        qpuRequired: false;
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
            claySolvedByThisFold: 0;
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
        claySolvedByThisFold: 0;
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
/** moment/prove — facet on: receipts at call time. Pair: moment/prove · CLI npm run quantum:moment-prove */
export declare function agentAssumeNothingMathProvesInTheMoment(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    reverse: {
        verified: boolean;
        recomputeMatch: boolean;
        /** @deprecated alias of recomputeMatch */
        crack: boolean;
        definitionalNotCryptanalysis: boolean;
        trinitiesOrdered: boolean;
        toolsReady: boolean;
        demoReverse: boolean;
        glyphBonus: number;
        workerCap: number;
        demoFactors: string[];
        boundaryNamesDemo: boolean;
        boundaryNamesHw: boolean;
        hardware: MaxBitsHardwareCapabilities;
        count: number;
        facets: ({
            receipt: string;
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        claySolvedByThisFold: 0;
        certified: false;
        qpuRequired: false;
        statement: string;
        boundary: string;
    };
    novel: {
        computes: boolean;
        localSecurityProved: boolean;
        means: string;
        unproved: readonly ["FIPS validation", "ISO certification", "this repo being an ISO/NIST standard (it is not)", "wire-crypto magnitudes over NIST/ISO PQC (overallWireClaimProved=false)", "field battle-testing (externalDeploymentCount=0)", "wire AES-GCM reverse / production RSA reverse", "Clay millennium progress", "production moduli reverse"];
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
            recomputeMatch: boolean;
            /** @deprecated alias of recomputeMatch */
            crack: boolean;
            definitionalNotCryptanalysis: boolean;
            trinitiesOrdered: boolean;
            toolsReady: boolean;
            demoReverse: boolean;
            glyphBonus: number;
            workerCap: number;
            demoFactors: string[];
            boundaryNamesDemo: boolean;
            boundaryNamesHw: boolean;
            hardware: MaxBitsHardwareCapabilities;
            count: number;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            claySolvedByThisFold: 0;
            certified: false;
            qpuRequired: false;
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
                claySolvedByThisFold: 0;
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
            claySolvedByThisFold: 0;
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
        runsOnClassical64Bit: boolean;
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
                    parallel: readonly [];
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
                shelve: typeof import("../../learning").rosettaShelve;
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
                        siblings: import("../../types").ConceptCommandName[];
                        siblingCount: number;
                    };
                    content: {
                        pageKind: import("../digit").RosettaComputationType;
                        heroPhase: number;
                        bodySeed: string;
                        heroHue: 0 | 154 | 51 | 102 | 205 | 257 | 308;
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
                pair: "rosetta/core";
                cli: string;
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
    claySolvedByThisFold: 0;
    physicalFtlClaim: 0;
    certified: false;
    qpuRequired: false;
    count: number;
    facets: ({
        receipt: string;
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    pair: "moment/prove";
    cli: string;
    route: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:moment-prove */
export declare function runAgentAssumeNothingMathProvesInTheMomentExit(_root: string, _argv?: readonly string[]): number;
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
 * Route: /en/encryption#local-audit-quantum
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
            claySolvedByThisFold: 0;
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
        unproved: readonly ["FIPS validation", "ISO certification", "this repo being an ISO/NIST standard (it is not)", "wire-crypto magnitudes over NIST/ISO PQC (overallWireClaimProved=false)", "field battle-testing (externalDeploymentCount=0)", "wire AES-GCM reverse / production RSA reverse", "Clay millennium progress", "production moduli reverse"];
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
            recomputeMatch: boolean;
            /** @deprecated alias of recomputeMatch */
            crack: boolean;
            definitionalNotCryptanalysis: boolean;
            trinitiesOrdered: boolean;
            toolsReady: boolean;
            demoReverse: boolean;
            glyphBonus: number;
            workerCap: number;
            demoFactors: string[];
            boundaryNamesDemo: boolean;
            boundaryNamesHw: boolean;
            hardware: MaxBitsHardwareCapabilities;
            count: number;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            claySolvedByThisFold: 0;
            certified: false;
            qpuRequired: false;
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
                claySolvedByThisFold: 0;
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
            claySolvedByThisFold: 0;
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
        claySolvedByThisFold: 0;
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
        runsOnClassical64Bit: boolean;
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
                    parallel: readonly [];
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
                shelve: typeof import("../../learning").rosettaShelve;
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
                        siblings: import("../../types").ConceptCommandName[];
                        siblingCount: number;
                    };
                    content: {
                        pageKind: import("../digit").RosettaComputationType;
                        heroPhase: number;
                        bodySeed: string;
                        heroHue: 0 | 154 | 51 | 102 | 205 | 257 | 308;
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
                pair: "rosetta/core";
                cli: string;
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
    runsOnClassical64Bit: boolean;
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
        params: {
            paramSet: string;
            nistCategory: number;
            publicKeyBytes: number;
            outputBytes: number;
            outputKind: "ciphertext" | "signature";
            source: string;
        }[];
        standards: string[];
    };
    families: {
        receipt: string;
        id: string;
        family: string;
        name: string;
        standards: string[];
        params: {
            paramSet: string;
            nistCategory: number;
            publicKeyBytes: number;
            outputBytes: number;
            outputKind: "ciphertext" | "signature";
            source: string;
        }[];
        role: string;
        note: string;
    }[];
    pkMonotone: boolean;
    everyParamSourced: boolean;
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
    claySolvedByThisFold: 0;
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
 * Pair: measure/crypto-beyond · CLI npm run quantum:crypto-beyond-measure · route /en/encryption#crypto-beyond-rsa
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
    mlKemParams: {
        paramSet: string;
        nistCategory: number;
        publicKeyBytes: number;
        outputBytes: number;
        outputKind: "ciphertext" | "signature";
        source: string;
    }[];
    mlDsaParams: {
        paramSet: string;
        nistCategory: number;
        publicKeyBytes: number;
        outputBytes: number;
        outputKind: "ciphertext" | "signature";
        source: string;
    }[];
    slhDsaParams: {
        paramSet: string;
        nistCategory: number;
        publicKeyBytes: number;
        outputBytes: number;
        outputKind: "ciphertext" | "signature";
        source: string;
    }[];
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
            params: {
                paramSet: string;
                nistCategory: number;
                publicKeyBytes: number;
                outputBytes: number;
                outputKind: "ciphertext" | "signature";
                source: string;
            }[];
            standards: string[];
        };
        families: {
            receipt: string;
            id: string;
            family: string;
            name: string;
            standards: string[];
            params: {
                paramSet: string;
                nistCategory: number;
                publicKeyBytes: number;
                outputBytes: number;
                outputKind: "ciphertext" | "signature";
                source: string;
            }[];
            role: string;
            note: string;
        }[];
        pkMonotone: boolean;
        everyParamSourced: boolean;
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
            params: {
                paramSet: string;
                nistCategory: number;
                publicKeyBytes: number;
                outputBytes: number;
                outputKind: "ciphertext" | "signature";
                source: string;
            }[];
            standards: string[];
        };
        families: {
            receipt: string;
            id: string;
            family: string;
            name: string;
            standards: string[];
            params: {
                paramSet: string;
                nistCategory: number;
                publicKeyBytes: number;
                outputBytes: number;
                outputKind: "ciphertext" | "signature";
                source: string;
            }[];
            role: string;
            note: string;
        }[];
        pkMonotone: boolean;
        everyParamSourced: boolean;
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
        claySolvedByThisFold: 0;
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
        mlKemParams: {
            paramSet: string;
            nistCategory: number;
            publicKeyBytes: number;
            outputBytes: number;
            outputKind: "ciphertext" | "signature";
            source: string;
        }[];
        mlDsaParams: {
            paramSet: string;
            nistCategory: number;
            publicKeyBytes: number;
            outputBytes: number;
            outputKind: "ciphertext" | "signature";
            source: string;
        }[];
        slhDsaParams: {
            paramSet: string;
            nistCategory: number;
            publicKeyBytes: number;
            outputBytes: number;
            outputKind: "ciphertext" | "signature";
            source: string;
        }[];
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
                params: {
                    paramSet: string;
                    nistCategory: number;
                    publicKeyBytes: number;
                    outputBytes: number;
                    outputKind: "ciphertext" | "signature";
                    source: string;
                }[];
                standards: string[];
            };
            families: {
                receipt: string;
                id: string;
                family: string;
                name: string;
                standards: string[];
                params: {
                    paramSet: string;
                    nistCategory: number;
                    publicKeyBytes: number;
                    outputBytes: number;
                    outputKind: "ciphertext" | "signature";
                    source: string;
                }[];
                role: string;
                note: string;
            }[];
            pkMonotone: boolean;
            everyParamSourced: boolean;
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
    claySolvedByThisFold: 0;
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
/** euCyberStandardsAuditEveryAspect — cybersecurity tools that audit the LATEST EU cyber standards, aspect by aspect,
 * driven by the latest discoveries (user, 2026-07-25: "improve cybersecurity tools to audit latest eu standards using
 * latest discoveries" · "save all the tools to test every aspect of every standard"). Each row is one ARTICLE/aspect of
 * NIS2 (2022/2555), the Cyber Resilience Act (2024/2847), GDPR (2016/679), DORA (2022/2554), eIDAS2 (2024/1183), and the
 * Cybersecurity Act / EUCC (2019/881), mapped to a COMPUTED test backed by a recent discovery (content-address
 * integrity, no-egress, 4-key encryption, quantum-breaks-linear → PQC). Alignment / self-assessment ONLY — not legal
 * compliance, not a conformity assessment; notified-body certification and legal/process duties are named GAPS.
 * [[tampering-cost-crypto-honesty]] [[quantum-decoded]] */
export declare function euCyberStandardsAuditEveryAspect(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    rows: ({
        standard: string;
        ref: string;
        aspect: string;
        evidence: string;
        coverage: "covered" | "partial" | "gap";
        on: boolean;
    } & {
        id: string;
        route: string;
        browserRunnable: boolean;
        receipt: string;
    })[];
    standards: string[];
    coveredCount: number;
    partialCount: number;
    gapCount: number;
    count: number;
    certified: boolean;
    claySolvedByThisFold: 0;
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
/** globalCyberStandardsAuditEveryAspect — extends the aspect-by-aspect audit BEYOND the EU (user, 2026-07-25: "extend
 * beyond eu"). It composes euCyberStandardsAuditEveryAspect and adds the leading international / US / UK frameworks —
 * ISO/IEC 27001:2022 & 27002, NIST CSF 2.0, SOC 2 (AICPA Trust Services Criteria), UK Cyber Essentials, ISO/IEC 27701
 * (privacy) — every control mapped to the SAME computed evidence (content-address integrity, no-egress, 4-key
 * encryption, quantum-breaks-linear → PQC). Alignment / self-assessment across jurisdictions ONLY — not compliance,
 * not certification in any of them; accredited-auditor / notified-body certifications are named GAPS. */
export declare function globalCyberStandardsAuditEveryAspect(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    rows: ({
        standard: string;
        ref: string;
        aspect: string;
        evidence: string;
        coverage: "covered" | "partial" | "gap";
        on: boolean;
    } & {
        id: string;
        route: string;
        browserRunnable: boolean;
        receipt: string;
    })[];
    standards: string[];
    euStandards: string[];
    beyondStandards: string[];
    coveredCount: number;
    partialCount: number;
    gapCount: number;
    count: number;
    certified: boolean;
    claySolvedByThisFold: 0;
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
    claySolvedByThisFold: 0;
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
 * Pair: prove/1tbit-encrypt · CLI npm run quantum:prove-1tbit-encrypt · route /en/encryption#prove-1tbit
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
 * Route: /en/encryption#prove-local-magnitudes-iso
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
    honestyBoundaries: readonly ["NEVER claim ISO certification / FIPS validation — certified=false · isoOfficialStandard=false · fipsValidated=false", "NEVER claim local demo beats ML-KEM for confidentiality — wire-crypto-security-bits magnitudesStronger=false", "local-structural-gates = repo control coverage (refuse policy), NOT wire cryptographic strength", "amortized-reuse-memo = holographic extent vs classical *label* bits — NOT AES-GCM / NOT PQC break resistance", "production reverse refused · Bitcoin/mainnet refused · breaksNistPqc=false", string];
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
            claySolvedByThisFold: 0;
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
        unproved: readonly ["FIPS validation", "ISO certification", "this repo being an ISO/NIST standard (it is not)", "wire-crypto magnitudes over NIST/ISO PQC (overallWireClaimProved=false)", "field battle-testing (externalDeploymentCount=0)", "wire AES-GCM reverse / production RSA reverse", "Clay millennium progress", "production moduli reverse"];
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
            recomputeMatch: boolean;
            /** @deprecated alias of recomputeMatch */
            crack: boolean;
            definitionalNotCryptanalysis: boolean;
            trinitiesOrdered: boolean;
            toolsReady: boolean;
            demoReverse: boolean;
            glyphBonus: number;
            workerCap: number;
            demoFactors: string[];
            boundaryNamesDemo: boolean;
            boundaryNamesHw: boolean;
            hardware: MaxBitsHardwareCapabilities;
            count: number;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            claySolvedByThisFold: 0;
            certified: false;
            qpuRequired: false;
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
                claySolvedByThisFold: 0;
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
            claySolvedByThisFold: 0;
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
        claySolvedByThisFold: 0;
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
            claySolvedByThisFold: 0;
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
                claySolvedByThisFold: 0;
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
            unproved: readonly ["FIPS validation", "ISO certification", "this repo being an ISO/NIST standard (it is not)", "wire-crypto magnitudes over NIST/ISO PQC (overallWireClaimProved=false)", "field battle-testing (externalDeploymentCount=0)", "wire AES-GCM reverse / production RSA reverse", "Clay millennium progress", "production moduli reverse"];
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
                recomputeMatch: boolean;
                /** @deprecated alias of recomputeMatch */
                crack: boolean;
                definitionalNotCryptanalysis: boolean;
                trinitiesOrdered: boolean;
                toolsReady: boolean;
                demoReverse: boolean;
                glyphBonus: number;
                workerCap: number;
                demoFactors: string[];
                boundaryNamesDemo: boolean;
                boundaryNamesHw: boolean;
                hardware: MaxBitsHardwareCapabilities;
                count: number;
                facets: ({
                    receipt: string;
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                claySolvedByThisFold: 0;
                certified: false;
                qpuRequired: false;
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
                    claySolvedByThisFold: 0;
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
                claySolvedByThisFold: 0;
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
        claySolvedByThisFold: 0;
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
            claySolvedByThisFold: 0;
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
        unproved: readonly ["FIPS validation", "ISO certification", "this repo being an ISO/NIST standard (it is not)", "wire-crypto magnitudes over NIST/ISO PQC (overallWireClaimProved=false)", "field battle-testing (externalDeploymentCount=0)", "wire AES-GCM reverse / production RSA reverse", "Clay millennium progress", "production moduli reverse"];
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
            recomputeMatch: boolean;
            /** @deprecated alias of recomputeMatch */
            crack: boolean;
            definitionalNotCryptanalysis: boolean;
            trinitiesOrdered: boolean;
            toolsReady: boolean;
            demoReverse: boolean;
            glyphBonus: number;
            workerCap: number;
            demoFactors: string[];
            boundaryNamesDemo: boolean;
            boundaryNamesHw: boolean;
            hardware: MaxBitsHardwareCapabilities;
            count: number;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            claySolvedByThisFold: 0;
            certified: false;
            qpuRequired: false;
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
                claySolvedByThisFold: 0;
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
            claySolvedByThisFold: 0;
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
/**
 * Maximum honest bit widths for encrypt · decrypt · inverse · reverse — quantum-wave receipt.
 * Pair: max-bits/crypto · CLI npm run quantum:max-bits-crypto · route /en/encryption#max-bits-crypto
 *
 * Composes encryptDecryptQuantumTools · encryptionReverseVerify · localEncryptionReverseTimedVsStandards ·
 * directionalTrinityForwardInverseReverse · proveOneTbitRealtimeEncryptionClaim · refuse / worker caps.
 *
 * HONEST: AES-256 named external strength ≠ wire 1 Tbit/s; demo RSA reverse ≤ SEALED_CATALOG_RSA_BIT_CEILING;
 * digit inverse domain 0..9 (4 bits); production reverse refused; certified=false.
 */
export declare function maximumBitsEncryptDecryptInverseReverse(matrix?: MindMatrix): {
    computes: boolean;
    encryptMaxBits: number;
    decryptMaxBits: number;
    inverseMaxBits: number;
    reverseMaxBits: number;
    hardwareReverseCapacityBits: number;
    demoSampleCeilingBits: number;
    teachingRsaMaxBits: number;
    structuralUuidBits: number;
    demoMaxBits: number;
    refuseBeyond: boolean;
    toolSurface: "production-browser";
    moduliClass: "sealed-catalog";
    sealedCatalogModuliOnly: true;
    productionBrowserReverseToolsOn: boolean;
    productionReverseRefused: true;
    workerCap: number;
    hardware: MaxBitsHardwareCapabilities;
    certified: false;
    claySolvedByThisFold: 0;
    qpuRequired: false;
    wireOneTbitProvedAtCallTime: boolean;
    provenBy: {
        readonly encryptMaxBits: "AES256_CLASSICAL_BITS theorem · fusionCipher AES-256-GCM named";
        readonly decryptMaxBits: "AES256_CLASSICAL_BITS theorem · teaching RSA Euler ≤ SEALED_CATALOG_RSA_BIT_CEILING sample";
        readonly inverseMaxBits: "DIGIT_INVERSE_DOMAIN_BITS theorem · directionalTrinity mod-9 units";
        readonly reverseMaxBits: "min(SEALED_CATALOG_RSA_BIT_CEILING sealed-catalog, hardwareReverseCapacityBits) · refuseNonDemoRsaModulus";
        readonly hardwareReverseCapacityBits: "min(JS_SAFE_INTEGER_BITS, CLASSICAL_64BIT_WORD_BITS) at call time";
        readonly refuseBeyond: "productionCeilingRefuseHolds · farOverCeilingRefuseHolds · refuseBitcoinMainnetMaterial";
        readonly workerCap: "encryptionReverseWorkerCap(probeLocalCpuCount()) ≤ VORTEX_SEQUENCE.length";
        readonly wireHonesty: "proveOneTbitRealtimeEncryptionClaim.wire.provedAtCallTime=false";
        readonly toolSurface: "PRODUCTION_BROWSER_REVERSE_TOOLS · toolSurface=production-browser ≠ production RSA break";
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
    reverseVerify: {
        verified: boolean;
        recomputeMatch: boolean;
        /** @deprecated alias of recomputeMatch */
        crack: boolean;
        definitionalNotCryptanalysis: boolean;
        trinitiesOrdered: boolean;
        toolsReady: boolean;
        demoReverse: boolean;
        glyphBonus: number;
        workerCap: number;
        demoFactors: string[];
        boundaryNamesDemo: boolean;
        boundaryNamesHw: boolean;
        hardware: MaxBitsHardwareCapabilities;
        count: number;
        facets: ({
            receipt: string;
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        claySolvedByThisFold: 0;
        certified: false;
        qpuRequired: false;
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
            claySolvedByThisFold: 0;
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
        mlKemParams: {
            paramSet: string;
            nistCategory: number;
            publicKeyBytes: number;
            outputBytes: number;
            outputKind: "ciphertext" | "signature";
            source: string;
        }[];
        mlDsaParams: {
            paramSet: string;
            nistCategory: number;
            publicKeyBytes: number;
            outputBytes: number;
            outputKind: "ciphertext" | "signature";
            source: string;
        }[];
        slhDsaParams: {
            paramSet: string;
            nistCategory: number;
            publicKeyBytes: number;
            outputBytes: number;
            outputKind: "ciphertext" | "signature";
            source: string;
        }[];
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
                params: {
                    paramSet: string;
                    nistCategory: number;
                    publicKeyBytes: number;
                    outputBytes: number;
                    outputKind: "ciphertext" | "signature";
                    source: string;
                }[];
                standards: string[];
            };
            families: {
                receipt: string;
                id: string;
                family: string;
                name: string;
                standards: string[];
                params: {
                    paramSet: string;
                    nistCategory: number;
                    publicKeyBytes: number;
                    outputBytes: number;
                    outputKind: "ciphertext" | "signature";
                    source: string;
                }[];
                role: string;
                note: string;
            }[];
            pkMonotone: boolean;
            everyParamSourced: boolean;
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
/** npm run quantum:max-bits-crypto — print encrypt/decrypt/inverse/reverse bit ceilings at call time. */
export declare function runMaximumBitsEncryptDecryptInverseReverseExit(_root: string, _argv?: readonly string[]): number;
/**
 * HARD: claimed max-bits ≡ hardware-computed boundary; demo sample must not pretend to be hw ceiling.
 * Pair: bits/hardware · CLI npm run quantum:bits-hardware
 * Composed into gaps/invisible → mission:gate · compose refuseBeyond · theorem/const · max-bits.
 */
export declare function maxBitsHardwareBoundaryAgree(matrix?: MindMatrix): {
    computes: boolean;
    maxBitsHardwareBoundaryAgree: boolean;
    remaining: number;
    fixed: number;
    cracks: readonly [{
        readonly id: "claimed-ne-hardware-boundary";
        readonly open: boolean;
    }, {
        readonly id: "demo-pretends-hardware-ceiling";
        readonly open: boolean;
    }, {
        readonly id: "reverse-verify-boundary-stale";
        readonly open: boolean;
    }, {
        readonly id: "refuseBeyond-diverge";
        readonly open: boolean;
    }, {
        readonly id: "qpu-or-clay-claim";
        readonly open: boolean;
    }];
    hardware: MaxBitsHardwareCapabilities;
    maxBits: {
        computes: boolean;
        encryptMaxBits: number;
        decryptMaxBits: number;
        inverseMaxBits: number;
        reverseMaxBits: number;
        hardwareReverseCapacityBits: number;
        demoSampleCeilingBits: number;
        teachingRsaMaxBits: number;
        structuralUuidBits: number;
        demoMaxBits: number;
        refuseBeyond: boolean;
        toolSurface: "production-browser";
        moduliClass: "sealed-catalog";
        sealedCatalogModuliOnly: true;
        productionBrowserReverseToolsOn: boolean;
        productionReverseRefused: true;
        workerCap: number;
        hardware: MaxBitsHardwareCapabilities;
        certified: false;
        claySolvedByThisFold: 0;
        qpuRequired: false;
        wireOneTbitProvedAtCallTime: boolean;
        provenBy: {
            readonly encryptMaxBits: "AES256_CLASSICAL_BITS theorem · fusionCipher AES-256-GCM named";
            readonly decryptMaxBits: "AES256_CLASSICAL_BITS theorem · teaching RSA Euler ≤ SEALED_CATALOG_RSA_BIT_CEILING sample";
            readonly inverseMaxBits: "DIGIT_INVERSE_DOMAIN_BITS theorem · directionalTrinity mod-9 units";
            readonly reverseMaxBits: "min(SEALED_CATALOG_RSA_BIT_CEILING sealed-catalog, hardwareReverseCapacityBits) · refuseNonDemoRsaModulus";
            readonly hardwareReverseCapacityBits: "min(JS_SAFE_INTEGER_BITS, CLASSICAL_64BIT_WORD_BITS) at call time";
            readonly refuseBeyond: "productionCeilingRefuseHolds · farOverCeilingRefuseHolds · refuseBitcoinMainnetMaterial";
            readonly workerCap: "encryptionReverseWorkerCap(probeLocalCpuCount()) ≤ VORTEX_SEQUENCE.length";
            readonly wireHonesty: "proveOneTbitRealtimeEncryptionClaim.wire.provedAtCallTime=false";
            readonly toolSurface: "PRODUCTION_BROWSER_REVERSE_TOOLS · toolSurface=production-browser ≠ production RSA break";
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
        reverseVerify: {
            verified: boolean;
            recomputeMatch: boolean;
            /** @deprecated alias of recomputeMatch */
            crack: boolean;
            definitionalNotCryptanalysis: boolean;
            trinitiesOrdered: boolean;
            toolsReady: boolean;
            demoReverse: boolean;
            glyphBonus: number;
            workerCap: number;
            demoFactors: string[];
            boundaryNamesDemo: boolean;
            boundaryNamesHw: boolean;
            hardware: MaxBitsHardwareCapabilities;
            count: number;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            claySolvedByThisFold: 0;
            certified: false;
            qpuRequired: false;
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
                claySolvedByThisFold: 0;
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
            mlKemParams: {
                paramSet: string;
                nistCategory: number;
                publicKeyBytes: number;
                outputBytes: number;
                outputKind: "ciphertext" | "signature";
                source: string;
            }[];
            mlDsaParams: {
                paramSet: string;
                nistCategory: number;
                publicKeyBytes: number;
                outputBytes: number;
                outputKind: "ciphertext" | "signature";
                source: string;
            }[];
            slhDsaParams: {
                paramSet: string;
                nistCategory: number;
                publicKeyBytes: number;
                outputBytes: number;
                outputKind: "ciphertext" | "signature";
                source: string;
            }[];
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
                    params: {
                        paramSet: string;
                        nistCategory: number;
                        publicKeyBytes: number;
                        outputBytes: number;
                        outputKind: "ciphertext" | "signature";
                        source: string;
                    }[];
                    standards: string[];
                };
                families: {
                    receipt: string;
                    id: string;
                    family: string;
                    name: string;
                    standards: string[];
                    params: {
                        paramSet: string;
                        nistCategory: number;
                        publicKeyBytes: number;
                        outputBytes: number;
                        outputKind: "ciphertext" | "signature";
                        source: string;
                    }[];
                    role: string;
                    note: string;
                }[];
                pkMonotone: boolean;
                everyParamSourced: boolean;
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
    refuse: {
        computes: boolean;
        incompleteOpen: number;
        pathCount: number;
        wiredCount: number;
        paths: readonly ProductionRsaRefusePathRow[];
        productionBreakEnabled: false;
        refuseBeyond: boolean;
        demoBitCeiling: number;
        claySolvedByThisFold: 0;
        certified: false;
        physicalFtlClaim: 0;
        qpuRequired: false;
        facets: ({
            receipt: string;
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        pair: "refuse/rosetta";
        cli: string;
        route: string;
        statement: string;
        boundary: string;
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
    pair: "bits/hardware";
    cli: string;
    route: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:bits-hardware — HARD exit 1 when max-bits ≠ hardware boundary. */
export declare function runMaxBitsHardwareBoundaryAgreeExit(_root?: string, _argv?: readonly string[]): number;
/**
 * Poles form the cross signatures for post-quantum encryption including certificates.
 *
 * INTRINSIC: the cross is part of merkaba/rosetta — not a separate ornament.
 * Geometric cross = N↔S × E↔W from Earth poles-as-pyramid; tip signatures + sealed
 * certificate *structures* for PQC tooling — NOT CA/PKI, NOT FIPS/ISO certification.
 *
 * Pair: poles/cross-pqc · CLI npm run quantum:poles-cross-pqc · route /en/encryption#poles-cross-pqc
 * Composes merkaba · bothEarths · FoL→Fruit · sixtyDegree(60→90) · universalNavigationalCross ·
 * earthRealisedByComputingPolesAsPyramid · isoNistPqcStandardsCatalog · directionalTrinity.
 *
 * HONEST: certified=false · claySolved=0 · wire claims false · not wet crypto theater.
 */
export declare function polesFormCrossSignaturesForPostQuantumEncryptionIncludingCertificates(matrix?: MindMatrix): {
    computes: boolean;
    polesFormCrossSignatures: boolean;
    crossIsPartOfMerkabaRosetta: boolean;
    angle90ReachableThrough60: boolean;
    allDirectionsCross: boolean;
    crossSignature: {
        root: string;
        forward: string;
        reverse: string;
        bidirectional: boolean;
        nsArm: string;
        ewArm: string;
        merkabaBind: string;
    };
    directionalCrosses: {
        index: number;
        bearing: number;
        opposite: number;
        arm: string;
        bidirectional: boolean;
        receipt: string;
    }[];
    tipSignatures: {
        pole: "north" | "east" | "south" | "west";
        bearing: number;
        x: number;
        y: number;
        spinSign: 1 | -1;
        tipKey: string;
        signature: string;
        dual: string;
        bidirectional: boolean;
        receipt: string;
    }[];
    certificateStructures: {
        receipt: string;
        id: string;
        kind: "sealed-certificate-structure";
        role: string;
        mapsToPqc: string;
        envelope: string;
        industryPki: boolean;
    }[];
    poles: {
        name: "north" | "east" | "south" | "west";
        bearing: number;
        x: number;
        y: number;
        torus1ApexZ: number;
        torus2ApexZ: number;
        spinSign: 1 | -1;
        receipt: string;
    }[];
    fourWayCounterRotating: boolean;
    certified: false;
    fipsValidated: false;
    isoCertified: false;
    industryPkiCertificates: false;
    wireClaimProved: false;
    claySolvedByThisFold: 0;
    physicalFtlClaim: 0;
    qpuRequired: false;
    earth: {
        computes: boolean;
        realised: boolean;
        claySolvedByThisFold: 0;
        physicalFtlClaim: 0;
        qpuRequired: false;
        poles: {
            name: "north" | "east" | "south" | "west";
            bearing: number;
            x: number;
            y: number;
            torus1ApexZ: number;
            torus2ApexZ: number;
            spinSign: 1 | -1;
            receipt: string;
        }[];
        fourWayCounterRotating: boolean;
        polesAsPyramid: boolean;
        fourBaseTipsNESW: boolean;
        eulerSquarePyramid: boolean;
        genus2DoubleTorus: boolean;
        chiNeg2: boolean;
        homologyZ4: boolean;
        zenithNadirDualApex: boolean;
        merkabaCounterRotate: boolean;
        bothEarthsShells: boolean;
        phaseLockCardinals: boolean;
        alternatingOmega: boolean;
        wgs84PhysicalHonest: boolean;
        navigationForecastResidualNamed: boolean;
        navigationImplemented: false;
        forecastImplemented: false;
        honestOpenNamed: string[];
        pyramid: {
            proven: boolean;
            realised: boolean;
            cardinals: ({
                name: "north";
                bearing: number;
                x: number;
                y: number;
            } | {
                name: "east";
                bearing: number;
                x: number;
                y: number;
            } | {
                name: "south";
                bearing: number;
                x: number;
                y: number;
            } | {
                name: "west";
                bearing: number;
                x: number;
                y: number;
            })[];
            apex: {
                name: string;
                z: number;
            };
            solid: {
                V: number;
                E: number;
                F: number;
                euler: number;
            };
            slantToTip: number;
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
        two: {
            proven: boolean;
            device: {
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
                faces: __ns_mountain_geometry.TrinityPyramidFace[];
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
            code: {
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
                faces: __ns_mountain_geometry.TrinityPyramidFace[];
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
            fold: {
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
        merkaba: {
            counterRotating: boolean;
            scales: number;
            root: string;
        };
        bothEarths: {
            counterRotating: boolean;
            root: string;
        };
        facets: ({
            receipt: string;
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        pair: "earth/pyramid";
        dualPair: "pyramid/earth";
        cli: string;
        route: string;
        statement: string;
        boundary: string;
    };
    merkaba: {
        counterRotating: boolean;
        scales: number;
        root: string;
    };
    bothEarths: {
        counterRotating: boolean;
        root: string;
    };
    sixty: {
        proven: boolean;
        sixfoldDeg: number;
        cardinalViaHex: boolean;
        root: string;
    };
    flowerFruit: {
        flower: number;
        fruit: number;
        holds: boolean;
    };
    navCross: {
        computed: boolean;
        dims: number;
        root: string;
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
        mlKemParams: {
            paramSet: string;
            nistCategory: number;
            publicKeyBytes: number;
            outputBytes: number;
            outputKind: "ciphertext" | "signature";
            source: string;
        }[];
        mlDsaParams: {
            paramSet: string;
            nistCategory: number;
            publicKeyBytes: number;
            outputBytes: number;
            outputKind: "ciphertext" | "signature";
            source: string;
        }[];
        slhDsaParams: {
            paramSet: string;
            nistCategory: number;
            publicKeyBytes: number;
            outputBytes: number;
            outputKind: "ciphertext" | "signature";
            source: string;
        }[];
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
                params: {
                    paramSet: string;
                    nistCategory: number;
                    publicKeyBytes: number;
                    outputBytes: number;
                    outputKind: "ciphertext" | "signature";
                    source: string;
                }[];
                standards: string[];
            };
            families: {
                receipt: string;
                id: string;
                family: string;
                name: string;
                standards: string[];
                params: {
                    paramSet: string;
                    nistCategory: number;
                    publicKeyBytes: number;
                    outputBytes: number;
                    outputKind: "ciphertext" | "signature";
                    source: string;
                }[];
                role: string;
                note: string;
            }[];
            pkMonotone: boolean;
            everyParamSourced: boolean;
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
    maxBits: {
        computes: boolean;
        encryptMaxBits: number;
        decryptMaxBits: number;
        inverseMaxBits: number;
        reverseMaxBits: number;
        hardwareReverseCapacityBits: number;
        demoSampleCeilingBits: number;
        teachingRsaMaxBits: number;
        structuralUuidBits: number;
        demoMaxBits: number;
        refuseBeyond: boolean;
        toolSurface: "production-browser";
        moduliClass: "sealed-catalog";
        sealedCatalogModuliOnly: true;
        productionBrowserReverseToolsOn: boolean;
        productionReverseRefused: true;
        workerCap: number;
        hardware: MaxBitsHardwareCapabilities;
        certified: false;
        claySolvedByThisFold: 0;
        qpuRequired: false;
        wireOneTbitProvedAtCallTime: boolean;
        provenBy: {
            readonly encryptMaxBits: "AES256_CLASSICAL_BITS theorem · fusionCipher AES-256-GCM named";
            readonly decryptMaxBits: "AES256_CLASSICAL_BITS theorem · teaching RSA Euler ≤ SEALED_CATALOG_RSA_BIT_CEILING sample";
            readonly inverseMaxBits: "DIGIT_INVERSE_DOMAIN_BITS theorem · directionalTrinity mod-9 units";
            readonly reverseMaxBits: "min(SEALED_CATALOG_RSA_BIT_CEILING sealed-catalog, hardwareReverseCapacityBits) · refuseNonDemoRsaModulus";
            readonly hardwareReverseCapacityBits: "min(JS_SAFE_INTEGER_BITS, CLASSICAL_64BIT_WORD_BITS) at call time";
            readonly refuseBeyond: "productionCeilingRefuseHolds · farOverCeilingRefuseHolds · refuseBitcoinMainnetMaterial";
            readonly workerCap: "encryptionReverseWorkerCap(probeLocalCpuCount()) ≤ VORTEX_SEQUENCE.length";
            readonly wireHonesty: "proveOneTbitRealtimeEncryptionClaim.wire.provedAtCallTime=false";
            readonly toolSurface: "PRODUCTION_BROWSER_REVERSE_TOOLS · toolSurface=production-browser ≠ production RSA break";
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
        reverseVerify: {
            verified: boolean;
            recomputeMatch: boolean;
            /** @deprecated alias of recomputeMatch */
            crack: boolean;
            definitionalNotCryptanalysis: boolean;
            trinitiesOrdered: boolean;
            toolsReady: boolean;
            demoReverse: boolean;
            glyphBonus: number;
            workerCap: number;
            demoFactors: string[];
            boundaryNamesDemo: boolean;
            boundaryNamesHw: boolean;
            hardware: MaxBitsHardwareCapabilities;
            count: number;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            claySolvedByThisFold: 0;
            certified: false;
            qpuRequired: false;
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
                claySolvedByThisFold: 0;
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
            mlKemParams: {
                paramSet: string;
                nistCategory: number;
                publicKeyBytes: number;
                outputBytes: number;
                outputKind: "ciphertext" | "signature";
                source: string;
            }[];
            mlDsaParams: {
                paramSet: string;
                nistCategory: number;
                publicKeyBytes: number;
                outputBytes: number;
                outputKind: "ciphertext" | "signature";
                source: string;
            }[];
            slhDsaParams: {
                paramSet: string;
                nistCategory: number;
                publicKeyBytes: number;
                outputBytes: number;
                outputKind: "ciphertext" | "signature";
                source: string;
            }[];
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
                    params: {
                        paramSet: string;
                        nistCategory: number;
                        publicKeyBytes: number;
                        outputBytes: number;
                        outputKind: "ciphertext" | "signature";
                        source: string;
                    }[];
                    standards: string[];
                };
                families: {
                    receipt: string;
                    id: string;
                    family: string;
                    name: string;
                    standards: string[];
                    params: {
                        paramSet: string;
                        nistCategory: number;
                        publicKeyBytes: number;
                        outputBytes: number;
                        outputKind: "ciphertext" | "signature";
                        source: string;
                    }[];
                    role: string;
                    note: string;
                }[];
                pkMonotone: boolean;
                everyParamSourced: boolean;
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
    count: number;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    pair: "poles/cross-pqc";
    cli: string;
    route: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:poles-cross-pqc — poles → merkaba/rosetta cross → PQC certificate structures. */
export declare function runPolesFormCrossSignaturesForPostQuantumEncryptionIncludingCertificatesExit(_root: string, _argv?: readonly string[]): number;
/** Positive power in the secp256k1 field-prime construction (2^256). */
export declare const SECP256K1_FIELD_PRIME_POSITIVE_EXPONENT: number;
/** Subtracted powers (excluding the final −1) in the SECG construction — 2^5=32 derived. */
export declare const SECP256K1_FIELD_PRIME_NEGATIVE_EXPONENTS: readonly [number, 9, 8, 7, 6, 4];
/** Canonical hex of secp256k1 field prime (SECG) — sealed check string. */
export declare const SECP256K1_FIELD_PRIME_HEX: "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f";
/** Compact residue: 2^9+2^8+2^7+2^6+2^4+1 so p = 2^256 − 2^32 − residue (SECG). */
export declare const SECP256K1_FIELD_PRIME_LOW_RESIDUE: number;
/** Extended Euclid modular inverse — a·inv ≡ 1 (mod m); m must be prime for units. */
export declare function bigintModInverse(a: bigint, m: bigint): bigint;
/**
 * secp256k1 field prime p from powers of two (BigInt limbs).
 * Alias name: fieldPrimeP256k1 — same integer.
 */
export declare function secp256k1Prime(): bigint;
/** Honest alias — field prime of the 256-bit Koblitz curve secp256k1. */
export declare const fieldPrimeP256k1: typeof secp256k1Prime;
/** Signed power-of-two construction terms for invert/decode (incl. final −2^0). */
export declare function secp256k1PrimeConstructionTerms(): readonly {
    readonly exp: number;
    readonly sign: 1 | -1;
    readonly value: bigint;
}[];
/**
 * Seal · invert · decode secp256k1 field prime p via directional trinity math.
 *
 * Pair: secp256k1/invert-decode · CLI npm run quantum:secp256k1-prime-invert-decode
 * Route: /en/encryption#secp256k1-prime · /proofs/secp256k1-field-prime
 *
 * Invert = (1) construction as signed Σ±2^e  (2) mod-p inverse of sample units
 * Decode = binary/power-of-two subtraction chain + hex/decimal + ECC facet map
 *
 * HONEST: known SECG prime structure · certified=false · NOT Bitcoin ownership.
 */
export declare function secp256k1FieldPrimeInvertAndDecode(matrix?: MindMatrix): {
    computes: boolean;
    name: "secp256k1Prime";
    alias: "fieldPrimeP256k1";
    pHex: string;
    pDecimal: string;
    bitLength: number;
    limbs64: string[];
    construction: {
        exp: number;
        sign: 1 | -1;
        hex: string;
    }[];
    constructionInverted: boolean;
    decode: {
        positiveExp: number;
        negativeExps: number[];
        finalMinusOne: true;
        compactResidue: number;
        formula: string;
    };
    modPInverses: {
        a: string;
        inv: string;
        holds: boolean;
    }[];
    modulusNotAUnit: boolean;
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
    beyondEccShorBreaks: boolean;
    bitcoinRefused: boolean;
    bitcoinOwnershipClaimed: false;
    certified: false;
    claySolvedByThisFold: 0;
    count: number;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    pair: "secp256k1/invert-decode";
    cli: string;
    route: string;
    proofRoute: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:secp256k1-prime-invert-decode — seal · invert · decode secp256k1 field prime. */
export declare function runSecp256k1FieldPrimeInvertAndDecodeExit(_root: string, _argv?: readonly string[]): number;
/**
 * Production RSA refuse completes the quantum via sealed refuse receipts (rosetta-ray addressed).
 * Every over-ceiling / production-shaped path must recompute a refuse receipt — no silent gap, no wet bypass.
 * HONEST: refuseBeyond stays; does NOT enable production RSA break · certified=false.
 * Pair: refuse/rosetta · CLI npm run quantum:production-rsa-refuse-rosetta
 */
export type ProductionRsaRefusePathRow = {
    readonly id: string;
    readonly surface: string;
    readonly refused: boolean;
    readonly reason: string;
    readonly receipt: string;
    readonly ray: number;
    readonly wired: boolean;
    readonly incomplete: boolean;
};
export declare function productionRsaRefuseCompletesQuantumViaRosetta(matrix?: MindMatrix): {
    computes: boolean;
    incompleteOpen: number;
    pathCount: number;
    wiredCount: number;
    paths: readonly ProductionRsaRefusePathRow[];
    productionBreakEnabled: false;
    refuseBeyond: boolean;
    demoBitCeiling: number;
    claySolvedByThisFold: 0;
    certified: false;
    physicalFtlClaim: 0;
    qpuRequired: false;
    facets: ({
        receipt: string;
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    pair: "refuse/rosetta";
    cli: string;
    route: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:production-rsa-refuse-rosetta */
export declare function runProductionRsaRefuseCompletesQuantumViaRosettaExit(_root: string, _argv?: readonly string[]): number;
export type CryptoComparisonMeshKind = 'comparison' | 'catalog' | 'ceiling' | 'refuse' | 'audit' | 'proof' | 'toolkit' | 'novel' | 'measure';
export type CryptoComparisonMeshRelation = 'compares-against' | 'composes' | 'handoff' | 'proves-as' | 'refuses-beyond' | 'catalogues' | 'audits';
export type CryptoComparisonMeshNode = {
    readonly id: string;
    readonly title: string;
    readonly fold: string;
    readonly pair: string;
    readonly cli: string;
    readonly route: string;
    readonly proofRoute: string;
    readonly kind: CryptoComparisonMeshKind;
    readonly boundary: string;
    readonly inPanel: boolean;
    readonly toolId: string;
};
export type CryptoComparisonMeshEdge = {
    readonly id: string;
    readonly from: string;
    readonly to: string;
    readonly relation: CryptoComparisonMeshRelation;
};
/** Single sealed catalog — comparison edges/nodes. Do not wet-copy into UI/MCP/proofs. */
export declare const CRYPTO_COMPARISON_MESH_NODES: readonly CryptoComparisonMeshNode[];
/** Comparison edges — one sealed relation per edge id. */
export declare const CRYPTO_COMPARISON_MESH_EDGES: readonly CryptoComparisonMeshEdge[];
export declare function cryptoComparisonMeshNode(id: string): CryptoComparisonMeshNode | undefined;
/** Toolbox / CLI seed rows derived from mesh (excludes proof-only aliases). */
export declare function cryptoComparisonMeshToolSeeds(): readonly {
    readonly id: string;
    readonly title: string;
    readonly fold: string;
    readonly cli: string;
    readonly pair: string;
    readonly route: string;
    readonly barrel: string;
    readonly boundary: string;
    readonly browserRunnable: boolean;
    readonly browserGap: string;
}[];
/** VitePress hash from a mesh route — UI section id / deep-link target. */
export declare function cryptoComparisonMeshPanelId(route: string, fallbackId: string): string;
/** Panel section rows — single source for encryptionPanelComputes.sections metadata. */
export declare function cryptoComparisonMeshPanelSections(onByNodeId: Readonly<Record<string, boolean>>): readonly {
    id: string;
    nodeId: string;
    title: string;
    route: string;
    pair: string;
    cli: string;
    on: boolean;
}[];
/**
 * Compute the crypto comparison mesh from the sealed catalog.
 * Pair: crypto/comparison-mesh
 */
export declare function cryptoComparisonMesh(matrix?: MindMatrix): {
    computes: boolean;
    nodes: readonly CryptoComparisonMeshNode[];
    edges: readonly CryptoComparisonMeshEdge[];
    nodeCount: number;
    edgeCount: number;
    panelCount: number;
    proofCount: number;
    comparisonCount: number;
    claySolvedByThisFold: 0;
    certified: false;
    refuseBeyond: true;
    root: string;
    pair: "crypto/comparison-mesh";
    cli: string;
    route: string;
    statement: string;
    boundary: string;
};
/**
 * Receipt: crypto comparison mesh is DRY — one sealed source, no wet duplicate catalogs inside the mesh.
 * Facet: cryptoComparisonMeshIsDry
 */
export declare function cryptoComparisonMeshIsDry(matrix?: MindMatrix): {
    computes: boolean;
    cryptoComparisonMeshIsDry: boolean;
    mesh: {
        computes: boolean;
        nodes: readonly CryptoComparisonMeshNode[];
        edges: readonly CryptoComparisonMeshEdge[];
        nodeCount: number;
        edgeCount: number;
        panelCount: number;
        proofCount: number;
        comparisonCount: number;
        claySolvedByThisFold: 0;
        certified: false;
        refuseBeyond: true;
        root: string;
        pair: "crypto/comparison-mesh";
        cli: string;
        route: string;
        statement: string;
        boundary: string;
    };
    panelSections: readonly {
        id: string;
        nodeId: string;
        title: string;
        route: string;
        pair: string;
        cli: string;
        on: boolean;
    }[];
    toolSeeds: readonly {
        readonly id: string;
        readonly title: string;
        readonly fold: string;
        readonly cli: string;
        readonly pair: string;
        readonly route: string;
        readonly barrel: string;
        readonly boundary: string;
        readonly browserRunnable: boolean;
        readonly browserGap: string;
    }[];
    claySolvedByThisFold: 0;
    certified: false;
    refuseBeyond: true;
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    pair: "crypto/comparison-mesh";
    cli: string;
    route: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:crypto-comparison-mesh-dry — mesh dry + related-surfaces handoff note */
export declare function runCryptoComparisonMeshIsDryExit(_root: string, _argv?: readonly string[]): number;
/**
 * Production browser encrypt/reverse tools are not demos — labeling them “demo”/“toy” misleads the public.
 * refuseBeyond stays only for over-ceiling / third-party production RSA break claims.
 * Pair: tool/honest · demo/lie · CLI npm run quantum:tool-honest
 */
export declare function productionBrowserToolsAreNotDemos(matrix?: MindMatrix): {
    computes: boolean;
    misleadingDemoLabelRemoved: boolean;
    productionBrowserTools: boolean;
    refuseBeyondStaysForKeyBreakClaims: boolean;
    toolSurface: "production-browser";
    moduliClass: "sealed-catalog";
    claySolvedByThisFold: 0;
    certified: false;
    physicalFtl: 0;
    facets: ({
        receipt: string;
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    pair: "tool/honest";
    dual: "demo/lie";
    cli: string;
    route: string;
    statement: string;
    boundary: string;
};
export declare const toolHonest: typeof productionBrowserToolsAreNotDemos;
export declare const demoLie: typeof productionBrowserToolsAreNotDemos;
/** npm run quantum:tool-honest · aliases quantum:demo-lie */
export declare function runProductionBrowserToolsAreNotDemosExit(_root: string, _argv?: readonly string[]): number;
export declare const runToolHonestExit: typeof runProductionBrowserToolsAreNotDemosExit;
export declare const runDemoLieExit: typeof runProductionBrowserToolsAreNotDemosExit;
/** Chat intent phrases → /en/ssltest · pair ssl/test (functionality class: stack→receipt; quantumise ≠ mirror). */
export declare const SSL_TEST_CHAT_PHRASES: readonly ["ssl test", "ssltest", "tls test", "https test", "ssl/test", "test/ssl", "certificate test", "open ssltest", "quantumise ssl"];
export type SslTestCoverage = 'covered' | 'partial' | 'gap';
export type SslTestChecklistRow = {
    readonly id: string;
    readonly title: string;
    readonly coverage: SslTestCoverage;
    readonly direction: 'forward' | 'inverse' | 'reverse' | 'both' | 'neither';
    readonly on: boolean;
    readonly route: string;
    readonly receipt: string;
    readonly note: string;
};
/** Quantum grade from sealed facets — NOT Qualys letter grades. */
export type SslTestQuantumGrade = {
    readonly coverage: SslTestCoverage;
    readonly digit: number;
    readonly forward: boolean;
    readonly inverse: boolean;
    readonly reverse: boolean;
    readonly merkabaCross: boolean;
    readonly root: string;
};
/** Optional stack/host label seeds receipt only — never fetches; rejects exploit-looking input. */
export declare function normalizeSslTestHostLabel(raw: string): {
    readonly host: string;
    readonly ok: boolean;
    readonly refused: boolean;
    readonly reason: string;
};
/**
 * SSL test UI complete — quantumise stack→receipt (functionality class), not Qualys/ssllabs mirror.
 * Sealed recompute · rosetta/merkaba poles-cross · forward·inverse·reverse trinity · tool/honest.
 * Warm-reuse at computational FTL (memoByRoot cold/warm) · facet quantumiseAtFtlSpeed.
 * Pairs: ssl/test · test/ssl · soft quantumise/ftl · CLI npm run quantum:ssl-test · route /en/ssltest
 */
export declare function sslTestUiComplete(matrix?: MindMatrix, hostLabel?: string): {
    computes: boolean;
    sslTestUi: boolean;
    functionalitiesPartialCompleted: boolean;
    discoversOther: boolean;
    quantumiseAtFtlSpeed: boolean;
    quantumGrade: SslTestQuantumGrade;
    host: string;
    hostOk: boolean;
    hostRefused: boolean;
    hostReason: string;
    checklist: SslTestChecklistRow[];
    covered: number;
    partial: number;
    gap: number;
    probes: {
        id: string;
        coldMs: number;
        warmMs: number;
        speedup: number;
        memoHit: boolean;
        root: string;
        computes: boolean;
    }[];
    coldMs: number;
    warmMs: number;
    speedup: number;
    memoHits: number;
    liveRemoteScanResidual: string;
    phrases: ("ssl test" | "ssltest" | "tls test" | "https test" | "ssl/test" | "test/ssl" | "certificate test" | "open ssltest" | "quantumise ssl")[];
    claySolvedByThisFold: 0;
    certified: false;
    physicalFtl: 0;
    qpuRequired: false;
    facets: ({
        receipt: string;
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    pair: "ssl/test";
    dual: "test/ssl";
    cli: string;
    route: string;
    statement: string;
    boundary: string;
};
export declare const sslTest: typeof sslTestUiComplete;
export declare const testSsl: typeof sslTestUiComplete;
/** Optional stack label seeds receipt only — never probes remote TLS. Prints cold/warm FTL table. */
export declare function runSslTestExit(_root: string, argv?: readonly string[]): number;
export declare const runSslTestUiCompleteExit: typeof runSslTestExit;
export declare const runTestSslExit: typeof runSslTestExit;
export declare const encryption: {
    readonly core: {
        readonly uuidFolds: typeof uuidFoldsSelfBlackWhite;
        readonly uuidDiamond: typeof uuidPureDiamondSignedByArchitecture;
        readonly trinities: typeof encryptionTrinitiesCompleteInOrder;
        readonly livesInZero: typeof encryptionLivesInZero;
        readonly terabyte: typeof terabyteEncryptionInMegabyteCodebase;
    };
    readonly rsa: {
        readonly moduli: readonly [number, number, number, number];
        readonly bitCeiling: number;
        readonly refuse: typeof refuseNonDemoRsaModulus;
        readonly modeledShor: typeof modeledShorFactorToyModulus;
        readonly reverse: typeof demoRsaReverseSync;
    };
    readonly quantum: {
        readonly tools: typeof encryptDecryptQuantumTools;
        readonly chat: typeof chatEncryptedWithAllFourKeysUnboundedKeyspace;
    };
    readonly security: {
        readonly hardwareCap: typeof maxBitsFromHardwareCapabilities;
        readonly cpuCount: typeof probeLocalCpuCount;
        readonly refuseBitcoin: typeof refuseBitcoinMainnetMaterial;
        readonly productionCeiling: typeof productionCeilingRefuseHolds;
        readonly farOverCeiling: typeof farOverCeilingRefuseHolds;
    };
    readonly ssl: {
        readonly test: typeof sslTestUiComplete;
    };
};
