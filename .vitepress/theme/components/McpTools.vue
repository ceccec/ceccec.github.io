<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { buildMatrix, mcpToolManifest } from '../lib/quantumMind'

const manifest = mcpToolManifest(buildMatrix())
const { lang } = useData()
const bg = computed(() => lang.value.startsWith('bg'))

const t = computed(() =>
  bg.value
    ? {
        eyebrow: 'инструментален слой за езикови модели',
        heading: 'MCP инструменти',
        intro: 'Всяка концептуална команда е публикувана като MCP инструмент. Езиков модел чете tools/list и извиква tools/call(name, arguments).',
        server: 'сървър',
        version: 'версия',
        toolsLabel: 'инструменти',
        manifest: 'Манифест',
        input: 'вход',
        none: 'без аргументи',
      }
    : {
        eyebrow: 'tool surface for language models',
        heading: 'MCP tools',
        intro: 'Every concept command is published as an MCP tool. A language model reads tools/list and invokes tools/call(name, arguments).',
        server: 'server',
        version: 'version',
        toolsLabel: 'tools',
        manifest: 'Manifest',
        input: 'input',
        none: 'no arguments',
      },
)

function inputKeys(tool: (typeof manifest.tools)[number]): string {
  const keys = Object.keys(tool.inputSchema.properties)
  return keys.length ? keys.join(', ') : ''
}
</script>

<template>
  <section class="mcp-tools">
    <div class="mcp-tools__header">
      <p class="eyebrow">{{ t.eyebrow }}</p>
      <h2>{{ t.heading }}</h2>
      <p>{{ t.intro }}</p>
      <p class="mcp-tools__meta">
        <span><b>{{ t.server }}:</b> <code>{{ manifest.name }}</code></span>
        <span><b>{{ t.version }}:</b> <code>{{ manifest.version }}</code></span>
        <span><b>{{ t.toolsLabel }}:</b> {{ manifest.tools.length }}</span>
        <span><b>{{ t.manifest }}:</b> <a href="/mcp.json"><code>/mcp.json</code></a></span>
      </p>
    </div>

    <ul class="mcp-tools__list">
      <li v-for="tool in manifest.tools" :key="tool.name">
        <code class="mcp-tools__name">{{ tool.name }}</code>
        <span class="mcp-tools__desc">{{ tool.description }}</span>
        <small class="mcp-tools__input">
          {{ t.input }}: {{ inputKeys(tool) || t.none }}
        </small>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.mcp-tools {
  margin: 1.5rem 0;
}
.mcp-tools__header h2 {
  margin: 0.2rem 0;
}
.mcp-tools__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  color: var(--vp-c-text-2);
}
.mcp-tools__list {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 0.6rem;
}
.mcp-tools__list li {
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 0.6rem 0.9rem;
  background: var(--vp-c-bg-soft);
  display: grid;
  gap: 0.2rem;
}
.mcp-tools__name {
  color: var(--vp-c-brand-1);
  font-weight: 700;
}
.mcp-tools__input {
  color: var(--vp-c-text-3);
}
</style>
