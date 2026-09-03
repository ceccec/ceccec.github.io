import type { StandardToolHonesty, SessionQuantumBitStatus, chatAudit } from '..';
import type { MindMatrix } from '../../../types';
export declare const ROSETTA_PARALLEL_REGISTRY_BACKLOG: readonly [];
export declare const STANDARD_TOOL_HONESTY: StandardToolHonesty;
export type SessionQuantumBitSeed = {
    readonly id: string;
    readonly chain: string;
    readonly fold: string;
    readonly pair: string;
    readonly cli: string;
    readonly route: string;
    readonly status: SessionQuantumBitStatus;
    readonly honesty: string;
    readonly note: string;
    readonly toolId: string;
    readonly resolve: 'catalog' | 'collider' | 'beyond-rsa' | 'rosetta' | 'toolbox' | 'one-tbit' | 'local-timed' | 'iso-gap' | 'local-vs-iso' | 'local-novel' | 'doc-experiments' | 'slow-gap' | 'no-qpu' | 'local-audit' | 'session-tools' | 'trinity' | 'sciences-standards' | 'dry-clean' | 'folder-migrate' | 'local-session' | 'upgrade-local' | 'mcp-ui' | 'serialized';
};
/** Tip-chain session work as bit seeds — PR digits live in AGENTS.md only (stack tip includes local-audit-qe). */
export declare const SESSION_QUANTUM_BIT_SEEDS: readonly SessionQuantumBitSeed[];
/**
 * Stdio MCP capabilities (packages/quantum-dev-sdk · .cursor/mcp.json) — design 0ccd9991.
 * Pure compute rows are browser-achievable; spawn/gate rows stay Node with strangler plan.
 */
