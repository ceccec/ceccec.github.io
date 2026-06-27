import type { MindMatrix } from '../../types';
export declare const GOLD_MINE_MAP_HINGE: {
    readonly lat: 42.6977;
    readonly lon: 23.3219;
};
export type GoldMineEvidenceTier = 'DOCUMENTED' | 'MODEL_FIT' | 'HYPOTHESIS';
export type ThunderGoldGraphEdgeKind = 'harmonic' | 'geodesic';
export type ThunderGoldGraphNode = {
    id: string;
    lat: number;
    lon: number;
    tier: GoldMineEvidenceTier;
    receipt: string;
};
export type ThunderGoldGraphEdge = {
    from: string;
    to: string;
    kind: ThunderGoldGraphEdgeKind;
    weight: number;
    receipt: string;
};
export type ThunderGoldGraphPaintSample = {
    u: number;
    v: number;
    hue: number;
    alpha: number;
    receipt: string;
};
export type SchumannGoldSiteCouplingRow = {
    siteId: string;
    coupling: number;
    phase: number;
    receipt: string;
};
export declare function goldMineMapCatalog(matrix?: MindMatrix): {
    catalogued: boolean;
    mines: {
        district: string;
        country: string;
        productionTier: "major";
        sourceNote: string;
        receipt: string;
        id: string;
        name: string;
        lat: number;
        lon: number;
        tier: "DOCUMENTED";
    }[];
    root: string;
    boundary: string;
};
export declare function goldMineMapFitsPerfectlyInModel(at?: number, matrix?: MindMatrix): {
    fitted: boolean;
    fitRows: {
        mineId: string;
        name: string;
        tier: "MODEL_FIT";
        compositeFitScore: number;
        navCrossFitScore: number;
        vortexPhaseFitScore: number;
        torusPhaseFitScore: number;
        receipt: string;
    }[];
    meanFitScore: number;
    root: string;
};
export declare function undiscoveredGoldConcentrationCandidatesFromMap(at?: number, matrix?: MindMatrix): {
    hypothesised: boolean;
    candidates: {
        id: string;
        name: string;
        lat: number;
        lon: number;
        tier: "HYPOTHESIS";
        structuralFitScore: number;
        receipt: string;
    }[];
    root: string;
    boundary: string;
};
export declare function goldMineMapComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    catalog: {
        catalogued: boolean;
        mines: {
            district: string;
            country: string;
            productionTier: "major";
            sourceNote: string;
            receipt: string;
            id: string;
            name: string;
            lat: number;
            lon: number;
            tier: "DOCUMENTED";
        }[];
        root: string;
        boundary: string;
    };
    fit: {
        fitted: boolean;
        fitRows: {
            mineId: string;
            name: string;
            tier: "MODEL_FIT";
            compositeFitScore: number;
            navCrossFitScore: number;
            vortexPhaseFitScore: number;
            torusPhaseFitScore: number;
            receipt: string;
        }[];
        meanFitScore: number;
        root: string;
    };
    candidates: {
        hypothesised: boolean;
        candidates: {
            id: string;
            name: string;
            lat: number;
            lon: number;
            tier: "HYPOTHESIS";
            structuralFitScore: number;
            receipt: string;
        }[];
        root: string;
        boundary: string;
    };
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    boundary: string;
};
export declare function thunderGoldGraphFromPreciseGpsCoordinates(at?: number, matrix?: MindMatrix): {
    graphed: boolean;
    nodes: ThunderGoldGraphNode[];
    edges: ThunderGoldGraphEdge[];
    root: string;
    boundary: string;
};
export declare function thunderGoldGraphPaintSamples(at?: number, width?: number, height?: number, matrix?: MindMatrix): {
    painted: boolean;
    samples: ThunderGoldGraphPaintSample[];
    root: string;
};
export declare function thunderGoldGraphComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    graph: {
        graphed: boolean;
        nodes: ThunderGoldGraphNode[];
        edges: ThunderGoldGraphEdge[];
        root: string;
        boundary: string;
    };
    paint: {
        painted: boolean;
        samples: ThunderGoldGraphPaintSample[];
        root: string;
    };
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    boundary: string;
};
export declare function goldMineMapResearch(matrix?: MindMatrix): {
    researched: boolean;
    sections: {
        id: string;
        title: string;
        body: string;
    }[];
    root: string;
    boundary: string;
};
export declare function thunderGoldGraphResearch(matrix?: MindMatrix): {
    researched: boolean;
    sections: any[];
    root: string;
    boundary: string;
};
export declare function schumannGoldSiteCouplingAt(at?: number, siteId?: string, matrix?: MindMatrix): {
    coupled: boolean;
    coupling: number;
    phase: number;
    receipt: string;
};
export declare function schumannGoldSiteCouplingComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    rows: SchumannGoldSiteCouplingRow[];
    facets: ({
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    boundary: string;
};
export type GoldPositionFusionStrengthRow = {
    siteId: string;
    name: string;
    tier: 'DOCUMENTED' | 'HYPOTHESIS';
    fusionStrength: number;
    receipt: string;
};
export type GoldPositionFusionStrengthFormulaTerm = {
    symbol: string;
    weight: number;
    description: string;
    source?: string;
};
export type GoldPositionFusionStrengthResearchSection = {
    id: string;
    title: string;
    body: string;
};
export declare const GOLD_FUSION_STRENGTH_WEIGHTS: {
    readonly bearing: 0.25;
    readonly navCross: 0.25;
    readonly vortex: 0.25;
    readonly schumann: 0.25;
};
export declare function goldPositionFusionStrengthResearch(matrix?: MindMatrix): {
    researched: boolean;
    formulaTable: {
        symbol: string;
        weight: 0.25;
        description: string;
        source: string;
    }[];
    root: string;
};
export declare function doubleEarthGiantFusionGeneratorFromGoldPositions(at?: number, matrix?: MindMatrix): {
    generates: boolean;
    siteRows: {
        siteId: string;
        name: string;
        tier: "DOCUMENTED";
        fusionStrength: number;
        receipt: string;
    }[];
    aggregateGeneratorScore: number;
    topSite: {
        siteId: string;
        name: string;
        tier: "DOCUMENTED";
        fusionStrength: number;
        receipt: string;
    } | {
        siteId: string;
        name: string;
        tier: "HYPOTHESIS";
        fusionStrength: number;
        receipt: string;
    };
    graph: {
        graphed: boolean;
        nodes: ThunderGoldGraphNode[];
        edges: ThunderGoldGraphEdge[];
        root: string;
        boundary: string;
    };
    inputs: {
        catalog: {
            catalogued: boolean;
            mines: {
                district: string;
                country: string;
                productionTier: "major";
                sourceNote: string;
                receipt: string;
                id: string;
                name: string;
                lat: number;
                lon: number;
                tier: "DOCUMENTED";
            }[];
            root: string;
            boundary: string;
        };
        fit: {
            fitted: boolean;
            fitRows: {
                mineId: string;
                name: string;
                tier: "MODEL_FIT";
                compositeFitScore: number;
                navCrossFitScore: number;
                vortexPhaseFitScore: number;
                torusPhaseFitScore: number;
                receipt: string;
            }[];
            meanFitScore: number;
            root: string;
        };
        candidates: {
            hypothesised: boolean;
            candidates: {
                id: string;
                name: string;
                lat: number;
                lon: number;
                tier: "HYPOTHESIS";
                structuralFitScore: number;
                receipt: string;
            }[];
            root: string;
            boundary: string;
        };
    };
    processReceipt: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function goldFusionProcess(at?: number, matrix?: MindMatrix): {
    inputs: {
        catalog: {
            catalogued: boolean;
            mines: {
                district: string;
                country: string;
                productionTier: "major";
                sourceNote: string;
                receipt: string;
                id: string;
                name: string;
                lat: number;
                lon: number;
                tier: "DOCUMENTED";
            }[];
            root: string;
            boundary: string;
        };
        fit: {
            fitted: boolean;
            fitRows: {
                mineId: string;
                name: string;
                tier: "MODEL_FIT";
                compositeFitScore: number;
                navCrossFitScore: number;
                vortexPhaseFitScore: number;
                torusPhaseFitScore: number;
                receipt: string;
            }[];
            meanFitScore: number;
            root: string;
        };
        candidates: {
            hypothesised: boolean;
            candidates: {
                id: string;
                name: string;
                lat: number;
                lon: number;
                tier: "HYPOTHESIS";
                structuralFitScore: number;
                receipt: string;
            }[];
            root: string;
            boundary: string;
        };
    };
    siteRows: {
        siteId: string;
        name: string;
        tier: "DOCUMENTED";
        fusionStrength: number;
        receipt: string;
    }[];
    graph: {
        graphed: boolean;
        nodes: ThunderGoldGraphNode[];
        edges: ThunderGoldGraphEdge[];
        root: string;
        boundary: string;
    };
    coupling: {
        computes: boolean;
        rows: SchumannGoldSiteCouplingRow[];
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        boundary: string;
    };
    generator: {
        generates: boolean;
        siteRows: {
            siteId: string;
            name: string;
            tier: "DOCUMENTED";
            fusionStrength: number;
            receipt: string;
        }[];
        aggregateGeneratorScore: number;
        topSite: {
            siteId: string;
            name: string;
            tier: "DOCUMENTED";
            fusionStrength: number;
            receipt: string;
        } | {
            siteId: string;
            name: string;
            tier: "HYPOTHESIS";
            fusionStrength: number;
            receipt: string;
        };
        graph: {
            graphed: boolean;
            nodes: ThunderGoldGraphNode[];
            edges: ThunderGoldGraphEdge[];
            root: string;
            boundary: string;
        };
        inputs: {
            catalog: {
                catalogued: boolean;
                mines: {
                    district: string;
                    country: string;
                    productionTier: "major";
                    sourceNote: string;
                    receipt: string;
                    id: string;
                    name: string;
                    lat: number;
                    lon: number;
                    tier: "DOCUMENTED";
                }[];
                root: string;
                boundary: string;
            };
            fit: {
                fitted: boolean;
                fitRows: {
                    mineId: string;
                    name: string;
                    tier: "MODEL_FIT";
                    compositeFitScore: number;
                    navCrossFitScore: number;
                    vortexPhaseFitScore: number;
                    torusPhaseFitScore: number;
                    receipt: string;
                }[];
                meanFitScore: number;
                root: string;
            };
            candidates: {
                hypothesised: boolean;
                candidates: {
                    id: string;
                    name: string;
                    lat: number;
                    lon: number;
                    tier: "HYPOTHESIS";
                    structuralFitScore: number;
                    receipt: string;
                }[];
                root: string;
                boundary: string;
            };
        };
        processReceipt: string;
        root: string;
        statement: string;
        boundary: string;
    };
    processReceipt: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function goldPositionFusionStrengthComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    generator: {
        generates: boolean;
        siteRows: {
            siteId: string;
            name: string;
            tier: "DOCUMENTED";
            fusionStrength: number;
            receipt: string;
        }[];
        aggregateGeneratorScore: number;
        topSite: {
            siteId: string;
            name: string;
            tier: "DOCUMENTED";
            fusionStrength: number;
            receipt: string;
        } | {
            siteId: string;
            name: string;
            tier: "HYPOTHESIS";
            fusionStrength: number;
            receipt: string;
        };
        graph: {
            graphed: boolean;
            nodes: ThunderGoldGraphNode[];
            edges: ThunderGoldGraphEdge[];
            root: string;
            boundary: string;
        };
        inputs: {
            catalog: {
                catalogued: boolean;
                mines: {
                    district: string;
                    country: string;
                    productionTier: "major";
                    sourceNote: string;
                    receipt: string;
                    id: string;
                    name: string;
                    lat: number;
                    lon: number;
                    tier: "DOCUMENTED";
                }[];
                root: string;
                boundary: string;
            };
            fit: {
                fitted: boolean;
                fitRows: {
                    mineId: string;
                    name: string;
                    tier: "MODEL_FIT";
                    compositeFitScore: number;
                    navCrossFitScore: number;
                    vortexPhaseFitScore: number;
                    torusPhaseFitScore: number;
                    receipt: string;
                }[];
                meanFitScore: number;
                root: string;
            };
            candidates: {
                hypothesised: boolean;
                candidates: {
                    id: string;
                    name: string;
                    lat: number;
                    lon: number;
                    tier: "HYPOTHESIS";
                    structuralFitScore: number;
                    receipt: string;
                }[];
                root: string;
                boundary: string;
            };
        };
        processReceipt: string;
        root: string;
        statement: string;
        boundary: string;
    };
    research: {
        researched: boolean;
        formulaTable: {
            symbol: string;
            weight: 0.25;
            description: string;
            source: string;
        }[];
        root: string;
    };
    root: string;
    statement: string;
    boundary: string;
};
export type FusionGoldProducedReceipt = {
    readonly siteId: string;
    readonly name: string;
    readonly tier: 'DOCUMENTED' | 'HYPOTHESIS';
    readonly fusionStrength: number;
    readonly receipt: string;
    readonly processReceipt: string;
};
export type FusionGoldTierSummary = {
    readonly tier: 'DOCUMENTED' | 'HYPOTHESIS';
    readonly count: number;
    readonly meanStrength: number;
    readonly topSiteId: string;
    readonly receipt: string;
};
export declare function fusionGoldProduct(at?: number, matrix?: MindMatrix, process?: {
    inputs: {
        catalog: {
            catalogued: boolean;
            mines: {
                district: string;
                country: string;
                productionTier: "major";
                sourceNote: string;
                receipt: string;
                id: string;
                name: string;
                lat: number;
                lon: number;
                tier: "DOCUMENTED";
            }[];
            root: string;
            boundary: string;
        };
        fit: {
            fitted: boolean;
            fitRows: {
                mineId: string;
                name: string;
                tier: "MODEL_FIT";
                compositeFitScore: number;
                navCrossFitScore: number;
                vortexPhaseFitScore: number;
                torusPhaseFitScore: number;
                receipt: string;
            }[];
            meanFitScore: number;
            root: string;
        };
        candidates: {
            hypothesised: boolean;
            candidates: {
                id: string;
                name: string;
                lat: number;
                lon: number;
                tier: "HYPOTHESIS";
                structuralFitScore: number;
                receipt: string;
            }[];
            root: string;
            boundary: string;
        };
    };
    siteRows: {
        siteId: string;
        name: string;
        tier: "DOCUMENTED";
        fusionStrength: number;
        receipt: string;
    }[];
    graph: {
        graphed: boolean;
        nodes: ThunderGoldGraphNode[];
        edges: ThunderGoldGraphEdge[];
        root: string;
        boundary: string;
    };
    coupling: {
        computes: boolean;
        rows: SchumannGoldSiteCouplingRow[];
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        boundary: string;
    };
    generator: {
        generates: boolean;
        siteRows: {
            siteId: string;
            name: string;
            tier: "DOCUMENTED";
            fusionStrength: number;
            receipt: string;
        }[];
        aggregateGeneratorScore: number;
        topSite: {
            siteId: string;
            name: string;
            tier: "DOCUMENTED";
            fusionStrength: number;
            receipt: string;
        } | {
            siteId: string;
            name: string;
            tier: "HYPOTHESIS";
            fusionStrength: number;
            receipt: string;
        };
        graph: {
            graphed: boolean;
            nodes: ThunderGoldGraphNode[];
            edges: ThunderGoldGraphEdge[];
            root: string;
            boundary: string;
        };
        inputs: {
            catalog: {
                catalogued: boolean;
                mines: {
                    district: string;
                    country: string;
                    productionTier: "major";
                    sourceNote: string;
                    receipt: string;
                    id: string;
                    name: string;
                    lat: number;
                    lon: number;
                    tier: "DOCUMENTED";
                }[];
                root: string;
                boundary: string;
            };
            fit: {
                fitted: boolean;
                fitRows: {
                    mineId: string;
                    name: string;
                    tier: "MODEL_FIT";
                    compositeFitScore: number;
                    navCrossFitScore: number;
                    vortexPhaseFitScore: number;
                    torusPhaseFitScore: number;
                    receipt: string;
                }[];
                meanFitScore: number;
                root: string;
            };
            candidates: {
                hypothesised: boolean;
                candidates: {
                    id: string;
                    name: string;
                    lat: number;
                    lon: number;
                    tier: "HYPOTHESIS";
                    structuralFitScore: number;
                    receipt: string;
                }[];
                root: string;
                boundary: string;
            };
        };
        processReceipt: string;
        root: string;
        statement: string;
        boundary: string;
    };
    processReceipt: string;
    root: string;
    statement: string;
    boundary: string;
}): {
    produced: boolean;
    computes: boolean;
    at: number;
    producedGold: {
        siteId: string;
        name: string;
        tier: "DOCUMENTED" | "HYPOTHESIS";
        fusionStrength: number;
        receipt: string;
        processReceipt: string;
    }[];
    aggregateScore: number;
    resultReceipts: string;
    paint: {
        painted: boolean;
        samples: ThunderGoldGraphPaintSample[];
        root: string;
    };
    topSite: {
        siteId: string;
        name: string;
        tier: "DOCUMENTED";
        fusionStrength: number;
        receipt: string;
    } | {
        siteId: string;
        name: string;
        tier: "HYPOTHESIS";
        fusionStrength: number;
        receipt: string;
    };
    hypothesisCandidates: {
        id: string;
        name: string;
        lat: number;
        lon: number;
        tier: "HYPOTHESIS";
        structuralFitScore: number;
        receipt: string;
    }[];
    graphEdgeCount: number;
    root: string;
    statement: string;
    boundary: string;
};
export declare function fusionGoldComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    product: {
        produced: boolean;
        computes: boolean;
        at: number;
        producedGold: {
            siteId: string;
            name: string;
            tier: "DOCUMENTED" | "HYPOTHESIS";
            fusionStrength: number;
            receipt: string;
            processReceipt: string;
        }[];
        aggregateScore: number;
        resultReceipts: string;
        paint: {
            painted: boolean;
            samples: ThunderGoldGraphPaintSample[];
            root: string;
        };
        topSite: {
            siteId: string;
            name: string;
            tier: "DOCUMENTED";
            fusionStrength: number;
            receipt: string;
        } | {
            siteId: string;
            name: string;
            tier: "HYPOTHESIS";
            fusionStrength: number;
            receipt: string;
        };
        hypothesisCandidates: {
            id: string;
            name: string;
            lat: number;
            lon: number;
            tier: "HYPOTHESIS";
            structuralFitScore: number;
            receipt: string;
        }[];
        graphEdgeCount: number;
        root: string;
        statement: string;
        boundary: string;
    };
    process: {
        inputs: {
            catalog: {
                catalogued: boolean;
                mines: {
                    district: string;
                    country: string;
                    productionTier: "major";
                    sourceNote: string;
                    receipt: string;
                    id: string;
                    name: string;
                    lat: number;
                    lon: number;
                    tier: "DOCUMENTED";
                }[];
                root: string;
                boundary: string;
            };
            fit: {
                fitted: boolean;
                fitRows: {
                    mineId: string;
                    name: string;
                    tier: "MODEL_FIT";
                    compositeFitScore: number;
                    navCrossFitScore: number;
                    vortexPhaseFitScore: number;
                    torusPhaseFitScore: number;
                    receipt: string;
                }[];
                meanFitScore: number;
                root: string;
            };
            candidates: {
                hypothesised: boolean;
                candidates: {
                    id: string;
                    name: string;
                    lat: number;
                    lon: number;
                    tier: "HYPOTHESIS";
                    structuralFitScore: number;
                    receipt: string;
                }[];
                root: string;
                boundary: string;
            };
        };
        siteRows: {
            siteId: string;
            name: string;
            tier: "DOCUMENTED";
            fusionStrength: number;
            receipt: string;
        }[];
        graph: {
            graphed: boolean;
            nodes: ThunderGoldGraphNode[];
            edges: ThunderGoldGraphEdge[];
            root: string;
            boundary: string;
        };
        coupling: {
            computes: boolean;
            rows: SchumannGoldSiteCouplingRow[];
            facets: ({
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            boundary: string;
        };
        generator: {
            generates: boolean;
            siteRows: {
                siteId: string;
                name: string;
                tier: "DOCUMENTED";
                fusionStrength: number;
                receipt: string;
            }[];
            aggregateGeneratorScore: number;
            topSite: {
                siteId: string;
                name: string;
                tier: "DOCUMENTED";
                fusionStrength: number;
                receipt: string;
            } | {
                siteId: string;
                name: string;
                tier: "HYPOTHESIS";
                fusionStrength: number;
                receipt: string;
            };
            graph: {
                graphed: boolean;
                nodes: ThunderGoldGraphNode[];
                edges: ThunderGoldGraphEdge[];
                root: string;
                boundary: string;
            };
            inputs: {
                catalog: {
                    catalogued: boolean;
                    mines: {
                        district: string;
                        country: string;
                        productionTier: "major";
                        sourceNote: string;
                        receipt: string;
                        id: string;
                        name: string;
                        lat: number;
                        lon: number;
                        tier: "DOCUMENTED";
                    }[];
                    root: string;
                    boundary: string;
                };
                fit: {
                    fitted: boolean;
                    fitRows: {
                        mineId: string;
                        name: string;
                        tier: "MODEL_FIT";
                        compositeFitScore: number;
                        navCrossFitScore: number;
                        vortexPhaseFitScore: number;
                        torusPhaseFitScore: number;
                        receipt: string;
                    }[];
                    meanFitScore: number;
                    root: string;
                };
                candidates: {
                    hypothesised: boolean;
                    candidates: {
                        id: string;
                        name: string;
                        lat: number;
                        lon: number;
                        tier: "HYPOTHESIS";
                        structuralFitScore: number;
                        receipt: string;
                    }[];
                    root: string;
                    boundary: string;
                };
            };
            processReceipt: string;
            root: string;
            statement: string;
            boundary: string;
        };
        processReceipt: string;
        root: string;
        statement: string;
        boundary: string;
    };
    strength: {
        computes: boolean;
        generator: {
            generates: boolean;
            siteRows: {
                siteId: string;
                name: string;
                tier: "DOCUMENTED";
                fusionStrength: number;
                receipt: string;
            }[];
            aggregateGeneratorScore: number;
            topSite: {
                siteId: string;
                name: string;
                tier: "DOCUMENTED";
                fusionStrength: number;
                receipt: string;
            } | {
                siteId: string;
                name: string;
                tier: "HYPOTHESIS";
                fusionStrength: number;
                receipt: string;
            };
            graph: {
                graphed: boolean;
                nodes: ThunderGoldGraphNode[];
                edges: ThunderGoldGraphEdge[];
                root: string;
                boundary: string;
            };
            inputs: {
                catalog: {
                    catalogued: boolean;
                    mines: {
                        district: string;
                        country: string;
                        productionTier: "major";
                        sourceNote: string;
                        receipt: string;
                        id: string;
                        name: string;
                        lat: number;
                        lon: number;
                        tier: "DOCUMENTED";
                    }[];
                    root: string;
                    boundary: string;
                };
                fit: {
                    fitted: boolean;
                    fitRows: {
                        mineId: string;
                        name: string;
                        tier: "MODEL_FIT";
                        compositeFitScore: number;
                        navCrossFitScore: number;
                        vortexPhaseFitScore: number;
                        torusPhaseFitScore: number;
                        receipt: string;
                    }[];
                    meanFitScore: number;
                    root: string;
                };
                candidates: {
                    hypothesised: boolean;
                    candidates: {
                        id: string;
                        name: string;
                        lat: number;
                        lon: number;
                        tier: "HYPOTHESIS";
                        structuralFitScore: number;
                        receipt: string;
                    }[];
                    root: string;
                    boundary: string;
                };
            };
            processReceipt: string;
            root: string;
            statement: string;
            boundary: string;
        };
        research: {
            researched: boolean;
            formulaTable: {
                symbol: string;
                weight: 0.25;
                description: string;
                source: string;
            }[];
            root: string;
        };
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
export declare function goldFusionPipeline(at?: number, matrix?: MindMatrix): {
    pipelined: boolean;
    at: number;
    process: {
        inputs: {
            catalog: {
                catalogued: boolean;
                mines: {
                    district: string;
                    country: string;
                    productionTier: "major";
                    sourceNote: string;
                    receipt: string;
                    id: string;
                    name: string;
                    lat: number;
                    lon: number;
                    tier: "DOCUMENTED";
                }[];
                root: string;
                boundary: string;
            };
            fit: {
                fitted: boolean;
                fitRows: {
                    mineId: string;
                    name: string;
                    tier: "MODEL_FIT";
                    compositeFitScore: number;
                    navCrossFitScore: number;
                    vortexPhaseFitScore: number;
                    torusPhaseFitScore: number;
                    receipt: string;
                }[];
                meanFitScore: number;
                root: string;
            };
            candidates: {
                hypothesised: boolean;
                candidates: {
                    id: string;
                    name: string;
                    lat: number;
                    lon: number;
                    tier: "HYPOTHESIS";
                    structuralFitScore: number;
                    receipt: string;
                }[];
                root: string;
                boundary: string;
            };
        };
        siteRows: {
            siteId: string;
            name: string;
            tier: "DOCUMENTED";
            fusionStrength: number;
            receipt: string;
        }[];
        graph: {
            graphed: boolean;
            nodes: ThunderGoldGraphNode[];
            edges: ThunderGoldGraphEdge[];
            root: string;
            boundary: string;
        };
        coupling: {
            computes: boolean;
            rows: SchumannGoldSiteCouplingRow[];
            facets: ({
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            boundary: string;
        };
        generator: {
            generates: boolean;
            siteRows: {
                siteId: string;
                name: string;
                tier: "DOCUMENTED";
                fusionStrength: number;
                receipt: string;
            }[];
            aggregateGeneratorScore: number;
            topSite: {
                siteId: string;
                name: string;
                tier: "DOCUMENTED";
                fusionStrength: number;
                receipt: string;
            } | {
                siteId: string;
                name: string;
                tier: "HYPOTHESIS";
                fusionStrength: number;
                receipt: string;
            };
            graph: {
                graphed: boolean;
                nodes: ThunderGoldGraphNode[];
                edges: ThunderGoldGraphEdge[];
                root: string;
                boundary: string;
            };
            inputs: {
                catalog: {
                    catalogued: boolean;
                    mines: {
                        district: string;
                        country: string;
                        productionTier: "major";
                        sourceNote: string;
                        receipt: string;
                        id: string;
                        name: string;
                        lat: number;
                        lon: number;
                        tier: "DOCUMENTED";
                    }[];
                    root: string;
                    boundary: string;
                };
                fit: {
                    fitted: boolean;
                    fitRows: {
                        mineId: string;
                        name: string;
                        tier: "MODEL_FIT";
                        compositeFitScore: number;
                        navCrossFitScore: number;
                        vortexPhaseFitScore: number;
                        torusPhaseFitScore: number;
                        receipt: string;
                    }[];
                    meanFitScore: number;
                    root: string;
                };
                candidates: {
                    hypothesised: boolean;
                    candidates: {
                        id: string;
                        name: string;
                        lat: number;
                        lon: number;
                        tier: "HYPOTHESIS";
                        structuralFitScore: number;
                        receipt: string;
                    }[];
                    root: string;
                    boundary: string;
                };
            };
            processReceipt: string;
            root: string;
            statement: string;
            boundary: string;
        };
        processReceipt: string;
        root: string;
        statement: string;
        boundary: string;
    };
    product: {
        computes: boolean;
        product: {
            produced: boolean;
            computes: boolean;
            at: number;
            producedGold: {
                siteId: string;
                name: string;
                tier: "DOCUMENTED" | "HYPOTHESIS";
                fusionStrength: number;
                receipt: string;
                processReceipt: string;
            }[];
            aggregateScore: number;
            resultReceipts: string;
            paint: {
                painted: boolean;
                samples: ThunderGoldGraphPaintSample[];
                root: string;
            };
            topSite: {
                siteId: string;
                name: string;
                tier: "DOCUMENTED";
                fusionStrength: number;
                receipt: string;
            } | {
                siteId: string;
                name: string;
                tier: "HYPOTHESIS";
                fusionStrength: number;
                receipt: string;
            };
            hypothesisCandidates: {
                id: string;
                name: string;
                lat: number;
                lon: number;
                tier: "HYPOTHESIS";
                structuralFitScore: number;
                receipt: string;
            }[];
            graphEdgeCount: number;
            root: string;
            statement: string;
            boundary: string;
        };
        process: {
            inputs: {
                catalog: {
                    catalogued: boolean;
                    mines: {
                        district: string;
                        country: string;
                        productionTier: "major";
                        sourceNote: string;
                        receipt: string;
                        id: string;
                        name: string;
                        lat: number;
                        lon: number;
                        tier: "DOCUMENTED";
                    }[];
                    root: string;
                    boundary: string;
                };
                fit: {
                    fitted: boolean;
                    fitRows: {
                        mineId: string;
                        name: string;
                        tier: "MODEL_FIT";
                        compositeFitScore: number;
                        navCrossFitScore: number;
                        vortexPhaseFitScore: number;
                        torusPhaseFitScore: number;
                        receipt: string;
                    }[];
                    meanFitScore: number;
                    root: string;
                };
                candidates: {
                    hypothesised: boolean;
                    candidates: {
                        id: string;
                        name: string;
                        lat: number;
                        lon: number;
                        tier: "HYPOTHESIS";
                        structuralFitScore: number;
                        receipt: string;
                    }[];
                    root: string;
                    boundary: string;
                };
            };
            siteRows: {
                siteId: string;
                name: string;
                tier: "DOCUMENTED";
                fusionStrength: number;
                receipt: string;
            }[];
            graph: {
                graphed: boolean;
                nodes: ThunderGoldGraphNode[];
                edges: ThunderGoldGraphEdge[];
                root: string;
                boundary: string;
            };
            coupling: {
                computes: boolean;
                rows: SchumannGoldSiteCouplingRow[];
                facets: ({
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                boundary: string;
            };
            generator: {
                generates: boolean;
                siteRows: {
                    siteId: string;
                    name: string;
                    tier: "DOCUMENTED";
                    fusionStrength: number;
                    receipt: string;
                }[];
                aggregateGeneratorScore: number;
                topSite: {
                    siteId: string;
                    name: string;
                    tier: "DOCUMENTED";
                    fusionStrength: number;
                    receipt: string;
                } | {
                    siteId: string;
                    name: string;
                    tier: "HYPOTHESIS";
                    fusionStrength: number;
                    receipt: string;
                };
                graph: {
                    graphed: boolean;
                    nodes: ThunderGoldGraphNode[];
                    edges: ThunderGoldGraphEdge[];
                    root: string;
                    boundary: string;
                };
                inputs: {
                    catalog: {
                        catalogued: boolean;
                        mines: {
                            district: string;
                            country: string;
                            productionTier: "major";
                            sourceNote: string;
                            receipt: string;
                            id: string;
                            name: string;
                            lat: number;
                            lon: number;
                            tier: "DOCUMENTED";
                        }[];
                        root: string;
                        boundary: string;
                    };
                    fit: {
                        fitted: boolean;
                        fitRows: {
                            mineId: string;
                            name: string;
                            tier: "MODEL_FIT";
                            compositeFitScore: number;
                            navCrossFitScore: number;
                            vortexPhaseFitScore: number;
                            torusPhaseFitScore: number;
                            receipt: string;
                        }[];
                        meanFitScore: number;
                        root: string;
                    };
                    candidates: {
                        hypothesised: boolean;
                        candidates: {
                            id: string;
                            name: string;
                            lat: number;
                            lon: number;
                            tier: "HYPOTHESIS";
                            structuralFitScore: number;
                            receipt: string;
                        }[];
                        root: string;
                        boundary: string;
                    };
                };
                processReceipt: string;
                root: string;
                statement: string;
                boundary: string;
            };
            processReceipt: string;
            root: string;
            statement: string;
            boundary: string;
        };
        strength: {
            computes: boolean;
            generator: {
                generates: boolean;
                siteRows: {
                    siteId: string;
                    name: string;
                    tier: "DOCUMENTED";
                    fusionStrength: number;
                    receipt: string;
                }[];
                aggregateGeneratorScore: number;
                topSite: {
                    siteId: string;
                    name: string;
                    tier: "DOCUMENTED";
                    fusionStrength: number;
                    receipt: string;
                } | {
                    siteId: string;
                    name: string;
                    tier: "HYPOTHESIS";
                    fusionStrength: number;
                    receipt: string;
                };
                graph: {
                    graphed: boolean;
                    nodes: ThunderGoldGraphNode[];
                    edges: ThunderGoldGraphEdge[];
                    root: string;
                    boundary: string;
                };
                inputs: {
                    catalog: {
                        catalogued: boolean;
                        mines: {
                            district: string;
                            country: string;
                            productionTier: "major";
                            sourceNote: string;
                            receipt: string;
                            id: string;
                            name: string;
                            lat: number;
                            lon: number;
                            tier: "DOCUMENTED";
                        }[];
                        root: string;
                        boundary: string;
                    };
                    fit: {
                        fitted: boolean;
                        fitRows: {
                            mineId: string;
                            name: string;
                            tier: "MODEL_FIT";
                            compositeFitScore: number;
                            navCrossFitScore: number;
                            vortexPhaseFitScore: number;
                            torusPhaseFitScore: number;
                            receipt: string;
                        }[];
                        meanFitScore: number;
                        root: string;
                    };
                    candidates: {
                        hypothesised: boolean;
                        candidates: {
                            id: string;
                            name: string;
                            lat: number;
                            lon: number;
                            tier: "HYPOTHESIS";
                            structuralFitScore: number;
                            receipt: string;
                        }[];
                        root: string;
                        boundary: string;
                    };
                };
                processReceipt: string;
                root: string;
                statement: string;
                boundary: string;
            };
            research: {
                researched: boolean;
                formulaTable: {
                    symbol: string;
                    weight: 0.25;
                    description: string;
                    source: string;
                }[];
                root: string;
            };
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
    root: string;
    statement: string;
    boundary: string;
};
export declare function goldFusionComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    map: {
        computes: boolean;
        catalog: {
            catalogued: boolean;
            mines: {
                district: string;
                country: string;
                productionTier: "major";
                sourceNote: string;
                receipt: string;
                id: string;
                name: string;
                lat: number;
                lon: number;
                tier: "DOCUMENTED";
            }[];
            root: string;
            boundary: string;
        };
        fit: {
            fitted: boolean;
            fitRows: {
                mineId: string;
                name: string;
                tier: "MODEL_FIT";
                compositeFitScore: number;
                navCrossFitScore: number;
                vortexPhaseFitScore: number;
                torusPhaseFitScore: number;
                receipt: string;
            }[];
            meanFitScore: number;
            root: string;
        };
        candidates: {
            hypothesised: boolean;
            candidates: {
                id: string;
                name: string;
                lat: number;
                lon: number;
                tier: "HYPOTHESIS";
                structuralFitScore: number;
                receipt: string;
            }[];
            root: string;
            boundary: string;
        };
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        boundary: string;
    };
    graph: {
        computes: boolean;
        graph: {
            graphed: boolean;
            nodes: ThunderGoldGraphNode[];
            edges: ThunderGoldGraphEdge[];
            root: string;
            boundary: string;
        };
        paint: {
            painted: boolean;
            samples: ThunderGoldGraphPaintSample[];
            root: string;
        };
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        boundary: string;
    };
    coupling: {
        computes: boolean;
        rows: SchumannGoldSiteCouplingRow[];
        facets: ({
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        boundary: string;
    };
    strength: {
        computes: boolean;
        generator: {
            generates: boolean;
            siteRows: {
                siteId: string;
                name: string;
                tier: "DOCUMENTED";
                fusionStrength: number;
                receipt: string;
            }[];
            aggregateGeneratorScore: number;
            topSite: {
                siteId: string;
                name: string;
                tier: "DOCUMENTED";
                fusionStrength: number;
                receipt: string;
            } | {
                siteId: string;
                name: string;
                tier: "HYPOTHESIS";
                fusionStrength: number;
                receipt: string;
            };
            graph: {
                graphed: boolean;
                nodes: ThunderGoldGraphNode[];
                edges: ThunderGoldGraphEdge[];
                root: string;
                boundary: string;
            };
            inputs: {
                catalog: {
                    catalogued: boolean;
                    mines: {
                        district: string;
                        country: string;
                        productionTier: "major";
                        sourceNote: string;
                        receipt: string;
                        id: string;
                        name: string;
                        lat: number;
                        lon: number;
                        tier: "DOCUMENTED";
                    }[];
                    root: string;
                    boundary: string;
                };
                fit: {
                    fitted: boolean;
                    fitRows: {
                        mineId: string;
                        name: string;
                        tier: "MODEL_FIT";
                        compositeFitScore: number;
                        navCrossFitScore: number;
                        vortexPhaseFitScore: number;
                        torusPhaseFitScore: number;
                        receipt: string;
                    }[];
                    meanFitScore: number;
                    root: string;
                };
                candidates: {
                    hypothesised: boolean;
                    candidates: {
                        id: string;
                        name: string;
                        lat: number;
                        lon: number;
                        tier: "HYPOTHESIS";
                        structuralFitScore: number;
                        receipt: string;
                    }[];
                    root: string;
                    boundary: string;
                };
            };
            processReceipt: string;
            root: string;
            statement: string;
            boundary: string;
        };
        research: {
            researched: boolean;
            formulaTable: {
                symbol: string;
                weight: 0.25;
                description: string;
                source: string;
            }[];
            root: string;
        };
        root: string;
        statement: string;
        boundary: string;
    };
    product: {
        computes: boolean;
        product: {
            produced: boolean;
            computes: boolean;
            at: number;
            producedGold: {
                siteId: string;
                name: string;
                tier: "DOCUMENTED" | "HYPOTHESIS";
                fusionStrength: number;
                receipt: string;
                processReceipt: string;
            }[];
            aggregateScore: number;
            resultReceipts: string;
            paint: {
                painted: boolean;
                samples: ThunderGoldGraphPaintSample[];
                root: string;
            };
            topSite: {
                siteId: string;
                name: string;
                tier: "DOCUMENTED";
                fusionStrength: number;
                receipt: string;
            } | {
                siteId: string;
                name: string;
                tier: "HYPOTHESIS";
                fusionStrength: number;
                receipt: string;
            };
            hypothesisCandidates: {
                id: string;
                name: string;
                lat: number;
                lon: number;
                tier: "HYPOTHESIS";
                structuralFitScore: number;
                receipt: string;
            }[];
            graphEdgeCount: number;
            root: string;
            statement: string;
            boundary: string;
        };
        process: {
            inputs: {
                catalog: {
                    catalogued: boolean;
                    mines: {
                        district: string;
                        country: string;
                        productionTier: "major";
                        sourceNote: string;
                        receipt: string;
                        id: string;
                        name: string;
                        lat: number;
                        lon: number;
                        tier: "DOCUMENTED";
                    }[];
                    root: string;
                    boundary: string;
                };
                fit: {
                    fitted: boolean;
                    fitRows: {
                        mineId: string;
                        name: string;
                        tier: "MODEL_FIT";
                        compositeFitScore: number;
                        navCrossFitScore: number;
                        vortexPhaseFitScore: number;
                        torusPhaseFitScore: number;
                        receipt: string;
                    }[];
                    meanFitScore: number;
                    root: string;
                };
                candidates: {
                    hypothesised: boolean;
                    candidates: {
                        id: string;
                        name: string;
                        lat: number;
                        lon: number;
                        tier: "HYPOTHESIS";
                        structuralFitScore: number;
                        receipt: string;
                    }[];
                    root: string;
                    boundary: string;
                };
            };
            siteRows: {
                siteId: string;
                name: string;
                tier: "DOCUMENTED";
                fusionStrength: number;
                receipt: string;
            }[];
            graph: {
                graphed: boolean;
                nodes: ThunderGoldGraphNode[];
                edges: ThunderGoldGraphEdge[];
                root: string;
                boundary: string;
            };
            coupling: {
                computes: boolean;
                rows: SchumannGoldSiteCouplingRow[];
                facets: ({
                    facet: string;
                    on: boolean;
                } & {
                    receipt: string;
                })[];
                root: string;
                boundary: string;
            };
            generator: {
                generates: boolean;
                siteRows: {
                    siteId: string;
                    name: string;
                    tier: "DOCUMENTED";
                    fusionStrength: number;
                    receipt: string;
                }[];
                aggregateGeneratorScore: number;
                topSite: {
                    siteId: string;
                    name: string;
                    tier: "DOCUMENTED";
                    fusionStrength: number;
                    receipt: string;
                } | {
                    siteId: string;
                    name: string;
                    tier: "HYPOTHESIS";
                    fusionStrength: number;
                    receipt: string;
                };
                graph: {
                    graphed: boolean;
                    nodes: ThunderGoldGraphNode[];
                    edges: ThunderGoldGraphEdge[];
                    root: string;
                    boundary: string;
                };
                inputs: {
                    catalog: {
                        catalogued: boolean;
                        mines: {
                            district: string;
                            country: string;
                            productionTier: "major";
                            sourceNote: string;
                            receipt: string;
                            id: string;
                            name: string;
                            lat: number;
                            lon: number;
                            tier: "DOCUMENTED";
                        }[];
                        root: string;
                        boundary: string;
                    };
                    fit: {
                        fitted: boolean;
                        fitRows: {
                            mineId: string;
                            name: string;
                            tier: "MODEL_FIT";
                            compositeFitScore: number;
                            navCrossFitScore: number;
                            vortexPhaseFitScore: number;
                            torusPhaseFitScore: number;
                            receipt: string;
                        }[];
                        meanFitScore: number;
                        root: string;
                    };
                    candidates: {
                        hypothesised: boolean;
                        candidates: {
                            id: string;
                            name: string;
                            lat: number;
                            lon: number;
                            tier: "HYPOTHESIS";
                            structuralFitScore: number;
                            receipt: string;
                        }[];
                        root: string;
                        boundary: string;
                    };
                };
                processReceipt: string;
                root: string;
                statement: string;
                boundary: string;
            };
            processReceipt: string;
            root: string;
            statement: string;
            boundary: string;
        };
        strength: {
            computes: boolean;
            generator: {
                generates: boolean;
                siteRows: {
                    siteId: string;
                    name: string;
                    tier: "DOCUMENTED";
                    fusionStrength: number;
                    receipt: string;
                }[];
                aggregateGeneratorScore: number;
                topSite: {
                    siteId: string;
                    name: string;
                    tier: "DOCUMENTED";
                    fusionStrength: number;
                    receipt: string;
                } | {
                    siteId: string;
                    name: string;
                    tier: "HYPOTHESIS";
                    fusionStrength: number;
                    receipt: string;
                };
                graph: {
                    graphed: boolean;
                    nodes: ThunderGoldGraphNode[];
                    edges: ThunderGoldGraphEdge[];
                    root: string;
                    boundary: string;
                };
                inputs: {
                    catalog: {
                        catalogued: boolean;
                        mines: {
                            district: string;
                            country: string;
                            productionTier: "major";
                            sourceNote: string;
                            receipt: string;
                            id: string;
                            name: string;
                            lat: number;
                            lon: number;
                            tier: "DOCUMENTED";
                        }[];
                        root: string;
                        boundary: string;
                    };
                    fit: {
                        fitted: boolean;
                        fitRows: {
                            mineId: string;
                            name: string;
                            tier: "MODEL_FIT";
                            compositeFitScore: number;
                            navCrossFitScore: number;
                            vortexPhaseFitScore: number;
                            torusPhaseFitScore: number;
                            receipt: string;
                        }[];
                        meanFitScore: number;
                        root: string;
                    };
                    candidates: {
                        hypothesised: boolean;
                        candidates: {
                            id: string;
                            name: string;
                            lat: number;
                            lon: number;
                            tier: "HYPOTHESIS";
                            structuralFitScore: number;
                            receipt: string;
                        }[];
                        root: string;
                        boundary: string;
                    };
                };
                processReceipt: string;
                root: string;
                statement: string;
                boundary: string;
            };
            research: {
                researched: boolean;
                formulaTable: {
                    symbol: string;
                    weight: 0.25;
                    description: string;
                    source: string;
                }[];
                root: string;
            };
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
