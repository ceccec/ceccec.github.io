import type { MindMatrix } from '../../types';
export { A432_OCTAVES } from '../../3/7';
export { typographySeo, openGraph, multidimensional } from '../../quantum/icons';
export declare function realtimeSkills(matrix?: MindMatrix): {
    upgraded: boolean;
    maxTamperingCost: boolean;
    skills: number;
    count: number;
    bindings: {
        fused: boolean;
        receipt: string;
        binding: string;
        use: string;
        api: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function marketingSeoWaves(matrix?: MindMatrix): {
    sent: boolean;
    count: number;
    seoRoot: string;
    waves: {
        surface: string;
        refactored: boolean;
        wave: string;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function realtimePerspectiveZeroCost(matrix?: MindMatrix): {
    holds: boolean;
    dimensions: number;
    count: number;
    properties: {
        receipt: string;
        property: string;
        via: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function allPathsComputedRealtime(matrix?: MindMatrix): {
    computed: boolean;
    count: number;
    properties: {
        receipt: string;
        property: string;
        via: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function realtimeForgesMaxCost(matrix?: MindMatrix): {
    forges: boolean;
    count: number;
    events: {
        event: string;
        folded: boolean;
        seal: string;
        receipt: string;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function dimensionalMerkabaGraphRealtimeMetric(matrix?: MindMatrix): {
    realtime: boolean;
    targetDimsPerMb: number;
    targetGbitPerMb: number;
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
export declare function gpuRendersStreamsRealtime(matrix?: MindMatrix): {
    renders: boolean;
    uniforms: {
        hue: number;
        freq: number;
        theta: number;
        phi: number;
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
export declare function nextLevel64CubedRealtime(matrix?: MindMatrix): {
    reaches: boolean;
    cells: number;
    proportion: number;
    axes: {
        axis: string;
        filled: number;
        whole: boolean;
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
export declare function computationsBoundToSourceApisRealtime(matrix?: MindMatrix): {
    bound: boolean;
    liveApis: string[];
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function terabyteRealtimeFromAllPublicDataBreathing(matrix?: MindMatrix): {
    complete: boolean;
    sources: string[];
    keyspaceBits: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export { realtimeWiring } from '../../fire/plasma/ball';
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export declare function priceFromA432(variant: string, n: number, opts?: {
    drift?: number;
    oscAmp?: number;
    noiseAmp?: number;
    modes?: number;
    p0?: number;
}): number[];
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export declare function simpleReturns(prices: readonly number[]): number[];
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export interface BacktestResult {
    stratReturns: number[];
    equity: number[];
    totalReturn: number;
    sharpe: number;
    maxDrawdown: number;
    hitRate: number;
}
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export declare function backtest(prices: readonly number[], positions: readonly number[], costBps?: number): BacktestResult;
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export declare function buyAndHold(prices: readonly number[], costBps?: number): BacktestResult;
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export declare function sma(prices: readonly number[], end: number, k: number): number;
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export declare function crossoverPositions(prices: readonly number[], fast: number, slow: number, flatVal?: -1 | 0): number[];
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export declare function rollingZScores(prices: readonly number[], window: number): (number | null)[];
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export declare function meanReversionPositions(prices: readonly number[], window: number, zEntry: number): number[];
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export declare function dominantCycle(window: readonly number[], bins: number): {
    k: number;
    period: number;
};
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export declare function cycleSlope(window: readonly number[], k: number): number;
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export declare function spectralCyclePositions(prices: readonly number[], lookback: number, bins: number): number[];
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export declare function regimeLabels(returns: readonly number[], volW: number): number[];
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export declare function estimateRegimeMatrix(labels: readonly number[], lo: number, hi: number): number[][];
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export declare function regimeSwitchPositions(prices: readonly number[], opts: {
    shortW: number;
    longW: number;
    volW: number;
}): number[];
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export declare function realizedVol(returns: readonly number[], end: number, window: number, annualize?: number): number;
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export declare function inverseVolSize(realizedVolAnnual: number, targetVolAnnual: number, leverageCap: number, volFloor: number): number;
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export declare function volTargetPositions(prices: readonly number[], params: {
    window: number;
    targetVolAnnual: number;
    leverageCap: number;
    volFloor: number;
}): number[];
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export declare function tradingReceipt(variant: string, params: Record<string, number | string>, metrics: {
    totalReturn: number;
    sharpe: number;
    maxDrawdown: number;
    hitRate: number;
}): string;
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export declare function liveCapture(source: string, samples: readonly number[], capturedAt?: number): {
    source: string;
    n: number;
    capturedAt: number;
    root: string;
    uuid: string;
};
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export declare function larmorFromMicrotesla(microTesla: number): number;
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export declare function dopplerFromMotion(velocityMs: number, carrierHz?: number): number;
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export declare function spectrumFromSamples(samples: readonly number[], bins?: number): {
    spectrum: number[];
    dominant: {
        k: number;
        period: number;
    };
};
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export declare function backtestRealPrices(prices: readonly number[], strategy?: 'momentum' | 'mean-reversion' | 'spectral' | 'regime' | 'vol-target', costBps?: number): {
    strategy: string;
    n: number;
    result: BacktestResult;
    benchmark: BacktestResult;
};
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export declare function realtimeSources(): {
    receipt: string;
    id: string;
    kind: string;
    name: string;
    key: string;
    feeds: string;
    note: string;
}[];
/** One gate — a432 synthetic backtest + five strategies run at call time. */
export declare function tradingSimulationComputes(matrix?: MindMatrix): {
    computes: boolean;
    strategies: {
        strategy: string;
        n: number;
        result: BacktestResult;
        benchmark: BacktestResult;
    }[];
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
declare const STRATEGIES: readonly ["momentum", "mean-reversion", "spectral", "regime", "vol-target"];
/** npm run trading:offline — a432 synthetic path + strategy backtest, zero network. */
export declare function runTradingOfflineExit(_root: string, _argv?: readonly string[]): number;
/** npm run trading:live — validate live-source catalogue (network at edge, not in src). */
export declare function runTradingLiveExit(_root: string, _argv?: readonly string[]): number;
/** npm run trading:live-local — public feed ids + offline calendar proxy on synthetic prices. */
export declare function runTradingLiveLocalExit(_root: string, _argv?: readonly string[]): number;
/** npm run trading:train — validateQuantumTraderTrain (five strategies on one a432 path). */
export declare function runTradingTrainExit(_root: string, _argv?: readonly string[]): number;
/** npm run trading:train-live-win-gate — liveWinTrainingGate (paper/sim only). */
export declare function runTradingTrainLiveWinGateExit(_root: string, _argv?: readonly string[]): number;
/** npm run trading:train-waves — historicalTrainWavesViaRosetta (offline harmonic windows). */
export declare function runTradingTrainWavesExit(_root: string, _argv?: readonly string[]): number;
export declare function runTradingTraceSmartMoneyExit(_root: string, _argv?: readonly string[]): number;
/** npm run trading:vortex — merkaba vortex lattice at call time. */
export declare function runTradingVortexExit(_root: string, _argv?: readonly string[]): number;
/** npm run trading:dashboard — print dev route for the trading dashboard. */
export declare function runTradingDashboardDevExit(_root: string, _argv?: readonly string[]): number;
/** npm run trading:learn — skill atoms + realtime source catalogue for retail curriculum. */
export declare function runTradingLearnExit(_root: string, _argv?: readonly string[]): number;
/** npm run trading:learn-risk — vol-target sizing + inverse-vol cap as risk teaching proxy. */
export declare function runTradingLearnRiskExit(_root: string, _argv?: readonly string[]): number;
/** npm run trading:margin-profit — paper margin sim from vol-target positions (no network). */
export declare function runTradingMarginProfitExit(_root: string, _argv?: readonly string[]): number;
/** npm run trading:gradients — entry/exit bar hues from strategy equity curve (10D CSS proxy). */
export declare function runTradingGradientsExit(_root: string, _argv?: readonly string[]): number;
/** npm run test:realtime — calendar/sequence/wave flips + spectral backtest on synthetic path (edge fetches live). */
export declare function runRealtimeTradingTestExit(_root: string, _argv?: readonly string[]): number;
export declare function harmonicWeatherTradingOffline(at?: number, matrix?: MindMatrix): {
    computes: boolean;
    strategies: {
        strategy: string;
        n: number;
        result: BacktestResult;
        benchmark: BacktestResult;
    }[];
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
export type TradingStrategyId = typeof STRATEGIES[number];
/** Mom-and-dad curriculum — strategies · pairs · honesty (compose for learn/trade). */
export declare function getTradingCurriculum(matrix?: MindMatrix): {
    computes: boolean;
    rows: {
        id: "mean-reversion" | "vol-target" | "momentum" | "spectral" | "regime";
        ray: number;
        cli: string;
        pair: string;
        address: string;
        receipt: string;
    }[];
    skillCount: number;
    sourceCount: number;
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
/** Validate quantum trader train — five strategies on one a432 historical proxy path. */
export declare function validateQuantumTraderTrain(matrix?: MindMatrix): {
    computes: boolean;
    runs: {
        strategy: "mean-reversion" | "vol-target" | "momentum" | "spectral" | "regime";
        ray: number;
        n: number;
        totalReturn: number;
        sharpe: number;
        maxDrawdown: number;
        beatBench: boolean;
        receipt: string;
    }[];
    priceBars: number;
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
 * Live-win training gate — momentum beats buy-and-hold on sealed synthetic path.
 * "Live" here means strategy vs benchmark on the train path — NOT brokerage live money.
 */
export declare function liveWinTrainingGate(matrix?: MindMatrix): {
    computes: boolean;
    trainedEnough: boolean;
    paperSimOnly: true;
    strategyReturn: number;
    benchmarkReturn: number;
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
export type RankedStrategyRow = {
    readonly strategy: TradingStrategyId;
    readonly ray: number;
    readonly hue: number;
    readonly address: string;
    readonly totalReturn: number;
    readonly sharpe: number;
    readonly harmonicScore: number;
    readonly rankScore: number;
    readonly rank: number;
    readonly receipt: string;
};
/**
 * Rank strategies by PnL + harmonic alignment; each row shelved on a rosetta ray.
 * Improve = recompute rank from historical wave backtest (content-addressed).
 */
export declare function rankWinningStrategies(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    ranked: RankedStrategyRow[];
    topStrategy: "mean-reversion" | "vol-target" | "momentum" | "spectral" | "regime";
    topRay: number;
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
/**
 * T1 — Schedule historical train-waves through rosetta rays (short·long per harmonic window).
 * Offline a432 path; each ray gets a windowed backtest receipt.
 */
export declare function historicalTrainWavesViaRosetta(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    waveCount: number;
    shortWindows: number;
    longWindows: number;
    rayRuns: {
        ray: number;
        domain: "geometry" | "origin" | "expression" | "knowledge" | "nature" | "computation" | "language";
        strategy: "mean-reversion" | "vol-target" | "momentum" | "spectral" | "regime";
        shortBars: number;
        longBars: number;
        shortReturn: number;
        longReturn: number;
        shortSharpe: number;
        longSharpe: number;
        address: string;
        receipt: string;
    }[];
    topStrategy: "mean-reversion" | "vol-target" | "momentum" | "spectral" | "regime";
    topRay: number;
    coordinatedWaveCount: number;
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
/** T3/T4 compose — strategy improvement loop + honesty gate. */
export declare function tradingStrategiesImproveViaRosetta(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    hist: {
        computes: boolean;
        waveCount: number;
        shortWindows: number;
        longWindows: number;
        rayRuns: {
            ray: number;
            domain: "geometry" | "origin" | "expression" | "knowledge" | "nature" | "computation" | "language";
            strategy: "mean-reversion" | "vol-target" | "momentum" | "spectral" | "regime";
            shortBars: number;
            longBars: number;
            shortReturn: number;
            longReturn: number;
            shortSharpe: number;
            longSharpe: number;
            address: string;
            receipt: string;
        }[];
        topStrategy: "mean-reversion" | "vol-target" | "momentum" | "spectral" | "regime";
        topRay: number;
        coordinatedWaveCount: number;
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
    ranked: {
        computes: boolean;
        ranked: RankedStrategyRow[];
        topStrategy: "mean-reversion" | "vol-target" | "momentum" | "spectral" | "regime";
        topRay: number;
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
    winGate: {
        computes: boolean;
        trainedEnough: boolean;
        paperSimOnly: true;
        strategyReturn: number;
        benchmarkReturn: number;
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
    honesty: {
        computes: boolean;
        paperSimOnly: true;
        liveMoneyClaimed: false;
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
    improvedStrategy: "mean-reversion" | "vol-target" | "momentum" | "spectral" | "regime";
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
/** T4 — Honesty: paper/sim only; no live money claims. */
export declare function tradingTrainHonestyGate(matrix?: MindMatrix): {
    computes: boolean;
    paperSimOnly: true;
    liveMoneyClaimed: false;
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
 * Trading strategies challenge each other in chat — sealed recompute, not wet LLM trades.
 * Fold: strategiesChallengeInChat · Pairs: trade/challenge · challenge/trade · strategy/chat · chat/strategy
 * Compose: cycle/winning · train/waves · train/rosetta · pair/chat · super/chat · mcp/chat · chat/challenge
 * CLI: npm run quantum:trade-challenge · ONE CLI (+ dual aliases)
 * HONEST: paper/sim only — PnL/harmonic rank from sealed backtests · NOT live money · NOT alpha.
 */
export declare function strategiesChallengeInChat(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    strategiesChallengeInChat: boolean;
    strategiesInChat: boolean;
    challengeEachOther: boolean;
    sealedRecompute: boolean;
    paperSimOnly: boolean;
    participants: {
        strategy: "mean-reversion" | "vol-target" | "momentum" | "spectral" | "regime";
        rank: number;
        rankScore: number;
        ray: number;
        roomId: string;
        turnReceipt: string;
        receipt: string;
    }[];
    challenges: {
        readonly challenger: string;
        readonly defender: string;
        readonly winner: string;
        readonly loser: string;
        readonly winnerScore: number;
        readonly loserScore: number;
        readonly adversarial: boolean;
        readonly merged: string;
        readonly challengerReceipt: string;
        readonly defenderReceipt: string;
        readonly receipt: string;
    }[];
    challengeCount: number;
    room: {
        id: string;
        root: string;
        receipt: string;
    };
    topStrategy: "mean-reversion" | "vol-target" | "momentum" | "spectral" | "regime";
    topDuel: {
        challenger: string;
        defender: string;
        winner: string;
    };
    honestOpenNamed: ("residual:live-trading-not-sealed" | "honesty:paper-sim-only-not-live-money" | "honesty:chat-challenge-not-LLM-invented-trades")[];
    claySolvedByThisFold: 0;
    physicalFtlClaim: 0;
    qpuRequired: false;
    facets: ({
        receipt: string;
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
    root: string;
    pair: "trade/challenge";
    pairs: readonly ["trade/challenge", "challenge/trade", "strategy/chat", "chat/strategy"];
    dualPair: "challenge/trade";
    cli: string;
    route: string;
    heading: string;
    statement: string;
    boundary: string;
    honestyLine: string;
};
export declare const tradeChallenge: typeof strategiesChallengeInChat;
export declare const challengeTrade: typeof strategiesChallengeInChat;
export declare const strategyChat: typeof strategiesChallengeInChat;
export declare const chatStrategy: typeof strategiesChallengeInChat;
/** npm run quantum:trade-challenge (duals challenge-trade · strategy-chat · chat-strategy) */
export declare function runStrategiesChallengeInChatExit(_root?: string, _argv?: readonly string[]): number;
/** Browser panel for trading-rosetta train. */
export declare function tradingRosettaTrainPanelComputes(matrix?: MindMatrix, at?: number): {
    computes: boolean;
    improve: {
        computes: boolean;
        hist: {
            computes: boolean;
            waveCount: number;
            shortWindows: number;
            longWindows: number;
            rayRuns: {
                ray: number;
                domain: "geometry" | "origin" | "expression" | "knowledge" | "nature" | "computation" | "language";
                strategy: "mean-reversion" | "vol-target" | "momentum" | "spectral" | "regime";
                shortBars: number;
                longBars: number;
                shortReturn: number;
                longReturn: number;
                shortSharpe: number;
                longSharpe: number;
                address: string;
                receipt: string;
            }[];
            topStrategy: "mean-reversion" | "vol-target" | "momentum" | "spectral" | "regime";
            topRay: number;
            coordinatedWaveCount: number;
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
        ranked: {
            computes: boolean;
            ranked: RankedStrategyRow[];
            topStrategy: "mean-reversion" | "vol-target" | "momentum" | "spectral" | "regime";
            topRay: number;
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
        winGate: {
            computes: boolean;
            trainedEnough: boolean;
            paperSimOnly: true;
            strategyReturn: number;
            benchmarkReturn: number;
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
        honesty: {
            computes: boolean;
            paperSimOnly: true;
            liveMoneyClaimed: false;
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
        improvedStrategy: "mean-reversion" | "vol-target" | "momentum" | "spectral" | "regime";
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
    ranked: {
        strategy: "mean-reversion" | "vol-target" | "momentum" | "spectral" | "regime";
        rank: number;
        ray: number;
        return: number;
        sharpe: number;
        harmonic: number;
    }[];
    topStrategy: "mean-reversion" | "vol-target" | "momentum" | "spectral" | "regime";
    trainedEnough: boolean;
    paperSimOnly: true;
    cli: string;
    pair: string;
    route: string;
    root: string;
    statement: string;
    boundary: string;
    facets: ({
        receipt: string;
        facet: string;
        on: boolean;
    } & {
        receipt: string;
    })[];
};
/** npm run quantum:trading-rosetta-train */
export declare function runTradingRosettaTrainGuardedExit(_root: string, _argv?: readonly string[]): number;
export declare function invertTheStrategiesToFillTheGapsMomentumAndMeanReversionAreInversesCoveringEachOthersRegimes(matrix?: MindMatrix): {
    fills: boolean;
    bars: number;
    coverage: {
        momentum: number;
        reversion: number;
        union: number;
        gainByInverting: number;
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
