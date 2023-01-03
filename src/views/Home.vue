<template>
  <VApp>
    <SideBar></SideBar>

    <VMain>
      <ImageGallery @open-snackbar="snackbar?.openSnackbar"></ImageGallery>
    </VMain>

    <Snackbar ref="snackbar"></Snackbar>
  </VApp>
</template>

<script lang="ts" setup>
import ImageGallery from "@/components/ImageGallery.vue";
import SideBar from "@/components/SideBar.vue";
import Snackbar from "@/components/Snackbar.vue";

import { ref } from "vue";

const snackbar = ref<InstanceType<typeof Snackbar> | null>(null);
</script>
