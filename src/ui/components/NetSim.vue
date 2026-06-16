<script setup lang="ts">
// ☰ Qián · Heaven · creative · upper·yang · shrink — self-referencing 10D widget
const ICHING_MASK = { hexagram: 63, trigram: '☰☰', glyph: '☰☰', lo: 'Qián·creative', up: 'Qián·creative', color: '#FFFFFF' }
import { computed, ref, watch } from 'vue'
import { pmixEvolve, congruence, hopfieldStore, hopfieldRecall, seedFromText, type Edge } from '../lib/quantumMind'

// The NETWORK simulator — three decoded domains driven entirely by the pure src/0 graph primitives
// (re-exported through ../lib/quantumMind). One config-driven component, three readout modes:
//   greek-colonies      — culture diffuses port-to-port along the Pontic coast: DeGroot consensus
//                         (pmixEvolve) pulls the chain toward one shared value (trade integration).
//   script-language-gene — three inheritance channels start coupled, then DECOUPLE under separate
//                         events (folk migration · elite dominance · script switch); the three
//                         congruence() correlations fall apart.
//   neurology           — a noisy probe completes to the nearest stored ±1 pattern (hopfieldRecall):
//                         content-addressed associative memory, the brain's torus map as analogy.
// Honest throughout: these are deterministic SIMULATORS/models, not the real systems.

type Domain = 'greek-colonies' | 'script-language-gene' | 'neurology'
const props = defineProps<{ domain?: Domain }>()
const domains: Domain[] = ['greek-colonies', 'script-language-gene', 'neurology']
const sel = ref<Domain>(props.domain && domains.includes(props.domain) ? props.domain : domains[0])

const TITLES: Record<Domain, string> = {
  'greek-colonies': 'Greek colonies — culture diffuses port-to-port along the Pontic coast',
  'script-language-gene': 'Script · language · gene — three inheritance channels decoupling under one history',
  neurology: 'Neurology — a noisy probe completes to a stored pattern (associative memory)',
}
const CAPTIONS: Record<Domain, string> = {
  'greek-colonies': 'Western Pontic apoikiai c.7th–1st c. BC (Apollonia/Sozopol Milesian, Mesembria/Nessebar Dorian + UNESCO 1983, Odessos/Varna, Dionysopolis, Tomis, Histria). Culture mixes port-to-port by sea trade — a DeGroot consensus pulling the coastal chain toward one shared value (integration). FLAG: "oldest gold / oldest town / oldest writing / Orphism / Thracian-Bulgarian continuity" superlatives as 5th-millennium or nationalist legend, kept off the colony horizon.',
  'script-language-gene': 'Script, language and gene are independent inheritance systems, only sometimes coupled (Yamnaya + PIE, Slavic gene + language) vs decoupled (script diffuses by trade / empire / religion; Turkic language spreads without the gene pool). Bulgaria proves it — Bulgars = name + state (~1.5% genes), Slavs = genes + language (~56%). "script = language = gene = nation" is the root origin-myth error.',
  neurology: "The brain's spatial map is TOROIDAL (grid-cell population activity lives on a torus, Gardner et al., Nature 2022); content-addressable recall is associative memory (Hopfield — Nobel Physics 2024; CA3 pattern completion). The mapping onto this Hopfield architecture is an analogy; Orch-OR / \"brain = universe\" mysticism is flagged and NOT adopted.",
}

// ── greek-colonies ──────────────────────────────────────────────────────────
// Six west-Pontic ports in a coastal chain (north → south along the coast); each starts with its own
// distinct culture value, and pmixEvolve mixes them toward consensus over `steps` rounds of trade.
const ports = ['Histria', 'Tomis', 'Dionysopolis', 'Odessos/Varna', 'Mesembria/Nessebar', 'Apollonia/Sozopol']
const portStart = [0.05, 0.25, 0.45, 0.6, 0.8, 1] // each port a different founding culture value
const coastEdges: Edge[] = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]] // the coastal chain
const colQ = ref(0.3)
const colSteps = ref(0)
const colValues = computed(() => pmixEvolve(portStart, coastEdges, colQ.value, colSteps.value))
const colMean = computed(() => portStart.reduce((s, v) => s + v, 0) / portStart.length)
const colSpread = computed(() => {
  const v = colValues.value
  return Math.max(...v) - Math.min(...v)
})

