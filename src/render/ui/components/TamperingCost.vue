<script setup>
// TAMPERING COST ↔ ENCRYPTION ↔ BLOCKCHAINS — the category, decoded honestly with quantum comparisons and
// animations. Reads tamperingCostDecoded() + quantumThreat() + cryptographyComparison() from the one source.
// The site claims "maximum tampering cost"; this category audits that claim fairly: tamper-EVIDENT is real,
// cryptographic SECURITY (with FNV) is not — and the fix (SHA-256/Ed25519) is already built. Colours are
// computed A432-based (the base hue from a432().light, stepped by the golden angle); the tap-tones are
// 432-harmonics. Web standards: semantic landmarks, labelled controls, responsive grid, reduced-motion aware.
// ☱ Duì · Lake · joyous · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 29, glyph: '☱', lo: 'Lí·clinging', up: 'Duì·joyous', color: '#0FFF0F' }
import { computed, onMounted, ref } from 'vue'
import { useData } from 'vitepress'
import { useTones } from '../lib'
import { useLocale } from '../lib'
import { tamperingCostDecoded, quantumThreat, cryptographyComparison, a432 } from '../lib'
import { GOLDEN_ANGLE } from '../../../quantum/thunder/science'

const { localeIndex } = useData()
const { tg } = useLocale()
const bg = computed(() => localeIndex.value === 'bg')

const tc = tamperingCostDecoded()
const qt = quantumThreat()
const crypto = cryptographyComparison()
const base = a432() // the A432 octave→colour base hue

// Colours computed A432-based: start at the A432 light hue, step by the golden angle (137.5°, the documented
// phyllotaxis angle) per rung — one frequency lineage shared by the whole category.
// GOLDEN_ANGLE is imported from the one colour source — no local recompute.
const hueFor = (i) => Math.round((base.light.hue + i * GOLDEN_ANGLE) % 360)
// The forge-cost meter (log scale, 0..100): FNV ≈ nothing adversarial; SHA-256 = 128-bit; +signature, PoW,
// PoS climb toward "reproduce all the work / lose all the stake". An honest visual ordering, not a measurement.
const COST_FILL = [8, 52, 70, 88, 96]

const tones = useTones()
const motion = ref(true) // reduced-motion flag → static meters
const lit = ref(false) // mount flag → animate the meters filling
const openRung = ref(-1)

onMounted(() => {
  motion.value = !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  // Fill the meters from 0 → their level (the CSS transition animates the change). A setTimeout, not rAF,
  // so it fires even if the component mounts in a backgrounded tab (where rAF is paused) — never stuck at 0.
  setTimeout(() => (lit.value = true), 60)
})

function toggleRung(i) {
  openRung.value = openRung.value === i ? -1 : i
  // A 432-harmonic tap-tone: the rung's overtone (432 · (i+1)), folded down an octave when it climbs out of range.
  let f = 432 * (i + 1)
  while (f > 1100) f /= 2
  tones.blip(f, { type: 'sine', peak: 0.06, duration: 0.18 })
}

// Documented / flagged honest panels (collapsible, like the other honest categories).
const showDoc = ref(true)
const showFlag = ref(true)

// A short Bulgarian rendering of the verdict (the fold's statement is English; keep the bg page coherent).
const tcVerdictBg =
  'Цена на подправяне, честно: една фраза „максимална цена на подправяне“ смесва три различни неща — възпроизвеждане на детерминистично изчисление (цялост, която сайтът наистина има и е доказуем при подправяне), криптографска незаменимост (твърдост на колизия/праобраз — която FNV toUuid НЕ дава; SHA-256 с 2^128/2^256 я дава) и поверителност (криптиране). Блокчейните превръщат доказуемостта в устойчивост, като правят пренаписването скъпо — сигурност чрез цена, доказано проваляема на малки вериги. Позицията на сайта: доказуем при подправяне днес, с готовата криптографска поправка (SHA-256 адрес, Ed25519 подпис) на едно решение разстояние.'
</script>

