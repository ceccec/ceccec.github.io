// src/quantum/math — the quantitative math: the a432-ignited synthetic price engine, the five trading-strategy
// signal functions, the backtest, and the realtime data adapters that feed the models live captures. Pure and
// deterministic, composing only src/0 primitives. The FOLDS that run them as shared experiments live in
// src/quantum/experiments. (folderLaw: one word, one index — under the 2584-line compression limit.)
import { toUuid, prng, seedFromText, roundTo, merkleFold, powerSpectrum, markovStep, larmorFrequency, dopplerShift } from '../../0/index.ts'

// ── Trading from the same knowledge, a432-ignited (developed + adversarially verified by a 10-agent wave) ──
// "When all is quantum, a432 is the engine starter": every strategy is backtested on ONE deterministic
// synthetic price series ignited by a432 — seed = toUuid('a432:'+variant), the a432 octave ladder as the
// oscillator-basis cycle lengths. Five strategies built FROM the project's own primitives. Each run is a
// content-addressed SHARED EXPERIMENT; the look-ahead-free property was adversarially verified on all five.
export const A432_OCTAVES = [27, 54, 108, 216, 432, 864, 1728] // = a432().octaves — the engine-starter cycle basis

// THE ENGINE STARTER: one deterministic synthetic price path ignited by a432. Same variant → identical path.
export function priceFromA432(variant: string, n: number, opts: { drift?: number; oscAmp?: number; noiseAmp?: number; modes?: number; p0?: number } = {}): number[] {
  const { drift = 0.0002, oscAmp = 0.0015, noiseAmp = 0.001, modes = 3, p0 = 100 } = opts
  const seed = toUuid(`a432:${variant}`) // a432 ignites the engine (the NAME content-addresses the seed)
  const periods = A432_OCTAVES.slice(0, modes)
  const noise = prng(`${seed}:noise`)
  const prices = [p0]
  for (let t = 1; t <= n; t++) {
    let osc = 0
    for (let m = 0; m < periods.length; m++) {
      const phase = ((seedFromText(`${seed}:phase:${m}`, 6) % 1000) / 1000) * 2 * Math.PI
      osc += (oscAmp * Math.sin((2 * Math.PI * t) / periods[m] + phase)) / (m + 1)
    }
    prices.push(prices[t - 1] * Math.exp(drift + osc + (noise() - 0.5) * 2 * noiseAmp))
  }
  return prices
}
// Period simple returns r_t=(p_t−p_{t−1})/p_{t−1}, r_0=0 — index-aligned with prices and positions.
export function simpleReturns(prices: readonly number[]): number[] {
  const r = new Array(prices.length).fill(0)
  for (let t = 1; t < prices.length; t++) r[t] = (prices[t] - prices[t - 1]) / prices[t - 1]
  return r
}
export interface BacktestResult { stratReturns: number[]; equity: number[]; totalReturn: number; sharpe: number; maxDrawdown: number; hitRate: number }
// The ONE backtest: position_t (decided from data ≤ t−1) earns r_t; cost on position CHANGES; Sharpe·√252,
// maxDrawdown, hitRate, equity = cumprod. Fractional/levered positions allowed (so vol-target sizing works).
export function backtest(prices: readonly number[], positions: readonly number[], costBps = 5): BacktestResult {
  const r = simpleReturns(prices)
  const cost = costBps / 10000
  const stratReturns = new Array(prices.length).fill(0)
  let prev = 0
  for (let t = 0; t < prices.length; t++) { const turn = Math.abs(positions[t] - prev); stratReturns[t] = positions[t] * r[t] - turn * cost; prev = positions[t] }
  let eq = 1, peak = 1, mdd = 0, wins = 0, active = 0
  const equity: number[] = []
  for (let t = 0; t < prices.length; t++) { eq *= 1 + stratReturns[t]; equity.push(eq); if (eq > peak) peak = eq; const dd = peak === 0 ? 0 : (peak - eq) / peak; if (dd > mdd) mdd = dd; if (t >= 1) { active++; if (stratReturns[t] > 0) wins++ } }
  const rs = stratReturns.slice(1)
  const mean = rs.reduce((a, b) => a + b, 0) / rs.length
  const std = Math.sqrt(rs.reduce((a, b) => a + (b - mean) ** 2, 0) / rs.length)
  return { stratReturns, equity, totalReturn: eq - 1, sharpe: std === 0 ? 0 : (mean / std) * Math.sqrt(252), maxDrawdown: mdd, hitRate: active === 0 ? 0 : wins / active }
}
export function buyAndHold(prices: readonly number[], costBps = 5): BacktestResult { return backtest(prices, prices.map(() => 1), costBps) }

