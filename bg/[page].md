---
outline: deep
---

<script setup>
import { useData } from 'vitepress'
const { params } = useData()
</script>

# {{ params.title }}

<component v-for="name in params.components" :is="name" :key="name" />