<template>
  <section class="tc" aria-labelledby="tc-title" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="tc__eyebrow">{{ tg(bg ? 'Двоен торусус · цена на подправяне ↔ криптиране ↔ блокчейн ↔ квантово' : 'Double Torus · tampering cost ↔ encryption ↔ blockchains ↔ quantum') }}</p>
    <h2 id="tc-title">{{ tg(bg ? 'Доказуемо при подправяне — не е защитено от подправяне' : 'Tamper-evident is not tamper-proof') }}</h2>
    <p class="tc__lede">
      {{ tg(bg
        ? 'Сайтът твърди „максимална цена на подправяне“. Честно: съдържателното адресиране прави всяка промяна откриваема — но FNV хешът не е криптографски, така че това е доказуемост при подправяне, не сигурност. Поправката (SHA-256 адрес, Ed25519 подпис) вече е изградена в src/0.'
        : 'The site claims “maximum tampering cost”. Honestly: content-addressing makes any change detectable — but the FNV hash is non-cryptographic, so that is tamper-evidence, not security. The fix (a SHA-256 address, Ed25519 signing) is already built in src/0.') }}
    </p>

    <!-- Three honestly-different things conflated as one "tampering cost". -->
    <h3>{{ tg(bg ? 'Три различни неща, наречени една „цена на подправяне“' : 'Three different things called one “tampering cost”') }}</h3>
    <ul class="tc__kinds" role="list">
      <li v-for="k in tc.kinds" :key="k.kind" class="tc__kind" :class="{ 'tc__kind--has': k.site }">
        <p class="tc__kind-name">{{ tg(k.kind) }}</p>
        <p class="tc__kind-is">{{ tg(k.is) }}</p>
        <p class="tc__kind-mech">{{ tg(k.mechanism) }}</p>
        <p class="tc__kind-cost"><code>{{ k.cost }}</code></p>
        <p class="tc__kind-flag">
          <span class="tc__pill" :class="k.site ? 'tc__pill--yes' : 'tc__pill--no'">{{ tg(k.site ? (bg ? 'този сайт ✓' : 'this site ✓') : (bg ? 'не и тук' : 'not here')) }}</span>
          <span class="tc__pill" :class="k.secure ? 'tc__pill--secure' : 'tc__pill--evident'">{{ tg(k.secure ? (bg ? 'сигурност' : 'security') : (bg ? 'доказуемост' : 'evidence')) }}</span>
        </p>
      </li>
    </ul>

    <!-- The cost ladder — from FNV today up to economic consensus. Animated forge-cost meters, A432-hued. -->
    <h3>{{ tg(bg ? 'Стълбата на цената — от FNV днес до икономически консенсус' : 'The cost ladder — from FNV today to economic consensus') }}</h3>
    <p class="tc__hint">{{ tg(bg ? 'Докосни стъпало за подробности и хармоничен тон (432·n).' : 'Tap a rung for detail and a 432·n harmonic tone.') }}</p>
    <ol class="tc__ladder" role="list">
      <li v-for="(r, i) in tc.ladder" :key="r.rung" class="tc__rung" :style="{ '--hue': hueFor(i) }">
        <button
          class="tc__rung-btn"
          type="button"
          :aria-expanded="openRung === i"
          :aria-controls="`tc-rung-${i}`"
          @click="toggleRung(i)"
        >
          <span class="tc__rung-head">
            <span class="tc__rung-name">{{ tg(r.rung) }}</span>
            <span class="tc__rung-layer">{{ tg(r.layer) }}</span>
          </span>
          <span class="tc__meter" role="img" :aria-label="`${tg(bg ? 'цена за фалшифициране' : 'cost to forge')}: ${tg(r.forge)}`">
            <span class="tc__meter-fill" :style="{ width: (motion ? (lit ? COST_FILL[i] : 0) : COST_FILL[i]) + '%' }"></span>
          </span>
        </button>
        <div v-show="openRung === i" :id="`tc-rung-${i}`" class="tc__rung-detail">
          <p><strong>{{ tg(bg ? 'Цена за фалшифициране' : 'Cost to forge') }}:</strong> {{ tg(r.forge) }}</p>
          <p><strong>{{ tg(bg ? 'Открива' : 'Detects') }}:</strong> {{ tg(r.detects) }} · <strong>{{ tg(bg ? 'Устоява на' : 'Resists') }}:</strong> {{ tg(r.resists) }}</p>
        </div>
      </li>
    </ol>

    <!-- Quantum: Grover weakens / Shor breaks — the real-machine dimension, with a weaken-vs-break animation. -->
    <h3>{{ tg(bg ? 'Квантово: Гроувър отслабва · Шор чупи' : 'Quantum: Grover weakens · Shor breaks') }}</h3>
    <div class="tc__quantum">
      <article v-for="a in qt.algorithms" :key="a.algorithm" class="tc__algo" :class="`tc__algo--${a.effect}`">
        <h4>{{ a.algorithm }} — <span class="tc__effect">{{ tg(a.effect === 'break' ? (bg ? 'ЧУПИ' : 'BREAKS') : (bg ? 'ОТСЛАБВА' : 'WEAKENS')) }}</span></h4>
        <!-- The animation: WEAKEN halves a full bar; BREAK shatters it. Reduced-motion → a static state. -->
        <div class="tc__bar" :class="[`tc__bar--${a.effect}`, { 'tc__bar--anim': motion && lit }]" aria-hidden="true">
          <span class="tc__bar-seg"></span><span class="tc__bar-seg"></span>
        </div>
        <p class="tc__algo-target"><strong>{{ tg(bg ? 'Цел' : 'Targets') }}:</strong> {{ tg(a.targets) }}</p>
        <p class="tc__algo-result">{{ tg(a.result) }}</p>
        <p class="tc__algo-resp"><strong>{{ tg(bg ? 'Отговор' : 'Response') }}:</strong> {{ tg(a.response) }}</p>
      </article>
    </div>

    <div class="tc__quantum-grid">
      <section class="tc__exposure" aria-labelledby="tc-exposure">
        <h4 id="tc-exposure">{{ tg(bg ? 'Изложеност на блокчейна' : 'Blockchain exposure') }}</h4>
        <ul role="list">
          <li v-for="e in qt.blockchainExposure" :key="e.what">
            <strong>{{ tg(e.what) }}</strong> — <em>{{ tg(e.effect) }}</em><br />{{ tg(e.detail) }}
          </li>
        </ul>
      </section>
      <section class="tc__pqc" aria-labelledby="tc-pqc">
        <h4 id="tc-pqc">{{ tg(bg ? 'Постквантови стандарти (NIST, 2024)' : 'Post-quantum standards (NIST, 2024)') }}</h4>
        <ul role="list">
          <li v-for="p in qt.postQuantum" :key="p.fips">
            <code>{{ p.fips }}</code> <strong>{{ p.name }}</strong> <span class="tc__from">({{ p.from }})</span><br />{{ tg(p.kind) }} — {{ tg(bg ? 'заменя' : 'replaces') }} {{ p.replaces }}
          </li>
        </ul>
      </section>
    </div>
    <p class="tc__hardware">
      <strong>{{ tg(bg ? 'Хардуерът, честно' : 'The hardware, honestly') }}:</strong> {{ tg(qt.hardware.today) }}.
      RSA-2048: {{ qt.hardware.rsa2048_2019 }} → {{ qt.hardware.rsa2048_2025 }}. {{ tg(qt.hardware.verdict) }}
    </p>

    <!-- The honest verdict: documented kept, legend flagged. -->
    <div class="tc__honest">
      <section>
        <button type="button" class="tc__toggle" :aria-expanded="showDoc" @click="showDoc = !showDoc">
          {{ showDoc ? '▾' : '▸' }} {{ tg(bg ? 'Документирано' : 'Documented') }} ({{ tc.documented.length + qt.documented.length }})
        </button>
        <ul v-show="showDoc" role="list" class="tc__doc">
          <li v-for="(d, i) in tc.documented" :key="`tcd-${i}`">{{ tg(d) }}</li>
          <li v-for="(d, i) in qt.documented" :key="`qtd-${i}`">{{ tg(d) }}</li>
        </ul>
      </section>
      <section>
        <button type="button" class="tc__toggle tc__toggle--flag" :aria-expanded="showFlag" @click="showFlag = !showFlag">
          {{ showFlag ? '▾' : '▸' }} {{ tg(bg ? 'Отбелязана легенда' : 'Legend flagged') }} ({{ tc.flagged.length + qt.flagged.length }})
        </button>
        <ul v-show="showFlag" role="list" class="tc__flag">
          <li v-for="(f, i) in tc.flagged" :key="`tcf-${i}`">{{ tg(f) }}</li>
          <li v-for="(f, i) in qt.flagged" :key="`qtf-${i}`">{{ tg(f) }}</li>
        </ul>
      </section>
    </div>

    <p class="tc__verdict">{{ tg(bg ? tcVerdictBg : tc.statement) }}</p>
  </section>