export declare const STDIO_MCP_CAPABILITY_SEEDS: readonly [{
    readonly id: "census-status";
    readonly browserAchievable: true;
    readonly browserGap: "";
    readonly stranglerPlan: "sealed — UNFOLDED_CENSUS/FOLDED_CENSUS/DIMENSION_GATES via runStdioMcpCapabilityInBrowser";
    readonly fold: "censusStatus";
    readonly description: "Report sealed census + a432 gate constants";
}, {
    readonly id: "compute-from-source";
    readonly browserAchievable: true;
    readonly browserGap: "";
    readonly stranglerPlan: "sealed — A432_HUE · toUuid · rosettaRayOf pure recompute in browser";
    readonly fold: "computeFromSource";
    readonly description: "Pure compute-from-source (a432-hue · to-uuid · rosetta-ray)";
}, {
    readonly id: "list-capabilities";
    readonly browserAchievable: true;
    readonly browserGap: "";
    readonly stranglerPlan: "sealed — listCapabilities() mirrors stdio tools/list in browser panel";
    readonly fold: "listCapabilities";
    readonly description: "Meta: browserAchievable matrix for 7 stdio tools (complements tools/list)";
}, {
    readonly id: "fold-report";
    readonly browserAchievable: true;
    readonly browserGap: "";
    readonly stranglerPlan: "browser when fold id ∈ quantumCliToolsCatalog.browserRunnable; else Node bootstrap fold";
    readonly fold: "foldReport";
    readonly description: "Fold report for a sealed export name";
}, {
    readonly id: "run-gate";
    readonly browserAchievable: false;
    readonly browserGap: "spawns npm/Node gates (check:types · limits:verify · mission:gate · docs:build) — CI/local only";
    readonly stranglerPlan: "show last gate receipt in UI when present; never fake trinity pass in browser";
    readonly fold: "runGate";
    readonly description: "Run sealed mission/gate npm scripts via bootstrap";
}, {
    readonly id: "run-wave";
    readonly browserAchievable: false;
    readonly browserGap: "wave workflows are Node shell mounts (.claude/workflows) — not browser-executable";
    readonly stranglerPlan: "expose wave status facets from sealed selfBuild receipts in panel";
    readonly fold: "runWave";
    readonly description: "Run ceccec-build-waves kind via local workflow";
}, {
    readonly id: "run-export";
    readonly browserAchievable: false;
    readonly browserGap: "bootstrap run <entry> <exportName> needs Node module loader";
    readonly stranglerPlan: "map exportName → browser runner when catalog browserRunnable; else residual";
    readonly fold: "runExport";
    readonly description: "Run sealed export via CLI bootstrap";
}];
export declare const PASTE_BOOTSTRAP_SAMPLE_URLS: readonly ["https://github.com/ceccec/ceccec.github.io", "https://github.com/ceccec/ceccec.github.io/tree/main/src/0", "https://github.com/ceccec/ceccec.github.io/blob/main/AGENTS.md", "https://raw.githubusercontent.com/ceccec/ceccec.github.io/main/README.md", "git@github.com:ceccec/ceccec.github.io.git", "https://ceccec.github.io/", "https://ceccec.github.io/en/quantum-tools#toolbox-standard-io", "https://ceccec.github.io/mcp.json", "https://ceccec.github.io/agents.json", "https://ceccec.github.io/.well-known/ai-skills.json", "https://ceccec.psg.bg/llms.txt", "https://ceccec.psg.bg/en/#first-in-corpus"];
/** Named drainable MCP quantum faces — catalog star inventory (pair + dual + CLI tool ids). */
export declare const MCP_QUANTUM_NAMED_FACES: readonly [{
    readonly fold: "mcpQuantumUi";
    readonly pair: "mcp/ui";
    readonly dual: "quantum/mcp";
    readonly toolId: "mcp-quantum-ui";
    readonly dualToolId: "quantum-mcp";
}, {
    readonly fold: "mcpQuantumMovie";
    readonly pair: "mcp/movie";
    readonly dual: "movie/mcp";
    readonly toolId: "mcp-quantum-movie";
    readonly dualToolId: "movie-mcp";
}, {
    readonly fold: "mcpInfiniteMovie";
    readonly pair: "movie/inf";
    readonly dual: "inf/movie";
    readonly toolId: "movie-inf";
    readonly dualToolId: "inf-movie";
}, {
    readonly fold: "mcpQuantumChat";
    readonly pair: "mcp/chat";
    readonly dual: "chat/quantum";
    readonly toolId: "mcp-quantum-chat";
    readonly dualToolId: "chat-quantum";
}, {
    readonly fold: "mcpQuantumConversation";
    readonly pair: "mcp/conversation";
    readonly dual: "conversation/mcp";
    readonly toolId: "mcp-conversation";
    readonly dualToolId: "conversation-mcp";
}, {
    readonly fold: "mcpQuantumObserve";
    readonly pair: "mcp/observe";
    readonly dual: "observe/chat";
    readonly toolId: "mcp-observe";
    readonly dualToolId: "observe-chat";
}, {
    readonly fold: "mcpQuantumRouter";
    readonly pair: "mcp/router";
    readonly dual: "route/quantum";
    readonly toolId: "mcp-router";
    readonly dualToolId: "route-quantum";
}, {
    readonly fold: "mcpQuantumMetrics";
    readonly pair: "mcp/metrics";
    readonly dual: "metrics/mcp";
    readonly toolId: "mcp-metrics";
    readonly dualToolId: "metrics-mcp";
}, {
    readonly fold: "mcpQuantumAnalysis";
    readonly pair: "mcp/analysis";
    readonly dual: "analysis/mcp";
    readonly toolId: "mcp-analysis";
    readonly dualToolId: "analysis-mcp";
}, {
    readonly fold: "mcpQuantumGenesis";
    readonly pair: "mcp/genesis";
    readonly dual: "genesis/mcp";
    readonly toolId: "mcp-genesis";
    readonly dualToolId: "genesis-mcp";
}, {
    readonly fold: "mcpQuantumPhysics";
    readonly pair: "mcp/physics";
    readonly dual: "physics/mcp";
    readonly toolId: "mcp-physics";
    readonly dualToolId: "physics-mcp";
}, {
    readonly fold: "mcpQuantumMath";
    readonly pair: "mcp/math";
    readonly dual: "math/mcp";
    readonly toolId: "mcp-math";
    readonly dualToolId: "math-mcp";
}, {
    readonly fold: "mcpQuantumVortex";
    readonly pair: "mcp/vortex";
    readonly dual: "vortex/mcp";
    readonly toolId: "mcp-vortex";
    readonly dualToolId: "vortex-mcp";
}, {
    readonly fold: "mcpQuantumTorus";
    readonly pair: "mcp/torus";
    readonly dual: "torus/mcp";
    readonly toolId: "mcp-torus";
    readonly dualToolId: "torus-mcp";
}, {
    readonly fold: "mcpQuantumResearch";
    readonly pair: "mcp/research";
    readonly dual: "research/mcp";
    readonly toolId: "mcp-research";
    readonly dualToolId: "research-mcp";
}, {
    readonly fold: "mcpQuantumCatalog";
    readonly pair: "mcp/catalog";
    readonly dual: "catalog/mcp";
    readonly toolId: "mcp-catalog";
    readonly dualToolId: "catalog-mcp";
}, {
    readonly fold: "mcpQuantumReverse";
    readonly pair: "mcp/reverse";
    readonly dual: "reverse/quantum";
    readonly toolId: "mcp-reverse";
    readonly dualToolId: "reverse-quantum";
}, {
    readonly fold: "mcpQuantumSign";
    readonly pair: "mcp/sign";
    readonly dual: "sign/quantum";
    readonly toolId: "mcp-sign";
    readonly dualToolId: "sign-quantum";
}, {
    readonly fold: "mcpQuantumDirs";
    readonly pair: "mcp/dirs";
    readonly dual: "dirs/mcp";
    readonly toolId: "mcp-dirs";
    readonly dualToolId: "dirs-mcp";
}, {
    readonly fold: "mcpQuantumInverse";
    readonly pair: "mcp/inverse";
    readonly dual: "inverse/quantum";
    readonly toolId: "mcp-inverse";
    readonly dualToolId: "inverse-quantum";
}, {
    readonly fold: "mcpQuantumFold";
    readonly pair: "mcp/fold";
    readonly dual: "fold/quantum";
    readonly toolId: "mcp-fold";
    readonly dualToolId: "fold-quantum";
}, {
    readonly fold: "mcpQuantumRosetta";
    readonly pair: "mcp/rosetta";
    readonly dual: "rosetta/mcp";
    readonly toolId: "mcp-rosetta";
    readonly dualToolId: "rosetta-mcp";
}, {
    readonly fold: "mcpQuantumUniverse";
    readonly pair: "mcp/universe";
    readonly dual: "universe/mcp";
    readonly toolId: "mcp-universe";
    readonly dualToolId: "universe-mcp";
}, {
    readonly fold: "mcpQuantumMultiverse";
    readonly pair: "mcp/multi";
    readonly dual: "multi/verse";
    readonly toolId: "mcp-multi";
    readonly dualToolId: "multi-verse";
}, {
    readonly fold: "mcpQuantumInfinity";
    readonly pair: "mcp/inf";
    readonly dual: "inf/mcp";
    readonly toolId: "mcp-inf";
    readonly dualToolId: "inf-mcp";
}, {
    readonly fold: "mcpQuantumHardware";
    readonly pair: "mcp/hw";
    readonly dual: "hw/mcp";
    readonly toolId: "mcp-hw";
    readonly dualToolId: "hw-mcp";
}, {
    readonly fold: "mcpQuantumReactor";
    readonly pair: "mcp/reactor";
    readonly dual: "reactor/mcp";
    readonly toolId: "mcp-reactor";
    readonly dualToolId: "reactor-mcp";
}, {
    readonly fold: "mcpQuantumReaction";
    readonly pair: "mcp/reaction";
    readonly dual: "reaction/mcp";
    readonly toolId: "mcp-reaction";
    readonly dualToolId: "reaction-mcp";
}, {
    readonly fold: "mcpQuantumFusion";
    readonly pair: "mcp/fusion";
    readonly dual: "fusion/mcp";
    readonly toolId: "mcp-fusion";
    readonly dualToolId: "fusion-mcp";
}, {
    readonly fold: "mcpQuantumAnim";
    readonly pair: "mcp/anim";
    readonly dual: "anim/mcp";
    readonly toolId: "mcp-anim";
    readonly dualToolId: "anim-mcp";
}, {
    readonly fold: "mcpQuantumSound";
    readonly pair: "mcp/sound";
    readonly dual: "sound/vibe";
    readonly toolId: "mcp-sound";
    readonly dualToolId: "sound-vibe";
}, {
    readonly fold: "mcpQuantumDev";
    readonly pair: "mcp/dev";
    readonly dual: "dev/quantum";
    readonly toolId: "mcp-dev";
    readonly dualToolId: "dev-quantum";
}, {
    readonly fold: "mcpQuantumSolution";
    readonly pair: "mcp/solution";
    readonly dual: "solution/mcp";
    readonly toolId: "mcp-solution";
    readonly dualToolId: "solution-mcp";
}, {
    readonly fold: "mcpQuantumClown";
    readonly pair: "mcp/clown";
    readonly dual: "clown/mcp";
    readonly toolId: "mcp-clown";
    readonly dualToolId: "clown-mcp";
}, {
    readonly fold: "mcpQuantumSite";
    readonly pair: "mcp/site";
    readonly dual: "site/mcp";
    readonly toolId: "mcp-site";
    readonly dualToolId: "site-mcp";
}, {
    readonly fold: "mcpQuantumPage";
    readonly pair: "mcp/page";
    readonly dual: "page/mcp";
    readonly toolId: "mcp-page";
    readonly dualToolId: "page-mcp";
}, {
    readonly fold: "mcpQuantumCard";
    readonly pair: "mcp/card";
    readonly dual: "card/mcp";
    readonly toolId: "mcp-card";
    readonly dualToolId: "card-mcp";
}, {
    readonly fold: "mcpQuantumReceipt";
    readonly pair: "mcp/receipt";
    readonly dual: "receipt/mcp";
    readonly toolId: "mcp-receipt";
    readonly dualToolId: "receipt-mcp";
}, {
    readonly fold: "mcpQuantumHero";
    readonly pair: "mcp/hero";
    readonly dual: "hero/mcp";
    readonly toolId: "mcp-hero";
    readonly dualToolId: "hero-mcp";
}, {
    readonly fold: "mcpQuantumVibration";
    readonly pair: "mcp/vibration";
    readonly dual: "vibration/mcp";
    readonly toolId: "mcp-vibration";
    readonly dualToolId: "vibration-mcp";
}, {
    readonly fold: "mcpQuantumText";
    readonly pair: "mcp/text";
    readonly dual: "text/mcp";
    readonly toolId: "mcp-text";
    readonly dualToolId: "text-mcp";
}, {
    readonly fold: "mcpQuantumSpeech";
    readonly pair: "mcp/speech";
    readonly dual: "speech/mcp";
    readonly toolId: "mcp-speech";
    readonly dualToolId: "speech-mcp";
}, {
    readonly fold: "mcpQuantumDictation";
    readonly pair: "mcp/dictation";
    readonly dual: "dictation/mcp";
    readonly toolId: "mcp-dictation";
    readonly dualToolId: "dictation-mcp";
}, {
    readonly fold: "mcpQuantumIntonation";
    readonly pair: "mcp/intonation";
    readonly dual: "intonation/mcp";
    readonly toolId: "mcp-intonation";
    readonly dualToolId: "intonation-mcp";
}, {
    readonly fold: "mcpQuantumDialect";
    readonly pair: "mcp/dialect";
    readonly dual: "dialect/mcp";
    readonly toolId: "mcp-dialect";
    readonly dualToolId: "dialect-mcp";
}, {
    readonly fold: "mcpQuantumLanguage";
    readonly pair: "mcp/language";
    readonly dual: "language/mcp";
    readonly toolId: "mcp-language";
    readonly dualToolId: "language-mcp";
}, {
    readonly fold: "mcpQuantumScript";
    readonly pair: "mcp/script";
    readonly dual: "script/mcp";
    readonly toolId: "mcp-script";
    readonly dualToolId: "script-mcp";
}, {
    readonly fold: "mcpQuantumBook";
    readonly pair: "mcp/book";
    readonly dual: "book/mcp";
    readonly toolId: "mcp-book";
    readonly dualToolId: "book-mcp";
}, {
    readonly fold: "mcpQuantumLibrary";
    readonly pair: "mcp/library";
    readonly dual: "library/mcp";
    readonly toolId: "mcp-library";
    readonly dualToolId: "library-mcp";
}, {
    readonly fold: "mcpQuantumState";
    readonly pair: "mcp/state";
    readonly dual: "state/mcp";
    readonly toolId: "mcp-state";
    readonly dualToolId: "state-mcp";
}, {
    readonly fold: "mcpQuantumMusic";
    readonly pair: "mcp/music";
    readonly dual: "music/mcp";
    readonly toolId: "mcp-music";
    readonly dualToolId: "music-mcp";
}, {
    readonly fold: "mcpQuantumCpu";
    readonly pair: "mcp/cpu";
    readonly dual: "cpu/mcp";
    readonly toolId: "mcp-cpu";
    readonly dualToolId: "cpu-mcp";
}, {
    readonly fold: "mcpQuantumGpu";
    readonly pair: "mcp/gpu";
    readonly dual: "gpu/mcp";
    readonly toolId: "mcp-gpu";
    readonly dualToolId: "gpu-mcp";
}, {
    readonly fold: "mcpQuantumMemory";
    readonly pair: "mcp/memory";
    readonly dual: "memory/mcp";
    readonly toolId: "mcp-memory";
    readonly dualToolId: "memory-mcp";
}, {
    readonly fold: "mcpQuantumStorage";
    readonly pair: "mcp/storage";
    readonly dual: "storage/mcp";
    readonly toolId: "mcp-storage";
    readonly dualToolId: "storage-mcp";
}, {
    readonly fold: "mcpQuantumCache";
    readonly pair: "mcp/cache";
    readonly dual: "cache/mcp";
    readonly toolId: "mcp-cache";
    readonly dualToolId: "cache-mcp";
}, {
    readonly fold: "mcpQuantumPeriod";
    readonly pair: "mcp/period";
    readonly dual: "period/mcp";
    readonly toolId: "mcp-period";
    readonly dualToolId: "period-mcp";
}, {
    readonly fold: "mcpQuantumDot";
    readonly pair: "mcp/dot";
    readonly dual: "dot/mcp";
    readonly toolId: "mcp-dot";
    readonly dualToolId: "dot-mcp";
}, {
    readonly fold: "mcpQuantumIndex";
    readonly pair: "mcp/index";
    readonly dual: "index/mcp";
    readonly toolId: "mcp-index";
    readonly dualToolId: "index-mcp";
}, {
    readonly fold: "mcpQuantumOrientation";
    readonly pair: "mcp/orientation";
    readonly dual: "orientation/mcp";
    readonly toolId: "mcp-orientation";
    readonly dualToolId: "orientation-mcp";
}, {
    readonly fold: "mcpQuantumComplete";
    readonly pair: "mcp/complete";
    readonly dual: "complete/mcp";
    readonly toolId: "mcp-complete";
    readonly dualToolId: "complete-mcp";
}, {
    readonly fold: "mcpQuantumTokenOptimise";
    readonly pair: "mcp/token";
    readonly dual: "token/mcp";
    readonly toolId: "mcp-token";
    readonly dualToolId: "token-mcp";
}, {
    readonly fold: "mcpQuantumDeploy";
    readonly pair: "mcp/deploy";
    readonly dual: "deploy/mcp";
    readonly toolId: "mcp-deploy";
    readonly dualToolId: "deploy-mcp";
}, {
    readonly fold: "mcpQuantumBindings";
    readonly pair: "mcp/bindings";
    readonly dual: "bindings/mcp";
    readonly toolId: "mcp-bindings";
    readonly dualToolId: "bindings-mcp";
}, {
    readonly fold: "mcpQuantumCloudflareBindings";
    readonly pair: "mcp/cloudflare";
    readonly dual: "cloudflare/mcp";
    readonly toolId: "mcp-cloudflare";
    readonly dualToolId: "cloudflare-mcp";
}, {
    readonly fold: "mcpQuantumReview";
    readonly pair: "mcp/review";
    readonly dual: "review/mcp";
    readonly toolId: "mcp-review";
    readonly dualToolId: "review-mcp";
}, {
    readonly fold: "mcpQuantumEfficiency";
    readonly pair: "mcp/efficiency";
    readonly dual: "efficiency/mcp";
    readonly toolId: "mcp-efficiency";
    readonly dualToolId: "efficiency-mcp";
}, {
    readonly fold: "mcpQuantumSecurity";
    readonly pair: "mcp/security";
    readonly dual: "security/mcp";
    readonly toolId: "mcp-security";
    readonly dualToolId: "security-mcp";
}, {
    readonly fold: "mcpQuantumDesign";
    readonly pair: "mcp/design";
    readonly dual: "design/mcp";
    readonly toolId: "mcp-design";
    readonly dualToolId: "design-mcp";
}, {
    readonly fold: "scanAndRecomputeMcpQuantumToFillWithQuantumSolutionsInEndlessWavesOfSelfImprovingAiBill";
    readonly pair: "mcp/fill";
    readonly dual: "fill/mcp";
    readonly toolId: "mcp-fill";
    readonly dualToolId: "fill-mcp";
}];
export declare function openAuditThemes(audit: ReturnType<typeof chatAudit>): readonly {
    id: string;
    weight: number;
}[];
export declare const SUPERPOSITION_DIRECTIONS: readonly ["forward", "inverse", "reverse", "superposition"];
export declare function sealedTheoremFormulaDualCatalog(matrix: MindMatrix): {
    slug: string;
    theorem: string;
    provedBy: string;
    home: string;
    formulas: readonly string[];
    formulaSource: string;
    pair: "formula/code";
    bound: boolean;
    receipt: string;
}[];
/** Anchor commit — tool/matrix seal; chat-wave audit window starts here. */
export declare const CHAT_WAVE_AUDIT_ANCHOR = "1c2559f4";
