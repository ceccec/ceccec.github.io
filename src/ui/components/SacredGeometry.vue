<script setup lang="ts">
// ☴ Xùn · Wind · gentle · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 49, glyph: '☴', lo: '☳', up: '☴', color: '#FF000F', name: 'SacredGeometry' }
// THE SACRED GEOMETRY CATEGORY — the forms decoded honestly (documented kept, legend flagged), presented
// multi-dimensionally: walk the dimension slider and the forms turn through it (the 10D thread — 4 genus-2
// homology loops + 6 cross-fold axes). The five Platonic solids carry their real V/E/F and Euler V−E+F=2; φ is
// shown where it genuinely lives. Reuses the sacredGeometry() fold (the decode) and the shared form SVGs. Built
// to web standards: semantic headings/lists/figures, labelled controls, aria-expanded toggles, reduced-motion.
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { sacredGeometry, createAnimationEngine } from '../lib/quantumMind'
import { formSvg, formDims10D, SACRED_FORMS, FORM_LABEL } from '../lib/sacredForms'
import { blip } from '../lib/useTones'

// Sound the form (a432 = colour · sound · form, one frequency). HONEST: a CHOSEN sonification — the five solids as a
// just-intonation ascent on 432 Hz (1 · 9/8 · 5/4 · 3/2 · 2) — NOT a claim the solid "has" a pitch (that would be the
// flagged numerology this very component warns against). It maps the form to a note so it can be heard, deterministically.
const A432 = 432
const SOLID_RATIO: Record<string, [number, number]> = { tetrahedron: [1, 1], cube: [9, 8], octahedron: [5, 4], dodecahedron: [3, 2], icosahedron: [2, 1] }
function soundSolid(name: string) {
  const [num, den] = SOLID_RATIO[name] ?? [1, 1]
  blip((A432 * num) / den, { peak: 0.1, duration: 0.5, type: 'triangle' })
}

const sg = sacredGeometry()
const phase = ref(0) // 0..1000 — the manual dimension walk (the slider)
const showDocumented = ref(true)
const showFlagged = ref(false)
const reduce = typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

// Every form is driven through ALL TEN dimensions (4 homology loops + 6 cross-fold axes, dims()) by the one
// shared engine — self-similar at each form's own nested scale (clear at all depths). No form carries 1D rotation.
const t = ref(0) // the animated phase 0..1, advanced by the shared realtime engine
const engine = createAnimationEngine((time) => { t.value = (time / 16000) % 1 }) // ~16s per full dimension walk
const formStyle = (form: string, i: number) => {
  const p = (reduce ? 0 : t.value) + phase.value / 1000 // reduced-motion: the slider alone drives it
  const d = formDims10D(form, p, i) // i = the form's nested scale → self-similar at every depth
  return { transform: d.transform, filter: d.filter, opacity: String(d.opacity) }
}
onMounted(() => { if (!reduce) engine.sync(true) })
onBeforeUnmount(() => engine.dispose())
const SOLID_GLYPH: Record<string, string> = { tetrahedron: '△', cube: '◻', octahedron: '◇', dodecahedron: '⬠', icosahedron: '⬢' }
</script>

