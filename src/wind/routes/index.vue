<script setup lang="ts">
// Shadcn-space shell — co-located src/wind/routes/index.ts; the topic view of each subfolder that has one (corpus)
import CorpusView from './corpus/index.vue'
</script>

<template>
  <section class="ui-card ui-card--stack routes-display-dual" data-shadcn="card" data-logic="src/wind/routes/index.ts">
    <CorpusView />
  </section>
</template>
