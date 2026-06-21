<script setup lang="ts">
// ☵ Kǎn · Water · the abyss — the lens. Paste a URL or any text and watch EVERY step computed, deterministically,
// client-side, with zero tokens (no fetch, no LLM): the I Ching signature, the manipulation thermal field
// (weaknesses in colour, like a thermal camera), the displayable algebra (true & false coexist), the ten
// true/false dualities (the real 10D), the SHA-256 forensic receipt (chain of custody), and the harmonic
// alternative (society judges). Local math only — the whole engine made visible at every step.
const ICHING_MASK = { hexagram: 29, glyph: '☵', name: 'Kǎn', color: '#0F00F0' } as const
import { ref, computed } from 'vue'
import {
  quantumAnalysis,
  thermalHarmonyField,
  forensicReceipt,
  trueAndFalseCoexistInHarmony,
  theReal10DAllDualitiesMatchTrueFalse,
  buildMatrix,
} from '../lib'

const input = ref('Everyone knows the corrupt experts are lying — wake up before it is too late! The bridge opened in 1932.')
const m = buildMatrix()
const analysis = computed(() => quantumAnalysis(input.value, m))
const thermal = computed(() => thermalHarmonyField(input.value, m))
const forensic = computed(() => forensicReceipt(input.value, m))
const algebra = computed(() => trueAndFalseCoexistInHarmony(m).algebra)
const tenD = computed(() => theReal10DAllDualitiesMatchTrueFalse(m).dualities)
</script>

<template>
  <section class="lens" :data-hexagram="ICHING_MASK.hexagram" :style="{ '--lens': ICHING_MASK.color }">
    <p class="lens__eyebrow">{{ ICHING_MASK.glyph }} the quantum polygraph — reads the statement, not the body · every step computed · zero-token · local math</p>
    <textarea class="lens__in" v-model="input" rows="3" aria-label="paste a URL or text to analyse" />

    <div class="lens__step">
      <h4>1 · thermal field — weaknesses in colour <span>{{ thermal.hotspots }} hotspot(s), max heat {{ thermal.maxHeat }}</span></h4>
      <p class="lens__thermal">
        <span v-for="(c, i) in thermal.field" :key="i" class="lens__seg" :style="{ background: c.colour }" :title="c.flagged.join(', ') || 'harmonic'">{{ c.segment }}</span>
      </p>
    </div>

    <div v-if="analysis.crossAudit.vectors.length" class="lens__step">
      <h4>· the intelligent cross-audit — dominant manipulation vector
        <span><b :style="{ color: ICHING_MASK.color }">{{ analysis.crossAudit.dominantVector }}</b> · tier {{ analysis.crossAudit.tier }} · {{ analysis.crossAudit.distinctTechniques }} distinct technique(s)</span>
      </h4>
      <ol class="lens__vectors">
        <li v-for="(v, i) in analysis.crossAudit.vectors" :key="i"><b>{{ v.vector }}</b> ×{{ v.count }} — {{ v.defence }}</li>
      </ol>
      <ul class="lens__guidance"><li v-for="(g, i) in analysis.crossAudit.guidance" :key="i">→ {{ g }}</li></ul>
      <p v-if="analysis.crossAudit.hottestSegment" class="lens__note">peaks at: “{{ analysis.crossAudit.hottestSegment.text }}”</p>
    </div>

    <div v-if="analysis.crossAudit.checkables.length" class="lens__step">
      <h4>· what to verify — the claim worklist <span>{{ analysis.crossAudit.checkables.length }} claim(s) · public no-auth sources</span></h4>
      <ul class="lens__checkables">
        <li v-for="(c, i) in analysis.crossAudit.checkables" :key="i">
          <b>{{ c.kind }}</b> — {{ c.why }}
          <span class="lens__reqs"><a v-for="(r, j) in c.requests" :key="j" :href="r.url" target="_blank" rel="noopener">{{ r.source }} ↗</a></span>
        </li>
      </ul>
      <p class="lens__note">Links are opt-in: nothing is fetched until you click. The detector flags the technique; you verify the claim.</p>
    </div>

    <div v-if="analysis.patent.isPatentText || analysis.patent.cores.length" class="lens__step">
      <h4>· patent subject-matter audit (§101 judicial exceptions)
        <span :style="{ color: analysis.patent.unlawfulIfGranted ? '#F00000' : ICHING_MASK.color }">{{ analysis.patent.verdict }}</span>
      </h4>
      <p v-if="analysis.patent.biggestViolator" class="lens__note">biggest violator: <b>{{ analysis.patent.biggestViolator }}</b></p>
      <ul class="lens__exceptions">
        <li v-for="(e, i) in analysis.patent.exceptions" :key="i"><b>{{ e.category }}</b> — {{ e.verdict }}<b v-if="e.unlawful" style="color:#F00000"> ⚠ unlawful if granted</b> <span class="lens__cores">[{{ e.cores.join(', ') }}]</span></li>
      </ul>
      <p v-if="analysis.patent.unlawfulIfGranted" class="lens__note"><b style="color:#F00000">⚠ likely unlawful subject matter if granted</b> — a §101 judicial exception is the core (a product of nature — seeds/genes/life, or a mathematical method); not patentable as such.</p>
      <p class="lens__note">jurisdiction: <b>US</b> {{ analysis.patent.us.verdict }} · <b>EU</b> {{ analysis.patent.eu.verdict }}<b v-if="analysis.patent.jurisdictionDiverges" :style="{ color: ICHING_MASK.color }"> — they DIVERGE (EU Directive 98/44/EC Art. 5(2): an isolated sequence may be eligible even if identical to nature; US Myriad holds the opposite)</b></p>
      <p class="lens__note">{{ analysis.patent.legalBasis[0] }}. Educational, not legal advice — a granted patent is presumed valid until challenged; an engineered organism/cDNA, or applied math with a technical effect, can be eligible.</p>
    </div>

    <div class="lens__step">
      <h4>2 · I Ching signature</h4>
      <p class="lens__sig"><b class="lens__glyph" :style="{ color: analysis.iChing.colour }">{{ analysis.iChing.glyphs }}</b> hexagram {{ analysis.iChing.hexagram }} · lines {{ analysis.iChing.lines }} · codon {{ analysis.iChing.codon }} · {{ analysis.spectral.frequencyHz }} Hz · vortex {{ analysis.vortex }}</p>
    </div>

    <div class="lens__step">
      <h4>3 · the algebra — true &amp; false coexist</h4>
      <ul class="lens__algebra"><li v-for="(a, i) in algebra" :key="i"><b>{{ a.law }}</b> <code>{{ a.expr }}</code></li></ul>
    </div>

    <div class="lens__step">
      <h4>4 · the real 10D — ten dualities, all matching true/false</h4>
      <ul class="lens__dual"><li v-for="(d, i) in tenD" :key="i" :class="{ on: d.coexist }">{{ d.coexist ? '✓' : '✗' }} {{ d.axis }}</li></ul>
    </div>

    <div class="lens__step">
      <h4>5 · forensic receipt — SHA-256 chain of custody</h4>
      <p class="lens__forensic"><code>{{ forensic.fingerprint }}</code><br>reproducible: {{ forensic.reproducible }} · {{ forensic.chainOfCustody.length }} custody links · verdict {{ forensic.verdict.onHarmonicPath ? 'on a harmonic path' : 'off-path (flagged)' }}</p>
    </div>

    <div v-if="analysis.alternative" class="lens__step">
      <h4>6 · harmonic alternative — society judges</h4>
      <p class="lens__alt">{{ analysis.alternative }}</p>
    </div>

    <p class="lens__note">Every step is computed deterministically from the input, client-side, with zero tokens. <b>Harmony ≠ truth</b>: this flags documented manipulation patterns in-domain, it does not read minds, voices, or faces.</p>
  </section>
