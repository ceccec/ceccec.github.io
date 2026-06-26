<script setup lang="ts">
import { TabsContent } from 'radix-vue'
import { cn } from '../../../lib/cn.ts'

const props = defineProps<{ class?: string; value: string }>()
</script>

<template>
  <TabsContent :class="cn('ui-tabs__content', props.class)" :value="value">
    <slot />
  </TabsContent>
</template>
