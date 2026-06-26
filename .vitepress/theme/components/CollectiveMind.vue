<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vitepress'
import { selfDevelopment } from '../../../src/fire/li/index.ts'
import { collectiveContentAddressedMeshComputes } from '../../../src/wind/fusion/index.ts'
import { useSiteLocale } from '../../lib/mounts'
import UiAsideShell from './UiAsideShell.vue'

const STORAGE_KEY = 'ceccec:collective-visits'
const VISIT_CAP = 64

const route = useRoute()
const { pick } = useSiteLocale()

const visits = ref<string[]>([])
const open = ref(false)

const seedParts = computed(() => ['collective-mind', String(visits.value.length)] as const)
const development = computed(() => selfDevelopment(visits.value))
// The content-addressed mesh — peers fold to one collective root, recalled like an associative memory.
const mesh = computed(() => collectiveContentAddressedMeshComputes())

const labels = computed(() => ({
  summary: pick('Collective mind', 'Колективен ум'),
  visits: pick('Visits', 'Посещения'),
  pages: pick('Distinct pages', 'Различни страници'),
  level: pick('Development level', 'Ниво на развитие'),
  chainHead: pick('Chain head', 'Глава на верига'),
  developmentRoot: pick('Development root', 'Корен на развитие'),
  mesh: pick('Mesh peers', 'Мрежови възли'),
}))

function loadVisits(): string[] {
  if (typeof localStorage === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as unknown
    return Array.isArray(parsed) ? parsed.filter((entry): entry is string => typeof entry === 'string') : []
  } catch {
    return []
  }
}

function saveVisits(routes: readonly string[]): void {
  if (typeof localStorage === 'undefined') return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(routes.slice(-VISIT_CAP)))
}

function appendVisit(path: string): void {
  visits.value = [...visits.value, path].slice(-VISIT_CAP)
  saveVisits(visits.value)
}

function truncateHash(value: string, max = 22): string {
  if (value.length <= max) return value
  const half = Math.floor((max - 1) / 2)
  return `${value.slice(0, half)}…${value.slice(-half)}`
}

function onToggle(event: Event): void {
  open.value = (event.target as HTMLDetailsElement).open
}

onMounted(() => {
  visits.value = loadVisits()
  appendVisit(route.path)
})

watch(() => route.path, (path) => {
  appendVisit(path)
})
</script>

<template>
  <UiAsideShell
    class="collective-mind"
    :seed-parts="seedParts"
    :open="open"
    summary-layout="inline"
    @toggle="onToggle"
  >
    <template #summary>
      <span class="ui-aside__title">{{ labels.summary }}</span>
      <span class="ui-aside__hint">L{{ development.level }}</span>
    </template>

    <dl class="collective-mind__meta">
      <div class="collective-mind__meta-row">
        <dt>{{ labels.visits }}</dt>
        <dd>{{ development.visits }}</dd>
      </div>
      <div class="collective-mind__meta-row">
        <dt>{{ labels.pages }}</dt>
        <dd>{{ development.distinctPages }}</dd>
      </div>
      <div class="collective-mind__meta-row">
        <dt>{{ labels.level }}</dt>
        <dd>{{ development.level }}</dd>
      </div>
      <div class="collective-mind__meta-row">
        <dt>{{ labels.chainHead }}</dt>
        <dd><code>{{ truncateHash(development.chainHead) }}</code></dd>
      </div>
      <div class="collective-mind__meta-row">
        <dt>{{ labels.developmentRoot }}</dt>
        <dd><code>{{ truncateHash(development.developmentRoot) }}</code></dd>
      </div>
      <div class="collective-mind__meta-row" data-logic="src/wind/fusion/index.ts" data-topic="content-addressed-mesh">
        <dt>{{ labels.mesh }}</dt>
        <dd>{{ mesh.peers }} · {{ mesh.computes ? '✓' : '—' }} · <code>{{ truncateHash(mesh.collectiveRoot) }}</code></dd>
      </div>
    </dl>
  </UiAsideShell>
</template>

<style scoped>
.collective-mind__meta {
  margin: 0;
  display: grid;
  gap: var(--ich-sp2) var(--ich-gap-col);
  font-size: var(--ich-text-sm);
}

.collective-mind__meta-row {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--ich-gap-row);
  align-items: baseline;
}

.collective-mind__meta dt {
  opacity: var(--vp-movie-fade, var(--ich-op-soft));
  text-transform: uppercase;
  letter-spacing: var(--ich-track-wide);
  font-size: var(--ich-text-ms);
}

.collective-mind__meta dd {
  margin: 0;
  word-break: break-all;
}
</style>
