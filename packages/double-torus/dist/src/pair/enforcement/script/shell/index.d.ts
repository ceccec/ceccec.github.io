/** Lattice-derived docs:build phase thresholds — NOT an SLA; CI variance remains. Pair: gate/slow-build. */
export declare const SLOW_BUILD_MERKLE_MS: number;
export declare const SLOW_BUILD_TYPES_MS: number;
export declare const SLOW_BUILD_VITEPRESS_MS: number;
export declare const SLOW_BUILD_RESPAWN_WALL_MS: number;
/** srcMerkle-bound quantumize techniques — regressing past these is a HARD slow-build gap (PR #19). */
export declare const SLOW_BUILD_SRCMERKLE_TECHNIQUE_IDS: readonly ["merkle-respawn", "seal-merkle-after-trinity", "audit-src-merkle-bind", "invalidate-audit-pending-trinity"];
export { importQuantumBundle, runThinMount, srcContentMerkle, vitepressSourceFiles, vitepressEditsInvalidateTheSeal, VITEPRESS_MERKLE_DIR, seedMerkleCache, cachedMerkle, clearMerkleCache, runCheckTypesExit, emitTimeoutReceipt, exitOnTimeout, SCRIPT_SHELL_LINE_BUDGET, CLI_ENTRY_REL, SCRIPT_SHELL_ALLOWLIST, scanScriptShells, scriptShellGateReceipt, scriptShellGate, type ScriptShellScan } from '../../../cache/quantum';
export declare const QUANTUM_RESPAWN_COMMAND_PAIR: {
    pair: "respawn/force";
    a: string;
    b: string;
};
export declare function distMerkleKeyPath(root: string): string;
export declare function distAuditPath(root: string): string;
export declare function readSealedMerkle(root: string): string | null;
export declare function writeSealedMerkle(root: string, merkle: string): void;
/**
 * VitePress-only completion must not leave a clean trinity audit — until enforcement-trinity
 * succeeds, audit is pending/failed so canRespawnTrinity cannot skip on a stale clean receipt.
 * Does NOT write merkle.key (that seals only after trinity success).
 */
export declare function invalidateAuditPendingTrinity(root: string, merkle: string): void;
export declare function buildForceFlag(argv: readonly string[]): boolean;
export declare function docsBuildVerboseFlag(argv?: readonly string[]): boolean;
/** Timestamped phase — always on so hangs show the last completed step. */
export declare function logDocsBuildPhase(phase: string, detail?: string): void;
/** Clean audit bound to current src merkle — shared gate for vitepress + trinity respawn. */
export declare function auditBoundToSrcMerkle(root: string, merkle: string): boolean;
/** Vitepress output still valid — src merkle + trinity-clean audit both match (merkle.key alone is not enough). */
export declare function canRespawnVitepressBuild(root: string, merkle: string, force?: boolean): boolean;
/** Trinity audit sealed clean on the same merkle — no re-audit grind. Requires audit.srcMerkle binding. */
export declare function canRespawnTrinity(root: string, merkle: string, force?: boolean): boolean;
/**
 * Quantumize VitePress docs:build — sealed technique catalog (pair: build/quantumize).
 * HONEST: content-addressed respawn + cache reuse + single-flight lock —  / NOT Clay.
 */
