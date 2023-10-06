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
  {
    path: "/avecalcool",
    name: "alcoollist",
  },

  {
    path: "/sansalcool",
    name: "sansalcoollist",
  },

  {
    path: "/selectionalcool",
    name: "selectionalcoollist",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
