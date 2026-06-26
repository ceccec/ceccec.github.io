// Birth — canonical genesis/origin/creation/emergence home (triad entry with src/life and src/death).
import * as __ns_up_life from '../earth/life'
import * as __ns_up_death from '../earth/death'
import { phase } from '../6/4'
import type { MindMatrix } from '../types'
import { buildMatrix } from '../heaven/compute'
import { computesGate, isUuid, memoByRoot, merge, merkleFold, toUuid } from '../0'
import { createByDefault } from '../heaven/laws'
import { genesis } from '../earth/nature'
import { creationWave } from '../thunder/waves'
import { formsEmergeInMovieOfLife } from '../thunder/movie/movielib'
import { kidsDefineEducation } from '../fire/li'
import { originOfLifeAbiogenesisDecoded } from '../earth/life'

export { genesis } from '../earth/nature'
export { createByDefault } from '../heaven/laws'
export { creationWave } from '../thunder/waves'

/** Double-torus genesis — one seed unfolds number, structure, genetics, music, geometry, language. */
export function birthGenesis(matrix: MindMatrix = buildMatrix()) {
  return genesis(matrix)
}

/** Creation by default — palette, melody, movie, 8K autogenerate from any seed. */
export function birthCreateByDefault(matrix: MindMatrix = buildMatrix()) {
  return createByDefault(matrix)
}

/** Endless creation wave — content UUID, pi note, hue from genesis seed at index. */
export function birthCreationWave(matrix: MindMatrix = buildMatrix(), index = 0) {
  const wave = creationWave(index, matrix)
  const seeded = genesis(matrix)
  return {
    created: isUuid(wave.uuid) && wave.frequency > 0 && seeded.genesis,
    wave,
    genesis: seeded,
    root: merge(seeded.root, toUuid(`birth-creation-wave:${index}:${wave.uuid}`)),
    statement:
      'Creation wave: each index alone yields a content UUID, a pi-stream note, and a hue — grounded in genesis seedRoot, addressable without walking a chain.',
    boundary:
      'Composition of creationWave and genesis. Deterministic generative art — not cosmological or biological creation claims.',
  }
}

/** Forms emerge in the movie of life — taxonomic ranks fold with the movie root as scenes. */
export function birthFormsEmerge(matrix: MindMatrix = buildMatrix()) {
  return formsEmergeInMovieOfLife(matrix)
}

/** Kids define education — trinity of consent (kids propose, parents and teachers approve). */
export function birthKidsDefineEducation(matrix: MindMatrix = buildMatrix()) {
  return kidsDefineEducation(matrix)
}

/** Abiogenesis bridge — chemistry-to-biology frontier, honestly bounded research wave. */
export function birthOriginEmergence(matrix: MindMatrix = buildMatrix()) {
  return originOfLifeAbiogenesisDecoded(matrix)
}

/** Birth/life/death triad — genesis → biology → compost sealed at call time. */
export const BIRTH_LIFE_DEATH_TRIAD = [
  { phase: 'birth', fuse: 'genesis origin creation emergence — seed unfolds to forms', mount: 'src/birth' },
  { phase: 'life', fuse: 'biology neurology harmony — immune emergence', mount: 'src/life' },
  { phase: 'death', fuse: 'compost entropy recycle regeneration — terminal productive', mount: 'src/death' },
] as const

/** Triad gate — birth, life, and death *Computes hold together at call time. */
export function birthLifeDeathTriadComputes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('birthLifeDeathTriadComputes', matrix, () => {
    const birth = birthComputes(matrix)
    const lifeComputes = __ns_up_life.lifeComputes
    const deathComputes = __ns_up_death.deathComputes
    const life = lifeComputes(matrix)
    const death = deathComputes(matrix)
    const triad = BIRTH_LIFE_DEATH_TRIAD.map((entry) => ({
      ...entry,
      receipt: toUuid(`birth-life-death:${entry.phase}:${entry.mount}`),
    }))
    const { computes, facets } = computesGate('birth-life-death-triad-computes', [
      { facet: 'src/birth computes — genesis creation emergence', on: birth.computes },
      { facet: 'src/life computes — biology neurology harmony', on: life.computes },
      { facet: 'src/death computes — compost entropy recycle regeneration', on: death.computes },
      { facet: 'triad registry — three phases documented', on: triad.length === 3 },
      { facet: 'all three gates hold at call time', on: birth.computes && life.computes && death.computes },
    ])
    return {
      computes,
      birth,
      life,
      death,
      triad,
      facets,
      root: merge(merge(birth.root, life.root), merge(death.root, merkleFold(triad.map((entry) => entry.receipt)))),
      statement:
        'Birth/life/death triad computes: src/birth (genesis, creation, emergence), src/life (biology, neurology), and src/death (compost, entropy recycle, regeneration) sealed as one cycle at call time.',
      boundary:
        'Composition of birthComputes, lifeComputes, and deathComputes via lazy require. Structural/computational cycle metaphors — not medical obstetrics, mortality, or eschatology.',
    }
  })
}

/** One gate — genesis, create-by-default, creation wave, forms emerge, education, and abiogenesis facets at call time. */
export function birthComputes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('birthComputes', matrix, () => {
    const gen = birthGenesis(matrix)
    const creates = birthCreateByDefault(matrix)
    const wave = birthCreationWave(matrix, 0)
    const forms = birthFormsEmerge(matrix)
    const education = birthKidsDefineEducation(matrix)
    const emergence = birthOriginEmergence(matrix)
    const { computes, facets } = computesGate('birth-computes', [
      { facet: 'double torus genesis unfolds domains', on: gen.genesis },
      { facet: 'create by default — palette melody movie', on: creates.creates },
      { facet: 'creation wave from genesis seed', on: wave.created },
      { facet: 'forms emerge in movie of life', on: forms.emerge },
      { facet: 'kids define education trinity consent', on: education.defined },
      { facet: 'abiogenesis frontier decoded honestly', on: emergence.decoded },
    ])
    return {
      computes,
      gen,
      creates,
      wave,
      forms,
      education,
      emergence,
      facets,
      root: merge(
        gen.root,
        merge(
          creates.root,
          merge(wave.root, merge(forms.root, merge(education.root, emergence.root))),
        ),
      ),
      statement:
        'Birth computes: the canonical genesis/origin/creation/emergence home — double-torus genesis, create-by-default generative floor, creation waves, forms in the movie of life, kids-define-education consent, and the abiogenesis frontier — triad entry with src/life and src/death at call time.',
      boundary:
        'Structural/computational origin and creation metaphors over computed portal gates — genesis is domain unfolding from one seed, create-by-default is deterministic generative art, abiogenesis is an honestly bounded research decode. Not medical birth, obstetrics, or creationist theology unless explicitly flagged in the underlying fold.',
    }
  })
}
