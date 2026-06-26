<script setup lang="ts">
import { shallowRef } from 'vue'
import { earthComputes } from './index.ts'

const panel = shallowRef(earthComputes())
</script>

<template>
  <output
    class="display-dual-gate earth-science-hub"
    data-logic="src/earth/index.ts"
    data-target="src/earth/index.ts#earthComputes"
    data-topic="earth-science"
    :data-computes="panel.computes ? 'true' : 'false'"
    :data-tails="panel.tails.length"
    aria-hidden="true"
  />
</template>
