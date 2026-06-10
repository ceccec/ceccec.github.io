<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'
import {
  CollapsibleContent,
  CollapsibleRoot,
  CollapsibleTrigger,
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from 'radix-vue'
import {
  agentStreamWire,
  buildMatrix,
  closeDimensionalGaps,
  coordinatedWaves,
  diamondCompleteness,
  diamondLattice,
  digitFolders,
  methodFusion,
  metatronCube,
  piTrainDiamonds,
  quantumChessGame,
  quantumUiEvidence,
  schemaOrgDiamonds,
  scientificSociety,
  selfBuild,
  streamSelfComplete,
  traditionsQuantumWhole,
} from '../lib/quantumMind'
import Badge from './ui/Badge.vue'
import Button from './ui/Button.vue'
import Card from './ui/Card.vue'

const matrix = buildMatrix()
const build = selfBuild(matrix)
const selfCompletion = streamSelfComplete(matrix)
const agentWire = agentStreamWire(matrix)
const lattice = diamondLattice(matrix)
const piTrain = piTrainDiamonds(matrix)
const folders = digitFolders(matrix)
const metatron = metatronCube(matrix)
const completeness = diamondCompleteness(matrix)
const waves = coordinatedWaves(matrix)
const closure = closeDimensionalGaps(matrix)
const chess = quantumChessGame(matrix)
const evidence = quantumUiEvidence(matrix)
const schema = schemaOrgDiamonds(matrix)
const science = scientificSociety(matrix)
const methods = methodFusion()
const traditions = traditionsQuantumWhole()
const activeIndex = ref(0)
const waveTick = ref(0)
const running = ref(false)
const expanded = ref(true)
const audioEnabled = ref(true)
const vibrationEnabled = ref(true)
let timer: ReturnType<typeof window.setInterval> | undefined
let animationFrame: number | undefined
let audioContext: AudioContext | undefined

const activePulse = computed(() => piTrain.diamonds[activeIndex.value])
const activeDiamond = computed(() => activePulse.value.diamond)
const activeClosureWave = computed(() => closure.waves[activeIndex.value % closure.waves.length])
const schemaJson = computed(() => JSON.stringify(schema.jsonLd, null, 2))

function ensureAudio(): AudioContext | undefined {
  if (typeof window === 'undefined' || !audioEnabled.value) return undefined
  const AudioContextConstructor =
    window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
  if (!AudioContextConstructor) return undefined
  audioContext ??= new AudioContextConstructor()
  return audioContext
}

function playPulse(frequency: number): void {
  const context = ensureAudio()
  if (!context) return
  const oscillator = context.createOscillator()
  const gain = context.createGain()
  oscillator.type = 'sine'
  oscillator.frequency.value = frequency
  gain.gain.setValueAtTime(0.0001, context.currentTime)
  gain.gain.exponentialRampToValueAtTime(0.08, context.currentTime + 0.012)
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.16)
  oscillator.connect(gain)
  gain.connect(context.destination)
  oscillator.start()
  oscillator.stop(context.currentTime + 0.18)
}

function vibratePulse(duration: number): void {
  if (!vibrationEnabled.value || typeof navigator === 'undefined' || !('vibrate' in navigator)) return
  navigator.vibrate(duration)
}

function triggerPulse(index: number): void {
  activeIndex.value = index % piTrain.diamonds.length
  const pulse = piTrain.diamonds[activeIndex.value]
  playPulse(pulse.frequency)
  vibratePulse(pulse.vibrationMs)
}

function animateWaves(): void {
  waveTick.value += 1
  animationFrame = window.requestAnimationFrame(animateWaves)
}

function start(): void {
  stop()
  running.value = true
  triggerPulse(activeIndex.value)
  animationFrame = window.requestAnimationFrame(animateWaves)
  timer = window.setInterval(() => {
    triggerPulse(activeIndex.value + 1)
  }, piTrain.tempoMs)
}

