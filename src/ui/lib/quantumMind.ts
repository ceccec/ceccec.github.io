// The agnostic core has moved to src/quantum/mind/index.ts — all logic now lives in src/, in the
// order-sensitive paired-folder form (quantum/mind). This file remains as a transparent re-export
// so VitePress, the components, and the scripts keep importing `../lib/quantumMind` unchanged: the
// path is the render-substrate handle, the source is in src/.
export * from '../../../src/quantum/mind/index.ts'
export * from '../../../src/quantum/simulations/index.ts' // EM simulators (moved out of mind/src0)
export * from '../../../src/quantum/math/index.ts' // trading engine+signals + realtime adapters
export * from '../../../src/quantum/experiments/index.ts' // the shared-experiment folds
export * from '../../../src/quantum/forecasts/index.ts' // weather realtime feeds
