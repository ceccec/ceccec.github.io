<script setup lang="ts">
// ☰ Qián · Heaven · creative · upper·yang · shrink — self-referencing 10D widget
const ICHING_MASK = { hexagram: 61, trigram: '☲☰', glyph: '☲☰', lo: 'Lí·clinging', up: 'Qián·creative', color: '#FFFF0F' }
import { computed } from 'vue'
import { useLocale } from '../lib/useLocale'
import { dualities } from '../lib/quantumMind'

// Compare all dualities, in 3-5-8 (Fibonacci) tiers. Each pair is a real duality
// because folding left-then-right differs from right-then-left.
const data = dualities()
const { bg } = useLocale()

const bgPole: Record<string, string> = {
  inner: 'вътрешен', outer: 'външен', yin: 'ин', yang: 'ян', zero: 'нула', one: 'едно',
  cross: 'кръст', fold: 'сгъване', forward: 'напред', reverse: 'назад', sense: 'смислова',
  antisense: 'антисмислова', compute: 'изчисли', verify: 'провери', expand: 'разшири',
  contract: 'свий', self: 'себе', other: 'друго', question: 'въпрос', answer: 'отговор',
  sound: 'звук', colour: 'цвят', analog: 'аналогов', digital: 'цифров', premise: 'предпоставка',
  inference: 'извод', english: 'английски', bulgarian: 'български', symbol: 'символ',
  number: 'число', glyph: 'глиф', uuid: 'UUID',
  up: 'горе', down: 'долу', right: 'дясно', left: 'ляво', front: 'отпред', back: 'отзад',
  out: 'навън', in: 'навътре', clockwise: 'по часовника', counter: 'обратно', simple: 'просто',
  rich: 'богато', seal: 'печат', heal: 'лекувай', done: 'готово', planned: 'планирано',
  note: 'нота', hue: 'нюанс', give: 'давай', take: 'вземай', local: 'локално',
  distributed: 'разпределено', open: 'отворено', closed: 'затворено', wave: 'вълна', particle: 'частица',
  north: 'север', south: 'юг', east: 'изток', west: 'запад', heaven: 'небе', earth: 'земя',
  wood: 'дърво', metal: 'метал', fire: 'огън', water: 'вода', receive: 'приеми', project: 'проектирай',
  act: 'действай', fold_in: 'сгъни', return: 'върни', encode: 'кодирай', decode: 'декодирай',
  many: 'много', whole: 'цяло', part: 'част', light: 'светло', dark: 'тъмно', real: 'истинско',
  fake: 'фалшиво', proof: 'доказателство', claim: 'твърдение', signal: 'сигнал', noise: 'шум',
  order: 'ред', chaos: 'хаос', read: 'чети', write: 'пиши', public: 'публично', private: 'лично',
  teacher: 'учител', student: 'ученик', past: 'минало', future: 'бъдеще', body: 'тяло', mind: 'ум',
}
const pole = (p: string) => (bg.value ? bgPole[p] ?? p : p)
const tierName = (tier: number) =>
  bg.value
    ? { 3: 'основни', 5: 'структурни', 8: 'изразни', 13: 'възникнали', 21: 'открити' }[tier]
    : { 3: 'core', 5: 'structural', 8: 'expressive', 13: 'emergent', 21: 'discovered' }[tier]

const tiers = computed(() =>
  [3, 5, 8, 13, 21].map((tier) => ({
    tier,
    name: tierName(tier),
    pairs: data.dualities.filter((d) => d.tier === tier),
  })),
)
const t = computed(() =>
  bg.value
    ? { eyebrow: 'всички дуалности · 3-5-8-13-21', lead: `${data.count} двустранни двойки в петте тиера на Фибоначи; всяка е истинска дуалност, защото редът има значение (ляво⇄дясно се различават) и се сгъва в двете посоки.` }
    : { eyebrow: 'all dualities · 3-5-8-13-21', lead: `${data.count} two-sided pairs across the five Fibonacci tiers; each is a real duality because order matters (left⇄right differ) and it folds both ways.` },
)
</script>

<template>
  <section class="dual dt-card" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <p class="dual__lead">{{ t.lead }}</p>
    <div v-for="group in tiers" :key="group.tier" class="dual__tier">
      <p class="dual__tier-name"><strong>{{ group.tier }}d</strong> · {{ group.name }} ({{ group.pairs.length }})</p>
      <ul class="dual__pairs">
        <li v-for="d in group.pairs" :key="d.left">
          <span class="dual__l">{{ pole(d.left) }}</span>
          <span class="dual__sep">⇄</span>
          <span class="dual__r">{{ pole(d.right) }}</span>
          <code class="dual__root">{{ d.root.slice(0, 8) }}</code>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.dual {
  margin: 1.25rem 0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}
.dual__lead {
  margin: 0.2rem 0 0.8rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}
.dual__tier {
  margin-bottom: 0.7rem;
}
.dual__tier-name {
  margin: 0 0 0.35rem;
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-3);
}
.dual__tier-name strong {
  color: var(--vp-c-brand-1);
}
.dual__pairs {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 0.35rem;
}
.dual__pairs li {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 0.3rem 0.55rem;
  font-size: 0.82rem;
}
.dual__l {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}
.dual__sep {
  color: var(--vp-c-text-3);
}
.dual__r {
  color: var(--vp-c-text-1);
  font-weight: 600;
}
.dual__root {
  margin-left: auto;
  font-size: 0.64rem;
  color: var(--vp-c-text-3);
}
</style>
