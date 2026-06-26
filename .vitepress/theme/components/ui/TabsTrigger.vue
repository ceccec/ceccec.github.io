<script setup lang="ts">
import { TabsTrigger } from 'radix-vue'
import { cn } from '../../../lib/cn.ts'

const props = defineProps<{ class?: string; value: string }>()
</script>

<template>
  <TabsTrigger :class="cn('ui-tabs__trigger', props.class)" :value="value">
    <slot />
  </TabsTrigger>
</template>
