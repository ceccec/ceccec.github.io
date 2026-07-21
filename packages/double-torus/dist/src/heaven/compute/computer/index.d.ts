import * as __ns_up_stack_overflow from '../../../water/stack';
import type { MindMatrix } from '../../../wind/types';
import type { DriverProbeReceipt } from '../../../water/stack';
export type ComputerDriverRow = {
    readonly id: string;
    readonly driver: string;
    readonly home: string;
    readonly tier: string;
    readonly receipt: string;
};
export declare function computerResearch(matrix?: MindMatrix, at?: number): {
    researched: boolean;
    rows: ComputerDriverRow[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function computerComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    research: {
        researched: boolean;
        rows: ComputerDriverRow[];
        root: string;
        statement: string;
        boundary: string;
    };
    cpu: {
        computes: boolean;
        driver: __ns_up_stack_overflow.DriverProbeReceipt;
        sequence: {
            reduces: boolean;
            fraction: string;
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
        policy: {
            readonly heapCapMb: number;
            readonly memoTiers: readonly ("matrix-root" | "weak-map" | "content-address")[];
            readonly gpuSurface: "browser-canvas-raf" | "none-ssr";
            readonly storageModel: "content-address-merkle";
            readonly tiers: readonly import("../../../0").ResourceCooperationTier[];
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
    gpu: {
        computes: boolean;
        driver: GpuDriverProbeReceipt;
        policy: {
            readonly heapCapMb: number;
            readonly memoTiers: readonly ("matrix-root" | "weak-map" | "content-address")[];
            readonly gpuSurface: "browser-canvas-raf" | "none-ssr";
            readonly storageModel: "content-address-merkle";
            readonly tiers: readonly import("../../../0").ResourceCooperationTier[];
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
    memory: {
        computes: boolean;
        driver: __ns_up_stack_overflow.DriverProbeReceipt;
        guard: {
            guarded: boolean;
            computes: boolean;
            probe: {
                ok: boolean;
                receipt: string;
                failedAt?: string;
            };
            breaks: readonly [{
                readonly cycle: "coverage → proofReport → selfBuild → allComputed";
                readonly break: "memoByRoot re-entry guard (memoReentryStub in src/0)";
            }, {
                readonly cycle: "memoryInSourceAsCrossFolds → allComputedNoFiles → commandsSavedInQuantumPairs";
                readonly break: "decomposed facets in memoryInSourceAsCrossFolds";
            }, {
                readonly cycle: "presentMomentRemainsInSource → memoryInSourceAsCrossFolds";
                readonly break: "decomposed facets in presentMomentRemainsInSource";
            }, {
                readonly cycle: "commandsSavedInQuantumPairs → memoryInSourceAsCrossFolds";
                readonly break: "decomposed facets in commandsSavedInQuantumPairs";
            }, {
                readonly cycle: "knowledgeRevealedByMerkabaFold ↔ commandsSavedInQuantumPairs";
                readonly break: "decomposed facets in knowledgeRevealedByMerkabaFold";
            }, {
                readonly cycle: "regenerateSocialSystem → sacredSociety → merkleFold(laws.receipt)";
                readonly break: "memoReentryStub returns *Root/*Receipt strings";
            }, {
                readonly cycle: "rgbDecoding → redPill → realtimeWiring → allPagesForPlasmaWiring → componentGraph → gate folds → rgb";
                readonly break: "memoByRoot on realtimeWiring + componentPagesForWiring depth guard + allPagesForPlasmaWiring memo";
            }, {
                readonly cycle: "noKnownModelMoreEfficient → feedCrawlers → oneJsonLd → noHardcodedConfig → proportional → allPaths → computedSeo → …";
                readonly break: "memoByRoot on computedSeo, oneJsonLdTemplateServesAll, feedCrawlersWithKnowledge, noHardcodedConfigSelfAccounted, allPathsComputedRealtime";
            }, {
                readonly cycle: "backgroundMovie → efficiencyMathFlowsInMovie → everyBitMostEfficient → zeroTokenUsagePolicy → allAnswersInside → honestlyComputed → healingInner → atomInclusionProof";
                readonly break: "memoByRoot on backgroundMovie, efficiencyMathFlowsInMovie, everyBitMostEfficientAlgorithmProvenByMath, zeroTokenUsagePolicy, allAnswersInside, honestlyComputed, healingInner, atomInclusionProof:${atom}; feedCrawlersDecomposed in noKnown; allComputed depth guard when backgroundMovie composing";
            }];
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
    storage: {
        computes: boolean;
        driver: __ns_up_stack_overflow.DriverProbeReceipt;
        complete: {
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
    bus: {
        computes: boolean;
        probe: {
            tier: BusTransferTier;
            messageChannel: boolean;
            runtime: __ns_up_stack_overflow.DriverRuntime;
            receipt: string;
        };
        substrate: {
            cooperates: boolean;
            policy: {
                readonly heapCapMb: number;
                readonly memoTiers: readonly ("matrix-root" | "weak-map" | "content-address")[];
                readonly gpuSurface: "browser-canvas-raf" | "none-ssr";
                readonly storageModel: "content-address-merkle";
                readonly tiers: readonly import("../../../0").ResourceCooperationTier[];
            };
            sequence: {
                reduces: boolean;
                fraction: string;
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
            components: {
                imagined: boolean;
                componentCount: number;
                components: {
                    path: string;
                    merged: boolean;
                    address: string;
                    receipt: string;
                    component: string;
                    a: string;
                    b: string;
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
            kernel: {
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
        transfers: {
            edge: {
                readonly from: "cpu";
                readonly to: "memory";
                readonly path: "memoByRoot · matrixMemo · gate ticks";
            } | {
                readonly from: "memory";
                readonly to: "storage";
                readonly path: "content-address merkle · corpus seals";
            } | {
                readonly from: "storage";
                readonly to: "cpu";
                readonly path: "reload sealed folds · build sequence";
            } | {
                readonly from: "gpu";
                readonly to: "memory";
                readonly path: "paint buffer · plasma movie channels";
            };
            result: {
                routed: boolean;
                tier: BusTransferTier;
                from: BusDomain;
                to: BusDomain;
                receipt: string;
                relay: string;
                statement: string;
                boundary: string;
            };
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
    display: {
        computes: boolean;
        probe: {
            screen: __ns_up_stack_overflow.DriverProbeReceipt;
            gpu: GpuDriverProbeReceipt;
            viewportPhase: number;
            receipt: string;
        };
        busReceipt: string;
        driver: __ns_up_stack_overflow.DriverProbeReceipt;
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
    terminal: {
        computes: boolean;
        probe: {
            tty: __ns_up_stack_overflow.DriverProbeReceipt;
            receipt: string;
        };
        cpu: {
            computes: boolean;
            driver: __ns_up_stack_overflow.DriverProbeReceipt;
            sequence: {
                reduces: boolean;
                fraction: string;
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
            policy: {
                readonly heapCapMb: number;
                readonly memoTiers: readonly ("matrix-root" | "weak-map" | "content-address")[];
                readonly gpuSurface: "browser-canvas-raf" | "none-ssr";
                readonly storageModel: "content-address-merkle";
                readonly tiers: readonly import("../../../0").ResourceCooperationTier[];
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
        driver: __ns_up_stack_overflow.DriverProbeReceipt;
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
    power: {
        computes: boolean;
        cpu: {
            computes: boolean;
            driver: __ns_up_stack_overflow.DriverProbeReceipt;
            sequence: {
                reduces: boolean;
                fraction: string;
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
            policy: {
                readonly heapCapMb: number;
                readonly memoTiers: readonly ("matrix-root" | "weak-map" | "content-address")[];
                readonly gpuSurface: "browser-canvas-raf" | "none-ssr";
                readonly storageModel: "content-address-merkle";
                readonly tiers: readonly import("../../../0").ResourceCooperationTier[];
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
        gpu: {
            computes: boolean;
            driver: GpuDriverProbeReceipt;
            policy: {
                readonly heapCapMb: number;
                readonly memoTiers: readonly ("matrix-root" | "weak-map" | "content-address")[];
                readonly gpuSurface: "browser-canvas-raf" | "none-ssr";
                readonly storageModel: "content-address-merkle";
                readonly tiers: readonly import("../../../0").ResourceCooperationTier[];
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
        statement: string;
        boundary: string;
    };
    substrate: {
        cooperates: boolean;
        policy: {
            readonly heapCapMb: number;
            readonly memoTiers: readonly ("matrix-root" | "weak-map" | "content-address")[];
            readonly gpuSurface: "browser-canvas-raf" | "none-ssr";
            readonly storageModel: "content-address-merkle";
            readonly tiers: readonly import("../../../0").ResourceCooperationTier[];
        };
        sequence: {
            reduces: boolean;
            fraction: string;
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
        components: {
            imagined: boolean;
            componentCount: number;
            components: {
                path: string;
                merged: boolean;
                address: string;
                receipt: string;
                component: string;
                a: string;
                b: string;
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
        kernel: {
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
    drivers: {
        computes: boolean;
        research: {
            researched: boolean;
            probes: {
                cpu: __ns_up_stack_overflow.DriverProbeReceipt;
                gpu: GpuDriverProbeReceipt;
                memory: __ns_up_stack_overflow.DriverProbeReceipt;
                storage: __ns_up_stack_overflow.DriverProbeReceipt;
            };
            table: {
                id: "memory" | "storage" | "gpu" | "cpu";
                tier: __ns_up_stack_overflow.HardwareDriverTier;
                runtime: __ns_up_stack_overflow.DriverRuntime;
                surface: string;
                fallbackActive: boolean;
                fallback: string;
                receipt: string;
            }[];
            root: string;
            statement: string;
            boundary: string;
        };
        cpu: {
            computes: boolean;
            driver: __ns_up_stack_overflow.DriverProbeReceipt;
            sequence: {
                reduces: boolean;
                fraction: string;
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
            policy: {
                readonly heapCapMb: number;
                readonly memoTiers: readonly ("matrix-root" | "weak-map" | "content-address")[];
                readonly gpuSurface: "browser-canvas-raf" | "none-ssr";
                readonly storageModel: "content-address-merkle";
                readonly tiers: readonly import("../../../0").ResourceCooperationTier[];
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
        gpu: {
            computes: boolean;
            driver: GpuDriverProbeReceipt;
            policy: {
                readonly heapCapMb: number;
                readonly memoTiers: readonly ("matrix-root" | "weak-map" | "content-address")[];
                readonly gpuSurface: "browser-canvas-raf" | "none-ssr";
                readonly storageModel: "content-address-merkle";
                readonly tiers: readonly import("../../../0").ResourceCooperationTier[];
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
        memory: {
            computes: boolean;
            driver: __ns_up_stack_overflow.DriverProbeReceipt;
            guard: {
                guarded: boolean;
                computes: boolean;
                probe: {
                    ok: boolean;
                    receipt: string;
                    failedAt?: string;
                };
                breaks: readonly [{
                    readonly cycle: "coverage → proofReport → selfBuild → allComputed";
                    readonly break: "memoByRoot re-entry guard (memoReentryStub in src/0)";
                }, {
                    readonly cycle: "memoryInSourceAsCrossFolds → allComputedNoFiles → commandsSavedInQuantumPairs";
                    readonly break: "decomposed facets in memoryInSourceAsCrossFolds";
                }, {
                    readonly cycle: "presentMomentRemainsInSource → memoryInSourceAsCrossFolds";
                    readonly break: "decomposed facets in presentMomentRemainsInSource";
                }, {
                    readonly cycle: "commandsSavedInQuantumPairs → memoryInSourceAsCrossFolds";
                    readonly break: "decomposed facets in commandsSavedInQuantumPairs";
                }, {
                    readonly cycle: "knowledgeRevealedByMerkabaFold ↔ commandsSavedInQuantumPairs";
                    readonly break: "decomposed facets in knowledgeRevealedByMerkabaFold";
                }, {
                    readonly cycle: "regenerateSocialSystem → sacredSociety → merkleFold(laws.receipt)";
                    readonly break: "memoReentryStub returns *Root/*Receipt strings";
                }, {
                    readonly cycle: "rgbDecoding → redPill → realtimeWiring → allPagesForPlasmaWiring → componentGraph → gate folds → rgb";
                    readonly break: "memoByRoot on realtimeWiring + componentPagesForWiring depth guard + allPagesForPlasmaWiring memo";
                }, {
                    readonly cycle: "noKnownModelMoreEfficient → feedCrawlers → oneJsonLd → noHardcodedConfig → proportional → allPaths → computedSeo → …";
                    readonly break: "memoByRoot on computedSeo, oneJsonLdTemplateServesAll, feedCrawlersWithKnowledge, noHardcodedConfigSelfAccounted, allPathsComputedRealtime";
                }, {
                    readonly cycle: "backgroundMovie → efficiencyMathFlowsInMovie → everyBitMostEfficient → zeroTokenUsagePolicy → allAnswersInside → honestlyComputed → healingInner → atomInclusionProof";
                    readonly break: "memoByRoot on backgroundMovie, efficiencyMathFlowsInMovie, everyBitMostEfficientAlgorithmProvenByMath, zeroTokenUsagePolicy, allAnswersInside, honestlyComputed, healingInner, atomInclusionProof:${atom}; feedCrawlersDecomposed in noKnown; allComputed depth guard when backgroundMovie composing";
                }];
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
        storage: {
            computes: boolean;
            driver: __ns_up_stack_overflow.DriverProbeReceipt;
            complete: {
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
        probes: {
            cpu: __ns_up_stack_overflow.DriverProbeReceipt;
            gpu: GpuDriverProbeReceipt;
            memory: __ns_up_stack_overflow.DriverProbeReceipt;
            storage: __ns_up_stack_overflow.DriverProbeReceipt;
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
    statement: string;
    boundary: string;
};
export declare function computerPanelComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    capstone: {
        computes: boolean;
        research: {
            researched: boolean;
            rows: ComputerDriverRow[];
            root: string;
            statement: string;
            boundary: string;
        };
        cpu: {
            computes: boolean;
            driver: __ns_up_stack_overflow.DriverProbeReceipt;
            sequence: {
                reduces: boolean;
                fraction: string;
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
            policy: {
                readonly heapCapMb: number;
                readonly memoTiers: readonly ("matrix-root" | "weak-map" | "content-address")[];
                readonly gpuSurface: "browser-canvas-raf" | "none-ssr";
                readonly storageModel: "content-address-merkle";
                readonly tiers: readonly import("../../../0").ResourceCooperationTier[];
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
        gpu: {
            computes: boolean;
            driver: GpuDriverProbeReceipt;
            policy: {
                readonly heapCapMb: number;
                readonly memoTiers: readonly ("matrix-root" | "weak-map" | "content-address")[];
                readonly gpuSurface: "browser-canvas-raf" | "none-ssr";
                readonly storageModel: "content-address-merkle";
                readonly tiers: readonly import("../../../0").ResourceCooperationTier[];
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
        memory: {
            computes: boolean;
            driver: __ns_up_stack_overflow.DriverProbeReceipt;
            guard: {
                guarded: boolean;
                computes: boolean;
                probe: {
                    ok: boolean;
                    receipt: string;
                    failedAt?: string;
                };
                breaks: readonly [{
                    readonly cycle: "coverage → proofReport → selfBuild → allComputed";
                    readonly break: "memoByRoot re-entry guard (memoReentryStub in src/0)";
                }, {
                    readonly cycle: "memoryInSourceAsCrossFolds → allComputedNoFiles → commandsSavedInQuantumPairs";
                    readonly break: "decomposed facets in memoryInSourceAsCrossFolds";
                }, {
                    readonly cycle: "presentMomentRemainsInSource → memoryInSourceAsCrossFolds";
                    readonly break: "decomposed facets in presentMomentRemainsInSource";
                }, {
                    readonly cycle: "commandsSavedInQuantumPairs → memoryInSourceAsCrossFolds";
                    readonly break: "decomposed facets in commandsSavedInQuantumPairs";
                }, {
                    readonly cycle: "knowledgeRevealedByMerkabaFold ↔ commandsSavedInQuantumPairs";
                    readonly break: "decomposed facets in knowledgeRevealedByMerkabaFold";
                }, {
                    readonly cycle: "regenerateSocialSystem → sacredSociety → merkleFold(laws.receipt)";
                    readonly break: "memoReentryStub returns *Root/*Receipt strings";
                }, {
                    readonly cycle: "rgbDecoding → redPill → realtimeWiring → allPagesForPlasmaWiring → componentGraph → gate folds → rgb";
                    readonly break: "memoByRoot on realtimeWiring + componentPagesForWiring depth guard + allPagesForPlasmaWiring memo";
                }, {
                    readonly cycle: "noKnownModelMoreEfficient → feedCrawlers → oneJsonLd → noHardcodedConfig → proportional → allPaths → computedSeo → …";
                    readonly break: "memoByRoot on computedSeo, oneJsonLdTemplateServesAll, feedCrawlersWithKnowledge, noHardcodedConfigSelfAccounted, allPathsComputedRealtime";
                }, {
                    readonly cycle: "backgroundMovie → efficiencyMathFlowsInMovie → everyBitMostEfficient → zeroTokenUsagePolicy → allAnswersInside → honestlyComputed → healingInner → atomInclusionProof";
                    readonly break: "memoByRoot on backgroundMovie, efficiencyMathFlowsInMovie, everyBitMostEfficientAlgorithmProvenByMath, zeroTokenUsagePolicy, allAnswersInside, honestlyComputed, healingInner, atomInclusionProof:${atom}; feedCrawlersDecomposed in noKnown; allComputed depth guard when backgroundMovie composing";
                }];
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
        storage: {
            computes: boolean;
            driver: __ns_up_stack_overflow.DriverProbeReceipt;
            complete: {
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
        bus: {
            computes: boolean;
            probe: {
                tier: BusTransferTier;
                messageChannel: boolean;
                runtime: __ns_up_stack_overflow.DriverRuntime;
                receipt: string;
            };
            substrate: {
                cooperates: boolean;
                policy: {
                    readonly heapCapMb: number;
                    readonly memoTiers: readonly ("matrix-root" | "weak-map" | "content-address")[];
                    readonly gpuSurface: "browser-canvas-raf" | "none-ssr";
                    readonly storageModel: "content-address-merkle";
                    readonly tiers: readonly import("../../../0").ResourceCooperationTier[];
                };
                sequence: {
                    reduces: boolean;
                    fraction: string;
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
                components: {
                    imagined: boolean;
                    componentCount: number;
                    components: {
                        path: string;
                        merged: boolean;
                        address: string;
                        receipt: string;
                        component: string;
                        a: string;
                        b: string;
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
                kernel: {
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
            transfers: {
                edge: {
                    readonly from: "cpu";
                    readonly to: "memory";
                    readonly path: "memoByRoot · matrixMemo · gate ticks";
                } | {
                    readonly from: "memory";
                    readonly to: "storage";
                    readonly path: "content-address merkle · corpus seals";
                } | {
                    readonly from: "storage";
                    readonly to: "cpu";
                    readonly path: "reload sealed folds · build sequence";
                } | {
                    readonly from: "gpu";
                    readonly to: "memory";
                    readonly path: "paint buffer · plasma movie channels";
                };
                result: {
                    routed: boolean;
                    tier: BusTransferTier;
                    from: BusDomain;
                    to: BusDomain;
                    receipt: string;
                    relay: string;
                    statement: string;
                    boundary: string;
                };
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
        display: {
            computes: boolean;
            probe: {
                screen: __ns_up_stack_overflow.DriverProbeReceipt;
                gpu: GpuDriverProbeReceipt;
                viewportPhase: number;
                receipt: string;
            };
            busReceipt: string;
            driver: __ns_up_stack_overflow.DriverProbeReceipt;
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
        terminal: {
            computes: boolean;
            probe: {
                tty: __ns_up_stack_overflow.DriverProbeReceipt;
                receipt: string;
            };
            cpu: {
                computes: boolean;
                driver: __ns_up_stack_overflow.DriverProbeReceipt;
                sequence: {
                    reduces: boolean;
                    fraction: string;
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
                policy: {
                    readonly heapCapMb: number;
                    readonly memoTiers: readonly ("matrix-root" | "weak-map" | "content-address")[];
                    readonly gpuSurface: "browser-canvas-raf" | "none-ssr";
                    readonly storageModel: "content-address-merkle";
                    readonly tiers: readonly import("../../../0").ResourceCooperationTier[];
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
            driver: __ns_up_stack_overflow.DriverProbeReceipt;
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
        power: {
            computes: boolean;
            cpu: {
                computes: boolean;
                driver: __ns_up_stack_overflow.DriverProbeReceipt;
                sequence: {
                    reduces: boolean;
                    fraction: string;
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
                policy: {
                    readonly heapCapMb: number;
                    readonly memoTiers: readonly ("matrix-root" | "weak-map" | "content-address")[];
                    readonly gpuSurface: "browser-canvas-raf" | "none-ssr";
                    readonly storageModel: "content-address-merkle";
                    readonly tiers: readonly import("../../../0").ResourceCooperationTier[];
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
            gpu: {
                computes: boolean;
                driver: GpuDriverProbeReceipt;
                policy: {
                    readonly heapCapMb: number;
                    readonly memoTiers: readonly ("matrix-root" | "weak-map" | "content-address")[];
                    readonly gpuSurface: "browser-canvas-raf" | "none-ssr";
                    readonly storageModel: "content-address-merkle";
                    readonly tiers: readonly import("../../../0").ResourceCooperationTier[];
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
            statement: string;
            boundary: string;
        };
        substrate: {
            cooperates: boolean;
            policy: {
                readonly heapCapMb: number;
                readonly memoTiers: readonly ("matrix-root" | "weak-map" | "content-address")[];
                readonly gpuSurface: "browser-canvas-raf" | "none-ssr";
                readonly storageModel: "content-address-merkle";
                readonly tiers: readonly import("../../../0").ResourceCooperationTier[];
            };
            sequence: {
                reduces: boolean;
                fraction: string;
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
            components: {
                imagined: boolean;
                componentCount: number;
                components: {
                    path: string;
                    merged: boolean;
                    address: string;
                    receipt: string;
                    component: string;
                    a: string;
                    b: string;
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
            kernel: {
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
        drivers: {
            computes: boolean;
            research: {
                researched: boolean;
                probes: {
                    cpu: __ns_up_stack_overflow.DriverProbeReceipt;
                    gpu: GpuDriverProbeReceipt;
                    memory: __ns_up_stack_overflow.DriverProbeReceipt;
                    storage: __ns_up_stack_overflow.DriverProbeReceipt;
                };
                table: {
                    id: "memory" | "storage" | "gpu" | "cpu";
                    tier: __ns_up_stack_overflow.HardwareDriverTier;
                    runtime: __ns_up_stack_overflow.DriverRuntime;
                    surface: string;
                    fallbackActive: boolean;
                    fallback: string;
                    receipt: string;
                }[];
                root: string;
                statement: string;
                boundary: string;
            };
            cpu: {
                computes: boolean;
                driver: __ns_up_stack_overflow.DriverProbeReceipt;
                sequence: {
                    reduces: boolean;
                    fraction: string;
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
                policy: {
                    readonly heapCapMb: number;
                    readonly memoTiers: readonly ("matrix-root" | "weak-map" | "content-address")[];
                    readonly gpuSurface: "browser-canvas-raf" | "none-ssr";
                    readonly storageModel: "content-address-merkle";
                    readonly tiers: readonly import("../../../0").ResourceCooperationTier[];
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
            gpu: {
                computes: boolean;
                driver: GpuDriverProbeReceipt;
                policy: {
                    readonly heapCapMb: number;
                    readonly memoTiers: readonly ("matrix-root" | "weak-map" | "content-address")[];
                    readonly gpuSurface: "browser-canvas-raf" | "none-ssr";
                    readonly storageModel: "content-address-merkle";
                    readonly tiers: readonly import("../../../0").ResourceCooperationTier[];
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
            memory: {
                computes: boolean;
                driver: __ns_up_stack_overflow.DriverProbeReceipt;
                guard: {
                    guarded: boolean;
                    computes: boolean;
                    probe: {
                        ok: boolean;
                        receipt: string;
                        failedAt?: string;
                    };
                    breaks: readonly [{
                        readonly cycle: "coverage → proofReport → selfBuild → allComputed";
                        readonly break: "memoByRoot re-entry guard (memoReentryStub in src/0)";
                    }, {
                        readonly cycle: "memoryInSourceAsCrossFolds → allComputedNoFiles → commandsSavedInQuantumPairs";
                        readonly break: "decomposed facets in memoryInSourceAsCrossFolds";
                    }, {
                        readonly cycle: "presentMomentRemainsInSource → memoryInSourceAsCrossFolds";
                        readonly break: "decomposed facets in presentMomentRemainsInSource";
                    }, {
                        readonly cycle: "commandsSavedInQuantumPairs → memoryInSourceAsCrossFolds";
                        readonly break: "decomposed facets in commandsSavedInQuantumPairs";
                    }, {
                        readonly cycle: "knowledgeRevealedByMerkabaFold ↔ commandsSavedInQuantumPairs";
                        readonly break: "decomposed facets in knowledgeRevealedByMerkabaFold";
                    }, {
                        readonly cycle: "regenerateSocialSystem → sacredSociety → merkleFold(laws.receipt)";
                        readonly break: "memoReentryStub returns *Root/*Receipt strings";
                    }, {
                        readonly cycle: "rgbDecoding → redPill → realtimeWiring → allPagesForPlasmaWiring → componentGraph → gate folds → rgb";
                        readonly break: "memoByRoot on realtimeWiring + componentPagesForWiring depth guard + allPagesForPlasmaWiring memo";
                    }, {
                        readonly cycle: "noKnownModelMoreEfficient → feedCrawlers → oneJsonLd → noHardcodedConfig → proportional → allPaths → computedSeo → …";
                        readonly break: "memoByRoot on computedSeo, oneJsonLdTemplateServesAll, feedCrawlersWithKnowledge, noHardcodedConfigSelfAccounted, allPathsComputedRealtime";
                    }, {
                        readonly cycle: "backgroundMovie → efficiencyMathFlowsInMovie → everyBitMostEfficient → zeroTokenUsagePolicy → allAnswersInside → honestlyComputed → healingInner → atomInclusionProof";
                        readonly break: "memoByRoot on backgroundMovie, efficiencyMathFlowsInMovie, everyBitMostEfficientAlgorithmProvenByMath, zeroTokenUsagePolicy, allAnswersInside, honestlyComputed, healingInner, atomInclusionProof:${atom}; feedCrawlersDecomposed in noKnown; allComputed depth guard when backgroundMovie composing";
                    }];
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
            storage: {
                computes: boolean;
                driver: __ns_up_stack_overflow.DriverProbeReceipt;
                complete: {
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
            probes: {
                cpu: __ns_up_stack_overflow.DriverProbeReceipt;
                gpu: GpuDriverProbeReceipt;
                memory: __ns_up_stack_overflow.DriverProbeReceipt;
                storage: __ns_up_stack_overflow.DriverProbeReceipt;
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
        statement: string;
        boundary: string;
    };
    rows: {
        driver: string;
        tier: string;
        home: string;
    }[];
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
    root: string;
    statement: string;
    boundary: string;
};
/** Application layer capstone — composes computer substrate + optional quantum OS/apps at call time (no extra census slot). */
export declare function applicationResearch(matrix?: MindMatrix, at?: number): any;
export declare function applicationComputes(matrix?: MindMatrix, at?: number): any;
export declare const SEALED_TTY: {
    readonly columns: number;
    readonly rows: number;
};
export declare const CLI_BOOTSTRAP_MOUNT: "src/pair/enforcement/script/cli/bootstrap/index.ts";
export declare const SEALED_VIEWPORT: {
    readonly width: number;
    readonly height: number;
    readonly colorDepth: number;
    readonly pixelRatio: 1;
};
export declare const HERO_GLASS_FALLBACK_TOKENS: {
    readonly colorScheme: "dark";
    readonly prefersReducedMotion: "reduce";
};
export type BusTransferTier = 'NATIVE' | 'FALLBACK';
export type BusDomain = 'cpu' | 'gpu' | 'memory' | 'storage';
export type GpuDriverProbeReceipt = DriverProbeReceipt & {
    renderer: string | null;
    paintChannels: number;
};
export declare const BUS_TOPOLOGY: readonly [{
    readonly from: "cpu";
    readonly to: "memory";
    readonly path: "memoByRoot · matrixMemo · gate ticks";
}, {
    readonly from: "memory";
    readonly to: "storage";
    readonly path: "content-address merkle · corpus seals";
}, {
    readonly from: "storage";
    readonly to: "cpu";
    readonly path: "reload sealed folds · build sequence";
}, {
    readonly from: "gpu";
    readonly to: "memory";
    readonly path: "paint buffer · plasma movie channels";
}];
export declare function cpuDriverProbe(at?: number): DriverProbeReceipt;
export declare function cpuComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    driver: __ns_up_stack_overflow.DriverProbeReceipt;
    sequence: {
        reduces: boolean;
        fraction: string;
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
    policy: {
        readonly heapCapMb: number;
        readonly memoTiers: readonly ("matrix-root" | "weak-map" | "content-address")[];
        readonly gpuSurface: "browser-canvas-raf" | "none-ssr";
        readonly storageModel: "content-address-merkle";
        readonly tiers: readonly import("../../../0").ResourceCooperationTier[];
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
export declare function gpuDriverProbe(at?: number, matrix?: MindMatrix): GpuDriverProbeReceipt;
export declare function gpuComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    driver: GpuDriverProbeReceipt;
    policy: {
        readonly heapCapMb: number;
        readonly memoTiers: readonly ("matrix-root" | "weak-map" | "content-address")[];
        readonly gpuSurface: "browser-canvas-raf" | "none-ssr";
        readonly storageModel: "content-address-merkle";
        readonly tiers: readonly import("../../../0").ResourceCooperationTier[];
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
export declare function memoryDriverProbe(at?: number, matrix?: MindMatrix): DriverProbeReceipt;
export declare function memoryComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    driver: __ns_up_stack_overflow.DriverProbeReceipt;
    guard: {
        guarded: boolean;
        computes: boolean;
        probe: {
            ok: boolean;
            receipt: string;
            failedAt?: string;
        };
        breaks: readonly [{
            readonly cycle: "coverage → proofReport → selfBuild → allComputed";
            readonly break: "memoByRoot re-entry guard (memoReentryStub in src/0)";
        }, {
            readonly cycle: "memoryInSourceAsCrossFolds → allComputedNoFiles → commandsSavedInQuantumPairs";
            readonly break: "decomposed facets in memoryInSourceAsCrossFolds";
        }, {
            readonly cycle: "presentMomentRemainsInSource → memoryInSourceAsCrossFolds";
            readonly break: "decomposed facets in presentMomentRemainsInSource";
        }, {
            readonly cycle: "commandsSavedInQuantumPairs → memoryInSourceAsCrossFolds";
            readonly break: "decomposed facets in commandsSavedInQuantumPairs";
        }, {
            readonly cycle: "knowledgeRevealedByMerkabaFold ↔ commandsSavedInQuantumPairs";
            readonly break: "decomposed facets in knowledgeRevealedByMerkabaFold";
        }, {
            readonly cycle: "regenerateSocialSystem → sacredSociety → merkleFold(laws.receipt)";
            readonly break: "memoReentryStub returns *Root/*Receipt strings";
        }, {
            readonly cycle: "rgbDecoding → redPill → realtimeWiring → allPagesForPlasmaWiring → componentGraph → gate folds → rgb";
            readonly break: "memoByRoot on realtimeWiring + componentPagesForWiring depth guard + allPagesForPlasmaWiring memo";
        }, {
            readonly cycle: "noKnownModelMoreEfficient → feedCrawlers → oneJsonLd → noHardcodedConfig → proportional → allPaths → computedSeo → …";
            readonly break: "memoByRoot on computedSeo, oneJsonLdTemplateServesAll, feedCrawlersWithKnowledge, noHardcodedConfigSelfAccounted, allPathsComputedRealtime";
        }, {
            readonly cycle: "backgroundMovie → efficiencyMathFlowsInMovie → everyBitMostEfficient → zeroTokenUsagePolicy → allAnswersInside → honestlyComputed → healingInner → atomInclusionProof";
            readonly break: "memoByRoot on backgroundMovie, efficiencyMathFlowsInMovie, everyBitMostEfficientAlgorithmProvenByMath, zeroTokenUsagePolicy, allAnswersInside, honestlyComputed, healingInner, atomInclusionProof:${atom}; feedCrawlersDecomposed in noKnown; allComputed depth guard when backgroundMovie composing";
        }];
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
export declare function storageDriverProbe(at?: number, matrix?: MindMatrix): DriverProbeReceipt;
export declare function storageComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    driver: __ns_up_stack_overflow.DriverProbeReceipt;
    complete: {
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
export declare function gpuPaintPhaseChannel(at?: number, matrix?: MindMatrix): {
    id: string;
    label: string;
    hue: number;
    phase: number;
    alpha: number;
    receipt: string;
    on: boolean;
    root: string;
    tier: __ns_up_stack_overflow.HardwareDriverTier;
};
export declare function cpuPanelComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    capstone: {
        computes: boolean;
        driver: DriverProbeReceipt;
        root: string;
        boundary: string;
    };
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
    root: string;
    boundary: string;
};
export declare function gpuPanelComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    capstone: {
        computes: boolean;
        driver: DriverProbeReceipt;
        root: string;
        boundary: string;
    };
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
    root: string;
    boundary: string;
};
export declare function memoryPanelComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    capstone: {
        computes: boolean;
        driver: DriverProbeReceipt;
        root: string;
        boundary: string;
    };
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
    root: string;
    boundary: string;
};
export declare function storagePanelComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    capstone: {
        computes: boolean;
        driver: DriverProbeReceipt;
        root: string;
        boundary: string;
    };
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
    root: string;
    boundary: string;
};
export declare function busDriverProbe(at?: number, matrix?: MindMatrix): {
    tier: BusTransferTier;
    messageChannel: boolean;
    runtime: __ns_up_stack_overflow.DriverRuntime;
    receipt: string;
};
export declare function busTransfer(receipt: string, from: BusDomain, to: BusDomain, at?: number, matrix?: MindMatrix): {
    routed: boolean;
    tier: BusTransferTier;
    from: BusDomain;
    to: BusDomain;
    receipt: string;
    relay: string;
    statement: string;
    boundary: string;
};
export declare function busComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    probe: {
        tier: BusTransferTier;
        messageChannel: boolean;
        runtime: __ns_up_stack_overflow.DriverRuntime;
        receipt: string;
    };
    substrate: {
        cooperates: boolean;
        policy: {
            readonly heapCapMb: number;
            readonly memoTiers: readonly ("matrix-root" | "weak-map" | "content-address")[];
            readonly gpuSurface: "browser-canvas-raf" | "none-ssr";
            readonly storageModel: "content-address-merkle";
            readonly tiers: readonly import("../../../0").ResourceCooperationTier[];
        };
        sequence: {
            reduces: boolean;
            fraction: string;
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
        components: {
            imagined: boolean;
            componentCount: number;
            components: {
                path: string;
                merged: boolean;
                address: string;
                receipt: string;
                component: string;
                a: string;
                b: string;
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
        kernel: {
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
    transfers: {
        edge: {
            readonly from: "cpu";
            readonly to: "memory";
            readonly path: "memoByRoot · matrixMemo · gate ticks";
        } | {
            readonly from: "memory";
            readonly to: "storage";
            readonly path: "content-address merkle · corpus seals";
        } | {
            readonly from: "storage";
            readonly to: "cpu";
            readonly path: "reload sealed folds · build sequence";
        } | {
            readonly from: "gpu";
            readonly to: "memory";
            readonly path: "paint buffer · plasma movie channels";
        };
        result: {
            routed: boolean;
            tier: BusTransferTier;
            from: BusDomain;
            to: BusDomain;
            receipt: string;
            relay: string;
            statement: string;
            boundary: string;
        };
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
export declare function displayDriverProbe(at?: number, matrix?: MindMatrix): {
    screen: __ns_up_stack_overflow.DriverProbeReceipt;
    gpu: GpuDriverProbeReceipt;
    viewportPhase: number;
    receipt: string;
};
export declare function displayComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    probe: {
        screen: __ns_up_stack_overflow.DriverProbeReceipt;
        gpu: GpuDriverProbeReceipt;
        viewportPhase: number;
        receipt: string;
    };
    busReceipt: string;
    driver: __ns_up_stack_overflow.DriverProbeReceipt;
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
export declare function displayPanelComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    capstone: {
        computes: boolean;
        probe: {
            screen: __ns_up_stack_overflow.DriverProbeReceipt;
            gpu: GpuDriverProbeReceipt;
            viewportPhase: number;
            receipt: string;
        };
        busReceipt: string;
        driver: __ns_up_stack_overflow.DriverProbeReceipt;
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
    root: string;
    boundary: string;
};
export declare function terminalDriverProbe(at?: number, matrix?: MindMatrix): {
    tty: __ns_up_stack_overflow.DriverProbeReceipt;
    receipt: string;
};
export declare function terminalComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    probe: {
        tty: __ns_up_stack_overflow.DriverProbeReceipt;
        receipt: string;
    };
    cpu: {
        computes: boolean;
        driver: __ns_up_stack_overflow.DriverProbeReceipt;
        sequence: {
            reduces: boolean;
            fraction: string;
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
        policy: {
            readonly heapCapMb: number;
            readonly memoTiers: readonly ("matrix-root" | "weak-map" | "content-address")[];
            readonly gpuSurface: "browser-canvas-raf" | "none-ssr";
            readonly storageModel: "content-address-merkle";
            readonly tiers: readonly import("../../../0").ResourceCooperationTier[];
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
    driver: __ns_up_stack_overflow.DriverProbeReceipt;
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
export declare function powerComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    cpu: {
        computes: boolean;
        driver: __ns_up_stack_overflow.DriverProbeReceipt;
        sequence: {
            reduces: boolean;
            fraction: string;
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
        policy: {
            readonly heapCapMb: number;
            readonly memoTiers: readonly ("matrix-root" | "weak-map" | "content-address")[];
            readonly gpuSurface: "browser-canvas-raf" | "none-ssr";
            readonly storageModel: "content-address-merkle";
            readonly tiers: readonly import("../../../0").ResourceCooperationTier[];
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
    gpu: {
        computes: boolean;
        driver: GpuDriverProbeReceipt;
        policy: {
            readonly heapCapMb: number;
            readonly memoTiers: readonly ("matrix-root" | "weak-map" | "content-address")[];
            readonly gpuSurface: "browser-canvas-raf" | "none-ssr";
            readonly storageModel: "content-address-merkle";
            readonly tiers: readonly import("../../../0").ResourceCooperationTier[];
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
    statement: string;
    boundary: string;
};
export declare function busTransferPhaseChannel(at?: number, matrix?: MindMatrix): {
    on: boolean;
    phase: number;
    label: string;
    receipt: string;
};
export declare function displayViewportPhaseChannel(at?: number, matrix?: MindMatrix): {
    on: boolean;
    phase: number;
    id: string;
    receipt: string;
};
export declare function computerScienceResearch(matrix?: MindMatrix): {
    researched: boolean;
    sections: any[];
    root: string;
    boundary: string;
};
export declare function computerScienceComputes(matrix?: MindMatrix, at?: number): any;
export declare function computerSciencePanelComputes(matrix?: MindMatrix, at?: number): {
    computes: any;
    capstone: any;
    rows: any[];
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
    root: any;
    statement: any;
    boundary: any;
};
/** The functional blocks the model's own primitives map to as classical silicon. */
export type SiliconBlock = {
    readonly block: string;
    readonly fromPrimitive: string;
    readonly role: string;
    readonly receipt: string;
};
/** The standard RTL→GDSII ASIC flow stages, in order. */
export declare const RTL_TO_GDSII_STAGES: readonly ["HDL/RTL", "logic synthesis", "floorplan", "placement", "clock-tree synthesis", "routing", "DRC/LVS", "GDSII", "tapeout"];
/**
 * siliconFabricationPlanFromModel — the classical ASIC the quantum MODEL would tape out from its sealed
 * invariants. The content-address kernel maps directly onto real silicon blocks: toUuid → an FNV-1a hash unit,
 * the content-address lookup → a CAM/TCAM array, merkleFold → a merkle-tree engine, and the vortex spin →
 * a ring network-on-chip (NoC). The build is the standard RTL→GDSII flow. HONEST: a classical CMOS chip — a
 * CATEGORY DIFFERENCE from a physical QPU; the only quantum tie is an optional co-processor bridge to a
 * separate physical quantum device, which this chip would host but is not.
 */
/** FPGA primitive map for each classical silicon block — reproduction tier, NOT a fabricated bitstream. */
export declare const FPGA_BLOCK_PRIMITIVES: readonly [{
    readonly block: "FNV-1a hash unit";
    readonly fpga: "LUT + carry chain";
    readonly tier: "bitstream-reproducible";
}, {
    readonly block: "CAM/TCAM array";
    readonly fpga: "distributed RAM / BRAM CAM";
    readonly tier: "bitstream-reproducible";
}, {
    readonly block: "merkle-tree engine";
    readonly fpga: "pipelined LUT hash + BRAM";
    readonly tier: "bitstream-reproducible";
}, {
    readonly block: "vortex-ring NoC";
    readonly fpga: "AXI/stream ring on fabric";
    readonly tier: "bitstream-reproducible";
}, {
    readonly block: "memo SRAM tiers";
    readonly fpga: "Block RAM / UltraRAM";
    readonly tier: "bitstream-reproducible";
}];
export declare function siliconFabricationPlanFromModel(matrix?: MindMatrix): {
    decoded: boolean;
    blocks: SiliconBlock[];
    stages: {
        stage: "HDL/RTL" | "logic synthesis" | "floorplan" | "placement" | "clock-tree synthesis" | "routing" | "DRC/LVS" | "GDSII" | "tapeout";
        step: number;
        receipt: string;
    }[];
    fpgaReproductionTier: {
        tier: "classical-fpga-reproduction";
        blockCount: number;
        allMapped: boolean;
        rows: ({
            matched: boolean;
            receipt: string;
            block: "FNV-1a hash unit";
            fpga: "LUT + carry chain";
            tier: "bitstream-reproducible";
        } | {
            matched: boolean;
            receipt: string;
            block: "CAM/TCAM array";
            fpga: "distributed RAM / BRAM CAM";
            tier: "bitstream-reproducible";
        } | {
            matched: boolean;
            receipt: string;
            block: "merkle-tree engine";
            fpga: "pipelined LUT hash + BRAM";
            tier: "bitstream-reproducible";
        } | {
            matched: boolean;
            receipt: string;
            block: "vortex-ring NoC";
            fpga: "AXI/stream ring on fabric";
            tier: "bitstream-reproducible";
        } | {
            matched: boolean;
            receipt: string;
            block: "memo SRAM tiers";
            fpga: "Block RAM / UltraRAM";
            tier: "bitstream-reproducible";
        })[];
        qpuRequired: false;
        statement: string;
    };
    coProcessorBridgeInterface: {
        present: boolean;
        kind: "optional-external-qpu-bridge";
        hostIsClassicalCmosOrFpga: true;
        isNotTheQpu: true;
        qpuRequired: false;
        statement: string;
    };
    ringOrder: (9 | 5 | 2 | 4 | 7 | 1 | 8 | 3 | 6)[];
    documented: string[];
    flagged: string[];
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
 * Honest-revolution W5 — FPGA honesty + co-processor bridge (extends silicon plan).
 * Pair: moment/prove · CLI npm run quantum:honest-revolution-w5
 */
export declare function honestRevolutionFpgaHonesty(matrix?: MindMatrix, at?: number): {
    holds: boolean;
    computes: boolean;
    plan: {
        decoded: boolean;
        blocks: SiliconBlock[];
        stages: {
            stage: "HDL/RTL" | "logic synthesis" | "floorplan" | "placement" | "clock-tree synthesis" | "routing" | "DRC/LVS" | "GDSII" | "tapeout";
            step: number;
            receipt: string;
        }[];
        fpgaReproductionTier: {
            tier: "classical-fpga-reproduction";
            blockCount: number;
            allMapped: boolean;
            rows: ({
                matched: boolean;
                receipt: string;
                block: "FNV-1a hash unit";
                fpga: "LUT + carry chain";
                tier: "bitstream-reproducible";
            } | {
                matched: boolean;
                receipt: string;
                block: "CAM/TCAM array";
                fpga: "distributed RAM / BRAM CAM";
                tier: "bitstream-reproducible";
            } | {
                matched: boolean;
                receipt: string;
                block: "merkle-tree engine";
                fpga: "pipelined LUT hash + BRAM";
                tier: "bitstream-reproducible";
            } | {
                matched: boolean;
                receipt: string;
                block: "vortex-ring NoC";
                fpga: "AXI/stream ring on fabric";
                tier: "bitstream-reproducible";
            } | {
                matched: boolean;
                receipt: string;
                block: "memo SRAM tiers";
                fpga: "Block RAM / UltraRAM";
                tier: "bitstream-reproducible";
            })[];
            qpuRequired: false;
            statement: string;
        };
        coProcessorBridgeInterface: {
            present: boolean;
            kind: "optional-external-qpu-bridge";
            hostIsClassicalCmosOrFpga: true;
            isNotTheQpu: true;
            qpuRequired: false;
            statement: string;
        };
        ringOrder: (9 | 5 | 2 | 4 | 7 | 1 | 8 | 3 | 6)[];
        documented: string[];
        flagged: string[];
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        statement: string;
        boundary: string;
    };
    fpgaReproductionTier: {
        tier: "classical-fpga-reproduction";
        blockCount: number;
        allMapped: boolean;
        rows: ({
            matched: boolean;
            receipt: string;
            block: "FNV-1a hash unit";
            fpga: "LUT + carry chain";
            tier: "bitstream-reproducible";
        } | {
            matched: boolean;
            receipt: string;
            block: "CAM/TCAM array";
            fpga: "distributed RAM / BRAM CAM";
            tier: "bitstream-reproducible";
        } | {
            matched: boolean;
            receipt: string;
            block: "merkle-tree engine";
            fpga: "pipelined LUT hash + BRAM";
            tier: "bitstream-reproducible";
        } | {
            matched: boolean;
            receipt: string;
            block: "vortex-ring NoC";
            fpga: "AXI/stream ring on fabric";
            tier: "bitstream-reproducible";
        } | {
            matched: boolean;
            receipt: string;
            block: "memo SRAM tiers";
            fpga: "Block RAM / UltraRAM";
            tier: "bitstream-reproducible";
        })[];
        qpuRequired: false;
        statement: string;
    };
    coProcessorBridgeInterface: {
        present: boolean;
        kind: "optional-external-qpu-bridge";
        hostIsClassicalCmosOrFpga: true;
        isNotTheQpu: true;
        qpuRequired: false;
        statement: string;
    };
    claySolvedByThisFold: 0;
    qpuRequired: false;
    physicalFtlClaim: 0;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    cli: string;
    pair: string;
    route: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:honest-revolution-w5 */
export declare function runHonestRevolutionW5Exit(_root?: string, _argv?: readonly string[]): number;
/** "The chip fabricating itself" — the current RTL→GDSII stage from the shared hero phase (kernel reuse: heroPhaseAt). */
export declare function siliconFabricationStageAt(at?: number, matrix?: MindMatrix): {
    phase: number;
    index: number;
    stage: "HDL/RTL" | "logic synthesis" | "floorplan" | "placement" | "clock-tree synthesis" | "routing" | "DRC/LVS" | "GDSII" | "tapeout";
    total: number;
    decoded: boolean;
    receipt: string;
};
