import type { Plugin } from 'vite';
import { type MindMatrix } from '../../heaven/mind';
export interface DistFile {
    readonly path: string;
    readonly content: string;
    readonly mime: string;
}
export { readme, readmeMarkdown, homeMarkdown, readmeSignatureValid } from './readme';
/** The saved manual workflows as a dist artifact — one source (the enforcement fold), served at
 *  /workflows.json and listed as an MCP resource, so any agent fetches the operational toolkit
 *  (probe, verify, regenerate, commit-isolated, the token-audit improvement loop) instead of
 *  re-improvising it. Deterministic from src; the transcript token audit itself stays a local
 *  command (it reads ~/.claude, machine state, never a served artifact). */
export declare function workflowsJson(matrix?: MindMatrix): string;
/**
 * /agents.json — zero-token discovery: agent protocol + session tools + standard toolbox envelopes.
 * Pair: session/tools · tool/envelope · compose agentHarmonise (never a second wet list).
 */
export declare function agentsJson(matrix?: MindMatrix): string;
/**
 * /agent-compliance.json — browser-safe submission/compliance broadcast.
 * HONEST: shell line-budget scan (ops.agentGateComplianceChecklist) stays Node/CI; this surface
 * broadcasts agentSubmissionProtocol facets that recompute without fs.
 */
export declare function agentComplianceJson(matrix?: MindMatrix): string;
/** Every dist artifact — computed in one pass from the model. */
export declare function computedDistFiles(siteUrl: string, matrix?: MindMatrix, now?: string): readonly DistFile[];
/** Every folder is its own API: <path>.json serves that path's computed JSON-LD — COMPUTED, not built (no
 *  separate /api namespace; the corpus dissolves into the folder paths). The page at the route communicates as
 *  schema.org JSON-LD built from its own data (title · description · keywords · the components it composes). On
 *  the static deploy the same JSON-LD lives inside each page's HTML (config.mts); this is its computed twin. */
export declare function pathJson(pathname: string, matrix?: MindMatrix): DistFile | null;
/** Route → computed body for dev middleware (path starts with /). */
export declare function computedDistRoute(pathname: string, siteUrl: string, matrix?: MindMatrix): DistFile | null;
/** Content-addressed digit-index receipt — routes through sealed toUuid; keeps `idx-` prefix for API stability. */
export declare function idxUuid(seed: string): string;
export declare function digitIndexJson(matrix?: MindMatrix, now?: string): {
    generatedAt: string;
    count: number;
    root: string;
    indices: {
        index: number;
        previousIndex: number;
        nextIndex: number;
        reverseIndex: number;
        harmonicIndex: number;
        digit: number;
        reverseDigit: number;
        folder: string;
        fraction: string;
        dualFraction: string;
        nextHarmonicFolder: string;
        selfCollision: boolean;
        theta: number;
        phi: number;
        x: number;
        y: number;
        z: number;
        frequency: number;
        vibrationMs: number;
        inward: number;
        outward: number;
        interference: number;
        referenceReceipt: string;
        receipt: string;
    }[];
};
/** Sitemap <priority> COMPUTED from the internal citation graph (user law: priority computable from
 *  analytics with exact precision accepted by Google). The site collects NO user analytics (sealed
 *  no-tracking), so the honest signal is structural: each theorem's in-degree — how many OTHER
 *  theorems' statements reference its prover or name — is its research-usage weight. Mapped to
 *  [0.30, 1.00] at 4-decimal precision (Google accepts any 0.0–1.0; priority is a relative hint). */
export declare function theoremSitemapPriorities(matrix?: MindMatrix): Map<string, number>;
/** The child sitemaps — pages + the theorem papers auto-chunked at the 50k cap (Google large-sitemap). */
export declare function sitemapChildren(siteUrl: string, matrix?: MindMatrix, now?: string): readonly DistFile[];
/** sitemap.xml IS the index (Google reads it, follows to the children) — never truncates. */
export declare function sitemapXml(siteUrl: string, matrix?: MindMatrix, now?: string): string;
export declare function sitemapJson(siteUrl: string, matrix?: MindMatrix, now?: string): {
    generatedAt: string;
    root: string;
    count: number;
    statement: string;
    boundary: string;
    urls: {
        gla: string;
        en: string;
        bg: string;
        theta: number;
        phi: number;
        priority: number;
        changefreq: string;
        alternates: {
            hreflang: string;
            href: string;
        }[];
        receipt: string;
    }[];
};
export declare function googleSearchEssentials(matrix?: MindMatrix, siteUrl?: string): {
    compliant: boolean;
    urls: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function robotsTxt(siteUrl: string): string;
export declare const dual = "src/pair/cache/quantum";
export declare function vitePlugin(siteUrl: string): Plugin;
export declare function mcpJson(matrix?: MindMatrix, corePath?: string): string;
export declare function skillsJson(matrix?: MindMatrix, corePath?: string): string;
export declare function llmsTxt(matrix?: MindMatrix): string;
export declare function apiFiles(matrix?: MindMatrix): DistFile[];
export declare function payloadCollectionsJson(): string;
