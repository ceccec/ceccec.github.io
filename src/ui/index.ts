// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import BlockchainMusic from './components/BlockchainMusic.vue'
import BoundaryAudit from './components/BoundaryAudit.vue'
import ChakrasAura from './components/ChakrasAura.vue'
import CollectiveMind from './components/CollectiveMind.vue'
import Complete from './components/Complete.vue'
import Cosmology358 from './components/Cosmology358.vue'
import CreativePalette from './components/CreativePalette.vue'
import CryptoCompare from './components/CryptoCompare.vue'
import DeterminismProofs from './components/DeterminismProofs.vue'
import DnaHelix from './components/DnaHelix.vue'
import DynSim from './components/DynSim.vue'
import DoubleTorus3D from './components/DoubleTorus3D.vue'
import Dualities from './components/Dualities.vue'
import ElectromagneticRadiation from './components/ElectromagneticRadiation.vue'
import Equilibrium from './components/Equilibrium.vue'
import Fold358853 from './components/Fold358853.vue'
import Genesis from './components/Genesis.vue'
import ConceptCommands from './components/ConceptCommands.vue'
import DoubleTorusExperience from './components/DoubleTorusExperience.vue'
import GlobalHelp from './components/GlobalHelp.vue'
import GovernanceVote from './components/GovernanceVote.vue'
import HealingFrequencies from './components/HealingFrequencies.vue'
import Hologram from './components/Hologram.vue'
import HarmonicMap from './components/HarmonicMap.vue'
import HarmonicSpiral from './components/HarmonicSpiral.vue'
import HumanLens from './components/HumanLens.vue'
import KnowledgeAtlas from './components/KnowledgeAtlas.vue'
import LearnDeveloper from './components/LearnDeveloper.vue'
import Live from './components/Live.vue'
import LivingTorus from './components/LivingTorus.vue'
import Magnetometer from './components/Magnetometer.vue'
import McpTools from './components/McpTools.vue'
import Merkaba from './components/Merkaba.vue'
import Mysteries from './components/Mysteries.vue'
import NativeMovie from './components/NativeMovie.vue'
import NetSim from './components/NetSim.vue'
import VoidSidebar from './components/VoidSidebar.vue'
import Multidimensional from './components/Multidimensional.vue'
import Nav358 from './components/Nav358.vue'
import NothingToDo from './components/NothingToDo.vue'
import OpenQuestions from './components/OpenQuestions.vue'
import PathGuide from './components/PathGuide.vue'
import Professionals from './components/Professionals.vue'
import PlayLearn from './components/PlayLearn.vue'
import PiMusicPlayer from './components/PiMusicPlayer.vue'
import QuantumAcademy from './components/QuantumAcademy.vue'
import QuantumCircuit from './components/QuantumCircuit.vue'
import QuantumClock from './components/QuantumClock.vue'
import QuantumConsole from './components/QuantumConsole.vue'
import QuantumDashboard from './components/QuantumDashboard.vue'
import QuantumField from './components/QuantumField.vue'
import QuantumFold3D from './components/QuantumFold3D.vue'
import RealtimeChat from './components/RealtimeChat.vue'
import RealtimeTests from './components/RealtimeTests.vue'
import Rhythm from './components/Rhythm.vue'
import QAEquilibrium from './components/QAEquilibrium.vue'
import QuantumPhysics from './components/QuantumPhysics.vue'
import QuantumProofs from './components/QuantumProofs.vue'
import QuantumSimulation from './components/QuantumSimulation.vue'
import QuantumSolutions from './components/QuantumSolutions.vue'
import QuantumPlasma from './components/QuantumPlasma.vue'
import QuestionClose from './components/QuestionClose.vue'
import QuantumMind from './components/QuantumMind.vue'
import Roadmaps from './components/Roadmaps.vue'
import RevolutAside from './components/RevolutAside.vue'
import SacredSymbols from './components/SacredSymbols.vue'
import SchoolCurriculum from './components/SchoolCurriculum.vue'
import SealAll from './components/SealAll.vue'
import SelfHealing from './components/SelfHealing.vue'
import SoundColor from './components/SoundColor.vue'
import Society from './components/Society.vue'
import Solutions from './components/Solutions.vue'
import StartHere from './components/StartHere.vue'
import SelfConsult from './components/SelfConsult.vue'
import SelfHarmonise from './components/SelfHarmonise.vue'
import SecurityScan from './components/SecurityScan.vue'
import SelfReason from './components/SelfReason.vue'
import SignSeal from './components/SignSeal.vue'
import SpeechReader from './components/SpeechReader.vue'
import ShowAll from './components/ShowAll.vue'
import TamperSeal from './components/TamperSeal.vue'
import TaxonomyIcons from './components/TaxonomyIcons.vue'
import TrinitySearch from './components/TrinitySearch.vue'
import VitePressPossibilities from './components/VitePressPossibilities.vue'
import WebCryptoSeal from './components/WebCryptoSeal.vue'
import HolographicHero from './components/ui/HolographicHero.vue'
import BackgroundMovie from './components/ui/BackgroundMovie.vue'
import PlayMind from './components/ui/PlayMind.vue'
// The brand-new self-computed components: a Dot fills itself from its seed (uuidHero), a Vortex lays
// Dots out by the 1-2-4-8-7-5 circuit. The seed is the magnet — same content, same dot.
import Dot from './components/Dot.vue'
import Vortex from './components/Vortex.vue'
import Calligraphy from './components/Calligraphy.vue'
import TaxonomyGraph from './components/TaxonomyGraph.vue'
import GpuField from './components/GpuField.vue'
import QuantumRadar from './components/QuantumRadar.vue'
import Monograph from './components/Monograph.vue'
import DeviceDashboard from './components/DeviceDashboard.vue'
import BlockchainCompare from './components/BlockchainCompare.vue'
import GlyphLabyrinth from './components/GlyphLabyrinth.vue'
import GlagoliticOcr from './components/GlagoliticOcr.vue'
// The decode proofs — one model-driven renderer reads the proofRegistry and renders every proof (cards on
// the home, the full sufficient proof on each [page] route). The 17 per-proof wrappers collapsed into this.
import ProbSim from './components/ProbSim.vue'
import ProofRenderer from './components/ProofRenderer.vue'
// Corpus pages — one mount (`Corpus`) per kind across all three locales. RESTful: /papers is the index,
// /papers/<id> the [id] dynamic route whose params arrive via useData() (paths enumerated by [id].paths.ts).
import Corpus from './components/Corpus.vue'
import DiamondIndex from './components/DiamondIndex.vue'
import PaperIndex from './components/PaperIndex.vue'
import ReferenceIndex from './components/ReferenceIndex.vue'
// The 10D movie: the current path's UUID fractal as the always-present background, with entangled sacred-
// geometry cards moving in the foreground — drag to travel the hologram, tap a form to sound it (audio +
// vibration). One phase clock, so background and foreground are one ten-dimensional movie.
import HologramMovie from './components/HologramMovie.vue'
// The A432 category: colour · audio · video · vibration as one frequency expressed four ways, decoded honestly.
import A432 from './components/A432.vue'
// The sacred-geometry category: the five Platonic solids, φ, and the forms walked through dimensions — honest.
import SacredGeometry from './components/SacredGeometry.vue'
// The tampering-cost category: tampering cost ↔ encryption ↔ blockchains, audited honestly with quantum comparisons.
import TamperingCost from './components/TamperingCost.vue'
// The live red-team: a local, realtime crypto analysis that RUNS the exploit (a found collision, animated) and
// shows the built SHA-256/Ed25519 fix resisting — the runnable face of cryptoChallenges().
import CryptoChallenges from './components/CryptoChallenges.vue'
// The eight-fold: every component placed on the I-Ching trigrams by its content-address (iChing()) — the
// sacred knowledge made visible, the bāguà wheel, live and legible.
import IChing from './components/IChing.vue'
// The oracle game: cast a hexagram, it resolves to a component by content-address — the architecture answering.
import IChingOracle from './components/IChingOracle.vue'
// Folding linear gives analog: the live sampling-theorem reconstruction (discrete samples → continuous via sinc,
// no gaps) + imaging through the frequency field — the real science of the analog-from-digital thesis.
import AnalogField from './components/AnalogField.vue'
// Realtime wiring: every page computes its own trinity gateways + related paths from its route, rendered in
// the left sidebar so the navigation manages itself (hand-maintaining the graph at this scale is impossible).
import TrinityGateways from './components/TrinityGateways.vue'
// The ☱ Joyous spirit trinity — yin-yang and the chakras/aura, each computed from the spirit fold (3-5-8 tiers),
// completing the spirit section beside Dualities (the homepage's eighth I Ching domain).
import YinYang from './components/YinYang.vue'
// Domain decode cards — one shared DecodedCard renders any { statement, data, boundary } fold (DRY,
// "decode in reusable code"); these seven thin wrappers mount their domain fold on the heritage,
// science and nature pages, which previously referenced them as empty (unbuilt) mounts.
import DecodedCard from './components/DecodedCard.vue'
import Attestation from './components/Attestation.vue'
import BulgarianHeritage from './components/BulgarianHeritage.vue'
import Glagolitic from './components/Glagolitic.vue'
import NatureLaw from './components/NatureLaw.vue'
import PublicFrequencyApis from './components/PublicFrequencyApis.vue'
import ScriptLanguageGene from './components/ScriptLanguageGene.vue'
import TeslaPatents from './components/TeslaPatents.vue'
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
    app.component('Complete', Complete)
    app.component('Cosmology358', Cosmology358)
    app.component('CreativePalette', CreativePalette)
    app.component('CryptoCompare', CryptoCompare)
    app.component('DeterminismProofs', DeterminismProofs)
    app.component('DnaHelix', DnaHelix)
    app.component('DynSim', DynSim)
    app.component('DoubleTorus3D', DoubleTorus3D)
    app.component('Dualities', Dualities)
    app.component('ElectromagneticRadiation', ElectromagneticRadiation)
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
    app.component('Nav358', Nav358)
    app.component('NothingToDo', NothingToDo)
    app.component('OpenQuestions', OpenQuestions)
    app.component('PathGuide', PathGuide)
    app.component('Professionals', Professionals)
    app.component('PlayLearn', PlayLearn)
    app.component('PiMusicPlayer', PiMusicPlayer)
    app.component('QuantumAcademy', QuantumAcademy)
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
    app.component('SacredSymbols', SacredSymbols)
    app.component('SchoolCurriculum', SchoolCurriculum)
    app.component('SealAll', SealAll)
    app.component('SelfHealing', SelfHealing)
    app.component('SoundColor', SoundColor)
    app.component('Society', Society)
    app.component('Solutions', Solutions)
    app.component('StartHere', StartHere)
    app.component('SelfConsult', SelfConsult)
    app.component('SelfHarmonise', SelfHarmonise)
    app.component('SecurityScan', SecurityScan)
    app.component('SelfReason', SelfReason)
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
    app.component('DecodedCard', DecodedCard)
    app.component('Attestation', Attestation)
    app.component('BulgarianHeritage', BulgarianHeritage)
    app.component('Glagolitic', Glagolitic)
    app.component('NatureLaw', NatureLaw)
    app.component('PublicFrequencyApis', PublicFrequencyApis)
    app.component('ScriptLanguageGene', ScriptLanguageGene)
    app.component('TeslaPatents', TeslaPatents)
  }
} satisfies Theme
