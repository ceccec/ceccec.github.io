<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { buildMatrix, boundaryAudit } from '../lib/quantumMind'

// The honesty spine: every limit the model declares, in one place. Collected
// live from the commands, so it can never drift from what the portal actually
// claims. A widget, not prose — each boundary with the commands that hold it.
const data = boundaryAudit(buildMatrix())
const { lang } = useData()
const bg = computed(() => lang.value.startsWith('bg'))
const t = computed(() =>
  bg.value
    ? { eyebrow: 'гръбнак на честността · граници', count: `${data.count} различни граници`, holds: 'команди' }
    : { eyebrow: 'honesty spine · boundaries', count: `${data.count} distinct boundaries`, holds: 'commands' },
)
</script>

<template>
  <section class="ba">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <p class="ba__count">{{ t.count }}</p>
    <ol class="ba__list">
      <li v-for="(entry, i) in data.boundaries" :key="i">
        <p class="ba__boundary">{{ entry.boundary }}</p>
        <p class="ba__commands">{{ entry.commands.length }} {{ t.holds }}: <code>{{ entry.commands.slice(0, 6).join(', ') }}<span v-if="entry.commands.length > 6">, …</span></code></p>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.ba {
  margin: 1.25rem 0;
}
.ba__count {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  margin: 0.1rem 0 0.7rem;
}
.ba__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.ba__list li {
  border: 1px solid var(--vp-c-divider);
  border-left: 3px solid var(--vp-c-brand-1);
  border-radius: 8px;
  padding: 0.55rem 0.75rem;
  background: var(--vp-c-bg-soft);
}
.ba__boundary {
  margin: 0;
  font-size: 0.84rem;
  color: var(--vp-c-text-1);
}
.ba__commands {
  margin: 0.35rem 0 0;
  font-size: 0.72rem;
  color: var(--vp-c-text-3);
}
.ba__commands code {
  font-size: 0.7rem;
}
</style>
