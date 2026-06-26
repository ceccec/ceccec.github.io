<script setup lang="ts">
import { cn } from '../../../lib/cn.ts'

const props = defineProps<{ class?: string }>()
</script>

<template>
  <div :class="cn('ui-skeleton', props.class)" data-shadcn="skeleton" aria-hidden="true" />
</template>
