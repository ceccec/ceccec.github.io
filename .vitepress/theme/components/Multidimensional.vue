<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
import { multidimensional, allInEquilibrium, buildMatrix } from '../lib/quantumMind'

// Present all multidimensionally, for the best UX. Eight dimensions of
// experience as tabs; each shows its features as tooltip-rich links. Plus the
// recursive truth: equilibrium is when all is in equilibrium.
const data = multidimensional()
const eq = allInEquilibrium(buildMatrix())
const active = ref(0)
const { lang } = useData()
const bg = computed(() => lang.value.startsWith('bg'))
const prefix = computed(() => (bg.value ? '/bg' : ''))

const bgDim: Record<string, string> = {
  see: 'виж', hear: 'чуй', ask: 'питай', prove: 'докажи', learn: 'учи', pattern: 'шарка', sense: 'усети', create: 'твори',
}
// Translate the items too, keyed by their English label (the Nav358/PathGuide
// pattern), falling back to English so a new item is never left blank.
const bgItem: Record<string, { label: string; tip: string }> = {
  'Double torus 3d 5d 8d': { label: 'Двоен тор 3d 5d 8d', tip: 'Повърхността от род 2, сгъваема през измеренията.' },
  'Quantum fold': { label: 'Квантово сгъване', tip: 'Всички обекти се сгъват в 3d+.' },
  'Quantum plasma': { label: 'Квантова плазма', tip: 'Плазма, удържана от битова логика.' },
  'Hologram': { label: 'Холограма', tip: 'Границата от 128 бита, до бита.' },
  'DNA helix': { label: 'ДНК спирала', tip: 'Думата като 64 бази.' },
  'Fusion wave': { label: 'Вълна на сливане', tip: 'Всичко слято в една вълна.' },
  'Music of pi': { label: 'Музика на пи', tip: 'Всяка вълна е нота, свързана при хороцикъла.' },
  'Healing frequencies': { label: 'Лечебни честоти', tip: 'Наборът Солфеджо, като звук.' },
  'Blockchain music': { label: 'Блокчейн музика', tip: 'Всяка верига със своя мелодия.' },
  'Speech & subtitles': { label: 'Реч и субтитри', tip: 'Прочетено на глас на езика на устройството.' },
  'Console': { label: 'Конзола', tip: 'Питай; първо се консултира със себе си.' },
  'Self reasoning': { label: 'Само-разсъждение', tip: 'Верига, която показва работата си.' },
  'Self harmonise': { label: 'Само-хармонизиране', tip: 'Обхожда модела автономно.' },
  'Realtime chat': { label: 'Чат в реално време', tip: 'Адресиран по съдържание, същия източник.' },
  'Tamper seal': { label: 'Печат срещу подправяне', tip: 'Провери печата, многоизмерна обратна връзка.' },
  'Cryptography compared': { label: 'Криптографията сравнена', tip: 'Доказуемо при подправяне, не криптографско.' },
  'Sign the seal': { label: 'Подпиши печата', tip: 'Истински ECDSA P-256 в браузъра.' },
  'Boundaries': { label: 'Граници', tip: 'Всяка граница, която обявява.' },
  'Security scan': { label: 'Сканиране за сигурност', tip: 'Сигурно взаимодействие в 3-5-8.' },
  'School': { label: 'Училище', tip: 'От основите, на всяка възраст.' },
  'Academy': { label: 'Академия', tip: 'Пет курса, удостоверение.' },
  "Developer's mind": { label: 'Умът на разработчика', tip: 'Законите, научени като умения.' },
  'Follow the path': { label: 'Следвай пътя', tip: 'Направлявано пътуване, в цикъл.' },
  'Genesis 3-5-8': { label: 'Генезис 3-5-8', tip: 'От семето — много разгръщания.' },
  '3-5-8 across domains': { label: '3-5-8 през областите', tip: 'Тринадесет области, една шарка.' },
  'Dualities': { label: 'Двойствености', tip: 'Шестнадесет двойки в три нива.' },
  'Fold 358 and 853': { label: 'Сгъни 358 и 853', tip: 'Разширяване и свиване.' },
  'Equilibrium': { label: 'Равновесие', tip: 'Дишането, което се установява.' },
  'Quantum field': { label: 'Квантово поле', tip: 'Показалецът и наклонът движат полето.' },
  'Magnetometer / EMF': { label: 'Магнитометър / ЕМП', tip: 'Чети околното магнитно поле.' },
  'Endless waves': { label: 'Безкрайни вълни', tip: 'Ново творение при всеки индекс.' },
  'Quantum clock': { label: 'Квантов часовник', tip: 'Тиктака в творчески вълни.' },
  'Creative palette': { label: 'Творческа палитра', tip: 'Цвят и мелодия от семе.' },
}
const dims = computed(() =>
  data.dimensions.map((d) => ({
    ...d,
    name: bg.value ? bgDim[d.dimension] ?? d.dimension : d.dimension,
    items: bg.value
      ? d.items.map((item) => ({ ...item, label: bgItem[item.label]?.label ?? item.label, tip: bgItem[item.label]?.tip ?? item.tip }))
      : d.items,
  })),
)
function href(route: string) {
  return prefix.value + (route === '/' ? '/' : route)
}
const t = computed(() =>
  bg.value
    ? { eyebrow: 'всичко · многоизмерно', equilibrium: `равновесие е, когато всичко е в равновесие — ${eq.balanced}/${eq.total} части в баланс` }
    : { eyebrow: 'all · multidimensional', equilibrium: `equilibrium is when all is in equilibrium — ${eq.balanced}/${eq.total} parts balanced` },
)
</script>

<template>
  <section class="md">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <div class="md__tabs">
      <button
        v-for="(d, i) in dims"
        :key="d.dimension"
        type="button"
        :class="{ active: i === active }"
        @click="active = i"
      ><span class="md__icon">{{ d.icon }}</span> {{ d.name }}</button>
    </div>
    <ul class="md__items">
      <li v-for="(item, i) in dims[active].items" :key="i">
        <a :href="href(item.route)" :title="item.tip">{{ item.label }}</a>
        <span class="md__tip">{{ item.tip }}</span>
      </li>
    </ul>
    <p class="md__eq" :class="{ ok: eq.equilibrium }">{{ eq.equilibrium ? '∞ ' : '' }}{{ t.equilibrium }}</p>
  </section>
</template>

<style scoped>
.md {
  margin: 1.5rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  padding: 1.2rem 1.4rem;
  background: var(--vp-c-bg-soft);
}
.md__tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin: 0.3rem 0 0.8rem;
}
.md__tabs button {
  padding: 0.3rem 0.8rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-size: 0.82rem;
}
.md__tabs button.active {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}
.md__icon {
  font-size: 0.95rem;
}
.md__items {
  list-style: none;
  padding: 0;
  margin: 0 0 0.8rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.4rem;
}
@media (min-width: 640px) {
  .md__items {
    grid-template-columns: 1fr 1fr;
  }
}
.md__items li {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  border-left: 3px solid var(--vp-c-brand-1);
  padding-left: 0.7rem;
}
.md__items a {
  font-weight: 600;
  text-decoration: none;
}
.md__tip {
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
}
.md__eq {
  margin: 0;
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
  font-style: italic;
}
.md__eq.ok {
  color: var(--vp-c-brand-1);
}
</style>