// ── script-language-gene ─────────────────────────────────────────────────────
// Six populations along a contact chain. All three channels start IDENTICAL but varying across
// populations (a gradient) so the coupled state reads congruence ≈ 1. Three events then act on
// different channels with different edge sets, decoupling the correlations:
//   folk migration  — mixes gene AND language together on the contact chain (couples the two).
//   elite dominance — spreads language alone (a separate elite-network edge set), no gene flow.
//   script switch   — diffuses script alone (by trade/empire/religion), independent of the rest.
const popN = 6
const popBase = Array.from({ length: popN }, (_, i) => i / (popN - 1)) // identical start, varies across pops
const contactEdges: Edge[] = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]] // neighbour-to-neighbour gene/language flow
const eliteEdges: Edge[] = [[0, 2], [0, 3], [0, 4], [0, 5]] // an elite hub imposing its language outward
const scriptEdges: Edge[] = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [0, 5]] // a script ring (trade/empire/religion)
const folk = ref(0) // folk-migration intensity (gene + language)
const elite = ref(0) // elite-dominance intensity (language only)
const script = ref(0) // script-switch intensity (script only)
const STEPS = 6 // fixed mixing depth per event; the sliders set the per-step rate

const geneVec = computed(() => pmixEvolve(popBase, contactEdges, folk.value, STEPS))
const langVec = computed(() => {
  let v = pmixEvolve(popBase, contactEdges, folk.value, STEPS) // folk migration carries language with the genes
  v = pmixEvolve(v, eliteEdges, elite.value, STEPS) // then an elite spreads language alone
  return v
})
const scriptVec = computed(() => pmixEvolve(popBase, scriptEdges, script.value, STEPS)) // script diffuses on its own network

const congGeneLang = computed(() => congruence(geneVec.value, langVec.value))
const congLangScript = computed(() => congruence(langVec.value, scriptVec.value))
const congGeneScript = computed(() => congruence(geneVec.value, scriptVec.value))
const congRows = computed(() => [
  { label: 'gene · language', c: congGeneLang.value },
  { label: 'language · script', c: congLangScript.value },
  { label: 'gene · script', c: congGeneScript.value },
])

// ── neurology ────────────────────────────────────────────────────────────────
// Three 5×5 (=25-cell) ±1 glyph patterns stored as a Hopfield weight matrix; a probe is a chosen
// pattern with `noise` cells flipped (seeded, deterministic) plus any manual cell toggles; recall
// descends the energy to the nearest stored attractor — content-addressed pattern completion.
const GRID = 5
const NCELL = GRID * GRID
// 5×5 glyphs as row strings ('#' = +1, '.' = -1): a cross (+), a diagonal (/), a frame (□).
const GLYPHS = [
  ['..#..', '..#..', '#####', '..#..', '..#..'], // cross
  ['....#', '...#.', '..#..', '.#...', '#....'], // diagonal
  ['#####', '#...#', '#...#', '#...#', '#####'], // frame
]
const glyphNames = ['cross', 'diagonal', 'frame']
function glyphToVec(rows: string[]): number[] {
  return rows.join('').split('').map((c) => (c === '#' ? 1 : -1))
}
const patterns = GLYPHS.map(glyphToVec)
const W = hopfieldStore(patterns)

const target = ref(0) // which stored pattern the probe starts from
const noise = ref(5) // number of cells the noise slider flips (seeded)
const flips = ref<Set<number>>(new Set()) // manual cell toggles, on top of the noise
function resetFlips() { flips.value = new Set() }
function toggleCell(i: number) {
  const s = new Set(flips.value)
  if (s.has(i)) s.delete(i)
  else s.add(i)
  flips.value = s
}

// Deterministic seeded shuffle (LCG over a seedFromText hash) → pick the first `noise` cells to flip.
function noisyIndices(seed: number, k: number): Set<number> {
  const idx = Array.from({ length: NCELL }, (_, i) => i)
  let state = (seed >>> 0) || 1
  for (let i = idx.length - 1; i > 0; i--) {
    state = (state * 1664525 + 1013904223) >>> 0
    const j = state % (i + 1)
    const tmp = idx[i]; idx[i] = idx[j]; idx[j] = tmp
  }
  return new Set(idx.slice(0, Math.max(0, Math.min(NCELL, k))))
}
const probe = computed(() => {
  const base = patterns[target.value].slice()
  const noisy = noisyIndices(seedFromText(`net:neuro:${target.value}:${noise.value}`), noise.value)
  for (const i of noisy) base[i] = -base[i]
  for (const i of flips.value) base[i] = -base[i]
  return base
})
const recall = computed(() => hopfieldRecall(W, probe.value))
const recovered = computed(() => recall.value.state.every((v, i) => v === patterns[target.value][i]))

watch(sel, () => { resetFlips() })
watch(target, () => { resetFlips() })

function cls(v: number) { return v >= 0 ? 'on' : 'off' }
</script>

