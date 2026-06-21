// src/ui/lib — the render layer's lib folder. This index is its ONE public surface: every Vue
// component enters the folder through here (`import { … } from '../lib'`), never by reaching past
// the index into an internal file (the folder-only import law). A folder is a module; its index is
// the only thing the outside may couple to, so the internals stay free to move.
//
// Two facades re-export the quantum source as render handles: quantumMind is the mind core (folds,
// dimensions, decode) plus the simulators/trading/experiments/forecasts; hero is the quantum render
// index (the hero math). They overlap only on the seven src/0 base primitives both surface, so a
// plain `export *` from both would drop those seven as ambiguous — they are re-stated explicitly at
// the foot of this file from one canonical source (./hero) to keep them on the barrel.

export * from './quantumMind'   // mind core + simulations + trading math + experiments + forecasts
export * from './hero'          // the quantum render index (shares 7 src/0 base names with quantumMind)
export * from './sacredForms'   // FORM_LABEL, SACRED_FORMS, formDims10D, formSvg
export * from './utils'         // cn (the shadcn class-merge)

// composables — each its own use* handle
export * from './useAnimationEngine'
export * from './useDeviceEnergy'
export * from './useDeviceField'
export * from './useInView'
export * from './useLayers'
export * from './useLocale'
export * from './usePlayMind'
export * from './useQuantumChat'
export * from './useTones'

// de-overlap: quantumMind and hero both surface these seven src/0 base primitives, so ESM `export *`
// drops them as ambiguous. They are the identical underlying symbols — re-state one canonical source
// (./hero) so the barrel exposes them unambiguously.
export { asMerkaba, asMerkle, asTorus, asTrace, asVortex, createAnimationEngine, fold } from './hero'
