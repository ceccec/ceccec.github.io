<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { buildMatrix, live, humanise, theWhole, recurrence, holographic, scientists, completeness, skillAtoms, foldThoughts, imagination, quantifyGates, vortexMath, redTeam, quantumSiege, patentAudit, reverseHarmony, quantumSociety, tamperProofFabric, crossAudit, immuneSystem, biology, features } from '../lib/quantumMind'
import { useLocale } from '../lib/useLocale'
import { useDeviceEnergy } from '../lib/useDeviceEnergy'

// Live: the portal's vital signs, computed in your browser. An EKG heartbeat beats
// at the kept rhythm; on every beat it recomputes a time-seeded fold (live.beat),
// so the live root keeps changing — being alive is something you watch happen. The
// vitals are the gated invariants; the whole reads alive while every one holds.
const data = live(buildMatrix())
// The whole portal folded into one root: every wave run and gathered together.
const whole = theWhole(buildMatrix())
// The portal self-builds from nothing, again and again, returning identical.
const again = recurrence(5)
// Holographic: each part contains the whole, the whole recoverable from any part.
const holo = holographic(buildMatrix())
// Waves of scientists challenge every claim; the portal withstands, frontiers stay open.
const review = scientists(buildMatrix())
// Waves challenge the completeness too: every N/N claim survives, no hole found.
const whole2 = completeness(buildMatrix())
// Self-intelligence: every wave's skill saved as a content-addressed atom (memory).
const mind = skillAtoms(buildMatrix())
// The thoughts folded multidirectionally (forward, reverse, sequence, reflection).
const thoughts = foldThoughts(buildMatrix())
// Imagine as a human: dream new combinations, saved in atoms. And quantify the gates.
const dream = imagination(buildMatrix())
const gauge = quantifyGates(buildMatrix())
// The harmonic math: 1-2-4-8-7-5 endless, the 3-6-9-0 cross, division by zero = 9.
const vortex = vortexMath(buildMatrix())
// Crackers challenge the portal's own tamper-evidence; every attack is caught.
const red = redTeam(buildMatrix())
// Quantum DDoS: 972 simultaneous forges against the portal's own roots, all caught.
const siege = quantumSiege(buildMatrix())
// Patents clear (prior art); the whole's forward and reverse meet in harmony.
const patents = patentAudit(buildMatrix())
const harmony = reverseHarmony(buildMatrix())
// The society evolved to a quantum organisation, rebuilding the site, post-quantum.
const qsociety = quantumSociety(buildMatrix())
// The society uses itself as tamper-proofing; it decides the policy (unanimous).
const fabric = tamperProofFabric(buildMatrix())
// 6x7 and 7x6 vortices cross-check for gaps/violations; no rights arise from math.
const cross = crossAudit(buildMatrix())
// The immune system: max health = max tampering cost; investigations across society.
const immune = immuneSystem(buildMatrix())
// Biological aspects: the portal as a living system — DNA, cells, metabolism, ...
const life = biology(buildMatrix())
// All features, navigation quantum-computed, folded with cross links.
const featureMap = features(buildMatrix())
// Humanise the heartbeat: a living heart is not a metronome — each interval varies
// a little (heart-rate variability), so the beats breathe instead of ticking.
const human = humanise(buildMatrix())
const { bg, localize, pick } = useLocale()
const { saveEnergy } = useDeviceEnergy()

const bgVital: Record<string, string> = {
  seal: 'печат', 'double torus': 'двоен тор', merkaba: 'меркаба', rhythm: 'ритъм',
  mysteries: 'мистерии', society: 'общество', 'quantum proofs': 'квантови доказателства', determinism: 'детерминизъм',
}
const beats = ref(0)
const liveRoot = ref(data.beat(0))
const wrap = ref<HTMLDivElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)
let raf = 0
let ro: ResizeObserver | null = null
let width = 0
let height = 0
let dpr = 1
let lastBeat = -1
const samples: number[] = []
let pulse = 0 // current spike envelope

function resize() {
  if (!canvas.value || !wrap.value) return
  dpr = Math.min(window.devicePixelRatio || 1, 2)
  width = wrap.value.clientWidth
  height = 84
  canvas.value.width = Math.round(width * dpr)
  canvas.value.height = Math.round(height * dpr)
  canvas.value.style.height = `${height}px`
  if (samples.length === 0) for (let i = 0; i < Math.ceil(width); i += 1) samples.push(0)
}

