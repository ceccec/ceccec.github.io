<script setup lang="ts">
import { liveTestingGapsDiscoveredAndFixed } from './index.ts'

const gaps = liveTestingGapsDiscoveredAndFixed()
</script>

<template>
  <div class="testing-gaps">
    <h2>{{ gaps.statement }}</h2>
    <div v-if="gaps.gaps">
      <table>
        <tr v-for="gap in gaps.gaps" :key="gap.receipt">
          <td>{{ gap.name }}</td>
          <td :class="`severity-${gap.severity.toLowerCase()}`">{{ gap.severity }}</td>
          <td>{{ gap.fixed ? '✓' : '○' }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
.testing-gaps {
  padding: 1rem;
}
table {
  width: 100%;
  border-collapse: collapse;
}
td {
  padding: 0.5rem;
  border-bottom: 1px solid #eee;
}
.severity-blocker {
  color: red;
  font-weight: bold;
}
.severity-high {
  color: orange;
}
</style>