// Strategy 1 — trend-momentum (MA crossover; Moskowitz-Ooi-Pedersen 2012; real but weak, decaying, costly).
export function sma(prices: readonly number[], end: number, k: number): number { if (end < k) return NaN; let s = 0; for (let i = end - k; i < end; i++) s += prices[i]; return s / k }
export function crossoverPositions(prices: readonly number[], fast: number, slow: number, flatVal: -1 | 0 = -1): number[] {
  const pos = new Array(prices.length).fill(0)
  for (let t = 0; t < prices.length; t++) { if (t < slow + 1) continue; pos[t] = sma(prices, t, fast) > sma(prices, t, slow) ? 1 : flatVal }
  return pos // position_t reads prices[t−slow .. t−1] only
}
// Strategy 2 — mean-reversion (rolling z-score reversal; real short-horizon effect, regime-dependent).
export function rollingZScores(prices: readonly number[], window: number): (number | null)[] {
  return prices.map((_, i) => { if (i < window) return null; let s = 0; for (let k = i - window; k < i; k++) s += prices[k]; const m = s / window; let v = 0; for (let k = i - window; k < i; k++) v += (prices[k] - m) ** 2; const sd = Math.sqrt(v / window); return sd === 0 ? 0 : (prices[i - 1] - m) / sd })
}
export function meanReversionPositions(prices: readonly number[], window: number, zEntry: number): number[] {
  return rollingZScores(prices, window).map((zi) => (zi === null ? 0 : zi >= zEntry ? -1 : zi <= -zEntry ? 1 : 0))
}
// Strategy 3 — spectral-cycle (the powerSpectrum dominant-cycle detector + phase slope; cycles mostly spurious).
export function dominantCycle(window: readonly number[], bins: number): { k: number; period: number } {
  const s = powerSpectrum(window, bins); let k = 1, v = s[1]; const kmax = Math.floor(bins / 2); for (let i = 2; i <= kmax; i++) if (s[i] > v) { v = s[i]; k = i } return { k, period: window.length / k } // bin 0 (DC) skipped
}
export function cycleSlope(window: readonly number[], k: number): number {
  const N = window.length; let re = 0, im = 0; for (let n = 0; n < N; n++) { const a = (-2 * Math.PI * k * n) / N; re += window[n] * Math.cos(a); im += window[n] * Math.sin(a) } const amp = (2 / N) * Math.hypot(re, im), phi = Math.atan2(im, re); const at = (x: number) => amp * Math.cos((2 * Math.PI * k * x) / N + phi); return at(N) - at(N - 1)
}
export function spectralCyclePositions(prices: readonly number[], lookback: number, bins: number): number[] {
  const r = simpleReturns(prices); const pos = new Array(prices.length).fill(0)
  for (let t = 0; t < prices.length; t++) { if (t < lookback + 1) continue; const w = r.slice(t - lookback, t); pos[t] = cycleSlope(w, dominantCycle(w, bins).k) > 0 ? 1 : 0 } // window r[t−L .. t−1], past only
  return pos
}
// Strategy 4 — regime-switch (markov vol-regime gate over the trend base; Hamilton 1989).
export function regimeLabels(returns: readonly number[], volW: number): number[] {
  const labels = new Array(returns.length).fill(-1)
  for (let b = 1; b < returns.length; b++) { const start = b - volW; if (start < 1) continue; let s = 0; for (let i = start; i <= b - 1; i++) s += Math.abs(returns[i]); labels[b] = Math.abs(returns[b]) > s / volW ? 1 : 0 }
  return labels
}
export function estimateRegimeMatrix(labels: readonly number[], lo: number, hi: number): number[][] {
  const c = [[1, 1], [1, 1]]; let prev = -1
  for (let i = lo; i <= hi; i++) { const cur = labels[i]; if (cur < 0) { prev = -1; continue } if (prev >= 0) c[prev][cur]++; prev = cur }
  return c.map((row) => { const tot = row[0] + row[1]; return [row[0] / tot, row[1] / tot] })
}
export function regimeSwitchPositions(prices: readonly number[], opts: { shortW: number; longW: number; volW: number }): number[] {
  const { shortW, longW, volW } = opts; const returns = simpleReturns(prices); const labels = regimeLabels(returns, volW)
  const base = crossoverPositions(prices, shortW, longW, -1); const n = prices.length; const pos = new Array(n).fill(0)
  const firstLabel = labels.findIndex((x) => x >= 0)
  for (let t = 0; t < n; t++) { const last = t - 1; if (firstLabel < 0 || last < firstLabel + 1 || labels[last] < 0) continue; const P = estimateRegimeMatrix(labels, firstLabel, last); const cur = labels[last] === 0 ? [1, 0] : [0, 1]; pos[t] = markovStep(P, cur)[0] >= 0.5 ? base[t] : 0 }
  return pos // trade the trend only when the next regime is predicted calm (low-vol)
}
// Strategy 5 — vol-target sizing (inverse-vol size × trend filter; a risk method, NOT alpha).
export function realizedVol(returns: readonly number[], end: number, window: number, annualize = Math.sqrt(252)): number {
  const start = end - window + 1; if (start < 0 || end < 0 || end >= returns.length) return 0
  const w = returns.slice(start, end + 1); const n = w.length; if (n < 2) return 0
  const m = w.reduce((a, b) => a + b, 0) / n; return Math.sqrt(w.reduce((a, b) => a + (b - m) ** 2, 0) / (n - 1)) * annualize
}
export function inverseVolSize(realizedVolAnnual: number, targetVolAnnual: number, leverageCap: number, volFloor: number): number {
  if (realizedVolAnnual <= 0) return 0; return Math.max(0, Math.min(leverageCap, targetVolAnnual / Math.max(realizedVolAnnual, volFloor)))
}
export function volTargetPositions(prices: readonly number[], params: { window: number; targetVolAnnual: number; leverageCap: number; volFloor: number }): number[] {
  const { window: W, targetVolAnnual, leverageCap, volFloor } = params; const r = simpleReturns(prices); const pos = new Array(prices.length).fill(0)
  for (let t = 1; t < prices.length; t++) { if (t < W + 1) continue; const rv = realizedVol(r, t - 1, W); const up = prices[t - 1] > prices[t - 1 - W] ? 1 : 0; pos[t] = up * inverseVolSize(rv, targetVolAnnual, leverageCap, volFloor) }
  return pos // size from realized vol over r[t−W..t−1]; trend filter prices[t−1] vs prices[t−1−W] — past only
}
// Content-address a backtest run → one reproducible receipt (the shared experiment).
export function tradingReceipt(variant: string, params: Record<string, number | string>, metrics: { totalReturn: number; sharpe: number; maxDrawdown: number; hitRate: number }): string {
  const leaves = [toUuid(`variant:${variant}`), toUuid(`params:${JSON.stringify(params)}`)]
  for (const [k, v] of Object.entries(metrics)) leaves.push(toUuid(`metric:${k}:${roundTo(v, 6)}`))
  return merkleFold(leaves)
}

