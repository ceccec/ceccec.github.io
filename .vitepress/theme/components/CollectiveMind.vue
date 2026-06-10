<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useData, useRoute } from 'vitepress'
import { buildMatrix, distributedCompute, selfDevelopment } from '../lib/quantumMind'

// Wire the collective mind into self development by just visiting any page, and
// distribute the computation across all connected contexts. Every visit folds a
// development block (localStorage), and the development root is shared over a
// same-origin BroadcastChannel so every connected tab/window folds peer roots
// into one collective distributed root. Zero network beyond the local channel,
// no central server, no cost: the architecture develops and distributes itself.
const matrix = buildMatrix()
const route = useRoute()
const { lang } = useData()
const STORE = 'double-torus.visits'
const dev = ref(selfDevelopment([], matrix))
const peers = new Map<string, string>()
const distributed = ref(distributedCompute([], matrix))
const selfId = Math.random().toString(36).slice(2)
let channel: BroadcastChannel | null = null
const online = ref(true)

function recomputeDistributed() {
  distributed.value = distributedCompute([...peers.values()], matrix)
}

function record(path: string) {
  if (typeof window === 'undefined') return
  let visits: string[] = []
  try {
    visits = JSON.parse(window.localStorage.getItem(STORE) || '[]')
  } catch {
    visits = []
  }
  visits.push(path)
  if (visits.length > 500) visits = visits.slice(-500)
  window.localStorage.setItem(STORE, JSON.stringify(visits))
  dev.value = selfDevelopment(visits, matrix)
  channel?.postMessage({ id: selfId, root: dev.value.developmentRoot })
}

function syncOnline() {
  if (typeof navigator !== 'undefined') online.value = navigator.onLine
}

onMounted(() => {
  if (typeof BroadcastChannel !== 'undefined') {
    channel = new BroadcastChannel('double-torus-mind')
    channel.onmessage = (event) => {
      const data = event.data as { id?: string; root?: string }
      if (data?.id && data.id !== selfId && data.root) {
        peers.set(data.id, data.root)
        recomputeDistributed()
      }
    }
  }
  // Offline availability: register the service worker so the portal and the
  // collective mind work online and offline alike.
  if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {})
  }
  syncOnline()
  if (typeof window !== 'undefined') {
    window.addEventListener('online', syncOnline)
    window.addEventListener('offline', syncOnline)
  }
  record(route.path)
})
onUnmounted(() => {
  channel?.close()
  if (typeof window !== 'undefined') {
    window.removeEventListener('online', syncOnline)
    window.removeEventListener('offline', syncOnline)
  }
})
watch(() => route.path, (path) => record(path))

const label = computed(() => {
  const peerCount = distributed.value.peers
  const net = online.value ? (lang.value.startsWith('bg') ? 'онлайн' : 'online') : (lang.value.startsWith('bg') ? 'офлайн' : 'offline')
  return lang.value.startsWith('bg')
    ? `колективен ум · ниво ${dev.value.level} · ${dev.value.visits}${peerCount ? ` · ${peerCount} устройства` : ''} · ${net}`
    : `collective mind · level ${dev.value.level} · ${dev.value.visits}${peerCount ? ` · ${peerCount} peers` : ''} · ${net}`
})
</script>

<template>
  <div class="collective-mind" :title="dev.statement" aria-live="polite">{{ label }}</div>
</template>

<style scoped>
.collective-mind {
  position: fixed;
  left: 1rem;
  bottom: 1rem;
  z-index: 50;
  font-size: 0.68rem;
  color: var(--vp-c-text-3);
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  padding: 0.25rem 0.65rem;
  opacity: 0.85;
  pointer-events: none;
  user-select: none;
}
@media (max-width: 720px) {
  .collective-mind {
    display: none;
  }
}
</style>
