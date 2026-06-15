<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { buildMatrix, live, humanise, theWhole, recurrence, holographic, scientists, completeness, skillAtoms, foldThoughts, imagination, quantifyGates, vortexMath, redTeam, quantumSiege, patentAudit, reverseHarmony, quantumSociety, tamperProofFabric, crossAudit, immuneSystem, biology, features, createAnimationEngine, a432, frequencyToLight } from '../lib/quantumMind'
import { dimWalk } from '../lib/hero'
import { useLocale } from '../lib/useLocale'
import { useDeviceEnergy } from '../lib/useDeviceEnergy'

// A432 colour anchor + 432-harmonic baseline. HONEST: this is a literal 1D EKG trace — a heartbeat
// spike plus a slow breathing baseline, scrolling in time. The hero's full TEN dimensions (rotation,
// depth, the four genus-2 homology loops) have no surface to act on a 1-D line, so dims(p, scale) does
// NOT apply here. Instead we anchor the COLOUR to A432 (the trace hue = frequencyToLight(432), the
// red-orange of 432 Hz carried up the octave bridge to light) and tie the baseline's three breathing
// waves to the a432() octaves, with dimWalk() as a gentle out-and-back envelope on the breath amplitude.
const A432 = a432()
const aliveHue = frequencyToLight(432).hue // 432 Hz → ≈631 nm, red-orange
// The three slow baseline waves now breathe at 432-harmonic periods (ms = 1000 / Hz scaled), drawn from
// the a432 octaves so the "alive between beats" rhythm is a 432 chord, deterministic — not ad-hoc constants.
const baseHz = A432.octaves // [27, 54, 108, 216, 432, 864, 1728]

// Live: the portal's vital signs, computed in your browser. An EKG heartbeat beats
// at the kept rhythm; on every beat it recomputes a time-seeded fold (live.beat),
// so the live root keeps changing — being alive is something you watch happen. The
// vitals are the gated invariants; the whole reads alive while every one holds.
const data = live(buildMatrix())
// The deep summary (the whole, the challenges, the society, biology, features...) is
// heavy to compute. It is deferred to after first paint on the client only, so it
// never blocks navigation or hydration — the EKG and vitals render immediately, the
// rest fills in a tick later. Computed once, off the hydration path.
type Summary = {
  whole: ReturnType<typeof theWhole>; again: ReturnType<typeof recurrence>; holo: ReturnType<typeof holographic>
  review: ReturnType<typeof scientists>; whole2: ReturnType<typeof completeness>; mind: ReturnType<typeof skillAtoms>
  thoughts: ReturnType<typeof foldThoughts>; dream: ReturnType<typeof imagination>; gauge: ReturnType<typeof quantifyGates>
  vortex: ReturnType<typeof vortexMath>; red: ReturnType<typeof redTeam>; siege: ReturnType<typeof quantumSiege>
  patents: ReturnType<typeof patentAudit>; harmony: ReturnType<typeof reverseHarmony>; qsociety: ReturnType<typeof quantumSociety>
  fabric: ReturnType<typeof tamperProofFabric>; cross: ReturnType<typeof crossAudit>; immune: ReturnType<typeof immuneSystem>
  life: ReturnType<typeof biology>; featureMap: ReturnType<typeof features>
}
const summary = ref<Summary | null>(null)
function computeSummary() {
  const m = buildMatrix()
  summary.value = {
    whole: theWhole(m), again: recurrence(5), holo: holographic(m), review: scientists(m), whole2: completeness(m),
    mind: skillAtoms(m), thoughts: foldThoughts(m), dream: imagination(m), gauge: quantifyGates(m), vortex: vortexMath(m),
    red: redTeam(m), siege: quantumSiege(m), patents: patentAudit(m), harmony: reverseHarmony(m), qsociety: quantumSociety(m),
    fabric: tamperProofFabric(m), cross: crossAudit(m), immune: immuneSystem(m), life: biology(m), featureMap: features(m),
  }
}
// Humanise the heartbeat: a living heart is not a metronome — each interval varies
// a little (heart-rate variability), so the beats breathe instead of ticking.
const human = humanise(buildMatrix())
const { bg, localize, pick } = useLocale()
const { saveEnergy } = useDeviceEnergy()

