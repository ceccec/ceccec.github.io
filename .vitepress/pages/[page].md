---
outline: deep
---

<script setup>
import { useData } from 'vitepress'
const { params } = useData()
</script>

# {{ params.title }}

<p class="page-lede">{{ params.description }}</p>

<div v-for="name in params.components" :key="name" class="living"><component :is="name" /></div>

<p v-if="params.proof" class="page-proof"><span class="proof__ok">✓ proven</span> · content-address <code>{{ params.proof }}</code> — declared, placed, mounted, and recomputable from the component's name.</p>
