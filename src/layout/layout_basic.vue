<template>
  <section class="section_title_group">
    <template v-if="!writeMode">
      <h2 class="title" v-if="titlegroup.title">{{ titlegroup.title }}</h2>
      <p class="text" v-if="titlegroup.text">
        {{ titlegroup.text }}
      </p>
    </template>
    <template v-if="writeMode">
      <h2 class="title">
        <input type="text" v-model="titlegroup.title" />
      </h2>
      <input type="text" v-model="titlegroup.text" />
    </template>
  </section>
  <div class="wrapper">
    <main id="main">
      <slot />
    </main>
  </div>
</template>

<script lang="ts">
export default {
  props: ["titlegroup", "articleType", "writeMode"],
  setup(props) {},
  data() {
    return {};
  },
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .wrapper {
    flex: 1;
    margin: -60px auto 40px;
    width: 100%;
    padding: 0 40px;
    #main {
      height: 100%;
      background-color: #fff;
      border-radius: 6px;
      overflow: hidden;
      //   max-width: 900px;
      box-shadow: 0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
    }
  }
  .articleWrap {
    padding: 70px;
  }
  .section_title_group {
    background: linear-gradient(87deg, #2dce89, #2dcecc) !important;
    width: 100%;
    color: #fff;
    padding: 100px 40px 100px 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    .title {
      font-size: 40px;
      font-weight: 300;
      margin-bottom: 20px;
    }
    .text {
      font-weight: 100;
      width: 370px;
    }
  }
}
</style>
