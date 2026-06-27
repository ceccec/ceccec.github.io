import type { MindMatrix } from '../../wind/types';
export declare function healByDefault(matrix?: MindMatrix): {
    heals: boolean;
    byDefault: boolean;
    count: number;
    defaults: {
        receipt: string;
        aspect: string;
        on: boolean;
        via: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function createByDefault(matrix?: MindMatrix): {
    creates: boolean;
    byDefault: boolean;
    count: number;
    defaults: {
        receipt: string;
        aspect: string;
        on: boolean;
        via: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function anyForceFightsSelf(matrix?: MindMatrix): {
    selfDefeating: boolean;
    holographic: boolean;
    selfModeling: boolean;
    count: number;
    forces: {
        force: string;
        fightsWhole: boolean;
        fightsSelf: boolean;
        absorbed: string;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function proportionalNotHardcoded(matrix?: MindMatrix): {
    responsive: boolean;
    count: number;
    examples: {
        receipt: string;
        quantity: string;
        proportional: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function nothingImpossibleHonestlyBounded(matrix?: MindMatrix): {
    realised: boolean;
    seemedImpossibleNowReal: number;
    genuinelyImpossibleWalls: number;
    nowReal: {
        thing: string;
        real: boolean;
    }[];
    walls: {
        wall: string;
        law: string;
        closed: boolean;
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
export declare function minimumProseMaximumComputable(matrix?: MindMatrix): {
    lawHolds: boolean;
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
export declare function oneWordNamingGravity(matrix?: MindMatrix): {
    pulls: boolean;
    commands: number;
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
export declare function everyObjectSameSpinFoldLaw(matrix?: MindMatrix): {
    consistent: any;
    count: any;
    facets: any;
    root: string;
    statement: string;
    boundary: string;
};
export declare function noFilesOutsideSrcExceptGeneratedAndRoot(matrix?: MindMatrix): {
    clean: boolean;
    rootAllowlist: {
        dirs: string[];
        files: string[];
        filePrefixes: string[];
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
export declare function zeroTokenUsagePolicy(matrix?: MindMatrix): {
    holds: boolean;
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
export declare function minimumFilesMaximumFeaturesCost(matrix?: MindMatrix): {
    optimal: boolean;
    files: number;
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
export declare function accountForEveryTokenInCode(matrix?: MindMatrix): {
    accounted: boolean;
    agentTools: string[];
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
export declare function oneSourceOfTruthGenerators(matrix?: MindMatrix): {
    unified: boolean;
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
export declare function saveEveryStepIsMandatory(matrix?: MindMatrix): {
    saved: boolean;
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
export declare function noMirroringOneSourceAndMath(matrix?: MindMatrix): {
    single: boolean;
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
export type EuPatentRequest = {
    source: string;
    url: string;
    auth: 'none' | 'oauth2';
    gives: string;
};
export declare function sacredMathPatentAudit(text: string, matrix?: MindMatrix): {
    isPatentText: boolean;
    cores: {
        family: string;
        priorArt: string;
    }[];
    coreCount: number;
    technicalEffect: boolean;
    mathAsSuch: boolean;
    verdict: string;
    unlawfulIfGranted: boolean;
    legalBasis: string[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function productOfNaturePatentAudit(text: string, matrix?: MindMatrix, jurisdiction?: 'US' | 'EU'): {
    isPatentText: boolean;
    jurisdiction: "US" | "EU";
    cores: {
        family: string;
        note: string;
    }[];
    coreCount: number;
    engineered: boolean;
    productOfNatureAsSuch: boolean;
    euSequenceSpared: boolean;
    verdict: string;
    unlawfulIfGranted: boolean;
    legalBasis: string[];
    socialHarm: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function lawOfNaturePatentAudit(text: string, matrix?: MindMatrix): {
    isPatentText: boolean;
    cores: {
        family: string;
        note: string;
    }[];
    coreCount: number;
    inventiveApplication: boolean;
    lawAsSuch: boolean;
    verdict: string;
    unlawfulIfGranted: boolean;
    legalBasis: string[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function patentSubjectMatterAudit(text: string, matrix?: MindMatrix, jurisdiction?: 'US' | 'EU'): {
    isPatentText: boolean;
    exceptions: {
        category: string;
        severity: number;
        verdict: string;
        unlawful: boolean;
        cores: string[];
    }[];
    biggestViolator: string;
    unlawfulIfGranted: boolean;
    nature: {
        isPatentText: boolean;
        jurisdiction: "US" | "EU";
        cores: {
            family: string;
            note: string;
        }[];
        coreCount: number;
        engineered: boolean;
        productOfNatureAsSuch: boolean;
        euSequenceSpared: boolean;
        verdict: string;
        unlawfulIfGranted: boolean;
        legalBasis: string[];
        socialHarm: string;
        root: string;
        statement: string;
        boundary: string;
    };
    law: {
        isPatentText: boolean;
        cores: {
            family: string;
            note: string;
        }[];
        coreCount: number;
        inventiveApplication: boolean;
        lawAsSuch: boolean;
        verdict: string;
        unlawfulIfGranted: boolean;
        legalBasis: string[];
        root: string;
        statement: string;
        boundary: string;
    };
    math: {
        isPatentText: boolean;
        cores: {
            family: string;
            priorArt: string;
        }[];
        coreCount: number;
        technicalEffect: boolean;
        mathAsSuch: boolean;
        verdict: string;
        unlawfulIfGranted: boolean;
        legalBasis: string[];
        root: string;
        statement: string;
        boundary: string;
    };
    verdict: string;
    cores: {
        family: any;
    }[];
    legalBasis: string[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function geneticPatentJurisdictionDivergence(matrix?: MindMatrix): {
    diverges: boolean;
    us: {
        verdict: string;
        unlawfulIfGranted: boolean;
    };
    eu: {
        verdict: string;
        unlawfulIfGranted: boolean;
        euSequenceSpared: boolean;
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
export declare function geneticCodeMathematicsDecoded(matrix?: MindMatrix): {
    codeIsMathematical: boolean;
    basedOnSacredMath: boolean;
    codons: number;
    bases: number;
    documented: {
        fact: string;
        on: boolean;
    }[];
    flagged: string[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function modifiedFoodPatentAudit(text: string, matrix?: MindMatrix): {
    isFoodGenomePatent: boolean;
    biggestViolator: string;
    excludedCores: string[];
    unlawfulIfGranted: boolean;
    eligiblePath: string;
    geneticCodeIsSacredMath: boolean;
    subject: {
        isPatentText: boolean;
        exceptions: {
            category: string;
            severity: number;
            verdict: string;
            unlawful: boolean;
            cores: string[];
        }[];
        biggestViolator: string;
        unlawfulIfGranted: boolean;
        nature: {
            isPatentText: boolean;
            jurisdiction: "US" | "EU";
            cores: {
                family: string;
                note: string;
            }[];
            coreCount: number;
            engineered: boolean;
            productOfNatureAsSuch: boolean;
            euSequenceSpared: boolean;
            verdict: string;
            unlawfulIfGranted: boolean;
            legalBasis: string[];
            socialHarm: string;
            root: string;
            statement: string;
            boundary: string;
        };
        law: {
            isPatentText: boolean;
            cores: {
                family: string;
                note: string;
            }[];
            coreCount: number;
            inventiveApplication: boolean;
            lawAsSuch: boolean;
            verdict: string;
            unlawfulIfGranted: boolean;
            legalBasis: string[];
            root: string;
            statement: string;
            boundary: string;
        };
        math: {
            isPatentText: boolean;
            cores: {
                family: string;
                priorArt: string;
            }[];
            coreCount: number;
            technicalEffect: boolean;
            mathAsSuch: boolean;
            verdict: string;
            unlawfulIfGranted: boolean;
            legalBasis: string[];
            root: string;
            statement: string;
            boundary: string;
        };
        verdict: string;
        cores: {
            family: any;
        }[];
        legalBasis: string[];
        root: string;
        statement: string;
        boundary: string;
    };
    root: string;
    statement: string;
    boundary: string;
};
export declare function euPatentReviewRequests(epNumber: string): {
    epNumber: string;
    valid: boolean;
    requests: EuPatentRequest[];
    count: number;
    tokenEndpoint: string;
    noAuth: EuPatentRequest[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function euPatentAudit(text: string, matrix?: MindMatrix): {
    jurisdiction: string;
    isPatentText: boolean;
    exclusions: {
        article: string;
        family: string;
        rescue: string;
    }[];
    epcArticles: string[];
    technicalCharacter: boolean;
    excludedAsSuch: boolean;
    subjectMatter: {
        isPatentText: boolean;
        exceptions: {
            category: string;
            severity: number;
            verdict: string;
            unlawful: boolean;
            cores: string[];
        }[];
        biggestViolator: string;
        unlawfulIfGranted: boolean;
        nature: {
            isPatentText: boolean;
            jurisdiction: "US" | "EU";
            cores: {
                family: string;
                note: string;
            }[];
            coreCount: number;
            engineered: boolean;
            productOfNatureAsSuch: boolean;
            euSequenceSpared: boolean;
            verdict: string;
            unlawfulIfGranted: boolean;
            legalBasis: string[];
            socialHarm: string;
            root: string;
            statement: string;
            boundary: string;
        };
        law: {
            isPatentText: boolean;
            cores: {
                family: string;
                note: string;
            }[];
            coreCount: number;
            inventiveApplication: boolean;
            lawAsSuch: boolean;
            verdict: string;
            unlawfulIfGranted: boolean;
            legalBasis: string[];
            root: string;
            statement: string;
            boundary: string;
        };
        math: {
            isPatentText: boolean;
            cores: {
                family: string;
                priorArt: string;
            }[];
            coreCount: number;
            technicalEffect: boolean;
            mathAsSuch: boolean;
            verdict: string;
            unlawfulIfGranted: boolean;
            legalBasis: string[];
            root: string;
            statement: string;
            boundary: string;
        };
        verdict: string;
        cores: {
            family: any;
        }[];
        legalBasis: string[];
        root: string;
        statement: string;
        boundary: string;
    };
    biggestViolator: string;
    verdict: string;
    unlawfulIfGranted: boolean;
    legalBasis: string[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function reviewEuPatent(epNumber: string, fetchImpl?: typeof fetch, opts?: {
    token?: string;
}): Promise<{
    reviewed: false;
    plan: {
        epNumber: string;
        valid: boolean;
        requests: EuPatentRequest[];
        count: number;
        tokenEndpoint: string;
        noAuth: EuPatentRequest[];
        root: string;
        statement: string;
        boundary: string;
    };
    reason: string;
    epNumber?: undefined;
    source?: undefined;
    status?: undefined;
    audit?: undefined;
    address?: undefined;
    receipt?: undefined;
    bytes?: undefined;
} | {
    reviewed: true;
    epNumber: string;
    source: string;
    status: number;
    audit: {
        jurisdiction: string;
        verdict: string;
        epcArticles: string[];
        biggestViolator: string;
        unlawfulIfGranted: boolean;
    };
    address: string;
    receipt: string;
    bytes: number;
    plan?: undefined;
    reason?: undefined;
}>;
export declare function reviewEuPatents(epNumbers: readonly string[], fetchImpl?: typeof fetch, opts?: {
    token?: string;
}): Promise<{
    count: number;
    reviewed: number;
    flagged: {
        epNumber: string;
        verdict: string;
        articles: string[];
    }[];
    flaggedCount: number;
    reviews: ({
        reviewed: false;
        plan: {
            epNumber: string;
            valid: boolean;
            requests: EuPatentRequest[];
            count: number;
            tokenEndpoint: string;
            noAuth: EuPatentRequest[];
            root: string;
            statement: string;
            boundary: string;
        };
        reason: string;
        epNumber?: undefined;
        source?: undefined;
        status?: undefined;
        audit?: undefined;
        address?: undefined;
        receipt?: undefined;
        bytes?: undefined;
    } | {
        reviewed: true;
        epNumber: string;
        source: string;
        status: number;
        audit: {
            jurisdiction: string;
            verdict: string;
            epcArticles: string[];
            biggestViolator: string;
            unlawfulIfGranted: boolean;
        };
        address: string;
        receipt: string;
        bytes: number;
        plan?: undefined;
        reason?: undefined;
    })[];
    statement: string;
    boundary: string;
}>;
