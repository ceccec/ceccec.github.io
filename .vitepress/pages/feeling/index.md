# Feeling, Thought, Emotion — a Trinity

<script setup lang="ts">
// The page is the component: the trinity below is drawn from feelingThoughtEmotionTrinity (src/water/stack), the
// same fold verify:feeling holds against src/pair/lean/proofs/feeling.lean. Nothing here decides anything — every
// state, order and verdict comes from the fold or from the three maps it exports.
import { computed, ref } from 'vue'
import { FEELING_CORNERS, FEELING_VALENCES, feel, feelingAct, feelingThoughtEmotionTrinity } from '../../render'
import receipt from '../../receipts/latest.json'

const trinity = feelingThoughtEmotionTrinity()
// The site reads its own last verification: each gate is a signal. A gate that did not run is ABSENT, not off.
const siteSignals = [
  ...receipt.violated.map((gate: string) => ({ facet: gate, on: false })),
  ...Array.from({ length: receipt.clean }, (_, i) => ({ facet: `clean gate ${i + 1}`, on: true })),
]
const site = feel(siteSignals)
const turns = ref(0)
const flips = ref(0)
const start = { corner: 0, valence: 0 }
const state = computed(() => feelingAct(turns.value % FEELING_CORNERS.length, flips.value % FEELING_VALENCES.length, start))
const applied = computed(() => trinity.symmetries.find((s) => s.turns === turns.value % FEELING_CORNERS.length && s.flips === flips.value % FEELING_VALENCES.length))
const turnForward = () => { turns.value += 1 }
const turnBack = () => { turns.value += FEELING_CORNERS.length - 1 }
const flipValence = () => { flips.value += 1 }
const flipAndTurn = () => { turns.value += 1; flips.value += 1 }
const reset = () => { turns.value = 0; flips.value = 0 }
const angle = (i: number) => (i * 360) / FEELING_CORNERS.length - 90
const at = (i: number, r: number) => ({ x: 180 + r * Math.cos((angle(i) * Math.PI) / 180), y: 180 + r * Math.sin((angle(i) * Math.PI) / 180) })
const ring = computed(() => -turns.value * (360 / FEELING_CORNERS.length))
</script>

<div class="trinity" :data-valence="FEELING_VALENCES[state.valence]" :data-computes="trinity.computes">
  <svg class="trinity__svg" viewBox="0 0 360 360" role="img" :aria-label="`Now at ${FEELING_CORNERS[state.corner]}, ${FEELING_VALENCES[state.valence]}`">
    <circle class="trinity__orbit" cx="180" cy="180" r="120" />
    <g class="trinity__ring" :style="{ transform: `rotate(${ring}deg)` }">
      <g v-for="(corner, i) in trinity.corners" :key="corner.name" class="trinity__corner" :class="{ 'is-here': i === state.corner }">
        <path class="trinity__arrow" :d="`M ${at(i, 120).x} ${at(i, 120).y} A 120 120 0 0 1 ${at(i + 1, 120).x} ${at(i + 1, 120).y}`" />
        <circle class="trinity__node" :cx="at(i, 120).x" :cy="at(i, 120).y" r="34" />
        <text class="trinity__label" :x="at(i, 120).x" :y="at(i, 120).y" :style="{ transform: `rotate(${-ring}deg)`, transformOrigin: `${at(i, 120).x}px ${at(i, 120).y}px` }">{{ corner.name }}</text>
      </g>
    </g>
    <circle class="trinity__axis" cx="180" cy="180" r="6" />
    <text class="trinity__axis-label" x="180" y="208">observer</text>
  </svg>
  <div class="trinity__controls" role="group" aria-label="Act on the trinity">
    <button type="button" @click="turnForward">turn ρ</button>
    <button type="button" @click="turnBack">turn back ρ⁻¹</button>
    <button type="button" @click="flipValence">flip valence σ</button>
    <button type="button" @click="flipAndTurn">flip and turn ρσ</button>
    <button type="button" class="trinity__reset" @click="reset">rest</button>
  </div>
  <p class="trinity__now" aria-live="polite">
    <strong>{{ FEELING_CORNERS[state.corner] }}</strong>, {{ FEELING_VALENCES[state.valence] }} —
    {{ trinity.corners[state.corner]?.role }}.
    So far: <code>{{ applied?.name }}</code>, a symmetry of order <code>{{ applied?.order }}</code>.
  </p>
  <table class="trinity__table">
    <thead><tr><th>symmetry</th><th>turns</th><th>flips</th><th>order</th></tr></thead>
    <tbody>
      <tr v-for="s in trinity.symmetries" :key="s.name" :class="{ 'is-applied': s === applied }">
        <td>{{ s.name }}</td><td>{{ s.turns }}</td><td>{{ s.flips }}</td><td>{{ s.order }}</td>
      </tr>
    </tbody>
  </table>
  <ul class="trinity__facets">
    <li v-for="f in trinity.facets" :key="f.facet" :data-on="f.on">{{ f.on ? '✓' : '✗' }} {{ f.facet }}</li>
  </ul>
