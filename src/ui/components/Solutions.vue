<script setup lang="ts">
import { computed } from 'vue'
import { buildMatrix, solutions } from '../lib/quantumMind'
import { useLocale } from '../lib/useLocale'

// Create solutions: each a concrete problem and how the portal solves it, with a
// link to the capability. The "what problem" companion to the professionals map.
const data = solutions(buildMatrix())
const { bg, localize, pick } = useLocale()

const bgEntry: Record<string, { problem: string; solution: string }> = {
  'Reproduce a brand palette without storing a file': {
    problem: 'Възпроизведи бранд палитра без да пазиш файл',
    solution: 'Цитирай семе-дума; същите пет цвята в hex/RGB/CMYK се пресмятат всеки път.',
  },
  'Verify a claim without trusting the host': {
    problem: 'Провери твърдение без да се доверяваш на хоста',
    solution: 'Преизчисли адресираната по съдържание разписка и сравни корена — доказателство чрез употреба.',
  },
  'Read data without looking at a screen': {
    problem: 'Чети данни без да гледаш екран',
    solution: 'Озвучи ги — чуй тенденции и отклонения като звук, от страна на клиента.',
  },
  'Let an AI assistant use your tools': {
    problem: 'Нека ИИ асистент ползва инструментите ти',
    solution: 'Публикувай ги на MCP слоя; агентът чете tools/list и вика tools/call.',
  },
  'Tune a reading voice to a harmony': {
    problem: 'Настрой четящ глас към хармония',
    solution: 'Чети на глас с хармоничен контур на тона от балансирания спектър.',
  },
  'Run a quantum circuit with no hardware': {
    problem: 'Пусни квантова схема без хардуер',
    solution: 'Симулирай GHZ вектор на състоянието в браузъра и го измери — хистограмата клони към правилото на Борн.',
  },
  'Learn from the ground up, free, at any age': {
    problem: 'Учи от основата, безплатно, на всяка възраст',
    solution: 'Училището и академията: пет преизчислими курса и проверим акредитив за дипломиране.',
  },
  'Work offline, with no account, nothing sent': {
    problem: 'Работи офлайн, без акаунт, нищо не се изпраща',
    solution: 'Всичко тече на устройството ти — архитектурата е единствената цена.',
  },
}
const items = computed(() =>
  data.solutions.map((entry) => ({
    ...entry,
    problemText: bg.value ? bgEntry[entry.problem]?.problem ?? entry.problem : entry.problem,
    solutionText: bg.value ? bgEntry[entry.problem]?.solution ?? entry.solution : entry.solution,
  })),
)
const t = computed(() =>
  pick(
    { eyebrow: 'create solutions · problem → solution', open: 'Open' },
    { eyebrow: 'създай решения · проблем → решение', open: 'Отвори' },
  ),
)
</script>

<template>
  <section class="sol dt-card">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <div class="sol__grid">
      <article v-for="entry in items" :key="entry.problem" class="sol__card">
        <p class="sol__problem">{{ entry.problemText }}</p>
        <p class="sol__solution">{{ entry.solutionText }}</p>
        <footer>
          <span class="sol__cap">{{ entry.capability }}</span>
          <a class="dt-btn dt-btn--outline sol__go" :href="localize(entry.route)">{{ t.open }} →</a>
        </footer>
      </article>
    </div>
  </section>
</template>

<style scoped>
.sol {
  margin: 1.5rem 0;
  border-radius: 14px;
  padding: 1.2rem 1.4rem;
}
.sol__grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  margin-top: 0.6rem;
}
.sol__card {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 0.8rem 0.9rem;
  background: var(--vp-c-bg);
}
.sol__problem {
  margin: 0;
  font-weight: 700;
  font-size: 0.92rem;
}
.sol__solution {
  margin: 0;
  flex: 1;
  font-size: 0.84rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}
.sol__card footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;
  margin-top: 0.2rem;
}
.sol__cap {
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: var(--vp-c-brand-1);
}
.sol__go {
  font-size: 0.74rem;
  padding: 0.2rem 0.7rem;
  text-decoration: none;
}
</style>
