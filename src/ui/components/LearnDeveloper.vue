<script setup lang="ts">
// ☱ Duì · Lake · joyous · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 29, glyph: '☱', lo: 'Lí·clinging', up: 'Duì·joyous', color: '#0FFF0F' } as const
import { computed } from 'vue'
import { useLocale } from '../lib/useLocale'
import { buildMatrix, executeDeveloperCommand, learnDeveloper } from '../lib/quantumMind'

const matrix = buildMatrix()
const learning = learnDeveloper(matrix)
const command = executeDeveloperCommand('developer.learn.core', {}, matrix)

const { bg } = useLocale()
const t = computed(() =>
  bg.value
    ? {
        eyebrow: 'умът на разработчика',
        heading: 'Разписка за учене',
        command: 'команда',
        commandReceipt: 'разписка на командата',
        learningRoot: 'корен на ученето',
        status: 'статус',
        learned: 'научено',
        open: 'отворено',
        learnedLaws: 'Научени закони',
        source: 'Източник:',
        appliedAs: 'Приложено като:',
      }
    : {
        eyebrow: 'the developer’s mind',
        heading: 'Learning receipt',
        command: 'command',
        commandReceipt: 'command receipt',
        learningRoot: 'learning root',
        status: 'status',
        learned: 'learned',
        open: 'open',
        learnedLaws: 'Learned laws',
        source: 'Source:',
        appliedAs: 'Applied as:',
      },
)
</script>

<template>
  <section class="learn-developer" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <div class="learn-developer__header">
      <p class="eyebrow">{{ t.eyebrow }}</p>
      <h2>{{ t.heading }}</h2>
      <p>{{ learning.statement }}</p>
    </div>

    <div class="learn-developer__grid">
      <article>
        <span>{{ t.command }}</span>
        <strong>{{ command.command }}</strong>
      </article>
      <article>
        <span>{{ t.commandReceipt }}</span>
        <strong class="mono">{{ command.uuid.slice(0, 13) }}...</strong>
      </article>
      <article>
        <span>{{ t.learningRoot }}</span>
        <strong class="mono">{{ learning.root.slice(0, 13) }}...</strong>
      </article>
      <article>
        <span>{{ t.status }}</span>
        <strong>{{ learning.invariant ? t.learned : t.open }}</strong>
      </article>
    </div>

    <div class="learn-developer__lessons">
      <h3>{{ t.learnedLaws }}</h3>
      <ol>
        <li v-for="item in learning.lessons" :key="item.uuid">
          <div>
            <strong>{{ item.name }}</strong>
            <code>{{ item.command }}</code>
          </div>
          <p>{{ item.lesson }}</p>
          <p><b>{{ t.source }}</b> {{ item.source }}</p>
          <p><b>{{ t.appliedAs }}</b> {{ item.appliedAs }}</p>
          <small>{{ item.uuid }}</small>
        </li>
      </ol>
    </div>
  </section>
</template>
