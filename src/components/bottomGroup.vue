<template>
  <div class="bottomGroup d-flex justify-content-end">
    <b-pagination
      v-model="bottomGroup.pagination.currentPage"
      :total-rows="bottomGroup.pagination.rows"
      :per-page="bottomGroup.pagination.perPage"
      aria-controls="boardList1"
      align="end"
      v-if="bottomGroup.pagination"
    ></b-pagination>
    <b-button-group class="subGroup" v-if="bottomGroup.subGroup">
      <b-button
        variant="primary"
        to="/boardWrite"
        v-if="bottomGroup.subGroup.write"
        >글쓰기</b-button
      >
      <b-button
        variant="success"
        to="/boardRead"
        v-if="bottomGroup.subGroup.confirm"
        >작성</b-button
      >
      <b-button variant="primary" to="/" v-if="bottomGroup.subGroup.list"
        >목록</b-button
      >
      <b-button variant="secondary" to="/" v-if="bottomGroup.subGroup.cancel"
        >취소</b-button
      >
    </b-button-group>
  </div>
</template>
<script lang="ts">
export default {
  props: ["bottomGroup"],
  setup(props) {
    console.log(props.bottomGroup);
  },
};
</script>
