<script setup lang="ts">
import { AvatarFallback, AvatarImage, AvatarRoot } from 'radix-vue'
import { cn } from '../../../lib/cn.ts'

const props = defineProps<{ class?: string; src?: string; alt?: string }>()
</script>

<template>
  <AvatarRoot :class="cn('ui-avatar', props.class)" data-shadcn="avatar">
    <AvatarImage v-if="src" class="ui-avatar__image" :src="src" :alt="alt" />
    <AvatarFallback class="ui-avatar__fallback">
      <slot />
    </AvatarFallback>
  </AvatarRoot>
</template>
