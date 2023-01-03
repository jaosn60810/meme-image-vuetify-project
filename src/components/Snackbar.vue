<template>
  <VSnackbar v-model="snackbar" timeout="1000">
    Copied
    <template v-slot:actions>
      <VBtn color="pink" variant="text" @click="closeSnackbar"> Close </VBtn>
    </template>
  </VSnackbar>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const snackbar = ref(false);

function openSnackbar() {
  snackbar.value = true;
}

function closeSnackbar() {
  snackbar.value = false;
}

defineExpose({
  openSnackbar,
});
</script>
