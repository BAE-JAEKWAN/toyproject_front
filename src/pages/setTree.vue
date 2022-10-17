<template>
  <layout_type1 :titlegroup="titlegroup">
    <h2>메뉴 구조 설정</h2>
  </layout_type1>
</template>

<script lang="ts">
import layout_type1 from "../layout/layout_type1.vue";

export default {
  components: {
    layout_type1,
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
