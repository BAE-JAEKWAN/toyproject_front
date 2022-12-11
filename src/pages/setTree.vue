<template>
  <layout_basic :titlegroup="titlegroup">
    <h2>메뉴 구조 설정</h2>
  </layout_basic>
</template>

<script lang="ts">
import layout_basic from "../layout/layout_basic.vue";

export default {
  components: {
    layout_basic,
  },
  data() {
    return {
      titlegroup: {
        title: "메뉴 구조 설정",
        text: "메뉴 구조 메뉴 구조 메뉴 구조 메뉴 구조 메뉴 구조 메뉴 구조 메뉴 구조 메뉴 구조 메뉴 구조 메뉴 구조 메뉴 구조 ",
      },
    };
  },
};
</script>

<style></style>
