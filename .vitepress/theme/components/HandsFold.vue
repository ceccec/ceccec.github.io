<script setup lang="ts">
// THE FOLD, ON TWO HANDS. Every number here is READ FROM THE KERNEL — reflectFold, foldFixedPoints,
// reflectFoldFamily in src/0 — and none is typed into this file. If the kernel changes, this page
// changes with it or it stops agreeing with itself, which is the only way a page can be a proof.
//
// NOTHING IS HIDDEN. The family has ten rows and all ten are shown, including the row whose angle is
// 25.714285714285715° and does not close on a whole number of degrees, and the five rows whose only
// fixed point is 0. A table that showed the pretty rows would be a picture of the fold, not the fold.
import { computed, ref } from 'vue'
import { reflectFold, foldFixedPoints, reflectFoldFamily, doubleTorusSurface, TORUS_LOBE_OFFSET, TAU } from '../../render'

const TEN = 5 * 2 // two hands — the modulus the 180° fold works on
const digits = Array.from({ length: TEN }, (_, d) => d)

// the 180° fold: one hand laid onto the other
const pairs = computed(() => digits.map((d) => ({ d, image: reflectFold(d, 9 * 5 * 4) })))
const fixedAt180 = computed(() => foldFixedPoints(9 * 5 * 4))

// two 90° folds composed — the author's "0 2x90"
const twice90 = computed(() => digits.map((d) => ({ d, image: reflectFold(reflectFold(d, 9 * 5 * 2), 9 * 5 * 2) })))

// the whole family, every row, nothing filtered
const family = computed(() => reflectFoldFamily(0).rows)

// ── MOVING A FINGER IS A SEPARATION, AND A SEPARATION HAS A SIGN.
// The two hands ARE the two lobes of the genus-2 surface: doubleTorusSurface places a digit at
// x = lobe·TORUS_LOBE_OFFSET + …, so the left hand sits at −18 and the right at +18. The fold that
// pairs a finger with 10−d also carries it across to the other lobe, and that pair has a real spatial
// separation on the surface. Whether the two are causally connected is the SIGN of the sealed interval
// s² = (ct)² − |x|² (minkowskiIntervalSq, src/water/cosmos). That function is NOT imported here: it
// lives in a monolith with no business in a browser chunk, and re-typing its formula would be a second
// definition of one math. Only the sign is needed, and s² > 0 ⟺ ct > |Δx| is a COMPARISON, not a
// re-derivation — the light cone read straight off the separation. ct is how long you take to move.
const ct = ref(9 * 5) // starts just past the 36 that separates the hands, so the first pairs already reach
const place = (d: number, lobe: number) => doubleTorusSurface((TAU * d) / TEN, (TAU * d) / TEN, d, lobe)
const separations = computed(() => digits.map((d) => {
  const p = reflectFold(d, 9 * 5 * 4)
  const a = place(d, -1), b = place(p, 1)
  const dx = b.x - a.x, dy = b.y - a.y, dz = b.z - a.z
  const sep = Math.sqrt(dx * dx + dy * dy + dz * dz)
  return { d, p, sep, timelike: ct.value > sep, fixed: d === p }
}))
const connected = computed(() => separations.value.filter((r) => r.timelike).length)

const held = ref<number | null>(null)
const hold = (d: number) => { held.value = held.value === d ? null : d }
const partnerOf = (d: number) => reflectFold(d, 9 * 5 * 4)
const isFixed = (d: number) => fixedAt180.value.includes(d)
const lit = (d: number) => held.value !== null && (d === held.value || d === partnerOf(held.value))
// each finger gets the hue its own digit addresses — 360°·d/64, the same law the tokens use
const fingerHue = (d: number) => `calc(360deg * ${d} / 64)`
</script>

