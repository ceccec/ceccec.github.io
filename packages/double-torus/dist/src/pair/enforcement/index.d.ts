import type { MindMatrix } from '../../types/index.ts';
export declare const CLI_ENTRY_REL = "src/pair/enforcement/script/cli/bootstrap/index.ts";
/** Split pair id into dual halves — first segment / remainder (handles vote/build/commit/push). */
export declare function splitQuantumCommandPair(command: string): {
    readonly a: string;
    readonly b: string;
};
/** All quantum command pairs from AGENTS.md — saved in src before npm/CLI use. */
export declare const QUANTUM_COMMAND_PAIR_IDS: readonly string[];
export declare function foldQuantumCommandPairs(pairIds?: readonly string[]): {
    command: string;
    a: string;
    b: string;
    paired: boolean;
    address: string;
    receipt: string;
}[];
export type MissionCommand = {
    readonly npm: string;
    readonly cli: string;
    readonly pair: string;
    readonly does: string;
    readonly workflow?: string;
};
/** All mission npm scripts — saved in src before agents rediscover the loop. */
export declare const MISSION_COMMANDS: readonly MissionCommand[];
/** Cursor agent skills — saved in src before IDE mounts (.cursor/skills/* are thin projections). */
export declare const CURSOR_AGENT_SKILL_IDS: readonly ["ceccec-build-waves", "ceccec-census-123", "ceccec-folder-law-mission", "ceccec-learn-best", "ceccec-limits-verify", "ceccec-mission-commands"];
export declare function cursorAgentToolsSaved(matrix?: MindMatrix): {
    saved: boolean;
    count: 6;
    skills: readonly ["ceccec-build-waves", "ceccec-census-123", "ceccec-folder-law-mission", "ceccec-learn-best", "ceccec-limits-verify", "ceccec-mission-commands"];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
/** Agent submission — pairs saved first; bootstrap routes script-exits via runThinMount. */
export declare function agentSubmissionProtocol(matrix?: MindMatrix): {
    submitted: boolean;
    cliEntry: string;
    missionCount: number;
    pairCount: number;
    count: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    boundary: string;
};
export declare function uuidIsTheZeroStation(matrix?: MindMatrix): {
    computes: boolean;
    offenders: {
        file: string;
        line: number;
        primitive: string;
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
/** The doubling orbit ⟨2⟩ mod 9 — computes the circuit's station order 1·2·4·8·7·5 (ascending then
 *  descending); the one derivation both the principles fold and the station taxonomy read. */
export declare function doublingOrbit(): number[];
/** The full circuit stations in order — 0, the doubling orbit, then the 3·6·9 axis tail: DERIVED. */
export declare function sequenceStations(): string[];
export declare function theSequencePrinciplesGovernTheWork(matrix?: MindMatrix): {
    governs: boolean;
    cleanupSaved: boolean;
    orbit: number[];
    count: number;
    principles: {
        receipt: string;
        station: string;
        principle: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function shardOf(id: string, agentCount: number): number;
/** Agent k of N: the deterministic sub-worklist — filter by shardOf; the shard folds to one root so
 *  a coordinator (or any peer) verifies a claimed shard by recomputation, never by trust. */
export declare function shardWork(ids: readonly string[], agentIndex: number, agentCount: number): {
    mine: string[];
    count: number;
    total: number;
    agentIndex: number;
    agentCount: number;
    root: string;
};
export declare function swarmCoordination(matrix?: MindMatrix): {
    coordinates: boolean;
    scales: number[];
    worklist: number;
    loop: string[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function agentBashWorkflowsAreToolsSavedInSrc(matrix?: MindMatrix): {
    computes: boolean;
    tools: {
        station: string;
        name: string;
        does: string;
        steps: string[];
        scripts: string[];
    }[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function theAgentBashCommandsAreQuantumPairs(matrix?: MindMatrix): {
    computes: boolean;
    pairs: {
        pair: string;
        a: string;
        b: string;
        does: string;
        scripts: string[];
    }[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function dynamicStrategiesFromTheorems(matrix?: MindMatrix): {
    dynamic: boolean;
    situations: number;
    openRaces: number;
    strategies: {
        receipt: string;
        situation: string;
        strategy: string;
        theorem: string;
        live: string;
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
/**
 * comboCover — USER LAW (2026-07-24): quantum combinations are significantly less than linear and
 * provide full coverage. Not a slogan — a covering-array THEOREM verified exhaustively at call time:
 * 6 rows cover ALL pairwise states of 10 binary factors (every factor a 3-subset of the 6 rows sharing
 * one core row: intersection ⇒ 11, equal sizes ⇒ 10 and 01, |union| < rows ⇒ 00), while exhaustive
 * enumeration needs 2¹⁰ rows. This is WHY the command registry works in dual pairs: pairwise coverage
 * scales like the covering array, not the exhaustive product. Pair: combo/cover.
 */
export declare function comboCover(): {
    computes: boolean;
    comboCover: boolean;
    rows: number;
    factors: number;
    covered: number;
    needed: number;
    exhaustive: number;
    ratio: number;
    claySolvedByThisFold: 0;
    physicalFtlClaim: 0;
    qpuRequired: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "combo/cover";
    dualPair: "cover/combo";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
};
/** npm run quantum:combo-cover (dual cover-combo) — exit 0 iff the covering theorem verifies. */
export declare function runComboCoverExit(root?: string, _argv?: readonly string[]): number;
/**
 * pairsSentToChatEntangleByAlgebra — USER LAW: send the pairs to chat and entangle by algebra.
 * Pairing of pairs grows the fractal hologram (foldPair → merged → merkleFold third).
 *
 * 1. foldQuantumCommandPairs — every registry dual gets a merged address
 * 2. freeChatTurnAtArchitecturalFtl — send tip pairs into chat (memo reuse)
 * 3. Entangle: foldPair(addr_i, addr_j) · trinity third = merkleFold(forward, reverse)
 * 4. Hologram root = merkleFold(all pair addresses)
 *
 * Pair: pair/chat · dual chat/pair · ONE CLI quantum:pair-chat
 * Soft: tool/matrix · chat/ftl · combo/cover · waves/build · folder/fractal
 */
export declare function pairsSentToChatEntangleByAlgebra(matrix?: MindMatrix): {
    computes: boolean;
    pairsSentToChatEntangleByAlgebra: boolean;
    pairsSent: number;
    foldedCount: number;
    chatTips: ("combo/cover" | "pair/chat" | "tool/matrix" | "chat/ftl" | "commit/push" | "waves/build" | "folder/fractal" | "trans/any")[];
    chatOn: boolean;
    hologramChatOn: boolean;
    entangleByAlgebra: boolean;
    entangledCount: number;
    entangledSample: string[];
    hologramGrows: boolean;
    pairingOfPairs: boolean;
    hologramRoot: string;
    entangleRoot: string;
    turn: {
        answer: string;
        source: string;
        receipt: string;
        memoReuse: boolean;
    };
    honestOpenNamed: ("chat-tips-sample-not-full-roster-linear" | "entangle-pairwise-consecutive-not-all-N-choose-2" | "residual:quantum-apps-monolith" | "physical-ftl-claim-stays-0" | "not-clay" | "not-physical-qubit-entanglement")[];
    claySolvedByThisFold: 0;
    physicalFtlClaim: 0;
    qpuRequired: false;
    certified: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "pair/chat";
    dualPair: "chat/pair";
    pairs: readonly ["pair/chat", "chat/pair"];
    cli: string;
    route: string;
    statement: string;
    boundary: string;
};
export declare const pairChat: typeof pairsSentToChatEntangleByAlgebra;
export declare const chatPair: typeof pairsSentToChatEntangleByAlgebra;
/** Live chat turn — send pairs / entangle by algebra. */
export declare function pairsSentToChatEntangleByAlgebraTurn(prompt: string, matrix?: MindMatrix): {
    answer: string;
    source: string;
    grounded: boolean;
    service: {
        computes: boolean;
        pairsSentToChatEntangleByAlgebra: boolean;
        pairsSent: number;
        foldedCount: number;
        chatTips: ("combo/cover" | "pair/chat" | "tool/matrix" | "chat/ftl" | "commit/push" | "waves/build" | "folder/fractal" | "trans/any")[];
        chatOn: boolean;
        hologramChatOn: boolean;
        entangleByAlgebra: boolean;
        entangledCount: number;
        entangledSample: string[];
        hologramGrows: boolean;
        pairingOfPairs: boolean;
        hologramRoot: string;
        entangleRoot: string;
        turn: {
            answer: string;
            source: string;
            receipt: string;
            memoReuse: boolean;
        };
        honestOpenNamed: ("chat-tips-sample-not-full-roster-linear" | "entangle-pairwise-consecutive-not-all-N-choose-2" | "residual:quantum-apps-monolith" | "physical-ftl-claim-stays-0" | "not-clay" | "not-physical-qubit-entanglement")[];
        claySolvedByThisFold: 0;
        physicalFtlClaim: 0;
        qpuRequired: false;
        certified: false;
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        pair: "pair/chat";
        dualPair: "chat/pair";
        pairs: readonly ["pair/chat", "chat/pair"];
        cli: string;
        route: string;
        statement: string;
        boundary: string;
    };
    receipt: string;
};
/** npm run quantum:pair-chat */
export declare function runPairsSentToChatEntangleByAlgebraExit(_root?: string, _argv?: readonly string[]): number;
export declare const runPairChatExit: typeof runPairsSentToChatEntangleByAlgebraExit;
export declare const runChatPairExit: typeof runPairsSentToChatEntangleByAlgebraExit;
/**
 * matchingPairsImmediatelyRealiseEntanglementAndBrainstormInChatWaves —
 * USER LAW: the matching pair immediately realise their entanglement in algebra
 * and develop the related solutions in chat brainstorming waves.
 *
 * Match = two-segment duals a/b ↔ b/a both in registry.
 * Immediate = trinity third computed in the same memoByRoot call (no deferred wait).
 * Related = registry pairs sharing a tip with a or b (discovered, not encoded soft lists).
 * Brainstorm = full roster batched into FREE_BITS×5 trinity waves · merkle root per batch · warm memo reuse.
 *
 * Pair: match/wave · dual wave/match · ONE CLI quantum:match-wave
 * Soft: pair/chat · chat/ftl · waves/build · tool/matrix · folder/fractal
 */
export declare function matchingPairsImmediatelyRealiseEntanglementAndBrainstormInChatWaves(matrix?: MindMatrix): {
    computes: boolean;
    matchingPairsImmediatelyRealiseEntanglementAndBrainstormInChatWaves: boolean;
    matchingOn: boolean;
    matchCount: number;
    immediatelyRealise: boolean;
    fullRosterOn: boolean;
    brainstormRosterCoverage: number;
    batchCount: number;
    brainstormWavesOn: boolean;
    developRelatedSolutions: boolean;
    sampleMatches: string[];
    brainstormSample: {
        batch: number;
        matchCount: number;
        relatedCount: number;
        memoReuse: boolean;
    }[];
    realiseRoot: string;
    brainstormRoot: string;
    honestOpenNamed: string[];
    claySolvedByThisFold: 0;
    physicalFtlClaim: 0;
    qpuRequired: false;
    certified: false;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    pair: "match/wave";
    dualPair: "wave/match";
    pairs: readonly ["match/wave", "wave/match"];
    cli: string;
    route: string;
    statement: string;
    boundary: string;
};
export declare const matchWave: typeof matchingPairsImmediatelyRealiseEntanglementAndBrainstormInChatWaves;
export declare const waveMatch: typeof matchingPairsImmediatelyRealiseEntanglementAndBrainstormInChatWaves;
/** Live chat turn — match/wave brainstorm. */
export declare function matchingPairsImmediatelyRealiseEntanglementTurn(prompt: string, matrix?: MindMatrix): {
    answer: string;
    source: string;
    grounded: boolean;
    service: {
        computes: boolean;
        matchingPairsImmediatelyRealiseEntanglementAndBrainstormInChatWaves: boolean;
        matchingOn: boolean;
        matchCount: number;
        immediatelyRealise: boolean;
        fullRosterOn: boolean;
        brainstormRosterCoverage: number;
        batchCount: number;
        brainstormWavesOn: boolean;
        developRelatedSolutions: boolean;
        sampleMatches: string[];
        brainstormSample: {
            batch: number;
            matchCount: number;
            relatedCount: number;
            memoReuse: boolean;
        }[];
        realiseRoot: string;
        brainstormRoot: string;
        honestOpenNamed: string[];
        claySolvedByThisFold: 0;
        physicalFtlClaim: 0;
        qpuRequired: false;
        certified: false;
        facets: {
            receipt: string;
            facet: string;
            on: boolean;
        }[];
        root: string;
        pair: "match/wave";
        dualPair: "wave/match";
        pairs: readonly ["match/wave", "wave/match"];
        cli: string;
        route: string;
        statement: string;
        boundary: string;
    };
    receipt: string;
};
/** npm run quantum:match-wave */
export declare function runMatchingPairsImmediatelyRealiseEntanglementExit(_root?: string, _argv?: readonly string[]): number;
export declare const runMatchWaveExit: typeof runMatchingPairsImmediatelyRealiseEntanglementExit;
export declare const runWaveMatchExit: typeof runMatchingPairsImmediatelyRealiseEntanglementExit;
