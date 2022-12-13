<template>
  <header id="header">
    <h1 class="blind">Toy Project</h1>
    <b-nav pills small>
      <b-nav-item to="/boardList" exact-active-class="active"
        >게시물</b-nav-item
      >
      <b-nav-item to="/setTree" exact-active-class="active"
        >메뉴 구조 설정</b-nav-item
      >
      <b-nav-item to="/signIn" exact-active-class="active">로그아웃</b-nav-item>
    </b-nav>
  </header>
</template>

<style>
#header {
  padding: 20px;
  background-color: #fff;
  width: 100%;
}
</style>
