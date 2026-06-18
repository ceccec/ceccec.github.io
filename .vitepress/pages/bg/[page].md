---
outline: deep
---

<script setup>
import { useData } from 'vitepress'
import { componentBaguaGroups } from '../../../src/ui/lib/quantumMind'
const { params } = useData()
</script>

# {{ params.title }}

<p class="page-lede">{{ params.description }}</p>

<template v-for="group in componentBaguaGroups(params.components).groups" :key="group.glyph">
  <p v-if="group.grouped" class="bagua-set" :data-trigram="group.glyph"><span class="bagua-set__glyph">{{ group.glyph }}</span><span class="bagua-set__name">{{ group.name }}</span><span class="bagua-set__mean">{{ group.meaningBg }}</span></p>
  <div v-for="name in group.components" :key="name" class="living"><component :is="name" /></div>
</template>

<p v-if="params.proof" class="page-proof"><span class="proof__ok">✓ доказано</span> · адрес по съдържание <code>{{ params.proof }}</code> — деклариран, поставен, монтиран и преизчислим от името на компонента.</p>
