<template>
  <VCard class="mx-5 my-2 pa-3">
    <VRow>
      <VCol
        v-for="(meme, memeIndex) in memeStore.memes"
        :key="meme.id"
        cols="12"
        sm="6"
        md="4"
      >
        <VCard @click="copyUrl(meme.src, memeIndex)">
          <VImg :src="meme.src" aspect-ratio="1" contain>
            <div class="d-flex justify-space-between">
              <CopiedButton :isLoading="loading[memeIndex]"></CopiedButton>
              <LinkButton :memeUrl="meme.url"></LinkButton>
            </div>

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
import { onMounted, ref } from "vue";
import CopiedButton from "./CopiedButton.vue";
import LinkButton from "./LinkButton.vue";

const memeStore = useMemeStore();

const emit = defineEmits(["openSnackbar"]);

const loading = ref<boolean[]>([]);

async function copyUrl(url: string, memeIndex: number) {
  await navigator.clipboard.writeText(url);
  load(memeIndex);
  emit("openSnackbar");
}

function load(memeIndex: number) {
  loading.value[memeIndex] = true;
  setTimeout(() => (loading.value[memeIndex] = false), 1000);
}

onMounted(() => {
  memeStore.getMemes();
});
</script>

<style scoped></style>
