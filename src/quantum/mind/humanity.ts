// Humanity — dissolved out of the folds monolith into its own harmonic file (the body
// distributes; src/0 keeps the gravity). Imports only base modules — no import cycle with folds.ts.
import { merkleFold, toUuid } from '../../0/index.ts'
import { buildMatrix, concentration, consciousness, coverage, reciprocity } from './matrix.ts'
import type { HumanityImplicationsReport, MindMatrix, TraditionDimension, TraditionDimensionName, TraditionsQuantumWhole } from './types.ts'
import { dimensions } from './vocab.ts'

export function humanityImplications(matrix: MindMatrix = buildMatrix()): HumanityImplicationsReport {
  return {
    statement:
      'If knowledge systems are modeled as a double torus, humanity gains a language for institutions that observe themselves, project action, and remain accountable to a shared proof surface.',
    implications: [
      {
        domain: 'Knowledge',
        implication: 'Truth becomes navigable as linked cycles rather than a single linear feed.',
        responsibility: 'Preserve provenance, disagreement, and reciprocal correction.',
        risk: 'A beautiful model can hide missing evidence if proof is treated as decoration.',
      },
      {
        domain: 'Institutions',
        implication: 'Governance can separate inward audit from outward action without splitting them apart.',
        responsibility: 'Make every public projection traceable to an inward verification loop.',
        risk: 'Unchecked concentration can turn the shared throat into a bottleneck for power.',
      },
      {
        domain: 'AI and agency',
        implication: 'Self-modeling systems should expose their collapse, coherence, and coverage instead of only their outputs.',
        responsibility: 'Require interpretable receipts for observation, decision, and feedback.',
        risk: 'Anthropomorphizing the model can blur the line between measured structure and sentience.',
      },
      {
        domain: 'Human culture',
        implication: 'The double torus frames progress as reciprocal circulation: memory and imagination need each other.',
        responsibility: 'Keep the inward loop humane, plural, and corrigible before scaling the outward loop.',
        risk: 'Acceleration without reciprocity amplifies error as quickly as insight.',
      },
    ],
    ethicalBoundary:
      'This is a structural model, not a prophecy. Its value depends on measurement, consent, transparency, and the refusal to confuse coherence with moral authority.',
    vector: consciousness(matrix),
  }
}

