<script setup lang="ts">
// Rich-only: its slotted content shows in rich mode and is hidden in simple mode.
// A thin wrapper over the global .rich-only utility (driven by html[data-mode]),
// so any page or component can mark its deeper detail without its own logic.
</script>

<template>
  <div class="rich-only"><slot /></div>
</template>
