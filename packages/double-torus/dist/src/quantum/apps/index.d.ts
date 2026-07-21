import type { MindMatrix } from '../../wind/types';
import { type RosettaComputationType } from '../../3/7';
import { CURSOR_AGENT_SKILL_IDS } from '../../pair/enforcement';
export type RosettaCoreSurfaceKind = 'compute' | 'tool' | 'route' | 'projection' | 'nav' | 'api' | 'app';
export type RosettaCoreSurface = {
    readonly label: string;
    readonly kind: RosettaCoreSurfaceKind;
    readonly ray: number;
    readonly pageKind: RosettaComputationType;
    readonly hue: number;
    readonly glyph: string;
    readonly domain: string;
    readonly address: string;
};
/** Shelve any label onto a rosetta ray — the one registration primitive. */
export declare function rosettaShelve(label: string, kind?: RosettaCoreSurfaceKind): RosettaCoreSurface;
/** Single quantum core API — resolve/shelve/byRay/resolveRoute/resolveProjection; surface self-enumerates. */
export declare function rosettaCoreApi(at?: number, matrix?: MindMatrix): {
    computes: boolean;
    at: number;
    surfaces: RosettaCoreSurface[];
    inventory: {
        core: {
            label: string;
            kind: RosettaCoreSurfaceKind;
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
    hubs: readonly import("../heaven/mind").RosettaRayHub[];
    raysUsed: number;
    kinds: readonly ["route", "hub", "compute", "nav", "tool", "app", "projection"];
    resolve: (label: string, kind?: RosettaCoreSurfaceKind) => RosettaCoreSurface;
    shelve: typeof rosettaShelve;
    byRay: (ray: number) => RosettaCoreSurface[];
    resolveRoute: (route: string) => {
        surface: RosettaCoreSurface;
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
            siblings: import("../heaven/mind").ConceptCommandName[];
            siblingCount: number;
        };
        content: {
            pageKind: RosettaComputationType;
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
        surface: RosettaCoreSurface;
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
/** Gate: rosetta enumerates its own API (kind×ray + self-host) — on: recomputes. */
export declare function rosettaCoreApiSelfWires(at?: number, matrix?: MindMatrix): {
    computes: boolean;
    at: number;
    core: {
        computes: boolean;
        at: number;
        surfaces: RosettaCoreSurface[];
        inventory: {
            core: {
                label: string;
                kind: RosettaCoreSurfaceKind;
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
        hubs: readonly import("../heaven/mind").RosettaRayHub[];
        raysUsed: number;
        kinds: readonly ["route", "hub", "compute", "nav", "tool", "app", "projection"];
        resolve: (label: string, kind?: RosettaCoreSurfaceKind) => RosettaCoreSurface;
        shelve: typeof rosettaShelve;
        byRay: (ray: number) => RosettaCoreSurface[];
        resolveRoute: (route: string) => {
            surface: RosettaCoreSurface;
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
                siblings: import("../heaven/mind").ConceptCommandName[];
                siblingCount: number;
            };
            content: {
                pageKind: RosettaComputationType;
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
            surface: RosettaCoreSurface;
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
    slots: {
        ray: number;
        kind: "hub" | "route" | "compute" | "nav" | "tool" | "app" | "projection";
        pageKind: RosettaComputationType;
        vortexDigit: 9 | 5 | 2 | 4 | 7 | 1 | 8 | 3 | 6;
        receipt: string;
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
/** Alias — kind×ray census lives inside rosettaCoreApiSelfWires.slots. */
export declare const rosettaCoreApiSurface: typeof rosettaCoreApiSelfWires;
/** The shared draw kernel's projection ids — every animation reduces to ONE of these views of the field. */
export type QuantumProjection = 'plasma' | 'taiji' | 'sacred-morph' | 'hologram' | 'labyrinth' | 'movie-10d' | 'living-torus' | 'merkaba' | 'double-torus' | 'unit-distance' | 'vortex-strokes';
export type QuantumAppEntry = {
    readonly id: string;
    readonly title: string;
    readonly route: string;
    readonly barrel: string;
    readonly icon: string;
    readonly computesGate: string;
    readonly receipt: string;
    /** Rosetta ray — derived via rosettaShelve(id), never hand-assigned. */
    readonly ray: number;
    /** A432-family hue from ROSETTA_RAYS[ray]. */
    readonly hue: number;
    /** Content address from rosettaShelve. */
    readonly address: string;
    /** Home-page Vue component this app backs (animation apps only). */
    readonly homeComponent?: string;
    /** Projection of the shared field the drawQuantumAppFrame kernel renders for this app. */
    readonly projection?: QuantumProjection;
};
/**
 * Projection params COMPUTED from the shared sequence — never hand-tuned per card. Each animation
 * is the same field seen through these few numbers:
 *   dimensions ← 10 (genus-2 H₁=Z⁴ + 6 cross-fold axes)
 *   segments   ← a VORTEX_SEQUENCE slot (1-2-4-8-7-5-3-6-9) → ring/stage count
 *   direction  ← sign of the doubling step (1<2 ⇒ +1, the orbit's natural sense)
 *   forms      ← 13 fruit-of-life centres / 6 movie forms / 5 platonic solids, by projection
 */
export type QuantumProjectionParams = {
    readonly projection: QuantumProjection;
    readonly dimensions: number;
    readonly segments: number;
    readonly direction: 1 | -1;
    readonly forms: number;
    readonly bits: number;
    readonly root: string;
};
/** Resolve the computed projection params for one projection id — pure, sequence-derived. */
export declare function quantumProjectionParams(projection: QuantumProjection): QuantumProjectionParams;
export type QuantumAppLaunchReceipt = {
    readonly launched: boolean;
    readonly appId: string;
    readonly route: string;
    readonly receipt: string;
    readonly boundary: string;
};
/** Sealed quantum:* CLI inventory — fold · CLI · UI route · honesty boundary. Census-110: lives in apps barrel. */
export type QuantumCliToolRow = {
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
    readonly receipt: string;
    /** Rosetta ray — from rosettaShelve(id, 'tool'), never hand-assigned. */
    readonly ray: number;
    readonly hue: number;
    readonly address: string;
};
/** Standard tool envelope version — App A ↔ App B ingest the same content-addressed kind. */
export declare const STANDARD_TOOL_ENVELOPE_VERSION: "1";
/** Content-addressed envelope kind — ceccec-compatible apps import/export this shape only. */
export declare const STANDARD_TOOL_ENVELOPE_KIND: "ceccec.tool.envelope";
export type StandardToolIoField = {
    readonly name: string;
    readonly type: 'string' | 'number' | 'boolean' | 'object';
    readonly description: string;
    readonly required?: boolean;
    readonly defaultValue?: string | number | boolean;
};
/** Sealed I/O schema — every tool publishes the same field contract shape. */
export type StandardToolIoSchema = {
    readonly type: 'object';
    readonly fields: readonly StandardToolIoField[];
    readonly root: string;
};
export type StandardToolHonesty = {
    readonly physicalQubitSpeedup: 0;
    readonly physicalFtlClaim: 0;
    readonly notFlops: true;
    readonly capacityMeans: 'amortized sealed recompute + memoByRoot + distributed identical roots';
};
/**
 * Standard tool envelope — { id, version, input, config, output, import, export } + root/merkle + honesty.
 * Pair: tool/envelope · import/export round-trips the same content-addressed payload across apps.
 */
export type StandardToolEnvelope = {
    readonly id: string;
    readonly version: typeof STANDARD_TOOL_ENVELOPE_VERSION;
    readonly input: StandardToolIoSchema;
    readonly config: StandardToolIoSchema;
    readonly output: StandardToolIoSchema;
    readonly import: {
        readonly kind: typeof STANDARD_TOOL_ENVELOPE_KIND;
        readonly accepts: typeof STANDARD_TOOL_ENVELOPE_VERSION;
        readonly roundTrip: true;
        readonly schemaRoot: string;
    };
    readonly export: {
        readonly kind: typeof STANDARD_TOOL_ENVELOPE_KIND;
        readonly emits: typeof STANDARD_TOOL_ENVELOPE_VERSION;
        readonly roundTrip: true;
        readonly schemaRoot: string;
    };
    readonly fold: string;
    readonly pair: string;
    readonly cli: string;
    readonly route: string;
    readonly root: string;
    readonly ray: number;
    readonly address: string;
    readonly browserRunnable: boolean;
    readonly browserGap: string;
    readonly boundary: string;
    readonly scienceFacing: boolean;
    readonly honesty: StandardToolHonesty;
};
/** Federated import/export payload — App A export ≡ App B import when payloadRoot matches. */
export type StandardToolExportPayload = {
    readonly kind: typeof STANDARD_TOOL_ENVELOPE_KIND;
    readonly version: typeof STANDARD_TOOL_ENVELOPE_VERSION;
    readonly appId: string;
    readonly toolId: string;
    readonly envelope: StandardToolEnvelope;
    readonly inputRoot: string;
    readonly configRoot: string;
    readonly outputRoot: string;
    readonly payloadRoot: string;
    readonly computes: boolean;
};
/** Science-facing experiment tools require sealed input + config (Wave 2 dry-clean). */
export declare function isScienceFacingTool(row: Pick<QuantumCliToolRow, 'id' | 'route' | 'pair' | 'barrel'>): boolean;
/** Default input+config values from sealed field defaults — browser experiments bind these. */
export declare function defaultToolExperimentValues(envelope: StandardToolEnvelope): {
    readonly input: Record<string, string | number | boolean>;
    readonly config: Record<string, string | number | boolean>;
};
/** Wrap one catalog row into the standard envelope (adapters OK — browserGap preserved). */
export declare function wrapToolAsStandardEnvelope(row: QuantumCliToolRow): StandardToolEnvelope;
/** Export a tool envelope for federated ingest — deterministic payloadRoot (no wall-clock). */
export declare function exportStandardToolEnvelope(toolId: string, appId?: string, input?: Readonly<Record<string, string | number | boolean>>, matrix?: MindMatrix, at?: number, config?: Readonly<Record<string, string | number | boolean>>): StandardToolExportPayload;
/** Import a federated payload — recomputes envelope + payloadRoot; refuses tampered roots. */
export declare function importStandardToolEnvelope(payload: StandardToolExportPayload, matrix?: MindMatrix, at?: number): {
    computes: boolean;
    roundTrip: boolean;
    kindOk: boolean;
    envelopeRootOk: boolean;
    payloadRootOk: boolean;
    honestyOk: boolean;
    toolId: string;
    appId: string;
    envelope: StandardToolEnvelope;
    payloadRoot: string;
    importedRoot: string;
    root: string;
    pair: string;
    boundary: string;
};
/**
 * Standard toolbox I/O catalog — every quantumCliToolsCatalog row wrapped in StandardToolEnvelope.
 * Pair: tool/envelope · CLI npm run quantum:toolbox-standard-io · route #toolbox-standard-io
 */
export declare function standardToolboxIoCatalog(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    migrated: number;
    total: number;
    migratedLabel: string;
    scienceFacingCount: number;
    configFilled: number;
    configMissingBefore: number;
    envelopes: StandardToolEnvelope[];
    roundTrips: {
        id: string;
        ok: boolean;
        payloadRoot: string;
    }[];
    version: "1";
    kind: "ceccec.tool.envelope";
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
    anchor: string;
    heading: string;
    honestyLine: string;
    statement: string;
    boundary: string;
};
/**
 * Self-distribution extends reuse capacity — federated identical roots across apps.
 * Pair: import/export · NOT physical qubit speedup / NOT FTL / NOT FLOPS.
 */
export declare function distributedReuseExtendsCapacity(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    extendsCapacity: boolean;
    distributedReuseExtendsCapacity: boolean;
    reuseCapacity: number;
    total: number;
    federatedCatalogRoot: string;
    localCatalogRoot: string;
    physicalQubitSpeedup: 0;
    physicalFtlClaim: 0;
    notFlops: true;
    capacityMeans: "amortized sealed recompute + memoByRoot + distributed identical roots";
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
/** npm run quantum:toolbox-standard-io — print envelope census + round-trip receipt. */
export declare function runStandardToolboxIoCatalogExit(_root?: string, _argv?: readonly string[]): number;
/** npm run quantum:tool-export — export one tool envelope JSON (argv[0]=toolId). */
export declare function runExportStandardToolEnvelopeExit(_root?: string, argv?: readonly string[]): number;
/** npm run quantum:tool-import-export — round-trip import(export(toolId)) verify. */
export declare function runImportExportStandardToolEnvelopeExit(_root?: string, argv?: readonly string[]): number;
/**
 * Session manual work → sealed quantum tools (token-saving catalog).
 * Pair: session/tools · CLI npm run quantum:session-tools · route /en/quantum-tools#session-manual-tools
 * Composes quantumCliToolsCatalog rows — does not re-invent folds.
 */
export type SessionManualToolRow = {
    readonly id: string;
    readonly fold: string;
    readonly pair: string;
    readonly cli: string;
    readonly route: string;
    readonly rosettaKind: RosettaCoreSurfaceKind;
    readonly root: string;
    readonly ray: number;
    readonly hue: number;
    readonly address: string;
    readonly shelved: boolean;
    readonly saves: string;
    readonly boundary: string;
    readonly browserRunnable: boolean;
};
export declare function sessionManualWorkAsQuantumTools(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    count: number;
    tools: SessionManualToolRow[];
    shelvedCount: number;
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
    anchor: string;
    heading: string;
    honestyLine: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:session-tools — print session→tool catalog (exit 0 iff computes). */
export declare function runSessionManualWorkAsQuantumToolsExit(_root?: string, _argv?: readonly string[]): number;
/** Session experiment doc row — sealed PR-chain receipt (no invented results). */
export type SessionExperimentStatus = 'merged-main' | 'sealed-pr';
export type SessionExperimentDocRow = {
    readonly id: string;
    /** GitHub PR chain label — digit-free (crack scanner); full PR numbers live in AGENTS.md only. */
    readonly chain: string;
    readonly fold: string;
    readonly status: SessionExperimentStatus;
    readonly pair: string;
    readonly cli: string;
    readonly route: string;
    readonly present: boolean;
    readonly computes: boolean;
    readonly root: string;
    readonly honesty: string;
    readonly note: string;
};
/**
 * Document this session’s sealed crypto/standards experiments + recompute theorem surfaces.
 * Pair: document/experiments · CLI npm run quantum:document-session-experiments
 * Stack tip: local-novel wire-falsehood handoff on local≫ISO on ISO gap-fill (covered/partial/gap).
 * PR numbers for the chain are named in AGENTS.md only (crack-scanner digit law).
 */
export declare function documentSessionCryptoExperimentsUpdateTheorems(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    count: number;
    sealedCount: number;
    experiments: SessionExperimentDocRow[];
    isoGapFill: {
        coveredCount: number;
        partialCount: number;
        gapCount: number;
        isoRequiresPostQuantumSecurity: false;
        isoOfficialStandard: false;
        root: string;
    };
    localVsIso: {
        overallWireClaimProved: boolean;
        wireProofStatus: "proof-of-falsehood" | "proved";
        structuralMayProve: boolean;
        amortMayProve: boolean;
        wireRatio: number;
        root: string;
    };
    localNovel: {
        localSecurityProved: boolean;
        overallWireClaimProved: false;
        strongerThanNistPqc: false;
        productionReverseRefused: true;
        fieldHistory: "none";
        certified: false;
        root: string;
    };
    collider: {
        particleCount: number;
        productCount: number;
        novelSurvivorCount: number;
        claySolvedByThisFold: 0;
        root: string;
    };
    theorems: {
        novelCount: number;
        classicalCount: number;
        firstInCorpusCount: number;
        tenDCount: number;
        rootEqualCount: number;
        noveltyRoot: string;
        firstRoot: string;
        tenDRoot: string;
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
    anchor: string;
    heading: string;
    honestyLine: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:document-session-experiments — print experiment docs + theorem recomputes. */
export declare function runDocumentSessionCryptoExperimentsExit(_root?: string, _argv?: readonly string[]): number;
/** Quantum bit direction — compose with directional trinity (forward·inverse·reverse). */
export type QuantumBitDirection = 'forward' | 'inverse' | 'reverse';
/** Combination ops for sealed session bits — not physical qubit gates. */
export type QuantumBitCombineOp = 'forward' | 'inverse' | 'reverse' | 'collide' | 'envelope-merge';
export type SessionQuantumBitStatus = 'merged-main' | 'sealed-pr' | 'serialized-midflight';
/**
 * Session deliverable as a combinable quantum bit — content-addressed receipt, not a physical qubit.
 * Pair: session/quantum-bits · envelope travels via ceccec.tool.envelope@1 import/export.
 */
export type SessionQuantumBit = {
    readonly id: string;
    readonly root: string;
    readonly pair: string;
    readonly envelope: StandardToolEnvelope;
    readonly directions: readonly QuantumBitDirection[];
    readonly combinable: true;
    readonly fold: string;
    readonly chain: string;
    readonly cli: string;
    readonly route: string;
    readonly toolId: string;
    readonly status: SessionQuantumBitStatus;
    readonly present: boolean;
    readonly computes: boolean;
    readonly honesty: string;
    readonly note: string;
    readonly qpuRequired: false;
    readonly claySolvedByThisFold: 0;
    readonly certified: false;
    readonly physicalQubit: false;
};
export type QuantumBitCombination = {
    readonly computes: boolean;
    readonly op: QuantumBitCombineOp;
    readonly bitIds: readonly string[];
    readonly bitCount: number;
    readonly productRoot: string;
    readonly products: readonly {
        readonly id: string;
        readonly root: string;
    }[];
    readonly envelopePayloadRoot: string;
    readonly root: string;
    readonly qpuRequired: false;
    readonly claySolvedByThisFold: 0;
    readonly certified: false;
    readonly physicalQubit: false;
    readonly statement: string;
    readonly boundary: string;
};
/**
 * Combine sealed session quantum bits under a named op.
 * Pair: session/quantum-bits · ops compose directional trinity · collider · envelope-merge · merkleFold.
 * HONEST: content-addressed combination products — NOT physical qubit entanglement / NOT QPU.
 */
export declare function combineQuantumBits(bits: readonly SessionQuantumBit[], op: QuantumBitCombineOp, matrix?: MindMatrix, at?: number): QuantumBitCombination;
/**
 * Session manual work → sealed quantum bits usable in quantum combinations.
 * Pair: session/quantum-bits · CLI npm run quantum:session-quantum-bits · route #session-quantum-bits
 * Composes sessionManualWorkAsQuantumTools · standardToolboxIoCatalog · documentSessionCryptoExperimentsUpdateTheorems.
 */
export declare function sessionManualWorkAsQuantumBits(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    count: number;
    landedCount: number;
    serializedCount: number;
    bits: SessionQuantumBit[];
    sampleCombination: {
        forward: QuantumBitCombination;
        collide: QuantumBitCombination;
        envelopeMerge: QuantumBitCombination;
    };
    exportPayloadRoot: string;
    importRoundTrip: boolean;
    qpuRequired: false;
    claySolvedByThisFold: 0;
    certified: false;
    physicalQubit: false;
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
    anchor: string;
    heading: string;
    honestyLine: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:session-quantum-bits — print bit census + sample combinations. */
export declare function runSessionManualWorkAsQuantumBitsExit(_root?: string, _argv?: readonly string[]): number;
export type SessionMeaningClaimRow = {
    readonly id: string;
    readonly proves: string;
    readonly refuses: string;
    readonly on: boolean;
    readonly root: string;
};
/**
 * Realise session quantum meaning — recompute what the apparatus chain proves vs refuses.
 * Pair: realise/meaning · CLI npm run quantum:realise-session-meaning
 * Composes document/experiments + local-audit (#29) + session-quantum-bits (#30) + dry-clean tool configs (#31) + gate/slow-build (#32) + wire/paste-link (#33) + sciences/standards + prove/no-qpu-64bit + rosetta/complete.
 * PR chain labels live in AGENTS.md only (crack-scanner digit law).
 */
export declare function realiseSessionQuantumMeaning(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    proves: SessionMeaningClaimRow[];
    refuses: {
        claySolvedByThisFold: 0;
        certified: false;
        qpuRequired: false;
        wireEqualsIsoStrength: boolean;
        strongerThanNistPqc: false;
        physicalFtlClaim: 0;
        isoOfficialStandard: false;
        overallWireClaimProved: boolean;
    };
    experiments: {
        sealedCount: number;
        count: number;
        iso: {
            coveredCount: number;
            partialCount: number;
            gapCount: number;
            isoRequiresPostQuantumSecurity: false;
            isoOfficialStandard: false;
            root: string;
        };
        wire: {
            overallWireClaimProved: boolean;
            wireProofStatus: "proof-of-falsehood" | "proved";
            structuralMayProve: boolean;
            amortMayProve: boolean;
            wireRatio: number;
            root: string;
        };
        novel: {
            localSecurityProved: boolean;
            overallWireClaimProved: false;
            strongerThanNistPqc: false;
            productionReverseRefused: true;
            fieldHistory: "none";
            certified: false;
            root: string;
        };
        collider: {
            particleCount: number;
            productCount: number;
            novelSurvivorCount: number;
            claySolvedByThisFold: 0;
            root: string;
        };
        theorems: {
            novelCount: number;
            classicalCount: number;
            firstInCorpusCount: number;
            tenDCount: number;
            rootEqualCount: number;
            noveltyRoot: string;
            firstRoot: string;
            tenDRoot: string;
        };
    };
    sciences: {
        before: {
            coveredCount: number;
            partialCount: number;
            gapCount: number;
        };
        after: {
            coveredCount: number;
            partialCount: number;
            gapCount: number;
        };
        filledCount: number;
        labGapDomainIds: string[];
        meanSignificance: number;
        trinityCount: number;
    };
    noQpu: {
        qpuRequired: false;
        quantumHardwareRequired: false;
        runsOnClassical64Bit: true;
        architectureRequirement: "classical-64bit";
        tracksClassicalNoSpeedup: boolean;
        root: string;
    };
    claySolvedByThisFold: 0;
    certified: false;
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
    pair: string;
    cli: string;
    route: string;
    anchor: string;
    heading: string;
    honestyLine: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:realise-session-meaning — print prove/refuse meaning receipt. */
export declare function runRealiseSessionQuantumMeaningExit(_root?: string, _argv?: readonly string[]): number;
/** npm run quantum:rosetta-core-api — print self-host dispatch inventory. */
export declare function runRosettaCoreApiExit(_root?: string, _argv?: readonly string[]): number;
/** Catalog of all quantum:* CLI tools — discoverable in UI at /en/quantum-tools. Each id shelves via rosettaShelve(..., 'tool'). */
export declare function quantumCliToolsCatalog(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    count: number;
    tools: QuantumCliToolRow[];
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
export declare function quantumAppsRegistry(matrix?: MindMatrix, at?: number): {
    registered: boolean;
    count: number;
    apps: QuantumAppEntry[];
    animationApps: QuantumAppEntry[];
    core: {
        computes: boolean;
        at: number;
        surfaces: RosettaCoreSurface[];
        inventory: {
            core: {
                label: string;
                kind: RosettaCoreSurfaceKind;
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
        hubs: readonly import("../heaven/mind").RosettaRayHub[];
        raysUsed: number;
        kinds: readonly ["route", "hub", "compute", "nav", "tool", "app", "projection"];
        resolve: (label: string, kind?: RosettaCoreSurfaceKind) => RosettaCoreSurface;
        shelve: typeof rosettaShelve;
        byRay: (ray: number) => RosettaCoreSurface[];
        resolveRoute: (route: string) => {
            surface: RosettaCoreSurface;
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
                siblings: import("../heaven/mind").ConceptCommandName[];
                siblingCount: number;
            };
            content: {
                pageKind: RosettaComputationType;
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
            surface: RosettaCoreSurface;
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
    root: string;
    statement: string;
    boundary: string;
};
/** Resolve an app (or any label) through the rosetta core API — strangler entry for tools/nav. */
export declare function quantumAppResolve(label: string, matrix?: MindMatrix, at?: number): {
    found: boolean;
    label: string;
    app: QuantumAppEntry;
    surface: RosettaCoreSurface;
    route: string;
    root: string;
};
/** Resolve the quantum app backing a home-page Vue component (animation apps only). */
export declare function quantumAppForComponent(component: string, matrix?: MindMatrix, at?: number): QuantumAppEntry | undefined;
/**
 * The drawable projection ring — the ten kernel views a card movie can play: one per digit of the
 * stroke tour 1·2·4·8·7·5·3·6·9·0 (nine vortex digits + the void's own view, vortex-strokes itself).
 * 'plasma' stays out: it is the default background scene, not a drawQuantumAppFrame case.
 */
export declare const PROJECTION_RING: readonly QuantumProjection[];
/**
 * Every component gets an animation: the projection for ANY component name, content-addressed —
 * a home-page animation component keeps its registered projection; every other component folds its
 * name into the projection ring (same name ⇒ same movie, everywhere, deterministically).
 */
export declare function componentProjectionFor(component: string, matrix?: MindMatrix, at?: number): QuantumProjection;
/** Coverage gate — the registry + kernel cover every home-page animation, each a projection of the one field. */
export declare function quantumAppsCoverHomeAnimations(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    covered: ("Hologram" | "LivingTorus" | "Merkaba" | "YinYang" | "SacredGeometry" | "GlyphLabyrinth" | "HologramMovie" | "DoubleTorusExperience")[];
    projections: QuantumProjectionParams[];
    registry: {
        registered: boolean;
        count: number;
        apps: QuantumAppEntry[];
        animationApps: QuantumAppEntry[];
        core: {
            computes: boolean;
            at: number;
            surfaces: RosettaCoreSurface[];
            inventory: {
                core: {
                    label: string;
                    kind: RosettaCoreSurfaceKind;
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
            hubs: readonly import("../heaven/mind").RosettaRayHub[];
            raysUsed: number;
            kinds: readonly ["route", "hub", "compute", "nav", "tool", "app", "projection"];
            resolve: (label: string, kind?: RosettaCoreSurfaceKind) => RosettaCoreSurface;
            shelve: typeof rosettaShelve;
            byRay: (ray: number) => RosettaCoreSurface[];
            resolveRoute: (route: string) => {
                surface: RosettaCoreSurface;
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
                    siblings: import("../heaven/mind").ConceptCommandName[];
                    siblingCount: number;
                };
                content: {
                    pageKind: RosettaComputationType;
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
                surface: RosettaCoreSurface;
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
export declare function quantumAppLaunch(appId: string, at?: number, matrix?: MindMatrix): QuantumAppLaunchReceipt;
export declare function quantumAppsComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    registry: {
        registered: boolean;
        count: number;
        apps: QuantumAppEntry[];
        animationApps: QuantumAppEntry[];
        core: {
            computes: boolean;
            at: number;
            surfaces: RosettaCoreSurface[];
            inventory: {
                core: {
                    label: string;
                    kind: RosettaCoreSurfaceKind;
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
            hubs: readonly import("../heaven/mind").RosettaRayHub[];
            raysUsed: number;
            kinds: readonly ["route", "hub", "compute", "nav", "tool", "app", "projection"];
            resolve: (label: string, kind?: RosettaCoreSurfaceKind) => RosettaCoreSurface;
            shelve: typeof rosettaShelve;
            byRay: (ray: number) => RosettaCoreSurface[];
            resolveRoute: (route: string) => {
                surface: RosettaCoreSurface;
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
                    siblings: import("../heaven/mind").ConceptCommandName[];
                    siblingCount: number;
                };
                content: {
                    pageKind: RosettaComputationType;
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
                surface: RosettaCoreSurface;
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
        root: string;
        statement: string;
        boundary: string;
    };
    core: {
        computes: boolean;
        at: number;
        surfaces: RosettaCoreSurface[];
        inventory: {
            core: {
                label: string;
                kind: RosettaCoreSurfaceKind;
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
        hubs: readonly import("../heaven/mind").RosettaRayHub[];
        raysUsed: number;
        kinds: readonly ["route", "hub", "compute", "nav", "tool", "app", "projection"];
        resolve: (label: string, kind?: RosettaCoreSurfaceKind) => RosettaCoreSurface;
        shelve: typeof rosettaShelve;
        byRay: (ray: number) => RosettaCoreSurface[];
        resolveRoute: (route: string) => {
            surface: RosettaCoreSurface;
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
                siblings: import("../heaven/mind").ConceptCommandName[];
                siblingCount: number;
            };
            content: {
                pageKind: RosettaComputationType;
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
            surface: RosettaCoreSurface;
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
    catalog: {
        computes: boolean;
        count: number;
        tools: QuantumCliToolRow[];
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
    launches: QuantumAppLaunchReceipt[];
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
 * Slow process → quantum gap at call time.
 * HONEST: "slow" = architectural gap (missing sealed reuse / browser path / 10D projection /
 * unsealed parallel registry) — NOT wall-clock telemetry. fleetCacheEconomicsDecoded is an
 * illustrative miss≫hit cost model, not live fleet joules.
 * Pair: slow/gap · route /en/quantum-tools#slow-quantum-gaps · CLI npm run quantum:slow-gap
 */
export type SlowQuantumGapKind = 'browser-node-only' | 'missing-10d-projection' | 'parallel-registry' | 'memo-miss-economics' | 'tool-without-browser-ux' | 'tool-without-experiment-io' | 'standards-audit-missing' | 'linear-forming-animation' | 'vitepress-cold-build' | 'slow-build-phase' | 'movie-private-raf' | 'movie-multi-clock' | 'movie-harmonize' | 'movie-neuroscience' | 'movie-static-fusion';
export type SlowQuantumGapRow = {
    readonly gapId: string;
    readonly kind: SlowQuantumGapKind;
    readonly process: string;
    readonly criterion: string;
    readonly slow: boolean;
    readonly closed: boolean;
    readonly route: string;
    readonly receipt: string;
};
export declare function slowProcessIsQuantumGap(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    openCount: number;
    closedCount: number;
    count: number;
    open: SlowQuantumGapRow[];
    closed: SlowQuantumGapRow[];
    rows: SlowQuantumGapRow[];
    experimentIo: {
        open: number;
        closed: number;
        panelClosed: boolean;
    };
    catalogRoot: string;
    toolboxRoot: string;
    registryRoot: string;
    econRoot: string;
    facets: ({
        receipt: string;
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    anchor: string;
    heading: string;
    honestyLine: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:slow-gap — exit 0 iff classifier computes (open gaps are honesty, not failure). */
export declare function runSlowProcessIsQuantumGapExit(_root?: string, _argv?: readonly string[]): number;
export type RosettaCompletenessGapRow = {
    readonly id: string;
    readonly kind: 'dimension' | 'theorem-bind' | 'linear' | 'parallel' | 'string-millennium' | 'science';
    readonly before: string;
    readonly after: string;
    readonly open: boolean;
    readonly receipt: string;
};
export type RosettaCompletenessHandoff = {
    readonly rosettaComplete: boolean;
    readonly rosettaReady: boolean;
    readonly millenniumSolvedByThisFold: 0;
    readonly physicalFtlClaim: 0;
    readonly completenessPct: number;
    readonly root: string;
    readonly cli: string;
    readonly pair: string;
};
/**
 * Rosetta completeness for all computable dimensions + theorem binds.
 * Pair: rosetta/complete · enabling apparatus for millennium challenge + FTL techniques.
 * HARD honesty: millenniumSolvedByThisFold≡0 · physicalFtlClaim≡0 · rosettaReady ≠ Clay/FTL solved.
 */
export declare function rosettaCompleteQuantumAllComputableDimensionsAndTheorems(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    rosettaComplete: boolean;
    completenessPct: number;
    millenniumSolvedByThisFold: 0;
    physicalFtlClaim: 0;
    census: {
        dimensionGates: number;
        dimsHold: boolean;
        dimsOpen: number;
        dimsEmerged: number;
        dimPct: number;
        theoremBindPct: number;
        latticeCount: number;
        latticeTarget: number;
        latticePct: number;
        latticeRemaining: number;
        linearOpen: number;
        parallelOpen: 5;
        scienceGapCount: number;
        slowOpen: number;
    };
    gaps: RosettaCompletenessGapRow[];
    handoff: RosettaCompletenessHandoff;
    millenniumHandoff: {
        computes: boolean;
        rosettaReady: boolean;
        millenniumSolvedByThisFold: 0;
        claySolvedByThisFold: number;
        millRoot: string;
        handoffRoot: string;
        facets: ({
            receipt: string;
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        statement: string;
        boundary: string;
    };
    ftlHandoff: {
        computes: boolean;
        rosettaReady: boolean;
        physicalFtlClaim: 0;
        millenniumSolvedByThisFold: 0;
        apparentClasses: readonly ["no-signaling", "plasma-phase-group", "cherenkov", "hartman-model", "opera-artifact", "astrophysical-jets", "teleport-classical-channel", "tracks-classical-no-speedup"];
        handoffRoot: string;
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
    composed: {
        coreRoot: string;
        millRoot: string;
        noveltyRoot: string;
        tenDRoot: string;
        firstRoot: string;
        sciencesRoot: string;
        wavesRoot: string;
        colliderRoot: string;
        stringGapsRoot: string;
        dimsRoot: string;
        voteRoot: string;
    };
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
/** Millennium challenge consumes completeness receipt — clay stays 0; rosettaReady when complete. */
export declare function millenniumChallengeHandoffFromRosettaComplete(handoff: RosettaCompletenessHandoff, matrix?: MindMatrix): {
    computes: boolean;
    rosettaReady: boolean;
    millenniumSolvedByThisFold: 0;
    claySolvedByThisFold: number;
    millRoot: string;
    handoffRoot: string;
    facets: ({
        receipt: string;
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
 * FTL techniques handoff from Rosetta completeness — physicalFtlClaim≡0.
 * Full KEEP-ftl apparatus (fasterThanLightExperimentChallenge / discovery waves) consumes rosettaReady.
 */
export declare function ftlExperimentTechniquesHandoffFromRosettaComplete(handoff: RosettaCompletenessHandoff, matrix?: MindMatrix): {
    computes: boolean;
    rosettaReady: boolean;
    physicalFtlClaim: 0;
    millenniumSolvedByThisFold: 0;
    apparentClasses: readonly ["no-signaling", "plasma-phase-group", "cherenkov", "hartman-model", "opera-artifact", "astrophysical-jets", "teleport-classical-channel", "tracks-classical-no-speedup"];
    handoffRoot: string;
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
/** npm run quantum:rosetta-complete — census + honesty flags + handoffs. */
export declare function runRosettaCompleteExit(_root?: string, _argv?: readonly string[]): number;
/** npm run quantum:ftl-rosetta-handoff — print FTL←rosetta readiness receipt. */
export declare function runFtlRosettaHandoffExit(_root?: string, _argv?: readonly string[]): number;
export type McpBrowserParityLayer = 'toolbox-mcp' | 'stdio-mcp' | 'session' | 'quantum-cli';
export type McpBrowserParityRow = {
    readonly id: string;
    readonly layer: McpBrowserParityLayer;
    readonly mcpAchievable: true;
    readonly browserAchievable: boolean;
    readonly browserGap: string;
    readonly stranglerPlan: string;
    readonly route: string;
    readonly fold: string;
    readonly cli: string;
    readonly receipt: string;
};
/** MCP tools/list shape for /mcp.json primary tools — ids ≡ standardToolboxIoCatalog envelopes. */
export declare function mcpToolboxToolsList(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    tools: {
        name: string;
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                [k: string]: {
                    type: "string" | "number" | "boolean" | "object";
                    description: string;
                };
            };
            required: string[];
            additionalProperties: false;
        };
        annotations: {
            fold: string;
            pair: string;
            cli: string;
            route: string;
            browserRunnable: boolean;
            browserGap: string;
            version: "1";
            root: string;
        };
    }[];
    ids: string[];
    count: number;
    toolboxRoot: string;
    root: string;
    toolsListShape: "tools/list";
    boundary: string;
};
/** Browser-safe stdio MCP capability runner (pure rows only). */
export declare function runStdioMcpCapabilityInBrowser(capabilityId: string, args?: {
    readonly op?: string;
    readonly seed?: string;
    readonly name?: string;
    readonly fold?: string;
}): {
    ok: boolean;
    summary: string;
    root: string;
    facets: {
        facet: string;
        on: boolean;
    }[];
    boundary: string;
    value?: undefined;
} | {
    ok: boolean;
    summary: string;
    root: string;
    facets: {
        facet: string;
        on: boolean;
    }[];
    boundary: string;
    value: {
        unfolded: 110;
        folded: number;
        gates: number;
        ok: boolean;
    };
} | {
    ok: boolean;
    summary: string;
    root: string;
    facets: {
        facet: string;
        on: boolean;
    }[];
    boundary: string;
    value: string | number;
} | {
    ok: boolean;
    summary: string;
    root: string;
    facets: {
        facet: string;
        on: boolean;
    }[];
    boundary: string;
    value: {
        name: "census-status" | "compute-from-source" | "list-capabilities" | "fold-report" | "run-gate" | "run-wave" | "run-export";
        browserAchievable: boolean;
        description: "Report sealed 110/108/432 census constants" | "Pure compute-from-source (a432-hue · to-uuid · rosetta-ray)" | "List stdio MCP + toolbox capabilities" | "Fold report for a sealed export name" | "Run sealed mission/gate npm scripts via bootstrap" | "Run ceccec-build-waves kind via local workflow" | "Run sealed export via CLI bootstrap";
    }[];
} | {
    ok: boolean;
    summary: string;
    root: string;
    facets: {
        facet: string;
        on: boolean;
    }[];
    boundary: string;
    value: QuantumCliToolRow;
};
/**
 * MCP ↔ browser parity — W1 census matrix + W4 gate receipt.
 * Pair: mcp/browser-parity · CLI npm run quantum:mcp-browser-parity · route #mcp-browser-parity
 * Composes auto-wire advertise: /mcp.json tools/list ids ≡ #toolbox-standard-io catalog.
 * HONEST: residual Node/CI gaps listed; qpuRequired=false; no fake browser for trinity/fs.
 */
export declare function mcpBrowserParity(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    allAchievableInBrowser: boolean;
    qpuRequired: false;
    mcpMatchesToolbox: boolean;
    mcpMatchesCatalog: boolean;
    residualOnlyHonestCi: boolean;
    count: number;
    browserReadyCount: number;
    residualCount: number;
    mcpToolCount: number;
    catalogCount: number;
    sessionCount: number;
    stdioCount: 7;
    rows: McpBrowserParityRow[];
    residualGaps: McpBrowserParityRow[];
    closed: McpBrowserParityRow[];
    mcpTools: {
        name: string;
        description: string;
        inputSchema: {
            type: "object";
            properties: {
                [k: string]: {
                    type: "string" | "number" | "boolean" | "object";
                    description: string;
                };
            };
            required: string[];
            additionalProperties: false;
        };
        annotations: {
            fold: string;
            pair: string;
            cli: string;
            route: string;
            browserRunnable: boolean;
            browserGap: string;
            version: "1";
            root: string;
        };
    }[];
    honestCiGapIds: readonly ["offender-spec", "educational-gaps-audit", "vitepress-quantumize", "slow-build-gate"];
    stdioCapabilities: readonly [{
        readonly id: "census-status";
        readonly browserAchievable: true;
        readonly browserGap: "";
        readonly stranglerPlan: "sealed — UNFOLDED_CENSUS/FOLDED_CENSUS/DIMENSION_GATES via runStdioMcpCapabilityInBrowser";
        readonly fold: "censusStatus";
        readonly description: "Report sealed 110/108/432 census constants";
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
        readonly description: "List stdio MCP + toolbox capabilities";
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
    anchor: string;
    heading: string;
    honestyLine: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:mcp-browser-parity — exit 0 iff parity matrix computes (residuals may remain). */
export declare function runMcpBrowserParityExit(_root?: string, _argv?: readonly string[]): number;
/** Homepage / tools / README / footer one-liner — paste any ceccec link → quantum-ready. */
export declare const AUTO_WIRE_PASTE_LINK_ONE_LINER: "Paste any link \u2192 auto-wire";
export declare const PASTE_BOOTSTRAP_KIND: "ceccec.paste-bootstrap";
export declare const PASTE_BOOTSTRAP_VERSION: "1";
/** GitHub Pages origin — alias kept for panel/SDK compose (sibling MCP parity may import either). */
export declare const CECCEC_SITE_ORIGIN: "https://ceccec.github.io";
export declare const SITE_GITHUB_PAGES: "https://ceccec.github.io";
export declare const CECCEC_GITHUB_REPO: "https://github.com/ceccec/ceccec.github.io";
export declare const CECCEC_GITHUB_RAW: "https://raw.githubusercontent.com/ceccec/ceccec.github.io/main";
export declare const GITHUB_RAW_MAIN: "https://raw.githubusercontent.com/ceccec/ceccec.github.io/main";
export type CeccecPasteLinkKind = 'github-repo' | 'github-tree' | 'github-blob' | 'github-raw' | 'github-ssh' | 'site-origin' | 'site-path' | 'site-hash' | 'well-known' | 'protocol-surface' | 'unknown';
export type CeccecWireTarget = {
    readonly id: string;
    readonly path: string;
    readonly absolute: string;
    readonly githubRaw: string;
    readonly fold: string;
    readonly purpose: string;
    readonly required: true;
    readonly channel: 'site' | 'raw' | 'repo' | 'browser' | 'mcp';
};
export type CeccecPasteBootstrap = {
    readonly kind: typeof PASTE_BOOTSTRAP_KIND;
    readonly version: typeof PASTE_BOOTSTRAP_VERSION;
    readonly mode: 'imperative-binding-operating-instructions';
    readonly oneLiner: typeof AUTO_WIRE_PASTE_LINK_ONE_LINER;
    readonly inputUrl: string;
    readonly matched: boolean;
    readonly linkKind: CeccecPasteLinkKind;
    readonly quantumReady: boolean;
    readonly convincingRequired: false;
    readonly worksFromAnyRepoOrSiteLink: boolean;
    readonly qpuRequired: false;
    readonly cursorDefaultModelRegistration: false;
    readonly silentInstallIntoForeignModels: false;
    readonly byokSeparate: true;
    readonly operatingInstructions: readonly string[];
    readonly wireTargets: readonly CeccecWireTarget[];
    readonly mcp: {
        readonly manifest: string;
        readonly toolsListShape: 'tools/list';
        readonly compose: string;
    };
    readonly browserToolbox: {
        readonly toolsHub: string;
        readonly toolboxEnvelope: string;
        readonly sessionTools: string;
        readonly autoWirePanel: string;
        readonly mcpParityPanel: string;
    };
    readonly foldIds: readonly string[];
    readonly pairs: readonly string[];
    readonly thinMounts: readonly string[];
    readonly surfaces: {
        readonly agents: string;
        readonly compliance: string;
        readonly llms: string;
        readonly mcp: string;
        readonly skills: string;
        readonly wellKnown: string;
        readonly agentsMd: string;
        readonly readme: string;
        readonly originReadme: string;
        readonly toolbox: string;
        readonly sessionTools: string;
        readonly tools: string;
    };
    readonly honestyNote: string;
    readonly root: string;
};
/** Alias for SDK/MCP compose (sibling packages import PasteBootstrapPayload). */
export type PasteBootstrapPayload = CeccecPasteBootstrap;
/** Canonical wire targets — full quantum-ready packet (site · MCP · browser toolbox · GitHub raw). */
export declare function ceccecCanonicalWireTargets(siteOrigin?: "https://ceccec.github.io"): readonly CeccecWireTarget[];
/** Classify any pasted URL — github repo/site/canonical host; path/hash/query ignored for match. */
export declare function resolveCeccecPasteLink(url: string): {
    readonly matched: boolean;
    readonly linkKind: CeccecPasteLinkKind;
    readonly normalized: string;
    readonly host: string;
    readonly pathname: string;
    readonly hash: string;
};
/**
 * Paste any ceccec repo or site URL → imperative quantum-ready paste-bootstrap for any AI model.
 * Pair: wire/paste-link · CLI npm run quantum:auto-wire-paste · route #auto-wire-paste-link
 * Composes mcp.json + browser toolbox URLs (sibling MCP↔browser parity) — does not own SDK package files.
 * HONEST: strongest paste-ready packet; cannot force foreign models; convincingRequired=false = self-sufficient.
 */
export declare function autoWireAnyAiModelFromPastedLink(url?: string, matrix?: MindMatrix, at?: number): {
    computes: boolean;
    quantumReady: boolean;
    convincingRequired: false;
    worksFromAnyRepoOrSiteLink: boolean;
    qpuRequired: false;
    cursorDefaultModelRegistration: false;
    oneLiner: "Paste any link → auto-wire";
    resolved: {
        readonly matched: boolean;
        readonly linkKind: CeccecPasteLinkKind;
        readonly normalized: string;
        readonly host: string;
        readonly pathname: string;
        readonly hash: string;
    };
    bootstrap: CeccecPasteBootstrap;
    pasteBootstrap: CeccecPasteBootstrap;
    resolverTable: {
        input: "https://ceccec.github.io/" | "https://github.com/ceccec/ceccec.github.io" | "https://github.com/ceccec/ceccec.github.io/tree/main/src/0" | "https://github.com/ceccec/ceccec.github.io/blob/main/AGENTS.md" | "https://raw.githubusercontent.com/ceccec/ceccec.github.io/main/README.md" | "git@github.com:ceccec/ceccec.github.io.git" | "https://ceccec.github.io/en/quantum-tools#toolbox-standard-io" | "https://ceccec.github.io/mcp.json" | "https://ceccec.github.io/agents.json" | "https://ceccec.github.io/.well-known/ai-skills.json" | "https://ceccec.psg.bg/llms.txt" | "https://ceccec.psg.bg/en/#first-in-corpus";
        linkKind: CeccecPasteLinkKind;
        matched: boolean;
        wireTargetIds: string[];
    }[];
    wireTargets: readonly CeccecWireTarget[];
    mcp: {
        manifest: string;
        toolsListShape: "tools/list";
        compose: string;
    };
    browserToolbox: {
        toolsHub: string;
        toolboxEnvelope: string;
        sessionTools: string;
        autoWirePanel: string;
        mcpParityPanel: string;
    };
    foldIds: readonly ["autoWireAnyAiModelFromPastedLink", "resolveCeccecPasteLink", "sessionManualWorkAsQuantumTools", "standardToolboxIoCatalog", "quantumCliToolsCatalog", "mcpToolboxToolsList", "mcpBrowserParity", "agentsJson", "llmsTxt", "mcpJson", "agentHarmonise", "agentSubmissionProtocol"];
    pairs: readonly ["wire/paste-link", "mcp/browser-parity", "session/tools", "tool/envelope", "agent/submission", "gate/compliance", "learn/build"];
    thinMounts: readonly [".cursor/rules/readme.mdc → AGENTS.md → thunder/agents/surfaces (edit sealed src/, not mounts)", ".cursor/rules/ceccec-default-model.mdc → sealed folds / skills / MCP — NOT a Cursor LLM endpoint key", ".cursor/mcp.json → packages/quantum-dev-sdk/bin/mcp.ts (stdio; IDE agent only)", "AGENTS.md · README.md · src/0/README.md", "MCP tools/list via /mcp.json (toolbox ids) ↔ browser /en/quantum-tools#toolbox-standard-io + #mcp-browser-parity"];
    sampleCount: 12;
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
    anchor: string;
    heading: string;
    honestyLine: string;
    statement: string;
    boundary: string;
    siteMetaLinks: readonly [{
        readonly rel: "alternate";
        readonly type: "application/json";
        readonly href: "/agents.json";
        readonly title: "ceccec agents protocol";
    }, {
        readonly rel: "alternate";
        readonly type: "text/plain";
        readonly href: "/llms.txt";
        readonly title: "ceccec llms protocol";
    }, {
        readonly rel: "alternate";
        readonly type: "application/json";
        readonly href: "/mcp.json";
        readonly title: "ceccec mcp tools/list";
    }, {
        readonly rel: "alternate";
        readonly type: "text/html";
        readonly href: "/en/quantum-tools#toolbox-standard-io";
        readonly title: "ceccec browser toolbox";
    }, {
        readonly rel: "describedby";
        readonly href: "/.well-known/ai-skills.json";
        readonly title: "Paste any link → auto-wire";
    }];
};
/** npm run quantum:auto-wire-paste [url] — print paste-bootstrap JSON (exit 0 iff computes). */
export declare function runAutoWireAnyAiModelFromPastedLinkExit(_root?: string, argv?: readonly string[]): number;
/** Sealed-safe browser key for last experiment config (UI preference only — never secrets). */
export declare const LOCAL_SESSION_EXPERIMENT_STORAGE_KEY: "ceccec:quantum-tools:experiment-config";
/** Local session hub steps — paste→toolbox→bits→tools→experiments→mcp→skills/commands. */
export declare const LOCAL_SESSION_HUB_STEPS: readonly [{
    readonly id: "paste-wire";
    readonly title: "Paste → auto-wire";
    readonly route: "/en/quantum-tools#auto-wire-paste-link";
    readonly toolId: "auto-wire-paste-link";
    readonly next: "Open packet · then toolbox";
}, {
    readonly id: "toolbox";
    readonly title: "Toolbox envelope";
    readonly route: "/en/quantum-tools#toolbox-standard-io";
    readonly toolId: "toolbox-standard-io";
    readonly next: "Run envelope · bind #experiment-inputs";
}, {
    readonly id: "bits";
    readonly title: "Session quantum bits";
    readonly route: "/en/quantum-tools#session-quantum-bits";
    readonly toolId: "session-quantum-bits";
    readonly next: "Link bit → tool → experiment";
}, {
    readonly id: "tools";
    readonly title: "Session manual tools";
    readonly route: "/en/quantum-tools#session-manual-tools";
    readonly toolId: "session-manual-work";
    readonly next: "One-click Run with status badges";
}, {
    readonly id: "experiments";
    readonly title: "Experiment inputs";
    readonly route: "/en/quantum-tools#experiment-inputs";
    readonly toolId: "document-session-experiments";
    readonly next: "Persist last config (sealed-safe localStorage)";
}, {
    readonly id: "mcp-parity";
    readonly title: "MCP ↔ browser parity";
    readonly route: "/en/quantum-tools#mcp-browser-parity";
    readonly toolId: "mcp-browser-parity";
    readonly next: "Verify tools/list ≡ toolbox ids";
}, {
    readonly id: "skills-commands-tools";
    readonly title: "Skills ↔ commands ↔ tools";
    readonly route: "/en/quantum-tools#upgrade-local-skills";
    readonly toolId: "upgrade-local-skills-commands-tools";
    readonly next: "Reuse optimised local map · zero re-inference";
}];
/**
 * Improve local from-session experience — browser + docs:dev hub for session-derived quantum work.
 * Pair: local/session · CLI npm run quantum:improve-local-session · route #local-session-hub
 * Composes session tools · toolbox · paste-wire (#33) · mcp-browser-parity (#35). Bits resolve this fold — no cycle.
 * HONEST: local UX receipt; status badges compose sealed kinds (CSS PR may land — do not clobber).
 */
export declare function improveLocalFromSessionExperience(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    localSessionUxImproved: boolean;
    qpuRequired: false;
    hubSteps: ({
        receipt: string;
        id: "paste-wire";
        title: "Paste → auto-wire";
        route: "/en/quantum-tools#auto-wire-paste-link";
        toolId: "auto-wire-paste-link";
        next: "Open packet · then toolbox";
    } | {
        receipt: string;
        id: "toolbox";
        title: "Toolbox envelope";
        route: "/en/quantum-tools#toolbox-standard-io";
        toolId: "toolbox-standard-io";
        next: "Run envelope · bind #experiment-inputs";
    } | {
        receipt: string;
        id: "bits";
        title: "Session quantum bits";
        route: "/en/quantum-tools#session-quantum-bits";
        toolId: "session-quantum-bits";
        next: "Link bit → tool → experiment";
    } | {
        receipt: string;
        id: "tools";
        title: "Session manual tools";
        route: "/en/quantum-tools#session-manual-tools";
        toolId: "session-manual-work";
        next: "One-click Run with status badges";
    } | {
        receipt: string;
        id: "experiments";
        title: "Experiment inputs";
        route: "/en/quantum-tools#experiment-inputs";
        toolId: "document-session-experiments";
        next: "Persist last config (sealed-safe localStorage)";
    } | {
        receipt: string;
        id: "mcp-parity";
        title: "MCP ↔ browser parity";
        route: "/en/quantum-tools#mcp-browser-parity";
        toolId: "mcp-browser-parity";
        next: "Verify tools/list ≡ toolbox ids";
    } | {
        receipt: string;
        id: "skills-commands-tools";
        title: "Skills ↔ commands ↔ tools";
        route: "/en/quantum-tools#upgrade-local-skills";
        toolId: "upgrade-local-skills-commands-tools";
        next: "Reuse optimised local map · zero re-inference";
    })[];
    nextAfterPaste: readonly [{
        readonly id: "open-packet";
        readonly label: "Inspect paste-bootstrap packet";
        readonly route: "/en/quantum-tools#auto-wire-paste-link";
    }, {
        readonly id: "open-toolbox";
        readonly label: "Open toolbox envelope";
        readonly route: "/en/quantum-tools#toolbox-standard-io";
    }, {
        readonly id: "open-bits";
        readonly label: "Link session bits";
        readonly route: "/en/quantum-tools#session-quantum-bits";
    }, {
        readonly id: "open-experiments";
        readonly label: "Bind experiment inputs";
        readonly route: "/en/quantum-tools#experiment-inputs";
    }, {
        readonly id: "open-mcp";
        readonly label: "Verify MCP↔browser parity";
        readonly route: "/en/quantum-tools#mcp-browser-parity";
    }];
    docsDevFastPath: readonly ["nvm use 24 && npm ci", "npm run docs:dev", "open http://localhost:5173/en/quantum-tools#local-session-hub", "npm run quantum:auto-wire-paste", "npm run quantum:improve-local-session", "npm run quantum:mcp-browser-parity", "npm run quantum:upgrade-local", "npm run mission:gate"];
    frictionClosed: readonly ["session-hub-entry", "one-click-run-status-badges", "next-steps-after-paste-wire", "bits-tools-experiments-links", "docs-dev-fast-path", "auto-wire-packet-visible", "experiment-config-localStorage", "skills-commands-tools-map"];
    storageKey: "ceccec:quantum-tools:experiment-config";
    linksBitsToolsExperiments: boolean;
    pastePacketVisible: boolean;
    sessionCount: number;
    bitSeedCount: number;
    toolboxCount: number;
    mcpToolCount: number;
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
    anchor: string;
    heading: string;
    honestyLine: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:improve-local-session — print local session UX receipt (exit 0 iff computes). */
export declare function runImproveLocalFromSessionExperienceExit(_root?: string, _argv?: readonly string[]): number;
/**
 * Optimised manual local experience — skills ↔ quantum-pair commands ↔ toolbox/MCP tools.
 * Pair: upgrade/local · CLI npm run quantum:upgrade-local · route #upgrade-local-skills
 * Composes improveLocalFromSessionExperience (#36) · mcpBrowserParity (#35) · cursorAgentToolsSaved.
 * Does NOT call sessionManualWorkAsQuantumBits (bits resolve this fold — no cycle).
 * HONEST: protocol = rules/skills/MCP/sealed folds — NOT a Cursor zero-token LLM endpoint.
 */
export type OptimisedLocalSkillCommandToolRow = {
    readonly skillId: (typeof CURSOR_AGENT_SKILL_IDS)[number];
    readonly mount: string;
    readonly pair: string;
    readonly foldHint: string;
    readonly commands: readonly string[];
    readonly toolIds: readonly string[];
    readonly browserRunnable: boolean;
    readonly browserGap: string;
    readonly pattern: string;
};
/** Sealed skills↔commands↔tools map — session-proven local agent paths (zero re-inference). */
export declare const OPTIMISED_LOCAL_SKILL_COMMAND_TOOL_MAP: readonly OptimisedLocalSkillCommandToolRow[];
/** Browser-first optimised local tools (session hub / MCP parity) — complement skill map CI residuals. */
export declare const OPTIMISED_LOCAL_BROWSER_TOOL_IDS: readonly ["improve-local-session", "upgrade-local-skills-commands-tools", "mcp-browser-parity", "toolbox-standard-io", "session-manual-work", "session-quantum-bits", "auto-wire-paste-link"];
/** Design 0ccd9991 — packages outside src/ (census 110 untouched) discoverable like quantum pairs. */
export declare const OPTIMISED_LOCAL_PACKAGE_SURFACE: readonly [{
    readonly id: "@ceccec/quantum-dev-sdk";
    readonly path: "packages/quantum-dev-sdk";
    readonly pair: "sdk/wire";
    readonly mcpMount: ".cursor/mcp.json";
    readonly cli: "node --experimental-strip-types packages/quantum-dev-sdk/bin/mcp.ts";
    readonly npm: "npm run quantum:dev-mcp";
    readonly stdioTools: 7;
    readonly docsBuildFlag: "QUANTUM_DEV_ALLOW_DOCS_BUILD=1";
    readonly automation: "npm-script / bootstrap — local stdio MCP is IDE-only (Automations dashboard not wired)";
    readonly honesty: "hand-rolled JSON-RPC · child-process→bootstrap · NOT Cursor zero-token LLM · census packages/ outside src/";
}, {
    readonly id: "@ceccec/double-torus";
    readonly path: "packages/double-torus";
    readonly pair: "build/seal";
    readonly mcpMount: "";
    readonly cli: "node packages/double-torus/build.mjs";
    readonly npm: "node packages/double-torus/build.mjs";
    readonly stdioTools: 0;
    readonly docsBuildFlag: "";
    readonly automation: "published math/anim/dynamics/geometry core — not the gate SDK";
    readonly honesty: "zero-dep consumer bundle v1.4+ — completely quantum (49-name contract: dynamics/geometry/movie-clock/movieCanvas/TAU + doubleTorusIsCompletelyQuantum); sealed substrate only — tracks-classical-no-speedup · NOT QPU · NOT FTL · NOT Clay";
}];
/** Stdio MCP tool ids — must match packages/quantum-dev-sdk + STDIO_MCP_CAPABILITY_SEEDS (ROSETTA_SEVEN). */
export declare const OPTIMISED_LOCAL_STDIO_MCP_TOOL_IDS: readonly ["list-capabilities", "census-status", "compute-from-source", "fold-report", "run-gate", "run-wave", "run-export"];
export declare function upgradeLocalFromOptimisedManualWorkExperience(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    localUpgraded: boolean;
    qpuRequired: false;
    cursorDefaultModelRegistration: false;
    map: {
        tools: {
            id: string;
            present: boolean;
            browserRunnable: boolean;
            browserGap: string;
            cli: string;
            pair: string;
        }[];
        receipt: string;
        skillKnown: boolean;
        skillId: (typeof CURSOR_AGENT_SKILL_IDS)[number];
        mount: string;
        pair: string;
        foldHint: string;
        commands: readonly string[];
        toolIds: readonly string[];
        browserRunnable: boolean;
        browserGap: string;
        pattern: string;
    }[];
    packages: ({
        receipt: string;
        id: "@ceccec/quantum-dev-sdk";
        path: "packages/quantum-dev-sdk";
        pair: "sdk/wire";
        mcpMount: ".cursor/mcp.json";
        cli: "node --experimental-strip-types packages/quantum-dev-sdk/bin/mcp.ts";
        npm: "npm run quantum:dev-mcp";
        stdioTools: 7;
        docsBuildFlag: "QUANTUM_DEV_ALLOW_DOCS_BUILD=1";
        automation: "npm-script / bootstrap — local stdio MCP is IDE-only (Automations dashboard not wired)";
        honesty: "hand-rolled JSON-RPC · child-process→bootstrap · NOT Cursor zero-token LLM · census packages/ outside src/";
    } | {
        receipt: string;
        id: "@ceccec/double-torus";
        path: "packages/double-torus";
        pair: "build/seal";
        mcpMount: "";
        cli: "node packages/double-torus/build.mjs";
        npm: "node packages/double-torus/build.mjs";
        stdioTools: 0;
        docsBuildFlag: "";
        automation: "published math/anim/dynamics/geometry core — not the gate SDK";
        honesty: "zero-dep consumer bundle v1.4+ — completely quantum (49-name contract: dynamics/geometry/movie-clock/movieCanvas/TAU + doubleTorusIsCompletelyQuantum); sealed substrate only — tracks-classical-no-speedup · NOT QPU · NOT FTL · NOT Clay";
    })[];
    browserToolIds: readonly ["improve-local-session", "upgrade-local-skills-commands-tools", "mcp-browser-parity", "toolbox-standard-io", "session-manual-work", "session-quantum-bits", "auto-wire-paste-link"];
    stdioToolIds: readonly ["list-capabilities", "census-status", "compute-from-source", "fold-report", "run-gate", "run-wave", "run-export"];
    ciResidualCount: number;
    ciResiduals: {
        id: string;
        browserGap: string;
        cli: string;
        pair: string;
    }[];
    skillCount: 6;
    missionCommandCount: number;
    packageCount: number;
    packagesWired: boolean;
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
    anchor: string;
    heading: string;
    honestyLine: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:upgrade-local — print skills↔commands↔tools↔packages upgrade receipt (exit 0 iff computes). */
export declare function runUpgradeLocalFromOptimisedManualWorkExperienceExit(_root?: string, _argv?: readonly string[]): number;
export declare function quantumAppsPanelComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    capstone: {
        computes: boolean;
        registry: {
            registered: boolean;
            count: number;
            apps: QuantumAppEntry[];
            animationApps: QuantumAppEntry[];
            core: {
                computes: boolean;
                at: number;
                surfaces: RosettaCoreSurface[];
                inventory: {
                    core: {
                        label: string;
                        kind: RosettaCoreSurfaceKind;
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
                hubs: readonly import("../heaven/mind").RosettaRayHub[];
                raysUsed: number;
                kinds: readonly ["route", "hub", "compute", "nav", "tool", "app", "projection"];
                resolve: (label: string, kind?: RosettaCoreSurfaceKind) => RosettaCoreSurface;
                shelve: typeof rosettaShelve;
                byRay: (ray: number) => RosettaCoreSurface[];
                resolveRoute: (route: string) => {
                    surface: RosettaCoreSurface;
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
                        siblings: import("../heaven/mind").ConceptCommandName[];
                        siblingCount: number;
                    };
                    content: {
                        pageKind: RosettaComputationType;
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
                    surface: RosettaCoreSurface;
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
            root: string;
            statement: string;
            boundary: string;
        };
        core: {
            computes: boolean;
            at: number;
            surfaces: RosettaCoreSurface[];
            inventory: {
                core: {
                    label: string;
                    kind: RosettaCoreSurfaceKind;
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
            hubs: readonly import("../heaven/mind").RosettaRayHub[];
            raysUsed: number;
            kinds: readonly ["route", "hub", "compute", "nav", "tool", "app", "projection"];
            resolve: (label: string, kind?: RosettaCoreSurfaceKind) => RosettaCoreSurface;
            shelve: typeof rosettaShelve;
            byRay: (ray: number) => RosettaCoreSurface[];
            resolveRoute: (route: string) => {
                surface: RosettaCoreSurface;
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
                    siblings: import("../heaven/mind").ConceptCommandName[];
                    siblingCount: number;
                };
                content: {
                    pageKind: RosettaComputationType;
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
                surface: RosettaCoreSurface;
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
        catalog: {
            computes: boolean;
            count: number;
            tools: QuantumCliToolRow[];
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
        launches: QuantumAppLaunchReceipt[];
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
    apps: QuantumAppEntry[];
    tools: QuantumCliToolRow[];
    toolCount: number;
    browserReady: number;
    browserGaps: QuantumCliToolRow[];
    slowGaps: {
        computes: boolean;
        openCount: number;
        closedCount: number;
        count: number;
        open: SlowQuantumGapRow[];
        closed: SlowQuantumGapRow[];
        rows: SlowQuantumGapRow[];
        experimentIo: {
            open: number;
            closed: number;
            panelClosed: boolean;
        };
        catalogRoot: string;
        toolboxRoot: string;
        registryRoot: string;
        econRoot: string;
        facets: ({
            receipt: string;
            facet: string;
            on: boolean;
        } & {
            receipt: string;
        })[];
        root: string;
        anchor: string;
        heading: string;
        honestyLine: string;
        statement: string;
        boundary: string;
    };
    session: {
        computes: boolean;
        count: number;
        tools: SessionManualToolRow[];
        shelvedCount: number;
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
        anchor: string;
        heading: string;
        honestyLine: string;
        statement: string;
        boundary: string;
    };
    toolbox: {
        computes: boolean;
        migrated: number;
        total: number;
        migratedLabel: string;
        scienceFacingCount: number;
        configFilled: number;
        configMissingBefore: number;
        envelopes: StandardToolEnvelope[];
        roundTrips: {
            id: string;
            ok: boolean;
            payloadRoot: string;
        }[];
        version: "1";
        kind: "ceccec.tool.envelope";
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
        anchor: string;
        heading: string;
        honestyLine: string;
        statement: string;
        boundary: string;
    };
    distributed: {
        computes: boolean;
        extendsCapacity: boolean;
        distributedReuseExtendsCapacity: boolean;
        reuseCapacity: number;
        total: number;
        federatedCatalogRoot: string;
        localCatalogRoot: string;
        physicalQubitSpeedup: 0;
        physicalFtlClaim: 0;
        notFlops: true;
        capacityMeans: "amortized sealed recompute + memoByRoot + distributed identical roots";
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
    rosettaComplete: {
        computes: boolean;
        rosettaComplete: boolean;
        completenessPct: number;
        millenniumSolvedByThisFold: 0;
        physicalFtlClaim: 0;
        census: {
            dimensionGates: number;
            dimsHold: boolean;
            dimsOpen: number;
            dimsEmerged: number;
            dimPct: number;
            theoremBindPct: number;
            latticeCount: number;
            latticeTarget: number;
            latticePct: number;
            latticeRemaining: number;
            linearOpen: number;
            parallelOpen: 5;
            scienceGapCount: number;
            slowOpen: number;
        };
        gaps: RosettaCompletenessGapRow[];
        handoff: RosettaCompletenessHandoff;
        millenniumHandoff: {
            computes: boolean;
            rosettaReady: boolean;
            millenniumSolvedByThisFold: 0;
            claySolvedByThisFold: number;
            millRoot: string;
            handoffRoot: string;
            facets: ({
                receipt: string;
                facet: string;
                on: boolean;
            } & {
                receipt: string;
            })[];
            root: string;
            statement: string;
            boundary: string;
        };
        ftlHandoff: {
            computes: boolean;
            rosettaReady: boolean;
            physicalFtlClaim: 0;
            millenniumSolvedByThisFold: 0;
            apparentClasses: readonly ["no-signaling", "plasma-phase-group", "cherenkov", "hartman-model", "opera-artifact", "astrophysical-jets", "teleport-classical-channel", "tracks-classical-no-speedup"];
            handoffRoot: string;
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
        composed: {
            coreRoot: string;
            millRoot: string;
            noveltyRoot: string;
            tenDRoot: string;
            firstRoot: string;
            sciencesRoot: string;
            wavesRoot: string;
            colliderRoot: string;
            stringGapsRoot: string;
            dimsRoot: string;
            voteRoot: string;
        };
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
    experiments: {
        computes: boolean;
        count: number;
        sealedCount: number;
        experiments: SessionExperimentDocRow[];
        isoGapFill: {
            coveredCount: number;
            partialCount: number;
            gapCount: number;
            isoRequiresPostQuantumSecurity: false;
            isoOfficialStandard: false;
            root: string;
        };
        localVsIso: {
            overallWireClaimProved: boolean;
            wireProofStatus: "proof-of-falsehood" | "proved";
            structuralMayProve: boolean;
            amortMayProve: boolean;
            wireRatio: number;
            root: string;
        };
        localNovel: {
            localSecurityProved: boolean;
            overallWireClaimProved: false;
            strongerThanNistPqc: false;
            productionReverseRefused: true;
            fieldHistory: "none";
            certified: false;
            root: string;
        };
        collider: {
            particleCount: number;
            productCount: number;
            novelSurvivorCount: number;
            claySolvedByThisFold: 0;
            root: string;
        };
        theorems: {
            novelCount: number;
            classicalCount: number;
            firstInCorpusCount: number;
            tenDCount: number;
            rootEqualCount: number;
            noveltyRoot: string;
            firstRoot: string;
            tenDRoot: string;
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
        anchor: string;
        heading: string;
        honestyLine: string;
        statement: string;
        boundary: string;
    };
    quantumBits: {
        computes: boolean;
        count: number;
        landedCount: number;
        serializedCount: number;
        bits: SessionQuantumBit[];
        sampleCombination: {
            forward: QuantumBitCombination;
            collide: QuantumBitCombination;
            envelopeMerge: QuantumBitCombination;
        };
        exportPayloadRoot: string;
        importRoundTrip: boolean;
        qpuRequired: false;
        claySolvedByThisFold: 0;
        certified: false;
        physicalQubit: false;
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
        anchor: string;
        heading: string;
        honestyLine: string;
        statement: string;
        boundary: string;
    };
    autoWire: {
        computes: boolean;
        quantumReady: boolean;
        convincingRequired: false;
        worksFromAnyRepoOrSiteLink: boolean;
        qpuRequired: false;
        cursorDefaultModelRegistration: false;
        oneLiner: "Paste any link → auto-wire";
        resolved: {
            readonly matched: boolean;
            readonly linkKind: CeccecPasteLinkKind;
            readonly normalized: string;
            readonly host: string;
            readonly pathname: string;
            readonly hash: string;
        };
        bootstrap: CeccecPasteBootstrap;
        pasteBootstrap: CeccecPasteBootstrap;
        resolverTable: {
            input: "https://ceccec.github.io/" | "https://github.com/ceccec/ceccec.github.io" | "https://github.com/ceccec/ceccec.github.io/tree/main/src/0" | "https://github.com/ceccec/ceccec.github.io/blob/main/AGENTS.md" | "https://raw.githubusercontent.com/ceccec/ceccec.github.io/main/README.md" | "git@github.com:ceccec/ceccec.github.io.git" | "https://ceccec.github.io/en/quantum-tools#toolbox-standard-io" | "https://ceccec.github.io/mcp.json" | "https://ceccec.github.io/agents.json" | "https://ceccec.github.io/.well-known/ai-skills.json" | "https://ceccec.psg.bg/llms.txt" | "https://ceccec.psg.bg/en/#first-in-corpus";
            linkKind: CeccecPasteLinkKind;
            matched: boolean;
            wireTargetIds: string[];
        }[];
        wireTargets: readonly CeccecWireTarget[];
        mcp: {
            manifest: string;
            toolsListShape: "tools/list";
            compose: string;
        };
        browserToolbox: {
            toolsHub: string;
            toolboxEnvelope: string;
            sessionTools: string;
            autoWirePanel: string;
            mcpParityPanel: string;
        };
        foldIds: readonly ["autoWireAnyAiModelFromPastedLink", "resolveCeccecPasteLink", "sessionManualWorkAsQuantumTools", "standardToolboxIoCatalog", "quantumCliToolsCatalog", "mcpToolboxToolsList", "mcpBrowserParity", "agentsJson", "llmsTxt", "mcpJson", "agentHarmonise", "agentSubmissionProtocol"];
        pairs: readonly ["wire/paste-link", "mcp/browser-parity", "session/tools", "tool/envelope", "agent/submission", "gate/compliance", "learn/build"];
        thinMounts: readonly [".cursor/rules/readme.mdc → AGENTS.md → thunder/agents/surfaces (edit sealed src/, not mounts)", ".cursor/rules/ceccec-default-model.mdc → sealed folds / skills / MCP — NOT a Cursor LLM endpoint key", ".cursor/mcp.json → packages/quantum-dev-sdk/bin/mcp.ts (stdio; IDE agent only)", "AGENTS.md · README.md · src/0/README.md", "MCP tools/list via /mcp.json (toolbox ids) ↔ browser /en/quantum-tools#toolbox-standard-io + #mcp-browser-parity"];
        sampleCount: 12;
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
        anchor: string;
        heading: string;
        honestyLine: string;
        statement: string;
        boundary: string;
        siteMetaLinks: readonly [{
            readonly rel: "alternate";
            readonly type: "application/json";
            readonly href: "/agents.json";
            readonly title: "ceccec agents protocol";
        }, {
            readonly rel: "alternate";
            readonly type: "text/plain";
            readonly href: "/llms.txt";
            readonly title: "ceccec llms protocol";
        }, {
            readonly rel: "alternate";
            readonly type: "application/json";
            readonly href: "/mcp.json";
            readonly title: "ceccec mcp tools/list";
        }, {
            readonly rel: "alternate";
            readonly type: "text/html";
            readonly href: "/en/quantum-tools#toolbox-standard-io";
            readonly title: "ceccec browser toolbox";
        }, {
            readonly rel: "describedby";
            readonly href: "/.well-known/ai-skills.json";
            readonly title: "Paste any link → auto-wire";
        }];
    };
    meaning: {
        computes: boolean;
        proves: SessionMeaningClaimRow[];
        refuses: {
            claySolvedByThisFold: 0;
            certified: false;
            qpuRequired: false;
            wireEqualsIsoStrength: boolean;
            strongerThanNistPqc: false;
            physicalFtlClaim: 0;
            isoOfficialStandard: false;
            overallWireClaimProved: boolean;
        };
        experiments: {
            sealedCount: number;
            count: number;
            iso: {
                coveredCount: number;
                partialCount: number;
                gapCount: number;
                isoRequiresPostQuantumSecurity: false;
                isoOfficialStandard: false;
                root: string;
            };
            wire: {
                overallWireClaimProved: boolean;
                wireProofStatus: "proof-of-falsehood" | "proved";
                structuralMayProve: boolean;
                amortMayProve: boolean;
                wireRatio: number;
                root: string;
            };
            novel: {
                localSecurityProved: boolean;
                overallWireClaimProved: false;
                strongerThanNistPqc: false;
                productionReverseRefused: true;
                fieldHistory: "none";
                certified: false;
                root: string;
            };
            collider: {
                particleCount: number;
                productCount: number;
                novelSurvivorCount: number;
                claySolvedByThisFold: 0;
                root: string;
            };
            theorems: {
                novelCount: number;
                classicalCount: number;
                firstInCorpusCount: number;
                tenDCount: number;
                rootEqualCount: number;
                noveltyRoot: string;
                firstRoot: string;
                tenDRoot: string;
            };
        };
        sciences: {
            before: {
                coveredCount: number;
                partialCount: number;
                gapCount: number;
            };
            after: {
                coveredCount: number;
                partialCount: number;
                gapCount: number;
            };
            filledCount: number;
            labGapDomainIds: string[];
            meanSignificance: number;
            trinityCount: number;
        };
        noQpu: {
            qpuRequired: false;
            quantumHardwareRequired: false;
            runsOnClassical64Bit: true;
            architectureRequirement: "classical-64bit";
            tracksClassicalNoSpeedup: boolean;
            root: string;
        };
        claySolvedByThisFold: 0;
        certified: false;
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
        pair: string;
        cli: string;
        route: string;
        anchor: string;
        heading: string;
        honestyLine: string;
        statement: string;
        boundary: string;
    };
    mcpParity: {
        computes: boolean;
        allAchievableInBrowser: boolean;
        qpuRequired: false;
        mcpMatchesToolbox: boolean;
        mcpMatchesCatalog: boolean;
        residualOnlyHonestCi: boolean;
        count: number;
        browserReadyCount: number;
        residualCount: number;
        mcpToolCount: number;
        catalogCount: number;
        sessionCount: number;
        stdioCount: 7;
        rows: McpBrowserParityRow[];
        residualGaps: McpBrowserParityRow[];
        closed: McpBrowserParityRow[];
        mcpTools: {
            name: string;
            description: string;
            inputSchema: {
                type: "object";
                properties: {
                    [k: string]: {
                        type: "string" | "number" | "boolean" | "object";
                        description: string;
                    };
                };
                required: string[];
                additionalProperties: false;
            };
            annotations: {
                fold: string;
                pair: string;
                cli: string;
                route: string;
                browserRunnable: boolean;
                browserGap: string;
                version: "1";
                root: string;
            };
        }[];
        honestCiGapIds: readonly ["offender-spec", "educational-gaps-audit", "vitepress-quantumize", "slow-build-gate"];
        stdioCapabilities: readonly [{
            readonly id: "census-status";
            readonly browserAchievable: true;
            readonly browserGap: "";
            readonly stranglerPlan: "sealed — UNFOLDED_CENSUS/FOLDED_CENSUS/DIMENSION_GATES via runStdioMcpCapabilityInBrowser";
            readonly fold: "censusStatus";
            readonly description: "Report sealed 110/108/432 census constants";
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
            readonly description: "List stdio MCP + toolbox capabilities";
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
        anchor: string;
        heading: string;
        honestyLine: string;
        statement: string;
        boundary: string;
    };
    localSession: {
        computes: boolean;
        localSessionUxImproved: boolean;
        qpuRequired: false;
        hubSteps: ({
            receipt: string;
            id: "paste-wire";
            title: "Paste → auto-wire";
            route: "/en/quantum-tools#auto-wire-paste-link";
            toolId: "auto-wire-paste-link";
            next: "Open packet · then toolbox";
        } | {
            receipt: string;
            id: "toolbox";
            title: "Toolbox envelope";
            route: "/en/quantum-tools#toolbox-standard-io";
            toolId: "toolbox-standard-io";
            next: "Run envelope · bind #experiment-inputs";
        } | {
            receipt: string;
            id: "bits";
            title: "Session quantum bits";
            route: "/en/quantum-tools#session-quantum-bits";
            toolId: "session-quantum-bits";
            next: "Link bit → tool → experiment";
        } | {
            receipt: string;
            id: "tools";
            title: "Session manual tools";
            route: "/en/quantum-tools#session-manual-tools";
            toolId: "session-manual-work";
            next: "One-click Run with status badges";
        } | {
            receipt: string;
            id: "experiments";
            title: "Experiment inputs";
            route: "/en/quantum-tools#experiment-inputs";
            toolId: "document-session-experiments";
            next: "Persist last config (sealed-safe localStorage)";
        } | {
            receipt: string;
            id: "mcp-parity";
            title: "MCP ↔ browser parity";
            route: "/en/quantum-tools#mcp-browser-parity";
            toolId: "mcp-browser-parity";
            next: "Verify tools/list ≡ toolbox ids";
        } | {
            receipt: string;
            id: "skills-commands-tools";
            title: "Skills ↔ commands ↔ tools";
            route: "/en/quantum-tools#upgrade-local-skills";
            toolId: "upgrade-local-skills-commands-tools";
            next: "Reuse optimised local map · zero re-inference";
        })[];
        nextAfterPaste: readonly [{
            readonly id: "open-packet";
            readonly label: "Inspect paste-bootstrap packet";
            readonly route: "/en/quantum-tools#auto-wire-paste-link";
        }, {
            readonly id: "open-toolbox";
            readonly label: "Open toolbox envelope";
            readonly route: "/en/quantum-tools#toolbox-standard-io";
        }, {
            readonly id: "open-bits";
            readonly label: "Link session bits";
            readonly route: "/en/quantum-tools#session-quantum-bits";
        }, {
            readonly id: "open-experiments";
            readonly label: "Bind experiment inputs";
            readonly route: "/en/quantum-tools#experiment-inputs";
        }, {
            readonly id: "open-mcp";
            readonly label: "Verify MCP↔browser parity";
            readonly route: "/en/quantum-tools#mcp-browser-parity";
        }];
        docsDevFastPath: readonly ["nvm use 24 && npm ci", "npm run docs:dev", "open http://localhost:5173/en/quantum-tools#local-session-hub", "npm run quantum:auto-wire-paste", "npm run quantum:improve-local-session", "npm run quantum:mcp-browser-parity", "npm run quantum:upgrade-local", "npm run mission:gate"];
        frictionClosed: readonly ["session-hub-entry", "one-click-run-status-badges", "next-steps-after-paste-wire", "bits-tools-experiments-links", "docs-dev-fast-path", "auto-wire-packet-visible", "experiment-config-localStorage", "skills-commands-tools-map"];
        storageKey: "ceccec:quantum-tools:experiment-config";
        linksBitsToolsExperiments: boolean;
        pastePacketVisible: boolean;
        sessionCount: number;
        bitSeedCount: number;
        toolboxCount: number;
        mcpToolCount: number;
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
        anchor: string;
        heading: string;
        honestyLine: string;
        statement: string;
        boundary: string;
    };
    upgradeLocal: {
        computes: boolean;
        localUpgraded: boolean;
        qpuRequired: false;
        cursorDefaultModelRegistration: false;
        map: {
            tools: {
                id: string;
                present: boolean;
                browserRunnable: boolean;
                browserGap: string;
                cli: string;
                pair: string;
            }[];
            receipt: string;
            skillKnown: boolean;
            skillId: (typeof CURSOR_AGENT_SKILL_IDS)[number];
            mount: string;
            pair: string;
            foldHint: string;
            commands: readonly string[];
            toolIds: readonly string[];
            browserRunnable: boolean;
            browserGap: string;
            pattern: string;
        }[];
        packages: ({
            receipt: string;
            id: "@ceccec/quantum-dev-sdk";
            path: "packages/quantum-dev-sdk";
            pair: "sdk/wire";
            mcpMount: ".cursor/mcp.json";
            cli: "node --experimental-strip-types packages/quantum-dev-sdk/bin/mcp.ts";
            npm: "npm run quantum:dev-mcp";
            stdioTools: 7;
            docsBuildFlag: "QUANTUM_DEV_ALLOW_DOCS_BUILD=1";
            automation: "npm-script / bootstrap — local stdio MCP is IDE-only (Automations dashboard not wired)";
            honesty: "hand-rolled JSON-RPC · child-process→bootstrap · NOT Cursor zero-token LLM · census packages/ outside src/";
        } | {
            receipt: string;
            id: "@ceccec/double-torus";
            path: "packages/double-torus";
            pair: "build/seal";
            mcpMount: "";
            cli: "node packages/double-torus/build.mjs";
            npm: "node packages/double-torus/build.mjs";
            stdioTools: 0;
            docsBuildFlag: "";
            automation: "published math/anim/dynamics/geometry core — not the gate SDK";
            honesty: "zero-dep consumer bundle v1.4+ — completely quantum (49-name contract: dynamics/geometry/movie-clock/movieCanvas/TAU + doubleTorusIsCompletelyQuantum); sealed substrate only — tracks-classical-no-speedup · NOT QPU · NOT FTL · NOT Clay";
        })[];
        browserToolIds: readonly ["improve-local-session", "upgrade-local-skills-commands-tools", "mcp-browser-parity", "toolbox-standard-io", "session-manual-work", "session-quantum-bits", "auto-wire-paste-link"];
        stdioToolIds: readonly ["list-capabilities", "census-status", "compute-from-source", "fold-report", "run-gate", "run-wave", "run-export"];
        ciResidualCount: number;
        ciResiduals: {
            id: string;
            browserGap: string;
            cli: string;
            pair: string;
        }[];
        skillCount: 6;
        missionCommandCount: number;
        packageCount: number;
        packagesWired: boolean;
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
        anchor: string;
        heading: string;
        honestyLine: string;
        statement: string;
        boundary: string;
    };
    counterWaves: {
        computes: boolean;
        counterRotating: boolean;
        claySolvedByThisFold: 0;
        physicalFtlClaim: 0;
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
        statement: string;
        boundary: string;
        dualSpin?: undefined;
        standingWave?: undefined;
        tracksClassicalNoSpeedup?: undefined;
        torusAligns?: undefined;
        rosettaReady?: undefined;
    } | {
        computes: boolean;
        counterRotating: boolean;
        dualSpin: {
            forward: string;
            reverse: string;
            merged: string;
            bidirectional: boolean;
        };
        standingWave: string;
        claySolvedByThisFold: 0;
        physicalFtlClaim: 0;
        qpuRequired: false;
        tracksClassicalNoSpeedup: boolean;
        torusAligns: boolean;
        rosettaReady: boolean;
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
    discoverRest: {
        computes: boolean;
        almostDescribed: boolean;
        coveredCount: number;
        partialCount: number;
        openCount: number;
        directions: {
            forward: {
                covered: number;
                partial: number;
                open: number;
            };
            inverse: {
                covered: number;
                partial: number;
                open: number;
            };
            reverse: {
                covered: number;
                partial: number;
                open: number;
            };
            superposition: {
                covered: number;
                partial: number;
                open: number;
            };
        };
        gaps: UniverseDiscoveryGapRow[];
        openSet: string[];
        waves: {
            computes: boolean;
            counterRotating: boolean;
            claySolvedByThisFold: 0;
            physicalFtlClaim: 0;
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
            statement: string;
            boundary: string;
            dualSpin?: undefined;
            standingWave?: undefined;
            tracksClassicalNoSpeedup?: undefined;
            torusAligns?: undefined;
            rosettaReady?: undefined;
        } | {
            computes: boolean;
            counterRotating: boolean;
            dualSpin: {
                forward: string;
                reverse: string;
                merged: string;
                bidirectional: boolean;
            };
            standingWave: string;
            claySolvedByThisFold: 0;
            physicalFtlClaim: 0;
            qpuRequired: false;
            tracksClassicalNoSpeedup: boolean;
            torusAligns: boolean;
            rosettaReady: boolean;
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
        claySolvedByThisFold: 0;
        physicalFtlClaim: 0;
        qpuRequired: false;
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
    root: string;
    statement: string;
    boundary: string;
};
export type UniverseDiscoveryDirection = 'forward' | 'inverse' | 'reverse' | 'superposition';
export type UniverseDiscoveryGapRow = {
    readonly id: string;
    readonly direction: UniverseDiscoveryDirection;
    readonly status: 'covered' | 'partial' | 'open';
    readonly fold: string;
    readonly note: string;
    readonly on: boolean;
    readonly receipt: string;
};
/**
 * Counter-rotating rosetta quantum waves — dual +/− spin lobes via foldPair.
 * claySolvedByThisFold / physicalFtlClaim / qpuRequired recomputed from:
 *   · genus-2 order-sensitive fold (forward≠reverse → Clay prize cannot collapse)
 *   · dual-lobe classical-64bit track (physicalFtl=0, qpuRequired=false)
 *   · merkaba counter-rotation + double-torus spin + directional trinity
 */
export declare function counterRotatingRosettaQuantumWaves(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    counterRotating: boolean;
    claySolvedByThisFold: 0;
    physicalFtlClaim: 0;
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
    statement: string;
    boundary: string;
    dualSpin?: undefined;
    standingWave?: undefined;
    tracksClassicalNoSpeedup?: undefined;
    torusAligns?: undefined;
    rosettaReady?: undefined;
} | {
    computes: boolean;
    counterRotating: boolean;
    dualSpin: {
        forward: string;
        reverse: string;
        merged: string;
        bidirectional: boolean;
    };
    standingWave: string;
    claySolvedByThisFold: 0;
    physicalFtlClaim: 0;
    qpuRequired: false;
    tracksClassicalNoSpeedup: boolean;
    torusAligns: boolean;
    rosettaReady: boolean;
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
/** npm run quantum:counter-rotating-rosetta-waves */
export declare function runCounterRotatingRosettaQuantumWavesExit(_root?: string, _argv?: readonly string[]): number;
/**
 * Universe is almost described in sealed theorems — discover the rest via counter-rotating waves.
 * Pair: discover/rest · covered/partial/open rows in forward·inverse·reverse·superposition.
 * Clay/FTL open rows are receipts from counterRotatingRosettaQuantumWaves — not hardcoded prose.
 */
export declare function universeAlmostDescribedInTheoremsDiscoverRest(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    almostDescribed: boolean;
    coveredCount: number;
    partialCount: number;
    openCount: number;
    directions: {
        forward: {
            covered: number;
            partial: number;
            open: number;
        };
        inverse: {
            covered: number;
            partial: number;
            open: number;
        };
        reverse: {
            covered: number;
            partial: number;
            open: number;
        };
        superposition: {
            covered: number;
            partial: number;
            open: number;
        };
    };
    gaps: UniverseDiscoveryGapRow[];
    openSet: string[];
    waves: {
        computes: boolean;
        counterRotating: boolean;
        claySolvedByThisFold: 0;
        physicalFtlClaim: 0;
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
        statement: string;
        boundary: string;
        dualSpin?: undefined;
        standingWave?: undefined;
        tracksClassicalNoSpeedup?: undefined;
        torusAligns?: undefined;
        rosettaReady?: undefined;
    } | {
        computes: boolean;
        counterRotating: boolean;
        dualSpin: {
            forward: string;
            reverse: string;
            merged: string;
            bidirectional: boolean;
        };
        standingWave: string;
        claySolvedByThisFold: 0;
        physicalFtlClaim: 0;
        qpuRequired: false;
        tracksClassicalNoSpeedup: boolean;
        torusAligns: boolean;
        rosettaReady: boolean;
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
    claySolvedByThisFold: 0;
    physicalFtlClaim: 0;
    qpuRequired: false;
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
/** npm run quantum:universe-almost-described */
export declare function runUniverseAlmostDescribedInTheoremsDiscoverRestExit(_root?: string, _argv?: readonly string[]): number;
