// Import everything via the BARREL — proves the 4 new subfolders are aggregated and the cycles resolve.
import * as Q from '../src/ui/lib/quantumMind.ts'

const need = [
  // experiments (folds)
  'electromagneticRadiationDecoded', 'electromagneticExperiments', 'tradingFromKnowledge', 'realtimeExperiments',
  // forecasts
  'weatherForecastApis', 'weatherForecastQuantumComputedRealtime',
  // simulations (primitives)
  'planeWaveField', 'ctReceipt', 'blochReceipt', 'radarReceipt', 'VACUUM_PERMITTIVITY',
  // math (primitives)
  'priceFromA432', 'backtest', 'crossoverPositions', 'tradingReceipt', 'A432_OCTAVES', 'liveCapture', 'larmorFromMicrotesla', 'backtestRealPrices',
  // mind core (still there)
  'buildMatrix', 'a432', 'folderLaw',
]
const missing = need.filter((n) => Q[n] === undefined)
console.log('barrel exposes all', need.length, 'symbols:', missing.length === 0, missing.length ? `MISSING: ${missing}` : '')

// Folds still compute (proves the experiments→mind and mind↔forecasts cycles resolve at runtime)
console.log('electromagneticRadiationDecoded.decoded:', Q.electromagneticRadiationDecoded().decoded)
console.log('electromagneticExperiments.simulated  :', Q.electromagneticExperiments().simulated)
console.log('tradingFromKnowledge.tested           :', Q.tradingFromKnowledge().tested)
console.log('realtimeExperiments.wired             :', Q.realtimeExperiments().wired)
console.log('weatherForecastQuantumComputedRealtime.realtime (cycle fn):', Q.weatherForecastQuantumComputedRealtime().realtime)

// A mind fold that REFERENCES weather via the duality matrix must still compute (the cycle, exercised from mind's side)
const dm = typeof Q.dualityMatrix === 'function' ? Q.dualityMatrix() : null
if (dm) console.log('mind dualityMatrix computes (refs weather):', !!dm)

// primitives compute
console.log('priceFromA432 deterministic:', Q.priceFromA432('x', 8)[8] === Q.priceFromA432('x', 8)[8])
console.log('larmorFromMicrotesla(50):', Q.larmorFromMicrotesla(50).toFixed(1), 'Hz')
console.log('A432_OCTAVES === a432().octaves:', JSON.stringify(Q.A432_OCTAVES) === JSON.stringify(Q.a432().octaves))