<template>
  <div class="ns" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <div class="ns-head">
      <select v-model="sel" class="ns-pick" aria-label="decoded network domain">
        <option v-for="d in domains" :key="d" :value="d">{{ d }}</option>
      </select>
      <span class="ns-tag">network · simulator</span>
    </div>
    <div class="ns-title">{{ TITLES[sel] }}</div>

    <!-- greek-colonies -->
    <template v-if="sel === 'greek-colonies'">
      <div class="ns-levers">
        <label class="ns-lever">
          diffusion rate q
          <input v-model.number="colQ" type="range" min="0" max="1" step="0.02">
          <code>{{ colQ.toFixed(2) }}</code>
        </label>
        <label class="ns-lever">
          steps (trade rounds)
          <input v-model.number="colSteps" type="range" min="0" max="40" step="1">
          <code>{{ colSteps }}</code>
        </label>
      </div>
      <div class="ns-panel">
        <div class="ns-panel-h">port culture value <span>chain converges → consensus</span></div>
        <div v-for="(p, i) in ports" :key="p" class="ns-row">
          <code>{{ p }}</code>
          <div class="ns-track">
            <div class="ns-bar mean" :style="{ left: colMean * 100 + '%' }" />
            <div class="ns-bar" :style="{ width: (colValues[i] ?? 0) * 100 + '%' }" />
          </div>
          <span class="ns-val">{{ ((colValues[i] ?? 0) * 100).toFixed(0) }}</span>
        </div>
      </div>
      <div class="ns-stat">
        spread (max − min) <code>{{ (colSpread * 100).toFixed(1) }}</code> ·
        consensus value <code>{{ (colMean * 100).toFixed(0) }}</code> — the chain integrates by sea trade
      </div>
    </template>

    <!-- script-language-gene -->
    <template v-else-if="sel === 'script-language-gene'">
      <div class="ns-levers">
        <label class="ns-lever cut">
          folk migration (gene + language)
          <input v-model.number="folk" type="range" min="0" max="0.5" step="0.02">
          <code>{{ folk.toFixed(2) }}</code>
        </label>
        <label class="ns-lever spiral">
          elite dominance (language only)
          <input v-model.number="elite" type="range" min="0" max="0.5" step="0.02">
          <code>{{ elite.toFixed(2) }}</code>
        </label>
        <label class="ns-lever spiral">
          script switch (script only)
          <input v-model.number="script" type="range" min="0" max="0.5" step="0.02">
          <code>{{ script.toFixed(2) }}</code>
        </label>
      </div>
      <div class="ns-panel">
        <div class="ns-panel-h">channel congruence <span>start coupled (≈1) → decouple</span></div>
        <div v-for="r in congRows" :key="r.label" class="ns-row">
          <code>{{ r.label }}</code>
          <div class="ns-track">
            <div class="ns-bar mid" />
            <div class="ns-bar corr" :class="r.c < 0 ? 'neg' : 'pos'" :style="{ width: Math.abs(r.c) * 50 + '%', left: r.c < 0 ? (50 - Math.abs(r.c) * 50) + '%' : '50%' }" />
          </div>
          <span class="ns-val">{{ r.c.toFixed(2) }}</span>
        </div>
      </div>
      <div class="ns-stat">
        each event acts on a different channel network — the correlations fall apart:
        "script = language = gene = nation" is the origin-myth error
      </div>
    </template>

    <!-- neurology -->
    <template v-else>
      <div class="ns-levers">
        <label class="ns-lever">
          stored pattern
          <select v-model.number="target" class="ns-pick sm" aria-label="target pattern">
            <option v-for="(n, i) in glyphNames" :key="n" :value="i">{{ n }}</option>
          </select>
        </label>
        <label class="ns-lever spiral">
          noise (cells flipped, seeded)
          <input v-model.number="noise" type="range" min="0" :max="NCELL" step="1">
          <code>{{ noise }}</code>
        </label>
      </div>
      <div class="ns-grids">
        <div v-for="(g, gi) in patterns" :key="'store' + gi" class="ns-grid-wrap">
          <div class="ns-grid-h">stored: {{ glyphNames[gi] }}</div>
          <div class="ns-grid" :style="{ '--g': GRID }">
            <span v-for="(v, ci) in g" :key="ci" class="ns-cell" :class="cls(v)" />
          </div>
        </div>
      </div>
      <div class="ns-grids">
        <div class="ns-grid-wrap">
          <div class="ns-grid-h">probe <span>(click cells to flip)</span></div>
          <div class="ns-grid live" :style="{ '--g': GRID }">
            <span v-for="(v, ci) in probe" :key="ci" class="ns-cell" :class="cls(v)" @click="toggleCell(ci)" />
          </div>
        </div>
        <div class="ns-grid-wrap">
          <div class="ns-grid-h">recalled <span :class="recovered ? 'ok' : 'bad'">{{ recovered ? '✓ completed' : 'spurious' }}</span></div>
          <div class="ns-grid" :style="{ '--g': GRID }">
            <span v-for="(v, ci) in recall.state" :key="ci" class="ns-cell" :class="cls(v)" />
          </div>
        </div>
      </div>
      <div class="ns-stat">
        energy <code>{{ recall.energy.toFixed(2) }}</code> ·
        iters <code>{{ recall.iters }}</code> ·
        content-addressed completion to the nearest stored attractor
      </div>
    </template>

    <p class="ns-note">
      Deterministic SIMULATORS, not the real systems; seeded where random. {{ CAPTIONS[sel] }}
    </p>
  </div>