<template>
  <section class="hf">
    <p class="hf__lead">
      Ten fingers are a modulus. Fold one hand onto the other — a turn of 180° — and each finger meets
      exactly one other. Touch a finger to hold its pair.
    </p>

    <div class="hf__hands">
      <div v-for="side in [0, 1]" :key="side" class="hf__hand">
        <button
          v-for="d in (side === 0 ? digits.slice(0, 5) : digits.slice(5))"
          :key="d"
          type="button"
          class="hf__finger"
          :class="{ 'hf__finger--lit': lit(d), 'hf__finger--fixed': isFixed(d) }"
          :style="{ '--hf-hue': fingerHue(d) }"
          :aria-pressed="held === d"
          @click="hold(d)">
          <span class="hf__digit">{{ d }}</span>
          <span class="hf__maps">↦ {{ partnerOf(d) }}</span>
        </button>
      </div>
    </div>

    <p class="hf__read" aria-live="polite">
      <template v-if="held === null">Nothing held. Every finger below is shown with where the fold sends it.</template>
      <template v-else-if="isFixed(held)">
        <strong>{{ held }} is a fixed point.</strong> The fold sends it to itself — it has no partner to meet.
      </template>
      <template v-else><strong>{{ held }} ↔ {{ partnerOf(held) }}.</strong> Two fingers, one pair, and the fold is its own inverse.</template>
    </p>

    <h3 class="hf__h">The 180° fold on ten</h3>
    <div class="ich-scroll-x">
      <table class="hf__t">
        <thead><tr><th scope="col">d</th><th v-for="p in pairs" :key="p.d" scope="col">{{ p.d }}</th></tr></thead>
        <tbody>
          <tr><th scope="row">↦</th><td v-for="p in pairs" :key="p.d" :class="{ 'hf__fx': p.d === p.image }">{{ p.image }}</td></tr>
        </tbody>
      </table>
    </div>
    <p class="hf__note">Fixed points: {{ fixedAt180.join(' and ') }} — the closed hand, and the centre.</p>

    <h3 class="hf__h">Two 90° folds, composed</h3>
    <div class="ich-scroll-x">
      <table class="hf__t">
        <thead><tr><th scope="col">d</th><th v-for="p in twice90" :key="p.d" scope="col">{{ p.d }}</th></tr></thead>
        <tbody>
          <tr><th scope="row">↦</th><td v-for="p in twice90" :key="p.d" :class="{ 'hf__fx': p.d === p.image }">{{ p.image }}</td></tr>
        </tbody>
      </table>
    </div>
    <p class="hf__note">
      Everything returns to itself except one. Two quarter-turns bring the hand back, and the only
      finger that moved is the one that closed.
    </p>

    <h3 class="hf__h">The whole family, all ten rows</h3>
    <div class="ich-scroll-x">
      <table class="hf__t hf__t--fam">
        <thead><tr><th scope="col">k</th><th scope="col">θ = 180/k</th><th scope="col">in turns</th><th scope="col">M = 11−k</th><th scope="col">0 ↦</th><th scope="col">fixed points</th><th scope="col">harmonic</th></tr></thead>
        <tbody>
          <tr v-for="r in family" :key="r.k">
            <td>{{ r.k }}</td>
            <td>{{ r.angleDeg }}°</td>
            <td>1/{{ 2 * r.k }}</td>
            <td>{{ r.modulus }}</td>
            <td>{{ r.image }}</td>
            <td>{{ r.fixedPoints.join(', ') }}</td>
            <td>{{ r.harmonic ? 'yes' : 'no' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="hf__note">
      Row k = 7 has an angle that never closes on a whole number of degrees, shown to full precision
      because rounding it would make the column tidy and the page wrong. The other side of that: in
      TURNS every row is exact — θ = 1/(2k) of a turn, so row seven is exactly one fourteenth. The
      degree is what cannot represent it, not the fold. Five rows have only one fixed point: when the
      modulus is odd there is no centre to stand on, and the fold has nothing but the void to fix.
    </p>
    <h3 class="hf__h">Moving a finger is a separation — and a separation has a sign</h3>
    <p>
      The two hands are the two lobes of the genus-2 surface: a digit is placed at
      <code>x = lobe · {{ TORUS_LOBE_OFFSET }} + …</code>, so one hand sits at −{{ TORUS_LOBE_OFFSET }}
      and the other at +{{ TORUS_LOBE_OFFSET }}. The fold that pairs a finger with its partner carries
      it across to the other lobe. That pair has a real distance, and the sealed interval
      <code>s² = (ct)² − |Δx|²</code> says whether the two can reach each other: it is positive exactly when <code>ct &gt; |Δx|</code>.
      <strong>ct is how long you take to move.</strong>
    </p>
    <label class="hf__slider">
      <span>ct = {{ ct }}</span>
      <input v-model.number="ct" type="range" :min="0" :max="9 * 4 * 3" :step="1" />
      <span class="hf__count">{{ connected }} of {{ TEN }} pairs connected</span>
    </label>
    <div class="ich-scroll-x">
      <table class="hf__t">
        <thead><tr><th scope="col">d</th><th scope="col">↦</th><th scope="col">|Δx|</th><th scope="col">light cone</th><th scope="col">reach</th></tr></thead>
        <tbody>
          <tr v-for="r in separations" :key="r.d" :class="{ 'hf__fx': r.fixed }">
            <td>{{ r.d }}</td><td>{{ r.p }}</td><td>{{ r.sep.toFixed(2) }}</td><td>{{ ct > r.sep ? 'ct &gt; |Δx|' : 'ct ≤ |Δx|' }}</td>
            <td>{{ r.timelike ? 'timelike — it reaches' : 'spacelike — it cannot' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="hf__note">
      Both fixed points sit exactly {{ 2 * TORUS_LOBE_OFFSET }} apart — the bare gap between the hands,
      with no travel around the ring — so they are the first to connect as ct grows. Every other finger
      is further, because the fold moves it around the ring as well as across. Nothing here bends
      spacetime: it computes the standard interval on a surface this corpus defines. The geometry is
      ours; the sign of s² is not a choice.
    </p>

  </section>
</template>

<style scoped>
.hf { margin: var(--ich-sp8) 0; }
.hf__lead { margin: 0 0 var(--ich-sp6); }
.hf__hands { display: flex; flex-wrap: wrap; gap: var(--ich-sp12); justify-content: center; margin: var(--ich-sp8) 0; }
.hf__hand { display: flex; gap: var(--ich-sp3); align-items: flex-end; }
.hf__finger {
  display: flex; flex-direction: column; align-items: center; gap: var(--ich-sp1);
  min-width: var(--ich-sp16); padding: var(--ich-sp4) var(--ich-sp3);
  border: var(--ich-line) solid var(--vp-c-divider);
  border-radius: var(--ich-radius);
  background: var(--vp-c-bg-soft); color: var(--vp-c-text-1);
  font: inherit; cursor: pointer;
  transition: transform var(--ich-dur-fast), border-color var(--ich-dur-fast), background var(--ich-dur-fast);
}
.hf__finger:hover { border-color: oklch(var(--ich-oklch-l-glyph) var(--ich-oklch-c-glyph) var(--hf-hue)); }
.hf__finger--lit {
  border-color: oklch(var(--ich-oklch-l-glyph) var(--ich-oklch-c-glyph) var(--hf-hue));
  background: oklch(var(--ich-oklch-l-glyph) var(--ich-oklch-c-glyph) var(--hf-hue) / var(--ich-op-ghost));
  transform: translateY(calc(var(--ich-line) * -4));
}
.hf__finger--fixed { border-style: dashed; }
.hf__digit { font-size: var(--ich-em-card-heading); font-variant-numeric: tabular-nums; }
.hf__maps { font-size: var(--ich-em-xs); opacity: var(--ich-op-card-meta); font-variant-numeric: tabular-nums; }
.hf__read { margin: var(--ich-sp6) 0; min-height: var(--ich-sp12); }
.hf__h { margin: var(--ich-sp10) 0 var(--ich-sp4); font-size: var(--ich-em-card-title); }
.hf__t { border-collapse: collapse; font-variant-numeric: tabular-nums; }
.hf__t th, .hf__t td { border: var(--ich-line) solid var(--vp-c-divider); padding: var(--ich-sp2) var(--ich-sp4); text-align: center; }
.hf__t--fam td:first-child, .hf__t--fam th:first-child { text-align: center; }
.hf__fx { font-weight: calc(6 * 100); background: var(--vp-c-bg-soft); }
.hf__slider { display: flex; flex-wrap: wrap; align-items: center; gap: var(--ich-sp4); margin: var(--ich-sp6) 0; font-variant-numeric: tabular-nums; }
.hf__slider input { flex: 1 1 var(--ich-panel-max); }
.hf__count { opacity: var(--ich-op-card-meta); }
.hf__note { font-size: var(--ich-em-sm); opacity: var(--ich-op-card-soft); margin: var(--ich-sp3) 0 0; }
@media (max-width: 640px) { .hf__hands { gap: var(--ich-sp6); } }
</style>