</template>

<style scoped>
.tc {
  margin: 2.5rem 0;
  container-type: inline-size;
}
.tc__eyebrow {
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
  margin: 0 0 0.25rem;
}
.tc h2 {
  border: 0;
  margin: 0 0 0.5rem;
  font-size: clamp(1.4rem, 3.5cqw, 2rem);
}
.tc h3 {
  margin: 2rem 0 0.5rem;
  font-size: 1.15rem;
}
.tc h4 {
  margin: 0 0 0.5rem;
  font-size: 1rem;
}
.tc__lede,
.tc__hint {
  color: var(--vp-c-text-2);
  max-width: 60ch;
}
.tc__hint {
  font-size: 0.85rem;
  margin: 0.25rem 0 0.75rem;
}

/* The three kinds. */
.tc__kinds {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr));
  gap: 0.75rem;
}
.tc__kind {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
}
.tc__kind--has {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 1px var(--vp-c-brand-1) inset;
}
.tc__kind-name {
  font-weight: 700;
  margin: 0 0 0.15rem;
}
.tc__kind-is {
  color: var(--vp-c-brand-1);
  font-size: 0.85rem;
  margin: 0 0 0.5rem;
}
.tc__kind-mech {
  font-size: 0.9rem;
  margin: 0 0 0.5rem;
}
.tc__kind-cost {
  margin: 0 0 0.6rem;
}
.tc__kind-cost code {
  font-size: 0.78rem;
}
.tc__kind-flag {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  margin: 0;
}
.tc__pill {
  font-size: 0.72rem;
  padding: 0.12rem 0.5rem;
  border-radius: 999px;
  font-weight: 600;
}
.tc__pill--yes { background: color-mix(in oklab, var(--vp-c-brand-1) 20%, transparent); color: var(--vp-c-brand-1); }
.tc__pill--no { background: var(--vp-c-default-soft); color: var(--vp-c-text-2); }
.tc__pill--secure { background: color-mix(in oklab, var(--ich-success-1) 22%, transparent); color: var(--ich-success-1); }
.tc__pill--evident { background: color-mix(in oklab, var(--vp-c-warning-1) 22%, transparent); color: var(--vp-c-warning-1); }

