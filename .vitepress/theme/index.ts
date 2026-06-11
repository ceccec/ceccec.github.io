// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import BlockchainMusic from './components/BlockchainMusic.vue'
import BoundaryAudit from './components/BoundaryAudit.vue'
import CollectiveMind from './components/CollectiveMind.vue'
import Complete from './components/Complete.vue'
import Cosmology358 from './components/Cosmology358.vue'
import CreativePalette from './components/CreativePalette.vue'
import CryptoCompare from './components/CryptoCompare.vue'
import DnaHelix from './components/DnaHelix.vue'
import DoubleTorus3D from './components/DoubleTorus3D.vue'
import Dualities from './components/Dualities.vue'
import Equilibrium from './components/Equilibrium.vue'
import Fold358853 from './components/Fold358853.vue'
import FusionWave from './components/FusionWave.vue'
import Genesis from './components/Genesis.vue'
import ConceptCommands from './components/ConceptCommands.vue'
import DoubleTorusExperience from './components/DoubleTorusExperience.vue'
import GlobalHelp from './components/GlobalHelp.vue'
import GovernanceVote from './components/GovernanceVote.vue'
import HealingFrequencies from './components/HealingFrequencies.vue'
import Hologram from './components/Hologram.vue'
import HarmonicMap from './components/HarmonicMap.vue'
import HumanLens from './components/HumanLens.vue'
import LearnDeveloper from './components/LearnDeveloper.vue'
import LivingTorus from './components/LivingTorus.vue'
import Magnetometer from './components/Magnetometer.vue'
import McpTools from './components/McpTools.vue'
import Multidimensional from './components/Multidimensional.vue'
import Nav358 from './components/Nav358.vue'
import NothingToDo from './components/NothingToDo.vue'
import OpenQuestions from './components/OpenQuestions.vue'
import PathGuide from './components/PathGuide.vue'
import Professionals from './components/Professionals.vue'
import PiMusicPlayer from './components/PiMusicPlayer.vue'
import QuantumAcademy from './components/QuantumAcademy.vue'
import QuantumClock from './components/QuantumClock.vue'
import QuantumConsole from './components/QuantumConsole.vue'
import QuantumDashboard from './components/QuantumDashboard.vue'
import QuantumField from './components/QuantumField.vue'
import QuantumFold3D from './components/QuantumFold3D.vue'
import RealtimeChat from './components/RealtimeChat.vue'
import QAEquilibrium from './components/QAEquilibrium.vue'
import QuantumPhysics from './components/QuantumPhysics.vue'
import QuantumSimulation from './components/QuantumSimulation.vue'
import QuantumPlasma from './components/QuantumPlasma.vue'
import QuestionClose from './components/QuestionClose.vue'
import QuantumMind from './components/QuantumMind.vue'
import Roadmaps from './components/Roadmaps.vue'
import RevolutAside from './components/RevolutAside.vue'
import RichOnly from './components/RichOnly.vue'
import SimpleOnly from './components/SimpleOnly.vue'
import SacredSymbols from './components/SacredSymbols.vue'
import SchoolCurriculum from './components/SchoolCurriculum.vue'
import SealAll from './components/SealAll.vue'
import SelfHealing from './components/SelfHealing.vue'
import SoundColor from './components/SoundColor.vue'
import SimpleToggle from './components/SimpleToggle.vue'
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
import WavesOfCreation from './components/WavesOfCreation.vue'
import WebCryptoSeal from './components/WebCryptoSeal.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'aside-ads-before': () => h(RevolutAside),
      'aside-outline-before': () => h(VitePressPossibilities),
      // Simple ⇄ Rich switch, reachable from every page's navbar.
      'nav-bar-content-after': () => h(SimpleToggle),
      // Intelligent help + collective-mind self-development folded into every page.
      'layout-bottom': () => [h(GlobalHelp), h(CollectiveMind)],
    })
  },
  enhanceApp({ app }) {
    app.component('BlockchainMusic', BlockchainMusic)
    app.component('BoundaryAudit', BoundaryAudit)
    app.component('CollectiveMind', CollectiveMind)
    app.component('Complete', Complete)
    app.component('Cosmology358', Cosmology358)
    app.component('CreativePalette', CreativePalette)
    app.component('CryptoCompare', CryptoCompare)
    app.component('DnaHelix', DnaHelix)
    app.component('DoubleTorus3D', DoubleTorus3D)
    app.component('Dualities', Dualities)
    app.component('Equilibrium', Equilibrium)
    app.component('Fold358853', Fold358853)
    app.component('FusionWave', FusionWave)
    app.component('Genesis', Genesis)
    app.component('ConceptCommands', ConceptCommands)
    app.component('DoubleTorusExperience', DoubleTorusExperience)
    app.component('GlobalHelp', GlobalHelp)
    app.component('GovernanceVote', GovernanceVote)
    app.component('HealingFrequencies', HealingFrequencies)
    app.component('Hologram', Hologram)
    app.component('HarmonicMap', HarmonicMap)
    app.component('HumanLens', HumanLens)
    app.component('LearnDeveloper', LearnDeveloper)
    app.component('LivingTorus', LivingTorus)
    app.component('Magnetometer', Magnetometer)
    app.component('McpTools', McpTools)
    app.component('Multidimensional', Multidimensional)
    app.component('Nav358', Nav358)
    app.component('NothingToDo', NothingToDo)
    app.component('OpenQuestions', OpenQuestions)
    app.component('PathGuide', PathGuide)
    app.component('Professionals', Professionals)
    app.component('PiMusicPlayer', PiMusicPlayer)
    app.component('QuantumAcademy', QuantumAcademy)
    app.component('QuantumClock', QuantumClock)
    app.component('QuantumConsole', QuantumConsole)
    app.component('QuantumDashboard', QuantumDashboard)
    app.component('QuantumField', QuantumField)
    app.component('QuantumFold3D', QuantumFold3D)
    app.component('QAEquilibrium', QAEquilibrium)
    app.component('QuantumPhysics', QuantumPhysics)
    app.component('QuantumSimulation', QuantumSimulation)
    app.component('QuantumPlasma', QuantumPlasma)
    app.component('QuestionClose', QuestionClose)
    app.component('RealtimeChat', RealtimeChat)
    app.component('QuantumMind', QuantumMind)
    app.component('Roadmaps', Roadmaps)
    app.component('RevolutAside', RevolutAside)
    app.component('RichOnly', RichOnly)
    app.component('SimpleOnly', SimpleOnly)
    app.component('SacredSymbols', SacredSymbols)
    app.component('SchoolCurriculum', SchoolCurriculum)
    app.component('SealAll', SealAll)
    app.component('SelfHealing', SelfHealing)
    app.component('SoundColor', SoundColor)
    app.component('SimpleToggle', SimpleToggle)
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
    app.component('WavesOfCreation', WavesOfCreation)
    app.component('WebCryptoSeal', WebCryptoSeal)
  }
} satisfies Theme
