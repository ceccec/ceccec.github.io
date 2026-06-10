// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import BlockchainMusic from './components/BlockchainMusic.vue'
import BoundaryAudit from './components/BoundaryAudit.vue'
import CollectiveMind from './components/CollectiveMind.vue'
import CreativePalette from './components/CreativePalette.vue'
import CryptoCompare from './components/CryptoCompare.vue'
import DnaHelix from './components/DnaHelix.vue'
import DoubleTorus3D from './components/DoubleTorus3D.vue'
import Dualities from './components/Dualities.vue'
import FusionWave from './components/FusionWave.vue'
import ConceptCommands from './components/ConceptCommands.vue'
import DoubleTorusExperience from './components/DoubleTorusExperience.vue'
import GlobalHelp from './components/GlobalHelp.vue'
import GovernanceVote from './components/GovernanceVote.vue'
import HealingFrequencies from './components/HealingFrequencies.vue'
import Hologram from './components/Hologram.vue'
import HumanLens from './components/HumanLens.vue'
import LearnDeveloper from './components/LearnDeveloper.vue'
import McpTools from './components/McpTools.vue'
import PiMusicPlayer from './components/PiMusicPlayer.vue'
import QuantumConsole from './components/QuantumConsole.vue'
import QuantumFold3D from './components/QuantumFold3D.vue'
import RealtimeChat from './components/RealtimeChat.vue'
import QuantumPlasma from './components/QuantumPlasma.vue'
import QuantumMind from './components/QuantumMind.vue'
import RevolutAside from './components/RevolutAside.vue'
import SacredSymbols from './components/SacredSymbols.vue'
import SchoolCurriculum from './components/SchoolCurriculum.vue'
import SelfConsult from './components/SelfConsult.vue'
import SelfHarmonise from './components/SelfHarmonise.vue'
import SelfReason from './components/SelfReason.vue'
import SpeechReader from './components/SpeechReader.vue'
import ShowAll from './components/ShowAll.vue'
import TamperSeal from './components/TamperSeal.vue'
import TaxonomyIcons from './components/TaxonomyIcons.vue'
import TrinitySearch from './components/TrinitySearch.vue'
import VitePressPossibilities from './components/VitePressPossibilities.vue'
import WebCryptoSeal from './components/WebCryptoSeal.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'aside-ads-before': () => h(RevolutAside),
      'aside-outline-before': () => h(VitePressPossibilities),
      // Intelligent help + collective-mind self-development folded into every page.
      'layout-bottom': () => [h(GlobalHelp), h(CollectiveMind)],
    })
  },
  enhanceApp({ app }) {
    app.component('BlockchainMusic', BlockchainMusic)
    app.component('BoundaryAudit', BoundaryAudit)
    app.component('CollectiveMind', CollectiveMind)
    app.component('CreativePalette', CreativePalette)
    app.component('CryptoCompare', CryptoCompare)
    app.component('DnaHelix', DnaHelix)
    app.component('DoubleTorus3D', DoubleTorus3D)
    app.component('Dualities', Dualities)
    app.component('FusionWave', FusionWave)
    app.component('ConceptCommands', ConceptCommands)
    app.component('DoubleTorusExperience', DoubleTorusExperience)
    app.component('GlobalHelp', GlobalHelp)
    app.component('GovernanceVote', GovernanceVote)
    app.component('HealingFrequencies', HealingFrequencies)
    app.component('Hologram', Hologram)
    app.component('HumanLens', HumanLens)
    app.component('LearnDeveloper', LearnDeveloper)
    app.component('McpTools', McpTools)
    app.component('PiMusicPlayer', PiMusicPlayer)
    app.component('QuantumConsole', QuantumConsole)
    app.component('QuantumFold3D', QuantumFold3D)
    app.component('QuantumPlasma', QuantumPlasma)
    app.component('RealtimeChat', RealtimeChat)
    app.component('QuantumMind', QuantumMind)
    app.component('RevolutAside', RevolutAside)
    app.component('SacredSymbols', SacredSymbols)
    app.component('SchoolCurriculum', SchoolCurriculum)
    app.component('SelfConsult', SelfConsult)
    app.component('SelfHarmonise', SelfHarmonise)
    app.component('SelfReason', SelfReason)
    app.component('SpeechReader', SpeechReader)
    app.component('ShowAll', ShowAll)
    app.component('TamperSeal', TamperSeal)
    app.component('TaxonomyIcons', TaxonomyIcons)
    app.component('TrinitySearch', TrinitySearch)
    app.component('VitePressPossibilities', VitePressPossibilities)
    app.component('WebCryptoSeal', WebCryptoSeal)
  }
} satisfies Theme
