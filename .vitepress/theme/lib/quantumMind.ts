// The agnostic core has moved to src/quantum/mind/index.ts — all logic now lives in src/, in the
// order-sensitive paired-folder form (quantum/mind). This file remains as a transparent re-export
// so VitePress, the components, and the scripts keep importing `../lib/quantumMind` unchanged: the
// path is the render-substrate handle, the source is in src/.
export * from '../../../src/quantum/mind/index.ts'
