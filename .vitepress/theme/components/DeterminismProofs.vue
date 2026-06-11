<script setup lang="ts">
import { computed } from 'vue'
import { buildMatrix, determinismProofs } from '../lib/quantumMind'
import { useLocale } from '../lib/useLocale'
import { useDeviceEnergy } from '../lib/useDeviceEnergy'

// Prove all with animations: the portal's own thesis made visible. The same input
// twins to the same colours; one edit avalanches half the 128 bits red; a·b and
// b·a stand apart (genus 2); a leaf folds up its audit path to the root; distinct
// seeds scatter without collision; and one set folds to one root in any order.
// Every value is computed over real hashes in the core and proven measured = must-be.
const data = determinismProofs(buildMatrix())
const { bg, pick } = useLocale()
const { saveEnergy } = useDeviceEnergy()

type Proof = (typeof data.proofs)[number]
const has = <K extends string>(proof: Proof, key: K): proof is Proof & Record<K, unknown> => key in proof

const bgPrinciple: Record<string, string> = {
  determinism: 'Детерминизъм',
  avalanche: 'Лавинен ефект (доказателство срещу подправяне)',
  order: 'Чувствителност към реда (род 2)',
  inclusion: 'Меркъл включване',
  collision: 'Без колизии',
  setfold: 'Инвариантност на сгъването на множество',
}
const bgClaim: Record<string, string> = {
  determinism: 'Един и същ вход винаги дава един и същ UUID — провери чрез преизчисление, не с разрешение.',
  avalanche: 'Смени един символ и ~половината от 128-те бита се обръщат — всяка промяна е видима.',
  order: 'merge(a,b) се различава от merge(b,a): сгъването е некомутативно, двете посоки са различни.',
  inclusion: 'Всеки лист носи одитна пътека, която преизчислява корена — включване, доказуемо без доверие към хоста.',
  collision: 'Различни семена дават различни UUID-та по целия влак на пи — никои две координати не споделят разписка.',
  setfold: 'Едно и също множество се сгъва до един корен в произволен ред — сгъването зависи от множеството, не от редицата.',
}

const proofs = computed(() =>
  data.proofs.map((proof) => ({
    ...proof,
    principleText: bg.value ? bgPrinciple[proof.id] ?? proof.principle : proof.principle,
    claimText: bg.value ? bgClaim[proof.id] ?? proof.claim : proof.claim,
    bitRows: has(proof, 'bits') ? chunk(proof.bits as number[], 16) : null,
  })),
)
function chunk<T>(arr: T[], n: number): T[][] {
  const out: T[][] = []
  for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n))
  return out
}
function hsl(value: number) {
  return `hsl(${Math.round(value * 320 + 200) % 360}, 70%, 58%)`
}
const t = computed(() =>
  pick(
    { eyebrow: 'prove all · the deterministic core, in animation', predicted: 'predicted', measured: 'measured', proven: 'proven', samples: 'samples' },
    { eyebrow: 'докажи всичко · детерминираното ядро, в анимация', predicted: 'предсказано', measured: 'измерено', proven: 'доказани', samples: 'проби' },
  ),
)
</script>

<template>
  <section class="dpf dt-card" :class="{ still: saveEnergy }">
    <header class="dpf__head">
      <p class="eyebrow">{{ t.eyebrow }}</p>
      <p class="dpf__score">
        <strong>{{ data.matched }}/{{ data.count }}</strong> {{ t.proven }} ·
        {{ data.samples.toLocaleString() }} {{ t.samples }}
      </p>
    </header>

    <div class="dpf__grid">
      <article v-for="proof in proofs" :key="proof.id" class="dpf__card">
        <h3>{{ proof.principleText }}</h3>
        <p class="dpf__claim">{{ proof.claimText }}</p>

        <div class="dpf__stage">
          <!-- Determinism / order / set-fold: two strips, equal (twin) or distinct. -->
          <div v-if="proof.kind === 'twin'" class="dpf__twin">
            <div class="dpf__strip">
              <span v-for="(v, i) in (proof.stripA as number[])" :key="'a' + i" :style="{ background: hsl(v) }" />
            </div>
            <span class="dpf__rel" :class="{ eq: proof.same }">{{ proof.same ? '=' : '≠' }}</span>
            <div class="dpf__strip">
              <span v-for="(v, i) in (proof.stripB as number[])" :key="'b' + i" :style="{ background: hsl(v) }" />
            </div>
          </div>

          <!-- Avalanche: a 16×8 grid of bits; the flipped ones light up in a wave. -->
          <div v-else-if="proof.kind === 'avalanche' && proof.bitRows" class="dpf__bits">
            <span
              v-for="(bit, i) in (proof.bits as number[])"
              :key="i"
              class="dpf__bit"
              :class="{ on: bit === 1 }"
              :style="{ animationDelay: ((i % 16) + Math.floor(i / 16)) * 40 + 'ms' }"
            />
          </div>

          <!-- Merkle inclusion: leaves fold pairwise up to a single root. -->
          <div v-else-if="proof.kind === 'merkle'" class="dpf__merkle">
            <div v-for="(size, layer) in (proof.layers as number[])" :key="layer" class="dpf__layer" :style="{ animationDelay: layer * 0.5 + 's' }">
              <span v-for="n in size" :key="n" class="dpf__node" />
            </div>
          </div>

          <!-- Collision-freedom: distinct seeds scatter, none overlapping. -->
          <svg v-else-if="proof.kind === 'scatter'" viewBox="0 0 100 46" class="dpf__svg" preserveAspectRatio="none">
            <circle
              v-for="(pt, i) in (proof.points as { x: number; y: number; hue: number }[])"
              :key="i"
              :cx="4 + pt.x * 92"
              :cy="4 + pt.y * 38"
              r="2.2"
              :fill="`hsl(${pt.hue}, 70%, 58%)`"
              class="dpf__dot"
              :style="{ animationDelay: (i % 12) * 120 + 'ms' }"
            />
          </svg>
        </div>

        <code class="dpf__formula">{{ proof.formula }}</code>
        <footer class="dpf__foot" :class="{ ok: proof.match }">
          <span>{{ t.predicted }} <b>{{ proof.predicted }}</b></span>
          <span>{{ t.measured }} <b>{{ proof.measured }}</b></span>
          <span class="dpf__badge">{{ proof.match ? '✓' : '×' }}</span>
        </footer>
      </article>
    </div>
  </section>
