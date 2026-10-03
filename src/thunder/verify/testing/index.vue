<script setup lang="ts">
import { liveTestingDiscovery } from './index.ts'

const discovery = liveTestingDiscovery()
</script>

<template>
  <div class="testing-framework">
    <h2>{{ discovery.statement }}</h2>
    <ul>
      <li v-for="facet in discovery.facets" :key="facet.facet">
        {{ facet.facet }} <span :class="{ on: facet.on }">{{ facet.on ? '✓' : '○' }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.testing-framework {
  padding: 1rem;
}
.on {
  color: green;
}
</style>
