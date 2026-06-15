<script setup lang="ts">
import { computed } from 'vue'
import { buildMatrix, quantumSolutions } from '../lib/quantumMind'
import { useLocale } from '../lib/useLocale'

// Society already needs quantum solutions — each need answered now by a quantum
// capability the portal already runs, client-side and free.
const data = quantumSolutions(buildMatrix())
const { bg, localize, pick } = useLocale()

const bgNeed: Record<string, { need: string; solution: string }> = {
  'Trust without a central authority': { need: 'Доверие без централна власт', solution: 'Адресирани по съдържание разписки, които всеки преизчислява — провери чрез употреба, не с разрешение.' },
  'Coordinate without a server': { need: 'Координация без сървър', solution: 'Колективен ум от същия източник: всеки свързан контекст се слива в един разпределен корен.' },
  'Equal access to learning': { need: 'Равен достъп до учене', solution: 'Безплатна офлайн академия — пет преизчислими курса и проверим акредитив, на всяка възраст.' },
  'Provenance against misinformation': { need: 'Произход срещу дезинформация', solution: 'Цитирай източник чрез неговия хеш; точната версия оцелява дори ако хостът изчезне.' },
  'Quantum literacy for everyone': { need: 'Квантова грамотност за всеки', solution: 'Пусни истинска квантова схема в браузъра и виж как измерването колапсира състоянието.' },
  'Privacy by default': { need: 'Поверителност по подразбиране', solution: 'Всичко от страна на клиента: без акаунт, без телеметрия, нищо не се изпраща.' },
  'Balance, not collapse or runaway': { need: 'Баланс, не колапс или бягство', solution: 'Честотите и цялото се установяват в равновесие чрез затихващи, само-лечебни вълни.' },
  'Inclusive access to information': { need: 'Приобщаващ достъп до информация', solution: 'Чуй данни и чети страници на глас — сонификация и хармонична реч, на всяко устройство.' },
}
const bgQuantum: Record<string, string> = {
  collapse: 'колапс', entanglement: 'заплитане', superposition: 'суперпозиция', measurement: 'измерване',
  simulation: 'симулация', 'no observation': 'без наблюдение', coherence: 'кохерентност', wave: 'вълна',
}
const items = computed(() =>
  data.needs.map((entry) => ({
    ...entry,
    needText: bg.value ? bgNeed[entry.need]?.need ?? entry.need : entry.need,
    solutionText: bg.value ? bgNeed[entry.need]?.solution ?? entry.solution : entry.solution,
    quantumText: bg.value ? bgQuantum[entry.quantum] ?? entry.quantum : entry.quantum,
  })),
)
const t = computed(() =>
  pick(
    { eyebrow: 'society already needs quantum solutions', open: 'Open' },
    { eyebrow: 'обществото вече се нуждае от квантови решения', open: 'Отвори' },
  ),
)
</script>

<template>
  <section class="qsol dt-card">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <div class="qsol__grid">
      <article v-for="entry in items" :key="entry.need" class="qsol__card">
        <header>
          <strong>{{ entry.needText }}</strong>
          <span class="qsol__q">{{ entry.quantumText }}</span>
        </header>
        <p>{{ entry.solutionText }}</p>
        <a class="dt-btn dt-btn--outline qsol__go" :href="localize(entry.route)">{{ t.open }} →</a>
      </article>
    </div>
  </section>
</template>

<style scoped>
.qsol {
  margin: 1.5rem 0;
  border-radius: 14px;
  padding: 1.2rem 1.4rem;
}
.qsol__grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  margin-top: 0.6rem;
}
.qsol__card {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 0.8rem 0.9rem;
  background: var(--vp-c-bg);
}
.qsol__card header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.6rem;
}
.qsol__card strong {
  font-size: 0.92rem;
}
.qsol__q {
  flex: none;
  font-size: 0.62rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  border-radius: 999px;
  padding: 0.1rem 0.5rem;
}
.qsol__card p {
  margin: 0;
  flex: 1;
  font-size: 0.84rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}
.qsol__go {
  width: max-content;
  font-size: 0.74rem;
  padding: 0.2rem 0.7rem;
  text-decoration: none;
}
</style>
