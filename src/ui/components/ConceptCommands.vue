<script setup lang="ts">
// ☲ Lí · Fire · clinging · upper·yang · breath — self-referencing 10D widget
const ICHING_MASK = { hexagram: 41, name: 'Shì Kè', glyph: '☲☳', lower: 'Zhèn', upper: 'Lí', color: '#F0F00F' } as const
import { computed, ref } from 'vue'
import { useLocale } from '../lib/useLocale'
import {
  buildMatrix,
  conceptCommands,
  executeConceptCommand,
  siteManifestFromCommands,
  type ConceptCommandName,
} from '../lib/quantumMind'

const matrix = buildMatrix()
const selected = ref<ConceptCommandName>('concept.ui.doubleTorus')
const atom = ref('self')

const { bg } = useLocale()
const t = computed(() =>
  bg.value
    ? {
        eyebrow: 'концептуален UI',
        heading: 'Изгради сайта чрез концептуална командна компонента',
        intro:
          'Сайтът не е сглобен само от текст. Той използва концептуални VitePress и UI командни компоненти, за да построи матрицата, да изобрази двойния тор, да резолвне ресурси от хранилището и да провери доказателството.',
        atom: 'Атом',
        ok: 'ок',
        open: 'отворен',
        manifest: 'Манифест на сайта от командите',
      }
    : {
        eyebrow: 'concept UI',
        heading: 'Build the site by concept component command',
        intro:
          'The site is not assembled from copy alone. It uses concept VitePress and UI component commands to build the matrix, render the double torus, resolve repository resources, and verify proof.',
        atom: 'Atom',
        ok: 'ok',
        open: 'open',
        manifest: 'Site manifest from commands',
      },
)

const selectedCommand = computed(() => conceptCommands.find((command) => command.name === selected.value))
const output = computed(() => executeConceptCommand(selected.value, { atom: atom.value }, matrix))
const manifest = siteManifestFromCommands()

const formattedOutput = computed(() => JSON.stringify(output.value, null, 2))
</script>

<template>
  <section class="concept-commands" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <div class="concept-commands__header">
      <p class="eyebrow">{{ t.eyebrow }}</p>
      <h2>{{ t.heading }}</h2>
      <p>{{ t.intro }}</p>
    </div>

    <div class="concept-commands__layout">
      <aside>
        <button
          v-for="command in conceptCommands"
          :key="command.name"
          :class="{ active: selected === command.name }"
          type="button"
          @click="selected = command.name"
        >
          <strong>{{ command.name }}</strong>
          <span>{{ command.description }}</span>
        </button>
      </aside>

      <article>
        <h3>{{ selectedCommand?.name }}</h3>
        <p class="concept-commands__path">{{ selectedCommand?.path }}</p>
        <label v-if="selectedCommand?.input === 'atom'">
          {{ t.atom }}
          <input v-model="atom" type="text" aria-label="atom" />
        </label>
        <div class="concept-commands__receipt">
          <span>{{ output.ok ? t.ok : t.open }}</span>
          <code>{{ output.uuid }}</code>
        </div>
        <p>{{ output.summary }}</p>
        <pre>{{ formattedOutput }}</pre>
      </article>
    </div>

    <div class="concept-commands__manifest">
      <h3>{{ t.manifest }}</h3>
      <ul>
        <li v-for="section in manifest" :key="section.title">
          <strong>{{ section.title }}</strong>
          <code>{{ section.command }}</code>
          <a :href="section.route">{{ section.route }}</a>
          <span>{{ section.summary }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