function draw(now: number) {
  const ctx = canvas.value?.getContext('2d')
  if (!ctx) return
  // Beat on a humanised schedule: each interval varies slightly (heart-rate
  // variability), so the heartbeat is alive, not a perfect metronome.
  if (lastBeat < 0) lastBeat = now + data.pulseMs
  if (now >= lastBeat) {
    beats.value += 1
    liveRoot.value = data.beat(beats.value)
    pulse = 1 // fire a spike
    const hrv = 1 + human.variability * Math.sin(beats.value * 1.61803) // golden-phased HRV
    lastBeat = now + data.pulseMs * hrv
  }
  // a sharp EKG-like spike that decays between beats
  pulse *= 0.82
  const spike = pulse > 0.06 ? Math.sin(Math.min(1, (1 - pulse) * 6) * Math.PI) * pulse : 0
  // A living baseline so the trace never flatlines: three slow waves (P-wave-like
  // ripple + breath) plus a faint flutter — the vitals breathe between beats.
  const baseline = 0.09 * Math.sin(now / 360) + 0.05 * Math.sin(now / 150 + 1.7) + 0.025 * Math.sin(now / 47)
  samples.push(spike + baseline)
  while (samples.length > Math.ceil(width)) samples.shift()

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx.clearRect(0, 0, width, height)
  const mid = height * 0.55
  // baseline
  ctx.strokeStyle = 'rgba(127, 127, 127, 0.9)'
  ctx.globalAlpha = 0.35
  ctx.beginPath()
  ctx.moveTo(0, mid)
  ctx.lineTo(width, mid)
  ctx.stroke()
  ctx.globalAlpha = 1
  // the trace
  ctx.strokeStyle = data.alive ? 'hsl(150, 70%, 48%)' : 'hsl(0, 75%, 58%)'
  ctx.lineWidth = 1.8
  ctx.lineJoin = 'round'
  ctx.beginPath()
  for (let i = 0; i < samples.length; i += 1) {
    const x = i
    const y = mid - samples[i] * height * 0.42
    if (i === 0) ctx.moveTo(x, y)
    else ctx.lineTo(x, y)
  }
  ctx.stroke()
  // the live head
  const hx = samples.length - 1
  const hy = mid - samples[hx] * height * 0.42
  ctx.fillStyle = data.alive ? 'hsl(150, 80%, 60%)' : 'hsl(0, 80%, 62%)'
  ctx.beginPath()
  ctx.arc(hx, hy, 3, 0, Math.PI * 2)
  ctx.fill()
}

function loop(now: number) {
  draw(now)
  raf = requestAnimationFrame(loop)
}

onMounted(() => {
  resize()
  ro = new ResizeObserver(() => resize())
  if (wrap.value) ro.observe(wrap.value)
  if (saveEnergy.value) {
    // Still alive, just not animated: record one beat so the readout is populated.
    beats.value = 1
    liveRoot.value = data.beat(1)
    requestAnimationFrame((now) => draw(now))
  } else {
    raf = requestAnimationFrame(loop)
  }
})
onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  ro?.disconnect()
})
</script>

