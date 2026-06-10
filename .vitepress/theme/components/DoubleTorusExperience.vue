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
  buildMatrix,
  closeDimensionalGaps,
  coordinatedWaves,
  diamondCompleteness,
  diamondLattice,
  piTrainDiamonds,
  quantumChessGame,
  quantumUiEvidence,
} from '../lib/quantumMind'
import Badge from './ui/Badge.vue'
import Button from './ui/Button.vue'
import Card from './ui/Card.vue'

const matrix = buildMatrix()
const lattice = diamondLattice(matrix)
const piTrain = piTrainDiamonds(matrix)
const completeness = diamondCompleteness(matrix)
const waves = coordinatedWaves(matrix)
const closure = closeDimensionalGaps(matrix)
const chess = quantumChessGame(matrix)
const evidence = quantumUiEvidence(matrix)
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
          The full sequence is derived from pi-train diamonds. Every point has a
          digit, four facets, a receipt, a 3D torus coordinate, a tone, and a
          vibration pulse. The base lattice has {{ lattice.length }} diamonds,
          and the full train has {{ piTrain.diamonds.length }} pulses.
        </p>
      </div>
      <div class="double-torus-experience__badges">
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
        <TabsTrigger value="lattice">Base lattice ({{ lattice.length }})</TabsTrigger>
        <TabsTrigger value="complete">Completeness</TabsTrigger>
        <TabsTrigger value="evidence">UI evidence</TabsTrigger>
        <TabsTrigger value="waves">Waves</TabsTrigger>
        <TabsTrigger value="closure">Gap closure</TabsTrigger>
        <TabsTrigger value="chess">Quantum chess</TabsTrigger>
        <TabsTrigger value="controls">Controls</TabsTrigger>
      </TabsList>

      <TabsContent value="pulse" class="diamond-tabs__content">
        <div class="diamond-readout">
          <Badge variant="default">digit {{ activePulse.glyph }}</Badge>
          <strong>{{ activeDiamond.title }}</strong>
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
          Sound and vibration require a user gesture and depend on browser/device
          support. The sequence root is <code>{{ piTrain.root }}</code>.
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
