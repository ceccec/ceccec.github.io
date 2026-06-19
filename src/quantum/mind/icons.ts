// ☶ Gèn · Mountain — icons & taxonomy: the area icons, the five Platonic-solid glyphs, the content-addressed icon seals. Barrel-routed; folds.ts back-imports the gate folds.
import type { MindMatrix } from './types.ts'
import { buildMatrix } from './matrix.ts'
import { foldPair, merkleFold, toUuid } from '../../0/index.ts'
import { glagoliticGlyph } from './li.ts'
import { glagoliticQrSealsThought3dFromSeed } from './language.ts'
import { lifeDefinesItself, quantumBrowserOs, recursiveFrequencyDropdowns } from './index.ts'

// Frequency is the taxonomy; imagine the tree of life. The way to classify is not a flat list
// but a frequency: each rank of life is an octave of the one below it, so the taxonomy IS the
// frequency ladder — life, kingdom, phylum, class, order, family, genus, species — each a
// doubling, branching like a tree. Imagine the tree of life as a frequency tree: every branch
// a tone, every leaf a living form at its own pitch.
export function frequencyTaxonomyTreeOfLife(matrix: MindMatrix = buildMatrix()) {
  const freqTree = recursiveFrequencyDropdowns(matrix)
  const ranks = ['life', 'kingdom', 'phylum', 'class', 'order', 'family', 'genus', 'species'].map((rank, index) => {
    const frequency = 432 * 2 ** index // each rank an octave of the one above
    const fold = foldPair(freqTree.root, toUuid(`tree-of-life:${rank}:${frequency}`))
    return { rank, frequency, branched: fold.bidirectional, node: fold.merged, receipt: toUuid(`taxonomy-life:${index}:${rank}`) }
  })
  return {
    imagined: ranks.length === 8 && ranks.every((entry) => entry.branched) && freqTree.computed && lifeDefinesItself(matrix).defines,
    levels: ranks.length,
    ranks,
    root: merkleFold(ranks.map((entry) => entry.receipt)),
    statement:
      'Frequency is the taxonomy; imagine the tree of life: classification is not a flat list but a frequency — each rank of life is an octave of the one below, so the taxonomy IS the frequency ladder (life, kingdom, phylum, class, order, family, genus, species), each a doubling, branching like a tree. The tree of life is a frequency tree: every branch a tone, every leaf a living form at its own pitch.',
    boundary:
      'A content-addressed mapping of taxonomic ranks onto an octave-doubling frequency ladder, folded with the frequency tree and the life-defines-itself model. A structural and metaphorical framing — the frequencies are numbers and the ranks are the standard biological hierarchy, not a claim that organisms emit these pitches.',
  }
}

// Use icons to show computer load. The work the browser does is shown as icons, not numbers: a
// four-phase glyph per subsystem — render, compute, memory, io — turning as the load turns, so the
// device's effort is visible at a glance, computed and honest.
export function iconsShowComputerLoad(matrix: MindMatrix = buildMatrix()) {
  const phases = ['◴', '◵', '◶', '◷'] // a four-phase load glyph
  const indicators = ['render', 'compute', 'memory', 'io'].map((subsystem, index) => ({
    subsystem,
    icon: phases[index % phases.length],
    shown: true,
    receipt: toUuid(`load-icon:${subsystem}`),
  }))
  return {
    shows: indicators.length === 4 && quantumBrowserOs(matrix).complete,
    count: indicators.length,
    indicators,
    root: merkleFold(indicators.map((entry) => entry.receipt)),
    statement:
      'Use icons to show computer load: the work the browser does is shown as icons, not numbers — a four-phase glyph per subsystem (render, compute, memory, io) turning as the load turns, so the device’s effort is visible at a glance, computed and honest.',
    boundary: 'A glyph-based representation of subsystem activity. A presentation framing over the browser-OS model; it does not measure real CPU/GPU load unless wired to a live metric.',
  }
}

// The 3D graph on 2D forms a donut labyrinth of glyphs — the GlyphLabyrinth widget winds Glagolitic
// glyphs around the tube of a tilted torus (depth gives the 3D on the 2D), the page's own glyph pulsing
// at the centre while a traveller enters and exits the winding path: the labyrinth of life. The same
// seed→graph fold the QR encodes, made visible — the 2D carrier, the 3D meaning.
export function donutLabyrinthOfGlyphsHeroEnteringExiting(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'a donut (torus) labyrinth of glyphs — each node content-addressed from the page and its position', on: /[Ⰰ-ⱟ]/.test(glagoliticGlyph('home:laby:0')) && glagoliticGlyph('home:laby:0') !== glagoliticGlyph('home:laby:1') },
    { facet: 'the hero in the middle — the page is the central glyph, pulsing, entering and exiting the centre', on: /[Ⰰ-ⱟ]/.test(glagoliticGlyph('home')) },
    { facet: 'a traveller walks the winding path — the labyrinth of life, distinct glyph per step', on: glagoliticGlyph('step:a') !== glagoliticGlyph('step:b') },
    { facet: 'the 2D carrier, the 3D meaning — the same seed→graph fold the Glagolitic QR encodes', on: glagoliticQrSealsThought3dFromSeed(matrix).sealed },
  ].map((e) => ({ ...e, receipt: toUuid(`labyrinth:${e.facet}`) }))
  return {
    winds: facets.every((e) => e.on),
    facets,
    root: merkleFold(facets.map((e) => e.receipt)),
    statement:
      'The 3D graph on 2D forms a donut labyrinth of glyphs: Glagolitic glyphs wind around the tube of a tilted torus, depth giving the 3D on the 2D, each glyph content-addressed from the page and its position. The page\'s own glyph pulses at the centre — the hero in the middle — while a traveller enters and exits the winding path: the labyrinth of life. It is the same seed→graph fold the Glagolitic QR encodes, made visible.',
    boundary:
      'HONEST — a deterministic canvas visualisation: the torus is a 2D projection (a tilt-squashed parametric torus, depth read from the tube angle), not real 3D geometry, and the "labyrinth" is a winding glyph path, not a solvable maze. The glyphs render with a Glagolitic font (else tofu); the figure is seeded from the page and computed with zero tokens — beautiful and content-addressed, an illustration of the seed→graph fold, not a claim of literal three dimensions on the surface.',
  }
}