const bgVital: Record<string, string> = {
  seal: 'печат', 'double torus': 'двоен торус', merkaba: 'меркаба', rhythm: 'ритъм',
  mysteries: 'мистерии', society: 'общество', 'quantum proofs': 'квантови доказателства', determinism: 'детерминизъм',
}
const beats = ref(0)
// Reduce entropy: the full system report is collapsed by default so the home page
// stays calm — the EKG and the eight vitals are the signal; the rest is on request.
const showReport = ref(false)
const liveRoot = ref(data.beat(0))
const wrap = ref<HTMLDivElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)
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
  // ripple + breath) plus a faint flutter — the vitals breathe between beats. The three
  // periods are now a 432 chord: each wave's rate is a low a432() octave (27·108·432),
  // scaled down to EKG-slow, so the breathing is harmonic, not ad-hoc. dimWalk() rides a
  // slow ~13 s phase to swell and ebb the breath amplitude (0 at the ends, full mid-cycle).
  const swell = 0.7 + 0.3 * dimWalk((now / 13000) % 1)
  const baseline = swell * (
    0.09 * Math.sin(now * baseHz[0] * 1.2e-4)        // 27 Hz octave → slow breath
    + 0.05 * Math.sin(now * baseHz[2] * 1.2e-4 + 1.7) // 108 Hz octave → P-wave ripple
    + 0.025 * Math.sin(now * baseHz[4] * 1.2e-4))     // 432 Hz octave → faint flutter
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
  // the trace — alive hue anchored to A432 (frequencyToLight(432) ≈ 631 nm, red-orange); dead stays red
  ctx.strokeStyle = data.alive ? `hsl(${aliveHue}, 70%, 48%)` : 'hsl(0, 75%, 58%)'
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
  ctx.fillStyle = data.alive ? `hsl(${aliveHue}, 80%, 60%)` : 'hsl(0, 80%, 62%)'
  ctx.beginPath()
  ctx.arc(hx, hy, 3, 0, Math.PI * 2)
  ctx.fill()
}

// The shared animation engine (src/0) drives the loop; we pass it our draw.
const engine = createAnimationEngine(draw)