</template>

<style scoped>
.ns { margin: 1.5rem 0; border: 1px solid var(--vp-c-divider); border-radius: 12px; background: var(--vp-c-bg-soft); padding: 0.85rem; font-size: 0.85rem; }
.ns-head { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.5rem; margin-bottom: 0.35rem; }
.ns-pick { font-size: 0.8rem; padding: 0.15rem 0.5rem; border: 1px solid var(--vp-c-divider); border-radius: 6px; background: var(--vp-c-bg); color: var(--vp-c-text-1); }
.ns-pick.sm { font-size: 0.74rem; padding: 0.1rem 0.35rem; }
.ns-title { font-size: 0.95rem; font-weight: 600; margin-bottom: 0.6rem; }
.ns-tag { font-size: 0.72rem; color: var(--vp-c-text-3); font-family: var(--vp-font-family-mono, monospace); }
.ns-levers { display: flex; flex-wrap: wrap; gap: 0.6rem 1.2rem; margin-bottom: 0.6rem; }
.ns-lever { display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.74rem; color: var(--vp-c-text-2); }
.ns-lever.spiral code { color: hsl(0 65% 58%); }
.ns-lever.cut code { color: hsl(150 55% 45%); }
.ns-lever input { width: 8rem; }
.ns-lever code { color: var(--vp-c-brand-1); font-variant-numeric: tabular-nums; }
.ns-panel-h { font-size: 0.74rem; font-weight: 600; color: var(--vp-c-text-2); margin-bottom: 0.35rem; display: flex; justify-content: space-between; }
.ns-panel-h span { font-weight: 400; color: var(--vp-c-text-3); }
.ns-row { display: grid; grid-template-columns: 9rem 1fr 2.4rem; align-items: center; gap: 0.4rem; margin: 0.13rem 0; }
.ns-row code { font-size: 0.7rem; color: var(--vp-c-text-2); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ns-track { position: relative; height: 0.7rem; background: var(--vp-c-bg); border-radius: 4px; overflow: hidden; }
.ns-bar { height: 100%; border-radius: 4px; background: var(--vp-c-brand-1); transition: width 0.2s, left 0.2s; min-width: 1px; }
.ns-bar.mean { position: absolute; top: 0; width: 2px; min-width: 2px; background: var(--vp-c-text-3); border-radius: 0; transform: translateX(-1px); }
.ns-bar.mid { position: absolute; inset: 0; left: 50%; width: 1px; min-width: 1px; background: var(--vp-c-divider); border-radius: 0; }
.ns-bar.corr { position: absolute; top: 0; }
.ns-bar.corr.pos { background: hsl(150 55% 45%); }
.ns-bar.corr.neg { background: hsl(0 65% 58%); }
.ns-val { font-size: 0.7rem; color: var(--vp-c-text-3); text-align: right; font-variant-numeric: tabular-nums; }
.ns-stat { font-size: 0.76rem; color: var(--vp-c-text-2); margin-top: 0.4rem; }
.ns-stat code { color: var(--vp-c-brand-1); }
.ns-grids { display: flex; flex-wrap: wrap; gap: 1rem; margin: 0.4rem 0; }
.ns-grid-wrap { display: inline-flex; flex-direction: column; gap: 0.25rem; }
.ns-grid-h { font-size: 0.72rem; color: var(--vp-c-text-2); display: flex; gap: 0.4rem; }
.ns-grid-h span { color: var(--vp-c-text-3); }
.ns-grid-h span.ok { color: hsl(150 55% 45%); }
.ns-grid-h span.bad { color: hsl(0 65% 58%); }
.ns-grid { display: grid; grid-template-columns: repeat(var(--g), 0.85rem); gap: 2px; }
.ns-grid.live .ns-cell { cursor: pointer; }
.ns-cell { width: 0.85rem; height: 0.85rem; border-radius: 2px; background: var(--vp-c-bg); border: 1px solid var(--vp-c-divider); }
.ns-cell.on { background: var(--vp-c-brand-1); border-color: var(--vp-c-brand-1); }
.ns-cell.off { background: var(--vp-c-bg); }
.ns-note { margin: 0.7rem 0 0; font-size: 0.76rem; color: var(--vp-c-text-2); line-height: 1.55; }
</style>
