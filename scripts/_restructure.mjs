import { readFileSync, writeFileSync } from 'node:fs'
const MIND = 'src/quantum/mind/index.ts'
const ZERO = 'src/0/index.ts'
const r = (p) => readFileSync(p, 'utf8')
const w = (p, s) => writeFileSync(p, s)

// Extract [startAnchor .. endAnchor) by line-prefix match. Returns { block, rest }.
function cut(text, startAnchor, endAnchor) {
  const lines = text.split('\n')
  const s = lines.findIndex((l) => l.startsWith(startAnchor))
  if (s < 0) throw new Error(`start not found: ${startAnchor}`)
  const e = lines.findIndex((l, i) => i > s && l.startsWith(endAnchor))
  if (e < 0) throw new Error(`end not found: ${endAnchor}`)
  const block = lines.slice(s, e).join('\n').replace(/\n+$/, '') + '\n'
  const rest = [...lines.slice(0, s), ...lines.slice(e)].join('\n')
  return { block, rest }
}

let mind = r(MIND)
let zero = r(ZERO)

// 1) src/0 → simulations: the EM simulator block
const sims = cut(zero, '// ── EM simulators:', '// ── Network primitives')
zero = sims.rest

// 2) mind blocks (extract each from the mutating text by unique anchor)
const emFolds = cut(mind, '// ElectroMagnetic radiation decoded across the spectrum', '// ── Trading from the same knowledge'); mind = emFolds.rest
const tradingPrims = cut(mind, '// ── Trading from the same knowledge', '// The no-gaps fold: run all five strategies'); mind = tradingPrims.rest
const tradingFold = cut(mind, '// The no-gaps fold: run all five strategies', '// ── Realtime: test all on LIVE data'); mind = tradingFold.rest
const realtimeAdapters = cut(mind, '// ── Realtime: test all on LIVE data', '// The no-gaps fold: prove every adapter'); mind = realtimeAdapters.rest
const realtimeFold = cut(mind, '// The no-gaps fold: prove every adapter', '// Weather forecast computed in realtime'); mind = realtimeFold.rest
const weather = cut(mind, '// Weather forecast computed in realtime', '// Ancient Bulgarian heritage decoded in waves and sealed'); mind = weather.rest