<template>
  <section class="sg" aria-labelledby="sg-title" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <header class="sg__head">
      <h2 id="sg-title" class="sg__title">Sacred geometry — the forms, decoded honestly</h2>
      <p class="sg__sub">The geometry is genuine and beautiful; the “blueprint of creation”, golden-ratio-everywhere and ascension claims are flagged, not asserted. <em>Documented kept, legend flagged.</em></p>
    </header>

    <h3 class="sg__h3">The five Platonic solids</h3>
    <p class="sg__lead">Exactly five — a proven theorem (only triangles, squares and pentagons can close a regular convex corner). Euler’s formula <strong>V − E + F = 2</strong> holds for every one; they fall into dual pairs. <em>Tap ♪ to hear each as a chosen sonification — a just-intonation degree on 432 Hz (a mapping, not a claim the solid has a pitch).</em></p>
    <ul class="sg__solids">
      <li v-for="s in sg.platonicSolids" :key="s.name" class="sg__solid">
        <span class="sg__glyph" aria-hidden="true">{{ SOLID_GLYPH[s.name] }}</span>
        <strong class="sg__solid-name">{{ s.name }}</strong>
        <span class="sg__vef">V {{ s.v }} · E {{ s.e }} · F {{ s.f }}</span>
        <span class="sg__euler">V−E+F = {{ s.v - s.e + s.f }}</span>
        <span class="sg__meta">{{ s.face }} faces · {{ s.element }} · dual: {{ s.dual }}</span>
        <button type="button" class="sg__sound" @click="soundSolid(s.name)" :aria-label="'sound the ' + s.name">♪ sound</button>
      </li>
    </ul>

    <h3 class="sg__h3">The golden ratio φ</h3>
    <p class="sg__lead">
      φ = <strong>{{ sg.phi.toFixed(10) }}…</strong> satisfies <strong>φ² = φ + 1</strong> ({{ sg.phiSquaredIsPhiPlusOne ? 'exact' : '—' }}) and is the limit of Fibonacci ratios. It is <em>exactly</em> the regular pentagon’s diagonal-to-side ratio, is built into the dodecahedron and icosahedron, and the golden angle <strong>{{ sg.goldenAngle }}°</strong> gives the optimal seed packing in phyllotaxis. (It is <em>not</em> hidden in the Parthenon, the nautilus or the Mona Lisa — see flagged.)
    </p>

    <h3 class="sg__h3">The forms — walk the dimensions</h3>
    <p class="sg__lead">Each is a real construction, driven through <strong>all ten dimensions</strong> — the four genus-2 homology loops (the topological motion) plus the six cross-fold appearance axes — self-similar at each form’s own nested scale. Watch them turn, or walk the slider; none carries a flat 1D spin. <em>All forms have 10D or are purged.</em></p>
    <label class="sg__walk">
      <span>dimension walk</span>
      <input v-model.number="phase" type="range" min="0" max="1000" aria-label="walk the forms through the ten dimensions" />
    </label>
    <ul class="sg__forms">
      <li v-for="(form, i) in SACRED_FORMS" :key="form" class="sg__form">
        <figure>
          <svg viewBox="0 0 100 100" role="img" :aria-label="FORM_LABEL[form]" :style="formStyle(form, i)">
            <g v-html="formSvg(form)" />
          </svg>
          <figcaption>{{ FORM_LABEL[form] }}</figcaption>
        </figure>
      </li>
    </ul>

    <p class="sg__boundary">{{ sg.boundary }}</p>

    <div class="sg__decode">
      <button type="button" class="sg__toggle sg__toggle--doc" :aria-expanded="showDocumented" @click="showDocumented = !showDocumented">
        ✓ documented ({{ sg.documented.length }})
      </button>
      <button type="button" class="sg__toggle sg__toggle--flag" :aria-expanded="showFlagged" @click="showFlagged = !showFlagged">
        ⚑ flagged ({{ sg.flagged.length }})
      </button>
      <ul v-if="showDocumented" class="sg__list sg__list--doc">
        <li v-for="(d, i) in sg.documented" :key="'d' + i">{{ d }}</li>
      </ul>
      <ul v-if="showFlagged" class="sg__list sg__list--flag">
        <li v-for="(f, i) in sg.flagged" :key="'f' + i">{{ f }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.sg {
  margin: 1.5rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: radial-gradient(circle at 50% 0%, hsla(265, 60%, 50%, 0.08), var(--vp-c-bg-soft) 70%);
  padding: 1rem 1.1rem;
}
.sg__head { display: flex; flex-direction: column; gap: 0.2rem; margin-bottom: 0.6rem; }
.sg__title { font-size: 1.05rem; margin: 0; border: 0; padding: 0; }
.sg__sub { font-size: 0.78rem; color: var(--vp-c-text-2); margin: 0; }
.sg__h3 { font-size: 0.92rem; margin: 1rem 0 0.3rem; border: 0; padding: 0; }
.sg__lead { font-size: 0.82rem; line-height: 1.5; color: var(--vp-c-text-1); margin: 0 0 0.6rem; }
.sg__solids { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.6rem; }
.sg__solid { display: flex; flex-direction: column; gap: 0.15rem; padding: 0.6rem; border: 1px solid var(--vp-c-divider); border-radius: 10px; background: var(--vp-c-bg); }
.sg__glyph { font-size: 1.7rem; line-height: 1; color: hsl(265, 65%, 60%); }
.sg__solid-name { font-size: 0.86rem; text-transform: capitalize; }
.sg__vef { font-family: var(--vp-font-family-mono, monospace); font-size: 0.74rem; color: var(--vp-c-text-1); }
.sg__euler { font-size: 0.72rem; color: var(--vp-c-green-1); }
.sg__meta { font-size: 0.7rem; color: var(--vp-c-text-3); }
.sg__sound { margin-top: 0.35rem; align-self: flex-start; font-size: 0.72rem; padding: 0.18rem 0.6rem; border-radius: 999px; border: 1px solid hsl(265, 60%, 58%); background: hsla(265, 60%, 50%, 0.08); color: hsl(265, 65%, 62%); cursor: pointer; transition: background 0.2s ease; }
.sg__sound:hover { background: hsla(265, 60%, 50%, 0.22); }
.sg__walk { display: flex; align-items: center; gap: 0.5rem; font-size: 0.76rem; color: var(--vp-c-text-2); margin-bottom: 0.6rem; }
.sg__walk input { flex: 1; max-width: 280px; accent-color: hsl(265, 70%, 58%); }
.sg__forms { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(96px, 1fr)); gap: 0.7rem; }
.sg__form figure { margin: 0; display: flex; flex-direction: column; align-items: center; gap: 0.3rem; }
.sg__form svg { width: 100%; max-width: 96px; height: auto; aspect-ratio: 1; stroke: hsl(265, 70%, 60%); stroke-width: 1.4; transition: transform 0.1s linear; }
.sg__form figcaption { font-size: 0.66rem; color: var(--vp-c-text-2); text-align: center; line-height: 1.2; }
.sg__boundary { margin: 0.9rem 0 0; font-size: 0.74rem; line-height: 1.5; color: var(--vp-c-text-2); border-left: 2px solid hsl(265, 60%, 58%); padding-left: 0.7rem; }
.sg__decode { margin-top: 0.8rem; display: flex; flex-wrap: wrap; gap: 0.5rem; }
.sg__toggle { font-size: 0.74rem; padding: 0.22rem 0.6rem; border-radius: 999px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg); cursor: pointer; color: var(--vp-c-text-1); }
.sg__toggle--doc[aria-expanded='true'] { border-color: var(--vp-c-green-1); color: var(--vp-c-green-1); }
.sg__toggle--flag[aria-expanded='true'] { border-color: var(--vp-c-yellow-1); color: var(--vp-c-yellow-1); }
.sg__list { flex-basis: 100%; margin: 0.3rem 0 0; padding-left: 1.1rem; display: flex; flex-direction: column; gap: 0.3rem; }
.sg__list li { font-size: 0.76rem; line-height: 1.45; }
.sg__list--flag li { color: var(--vp-c-text-2); }
</style>
