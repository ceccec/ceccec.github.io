---
outline: deep
---

<script setup>
import { useData } from 'vitepress'
import { componentBaguaGroups } from '../../src/ui/lib/quantumMind'
const { params } = useData()
</script>

<!-- Raw <h1>, not a `#` markdown heading: a markdown heading is slugified by markdown-it at
     BUILD time, before Vue interpolates, so `# {{ params.title }}` would bake the literal
     "{{ params.title }}" into the heading id and the permalink aria-label on every page. Raw
     HTML lets Vue interpolate the real title (SSR + client) with no bogus anchor. -->
<h1>{{ params.title }}</h1>

<p class="page-lede">{{ params.description }}</p>

<template v-for="group in componentBaguaGroups(params.components).groups" :key="group.glyph">
  <p v-if="group.grouped" class="bagua-set" :data-trigram="group.glyph"><span class="bagua-set__glyph">{{ group.glyph }}</span><span class="bagua-set__name">{{ group.name }}</span><span class="bagua-set__mean">{{ group.meaningEn }}</span></p>
  <div v-for="name in group.components" :key="name" class="living"><component :is="name" /></div>
</template>

<p v-if="params.proof" class="page-proof"><span class="proof__ok">✓ proven</span> · content-address <code>{{ params.proof }}</code> — declared, placed, mounted, and recomputable from the component's name.</p>
