// src/render/ui/lib — the render layer's lib folder. This index is its ONE public surface: every Vue
// component enters the folder through here (`import { … } from './'`), never by reaching past
// the index into an internal file (the folder-only import law). A folder is a module; its index is
// the only thing the outside may couple to, so the internals stay free to move.
//
// The quantum facades (mind core + hero render index) are inlined here — no intermediate noise leaves.
// They overlap on seven src/0 base primitives; those are re-stated explicitly at the foot from one
// canonical source (../../../quantum) so the barrel stays unambiguous.

export * from '../../../quantum/heaven/mind' // mind core (folds, dimensions, decode)
export * from '../../../quantum/fire/simulations' // EM simulators
export * from '../../../quantum/thunder/math' // trading engine + realtime adapters
export * from '../../../quantum/fire/experiments' // shared-experiment folds
export * from '../../../quantum/fire/forecasts' // weather realtime feeds
export * from '../../../quantum' // hero render index (the fold cascade + presentations)

export * from './sacredForms' // FORM_LABEL, SACRED_FORMS, formDims10D, formSvg
export * from './utils' // cn (the shadcn class-merge)

export * from './composables'

// de-overlap: mind facade and hero both surface these seven src/0 base primitives
export { asMerkaba, asMerkle, asTorus, asTrace, asVortex, createAnimationEngine, fold } from '../../../quantum'
