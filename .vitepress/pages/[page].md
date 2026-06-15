---
outline: deep
---

<script setup>
import { useData } from 'vitepress'
const { params } = useData()
</script>

<!-- Raw <h1>, not a `#` markdown heading: a markdown heading is slugified by markdown-it at
     BUILD time, before Vue interpolates, so `# {{ params.title }}` would bake the literal
     "{{ params.title }}" into the heading id and the permalink aria-label on every page. Raw
     HTML lets Vue interpolate the real title (SSR + client) with no bogus anchor. -->
<h1>{{ params.title }}</h1>

<p class="page-lede">{{ params.description }}</p>

<div v-for="name in params.components" :key="name" class="living"><component :is="name" /></div>

<p v-if="params.proof" class="page-proof"><span class="proof__ok">✓ proven</span> · content-address <code>{{ params.proof }}</code> — declared, placed, mounted, and recomputable from the component's name.</p>
