import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../pages/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      // component: HomeView
      component: () => import("../pages/boardList.vue"),
    },
    {
      path: "/boardRead",
      name: "boardRead",
      component: () => import("../pages/boardRead.vue"),
    },
    {
      path: "/boardWrite",
      name: "boardWrite",
      component: () => import("../pages/boardWrite.vue"),
    },
    {
      path: "/setTree",
      name: "setTree",
      component: () => import("../pages/setTree.vue"),
    },
    {
      path: "/signIn",
      name: "signIn",
      component: () => import("../pages/signIn.vue"),
    },
  ],
});

export default router;
