<script setup lang="ts">
// Shadcn-space shell — co-located src/routes/index.ts; topic views in subfolder barrels
import HomepageView from './homepage/index.vue'
import NavigationView from './navigation/index.vue'
import CorpusView from './corpus/index.vue'
import MonographView from './monograph/index.vue'
import HeroView from './hero/index.vue'
import RosettaView from './rosetta/index.vue'
</script>

<template>
  <section class="ui-card ui-card--stack routes-display-dual" data-shadcn="card" data-logic="src/routes/index.ts">
    <HomepageView />
    <NavigationView />
    <CorpusView />
    <MonographView />
    <HeroView />
    <RosettaView />
  </section>
</template>
