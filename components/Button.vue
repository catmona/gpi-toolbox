<template>
  <o-button class="px-5 py-3 shadow rounded-lg bg-indigo-400 text-white font-semibold ripple-bg-indigo-400">
    {{ props.title }}
  </o-button>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  color: string;
}>();
</script>

<style scoped></style>
