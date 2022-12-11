<template>
  <layout_basic :titlegroup="titlegroup">
    <h2>로그인</h2>
  </layout_basic>
</template>

<script>
import layout_basic from "../layout/layout_basic.vue";

export default {
  components: {
    layout_basic,
  },
  data() {
    return {
      titlegroup: {
        title: "로그인",
        text: "로그아웃 로그아웃 로그아웃 로그아웃 로그아웃 로그아웃 로그아웃 로그아웃 로그아웃 로그아웃 로그아웃 로그아웃 로그아웃 로그아웃 ",
      },
    };
  },
};
</script>

<style></style>
