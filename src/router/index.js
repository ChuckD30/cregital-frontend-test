import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Results from "@/views/Results.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/results/:query",
    name: "results",
    component: Results
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
