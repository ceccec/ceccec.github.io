<script setup lang="ts">
import { buildMatrix, executeErpaxCommand, learnErpax } from '../lib/quantumMind'

const matrix = buildMatrix()
const learning = learnErpax(matrix)
const command = executeErpaxCommand('erpax.learn.core', {}, matrix)
</script>

<template>
  <section class="learn-erpax">
    <div class="learn-erpax__header">
      <p class="eyebrow">erpax learned</p>
      <h2>Learning receipt</h2>
      <p>{{ learning.statement }}</p>
    </div>

    <div class="learn-erpax__grid">
      <article>
        <span>command</span>
        <strong>{{ command.command }}</strong>
      </article>
      <article>
        <span>command receipt</span>
        <strong class="mono">{{ command.uuid.slice(0, 13) }}...</strong>
      </article>
      <article>
        <span>learning root</span>
        <strong class="mono">{{ learning.root.slice(0, 13) }}...</strong>
      </article>
      <article>
        <span>status</span>
        <strong>{{ learning.invariant ? 'learned' : 'open' }}</strong>
      </article>
    </div>

    <div class="learn-erpax__lessons">
      <h3>Learned laws</h3>
      <ol>
        <li v-for="item in learning.lessons" :key="item.uuid">
          <div>
            <strong>{{ item.name }}</strong>
            <code>{{ item.command }}</code>
          </div>
          <p>{{ item.lesson }}</p>
          <p><b>Source:</b> {{ item.source }}</p>
          <p><b>Applied as:</b> {{ item.appliedAs }}</p>
          <small>{{ item.uuid }}</small>
        </li>
      </ol>
    </div>
  </section>
</template>
