import Vue from "vue";
import Router from "vue-router";
import Login from "../views/login/login.vue";
import Layout from "../views/layout/Layout.vue";

Vue.use(Router);
const siderBarRoutes = [
  {
    path: "/",
    name: "XX管理平台",
    component: Layout,
    redirect: "/home",
    meta: { title: "home", icon: "home" },
    children: [
      {
        path: "/home",
        name: "首页",
        component: () => import("../views/home/Home.vue")
      },
      {
        path: "/demo",
        name: "商品类(demo测试)",
        component: () => import("../views/demo/index.vue"),
        redirect: "/demo1-1",
        children: [
          {
            path: "/demo1-1",
            name: "列表1(demo1-1)",
            component: () => import("../views/demo/demo1-1.vue")
          },
          {
            path: "/demo1-2",
            name: "demo1-2",
            component: () => import("../views/demo/demo1-2.vue")
          },
          {
            path: "/demo1-3",
            name: "demo1-3",
            component: () => import("../views/demo/demo1-3.vue")
          }
        ]
      }
    ]
  },
  


];
const constantRouter = [
  //siderBar组件遍历该路由，在数组中位置请勿改变
  ...siderBarRoutes,
  { path: "/login", name: "login", component: Login },
  {
    path: "*",
    name: "404",
    component: () => import("../views/404")
  }
];

export default new Router({
  routes: constantRouter
});
