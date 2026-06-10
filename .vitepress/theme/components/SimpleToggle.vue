<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '../lib/useLocale'
import { useSimpleMode } from '../lib/useSimpleMode'

// One small switch in the navbar: Simple ⇄ Rich. Simple shows the essentials,
// Rich reveals the full depth. Persisted, global, no network.
const { bg } = useLocale()
const { simple, toggle } = useSimpleMode()
const label = computed(() =>
  bg.value
    ? (simple.value ? 'Просто' : 'Богато')
    : (simple.value ? 'Simple' : 'Rich'),
)
const title = computed(() =>
  bg.value ? 'Превключи просто / богато' : 'Toggle simple / rich',
)
</script>

<template>
  <button type="button" class="simple-toggle" :class="{ on: simple }" :title="title" :aria-pressed="simple" @click="toggle">
    <span class="simple-toggle__dot" /> {{ label }}
  </button>
</template>

<style scoped>
.simple-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.25rem 0.7rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-size: 0.78rem;
  font-weight: 600;
}
.simple-toggle.on {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
.simple-toggle__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--vp-c-text-3);
}
.simple-toggle.on .simple-toggle__dot {
  background: var(--vp-c-brand-1);
}
</style>