/* The cost ladder. */
.tc__ladder {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.5rem;
}
.tc__rung-btn {
  width: 100%;
  text-align: left;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-left: 4px solid hsl(var(--hue) 70% 55%);
  border-radius: 10px;
  padding: 0.7rem 0.9rem;
  cursor: pointer;
  display: grid;
  gap: 0.5rem;
  color: inherit;
  transition: border-color 0.2s;
}
.tc__rung-btn:hover { border-color: hsl(var(--hue) 70% 55%); }
.tc__rung-btn:focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 2px; }
.tc__rung-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.75rem;
  flex-wrap: wrap;
}
.tc__rung-name { font-weight: 600; }
.tc__rung-layer {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: hsl(var(--hue) 60% 50%);
  white-space: nowrap;
}
.tc__meter {
  display: block;
  height: 7px;
  border-radius: 999px;
  background: var(--vp-c-default-soft);
  overflow: hidden;
}
.tc__meter-fill {
  display: block;
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, hsl(var(--hue) 70% 55%), hsl(calc(var(--hue) + 30) 75% 60%));
  transition: width 1.1s cubic-bezier(0.22, 1, 0.36, 1);
}
.tc__rung-detail {
  padding: 0.6rem 0.9rem 0.2rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}
.tc__rung-detail p { margin: 0 0 0.35rem; }