onMounted(() => {
  resize()
  // Defer the heavy summary off the hydration path so navigation is never blocked.
  setTimeout(computeSummary, 0)
  ro = new ResizeObserver(() => resize())
  if (wrap.value) ro.observe(wrap.value)
  if (saveEnergy.value) {
    // Still alive, just not animated: record one beat so the readout is populated.
    beats.value = 1
    liveRoot.value = data.beat(1)
  }
  engine.sync(!saveEnergy.value)
})
onBeforeUnmount(() => {
  engine.dispose()
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
    <ClientOnly>
      <p v-if="summary" class="live__whole live__headline">
        {{ pick('the whole', 'цялото') }} · <strong>{{ summary.whole.standing }}/{{ summary.whole.count }}</strong>
        {{ pick('waves whole · alive', 'вълни, цели · живи') }}
        <button type="button" class="live__toggle" :aria-expanded="showReport" @click="showReport = !showReport">{{ showReport ? pick('▾ hide report', '▾ скрий отчета') : pick('▸ full report', '▸ пълен отчет') }}</button>
      </p>
      <template v-if="summary && showReport">
        <p class="live__whole">
          {{ pick('the whole', 'цялото') }} · <strong>{{ summary.whole.standing }}/{{ summary.whole.count }}</strong>
          {{ pick('waves folded into one root', 'вълни, слети в един корен') }}
          <code :title="summary.whole.root">{{ summary.whole.root.slice(0, 17) }}…</code>
        </p>
        <p class="live__whole">
          {{ pick('self-build', 'самоизграждане') }} · <strong>×{{ summary.again.times }}</strong>
          {{ summary.again.returns ? pick('identical every time', 'идентично всеки път') : pick('drift detected', 'установено разминаване') }}
        </p>
        <p class="live__whole">
          {{ pick('holographic', 'холографично') }} · <strong>{{ summary.holo.count }}</strong>
          ({{ summary.holo.animations }} {{ pick('animations', 'анимации') }} + {{ summary.holo.pages }} {{ pick('pages', 'страници') }}) ·
          {{ pick('each contains the whole', 'всяка съдържа цялото') }}
        </p>
        <p class="live__whole">
          {{ pick('challenged', 'предизвикано') }} · <strong>{{ summary.review.withstood }}/{{ summary.review.count }}</strong>
          {{ pick('withstood', 'устояни') }} · <strong>{{ summary.review.frontiers.length }}</strong>
          {{ pick('frontiers open', 'отворени фронтове') }}
        </p>
        <p class="live__whole">
          {{ pick('completeness challenged', 'пълнотата предизвикана') }} · <strong>{{ summary.whole2.held }}/{{ summary.whole2.count }}</strong>
          {{ summary.whole2.complete ? pick('no hole found', 'без открит пропуск') : pick('holes found', 'открити пропуски') }}
        </p>
        <p class="live__whole">
          {{ pick('self-intelligence', 'самоинтелигентност') }} · <strong>{{ summary.mind.count }}</strong>
          {{ pick('skills saved as atoms', 'умения, запазени като атоми') }} ·
          {{ pick('folded', 'сгънати') }} <strong>{{ summary.thoughts.directions.length }}</strong>
          {{ pick('directions', 'посоки') }}
          <code :title="summary.thoughts.multidirectional">{{ summary.thoughts.multidirectional.slice(0, 13) }}…</code>
        </p>
        <p class="live__whole">
          {{ pick('imagination', 'въображение') }} · <strong>{{ summary.dream.count }}</strong>
          {{ pick('dreams saved as atoms', 'мечти, запазени като атоми') }} ·
          {{ pick('gates quantified', 'портите измерени') }} <strong>{{ summary.gauge.passed }}/{{ summary.gauge.total }}</strong>
          ({{ pick('double-folded', 'двойно сгънати') }})
        </p>
        <p class="live__whole">
          {{ pick('harmonic flow', 'хармоничен поток') }} · <strong>{{ summary.vortex.doubling.join('·') }}</strong>
          {{ pick('endless, collision-free', 'безкраен, без сблъсък') }} · {{ pick('cross', 'кръст') }} {{ summary.vortex.cross.join('·') }} ·
          <strong>÷0 = {{ summary.vortex.divByZeroHarmonic }}</strong>
        </p>
        <p class="live__whole">
          {{ pick('red team', 'червен екип') }} · <strong>{{ summary.red.caught }}/{{ summary.red.count }}</strong>
          {{ pick('attacks caught', 'атаки уловени') }} · {{ pick('monitored, lawful', 'наблюдавано, законно') }}
        </p>
        <p class="live__whole">
          {{ pick('quantum siege', 'квантова обсада') }} · <strong>{{ summary.siege.caught }}/{{ summary.siege.total }}</strong>
          {{ pick('forges caught', 'фалшификации уловени') }} ·
          <strong>{{ summary.siege.sealed ? pick('SEALED', 'ЗАПЕЧАТАНО') : pick('breached', 'пробито') }}</strong>
        </p>
        <p class="live__whole">
          {{ pick('patents', 'патенти') }} · <strong>{{ summary.patents.count }}</strong> {{ pick('prior art, clear', 'предходно изкуство, чисто') }} ·
          {{ pick('forward meets reverse in harmony', 'напред среща назад в хармония') }} ·
          {{ pick('society proposes', 'обществото предлага') }} <strong>{{ summary.harmony.proposals }}</strong>
        </p>
        <p class="live__whole">
          {{ pick('quantum society', 'квантово общество') }} · <strong>{{ summary.qsociety.cells.length }}</strong>
          {{ pick('entangled cells rebuild', 'заплетени клетки изграждат') }} <strong>{{ summary.qsociety.pages }}</strong>
          {{ pick('pages', 'страници') }} · <strong>{{ summary.qsociety.stages.join(' → ') }}</strong>
        </p>
        <p class="live__whole">
          {{ pick('tamper-proof fabric', 'тъкан срещу подправяне') }} · {{ pick('society-decided', 'решено от обществото') }} ·
          <strong>{{ summary.fabric.threshold }}/{{ summary.fabric.cells }}</strong> {{ pick('unanimous', 'единодушно') }}
          <em class="live__caveat">({{ pick('integrity, not encryption', 'цялост, не криптиране') }})</em>
        </p>
        <p class="live__whole">
          {{ pick('cross-audit', 'кръстосан одит') }} · <strong>{{ summary.cross.vortices }}</strong> ·
          <strong>{{ summary.cross.violations.length + summary.cross.rightsViolations.length }}</strong> {{ pick('violations', 'нарушения') }} ·
          {{ pick('no rights arise from math', 'няма права от математиката') }}
        </p>
        <p class="live__whole">
          {{ pick('immune system', 'имунна система') }} · <strong>{{ summary.immune.health }}/{{ summary.immune.of }}</strong>
          {{ pick('antibodies', 'антитела') }} · {{ pick('max health = max forge cost', 'макс здраве = макс цена за фалшификат') }}
          <em class="live__caveat">({{ pick('open, content-addressed, server-less — permaculture by design', 'открито, адресирано по съдържание, без сървър — пермакултура по дизайн') }})</em>
        </p>
        <p class="live__whole">
          {{ pick('biology', 'биология') }} · <strong>{{ summary.life.count }}</strong>
          {{ pick('hallmarks of life alive', 'белези на живот, живи') }}: {{ summary.life.aspects.map((a) => a.aspect).join(', ') }}
        </p>
        <p class="live__whole">
          {{ pick('features', 'функции') }} · <strong>{{ summary.featureMap.count }}</strong>
          ({{ summary.featureMap.pages }} {{ pick('pages', 'страници') }} + {{ summary.featureMap.models }} {{ pick('models', 'модели') }}) ·
          {{ pick('folded with cross links · navigation quantum-computed', 'сгънати с кръстосани връзки · навигация, квантово изчислена') }}
        </p>
      </template>
    </ClientOnly>
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
.live__headline { margin-top: 0.6rem; font-size: 0.82rem; }
.live__toggle {
  margin-left: 0.5rem;
  padding: 0.05rem 0.5rem;
  font-size: 0.72rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  cursor: pointer;
}
.live__toggle:hover { border-color: var(--vp-c-brand-1); color: var(--vp-c-brand-1); }
</style>
