<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  buildMatrix,
  ceccecCommands,
  executeCeccecCommand,
  siteManifestFromCommands,
  type CeccecCommandName,
} from '../lib/quantumMind'

const matrix = buildMatrix()
const selected = ref<CeccecCommandName>('ceccec.torus.flow')
const atom = ref('self')

const selectedCommand = computed(() => ceccecCommands.find((command) => command.name === selected.value))
const output = computed(() => executeCeccecCommand(selected.value, { atom: atom.value }, matrix))
const manifest = siteManifestFromCommands()

const formattedOutput = computed(() => JSON.stringify(output.value, null, 2))
</script>

<template>
  <section class="double-torus-commands">
    <div class="double-torus-commands__header">
      <p class="eyebrow">ceccec command surface</p>
      <h2>Build the site by double-torus command</h2>
      <p>
        The site is not assembled from copy alone. It is driven by ceccec
        commands that build the matrix, circulate torus flow, resolve repository
        resources, and verify proof.
      </p>
    </div>

    <div class="double-torus-commands__layout">
      <aside>
        <button
          v-for="command in ceccecCommands"
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
        <p class="double-torus-commands__path">{{ selectedCommand?.path }}</p>
        <label v-if="selectedCommand?.input === 'atom'">
          Atom
          <input v-model="atom" type="text" />
        </label>
        <div class="double-torus-commands__receipt">
          <span>{{ output.ok ? 'ok' : 'open' }}</span>
          <code>{{ output.uuid }}</code>
        </div>
        <p>{{ output.summary }}</p>
        <pre>{{ formattedOutput }}</pre>
      </article>
    </div>

    <div class="double-torus-commands__manifest">
      <h3>Site manifest from commands</h3>
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
