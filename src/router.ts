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
    props: { showcases: webShowcaseJSON },
    // props: async () => {
    //   const showcases = webShowcaseJSON;
    //   // const showcases = await loadShowcases("@/assets/showcaseDetails/WebShowcase.json");
    //   return { showcases };
    // },
  },
  {
    path: "/app-showcase",
    name: "App Showcase",
    component: () => import("@/pages/Showcase.vue"),
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
