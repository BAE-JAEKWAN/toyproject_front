import { createRouter, createWebHistory } from "vue-router";
import routes from "~pages";
// import HomeView from '../pages/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
