<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
import { buildMatrix, quantumAcademy, areaLabel } from '../lib/quantumMind'

// The Quantum Academy. Five courses over the 42 areas, taught from kid to elder.
// Complete a course to reveal its content-addressed credential — a UUID anyone
// can recompute from the course's modules, so the credential is verifiable.
const data = quantumAcademy(buildMatrix())
const { lang } = useData()
const bg = computed(() => lang.value.startsWith('bg'))
const completed = ref<Record<string, boolean>>({})

const bgCourse: Record<string, string> = {
  Foundations: 'Основи', 'The Machine': 'Машината', 'The Senses': 'Сетивата', 'The Society': 'Обществото', 'The Mind': 'Умът',
}
const bgLevel: Record<string, string> = { kid: 'дете', student: 'ученик', adult: 'възрастен', elder: 'старейшина' }

const courses = computed(() =>
  data.courses.map((c) => ({
    ...c,
    title: bg.value ? bgCourse[c.course] ?? c.course : c.course,
    levelLabel: bg.value ? bgLevel[c.level] ?? c.level : c.level,
    moduleLabels: c.modules.map((m) => ({ glyph: m.glyph, name: areaLabel(m.area, lang.value) })),
  })),
)
const t = computed(() =>
  bg.value
    ? { eyebrow: 'квантовата академия', lead: `${data.modules} модула в 5 курса, от дете до старейшина. Завърши курс, за да получиш проверим акредитив.`, complete: 'Завърши', credential: 'акредитив', modules: 'модула' }
    : { eyebrow: 'the quantum academy', lead: `${data.modules} modules across 5 courses, from kid to elder. Complete a course to earn a verifiable credential.`, complete: 'Complete', credential: 'credential', modules: 'modules' },
)
</script>

<template>
  <section class="aca">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <p class="aca__lead">{{ t.lead }}</p>
    <div class="aca__courses">
      <article v-for="c in courses" :key="c.course" class="aca__course">
        <header>
          <strong>{{ c.title }}</strong>
          <span class="aca__level">{{ c.levelLabel }}</span>
        </header>
        <p class="aca__modules">
          <span v-for="(m, i) in c.moduleLabels" :key="i" :title="m.name">{{ m.glyph }}</span>
        </p>
        <p class="aca__count">{{ c.modules.length }} {{ t.modules }}</p>
        <button type="button" @click="completed[c.course] = true">{{ t.complete }}</button>
        <p v-if="completed[c.course]" class="aca__credential">
          🎓 {{ t.credential }}: <code>{{ c.credential }}</code>
        </p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.aca {
  margin: 1.25rem 0;
}
.aca__lead {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin: 0.2rem 0 0.9rem;
}
.aca__courses {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 0.7rem;
}
.aca__course {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 0.8rem 0.9rem;
  background: var(--vp-c-bg-soft);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.aca__course header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem;
}
.aca__course header strong {
  font-size: 1rem;
}
.aca__level {
  font-size: 0.66rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  border-radius: 999px;
  padding: 0.1rem 0.5rem;
}
.aca__modules {
  margin: 0;
  font-size: 1.1rem;
  letter-spacing: 0.15em;
  line-height: 1.4;
}
.aca__count {
  margin: 0;
  font-size: 0.72rem;
  color: var(--vp-c-text-3);
}
.aca__course button {
  align-self: flex-start;
  padding: 0.3rem 0.9rem;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 999px;
  background: var(--vp-c-bg);
  color: var(--vp-c-brand-1);
  cursor: pointer;
  font-size: 0.8rem;
}
.aca__credential {
  margin: 0;
  font-size: 0.7rem;
  color: var(--vp-c-text-2);
  word-break: break-all;
}
.aca__credential code {
  font-size: 0.66rem;
}
</style>
