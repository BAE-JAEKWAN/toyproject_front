<script setup lang="ts">
import { RouterView } from "vue-router";
import layoutHeader from "./layout/header.vue";
</script>

<template>
  <layoutHeader />

  <div class="wrapper">
    <main id="main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