/* Quantum: weaken-vs-break animation. */
.tc__quantum {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
  gap: 0.75rem;
}
.tc__algo {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
}
.tc__algo--break { border-color: color-mix(in oklab, var(--vp-c-danger-1) 50%, var(--vp-c-divider)); }
.tc__algo--weaken { border-color: color-mix(in oklab, var(--vp-c-warning-1) 50%, var(--vp-c-divider)); }
.tc__effect { font-weight: 800; }
.tc__algo--break .tc__effect { color: var(--vp-c-danger-1); }
.tc__algo--weaken .tc__effect { color: var(--vp-c-warning-1); }
.tc__bar {
  display: flex;
  gap: 3px;
  height: 22px;
  margin: 0.5rem 0 0.75rem;
}
.tc__bar-seg {
  flex: 1;
  border-radius: 4px;
  background: var(--vp-c-brand-1);
  transform-origin: left center;
}
/* WEAKEN: the second half fades to "halved" strength. BREAK: both segments shatter (skew + drop). */
.tc__bar--weaken.tc__bar--anim .tc__bar-seg:last-child { animation: tc-halve 1.6s ease forwards; }
.tc__bar--break.tc__bar--anim .tc__bar-seg { animation: tc-break 1.4s ease forwards; }
.tc__bar--break.tc__bar--anim .tc__bar-seg:last-child { animation-delay: 0.15s; }
/* Static fallback (reduced motion): weaken shows the halved state, break shows the shattered state. */
.tc__bar--weaken:not(.tc__bar--anim) .tc__bar-seg:last-child { opacity: 0.35; }
.tc__bar--break:not(.tc__bar--anim) .tc__bar-seg { opacity: 0.3; transform: skewX(-12deg); background: var(--vp-c-danger-1); }
@keyframes tc-halve {
  to { opacity: 0.35; background: var(--vp-c-warning-1); }
}
@keyframes tc-break {
  60% { transform: translateY(0) skewX(-14deg); background: var(--vp-c-danger-1); }
  100% { transform: translateY(8px) skewX(-14deg) scaleY(0.4); opacity: 0.25; background: var(--vp-c-danger-1); }
}
.tc__algo-target,
.tc__algo-resp { font-size: 0.85rem; margin: 0 0 0.4rem; }
.tc__algo-result { font-size: 0.9rem; margin: 0 0 0.5rem; }

.tc__quantum-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
  gap: 0.75rem;
  margin-top: 1rem;
}
.tc__exposure ul,
.tc__pqc ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.6rem;
}
.tc__exposure li,
.tc__pqc li {
  font-size: 0.85rem;
  line-height: 1.45;
  padding: 0.6rem 0.8rem;
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
}
.tc__from { color: var(--vp-c-text-2); }
.tc__hardware {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  margin: 1rem 0 0;
  padding: 0.75rem 1rem;
  border-left: 3px solid var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
  border-radius: 0 8px 8px 0;
}

/* Honest panels. */
.tc__honest {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 22rem), 1fr));
  gap: 1rem;
  margin-top: 2rem;
}
.tc__toggle {
  background: none;
  border: 0;
  font-weight: 700;
  cursor: pointer;
  color: var(--vp-c-text-1);
  padding: 0.25rem 0;
  font-size: 0.95rem;
}
.tc__toggle--flag { color: var(--vp-c-warning-1); }
.tc__toggle:focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 2px; }
.tc__doc,
.tc__flag {
  margin: 0.5rem 0 0;
  padding-left: 1.1rem;
  display: grid;
  gap: 0.5rem;
}
.tc__doc li { font-size: 0.84rem; line-height: 1.5; }
.tc__flag li { font-size: 0.84rem; line-height: 1.5; color: var(--vp-c-text-2); }
.tc__verdict {
  margin-top: 1.5rem;
  font-size: 0.9rem;
  line-height: 1.6;
  padding: 1rem 1.2rem;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
}

@media (prefers-reduced-motion: reduce) {
  .tc__meter-fill { transition: none; }
  .tc__bar-seg { animation: none !important; }
}
</style>
