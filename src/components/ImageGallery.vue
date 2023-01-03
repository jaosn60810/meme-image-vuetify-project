<template>
  <VCard class="mx-5 my-2 pa-3">
    <VRow>
      <VCol
        v-for="meme in memeStore.memes"
        :key="meme.id"
        cols="12"
        sm="4"
        md="2"
      >
        <VCard>
          <VImg :src="meme.src" aspect-ratio="1" cover>
            <template v-slot:placeholder>
              <VRow class="fill-height ma-0" align="center" justify="center">
                <VProgressCircular
                  indeterminate
                  color="grey-lighten-5"
                ></VProgressCircular>
              </VRow>
            </template>
          </VImg>
        </VCard>
      </VCol>
    </VRow>
  </VCard>
</template>

<script setup lang="ts">
import { useMemeStore } from "@/store/meme";
import { onMounted } from "vue";

const memeStore = useMemeStore();

onMounted(() => {
  memeStore.getMemes();
});
</script>

<style scoped></style>
