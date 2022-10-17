<template>
  <layout_type1 :titlegroup="titlegroup">
    <div class="boardList">
      <b-table
        id="boardList1"
        class="basic_table"
        :items="items"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
      >
        <template #cell(title)="data">
          <a :href="data.value.url || 'javascript:;'" class="table_title">{{
            data.value.text
          }}</a>
        </template>
        <template #cell(importance)="data">
          <span
            class="table_importance"
            :class="{
              status_low: data.value === 'LOW',
              status_middle: data.value === 'MIDDLE',
              status_high: data.value === 'HIGH',
            }"
            >{{ data.value }}</span
          >
        </template>
        <template #cell(assigns)="data">
          <ul class="assigned_list">
            <li v-for="(value, index) in data.value" :key="index">
              <button
                type="button"
                class="assigned_member"
                :id="`tooltip-target-${index}`"
              >
                <img v-if="value.img" :src="value.img" class="profile_img" />
                <BootstrapIcon v-else icon="person-fill" class="default_img" />
              </button>
              <div class="tool_tip">
                {{ value.name }}
                {{ value.email }}
              </div>
            </li>
          </ul>
        </template>
        <template #cell(date)="data">
          <span class="table_date">{{ data.value }}</span>
        </template>
      </b-table>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="boardList1"
        align="end"
      ></b-pagination>
    </div>
  </layout_type1>
</template>

<script>
import layout_type1 from "../layout/layout_type1.vue";

export default {
  name: "boardList",
  components: {
    layout_type1,
  },
  data() {
    return {
      titlegroup: {
        title: "회의록",
        text: "이 템플릿을 사용해 모든 회의록을 한곳에 모아두세요. 회의 유형별로 회의록을 태그해 쉽게 찾을 수 있습니다. 회의 일시 및 참석자 등 유용한 정보도 쉽게 확인해 보세요.",
      },
      perPage: 5,
      currentPage: 1,
      fields: [
        {
          key: "title",
          label: "제목",
          thClass: "col-6",
        },
        {
          key: "importance",
          label: "중요도",
          thClass: "col-2",
        },
        {
          key: "assigns",
          label: "참여자",
          thClass: "col-2",
        },
        {
          key: "date",
          label: "작성일",
          thClass: "col-2",
        },
      ],
      items: [
        {
          title: {
            text: "주간회의",
            url: null,
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
        {
          title: {
            text: "스탠드업 회의",
            url: null,
          },
          importance: "MIDDLE",
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
        {
          title: {
            text: "벙개장소 후보지 선정",
            url: null,
          },
          importance: "HIGH",
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
        {
          title: {
            text: "주간회의",
            url: null,
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
        {
          title: {
            text: "스탠드업 회의",
            url: null,
          },
          importance: "MIDDLE",
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
        {
          title: {
            text: "벙개장소 후보지 선정",
            url: null,
          },
          importance: "HIGH",
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
        {
          title: {
            text: "주간회의",
            url: null,
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
        {
          title: {
            text: "스탠드업 회의",
            url: null,
          },
          importance: "MIDDLE",
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
        {
          title: {
            text: "벙개장소 후보지 선정",
            url: null,
          },
          importance: "HIGH",
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
      ],
    };
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
};
</script>

<style lang="scss">
.assigned_list {
  display: flex;
  > li {
    margin-right: -12px;
    position: relative;
    &:last-child {
      margin-right: 0;
    }
    &:hover,
    &:focus {
      z-index: 1;
    }
  }
}
.assigned_member {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #fff;
  color: #fff;
  background-color: #888;
  .default_img,
  .profile_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
  }
  .default_img {
    margin-bottom: -6px;
  }
  &:hover,
  &:focus {
    + .tool_tip {
      display: block;
      position: absolute;
      top: -64px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
.tool_tip {
  background-color: #222;
  color: #fff;
  padding: 10px;
  border-radius: 6px;
  display: none;
  &::after {
    content: "";
    display: block;
    border-top: 6px solid #222;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
  }
}
.table_importance {
  display: inline-flex;
  align-items: center;
  &::before {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    margin-right: 6px;
  }
  &.status_low {
    color: #2dce89;
    &::before {
      background-color: #2dce89;
    }
  }
  &.status_middle {
    color: #11cdef;
    &::before {
      background-color: #11cdef;
    }
  }
  &.status_high {
    color: #f5365c;
    &::before {
      background-color: #f5365c;
    }
  }
}
.pagination {
  margin: 16px;
}
</style>
