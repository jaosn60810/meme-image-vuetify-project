<template>
  <VNavigationDrawer expand-on-hover rail>
    <VList>
      <VListItem
        prepend-avatar="@/assets/ms-icon-310x310.webp"
        title="Meme 梗圖倉庫 "
        subtitle="https://memes.tw/"
      ></VListItem>
    </VList>

    <VDivider></VDivider>

    <VList density="compact" nav>
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

const memeStore = useMemeStore();
</script>
