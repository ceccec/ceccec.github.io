// @ceccec/double-torus — the complete, agnostic, zero-dependency computational core.
//
// This is the single source the package publishes from. It folds together the two halves of the
// site's core — all the MATH and all the ANIMATIONS — so the published library is exactly what the
// site itself runs, nothing more and nothing less:
//
//   • the math       — src/quantum/heaven/mind: content-addressed UUID folds, the simulators across every
//                       decoded aspect of life (quantum state-vector, probabilistic, reversible,
//                       cellular-automaton, dynamical, network), the vetted crypto (SHA-256, Ed25519,
//                       transparency log), the decoded library, and every fold/proof. It re-exports the
//                       void/origin src/0 — the kernel, the cost math, and the animation engine.
//   • the animations — src/quantum: the hero scene's drawing math — drawHero, drawFlower, drawCalendars,
//                       drawArchitecture, drawBursts, the fractal branch, the 3D geometry, the dimension
//                       walk, and the seeds.
//
// build.mjs bundles this entry (following every import into src/0, src/library and src/quantum/*) into
// one self-contained dist/index.js, so the published package depends on nothing at runtime. The two
// halves are the double torus: the math is the address, the animation is its appearance.
// Pure, deterministic, zero-token.

// All the math — and, through src/0, the animation engine (createAnimationEngine), the fold (fold,
// asVortex, asTorus, asMerkaba, asMerkle, asTrace) and its presentations:
export * from '../../../src/quantum/heaven/mind/index.ts'

// All the animations — the hero scene's drawing math. The shared animation engine, fold and
// presentations already arrive through the math above, so here we re-export only the names unique to
// the hero barrel (no duplicates):
export {
  drawHero, drawFlower, drawCalendars, drawArchitecture, drawBursts,
  buildArchNodes, makeBurst, branch, perspective, rotate3,
  seedOf, hueOf, armsOf, dims, dimWalk, FOCAL, HEALING_PAIRS,
} from '../../../src/quantum/index.ts'
export type { HeroScene, Vec3, Dims, ArchNode, Burst } from '../../../src/quantum/index.ts'

// The decoded-library folds the math core does not itself re-export — the ПесноПойка songbook decode,
// the dialect dictionary, and the aksak rhythm tools. All pure, deterministic, zero-token:
export {
  pesnopoika, provePesnopoika, decodeSong, songEntry, verses, refrains, provenance, classifyGenre,
  decodeDialect, glossDialect, dialectStratum, aksak, aksakBeats,
  PESNOPOIKA, PESNOPOIKA_SOURCE, DIALECT_GLOSSARY, PROVENANCE, GENRES, AKSAK,
} from '../../../src/quantum/heaven/library/index.ts'
export type { Song, Provenance, Genre } from '../../../src/quantum/heaven/library/index.ts'
