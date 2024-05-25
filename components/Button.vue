<template>
  <div @click="onclick">
    {{ name }}
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  name: string;
  onclick: (payload: MouseEvent) => void;
}>();
</script>
