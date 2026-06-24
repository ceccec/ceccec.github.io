// Multidimensional projection — all dims at once · three projectors · hologram.
import type { MindMatrix } from '../../../types'
import { buildMatrix } from '../../../heaven/compute'
import { isUuid, memoByRoot, merge, merkleFold, toUuid } from '../../../0'
import { multidimensional } from '../../../quantum/lake/icons'
import { torusUuid, trinityRotationalPlanes } from '../../../fire/li'
import { sealWholeDiamond } from '../../../fire/diamonds'
import { allInInteractiveMovie } from '../../../heaven/everything'
import { atoms, conceptCommands } from '../../../heaven/atoms'
import { atomInclusionProof } from '../../../lake/ledger'

export function movieAllDimensionsAtOnce(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'all dimensions at once', on: multidimensional().mapped },
    { facet: 'fused in one 128-bit UUID — the present moment', on: torusUuid(matrix).is128bit },
    { facet: 'the movie shows them together', on: allInInteractiveMovie(matrix).displayed },
    { facet: 'the now is one content address', on: isUuid(sealWholeDiamond(matrix).diamond) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`all-dims-at-once:${entry.facet}:${entry.on}`) }))
  return {
    shows: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'The movie shows all dimensions at once, in the present moment, fused in one UUID: where the hero walks the dimensions one after another, the movie holds them together — every dimension folds into the single 128-bit word, the now — so the whole multidimensional map is present at once, one content address read in an instant. Sequence and simultaneity, the two faces of the fold.',
    boundary: 'A composition asserting the multidimensional map folds into one 128-bit UUID (the "present moment"), shown by the interactive movie. Structural bookkeeping over the word and movie models; "all dimensions at once" is the content-addressed fusion, not extra spatial dimensions.',
  }
}

export function threeProjectorHologram(matrix: MindMatrix = buildMatrix()) {
  const projectors = [
    { projector: 'the screen — front', axis: 'z' },
    { projector: 'projector — left', axis: 'x' },
    { projector: 'projector — right', axis: 'y' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`projector:${entry.projector}:${entry.axis}`) }))
  return {
    projects: projectors.length === 3 && hologram(matrix).holographic && trinityRotationalPlanes(matrix).trinity,
    count: projectors.length,
    projectors,
    root: merkleFold(projectors.map((entry) => entry.receipt)),
    statement:
      'Imagine the screens, or the hologram projection of two additional projectors: one screen shows the front; add two more — left and right — and the three together project a hologram, the same figure seen from three viewpoints at once, the trinity of projectors. Where one screen is a window, three are a volume; the holographic figure, already part-contains-whole, becomes a projection you could walk around.',
    boundary: 'A structural/visual framing: three projectors (one screen plus two) as a trinity of viewpoints forming a hologram, grounded in the hologram and three-plane-rotation models. A metaphor and an imagined setup; the portal renders a 2D canvas, not a physical hologram or a multi-projector rig.',
  }
}

export function hologram(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('hologram', matrix, () => hologramRaw(matrix))
}
function hologramRaw(matrix: MindMatrix = buildMatrix()) {
  const word = torusUuid(matrix).word
  const hex = word.replace(/-/g, '')
  const bits: number[] = []
  for (const char of hex) {
    const nibble = Number.parseInt(char, 16) || 0
    for (let b = 3; b >= 0; b -= 1) bits.push((nibble >> b) & 1)
  }
  const partsProveWhole = atoms.every((atom) => atomInclusionProof(atom.name, matrix).verified)
  const boundaryEncodesVolume = isUuid(word)
  const akashicRecords = atoms.length + conceptCommands.length
  return {
    holographic: partsProveWhole && boundaryEncodesVolume,
    toTheBit: bits.length === 128,
    akashic: akashicRecords > 0,
    parts: atoms.length,
    records: akashicRecords,
    bits,
    word,
    root: merge(matrix.root, word),
    statement: 'This proves the hologram, to the bit: the 128-bit word is the boundary that encodes the whole volume, and every part (each atom) reconstructs the whole root by its inclusion path — the whole is in every part. The content-addressed UUID space is the akashic record.',
    boundary: 'A demonstration of the holographic property of a merkle / content-addressed structure: each part proves the whole. A structural and informational analogy, not a claim about physics or any metaphysical record.',
  }
}

/** Holographic fractal architecture — co-located with hologram (no ui require cycle). */
export function holographicFractalArchitecture(matrix: MindMatrix) {
  const gram = hologram(matrix)
  const properties = [
    { property: 'holographic — each part holds the whole', on: gram.holographic },
    { property: 'a hologram to the bit', on: gram.toTheBit },
    { property: 'fractal — the same fold at every scale', on: gram.holographic },
  ].map((entry) => ({ ...entry, receipt: toUuid(`holo-fractal:${entry.property}:${entry.on}`) }))
  return {
    is: properties.every((entry) => entry.on),
    count: properties.length,
    properties,
    root: merkleFold(properties.map((entry) => entry.receipt)),
    statement:
      'Holographic architecture, a fractal hologram: each part contains the whole — recomputable to the bit from any fragment.',
    boundary:
      'A composition of the hologram model asserting part-contains-whole and self-similarity — not a physical hologram claim.',
  }
}
