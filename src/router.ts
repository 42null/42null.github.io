import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import showcaseJsonWeb from "@/assets/showcaseDetails/WebShowcase.json";
import showcaseJsonApps from "@/assets/showcaseDetails/AppsShowcase.json";
import showcaseJsonGames from "@/assets/showcaseDetails/GamesShowcase.json";

const loadShowcases = async (path: string) => {
  const response = await fetch(path);
  return await response.json();
};

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/home",
    name: "Home",
    component: () => import("@/pages/Home.vue"),
  },
  {
    path: "/axios",
    name: "Axios",
    component: () => import("@/pages/Axios.vue"),
  },
  {
    path: "/web-showcase",
    name: "Web Showcase",
    component: () => import("@/pages/Showcase.vue"),
    props: {
      title: "Web",
      description: "",
      showcases: showcaseJsonWeb
    },
  },
  {
    path: "/app-showcase",
    name: "App Showcase",
    component: () => import("@/pages/Showcase.vue"),
    props: {
      title: "Apps Showcase",
      description: "",
      showcases: showcaseJsonApps
    },
  },
  {
    path: "/game-showcase",
    name: "Games Showcase",
    component: () => import("@/pages/Showcase.vue"),
    props: {
      title: "Games Showcase",
      description: "",
      showcases: showcaseJsonGames
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/pages/About.vue"),
  },
];

const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(),
  routes,
});

export default router;
