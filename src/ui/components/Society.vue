<script setup lang="ts">
// ☶ Gèn · Mountain · keeping still · upper·yang · shrink — self-referencing 10D widget
const ICHING_MASK = { hexagram: 37, lo: '☲', up: '☶', glyph: '☶', color: '#F00F0F', name: 'Gèn', principle: 'keeping still' }
import { computed } from 'vue'
import { buildMatrix, society, societyCreatesRequiredPages } from '../lib/quantumMind'
import { useLocale } from '../lib/useLocale'

// Develop the society with the new knowledge, then pair and fold it: five dualities,
// each social organ shown beside its opposite and folded bidirectionally (genus 2,
// like the double torus), all merged into one society root. Opposition is held and
// folded, not erased. A pair stands only while both its cells' bases hold.
const data = society(buildMatrix())
const { bg, localize, pick } = useLocale()

const bgCell: Record<string, { cell: string; principle: string }> = {
  Sovereignty: { cell: 'Суверенитет', principle: 'Твое по подразбиране — цялото се самоизчислява на устройството ти, нищо не се изпраща.' },
  'Collective mind': { cell: 'Колективен ум', principle: 'Всеки свързан контекст се слива в един споделен корен — координация без сървър.' },
  'Trust without authority': { cell: 'Доверие без власт', principle: 'Без централна сила; доверяваш се чрез преизчисление, не чрез подчинение.' },
  'Proof by recomputation': { cell: 'Доказателство чрез преизчисление', principle: 'Всеки преизчислява разписката; една промяна лавинообразно личи.' },
  'Open inquiry': { cell: 'Открито питане', principle: 'Мистериите са споделени, не скрити — всеки въпрос стои на открито.' },
  'Public evidence': { cell: 'Публично доказателство', principle: 'Всеки въпрос носи преизчислимо доказателство, свободно за проверка.' },
  'Every voice': { cell: 'Всеки глас', principle: 'Всеки глас идва с противоположния си, държан в баланс — противоположно въртене на всички мащаби.' },
  'Kept in time': { cell: 'Държани в такт', principle: 'Споделен ритъм държи многото гласове заедно, без диригент.' },
  'Free learning': { cell: 'Свободно учене', principle: 'От деца до старци, академията сама изчислява цялото, отворена за всички.' },
  'Self-healing balance': { cell: 'Самолекуващ баланс', principle: 'Нито колапс, нито бягство — цялото се установява в затихващи, самолекуващи вълни.' },
}
const tr = (cell: string, field: 'cell' | 'principle', fallback: string) => (bg.value ? bgCell[cell]?.[field] ?? fallback : fallback)

const pairs = computed(() =>
  data.pairs.map((pair) => ({
    duality: pair.duality,
    paired: pair.paired,
    merged: pair.fold.merged,
    left: { ...pair.left, cellText: tr(pair.left.cell, 'cell', pair.left.cell), principleText: tr(pair.left.cell, 'principle', pair.left.principle) },
    right: { ...pair.right, cellText: tr(pair.right.cell, 'cell', pair.right.cell), principleText: tr(pair.right.cell, 'principle', pair.right.principle) },
  })),
)
const t = computed(() =>
  pick(
    { eyebrow: 'develop the society · pair and fold', folded: 'folded', cells: 'cells', see: 'see' },
    { eyebrow: 'развий обществото · сдвои и сгъни', folded: 'сгънати', cells: 'клетки', see: 'виж' },
  ),
)

// Society creates the rest of the required pages, by law — folded into the mind, not
// new files: each legislation requirement is surfaced here as an anchored section
// (e.g. #license), so the footer and nav can deep-link to what the architecture already
// satisfies. Computed from the model, content-addressed.
const required = societyCreatesRequiredPages(buildMatrix())
const reqLabelBg: Record<string, string> = {
  'privacy & data protection': 'поверителност и защита на данните',
  accessibility: 'достъпност',
  licensing: 'лицензиране',
  transparency: 'прозрачност',
  security: 'сигурност',
  'consumer fairness': 'честност към потребителя',
}
const reqMetBg: Record<string, string> = {
  'privacy & data protection': 'нулева мрежа по подразбиране, нищо не се проследява, нищо не напуска устройството',
  accessibility: 'WCAG-ориентирана семантика, намалено движение, системни шрифтове',
  licensing: 'отворен код, математика в публично достояние (без патентни пречки)',
  transparency: 'преизчислимо, адресирано по съдържание, напълно одитируемо',
  security: 'устойчив на подправяне печат, Web Crypto от страната на клиента',
  'consumer fairness': 'безплатно за всички, без тъмни модели, без заключване',
}
const requiredPages = computed(() =>
  required.pages.map((page) => ({
    id: page.page.slice(1),
    label: bg.value ? reqLabelBg[page.requirement] ?? page.requirement : page.requirement,
    satisfies: bg.value ? reqMetBg[page.requirement] ?? page.satisfies : page.satisfies,
    root: page.root,
  })),
)
const tReq = computed(() =>
  pick(
    { title: 'pages required by law', note: 'each already satisfied by the architecture' },
    { title: 'страници, изисквани по закон', note: 'всяка вече удовлетворена от архитектурата' },
  ),
)
</script>

