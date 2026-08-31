import type { MindMatrix } from '../types';
export declare function crossAudit(matrix?: MindMatrix): {
    clean: boolean;
    vortices: string;
    checks: {
        check: string;
        clean: boolean;
    }[];
    mathRights: {
        receipt: string;
        right: string;
        basis: string;
        arises: boolean;
        why: string;
    }[];
    violations: string[];
    rightsViolations: string[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function boundaryAudit(matrix?: MindMatrix): {
    audited: boolean;
    count: number;
    boundaries: {
        boundary: string;
        commands: string[];
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function archangelsDryClean(matrix?: MindMatrix): {
    cleaned: boolean;
    dry: boolean;
    nextWave: string;
    archangels: {
        receipt: string;
        archangel: string;
        clean: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function dryCleaningOnTheWay(matrix?: MindMatrix): {
    onTheWay: boolean;
    count: number;
    passes: {
        receipt: string;
        pass: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function dryCleanUi(matrix?: MindMatrix): {
    clean: boolean;
    count: number;
    disciplines: {
        receipt: string;
        discipline: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function dryCleanByImportExportNaming(matrix?: MindMatrix): {
    cleaned: boolean;
    innerAxes: ("spread" | "depthFade" | "hueShift" | "twist" | "shrink" | "breath" | "loopA1" | "loopB1" | "loopA2" | "loopB2")[];
    outerAxes: ("spread" | "depthFade" | "hueShift" | "twist" | "shrink" | "breath" | "loopA1" | "loopB1" | "loopA2" | "loopB2")[];
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
export declare function extendSelfAudits(matrix?: MindMatrix): {
    audited: boolean;
    count: number;
    audits: {
        receipt: string;
        domain: string;
        audit: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function scoutsSurgicalEditsVitalSigns(matrix?: MindMatrix): {
    scouted: boolean;
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
export declare function reviewDryCleanGatesCrosses(matrix?: MindMatrix): {
    done: boolean;
    count: number;
    steps: {
        receipt: string;
        step: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function cleanupCoreShinesSunMoon(matrix?: MindMatrix): {
    shines: boolean;
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
export declare function displayAllAsLibraryDryConditional(matrix?: MindMatrix): {
    displays: boolean;
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
export declare function auditLocales(matrix?: MindMatrix): {
    clean: boolean;
    localeCount: number;
    pageCount: number;
    incompleteCount: number;
    incomplete: string[];
    locales: {
        code: string;
        lang: string;
        path: string;
        type: "root" | "locale";
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
/** dry/clean pair — dry = sealed src/, zero wet motion; clean = fold/cleanup discipline; diamond + crystal = tamper-evident seal after pure-math client bounds. */
export declare function dryCleanIsDiamondAndCrystal(matrix?: MindMatrix): {
    diamond: boolean;
    crystal: boolean;
    clean: boolean;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