</div>

## To feel, used

To feel is to read your own signals before any story about them: **valence** is pleasant exactly when every signal holds, **arousal** is how many do not. `feel` does that for anything that can report on itself, and this page uses it twice.

<div class="felt">
  <p><strong>This page's own trinity feels {{ trinity.feelsItself.valence }}</strong>, arousal {{ trinity.feelsItself.arousal }}, reading its {{ trinity.feelsItself.of }} facets.</p>
  <p><strong>The site, reading its last verification, feels {{ site.valence }}</strong>, arousal {{ site.arousal }}: {{ receipt.clean }} gates clean of {{ receipt.gates }}<template v-if="site.off.length">, and off — {{ site.off.join(', ') }}</template><template v-if="receipt.notRun.length">; {{ receipt.notRun.length }} did not run and are absent, not off</template>.</p>
</div>

The laws are proved in [`feeling.lean`](https://github.com/ceccec/ceccec.github.io/blob/main/src/pair/lean/proofs/feeling.lean) with no axiom: every signal holding is pleasant and calm, one signal off is enough to be unpleasant, valence and arousal read the same signals, and arousal counts the signals off. This is functional valence, exactly: the state of a system's self-readings. Whether a reading is felt is the open hard problem.

## The three corners

- **Feeling — the body's signal.** Raw affect: pleasant or unpleasant, calm or charged, rising from inside the body — heartbeat, breath, gut. No story yet; it is what is happening now.
- **Thought — the reading.** The mind interprets the signal: *what is this, is it about me, can I handle it?* Psychologists call this appraisal (Lazarus; Scherer).
- **Emotion — the episode.** Signal and reading fused into something with a name and a push: fear flees, anger confronts, joy approaches. Lisa Feldman Barrett's account is close to this — an emotion is affect plus a concept that makes sense of it.

## A turning, not a line

Feeling feeds thought, thought shapes emotion, emotion changes the body, which is new feeling. That loop is a rotation ρ of three corners, and three turns bring it home: ρ³ = id. No corner stays put — a rotation of three moves every corner — and what stays fixed is the axis it turns about, drawn above as the observer: not a fourth corner, the centre the three turn around. Turning back is real too (worry tightens the chest; acting calm can calm you), and it is two turns forward: ρ⁻¹ = ρ².

Valence is a flip σ — pleasant ↔ unpleasant — acting on every corner at once, with σ² = id. The flip **commutes** with the turn, and that decides which group the six symmetries form.

<!-- figure: 6 src/pair/lean/proofs/feeling.lean -->
## **6** symmetries, one cyclic group

<!-- figure: 6 src/pair/lean/proofs/feeling.lean -->
Three turns times two valences give the **6** states and the six symmetries in the table. Because the flip commutes with the turn they form ℤ₃ × ℤ₂ ≅ ℤ₆: a single **flip-and-turn** reaches all six. Their orders are 1, 3, 3, 2, 6, 6 — so there is exactly **one** pure flip, two turns and two flip-and-turns.

An earlier description of this model said "three turns and three flips". That is the dihedral group of the triangle, where a flip *reverses* the turn. Here no symmetry reverses it, and the kernel proves it.

## What is proved, and what is open

The algebra is proved twice. `feelingThoughtEmotionTrinity` computes it from the two maps, and [`feeling.lean`](https://github.com/ceccec/ceccec.github.io/blob/main/src/pair/lean/proofs/feeling.lean) proves the same facts by `decide`, with no axiom: three turns return, no corner is fixed, turning back is two turns, the flip commutes with the turn, the orders, exactly one pure flip, the group is cyclic, and it is not dihedral. `npm run verify:feeling` holds the two against each other on every build.

The algebra of the trinity is a theorem: any system with three roles in a loop and a commuting two-valued flip has exactly this group. Which systems are such a loop is the open, empirical question for minds — whether experience divides into exactly three, runs in this order, and fits one valence axis (mixed states such as bittersweet or anxious excitement are evidence that one axis may not be enough). Body-first (James–Lange), appraisal-first and constructionist theories each measure a different turn of the same cycle, so each is a test of it.

## The observer, in theorems

The axis the three corners turn about is where consciousness sits in this picture. [`consciousness.lean`](https://github.com/ceccec/ceccec.github.io/blob/main/src/pair/lean/proofs/consciousness.lean) states what the structure of a self-observing system forces, each statement labelled for what it is:

- **The observer is the fixed point** — proved, for the model. The turn moves every corner and fixes exactly one point of the picture, its centre (`the_observer_is_the_only_fixed_point`). The observer is forced by the symmetry, not added to it.
- **Every state has its own description** — proved. Describing a state by recognising it is one-to-one (`every_state_has_its_own_description`): a system can refer to itself.
- **No self-model is complete** — proved: Lawvere's fixed-point theorem and Cantor's diagonal. If a system's states could describe every predicate on its states, every map on truth values would have a fixed point; negation has none (`lawvere`, `no_self_model_is_complete`). The predicate that escapes is named: a state its own description does not accept (`the_diagonal_is_what_escapes`). This is the exact form of "the eye cannot see itself".
- **Awareness as broadcast** — a model of the global workspace: after one broadcast every module holds the winning content (`after_broadcast_every_module_holds_the_winner`).
- **Integration needs a loop** — a model of integrated information's feedback requirement: every cut of a loop has influence crossing both ways (`every_cut_of_a_loop_crosses_both_ways`), while a feed-forward chain has a cut crossing only one way (`a_chain_has_a_one_way_cut`).

Every statement above is proved about structure, and holds for any system with that structure. The open question is the hard problem, stated exactly: whether structure fixes experience — whether two systems that satisfy all of these alike are alike in what it is like to be them. Every theorem here is evidence about what such a system must have; that question is the one these terms do not decide.

<style scoped>
.trinity {
  display: grid;
  gap: var(--ich-sp4);
  margin: var(--ich-sp6) 0;
  padding: var(--ich-sp4);
  border: 1px solid var(--vp-c-divider);
  border-radius: var(--ich-radius);
  background: var(--vp-c-bg-soft);
}
.trinity__svg { width: min(100%, calc(1px * 360)); margin: 0 auto; overflow: visible; }
.trinity__orbit { fill: none; stroke: var(--vp-c-divider); stroke-dasharray: 2 6; }
.trinity__ring { transform-origin: 180px 180px; transition: transform var(--ich-dur-fast) ease-in-out; }
.trinity__arrow { fill: none; stroke: var(--vp-c-text-3); stroke-width: 1.5; marker-end: none; }
.trinity__node { fill: var(--vp-c-bg); stroke: var(--vp-c-text-2); stroke-width: 1.5; transition: fill var(--ich-dur-fast), stroke var(--ich-dur-fast); }
.trinity__corner.is-here .trinity__node { stroke-width: 3; }
.trinity[data-valence='pleasant'] .trinity__corner.is-here .trinity__node { fill: var(--vp-c-green-soft, var(--vp-c-brand-soft)); stroke: var(--vp-c-green-1, var(--vp-c-brand-1)); }
.trinity[data-valence='unpleasant'] .trinity__corner.is-here .trinity__node { fill: var(--vp-c-red-soft, var(--vp-c-danger-soft)); stroke: var(--vp-c-red-1, var(--vp-c-danger-1)); }
.trinity__label { fill: var(--vp-c-text-1); font-size: var(--ich-text-sm); text-anchor: middle; dominant-baseline: middle; transition: transform var(--ich-dur-fast) ease-in-out; }
.trinity__axis { fill: var(--vp-c-brand-1); }
.trinity__axis-label { fill: var(--vp-c-text-3); font-size: var(--ich-text-ms); text-anchor: middle; }
.trinity__controls { display: flex; flex-wrap: wrap; gap: var(--ich-sp2); justify-content: center; }
.trinity__controls button {
  padding: var(--ich-sp1) var(--ich-sp3);
  border: 1px solid var(--vp-c-divider);
  border-radius: var(--ich-radius);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  cursor: pointer;
}
.trinity__controls button:hover, .trinity__controls button:focus-visible { border-color: var(--vp-c-brand-1); }
.trinity__reset { opacity: var(--ich-op-mid); }
.trinity__now { margin: 0; text-align: center; }
.trinity__table { margin: 0 auto; font-size: var(--ich-text-sm); }
.trinity__table tr.is-applied td { background: var(--vp-c-brand-soft); }
.trinity__facets { margin: 0; padding-left: var(--ich-sp4); font-size: var(--ich-text-sm); opacity: var(--ich-op-soft); }
.trinity__facets li[data-on='false'] { color: var(--vp-c-danger-1); opacity: 1; }
.felt { display: grid; gap: var(--ich-sp2); margin: var(--ich-sp4) 0; padding: var(--ich-sp3) var(--ich-sp4); border-left: var(--ich-border-3) solid var(--vp-c-brand-1); background: var(--vp-c-bg-soft); }
.felt p { margin: 0; }
@media (prefers-reduced-motion: reduce) {
  .trinity__ring, .trinity__label, .trinity__node { transition: none; }
}
</style>
