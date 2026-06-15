<script setup lang="ts">
import { computed } from 'vue'
import { buildMatrix, plainLanguage, graduation } from '../lib/quantumMind'
import { useLocale } from '../lib/useLocale'
import Card from './ui/Card.vue'
import Button from './ui/Button.vue'
import Badge from './ui/Badge.vue'

// Start here: the simple front door. Four plain steps everyone sees; the full
// plain-language glossary and the graduation credential appear in rich mode.
const plain = plainLanguage()
const grad = graduation(buildMatrix())
const { bg, localize } = useLocale()

const steps = computed(() =>
  bg.value
    ? [
        { n: '1', title: 'Виж', text: 'Разгледай целия портал в осем измерения.', route: '/explore' },
        { n: '2', title: 'Учи', text: 'Започни от основата, на всяка възраст.', route: '/school' },
        { n: '3', title: 'Използвай', text: 'Питай конзолата — тя се консултира със себе си.', route: '/console' },
        { n: '4', title: 'Докажи', text: 'Провери печата — всяко твърдение е преизчислимо.', route: '/architecture' },
      ]
    : [
        { n: '1', title: 'See', text: 'Browse the whole portal across eight dimensions.', route: '/explore' },
        { n: '2', title: 'Learn', text: 'Start from the ground up, at any age.', route: '/school' },
        { n: '3', title: 'Use', text: 'Ask the console — it consults itself first.', route: '/console' },
        { n: '4', title: 'Prove', text: 'Verify the seal — every claim is recomputable.', route: '/architecture' },
      ],
)
const bgPlain: Record<string, string> = {
  'Double Torus': 'Учебен портал, който можеш сам да провериш: всяко твърдение е число, което всеки може да преизчисли.',
  Receipt: 'Кратък код, който отпечатва нещо — смени един бит и кодът се променя.',
  Seal: 'Доказателство, че цялото все още се връзва: преизчисли го и сравни.',
  'Palette & melody': 'Напиши дума и получи същите цветове и мелодия всеки път, споделими чрез цитиране на думата.',
  Sonification: 'Чуй данните като звук — за да доловиш каквото окото пропуска, или да ползваш без екран.',
  MCP: 'Начин ИИ асистенти да извикват тези инструменти директно.',
  Academy: 'Пет кратки курса; завърши ги и печелиш акредитив, който можеш да докажеш.',
  'Offline & free': 'Всичко тече на устройството ти — без акаунт, нищо не се изпраща.',
}
const bgTerm: Record<string, string> = {
  'Double Torus': 'Двоен торус', Receipt: 'Разписка', Seal: 'Печат', 'Palette & melody': 'Палитра и мелодия',
  Sonification: 'Сонификация', MCP: 'MCP', Academy: 'Академия', 'Offline & free': 'Офлайн и безплатно',
}
const glossary = computed(() =>
  plain.lines.map((line) => ({
    term: bg.value ? bgTerm[line.term] ?? line.term : line.term,
    plain: bg.value ? bgPlain[line.term] ?? line.plain : line.plain,
    route: line.route,
  })),
)
const t = computed(() =>
  bg.value
    ? {
        eyebrow: 'започни тук',
        lead: 'Учебен портал, който можеш сам да провериш. Четири стъпки — останалото е на едно докосване.',
        open: 'Отвори',
        glossaryTitle: 'С прости думи',
        gradTitle: 'Дипломиране',
        gradYes: 'Всичките пет курса се връзват в един преизчислим акредитив за дипломиране.',
        credential: 'акредитив',
        more: 'Превключи на «Богато» в лентата горе за пълната дълбочина.',
      }
    : {
        eyebrow: 'start here',
        lead: 'A learning portal you can check for yourself. Four steps — the rest is one tap away.',
        open: 'Open',
        glossaryTitle: 'In plain words',
        gradTitle: 'Graduation',
        gradYes: 'All five courses fold into one recomputable graduation credential.',
        credential: 'credential',
        more: 'Switch to “Rich” in the top bar for the full depth.',
      },
)
</script>

<template>
  <section class="start">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <p class="start__lead">{{ t.lead }}</p>

    <div class="start__steps">
      <Card v-for="step in steps" :key="step.n" class="start__step">
        <span class="start__n">{{ step.n }}</span>
        <strong>{{ step.title }}</strong>
        <p>{{ step.text }}</p>
        <Button as="a" variant="outline" size="sm" :href="localize(step.route)">{{ t.open }} →</Button>
      </Card>
    </div>

    <p class="start__hint simple-only">{{ t.more }}</p>

    <div class="rich-only">
      <h3 class="start__h">{{ t.glossaryTitle }}</h3>
      <ul class="start__glossary">
        <li v-for="line in glossary" :key="line.term">
          <a :href="localize(line.route)"><strong>{{ line.term }}</strong></a> — {{ line.plain }}
        </li>
      </ul>

      <h3 class="start__h">{{ t.gradTitle }}</h3>
      <Card class="start__grad">
        <header>
          <strong>{{ t.gradTitle }}</strong>
          <Badge :variant="grad.graduated ? 'success' : 'outline'">{{ grad.count }}/5</Badge>
        </header>
        <p>{{ t.gradYes }}</p>
        <code :title="grad.credential">{{ t.credential }}: {{ grad.credential.slice(0, 13) }}…</code>
      </Card>
    </div>
  </section>
</template>

<style scoped>
.start {
  margin: 1.25rem 0;
}
.start__lead {
  margin: 0.2rem 0 1.1rem;
  font-size: 1.05rem;
  color: var(--vp-c-text-1);
  max-width: 60ch;
}
.start__steps {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
.start__step {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.start__step strong {
  font-size: 1.1rem;
}
.start__step p {
  margin: 0 0 0.3rem;
  color: var(--vp-c-text-2);
  font-size: 0.88rem;
  flex: 1;
}
.start__n {
  width: 1.7rem;
  height: 1.7rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-weight: 700;
  font-size: 0.85rem;
}
.start__hint {
  margin: 1rem 0 0;
  color: var(--vp-c-text-3);
  font-size: 0.85rem;
  font-style: italic;
}
.start__h {
  margin: 1.6rem 0 0.6rem;
}
.start__glossary {
  display: grid;
  gap: 0.45rem;
  margin: 0;
  padding: 0;
  list-style: none;
}
.start__glossary li {
  border-left: 3px solid var(--vp-c-brand-1);
  padding-left: 0.7rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}
.start__glossary a {
  text-decoration: none;
}
.start__grad {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 36rem;
}
.start__grad header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.start__grad p {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}
.start__grad code {
  font-family: var(--vp-font-family-mono);
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
}
</style>