</template>

<style scoped>
.dpf {
  margin: 1.5rem 0;
  border-radius: 14px;
  padding: 1.2rem 1.4rem;
}
.dpf__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}
.dpf__score {
  margin: 0;
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}
.dpf__score strong { color: var(--vp-c-brand-1); }
.dpf__grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  margin-top: 0.6rem;
}
.dpf__card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 0.85rem 0.95rem;
  background: var(--vp-c-bg);
}
.dpf__card h3 { margin: 0; font-size: 0.95rem; line-height: 1.25; }
.dpf__claim { margin: 0; font-size: 0.8rem; color: var(--vp-c-text-2); line-height: 1.5; }
.dpf__stage {
  height: 70px;
  border-radius: 8px;
  background:
    radial-gradient(circle at 50% 120%, rgba(99, 102, 241, 0.16), transparent 70%),
    var(--vp-c-bg-soft);
  display: grid;
  place-items: center;
  overflow: hidden;
  padding: 6px;
}
.dpf__svg { width: 100%; height: 100%; display: block; }

/* twin */
.dpf__twin { display: flex; align-items: center; gap: 0.6rem; }
.dpf__strip {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 2px;
  animation: dpf-breathe 2.8s ease-in-out infinite;
}
.dpf__strip span { width: 12px; height: 20px; border-radius: 2px; }
.dpf__rel { font-weight: 800; color: hsl(0, 65%, 60%); }
.dpf__rel.eq { color: hsl(150, 60%, 45%); }
@keyframes dpf-breathe { 0%, 100% { opacity: 0.7; } 50% { opacity: 1; } }

/* avalanche */
.dpf__bits {
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  gap: 2px;
}
.dpf__bit {
  width: 7px;
  height: 7px;
  border-radius: 1px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
}
.dpf__bit.on {
  background: hsl(0, 80%, 60%);
  border-color: hsl(0, 80%, 60%);
  animation: dpf-flip 3s ease-in-out infinite;
}
@keyframes dpf-flip {
  0%, 100% { background: var(--vp-c-bg-soft); border-color: var(--vp-c-divider); }
  20%, 70% { background: hsl(0, 85%, 60%); border-color: hsl(0, 85%, 60%); box-shadow: 0 0 5px hsl(0, 85%, 60%); }
}

/* merkle */
.dpf__merkle { display: flex; flex-direction: column-reverse; align-items: center; gap: 5px; }
.dpf__layer { display: flex; gap: 4px; animation: dpf-rise 3s ease-in-out infinite; }
.dpf__node {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: hsl(248, 70%, 64%);
}
@keyframes dpf-rise {
  0%, 100% { opacity: 0.45; transform: translateY(0); }
  40% { opacity: 1; transform: translateY(-2px); }
}

/* scatter */
.dpf__dot { animation: dpf-pulse 2.6s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
@keyframes dpf-pulse { 0%, 100% { opacity: 0.55; } 50% { opacity: 1; } }

.dpf__formula {
  font-size: 0.72rem;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  border-radius: 6px;
  padding: 0.25rem 0.45rem;
  overflow-x: auto;
  white-space: nowrap;
}
.dpf__foot {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 0.74rem;
  color: var(--vp-c-text-2);
}
.dpf__foot b { color: var(--vp-c-text-1); }
.dpf__badge { margin-left: auto; font-weight: 800; color: var(--vp-c-text-3); }
.dpf__foot.ok .dpf__badge { color: hsl(150, 65%, 45%); }

.dpf.still .dpf__strip,
.dpf.still .dpf__bit.on,
.dpf.still .dpf__layer,
.dpf.still .dpf__dot {
  animation: none;
}
</style>