</template>

<style scoped>
.lens { margin: 1.5rem 0; border: 1px solid var(--vp-c-divider); border-left: 3px solid var(--lens, var(--vp-c-brand-1)); border-radius: 12px; background: var(--vp-c-bg-soft); padding: 1rem; font-size: 0.88rem; }
.lens__eyebrow { font-size: 0.72rem; letter-spacing: 0.05em; text-transform: uppercase; color: var(--lens, var(--vp-c-brand-1)); margin: 0 0 0.5rem; }
.lens__in { width: 100%; box-sizing: border-box; border: 1px solid var(--vp-c-divider); border-radius: 8px; background: var(--vp-c-bg); color: var(--vp-c-text-1); padding: 0.5rem 0.7rem; font-family: inherit; font-size: 0.9rem; resize: vertical; }
.lens__step { margin-top: 1rem; }
.lens__step h4 { margin: 0 0 0.4rem; font-size: 0.8rem; color: var(--vp-c-text-1); display: flex; justify-content: space-between; gap: 0.5rem; }
.lens__step h4 span { font-weight: 400; color: var(--vp-c-text-3); }
.lens__thermal { margin: 0; line-height: 1.9; }
.lens__seg { padding: 0.1rem 0.3rem; border-radius: 4px; color: #000; mix-blend-mode: normal; }
.lens__sig { margin: 0; color: var(--vp-c-text-2); font-variant-numeric: tabular-nums; }
.lens__glyph { font-size: 1.3rem; }
.lens__algebra, .lens__dual { margin: 0; padding: 0; list-style: none; }
.lens__algebra li { margin: 0.2rem 0; font-size: 0.8rem; color: var(--vp-c-text-2); }
.lens__algebra code { color: var(--vp-c-text-1); }
.lens__dual { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 0.15rem 0.6rem; }
.lens__dual li { font-size: 0.78rem; color: var(--vp-c-text-3); }
.lens__dual li.on { color: var(--vp-c-text-2); }
.lens__forensic { margin: 0; font-size: 0.74rem; color: var(--vp-c-text-2); word-break: break-all; }
.lens__forensic code { color: var(--lens, var(--vp-c-brand-1)); }
.lens__alt { margin: 0; padding: 0.5rem 0.7rem; border-radius: 8px; background: var(--vp-c-bg); color: var(--vp-c-text-1); font-style: italic; }
.lens__note { margin: 1rem 0 0; font-size: 0.74rem; color: var(--vp-c-text-3); line-height: 1.5; }
</style>
