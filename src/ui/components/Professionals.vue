<script setup lang="ts">
import { computed } from 'vue'
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from 'radix-vue'
import { buildMatrix, professionals } from '../lib/quantumMind'
import { useLocale } from '../lib/useLocale'
import Badge from './ui/Badge.vue'
import Button from './ui/Button.vue'
import Card from './ui/Card.vue'

// Find use for professionals, in the Quantum Academy. Built with the project's
// own UI kit: radix-vue Tabs to switch by capability, and the shadcn-style
// Card / Badge / Button primitives. Each profession is one card — task, why,
// comparable tool, and a button to try it. Grounded in deep research.
const data = professionals(buildMatrix())
const { bg, localize } = useLocale()

const bgGroup: Record<string, string> = { design: 'дизайн', sound: 'звук', provenance: 'произход', agents: 'агенти' }
const bgCap: Record<string, string> = {
  palette: 'палитра', melody: 'мелодия', sonification: 'сонификация', receipts: 'разписки', mcp: 'MCP', all: 'всичко',
}
const capVariant: Record<string, 'default' | 'success' | 'warning' | 'outline'> = {
  palette: 'default', melody: 'default', sonification: 'success', receipts: 'warning', mcp: 'outline', all: 'outline',
}
const bgPro: Record<string, { profession: string; task: string; why: string }> = {
  'Brand & graphic designer': {
    profession: 'Бранд и графичен дизайнер',
    task: 'Възстанови точна бранд палитра — hex, RGB и CMYK за екран и печат — от документирано семе-дума, без да пазиш файл.',
    why: 'Семето е файлът: цитирай семето и всеки пресмята идентичната палитра, офлайн и безплатно.',
  },
  'Design-system engineer': {
    profession: 'Инженер на дизайн система',
    task: 'Компилирай палитра от семе в дизайн токени (CSS променливи), качени в git като единствен източник на истина.',
    why: 'Адресирано по съдържание: същото семе дава същите токени във всеки коммит и на всяка платформа.',
  },
  'Musician & sound designer': {
    profession: 'Музикант и звуков дизайнер',
    task: 'Извлечи възпроизводимо мелодично семе от дума или данни, за да скицираш мотиви офлайн.',
    why: 'Детерминирано: същото семе винаги звучи еднакво, така че мотивът се споделя чрез цитиране на семето.',
  },
  'Accessibility specialist': {
    profession: 'Специалист по достъпност',
    task: 'Озвучи серия от данни, за да чуят потребителите с екранен четец тенденции и отклонения без визуализация.',
    why: 'Web Audio, от страна на клиента: невизуален достъп до данни, без сървър и без качване.',
  },
  'Data analyst & scientist': {
    profession: 'Анализатор и учен на данни',
    task: 'Чуй набор от данни, за да уловиш слаби сигнали и преходи, които окото пропуска.',
    why: 'Звукът заедно със зрението подобрява откриването на слаби сигнали при проучвателен анализ.',
  },
  'Auditor & compliance': {
    profession: 'Одитор и съответствие',
    task: 'Дай на всяко одитно събитие преизчислима разписка и провери корена на меркъл без да четеш целия дневник.',
    why: 'Доказуемо при подправяне: всяка промяна обръща корена, а коренът се проверява чрез преизчисляване.',
  },
  'Journalist & researcher': {
    profession: 'Журналист и изследовател',
    task: 'Цитирай точната версия на източник чрез неговия хеш на съдържанието, за да може всеки да я провери по-късно.',
    why: 'Идентичността по съдържание е вътрешноприсъща: оцелява дори ако оригиналният хостинг изчезне.',
  },
  'AI & agent developer': {
    profession: 'Разработчик на ИИ и агенти',
    task: 'Нека агент извика всяка способност като MCP инструмент (tools/list, tools/call) с детерминирани резултати.',
    why: 'Чисти детерминирани изчисления без мрежа: агентът държи междинните данни извън контекста на модела.',
  },
  Educator: {
    profession: 'Преподавател',
    task: 'Преподавай концепция от едно семе, което разгръща същата палитра, мелодия и доказателство за всеки ученик.',
    why: 'Възпроизводимо и офлайн: еднакво за всички, безплатно, на всяко устройство.',
  },
}

const groups = computed(() =>
  data.groups.map((group) => ({
    ...group,
    name: bg.value ? bgGroup[group.group] ?? group.group : group.group,
    entries: group.entries.map((entry) => ({
      ...entry,
      profession: bg.value ? bgPro[entry.profession]?.profession ?? entry.profession : entry.profession,
      task: bg.value ? bgPro[entry.profession]?.task ?? entry.task : entry.task,
      why: bg.value ? bgPro[entry.profession]?.why ?? entry.why : entry.why,
      cap: bg.value ? bgCap[entry.capability] ?? entry.capability : entry.capability,
    })),
  })),
)
const t = computed(() =>
  bg.value
    ? { eyebrow: 'намери приложение · за професионалисти', like: 'като', open: 'Отвори', why: 'защо' }
    : { eyebrow: 'find use · for professionals', like: 'like', open: 'Open', why: 'why' },
)
</script>

<template>
  <section class="pros">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <TabsRoot :default-value="data.groups[0].group" class="pros__tabs">
      <TabsList class="pros__list" aria-label="Professional capability groups">
        <TabsTrigger v-for="group in groups" :key="group.group" :value="group.group" class="pros__trigger">
          <span class="pros__icon">{{ group.icon }}</span> {{ group.name }}
        </TabsTrigger>
      </TabsList>
      <TabsContent v-for="group in groups" :key="group.group" :value="group.group" class="pros__panel">
        <div class="pros__grid">
          <Card v-for="entry in group.entries" :key="entry.profession" class="pros__card">
            <header class="pros__head">
              <strong>{{ entry.profession }}</strong>
              <Badge :variant="capVariant[entry.capability]">{{ entry.cap }}</Badge>
            </header>
            <p class="pros__task">{{ entry.task }}</p>
            <p class="pros__why"><em>{{ t.why }}:</em> {{ entry.why }}</p>
            <footer class="pros__foot">
              <span class="pros__like">{{ t.like }}: {{ entry.comparable }}</span>
              <Button as="a" variant="outline" size="sm" :href="localize(entry.route)">{{ t.open }} →</Button>
            </footer>
          </Card>
        </div>
      </TabsContent>
    </TabsRoot>
  </section>
</template>

<style scoped>
.pros {
  margin: 1.5rem 0;
}
.pros__tabs {
  display: grid;
  gap: 1rem;
}
.pros__list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.pros__trigger {
  padding: 0.35rem 0.9rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-size: 0.85rem;
}
.pros__trigger[data-state='active'] {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 1px var(--vp-c-brand-1) inset;
}
.pros__icon {
  font-size: 0.95rem;
}
.pros__grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}
.pros__card {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}
.pros__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;
}
.pros__head strong {
  font-size: 1.02rem;
}
.pros__task {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: 0.9rem;
  line-height: 1.5;
}
.pros__why {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.82rem;
  line-height: 1.5;
}
.pros__foot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;
  margin-top: auto;
}
.pros__like {
  color: var(--vp-c-text-3);
  font-size: 0.75rem;
}
</style>
