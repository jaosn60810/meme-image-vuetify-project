<template>
  <VNavigationDrawer expand-on-hover v-model="drawer">
    <VList density="compact" nav>
      <VListItem
        v-for="memeClass in memeStore.memeClasses"
        :key="memeClass.id"
        @click="getMemesByClassId(memeClass.id)"
        prepend-icon="mdi-folder"
        :title="memeClass.name"
        :value="memeClass.id"
        :active="memeClass.id === currentMemeClassId"
      ></VListItem>
    </VList>
  </VNavigationDrawer>
</template>

<script lang="ts" setup>
import { useMemeStore } from "@/store/meme";
import { computed, ref } from "vue";
import { useTitle } from "@vueuse/core";

const drawer = ref(true);

const memeStore = useMemeStore();
const currentMemeClassId = ref<number>(0);
const currentMemeClassName = computed(() =>
  memeStore.memeClasses?.find(
    (memeClass) => memeClass.id === currentMemeClassId.value
  )
);

const title = computed(
  () => `Meme 梗圖倉庫 | ${currentMemeClassName.value?.name}`
);

useTitle(title);

function toggleDrawer() {
  drawer.value = !drawer.value;
}

function getMemesByClassId(memeClassId: number) {
  memeStore.getMemesByClassId(memeClassId);
  currentMemeClassId.value = memeClassId;
}

defineExpose({ toggleDrawer });
</script>
