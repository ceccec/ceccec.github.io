// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import BlockchainMusic from './components/BlockchainMusic'
import BoundaryAudit from './components/BoundaryAudit'
import ChakrasAura from './components/ChakrasAura'
import CollectiveMind from './components/CollectiveMind'
import Compass from './components/Compass'
import Complete from './components/Complete'
import Cosmology358 from './components/Cosmology358'
import CryptoCompare from './components/CryptoCompare'
import DeterminismProofs from './components/DeterminismProofs'
import DnaHelix from './components/DnaHelix'
import DynSim from './components/DynSim'
import DoubleTorus3D from './components/DoubleTorus3D'
import Dualities from './components/Dualities'
import ElectromagneticRadiation from './components/ElectromagneticRadiation'
import Frontiers from './components/Frontiers'
import Equilibrium from './components/Equilibrium'
import Fold358853 from './components/Fold358853'
import Genesis from './components/Genesis'
import ConceptCommands from './components/ConceptCommands'
import DoubleTorusExperience from './components/DoubleTorusExperience'
import GlobalHelp from './components/GlobalHelp'
import GovernanceVote from './components/GovernanceVote'
import HealingFrequencies from './components/HealingFrequencies'
import Hologram from './components/Hologram'
import HarmonicMap from './components/HarmonicMap'
import HarmonicSpiral from './components/HarmonicSpiral'
import HumanLens from './components/HumanLens'
import KnowledgeAtlas from './components/KnowledgeAtlas'
import LearnDeveloper from './components/LearnDeveloper'
import LearningPortal from './components/LearningPortal'
import Live from './components/Live'
import LivingTorus from './components/LivingTorus'
import Magnetometer from './components/Magnetometer'
import McpTools from './components/McpTools'
import Merkaba from './components/Merkaba'
import Mysteries from './components/Mysteries'
import NativeMovie from './components/NativeMovie'
import NetSim from './components/NetSim'
import VoidSidebar from './components/VoidSidebar'
import Multidimensional from './components/Multidimensional'
import MatrixCube from './components/MatrixCube'
import Nav358 from './components/Nav358'
import NothingToDo from './components/NothingToDo'
import OpenQuestions from './components/OpenQuestions'
import PathGuide from './components/PathGuide'
import PlayLearn from './components/PlayLearn'
import PiMusicPlayer from './components/PiMusicPlayer'
import QuantumCircuit from './components/QuantumCircuit'
import QuantumClock from './components/QuantumClock'
import QuantumConsole from './components/QuantumConsole'
import QuantumDashboard from './components/QuantumDashboard'
import QuantumField from './components/QuantumField'
import QuantumFold3D from './components/QuantumFold3D'
import RealtimeChat from './components/RealtimeChat'
import RealtimeTests from './components/RealtimeTests'
import Rhythm from './components/Rhythm'
import QAEquilibrium from './components/QAEquilibrium'
import QuantumPhysics from './components/QuantumPhysics'
import QuantumProofs from './components/QuantumProofs'
import QuantumSimulation from './components/QuantumSimulation'
import QuantumSolutions from './components/QuantumSolutions'
import QuantumPlasma from './components/QuantumPlasma'
import QuestionClose from './components/QuestionClose'
import QuantumMind from './components/QuantumMind'
import Roadmaps from './components/Roadmaps'
import RevolutAside from './components/RevolutAside'
import SacredSound from './components/SacredSound'
import SacredSymbols from './components/SacredSymbols'
import SiteOverview from './components/SiteOverview'
import SealAll from './components/SealAll'
import SelfHealing from './components/SelfHealing'
import SoundColor from './components/SoundColor'
import Society from './components/Society'
import StartHere from './components/StartHere'
import SelfConsult from './components/SelfConsult'
import SelfHarmonise from './components/SelfHarmonise'
import SecurityScan from './components/SecurityScan'
import SelfReason from './components/SelfReason'
import SignSeal from './components/SignSeal'
import SpeechReader from './components/SpeechReader'
import ShowAll from './components/ShowAll'
import TamperSeal from './components/TamperSeal'
import TaxonomyIcons from './components/TaxonomyIcons'
import TrinitySearch from './components/TrinitySearch'
import VitePressPossibilities from './components/VitePressPossibilities'
import WebCryptoSeal from './components/WebCryptoSeal'
import HolographicHero from './components/ui/HolographicHero'
import BackgroundMovie from './components/ui/BackgroundMovie'
import PlayMind from './components/ui/PlayMind'
// The brand-new self-computed components: a Dot fills itself from its seed (uuidHero), a Vortex lays
// Dots out by the 1-2-4-8-7-5 circuit. The seed is the magnet — same content, same dot.
import Dot from './components/Dot'
import Vortex from './components/Vortex'
import Calligraphy from './components/Calligraphy'
import TaxonomyGraph from './components/TaxonomyGraph'
import GpuField from './components/GpuField'
import QuantumRadar from './components/QuantumRadar'
import Monograph from './components/Monograph'
import DeviceDashboard from './components/DeviceDashboard'
import BlockchainCompare from './components/BlockchainCompare'
import GlyphLabyrinth from './components/GlyphLabyrinth'
import GlagoliticOcr from './components/GlagoliticOcr'
// The decode proofs — one model-driven renderer reads the proofRegistry and renders every proof (cards on
// the home, the full sufficient proof on each [page] route). The 17 per-proof wrappers collapsed into this.
import ProbSim from './components/ProbSim'
import ProofRenderer from './components/ProofRenderer'
// Corpus pages — one mount (`Corpus`) per kind across all three locales. RESTful: /papers is the index,
// /papers/<id> the [id] dynamic route whose params arrive via useData() (paths enumerated by [id].paths.ts).
import Corpus from './components/Corpus'
import DiamondIndex from './components/DiamondIndex'
import PaperIndex from './components/PaperIndex'
import ReferenceIndex from './components/ReferenceIndex'
// The 10D movie: the current path's UUID fractal as the always-present background, with entangled sacred-
// geometry cards moving in the foreground — drag to travel the hologram, tap a form to sound it (audio +
// vibration). One phase clock, so background and foreground are one ten-dimensional movie.
import HologramMovie from './components/HologramMovie'
// The A432 category: colour · audio · video · vibration as one frequency expressed four ways, decoded honestly.
import A432 from './components/A432'
// The sacred-geometry category: the five Platonic solids, φ, and the forms walked through dimensions — honest.
import SacredGeometry from './components/SacredGeometry'
// The tampering-cost category: tampering cost ↔ encryption ↔ blockchains, audited honestly with quantum comparisons.
import TamperingCost from './components/TamperingCost'
// The live red-team: a local, realtime crypto analysis that RUNS the exploit (a found collision, animated) and
// shows the built SHA-256/Ed25519 fix resisting — the runnable face of cryptoChallenges().
import CryptoChallenges from './components/CryptoChallenges'
// The eight-fold: every component placed on the I-Ching trigrams by its content-address (iChing()) — the
// sacred knowledge made visible, the bāguà wheel, live and legible.
import IChing from './components/IChing'
// The oracle game: cast a hexagram, it resolves to a component by content-address — the architecture answering.
import IChingOracle from './components/IChingOracle'
// Folding linear gives analog: the live sampling-theorem reconstruction (discrete samples → continuous via sinc,
// no gaps) + imaging through the frequency field — the real science of the analog-from-digital thesis.
import AnalogField from './components/AnalogField'
// Realtime wiring: every page computes its own trinity gateways + related paths from its route, rendered in
// the left sidebar so the navigation manages itself (hand-maintaining the graph at this scale is impossible).
import TrinityGateways from './components/TrinityGateways'
// The ☱ Joyous spirit trinity — yin-yang and the chakras/aura, each computed from the spirit fold (3-5-8 tiers),
// completing the spirit section beside Dualities (the homepage's eighth I Ching domain).
import YinYang from './components/YinYang'
// Analytics rebuilt as reusable ledger views (analyticsLedger) rendered on the shadcn Chart + DataTable
// primitives — themed with the site CSS variables (no Tailwind, no preflight conflict).
import Chart from './components/Chart'
import DataTable from './components/DataTable'
import Analytics from './components/Analytics'
// Domain decode cards — one shared DecodedCard renders any { statement, data, boundary } fold (DRY,
// "decode in reusable code"); these seven thin wrappers mount their domain fold on the heritage,
// science and nature pages, which previously referenced them as empty (unbuilt) mounts.
import DecodedCard from './components/DecodedCard'
import Attestation from './components/Attestation'
// Session wave widgets — each fold sealed as a self-referencing 10D widget with LayersPanel controls
import AlgebraDigits from './components/AlgebraDigits'
import Biology from './components/Biology'
import FuseReveal from './components/FuseReveal'
import HarmonicFractions from './components/HarmonicFractions'
import IChingImportExport from './components/IChingImportExport'
import ImperialFractions from './components/ImperialFractions'
import BulgarianHeritage from './components/BulgarianHeritage'
import Glagolitic from './components/Glagolitic'
import NatureLaw from './components/NatureLaw'
import PublicFrequencyApis from './components/PublicFrequencyApis'
import ScriptLanguageGene from './components/ScriptLanguageGene'
import TeslaPatents from './components/TeslaPatents'
import HeartProtonAtom from './components/HeartProtonAtom'
import SelfExplainingWidget from './components/SelfExplainingWidget'
import BulgarianHistory from './components/BulgarianHistory'
import BulgarianAncientCivilisations from './components/BulgarianAncientCivilisations'
import BulgarianEthnogenesis from './components/BulgarianEthnogenesis'
import BulgarianGenetics from './components/BulgarianGenetics'
import BulgarianHeritageEightfold from './components/BulgarianHeritageEightfold'
import AlphabetsDecoded from './components/AlphabetsDecoded'
import AiMovies from './components/AiMovies'
import PeaceTechMentality from './components/PeaceTechMentality'
import QuantumSolutionsComplete from './components/QuantumSolutionsComplete'
import MetatronMath from './components/MetatronMath'
import QuantumThreshold from './components/QuantumThreshold'
import DeviceEnergy from './components/DeviceEnergy'
import QuantumImpossible from './components/QuantumImpossible'
import QuantumWonders from './components/QuantumWonders'
import DoubleFoldAllDimensions from './components/DoubleFoldAllDimensions'
import NothingImpossible from './components/NothingImpossible'
import QuantumFoundations from './components/QuantumFoundations'
import QuantumAlgorithms from './components/QuantumAlgorithms'
import PowerLanding from './components/PowerLanding'
import MegalithicAstronomy from './components/MegalithicAstronomy'
import ProseToProof3D from './components/ProseToProof3D'
import Pyramids from './components/Pyramids'
import QuantumLaws from './components/QuantumLaws'
import QuantumLens from './components/QuantumLens'
// The computed I Ching design system — every colour, space, radius, size, duration, angle and opacity derived
// from a canonical I Ching number (src/quantum/mind/css.ts → ichingTokensCss). Loaded BEFORE style.css so the
// body, which references only these tokens, resolves against them. "no hardcoded values whatsoever."
import './tokens.css'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      // Entangled digit-streams fill a background movie behind every page.
      'layout-top': () => h(BackgroundMovie),
      // Every page opens with an animated holographic-fractal hero that merges all
      // the page's related items (category and tags), seeded from the page itself.
      'doc-before': () => h(HolographicHero),
      // Let quantum present itself as fractals on the holographic homepage too.
      'home-hero-before': () => h(HolographicHero),
      'aside-ads-before': () => h(RevolutAside),
      'aside-outline-before': () => h(VitePressPossibilities),
      // The sidebar rises from the void each time the content visualises (a new route).
      'sidebar-nav-before': () => h(VoidSidebar),
      // Realtime wiring: every page leads to the three trinity gateways and shows its related paths, computed
      // from the current route and recomputed on every navigation — the graph manages itself.
      'sidebar-nav-after': () => h(TrinityGateways),
      // Intelligent help + collective-mind self-development folded into every page,
      // plus the playful quantum-mind badge (the exam that happens by just playing).
      'layout-bottom': () => [h(GlobalHelp), h(CollectiveMind), h(PlayMind)],
    })
  },
  enhanceApp({ app, router }) {
    // Full-featured PWA: register the service worker in ALL environments so the double torus installs to
    // the device and runs offline by default (stale-while-revalidate). The SW (public/sw.js) skips the dev
    // server's own machinery (Vite modules / HMR / optimized deps), so it is safe in dev too — one SW,
    // every environment. Client-only, fails quietly.
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {})
      })
    }
    // Remember the visitor's locale on every navigation, so the browser-language auto-routing in <head>
    // (config.mts) respects an explicit choice: picking Glagolitic (/) stores 'gla' and keeps the root from
    // bouncing; choosing /en/ or /bg/ sticks across visits. The default for a fresh visitor stays English.
    if (typeof window !== 'undefined') {
      const remember = (to: string) => {
        try {
          const locale = to.startsWith('/bg/') || to === '/bg' ? 'bg' : to.startsWith('/en/') || to === '/en' ? 'en' : 'gla'
          localStorage.setItem('dt-locale', locale)
        } catch {
          /* storage unavailable — the <head> detector falls back to navigator.language */
        }
      }
      const previous = router.onAfterRouteChanged
      router.onAfterRouteChanged = (to) => {
        remember(to)
        previous?.(to)
      }
      remember(router.route.path)
    }
    app.component('BlockchainMusic', BlockchainMusic)
    app.component('BoundaryAudit', BoundaryAudit)
    app.component('CollectiveMind', CollectiveMind)
    app.component('Compass', Compass)
    app.component('Complete', Complete)
    app.component('Cosmology358', Cosmology358)
    app.component('CryptoCompare', CryptoCompare)
    app.component('DeterminismProofs', DeterminismProofs)
    app.component('DnaHelix', DnaHelix)
    app.component('DynSim', DynSim)
    app.component('DoubleTorus3D', DoubleTorus3D)
    app.component('Dualities', Dualities)
    app.component('ElectromagneticRadiation', ElectromagneticRadiation)
    app.component('Frontiers', Frontiers)
    app.component('Equilibrium', Equilibrium)
    app.component('Fold358853', Fold358853)
    app.component('Genesis', Genesis)
    app.component('ConceptCommands', ConceptCommands)
    app.component('DoubleTorusExperience', DoubleTorusExperience)
    app.component('GlobalHelp', GlobalHelp)
    app.component('GovernanceVote', GovernanceVote)
    app.component('HealingFrequencies', HealingFrequencies)
    app.component('Hologram', Hologram)
    app.component('HarmonicMap', HarmonicMap)
    app.component('HarmonicSpiral', HarmonicSpiral)
    app.component('HumanLens', HumanLens)
    app.component('KnowledgeAtlas', KnowledgeAtlas)
    app.component('LearnDeveloper', LearnDeveloper)
    app.component('LearningPortal', LearningPortal)
    app.component('Live', Live)
    app.component('LivingTorus', LivingTorus)
    app.component('Magnetometer', Magnetometer)
    app.component('McpTools', McpTools)
    app.component('Merkaba', Merkaba)
    app.component('Mysteries', Mysteries)
    app.component('NativeMovie', NativeMovie)
    app.component('NetSim', NetSim)
    app.component('VoidSidebar', VoidSidebar)
    app.component('Multidimensional', Multidimensional)
    app.component('MatrixCube', MatrixCube)
    app.component('Nav358', Nav358)
    app.component('NothingToDo', NothingToDo)
    app.component('OpenQuestions', OpenQuestions)
    app.component('PathGuide', PathGuide)
    app.component('PlayLearn', PlayLearn)
    app.component('PiMusicPlayer', PiMusicPlayer)
    app.component('QuantumCircuit', QuantumCircuit)
    app.component('QuantumClock', QuantumClock)
    app.component('QuantumConsole', QuantumConsole)
    app.component('QuantumDashboard', QuantumDashboard)
    app.component('QuantumField', QuantumField)
    app.component('QuantumFold3D', QuantumFold3D)
    app.component('QAEquilibrium', QAEquilibrium)
    app.component('QuantumPhysics', QuantumPhysics)
    app.component('QuantumProofs', QuantumProofs)
    app.component('QuantumSimulation', QuantumSimulation)
    app.component('QuantumSolutions', QuantumSolutions)
    app.component('QuantumPlasma', QuantumPlasma)
    app.component('QuestionClose', QuestionClose)
    app.component('RealtimeChat', RealtimeChat)
    app.component('RealtimeTests', RealtimeTests)
    app.component('Rhythm', Rhythm)
    app.component('QuantumMind', QuantumMind)
    app.component('Roadmaps', Roadmaps)
    app.component('RevolutAside', RevolutAside)
    app.component('SacredSound', SacredSound)
    app.component('SacredSymbols', SacredSymbols)
    app.component('SealAll', SealAll)
    app.component('SelfHealing', SelfHealing)
    app.component('SoundColor', SoundColor)
    app.component('Society', Society)
    app.component('StartHere', StartHere)
    app.component('SelfConsult', SelfConsult)
    app.component('SelfHarmonise', SelfHarmonise)
    app.component('SecurityScan', SecurityScan)
    app.component('SelfReason', SelfReason)
    app.component('SiteOverview', SiteOverview)
    app.component('SignSeal', SignSeal)
    app.component('SpeechReader', SpeechReader)
    app.component('ShowAll', ShowAll)
    app.component('TamperSeal', TamperSeal)
    app.component('TaxonomyIcons', TaxonomyIcons)
    app.component('TrinitySearch', TrinitySearch)
    app.component('VitePressPossibilities', VitePressPossibilities)
    app.component('WebCryptoSeal', WebCryptoSeal)
    app.component('Dot', Dot)
    app.component('Vortex', Vortex)
    app.component('Calligraphy', Calligraphy)
    app.component('TaxonomyGraph', TaxonomyGraph)
    app.component('GpuField', GpuField)
    app.component('QuantumRadar', QuantumRadar)
    app.component('Monograph', Monograph)
    app.component('DeviceDashboard', DeviceDashboard)
    app.component('BlockchainCompare', BlockchainCompare)
    app.component('GlyphLabyrinth', GlyphLabyrinth)
    app.component('GlagoliticOcr', GlagoliticOcr)
    app.component('ProbSim', ProbSim)
    app.component('ProofRenderer', ProofRenderer)
    app.component('Corpus', Corpus)
    app.component('DiamondIndex', DiamondIndex)
    app.component('PaperIndex', PaperIndex)
    app.component('ReferenceIndex', ReferenceIndex)
    app.component('HologramMovie', HologramMovie)
    app.component('A432', A432)
    app.component('SacredGeometry', SacredGeometry)
    app.component('TamperingCost', TamperingCost)
    app.component('CryptoChallenges', CryptoChallenges)
    app.component('IChing', IChing)
    app.component('IChingOracle', IChingOracle)
    app.component('AnalogField', AnalogField)
    app.component('TrinityGateways', TrinityGateways)
    app.component('ChakrasAura', ChakrasAura)
    app.component('YinYang', YinYang)
    app.component('Chart', Chart)
    app.component('DataTable', DataTable)
    app.component('Analytics', Analytics)
    app.component('DecodedCard', DecodedCard)
    app.component('Attestation', Attestation)
    app.component('AlgebraDigits', AlgebraDigits)
    app.component('Biology', Biology)
    app.component('FuseReveal', FuseReveal)
    app.component('HarmonicFractions', HarmonicFractions)
    app.component('IChingImportExport', IChingImportExport)
    app.component('ImperialFractions', ImperialFractions)
    app.component('BulgarianHeritage', BulgarianHeritage)
    app.component('Glagolitic', Glagolitic)
    app.component('NatureLaw', NatureLaw)
    app.component('PublicFrequencyApis', PublicFrequencyApis)
    app.component('ScriptLanguageGene', ScriptLanguageGene)
    app.component('TeslaPatents', TeslaPatents)
    app.component('HeartProtonAtom', HeartProtonAtom)
    app.component('SelfExplainingWidget', SelfExplainingWidget)
    app.component('BulgarianHistory', BulgarianHistory)
    app.component('BulgarianAncientCivilisations', BulgarianAncientCivilisations)
    app.component('BulgarianEthnogenesis', BulgarianEthnogenesis)
    app.component('BulgarianGenetics', BulgarianGenetics)
    app.component('BulgarianHeritageEightfold', BulgarianHeritageEightfold)
    app.component('AlphabetsDecoded', AlphabetsDecoded)
    app.component('AiMovies', AiMovies)
    app.component('PeaceTechMentality', PeaceTechMentality)
    app.component('QuantumSolutionsComplete', QuantumSolutionsComplete)
    app.component('MetatronMath', MetatronMath)
    app.component('QuantumThreshold', QuantumThreshold)
    app.component('DeviceEnergy', DeviceEnergy)
    app.component('QuantumImpossible', QuantumImpossible)
    app.component('QuantumWonders', QuantumWonders)
    app.component('DoubleFoldAllDimensions', DoubleFoldAllDimensions)
    app.component('NothingImpossible', NothingImpossible)
    app.component('QuantumFoundations', QuantumFoundations)
    app.component('QuantumAlgorithms', QuantumAlgorithms)
    app.component('MegalithicAstronomy', MegalithicAstronomy)
    app.component('PowerLanding', PowerLanding)
    app.component('ProseToProof3D', ProseToProof3D)
    app.component('Pyramids', Pyramids)
    app.component('QuantumLaws', QuantumLaws)
    app.component('QuantumLens', QuantumLens)
  }
} satisfies Theme
