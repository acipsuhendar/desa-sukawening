import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import MapView from "../views/MapView.vue";
import PerangkatView from "../views/PerangkatView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/about",
      name: "About",
      component: AboutView,
    },
    {
      path: "/perangkat",
      name: "Perangkat",
      component: PerangkatView,
    },
    {
      path: "/map",
      name: "Map",
      component: MapView,
    },
  ],
});

export default router;
