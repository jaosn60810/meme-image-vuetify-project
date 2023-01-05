<template>
  <VApp :theme="theme">
    <NavBar
      @changeTheme="changeTheme"
      @openSideBar="drawerRef?.toggleDrawer"
      :theme="theme"
    ></NavBar>

    <SideBar ref="drawerRef"></SideBar>

    <VMain>
      <ImageGallery @openSnackbar="snackbarRef?.openSnackbar"></ImageGallery>
    </VMain>

    <Snackbar ref="snackbarRef"></Snackbar>
  </VApp>
</template>

<script lang="ts" setup>
import ImageGallery from "@/components/ImageGallery.vue";
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue";
import Snackbar from "@/components/Snackbar.vue";

import { ref } from "vue";

const snackbarRef = ref<InstanceType<typeof Snackbar> | null>(null);
const drawerRef = ref<InstanceType<typeof SideBar> | null>(null);

const theme = ref<"dark" | "light">("dark");

function changeTheme() {
  theme.value = theme.value === "light" ? "dark" : "light";
}
</script>
