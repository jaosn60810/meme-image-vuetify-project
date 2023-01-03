<template>
  <VBtn
    class="bg-shades-black"
    variant="text"
    size="x-small"
    icon="mdi-open-in-new"
    :href="memeUrl"
    target="_blank"
  >
  </VBtn>
</template>

<script setup lang="ts">
defineProps<{ memeUrl: string }>();
</script>