// 3) mind line reconciliation: drop wave-19 lines (reference now-moved src/0 sims), add forecasts back-import
mind = mind.split('\n').filter((l) =>
  !l.startsWith('import { planeWaveField, planeWaveSpeed, planeWaveIntensity, planeWaveReceipt, beamProfile, beerLambert') &&
  !l.startsWith('export { VACUUM_PERMITTIVITY, waveNumber, angularFrequency, planeWaveSpeed') &&
  !l.startsWith('export type { RadarScene, RadarDetection } from') &&
  !l.startsWith('// EM SIMULATORS (src/0):') &&
  !l.startsWith('// plane-wave field · X-ray Beer–Lambert+CT') &&
  !l.startsWith('// powerSpectrum: the real-DFT magnitude detector') &&
  !l.startsWith('import { powerSpectrum } from')
).join('\n')
// add the forecasts back-import right after the EM-primitives import (wave 18 line)
mind = mind.replace(
  /(import \{ SPEED_OF_LIGHT, PLANCK, ELECTRONVOLT, PROTON_GYROMAGNETIC, IONIZING_EV.*?from '\.\.\/\.\.\/0\/index\.ts'\n)/,
  `$1// weatherForecastQuantumComputedRealtime lives in ../forecasts now; mind's duality matrix references it (ESM-safe fn cycle).\nimport { weatherForecastQuantumComputedRealtime } from '../forecasts/index.ts'\n`,
)

// 4) compose subfolder files
const SIM = `// src/quantum/simulations — the deterministic EM simulators (plane wave · X-ray/CT · MRI Bloch · FMCW radar),
// moved out of the src/0 origin into their own home. Classical teaching models; each run a content-addressed
// shared experiment. They compose the foundational EM constants/conversions from src/0; the FOLDS that RUN them
// live in src/quantum/experiments. (folderLaw: one word, one index — under the 2584-line compression limit.)
import { SPEED_OF_LIGHT, PLANCK, ELECTRONVOLT, wavelengthOf, photonEnergyEv, isIonizing, larmorFrequency, radarRange, prng, merkleFold, toUuid, roundTo } from '../../0/index.ts'

${sims.block}`

const MATH = `// src/quantum/math — the quantitative math: the a432-ignited synthetic price engine, the five trading-strategy
// signal functions, the backtest, and the realtime data adapters that feed the models live captures. Pure and
// deterministic, composing only src/0 primitives. The FOLDS that run them as shared experiments live in
// src/quantum/experiments. (folderLaw: one word, one index — under the 2584-line compression limit.)
import { toUuid, prng, seedFromText, roundTo, merkleFold, powerSpectrum, markovStep, larmorFrequency, dopplerShift } from '../../0/index.ts'

${tradingPrims.block.replace('const A432_OCTAVES =', 'export const A432_OCTAVES =')}
${realtimeAdapters.block}`

const EXP = `// src/quantum/experiments — the shared-experiment FOLDS: the decoded EM spectrum and the EM simulators run as
// experiments, the a432-ignited trading strategies, and the realtime live-data tests. Each composes the
// primitives (src/0, ../simulations, ../math) with the mind core (buildMatrix, a432, the merkaba decode); each
// run is content-addressed. mind does not import these (they are leaves) — the barrel aggregates them.
import { buildMatrix, a432, knowledgeRevealedByMerkabaFold, publicFrequencyApisDecoded, type MindMatrix } from '../mind/index.ts'
import { toUuid, merkleFold, isUuid, roundTo, SPEED_OF_LIGHT, IONIZING_EV, larmorFrequency, radarRange, dopplerShift, photonEnergyEv, isIonizing, wavelengthOf } from '../../0/index.ts'
import { planeWaveReceipt, planeWaveField, planeWaveIntensity, planeWaveSpeed, beamProfile, beerLambert, backProjectAxis, ctReceipt, blochStep, fid, t1Recovery, blochReceipt, radarReceipt, radarVelocity } from '../simulations/index.ts'
import { priceFromA432, backtest, buyAndHold, crossoverPositions, meanReversionPositions, spectralCyclePositions, regimeSwitchPositions, volTargetPositions, tradingReceipt, A432_OCTAVES, liveCapture, larmorFromMicrotesla, dopplerFromMotion, spectrumFromSamples, backtestRealPrices, realtimeSources } from '../math/index.ts'

${emFolds.block}
${tradingFold.block}
${realtimeFold.block}`

const FORE = `// src/quantum/forecasts — the realtime forecast feeds (weather), folded as a content-addressed realtime stream.
// weatherForecastQuantumComputedRealtime is referenced by mind's duality matrix, so mind imports it back (an
// ESM-safe function-binding cycle). (folderLaw: one word, one index — under the 2584-line compression limit.)
import { buildMatrix, knowledgeRevealedByMerkabaFold, publicFrequencyApisDecoded, type MindMatrix } from '../mind/index.ts'
import { toUuid, merkleFold, isUuid } from '../../0/index.ts'

${weather.block}`

w('src/quantum/simulations/index.ts', SIM)
w('src/quantum/math/index.ts', MATH)
w('src/quantum/experiments/index.ts', EXP)
w('src/quantum/forecasts/index.ts', FORE)
w(MIND, mind)
w(ZERO, zero)

// 5) the barrel: aggregate the four new subfolders beside mind
const BARREL = 'src/ui/lib/quantumMind.ts'
let barrel = r(BARREL)
if (!barrel.includes("simulations/index.ts")) {
  barrel = barrel.replace(
    "export * from '../../../src/quantum/mind/index.ts'\n",
    "export * from '../../../src/quantum/mind/index.ts'\n" +
    "export * from '../../../src/quantum/simulations/index.ts' // EM simulators (moved out of mind/src0)\n" +
    "export * from '../../../src/quantum/math/index.ts' // trading engine+signals + realtime adapters\n" +
    "export * from '../../../src/quantum/experiments/index.ts' // the shared-experiment folds\n" +
    "export * from '../../../src/quantum/forecasts/index.ts' // weather realtime feeds\n",
  )
  w(BARREL, barrel)
}

console.log('restructure done. mind lines:', mind.split('\n').length, '| src/0 lines:', zero.split('\n').length)
console.log('simulations:', SIM.split('\n').length, 'math:', MATH.split('\n').length, 'experiments:', EXP.split('\n').length, 'forecasts:', FORE.split('\n').length)
