<template>
  <layout_type1 :titlegroup="titlegroup">
    <h2>로그인</h2>
  </layout_type1>
</template>

<script>
import layout_type1 from "../layout/layout_type1.vue";

export default {
  components: {
    layout_type1,
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
