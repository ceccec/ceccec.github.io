export { computedDistFiles, computedDistRoute, type DistFile } from '../../../quantum/lake/dist';
/** Find a dist artifact by pathname (leading slash optional). */
export declare function artifactForPath(pathname: string, siteUrl: string): import(".").DistFile;
export declare const TIMEOUT_EXIT_CODE = 124;
export type TimeoutKind = 'build' | 'offline' | 'live-local' | 'live-world' | 'realtime' | 'agent-budget' | 'generic';
export type TimeoutCliOptions = {
    readonly timeoutMs: number;
    readonly once: boolean;
    readonly maxTicks: number;
};
export declare const MAX_QUANTUM_TIMEOUT_MS = 900000;
export declare const MAX_TRADING_TIMEOUT_MS = 120000;
export declare function defaultTimeoutMs(kind: TimeoutKind): number;
export declare function maxTimeoutMs(kind: TimeoutKind): number;
export declare function envTimeoutMs(kind: TimeoutKind, env?: NodeJS.ProcessEnv): number;
export declare function parseTimeoutCliArgs(argv?: readonly string[]): TimeoutCliOptions;
export declare function resolveScriptTimeoutMs(kind: TimeoutKind, cli: TimeoutCliOptions): number;
export declare function timeoutDryRefactorToQuantum(opts: {
    readonly processName: string;
    readonly kind: TimeoutKind;
    readonly timeoutMs: number;
    readonly elapsedMs: number;
}): {
    timedOut: true;
    processName: string;
    kind: TimeoutKind;
    timeoutMs: number;
    elapsedMs: number;
    exitCode: number;
    plan: {
        abort: string[];
        fold: string[];
        seal: string[];
        pair: "timeout/dry-refactor";
        retry: string;
    };
    receipt: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare const dual = "src/quantum/water/cache";
export type Uuid = string;
export declare const CLI_ENTRY_REL = "src/pair/enforcement/script/cli/bootstrap/index.ts";
export declare const SCRIPT_SHELL_LINE_BUDGET: number;
export declare const SCRIPT_SHELL_ALLOWLIST: Readonly<Record<string, number>>;
export type ScriptShellScan = {
    readonly path: string;
    readonly lines: number;
    readonly routesThroughSrc: boolean;
    readonly inlineEsbuild: boolean;
};
export declare function seedMerkleCache(root: string, merkle: string): void;
export declare function cachedMerkle(root: string): string | null;
export declare function clearMerkleCache(): void;
export declare const VITEPRESS_MERKLE_DIR = ".vitepress";
/** .vitepress seal inputs (config/lib/theme/pages) — every file here must flip the merkle, or a stale dist ships. */
export declare function vitepressSourceFiles(root: string): string[];
/** Fold — a .vitepress edit invalidates the seal: the walk reaches config.mts and never a dist/cache/.temp artifact. */
export declare function vitepressEditsInvalidateTheSeal(root: string): {
    enforced: boolean;
    count: number;
    config: boolean;
    leaked: string[];
};
export declare function srcContentMerkle(root: string): string;
export declare function importQuantumBundle(entryRel: string, root: string): Promise<Record<string, unknown>>;
export declare function scanScriptShells(root: string, opts?: {
    wiredOnly?: boolean;
}): ScriptShellScan[];
export declare function scriptShellGateReceipt(scripts: readonly ScriptShellScan[]): string;
export declare function scriptShellGate(scripts: readonly ScriptShellScan[]): {
    enforced: boolean;
    budget: number;
    allowlist: Readonly<Record<string, number>>;
    count: number;
    violations: string[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function runCheckTypesExit(root: string): number;
export declare function emitTimeoutReceipt(root: string, opts: {
    readonly processName: string;
    readonly kind: TimeoutKind;
    readonly timeoutMs: number;
    readonly elapsedMs: number;
    readonly partialState?: Readonly<Record<string, unknown>>;
}): {
    timedOut: true;
    processName: string;
    kind: TimeoutKind;
    timeoutMs: number;
    elapsedMs: number;
    exitCode: number;
    plan: {
        abort: string[];
        fold: string[];
        seal: string[];
        pair: "timeout/dry-refactor";
        retry: string;
    };
    receipt: string;
    root: string;
    statement: string;
    boundary: string;
};
export declare function exitOnTimeout(root: string, opts: Parameters<typeof emitTimeoutReceipt>[1]): never;
export type AtlasFile = {
    readonly rel: string;
    readonly text: string;
};
export declare function sourceAtlas(files: readonly AtlasFile[]): {
    symbolHomes: Map<string, string[]>;
    importsOf: Map<string, Set<string>>;
    importersOf: Map<string, Set<string>>;
    files: number;
    symbols: number;
    folders: number;
    root: string;
};
export declare function runSourceAtlasExit(root: string, argv?: readonly string[]): number;
export type SurgicalEdit = {
    readonly file: string;
    readonly anchor: string;
    readonly replacement: string;
};
export type SurgicalStatus = 'applied' | 'skipped' | 'refused-missing-file' | 'refused-missing-anchor' | 'refused-ambiguous-anchor';
export type SurgicalOutcome = {
    readonly file: string;
    readonly status: SurgicalStatus;
    readonly occurrences: number;
    readonly receipt: string;
};
/** Pure plan application: texts in → texts out + per-edit outcomes + one fold root. Edits compose
 *  sequentially against the evolving texts, so several edits to one file are one plan. */
export declare function applySurgicalEdits(texts: ReadonlyMap<string, string | null>, edits: readonly SurgicalEdit[]): {
    texts: Map<string, string>;
    outcomes: SurgicalOutcome[];
    applied: number;
    skipped: number;
    refused: number;
    changedFiles: string[];
    root: string;
};
/** Disk shell for the surgical engine: `surgical <plan.json> [--dry]`. The plan is a JSON array of
 *  {file, anchor, replacement} (or {edits: [...]}); paths repo-relative. Exit 1 iff any edit refused. */
export declare function runSurgicalExit(root: string, argv?: readonly string[]): number;
/** Fold verdicts in one screenful — booleans/scalars, facet tally, OFF facets only. The probe
 * output IS the token spend: full JSON stays available without the flag, the summary is default-off. */
export declare function compactFoldSummary(value: Record<string, unknown>): string;
export declare function runThinMount(entryRel: string, exportName: string, root: string, argv?: readonly string[]): Promise<number>;
export declare function skillsAreExecutableCode(root?: string): {
    executable: boolean;
    skills: number;
    resolved: number;
    unresolved: string[];
    count: number;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
