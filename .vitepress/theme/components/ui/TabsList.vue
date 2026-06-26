<script setup lang="ts">
import { TabsList } from 'radix-vue'
import { cn } from '../../../lib/cn.ts'

const props = defineProps<{ class?: string }>()
</script>

<template>
  <TabsList :class="cn('ui-tabs__list', props.class)">
    <slot />
  </TabsList>
</template>
