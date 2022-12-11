<template>
  <layout_basic
    :titlegroup="state.titlegroup"
    :articleType="state.articleType"
    :writeMode="state.writeMode"
  >
    <h2 class="blind">게시물 보기</h2>
    <article class="articleWrap" v-if="state.articleType"></article>
    <bottomGroup :bottomGroup="state.bottomGroup" />
  </layout_basic>
</template>

<script lang="ts">
import { reactive, computed, onMounted } from "vue";
import layout_basic from "../layout/layout_basic.vue";
import bottomGroup from "../components/bottomGroup.vue";

export default {
  components: {
    layout_basic,
    bottomGroup,
  },
  setup() {
    const state: any = reactive({
      articleType: true,
      writeMode: true,
      titlegroup: {
        title: "",
        text: "",
      },
      articleData: {
        title: {
          text: "주간회의",
        },
        importance: "LOW",
        assigns: [
          {
            name: "배재관",
            email: "toxicviolet84@gmail.com",
            img: "/src/assets/img/img_profile01.webp",
          },
          {
            name: "배재관",
            email: "toxicviolet84@gmail.com",
            img: "/src/assets/img/img_profile02.webp",
          },
          {
            name: "배재관",
            email: "toxicviolet84@gmail.com",
            img: "/src/assets/img/img_profile03.webp",
          },
          {
            name: "배재관",
            email: "toxicviolet84@gmail.com",
          },
        ],
        date: "2022년 9월 23일 오후 09:00",
      },
      bottomGroup: {
        subGroup: {
          confirm: true,
          cancel: true,
        },
      },
    });
    onMounted(() => {
      state.titlegroup.title = state.articleData.title.text;
      state.titlegroup.text = state.articleData.date;
    });
    return {
      state,
    };
  },
};
</script>

<style></style>
