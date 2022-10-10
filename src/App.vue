<script setup lang="ts">
import { RouterView } from "vue-router";
import layoutHeader from "./layout/header.vue";
</script>

<template>
  <div class="wrapper">
    <layoutHeader />

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
