import Vue from "vue";
import Router from "vue-router";
import Home from "../views/home/Home.vue";
import Login from "../views/login/login.vue";
import Layout from "../views/layout/Layout.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/404",
      name: "404",
      component: () => import("../views/404")
    },
    {
      path: "/home",
      name: "home",
      component: Layout,
      redirect: "/home/main",
      children: [
        {
          path: "main",
          name: "main",
          component: Home,
          meta: { title: "首页", icon: "home" }
        }
      ]
    },
    {
      path: "/demo",
      name: "demo",
      component: Layout,
      redirect: "/demo/main",
      children: [
        {
          path: "main",
          name: "testmain",
          component: () => import("../views/demo"),
          meta: { title: "demo", icon: "test" }
        }
      ]
    },
    {
      path: "/home",
      name: "home",
      component: Layout,
      redirect: "/home/main",
      meta: { title: "多级首页", icon: "home" },
      children: [
        {
          path: "main",
          component: Home,
          meta: { title: "项目一", icon: "home" }
        },
        {
          path: "main",
          component: Home,
          meta: { title: "项目二", icon: "home" }
        },
        {
          path: "main",
          component: Home,
          meta: { title: "项目三", icon: "home" }
        },
        {
          path: "main",
          component: Home,
          meta: { title: "项目四", icon: "home" }
        }
      ]
    }
  ]
});
