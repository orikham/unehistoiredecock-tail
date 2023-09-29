import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CocktailDetailView from "../views/CocktailDetailView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    CocktailDetailView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
