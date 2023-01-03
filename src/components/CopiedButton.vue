<template>
  <VBtn
    :loading="isLoading"
    :disabled="isLoading"
    class="bg-shades-black"
    variant="text"
    size="x-small"
    icon="mdi-content-copy"
  >
    <template v-slot:loader>
      <VIcon icon="mdi-check-bold"></VIcon>
    </template>
  </VBtn>
</template>

<script setup lang="ts">
defineProps<{ isLoading: boolean }>();
</script>
