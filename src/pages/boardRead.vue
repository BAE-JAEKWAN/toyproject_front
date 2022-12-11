<template>
  <layout_basic :titlegroup="state.titlegroup" :articleType="state.articleType">
    <h2 class="blind">게시물 보기</h2>
    <article class="articleWrap" v-if="state.articleType">
      <p>
        Never in all their history have men been able truly to conceive of the
        world as one: a single sphere, a globe, having the qualities of a globe,
        a round earth in which all the directions eventually meet, in which
        there is no center because every point, or none, is center — an equal
        earth which all men occupy as equals. The airman's earth, if free men
        make it, will be truly round: a globe in practice, not in theory.
      </p>
      <p>
        Science cuts two ways, of course; its products can be used for both good
        and evil. But there's no turning back from science. The early warnings
        about technological dangers also come from science.
      </p>
      <p>
        What was most significant about the lunar voyage was not that man set
        foot on the Moon but that they set eye on the earth.
      </p>
      <p>
        A Chinese tale tells of some men sent to harm a young girl who, upon
        seeing her beauty, become her protectors rather than her violators.
        That's how I felt seeing the Earth for the first time. I could not help
        but love and cherish her.
      </p>
      <p>
        For those who have seen the Earth from space, and for the hundreds and
        perhaps thousands more who will, the experience most certainly changes
        your perspective. The things that we share in our world are far more
        valuable than those which divide us.
      </p>
      <h3>The Final Frontier</h3>
      <p>
        There can be no thought of finishing for ‘aiming for the stars.’ Both
        figuratively and literally, it is a task to occupy the generations. And
        no matter how much progress one makes, there is always the thrill of
        just beginning.
      </p>

      <p>
        There can be no thought of finishing for ‘aiming for the stars.’ Both
        figuratively and literally, it is a task to occupy the generations. And
        no matter how much progress one makes, there is always the thrill of
        just beginning.
      </p>

      <p>
        The dreams of yesterday are the hopes of today and the reality of
        tomorrow. Science has not yet mastered prophecy. We predict too much for
        the next year and yet far too little for the next ten. Spaceflights
        cannot be stopped. This is not the work of any one man or even a group
        of men. It is a historical process which mankind is carrying out in
        accordance with the natural laws of human development.
      </p>
    </article>
    <bottomGroup :bottomGroup="state.bottomGroup" />
  </layout_basic>
</template>

<script lang="ts">
import { reactive, onMounted } from "vue";
import layout_basic from "../layout/layout_basic.vue";
import bottomGroup from "../components/bottomGroup.vue";

export default {
  components: {
    layout_basic,
    bottomGroup,
  },
  setup() {
    const state = reactive({
      articleType: true,
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
          list: true,
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