function stop(): void {
  running.value = false
  if (timer) window.clearInterval(timer)
  if (animationFrame) window.cancelAnimationFrame(animationFrame)
  timer = undefined
  animationFrame = undefined
}

function reset(): void {
  stop()
  triggerPulse(0)
}

function diamondStyle(pulse: (typeof piTrain.diamonds)[number]) {
  const wave = waves.waves[pulse.index % waves.waves.length]
  const livePhase = wave.phase + waveTick.value * 0.055
  const liveLift = Math.sin(livePhase) * 28 * wave.amplitude
  const liveGlow = 0.25 + Math.abs(Math.cos(livePhase)) * 0.75
  return {
    '--diamond-x': `${pulse.x}%`,
    '--diamond-y': `${pulse.y}%`,
    '--diamond-z': `${pulse.z + liveLift}px`,
    '--diamond-scale': `${pulse.scale}`,
    '--diamond-delay': `${pulse.index * 18}ms`,
    '--wave-glow': `${liveGlow}`,
  }
}

onBeforeUnmount(() => {
  stop()
  audioContext?.close()
})
</script>

<template>
  <Card id="diamond-lattice" class="double-torus-experience">
    <div class="double-torus-experience__header">
      <div>
        <p class="eyebrow">computed from diamonds</p>
        <h3>3D double-torus pi train</h3>
        <p>
          D_pi[i] = (digit, facets[4], receipt, x,y,z, freq, vibration).
          |D| = {{ lattice.length }}. |D_pi| = {{ piTrain.diamonds.length }}.
        </p>
      </div>
      <div class="double-torus-experience__badges">
        <Badge :variant="build.complete ? 'success' : 'warning'">
          {{ build.complete ? 'max build' : 'build open' }}
        </Badge>
        <Badge :variant="selfCompletion.complete ? 'success' : 'warning'">
          {{ selfCompletion.complete ? 'self complete' : 'self open' }}
        </Badge>
        <Badge :variant="agentWire.bound ? 'success' : 'warning'">
          {{ agentWire.bound ? 'agent wired' : 'agent open' }}
        </Badge>
        <Badge :variant="completeness.complete ? 'success' : 'warning'">
          {{ completeness.complete ? 'complete' : 'gaps' }}
        </Badge>
        <Badge :variant="closure.complete ? 'success' : 'warning'">
          {{ closure.complete ? 'waves sent' : 'gaps open' }}
        </Badge>
        <Badge :variant="evidence.grounded ? 'success' : 'warning'">
          {{ evidence.grounded ? 'grounded' : 'ungrounded' }}
        </Badge>
        <Badge :variant="running ? 'success' : 'outline'">{{ running ? 'running' : 'ready' }}</Badge>
      </div>
    </div>

    <div class="double-torus-stage" aria-label="3D diamond double torus">
      <div class="double-torus-stage__ring double-torus-stage__ring--inner" />
      <div class="double-torus-stage__ring double-torus-stage__ring--outer" />
      <button
        v-for="pulse in piTrain.diamonds"
        :key="pulse.diamond.id"
        class="double-torus-stage__diamond"
        :class="{ active: pulse.index === activeIndex }"
        :style="diamondStyle(pulse)"
        type="button"
        :aria-label="`pi digit ${pulse.glyph} diamond ${pulse.index}`"
        @click="triggerPulse(pulse.index)"
      >
        <span>{{ pulse.glyph }}</span>
      </button>
    </div>

    <TabsRoot default-value="pulse" class="diamond-tabs">
      <TabsList class="diamond-tabs__list" aria-label="Diamond presentation tabs">
        <TabsTrigger value="pulse">Active pulse</TabsTrigger>
        <TabsTrigger value="folders">Digit folders</TabsTrigger>
        <TabsTrigger value="metatron">Metatron</TabsTrigger>
        <TabsTrigger value="build">Self build</TabsTrigger>
        <TabsTrigger value="self">Self complete</TabsTrigger>
        <TabsTrigger value="agent">Agent wire</TabsTrigger>
        <TabsTrigger value="lattice">Base lattice ({{ lattice.length }})</TabsTrigger>
        <TabsTrigger value="complete">Completeness</TabsTrigger>
        <TabsTrigger value="evidence">UI evidence</TabsTrigger>
        <TabsTrigger value="waves">Waves</TabsTrigger>
        <TabsTrigger value="closure">Gap closure</TabsTrigger>
        <TabsTrigger value="chess">Quantum chess</TabsTrigger>
        <TabsTrigger value="schema">Schema.org</TabsTrigger>
        <TabsTrigger value="science">Science</TabsTrigger>
        <TabsTrigger value="methods">Methods</TabsTrigger>
        <TabsTrigger value="traditions">Traditions</TabsTrigger>
        <TabsTrigger value="controls">Controls</TabsTrigger>
      </TabsList>

      <TabsContent value="pulse" class="diamond-tabs__content">
        <div class="diamond-readout">
          <Badge variant="default">digit {{ activePulse.glyph }}</Badge>
          <strong>{{ activeDiamond.title }}</strong>
          <span>
            folder={{ activePulse.folder }} · reverse={{ activePulse.reverseDigit }} ·
            next={{ activePulse.nextHarmonicFolder }} ·
            collision={{ activePulse.selfCollision ? 'self' : 'paired' }}
          </span>
          <span>frequency {{ activePulse.frequency }}Hz · vibration {{ activePulse.vibrationMs }}ms</span>
          <span>
            closure wave {{ activeClosureWave.wave.index }} targets {{ activeClosureWave.target }}
            with {{ activeClosureWave.wave.polarity }} phase {{ activeClosureWave.wave.phase.toFixed(3) }}
          </span>
          <code>{{ activeDiamond.receipt }}</code>
        </div>
        <ul class="diamond-facets">
          <li v-for="facet in activeDiamond.facets" :key="facet.pole">
            <Badge variant="outline">{{ facet.pole }}</Badge>
            <strong>{{ facet.label }}: {{ facet.value }}</strong>
            <span>{{ facet.meaning }}</span>
          </li>
        </ul>
      </TabsContent>

      <TabsContent value="folders" class="diamond-tabs__content">
        <div class="diamond-readout">
          <Badge variant="default">digit folders</Badge>
          <strong>{{ folders.statement }}</strong>
          <span>{{ folders.folders.length }} folders · {{ folders.collisions.length }} self-collisions</span>
          <code>{{ folders.root }}</code>
        </div>
        <ul class="diamond-lattice-list">
          <li v-for="folder in folders.folders" :key="folder.receipt">
            <Badge :variant="folder.selfCollision ? 'success' : 'outline'">{{ folder.folder }}</Badge>
            <strong>count={{ folder.count }} · next={{ folder.nextHarmonicFolder }}</strong>
            <span>indices={{ folder.indices.join(',') }} · receipt={{ folder.receipt }}</span>
          </li>
        </ul>
      </TabsContent>

      <TabsContent value="metatron" class="diamond-tabs__content">
        <div class="diamond-readout">
          <Badge variant="default">metatron</Badge>
          <strong>{{ metatron.statement }}</strong>
          <span>|N|={{ metatron.nodes.length }} · |E|={{ metatron.edges.length }} · |Vortex|={{ metatron.vortex.length }}</span>
          <code>{{ metatron.root }}</code>
        </div>
        <ul class="diamond-lattice-list">
          <li v-for="node in metatron.nodes" :key="node.receipt">
            <Badge variant="outline">{{ node.ring }}</Badge>
            <strong>{{ node.id }} · folder={{ node.folder }}</strong>
            <span>x={{ node.x.toFixed(3) }} y={{ node.y.toFixed(3) }} receipt={{ node.receipt }}</span>
          </li>
        </ul>
        <ul class="diamond-lattice-list">
          <li v-for="point in metatron.vortex.slice(0, 24)" :key="point.receipt">
            <Badge :variant="Math.abs(point.interference) > 0.25 ? 'success' : 'outline'">{{ point.folder }}</Badge>
            <strong>i={{ point.index }} · interference={{ point.interference.toFixed(3) }}</strong>
            <span>in={{ point.inward.toFixed(3) }} out={{ point.outward.toFixed(3) }} receipt={{ point.receipt }}</span>
          </li>
        </ul>
      </TabsContent>

      <TabsContent value="build" class="diamond-tabs__content">
        <div class="diamond-readout">
          <Badge :variant="build.complete ? 'success' : 'warning'">
            {{ build.complete ? 'maxBuild closed' : 'maxBuild open' }}
          </Badge>
          <strong>{{ build.statement }}</strong>
          <span>
            T_max = {{ build.maxTamperingCostLog2 === Number.POSITIVE_INFINITY ? 'infinity' : build.maxTamperingCostLog2 }}
            · open = {{ build.openUnits.length ? build.openUnits.join(', ') : 'none' }}
          </span>
          <code>{{ build.root }}</code>
        </div>
        <ul class="diamond-lattice-list">
          <li v-for="unit in build.buildUnits" :key="unit.receipt">
            <Badge :variant="unit.closed ? 'success' : 'warning'">{{ unit.closed ? 'closed' : 'open' }}</Badge>
            <strong>{{ unit.name }} · {{ unit.sourceFunction }}</strong>
            <span>{{ unit.note }} Receipt: {{ unit.receipt }}</span>
          </li>
        </ul>
      </TabsContent>

      <TabsContent value="self" class="diamond-tabs__content">
        <div class="diamond-readout">
          <Badge :variant="selfCompletion.complete ? 'success' : 'warning'">
            {{ selfCompletion.complete ? 'closed' : 'open' }}
          </Badge>
          <strong>{{ selfCompletion.statement }}</strong>
          <span>{{ selfCompletion.boundary }}</span>
          <code>{{ selfCompletion.root }}</code>
        </div>
        <ul class="diamond-lattice-list">
          <li v-for="gate in selfCompletion.gates" :key="gate.receipt">
            <Badge :variant="gate.closed ? 'success' : 'warning'">{{ gate.closed ? 'closed' : 'open' }}</Badge>
            <strong>{{ gate.name }} · {{ gate.sourceFunction }}</strong>
            <span>{{ gate.note }} Receipt: {{ gate.receipt }}</span>
          </li>
        </ul>
      </TabsContent>

      <TabsContent value="agent" class="diamond-tabs__content">
        <div class="diamond-readout">
          <Badge :variant="agentWire.bound ? 'success' : 'warning'">
            {{ agentWire.bound ? 'bound' : 'open' }}
          </Badge>
          <strong>{{ agentWire.statement }}</strong>
          <span>{{ agentWire.boundary }}</span>
          <code>{{ agentWire.root }}</code>
        </div>
        <ul class="diamond-lattice-list">
          <li v-for="step in agentWire.steps" :key="step.receipt">
            <Badge variant="outline">{{ step.name }}</Badge>
            <strong>{{ step.sourceFunction }} · {{ step.diamondKind }}</strong>
            <span>{{ step.action }} Receipt: {{ step.receipt }}</span>
          </li>
        </ul>
      </TabsContent>

      <TabsContent value="lattice" class="diamond-tabs__content">
        <ul class="diamond-lattice-list">
          <li v-for="diamond in lattice" :key="diamond.id">
            <Badge :variant="diamond.status === 'closed' ? 'success' : 'warning'">{{ diamond.status }}</Badge>
            <strong>{{ diamond.title }}</strong>
            <span>{{ diamond.core }}</span>
          </li>
        </ul>
      </TabsContent>

      <TabsContent value="complete" class="diamond-tabs__content">
        <div class="diamond-readout">
          <Badge :variant="completeness.complete ? 'success' : 'warning'">
            {{ completeness.complete ? 'no analog gaps' : 'analog gaps' }}
          </Badge>
          <strong>{{ completeness.statement }}</strong>
          <span>
            {{ completeness.presentKinds.length }}/{{ completeness.requiredKinds.length }} kinds ·
            {{ completeness.analogChannels.length }}/{{ completeness.analogChannels.length + completeness.missingAnalogChannels.length }} channels ·
            pi coverage {{ completeness.piTrainCoversAllKinds ? 'complete' : 'open' }}
          </span>
        </div>
        <ul class="diamond-facets">
          <li>
            <Badge variant="outline">kinds</Badge>
            <strong>{{ completeness.presentKinds.join(', ') }}</strong>
            <span>Missing: {{ completeness.missingKinds.length ? completeness.missingKinds.join(', ') : 'none' }}</span>
          </li>
          <li>
            <Badge variant="outline">channels</Badge>
            <strong>{{ completeness.analogChannels.join(', ') }}</strong>
            <span>Missing: {{ completeness.missingAnalogChannels.length ? completeness.missingAnalogChannels.join(', ') : 'none' }}</span>
          </li>
          <li>
            <Badge variant="outline">poles</Badge>
            <strong>{{ completeness.missingPoles.length ? 'open' : 'north/east/south/west closed' }}</strong>
            <span>Missing poles: {{ completeness.missingPoles.length ? completeness.missingPoles.join(', ') : 'none' }}</span>
          </li>
          <li>
            <Badge variant="outline">receipts</Badge>
            <strong>{{ completeness.missingReceipts.length ? 'open' : 'all present' }}</strong>
            <span>Missing receipts: {{ completeness.missingReceipts.length ? completeness.missingReceipts.join(', ') : 'none' }}</span>
          </li>
        </ul>
      </TabsContent>

      <TabsContent value="evidence" class="diamond-tabs__content">
        <div class="diamond-readout">
          <Badge :variant="evidence.grounded ? 'success' : 'warning'">
            {{ evidence.grounded ? 'grounded' : 'ungrounded' }}
          </Badge>
          <strong>{{ evidence.statement }}</strong>
          <span>{{ evidence.boundary }}</span>
          <code>{{ evidence.root }}</code>
        </div>
        <ul class="diamond-lattice-list">
          <li v-for="item in evidence.useCases" :key="item.receipt">
            <Badge variant="outline">{{ item.diamondKind }}</Badge>
            <strong>{{ item.name }} · {{ item.sourceFunction }}</strong>
            <span>{{ item.component }}: {{ item.interaction }} Evidence: {{ item.evidence }}</span>
          </li>
        </ul>
      </TabsContent>

      <TabsContent value="waves" class="diamond-tabs__content">
        <div class="diamond-readout">
          <Badge variant="default">{{ waves.symbol }}</Badge>
          <strong>{{ waves.statement }}</strong>
          <code>{{ waves.root }}</code>
        </div>
        <ul class="diamond-lattice-list">
          <li v-for="wave in waves.waves" :key="wave.receipt">
            <Badge :variant="wave.polarity === 'yin' ? 'outline' : 'success'">{{ wave.polarity }}</Badge>
            <strong>{{ wave.diamondKind }} · phase {{ wave.phase.toFixed(3) }}</strong>
            <span>{{ wave.statement }} Frequency {{ wave.frequency }}Hz · amplitude {{ wave.amplitude.toFixed(3) }}</span>
          </li>
        </ul>
      </TabsContent>

      <TabsContent value="closure" class="diamond-tabs__content">
        <div class="diamond-readout">
          <Badge :variant="closure.complete ? 'success' : 'warning'">
            {{ closure.complete ? 'closed' : 'open' }}
          </Badge>
          <strong>{{ closure.statement }}</strong>
          <span>Targets: {{ closure.gaps.length ? closure.gaps.join(', ') : 'none' }}</span>
          <code>{{ closure.root }}</code>
        </div>
        <ul class="diamond-lattice-list">
          <li v-for="item in closure.waves" :key="item.receipt">
            <Badge :variant="item.closed ? 'success' : 'warning'">{{ item.gapKind }}</Badge>
            <strong>{{ item.target }}</strong>
            <span>{{ item.action }} · receipt {{ item.receipt }}</span>
          </li>
        </ul>
      </TabsContent>

      <TabsContent value="chess" class="diamond-tabs__content">
        <div class="diamond-readout">
          <Badge variant="default">quantum board</Badge>
          <strong>{{ chess.statement }}</strong>
          <code>{{ chess.root }}</code>
        </div>
        <div class="quantum-chess-board" aria-label="Quantum chess board">
          <div
            v-for="square in chess.board"
            :key="square.square"
            class="quantum-chess-square"
            :class="[`quantum-chess-square--${square.color}`, `quantum-chess-square--${square.wave.polarity}`]"
            :title="`${square.square}: ${square.superposition.join(' + ')}`"
          >
            <strong>{{ square.square }}</strong>
            <span>{{ square.superposition.join('/') }}</span>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="schema" class="diamond-tabs__content">
        <div class="diamond-readout">
          <Badge variant="default">schema.org</Badge>
          <strong>{{ schema.statement }}</strong>
          <span>{{ schema.nodes.length }} nodes · {{ schema.boundary }}</span>
          <code>{{ schema.root }}</code>
        </div>
        <ul class="diamond-lattice-list">
          <li v-for="node in schema.nodes.slice(0, 24)" :key="node['@id']">
            <Badge variant="outline">{{ node['@type'] }}</Badge>
            <strong>{{ node.name }}</strong>
            <span>{{ node.description }} Identifier: {{ node.identifier }}</span>
          </li>
        </ul>
        <pre class="schema-json">{{ schemaJson }}</pre>
      </TabsContent>

      <TabsContent value="science" class="diamond-tabs__content">
        <div class="diamond-readout">
          <Badge :variant="science.grounded ? 'success' : 'warning'">
            {{ science.grounded ? 'grounded society' : 'open society' }}
          </Badge>
          <strong>{{ science.charter }}</strong>
          <span>{{ science.boundary }}</span>
          <code>{{ science.root }}</code>
        </div>
        <ul class="diamond-lattice-list">
          <li v-for="role in science.roles" :key="role.receipt">
            <Badge variant="outline">{{ role.name }}</Badge>
            <strong>{{ role.responsibility }}</strong>
            <span>{{ role.gate }} Receipt: {{ role.receipt }}</span>
          </li>
        </ul>
        <ul class="diamond-lattice-list">
          <li v-for="gate in science.reviewGates" :key="gate.receipt">
            <Badge :variant="gate.closed ? 'success' : 'warning'">{{ gate.closed ? 'closed' : 'open' }}</Badge>
            <strong>{{ gate.name }} · {{ gate.sourceFunction }}</strong>
            <span>{{ gate.note }} Receipt: {{ gate.receipt }}</span>
          </li>
        </ul>
        <ul class="diamond-lattice-list">
          <li v-for="wave in science.optimizationWaves" :key="wave.receipt">
            <Badge variant="outline">{{ wave.action }}</Badge>
            <strong>{{ wave.target }} · {{ wave.metric }}</strong>
            <span>{{ wave.sourceFunction }} Receipt: {{ wave.receipt }}</span>
          </li>
        </ul>
        <ul class="diamond-lattice-list">
          <li v-for="cohort in science.cohorts" :key="cohort.receipt">
            <Badge variant="outline">{{ cohort.cohort }}</Badge>
            <strong>{{ cohort.purpose }}</strong>
            <span>
              develops={{ cohort.develops.join(', ') }};
              coordinates={{ cohort.coordinatesWith.join(', ') }};
              receipt={{ cohort.receipt }}
            </span>
          </li>
        </ul>
        <ul class="diamond-lattice-list">
          <li v-for="solid in science.solids" :key="solid.receipt">
            <Badge variant="outline">{{ solid.solid }}</Badge>
            <strong>{{ solid.builder }} · F{{ solid.faces }} E{{ solid.edges }} V{{ solid.vertices }}</strong>
            <span>{{ solid.method }} Receipt: {{ solid.receipt }}</span>
          </li>
        </ul>
      </TabsContent>

      <TabsContent value="methods" class="diamond-tabs__content">
        <div class="diamond-readout">
          <Badge :variant="methods.fused ? 'success' : 'warning'">
            {{ methods.fused ? 'fused' : 'open' }}
          </Badge>
          <strong>{{ methods.law }}</strong>
          <span>open={{ methods.open.length ? methods.open.join(', ') : 'none' }}</span>
          <code>{{ methods.root }}</code>
        </div>
        <ul class="diamond-lattice-list">
          <li v-for="token in methods.tokens" :key="token.receipt">
            <Badge :variant="token.single ? 'success' : 'warning'">{{ token.method }}</Badge>
            <strong>{{ token.command }}</strong>
            <span>{{ token.source }} Receipt: {{ token.receipt }}</span>
          </li>
        </ul>
      </TabsContent>

      <TabsContent value="traditions" class="diamond-tabs__content">
        <div class="diamond-readout">
          <Badge :variant="traditions.grounded ? 'success' : 'warning'">
            {{ traditions.grounded ? 'grounded lens' : 'open lens' }}
          </Badge>
          <strong>{{ traditions.statement }}</strong>
          <span>{{ traditions.boundary }}</span>
          <code>{{ traditions.root }}</code>
        </div>
        <ul class="diamond-lattice-list">
          <li v-for="dimension in traditions.dimensions" :key="dimension.name">
            <Badge variant="outline">{{ dimension.diamondPole }}</Badge>
            <strong>{{ dimension.name }} · {{ dimension.question }}</strong>
            <span>{{ dimension.caution }}</span>
          </li>
        </ul>
        <ul class="diamond-lattice-list">
          <li v-for="family in traditions.families" :key="family.receipt">
            <Badge variant="outline">{{ family.name }}</Badge>
            <strong>{{ family.examples.join(', ') }}</strong>
            <span>{{ family.lens }} Boundary: {{ family.boundary }}</span>
          </li>
        </ul>
        <ul class="diamond-lattice-list">
          <li v-for="cell in traditions.societyCells" :key="cell.receipt">
            <Badge variant="outline">{{ cell.dimension }}</Badge>
            <strong>{{ cell.family }} -> {{ cell.societyFunction }}</strong>
            <span>{{ cell.interaction }} Boundary: {{ cell.boundary }} Receipt: {{ cell.receipt }}</span>
          </li>
        </ul>
      </TabsContent>

      <TabsContent value="controls" class="diamond-tabs__content">
        <div class="diamond-controls">
          <Button type="button" @click="start">Start pi train</Button>
          <Button type="button" variant="outline" @click="stop">Pause</Button>
          <Button type="button" variant="ghost" @click="reset">Reset</Button>
        </div>
        <div class="diamond-toggles">
          <label>
            <input v-model="audioEnabled" type="checkbox" />
            sound
          </label>
          <label>
            <input v-model="vibrationEnabled" type="checkbox" />
            device vibration
          </label>
        </div>
        <p class="quantum-mind__note">
          audio || vibration => userGesture && browserSupport. root_pi =
          <code>{{ piTrain.root }}</code>.
        </p>
      </TabsContent>
    </TabsRoot>

    <CollapsibleRoot v-model:open="expanded" class="diamond-collapsible">
      <CollapsibleTrigger as-child>
        <Button variant="ghost" size="sm">{{ expanded ? 'Hide' : 'Show' }} pi train digits</Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <p class="pi-train-digits">{{ piTrain.digits }}</p>
      </CollapsibleContent>
    </CollapsibleRoot>
  </Card>
</template>