// ── Realtime: test all on LIVE data (public APIs + device sensors), each capture a content-addressed snapshot ──
// The deterministic sims/strategies are MODELS; here they consume REAL data. Ingestion happens at the EDGE (the
// browser component / a probe — fetch + device sensors); these PURE functions normalize a captured sample and
// content-address it, so a live run stays a reproducible SHARED EXPERIMENT (reproducible over the snapshot).
// capturedAt is passed IN (no wall-clock in src). Per-source honesty + availability live in the fold's boundary.

// Content-address a real data capture: fold source + supplied capture-time + rounded samples into one receipt.
export function liveCapture(source: string, samples: readonly number[], capturedAt = 0): { source: string; n: number; capturedAt: number; root: string; uuid: string } {
  const root = merkleFold([`src:${source}`, `at:${capturedAt}`, ...samples.map((v, i) => `${i}:${roundTo(v, 6)}`)])
  return { source, n: samples.length, capturedAt, root, uuid: toUuid(`${source}|${capturedAt}|${root}`) }
}
// Magnetometer (device, µT) → the REAL proton Larmor frequency for that field (the MRI primitive on live data).
export function larmorFromMicrotesla(microTesla: number): number { return larmorFrequency(microTesla * 1e-6) }
// Device motion (m/s) → the radar Doppler shift at a carrier (the radar primitive on live device velocity).
export function dopplerFromMotion(velocityMs: number, carrierHz = 10e9): number { return dopplerShift(velocityMs, carrierHz) }
// A real sample series (audio FFT bins, USGS magnitudes, any signal) → its magnitude spectrum + dominant cycle.
export function spectrumFromSamples(samples: readonly number[], bins = 32): { spectrum: number[]; dominant: { k: number; period: number } } {
  return { spectrum: powerSpectrum(samples, bins), dominant: dominantCycle(samples, bins) }
}
// Real price series (e.g. Coinbase candles) → a strategy backtest vs buy-and-hold (the trading model on live data).
export function backtestRealPrices(prices: readonly number[], strategy: 'momentum' | 'mean-reversion' | 'spectral' | 'regime' | 'vol-target' = 'momentum', costBps = 5): { strategy: string; n: number; result: BacktestResult; benchmark: BacktestResult } {
  const positions =
    strategy === 'mean-reversion' ? meanReversionPositions(prices, 20, 1)
    : strategy === 'spectral' ? spectralCyclePositions(prices, Math.min(32, Math.floor(prices.length / 2)), 32)
    : strategy === 'regime' ? regimeSwitchPositions(prices, { shortW: 8, longW: 21, volW: 20 })
    : strategy === 'vol-target' ? volTargetPositions(prices, { window: 20, targetVolAnnual: 0.15, leverageCap: 3, volFloor: 0.05 })
    : crossoverPositions(prices, 8, 21, -1)
  return { strategy, n: prices.length, result: backtest(prices, positions, costBps), benchmark: buyAndHold(prices, costBps) }
}
// The catalogue of realtime sources — each tagged device|api, no-key, what model it feeds, and the honest note.
export function realtimeSources() {
  return [
    { id: 'web-audio-fft', kind: 'device', name: 'Web Audio API (microphone FFT)', key: 'permission', feeds: 'spectrum', note: 'a REAL frequency spectrum — but of SOUND (a pressure wave), NOT EM; tests the spectral pipeline, not EM radiation' },
    { id: 'device-motion', kind: 'device', name: 'DeviceMotion (accelerometer)', key: 'permission', feeds: 'radar Doppler', note: 'real device velocity into the radar Doppler equation Δf=2vf/c — not real radar' },
    { id: 'magnetometer', kind: 'device', name: 'Magnetometer (µT)', key: 'permission (limited support)', feeds: 'MRI Larmor', note: 'a REAL magnetic field → the real proton Larmor frequency (~50 µT ⇒ ~2.1 kHz); no actual NMR' },
    { id: 'geolocation', kind: 'device', name: 'Geolocation', key: 'permission', feeds: 'experiment tag', note: 'real position; tags or seeds an experiment' },
    { id: 'coinbase', kind: 'api', name: 'Coinbase spot/candles (BTC-USD)', key: 'none', feeds: 'trading backtest', note: 'real prices → the strategy backtest; still backtest≠live, limited public history' },
    { id: 'usgs', kind: 'api', name: 'USGS earthquake feed', key: 'none', feeds: 'spectrum (seismic)', note: 'real sub-Hz seismic magnitudes/times → spectral analysis' },
    { id: 'open-meteo', kind: 'api', name: 'Open-Meteo forecast', key: 'none', feeds: 'time series', note: 'real weather series; a generic real signal to fold' },
    { id: 'fcc', kind: 'api', name: 'FCC spectrum dashboard', key: 'none', feeds: 'EM band reference', note: 'real radio band allocations 225 MHz–3.7 GHz' },
  ].map((s) => ({ ...s, receipt: toUuid(`rt-source:${s.id}:${s.kind}`) }))
}
