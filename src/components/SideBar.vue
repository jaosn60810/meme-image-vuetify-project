<template>
  <VNavigationDrawer expand-on-hover v-model="drawer">
    <VList density="compact" nav>
      <VListItem
        prepend-icon="mdi-folder"
        title="熱門"
        @click="getMemes"
        value="popular"
        :active="isPopular"
      ></VListItem>
      <VListItem
        v-for="memeClass in memeStore.memeClasses"
        :key="memeClass.id"
        @click="getMemesByClassId(memeClass.id)"
        prepend-icon="mdi-folder"
        :title="memeClass.name"
        :value="memeClass.id"
      ></VListItem>
    </VList>
  </VNavigationDrawer>
</template>

<script lang="ts" setup>
import { useMemeStore } from "@/store/meme";
import { ref } from "vue";

const drawer = ref(true);
const isPopular = ref(true);
const memeStore = useMemeStore();

function toggleDrawer() {
  drawer.value = !drawer.value;
}

function getMemes() {
  memeStore.getMemes();
  isPopular.value = true;
}

function getMemesByClassId(memeClassId: number) {
  memeStore.getMemesByClassId(memeClassId);
  isPopular.value = false;
}

defineExpose({ toggleDrawer });
</script>