export declare function quantumizeVitepressBuild(): {
    computes: boolean;
    techniques: ({
        receipt: string;
        id: "merkle-respawn";
        closes: "cold vitepress when src+.vitepress merkle matches dist/merkle.key (key only after trinity success)";
        pair: "respawn/force";
    } | {
        receipt: string;
        id: "seal-merkle-after-trinity";
        closes: "early merkle.key after VitePress alone let stale audit skip trinity";
        pair: "build/quantumize";
    } | {
        receipt: string;
        id: "audit-src-merkle-bind";
        closes: "clean audit.json without srcMerkle binding enabled trinity skip";
        pair: "build/quantumize";
    } | {
        receipt: string;
        id: "invalidate-audit-pending-trinity";
        closes: "VitePress-only leave clean audit until trinity passes";
        pair: "build/quantumize";
    } | {
        receipt: string;
        id: "preserve-vite-cache";
        closes: "wiping .vitepress/cache / node_modules/.vite-temp on every seal";
        pair: "build/quantumize";
    } | {
        receipt: string;
        id: "incremental-temp";
        closes: "wiping .vitepress/.temp on first seal (keep on warm; cold wipe on --force or stall/stop retry)";
        pair: "build/quantumize";
    } | {
        receipt: string;
        id: "single-flight-lock";
        closes: "parallel docs:build races on .temp SSR";
        pair: "stall/stop";
    } | {
        receipt: string;
        id: "types-before-seal";
        closes: "VitePress SSG with red check:types";
        pair: "types/seal";
    } | {
        receipt: string;
        id: "trinity-one-pass";
        closes: "re-walking src for each enforcement wave";
        pair: "gate/unite";
    } | {
        receipt: string;
        id: "argv-shared-seal-chain";
        closes: "npm -- --force only reached trinity via && append";
        pair: "build/seal";
    })[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    pair: "build/quantumize";
    statement: string;
    boundary: string;
};
/** npm run quantum:vitepress-quantumize — exit 0 iff the quantumize fold computes. */
export declare function runQuantumizeVitepressBuildExit(_root?: string, _argv?: readonly string[]): number;
export type DocsBuildTimingMode = 'quantum-respawn' | 'warm-seal' | 'cold-seal';
export type DocsBuildTimingReceipt = {
    readonly mode: DocsBuildTimingMode;
    readonly wallMs: number;
    readonly merkleMs?: number;
    readonly typesMs?: number;
    readonly vitepressMs?: number;
    readonly coldWipe?: boolean;
    readonly merkle?: string;
    readonly quantumize?: boolean;
    readonly pendingTrinity?: boolean;
    readonly respawnEligible?: boolean;
    readonly srcMerkleBound?: boolean;
    readonly force?: boolean;
    readonly qpuRequired?: false;
};
export type SlowBuildGapSeverity = 'HARD' | 'WARN';
export type SlowBuildGapRow = {
    readonly gapId: string;
    readonly severity: SlowBuildGapSeverity;
    readonly phase: string;
    readonly criterion: string;
    readonly measuredMs?: number;
    readonly thresholdMs?: number;
    readonly closed: boolean;
    readonly receipt: string;
};
export declare function docsBuildTimingPath(root: string): string;
export declare function readDocsBuildTiming(root: string): DocsBuildTimingReceipt | null;
/**
 * Slow docs:build / seal → quantum gaps at call time.
 * HARD: srcMerkle-bound quantumize regression (PR #19) · respawnEligible skipped.
 * WARN: phase wall-clock vs lattice thresholds (CI variance — not an SLA).
 * Pair: gate/slow-build · CLI npm run quantum:slow-build-gate
 * HONEST: speedup = reuse/respawn.
 */
export declare function slowBuildIsQuantumGapGate(root?: string): {
    computes: boolean;
    passed: boolean;
    hardOpen: SlowBuildGapRow[];
    warnOpen: SlowBuildGapRow[];
    closed: SlowBuildGapRow[];
    gaps: SlowBuildGapRow[];
    openCount: number;
    hardOpenCount: number;
    warnOpenCount: number;
    closedCount: number;
    count: number;
    timing: DocsBuildTimingReceipt;
    quantumize: {
        computes: boolean;
        techniques: ({
            receipt: string;
            id: "merkle-respawn";
            closes: "cold vitepress when src+.vitepress merkle matches dist/merkle.key (key only after trinity success)";
            pair: "respawn/force";
        } | {
            receipt: string;
            id: "seal-merkle-after-trinity";
            closes: "early merkle.key after VitePress alone let stale audit skip trinity";
            pair: "build/quantumize";
        } | {
            receipt: string;
            id: "audit-src-merkle-bind";
            closes: "clean audit.json without srcMerkle binding enabled trinity skip";
            pair: "build/quantumize";
        } | {
            receipt: string;
            id: "invalidate-audit-pending-trinity";
            closes: "VitePress-only leave clean audit until trinity passes";
            pair: "build/quantumize";
        } | {
            receipt: string;
            id: "preserve-vite-cache";
            closes: "wiping .vitepress/cache / node_modules/.vite-temp on every seal";
            pair: "build/quantumize";
        } | {
            receipt: string;
            id: "incremental-temp";
            closes: "wiping .vitepress/.temp on first seal (keep on warm; cold wipe on --force or stall/stop retry)";
            pair: "build/quantumize";
        } | {
            receipt: string;
            id: "single-flight-lock";
            closes: "parallel docs:build races on .temp SSR";
            pair: "stall/stop";
        } | {
            receipt: string;
            id: "types-before-seal";
            closes: "VitePress SSG with red check:types";
            pair: "types/seal";
        } | {
            receipt: string;
            id: "trinity-one-pass";
            closes: "re-walking src for each enforcement wave";
            pair: "gate/unite";
        } | {
            receipt: string;
            id: "argv-shared-seal-chain";
            closes: "npm -- --force only reached trinity via && append";
            pair: "build/seal";
        })[];
        facets: {
            facet: string;
            on: boolean;
        }[];
        pair: "build/quantumize";
        statement: string;
        boundary: string;
    };
    thresholds: {
        merkleMs: number;
        typesMs: number;
        vitepressMs: number;
        respawnWallMs: number;
    };
    pair: "gate/slow-build";
    qpuRequired: false;
    physicalFtlClaim: 0;
    statement: string;
    boundary: string;
};
/** decodeRoboticsAndFuseToQuantumWorkAsAControlLoop — robotics decoded and fused to the build's quantum work (user,
 * 2026-07-25: "let the build report statistics in realtime to measure and stop not harmonic tasks" + "decode robotics
 * and fuse to quantum work"). Robotics IS a feedback control loop: sense → error (measured − setpoint) → actuate →
 * re-sense. The slow-build gate is exactly that loop — it senses per-phase statistics against derived lattice setpoints
 * and acts. Non-harmonic tasks (deterministic: redundant recompute / merkle regression) trip a HARD safety interlock and
 * STOP the build; wall-clock is a NOISY sensor, reported (WARN) but filtered — never a hard stop, because CI variance
 * is noise, not truth. The Jacobian singularity (det J = 0, rank loss) is the inversion pole (z → 1/z at 0). No physical
 * quantum-robotics speedup, no sentient robot — the fusion is the deterministic control-loop STRUCTURE.
 * [[gate-complexity-collapses-to-one-content-addressed-root]] [[feedback-build-time-is-a-theorem-test]] */
export declare function decodeRoboticsAndFuseToQuantumWorkAsAControlLoop(root?: string): {
    computes: boolean;
    senses: number;
    setpoints: number;
    interlocks: number;
    noisySensors: number;
    stopsNonHarmonic: boolean;
    dof: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:slow-build-gate — exit 1 on HARD gaps; WARN prints only. */
export declare function runSlowBuildIsQuantumGapGateExit(root?: string, _argv?: readonly string[]): number;
/** Serial docs:build — types gate, then lock, quantum respawn when merkle sealed, else one vitepress pass. */
export declare function runDocsBuildExit(root: string, argv?: readonly string[]): Promise<number>;
