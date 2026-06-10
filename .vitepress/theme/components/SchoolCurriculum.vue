<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { buildMatrix, schoolCurriculum, type SchoolStage } from '../lib/quantumMind'

const school = schoolCurriculum(buildMatrix())
const { lang } = useData()
const bg = computed(() => lang.value.startsWith('bg'))

type Card = { ageBand: string; title: string; bigIdea: string; inPlainWords: string; activity: string }

const bgCards: Record<SchoolStage, Card> = {
  kids: {
    ageBand: 'възраст 4-6',
    title: 'Поничката с две дупки',
    bigIdea: 'повърхност от род 2 (двойният тор)',
    inPlainWords:
      'Представи си захарна поничка, около която можеш да увиеш конец. Нашата специална поничка има две дупки, така че можеш да я обиколиш по повече от един начин.',
    activity: 'Нарисувай цифрата 8 или геврек и проследи всяка примка с пръст.',
  },
  children: {
    ageBand: 'възраст 7-9',
    title: 'Разписки със стикери',
    bigIdea: 'UUID разписки и публично доказателство',
    inPlainWords:
      'Всеки път, когато компютърът направи нещо, той получава таен код-стикер. Ако някой промени работата, стикерът спира да съвпада и никой не може да мами.',
    activity: 'Дай на всяка задачка таен код и после провери, че кодът още съвпада.',
  },
  preteens: {
    ageBand: 'възраст 10-12',
    title: 'Папки от цифри',
    bigIdea: 'ceccec цифрови папки и pi влакът',
    inPlainWords:
      'Вземи безкрайните цифри на pi, сдвои всяка цифра с огледалната ѝ и ги подреди в папки. Цялата система пази математиката си в тези папки.',
    activity: 'Запиши първите цифри на pi, сдвои първата с последната и ги подреди в папки.',
  },
  teens: {
    ageBand: 'възраст 13-15',
    title: 'Точки, линии и пръстов отпечатък',
    bigIdea: 'графът от атоми и merkle коренът',
    inPlainWords:
      'Идеите са точки, връзките между тях са линии. Свий цялата картина в един отпечатък. Промени една точка и отпечатъкът се променя напълно.',
    activity: 'Построй малка карта от точки и линии на идеите си и я сгъни в един общ код.',
  },
  students: {
    ageBand: 'възраст 16-18',
    title: 'Форми, които помнят',
    bigIdea: 'топология: четири независими примки и Ойлеровата характеристика',
    inPlainWords:
      'Повърхност с две дупки носи четири независими примки, като четири вида памет, вградени в самата форма, балансирани от едно просто правило за броене.',
    activity: 'Преброй върхове минус ръбове плюс стени (V - E + F) за прости форми и сравни сборовете.',
  },
  adults: {
    ageBand: 'университет и работа',
    title: 'Машини, които се изграждат и проверяват сами',
    bigIdea: 'само-изграждане, порти, покритие и цена на подправяне',
    inPlainWords:
      'Зрялата система изброява собствените си части, проверява, че всяка е завършена, и съобщава колко трудно би било да се фалшифицира резултатът, преди да му се довериш.',
    activity: 'Напиши списък за проверка, който проверява сам себе си, и оцени колко усилие би отнело да се измами.',
  },
  elders: {
    ageBand: 'цял живот и мъдрост',
    title: 'Да познаваш границите и да даваш обратно',
    bigIdea: 'граница, реципрочност и връщане към източника',
    inPlainWords:
      'Най-мъдрата стъпка е да знаеш какво моделът не твърди, да си честен за границите му и да дадеш обратно на хората и източниците, които са го направили възможен.',
    activity: 'Обсъдете границите, на кого да се доверявате и как да предадете знанието на следващия учащ.',
  },
}

const stageLabels: Record<SchoolStage, string> = {
  kids: 'деца',
  children: 'малки ученици',
  preteens: 'предучилищни тийнейджъри',
  teens: 'тийнейджъри',
  students: 'ученици',
  adults: 'възрастни',
  elders: 'старейшини',
}

const t = computed(() =>
  bg.value
    ? {
        eyebrow: 'от деца до възрастни',
        heading: 'Училище за двойния тор',
        intro: 'Сложността, преведена на седем стъпки. Всеки клас повдига една формална идея в прости думи, занимание и реалната команда, която я заземява.',
        idea: 'голяма идея',
        plain: 'с прости думи',
        activity: 'занимание',
        command: 'команда',
        next: 'следва',
        graduate: 'дипломиране',
      }
    : {
        eyebrow: 'kids to elders',
        heading: 'Double Torus School',
        intro: 'The complexity translated into seven steps. Each grade lifts one formal idea into plain words, an activity, and the real command that grounds it.',
        idea: 'big idea',
        plain: 'in plain words',
        activity: 'activity',
        command: 'command',
        next: 'next',
        graduate: 'graduate',
      },
)

const lessons = computed(() =>
  school.lessons.map((lesson) => {
    const card = bg.value ? bgCards[lesson.stage] : lesson
    return {
      stage: lesson.stage,
      stageLabel: bg.value ? stageLabels[lesson.stage] : lesson.stage,
      grade: lesson.grade,
      ageBand: card.ageBand,
      title: card.title,
      bigIdea: card.bigIdea,
      inPlainWords: card.inPlainWords,
      activity: card.activity,
      conceptCommand: lesson.conceptCommand,
      nextStage: lesson.nextStage === 'graduate' ? t.value.graduate : lesson.nextStage,
      receipt: lesson.receipt,
    }
  }),
)
</script>

<template>
  <section class="school-curriculum">
    <div class="school-curriculum__header">
      <p class="eyebrow">{{ t.eyebrow }}</p>
      <h2>{{ t.heading }}</h2>
      <p>{{ t.intro }}</p>
    </div>

    <ol class="school-curriculum__ladder">
      <li v-for="lesson in lessons" :key="lesson.stage" class="school-curriculum__stage">
        <div class="school-curriculum__top">
          <span class="school-curriculum__grade">{{ lesson.grade }}</span>
          <div>
            <strong>{{ lesson.title }}</strong>
            <small>{{ lesson.stageLabel }} &middot; {{ lesson.ageBand }}</small>
          </div>
        </div>
        <p><b>{{ t.idea }}:</b> {{ lesson.bigIdea }}</p>
        <p><b>{{ t.plain }}:</b> {{ lesson.inPlainWords }}</p>
        <p><b>{{ t.activity }}:</b> {{ lesson.activity }}</p>
        <p class="school-curriculum__meta">
          <code>{{ lesson.conceptCommand }}</code>
          <span>{{ t.next }}: {{ lesson.nextStage }}</span>
        </p>
        <small class="school-curriculum__receipt">{{ lesson.receipt }}</small>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.school-curriculum {
  margin: 1.5rem 0;
}
.school-curriculum__header h2 {
  margin: 0.2rem 0;
}
.school-curriculum__ladder {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 1rem;
}
.school-curriculum__stage {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  background: var(--vp-c-bg-soft);
}
.school-curriculum__top {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}
.school-curriculum__grade {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  background: var(--vp-c-brand-1);
  color: #fff;
  font-weight: 700;
}
.school-curriculum__top small {
  display: block;
  color: var(--vp-c-text-2);
}
.school-curriculum__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
}
.school-curriculum__receipt {
  color: var(--vp-c-text-3);
  word-break: break-all;
}
</style>
