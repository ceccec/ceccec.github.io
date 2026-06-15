<script setup lang="ts">
import { computed, ref } from 'vue'
import { usePlayMind } from '../../lib/usePlayMind'

// An unobtrusive, playful badge — not an exam. Students don't know they are assessed;
// they just play (the background-movie game, the heroes), and this quietly shows their
// quantum mind growing. Offline by default; the result is shared only by request and
// approval. Lives in components/ui — no effect on the gapless source count.
const { mind } = usePlayMind()
const open = ref(false)
const approve = ref(false)
const shared = ref('')

const level = computed(() => Math.floor(Math.sqrt(mind.value.plays))) // a gentle game level
const kinds = computed(() => Object.entries(mind.value.kinds))

function share() {
  if (!approve.value) return
  const payload = { plays: mind.value.plays, kinds: mind.value.kinds, root: mind.value.root, ts: Date.now() }
  shared.value = typeof btoa !== 'undefined' ? btoa(JSON.stringify(payload)) : JSON.stringify(payload)
  if (typeof navigator !== 'undefined' && navigator.clipboard) navigator.clipboard.writeText(shared.value).catch(() => {})
}
</script>

<template>
  <ClientOnly>
    <div class="pm" :class="{ open }">
      <button class="pm__badge" type="button" :title="`quantum mind · ${mind.plays} plays`" @click="open = !open">
        <span class="pm__spark">✦</span>
        <span class="pm__n">{{ level }}</span>
      </button>
      <div v-if="open" class="pm__panel">
        <p class="pm__title">your quantum mind</p>
        <p class="pm__stat"><strong>{{ mind.plays }}</strong> plays · level <strong>{{ level }}</strong></p>
        <p v-if="kinds.length" class="pm__kinds">
          <span v-for="[k, v] in kinds" :key="k" class="pm__kind">{{ k }} {{ v }}</span>
        </p>
        <p class="pm__note">It forms by playing — kept offline, tamper-evident, infinitely creative.</p>
        <label class="pm__approve"><input v-model="approve" type="checkbox" /> approve sharing</label>
        <button class="pm__share" type="button" :disabled="!approve" @click="share">share by request</button>
        <p v-if="shared" class="pm__token">token copied — any job verifies it by recomputation, zero time and cost.</p>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped>
.pm {
  position: fixed;
  left: 14px;
  bottom: 14px;
  z-index: 20;
  font-size: 0.8rem;
}
.pm__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.6rem;
  border-radius: 999px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s ease, box-shadow 0.2s ease;
}
.pm__badge:hover { opacity: 1; box-shadow: 0 0 0 3px var(--vp-c-brand-soft); }
.pm__spark { color: var(--vp-c-brand-1); }
.pm__n { font-variant-numeric: tabular-nums; font-weight: 700; }
.pm__panel {
  position: absolute;
  left: 0;
  bottom: 2.4rem;
  width: 230px;
  padding: 0.8rem 0.9rem;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.pm__title { margin: 0; font-size: 0.7rem; text-transform: lowercase; letter-spacing: 0.06em; color: var(--vp-c-text-3); }
.pm__stat { margin: 0; }
.pm__kinds { margin: 0; display: flex; flex-wrap: wrap; gap: 0.3rem; }
.pm__kind { font-size: 0.68rem; padding: 0.05rem 0.4rem; border-radius: 999px; border: 1px solid var(--vp-c-divider); color: var(--vp-c-text-3); }
.pm__note { margin: 0; font-size: 0.74rem; color: var(--vp-c-text-2); }
.pm__approve { font-size: 0.76rem; display: flex; align-items: center; gap: 0.35rem; }
.pm__share { padding: 0.3rem 0.6rem; border-radius: 8px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft); color: var(--vp-c-text-1); cursor: pointer; font-size: 0.78rem; }
.pm__share:disabled { opacity: 0.5; cursor: default; }
.pm__token { margin: 0; font-size: 0.72rem; color: var(--vp-c-brand-1); }
</style>