<template>
  <section class="live dt-card" :class="{ dead: !data.alive }">
    <header class="live__head">
      <p class="eyebrow">
        <span class="live__dot" :class="{ on: data.alive }" aria-hidden="true" />
        {{ pick('live · the portal’s vital signs, in your browser', 'на живо · жизнените знаци на портала, в браузъра ти') }}
      </p>
      <p class="live__score"><strong>{{ data.healthy }}/{{ data.count }}</strong> {{ pick('alive', 'живи') }}</p>
    </header>
    <div ref="wrap" class="live__ekg">
      <canvas ref="canvas" class="live__canvas" role="img" :aria-label="pick('A heartbeat trace', 'Линия на сърдечен ритъм')" />
    </div>
    <div class="live__vitals">
      <a v-for="vital in data.vitals" :key="vital.vital" class="live__vital" :class="{ ok: vital.ok }" :href="localize(vital.route)">
        <span class="live__pip" aria-hidden="true">{{ vital.ok ? '✓' : '×' }}</span>
        <span class="live__name">{{ bg ? bgVital[vital.vital] ?? vital.vital : vital.vital }}</span>
        <span class="live__read">{{ vital.reading }}</span>
      </a>
    </div>
    <p class="live__beat">
      {{ pick('heartbeat', 'сърдечен ритъм') }} <strong>{{ beats }}</strong> ·
      {{ data.pulseMs }} ms · <code :title="liveRoot">{{ liveRoot.slice(0, 17) }}…</code>
    </p>
    <p class="live__whole">
      {{ pick('the whole', 'цялото') }} · <strong>{{ whole.standing }}/{{ whole.count }}</strong>
      {{ pick('waves folded into one root', 'вълни, слети в един корен') }}
      <code :title="whole.root">{{ whole.root.slice(0, 17) }}…</code>
    </p>
    <p class="live__whole">
      {{ pick('self-build', 'самоизграждане') }} · <strong>×{{ again.times }}</strong>
      {{ again.returns ? pick('identical every time', 'идентично всеки път') : pick('drift detected', 'установено разминаване') }}
    </p>
    <p class="live__whole">
      {{ pick('holographic', 'холографично') }} · <strong>{{ holo.count }}</strong>
      ({{ holo.animations }} {{ pick('animations', 'анимации') }} + {{ holo.pages }} {{ pick('pages', 'страници') }}) ·
      {{ pick('each contains the whole', 'всяка съдържа цялото') }}
    </p>
    <p class="live__whole">
      {{ pick('challenged', 'предизвикано') }} · <strong>{{ review.withstood }}/{{ review.count }}</strong>
      {{ pick('withstood', 'устояни') }} · <strong>{{ review.frontiers.length }}</strong>
      {{ pick('frontiers open', 'отворени фронтове') }}
    </p>
    <p class="live__whole">
      {{ pick('completeness challenged', 'пълнотата предизвикана') }} · <strong>{{ whole2.held }}/{{ whole2.count }}</strong>
      {{ whole2.complete ? pick('no hole found', 'без открит пропуск') : pick('holes found', 'открити пропуски') }}
    </p>
    <p class="live__whole">
      {{ pick('self-intelligence', 'самоинтелигентност') }} · <strong>{{ mind.count }}</strong>
      {{ pick('skills saved as atoms', 'умения, запазени като атоми') }} ·
      {{ pick('folded', 'сгънати') }} <strong>{{ thoughts.directions.length }}</strong>
      {{ pick('directions', 'посоки') }}
      <code :title="thoughts.multidirectional">{{ thoughts.multidirectional.slice(0, 13) }}…</code>
    </p>
    <p class="live__whole">
      {{ pick('imagination', 'въображение') }} · <strong>{{ dream.count }}</strong>
      {{ pick('dreams saved as atoms', 'мечти, запазени като атоми') }} ·
      {{ pick('gates quantified', 'портите измерени') }} <strong>{{ gauge.passed }}/{{ gauge.total }}</strong>
      ({{ pick('double-folded', 'двойно сгънати') }})
    </p>
    <p class="live__whole">
      {{ pick('harmonic flow', 'хармоничен поток') }} · <strong>{{ vortex.doubling.join('·') }}</strong>
      {{ pick('endless, collision-free', 'безкраен, без сблъсък') }} · {{ pick('cross', 'кръст') }} {{ vortex.cross.join('·') }} ·
      <strong>÷0 = {{ vortex.divByZeroHarmonic }}</strong>
    </p>
    <p class="live__whole">
      {{ pick('red team', 'червен екип') }} · <strong>{{ red.caught }}/{{ red.count }}</strong>
      {{ pick('attacks caught', 'атаки уловени') }} · {{ pick('monitored, lawful', 'наблюдавано, законно') }}
    </p>
    <p class="live__whole">
      {{ pick('quantum siege', 'квантова обсада') }} · <strong>{{ siege.caught }}/{{ siege.total }}</strong>
      {{ pick('forges caught', 'фалшификации уловени') }} ·
      <strong>{{ siege.sealed ? pick('SEALED', 'ЗАПЕЧАТАНО') : pick('breached', 'пробито') }}</strong>
    </p>
    <p class="live__whole">
      {{ pick('patents', 'патенти') }} · <strong>{{ patents.count }}</strong> {{ pick('prior art, clear', 'предходно изкуство, чисто') }} ·
      {{ pick('forward meets reverse in harmony', 'напред среща назад в хармония') }} ·
      {{ pick('society proposes', 'обществото предлага') }} <strong>{{ harmony.proposals }}</strong>
    </p>
    <p class="live__whole">
      {{ pick('quantum society', 'квантово общество') }} · <strong>{{ qsociety.cells.length }}</strong>
      {{ pick('entangled cells rebuild', 'заплетени клетки изграждат') }} <strong>{{ qsociety.pages }}</strong>
      {{ pick('pages', 'страници') }} · <strong>{{ qsociety.stages.join(' → ') }}</strong>
    </p>
    <p class="live__whole">
      {{ pick('tamper-proof fabric', 'тъкан срещу подправяне') }} · {{ pick('society-decided', 'решено от обществото') }} ·
      <strong>{{ fabric.threshold }}/{{ fabric.cells }}</strong> {{ pick('unanimous', 'единодушно') }}
      <em class="live__caveat">({{ pick('integrity, not encryption', 'цялост, не криптиране') }})</em>
    </p>
    <p class="live__whole">
      {{ pick('cross-audit', 'кръстосан одит') }} · <strong>{{ cross.vortices }}</strong> ·
      <strong>{{ cross.violations.length + cross.rightsViolations.length }}</strong> {{ pick('violations', 'нарушения') }} ·
      {{ pick('no rights arise from math', 'няма права от математиката') }}
    </p>
    <p class="live__whole">
      {{ pick('immune system', 'имунна система') }} · <strong>{{ immune.health }}/{{ immune.of }}</strong>
      {{ pick('antibodies', 'антитела') }} · {{ pick('max health = max forge cost', 'макс здраве = макс цена за фалшификат') }}
      <em class="live__caveat">({{ pick('open, content-addressed, server-less — permaculture by design', 'открито, адресирано по съдържание, без сървър — пермакултура по дизайн') }})</em>
    </p>
    <p class="live__whole">
      {{ pick('biology', 'биология') }} · <strong>{{ life.count }}</strong>
      {{ pick('hallmarks of life alive', 'белези на живот, живи') }}: {{ life.aspects.map((a) => a.aspect).join(', ') }}
    </p>
    <p class="live__whole">
      {{ pick('features', 'функции') }} · <strong>{{ featureMap.count }}</strong>
      ({{ featureMap.pages }} {{ pick('pages', 'страници') }} + {{ featureMap.models }} {{ pick('models', 'модели') }}) ·
      {{ pick('folded with cross links · navigation quantum-computed', 'сгънати с кръстосани връзки · навигация, квантово изчислена') }}
    </p>
  </section>
