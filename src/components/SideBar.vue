<template>
  <VNavigationDrawer expand-on-hover v-model="drawer">
    <VList density="compact" nav>
      <VListItem
        prepend-icon="mdi-folder"
        title="熱門"
        @click="memeStore.getMemes"
      ></VListItem>
      <VListItem
        v-for="memeClass in memeStore.memeClasses"
        :key="memeClass.id"
        @click="memeStore.getMemesByClassId(memeClass.id)"
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
const memeStore = useMemeStore();

function toggleDrawer() {
  drawer.value = !drawer.value;
}

defineExpose({ toggleDrawer });
</script>
