<script setup lang="ts">
import { computed } from 'vue'
import { zeitwerkPort, resolveZeitwerkRegistryEntry } from '.'

const model = computed(() => ({
  port: zeitwerkPort(),
  entry: resolveZeitwerkRegistryEntry('automount'),
}))
const root = computed(() => model.value.port.root)
const computedOk = computed(
  () => model.value.port.ported && model.value.entry !== null,
)
</script>

<template>
  <output
    class="display-dual-gate"
    data-logic="src/routes/automount/index.ts"
    data-target="src/routes/automount/index.ts"
    data-topic="automount"
    :data-root="root"
    :data-computed="computedOk"
    aria-hidden="true"
  />
</template>