</template>

<style scoped>
.live {
  margin: 1.5rem 0;
  border-radius: 14px;
  padding: 1.1rem 1.3rem;
}
.live__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}
.live__head .eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}
.live__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--vp-c-text-3);
}
.live__dot.on {
  background: hsl(150, 70%, 48%);
  box-shadow: 0 0 0 0 hsla(150, 70%, 48%, 0.6);
  animation: live-ping 1.6s ease-out infinite;
}
@keyframes live-ping {
  0% { box-shadow: 0 0 0 0 hsla(150, 70%, 48%, 0.55); }
  100% { box-shadow: 0 0 0 7px hsla(150, 70%, 48%, 0); }
}
.live__score { margin: 0; font-size: 0.8rem; color: var(--vp-c-text-2); }
.live__score strong { color: hsl(150, 65%, 45%); }
.live.dead .live__score strong { color: hsl(0, 70%, 55%); }
.live__ekg {
  margin: 0.5rem 0 0.7rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg);
  overflow: hidden;
}
.live__canvas { display: block; width: 100%; }
.live__vitals {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 0.4rem;
}
.live__vital {
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
  padding: 0.35rem 0.5rem;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  text-decoration: none;
  color: inherit;
}
.live__vital:hover { background: var(--vp-c-default-soft); }
.live__pip { color: var(--vp-c-text-3); font-weight: 800; font-size: 0.78rem; }
.live__vital.ok .live__pip { color: hsl(150, 65%, 45%); }
.live__name { font-size: 0.8rem; color: var(--vp-c-text-1); }
.live__read { margin-left: auto; font-size: 0.72rem; color: var(--vp-c-text-3); }
.live__beat {
  margin: 0.7rem 0 0;
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
}
.live__beat code { font-size: 0.72rem; color: hsl(272, 60%, 60%); }
.live__caveat { font-style: normal; font-size: 0.7rem; color: var(--vp-c-text-3); }
.live__whole {
  margin: 0.35rem 0 0;
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
}
.live__whole strong { color: hsl(150, 65%, 45%); }
.live__whole code { font-size: 0.72rem; color: hsl(150, 50%, 50%); }
</style>