<template>
  <section class="soc dt-card" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <header class="soc__head">
      <p class="eyebrow">{{ t.eyebrow }}</p>
      <p class="soc__score">
        <strong>{{ data.standing }}/{{ data.count }}</strong> {{ t.folded }} · {{ data.cells }} {{ t.cells }}
      </p>
    </header>
    <div class="soc__list">
      <article v-for="pair in pairs" :key="pair.duality" class="soc__pair" :class="{ folded: pair.paired }">
        <h3 class="soc__duality">{{ pair.duality }}</h3>
        <div class="soc__fold">
          <a class="soc__cell" :href="localize(pair.left.route)">
            <strong>{{ pair.left.cellText }}</strong>
            <span>{{ pair.left.principleText }}</span>
          </a>
          <span class="soc__join" aria-hidden="true">⇄</span>
          <a class="soc__cell" :href="localize(pair.right.route)">
            <strong>{{ pair.right.cellText }}</strong>
            <span>{{ pair.right.principleText }}</span>
          </a>
        </div>
        <code class="soc__merged" :title="pair.merged">⧉ {{ pair.merged.slice(0, 13) }}…</code>
      </article>
    </div>
    <p class="soc__root">
      {{ pick('all folds merged into one society root', 'всички сгъвания, слети в един корен на обществото') }}
      <code :title="data.root">{{ data.root.slice(0, 13) }}…</code>
    </p>
    <div class="soc__required">
      <h3 class="soc__duality">{{ tReq.title }}</h3>
      <ul class="soc__reqlist">
        <li v-for="page in requiredPages" :id="page.id" :key="page.id" class="soc__req">
          <strong class="soc__reqname">{{ page.label }}</strong>
          <span class="soc__reqmet">{{ page.satisfies }}</span>
          <code class="soc__reqroot" :title="page.root">⧉ {{ page.root.slice(0, 13) }}…</code>
        </li>
      </ul>
      <p class="soc__reqnote">{{ tReq.note }}</p>
    </div>
  </section>
</template>

<style scoped>
.soc {
  margin: 1.5rem 0;
  border-radius: 14px;
  padding: 1.2rem 1.4rem;
}
.soc__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}
.soc__score {
  margin: 0;
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}
.soc__score strong { color: var(--vp-c-brand-1); }
.soc__list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 0.7rem;
}
.soc__pair {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 0.7rem 0.9rem 0.8rem;
  background: var(--vp-c-bg);
}
.soc__pair.folded {
  border-color: color-mix(in srgb, var(--vp-c-brand-1) 32%, var(--vp-c-divider));
}
.soc__duality {
  margin: 0 0 0.5rem;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--vp-c-brand-1);
}
.soc__fold {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: stretch;
  gap: 0.6rem;
}
.soc__cell {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0.55rem 0.65rem;
  border-radius: 9px;
  background: var(--vp-c-bg-soft);
  text-decoration: none;
  color: inherit;
  transition: background 0.15s ease;
}
.soc__cell:hover { background: var(--vp-c-default-soft); }
.soc__cell strong { font-size: 0.86rem; color: var(--vp-c-text-1); }
.soc__cell span { font-size: 0.76rem; color: var(--vp-c-text-2); line-height: 1.5; }
.soc__join {
  align-self: center;
  font-size: 1.2rem;
  color: var(--vp-c-brand-1);
  font-weight: 700;
}
.soc__merged {
  display: inline-block;
  margin-top: 0.55rem;
  font-size: 0.68rem;
  color: var(--vp-c-text-3);
}
.soc__root {
  margin: 0.9rem 0 0;
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}
.soc__root code {
  font-size: 0.72rem;
  color: hsl(272, 60%, 60%);
  margin-left: 0.3rem;
}
.soc__required {
  margin-top: 1.1rem;
  padding-top: 0.9rem;
  border-top: 1px solid var(--vp-c-divider);
}
.soc__reqlist {
  list-style: none;
  margin: 0.6rem 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.6rem;
}
.soc__req {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0.55rem 0.7rem;
  border-radius: 9px;
  background: var(--vp-c-bg-soft);
  scroll-margin-top: 80px;
}
.soc__req:target {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}
.soc__reqname {
  font-size: 0.84rem;
  color: var(--vp-c-text-1);
  text-transform: capitalize;
}
.soc__reqmet {
  font-size: 0.74rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}
.soc__reqroot {
  font-size: 0.66rem;
  color: var(--vp-c-text-3);
}
.soc__reqnote {
  margin: 0.6rem 0 0;
  font-size: 0.74rem;
  color: var(--vp-c-text-2);
}
@media (max-width: 520px) {
  .soc__fold { grid-template-columns: 1fr; }
  .soc__join { transform: rotate(90deg); }
}
</style>
