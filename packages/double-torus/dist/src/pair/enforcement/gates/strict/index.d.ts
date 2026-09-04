import type { Finding } from '../index.ts';
import { type StrictGateSnapshot } from './scan/index.ts';
export { MONOLITH_FILE_BYTES, MONOLITH_FILE_LAW, scanFileSizeOffenders, monolithFileGapDetail, stripComments, type StrictImportOffender, type StrictIndexOffender, type StrictVitepressIndexOffender, type StrictHyphenOffender, type StrictNonTsOffender, type StrictImportGapOffender, type StrictGateSnapshot } from './scan/index.ts';
export { computeStrictGateSnapshot, strictGatePassed, scanVitepressIndex, scanOneMathOffenders, ONE_MATH_LAW, type OneMathOffender } from './scan/index.ts';
export { scanHandLists, handListMirrors, type HandList, type HandListMirror } from './scan/index.ts';
export { scanAppHtml, appAuditSummary, type AppPageAudit } from './scan/index.ts';
export declare const FOLD_HOMES: Record<string, readonly string[]>;
export declare function foldsLiveAtTheirDomainHome(definers?: readonly {
    name: string;
    files: readonly string[];
}[]): {
    enforced: boolean;
    declared: number;
    violations: string[];
    count: number;
};
export declare function toolsSavedInSrcFirst(scripts?: readonly {
    path: string;
    lines: number;
    routesThroughSrc: boolean;
}[]): {
    enforced: boolean;
    count: number;
    violations: string[];
};
export declare function importsAreFoldersOnly(offenders?: readonly {
    file: string;
    spec: string;
    reason: string;
}[], scanned?: number): {
    enforced: boolean;
    count: number;
    offenders: {
        file: string;
        spec: string;
        reason: string;
    }[];
    scanned: number;
};
export declare function mathIsOneSource(offenders?: readonly {
    file: string;
    spec: string;
    reason: string;
}[], scanned?: number): {
    enforced: boolean;
    count: number;
    offenders: {
        file: string;
        spec: string;
        reason: string;
    }[];
    scanned: number;
};
export declare function foldersAreOneWordPerLevel(offenders?: readonly {
    path: string;
    segment: string;
    reason: string;
}[], scanned?: number): {
    enforced: boolean;
    count: number;
    offenders: string[];
    scanned: number;
};
export declare function glagoliticLabelsAreComputed(offenders?: readonly {
    file: string;
    reason: string;
}[], scanned?: number): {
    enforced: boolean;
    count: number;
    offenders: {
        file: string;
        reason: string;
    }[];
    scanned: number;
};
export declare function unexpectedSituationsRefactorTools(facts?: {
    untrackedSrcFiles?: readonly string[];
}): {
    clear: boolean;
    anomalies: string[];
};
export declare function srcFilesAreIndexOnly(offenders?: readonly {
    file: string;
    reason: string;
}[], scanned?: number): {
    enforced: boolean;
    count: number;
    offenders: string[];
    scanned: number;
};
/** Leaf checks — gate · cross · fold · weave pipeline; barrel law delegated to weave strictTrees. */
export declare function auditStrictGates(facts: {
    root: string;
    strict: StrictGateSnapshot;
}): {
    findings: Finding[];
    report: string[];
    receipt: string;
    passed: boolean;
};
