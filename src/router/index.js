import Vue from "vue";
import VueRouter from "vue-router";

import IndexPage from "@/views/index";
import List from "@/views/List";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "IndexPage",
    component: IndexPage,
  },
  {
    path: "/list",
    name: "ListPage",
    component: List,
  },
];

const router = new VueRouter({
  routes
});

export default router;