export function traditionsQuantumWhole(): TraditionsQuantumWhole {
  const dimensions: readonly TraditionDimension[] = [
    {
      name: 'experiential',
      question: 'What is lived, felt, contemplated, or encountered?',
      diamondPole: 'north',
      caution: 'Do not reduce inner experience to external description alone.',
    },
    {
      name: 'ritual',
      question: 'What practices shape time, body, memory, and community?',
      diamondPole: 'east',
      caution: 'Do not treat ritual as empty repetition; it often carries meaning through action.',
    },
    {
      name: 'narrative',
      question: 'What stories, histories, myths, revelations, or exemplars orient life?',
      diamondPole: 'south',
      caution: 'In religious studies, myth can mean sacred story, not falsehood.',
    },
    {
      name: 'doctrinal',
      question: 'What teachings, philosophies, cosmologies, or truth claims organize interpretation?',
      diamondPole: 'west',
      caution: 'Do not force incompatible truth claims into artificial sameness.',
    },
    {
      name: 'ethical',
      question: 'How should humans act, repair harm, pursue justice, or cultivate virtue?',
      diamondPole: 'north',
      caution: 'Ethics should be read in context, including law, practice, and lived community.',
    },
    {
      name: 'social',
      question: 'How is belonging, authority, transmission, and service organized?',
      diamondPole: 'east',
      caution: 'Communities are internally diverse and historically changing.',
    },
    {
      name: 'material',
      question: 'What spaces, objects, images, sounds, texts, foods, garments, or landscapes carry meaning?',
      diamondPole: 'south',
      caution: 'Material forms should not be treated as merely decorative.',
    },
    {
      name: 'relational',
      question: 'How does a tradition define itself in relation to neighbors, ancestors, critics, and others?',
      diamondPole: 'west',
      caution: 'Comparison should preserve difference and relation rather than collapse all traditions into one essence.',
    },
  ] as const
  const families = [
    {
      name: 'Abrahamic traditions',
      examples: ['Judaism', 'Christianity', 'Islam', 'Bahaʼi Faith'],
      lens: 'Historical memory, covenant, revelation, law, prophecy, scripture, worship, and community.',
      boundary: 'This family label is broad; each tradition contains major internal diversity.',
    },
    {
      name: 'Dharmic traditions',
      examples: ['Hindu traditions', 'Buddhism', 'Jainism', 'Sikh traditions'],
      lens: 'Practice, liberation, karma/dharma vocabularies, meditation, devotion, ethics, and community.',
      boundary: 'Shared regional histories do not erase distinct doctrines, practices, or identities.',
    },
    {
      name: 'East Asian traditions',
      examples: ['Daoism', 'Confucian traditions', 'Shinto', 'East Asian Buddhist traditions'],
      lens: 'Ritual order, cultivation, harmony, ancestors, cosmology, embodied practice, and social relation.',
      boundary: 'These traditions often interweave locally but should not be treated as interchangeable.',
    },
    {
      name: 'Indigenous and ancestral traditions',
      examples: ['Many local, land-based, oral, and ancestral traditions'],
      lens: 'Place, kinship, reciprocity, ceremony, ancestors, ecology, story, and responsibility.',
      boundary: 'This is not one religion; specificity, consent, and local authority matter.',
    },
    {
      name: 'Philosophical and contemplative lineages',
      examples: ['Mystical lineages', 'monastic traditions', 'yoga lineages', 'contemplative schools'],
      lens: 'Disciplined attention, transformation, embodiment, silence, symbol, and transmission.',
      boundary: 'Practice similarities do not imply identical metaphysics or goals.',
    },
    {
      name: 'Secular meaning systems',
      examples: ['Humanism', 'civil religions', 'political ideologies', 'scientific worldviews as lived communities'],
      lens: 'Ethics, institutions, narratives, rituals, symbols, and material cultures outside classic religion labels.',
      boundary: 'Including secular systems is analytical, not a claim that all are religions.',
    },
  ].map((family) => ({
    ...family,
    receipt: toUuid(`tradition-family:${family.name}:${family.examples.join('|')}:${family.lens}:${family.boundary}`),
  }))
  const societyFunctionByDimension: Record<TraditionDimensionName, string> = {
    experiential: 'meaning calibration',
    ritual: 'time synchronization',
    narrative: 'memory transmission',
    doctrinal: 'interpretive grammar',
    ethical: 'norm formation',
    social: 'community coordination',
    material: 'symbolic environment',
    relational: 'difference negotiation',
  }
  const societyCells = families.flatMap((family) =>
    dimensions.map((dimension) => {
      const societyFunction = societyFunctionByDimension[dimension.name]
      const interaction = `${family.name} x ${dimension.name} -> ${societyFunction}`
      const boundary = `${family.boundary} ${dimension.caution}`
      return {
        family: family.name,
        dimension: dimension.name,
        societyFunction,
        interaction,
        boundary,
        receipt: toUuid(`tradition-society:${family.name}:${dimension.name}:${societyFunction}:${boundary}`),
      }
    }),
  )
  const root = merkleFold([
    ...dimensions.map((dimension) => toUuid(`tradition-dimension:${dimension.name}:${dimension.question}:${dimension.caution}`)),
    ...families.map((family) => family.receipt),
    ...societyCells.map((cell) => cell.receipt),
  ])

  return {
    grounded: dimensions.length === 8 && families.every((family) => family.receipt.length > 0),
    root,
    dimensions,
    families,
    societyCells,
    statement:
      'Religions and traditions are modeled as a quantum whole only in the sense of relational dimensions: distinct traditions remain distinct while their dimensions decode into inspectable society functions.',
    boundary:
      'This report is a comparative-religion lens, not a theological verdict, not a claim that all religions are the same, and not a substitute for tradition-specific sources or community voices.',
  }
}
