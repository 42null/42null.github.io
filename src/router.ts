import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import webShowcaseJSON from "@/assets/showcaseDetails/WebShowcase.json";

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
      title: "Web Showcase",
      description: "",
      showcases: webShowcaseJSON
    },
  },
  {
    path: "/app-showcase",
    name: "App Showcase",
    component: () => import("@/pages/Showcase.vue"),
    props: {
      title: "App Showcase",
      description: "",
      showcases: webShowcaseJSON
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
