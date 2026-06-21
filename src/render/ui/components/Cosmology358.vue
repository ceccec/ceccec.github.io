<script setup lang="ts">
// ☳ Zhèn · Thunder · arousing · upper·yang · shrink — self-referencing 10D widget
const ICHING_MASK = { hexagram: 15, glyph: '☳', lower: '☰', upper: '☳', color: '#00FFFF' }
import { computed } from 'vue'
import { useLocale } from '../lib'
import { yinYang, chess358, chakrasAura, humanDesign, computerDesign, design358, music358, geometry358, emf358, tiers358 } from '../lib'

// 3-5-8 across domains: the same Fibonacci tiers (3, 5, 8) recur in yin-yang
// (three powers, five elements, eight trigrams), on the chessboard (minor piece,
// rook, the 8 x 8 board), and — mapped honestly as belief frameworks, not science
// — in the yogic chakra tradition and in Human Design.
const { bg, pick, pickDeep, tg } = useLocale()

const domains = computed(() => {
  const yy = yinYang()
  const ch = chess358()
  const ck = chakrasAura()
  const hd = humanDesign()
  const cd = computerDesign()
  const mu = music358()
  const ge = geometry358()
  const ef = emf358()
  return [
    { key: 'yinyang', icon: '☯', title: pick('yin-yang', 'ин-ян'), belief: false, rows: yy.tiers.map((tier) => ({ n: tier.tier, text: `${tier.name}: ${tier.members.join(' · ')}` })) },
    { key: 'chess', icon: '♛', title: pick(`chess · ${ch.squares} squares`, `шах · ${ch.squares} полета`), belief: false, rows: ch.tiers.map((tier) => ({ n: tier.tier, text: tier.where })) },
    { key: 'computer', icon: '🖳', title: pick('computer design', 'компютърен дизайн'), belief: false, rows: cd.tiers.map((tier) => ({ n: tier.tier, text: `${tier.name}: ${tier.members.join(' · ')}` })) },
    { key: 'music', icon: '♫', title: pick('music', 'музика'), belief: false, rows: mu.tiers.map((tier) => ({ n: tier.tier, text: `${tier.name}: ${tier.members.join(' · ')}` })) },
    { key: 'geometry', icon: '△', title: pick('geometry', 'геометрия'), belief: false, rows: ge.tiers.map((tier) => ({ n: tier.tier, text: tier.name })) },
    { key: 'emf', icon: '⚡', title: pick('emf', 'ЕМ поле'), belief: false, rows: ef.tiers.map((tier) => ({ n: tier.tier, text: `${tier.name}: ${tier.members.join(' · ')}` })) },
    { key: 'chakras', icon: '🧘', title: pick('chakras & aura', 'чакри и аура'), belief: true, rows: ck.tiers.map((tier) => ({ n: tier.tier, text: `${tier.name}: ${tier.members.join(' · ')}` })) },
    { key: 'humandesign', icon: '⌘', title: pick('human design', 'хюман дизайн'), belief: true, rows: hd.tiers.map((tier) => ({ n: tier.tier, text: `${tier.name}: ${tier.members.join(' · ')}` })) },
  ]
})
const method = computed(() => design358().method)
const t = computed(() =>
  pickDeep(
    { eyebrow: '3-5-8 across domains · and a design method', method: 'And 3-5-8 is itself a method to design new ideas:', note: 'Chakras/aura and human design are spiritual / belief frameworks, not science — correspondences and teaching devices, with no medical or factual claim.' },
    { eyebrow: '3-5-8 през областите · и метод за дизайн', method: 'И самият 3-5-8 е метод за дизайн на нови идеи:', note: 'Чакрите/аурата и хюман дизайн са духовни/вярови рамки, не наука — съответствия и учебни средства, без медицински или фактически твърдения.' },
  ),
)
</script>

<template>
  <section class="cos dt-card" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <div class="cos__grid">
      <article v-for="d in domains" :key="d.key" class="cos__card" :class="{ belief: d.belief }">
        <p class="cos__h"><span class="cos__icon">{{ d.icon }}</span> {{ d.title }}</p>
        <div v-for="(row, i) in d.rows" :key="i" class="cos__row">
          <span class="cos__n">{{ row.n }}</span>
          <span class="cos__text">{{ tg(row.text) }}</span>
        </div>
      </article>
    </div>
    <p class="cos__method-h">{{ t.method }}</p>
    <p class="cos__method">
      <span v-for="m in method" :key="m.tier"><b>{{ m.tier }}</b> {{ tg(m.does) }}</span>
    </p>
    <p class="cos__note">⚠ {{ t.note }}</p>
  </section>
</template>

<style scoped>
.cos {
  margin: 1.25rem 0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}
.cos__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.6rem;
}
@media (min-width: 640px) {
  .cos__grid {
    grid-template-columns: 1fr 1fr;
  }
}
.cos__card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 0.7rem 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.cos__card.belief {
  border-left: 3px solid var(--vp-c-warning-1, var(--vp-c-warning-1));
}
.cos__h {
  margin: 0 0 0.2rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
  font-weight: 600;
}
.cos__icon {
  font-size: 1.1rem;
}
.cos__row {
  display: grid;
  grid-template-columns: 1.5rem 1fr;
  gap: 0.5rem;
  align-items: baseline;
}
.cos__n {
  text-align: center;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  border-radius: 6px;
  font-size: 0.78rem;
}
.cos__text {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}
.cos__method-h {
  margin: 0.9rem 0 0.2rem;
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
}
.cos__method {
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
}
.cos__method b {
  color: var(--vp-c-brand-1);
}
.cos__note {
  margin: 0.8rem 0 0;
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  border-left: 3px solid var(--vp-c-warning-1, var(--vp-c-warning-1));
  padding-left: 0.6rem;
}
</style>
