import Vue from "vue";
import Router from "vue-router";
import Home from "../views/home/Home.vue";
import Login from "../views/login/login.vue";
import Layout from "../views/layout/Layout.vue";

Vue.use(Router);

const constantRouter = [
  { path: "/", name: "login", component: Login, hidden: true },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/404"),
    hidden: true
  },
  {
    path: "/home",
    name: "首页",
    component: Layout,
    menu: "one", //一级菜单
    meta: { title: "home", icon: "home" },
    children: [
      {
        path: "",
        name: "home",
        component: Home
      }
    ]
  },
  {
    path: "/demo",
    name: "demo演示",
    component: Layout,
    children: [
      {
        path: "/demo1-0",
        name:"demo1-0",
        component: () => import("../views/demo"),
        meta: { title: "demo1-0", icon: "demo1-0" }
      },
      {
        path: "/demo1-1",
        name:"demo1-1",
        component: () => import("../views/demo/demo1-1.vue"),
        meta: { title: "demo1-1", icon: "demo1-1" }
      },
      {
        path: "/demo1-2",
        name:"demo1-2",

        component: () => import("../views/demo/demo1-2.vue"),
        meta: { title: "demo1-2", icon: "demo1-2" }
      },
      {
        path: "/demo1-3",
        name:"demo1-3",

        component: () => import("../views/demo/demo1-3.vue"),
        meta: { title: "demo1-3", icon: "demo1-3" }
      },
    ]
  },
  
];

export default new Router({
  routes: constantRouter
});
