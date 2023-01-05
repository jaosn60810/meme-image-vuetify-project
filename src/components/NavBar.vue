<template>
  <VAppBar>
    <VAppBarNavIcon variant="text" @click.stop="openSideBar"></VAppBarNavIcon>

    <VToolbarTitle>
      <VBtn href="https://memes.tw/" target="_blank" mobile-break-point="1264">
        <VAvatar image="@/assets/ms-icon-310x310.webp" rounded="0"></VAvatar>
        <span class="d-none d-md-inline">Meme 梗圖倉庫</span>
      </VBtn>
    </VToolbarTitle>

    <VSpacer></VSpacer>

    <VBtn
      :prepend-icon="
        theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
      "
      @click="changeTheme"
    ></VBtn>
  </VAppBar>
</template>

<script setup lang="ts">
const emit = defineEmits(["changeTheme", "openSideBar"]);

defineProps<{
  theme: "dark" | "light";
}>();

function changeTheme() {
  emit("changeTheme");
}

function openSideBar() {
  emit("openSideBar");
}
</script>

<style scoped></style>
